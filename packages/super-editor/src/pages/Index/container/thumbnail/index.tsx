import { FC, useEffect, memo } from 'react';
import { DragSourceMonitor, useDrag } from 'react-dnd';
import { ComJsonType } from '../editorLeft';
import eventbus from '@/util/eventbus';
import './index.less';

interface ThumbnailProps {
  compInfo: ComJsonType;
  currentCacheCopm: ComJsonType[];
  setCurrentCacheCopm: Function;
}

/**
 * @file 组件缩略图
 */
const Thumbnail: FC<ThumbnailProps> = ({
  compInfo,
  currentCacheCopm,
  setCurrentCacheCopm,
}) => {
  const [{ isDragging }, drag] = useDrag(
    {
      item: compInfo,
      type: 'comp',
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor: DragSourceMonitor) => {
        const occupantsIndex = currentCacheCopm.findIndex(
          (compItem) => compItem.name === 'occupants',
        );

        if (monitor.didDrop()) {
          // 如果成功放入目标容器，则以真正的comp替代占位元素
          currentCacheCopm.splice(occupantsIndex, 1, item);
          //@ts-ignore 更新预览项目组件
          document.querySelector('#preview').contentWindow.postMessage({ currentCacheCopm }, '*');
        } else {
          // 没有放置目标容器中且拖拽结束，删除占位元素
          currentCacheCopm.splice(occupantsIndex, 1);
        }
        // 关闭画布涂层
        eventbus.emit('watchDragState', false);
        setCurrentCacheCopm([...currentCacheCopm]);
      },
    },
    [currentCacheCopm, setCurrentCacheCopm],
  );

  useEffect(() => {
    if (isDragging) {
      // 开启画布涂层
      eventbus.emit('watchDragState', true);
      setCurrentCacheCopm([
        {
          name: 'occupants',
          description: '放到这里',
        },
        ...currentCacheCopm,
      ]);
    }
  }, [isDragging]);

  return (
    <div ref={drag}>
      <img className="thum-preview" src={compInfo.pic} alt="组件缩略图" />
    </div>
  );
};

export default memo(Thumbnail);

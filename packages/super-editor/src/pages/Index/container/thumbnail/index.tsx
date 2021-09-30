import { FC, useEffect, memo } from 'react';
import { DragSourceMonitor, useDrag } from 'react-dnd';
import { ComJsonType } from '../editorLeft';
import './index.less';

interface ThumbnailProps {
  compInfo: ComJsonType;
  currentCacheCopm: ComJsonType[];
  setCurrentCacheCopm: Function;
}

/**
 * 组件缩略图
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

        // 1. 如果成功放入目标容器，则以真正的comp替代占位元素
        // 2. 没有放置目标容器中且拖拽结束，删除展位元素元素

        if (monitor.didDrop()) {
          console.log('为什么放置不上呢');

          currentCacheCopm.splice(occupantsIndex, 1, item);
        } else {
          currentCacheCopm.splice(occupantsIndex, 1);
        }
        setCurrentCacheCopm([...currentCacheCopm]);
      },
    },
    [currentCacheCopm, setCurrentCacheCopm],
  );

  /**
   * todo:  此处代码需要优化
   */
  useEffect(() => {
    if (isDragging) {
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

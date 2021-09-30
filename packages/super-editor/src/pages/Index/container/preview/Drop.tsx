import { FC, useRef, memo } from 'react';
import { useDrop } from 'react-dnd';
import { XYCoord } from 'dnd-core';
import { ComJsonType } from '../editorLeft';
import './index.less';

interface DropProps {
  index: number;
  compInfo: ComJsonType;
  setCurrentCacheCopm: Function;
  currentCacheCopm: ComJsonType[];
}

const Drop: FC<DropProps> = ({
  compInfo,
  index,
  setCurrentCacheCopm,
  currentCacheCopm,
}) => {
  const currentCompRef = useRef(null);
  const [, drop] = useDrop(
    {
      accept: 'comp',
      hover: (_, monitor) => {
        // 屏幕上矩形范围
        //@ts-ignore
        const hoverBoundingRect = currentCompRef.current!.getBoundingClientRect();
        // 中点垂直坐标
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        // 鼠标位置
        const clientOffset = monitor.getClientOffset();
        // 距顶部距离
        const hoverClientY =
          (clientOffset as XYCoord).y - hoverBoundingRect.top;

        // 向下拖动
        if (hoverClientY < hoverMiddleY) return;

        // 向上拖动
        if (hoverClientY > hoverMiddleY + 30) {
          // 移动占位标签
          const occupantsIndex = currentCacheCopm.findIndex(
            (compItem) => compItem.name === 'occupants',
          );
          currentCacheCopm.splice(occupantsIndex, 1);
          currentCacheCopm.splice(index, 0, {
            name: 'occupants',
            description: '放到这里',
          });
          setCurrentCacheCopm([...currentCacheCopm]);
        }
      },
    },
    [currentCacheCopm, setCurrentCacheCopm, index],
  );

  return (
    <div ref={drop} className={compInfo.name + ' ' + 'dropDemo'}>
      <div ref={currentCompRef} className="compInfo-container">
        {compInfo.description}
      </div>
    </div>
  );
};

export default memo(Drop);

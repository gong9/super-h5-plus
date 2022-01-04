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
        //@ts-ignore
        const hoverBoundingRect = currentCompRef.current!.getBoundingClientRect(); // 屏幕上矩形范围
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2; // 中点垂直坐标
        const clientOffset = monitor.getClientOffset(); // 鼠标位置
        const hoverClientY =
          (clientOffset as XYCoord).y - hoverBoundingRect.top; // 距顶部距离

        if (hoverClientY > hoverMiddleY + 30) {
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
    <div ref={drop} className={compInfo.name}>
      <div ref={currentCompRef}>
        <div
          style={{ height: `${compInfo.clientHeight}px` }}
          className="dropDemo"
        >
          {compInfo.description}
        </div>
      </div>
    </div>
  );
};

export default memo(Drop);

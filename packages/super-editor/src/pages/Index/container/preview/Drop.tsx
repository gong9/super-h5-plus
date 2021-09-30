import { FC } from 'react';
import { useDrop } from 'react-dnd';
import { debounce } from '../../../../util/util';
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
  const [, drop] = useDrop(
    {
      accept: 'comp',
      hover: () => {
        const occupantsIndex = currentCacheCopm.findIndex(
          (compItem) => compItem.name === 'occupants',
        );
        // 随着hover移动占位
        currentCacheCopm.splice(occupantsIndex, 1);
        currentCacheCopm.splice(index, 0, {
          name: 'occupants',
          description: '放到这里',
        });
        setCurrentCacheCopm([...currentCacheCopm]);
      },
    },
    [index, setCurrentCacheCopm],
  );

  return (
    <div ref={drop} className={compInfo.name}>
      {compInfo.description}
    </div>
  );
};

export default Drop;

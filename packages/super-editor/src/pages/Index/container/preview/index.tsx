import { FC } from 'react';
import { useDrop } from 'react-dnd';
import Drop from './Drop';
import './index.less';
import { ComJsonType } from '../editorLeft';
interface PreViewProps {
  currentCacheCopm: ComJsonType[];
  setCurrentCacheCopm: Function;
}

let compNum = 0;
const PreView: FC<PreViewProps> = ({
  currentCacheCopm,
  setCurrentCacheCopm,
}) => {
  const [, drop] = useDrop({
    accept: 'comp',
  });

  return (
    <div className="preview" ref={drop}>
      <div className="clone-iframe">
        {currentCacheCopm.map((compInfo, index) => {
          return (
            // 因为会存在渲染相同组件的情况，故这里放弃diff优化
            <Drop
              currentCacheCopm={currentCacheCopm}
              setCurrentCacheCopm={setCurrentCacheCopm}
              key={++compNum}
              index={index}
              compInfo={compInfo}
            />
          );
        })}
      </div>
      {/* <iframe
        src="http://localhost:3000/"
        width="100%"
        scrolling="no"
        frameBorder="0"
        id="preview"
      ></iframe> */}
    </div>
  );
};

export default PreView;

import { FC } from 'react';
import { useDrop } from 'react-dnd';
import './index.less';
import { ComJsonType } from '../editorLeft';
interface PreViewProps {
  currentCacheCopm: ComJsonType[];
}

let compNum = 0;
const PreView: FC<PreViewProps> = ({ currentCacheCopm }) => {
  const [, drop] = useDrop({
    accept: 'comp',
    hover: (item, monitor) => {
      // 拖拽时的让位处理
    },
  });

  return (
    <div className="preview" ref={drop}>
      <div className="clone-iframe">
        {currentCacheCopm.map((compInfo) => {
          return (
            // 因为会存在渲染相同组件的情况，故这里放弃diff优化
            <div key={++compNum} className={compInfo.name}>
              {compInfo.description}
            </div>
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

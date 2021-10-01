import { FC, memo, useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import classnames from 'classnames';
import Drop from './Drop';
import eventbus from '@/util/eventbus';
import { ComJsonType } from '../editorLeft';
import './index.less';

interface PreViewProps {
  currentCacheCopm: ComJsonType[];
  setCurrentCacheCopm: Function;
}

let compNum = 0;
const PreView: FC<PreViewProps> = ({
  currentCacheCopm,
  setCurrentCacheCopm,
}) => {
  const [showCloneViewState, changeShowCloneViewState] = useState(false);

  const [, drop] = useDrop({
    accept: 'comp',
  });

  eventbus.on('watchDragState', (dragState: boolean) => {
    changeShowCloneViewState(dragState);
  });

  return (
    <div className="preview" ref={drop}>
      <div
        className={classnames('clone-iframe', { hide: !showCloneViewState })}
      >
        {Array.isArray(currentCacheCopm) &&
          currentCacheCopm.length > 0 &&
          currentCacheCopm.map((compInfo, index) => {
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

      <iframe
        src="http://localhost:3000/#/preview"
        width="100%"
        scrolling="no"
        frameBorder="0"
        id="preview"
      ></iframe>
    </div>
  );
};

export default memo(PreView);

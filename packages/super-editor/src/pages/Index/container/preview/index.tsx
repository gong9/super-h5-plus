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
  iframeScrollY: number;
}

let compNum = 0; // 记录组件数量

const PreView: FC<PreViewProps> = ({
  currentCacheCopm,
  setCurrentCacheCopm,
  iframeScrollY,
}) => {
  const [showCloneViewState, changeShowCloneViewState] = useState(false);

  useEffect(() => {
    //@ts-ignore
    document.querySelector('.clone-iframe').style.top = `${-iframeScrollY}px`;
  }, [iframeScrollY]);

  const [, drop] = useDrop({
    accept: 'comp',
  });

  // 订阅[监听]是否开始拖拽，以便于判断是否展示irame浮层
  eventbus.on('watchDragState', (dragState: boolean) => {
    changeShowCloneViewState(dragState);
  });

  return (
    <div
      className="preview"
      ref={drop}
      onScroll={() => {
        console.log(111);
      }}
    >
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
        scrolling="yes"
        frameBorder="0"
        id="preview"
      />
    </div>
  );
};

export default memo(PreView);

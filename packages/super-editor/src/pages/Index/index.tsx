import { FC, useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// 错误处理
import '../../global/handleError';
import ErrorBoundary from '../../global/ErrorBoundary';

//@ts-ignore
import { schameMap } from 'super-template/build/bundle';
import EditorLeft from './container/editorLeft';
import EditorTop from './container/editorTop';
import PreView from './container/preview';
import EditorConfigForm from './container/editorConfigForm';

import './index.less';
interface EditorContainerProps {}

const EditorContainer: FC<EditorContainerProps> = () => {
  const [currentCacheCopm, setCurrentCacheCopm] = useState([]);
  const [compActiveIndex, setCompActiveIndex] = useState<number | null>(null);
  const [iframeScrollY, setIframeScrollY] = useState(0);

  /** 监听iframe 传过来的postmessage */
  useEffect(() => {
    window.addEventListener('message', ({ data }) => {
      const { currentCacheCopm, compActiveIndex, scrollY } = data;

      // notice postmessage 监听事件多次调用问题
      if (compActiveIndex !== undefined) {
        setCompActiveIndex(compActiveIndex);
      } else if (currentCacheCopm && !('compActiveIndex' in data)) {
        setCurrentCacheCopm(currentCacheCopm);
      } else if (scrollY === 0 || scrollY) {
        setIframeScrollY(scrollY);
      }
    });
  }, []);

  return (
    <div className="editor-container">
      <div className="editor-top">
        <EditorTop currentCacheCopm={currentCacheCopm} />
      </div>
      <div className="editor-body">
        <div className="editor-body-left">
          <EditorLeft
            schameMap={schameMap}
            setCurrentCacheCopm={setCurrentCacheCopm}
            currentCacheCopm={currentCacheCopm}
          />
        </div>
        <div className="editor-body-center">
          <PreView
            currentCacheCopm={currentCacheCopm}
            setCurrentCacheCopm={setCurrentCacheCopm}
            iframeScrollY={iframeScrollY}
          />
        </div>
        <div className="editor-body-right">
          {compActiveIndex !== null && (
            <EditorConfigForm
              compSchema={currentCacheCopm[compActiveIndex]}
              setCurrentCacheCopm={setCurrentCacheCopm}
              currentCacheCopm={currentCacheCopm}
              compActiveIndex={compActiveIndex}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="main">
      <ErrorBoundary>
        <DndProvider backend={HTML5Backend}>
          <EditorContainer />
        </DndProvider>
      </ErrorBoundary>
    </div>
  );
};

export default Main;

import { FC, useEffect, useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

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

  /** 预览  */
  const openPreView = useCallback(() => {
    // 实际逻辑，应该是先把组件配置信息保存到后端。在预览项目启动时取出渲染。但是我懒得再写一个后台了...
    window.location.href = `http://localhost:3000/?compInfo=${JSON.stringify(
      currentCacheCopm,
    )}#/view`;
  }, [currentCacheCopm]);

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
      <DndProvider backend={HTML5Backend}>
        <EditorContainer />
      </DndProvider>
    </div>
  );
};

export default Main;

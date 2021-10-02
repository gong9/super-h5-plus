import { FC, useEffect, useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

//@ts-ignore
import { schameMap } from 'super-template/build/bundle';

import EditorLeft from './container/editorLeft';
import EditorTop from './container/editorTop';
import PreView from './container/preview';

import './index.less';
interface EditorContainerProps {}

const EditorContainer: FC<EditorContainerProps> = () => {
  const [currentCacheCopm, setCurrentCacheCopm] = useState([]);

  useEffect(() => {
    window.addEventListener('message', ({ data }) => {
      setCurrentCacheCopm(data.currentCacheCopm);
    });
  }, []);

  /** 预览  */
  const openPreView = useCallback(() => {
    // 实际逻辑，应该是先把组件配置信息保存到后端。在预览项目启动时取出渲染
    window.location.href = `http://localhost:3000/?compInfo=${JSON.stringify(
      currentCacheCopm,
    )}#/view`;
  }, [currentCacheCopm]);

  return (
    <div className="editor-container">
      <div className="editor-top">
        <EditorTop openPreView={openPreView} />
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
          />
        </div>
        <div className="editor-body-right">配置区</div>
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

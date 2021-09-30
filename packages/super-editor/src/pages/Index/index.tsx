//@ts-nocheck
import { FC, useEffect, useState } from 'react';
import { schameMap } from 'super-template/build/bundle';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import EditorLeft from './container/editorLeft';
import PreView from './container/preview';

import './index.less';
interface EditorContainerProps {}

const EditorContainer: FC<EditorContainerProps> = () => {
  const [currentCacheCopm, setCurrentCacheCopm] = useState([]);

  useEffect(() => {
    //init data
  });

  return (
    <div className="editor-container">
      <div className="editor-top">可视化编辑器——superH5</div>
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

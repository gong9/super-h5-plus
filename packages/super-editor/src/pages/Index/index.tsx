//@ts-nocheck
import { FC, useEffect } from 'react';
import { schameMap } from 'super-template/build/bundle';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import EditorLeft from './container/editorLeft';
import PreView from './container/preview';

import './index.less';
interface EditorContainerProps {}

const currentCacheCopm = [];

const EditorContainer: FC<EditorContainerProps> = () => {
  useEffect(() => {
    //init data
  });

  return (
    <div className="editor-container">
      <div className="editor-top">可视化编辑器——superH5</div>
      <div className="editor-body">
        <div className="editor-body-left">
          <EditorLeft schameMap={schameMap} />
        </div>
        <div className="editor-body-center">
          <PreView />
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

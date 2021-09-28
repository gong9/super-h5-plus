import { FC } from 'react';
import { schameMap } from 'super-template/build/bundle';
import EditorLeft from './container/editorLeft';
import PreView from './container/preview';

import './index.less';
interface EditorContainerProps {}

const EditorContainer: FC<EditorContainerProps> = () => {
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

export default EditorContainer;

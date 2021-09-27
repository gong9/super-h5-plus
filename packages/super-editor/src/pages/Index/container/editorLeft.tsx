/**
 * 编辑左侧 组件选区
 */

import { FC } from 'react';
import { Collapse } from 'antd';
interface EditorLeftProps {}

const { Panel } = Collapse;
const EditorLeft: FC<EditorLeftProps> = () => {
  const callback = () => {
    console.log(1111);
  };
  return (
    <div className="editor-left">
      <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header="组件1" key="1">
          <div>这是组件1</div>
        </Panel>
        <Panel header="组件2" key="2">
          <div>这是组件2</div>
        </Panel>
        <Panel header="组件3" key="3">
          <div>这是组件3</div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default EditorLeft;

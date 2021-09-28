import { FC } from 'react';
import { Collapse } from 'antd';
import './index.less';


interface EditorLeftProps {
  schameMap: ComJsonType[];
}

interface ComJsonType {
  name: string;
  description: string;
  properties: unknown;
}
const { Panel } = Collapse;

const EditorLeft: FC<EditorLeftProps> = (props) => {
  // const callback = () => {
  //   console.log(1111);
  // };

  return (
    <div className="editor-left">
      <Collapse
        className="Collapse"
        defaultActiveKey={['1']}
        // onChange={callback}
        ghost={true}
      >
        {props.schameMap.map((item: any) => {
          return (
            <Panel header={item.name} key={item.name}>
              <div>{item.description}</div>
            </Panel>
          );
        })}
      </Collapse>
    </div>
  );
};

export default EditorLeft;

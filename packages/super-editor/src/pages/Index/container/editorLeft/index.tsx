import { FC } from 'react';
import { Collapse } from 'antd';
import Thumbnail from '../thumbnail';
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
              <Thumbnail compInfo={item} />
            </Panel>
          );
        })}
      </Collapse>
    </div>
  );
};

export default EditorLeft;

import { FC } from 'react';
import { Collapse } from 'antd';
import Thumbnail from '../thumbnail';
import './index.less';

interface EditorLeftProps {
  schameMap: ComJsonType[];
  currentCacheCopm: ComJsonType[];
  setCurrentCacheCopm: Function;
}
export interface ComJsonType {
  name: string;
  description: string;
  properties: unknown;
}
const { Panel } = Collapse;

const EditorLeft: FC<EditorLeftProps> = ({
  schameMap,
  currentCacheCopm,
  setCurrentCacheCopm,
}) => {
  return (
    <div className="editor-left">
      <Collapse
        className="Collapse"
        defaultActiveKey={['1']}
        // onChange={callback}
        ghost={true}
      >
        {schameMap.map((item: any) => {
          return (
            <Panel header={item.name} key={item.name}>
              <Thumbnail
                currentCacheCopm={currentCacheCopm}
                setCurrentCacheCopm={setCurrentCacheCopm}
                compInfo={item}
              />
            </Panel>
          );
        })}
      </Collapse>
    </div>
  );
};

export default EditorLeft;

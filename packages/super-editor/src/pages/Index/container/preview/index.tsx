import { FC } from 'react';
import { useDrop } from 'react-dnd';
import './index.less';
interface PreViewProps {}

const PreView: FC<PreViewProps> = () => {
  const [, drop] = useDrop({
    accept: 'comp',
  });
  return (
    <div className="preview" ref={drop}>
      <div className="clone-iframe"></div>
      <iframe
        src="http://localhost:3000/"
        width="100%"
        scrolling="no"
        frameBorder="0"
        id="preview"
      ></iframe>
    </div>
  );
};

export default PreView;

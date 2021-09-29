import { FC } from 'react';
import { DragSourceMonitor, useDrag } from 'react-dnd';

interface ThumbnailProps {
  compInfo: CompInfo;
}

interface CompInfo {
  description: string;
}

/**
 * 组件缩略图
 */
const Thumbnail: FC<ThumbnailProps> = ({ compInfo }) => {
  const [, drag] = useDrag({
    item: compInfo,
    type: 'comp',
  });
  return <div ref={drag}>{compInfo.description}</div>;
};

export default Thumbnail;

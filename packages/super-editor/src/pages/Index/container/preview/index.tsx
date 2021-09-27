import { FC, useState } from 'react';
interface PreViewProps {}

const PreView: FC<PreViewProps> = () => {
  return (
    <iframe
      src="http://localhost:3000/"
      width="100%"
      scrolling="no"
      frameBorder="0"
    ></iframe>
  );
};

export default PreView;

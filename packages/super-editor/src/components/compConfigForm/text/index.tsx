import { FC } from 'react';
import { Input } from 'antd';
interface SuperTextProps {
  defaultConfig: string;
}

const SuperText: FC<SuperTextProps> = ({ defaultConfig }) => {

  return (
    <div>
      <Input defaultValue={defaultConfig} />
    </div>
  );
};

export default SuperText;

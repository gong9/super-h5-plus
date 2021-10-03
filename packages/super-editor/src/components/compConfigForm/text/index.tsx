import { FC, useState } from 'react';
import { Input } from 'antd';
import { useEffect } from 'react';
interface SuperTextProps {
  defaultConfig: string;
  onChange: Function;
}
// ! notic defaultValue 不更新
const SuperText: FC<SuperTextProps> = ({ defaultConfig, onChange }) => {
  const [value, setValue] = useState(defaultConfig);

  useEffect(() => {
    setValue(defaultConfig);
  }, [defaultConfig]);

  return (
    <div>
      <Input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default SuperText;

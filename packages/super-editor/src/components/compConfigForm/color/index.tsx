/**
 * 颜色选择
 * todo 未完善
 */

import { FC, useState, useEffect } from 'react';
import { Input } from 'antd';
import { SketchPicker, ColorResult } from 'react-color';
import classnames from 'classnames';
import { color2rgba, rgbaObj2string } from '@/util/util';

import './index.less';

interface SuperColorProps {}

const SuperColor: FC<SuperColorProps> = () => {
  const [color, setColor] = useState<string>(() => color2rgba('000000', 1));
  const [hideSeletor, setHideSeletor] = useState(true);

  const changeColor = (color: ColorResult) => {
    setColor(rgbaObj2string(color.rgb));
  };

  return (
    <div className="super-color">
      <Input
        className="super-color-demo"
        style={{
          background: `${color}`,
        }}
        onFocus={() => setHideSeletor(false)}
        onBlur={() => setHideSeletor(true)}
      ></Input>

      <SketchPicker
        className={classnames('super-color-seletor', { hide: hideSeletor })}
        color={color}
        onChange={changeColor}
      />
    </div>
  );
};

export default SuperColor;

import { FC, useState, useEffect } from 'react';
import { SketchPicker, ColorResult } from 'react-color';
import classnames from 'classnames';
import { color2rgba, rgbaObj2string } from '@/util/util';

import './index.less';

interface SuperColorProps {
  onChange: Function;
  defaultConfig: string;
}

const SuperColor: FC<SuperColorProps> = ({ onChange, defaultConfig }) => {
  const [color, setColor] = useState<string>(() => color2rgba('000000', 1));
  const [hideSeletor, setHideSeletor] = useState(true);

  useEffect(() => {
    document
      .querySelector('.editor-body-right')
      ?.addEventListener('click', hideSeletorHandle);

    return () => {
      document
        .querySelector('.editor-body-right')
        ?.removeEventListener('click', hideSeletorHandle);
    };
  }, []);

  const changeColor = (color: ColorResult) => {
    onChange(rgbaObj2string(color.rgb));
    setColor(rgbaObj2string(color.rgb));
  };

  /** 颜色选择器的隐藏逻辑 */
  const hideSeletorHandle = (e: any) => {
    let isTagetNode = document
      .querySelector('.sketch-picker')
      ?.contains(e.target);

    if (!isTagetNode) {
      setHideSeletor(true);
    }
  };

  return (
    <div className="super-color">
      <div
        className="super-color-demo"
        style={{
          background: `${color}`,
        }}
        onClick={() => {
          setHideSeletor(false);
        }}
      ></div>

      <SketchPicker
        className={classnames('super-color-seletor', { hide: hideSeletor })}
        color={color}
        onChange={changeColor}
      />
    </div>
  );
};

export default SuperColor;

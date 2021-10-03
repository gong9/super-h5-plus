import * as template from "super-template/build/bundle";

/**
 * 解析json，进行组件渲染
 */

const renderJson = (json) => {
  const { compId, defaultConfig } = json;
  const Comp = template[compId];
  return <Comp defaultConfig={defaultConfig} />;
};
export default renderJson;

# super-h5 【可视化搭建 h5】

## 关于依赖安装
可先cd 到packages下的个个子项目 运行 npm i
然后退回项目根目录 yarn
再yarn start

由三个项目组成

- super-editor 【编辑器】
- super-show 【h5 展示】
- super-template 【组件物料】
  - react
  - vue
  - 其他

预览【本地】

yarn
yarn start
http://localhost:8000 【编辑器】

## 进度

1. 解决 rollup 中读取 schma 数据【✅】
2. 开始拖拽通信与 ifram 通信【✅】
3. 预览项目的拖拽排序、组件删除【进行中 10.2】
4. 编辑器样式优化（预览区、展示区。滚动条）【✅】
5. 编辑右上角添加保存&打开预览功能【进入排期 10.2 状态：前端已经 ✅】
6. 增加配置区域【基础流程✅，其他待优化&完善】
7. 增加几个比较真正的业务组件【进入排期】
8. 迁移我的几个业务组件【进入排期】
9. 支持 json 下载与导入【基本✅】
10. 将一些工具写成一个单独的包，比如 hooks utils server【进入排期】

最新需求 10.08-10.18

- 增加页面&弹框的交互（暂时规定不许出现弹框嵌套的情况）
- 支持查看保存过的历史页面

 2021.11.15 - 2021.12.01
 
 排期：错误处理的npm包 【没有时间写啊】

## 其他

1. 项目异常处理与错误边界 【加入需求池】
2. eslint 与 prettier 重新配置化 【加入需求池】

## 优化

1. 编辑器不使用个状态管理库太乱了，但是我这基本又不涉及后端操作。那么还是自己写一个 redux 吧 【加入计划】
2. 本来是不打算再写一个后台项目，但是目前来看这个是绕不过去了 【✅，暂时写了个简单的】
3. 物料中设计到中大图的一律懒加载、同时展示项目需要加lodding
4. 展示而非preview时，去除无用数据
## 此项目要达到的目标

- 除传统 h5 可视化拖拽功能之外 【✅】
- 支持多平台 （react、vue、小程序）【✅】
- 支持 json 下载与导入。导入 json 即得页面 【✅】
- 其他

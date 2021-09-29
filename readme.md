# super-h5

由三个项目组成

- super-editor
- super-show
- super-template
  - react
  - vue

怎么写组件的单元测试

组件库打包的时候就把组件信息整理出来
编辑

到我这就是完全是
editor 和 show 项目之间的通信问题

预览地址
http://localhost:8000/index

项目中的一些思考。
编辑器

每个组件对应一份 json 文件，交给浏览器去修改

### 难点

1. 在 rollup 中怎么读取我的 schma 数据[完成]
2. 开始拖拽通信与 ifram 通信[进行中，终于捋清思路，Writing code！！！]

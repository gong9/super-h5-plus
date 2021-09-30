# super-h5

由三个项目组成

- super-editor
- super-show
- super-template
  - react
  - vue


预览地址
http://localhost:8000/index


### 难点

1. 在 rollup 中怎么读取我的 schma 数据[完成]
2. 开始拖拽通信与 ifram 通信[进行中，终于捋清思路，Writing code！！！]

进度：拖拽与ifame通信

目前思路：
编辑器端还是使用react-dnd进行拖拽操作，不过在编辑器进行操作的时候。同时进行ifame通信。以数据驱动使得iframe进行通信

要点：
1. 怎么要知道编辑器拖拽放置目标的具体位置
思路：在irame每次完成渲染之后返回每一个组件的此时所占高度给编辑器，在编辑器iframe上层设置一个浮层。用于dnd拖拽时获取到此时在目标放置位置的具体位置

code优化
需要写的
- irame通信问题
- 总的组件数据放置在呢？
首先要回答总的组件数据放置在呢？就要先看组件数据的数据格式。现在看来它就是一个数组，可以先放到父组件上


## 此项目要达到的问题
- 除传统h5可视化拖拽功能之外
- 支持多平台 （react、vue、小程序）
- 支持json下载与导入。导入json即得页面
- 其他
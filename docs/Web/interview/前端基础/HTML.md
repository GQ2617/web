# HTML

## 01-html标签的类型及作用

1. DOCTYPE
   - 它是指示web浏览器关于页面使用哪个HTML版本进行编写的指令
2. head
   - 它是所有头部元素的容器，绝大多数头部标签的内容不会显示给读者
3. body
   - 用于定义文档的主体，包含了文档的所有内容
   - 该标签支持html的全局属性和事件属性

## 02-H5新特性

1. 语义化标签：header,footer,nav,article,section
2. 表单控件：calendar,data,time,email,url,search
3. 媒体播放：video和audio
4. 本地存储：localStorage和sessionStorage

## 03-语义化标签的优点

1. 易于用户阅读，样式丢失的时候能让页面呈现清晰的结构
2. 有利于SEO，搜索引擎根据标签来确定上下文和各个关键字的权重
3. 方便屏幕阅读器解析，如盲人阅读器根据语义渲染网页
4. 有利于开发和维护，语义化更具可读性，代码更好维护

## 04-audio标签的API

1. 常用属性
   - src：播放的音乐url地址
   - preload：预加载（在页面被加载时进行加载或者说缓冲音频），使用autoplay，则该属性失效
   - loop：循环播放
   - controls：是否显示默认控制条（控制按钮）
   - autoplay：自动播放
2. 常用函数
   - load()：加载音视频
   - play()：加载并播放音视频
   - pause()：暂停处于播放状态的音频




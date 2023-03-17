# CSS

## 01-继承

1. 有继承性的属性
   - 字体系列属性：font
   - 文本系列属性：text
   - 元素可见性：visibility
   - 表格布局属性：border-spacing、boder-collapse
   - 列表布局属性：list-style
   - 光标属性：cursor
   - 生成内容属性：quotes
   - 页面样式属性
   - 声音样式属性
2. 无继承性的属性
   1. 元素可见性：display
   2. 文本属性：text-shadow,white-space,vertical-align
   3. 盒子模型属性
   4. 背景属性
   5. 定位属性
3. 所有元素可以继承的属性：cursor，visibility
4. 内联元素可以继承的属性：字体系列，文本系列(除text-indent,text-align)
5. 块级元素可以继承的属性：text-indent，text-align

## 02-css预处理工具

1. 概念
   - css预处理器是一个能让开发者通过预处理器自己独有的语法来生成css的程序
   - css预处理器种类繁多，三种主流预处理器：Sass、Less、Stylus
2. 比较
   - 功能相同，语法上略有差异

## 03-盒子模型

1. 概念：
   - css盒子模型本质上是一个盒子，封装周围的HTML元素，有content,padding,boder,margin四个属性
   - 分类：标准盒子模型与IE盒子模型
2. 标准盒子模型
   - content+border+padding+margin
   - box-sizing:content-box
3. 怪异盒子模型
   - content+margin
   - box-sizing:border-box

## 04-BFC

1. BFC
   1. 概念：BFC是CSS布局的一个概念，是一块独立的渲染区域，里面的元素不会影响到外部的元素
   2. 什么情况下创建出BFC
      - 根元素
      - 浮动
      - 绝对定位
      - 行内块元素
      - 表格单元
      - 弹性盒
# Webpack

## 01-对webpack的理解

1. 概述
   - webpack是一个模块打包工具，可以使用webpack管理模块
   - 在webpack看来，项目里所有资源皆是模块，分析模块间的依赖关系，最终编译输出模块为HTML、CSS、JavaScript以及各种静态文件，让开发过程更高效
2. webpack的能力
   - 编译代码能力，提高效率，解决浏览器兼容问题
   - 模块整合能力，提高性能，可维护性，解决浏览器频繁请求文件的问题
   - 万物皆可模块能力，支持不同种类的前端模块类型，统一的模块化方案，所有资源文件的加载都可以通过代码控制

## 02-webpack的打包流程

1. 初始化：启动构建，读取和合并配置参数，加载Plugin，数理化Complier
   - 合并shell和配置文件的参数并且实例化Complier对象
   - 加载插件
   - 处理入口
2. 编译：从Entry出发，针对每个Module串行调用对应的Loader去翻译文件内容，再找到该Module对应的Module，递归地进行编译处理
3. 输出：对编译后的Module组合成Chunk，把Chunk转换成文件，输出到文件系统

## 03-webpack中常见的Loader

1. CSS
   - style-loader，用于将css编译完成的样式，挂载到页面的style标签上
   - css-loader，打包处理css文件，需配合style-loader使用
   - less-loader，解析less
   - sass-loader，解析sass
2. JS
   - ts-laoder，解析将typescript转换成javascript
   - babel-loader，将ES6转换成ES5
   - eslint-loader，用于检查代码是否符合规范，是否存在语法错误
3. 静态资源
   - url-loader，解析图片类型资源，可指定大小，若图片大小小于指定大小，则嫁给你图片转换为base64格式字符串，再将字符串打包到js文件
   - file-loader，分发文件到 output 目录并返回相对路径
   - json-loader，解析json文件
   - image-loader：加载并且压缩图片文件

## 04-webpack中常见的Plugin

1. html-webpack-plugin：打包结束后，自动生成一个html文件，并把打包生成的js模块引入到该html中
2. mini-css-extract-plugin：提取css到一个单独的文件中
3. compression-webpack-plugin：实现gzip压缩，可以很大程度减少包的大小

## 05-利用webpack优化前端性能

1. 代码压缩

   - JS代码压缩：terser-webpack-plugin
   - CSS代码压缩：minimizer-webpack-plugin
   - HTML代码压缩：html-webpack-plugin
   - 文件大小压缩：compression-webpack-plugin
   - 图片压缩

2. 代码优化

   - Tree Shaking：删除代码中未被引用的代码

   - 代码分离：将代码分离到不同的bundle中，按需加载文件

     ```js
     module.exports = {
         ...
         optimization:{
             splitChunks:{
                 chunks:"all"
             }
         }
     }
     ```

     


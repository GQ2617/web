# CSS

## 01-滚动条样式

```js
body::-webkit-scrollbar {
  /*滚动条整体样式*/ /*高宽分别对应横竖滚动条的尺寸*/
  width: var(--scrollbar-width, 10px);
  height: var(--scrollbar-height, 5px);
}

body::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: var(--scrollbar-thumb-radius, 10px);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: var(--scrollbar-thumb-bgColor, rgba(204, 204, 204, 1));
}

body::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  border-radius: var(--scrollbar-track-radius, 10px);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: var(--scrollbar-track-bgColor, rgba(255, 255, 255, 1));
}
```
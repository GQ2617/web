# JavaScript

## 01-监听屏幕宽度，实现rem布局

```js
window.addEventListener("resize", handleWindow);
function handleWindow() {
    var currClientWidth = document.documentElement.clientWidth
    var html_ = document.getElementsByTagName("html")[0];
    html_.style.fontSize = currClientWidth / 120 + "px";
    flag.value = false;
}
```

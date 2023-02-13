# Vue

## 01-Vue路由跳转至新页面
- vue路由跳转默认在当前页，跳转至新页面可采用router.resolve实现
```js
const url = router.resolve({
    name: "",
    query: {},
});
window.open(url.href, "_blank");
```
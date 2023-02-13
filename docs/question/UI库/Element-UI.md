# Element-UI

## 01-ElementPlus分页器居中
```js
.el-pagination {
  justify-content: center;
}
```

## 02-ElementPlus表格内容或表头居中
1. 表头居中
```js
<el-table
    :data="majorInfoList"
    :header-cell-style="{ textAlign: 'center' }"
>
```

2. 表格居中
- 全部单元格居中
```js
<el-table
    :data="majorInfoList"
    :cell-style="{ textAlign: 'center' }"
>
```
- 某个单元格居中
```js
<el-table-column prop="" label="" align="center" />
```
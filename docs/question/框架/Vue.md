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

## 02-文件上传
- `<template>`
```html
<el-dialog title="批量导入" :visible.sync="uploadVisible" width="400px">
    <el-upload class="upload-demo" drag action="#" multiple :before-upload="beforeUpload">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传excel文件，且不超过500kb</div>
    </el-upload>
    <div slot="footer" class="dialog-footer">
        <el-button @click="uploadVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmUpload">确 定</el-button>
    </div>
</el-dialog>
```
- `<script>`
```js
beforeUpload(file) {
    this.file = file
    return false
},

async confirmUpload() {
    let fd = new FormData()
    fd.append('file', this.file)
    const flag = this.file.name.split('.')[1] === 'xlsx' ? true : false
    console.log(flag);
    if (flag) {
        const res = await test.reqUploadExcel(this.schoolId, this.$route.query.examId, fd)
        console.log(res);
        if (res.data.code == 200) {
            this.$message.success('批量导入成绩成功')
            this.uploadVisible = false
        } else {
            this.$alert(res.data.msg, "提示", {
                confirmButtonText: "确定",
            });
        }
    }
},
```

## 03-文件模板下载
- `<template>`
```js
<a :href="execlUrl" download="成绩导入模板" style="color:#000000">下载模板</a>
```
- `<script>`
```js
async downloadTemplate() {
    const res = await test.reqDownLoadTemp()
    this.execlUrl = res.data.data
}
```
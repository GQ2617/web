# Git

## 01-Git发生冲突的场景

1. 概述
   - 场景：一般是两个人同时更改了同一文件的同一地方，这时合并就会报冲突
   - 解决：将合并失败的文件手动编辑为我们希望的内容，再提交

## 02-Git常用命令

1. 配置
   - git config --global user.name "[name]"
   - git config --global user.email "[email]"
2. 启动
   - git init：初始化git代码库
   - git clone url：下载一个项目和它的整个代码历史
3. 日常基本操作
   - git add .：提交全部文件修改到暂存区
   - git status：查看当前分支状态
   - git commit -m "注释"：提交代码到本地仓库，并提交注释
   - git commit -v：提交时显示所有diff信息
   - git pull <远程仓库名><远程分支名>：拉取远程仓库的分支与本地当前分支合并
   - git pull <远程仓库名><远程分支名>:<本地分支名>：拉取远程仓库的分支与本地某个分支合并
   - 提交注释信息的格式规则：
     - feat：新特性，添加功能
     - fix：修改bug
     - refactor：代码重构
     - docs：文档修改
     - style：代码格式修改
     - test：测试用例修改
     - chore：其他修改，如构建按流程、依赖管理
4. 分支操作
   - git branch：查看本地所有分支
   - git branch -r：查看远程所有分支
   - git branch -a：查看本地和远程所有分支
   - git branch <新分支名>：新建分支
   - git branch -D <分支名>：删除本地某个分支
   - git merge <分支名>：合并分支
   - git merge --abort：合并分支出现冲突，取消合并，一切回到合并前的状态
   - git checkout <分支名>：切换到本地某个分支
   - git checkout <远程库名>/<分支名>：切换到线上某个分支
   - git checkout -b <新分支名>：新建分支，并切换到新分支
5. 远程同步
   - git remote -v： 查看远程版本库信息
   - git remote show < remote >：查看指定远程版本库信息
6. 撤销
   - git checkout [file]：恢复暂存区的指定文件到工作区
   - git checkout .：恢复暂存区的所有文件到工作区
   - git reset --hard：重置暂存区与工作区，与上一次commit保持一致
   - git revert [commit]：后者的所有变化都将被前者低效，并且应用到分支


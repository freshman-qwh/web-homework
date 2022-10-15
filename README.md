# web-page
the homework of web class
保持更新
git方法：
1、在所需git的文件目录下右键鼠标git bash here，输入git init创建一个.git文件
2、使用以下命令配置信息，最好与github账号的一样
   git config --global user.name "用户昵称"
   git config --global user.email "用户邮箱"
3、一步步添加文件git add ./添加的文件名，或者全部添加git add ./
   添加完文件需要git commit -m "说明信息"，就是加个备注解释一下
4、有需要的话可以用git status查看一下文件更改状态，不做解释网上自己学
5、git branch添加分支，网上自己学，可以不用，交个作业不是很需要新建分支
6、github新建仓库或是已有仓库，复制https的仓库地址，
   git remote add origin 仓库链接地址
7、git push 云端仓库地址 master
   或者git push -u origin master（如果第6步链接过了）
   第一次提交的话现在需要github身份验证令牌，点击头像选择Settings，左侧选择Developer settings
   Personal access tokens，generate new token，勾选第一个repo（应该吧），
   生成后复制令牌存起来，不然以后看不到了得重新生成
8、然后第一次上传就完成了。
9、后续上传的话一般重复3、4步，还需要额外git pull origin master，再执行第7步。


参考：https://blog.csdn.net/u011332271/article/details/105320697
      https://blog.csdn.net/weixin_53072519/article/details/122824860

遇到问题自行百度

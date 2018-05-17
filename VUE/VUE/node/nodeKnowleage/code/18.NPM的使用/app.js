// 怎样使用npm包管理工具 npm install <jquery>

// no such file or directory, open '/Users/wuhaiyang/package.json'
// 在装任何模块/第三方库/框架之前,首先要安装package.json文件

// 1. npm init  2.输入名字(全小写) 3.回车 4.之后的都回车
// 便捷安装package.json方法  npm init --yes

// 安装模块方法: npm install <Module Name>
// 卸载模块方法: npm uninstall <Module Name>

// 安装模块方法在package中记录所依赖的模块:
// npm install <Module Name> --save
// 卸载模块方法并删除package记录所依赖的模块:
// npm uninstall <Module Name> --save

// 安装模块方法在package中记录开发人员在当前项目中所依赖的模块:
// npm install <Module Name> --save-dev

// 卸载模块方法并删除package记录开发人员在当前仙姑中所依赖的模块:
// npm uninstall <Module Name> --save-dev
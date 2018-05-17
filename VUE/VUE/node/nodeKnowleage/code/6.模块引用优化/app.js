// module : 模块

/*
*   Node: 推崇是模块化编程, 多个任务由多个模块来完成
*   文件类型: 能够模块化的文件有两种--- js文件, json文件
* */
// 自己创建的文件,必须要使用./找到,不需要加后缀
var movies = require('./movies');

// movies();
// movies.suibian();
// movies.weddy();
// console.log(movies.pi);

movies.printHenry();
movies.printWeddy();
console.log(movies.pi);



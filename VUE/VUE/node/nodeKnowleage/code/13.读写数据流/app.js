// 读取数据流
var fs = require("fs");

// 创建读取的数据流对象
var myReadStream = fs.createReadStream(__dirname + "/readMe.txt","utf8");
// var time = 0;
// 数据流对象注册data事件,(必须是data事件),然后会给我们返回对应的数据
// myReadStream.on("data",function (chunk) {
//     time++;
//     console.log("============正在接收第" + time + "次数据==========");
//     console.log(chunk);
// });

// 创建写入的数据流对象

var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");
// myWriteStream.write("Hello World!");

// 将可读流中的数据,读取出来后,写入到可写流中
myReadStream.on("data",function (chunk) {
    myWriteStream.write(chunk);
});
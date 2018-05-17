// 使用管道 pipes
var http = require("http");
var fs = require("fs");

// 创建读取流对象
var myReadStream = fs.createReadStream(__dirname + "/readMe.txt");
// 创建写入流对象
// var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");
// 读取流对象调用pipe,输出到写入流文件中
// myReadStream.pipe(myWriteStream);

// 1.用户访问服务器 127.0.0.1:3333
// 2.创建本地服务器
// 3.使用服务对象监听 127.0.0.1:3333 地址
// 4.在服务回调函数中,写响应头
// 5.将readMe.txt中的内容读取出来,并且输出到请求的浏览器页面中

// 创建服务器
var server = http.createServer(function (req,res) {
    // console.log("地址: " + req.url);
    res.writeHead(200,{"Content-Type":"text/plain"});
    myReadStream.pipe(res);
});

server.listen(3333,"127.0.0.1");

console.log("server is running...");

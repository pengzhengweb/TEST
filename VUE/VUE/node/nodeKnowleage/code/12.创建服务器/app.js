// 创建服务器
// 引入http模块
var http = require("http");

// 通过http创建服务对象
var server = http.createServer(function (req,res) {
    console.log("客户端向服务器发送请求的地址是: " + req.url);
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello Everybody! Welcome to Lanou!");
});

server.listen(1234,"127.0.0.1");

console.log("server is running....");



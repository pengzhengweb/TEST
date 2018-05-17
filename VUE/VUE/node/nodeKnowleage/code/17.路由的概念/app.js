// 引入模块
var fs = require('fs');
var http = require("http");
// 创建服务对象
var server = http.createServer(function (req,res) {
    if (req.url !== "/favicon.ico"){
        if(req.url == "/home" || req.url=="/"){
            res.writeHead(200,{"Content-Type":"text/html"});
            fs.createReadStream(__dirname+"/index.html").pipe(res);
        }else if(req.url == "/about"){
            res.writeHead(200,{"Content-Type":"text/html"});
            fs.createReadStream(__dirname+"/about.html").pipe(res);
        }else if(req.url == "/content"){
            res.writeHead(200,{"Content-Type":"text/html"});
            fs.createReadStream(__dirname+"/content.html").pipe(res);
        }else {
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end("404网页请求失败");
        }
    };
})
// 监听端口号
server.listen(8888,"127.0.0.1");
console.log("server is running....");
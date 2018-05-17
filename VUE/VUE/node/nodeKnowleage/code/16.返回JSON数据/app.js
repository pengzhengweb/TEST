var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req,res) {
    // 如果当前的url不是/favicon.ico,那么执行代码块
    if (req.url !== "/favicon.ico"){
        // 当前返回的额数据格式为html
        res.writeHead(200,{"Content-Type":"application/json"});
        // res.writeHead(200,{"Content-Type":"text/html"});
        // res.writeHead(200,{"Content-Type":"text/plain"});

        var obj = {
            name: "henry",
            age: 30,
            gender: "male"
        };

        res.end(JSON.stringify(obj));
    }
});
server.listen(8888,"127.0.0.1");
console.log("server is running....");
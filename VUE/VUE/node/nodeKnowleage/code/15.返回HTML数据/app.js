var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req,res) {
    // 如果当前的url不是/favicon.ico,那么执行代码块
    if (req.url !== "/favicon.ico"){
        console.log("地址是: " + req.url);
        // 当前返回的数据格式为纯文本
        // res.writeHead(200,{"Content-Type":"text/plain"});
        // 当前返回的额数据格式为html
        res.writeHead(200,{"Content-Type":"text/html"});
        var myReadStream = fs.createReadStream(__dirname + "/index.html");
        myReadStream.pipe(res);
    }
});
server.listen(8888,"127.0.0.1");
console.log("server is running....");
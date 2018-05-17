var fs = require("fs");

// 删除文件
// fs.unlink("writeMe2.txt");

// 创建文件夹 同步
// fs.mkdirSync("stuff");

// 删除文件夹
// fs.rmdirSync("stuff");

// 创建文件夹 异步 并 读写文件
fs.mkdir("stuff",function () {
    fs.readFile("readMe.txt",function (err,data) {
        if (err) throw err;
        fs.writeFile("./stuff/writeMe2.txt",data);
    });
});

// 删除文件 异步 并删除文件夹
fs.unlink("./stuff/writeMe2.txt",function () {
    fs.rmdir("stuff");
});

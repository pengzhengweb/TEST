// express 基于node.js的前端开发框架
// 引入express模块
var express = require("express");
// 使用变量接收express返回回来的对象
var app = express();

// 设置当前的视图引擎为ejs
app.set("view engine","ejs");

// 设置服务器可以正常识别静态文件css
app.use("/public",express.static("public"));

app.get("/",function (req,res) {
    res.render("index");
});

app.get("/contact",function (req,res) {
    res.render("contact");
});

// 路由参数
app.get("/profile",function (req,res) {
    var data = [
        {name:["Henry","John","Tim"],age:30},
        {name:["Bucky","Brad"],age:20},
        {name:["Emily","Eva"],age:70}
    ];
    res.render("profile",{item:data});
});

app.listen(3333);

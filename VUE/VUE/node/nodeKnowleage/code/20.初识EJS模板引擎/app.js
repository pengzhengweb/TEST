// express 基于node.js的前端开发框架
// 引入express模块
var express = require("express");
// 使用变量接收express返回回来的对象
var app = express();

// 设置当前的视图引擎为ejs
app.set("view engine","ejs");

app.get("/",function (req,res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/contact",function (req,res) {
    res.send("asdfasdfa");
});

// 路由参数
app.get("/profile/:id",function (req,res) {
    res.render("profile",{id:req.params.id});
});

app.listen(3333);

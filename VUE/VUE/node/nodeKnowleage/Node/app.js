// 搭建服务器

var express = require('express');

var app = express();

var todoController = require('./controllers/todoController');

// 设置ejs引擎
app.set('view engine','ejs');

// 设置样式为静态文件
app.use(express.static('./public'));

// 调用todoController
todoController(app);

app.listen('3000');

// app : 服务器

// todoController.js:  处理逻辑
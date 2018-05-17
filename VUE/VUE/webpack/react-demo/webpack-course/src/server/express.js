// 启动一个服务器
import express from 'express';
import path from 'path';

// 创建服务器
const server = express()

// 配置启动路径
const staticMiddleware = express.static("dist")

// 监听代码
const webpack = require("webpack")
const config = require("../../config/webpack.dev.js")

const compiler = webpack(config)

require("webpack-mild-compile")(compiler)

const webpackDevMiddleware = require("webpack-dev-middleware")(compiler,config.devServer)

// 热更新
const webpackHotMiddleware = require("webpack-hot-middleware")(compiler)

server.use(webpackDevMiddleware)

server.use(webpackHotMiddleware)

server.use(staticMiddleware)
debugger
server.listen(8080,() => {
  console.log("server is running....")
})
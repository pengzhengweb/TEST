function printHenry() {
    console.log("Henry最喜欢的电影是小电影!");
}

function printWeddy() {
    console.log("Weddy最喜欢的电影是大电影!");
}

module.exports.suibian = printHenry;
module.exports.weddy = printWeddy;

// 考虑并实践: 怎样使用工厂模式,将当前的代码优化

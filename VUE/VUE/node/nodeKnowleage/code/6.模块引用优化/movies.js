function printHenry() {
    console.log("Henry最喜欢的电影是小电影!");
}

function printWeddy() {
    console.log("Weddy最喜欢的电影是大电影!");
}

var pi = 3.142;

// module.exports 代表将当前的方法/属性公开给外部
// module.exports = printHenry;
// module.exports = printWeddy;

// 由于上一种方法,只能存储一个属性/方法,所以赋值对应的属性
// module.exports.suibian = printHenry;
// module.exports.weddy = printWeddy;
// module.exports.pi = pi;


module.exports = {
    printHenry: printHenry,
    printWeddy: printWeddy,
    pi: pi
};
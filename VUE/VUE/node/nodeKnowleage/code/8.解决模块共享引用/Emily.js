// 接收require返回的方法
var emily = require('./movies');
// 接收方法返回的对象
var emilyMovie = emily();

emilyMovie.favMovies = "卧虎藏龙";

console.log(emilyMovie.favMovies);

// 对象的引用
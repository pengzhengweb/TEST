// 模块: 分为两种 1.自定义模块(movie.js) 2.系统模块(events)
/*
*   自定义模块: 引入时必须要加路径
*   系统模块: 引入时直接写名字
* */
// 事件模块
var events = require("events");

// element.on("click",callback); // jq的事件格式

// 实例化事件对象
var myEmitter = new events.EventEmitter();

// 注册事件
// myEmitter.on("事件名称","回调函数");
myEmitter.on("someEvent",function (msg) {
    console.log(msg);
});

// 触发事件
myEmitter.emit("someEvent","查看事件触发时,是否可以打印传递过去的参数!");

// util(使用工具)
const util = require("util");

var Person = function (name) {
    this.name = name;
}
// 通过使用工具,让Person类继承与事件类
util.inherits(Person,events.EventEmitter);

// 创建对象
var pengfei = new Person("鹏飞");
var wangfan = new Person("王帆");
var chunbo = new Person("波波");

var people = [pengfei,wangfan,chunbo];

// 遍历数组,并将数组中每个元素都注册事件
people.forEach(function (person) {
    person.on("sayHi",function (msg) {
        console.log(person.name + "对大家说:" + msg);
    });
})
// 触发事件
pengfei.emit("sayHi","大家好!");
wangfan.emit("sayHi","我很好!");
chunbo.emit("sayHi","Good Afternoon!");




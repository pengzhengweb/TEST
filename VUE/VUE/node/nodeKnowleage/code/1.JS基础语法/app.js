var person = {
    firstName: "Haiyang",
    lastName: "Wu",
    age: 30
};

// console.log(person);

// 复习函数
function addNumber(a,b) {
    return a + b;
}

// console.log(addNumber(2,3));

function worthless() {
    // return undefined;
}

// console.log(worthless());

function noNameFunc () {
    console.log("有名字的函数");
}

var noNameFunc = function () {
    console.log("没有名字的函数");
}

// noNameFunc();

// setTimeout(function () {
//     console.log("3秒过去了!");
// },3000)

var time = 0;

var timer = setInterval(function () {
    time += 2;
    console.log(time + " 秒过去了!");
    if (time >= 6){
        clearInterval(timer);
    }
},2000);

// alert(111); 崩掉
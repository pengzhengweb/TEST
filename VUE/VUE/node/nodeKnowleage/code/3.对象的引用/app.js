// 对象的引用
var Henry = {
    favFood: "bacon",
    favMovie: "摔跤吧,爸爸"
};

var Person = Henry;

Person.favFood = "Banana";

// Person和Henry使用的是同一个地址,所以内容会发生变化
console.log(Henry.favFood);

// 理解this的指向
var Bucky = {
    printFirstName: function () {
        console.log("My name is Bucky!");
        console.log(this === Bucky);
    }
}

Bucky.printFirstName();

function doSomethingWorthless() {
    console.log("worthless!");
    // 在浏览器中的顶级对象是---window
    // 在NodeJS中顶级对象是---global
    console.log(this === global);
}

doSomethingWorthless();
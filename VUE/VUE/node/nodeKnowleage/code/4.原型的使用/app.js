// 创建一个类
function User() {
    // 属性
    this.name = "";
    this.life = 100;
    // 方法
    this.giveLife = function (targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + "给" + targetPlayer.name + "加了1滴血");
    }
}

// 创建两个对象
var pengfei = new User();
var ninger = new User();

// 为两个对象赋值
pengfei.name = "鹏飞";
ninger.name = "宁儿";

// 用对象调用方法
pengfei.giveLife(ninger);

// 打印两个人的血量
console.log("鹏飞的血量是: " + pengfei.life);
console.log("宁儿的血量是: " + ninger.life);

// prototype 原型
User.prototype.uppercut = function (targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + "给" + targetPlayer.name + "减掉3滴血");
}
// 使用减血方法
ninger.uppercut(pengfei);

// 打印两个人的血量
console.log("鹏飞的血量是: " + pengfei.life);
console.log("宁儿的血量是: " + ninger.life);

// 为User类追加属性
User.prototype.magic = 500;
console.log(pengfei.magic);
console.log(ninger.magic);
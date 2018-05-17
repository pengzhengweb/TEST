/**
 *  Class
 *  万事皆对象
 */

// function Car(options){
//   this.title = options.title;
// }

// Car.prototype.drive = function(){
//   return "Vroom";
// }

// const car = new Car({title:"BMW"});
// // console.log(car);
// // console.log(car.drive());


// // 继承
// function Toyota(options){
//   Car.call(this,options);
//   this.color = options.color;
// }

// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;

// const toyota = new Toyota({color:"red",title:"Focus"});
// console.log(toyota);
// console.log(toyota.drive());


// es6
class Car{
  constructor({title}){
    this.title = title;
  }
  drive(){
    return 'vroom';
  }
}

// const car = new Car({title:"BMW"});
// console.log(car);
// console.log(car.drive());

class Toyota extends Car{
  constructor(options){
    super(options);
    this.color = options.color;
  }
}

const toyota = new Toyota({color:"red",title:"Focus"});

console.log(toyota);
console.log(toyota.drive());















 



 



 
 
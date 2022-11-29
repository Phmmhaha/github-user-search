// Let's see the terrible bugs in JS: 

const float = 98.99
console.log(typeof(float))
// number!!!

const test = null
console.log(typeof(test))
// object!!!
// typeof不能辨别 null & object

const text = /a/
console.log(typeof(text))
// object!!!
// regExr will reture an object or a function. 

console.log(parseInt('6'))  // 6
console.log(parseInt('6 块钱'))  // 6
console.log(parseInt(6.6))  // 6
console.log(parseInt('08', 10))  //0
console.log(parseInt('08', 2)) //0

console.log(typeof(NaN))  //number  // typeof(Nan) is a number!!...
console.log(NaN === NaN)  //false!!  //in JS NaN is not equal to NaN!

// isNaN() is also a bug. 
const result1 = isNaN('oops') // true!! but actually it's a string...
const result2 = isNaN(0) // false... but 0 is a number...
console.log(result1, result2)
// so isNaN is not exact actually. 

// isFinite()
// The best way to judge weather it is a number is function isFinite().
// isFinite() will firstly exclude NaN & Infinity. Then turn to a number to juade if it is a number. 

// switch(a):
// case a === 1 : console.log(1)
// break;
// case a === 2 : console.log(2)
// break;
// default: 
// console.log(3)





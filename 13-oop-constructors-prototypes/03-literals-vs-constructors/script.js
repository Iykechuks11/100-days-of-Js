const strLit = 'Hello';
const strObj = new String('Hello');

console.log(strLit);
console.log(strObj);

// Boxing - Literal -Obj
console.log(strLit.toLowerCase());
console.log(strLit[0]);

// Unboxing - Obj - Literal
console.log(strObj.valueOf(), typeof strObj.valueOf());

console.log(strLit.constructor);
console.log(strObj.constructor);

console.log(strLit instanceof String);
console.log(strObj instanceof String);

// Other types
const num1 = 23;
const num2 = new Number('23');

console.log(num1);
console.log(num2);

console.log(num1, typeof num1);
console.log(num2, typeof num2);
console.log(num2.valueOf(), typeof num2.valueOf());

// Functions - Version 1
const funcLit = function (x) {
    return x * x;
};

console.log(funcLit, typeof funcLit);
console.log(funcLit(5));

// Version 2
const funcObj = new Function('x', 'return x * x');
console.log(funcObj(3));

// Object
const obj1 = {};

const obj2 = new Object();

console.log(obj1, obj2);
console.log(typeof obj1, typeof obj2);

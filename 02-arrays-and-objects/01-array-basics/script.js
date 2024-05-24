let x;

const numbers = new Array(2, 3, 4, 2);

x = numbers;

const fruits = new Array('apple', 'grapes', 'oranges');

// Added a new item to the end of our list
fruits[fruits.length] = 'pineapple';

x = fruits;

console.log(x);
let x;

const  fruits = ['apples'];

const berries = ['blueberry'];

// fruits.push(berries);

x = [fruits, berries];

x = fruits.concat(berries);

// x = fruits + berries;
// Spread operator
x = [...fruits, ...berries];

// Flatten arrays
const arr = [1, 2, 3, [4, 5], 6, [7, 8]];

x = arr.flat();

// Static methods on array objects
x = Array.isArray('Hello');

x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);
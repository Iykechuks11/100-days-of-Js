let x;

const arr = [23, 4, 45, 90, 100, 89];

x = arr.__proto__;

arr.push(290); // Adds an item to the end of the array

arr.pop(); // Removes the last element

arr.shift(); // Removes the first element

arr.unshift('New'); // Adds an element at the beginning of an array

// console.log(arr);

x = arr.includes('New');

x = arr.slice(1, 2); // Does not manipulate the original array

// x = arr.splice(1, 4); // Manipulates the original array
// x = arr.splice(arr.length - 1, 1) // Removes the last element of an array
x = arr.splice(1, 2);

console.log(x);
console.log(arr);
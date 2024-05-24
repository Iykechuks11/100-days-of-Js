let x;
let y;

const arr = [1, 2, 3, 4, 5];
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

arr.push(6);
arr.unshift(0);

x = arr.reverse();

// Method 1
y = arr1.slice(0, arr1.length - 1).concat(arr2);

// Method 2
// arr1.pop()
// y = [...arr1, ...arr2];

// Method 3
y = arr1.splice(0, 4).concat(arr2);

console.log(x);
console.log(y);

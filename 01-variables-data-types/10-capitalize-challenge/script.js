// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';

// Solution 1
const myNewString = myString.charAt(0).toUpperCase() + myString.slice(1);

// SOlution 2
const myNewString_2 = myString[0].toUpperCase() + myString.substring(1)


console.log(myNewString_2)
console.log(myNewString)
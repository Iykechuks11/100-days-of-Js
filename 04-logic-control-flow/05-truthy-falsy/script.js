// const email = 'test@gmail.com';

// if (email) {
//   console.log('You passed in an email');
// }

// console.log(Boolean(email));

// Falsy values
//NaN
// 0
// undefined
//

const x = undefined;

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

// Truthy values
// Everything else that is not falsy is truthy
// []

// Exercise
const children = 0;

if (!isNaN(children)) {
  if (children == 1) {
    console.log(`You have ${children} child.`);
  } else {
    console.log(`You have ${children} children.`);
  }
} else {
  console.log('Please enter number of children');
}

// Checking for empty array
const posts = ['Post one', 'Post two'];

if (posts.length > 0) {
  console.log('List posts');
} else {
  console.log('No post to list');
}

// Checking for empty objects
const user = {
  name: 'John',
};

if (Object.keys(user).length > 0) {
  console.log('List user');
} else {
  console.log('No user');
}

// Loose equality (==)
console.log(false === 0);

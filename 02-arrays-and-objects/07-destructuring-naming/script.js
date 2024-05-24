const firstName = 'John';
const lastName = 'Doe';
const age = 28;

const person = {
  firstName,
  lastName,
  age,
};

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

// Destructuring object
const {
  id: todoId,
  title,
  user: { name },
} = todo;

console.log(todoId);
console.log(name);

// Destructuring arrays
const numbers = [23, 67, 33, 49];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);

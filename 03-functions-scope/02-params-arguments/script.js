function registerUser(user) {
  !user ? (user = 'Bot') : user;
  return user + ' is registered';
}

console.log(registerUser());

// Rest parameters
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3));

// Object parameters
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in.`;
}

const user = {
  name: 'John',
  id: 1,
};

console.log(loginUser(user));

// Array parameter
const fruits = ['apples', 'banana', 'orages'];

function favFruit(fruit) {
  return `My favorite fruit is ${fruit[2]}.`;
}

console.log(favFruit(fruits));

// Ex. 2
function getRandom(arr) {
  const getRandom = Math.floor(Math.random() * arr.length);

  const item = arr[getRandom];

  return item;
}

console.log(getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

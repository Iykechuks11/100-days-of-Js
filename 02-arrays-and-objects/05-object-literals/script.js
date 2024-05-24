let x;

// const person = new Object('John');

const personA = {
  name: 'John',
  age: 28,
  isAdmin: true,
  address: {
    street: '123 way',
    city: 'New york',
    state: 'Alabama',
  },
  hobbies: ['books', 'singing'],

  greet: function () {
    return 'Hello!';
  },
};

x = personA['name'];
x = personA.address.state;
x = personA.hobbies[1];
x = personA.isAdmin = false;
x = personA.greet();

// Delete property
delete personA.age;

// Add property
personA.wish = 'Happy';

console.log(x);
console.log(personA);

let x;

const todo_0 = new Object();

const person = {
  address: {
    coords: {
      lat: 43.2,
      lng: -71.34,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Using the spread operator
const obj3 = { ...obj1, ...obj2 };

// Does the same as the spread operator
const obj4 = Object.assign({}, obj1, obj2);

const todo = [
  { id: 1, name: 'Buy milk' },
  { id: 2, name: 'Read Bible' },
];

x = todo[0].name;

// Get keys of an object
x = Object.keys(person); // Returns an array of the keys

// Get length of an object
x = Object.keys(obj3).length;

// Get the values of the keys
x = Object.values(obj3);

console.log(x);

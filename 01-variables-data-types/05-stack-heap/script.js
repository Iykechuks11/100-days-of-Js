// Values are stored on the stack
const name = 'John';
const age = 28;

// Reference values are stored on the heap
const person = new Object()
person.name = 'Brad';


let newName = name;
newName = 'Jonathan';

let newPerson = person;
newPerson.name = 'Bradley';

console.log(name, newName);
console.log(person, newPerson)


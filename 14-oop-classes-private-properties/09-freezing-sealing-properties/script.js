// Sealing - Prevents properties from being added or removed. Can still be changed.

const rectObj = {
  name: 'Rectangle 1',
  width: 10,
  height: 20,
};

Object.seal(rectObj);

let descriptors = Object.getOwnPropertyDescriptors(rectObj);

// Does not work
delete rectObj.width;
rectObj.color = 'red';

// Works
rectObj.name = 'Rect 2';
rectObj.height = 15;

console.log(descriptors);
console.log(rectObj);

// Freezing - Prevents properties from being added, removed or changed
const circleObj = {
  name: 'Circle 1',
  radius: 30,
};

Object.freeze(circleObj);

descriptors = Object.getOwnPropertyDescriptors(circleObj);

circleObj.name = 'Circle change';

console.log(descriptors);

console.log('rectObj is Sealed?', Object.isSealed(rectObj));
console.log('rectObj is Frozen?', Object.isFrozen(rectObj));
console.log('circleObj is Sealed?', Object.isSealed(circleObj));
console.log('circleObj is Frozen?', Object.isFrozen(circleObj));

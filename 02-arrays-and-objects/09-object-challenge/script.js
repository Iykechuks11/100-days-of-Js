// Step 1

const library = [
  {
    title: 'The problem with pain',
    author: 'CS Lewis',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Mountain moving faith',
    author: 'Kenneth Hagin',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'You are Free',
    author: 'Pastor Lazarus Muoka',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// Step 2
// Set, for each read property in the nested object to 'true'
// library.forEach((book) => {
//   book.status.read = true;
// });

library[0].status.read = true;

// Step 3
const { title: firstBook } = library[0];

// Step 4
let libraryJSON = JSON.stringify(library);

console.log(library);
console.log(x);

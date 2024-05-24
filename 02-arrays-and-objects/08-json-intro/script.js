// JSON: A lightweight data interchange format. Storing data in a simple, readable format

const post = {
  title: 'Post one',
  body: 'This is the body',
};

// Convert to JSON string
const str = JSON.stringify(post);

// Parse JSON
const obj = JSON.parse(str)

console.log(obj);
console.log(str);

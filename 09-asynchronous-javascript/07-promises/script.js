const promise = new Promise((resolve, reject) => {
  // Do some async task
  setTimeout(() => {
    console.log('Async task completed.');
    resolve();
  }, 1000);
});

// promise.then(() => {
//   console.log('Promise consumed..');
// });

// Return data from a promise
const getUser = new Promise((resolve, reject) => {
  // Do some async task
  setTimeout(() => {
    // Error handling
    let error = false;
    if (!error) {
      resolve({ name: 'John' });
    } else {
      reject('Error: SOmething went wrong.');
    }
  }, 1000);
});

getUser
  .then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log('The promise has been resolved.'));

console.log('Hello from global scope.');

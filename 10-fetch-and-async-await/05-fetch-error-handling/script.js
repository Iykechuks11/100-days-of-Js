// fetch('https://httpstat.us/404')
//   .then((response) => response)
//   .then(() => console.log('success'))
//   .catch((error) => console.log(error));

// Test with response.ok
// fetch('https://httpstat.us/404')
//   .then((response) => {
//     // console.log(response.status);
//     if (!response.ok) {
//       throw new Error('Request failed!');
//     }
//     return response;
//   })
//   .then(() => console.log('success'))
//   .catch((error) => {
//     console.log(error);
//   });

//   Catch runs on a network error
// fetch('https://hello123.net')
//   .then((response) => response)
//   .then(() => console.log('success'))
//   .catch((error) => console.log(error));

// Check for specific code
fetch('https://httpstat.us/200')
  .then((response) => {
    // console.log(response.status);
    if (response.status === 404) {
      // 404 Not Found
      throw new Error('Not Found!');
    } else if (response.status === 500) {
      // 500 Internal Server Error
      throw new Error('Server Error');
    } else if (response.status !== 200) {
      // 200 Ok
      throw new Error('Request Failed');
    }
    return response;
  })
  .then(() => console.log('success'))
  .catch((error) => {
    console.log(error);
  });

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

const getPosts = () => {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
};

// getPosts.then((post) => {
//   console.log(post);
// });

console.log('Posts loading...');

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;

      if (!error) {
        posts.push(post);
      } else {
        reject('Something went wrong.');
      }
      // posts.push(post);
      resolve();
    }, 2000);
  });
}

function showError(error) {
  const h3 = document.createElement('h3');
  h3.innerHTML = `<strong>${error}</strong>`;
  h3.style.color = 'red';
  document.getElementById('posts').appendChild(h3);
}

createPost({ title: 'Post Three', body: 'This is post' })
  .then(getPosts)
  .catch(showError);
// getPosts().then(createPost);

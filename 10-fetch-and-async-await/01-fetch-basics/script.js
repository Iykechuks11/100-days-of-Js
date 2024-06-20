// Fetching a JSON file
fetch('./movies.json')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });

// Fetching a text file
fetch('./test.txt')
  .then((res) => res.text())
  .then((data) => console.log(data));

// Fetching from an API
fetch('https://api.github.com/users/iykechuks11')
  .then((res) => res.json())
  .then((data) => (document.querySelector('h1').textContent = data.name));

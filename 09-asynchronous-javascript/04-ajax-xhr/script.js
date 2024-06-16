const xhr = new XMLHttpRequest();

// xhr.open('GET', './movies.json');
xhr.open('GET', 'https://api.github.com/users/iykechuks11/repos');

xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const data = JSON.parse(this.responseText);

    // data.forEach((movie) => {
    //   const li = document.createElement('li');
    //   li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;
    //   const ul = document.querySelector('#results');
    //   ul.appendChild(li);
    // });
    console.log(data);
    data.forEach((repo) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
      const ul = document.querySelector('#results');
      ul.appendChild(li);
    });
  }
};

xhr.send();

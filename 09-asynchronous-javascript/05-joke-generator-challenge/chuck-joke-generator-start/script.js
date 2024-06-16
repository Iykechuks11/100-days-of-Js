const btn = document.getElementById('joke-btn');
const jokeEl = document.getElementById('joke');

function joke() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  xhr.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      const data = JSON.parse(this.responseText);
      jokeEl.innerHTML = data.value;
    } else {
      jokeEl.innerHTML = '404 \n No jokes found!';
    }
  };
  xhr.send();
}

btn.addEventListener('click', joke);
document.addEventListener('DOMContentLoaded', joke);

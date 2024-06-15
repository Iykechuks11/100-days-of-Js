// https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

const timerId = setTimeout(function () {
  console.log('Hello');
}, 1000);

// console.log(timerId);
document.querySelector('#cancel').addEventListener('click', () => {
  clearTimeout(timerId);
});

console.log('Halo');

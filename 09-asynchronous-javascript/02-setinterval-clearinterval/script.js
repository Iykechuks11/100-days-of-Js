// const intervalID = setInterval(myCallback, 1000);

// function myCallback() {
//   console.log(Math.floor(Math.random() * 255) + 1);
//   console.log(Math.floor(Math.random() * 255) + 1);
//   console.log(Math.floor(Math.random() * 255) + 1);
// }

// function stopChange() {
//   clearInterval(intervalID);
// }

// My solution
// const intervalID = setInterval(updateBgColor, 1000);

// function updateBgColor() {
//   document.body.style.background = `rgb(${Math.floor(
//     Math.random() * 255 + 1,
//   )}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(
//     Math.random() * 255 + 1,
//   )})`;
// }

// function stopBgChange() {
//   clearInterval(intervalID);
// }

// document.getElementById('stop').addEventListener('click', () => {
//   stopBgChange();
// });

// Brads solution
let intervalID;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeRandomColor, 1000);
  }
  console.log(intervalID);
}

// function changeColor() {
//   if (document.body.style.background !== 'black') {
//     document.body.style.background = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.background = 'white';
//     document.body.style.color = 'black';
//   }
// }

function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.background = `#${randomColor}`;
  console.log(randomColor);
}

function stopChange() {
  clearInterval(intervalID);
}

// document.getElementById('start').addEventListener('click', startChange);
document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);

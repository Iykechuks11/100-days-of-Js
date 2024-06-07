const x = 100;
console.log(x, 'In global');

if (true) {
  console.log(x, 'In block');
}

// Function scope
function add() {
  const y = 50;
  console.log(y, 'Function scope');
  console.log(x + y);
}

add();

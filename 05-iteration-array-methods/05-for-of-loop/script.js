const colors = {
  fav: 'purple',
  others: 'blue',
};

const fruits = ['oranges', 'pear'];

for (const iterator of Object.keys(colors)) {
  console.log(colors[iterator]);
}

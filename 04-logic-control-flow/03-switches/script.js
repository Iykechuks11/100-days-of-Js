const d = new Date(2024, 7, 7, 10, 0, 0);
const month = d.getMonth();
const day = d.getDay();
const hour = d.getHours();

switch (month) {
  case 1:
    console.log('It is January');
    break;

  case 2:
    console.log('It is February');
    break;

  case 6:
    console.log('Hurray, it is June');
    break;

  default:
    console.log('Happy holidays');
}

switch (true) {
  case hour < 12:
    console.log('Good morning');
    break;

  case hour < 18:
    console.log('Good afternoon');
    break;

  case hour < 24:
    console.log('Good evening');
    break;

  default:
    console.log('Bilmiyorum');
}

console.log(month);
console.log(day);
console.log(hour);

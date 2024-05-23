let x;

let d = new Date();

// d = d.__proto__;

x = d.toString();

x = d.getFullYear();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('default').format(d);

x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timezone: 'Turkey/Istanbul',
});

console.log(x);

let p = d.__proto__;
console.log(p);
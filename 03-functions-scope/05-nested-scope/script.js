function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }

  second();
}

first();

if (true) {
  const x = 100;

  //   You can access the parent from within the chile, but we cannot do it the other way around
  if (x == 100) {
    const y = 200;
    console.log(x + y);
  }

  //   console.log(y);
}

class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() {
    return this.height * this.width;
  }

  logArea() {
    return `The area equals ${this.area()}`;
  }
}

const square = new Rectangle('Square', 10, 10);

class arithmetic {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }
}

const add = new arithmetic(10, 20);
console.log(add.add());

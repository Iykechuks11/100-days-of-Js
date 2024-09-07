function Shape(name) {
    this.name = name;
}

function Rectangle(name, height, width) {
    Shape.call(this, name);

    this.height = height;
    this.width = width;
}

function Circle(name, radius) {
    Shape.call(this, name);

    this.radius = radius;
}

const rect = new Rectangle('Rectangle 1', 10, 20);
console.log(rect);

const cir = new Circle('Circle 1', 30);
console.log(cir);

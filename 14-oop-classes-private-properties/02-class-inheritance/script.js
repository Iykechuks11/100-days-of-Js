// Parent Class
class Shape {
    constructor(name) {
        this.name = name;
    }

    logName() {
        console.log(`Shape Name: ${this.name}`);
    }
}

// Sub Classes
class Rectangle extends Shape {
    constructor(name, height, width) {
        super(name);

        this.height = height;
        this.width = width;
    }
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name);

        this.radius = radius;
    }
}

const rect = new Rectangle('Rect1', 10, 10);

console.log(rect);
rect.logName();

const cir = new Circle('Cir 1', 30);
cir.logName();

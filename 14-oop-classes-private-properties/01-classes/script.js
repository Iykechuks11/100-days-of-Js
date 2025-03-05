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

console.log(square.area());
console.log(square.logArea());
console.log(square);
// const square2 = new Rectangle();

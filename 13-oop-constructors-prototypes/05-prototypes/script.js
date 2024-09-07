function Rectangle(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
}

Rectangle.prototype.area = function () {
    return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
    return 2 * (this.width + this.height);
};

const rect = new Rectangle('Rect', 10, 10);
console.log(rect);
// console.log(Object.getPrototypeOf(rect));
console.log(rect.area());
console.log(rect.perimeter());

// const now = new Date();

function Rectangle(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;

    this.area = function () {
        return this.height * this.width;
    };
}

const rect1 = new Rectangle('Rectangle 1', 10, 10);
const areaValue1 = rect1.area();

const rect2 = new Rectangle('Rectangle 2', 30, 50);
const areaValue2 = rect2.area();

console.log(rect1);
console.log(areaValue1);
console.log(rect1.constructor);
console.log(rect1 instanceof Rectangle);

console.log(rect2);
console.log(areaValue2);

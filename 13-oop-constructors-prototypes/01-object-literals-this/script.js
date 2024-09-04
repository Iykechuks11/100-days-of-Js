const rectangle = {
    name: 'Rectangle 1',
    width: 10,
    height: 10,
    area: function () {
        // return true;
        return this.width * this.height;
    },
};

console.log(rectangle.area());
console.log(this);

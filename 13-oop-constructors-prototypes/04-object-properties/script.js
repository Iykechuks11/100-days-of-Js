function Rectangle(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = function () {
        return this.width * this.height;
    };
}

const rect1 = new Rectangle('Rect1', 20, 10);
const rect2 = new Rectangle('Rect2', 10, 40);
const rect3 = new Rectangle('Rect3', 10, 90);
// console.log(rect1.area());

// Add property
rect1.color = 'red';

rect2.perimeter = () => 2 * (rect2.width * rect2.height);
rect2.color = 'blue';

// Delete property
// delete rect2.perimeter;

// Check for property
console.log(rect1.hasOwnProperty('color'));

// Get keys
console.log(Object.keys(rect1));

// Get values
console.log(Object.values(rect1));

// Get entries
console.log(Object.entries(rect1));

// Loop through entries
for (let [k, v] of Object.entries(rect1)) {
    // console.log(`${k} - ${v}`);
    if (typeof v !== 'function') {
        console.log(`${k} - ${v}`);
    }
}

// console.log(rect2);
// console.log(rect1);

// console.log(rect2.perimeter());
// console.log(rect1);

class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // FirstName
    get firstName() {
        return this.capitalizeFirst(this._firstName);
    }

    set firstName(value) {
        this._firstName = this.capitalizeFirst(value);
    }

    // LastName
    get lastName() {
        return this.capitalizeFirst(this._lastName);
    }

    set lastName(value) {
        this._lastName = this.capitalizeFirst(value);
    }

    // FullName
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    capitalizeFirst(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}

const person1 = new Person('john', 'doe');
console.log(person1.firstName);
console.log(person1.lastName);

person1.firstName = 'sam';
person1.lastName = 'moses';
console.log(person1);

console.log(person1.fullName);

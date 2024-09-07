const Player = function (name) {
    this.name = name;
    this.lvl = 1;
    this.point = 0;
};

Player.prototype.gainXp = function (n) {
    this.point += n;
    if (this.point >= 10) {
        this.lvl++;
        this.point -= 10;
    }
    return this.point;
};

Player.prototype.describe = function () {
    return `${this.name} is level ${this.lvl} with experience ${this.point} points`;
};

let player1 = new Player('Bob');
let player2 = new Player('Alice');

console.log(player1);
console.log(player1.gainXp(5));
console.log(player1.gainXp(7));
console.log(player1.gainXp(3));
console.log(player1.gainXp(2));
console.log(player1.gainXp(8));

console.log(player1.describe());

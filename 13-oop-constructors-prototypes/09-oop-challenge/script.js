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

    console.log(this.describe());
};

Player.prototype.describe = function () {
    return `${this.name} is level ${this.lvl} with experience ${this.point} points`;
};

let player1 = new Player('Bob');
let player2 = new Player('Alice');

console.log(player1);
console.log(player2);

player1.gainXp(5);
player2.gainXp(7);
player1.gainXp(3);
player2.gainXp(2);
player1.gainXp(8);
player2.gainXp(10);

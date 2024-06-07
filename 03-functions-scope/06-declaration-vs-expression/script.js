// Function declaration

function addDollarSign(value) {
  return `$${value}`;
}

console.log(addDollarSign(100));

// Function expression
const addPlusSign = function (value) {
  return `+${value}`;
};

console.log(addPlusSign(200));

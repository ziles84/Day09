function inverseWhile() {

  var fiveNumbers = "";
var i = 5;
while (i >= 0) {
  fiveNumbers += i + ",";
    i--;
}

if (fiveNumbers.slice(-1) == ',') {
    fiveNumbers = fiveNumbers.slice(0, -1);
}

return fiveNumbers;

}

inverseWhile();

console.log(inverseWhile());
module.exports = inverseWhile;

function inverseWhile() {
  var fiveNumbers = "";
var i = 5;
while (i >= 0) {
  fiveNumbers += i + ",";
    i--;
}

return fiveNumbers;

}

inverseWhile();

console.log(inverseWhile());
module.exports = inverseWhile;


function comparisonToEqual(a) {
  if (a < 5) {
    return "Less than 5";
  }
  if (a < 10 ) {
    return "Less than 10";
  }
  if (a <= 20) {
    return "10 or over";
  }

  return "More than 20";
}

comparisonToEqual(4);

console.log(comparisonToEqual(0));
console.log(comparisonToEqual(5));
console.log(comparisonToEqual(17));
console.log(comparisonToEqual(21));

module.exports = comparisonToEqual;

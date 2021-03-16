function functionElse(num) {
  var result = "";

  if (num > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or smaller";
  }
  return result;
}

functionElse(4);

console.log(functionElse(4));
console.log(functionElse(5));
console.log(functionElse(6));
console.log(functionElse(10));


module.exports = functionElse;

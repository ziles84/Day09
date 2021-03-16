function myForLoop1() {

  var evenNumbers = "";

  for (var i = 0; i < 10; i+=2) {
    evenNumbers += i + ", ";
  }
  return evenNumbers;
}







function myForLoop2() {
var evenInverseNumbers = "";
for (var i = 8; i >= 0; i-=2) {
  evenInverseNumbers += i + ", ";
}
return evenInverseNumbers;

}


myForLoop1();
myForLoop2();

console.log(myForLoop1());
console.log(myForLoop2());



module.exports = {
  myForLoop1,
  myForLoop2
};

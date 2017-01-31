
function digitProduct(n){
  productSequence = [1];
  next = 0;
  for (var i = 1; i < n; i++) {
    numberLen = productSequence[i-1].toString().length

    var numberLenArr = productSequence[i-1].toString().split("");
    next = productSequence[i-1] + multNum(numberLenArr);
    productSequence.push(next);

  }
  return productSequence[productSequence.length-1];
}


var multNum = function(array){
  array = array.map(Number);
  var mult = 1;
  for (number of array) {
    mult*=number;
  }
  return mult;
}

// console.log("iteratively: "+digitProduct(3)); // returns 4
// console.log("iteratively: "+digitProduct(6)); // returns 22
// console.log("iteratively: "+digitProduct(9)); // returns 62


function digitProductR(n,sequence=[1]){
  var next = 1;
  if(n === 0){return 0}
  if(n === sequence.length){return sequence[sequence.length-1]};

  var numberLenArr = sequence[sequence.length-1].toString().split("");
  next = sequence[sequence.length-1] + multNum(numberLenArr);
  sequence.push(next);
  return digitProductR(n,sequence);

}

// console.log("Recursive: "+digitProductR(3));
// console.log("Recursive: "+digitProductR(6));
// console.log("Recursive: "+digitProductR(9));

console.time("Iteratively sequence");
for (var i = 0; i < 100000; i++) {
  digitProduct(9);
}
console.timeEnd("Iteratively sequence");

console.time("Recursive sequence");
for (var i = 0; i < 100000; i++) {
  digitProductR(9);
}
console.timeEnd("Recursive Sequence");

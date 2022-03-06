function missingNumber(numArr = []) {
  var arrMising = true;
  var arrMiss = [];
  var b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  arrMising = b.filter(function (missing) {
    if (!numArr.includes(missing)) {
      arrMiss.push(missing);
    }
    return arrMiss;
  });
  if (arrMiss.length === 0) {
    arrMising = false;
    console.log(arrMising);
    arrMiss = [];
    return;
  }
  console.log(arrMiss);
arrMiss.sort(function(a, b){return a-b});
  console.log(arrMiss);


  arrMiss = [];
}

module.exports = missingNumber;

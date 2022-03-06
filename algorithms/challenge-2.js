function numSwap(number){
  if (number.toString().length % 2 != 0) {
    return false;
  }
  var swappedResult=0;
  var addNumb1 =1;
  while(number !=0){

    var nomber1 = number % 10;
        var nomber2 = (number- nomber1) / 10 % 10;
    swappedResult += addNumb1 * (10 * nomber1 + nomber2);
  
    number = Math.floor(number / 100);

    addNumb1 *= 100;
  }
    return swappedResult;
}

module.exports = numSwap

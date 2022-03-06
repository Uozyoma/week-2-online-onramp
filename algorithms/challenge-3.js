function increment(arr, value) {

console.log(arr);
var j;
var obj2 =Object.keys(arr);

var me= arr[0].val;

var arty={};
for(j=0; j<obj2.length; j++){

  arr[j].val = arr[j].val + value;
  console.log(arr);

}



}
module.exports = increment

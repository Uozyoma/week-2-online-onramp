function increment(arr, value) {

console.log(arr);
var i;
var obj2 =Object.keys(arr);

var me= arr[0].val;

var arty={};
for(i=0; i<obj2.length; i++){

  arr[i].val = arr[i].val + value;
  console.log(arr);

}



}
module.exports = increment

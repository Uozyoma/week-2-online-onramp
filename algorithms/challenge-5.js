function arraySum(arr1=[], arr2=[])
{
  var i =0;
  var j=0;
  var k=0;

  var myArray=[];


  if (arr1.length === 0)
   return "arr1 is empty";
  if (arr2.length === 0)
   return "arr2 is empty";

 while (i < arr1.length && i < arr2.length)
  {
    myArray.push(arr1[i] + arr2[i]);
    i++;

  }

 if (i === arr2.length)
 {
    for (j= i; j < arr1.length; j++)   {

      myArray.push(arr1[j] + arr2[k]);
      k++;
      if (k >= arr2.length){
        k=0;

      }

    }
    console.log(myArray);
  }

  return myArray;
}

module.exports = arraySum

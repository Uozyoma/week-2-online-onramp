function withdraw(amount){
  var note1=100;
  var note2=50;
  var note3=20;
  var mindNote;
  var mineNote;

  var withdrawable =[];

  if((amount >=40) &&(amount <=10000) ){
   note1=parseInt(amount/100);
   withdrawable.push(note1);
  mindNote = amount -(note1 * 100);
  note2= parseInt(mindNote/50);
   withdrawable.push(note2);
mineNote = mindNote -(note2 * 50);
console.log(mineNote);
  note3=parseInt(mineNote/20);
   withdrawable.push(note3);
   console.log(withdrawable);

  }
}



module.exports = withdraw
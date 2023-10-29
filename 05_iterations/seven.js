const mynumbers=[1,23,4,5,6,7,8,9,0]

//add 10
// for (const num in mynumbers) {
//      //console.log(mynumbers[num]);
//      console.log(mynumbers[num] +10);
//      }


//const add = mynumbers.map( (num)=> num+10 )
//console.log(add);


// so foreach method retruun nahi larta its will show undefined also 
// const add = mynumbers.forEach((num) => {
//      return console.log(num+10); 
// });

// console.log(add);



//chaining of methods
const newnum = mynumbers
                 .map( (num)=> num+10)
                 .map( (num)=> num*2)
                 .filter( (num) => num >=30)
                 //.forEach( function(num){  return num *0})


console.log(newnum);












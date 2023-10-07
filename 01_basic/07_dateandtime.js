// let date = new Date()
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(date.toJSON());
// console.log(typeof(date));

//declare specifixc date 

//let mycreatedate = new Date(2023, 0, 23) // mothe 0 se start hote h isme 

//let mycreatedate = new Date(2023, 0, 23,5, 3)//so isme time bhi h 
//yy dd mm
//let mycreatedate = new Date("2023-01-14")
//mm -- dd-- yy    
//let mycreatedate = new Date("01-14-2023")
//console.log(mycreatedate);
//console.log(mycreatedate.toDateString());
//console.log(mycreatedate.toLocaleDateString());

//=========================================

//let mytimestamp = Date.now();

// console.log(mytimestamp);// this value in milisecond 
// console.log(mycreatedate.getTime());// milisecond

//console.log(Math.floor(Date.now()/1000));// convertes in second 

let newdate = new Date();
console.log(newdate);
console.log(newdate.getMonth());
console.log(newdate.getFullYear());
newdate.toLocaleString('default',{
    //press ctr + space
    weekday:"long",
    calendar:newdate,
})





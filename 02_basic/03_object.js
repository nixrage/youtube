//there wo method for declare object litral and constructor 
//singleton jub constrctor se banatate h 
//singleton ni rahega jub litrals se banta h 


// //create object through constructor method 
// Object.create

// declare symbol
const mysym = Symbol("key1")


//object literals
const jsuser={
    name:"pink",
    "full name":"pinky akp",// to acess this we have to use []
    [mysym]:"mypinksymbol",//  use [ ] because it a smbol data type
    isloggein:false,
    email:"hii@gmail.com",
    age:98,

}




// two method to access object 
// console.log(jsuser.name);
// console.log(jsuser["email"]);// we have defin above in sring so here also defien in string 
// console.log(jsuser["full name"]);// so this we define above in stirng so there we cannot use . dot to acess , so we require bracket []

// console.log(jsuser[mysym]) // acess symbol datatyep
//use . dot to make chnages in object 
// jsuser.age=33
// console.log(jsuser.age);

// // freezz so no one can change value
// Object.freeze(jsuser)

// jsuser.email="pinky@gmail.com"

console.log(jsuser);


// let add function in object jsuser
jsuser.greeting= function(){
    console.log("hello im function ");
}

console.log(jsuser.greeting());//this output show undifind 
//console.log(jsuser.greeting);// this output show funtion anonnomous means function execute ni hua h sirf functio ka refrence aaya h 

jsuser.greeting2 = function(){
    // here we use backtakes , and use this for reffrence same object , and get object properties withing 
    console.log(`hello this is function from greeting2 full name  ${this["full name"]}`);
}

console.log(jsuser.greeting2());












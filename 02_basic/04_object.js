// declare object  two 

// //non singleton object 
// const tinderuser2 = {}
// console.log(tinderuser2);

// //singleton object 
const tinderuser = new Object()
console.log(tinderuser);
tinderuser.id="123user"
tinderuser.name="pname"
tinderuser.age=23
// console.log(tinderuser);

const user = {
    email : "user1@gmail.com",
    fullname:{
        userfullname:{
            firtsname:"pinky",
            latname:"akp"
            
        }
    }
}
 
// access nestes objected  using . 
console.log(user.fullname.userfullname?.firtsname);

//combin object 
const obj1 = { 1:"a",2:"b",3:"c"}
const obj2 = { 4:"er", 5:"sa",6:"sa"}

// add onj1 and onj2 
//const  obj3 = Object.assign({},obj1,obj2)// give this emapty {} because it comin ver well 

//console.log(obj3);

const obj4 = {...obj1, ...obj2} // spread method 
//console.log(obj4);


// values cmes from data base

const newuser = [
    {
        id : 1,
        email:"jiii@gmail.com"

    },
    {
        id : 1,
        email:"jiii@gmail.com"

    },
    {
        id : 1,
        email:"jiii@gmail.com"

    },
    {
        id : 1,
        email:"jiii@gmail.com"

    },

]


console.log(newuser[2]);
console.log(newuser[2].email);

console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));// array ke under array mila usko array kr liya 

// check if vlaue exit or not (key h ya nahi ) properties availabe h ya nahi 
console.log(tinderuser.hasOwnProperty('id'));






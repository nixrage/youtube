// declare object  two 

// //non singleton object 
// const tinderuser2 = {}
// console.log(tinderuser2);

// //singleton object 
// const tinderuser = new Object()
// console.log(tinderuser);
// tinderuser.id="123user"
// tinderuser.name="pname"
// tinderuser.age=23
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
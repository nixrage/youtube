const user={
    usernamename : "pinky",
    price : 877,

    welcomemessage: function(){
        // use this when u want to acess variable ffrom current contest 
        console.log(`${this.usernamename} wlcome to website`);
        console.log(this);
    }




}

//this work in object only 

//user.welcomemessage()
// user.usernamename="sam"
// user.welcomemessage()

// //=========
// // function chai(){
// //     let username = "hitesh"
// //     con sole.log(this.username);

// // }

// // chai()

// //create arrow function 
// // const  chai=()=>{
// //     let username = "hitesh"
// //     console.log(this);

// // }
// // chai()


// // arrow function 
//  () =>  {}
// // const addtwo=(num1, num2)=>{
// //     return num1+num2

// // }
// // console.log(addtwo(3,4));
//{ } curly braces me wrap kiya toh teruen keyword likhna padega but jub () is me wrap kiya tab return likhne ki jararat nahi h 
// //const addtwo = (num1,num2)=>{return num1+num2}
// //const addtwo = (num1,num2)=>  num1+num2
// //const addtwo = (num1,num2)=>  (num1+num2)
// //return Object
// const addtwo = (num1,num2)=> ({ username:"pik"})

// console.log(addtwo(6,4));

//===============
// const myarry = [2,4,2,5,67,8]
// myarry.forEach()

start from 24
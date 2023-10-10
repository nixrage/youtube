const user={
    usernamename : "pinky",
    price : 877,

    welcomemessage: function(){
        console.log(`${this.usernamename} wlcome to website`);
        console.log(this);
    }



}

user.welcomemessage()
user.usernamename="sam"
user.welcomemessage()

//=========
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);

// }

// chai()

//create arrow function 
// const  chai=()=>{
//     let username = "hitesh"
//     console.log(this);

// }
// chai()


// arrow function 
// const addtwo=(num1, num2)=>{
//     return num1+num2

// }
// console.log(addtwo(3,4));

//const addtwo = (num1,num2)=>{return num1+num2}

//return Object
const addtwo = (num1,num2)=> ({ username:"pik"})

console.log(addtwo(6,4));



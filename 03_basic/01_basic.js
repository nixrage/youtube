// function caame(){
//     console.log("hii who is ")
// }

// caame()
// function addtwonumbers(num1,num2){
//     console.log(num1+num2);
// }
// addtwonumbers(4, null)
// const result = addtwonumbers(9,9)
// console.log(`result is ${result}`);  // here output is undefine beacue we didnt return value in function





// function addtwonumbers(num1,num2){
//     let result = num1+num2
//     console.log(`"tthis is num ${num1} and ${num2}`);
//     return result
//     // in the js after retrun in function so after retrun use belwo code will not work

//     console.log(num1);
// }

// const newresult = addtwonumbers(8,3)
// console.log(newresult);


// function loginusermessage(username){
//     if(username === undefined){
//         console.log("please eneter username");
//         return // se is block me aane ke bad baki ka code  kuch kam ni karega
//     } 
//     return `${username} just lo0ggin in , WELCOME`    
// }

//console.log(loginusermessage("pinky"))
//console.log(loginusermessage())

//==========================

// function loginusermessage(username = "sam"){
//     if(!username){

//         //if not equal to username thjis is same as above function
//         console.log("please eneter username");
//         return // se is block me aane ke bad baki ka code  kuch kam ni karega
//     } 
//     return `${username} just lo0ggin in , WELCOME`
    
// }
// console.log(loginusermessage("pinky"))
// //console.log(loginusermessage())

//==================================
//use rest operator ... value when we dont know how much parameter required

// function calculateprice(...num1){
//     return num1
// }
// console.log(calculateprice(8,433,43,56,78))

//====

// //creta e a oobject 
// const user = {
//     username : "hitesh",
//     price : 122

// }
// // let pass object in functions
// function handleobjt(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

// }

//handleobjt(user)

//pass direct object
// handleobjt({
//     username: "sam",
//     price : 767
// })
// //==========
// const mynewarry = [ 200, 300,400,500]
// //defien functio who acccept array 
// function returnseocnvalue(getarray){
//     return getarray[0]
// }

// //console.log(returnseocnvalue(mynewarry));
// //pass array direct 
// console.log(returnseocnvalue([827,324,3245,546]));

// //start from 21

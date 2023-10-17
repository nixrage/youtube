// const user_email =["pin@gamil.com"]

// if(user_email){
//     console.log("got the email");
// }else{
//     console.log("not get user email");
// }



//falsy valuie 
//false, 0 , -0,  BigInt 0n ,"" , null, undefined,NaN

//truthly values
//"0" , 'false', " " , [],{}, function(){},



// const user_email =[]
// if (user_email.length ===0){
//     console.log("aray is 0 emans emmpty ");

// }

const emptyobject= {}
if (Object.keys(emptyobject).length ===0){
    console.log("empty object ");
}


//nullish coalescing operator (??): null undefined
// let val1 ;
// val1= 3 ?? 5 // ye firts value lega 
// console.log(val1);

// 
let val1 ;
val1= null ?? 5  /// isme agar db sew value aai h toh thik h ni to null assine kr do 
console.log(val1);

var2=undefined ?? 76
console.log(var2)


//TERNIARY OPERATOR 
//CONDITI9ON ? TRUE : FALSE
const price = 687;
price >= 654 ? console.log("gratere"):console.log("");

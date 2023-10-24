// //for loop
// for(let index=0; index <= 10; index++){
//     const element = index;
//     console.log(element);
//     if(element==5){
//         console.log("5 is best number ");
//     }
// }




// for (let i = 0; i <=10; i++) {
//     console.log(`outter loop ${i}`);

//     for (let j = 1; j < 10; j++) {
//         console.log(`inner oop ${j}`);
//         console.log(i + "*" + j+ "=" + i*j);
         
        
//     }
     
    
// }


// let myarray=["fllash","batman","superman","shaktiman"]
// for (let index = 0; index < myarray.length; index++) {
//     console.log( myarray.length);
//     const element = myarray[index];
//     console.log(element);
    
// }



for (let i = 0; i <=20; i++) {
     
     if (i==5) {
        console.log('seted 5');
        //break
        //break laga dega condition meet hone pe loop se bahar x
        continue
        //continue matlab maf krdo 5 ko 
        
     }

     console.log(`value of i is ${i}`);
}
// array 

const myarr = [1,2,3,4,5,6,7]
//console.log(myarr[2])


const myarr2 = new Array(1,2,3,4)
//console.log(myarr2[1]);

// myarr.push(6)//add value 
// myarr.push(8)
// myarr.push(5)

// myarr.unshift(99)// add at the staring of array 
// myarr.shift()// remove forst element pf array 


// console.log(myarr);

// console.log(myarr.includes('1'));
// console.log(myarr.indexOf('1'));


// console.log(myarr2);
// const newarr =  myarr2.join()//va;ue string me convert aur bind kr diya h array ko 
// console.log(newarr);
// console.log(typeof(newarr));


console.log("A ", myarr);

const myn1 = myarr.slice(1,3)//start from 1 and 3 to end exclude 3  
console.log(myn1);

console.log("B " , myarr);
const myn2 = myarr.splice(1,3)
console.log(myn2);



// const coding = ["js","python","java","ruby","bash","php"]

// const values = coding.forEach(  (item)=>{
//     //console.log(item);
//     return item
// }  )

// console.log(values);

//foreach values rerutn nahi karta 

//filetr reyrtun value krta h 

const mynum=[1,2,3,4,5,6,7,8,9,10]
//fileter me condition dena padte ejo conditionn satisfy karega vo print hoga 
// const newnum = mynum.filter( (num)=> {
//     num>4 return newnum} )

// const newnum = mynum.filter( (num)=> num>4 )
// console.log(newnum)

// const newNum2 = mynum.filter(  (num) => {
//     return num > 4
// } )
// console.log(newNum2);

// const newnums3 =[]
// mynum.forEach( (num) => {
//     if (num >4){
//         newnums3.push(num)

//     }
    
// } );
// console.log(newnums3);

//===============

const book = [
    {title:'book one', genre:'fiction', publish : 1981, edition:2003},
    {title:'book two', genre:'non-fiction', publish : 1781, edition:2503},
    {title:'book three', genre:'histroy', publish : 2981, edition:2653},
    {title:'book four', genre:'fiction', publish : 2981, edition:6503},
    {title:'book five', genre:'science', publish : 19761, edition:3003},
    {title:'book six', genre:'fiction', publish : 1951, edition:1003},
    {title:'book seven', genre:'non-fiction', publish : 1381, edition:2403}
]

let userbooks= book.filter(  (bk)=> bk.genre==='histroy' )
//console.log(userbooks);

userbooks = book.filter( (bk)=> { return bk.publish >= 2000 && bk.genre==="histroy" })
console.log(userbooks);






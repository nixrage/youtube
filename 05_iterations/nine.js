const mynums = [1,2,3,4,5,6]

// const mytotal = mynums.reduce( function (acc ,curntval ) {
//     console.log(`acc ${acc} ad cureen val ${curntval} and ;`)
//     return acc +curntval },3 )

// console.log(mytotal);


// arrow function 

const mytotal= mynums.reduce( (acc, curntval) => acc+curntval,0 )

console.log(mytotal);

const shoppingcart = [
    {itemname:js,
     price:323},

    {itemname:kali,
    price:323},

    {itemname:py,
        price:323}
]


// add all price in price 
 

for (const key in shoppingcart) {
     //console.log(shoppingcart[key]);
}

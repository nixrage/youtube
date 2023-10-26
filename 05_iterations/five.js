const coding = [ "js","ruby","python","c++"]

//this is callback function toh isme call back nahi hoga means function ka name ni hoga
// coding.forEach( function(item) {
//     console.log(item);

// })


// coding.forEach( (item)=>{
//     console.log(item);

// })


// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)



const myobj=[
    {
        langauage : "js",
        languagename :"jsnew"
    },
    {
        langauage : "js",
        languagename :"jsnew"
    },
    {
        langauage : "python",
        languagename :"py"
    },
    {
        langauage : "java",
        languagename :"java"
    }
]

myobj.forEach( (item) => {
    console.log(item.langauage);
})



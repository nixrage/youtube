const a1 = ["pinky","hello","pooja","light"]
const a2 = [9,"superman","shaktiman","mouse"]
//a1.push(a2)
//console.log(a1[4]);
//console.log(a1.concat(a2));// conscate returtn new array 

const all = [...a1, ...a2] //this is spread oprator use to add aray
console.log(all);

const another_arr = [1,2,3,[4,4.1,4.2,4.3,4.4],7,8,[8.1,8.2],9]

const real_another_arry= another_arr.flat(2)
console.log(real_another_arry);

console.log(Array.isArray("pin"));
console.log(Array.from("hites"));// this create a array , jub ye array ni bana pata tab tab empty array dega []

let scor1= 100
let scroe2= 200
let score=300

// let screate a array of var
console.log(Array.of(scor1,score,scroe2));

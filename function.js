// ham()
// function ham(){
//     return "ok"
// }
// var a = ham()
// console.log(a);

// setTimeout(function(){
//     console.log("Tung");
// }, 3000)

//iife

//
let a = [1, 2, 3]
let b = [4, 5, 6]
b = [32, 45, ...a, 45, 45, 45]
b[0] = 8
console.log(a);
console.log(...b)

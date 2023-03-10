// const ismlar = ['shavkat', 'shahzod', 'shohruh', 'bekzod']
// const newIsmlar = []
// -----------------------------
// for(let i = 0; i < ismlar.length; i++){
//     console.log(ismlar[i])
// }
// --------------------------
// ismlar.forEach((ism, i) => {
//     const newIsm = ism.charAt().toUpperCase() + ism.slice(1).toLocaleLowerCase() + 'bek'
//     newIsmlar.push(newIsm)
//     console.log(newIsm, i)
// })
// console.log(newIsmlar)
// -----------------------------

// const API = 'https://jsonplaceholder.typicode.com/posts';

// const getData = async (res) => {
//     const request = await fetch(res)
//     const data = await request.json()
    
//     console.log(data)
// }
// getData(API);
// ----------------------------------

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res =>  res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
/*

var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);*/
// expected output: 2

/*

'use strict';
function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }
  bar();
  console.log(x); // 1 (`x` is in scope)
  console.log(y); // ReferenceError in strict mode, `y` is scoped to `bar`
}

foo();
// --------------------------------------
*/
// const output = fizzItem (9)
// console.log(output)

// function fizzItem(i){
//   if(i % 3 === 0 && i % 5 === 0){
//     return 'FizzBuzz'
//   }else if ( i % 3 === 0){
//     return 'Fizz'
//   }else if ( i % 5 === 0){
//     return 'Buzz'
//   }else {
//     return 'Har ikkalasiga bulinmaydi'
//   }
// }
//  -----------------------------
// let a = 10;
// let b = a;
// a = 20
// console.log(a, b)
// -----------------------------------


// let a = 100;
// let b = a;

// a = 200;
// console.log(a, b)
// ----------------------------
// console.log(LandScape(200, 300))
// function LandScape (width, height){
//   return (width > height) ? true : false;
// }
// -------------------------

// let a = 300;
// let b = a;
// a = 200

// console.log(a, b)

// ----------------------------------------------
// const bigNum = [2,5,3,6,7,8,3,]

// const Num = bigNum.forEach((num) => {
//   if( num % 7){
//     return 'hello'
   
//   }
//   console.log(num)
// })
// ---------------------------------------------

// const Ismlar = ['shavkat', 'xolboy', 'ehrom', 'sodiq']

// Ismlar.forEach((ism, i) => {
//       const newName = ism.charAt().toUpperCase() + ism.slice(1).toLowerCase() + 'bek'
//        console.log(newName, [i])
// })

// let output = 60;

// let noutBuk = output < 70 ? 'Kleing' : 'Kelmang'

// console.log(noutBuk)
// let check = 2 <= 2 && 2 < 9;

// console.log(check)
// const Ismlar = ['shavkat', 'xolboy', 'ehrom', 'sodiq']

// Ismlar.filter((ism) => {
//   const  NewName = ism.charAt().toUpperCase() + ism.slice(1).toLowerCase() + 'bek'
//   console.log(NewName)
// })

// let output = fizzBuzz(21)
// console.log(output)

// function fizzBuzz(input){
//   if(input % 5 === 0 && input % 3 === 0){
//     return 'fizzBuzz'
//   }else if(input % 3 === 0 ){
//     return "fizz"
//   }else if(input % 5 === 0){
//     return 'Buzz'
//   }else if (!input % 5 === 0 ){
//     return 'Son emas'
//   }else{
//     return 'Qani ketdik'
//   }
// }

// const numbers = myNum([3, 5, 9, 2, 7, 5, 3 ]);

// console.log(numbers)
// function myNum(ra){
//   let sum = 0;
//   for(let a of ra)
//   sum += a;
//   return sum;
// }
// myNum()

// let a = 10;
// let b = 20;
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b)
// ---------------------------------
// let a = 40;
// let b = 30;
// let temp = a;
// a = b;
// b = temp
// console.log(a, b)
// -------------------------------


// let a =  29;
// let b = 30;

// let temp = a;
// a = b;
// b = temp;

// console.log(a, b)

// const ismlar = ['shahzod', 'bobur', 'laylo', 'xolli']
// const res = []
// ismlar.forEach((ism) => {
//  const ismla = ism.charAt().toUpperCase() + ism.slice(1).toLowerCase() + 'bek'
//  res.push(ismla)
// })
// console.log(res);

// let a = 20;
// let b = 30;
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b);


var a = prompt("please enter first number")
var b = prompt("please enter second number")
var c = prompt("please enter third number")
let largest

if (a >= b  && a >= c){
  largest = a
}else if (b >= a && b >= c){
  largest = b;
}else{
  largest = c
}

console.log(`Largest number is ${largest}`)














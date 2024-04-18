// //! Генерация рандомного числа

// function getRandomInt() {
//     let random = Math.random().toFixed(1);
//     if (random < 0.1) {
//         return "0.1"
//     }
//     return random;
// }

// //! Различные операции

// //* объединение(A+B), пересечение(min(A,B)), разность(A/B), сим. разность(A/B + B/A), дополнение(1-A)

// function mathOperation(name, A, B) {

//     function sum(A, B) {
//         let map = new Map();

//         for (let i in A) {
//             for (let j in B) {
//                 if (i == j) {
//                     map.set(`${i}`, (Math.max(A[i], B[j])));
//                 }
//                 if (!map.has(i)) {
//                     map.set(`${i}`, `${A[i]}`)
//                 }
//                 if (!map.has(j)) {
//                     map.set(`${j}`, `${B[j]}`)
//                 }
//             }
//         }
//         return map;
//     }

//     function multi(A, B) {
//         let map = new Map();

//         for (let i in A) {
//             for (let j in B) {
//                 if (i == j) {
//                     map.set(`${i}`, (Math.min(A[i], B[j])));
//                 };
//                 if (!map.has(i)) {
//                     map.set(`${i}`, `${A[i]}`)
//                 }
//                 if (!map.has(j)) {
//                     map.set(`${j}`, `${B[j]}`)
//                 }
//             }
//         }
//         return map;
//     }

//     function minus(A, B) {
//         let map = new Map();

//         for (let i in A) {
//             for (let j in B) {
//                 if (i == j) {
//                     (A[i] < B[j]) ? map.set(i, 0) : map.set(i, (A[i] - B[j]).toFixed(1));
//                 }
//                 if (!map.has(i)) {
//                     map.set(`${i}`, `${A[i]}`)
//                 }
//             }
//         }
//         return map;
//     }

//     function simMinus(A, B) {
//         let one = minus(A, B);
//         let two = minus(B, A);
//         one = Object.fromEntries(one);
//         two = Object.fromEntries(two);
//         let result = sum(one, two);
//         return result;
//     }

//     function dopolnenie(A) {
//         let map = new Map();
//         for (let key in A) {
//             map.set(key, (1 - A[key]).toFixed(1));
//         }
//         return map;
//     }

//     switch (name) {
//         case 'Объединение':
//             return sum(A, B);
//             break;
//         case 'Пересечение':
//             return multi(A, B);
//             break;
//         case 'Разность':
//             return minus(A, B);
//             break;
//         case 'Сим.разность':
//             return simMinus(A, B);
//             break;
//         case 'Дополнение':
//             return dopolnenie(A);
//             break;
//     }
// }

// //! Проверка вхождения

// function checkUnity(A, B) {
//     let arr1 = Object.values(A);
//     let arr2 = Object.values(B);

//     let result = [];

//     for (let i = 0; i <= arr1.length; i++) {
//         for (let j = 0; j <= arr2.length; j++) {
//             if (arr1[i] == arr2[j]) {
//                 if (i == arr1.length) {
//                     break;
//                 }
//                 result.push(true);
//             }
//         }
//     }
//     console.log(result);
//     if (result.length == arr1.length) return true;
//     return false;
// }

// const A = {
//     B: getRandomInt(),
//     J: getRandomInt(),
//     I: getRandomInt(),
//     Q: getRandomInt(),
//     O: getRandomInt(),
//     P: getRandomInt(),
//     Z: getRandomInt(),
//     V: getRandomInt(),
//     K: getRandomInt(),
//     L: getRandomInt()
// };
// const B = {
//     A: getRandomInt(),
//     B: getRandomInt(),
//     O: getRandomInt(),
//     J: getRandomInt(),
//     Y: getRandomInt(),
//     E: getRandomInt(),
//     X: getRandomInt(),
//     F: getRandomInt(),
//     S: getRandomInt(),
//     V: getRandomInt()
// };

// console.log(A);
// console.log(B);

//! Объединение, пересечение, дополнения, композиция 

// function mathOperation(name,A,B){
//     let finishArr = [];
//     let result = [];

//     function sum(A,B){
//         for(let i = 0; i < A.length; i++){
//             for(let j = 0; j < B.length; j++){
//                 result.push(Math.max(A[i][j], B[i][j]));
//                 j == 0 ? j = 0 : null;
//             }
//             finishArr.push(result);
//             result = [];
//         }
//         return finishArr;
//     }

//     function multi(A,B){
//         for(let i = 0; i < A.length; i++){
//             for(let j = 0; j < B.length; j++){
//                 result.push(Math.min(A[i][j], B[i][j]));
//                 j == 0 ? j = 0 : null;
//             }
//             finishArr.push(result);
//             result = [];
//         }
//         return finishArr;
//     }

//     function dopolnenie(A){
//         for(let i = 0; i < A.length; i++){
//             for(let j = 0; j < A.length; j++){
//                 result.push((1 - A[i][j]).toFixed(1));
//                 j == 0 ? j = 0 : null;
//             }
//             finishArr.push(result);
//             result = [];
//         }
//         return finishArr;
//     }

//     function compozition(){
//         let min = [];
//         let finishedArr = [];

//         for(let k = 0; k < A.length; k++){
//             for(let i = 0; i < A.length; i++){
//                 for(let j = 0; j < A.length; j++){
//                 min.push(Math.min(A[i][j], B[j][k]));
//                 }
//             finishedArr.push(min.sort((a,b) => b-a).slice(0,1))
//             min = [];
//             }
//         }
//         return finishedArr;
//     }

//     switch(name){
//         case("Объединение"):
//             return sum(A,B);
//             break;
//         case('Пересечение'):
//             return multi(A,B);
//             break;
//         case('Дополнение'):
//             return dopolnenie(A);
//             break;
//         case('Композиция'):
//             return compozition();
//             break;
//     }

// }

//! Вариант 11

// const A = [
//     [0.3, 0.6, 0.4, 0.9],
//     [0.1, 0.7, 0.0, 0.5],
//     [1.0, 0.2, 1.0, 0.8],
//     [0.5, 0.4, 0.7, 0.6]
// ]

// const B = [
//     [0.7, 0.3, 0.2, 0.0],
//     [0.8, 0.6, 0.4, 0.9],
//     [0.6, 0.2, 0.1, 0.1],
//     [0.0, 0.3, 0.6, 0.5]
// ]

//! Вариант 18

// const A = [
//     [0.2, 0.4, 0.1, 0.8],
//     [1.0, 0.3, 1.0, 0.6],
//     [0.7, 0.2, 0.9, 0.2],
//     [0.5, 0.7, 0.4, 0.3]
// ]

// const B = [
//     [1.0, 0.5, 0.7, 0.3],
//     [0.4, 0.8, 0.9, 0.0],
//     [0.0, 0.2, 0.1, 0.6],
//     [0.1, 0.3, 1.0, 0.2]
// ]

// console.log(mathOperation('Композиция', A, B));

// const A = {
//     x1: 0.2,
//     x2: 0.8,
//     x3: 0.9,
//     x4: 0.7,
//     x5: 0.6,
//     x6: 0.3,
//     x7: 0.5
// }

// A.x1.y1 = 1;

// A.x2.y2 = 1;
// A.x2.y4 = 1;

// A.x3.y2 = 1;

// A.x4.y3 = 1;

// A.x5.y1 = 1;

// A.x6.y3 = 1;

// A.x7.y4 = 1;

// const graph = {
//     y1: [A.x5],
//     y2: [A.x2, A.x3],
//     y3: [A.x4, A.x6],
//     y4: [A.x1, A.x2, A.x7]
// }


// const Mb = [];

// const oper = Object.values(graph);

// let result = [];

// for (let i = 0; i < oper.length; i++) {
//     result.push(oper[i].sort((a, b) => b - a).slice(0, 1))
// }

let A = {};
A.x = ['x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7'];
A.y = ['y1', 'y2', 'y3', 'y4'];
let costs = [0.2, 0.8, 0.9, 0.7, 0.6, 0.3, 0.5];

A.x1 = ['y4'];
A.x2 = ['y2', 'y4'];
A.x3 = ['y2'];
A.x4 = ['y3'];
A.x5 = ['y1'];
A.x6 = ['y3'];
A.x7 = ['y4'];

let Y = {};

for (let i = 0; i < A.y.length; i++) {
    Y[A.y[i]] = [];
    for (let j = 0; j < A.x.length; j++) {
        if (A[A.x[j]].includes(A.y[i])) {
            Y[A.y[i]].push(costs[j]);
        }
    }
}

let arr = Object.values(Y);

let B = []
for (let i = 0; i < arr.length; i++) {
    B.push(arr[i].sort((a, b) => b - a).slice(0, 1));
}

console.log(B);
// test
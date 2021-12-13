// 1 exercise

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getFirst(arr) {

//     let result = 0

//     for (let i = 0; i < arr.length; i++) {
//         return arr.splice(0, 3);
//     }

//     return result;
// }

// console.log(arr);

// console.log(getFirst(arr));

// 1 exercise map

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newarr = [];

// function getFirst(arr, n) {

//     arr.map((item, index) => {
//         if (index < n) {
//           arr.push(item);
//         }
//       });

//       return arr;
// }

// console.log(arr);

// console.log(getFirst(newarr, 3));

// 2 exercise

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const  getLast = arr => {
//   return arr.splice(6, 3);
// }

// console.log(arr);

// console.log(getLast(arr));

// 2 exercise map

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newArr = [];

// function getLast(array, n) {

//     arr.map((item, index) => {
//         if ( index >= n) {
//             newArr.push(item);
//         }
//     });

//     return newArr;
// }

// console.log(arr);

// console.log(getLast(arr, 6));

// 3 exercise

// const arrayFilled = (len, value) => {
//     const res = [];

//     for (let i = 0; i < len; i++) {
//       res.push(value);
//     }

//     return res;
//   }

// console.log(arrayFilled(5, 'arrayFiled'));

// 4 exercise

// function generateNumbers(start, len) {
//     const newarr = [];
//     for (var i = 0; i < len; i++, start++) {
//       newarr[i] = start;
//     }
//         return newarr;
// }

// console.log(generateNumbers(5, 10));

// 5 exercise

// const str = "Каждый охотник желает знать, где сидит фазан.";

// const newstr = str.split('');

// function getFirst() {
//     newarr.map(item[0])
//     }

// console.log(getFirst());
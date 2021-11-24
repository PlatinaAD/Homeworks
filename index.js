// 1 exercise

// const str = '55411576241563763132'
// function FirstTask(str) {
// let string = str.split('');
// let array = string.map(Number);

// for (let i = 0; i < array.length; i++) {
//   if (array[i - 1] % 2 && array[i] % 2) {
//     array.splice(i, 0, ':');
//   }
// }
// return array.join('');
// }

// console.log(FirstTask(str));

// 2 exercise

// const arr = [1, 1, 1, 2, 4, 5, 6, 8, 9];

// function CountIdentic(arr) {
//   return arr.reduce((a, b) => {
//     a[b] = (a[b] || 0) + 1;
//   return a;
// }, {});
// };

// console.log(CountIdentic(arr));

// 3 exercise

// const array = [1, 1, 1, 2, 4, 5, 6, 8, 9];

// function DeleteIdentic(arr) {
//   return Array.from(new Set(arr));
// }

// console.log(DeleteIdentic(array));

// 4 exercise

// const ARRAY = [1, 1, 1, 2, 4, 5, 6, 8, 9];
// function RemoveItem(arr, num) {
//   arr.splice(num, 1);
//     return arr;
// }

// console.log(RemoveItem(ARRAY, 4));

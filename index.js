// 1 exercise Напишите функцию propertyValue(array, key), которая принимает в качестве
// аргументов массив объектов и имя свойства, а затем возвращает все значения
// данного свойства из массива объектов.

// const users = [
//     {
//         name: 'Alex',
//         age: 15
//     },
//     {
//         name: 'Ivan',
//         age: 45
//     },
//     {
//         name: 'Petya',
//         age: 20
//     },
//     {
//         name: 'Kolya',
//         age: 18
//     },
// ];

// function propertyValue(array, key) {
//     const uniqUser = users.find(item => item.age)
// }

// console.log(propertyValue(arr, 'age'));


// 2 exercise Напишите функцию removeItem(arr, num), которая удаляет определенный элемент из массива. FILTER

// const arr = [1, -2, 3, 4, 5, -6, 7, 8, 9, -55, 44, 33, 22, -11];

// function removeItem(arr, num) {
//     const res = [];
//     res = arr.filter((item, index) => {
//         if ( index > 0) {
//             result.push(item)
//         }
//     });

//     return res;
// }

// console.log(removeItem(arr));

// 3 exercise

// const words = ["sgegsgseseg","segsegseg","seggseegs"];

// const total = words.reduce(function(sum, word) {
//   return sum + word.length;
// }, 0);

// console.log(total);

// 4 exercise

var numbers = [2, 3, 5, 7, 11, 13, 17, 19];

function currentSums(numbers) {

   var result = [];

   numbers.reduce(function(sum, current, i) {
      return result[i] = sum + current;
   }, 0);

   return result;
}

console.log(currentSums(numbers));
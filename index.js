// 1 exercise

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const getArray = array => {
//     let result = 1;
//     for (let i = 1; i < arr.length; i++) {
//         result += '-' + arr[i];
//     }

//     return result;
// }

// console.log(getArray(arr));

// 1 exercise forEach

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.forEach( (item) => {
//     console.log('-', item,);
// });

// 2 exercise 0-10

// const arr = [];
// for ( i = 0; i < 11; i++ ) {
//     arr.push( Math.round( Math.random() * 10 ));
// }
// console.log(arr);

// 2 exercise 0-9

// const arr = [];
// for ( i = 0; i < 10; i++ ) {
//     arr.push( Math.round( Math.random() * 9 ));
// }
// console.log(arr);

// 3 exercise

// const users = [
//     {
//         name: 'Mickle',
//         age: 20
//     },
//     {
//         name: 'Aleksandr',
//         age: 26
//     },
//     {
//         name: 'Anya',
//         age: 32
//     }
// ];

// let ages = 0;

// for (let i = 0; i < users.length; i++) {
//     ages += (users[i].age / users.length);
// }

// console.log(ages);

// 3 exercise forEach

const users = [
    {
        name: 'Mickle',
        age: 20
    },
    {
        name: 'Aleksandr',
        age: 26
    },
    {
        name: 'Anya',
        age: 32
    }
];

let ages = 0;
let result = 0;

users.forEach((item, array) => {
    ages += (item.age / users.length);
});

console.log(ages);
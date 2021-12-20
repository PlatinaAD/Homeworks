// const inp = document.getElementById('inp');
// const btn = document.getElementById('btn');
// const arr = [];

// btn.onclick = () => {
//     randomNumbers = Math.floor(Math.random() * 10);
//     console.log(arr);
// }

// for (let i = 0; i < 9; i++) {
//     arr.push(Math.floor(Math.random() * 10));
// }

// console.log(arr);

const inp = document.querySelector('#inp');
const btn = document.querySelector('#btn');
const message = document.querySelector('#message');

const randomNumbers = Math.floor(Math.random() * 10);

function addNumbers() {
    const userNumber = inp.value;

    if (userNumber == randomNumbers) {
        message.innerHTML = "YOU WIN!";
        btn.disabled = false;
    } else if (userNumber > randomNumbers) {
        btn.innerHTML = "NEED LESS";
    } else {
        btn.innerHTML = "NEED MORE";
    }
};

btn.addEventListener('click', function() {
    let randomNumbers = Math.floor(Math.random() * 10);
    message.innerHTML = '';
    inp.value = '';
    btn.disabled = true;
});

function getRandomInt (min, max) {
    return Math.floor(Math.random() * 10);
}
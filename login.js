const btn = document.getElementById('btn');

const users = [
    {
        login: 'Platina',
        password: '300'
    },
    {
        login: 'Avangard',
        password: '12345'
    }
];

document.getElementById('btn').onclick = function() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    if (login == 'Platina' && password == '300') {
      window.location = 'homepage.html';
    }
    else if (login == 'Avangard' && password == '12345') {
      window.location = '/homepage.html';
    }
    else {
        alert('Incorrect login or password');
  }
  };

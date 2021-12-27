const btn_auth = document.getElementById('btn_auth');
const firstname = document.getElementById('firstname');
const surname = document.getElementById('surname');

btn_auth.onclick = () => {
    const user = {
        firstname: firstname.value,
        surname: surname.value
    };

    localStorage.setItem('user', JSON.stringify(user));

    window.location = '../homepage/homepage.html';
}

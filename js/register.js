let registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let nama = document.getElementById('nama').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let data = {
        'nama': nama,
        'email': email,
        'password': password,
    }

    let request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(data)
    };

    fetch('https://ets-pemrograman-web-f.cyclic.app/users/register', request)
        .then(response => {
            response.json();
            alert('Register Berhasil, silahkan melakukan login');
            window.location.href = 'login.html';
        })
        .catch(error => console.log('error', error));
});
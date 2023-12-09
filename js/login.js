let loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let data = {
        "email": email,
        "password": password,
    }
    let request = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": '*'
        },
        body: JSON.stringify(data),
    };

    fetch('https://ets-pemrograman-web-f.cyclic.app/users/login', request)
        .then(response => {
            return response.json();
        })
        .then(result => {
            alert('Login Berhasil');
            localStorage.setItem('token', result.data.access_token);
            window.location.href = 'index.html';
        })
        .catch(error => console.log('error', error));
});
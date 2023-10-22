const registerForm = document.getElementById('register-form');

registerForm.addEventListener('click', function() {
    // var formData = {
    //     "nama": registerForm.querySelector('#nama').value,
    //     "email": registerForm.querySelector('#email').value,
    //     "password": registerForm.querySelector('#password').value,
    // }

    const formData = new FormData(document.getElementById('register-form'));
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('https://ets-pemrograman-web-f.cyclic.app/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(responseData => {
            document.getElementById('result').innerText = JSON.stringify(responseData);
        })
        .catch(error => {
            console.log('Error: ' + error);
        });
})
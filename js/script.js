let token = localStorage.getItem('auth');
if (token) {
    fetch('https://ets-pemrograman-web-f.cyclic.app/users/profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => response.json())
        .then(result => console.log('Result: ', result))
        .catch(error => console.log('Error: ', error));
}
else {
    window.location.href = 'login.html';
}

const dirt = document.querySelectorAll('.dirt');
const mole = document.querySelectorAll('.mole');
const scoreBoard = document.querySelector('.score-board');

let dirtBefore;
let done;
let score;

function randomDirt(dirt) {
    const rd = Math.floor(Math.random() * dirt.length);
    const randDirt = dirt[rd];

    if (randDirt == dirtBefore) {
        randomDirt(dirt);
    }

    dirtBefore = randDirt;
    
    return randDirt;
}

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function showMole() {
    const randDirt = randomDirt(dirt);
    const randTime = randomTime(800, 1000);
    randDirt.classList.add('show');

    setTimeout(() => {
        randDirt.classList.remove('show');
        if (!done) {
            showMole();
        }
    }, randTime);
}

function start() {
    done = false;
    score = 0;
    scoreBoard.textContent = 0;
    showMole();
    setTimeout(() => {
        done = true;
    }, 10000);
}

function whack() {
    score++;
    this.parentNode.classList.remove('show');
    scoreBoard.textContent = score;
}

mole.forEach(moles => {
    moles.addEventListener('click', whack)
});
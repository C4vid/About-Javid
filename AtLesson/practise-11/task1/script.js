const loginForm = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const loginBtn = document.querySelector('#login-btn');
const errorMessage = document.querySelector('#error-msg');
const welcomeMessage = document.querySelector('.welcome-msg');
const welcomeHeader = document.querySelector('#welcome-header');
const body = document.body;

const person = { name: 'Cavid', password: 'cavid123' };


loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const username = usernameInput.value;
   const password = passwordInput.value

    if (username === person.name ) {
        errorMessage.textContent = '';
        welcomeHeader.innerHTML = `Hello, ${username}!`;
        localStorage.setItem('name', person.name);
       
    } else {
        errorMessage.textContent = 'Please try again.';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const name = localStorage.getItem('name');
    if (name) {
        welcomeHeader.innerHTML = `Hello, ${name}!`;
        welcomeMessage.style.display = 'block';
        body.classList.add('logged-in');
    } else {
        welcomeMessage.style.display = 'none';
        body.classList.remove('logged-in');
    }
 });
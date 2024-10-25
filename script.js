const button = document.getElementById('clickMe');
const message = document.getElementById('message');

button.addEventListener('click', () => {
    message.textContent = "Привет! Вы нажали на кнопку!";
});

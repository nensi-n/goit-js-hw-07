const counterValue = document.querySelector('#value');

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

const increment = () => counterValue.textContent = Number(counterValue.textContent) + Number(btnIncrement.textContent);
const decrement = () => counterValue.textContent = Number(counterValue.textContent) + Number(btnDecrement.textContent);

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);
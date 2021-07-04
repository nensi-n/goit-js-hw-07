const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const handlerInput = () => {
    if (nameInput.value.trim() === '') {
        nameOutput.textContent = 'незнакомец';
    } else {
        nameOutput.textContent = nameInput.value.trim();
    }
};

nameInput.addEventListener('input', handlerInput);
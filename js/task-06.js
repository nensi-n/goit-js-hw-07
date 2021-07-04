const input = document.querySelector('#validation-input');
const inputLength = Number(input.dataset.length);

const handlerBlur = () => {
    if (input.value.trim().length === inputLength) {
        input.className = 'valid';
    } else {
        input.className = 'invalid';
    }
};

input.addEventListener('blur', handlerBlur);
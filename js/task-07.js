const inputFontSize = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');


const handlerInput = () => {
    spanText.style.fontSize = inputFontSize.value + 'px';

};

inputFontSize.addEventListener('input', handlerInput);
const boxes = document.querySelector('#boxes');
const inputNumber = document.querySelector('#controls input');
const buttonRender = document.querySelector('[data-action="render"]');
const buttonDestroy = document.querySelector('[data-action="destroy"]');


function createBoxes(amount) {
    let divWidth = 30;
    let divHeight = 30;
    for (let i = 0; i < amount; i++) {
        const newEl = document.createElement('div');
        newEl.style.width = divWidth + "px";
        newEl.style.height = divHeight + "px";
        newEl.style.backgroundColor = `rgb( ${random()} , ${random()} , ${random()} )`;
        divWidth += 10;
        divHeight += 10;
        boxes.appendChild(newEl);
    }

};

function random() {
    return Math.floor(Math.random() * 255);
}

function clickCreate() {
    createBoxes(parseInt(inputNumber.value));
};

const destroyBoxes = () => {
    boxes.innerHTML = '';
}

buttonRender.addEventListener('click', clickCreate);
buttonDestroy.addEventListener('click', destroyBoxes);


const nodeList = document.querySelectorAll('.item');

console.log(`В списке ${nodeList.length} категории.`);

const itemsInCategory = nodeList.forEach(element => {
    console.log(`Категория: ${element.firstElementChild.innerText}`);
    console.log(`Количество элементов: ${element.lastElementChild.childElementCount}`);
});



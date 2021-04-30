
const inputBtn = document.querySelector('.footer__button');
const input = document.querySelector('.footer__input');
const items = document.querySelector('.items');


input.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        onAdd();
    } else {
        return;
    }
})

input.focus();
inputBtn.addEventListener('click', () => {
    onAdd();
});

function onAdd() {
const text = input.value;
if(input.value === ''){
    return;
}
const item = creatItem(text);
items.appendChild(item);    
item.scrollIntoView({block: 'center'});
input.value = '';
input.focus();
}

function creatItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row')
    const item = document.createElement('div');
    item.setAttribute('class', 'item');
    const itemName = document.createElement('span');
    itemName.setAttribute('class', 'item__name');
    itemName.innerText = text;
    const itemDelete  = document.createElement('button');
    itemDelete.setAttribute('class', 'item__delete');
    itemDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';
    itemDelete.addEventListener('click', () => {
        items.removeChild(itemRow);
        input.focus();
    })
    const itemDevider = document.createElement('div');
    itemDevider.setAttribute('class', 'item__devider');
    
    item.appendChild(itemName);
    item.appendChild(itemDelete);
    
    itemRow.appendChild(item);
    itemRow.appendChild(itemDevider);
    return itemRow;

}
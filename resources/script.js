//add Button targeted
var addButton = document.getElementById('add');
addButton.addEventListener('click', addItems);

//remove Button targeted
var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItems);

//removeAll Button targeted
var removeAllButton = document.getElementById('removeAll');
removeAllButton.addEventListener('click', removeAllItems);

//List items targeted
var ul = document.getElementById('list');
var li;

// Functions
function addItems() {
    console.log('Add');
}

function removeItems() {
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        if (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index]);
        }
    }
}


function removeAllItems() {
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        ul.removeChild(li[index]);
    }
}
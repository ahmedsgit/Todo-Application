//add Button targeted
var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

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
function addItem() {
    //var input = document.getElementById('input');
    var item = input.value;
    var textNode = document.createTextNode(item);

    if (item === '') {
        return false;
    } else {
        // create li
        li = document.createElement('li');

        //create input, type(checked),id(check)
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        //create label
        var label = document.createElement('label');
        label.setAttribute('for', 'check');

        //add these elements on webpage 
        li.appendChild(checkbox);
        label.appendChild(textNode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);

        //fade in
        setTimeout(() => {
            li.className = 'visual';
        }, 5);

        input.value = '';
    }
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
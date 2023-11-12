var elem = document.createElement('p');
elem.innerHTML = 'Hello World for DOM!';
var divElement = document.getElementsByTagName('div')[0];
divElement.appendChild(elem);
var linkElement = document.createElement('a');
linkElement.href = 'https://facebook.com';
linkElement.innerHTML = 'This is a link to facebook';
divElement.appendChild(linkElement);

// animations and interval
var animationElement = document.getElementById('myAnimation');
var containerElement = document.getElementById('myContainer');
var pos = 0;
var id = setInterval(frame, 10);
animationElement.style.background = 'blue';
containerElement.style.backgroundColor = 'black';

function frame() {
    if (pos >= 150) {
        animationElement.style.backgroundColor = 'yellow';
        containerElement.style.backgroundColor = 'green';
        clearInterval(id);
    } else {
        animationElement.style.top = pos + 'px';
        containerElement.style.left = pos + 'px';
    }
    pos++;
};

document.getElementById('printing').innerHTML = "Printing...";
setTimeout(doone, 3000);

function doone() {
    var done = document.getElementById('done').innerHTML = 'Done!';
};

var eventsElement = document.getElementById('events');

function hover() {
    eventsElement.style.color = 'red';
    eventsElement.style.backgroundColor = 'blue';
    eventsElement.style.fontSize = '40px';
};

function out() {
    eventsElement.style.color = 'yellow';
    eventsElement.style.backgroundColor = 'green';
    eventsElement.style.fontSize = '20px';
};

var click1 = 0;
function colStyle() {
    var myCollection = document.getElementsByClassName('collection');
    if (click1 % 2 == 0) {
        for (i = 0; i < myCollection.length; i++) {
            myCollection[i].style.color = 'gold';
        }
    } else {
        for (i = 0; i < myCollection.length; i++) {
            myCollection[i].style.color = 'purple';
        }
    }
    click1++;
};

var todoInput = document.getElementById('todoTextInput');
var todoUl = document.getElementById('todoUl');


function submitTodo() {
    if (todoInput.value == '') {
        alert('Cannot add empty todo text');
    } else {
        addTodo(todoInput.value);
        todoInput.value = '';
        todoInput.focus();
    }
};

function addTodo(todoText) {
    var listItem = document.createElement('li');
    var checkbox = document.createElement('span');
    var deleteButton = document.createElement('button')
    var todoTextContainer = document.createElement('span');
    todoTextContainer.innerHTML = todoText;
    deleteButton.innerHTML = 'Delete';
    checkbox.innerHTML = '[ ]';

    deleteButton.addEventListener('click', deleteTodo);
    listItem.appendChild(checkbox).appendChild(todoTextContainer).appendChild(deleteButton);
    todoUl.appendChild(listItem);
};

function deleteTodo(event) {
    var parentNode = event.target.parentNode;
    parentNode.remove();
};
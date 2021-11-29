const inputTask = document.querySelector('#inputTask');
const add = document.querySelector('#add');
const task = document.querySelector('#task');

function creatList(){
    const list = document.createElement('li');
    list.setAttribute('class', 'list');
    return list;
}
function createButton(list){
    const deleteTask = document.createElement('button');
    deleteTask.innerText = 'Delete';
    deleteTask.setAttribute('class', 'delete');
    list.appendChild(deleteTask);
}

function creatTask(textInput){
    const list = creatList();
    list.innerHTML=textInput;
    task.appendChild(list);
    createButton(list);
}

inputTask.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTask.value) return;
    creatTask(inputTask.value);
    inputTask.value='';
    }
})
add.addEventListener('click', function(){
    if(!inputTask.value) return;
    creatTask(inputTask.value);
    inputTask.value='';
})

document.addEventListener('click', function(event){
    const elementClicked = event.target;
    if(elementClicked.classList.contains('delete')){
        elementClicked.parentElement.remove();
    }
})
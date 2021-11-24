const inputTask = document.querySelector('#inputTask');
const add = document.querySelector('#add');
const task = document.querySelector('#task');

function creatList(){
    const list = document.createElement('h6');
    return list;
}

function creatTask(textInput){
    const list = creatList();
    list.innerHTML=textInput;
    task.appendChild(list);
    
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


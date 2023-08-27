const button = document.querySelector('.btn-add-task')
const input = document.querySelector('.input-task')
const fullList = document.querySelector('.list-task')

let minhaListaDeItens = []

function addNewTask(){
    minhaListaDeItens.push({
        task: input.value,
        finish: false
    })
    input.value = ''

    viewTask()
}

function viewTask(){
    let newLi = ''

    minhaListaDeItens.forEach((item, index) => {
        newLi = newLi + `
        <li class="task ${item.finish && "done"}">
            <img src="./images/check.svg" alt="check-na-tarefa" class="check-task" onclick="finishTask(${index})">
            <p>${item.task}</p>
            <img src="./images/trash.svg" alt="tarefa-para-lixo" class="trash-task" onclick="deleteTask(${index})">
        </li>
        `
    })

    fullList.innerHTML = newLi
    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}

function finishTask(index){
    minhaListaDeItens[index].finish = !minhaListaDeItens[index].finish

    viewTask()
}

function deleteTask(index){
    minhaListaDeItens.splice(index, 1)

    viewTask()
}

function refresTasks(){
    const tarefaDoLocalStorage = localStorage.getItem('lista')

    minhaListaDeItens = JSON.parse(tarefaDoLocalStorage)
    viewTask()
}

refresTasks()
button.addEventListener('click', addNewTask)
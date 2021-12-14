let input = document.querySelector('#texto-tarefa');
let button = document.getElementById("criar-tarefa");
let lista = document.getElementById("lista-tarefas");
let apagaTudo = document.getElementById('apaga-tudo');
let removeFinalizadas = document.getElementById('remover-finalizados');

button.addEventListener('click', criaTarefa);
apagaTudo.addEventListener('click', apagaTarefas);
removeFinalizadas.addEventListener('click', apagaFinalizados)


function criaTarefa() {
    let li = document.createElement('li');
    li.className = 'item';
    li.ondblclick = adicionaCompleted;
    li.innerText = input.value;
    lista.appendChild(li);
    let item = document.querySelectorAll('.item');
    input.value = '';
    for (tarefa of item) {
        tarefa.addEventListener('click', mudaBackground);
        function mudaBackground(event) {
            removeBackground(item);
            let clicado = event.target;
            clicado.classList.add('clicado');
        }
    }
};

function removeBackground(item) {
    for (const li of item) {
        if (li.classList.contains('clicado')) {
            li.classList.remove('clicado');
        }
    }
}


function adicionaCompleted(event){
    if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed')
    } else {
        event.target.classList.add('completed');
    }
}

function apagaTarefas() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}

function apagaFinalizados() {
    let finalizados = document.getElementsByClassName('completed');
    while (finalizados.length > 0) {
        for (let i = 0; i < finalizados.length; i++) {
            finalizados[i].remove();
        }
    }
}
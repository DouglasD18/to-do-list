let input = document.querySelector('#texto-tarefa');
let button = document.getElementById("criar-tarefa");
let lista = document.getElementById("lista-tarefas");

button.addEventListener('click', criaTarefa);

function criaTarefa() {
    let li = document.createElement('li');
    li.className = 'item';
    li.innerText = input.value;
    lista.appendChild(li);
    let item = document.querySelectorAll('.item');
    input.value = '';
    console.log(item);
    for (tarefa of item) {
        tarefa.addEventListener('click', mudaBackground);
        function mudaBackground(event) {
            let cor = document.querySelector('.clicado');
            if (cor == true) {
                cor.classList.remove('clicado');
            }
            let clicado = event.target;
            clicado.className = 'clicado';
        }
    }
};




const input = document.querySelector('#texto-tarefa');
const button = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const apagaTudo = document.getElementById('apaga-tudo');
const up = document.getElementById('mover-cima');
const down = document.getElementById('mover-baixo');
const removeFinalizadas = document.getElementById('remover-finalizados');
const salvaTarefas = document.getElementById('salvar-tarefas');
const removeSelected = document.getElementById('remover-selecionado');

function criaTarefa() {
  const li = document.createElement('li');
  li.className = 'item';
  li.ondblclick = adicionaCompleted;
  li.innerText = input.value;
  lista.appendChild(li);
  const item = document.querySelectorAll('.item');
  input.value = '';
  for (tarefa of item) {
    tarefa.addEventListener('click', mudaBackground);
    function mudaBackground(event) {
      removeBackground(item);
      const clicado = event.target;
      clicado.classList.add('clicado');
    }
  }
}

function removeBackground(item) {
  for (const li of item) {
    if (li.classList.contains('clicado')) {
      li.classList.remove('clicado');
    }
  }
}

function adicionaCompleted(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function apagaTarefas() {
  lista.innerText = '';
}

function apagaFinalizados() {
  const finalizados = document.getElementsByClassName('completed');
  while (finalizados.length > 0) {
    for (let i= 0; i < finalizados.length; i++) {
      finalizados[i].remove();
    }
  }
}

function removeSelecionado() {
  const clicado = document.querySelector('.clicado');
  clicado.remove();
}

function salvarTarefas() {
  localStorage.clear();
  localStorage.setItem('tarefas', lista.innerHTML);
}

function changeText(text1, text2) {
  const text = text1.innerText;
  text1.innerText = text2.innerText;
  text2.innerText = text;
}

function moveUp() {
  const item = document.getElementsByClassName('item');
  for (let i = 1; i < item.length; i++) {
    if (item[i].classList.contains('clicado') && item[i].classList.contains('completed') && item[i - 1].classList.contains('completed')) {
      changeText(item[i], item[i - 1]);
      item[i].classList.remove('clicado');
      item[i - 1].classList.add('clicado');
    } else if (item[i].classList.contains('clicado') && item[i].classList.contains('completed')) {
      changeText(item[i], item[i - 1]);
      item[i].classList.remove('clicado');
      item[i - 1].classList.add('clicado');
      item[i].classList.remove('completed');
      item[i - 1].classList.add('completed');
    } else if (item[i].classList.contains('clicado') && item[i - 1].classList.contains('completed')) {
      changeText(item[i], item[i - 1]);
      item[i].classList.remove('clicado');
      item[i - 1].classList.add('clicado');
      item[i - 1].classList.remove('completed');
      item[i].classList.add('completed');
    } else if (item[i].classList.contains('clicado')) {
      changeText(item[i], item[i - 1]);
      item[i].classList.remove('clicado');
      item[i - 1].classList.add('clicado');
    }
  }
};

function moveDown() {
  const item = document.getElementsByClassName('item');
  for (let i = 0; i < item.length - 1; i++) {
    if (item[i].classList.contains('clicado') && item[i].classList.contains('completed') && item[i + 1].classList.contains('completed')) {
      changeText(item[i + 1], item[i]);
      item[i].classList.remove('clicado');
      item[i + 1].classList.add('clicado');
      break;
    } else if (item[i].classList.contains('clicado') && item[i].classList.contains('completed')) {
      changeText(item[i + 1], item[i]);
      item[i].classList.remove('clicado');
      item[i + 1].classList.add('clicado');
      item[i].classList.remove('completed');
      item[i + 1].classList.add('completed');
      break;
    } else if (item[i].classList.contains('clicado') && item[i + 1].classList.contains('completed')) {
      changeText(item[i + 1], item[i]);
      item[i].classList.remove('clicado');
      item[i + 1].classList.add('clicado');
      item[i + 1].classList.remove('completed');
      item[i].classList.add('completed');
      break;
    } else if (item[i].classList.contains('clicado')) {
      changeText(item[i + 1], item[i]);
      item[i].classList.remove('clicado');
      item[i + 1].classList.add('clicado');
      break;
    }
  }
}

window.onload = () => {
  lista.innerHTML = localStorage.getItem('tarefas');
  const item = document.getElementsByClassName('item');
  for (tarefa of item) {
    tarefa.ondblclick = adicionaCompleted;
    tarefa.addEventListener('click', mudaBackground);
    function mudaBackground(event) {
      removeBackground(item);
      const clicado = event.target;
      clicado.classList.add('clicado');
    }
  }
};

button.addEventListener('click', criaTarefa);
apagaTudo.addEventListener('click', apagaTarefas);
removeFinalizadas.addEventListener('click', apagaFinalizados);
salvaTarefas.addEventListener('click', salvarTarefas);
removeSelected.addEventListener('click', removeSelecionado);
up.addEventListener('click', moveUp);
down.addEventListener('click', moveDown);

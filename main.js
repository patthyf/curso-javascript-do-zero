var todos = [
  'Fazer café',
  'Estudar Javascript',
  'Acessar comunidade da Rocketseat'
];

var list = document.querySelector('ul.todos');
var input = document.querySelector('input.add');
var button = document.querySelector('button');

// Renderizar todos em tela
function renderTodos() {
  list.innerHTML = "";

  for (key in todos) {
    var todo = document.createElement('li');
    var todoText = document.createTextNode(todos[key]);

    var deleteLink = document.createElement('a');
    deleteLink.setAttribute('href', '#');
    deleteLink.setAttribute('onclick', 'handleDelete('+ key +')');
    
    var linkText = document.createTextNode('Excluir');
    deleteLink.appendChild(linkText);
  
    todo.appendChild(todoText);
    todo.appendChild(deleteLink);
  
    list.appendChild(todo);
  }
};

renderTodos();

// Ouve click no botão
button.onclick = function() {
  var text = input.value;

  todos.push(text);
  input.value = '';
  renderTodos();
};

function handleDelete(key) {
  event.preventDefault();

  todos.splice(key, 1);
  renderTodos();
}
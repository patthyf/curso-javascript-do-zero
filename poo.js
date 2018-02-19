function TodoList() {
  this.listElement = document.querySelector('ul.todos');
  this.inputElement = document.querySelector('input.add');

  this.todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade da Rocketseat'
  ];

  this.init = function() {
    this.loadFromStorage();

    this.render();
  }

  this.loadFromStorage = function() {
    var todos = localStorage.getItem('todos');

    if (todos) {
      this.todos = JSON.parse(todos);
    }
  }

  this.saveToStorage = function() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  this.render = function() {
    this.listElement.innerHTML = "";

    for (key in this.todos) {
      var todo = document.createElement('li');
      var todoText = document.createTextNode(this.todos[key]);

      var deleteLink = document.createElement('a');
      deleteLink.setAttribute('href', '#');
      deleteLink.setAttribute('onclick', 'List.delete('+ key +')');
      
      var linkText = document.createTextNode('Excluir');
      deleteLink.appendChild(linkText);
    
      todo.appendChild(todoText);
      todo.appendChild(deleteLink);
    
      this.listElement.appendChild(todo);
    }
  }

  this.add = function() {
    var text = this.inputElement.value;

    this.todos.push(text);
    this.inputElement.value = '';

    this.render();
    this.saveToStorage();
  }

  this.delete = function(key) {
    event.preventDefault();

    this.todos.splice(key, 1);

    this.render();
    this.saveToStorage();
  }
}

var List = new TodoList();
List.init();
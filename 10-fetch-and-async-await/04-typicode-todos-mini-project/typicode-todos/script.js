const apiURI = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
  fetch(apiURI + '?_limit=10')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((todo) => {
        addTodoToDOM(todo);
      });
    });
};

const addTodoToDOM = (todo) => {
  const div = document.createElement('div');
  div.classList.add('todo');
  div.appendChild(document.createTextNode(todo.title));

  div.setAttribute('data-id', todo.id);

  if (todo.completed) {
    div.classList.add('done');
  }

  document.getElementById('todo-list').appendChild(div);
};

const createTodo = (e) => {
  e.preventDefault();

  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };

  fetch(apiURI, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => addTodoToDOM(data));
};

const toggleCompleted = (e) => {
  if (e.target.classList.contains('todo')) {
    e.target.classList.toggle('done');

    updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
    // console.log(e.target.dataset.id);
  }
};

const updateTodo = (id, completed) => {
  fetch(`${apiURI}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ completed }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // .then((response) => response.json())
  // .then((data) => console.log(data));
};

const deleteTodo = (e) => {
  if (e.target.classList.contains('todo')) {
    const id = e.target.dataset.id;
    fetch(`${apiURI}/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => e.target.remove());
  }
};

const init = () => {
  document.addEventListener('DOMContentLoaded', getTodos);
  document.querySelector('#todo-form').addEventListener('submit', createTodo);
  document
    .querySelector('#todo-list')
    .addEventListener('click', toggleCompleted);
  document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
};

init();
// getTodos();

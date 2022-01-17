const submit_todo_btn = document.getElementById('submit_todo');
const todo_title_input = document.getElementById('todo_title');
const todo_description_text_area = document.getElementById('todo_description');
const todos_container = document.querySelector('.main-wrapper__todos');
const btn_delete = document.getElementById('btn_delete')
const todos = [];

const renderTodos = todos => {

  todos.forEach(element => {
    const todo_container = document.createElement('div');
    const todo_title = document.createElement('h3');
    const todo_description = document.createElement('p');
    const btn_delete = document.createElement('button');

    btn_delete.classList.add('btn_delete');
    btn_delete.append('delete');

    todo_title.innerText = element.title;
    todo_description.innerText = element.description;
    todo_container.append(todo_title, todo_description, btn_delete);
    todos_container.append(todo_container);
    
    btn_delete.onclick = () => {
      todos.filter((todo) => todo !== element);
      localStorage.setItem('todos', JSON.stringify(todos));
      todo_container.remove();
    };
  });

};

const initApplication = () => {
  const existingTodos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
  console.log('initApplication', existingTodos);

  renderTodos(existingTodos);
}

submit_todo_btn.onclick = () => {
  const todo = {
    title: todo_title_input.value,
    description: todo_description_text_area.value
  };

  const updatedTodos = [
    ...JSON.parse(localStorage.getItem('todos')) || [], todo
  ];
  
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
  renderTodos(localStorage.setItem('todos', JSON.stringify(updatedTodos)));


}

const getInputs = () => {
  if (todo_title_input.value.length > 0 && todo_description_text_area.value.length > 0) {
    submit_todo_btn.removeAttribute('disabled');
  } else {
    submit_todo_btn.setAttribute('disabled', true);
  }
}

todo_title_input.oninput = () => {
  getInputs();
}

todo_description_text_area.oninput = () => {
  getInputs();
}

initApplication();

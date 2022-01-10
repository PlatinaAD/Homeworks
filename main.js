const submit_todo_btn = document.getElementById('submit_todo');
const todo_title_input = document.getElementById('todo_title');
const todo_description_text_area = document.getElementById('todo_description');
const todos_container = document.querySelector('.main-wrapper__todos');
const todos = [];

const initApplication = () => {
  if (!localStorage.getItem('todos')) {
    localStorage.setItem('todos', JSON.stringify([]));
  }
}

submit_todo_btn.onclick = () => {
  const existingTodos = JSON.parse(localStorage.getItem('todos'));
  const todo_container = document.createElement('div');
  const todo_title = document.createElement('h3');
  const todo_description = document.createElement('p');
  const todo = {
    title: todo_title_input.value,
    description: todo_description_text_area.value
  };

  existingTodos.push(todo);
  localStorage.setItem('todos', JSON.stringify(existingTodos));
  todo_title.innerText = todo.title;
  todo_description.innerText = todo.description;

  todo_container.append(todo_title, todo_description);
  todos_container.append(todo_container);
}

const getInputs = () => {
  if (todo_title_input.value.length > 0 && todo_description_text_area.value.length > 0) {
    submit_todo_btn.removeAttribute('disabled');
  } else {
    submit_todo_btn.setAttribute('disabled', true);
  }
}

const renderToDo = () => {
  const renderTodo = JSON.parse(localStorage.getItem('todos'));

  if(localStorage.getItem('todos') == null){
    var myArray =[];
  }else{
    myArray =  JSON.parse(localStorage.getItem('todos'));
}

function addItemToArray(){
    myArray.push(document.getElementById("todos").value);
    localStorage.setItem('todos', JSON.stringify(myArray));
}
}

todo_title_input.oninput = () => {
  getInputs();
}

todo_description_text_area.oninput = () => {
  getInputs();
}

initApplication();
renderToDo();

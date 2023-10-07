// Create a todo

let notesDB = {
  todo: [],
  note: [
    {
      id: 'l9si2z5',
      title: 'My note',
      description: 'This is my note',
      project: 'Main Notes'
    },
    {
      id: 'cboac3t',
      title: 'My note',
      description: 'This is my edited note',
      project: 'Main Notes'
    }
  ]
}

function createTodo(title, description, dueDate, piority, project = 'Main Todos') {
  return {
    id: Math.random().toString(36).substring(2, 9),
    title,
    description,
    dueDate,
    piority,
    project,
    isDone: false
  }
}

function createNote(title, description, project = 'Main Notes') {
  return {
    id: Math.random().toString(36).substring(2, 9),
    title,
    description,
    project
  }
}

function storeObj(objData, objType) {
  notesDB[objType].push(objData);
}


function createObj(type, title, description, dueDate, piority, project) {
  if (type === 'todo') {
    let newTodo = createTodo(title, description, dueDate, piority, project);
    storeObj(newTodo, type)
  }
  else if (type === 'note') {
    let newNote = createNote(title, description);
    storeObj(newNote, type)
  }
}



function editObj(objType, objData, objId) {
  notesDB[objType][objId] = objData

}

// Add a todo

const addTodoForm = document.querySelector('.add-todo-form');
addTodoForm.addEventListener('submit', e => {
  e.preventDefault();
  const title = addTodoForm.title.value;
  const description = addTodoForm.description.value;
  const dueDate = addTodoForm.duedate.value;
  const piority = addTodoForm.piority.value;
  const project = addTodoForm.project.value;
  createObj('todo', title, description, dueDate, piority, project);
  console.log(notesDB);
  addTodoForm.reset();
  toggleFormDisplay();
  todoRendrer();
});

//change .add-todo display for flex to none

function toggleFormDisplay () {
  const addTodo = document.querySelector('.add-todo');
  addTodo.classList.toggle('add-todo-display');
}

function displayAddTodo() {
  const addTodoButton = document.querySelector('.add-btn');
  addTodoButton.addEventListener('click', () => {
    toggleFormDisplay();

  });
}

displayAddTodo();

function todoRendrer() {
  notesDB.todo.forEach(todo => {
    // select div notes-contaiber
    const notesList = document.querySelector('.todo-container');
    const noteItem = document.createElement('div');
    noteItem.classList.add('todo-card');
    noteItem.innerHTML = `
      <h3>${todo.title}</h3>
      <p>${todo.description}</p>
      <p><strong>Project:</strong> ${todo.project}</p>
      <div class="card-buttons">
      <button class="edit-button">Edit</button>
      <button class="delete-button">Delete</button>
  </div>
    `;
    notesList.appendChild(noteItem);
  });

}

notesDB.note.forEach(note => {
  // select div notes-contaiber
  const notesList = document.querySelector('.todo-container');
  const noteItem = document.createElement('div');
  noteItem.classList.add('todo-card');
  noteItem.innerHTML = `
    <h3>${note.title}</h3>
    <p>${note.description}</p>
    <p><strong>Project:</strong> ${note.project}</p>
    <div class="card-buttons">
    <button class="edit-button">Edit</button>
    <button class="delete-button">Delete</button>
</div>
  `;
  notesList.appendChild(noteItem);
});
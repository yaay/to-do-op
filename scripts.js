// Create a todo

let notesDB = {
  todo: [
    {
      id: 'l9si2z5',
      title: 'My todo',
      description: 'This is my todo',
      dueDate: '2020-12-12',
      piority: 'high',
      project: 'Main Todos',
      isDone: false
    }
  ],
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

// Add a todo --- Dom stuff

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
  // editFormControl()
  todoRendrer();
});

function filterByProject(project) {
  notesDB.todo.filter(
    (todo) => {
      todo.project === project
      console.log(todo)
    }
  )
}

//change .add-todo display for flex to none



(function editFormControl(){
  const form = document.querySelector('.add-todo');
  const addBtn = document.querySelector('.add-btn');

  addBtn.onclick = function() {
    form.style.display = "flex";
  }

  window.onclick = function(event) {
    if (event.target == form) {
      form.style.display = "none";
    }
  }

})()




function displayProjects() {
  const projectsList = document.querySelector('.projects-list');
  notesDB.todo.map(todo => {
    const p = document.createElement('p');
    p.addEventListener('click', filterByProject(todo))
    console.log('test',filterByProject(todo));
    p.textContent = todo.project;
    projectsList.appendChild(p);
  })

}

displayAddTodo();

function clearDom() {
  document.querySelector('.todo-container').innerHTML = ''
  document.querySelector('.projects-list').innerHTML = ''
}




function todoRendrer() {
  
  clearDom()
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
  displayProjects();
}

todoRendrer()



// const editFormControl = () => {
//   const form = document.querySelector('.add-todo');
//   const addBtn = document.querySelector('.add-btn');

//   function openForm() {
//     addBtn.onclick = function() {
//       form.style.display = "flex";
//     }
//   }

//   function closeForm() {
//     window.onclick = function(event) {
//       if (event.target == form) {
//         form.style.display = "none";
//       }
//     }
//   }

//   return
// }

// notesDB.note.forEach(note => {
//   // select div notes-contaiber
//   const notesList = document.querySelector('.todo-container');
//   const noteItem = document.createElement('div');
//   noteItem.classList.add('todo-card');
//   noteItem.innerHTML = `
//     <h3>${note.title}</h3>
//     <p>${note.description}</p>
//     <p><strong>Project:</strong> ${note.project}</p>
//     <div class="card-buttons">
//     <button class="edit-button">Edit</button>
//     <button class="delete-button">Delete</button>
// </div>
//   `;
//   notesList.appendChild(noteItem);
// });

// notesDB.todo.forEach(todo => {
//   // select div notes-contaiber
//   const notesList = document.querySelector('.todo-container');
//   const noteItem = document.createElement('div');
//   noteItem.classList.add('todo-card');
//   noteItem.innerHTML = `
//   <h3>${todo.title}</h3>
//   <p>${todo.description}</p>
//   <p><strong>Project:</strong> ${todo.project}</p>
//   <div class="card-buttons">
//   <button class="edit-button">Edit</button>
//   <button class="delete-button">Delete</button>
// </div>
// `;
//   notesList.appendChild(noteItem);
//   displayProjects();

// });
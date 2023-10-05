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

function createTodo(title, description, dueDate, piority, project='Main Todos') {
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

function createNote(title, description, project='Main Notes') {
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

// createObj('note', 'My note', 'This is my note');
// note1 = createNote('My note', 'This is my note')
// noteEdited = createNote('My note', 'This is my edited note')
// editObj('note', noteEdited)

// createObj('todo', 'My todo', 'This is my todo', '2020-10-10', 'high')


// createObj('note', note1.title, note1.description)

// storeObj(note1, 'note')

// notesDB['notes'].push(note1)

// editObj('note', 'This is my edited note')

// console.log(notesDB)

// Create function to display all todo and note in notesDB object

function displayAllNotes() {
    let container = document.createElement('div');
    container.className = 'notes-container';
    for (let note of notesDB.note) {
      let noteElement = document.createElement('p');
      noteElement.textContent = `Note: ${note.title} - ${note.description}`;
      container.appendChild(noteElement);
    }
    for (let todo of notesDB.todo) {
      let todoElement = document.createElement('p');
      todoElement.textContent = `Todo: ${todo.title} - ${todo.description} - ${todo.completed ? 'Completed' : 'Incomplete'}`;
      container.appendChild(todoElement);
    }
    let existingContainer = document.querySelector('.notes-container');
    if (existingContainer) {
      existingContainer.replaceWith(container);
    } else {
      document.body.appendChild(container);
    }
  }
  
  displayAllNotes()
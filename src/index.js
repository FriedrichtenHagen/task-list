import { formatDistance, subDays } from 'date-fns'
const test = formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })

import {displayInput} from './dom.js';


// start modal
const newItemButton = document.querySelector(".newProjectButton")
newItemButton.addEventListener("click", displayInput)
// end modal
const inputScreen = document.querySelector(".inputScreen")
inputScreen.addEventListener("click", displayInput)


const projectSubmitButton = document.querySelector(".projectSubmitButton")
projectSubmitButton.addEventListener("click", () => {console.log(createProject())})

// write the logic here (object creation and editing, eventlisteners)

// get content of input fields
function acceptInput(){
    let title = titleInput.value
    let author = authorInput.value
    let pageNum = pageNumInput.value
    let readStatus = readStatusInput.checked 
    let newBook = new Book(author, title, pageNum, readStatus)
    addBookToLibrary(newBook);
}



// create todo object
function createTask(title, description, dueDate, priority){
  return {
    title : title,
    description : description,
    dueDate : dueDate,
    priority : priority,

  }
}
const workout = createTask("overheadpress", "Work on overhead strength", "01.03.2023", 3)

// create project object


function createProject(){
  const projectTitle = document.querySelector(".projectTitle").value
  const projectDescription = document.querySelector(".projectDescription").value
  
  const newProject = {
    projectTitle : projectTitle, 
    projectDescription: projectDescription,
    todoArray : [{arow : "milk", carrot : "orange"},workout,5],
  }
  return newProject
}


/*
    add a cool font 
*/
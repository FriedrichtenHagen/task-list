import { formatDistance, subDays } from 'date-fns'
const test = formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })

import {displayInput} from './dom.js';


// start modal
const newItemButton = document.querySelector(".newProjectButton")
newItemButton.addEventListener("click", displayInput)
// end modal
const inputScreen = document.querySelector(".inputScreen")
inputScreen.addEventListener("click", displayInput)

// create project array
const projectList = [{projectTitle: "Studying", projectDescription: "working hard"}, {projectTitle: "art", projectDescription: "creating visually appealing websites with css"}]

const projectSubmitButton = document.querySelector(".projectSubmitButton")
projectSubmitButton.addEventListener("click", () => {
  let newProject = createProject()
  
  projectList.push(newProject)
  paintProjects()
})

// write the logic here (object creation and editing, eventlisteners)


// create todo object
function createTask(title, description, dueDate, priority){
  return {
    taskTitle : title,
    taskDescription : description,
    taskDueDate : dueDate,
    taskPriority : priority,
  }
}
const workout = createTask("overheadpress", "Work on overhead strength", "01.03.2023", 3)

// create project object
function createProject(){
  const projectTitle = document.querySelector("#projectTitle").value
  const projectDescription = document.querySelector("#projectDescription").value
  
  const newProject = {
    projectTitle : projectTitle, 
    projectDescription: projectDescription,
    todoArray : [{arow : "milk", carrot : "orange"},workout,5],
  }
  return newProject
}

function paintProjects(){
  const projectsList = document.querySelector(".projectsList")
  // remove existing projects
  while(projectsList.lastChild){
    projectsList.removeChild(projectsList.lastChild)
  }
  // add all items in projectList array
  projectList.forEach(element => {
    let listItem = document.createElement("div")
    listItem.textContent = element.projectTitle
    listItem.classList.add("menuProject")
    projectsList.appendChild(listItem)
  });
}
/*
adjust styling to 100% zoom
fix projectslist, projectlist think of better name

add modal for tasks?
use existing modal?

*/ 
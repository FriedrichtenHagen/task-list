import { formatDistance, subDays } from 'date-fns'
const test = formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })

import {toggleProjectInput, toggleTaskInput} from './dom.js';


// start project modal
const newItemButton = document.querySelector(".newProjectButton")
newItemButton.addEventListener("click", toggleProjectInput)
// end project modal
const inputScreenProject = document.querySelector(".inputScreenProject")
inputScreenProject.addEventListener("click", toggleProjectInput)

// start task modal
const newTaskButton = document.querySelector(".newTaskButton")
newTaskButton.addEventListener("click", toggleTaskInput)
// end project modal
const inputScreenTask = document.querySelector(".inputScreenTask")
inputScreenTask.addEventListener("click", toggleTaskInput)


// create project array
const projectList = []

// event listener on project submit
const projectSubmitButton = document.querySelector(".projectSubmitButton")
projectSubmitButton.addEventListener("click", () => {
  let newProject = createProject()
  
  projectList.push(newProject)
  paintProjects()
})
// event listener on project submit
const taskSubmitButton = document.querySelector(".taskSubmitButton")
taskSubmitButton.addEventListener("click", () => {
  let newTask = createTask()
  
  //push to project .push(newProject)
  paintTasks()
})


// write the logic here (object creation and editing, eventlisteners)


// create task object
function createTask(title, description, dueDate, priority){
  const taskTitle = document.querySelector("#taskTitle")
  const taskDescription = document.querySelector("#taskDescription")
  const taskDate = document.querySelector("#taskDate")
  const taskPriority = document.querySelector("#taskPriority")

  const newTask = {
    taskTitle : taskTitle,
    taskDescription : taskDescription,
    taskDate : taskDate,
    taskPriority : taskPriority,
  }
  // clear input fields
  taskTitle.value = ""
  taskDescription.value = ""

  return newTask
}

function paintTasks(){
  const taskList = document.querySelector(".taskList")
  // remove existing projects
  while(taskList.lastChild){
    taskList.removeChild(taskList.lastChild)
  }
  // add all items in projectList array
  taskList.forEach(element => {
    let listItem = document.createElement("div")
    listItem.textContent = element.taskTitle
    listItem.classList.add("taskText")
    taskList.appendChild(listItem)
  });
}

// create project object
function createProject(){
  const projectTitle = document.querySelector("#projectTitle")
  const projectDescription = document.querySelector("#projectDescription")
  
  const newProject = {
    projectTitle : projectTitle.value, 
    projectDescription: projectDescription.value,
    todoArray : [{arow : "milk", carrot : "orange"},workout,5],
  }
  // clear input fields
  projectTitle.value = ""
  projectDescription.value = ""

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

add a input on task modal for choosing project

*/ 
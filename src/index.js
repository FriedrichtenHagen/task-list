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
const projectList = [{projectTitle: "Inbox", projectDescription: "a placeholder Project", projectTaskList: [{taskTitle: "go shopping", taskDescription: "a placeholder task", taskDate: "01.03.23", taskPriority: "low", taskProject: "Inbox"}]}]

// event listener on project submit
const projectSubmitButton = document.querySelector(".projectSubmitButton")
projectSubmitButton.addEventListener("click", () => {
  let newProject = createProject()
  
  projectList.push(newProject)
  paintProjects()
  console.log(projectList)
  updateProjectSelect()
})
// event listener on task submit
const taskSubmitButton = document.querySelector(".taskSubmitButton")
taskSubmitButton.addEventListener("click", () => {
  let newTask = createTask()

  // decide to which project the task should be pushed
  for(let i=0; i<projectList.length; i++){
    if(projectList[i].projectTitle===newTask.taskProject){
      projectList[i].projectTaskList.push(newTask)
    }
  }
  console.log(projectList)
})

export function updateProjectSelect(){
  const taskProjectSelect = document.querySelector("#taskProject")
  // delete current options
  while(taskProjectSelect.lastChild){
    taskProjectSelect.removeChild(taskProjectSelect.lastChild)
  }

  // fill project select in task modal with all active projects
  projectList.forEach(element => {
    let projectOption = document.createElement("option")
    projectOption.value = element.projectTitle
    projectOption.textContent = element.projectTitle
    taskProjectSelect.appendChild(projectOption)
    })
}

// write the logic here (object creation and editing, eventlisteners)


// create task object
function createTask(title, description, dueDate, priority){
  const taskTitle = document.querySelector("#taskTitle")
  const taskDescription = document.querySelector("#taskDescription")
  const taskDate = document.querySelector("#taskDate")
  const taskPriority = document.querySelector("#taskPriority")
  const taskProject = document.querySelector("#taskProject")

  const newTask = {
    taskTitle : taskTitle.value,
    taskDescription : taskDescription.value,
    taskDate : taskDate.value,
    taskPriority : taskPriority.value,
    taskProject: taskProject.value,
  }
  // clear input fields
  taskTitle.value = ""
  taskDescription.value = ""

  return newTask
}

// display selected project
function updateContent(){
  console.log(this.dataset.projectId)
  const taskList = document.querySelector(".taskList")
  // remove existing tasks
  while(taskList.lastChild){
    taskList.removeChild(taskList.lastChild)
  }
  // add all tasks in projectTaskList
  projectList[this.dataset.projectId].projectTaskList.forEach(element => {
    let newTaskDiv = document.createElement("div")
    newTaskDiv.classList.add("task")
      // task header
      let newTaskHeader = document.createElement("div")
      newTaskHeader.classList.add("taskHeader")
        // task left
        let newTaskLeft = document.createElement("div")
        newTaskLeft.classList.add("taskLeft")
          // task button
          let newTaskButton = document.createElement("div")
          newTaskButton.classList.add("taskButton")
          newTaskLeft.appendChild(newTaskButton)
          // task text
          let newTaskText = document.createElement("div")
          newTaskText.classList.add("taskText")
          newTaskText.textContent = element.taskTitle
          newTaskLeft.appendChild(newTaskText)
        newTaskHeader.append(newTaskLeft)
          // task right
          let newTaskRight = document.createElement("div")
          newTaskRight.classList.add("taskRight")
          newTaskRight.textContent = element.taskDate
        newTaskHeader.append(newTaskRight)
      newTaskDiv.append(newTaskHeader)
      
      // append concealed further task infos
      let newTaskExpand = document.createElement("div")
      newTaskExpand.classList.add("taskExpand")
      newTaskExpand.textContent = element.taskDescription
      newTaskDiv.append(newTaskExpand)

    taskList.append(newTaskDiv)


    // add eventlistener to task
    newTaskDiv.addEventListener("mouseover", function(){
      displayFullTask(newTaskExpand)
    })
    newTaskDiv.addEventListener("mouseout", function(){
      displayFullTask(newTaskExpand)
    })
  })

  function displayFullTask(p1){
    p1.classList.toggle("taskExpandActive")
  }

  // update contentProjectTitle
  const contentProjectTitle = document.querySelector(".contentProjectTitle")
  contentProjectTitle.textContent = projectList[this.dataset.projectId].projectTitle
}

// create project object
function createProject(){
  const projectTitle = document.querySelector("#projectTitle")
  const projectDescription = document.querySelector("#projectDescription")
  
  const newProject = {
    projectTitle : projectTitle.value, 
    projectDescription: projectDescription.value,
    projectTaskList : [],
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
  projectList.forEach((element, index)=> {
    let listItem = document.createElement("div")
    listItem.textContent = element.projectTitle
    listItem.classList.add("menuProject")
    listItem.dataset.projectId = index
    listItem.addEventListener("click", updateContent, false)

    projectsList.appendChild(listItem)




  });
}

// initial update of content
paintProjects()
updateProjectSelect()
// updateContent()



/*
adjust styling to 100% zoom
fix projectslist, projectlist think of better name


add dropdown to tasks
update content on modal submit

delete button for tasks and projects

create a mobile version

*/ 
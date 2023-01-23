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

let currentProjectIndex = 0 // start on inbox

// create project array
let projectList = [{projectTitle: "Inbox", projectDescription: "a placeholder Project", projectTaskList: [{taskTitle: "go shopping", taskDescription: "a placeholder task", taskDate: "01.03.23", taskPriority: "low", taskProject: "Inbox"}, {taskTitle: "Seltene Erden", taskDescription: "Es ist wichtig, dass mal regelmäßig neue Erden prüft. So kann man garantieren, dass alles stimmt.", taskDate: "14.11.23", taskPriority: "high", taskProject: "Inbox"}, {taskTitle: "Mehr sehen", taskDescription: "dalökjdsflrg lkwr rlkmfrelkalvldskfmnlsdfijirae f.", taskDate: "14.11.23", taskPriority: "high", taskProject: "Inbox"}], projectTaskListCompleted: [{taskTitle: "einkaufen", taskDescription: "der Einkauf von gestern", taskDate: "14.11.21", taskPriority: "high", taskProject: "Inbox"}]}]

// event listener on project submit
const projectSubmitButton = document.querySelector(".projectSubmitButton")
projectSubmitButton.addEventListener("click", () => {
  let newProject = createProject()
  
  projectList.push(newProject)
  paintProjects()
  console.log(projectList)
  updateProjectSelect()
  setStorage()
})
// event listener on task submit
const taskSubmitButton = document.querySelector(".taskSubmitButton")
taskSubmitButton.addEventListener("click", () => {
  let newTask = createTask()

  // clear input fields
  taskTitle.value = ""
  taskDescription.value = ""

  // decide to which project the task should be pushed
  for(let i=0; i<projectList.length; i++){
    if(projectList[i].projectTitle===newTask.taskProject){
      projectList[i].projectTaskList.push(newTask)
    }
  }
  displayTasks()
  setStorage()
})

function updateProjectSelect(){
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
    taskCompleted: false,
  }
  return newTask
}

// display tasks of selected project
function displayTasks(){
  const taskList = document.querySelector(".taskList")
  // remove existing tasks
  while(taskList.lastChild){
    taskList.removeChild(taskList.lastChild)
  }
  // add all tasks in projectTaskList
  projectList[currentProjectIndex].projectTaskList.forEach((element, index) => {
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
          // add eventlistener for deleting task
          newTaskButton.addEventListener("click", function(){
            // add function to toggle complete status here!
            newTaskDiv.classList.toggle("taskCompleted")

            toggleTaskCompleted(element, index)
            /*
          write DOM Manipulation:
            create html footer for finished tasks
            function displayTasksCompleted()
*/


          })
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
      
      // add trash icon
      let trashIconTask = document.createElement("img")
      trashIconTask.classList.add("trashIcon")
      trashIconTask.src = "trash-icon.png"
      // add project delete eventlistener
      trashIconTask.addEventListener("click", (e) => {
        // stop the event from propagationg up
        e.stopPropagation();
        // remove task from projectList.projectTaskList
        projectList[currentProjectIndex].projectTaskList.splice(index, 1)
        // repaint content
        displayTasks()
        // update storage
        setStorage()
      })
      newTaskExpand.append(trashIconTask)
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
}

// this function handels the task complete
function toggleTaskCompleted(element, index){
  console.log(element, index)

  // find projectList index of project that contains current task
  let clickedProjectIndex;
  for(let i=0; i<projectList.length; i++){
    if(projectList[i].projectTitle === element.taskProject){
      console.log("the projectList index is: " + i)
      clickedProjectIndex = i
    }
  }
  // this is the version uncompleted->completed
  if(element.taskCompleted){
    // remove task from projectTaskListCompleted
    projectList[clickedProjectIndex].projectTaskListCompleted.splice(index, 1)
    // add task to projectTaskListCompleted
    projectList[clickedProjectIndex].projectTaskList.push(element)
    // set task as uncompleted
    element.taskCompleted = false;
    console.log(projectList[clickedProjectIndex])
  }else{ // this is the version completed->uncompleted
    //remove task from project
    projectList[clickedProjectIndex].projectTaskList.splice(index, 1)
    // add task to projectTaskListCompleted
    projectList[clickedProjectIndex].projectTaskListCompleted.push(element)
    // set task as completed
    element.taskCompleted = true;
    console.log(projectList[clickedProjectIndex])
  }
}






function displayFullTask(task){
  task.classList.toggle("taskExpandActive")
}
function displayCurrentProjectTitle(){
   // update contentProjectTitle
   const contentProjectTitle = document.querySelector(".contentProjectTitle")
   contentProjectTitle.textContent = projectList[currentProjectIndex].projectTitle
}

// create project object
function createProject(){
  const projectTitle = document.querySelector("#projectTitle")
  const projectDescription = document.querySelector("#projectDescription")
  
  const newProject = {
    projectTitle : projectTitle.value, 
    projectDescription: projectDescription.value,
    projectTaskList : [],
    projectTaskListCompleted: [],
  }
  // clear input fields
  projectTitle.value = ""
  projectDescription.value = ""

  return newProject
}

function paintProjects(){
  const projectMenuList = document.querySelector(".projectsList")
  // remove existing projects
  while(projectMenuList.lastChild){
    projectMenuList.removeChild(projectMenuList.lastChild)
  }
  // add all items in projectList array
  projectList.forEach((element, index)=> {
    let listItem = document.createElement("div")
    listItem.textContent = element.projectTitle
    listItem.classList.add("menuProject")
    listItem.dataset.projectId = index
    listItem.addEventListener("click", () => {
      // change currentProjectIndex on click
      currentProjectIndex = index
      displayCurrentProjectTitle()
      displayTasks()

    }) 
    // append concealed further project infos
    let newProjectExpand = document.createElement("div")
    newProjectExpand.classList.add("projectExpand")
    newProjectExpand.textContent = element.projectDescription
    // add trash icon
    let trashIcon = document.createElement("img")
    trashIcon.classList.add("trashIcon")
    trashIcon.src = "trash-icon.png"
    // add project delete eventlistener
    trashIcon.addEventListener("click", (e) => {
      // stop the event from propagationg up
      e.stopPropagation();
      // remove project from projectList
      projectList.splice(index, 1)
        // change currentProjectIndex
        console.log(currentProjectIndex)
      if(currentProjectIndex!==0){
        currentProjectIndex--
      }else{
        currentProjectIndex++
      }
      console.log(currentProjectIndex)
      // repaint project menu
      paintProjects()
      // repaint content
      displayCurrentProjectTitle()
      displayTasks()
      // update project select in modal
      updateProjectSelect()
      // update storage
      setStorage()
    })
    
    newProjectExpand.append(trashIcon) 
    listItem.append(newProjectExpand)

    // add eventlistener for hover expand
    listItem.addEventListener("mouseover", function(){
      displayFullProject(newProjectExpand)
    })
    listItem.addEventListener("mouseout", function(){
      displayFullProject(newProjectExpand)
    })

    projectMenuList.appendChild(listItem)

  });
}

function displayFullProject(project){
  project.classList.toggle("projectExpandActive")
}

function displayMobileMenu(){
  const burgerMenu = document.querySelector(".burgerMenu")
  const menu = document.querySelector(".menu")
  const line1 = document.querySelector('.line1');
  const line2 = document.querySelector('.line2');
  const line3 = document.querySelector('.line3');

  burgerMenu.addEventListener("click", () => {
    menu.classList.toggle("menuMobileActive")
    burgerMenu.classList.toggle("toggle")
  })
}

const contentCompletedHeaderIcon = document.querySelector(".contentCompletedHeaderIcon")
contentCompletedHeaderIcon.addEventListener("click", toggleCompletedIcon)

function toggleCompletedIcon(){
  // activate icon
  contentCompletedHeaderIcon.classList.toggle("completedDropdownActive")
  // activate dropdown
  const contentCompletedExpand = document.querySelector(".contentCompletedExpand")
  contentCompletedExpand.classList.toggle("completedDropdownActive")
}








// initial filling of previously empty storage
function setStorage(){
  // localStorage only accepts string datatype
  // object (projectList) needs to be converted to JSON
  localStorage.setItem("projectList", JSON.stringify(projectList))
}
// edit existing storage
function getStorage(){
  let localStorageReturn = JSON.parse(localStorage.getItem('projectList')) 
  console.log(localStorageReturn)
  return localStorageReturn
}


// check if local storage is populated
if (!localStorage.getItem('projectList')) {
  setStorage();
} else {
  // update projectList to local storage content
  projectList = getStorage();
}
// initial update of content
paintProjects()
updateProjectSelect()
displayCurrentProjectTitle()
displayTasks()
displayMobileMenu()


/*
display priority in some way
improve layout on really wide displays

move delete eventlistener to task trash icon

make tasks markable as finished (save these similiar to google tasks in lower menu)
  write logic: 
    fix with removing of projects and currentProjectIndex
    create completed-> uncompleted
  write DOM Manipulation:
    create html footer for finished tasks
    function displayTasksCompleted()



make all content editable

add sort function for date

Modals
  style task modal (align inputs)
  add input validation
    this requires the inputs to be coded as forms
    e.preventDefault to prevent the form from being submitted to a nonexistant backend

*/ 
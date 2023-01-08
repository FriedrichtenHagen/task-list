import { formatDistance, subDays } from 'date-fns'
const test = formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })

import {displayInput} from './dom.js';

// write the logic here (object creation and editing, eventlisteners)

const newItemButton = document.querySelector(".newProjectButton")
newItemButton.addEventListener("click", displayInput)




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
function createTodoObject(title, description, dueDate, priority){
  return {
    title : title,
    description : description,
    dueDate : dueDate,
    priority : priority,

  }
}
const workout = createTodoObject("overheadpress", "Work on overhead strength", "01.03.2023", 3)

// create list object
function createListObject(listTitle){
  return {
    listTitle : listTitle, 
    todoArray : [{arow : "milk", carrot : "orange"},workout,5],
  }
}
const thursdayList = createListObject("Thursday")

/*
    add a cool font 
*/
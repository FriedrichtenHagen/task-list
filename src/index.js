import { formatDistance, subDays } from 'date-fns'
const test = formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })

import printMe from './dom.js';
console.log(printMe())

// write the logic here (object creation and editing, eventlisteners)

const newItemButton = document.querySelector(".newItemButton")

newItemButton.addEventListener("click", openModul)

function openModul(){
    console.log("warnung")
}
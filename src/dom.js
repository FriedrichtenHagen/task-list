export function toggleProjectInput(){
  const inputProjectForm = document.querySelector(".inputFormProject");
  const inputScreenProject = document.querySelector(".inputScreenProject");

  inputProjectForm.classList.toggle("active")
  inputScreenProject.classList.toggle("active")
}

export function toggleTaskInput(){
  const inputFormTask = document.querySelector(".inputFormTask");
  const inputScreenTask = document.querySelector(".inputScreenTask");

  inputFormTask.classList.toggle("active")
  inputScreenTask.classList.toggle("active")
}

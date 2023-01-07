export function displayInput(){
  const inputForm = document.querySelector(".inputForm");
  const inputScreen = document.querySelector(".inputScreen");

  inputForm.classList.toggle("active")
  inputScreen.classList.toggle("active")
}
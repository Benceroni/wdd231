const navButton = document.querySelector("#navButton");
const navElement = document.querySelector("#navigation")

navButton.addEventListener('click', () =>{
    navButton.classList.toggle("show");
    navElement.classList.toggle("show");
});
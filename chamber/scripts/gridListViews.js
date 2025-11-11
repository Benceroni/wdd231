const gridButton    = document.querySelector("#grid");
const listButton    = document.querySelector("#list");
const listContainer = document.querySelector("#cards");


gridButton.addEventListener("click",removeListView);

listButton.addEventListener("click",addListView);


function addListView(){
    listContainer.classList.add("list");
}

function removeListView(){
    listContainer.classList.remove("list");
}

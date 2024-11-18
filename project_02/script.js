const inputBox = document.getElementById('input-box');

const ListContainer = document.getElementById('list-container');

function addTask()
{
    if(inputBox.value === "")
    {
        alert("You need to write something.");
    }

    else{
        const li = document.createElement("li")
        li.innerHTML = inputBox.value
        ListContainer.appendChild(li)
        const span = document.createElement("span")
        span.innerHTML = "\u00d7"; // code for crossing icon
        li.appendChild(span);
        
    }
    saveData()

    inputBox.value = "";
    
}

ListContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }    
},false)

function saveData(){
    localStorage.setItem("tasks", ListContainer.innerHTML)
}

function showTask()
{
    ListContainer.innerHTML = localStorage.getItem("tasks")
}

showTask();

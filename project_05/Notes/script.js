const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const notes = document.querySelectorAll(".input-box"); // It selects all the notes

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}
// The updateStorage function in your code saves the current state of your notesContainer to the browser's localStorage


createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})
// We are doing this using JS
// <p contenteditable="true" class="input-box">
//                 <img src="images/delete.png" alt="">
//             </p>

notesContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG")
    {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==="P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        });
    }
})
// User clicks on or interacts with a <p> tag.
// The code checks for .input-box elements and sets up a keyup listener on them.
// When the user types in the .input-box, the updateStorage() function is triggered to save the updated content.

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak"); //  Inserts a new line (like <br>) at the current caret position, mimicking the behavior of pressing Shift + Enter.

        event.preventDefault(); //  Prevents the browser's default behavior when the Enter key is pressed.
    }
})

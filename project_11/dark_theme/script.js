var Icon =document.getElementById('icon');


if(localStorage.getItem("theme")== null){
    localStorage.setItem("theme","light");
}


let localData = localStorage.getItem("theme");

if(localData == "light")
{
    Icon.src = "images/moon.png";
    document.body.classList.remove("dark-theme");

}

else if(localData == "dark"){
    Icon.src = "images/sun.png";
    document.body.classList.add("dark-theme");
}

//On clicking "Icon" it will toggle the class "dark-theme" in and out
Icon.onclick = function()
{
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
    Icon.src = "images/sun.png";
    localStorage.setItem("theme","dark");
 }
 else{
    Icon.src = "images/moon.png";
    localStorage.setItem("theme","light");
 }
}
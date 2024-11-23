var Icon =document.getElementById('icon');

//On clicking "Icon" it will toggle the class "dark-theme" in and out
Icon.onclick = function()
{
    document.body.classList.toggle("dark-theme");
 if(document.body.classList.contains("dark-theme")){
    Icon.src = "images/sun.png";
 }
 else{
    Icon.src = "images/moon.png";
 }
}
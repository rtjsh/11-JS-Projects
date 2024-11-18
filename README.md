Project 01

CSS property

A common practice is to apply box-sizing: border-box to all elements for consistent behavior:

* {
    box-sizing: border-box;
}
This ensures padding and borders are always included in the total size, making layouts easier to manage.

Example:

div {
    width: 100px;
    padding: 10px;
    border: 5px solid black;
    box-sizing: border-box;
}
Total width: 100px (content + padding + border)

margin: 100px auto 0;
It is equivalent to

margin-top: 100px;
margin-right: auto;
margin-bottom: 0;
margin-left: auto;

 width: 90%;
 max-width: 470px;

Container Width	   90% (Calculated Width)	Max-Width	Final Width
300px	                    270px	        470px	        270px
600px	                    540px	        470px	        470px
1000px	                    900px	        470px	        470px

background

Shorthand Property: Combines multiple background-related properties into one declaration.
Capabilities: Can set various background attributes, including:
background-color: The color of the background.
background-image: An image as the background.
background-position: Position of the background image.
background-size: Size of the background image.
background-repeat: Repetition of the background image.
background-attachment: Whether the background scrolls with the content or is fixed.


Example:
div {
    background: linear-gradient(45deg, red, blue) no-repeat fixed center / cover;
}

linear-gradient:

Specifies the type of gradient (linear in this case).
A linear gradient creates a color transition along a straight line.
135deg:

Sets the direction of the gradient.
135deg means the gradient moves at a 135-degree angle clockwise from the horizontal axis (bottom-left to top-right).

Here, though the height of the "class:card" is not mentioned, it's height is set to be: 142.5px as padding top and bottom is 40px + 40px and that of the image is 62.5px

outline: Drawn outside the element's box.
border: Drawn inside the element’s box, around the content, padding, and optionally the margin.

#Flex

In CSS, flex: 1 is a shorthand for setting the flexibility of a flex item within a flex container. It combines three properties: flex-grow, flex-shrink, and flex-basis.

Breakdown of flex: 1:

flex: 1;
It is equivalent to:

css
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0%;


Explanation:
flex-grow: 1;

This allows the item to grow and take up the remaining space in the flex container, if there is any available space.
A value of 1 means the item can grow, and it will grow in proportion to other items with a flex-grow value (i.e., if other items also have flex-grow: 1, they will share the available space equally).

flex-shrink: 1;

This allows the item to shrink if the flex container is smaller than its total content.
A value of 1 means the item can shrink, and it will shrink in proportion to other items with the same flex-shrink value.

flex-basis: 0%;

This sets the initial size of the flex item before distributing any extra space.
A value of 0% means the item will initially take up no space (i.e., it starts with a size of 0), and it will grow to take up the remaining space based on the available room in the container.

Note: flex property is used for responsiveness

HTML property

spellcheck="false": Disables the browser's spellcheck functionality for this input field.

Example:
<input type="text" placeholder="Enter city name" spellcheck="false">



Project 2

HTML

srcset -> Use srcset for Responsiveness: Add a srcset for better display on devices with varying screen resolutions:

<img src="images/icon.png" alt="icon" 
     srcset="images/icon-small.png 480w, images/icon-large.png 1024w">



CSS
user-select: none;
The user-select: none property in CSS is used to disable text selection on an element. When applied, users cannot select or highlight text or other selectable content within that element.

content: '';
Usage with ::before and ::after: The content property is mandatory for pseudo-elements[::before and ::after]. Without it, the pseudo-element won't render.

Project 3

Arrow function:

for no parameters or multiple parameters => give paraenthesis
forEach(() => {
    
})

forEach((param1,param2) => {

})

for single parameter => you mayn't give parenthesis

forEach( answers =>{

})#   3 0 - J S - P r o j e c t s 
 
 

Project 4

JSpasswordBox.select():
Selects the text inside the passwordBox element (usually an input field).

document.execCommand("copy"):
Copies the selected text to the clipboard. However, execCommand is considered outdated and is being replaced by the modern Clipboard API.

Code snippets: 
function copyPassword()
{
    passwordBox.select();
    document.execCommand("copy");

}
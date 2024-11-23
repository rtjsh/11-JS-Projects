Positions in CSS:
Static (default): Elements follow the normal document flow (no positioning applied).

Relative: Positioned relative to its original position in the flow. Offset with top, right, bottom, left, but the original space remains reserved.

Absolute: Removed from the flow and positioned relative to the nearest ancestor[an ancestor with position: relative, absolute, or fixed] . If none, it’s relative to the <html>.

Fixed: Similar to absolute, but always positioned relative to the viewport and doesn’t move when scrolling.

Sticky: Acts like relative until a scroll threshold is reached, then sticks like fixed. Requires top, right, bottom, or left.



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

})



Project 4

JS

passwordBox.select():
Selects the text inside the passwordBox element (usually an input field).

document.execCommand("copy"):
Copies the selected text to the clipboard. However, execCommand is considered outdated and is being replaced by the modern Clipboard API.



Code snippets: 
function copyPassword()
{
    passwordBox.select();
    document.execCommand("copy");

}



Project 5

JS

Code:

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}


This method stores a key-value pair in the browser's localStorage.
Key: "notes" – This identifies the data in storage. It must be unique within the application's storage.
Value: notesContainer.innerHTML – The content of notesContainer as a string.


Proeject 6:

CSS

code:

transform: translate(-50%, -50%);  

Used for centering the element both vertically and horzontally

Project 7:

HTML

website: fontawesome for icons

CSS

Syntax:
box-shadow: 0 10px 60px rgba(255, 26, 26, 0.22);
Horizontal Offset (0):

This specifies the horizontal distance of the shadow from the element.
A value of 0 means the shadow is directly centered horizontally (no offset).
Vertical Offset (10px):

This specifies the vertical distance of the shadow from the element.
A value of 10px means the shadow is shifted 10 pixels downward.
Blur Radius (60px):

This controls the blur intensity of the shadow.
A larger value like 60px results in a more diffused (soft) shadow.
Color (rgba(255, 26, 26, 0.22)):

Specifies the shadow color using an RGBA (red, green, blue, alpha) value.
rgba(255, 26, 26, 0.22) is a semi-transparent red color with 22% opacity.

Syntax:
display: flex;

Block-Level Behavior: The flex container behaves like a block-level element

display: inline-flex;
Inline Behavior: The flex container behaves like an inline-level element.

Project 8:

Code:
background-position-x: calc(100% - 20px);

100%: Refers to the far-right edge of the element (the full width of the container).
- 20px: Moves the background 20px to the left from the far-right edge.


Project 9

JS

(/^[A-Za-z]*\s{1}[A-Za-a]*&/)

Meaning of Corrected Regex:

Matches a string that:
/^ -> Matches the start of the string.
Starts with zero or more alphabetic characters ([A-Za-z]*).
Has exactly one space (\s{1}).
Follows with zero or more alphabetic characters ([A-Za-z]*).
$ -> Matches the end of the string.
Examples of Matched Strings:
"Hello World"
"A B"
"Name "
Examples of Non-Matched Strings:
"Hello" (no space)
"Hello World" (more than one space)
"Hello123 World" (contains non-alphabetic characters)
Let me know if you have specific input you'd like to test against this regex! 😊


Use single quote inside double quote.

Project 10

Code:
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
})

searchForm.addEventListener("submit", ... ):
This sets up an event listener for the "submit" event on the searchForm. When the form is submitted, the function provided as the second argument will execute.

(e) => { ... }:
The listener uses an arrow function, where e is the event object that represents the "submit" event.

e.preventDefault();:
Prevents the default behavior of the form submission. Typically, submitting a form triggers a page reload or navigation to the form's action URL. By calling preventDefault(), this default behavior is stopped, allowing you to handle the submission with custom logic.

page = 1;:
This sets the variable page to 1. Presumably, this is used for tracking pagination for a list of search results.

searchImages();:
This calls a function named searchImages, which is likely responsible for fetching and displaying images based on the user's input.

Purpose
The code is likely part of a web application where users can search for images. Instead of the form performing a traditional HTTP request, this approach allows the search to happen dynamically (probably through AJAX or a similar technique), enhancing user experience by not requiring a full page reload.



Nice keep going!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
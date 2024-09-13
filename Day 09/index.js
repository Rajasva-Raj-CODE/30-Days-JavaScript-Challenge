//! Task-1 : Select and HTML element by its ID and change its text content.
let selector = (document.getElementById("game").innerHTML = "call of duty");
// console.log(selector);

//! Task-2 : Select an HTML element by its class and change its background color.
let changeColor = document.querySelector(".colors")
changeColor.style.backgroundColor = "blue"
//! Task-3 : Create a new `div` element with some text content and append it to the body.
let div = document.createElement("div")
div.textContent = "this is new div going to append"
div.style.backgroundColor="lightgreen"
div.style.padding="10px"
document.body.appendChild(div)
//! Task-4 : Create a new `li` element and add it to an existing `ul` list.

//! Task-5 : Select an HTML element and remove it form the DOM.
//! Task-6 : Remove the last child of a specific HTML element.
//! Task-7 : Select an HTML element and change one of its attributes (e.g., `src` of an `img` tag).
//! Task-8 : Add and remove a CSS class to/from an HTML element.
//! Task-9 : Add a click event listener to a button that changes the text content of a paragraph.
//! Task-10 : Add a mouseover event listener to an element that changes its border color.

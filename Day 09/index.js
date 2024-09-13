//! Task-1 : Select and HTML element by its ID and change its text content.
let selector = (document.getElementById("game").innerHTML = "call of duty");
// console.log(selector);

//! Task-2 : Select an HTML element by its class and change its background color.
let changeColor = document.querySelector(".colors");
changeColor.style.backgroundColor = "blue";
//! Task-3 : Create a new `div` element with some text content and append it to the body.
let div = document.createElement("div");
div.textContent = "this is new div going to append";
div.style.backgroundColor = "lightgreen";
div.style.padding = "10px";
document.body.appendChild(div);
//! Task-4 : Create a new `li` element and add it to an existing `ul` list.
var li = document.createElement("li");
li.textContent = "Wednesday";
document.querySelector("ul").appendChild(li);

//! Task-5 : Select an HTML element and remove it form the DOM.
var h2 = document.createElement("h2");
h2.textContent = "hey there...";
document.body.appendChild(h2);
document.body.removeChild(h2);

//! Task-6 : Remove the last child of a specific HTML element.
function removeLastItem() {
  const ul = document.getElementById("myList");
  const lastItem = ul.lastElementChild; // Get the last element
  if (lastItem) {
    ul.removeChild(lastItem); // Remove the last element
  }
}
removeLastItem();

//! Task-7 : Select an HTML element and change one of its attributes (e.g., `src` of an `img` tag).

//! Task-8 : Add and remove a CSS class to/from an HTML element.
//! Task-9 : Add a click event listener to a button that changes the text content of a paragraph.
const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  const paragraph = document.getElementById("myParagraph");
  paragraph.textContent = "the text has been changed";
});
//! Task-10 : Add a mouseover event listener to an element that changes its border color.
// using changeColor created in task2
changeColor.addEventListener("mouseover",function(){
 changeColor.style.border = "5px solid green"
 })
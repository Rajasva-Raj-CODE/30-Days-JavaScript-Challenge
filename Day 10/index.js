//!  Task-1 : Add a click event listener to a button that changes the text content of a paragraph.
const button = document.getElementById('btn')
const para = document.getElementById('paragraph')
 button.addEventListener('click',function(){
    para.textContent="new satatment"
})

//!  Task-2 : Add a double-click event listener to an image that toggles its visibility.
const image = document.getElementById("tsk2");

image.addEventListener("dblclick", () => {
  // Toggle visibility by checking the current display style
  if (image.style.display === "none") {
    image.style.display = "block"; // Show image
  } else {
    image.style.display = "none"; // Hide image
  }
});

//!  Task-3 : Add a mouseover event listener to an element that changes its background color.
const mouseover = document.getElementById("tsk3");
mouseover.addEventListener("mouseover", function () {
  mouseover.style.backgroundColor = "pink";
});

//!  Task-4 : Add a mouseout event listener to an element that resets its background color.
const mouseout = document.getElementById("tsk3");
mouseout.addEventListener("mouseout", function () {
  mouseout.style.backgroundColor = "green";
});
//!  Task-5 : Add a keydown event listener to an input field that logs the key pressed to the console.
const inputField = document.getElementById('myInput');

inputField.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
});

//!  Task-6 : Add a keyup event listener to an input field that displays the current value in a paragraph.
const inputFields = document.getElementById("myInput");
const outputParagraph = document.getElementById("output");

inputFields.addEventListener("keyup", () => {
  outputParagraph.textContent = inputField.value;
});

//!  Task-7 : Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  // Create a FormData object to gather form data
  const formData = new FormData(form);

  // Log the form data to the console
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
});

//!  Task-8 : Add a change event listener to a select dropdown that displays the selected value in a paragraph.
//!  Task-9 : Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
//!  Task-10 : Add an event listener to a parent element that listens for events from dynamically added child elements.

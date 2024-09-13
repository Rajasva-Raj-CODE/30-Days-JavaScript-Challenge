//! Task-1 : Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let PersonName = "Rajasva Raj";
let PersonAge = 26;

console.log(`my name is ${PersonName} and my age is ${PersonAge}`);

//! Task-2 : Create a multi-line string using template literals and log it to the console.
const multipleString = `
                        this is a game
                        I am a gamer
                        i play Arcade game`;
console.log(multipleString);

//! Task-3 : Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let arr = [10, 20, 30, 40, 50, 60];
let [firstElement, secondElement] = arr;
console.log(firstElement);
console.log(secondElement);

//! Task-4 : Use object destructuring to extract the title and author from a book object and log them to the console.
let books = {
  title: "xyz",
  author: "mondosa",
  year: 9201,
};
let { title, author } = books;
console.log(title);
console.log(author);

//! Task-5 : Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let newArr = [50, 60, 70, 80, 99];
let store = [...newArr];
console.log("stroge" + store);

//! Task-6 : Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4));

//! Task-7 : Write a function that takes two parameters and return their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function product(num1, num2 = 1) {
  return num1 * num2;
}
console.log(product(2, 3));

console.log(product(4));

//! Task-8 : Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const name = "Rajasva Raj";
const age = 26;

const details = {
  name,
  age,

  job() {
    console.log(`this is my ${this.name},and my age is ${this.age}`);
  },
};
console.log(details);
console.log(details.job());

//! Task-9 : Create an object with computed property names based variables and log the object to the console.

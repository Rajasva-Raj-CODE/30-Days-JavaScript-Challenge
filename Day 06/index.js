//! Task-1 : Create an array of numbers from 1 to 5 and log the array to the console.
let arr = [1, 2, 3, 4, 5];
console.log(arr);

//! Task-2 : Access the first and last elements of the array and log them to the console.
console.log(arr[0], arr[4]);

//!  Task-3 : Use the `push` method to add a new number to the end of the array and log the updated array.
arr.push(6, 7);
console.log(arr);

//! Task-4 : Use the `pop` method to remove the last element from the array and  log the updated array.
arr.pop();
console.log(arr);

//! Task-5 : Use the `shift` method to remove the first element from the array and  log the updated array.
let arra = [100, 200, 300, 400, 500];
arra.shift();
console.log(arra);

//! Task-6 : Use the `unshift` method to add  a new number to the beginning of the  array and  log the updated array.
arra.unshift(100);
console.log(arra);

//! Task-7 : Use the `map` method to create a new array where each number is doubled and log the new array.
const arr1 = [1, 2, 3, 4, 5];

const doublearr = arr1.map((ele) => ele * 2);
console.log(doublearr);

//! Task-8 : Use the `filter` method to create a new array with only even numbers and log the new array.
//! Task-9 : Use the `reduce` method to calculate the sum of all numbers in the array and log the result.
//! Task-10 : Use a `for` loop to itereate over the array and log each element to the console.
//! Task-11 : Use the `forEach` method to iterate over the array and log each element to the console.
let foreachArr = [40, 20, 45, 10];
foreachArr.forEach((elem) => console.log(elem));
//! Task-12 : Create a two-dimensional array (matrix) and log the entire array to the console.
//! Task-13 : Access and log a specific element from the two-dimensional array.

//! Task-1 : Write a function to check if a number is  even or odd and log the result to the console.
let a = 10;
function check() {
  if (a % 2 == 0) {
    console.log("is even", a);
  } else {
    console.log("is odd", a);
  }
}
check();
//! Task-2 : Write a function to calculate the square of a number and return the result.

function square(z) {
  return z * z;
}
console.log(square(2));

//! Task-3 : Write a function expression to find the maximum of two numbers and log the result to the console
let max = function (n = 100, m = 300) {
  if (n > m) {
    return n;
  } else {
    return m;
  }
};
console.log(max());

//! Task-4 : Write a function expression to concatenate two strings and return the result.
let str = function (name = "Rajasva", lastname = "shrivastav") {
  let fullname = name.concat(lastname);
  return fullname;
};
console.log(str());

//! Task-5 : Write and arrow function to calculate the sum of two numbers and return the result.
let arrow = (a, b) => {
  return a + b;
};
console.log(arrow(2, 4));

//! Task-6 : Write an arrow function to check if a string contains specific character and return a boolean value.

//! Task-7 : Write a function that takes two parameters and return their product. Provide a default value for the second parameter.
//! Task-8 : Write a function that takes a person's name and age and returns a greeting message.Provide a default value for the age.
//! Task-9 : Write a higher-order functions that takes a function and a number, and calls the function that many times.
//! Task-10 : Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

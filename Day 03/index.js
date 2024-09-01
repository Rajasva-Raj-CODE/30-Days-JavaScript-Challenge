//! Task-1 : Write a program to check if a number is positive,negative, or zero, and log the result to the console.
let num = -43;
if (num > 0) {
  console.log("positive");
} else if (num < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

//! Task-2 : Write a program to check if a person is eligible to vote (age >= 18), and log the result to the console.
let age = 23;
if (age >= 18) {
  console.log("eligible to vote");
} else {
  console.log("NOT eligible to vote");
}

//! Task-3 : Write a program to find the largest of three numbers using nested if-else statements.
let a = 5,
  b = 10,
  c = 1;

if (a > b) {
  if (a > c) {
    console.log("the largest of three numbers is ", a);
  } else {
    console.log("the largest of three numbers is ", c);
  }
} else {
  if (b > c) {
    console.log("the largest of three numbers is ", b);
  } else {
    console.log("the largest of three numbers is ", c);
  }
}
//! Task-4 : Write a program that uses a switch case to determine the day fo the week based on a number (1-7) and log the day name to the console.
let dayNO = 9;
switch (dayNO) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("invalid");
}
//! Task-5 : Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console.
// let score=50
// let grade;
// switch(true){
//     case score>=90
//         grade ="A"
//         case 2:
//         score>=80
//         grade ="B"
//         case 3:
//         score>=60
//         grade ="c"
//         case 4:
//         score>=50
//         grade ="A"
//         case 5:
//         score>=40
//         grade ="f"

// }
// console.log("grade",grade);

//! Task-6 : Write a program that Use the ternary operator to check if a number is even or odd and log the result to the console.
let number = 20;
let mod = number % 2 == 0 ? "Even" : "Odd";
console.log(mod);

//! Task-7 : Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2028;
let LeapYear = (year % 4 === 0 && year % 100 !== 0) ||( year % 400 === 0)
if (LeapYear) {
  console.log("it is leap year");
} else {
  console.log("not a leap year");
}



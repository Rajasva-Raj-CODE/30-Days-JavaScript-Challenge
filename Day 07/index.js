//! Task-1 : Create an object representing a book with properties like title, author, and year, and  log the object to the console.
let books ={
    title:"james",
    author:"jhon wick",
    year:"1987",
    getmethod:function(year){
        return `Title:${this.title} Author:${this.author}`
    }
}
console.log(books);

//! Task-2 : Access and log the title and author properties of the book object.
console.log(books.title);
console.log(books.author);
//! Task-3 : Add a method to the book object that return a string with the books title and author, and log the result of calling this method.
console.log(books.getmethod());
//! Task-4 : Add a method to the book object that takes parameter (year)and updates the book's year property, then log the updated object.
books.updateYear = function(newYear){
    this.year = newYear
}
books.updateYear(2023)
console.log(books.year);

//! Task-5 : Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
let library ={
    name:"KGN Library",
    books: [
        {
            title: "The Girl on the Train",
            author: "Ruskin Bond",
            year: 2022
        },
        {
            title: "The Hitchhiker's Guide to the Galaxy",
            author: "Douglas Adams",
            year: 1979
        },
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            year: 1813
        }
    
    ]
}
console.log(library);

//! Task-6 : Access and log the name of the library and titles of all the books in the library.
console.log(library.name);
library.books.forEach((x)=>{console.log(` ${x.title} ${x.author} ${x.year}`);
})

//! Task-7 : Add a method to the book object that uses the `this` keyword to return a string with the book's title and year, and log the result of calling this method.
//! Task-8 : Use a for...in loop to iterate over the properties of the book object and log each property and its value. 
//! Task-9 : Use Object.keys and Object.values methods to log all the keys and values of the book object.
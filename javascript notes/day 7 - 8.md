// Day 7 – Functions, Arrow Functions & Code Reusability
// 📚 What is a Function?

// A function is a reusable block of code designed to perform a specific task. Instead of writing the same code multiple times, we write it once inside a function and call it whenever needed.

// Why do we use Functions?
// Avoid code repetition.
// Make code easier to read.
// Improve code organization.
// Easier to maintain and debug.
// Reuse the same logic multiple times.
// Syntax
// function functionName() {

// }
// Example
// function saveNotes() {
//     localStorage.setItem("notes", textnote.value);
// }

// Calling the function:

// saveNotes();
// 📚 Arrow Functions

// Arrow functions are the modern way of writing functions in JavaScript.

// Syntax
// const functionName = () => {

// }
// Example
// const newNote = () => {
//     texttitle.value = "";
//     textnote.value = "";
// };
// Advantages
// Shorter syntax.
// Easier to read.
// Commonly used in modern JavaScript and React.
// 📚 Function Call

// Creating a function does not execute it.

// To execute a function:

// saveNotes();

// The parentheses () tell JavaScript to run the function.

// 📚 Function Reusability

// Instead of writing

// localStorage.setItem("notes", textnote.value);

// many times,

// create a function:

// function saveNotes(){

//     localStorage.setItem("notes", textnote.value);

// }

// Now simply call:

// saveNotes();

// This makes the code cleaner and easier to maintain.

// 📚 Event Listener with Functions

// An event listener waits for a user action such as clicking a button.

// Syntax
// element.addEventListener("event", functionName);
// Example
// savebtn.addEventListener("click", saveNotes);

// When the Save button is clicked, JavaScript automatically executes the saveNotes() function.

// 📚 Local Storage

// Local Storage allows data to be stored inside the browser even after refreshing or closing the page.

// Save Data
// localStorage.setItem("notes", textnote.value);
// Retrieve Data
// localStorage.getItem("notes");
// Why use Local Storage?
// Stores user data permanently.
// No database required.
// Data remains after refresh.
// 📚 Application State

// An application often needs to remember information.

// Example:

// let maximized = false;

// This variable remembers whether the Notes window is currently maximized.

// Important Concepts Learned
// Functions are reusable blocks of code.
// Arrow functions provide a shorter syntax.
// Functions must be called using ().
// Event listeners connect user actions with JavaScript functions.
// Local Storage saves browser data permanently.
// Variables can represent the current state of an application.
// 📅 Day 8 – Arrays & Objects
// 📚 What is an Array?

// An array is a special JavaScript object used to store multiple values inside a single variable.

// Instead of creating many variables:

// let a = 100;
// let b = 200;
// let c = 300;

// we use one array:

// const numbers = [100, 200, 300];
// Advantages
// Stores multiple values.
// Easy to manage.
// Easy to loop through.
// Supports many useful methods.
// 📚 push()

// Adds a new element to the end of an array.

// Syntax
// array.push(value);
// Example
// numbers.push(400);

// Result

// [100,200,300,400]
// 📚 pop()

// Removes the last element of an array.

// Syntax
// array.pop();
// Example
// numbers.pop();

// Result

// [100,200,300]
// Important

// pop() returns the removed value.

// 📚 shift()

// Removes the first element of an array.

// Syntax
// array.shift();
// Example
// numbers.shift();

// Result

// [200,300]
// 📚 unshift()

// Adds a new element to the beginning of an array.

// Syntax
// array.unshift(value);
// Example
// numbers.unshift(50);

// Result

// [50,100,200,300]
// Important

// unshift() returns the new length of the array.

// 📚 length

// Returns the total number of elements inside an array.

// Syntax
// array.length;
// Example
// console.log(numbers.length);

// Output

// 4
// 📚 Objects

// An object stores related information using key-value pairs.

// Syntax
// const student = {

//     name: "Rahul",

//     age: 22

// };

// Here,

// name → Key

// Rahul → Value

// age → Key

// 22 → Value

// Objects are used to represent real-world entities.

// Example:

// Student

// Car

// Employee

// Product

// Book

// 📚 Dot Notation

// Access object properties using a dot (.).

// Syntax
// object.property;
// Example
// student.name

// Output

// Rahul

// Use dot notation when the property name is known.

// 📚 Bracket Notation

// Access object properties using square brackets.

// Syntax
// object["property"];
// Example
// student["name"];

// Output

// Rahul
// 📚 Dynamic Property Access

// Bracket notation becomes powerful when the property name is stored inside a variable.

// Example

// const key = "name";

// console.log(student[key]);

// Output

// Rahul

// Here JavaScript reads the value of key ("name") and then accesses the corresponding property in the object.

// Difference Between Dot & Bracket Notation
// Dot Notation
// student.name

// Use when the property name is fixed.

// Bracket Notation
// student[key]

// Use when the property name comes from a variable or changes dynamically.

// Important Concepts Learned
// Arrays store multiple values in one variable.
// push() adds an element at the end.
// pop() removes the last element and returns it.
// shift() removes the first element.
// unshift() adds an element at the beginning and returns the new length.
// length returns the number of elements in an array.
// Objects store data using key-value pairs.
// Dot notation accesses known property names.
// Bracket notation accesses dynamic property names.
// Arrays and objects are the foundation for building real applications such as your DevVerse OS Notes app.
// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let name = "justine";

function myFunction () {
  let lastName = "Gennaro";
  return name += " " + lastName;
}
console.log(name);
console.log(myFunction());



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
let count = 0;

function counter () {
  
}
const counter = function () {}
const counter = () => {
  let num = 1;
  return count += num;
  // Return a function that when invoked increments and returns a counter variable.
};
console.log(count);
counter();
console.log(count);
counter();
console.log(count);
counter();
counter();
counter();
console.log(count);
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

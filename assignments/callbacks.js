// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  return cb(arr.getLength)
  // getLength passes the length of the array into the callback.
}

function last(arr, cb) {
  return cb(arr.length-1)
  // last passes the last item of the array into the callback.
}

function sumNums(x, y, cb) {
  return cb(x + y)
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

function multiplyNums(x, y, cb) {
  return cb(x * y)
  // multiplyNums multiplies two numbers and passes the result to the callback.

function contains(item, list, cb) { 
 if (list.indexOf(item) > 0) {
   return cb(true)
 } else {
   return cb(false)
 }
  // check if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}
// console.log(contains("seth", r2, uppercase);

/* STRETCH PROBLEM - someone was trying to explain it to me*/
// const numm = [1,2,1,3,1,2]
function removeDuplicates(array, cb) {
//   const myArr = array;
//   const secondArr = [];
//   // console.log(secondArr);
//   for (let i = 0; i < myArr.length; i++) {
//     console.log(`index:${i} - myArr number :${myArr[i]}`);
//     console.log(`secondArr content: ${secondArr}`);
//     if (secondArr.indexOf(myArr[i]) === -1)
//     secondArr.push(myArr[i]) 
//   }
//   return secondArr;
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
console.log(removeDuplicates(numm));

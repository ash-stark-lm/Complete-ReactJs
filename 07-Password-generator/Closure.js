//A closure is a function that has access to the parent scope, after the parent function has closed.

//first memory allocation then execution
let b = 20

function greet() {
  let a = 20
  function meet() {
    console.log(a)
  }
  return meet //--> reference to the function is returned
}
const num = greet() //stored the refernce of a and outer scope variables
console.log(num) //shows the function meet
num() //->20 //-> closure is created here, a is accessible in the function meet even after greet has finished executing
//-> closure is a function that has access to its own scope, the outer function's scope, and the global scope
//functions memory is stored in heap memory and store its reference in stack memory
//-> closure is created when a function is defined inside another function and the inner function accesses variables from the outer function

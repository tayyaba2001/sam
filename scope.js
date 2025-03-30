let globalVar = "Global"; // Global scope

function outerFunction() {
  let outerVar = "Outer"; // Outer function's local scope

  function innerFunction() {
    let innerVar = "Inner"; // Inner function's local scope
    console.log(globalVar); // "Global" (accesses global scope)
    console.log(outerVar);  // "Outer" (accesses parent scope)
    console.log(innerVar);  // "Inner" (accesses own scope)
  }

  innerFunction();
 // console.log(innerVar); // Error: innerVar is not defined (can't access child scope)
 console.log(globalVar); // "Global" (accesses global scope)
 console.log(outerVar);  // "Outer" (accesses parent scope) // "Outer" (accesses parent scope)
}
// console.log(outerVar);  // "Outer" (accesses parent scope) 
console.log(globalVar); 
outerFunction();
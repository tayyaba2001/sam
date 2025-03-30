// Define a counter before the function begins.
let counter = 3;

function countdown() {
  console.log(counter);   // Print the current counter value.
  counter = counter - 1;  // Decrease the counter by one.
  
  // Base case: stop recursion when counter equals 0.
  if (counter === 0) {
    return;             // Terminates the function without making another recursive call.
  }
  
  // Recursive call: the function calls itself if the base case hasn't been met.
  countdown();
}

countdown();

/*
let counter=3
function countdown(){
console.log(counter);
counter--;
if(counter === 0){return;}
countdown();
}



*/
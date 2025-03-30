//functional programming

function getTotal(a, b) {
    return a + b;
}

var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);

function getDistance(mph, h) {
    return mph * h;
}

var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance);  // Outputs 120
//pure impure

// Pure function (no side effects)
function pureAdd(a, b) { return a + b; }

// Impure function (side effect: logs to console)
function impureAdd(a, b) { console.log(a + b); }

//first class fuctions high order functions
const sayHello = () => "Hello!"; // Function saved in a variable

// Higher-order function (takes a function as input)
function calculate(a, b, operation) { return operation(a, b); }
const result = calculate(5, 3, (x, y) => x * y); // 15
//  function calculate(a,b,operation){return operation(a,b);}
// const result=calculate(5,3,(x,y)=>x*y);
// const result=calculate(5,3,(x,y)=>x*y);
//impure function
// Impure (relies on external variable)
let tax = 0.1;
function calculateTotal(price) { return price * (1 + tax); }


//first class funtions
function greet() { return "Hello!"; }
function printMessage(func) { console.log(func()); }
printMessage(greet); // "Hello!"
// function printMessage(func){console.log(func())}
//function gree(){return "hello";}
//printMessage(gree)
//high order functions
const numbers = [1, 2, 3];
const squares = numbers.map(num => num * num); // [1, 4, 9]
//  const numbers=[1,2,3];
//const squares =numbers.map(num=>num *num);


// Pure function (no side effects)
function getDistance(speed, time) { return speed * time; }

// Higher-order function (accepts a function)
function logResult(operation, a, b) {
  const result = operation(a, b);
  console.log(result);
}

logResult(getDistance, 60, 2); // 120
/*
function getDistance(speed,time){return speed*time;}
function logResult(operation,a,b){ const result=operation(a,b);
return result;}
console.log(logResult(getDistance,a,b));

*/ 


// functional programming
function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <====== THIS HERE!

//oop changine grouping data methods
//creating an object
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

//  3rd part
function addTwoNums(a, b) {
    console.log(a + b) 
}

function randomNum() {
    //randomNum() is impure because Math.random() is non-deterministic. output change
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 }; //input =output specificNum() is pure (same output always).

var useRandom = true;

var getNumber;

if(useRandom) {
   // First-Class Functions:
//Assigning functions to variables (getNumber = randomNum).
//   Passing functions as values.
    getNumber = randomNum
} else {
     // First-Class Functions:
    getNumber = specificNum
}
//high order functions
// addTwoNums accepts the results of getNumber() (though not functions themselves).
addTwoNums(getNumber(), getNumber())



function getadd(a,b){return a+b;}//pure
function getrandom(){return Math.floor((Math.random()*10)+1);} //impure
function specificget(){return 42;}//pure
var abc=true
var the1
if (abc == true){
    the1=getrandom   // first class function function allocation to variable
}
else{
    the1=specificget
}
console.log(getadd(the1(),the1()));  //high order function:function argmnet


function addTwoNums1(specificNum, randomNum) {
    // Takes two functions as arguments, calls them, and logs their sum
    console.log("specific"+specificNum);//specificfunction specificNum() { return 42 }
   
    console.log(specificNum() + randomNum());
}


addTwoNums1(specificNum, specificNum); // returned number is 84
addTwoNums1(specificNum, randomNum); // returned number is 42 + some random number
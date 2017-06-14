function max(numbers) {
  let i = 0;
  let currentMax = numbers[i];
  
  while (i < numbers.length) {
    if (currentMax < numbers[i]){
      currentMax = numbers[i];
    }
    i++;
  }
// while current max is less than number[], return current max =number[]
  return currentMax;
}
var a = [2, 3, 14, 5];
max(a);





function average(numbers) {
 
  var total = numbers[0];
  
  let i = 1;
  while( i < numbers.length) {
   
    total+= numbers[i];
    i++;
  }
 
  return total/numbers.length;
}

 var numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //correctAns1 = 5.5;
  average(numList1);




function fizzBuzz(countTo) {

var result = [] 
let i = 1
while (i < countTo) {
switch (i % 15) {
  case 0:
    result.push("fizzBuzz");
    break;
  case 3:
  case 6:
  case 9:
  case 12:
    result.push("fizz");
    break;
  case 5:
  case 10:
    result.push("Buzz");
    break;
  default:
    result.push(i);
} i++
} return result
}
fizzBuzz(24);



function repeat(fn, n) {
  for ( i=0; i< n; i++){
     fn();
  }
}


function hello() {
  console.log("hello world");
}

function goodBye() {
  console.log("good bye");
}

repeat(hello, 5);
repeat(goodBye, 5);






const myFunction = function() { return true }

console.log(myFunction) // the function itself
console.log(myFunction()) // the result of the function



// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray'];

function filter(arr, fn) {
  // we have an array and function
  // filter function takes those as arguments
  let newArray = []
  // for each item of the array,
  for ( let i=0; i <arr.length; i++){
  if (fn(arr[i]) === true) {
    newArray.push(arr[i]);
  }
  }
  return newArray
}


function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;

  return function (location){
    warningCounter += 1;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const deerCrossing = hazardWarningCreator('Deer crossing Road');

rocksWarning('the mountain');
rocksWarning('the lake');



let moves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]

moves.map(function(element){
return element[0]+ element[1];
 }
 );

moves.forEach(function(element){
  console.log(element);
})


 function filterFunc(element) {
     if ((element[0] >= 0) && (element[1] >= 0 )) {
       return true;
     }
   }
moves.filter(filterFunc);


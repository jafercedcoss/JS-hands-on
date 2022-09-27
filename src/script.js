//  JS Variable Exercise 1 
var carName = " Volvo";
//  JS Variable Exercise 2
var x = 50
//  JS Variable Exercise 3
var x= 5;
var y = 10;
document.getElementById("demo").innerHTML = x+y;
//  JS Variable Exercise 4
var x = 5;
var y = 10;
var z = x + y;
alert(z);
//  JS Variable Exercise 5
var firstName = "John",lastName = "Doe",
 age=35;

 //  JS Operator Exercise 1
 alert(10*5);
 //  JS Operator Exercise 2
 alert(10/2);
//  JS Operator Exercise 3
 alert(15 %9);
//  JS Operator Exercise 4
 x = 10;
 y = 5;
   x += y;
//  JS Operator Exercise 5
   x = 10;
   y = 5;
   x*=y;
//  JS Data Types Exercise 1
let length = 16;          // number

let lastName = "Johnson"; // string

const x = {
  firstName: "John",
  lastName: "Doe"
};                        // object

//  JS Functions Exercise 1
function myFunction() {
    alert("Hello World!");
  }
  myFunction();


//  JS Functions Exercise 2
  function
 
  myFunction()
   
  {
  
    alert("Hello World!");
  }
  
//  JS Functions Exercise 3
    function myFunction(){
  
        return"Hello";
        }
        document.getElementById("demo").innerHTML = myFunction();
//  JS Functions Exercise 4
        function myFunction() {
            document.
          getElementById
          ("demo").
          innerHTML
           = "Hello";
          }

//  JS Object Exercise 1
          const person = {
            firstName: "John",
            lastName: "Doe"
        };
          
          alert(
          person.firstName
          );

//  JS Object Exercise 2
          const person = {
            firstName: "John",
            lastName: "Doe",
           country:"Norway"
           };

//  JS Object Exercise 3
const person = { 
  name: "John", age:50
};
alert(person.name + "is" + person.age);

//  JS Events Exercise 1
<button  onclick="alert('Hello')">Click me.</button>

//  JS Events Exercise 2

<button  onclick="myFunction() ">Click me.</button>

//  JS Events Exercise 3
<div onmouseover ="this.style.backgroundColor='red'">myDIV.</div>

//  JS Strings Exercise 1
let txt = "Hello World!";
let x = txt.length;
alert(x);

//  JS Strings Exercise 2
let txt = "We are  \"Vikings\"";
alert(txt);

//  JS Strings Exercise 3


let str1 = "Hello ";
let str2 = "World!";
alert(str1+str2);


//  JS Strings Methods Exercise 1
let txt = "Hello World!";
txt = txt.toUpperCase();

//  JS Strings Methods Exercise 2
let txt = "I can eat bananas all day";
let x = txt.slice(10, 17);

//  JS Strings Methods Exercise 3

let txt = "Hello World";
txt = txt.replace
("Hello", "Welcome");

//  JS Strings Methods Exercise 4

let txt = "Hello World";
txt = txt.toUpperCase();

//  JS Strings Methods Exercise 5

let txt = "Hello World";
txt = txt.toLowerCase();


//  JS Array Exercise 1
const cars = ["Saab", "Volvo", "BMW"];
let x = cars[1];

//  JS Array Exercise 2
const cars = ["Volvo","Jeep", "Mercedes"];
cars[0]= "Ford";

// JS Array Exercise 3
const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);
// JS Array Method Exercise 1
const fruits = ["Banana", "Orange", "Apple"];
fruits.pop();
// JS Array Method Exercise 2
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Kiwi");

// JS Array Method Exercise 3
const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.splice(1, 2);
// JS Array Sort Exercise 1
const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.sort();
// JS Array dates Exercise 1

const d = new Date();
alert(d);

// JS  dates Exercise 1
const d = new Date();
year= d.getFullYear();
// JS  dates Exercise 2
const d = new Date();
month = d.getMonth();
// JS  dates Exercise 4
const d = new Date();
d.setFullYear(2020);

// JS  maths exercise 1
let r = 
Math.random();

// JS  maths exercise 2
let x = Math.max
(10, 20);
// JS  maths exercise 3
let x = Math.
round(5.3);


// JS  maths exercise 4
let x = Math.
sqrt(9);
// JS  Camparison exercise 1

x = 10;
y = 5;
alert(x >y);

// JS  Camparison exercise 2
x = 10;
y = 10;
alert(x ==y);

// JS  Camparison exercise 3
x = 10;
y = 5;
alert(x !=y);

// JS  Camparison exercise 4
var age = n;
var voteable = (age <18) ?"Too young" :"Old enough";
alert(voteable);

// JS  Condition exercise 1
if 
(x > y)
{
  alert("Hello World");
}

// JS  Condition exercise 2

if
 (x >y) {
  alert("Hello World");
} 
else
 {
  alert("Goodbye");
}

// JS Switch exercise 1


switch
(fruits) {
  
case
 "Banana":
    alert("Hello")
    break;
  
case
 "Apple":
    alert("Welcome")
    break;    
}


// JS Switch exercise 2
switch(fruits) {
  case "Banana":
    alert("Hello")
    break;
  case "Apple":
    alert("Welcome")
    break;
  
default:

    alert("Neither");
}


// JS For Loops exercise 1
let i;
for
 (i= 0; i< 10; i++) {
  console.log(i);
}
//  JS For Loops exercise 2
const fruits = ["Apple", "Banana", "Orange"];
for (x offruits) {
  console.log(x);
}
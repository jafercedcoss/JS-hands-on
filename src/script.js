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

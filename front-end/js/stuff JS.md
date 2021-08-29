- alert("hello");
- data types 
- typeof();
- prompt(); 

<!-- takes input -->
prompt("what is your name?");
- babel ; js compiler to convert ES6 or newer to previous versions

string interpolation    //using template literals to embed variables into strings
- ${variable}   //used in a string wrapped in backticks ` ` 
${add()}    //for functions too 
- string which allows embedding expression inside it = template strings, created by backticks
let a = "deep";
console.log(`what you know about rolling down in the ${a} `);   
$ is called template literals like \n, \x{}, \u{}, 

- variables
var myName = "ani";
alert(myName);

var name = prompt("what is your name?");
alert("my name is" + myName + ", welcome " + name );

- var: declare variables, objects globally or locally, but hoisted  ; var variables can be redecalared
- let: same as variable; to declare a variable limited to the scope of bloack; let can be updated but not re-declared ; can be re-declared in a different scope though
- const : for a variable with a constant value; can't be redeclared and is also block scoped  ; used for api, url etc.  

- hoisting
variables can be used before it's declared; hoisting is javascript's default behaviour i.e. moving declaration to the top by default; decalarations are hoisted, initializations are not
- let and const declaration are not hoisted ; result in error 


- strings
- concatenation // joining 
- string length 
var name="anirudhra";
name.lenght();  //number of characters 
- str.charAt(index) //gives element at index of a string
- slicing and extracting strings
name.slice(0,3);    //ani ; not including 3
name.slice(3,);     //from 3 onwards ; rudhra
- toUpperCase(); toLowerCase();
name.toUpperCase();

- numbers
x++; 
x--;
x+=2; //x = x+2
x+=y //
y = x++;     //if x = 3 then y would also be 3 as it is assigned x before it increments
y = ++x;    //y = 4
works with divide multi too

- console.log();
is only for developer not for user
- stanford karel robot challenges 

- functions
function fName(){
    return `hello world!`;
}
fName();    //calling

//higher order function: function that either accepts functions as parameters, returns a function
//passing function in function  ; function which is passed is calleed a callback function
function fname(fun1, fun2){}

//anonymous function as an argument
timeFuncRuntime(() => {
  for (let i = 10; i>0; i--){
    console.log(i);
  }
});


fname(fun1(), fun2()){}      //this will call the functions

-functions with parameter and return value
-in JS any function can all any function

- default parameters
Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called. So when an argument is passed it will override the default parameter 
/*
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}
 
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!
*/

- helper function
functions being called within another function are often referred to as helper functions.

- function expression
define a function inside an expression; using anonymous function usually and a variable in order to refer to it 
- const is used generally, variable name is the  name of the function
- function expression is not hoisted as "function" declaration; cannot be called before declaration
//function as data
- we can assign function to a variable ; let a = funcName; now the function can be called with shorter a(); to check the original name : console.log(a.name);
- callback


- arrow functions
defining functions using fat arrow "=>"
let hello = function(){
    return "hello";
}
==
let hello = () => "hello" ;     //for function have onle one statement it will return it by default
or
let hello = () => {
    const a = "hello"
    return a;
}
//for parameters ; also for one line block, {} can be skipped 
let sum = (one , two) => `sum is ${one+two}.`;
//for only one parameter () can be skipped
let sum = one => `first num is ${one}`;
console.log(sum(5));


- Math.floor(); round down float 
Math.ceil();    //round up
Math.round();   //rounding whole number

- Math.random();  //16 decimal place random number generator b/t 0 - 0.9999-- ; upto a billion random numbers
var n = Math.random();
n = Math.floor(n*6) ; will give random number b/w 0 to 5   
- love calculator //gives random percentage for two names
/*
prompt("Enter first name:");
prompt("Enter 2nd name:");

var n = Math.ceil(Math.random()*100);
alert("The love score is " + n + "%");
*/  

- if else conditions
/*
prompt("Enter first name:");
prompt("Enter 2nd name:");
var n = Math.ceil(Math.random()*100);
if(n<40){
    var msg = "Bad Love";
}else if(n>40 && n<80){
    msg = "good love";
}else{
    msg = "Best love";
}
alert("The love percentage is " + n + "% " + msg );
*/

- conditonal operators
=== // compares the data types too, like "1" and 1 are not equal 
!== // not equals
>= 
== // "1" and 1 are equal
&& // and
|| // or

//BMI calculator
/*var weight = prompt("Enter you mass:");
var height = prompt("Enter you height:");

var bmi = Math.round(weight / Math.pow(height,2));

if(bmi<18.5){
    var interpretation = "Your BMI is " + bmi + ", so you are underweight.";
}else if(bmi>18.5 && bmi<24.9){
    interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
}else{
    interpretation = "Your BMI is " + bmi + ", so you are overweight.";
}

alert(interpretation);
*/

//leap year program
/*
var year = prompt("Enter an year");

alert(leapCheck());

function leapCheck()
{
if(year%4===0){
    if(year%100===0){
        if(year%400===0){
            return "Leap year.";
        }else{
            return "Not leap year.";
        }
    }else{
        return "Leap year.";
    }
}else{
     return "Not leap year.";
}
}
*/

- Ternary Operator : short hand syntax for ifelse statement ; equivalent to an if/else construct that returns a value
if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}
===
favoritePhrase === 'Love That!'? console.log('I love that!'): console.log("I don't love that!")

//for nested
season === 'spring' ? console.log("It\'s spring! The trees are budding!") : season === 'summer' ? console.log('It\'s sunny and warm because it\'s summer!') : console.log("invalid season.")

// for multiple statements
favoritePhrase === 'Love That!'? (console.log('I love that!'), a =10, console.log(`Love you ${a} times!`)): console.log("I don't love that!")

//returning using ternary and arrow function
const plantNeedsWater = day => {
   var abc = "" ;
  return day === "Wednessday" ? true : false;
};
or  //with only one statement
const plantNeedsWater = day => day === 'Wednesday' ? true : false;


- Truthy value: value that exists; non-falsy value
falsy values: 0, "", '', undefined, null, NaN(not a number) 

//great! line would be printed as wordcount is truthy here
let wordCount = 1;
if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

//assigning values using truthy falsy
let defaultName;
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
var username = "";
console.log(defaultName);   //Stranger will be printed as var username is falsy

//by short-circuit evaluation
let defaultName = username || 'Stranger'; 


- Arrays
collection of related items
JS arrays are mutable, meaning values the contain can be changed through push(), pop() or reassigning internal values even when declared with 'const' keyword but cannot reassign a new array
var a = ["a","v","c","d","s"];

a.length;           //length of array
console.log(a[2]);
a.includes(c);      // returns true 

- adding, removing elements
var arr = [];
arr.push("a","b");      //pushes elements in the array at the end    
arr.pop();  //pop removes the last element, doesn't take any argument ; console.log will give the removed element

- more methods  //don't console.log with these methods directly
shift(); //removes the first element ; if console.log(arr.shift()) it'll give the removed element
unshift("element");     //add element to the front
indexOf('element');     //find the index
toString();         //converts an array to string
arr1.concat(arr2)   //joins arr1 and arr2 with commas; for more arr1.concat(arr2,arr3)
str.split('');     //splits each letter of string into array
str.split(' ');     //splits each word of string into array
arr.join(" ");      //joins array elements in a string by the seperator specified; if omitted it will be seperated by commas
slice(start, end);      //from start, up to but not equal to end
splice(startPos, deleteCount, items to add at startPos)        //if delete count is omitted all the arrays from start will be deleted, if items not specified it'll only delete the items
/*splice
let arr = ["abc", 'acd', 'bcd'];
arr.splice(1,0, 'fffff', 'cccc'); //["abc", "fffff", "cccc", "acd", "bcd"]
console.log(arr);
arr.splice(3,1,'gggg');  //["abc", "fffff", "cccc", "gggg", "bcd"]
console.log(arr);
*/

- iterative array methods //takes a callback function and iterate through an arrary elements

- arr.forEach(function)   //calls a function for every element of an array; function can be defined inside or outside and should have an argument // returns undefined
//
var sum = 0;
var numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);
function myFunction(item) {
  sum += item;
  document.getElementById("demo").innerHTML = sum;
}
or
var sum = 0;
var numbers = [65, 44, 12, 4];
numbers.forEach(function(item){
  sum += item;
  document.getElementById("demo").innerHTML = sum;
});
//

- map()   //similar to forEach(); just returns an array
//
const secretMessage = animals.map(item=>{
  let a = item.charAt(0);
  return a;
});
//

- filter();   // creates an array filled with all array elements that pass a test (provided as a function);   The callback function for the .filter() method should return true or false; only elements which will return true will be added to the new array
//
const longFavoriteWords = favoriteWords.filter(word => {
  return (word.length > 7);
});
console.log(longFavoriteWords);
//

- arr.some(fun())    //returns true if atleast one element of array passes the test function
- arr.every(fun())    //returns true if every element of array passes the test function

- find()  //returns the first element in an array that passes the test
- findIndex()   //will return the index of the first element that evaluates to true in the callback function.
//
const startsWithS = animals.findIndex( s => {
  return s.charAt(0) === 's' ;
});
console.log(startsWithS);
//

- reduce(); arr.reduce(function(acc, item))    //reduces an array to a single value by executing a provided function from left to right of array elements and stores it in accumulator (1st argument) ; returns a single value  // accumulator gets 1st element of array, item get 2nd, if initial value is not specified
or reduce(); arr.reduce(function(acc, item), initialvalue)      //initial value: first value giving to accumulator
//
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator+currentValue;
});
console.log(newSum);

output:
The value of accumulator:  1
The value of currentValue:  3
The value of accumulator:  4
The value of currentValue:  5
The value of accumulator:  9
The value of currentValue:  7
16

also,
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator+currentValue;
},10);
console.log(newSum);

output:
The value of accumulator:  10
The value of currentValue:  1
The value of accumulator:  11
The value of currentValue:  3
The value of accumulator:  14
The value of currentValue:  5
The value of accumulator:  19
The value of currentValue:  7
26
//

//filtering one array from other
let betterWords = storyWords.filter((item) => {
  return !unnecessaryWords.includes(item);
});
or
let betterWords = storyWords.filter( item => {
  return unnecessaryWords.indexOf(item) < 0;
});
//

- chaining the iterative methods
//
const text = arr.filter((item) => item < 4).reduce((acc, item) => acc*item);
console.log(text);
//
- reducing multi array to single
mulArray = [[1,2],[3,4],[5,6]];
const abc = mulArray.reduce((acc, item) => {
  return acc.concat(item);
});
console.log(abc);

- Nested arrays
const nestedArr = [[1], [2, 3]];
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2


- fizz buzz problem
//fizzbuzz
/*
var arr = [];
var i = 1;

function fizzbuzz(){
    if(i%3===0 && i%5===0){
        arr.push("fizzbuzz");
    }else if(i%3===0){
        arr.push("fizz");
    }else if(i%5===0){
        arr.push("buzz");
    }else{
        arr.push(i);
    }
    i++;
    console.log(arr);
}
*/

//who's buying lunch prog
/*
var names = ["Angela", "Anirudhra", "Jenny", "Kat", "Ritvik"];

function whosPaying(n){
  
    var num = Math.floor(Math.random()*(names.length));
    var payingName = names[num];
    return (payingName + " is going to buy lunch today!");
}

console.log(whosPaying(names));
*/


- Loops
- while loop

//99 bottles of bear using while loop
/*
var bottles = 99

function beerSong(){

while(bottles>=0){
  if(bottles===1){
    console.log(bottles + " bottle of beer on the wall, " + bottles + " bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.");
  }else if(bottles===0){
    console.log("No more" + " bottles of beer on the wall, " + "no more" + " bottles of beer.\nGo to the store and buy some more, " + 99 + " bottles of beer on the wall.");
  }else{
    console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer.\nTake one down and pass it around, " + (bottles - 1) + " bottles of beer on the wall.");
  }

bottles--;
}
  
}
*/

- for loop
for number of times loop should run

//fibonacci generator
/*
var number = prompt("Enter number for fibonacci");
console.log(fibonacciGenerator(number));
function fibonacciGenerator(n){
var f = 0;
var s = 1;
var fi = [];
for(var i=1; i<=n; i++){
if(i===1){
  fi.push(f);
}else if(i===2){
  fi.push(s);
}else{
  var t = f + s;
  fi.push(t);
  f = s;
  s = t;
}
}
return fi;
}
*/

- do while
when we want a piece of code to at least run one time


Document Object Model

- inline 
onload = "alert('hello');"

internal:
<script>
    alert(1);
</script>

- external
<script src="" > </script>      //added in the end of the html as the elements its changing might be after it if we put it in start, unlike css

- html tree generator ; chrome extention
- document.firstElementChild;   //gives the whole html 
- document.firstElementChild.firstElementChild;  or lastElementChild etc    //head
var heading = document.firstElementChild.firstElementChild; //if its a h1
heading.innerHTML = "ABC";      //changes the h1
heading.style.color = "red";

- document.querySelector("input").click();  //selects the input element and click it; input button was object, click() is method , color is property

- properties:
    innerHTML
    style
    firstChild

- a method is something an object can do    //associated with an object, a function an object can do
    click()
    appendChild()
    setAttribute()

//dom challenge 1
- document.firstElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML = "Angela"

- document.getElementsByTagName("li")   //gives an array of all li elements
document.getElementsByTagName("li")[1].style.color = "purple" ;

- document.getElementsByClassName("btn")
document.getElementsByClassName("btn")[0].style.color = "red";

- document.getElementById("title").innerHTML = "Good Bye";

<!-- combining selector -->
- document.querySelector("")        // can put element, class, or ID 
document.querySelector("#title")    //for id
document.querySelector(".btn")  //for class
document.querySelector("li a")      //select anchor tag in li tag ; child and parent
document.querySelector("li.list")       //occuring in same element so . operator ; gives first list item
document.querySelector("#list a"); 

- document.querySelectorAll("#list .item")  // gives an array for more than one list class

js version of css styles:
https://www.w3schools.com/jsref/dom_obj_style.asp

- in js css style would be camel cased: like font-size is fontSize
document.querySelector("h1").style.fontSize = "3rem";
document.querySelector("button").style.backgroundColor = "yellow"

to get a list of classes of a tag
- document.querySelector("button").classList;

- document.querySelector("button").classList.add("invisi");   //adds new class to the button
- document.querySelector("button").classList.remove("invisi"); //removes
- document.querySelector("button").classList.toggle("invisi"); // adds or removes

- document.querySelector("h1").innerHTML;       //could be text or could be any text along with its child tags
document.querySelector("h1").innerHTML = "<em> Good bye <em>" ;   //tags will work too

- document.querySelector("h1").textContent;   //text inside h1
document.querySelector("h1").textContent = "Good bye";

- document.querySelector("a").attributes;   //gives list of attached to it
- document.querySelector("a").getAttribute("href")   //value of that single attribute
- document.querySelector("a").setAttribute("href", "https:www.bing.com"); //changes the value of href
document.querySelector("a").setAttribute("href", bingurl);  //if a variable

- anonymous function

- event listener
- addEventListener("type", listener or function);

document.querySelector("button").addEventListener("click",clicked);

adding event listner click to a button  // clicked is function but is not used with () as clicked() would be straigt up method call
// passing a function as an input ; just name
- higher order functions: functions that can take other functions as inputs
/*
function sub (a, b){
    return a-b;
}
function add (a, b){
    return a+b;
}
function mul (a, b){
    return a*b;
}

function cal(a,b,op){
    return op(a,b);
}
*/


- using anonymous function ; self invoking function with no name
document.querySelector("button").addEventListener("click",function ( {alert("I got clicked)}));

- in console:

debugger;
cal(4,5,mul);       //your function

opens the debugger mode and can give step by step working of your code  //through the down arrow

- var audio = new Audio("file.mp3");    // constructs a new audio html behind the code
similar to document.getElementByTagName("audio").play();


- objects   ; designated by {} , are like variables but contain multiple values
unordered data in the form of key-value pairs
key is like a variable name that points to a location in memory that holds a value 
although we can’t reassign an object declared with const, we can still mutate it
//
var boy = { 
    name: "Tim",    //properties
    age: 19,
    language: ["french", "english"]
};
or
let spaceship = {
  'Fuel Type': 'diesel',        //'Fuel Type' has quotation marks because it contains a space character.
  color: 'silver'
};

- objects are refereneced by address, not by value; hence passed by reference
// hence, any changes to x will change person too
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
var x = person;
x.age = 10; 
//can also access values using brackets along with the ' ' or simply a variable
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
var x = person['age'];

//also object can be mutated permanently but can't be reassigned    //because obj becomes refernce to the memory location of the spaceship object, but not to the spaceship variable
let spaceship = {
  homePlanet : 'Earth',
  color : 'red'
};
let tryReassignment = obj => {
  obj = {
    identified : false, 
    'transport type' : 'flying'
  }
  console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
};
tryReassignment(spaceship) // The attempt at reassignment does not work.
spaceship // Still returns {homePlanet : 'Earth', color : 'red'};
 
spaceship = {
  identified : false, 
  'transport type': 'flying'
}; // Regular reassignment still works.
//
When we did the reassignment in the body of tryReassignment(), the obj variable came to refer to the memory location of the object {'identified' : false, 'transport type' : 'flying'}, while the spaceship variable was completely unchanged from its earlier value

- Iterating through objects / for-in loop / 
for...in will execute a given block of code for each property in an object. ; it is for unordered entities, hence not for arrays
//
for (let item in spaceship.crew) {
  console.log(`${item}: ${spaceship.crew[item].name}`);   //[item] is used for the same reason , it is passed and .name is not a property of item
}
//


- 'this' keyword
The this keyword references the calling object which provides access to the calling object’s properties.
//
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo(){
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};
//
- 'this' with arrow function
Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object
also keeps the context of this when calling a function  //solves some problem //check yt video again
hence, if need to use this keyword in an arrow function we will write the objectName.property
//
const robot = {
  energyLevel: 100,
  checkEnergy: () => {
    console.log(`Energy is currently at ${robot.energyLevel}%.`)
  }
} 
//
- can also use this to create properties in an object
//
const robot = {
  energyLevel: 100,
  checkEnergy() {
    this.names = ['aa', 'bb'];
    console.log(`Energy is currently at ${robot.energyLevel}%.`)
  }
}
console.log(robot.names);
//


- accessing a property that doesn't exists will give undefined; and to add a property
obj.prop = 'yoyo';
- deleting a property
delete obj.prop;    //The delete operator is designed to be used on object properties. It has no effect on variables or functions.

- working with objects in functions
let returnAnyProp = (objectName, propName) => objectName[propName]; //here dot operator won't work as it will search for propName property
returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

- methods   ; functions of an object
//
const alienShip = {
  invade: function () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};
or
const alienShip = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

- Nested objects
//
let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  }
};
console.log(spaceship.crew.captain.['favorite foods][1]);   //cake
//


- Getters
get and return the internal properties of an object ; self-invoking method ; no parentheses 
Getters can perform an action on the data when getting a property.
properties cannot share the same name as the getter/setter function
A getter won’t accept any arguments as parameters;
A getter cannot have it’s value reassigned.
//
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}
 
// To call the getter method: 
person.fullName; // 'John Doe'
//

- setters
reassign values of existing properties within an object
setters shouldn't call getterss but instead call backing variables; unless result in fatal error of stack size exceeding
//
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){
    if(typeof num === 'number'){
      if(num >= 0){
        this._numOfSensors = num;
      }else{
        console.log('Pass in a number that is greater than or equal to 0');
      }
    }
  }
};

robot.numOfSensors = 100;       //accessing setter
console.log(robot.numOfSensors);      //accessing getter
//

- factory function
A factory function is a function that returns an object and can be reused to make multiple object instances. Factory functions can also have parameters allowing us to customize the object that gets returned
//
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep(){
      console.log('Beep Boop');
    }
  };
};
const tinCan = robotFactory('P-500', true);
tinCan.beep();
//
shorthand:
//
const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep(){
      console.log('Beep Boop');
    }
  };
};
const tinCan = robotFactory('P-500', true);
tinCan.beep();
//

- Destructured assignment
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
In destructured assignment we create a variable with the name of an object’s key that is wrapped in curly braces { } and assign to it the object
//
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
const {functionality} = robot;
functionality.beep();   //prints Beep boop
//

- constructor function
first letter of function name will be capitalized
//
function BellBoy (n , a, l){
    this.name: "Tim",    
    this.age: 19,
    this.language: ["french", "english"]
}
var bellBoy2 = new BellBoy("Ani", 21, ["hindi" , "english"]);   //creating objects from constructor

- Built-in Object Methods //needs revision
.hasOwnProperty()
.valueOf()
Object.assign(target, ...sources) : Copies the values of all enumerable own properties from one or more source objects to a target object. ; target will be changed
//
const newObj = Object.assign(obj1, obj2 ) ; obj1 will be changed and properties of obj2 will be added to it and all the combined properties will be assigned to newObje too
//
Object.entries(objname) : eturns an array of a given object's own enumerable string-keyed property [key, value] pairs
Object.keys(objname) : Returns an array containing the names of all of the given object's own enumerable properties.



- switch statement
switch(expression){
    case expression:
        statement;
    break;

    default:
        statement;
}

- adding function in a constructor function, function becomes a property
/*
function BellBoy (n, a, l, t){
    this.name = n;
    this.age = a;
    this.lang = l;
    this.clean = function (){
         alert("cleaning in progress");
}
}
var bellBoy1 = new BellBoy("ritvik", 22, ["english", "hindi"]);
bellBoy1.clean();
*/



- keydown event 
document.addEventListener("keydown", function(event){
    console.log(event);
});
// console log the details about the event that actually triggers the function; can name it anything

document.addEventListener("keydown", function(eve){
    console.log(eve.key);
});
//getting property of the event

- callbacks


- animation
- setTimeout(function, milisec delay)
/*
function btnAnimation(key){
    var anim = document.querySelector("." + key);
    anim.classList.add("pressed");

    setTimeout(function (){
        anim.classList.remove("pressed", 1000);
    })
}
*/


- jQuery : JS library   // can be download or just use a google cdn
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>    //place it above the script tag
document.querySelector("h1")   == jQuery("h1") == $("h1")

- to check if jQuery is ready //to get over an improper placement of jquery script tag
$(document).ready(function(){
    $('h1').css("color","red");
});

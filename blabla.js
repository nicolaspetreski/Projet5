/**#2 Javascript Variables & Data Types**//**#2 Javascript Variables & Data Types**//**#2 Javascript Variables & Data Types**//**#2 Javascript Variables & Data Types**/
const life = 100;
const life = 1000;
console.log(life) ; 
>>>> Error


let life = 100;
life = life - 50;
console.log(life);
>>>> 50


/**#3 Javascript Functions & Parameters – set of code that does a task**//**#3 Javascript Functions & Parameters – set of code that does a task**/
const name = "Dev Ed";
function adder(num1, num2) {
    console.log(num1 + num2);
}

adder(5, 10);
>>>> 15

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const name = "Dev Ed";
const youtuber = "PewDiePie";
function toUpper(text) {
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}

toUpper(name);
toUpper(youtuber);
>>>> DEV ED
>>>> PEWDIEPIE
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**#4 Javascript String Concatenation – **//**#4 Javascript String Concatenation – **//**#4 Javascript String Concatenation – **//**#4 Javascript String Concatenation – **/
const myAge = 24;

const yourAge = 21;

console.log(myAge + yourAge);
>>>> 45

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log("hello my name is" + "Ed")
>>>> Hello my name isEd
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const name = "Edwin";

console.log("Hello it's me and my name is ${name}");
>>>> Hello it's me and my name is Edwin
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const name = "Edwin";
const age = "24";

console.log("Hello it's me ${name} and my age is ${age}")
>>>> Hello it's me Edwin and my age is 24

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const name = "Edwin";
const age = 24;

const combined = name + age;

console.log(combined);
>>>> Edwin24


/**#5 Javascript If Else Statements – **//**#5 Javascript If Else Statements – **//**#5 Javascript If Else Statements – **//**#5 Javascript If Else Statements – **/
const age = 20;

if(age > 18){
    console.log("you are good to go");
}
>>>> You are good to good
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const age = 10;

if(age >18){
    console.log("you are good to go");
} else {
    console.log("you are not old enough");
}
>>>> you are not old enough
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const age = 10;

if(age >18){
    console.log("you are good to go");
} else if(age < 15){
    console.log("you are really young")
} else {
    console.log("you are not old enough");
}
>>>> you are really young
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const age = 16;

if(age >18){
    console.log("you are good to go");
} else if(age < 15){
    console.log("you are really young")
} else {
    console.log("you are not old enough");
}
>>>> you are not old enough
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const age = 18;

if(age === 18){
    console.log("you are good to go");
} else {
    console.log("you are not old enough");
}
>>>> you are good to go
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const age = 18;

if(age >= 18){
    console.log("you are good to go");
} else {
    console.log("you are not old enough");
}
>>>> you are good to go
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const dice1 = 6;
const dice2 = 3;

if (dice1 === 6 && dice2 === 6) { // checks for the 2 values//
    console.log("you rolled a double");
} else {
    console.log("you didn't");
}
>>>>You rolled a double
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const dice1 = 6;
const dice2 = 3;

if (dice1 === 6 || dice2 === 6) {// checks for one of the two value to be valide//
    console.log("you rolled a double");
} else {
    console.log("you didn't");
}
>>>>You rolled a double
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**#6 Javascript Arrays– **//**#6 Javascript Arrays– **//**#6 Javascript Arrays– **//**#6 Javascript Arrays– **//**#6 Javascript Arrays– **//**#6 Javascript Arrays– **/


const schedule = [‘wake up’ , ‘eat’ , ‘film video’ , ‘watch netflix’];

console.log(schedule[1]); >>>>eat
console.log(schedule[0]); >>>>wake up
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const schedule = [‘wake up’, ‘eat’, ‘film video’, ‘watch netflix’];
schedule.push(‘Hello’);

console.log(schedule);
>>>>[‘wake up’, ‘eat’, ‘film video’, ‘watch netflix’, ‘Hello’]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const schedule = [‘wake up’, ‘eat’, ‘film video’, ‘watch netflix’];
schedule.pop();

console.log(schedule);
>>>>[‘wake up’, ‘eat’, ‘film video’]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const schedule = [‘wake up’, ‘eat’, ‘film video’, ‘watch netflix’];
schedule.shift();

console.log(schedule);
>>>>[ ‘eat’, ‘film video’, ‘watch netflix’]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const schedule = [‘wake up’, ‘eat’, ‘film video’, ‘watch netflix’];
schedule.unshift(Hello);

console.log(schedule);
>>>>[ ‘Hello’, ‘wake up’, ‘eat’, ‘film video’, ‘watch netflix’]


const schedule = [‘wake up’, ‘eat’, ‘film video’, ‘watch netflix’];
console.log(schedule.indexOf(‘Eat’));
>>>>1
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const schedule = [‘wake up’, ‘eat’, ‘film video’, ‘watch netflix’];
const film = schedule.indexOf(‘Film video’);

console.log(film);
>>>>2
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const schedule = [‘wake up’, ‘eat’, ‘film video’, ‘watch netflix’];
const film = schedule.indexOf(‘Film video’);

console.log(schedule[film]);
>>>>Film video
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**#7 Javascript Objects and Keyword This **//**#7 Javascript Objects and Keyword This **//**#7 Javascript Objects and Keyword This **//**#7 Javascript Objects and Keyword This **/
//creating an object//

const user = {
    name: "Edwin",
    age: 24,
    married: false, //this is a bullean//
    purchases: ["phone", "car", "laptop"]
};

console.log(user.purchases);
>>>> ["phone", "car", "laptop"]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const user = {
    name: "Edwin",
    age: 24,
    married: false, //this is a bullean//
    purchases: ["phone", "car", "laptop"]

    sayName: function() {
        console.log(this);
    }
};

user.sayName();
>>>> {name: "edwin", age:24, married: false, purchases: Array(3), sayName: f}
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const user = {
    name: "Edwin",
    age: 24,
    married: false, //this is a bullean//
    purchases: ["phone", "car", "laptop"]

    sayName: function() {
        console.log(this.name);
    }
};

user.sayName();
>>>> edwin
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**#8 Javascript For Loop and While Loop **//**#8 Javascript For Loop and While Loop **//**#8 Javascript For Loop and While Loop **//**#8 Javascript For Loop and While Loop **/

const names = ["Ed", "John", "Maria", "Eliza", "Burrito", "Harry", "Potter"];

for(name of names){
    console.log(name);
}
>>>> Ed
    John
    Maria
    Eliza
    Burrito
    Harry
    Potter    
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const names = ["Ed", "John", "Maria", "Eliza", "Burrito", "Harry", "Potter"];

for (name of names){
    console.log("Hello there ${name}");
}
>>>> Hello there Ed
    Hello there John
    Hello there Maria
    Hello there Eliza
    Hello there Burrito
    Hello there Harry
    Hello there Potter
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const names = ["Ed", "John", "Maria", "Eliza", "Burrito", "Harry", "Potter"];

for (name of names){
    if (name === "Maria"){
        console.log("maria is in my list");
    }
}
>>>>Maria is in my list
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const names = ["Ed", "John", "Maria", "Eliza", "Burrito", "Harry", "Potter"];

for (name of names){
    console.log(name);
    if (name === "Maria"){
        console.log("maria is in my list");
    }
}
>>>>Ed
    John
    Maria
    Maria is in my list
    Eliza
    Burrito
    Harry
    Potter
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const names = ["Ed", "John", "Maria", "Eliza", "Burrito", "Harry", "Potter"];

for (name of names){
    console.log(name);
    if (name === "Maria"){
        console.log("maria is in my list");
        break;
    }
}
>>>>Ed
    John
    Maria
    Maria is in my list
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let loading = 0;

while(loading < 100){
    console.log("website is still loading");

    loading++;
}
>>>> (100) Website is still loading // loads to 100 then above 100 stops
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**#9 Javascript Dom Manipulation **//**#9 Javascript Dom Manipulation **//**#9 Javascript Dom Manipulation **//**#9 Javascript Dom Manipulation **//**#9 Javascript Dom Manipulation **/
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

html >>> 
<h1 class="title">
<button class="changeColor">Click me</button>
</h1>

JS >>> const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");

text.style.color = "red"; //color red
text.style.backgroundColor = "red" // not background-color...
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

html >>> 
<h1 class="title">
<button class="changeColor">Click me</button>
</h1>

CSS >>>
.change {
    color: lightblue;
    font-size: 100px;
    border: 10px solid black;
}

JS >>>
const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");

text.classList.add("change");
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

html >>> 
<h1 class="title">
<button class="changeColor">Click me</button>
</h1>

CSS >>>
.change {
    color: lightblue;
    font-size: 100px;
    border: 10px solid black;
}

JS >>>
const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");

changeColor.addEventListener('click', function(){
    text.classList.add('change'); // On click activates class change in css
})
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

HTML >>>
<ul class="name-list">
    <li>Ed</li>
    <li>Jon</li>
    <li>Joe</li>
    <li>Boy</li>
    <li>Harry</li>
</ul>

JS >>>
const userList = document.querySelectorAll(".name-list li");

for(user of userList){
    user.addEventListener("click", function(){
        console.log(this);
    });
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
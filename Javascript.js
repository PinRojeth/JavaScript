// let message; 
// message = 'Hello';

// let message 
// message = 'Hello!';
// alert(message);

// let use = 'John';
//    age = 25,
//    message = 'Hello';

// let message;
// message = 'Hello!';
// message = 'World';
// console.log(message);

// let Hello = 'Hello World!';
// let message;
// message = 'Hello World!';
// alert(Hello); 
// alert(message); 

// let message = "this";
// // repeated 'let' leads to an error
// let message = "that"; // SyntaxError: 'message' has already declared

// let userName; 
// let test123

// let $ = 1;
// let _ = 2;
// alert($+_);

// let 1a; // cannot start with a digit
// let my-name; // hyphens '_' aren't allowed in the name 

// let let = 5; // can't name a variable "let" error!
// let return = 5; // also can't name it "return", error!

// const myBirthday = '18.04.1982';
// myBirthday = '01.01.2001'; 

// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";

// let color = COLOR_ORANGE;
// alert(color);

// let admin = 'John';
// let name = 'Rozet';
// alert(admin);
// alert(name);

// let admin, name;
// name = "john";
// admin = name;
// alert(admin);

// let nameOfOurPlanet = "Earth";
// ler currentUserName = "Rozet";

// //Data Type
// let message = "hello";
// message = 123456;
// // No Error

// let n = 123;
// n = 12.345;

// //NUMBER

// let billion = 1000000000;
// let billion = 1_000_000_000;
// let billion = 1e9;
// alert(7.3e9); // 73000000000

// let num = 255;
// alert( num.toString(16)); //ff
// alert( num.toString(2)); //11111111

// let num = 1.23456;
// alert( Math.round(num * 100) / 100);

// let num 12.34;
// alert( num.toFixed(1)); // "12.3"

// let num = 12.36; //"12.4"
// alert( num.toFixed(1)); // "12.34000", added zeroes to make exactly 5 digits

// let num = 12.34;
// alert( num.toFixed(5));

// alert(1e500); // Infinity

// alert( 0.1+0.2 == 0.3 ); //False

// alert( 0.1 + 0.2 ); // 0.3000000000000000000004

// alert( 0.1.toFixed(20) ); // 0.100000000000555

// let sum = 0.1 + 0.2;
// alert( sum.toFixed(2) ); // "0.30"

// let sum = 0.1 + 0.2 
// alert( +sum.toFixed(2) ); // "0.3"


// let single = 'single-quoted';
// let double = "double-quoted";
// let backticks = `backticks`;

// function sum(a, b) {
//     return a + b;
// }
// alert(`1 + 2 = ${sum(1, 2)}.`);

// let guestList = `Guests
//  * John
//  * Pete 
//  * Mary 
// `;
// alert(guestList);
// //if
// let guestList = "Guests: 
//  * John"; // Error: Unexpected token ILLEGAL 

// let guestList = "Guests:\n * John\n * Pete\n * Mary";
// alert(guestList); // a multiline list of guests 

// let str1 = "Hello\nWorld"; // two lines using a "newline symbol"
// // two lines using a normal newline and backticks
// let str2 = `Hello
// World`;
// alert(str1 == str2); // true

// alert( "\u00A9" );
// alert ( "\u{20331}" );
// alert ( "\u{1F60D}" );

// alert( 'I\'m the Walrus!' );
// //or
// alert( `I'm the Walrus!` );

// // if you need to show an actual backslash within the string
// alert( `THe Backslash: \\` );

// // Sting length
// alert( `My/n`.length );

// // Accessing Character 
// let str = `Hello`;
// // the first character 
// alert( str[0] );
// alert ( str.charAt(0) );
// // the last character
// alert( str[str.length - 1] );

// let str = `Hello`;
// alert( str[1000] ); // undifined
// alert( str.charAt[1000] ); //'' (an empty string)

// // Using for..of
// for (let char of "Hello") {
//     alert(char); 
// }
// for (let char of "Rozet") {
//     alert(char);
// }

// // Strings are immutable
// let str = 'Hi';
// str[0] = 'h'; // error
// alert( str[0] ); // doesn't work 

// let str = 'Hi';
// str = 'h'+ str[1]; // replace the string
// alert( str ); // hi

// alert( 'Interface'.toUpperCase() ); 
// alert ( 'Interface'.toLowerCase() );

// // Single Character lowercased
// alert( 'Interfac'[0].toLowerCase() );

// let str = 'Widget with id';
// alert( str.indexOf('Widget') );
// alert( str.indexOf('widget') );
// alert( str.indexOf("id") );

// let str = 'Widget with id';
// alert( str.indexOf('id', 2) )

// let str = 'As sly as a fox, as strong as an ox';
// let target = 'as';
// let pos = 0;
// while (true){
//   let foundpos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   alert( `Found at ${foundPos}` );
//   pos = foundpos + 1; 
// }

// let str = "Widget with id";
// if (str.indexOf("Widget") !=-1){
//     alert("We found it");
// }

// alert( ~2 );
// alert( ~1 );
// alert( ~0 );
// alert( ~-1 );

// let str = "Widget";
// if (~str.indexOf("Widget")){
//     alert( 'Congrantulation!' );
// }

// alert( "Widget".startsWith("Wid") );
// alert( "Widget".endsWith("get") );

// let str = "stringify";
// alert( str.slice(0, 9) );
// alert( str.slice(0, 8) );
// alert( str.slice(0, 7) );
// alert( str.slice(0, 6) );
// alert( str.slice(0, 5) );
// alert( str.slice(0, 4) );
// alert( str.slice(0, 3) );
// alert( str.slice(0, 2) );
// alert( str.slice(0, 1) );

// // if thereis no second argument, then SLICE goes till the end of the string
// let str = "Stringify";
// alert( str.slice(2) ); // 'ringify',

// //Negative values for START/END are also possible. They mean the position is counted from the string end:
// let str = "Stringify";
// alert( str.slice(-4, -1) );

// //str.substring(start [, end])
// // This is almost the same as slice,but it allows START to be greater than end.

// let str = "Stringify";
// alert( str.substring(2, 6) );
// alert( str.substring(6, 2) );

// alert( str.slice(2, 6) );
// alert(str.slice(6, 2) );

// //str.substr(start [, length])
// let str = "Stringify";
// alert( str.substr(2, 4) );

// // the first argument may be negative, to count from the end:
// let str = "stringify";
// alert( str.substr(-4, 2) ); 

// //Comparing Strings 
// alert( 'a' > 'Z'); 

// // str.codePointAt(pos)
// alert( "z".codePointAt(0) );
// alert( "Z").codePointAt(0 );

// //String.fromCodePoint(code)
// alert( String.fromCodePoint(90) ); 

// //add Unicode characters by their codes using \u followed by the hex code:
// alert( '\u005a' );


// //Excersice 1 (Uppercase the first character)
// let newStr =str[0].toUpperCase()+ str.slice(1);
// //Here's the 2nd variant
// Function ucFirst(str) {
//     if (!str) return str;

//     return str[0].toUpperCase() = str.slice(1);
// }

// alert( ucFirst("john") );

// //Exersice 2 (Check for spam)
// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();
    
//     return lowerStr.includes('viagra') 
// }

// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free xxxxx') );
// alert( checkSpam("innocent rabbi") );

// //Exersice 3 Truncate the text
// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//     str.slice(0, maxlength - 1) + '...' : str;
// }

// //Exersice 3 (Extract the money)
// function extractCurrencyValue(str) {
//     return +str.slice (1);
// }alert( extractCurrencyValue('$120') === 120)

// let arr = new Array();
// let arr = [];

// let fruits = ["apple", "orange", "plum"];
// console.log(fruits);

// let fruits = ["apple", "orange", "plum"];
// console.log( fruits [0]);
// console.log( fruits [1]);
// console.log( fruits [2]);

// let fruits = ["apple", "banana", "pear"]
// fruits [3] = 'Lemon';
// console.log(fruits);

// let fruits = ["apple", "pear", "banana", "lemon"]
// console.log( fruits.length);

// let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// alert ( arr[1].name);
// arr[3]();
// let fruits = [
//     "Apple",
//     "Orange",
//     "Plum",

// ];
// console.log(fruits);

// let fruits = ["apple", "banana", "pear"]
// console.log( fruits[fruits.length-1]);
// console.log( fruits[fruits.length-2]);
// console.log( fruits[fruits.length-3]);
// Shorter then ( fruits [fruits.length-..] )
// let fruits = ["apple", "banana", "pear"]
// console.log( fruits.at(-1) );

// Methods pop (name.pop() );

// let fruits = ["apple", "pear", "banana"];
// console.log( fruits.pop() );
// console.log( fruits );

// Methods push

// let fruits = ["apple", "banana"];
// fruits.push("pear");
// console.log(fruits);
// console.log(fruits.length);

// let fruits = ["apple", "banana", "pear"];  
// console.log( fruits.shift() );
// console.log(fruits);

// let fruits = ["Orange", "Pear"];
// console.log(fruits.unshift('Apple') );
// console.log(fruits);

// let fruits = ["apple", "banana", "pear"];
// fruits.push("Orange", "Peach");
// fruits.unshift("pineapple", "Mango");
// console.log(fruits);

// let fruits = ["Banana"]
// let arr = fruits;
// console.log( arr === fruits);
// arr.push ("pear");
// console.log(fruits);

// let fruits = [];
// fruits[99999] = 5;
// fruits.age = 25;
// console.log(fruits);

// let arr = ["apple", "Orange", "Pear"];
// for (let i = 0; i < arr.length; i++) {
//     console.log( arr[i] );
// }

// let fruits = ["Apple", "Orange", "Plum"];
// for (let fruit of fruits){
//     console.log( fruits );
// }

// let arr = ["apple", "orange", "pear"];
// for (let key in arr) {
//     console.log( arr[key] );
// }

// let money = [];
// money[fruits] = "Apple";
// console.log(fruits.length);

// let arr = [1, 2, 3, 4, 5];
// arr.length = 2
// console.log(arr);
// arr.length = 5
// console.log(arr)[3]]; //Undefined

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log( matrix[2][2]);

// matrix[2][2] = [7,8,9]

// let matrix = [
//     [4, 6, 8],
//     [3, 7, 9],
//     [1, 8, 10]
// ];
// console.log(matrix[0][0]);

// let arr = [1, 2, 3];
// console.log( arr ); 
// console.log ( String(arr) === '1,2,3');

// console.log( "" + 1 );
// console.log( "1" + 1);
// console.log( "1,2" + 1 );

// let fruits = ["Apple", "pear", "Orange"];

// let shoppingCart = fruits; 
// shoppingCart.push("banana");
// console.log( fruits);
// console.log( fruits.length);

// let style = ["jazz", "Blues"];
// style.push("Rock-n-Roll");
// console.log(style);
// style [Math.floor((style.length -1) /2 )] = "Classics";
// console.log( style.shift);
// style.unshift("Rap", "Reggae" );
// console.log(style);

// let arr = ["a", "b"];
// arr.push (function(Rozet) {
//     console.log( this );
// });
// arr [2]();

// function sumInput() {
//     let numbers = [];
//     while (true) {
//         let value = prompt("A number please?", 0);
//         if (value === "" || value === null || !isFinite(value)) break;
//         numbers.push(+value);
//     }
//     let sum =0;
//     for (let number of numbers){
//         sum += number;
//     }
//     return sum;
// }
// console.log( sumInput());

// console.log( 2 > 1 );
// console.log( 2 == 1 );
// console.log(2 != 1 );

// let result = 5 > 4
// console.log( result );

// console.log( 'Z' > 'A' );
// console.log( 'Glow' > 'Glee' );
// console.log( 'Bee' > 'Be' );

// console.log( '2' > 1 );
// console.log( '01' ==1 );

// console.log( null > 0); // false   
// console.log( null == 0); // false
// console.log( null >= 0); // true
// console.log( null <= 0); //true

// console.log( 5 > 4 );
// console.log("apple" > "pineapple");
// console.log( "2" > "12");
// console.log( undefined == null);
// console.log( undefined === null );
// console.log( null == "\n0\n");
// console.log( null === +"n\n0\n" );

// //// WHILE LOOP

// while (condition) {
//     // code
//     // so-called "loop body"
// }
// let i = 0; 
// while (i < 10) {
//     console.log( i );
//     i++;
// } // 1 2 3 4 5 6 7 8 9 10

// let i = 10;
// while (i) {
//     console.log( i );
//     i--;
// } //  10 9 8 7 6 5 4 3 2 1 
// another way 
// let i = 3;
// while (i) console.log  (i--); // 3 2 1


// //// DO WHILE LOOP

// do { 
//     ...loop body...
// } while (condition);

// let i = 0;
// do {
//     console.log( i );
//     i++;
// } while (i < 3 );


// /// FOR LOOP
// for ( being; condition; step) {
//     // ... loop body ...
// }

// for (let i = 0; i <3; i++){
//     console.log(i);
// }

// let i = 10
// if (i < 3) { console.log(i); i++}

// if (i < 3) { console.log(i); i++}

// if (i < 3) { console.log(i); i++}


// ///////INLINE VARIABLE DECLARATION

// for (let i = 0; i < 3; i++) {
//     console.log(i); // 0, 1, 2
// }
// console.log(i); //error, no such variable

// let i =0;

// for (i = 0; i < 3; i++) {
//     console.log(i);
// }
// console.log(i);

// //// SKIPPING PARTS
// any part of FOR can be skipped.
// let i =0;

// for (; i < 3;i++) {
//     console.log(i);
// } 

// / another Shortcut
// let i = 0;

// for (;i < 3;) {
//     console.log(i++);
// }

// let sum = 180;

// while (true){
//     let value = console.log("Enter a numer",'');

//     if (!value) break; 

//     sum += value;
// }
// console.log( 'Sum:' + sum); // it's run until you cancel it will be stop 


// ////// CONTINUE
// for (let i = 0; i < 10; i++) {

//     if (i % 2 == 0) continue;
    
//     console.log(i);
// } // iif you put i % 2 it's mean that you pick the number that don't match with 2 

// / The CONTINUE directive helps decrease nesting

// for (let i = 0; i < 10; i++) {
    
//     if ( i % 3 ) {
//         console.log(i);
//     }
// }


// for (let i = 0; i > 3 ; i++) {
//     for (let j = 0; j > 3; j++) {
//         let input = console.log (`Value at coords (${i},${j})`, '');

//     }
// }
// console.log('Done!'); // (0,0....)

// outer: for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         let input = console.log(`Value at coords (${i},${j})`,'');

//         if (!input) break outer;

//     }
// }
// console.log('Done!');


// let i = 3;

// while (i){
//     console.log(i--);
// }

// let i = 0;
// while (++i < 5) console.log(i);

// for (let i = 2; i <= 10; i++) {

//     if (i % 2 == 0){
//         console.log( i );
//     } 
// }

// let i = 0 
// while (i < 3) {
//     console.log(`number ${i}`)
//     i++;
// }

// let num; 

// do {
//     num = console.log ("Enter a number grater than 100?", 0);

// } while (num <= 100 && num);


// let n = 10; 

// nextPrime: 
// for (let i = 2; i <= n; i++) {

//     for (let j = 2; j <i; j++) {
//         if (i % j == 0) continue nextPrime;
//     }
//     console.log( i );
// }


// //// FUNCTION

// function adNumber(num1, num2) {  /////  function adNumber (num1, num2 ) => num1 + num2 
//     console.log( num1 + num2 );  /////   adNumbe(5, 5);
// }
// adNumber(5, 5);

// function showMessage(){
//     console.log( 'Hello everyone' );
// }

// showMessage();

// function pinRozet(){
//     console.log('Hello Crush' );
// }
// pinRozet();

// const name = 'Rozet';

// function showMessage() {
//     const message = 'Hello,' + name;
//     console.log(message);
// }
// showMessage();

// const name = 'Rozet';

// function showMessage(){
//     const name = "Nit";
    
//     const message = 'Hello,' + name;
//     console.log(message);
// }
// console.log( name );
// showMessage();
// console.log ( name );

// function showMessage( From, text) {
//     console.log(From +': '+text);
// }
// showMessage('Rozet', 'Hello!');
// showMessage('Rozet', "what's up ");
// showMessage('Nit', "I'm good and how about you?");

// function showMessage(from, text = "no text given"){
//     console.log( from +" : " + text);
// }
// showMessage("Ann");

// function showMessage (text) {
//     text = text || 'empty';
//     console.log(text);
// }
// showMessage();

// function showCount(count) {
//     console.log(count ?? "unknown");
// }

// showCount(0);
// showCount(null);
// showCount();

// function sum(a, b) {
//     return a + b;
// }
// let resrult = sum (1, 2);
// console.log(resrult);

// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm('Do you have permiision from your parents?');
//     }
// }

// let age = console.log('How old are you?', 18);

// if ( checkAge(age)) {
//     console.log( 'Access granted' );
// } else {
//     console.log( 'Access denied' );
// }


// function showMovie(age) {
//     if (!checkAge(age) ) {
//         return;
//     }

// console.log( "showing you the movie" );
// }

// function doNothing(){
//     return;
// }
// console.log( doNothing() === undefined);


// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {
//         for (let j= 2; j< i; j++) {
//             if (i% j == 0) continue nextPrime;
//         }
//         console.log(i);
//     }
// }
// showPrimes();

// function checkAge(age) {
//     if (age >18) {
//         return true;
    
//     }
//     return confirm('Did parents allow you?');
// }

// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// function pow(x, n) {
//     let result = x;
//     for (let i = 1; I < n; i++) {
//         result *= x;
//     }
//     return result;
// }

// let x = console.log("x?", '');
// let n = console.log("n?", '');

// if (n < 1) {
//     console.log(`Power ${n} is not supported , use a postive integer`);
// } else {
//     console.log( pow (x, n) );
// }


// /// ARROW FUNCTIONS, THE BASIC

// let func = (arg1, arg2, argN) => expression;

// let func= function (arg1 , arg2, argN) {
//     return expression;
// };

// /Concrete example

// let sum = (a,b) => a + b;
// console.log( sum (1, 2) );

// let double = n => n * 2;
// console.log( double(12) );

// let sayHi = () => console.log("Hello!");
// sayHi();

// let age = console.log("What is your age?", 18);

// let welcome = (age < 18) ?
//     () => console.log("You're not allowed to be here!!") :
//     () => console.log("Greetings!");

//     welcome();

// let sum = (a, b) => { // the curly brace opens a multiline function
//     let result = a + b;
//     return result; // if we use curly braces, then we need an explicit "return"
// };

// console.log( sum(1, 2) );

// function ask  (question, yes, no) {
//     if (confirm(question)) yes ();
//     else no ();
// }

// ask("Do you agree?",
//     () => console.log( "You agreed." ),
//     () => console.log( "You canceled the execution.")
// );

// / Function and Method



// Function functionName (parameter) {
//     // Content
// }

// function Crypto (Bitcoin, Dogecoin) {
//     let sum = Bitcoin + Dogecoin;
//     return sum;
// }
// console.log(Crypto(15, 52));

// Javascript Method

// object = {
//     methodName: function (){
//         //content
//     }
// }
// object.methodName ()

// Example
// let employee = {
//     empname: "Rapel",
//     department : "sales",
//     detail :function() {
//         return this.empname + " works with Department " + this.department;
//     }
// };
//     console.log(employee.detail() );


// Async Function
// async function f() {
//     return 1;
// }

// async function f() {
//     return ;
// }

// f().then(alert);

// async function f () {
//     return Promise.resolve(1);
// }

// f().then(console.log);

// async function f(){

//     let promise =new Promise ((resolve,reject) => {
//         setTimeout(() => resolve("done!"),1000)
        
//     });

//     let result = await promise;

//     console.log(result);
// }
// f()

// /Can't use await in regular functions
// function f() {
//     let promise = Promise.resolve(1);
//     let result = await promise; // Syntac error
// }

// async function showAvatar() {
//     //read our JSON

//     let response = await fetch('/article/promise-chaining/user')

//     // read github user
//     let githubResponse = await fetch (`https://api.github.com/users/${user.name}`);
//     let githubUser = await githubResponse.json();

//     // Show the avatar
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     // wait 3 seconds
//     await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//     img.remove();
//     return githubUser;
// }

// showAvatar();

// we assume thiscode runs at top level, inside a module
// let response = await fetch('/article/promise-chaining/user.json');
// let user = await response.json();
// console.log(user);

// class Thenable {
//     constructor(num) {
//         this.num = num;
//     }
//     the(resolve, reject){
//         console.log(resolve);
//         setTimeout(() => resolve(this.num *2), 1000);
//     }
// }

// async function f() {
//     let result = await new Thenable(1);
//     console.log(result);
// }
// f();

// class Waiter {
//     async wait() {
//         return await Promise.resolve(1);
//     }
// }
// new Waiter()
//     .wait()
//     .then(console.log);

// aysnc function f() {
//     await Promise.reject(new Error("Whoops!"));
// }


// //// Try....catch
// async function f () {

//     try {
//         let response = await fetch ('/no-user-here');
//         let user = await resopnse.json();
//     } catch(err) {
//         console.log(err);
//     }
// }

// f();

// async function f () {
//     let response = await fetch ('');
// }

// f().catch(console.log);

// async function loadJson(url) {
//     let response = await fetch (url);

//     if ( response.status == 200) {
//         let json = await response.json();
//         return json;
//     }
    
//     throw new Error(response.status);
// }

// loadJson('URL...')
//     .catch(console.log); //Error : 404

// class HttpError extends Error {
//     constructor(response) {
//         super (`${response.status} for ${response.url}`);
//         this.name = 'HttpError';
//         this.response = response;
//     }
// }

// async function loadJson (url) {
//     let response = await fetch (url);
//     if (response.status == 200) {
//         retun response.json();
//     } else {
//         throw new HttpError(response);
//     }
// }

// async function demoGithubUser() {
//     let user;
//     while(true) {
//         let name = console.log("Enter a name?", "Rozet");

//         try {
//             user = await loadJson (`http://api.github.com/users/${'iamcombo'}`);
//             break;
//         } catch(err) {
//             if (err instanceof HtppError && err.response.status == 404) {
//                 console.log("No such user, Please reenter.");
//             } else {
//                 throw err;
//             }
//         }
//     }
//     console.log(`Full name : ${user.name}.`);
// return user;
// }

// demoGithubUser();

// ///// Fetch Syntax

// fetch (resource)
// fetch(resource, options)

// /// A basic fetch request 

// fetch('http://example.com/movie.json')
//     .then ((response) => response.json())
//     .then ((data) => console.log(date) );






































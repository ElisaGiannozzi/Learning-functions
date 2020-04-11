//Write a function which accepts an argument and returns the type of the argument.

// function type(argument) {
//     return typeof(argument); 
// }

// let word = 'bowl'; 
// console.log(type(word)); 

//Write a function that accept two integers and returns the larger one.

// function integers(integer1, integer2) {
//     if (integer1 > integer2) {
//         integers = integer1; 
//     }
//     else if (integer2 > integer1) {
//         integers = integer2; 
//     }
//     return integers; 
// }

// let smallInteger = 3; 
// let largeInteger = 9;
// console.log(integers(smallInteger, largeInteger));  


/*Write a function that show how old a dog is in human years, it should take one argument - puppy’s age. 
1 human year is 7 dog years. The function should return a string like “Your doggie is NN years old in dog years!”*/

// function dogAge(puppyAge) {
//     let age = puppyAge * 7; 
//     return `Your dog is ${age} years old in dog years!`;  
// }

// console.log((dogAge(3))); 


//Write a function that accepts a string as a parameter and counts the number of vowels within the string.

// function count(string) {
//     let vowels = 0; 
//     let lowerCaseString = string.toLowerCase(); 
//     for (let i = 0; i < lowerCaseString.length; i++) {
//         if (lowerCaseString[i] === 'a') {
//             vowels = vowels +1; 
//         }else if (lowerCaseString[i] === 'e') {
//             vowels = vowels +1; 
//         }else if (lowerCaseString[i] === 'i') {
//             vowels = vowels +1; 
//         }else if (lowerCaseString[i] === 'o') {
//             vowels = vowels +1; 
//         }else if (lowerCaseString[i] === 'u') {
//             vowels = vowels +1; 
//         }
//     }
//     return vowels; 
// }

// let name = 'Elisa'; 
// console.log(count(name)); 

//Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.

// function secondsCount(hours, minutes, seconds) {
//     return hours * 3600 + minutes * 60 + seconds;  
// }

// console.log(secondsCount(2, 10, 20)); 


/*Write a function that accepts two arguments: a string and a character. The function has to count the number of 
occurrences of the specified character within the string. For example, there are 2 occurrences of a character “o” in the string “Hello world”.*/

// function countOccurrences(string, character) {
//     let occurrences = 0;

//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === character) {
//           occurrences += 1; 
//         }
//     }
//     return occurrences; 
// }

// console.log(countOccurrences('jar of pickles', 'p')); 

//Create a function that takes an integer number as an argument and returns “Even” for even numbers or “Odd” for odd numbers.


// function EvenOdd(integer) {
//     if(integer % 2 === 0) {
//         integer = 'Even'; 
//     } else if (integer % 2 !== 0) {
//         integer = 'Odd'; 
//     }

//     return integer; 
// }

// console.log(EvenOdd(5)); 



/*Trolls are attacking your comment section! Create a function that takes a string and returns a new string with all vowels removed. 
For example, “This website is for losers LOL!” returns “Ths wbst s fr lsrs LL!“.*/

// function troll(string) {
//     let result = 0; 
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === 'a') {
//             result = string.splice(string[i]); 
//         }
//     }
//     return result; 
// }
// console.log(troll('the cat is on the table')); 


// function count(string) {
//     let vowels = 0; 
//     let lowerCaseString = string.toLowerCase(); 
//     for (let i = 0; i < lowerCaseString.length; i++) {
//         if (lowerCaseString[i] === 'a') {
//             vowels = vowels +1; 
//         }else if (lowerCaseString[i] === 'e') {
//             vowels = vowels +1; 
//         }else if (lowerCaseString[i] === 'i') {
//             vowels = vowels +1; 
//         }else if (lowerCaseString[i] === 'o') {
//             vowels = vowels +1; 
//         }else if (lowerCaseString[i] === 'u') {
//             vowels = vowels +1; 
//         }
//     }
//     return vowels; 
// }

// let name = 'Elisa'; 
// console.log(count(name)); 

// function trolls(string) {
//     let vowels =  ['a', 'e', 'i', 'o', 'u'];
//     return string.replace(/#vowels/g, ''); 
// }
// console.log(trolls('you drink coffee')); 

// function trolls(string) {
//     let vowels =  ['a', 'e', 'i', 'o', 'u'];  
//     return string.splice(vowels);   
// } 

// console.log(trolls('you drink coffee')); 



//Write a function which repeats the given string exact number of times. For example, repeatString("Hello", 5) returns “HelloHelloHelloHelloHello”.


// function repeatString(string, number) {
//     for (let i= 1; i <= number; i++) {
//         document.write(string); 
//     }
// }

// console.log(repeatString('Hello', 3));


//Write a function that reverse a number. For example, 12345 = 54321.

// function reverseNumber(number) {
//     number = number.toString(); 
//     return number.split('').reverse().join(''); 
// }

// console.log(reverseNumber(134)); 


//Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.

// function mergeNumbers(digit1, digit2, digit3) {
//     return digits.join(''); 
// }

// let digits = [2, 4, 6]; 

// console.log(mergeNumbers()); 

/*Write a function that accepts a year and returns whether it is a leap year. A year is a leap year if it is (1) divisible 
by 4 and not divisible by 100, or else (2) is divisible by 400. It should return a boolean value.*/

// function leapFinder(year) {
//     if ((year % 4 === 0) || (year % 100 === 0) || (year % 400 === 0)) {
//         year = 'Leap year'; 
//     } else {
//         year = 'Not a leap year'; 
//     }

//     return year; 
// }

// console.log(leapFinder(2020)); 


/*Write a function that takes two parameters: the year of birth and the year to count years in relation to. 
Provide output in this format: For dates in the future: “You are NN years old.” For dates in the past: “You will be born in NN years.” 
If the year of birth equals the year requested return: “You were born this very year!” For example, for 2000 and 1998 you will get 
“You will be born in 2 years.”*/

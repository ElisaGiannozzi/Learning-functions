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


//Write a function that accepts a string as a parameter and counts the number of vowels within the string.
//Each function has to return a value, do not display a result inside a function.


//Write a function that accepts a string as a parameter and counts the number of vowels within the string.

// function count(string) {
//     let vowels = 0; 
//     let lowerCaseString = string.toLowerCase(); 
//     for (let i = 0; i < lowerCaseString.length; i++) {
//         if (lowerCaseString[i] === 'a') {
//             vowels = vowels +1; 
//         }
//         else if (lowerCaseString[i] === 'e') {
//             vowels = vowels +1; 
//         }
//         else if (lowerCaseString[i] === 'i') {
//             vowels = vowels +1; 
//         }
//         else if (lowerCaseString[i] === 'o') {
//             vowels = vowels +1; 
//         }
//         else if (lowerCaseString[i] === 'u') {
//             vowels = vowels +1; 
//         }
//     }
//     return vowels; 
// }

// let name = 'Elisa';
// let name2 = 'Daniel studies' 
// console.log(count(name2)); 

//Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.

// function secondsCount(hours, minutes, seconds) {
//     return hours * 3600 + minutes * 60 + seconds;  
// }

// console.log(secondsCount(2, 10, 20)); 


/*Write a function that accepts two arguments: a string and a character. The function has to count the number of 
occurrences of the specified character within the string. For example, there are 2 occurrences of a character “o” in the string “Hello world”.*/
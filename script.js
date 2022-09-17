// // Declare variable for user's chosen character count of password
// var howlong = prompt("How many characters would you like your password to have?", "Choose between 8 and 128 characters.");
//     if (howlong < 8) {
//       alert("Please enter an amount that is 8 or more.");
//   }
//     else if (howlong > 128) {
//       alert("Please enter an amount that is 128 or less.");
//   }
//     // else if (howlong !== NaN) {
//     //   alert("Please enter a number.");
//     //   return ("Please enter a number.");
//     // }

// parseInt (howlong);

  
  
  
  
  // Declare variables for user's criteria



  
  function randomSpecial() {
    var symbols = '!@#$%^&*_+=-`~(){}[]<>,./?:;';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }   

var randomNumber = (Math.floor(Math.random() * 10)).toString();

var randomUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

var randomLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);


// function GetPrompts () {
//     howlong = +prompt("How many characters would you like your password to have?", "Choose between 8 and 128 characters.");
//       if (isNaN(howlong) || howlong < 8 || howlong > 128) {
//         alert ("Please enter an amount that is between 8 and 128 characters.");
//         return false;
//       }

//       if (confirm("Would you like to include uppercase letters?")); 
//         // choicesarr = choicesarr.concat(randomUpper);
//         for (i = 0; i < howlong; i++) 
//           {choicesarr = choicesarr.concat(randomUpper);}
    
//       if (confirm("Would you like to include lowercase letters?")); 
//         for (i = 0; i < howlong; i++)
//           {choicesarr = choicesarr.concat(randomLower);}
  
//       if (confirm("Would you like to include numbers?")); 
//         for (i = 0; i < howlong; i++)    
//           {choicesarr = choicesarr.concat(randomNumber);}
  
//       if (confirm("Would you like to include special characters?")); 
//         for (i = 0; i < howlong; i++)  
//           {choicesarr = choicesarr.concat(randomSpecial());}
  

  


// const randomFunc = {

var choicesarr = [""];   
/* var randomNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var randomUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var randomLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomSymbol = ["!", "@", "#", "$", "%", "^", "&", "*", ";", ":", "<", ",", ">", "."];
*/

// paste into generatePassword function later





// if (wantUpper == true) {
//       randomUpper;  
// }

// if (wantLower == true) {
//       randomLower;
// }

// if (wantSymbols == true) {
//       randomSpecial();
// }

// if (wantNumbers == true) {
//       randomNumber;
// }




// console.log(randomNumber);
// console.log(randomUpper);
// console.log(randomLower);
// console.log(randomSpecial());


// PLUS SIGN AT BEGINNING WILL CONVERT to NUMBER


function generatePassword() {
// Prompt user for length of password
// var pikachu = "";
// function GetPrompts () {
var choicesarr = [""];   

howlong = +prompt("How many characters would you like your password to have?", "Choose between 8 and 128 characters.");
  if (isNaN(howlong) || howlong < 8 || howlong > 128) {
    alert ("Please enter an amount that is between 8 and 128 characters.");
    return false;
  }

  if (confirm("Would you like to include uppercase letters?")); 
    // choicesarr = choicesarr.concat(randomUpper);
    for (i = 0; i < howlong; i++) 
      {choicesarr = choicesarr.concat(randomUpper);}
  console.log(choicesarr);
  if (confirm("Would you like to include lowercase letters?")); 
    for (i = 0; i < howlong; i++)
      {choicesarr = choicesarr.concat(randomLower);}
  console.log(choicesarr);
  if (confirm("Would you like to include numbers?")); 
    for (i = 0; i < howlong; i++)    
      {choicesarr = choicesarr.concat(randomNumber);}
  console.log(choicesarr);
  if (confirm("Would you like to include special characters?")); 
    for (i = 0; i < howlong; i++)  
      {choicesarr = choicesarr.concat(randomSpecial());}
  console.log(choicesarr);
      for (i = 0; i < howlong; i++) 
        var pikachu = Math.floor(Math.random()*choicesarr.length);

return pikachu;
//   var howlong = +prompt("How many characters would you like your password to have?", "Choose between 8 and 128 characters.");
//   if (howlong < 8) {
//     alert("Please enter an amount that is 8 or more.");
// }
//   else if (howlong > 128) {
//     alert("Please enter an amount that is 128 or less.");
// }
// // Change into number



//   // Declare variables for user's criteria
//   var wantUpper = confirm("Would you like to include uppercase letters?"); 
//   var wantLower = confirm("Would you like to include lowercase letters?");
//   var wantSymbols = confirm("Would you like to include symbols?");
//   var wantNumbers = confirm("Would you like to include numbers?");


// x = ?
// do 


// function loop(x) {
//     // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
//     if (x > howlong) {
//       return;
}
//   // do stuff
//   function idk() {
//   for (i = 0; i < howlong; i++) {
//   while (wantUpper == true) {
//      randomUpper;
// }
//   while (wantLower == true) {
//      randomLower;
// }
//   while (wantSymbols == true) {
//      randomSpecial();
// }
//   while (wantNumbers = true) {
//      randomNumber;

//   loop(x + 1); // the recursive call
// }
// loop(0);

/* for (i = 0; i < howlong; i++)
do */

// variable for something keeping track of 
// while loop as a condition for the randomness that keeps track of their preferences
// var selection = math.floor.math.random or while loop

// 
//    

// The return value here will be the password
// return GetPrompts();



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");


passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




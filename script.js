
var randomNumber = "0123456789";
var randomUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var randomLower = "abcdefghijklmnopqrstuvwxyz";
var randomSymbol = "!@#$%^&*-.";



function generatePassword() {

var choicestr = "";   


howlong = +prompt("How many characters would you like your password to have?", "Choose between 8 and 128 characters.");
  if (isNaN(howlong) || howlong < 8 || howlong > 128) {
    alert ("Please enter an amount that is between 8 and 128 characters.");
    return false;
  }

  var wantUpper = confirm("Would you like to include uppercase letters?"); 
    if (wantUpper == true)
      {choicestr += randomUpper};
console.log(choicestr);
  var wantLower = confirm("Would you like to include lowercase letters?");
    if (wantLower == true)
      {choicestr += randomLower};
      console.log(choicestr);
  var wantSymbols = confirm("Would you like to include special characters?");
    if (wantSymbols == true)
      {choicestr += randomSymbol};
      console.log(choicestr);
  var wantNumbers = confirm("Would you like to include numbers?")
    if (wantNumbers == true)
      {choicestr += randomNumber};
      console.log(choicestr);
  var randompassword = choicestr;
  var password = "";
  
  for (var i = 0; i < howlong; i++)
     {password += randompassword.charAt(Math.floor(Math.random() * choicestr.length))};
     

return password;
}




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




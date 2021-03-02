// prompt user for password critera
// All prompts must be answered, each prompt checked for valid entry, if prompt meets criteria then display, else prompt for correct character type, length.

confirm("Your password will have a random mix of characters, including numbers, special characters, upper and lower case letters.");

var amount = (prompt("Please enter the total number of characters you want in your password, between 8 and 128"));
 if (amount < 8) {
   alert("Password must be at least 8 characters.");
   prompt("Please enter the total number of characters you want in your password.");
 } else if (amount > 128) {
    alert("Password must be less than 128 characters.");
    prompt("Please enter the total number of characters you want in your password.");
   console.log(amount);
 } 

// // Assignment Code
var generateBtn = document.querySelector("#generate");

// set for length of password between 8 and 128 characters
// Password must be randomly generated and meet all criteria
// Password must be mix of special characters, numbers, lower and upper case letters
var myNumbers = ["0","1","2","3","4","5","6","7","8","9"];
var mySpecial = ["@", "%","+","\\","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_", "."];
var mySmall = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var myLarge = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


function generatePassword() { 
  var combo = myNumbers.concat(mySpecial, mySmall, myLarge);
  var randomCharacters =combo[Math.floor(Math.random() * combo.length)];  
  for (let i = 0; i < combo.length; i++);
 
}



// // Write password to input, inside the box
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








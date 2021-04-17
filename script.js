var amount = prompt("Please enter the total number of characters you want in your password, between 8 and 128");
if (amount < 8) {
  alert("Password must be at least 8 characters.");
  prompt("Please enter the total number of characters you want in your password.");
} else if (amount > 128) {
  alert("Password must be less than 128 characters.");
  prompt("Please enter the total number of characters you want in your password.");
}

var agreeNum = confirm("Do you want to include numbers in your password?");
if (!agreeNum) {alert("Password needs to contain at least one number.")};

var agreeSpecial = confirm("Do you want to include special characters in your password?");
if (!agreeSpecial) {alert("Password needs to contain at least one special character.")};

var agreeLower = confirm("Do you want to include lowercase letters in your password?");
if (!agreeLower) {alert("Password needs to contain at least one lowercase letter.")};

var agreeUpper = confirm("Do you want to include uppercase letters in your password?");
if (!agreeUpper) {alert("Password needs to contain at least one uppercase letter.")};

// Password must be mix of special characters, numbers, lower and upper case letters
var theNumbers = ["0","1","2","3","4","5","6","7","8","9"];
var theSpecial = ["@", "%","+","\\","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_", "."];
var theLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var theUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// button will access html area of generate id
var generateBtn = document.querySelector("#generate");

// Password must be randomly generated with mix of lowercase, uppercase letters, numbers and special characters
function makePassword() {
  var mix = theNumbers.concat(theSpecial, theLower, theUpper);
  var finalPassword = []
    for (let i = 0; i < amount; i++){
    // make a random index with array from above options
    finalPassword.push(mix[Math.floor(Math.random() * mix.length)]);
  }
  return finalPassword.join("");
}

// the password created in makePassword as a text value will be written in the password id section of html
function showPassword() {
  var password = makePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// when the gererateBtn is clicked the function of showPassword will be started
generateBtn.addEventListener("click", showPassword);


// prompt user for password critera
// All prompts must be answered, each prompt checked for valid entry, if prompt meets criteria then display, else prompt for correct character type, length.
// set for length of password between 8 and 128 characters
  
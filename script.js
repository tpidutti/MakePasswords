// prompt user for password critera
// All prompts must be answered, each prompt checked for valid entry, if prompt meets criteria then display, else prompt for correct character type, length.

confirm("Your password will have a random mix of characters.");

var text;
var word = prompt("Please enter number of characters you would like in your password, between 8 and 128.");
switch(word) {
  case "1-7":
    text = "Please choose number between 8 and 128";
    break;
  case "129-200":
    text = "Please choose number between 8 and 128";
    break;
  default:
    text = "Please try again";
    break;
}


// // Assignment Code
var generateBtn = document.querySelector("#generate");

  // Password must be mix of special characters, numbers, lower and upper case letters
var myNumbers = [0,1,2,3,4,5,6,7,8,9];
var mySpecial = ["!()*+,-./:;<=>?@[\]^_`{|}~"];
var myLowerCharacters = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
var myUpperCharacters = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];


// set for length of password between 8 and 128 characters
// Password must be randomly generated and meet all criteria

function generatePassword() { 



}

// // Write password to input, inside the box
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// var characters = myNumbers.concat(mySpecial, myLowerCharacters, myUpperCharacters);

  // var combinePassword = myNumbers.concat ( mySpecial, myLowerCharacters, myUpperCharacters);
  // // combinePassword.join();

// function passwordHere() {
//   var accessPassword = document.getElementById("password");
//   accessPassword.querySelector("password").innerText = "";
// }

// var characters = characters[Math.floor(Math.random() * characters.length)];


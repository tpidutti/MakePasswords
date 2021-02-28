// // Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() { 
var myNumbers = [0,1,2,3,4,5,6,7,8,9];

var mySpecial = ["!()*+,-./:;<=>?@[\]^_`{|}~"];

var myLowerCharacters = ["a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"]

var myUpperCharacters = ["A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z."]


  var combinePassword =(myNumbers, mySpecial, myLowerCharacters, myUpperCharacters);
  combinePassword.join();
  console.log(combinePassword);

}

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function inTheBox(){
  var publish = document.getElementById("password");
  
  if(publish.innerText === ""){
    publish.innerText === "";
  } else {
    publish.innerText = "";
  }
}

// function passwordHere() {
//   var accessPassword = document.getElementById("password");
//   accessPassword.querySelector("password").innerText = "";
// }



// Prompt for password criteria that is user selected
// Prompt for length of password between 8 and 128 characters
// Prompt for mix of special characters, numbers, lower and upper case letters
// All prompts must be answered, each prompt checked for valid entry and type of character that meets criteria. if prompt meets criteria then display, else prompt for correct character type, length.
// Password must be randomly generated
// Password must match criteria
// Password must be displayed/written in the box, replacing the words your secure password
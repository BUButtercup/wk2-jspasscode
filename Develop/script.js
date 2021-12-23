// Assignment Code
var generateBtn = document.querySelector("#generate");
var newPass = confirm("Do you need a new password?");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numChoice;
var lowCaseYes;
var upCaseYes;
var spCharYes;
var numUpCase;
var numSpChar;

//arrays//
const numLowCase = []
const lowerCase = Array.from(lowerCase);
const upperCase = Array.from(upperCase);
const spChar = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<",">", "=", "?", "@", "]", "[", "^", "_", "`", "{", "}", "|", "~"];

  if (newPass) {
    writePassword();
  } else {
    alert("Well, bye then!")
  }

  function writePassword() {
    numChoice = parseInt(prompt("So you want a new passord...how long should it be? \nChoose a number between 8 and 128:", ""), 10);
    if (numChoice >= 8 && numChoice <= 128) {
        console.log(numChoice + 2);
        generatePassword();
    } else {
      console.log(numChoice)
      confirm("You should read ALL of the instructions. Try again.");
      writePassword();
    }
  }

  function generatePassword(numChoice) {
    lowCaseYes = confirm("Do you want to use lower case letters?")
    upCaseYes = confirm("Do you want to use upper case letters?")
    spCharYes = confirm("Do you want to use special characters?")
    if (lowCaseYes && upCaseYes && spCharYes) {
        genAllChar();
      console.log("Good choice!");
    } else if (lowCaseYes && upCaseYes) {
        genLowUp()
    } else if (upCaseYes && spCharYes) {
        genUpSp()
    } else if (lowCaseYes && spCharYes) {
        genLowSp()
    } else if (lowCaseYes) {
        genRanLowCase();
    } else if (upCaseYes) {
        genRanUpCase();
    } else { genRanSpChar();}
  }

function genAllChar() {

}

function genLowSp() {}

function genUpSp() {}

function genLowUp() {}

function genRanLowCase() {
  numLowCase = numChoice
  
for ()

  chosenLowCase = lowerCase[Math.floor(Math.random() * lowerCase.length)];
        // Math.floor(Math.random() * numChoice)
}

function genRanUpCase() {}

function genRanSpChar() {}

// console.log(numChoice);


// Write password to the #password input

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;


// writePassword();
// Add event listener to generate button
// generateBtn.onClick("click", writePassword);

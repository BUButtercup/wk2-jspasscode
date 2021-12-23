// Assignment Code
var generateBtn = document.querySelector("#generate");
var newPass = confirm("Do you need a new password?");
var lowerCase1 = "abcdefghijklmnopqrstuvwxyz";
var upperCase1 = lowerCase1.toUpperCase();
var numChoice;
var lowCaseYes;
var upCaseYes;
var spCharYes;
var numUpCase;
var numSpChar;

//arrays//
const passInput = [];
const lowerCase = Array.from(lowerCase1);
const upperCase = Array.from(upperCase1);
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
  genRanLowCase();
  genRanUpCase();
  genRanSpChar();
}//flow confirmed! just need to make cases for multiple character choices now.

// function genLowSp() {}

// function genUpSp() {}

// function genLowUp() {}

function genRanLowCase() {
  passInput
  for (var i = 0; i < numChoice; i++) {
    passInput.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
}
}


//   chosenLowCase = lowerCase[Math.floor(Math.random() * lowerCase.length)];
//         // Math.floor(Math.random() * numChoice)
// }

function genRanUpCase() {
  passInput
  for (var i = 0; i < numChoice; i++) {
    passInput.push(upperCase[Math.floor(Math.random() * upperCase.length)]);
}
}


function genRanSpChar() {
  passInput
  for (var i = 0; i < numChoice; i++) {
    passInput.push(spChar[Math.floor(Math.random() * spChar.length)]);
  }
}

console.log(passInput);
// console.log(numChoice);


// Write password to the #password input

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;


// writePassword();
// Add event listener to generate button
// generateBtn.onClick("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");


// var newPass = confirm("Do you need a new password?");
var lowerCase1 = "abcdefghijklmnopqrstuvwxyz";
var upperCase1 = lowerCase1.toUpperCase();
var numChoice;
var lowCaseYes;
var upCaseYes;
var spCharYes;
var arr = [];
// var smPart;
var reducer = (previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue);


//arrays//
var numChoiceHold = []
var numLowCase = []
var numUpCase = []
var numSpChar = []
var sumChar = []
var passInput = [];
const lowerCase = Array.from(lowerCase1);
const upperCase = Array.from(upperCase1);
const spChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<",">", "=", "?", "@", "]", "[", "^", "_", "`", "{", "}", "|", "~"];
const finPass = [];

generateBtn.addEventListener("click", writePassword)

  function writePassword() {
    numChoiceHold
    var newPass = confirm("Do you need a new password?")
    if (newPass) {
      numChoice = parseInt(prompt("So you want a new passord...how long should it be? \nChoose a number between 8 and 128:", ""), 10);
      if (numChoice >= 8 && numChoice <= 128) {
        console.log(numChoice + 2);
        numChoiceHold.push(numChoice);
        console.log(numChoiceHold);
        generatePassword();
      } else {
      console.log(numChoice)
      confirm("You should read ALL of the instructions. Try again.");
      writePassword();
      }
    } else{alert("Well, bye then!")}
  }

  function generatePassword() {
    lowCaseYes = confirm("Do you want to use lower case letters?")
    upCaseYes = confirm("Do you want to use upper case letters?")
    spCharYes = confirm("Do you want to use special characters?")
    if (lowCaseYes && upCaseYes && spCharYes) {
        genAllChar();
        console.log("Good choice!");
        randomizePassword()
    } else if (lowCaseYes && upCaseYes) {
        genLowUp()
        randomizePassword()
    } else if (upCaseYes && spCharYes) {
        genUpSp()
        randomizePassword()
    } else if (lowCaseYes && spCharYes) {
        genLowSp()
        randomizePassword()
    } else if (lowCaseYes) {
        genRanLowCaseOnly();
        randomizePassword()
    } else if (upCaseYes) {
        genRanUpCaseOnly();
        randomizePassword()
    } else { 
        genRanSpCharOnly();
        randomizePassword()}
  }

function genAllChar() {
  numChoiceHold
  numLowCase
  numUpCase
  numSpChar
  numSmLett();
  numBigLett();
  numSpFig();
  genRanLowCase();
  genRanUpCase();
  genRanSpChar();
}

function genLowUp() {
  passInput
  numLowCase
  numSpChar
  numUpCase = numSpChar
  numSmLett()
  numSpFig()
  genRanLowCase()
  genRanUpCase()
}

function genUpSp() {
  passInput
  numLowCase
  numUpCase = numLowCase
  numSpChar
  numBigLett();
  numSpFig();
  genRanUpCase();
  genRanSpChar();
}

function genLowSp() {
  passInput
  numLowCase
  numSpChar
  numSmLett()
  numSpFig()
  genRanLowCase();
  genRanSpChar();
}

//subfxns of char gens//
function numSmLett() {
  numLowCase
  numChoiceHold
  sumChar
  getNumLowCase();
  sumChar.push(numLowCase);
  console.log(numLowCase);
}

function getNumLowCase() {
  smPart = (Math.floor(Math.random() * (numChoiceHold - 2)))
  if (smPart > 0) {
    numLowCase.push(smPart)
  } else {getNumLowCase()}
}

function numBigLett() {
  numUpCase
  numLowCase
  numChoiceHold
  sumChar
  getNumUpCase();
  sumChar.push(numUpCase);
  console.log(numUpCase);
}

function getNumUpCase() {
  numChoiceHold
  numLowCase
  numUpCase
  smPart = (Math.floor(Math.random() * (numChoiceHold - numLowCase)))
  if (smPart > 0) {
    numUpCase.push(smPart)
  } else {getNumLowCase()}
}

function numSpFig() {
  numSpChar
  numChoiceHold
  numLowCase
  numUpCase
  sumChar = (parseInt(sumChar.reduce(reducer)));
  console.log(sumChar);
  numSpChar.push(numChoiceHold - sumChar);
  console.log(numSpChar)
}

//fxns that find part of numChoiceHold in a char class//
function genRanLowCase() {
  passInput
  // numChoiceHold
  numLowCase 
  for (var i = 0; i < numLowCase; i++) {
    passInput.push(lowerCase[Math.floor(Math.random() * numLowCase)]);
  }
}

function genRanUpCase() {
  passInput
  // numChoiceHold
  numUpCase
  for (var i = 0; i < numUpCase; i++) {
    passInput.push(upperCase[Math.floor(Math.random() * numUpCase)]);
  }
}

function genRanSpChar() {
  passInput
  // numChoiceHold
  numSpChar
  for (var i = 0; i < numSpChar; i++) {
    passInput.push(spChar[Math.floor(Math.random() * numSpChar)]);
  }
}

//to gen only one char type//

function genRanLowCaseOnly() {
  passInput
  numChoiceHold
  for (var i = 0; i < numChoiceHold; i++) {
    passInput.push(lowerCase[Math.floor(Math.random() * numChoiceHold)]);
  }
}

function genRanUpCaseOnly() {
  passInput
  numChoiceHold
  for (var i = 0; i < numChoiceHold; i++) {
      passInput.push(upperCase[Math.floor(Math.random() * numChoiceHold)]);
  }
}

function genRanSpCharOnly() {
  passInput
  numChoiceHold
  for (var i = 0; i < numChoiceHold; i++) {
  passInput.push(spChar[Math.floor(Math.random() * numChoiceHold)]);
  }
}

function randomizePassword() {
  // var length = passInput.length
  passInput
  finPass
  console.log(passInput);
  while (passInput.length) { 
    finPass.push(passInput.splice(passInput.length * Math.random() | 0, 1)[0])
  }
  console.log(finPass);
  putInBox()
}
//I did adapt this while loop idea from here: https://stackoverflow.com/questions/36069870/how-to-remove-random-item-from-array-and-then-remove-it-from-array-until-array-i//

function putInBox() {
  finPass
  var password = finPass.toString();
  document.querySelector("#password").value = password;
}





// Write password to the #password input

// var password = finPass.toString();
// var passwordText = 

// passwordText.value = password;



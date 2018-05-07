/*:::::::::::: REQUIRE :::::::::*/
var inquirer = require("inquirer");
var letterJS = require("./index.js");
var letterJS = require("./letter.js");
var wordJS = require("./word.js").word;


/*:::::::::::: GLOBAL VARIABLES :::::::::*/
var wrdCnt = wordJS.count + 5;
var nWrd = [];
var wrWd = [];
var letters = wordJS.letters;
var blanks = wordJS.blanks;

letters = JSON.parse(letters);
blanks = JSON.parse(blanks);
for (var i = 0; i < letters.length; i++) {
  nWrd.push("_");
}


// get user's name
function getLtr(user) {
  // recursive function to go through the game. 
  if (nWrd.toString() !== letters.toString()) {
    if (wrdCnt > 0) {
      console.log('::::::: Your Word :::::::');
      console.log(letters);
      console.log(nWrd);
      // runs inquirer and asks the user for a letter which replies are
      // stored within the variable letter inside of the .then statement
      inquirer.prompt([{
        name: "letter",
        message: "Hey " + user + " Guess A Letter?"
      }]).then(function (letter) {
        wrdCnt--;
        if (letter.letter !== '') {
          // send the letter chosen to the game logic function. 
          gameLgc(letter.letter);
          getLtr(user);
        } else {
          console.log('Silly... Enter A Letter!');
        }
      });

      function gameLgc(l) {
        // if letter chosen is part of the word. 
        if (letters.includes(l)) {
          //loop through the letter array and grab the index if the letter and push that index into the new word array. 
          for (var i = 0; i < letters.length; i++) {
            if (letters[i] === l) {
              console.log("YAY CORRECT!!!");
              // push the right word to the new word array. 
              nWrd[i] = l;
            }
          }
        } else {
          //push to the wrong word array
          wrWd.push(l);
          console.log('::::::: Wrong Hahaha :::::::');
          console.log('::::::: Letter Dungeon :::::::');
          console.log(wrWd);
        }
      }
    } else {
      console.log("YOU DEAD");
    }
  } else {
    console.log("YOU WON");
  }
}
// export the getLtr function 
module.exports = {
  getLtr: getLtr
}
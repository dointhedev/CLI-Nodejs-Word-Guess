/*:::::::::::: REQUIRE :::::::::*/
var inquirer = require("inquirer");
var letterJS = require("./index.js");
var letterJS = require("./letter.js");
var wordJS = require("./word.js").word;


/*:::::::::::: GLOBAL VARIABLES :::::::::*/
var points = wordJS.count + 5; 
var chsn = [];
// get user's name
function getLtr(user) {

  if (points > 0) {
  // runs inquirer and asks the user for a letter which replies are
  // stored within the variable letter inside of the .then statement
  inquirer.prompt([{
      name: "letter",
      message: "Hey " + user + " Guess A Letter?"
  }]).then(function (letter) {
      points--;
      gameLgc(letter.letter);
      getLtr(user);

  });

  function gameLgc(l){
  var letters = wordJS.letters;
  var blanks = wordJS.blanks; 
    console.log(wordJS.word);
  console.log(letters);
  console.log(blanks);
  chsn.push(l);
  console.log("Wrong Letter Dungeon");
  console.log(chsn);
  }

}else{
  console.log("YOU DEAD");
}
}



module.exports = {
  getLtr: getLtr
}



/*
 Letter.js: Contains a constructor, Letter. This constructor should be 
able to either display an underlying character or a blank placeholder
 (such as an underscore), depending on whether or not the user has guessed
  the letter. That means the constructor should define:

   A string value to store the underlying character for the letter

   A boolean value that stores whether that letter has been guessed yet

   A function that returns the underlying character if the letter has been 
   guessed, or a placeholder (like an underscore) if the letter has not been 
   guessed

   A function that takes a character as an argument and checks it
    against the underlying character, updating the stored boolean value to true if it was 
    guessed correctly
   
  */
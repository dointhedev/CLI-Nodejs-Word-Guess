/*:::::::::::: REQUIRE :::::::::*/
const randomWords = require('random-words');
const fs = require('fs');
const jsonfile = require('jsonfile');

/*:::::::::::: GLOBAL VARIABLES :::::::::*/
var nwWord = '';

/*:::::::::::: FUNCTIONS :::::::::*/
function genJFile(data) {
  obj = JSON.parse(data);
  var file = 'logs/data.json';
  jsonfile.writeFile(file, obj, {
    flag: 'a'
  }, function (err) {
    if (err) {
      console.log(err);
      return;
    }
   // console.log("data.json was updated!");
  });
}
// this function randomly generates a word
function genWord() {
  // uses NPM module to gen word
  var word = randomWords();
  // this loops through word and pushes blanks to blanks array and letter to letter array
  var letters = [];
  var blanks = [];
  var count = word.length;
  for (var w = 0; w < word.length; w++) {
    letters.push(word[w]);
    blanks.push("_");
  }
  //console.log(letters);
  //console.log(blanks);
  // sends values to generate the object
  genOBJ(word, letters, blanks, count);
}
// this function generates the word object
function genOBJ(word, letters, blanks, count) {
  // constructor function the creates word obj
  function Word(count, word, letters, blanks) {
    this.count = count;
    this.word = word;
    this.letters = JSON.stringify(letters);
    this.blanks = JSON.stringify(blanks);
    this.date = Date.now();
  };

  Word.prototype.printWord = function () {
    var data = "Count: " + this.count + "\nWord: " + this.word + " \nLetters: " + this.letters + " \nBlanks: " + this.blanks + "\nDate: " + this.date;
  };
  // generates the new word object
  nwWord = new Word(count, word, letters, blanks);

  // prints object to console
  nwWord.printWord();
  //console.log(nwWord);
  // appends the word object to logs/data.json
  genJFile(JSON.stringify(nwWord));
  // exports the word object
}

// run genWord function
genWord();


module.exports = {
  word: nwWord,
}
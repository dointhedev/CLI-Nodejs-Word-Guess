/*:::::::::::: REQUIRE :::::::::*/
var inquirer = require("inquirer");
var letterJS = require("./letter.js").getLtr;
var wordJS = require("./word.js").word;
// Initialize Application
nodeInit();

// get user's name
function getNme() {
    console.log('----------------------');
    console.log('Welcome to my WordGame');
    console.log('----------------------\n');
    inquirer.prompt([{
        name: "name",
        message: "Whats Your Name?"
    }]).then(function (name) {
        var newPlayer = name.name;
        // send name to the get letter function
        letterJS(newPlayer.trim());
    });
}

function nodeInit() {
    getNme();
}
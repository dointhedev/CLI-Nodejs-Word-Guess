
/*:::::::::::: REQUIRE :::::::::*/
var inquirer = require("inquirer");
var letterJS = require("./letter.js").getLtr;

/*:::::::::::: GLOBAL VAR :::::::::*/
var newPlayer = '';
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
        if (name.name.letter !== '') {
        newPlayer =name.name;
        // send name to the get letter function
        letterJS(newPlayer.trim());
        }else{
            console.log('Silly... Enter A Name!');
            getNme();
        }
    });
    
}

function nodeInit() {
    getNme();
}
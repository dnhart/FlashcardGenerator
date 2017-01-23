var inquirer = require("inquirer");
var fs = require("fs");
var basicCard = require('./basicCard.js');
var clozeCard = require('./clozeCard.js');


inquirer.prompt([
      {
 		type: 'rawlist',
        name: "cardtype",
        message: "Would you like to create a question card or fill in the blank card?",
        choices: ["Question Card", "Fill in the Blank Card"],
		
      },
]).then(function(answers) {
      	var type=answers.cardtype;
      	//console.log(answers);
      	switch(type){

     //basic card
      	case "Question Card":
      		basicCard();
		break;

	//clozedeleted card
		case "Fill in the Blank Card":
			clozeCard();


		break;
    		default:
        return false;

		};
	});
var inquirer = require("inquirer");
var fs = require("fs");
var basicCard = require('./basicCard.js');
var clozeCard = require('./clozeCard.js');
var basicQuiz = require('./basicQuiz.js');
var clozeQuiz = require('./clozeQuiz.js');

inquirer.prompt([
      {
 		type: 'rawlist',
        name: "cardtype",
        message: "Would you like to create a question card or fill in the blank card?",
        choices: ["Create a Question Card.", "Create a Fill in the Blank (Cloze) Card.", "Take the Question Card quiz.", "Take the Cloze Card quiz."],
		
      },
]).then(function(answers) {
      	var type=answers.cardtype;
      	//console.log(answers);
      	switch(type){

     //basic card
      	case "Create a Question Card.":
      		basicCard();
		break;

	//clozedeleted card
		case "Create a Fill in the Blank (Cloze) Card.":
			clozeCard();


		break;

	//basic quiz
		case "Take the Question Card quiz.":
			basicQuiz();


		break;

	//cloze quiz
		case "Take the Cloze Card quiz.":
			clozeQuiz();


		break;
    		default:
        return false;

		};
	});
var inquirer = require("inquirer");
var fs = require("fs");


function clozeCard (fullText, clozeDeleted){
	if(this instanceof clozeCard) {
		this.fullText = fullText;
		this.clozeDeleted = clozeDeleted;
	} else {
    	return new clozeCard (fullText, clozeDeleted);
  	};
};

var obj = {
   cloze: []
};
var newCloze="";


var makeCard = function(){

	inquirer.prompt([

		{
		type: 'input',
        name: "fullText",
        message: "Please enter the complete sentence. (example: Austin is the capital of Texas.)"
     	 },
      	{
      	type: 'input',	
        name: "clozeDeleted",
        message: "Please enter the word or phrase that you wish to hide. (example: Austin)"
      	}

      ]).then(function(answers) {

      	var fullText = answers.fullText;
      	var clozeDeleted = answers.clozeDeleted;

      	var newCloze = clozeCard(fullText, clozeDeleted);

      	var clozeExists = fullText.search(clozeDeleted);


	if (clozeExists >= 0){

		var newCloze = new clozeCard(fullText, clozeDeleted);

		fs.readFile("clozeArray.json", 'utf8', function readFileCallback(err, data){
		    if (err){
		        console.log(err);
		    } else {
		    	if (data) {
					obj = JSON.parse(data); //now it an object
			    		
			    } else {
			    	obj = {
							cloze: []
						}; 
 					};
 				}; //end if err and obj set

		    obj.cloze.push(newCloze); //add some data
		    json = JSON.stringify(obj); //convert it back to json
		    fs.writeFile("clozeArray.json", json, 'utf8'); // write it back 
		     console.log(json);
 				
 		});//end read file	
	} else {
	
		console.log("The word/phrase you entered is not in the sentence you entered. Please check your spelling and capitalization.");
		return false;
		};

	}); //end then/inquire
}; //end makeCard








module.exports = makeCard;
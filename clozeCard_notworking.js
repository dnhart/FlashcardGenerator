var inquirer = require("inquirer");
var fs = require("fs");


function clozeCard (fullText, clozeDeleted, partialText){
	this.fullText = fullText;
	this.clozeDeleted = clozeDeleted;
	this.makePartial = makePartial(this.fullText, this.clozeDeleted);

};



function makePartial(fullText, clozeDeleted){


		var partialText = fullText.replace(clozeDeleted, "...........");
		console.log(partialText);


		// console.log(partialText);
		// console.log(fullText);
		// console.log(clozeDeleted);

};

var obj = {
	cloze: []
}; 

var makeCard = function(){

inquirer.prompt([

		{
        name: "fullText",
        message: "Please enter the complete sentence. (example: Austin is the capital of Texas.)"
     	 },
      	{
        name: "clozeDeleted",
        message: "Please enter the word or phrase that you wish to hide. (example: Austin)"
      	}


      ]).then(function(answers) {

      	var fullText = answers.fullText;
      	var clozeDeleted = answers.clozeDeleted;

      	var clozeExists = fullText.search(clozeDeleted);


	if (clozeExists >= 0){

		var newCloze = new clozeCard(fullText, clozeDeleted);

		fs.readFile("clozeArray.json", 'utf8', function readFileCallback(err, data){
	    	if (err){
			        console.log(err);
			    } else {
			    	if (data) {
						var obj = JSON.parse(data); //now it an object
			    		console.log(obj);
			    	} else {
			    		var obj = {
							cloze: []
						}; 
 				    }
		    	obj.cloze.push(newCloze); //add some data
		    	json = JSON.stringify(obj); //convert it back to json
		    	fs.writeFile("clozeArray.json", json, 'utf8'); // write it back 
		    	var testCloze = obj.cloze[0];
		    	testCloze.makePartial;
			}});
		} else {
	
		console.log("The word/phrase you entered is not in the sentence you entered. Please check your spelling and capitalization.");
		return false;
		};

  	

});

};


module.exports = makeCard;
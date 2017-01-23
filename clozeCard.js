var inquirer = require("inquirer");
var fs = require("fs");


function clozeCard (fullText, clozeDeleted, partialText){
	this.fullText = fullText;
	this.clozeDeleted = clozeDeleted;
	this.partialText = partialText;

};

var obj = {
   cloze: []
};

function makePartial(fullText, clozeDeleted){

	var x = fullText.search(clozeDeleted);
	// console.log(x);

	if (x >= 0){
		var partialText = fullText.replace(clozeDeleted, "...........");

     	var newCloze = new clozeCard(fullText, clozeDeleted, partialText);

		fs.readFile("clozeArray.json", 'utf8', function readFileCallback(err, data){
	    	if (err){
			        console.log(err);
			    } else {

			    obj = JSON.parse(data); //now it an object	
			    console.log(obj);
			    // obj.cloze.push(newCloze); //add some data
			    // json = JSON.stringify(obj); //convert it back to json
			    // fs.writeFile("clozeArray.json", json, 'utf8'); // write it back 
			};
		});


		// console.log(partialText);
		// console.log(fullText);
		// console.log(clozeDeleted);
	} else {
	
		console.log("The word/phrase you entered is not in the sentence you entered. Please check your spelling and capitalization.");
		return false;
	};

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
      	},


      ]).then(function(answers) {

      	var fullText = answers.fullText;
      	var clozeDeleted = answers.clozeDeleted;

      	makePartial(fullText, clozeDeleted);



});

};


module.exports = makeCard;
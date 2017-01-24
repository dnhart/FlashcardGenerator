var inquirer = require("inquirer");
var fs = require("fs");


function clozeCard (fullText, clozeDeleted){
	this.fullText = fullText;
	this.clozeDeleted = clozeDeleted;
	//this.makePartial = makePartial(this.fullText, this.clozeDeleted);
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

      	newCloze = new clozeCard(fullText, clozeDeleted);



		fs.readFile("clozeArray.json", 'utf8', function readFileCallback(err, data){
		    if (err){
		        console.log(err);
		    } else {
		    	if (data) {
					obj = JSON.parse(data); //now it an object
			    		console.log(obj);
			    } else {
			    	obj = {
							cloze: []
						}; 
 					};
 				}; //end if err and obj set

 			// obj = JSON.parse(data); //now it an object
		    obj.cloze.push(newCloze); //add some data
		    json = JSON.stringify(obj); //convert it back to json
		    fs.writeFile("clozeArray.json", json, 'utf8'); // write it back 
		// }});	
 				
 		});//end read file


  			// console.log(newCloze);
  		
  			// console.log(obj);
	
	}); //end then/inquire
}; //end makeCard








module.exports = makeCard;
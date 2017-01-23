var inquirer = require("inquirer");
var fs = require("fs");


function basicCard (question, answer){
	this.question = question;
	this.answer = answer;
};

var obj = {
   basic: []
};



var makeCard = function(){

inquirer.prompt([

		{
        name: "question",
        message: "Please enter the question."
     	 },
      	{
        name: "answer",
        message: "Please enter the answer."
      	}
      ]).then(function(answers) {

      	var question=answers.question;
      	var answer=answers.answer;

      	var newBasic = new basicCard(question, answer);


		fs.readFile("basicArray.json", 'utf8', function readFileCallback(err, data){
		    if (err){
		        console.log(err);
		    } else {
		    obj = JSON.parse(data); //now it an object
		    obj.basic.push(newBasic); //add some data
		    json = JSON.stringify(obj); //convert it back to json
		    fs.writeFile("basicArray.json", json, 'utf8'); // write it back 
		}});

});

};


module.exports = makeCard;
var inquirer = require("inquirer");
var fs = require("fs");
var count = 0;
var correct = 0;
var obj = {};

var basicQuiz = function(){
//get the questions
	fs.readFile("basicArray.json", 'utf8', function readFileCallback(err, data){
	    if (err){
	        console.log(err);
	    } else {
	    	if (data) {
				obj = JSON.parse(data); //now it an object
		    	runQuiz();
		    } else {
		    	console.log("You have not entered any questions.");
			};
		}; //end if err and obj set

	});//end read file	

};//end basicQuiz()

var runQuiz = function() {
	//code to run the quiz
	var basicObj=obj.basic;
	var length = Object.keys(basicObj).length;
	//count through the object questions
	if (count < length) {

	 	var question=basicObj[count].question;
	 	var answer=basicObj[count].answer;

	 inquirer.prompt([
	      {
	      	type: 'input',
	        name: "userAnswer",
	        message: question+'\n' + "---->"
	      }

	    ]).then(function(answers) {
	     
	   		var userAnswer=answers.userAnswer;
	    	if(userAnswer == answer){
	    		console.log("Correct.");
	    		correct++;
	    	}else{
	    		console.log("Incorrect.");
	    	};

	 	console.log(question);
	     console.log(answer);
	      count++;
	     //console.log("Correct: "+correct+'\n' + "Attempted: "+count);
	      runQuiz();
	    });//end then

 	}  else {

	  	var percent= correct/count;
	  	percent= +percent.toFixed(2);
	  	percent = percent*100;
	    console.log("Summary: "+'\n'+"Correct: "+correct+'\n' + "Attempted: "+count+'\n' +"Percent Correct: "+percent +"%");
  	};//end if/else


}; //end runQuiz



module.exports = basicQuiz;
var inquirer = require("inquirer");
var fs = require("fs");
var count = 0;
var correct = 0;
var obj = {};

var clozeQuiz = function(){
//get the questions
	fs.readFile("clozeArray.json", 'utf8', function readFileCallback(err, data){
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

};//end clozeQuiz()

var runQuiz = function(){
	//code to run the quiz
	//console.log(obj);
	var clozeObj=obj.cloze;
	var length = Object.keys(clozeObj).length;
	// console.log(length);
 if (count < length) {

 	var question=clozeObj[count].fullText;
 	var answer=clozeObj[count].clozeDeleted;
 	//console.log(question);
 	//console.log(answer);

	var partialText = question.replace(answer, "____________");
	// console.log(partialText);


    inquirer.prompt([
      {
      	type: 'input',
        name: "userAnswer",
        message: partialText+'\n' + "---->"
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
      count++;
     //console.log("Correct: "+correct+'\n' + "Attempted: "+count);
      runQuiz();
    });

  }
  else {

  	var percent= correct/count;
  	percent= +percent.toFixed(2);
  	percent = percent*100;
    console.log("Summary: "+'\n'+"Correct: "+correct+'\n' + "Attempted: "+count+'\n' +"Percent Correct: "+percent +"%");
  };










}

module.exports = clozeQuiz;
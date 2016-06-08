//like the playlist
function Quiz() {
//Quiz Object properties
	//question/answer array
	this.questionsArray = questionsArray;
	this.currentQuestionIndex = 0;
	this.score = 0;

}
//Quiz Methods

//if correct quess
Quiz.prototype.guess = function(answer){
//if correct choice {
	if(this.getCurrentQuestion().correctAnswer(answer)){
		//congrats, you are right
		//add 1 to score
		this.score++;
	}
	//ask the next question
	this.currentQuestionIndex++;
};

//get current question
Quiz.prototype.getCurrentQuestion = function() {
	return this.questionsArray[this.currentQuestionIndex];
};

//end quiz
Quiz.prototype.endQuiz = function(){
	return this.currentQuestionIndex >= this.questionsArray.length;
};

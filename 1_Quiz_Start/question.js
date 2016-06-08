//Question Object
function Question(text,choices, answer){
	//question
	this.text = text;
	//choices
	this.choices = choices;
	//correct
	this.answer = answer;
}

Question.prototype.correctAnswer = function (choice){
	return this.answer === choice;
};
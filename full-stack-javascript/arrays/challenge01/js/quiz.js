var questions = [
  ['How many days in a week (use a number)?', 7],
  ['how many in a baker&#8217;s dozen (use a number)?', 13],
  ['Kentucky was added to the US in what positon (use a number)?', 15]
];
var question;
var answer;
var correctAnswers = 0;
var response;
var html;

function print(message) {
  document.write(message);
}

for ( var i = 0; i < questions.length; i += 1){
	question = questions[i][0];
	answer = questions[i][1];
	response = parseInt(prompt(question));
	if ( response === answer ) {
		correctAnswers += 1;
	}
}

html = "You got  " + correctAnswers + " question(s) right."
print(html);
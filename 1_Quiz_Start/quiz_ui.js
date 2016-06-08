var QuizUI = {
	showNext: function() {
		if (quiz.endQuiz()) {
			this.showScore();
		} else {
			this.showQuestion();
			this.showChoices();
			this.showProgress();
		}
	},
	showQuestion: function() {
		this.fillIdWithHTML("question", quiz.getCurrentQuestion().text);
	},
	showChoices: function() {
		var choices = quiz.getCurrentQuestion().choices;

		for(var i = 0; i < choices.length; i++) {
			this.fillIdWithHTML("choice" + i, choices[i]);
			this.guessHandler("guess" + i, choices[i]);
		}
	},
	showScore: function() {
		var gameOverHTML = "<h1>Game Over</h1>";
		gameOverHTML += "<h2> Your score is: " + quiz.score + "</h2>";
		this.fillIdWithHTML("quiz", gameOverHTML);
	},
	fillIdWithHTML: function(id, text) {
		var element = document.getElementById(id);
		element.innerHTML = text;
	},
	guessHandler: function(id, guess) {
		var button = document.getElementById(id);
		button.onclick = function() {
			quiz.guess(guess);
			QuizUI.showNext();
		}
	},
	showProgress: function() {
		var currentQuestionNumber = quiz.currentQuestionsIndex + 1;
		this.fillIdWithHTML("progress", "Question ", + currentQuestionNumber + " of " + quiz.questionsArray.length);
	}
};
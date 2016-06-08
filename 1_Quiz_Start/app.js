//controls application by connecting all objects

// use these...
// getElementByID to get and update elements with innerHTML
//assign methods to buttons using onclick 
//use constructors, prototypes and object literals
//plan out the steps in comments, then execute.

//create questions 
var questionsArray = [
	new Question("How many in a baker's dozen?", [11, 12, 13, 14], 13),

	new Question("What was the 38th state admitted to the Union?", ["Idaho", "Colorado", "Oregon", "New Mexico"], "Colorado")
];

//create Quiz
var quiz = new Quiz(questionsArray);

//show quiz
QuizUI.showNext();
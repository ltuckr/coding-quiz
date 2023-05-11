//array of questions
var questions = [
	{
		question: "Which HTML element holds Javascript?",
		answers: {
			a: "<styles>",
			b: "<script>",
			c: "<header>",
		},

		correctAnswer: 'a'
	},

	{
		question: "How do you add a comment in JavaScript?",
		answers: {
			a: "//add comment",
			b: "add comment",
			c: "!add comment",
		},

		correctAnswer: 'a'
	},

	{

	question: "Java and JavaScript are the same",
		answers: {
			a: "True",
			b: "False",
		
		},

		correctAnswer: 'b',
    },

	{
		question: "Which event occurs when the user clicks on an HTML element?",
		answers: {
			a: "onchange",
			b: "onpush",
			c: "onclick",
		},

		correctAnswer: 'c',
	},


];

//functions skeleton from https://simplestepscode.com/javascript-quiz-tutorial/
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}


//functions skeleton from https://simplestepscode.com/javascript-quiz-tutorial/
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
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
var output = [];
	var answers;

	// for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}
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
	showQuestions(questions, quizContainer);
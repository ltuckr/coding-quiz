// various elements in quiz
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var timer = document.getElementById("timer");
var startDiv = document.getElementById("start");
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");
var questionIndex = 0; //added to track of which question we are on

// Define questions array
var questions = [
  {
    question: "Which HTML element holds JavaScript?",
    answers: [
      "a: <styles>",
      "b: <script>",
      "c: <header>"
	],
    correctAnswer: 'b'
  },
  {
    question: "How do you add a comment in JavaScript?",
    answers: [
      "a: //add comment",
      "b: add comment",
      "c: !add comment"
	],
    correctAnswer: 'a'
  },
  {
    question: "Java and JavaScript are the same",
    answers: [
      "a: True",
      "b: False"
	],
    correctAnswer: 'b'
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: [
      "a: onchange",
      "b: onpush",
      "c: onclick"
	],
    correctAnswer: 'c'
  },
];

//  start button = timer starts
startDiv.addEventListener('click', newQuiz); //add event listener to start button

var totalTime = 200;
function newQuiz() {
    questionIndex = 0;
    totalTime = 150;
    timer.textContent = totalTime;
    initialInput.textContent = "";


    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
            }
        }
    },1000);

    showQuiz();
};

function generateQuiz(questions, quizContainer) {
	var output = [];
  
	// for each question...
	for (var i = 0; i < questions.length; i++) {
	  var question = questions[i];
	  var answers = [];
  
	  // for each available answer to this question...
	  for (var letter in question.answers) {
		answers.push(
		  '<label>'
		  + '<input type="radio" name="question' + i + '" value="' + letter + '">'
		  + letter + ': '
		  + question.answers[letter]
		  + '</label>'
		);
	  }
  
	  output.push(
		'<div class="question">' + question.question + '</div>'
		+ '<div class="answers">' + answers.join('') + '</div>'
	  );
	}
  
	// Combine the output list into one string of HTML and put it on the page
	quizContainer.innerHTML = output.join('');
  }

function showResults(questions, quizContainer, resultsContainer) {
  // user's answers
  var userAnswers = [];

  var quizInputs = quizContainer.getElementsByTagName('input');
  for (var i = 0; i < quizInputs.length; i++) {
    if (quizInputs[i].checked) {
      userAnswers.push(quizInputs[i].value);
    }
  }

  // Calculate score
  var score = 0;
  for (var i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].correctAnswer) {
      score++;
    }
  }


  // Display the results
  resultsContainer.innerHTML = 'You scored ' + score + ' out of ' + questions.length;
}

// Call the generateQuiz function to display the quiz
generateQuiz(questions, quizContainer);

// event listeners

// Attach the showResults function to the submit button click event.
submitButton.addEventListener('click', function() {
  showResults(questions, quizContainer, resultsContainer);

// Attach the storeHighScores function to the submit button click event.
submitButton.addEventListener('click', storeHighScores);

  
});




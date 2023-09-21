var startButton = document.getElementById("start");
var QuizContainer = document.getElementById("quiz-container");
var questionElement = document.getElementById("question");
var optionsElement = document.getElementById("choicesUl"); // Updated ID
var submitButton = document.getElementById("submit-btn");
var scoreContainer = document.getElementById("score-container");
var timerElement = document.getElementById("timer");
var nextButton = document.getElementById("next"); // Added "Next" button

var currentQuestionIndex = 0;
var score = 0;
var timeLeft = 60;
var timerInterval;

// Questions array
var questions = [
    {
      question: "Which HTML element holds JavaScript?",
      options: [
        "1: <styles>",
        "2: <script>",
        "3: <header>"
      ],
      correctAnswer: 1 // Updated to match the index of the correct option
    },
    {
      question: "How do you add a comment in JavaScript?",
      options: [
        "1: //add comment",
        "2: add comment",
        "3: !add comment"
      ],
      correctAnswer: 0 // Updated to match the index of the correct option
    },
    // ... (other questions)
];

// Start button event listener
startButton.addEventListener("click", startQuiz);

// Function to display a question
function displayQuestion(questionObject) {
    questionElement.textContent = questionObject.question;

    // Clear previous options
    optionsElement.innerHTML = "";

    // Loop through answer options and create radio buttons
    for (var i = 0; i < questionObject.options.length; i++) {
        var optionLabel = questionObject.options[i];
        var optionInput = document.createElement("input");
        optionInput.type = "radio";
        optionInput.name = "answer";
        optionInput.value = i;

        var optionText = document.createElement("label");
        optionText.textContent = optionLabel;

        optionsElement.appendChild(optionInput);
        optionsElement.appendChild(optionText);
        optionsElement.appendChild(document.createElement("br"));
    }
}

// Function to start the quiz and the timer
function startQuiz() {
    startButton.classList.add("hide");
    QuizContainer.classList.remove("hide");

    // Initialize the timer
    timerElement.textContent = "Time: " + timeLeft;
    timerInterval = setInterval(function () {
        timeLeft--;
        timerElement.textContent = "Time: " + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);

    // Display the first question
    displayQuestion(questions[currentQuestionIndex]);
}

// Function to move to the next question
function nextQuestion() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        // No option selected, do something (e.g., show a message)
        return;
    }

    var selectedAnswer = parseInt(selectedOption.value);
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
        // Correct answer selected, update the score
        score++;
    }

    currentQuestionIndex++; // Move to the next question
    if (currentQuestionIndex < questions.length) {
        displayQuestion(questions[currentQuestionIndex]); // Display the next question
    } else {
        // Handle end of the quiz
        endQuiz();
    }
}

// Add an event listener to the "Next" button
nextButton.addEventListener("click", nextQuestion);

// Function to end the quiz
function endQuiz() {
    clearInterval(timerInterval);
    QuizContainer.classList.add("hide");
    scoreContainer.textContent = "Your Score: " + score;
    scoreContainer.classList.remove("hide");
}

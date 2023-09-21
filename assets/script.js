var startButton = document.getElementById("start"); //changed to "Start" button
var QuizContainer = document.getElementById("quiz-container");
var questionElement = document.getElementById("question");
var optionsElement = document.getElementById("choicesUl"); // Updated to match the HTML
var submitButton = document.getElementById("submit");
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
      correctAnswer: 1 // Index of the correct option (2: <script>)
    },
    {
      question: "How do you add a comment in JavaScript?",
      options: [
        "1: //add comment",
        "2: add comment",
        "3: !add comment"
      ],
      correctAnswer: 0 // Index of the correct option (1: //add comment)
    },
    {
      question: "Java and JavaScript are the same",
      options: [
        "1: True",
        "2: False"
      ],
      correctAnswer: 1 // Index of the correct option (2: False)
    },
    {
      question: "Which event occurs when the user clicks on an HTML element?",
      options: [
        "1: onchange",
        "2: onpush",
        "3: onclick"
      ],
      correctAnswer: 2 // Index of the correct option (3: onclick)
    },
    {
      question: "What does the acronym 'DOM' stand for in JavaScript?",
      options: [
        "1: Document Order Model",
        "2: Document Object Model",
        "3: Data Oriented Module",
        "4: Digital Output Method"
      ],
      correctAnswer: 1 // Index of the correct option (2: Document Object Model)
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["1: new", "2: var", "3: let", "4: const"],
      correctAnswer: 1 // Index of the correct option (2: var)
    },
    {
      question: "What is the purpose of the 'addEventListener' method in JavaScript?",
      options: [
        "1: To modify the style of an element",
        "2: To create a new HTML element",
        "3: To add an event handler to an element",
        "4: To perform mathematical calculations"
      ],
      correctAnswer: 2 // Index of the correct option (3: To add an event handler to an element)
    },
    {
      question: "Which symbol is used for single-line comments in JavaScript?",
      options: ["1: //", "2: ##", "3: --", "4: /* */"],
      correctAnswer: 0 // Index of the correct option (1: //)
    },
    {
      question: "What is the result of the following expression: '5' + 2?",
      options: ["1: 7", "2: 52", "3: 3", "4: '52'"],
      correctAnswer: 3 // Index of the correct option (4: '52')
    },
    {
      question: "What is the purpose of the 'setTimeout' function in JavaScript?",
      options: [
        "1: To stop the execution of the script",
        "2: To delay the execution of a function",
        "3: To perform an asynchronous network request",
        "4: To define a loop in the code"
      ],
      correctAnswer: 1 // Index of the correct option (1: To stop the execution of the script)
    },
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


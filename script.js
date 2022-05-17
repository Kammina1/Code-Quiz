var startBtn = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerBtnElement = document.getElementById("answer-btns");
var answerText = document.getElementById("answer-text");
var counterText = document.getElementById("counter-text");
var counter = 75;
var id;
var shuffleQuestions = [];
var currentQuestionIndex = 0;
var score =0;
var gameIsOver = document.getElementById("game-over");
var nameScore = document.getElementById('name-score');
var lastScore = document.getElementById('last-score');
var storedScore = document.getElementById('stored-score');
lastScore.innerText = showScore();

startBtn.addEventListener('click', beginQuiz)
nameScore.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        saveScore()
        lastScore.innerText = showScore();
        nameScore.value = "";
    }
})

function beginQuiz() {
   startBtn.classList.add('hide');
   questionContainer.classList.remove('hide');
   shuffleQuestions = questions.sort(() => Math.random() - .5);
   setElementInnerText(counterText, counter);
   id = setInterval(() => {
       decrement();
   }, 1000);
   showNextQuestion();
}

function decrement() {
    counter--;
    var quit = counter <= 0;
    setElementInnerText(counterText, quit ? 0 : counter);
    if (quit) {
        clearInterval(id);
        gameOver();
    }
}
    
function showNextQuestion() {
    showQuestion(shuffleQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    showOptions(question.answers);
}

function showOptions(answers) {
    for (var i = 0; i < answers.length; i++) {
        var btn = document.getElementById('btn' + (i+1));
        btn.innerText = answers[i].text;
    }
}

function isCorrect(index) {
    var isCorrect = shuffleQuestions[currentQuestionIndex].answers[index].correct;
    answerText.classList.remove('hide');
    setElementInnerText(answerText, isCorrect ? 'Correct!' : 'Wrong!');
    if (!isCorrect) {
        counter -= 10;
        if (counter < 0) {
            counter = 0;
        }
        setElementInnerText(counterText, counter);
    } else {
        score++;
    }

    setTimeout(() => {
        answerText.className = 'hide';
    }, 3000);
    currentQuestionIndex++;
    if (currentQuestionIndex >= shuffleQuestions.length) {
        gameOver();
    } else {
        showNextQuestion();
    }
}

function setElementInnerText(element, text) {
    element.innerText = text;
}

function gameOver() {
    startBtn.classList.add('hide');
   questionContainer.classList.add('hide');
   gameIsOver.classList.remove('hide');
   var p1 = document.getElementById("p1");
   setElementInnerText(p1, "You scored: " + score + "/5")
   clearInterval(id);
   counterText.classList.add('hide');
}

function saveScore() {
    var previousScore = nameScore.value;
    localStorage.setItem("name-score", previousScore);
}

function showScore() {
    var scoreShowed = localStorage.getItem("name-score");
    return scoreShowed;
}

var questions = [
    {
        question: "What does HTML stand for?",
        answers:[
            {text: "Hypertext Markup Language", correct: true},
            {text: "Hugo tries making lemonade", correct: false},
            {text: "He thrashed my lights", correct: false},
            {text: "Hyper marked markdown language", correct: false}
        ]
    },
    {
        question: "How do you wrap an element in HTML?",
        answers: [
            {text: "()", correct: false},
            {text: "<>", correct: true},
            {text: "{}", correct: false},
            {text: "[]", correct: false}
        ]
    },
    {
        question: "What does CSS mostly responsible for?",
        answers: [ 
            {text: "User interaction", correct: false},
            {text: "Web page layout", correct: false},
            {text: "Animations and Alers", correct: false},
            {text: "Styling page content", correct: true}
        ],
    },
    {
        question: "What does a Boolean return?",
        answers: [
            {text: "a True or False", correct: true},
            {text: "a Number", correct: false},
            {text: "a String of text", correct: false},
            {text: "Nothing at all", correct: false}
        ],
    },
    {
        question: "What is the term for writing code that is commented out?",
        answers: [
            {text: "Fake code", correct: false},
            {text: "Ghost coding", correct: false},
            {text: "Psuedo-coding", correct: true},
            {text: "Pointless coding", correct: false}
        ]
    }
]
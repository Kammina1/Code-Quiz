var startBtn = document.getElementById("start-btn")
var questionContainer = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerBtnElement = document.getElementById("answer-btns")
var shuffleQuestions;
var currentQuestionIndex;

startBtn.addEventListener('click', beginQuiz)

function beginQuiz() {
   startBtn.classList.add('hide')
   questionContainer.classList.remove('hide')
   shuffleQuestions = questions.sort(() => Math.random() - .5)
   currentQuestionIndex = 0
   showNextQuestion()
}
    
function showNextQuestion(question) {
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    }

function rightAnswer() {

}

var questions = [
    {
        question: "What does HTML stand for?",
        answers:[
            {text: "Hypertext Markup Language", correct: true},
            {text: "Hugo tries making lemonade", correct: false},
            {text: "He thrashed my lights", correct: false},
            {text: "Hyper marked markdown language", correct: false}
        ],
        question: "How do you wrap an element in HTML?",
        answers: [
            {text: "()", correct: false},
            {text: "<>", correct: true},
            {text: "{}", correct: false},
            {text: "[]", correct: false}
        ],
        question: "What does CSS mostly responsible for?",
        answers: [ 
            {text: "User interaction", correct: false},
            {text: "Web page layout", correct: false},
            {text: "Animations and Alers", correct: false},
            {text: "Styling page content", correct: true}
        ],
        question: "What does a Boolean return?",
        answers: [
            {text: "a True or False", correct: true},
            {text: "a Number", correct: false},
            {text: "a String of text", correct: false},
            {text: "Nothing at all", correct: false}
        ],
        question: "What is the term for writing code that is commented out?",
        answers: [
            {text: "Fake code", correct: false},
            {text: "Ghost coding", correct: false},
            {text: "Psuedo-coding", correct: true},
            {text: "Pointless coding", correct: false}
        ]
    }
]
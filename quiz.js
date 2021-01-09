const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#ProgressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

// set the timer
var startingTime = 10;
let time = startingTime * 60;
const gameTimeE1 = document.getElementById('gameclock')

var timer = setInterval(countdownTime, 1000);

function countdownTime() {
    // var timer = setInterval(countdownTime, 1000);
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    gameTimeE1.innerHTML = seconds;
    time--;

    if (time<= 0) {
        time=0;
        clearInterval(timer)
        //win game
    }
}






let questions = [
    {
        question: 'What is the definition of an undefined value in Javascript?',
        choice1: 'Variable used in the code does not exist',
        choice2: 'Variable is not assigned to any value',
        choice3: 'Property does not exist',
        choice4: 'All of the above',
        answer: 4,
    },
    {
        question: 'What are the types of Pop up boxes available in Javascript?',
        choice1: 'Alert',
        choice2: 'Prompt',
        choice3: 'confrim',
        choice4: 'All of the above',
        answer: 4,

    },
    {
        question: 'What are the two basic groups of datatypes in Javascript?',
        choice1: 'Primitive',
        choice2: 'Reference types',
        choice3: 'All of the above',
        choice4: 'None of the above',
        answer: 3,
    },
    {
        question: 'Which of the following are the functional components in JavaScript?',
        choice1: 'First-class functions',
        choice2: 'Encapsulated-class functions',
        choice3: 'Fixed-class functions',
        choice4: 'All of the above',
        answer: 1,
    }
]



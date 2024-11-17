const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text:"Shark", correct: false},
            {text:"Blue Whale", correct: true},
            {text:"Elephant", correct: false},
            {text:"Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            {text:"Vactican city", correct: true},
            {text:"Nepal", correct: false},
            {text:"India", correct: false},
            {text:"China", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            {text:"Kalahari", correct: false},
            {text:"Gobi", correct: false},
            {text:"Sahara", correct: true},
            {text:"Antarctica", correct: false},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            {text:"Asia", correct: false},
            {text:"Australia", correct: true},
            {text:"Europe", correct: false},
            {text:"Antarctica", correct: false},
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nxt-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){

    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn"); // Adds the "btn" CSS class to style the button
        answerButton.appendChild(button); // Appends the button to a parent container `answerButton`
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

startQuiz();



// Here, A "question"  property   (string)
// An "answer" property (array of objects)
// A "text" property (string)
// A "correct"  property (boolean)
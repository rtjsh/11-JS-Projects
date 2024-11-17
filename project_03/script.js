
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

const questionElement = document.querySelector('#question')
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('nxt-btn');

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
        if(answer.correct)
        {
            button.dataset.correct = answer.correct; // A data-correct ="true" attribute will be added to the button as below if that particular answer is correct else it will not be added: <button class="btn" data-correct="true">Blue Whale</button>

        }
        button.addEventListener("click",selectAnswer)
    })
}

// For removing the previously set answer buttons: Answer 1 and so on
function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    //If we have selected the wrong answer, it will check all the answer and add the correct answer to the class "correct" and the background color of that button will change accordingly showing us what actually the correct answer is.
    // Here, Array.from(answerButton.children): This converts the children collection (which is a live HTMLCollection) of the answerButton element into an array. This is done because HTMLCollection doesn't have array methods like forEach.

    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct ==="true")
        {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore()
{
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton()
{   
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }

    else{
        showScore();
    }

}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length)
    {
        handleNextButton(); // Next button will lead to next question until the questions are completed  
    }
    else{
        startQuiz(); // Then the Next button will restart the quiz again
    }
})


startQuiz();



// Here, A "question"  property   (string)
// An "answer" property (array of objects)
// A "text" property (string)
// A "correct"  property (boolean)
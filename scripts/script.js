// SCREENS
let sectionMenu = document.querySelector('#menu')
let sectionCredits = document.querySelector('#credits')
let sectionBoardgame = document.querySelector('#boardgame')
let sectionQuestion = document.querySelector('#question')
let sectionAnswer = document.querySelector('#answer')
let sectionApresentation = document.querySelector('#apresentation')
let sectionRules = document.querySelector('#rules')

// BTNs
let btnPlay = document.querySelector('img#btnPlay')
let btnCredits = document.querySelector('#btnCredits')
let btnExit = document.querySelector('#btnExit')
let btnContinue = document.querySelector('#btnContinue')
let btnRules = document.querySelector('#btnRules')
let btnBackFromRulesToApresentation = document.querySelector('#btnBackFromRulesToApresentation')
let btnBackFromCreditsToApresentation = document.querySelector('#btnBackFromCreditsToApresentation')
let btnBackFromQuestionToBoardgame = document.querySelector('#btnBackFromQuestionToBoardgame')

//CHARACTER
let superDentinho = document.querySelector('#superDentinho')

//SLOT OF QUESTIONS
let questionSlot1 = document.querySelector('img#q1')
let questionSlot2 = document.querySelector('img#q2')
let questionSlot3 = document.querySelector('img#q3')
let questionSlot4 = document.querySelector('img#q4')
let questionSlot5 = document.querySelector('img#q5')
let questionSlot6 = document.querySelector('img#q6')
let questionSlot7 = document.querySelector('img#q7')
let questionSlot8 = document.querySelector('img#q8')
let questionSlot9 = document.querySelector('img#q9')
let questionSlot10 = document.querySelector('img#q10')

let questionSlot11 = document.querySelector('img#q11')
let questionSlot12 = document.querySelector('img#q12')
let questionSlot13 = document.querySelector('img#q13')
let questionSlot14 = document.querySelector('img#q14')
let questionSlot15 = document.querySelector('img#q15')
let questionSlot16 = document.querySelector('img#q16')
let questionSlot17 = document.querySelector('img#q17')
let questionSlot18 = document.querySelector('img#q18')
let questionSlot19 = document.querySelector('img#q19')
let questionSlot20 = document.querySelector('img#q20')

// VARS
let numberQuestion = 0

// INITIALIZE
sectionMenu.style.display = 'flex'
sectionCredits.style.display = 'none'
sectionBoardgame.style.display = 'none'
sectionQuestion.style.display = 'none'
sectionAnswer.style.display = 'none'
sectionApresentation.style.display = 'none'
sectionRules.style.display = 'none'

// DEFINE THE FIRST SCREEN
document.body.classList.add("start");

// // DEFINE THE FIRST POSITION
// superDentinho.classList.add("p1")

// DEFINE THE FIRST ACTIVE SLOT QUESTION
questionSlot1.classList.add("questionSlotActive")
// DEFINE THE OTHERS SLOT QUESTION POSITIONS
questionSlot1.classList.add("p1")
questionSlot2.classList.add("p2")
questionSlot3.classList.add("p3")
questionSlot4.classList.add("p4")
questionSlot5.classList.add("p5")
questionSlot6.classList.add("p6")
questionSlot7.classList.add("p7")
questionSlot8.classList.add("p8")
questionSlot9.classList.add("p9")
questionSlot10.classList.add("p10")

questionSlot11.classList.add("p11")
questionSlot12.classList.add("p12")
questionSlot13.classList.add("p13")
questionSlot14.classList.add("p14")
questionSlot15.classList.add("p15")
questionSlot16.classList.add("p16")
questionSlot17.classList.add("p17")
questionSlot18.classList.add("p18")
questionSlot19.classList.add("p19")
questionSlot20.classList.add("p20")

// NAVIGATE FROM START PLAY TO APRESENTATION
btnPlay.addEventListener("click", function () {
    sectionMenu.style.display = 'none'
    sectionApresentation.style.display = 'flex'

    document.body.classList.remove("background")
    document.body.classList.add("apresentation")

    btnPlay.style.display = 'none'

    displayApresentationGame()

    playSound()
});

// NAVIGATE FROM APRESENTATION TO CREDITS
btnCredits.addEventListener("click", function () {
    sectionApresentation.style.display = 'none'
    sectionCredits.style.display = 'flex'

    document.body.classList.remove("apresentation")
    document.body.classList.add("credits")

    displayApresentationCredits()
});

// NAVIGATE FROM APRESENTATION TO RULES
btnRules.addEventListener("click", function () {
    sectionApresentation.style.display = 'none'
    sectionRules.style.display = 'flex'

    document.body.classList.remove("background")
    document.body.classList.add("rules")

    displayApresentationRules()
});

// NAVIGATE FROM APRESENTATION TO CREDITS
btnContinue.addEventListener("click", function () {
    sectionApresentation.style.display = 'none'
    sectionBoardgame.style.display = 'flex'

    document.body.classList.remove("background")
    document.body.classList.add("credits")
});

btnBackFromRulesToApresentation.addEventListener("click", function () {
    sectionRules.style.display = 'none'
    sectionApresentation.style.display = 'flex'

    document.body.classList.remove("rules")
    document.body.classList.add("apresentation")
});

btnBackFromCreditsToApresentation.addEventListener("click", function () {
    sectionCredits.style.display = 'none'
    sectionApresentation.style.display = 'flex'

    document.body.classList.remove("credits")
    document.body.classList.add("apresentation")
});

btnBackFromQuestionToBoardgame.addEventListener("click", function () {
    sectionQuestion.style.display = 'none'
    sectionBoardgame.style.display = 'flex'

    document.body.classList.remove("question")
    document.body.classList.add("boardgame")
});

// EXIT THE GAME
// btnExit.addEventListener("click", function() {
//     window.close()
// });

// NAVIGATE TO THE QUESTIONS
questionSlot1.addEventListener("click", function () {

    // change background
    sectionBoardgame.style.display = 'none'
    sectionQuestion.style.display = 'flex'

    document.body.classList.remove("background")
    document.body.classList.add("question")

    prepareQuestion()
});

// BACKGROUND SOUND
function playSound() {
    let sound = document.getElementById("audio")
    sound.currentTime = 0
    sound.loop = true
    sound.play()
}

/*  QUESTIONS  */

var questions = [
    {
        title: "Quantas vezes devemos escovar nossos dentinhos ao dia?",
        choices: ["Sempre após nos alimentar.", "Parte da manhã e a noite."],
        answer: "Sempre após nos alimentar.",
        correctAnswerExplanation: "Obaaa!!! Você acertou, todas as vezes que nos alimentamos precisamos limpar nossos dentinhos.",
        wrongAnswerExplanation: "Resposta incorreta sobre balãozinho, Hum...:( Você errou, todas as vezes que nos alimentamos precisamos limpar nossos dentinhos "
    },
    {
        title: "Qual a forma correta de escovar seus dentinhos, na sua idade?",
        choices: ["Técnica da bolinha, escovinha não inclinada.", "Técnica da vassourinha, escovinha inclinada."],
        answer: "Técnica da vassourinha, escovinha inclinada.",
        correctAnswerExplanation: "Isso aí!!! Você acertou devemos inclinar a escova 45° e escovar os dentes em todas suas faces, lembrando que acima (na oclusal) dos dentinhos faremos movimento de vai e vem.",
        wrongAnswerExplanation: "Incorreta ,que pena você errou! A técnica da bolinha e para crianças menores de 8 anos ou aqueles que tem dificuldade motora, na hora da escovação."
    },
    {
        title: "Como deve ser a escovinha dental?",
        choices: ["Dura, e com a cabeça da escova pequena.", "Macia, e com a cabeça da escova pequena."],
        answer: "Macia, e com a cabeça da escova pequena.",
        correctAnswerExplanation: "Parabéns !!Isso mesmo você está indo muito bem, a escova dental deve sempre ser pequena e macia para conseguir limpar todos os cantinhos do dente, sem machucar.",
        wrongAnswerExplanation: "Incorreta !A escovinha sempre deve ser pequena e macia  para conseguir limpar todos os cantinhos do dente ,sem machucar."
    },
    {
        title: "Which of the following is NOT a method to call an element with class 'example'?",
        choices: ["document.getElementsByClassName( 'example');", "document.body.example;", "document.querySelector( '.example')", "document.querySelectorAll( '.example')[0]"],
        answer: "document.body.example;"
    },
    {
        title: "Arrays in JavaScript can be used to store ______.",
        choices: ["strings", "numbers", "objects", "All of the Above"],
        answer: "All of the Above"
    },
    {
        title: "Undefined does NOT mean that _______.",
        choices: ["the variable in the code doesn't exist", "the variable is not assigned to a value", "the variable is assigned no value", "the property doesn't exist"],
        answer: "the variable is assigned no value"
    },
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Data is stored in localStorage as _____.",
        choices: ["strings", "objects", "arrays", "all of the above"],
        answer: "strings"
    },
    {
        title: "Which of the following is NOT a method to call an element with class 'example'?",
        choices: ["document.getElementsByClassName( 'example');", "document.body.example;", "document.querySelector( '.example')", "document.querySelectorAll( '.example')[0]"],
        answer: "document.body.example;"
    },
    {
        title: "Arrays in JavaScript can be used to store ______.",
        choices: ["strings", "numbers", "objects", "All of the Above"],
        answer: "All of the Above"
    },
    {
        title: "Undefined does NOT mean that _______.",
        choices: ["the variable in the code doesn't exist", "the variable is not assigned to a value", "the variable is assigned no value", "the property doesn't exist"],
        answer: "the variable is assigned no value"
    }
];

function changeActiveSlotQuestion() {
    switch (numberQuestion) {
        case 0:
            questionSlot1.classList.remove("questionSlotActive")
            questionSlot2.classList.add("questionSlotActive")
            break;

        case 1:
            questionSlot2.classList.remove("questionSlotActive")
            questionSlot3.classList.add("questionSlotActive")
            break;

        case 2:
            questionSlot3.classList.remove("questionSlotActive")
            questionSlot4.classList.add("questionSlotActive")
            break;

        case 3:
            questionSlot4.classList.remove("questionSlotActive")
            questionSlot5.classList.add("questionSlotActive")
            break;

        case 4:
            questionSlot4.classList.remove("questionSlotActive")
            questionSlot5.classList.add("questionSlotActive")
            break;

        case 5:
            questionSlot4.classList.remove("questionSlotActive")
            questionSlot5.classList.add("questionSlotActive")
            break;

        case 6:
            questionSlot4.classList.remove("questionSlotActive")
            questionSlot5.classList.add("questionSlotActive")
            break;

        case 7:
            questionSlot6.classList.remove("questionSlotActive")
            questionSlot7.classList.add("questionSlotActive")
            break;

        case 8:
            questionSlot7.classList.remove("questionSlotActive")
            questionSlot8.classList.add("questionSlotActive")
            break;

        case 9:
            questionSlot8.classList.remove("questionSlotActive")
            questionSlot9.classList.add("questionSlotActive")
            break;

        case 10:
            questionSlot9.classList.remove("questionSlotActive")
            questionSlot10.classList.add("questionSlotActive")
            break;

        default:
            break;
    }
}

function prepareQuestion() {
    document.querySelector("#numberQuestion").innerHTML = `${numberQuestion}° Questão`
    document.querySelector("#question").innerHTML = questions[numberQuestion].title
    document.querySelector("#option1").innerHTML = questions[numberQuestion].choices
    document.querySelector("#option2").innerHTML = questions[numberQuestion].choices
}

function verifyQuestion() {
    if (condition) {

    } else {

    }

    changeActiveSlotQuestion()
    numberQuestion++;
}

function feedbackAnswer() {

}
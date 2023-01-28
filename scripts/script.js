// SCREENS
let sectionMenu = document.querySelector('#menu')
let sectionCredits = document.querySelector('#credits')
let sectionBoardgame = document.querySelector('#boardgame')
let sectionQuestion = document.querySelector('#question')
let sectionAnswer = document.querySelector('#answer')
let sectionApresentation = document.querySelector('#apresentation')
let sectionRules = document.querySelector('#rules')
let sectionVictory = document.querySelector('#victory')
let sectionThanks = document.querySelector('#thanks')
let sectionRotateScreen = document.querySelector('#rotateScreen')

// BTNs Screens
let btnPlay = document.querySelector('img#btnPlay.button')
let btnCredits = document.querySelector('img#btnCredits.button')
let btnContinue = document.querySelector('img#btnContinue.button')
let btnRules = document.querySelector('img#btnRules.button')

// BTNs Back
let btnBackFromRulesToApresentation = document.querySelector('#btnBackFromRulesToApresentation')
let btnBackFromCreditsToApresentation = document.querySelector('#btnBackFromCreditsToApresentation')
let btnBackFromQuestionToBoardgame = document.querySelector('#btnBackFromQuestionToBoardgame')
let btnNextFromToBoardgame = document.querySelector('#btnNextFromToBoardgame')
let btnBackFromBoardgameToMenu = document.querySelector('#btnBackFromBoardgameToMenu')

// BTNs Next
let btnNextCredit = document.querySelector('img#btnNextCredit.button')
let btnNextRule = document.querySelector('img#btnNextRule.button')

// BTNs Options
let btnOption1 = document.querySelector('img#optionButton1.optionButton')
let btnOption2 = document.querySelector('img#optionButton2.optionButton')

// License Creative Commons
let creativeCommon = document.querySelector('.creative-common')

//CHARACTER
let superDentinhoBoardGame = document.querySelector('#superDentinhoBoardGame')

//SLOT OF QUESTIONS
let questionSlot1 = document.querySelector('img#q1.questionSlot')
let questionSlot2 = document.querySelector('img#q2.questionSlot')
let questionSlot3 = document.querySelector('img#q3.questionSlot')
let questionSlot4 = document.querySelector('img#q4.questionSlot')
let questionSlot5 = document.querySelector('img#q5.questionSlot')
let questionSlot6 = document.querySelector('img#q6.questionSlot')
let questionSlot7 = document.querySelector('img#q7.questionSlot')
let questionSlot8 = document.querySelector('img#q8.questionSlot')
let questionSlot9 = document.querySelector('img#q9.questionSlot')
let questionSlot10 = document.querySelector('img#q10.questionSlot')
let questionSlot11 = document.querySelector('img#q11.questionSlot')
let questionSlot12 = document.querySelector('img#q12.questionSlot')
let questionSlot13 = document.querySelector('img#q13.questionSlot')
let questionSlot14 = document.querySelector('img#q14.questionSlot')
let questionSlot15 = document.querySelector('img#q15.questionSlot')
let questionSlot16 = document.querySelector('img#q16.questionSlot')
let questionSlot17 = document.querySelector('img#q17.questionSlot')
let questionSlot18 = document.querySelector('img#q18.questionSlot')
let questionSlot19 = document.querySelector('img#q19.questionSlot')
let questionSlot20 = document.querySelector('img#q20.questionSlot')

// VARS
let numberQuestion = 0

// FINGERS
let fingerPressingMenu = document.querySelector('img#fingerPressingMenu.fingerPressing')
let fingerPressingApresentation = document.querySelector('img#fingerPressingApresentation.fingerPressing')
let fingerPressingRules = document.querySelector('img#fingerPressingRules.fingerPressing')
let fingerPressingCredits = document.querySelector('img#fingerPressingCredits.fingerPressing')
let fingerPressingBoardgame = document.querySelector('img#fingerPressingBoardgame.fingerPressing')
let fingerPressingQuestion1 = document.querySelector('img#fingerPressingQuestion1.fingerPressing')
let fingerPressingQuestion2 = document.querySelector('img#fingerPressingQuestion2.fingerPressing')
let fingerPressingAnswer = document.querySelector('img#fingerPressingAnswer.fingerPressing')

// INITIALIZE
sectionMenu.style.display = 'none'
sectionCredits.style.display = 'none'
sectionBoardgame.style.display = 'none'
sectionQuestion.style.display = 'none'
sectionAnswer.style.display = 'none'
sectionApresentation.style.display = 'none'
sectionRules.style.display = 'none'
sectionVictory.style.display = 'none'
sectionRotateScreen.style.display = 'none'

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

// NAVIGATE FROM START TO APRESENTATION
btnPlay.addEventListener("click", function () {
    navigateFromStartToApresentation()
    playBackgroundSound()
});

// NAVIGATE FROM APRESENTATION TO CREDITS
btnCredits.addEventListener("click", function () {
    navigateFromApresentationToCredits()
    displayApresentationCredits()
});

// NAVIGATE FROM APRESENTATION TO RULES
btnRules.addEventListener("click", function () {
    navigateFromApresentationToRules()
    displayApresentationRules()
});

// NAVIGATE FROM APRESENTATION TO BOARDGAME
btnContinue.addEventListener("click", function () {
    navigateFromApresentationToBoardgame()
});

// NAVIGATE FROM ACTUAL QUESTION TO THE NEXT QUESTION
btnNextFromToBoardgame.addEventListener("click", function () {
    navigateForTheNextQuestionInBoardgame()
});

// NAVIGATE FROM BOARDGAME TO MENU
btnBackFromBoardgameToMenu.addEventListener("click", function () {
    navigateFromBoardgameToMenu()
});

// NAVIGATE FROM RULES TO APRESENTATION
btnBackFromRulesToApresentation.addEventListener("click", function () {
    navigateFromRulesToApresentation()
});

// NAVIGATE FROM CREDITS TO APRESENTATION
btnBackFromCreditsToApresentation.addEventListener("click", function () {
    navigateFromCreditsToApresentation()
});

btnBackFromQuestionToBoardgame.addEventListener("click", function () {
    navigateFromQuestionToBoardgame()
    updateDentinhoPosition(numberQuestion-1)            
});

// SHOW VICTORY
async function victory() { 
    fingerPressingBoardgame.style.display = 'none'

    start();
    stop();

    // NAVIGATE FROM BOARDGAME TO WINNER
    navigateFromBoardgameToWinner() 
    
    await delay(5000)

    // NAVIGATE FROM WINNER TO THANKS
    navigateFromWinnerToThanks()
};

// BACKGROUND SOUND
function playBackgroundSound() {
    let sound = document.getElementById("audioBd")
    sound.currentTime = 0
    sound.loop = true
    sound.play()
}

// CORRECT SOUND
function playCorrectSound() {
    let sound = document.getElementById("audioCt")
    sound.currentTime = 0
    sound.loop = false
    sound.play()
}

// WRONG SOUND
function playWrongSound() {
    let sound = document.getElementById("audioWg")
    sound.currentTime = 0
    sound.loop = false
    sound.play()
}

function updateDentinhoPosition(numberQuestion) {
    switch (numberQuestion) {
        case -1:
            changeDentinhoPosition(questionSlot0)
            break;

        case 0:
            changeDentinhoPosition(questionSlot1)
            break;

        case 1:
            changeDentinhoPosition(questionSlot2)
            break;

        case 2:
            changeDentinhoPosition(questionSlot3)
            break;

        case 3:
            changeDentinhoPosition(questionSlot4)
            break;

        case 4:
            changeDentinhoPosition(questionSlot5)
            break;

        case 5:
            changeDentinhoPosition(questionSlot6)
            break;

        case 6:
            changeDentinhoPosition(questionSlot7)
            break;

        case 7:
            changeDentinhoPosition(questionSlot8)
            break;

        case 8:
            changeDentinhoPosition(questionSlot9)
            break;

        case 9:
            changeDentinhoPosition(questionSlot10)
            break;

        case 10:
            changeDentinhoPosition(questionSlot11)
            break;

            case 11:
                changeDentinhoPosition(questionSlot12)
                break;
    
            case 12:
                changeDentinhoPosition(questionSlot13)
                break;
    
            case 13:
                changeDentinhoPosition(questionSlot14)
                break;
    
            case 14:
                changeDentinhoPosition(questionSlot15)
                break;
    
            case 15:
                changeDentinhoPosition(questionSlot16)
                break;
    
            case 16:
                changeDentinhoPosition(questionSlot17)
                break;
    
            case 17:
                changeDentinhoPosition(questionSlot18)
                break;
    
            case 18:
                changeDentinhoPosition(questionSlot19)
                break;
    
            case 19:
                changeDentinhoPosition(questionSlot20)
                break;

        default:
            break;
    }
}

async function goToQuestion(slotSelectedFromUSer) {
    if (numberQuestion === questions.length) {
        victory()
        return
    } else if (slotSelectedFromUSer === numberQuestion) {
        updateDentinhoPosition(numberQuestion)
        await delay(500);        
        navigateFromBoardgameToQuestion()        
    } 
}

function verifyQuestion(userChoice) {
    let answerUser = userChoice === "optionButton1" ? questions[numberQuestion].choices[0] : questions[numberQuestion].choices[1]

    let statusAnswerUser = questions[numberQuestion].answer === answerUser ? true : false

    feedbackAnswer(statusAnswerUser)
}

function feedbackAnswer(statusAnswerUser) {    

    navigateFromQuestionToAnswer()

    if (statusAnswerUser) {
        document.body.classList.add(`correctanswer${numberQuestion}`)
        playCorrectSound()
        start();
        stop();

        updateDentinhoPosition(numberQuestion)
        numberQuestion++  
    } else {
        document.body.classList.add(`wronganswer${numberQuestion}`)        
        playWrongSound()                
        updateDentinhoPosition(numberQuestion-1)            
    }    
}

function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

function changeDentinhoPosition(slotNumber) {
    document.addEventListener('click', function handleClick(event) {
        superDentinhoBoardGame.style.top = getOffset(slotNumber).top + 'px';
        superDentinhoBoardGame.style.left = getOffset(slotNumber).left + 'px';
    });    
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}
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

// DEFINE THE FIRST POSITION
// superDentinho.classList.add("p1")

// DEFINE THE FIRST ACTIVE SLOT QUESTION
questionSlot1.classList.add("questionSlotActive")

// NAVIGATE FROM START PLAY TO APRESENTATION
btnPlay.addEventListener("click", function() {
    sectionMenu.style.display = 'none'
    sectionApresentation.style.display = 'flex'

    document.body.classList.remove("background")
    document.body.classList.add("apresentation")

    btnPlay.style.display = 'none'

    displayApresentationText()

    playSound()
});

// NAVIGATE FROM APRESENTATION TO CREDITS
btnCredits.addEventListener("click", function() {
    sectionApresentation.style.display = 'none'
    sectionCredits.style.display = 'flex'

    document.body.classList.remove("background")
    document.body.classList.add("credits")
});

// NAVIGATE FROM APRESENTATION TO RULES
btnRules.addEventListener("click", function() {
    sectionApresentation.style.display = 'none'
    sectionRules.style.display = 'flex'

    document.body.classList.remove("background")
    document.body.classList.add("rules")
});

// NAVIGATE FROM APRESENTATION TO RULES
btnContinue.addEventListener("click", function() {
    sectionApresentation.style.display = 'none'
    sectionBoardgame.style.display = 'flex'

    document.body.classList.remove("background")
    document.body.classList.add("boardgame")
});

// EXIT THE GAME
btnExit.addEventListener("click", function() {
    window.close()
});

// NAVIGATE TO THE QUESTIONS
questionSlot1.addEventListener("click", function() {
    sectionBoardgame.style.display = 'none'
    sectionMenu.style.display = 'none'

    document.body.classList.remove("background")
    document.body.classList.add("question")
});

// BACKGROUND SOUND
function playSound(){
    let sound = document.getElementById("audio")
    sound.currentTime = 0
    sound.loop = true
    sound.play()
}
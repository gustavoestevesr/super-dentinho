// SCREENS
let sectionMenu = document.querySelector('#menu')
let sectionCredits = document.querySelector('#credits')
let sectionBoardgame = document.querySelector('#boardgame')
let sectionQuestion = document.querySelector('#question')
let sectionAnswer = document.querySelector('#answer')
let sectionApresentacao = document.querySelector('#apresentacao')

// BTNs
let btnPlay = document.querySelector('img#btnPlay.btn')
let btnCredits = document.querySelector('#btnCredits')
let btnExit = document.querySelector('#btnExit')
let btnContinue = document.querySelector('#btnContinue')

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
sectionApresentacao.style.display = 'none'

// DEFINE THE FIRST SCREEN
document.body.classList.add("start");

// DEFINE THE FIRST POSITION
superDentinho.classList.add("p1")

// DEFINE THE FIRST ACTIVE SLOT QUESTION
questionSlot1.classList.add("questionSlotActive")

// NAVIGATE PLAY MENU TO APRESENTACAO
btnPlay.addEventListener("click", function() {
    sectionMenu.style.display = 'none'
    sectionApresentacao.style.display = 'flex'

    document.body.classList.remove("background")
    document.body.classList.add("apresentacao")

    btnPlay.style.display = 'none'

    playSound()
});

// NAVIGATE TO EXIT GAME
btnCredits.addEventListener("click", function() {
    sectionMenu.style.display = 'none'
    sectionCredits.style.display = 'flex'

    document.body.classList.remove("background")
    document.body.classList.add("credits")

    playSound()
});

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
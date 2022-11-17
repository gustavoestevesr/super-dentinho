// SCREENS
let sectionMenu = document.querySelector('#menu')
let sectionCredits = document.querySelector('#credits')
let sectionBoardgame = document.querySelector('#boardgame')
let sectionQuestionLeft = document.querySelector('#questionLeft')
let sectionQuestionRight = document.querySelector('#questionRight')
let sectionAnswer = document.querySelector('#answer')

// BTNs
let btnPlay = document.querySelector('#btnPlay')
let btnCredits = document.querySelector('#btnCredits')
let btnExit = document.querySelector('#btnExit')

// INITIALIZE
sectionMenu.style.display = 'flex'
sectionCredits.style.display = 'none'
sectionBoardgame.style.display = 'none'
sectionQuestionLeft.style.display = 'none'
sectionQuestionRight.style.display = 'none'
sectionAnswer.style.display = 'none'

document.body.classList.add("background");

// NAVIGATE PLAY MENU TO BOARDGAME
btnPlay.addEventListener("click", function() {
    sectionMenu.style.display = 'none'
    sectionBoardgame.style.display = 'flex'

    document.body.classList.remove("background");
    document.body.classList.add("boardgame");
});

// NAVIGATE CREDITS MENU TO CREDITS
btnCredits.addEventListener("click", function() {
    sectionMenu.style.display = 'none'
    sectionCredits.style.display = 'flex'
});

// BACKGROUND SOUND

let sound = document.querySelector("#audio");
sound.currentTime = 0;
sound.loop = true; //if you want it to restart playing automatically when it ends
sound.play();
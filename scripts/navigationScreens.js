async function navigateFromAnyToOrientation() {
    sectionRotateScreen.style.display = "flex"
    document.body.classList.add("rotatescreen");
    
    await delay(4000);

    if ( !portrait.matches ) { // portrait
        navigateFromOrientationToMenu()
    } 
}

async function navigateFromOrientationToMenu() {
    sectionRotateScreen.style.display = "none"
    document.body.classList.remove("rotatescreen");

    document.querySelector('#menu').style.display = "flex"
    document.body.classList.add("start");

    fingerPressingMenu.style.top = getOffset(btnPlay).top + distanceFingerTop + 'px';
    fingerPressingMenu.style.left = getOffset(btnPlay).left + distanceFingerLeft + 'px';       
}


function navigateFromAnyToMenu() {
    document.querySelector('#menu').style.display = "flex"
    document.body.classList.add("start");
        
    fingerPressingMenu.style.top = getOffset(btnPlay).top + distanceFingerTop + 'px';
    fingerPressingMenu.style.left = getOffset(btnPlay).left + distanceFingerLeft + 'px';
}

function navigateFromStartToApresentation() {
    sectionMenu.style.display = 'none'
    sectionApresentation.style.display = 'flex'

    document.body.classList.remove("background")
    document.body.classList.add("apresentation")

    btnPlay.style.display = 'none'
    creativeCommon.style.display = 'none'

    fingerPressingApresentation.style.top = getOffset(btnContinue).top + distanceFingerTop + 'px';
    fingerPressingApresentation.style.left = getOffset(btnContinue).left + distanceFingerLeft + 'px';
}

function navigateFromApresentationToCredits() {
    sectionApresentation.style.display = 'none'
    sectionCredits.style.display = 'flex'

    document.body.classList.remove("apresentation")
    document.body.classList.add("creditsVanessa")

    fingerPressingCredits.style.top = getOffset(btnNextCredit).top + distanceFingerTop + 'px';
    fingerPressingCredits.style.left = getOffset(btnNextCredit).left + distanceFingerLeft + 'px';
}

function navigateFromApresentationToRules() {
    sectionApresentation.style.display = 'none'
    sectionRules.style.display = 'flex'

    document.body.classList.remove("background")
    document.body.classList.add("rules1")

    fingerPressingRules.style.top = getOffset(btnNextRule).top + distanceFingerTop + 'px';
    fingerPressingRules.style.left = getOffset(btnNextRule).left + distanceFingerLeft + 'px';
}

function navigateFromApresentationToBoardgame() {
    sectionApresentation.style.display = 'none'
    sectionBoardgame.style.display = 'flex'

    document.body.classList.remove("apresentation")
    document.body.classList.add("boardgame")

    fingerPressingBoardgame.style.top = getOffset(document.querySelector( `img#q${numberQuestion+1}.questionSlot.p${numberQuestion+1}` )).top + distanceFingerTop + 'px';
    fingerPressingBoardgame.style.left = getOffset(document.querySelector( `img#q${numberQuestion+1}.questionSlot.p${numberQuestion+1}` )).left + distanceFingerLeft + 'px';
}

function navigateForTheNextQuestionInBoardgame() {
    sectionAnswer.style.display = 'none'
    sectionBoardgame.style.display = 'flex'
    
    document.body.classList.remove(`correctanswer${numberQuestion-1}`)
    document.body.classList.remove(`wronganswer${numberQuestion}`)
    document.body.classList.add("boardgame")      

    fingerPressingBoardgame.style.top = getOffset(document.querySelector( `img#q${numberQuestion+1}.questionSlot.p${numberQuestion+1}` )).top + distanceFingerTop + 'px';
    fingerPressingBoardgame.style.left = getOffset(document.querySelector( `img#q${numberQuestion+1}.questionSlot.p${numberQuestion+1}` )).left + distanceFingerLeft + 'px';
}

function navigateFromBoardgameToMenu() {
    sectionBoardgame.style.display = 'none'
    sectionApresentation.style.display = 'flex'

    document.body.classList.remove("boardgame")
    document.body.classList.add("apresentation")

    fingerPressingBoardgame.style.top = getOffset(btnContinue).top + distanceFingerTop + 'px';
    fingerPressingBoardgame.style.left = getOffset(btnContinue).left + distanceFingerLeft + 'px';
}

function navigateFromRulesToApresentation() {
    sectionRules.style.display = 'none'
    sectionApresentation.style.display = 'flex'

    document.body.classList.remove("rules1")
    document.body.classList.remove("rules2")
    document.body.classList.add("apresentation")

    fingerPressingRules.style.top = getOffset(btnNextRule).top + distanceFingerTop + 'px';
    fingerPressingRules.style.left = getOffset(btnNextRule).left + distanceFingerLeft + 'px';
}

function navigateFromCreditsToApresentation() {
    sectionCredits.style.display = 'none'
    sectionApresentation.style.display = 'flex'    

    document.body.classList.remove("creditsVanessa")
    document.body.classList.remove("creditsCarlos")
    document.body.classList.remove("creditsGustavo")
    document.body.classList.add("apresentation") 
    
    fingerPressingCredits.style.top = getOffset(btnNextCredit).top + distanceFingerTop + 'px';
    fingerPressingCredits.style.left = getOffset(btnNextCredit).left + distanceFingerLeft + 'px';
}

function navigateFromBoardgameToWinner() {
    sectionBoardgame.style.display = 'none'
    sectionVictory.style.display = 'flex'

    document.body.classList.remove("boardgame")
    document.body.classList.add("winner")
}

function navigateFromWinnerToThanks() {
    sectionThanks.style.display = 'flex'
    sectionVictory.style.display = 'none'

    document.body.classList.remove("winner")
    document.body.classList.add("thanks")
}

function navigateFromBoardgameToQuestion() {
    sectionBoardgame.style.display = 'none'
    sectionQuestion.style.display = 'flex'

    document.body.classList.remove("background")
    document.body.classList.add(`question${numberQuestion}`)

    fingerPressingQuestion1.style.top = getOffset(btnOption1).top + distanceFingerTop + 'px';
    fingerPressingQuestion1.style.left = getOffset(btnOption1).left + distanceFingerLeft + 10 + 'px';

    fingerPressingQuestion2.style.top = getOffset(btnOption2).top + distanceFingerTop + 'px';
    fingerPressingQuestion2.style.left = getOffset(btnOption2).left + distanceFingerLeft + 10 + 'px';
}

function navigateFromQuestionToAnswer() {
    sectionAnswer.style.display = 'flex'
    sectionQuestion.style.display = 'none'

    fingerPressingAnswer.style.top = getOffset(btnNextFromToBoardgame).top + distanceFingerTop + 'px';
    fingerPressingAnswer.style.left = getOffset(btnNextFromToBoardgame).left + distanceFingerLeft + 'px';

    document.body.classList.remove(`question${numberQuestion}`) 
}

function navigateFromQuestionToBoardgame() {
    sectionQuestion.style.display = 'none'
    sectionBoardgame.style.display = 'flex'

    document.body.classList.remove(`question${numberQuestion}`)
    document.body.classList.add("boardgame")  

    fingerPressingBoardgame.style.top = getOffset(document.querySelector( `img#q${numberQuestion+1}.questionSlot.p${numberQuestion+1}` )).top + distanceFingerTop + 'px';
    fingerPressingBoardgame.style.left = getOffset(document.querySelector( `img#q${numberQuestion+1}.questionSlot.p${numberQuestion+1}` )).left + distanceFingerLeft + 'px';
}
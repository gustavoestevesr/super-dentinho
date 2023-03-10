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
}


function navigateFromAnyToMenu() {
    document.querySelector('#menu').style.display = "flex"
    document.body.classList.add("start");
}

function navigateFromStartToApresentation() {
    sectionMenu.style.display = 'none'
    sectionApresentation.style.display = 'flex'

    document.body.classList.remove("background")
    document.body.classList.add("apresentation")

    btnPlay.style.display = 'none'
    creativeCommon.style.display = 'none'
}

function navigateFromApresentationToCredits() {
    sectionApresentation.style.display = 'none'
    sectionCredits.style.display = 'flex'

    document.body.classList.remove("apresentation")
    document.body.classList.add("creditsVanessa")
}

function navigateFromApresentationToRules() {
    sectionApresentation.style.display = 'none'
    sectionRules.style.display = 'flex'

    document.body.classList.remove("background")
    document.body.classList.add("rules1")
}

function navigateFromApresentationToTeoricReference() {
    sectionApresentation.style.display = 'none'
    sectionTeoricReference.style.display = 'flex'

    document.body.classList.remove("apresentation")
    document.body.classList.add("teoricReference1")
}

function navigateFromTeoricReferenceToApresentation() {
    sectionTeoricReference.style.display = 'none'
    sectionApresentation.style.display = 'flex'

    document.body.classList.remove("teoricReference")
    document.body.classList.add("apresentation")
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

    sound1.volume = 1;
    sound2.volume = 1;
}

function navigateFromBoardgameToMenu() {
    sectionBoardgame.style.display = 'none'
    sectionApresentation.style.display = 'flex'

    document.body.classList.remove("boardgame")
    document.body.classList.add("apresentation")
}

function navigateFromRulesToApresentation() {
    sectionRules.style.display = 'none'
    sectionApresentation.style.display = 'flex'

    document.body.classList.remove("rules1")
    document.body.classList.remove("rules2")
    document.body.classList.add("apresentation")
}

function navigateFromCreditsToApresentation() {
    sectionCredits.style.display = 'none'
    sectionApresentation.style.display = 'flex'    

    document.body.classList.remove("creditsVanessa")
    document.body.classList.remove("creditsCarlos")
    document.body.classList.remove("creditsGustavo")
    document.body.classList.add("apresentation") 
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
}

function navigateFromQuestionToAnswer() {    
    sectionAnswer.style.display = 'flex'
    sectionQuestion.style.display = 'none'

    document.body.classList.remove(`question${numberQuestion}`) 
}

function navigateFromQuestionToBoardgame() {
    sectionQuestion.style.display = 'none'
    sectionBoardgame.style.display = 'flex'

    document.body.classList.remove(`question${numberQuestion}`)
    document.body.classList.add("boardgame")  
}
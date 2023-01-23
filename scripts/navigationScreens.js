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

    fingerPressingBoardgame.style.top = getOffset(questionSlot1).top + distanceFingerTop + 'px';
    fingerPressingBoardgame.style.left = getOffset(questionSlot1).left + distanceFingerLeft + 'px';
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
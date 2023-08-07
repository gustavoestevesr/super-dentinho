async function navigateFromAnyToOrientation() {
    sectionRotateScreen.style.display = "flex"
    document.body.classList.add(idioma === "pt-br" ? "rotatescreen" : "englishrotatescreen");    
    
    await delay(4000);

    if ( !portrait.matches ) { // portrait
        navigateFromOrientationToMenu()
    } 
}

async function navigateFromOrientationToMenu() {
    sectionMenu.style.display = "flex"
    sectionRotateScreen.style.display = "none"    

    document.body.classList.remove(idioma === "pt-br" ? "rotatescreen" : "englishrotatescreen");
    document.body.classList.add(idioma === "pt-br" ? "start" : "englishstart");   
}


function navigateFromAnyToMenu() {
    sectionMenu.style.display = "flex"    
    document.body.classList.add(idioma === "pt-br" ? "start" : "englishstart");   
}

function navigateFromStartToApresentation() {
    sectionMenu.style.display = 'none'
    sectionApresentation.style.display = 'flex'

    document.body.classList.remove(idioma === "pt-br" ? "start" : "englishstart")
    document.body.classList.add(idioma === "pt-br" ? "apresentation" : "englishapresentation")
}

function navigateFromApresentationToCredits() {
    sectionApresentation.style.display = 'none'
    sectionCredits.style.display = 'flex'

    document.body.classList.remove(idioma === "pt-br" ? "apresentation" : "englishapresentation")
    document.body.classList.add(idioma === "pt-br" ? "credits1" : "englishcredits1")
}

function navigateFromApresentationToRules() {
    sectionApresentation.style.display = 'none'
    sectionRules.style.display = 'flex'

    document.body.classList.remove(idioma === "pt-br" ? "apresentation" : "englishapresentation")
    document.body.classList.add(idioma === "pt-br" ? "rules1" : "englishrules1")
}

function navigateFromApresentationToTeoricReference() {
    sectionApresentation.style.display = 'none'
    sectionTeoricReference.style.display = 'flex'

    document.body.classList.remove(idioma === "pt-br" ? "apresentation" : "englishapresentation")
    document.body.classList.add(idioma === "pt-br" ? "teoricReference1" : "englishteoricReference1")
}

function navigateFromTeoricReferenceToApresentation() {
    sectionTeoricReference.style.display = 'none'
    sectionApresentation.style.display = 'flex'

    document.body.classList.remove(idioma === "pt-br" ? "teoricReference1" : "englishteoricReference1")
    document.body.classList.remove(idioma === "pt-br" ? "teoricReference2" : "englishteoricReference2")
    document.body.classList.remove(idioma === "pt-br" ? "teoricReference3" : "englishteoricReference3")
    document.body.classList.remove(idioma === "pt-br" ? "teoricReference4" : "englishteoricReference4")
    document.body.classList.remove(idioma === "pt-br" ? "teoricReference5" : "englishteoricReference5")
    document.body.classList.remove(idioma === "pt-br" ? "teoricReference6" : "englishteoricReference6")
    document.body.classList.add(idioma === "pt-br" ? "apresentation" : "englishapresentation")
}

function navigateFromApresentationToBoardgame() {
    sectionApresentation.style.display = 'none'
    sectionBoardgame.style.display = 'flex'

    fingerPressingBoardgame.style.top = getOffset(document.querySelector( `img#q${numberQuestion+1}.questionSlot.p${numberQuestion+1}` )).top + distanceFingerTop + 'px';
    fingerPressingBoardgame.style.left = getOffset(document.querySelector( `img#q${numberQuestion+1}.questionSlot.p${numberQuestion+1}` )).left + distanceFingerLeft + 'px';

    document.body.classList.remove(idioma === "pt-br" ? "apresentation" : "englishapresentation")
    document.body.classList.add(idioma === "pt-br" ? "boardgame" : "englishboardgame")    
}

async function navigateForTheNextQuestionInBoardgame() {
    sectionAnswer.style.display = 'none'
    sectionBoardgame.style.display = 'flex'

    fingerPressingBoardgame.style.top = getOffset(document.querySelector( `img#q${numberQuestion+1}.questionSlot.p${numberQuestion+1}` )).top + distanceFingerTop + 'px';
    fingerPressingBoardgame.style.left = getOffset(document.querySelector( `img#q${numberQuestion+1}.questionSlot.p${numberQuestion+1}` )).left + distanceFingerLeft + 'px';
    
    document.body.classList.remove(idioma === "pt-br" ? `correctanswer${numberQuestion-1}` : `englishcorrectanswer${numberQuestion-1}`)
    document.body.classList.remove(idioma === "pt-br" ? `wronganswer${numberQuestion}` : `englishwronganswer${numberQuestion}`)
    document.body.classList.add(idioma === "pt-br" ? "boardgame" : "englishboardgame")    

    /*sound1.volume = 1;
    sound2.volume = 1;*/
}

function navigateFromBoardgameToMenu() {
    sectionBoardgame.style.display = 'none'
    sectionApresentation.style.display = 'flex'

    document.body.classList.remove(idioma === "pt-br" ? "boardgame" : "englishboardgame")
    document.body.classList.add(idioma === "pt-br" ? "apresentation" : "englishapresentation")
}

function navigateFromRulesToApresentation() {
    sectionRules.style.display = 'none'
    sectionApresentation.style.display = 'flex'

    document.body.classList.remove(idioma === "pt-br" ? "rules1" : "englishrules1")
    document.body.classList.remove(idioma === "pt-br" ? "rules2" : "englishrules2")
    document.body.classList.add(idioma === "pt-br" ? "apresentation" : "englishapresentation")
}

function navigateFromCreditsToApresentation() {
    sectionCredits.style.display = 'none'
    sectionApresentation.style.display = 'flex'    

    document.body.classList.remove(idioma === "pt-br" ? "credits1" : "englishcredits1")
    document.body.classList.remove(idioma === "pt-br" ? "credits2" : "englishcredits2")
    document.body.classList.remove(idioma === "pt-br" ? "credits3" : "englishcredits3")
    document.body.classList.add(idioma === "pt-br" ? "apresentation" : "englishapresentation") 
}

function navigateFromBoardgameToWinner() {
    sectionBoardgame.style.display = 'none'
    sectionWinner.style.display = 'flex'

    btnBackFromBoardgameToMenu.style.display = 'none'
    document.body.classList.remove(idioma === "pt-br" ? "boardgame" : "englishboardgame")
    document.body.classList.add(idioma === "pt-br" ? "winner" : "englishwinner")
}

function navigateFromWinnerToThanks() {
    sectionWinner.style.display = 'none'
    sectionThanks.style.display = 'flex'

    document.body.classList.remove(idioma === "pt-br" ? "winner" : "englishwinner")
    document.body.classList.add(idioma === "pt-br" ? "thanks" : "englishthanks")
}

function navigateFromThanksToReferences() {
    sectionThanks.style.display = 'none'    
    sectionReferences.style.display = 'flex'

    document.body.classList.remove(idioma === "pt-br" ? "thanks" : "englishthanks")
    document.body.classList.add(idioma === "pt-br" ? "references1" : "englishreferences1")
}

function navigateFromReferencestoStart() {
    sectionReferences.style.display = 'none'
    sectionMenu.style.display = 'flex'    

    document.body.classList.remove(idioma === "pt-br" ? "references1" : "englishreferences1")
    document.body.classList.remove(idioma === "pt-br" ? "references2" : "englishreferences2")
    document.body.classList.remove(idioma === "pt-br" ? "references3" : "englishreferences3")
    document.body.classList.remove(idioma === "pt-br" ? "references4" : "englishreferences4")
    document.body.classList.add(idioma === "pt-br" ? "start" : "englishstart")
}

function navigateFromBoardgameToQuestion() {
    sectionBoardgame.style.display = 'none'
    sectionQuestion.style.display = 'flex'

    document.body.classList.remove(idioma === "pt-br" ? "boardgame" : "englishboardgame")
    document.body.classList.add(idioma === "pt-br" ? `question${numberQuestion}` : `englishquestion${numberQuestion}`)
}

function navigateFromQuestionToAnswer() {    
    sectionAnswer.style.display = 'flex'
    sectionQuestion.style.display = 'none'

    document.body.classList.remove(idioma === "pt-br" ? `question${numberQuestion}` : `englishquestion${numberQuestion}`) 
}

function navigateFromQuestionToBoardgame() {
    sectionQuestion.style.display = 'none'
    sectionBoardgame.style.display = 'flex'

    document.body.classList.remove(idioma === "pt-br" ? `question${numberQuestion}` : `englishquestion${numberQuestion}`)
    document.body.classList.add(idioma === "pt-br" ? "boardgame" : "englishboardgame")  
}
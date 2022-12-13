// Var to control the authors list 
let numberAuthor = 1
let numberOfPagesFromCredits = 3

function displayApresentationCredits(){
    updateBackgroundImageCredits()    
}

function updateBackgroundImageCredits(){
    if (numberAuthor === 1) {
        document.body.classList.remove('creditsGustavo')
        document.body.classList.add('creditsVanessa')
    } else if (numberAuthor == 2) {
        document.body.classList.remove('creditsVanessa')
        document.body.classList.add('creditsCarlos')
    } else if (numberAuthor == 3) {
        document.body.classList.remove('creditsCarlos')
        document.body.classList.add('creditsGustavo')
    }
}

function nextAuthor(){
    if ( numberAuthor < numberOfPagesFromCredits ) {
        numberAuthor++
    } else {
        numberAuthor = 1
    }
    displayApresentationCredits()
}

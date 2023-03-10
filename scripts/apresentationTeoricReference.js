// Var to control the teoric reference page 
let numberTeoricReference = 1
let numberOfPagesOfTeoricReference = 6

function displayApresentationTeoricReference(){
    updateBackgroundImageTeoricReference()    
}

function updateBackgroundImageTeoricReference(){
    if (numberTeoricReference === 1) {
        document.body.classList.remove('teoricReference2')
        document.body.classList.add('teoricReference1')
    } else if (numberTeoricReference == 2) {
        document.body.classList.remove('teoricReference2')
        document.body.classList.add('teoricReference3')
    } else if (numberTeoricReference == 3) {
        document.body.classList.remove('teoricReference3')
        document.body.classList.add('teoricReference4')
    } else if (numberTeoricReference == 4) {
        document.body.classList.remove('teoricReference4')
        document.body.classList.add('teoricReference5')
    } else if (numberTeoricReference == 5) {
        document.body.classList.remove('teoricReference5')
        document.body.classList.add('teoricReference6')
    } else if (numberTeoricReference == 6) {
        document.body.classList.remove('teoricReference6')
        document.body.classList.add('teoricReference1')
    } 
}

function nextTeoricReference(){
    if ( numberTeoricReference < numberOfPagesOfTeoricReference ) {     
        numberTeoricReference++
    } else {
        numberTeoricReference = 1
    }
    playNotificationSound();
    displayApresentationTeoricReference()
}

// Var to control the rules page 
let numberRule = 1
let numberOfPagesFromRules = 2

function displayApresentationRules(){
    updateBackgroundImageRules()    
}

function updateBackgroundImageRules(){
    if (numberRule === 1) {
        document.body.classList.remove('rules2')
        document.body.classList.add('rules1')
    } else if (numberRule == 2) {
        document.body.classList.remove('rules1')
        document.body.classList.add('rules2')
    } 
}

function nextRule(){
    if ( numberRule < numberOfPagesFromRules ) {     
        playNotificationSound()   
        numberRule++
    } else {
        numberRule = 1
    }
    displayApresentationRules()
}

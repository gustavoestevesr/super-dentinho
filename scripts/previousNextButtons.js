// Var to control the rules page
let indexRulePage = 1;
let maxNumberOfPagesRules = 2;

// Var to control the authors list
let indexCreditPage = 1;
let maxNumberOfPagesCredits = 3;

// Var to control the teoric reference page
let indexTeoricReferencePage = 1;
let maxNumberOfTeoricReference = 5;

function displayApresentationRules() {
    for (let index = 1; index <= maxNumberOfPagesRules; index++) {
        console.log(`rules${index}`)
        document.body.classList.remove(`rules${index}`)    
    }
    document.body.classList.add(`rules${indexRulePage}`)
}

function displayApresentationCredits() {
    for (let index = 1; index <= maxNumberOfPagesCredits; index++) {
        console.log(`credits${index}`)
        document.body.classList.remove(`credits${index}`)    
    }
    document.body.classList.add(`credits${indexCreditPage}`)
}

function displayApresentationTeoricReference() {
    for (let index = 1; index <= maxNumberOfTeoricReference; index++) {
        console.log(`teoricReference${index}`)
        document.body.classList.remove(`teoricReference${index}`)    
    }
    document.body.classList.add(`teoricReference${indexTeoricReferencePage}`)
}

function previous(idButton) {
  if (idButton === "btnPreviousRule") {
    (indexRulePage < maxNumberOfPagesRules) ? indexRulePage++ : indexRulePage = 1;
    displayApresentationRules();
  } else if (idButton === "btnPreviousCredit") {
    (indexCreditPage < maxNumberOfPagesCredits) ? indexCreditPage++ : indexCreditPage = 1;
    displayApresentationCredits();
  } else if (idButton === "btnPreviousTeoricReference") {
    (indexTeoricReferencePage < maxNumberOfTeoricReference) ? indexTeoricReferencePage++ : indexTeoricReferencePage = 1;
    displayApresentationTeoricReference();
  }
  playNotificationSound();
}

function next(idButton) {
  if (idButton === "btnNextRule") {
    (indexRulePage > 1) ? indexRulePage-- : indexRulePage = maxNumberOfPagesRules;
    displayApresentationRules();
  } else if (idButton === "btnNextCredit") {
    (indexCreditPage > 1) ? indexCreditPage-- : indexCreditPage = maxNumberOfPagesCredits;    
    displayApresentationCredits();
  } else if (idButton === "btnNextTeoricReference") {
    (indexTeoricReferencePage > 1) ? indexTeoricReferencePage-- : indexTeoricReferencePage = maxNumberOfTeoricReference;
    displayApresentationTeoricReference();
  }
  playNotificationSound();
}

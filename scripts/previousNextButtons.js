// Var to control the rules page
let indexRulePage = 1;
let maxNumberOfPagesRules = 2;

// Var to control the authors list
let indexCreditPage = 1;
let maxNumberOfPagesCredits = 3;

// Var to control the teoric reference page
let indexTeoricReferencePage = 1;
let maxNumberOfTeoricReference = 5;

// Var to control the references page
let indexReferencesPage = 1;
let maxNumberOfReferences = 4;

function displayApresentationRules() {
    for (let index = 1; index <= maxNumberOfPagesRules; index++) {
        document.body.classList.remove(`rules${index}`)    
    }
    document.body.classList.add(`rules${indexRulePage}`)
}

function displayApresentationCredits() {
    for (let index = 1; index <= maxNumberOfPagesCredits; index++) {
        document.body.classList.remove(`credits${index}`)    
    }
    document.body.classList.add(`credits${indexCreditPage}`)
}

function displayApresentationTeoricReference() {
    for (let index = 1; index <= maxNumberOfTeoricReference; index++) {
        document.body.classList.remove(`teoricReference${index}`)    
    }
    document.body.classList.add(`teoricReference${indexTeoricReferencePage}`)
}

function displayApresentationReferences() {
  for (let index = 1; index <= maxNumberOfReferences; index++) {
      document.body.classList.remove(`references${index}`)    
  }
  document.body.classList.add(`references${indexReferencesPage}`)
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
  } else if (idButton === "btnPreviousReferences") {
    (indexReferencesPage < maxNumberOfReferences) ? indexReferencesPage++ : indexReferencesPage = 1;
    displayApresentationReferences();
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
  } else if (idButton === "btnNextReferences") {
    (indexReferencesPage > 1) ? indexReferencesPage-- : indexReferencesPage = maxNumberOfReferences;
    displayApresentationReferences();
  }
  playNotificationSound();
}

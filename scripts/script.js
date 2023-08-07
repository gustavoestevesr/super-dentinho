// SCREENS
let sectionMenu = document.querySelector("#menu");
let sectionCredits = document.querySelector("#credits");
let sectionBoardgame = document.querySelector("#boardgame");
let sectionQuestion = document.querySelector("#question");
let sectionAnswer = document.querySelector("#answer");
let sectionApresentation = document.querySelector("#apresentation");
let sectionRules = document.querySelector("#rules");
let sectionWinner = document.querySelector("#winner");
let sectionThanks = document.querySelector("#thanks");
let sectionRotateScreen = document.querySelector("#rotateScreen");
let sectionTeoricReference = document.querySelector("#teoricReference");
let sectionReferences = document.querySelector("#references");

// BTNs Screens
let btnPlay = document.querySelector("img#btnPlay.button");
let btnCredits = document.querySelector("img#btnCredits.button");
let btnContinue = document.querySelector("img#btnContinue.button");
let btnRules = document.querySelector("img#btnRules.button");
let btnTeoric = document.querySelector("img#btnTeoric.button");

// BTNs Back
let btnBackFromRulesToApresentation = document.querySelector(
  "#btnBackFromRulesToApresentation"
);
let btnBackFromCreditsToApresentation = document.querySelector(
  "#btnBackFromCreditsToApresentation"
);
let btnBackFromQuestionToBoardgame = document.querySelector(
  "#btnBackFromQuestionToBoardgame"
);
let btnNextFromToBoardgame = document.querySelector("#btnNextFromToBoardgame");
let btnBackFromBoardgameToMenu = document.querySelector(
  "#btnBackFromBoardgameToMenu"
);
let btnBackFromTeoricReferenceToApresentation = document.querySelector(
  "#btnBackFromTeoricReferenceToApresentation"
);

// BTNs Next
let btnNextCredit = document.querySelector("img#btnNextCredit.button");
let btnNextRule = document.querySelector("img#btnNextRule.button");
let btnFromWinnerToThanks = document.querySelector(
  "img#btnFromWinnerToThanks.button"
);
let btnFromThanksToReferences = document.querySelector(
  "img#btnFromThanksToReferences.button"
);
let btnFromReferencesToStart = document.querySelector(
  "img#btnFromReferencesToStart.button"
);

// BTNs Options
let btnOption1 = document.querySelector("img#optionButton1.optionButton");
let btnOption2 = document.querySelector("img#optionButton2.optionButton");

// License Creative Commons
let creativeCommon = document.querySelector(".creative-common");

//CHARACTER
let superDentinhoBoardGame = document.querySelector("#superDentinhoBoardGame");

//SLOT OF QUESTIONS
let questionSlot0 = document.querySelector("img#q0.questionSlot");
let questionSlot1 = document.querySelector("img#q1.questionSlot");
let questionSlot2 = document.querySelector("img#q2.questionSlot");
let questionSlot3 = document.querySelector("img#q3.questionSlot");
let questionSlot4 = document.querySelector("img#q4.questionSlot");
let questionSlot5 = document.querySelector("img#q5.questionSlot");
let questionSlot6 = document.querySelector("img#q6.questionSlot");
let questionSlot7 = document.querySelector("img#q7.questionSlot");
let questionSlot8 = document.querySelector("img#q8.questionSlot");
let questionSlot9 = document.querySelector("img#q9.questionSlot");
let questionSlot10 = document.querySelector("img#q10.questionSlot");
let questionSlot11 = document.querySelector("img#q11.questionSlot");
let questionSlot12 = document.querySelector("img#q12.questionSlot");
let questionSlot13 = document.querySelector("img#q13.questionSlot");
let questionSlot14 = document.querySelector("img#q14.questionSlot");
let questionSlot15 = document.querySelector("img#q15.questionSlot");
let questionSlot16 = document.querySelector("img#q16.questionSlot");
let questionSlot17 = document.querySelector("img#q17.questionSlot");
let questionSlot18 = document.querySelector("img#q18.questionSlot");
let questionSlot19 = document.querySelector("img#q19.questionSlot");
let questionSlot20 = document.querySelector("img#q20.questionSlot");
let questionSlot21 = document.querySelector("img#q21.questionSlot");

// VARS
let numberQuestion = 0;

// FINGERS
let fingerPressingBoardgame = document.querySelector(
  "img#fingerPressingBoardgame.fingerPressing"
);

// INITIALIZE
sectionMenu.style.display = "none";
sectionCredits.style.display = "none";
sectionBoardgame.style.display = "none";
sectionQuestion.style.display = "none";
sectionAnswer.style.display = "none";
sectionApresentation.style.display = "none";
sectionRules.style.display = "none";
sectionWinner.style.display = "none";
sectionRotateScreen.style.display = "none";
sectionTeoricReference.style.display = "none";
sectionThanks.style.display = "none";
sectionReferences.style.display = "none";

// DEFINE THE OTHERS SLOT QUESTION POSITIONS
questionSlot1.classList.add("p1");
questionSlot2.classList.add("p2");
questionSlot3.classList.add("p3");
questionSlot4.classList.add("p4");
questionSlot5.classList.add("p5");
questionSlot6.classList.add("p6");
questionSlot7.classList.add("p7");
questionSlot8.classList.add("p8");
questionSlot9.classList.add("p9");
questionSlot10.classList.add("p10");
questionSlot11.classList.add("p11");
questionSlot12.classList.add("p12");
questionSlot13.classList.add("p13");
questionSlot14.classList.add("p14");
questionSlot15.classList.add("p15");
questionSlot16.classList.add("p16");
questionSlot17.classList.add("p17");
questionSlot18.classList.add("p18");
questionSlot19.classList.add("p19");
questionSlot20.classList.add("p20");
questionSlot21.classList.add("p21");

// NAVIGATE FROM START TO APRESENTATION
btnPlay.addEventListener("click", function () {
  playNotificationSound();
  navigateFromStartToApresentation();
});

// NAVIGATE FROM APRESENTATION TO CREDITS
btnCredits.addEventListener("click", function () {
  playNotificationSound();
  navigateFromApresentationToCredits();
});

// NAVIGATE FROM APRESENTATION TO RULES
btnRules.addEventListener("click", function () {
  playNotificationSound();
  navigateFromApresentationToRules();
});

// NAVIGATE FROM APRESENTATION TO RULES
btnTeoric.addEventListener("click", function () {
  playNotificationSound();
  navigateFromApresentationToTeoricReference();
});

// NAVIGATE FROM APRESENTATION TO BOARDGAME
btnContinue.addEventListener("click", function () {
  playNotificationSound();
  navigateFromApresentationToBoardgame();
  playBackgroundSound1();
});

// NAVIGATE FROM ACTUAL QUESTION TO THE NEXT QUESTION
btnNextFromToBoardgame.addEventListener("click", function () {
  playNotificationSound();
  navigateForTheNextQuestionInBoardgame();
});

// NAVIGATE FROM WINNER TO THANKS
btnFromWinnerToThanks.addEventListener("click", function () {
  playNotificationSound();
  navigateFromWinnerToThanks();
});

// NAVIGATE FROM THANKS TO REFERENCES
btnFromThanksToReferences.addEventListener("click", function () {
  playNotificationSound();
  navigateFromThanksToReferences();
});

// NAVIGATE FROM BOARDGAME TO MENU
btnBackFromBoardgameToMenu.addEventListener("click", function () {
  playNotificationSound();
  navigateFromBoardgameToMenu();
});

// NAVIGATE FROM RULES TO APRESENTATION
btnBackFromRulesToApresentation.addEventListener("click", function () {
  playNotificationSound();
  navigateFromRulesToApresentation();
});

// NAVIGATE FROM CREDITS TO APRESENTATION
btnBackFromCreditsToApresentation.addEventListener("click", function () {
  playNotificationSound();
  navigateFromCreditsToApresentation();
});

btnBackFromTeoricReferenceToApresentation.addEventListener(
  "click",
  function () {
    playNotificationSound();
    navigateFromTeoricReferenceToApresentation();
  }
);

btnBackFromQuestionToBoardgame.addEventListener("click", function () {
  updateDentinhoPosition(numberQuestion);
  playNotificationSound();
  navigateFromQuestionToBoardgame();
});

btnFromReferencesToStart.addEventListener("click", function () {
  playNotificationSound();
  navigateFromReferencestoStart();
});

// SHOW VICTORY
async function victory() {
  fingerPressingBoardgame.style.display = "none";
  start();
  stop();

  await delay(1000);

  navigateFromBoardgameToWinner();
}

function changeBackgroundSounds() {
  const sound1 = document.getElementById("audioBd");
  const sound2 = document.getElementById("audioCc");
  if (sound1.currentTime === sound1.duration && !sound1.pause) {
    playBackgroundSound2();
  } else if (sound2.currentTime === sound2.duration && !sound2.pause) {
    playBackgroundSound1();
  }
}

const interval = setInterval(function () {
  changeBackgroundSounds();
}, 5000);

// BACKGROUND SOUND
function playBackgroundSound1() {
  const sound1 = document.getElementById("audioBd");
  sound1.currentTime = 0;
  sound1.loop = false;
  sound1.play();
}

// NOTIFICATION SOUND
function playBackgroundSound2() {
  const sound2 = document.getElementById("audioCc");
  sound2.currentTime = 0;
  sound2.loop = false;
  sound2.play();
}

// NOTIFICATION SOUND
function playNotificationSound() {
  const sound = document.getElementById("audioGt");
  sound.volume = 0.2;
  sound.currentTime = 0;
  sound.loop = false;
  sound.play();
}

// CORRECT SOUND
function playCorrectSound() {
  const sound = document.getElementById("audioCt");
  sound.currentTime = 0;
  sound.loop = false;
  sound.play();
}

// WRONG SOUND
function playWrongSound() {
  const sound = document.getElementById("audioWg");
  sound.currentTime = 0;
  sound.loop = false;
  sound.play();
}

function updateDentinhoPosition(numberQuestion) {
  switch (numberQuestion) {
    case -1:
      changeDentinhoPosition(questionSlot0);
      break;

    case 0:
      changeDentinhoPosition(questionSlot1);
      break;

    case 1:
      changeDentinhoPosition(questionSlot2);
      break;

    case 2:
      changeDentinhoPosition(questionSlot3);
      break;

    case 3:
      changeDentinhoPosition(questionSlot4);
      break;

    case 4:
      changeDentinhoPosition(questionSlot5);
      updateDentinhoImageSlot5();
      break;

    case 5:
      changeDentinhoPosition(questionSlot6);
      break;

    case 6:
      changeDentinhoPosition(questionSlot7);
      break;

    case 7:
      changeDentinhoPosition(questionSlot8);
      break;

    case 8:
      changeDentinhoPosition(questionSlot9);
      break;

    case 9:
      changeDentinhoPosition(questionSlot10);
      updateDentinhoImageSlot10();
      break;

    case 10:
      changeDentinhoPosition(questionSlot11);
      break;

    case 11:
      changeDentinhoPosition(questionSlot12);
      break;

    case 12:
      changeDentinhoPosition(questionSlot13);
      break;

    case 13:
      changeDentinhoPosition(questionSlot14);
      break;

    case 14:
      changeDentinhoPosition(questionSlot15);
      updateDentinhoImageSlot15();
      break;

    case 15:
      changeDentinhoPosition(questionSlot16);
      break;

    case 16:
      changeDentinhoPosition(questionSlot17);
      break;

    case 17:
      changeDentinhoPosition(questionSlot18);
      break;

    case 18:
      changeDentinhoPosition(questionSlot19);
      break;

    case 19:
      changeDentinhoPosition(questionSlot20);
      updateDentinhoImageSlot20();
      updateDentinhoSize();
      break;

    case 20:
      changeDentinhoPosition(questionSlot21);
      break;

    default:
      break;
  }
}

async function goToQuestion(slotSelectedFromUSer) {
  if (numberQuestion === questions.length) {
    await delay(500);
    victory();
    return;
  } else if (slotSelectedFromUSer === numberQuestion) {
    updateDentinhoPosition(numberQuestion);
    superDentinhoBoardGame.style.transition = "all 0.5s";
    await delay(500);
    navigateFromBoardgameToQuestion();
    superDentinhoBoardGame.style.transition = "all 0s";
  }
}

function updateDentinhoImageSlot5() {
  superDentinhoBoardGame.src = "./images/characters/SAD TOOTH.svg";
}

function updateDentinhoImageSlot10() {
  superDentinhoBoardGame.src = "./images/characters/HAPPY TOOTH.svg";
}

function updateDentinhoImageSlot15() {
  superDentinhoBoardGame.src = "./images/characters/SUPER TOOTH.svg";
}

function updateDentinhoImageSlot20() {
  superDentinhoBoardGame.src = "./images/characters/SUPER HAPPY TOOTH.gif";
}

function updateDentinhoSize() {
  superDentinhoBoardGame.style.width = "25vw";
  superDentinhoBoardGame.style.height = "25vw";
}

function showTip() {
  const sound1 = document.getElementById("audioCt");
  const sound2 = document.getElementById("audioWg");

  if (questions[numberQuestion].tip) {
    document.body.querySelector("#btnModal").click();
    sound1.volume = 0.1;
    sound2.volume = 0.1;

    document.getElementById("modal-label").innerHTML =
      idioma === "pt-br" ? "Tela de Dica" : "Hint Screen";

    document.getElementById("modal-body-content").innerHTML =
      questions[numberQuestion].tip;
    document.getElementById("modal-body-content-reference").innerHTML =
      questions[numberQuestion].reference;

    document.getElementById("modal-body-content2").innerHTML =
      questions[numberQuestion].tip2;
    document.getElementById("modal-body-content2-reference").innerHTML =
      questions[numberQuestion].reference2;

    if (numberQuestion === 1) {
      document.getElementById("btnModalToggle2").classList.remove("d-none");
    } else {
      document.getElementById("btnModalToggle2").classList.add("d-none");
    }
  }
}

function verifyQuestion(userChoice) {
  let answerUser =
    userChoice === "optionButton1"
      ? questions[numberQuestion].choices[0]
      : questions[numberQuestion].choices[1];

  let statusAnswerUser =
    questions[numberQuestion].answer === answerUser ? true : false;

  feedbackAnswer(statusAnswerUser);
}

function feedbackAnswer(statusAnswerUser) {
  navigateFromQuestionToAnswer();

  if (statusAnswerUser) {
    // updateDentinhoPosition(numberQuestion);
    // numberQuestion++;
    updateDentinhoPosition(numberQuestion);

    document.body.classList.add(
      idioma === "pt-br"
        ? `correctanswer${numberQuestion}`
        : `englishcorrectanswer${numberQuestion}`
    );
    showTip();
    playCorrectSound();
    start();
    stop();

    numberQuestion++;
  } else {
    // updateDentinhoPosition(numberQuestion - 1);
    updateDentinhoPosition(numberQuestion);

    document.body.classList.add(
      idioma === "pt-br"
        ? `wronganswer${numberQuestion}`
        : `englishwronganswer${numberQuestion}`
    );
    playWrongSound();
  }
}

function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

function changeDentinhoPosition(slotNumber) {
  document.addEventListener("click", function handleClick(event) {
    superDentinhoBoardGame.style.top = getOffset(slotNumber).top + "px";
    superDentinhoBoardGame.style.left = getOffset(slotNumber).left + "px";
  });
}

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}

// IDIOMA
let idioma = "pt-br";

document.getElementById("targetFlagBrasil").addEventListener("click", () => {
  playNotificationSound();
  idioma = "pt-br";
  document.body.classList.remove("englishstart");
  document.body.classList.add("start");
  document.getElementById("creative-common-1").innerHTML =
    "Esta obra está licenciada com uma Licença";
  document.getElementById("creative-common-2").innerHTML =
    "Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional";
  document.getElementById("btnModalToggle2").innerHTML = "Próximo";
});

document.getElementById("targetFlagUSA").addEventListener("click", () => {
  playNotificationSound();
  idioma = "en-usa";
  document.body.classList.remove("start");
  document.body.classList.add("englishstart");
  document.getElementById("creative-common-1").innerHTML =
    "This work is licensed under a License";
  document.getElementById("creative-common-2").innerHTML =
    "Attribution-NonCommercial-ShareAlike 4.0 International";
  document.getElementById("btnModalToggle2").innerHTML = "Next";
});

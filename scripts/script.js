// SCREENS
let sectionMenu = document.querySelector('#menu')
let sectionCredits = document.querySelector('#credits')
let sectionBoardgame = document.querySelector('#boardgame')
let sectionQuestion = document.querySelector('#question')
let sectionAnswer = document.querySelector('#answer')
let sectionApresentation = document.querySelector('#apresentation')
let sectionRules = document.querySelector('#rules')

// BTNs
let btnPlay = document.querySelector('img#btnPlay')
let btnCredits = document.querySelector('#btnCredits')
let btnExit = document.querySelector('#btnExit')
let btnContinue = document.querySelector('#btnContinue')
let btnRules = document.querySelector('#btnRules')
let btnBackFromRulesToApresentation = document.querySelector('#btnBackFromRulesToApresentation')
let btnBackFromCreditsToApresentation = document.querySelector('#btnBackFromCreditsToApresentation')
let btnBackFromQuestionToBoardgame = document.querySelector('#btnBackFromQuestionToBoardgame')
let btnNextFromToBoardgame =  document.querySelector('#btnNextFromToBoardgame')

//CHARACTER
let superDentinho = document.querySelector('#superDentinho')

//SLOT OF QUESTIONS
let questionSlot1 = document.querySelector('img#q1')
let questionSlot2 = document.querySelector('img#q2')
let questionSlot3 = document.querySelector('img#q3')
let questionSlot4 = document.querySelector('img#q4')
let questionSlot5 = document.querySelector('img#q5')
let questionSlot6 = document.querySelector('img#q6')
let questionSlot7 = document.querySelector('img#q7')
let questionSlot8 = document.querySelector('img#q8')
let questionSlot9 = document.querySelector('img#q9')
let questionSlot10 = document.querySelector('img#q10')

let questionSlot11 = document.querySelector('img#q11')
let questionSlot12 = document.querySelector('img#q12')
let questionSlot13 = document.querySelector('img#q13')
let questionSlot14 = document.querySelector('img#q14')
let questionSlot15 = document.querySelector('img#q15')
let questionSlot16 = document.querySelector('img#q16')
let questionSlot17 = document.querySelector('img#q17')
let questionSlot18 = document.querySelector('img#q18')
let questionSlot19 = document.querySelector('img#q19')
let questionSlot20 = document.querySelector('img#q20')

// VARS
let numberQuestion = 0

// INITIALIZE
sectionMenu.style.display = 'flex'
sectionCredits.style.display = 'none'
sectionBoardgame.style.display = 'none'
sectionQuestion.style.display = 'none'
sectionAnswer.style.display = 'none'
sectionApresentation.style.display = 'none'
sectionRules.style.display = 'none'

// DEFINE THE FIRST SCREEN
document.body.classList.add("start");

// // DEFINE THE FIRST POSITION
// superDentinho.classList.add("p1")

// DEFINE THE FIRST ACTIVE SLOT QUESTION
questionSlot1.classList.add("questionSlotActive")
// DEFINE THE OTHERS SLOT QUESTION POSITIONS
questionSlot1.classList.add("p1")
questionSlot2.classList.add("p2")
questionSlot3.classList.add("p3")
questionSlot4.classList.add("p4")
questionSlot5.classList.add("p5")
questionSlot6.classList.add("p6")
questionSlot7.classList.add("p7")
questionSlot8.classList.add("p8")
questionSlot9.classList.add("p9")
questionSlot10.classList.add("p10")

questionSlot11.classList.add("p11")
questionSlot12.classList.add("p12")
questionSlot13.classList.add("p13")
questionSlot14.classList.add("p14")
questionSlot15.classList.add("p15")
questionSlot16.classList.add("p16")
questionSlot17.classList.add("p17")
questionSlot18.classList.add("p18")
questionSlot19.classList.add("p19")
questionSlot20.classList.add("p20")

// NAVIGATE FROM START PLAY TO APRESENTATION
btnPlay.addEventListener("click", function () {
    sectionMenu.style.display = 'none'
    sectionApresentation.style.display = 'flex'

    document.body.classList.remove("background")
    document.body.classList.add("apresentation")

    btnPlay.style.display = 'none'

    displayApresentationGame()

    playBackgroundSound()
});

// NAVIGATE FROM APRESENTATION TO CREDITS
btnCredits.addEventListener("click", function () {
    sectionApresentation.style.display = 'none'
    sectionCredits.style.display = 'flex'

    document.body.classList.remove("apresentation")
    document.body.classList.add("credits")

    displayApresentationCredits()
});

// NAVIGATE FROM APRESENTATION TO RULES
btnRules.addEventListener("click", function () {
    sectionApresentation.style.display = 'none'
    sectionRules.style.display = 'flex'

    document.body.classList.remove("background")
    document.body.classList.add("rules")

    displayApresentationRules( true )
});

// NAVIGATE FROM APRESENTATION TO CREDITS
btnContinue.addEventListener("click", function () {
    sectionApresentation.style.display = 'none'
    sectionBoardgame.style.display = 'flex'

    document.body.classList.remove("background")
    document.body.classList.add("credits")
});

btnNextFromToBoardgame.addEventListener("click", function () {
    sectionAnswer.style.display = 'none'
    sectionBoardgame.style.display = 'flex'

    document.body.classList.remove("answer")
    document.body.classList.add("boardgame")
});

btnBackFromRulesToApresentation.addEventListener("click", function () {
    sectionRules.style.display = 'none'
    sectionApresentation.style.display = 'flex'

    document.body.classList.remove("rules")
    document.body.classList.add("apresentation")
});

btnBackFromCreditsToApresentation.addEventListener("click", function () {
    sectionCredits.style.display = 'none'
    sectionApresentation.style.display = 'flex'

    document.body.classList.remove("credits")
    document.body.classList.add("apresentation")
});

btnBackFromQuestionToBoardgame.addEventListener("click", function () {
    sectionQuestion.style.display = 'none'
    sectionBoardgame.style.display = 'flex'

    document.body.classList.remove("question")
    document.body.classList.add("boardgame")
});

// EXIT THE GAME
// btnExit.addEventListener("click", function() {
//     window.close()
// });

// NAVIGATE TO THE QUESTIONS
// questionSlot1.addEventListener("click", function () {

//     // change background
//     sectionBoardgame.style.display = 'none'
//     sectionQuestion.style.display = 'flex'

//     document.body.classList.remove("background")
//     document.body.classList.add("question")

//     prepareQuestion()
// });


// BACKGROUND SOUND
function playBackgroundSound() {
    let sound = document.getElementById("audioBd")
    sound.currentTime = 0
    sound.loop = true
    sound.play()
}

// CORRECT SOUND
function playCorrectSound() {
    let sound = document.getElementById("audioCt")
    sound.currentTime = 0
    sound.loop = false
    sound.play()
}

// WRONG SOUND
function playWrongSound() {
    let sound = document.getElementById("audioWg")
    sound.currentTime = 0
    sound.loop = false
    sound.play()
}

/*  QUESTIONS  */

var questions = [
    {
        title: "Quantas vezes devemos escovar nossos dentinhos ao dia?",
        choices: ["Sempre após nos alimentar.", "Parte da manhã e a noite."],
        answer: "Sempre após nos alimentar.",
        correctAnswerExplanation: "Obaaa!!! Você acertou, todas as vezes que nos alimentamos precisamos limpar nossos dentinhos.",
        wrongAnswerExplanation: "Resposta incorreta sobre balãozinho, Hum...:( Você errou, todas as vezes que nos alimentamos precisamos limpar nossos dentinhos "
    },
    {
        title: "Qual a forma correta de escovar seus dentinhos, na sua idade?",
        choices: ["Técnica da bolinha, escovinha não inclinada.", "Técnica da vassourinha, escovinha inclinada."],
        answer: "Técnica da vassourinha, escovinha inclinada.",
        correctAnswerExplanation: "Isso aí!!! Você acertou devemos inclinar a escova 45° e escovar os dentes em todas suas faces, lembrando que acima (na oclusal) dos dentinhos faremos movimento de vai e vem.",
        wrongAnswerExplanation: "Incorreta ,que pena você errou! A técnica da bolinha e para crianças menores de 8 anos ou aqueles que tem dificuldade motora, na hora da escovação."
    },
    {
        title: "Como deve ser a escovinha dental?",
        choices: ["Dura, e com a cabeça da escova pequena.", "Macia, e com a cabeça da escova pequena."],
        answer: "Macia, e com a cabeça da escova pequena.",
        correctAnswerExplanation: "Parabéns !!Isso mesmo você está indo muito bem, a escova dental deve sempre ser pequena e macia para conseguir limpar todos os cantinhos do dente, sem machucar.",
        wrongAnswerExplanation: "Incorreta !A escovinha sempre deve ser pequena e macia  para conseguir limpar todos os cantinhos do dente ,sem machucar."
    },
    {
        title: "A pasta de dental e uma grande amiga da escovinha, ela precisa de flúor para manter o dentinho longe das cáries?",
        choices: ["sim, precisa.", "não, precisa."],
        answer: "sim, precisa.",
        correctAnswerExplanation: "Correta, todas as pastas precisam de flúor para combater o bichinho da cárie,e manter o esmalte forte .( bichinho cárie, flúor caindo no dentinho)gif",
        wrongAnswerExplanation: "Incorreta, sem flúor as pastas não irão ajudar os dentinhos contras as cáries. (dentinho lutando contra a cárie)"
    },
    {
        title: "E a quantidade de pasta para colocar para idade de vocês?",
        choices: ["a) a quantidade vai de um lado ao outro da escova (foto mandada da pasta em toda a escova)", "b) a quantidade e relativa a um grão de ervilha"],
        answer: "b) a quantidade e relativa a um grão de ervilha",
        correctAnswerExplanation: "Acertou!!! a pasta deve ser colocada na idade de vocês, do mesmo tamanho de um carocinho de ver ilha!! ( foto de uma ervilha)",
        wrongAnswerExplanation: "Errou !!! a pasta deve ser colocada na idade de vocês ,do mesmo tamanho de um carocinho de ver ilha!! ( foto de uma ervilha)"
    },
    {
        title: "Você precisa ir no dentista quando...",
        choices: ["a) Meu dente doer apenas.", "b) De 6 em 6 meses, mesmo se não estiver sentindo nenhuma dor."],
        answer: "b) De 6 em 6 meses, mesmo se não estiver sentindo nenhuma dor.",
        correctAnswerExplanation: "Acertou!!!! você precisa ir no dentista mesmo se seu dentinho não estiver doendo ,para fazer a manutenção da sua saúde da boca.",
        wrongAnswerExplanation: "Errada, você precisa ir no dentista mesmo se seu dentinho não estiver doendo, para fazer a manutenção da sua saúde da bucal."
    },
    {
        title: "A massinha branca que fica sobre os dentes, precisam ser removidas com a escovação?",
        choices: ["a) sim, caso não seja removida ela poderá causar a cárie ou doença na gengiva", "b) não ,essa massinha é a pasta de dente que ficou no dente.(foto de varias bichinhos no dente, escovando eles somem)"],
        answer: "a) sim, caso não seja removida ela poderá causar a cárie ou doença na gengiva",
        correctAnswerExplanation: "correta! Essa massinha e devido a não escovação correta é ela que tem várias bactérias e pode causar a cárie e gengivite (doença que causa inflamação, vermelhão, dor e sangramento na gengiva)",
        wrongAnswerExplanation: "errada! Não é pasta não ! ! Essa massinha e devido a não escovação correta é ela que tem várias bactérias e pode causar a cárie ou gengivite (doença que causa inflamação, vermelhão, dor e sangramento na gengiva)"
    },
    {
        title: "O fio dental é usado antes ou depois da escovação?",
        choices: ["a) depois da escovação", "b) antes da escovação"],
        answer: "b) antes da escovação",
        correctAnswerExplanation: "Isso aí!! Muito bem sempre antes da escovação passamos o fio dental",
        wrongAnswerExplanation: "errou! ( carinha de triste) sempre antes da escovação passamos o fio dental"
    },
    {
        title: "Alimentos cariogênicos são aqueles que causam cárie. Eles são:",
        choices: ["a) balas, chocolates, refrigerantes", "b) frutas, legumes e verduras."],
        answer: "a) balas, chocolates, refrigerantes",
        correctAnswerExplanation: "Isso, as balas ,chocolates são ricos em açúcares por isso causam cárie",
        wrongAnswerExplanation: "Esses alimentos não são  carigênicos, ou seja eles não causam a cárie, e ainda contribuem para saúde de uma forma geral prevenindo diabetes ,obesidade e hipertensão"
    },
    {
        title: "Os alimentos autolimpantes são aqueles, que limpam os dentes eles podem ser:",
        choices: ["a) geleias e chicletes", "b) maças e cenouras"],
        answer: "b) maças e cenouras",
        correctAnswerExplanation: "sim, eles limpam as faces dos dentes ,contribuindo para uma gengiva saudável",
        wrongAnswerExplanation: "não, pelo contrário esses alimentos agarram nos dentes"
    },
    {
        title: "A língua precisa também ser escovada em todas as escovações do dente?",
        choices: ["a) uma vez ao dia é o suficiente", "b) sim, todas as escovações precisamos escovar a língua(língua sendo limpa)"],
        answer: "b) sim, todas as escovações precisamos escovar a língua(língua sendo limpa)",
        correctAnswerExplanation: "sim!!!! A língua assim como os dentes ,precisa de cuidados ,todas as vezes que escovamos os dentes ,precisamos escovar a língua também .",
        wrongAnswerExplanation: "errada! A língua assim como os dentes, precisa de cuidados ,todas as vezes que escovamos os dentes ,precisamos escovar a língua também"
    },
    {
        title: "Undefined does NOT mean that _______.",
        choices: ["the variable in the code doesn't exist", "the variable is not assigned to a value", "the variable is assigned no value", "the property doesn't exist"],
        answer: "the variable is assigned no value"
    }
];

function changeActiveSlotQuestion( numberQuestion ) {
    switch (numberQuestion) {
        case 0:
            questionSlot1.classList.remove("questionSlotActive")
            questionSlot2.classList.add("questionSlotActive")
            break;

        case 1:
            questionSlot2.classList.remove("questionSlotActive")
            questionSlot3.classList.add("questionSlotActive")
            break;

        case 2:
            questionSlot3.classList.remove("questionSlotActive")
            questionSlot4.classList.add("questionSlotActive")
            break;

        case 3:
            questionSlot4.classList.remove("questionSlotActive")
            questionSlot5.classList.add("questionSlotActive")
            break;

        case 4:
            questionSlot4.classList.remove("questionSlotActive")
            questionSlot5.classList.add("questionSlotActive")
            break;

        case 5:
            questionSlot4.classList.remove("questionSlotActive")
            questionSlot5.classList.add("questionSlotActive")
            break;

        case 6:
            questionSlot4.classList.remove("questionSlotActive")
            questionSlot5.classList.add("questionSlotActive")
            break;

        case 7:
            questionSlot6.classList.remove("questionSlotActive")
            questionSlot7.classList.add("questionSlotActive")
            break;

        case 8:
            questionSlot7.classList.remove("questionSlotActive")
            questionSlot8.classList.add("questionSlotActive")
            break;

        case 9:
            questionSlot8.classList.remove("questionSlotActive")
            questionSlot9.classList.add("questionSlotActive")
            break;

        case 10:
            questionSlot9.classList.remove("questionSlotActive")
            questionSlot10.classList.add("questionSlotActive")
            break;

        default:
            break;
    }
}

function prepareQuestion() {
    document.querySelector("p#numberQuestion.apresentationText").innerHTML = `${numberQuestion+1}° Questão`
    document.querySelector("p#question.apresentationText").innerHTML = `${questions[numberQuestion].title}`
    document.querySelector("p#option1.apresentationText").innerHTML = `${questions[numberQuestion].choices[0]}`
    document.querySelector("p#option2.apresentationText").innerHTML = `${questions[numberQuestion].choices[1]}`
}

function goToQuestion( slotSelectedFromUSer ){
     if (slotSelectedFromUSer === numberQuestion) {
        // change background
        sectionBoardgame.style.display = 'none'
        sectionQuestion.style.display = 'flex'
    
        document.body.classList.remove("background")
        document.body.classList.add("question")
    
        prepareQuestion()
     }
}

function verifyQuestion( userChoice ) {
    let answerUser = userChoice === "option1" ? questions[numberQuestion].choices[0] : questions[numberQuestion].choices[1]

    let statusAnswerUser = questions[numberQuestion].answer === answerUser ? true : false

    changeActiveSlotQuestion(numberQuestion)
    feedbackAnswer(statusAnswerUser)
    numberQuestion++;
}

function prepareAnswerExplanation() {
    document.querySelector("p#questionExplanation.apresentationText").innerHTML = `${questions[numberQuestion].title}`
    document.querySelector("p#correctAnswer.apresentationText").innerHTML = `${questions[numberQuestion].answer}`
    document.querySelector("p#correctAnswerExplanation.apresentationText").innerHTML = `${questions[numberQuestion].correctAnswerExplanation}`
}

function feedbackAnswer( statusAnswerUser ) {
    // change background
    sectionAnswer.style.display = 'flex'
    sectionQuestion.style.display = 'none'

    document.body.classList.remove("question")
    document.body.classList.add("answer")

    if (statusAnswerUser) {
        playCorrectSound()
        start();
        stop();
    } else {
        playWrongSound()
    }

    prepareAnswerExplanation()
}
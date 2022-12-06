// DEFINE THE APRESENTATION TEXT
let rules = 
["1 - Ao clicar na primeira casa do tabuleiro você será direcionado à primeira questão, e terá a opção de escolher a alternativa que você considerar ser a correta.",
"2 – Se a alternativa que você escolheu estiver incorreta, aparecerá uma crítica para que você possa rever a sua resposta e retornar para escolher a resposta correta.",
"3 – Quando a alternativa escolhida estiver correta, aparecerá uma explicação da questão para ampliar os seus conhecimentos sobre a prevenção em saúde bucal.",
"4 – Ao clicar na seta avançar no tabuleiro, o jogo pulará para próxima casa onde constará outra questão.",
"5 – Você somente consegue passar para uma questão, após responder corretamente a questão anterior.",
"6 – Você poderá jogar individualmente ou em grupos.",
"7- O jogo termina após a chegada do super dentinho, no sorriso feliz.(sorriso feliz no final figura)"]

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function displayApresentationRules(){
    let numberRule = 0
    let index = 0
    let size = rules[numberRule].length    

    document.querySelector("#apresentationRule").innerHTML = ""
    while( index < size ){
        await delay(50);
        document.querySelector("#apresentationRule").innerHTML += rules[numberRule][index]
        index++;
    }
    
}

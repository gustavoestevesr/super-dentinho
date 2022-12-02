let apresentation = 
`Olá, eu sou o super dentinho e vou ajudar você a ter um super sorriso. Vem comigo nessa aventura, jogando e aprendendo como podemos nos proteger da cárie e manter a nossa saúde bucal em dia.
`

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function displayApresentationGame(){
    let index = 0
    let size = apresentation.length    
    while( index < size ){
        await delay(50);
        document.querySelector("#apresentationGame").innerHTML += apresentation[index]
        index++;
    }
}

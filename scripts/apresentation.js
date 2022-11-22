// DEFINE THE APRESENTATION TEXT
let apresentation = 
`Olá, eu sou o super dentinho e vou ajudar você a ter um super sorriso. Vem comigo nessa aventura, jogando e aprendendo como podemos nos proteger da cárie e manter a nossa saúde bucal em dia.
`

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

let index = 0
let size = apresentation.length
async function displayApresentationText(){
    while( index < size ){
        await delay(100);
        document.querySelector("#apresentationText").innerHTML += apresentation[index]
        index++;
    }
    
}

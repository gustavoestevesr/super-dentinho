// DEFINE THE CREATORS TEXT
let vanessa = 
`Graduada em Odontologia, UNIFAA, possui especialização em Estratégia da saúde e da família, com ênfase em saúde coletiva e especialização em  Ortodontia , pela UNIFAA – Centro Universitário de Valença-RJ .Pós graduada em periodontia, cirurgia oral menor ,CEVO -Centro de estudos ,Valença-RJ. Pós-graduada em prótese e dentística estética pela ABO-Associação Brasileira de odontologia .Professora Universitária do curso de odontologia ,UNIFAA. Mestranda em Ensino em Ciências da Saúde e do Meio Ambiente.
`

let carlos = 
`Graduado em Ciências Biológicas, Especialista em Bioquímica,Especialista em Hematologia pela UFRJ em 2000, Mestre em Ciência e Tecnologia de Alimentos pela UFRRJ (2001) na área deconcentração em Microbiologia Aplicada; Doutor em Biotecnologia Industrial (2007) EEL-USP na área de concentração em Microbiologia Aplicada. Possui experiência em Biotecnologia demicro-organismos: estudos com Lactobacillus e seu papel naestimulação da imunidade; Microbiologia Clínica e Médica;Hematologia Clínica e Laboratorial. Coordenador do Curso de Ciências Biológicas - Bacharelado com ênfase em Biotecnologia. Docente/Orientador do Mestrado Profissional em Ensino de Ciências da Saúde e do Meio Ambiente do UniFOA, programa no qual desenvolve estudos relacionados ao uso de atividades lúdicas como ferramenta para o ensino em Ciências Biológicas e Saúde. Estuda também os aspectos epidemiológicos de bactérias isoladas de Otites em Cães e no ambiente hospitalar, e sua relação com a conduta terapêutica e com o ensino médico.
`

let gustavo = 
`Este jogo foi criado em 2022 por Vanessa Fontes dos Reis e Carlos Alberto Sanches Pereira, como produto final do MECSMA(Mestrado em ensino de ciências da saúde e Meio ambiente)-UNIFOA, e deve ser utilizado como recurso de ensino.
`

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function displayApresentationCredits(){
    let index = 0
    let size = vanessa.length
    while( index < size ){
        await delay(50);
        document.querySelector("#apresentationCredits1").innerHTML += vanessa[index]
        index++;
    }

    index = 0
    size = carlos.length
    while( index < size ){
        await delay(100);
        document.querySelector("#apresentationCredits1").innerHTML += carlos[index]
        index++;
    }

    index = 0
    size = gustavo.length
    while( index < size ){
        await delay(100);
        document.querySelector("#apresentationCredits1").innerHTML += gustavo[index]
        index++;
    }
}

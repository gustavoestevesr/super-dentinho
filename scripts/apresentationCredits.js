// DEFINE THE CREATORS TEXT
let authors =[`Graduada em Odontologia, UNIFAA, possui especialização em Estratégia da saúde e da família, com ênfase em saúde coletiva e especialização em  Ortodontia , pela UNIFAA – Centro Universitário de Valença-RJ .Pós graduada em periodontia, cirurgia oral menor ,CEVO -Centro de estudos ,Valença-RJ. Pós-graduada em prótese e dentística estética pela ABO-Associação Brasileira de odontologia .Professora Universitária do curso de odontologia ,UNIFAA. Mestranda em Ensino em Ciências da Saúde e do Meio Ambiente.`,`Graduado em Ciências Biológicas, Especialista em Bioquímica,Especialista em Hematologia pela UFRJ em 2000, Mestre em Ciência e Tecnologia de Alimentos pela UFRRJ (2001) na área deconcentração em Microbiologia Aplicada; Doutor em Biotecnologia Industrial (2007) EEL-USP na área de concentração em Microbiologia Aplicada. Possui experiência em Biotecnologia demicro-organismos: estudos com Lactobacillus e seu papel naestimulação da imunidade; Microbiologia Clínica e Médica;Hematologia Clínica e Laboratorial. Coordenador do Curso de Ciências Biológicas - Bacharelado com ênfase em Biotecnologia. Docente/Orientador do Mestrado Profissional em Ensino de Ciências da Saúde e do Meio Ambiente do UniFOA, programa no qual desenvolve estudos relacionados ao uso de atividades lúdicas como ferramenta para o ensino em Ciências Biológicas e Saúde. Estuda também os aspectos epidemiológicos de bactérias isoladas de Otites em Cães e no ambiente hospitalar, e sua relação com a conduta terapêutica e com o ensino médico.`,`gustavo asdasd asd`]

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

let numberAuthor = 0
let indexAuthor = 0
let sizeAuthor = authors[numberAuthor].length

async function displayApresentationCredits(){
    
    if (indexAuthor == 0) {
        document.querySelector("#apresentationCredits").innerHTML = ""
        while (indexAuthor < sizeAuthor) {
            await delay(50);
            document.querySelector("#apresentationCredits").innerHTML += authors[numberAuthor][indexAuthor]
            indexAuthor++;
        }

        if (numberAuthor < 3) {
            numberAuthor++;
            indexAuthor = 0
            sizeAuthor = authors[numberAuthor].length
        } else {
            numberAuthor=0
        }    
    }

}

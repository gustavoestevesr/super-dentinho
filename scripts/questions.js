/*  QUESTIONS  */
var questions = [
    {
        title: "Quantas vezes devemos escovar nossos dentinhos ao dia?",
        choices: ["Parte da manhã e a noite.","Sempre após nos alimentar."],
        answer: "Sempre após nos alimentar.",
        correctAnswerExplanation: "Obaaa!!! Você acertou, todas as vezes que nos alimentamos precisamos limpar nossos dentinhos.",
        wrongAnswerExplanation: "Resposta incorreta sobre balãozinho, Hum...:( Você errou, todas as vezes que nos alimentamos precisamos limpar nossos dentinhos.",
        tip: ``
    },
    {
        title: "Qual a forma correta de escovar seus dentinhos, na sua idade?",
        choices: ["Técnica da vassourinha, escovinha inclinada.","Técnica da bolinha, escovinha não inclinada."],
        answer: "Técnica da vassourinha, escovinha inclinada.",
        correctAnswerExplanation: "Isso aí!!! Você acertou devemos inclinar a escova 45° e escovar os dentes em todas suas faces, lembrando que acima (na oclusal) dos dentinhos faremos movimento de vai e vem.",
        wrongAnswerExplanation: "Incorreta ,que pena você errou! A técnica da bolinha e para crianças menores de 8 anos ou aqueles que tem dificuldade motora, na hora da escovação.",
        tip: '<h5>' + idioma === 'pt-br' ? 'Método de Stillman Modificado' : 'Modified Stillman Method' + '</h5>'
        + `<div class="responsive-iframe">
            <iframe src="https://www.youtube.com/embed/LLX8uFlWLDA?start=58&end=91&controls=&mute=1" 
            title="YouTube video player"></iframe>
           </div>`,
        reference: `<small>` + idioma === 'pt-br' ? 'DENTALPAD. Como escovar os dentes: principais técnicas. YouTube, 02 de outubro de 2016. Disponível em: <https://www.youtube.com/watch?v=LLX8uFlWLDA>. Acesso em: 10 de março de 2023.' : 'DENTALPAD. How to brush your teeth: main techniques. YouTube, October 2, 2016. Available at: <https://www.youtube.com/watch?v=LLX8uFlWLDA>. Accessed on: March 10, 2023.' + '</small>',
        tip2: '<h5>' + idioma === 'pt-br' ? 'Método de Bass Modificado' : 'Modified Bass Method' + '</h5>'
        + `<div class="responsive-iframe">
            <iframe src="https://www.youtube.com/embed/LLX8uFlWLDA?start=92&end=113&controls=0&mute=1"
            title="YouTube video player"></iframe>
           </div>`,
        reference2: `<small>` + idioma === 'pt-br' ? 'DENTALPAD. Como escovar os dentes: principais técnicas. YouTube, 02 de outubro de 2016. Disponível em: <https://www.youtube.com/watch?v=LLX8uFlWLDA>. Acesso em: 10 de março de 2023.' : 'DENTALPAD. How to brush your teeth: main techniques. YouTube, October 2, 2016. Available at: <https://www.youtube.com/watch?v=LLX8uFlWLDA>. Accessed on: March 10, 2023.' + '</small>',

    },
    {
        title: "Como deve ser a escovinha dental?",
        choices: ["Dura, e com a cabeça da escova pequena.", "Macia, e com a cabeça da escova pequena."],
        answer: "Macia, e com a cabeça da escova pequena.",
        correctAnswerExplanation: "Parabéns!! Isso mesmo você está indo muito bem, a escova dental deve sempre ser pequena e macia para conseguir limpar todos os cantinhos do dente, sem machucar.",
        wrongAnswerExplanation: "Incorreta !A escovinha sempre deve ser pequena e macia  para conseguir limpar todos os cantinhos do dente ,sem machucar.",
        tip: `<img src="./images/questions/escova-de-dentes-ideal.svg" alt="" style="width: 600px; max-width: 100%">`,
        reference: `<small>` + idioma === 'pt-br' ? 'Fonte: Trindadeodontologia' : 'Source: Trindadeodontologia',
    },
    {
        title: "A pasta de dental e uma grande amiga da escovinha, ela precisa de flúor para manter o dentinho longe das cáries?",
        choices: ["Sim, precisa.", "Não, precisa."],
        answer: "Sim, precisa.",
        correctAnswerExplanation: "Correta, todas as pastas precisam de flúor para combater o bichinho da cárie, e manter o esmalte forte .( bichinho cárie, flúor caindo no dentinho)gif",
        wrongAnswerExplanation: "Incorreta, sem flúor as pastas não ajudarão os dentinhos contras as cáries. (dentinho lutando contra a cárie)",
        tip: ``
    },
    {
        title: "E a quantidade de pasta para colocar para idade de vocês?",
        choices: ["A quantidade vai de um lado ao outro da escova.", "A quantidade e relativa a um grão de ervilha."],
        answer: "A quantidade e relativa a um grão de ervilha.",
        correctAnswerExplanation: "Acertou!!! a pasta deve ser colocada na idade de vocês, do mesmo tamanho de um carocinho de ver ilha!! ( foto de uma ervilha)",
        wrongAnswerExplanation: "Errou !!! a pasta deve ser colocada na idade de vocês ,do mesmo tamanho de um carocinho de ver ilha!! ( foto de uma ervilha)",
        tip: `<img src="./images/questions/quantidade-de-pasta.svg" alt="" style="width: 600px; max-width: 100%">`,
        reference: `<small>` + idioma === 'pt-br' ? 'Fonte: Monicabarreto' : 'Source: Monicabarreto',
    },
    {
        title: "Você precisa ir no dentista quando...",
        choices: ["Meu dente doer apenas.", "De 6 em 6 meses, mesmo se não estiver sentindo nenhuma dor."],
        answer: "De 6 em 6 meses, mesmo se não estiver sentindo nenhuma dor.",
        correctAnswerExplanation: "Acertou!!!! você precisa ir no dentista mesmo se seu dentinho não estiver doendo ,para fazer a manutenção da sua saúde da boca.",
        wrongAnswerExplanation: "Errada, você precisa ir no dentista mesmo se seu dentinho não estiver doendo, para fazer a manutenção da sua saúde da bucal.",
        tip: ``
    },
    {
        title: "A massinha branca que fica sobre os dentes, precisam ser removidas com a escovação?",
        choices: ["Sim, caso não seja removida ela poderá causar a cárie ou doença na gengiva.", "Não ,essa massinha é a pasta de dente que ficou no dente.(foto de varias bichinhos no dente, escovando eles somem)"],
        answer: "Sim, caso não seja removida ela poderá causar a cárie ou doença na gengiva.",
        correctAnswerExplanation: "Correta! Essa massinha e devido a não escovação correta é ela que tem várias bactérias e pode causar a cárie e gengivite (doença que causa inflamação, vermelhão, dor e sangramento na gengiva)",
        wrongAnswerExplanation: "Errada! Não é pasta não!! Essa massinha e devido a não escovação correta é ela que tem várias bactérias e pode causar a cárie ou gengivite (doença que causa inflamação, vermelhão, dor e sangramento na gengiva)",
        tip: ``
    },
    {
        title: "O fio dental é usado antes ou depois da escovação?",
        choices: ["Depois da escovação.", "Antes da escovação."],
        answer: "Antes da escovação.",
        correctAnswerExplanation: "Isso aí!! Muito bem sempre antes da escovação passamos o fio dental",
        wrongAnswerExplanation: "Errou! ( carinha de triste) sempre antes da escovação passamos o fio dental",
        tip: `<h5>${idioma === 'pt-br' ? 'Como usar o fio dental corretamente?' : 'How to floss correctly?'}</h5>
        <div class="responsive-iframe">
            <iframe src="https://www.youtube.com/embed/hM4-koredp8?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>`,
        reference: `<small>` + idioma === 'pt-br' ? 'Fonte: Colgate Brasil' : 'Source: Colgate Brazil',
    },
    {
        title: "Alimentos cariogênicos são aqueles que causam cárie. Eles são:",
        choices: ["Balas, chocolates, refrigerantes.", "Frutas, legumes e verduras."],
        answer: "Balas, chocolates, refrigerantes.",
        correctAnswerExplanation: "Isso, as balas, chocolates são ricos em açúcares por isso causam cárie.",
        wrongAnswerExplanation: "Esses alimentos não são cariogênicos, ou seja, eles não causam a cárie, e ainda contribuem para saúde de uma forma geral prevenindo diabetes, obesidade e hipertensão.",
        tip: ``
    },
    {
        title: "Os alimentos autolimpantes são aqueles, que limpam os dentes eles podem ser:",
        choices: ["Geleias e chicletes.", "Maças e cenouras."],
        answer: "Maças e cenouras.",
        correctAnswerExplanation: "Sim, eles limpam as faces dos dentes ,contribuindo para uma gengiva saudável",
        wrongAnswerExplanation: "Não, pelo contrário esses alimentos agarram nos dentes",
        tip: ``
    },
    {
        title: "A língua precisa também ser escovada em todas as escovações do dente?",
        choices: ["Uma vez ao dia é o suficiente.", "Sim, todas as escovações precisamos escovar a língua(língua sendo limpa)"],
        answer: "Sim, todas as escovações precisamos escovar a língua(língua sendo limpa)",
        correctAnswerExplanation: "Sim!!!! A língua assim como os dentes ,precisa de cuidados ,todas as vezes que escovamos os dentes ,precisamos escovar a língua também .",
        wrongAnswerExplanation: "Errada! A língua assim como os dentes, precisa de cuidados ,todas as vezes que escovamos os dentes ,precisamos escovar a língua também",
        tip: `<h5>Como realizar a Higienização da Língua corretamente?</h5>
        <div class="responsive-iframe">
            <iframe src="https://www.youtube.com/embed/9FCeLKfY6V0?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        
        </div>`,
        reference: `<small>` + idioma === 'pt-br' ? 'Fonte: Vina Gonçalves' : 'Source: Vina Gonçalves',
    },
    {
        title: "Estou com dor de dente na escola, o que devo fazer?",
        choices: ["Falar com a professora para ela falar com o meu responsável.", "Ficar quieto para não precisar ir ao dentista."],
        answer: "Falar com a professora para ela falar com o meu responsável.",
        correctAnswerExplanation: "Correta, sempre que estiver com dor preciso falar a um responsável assim, ele poderá ajudar e levá-lo ao dentista!",
        wrongAnswerExplanation: "Errada, sempre que estiver com dor preciso falar a um responsável assim ,ele poderá ajudar e levá-lo ao dentista. Não precisa ter  medo pois o dentista irá  para ajudar você a não sentir mais dor! (DENTISTA TRATANDO)",
        tip: ``
    },
    {
        title: "O que fazer para não ter cáries?",
        choices: ["Diminuir os açúcares da comida, e sempre higienizar a boca.", "Manter os açúcares da comida, e higienizar 2 vezes a boca por dia."],
        answer: "Diminuir os açúcares da comida, e sempre higienizar a boca.",
        correctAnswerExplanation: "Correto! Diminuindo, e higienizando teremos sempre uma boca livre da doença cárie",
        wrongAnswerExplanation: "Incorreto! Devemos diminuir da nossa comida os açúcares, como: balas, doces, refrigerantes e higienizar sempre a boca, após todas as alimentações!",
        tip: `
        <h5>${idioma === 'pt-br' ? 'Cuide bem dos seus dentes!' : 'Take good care of your teeth!'}</h5>
        <div class="responsive-iframe">
            <iframe src="https://www.youtube.com/embed/HpXslusc0TE?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        
        </div>`,
        reference: `<small>` + idioma === 'pt-br' ? 'Fonte: Coleção Miau' : 'Source: Coleção Miau',
    },
    {
        title: "Como os açúcares atacam o dente e formam as lesões de cárie?",
        choices: ["As bactérias na placa dental destroem o açúcar que é ingerido e o convertem em ácidos, destruindo o esmalte instalando-se a cárie.", "As bactérias na placa dental  colaboram com o dente ,destruindo o esmalte instalando-se a cárie."],
        answer: "As bactérias na placa dental destroem o açúcar que é ingerido e o convertem em ácidos, destruindo o esmalte instalando-se a cárie.",
        correctAnswerExplanation: "Correto!!!  As bactérias na placa dental destroem o açúcar que é ingerido e o convertem em ácidos, destruindo o esmalte instalando-se a cárie. ( cárie comendo o dente)",
        wrongAnswerExplanation: "Não, não!! As bactérias na placa dental, NÃO colaboram com o dente elas destroem o esmalte instalando-se a cárie.",
        tip: ``
    },
    {
        title: "A última escovação do dia precisa:",
        choices: ["Ser supervisionada por um responsável.", "Não precisa ser supervisionada por um responsável."],
        answer: "Ser supervisionada por um responsável.",
        correctAnswerExplanation: "Isso aí! sim, a escovação da noite é a mais importante e precisa ser supervisionada por um responsável, para ver se foi feito da maneira correta.",
        wrongAnswerExplanation: "Precisa sim!! A supervisão e para que o responsável verifique se foi realizada de maneira satisfatória a escovação.",
        tip: ``
    },
    {
        title: "Por que alimentos como macarrão, hambúrguer e pizzas também precisam ser evitados para manutenção da saúde bucal, e da saúde de uma forma geral?",
        choices: ["Esses alimentos são ricos em carboidratos e depois se transformam em açúcares no nosso corpo.", "Esses alimentos são ricos em proteínas e depois se transformam em açúcares no nosso corpo."],
        answer: "Esses alimentos são ricos em carboidratos e depois se transformam em açúcares no nosso corpo.",
        correctAnswerExplanation: "Correto, esses alimentos depois se transformam em açúcares e potencializam o aparecimento da cárie.",
        wrongAnswerExplanation: "Errado, as proteínas não se transformação em açúcares !Elas são excelentes para a saúde de uma forma geral.",
        tip: ``
    },
    {
        title: "Antibiótico faz aparecer cárie?",
        choices: ["Sim, sempre que a criança faz uso de antibiótico ela faz aparecer a cárie.", "Não, ele não faz aparecer cárie."],
        answer: "Não, ele não faz aparecer cárie.",
        correctAnswerExplanation: "Correta, o antibiótico não tem a capacidade de fazer aparecer a doença cárie. O que determina a instalação da cárie é o consumo excessivo de açúcares e falta de escovação correta!",
        wrongAnswerExplanation: "Incorreta, o que determina a instalação da cárie é o consumo excessivo de açúcares e falta de escovação correta!",
        tip: ``
    },
    {
        title: "A “massinha branca na parede do dente” é chamada de biofilme dental, ela pode ocasionar o aparecimento de uma doença na gengiva que faz sangra, ela se chama?",
        choices: ["Gengivite.", "Cárie."],
        answer: "Gengivite.",
        correctAnswerExplanation: "Correta, gengivite é uma doença que pode ser ocasionada pela falta de uma escovação correta, instalada pelo acúmulo do biofilme que gera uma inflamação na gengiva faz sangra e doer.",
        wrongAnswerExplanation: "A doença cárie não sangra, mas doe e assim como a gengivite pode causar a perda do dentinho.",
        tip: ``
    },
    {
        title: "É obrigatório o uso de enxaguante bucal?",
        choices: ["Sim.", "Não."],
        answer: "Não.",
        correctAnswerExplanation: "Correto, não e obrigatório mas é eficiente sua utilização é aconselhado o enxaguante que contenha flúor em sua composição.",
        wrongAnswerExplanation: "Incorreto, não é obrigatório, mas é eficiente sua utilização é aconselhado o enxaguante que contenha flúor em sua composição.",
        tip: ``
    },
    {
        title: "Qual a importância desse jogo?",
        choices: ["Manter minha saúde bucal, ajudar meus amigos familiares a manter a saúde bucal deles também.", "Competir com meus colegas e ganhar o jogo apenas."],
        answer: "Manter minha saúde bucal, ajudar meus amigos familiares a manter a saúde bucal deles também.",
        correctAnswerExplanation: "Isso aí!!! Muito bem, o objetivo é promoção e prevenção das doenças da boca melhorando a qualidade de vida de vocês, assim como proporcionando um conhecimento para que vocês transmitam isso para a sociedade(pais, amigos, tios ..)",
        wrongAnswerExplanation: "O objetivo não é apenas competir e ganhar. Os Ganhadores são todos aqueles que chegaram até aqui com o super dentinho, aprendendo como devemos manter a nossa saúde bucal ,ficando longe da cárie e das doenças da boca.",
        tip: ``
    },
];
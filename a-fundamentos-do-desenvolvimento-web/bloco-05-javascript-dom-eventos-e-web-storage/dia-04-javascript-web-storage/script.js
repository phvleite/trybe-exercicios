// PADRÃO
let preferencias = {
    fonte: 'Montserrat',
    corFundoTela: 'White',
    corFonteTexto: 'Black',
    tamanhoFonte: '15px',
    espacoLinhas: '100%',
    textoLeitura: 'Desiderata'
}

// Recuperando preferências
function verificaExistenciaPreferencias() {
    if (localStorage.getItem(preferencias) === null) {
        localStorage.setItem(preferencias, JSON.stringify(preferencias));
    } else {
        minhasPreferencias = JSON.parse(localStorage.getItem(preferencias));
        preferencias = minhasPreferencias;
    }
}

verificaExistenciaPreferencias()

document.querySelector('.texto').style.backgroundColor = preferencias.corFundoTela
document.querySelector('.texto').style.color = preferencias.corFonteTexto
document.querySelector('.texto').style.fontFamily = preferencias.fonte
document.querySelector('.texto').style.fontSize = preferencias.tamanhoFonte
document.querySelector('.texto').style.lineHeight = preferencias.espacoLinhas

function salvaPreferencias() {
    preferencias.textoLeitura = document.getElementsByClassName('leitura')[0].value;
    preferencias.corFundoTela = document.getElementsByClassName('corFundoTela')[0].value;
    preferencias.corFonteTexto = document.getElementsByClassName('corTextoLeitura')[0].value;
    preferencias.tamanhoFonte = document.getElementsByClassName('tamanhoFonte')[0].value;
    preferencias.espacoLinhas = document.getElementsByClassName('espacoLinhasTexto')[0].value;
    preferencias.fonte = document.getElementsByClassName('fonteTextoLeitura')[0].value;
    localStorage.setItem(preferencias, JSON.stringify(preferencias));
    alert("Preferências salvas!")
};

function restauraPadrao() {
    preferencias = {
        fonte: 'Montserrat',
        corFundoTela: 'White',
        corFonteTexto: 'Black',
        tamanhoFonte: '15px',
        espacoLinhas: '100%',
        textoLeitura: 'Desiderata'
    }
    criaMenu();
    alteraTextoNaTela();
    criaMenuOpcoes('menuCorFundoTela', menuOpcoesCorFundoTela, paletaDeCores);
    criaMenuOpcoes('menuCorFonteTexto', menuOpcoesCorFonteTexto, paletaDeCores);
    criaMenuOpcoes('menuTamanhoFonteTexto', menuOpcoesTamanhoFonteTexto, valoresTamanhoFonte);
    criaMenuOpcoes('menuEspacoLinhasTexto', menuOpcoesEspacoLinhasTexto, valoresEspacoLinhas);
    criaMenuOpcoes('menuFonteTextoLeitura', menuOpcoesFonteTextoLeitura, paletaDeFontes);
    exibeAlteracoesCorFundoTela();
    exibeAlteracoesCorTextoLeitura();
    exibeAlteracoesEspacoLinhasTexto();
    exibeAlteracoesFonteTextoLeitura();
    exibeAlteracoesTamanhoFonte();
    localStorage.setItem(preferencias, JSON.stringify(preferencias));
    alert("Padrão restaurando!")
}

// INICIO SCRIPT DO MENU PARA ESCOLHER LEITURA E MOSTRA NA TELA
let textosLeitura = [
    {
        id: 'desiderata',
        titulo: 'Desiderata',
        texto: [
            'Siga tranquilamente entre a pressa e a inquietude, lembrando-se que há sempre paz no silêncio.',
            'Tanto quanto possível, sem se humilhar, mantenha boas relações com todas as pessoas.',
            'Fale a sua verdade mansa e claramente e ouça a dos outros, mesmo a dos insensatos e ignorantes, pois eles também têm sua própria história.',
            'Evite as pessoas escandalosas e agressivas. Elas afligem o nosso espírito.',
            'Se você se comparar com os outros, tornar-se-á presunçoso e magoado, pois haverá sempre alguém superior e alguém inferior a você.',
            'Você é filho do Universo, irmão das estrelas e árvores. Você merece estar aqui, e mesmo sem você perceber, a Terra e o Universo vão cumprir o seu destino.',
            'Desfrute das suas realizações, bem como dos seus planos. Mantenha-se interessado em sua carreira, ainda que humilde, pois ela é um ganho real na fortuna cambiante do tempo.',
            'Tenha cautela nos negócios, pois o mundo está cheio de astúcias, mas não se torne um cético porque a virtude sempre existirá.',
            'Muita gente luta por altos ideais e em toda a parte a vida está cheia de heroísmo.',
            'Seja você mesmo, principalmente. Não simule afeição. Não seja descrente do amor, porque mesmo diante de tanta aridez e tanto desencanto ele é tão perene quanto a selva.',
            'Aceite com carinho o conselho dos mais velhos e seja compreensivo com os arroubos inovadores da juventude.',
            'Alimente a força do espírito que o protegerá no infortúnio inesperado, mas não se desespere com perigos imaginários.',
            'Muitos temores nascem do cansaço e da solidão, e a despeito de uma disciplina rigorosa. Seja gentil para consigo mesmo.',
            'Portanto, esteja em paz com Deus como quer que você o conceba e quaisquer que sejam seus trabalhos e as aspirações.',
            'Na fatigante confusão da vida, mantenha-se em paz com sua própria alma, apesar de todas as falsidades, fadigas e desencantos.',
            'O mundo ainda é bonito. Seja prudente e faça tudo para ser feliz!'
        ]
    },
    {
        id: 'felicidade',
        titulo: 'Felicidade',
        texto: [
            'Cada espírito é um canal de bênçãos, em se mantendo ligado às Leis do criador. Lembre - se: você pode espalhar compreensão e otimismo.',
            'Contemple a fonte ao dissipar as formações de lama que se lhe atira à corrente. Não se detenha em pessimismo e azedume.',
            'Qualquer tristeza manifestada impulsiona os tristes a ficarem mais tristes. Fraqueza à mostra enfraquece os fracos ainda mais.',
            'Encoraje o próximo com o seu sorriso, entregando suas mágoas a Deus. Não se sabe de benefício algum que o desânimo tenha realizado.',
            'Siga em frente, criando simpatia e amizade, esperança e cooperação.',
            'Felicidade é um fruto que se colhe da felicidade que se semeia. Plante amor e paz e a vida lhe trará farta colheita de paz e amor.',
            'Quando a provação lhe apareça, terá surgido o seu momento mais importante para comunicar fé e coragem aos companheiros.',
            'Quando o sofrimento desponte na estrada de alguém, estará você obtendo o instante dourado de auxiliar.',
            'Haja o que houver, distribua confiança e bom ânimo, porque a alegria é talvez a única dádiva que você é capaz de ofertar sem possuir.',
            'Evite amargura e desespero, porque todos estamos seguindo ao encontro do júbilo imperecível.',
            'Se você não acredita que Deus é plenitude de paz e amor, alegria e luz, pense que a Terra poderá envolver-se nas sombras da noite, mas haverá sempre no Céu a fatalidade do alvorecer.'
        ]
    },
    {
        id: 'paiNossoPsicografado',
        titulo: 'Pai Nosso Psicografado',
        texto: [
            'Pai Nosso que estais nos céus,',
            'Na luz dos sóis infinitos,',
            'Pai de todos os Mitos Deste mundo de escarcéus.',
            'Santificado, Senhor, Seja o teu nome sublime,',
            'Que em todo o Universo exprime Concórdia ternura e amor',
            'Venha ao nosso coração O teu reino de bondade,',
            'De paz e de claridade Na estrada da redenção.',
            'Cumpra-se o teu mandamento,',
            'Que não vacila e nem erra,',
            'Nos Céus, como em toda a Terra De luta e de sofrimento',
            'Evitamos todo o mal,',
            'Damos o pão no caminho,',
            'Feito na luz, no carinho Do pão espiritual.',
            'Perdoamos, meu Senhor, Os débitos tenebrosos,',
            'De passados escabrosos, De iniqüidade e de dor,',
            'Auxiliamos, também, Nos sentimentos cristãos,',
            'A amar nossos irmãos… Que vivem longe do bem.',
            'Com a proteção de Jesus, Livra a nossa alma do erro,',
            'Sobre o mundo de desterro, Distante da vossa luz.',
            'Que a nossa ideal igreja seja o altar da Caridade,',
            'Onde, se faça a vontade, Do vosso amor… Assim seja.'
        ]
    },
    {
        id: 'relato',
        titulo: 'Relato',
        texto: [
            'Relato de um espírito que trabalha dentro da falange de Maria Mulambo!',
            'Nunca fui Rainha apenas trabalho dentro da falange da primeira Mulambo essa sim foi Rainha mas eu não sou rainha, nunca fui.',
            'Eu fui uma lavadeira nas terras de Pernambuco, nunca tive reino, nunca tive súditos, nunca usei coroa, nunca usei roupas belas.',
            'Tive uma vida simples, fui uma mulher simples, fui resgatada por um espírito que trabalhava na falange de Maria Mulambo.',
            'Quando viva meu erro foi praticar abortos e se envolver com homens casados por interesses, vaidades, luxúria e maldades.',
            'Eu engravidava desses homens e abortava quando engravidava por isso fui parar em um "presídio" espíritual fiquei por lá muito tempo, meu desencarne foi durante esses abortos que eu realizava.',
            'Perdi as contas de quantos abortos eu realizei, também fazia abortos em mulheres que ganhavam a vida em prostíbulos.',
            'Minha penitência foi ficar presa em uma esfera espiritual até entender que eu mesma fui minha maior inimiga, até eu entender que destrui muitas Vidas.',
            'Paguei caro pelas minhas más escolhas, paguei um preço alto pela minha frieza e vaidade.',
            'Cometi um dos piores e mais grave erro o aborto.',
            'Fiquei presa as teias que eu mesma construí em vida.',
            'Fiz muitas pessoas chorarem, porém meu choro durou uma eternidade, até hoje sinto essa dor ao ver alguém abortar.',
            'Hoje trabalho dentro da falange de mulambo aconselhando e orientando espíritos que se envolveram com homens casados engravidaram dos mesmo e cometeram abortos.',
            'Essa é a minha função, ajudar, orientar, esclarecer, retirar da escuridão e da maldade espíritos que assim como eu não tinham amor próprio e por um amor ilusório e apego destruía vidas.',
            'Foi me consedida mais uma chance!',
            'Em vida fui trevas quando MULAMBO me resgatou enxerguei a luz!',
            'Hoje Sou apenas uma trabalhadora dentro da falange de  Maria Mulambo, sou apenas uma entre as milhares de Marias.'
        ]
    },
    {
        id: 'confiaSempre',
        titulo: 'Confie Sempre',
        texto: [
            'Não percas a tua fé entre as sombras do mundo.',
            'Ainda que os teus pés estejam sangrando, segue para a frente, erguendo-a por luz celeste, acima de ti mesmo.',
            'Crê e trabalha. Esforça-te no bem e espera com paciência.',
            'Tudo passa e tudo se renova na terra, mas o que vem do céu permanecerá.',
            'De todos os infelizes os mais desditosos são os que perderam a confiança em Deus e em si mesmo, porque o maior infortúnio é sofrer a privação da fé e prosseguir vivendo.',
            'Eleva, pois, o teu olhar e caminha. Luta e serve. Aprende e adianta-te. Brilha a alvorada além da noite.',
            'Hoje, é possível que a tempestade te amarfanhe o coração e te atormente o ideal, aguilhoando-te com a aflição ou ameaçando-te com a morte.',
            'Não te esqueças, porém, de que amanhã será outro dia.',
        ]
    },
    {
        id: 'oracaoNossa',
        titulo: 'Oração Nossa',
        texto: [
            'Senhor ensina-nos a orar, sem esquecer o trabalho.',
            'A dar, sem olhar a quem.',
            'A servir, sem perguntar até quando...',
            'A sofrer, sem magoar, seja quem for.',
            'A progredir, sem perder a simplicidade.',
            'A semear o bem, sem pensar nos resultados...',
            'A desculpar, sem condições.',
            'A marchar para frente, sem contar os obstáculos.',
            'A ver sem malícia...',
            'A escutar, sem corromper os assuntos.',
            'A falar, sem ferir.',
            'A compreender o próximo, sem exigir entendimento...',
            'A respeitar os semelhantes, sem reclamar consideração.',
            'A dar o melhor de nós, além da execução do próprio dever, sem cobrar taxas de reconhecimento...',
            'Senhor, fortalece em nós, a paciência para com as dificuldades dos outros, assim como precisamos da paciência dos outros, para com as nossas próprias dificuldades...',
            'Ajuda-nos para que a ninguém façamos aquilo que não desejamos para nós...',
            'Auxilia-nos, sobretudo, a reconhecer que a nossa felicidade mais alta será, invariavelmente, aquela de cumprir seus desígnios onde e como queiras, hoje, agora e sempre.'
        ]
    },
    {
        id: 'aguaPura',
        titulo: 'Agua Pura',
        texto: [
            'A água pura, a fim de manter-se pura é servida em taça vazia.',
            'A treva da meia noite é a ocasião em que o tempo dá sinal de partida para novo alvorecer.',
            'Por maior que seja a dificuldade, jamais desanime.',
            'O nosso pior momento na vida é sempre o momento de melhorar.'
        ]
    },
    {
        id: 'aCaridade',
        titulo: 'A caridade',
        texto: [
            'A caridade é um exercício espiritual...',
            'Quem pratica o bem, coloca em movimento forças da alma.',
            'Quando os espíritos nos recomendam, com insistência a prática da caridade, eles estão nos orientando no sentido de nossa própria evolução; não se trata apenas de uma indicação ética, mas de profundo significado filosófico...',
        ]
    },
    {
        id: 'aHomossexualidade',
        titulo: 'A homossexualidade',
        texto: [
            'A homossexualidade, tanto quanto a bissexualidade, como assexualidade, são condições da alma humana.',
            'Não devem ser interpretadas como fenômenos espantosos, como fenômenos atacáveis pelo ridículo da humanidade.',
            'Tanto quanto acontece com a maioria que desfruta de uma sexualidade dita normal, aqueles que são portadores de sentimentos de homossexualidade ou bissexualidade são dignos do nosso maior respeito.'
        ]
    },
    {
        id: 'tresVerbos',
        titulo: 'Três verbos',
        texto: [
            'Três verbos existem que, bem conjugados, serão lâmpadas luminosas em nosso caminho: Aprender, Servir e Cooperar.',
            'Três atitudes exigem muita atenção: Analisar, Reprovar e Reclamar.',
            'De três normas de conduta jamais nos arrependeremos: Auxiliar com a intenção do bem, Silenciar e Pronunciar frases de bondade e estímulo.',
            'Três diretrizes manter-nos-ão, invariavelmente, em rumo certo: Ajudar sem distinção, Esquecer todo mal e Trabalhar sempre.',
            'Três posições devemos evitar em todas as circunstâncias: Maldizer, Condenar e Destruir.',
            'Possuímos três valores que, depois de perdidos, jamais serão recuperados: A hora que passa, A oportunidade e A palavra falada.',
            'Três programas sublimes se desdobram à nossa frente, revelando-nos a glória da Vida Superior: Amor, Humildade e Bom ânimo.',
            'Que o Senhor nos ajude, pois, em nossas necessidades, a seguir sempre três abençoadas regras de salvação: Corrigir em nós o que nos desagrada em outras pessoas, Amparar-nos mutuamente, Amar-nos uns aos outros.'
        ]
    }
]

function criaMenu() {
    textosLeitura.sort(function (a, b) {
        return a.titulo < b.titulo ? -1 : a.titulo > b.titulo ? 1 : 0;
    })
    for (i = 0; i < textosLeitura.length; i += 1) {
        const option = document.createElement('option');
        option.innerText = textosLeitura[i].titulo;
        option.setAttribute("id", textosLeitura[i].id);
        if (textosLeitura[i].titulo === preferencias.textoLeitura) {
            option.setAttribute("selected", "selected");
        }
        selectOptions.appendChild(option);
    }
}

function textoNaTela() {
    const valorSelecionado = selecionado.value;
    for (i = 0; i < textosLeitura.length; i += 1) {
        if (textosLeitura[i].titulo === valorSelecionado) {
            let text = textosLeitura[i].texto;
            for (x = 0; x < text.length; x +=1) {
                const texto = document.createElement('p');
                texto.setAttribute("class", "textoLeitura");
                texto.innerText = textosLeitura[i].texto[x];
                localTexto.appendChild(texto);
            }
            document.getElementById('tituloTexto').innerText = textosLeitura[i].titulo;
        }
    }
}

function alteraTextoNaTela() {
    selecionado = document.getElementsByClassName('leitura')[0];
    const valorSelecionado = selecionado.value;

    let textoAtual = document.getElementById('texto');
    while (textoAtual.firstChild) {
        textoAtual.removeChild(textoAtual.firstChild);
    }
    localTexto = document.getElementById('texto')

    for (i = 0; i < textosLeitura.length; i += 1) {
        if (textosLeitura[i].titulo === valorSelecionado) {
            let text = textosLeitura[i].texto;
            for (x = 0; x < text.length; x +=1) {
                const texto = document.createElement('p');
                texto.setAttribute("class", "textoLeitura");
                texto.innerText = textosLeitura[i].texto[x];
                localTexto.appendChild(texto);
            }
            document.getElementById('tituloTexto').innerText = textosLeitura[i].titulo;
        }
    }
}

// Pega o elemento para a posição do Option do Select dos titulos dos textos
let selectOptions = document.getElementById('leitura')

// Chama função para criar o menu
criaMenu();

// Pega a opção selecionada inicial do menu
let selecionado = document.getElementsByClassName('leitura')[0];

// Pega o elemento PAI para onde inserir o texto
let localTexto = document.getElementById('texto');

// Chamma a funçao para colocar o texto selecionado na tela
textoNaTela();

// Verifica se houve alteração no option e chama funcao para alterar texto na tela
selecionado.addEventListener('change', alteraTextoNaTela);

//
//
// FIM  DO SCRIPT PARA O TEXTO DA LEITURA 
//
//

//
//
// INÍCIO DO SCRIPT PARA AS PREFERÊNCIAS
//
//

// PALETA DE CORES PARA O FUNDO DA TELA E FONTE
let paletaDeCores = [
    'Gainsboro',
    'Gray',
    'SkyBlue',
    'SteelBlue',
    'MediumAquamarine',
    'OliveDrab',
    'DarkKhaki',
    'Plum',
    'White',
    'GhostWhite',
    'AliceBlue',
    'AntiqueWhite',
    'WhiteSmoke',
    'Thistle',
    'OrangeRed',
    'FireBrick',
    'DarkRed',
    'Black',
    'Chocolate',
    'Silver',
    'Navy',
    'DimGray',
    'Aleatório',
    'MediumBlue',
    'SlateGray',
    'DarkCyan',
    'DarkTurquoise',
    'Aquamarine',
    'Aqua',
    'LimeGreen',
    'Lime',
    'DarkGreen',
    'DarkOliveGreen',
    'Goldenrod',
    'DarkGoldenrod',
    'Sienna',
    'RosyBrown',
    'SandyBrown',
    'NavajoWhite',
    'Wheat',
    'Indigo',
    'BlueViolet',
    'Purple',
    'DarkMagenta',
    'MediumVioletRed',
    'HotPink',
    'Salmon',
    'DarkSalmon',
    'LightSalmon',
    'Tomato',
    'DarkOrange',
    'Orange',
    'Gold',
    'Yellow',
    'Khaki'
]

// VALORES PARA O TAMANHO DA FONTE
let valoresTamanhoFonte = [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

// VALROES PARO O ESPAÇO ENTRE LINHAS
let valoresEspacoLinhas = [ 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200];

let paletaDeFontes = [
    'Anton',
    'Dancing Script',
    'Kanit',
    'Lobster',
    'Montserrat',
    'Pacifico',
    'Saira Condensed',
    'Secular One',
    'Smooch',
    'Yanone Kaffeesatz',
    'Ubuntu',
    'Ubuntu Mono',
    'Ubuntu Condensed'
]

//document.body.style.fontFamily = 'Montserrat'

// FUNÇÃO PARA CRIAR OS MENUS
function criaMenuOpcoes(menuOpcoes, elementoPai, listaOpcoes) {

    let menuAtual = elementoPai;
    while (menuAtual.firstChild) {
        menuAtual.removeChild(menuAtual.firstChild);
    }

    if (listaOpcoes === paletaDeCores || listaOpcoes === paletaDeFontes) {
        listaOpcoes = listaOpcoes.sort();
    }
    for (i = 0; i < listaOpcoes.length; i += 1) {
        const option = document.createElement('option');
        if (menuOpcoes === 'menuCorFundoTela' || menuOpcoes === 'menuCorFonteTexto' || menuOpcoes === 'menuFonteTextoLeitura') {
            option.innerText = listaOpcoes[i];
            option.setAttribute("id", listaOpcoes[i]);
        } else if (menuOpcoes === 'menuTamanhoFonteTexto') {
            option.innerText = `${listaOpcoes[i]}px`;
            option.setAttribute("id", `${listaOpcoes[i]}px`);
        } else if (menuOpcoes === 'menuEspacoLinhasTexto') {
            option.innerText = `${listaOpcoes[i]}%`;
            option.setAttribute("id", `${listaOpcoes[i]}%`);
        }
        if (menuOpcoes === 'menuCorFundoTela') {
            if (listaOpcoes[i] === preferencias.corFundoTela) {
                option.setAttribute("selected", "selected");
            }            
        } else if (menuOpcoes === 'menuCorFonteTexto') {
            if (listaOpcoes[i] === preferencias.corFonteTexto) {
                option.setAttribute("selected", "selected");
            }            
        } else if (menuOpcoes === 'menuTamanhoFonteTexto') {
            if (listaOpcoes[i] === parseInt(preferencias.tamanhoFonte)) {
                option.setAttribute("selected", "selected");
            }
        } else if (menuOpcoes === 'menuEspacoLinhasTexto') {
            if (listaOpcoes[i] === parseInt(preferencias.espacoLinhas)) {
                option.setAttribute("selected", "selected");
            }
        } else if (menuOpcoes === 'menuFonteTextoLeitura') {
            if (listaOpcoes[i] === preferencias.fonte) {
                option.setAttribute("selected", "selected");
            }
        }
        elementoPai.appendChild(option);
    }
}

function exibeAlteracoesCorFundoTela() {
    selecionadoOpcao = document.getElementsByClassName('corFundoTela')[0];
    const valorSelecionado = selecionadoOpcao.value
    if (valorSelecionado === 'Aleatório') {
        let corAleatoria = `rgb(${(Math.random()*256).toFixed(0)},${(Math.random()*256).toFixed(0)},${(Math.random()*256).toFixed(0)})`
        document.querySelector('.texto').style.backgroundColor = corAleatoria;    
    }
    document.querySelector('.texto').style.backgroundColor = valorSelecionado;
}

function exibeAlteracoesCorTextoLeitura() {
    selecionadoOpcao = document.getElementsByClassName('corTextoLeitura')[0];
    const valorSelecionado = selecionadoOpcao.value
    if (valorSelecionado === 'Aleatório') {
        let corAleatoria = `rgb(${(Math.random()*256).toFixed(0)},${(Math.random()*256).toFixed(0)},${(Math.random()*256).toFixed(0)})`
        document.querySelector('.texto').style.color = corAleatoria;    
    }
    document.querySelector('.texto').style.color = valorSelecionado;
}

function exibeAlteracoesTamanhoFonte() {
    selecionadoOpcao = document.getElementsByClassName('tamanhoFonte')[0];
    const valorSelecionado = selecionadoOpcao.value
    document.querySelector('.texto').style.fontSize = valorSelecionado;
}

function exibeAlteracoesEspacoLinhasTexto() {
    selecionadoOpcao = document.getElementsByClassName('espacoLinhasTexto')[0];
    const valorSelecionado = selecionadoOpcao.value
    document.querySelector('.texto').style.lineHeight = valorSelecionado;
}

function exibeAlteracoesFonteTextoLeitura() {
    selecionadoOpcao = document.getElementsByClassName('fonteTextoLeitura')[0];
    const valorSelecionado = selecionadoOpcao.value
    document.querySelector('.texto').style.fontFamily = valorSelecionado;
}


// Pega o ELEMENTO-PAI para criar o menu COR-FUNDO-TELA
let menuOpcoesCorFundoTela = document.getElementById('corFundoTela');
criaMenuOpcoes('menuCorFundoTela', menuOpcoesCorFundoTela, paletaDeCores);

// Pega o ELEMENTO-PAI para criar o menu COR-LETRA-TEXTO
let menuOpcoesCorFonteTexto = document.getElementById('corTextoLeitura');
criaMenuOpcoes('menuCorFonteTexto', menuOpcoesCorFonteTexto, paletaDeCores);

// Pega o ELEMENTO-PAI para criar o menu TAMANHO-FONTE-TEXTO
let menuOpcoesTamanhoFonteTexto = document.getElementById('tamanhoFonte');
criaMenuOpcoes('menuTamanhoFonteTexto', menuOpcoesTamanhoFonteTexto, valoresTamanhoFonte);

// Pega o ELEMENTO-PAI para criar o menu ESPAÇO-LINHAS-TEXTO
let menuOpcoesEspacoLinhasTexto = document.getElementById('espacoLinhasTexto')
criaMenuOpcoes('menuEspacoLinhasTexto', menuOpcoesEspacoLinhasTexto, valoresEspacoLinhas);

// Pega o ELEMENTO-PAI para criar o menu FONTE-TEXTO-LEITURA
let menuOpcoesFonteTextoLeitura = document.getElementById('fonteTextoLeitura')
criaMenuOpcoes('menuFonteTextoLeitura', menuOpcoesFonteTextoLeitura, paletaDeFontes);

// Pega a opção selecionada inicial do menu COR-FUNDO-TELA
let selecionadoCorFundoTela = document.getElementsByClassName('corFundoTela')[0];

// Verifica se houve alteração na opcao COR-FUNDO-TELA
selecionadoCorFundoTela.addEventListener('change', exibeAlteracoesCorFundoTela);

// Pega a opção selecionada inicial do menu COR-FONTE-TEXTO-LEITURA
let selecionadoCorTextoLeitura = document.getElementsByClassName('corTextoLeitura')[0];

// Verifica se houve alteração na opcao COR-FONTE-TEXTO-LEITURA
selecionadoCorTextoLeitura.addEventListener('change', exibeAlteracoesCorTextoLeitura);

// Pega a opção selecionada inicial do menu TAMANHO-FONTE-TEXTO
let selecionadoTamanhoFonteTexto = document.getElementsByClassName('tamanhoFonte')[0];

// Verifica se houve alteração na opcao TAMANHO-TEXTO-LEITURA
selecionadoTamanhoFonteTexto.addEventListener('change', exibeAlteracoesTamanhoFonte);

// Pega a opção selecionada inicial do menu ESPAÇO-LINHAS-TEXTO
let selecionadoEspacoLinhasTexto = document.getElementsByClassName('espacoLinhasTexto')[0];

// Verifica se houve alteração na opcao ESPAÇO-LINHAS-TEXTO
selecionadoEspacoLinhasTexto.addEventListener('change', exibeAlteracoesEspacoLinhasTexto);

// Pega a opção selecionada inicial do menu FONTE-TEXTO-LEITURA
let selecionadoFonteTexto = document.getElementsByClassName('fonteTextoLeitura')[0];

// Verifica se houve alteração na opcao FONTE-TEXTO-LEITURA
selecionadoFonteTexto.addEventListener('change', exibeAlteracoesFonteTextoLeitura);

// Salva as preferências dos usuário
document.getElementById('btSalvaPreferencias').addEventListener('click', salvaPreferencias);

// Restaura o padrão original
document.getElementById('btRestauraPadrao').addEventListener('click', restauraPadrao);

// Identificação de elemento do botão//
const button = document.getElementById('generate');
// Evento de click do botão//
button.addEventListener('click', function( ) {

// Array - coleção de informações/curiosidades//
const curiosidades = [];
curiosidades[0]= 
"Sony(criadora da linha Playstation) é a empresa com mais consoles vendidips na história, com mais de 537,29 milhões de consoles vendidos.";
curiosidades[1]= 
"Cerca de 74,5% da população brasileira jogam video games.";
curiosidades[2]= 
"Brasil Game Show é a terceira maior feira de jogos do mundo(a primeira é a Gamescom, na Alemanha).";
curiosidades[3]= 
"Herobrine é um dos personagens mais icônicos e conhecidos atualmente. Isso se deve porque ele é uma lenda no jogo Minecraft.";
curiosidades[4]= 
"Jumpman foi o primeiro nome do Mario, sendo uma homenagem ao dono de um depósito que a Nintendo alugava.";
curiosidades[5]= 
"O recorde de tempo mais rápido do Super Mario World pertence ao americano SethBling, que conseguiu terminar o jogo em 41 segundos e 65 cenésimos.";
curiosidades[6]= 
"O jogo Devil May Cry 2 foi criado em cima do protótió do que seria Resident Evil 4";
curiosidades[7]= 
"Em 1993, Tetris foi o primeiro jogo a ir para fora da órbita terrestre, onde o cosmonauta russo Aleksandr A. Serberov levou um gameboy a bordo de uma Soyuz TM-17 até a estação espacial MIR.";
curiosidades[8]= 
"Durante a criação da personagem Lara Croft, protagonista da franquia Tomb Raider, originalmente se chamaria Laura Cruz, mas foi trocado por que os americanos não conseguiam pronunciar o nome.";
curiosidades[9]= 
"O ex-presidente Barack Obama comprou espaços de propaganda em 14 jogos diferentes mostrando o seu slogan Vote for change, onde foram exibidos nos jogos Madden, Nascar, Burnout Paradise, Skate...";
curiosidades[10]= 
"Em 2020 tivemos a pandemia do Covid-19, mas o jogo World of Warcaft, em 2005, teve sua própria pandemia virtual com a atualização 1.7.0 causada por bug com o debuff Currepted Blood que se espalhava para os pets, jogadores e NPCs.";
curiosidades[11]= 
"No Final Fantasy Legends 2 recebeu uma censura onde contrabandistas de ópio apareciem, mas por causa das severas políticas anti-drogas dos EstadoS unidos, foi exigido que os contrabandistas virassem vendedores de bananas.";
curiosidades[12]= 
"O primeiro console da história foi o Magnavox Odissey, criado em 1972.";
curiosidades[13]= 
"A franaquia Mario e Luigi é a masi rentável da história, arrecadando aproximadamente US$34 bilhões em 2019, em segundo vem Pokemon faturando US$19 bilhões e em terceiri a franquia Call of Duty com US$18 bilhões.";
curiosidades[14]= 
"O jogo mais vendido do Playstation 1 foi o Grand Turismo, vendendo mais de 100 milhões de cópias.";
curiosidades[15]= 
"Minecraft é o jogo mais vendido da história, com aproximadamente 176 milhões de cópias vendidas, ultrapassando o Tetris.";
curiosidades[16]= 
"O Playstation 5 quebrou um recorde da Sony vendendo mais de 10 milhões de cópias em menos de um ano de lançamento.";
curiosidades[17]= 
"Os personagens do Contra foram inspirados no Arnold Scwarzenegger e Sylvester Stalonne.";
curiosidades[18]= 
"O ex-advogado Jack Thompson mandou um email para o Bil Gates alegando que a Microsoft era responsável pelo massacre de Virginia Tech por causa do jogo Counter Strike, que nem era desenvolvido por eles.";
curiosidades[19]= 
"Estudo mostra que cirurgiões que jogam videogame tem um aumento de velociade de 27% e cometem 37% menos erros.";
curiosidades[20]= 
"Na Córeia do Sul é ilegal jogar videogames depois da meia-noite.";
curiosidades[21]= 
"O Mortal Kombat, lançado em 1992, foi o responsãvel pela criação do ESRB(Enterntainment Software Rating Board) que é o sistema responsável pelas classificações de placares nos Estados Unidos.";
curiosidades[22]=
 "O nome do protagonista de God Of War, Kratos, foi baseado no titã do poder e força da mitologia grega, Cratos.";
curiosidades[23]= 
"Counter Strike era originalmente um mod de Half Life, mas fez tanto sucesso que acabou virando um jogo próprio.";
curiosidades[24]= 
"O jogo Cuphead foi inteiramente desenhado a mão, fazendo com que artistas da Disney visitassem o estúdio do jogo.";
curiosidades[25]=
 "O criador da franquia Resident Evil, Shinji Mikami disse em entrevista que se o Resident Evil 4 saísse para qualquer console que não fosse o Gamecube ele cortaria sua cabeça... pouco tempo depois o jogo saiu para um port de Playstation 2.";
curiosidades[26]=
 "Os fanboys de cada empresa de videogame são chamados, respectivamente, de baratas (Nintendo) porcos(Playstation) e tarados(Xbox).";
curiosidades[27]= 
"Em 2013 na China, um homem contratou jogadores para que matassem o avatar do seu filho para que ele parasse de jogar.";
curiosidades[28]= 
"Robin Williams era um grande fã de games, tanto que seus filhos se chamavam Zelda(The legend of Zelda) e Cody (Final Fight).";
curiosidades[29]= 
"O jogo Ghost Recon de 2001 previu a invasão russa na Geórgia em 2008. ";

//Gerador de numeros aleatórios//
const aleatorio = Math.floor(Math.random() *31 ) + 1;

alert(aleatorio);

// adiciona a curiosidade no elemento
document.getElementById("result").innerHTML = curiosidades[aleatorio];
})

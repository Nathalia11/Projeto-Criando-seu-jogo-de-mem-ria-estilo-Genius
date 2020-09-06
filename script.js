let order = [];
let clickedorder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// criando ordem aleatoria de cores //

let shuffleorder = () => {
    let colororder = Math.floor(Math.random() * 4);
    order[order.length] = colororder;
    clickedorder = [];
    
    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// acende a proxima cor //
let lightColor = (element, Number) => {
    Number = Number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, Number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkorder = () => {
    for(let i in clickedorder) {
        if(clickedorder[i] != order[i]) {
            gameover();
            break;
        }
    }
    if(clickedorder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

// função para o clique do usuario //
let click = (color) => {
    clickedorder[clickedorder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkorder();
    }, 250); 
}

// função que retorna a cor //
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }        
}

// função para o proximo nível do jogo //
let nextLevel = () => {
    score++;
    shuffleorder();
}

//funcao para game over
let gameover = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedorder = [];

    playGame();
}

//funcao de inicio do jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//inicio do jogo
playGame();

// part of the code used as the basis of https://www.w3schools.com/jsref/met_document_createelement.asp //

const main_cards = document.querySelector('.main_cards');

const cards = [
    'imagem01',
    'imagem02',
    'imagem03',
    'imagem04',
    'imagem05',
    'imagem06',
    'imagem07',
    'imagem08',
    'imagem09',
    'imagem10',

];

function addCard () {
    const card = document.createElement('div');
    const front = document.createElement('div');
    const back = document.createElement('div');

    card.className = 'card';
    front.className = 'face front';
    back.className = 'face back';


    card.appendChild(front);
    card.appendChild(back);

    main_cards.appendChild(card);
}

const loadGame = () => {
    cards.forEach((card) => {
 console.log(card);
    });
}


loadGame();
addCard();


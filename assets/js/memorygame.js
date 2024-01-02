
// part of the code used as the basis of https://www.w3schools.com/jsref/met_document_createelement.asp //

const main_cards = document.querySelector('.main_cards');

// images array cards //
const animals = [
    '001',
    '002',
    '003',
    '004',
    '005',
    '006',
    '007',
    '008',
    '009',
    '010',

];

// part of the code used as the basis of https://dev.to/javascriptacademy/creating-a-memory-card-game-with-html-css-and-javascript-57g1 //

// targeting and add click event to turn cards //
const cardReveal = ({target}) => {
    target.parentNode.classList.add('card-reveal');
}

function addCard (animal) {
    const card = document.createElement('div');
    const front = document.createElement('div');
    const back = document.createElement('div');

    front.style.backgroundImage = `url('../assets/images/${animal}.jpg')`;

    card.className = 'card';
    front.className = 'face front';
    back.className = 'face back';


    card.appendChild(front);
    card.appendChild(back);
    card.addEventListener('click', cardReveal);

    main_cards.appendChild(card);
}


// part of the code used as the basis of https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort //
function loadGame() {

   const doubleCards = [...animals, ...animals]
   const sortCards = doubleCards.sort(() => Math.random() - 0.5);
   sortCards.forEach(function(animal) {
        const card = addCard(animal);
    });
}

loadGame();



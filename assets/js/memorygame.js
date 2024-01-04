
// part of the code used as the basis of https://www.w3schools.com/jsref/met_document_createelement.asp //
const main_cards = document.querySelector('.main_cards');
const userName = document.querySelector('.user');
const userTime = document.querySelector('.time');


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
let cardOne = '';
let cardTwo = '';


// function to check if the game end //
function endGame() {
    const end = document.querySelectorAll('.disabled');

    
    if (end.length === 20) {
        clearInterval(this.checkTime);
        alert(`You Win: ${userName.innerHTML} ! Your Time is :${userTime.innerHTML} !`);
    }
}


// function to compare two cards //
const compareCards = () => {
    const firstCard = cardOne.getAttribute('data-animals');
    const secondCard = cardTwo.getAttribute('data-animals');

    if (firstCard === secondCard) {

        cardOne.firstChild.classList.add('disabled');
        cardTwo.firstChild.classList.add('disabled');

        cardOne = '';
        cardTwo = '';

        endGame();
    } else {
        setTimeout(() => {
            cardOne.classList.remove('card-reveal');
            cardTwo.classList.remove('card-reveal');

            cardOne = '';
            cardTwo = '';
        }, 400);
    }
}


// targeting and add click event to turn cards //
const cardReveal = ({ target }) => {

    if (target.parentNode.className.includes('card-reveal')) {
        return;
    }

    if (cardOne === '') {
        target.parentNode.classList.add('card-reveal');
        cardOne = target.parentNode;
    } else if (cardTwo === '') {
        target.parentNode.classList.add('card-reveal');
        cardTwo = target.parentNode;


        compareCards();
    }


}


// function to add array imgs //
function addCard(animal) {
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
    card.setAttribute('data-animals', animal);
}


// part of the code used as the basis of https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort //
// function to load the game //
function loadGame() {

    const doubleCards = [...animals, ...animals]
    const sortCards = doubleCards.sort(() => Math.random() - 0.5);
    sortCards.forEach(function (animal) {
        const card = addCard(animal);
    });
}


const startClock = () => {

  this.checkTime =  setInterval(() => {
const liveTime = Number(userTime.innerHTML);
userTime.innerHTML = liveTime + 1;
    },1000);
}

window.onload = () => {
    const getName = localStorage.getItem('name');
    userName.innerHTML = getName;
    startClock();
    loadGame();
    
}

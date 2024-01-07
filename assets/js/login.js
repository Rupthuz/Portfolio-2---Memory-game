const input = document.querySelector(".login_input");
const button = document.querySelector(".login_button");
const form = document.querySelector(".login_page");
//const memoryGameRules = [
      "1. Find pairs of matching cards to earn points.",
      "2. Choose two face-down cards in each turn.",
      "3. If the cards make a pair, they are removed from the game.",
      "4. Otherwise, the cards are flipped face down again.",
      "5. The game ends when all pairs are found; the player with the most pairs wins."
    ];//
 

// function to validate input //
function inputValidator(event) {
 if(event.target.value.length > 2) {
    button.removeAttribute('disabled');
 } else {
    button.setAttribute('disabled', '');
 }
}


// part of the code used as the basis of https://www.w3schools.com/jsref/prop_win_localstorage.asp //
function submitValidator(event) {
    event.preventDefault();
    
   // alert(memoryGameRules);//
    localStorage.setItem('name', input.value);
    window.location = 'assets/memorygame.html';
}



input.addEventListener('input', inputValidator);
form.addEventListener('submit', submitValidator);
const input = document.querySelector(".login_input");
const button = document.querySelector(".login_button");
const form = document.querySelector(".login_page");

// function to validate input //
function inputValidator(event) {
   if(event.target.value.trim().length > 2) {
      button.removeAttribute('disabled');
   } else {
      button.setAttribute('disabled', '');
   }
  }

// part of the code used as the basis of https://www.w3schools.com/jsref/prop_win_localstorage.asp //
function submitValidator(event) {
    event.preventDefault();
    
    localStorage.setItem('name', input.value);
    window.location = 'assets/memorygame.html';
}

input.addEventListener('input', inputValidator);
form.addEventListener('submit', submitValidator);
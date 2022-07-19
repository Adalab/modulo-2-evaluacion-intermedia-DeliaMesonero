'use strict'
const input = document.querySelector('.js-input');
const btn = document.querySelector('.js-btn');
const tipsElement = document.querySelector('.js-clue');
let numberParagraph = document.querySelector('.js-try');

const getRandomNumber = (max) => {
    return Math.ceil(Math.random() * max);
    };
    const numberRandom = getRandomNumber(100);
    console.log(numberRandom);

function render(message){
    tipsElement.innerHTML = message;
}
function number (){
    const inputValue = parseInt (input.value);
    if( inputValue === numberRandom) {
        render('Has ganado campeona!!');
    } else if ( inputValue < 1 || inputValue > 100) {
        render ('El número debe estar entre 1 y 100');
    } else if ( inputValue < numberRandom) {
        render('Demasiado bajo');

    } else if( inputValue > numberRandom){
        render('Demasiado alto');
    }
}
let counter = 0;
function addCounter() {
  const valueNumber = input.value;
  if (parseInt(valueNumber) !== (numberRandom)) {
    counter += 1;
    numberParagraph.innerHTML = `Número de intentos: ${counter}`;
  }
  return counter;
}

function handleClick(ev) {
ev.preventDefault();
number();

addCounter();
    }

btn.addEventListener('click', handleClick);

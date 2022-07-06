'use strict'
console.log('holis');

const input = document.querySelector('.js-input');
const btn = document.querySelector('.js-btn');
const clue = document.querySelector('.js-clue');
let tryNumber = document.querySelector('.js-try');
let totalCounter = 0;


const getRandomNumber = (max) => {
    return Math.ceil(Math.random() * max);
    };
    const numberRandom = getRandomNumber(100);
    console.log(numberRandom);

function number (){
    const inputValue = parseInt (input.value);
    if( inputValue === numberRandom) {
        clue.innerHTML = 'Has ganado campeona!!';
    } else if ( inputValue < 1 || inputValue > 100) {
            clue.innerHTML = 'El número debe estar entre 1 y 100';
    } else if ( inputValue < numberRandom) {
        clue.innerHTML ='Demasiado bajo';

    } else if ( inputValue < 1 || inputValue > 100) {
            clue.innerHTML = 'El número debe estar entre 1 y 100';

    } else if( inputValue > numberRandom){
        clue.innerHTML = 'Demasiado alto';

    }
    }





let counter = 0;
function addCounter() {
  const valueNumber = input.value;
  if (parseInt(valueNumber) !== (numberRandom)) {
    counter += 1;
    tryNumber.innerHTML = `Número de intentos: ${counter}`;
  }
  return counter;
}


function handleClick(ev) {
ev.preventDefault();
number();

addCounter();

    }

btn.addEventListener('click', handleClick);

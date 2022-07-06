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
    console.log(getRandomNumber(100));

function number (){
    const inputValue = input.value;
    if( inputValue === getRandomNumber(100)) {
        clue.innerHTML = 'Has ganado campeona!!';
    } else if ( inputValue < getRandomNumber(100)) {
        clue.innerHTML ='Demasiado bajo';

    } else if( inputValue > getRandomNumber(100)){
        clue.innerHTML = 'Demasiado alto';

    }else if ( inputValue < 1 && inputValue > 100) {
        clue.innerHTML = 'El número debe estar entre 1 y 100';
    }
}
function total (btn){
    totalCounter = totalCounter + btn;
    return totalCounter;
    tryNumber.innerHTML = total;


}
let counter = 0;
function addCounter() {
  const valueNumber = input.value;
  if (parseInt(valueNumber) !== parseInt(getRandomNumber)) {
    counter += 1;
    tryNumber.innerHTML = `Número de intentos: ${counter}`;
  }
  return counter;
}

function handleClick(ev) {
ev.preventDefault();
number();
total();
addCounter();

    }

btn.addEventListener('click', handleClick);

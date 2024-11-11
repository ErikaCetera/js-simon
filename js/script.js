const formElem = document.getElementById("form-user")
const timerElem = document.getElementById("timer");
const imputElem = document.querySelectorAll("imput");
const btnElem = document.querySelector(".btn");
const randomNums = document.getElementById("random-numbs")


// Calcolo 5 numeri casuali

const randomNumbers = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
randomNums.innerHTML = randomNumbers(10000, 99999)

//  Conto alla rovescia di 30 secondi
let counter = 30;
const timercount = setInterval(function () {
    console.log(counter);
    counter--;
    timerElem.innerHTML = counter;
    if(counter === 0){
    randomNums.classList.add("d-none");
    formElem.classList.remove("d-none");
    clearInterval(timercount);
    }
}, 1000);

const 


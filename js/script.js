const formElem = document.getElementById("form-user")
const timerElem = document.getElementById("timer");
const inputsElem = document.querySelectorAll("input");
const btnElem = document.querySelector("submit");
const randomNums = document.getElementById("random-numbs")
const resultElem = document.getElementById("result")


// Calcolo 5 numeri casuali

const randomNumbers = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
randomNums.innerHTML = randomNumbers(10000, 99999);

//  Conto alla rovescia di 30 secondi
let counter = 30;
const timercount = setInterval(function () {
    console.log(counter);
    counter--;
    timerElem.innerHTML = counter;
    if (counter === 0) {
        randomNums.classList.add("d-none");
        formElem.classList.remove("d-none");
        clearInterval(timercount);
    }
}, 1000);

// All'invio del bottone conferma
formElem.addEventListener("submit", function (event) {
    event.preventDefault();

        let inputNumbs= [];
    for (let i = 0; i < inputsElem.length; i++) {
        const curInput = inputsElem[i];
        console.log(curInput.value);

        if (curInput.value.includes(randomNums)) {
            inputNumbs.push(curInput.value)
            resultElem.innerHTML = ("hai indovinato questi numeri:" + inputNumbs)

        } else {
            resultElem.innerHTML = ("Non hai indovinato nessun numero")
        }

    }

});

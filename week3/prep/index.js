
// Counter exercise ------------------------------------------------------
let counter = -1;
const increment = function() {
    counter += 1;
    const counterElement = document.querySelector("#counter");
    counterElement.innerHTML = counter;
}
const initButton = document.querySelector('#initialise');
initButton.addEventListener('click', increment);

const incrementButton = document.querySelector('#increment');
incrementButton.addEventListener('click', increment);


// Delay logging exercise ------------------------------------------------------
const delayedLog = function() {
    document.getElementById('delayedGreet').innerHTML = 'This text was delayed by 3 seconds';
}
const delayedButton = document.querySelector('#delay');
delayedButton.addEventListener('click', () => {
    setTimeout(delayedLog, 3000);
});

// DOM loading exercise ------------------------------------------------------

const callback = () => console.log('DOM fully loaded and parsed')

addEventListener("load", (event) => callback());

onload = (event) => callback();



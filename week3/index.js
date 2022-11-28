
// Click counter exercise ------------------------------------------------------
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

// Delay clicker logging exercise ------------------------------------------------------
const delayedLog = function() {
    document.getElementById('delayed-greet').innerHTML = 'This text was delayed by 3 seconds';
}
const delayedButton = document.querySelector('#delay');
delayedButton.addEventListener('click', () => {
    setTimeout(delayedLog, 3000);
});

// Page onload exercise ------------------------------------------------------
const callback = () => console.log('DOM fully loaded and parsed')

addEventListener("load", callback);

onload = (event) => callback();

//Mouse position & Mouse position online tool

let scheduled = false;
const mouseMoveCallback = (e) => {
    const mouseMoveElement = document.querySelector("#mouse-move");
    const mouseMovementXArray = [];
    const mouseMovementYArray = [];
    mouseMovementXArray.push(e.clientX);
    mouseMovementYArray.push(e.clientY);
    mouseMoveElement.innerHTML = `X: ${e.clientX}, Y: ${e.clientY}`;
    if (!scheduled) {
        scheduled = true;
        setTimeout(() => {
            const averageMouseMoveElement = document.querySelector("#average-mouse-move");
            averageMouseMoveElement.innerHTML =
                `Average X: ${mouseMovementXArray.reduce((a, b) => a + b, 0) / mouseMovementXArray.length}
                        Average Y: ${mouseMovementYArray.reduce((a, b) => a + b, 0) / mouseMovementYArray.length}`;
            scheduled = false;
        }, 20000);
    }
}

addEventListener("mousemove", mouseMoveCallback);



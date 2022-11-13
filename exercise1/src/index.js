function alertOnLoad() {
  // ...
  alert('Hello, from JS on load!');
  // ...
}
// alertOnLoad();

const rootDiv = document.querySelector('#root');

const myButton = document.createElement('button');
myButton.innerText = 'Click Me!';

// Add an event listener for the button's click event.
myButton.addEventListener('click', function () {
    const para = document.createElement('p');
    para.innerText = 'You clicked me!';
    rootDiv.appendChild(para);
});

rootDiv.appendChild(myButton);

// Logic for triggering and alert onclick.
function alertOnClick() {
  alert('Hello, from JS on click!');
}

const myAlertButton = document.createElement('button');
myAlertButton.innerText = 'Click Me to trigger an alert!';
rootDiv.appendChild(myAlertButton);

myAlertButton.addEventListener('click', function () {
    alertOnClick();
});


// Add onChange event listener.
const myInput = document.querySelector('input');
myInput.addEventListener('change', function (event) {
    const paragraphElement = document.querySelector('p');
    paragraphElement.innerText = event.target.value;
});

myInput.addEventListener('focus', function (event) {
    event.target.style.background = 'pink';
});

myInput.addEventListener('blur', function (event) {
    event.target.style.background = '';
});

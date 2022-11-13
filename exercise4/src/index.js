
let theme = 'light';

const button = document.querySelector('#themeSwitcher');
button.addEventListener('click', function (event) {
    if (theme === 'light') {
        theme = 'dark';
        document.body.classList.add('dark');
    } else {
        theme = 'light';
        document.body.classList.remove('dark');
    }
});


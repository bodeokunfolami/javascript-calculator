const screen = document.querySelector('#id_screen');
const buttons = document.querySelectorAll('input[type=button]');
const themeBtn = document.querySelector('#theme-btn');
const theme = document.querySelector('#theme');


const onButtonClick = (e) => {
    if (e.target.value === "=") {
        evaluate();
        return;
    } else if (e.target.value === "C") {
        clear();
        return;
    }
    const number = e.target.value;
    screen.value += number;
}

const clear = () => {
    screen.value = "";
}

const evaluate = (e) => {
    const result = eval(screen.value);
    screen.value = result;
}


buttons.forEach(button => {
    button.addEventListener('click', onButtonClick);
});


themeBtn.addEventListener('click', (e) => {
    if (theme.getAttribute('href').includes('dark.css')) {
        theme.href = "css/light.css";
        e.target.innerHTML = "Dark Mode 🌙";
    } else {
        theme.href = "css/dark.css";
        e.target.innerHTML = "Light Mode ☀️";
    }
});

screen.addEventListener('keydown', (e) => {
    let input = e.key;
    let regex = /\d+/g;
    let operatorRegex = /[+, \-, /, *, .]/g;
    if (!regex.test(input) && !operatorRegex.test(input) && input !== "Backspace") {
        e.preventDefault();
    }
})
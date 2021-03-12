let display = document.querySelector('#calculator');
let result = document.querySelector('.result');
let reset = document.querySelector('.reset');

let calculatorSelector = document.querySelectorAll('.target-btn');

calculatorSelector.forEach((calculator) => {
    calculator.addEventListener('click', () => {
        display.value = display.value + calculator.value;
    });
});

result.addEventListener('click', () => {
    if (display.value === '') {
        display.value = null;
    } else {
        display.value = eval(display.value);
    }
});

reset.addEventListener('click', () => {
    display.value = null;
});

document.addEventListener('keypress', (event) => {
    switch (event.key) {
        case '0':
            display.value = display.value + event.key;
            break;

        case '1':
            display.value = display.value + event.key;
            break;

        case '2':
            display.value = display.value + event.key;
            break;

        case '3':
            display.value = display.value + event.key;
            break;

        case '4':
            display.value = display.value + event.key;
            break;

        case '5':
            display.value = display.value + event.key;
            break;

        case '6':
            display.value = display.value + event.key;
            break;

        case '7':
            display.value = display.value + event.key;
            break;

        case '8':
            display.value = display.value + event.key;
            break;

        case '9':
            display.value = display.value + event.key;
            break;

        case '+':
            display.value = display.value + event.key;
            break;

        case '-':
            display.value = display.value + event.key;
            break;

        case '*':
            display.value = display.value + event.key;
            break;

        case '/':
            display.value = display.value + event.key;
            break;

        case '%':
            display.value = display.value + event.key;
            break;

        case '.':
            display.value = display.value + event.key;
            break;

        case '^':
            display.value = display.value + event.key;
            break;

        case '=':
            if (display.value === '') {
                display.value = null;
            } else {
                display.value = eval(display.value);
            }
            break;

        case 'c':
            display.value = null;
            break;

        default:
            console.log('another value');
    }
});

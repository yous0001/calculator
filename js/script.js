const display=document.getElementsByName("display")[0]
document.addEventListener('keydown',(e)=>{
    switch (e.key) {
        case '0':
            display.value += '0';
            break;
        case '1':
            display.value += '1';
            break;
        case '2':
            display.value += '2';
            break;
        case '3':
            display.value += '3';
            break;
        case '4':
            display.value += '4';
            break;
        case '5':
            display.value += '5';
            break;
        case '6':
            display.value += '6';
            break;
        case '7':
            display.value += '7';
            break;
        case '8':
            display.value += '8';
            break;
        case '9':
            display.value += '9';
            break;
        case '.':
            display.value += '.';
            break;
        case '*':
            display.value += '*';
            break;
        case '/':
            display.value += '/';
            break;
        case '-':
            display.value += '-';
            break;
        case '+':
            display.value += '+';
            break;

        case '=':
            display.value = eval(display.value);
            break;
        case 'Enter':
            display.value = eval(display.value);
            break;

        case 'Backspace':
            display.value = display.value.toString().slice(0,-1);
            break;

        case 'Delete':
            display.value ="";
            break;

        default:
            return;
    }
})

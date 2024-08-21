const display=document.getElementsByName("display")[0]
const buttons=document.getElementsByClassName("button")
const calculator=document.getElementById("calculator")
const container=document.getElementById("container")
let selector=false

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

document.getElementsByClassName("square")[0].addEventListener('click',()=>{
    Array.from(buttons).forEach((btn)=>{
        btn.style.width="60px";
        btn.style.borderRadius="0px"
    })
})
document.getElementsByClassName("rounded")[0].addEventListener('click',()=>{
    Array.from(buttons).forEach((btn)=>{
        btn.style.width="60px";
        btn.style.borderRadius="0.375rem"
    })
})
document.getElementsByClassName("rounded-circle")[0].addEventListener('click',()=>{
    Array.from(buttons).forEach((btn)=>{
        btn.style.width="60px";
        btn.style.borderRadius="50%"
    })
})
document.getElementsByClassName("rounded-pill")[0].addEventListener('click',()=>{
    Array.from(buttons).forEach((btn)=>{
        btn.style.width="90px ";
        btn.style.borderRadius="60rem"
    })
})
document.getElementsByClassName("rounded-two")[0].addEventListener('click',()=>{
    Array.from(buttons).forEach((btn)=>{
        btn.style.width="60px";
        btn.style.borderRadius="0 0.375rem"
    })
})


function openCloseSelector(){     
    if(!selector){
        document.getElementsByClassName("color-selecter")[0].style.transform ="translate(0px,-50%)"
        document.getElementById("gear").style.animation="rotate reverse 2s 1"
        selector=true
    }else{
        document.getElementsByClassName("color-selecter")[0].style.transform ="translate(94px,-50%)"
        document.getElementById("gear").style.animation="rotate normal 2s 1"
        selector=false
    }
}

document.getElementsByClassName("one")[0].addEventListener('click',()=>{
    document.getElementById("calculator").style.backgroundColor="#5D0E41"
    document.getElementsByClassName("icon-shape")[0].style.backgroundColor="#5D0E41"
    document.getElementById("container").style.backgroundColor="#FF204E"
})
document.getElementsByClassName("two")[0].addEventListener('click',()=>{
    document.getElementById("calculator").style.backgroundColor="#508D4E"
    document.getElementsByClassName("icon-shape")[0].style.backgroundColor="#508D4E"
    document.getElementById("container").style.backgroundColor="#F6E96B"
})
document.getElementsByClassName("three")[0].addEventListener('click',()=>{
    document.getElementById("calculator").style.backgroundColor="#3a4452"
    document.getElementsByClassName("icon-shape")[0].style.backgroundColor="#3a4452"
    document.getElementById("container").style.backgroundColor="#e3f9ff"
})
document.getElementsByClassName("four")[0].addEventListener('click',()=>{
    document.getElementById("calculator").style.backgroundColor="#36C2CE"
    document.getElementsByClassName("icon-shape")[0].style.backgroundColor="#36C2CE"
    document.getElementById("container").style.backgroundColor="#77E4C8"
})
document.getElementsByClassName("five")[0].addEventListener('click',()=>{
    document.getElementById("calculator").style.backgroundColor="#850F8D"
    document.getElementsByClassName("icon-shape")[0].style.backgroundColor="#850F8D"
    document.getElementById("container").style.backgroundColor="#C738BD"
})
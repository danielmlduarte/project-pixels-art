const COLOR_SELECTED = 'color selected';
const paletteBlack = document.getElementById('black');
paletteBlack.style.backgroundColor = 'black';
let selectColor = document.getElementsByClassName('selected')[0].style.backgroundColor;

function colorBlack(event) {
    selectColor = document.getElementById('black').style.backgroundColor;
    const selectedClass = document.getElementsByClassName('color');
    for (let index = 0; index < selectedClass.length; index += 1) {
        selectedClass[index].className = 'color';
    }
    const element = event;
    element.target.className = COLOR_SELECTED;
}

paletteBlack.addEventListener('click', colorBlack);

const paletteBlue = document.getElementById('blue');
paletteBlue.style.backgroundColor = 'blue';

function colorBlue(event) {
    selectColor = document.getElementById('blue').style.backgroundColor;
    const selectedClass = document.getElementsByClassName('color');
    for (let index = 0; index < selectedClass.length; index += 1) {
        selectedClass[index].className = 'color';
    }
    const element = event;
    element.target.className = COLOR_SELECTED;
}

paletteBlue.addEventListener('click', colorBlue);

const paletteRed = document.getElementById('red');
paletteRed.style.backgroundColor = 'red';

function colorRed(event) {
    selectColor = document.getElementById('red').style.backgroundColor;
    const selectedClass = document.getElementsByClassName('color');
    for (let index = 0; index < selectedClass.length; index += 1) {
        selectedClass[index].className = 'color';
    }
    const element = event;
    element.target.className = COLOR_SELECTED;
}

paletteRed.addEventListener('click', colorRed);

const palettePurple = document.getElementById('purple');
palettePurple.style.backgroundColor = 'purple';

function colorPurple(event) {
    selectColor = document.getElementById('purple').style.backgroundColor;
    const selectedClass = document.getElementsByClassName('color');
    for (let index = 0; index < selectedClass.length; index += 1) {
        selectedClass[index].className = 'color';
    }
    const element = event;
    element.target.className = COLOR_SELECTED;
}

palettePurple.addEventListener('click', colorPurple);

const pixels = document.getElementsByClassName('pixel');

function pixelClick(event) {
    const element = event;
    element.target.style.backgroundColor = selectColor;
}

for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', pixelClick);
}

const buttonClear = document.getElementById('clear-board');
function clear() {
    const pixelsClear = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixelsClear.length; index += 1) {
        pixelsClear[index].style.backgroundColor = 'white';
    }
}

buttonClear.addEventListener('click', clear);

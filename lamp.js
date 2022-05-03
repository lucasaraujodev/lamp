const turnOnOff = document.getElementById ('turnOnOff');
// const turnOn = document.getElementById ('turnOn');
// const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1;
}

function lampOn () {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff () {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}

function lampOnOff () {
    if (turnOnOff.textContent == 'Turn on') {
        lampOn();
        turnOnOff.textContent = 'Turn off';
    } else {
        lampOff();
        turnOnOff.textContent = 'Turn on';
    }
}

turnOnOff.addEventListener ('click', lampOnOff);
// turnOn.addEventListener ('click', lampOn);
// turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);
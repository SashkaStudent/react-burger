function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
}

function randomInt(max){
    return Math.floor(Math.random()*999999);
}

export {addLeadingZeros, randomInt};
function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
}

function randomInt(max){
    return Math.floor(Math.random()*max);
}

export {addLeadingZeros, randomInt};
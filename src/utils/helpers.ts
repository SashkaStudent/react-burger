function addLeadingZeros(num: number, totalLength: number) {
    return String(num).padStart(totalLength, '0');
}

function randomInt(max: number){
    return Math.floor(Math.random()*max);
}

export {addLeadingZeros, randomInt};
function getRandomInt (min, max) {
    let dif = max - min;
    return Math.trunc(Math.random() * dif) + min;
}
let randomInt = getRandomInt( 10, 200 );
console.log( 'Випадкове число: ' + randomInt );
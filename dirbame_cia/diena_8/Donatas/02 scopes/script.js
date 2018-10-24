
// ----- uzduotis A -----

function printDuomenys () {
    var vardas = 'Tomas';
    console.log(vardas);
}

printDuomenys();

// ----- uzduotis B -----

// console.log(vardas); ----- Klaida !!!

// ----- global && local -----

// ----- uzduotis -----

var katinas = 'juodas';

function printKatinas() {
    var katinas = 'baltas';
    console.log(katinas);
    console.log(this.katinas);
}

printKatinas();

function test2(){
    var katinas = 'baltas';
    console.log('1 katinas: ' + katinas);
    console.log('2 katinas: ' +this.katinas);
}

test2();

console.log('3 katinas: ' + katinas);

// ----- uzduotis -----

var xx = 10

function isvesti (xx){
    xx = 20;
    console.log('1 xx: ' + xx);
    console.log('2 xx: ' + this.xx);
}

console.log('3 xx: ' + xx);

// ----- kita uzduotis -----

var vardas = 'Jonas';

function myName(vardas){
    console.log('1 vardas: ' + vardas);
    console.log('2 vardas: ' + this.vardas);
}

myName('Petras');

// ----- teksto isvedimas -----
// ----- 1 uzduotis -----

function printAntraste(antraste){
    document.querySelector('.tekstas').innerHTML += antraste;
}

printAntraste('BMW pinga, nes daugeja');
printAntraste('Greik pageres orai');
printAntraste('Vasaros vis salteja');

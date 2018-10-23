// ----- 0. uzduotis

// a)

/*
var vardas1 = 'Tomas';
var vardas2 = 'Antanas';
if (vardas1 == vardas2) {
    console.log(vardas1, vardas2, ' abu vardai yra tokie patys');
}
else {
    console.log(vardas1, vardas2, ' abu vardai yra nevienodi');
}

// b)

if (vardas1 == 'Tomas') {
    console.log('Sveikas Tomai');
}
else if ( vardas2 == 'Tomas') {
    console.log('Sveikas Tomai');
}
else {
    console.log(' Nera Tomo ');
}

// c)

if (vardas1 == 'Tomas' &&  vardas2 == 'Karolis') {
    console.log('Vardai yra Tomas ir Karolis');
}
else {
    console.log('Vardai nera Tomas ir Karolis');
}

// d)

if (vardas1 == 'Tomas' || vardas2 == 'Karolis') {
    console.log('Vienas is vardu yra Tomas');
}
else {
    console.log('nei vienas is vardu nera Tomas');
}

// ----- 1 uzduotis -----

let userAge = 24;

if(userAge <= 7)  {
    console.log('pliusine varles');
}
else if( 7 < userAge  && userAge < 14 ) {
    console.log('Mini telefonai');
}
else if(14 <= userAge && userAge < 18) {
    console.log('new music app');
}
else if(18 <= userAge && userAge < 24) {
    console.log('stok i sauliu sajunga');
}
else if(24 <= userAge && userAge < 65) {
    console.log('pensijos kaupimas - uzsiregistruok');
}
else if(65 <= userAge) {
    console.log('kelione i birstona');
}

if (7 < userAge && userAge < 56) {
    console.log('sokoladiniai zuikuciai su 20% nuolaida');
}

// ----- 2 uzduotis -----

let name1 = 'Tomas';
let name2 = 'Paulius';
let name3 = 'Airidas';

let klientoVardas = name3;
if(name1 == klientoVardas) {
    console.log('Masinoms 10% nuolaida');
}
else if (name2 == klientoVardas) {
    console.log('Buitiniai technikai 30%');
}
else {
    console.log('5% nuolaida kelionems');
}


// ----- 3 uzduotis -----

let userType1 = 'bronze';
let userType2 = 'silver';
let userType3 = 'gold';

let userType = userType2;
if(userType1 = userType) {
    console.log('15% nuolaida');
}
else if(userType2 = userType) {
    console.log('30% nuolaida');
}
else {
    console.log('5% nuolaida');
}
*/

// ----- loops -----

// ----- 1 uzduotis -----


/*

let i;
let tekstas = '';

for (i=0; i<50; i++) {
    console.log('Azuolas' + i);
    tekstas = '<h2> Azuolas </h2>';
// document.querySelector('.azuolai').innerHTML += 'Azuolas <br>';
document.querySelector('article').innerHTML += tekstas;
}
*/
/*
var tekstas = 'azuolas';

function printAzuolas (medis){
    document.querySelector('h2').innerHTML += medis;
}

// printAzuolas('Azuolas');

for(var i=0; i<100; i++) {
    printAzuolas('h2 <br>');
}
*/

let manoFoto = " <img src='img/2.jpg' alt='logo' width='20%' height='auto'></img> ";
document.querySelector('.img').innerHTML += manoFoto;
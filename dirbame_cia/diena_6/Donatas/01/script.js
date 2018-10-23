/*

// _____ 1.1 uzduotis _____

function printKaina(){
    var kaina = 15.99;
    console.log( kaina );
}
printKaina();

// _____ 1.2 uzduotis _____

function printKainaTrys (kaina){
    console.log(kaina);
}

printKainaTrys(999);
printKainaTrys(13.49);
printKainaTrys(100.05);

// _____ 2.1 uzduotis _____

function pazymiuVidurkis(){
    var paz1 = 5;
    var paz2 = 10;
    var paz3 = 8;
    var paz4 = 6;
    var paz5 = 8;

    var vidurkis = (paz1+paz2+paz3+paz4+paz5)/5;
    console.log(vidurkis);
}

pazymiuVidurkis();

// _____ 2.2 uzduotis _____ ??????????  NESIGAVO

function pazymiuVidurkisVaiku(x1, x2, x3, x4, x5){
    var vidurkis = (x1+x2+x3+x4+x5)/5;
    console.log(vidurkis);
    document.querySelector('h1').innerHTML += 'Jono pazymiu vidukis: ' + vidurkis +'<br>';
}

pazymiuVidurkisVaiku(5, 10 , 8 , 6 , 8);

__________ I dalies pabaiga __________*/

// __________ II dalis __________ NESIGAVO
 
/*  NESIGAVO
var PSD = 10;

function alga(){
    var mokesciai = 1000/PSD;
    return mokesciai;
}
    console.log(mokesciai);

*/

// _____ 1 uzduotis _____
/*
var vardas = 'Tomas';

function getVardas (){
    return vardas;
}

document.querySelector('.vardas').innerHTML = getVardas();
*/

// _____ 2 uzduotis _____
/*
function getVardasPavarde(){
var vardas = 'Antanas ';
var pavarde = 'Tomauskas';
return vardas + pavarde;
}
var x = getVardasPavarde();
console.log(x);

/*



// _____ 3 uzduotis _____

function getPelnas (){
    var pajamos = 12500;
    var islaidos = 7500;
    var pelnas = pajamos-islaidos;
    return pelnas;
}

console.log(pelnas);


*/
/*
function getPelnas(){
    var pajamos = 12500;
    var islaidos = 18500;
    var pelnas = pajamos - islaidos;
    return pelnas;
}

var y = getPelnas();
console.log(y);
//document.querySelector('.pelnas').innerHTML += 'pelnas: ' + y;
//document.write('pelnas: ' + y );

*/
/*
var i;
for (i= 0; i<8; i++){
    console.log('Labas' + i);
}
*/

var txt = '';
for ( i = 0; i < 5; i++) {
    txt = txt + '#'; // txt +='#';
    console.log(txt);
}
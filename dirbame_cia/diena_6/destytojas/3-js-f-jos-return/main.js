console.log(   "Labas"  );

// 1 UZDUOTIS
// A) sukurti kintamaji "vardas" Tomas
// B) parasyti f-ja "getVardas()", kuri turi "return" zodeli ir grazina varda i iskveitimo vieta.
// C) patikrinti ar veikia f-ja

var vardas = "TOmas";

function getVardas() {
    return vardas;
}

var textas = " Raudonkepuraite daug keliavo ir sutiko " + getVardas() + " su kuriuo daug snekejosi  ";

console.log( textas );
// arba
console.log( getVardas() );
//arba
document.querySelector('h1').innerHTML = getVardas();
// arba
document.querySelector('h1').innerHTML += " <br> Sveiki, " + getVardas();


//

// 2 UZDUOTIS
// parasyti f-ja "getVardasPavarde()", kuri turi "return" zodeli ir grazina varda ir pavarde i iskveitimo vieta.
//  f-joje sukurti kintamaji   "pavarde" Tomauskas, "vardas" - Antanas
// patikrinti ar veikia f-ja

// sukurimas -f-jos
function getVardasPavarde() {
    var vard = "Antanas";    // local
    var pavard = "Tomauskas"; // local
    return vard + pavard;
}
var x = getVardasPavarde();  // iskvietimas f-jos
console.log(  x );


// 3 UZDUOTIS
// A) parasyti f-ja "getPelnas()", kuri turi "return" zodeli ir grazina apskaiciuota pelna
// B) f-joje sukurti kintamaji "pajamos" 12500
// B) f-joje sukurti kintamaji "islaidos" 7500
// B) f-joje apskaiciuoti pelna  ( pvz: pelnas = pajamos - islaidos)
// C) patikrinti ar veikia f-ja
function getPelnas() {
    var pajamos = 12500;
    var islaidos = 18500;
    var pelnas =  pajamos - islaidos;
    return pelnas;
}
// iskvietimas
var p = getPelnas();
console.log( "pelnas:" + p);



// 3.2 UZDUOTIS
// A) parasyti f-ja "getPelnas(pajamos, nuostoliai)", kuri turi "return" zodeli ir grazina apskaiciuota pelna
// B) f-joje apskaiciuoti pelna  ( pvz: pelnas = pajamos - nuostoliai)
// C) patikrinti ar veikia f-ja
function getPelnas2(x1, x2) {
    var pelnas =  x1 - x2;
    return pelnas;
}
var ieva    = getPelnas2(1000, 500);
var antanas = getPelnas2(600, 5);
var karolis = getPelnas2(1400, 660);
console.log( "ievos, antano ir karolio pelnas: " +ieva + ' ' + antanas + ' ' + karolis);

// 4 UZDUOTIS
// parasyti f-ja, kuri turi "return" zodeli.
// "getPazymiuVidurkis2(x1, x2, x3, x4, x5)"  f-ja apskaiciuoja vidurki is paduotu 5 menesiu pazymiu (ir grazina atsakyma i iskvietimo vieta! "return atskymas;")

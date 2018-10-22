console.log(   "Labas"  );


// 1 UZDUOTIS
// A) sukurti kintamaji "vardas" Tomas
// B) parasyti f-ja "getVardas()", kuri turi "return" zodeli ir grazina varda i iskveitimo vieta.
// C) patikrinti ar veikia f-ja

// var vardas = "Tomas";
//
// function getVardas(){
//   return vardas;
// }
//
// var tekstas = "<p>Raudonkepuraite daug keliavo ir sutiko" + getVardas() + "su kuriuo daug snekejosi</p>"
//
// console.log(tekstas);
//
// console.log(getVardas());
//
// document.querySelector('h1').innerHTML = getVardas();
//
// document.querySelector('h1').innerHTML += " <br> Sveiki, " + getVardas();

// 2 UZDUOTIS
// parasyti f-ja "getVardasPavarde()", kuri turi "return" zodeli ir grazina varda ir pavarde i iskveitimo vieta.
//  f-joje sukurti kintamaji   "pavarde" Tomauskas, "vardas" - Antanas
// patikrinti ar veikia f-ja

function getVardasPavarde(){
  var pavarde = "Tomauskas";
  var vardas = "Antanas";
  return vardas + " " + pavarde;
}
var x = getVardasPavarde();
  // console.log(pavarde);
  // console.log(vardas);
  document.querySelector('h1').innerHTML = getVardasPavarde();
  getVardasPavarde();

// 3 UZDUOTIS
// A) parasyti f-ja "getPelnas()", kuri turi "return" zodeli ir grazina apskaiciuota pelna
// B) f-joje sukurti kintamaji "pajamos" 12500
// B) f-joje sukurti kintamaji "islaidos" 7500
// B) f-joje apskaiciuoti pelna  ( pvz: pelnas = pajamos - islaidos)
// C) patikrinti ar veikia f-ja

function getPelnas() {
var pajamos = 12500;
var islaidos = 18500;
var pelnas = pajamos - islaidos;
return pelnas;
}
var p = getPelnas();
console.log("pelnas:" + p);
//console.log(getPelnas());

// 3.2 UZDUOTIS
// A) parasyti f-ja "getPelnas(pajamos, nuostoliai)", kuri turi "return" zodeli ir grazina apskaiciuota pelna
// B) f-joje apskaiciuoti pelna  ( pvz: pelnas = pajamos - nuostoliai)
// C) patikrinti ar veikia f-ja

function getPelnas2(x1, x2){
var pelnas = x1 - x2;
return pelnas;
}
var ieva = getPelnas2(1000, 500);
var antanas = getPelnas2(600, 5);
var karolis = getPelnas2(1400, 660);
//console.log(b);
console.log("ievos, antano ir karolio pelnas: " + ieva + ' ' + antanas + ' ' + karolis);

// 4 UZDUOTIS
// parasyti f-ja, kuri turi "return" zodeli.
// "getPazymiuVidurkis2(x1, x2, x3, x4, x5)"  f-ja apskaiciuoja vidurki is paduotu 5 menesiu pazymiu (ir grazina atsakyma i iskvietimo vieta! "return atskymas;")

function getPazymiuVidurkis2(x1, x2, x3, x4, x5){
  var pazymiuVidurkis = (x1 + x2 + x3 + x4 + x5) / 5;
  return pazymiuVidurkis;
}
//var c = getPazymiuVidurkis2;
console.log(getPazymiuVidurkis2(10,9,9,9,10));
getPazymiuVidurkis2();

// 5 UZDUOTIS
// A) sukurti h1 su tekstu viduje  (HTML faile)
// B) sukurti f-ja "getH1ElementoAukstis(), kuri su "return" grazina surenderinto h1 elemento auksti
// C) su CSS pakeisti h1 auksti, ir paziureti ar jusu f-ja veikia

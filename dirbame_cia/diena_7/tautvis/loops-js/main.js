//==============TEORIJA ++ / -- ==========
    // var x = 10;
    // x = x + 1;  // x = 11
    // x += 1;     // x = x + 1;

//=============FOR   LOOP====================
// teo:  https://www.w3schools.com/js/js_loop_for.asp
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// 1 UZDUOTIS
// isvesti 50 kartu zodi "Azuolas" i konsole  (! bandant tai padaryti, atsiras skaicius 50)
console.log(   "Labas"  );
let i;
let tekstas ="";
console.log(document.querySelector('.mano-azuolai')  );
for (i = 0; i < 50; i++) {
  // arba
  tekstas = i + "Azuolas <br>";
  document.querySelector('.mano-azuolai').innerHTML += tekstas;
}

// 1.2 UZDUOTIS
// isvesti 50 kartu zodi "<h2> Azuolas</h2> " i <article> elementa su  innerHTML pagalba
//console.log(document.querySelector('article')  );
for (i = 0; i < 50; i++){
 tekstas = i + "<h2>Aziuoliukas</h2>";
  document.querySelector('article').innerHTML += tekstas;
}
// 2.1 UZDUOTIS
// sukurti f-ja "printX(xx)" i browser langa (panaudojanti document.write arba innerHTML)

function printX(xx){
  for (i = 0; i < 12; i++)
  document.querySelector('body').innerHTML += xx;
}

printX("aaaaa");
printX("<img src=https://image.shutterstock.com/image-vector/horse-icon-vector-silhouette-450w-1027829341.jpg");

// 2.2 UZDUOTIS
// paleisti f-ja "printX(xx)" 100 kartu




// 2.3 UZDUOTIS
// paleisti f-ja "printX(xx)" 12 kartu ir atspausdinti <img ...
// skirtingius paveikslelius

// 4 UZDUOTIS
// A) sukurti f-jas piestiEilute(x); spausdintiStulpeli(x);
// B) nupiesti tuscia lentele paleidiznat f-jas (  antrastine eilute "vardas |  pavarde | amzius" - teks isvesti be f-jos)

//----------------------------
//vardas |  pavarde | amzius
//----------------------------
//|
//|
//|
//|
//|


// advance
// 5 UZDUOTIS
// sukurti f-ja, kuri apskaiciuos kiek uzdirbsime po 10 metu , jei pradzioje uzdirbdami 680, ir kai alga i menesi pakyla 1% (~6.8eur)
var kiekMenesiu = 10 * 12;
var menAtlyginimas = 680;
var algosPokytis = 1;  // 1%

// ==============SCSS============================

//========= local/global or Frog/Garden =======

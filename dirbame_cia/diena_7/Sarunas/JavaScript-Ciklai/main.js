console.log(   "Labas"  );

//==============TEORIJA ++ / -- ==========
    var x = 10;
    x = x + 3;  // x = 13
    x += 3;     // tas pats kad x = x + 3;
    x++;       //  tas pats kas x = x + 1;

//=============FOR   LOOP====================
// teo:  https://www.w3schools.com/js/js_loop_for.asp
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// 1 UZDUOTIS
// isvesti 50 kartu zodi "Azuolas" i konsole  (! bandant tai padaryti, atsiras skaicius 50)
var i;
var tekstas="";
for (i = 0; i < 50; i++){
  console.log("Azuolas" + i);
  // ARBA
  tekstas = i + "Azuolas <br>";
  document.querySelector(".mano-azuolai").innerHTML += tekstas;
}

// 1.1 UZDUOTIS
// isvesti i ekrana "<h3> Azuolas </h3>" su document.write arba innerHTML
document.querySelector("h3").innerHTML = " <b>Azuolas</b>";
// 1.2 UZDUOTIS
// isvesti 50 kartu zodi "<h2> Azuolas</h2> " i <article> elementa su  innerHTML pagalba
for (i = 0; i < 5; i++){
  tekstas = "<h2 class='bg-info mt-1'> Azuolas </h2>";
  document.querySelector('article').innerHTML += tekstas;
}
// 2.1 UZDUOTIS
// sukurti f-ja "printX(xx)", kuri  i browser langa atspausdins paduota "xx" teksta (panaudojanti document.write arba innerHTML)
function printX(xx){
  document.querySelector('h2').innerHTML +="<br>" + xx;
}
printX("LABAS VAKARAS");
// 2.2 UZDUOTIS
// paleisti f-ja "printX(xx)" 100 kartu
function printY(y){
  for (i = 0; i < 5; i++)
  document.querySelector('h4').innerHTML +="<br>" + y;
}
printY("LABAS RYTAS");
// 2.3 UZDUOTIS
// paleisti f-ja "printX(xx)" 12 kartu ir atspausdinti <img ...
//
var manoFoto = "<img src='images/images.jpg' alt='paveiksliukas'>";
function printZ(namoFoto){
  for (i = 0; i < 12; i++)
  document.querySelector('article').innerHTML += namoFoto;
}
printZ(manoFoto);
// 4 UZDUOTIS
// A) sukurti f-jas piestiEilute(x); spausdintiStulpeli(x);
// B) nupiesti tuscia lentele paleidiznat f-jas (  antrastine eilute "vardas |  pavarde | amzius" - teks isvesti be f-jos)

// ----------------------------
// vardas |  pavarde | amzius
// ----------------------------
// |
// |
// |
// |
// |


// advance
// 5 UZDUOTIS
// sukurti f-ja, kuri apskaiciuos kiek uzdirbsime po 10 metu , jei pradzioje uzdirbdami 680, ir kai alga i menesi pakyla 1% (~6.8eur)
// var kiekMenesiu = 10 * 12;
// var menAtlyginimas = 680;
// var algosPokytis = 1;  // 1%

// ==============SCSS============================

//========= local/global or Frog/Garden =======

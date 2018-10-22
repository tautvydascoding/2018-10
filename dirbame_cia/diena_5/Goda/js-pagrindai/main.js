console.log("Labas");

var miestas = "Londonas";
console.log(miestas);
// nepazins, jei bus console.log( Miestas );

var x = 10 / 20 * (5 + 1);
var y = Math.sin(30);
// nebaigta//

var salis = "Lietuva";
var tekstas;

tekstas = miestas + " " + salis; //Londonas Lietuva//
console.log(tekstas);

// jei nori, kad tarp zodziu butu tarpas, reikalingas " "//
// tai, kas yra tarp '', suprantama, kaip zodis, kuri reikes irasyti//


// uzduotis
// suskaiciuoti kokia jusu alga i rankas, jeigu:
// atlyginimas ant popieriaus 890
// o mokesciai:
// PSD 9%
// VSD 24% nuo puses atlyginimo
// sukurti 4,5 kintamuosius ir
// apskaiciuoti atlyginima i rankas

var psd = 0.09;
var vsd = 0.24;
var atlyginimas = 890;
var irankas = "i rankas";

console.log(irankas + " " + (atlyginimas + " " - atlyginimas * psd - (0.5 * atlyginimas) * vsd) + " " + "eur");


//  1 UZDUOTIS
// sukurti kintamuosius (ir jiems priskirti reiksmes):
// vardas, pavarde, amzius, atlyginimas
// ir panaudoti:
// console.log( vardas, pavarde);

// teo:
//  typeof( k ); f-ja kuri isveda kintamojo tipa
// console.log(    typeof(vardas)  );
// console.log(    typeof(amzius)  );

var vardas = "Tomas";
var pavarde = "Atomas";
var amzius = 20;
var atlyginimas = 1000;
console.log(vardas, pavarde);

typeof(vardas);
typeof(amzius);
console.log("vardo tipas yra:" + typeof(vardas));
console.log("amziaus tipas yra:" + typeof(amzius));

//  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" , kuri atspausdina i konsole pirmos uzduoties kintamuosius

function atspausdinti() {
  var vardas = "Tomas";
  var pavarde = "Atomas";
  var amzius = 20;
  // galima uzrasyti ir taip:
  // var tekstas = vardas + pavarde + amziaus;
  // console.log( tekstas);

  console.log(vardas, pavarde, amzius);
}
atspausdinti();
/* funkijos kintamuju nebuvo butina kurti*/

//  3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus "uzduotis 1" kintamajam - "atlyginimas")

function printMetinisPajamuDydis() {
  var metinespajamos = atlyginimas * 12;
  console.log("metines mano pajamos", metinespajamos, "eur");
}
printMetinisPajamuDydis();
printMetinisPajamuDydis();
// kiek kartu iskvieti funkcija, tiek isves i ekrana


//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius

var salis = "Lietuva";
var miestas = "Kaunas";
var adresas = "Savanoriu pr.";
var pastoKodas = "LT-46464";

function printAddressData() {
  var txt = adresas + " " + miestas + pastoKodas + salis;
console.log ( txt );
}

printAddressData();

//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");

function printTekstas (manoTekstas, x){
  console.log ("ivestas tekstas yra:" , manoTekstas , x , manoTekstas);
}
var txt = "raudonkepuraites istorija";
var naujas = "einu namo";


printTekstas (naujas, txt);

// 7 UZDUOTIS
// F-ja kuri paskaiciuoja trikampio ilgaja krastine (Pitagoro teorema)
// pitagoroTeorema(x, y)      x*x + y*y

function pitagoroTeorema (x,y){
  var trikampioIstrizaine = Math.sqrt(  Math.pow (x,2) + Math.pow (y,2) );
  console.log ("trikampio istrizaine lygi", trikampioIstrizaine  );

}
pitagoroTeorema (2,2);
pitagoroTeorema (3,3);

// 8 UZDUOTIS
// funkction atlyginimasPoMokesciu (atlyginimas ant popieriaus {
//
// }
// atlyginimasPoMokesciu (1000); // ievos
// atlyginimasPoMokesciu (1450); // Martyno
// atlyginimasPoMokesciu (2300); // Domo

function atlyginimasPoMokesciu ( atlyginimasAntPopieriaus, vardas){
  var psd = 9;
  var vsd = 24;
  var moketiPSD  = (atlyginimasAntPopieriaus * psd / 100);
  var moketiVSD = ( (atlyginimasAntPopieriaus/2) * vsd / 100);
  var iRankas = atlyginimasAntPopieriaus - moketiPSD - moketiVSD;
  // console.log(vardas, "PSD sumoketi:", moketiPSD);
  // console.log(vardas + "VSD moketi:" + moketiVSD);
  console.log(vardas, "i rankas", iRankas);
}
atlyginimasPoMokesciu (1000, "Ieva");
atlyginimasPoMokesciu (1450, "Martynas");
atlyginimasPoMokesciu (2300, "Domas" );

// koks atlyginimas ant popieriaus, jei i rankas:
// atlyginimasIRankas (1000, "ieva");
// atlyginimasIRankas (1450, "Martynas");

function atlyginimasIRankas (atlyginimasAntPopieriaus, vardas){
  var psd = 0.09;
  var vsd = 0.24;
  var atlyginimasAntPopieriaus = atlyginimasIRankas + atlyginimasIRankas*psd + atlyginimasIRankas*vsd; 
console.log(atlyginimasAntPopieriaus, "yra":);
} 
atlyginimasIRankas (1000, "ieva");
atlyginimasIRankas (1450, "Martynas" );

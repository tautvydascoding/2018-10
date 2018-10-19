console.log("Labas");


var miestas = "Londonas";
console.log(miestas);

var x = 10 / 20 * (5 + 1);
console.log(x);
var y = Math.sin(30);
console.log("sinusas");
console.log(y);


var salis = "Anglija";
var tekstas;

tekstas = miestas + " " + " " + salis; // Londonas Anglija
console.log(tekstas);

var atlyginimas = 890;
var psd = atlyginimas * 0.09; // %
var vsd = atlyginimas / 2 * 0.24; // %
var iRankas = atlyginimas - (psd + vsd);
console.log("I rankas : " + iRankas);


// 1 UZDUOTIS
// sukurti kintamuosius (ir jiems priskirti reiksmes):
// vardas, pavarde, amzius, atlyginimas
// ir panaudoti:
// console.log( vardas, pavarde);

// teo:
//  typeof( k ); f-ja kuri isveda kintamojo tipa
// console.log(    typeof(vardas)  );
// console.log(    typeof(amzius)  );

var vardas = "Tomas";
var pavarde = "Tomaitis";
var amzius = 100;
var atlyginimas = 500;
console.log(vardas + " " + pavarde);
console.log(typeof(vardas));
console.log(typeof(amzius));

// 2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" , kuri atspausdina i konsole pirmos uzduoties kintamuosius


function printVardasPavardeAmzius() {

  console.log(vardas + pavarde + amzius);
}
printVardasPavardeAmzius();

// 3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus "uzduotis 1" kintamajam - "atlyginimas")



function printMetinisPajamuDydis() {

  console.log("Metinis atlyginiams " + atlyginimas * 12);
}
printMetinisPajamuDydis();

//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius

var salis = "Lietuva";
var miestas = "Kaunas";
var adresas = "Misko g.";
var pastoKodas = 3100;
function printAddressData() {
  var txt = salis + ", " + miestas + ", " + adresas + ", " + pastoKodas;
  console.log( txt );
}
printAddressData();

// 5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");

function printTekstas(x) {
  console.log(x);
}
printTekstas("Jokubo istorijos");
printTekstas("Noriu Miego!");
// ------ ARBA ------- !!!
var istorija = "Kuo toliau i miska, tuo aiskiau, kad ne saslyku";
printTekstas(istorija);


// 6 UZDUOTIS
// F-ja kuri paskaiciuoja trikampio ilgaja krastine (Pitagoro teorema)
// pitagoroTeorema(x, y)      x*x + y*y


function pitagoroTeorema() {
  var x = prompt("Iveskite skaiciu");
  var y = prompt("Iveskite skaiciu");
  var z = Math.sqrt(x * x + y * y);
  console.log("Ilgoji trikampio krasine yra :" + z);
}
pitagoroTeorema();

// 8 UZDUOTIS

function atlyginimasPoMokesciu (atlyginimasAntPopieriaus){
  var atlyginimas = atlyginimasAntPopieriaus;
  var psd = atlyginimas * 0.09; // %
  var vsd = atlyginimas / 2 * 0.24; // %
  var iRankas = atlyginimas - (psd + vsd);
  console.log(iRankas);
}
atlyginimasPoMokesciu(890);
atlyginimasPoMokesciu(1450);
atlyginimasPoMokesciu(2300);

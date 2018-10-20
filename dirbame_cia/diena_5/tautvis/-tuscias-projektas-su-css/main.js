console.log("Labas");


// uzduotis
// suskaiciuoti kokia jusu alga i rankas, jeigu:
// atlyginimas ant popieriaus 890:
// o mokesciai:
// psd 9%
// VSD 24% nuo puses atlygnimo
// susikurti kintamuosius 4-5
// ir apkaiciuoti
//  ir apskaiciuoti atlyginima i rankas

var vardas = "Antanas";
var pavarde = "Pocius";
var atlyginimas = 890; // gerai -- // ERROR: NaN - not a number//
var amzius = 60;
var psd=890*0.9;
var vsd=890/2*0.24;
var iRankas= atlyginimas-psd-vsd;
var metai=12;
console.log(psd-vsd);





console.log( "vardo tipas yra:" + typeof (vardas));
console.log( "amzius tipas yra:" + typeof (amzius));





function printVardasPavardeAmzius() {
  var tekstas = vardas + " " + pavarde + " " + amzius;
  console.log (tekstas);
  // arba
console.log(vardas + " " +pavarde + " " + amzius);

}
printVardasPavardeAmzius(); //paleidimas f-jos




// uzduotys

//  1 UZDUOTIS
// sukurti kintamuosius (ir jiems priskirti reiksmes):
// vardas, pavarde, amzius, atlyginimas
// ir panaudoti:
// console.log( vardas, pavarde);

var vardas = "Tomas";
var pavarde = "Klebonas";
var amzius = "50";
var atlyginimas = 900;
console.log(vardas + " " +pavarde + " " + amzius);






// teo:
//  typeof( k ); f-ja kuri isveda kintamojo tipa
// console.log(    typeof(vardas)  );
// console.log(    typeof(amzius)  );

function vardas() {
  var tekstas = vardas + " " + pavarde + " " + amzius;
  console.log (metineAlga);

metineAlga();
}




//  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" , kuri atspausdina i konsole pirmos uzduoties kintamuosius


//  3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus "uzduotis 1" kintamajam - "atlyginimas")
function metineAlga() {

  var metinesPajamos = atlyginimas *12;
  console.log ();
}

//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius
var salis = "Lietuva";
var miestas = "Kaunas";
var adresas = "kovo11-osios32-84";
var pastoKodas = 54678;
function printAddressData(){

  var txt = salis + ", " + miestas + ", " + adresas + ", " +pastoKodas;
 console.log( txt );
}
printAddressData();
// ---- advance-----
//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");
function printTekstas( txt ){
console.log( txt );
}
printTekstas("gyvenimas");
printTekstas("noras");
// 7 UZDUOTIS
// F-ja kuri paskaiciuoja trikampio ilgaja krastine (Pitagoro teorema)
// pitagoroTeorema(x, y)      x*x + y*y
function pitagoroTeorema(x, y){
  var trikampioIstrozaine = Math.sqrt( Math.pow(x, 2) + Math.pow(y, 2) );

console.log(1, 3);
}
pitagoroTeorema("atsakymas");
// 8  udavinys
function atlyginimasPoMokesciu (atlyginimasAntPopieriaus) {
  var psd = 9;
  var vsd = 24;
  var visoMokesciu = (atlyginimasAntPopieriaus * psd / 100);
  console.log("PS sumoketi psd: " + visoMokesciu);
}


//==========================KOMANDINE (3-4h) Bootstrap && GIT=================
// ant lentos

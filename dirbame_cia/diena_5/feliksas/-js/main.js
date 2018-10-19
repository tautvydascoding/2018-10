console.log("Labas");




var miestas = "Kaunas";
console.log("miestas");

var salis = "Lietuva";
console.log("salis");

tekstas = miestas + salis;
console.log(miestas + salis);




var atlyginimasAntPopieriaus = 890;
console.log(890);
var psd = 9;
console.log(9);
var vsd = 24;
console.log(24);



tekstas = atlyginimasAntPopieriaus + psd + vsd;
console.log(atlyginimasAntPopieriaus + psd + vsd);




var vardas = "jonas";
console.log("jonas");
var pavarde = "jonaitis";
console.log("jonaitis");
var metai = 24;
console.log("metai");
var atlyginimas = 2400;
console.log(2400);

console.log(vardas + " " + pavarde + " " + metai + " " + atlyginimas);



function printvardaspavardeamziusmetai() {


  console.log(vardas + " " + pavarde + " " + metai + " " + atlyginimas);


}


//  1 UZDUOTIS
// sukurti kintamuosius (ir jiems priskirti reiksmes):
// vardas, pavarde, amzius, atlyginimas
// ir panaudoti:
// console.log( vardas, pavarde);


var vardas = "TOmas";
var pavarde = "Tomauskis";
var atlyginimas = 1000 / 2; // gerai
// var atlyginimas = "1000" / 2;  // ERROR:   NaN  - not a number
var amzius = 21;


// teo:
//  typeof( k ); f-ja kuri isveda kintamojo tipa
console.log("vardo tipas yra:" + typeof(vardas));
console.log("amzius tipas yra:" + typeof(amzius));

//  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" , kuri atspausdina i konsole pirmos uzduoties kintamuosius

function printVardasPavardeAmzius() {
  var tekstas = vardas + " " + pavarde + " " + amzius;
  console.log(tekstas);
  // ARBA
  // console.log(  vardas + " " + pavarde + " " + amzius );
}
printVardasPavardeAmzius(); // Paleidimas f-jos
printVardasPavardeAmzius(); // Paleidimas f-jos
printVardasPavardeAmzius(); // Paleidimas f-jos
printVardasPavardeAmzius(); // Paleidimas f-jos


//  3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus "uzduotis 1" kintamajam - "atlyginimas")

function printMetinisPajamuDydis() {
  var metinesPajamos = atlyginimas * 12;
  console.log(metinesPajamos);
}
printMetinisPajamuDydis();


//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius
var salis = "lietuva";
var miestas = "Kaunas";
var adresas = "kursiu g. 4";
var pastoKodas = "LT40043";

function printAdresasPilnas() {
  var txt = salis + " " + miestas + " " + adresas + " " + pastoKodas;
  console.log(txt);
}
printAdresasPilnas();


// ---- advance-----
//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");

function suma(skaicius1, skaicius2) {
  console.log("kaunoDiena" + skaicius1);

}
suma(1, 2);




// 7 UZDUOTIS
// F-ja kuri paskaiciuoja trikampio ilgaja krastine (Pitagoro teorema)
// pitagoroTeorema(x, y)      x*x + y*y

function pitagoroTeorema(x, y) {
  var trikampioIstrizaine = Math.sqrt(Math.pow(x, 2) + Math.pow(x, 2));
  console.log("trikampio istrizaine yras:" + trikampioIstrizaine);

}
pitagoroTeorema(2, 2);
pitagoroTeorema(3, 2);


//==========================KOMANDINE (3-4h) Bootstrap && GIT=================

function atlyginimasPoMokesciu( atlyginimasAntPopieriaus ) {
  var psd = 9;
  var vsd = 24;
  var moketiPsd = (atlyginimasAntPopieriaus * psd / 100);
  var moketiVsd =( (atlyginimasAntPopieriaus / 2) * vsd / 100);
  var visoMokesciu = ( atlyginimasAntPopieriaus * psd / 100);
  console.log( " sumoketi psd: " + visoMokesciu);

}
atlyginimasPoMokesciu(1000);
atlyginimasPoMokesciu(1450);
atlyginimasPoMokesciu(2300);

console.log(   "Labas"  );


//  1 UZDUOTIS
// sukurti kintamuosius (ir jiems priskirti reiksmes):
// vardas, pavarde, amzius, atlyginimas
// ir panaudoti:
// console.log( vardas, pavarde);


var vardas = "TOmas";
var pavarde = "Tomauskis";
var atlyginimas = 1000 / 2 ;  // gerai
// var atlyginimas = "1000" / 2;  // ERROR:   NaN  - not a number
var amzius  = 21;


// teo:
//  typeof( k ); f-ja kuri isveda kintamojo tipa
console.log(  "vardo tipas yra:" + typeof(vardas)  );
console.log(  "amzius tipas yra:" +  typeof(amzius)  );

//  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" , kuri atspausdina i konsole pirmos uzduoties kintamuosius

function printVardasPavardeAmzius() {
    var tekstas = vardas + " " + pavarde + " " + amzius;
    console.log( tekstas );
    // ARBA
    // console.log(  vardas + " " + pavarde + " " + amzius );
}
printVardasPavardeAmzius(); // Paleidimas f-jos
printVardasPavardeAmzius(); // Paleidimas f-jos
printVardasPavardeAmzius(); // Paleidimas f-jos
printVardasPavardeAmzius(); // Paleidimas f-jos


//  3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus "uzduotis 1" kintamajam - "atlyginimas")
function  printMetinisPajamuDydis() {
    var metinesPajamos = atlyginimas * 12;
    console.log( "metine mano pajamos:" + metinesPajamos );
    // console.log( "metine mano pajamos:", metinesPajamos, "tadas" );
}
printMetinisPajamuDydis(); // issaukem
printMetinisPajamuDydis(); // issaukem

//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius
var salis = "USA";
var miestas = "Wasingtonas";
var adresas = "black str. 2";
var pastoKodas = "AD45321";
function  printAdresasPilnas() {
    var txt = adresas + ", " + miestas + ", " + pastoKodas + ", " + salis;
    console.log(  txt  );
}
printAdresasPilnas();


// ---- advance-----
//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");

function  spausdintiTeksta( manoTekstas ) {
    console.log( "ivestas tekstas yra: " + manoTekstas );
}
spausdintiTeksta("Tomas anksti keliasi rytais"); // String - "Tomas anksti keliasi rytais"
// ARBA
var istorija = "Raudonkepuraite kartasi eina i miska"; // String
spausdintiTeksta( istorija );


// 7 UZDUOTIS
// F-ja kuri paskaiciuoja trikampio ilgaja krastine (Pitagoro teorema)
// pitagoroTeorema(x, y)      x*x + y*y ir is visko istraukti sakti
function pitagoroTeorema(x, y) {
    // var trikampioIstriziane = Math.sqrt(  x*x + y*y );
    // ARBA
    var trikampioIstrizaine = Math.sqrt(   Math.pow(x, 2) + Math.pow(y, 2)  );
    console.log( "trikampio istrizaine yra: " + trikampioIstrizaine);
}
pitagoroTeorema(2, 2);
pitagoroTeorema(3, 2);

// 8 UZDUOTIS
function atlyginimasPoMokesciu( atlyginimasANtPopieriaus, vardas) {
    var PSD = 9;
    var VSD = 24;
    var moketiPSD = (atlyginimasANtPopieriaus * PSD / 100);
    var moketiVSD = ((atlyginimasANtPopieriaus / 2) * VSD / 100);
    var iRankas = atlyginimasANtPopieriaus - moketiPSD - moketiVSD;
    // console.log( vardas + " sumoketi PSD: " + moketiPSD);
    // console.log( vardas + " sumoketi moketiVSD: " + moketiVSD);
    console.log(  vardas + " i rankas: " + iRankas);
}
atlyginimasPoMokesciu(1000, "Ievos");  // Ievos
atlyginimasPoMokesciu(1450, "Martynas"); // Martyno
atlyginimasPoMokesciu(2300, "Domas"); // Domo

//==========================KOMANDINE (3-4h) Bootstrap && GIT=================
// ant lentos

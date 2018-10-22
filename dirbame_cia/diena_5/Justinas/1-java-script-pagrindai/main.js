// console.log(   "Labas"  );
//
//
// var miestas="Londonas";
// console.log ( miestas );
//
//
//
// //
// var x = 10 /20 * (5 + 1);
// var y = Math.sin(30);
// console.log("Sinusas")
// console.log( y )
//
// var salis = "Lietuva";
// var tekstas;
//
// tekstas = miestas + " " + salis + " " + "Europa"; //Londonas Lietuva
// console.log( tekstas );

//uzduotis
//suskaiciuoti kokia jusu alga i rankas jeigu:
//atlyginimas ant popieriaus 890
//o mokesciai:
//PSD 9%
//VSD 24% nuo puses atlyginimo
//susikurti 4-5 kintamuosius
//ir apskaiciuoti atlyginima i rankas

var alga = 890;
var psd = 0.09;
var vsd = 0.24;
var puseAlgos = alga / 2;
var psdEurais = alga * psd; //80.1
var vsdEurais = puseAlgos * vsd; //106.8
console.log(vsdEurais);
var iRankas;
iRankas = alga - psdEurais - vsdEurais;
console.log("I rankas gausite" + " " +iRankas);

// function atspausdintiVarda() {
//   var vardas = "Tomas";
//   console.log(vardas);
// }
// atspausdintiVarda();


var vardas = "Tomas";
var pavarde = "Tomauskas";
var amzius = 50;
var atlyginimas = 1000;

var salis = "Lietuva";
var miestas = "Kaunas";
var adresas = "Kursiu g.7";
var pastoKodas = "AD12345";

var x = "Libas";

console.log(typeof(vardas));
console.log(typeof(amzius));

function printVardasPavardeAmzius() {
console.log(vardas, pavarde, amzius);
}
printVardasPavardeAmzius();

function printMetinisPajamuDydis() {
  var metinesPajamos = atlyginimas * 12;
  console.log("metines pajamos yra : ",metinesPajamos);
}
printMetinisPajamuDydis();

function printAddressData() {
  var txt = adresas + ", " + miestas + ", " + pastoKodas + ", " + salis;
  console.log(txt);
}
printAddressData();

function printTekstas( manoTekstas) {
console.log("ivestas tekstas yra:" + manoTekstas);
}
printTekstas( "Jokubo istorijos");

var istorija = "Raudonkepuraite buvo miske bet tik viena karta"
printTekstas(istorija)


function pitagoroTeorema(x, y) {
  var trikampioIstrizaine = Math.sqrt( Math.pow(x, 2) + Math.pow(y, 2) );
  // var trikampioIstrizaine = Math.sqrt(x*x + y*y);
  console.log("trikampio istrizaine yra:" + trikampioIstrizaine);
}
pitagoroTeorema(2, 2);
pitagoroTeorema(3, 2);

function atlyginimasPoMokesciu ( atlyginimasAntPopieriaus, vardas) {
var moketiPSD = (atlyginimasAntPopieriaus * psd / 100);
var moketiVSD = ((atlyginimasAntPopieriaus/2) * vsd / 100);
var iRankas = atlyginimasAntPopieriaus - moketiPSD - moketiVSD;
console.log(vardas + " sumoketi PSD: " + moketiPSD);
console.log(vardas + " sumoketi VSD: " + moketiVSD);
console.log(vardas + " i rankas: " + iRankas);
}
atlyginimasPoMokesciu(1000, "Ieva"); //Ieva
atlyginimasPoMokesciu(1450, "Martynas"); //Martyno
atlyginimasPoMokesciu(2300, "Domas"); //Domo

// 1UZDAVINYS

var vardas = "Jonas";
var pavarde = "Laurinaitis";
var amzius = 24;
var atlyginimas = 500;

console.log(vardas, pavarde, amzius, atlyginimas);

console.log(typeof(vardas));
console.log(typeof(pavarde));
console.log(typeof(amzius));
console.log(typeof(atlyginimas));


function atspausdintiDuomenis() {
  console.log(vardas, pavarde, amzius, atlyginimas);
}
atspausdintiDuomenis();

// 2UZDAVINYS


function printMetinisPajamuDydis() {
  pajamuDydis = atlyginimas * 12;
  console.log("metinis pajamu dydis " + pajamuDydis);
}
printMetinisPajamuDydis();

// 3UZDAVINYS

var salis = "Lietuva";
var miestas = "Kaunas";
var adresas = "Vinco Kreves pr.";
var pastoKodas = 70345;

function printAddressData() {
  console.log(salis, miestas, adresas, pastoKodas);
  var txt = adresas + " " + miestas + " " + pastoKodas + " " + salis;
  console.log( txt );
}
printAddressData();

// 4UZDAVINYS

function printTekstas(x) {
  console.log("ivestas tekstas yra: " + x);
}
printTekstas( "Jokubo istorijos");

// ------------

function suma(x, y) {
  var ats = x + y;
  console.log(ats);
}
suma(1, -8);

// 5UZDAVINYS

function pitagoroTeorema(x, y) {
  var teorema = Math.sqrt(x * x + y * y);
  // var teorema = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  console.log(teorema);
}
pitagoroTeorema(10, 3);


// function pitagoroTeorema() {
//   var x = prompt("Enter number");
//   var y = prompt("Enter number");
//   var teorema = Math.sqrt(x * x + y * y);
//   console.log(teorema);
// }
// pitagoroTeorema();

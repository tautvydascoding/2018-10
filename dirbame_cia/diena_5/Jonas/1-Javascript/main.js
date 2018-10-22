// kintamieji ir printas

console.log(   "Labas"  );

var miestas = "Londonas";
console.log("miestas");


var x = 10 / 20 * (5 + 1);
var y = Math.sin(30);
console.log("sinusas");
console.log( y );


var salis = "Lietuva";
var tekstas;

tekstas = miestas + " " + salis + " europa";
console.log(tekstas);

// uzduotis

var antPopieriaus = 890;
var psd = 10;
var vsd = 24;


psdEurais = (antPopieriaus * psd) / 100;
console.log(psdEurais);

vsdEurais = (antPopieriaus / 2) * 24 / 100;
console.log(vsdEurais);

galutinis = antPopieriaus - psdEurais - vsdEurais;
console.log("I rankas gaunsasi " + galutinis);

// Automatinis algos skaiciuoklis

function atlyginimasPoMokesciu(antPopieriaus) {
  var galutinis = antPopieriaus - ((antPopieriaus * 10) / 100) - ((antPopieriaus / 2) * 24 / 100);
  console.log("Suma gaunasi: " + galutinis);
}
atlyginimasPoMokesciu(2000);
atlyginimasPoMokesciu(1500);

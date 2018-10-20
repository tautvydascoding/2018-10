console.log("Labas");

var miestas = "Londonas ";
console.log(miestas);

var x = 10 / 20 * 5 + 1;
var y = Math.sin (30);
console.log("sinusas");
console.log(y);

var salis = "Lietuva ";
var tekstas;

tekstas = miestas + salis;
console.log(tekstas);

var zemynas = "Europa";

tekstas = miestas + salis + zemynas;
console.log(tekstas);

var atlyginimas = 890;
var psd = 9;
var vsd = 24;
var puseAtlyginimo = atlyginimas / 2;
var psdEurais = atlyginimas * psd / 100;
var vsdEurais = puseAtlyginimo * vsd / 100;
var iRankas;
iRankas = atlyginimas - psdEurais - vsdEurais;
console.log(iRankas);

function atspausdinkVarda(){
  var vardas = "Tomas";
  console.log(vardas);
}
atspausdinkVarda();

var vardas = "Tomas";
var pavarde = "Tomaitis";
var amzius = 99;
var alga = 1000;
console.log(vardas, pavarde, amzius);
console.log(    typeof(vardas)  );
console.log(    typeof(amzius)  );

function printVardasPavardeAmzius(){
  var vardas = "Tomas";
  var pavarde = "Tomaitis";
  var amzius = 99;
  console.log(vardas, pavarde, amzius);
}
printVardasPavardeAmzius();

function printMetinisPajamuDydis(){
  console.log(alga*12);
}
printMetinisPajamuDydis();

var salis = "Lietuva ";
var miestas = "Kaunas ";
var adresas = "Kursiu g. 7 ";
var pastoKodas = "LT-77777 ";
var addressData = (salis + miestas + adresas + pastoKodas);

function printAddressData(){
  console.log(addressData);
}
printAddressData();

var x = "Kaunas";

function printTekstas(x){
  console.log(x);
}
printTekstas("Jokubo istorijos");


function pitagoroTeorema(x, y){
  var x = x * x;
  var y = y * y;
  console.log("atsakymas", x + y);
}
pitagoroTeorema(8, 4);

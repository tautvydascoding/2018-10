console.log("Labas");



var miestas = "Londonas";
console.log(" fwf")

var x = 10 / 20 * ((5 + 1));
var y = Math.sin(30);
console.log("sinusas")
console.log(y);

var salis = "Lietuva";
var tekstas;

tekstas = miestas + " " + salis + "Europa";
// Londonas Lietuva " " - padaro tarpa

console.log(tekstas);


// Uzdavinys
// alga 890, mokesciai PSD 9% VSD 24%


var PSD = 9;
var VSD = 24;
var priesMokescius = 890;
var poMokesciu = priesMokescius - (priesMokescius / 100) * PSD - ((priesMokescius / 2) / 100) * VSD;


console.log("poMokesciu" + " " + poMokesciu);
// 





var vardas = "Tomas";
var pavarde = "Tomaitis";
var amzius = 45;
var atlyginimas = 777;



function printVardasPavardeAmzius() {
    var tekstas = vardas + pavarde + amzius + atlyginimas;
    console.log(tekstas);

}
printVardasPavardeAmzius();

function printMetinisPajamuDydis() {
    var metinesPajamos = atlyginimas * 12;
    console.log("metines pajamos:", metinesPajamos);

}

printMetinisPajamuDydis();

    var adresas = "bla bla 221-30";
    var pastoKodas = "ad11222";

function printAddressData() {

    var txt = salis + ", " + miestas + ", " + adresas + ", " + pastoKodas;
    console.log( txt );
}
printAddressData();


function printTekstas( manoTekstas ) {

 console.log("ivestas tekstas:" + manoTekstas ); 


}

printTekstas ("Tomas anskti keliasi");
var istorija = "Kas bus tas bus";

printTekstas (istorija);


// 

// var krastineA = 4;
// var krastineB = 7;

function pitagoras(krastineA, krastineB){
    return  Math.sqrt( Math.pow(krastineA, 2) + Math.pow(krastineB, 2) );
  }
  
  console.log(pitagoras(4,2));


  
  
 
 
 
 
 
function atlyginimasPomokesciu (atlyginimasAntPopieriaus, vardas) {

var PSD = 9;
var VSD = 24;
var visoMokesciu =  atlyginimasAntPopieriaus - (atlyginimasAntPopieriaus / 100) * PSD - ((atlyginimasAntPopieriaus / 2) / 100) * VSD;


console.log (vardas + " " + "i rankas:" + visoMokesciu);

}


  
atlyginimasPomokesciu(888, "Ievos");
atlyginimasPomokesciu(9999, "Tomas");
atlyginimasPomokesciu(456, "Gytis");
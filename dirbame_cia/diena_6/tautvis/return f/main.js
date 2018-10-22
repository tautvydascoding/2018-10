console.log(   "Labas"  );

// 1 UZDUOTIS
// A) sukurti kintamaji "vardas" Tomas
// B) parasyti f-ja "getVardas()", kuri turi "return" zodeli ir grazina varda i iskveitimo vieta.
// C) patikrinti ar veikia f-ja

var vardas = "Tomas";

function getVardas( x5, x2 ) {
    return 5 * 2;
}

var textas = " Raudonkepuraite daug keliavo ir sutiko " + getVardas() + " su kuriuo daug snekejosi  ";

console.log( textas );
// arba
console.log( getVardas() );
//arba
//document.querySelector('h1').innerHTML = getVardas();
// arba
//document.querySelector('h1').innerHTML += " <br> Sveiki, " + getVardas();


//
var pajamos = "12500"
var islaidos = "7500"
function skaiciuojupajamas (){
return pajamos-islaidos;

}
console.log (skaiciuojupajamas());

var pajamos = "6000";
var nuostoliai = "2000";
function apskaiciuoti (){
return pajamos-nuostoliai;
}
console.log( apskaiciuoti());

function skaiciuojupajamas1 (x1, x2){
var pajamos = x1 -x2;
return pelnas;
}
var ieva = skaiciuojupajamas1(1000.500);
var antanas = skaiciuojupajamas1(600, 5);
var karolis = skaiciuojupajamas1(1400, 660);
console.log( "ievos, antano ir karolio pelnas " + ieva + ' ' + antanas + ' ' + karolis );

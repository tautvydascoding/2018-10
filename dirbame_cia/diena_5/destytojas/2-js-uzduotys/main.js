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


//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius

// ---- advance-----
//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");



// 7 UZDUOTIS
// F-ja kuri paskaiciuoja trikampio ilgaja krastine (Pitagoro teorema)
// pitagoroTeorema(x, y)      x*x + y*y

//==========================KOMANDINE (3-4h) Bootstrap && GIT=================
// ant lentos

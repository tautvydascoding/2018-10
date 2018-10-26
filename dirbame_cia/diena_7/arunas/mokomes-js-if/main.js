console.log(   "   "  );

//   0 UZDUOTIS
// A)
// susikurti : vardas1 = "Tomas", vardas2 = "Antanas"
// patikrinti:
// jeigu vardai sutampa, i konsole pranesti apie tai
// jeigu vardai nesutampa - parasysi "vardai yra skirtingi"


/*
var vardas1 = "tomas";
var vardas2 = "antanas";
if (vardas1 == vardas2) {
    console.log(vardas1 + " " + vardas2 + " " + " abu vardai yra tokie patys ");
} else {
    console.log(vardas1 + " " + vardas2 + " " + " abu vardai yra NEVIENODI ");
}
*/



// B) 
// Jeigu vardas1 yra "Tomas" - pasisveikinti su juo

/*
let vardas1 = "tomas";  //deklaracija - susikurei kintamaji
let vardas2 = "antanas";  //inicializacija - priskiri pradine reiksme
if ( vardas1 == "tomas" ) {
    console.log ( "vardas1 yra Tomas" );
}

*/

// C)
// Patikrinti ar vardas1 yra "Tomas", IR butinai vardas2  yra "Karolis"

/*
if ( vardas1 == "tomas" && vardas2 == "karolis"  ) {
    console.log ( "vardai vienodi" );
    } else {
        console.log  ( "vardai nevienodi");
    }

*/



// D)
// Patikrinti ar bent vienas is vardu "Tomas"
// || - arba
/*
let vardas1 = "tomas"; //deklaracija - susikurei kintamaji
let vardas2 = "antanas"; //inicializacija - priskiri pradine reiksme
if ( (vardas1 == "tomas") || (vardas2 == "tomas") ) {
    console.log("vienas is vardu yra tomas");
    }
    else {
        console.log("nei vienas vardas ne tomas");
    }
*/
// 1 UZDUOTIS
// turesime vartotojo amziu
// var age = 24;
// pagal ji, turesiem isvesti tam tikra reklamos teksta


// Salygos:

// iki 7 metu
//      "Pliusines varles"
// nuo 7 iki 14
//      "Mini telefonai"
// nuo 14 iki 18
//      "new Music App"
// nuo 18 iki 24
//      "Stok i sauliu sajunga"
// nuo 24 iki 65
//      "Pensijos kaupimas - zusiregistruok"
// nuo 65
//      "kelione i Bristona"
// sunkesne:
//      (i 'if' vidu ideti papildoma 'if')
//      iki 7 metu ir nuo 65 metu papildomai isvesti "Sokoladiniai zuikuciai 20% nuolaida"

/*
let age = 64;

if ( age < 7 ) {
    console.log ( " pliusines varles " );
    } else if ( age < 14 ) {
            console.log ( " mini telefonai " );
        } else if ( age < 18 ) {
                console.log ( "new Music App" );
            } else if ( age < 24) {
                    console.log ( "stok y sauliu sajunga" );
                } else if ( age < 65 ) {
                        console.log (  " pensiju kaupimas - uzsiregistruok " );
                    } else if ( age === 65 || age > 65 ) {
                        console.log ( "akcija karstui 25%" );
                    }
*/

// 2 UZDUOTIS
// sukurti 3 vardus "Tomas", "Paulius", "Airidas"
// kai "if"-ui padauodame Toma - isvesti "Masinoms 10% nuolaida"
// kai "if"-ui padauodame Pauliu - isvesti "Buitinei technikai  30% nuolaida"
// kai "if"-ui padauodame bet ka kita - isvesti "5% nuolaida kelionems"





// 3 UZDUOTIS
// sukurti 3 kintamuosius (klientu tipus) "bronze", "silver", "gold"
// susikurti kintamaji 'klietoTipas' - kurio reiksme lyginsime
// kai 'klietoTipas' yra "bronze" - isvesti " 15% nuolaida"
// kai 'klietoTipas' yra "silver" - isvesti " 30% nuolaida"
// kai 'klietoTipas' yra   bet koks kitas - isvesti " 5% nuolaida  "

/*
let bronze = "Jums taikoma 15% nuolaida";
let silver = "Jums taikoma 30% nuolaida";
let gold = "Jums taikoma 50% nuolaida" ;
let klientoTipas = "x" ;

  nepadaryta
if  ( x = bronze ) {
    console.log ( bronze );
    }  else {
        if ( x = silver ) {
            console.log ( silver );
        } else {
            if ( x = gold  ) {
                console.log (gold  );
            } else {
                console.log ( "Jums taikoma 5% nuolaida");
        }
    }
}
*/

//=============FOR   LOOP====================
// teo:  https://www.w3schools.com/js/js_loop_for.asp
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// 1 UZDUOTIS
// isvesti 50 kartu zodi "Azuolas" i konsole  (! bandant tai padaryti, atsiras skaicius 50)

/*
let i;
let tekstas = " ";
for (i=0; i < 50; i++) {
    console.log ("azuolas" + i);
    tekstas = (i+"azuolas <br>" );
    document.querySelector("h1").innerHTML += tekstas;
    document.querySelector(".mano-azuolai").innerHTML += tekstas;
}
*/

// 1.1 UZDUOTIS
// isvesti i ekrana "<h3> Azuolas </h3>" su document.write arba innerHTML




// 1.2 UZDUOTIS
// isvesti 50 kartu zodi "<h2> Azuolas</h2> " i <article> elementa su  innerHTML pagalba
/*
for (i = 0; i < 5; i++) {
    tekstas =  " <h2 class= 'bg-info'> Azuolas </h2> " ;
    document.querySelector('article').innerHTML += tekstas;
}
*/

// 2.1 UZDUOTIS
// sukurti f-ja "printX(xx)", kuri  i browser langa atspausdins paduota "xx" teksta (panaudojanti document.write arba innerHTML)

/*
function printX(x) {
    document.querySelector('h1').innerHTML += "kaina yra:" + x + "<br>";
}
printX(15.99);
*/


// 2.2 UZDUOTIS
// paleisti f-ja "printX(xx)" 100 kartu

/*
for (i = 0; i < 100; i++) {
function printX(x) {
    document.querySelector('h1').innerHTML += "kaina yra:" + x + "<br>";
}
printX(15.99);
}
*/


// 2.3 UZDUOTIS
// paleisti f-ja "printX(xx)" 12 kartu ir atspausdinti <img ...
// 

/*
for (i = 0; i < 12; i++) {
let manoFoto = "<img src='lib/1.jpg' alt='foto'>";
    document.querySelector('.vardas').innerHTML += manoFoto;
}
*/

// 4 UZDUOTIS
// A) sukurti f-jas piestiEilute(x); spausdintiStulpeli(x);
// B) nupiesti tuscia lentele paleidiznat f-jas (  antrastine eilute "vardas |  pavarde | amzius" - teks isvesti be f-jos)

function piestiEilute (ilgis) {
    let eilute = " ";   // local
    for (var i =0; i<ilgis; i++) {
        eilute = eilute + "-";  // jei tik = tai eilute kiekviena cikla trins, jei taip kaip dabar tai vis dades po bruksneli
    }
console.log (eilute);   //jei piesti tik viena eilute, tai negali buti FOR cikle
}

piestiEilute( 20 );  // skaicius 20 nurodo kiek bruksneliu bus
piestiEilute( 100 ); // skaicius 20 nurodo kiek bruksneliu bus


// ----------------------------


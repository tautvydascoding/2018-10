console.log(   "Labas"  );




//=============IF====================
// 0 UZDUOTIS
// A)
// susikurti : vardas1 = "Tomas", vardas2 = "Antanas"
// patikrinti:
// jeigu vardai sutampa, i konsole pranesti apie tai
// jeigu vardai nesutampa - parasysi "vardai yra skirtingi"

let salis;             // deklaracija - susikurei kintamaji
let vardas1 = "Tomas"; // inicializacija - initialization // kintamajam  priskiri pradine rieksme
let vardas2 = "Antanas";

if (vardas1 == vardas2) {
    console.log( vardas1, vardas2 , " abu vardai yra toki patys");
} else {
    console.log( vardas1, vardas2 , " abu vardai yra NEVIENODI!!!");
}

// B)
// Jeigu vardas1 yra "Tomas" - pasisveikinti su juo
if (vardas1 == "Tomas") {
    console.log("vardas1 yra Tomas");
}
// C)
// Patikrinti ar varda1 yra "Tomas", IR butinai vardas2  yra "Karolis"
vardas1 = "Tomas";
vardas2 = "Karolis";
if (vardas1 == "Tomas" && vardas2 == "Karolis") {
    console.log("vardai yra: Tomas ir Karolis");
} else {
    console.log("vardai NERA Tomas ir Karolis");
}
// D)
// Patikrinti ar bent vienas is vardu "Tomas"
// || - arba
if (vardas1 == "Tomas" || vardas2 == "Tomas") {
    console.log("vienas is vardu yra Tomas ( "+ vardas1 + vardas2);
} else {
    console.log("tarp vardu nera Tomo (" + vardas1 + vardas2);
}

// 1 UZDUOTIS
// turesime vartotojo amziu
let age = 24;
// gapal ji, turesiem isvesti tam tikra reklamos teksta


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



// 2 UZDUOTIS
// sukurti 3 vardus "Tomas", "Paulius", "Airidas"
// susikurti kintamaji 'klietoVardas' - kurio reiksme lyginsime
// kai "if"-ui padauodame klietoVardas ir vardas1 - isvesti "Masinoms 10% nuolaida"
// kai "if"-ui padauodame klietoVardas ir vardas2 - isvesti "Buitinei technikai  30% nuolaida"
// kai "if"-ui padauodame bet ka kita - isvesti "5% nuolaida kelionems"
let name1 = "Tomas";
let name2 = "Paulius";
let name3 = "Airidas";
let klientoVardas =  "Paulius";

if( name1 == klientoVardas ) {
    console.log("Masinoms 10% nuolaida");
} else if (name2 == klientoVardas ) {
    console.log("Buitinei technikai  30% nuolaida");
} else {
    console.log("5% nuolaida kelionems");
}





//

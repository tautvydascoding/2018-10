console.log(   "Labas"  );

// =============IF====================
// 0 UZDUOTIS
// A)
// susikurti : vardas1 = "Tomas", vardas2 = "Antanas"
// patikrinti:
// jeigu vardai sutampa, i konsole pranesti apie tai
// jeigu vardai nesutampa - parasysi "vardai yra skirtingi"

let salis;  
// deklaracija - susikurei kintamaji
let vardas1 = "Tomas";
// inicializacija - kintamajam priskirta reiksme
let vardas2 = "Jonas";
if (vardas1 == vardas2) {
    console.log(vardas1, vardas2, " abu vardai tokie patys");
} else {
    console.log(vardas1, vardas2, "vardai yra nevienodi");
} 
    
// B) 
// Jeigu vardas1 yra "Tomas" - pasisveikinti su juo

if (vardas1 == "Tomas") {
    console.log(vardas1, "labas");
} 

// C)
// Patikrinti ar varda1 yra "Tomas", IR butinai vardas2  yra "Karolis"

if (vardas1 == "Tomas" && vardas2 =="Karolis") {
    console.log("vardai tinka");
} else {
    console.log("vardai netinka");
} 

// D)
// Patikrinti ar bent vienas is vardu "Tomas"
// || - arba
if (vardas1 == "neTomas" || vardas2 =="neTomas") {
    console.log("vienas is vardu yra Tomas");
} else {
    console.log("nei vienas is vardu netinka");
} 

// 1 UZDUOTIS
// turesime vartotojo amziu
// var age = 24;
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
let age = 5;
if (age === 7 || age <7 ){
    console.log("Pliusines varles");
} else if ( age >7 && age <14)  {
    console.log("Mini telefonai");
} else if ( age <18)  {
    console.log("new Music App");
} else if ( age == 18 || age <24)  {
    console.log("Stok i sauliu sajunga");
} else if ( age == 24 || age <65)  {
    console.log("Pensijos kaupimas - zusiregistruok");
} else if ( age == 65 || age > 65)  {
    console.log("kelione i Bristona");
} 

// 2 UZDUOTIS
// sukurti 3 vardus "Tomas", "Paulius", "Airidas"
// sukurti kintamaji KLientoVardas, kurio reiksme lyginsime 
// kai "if"-ui padauodame Toma - isvesti "Masinoms 10% nuolaida"
// kai "if"-ui padauodame Pauliu - isvesti "Buitinei technikai  30% nuolaida"
// kai "if"-ui padauodame bet ka kita - isvesti "5% nuolaida kelionems"

let name1 = "Tomas";
let name2 = "Paulius";
let name3 = "Airidas";
let KlientoVardas = name1;
if (name1==KlientoVardas) {
    console.log("Masinoms 10% nuolaida");
    } else if (name2 == KlientoVardas) { 
    console.log("Buitinei technikai  30% nuolaida");
} else { 
    console.log("5% nuolaida kelionems");
}

// 3 UZDUOTIS
// sukurti 3 kintamuosius (klientu tipus) "bronze", "silver", "gold"
// susikurti kintamaji 'klietoTipas' - kurio reiksme lyginsime
// kai 'klietoTipas' yra "bronze" - isvesti " 15% nuolaida"
// kai 'klietoTipas' yra "silver" - isvesti " 30% nuolaida"
// kai 'klietoTipas' yra   bet koks kitas - isvesti " 5% nuolaida  "
//


// isspresti namie
// let klientoTipas1 = "bronze"; 
// let klientoTipas2 = "silver"; 
// let klientoTipas3 = "gold";
// let Tipas = klientoTipas2;

// if (klientoTipas1===Tipas) {
//     console.log(" 15% nuolaida");
// } else if { (klientoTipas2===Tipas);
//     console.log(" 30% nuolaida");
// } else if { (klientoTipas3===Tipas);
//     console.log("5% nuolaida ");
// }    

//=============FOR   LOOP====================
// teo:  https://www.w3schools.com/js/js_loop_for.asp
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// 1 UZDUOTIS
// isvesti 50 kartu zodi "Azuolas" i konsole  (! bandant tai padaryti, atsiras skaicius 50)

// 1.1 UZDUOTIS
// isvesti i ekrana "<h3> Azuolas </h3>" su document.write arba innerHTML

// 1.2 UZDUOTIS
// isvesti 50 kartu zodi "<h2> Azuolas</h2> " i <article> elementa su  innerHTML pagalba

// 2.1 UZDUOTIS
// sukurti f-ja "printX(xx)", kuri  i browser langa atspausdins paduota "xx" teksta (panaudojanti document.write arba innerHTML)

// 2.2 UZDUOTIS
// paleisti f-ja "printX(xx)" 100 kartu

// 2.3 UZDUOTIS
// paleisti f-ja "printX(xx)" 12 kartu ir atspausdinti <img ...
// 

// 4 UZDUOTIS
// A) sukurti f-jas piestiEilute(x); spausdintiStulpeli(x);
// B) nupiesti tuscia lentele paleidiznat f-jas (  antrastine eilute "vardas |  pavarde | amzius" - teks isvesti be f-jos)

// ----------------------------
// vardas |  pavarde | amzius
// ----------------------------
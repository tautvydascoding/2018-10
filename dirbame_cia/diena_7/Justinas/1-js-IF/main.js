// =================if  teorija====================
// if ( true ) {
//     console.log("labas");
// }

// if (salyga) {
//     // jei true
//     //
//     //
// } else {
//     // jei false
// }


// if ( salyga ) {
//     // jei salyga tenkinama
// }
//
// if ( salyga ) {
//     // jei salyga tenkinama
// } else {
//     // jei salyga netenkinama  / priesingu atveju
// }
//
// if (salyga) {
//
// } else if (salyga) {
//
// } else {
//     // ?
// }

//=============IF====================
// 0 UZDUOTIS
// A)
// susikurti : vardas1 = "Tomas", vardas2 = "Antanas"
// patikrinti:
// jeigu vardai sutampa, i konsole pranesti apie tai
// jeigu vardai nesutampa - parasysi "vardai yra skirtingi"

let salis; //deklaracija - susikurei kintamaji
let vardas1 = "Tomas"; // inicializacija - kintamajam priskirta pradine reiksme
let vardas2 = "Karolis";

if (vardas1 == vardas2) {
    console.log( vardas1, vardas2 , ": abu vardai yra tokie patys ");
}else {
    console.log( vardas1, vardas2 , ": abu vardai yra NEVIENODI!!!");
}

// B)
// Jeigu vardas1 yra "Tomas" - pasisveikinti su juo
if (vardas1 == "Tomas") {
  console.log(vardas1, "Labas Tomai");
}else {
  console.log(vardas1, "Tu ne Tomas" );
}
// C)
// Patikrinti ar varda1 yra "Tomas", IR butinai vardas2  yra "Karolis"

if (vardas1 == "Tomas" && vardas2 == "Karolis") {
  console.log("Vardai yra ", vardas1, "ir", vardas2);
}else {
  console.log("Cia yra", vardas1, "ir Karolis");
}

if (vardas1 == "Tomas" || vardas2 =="Karolis") {
  console.log("vienas ir vardu yra Tomas", vardas1, vardas2);
}else {
  console.log("tarp vardu nera Tomo", vardas1, vardas2);
}

// D)
// Patikrinti ar bent vienas is vardu "Tomas"
// || - arba


// 1 UZDUOTIS
// turesime vartotojo amziu
let age = 66;
// pagal ji, turesiem isvesti tam tikra reklamos teksta
if ((age < 7) || (age > 65)) {
console.log("Pliusines varles", "ir", "Sokoladiniai zuikuciai 20% nuolaida");
} else if (age < 14) {
console.log("Mini telefonai");
} else if (age < 18) {
console.log("new Music App");
} else if (age < 24) {
console.log("Stok i sauliu sajunga");
} else if (age <= 65) {
  console.log("Pensijos kaupimas - uzsiregistruok");
} else if (age > 65) {
  console.log("kelione i Bristona", "ir", "Sokoladiniai zuikuciai 20% nuolaida");
}
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
// kai "if"-ui padauodame Toma - isvesti "Masinoms 10% nuolaida"
// kai "if"-ui padauodame Pauliu - isvesti "Buitinei technikai  30% nuolaida"
// kai "if"-ui padauodame bet ka kita - isvesti "5% nuolaida kelionems"

// 3 UZDUOTIS
// sukurti 3 kintamuosius (klientu tipus) "bronze", "silver", "gold"
// susikurti kintamaji 'klietoTipas' - kurio reiksme lyginsime
// kai 'klietoTipas' yra "bronze" - isvesti " 15% nuolaida"
// kai 'klietoTipas' yra "silver" - isvesti " 30% nuolaida"
// kai 'klietoTipas' yra   bet koks kitas - isvesti " 5% nuolaida  "
//
console.log("Labas");

//=============IF====================
// 0 UZDUOTIS
// A)
// susikurti : vardas1 = "Tomas", vardas2 = "Antanas"
// patikrinti:
// jeigu vardai sutampa, i konsole pranesti apie tai
// jeigu vardai nesutampa - parasysi "vardai yra skirtingi"

var vardas1 = "Tomas";
var vardas2 = "Antanas";

if (vardas1 == vardas2) {
  console.log(vardas1, vardas2, " Vardai yra tokie patys");
} else {
  console.log(vardas1, vardas2, "Vardai yra skirtingi");
}

// B)
// Jeigu vardas1 yra "Tomas" - pasisveikinti su juo
if (vardas1 == "Tomas") {
  console.log("Labas " + vardas1);
} else {
  console.log("Labanaktis");
}


// C)
// Patikrinti ar varda1 yra "Tomas", IR butinai vardas2  yra "Karolis"
if (vardas1 == "Tomas" && vardas2 == "Karolis") {
  console.log(vardas1, "tikrai Tomas", vardas2, "tikrai Karolis");
} else if (vardas1 == "Tomas" && vardas2 != "Karolis") {
  console.log(vardas1, "tikrai Tomas", vardas2, "tikrai NE Karolis, bet", vardas2);
}


// D)
// Patikrinti ar bent vienas is vardu "Tomas"
// || - arba
if (vardas1 == "Tomas" || vardas2 == "Tomas") {
  console.log("Vienas is ", vardas1, vardas2, "yra Tomas");
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
var age = 150;

if (age < 7 || age >= 65) {
  if (age < 7) {console.log("Pliusines varles");}
  console.log("Sokoladiniai zuikuciai 20% nuolaida");
} else if (age >= 7 && age <= 14) {
  console.log("Mini telefonai");
} else if (age >= 14 && age <= 18) {
  console.log("new Music App");
} else if (age >= 18 && age <= 24) {
  console.log("Stok i sauliu sajunga");
} else if (age >= 24 && age <= 65) {
  console.log("Pensijos kaupimas - uzsiregistruok");
} else if (age > 65) {
  console.log("Kelione i Birstona");
}


// 2 UZDUOTIS
// sukurti 3 vardus "Tomas", "Paulius", "Airidas"
// susikurti kintamaji "klientoVardas" - kurio reiksme:
// kai "if"-ui padauodame Toma - isvesti "Masinoms 10% nuolaida"
// kai "if"-ui padauodame Pauliu - isvesti "Buitinei technikai  30% nuolaida"
// kai "if"-ui padauodame bet ka kita - isvesti "5% nuolaida kelionems"
var name1 = "Tomas";
var name2 = "Paulius";
var name3 = "Airidas";

var klientoVardas = name1;

if (name1 == klientoVardas){
  console.log("Masinoms 10% nuolaida");
}else if (name2 == klientoVardas) {
  console.log("Buitinei technikai  30% nuolaida");
}else {
    console.log("Buitinei technikai  30% nuolaida");
}
// 3 UZDUOTIS
// sukurti 3 kintamuosius (klientu tipus) "bronze", "silver", "gold"
// susikurti kintamaji 'klietoTipas' - kurio reiksme lyginsime
// kai 'klietoTipas' yra "bronze" - isvesti " 15% nuolaida"
// kai 'klietoTipas' yra "silver" - isvesti " 30% nuolaida"
// kai 'klietoTipas' yra   bet koks kitas - isvesti " 5% nuolaida  "
//
var x = "bronze";
var y = "silver";
var z = "gold";
var klientoTipas = x;

if (x == klientoTipas){
  console.log("15% nuolaida");
}else if (y == klientoTipo) {
  console.log(" 30% nuolaida");
}else {
    console.log("5% nuolaida");
}

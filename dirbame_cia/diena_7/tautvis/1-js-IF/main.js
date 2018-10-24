console.log(   "Labas"  );


// 0 UZDUOTIS
// A)
// susikurti : vardas1 = "Tomas", vardas2 = "Antanas"
// patikrinti:
// jeigu vardai sutampa, i konsole pranesti apie tai
// jeigu vardai nesutampa - parasysi "vardai yra skirtingi"


let vardas1 = "Tomas";
let vardas2 = "Antanas";
if (vardas1 == vardas2) {
  console.log(vardas1, "" + vardas2 + "abu vardai yra tokie patys");
}else {
  console.log(vardas1, vardas2 + " " + "yra nevienodi");
}


// B)
// Jeigu vardas1 yra "Tomas" - pasisveikinti su juo


if (vardas1 == "Tomas"){
  console.log("vardas1 yra tomas");
}
// C)
// Patikrinti ar varda1 yra "Tomas", IR butinai vardas2  yra "Karolis"

if(vardas1 == "Tomas" ){
  console.log("taip yra tomas");
}
if(vardas2 == "Karolis"){
  console.log("ne nera Karolis");
}else {
  console.log("ne nera Karolis");
}
// D)
// Patikrinti ar bent vienas is vardu "Tomas"
// || - arba
if(vardas1 || vardas2 =="Tomas"){
  console.log("taip yra Tomas");
}
// 1 UZDUOTIS
// turesime vartotojo amziu
// var age = 24;
// gapal ji, turesiem isvesti tam tikra reklamos teksta
let amzius = 14;

if(amzius<7){
  console.log("pliusines varles");
}
if(amzius >= 7 && amzius <= 14){
  console.log("mini telefonai");
}
else if(amzius >=14 && amzius <=18){
  console.log("new music app");
}
else if(amzius >=18 && amzius <=24){
  console.log("stok i sauliu sajunga");
}
else if(amzius >=65){
console.log("kelione i Birstona");
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





// 3 UZDUOTIS
// sukurti 3 kintamuosius (klientu tipus) "bronze", "silver", "gold"
// susikurti kintamaji 'klietoTipas' - kurio reiksme lyginsime
// kai 'klietoTipas' yra "bronze" - isvesti " 15% nuolaida"
// kai 'klietoTipas' yra "silver" - isvesti " 30% nuolaida"
// kai 'klietoTipas' yra   bet koks kitas - isvesti " 5% nuolaida  "





let name = "bronze";
let name1 = "silver";
let name2 = "gold"

let klientoVardas = name1;
if ( name1 == klientoVardas ) {
   console.log("15% nuolaida");
 } else if (name1 == klientoVardas) {
   
 }

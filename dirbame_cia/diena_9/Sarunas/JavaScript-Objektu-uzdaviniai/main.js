console.log(   "Labas"  );
$('h1').css('color', 'pink');
// PRISIMINTI TEORIJA
var vardas = "";    // inicialisation (kintamojo kurimo metu, reiksmes priskyrimas)
var zmogus; // undefined
// console.log( mama );  // not defined

//===========================================
// 1 UZDUOTIS:
// sukurti mokinio objekta: vardas, pavarde, kelintokas, mokinio matematikos pazymiai (6, 5, 9 , 10, 8)
// (ir priskirti reiksmes pvz: 'Jurgis', "Jurgauskas", 7)
var mokinys = {
  vardas : "Jurgis",
  pavarde : "Jurgauskas",
  klase : 15,
  pazymiai : [6, 5, 9, 10, 8]
};

// 1.1 UZDUOTIS
// atspauzdinti visus duomenis
console.log("Vardas :" + mokinys.vardas);
console.log("Pavarde :" + mokinys.pavarde);
console.log("Klase :" + mokinys.klase);
console.log("Matematikos pazymiai :" + mokinys.pazymiai);
// UZDUOTIS 1.2
// PAKEISTI : klase i sekancia
mokinys.klase++;
console.log("Nauja mokinio klase: " + mokinys.klase);
// UZDUOTIS 1.2.1
// if patikrinimas: jei mokinys yra 13-tokas - isveskite teksta: "mokinys pabaige mokykla", jeigu mokinys yra penktokas  - "pabaige pradine mokykla"
// pakeisti: visus 6 pazymius
// prideti nauja f-ja begu(), kuri isves i console 'bugu begu'
// prideti nauja kintamaji: miestas = 'kaunas'
if (mokinys.klase > 13){
  if (mokinys.klase === 5){
    console.log("Mokinys pabaige pradine mokykla");
  }
  console.log("Mokinys pabaige mokykla");
}else {
  console.log("Mokinys jau greit baigs mokykla");
}
mokinys.pazymiai = [10, 8, 6, 3, 5, 7];
console.log("Nauji mokynio pazymiai: " + mokinys.pazymiai);



// UZDUOTIS 1.3
// isvesti pakeistus duomenis
// paleisti f-ja "begu()"

// 2 UZDUOTIS: sukurti 2-u atskirus  objektus:
// A) tevas : vardas(string), pavarde(string), vaikas(object)
// B) vaikas:  vardas (string), klase(number)
// 2.1) priskirti "vaikas" objekta - tevo kintamajam vaikas  (kintamajam)
var tetis = {
  vardas : "Juozas",
  pavarde : "Juozaitis",
  vaikas : {}
};
var vaikas = {
  vardas: "Ieva",
  pavarde: "Juozaite"
};
console.log("visas objektas" , tetis);
console.log("visas objektas" , vaikas);
// 3 UZDUOTIS
// sukurti  objekto "darbuotojas" construktoriu. Objektas darbuotojas: nr, vardas, pavarde, alga
// 3.1 sukurti pora darbuotoju ir atspausdinti ju duomenis

//============3=pvz: construktorius =====
// function Car(dSkaicius, spalva, greitis) {
//     this.numberOfDoors = dSkaicius;
//     this.color = spalva;
//     this.maxSpeed = greitis;
// }
//
// // objekto kurimas
// var AudiTT  = new Car(2, "red", 280);
// var Audi100 = new Car(5, "black", 200);

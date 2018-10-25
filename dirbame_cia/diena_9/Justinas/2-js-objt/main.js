console.log(   "Labas"  );
$('h1').css('color', 'pink');

let objektas = "";  //string
let a = {};  //object
let b = ["tomas", "matvydas"]; //array && object

b.push("ieva");  //ideda i masyvo gala
b.push("angele");

console.log("masyvas b ", b);

let ilgis = b.lenght;
b[ilgis] = "Romas";

console.log("masyvas b ", b);
b.pop(); // istrina is masyvo galo
console.log("istrynem paskutini ", b);

b.unshift("priekis"); //idejimas i masyvo prieki
console.log("idejom i prieki ", b);

//$('h1') suranda visus visus h1 elementus
$('h1').click(function(event) {
console.log("mane paspaudei");
});

let mokykla = {
  adresas : "Kaunas, Kruonio 13",
  klasiuKiekis : 18,
  darbuotojai : ["Agne", "Ainius", "Ponas Direktorius"]
};

console.log("mokyklos adresas yra: " + mokykla.adresas);
console.log("klasiu kiekis yra: " + mokykla.klasiuKiekis);
console.log("mokykloje dirba: " + mokykla.darbuotojai[0]);
console.log("mokykloje dirba: " + mokykla.darbuotojai[1]);
console.log("mokykloje dirba: " + mokykla.darbuotojai[2]);

// PRISIMINTI TEORIJA
var vardas = "";    // inicialisation (kintamojo kurimo metu, reiksmes priskyrimas)
var zmogus; // undefined
// console.log( mama );  // not defined

//===========================================
// 1 UZDUOTIS:
// sukurti mokinio objekta: vardas, pavarde, kelintokas, mokinio matematikos pazymiai (6, 5, 9 , 10, 8)
// (ir priskirti reiksmes pvz: 'Jurgis', "Jurgauskas", 7)

let mokinys = {
  vardas: "Tomas",
  pavarde: "Antanaitis",
  kelintokas: 7,
  matPazymiai: [6, 5, 9 , 10, 8]
};

// 1.1 UZDUOTIS
// atspauzdinti visus duomenis
console.log("objektas yra:", mokinys);
console.log("vardas:", mokinys.vardas);
console.log("pavarde:", mokinys.pavarde);
console.log("klase:", mokinys.kelintokas);
console.log("Matematikos pazymiai yra:", mokinys.matPazymiai);
// UZDUOTIS 1.2
// PAKEISTI : klase i sekancia
mokinys.kelintokas ++;
console.log(mokinys.kelintokas);
// UZDUOTIS 1.2.1
// if patikrinimas: jei mokinys yra 13-tokas - isveskite teksta: "mokinys pabaige mokykla", jeigu mokinys yra penktokas  - "pabaige pradine mokykla"
if () {
  
}
// pakeisti: visus 6 pazymius
// prideti nauja f-ja begu(), kuri isves i console 'bugu begu'
// prideti nauja kintamaji: miestas = 'kaunas'
// UZDUOTIS 1.3
// isvesti pakeistus duomenis
// paleisti f-ja "begu()"

// 2 UZDUOTIS: sukurti 2-u atskirus  objektus:
// A) tevas : vardas(string), pavarde(string), vaikas(object)
// B) vaikas:  vardas (string), klase(number)
// 2.1) priskirti "vaikas" objekta - tevo kintamajam vaikas  (kintamajam)


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

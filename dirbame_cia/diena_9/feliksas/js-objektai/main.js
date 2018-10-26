console.log(   "Labas"  );


$('h1').css('color', 'yellow');

let mokykla = {
       adresas : "Kaunas, Kruonio 12",
       klasiuKiekis: 18,
       darbuotojai: ["Agne" , "Ainius" , "Dirikas"]

};
console.log(mokykla);
console.log("adresas:" + mokykla.adresas );
console.log("klasiuKiekis:" + mokykla.klasiuKiekis );
console.log("darbuotojai:" + mokykla.darbuotojai );
console.log("darbuotojai:" + mokykla.darbuotojai [1]);
console.log("darbuotojai:" + mokykla.darbuotojai [2]);
console.log("darbuotojai:" + mokykla.darbuotojai [0]);
// PRISIMINTI TEORIJA


//===========================================
// 1 UZDUOTIS:
// sukurti mokinio objekta: vardas, pavarde, kelintokas, mokinio matematikos pazymiai (6, 5, 9 , 10, 8)
// (ir priskirti reiksmes pvz: 'Jurgis', "Jurgauskas", 7)
mokinys = {
   Vardas : "Arunas",  //===notdefined// reiskia truksta kabuciu vardui !!!
   pavarde : "Petrauskas",
   kelintokas : 7,
   matematikosPazymiai: [6, 5, 9 , 10, 8]

};
console.log( mokinys );
console.log("Vardas:" + mokinys.Vardas );
console.log("pavarde:" + mokinys.pavarde);
console.log("kelintokas:" + mokinys.kelintokas);
console.log("matematikosPazymiai:" + mokinys.matematikosPazymiai);
// 1.1 UZDUOTIS
// atspauzdinti visus duomenis

// UZDUOTIS 1.2
// PAKEISTI : klase i sekancia
// UZDUOTIS 1.2.1
// if patikrinimas: jei mokinys yra 13-tokas - isveskite teksta: "mokinys pabaige mokykla", jeigu mokinys yra penktokas  - "pabaige pradine mokykla"
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


//============3=pvz: construktorius =====
function Car(dSkaicius, spalva, greitis) {
     this.numberOfDoors = dSkaicius;
     this.color = spalva;
     this.maxSpeed = greitis;
  }

// // objekto kurimas
 var AudiTT  = new Car(2, "red", 280);
var Audi100 = new Car(5, "black", 200);


 console.log("visas objektas AudiTT:" , AudiTT);
 console.log("visas objektas AudiTT:" , AudiTT);

console.log(   "Labas"  );

let b= [ "tomas", "mantvydas" ];

b.push ( "ieva");  //ideda i masyvo gala
b.push ( "angele");  //ideda i masyvo gala

console.log( "masyvas b", b);

let ilgis = b.length;
b [ ilgis ] = "Romas";

b.pop;  //istrina is masyvo galo
console.log( "masyvas b", b);

b.unshift ("priekis");  //idejimas i masyvo prieki
console.log( "idejome i prieki", b);

// $ ('h1')  //suranda visus h1 elementus

// $('h1').click (function (event) {
//     console.log( "mane paspaudei");
//   }); 


let mokykla = {
    adresas: "Kaunas, Kruonio 13", 
    klasiuKiekis: 18,
    darbuotojai: [ "Agne", "Ainius", "Direktorius"]
};

//isvesti visus duomenis atskirai (ir masyva atskirose eilutese)

console.log(" Klasiu kiekis yra: " + mokykla.klasiuKiekis);
console.log(" Adresas  yra: " + mokykla.adresas);
console.log(" darbuotojo 1 vardas : " + mokykla.darbuotojai [0]);
console.log(" darbuotojo 2 vardas : " + mokykla.darbuotojai [1]);
console.log(" darbuotojo 3 vardas : " + mokykla.darbuotojai [2]);



// 1 UZDUOTIS:
// sukurti mokinio objekta: vardas, pavarde, kelintokas, mokinio matematikos pazymiai (6, 5, 9 , 10, 8)
// (ir priskirti reiksmes pvz: 'Jurgis', "Jurgauskas", 7)

let mokinys = {
    vardas: "Tomas", 
    pavarde: "Atomas",
    kelintokas: 4,
    matPazymiai: [6, 5, 9 , 10, 8], 
}
// 1.1 UZDUOTIS
// atspauzdinti visus duomenis

console.log("objektas yra: " + mokinys );
console.log("vardas " + mokinys.vardas );
console.log("Pavarde " + mokinys.pavarde );
console.log("Kelintokas " + mokinys.kelintokas );
console.log("Matematikos pazymiai " + mokinys.matPazymiai );

// UZDUOTIS 1.2
// PAKEISTI : klase i sekancia

mokinys.kelintokas ++;
console.log("perkelti i kita klase " + mokinys.kelintokas ); 

// UZDUOTIS 1.2.1
// if patikrinimas: jei mokinys yra 13-tokas - isveskite teksta: "mokinys pabaige mokykla", jeigu mokinys yra penktokas  - "pabaige pradine mokykla"
if (mokinys.kelintokas > 12) { 
console.log( " mokinys pabaige mokykla ");
} else if (mokinys.kelintokas === 5) { 
console.log( " mokinys yra penktokas ");
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


let tetis = {
    vardas: "Juozas",
    pavarde: "Juozaitis",
    vaikas: {}
} 

let vaikas = {
    vardas: "Ieva",
    pavarde: "Juozaite"
} 

console.log("Visas objektas ", tetis);
console.log("visas objektas", vaikas);

// 2.1) priskirti "vaikas" objekta - tevo kintamajam vaikas  (kintamajam)
tetis.vaikas = vaikas
//nebaigta

// 3 UZDUOTIS
// sukurti  objekto "darbuotojas" construktoriu. Objektas darbuotojas: nr, vardas, pavarde, alga
// 3.1 sukurti pora darbuotoju ir atspausdinti ju duomenis

// ============3=pvz: construktorius =====
function Car(dSkaicius, spalva, greitis) {
    this.numberOfDoors = dSkaicius;
    this.color = spalva;
    this.maxSpeed = greitis;
}

// objekto kurimas
var AudiTT  = new Car(2, "red", 280);
var Audi100 = new Car(5, "black", 200);

console.log("visas objektas ", AudiTT );
console.log("visas objektas ", Audi100);













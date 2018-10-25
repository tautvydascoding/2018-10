console.log(   "Labas"  );


$('h1').css('color', 'pink');

let objektas = ""; // string
let a = {}; // object
let b = ["tomas", "mantvydas"]; // array && object

b.push(  "ieva");   // ideda i masyvo gala
b.push(  "angele");

console.log(   "masyvas b " , b);
//
// google "w3 js push()

let ilgis = b.length;
b[  ilgis ] = "Romas";

console.log(   "masyvas b " , b);
b.pop(); // istrina is masyvo galo
console.log(   "istrynem paskutini " , b);

b.unshift("priekis");  // idejimas i masyvo prieki
console.log(   "idejome i prieki " , b);

// $('h1')  // suranda visus visus h1 elemntus
$('h1').click(function(event) {
     console.log("mane paspaukei");
});



let mokykla = {
        adresas : "Kaunas, Kruonio 13",
        klasiuKiekis: 18,
        darbuotojai: ["Agne", "Ainius", "Ponas Direktorius"]
};
// uzduotis isvesti visus duomenis atskirai ( ir masyva atskirose eilutese)
// pakeisti klasiu kieki i 15
console.log( "Klasiu kiekis yra: " +  mokykla.klasiuKiekis  );
console.log( "adresas kiekis yra: " +  mokykla.adresas  );
console.log( "darbuotojo 1 vardas: " +  mokykla.darbuotojai[0]  );
console.log( "darbuotojo 2 vardas: " +  mokykla.darbuotojai[1]  );
console.log( "darbuotojo 3 vardas: " +  mokykla.darbuotojai[2]  );

//==============uzduotys=============
// 1
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
        pavarde: "ANtanaitis",
        kelintokas: 7,
        matPazymiai: [6, 5, 9 , 10, 8]
};
// 1.1 UZDUOTIS
// atspauzdinti visus duomenis
console.log(   "objektas yra:", mokinys  );
console.log(  "vardas: " + mokinys.vardas );
console.log(  "klase: " + mokinys.kelintokas );

// UZDUOTIS 1.2
// PAKEISTI : klase i sekancia
mokinys.kelintokas++;
console.log(  "klase po pakeitimo: " + mokinys.kelintokas );

// UZDUOTIS 1.2.1
// if patikrinimas: jei mokinys yra 13-tokas - isveskite teksta: "mokinys pabaige mokykla", jeigu mokinys yra penktokas  - "pabaige pradine mokykla"

if (mokinys.kelintokas > 12) {
    console.log( "mokinys pabaige mokykla");
} else if (mokinys.kelintokas === 5) {
    console.log( "pabaige pradine mokykla");
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

let tetis = {
    vardas : "Juozas",
    pavarde: "Juozaitis",
    vaikas: { } //object
}
let vaikas = {
    vardas : "ieva",
    pavarde: "Juozaitaite"
}
console.log( "visas objektas:" , tetis );
console.log(  "visas objektas:" ,vaikas );
// 2.1
tetis.vaikas = vaikas;
// tetis.vaikas = 200; //numbet
console.log( "po pakeitimo" );
console.log( "visas objektas:" , tetis );
console.log(  "visas objektas:" ,vaikas );

// 3 UZDUOTIS
// sukurti  objekto "darbuotojas" construktoriu. Objektas darbuotojas: nr, vardas, pavarde, alga
// 3.1 sukurti pora darbuotoju ir atspausdinti ju duomenis

//============3=pvz: construktorius =====
function Car(dSkaicius, spalva, greitis) {
    this.numberOfDoors = dSkaicius;
    this.color = spalva;
    this.maxSpeed = greitis;
    this.x = 4;
}

// objekto kurimas
var AudiTT  = new Car(2, "red", 280);
var Audi100 = new Car(5, "black", 200);
var Audi90 = new Car(5, "blue", 200);
var Audi110 = new Car(5, "res", 220);

console.log( "visas objektas audiTT :" , AudiTT);
console.log( "visas objektas audi 100:" , Audi100);



//

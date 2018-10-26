console.log(   "Labas"  );

/*
let objektas = "  "  // cia kintamasis string
let a = { };  // object
let b = ["Saulius", "Jonas" ];  //array && object

b.push( "Ieva");  // y kintamaji b ymeti papildoma reiksme  // visada ydeda y masyvo gala
b.push( "Agne");  //


let ilgis = b.length;   // dar vienas budas kaip galima ydeti nauja reiksme kintamajam . Reiksme dedama y masyvo gala
b[ ilgis ] = "Romas";

console.log("masyvas b", b);
b.pop();  //istrina is galo paskutine reiksme
console.log("masyvas b", b);


b.unshift ("priekis");  //ydeda elementa y masyvo prieki
console.log("masyvas b", b);

$("h1").click(function(event) {
    console.log("mane paspaudei");
});
*/

/*
let mokykla = {
    adresas : "Kaunas, Vilko g. 9",
    klasiuKiekis: 18,
    darbuotojai: ["Agne", "Ainis", "Ruta"]
};


//uzduotis
//isvesti visus duomenis atskirai (ir masyva atskirose eilutese)

console.log(mokykla.adresas);
console.log(mokykla.klasiuKiekis);
console.log(" mokyklos darbuotojai", mokykla.darbuotojai [0] );
console.log(" mokyklos darbuotojai", mokykla.darbuotojai [1] );
console.log(" mokyklos darbuotojai", mokykla.darbuotojai [2] );

*/

// PRISIMINTI TEORIJA
// var vardas = ""; // inicialisation (kintamojo kurimo metu, reiksmes priskyrimas)
// var zmogus; // undefined
// console.log( mama );  // not defined

//===========================================
// 1 UZDUOTIS:
// sukurti mokinio objekta: vardas, pavarde, kelintokas, mokinio matematikos pazymiai (6, 5, 9 , 10, 8)
// (ir priskirti reiksmes pvz: 'Jurgis', "Jurgauskas", 7)

let mokinys = {
    vardas: "Juozas",
    pavarde: "Antanaitis",
    kelintokas: 7,
    matPazymiai: [6, 5, 9, 10, 8]
};


// 1.1 UZDUOTIS
// atspauzdinti visus duomenis
/*
console.log("Mokinio vardas", mokinys.vardas);
console.log("Mokinio pavarde", mokinys.pavarde);
console.log("Mokinio matematikos pazymiai", mokinys.matPazymiai);
console.log("Mokinio klase", mokinys.kelintokas);
*/

// UZDUOTIS 1.2
// PAKEISTI : klase i sekancia
/*
mokinys.kelintokas++; // prideda 1 prie esancios klases
console.log("Mokinio klase perkelta", mokinys.kelintokas);
*/
// UZDUOTIS 1.2.1
// if patikrinimas: jei mokinys yra 13-tokas - isveskite teksta: "mokinys pabaige mokykla", jeigu mokinys yra penktokas  - "pabaige pradine mokykla"

if (mokinys.kelintokas > 12) {
    console.log("mokinys pabaige mokykla");
} else if  (mokinys.kelintokas === 5)  {
    console.log("mokinys pabaige pradine mokykla");
}   else {
    console.log("sekmes moksluose");
}

// pakeisti: visus 6 pazymius

mokinys.vardas = "Marcius";

console.log( mokinys );

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
//     this.numberOfDoors = dSkaicius;  //butina yrasyti zodeli this.  kitaip kintamieji nebus sukuriami
//     this.color = spalva;
//     this.maxSpeed = greitis;
// }
//
// // objekto kurimas
// var AudiTT  = new Car(2, "red", 280);       // kintamasis AudiTT per zodeli new pakeiciamas y nauja objekta kuriam aprasymas sudedamas pagal
// var Audi100 = new Car(5, "black", 200);     // funcion car isdestyma 

// gaunamas atsakymas: AudiTT numberOfDoors 2, color "red", maxSpeed 280

// toki konstruktoriu susirasius gali greitai susikurti naujus kintamuosius nerasydamas kiekvienam nauja ilga aprasyma


console.log(   "Labas"  );


$('h1').css('color', 'pink');



let piestukine = {}; // tuscias
let namas = {
aukstai: 4,
kambariai:12,
adresas: "pramones pr.150",
gyvntojai: ["Tomas", "Martynas"],
griuti: function(data){
  //kada grius data ir dauk kitu kintamuju
}
};
//:
//aukstai = 5; //negerai!!!
//namas.aukstai = 5;///gerai nuo namo iki aukstu
//paemimas:
//console.log(namas.adresas);
//console.log(namas.gyventojai[0]); // isves tomas sudetingiau


//paleidimas:
// namas.griuti(2018); griuti function(data)

//let objektai = ""; //string
//let a = {}; //object
let b = ["tomas","mantydas"];   // array && object

b.push( "ieva");// ideda i masyvo gala
b.push("angele");
console.log(" masyvas b" , b);

// google w3 js push()

let ilgis = b.length;
b[ ilgis ] = "Romas";
console.log(" masyvas b" , b);
b.pop(); // istrina is masyvo galo
console.log(" istrynem paskutini b" , b);

b.unshift("priekis"); // idejimas i masyvo prieki
console.log(" idejom i prieki b" , b);

// $('h1') //suranda visus visus h1 html
$('h1').click(function(event){
  console.log("mane paspaudei");
});



//objektu kurimas
let mokykla = {
    adresas: "kaunas, Kruonio 13",
    klasiuKiekis: 18,
    darbuotojai: ["Agne", "Ainius", "Ponas Direktorius"]
};
// uzduotis isvesti visus duomenis atskirai( ir masyva atskirose eilutese)

console.log("darbuotojai ir adresas:" + " " + mokykla.darbuotojai + mokykla.adresas);
console.log( "darbuotojo 1 vardas: " + mokykla.darbuotojai[0]);
console.log( "darbuotojo 2 vardas: " + mokykla.darbuotojai[1]);







// UZDUOTIS
// PRISIMINTI TEORIJA
var vardas = "";    // inicialisation (kintamojo kurimo metu, reiksmes priskyrimas)
var zmogus; // undefined
// console.log( mama );  // not defined

//===========================================
// 1 UZDUOTIS:
// sukurti mokinio objekta: vardas, pavarde, kelintokas, mokinio matematikos pazymiai (6, 5, 9 , 10, 8)
// (ir priskirti reiksmes pvz: 'Jurgis', "Jurgauskas", 7)
let mokinys = {
vardas: "Audrius",
pavarde: "Kepalas",
kelintokas: 4,
pazymiai: [6,5,9,10,8]
//console.log("objektas yra:", mokinys); patikrint "objekta"
};
console.log("vardas:",mokinys.vardas , "pavarde:" , mokinys.pavarde , "pazymiai:" , mokinys.pazymiai[3]);




// 1.1 UZDUOTIS
// atspauzdinti visus duomenis

// UZDUOTIS 1.2
// PAKEISTI : klase i sekancia

mokinys.kelintokas++; //prideda 1 tas ++
console.log("ar perejo i sekancia klase is 8 i 9:" , mokinys.kelintokas);

// UZDUOTIS 1.2.1
// if patikrinimas: jei mokinys yra 13-tokas - isveskite teksta: "mokinys pabaige mokykla", jeigu mokinys yra penktokas  - "pabaige pradine mokykla"
// pakeisti: visus 6 pazymius
// prideti nauja f-ja begu(), kuri isves i console 'bugu begu'
// prideti nauja kintamaji: miestas = 'kaunas'

if (mokinys.kelintokas > 12) {
  console.log("mokinys baige mokykla");
} else if (mokinys.kelintokas ===5){
console.log("mokinys pabaiges pradine");
}
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

//============3=pvz: construktorius ===== " "
function Car(dSkaicius, spalva, greitis) {
    this.numberOfDoors = dSkaicius;
    this.color = spalva;
    this.maxSpeed = greitis;
 }
//
// // objekto kurimas
 var AudiTT  = new Car(2, "red", 280);
 var Audi100 = new Car(5, "black", 200);

console.log("visas ovjektas audiTT :", audiTT);

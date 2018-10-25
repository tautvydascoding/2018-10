var names = ["Enriqueta", "Sybil", "Piper", "Anh", "Carmelo", "Regan", "Synthia", "Newton", "Norbert", "Krystyna", "Fidelia", "Christoper", "Lewis", "Jeromy", "Joy", "Lorri", "Owen", "Rosenda", "Devora", "Treva", "Leanora", "Meghann", "Jacqueline", "Bunny", "Tenisha", "Rico", "Clementina", "Samella", "Rico", "Sandi", "Efrain", "Tena", "Vivan", "Hiedi", "Naida", "Evette", "Shane", "Freida", "Marielle", "Wynona", "Cheree", "Gaston", "Aja", "Timika", "Jude", "Griselda", "Luise", "Rico", "Minh", "Warren"];

var lastNames = ["Mcdowell", "Gates", "Mccall", "Cisneros", "Hancock", "Gaines", "Juarez", "Nolan", "Barajas", "Ware", "Orr", "Bell", "Donovan", "Rojas", "Stevenson", "Long", "Hays", "Gibson", "Meyer", "Sims", "Mcintosh", "Craig", "Haney", "Cunningham", "Hunt", "Montgomery", "Spears", "Cooke", "Gregory", "Mcknight", "Fernandez", "Hendrix", "Patton", "Bond", "Skinner", "Randolph", "Montes", "Guerra", "Bowen", "Potts", "Dyer", "Riley", "Rodgers", "Schroeder", "Ferguson", "Garrett", "Rush", "Moon", "Whitney", "Mcdaniel"];



let foundName = false;
function whatIndexAndLastName(x){
  var indeksai = [];
    for(i=0; i<names.length; i++){
        if(names[i]===x){
        	// isvedame pavarde*******************
          console.log("Pavarde : "+lastNames[i]);
          //********************************
          indeksai.push(i);
          foundName = true;
        }
    }
    if(!foundName){
    	console.log("That name dont exist");
    }
    //************ isvedame indeksa/us*************
      console.log("Jos/Jo indeksas : "+indeksai);
return indeksai;
}
// console.log(whatIndex("Rico"));
// uzduotis:----------------------------
// 3) rasti pavarde masyve esancio  zmogaus vardu "Freida" (pirmojo)
// 4) rasti visu zmoniu vardu "Rico" pavardes
// 5) Turime masyva su zmoniu nr.  ieskomiZmones = [2, 16, 17, 18, 19, 25];
// A) atspausdinti visus numerius
// B) isvesti ju pavardes ir vardus

let ieskomiZmones = [2, 16, 17, 18, 19, 25];

function surastiZmones(arr){
	for(i=0; i<arr.length; i++){
		console.log(i);
		console.log("Vardas : "+names[arr[i]]);
		console.log("Pavarde : "+lastNames[arr[i]]);
	}
}

var headerElement = document.createElement("HEADER");
var manoTekstas = "Labas labadiena sveiki";
var text = document.createTextNode(manoTekstas);

headerElement.appendChild(text);
document.body.appendChild(headerElement);

// 1 UZDUOTIS:
// sukurti mokinio objekta: vardas, pavarde, kelintokas, mokinio matematikos pazymiai (6, 5, 9 , 10, 8)
// (ir priskirti reiksmes pvz: 'Jurgis', "Jurgauskas", 7)

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

var mokinys = { vardas:"Jurgis",
 				pavarde:"Jurgauskas", 
 				kelintokas:7, 
				matematikosPazymiai: [ "6, 5, 9, 10, 8"],
				begu: function(){
					console.log("begu");
				} };


mokinys.kelintokas = 15;
console.log(mokinys.kelintokas);

if(mokinys.kelintokas>12){
	console.log("Mokinys jau yra baiges mokykla")}

// for(i=0; i<mokinys.matematikosPazymiai.length; i++){
// 	mokinys.matematikosPazymiai[i] = "10, 10, 10, 10, 10"
// }

// console.log(mokinys.matematikosPazymiai.length



mokinys.begu();














// =================taisyklingas Array copy  =================
var array = ['a', 'b', 'c'];  // Becomes arr1 = ['a', 'b', 'c']
var kopijaNEGERAI =  array; // !!! Blogi  - sukurs susietaja kopija ir redaguojant keisis abu masyvai
var kopija1 = array.slice(0);   // Becomes arr2a = ['a', 'b', 'c'] - deep copy
var kopija2 = array.concat(  );   // Becomes arr2b = ['a', 'b', 'c'] - deep copy

// ================= ========= ======== ========
 ieskomiZmones = [2, 16, 17, 18, 19, 25];

var names = ["Enriqueta", "Sybil", "Piper", "Anh", "Carmelo", "Regan", "Synthia", "Newton", "Norbert", "Krystyna", "Fidelia", "Christoper", "Lewis", "Jeromy", "Joy", "Lorri", "Owen", "Rosenda", "Devora", "Treva", "Leanora", "Meghann", "Jacqueline", "Bunny", "Tenisha", "Rico", "Clementina", "Samella", "Rico", "Sandi", "Efrain", "Tena", "Vivan", "Hiedi", "Naida", "Evette", "Shane", "Freida", "Marielle", "Wynona", "Cheree", "Gaston", "Aja", "Timika", "Jude", "Griselda", "Luise", "Rico", "Minh", "Warren"];

var lastNames = ["Mcdowell", "Gates", "Mccall", "Cisneros", "Hancock", "Gaines", "Juarez", "Nolan", "Barajas", "Ware", "Orr", "Bell", "Donovan", "Rojas", "Stevenson", "Long", "Hays", "Gibson", "Meyer", "Sims", "Mcintosh", "Craig", "Haney", "Cunningham", "Hunt", "Montgomery", "Spears", "Cooke", "Gregory", "Mcknight", "Fernandez", "Hendrix", "Patton", "Bond", "Skinner", "Randolph", "Montes", "Guerra", "Bowen", "Potts", "Dyer", "Riley", "Rodgers", "Schroeder", "Ferguson", "Garrett", "Rush", "Moon", "Whitney", "Mcdaniel"];



// 1A) surasti vardu masyve, kelintas zmogus yra "Rico" (surasti pirmaji; sunkes- surasti visus riko)

// for (var i = 0; i < names.length; i++) {
//   if (names[i] == "Rico") {
//     break;
//   }
// }
// console.log("Rico numeris yra: " + i);

//document.getElementById("Rico").innerHTML = text;
// 1B) papildyti ^: jeigu tokio vardo neranda, isvesti VIENĄ pranesima "Nepavyko rasti...Bandykite kita zodi"

// let pavykoRasti = false; // nepavyko - dar neradome
// for (var i = 0; i < names.length; i++) {
//   if (names[i] == "Rico") {
//     pavykoRasti = true;
//     break;
//   }
// }
//   if (pavykoRasti == true) {
//     console.log("ieskomo numeris yra:" + i);
//   } else {
//     console.log("NEPAVYKO RASTI - bandykite kita");
//   }

// 2 UZDUOTIS (f-ja iekom stalciaus)
// parasyti funkcija, kuriai davus iekoma zodi , ji suranda jo vieta masyve (stalciaus numeri) ir si   numeri grazina
// eg: getStalciausNumeris( ieskomasTekstas)

function getStalciausNumeris(ieskomasTekstas) {

  for (var i = 0; i < names.length; i++) {
    if (names[i] == ieskomasTekstas) {
      pavykoRasti = true;
      return i; //graziname numeri rasto darbuotojo
    }
  }
}
let numeris = getStalciausNumeris("Rico");
console.log("ieskomo zmogaus numeris:" + numeris);

let numerisPiper = getStalciausNumeris("Piper");
console.log("ieskomo zmogaus numeris:" + numerisPiper);

let numerisPikolas = getStalciausNumeris("Pikolas");
if (numerisPikolas == undefined) {
  console.log("Pikolas nerastas");
}
else {
  console.log("ieskomo zmogaus numeris:" + numerisPikolas);
}


// uzduotis:----------------------------
// 3) rasti pavarde masyve esancio  zmogaus vardu "Freida" (pirmojo)

let freidosNumeris = getStalciausNumeris("Freida");
let freidosPavarde = lastNames[freidosNumeris]
console.log("Freidos pavarde yra: " + freidosPavarde);
$('h1').text("Freidos pavarde yra: " + freidosPavarde);

for (var i = 0; i < names.length; i++) {
if (names[i] == "Freida") {
      break;
  }
 }
 console.log("Freida pavarde yra skaiciuje: " + i);

 for (var i = 0; i < lastNames.length; i++) {
 if (lastNames[i] == i) {
       break;
   }
  }
  console.log("Freida pavarde yra: " + i);

// 4) rasti visu zmoniu vardu "Rico" pavardes

for (var i = 0; i <names.length; i++) {
  if (names[i] == "Rico") {
    console.log(i + " Riko pavarde " + lastNames[i]);
  }
}

// 5) Turime masyva su zmoniu nr.  ieskomiZmones = [2, 16, 17, 18, 19, 25];

// A) atspausdinti visus numerius

for (var i = 0; i < ieskomiZmones.length; i++) {
  console.log( "ieskomas: " + ieskomiZmones[i] );

  console.log( names[ieskomiZmones[i]] + " " + lastNames[ieskomiZmones[i]] );
}

// B) isvesti ju pavardes ir vardus



// var a = Math.random(); // 0 - 1
// if ( a <= 0.1) {
//     console.log("laimejai");
// }

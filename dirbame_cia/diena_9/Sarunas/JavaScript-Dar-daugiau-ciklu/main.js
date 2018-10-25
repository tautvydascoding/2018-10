console.log("Labas");
$('h1').css('color', 'pink');



// =================taisyklingas Array copy  =================
var array = ['a', 'b', 'c']; // Becomes arr1 = ['a', 'b', 'c']
var kopijaNEGERAI = array; // !!! Blogi  - sukurs susietaja kopija ir redaguojant keisis abu masyvai
var kopija1 = array.slice(0); // Becomes arr2a = ['a', 'b', 'c'] - deep copy
var kopija2 = array.concat(); // Becomes arr2b = ['a', 'b', 'c'] - deep copy

// ================= ========= ======== ========
ieskomiZmones = [2, 16, 17, 18, 19, 25];

var names = ["Enriqueta", "Sybil", "Piper", "Anh", "Carmelo", "Regan", "Synthia", "Newton", "Norbert", "Krystyna", "Fidelia", "Christoper", "Lewis", "Jeromy", "Joy", "Lorri", "Owen", "Rosenda", "Devora", "Treva", "Leanora", "Meghann", "Jacqueline", "Bunny", "Tenisha", "Rico", "Clementina", "Samella", "Rico", "Sandi", "Efrain", "Tena", "Vivan", "Hiedi", "Naida", "Evette", "Shane", "Freida", "Marielle", "Wynona", "Cheree", "Gaston", "Aja", "Timika", "Jude", "Griselda", "Luise", "Rico", "Minh", "Warren"];

var lastNames = ["Mcdowell", "Gates", "Mccall", "Cisneros", "Hancock", "Gaines", "Juarez", "Nolan", "Barajas", "Ware", "Orr", "Bell", "Donovan", "Rojas", "Stevenson", "Long", "Hays", "Gibson", "Meyer", "Sims", "Mcintosh", "Craig", "Haney", "Cunningham", "Hunt", "Montgomery", "Spears", "Cooke", "Gregory", "Mcknight", "Fernandez", "Hendrix", "Patton", "Bond", "Skinner", "Randolph", "Montes", "Guerra", "Bowen", "Potts", "Dyer", "Riley", "Rodgers", "Schroeder", "Ferguson", "Garrett", "Rush", "Moon", "Whitney", "Mcdaniel"];

console.log(names.length);
console.log(lastNames.length);

// 1A) surasti vardu masyve, kelintas zmogus yra "Rico" (surasti pirmaji; sunkes- surasti visus riko)
for (i = 0; i < names.length; i++) {
  if (names[i] == "Rico") {

    break;
  }
}
console.log("Rico numeris yra : " + i);
// 1B) papildyti ^: jeigu tokio vardo neranda, isvesti VIENĄ pranesima "Nepavyko rasti...Bandykite kita zodi"
var pavykoRasti = false; //nepavyko
for (i = 0; i < names.length; i++) {
  if (names[i] == "Rico") {
    pavykoRasti = true;
    break;
  }
}
if (pavykoRasti == true) {
  console.log("ieskomojo numeris yra: " + i);
} else {
  console.log("Nepavyko rasti - bandykite kita");
}


// 2 UZDUOTIS (f-ja iekom stalciaus)
// parasyti funkcija, kuriai davus iekoma zodi , ji suranda jo vieta masyve (stalciaus numeri) ir si   numeri grazina
// eg: getStalciausNumeris( ieskomasTekstas)
function getStalciausNumeris(ieskomasTekstas) {
  for (i = 0; i < names.length; i++) {
    if (names[i] == ieskomasTekstas) {
      pavykoRasti = true;
      return i;
    }
  }
}
var numerisPiper = getStalciausNumeris("Piper");
var numeris = getStalciausNumeris("Rico");
console.log("ieskomo zmogaus numeris: " + numeris);
console.log("Piper numeris :" + numerisPiper);
// uzduotis:----------------------------
// 3) rasti pavarde masyve esancio  zmogaus vardu "Freida" (pirmojo)

var freidosNumeris = getStalciausNumeris ("Freida");
var freidosPavarde = lastNames[freidosNumeris];
console.log("Freidos pavarde yra " + freidosPavarde);
/// ARBA isvesti i HTML

$("h1").text("Freidos pavarde yra: " + freidosPavarde);

// 4) rasti visu zmoniu vardu "Rico" pavardes
// names.indexOf("Rico");
for (var i = 0; i < names.length; i++){
  if (names[i] == "Rico"){
    console.log( i + " Rico pavarde : " + lastNames[i]);
  }
}
// 5) Turime masyva su zmoniu nr.  ieskomiZmones = [2, 16, 17, 18, 19, 25];
// A) atspausdinti visus numerius
// B) isvesti ju pavardes ir vardus

//ieskomiZmones = [2, 16, 17, 18, 19, 25];

for (i = 0; i < ieskomiZmones.length; i++){
  console.log("ieskomi numeriai :"  + ieskomiZmones[i]);
  var sk = ieskomiZmones[i];
  console.log(names[sk] + " " + lastNames[sk]);
  // ARBA
  console.log(names[ieskomiZmones[i]] + " " + lastNames[ieskomiZmones[i]]);
}






// var a = Math.random(); // 0 - 1
// if ( a <= 0.1) {
//     console.log("laimejai");
// }

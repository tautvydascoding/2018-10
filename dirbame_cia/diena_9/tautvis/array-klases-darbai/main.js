console.log(   "Labas"  );


$('h1').css('color', 'pink');


console.log("labas");

// =================taisyklingas Array copy  =================
//var array = ['a', 'b', 'c'];  // Becomes arr1 = ['a', 'b', 'c']
//var kopijaNEGERAI =  array; // !!! Blogi  - sukurs susietaja kopija ir redaguojant keisis abu masyvai
//var kopija1 = array.slice(0);   // Becomes arr2a = ['a', 'b', 'c'] - deep copy
//var kopija2 = array.concat(  );   // Becomes arr2b = ['a', 'b', 'c'] - deep copy

// ================= ========= ======== ========
var ieskomiZmones = [2, 16, 17, 18, 19, 25];

var names = ["Enriqueta", "Sybil", "Piper", "Anh", "Carmelo", "Regan", "Synthia", "Newton", "Norbert", "Krystyna", "Fidelia", "Christoper", "Lewis", "Jeromy", "Joy", "Lorri", "Owen", "Rosenda", "Devora", "Treva", "Leanora", "Meghann", "Jacqueline", "Bunny", "Tenisha", "Rico", "Clementina", "Samella", "Rico", "Sandi", "Efrain", "Tena", "Vivan", "Hiedi", "Naida", "Evette", "Shane", "Freida", "Marielle", "Wynona", "Cheree", "Gaston", "Aja", "Timika", "Jude", "Griselda", "Luise", "Rico", "Minh", "Warren"];

var lastNames = ["Mcdowell", "Gates", "Mccall", "Cisneros", "Hancock", "Gaines", "Juarez", "Nolan", "Barajas", "Ware", "Orr", "Bell", "Donovan", "Rojas", "Stevenson", "Long", "Hays", "Gibson", "Meyer", "Sims", "Mcintosh", "Craig", "Haney", "Cunningham", "Hunt", "Montgomery", "Spears", "Cooke", "Gregory", "Mcknight", "Fernandez", "Hendrix", "Patton", "Bond", "Skinner", "Randolph", "Montes", "Guerra", "Bowen", "Potts", "Dyer", "Riley", "Rodgers", "Schroeder", "Ferguson", "Garrett", "Rush", "Moon", "Whitney", "Mcdaniel"];

// 1A) surasti vardu masyve, kelintas zmogus yra "Rico" (surasti pirmaji; sunkes- surasti visus riko)
for (var i = 0; i < names.length; i++) {
if (names[i] == "Rico")  {
  console.log(i); //suranda visus rico uzduotis 2
//  break; su pirmu riko grazinimu
}
}





// 1B) papildyti ^: jeigu tokio vardo neranda, isvesti VIENĄ pranesima "Nepavyko rasti...Bandykite kita zodi"


// 2 UZDUOTIS (f-ja iekom stalciaus)
// parasyti funkcija, kuriai davus iekoma zodi , ji suranda jo vieta masyve (stalciaus numeri) ir si   numeri grazina
function getStalciausNumeris( ieskomasTekstas){
for (var i = 0; i < names.length; i++) {
  if (names[i] == iskomasTekstas) {
    pavykoRasti = true;
    return i; //graziname numeri rasto darbuotojo

    }
  }
}
//let numerisPiper = getStalciausNumeris( "Rick");
//console.log("iesomo zmogaus numeris" + numeris );

//let numeris = getStalciausNumeris( "Piper");
//console.log("Piper numeris:" + numerisPiper );
// uzduotis:----------------------------
// 3) rasti pavarde masyve esancio  zmogaus vardu "Freida" (pirmojo)

for (var i = 0; i < names.length; i++) {
  if (names[i] == "Freida") {

  }
}
//let freidosNumeris = getStalciausNumeris( "freida");
//let freidosPavarde = lastNames[freidosNumeris];
console.log("");


// 4) rasti visu zmoniu vardu "Rico" pavardes
for (var i = 0; i < names.length; i++) {
  if (names [i] == "Rico") {
    console.log( i + "Riko pavarde" + lastNames[i]);
}
}
// 5) Turime masyva su zmoniu nr.  ieskomiZmones = [2, 16, 17, 18, 19, 25];

for (var i = 0; i < ieskomiZmones.length; i++) {
  console.log( "ieskomas:" + ieskomiZmones[i]);
  console.log( names [ieskomiZmones[i]] + [lastNames[i]]);
}

// A) atspausdinti visus numerius
// B) isvesti ju pavardes ir vardus



var a = Math.random(); // 0 - 1
if ( a <= 0.1) {
 }
 console.log("laimejai");

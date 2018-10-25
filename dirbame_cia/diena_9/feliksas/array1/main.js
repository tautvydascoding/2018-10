console.log(   "Labas"  );


$('h1').css('color', 'pink');


console.log("labas");

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

// surandame pati pirma rico
for (var i = 0; i < names.length; i++) {
    if (names[i] == "Rico") {
        break;
    }
}
console.log("Rico numeris yra:" + i);

// 1B) papildyti ^: jeigu tokio vardo neranda, isvesti VIENĄ pranesima "Nepavyko rasti...Bandykite kita zodi"

pavykoRasti = false; // nepavyko - dar neradome
for (var i = 0; i < names.length; i++) {
    if (names[i] == "Rico2000") {
        pavykoRasti = true;
        break;
    }
}
// tikriname ar radomo ieskoma zmogu
if (pavykoRasti == true) {
    console.log("ieskomojo numeris yra:" + i);
} else {
    console.log("NEPAVYKO RASTI - bandykite kita");
}

// 2 UZDUOTIS (f-ja iekom stalciaus)
// parasyti funkcija, kuriai davus iekoma zodi , ji suranda jo vieta masyve (stalciaus numeri) ir si   numeri grazina
// eg: getStalciausNumeris( ieskomasTekstas)

function getStalciausNumeris( ieskomasTekstas ) {
    for (var i = 0; i < names.length; i++) {
    if (names[i] == ieskomasTekstas) {
        pavykoRasti = true;
        return i;
      }
    }
}
numeris = getStalciausNumeris( "Rico");
console.log("ieskomo zmogaus numeris: " + numeris);

numerisRiko = getStalciausNumeris( "Rico");
console.log("ieskomo zmogaus numeris: " + numeris);


// uzduotis:----------------------------
// 3) rasti pavarde masyve esancio  zmogaus vardu "Freida" (pirmojo)


// 4) rasti visu zmoniu vardu "Rico" pavardes
for (var i = 0; i < names.length; i++) {
  if(names[1] == "Rico") {
    console.log( i + "Rico pavarde" + lastNames[1]);
  }
}



// 5) Turime masyva su zmoniu nr.  ieskomiZmones = [2, 16, 17, 18, 19, 25];
ieskomiZmones = [2, 16, 17, 18, 19, 25];

for (var i = 0; i < ieskomiZmones.length; i++) {
  console.log("ieskomas:" + ieskomiZmones[i] );

  console.log( names[ieskomiZmones[i]]);
}


// A) atspausdinti visus numerius
ieskomiZmones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
for (var i = 0; i < ieskomiZmones.length; i++) {
  console.log("ieskomas:" + ieskomiZmones[i] );
  console.log( names[ieskomiZmones[i]] );
}
// B) isvesti ju pavardes ir vardus



// var a = Math.random(); // 0 - 1
// if ( a <= 0.1) {
//     console.log("laimejai");
// }

console.log(   "Labas"  );

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



// 1A) surasti vardu masyve, kelintas zmogus yra "Rico" (surasti pirmaji; sunkes- surasti visus riko)
/*

var ieskomasZodis = 'Rico';  

function zodzioPaieska() {                  //suranda kurioj vietoj padetas Rico (randa tik viena karta)
    var surastasZodis = names.indexOf(ieskomasZodis);
    console.log( "1A.  Ieksomo zodzio numeris:" + surastasZodis );
    
}
zodzioPaieska ();


// tas pats su for ciklu


for (var i=0; i < names.length; i++ ) {
    if (names[i] == ieskomasZodis ) {
        console.log( "1AA.  stalciaus numeris" + i);
        break;                       // sustabdo cikla radus viena varda, jei panaikinu break tai iesko visas eilutes
    }
}

*/

// 1B) papildyti ^: jeigu tokio vardo neranda, isvesti VIENĄ pranesima "Nepavyko rasti...Bandykite kita zodi"
/*
let ArRasta = false;

for (var i=0; i<names.length; i++  ) {           //names.lemgth iesko kiek masyve yra nariu. pvz isvedus vien console.log(names.length); parodys kiek nariu masyve rado
    if ( names [i] == ieskomasZodis ) {
        ArRasta = true;
        break;
    }
} if (ArRasta == true) {
        console.log( "1B.  Radau stalciuje" + " " + i );
    } else {
        console.log ( "Tokio vardo nera" );
    }
*/

// 2 UZDUOTIS (f-ja iekom stalciaus)
// parasyti funkcija, kuriai davus iekoma zodi , ji suranda jo vieta masyve (stalciaus numeri) ir si   numeri grazina
// eg: getStalciausNumeris( ieskomasTekstas)
/*
function getStalciausNumeris ( ieskomasZodis ) {
    for (var i = 0; i<names.length; i++) {
        if (names [i] ==ieskomasZodis ) {
            ArRasta = true;
            return i;  // graziname numeri rasto darbuotojo
        }
    }
}

let stalciausGavimas = getStalciausNumeris ( "Rico" ) ; 
getStalciausNumeris (  );

console.log( "Rico numeris" + stalciausGavimas );

console.log (names.length);
*/

// uzduotis:----------------------------
// 3) rasti pavarde masyve esancio  zmogaus vardu "Freida" (pirmojo)
/*
let FreidosPavarde = lastNames [stalciausGavimas];    // tikrinama lastNames sarase koks zodis parasytas tokioj vetoj kuria apskaiciavo funkcija getStalciausGavimas (nes tokia funckija priskirta kintamajam stalciausGavimas)
console.log ( FreidosPavarde );
*/
// 4) rasti visu zmoniu vardu "Rico" pavardes

/*
for (var i = 0; i < names.length; i++) {   // tikrina visus Rico vardu sarase ir pagal jo stalciaus numeri iesko lastNames sarase tokio numerio ir jy isveda salia vardo
    if (names[i] == "Rico") {
        console.log ( i + " Riko pavarde: " + lastNames[i] );

    }
}
*/

// 5) Turime masyva su zmoniu nr.  ieskomiZmones = [2, 16, 17, 18, 19, 25];

// A) atspausdinti visus numerius

/*
for ( var i = 0; i<ieskomiZmones.length;  i++ ) {
    console.log ( "ieskomi zmones yra:" + ieskomiZmones [i] );
    // B
    console.log ( names [ ieskomiZmones [i] ] );  //ieskomu zmoniu pavardes
}
*/

// B) isvesti ju pavardes ir vardus


for (var i = 0; i < ieskomiZmones.length; i++) {
    // console.log("ieskomi zmones yra:" + ieskomiZmones[i]);   //parodo ieskomus numerius ir vardus tame numeryje
    // B
    console.log ( names [ieskomiZmones [i]] + " " + lastNames[ieskomiZmones[i]]); //ieskomu zmoniu vardai ir pavardes
}

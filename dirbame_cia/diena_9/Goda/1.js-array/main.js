console.log(   "Labas"  );

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
 
    var x = names.indexOf ("Rico"); //index of suranda pozicijos numeri eileje. uzduotis 1A
    console.log("numeris" + x);

    for (var i= 0; i < names.length; i++ ) {
        if (names [1] == "Rico") {
            break;
        } 
    }
    console.log("Rasta. Rico nr " + i);

// Ieskome vardo Martynas
let pavykoRasti = false; //nepavyko - dar neradome    
for (var i= 0; i < names.length; i++ ) {
        if (names [1] == "Martynas") {
            pavykoRasti = true;
            break;
        } 
        if (pavykoRasti == true){
            console.log("ieskomo nr yra:" +i);
        }  else {
        console.log("nepavyko");
        }        
     }    

    

 // 1B) papildyti ^: jeigu tokio vardo neranda, isvesti VIENĄ pranesima "Nepavyko rasti...Bandykite kita zodi"
 
  var arRasta = 0;
  for (var i=0; i < names.length; i++) {
      if (names [i] == "Pipers") {
          arRasta = 1;
          console.log("Radau. Jo stalcius " +i);
          
      }
  }
  if (arRasta ===0) {
      console.log("Nerasta");
      
  }
 
 
 // 2 UZDUOTIS (f-ja ieskom stalciaus)
 // parasyti funkcija, kuriai davus iekoma zodi , ji suranda jo vieta masyve (stalciaus numeri) ir si numeri grazina
 // eg: getStalciausNumeris( ieskomasTekstas)
 
function getStalciausNumeris(ieskomasTekstas) {
    for (var i=0; i < names.length; i++) {
      if (names [i] == "Rico") {
          pavykoRasti = true;
          return i; //graziname numeri rasto darbuotojo
        }
    }
}
let numeris = getStalciausNumeris ("Rico");
console.log("Ieskomo zmogaus nr: " + numeris);

let numerisPiper = getStalciausNumeris ("Piper");
console.log("Piper" + numerisPiper);


 // uzduotis:----------------------------
 // 3) rasti pavarde masyve esancio  zmogaus vardu "Freida" (pirmojo)
  
 let Freidosnumeris = getStalciausNumeris ("Freida");
 let FreidosPavarde = lastNames [Freidosnumeris];
 console.log("Freidos pavarde yra: " + FreidosPavarde);

console.log("masyvo ilgis: " + names.length);

// galima ir tokiu budu:
//  for (var i=0; i < names.length; i++) {
//     if (names [i] == "Rico") {
//         pavykoRasti = true;
//         return i; //graziname numeri rasto darbuotojo
      
  
 // 4) rasti visu zmoniu vardu "Rico" pavardes
 
 for (var i= 0; i < names.length; i++ ) {    //name.length = 50
    if (names [i] == "Rico") {
        console.log(i + " Rico pavarde yra :" + lastNames [i] );
    } 
}

// 5) Turime masyva su zmoniu nr.  ieskomiZmones = [2, 16, 17, 18, 19, 25];
 //) atspausdinti visus numerius
  var ieskomiZmones = [2, 16, 17, 18, 19, 25];

 for (let i= 0; i < ieskomiZmones.length; i ++) {
//    console.log("ieskomas: " + ieskomiZmones [i]);
//    console.log("ieskomas numeris: "+ ieskomiZmones [i] + names[i] + lastNames[i] ); siuo budu neima is masyvo 2,16,17,18,19,25

   sk = ieskomiZmones [i];
   console.log( names [sk] + " " + lastNames [sk] ) ;
}    


 // B) isvesti ju pavardes ir vardus



 



 // var a = Math.random(); // 0 - 1
 // if ( a <= 0.1) {
 //     console.log("laimejai");
 // }
 
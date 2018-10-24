console.log(   "Labas"  );



// ====================Scope====================
//   UZDUOTIS  A
// sukurti funkcija "printDuomenys()" ,
// funkcijoje sukurti kintamaji: var vardas = "Tomas"
// kuri  atspausdina i konsole  kintamaji "vardas"
// iskviesti f-ja


x = 10;
function testas1() {
var vardas = "Tomas";
console.log(vardas);
}
testas1();

//   UZDUOTIS  B
//  dabar, pabandykite po f-ja (uz jos ribu) i konsole atspausdinti kintamaji "vardas"
//  console.log( vardas) ;
// NOTE: gausite klaida ""is not defined""



//================local && global=========
// var x = "x -viesas ";   // global
// function testLocalVar() {
//    var y = "y -vietinis ";  // local
//    z = "z -viesas";        // global // nereiketu taip daryti
//    console.log("x", x);
//    console.log("y", y);
//    console.log("z", z);
// }
// testLocalVar();
// console.log("x", x);
// console.log("z", z);
// console.log("y", y);  // error - 1)   nes sukurtas f-jos viduje 2) sukurtas su "var"


var x = "x -viesas ";
function testLocalVar(x) {
var y = "y -vietinis ";
z = "z -viesas";
console.log("x", x);
console.log("y", y);
console.log("z", z);
}
testLocalVar();
console.log("x", x);
console.log("z", z);
console.log("y", y);

console.log(   "Labas"  );

// ====================Scope====================
//   UZDUOTIS  A
// sukurti funkcija "printDuomenys()" ,
// funkcijoje sukurti kintamaji: var vardas = "Tomas"
// kuri  atspausdina i konsole  kintamaji "vardas"
// iskviesti f-ja

function printDuomenys() {
var vardas = "Tomas";
console.log(vardas);
}
printDuomenys();


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

 // UZDUOTIS // UZDUOTIS
 // A) sukurti kintamaji var katinas = "juodas"
 // B) sukurti f-ja
 // C) sukurti f-jos viduje kintamaji var katinas = "baltas"
 // D) atspauzdinti abu f-jos viduje
 // E) atspauzdinti  uz f-jos

 // var katinas = "juodas";   //global
 //
 // function test2() {
 //     var katinas = "baltas";  // local
 //    console.log("1 katinas:", katinas);
 //    console.log("2 this.katinas - f-jos viduje: ",  this.katinas);    // this - pasiekia ~global kintamuosius (tavo tecio kintamuosius)
 // }
 // test2();
 //
 // console.log("3 katinas:", katinas);

 var katinas = "juodas";
 function tekstas (){
    var katinas = "baltas";
    console.log(katinas);
    console.log(this.katinas);
 }
    tekstas(); 
    
//==========================

 // var xx = 10; // global
 //
 // function isvesti( xx ) {  // xx - (local) naujas issigalvotas LAIKINAS  kintamasis
 //     xx = 20;  // local
 //     console.log( "1. xx:", xx);
 //     console.log( "2. this.xx:",   this.xx);
 // }
 // console.log( "3. xx:", xx);


 //======================
 // var vardas = "Jonas";   // global - kintamasis
 // function myName ( vardas ) { //  vardas - local kintamasis
 //     console.log( " vardas" + vardas);
 //     console.log("this.vardas - f-jos viduje: ",  this.vardas);    // this - pasiekia ~global kintamuosius (tavo tecio kintamuosius)
 // }
 // myName("PETRAS");


// CallBack

//Uzduotis  1
//sukurti dvi funkcijas
//viena pasisveikina
//kita atsisveikina

// function pasisveikinimas ( ) {
//     document.querySelector ("h1").innerHTML = "labas";
// }
/*
function atsisveikinimas ( ) {
    document.querySelector ("h2").innerHTML = "ateeee";
}

// atsisveikinimas ( );
// pasisveikinimas ();

//1.1 patobulinti ta kuri pasisveikia, kad ji lauktu CallBack/ iskviestiPabaigusDarba atsisveikinimas

function pasisveikinimas( paleistiVeliau ) {
    document.querySelector("h1").innerHTML = "labas";
    document.querySelector("h2").innerHTML = paleistiVeliau;
    paleistiVeliau ();
    } atsisveikinimas ( ) {
        document.querySelector("h2").innerHTML = "viso gero";
    }


pasisveikinimas (atsisveikinimas);
*/

// /////////////////// TRY CATCH pamoka
// --------    PASISKAITYTI NAMUOSE  -----------------
/*
var a = 100;
try {
    if (kiekis > 10) {
        throw ("kreipkis telefonu");
    } else {
        // parduodame
    }

    alert("Value of variable a is : " + a);

} catch (e) {
    alert("Error: " + e.description);
}

finally {
    console.log( "nesvarbu kas as visada suveiksiu");
}

*/ 

///////////////////// ---------- SCOPE ---------------- /////////////////////

// ====================Scope====================
//   UZDUOTIS  A
// sukurti funkcija "printDuomenys()" ,
// funkcijoje sukurti kintamaji: var vardas = "Tomas"
// kuri  atspausdina i konsole  kintamaji "vardas"
// iskviesti f-ja
/*
function printDuomenys (){
    let vardas = "Tomas";
    console.log (vardas);
}
printDuomenys ();


//   UZDUOTIS  B
//  dabar, pabandykite po f-ja (uz jos ribu) i konsole atspausdinti kintamaji "vardas"
//  console.log( vardas) ;
// NOTE: gausite klaida ""is not defined""

console.log(vardas);
*/

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



//------
// UZDUOTIS // UZDUOTIS
// A) sukurti kintamaji var katinas = "juodas"
// B) sukurti f-ja
// C) sukurti f-jos viduje kintamaji var katinas = "baltas"
// D) atspauzdinti abu f-jos viduje
/*
let katinas = "juodas";  //global
function uzduotis() {
    console.log(katinas);
    katinas = "baltas";
    console.log(katinas);
}
uzduotis();
*/

// E) atspauzdinti  uz f-jos


let katinas = "juodas"; //global
function uzduotis() {
    katinas = "baltas";
    console.log (katinas);
}
console.log (katinas);
uzduotis();




//
// function test2() {
//     var katinas = "baltas";  // local
//    console.log("1 katinas:", katinas);
//    console.log("2 this.katinas - f-jos viduje: ",  this.katinas);    // this - pasiekia ~global kintamuosius (tavo tecio kintamuosius)
// }
// test2();
//
// console.log("3 katinas:", katinas);
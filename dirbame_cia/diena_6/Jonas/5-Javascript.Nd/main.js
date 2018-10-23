
// =================FOR intro  ======================

// 1 UZDUOTIS
// naudojant FOR cikla, atspausdinti  "#" tiek, kad gautusi trikampio vaizdas
// #
// ##
// ###
// ####
// #####
// ######

// var i;
// for (i=0; i < 8; i++) {
//   console.log("labas" + i);
// }

// // 1UZDUOTIS
// var tekstas = " ";
// for(i = 0; i < 10; i++) {
//   tekstas = tekstas + "#";
//   console.log(tekstas);
// }

// 1) pasikartoti java script “return” zodeli
// // 2 UZDUOTIS
// // sukurti kintamuosius: alga = 500; pavarde=“Pietkus”;
// // parasyti f-ja "getPavarde()”, kuri turi "return" zodeli ir grazina pavarde i iskveitimo vieta.
// // patikrinti ar veikia f-ja

// var alga = 500;
// var pavarde = "Pietkus";
// function getPavarde() {
//   return pavarde;
// }
// console.log(getPavarde());
// document.querySelector("h1").innerHTML = getPavarde();


// 2) pasikartoti isvedima i ekrana ( document.write("Mano tekstas su js");
// // sukurti f-ja, kuri i ekrana isveda “<h2> uz lango singa, kad ir kai pkeista </h2>”

// document.write(" papa dasdadda  ");
// function isvedimasH1() {
//   document.querySelectorAll("h1")[0].innerHTML = "Jonas_L";
//
// }
// console.log(isvedimasH1());

//
// 3) pasikartoti elemento aukscio apemima ( var aukstis = document.getElementById('manoDiv').offsetHeight;)
// // A) sukurti htm elementa “section” su css ji nudazyti raudonai, uzdeti auksti: 50hw, ploti 100vh
// // B) su js paimti jo auksti ir atspausdinti
// // C) sumazinkite ekrana ir perkraukite puslapi. Ar js isvedamas aukstis pasikeite?

// var aukstis = document.getElementById("manoDiv").offsetHeight;
// var aukstis = document.querySelector("h1").clientHeight;
// document.querySelector("h1").style.height = "500px";

//
// 4) pasiskaityti ir pasidaryt (DOM manipuliavimas):
// plain js
// https://plainjs.com/javascript/manipula


// 50 FUNKCIJU

var vardas ="Tomas";
function setVardas1(name) {
  vardas = name + "1";
}
setVardas1("Tomas");

function getVardas1() {
  return vardas ;
}
console.log(getVardas1());

function setVardas2(name) {
  vardas = name + "2";
}
setVardas2("Antanas");

function getVardas2() {
  return vardas;
}
console.log(getVardas2());

console.log(   "Labas"  );

// ==============patarimai==========
// reiksme  - kintamasis  / variable
// "reiksme" - tekstas/ reiksme/ value
// reiksme() - f-jos paleidimas
// =============================



//==============TEKSTO ISVEDIMAS (tik susipazinti)=========
// UZDUOTIS
// Issimeginti komandas:

// document.write(" <b class='bg-info'> Papa karlosas </b> ");

// window.alert("labas");
// var salis = "LIetuva";
// alert("Viso" + salis);

// var ivestasTekstas = prompt("Ivestkite savo varda");
// console.log(ivestasTekstas);

// UZDUOTIS
// Paprasyti vartotojo apskritimo spindulio
// is jo apskaiciuoti apskritimo plota ir atsakyma isvesti
// var ivestasTekstas = prompt("Ivestkite apskritimo spinduli (r)");
//  // console.log(   typeof(  ivestasTekstas  ));
// var apskritimoPlotas = Math.PI * Number(ivestasTekstas) * Number(ivestasTekstas);
// console.log(   "apskirtimo plotas: " + apskritimoPlotas);




// document.querySelector('h1').innerHTML = " <b>Antraste</b>";

document.querySelectorAll('h1')[2].innerHTML = " <b>Pakeistas su All</b>";

// testavimas ar toks elementas egzistuoja mano DOM'e (ekrane)
var manoH1 = document.querySelectorAll('h1')[10];
console.log( manoH1 );

//----Elemento duomenys--------
// auksto paemimas:
// var aukstis = document.querySelector('h1').clientHeight;   // clientHeight includes the height and vertical padding.
// var aukstis = document.querySelector('h1').offsetHeight;  //  offsetHeight includes the height, vertical padding, and vertical borders.
// console.log( "h1 auksti yra:" + aukstis);

// aukscio nustatymas:
// document.querySelector("h1").style.height = "500px"; // change the height of a <div> element:
// document.querySelector("h1").style.width = "30%"; // change the height of a <div> element:




//

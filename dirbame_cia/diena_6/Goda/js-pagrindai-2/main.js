console.log(   "Labas"  );

// ==============patarimai==========
// reiksme  - kintamasis  / variable
// "reiksme" - tekstas/ reiksme/ value
// reiksme() - f-jos paleidimas
// =============================

//==============TEKSTO ISVEDIMAS (tik susipazinti)=========
// UZDUOTIS
// Issimeginti komandas:

// document.write(" <b class='bg-info'> Mano tekstas </b> ");
// window.alert("labas");
// alert("Viso");
// var ivestasTekstas = prompt("Ivestkite savo varda");
// console.log(ivestasTekstas);
// document.querySelector('h1').innerHTML = " <b>Antraste</b>";

//----Elemento duomenys--------
// auksto paemimas:
// var aukstis = document.querySelector('h1').clientHeight;   // clientHeight includes the height and vertical padding.
// var aukstis = document.querySelector('h1').offsetHeight;  //  offsetHeight includes the height, vertical padding, and vertical borders.
// aukscio nustatymas:
// document.querySelector("h1").style.height = "500px"; 		// change the height of a <div> element:

// atliktos uzduotys
// document.write(" <b class='bg-info'> Mano tekstas </b> ");
// window.alert("labas");

// var salis = "Lietuva";
// alert("Viso" + salis);

// var ivestasTekstas = prompt("Ivestkite savo varda");
// console.log(ivestasTekstas);

// uzduotis 
// paprasyti vartotojo apskritimo spindulio
// is jo apskaiciuoti apskritimo plotair atsakyma ivesti

// var ivestasTekstas = prompt("Ivestkite apskritimo spinduli (r)" );
// console.log(typeof (ivestasTekstas));
 
// var apskritimoPlotas = Math.PI * Number(ivestasTekstas)* Number (ivestasTekstas);
// console.log("apskritimo plotas" + apskritimoPlotas);


document.querySelector('h1').innerHTML = " <b>Antraste</b>";
document.querySelectorAll('h1') [2].innerHTML = " <b> Pakeistas su All </b>";


var aukstis = document.querySelector('h1').clientHeight;   
console.log('h1 ausktis yra:' + aukstis);
    
var aukstis = document.querySelector('h1').offsetHeight;
console.log('h1 ausktis su remeliu yra:' + aukstis);

document.querySelector("h1").style.height = "500px";

document.querySelector("h1").style.width = "30%";

// document.querySelector("h1").style.background.color = "red";
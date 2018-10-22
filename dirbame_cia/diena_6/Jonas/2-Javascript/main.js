

//==============TEKSTO ISVEDIMAS (tik susipazinti)=========
// UZDUOTIS
// Issimeginti komandas:

// document.write(" <b class='bg-info'> Papa Karlos </b> ");
// window.alert("labas");
// alert("Viso");
// var ivestasTekstas = prompt("Ivestkite savo varda");
// console.log(ivestasTekstas);
// document.querySelector('h1').innerHTML = " <b>Antraste</b>";
// document.querySelectorAll('h1')[0].innerHTML =  "<b>Pakeistas su ALL</b>";
// testavimas ar yra toksai htmle elementas
// var manoH1 = document.querySelectorAll('h1')[0];
// console.log(manoH1);


//----Elemento duomenys--------
// auksto paemimas:
// var aukstis = document.querySelector('h1').clientHeight;   // clientHeight includes the height and vertical padding.
// var aukstis = document.querySelector('h1').offsetHeight;  //  offsetHeight includes the height, vertical padding, and vertical borders.
// aukscio nustatymas:
// document.querySelector("h1").style.height = "500px"; 		// change the height of a <div> element:

// 0UZDUOTIS
// var ivestasTekstas = prompt("Ivesti apskritimo spinduli(r)");
// var apskritimoPlotas = Math.PI * Number(ivestasTekstas) * Number(ivestasTekstas);
// console.log("Apskritimo plotas: " + apskritimoPlotas);

// /=====================PASIKARTOJIMAS==================

//  1.1 UZDUOTIS
//  sukurti funkcija "printKaina(x)" ,
//  kuri atspausdina i konsole "x" reiksme
//  iskviesti f-ja print(15.99);

function printKaina(x) {
  console.log(x);
}
printKaina(15.99);

//  1.2 UZDUOTIS
// iskviesti f-ja print 3 kartus, kad atspausdintu 3 skirtingas kainas:  999 , 13.49, 100.05
//    vietoj x irasant, koki nors teksta pvz: printKaina( 999);


printKaina(15.99);
printKaina(999);
printKaina(12.49);
// 2.1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis()", kuri apskaiciuoja vidurki is  5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki (pazymius sukurti f-jos viduje) 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

function vidurkis() {
  var paz1 = 5;
  var paz2 = 10;
  var paz3 = 8;
  var paz4 = 6;
  var paz5 = 8;
  var vidurkis = (paz1 + paz2 + paz3 + paz4 + paz5) / 5;
  document.querySelector("h1").innerHTML = "Vidurkis yra: " + vidurkis + "<br>";
}
vidurkis();


// 2.2 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis1(x1, x2, x3, x4, x5)", kuriai galima paduoti 5 kintamuosius,
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki, 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

function vidurkis1(x1, x2, x3, x4, x5) {
  var vidurkis = (x1 + x2 + x3 + x4 + x5) / 5;
  console.log("Vidurkis yra: " + vidurkis);
}
vidurkis1(2, 2, 2, 2, 2);
vidurkis1(2, 2, 2, 2, 2);

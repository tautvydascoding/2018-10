console.log(   "  "  );

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
// var aukstis = document.querySelector('h1').clientHeight;   // clientHeight includes the height and vertical padding. Keicia auksti
// var aukstis = document.querySelector('h1').offsetHeight;  //  offsetHeight includes the height, vertical padding, and vertical borders. Kaicia auksti iskaiciuojant remeli
// aukscio nustatymas:
// document.querySelector("h1").style.height = "500px"; 		// change the height of a <div> element:


// uzduotis: 
//paprasyti vartotojo yvesti apskritimo spinduli
// is jo apskaiciuoti apskritimo plota ir atsakymo isvesti

/*
var ivestasTekstas = prompt("Iveskite apskritimo spinduli");
// Console.log (typeof (ivestasTekstas) );
var apskritimoPlotas = Math.PI * Number(ivestasTekstas * ivestasTekstas)
console.log ( "apskiritimo plotas:" + apskritimoPlotas );
*/


// document.querySelector('h1').innerHTML = " <b>Antraste</b>";

/*document.querySelectorAll("h1" )[2].innerHTML = "<b>pakeistas su ALL</b>;"  //keicia viska nuo 2 elemento (skaiciuoja nuo 0 todel 0 ir 1 praleidzia ir keicia 2)

var manoH1 = document.querySelectorAll("div li" [2]).innerHTML = "<b>pakeistas su ALL</b>;"

console.log (manoH1);
*/

//document.querySelector ("h1") .style.background.color = "red";  // keicia h1 spalva


//  1.1 UZDUOTIS
//  sukurti funkcija "printKaina(x)" ,
//  kuri atspausdina i konsole "x" reiksme
//  iskviesti f-ja print(15.99);

/*
function printKaina(x) {
console.log ("kaina yra:" + " " + x);
}
printKaina (15.99);

//  1.2 UZDUOTIS
// iskviesti f-ja print 3 kartus, kad atspausdintu 3 skirtingas kainas:  999 , 13.49, 100.05
//    vietoj x irasant, koki nors teksta pvz: printKaina( 999);

printKaina(999);
printKaina(13.49);
printKaina("labai gera, tik 100.05eur");
*/


// 2.1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis()", kuri apskaiciuoja vidurki is  5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki (pazymius sukurti f-jos viduje) 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

/*
function pazymiuVidurkis (z, a, s, d, f, g) {
console.log ( "pazymiu vidurkis yra:" + " " + z + " " +  (a + s + d + f + g)/5 );  //z yra vardas kiti - pazymiai
}
pazymiuVidurkis ("  ",5, 10, 8, 6, 8);
*/

// 2.2 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis1(x1, x2, x3, x4, x5)", kuriai galima paduoti 5 kintamuosius,
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki, 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

/*
pazymiuVidurkis("Jono", 10, 10, 8, 6, 8); // suvedu varda ir pazymius
pazymiuVidurkis("Juozo",  8,9,8,7,4);
pazymiuVidurkis("Agnes", 3, 9, 8, 9, 4);
*/


/*
function pazymiuVidurkis(z, a, s, d, f, g) {
    var vidurkis = (a + s + d + f + g) / 5;
    document.querySelector ("h1").innerHTML += "Vidurkis yra:" + z + " " + vidurkis + "<br>"; //isvedimas y ekrana ne tik y console.log
}

pazymiuVidurkis("Jono", 5, 10, 8, 6, 8);

*/





//=====================RETURN==================

// 1 UZDUOTIS
// A) sukurti kintamaji "vardas" Tomas
// B) parasyti f-ja "getVardas()", kuri turi "return" zodeli ir grazina varda i iskveitimo vieta.
// C) patikrinti ar veikia f-ja

/*
var vardas = "Tomas";

function getVardas () {
    return vardas;
}

var textas = "raudonkepuraite daug keliavo ir sutiko" + getVardas () + " su kuriuo daug bazarino";

console.log (textas);
//arba
console.log( getVardas () );

//arba
document.querySelector ("h1").innerHTML = "sveiki," + getVardas ();
*/


// 2 UZDUOTIS
// parasyti f-ja "getVardasPavarde()", kuri turi "return" zodeli ir grazina varda ir pavarde i iskveitimo vieta.
//  f-joje sukurti kintamaji   "pavarde" Tomauskas, "vardas" - Antanas
// patikrinti ar veikia f-ja

/*
function getVardasPavarde() {
    var vardas = "Arunas";
    var pavarde = "Petrauskas";
    var tekstas = "niekas niekur nejo ir sutiko" + " " + vardas + " " + pavarde + " " + "kuris yra bedarbis";
    return tekstas;
}
var xxx = getVardasPavarde () ;

console.log ( xxx );

console.log (getVardasPavarde () ); 

document.querySelector("h1").innerHTML = " <br> labas" + " " + getVardasPavarde() + " " + "ka tu?";
*/


// 3 UZDUOTIS
// A) parasyti f-ja "getPelnas()", kuri turi "return" zodeli ir grazina apskaiciuota pelna
// B) f-joje sukurti kintamaji "pajamos" 12500
// B) f-joje sukurti kintamaji "islaidos" 7500
// B) f-joje apskaiciuoti pelna  ( pvz: pelnas = pajamos - islaidos)  
// C) patikrinti ar veikia f-ja

/*
function getPelnas () {
    var pajamos = 12500;
    var islaidos = 7500;
    var pelnas = pajamos - islaidos;
    return pelnas;
}


console.log ( getPelnas () );
document.querySelector ("h1").innerHTML = "<br> mano pelnas" + " " + getPelnas ();

*/

// 3.2 UZDUOTIS
// A) parasyti f-ja "getPelnas(pajamos, nuostoliai)", kuri turi "return" zodeli ir grazina apskaiciuota pelna
// B) f-joje apskaiciuoti pelna  ( pvz: pelnas = pajamos - nuostoliai)
// C) patikrinti ar veikia f-ja

/*
function getPelnas () {
    var pajamos = 10000;
    var nuostolis = 500;
    var pelnas = pajamos - nuostolis;
    return pelnas;
}


var atsakymas = getPelnas ();
console.log (pelnas);


console.log ( getPelnas () );
document.querySelector ( "h1" ).innerHTML = "pelnas yra" + getPelnas ();
document.querySelectorAll("h1")[2].innerHTML = "<br> pelnas yra" + getPelnas(); // naudoja trecia h1 elementa
*/

// 4 UZDUOTIS
// parasyti f-ja, kuri turi "return" zodeli.
// "getPazymiuVidurkis2(x1, x2, x3, x4, x5)"  f-ja apskaiciuoja vidurki is paduotu 5 menesiu pazymiu (ir grazina atsakyma i iskvietimo vieta! "return atskymas;")

/*
function pazymiuVidurkis (x1, x2, x3, x4, x5) {
    atsakymas = (x1 + x2 + x3 + x4 + x5)/5;
    return atsakymas;
}

console.log (pazymiuVidurkis (5, 5, 8, 8, 6) );
document.querySelector ("h1").innerHTML = (pazymiuVidurkis (5, 5, 8, 8, 6));
*/

// 5 UZDUOTIS
// A) sukurti h1 su tekstu viduje  (HTML faile)
// B) sukurti f-ja "getH1ElementoAukstis(), kuri su "return" grazina surenderinto h1 elemento auksti
// C) su CSS pakeisti h1 auksti, ir paziureti ar jusu f-ja veikia


console.log(   "Labas"  );
// =====================RETURN==================

// 1 UZDUOTIS
// A) sukurti kintamaji "vardas" Tomas
// B) parasyti f-ja "getVardas()", kuri turi "return" zodeli ir grazina varda i iskveitimo vieta.
// C) patikrinti ar veikia f-ja

// var vardas = "Tomas";
// function  getVardas (){
//     return vardas;
//     }
// var tekstas = "Raudonkepuraite keliavo ir sutiko" + getVardas () + "su kuriuo..." 
// console.log(tekstas);
// arba
// console.log(getVardas);
// // arba
// document.querySelector ('h1').innerHTML += "<br>" +  "sveiki," + getVardas(); 


// 2 UZDUOTIS
// parasyti f-ja "getVardasPavarde()", kuri turi "return" zodeli ir grazina varda ir pavarde i iskveitimo vieta.
//  f-joje sukurti kintamaji   "pavarde" Tomauskas, "vardas" - Antanas
// patikrinti ar veikia f-ja
     
function getVardasPavarde(){
    var vardas = "Antanas";
    var pavarde = "Tomauskas";  
    var tekstas = vardas + pavarde;
return tekstas;

}

console.log(getVardasPavarde());

document.querySelector('h1').innerHTML = getVardasPavarde (); 

// 3 UZDUOTIS
// A) parasyti f-ja "getPelnas()", kuri turi "return" zodeli ir grazina apskaiciuota pelna
// B) f-joje sukurti kintamaji "pajamos" 12500
// B) f-joje sukurti kintamaji "islaidos" 7500
// B) f-joje apskaiciuoti pelna  ( pvz: pelnas = pajamos - islaidos)  
// C) patikrinti ar veikia f-ja

function getPelnas(){
    var pajamos = 12500;
    var islaidos = 7500;
    var pelnas = pajamos - islaidos;
return pelnas;
}
console.log("mano pajamos yra", getPelnas());
document.querySelector('h1').innerHTML = "mano pajamos yra " + getPelnas (); 


// 3.2 UZDUOTIS
// A) parasyti f-ja "getPelnas(pajamos, nuostoliai)", kuri turi "return" zodeli ir grazina apskaiciuota pelna
// B) f-joje apskaiciuoti pelna  ( pvz: pelnas = pajamos - nuostoliai)
// C) patikrinti ar veikia f-ja

function getPelnas2(x1, x2){
    var nuostoliai = 1000;
    var pajamos = 12500;
    var pelnas = x1 - x2;
return pelnas;    
} 

var Ieva = getPelnas2 (1000, 500);
var antanas = getPelnas2 (600, 5);

console.log("Ievos ir Antano pelnas:" + Ieva + " " + antanas);


// console.log(" imones pelnas yra:" , getPelnas() );
document.querySelector('h1').innerHTML = " imones pelnas yra: " + getPelnas (); 


// 4 UZDUOTIS
// parasyti f-ja, kuri turi "return" zodeli.
// "getPazymiuVidurkis2(x1, x2, x3, x4, x5)"  f-ja apskaiciuoja vidurki is paduotu 5 menesiu pazymiu (ir grazina atsakyma i iskvietimo vieta! "return atskymas;")

function getPazymiuVidurkis2(x1, x2, x3, x4, x5) {
    var vidurkis = (x1 + x2 + x3 + x4 + x5)/5;     
    return vidurkis;
}
var manoVidurkis = getPazymiuVidurkis2(5,5,5,5,5);
var tavoVidurkis = getPazymiuVidurkis2(8,8,8,8,8,);

console.log(" mano pazymiu vidurkis yra " + manoVidurkis);
console.log(" tavo pazymiu vidurkis yra "+ tavoVidurkis);
document.querySelector('h1').innerHTML = " mano pazymiu vidurkis yra " + manoVidurkis; 
document.querySelector('h1').innerHTML = " tavo pazymiu vidurkis yra " + tavoVidurkis; 
 

// 5 UZDUOTIS
// A) sukurti h1 su tekstu viduje  (HTML faile)
// B) sukurti f-ja "getH1ElementoAukstis(), kuri su "return" grazina surenderinto h1 elemento auksti
// C) su CSS pakeisti h1 auksti, ir paziureti ar jusu f-ja veikia

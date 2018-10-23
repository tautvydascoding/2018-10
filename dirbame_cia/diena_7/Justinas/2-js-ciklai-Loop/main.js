//==============TEORIJA ++ / -- ==========
    // var x = 10;
    // x = x + 1;  // x = 11
    // x += 1;     // x = x + 1;

//=============FOR   LOOP====================
// teo:  https://www.w3schools.com/js/js_loop_for.asp
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// 1 UZDUOTIS
// isvesti 50 kartu zodi "Azuolas" i konsole  (! bandant tai padaryti, atsiras skaicius 50)

// let i;
// let tekstas = "";
// for (i = 0; i < 50; i++) {
//   console.log("Azuolas" + i);
  //arba
//   tekstas = i + "Azuolas <br>"
//   document.querySelector('.mano-azuolai').innerHTML += tekstas;
// }

// 1.1 UZDUOTIS
// isvesti i ekrana "<h3> Azuolas </h3>" su document.write arba innerHTML

// let i;
// let tekstas = "";
// console.log( document.querySelector('.mano-azuolai') );
// for (i = 0; i < 50; i++) {
//   tekstas = i + "<h3>Azuolas <br><h3>"
//   document.querySelector('.mano-azuolai').innerHTML += tekstas;
// }

// 1.2 UZDUOTIS
// isvesti 50 kartu zodi "<h2> Azuolas</h2> " i <article> elementa su  innerHTML pagalba

// let i;
// let tekstas = "";
// console.log( document.querySelector('article') );
// for (i = 0; i < 5; i++) {
//   tekstas ="<h2 class='bg-info mt-1'> Azuolas </h2>"
//   document.querySelector('article').innerHTML += tekstas;
// }

// 2.1 UZDUOTIS
// sukurti f-ja "printX(xx)", kuri  i browser langa atspausdins paduota "xx" teksta (panaudojanti document.write arba innerHTML)

// function printX(xx){
// document.querySelector('h1').innerHTML += xx;
// }
// printX('10');

// 2.2 UZDUOTIS
// paleisti f-ja "printX(xx)" 100 kartu

// for (i = 0; i < 10; i++){
//   function printX(xx){
//   document.querySelector('h1').innerHTML += xx;}
//   }
//   printX('<br> 10 <br>');
// function idetiIDOMA(){
//
// }
//
// for(i=0; i<24; i++){
//   tekstas = "<div class='col-md-3' \
//               <h2> Dviratis </h2> \
//               <p> lorem lorem lorem </p> \
//               <button> 100 Euru </button>); \
//               </div>"
// idetiIDOMA( tekstas );
// }

// 2.3 UZDUOTIS
// paleisti f-ja "printX(xx)" 12 kartu ir atspausdinti <img ...
//
function idetiIDOM(tekstas) {
    document.querySelector('article').innerHTML  += tekstas;
}


for (i= 0; i < 24; i++) {
    tekstas =  "<div class='col-md-3'> \
                    <h2> Dviratis </h2>   \
                    <p> lorem lorem lorem </p>  \
                    <button> 100 Eur </button>  \
                </div>";
    idetiIDOM( tekstas );
}

let manoFOTO =    " <img src='img/2.jpg' width='20%' height='auto' alt=' logotipas pilkam fone'>      ";

document.querySelector('article').innerHTML += manoFOTO;
// ARBA
idetiIDOM(manoFOTO);
idetiIDOM(manoFOTO);
idetiIDOM(manoFOTO);
idetiIDOM(manoFOTO);



// 4 UZDUOTIS
// A) sukurti f-jas piestiEilute(x); spausdintiStulpeli(x);
// B) nupiesti tuscia lentele paleidiznat f-jas (  antrastine eilute "vardas |  pavarde | amzius" - teks isvesti be f-jos)

// ----------------------------
// vardas |  pavarde | amzius
// ----------------------------
// |
// |
// |
// |
// |


// advance
// 5 UZDUOTIS
// sukurti f-ja, kuri apskaiciuos kiek uzdirbsime po 10 metu , jei pradzioje uzdirbdami 680, ir kai alga i menesi pakyla 1% (~6.8eur)
// var kiekMenesiu = 10 * 12;
// var menAtlyginimas = 680;
// var algosPokytis = 1;  // 1%

// ==============SCSS============================

//========= local/global or Frog/Garden =======

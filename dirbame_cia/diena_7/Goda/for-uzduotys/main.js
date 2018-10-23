console.log(   "Labas"  );

//=============FOR   LOOP====================
// teo:  https://www.w3schools.com/js/js_loop_for.asp
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// 1 UZDUOTIS
// isvesti 50 kartu zodi "Azuolas" i konsole  (! bandant tai padaryti, atsiras skaicius 50)
let i=1;
let tekstas = i + "Azuolas <br>";
for (i = 0; i<5; i++ ) {
    console.log("Azuolas" + i);
    document.querySelector ('.mano-azuolai').innerHTML += tekstas;
}

// 1.1 UZDUOTIS
// isvesti i ekrana "<h3> Azuolas </h3>" su document.write arba innerHTML



// 1.2 UZDUOTIS
// isvesti 50 kartu zodi "<h2> Azuolas</h2> " i <article> elementa su  innerHTML pagalba

for (i = 0; i<5; i++ ) { 
    tekstas = "<h2 class= 'bg-info' >  Azuolas </h2>";
    document.querySelector ('article').innerHTML += tekstas; 
}

// 2.1 UZDUOTIS
// sukurti f-ja "printX(xx)", kuri  i browser langa atspausdins paduota "xx" teksta (panaudojanti document.write arba innerHTML)


// function idetiIDOM(tekstas); {
//     document.querySelector ('article').innerHTML += tekstas;
//     }
    

// 2.2 UZDUOTIS - sudetingas uzdavinys
// paleisti f-ja "printX(xx)" 100 kartu

// 2.3 UZDUOTIS
// paleisti f-ja "printX(xx)" 12 kartu ir atspausdinti <img ...
// (Patarimai: nuotrauka ikelti i HTML, po to )

let manoFotomanoFoto = "  <img src='img/1.jpg' width='20%' height='auto' alt='logotipas'>";
// document.querySelector ('article').innerHTML +=  manoFoto;


// 4 UZDUOTIS
// A) sukurti f-jas piestiEilute(x); spausdintiStulpeli(x);
// B) nupiesti tuscia lentele paleidiznat f-jas (  antrastine eilute "vardas |  pavarde | amzius" - teks isvesti be f-jos)

// ----------------------------
// vardas |  pavarde | amzius
// ----------------------------
console.log(   "Labas"  );


$('h1').css('color', 'pink');

     // UZDUOTIS 1.0
     // A. sukurti masyva darbuotojas1: Jonas, Jonaitis, 1980, Inspektorius
     // B. sukurti masyva darbuotojas2: Ona, Onute, 1980, sekretore
     // C. sukurti masyva darbuotojas3: Kestas, Kerta, 2001, pavaduotojas
     // D. sukurti masyva 'visiDarbuotojai'
     // E.   i masyva 'visiDarbuotojai'  ideti visus dartuotoju masyvus
     // UZDUOTIS 1.1
     // isvesti visa informacija apie pirma darbuotoja (naudojant FOR cikla)
     // UZDUOTIS 1.2
     // isvesti visu  darbuotoju tik vardus (naudojant FOR cikla)
     // UZDUOTIS 1.3
     // isvesti visa informacija apie kiekviena  darbuotoja  (naudojant VIENA FOR cikla)
     // UZDUOTIS 1.4
     // isvesti visa informacija apie kiekviena  darbuotoja  (naudojant DU FOR ciklus)
     
// let darbuotojas1 = [ "Jonas", "Jonaitis", 1980, "Inspektorius" ];
// let darbuotojas2 = ["Ona", "Onute", 1980, "sekretore"];
// let darbuotojas3 = ["Kestas", "Kerta", 1980, "pavaduotojas"];
// let visiDarbuotojai = [ ]; // susikurem tuscia masyva


// // y ka ydeti       // ka ydeti
// visiDarbuotojai[0] = darbuotojas1;  //prie darbuotojas1 nerasom nieko, tai sukris visi duomenys
// visiDarbuotojai[1] = darbuotojas2;
// visiDarbuotojai[2] = darbuotojas3;

// console.log(darbuotojas1[0]);
// console.log(darbuotojas1[1]);
// console.log(darbuotojas1[2]);
// console.log(darbuotojas1[3]);


// // // ARBA
// for (var i = 0; i < darbuotojas1.length; i++) {    // darbuotojas1.length = 4 nes imama kiek duomenu tame masyve
//  console.log("darbuotojas:" + darbuotojas1 [i])
// } 

// // // ARBA

// for (var i = 0; i < darbuotojas1.length; i++) {      // darbuotojas1.length = 4 nes imama kiek duomenu tame masyve
//      console.log("vardas:" + visiDarbuotojai[0][i])
// }

// // 1.2 uzduotis
// for (var i = 0; i < visiDarbuotojai.length; i++) { 
//     console.log( "EE Vardas" + visiDarbuotojai[i][0] );  // i yra darbuotojo numeriukas, o 0 reiskia kad ima 0 kiekvieno elemento varianta
// }

// // papildoma
// for (var i = 0; i < visiDarbuotojai.length; i++) { 
//     let darbuotojoVardas = visiDarbuotojai[i][0];
//     let darbuotojoPareigos = visiDarbuotojai[i][3];
//     console.log("Vardas+ pareigos" , darbuotojoVardas, darbuotojoPareigos); 
//     // ARBA
//     console.log("Vardas", visiDarbuotojai[i][0], "Pareigos", visiDarbuotojai[i][3]);
// }


// // uzduotis 1.3
// for (var i = 0; i < visiDarbuotojai.length; i++) {
//     console.log("Darbuotojai" + darbuotojas1 + darbuotojas2 + darbuotojas3);
// }

// // uzduotis 1.4
// for (var i = 0; i < visiDarbuotojai.length; i++) {
//     for (var t = 0; t < visiDarbuotojai[i].length; t++) {
//         console.log( "4 uzduotis:" +  visiDarbuotojai[i] [t] );
//     }
// }


    // UZDUOTIS 2 --------------
    // sukurti matrica, kurioje bus saugoma kiekvienos prekes info:
    // Antraste, img pavadinimas, kaina, prekes aprasymas

    // A. sukurti masyva preke: Antraste, img pavadinimas, prekes aprasymas, kaina
    // B. i masyva visosPrekes, ideti "preke" masyva
    // C. atvaizduodi kiekvienoje eiluteje po 3 prekes (naudojant for arba foreach) ir bootstrap dizaina


    // 3 budai nuotraukoms
    // printf("<img src='./img/" . $visosPrekes[$i][1] . "' width='200px;' alt=''  />");
    // printf("<img src='./img/%s' width='200px;' alt=''  />", $visosPrekes[$i][1]);

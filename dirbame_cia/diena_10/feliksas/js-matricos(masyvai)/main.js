console.log("Labas");


$('h1').css('color', 'green');


// =================svarbus patarimai===================:
// ARRAY: jeigu naudoji FOR || while cikla, tai negalvojant masyve naudoti "i" (pvz.: myArray[i])
// FOR:   "for (i = 0; i < x; i++) {"  - nesusijusi su uzdaviniu (skirtas apeit masyva/ ivykdyti daug kartu kazka)
// matricas  - visada nusipiesti ant popieriaus eskiza su testiniais duomenimis
// matrica narys paimamas: myMatrica[x][y]   x- stulpelis; y - eilute
// matrica - pasitikritni ar nereik x ir y sukeisti vietomis (ar nesuklydai kuris stulpelis ir kuris eilute )
// matricos ilgis daznai skiriasi nuo plocio.
//  pvz.:
// for ( i < eiluciuSkaicius)
//    for ( k < stulpeliuSkaicius)
// =================// =================// ========



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
darbuotojas1 = ['Jonas', 'Jonaitis', 1980, 'Inspektorius'];
darbuotojas2 = ['Ona', 'Onute', 1980, 'sekretore'];
darbuotojas3 = ['Kestas', 'Kerta', 2001, 'pavaduotojas'];
visiDarbuotojai = [];

visiDarbuotojai[0] = darbuotojas1;
visiDarbuotojai[1] = darbuotojas2;
visiDarbuotojai[2] = darbuotojas3;
console.log(visiDarbuotojai);


for (var i = 0; i < 3; i++) {
  console.log("pareigos:" + visiDarbuotojai[i][3]);
  console.log("vardas:" + visiDarbuotojai[i][0]);

}
// isvesti visa informacija apie kiekviena  darbuotoja  (naudojant VIENA FOR cikla)
darbuotojas1 = ['Jonas', 'Jonaitis', 1980, 'Inspektorius'];
darbuotojas2 = ['Ona', 'Onute', 1980, 'sekretore'];
darbuotojas3 = ['Kestas', 'Kerta', 2001, 'pavaduotojas'];
visiDarbuotojai = [];

visiDarbuotojai[0] = darbuotojas1;
visiDarbuotojai[1] = darbuotojas2;
visiDarbuotojai[2] = darbuotojas3;
console.log(visiDarbuotojai);


for (var i = 0; i < 3; i++) {
  console.log("vardas:" + visiDarbuotojai[i][0]);
  console.log("pavarde:" + visiDarbuotojai[i][1]);
  console.log("gimimoData:" + visiDarbuotojai[i][2]);
  console.log("pareigos:" + visiDarbuotojai[i][3]);
}
// isvesti visa informacija apie kiekviena  darbuotoja  (naudojant DU FOR ciklus)
darbuotojas1 = ['Jonas', 'Jonaitis', 1980, 'Inspektorius'];
darbuotojas2 = ['Ona', 'Onute', 1980, 'sekretore'];
darbuotojas3 = ['Kestas', 'Kerta', 2001, 'pavaduotojas'];
visiDarbuotojai = [];

visiDarbuotojai[0] = darbuotojas1;
visiDarbuotojai[1] = darbuotojas2;
visiDarbuotojai[2] = darbuotojas3;
console.log(visiDarbuotojai);


for (var i = 0; i < 3; i++) {
  for (var t = 0; t < 4; i++) {

  }
  console.log( visiDarbuotojai[i][t]
  );

}

// UZDUOTIS 2 --------------
// sukurti matrica, kurioje bus saugoma kiekvienos prekes info:
// Antraste, img pavadinimas, kaina, prekes aprasymas

// A. sukurti masyva preke: Antraste, img pavadinimas, prekes aprasymas, kaina
// B. i masyva visosPrekes, ideti "preke" masyva
// C. atvaizduodi kiekvienoje eiluteje po 3 prekes (naudojant for arba foreach) ir bootstrap dizaina


// 3 budai nuotraukoms
// printf("<img src='./img/" . $visosPrekes[$i][1] . "' width='200px;' alt=''  />");
// printf("<img src='./img/%s' width='200px;' alt=''  />", $visosPrekes[$i][1]);

preke = ['Antraste', 'img pavadinimas', 'prekes aprasymas', 3000];

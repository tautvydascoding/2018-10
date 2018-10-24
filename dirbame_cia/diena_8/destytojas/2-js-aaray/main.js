console.log(   "Labas"  );
//                    0          1      2
let automobilis = ["Audi A6", 250000, "3800"];
// padidiname kaina
automobilis[2] = Number(automobilis[2]) + 100; // automobilis[2] += 100;
automobilis[1] = Number(automobilis[1]) - 50000; // automobilis[1] += -50000;
console.log(  automobilis  ); // pasitikrinimas

automobilis[3]  = "Tomas";
automobilis[4]  = 2005;
console.log(  "savininkas:" + automobilis[3]   ); // pasitikrinimas
console.log(  "gamyb. metai:" + automobilis[4]   ); // pasitikrinimas
console.log(  automobilis  ); // pasitikrinimas


// UZDUOTIS:
// sukurti vienos masinos duomenu masyva:
//  pavadinimas, pravaziuota rida, kaina
// 1. isvesti masyvo duomenis
// 2. padidinti kaina: 100
// 3. padidinti rida: -50000
// 4. i masyva ideti papildomus duomenis: savininko vardas "Tomas"
// 4.1 atspausdinti visus pakeistus masyvo duomenis
// 5. i masyva ideti papildomus duomenis: masinos metai "2004"

// sunkesne:
// html elementus: article, h2, ... susikurti su javascript/ innerHTML
// 6. atspausdinti masyvo duomenis i ekrana:
// <article>
//      <h2> pavadinimas </h2>
//      <div> savininko vardas: ...</div>
//      <span> masinos metai: ...  Rida: ...</span>
//      i mygtuka ideti: masinos kaina ....
// </article>





///

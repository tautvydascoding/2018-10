// let namas = ["4 aukstu", "365k", "250000", "pirtis"];
// let kaina = namas[2];
// //console.log(kaina);
//
// //tikrina ar kaina yra skaicius
// if( typeof(kaina) == "number" ){
//   console.log("kaina yra skaicius");
//   kaina += 10000;
// } else {
//   console.log("!!! kaina yra ne skaicius!!!");
//   kaina = Number(kaina); //paverciam i skaicius
//   kaina += 10000;
// }
// console.log(kaina);
// console.log("3 pozicija: " + namas[3]);
// namas[3] = "pirtis yra, bet reikia remonto";
// namas[4] = "baseinas";
// console.log("4 pozicija: " + namas[4]);
// console.log("3 pozicija: " + namas[3]);
// namas[90] = "Jurga"
// console.log(namas);

// ========js best practice & common mistakes (~2h)

// UZDUOTIS:
// sukurti vienos masinos duomenu masyva:
//  pavadinimas, pravaziuota rida, kaina
// 1. isvesti masyvo duomenis
// 2. padidinti kaina: 100
// 3. padidinti rida: -50000
// 4. i masyva ideti papildomus duomenis: savininko vardas "Tomas"
// 4.1 atspausdinti visus pakeistus masyvo duomenis
// 5. i masyva ideti papildomus duomenis: masinos metai "2004"

let automobilis = ["Proche", "175000", "199991"];
let kaina = automobilis[2];
let rida = automobilis[1];
let pavadimas = automobilis[0];
console.log(kaina);
console.log(rida);

//tikrina ar kaina yra skaicius
if( typeof(kaina, rida) == "number" ){
  console.log("kaina yra skaicius");
  console.log("rida yra skaicius");
  kaina += 100;
  rida += -50000;
} else {
  console.log("!!! kaina yra ne skaicius!!!");
  console.log("!!! rida yra ne skaicius!!!");
  kaina = Number(kaina);
  rida = Number(rida); //paverciam i skaicius
  kaina += 100;
  rida += -50000;
}
automobilis[2] = kaina;
automobilis[1] = rida;

console.log(kaina);
console.log(rida);
console.log("kaina yra: " + automobilis[2]);
console.log("rida yra: " + automobilis[1]);
automobilis[3] = "Tomas";
automobilis[4] = 2004;
console.log("Automobilio savininkas yra: " + automobilis[3]);
console.log("Masinos metai yra: " + automobilis[4]);
console.log(automobilis[0] + " " + automobilis[1] + " " + automobilis[2] + " Automobilio savininkas yra:  " + automobilis[3] + "," + " Masinos metai yra:  " + automobilis[4]);

// sunkesne:
// html elementus: article, h2, ... susikurti su javascript/ innerHTML


// 6. atspausdinti masyvo duomenis i ekrana:
// <article>
//      <h2> pavadinimas </h2>
//      <div> savininko vardas: ...</div>
//      <span> masinos metai: ...  Rida: ...</span>
//      i mygtuka ideti: masinos kaina ....
// </article>

//=============bootstrap---sm-md-lg-xl (30-60m)==========

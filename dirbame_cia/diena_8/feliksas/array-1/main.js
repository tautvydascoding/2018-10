console.log("Labas");

// -------- --Array / Masyvai  TEORIJA (~2h)--------------------


// UZDUOTIS
// 1.1 sukurti tuscia masyva "prekiautojai"
// 1.2 uzpildyti masyva prekiaujanciomis imonemis pvz: senukai, ...
// 1.3 isvesti i console/ekrana "prekiautojai" masyva

// 2 pervadinti pirma stalciu pvz + "ir KO"
// 3 sukeisti antro ir trecio stalciu reiksmes vietomis.
// !negalima rasyti rankomis String (nes duomenys kinta, ir jus nezinote koki duomenys bus po savaites)

// 3.1  padaryti 3) uzdaviniui f-ja sukeistiMasyvo2elementus(x, y)

namas = ["4 aukstu", "356k", "250000", "pirti"];
kaina = namas[2];

if (typeof(kaina) == "number") {
  console.log("kaina yra skaicius");
  kaina += 10000;
} else {
  console.log("!!!kaina yra ne skaicius!!!");
  kaina = Number(kaina);
  kaina += 10000;
}
namas[3] = "pirtis yra, neveikia";
namas[4] = "baseinas";
console.log("4 stalcius:" + namas[4]);
console.log("3 stalcius:" + namas[3]);

namas[50] = "jurga";
console.log("jurga");

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

honda = ["accord", "249500", "13500"];
kaina = honda[2];

if (typeof(kaina) == "number") {
  console.log("kaina yra skaicius");
  kaina += 50;
}

honda[2] = kaina;
honda[0] = "accord";
honda[1] = "249500";
honda[2] = "13500";
honda[3] = "Tomas";
honda[4] = "2004";
console.log("pavadinimas:" + honda[0]);
console.log("rida:" + honda[1]);
console.log("kaina:" + honda[2]);
console.log("savininko vardas:" + honda[3]);
console.log("metai:" + honda[4]);


// sunkesne:
// html elementus: article, h2, ... susikurti su javascript/ innerHTML
// 6. atspausdinti masyvo duomenis i ekrana:
// <article>
//      <h2> pavadinimas </h2>
//      <div> savininko vardas: ...</div>
//      <span> masinos metai: ...  Rida: ...</span>
//      i mygtuka ideti: masinos kaina ....
// </article>






document.querySelector( 'body' ).innerHTML += "<article> </article>";
pavadinimas = "<h2" + honda[0] + "</h2";
document.querySelector( 'article' ).innerHTML += pavadinimas ;

console.log(   "Labas"  );

// PAVIZDYS ----------------------
var namas = ["4 ausktu", "356kv", "250000", "pirti"];
var kaina = namas[2];
//console.log(kaina);

// tikrinu ar kaina yra skaicius
if(typeof(kaina) =="number"){
  console.log("yra skaicius");
  kaina += 10000;
}else {
  console.log("kaina nera skaicius");
  kaina = Number(kaina); // verciam kaina i skaiciu
  kaina += 10000;
}
namas[3] = "pirtis yra, bet reikia remonto";
namas[4] = "baseinas";
console.log("4 stalcius"+ " " + namas[4]);
console.log("3 stalcius"+ " " + namas[3]);

console.log(namas);


// ========js best practice & common mistakes (~2h)

// -------- --Array / Masyvai  TEORIJA (~2h)--------------------


	// UZDUOTIS
	// 1.1 sukurti tuscia masyva "prekiautojai"
	// 1.2 uzpildyti masyva prekiaujanciomis imonemis pvz: senukai, ...
	// 1.3 isvesti i console/ekrana "prekiautojai" masyva

	// 2 pervadinti pirma stalciu pvz + "ir KO"
 	// 3 sukeisti antro ir trecio stalciu reiksmes vietomis.
		// !negalima rasyti rankomis String (nes duomenys kinta, ir jus nezinote koki duomenys bus po savaites)

	// 3.1  padaryti 3) uzdaviniui f-ja sukeistiMasyvo2elementus(x, y)

//	var prekiautojai = []; // empty array

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
var masina = ["Audi", 25000, 1000 ];
var padavinimas = masina[0];
var rida = masina[1];
var price = masina[2];
console.log("Automobilio pavadinimas: " + masina[0]);
console.log("Automobilio rida: " + masina[1]);
console.log("Automobilio kaina: " + masina[2]);
price += 2500;
rida += -5000;
masina[3] = "Alvydas";
masina[4] = "masinos metai 2004";
console.log("Automobilio savininkas: " + masina[3]);
console.log("Automobilio melaginga rida : " + rida);
console.log("Automobilio atnaujinta kaina: " + price);
console.log("Automobilio pagaminimo metai: " + masina[4]);
console.log(masina);

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

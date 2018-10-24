console.log(   "Labas"  );




let namas = ["4 aukstu", "356k", "250000", "pirti"];
let kaina = namas[2];
//console.log( kaina ); bandem paiimt masyva

//kaina = Number(kaina); tikrinimas


// tikrinu ar kaina yra skaicius
if( typeof( kaina ) =="number"  ) {
  console.log("kaina yra skaicius");
  kaina += 10000;
}else {
  console.log("!!kaina yra ne skaicius!!");
  kaina = Number(kaina); // paverciam i skaicius
  kaina += 10000;

}


//pakeisti pirti i baseina
namas[3] = "pirti yra, bet reikia remonto"
namas[4] = "baseinas";
console.log("4 stalcius:" + namas[4] );
console.log("3 stalcius:" + namas[3] );

namas[9] = "jurga";
// trumpinimas masyvo
console.log( namas );

// UZDUOTIS:
// sukurti vienos masinos duomenu masyva:
//  pavadinimas, pravaziuota rida, kaina
// 1. isvesti masyvo duomenis
// 2. padidinti kaina: 100
// 3. padidinti rida: -50000
// 4. i masyva ideti papildomus duomenis: savininko vardas "Tomas"
// 4.1 atspausdinti visus pakeistus masyvo duomenis
// 5. i masyva ideti papildomus duomenis: masinos metai "2004"


let masina = ["audi", 150000, 9000];
let pravaziuota = masina[1];
let pavadinimas = masina[0];
let kainaa = masina[2];

masina[2] = masina[2] + 100; //masina[2] += 100;
masina[1] = masina[1] - 50000; //masina[1] += -50000;
console.log(masina);

masina[3] = "Tomas";
masina[4] = "2005";
console.log("savininas:" + masina[3] );//patikrinimas

if( typeof(pravaziuota) =="number") {
console.log(pravaziuota);
}else {
  console.log("nera pravazevus");
  kaina = Number(kaina);
}


if(typeof(pavadinimas) == "string"){
  console.log("pavadinimas yra audi");
}else {
  console.log("be pavadinimo");
}
if (typeof(kainaa) == "number" ) {
  console.log(9000);
}else {
  console.log("nera 9000");

}
document.querySelector('body').innerHTML += "<article> </article>";
let oho = "<h2>" + masina[2] + "</h2>";
document.querySelector('article').innerHTML += pavadinimas ;

let savininkas = "<div>" + masina[3] + "</div>";
document.querySelector('article').innerHTML += savininkas ;

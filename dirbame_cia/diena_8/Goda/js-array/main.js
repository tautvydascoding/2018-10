console.log(   "Labas"  );

	// UZDUOTIS
	// 1.1 sukurti tuscia masyva "prekiautojai"
	// 1.2 uzpildyti masyva prekiaujanciomis imonemis pvz: senukai, ...
	// 1.3 isvesti i console/ekrana "prekiautojai" masyva

	// 2 pervadinti pirma stalciu pvz + "ir KO"
 	// 3 sukeisti antro ir trecio stalciu reiksmes vietomis.
		// !negalima rasyti rankomis String (nes duomenys kinta, ir jus nezinote koki duomenys bus po savaites)

	// 3.1  padaryti 3) uzdaviniui f-ja sukeistiMasyvo2elementus(x, y)

	// var prekiautojai = []; // empty array


    let namas = ["4 aukstu", "356k", "250000", "pirtis"];
    let kaina = namas [2];
   
    // console.log( kaina);
    if (typeof (kaina) == "number") {
        // tikrinu, ar kaina yra skaicius
            console.log("kaina yra skaicius");
    } else { 
            console.log(" kaina nera skaicius");
        kaina = Number (kaina);
        // kaina verciame i skaiciu
        kaina += 10000;   
    } 
    console.log(kaina);
    // kaina padideja

    namas [3] = "pirtis yra, bet reikia remonto";
    namas [4] = "baseinas";
console.log("4 pozicija: " + namas [4] );
console.log("3 pozicija: " + namas [3] );

namas [9] = "Jurga"

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

let masina = ["pavadinimas", 150000, 10000];
    let kaina1 = masina [2];
        kaina1 += 100;

paprasciau: masina [2] +=100; 

    console.log( "sumazinta kaina yra: " + kaina1); 
    let rida = masina [1];
       rida -= 50000;
       
       masina [1] = +-50000;
    console.log("rida kazkodel sumazejo:" + rida); 
masina [3] = "tomas: " ;
masina [4] = "2004: ";

console.log("savininko vardas:" + masina [3]);
console.log("pagaminimo metai:" + masina [4]);

console.log(masina);

// html elementus: article, h2, ... susikurti su javascript/ innerHTML
// 6. atspausdinti masyvo duomenis i ekrana:
// <article>
//      <h2> pavadinimas </h2>
//      <div> savininko vardas: ...</div>
//      <span> masinos metai: ...  Rida: ...</span>
//      i mygtuka ideti: masinos kaina ....
// </article>


document.querySelector ('body').innerHTML += "<article> </article>";
let pavadinimas = "<h2>" + masina [0] + "</h2>";
document.querySelector ('article').innerHTML +=  pavadinimas;

let savininkas = "<div> savininko vardas" + masina [3] + "</div>";
document.querySelector ('article').innerHTML += savininkas;

let masinosMetai = "<span> masinos metai:" + masina [4] + "</span>" ;
// document.querySelector ('artcle').innerHTML += masinosMetai;
// document.querySelector ('article span').innerHTML += "Rida:" + masina [1];
// meta klaia


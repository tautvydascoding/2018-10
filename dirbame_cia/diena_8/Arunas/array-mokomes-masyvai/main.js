console.log(   "Labas"  );

/*
let namas = [ "4 aukstu", "356kv", "250000", "pirtis" ];

let kaina = namas [2];

// console.log (kaina);  //patikrina ar tikrai paima kaina y console-> log
// document.querySelector ( "h1" ).innerHTML = kaina;  //patikrina ar tikrai paima kaina y ekrana

if (typeof (kaina) == "number" ) {   //tikrinu ar kaina yra skaicius
    console.log (" kaina yra skaicius");
    kaina +=10000;  // padidinam kaina
    } else {
        console.log (" kaina yra ne skaicius");
        kaina = Number(kaina);  //paverciam kaina y skacius
        kaina += 10000;   // padidinom kaina 10000
}

namas [4] = "baseinas";
namas [3] = "pirtis yra, bet reikia remonto"

document.querySelector ( "h1").innerHTML = "4 stalcius" + namas[4] ;
document.querySelector("h1").innerHTML = "2 stalcius" + namas[2];
document.querySelector("h1").innerHTML = "namo aprasymas " + namas;


console.log ("4 stalcius yra" + namas [4] );
console.log("namo aprasymas " + namas );
*/


// UZDUOTIS:
// sukurti vienos masinos duomenu masyva:
//  pavadinimas, pravaziuota rida, kaina


let masina = ["Opel", 250000, "3500"];
let kaina = masina [2];
kaina = Number(kaina);
// console.log (kaina);


/*           ///////////////// patikrinu ar kaina yra skaicius
if (typeof (kaina) == "number"  ) {
    console.log ( "kaina yra skaicius" );
} else {
    console.log ("kaina nera skaicius");
}
*/

// 1. isvesti masyvo duomenis
document.querySelector ("h1").innerHTML = "pirma uzduotis:" + " " + "<br>masinos pavadinimas yra:" + " " + masina[0] + " " + "<br>masinos rida:" + " " + masina[1] + " " + "<br>masinos kaina yra:" + " " + masina[2] ;

// 2. padidinti kaina: 100

masina [2] = kaina + 100;

document.querySelector ("h2").innerHTML = "<br><br>antra uzduotis:" + " " + "<br>masinos pavadinimas yra:" + " " + masina[0] + " " + "<br>masinos rida:" + " " + masina[1] + " " + "<br>masinos kaina yra:" + " " + masina[2] ;


// 3. padidinti rida: -50000

let rida = masina [1];
masina [1] = rida -5000;

document.querySelector ("h3").innerHTML = "<br><br>trecia uzduotis:" + " " + "<br>masinos pavadinimas yra:" + " " + masina[0] + " " + "<br>masinos rida:" + " " + masina[1] + " " + "<br>masinos kaina yra:" + " " + masina[2];


// 4. i masyva ideti papildomus duomenis: savininko vardas "Tomas"

masina [3] = "tomas";

// 4.1 atspausdinti visus pakeistus masyvo duomenis

document.querySelector ("h4").innerHTML = "<br><br>ketvirta uzduotis:" + " " + "<br>masinos pavadinimas yra:" + " " + masina[0] + " " + "<br>masinos rida:" + " " + masina[1] + " " + "<br>masinos kaina yra:" + " " + masina[2] + "<br> masinos savininkas yra: " + " " + masina[3] ;


// 5. i masyva ideti papildomus duomenis: masinos metai "2004"

masina [4] = 2010;  //neveikia

document.querySelector("h5").innerHTML = "<br><br>penkta uzduotis:" + " " + "<br>masinos pavadinimas yra:" + " " + masina[0] + " " + "<br>masinos rida:" + " " + masina[1] + " " + "<br>masinos kaina yra:" + " " + masina[2] + "<br> masinos savininkas yra: " + " " + masina[3] + "<br>" + "masinos metai yra:" + masina [4];

//pakeiciu kaina y skaiciu


// sunkesne:
// html elementus: article, h2, ... susikurti su javascript/ innerHTML
// 6. atspausdinti masyvo duomenis i ekrana:
// <article>
//      <h2> pavadinimas </h2>
//      <div> savininko vardas: ...</div>
//      <span> masinos metai: ...  Rida: ...</span>
//      i mygtuka ideti: masinos kaina ....
// </article>

document.querySelector("body").innerHTML += "<article> </article>";

let pavadinimas = "<h2>" + masina [0] + "<h2>";

document.querySelector("article").innerHTML += pavadinimas;

let savininkas = "<div> savininko vardas: " + masina [3] + "</div>";

let masinosMetai = "<span> masinos metai yra: </span>" + masina [4];

document.querySelector("article").innerHTML += pavadinimas;
document.querySelector("article span").innerHTML += automobilis [1];

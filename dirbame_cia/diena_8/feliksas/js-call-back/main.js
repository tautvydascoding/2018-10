console.log("Labas");


// UZDUOTIS 1:
// SUKURTI DVI F-JAS:
// viena pasisveikina
// kita atsisveikina

// UZDUOTIS 1.1
// patobulinti f-ja, kuri sveikinasi, kad ji papildoma argumenta "callback"  / "iskviestiPabaigusDarbus"

// UZDUOTIS 1.2
// iskviesti pasisveikinimo f-ja, ir jai padduoti atsisveikino f-ja
function pasisveikinu(paleistiPriesPabaiga) {
  console.log("sveikas");
  console.log(paleistiPriesPabaiga);

}

function atsisveikinu() {
  console.log("viso gero");
}

pasisveikinu(atsisveikinu);

console.log(   "Labas"  );

// UZDUOTIS 1:
// SUKURTI DVI F-JAS:
// viena pasisveikina
// kita atsisveikina
function sveikinuosi( paleistiPriesPabaiga) {
    console.log( "Sveiki" );
    console.log(paleistiPriesPabaiga);
    paleistiPriesPabaiga(); // F-JOS PALEIDIMAS
}
function atsisveikinu() {
    console.log( "Viso gero" );
}
// sveikinuosi(22);
// sveikinuosi("mARTYNAS");
sveikinuosi(  atsisveikinu );



// UZDUOTIS 1.1
// patobulinti f-ja, kuri sveikinasi, kad ji papildoma argumenta "callback"  / "iskviestiPabaigusDarbus"

// UZDUOTIS 1.2
// iskviesti pasisveikinimo f-ja, ir jai padduoti atsisveikino f-ja

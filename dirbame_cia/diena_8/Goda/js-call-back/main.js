console.log(   "Labas"  );

// callback

// 1 uzduotis:
// // sukurti 2 f-jas:
// viena pasisveikina "sveikinuosi", 
// kita atsisveikina;
function sveikinuosi (paleistiPriesPabaiga) {
    console.log("Sveiki");
    console.log (paleistiPriesPabaiga);
}
    
function atsisveikinu () {
    console.log("Viso gero");
}
sveikinuosi (22);
sveikinuosi ("Martynas");
atsisveikinu ();

sveikinuosi (atsisveikinu);
// paleistiPriesPabaiga (); call back nesuveike, pasitikrinti. 


// 1.1. uzduotis 
// patobulinti f-ja, kuri sveikinasi, kad ji papildoma argumenta "callback" / "iskviestiPabaigusDarbus"




// 1.2 uzduotis
// iskviesti pasisveikinomo f-ja ir jai paduoti atsisveikinimo f-ja.  


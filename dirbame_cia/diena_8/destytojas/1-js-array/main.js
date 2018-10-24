console.log(   "Labas"  );

let namas = ["4 aukstu", "356k", "250000", "pirtis"];
let kaina = namas[2];
// console.log( kaina );

// tikrinu ar kaina yra skaicius
if( typeof(kaina) == "number"   ) {
    console.log( "kaina yra skaicius");
    kaina += 10000;
} else {
    console.log( "!!!kaina yra ne skaicius!!!");
    kaina = Number(kaina); // paverciam i skaicius
    kaina += 10000;
}
namas[2] = kaina;



console.log(  "3 pozicija: " + namas[3]  );
namas[3] = "pirtis yra, bet reikia remonto";
namas[4] = "baseinas";
console.log(  "4 pozicija: " + namas[4]  );
console.log(  "3 pozicija: " + namas[3]  );
console.log(  "namo kaina: " + namas[2]  );

namas[90] = "Jurga";  // String

console.log( namas  );


//

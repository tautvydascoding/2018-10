console.log(   "Labas"  );

    // duomenu pvz:
   // var perkamuPrekiuKiekis = "";
   // var perkamuPrekiuKiekis = "Tomas";
   // var perkamuPrekiuKiekis = 1;
   var perkamuPrekiuKiekis = 20;
   try {
        if(perkamuPrekiuKiekis == "") throw "empty";
        if(isNaN(perkamuPrekiuKiekis)) throw "not a number";

        // paverciam i skaiciu
        perkamuPrekiuKiekis = Number(perkamuPrekiuKiekis);
        if(perkamuPrekiuKiekis < 0) throw "too low";
        if(perkamuPrekiuKiekis > 100) throw "too high";
   }
   catch ( klaida ) {
       console.log("Klaida: " + klaida );
   }
   finally {
       console.log("nesvarbu kas  - as visada suveiksiu");
   }

//

// console.log(   "Labas"  );
//
// var kiekis = 100;
// try {
//   if ( kiekis > 50) {
//     throw ( "Del tokio kiekio kreiptis telefonu" );
//   } else {
//     //parduodame
//   }
// }
// catch ( e ) {
//   console.log( "Error :" + e.description );
// }
// finally {
//   console.log("nesvarbu kas - as visada suveiksiu");
// }

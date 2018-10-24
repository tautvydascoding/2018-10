console.log(   "Labas"  );

var kiekis = 100;
try {
  if (kiekis > 50) {
    throw ("Del tokio kiekio kreiptis telefonu");
  } else {
    //parduodam
  }
}
catch ( e ) {
  alert("Error :" + e.description);
}
finally {
  console.log("nesvarbu kas - as visada suveiksiu");
}

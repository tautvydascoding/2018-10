console.log(   "Labas"  );
//  1.1 UZDUOTIS
//  sukurti funkcija "printKaina(x)" ,
//  kuri atspausdina i konsole "x" reiksme
//  iskviesti f-ja print(15.99);
function printKaina(x) {
  document.write( x  + "<br>");
}
printKaina("Kaina: " + " " + 15.99);


//  1.2 UZDUOTIS
// iskviesti f-ja print 3 kartus, kad atspausdintu 3 skirtingas kainas:  999 , 13.49, 100.05
//    vietoj x irasant, koki nors teksta pvz: printKaina( 999);

function print(x) {

  document.write(x + "<br>");
}
print("Kaina" + " " + 999);
print("Kaina" + " " + 13.49);
print("Kaina" + " " + 100.05);

// 2.1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis()", kuri apskaiciuoja vidurki is  5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki (pazymius sukurti f-jos viduje) 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

function pazimiuVidurkis() {

  var vidurkis = (5 + 10 + 8 + 6 + 8) / 5;
//  document.write("Pazimiu vidurkis yra " + vidurkis);
  document.querySelector("h1").innerHTML += "Pazimiu vidurkis yra " + vidurkis + "<br>";
}
pazimiuVidurkis ();

// 2.2 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis1(x1, x2, x3, x4, x5)", kuriai galima paduoti 5 kintamuosius,
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki, 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

function pazimiuVidurkis1(x1,x2,x3,x4,x5) {

  var vidurkis = (x1 + x2 + x3 + x4 + x5) / 5;
  document.querySelector("h1").innerHTML += "Pazimiu vidurkis yra " + vidurkis + "<br>";
}
pazimiuVidurkis1(5, 10 , 8 , 6 , 8);

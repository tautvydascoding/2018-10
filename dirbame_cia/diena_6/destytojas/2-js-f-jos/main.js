
//  1.1 UZDUOTIS
//  sukurti funkcija "printKaina(x)" ,
//  kuri atspausdina i konsole "x" reiksme
//  iskviesti f-ja printKaina(15.99);
function printKaina( x ){ // x- local kintamasis
   document.write( x + "<br>");  // arba
   // document.write( "<div>"+ x + "</div>");
}
printKaina(16.99);
printKaina(999);
printKaina(13.99);
printKaina(100.05);


//  1.2 UZDUOTIS
// iskviesti f-ja print 3 kartus, kad atspausdintu 3 skirtingas kainas:  999 , 13.49, 100.05
//    vietoj x irasant, koki nors teksta pvz: printKaina( 999);

// 2.1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis()", kuri apskaiciuoja vidurki is  5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki (pazymius sukurti f-jos viduje) 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

function pazymiuVidurkis() {
    var vidurkis = (5 + 10 + 8 + 6 + 8 ) / 5;
    // console.log("vidurkis yra:" + vidurkis);
    document.querySelector('h1').innerHTML  +=  "vidurkis yra:" + vidurkis +"<br>";
}
pazymiuVidurkis(); // ievos
pazymiuVidurkis(); // petriuko ???
pazymiuVidurkis(); // karolio ???


// 2.2 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis1(x1, x2, x3, x4, x5)", kuriai galima paduoti 5 kintamuosius,
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki, 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

function pazymiuVidurkis22(x1, x2, x3, x4, x5) {
    var vidurkis = (x1 + x2 + x3 + x4 + x5) / 5;
    // console.log("vidurkis yra:" + vidurkis);
    document.querySelector('h1').innerHTML  +=  "vidurkis yra:" + vidurkis +"<br>";
}
pazymiuVidurkis22( 5, 5 ,5 ,5 ,10   );
pazymiuVidurkis22( 10, 10 , 9 , 2, 9  );
pazymiuVidurkis22( 4, 4 , 9 , 2, 9  );

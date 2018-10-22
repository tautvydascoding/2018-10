console.log(   "Labas"  );

// 1.1 UZDUOTIS
//  sukurti funkcija "printKaina(x)" ,
//  kuri atspausdina i konsole "x" reiksme
//  iskviesti f-ja print(15.99);

function printKaina (x) {
    document.write ("kaina yra:" + x);
    }
printKaina (15.99);     

//  1.2 UZDUOTIS
// iskviesti f-ja print 3 kartus, kad atspausdintu 3 skirtingas kainas:  999 , 13.49, 100.05
//    vietoj x irasant, koki nors teksta pvz: printKaina( 999);

function printKaina (x) {
   console.log("kaina yra:" + x);
    }
printKaina ("labai gera:" + 999); 
printKaina (13.49);
printKaina (100.05);

// 2.1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis()", kuri apskaiciuoja vidurki is  5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki (pazymius sukurti f-jos viduje) 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

function pazymiuVidurkis (vardas, a,b,c,d,e) {
    var vidurkis = (a+b+c+d+e)/5
    console.log(vardas + "pazymiu vidurkis yra", vidurkis);
    document.querySelector('h1').innerHTML = "vidurkis yra:" + vidurkis + "<br>"; 
}
     pazymiuVidurkis ("  ", 5, 10 , 8 , 6 , 8 )
     pazymiuVidurkis ("jono", 5, 10 , 8 , 6 , 8 )

// 2.2 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis1(x1, x2, x3, x4, x5)", kuriai galima paduoti 5 kintamuosius,
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki, 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)





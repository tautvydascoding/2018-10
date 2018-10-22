/*

// _____ 1.1 uzduotis _____

function printKaina(){
    var kaina = 15.99;
    console.log( kaina );
}
printKaina();

// _____ 1.2 uzduotis _____

function printKainaTrys (kaina){
    console.log(kaina);
}

printKainaTrys(999);
printKainaTrys(13.49);
printKainaTrys(100.05);

// _____ 2.1 uzduotis _____

function pazymiuVidurkis(){
    var paz1 = 5;
    var paz2 = 10;
    var paz3 = 8;
    var paz4 = 6;
    var paz5 = 8;

    var vidurkis = (paz1+paz2+paz3+paz4+paz5)/5;
    console.log(vidurkis);
}

pazymiuVidurkis();

// _____ 2.2 uzduotis _____ ??????????  NESIGAVO

function pazymiuVidurkisVaiku(x1, x2, x3, x4, x5){
    var vidurkis = (x1+x2+x3+x4+x5)/5;
    document.querySelector('h1').innerHTML += 'Jono pazymiu vidukis: ' + vidurkis +'<br>';
}

pazymiuVidurkisVaiku(5, 10 , 8 , 6 , 8);

__________ I dalies pabaiga __________*/

// __________ II dalis __________

function alga(){
    var PSD = 10;
    var mokesciai = 1000/PSD;
    return mokesciai;
}

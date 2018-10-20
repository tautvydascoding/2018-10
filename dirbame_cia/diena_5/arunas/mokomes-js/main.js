// console.log(   "Labas"  );


// var x = 10/20 * (((5)));
// var y = Math.sin(30);
// console.log( "sinusas");
// console.log( y);

// var salis= "Lietuva";
// var miestas= "kaunas";
// var tekstas;

// tekstas = miestas + " " + salis + " " + "Europa";
// console.log (tekstas);


// UZDUOTIS
// suskaiciuoti alga i rankas, jeigu 
// atlyginimas ant popieriaus 890
// mokesciai:
//  PSD 9%
//  VSD 24% nuo puses atlyginimo
// susikurt 4-5 kintamuosius ir apskaiciuoti alga i rankas

var atlyginimas = 890;  //eurais i rankas
var psd = 0.09;  // 9%
var vsd = 0.24;  //24%

var algaRankose = atlyginimas-psd*atlyginimas-(0.5*atlyginimas)*vsd;


console.log("alga i Rankas" + " " + algaRankose + " " + "eur" );

/*  1 UZDUOTIS
 sukurti kintamuosius (ir jiems priskirti reiksmes):
 vardas, pavarde, amzius, atlyginimas
 ir panaudoti:
 console.log( vardas, pavarde);

 teo:
 typeof( k ); f-ja kuri isveda kintamojo tipa
 console.log(    typeof(vardas)  );
 console.log(    typeof(amzius)  ); */

var vardas= "Arunas";
var pavarde= "Visockas";
var amzius= 29;
var atlyginimas =890;

console.log (vardas, pavarde);

console.log ( "vardo tipas yra" +  typeof (vardas) );
console.log(  "amziaus tipas yra" +  typeof (amzius) );

//  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" , kuri atspausdina i konsole pirmos uzduoties kintamuosius

function spausdintiViska () {
    console.log (vardas, pavarde, amzius, atlyginimas);  //arba taip
}
spausdintiViska();


//  3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus "uzduotis 1" kintamajam - "atlyginimas")


function metinesPajamos () {      // funkcija metinem pajamom apskaiciuoti paimant sumas is senesniu skaiciavimu
    var metuPajamos= algaRankose*12;
  // console.log ( atsakymas*12);
    console.log ("gaunama", +metuPajamos + " "+ "eur" + " " + "i" + " " + "rankas" + " " + "per" + " " + "metus");
}

metinesPajamos();  //issaukiam funkcija kuri parodo metines pajamas


//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius

/*  var salis = "Litwa";
var miestas = "Kauns";
var adresas = "silainiai";
var kodasPasto = "LT3000";

function spausdintiAdresa () {
    var txt = salis + " " + miestas + " " + adresas + " " + kodasPasto ;
    console.log (txt);
}  

spausdintiAdresa ();

*/

// ---- advance-----
//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");

function printText (manoTekstas) {
    console.log("ivestas tekstas yra:" + " " + manoTekstas   );
}

var istorija = "mano ilga istorija";

printText (istorija);

// 7 UZDUOTIS
// F-ja kuri paskaiciuoja trikampio ilgaja krastine (Pitagoro teorema)
// pitagoroTeorema(x, y)      xkvadratu + ykvadratu ir is visko istraukti sakni

function pitagoroTeorema (x, y){
    var trikampioIstrizaine = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));  //Math.pow funkcija kelimas laipsniu
    console.log ( "trikampio istrizaine yra", trikampioIstrizaine );
}

pitagoroTeorema (2, 2);
pitagoroTeorema (10, 5);


/*   8uzduotis

function atlyginimasPoMokesciu (atlyginimasAntPopieriaus) {

}

atlyginimasPoMokesciu(890); //Ievos
atlyginimasPoMokesciu(1450); //Martyno
atlyginimasPoMokesciu(2300); //Domo
*/

function atlyginimasPoMokesciu (atlyginimasAntPopieriaus, vardas) {
    var visoMokesciu = (atlyginimasAntPopieriaus - (atlyginimasAntPopieriaus - (atlyginimasAntPopieriaus - (atlyginimasAntPopieriaus * psd) - ((atlyginimasAntPopieriaus * 0.5) * vsd ))));
    console.log ( " atlyginimas y rankas" , visoMokesciu, vardas);
    
}

atlyginimasPoMokesciu(1000, "Ievai"); //Ievos
atlyginimasPoMokesciu(1450, "Martynui"); //Martyno
atlyginimasPoMokesciu(2300, "Domui"); //Domo
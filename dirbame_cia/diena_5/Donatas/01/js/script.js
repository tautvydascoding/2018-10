/*
var vardas = 'Tomas';
var pavarde = 'Tomauskis';
var atlyginimas = 1000;
var amzius = 21;
var salis = 'Lietuva';
var miestas = 'Kaunas';
var adresas = 'Kursiu g. 7';
var pastas = 3000;

function printMetiniuPajamuDydis(){
var metinesPajamos = atlyginimas * 12;
console.log( 'metines mano pajamos: ' + metinesPajamos );
}

function printAdress(){
    var txt = adresas + ', ' + miestas + ', ' + pastas + ', ' + salis;
    console.log( txt );
}

printMetiniuPajamuDydis();
printMetiniuPajamuDydis();
printAdress();

function spauzdintiTeksta ( manoTekstas ) {
    console.log('ivestas tekstas yra: ' + manoTekstas);
}

spauzdintiTeksta('Tomas anksti keliasi rytais');
var istorija = 'Raudonkpuraite kartais eina i miska';
spauzdintiTeksta( istorija );

function teorema(x, y) {
    var istrizaine = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
console.log('Trikampio istrizaine yra: ' + istrizaine);
}


teorema(2, 2);
teorema(3, 2);

/*
var vardas = ['Ieva', 'Martynas', 'Domas'];
var alga = [890, 1450, 2300];
var mokesciai = [9, 24, 2];
*/

function atlyginimasPoMokesciu(atlyginimasAntPopieriaus, vardas){

var psd = 9;
var vsd = 24;

var moketiPsd = (atlyginimasAntPopieriaus * psd/100);
var moketiVsd = ((atlyginimasAntPopieriaus/2)*vsd/100);
var iRankas = atlyginimasAntPopieriaus - moketiPsd - moketiVsd;
console.log(vardas+' sumoketi PSD: ' + moketiPsd);
console.log(vardas+' sumoketi VSD' + moketiVsd);
console.log(vardas+' i rankas:' + iRankas);
}

atlyginimasPoMokesciu(1000, 'Ieva');
atlyginimasPoMokesciu(1500, 'Martynas');
atlyginimasPoMokesciu(2300, 'Domas');
// function atlyginimasPoMokesciu(atlyginimasAntPopieriaus)
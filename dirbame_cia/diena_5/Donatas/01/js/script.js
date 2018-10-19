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


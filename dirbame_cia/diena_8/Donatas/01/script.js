/*
function piestiEilute(ilgis){
    let eilute ="";
    for(var i = 0; i < ilgis; i++){
        eilute = eilute + "-";
    }
    console.log(eilute);
}

piestiEilute(20);
piestiEilute(10);
piestiEilute(20);


let namas = ['4 aukštu', '356 kv', '250000', 'pirti'];

let kaina = namas[2];
//console.log(kaina);
if(typeof(kaina)=='number') {
    console.log('kaina yra skaicius');
}
else{
    console.log('!!! kaina nera skaicius !!!');
    kaina = Number(kaina);
    kaina += 10000;
}

namas[3] = 'pirtis yra, bet reikia remonto';
namas[4] = 'baseinas';
console.log('array index 3: ' +namas[3]);
console.log('array index 4: ' +namas[4]);
*/

// ----- 1 uzduotis -----

let masina = ['Volvo', '350000', '500'];

let kaina = masina[2];
if(typeof(kaina)=='number') {
    console.log('Kaina yra skaicius');
}
else {
    console.log('kaina nera skaicius !!!');
    kaina = Number(kaina);
    kaina += 100;
}

masina[2] = kaina;
console.log(masina[2]);

let rida = masina[1];
if(typeof(rida)=='number') {
    console.log('Rida yra skaicius');
}
else {
    console.log('Rida nera skaicius !!!');
    rida = Number(rida);
    rida += 50000;
}

masina[1] = rida;
console.log(masina[1]);

masina[3] = 'Tomas';

console.log(masina);

masina[4] = 1990;

console.log(masina);

// ----- 2 uzduotis -----

document.querySelector('h2').innerHTML += masina[0];
document.querySelector('.vardas').innerHTML += masina[3];
document.querySelector('.metai').innerHTML += masina[4];
document.querySelector('.rida').innerHTML += masina[1];
document.querySelector('.kaina').innerHTML += masina[2];
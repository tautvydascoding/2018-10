
let darbuotojas1 = ['Jonas', 'Jonaitis', 1980, 'Inspektorius'];
let darbuotojas2 = ['Ona', 'Onute', 1980, 'sekretore'];
let darbuotojas3 = ['Kestas', 'Kerta', 2001, 'pavaduotojas'];
let darbuotojai = [];

darbuotojai[0] = darbuotojas1;
darbuotojai[1] = darbuotojas2;
darbuotojai[2] = darbuotojas3;

/*
console.log(darbuotojai);

for(let i=0; i<darbuotojas1.length; i++){
    console.log("vardas: "+darbuotojas1[0]);
}

//arba

console.log('vardas: '+darbuotojai[0][0]);
// ir t.t.

for(let i=0; i<darbuotojai[0].length; i++){
    console.log(darbuotojai[0][i]);
}

//----- 1.2 -----

for(let i=0; i<darbuotojai.length; i++){
    console.log('vardas: '+darbuotojai[i][0]);
    console.log('pareigos: '+darbuotojai[i][3]);
}

//----- 1.3 -----

for(let i=0; i<darbuotojai.length; i++){
    console.log('vardas: '+darbuotojai[i][0]+'  |  pavarde: '+darbuotojai[i][1]+'   |  metai: '+darbuotojai[i][2]+' |    pareigos: '+darbuotojai[i][3]);
}
*/
for(let i=0; i<darbuotojai.length; i++){
    for(let t=0; t<darbuotojai[i].length; t++){
        console.log(darbuotojai[i][t]);
    }
    console.log('----------------');
}


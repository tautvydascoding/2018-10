
// ----- uzduotys -----

let names = ["Enriqueta", "Sybil", "Piper", "Anh", "Carmelo", "Regan", "Synthia", "Newton", "Norbert", "Krystyna", "Fidelia", "Christoper", "Lewis", "Jeromy", "Joy", "Lorri", "Owen", "Rosenda", "Devora", "Treva", "Leanora", "Meghann", "Jacqueline", "Bunny", "Tenisha", "Rico", "Clementina", "Samella", "Rico", "Sandi", "Efrain", "Tena", "Vivan", "Hiedi", "Naida", "Evette", "Shane", "Freida", "Marielle", "Wynona", "Cheree", "Gaston", "Aja", "Timika", "Jude", "Griselda", "Luise", "Rico", "Minh", "Warren"];

let lastNames = ["Mcdowell", "Gates", "Mccall", "Cisneros", "Hancock", "Gaines", "Juarez", "Nolan", "Barajas", "Ware", "Orr", "Bell", "Donovan", "Rojas", "Stevenson", "Long", "Hays", "Gibson", "Meyer", "Sims", "Mcintosh", "Craig", "Haney", "Cunningham", "Hunt", "Montgomery", "Spears", "Cooke", "Gregory", "Mcknight", "Fernandez", "Hendrix", "Patton", "Bond", "Skinner", "Randolph", "Montes", "Guerra", "Bowen", "Potts", "Dyer", "Riley", "Rodgers", "Schroeder", "Ferguson", "Garrett", "Rush", "Moon", "Whitney", "Mcdaniel"];

// ----- 1 uzduotys -----

/*
for(i=0; i<names.length; i++){
    if(names[i]=='Rico'){
        //break;
        //return;
        break;
    }
}
console.log(i);

for(var i=0; i< names.length; i++){
    if (names[i] == 'Rico') {
        console.log('Rico vardas rasta eiluteje: ' + i);
    }
}


let pavykoRasti = false;
for(var i=0; i<names.length; i++){
    if(names[i]=='Martynas'){
        pavykoRasti = true;
        break;
    }
}
    if(pavykoRasti == true){
        console.log('ieskojimo nr yra: '  +i);
    }
    else{
        console.log('Nepavyko rasti');
    }
*/

//console.log(names.indexOf('Rico'));

// ----- 2 uzduotis -----
/*
function findName(tekstas){
    for(var i=0; i<names.length; i++){
        if(names[i] == tekstas){
            // pavykoRasti == true;
            return i;
        }
    }
}
let numeris = findName('Rico');
console.log(numeris);
*/

// ----- 3 -----
/*
for(i=0; i<names.length; i++){
    if(names[i]=='Freida'){
        let pavarde=lastNames[i];
        console.log('Freida ' +pavarde);
    }
}

// ----- 4 -----

for(i=0; i<names.length; i++){
    if(names[i]=='Rico'){
        let pavarde=lastNames[i];
        console.log(i+ ': Rico ' +pavarde);
    }
}
*/
// ----- 5 -----

let ieskomiZmones = [2, 16, 17, 18, 19, 25]

for(i=0; i<ieskomiZmones.length; i++){

    console.log(ieskomiZmones[i] + ' zmogus:');
    console.log(ieskomiZmones[i] + ': ' + names[ieskomiZmones[i]] + ' ' + lastNames[ieskomiZmones[i]]);
}


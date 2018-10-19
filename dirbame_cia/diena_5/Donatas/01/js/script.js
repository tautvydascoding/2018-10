
// uzduotis

let alga = 890;
var puseAlgos;
let psd = 9;
let vsd = 24;
let pensija = 2;
var procentaiPsd;
var procentaiVsd;
var procentaiPensija;
let algaIRankas;

puseAlgos = alga /2;
console.log( puseAlgos );

function procentaiPsd( alga, psd ) {
    return(alga/100)*psd;
}
console.log(procentaiPsd(alga, psd)); // 80.10

function procentaiVsd( puseAlgos, vsd ) {
    return(puseAlgos/100)*vsd;
}
console.log(procentaiVsd( puseAlgos, psd)); // 40.05

function procentaiPensija( alga, pensija ) {
    return(alga/100)*pensija;
}
console.log(procentaiPensija( alga, pensija )); // 17.8

algaIRankas = alga - procentaiPsd - procentaiPensija - procentaiVsd;
console.log( algaIRankas );

// var algaIRankas = 890 - 80.10 - 40.05 - 17.8
// console.log( algaIRankas );

// function printVardas()
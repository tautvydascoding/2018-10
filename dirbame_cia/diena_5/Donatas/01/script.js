
// uzduotis

var alga = 890;
var puseAlgos;
var psd = 9;
var vsd = 24;
var pensija = 2;
//var algaIRankas;

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

sum 
//function algaIRankas( alga, procentaiPsd, procentaiVsd, procentaiPensija ){
  //  return(alga-procentaiPsd-procentaiVsd-procentaiPensija);
//}
//console.log(algaIRankas(alga, procentaiPsd, procentaiVsd, procentaiPensija));
/*
var procentaiPsd = document.getElementById('procentaiPsd');
var procentaiVsd = document.getElementById('procentaiVsd');
var procentaiPensija = document.getElementById('procentaiPensija');

var algaIRankas = alga - procentaiPsd - procentaiVsd - procentaiPensija;
console.log( algaIRankas, procentaiPsd );
*/
//algaIRankas = alga - procentaiPsd - procentaiPensija - procentaiVsd;
//console.log( algaIRankas );

// var algaIRankas = 890 - 80.10 - 40.05 - 17.8
// console.log( algaIRankas );

// function printVardas()
console.log("Labas");
var vardas="ARTURAS";
var pavarde="UTAKIS";
var amzius= 600;
var atlyginimas=890;
var psd=890*0.09;
var vsd=890/2*0.24;
var irankas= atlyginimas-psd-vsd;
var metai=12;

console.log(vardas+" "+pavarde+" "+amzius);

console.log(typeof(vardas));
console.log(typeof(pavarde));
console.log(typeof(amzius));

function printBendras (){
  return console.log(vardas+pavarde+amzius);
}
//----atlyginimai------//
printBendras();
console.log("Atlyginis i rankas:" + irankas);
 //*metinis atlyginims  8437.2EU
 function metinis(){
   return console.log("Atlyginimas per metus:"+irankas*metai);
 }
 metinis();

 //*--------4 uzduotis-----*  " "//
var salis="Ispanija";
var city="Madrid";
var adress="kastonu 25/a";
var postcode=745855;

function printAddressDate(){
  return console.log("Jusu adresas: "+salis+" "+city+" "+adress+" "+" "+postcode);
}
printAddressDate();

//-----------5 uzduotis--------//
var x="x";
function printTekstas(x){
  return console.log(x);
}
printTekstas("jokubo istorijos");

//--------7 uzduotis---------// a(kvad) + b(kvad)=c(kvad)
function trikamp(){
  var a=prompt("krastine a:"); // trikampio krastine
  var b=prompt("kraastine b:");//krast
  return  console.log("Trikampio izambine="+Math.sqrt(a*a+b*b));
}
trikamp();

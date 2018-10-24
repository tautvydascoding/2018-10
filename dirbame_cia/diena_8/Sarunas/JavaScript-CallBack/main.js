console.log(   "Labas"  );

// Uzduotis - 1
//Susikurti dvi f-ijas
//viena pasisveikina
//kita atsisveikina
function hello(callback){
  console.log("Sveiki");
  console.log(callback);
  callback();
}
function goodbye(){
  console.log("Viso gero");
}
hello(goodbye);

//Uzduotis 1.1
//patobulinti f-ja, kuris sveikinasi, kad ji papidoma arguena "callback"

// UZduotis 1.2
// iskviesti pasisveikinmo f-ja ir jai paduoti atsisveikinimo f-ja

//document.write(" <b class='bg-info'> Mano tekstas </b> ");
//var vardas = prompt("Iveskite apskritimo spinuli (r)");
// console.log( typeof(vardas));
//var apskritimoPlotas = Math.PI * Number(vardas) * Number(vardas);
//console.log( "apskritimo plotas: " + apskritimoPlotas);

//document.querySelector('h1').innerHTML = " <b>Antraste</b>";





function printKaina (x){
document.write( x + "<br>");
}
printKaina(15.99);
printKaina(999);
printKaina(100);
printKaina(13.00);


function paymiuVidurkis(){
   var vidurkis = (5 + 10 + 8 + 6 + 8) / 5;
   document.querySelector('h1').innerHTML += "vidurkis yra:" + vidurkis + "<br>";
}
paymiuVidurkis ();
paymiuVidurkis ();
paymiuVidurkis ();
paymiuVidurkis ();



function paymiuVidurkis12(x1, x2, x3, x4, x5){
   var vidurkis = (5 + 10 + 8 + 6 + 8) / 5;
   document.querySelector('h1').innerHTML += "vidurkis yra:" + vidurkis + "<br>";
}
paymiuVidurkis12();

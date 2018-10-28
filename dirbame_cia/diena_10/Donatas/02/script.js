
$('h1').text('didelis H1');
$('h1').html('<i> Didelis H1 </i>');

$('h4').text('nedidelis H4'); 

$('h4:first').text('pakeistas pirmas nedidelis H4'); 

$('h6:last').text('pakeistas paskutinis nedidelis H6 elementas'); 

$('h2').eq(1).text('pakeistas antras paties pasirinktas H2 elementas'); 

let x = $('h4').eq(1); // taip rasoma jQuery
let y = $('h4')[0]; // taip naudojma tik JavaScript'e

console.log(x); // ismeta jQuery objekta kuri toliau gali redaguoti
console.log(y); // ismeta nebe jQuery objekta kurio nebegalima editint

// teksto paemimas 

let t=$('h4:first').text();
console.log(t);
let k=$('h6:last').text();
console.log(k);

// eq komanda gali skaiciuot ir nuo glo beigali pasirinkti norima elementa

// atributu keitimas
/*
$('form input').attr('value', 'Tomas');
$('form input').attr('class', 'bg-info');
*/
$('form input[name="vardas').attr('value', 'Tomas');

$('form input').attr('style', 'width: 500px; color: red');


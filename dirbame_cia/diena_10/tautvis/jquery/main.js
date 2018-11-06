console.log(   "Labas"  );


$('h1').css('color', 'pink');



$('h1').text("<strong>pakeistas</strong");
$('h1').html("<strong>pakeistas2</strong");


$('h4').text( " (pakeistas)");
$('h4:first').text("pakeistas pirmas h4");
$('h4:last').text("pakeistas paskutinis h4");
$('h4').eq(2).text("pakeistas trecias h4");
// $('h4')[1].text // ERROR text - tai yra jQuery komanda [1] - grazina NE jquery objekta, o paprasta


let x = $('h4').eq(2);
let y = $('h4')[2];
console.log(x);
console.log(y);
// paimti h2 ir h3 elementu tekstus ir atvaizduoti i console

let t = $('h2').text();
console.log( t );
let k = $('h3').text();
console.log( k );

//============== uzpildome ivedimo laukus / atributus keiciam

$('form input[name="vardas"]').attr('value' , 'Tomas');
$('form input[name="viza"]').attr('value' , '3216464');
//$('form input').attr('class' , 'bg-info');
$('form input').attr('style' , 'width:500px; color: red');

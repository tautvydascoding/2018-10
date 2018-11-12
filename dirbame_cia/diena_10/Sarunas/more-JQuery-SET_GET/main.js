console.log(   "Labas"  );
$('h1').css('color', 'pink');
$('h1').text("<strong>LABA DIENA</strong>");
$('h1').html("<strong>LABA DIENA</strong>");

$('h4').text("VISO GERO");
$('h4:first').text("pakeistas pirmas h4 tagas");
$('h4:last').text("pakeistas paskutinis h4 tagas");
$('h4').eq(2).text("pakeistas trecia h4 tagas");

//  $('h4')[1].text() //ERROR  text- nezinomas, tai yra JQuery komanda
//  $('h4')[1] /// GRAZINA NE JQUERY OBJEKTA O PAPRASTA

var x = $('h4').eq(2);
var y = $('h4')[2];
console.log(x);
console.log(y);


// ----------- paimti h2 ir h3 elementu tekstus ir atvaizduoti i console --------//

 var t = $('h2').text();
 console.log(t);

 var k = $('h3').text();
 console.log(k);

// ---------------- ATRIBUTAI --------------------//


  $('form input[name="vardas"]').attr('value', 'Tomas');
  $('form input[name="viza"]').attr('value', '626472687268');

  //$('form input[name="vardas"]').attr('class', 'bg-info');
  $('form input').attr('style', 'width:500px; color: red');

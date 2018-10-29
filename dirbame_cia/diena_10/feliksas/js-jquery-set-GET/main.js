console.log(   "Labas"  );


$('h1').css('color', 'pink');
$('h1').text("<b>pakeistas</b>");
$('h1').html("<b>pakeistas2</b>");





$('h4').text("pakeistas" );
$('h4:last').text("pakeistas paskutinis h4");
$('h4:first').text("pakeistas pirmas h4");
$('h4').eq(2).text("pakeistas trecias h4");


x = $('h4').eq(2);
y = $('4')[2];
console.log(x);
console.log(y);


$('form input[name="vardas"]').attr('value' , 'tomas');
$('form input[name="viza"]').attr('value' , '15668875');
$('form input').attr('style' , 'width:600px; color: purple');

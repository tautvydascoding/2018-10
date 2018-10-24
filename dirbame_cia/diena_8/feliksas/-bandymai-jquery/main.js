console.log(   "Labas"  );


$('h1').css('color', 'black');

$('h1').click(function(event) {
  console.log("paspaudei");
  $('h1').hide(1000);
  console.log("jau paslepiau");

});

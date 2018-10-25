console.log("Labas");
// paleis tik kai uzsikraus visas html
$(function() {
  $('h1').css('color', 'green');
  $('h1').click(function(event) {
    console.log("paspaudei");
    $(this).hide(2500);
  console.log("paslepiau"); });
});
$('footer').click(function(event){
  $('h1:first').hide(2500);
});

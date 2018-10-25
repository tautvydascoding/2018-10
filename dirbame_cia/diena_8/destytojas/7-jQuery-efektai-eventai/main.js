console.log(   "Labas"  );

// suveiks tik kai uzsikraus visas HTML
$(function(){
   $('h1').css('color', 'pink');

   $('h1').click(function(event) {
       console.log("pauspaudei");
       $(this).hide(2500);
       console.log("jau paslepiau");
   });
   $('footer').click(function(event) {
       $('h1:first').hide(2500);
   });


});

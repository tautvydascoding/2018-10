console.log(   "Labas"  );



$(function () {
    $ ('h1').css ('color', 'pink');
    $ ('footer').click (function(event) {
        console.log( "paspaudei");
        
        $ ('h1:first').hide (2500);
        console.log( "jau paslepiau");
        
    });
    
});



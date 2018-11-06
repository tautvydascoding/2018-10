console.log(   "Labas"  );

$('h1').css('color', 'pink');



$("h1").html("<strong> pakeistas tekstas </strong>"); //paimam h1 teksta ir pakeiciam jy html formato tekstu
$("h4").text("Joniukas eina namo");  // pakeicia visus h4 elementus yvestu tekstu
$("h4:first").text("pakeistas pirmas h4"); //prie h4 darasius first arba last paima pirma arba paskutine reiksme
$("h4").eq(2).text("pakeistas trecias h4"); //prie h4 darasius .eq() paima nurodyta reiksme (skaiciuojam nuo 0)

///////////////////////////////////////////////////////

let x = $("h4").eq(2);  //Jquery komanda, todel suranda antra h4 elementa ir jam galioja JQuery komandos
let y = $("h4")[2];   //ne JQ komanda, todel tiesiog suranda nurodyta elementa
console.log(x);
console.log(y);

////////// Paimti H2 ir H3 elementu tekstus ir atvaizduoti y konsole

let t = $("h2").text(" ");
console.log( t ); // y konsole isveda h2 elemento texta

let k = $("h3").text();
console.log(k);  // y konsole isveda h3 elemento texta

                    ////////////////////////////////////////////////////////////////////
                     //                  ATRIBUTAI        .attr();                   //
                    ////////////////////////////////////////////////////////////////////
$('form input[name= "vardas"]').attr("value", "tomas");    //paimam yvedimo lauka kurio reiksme "vardas" ir ymetam ten reiksme tomas
$('form input').attr("style", "color:red", "width:10px");  

///////////////////////// ELEMENTU KURIMAS  //////////////////////////////////////

//
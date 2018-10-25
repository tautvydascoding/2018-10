

/*
$ (function (){   ////paslepia visus h1 elementus
    $("h1").css ("color", "pink");

    $("h1").click(function (event) { 
        console.log ("paspaudei");
    $("h1").hide(5000);
    console.log ("jau paslepiau");
});
});
*/
/*
$(function () {  ////paslepia 1 h1 elementa, tada paspaudus paslepia antra ir t.t.
    $("h1").css("color", "pink");

    $("h1").click(function (event) {
        console.log("paspaudei");
        $(this).hide(5000);
        console.log("jau paslepiau");
    });
});
*/

$(function () { ////paslepia 1 h1 elementa, tada paspaudus paslepia antra ir t.t.
    $("h1").css("color", "pink");

    $("h1").click(function (event) {
        console.log("paspaudei");
        $(this).hide(5000);
        console.log("jau paslepiau");
    });
    $("footer").click (function(event)) {
        $(this).hide(5000);
    }
});
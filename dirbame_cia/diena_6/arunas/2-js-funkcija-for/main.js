// console.log(   "Labas"  );

var i;
for (i=0; i > 5; i++) {
    console.log ("viso" + " " + i);
}

// =================FOR intro  ======================

// 1 UZDUOTIS
// naudojant FOR cikla, atspausdinti  "#" tiek, kad gautusi trikampio vaizdas
// #
// ##
// ###
// ####
// #####
// ######

var text = "";  //nerasom cia groteliu, tada prades nuo nulio ir pridejines po viena 0+#=0. Jei cia bus groteles, vadinas man pirmoj eilutej atvaizduos #+# =##
for (i = 0; i < 5; i++) {

    text = text + "#";
    console.log (text);
    
}


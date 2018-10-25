console.log(   "Labas"  );
$('h1').css('color', 'pink');

var objektas = ""; // String
var a = {}; //objektas
var b = ["Tomas", "Mantvydas"];//masyvas && objektas

b.push("Ieva"); // Push komanda ideda i masyvo gala
b.push("Angele");
console.log("Masyvas b" , b);

// w3 js push() pop()

var ilgis = b.length;
b[ilgis] = "Romas";
console.log("Masyvas b" , b);
b.pop(); // istrina is masyvo galo
console.log("Masyvas b", b);

b.unshift("priekis"); // idejimas i masyvp prieky
console.log("Masyvas b" , b);


//$("h1")// suranda visus H1 elementus
$("h1").click(function(event){
  console.log("Mane paspaudei");
});


var mokykla = {
  adresas: "Kaunas, Pramones pr. 12",
  klasiuKiekis: 18,
  darbuotojai: ["Agne", "Ainius", "Ponas Direktorius"]
};
console.log("Mokyklos adresas: " + mokykla.adresas);
console.log("Mokyklos klasiu kiekis: " + mokykla.klasiuKiekis);
console.log("Pirmas Mokyklos darbuotojas: " + mokykla.darbuotojai[0]);
console.log("Antras Mokyklos darbuotojas: " + mokykla.darbuotojai[1]);
console.log("Trecias Mokyklos darbuotojas: " + mokykla.darbuotojai[2]);
mokykla.klasiuKiekis = 35;
console.log("Pakeistas klasiu kiekis: " + mokykla.klasiuKiekis);

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

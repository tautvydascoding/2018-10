console.log(   "Labas"  );

//*---------pimra-----------//
var symbols=["#","##","###","####","#####"];
var text = "";
var i;
for(i=0; i < symbols.length; i++ ){
  text +=symbols[i] + "<br>";
}
  document.querySelector("h1").innerHTML = text;

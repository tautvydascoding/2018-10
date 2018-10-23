// if(false){
// 	console.log("labas");
// }

// var vardas1 = "Antanas"
// var vardas2 = "Tomas"

// if(vardas1 == vardas2){
// 	console.log("Vardai yra vienodi");
// } else{
// 	console.log("Vardai yra skirtingi");
// }

// if(vardas2=="Tomas"){
// 	console.log("Labas, Tomai");
// }

// if(vardas1=="Antanas" || vardas2=="Petras"){
// 	console.log("saunu");
// }

// var age = 1;

// if(age<7){
// 	console.log("Pliusines varles");
// 	console.log("nuolaida sokoladiniai zuikuciai")
// } else if(age<14){
// 	console.log("telefonai");
// } else if(age<40){ if(age==24){
// 	console.log("ife ifas");
// } else{
// 	console.log("new music app");
// }

// } else if(age<65){
// 	console.log("pensijos kaupimas - uzsiregisstruok");
// } else if(age>65){
// 	console.log("kelione i Birstona");
// 	console.log("nuolaida sokoladinis zuikutis")
// }




// 	// iki 7 metu
// //      "Pliusines varles"
// // nuo 7 iki 14
// //      "Mini telefonai"
// // nuo 14 iki 18
// //      "new Music App"
// // nuo 18 iki 24
// //      "Stok i sauliu sajunga"
// // nuo 24 iki 65
// //      "Pensijos kaupimas - zusiregistruok"
// // nuo 65
// //      "kelione i Bristona"
// // sunkesne:
// //      (i 'if' vidu ideti papildoma 'if')
// //      iki 7 metu ir nuo 65 metu papildomai isvesti "Sokoladiniai zuikuciai 20% nuolaida"



// // 2 UZDUOTIS
// // sukurti 3 vardus "Tomas", "Paulius", "Airidas"
// // kai "if"-ui padauodame Toma - isvesti "Masinoms 10% nuolaida"
// // kai "if"-ui padauodame Pauliu - isvesti "Buitinei technikai  30% nuolaida"
// // kai "if"-ui padauodame bet ka kita - isvesti "5% nuolaida kelionems"
// var name1 = "Tomas";
// var name2 = "Paulius";
// var name3 = "Airidas";

// if(name1 == "Tomas"){
// 	console.log("masinoms nuolaida 10proc")
// }

// // 3 UZDUOTIS
// // sukurti 3 kintamuosius (klientu tipus) "bronze", "silver", "gold"
// // susikurti kintamaji 'klietoTipas' - kurio reiksme lyginsime
// // kai 'klietoTipas' yra "bronze" - isvesti " 15% nuolaida"
// // kai 'klietoTipas' yra "silver" - isvesti " 30% nuolaida"
// // kai 'klietoTipas' yra   bet koks kitas - isvesti " 5% nuolaida  "
// //

// var bronze = "bronze";
// var silver = "silver";
// var gold = "gold";

// var klientoTipas = "silver";

// if(klientoTipas == bronze){
// 	console.log("15proc nuolaida")
// } else if(klientoTipas == silver){
// 	console.log("30proc. nuolaida")
// } else if(klientoTipas == bronze){
// 	console.log("50proc nuolaida")
// }



//************************************************************
// var zodis = "labas ";
// var tekstas = "";
// for(i=0; i<50; i++){
// 	tekstas+=zodis;
// }
// document.querySelector("article").innerHTML=tekstas;
//********************************************************




//*****************************************************************
// var x = String;
// var url = String;
// function print(x, url){
// 	document.querySelector("article").innerHTML+='<p>'+x+'</p>'+'<img src='+url+'>';
// }

// for(i=0; i<12; i++){
// 	print("Labadiena! ", "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg")
// }
//**********************************************************************



// var x = String;
// funciton(x){
// 	document.querySelector
// }




//*********************************************************
function piestiEilute(){
	document.querySelector("main").innerHTML += "-";
}
function piestiStulpeli(){
	document.querySelector("main").innerHTML += "|";
}

for(i=0; i<100; i++){
	piestiEilute();
}
	document.querySelector("main").innerHTML += "<br>";

for(i=0; i<3; i++){
	piestiStulpeli();
}
	document.querySelector("main").innerHTML += "<br>";

for(i=0; i<100; i++){
	piestiEilute();
}
	document.querySelector("main").innerHTML += "<br>";

for(i=0; i<10; i++){
	piestiStulpeli();
	document.querySelector("main").innerHTML += "<br>";
}
//-***************************************************************





// advance
// 5 UZDUOTIS 81.600+
// sukurti f-ja, kuri apskaiciuos kiek uzdirbsime po 10 metu , jei pradzioje uzdirbdami 680, ir kai alga i menesi pakyla 1% (~6.8eur)
// var kiekMenesiu = 10 * 12;
// var menAtlyginimas = 680;
// var algosPokytis = 1;  // 1%

var kiekMenesiu = 10*12;
var menAtlyginimas = 680;
var algosPokytis = 1.01;
var uzdarbis = 680;

function kiekUzdirbsi(){
	for(i=0; i<kiekMenesiu-1; i++){
		menAtlyginimas=menAtlyginimas*algosPokytis;
		console.log(menAtlyginimas);
	}
	return menAtlyginimas;

}
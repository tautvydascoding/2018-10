document.write("<b class='bg-info'>Mano tekstas</b>");

// var apskritimoSpindulys = prompt("apskritimo ilgis");
// var apskritimoIlgis = apskritimoSpindulys*2*3.14;
// console.log("Apskritimo Ilgis : "+apskritimoIlgis);


// var x = Number;
// function print(x){
// 	console.log(x);
// }

// function pazymiuVidurkis(){
// 	x=(5+6+10+7+8)/5
// 	console.log(x);
// }

document.querySelector('h1').innerHTML = "<b> Antraste </b>"
document.querySelectorAll('h1')[4].innerHTML = "<b> Antraste2 </b>"

// function pazymiuVidurkis(q, w, e, r, t){
// 	x = (q+w+e+r+t)/5
// 	console.log(x);
// }

//************************************ RETURN*******************************
// var vardas = "Tomas";
// function getVardas(){
// 	return vardas;
	
// }
// console.log(vardas);


// var vardas = "tomas";
// var pavarde = "tomauskas";
// function vardasPavarde(){
// 	return vardas + ""+ pavarde
// }


// function getPelnas(){
// 	var pajamos = 1250;
// 	var islaidos = 750;
// 	pelnas = pajamos - islaidos;
// 	return pelnas
// }


// function getPelnas(pajamos, nuostoliai){
// 	pelnas = pajamos - nuostoliai;
// 	return pelnas;
// }



// function pazymiuVidurkis(q, w, e, r, t){
// 	x = (q+w+e+r+t)/5
// 	return x;
// }


 // function getElementH1height(){
 // 	var aukstis = document.querySelector('h1').clientHeight;
 // 	return aukstis;
 // }


	var groteles = "#";
	var eilute = "";
for(i=1; i<6; i++){
	i*(eilute+=groteles);
	console.log(eilute);
}


// var groteles = "#";
// var eilute = "";
// eilute+=groteles;

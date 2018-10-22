console.log(   "Labas"  );

// 1 UZDUOTIS
// A) sukurti kintamaji "vardas" Tomas
// B) parasyti f-ja "getVardas()", kuri turi "return" zodeli ir grazina varda i iskveitimo vieta.
// C) patikrinti ar veikia f-ja

var vardas = "TOmas";

function getVardas() {
    return vardas;
}

var textas = " Raudonkepuraite daug keliavo ir sutiko " + getVardas() + " su kuriuo daug snekejosi  ";

console.log( textas );
// arba
console.log( getVardas() );
//arba
document.querySelector('h1').innerHTML = getVardas();
// arba
document.querySelector('h1').innerHTML += " <br> Sveiki, " + getVardas();

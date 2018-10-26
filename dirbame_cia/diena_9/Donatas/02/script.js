
let mokykla = {
    adresas: 'Kaunas. Kruonio 13',
    klasiuKiekis: 18,
    darbuotojai: ['Agne', 'Ainius', 'Ponas direktorius']
};

console.log('Klasiu kiekis yra: ' + mokykla.klasiuKiekis );
console.log('mokyklos adresas: ' + mokykla.adresas);
console.log('1 darbuotojo vardas: ' + mokykla.darbuotojai[0]);
console.log('2 darbuotojo vardas: ' + mokykla.darbuotojai[1]);
console.log('3 darbuotojo vardas: ' + mokykla.darbuotojai[2]);

let mokinys = {
    vardas: 'Tomas',
    pavarde: 'Antanaitis',
    kelintokas: 7,
    matPazymiai: [6, 5, 9, 10, 8]
};

    console.log('objektas yra: ', mokinys);
    console.log('vardas: ' + mokinys.vardas);

mokinys.kelintokas++;
    console.log('mokinio klase: ' + mokinys.kelintokas);

if(mokinys.kelintokas > 12){
    console.log('Mokinys jau pabaige mokykla');
}
else if(mokinys.kelintokas > 4){
    console.log('Mokinys pabaige pradine mokykla');
}

/*
mokinys.matPazymiai[] = i++;
console.log(mokinys.matPazymiai); 
*/

// ------ ojektu kurismas -----------

function Car(duruSkaicius, spalva, greitis){
    this.numberOfDoors = duruSkaicius;
    this.color = spalva;
    this.maxSpeed = greitis;
    this.x = 4;
}

var audiTT = new Car(2, 'red', 280);
var audi100 = new Car(5, 'Melyna', 200);
var audi80 = new Car(5, 'zale', 180);
var audiRS8 = new Car(5, 'juoda', 320);

console.log('visas objektas audiRS8: ', audiRS8);
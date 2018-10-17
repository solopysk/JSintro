let a = "Hello worlds";

document.getElementById("app").innerHTML = a + "! <br><br> Waddup";
document.getElementById("app").innerHTML =
  document.getElementById("app").innerHTML + "<br><br>next go next nigga";

//scitani promennych
var x = 2;
var y = 7;
var z = x + y;
document.getElementById("vysledek").innerHTML = "<br>Vysledek je: " + z;

//prikazy alert, prompt a confirm
/*
var year = prompt("rok", '');
 if(year<1898){
   alert();
 }
*/
//var adult = confirm("bylo vam 18?");
//alert(adult);
var cislo = 18;
var osmnact;
if (cislo < 18) {
  osmnact = false;
} else {
  osmnact = true;
}
osmnact = cislo < 18 ? false : true;
//osmnact = (cislo<18) ? 'Nebylo osmnact': 'Bylo osmnact'; dvojtecka je else
//var promenna = prompt('Zadej cislo','');
//alert(promenna + 100); vypise 100100
//alert(+promenna+100); vypise 200
var promenna2 = 200;
function OdectiPet(x) {
  return +x - 5;
}
//alert(OdectiPet(10));
for (var i = 0; i < 5; i++) {
  //alert(OdectiPet(i));
}
document.getElementById("cislo").innerHTML = cislo;
document.getElementById("cislo").innerHTML =
  document.getElementById("cislo").innerHTML + "<br>" + osmnact;
document.getElementById("cislo").innerHTML =
  document.getElementById("cislo").innerHTML + OdectiPet(promenna2);

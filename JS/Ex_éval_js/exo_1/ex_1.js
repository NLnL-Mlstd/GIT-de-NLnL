var age;
var nbrjeunes = 0;
var nbrmoyens = 0;
var nbrvieux = 0;
var nbrTresVieux = 0;
var nbrMegaVieux = 0;


do{
    age = parseInt(prompt("Indiquez un âge. \n La saisie s'arrête au premier qui a 150 ans. \n Bon chance."));

    if(age<20){
            nbrjeunes++;
    }
    if(age>=20 && age<=40){
            nbrmoyens++;
    }
    if(age>=40 && age<=60){
            nbrvieux++;
    }
    if(age>=60 && age<=80){
            nbrTresVieux++;
    }
    if(age>=80 && age<=100){
            nbrMegaVieux++;
    }

} while(age<150);

document.write("Il y a " + nbrjeunes + " personne(s) de moins de 20 ans. </br>");
document.write("Il y a " + nbrmoyens + " personne(s) ayant entre 20 et 40 ans. </br>");
document.write("Il y a " + nbrvieux + " personne(s) ayant entre 40 et 60 ans. </br>");
document.write("Il y a " + nbrTresVieux + " personne(s) ayant entre 60 et 80 ans. </br>");
document.write("Il y a " + nbrMegaVieux + " personne(s) ayant entre 80 et 100 ans. </br>");

document.write("Il y a 1 personne de 150 ans ou plus.");
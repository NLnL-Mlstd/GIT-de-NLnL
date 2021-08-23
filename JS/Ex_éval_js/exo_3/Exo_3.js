var tableau = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

var prenom = prompt("Veuillez entrer un prénom. \nSachez qu'un prénom commence toujours par une majuscule. \nDonc merci de ne pas l'oublier.");

var pos = tableau.indexOf(prenom);

var supprItem = tableau.splice(pos,1);

var final = tableau.pop();

if(pos==-1){
document.write("Ce prénom n'est pas dans le tableau.");
}
else {
    document.write("Les prénoms restants sont : " + tableau);
}
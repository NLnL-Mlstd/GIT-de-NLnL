var chiffre = parseInt(prompt("Entre un chiffre pour afficher sa table de multiplication"));

function eznombre(chiffre){
    for(i=0;i<=10;i++)
    {
        resultat = chiffre*i;
        document.write(i + "*" + chiffre + "=" + resultat + "</br>");

    }
}
eznombre(chiffre);
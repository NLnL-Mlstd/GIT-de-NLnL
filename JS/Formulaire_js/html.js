var btn_envoyer = document.getElementById("envoie");
btn_envoyer.addEventListener("click", verif_form);

// let chp_sexe = document.getElementByName("sexe");


function verif_form(e) {
    var erreur;

    var chp_nomer = document.getElementById("nomer");
    var chp_prenom = document.getElementById("prenom");
    var chp_date = document.getElementById("date");
    var chp_codepostal = document.getElementById("code_postal");
    var chp_sexe = document.getElementsByName("sexe");
    var chp_email = document.getElementById("email");
    var chp_sujet = document.getElementById("sujet");
    var chp_question = document.getElementById("textarea");
    var chp_accepter = document.getElementById("checkBut"); 
 
    var Regex1 = /^[a-zA-Z]+$/;
    var Regex2 = /^[0-9]{5}$/;
    var Regex3 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var Regex4 = /^[a-zA-Z0-9,.?!:]{1,200}$/;



    if (chp_nomer.value == "") {

        console.log("le nom est vide !");
        erreur = "";
        document.getElementById("error1").innerHTML = "Entrez un nom*";
        e.preventDefault();
    } else if (Regex1.exec(chp_nomer.value) == null) {
        document.getElementById("error1").innerHTML = "Veuillez entrer un nom correct*";
        e.preventDefault();
    } else {
        document.getElementById("error1").innerHTML = "";
    }





    if (chp_prenom.value == "") {

        console.log("le prénom est vide !");
        erreur = "";
        document.getElementById("error2").innerHTML = "Entrez un prénom*";
        e.preventDefault();
    } else if (Regex1.exec(chp_prenom.value) == null) {
        document.getElementById("error2").innerHTML = "Veuillez entrer un prénom correct*";
        e.preventDefault();
    } else {
        document.getElementById("error2").innerHTML = "";
    }




    if (chp_date.value == "") {
        console.log("date de naissance non renseignée");
        erreur = "";
        document.getElementById("error4").innerHTML = "Veuillez renseigner une date*";
        e.preventDefault();
    } else {
        document.getElementById("error4").innerHTML = "";
    }






    if (chp_codepostal.value == "") {
        console.log("code postal manquant");
        erreur = "";
        document.getElementById("error5").innerHTML = "Veuillez renseigner un code postal*";
        e.preventDefault();
    } else if (Regex2.exec(chp_codepostal.value) == null) {
        document.getElementById("error5").innerHTML = "Veuillez entrer un code postal correct*";
        e.preventDefault();
    } else {
        document.getElementById("error5").innerHTML = "";
    }








    if (chp_sexe[0].checked == true || chp_sexe[1].checked == true || chp_sexe[2].checked == true ) {
        document.getElementById("error3").innerHTML = "";
       
        console.log("abc");
    } 
    else {
        console.log("genre non renseigné");
        erreur = "";
        document.getElementById("error3").innerHTML = "Veuillez renseigner un genre*";
        e.preventDefault();

    }





        if (chp_email.value == "") {
            console.log("vide");
            document.getElementById("error6").innerHTML = "Veuillez renseigner votre email*";
            e.preventDefault();
      }
      else if (Regex3.exec(chp_email.value) == null) {
        document.getElementById("error6").innerHTML = "Veuillez entrer un email correct*";
        e.preventDefault();
    } else {
        document.getElementById("error6").innerHTML = "";
    }




        if (chp_sujet.selectedIndex == 0) {
            console.log("sujet non sélectionné");
            erreur = "Veuillez sélectionner un sujet*";
            document.getElementById("error7").innerHTML = "Veuillez sélectionner un sujet*";
            e.preventDefault();
      }
     else {
        document.getElementById("error7").innerHTML = "";
    }

   



        if (chp_question.value == "") {
            console.log("question non posée");
            document.getElementById("error8").innerHTML = "Veuillez formuler votre question*";
            e.preventDefault();
     }
     else if (Regex4.exec(chp_question.value) == null) {
            document.getElementById("error8").innerHTML = "Veillez à user de caractères corrects et à ne pas dépasser 200 lettres*";
            e.preventDefault();
                   }
                   else {
                       document.getElementById("error8").innerHTML = "";
                   }

        if (chp_accepter.checked == false) {
            console.log("pas accepté");
            document.getElementById("error9").innerHTML = "Veuillez accepter les conditions d'utilisation du site stipulant que vous paierez jusqu'à votre mort, et que la dette se transmettra à vos enfants*";
            e.preventDefault(); 
         }                          
   else if (chp_accepter.checked == true) {
        document.getElementById("error9").innerHTML = "";
        console.log("pb accept");
       
    }



}










































// var btn_envoyer = document.getElementById("envoie");
// btn_envoyer.addEventListener("click", verif_sexe);

// let chp_nom = document.getElementById("nom");


// function verif_sexe(e) {
















// if (chp_accepter.CheckTIF.checked == "false") {





//         e.preventDefault();












// alert("survol !");

//   if (chp_nom.value!="") {

//     console.log("nom vaut  : "+ chp_nom.value)


//   }


//     // alert("Vous avez cliqué sur :\n Alert()");

// else if (chp_nom.value==""){

//     console.log("Pas de nom renseigner");


// }




// Affichage des champs erreur;
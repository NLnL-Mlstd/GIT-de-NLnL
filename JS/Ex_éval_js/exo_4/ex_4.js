var PU = parseInt(prompt("Entrez le prix unitaire du produit."));
var QTCOM = parseInt(prompt("Indiquez la quantité que vous souhaitez commander."));
var PAP;
var TOT = PU*QTCOM;
var REM;
var P_Remise;
var PORT;

    if(TOT >= 100 && TOT <= 200){
        REM=(5*TOT)/100;
        P_Remise=TOT-REM;
    }

    else if(TOT>200){
        REM=(10*TOT)/100;
        P_Remise=TOT-REM;
    }

    else{
        REM=0;
        P_Remise=TOT;
    }

    if(P_Remise>500){
        PORT=0;
        PAP=P_Remise;
    }
    if(P_Remise<500){
        PORT=(2*P_Remise)/100;
        PAP=P_Remise+PORT;
    }
    if(PORT<6 && PORT!=0){
        var PortMini = 6;
        PAP = P_Remise + PortMini;
        PORT=6;
    }

    function arrondir1() {
        PAP = PAP.toFixed(2);
        return PAP;
    }
    function arrondir2() {
        REM = REM.toFixed(2);
        return REM;
    }
    function arrondir3() {
        PORT = PORT.toFixed(2);
        return PORT;
    }

    arrondir1();
    arrondir2();
    arrondir3();

    document.write("Vous devez payer " + PAP + "$. </br>");
    document.write("Vous avez " + REM + "$ de remise. </br>");
    document.write("Et " + PORT + "$ de frais de port.");
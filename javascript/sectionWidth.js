function myFunction(){
/*Initialisation de la largeur de la section à 0*/
var largeurSection = 0;

/*Récupération de la taille de la sidebar*/
var fixed = document.getElementById("fixed");  
var largeurSidebar = parseInt(window.getComputedStyle(fixed, null).getPropertyValue("width"));

/*Fonction au chargement de la page et au redimensionnement */

/*Récupération de la taille de la fenêtre*/

var tailleEcran = window.innerWidth;
var section = document.querySelector('section');
var soustractionEcranEtSection = tailleEcran - largeurSidebar; 
var largeurSection = section.style.width = soustractionEcranEtSection - 48;
}


window.onload = myFunction;
window.onresize = myFunction;

window.onresize = resize;





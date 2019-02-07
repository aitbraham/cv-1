// ajoute une fonction e-mail utilisateur défilable sur la page
fenêtre . addEventListener ( " scroll " , function () {

// Calculez le déplacement ici ...
	let deplacement = ( window . scrollY  / ( document . body . offsetHeight  -  window . innerHeight )) * 100 ;
// Modifie la valeur de la barre de progression pour qu'elle corresponde au déplacement du rouleau

	document . getElementById ( ' progress_bar ' ). valeur  = deplacement;
	
// Affiche le contenu de la variable variable dans la console du navigateur
	console . log (deplacement);
});
// Définition de la fonction de défilement
function  myScroll () {
	
// Modifie la valeur de la barre de progression pour qu'elle corresponde au déplacement du rouleau
	var progress =  document . getElementById ( ' progress_bar ' ). La valeur ;
// valeur de progression du changement qui permet de changer et modifier la page avec scroll	
	valeur var = (progression * ( document . corps . offsetHeight  -  fenêtre . innerHeight )) / 100 ;
	fenêtre . faire défiler ( 0 , valeur);
}

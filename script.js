
/* Fonction qui permet de sélectionner des élements grâce à leur classe et de leur en ajouter une nouvelle */

/* classO correspond à la classe d'origine et classA à la classe à ajouter */
function classeAjout(classO, classA) { 

	/* compte le nombre d'éléments ayant pour classe class0 */
		var nbEca = document.getElementsByClassName(classO).length; 

		 /* Boucle qui recommence en fonction du nombre défini par nbEca */
		for (var i = 0; i < nbEca; i++) {

		/* ajout à la fin de l'attribut class d'un élément*/
		document.getElementsByClassName(classO)[i].className += classA; 
		/* recommence au début de la boucle */
	}
		

}
/* Fonction qui permet de sélectionner des élements grâce à leur classe et retirer une classe
!! Attention la classe à retirer doit se trouver à la fin de l'attribut class des élements !! 
classO correspond à la classe d'origine et classS à la classe à supprimer */

function classeSuppr(classO, classS) { 

	/* compte le nombre d'éléments ayant pour classe class0 */
	var nbEca = document.getElementsByClassName(classO).length;

	 /* Boucle qui recommence en fonction du nombre défini par nbEca */
	for (var i = 0; i < nbEca; i++){

	/* Récupère toutes les class d'un élément */
	var str = document.getElementsByClassName(classO)[i];
	/* Retire à la chaine obtenu le nombre de caractère de classS */
	var str2 = str.className.slice(0, -classS.length);
	/* Récupère la chaine obtenu et modifie la classe de str */
	str.className=str2;
	/* recommence au début de la boucle */
}

}
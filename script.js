function changeStyleMouseOver(classO, classA) {
			nbEca = document.getElementsByClassName(classO).length;
			for (var i = 0; i < nbEca; i++) {
		document.getElementsByClassName(classO)[i].className += classA;
	}
		

}
	
function changeStyleMouseLeave(classO, classS) {
	var nbEca = document.getElementsByClassName(classO).length;

	for (var i = 0; i < nbEca; i++){
	var str = document.getElementsByClassName(classO)[i];
	var str2 = str.className.slice(0, -classS.length);
	str.className=str2;
}

}
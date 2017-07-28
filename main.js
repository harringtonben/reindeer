var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("reindeer");


for(var i = 0; i < reindeer.length; i++) {
	var colorArray = colors[i];
	var reindeerArray = reindeer[i];
	var datString = '';

	datString += '<div id="reindeer">';
	datString +=	'<p>' + colorArray + ' ' + reindeerArray + '</p>';
	datString += '</div>';

	hohohoElement.innerHTML += datString;
}



function displayRandomQuote(parsedData) {	
	var randomQuoteIndex = Math.floor(Object.keys(parsedData).length * Math.random());
	document.getElementById("quoteDisplay").innerHTML = "\"" + parsedData[randomQuoteIndex].esQuote + "\"";
}

window.onload = function(){
	//Get quote data after button is clicked
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
	if (request.readyState == 4 && request.status == 200) {
		var parsedData = JSON.parse(request.responseText).quotes;
		displayRandomQuote(parsedData);		
	}};

	request.open("GET", 
	"https://crossorigin.me/http://funmiojo.com/Rayuela/rayuela.json", true);
	request.send(null);	
}
	
document.getElementById("quoteButton").onclick = function(){
	//Get quote data after button is clicked
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
	if (request.readyState == 4 && request.status == 200) {
		var parsedData = JSON.parse(request.responseText).quotes;
		displayRandomQuote(parsedData);		
	}};
	
	request.open("GET", 
	"https://crossorigin.me/http://funmiojo.com/Rayuela/rayuela.json", true);
	request.send(null);	
}

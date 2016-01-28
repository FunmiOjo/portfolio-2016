function readyTasks(parsedData) {	
	var randomQuoteIndex = Math.floor(Object.keys(parsedData).length * Math.random());
	var randomQuote = parsedData[randomQuoteIndex].esQuote;
	var withoutSpaces = randomQuote.split(" ").join("%20")
	var tweetText = "https://twitter.com/intent/tweet?text=" + randomQuote.split(" ").join("%20");
	document.getElementById("quoteDisplay").innerHTML = "\"" + randomQuote + "\"";
	document.getElementById("tweetbutton").setAttribute("href", tweetText);
}
	
window.onload = function(){
	//Get quote data after button is clicked
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
	if (request.readyState == 4 && request.status == 200) {
		var parsedData = JSON.parse(request.responseText).quotes;
		readyTasks(parsedData);	
	}};

	request.open("GET", 
	"https://crossorigin.me/http://funmiojo.com/Rayuela/rayuela.json", true);
	request.send(null);	
};
	
document.getElementById("quoteButton").onclick = function(){
	//Get quote data after button is clicked
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
	if (request.readyState == 4 && request.status == 200) {
		var parsedData = JSON.parse(request.responseText).quotes;
		readyTasks(parsedData);		
	}};
	
	request.open("GET", 
	"https://crossorigin.me/http://funmiojo.com/Rayuela/rayuela.json", true);
	request.send(null);	
};

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));

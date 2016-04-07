//displays random quote from array
function displayQuote(parsedData) {	
	var randomQuoteIndex = Math.floor(Object.keys(parsedData).length * Math.random());
	var randomQuote = parsedData[randomQuoteIndex].esQuote;
	var withoutSpaces = randomQuote.split(" ").join("%20")
	var tweetText = "https://twitter.com/intent/tweet?text=" + randomQuote.split(" ").join("%20");
	document.getElementById("quoteDisplay").textContent = "\"" + randomQuote + "\"";
}
	
window.onload = function(){
		displayQuote(quotes);	
	};

	
document.getElementById("quoteButton").onclick = function(){
	displayQuote(quotes);
	
};


var quoteObject = 
{"quotes": [
{
"chapter": 1,
"esQuote": "Y era tan natural cruzar la calle, subir los peldaños del puente, entrar en su delgada cintura y acercarme a la Maga que sonreía sin sorpresa, convencida como yo de que un encuentro casual era lo menos casual en nuestras vidas, y que la gente que se da citas precisas es la misma que necesita papel rayado para escribirse o que aprieta desde abajo el tubo de dentífrico."
},
{
"chapter": 1,
"esQuote": "Oh Maga, en cada mujer parecida a vos se agolpaba como un silencio ensordecedor, una pausa filosa y cristalina que acababa por derrumbarse tristemente, como un paraguas mojado que se cierra. Justamente un paraguas..."
},
{
"chapter": 1,
"esQuote": "Ya para entonces me había dado cuenta de que buscar era mi signo, emblema de los que salen de noche sin propósito fijo, razón de los matadores de brújulas."
},
{
"chapter": 3,
"esQuote": "No sabía por qué pero esa inercia estúpida lo había hecho pensar en los movimientos aparentemente inútiles de algunos insectos, de algunos niños."
},
{
"chapter": 3,
"esQuote": "...es decir que en todo acto había la admisión de una carencia, de algo no hecho todavía y que era posible hacer..."
},
{
"chapter": 3,
"esQuote": "Partís del principio -dijo la Maga-. Qué complicado. Vos sos como un testigo, sos el que va al museo y mira los cuadros. Quiero decir que los cuadros están ahí y vos en el museo, cerca y lejos al mismo tiempo. Yo soy un cuadro, Rocamadour es un cuadro. Etienne es un cuadro, esta pieza es un cuadro. Vos creés que estás en esta pieza pero no estás. Vos estás mirando la pieza, no estás en la pieza."
},
{
"chapter": 3,
"esQuote": "Feliz de ella que estaba dentro de la pieza, que tenía derecho de ciudad en todo lo que tocaba y convivía, pez río abajo, hoja en el árbol, nube en el cielo, imagen en el poema."
},
{
"chapter": 4,
"esQuote": "... y los gatos, siempre inevitablemente los minouche morrongos miaumiau kitten kat chat cat gatto grises y blancos y negros y de albañal, dueños del tiempo y de las baldosas tibias, invariables amigos de la Maga que sabía hacerles cosquillas en la barriga y les hablaba un lenguaje entre tonto y misterioso, con citas a plazo fijo, consejos y advertencias."
},
{
"chapter": 4,
"esQuote": "Etienne, seguro de sí mismo como un perro o un buzón..."
},
{
"chapter": 7,
"esQuote": "...hago nacer cada vez la boca que deseo, la boca que mi mano elige y te dibuja en la cara, una boca elegida entre todas, con soberana libertad elegida por mí para dibujarla con mi mano por tu cara, y que por un azar que no busco comprender coincide exactamente con tu boca que sonríe por debajo de la que mi mano te dibuja."
},
{
"chapter": 7,
"esQuote": "...yo te siento temblar contra mí como una luna en el agua."
},
{
"chapter": 9,
"esQuote": "Sintió una especie de ternura rencorosa, algo tan contradictorio que debía ser la verdad misma."
},
{
"chapter": 12,
"esQuote": "Jugaban mucho a hacerse los inteligentes..."
},
{
"chapter": 15,
"esQuote": "Uno es verdaderamente cretino, pero cretino a un punto que no te podés imaginar, Babs, porque para eso hay que haberse leído todo Platón, varios padres de la iglesia, los clásicos sin que falte ni uno, y además saber todo lo que hay que saber sobre todo lo cognoscible, exactamente en ese momento uno llega a un cretinismo tan increíble que es capaz de agarrar a su pobre madre analfabeta por la punta de la mañanita y enojarse porque la señora esta afligidísima a causa de la muerte del rusito de la esquina o de la sobrina de la del tercero. Y uno le habla del terremoto de Bab El Mandeb o de la ofensiva de Vardar Ingh, y pretende que la infeliz se compadezca en abstracto de la liquidación de tres clases del ejercito iranio..."
},
{
"chapter": 17,
"esQuote": "Oliveira es patológicamente sensible a la imposición de lo que lo rodea, del mundo en que se vive, de lo que le ha tocado en suerte, para decirlo amablemente. En una palabra, le revienta la circunstancia. Más brevemente, le duele el mundo."
},
{
"chapter": 17,
"esQuote": "Una cosa es la música que puede traducirse en emoción y otra la emoción que pretende pasar por música."
},
{
"chapter": 18,
"esQuote": "Pureza. Horrible palabra. Puré, y después za. Date un poco cuenta."
},
{
"chapter": 18,
"esQuote": "...un tal Oscar Peterson, un tal pianista con algo de tigre y felpa, un tal pianista triste y gordo, un tipo al piano y la lluvia sobre la claraboya, en fin, literatura."
},
{
"chapter": 71,
"esQuote": "Todo lo que se escribe en estos tiempos y que vale la pena leer está orientado hacia la nostalgia."
},
{
"chapter": 73,
"esQuote": "Cuantas veces me pregunto si esto no es más que escritura..."
},
{
"chapter": 73,
"esQuote": "Nuestra verdad posible tiene que ser invención, es decir escritura, literatura, pintura, escultura, agricultura, piscicultura, todas las turas de este mundo. Los valores, turas, la santidad, una tura, la sociedad, una tura, el amor, pura tura, la belleza, tura de turas."
},
{
"chapter": 84,
"esQuote": "Se ha elogiado en exceso a la imaginación. La pobre no puede ir un centímetro más allá del límite de los seudópodos. Hacia acá: gran variedad y vivacidad. Pero en el otro espacio, donde sopla el viento cósmico que Rilke sentía pasar sobre su cara, Dame Imagination no corre."
},
{
"chapter": 93,
"esQuote": "...me atormenta tu amor que no me sirve de puente porque un puente no se sostiene de un solo lado, jamás Wright ni Le Corbusier van a hacer un puente sostenido de un solo lado..."
},
{
"chapter": 93,
"esQuote": "Dadora de infinito, yo no sé tomar, perdoname. Me estás alcanzando una manzana y yo he dejado los dientes en la mesa de luz. "
},
{
"chapter": 93,
"esQuote": "Lo que mucha gente llama amar consiste en elegir a una mujer y casarse con ella. La eligen, te lo juro, los he visto. Como si se pudiese elegir en el amor, como si no fuera un rayo que te parte los huesos y te deja estaqueado en la mitad del patio. Vos dirás que la eligen porque-la-aman, yo creo que es al verse. A Beatriz no se la elige, a Julieta no se la elige. Vos no elegís la lluvia que te va a calar hasta los huesos cuando salís de un concierto."
},
{
"chapter": 93,
"esQuote": "Al despedirnos éramos como dos chicos que se han hecho estrepitosamente amigos en una fiesta de cumpleaños y se siguen mirando mientras los padres los tiran de la mano y los arrastran, y es un dolor dulce y una esperanza, y se sabe que uno se llama Tony y la otra Lulú, y basta para que el corazón sea como una frutilla, y..."
},
{
"chapter": 115,
"esQuote": "La novela que nos interesa no es la que va colocando los personajes en la situación, sino la que instala la situación en los personajes. Con lo cual éstos dejan de ser personajes para volverse personas."
}
]
};


var quotes = quoteObject.quotes;

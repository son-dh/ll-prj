// 	1. Guard   		x5
// 	2. Priest  		x2
// 	3. Baron		x2
// 	4. Handmaiden	x2
// 	5. Prince		x2
// 	6. King			x1
// 	7. Countess		x1
// 	8. Princess		x1

var cards = ["1","1","1","1","1","2","2","3","3","4","4","5","5","6","7","8"];
var wildcard = 0;
var numbersOfPlayers = 4;
var turnNumber = 0;
var p1hands = [];
var p2hands = [];
var p3hands = [];
var p4hands = [];

//Hover on the (placeholder) deck to see how many cards remain
$("#deck").hover(function()
{
	$(this).append("<div id='hover_overlay'><span id='numbers_of_cards_left'>"+cards.length+"</span></div>");
}, function()
{
	$(this).find("div:last").remove();
});

//___Shuffling the deck using Fisher-Yates shuffle
function shuffle(array)
{	
	for(i = array.length-1; i >= 0; i--)
	{
		var randomIndex = Math.floor(Math.random()*(i+1));
		var elementAtIndex = array[randomIndex];
		array[randomIndex] = array[i];
		array[i] = elementAtIndex;
	}
	return array;
}

//___A function that translate the number into its respective card
function showCard(val)
{
	
}

shuffle(cards);
//Each player get 1 card from deck
//for testing I just give out P1 (1)Guard and (5)Prince
p1hands = ["1","5"];
$("#p1hands").append("<div class='card cardhand_"+p1hands[0]+"'></div>");
$("#p1hands").append("<div class='card cardhand_"+p1hands[1]+"'></div>");	

//Get the wild card from the deck;
wildcard = cards.shift();

//User interaction
$("#p1hands [class^=card]").on("click", function()
{
	//get the clicked card value
	var discardedCardValue = $(this).attr('class').replace('card cardhand_','');
	//animate the card to move into position
	$(this).css(
	{
		'position':'absolute',
		'top': '-50px',
		'left': '150px',
		
	});
	
});

$("#deck").click(function(){
	alert(cards);	
});

$("#wildcard").click(function(){
	alert(wildcard);	
});
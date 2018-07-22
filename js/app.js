/*
 * Create a list that holds all of your cards
 */
const cardsAll = document.getElementsByClassName('card');
const allCardsClosedArray = [...cardsAll];
const deck = document.querySelector('.deck');
var i = 100;

console.log(allCardsClosedArray);
function startGame() {
	deck.innerHTML = '';
	var shuffledCards = shuffle(allCardsClosedArray);
	for(var newCard of shuffledCards){
    i++
    deck.appendChild(newCard);
		newCard.classList.remove("open","show","match");
	}
  let cardsAllShuffled = document.getElementsByClassName('card');
  const allCardsClosedArrayShuffled = [...cardsAllShuffled];
  console.log(allCardsClosedArrayShuffled);
};

startGame ();
console.log("startgame");

 let openCards = [];
 let matchedCards = [];
 let moves = 0;
 let movesTotal = [];

 function timer () {
   var sec = 0;
    function pad ( val ) {
      return val > 9 ? val : "0" + val;
    }
    setInterval(function(){
      document.getElementById("sec").innerHTML=pad(++sec%60);
      document.getElementById("min").innerHTML=pad(parseInt(sec/60,10));
    }, 1000);
 }

 //When game finishes and modal appears

 function endGame () {

   const modal = document.querySelector(".modal");
   modal.style.display = "block";

   let totalSeconds = document.getElementById("seconds").innerHTML;
   let totalMinutes = document.getElementById("minutes").innerHTML;

   finalSeconds.innerHTML = `${totalSeconds}`;
   finalMinutes.innerHTML = `${totalMinutes}`;

   let totalMoves = movesTotal.length;
   movesFinal.innerHTML = `${totalMoves}`;
   if (totalMoves <= 20) {
     starTotal.innerHTML = '3';
   } else if(totalMoves >= 35 && totalMoves <= 20) {
     starTotal.innerHTML = '2';
   } else {
     starTotal.innerHTML = '1';
   }
 }

 //restart and reset inspired from https://stackoverflow.com/questions/6666363/is-it-possible-to-clear-a-form-and-reset-reload-the-page-with-one-button

 document.querySelector(".restart").addEventListener("click", restartGame);

 function restartGame(){
   window.location.href = window.location.href;
 }

 reset.addEventListener("click", resetGame);

 function resetGame() {
   window.location.href = window.location.href;
 }

/*
 startGame();
*/


 //thankful for this webinar that helped me get started: https://www.youtube.com/watch?v=_rUH-sEs68Y


 allCards.forEach(function(card){

   card.addEventListener('click', function(e) {
     if (!card.classList.contains('open') && !card.classList.contains('show')) {
     openCards.push(card);
     card.classList.add('open', 'show');
     console.log('Open Cards:', openCards.length);
     movesTotal.push(moves);
     console.log(movesTotal.length);
     const totalMoves = document.querySelector('.moves');
     totalMoves.textContent = movesTotal.length;

       if (movesTotal.length <= 1) {
         timer();
         const yellowStars = document.querySelector('.stars');
         yellowStars.style.color = '#FFA500';

       } else if (movesTotal.length >= 20 && movesTotal.length <=35) {

             document.getElementById('star1').style.color = 'grey';
           } else if (movesTotal.length >= 36  ){

             document.getElementById('star2').style.color = 'grey';
       }

       if (openCards.length == 2) {

         if (openCards[0].innerHTML == openCards[1].innerHTML) {
           console.log("match");
           openCards[0].classList.add('match', 'open', 'show');
           openCards[1].classList.add('match', 'open', 'show');
           openCards = [];

           matchedCards.push(card);
           console.log(matchedCards.length);
           console.log(document.getElementsByClassName('match').length);

         } else {

           setTimeout(function() {
             openCards.forEach(function(card) {
               card.classList.remove('open', 'show');
             });
             openCards = [];
           }, 700);
         }
       }
     }

     if (document.getElementsByClassName('match').length == 16 ) {
       endGame();
     }
   });
 });


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      console.log("shuffle:", currentIndex);
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

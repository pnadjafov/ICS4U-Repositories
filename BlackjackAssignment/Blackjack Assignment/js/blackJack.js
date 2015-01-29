var deck = [];
var playerCards = [];
var dealerCards = [];
var EMPTY = 0;
var INITIAL_WALLET = 1000;
var playerWallet = INITIAL_WALLET;
var playerName = "Player";
var dealerName = "Dealer";
var playerBet = EMPTY;
var countTurns = EMPTY;

$(document).ready(function() {
    $('#play').hide();
    $('#ULB').hide();
    $('#dealer').hide();
    $('#player').hide();
    $('#hit').hide();
    $('#stay').hide();
    $('#bet').hide();
    $('#betAmount').hide();
    $('#slider').hide();
    $('#dealerCards').hide();
    $('#dealerScore').hide();
    $('#playerCards').hide();
    $('#playerScore').hide();
    $('#slider').hide();
    $('#playerWallet').hide();
    $('#doubleDown').hide();
    $('#loan').hide();
    $('#play').fadeIn(3000);
    $('#ULB').fadeIn(3000);

    $('#play').click(function() { // Initializes the slider, creates a deck and distributes 2 cards to each player
    	$('#play').fadeOut();
    	countTurns = EMPTY;
        $('#playerWallet').hide();
        $(function() {
            $("#slider").slider({
                value: 0,
                min: 0,
                max: playerWallet,
                step: 50,
                slide: function(event, ui) {
                    $("#betAmount").html("Bet Amount: $" + ui.value);
                    playerBet = ui.value;
                }
            });
            $("#betAmount").html("Bet Amount: $" + $("#slider").slider("value"));
        });
        playerBet = 0;
        $("#slider").slider('value', 0);
        playGame();
        $('#playerWallet').delay(800).fadeIn();
        $("#playerWallet").html("Player Wallet: $" + playerWallet);
        $("#betAmount").html("Bet Amount: $" + playerBet);
    });
    $('#bet').click(function() { // Player selects a value using the slider and initializes a bet, causing all cards as well as hit/stay options to appear.
        $('#playerWallet').hide();
        if (playerBet > playerWallet) {
            $('#betAmount').html("Please enter a valid bet!");
            playerBet = 0;
        } else {
            playerWallet -= playerBet;
            $('#bet').fadeOut();
            $('#betAmount').fadeOut();
            $('#slider').fadeOut();
            $('#ULB').fadeOut();
            $('#dealer').delay(800).fadeIn();
            $('#player').delay(800).fadeIn();
            $('#hit').delay(800).fadeIn();
            $('#stay').delay(800).fadeIn();
            $('#dealerCards').delay(800).fadeIn();
            $('#dealerScore').delay(800).fadeIn();
            $('#playerCards').delay(800).fadeIn();
            $('#playerScore').delay(800).fadeIn();
            $('#playerWallet').delay(800).fadeIn();
            $('#doubleDown').delay(800).fadeIn();
            $("#playerWallet").html("Player Wallet: $" + playerWallet + " | Current Bet: $" + playerBet);
        }
    });
    $('#hit').click(function() { // Player hits, calling the "hit" method and displaying a new card
        countTurns++;
        $('#doubleDown').fadeOut();
        hit(playerName);
        var cards = '';
        $.each(playerCards, function(index, value) {
            cards += "<img src = \'" + value.url + "\''>";
        })
        $('#playerCards').html(cards);
        if (getScore(playerCards) > 21) { // Player busts. Take away bet and allow for a re-try.
            $('#playerScore').html('Busted! Would you like to try again?');
            $("#playerWallet").html("Player Wallet: $" + playerWallet);
            endGame();
        } else if (getScore(playerCards) == 21) { // Player gets blackjack, add bet to wallet and allow for a re-try.
            $('#playerScore').html('You win! Would you like to play again?');
            playerWallet += playerBet * 2;
            $("#playerWallet").html("Player Wallet: $" + playerWallet);
            endGame();
        } else { // If none of the above scenarios occur, simply display the player's card score.
            $('#playerScore').html('Player Score: ' + getScore(playerCards));
        }
    });
    $('#doubleDown').click(function() { // Doubles the player's bet, calls a "hit" and then forces a "stay" on the next turn.
        if (playerBet * 2 > playerWallet + playerBet) { // If the player does not have enough funds in their wallet, the player is informed
            $('#playerScore').html('Not enough funds! | Player Score: ' + getScore(playerCards));
        } else {
            playerBet = playerBet * 2;
            hit(playerName);
            var cards = '';
            $.each(playerCards, function(index, value) {
                cards += "<img src = \'" + value.url + "\''>";
            })
            $('#playerCards').html(cards);
            if (getScore(playerCards) > 21) { // Player busts. Take away bet and allow for a re-try.
                $('#playerScore').html('Busted! Would you like to try again?');
                $("#playerWallet").html("Player Wallet: $" + playerWallet);
                endGame();
            } else if (getScore(playerCards) == 21) { // Player gets blackjack, add bet to wallet and allow for a re-try.
                $('#playerScore').html('You win! Would you like to play again?');
                playerWallet += playerBet * 2;
                $("#playerWallet").html("Player Wallet: $" + playerWallet);
                endGame();
            } else { // If none of the above scenarios occur, simply display the player's card score.
                $('#playerScore').html('Player Score: ' + getScore(playerCards));
                $('#stay').trigger('click'); // Forces a click on the "stay" button.
            }
        }
    });
    $('#stay').click(function() { //Player decides to stay and the automated dealer begins their turn
        if (getScore(playerCards) < getScore(dealerCards)) { // Dealer automatically has a higher score, player loses and bet is taken.
            $('#dealerScore').html('Dealer Score: ' + getScore(dealerCards) + "<br>" + ' Dealer wins! Would you like to try again?');
            cards = '';
            $.each(dealerCards, function(index, value) {
                cards += "<img src = \'" + value.url + "\''>";
            })
            $('#dealerCards').html(cards);
            $("#playerWallet").html("Player Wallet: $" + playerWallet);
            endGame();
        } else {
            var stopDealer = false;
            while (!stopDealer) {
                if (getScore(dealerCards) < 17) {
                    hit(dealerName);
                }
                cards = '';
                $.each(dealerCards, function(index, value) { // Displays all cards
                    cards += "<img src = \'" + value.url + "\''>";
                })
                $('#dealerCards').html(cards);
                if (getScore(dealerCards) > 21) { // Dealer busts, player wins bet.
                    $('#dealerScore').html('Dealer Score: ' + getScore(dealerCards) + "<br>" + 'Dealer busts! You win! Would you like to play again?');
                    playerWallet += playerBet * 2;
                    $("#playerWallet").html("Player Wallet: $" + playerWallet);
                    stopDealer = true;
                } else if (getScore(dealerCards) >= 17) { // Dealer is above or at their legal limit
                    if (getScore(dealerCards) > getScore(playerCards)) { // Dealer wins, player loses bet
                        $('#dealerScore').html('Dealer Score: ' + getScore(dealerCards) + "<br>" + 'Dealer wins! Would you like to try again?');
                        $("#playerWallet").html("Player Wallet: $" + playerWallet);
                    } else if (getScore(dealerCards) == getScore(playerCards)) { // Draw, bet is returned
                        $('#dealerScore').html('Dealer Score: ' + getScore(dealerCards) + "<br>" + 'Draw! Your bet has been returned. Would you like to try again?');
                        playerWallet += playerBet;
                        $("#playerWallet").html("Player Wallet: $" + playerWallet);
                    } else if (getScore(dealerCards) < getScore(playerCards)) { // Dealer loses, player wins bet
                        $('#dealerScore').html('Dealer Score: ' + getScore(dealerCards) + "<br>" + 'Dealer loses! You win! Would you like to play again?');
                        playerWallet += playerBet * 2;
                        $("#playerWallet").html("Player Wallet: $" + playerWallet);
                    }
                    stopDealer = true;
                } else if (getScore(dealerCards) > getScore(playerCards)) { // Dealer instantly wins, player loses bet
                    $('#dealerScore').html('Dealer Score: ' + getScore(dealerCards) + "<br>" + 'The dealer wins! Would you like to try again?');
                    $("#playerWallet").html("Player Wallet: $" + playerWallet);
                    stopDealer = true;
                }
            }

        }
        endGame();
    });
	$('#loan').click(function(){ // Allows the player to reset their wallet.
		$('#loan').fadeOut();
		playerWallet += INITIAL_WALLET;
		$("#playerWallet").html("Loan Added! Player Wallet: $" + playerWallet);
	});
});

function Card(suit, type) { // Creates a Card object
    this.cardSuit = suit;
    this.cardType = type;
    this.faceUp = true;
    this.url = getUrl(this.cardSuit, this.cardType);
}

function playGame() { // Initializes the deck, distributes the cards to both players and displays all cards, except the dealer's first card
    $('#dealer').fadeOut();
    $('#player').fadeOut();
    $('#hit').fadeOut();
    $('#stay').fadeOut();
    $('#dealerCards').fadeOut();
    $('#dealerScore').fadeOut();
    $('#playerCards').fadeOut();
    $('#playerScore').fadeOut();
    $('#play').fadeOut();
    $('#doubleDown').fadeOut();
    $('#bet').delay(800).fadeIn();
    $('#betAmount').delay(800).fadeIn();
    $('#slider').delay(800).fadeIn();
    $('#ULB').delay(800).fadeIn();
    deck = [];
    playerCards = [];
    dealerCards = [];
    $('#dealerCards').html("");
    $('#playerCards').html("");
    $('#dealerScore').html("");
    $('#playerScore').html("");
    $("#playerWallet").html("");
    createDeck();
    dealCards();
    var faceCard = "<img src = \'" + "images/cards/card_back_final.png" + "\''>";
    var cards = [];
    $.each(dealerCards, function(index, value) {
        cards.push("<img src = \'" + value.url + "\''>");
    })
    $('#dealerCards').html(faceCard + cards[1]);
    var cards = [];
    $.each(playerCards, function(index, value) {
        cards.push("<img src = \'" + value.url + "\''>");
    })
    $('#playerCards').html(cards);
    if (getScore(playerCards) == 21) { // Player instantly gets blackjack and wins their bet
        $('#playerScore').html('Blackjack! Would you like to play again?');
        playerWallet += playerBet * 2;
        $("#playerWallet").html("Player Wallet: $" + playerWallet);
        endGame();
    } else { // Display the player's cards
        $('#playerScore').html('Player Score: ' + getScore(playerCards));
    }
}

function endGame() { // Fades out all buttons and allows the player to restart the game
	if(playerWallet == 0){
		$('#loan').delay(800).fadeIn();
	}
    $('#play').delay(800).fadeIn();
    $('#hit').fadeOut();
    $('#stay').fadeOut();
    $('#doubleDown').fadeOut();
}

function createDeck() { // Creates a deck of 52 random cards
    for (var i = 0; i < 52; i++) {
        var suit = parseInt(4 * Math.random() + 1);
        var type = parseInt(13 * Math.random() + 1);
        if (type == 1) {
            type = "ace";
        } else if (type == 11) {
            type = "jack";
        } else if (type == 12) {
            type = "queen";
        } else if (type == 13) {
            type = "king";
        }
        if (suit == 1) {
            suit = "spades";
        } else if (suit == 2) {
            suit = "hearts";
        } else if (suit == 3) {
            suit = "diamonds";
        } else if (suit == 4) {
            suit = "clubs";
        }
        deck.push(new Card(suit, type));
    }
}

function getUrl(suit, type) { // Generates a url of the given card
    return "images/cards/" + type + "_of_" + suit + ".png";
}

function dealCards() { // Deals the cards to the player and dealer
    for (var i = 0; i < 2; i++) {
        var tempPick = pickCard();
        playerCards.push(deck[tempPick]);
        deck[tempPick] = null;
    }
    for (var i = 0; i < 2; i++) {
        var tempPick = pickCard();
        dealerCards.push(deck[tempPick]);
        deck[tempPick] = null;
    }
}

function pickCard() { // Randomly picks a card from the deck
    var available = false;
    while (!available) {
        var pick = parseInt(52 * Math.random() + 1);
        if (deck[pick] != null) {
            available = true;
        }
    }
    return pick;
}

function hit(name) { // Player/Dealer calls a hit, adds a random card to their hand
    if (playerCards.length > 0 && name == "Player") {
        var tempPick = pickCard();
        playerCards.push(deck[tempPick]);
    } else if (dealerCards.length > 0 && name == "Dealer") {
        var tempPick = pickCard();
        dealerCards.push(deck[tempPick]);
    }
}

function getScore(cards) { // Returns the score of the player or dealer
    var score = 0;
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].cardType == "ace") {
            score += 1;
        } else if (cards[i].cardType < 11) {
            score += cards[i].cardType;
        } else {
            score += 10;
        }
    }
    score = checkAces(cards, score);
    return score;
}

function checkAces(getDeck, score) { // Automatically ensures best possible score for the player/dealer if they have aces
        for (var i = 0; i < getDeck.length; i++) {
            if (getDeck[i].cardType == "ace") {
                if (score + 10 <= 21) {
                    score += 10;
                }
            }
        }
        return score;
    }
    // Made by Phillip Nadjafov

$(document).ready(function() {    
    var allowance
    var mineral1;
    var mineral2;
    var mineral3;
    var mineral4;
    var purchases=0;
    var gameWon=false;
    var gameOver=false;
    var wins;
    var losses;
    
    
    function initializeGame(){
    // allowance: generates random value, assigns it to variable, displays in html file
    allowance = 19 + Math.floor(Math.random() * 120);
    purchases = 0;
    $('.bids').html(purchases);
    gameWon= false;
    gameOver= false;
    mineral1 = 1 + Math.floor(Math.random() * 12);
    $( "#rock1" ).val(mineral1)
    mineral2 = 1 + Math.floor(Math.random() * 12);
    $( "#rock2" ).val(mineral2)
    mineral3 = 1 + Math.floor(Math.random() * 12);
    $( "#rock3" ).val(mineral3)
    mineral4 = 1 + Math.floor(Math.random() * 12);
    $( "#rock4" ).val(mineral4)
    $('.value').html(allowance);
    $('.wins_t').html(wins);
    $('.losses_t').html(losses);
}
initializeGame()

// add to the purchases for every click on images
    $(".rock_image").on("click", function() {
        if (gameWon === false && gameOver === false) {
            purchases = parseInt(purchases) + parseInt($(this).val());
            $('.bids').html(purchases);
            if (purchases === allowance) {
                gameWon=true;
                // wins++;
                // return wins;
                // console.log("wins: " + wins)
            }
            else if(purchases > allowance) {
                gameOver = true;
                // losses++;
                // return losses;
                // console.log("losses: " + losses)
            }
        }
        if (purchases === allowance) {
            initializeGame();
            $('#result').html('You successfully bid on the minerals!');
            wins++;
                return wins;
                console.log("wins: " + wins)
        }
        else if (purchases > allowance) {
            initializeGame();
            losses++;
            return losses;
            console.log("losses: " + losses)
            $('#result').html('You spent too much money on those darn rocks :( ');
        }
        });
  

});
$(document).ready(function() {    
    var allowance
    var mineral1;
    var mineral2;
    var mineral3;
    var mineral4;
    var purchases=0;
    var gameWon;
    var gameOver;
    var wins=0;
    var losses=0;
    
    $("#quote1").hide();
    $("#rock1").click(function(){
         $("#quote1").show();
         $("#quote2").hide();
         $("#quote3").hide();
         $("#quote4").hide();
    });
    $("#quote2").hide();
    $("#rock2").click(function(){
        $("#quote1").hide();
        $("#quote2").show();
        $("#quote3").hide();
        $("#quote4").hide();
    });
    $("#quote3").hide();
    $("#rock3").click(function(){
        $("#quote1").hide();
        $("#quote2").hide();
        $("#quote3").show();
        $("#quote4").hide();
    });
    $("#quote4").hide();
    $("#rock4").click(function(){
        $("#quote1").hide();
        $("#quote2").hide();
        $("#quote3").hide();
        $("#quote4").show();
    });
 

    function initializeGame(){
    // allowance: generates random value, assigns it to variable, displays in html file
    allowance = 19 + Math.floor(Math.random() * 120);
    purchases = 0;
    $('.bids').html(purchases);
    gameWon= false;
    gameOver= false;
    // create a randomize value for each rock, and assign it to the rock
    mineral1 = 1 + Math.floor(Math.random() * 12);
    $( "#rock1" ).val(mineral1)
    mineral2 = 1 + Math.floor(Math.random() * 12);
    $( "#rock2" ).val(mineral2)
    mineral3 = 1 + Math.floor(Math.random() * 12);
    $( "#rock3" ).val(mineral3)
    mineral4 = 1 + Math.floor(Math.random() * 12);
    $( "#rock4" ).val(mineral4)
    // show me the allowance
    $('.value').html(allowance);
}
initializeGame()

// add to the purchases for every click on images
$(".rock_image").on("click", function() {
    if (gameWon === false && gameOver === false) {
        purchases = parseInt(purchases) + parseInt($(this).val());
        $('.bids').html(purchases);
        if (allowance - purchases > 12) {
            $(".bids").css({
                "color": "003300",
        });
        }
        else if (allowance - purchases <= 12 && allowance - purchases > 5) {
            $(".bids").css({
                "color": "#ff6f00",
        });
        }
        else if (allowance - purchases <= 5){
            $(".bids").css({
                "color": "#c43e00",
        });
        }
        else if (purchases === allowance) {
            gameWon=true;
            wins++;
            $('.result').html('Yeah! You successfully bid on the minerals!');
            $('#wins_t').html(wins);
            console.log("wins: " + wins)
        }
        else if(purchases > allowance) {
            gameOver = true;
            losses++;
            $('.result').html('Oh no! You spent too much money on those darn rocks...');
            $('#losses_t').html(losses);
            console.log("losses (in else if): " + losses)
        }
    }
    if (purchases === allowance) {
            initializeGame();
        }
        else if (purchases > allowance) {
            initializeGame();
        }

        });
        // $(".rock_image").on("click", function(){
        //     var color = $(".bids").css("color");
        //     if (allowance - purchases <= 12) {
        //         $(".bids").css({
        //             "color": "#ff6f00",
        //     });
        //     }
        //     else if (allowance - purchases <= 5){
        //         $(".bids").css({
        //             "color": "#c43e00",
        //     });
        //     }
        //     });
    
    
      

});
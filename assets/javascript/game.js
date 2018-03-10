$(document).ready(function() {

// allowance: generates random value, assigns it to variable, displays in html file
var allowance
allowance = 19 + Math.floor(Math.random() * 120);

// show variable to corresponding html elements 
$('.value').html(allowance);

// random price of rocks
var mineral1;
var mineral2;
var mineral3;
var mineral4;
var purchases;


function initializeGame(){
    purchases = 0;
    mineral1 = 1 + Math.floor(Math.random() * 12);
    $( "#rock1" ).val(mineral1)
    mineral2 = 1 + Math.floor(Math.random() * 12);
    $( "#rock2" ).val(mineral2)
    mineral3 = 1 + Math.floor(Math.random() * 12);
    $( "#rock3" ).val(mineral3)
    mineral4 = 1 + Math.floor(Math.random() * 12);
    $( "#rock4" ).val(mineral4)
}
initializeGame()

// add to the purchases for every click on images
    $(".rock_image").on("click", function() {
        if (purchases < allowance) {
            purchases = parseInt(purchases) + parseInt($(this).val());
            $('.bids').html(purchases);
        }
    });

});
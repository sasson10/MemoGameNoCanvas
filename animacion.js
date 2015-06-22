$(document).ready(function() {


    $('.flip').toggle(
            function() {
            	$( this ).find ('.card').addClass('flipped');
            },
            function() {
                $( this ).find ('.card').removeClass('flipped');
            }
    );

});

$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:2
            }
        }
    });
    $( function() {
        $( "#accordion" ).accordion();
    } );
});

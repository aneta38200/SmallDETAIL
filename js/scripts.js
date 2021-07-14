$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass('sticky');
        }
        else{
            $(".navbar").removeClass('sticky');
        }
    });


    $('.homeSlogan, .homeLogo').hide().slideDown(1500, function() {      
        });
    
    $('.seeMore').hide().delay(1700).slideDown(500, function() {      
    });


    $('.number').counterUp({
        delay: 10,
        time: 1200,
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    $('.menu-toggler').click(function(){
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });

});


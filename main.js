
$(document).ready(function() {
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
            $('.navbar-toggle').addClass('collapsed');
            $('.navbar-collapse').removeClass('in');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }
        
        lastScrollTop = st;
    }

    $("#theme-btn").on('click',function() {
        $('html, body').animate({
            'scrollTop' : $("#theme").position().top
        });
    });

    $("#team-btn").on('click',function() {
        $('html, body').animate({
            'scrollTop' : $("#team").position().top
        });
    });

    $("#speakers-btn").on('click',function() {
        $('html, body').animate({
            'scrollTop' : $("#speakers").position().top
        });
    });

    $("#sponsors-btn").on('click',function() {
        $('html, body').animate({
            'scrollTop' : $("#sponsors").position().top
        });
    });

    $("#contact-btn").on('click',function() {
        $('html, body').animate({
            'scrollTop' : $("#contact").position().top
        });
    });

    $(".dp, .dp-prev").hover(function() {
        $(this).children().removeClass("hidden");
    }, function() {
        $(this).children().addClass("hidden");
    });

    /* Popup Logic */
    $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true,
        alignTop: false,
        closeBtnInside: true
    });


});
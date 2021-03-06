/*** Scroll to top when home clicked ***/
function scrollToTop() {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
}

/*** Scroll to desired position ***/
function scrollTorr(id) {
    console.log("id = ");
    $("html,body").animate({
        scrollTop: $("#" + id).offset().top -50
    }, 600);
    return false;

}

/*** navbar visible only after menu section ***/
$(document).ready(function() {

    $(".navbar").hide(); //Hide the navigation bar first

    $(window).scroll(function() { //Listen for the window's scroll event
        if (isScrolledAfterElement(".name")) { //if it has scrolled beyond the #content elment
            $('.navbar').show(); //Show the navigation bar
        } else {
            $('.navbar').hide(); //Else hide it
        }
    });

    //Function that returns true if the window has scrolled beyond the given element
    function isScrolledAfterElement(elem) {
        var $elem = $(elem);
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop;

        var elemTop = $elem.offset().top;

        return elemTop <= docViewBottom;
    }

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });

    $(function() {
        $('.item').matchHeight();
        $('.info-column').matchHeight();
    });
    $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
    $(function() {
        $('.ratyli').ratyli({disable:true});
    });
});

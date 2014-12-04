//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $('img[src="' + "img/logo-blanco.png" + '"]').attr('src', "img/logo-negro.png");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $('.container img[src="' + "img/logo-negro.png" + '"]').attr('src', "img/logo-blanco.png");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'jswing');
        event.preventDefault();
    });
})

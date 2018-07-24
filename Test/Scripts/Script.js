$(document).ready(function () {
    $(window).bind('scroll', function () {
        var navHeight = $(window).height();
        if ($(window).scrollTop() > navHeight) {
            $('#sticky-bar').addClass('navbar-fixed-top');
        }
        else {
            $('#sticky-bar').removeClass('navbar-fixed-top');
        }
    });
});
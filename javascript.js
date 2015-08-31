$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 0) {
    $('nav').addClass('transition');
    $('nav a img').addClass('transition1');
  } else {
    $('nav').removeClass('transition');
    $('nav a img').removeClass('transition1');
  }
});

$(".btn").mouseup(function(){
    $(this).blur();
})

jQuery(document).ready(function($) {
    $(".clickable-row").click(function() {
        window.document.location = $(this).data("href");
    });
});

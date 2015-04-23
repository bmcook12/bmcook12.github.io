var hh = $('header').outerHeight();

$(window).scroll(function(){

  if (window.pageYOffset > hh - 75){
    $('header').addClass('fixed');
    $('h1').css('padding-top', hh)
  }
  else{
    $('header').removeClass('fixed');
    $('h1').css('padding-top', 0)
  }

});


$('.nav-button').click(function(){
  $('header nav ul').toggleClass('shown');
});


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

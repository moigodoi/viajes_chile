/*$('html, body').animate({
  scrollTop: $('section').offset().top
}, 500);*/
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  /* Invisible texto */
figcaption {
  display:none; 
  transition: all .5s;
}
/* Visible texto */
figure:hover > figcaption {
  display:block;
  transition: all .5s;
}
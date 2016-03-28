function animacoes(){
  "use strict";
  $('.animated').each(function(){
    var posItem = $(this).offset().top + 100;

    if(posItem > $(window).scrollTop() && posItem < $(window).scrollTop() + $(window).height()){

      $(this).addClass('visible');
      $(this).addClass($(this).data("animation"));
    }
  });
}

$(document).on('ready', function () {
    $(window).on('scroll', function(){
      animacoes();
    });
});

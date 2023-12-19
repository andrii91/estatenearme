$( document ).ready(function() {

  $('.lang-current').click(function(e){
    e.preventDefault();

    $('.lang-items').slideToggle(200);
  })

  $('.toggle-menu').click(function(e){
    e.preventDefault();
    $('.menu').slideToggle(200);
  })
}) 



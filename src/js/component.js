$( document ).ready(function() {

  $('.lang-current').click(function(e){
    e.preventDefault();

    $('.lang-items').slideToggle(200);
  })

  $('.toggle-menu').click(function(e){
    e.preventDefault();
    console.log('as')
    $('.menu').slideToggle(200);
  })

  $('.radio-type-button').click(function(e){
    e.preventDefault();

    $('.radio-type-button').removeClass('!bg-white !text-[#16171A]');
    $(this).addClass('!bg-white !text-[#16171A]');

    $('#radio-type').val($(this).data('radio'))
  })

  $('.checkbox-button').click(function(e){
    e.preventDefault();

    $('.checkbox-button').removeClass('!border-[#FFB391]');
    $(this).addClass('!border-[#FFB391]');

    $('.checkbox-button svg').addClass('hidden');
    $(this).find('svg').removeClass('hidden');

    $('#checkbox-type').val($(this).data('radiocheckbox'))
  })

  $( ".search-input" ).on( "keyup", function() {
    if($(this).val().length > 2) {
      $('.search-input-helps').slideDown(200);
    }else{
      $('.search-input-helps').slideUp(200);
    }
  } );

  $('.slider-estate').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    centerMode: true,
    variableWidth: true,
  });

  $('.prev').click(function(){
    $('.slider-estate').slick('slickPrev');
  })
  
  $('.next').click(function(){
    $('.slider-estate').slick('slickNext');
  })
       
}) 



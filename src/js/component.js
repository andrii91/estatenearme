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
       
  $('.slider-estate-small').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    variableWidth: true,
    prevArrow: `<button class="slider-prev flex items-center justify-center shadow-xl w-11 h-11 rounded-full cursor-pointer text-[#5E5E5E] hover:text-white hover:bg-[#FF6B2A] transition absolute top-48 lg:left-2 xl:-left-9 z-20 bg-white">
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5785 12.1072L16.5285 7.15719L15.1145 5.74319L8.75049 12.1072L15.1145 18.4712L16.5285 17.0572L11.5785 12.1072Z" fill="currentColor"></path>
    </svg>
  </button>`,
    nextArrow: `<button class="slider-next flex items-center justify-center shadow-xl w-11 h-11 rounded-full cursor-pointer text-[#5E5E5E] hover:text-white hover:bg-[#FF6B2A] transition absolute top-48 right-2 z-20 bg-white">
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.4215 12.1072L8.47152 7.15719L9.88551 5.74319L16.2495 12.1072L9.88551 18.4712L8.47151 17.0572L13.4215 12.1072Z" fill="currentColor"></path>
    </svg>
  </button>`,
  });
  
}) 



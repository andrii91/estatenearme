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
    slidesToShow: 1,
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


  // map hover

  $('[data-map]').each(function(){
    const map = $(this);
    let jsonData = map.data('map');

    for (let index = 0; index < Object.keys(jsonData).length; index++) {
      const element = Object.keys(jsonData)[index];

      map.find('.map-legends').append(`
        <li class="text-sm text-[#16171A]" data-map-id="${element}"><a class="link-${element}" href="${jsonData[element].filter_link}">${jsonData[element].name} <span class="text-[#B9B9B9]"> (${jsonData[element].info}) </span> </a> </li>
      `)
    }
  })


  $('[data-map-id]').hover(function(){
    $('[data-map-id]').removeClass('!text-[#FF6B2A]')
    $('[data-map-id] span').removeClass('!text-[#FFB391]')

    const elMap = $(this).data('map-id');
    $(`[data-map-id=${elMap}]`).addClass('!text-[#FF6B2A]');
    $(`[data-map-id=${elMap}]`).find('span').addClass('!text-[#FFB391]');


    let jsonData = $(this).parents('.tabs-item').data('map');
    let parentId = $(this).parents('.tabs-item').attr('id');
    let typeMap = $(`[href="#${parentId}"]`).text();

    $(`#${parentId}`).append(`
      <div id="tabs-map-info" class="map-info shadow bg-white p-3 absolute  w-36 rounded z-50">
        <img src="${jsonData[elMap].icon}" class="w-4 mb-2" />

        <h6 class="text-xs font-bold"> ${jsonData[elMap].name} </h6>
        <p class="text-[8px]">
          ${jsonData[elMap].info} ${typeMap}
        </p>
      </div>
    `)

    document.addEventListener("mousemove", moveBlock);
  },
  function(){
    $('.map-info').remove();
    $('[data-map-id]').removeClass('!text-[#FF6B2A]')
    $('[data-map-id] span').removeClass('!text-[#FFB391]')
    document.removeEventListener("mousemove", moveBlock);
  })


  $('[data-map-id]').click(function(e){
    e.preventDefault();
    const id = $(this).data('map-id');

    document.location.href=$(`.link-${id}`).attr('href');
  })

  function moveBlock(event) {
    let cursorBlock = document.getElementById("tabs-map-info");
    
    let mouseX = event.pageX + 8;
    let mouseY = event.pageY + 8;

    cursorBlock.style.left = mouseX + "px";
    cursorBlock.style.top = mouseY + "px";
  }
  

  $('.tabs-list li a').click(function(e){
    e.preventDefault();
    $('.tabs-item').removeClass('!flex');
    $('.tabs-list li a').removeClass('bg-white !text-[#FF6B2A]');
    $(this).addClass('bg-white !text-[#FF6B2A]');

    $($(this).attr('href')).addClass('!flex');
  })

  $('.slider-blog').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.slider-blog-prev').click(function(){
    $('.slider-blog').slick('slickPrev');
  })
  
  $('.slider-blog-next').click(function(){
    $('.slider-blog').slick('slickNext');
  })


  const containerWidth = $('.filter-banner-wrap').width();
  const bannerWidth = $('.filter-banner').width();

  $('.filter-banner').scroll(function() {
    const scrollPosition = $(this).scrollLeft();

    if (Math.round(containerWidth - bannerWidth) === Math.round(scrollPosition)) {
      $('.filter-banner-button').fadeOut();
      $('.filter-banner').removeClass('before:block before:bg-gradient-to-r before:from-transparent before:to-[#1C1919] before:w-72 before:h-full before:absolute before:top-0 before:right-0')
    } else {
      $('.filter-banner-button').fadeIn();
      $('.filter-banner').addClass('before:block before:bg-gradient-to-r before:from-transparent before:to-[#1C1919] before:w-72 before:h-full before:absolute before:top-0 before:right-0')
    }
  });

  $('.filter-banner-button').click(function() {
    const scrollContainer = $('.filter-banner');
    const currentScroll = scrollContainer.scrollLeft();
    const newScroll = currentScroll + bannerWidth/2;

    scrollContainer.animate({ scrollLeft: newScroll }, 'slow');
    return false;
  });
      
  
  $('.provinces-more').click(function(){
    if($(this).hasClass('active')) {
      $(this).removeClass('active');

      $('.provinces a').each(function(index) {
        if(index > 11){
          $(this).addClass('!hidden');
        }
      })
    }else{
      $('.provinces a').removeClass('!hidden');
      $(this).addClass('active');
    }
  })

  $('.provinces a').each(function(index) {
    if(index > 11){
      $(this).addClass('!hidden');
      $(this).parents('section').find('.provinces-more').removeClass('!hidden')
    }
  })
}) 

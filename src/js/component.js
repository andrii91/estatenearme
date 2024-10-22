!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.lozad=e()}(this,function(){"use strict";var g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},n="undefined"!=typeof document&&document.documentMode,l={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=document.createElement("img");n&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),t.appendChild(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var r=t.children,o=void 0,a=0;a<=r.length-1;a++)(o=r[a].getAttribute("data-src"))&&(r[a].src=o);t.load()}t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset")),t.getAttribute("data-background-image")&&(t.style.backgroundImage="url('"+t.getAttribute("data-background-image")+"')"),t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};
// Detect IE browser
function f(t){t.setAttribute("data-loaded",!0)}var b=function(t){return"true"===t.getAttribute("data-loaded")};return function(){var r,o,a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=g({},l,t),n=e.root,i=e.rootMargin,d=e.threshold,c=e.load,u=e.loaded,s=void 0;return window.IntersectionObserver&&(s=new IntersectionObserver((r=c,o=u,function(t,e){t.forEach(function(t){(0<t.intersectionRatio||t.isIntersecting)&&(e.unobserve(t.target),b(t.target)||(r(t.target),f(t.target),o(t.target)))})}),{root:n,rootMargin:i,threshold:d})),{observe:function(){for(var t=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)}(a,n),e=0;e<t.length;e++)b(t[e])||(s?s.observe(t[e]):(c(t[e]),f(t[e]),u(t[e])))},triggerLoad:function(t){b(t)||(c(t),f(t),u(t))},observer:s}}});

var observer = lozad();
observer.observe();


!function(a){a.fn.viewportChecker=function(b){var c={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window};a.extend(c,b);var d=this,e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()};return this.checkElements=function(){var b,f;c.scrollHorizontal?(b=Math.max(a("html").scrollLeft(),a("body").scrollLeft(),a(window).scrollLeft()),f=b+e.width):(b=Math.max(a("html").scrollTop(),a("body").scrollTop(),a(window).scrollTop()),f=b+e.height),d.each(function(){var d=a(this),g={},h={};if(d.data("vp-add-class")&&(h.classToAdd=d.data("vp-add-class")),d.data("vp-remove-class")&&(h.classToRemove=d.data("vp-remove-class")),d.data("vp-add-class-full-view")&&(h.classToAddForFullView=d.data("vp-add-class-full-view")),d.data("vp-keep-add-class")&&(h.removeClassAfterAnimation=d.data("vp-remove-after-animation")),d.data("vp-offset")&&(h.offset=d.data("vp-offset")),d.data("vp-repeat")&&(h.repeat=d.data("vp-repeat")),d.data("vp-scrollHorizontal")&&(h.scrollHorizontal=d.data("vp-scrollHorizontal")),d.data("vp-invertBottomOffset")&&(h.scrollHorizontal=d.data("vp-invertBottomOffset")),a.extend(g,c),a.extend(g,h),!d.data("vp-animated")||g.repeat){String(g.offset).indexOf("%")>0&&(g.offset=parseInt(g.offset)/100*e.height);var i=g.scrollHorizontal?d.offset().left:d.offset().top,j=g.scrollHorizontal?i+d.width():i+d.height(),k=Math.round(i)+g.offset,l=g.scrollHorizontal?k+d.width():k+d.height();g.invertBottomOffset&&(l-=2*g.offset),k<f&&l>b?(d.removeClass(g.classToRemove),d.addClass(g.classToAdd),g.callbackFunction(d,"add"),j<=f&&i>=b?d.addClass(g.classToAddForFullView):d.removeClass(g.classToAddForFullView),d.data("vp-animated",!0),g.removeClassAfterAnimation&&d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass(g.classToAdd)})):d.hasClass(g.classToAdd)&&g.repeat&&(d.removeClass(g.classToAdd+" "+g.classToAddForFullView),g.callbackFunction(d,"remove"),d.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&a(document).bind("touchmove MSPointerMove pointermove",this.checkElements),a(c.scrollBox).bind("load scroll",this.checkElements),a(window).resize(function(b){e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},d.checkElements()}),this.checkElements(),this}}(jQuery);


$( document ).ready(function() {

  function isMobile() {
    // Перевірка ширини екрана
    var windowWidth = $(window).width();
  
    // Інші можливі умови для визначення мобільного телефона
    var isTouchDevice = 'ontouchstart' in document.documentElement;
    var isSmallScreen = windowWidth < 768; // Наприклад, визначити маленький екран як ширину менше 768 пікселів
  
    // Повернути true, якщо виконується хоча б одна умова
    return isTouchDevice || isSmallScreen;
  }

  $('.fade-in-up').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInUp', 
    offset: '0%',
    removeClassAfterAnimation: true,
    classToRemove: "hidden_animation"
  });

  $('.fade-in-down').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInDown', 
    offset: '0%',
    removeClassAfterAnimation: true,
    classToRemove: "hidden_animation"
  });
  
  $('.fade-in-left, .provinces a:nth-child(odd)').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInLeft', 
    offset: '0%',
    removeClassAfterAnimation: true,
    classToRemove: "hidden_animation"
  });

  $('.fade-in-right, .provinces a:nth-child(even)').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInRight', 
    offset: '0%',
    removeClassAfterAnimation: true,
    classToRemove: "hidden_animation"
  });


  $('.zoom-in').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated zoomIn', 
    offset: '0%',
    removeClassAfterAnimation: true,
    classToRemove: "hidden_animation"
  });  

  $('.zoom-in-down').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated zoomInDown', 
    offset: '0%',
    removeClassAfterAnimation: true,
    classToRemove: "hidden_animation"
  });  


  $('.lang-current').click(function(e){
    e.preventDefault();

    $('.lang-items').slideToggle(200);
  })

  $('.toggle-menu').click(function(e){
    e.preventDefault();
    $(this).toggleClass('open');
    $('.mobile-menu').toggleClass('open');
  })

  $('.show-submenu').click(function(){
    $(this).toggleClass('active')
  })

  $('.show-account-menu').click(function(e){
    e.preventDefault();
    $('.account-menu').slideToggle(200).toggleClass('open');
  })

  

  $('.radio-type-button').click(function(e){
    e.preventDefault();

    $('.radio-type-button').removeClass('!bg-white !text-primary_dark');
    $(this).addClass('!bg-white !text-primary_dark');

    $('#radio-type').val($(this).data('radio'))
  })

  $('.checkbox-button').click(function(e){
    e.preventDefault();

    $('.checkbox-button').removeClass('!border-primary');
    $(this).addClass('!border-primary');

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
    speed: 1000,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    centerPadding: 0,
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
    prevArrow: `<button class="slider-prev flex items-center justify-center shadow-xl w-11 h-11 rounded-full cursor-pointer text-primary_gray hover:text-white hover:bg-primary transition absolute top-48 -left-3.5 z-20 bg-white">
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5785 12.1072L16.5285 7.15719L15.1145 5.74319L8.75049 12.1072L15.1145 18.4712L16.5285 17.0572L11.5785 12.1072Z" fill="currentColor"></path>
    </svg>
  </button>`,
    nextArrow: `<button class="slider-next flex items-center justify-center shadow-xl w-11 h-11 rounded-full cursor-pointer text-primary_gray hover:text-white hover:bg-primary transition absolute top-48 -right-3.5 z-20 bg-white">
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
        <li class="text-sm text-primary_dark" data-map-id="${element}"><a class="link-${element}" href="${jsonData[element].filter_link}">${jsonData[element].name} <span class="text-[#B9B9B9]"> (${jsonData[element].info}) </span> </a> </li>
      `)
    }
  })


  $('[data-map-id]').hover(function(){
    $('[data-map-id]').removeClass('!text-primary')
    $('[data-map-id] span').removeClass('!text-primary')

    const elMap = $(this).data('map-id');
    $(`[data-map-id=${elMap}]`).addClass('!text-primary');
    $(`[data-map-id=${elMap}]`).find('span').addClass('!text-primary');


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
    $('[data-map-id]').removeClass('!text-primary')
    $('[data-map-id] span').removeClass('!text-primary')
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
    $('.tabs-list li a').removeClass('bg-white !text-primary');
    $(this).addClass('bg-white !text-primary');

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

  $('.tabmobile li').click(function(){
    $('.tabmobile li').removeClass('bg-white shadow-xl')
    $(this).addClass('bg-white shadow-xl');
    $('.tabmobile-item').addClass('hidden');
    $(`.${$(this).data('tab')}`).removeClass('hidden')
  })
  
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

  $('.provinces-slider').slick({
    rows: 3,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    lazyLoad: 'ondemand',
  });

  $('.provinces-slider-prev').click(function(){
    $('.provinces-slider').slick('slickPrev');
  })
  
  $('.provinces-slider-next').click(function(){
    $('.provinces-slider').slick('slickNext');
  })

  // dropdown
  $('.dropdown-label').click(function(e){
    e.preventDefault();
    $(this).parents('.dropdown').toggleClass('open')
    $(this).parent().find('.dropdown-items').slideToggle(200);
  })

  $('.dropdown-item').click(function(e){
    e.preventDefault();
    $(this).parents('.dropdown').find('.dropdown-label span').text($(this).text())
    $(this).parents('.dropdown').find('input').val($(this).data('value'))
    $(this).parents('.dropdown').find('.dropdown-items').slideToggle(200);
    $('.dropdown-portal').remove();

  })

  $(document).mouseup( function(e){ 
    var div = $( ".dropdown" ); 
    if ( !div.is(e.target) 
        && div.has(e.target).length === 0 ) {
          div.removeClass('open')
          div.find('.dropdown-items').slideUp(200);

          $('.dropdown-portal').remove();
    }
  });


  function mobileDropdown() {
    $('.overflow-x-auto .dropdown-label').click(function(e){
      $('.dropdown-portal').remove();
      const label = $(this);
   
      var elementX = label.offset().left;
  
      if(label.parent().hasClass('open') && isMobile()) {
        label.parent().find('.dropdown-items').addClass('!hidden')
  
        label.parents('.overflow-x-auto').parent().append(`
          <div class="dropdown-portal dropdown open z-50 w-[${label.parent().width()}px]">
            <div class="dropdown-items !block !left-[${elementX - 16}px]">
              ${label.parent().find('.dropdown-items').html()}
            </div>
          </div>
        `);
        
        $('.dropdown-item').click(function(e){
          e.preventDefault();
          label.parent().find('.dropdown-label span').text($(this).text())
          label.parent().find('input').val($(this).data('value'))
          label.parent().find('.dropdown-items').slideToggle(200);
          label.parent().removeClass('open')
          $('.dropdown-portal').remove();
        })

      }
    })
  
    $('.overflow-x-auto').scroll(function(){
      $('.dropdown-portal').remove();
      $( ".dropdown" ).each(function(){
        $(this).removeClass('open');
        $(this).find('.dropdown-items').slideUp(200)
      })
    })
  }


  if(isMobile()) {
    mobileDropdown()
  }else{
    $('.dropdown-items').each(function(){
      $(this).removeClass('!hidden')
    })
  }
  // end dropdown


  let filterCount = $('.filter-check-button.active').length;
  $('.filter-btn-open').click(function(e){
    e.preventDefault();

    $('.filter').slideToggle(200);
   
  })

  $('.filter-check-button').click(function(e){
    e.preventDefault();


    $(this).toggleClass('!bg-primary !text-white active')
    $(this).find('svg').toggleClass('!bg-primary !text-white')

    filterCount = $('.filter-check-button.active').length;
    if(filterCount > 0) {
      $('.filter-btn-open span').text(` (${filterCount})`)
    }
  });

  $('.provinces-slider-large').slick({
    rows: 2,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 960,
        settings: {
          centerMode: false,
          variableWidth: false,
          slidesToShow: 2
        }
      }
    ]
  });

  $('.provinces-slider-large-prev').click(function(){
    $('.provinces-slider-large').slick('slickPrev');
  })
  
  $('.provinces-slider-large-next').click(function(){
    $('.provinces-slider-large').slick('slickNext');
  });


  $('.tooltip').hover(function(){
    $(this).append(`
      <span class="tooltip-item">${$(this).data('tooltip')}</span>
    `)
  },
  function(){
    $('.tooltip-item').remove();
  })

  $('.toggle-share-menu').click(function(){
    $('#share-menu').slideToggle(200)
  })


   // Функція для генерації посилання на Twitter
   $('.shareOnTwitter').click(function(e) {
    e.preventDefault();
      // URL Twitter
      var twitterUrl = 'https://twitter.com/intent/tweet';
      
      // Параметри для Twitter
      var tweetText = $(this).data('tweetText');
      var hashtags = $(this).data('hashtags');
      var url = $(this).data('url');
      
      // Побудова Twitter URL з параметрами
      var fullUrl = `${twitterUrl}?text=${encodeURIComponent(tweetText)}&hashtags=${encodeURIComponent(hashtags)}&url=${encodeURIComponent(url)}`;
      
      // Відкриваємо посилання в новому вікні (можна використовувати window.location для переходу)
      window.open(fullUrl, '_blank');
  })

  // Функція для генерації посилання на Facebook
  $('.shareOnFacebook').click(function(e) {
    e.preventDefault();
    // URL Facebook
      var facebookUrl = 'https://www.facebook.com/sharer/sharer.php';
      
      // Параметри для Facebook
      var url = $(this).data('url');
      
      // Побудова Facebook URL з параметрами
      var fullUrl = `${facebookUrl}?u=${encodeURIComponent(url)}`;
      
      // Відкриваємо посилання в новому вікні (можна використовувати window.location для переходу)
      window.open(fullUrl, '_blank');
  })

  // Функція для генерації посилання на WhatsApp
  $('.shareOnWhatsApp').click(function(e) {

    e.preventDefault();
    // URL WhatsApp
      var whatsappUrl = 'https://api.whatsapp.com/send';
      
      // Параметри для WhatsApp
      var text = $(this).data('text');
      var url = $(this).data('url');
      
      // Побудова WhatsApp URL з параметрами
      var fullUrl = `${whatsappUrl}?text=${encodeURIComponent(`${text} ${url}`)}`;
      
      // Відкриваємо посилання в новому вікні (можна використовувати window.location для переходу)
      window.open(fullUrl, '_blank');
  })

  $('.sendEmail').click(function(e) {
    e.preventDefault();

    const emailSubject = encodeURIComponent($(this).data('subject'));
    const emailBody = encodeURIComponent($(this).data('body'));
    const emailUrl = `mailto:?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = emailUrl;
  })

  $('.copyLink').click(function(e) {
    e.preventDefault();

      const linkToCopy = $(this).data('url');
      navigator.clipboard.writeText(linkToCopy).then(() => {
          $(this).html(`
          <svg class="h-4 w-4 text-green-500">
            <use xlink:href="#outline-check"></use>
          </svg>
          `)
      }).catch(err => {
          console.error('Unable to copy link', err);
      });
  })


    // Handle click on menu links
    $('.menu-single-page a').on('click', function (e) {
      e.preventDefault();

      var targetId = $(this).attr('href');
      var targetPosition = $(targetId).offset().top - 120;

      $('html, body').animate({
          scrollTop: targetPosition
      }, 500);
  });

  // Highlight menu item on scroll
  $(document).on('scroll', function () {
    var currentPosition = $(this).scrollTop();

    // Loop through each section to find the one in view
    $('.section').each(function () {
        var sectionTop = $(this).offset().top - 150; // Adjusted for better highlighting

        if (currentPosition >= sectionTop) {
            var sectionId = $(this).attr('id');
            var $activeLink = $('.menu-single-page a[href="#' + sectionId + '"]');

            $('.menu-single-page a').removeClass('bg-white');
            $activeLink.addClass('bg-white');

            // Scroll to the left to make the active link visible
            var scrollLeftMenu = $activeLink.offset().left - 20;
            $('.menu-single-page').scrollLeft(scrollLeftMenu);
        }
    });
  });

  $('.block-more').each(function(){
    const blockMore = $(this);
    const paragraph = blockMore.find('p');

    if (paragraph.length > 2) {
      paragraph.each(function(index){
        if(index > 1) {
          $(this).addClass('hidden')
        }
      })
    }
  })

  $('.show-more').click(function(e){
    e.preventDefault()
    $(this).parent().find('.hidden').removeClass('hidden');
    $(this).addClass('hidden')
  })



  $('.plans-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    prevArrow: `<button class="slider-prev flex items-center justify-center shadow-xl w-11 h-11 rounded-full cursor-pointer text-primary_gray hover:text-white hover:bg-primary transition absolute top-1/2 -translate-y-1/2 left-2 lg:-left-[63px] z-20 bg-white">
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5785 12.1072L16.5285 7.15719L15.1145 5.74319L8.75049 12.1072L15.1145 18.4712L16.5285 17.0572L11.5785 12.1072Z" fill="currentColor"></path>
    </svg>
  </button>`,
    nextArrow: `<button class="slider-next flex items-center justify-center shadow-xl w-11 h-11 rounded-full cursor-pointer text-primary_gray hover:text-white hover:bg-primary transition absolute top-1/2 -translate-y-1/2 right-2 lg:-right-[63px] z-20 bg-white">
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.4215 12.1072L8.47152 7.15719L9.88551 5.74319L16.2495 12.1072L9.88551 18.4712L8.47151 17.0572L13.4215 12.1072Z" fill="currentColor"></path>
    </svg>
  </button>`,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });



  var options_1 = {
    series: [{
    name: 'Средняя цена за м²',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Средняя цена за м²<br> в Альфас дель Пи',
    data: [11, 32, 45, 32, 34, 52, 41]
  },
  {
    name: 'Средняя цена за м² <br> в провинции Barcelona',
    data: [23, 34, 55, 32, 77, 99, 41]
  }],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };

  var options_2 = {
    series: [{
    name: 'Средняя цена за м²',
    data: [0, 40, 33, 11, 42, 22, 100]
  }, {
    name: 'Средняя цена за м²<br> в Альфас дель Пи',
    data: [11, 32, 45, 32, 34, 52, 41]
  },
  {
    name: 'Средняя цена за м² <br> в провинции Barcelona',
    data: [23, 34, 55, 32, 77, 99, 41]
  }],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };

  if($('div').hasClass('chart')) {
    var chart_1 = new ApexCharts(document.querySelector("#chart_1"), options_1);
    chart_1.render();
  
    var chart_2 = new ApexCharts(document.querySelector("#chart_2"), options_2);
    chart_2.render();
  }




  $('.tabs-main li a').click(function(e){
    e.preventDefault();

    $('.tabs-main li a').removeClass('active');
    $(this).addClass('active');

    $('.tabs-main-item').removeClass('active');
    $(`${$(this).attr('href')}`).addClass('active');

  })

  if($('div').hasClass('map')) {
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    var greenIcon = L.icon({
        iconUrl: 'images/place.webp',
        iconSize:     [36, 36], // size of the icon
    });
  
    L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);
  
  }


  $('.rating svg').click(function(){
    const clickedIndex = $(this).index();
    $('.rating svg').removeClass('!text-primary');
    $('.rating svg:lt(' + (clickedIndex + 1) + ')').addClass('!text-primary');
  })


  $('.more-answers').click(function(e){
    e.preventDefault();
    $(this).parents('.answers-parent').find('.answers').slideToggle(200);
  })

  $('.fixed-tooltip').click(function(e){
    e.preventDefault();
    $this = $(this);

    if(!$this.hasClass('active')) {
      $('.fixed-tooltip-content').slideDown(0);
      $this.css({'transform': `translateY(-${$('.fixed-tooltip-content').height()+15}px)`})
    }else{
      $('.fixed-tooltip-content').slideUp(0);
      $this.css({'transform': `translateY(0)`})
    }

    $this.toggleClass('active')
  })
  

  $('.object-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          variableWidth: false,
          centerMode: false,
          slidesToShow: 1
        }
      }
    ]
  });

  $('.object-slider-prev').click(function(){
    $('.object-slider').slick('slickPrev');
  })
  
  $('.object-slider-next').click(function(){
    $('.object-slider').slick('slickNext');
  });


  $('.province-item-more').click(function(){
    if($(this).hasClass('active')) {
      $(this).removeClass('active');

      $('.province-item').each(function(index) {
        if(index > 5){
          $(this).addClass('!hidden');
        }
      })
    }else{
      $('.province-item').removeClass('!hidden');
      $(this).addClass('active');
    }
  })

  $('.province-item').each(function(index) {
    if(index > 5){
      $(this).addClass('!hidden');
      $(this).parents('section').find('.province-item-more').removeClass('!hidden')
    }
  })


  $('#avatar').on('change', function(){
    readURL(this, $('#avatar-img'));  //Change the image
  });
  
  //FILE
  function readURL(input, obj){
    if(input.files && input.files[0]){
      var reader = new FileReader();
      reader.onload = function(e){
        console.log(e.target)
        obj.html(`
          <img class="w-full h-full object-cover rounded-full" src="${e.target.result}" />
        `)

        
        $('#url').html(`
          <svg class="h-4 w-4 "><use xlink:href="#upload"></use></svg>
          ${input.files[0].name}
        `)
      }

      reader.readAsDataURL(input.files[0]);
    }
  };

  $('.object-tab-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    prevArrow: `<button class="slider-prev flex items-center justify-center shadow-xl w-11 h-11 rounded-full cursor-pointer text-primary_gray hover:text-white hover:bg-primary transition absolute top-1/2 -translate-y-1/2 left-2 lg:-left-[63px] z-20 bg-white">
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5785 12.1072L16.5285 7.15719L15.1145 5.74319L8.75049 12.1072L15.1145 18.4712L16.5285 17.0572L11.5785 12.1072Z" fill="currentColor"></path>
    </svg>
  </button>`,
    nextArrow: `<button class="slider-next flex items-center justify-center shadow-xl w-11 h-11 rounded-full cursor-pointer text-primary_gray hover:text-white hover:bg-primary transition absolute top-1/2 -translate-y-1/2 right-2 lg:-right-[63px] z-20 bg-white">
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.4215 12.1072L8.47152 7.15719L9.88551 5.74319L16.2495 12.1072L9.88551 18.4712L8.47151 17.0572L13.4215 12.1072Z" fill="currentColor"></path>
    </svg>
  </button>`,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          variableWidth: false,
          centerMode: false,
          slidesToShow: 1
        }
      }
    ]
  });

  $('.tabs-company li a').click(function(){
    $('.object-tab-slider').slick('refresh');

    $('.tabs-company li a').removeClass('!text-primary');
    $(this).addClass('!text-primary')
  })

  $(window).scroll(function () {
    return $('.nav-mob').toggleClass("z-40", $(window).scrollTop() > 0);
  });


   // Функція для сортування таблиці за значенням стовпця
   function sortTable(table, columnIndex, ascending) {
    var rows = table.find('tbody > tr').get();

    rows.sort(function (a, b) {
        var keyA = $(a).children('td').eq(columnIndex).text();
        var keyB = $(b).children('td').eq(columnIndex).text();

        if (ascending) {
            return keyA.localeCompare(keyB);
        } else {
            return keyB.localeCompare(keyA);
        }
    });

    $.each(rows, function (index, row) {
        table.children('tbody').append(row);
    });
}

// Додаємо обробники подій для заголовків стовпців
$('.table-sorted th svg').click(function () {
    var table = $(this).parents('th').closest('table');
    var columnIndex = $(this).parents('th').index();
    var ascending = !$(this).parents('th').hasClass('sorted-asc');

    // Скидаємо попереднє сортування
    table.find('th').removeClass('sorted-asc sorted-desc');

    // Сортуємо таблицю
    sortTable(table, columnIndex, ascending);

    // Додаємо клас для позначення напрямку сортування
    $(this).parents('th').addClass(ascending ? 'sorted-asc' : 'sorted-desc');
});

$('.recent-blog-slider').slick({
  rows: 4,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: 'ondemand',
  prevArrow: $('.slider-recent-blog-prev'),
  nextArrow: $('.slider-recent-blog-next'),
  responsive: [
    {
      breakpoint: 960,
      settings: {
        rows: 2,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 500,
      settings: {
        rows: 1,
      }
    }
  ]
});

$('.slider-similar-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  lazyLoad: 'ondemand',
  prevArrow: $('.slider-similar-blog-prev'),
  nextArrow: $('.slider-similar-blog-next'),
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

  $('.slider-logos').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    slidesToShow: 6,
   
    lazyLoad: 'ondemand',
    prevArrow: `<button class="slider-prev flex items-center justify-center shadow-xl w-11 h-11 rounded cursor-pointer text-primary_gray hover:text-white hover:bg-primary transition absolute top-1/2 -translate-y-1/2 left-0 2xl:-left-[63px] z-20 bg-white">
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5785 12.1072L16.5285 7.15719L15.1145 5.74319L8.75049 12.1072L15.1145 18.4712L16.5285 17.0572L11.5785 12.1072Z" fill="currentColor"></path>
    </svg>
  </button>`,
    nextArrow: `<button class="slider-next flex items-center justify-center shadow-xl w-11 h-11 rounded cursor-pointer text-primary_gray hover:text-white hover:bg-primary transition absolute top-1/2 -translate-y-1/2 right-0 2xl:-right-[63px] z-20 bg-white">
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.4215 12.1072L8.47152 7.15719L9.88551 5.74319L16.2495 12.1072L9.88551 18.4712L8.47151 17.0572L13.4215 12.1072Z" fill="currentColor"></path>
    </svg>
  </button>`,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        variableWidth: true,
        arrows: false
      }
    },
  ]
  });

    $('.reviews-slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToScroll: 1,
      slidesToShow: 3,
     
      lazyLoad: 'ondemand',
      prevArrow: `<button class="slider-prev flex items-center justify-center shadow-xl w-11 h-11 rounded cursor-pointer text-primary_gray hover:text-white hover:bg-primary transition absolute top-1/2 -translate-y-1/2 left-0 2xl:-left-[63px] z-20 bg-white">
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5785 12.1072L16.5285 7.15719L15.1145 5.74319L8.75049 12.1072L15.1145 18.4712L16.5285 17.0572L11.5785 12.1072Z" fill="currentColor"></path>
      </svg>
    </button>`,
      nextArrow: `<button class="slider-next flex items-center justify-center shadow-xl w-11 h-11 rounded cursor-pointer text-primary_gray hover:text-white hover:bg-primary transition absolute top-1/2 -translate-y-1/2 right-0 2xl:-right-[63px] z-20 bg-white">
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.4215 12.1072L8.47152 7.15719L9.88551 5.74319L16.2495 12.1072L9.88551 18.4712L8.47151 17.0572L13.4215 12.1072Z" fill="currentColor"></path>
      </svg>
    </button>`,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          variableWidth: true,
          arrows: false
        }
      },
    ]
    });

  $('.price-tab li').click(function(){
    $('.price-tab li').removeClass('active');
    $(this).addClass('active');

    $('.price-summ').addClass('hidden').removeClass('flex');
    $(`.price-summ.${$(this).data('tab')}`).removeClass('hidden').addClass('flex');
  })


  if($('div').hasClass('map-filter')) {
    var map = L.map('map-filter', {
      scrollWheelZoom: false,
      dragging: false,
    }).setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    var drawing = false;
    var points = [];
    var polyline;
    var isPencilActive = false;
    var markers = [];
    var initialMarkers = [];

    // Custom clustering with orange color
    var markerCluster = L.markerClusterGroup({
      iconCreateFunction: function(cluster) {
        var childCount = cluster.getChildCount();
        var c = ' marker-cluster-small';

        if (childCount > 10) {
          c = ' marker-cluster-large';
        } else if (childCount > 5) {
          c = ' marker-cluster-medium';
        }

        return new L.DivIcon({
          html: '<div><span>' + childCount + '</span></div>',
          className: 'marker-cluster' + c,
          iconSize: new L.Point(40, 40),
          iconAnchor: [20, 20],
        });
      }
    }).addTo(map);

    var pencilOptions = {
      color: '#f357a1',
      weight: 4,
      opacity: 0.7
    };

    // Function to smooth the line if needed (currently just returns the points)
    function smoothLine(points) {
      return points;
    }

    // Function to start drawing a polygon
    function startDrawing(e) {
      if (!isPencilActive) return;

      drawing = true;
      points = [e.latlng];
      polyline = L.polyline(points, pencilOptions).addTo(map);

      // Disable map interactions
      map.dragging.disable();
      map.doubleClickZoom.disable();
      map.scrollWheelZoom.disable();
      map.touchZoom.disable();
      map.boxZoom.disable();
      map.keyboard.disable();
      if (map.tap) {
        map.tap.disable();
        map.tapHold.disable();
      }

      map.getContainer().classList.add('drawing-cursor');
    }

    // Function to update polygon points while drawing
    function drawMove(e) {
      if (drawing) {
        points.push(e.latlng);
        polyline.setLatLngs(smoothLine(points));
      }
    }

    // Function to finish drawing the polygon
    function finishDrawing(e) {
      if (drawing) {
        drawing = false;

        points.push(points[0]); // Close the polygon
        var finalPolyline = L.polygon(smoothLine(points), pencilOptions).addTo(map);
        drawnItems.addLayer(finalPolyline);

        console.log('Polygon coordinates:', points.map(p => [p.lat, p.lng]));
        var insidePoints = clearMarkersOutsidePolygon(points);
        console.log('Points inside polygon:', insidePoints);

        polyline.remove();

        // Enable map interactions again
        map.dragging.enable();
        map.doubleClickZoom.enable();
        map.touchZoom.enable();
        map.boxZoom.enable();
        map.keyboard.enable();
        map.tap && map.tap.enable();

        map.getContainer().classList.remove('drawing-cursor');
        isPencilActive = false;
        console.log("Pencil tool deactivated.");
      }
    }

    // Event listeners for drawing polygons (Desktop)
    map.on('mousedown', startDrawing);
    map.on('mousemove', drawMove);
    map.on('mouseup', finishDrawing);

    // Activate the pencil tool on button click
    $('#custom-pencil-button').on('click', function () {
      isPencilActive = true;
      $('body').addClass('overflow-hidden');
      $('#map-filter-container').addClass('fullscreen-map');
      $(this).addClass('!hidden');
      $('#clear-button').removeClass('!hidden');
      console.log("Pencil tool activated. Start drawing.");
    });

    // Function to clear polygons and restore markers
    function clearPolygons() {
      drawnItems.clearLayers();
      markerCluster.clearLayers();
      markers = [];
      restoreMarkers(); // Restore the initial markers
      $('body').removeClass('overflow-hidden');
      $('#map-filter-container').removeClass('fullscreen-map');

      $('#clear-button').addClass('!hidden');
      $('#custom-pencil-button').removeClass('!hidden');
      console.log("Polygon cleared and markers restored.");
    }

    // Clear the polygon and restore initial markers on button click
    $('#clear-button').on('click', clearPolygons);

    // Function to clear markers outside the polygon
    function clearMarkersOutsidePolygon(polygonPoints) {
      var polygon = L.polygon(polygonPoints);
      var insidePoints = [];

      markers.forEach(marker => {
        if (!polygon.getBounds().contains(marker.getLatLng())) {
          map.removeLayer(marker); // Remove markers outside the polygon
        } else {
          insidePoints.push(marker.getLatLng()); // Keep markers inside the polygon
        }
      });

      markers = markers.filter(marker => polygon.getBounds().contains(marker.getLatLng()));
      return insidePoints;
    }

    // Create custom markers with project information
    function createCustomMarker(lat, lng, projectInfo) {
      var customIcon = L.divIcon({
        html: '<div class="h-5 w-5 bg-orange-500 rounded-full border border-white"></div>',
        className: '',
        iconSize: [20, 20]
      });

      var marker = L.marker([lat, lng], { icon: customIcon });

      // Project info popup content
      var popupContent = `
        <div class="popup-content">
          <img src="${projectInfo.image}" alt="Project Image" />
          <div>
            <h3 class="text-base block text-black font-bold">${projectInfo.title}</h3>
            <span class="text-xs block text-black">${projectInfo.area}</span>
            <span class="text-xs block text-black">${projectInfo.code}</span>
          </div>
          <a href="'${projectInfo.link}'"></a>
        </div>
      `;

      marker.bindPopup(popupContent);

      // Add event listener to open popup on click for mobile
      marker.on('click', function () {
        marker.openPopup();
      });

      markerCluster.addLayer(marker);
      return marker;
    }

    // Add random markers to the map
    function addRandomMarkers() {
      for (let i = 0; i < 10; i++) {
        var lat = 51.505 + (Math.random() - 0.5) * 0.1;
        var lng = -0.09 + (Math.random() - 0.5) * 0.1;

        var projectInfo = {
          title: 'Project ' + (i + 1),
          area: 'Urbano, 41 769 m²',
          code: 'CM-4174',
          image: 'images/test10.webp', // Placeholder image URL
          link: 'https://example.com/project/' 
        };

        var marker = createCustomMarker(lat, lng, projectInfo);
        markers.push(marker);
        initialMarkers.push([lat, lng]);
      }
    }

    // Restore markers to their initial state
    function restoreMarkers() {
      markers = []; // Clear the markers array before restoring
      
      initialMarkers.forEach((coords, index) => {
        var projectInfo = {
          title: 'Project ' + (index + 1),
          area: 'Urbano, 41 769 m²',
          code: 'CM-4174',
          image: 'images/test10.webp',
          link: 'https://example.com/project/'
        };

        var marker = createCustomMarker(coords[0], coords[1], projectInfo);
        markers.push(marker);
      });
    }

    // Initialize random markers on page load
    addRandomMarkers();
    // Функція для початку малювання полігону на мобільному
    function startDrawingMobile(e) {
      if (!isPencilActive) return;

      drawing = true;
      
      // Отримуємо координати першого дотику
      const latLng = map.layerPointToLatLng(L.point(e.touches[0].clientX, e.touches[0].clientY));
      points = [latLng];
      
      polyline = L.polyline(points, pencilOptions).addTo(map);

      // Вимкнути взаємодію з картою
      disableMapInteractions();
    }

    // Функція для продовження малювання полігону на мобільному
    function drawMoveMobile(e) {
      if (drawing) {
        const latLng = map.layerPointToLatLng(L.point(e.touches[0].clientX, e.touches[0].clientY));
        points.push(latLng);
        polyline.setLatLngs(smoothLine(points));
      }
    }

    // Функція для завершення малювання полігону
    function finishDrawingMobile(e) {
      if (drawing) {
        drawing = false;

        // Завершити малювання полігону і замкнути його
        points.push(points[0]);
        var finalPolyline = L.polygon(smoothLine(points), pencilOptions).addTo(map);
        drawnItems.addLayer(finalPolyline);

        console.log('Polygon coordinates:', points.map(p => [p.lat, p.lng]));
        var insidePoints = clearMarkersOutsidePolygon(points);
        console.log('Points inside polygon:', insidePoints);

        polyline.remove();

        // Відновити взаємодію з картою
        enableMapInteractions();
        isPencilActive = false;
        console.log("Pencil tool deactivated.");
        $('#map-filter-container').removeClass('fullscreen-map');
        $('body').removeClass('overflow-hidden');
        //тут треба запускать якийсь хуякс
      }
    }

    // Вимкнути всі взаємодії з картою під час малювання
    function disableMapInteractions() {
      map.dragging.disable();
      map.doubleClickZoom.disable();
      map.scrollWheelZoom.disable();
      map.touchZoom.disable();
      map.boxZoom.disable();
      map.keyboard.disable();
      if (map.tap) {
        map.tap.disable();
        map.tapHold.disable();
      }
      map.getContainer().classList.add('drawing-cursor');
    }

    // Увімкнути всі взаємодії з картою після малювання
    function enableMapInteractions() {
      map.dragging.enable();
      map.doubleClickZoom.enable();
      map.touchZoom.enable();
      map.boxZoom.enable();
      map.keyboard.enable();
      if (map.tap) {
        map.tap.enable();
      }
      map.getContainer().classList.remove('drawing-cursor');
    }

    // Прив'язка подій до контейнера з класом map-filter
    $('.map-filter').on('touchstart', function(e) {
      // e.preventDefault(); // Заборонити стандартну поведінку дотику
      startDrawingMobile(e.originalEvent);
    });

    $('.map-filter').on('touchmove', function(e) {
      // e.preventDefault(); // Заборонити стандартну поведінку дотику
      drawMoveMobile(e.originalEvent);
    });

    $('.map-filter').on('touchend', function(e) {
      // e.preventDefault(); // Заборонити стандартну поведінку дотику
      finishDrawingMobile(e.originalEvent);

    });
  }

}) 

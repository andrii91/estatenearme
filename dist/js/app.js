!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.lozad=e()}(this,function(){"use strict";var g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},n="undefined"!=typeof document&&document.documentMode,l={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=document.createElement("img");n&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),t.appendChild(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var r=t.children,o=void 0,a=0;a<=r.length-1;a++)(o=r[a].getAttribute("data-src"))&&(r[a].src=o);t.load()}t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset")),t.getAttribute("data-background-image")&&(t.style.backgroundImage="url('"+t.getAttribute("data-background-image")+"')"),t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};
// Detect IE browser
function f(t){t.setAttribute("data-loaded",!0)}var b=function(t){return"true"===t.getAttribute("data-loaded")};return function(){var r,o,a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=g({},l,t),n=e.root,i=e.rootMargin,d=e.threshold,c=e.load,u=e.loaded,s=void 0;return window.IntersectionObserver&&(s=new IntersectionObserver((r=c,o=u,function(t,e){t.forEach(function(t){(0<t.intersectionRatio||t.isIntersecting)&&(e.unobserve(t.target),b(t.target)||(r(t.target),f(t.target),o(t.target)))})}),{root:n,rootMargin:i,threshold:d})),{observe:function(){for(var t=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)}(a,n),e=0;e<t.length;e++)b(t[e])||(s?s.observe(t[e]):(c(t[e]),f(t[e]),u(t[e])))},triggerLoad:function(t){b(t)||(c(t),f(t),u(t))},observer:s}}});

var observer = lozad();
observer.observe();


!function(a){a.fn.viewportChecker=function(b){var c={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window};a.extend(c,b);var d=this,e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()};return this.checkElements=function(){var b,f;c.scrollHorizontal?(b=Math.max(a("html").scrollLeft(),a("body").scrollLeft(),a(window).scrollLeft()),f=b+e.width):(b=Math.max(a("html").scrollTop(),a("body").scrollTop(),a(window).scrollTop()),f=b+e.height),d.each(function(){var d=a(this),g={},h={};if(d.data("vp-add-class")&&(h.classToAdd=d.data("vp-add-class")),d.data("vp-remove-class")&&(h.classToRemove=d.data("vp-remove-class")),d.data("vp-add-class-full-view")&&(h.classToAddForFullView=d.data("vp-add-class-full-view")),d.data("vp-keep-add-class")&&(h.removeClassAfterAnimation=d.data("vp-remove-after-animation")),d.data("vp-offset")&&(h.offset=d.data("vp-offset")),d.data("vp-repeat")&&(h.repeat=d.data("vp-repeat")),d.data("vp-scrollHorizontal")&&(h.scrollHorizontal=d.data("vp-scrollHorizontal")),d.data("vp-invertBottomOffset")&&(h.scrollHorizontal=d.data("vp-invertBottomOffset")),a.extend(g,c),a.extend(g,h),!d.data("vp-animated")||g.repeat){String(g.offset).indexOf("%")>0&&(g.offset=parseInt(g.offset)/100*e.height);var i=g.scrollHorizontal?d.offset().left:d.offset().top,j=g.scrollHorizontal?i+d.width():i+d.height(),k=Math.round(i)+g.offset,l=g.scrollHorizontal?k+d.width():k+d.height();g.invertBottomOffset&&(l-=2*g.offset),k<f&&l>b?(d.removeClass(g.classToRemove),d.addClass(g.classToAdd),g.callbackFunction(d,"add"),j<=f&&i>=b?d.addClass(g.classToAddForFullView):d.removeClass(g.classToAddForFullView),d.data("vp-animated",!0),g.removeClassAfterAnimation&&d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass(g.classToAdd)})):d.hasClass(g.classToAdd)&&g.repeat&&(d.removeClass(g.classToAdd+" "+g.classToAddForFullView),g.callbackFunction(d,"remove"),d.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&a(document).bind("touchmove MSPointerMove pointermove",this.checkElements),a(c.scrollBox).bind("load scroll",this.checkElements),a(window).resize(function(b){e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},d.checkElements()}),this.checkElements(),this}}(jQuery);


$( document ).ready(function() {

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
    
  })

  $(document).mouseup( function(e){ 
    var div = $( ".dropdown" ); 
    if ( !div.is(e.target) 
        && div.has(e.target).length === 0 ) {
          div.removeClass('open')
          div.find('.dropdown-items').slideUp(200);
    }
  });

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

}) 

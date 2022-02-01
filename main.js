(function($){
    'use strict'
    // Our code
    // Submenu on hover
    $('ul.submenu').hide();
    $('ul.menu > li').hover(function () {
    if ($(this).find('ul.submenu').length > 0) {
        $(this).find('ul.submenu').stop().slideDown('slow');
    }
    },function () {
        if ($(this).find('ul.submenu').length > 0) {
            $(this).find('ul.submenu').stop().slideUp('slow');
        }
    });
    // Sidebar
    $('.menu-icon i').on('click',function(){
        $('.sidebar').animate({'right':0});
    });
    // Sidebar-close
    $('.sidebar-close i').on('click',function(){
        $('.sidebar').animate({'right':-270});
    });
    // Submenu after icon
    $('.sidebar ul ul').parent('li').children('a').append('   <i class="fas fa-angle-down"></i>');
    // Sidebar submenu up down
    $('.sidebar ul ul').hide();
    $('.sidebar ul li').on('click',function(){
        $('.sidebar ul li').children('ul').slideUp();
        $(this).children('ul').slideDown();
    });
    // down icon besides submenu
    $('.menu ul').parent('li').children('a').append('  <i class="fas fa-angle-down"></i>');
    // Sticky Header
    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });
    //   owl carousel slider
    $('.breakfast-slide').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    // Customer Slide
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        autoplay:true,
        animateIn:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    // Event slide 
    $('.event-slide').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    
    // Wow js
    var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animate__animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow.init();
}) (jQuery);

(function($) {

  "use strict";

  // slide image animations whike scrolling
  var init_scroll_animations = function() {
    const scrollElements = document.querySelectorAll(".js-scroll");

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;

      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const elementOutofView = (el) => {
      const elementTop = el.getBoundingClientRect().top;

      return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add("scrolled");
    };

    const hideScrollElement = (element) => {
      element.classList.remove("scrolled");
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        } else if (elementOutofView(el)) {
          hideScrollElement(el)
        }
      })
    }

    window.addEventListener("scroll", () => { 
      handleScrollAnimation();
    });
  }

  $('.navbar').on('click', '.search-toggle', function(e) {
    var selector = $(this).data('selector');

    $(selector).toggleClass('show').find('.search-input').focus();
    // $(selector).find('.autocomplete').focus();
    $(this).toggleClass('active');

    e.preventDefault();
  });

  // close when click off of container
  $(document).on('click touchstart', function (e){
    if (!$(e.target).is('.search-toggle, .search-toggle *, .navbar, .navbar *')) {
      $('.search-toggle').removeClass('active');
      $('.navbar').removeClass('show');
    }
  });
    

   $(document).ready(function(){

      init_scroll_animations();

      Chocolat(document.querySelectorAll('.image-link'), {
                imageSize: 'contain',
                loop: true,
            })

      $('.testimonial-slider').slick({
          dots: false,
          arrows: true,
          infinite: true,
          speed: 500,
          fade: false,
          cssEase: 'linear',
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: true,
              arrows: false,
            }
          }
        ]
      }); 

      /*var scroll = new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true
      });*/

    }); 

   $('#header').each(function(){
      var navOffset = $('#header').offset().top;

      jQuery(window).scroll(function () {
          
        if($(window).scrollTop() > navOffset + 300){
          $('#header').addClass('fixed');
        } else {
          $('#header').removeClass('fixed');
        } 

        if($(window).scrollTop() > navOffset + 600 ){
            $('#header').addClass('sticky');
          } else {
            $('#header').removeClass('sticky');
        }

      });

    });
  

})(jQuery);

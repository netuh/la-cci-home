(function ($) {
  'use strict';

  // navbarDropdown
  if ($(window).width() < 992) {
    $('.main-nav [data-toggle="dropdown"]').on('click', function () {
      $(this).siblings('.dropdown-menu').animate({
        height: 'toggle'
      }, 300);
    });
  }

  // -----------------------------
  // To Top Init
  // -----------------------------
  $('.to-top').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  $(document).ready(function () {

    // -----------------------------
    //  Screenshot Slider
    // -----------------------------
    $('.speaker-slider').slick({
      slidesToShow: 3,
      centerMode: true,
      infinite: true,
      autoplay: true,
      arrows: true,
      responsive: [{
        breakpoint: 1440,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1
        }
      }
      ]
    });
    // -----------------------------
    //  Count Down JS
    // -----------------------------
    $('.timer').syotimer({
      year: 2021,
      month: 12,
      day: 9,
      hour: 20,
      minute: 30
    });

    // -----------------------------
    // Magnific Popup
    // -----------------------------
    $('.image-popup').magnificPopup({
      type: 'image',
      removalDelay: 160, //delay removal by X to allow out-animation
      callbacks: {
        beforeOpen: function () {
          // just a hack that adds mfp-anim class to markup
          this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
          this.st.mainClass = this.st.el.attr('data-effect');
        }
      },
      closeOnContentClick: true,
      midClick: true,
      fixedContentPos: false,
      fixedBgPos: true

    });

    // gallery-wrapper init
    if (($('.gallery-wrapper').length) !== 0) {
      var Shuffle = window.Shuffle;
      var jQuery = window.jQuery;

      var myShuffle = new Shuffle(document.querySelector('.gallery-wrapper'), {
        itemSelector: '.gallery-item',
        buffer: 1
      });

      jQuery('input[name="gallery-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
          myShuffle.filter(input.value);
        }
      });
    }
  });

})(jQuery);

// OWL Carosel demo

$(".banner-carrosel .owl-slider").owlCarousel({
 
  navigation : true, // Show next and prev button
  items : 1,
  animateIn: "animate__animated animate__backInLeft",
  loop:true,
  autoplay:true,
  autoplayTimeout : 4000,
  autoplaySpeed : 3000,
  autoplayHoverPause : true,
  itemsDesktop : false,
  itemsDesktopSmall : false,
  itemsTablet: false,
  itemsMobile : false

});

// Cookies configuration
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#eaf7f7",
      "text": "#5c7291"
    },
    "button": {
      "background": "#56cbdb",
      "text": "#ffffff"
    }
  },
  "theme": "edgeless",
  "position": "bottom-right"
});
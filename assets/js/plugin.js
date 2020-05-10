// OWL Slider For Offer
$('.offer-slider').owlCarousel({
    loop: false,
    margin: 10,
    responsiveClass: true,
    rtl:true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: true
        },
        1000: {
            items: 3,
            nav: true
        }
    }
});

// OWL Carousel For Testimonial
$('.testimonial-slider').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    rtl: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: true
        },
        1000: {
            items: 4,
            nav: true
        }
    }
})

// Plugin For Navbar
window.slider = $('#slider').cardSlider({
      slideTag: 'div'
      , slideClass: 'slide'
      , current: 1
      , followingClass: 'slider-content-6'
      , delay: 300
      , transition: 'ease'
      , onBeforeMove: function(slider, onMove) {
        console.log('onBeforeMove')
        onMove()
      }
      , onMove: function(slider, onAfterMove) {
        onAfterMove()
      }
      , onAfterMove: function() {
        console.log('onAfterMove')
      }
      , onAfterTransition: function() {
        console.log('onAfterTransition')
      }
      , onCurrent: function() {
        console.log('onCurrent')
      }
    })
$('.sertificate-slider').slick({
  infinite        : true,
  slidesToShow    : 4,
  slidesToScroll  : 1,
  responsive: [{

          breakpoint: 767,
          settings: {
              slidesToShow: 1,
          }

      }]
});

$('.sertificate-slider').slickLightbox({
  itemSelector        : 'a',
  navigateByKeyboard  : true
});
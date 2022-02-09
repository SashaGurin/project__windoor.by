$(".banner-slider").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [{

        breakpoint: 767,
        settings: {
            dots: false
        }

    }]

});

$(".gallery-slider").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});

$(".co-workers-slider").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,

});


$(".window-prices-content").slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{

        breakpoint: 1023,
        settings: {
            slidesToShow: 1,
            autoplay: true
        }

    }]

});
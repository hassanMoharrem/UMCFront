$(document).ready(function () {
    $('.owl-carousel-slider').owlCarousel({/* rtl:true, */
        items: 1,
        loop: true,
        autoplay: false,
        nav: true, /* Show navigation arrows */
        mouseDrag: false, /* Disable mouse dragging */
        touchDrag: false, /* Disable touch dragging */
        animateOut: 'fadeOut', /* Specify the outgoing animation */
        animateIn: 'fadeIn',    /* Specify the incoming animation */
        smartSpeed: 650,
        dots: false,
        navText: ['<i class="fas fa-angle-left arrow-30 rounded-circle p-arrow font-13 d-flex border border-primary align-items-center justify-content-center me-2 text-white  px-2"></i>', '<i class="fas fa-angle-right arrow-30 rounded-circle p-arrow font-13 d-flex align-items-center bg-warning-main justify-content-center me-1 text-white px-2"></i>'],
    });
    $('.owl-carousel-testimonial').owlCarousel({/* rtl:true, */
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        responsive: {0: {items: 1}, 600: {items: 2}, 1000: {items: 2}}
    });
});
$(document).ready(function () {
    $('.owl-carousel-gallery').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        navText: ['<i class="fas fa-angle-left arrow-30 rounded-3 p-arrow font-13 d-flex align-items-center justify-content-center me-1 text-main border border-muted-arrow px-2"></i>','<i class="fas fa-angle-right arrow-30 rounded-3 p-arrow font-13 d-flex align-items-center justify-content-center me-2 text-white bg-main px-2"></i>'],
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});
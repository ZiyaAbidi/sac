// startup-slider-slider
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $("header").addClass('sticky');

        } else {
            $("header").removeClass('sticky');

        }
    });


    $("#main_carousel").owlCarousel({
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        margin: 0,
        nav: true,
        dots: false,
        smartSpeed: 1000,
        items: 1
    });

    $("#row_custom").owlCarousel({
        loop: true,
        rewind: true,
        autoplay: false,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        margin: 10,
        center: true,
        nav: true,
        dots: false,
        smartSpeed: 600,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 3
            }
        }
    });

    $(".team-carousel").owlCarousel({
        loop: true,
        rewind: true,
        autoplay: false,
        margin: 10,
        nav: false,
        dots: false,
        smartSpeed: 600,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            }
        }
    });

    $("#client_carousel2").owlCarousel({
        loop: true,
        rewind: true,
        autoplay: false,
        margin: 0,
        nav: false,
        dots: false,
        smartSpeed: 600,
        items: 1
    });

    $("#testimonial-artical").owlCarousel({
        loop: false,
        rewind: true,
        autoplay: false,
        margin: 30,
        nav: false,
        dots: false,
        smartSpeed: 6000,
        touchDrag: false,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });

    $(".boxinline-saulen").owlCarousel({
        loop: false,
        rewind: true,
        autoplay: false,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
            1199: {
                items: 5
            }
        }
    });


    // videomodal
    $(document).find("#videomodal").on('shown.bs.modal', function () {
        jwplayer("videovoir").play(true);
    });
    $(document).find("#videomodal").on("hidden.bs.modal", function () {
        jwplayer("videovoir").pause(true);
    });

    // autocounter 
    $('.counter1').counterUp({
        delay: 10,
        time: 2000
    });
    $('.counter').addClass('animated fadeInDownBig');
    $('.autoCounter h3').addClass('animated fadeIn');

    // handle links with @href started with '#' only
    $(document).on('click', 'a[href^="#"]', function (e) {
        // target element id
        var id = $(this).attr('href');

        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // top position relative to the document
        var pos = $id.offset().top;

        // animated top scrolling
        $('body, html').animate({ scrollTop: pos });
    });

    // pdf
    if ($('#cmd').length) {
        var doc = new jsPDF();
        var specialElementHandlers = {
            '#editor': function (element, renderer) {
                return true;
            }
        };


        $('#cmd').click(function () {
            doc.fromHTML($('#content').html(), 15, 15, {
                'width': 170,
                'elementHandlers': specialElementHandlers
            });
            doc.save('Open-Positions.pdf');
        });
    }

    if ($(".circle_txt").length) {
        new CircleType(document.getElementById('demo1')).radius(320);
        new CircleType(document.getElementById('demo2')).dir(-1).radius(320);
    }
});




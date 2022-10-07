// startup-slider-slider
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $("header").addClass('sticky');

        } else {
            $("header").removeClass('sticky');

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




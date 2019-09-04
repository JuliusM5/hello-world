$(document).ready(function () {

    // Slick slider
    $('.your-class').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,

    });
});

$(document).ready(function () {

    $(".find").on('click', function (event) {
        event.preventdefault();
        var scrollTarget = $(this).attr("href");
        $('html, body').animate({
            scrollTop: 700
        }, 500);
        alert("viskas");
    });
});


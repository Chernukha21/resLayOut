$(function (){
    let introH = $("#intro").innerHeight();
    let header = $("#header");
    let scrollOffset = $(window).scrollTop();
    checkScroll(scrollOffset);
    $(window).on("scroll", function(){
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });
    function checkScroll(scrollOffset) {
        if(scrollOffset >= introH){
            header.addClass("fixed");
        }else{
            header.removeClass("fixed");
        }
    }
    $("[data-scroll]").on("click", function (event){
        event.preventDefault();
        let blockId = $(this).data('scroll');
        let blockOffset = $(blockId).offset().top;
        $("#nav a").removeClass('active');
        $(this).addClass('active');
        $("html, body").animate({
           scrollTop: blockOffset
        },500);
        console.log(blockOffset);
    });

    $("#nav_toggle").on("click", function (event){
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    $("[data-collaps]").on("click", function (event){
        event.preventDefault();
        let blockId = $(this).data('collaps');
        $(this).toggleClass('active');
    });

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});

!(function ($) {
    "use strict";

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true,
            disable: () => innerWidth <= 575
        });
    }

    $(window).on("load", function () {
        aos_init();
    });

    // Preloader
    $(window).on("load", function () {
        if ($("#preloader").length) {
            $("#preloader")
                .delay(100)
                .fadeOut("slow", function () {
                    $(this).remove();
                });
        }
    });

    $(document).on('mouseleave', '.megamenu_dropdown', function(){
        $('.megamenu_dropdown').css('display', 'none');
        setTimeout(function(){
            $('.megamenu_dropdown').css('display', 'block');
        }, 10)
    })

    // setTimeout(function () {
    //     $('.drop-down ul.megamenu_dropdown').css('display', 'block');
    // }, 1000)

    // Progress On Scroll
    function progressBarScroll() {
        let winScroll =
            document.body.scrollTop || document.documentElement.scrollTop,
            height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight,
            scrolled = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
    }

    window.onscroll = function () {
        progressBarScroll();
    };

    //Scroll back to top
    var progressPath = document.querySelector("#back_to_top_progress path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
        "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 300;
    var duration = 550;
    jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery("#back_to_top_progress").addClass("active-progress");
        } else {
            jQuery("#back_to_top_progress").removeClass("active-progress");
        }
    });
    jQuery("#back_to_top_progress").on("click", function (event) {
        event.preventDefault();
        jQuery("html, body").animate({scrollTop: 0}, duration);
        return false;
    });

    // Mobile Navigation
    if ($(".nav-menu").length) {
        var contactUrl = $("#nav-box a.get-started-btn").attr('href');
        // console.log(contactUrl);
        var $mobile_nav = $(".nav-menu").clone().prop({
            class: "mobile-nav d-lg-none",
        });
        $mobile_nav.append(
            '<a href="' + contactUrl + '" class="get-started-btn-mobile scrollto">Contact Us</a>'
        );
        $("#mobileMenu").append($mobile_nav);
        $("#nav-box").append(
            '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
        );
        $("#mobileMenu").append('<div class="mobile-nav-overly"></div>');

        $('#mobileMenu .nav-item.drop-down').append('<button class="mobile-dropdown-toggler-button"><i class="fas fa-angle-right"></i></button>');

        $('#mobileMenu .mobile-nav .drop-down.active > .mobile-dropdown-toggler-button').prev().slideDown(300);

        $(document).on("click", ".mobile-nav-toggle", function (e) {
            $("body").toggleClass("mobile-nav-active");
            $(".mobile-nav-toggle i").toggleClass(
                "icofont-navigation-menu icofont-close"
            );
            $(".mobile-nav-overly").toggle();
        });

        $(document).on("click", ".mobile-nav .drop-down > .mobile-dropdown-toggler-button", function (e) {
            e.preventDefault();
            $(this).prev().slideToggle(300);
            $(this).parent().toggleClass("active");
        });

        $(document).click(function (e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if (
                !container.is(e.target) &&
                container.has(e.target).length === 0
            ) {
                if ($("body").hasClass("mobile-nav-active")) {
                    $("body").removeClass("mobile-nav-active");
                    $(".mobile-nav-toggle i").toggleClass(
                        "icofont-navigation-menu icofont-close"
                    );
                    $(".mobile-nav-overly").fadeOut();
                }
            }
        });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
    }

    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#header").addClass("header-scrolled");
        } else {
            $("#header").removeClass("header-scrolled");
        }
    });

    if ($(window).scrollTop() > 100) {
        $("#header").addClass("header-scrolled");
    }

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });

    $(".back-to-top").click(function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            1500,
            "easeInOutExpo"
        );
        return false;
    });

    // Carousel
    $(".experience .owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 4000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            525: {
                items: 2,
            },
        },
    });

    $(".icon-carousel .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            },
            1339: {
                items: 6,
            },
        },
    });

    $("#testimonial_slider").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        // autoHeight:true,
        autoplayHoverPause: true,
        autoplayTimeout: 4000,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>',
        ],
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
        },
    });

    //RESPONSIVE TABLE
    $(document).ready(function () {
        $(".responsive_flex_table .table-responsive-stack").each(function (i) {
            var id = $(this).attr("id");
            //alert(id);
            $(this)
                .find("th")
                .each(function (i) {
                    $("#" + id + " td:nth-child(" + (i + 1) + ")").prepend(
                        '<span class="table-responsive-stack-thead">' +
                        $(this).text() +
                        ":</span> "
                    );
                    $(".table-responsive-stack-thead").hide();
                });
        });

        $(".table-responsive-stack").each(function () {
            var thCount = $(this).find("th").length;
            var rowGrow = 100 / thCount - 5 + "%";
            //console.log(rowGrow);
            $(this).find("th, td").css("flex-basis", rowGrow);
        });

        function flexTable() {
            if ($(window).width() < 769) {
                $(".table-responsive-stack").each(function (i) {
                    $(this).find(".table-responsive-stack-thead").show();
                    $(this).find("thead").hide();
                });

                // window is less than 768px
            } else {
                $(".table-responsive-stack").each(function (i) {
                    $(this).find(".table-responsive-stack-thead").hide();
                    $(this).find("thead").show();
                });
            }
            // flextable
        }

        flexTable();

        window.onresize = function (event) {
            flexTable();
        };
    });

    //multi slide slider
    $(".multi_slide_portfolio .owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        touchDrag: false,
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
        },
    });

    $(document).on(
        "click",
        ".multi_slide_portfolio .navbtns .prevbtn",
        function () {
            $(".multi_slide_portfolio .owl-prev").click();
        }
    );
    $(document).on(
        "click",
        ".multi_slide_portfolio .navbtns .nextbtn",
        function () {
            $(".multi_slide_portfolio .owl-next").click();
        }
    );
    $(".two_slide_portfolio .owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        touchDrag: false,
        mouseDrag: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
        },
    });

    $(document).on(
        "click",
        ".two_slide_portfolio .navbtns .prevbtn",
        function () {
            $(".two_slide_portfolio .owl-prev").click();
        }
    );
    $(document).on(
        "click",
        ".two_slide_portfolio .navbtns .nextbtn",
        function () {
            $(".two_slide_portfolio .owl-next").click();
        }
    );
    $("#users_slider").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>',
        ],
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
        },
    });

    $(document).ready(function () {
        $(document).on('mouseover', ".portfolio .portfolio-wrap.video video", function () {
            $(this).trigger('play');
        })

        $(document).on('mouseleave', ".portfolio .portfolio-wrap.video video", function () {
            $(this).trigger('pause');
        })
    })


    //Technology Selector
    $(document).on('click', '.technologies .technologies-btns button', function () {
        $('.technologies .technologies-btns button').removeClass('active');
        $(this).addClass('active');
        var selectedTechno = $(this).attr('data-technotype');
        $('.technologies .technobox').removeClass('active');
        $(`.technologies .technobox[data-technobox=${selectedTechno}]`).addClass('active');
    })

})(jQuery);

/*** newsletter form Start */
$(function () {

    function isEmail(email) {
        const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    function checkEmail(email) {
        let valid = isEmail(email)
        if (valid) {
            $('.footer_validation').css('display', 'none');
            $('#newsletter-form .input-box').removeClass('has_error')
            return true;
        } else {
            $('#newsletter-form .input-box').addClass('has_error');
            $('.footer_validation').css('display', 'block');
        }
        return false;
    }

    $(document).on('keyup', '#newsletter-email', function () {
        checkEmail($(this).val());
    })

    $('#newsletter-form').on('submit', function (e) {
        e.preventDefault()
        let url = $(this).attr('action');
        let data = $(this).serializeArray();
        if (checkEmail(data[1].value)) {
            $.ajax({
                url: url,
                method: "POST",
                data: data,
                success: function (res) {
                    $("#newsletter-email").val("");
                    $.toaster({
                        message: res.message,
                        title: "",
                        priority: res.success ? "success" : "danger",
                    });
                },
                error: function () {
                    $.toaster({
                        message: "Something went wrong",
                        title: "",
                        priority: "danger",
                    });
                },
            });
        }
    });
});
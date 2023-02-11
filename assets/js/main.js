
// preloader_area
var preloader = document.getElementById("preloader");
function preloder_function() {
    preloader.style.display = "none";
}

// add bg to nav
window.addEventListener("scroll", function () {
    let scrollpos = window.scrollY;
    const header = document.querySelector("nav");
    const headerHeight = header.offsetHeight;

    if (scrollpos >= headerHeight) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
    // console.log(scrollpos);
});

// mobile_menu
jQuery('#mobile_menu').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: '.mobile_menu',
    meanMenuOpen: "<i class='fal fa-bars'></i>",
    meanMenuClose: "<i class='far fa-times-circle'></i>"
});


$(document).ready(function () {


    // hero_area
    $(".skitter-large").skitter({
        dots: false,
        interval: 3000,
        stop_over: false,
        auto_play: true
     });

    // trendy_products_area
    $('.carousel_area2').owlCarousel({
        loop: true,
        autoplay: false,
        margin: 30,
        nav: false,
        dots: false,
        // rtl:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });


    // best_saller_area
    $('.carousel_area3').owlCarousel({
        loop: true,
        autoplay: false,
        margin: 30,
        nav: false,
        dots: true,
        // rtl:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // deal_outlet_area
    $('.carousel_area5').owlCarousel({
        loop: true,
        autoplay: false,
        margin: 30,
        nav: false,
        dots: true,
        // rtl:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    // deal_section_area
    $('.carousel_area4').owlCarousel({
        loop: true,
        autoplay: false,
        margin: 30,
        nav: false,
        dots: true,
        // rtl:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    // testimonial_area
    $('.testimonial_carousel').owlCarousel({
        loop: true,
        autoplay: false,
        margin: 20,
        nav: true,
        dots: false,
        // rtl:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            },
            1150: {
                items: 3
            }
        }
    });

    // achivement_area_start 
    $('.about_counter').counterUp({
        delay: 10,
        time: 1000
    });

    // referrel_area 
    $('.refarrel_counter').counterUp({
        delay: 10,
        time: 1000
    });

    // scroll_up
    $(".scroll_up").fadeOut();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".scroll_up").fadeIn();
        } else {
            $(".scroll_up").fadeOut();
        }
    });

    // product_area_start range_area
    $(".js_range_slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 100,
        from: 800,
        to: 500,
        grid: true
    });


    


});

// coundown_area coundown
$('#countdown1').countdown('2023/02/30', function (event) {
    // $(this).html(event.strftime('days'));
    $(this).html(event.strftime('<div class="single-coundown"><h5>%D</h5><span>Days</span> </div> <div class="single-coundown"><h5>%H</h5><span>Hours</span> </div> <div class="single-coundown"><h5>%M</h5><span>Minutes</span> </div> <div class="single-coundown"><h5>%S</h5><span>Second</span> </div>'));
});

$('#countdown2').countdown('2023/03/30', function (event) {
    // $(this).html(event.strftime('days'));
    $(this).html(event.strftime('<div class="single-coundown"><h5>%D</h5><span>Days</span> </div> <div class="single-coundown"><h5>%H</h5><span>Hours</span> </div> <div class="single-coundown"><h5>%M</h5><span>Minutes</span> </div> <div class="single-coundown"><h5>%S</h5><span>Second</span> </div>'));
});

// dashboard_toggle_sidemenu
const toggleSideMenu = () => {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("content").classList.toggle("active");
};
const hideSidebar = () => {
    document.getElementById("formWrapper").classList.remove("active");
    document.getElementById("formWrapper2").classList.remove("active");
};

// tab
const tabs = document.getElementsByClassName("tab");
const contents = document.getElementsByClassName("content");
for (const element of tabs) {
const tabId = element.getAttribute("tab-id");
const content = document.getElementById(tabId);
element.addEventListener("click", () => {
    for (const t of tabs) {
        t.classList.remove("active");
    }
    for (const c of contents) {
        c.classList.remove("active");
    }
    element.classList.add("active");
    content.classList.add("active");
});
}

// input file preview
const previewImage = (id) => {
document.getElementById(id).src = URL.createObjectURL(event.target.files[0]);
};

// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));



$(function () {
    // //  product_details_area_start xzoom
    $("#exzoom").exzoom({

        // thumbnail nav options
        "navWidth": 80,
        "navHeight": 80,
        "navItemNum": 5,
        "navItemMargin": 7,
        "navBorder": 1,

        // autoplay
        "autoPlay": false,

        // autoplay interval in milliseconds
        "autoPlayTimeout": 2000

    });

});

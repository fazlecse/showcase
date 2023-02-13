
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



$(document).ready(function () {


    // trendy_products_area
    $('.carousel-area1').owlCarousel({
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
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            800: {
                items: 4
            },
            1000: {
                items: 5
            },
            1220: {
                items: 6
            },
            1450: {
                items: 7
            },
            1620: {
                items: 8
            },
        }
    });


    


   
    

    // achivement_area_start 
    // $('.about_counter').counterUp({
    //     delay: 10,
    //     time: 1000
    // });

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
    // $(".js_range_slider").ionRangeSlider({
    //     type: "double",
    //     min: 0,
    //     max: 100,
    //     from: 800,
    //     to: 500,
    //     grid: true
    // });


    // Initialise Carousel
    const cardSlider = new Carousel(document.querySelector("#cardSlider"), {
    Dots: false,
    });


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




// toggle navbar

let mainbarBtn = document.querySelector("#header-main-bar");
let saidcloseBtn = document.querySelector("#said-close-btn");
let saidBar = document.querySelector(".said-nav");


mainbarBtn.onclick = () =>{
    saidBar.style.left = "0";
    document.body.style.background = "rgba(0,0,0,0.4)";
    document.body.style.zIndex = "6"
}

saidcloseBtn.onclick = () =>{
    saidBar.style.left = "-300px";
    document.body.style.background = "#F3F5F6";
}


// toggle searchbar

let searchIcon = document.querySelector("#searchbarIcon");
let searchBar = document.querySelector(".header-search");

searchIcon.onclick = () =>{
    searchBar.classList.toggle("header-search-toggle");
}


// cart section

let cartIcon = document.querySelector("#cart-icon");
let cartcrossIcon = document.querySelector("#cart-cross");
let cart = document.querySelector(".cart-section");

cartIcon.onclick = () =>{
    cart.style.right = "0%"
}

cartcrossIcon.onclick = () =>{
    cart.style.right = "-100%"
}




























// main section 

$('.main-section .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// hot-tranding section 

$('.hot-tranding-section .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// popular section 

$('.popular-section .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// flash-section 

$('.flash-section .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        991:{
            items:4
        },
        1000:{
            items:2
        }
    }
})

// featured-main-1-section 

$('.featured-main-1 .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        991:{
            items:2
        },
        1000:{
            items:1
        }
    }
})

// featured-main-1-section 

$('.featured-main-2 .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// hotsale-section 

$('.hotsale-main .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// blog-section 

$('.blog-main .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// brand-section 

$('.brand-main .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
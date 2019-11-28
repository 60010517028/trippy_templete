//Carousel
$('#owlCarousel').owlCarousel({
    slideSpeed: 100,
    paginationSpeed: 100,
    singleItem: true,
    smartSpeed: 2000,
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navigation: false,
    animateOut :"fadeOutLeft",
    // animateIn:"zoomInRight"
});
//ปุ่ม prev Carousel 
$('.carousel-prev').on('click', function () {
    $('.owl-prev').click();
    // console.log('prev')
})
//ปุ่ม next Carousel 
$('.carousel-next').on('click', function () {
    $('.owl-next').click();
    // console.log('next')
})

$('#owlCarousel-newArrival,#owlCarousel-newArrival2,#owlCarousel-sale1,#owlCarousel-sale2,#owlCarousel-productnear').owlCarousel({
    slideSpeed: 100,
    paginationSpeed: 100,
    singleItem: true,
    smartSpeed: 1000,
    items: 1,
    // loop: true,
    margin:10,
    stagePadding: 20,
    navigation: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2
        },
        640: {
            items: 3
        },
        768:{
            items:5,
            stagePadding: 0,
        }
    }
});

$('#owlCarouselBrand').owlCarousel({
    slideSpeed: 100,
    paginationSpeed: 100,
    singleItem: true,
    smartSpeed: 1000,
    items: 1,
    loop: true,
    margin:20,
    // stagePadding: 20,
    navigation: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 3
        },
        768:{
            items:5,
            stagePadding: 0,
        }
    }
});

function actionNavbarMenu(e){
    e = e || window.event;
    e.preventDefault();
    document.querySelector('.navbar-menu-wrapper').classList.toggle('active')
    e.target.classList.toggle('fa-times')
}

function actionNavbarSubMenu(e){
    e = e || window.event;
    e.preventDefault();
    
    if(window.innerWidth < 768){
        e.target.closest('.has-submenu').children[1].classList.toggle('active')
    }
}

function actionNavbarCloseSubmenu(e){
    e = e || window.event;
    e.preventDefault();
    console.log(e.target)
    e.target.closest('.navbar-submenu').classList.remove('active')
}

function toggleNavbarAccountMobile(e){
    e = e || window.event;
    e.preventDefault();
    e.target.closest('.acc').children[1].classList.toggle('hidden')
}

$("#btntonext").click(function() {
    $('html, body').animate({
        scrollTop: $(".newarrival").offset().top -100
    }, 2000);
});
$("#btntotop").click(function() {
    $('html, body').animate({
        scrollTop: $("body").offset().top - 200
    }, 2000);
});



function animateNavbar(){
    // $('#widthDerr').text($(window).scrollTop())

    if($(window).scrollTop() > 100){
        $('.navbar').css('background','linear-gradient(0deg, #b4d9f5, #b19cf0)');
        $('.navbar').addClass('shadow-lg')
        $('.navbar > div > div > span').css('color','white')
        $('.navbar > div > div > a > i').css('color','white')
        $('.navbar > div > div > i').css('color','white')
        if(window.innerWidth >= 768){
            $('.navbar > div > div > a > span').css('color','white')
            $('.navbar > div > div > div > a ').css('color','white')
            $('.navbar > div > div > div > a > i').css('color','white')
            $('.navbar > div > div > a > i').css('color','white')
            $('.navbar > div > ul > li > a').css('color','white')
        }
        
    }else{
        $('.navbar').css('background','white');
        $('.navbar > div > div > span').css('color','#636363')
        $('.navbar > div > div > a > i').css('color','#636363')
        $('.navbar > div > div > i').css('color','#636363')
        $('.navbar > div > div > a > span').css('color','#636363')
        $('.navbar > div > div > div > a').css('color','#636363')
        $('.navbar > div > div > div > a > i').css('color','#636363')
        $('.navbar > div > div > a > i').css('color','#636363')
        $('.navbar > div > ul > li > a').css('color','#636363')
        $('.navbar').removeClass('shadow-lg')
    }
}


// Hover แล้วเปลี่ยนรูป
$('.hoverChangeImage').hover(function(){
    $(this).attr('src',$(this).data('src2'))
},function(){
    $(this).attr('src',$(this).data('src1'))
})

$(window).scroll(function(){
    animateNavbar()
})


$('.blog-fasion-mobile .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
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

$('#slick1').slick({
    rows: 2,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesPerRow: 5,
    slidesToScroll: 1,

    responsive: [
        
        {
            breakpoint: 480,
            settings: { 
                rows: 1, 
                slidesPerRow: 2,
                dots: false,
            }
        },

    ]
});

$('#slicksale').slick({
    rows: 2,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesPerRow: 5,
    slidesToScroll: 1,

    responsive: [
        
        {
            breakpoint: 480,
            settings: { 
                rows: 1, 
                slidesPerRow: 2,
                dots: false,
            }
        },

    ]
});

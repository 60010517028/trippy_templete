function actionProduCategoryActive(e){
    e = e || window.event;
    e.preventDefault();
    $('.product-category').addClass('active')
}
function actionProduCategoryInActive(e){
    e = e || window.event;
    e.preventDefault();
    $('.product-category').removeClass('active')
}

$('.product-category-hassub').click(function(e){
    $(this).closest('.product-category-title').children('.product-subcate').slideToggle()
})


function showImage(e){
    e = e || window.event;
    e.preventDefault();

    $('#image-show').attr('src',e.target.src)
}


$(document).ready(function(){
    $("header > nav > .menu >  li").hover(function(){
        $(this).find("ul.sub").stop().slideDown();
    },function(){
        $("ul.sub").stop().slideUp();
    });//메뉴슬라이드 script



    $(".slide > .slide_all > li").eq(0).siblings().hide();
    var slideI=0;
    setInterval(function(){

    if(slideI<2){
        slideI++;
    }else{
        slideI=0;
    }
    $(".slide > .slide_all > li").eq(slideI).siblings().fadeOut();
    $(".slide > .slide_all > li").eq(slideI).fadeIn();
    
    },3000);
});//ready
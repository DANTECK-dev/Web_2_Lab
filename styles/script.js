window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}
const arr = Array('sdf dfs','ebadf','dsf-sf');
/*$(document).ready(function(){
    $(window).scroll(function(){
        let step = 100;
        $(".content_menu>li ").css('background', 'white');
        if ($(window).scrollTop() > 0 && $(window).scrollTop() < 765)
        {
            $(".content_menu>li:nth-child(1) ").css('background', 'lightsalmon')
        }
        else if ($(window).scrollTop() > 765 && $(window).scrollTop() < 1610)
        {
            $(".content_menu>li:nth-child(2) ").css('background', 'lightsalmon');
        }
        else if ($(window).scrollTop() > 1610 && $(window).scrollTop() < 1865)
        {
            $(".content_menu>li:nth-child(3) ").css('background', 'lightsalmon');
        }
        else if ($(window).scrollTop() > 1865 && $(window).scrollTop() < 2920)
        {
            $(".content_menu>li:nth-child(4) ").css('background', 'lightsalmon');
        }
        else if ($(window).scrollTop() > 2920 && $(window).scrollTop() < 3475)
        {
            $(".content_menu>li:nth-child(5) ").css('background', 'lightsalmon');
        }
        else if ($(window).scrollTop() > 3475 && $(window).scrollTop() < 3975)
        {
            $(".content_menu>li:nth-child(6) ").css('background', 'lightsalmon');
        }
        else
        {
            $(".content_menu>li:nth-child(7) ").css('background', 'lightsalmon');
        }
        //let param = 'rgb('+x+', '+y+', '+z+')';
        //$(".content_menu>li ").css('background', param);
    });
});*/
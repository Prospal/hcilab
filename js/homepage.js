$(document).ready(function(){

    $('.right').on('click', function(){
        var current = $('.active');
        var next = current.next();
        if (next.length) {
            current.removeClass('active');
            next.addClass('active')
        }
        else{
            current.removeClass('active');
            $('.image:first-child').addClass('active');
        }
    })

    $('.left').on('click', function(){
        var current = $('.active');
        var prev = current.prev();
        if (prev.length) {
            current.removeClass('active');
            prev.addClass('active')
        }
        else{
            current.removeClass('active');
            $('.image:last-child').addClass('active');
        }
    })
})

setInterval(function(){
    var current = $('.active');
    var next = current.next();
    if (next.length) {
        current.removeClass('active');
        next.addClass('active')
    }
    else{
        current.removeClass('active');
        $('.image:first-child').addClass('active');
    }
}, 1000)

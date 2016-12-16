var next = function (e) {
    var $currentimg = $('.item-active');
    var nextslide = $currentimg.next();
    if (nextslide.length === 0) { //cuoi 
        nextslide = $('.item').first();
    }
    $currentimg.fadeOut(600);
    $currentimg.removeClass('item-active');
    nextslide.fadeIn(600);
    nextslide.addClass('item-active');

}
var prev = function (e) {
    var $currenimg = $('.item-active');
    var prevslide = $currenimg.prev();
    if (prevslide.length === 0) {
        prevslide = $('.item').last();
    }
    $currenimg.fadeOut(600);
    $currenimg.removeClass('item-active');
    prevslide.fadeIn(600);
    prevslide.addClass('item-active');

}


$(function () {
    $('.next-arrow').on('click', function (e) {
        next();
        e.preventDefault();
    });
    $('.prev-arrow').on('click', function (e) {
        prev();
        e.preventDefault();
    });
    setInterval(next, 5500);

    $('#TRAVEL').click(function (e) {
        $('#travel').show();
        $('#restaurant').hide();
        $('#market').hide();
        e.preventDefault();

    });
    $('#RASTAURANT').click(function (e) {
        $('#travel').hide();
        $('#restaurant').show();
        $('#market').hide();
        e.preventDefault();
    });
    $('#MARKET').click(function (e) {
        $('#travel').hide();
        $('#restaurant').hide();
        $('#market').show();
        e.preventDefault();
    });
    $('.add-room').on('click', function (e) {
        add();
        e.preventDefault();
        //        $('.total-price #total-price').html(totalprice);
    });
    var add = function (e) {
        $('.delail-add').append('<div class="book-item"><li class="item">1</li><li class="item"><div>+</div><div class="values">3</div><div>-</div></li><li class = "item itemprice">900$</li></div>');
        $('#total-price').html(totalprice);

    }

});


var totalprice = function () {
    var total = 0;
    var $itemprice = $('.itemprice');
    $itemprice.each(function (i, el) { //lay phan tu tinh tong
        total += parseInt(el.textContent);
    });

    return total + '$';
}

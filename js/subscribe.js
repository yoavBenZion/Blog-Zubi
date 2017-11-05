var verifyCallback = function (response) {
    if (response.length > 0) {
        $(".captcha > div.row > div.message_area").remove();
    }
};

var myCallBack = function () {
    //Render the recaptcha1 on the element with ID "recaptcha1"
    if ($('.captcha > div.row > div#gcaptcha').length > 0) {
        var captcha = grecaptcha.render('gcaptcha', {
            'sitekey': '6LezqRkUAAAAACOopT30XBwc1_-zbarrSr8FIjXU',
            'theme': 'light',
            'callback': verifyCallback,
        });
    }
};

$('.close').click(function () {
    $('#sib_embed_signup').fadeOut(400)
});
$('.subscribe').click(function () {
    $('.navbar-toggler-icon').click();
    $('#sib_embed_signup').fadeIn(400)
});
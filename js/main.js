$('.main_image').slidesjs({
    width: 949,
    height: 449,
    play: {
        effect: "fade",
        speed: 1000,
        interval: 5000,
        auto: true,
        // [boolean] Start playing the slideshow on load.
        pauseOnHover: false
    },
    navigation: {
        active: false,
        effect: "fade"
    }
});

var on_top = $('.on_top')[0];

$(document).scroll(function(e) {
    if (document.body.scrollTop > 0 && on_top.style.display !== 'block') {
        on_top.style.display = 'block';
    } else if (document.body.scrollTop === 0 && on_top.style.display !== 'none') {
        on_top.style.display = 'none';
    }
});

$('.expander').simpleexpand();

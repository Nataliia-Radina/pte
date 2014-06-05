 $(function(){
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
            active: true,
            effect: "fade"
        },
        callback: {
            loaded: function(){
                // hide navigation and pagination
                $('.slidesjs-navigation').hide(0);
            }
        }
    });

    $(".slidesjs-slide").click(function(e){
        e.preventDefault();
        $('.slidesjs-next.slidesjs-navigation').trigger('click');
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

    $('.hide').click(function(){
        this.parentNode.style.display = 'none';
    });


     $('.map area').mouseover(function() {
         showMapRegion($(this).attr('class').split('region-').pop());
     });
     $('.map area').mouseout(function() {
         hideMapRegion($(this).attr('class').split('region-').pop());
     });
     $('.map-links a').mouseover(function() {
         showMapRegion($(this).attr('class').split('region-').pop());
     });
     $('.map-links a').mouseout(function() {
         hideMapRegion(parseInt($(this).attr('class').split('region-').pop()));
     });

     showMapRegion = function(num) {
         $('.map img.region-'+num).show();
         $('.map-links .region-'+num).addClass('active');
     };

     hideMapRegion = function(num) {
         $('.map img.region-'+num).hide();
         $('.map-links .region-'+num).removeClass('active');
     };
});
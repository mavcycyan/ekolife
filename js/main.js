/**/
jQuery(document).ready(function($){	
    $(".ath").fancybox({ 
        href: '#modal_auth', 
        wrapCSS: 'modal_auth_wp',
        minWidth: '100%',
        margin: [0, 0, 0, 0],
        padding: [0, 0, 0, 0],
        autoScale: true
    });
});
/**/

/**/
$('.h-btn').click(function(){
    if($('.h-menu').hasClass('active')){
        $(this).removeClass('active');
        $('.h-menu').removeClass('active');
    }
    else {
        $(this).addClass('active');
        $('.h-menu').addClass('active');
    }
});    
/**/

// LazyLoad
//$("img.lazyload").lazyload();
$("a[data-fancybox=gallery] > img").lazyload();

// PreLoading
var $preloader = $('#page-preloader');
if ($preloader) {
    $spinner = $preloader.find('.spinner-loader');
    $spinner.fadeOut();
    $preloader.delay(50).fadeOut('slow');
}

// Data-mask
$('.date').datetimepicker({format: 'YYYY-MM-DD'});
$('.datetime').datetimepicker({format: 'YYYY-MM-DD HH:mm:ss'});

// select2
$('.select2').select2();

// tooltip
$('a[data-tooltip-target=wechat_qrcode]').tooltip({
    animated: 'fade',
    html: true
});

// bootstrap-switch
$('[data-toggle="switch"]').bootstrapSwitch();

$("[rel=taginput]").select2({
    tags: true,
    tokenSeparators: [',']
});

// app-inner-bar
$('.app-inner-layout-page .app-inner-bar .show-menu-btn,.app-inner-layout-page .app-inner-bar .close-menu-btn').on('click', function() {
    $('.app-inner-layout-page').toggleClass('app-layout-menu-open');
    $('.app-inner-layout-page .app-inner-bar .show-menu-btn,.app-inner-layout-page .app-inner-bar .close-menu-btn').toggleClass('d-none');

});
$('.nav.flex-column').stick_in_parent({offset_top:20});
if ($(window).width()<=1200) {
    $('.app-inner-layout-page .app-inner-bar .close-menu-btn').click();
}
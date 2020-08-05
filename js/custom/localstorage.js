// Theme Config
var theme_configs = [
{"key":"config_navbar_layout", "contrainer":".app-container", "default":"fixed-header"},
{"key":"config_sidebar_layout", "contrainer":".app-container", "default":"fixed-sidebar"},
{"key":"config_footer_layout", "contrainer":".app-container", "default":"fixed-footer"},
{"key":"config_navbar_color", "contrainer":".app-header", "default":"bg-dark header-text-light"},
{"key":"config_sidebar_color", "contrainer":".app-sidebar", "default":"bg-dark sidebar-text-light"},
{"key":"config_body_tabs", "contrainer":".app-container", "default":"body-tabs-line body-tabs-shadow"},
{"key":"close_sidebar", "contrainer":".app-container", "default":""},
];
for (var config of theme_configs) {
    var k = config['key'];
    var c = config['contrainer'];
    var d = config['default'];
    if (typeof(window.localStorage[k])!=="undefined") {
        var v = window.localStorage.getItem(k);
        if (k == 'close_sidebar' && $(window).width() >= 768) {
            if (v == 'closed-sidebar') {
                $(c).addClass('closed-sidebar');
                $('.close-sidebar-btn').addClass('is-active');
            } else {
                $('.close-sidebar-btn').removeClass('is-active');
            }
        } else {
            $(c).removeClass(d);
            $(c).addClass(v);
            if (k.indexOf('layout')>0) {
                $('div[data-config=' + k + '] input[type=checkbox]').prop("checked", v?true:false);
            }
            if (k == 'config_body_tabs') {
                $('.switch-theme-class').removeClass('active');
                $('.theme-settings-swatches .switch-theme-class[data-class=' + v + ']').addClass('active');
            }
        }
        
    }
}
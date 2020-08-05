$(document).ready(() => {

    // Sidebar Menu

    setTimeout(function () {
        $(".vertical-nav-menu").metisMenu();
    }, 100);

    // Search wrapper trigger

    $('.search-icon').click(function () {
        $(this).parent().parent().addClass('active');
    });

    $('.search-wrapper .close').click(function () {
        $(this).parent().removeClass('active');
    });

    // Stop Bootstrap 4 Dropdown for closing on click inside

    $('.dropdown-menu').on('click', function (event) {
        var events = $._data(document, 'events') || {};
        events = events.click || [];
        for (var i = 0; i < events.length; i++) {
            if (events[i].selector) {

                if ($(event.target).is(events[i].selector)) {
                    events[i].handler.call(event.target, event);
                }

                $(event.target).parents(events[i].selector).each(function () {
                    events[i].handler.call(this, event);
                });
            }
        }
        event.stopPropagation(); //Always stop propagation
    });
    // BS4 Tooltips
    $('.mobile-toggle-nav').click(function () {
        $(this).toggleClass('is-active');
        $('.app-container').toggleClass('sidebar-mobile-open');
    });

    $('.mobile-toggle-header-nav').click(function () {
        $(this).toggleClass('active');
        $('.app-header__content').toggleClass('header-mobile-open');
    });

    // Responsive

    var resizeClass = function () {
        var win = document.body.clientWidth;
        if (win < 991.98) {
            $('.app-container').addClass('closed-sidebar-mobile closed-sidebar');
        } else {
            $('.app-container').removeClass('closed-sidebar-mobile');
            if (window.localStorage.getItem('close_sidebar') == 'closed-sidebar') {
                $('.close-sidebar-btn').addClass('is-active');
            } else {
                $('.close-sidebar-btn').removeClass('is-active');
                $('.app-container').removeClass('closed-sidebar');
            }
        }
    };


    $(window).on('resize', function () {
        resizeClass();
    });

    resizeClass();

});

$(document).ready(() => {

    setTimeout(function () {

        if ($(".scrollbar-container")[0]) {

            $('.scrollbar-container').each(function () {
                const ps = new PerfectScrollbar($(this)[0], {
                    wheelSpeed: 2,
                    wheelPropagation: false,
                    minScrollbarLength: 20
                });
            });

            const ps = new PerfectScrollbar('.scrollbar-sidebar', {
                wheelSpeed: 2,
                wheelPropagation: false,
                minScrollbarLength: 20
            });
            if ($('a.mm-active').length > 0) {
                $('.scrollbar-sidebar').scrollTop($('a.mm-active').offset().top-$(window).height()/2);
            }

        }

    }, 1000);
});

$(document).ready(() => {

    $('.btn-open-options').click(function () {
        $('.ui-theme-settings').toggleClass('settings-open');
    });

    $('body').click(function(evt){    
        if (!$(evt.target).closest(".ui-theme-settings,.btn-open-options").length) {
            $('.ui-theme-settings').removeClass('settings-open');
        }
    });

    $('.close-sidebar-btn').click(function () {

        var classToSwitch = $(this).attr('data-class');
        var containerElement = '.app-container';
        $(containerElement).toggleClass(classToSwitch);

        var closeBtn = $(this);

        if (closeBtn.hasClass('is-active')) {
            closeBtn.removeClass('is-active');
            window.localStorage.setItem("close_sidebar", "");
        } else {
            closeBtn.addClass('is-active');
            window.localStorage.setItem("close_sidebar", "closed-sidebar");
        }
    });


    $('.switch-container-class').on('click', function () {

        var classToSwitch = $(this).attr('data-class');
        var containerElement = '.app-container';
        $(containerElement).toggleClass(classToSwitch);

        $(this).parent().find('.switch-container-class').removeClass('active');
        $(this).addClass('active');

        var config_nane = $(this).attr('data-config');
        window.localStorage.setItem(config_nane, $(this).find('input[type=checkbox]').prop("checked")?classToSwitch:"");
    });

    $('.switch-theme-class').on('click', function () {

        var classToSwitch = $(this).attr('data-class');
        var containerElement = '.app-container';

        if (classToSwitch == 'body-tabs-line') {
            $(containerElement).removeClass('body-tabs-shadow');
            $(containerElement).addClass(classToSwitch);
        }

        if (classToSwitch == 'body-tabs-shadow') {
            $(containerElement).removeClass('body-tabs-line');
            $(containerElement).addClass(classToSwitch);
        }

        $(this).parent().find('.switch-theme-class').removeClass('active');
        $(this).addClass('active');

        window.localStorage.setItem("config_body_tabs", classToSwitch);
    });

    $('.switch-header-cs-class').on('click', function () {
        var classToSwitch = $(this).attr('data-class');
        var containerElement = '.app-header';

        $('.switch-header-cs-class').removeClass('active');
        $(this).addClass('active');

        $(containerElement).attr('class', 'app-header');
        $(containerElement).addClass('header-shadow ' + classToSwitch);

        window.localStorage.setItem("config_navbar_color", classToSwitch);
    });

    $('.switch-sidebar-cs-class').on('click', function () {
        var classToSwitch = $(this).attr('data-class');
        var containerElement = '.app-sidebar';

        $('.switch-sidebar-cs-class').removeClass('active');
        $(this).addClass('active');

        $(containerElement).attr('class', 'app-sidebar');
        $(containerElement).addClass('sidebar-shadow ' + classToSwitch);

        window.localStorage.setItem("config_sidebar_color", classToSwitch);
    });



});
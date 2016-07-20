// Переключатель языка
// Десктоп меню (выпадайки)
// Мобильное меню
// Кнопка скролла страницы
// Модальное окно
// Hero Слайдер

jQuery(document).ready(function ($) {
    $('body').append('<div id="overlay" class="page__overlay"></div>');//оверлей - будем использовать при открытии модального окна и мобильного меню

    //
    // Переключатель языка
    //---------------------------------------------------------------------------------------
    (function () {
        var $lang = $('.js-lang'),
            $menu = $lang.find('ul'),
            $btn = $lang.find('.js-lang-btn'),
            $body = $('body'),
            method = {};

        method.show = function () {
            $btn.addClass('active');
            $menu.fadeIn(400);
            method.hideAlt();
        };
        method.hide = function () {
            $btn.removeClass('active');
            $menu.hide();
            $body.unbind('click', method.hide);
        };
        method.hideAlt = function () {//скроем список по клику в документе
            $lang.on('mouseleave', function () {
                $body.bind('click', method.hide);
            }).on('mouseenter', function () {
                $body.unbind('click', method.hide);
            });
        };
        $lang.on('click', '.js-lang-btn', function (e) {
            e.preventDefault();
            if ($(this).hasClass('active')) {
                method.hide();
            } else {
                method.show();
            };
        });
    })();


    //
    // Десктоп меню (выпадайки)
    //---------------------------------------------------------------------------------------
    (function () {
        var $menu = $('.js-menu li');
        $menu.has('ul').children('a').addClass('has-menu');

        $menu.on({
            mouseenter: function () {
                $(this).find('ul:first').stop(true, true).fadeIn('fast');
                $(this).find('a:first').addClass('hover');
            },
            mouseleave: function () {
                $(this).find('ul').stop(true, true).fadeOut('slow');
                $(this).find('a:first').removeClass('hover');
            }
        });
    })();


    //
    // Мобильное меню
    //---------------------------------------------------------------------------------------
    (function () {
        var $btn = $('.js-mmenu-toggle'),
            $menu = $('.js-mmenu'),
            $overlay = $('#overlay'),
            $html = $('html'),
            method = {};

        method.hideMenu = function () {
            $btn.removeClass('active');
            $menu.removeClass('active');
            $html.css('overflow', 'auto');
            $overlay.unbind('click', method.hideMenu).hide();
        };

        method.showMenu = function () {
            $btn.addClass('active');
            $menu.addClass('active');
            $html.css('overflow', 'hidden');
            $overlay.show().bind('click', method.hideMenu);
        }

        $('.b-header').on('click', '.js-mmenu-toggle', function () {//покажем - спрячем
            if ($(this).hasClass('active')) {
                method.hideMenu();
            } else {
                method.showMenu();
            }
        });

        $menu.on('click', '.m-menu__label', method.hideMenu); //закроем по клику по заголовку
    })();

    //
    // Кнопка скролла страницы
    //---------------------------------------------------------------------------------------
    (function () {
        var $scroller = $('<button type="button" class="page__scroll"><i class="icomoon-up"></i></button>');
        $('body').append($scroller);
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                $scroller.show();
            } else {
                $scroller.hide();
            }
        });
        $scroller.on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
    })();

    //
    // Модальное окно
    //---------------------------------------------------------------------------------------
    var showModal = (function (link) {
        var
        method = {},
        $modal,
        $window = $(window),
        $overlay = $('#overlay'),
        $close;

        $close = $('<button type="button" class="b-modal__close"><i class="icomoon-close"></i></button>'); //иконка закрыть


        $close.on('click', function (e) {
            e.preventDefault();
            method.close();
        });

        // центрируем окно
        method.center = function () {
            var top, left;
            top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
            left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;

            $modal.css({
                top: top + $window.scrollTop(),
                left: left + $window.scrollLeft()
            });
        };

        // открываем
        method.open = function (link) {
            $modal = $(link);
            $modal.append($close);
            method.center();
            $window.bind('resize.modal', method.center);
            $modal.show();
            $overlay.show().bind('click', method.close);
        };

        // закрываем
        method.close = function () {
            $modal.hide();
            $overlay.hide().unbind('click', method.close);
            $window.unbind('resize.modal');
        };

        // клик по кнопке с атрибутом data-modal - открываем модальное окно
        $('[data-modal]').on('click', function (e) {//передаем айди модального окна
            e.preventDefault();
            var link = $(this).data('modal');
            if (link) { showModal.open(link); }
        });

        return method;
    }());

    //
    // Hero Слайдер
    //---------------------------------------------------------------------------------------
    function initHeroSlider() {
        var $slider = $('.js-hero'),
            slider = $slider,
            $content = $slider.find('.b-hero__content'),//будем анимировать при смене слайдов
            method = {};

        method.addImages = function () {//добавим бэкграунды
            var count = $slider.children('li').length;
            for (var i = 1; i < count; i++) {//для первого элемента вывели изображенния скриптом на странице, начинаем цикл со второго
                var $el = $slider.children('li').eq(i),
                    $elXS = $el.find('.b-hero__bg--xs'),
                    $elXL = $el.find('.b-hero__bg--xl');
                $elXS.css('background-image', 'url(' + $elXS.data('src') + ')');
                $elXL.css('background-image', 'url(' + $elXL.data('src') + ')');
            };
        };

        method.navigate = function () {//подключаем свои стрелки навигации + добавляем паузу при ховере
            var $hero = $slider.parents('.b-hero');

            $hero.on('mouseenter', '.bx-pager, .b-hero__prev, .b-hero__next', function () {
                slider.stopAuto();
            }).on('mouseleave', '.bx-pager, .b-hero__prev, .b-hero__next', function () {
                slider.startAuto();
            }).on('click', '.b-hero__prev', function () {
                slider.goToPrevSlide();
            }).on('click', '.b-hero__next', function () {
                slider.goToNextSlide();
            });
        };

        method.init = (function () {
            slider.bxSlider({
                controls: false,
                mode: 'fade',
                pager: true,
                auto: true,
                autoHover: true,
                autoDelay: 8000,//дадим время на подгрузку изображений
                pause: 8000,
                onSliderLoad: function (currentIndex) {
                    $content.addClass('js-slider-animate').filter(':first').addClass('active');//запускаем анимацию
                    method.addImages();//загрузили бэкграунды
                    method.navigate();//подключили навигацию
                },
                onSlideBefore: function ($slideElement) {
                    $content.removeClass('active');
                },
                onSlideAfter: function ($slideElement) {
                    $slideElement.find('.b-hero__content').addClass('active');
                }
            });
        })();
    };
    if ($('.js-hero').length) {
        initHeroSlider();
    }
});
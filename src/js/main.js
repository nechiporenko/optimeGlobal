// Переключатель языка
// Десктоп меню (выпадайки) + хелпер для бокового меню
// Мобильное меню
// Кнопка скролла страницы
// Стилизация Select
// Hero Слайдер
// Гугл карта - загрузим когда промотаем к секции
// Анимация секций при скролле (на десктопе)
// Кнопка callback - покажем когда проскроллим к футеру
// Покажем / спрячем панель с Share кнопками
// Откроем модальное окно по клику на data-modal
// Если браузер не знает о плейсхолдерах в формах

jQuery(document).ready(function ($) {
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
    // Десктоп меню (выпадайки) + хелпер для бокового меню
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

        //хелпер для бокового меню
        var $side_menu = $('.p-menu li');
        $side_menu.has('ul').children('a').addClass('has-menu');

    })();

    //
    // Мобильное меню
    //---------------------------------------------------------------------------------------
    (function () {
        var $btn = $('.js-mmenu-toggle'),
            $menu = $('.js-mmenu'),
            $overlay = $('#overlay'),
            $body = $('body'),
            method = {};

        method.hideMenu = function () {
            $btn.removeClass('active');
            $menu.removeClass('active');
            $body.css('overflow', 'auto');
            method.hideAllSubmenu();

            method.removeOverlay();
        };

        method.showMenu = function () {
            $btn.addClass('active');
            $menu.addClass('active');
            $body.css('overflow', 'hidden');
            method.addOverlay();
        };

        method.showSubmenu = function (el) {
            el.find('.m-menu__toggle').addClass('active');
            el.find('.m-submenu').slideDown(400);
        };

        method.hideSubmenu = function (el) {
            el.find('.m-menu__toggle').removeClass('active');
            el.find('.m-submenu').slideUp(400);
        };

        method.hideAllSubmenu = function () {
            $menu.find('.m-menu__toggle').removeClass('active');
            $menu.find('.m-submenu').slideUp(400);
        };

        method.addOverlay = function () {
            $body.append('<div id="overlay" class="page__overlay"></div>');
            $('#overlay').bind('click', method.hideMenu);
        };

        method.removeOverlay = function () {
            $('#overlay').unbind('click', method.hideMenu).remove();
        }

        $menu.find('.m-menu__item').has('ul').addClass('has-menu').append('<button type="button" class="m-menu__toggle"><i class="icomoon-down"></i></button>');

        $('.b-header').on('click', '.js-mmenu-toggle', function () {//покажем - спрячем панель моб.меню
            if ($(this).hasClass('active')) {
                method.hideMenu();
            } else {
                method.showMenu();
            };
        });

        $menu.on('click', '.m-menu__label', method.hideMenu); //закроем панель по клику по заголовку

        $menu.on('click', '.m-menu__toggle', function () {
            var $el = $(this).parent('li');
            if ($(this).hasClass('active')) {
                method.hideSubmenu($el);
            } else {
                method.hideAllSubmenu();
                method.showSubmenu($el);
            };
        });
    })();

    //
    // Кнопка скролла страницы
    //---------------------------------------------------------------------------------------
    $('.b-footer').on('click', '.js-scroll-up', function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
    

    //
    // Стилизация Select
    //---------------------------------------------------------------------------------------
    $('.js-select').each(function () {
        var $el = $(this);

        $el.selectric({
            disableOnMobile: false,
            responsive: true,
        });
    });

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
    };

    //
    // Гугл карта - загрузим когда промотаем к секции
    //---------------------------------------------------------------------------------------
    function startGoogleMap() {
        var map = $('#map');
        if ($.inViewport(map)) {//если блок с картой сразу на экране
            initGoogleMap();//запускаем ее скрипт
        } else {//если нет
            $(window).bind('scroll', checkInView); //отслеживаем скролл
        }

        function checkInView() {//когда промотали к секции с картой
            if ($.inViewport(map)) {
                $(window).unbind('scroll', checkInView);//отключили отслеживание скролла
                initGoogleMap();//запустили скрипты
            }
        };
    }

    function initGoogleMap() {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
            'callback=gmap_draw';

        window.gmap_draw = function () {
            var map_lating = new google.maps.LatLng(50.463413, 30.508862),
                map_options = {
                    zoom: 17,
                    center: map_lating,
                    panControl: false,
                    zoomControl: true,
                    scrollwheel: false,
                    streetViewControl: false,
                    scaleControl: true,
                    mapTypeId: google.maps.MapTypeId.ROAD
                },
                map = new google.maps.Map(document.getElementById('map'), map_options),
                marker = new google.maps.Marker({
                    position: map_lating,
                    icon: "img/marker.png",
                    map: map
                }),
                info = new google.maps.InfoWindow({
                    content: '<span class="g-title3">OptimeGlobal</div>'
                });

            google.maps.event.addListener(marker, 'mouseover', function () {
                info.open(map, marker);
            });

            google.maps.event.addListener(marker, 'mouseout', function () {
                info.close(map, marker);
            });

            google.maps.event.addDomListener(window, 'resize', function () {
                var center = map.getCenter();
                google.maps.event.trigger(map, 'resize');
                map.setCenter(center);
            });
        };

        document.body.appendChild(script);
    };

    if ($('#map').length) {
        startGoogleMap();
    };

    //
    // Анимация секций при скролле (на десктопе)
    //---------------------------------------------------------------------------------------
    function animateOnScroll() {
        var $elems = $('.js-animate'),
            $window = $(window);

        //проверка при загрузке страницы
        $elems.each(function () {
            var $el = $(this);
            if ($.inViewport($el)) {//если блок видим
                animateElem($el);//анимируем
            };
        });

        //проверка при скролле
        $elems = $('.js-animate');
        $elems.each(function () {
            var $el = $(this);
            $window.bind('scroll', checkInView);

            function checkInView() {
                if ($.inY($el, -50)) {
                    $window.unbind('scroll', checkInView);//отключили отслеживание
                    animateElem($el);//анимировали
                }
            }
        });

        function animateElem(el) {
            var animateClass = el.data('animate');
            el.removeClass('js-animate').addClass('animated ' + animateClass);
            setTimeout(function () {//уберем мусор
                el.removeAttr('data-animate').removeClass('animated ' + animateClass);
            }, 2000);
        };
    };

    if ($('.js-animate').length && $.viewportW() > 992) {
        animateOnScroll();
    };

    //
    // Кнопка callback - покажем когда проскроллим к футеру
    //---------------------------------------------------------------------------------------
    (function () {
        var $window = $(window),
            $footer = $('.b-footer'),
            $share = $('.js-share'), //когда будем показывать кнопку - скроем панель с share-линками чтобы они не перекрывали друг друга
            $btn = $('.js-callback'),
            from_bottom = 200; //bottom offset

        if ($.inY($footer, from_bottom)) {//проверка при старте
            $btn.addClass('active');
            $share.addClass('g-hidden');
        };

        $window.on('scroll', function () {//при скролле
            if ($.inY($footer, from_bottom)) {
                $btn.addClass('active');
                $share.addClass('g-hidden');
            } else {
                $btn.removeClass('active');
                $share.removeClass('g-hidden');
            }
        });
    })();

    //
    // Покажем / спрячем панель с Share кнопками
    //---------------------------------------------------------------------------------------
    (function () {
        var $panel = $('.js-share');
        $panel.on('click', '.js-share-hide', function () {
            $panel.addClass('hidden');
        }).on('click', '.js-share-show', function () {
            $panel.removeClass('hidden');
        });
    })();

    //
    // Откроем модальное окно по клику на data-modal
    //---------------------------------------------------------------------------------------
    (function () {
        var $fixed_el = $('.js-callback, .js-share');//будем фиксить подергивание фиксированных элементов на странице при открытии модального окна
        $('[data-modal]').on('click', function (e) {
            e.preventDefault();
            var target = $(this).data('modal');

            if ($(target).length) {
                $(target).arcticmodal();
            };
        });

        $.arcticmodal('setDefault', {
            beforeOpen: function () {
                $fixed_el.addClass('g-invisible');
            },
            afterClose: function () {
                $fixed_el.removeClass('g-invisible');
            }
        });
    })();
    

    
    //
    // Если браузер не знает о плейсхолдерах в формах
    //---------------------------------------------------------------------------------------
    if ($('html').hasClass('no-placeholder')) {
        /* Placeholders.js v4.0.1 */
        !function (a) { "use strict"; function b() { } function c() { try { return document.activeElement } catch (a) { } } function d(a, b) { for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return !0; return !1 } function e(a, b, c) { return a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : void 0 } function f(a, b) { var c; a.createTextRange ? (c = a.createTextRange(), c.move("character", b), c.select()) : a.selectionStart && (a.focus(), a.setSelectionRange(b, b)) } function g(a, b) { try { return a.type = b, !0 } catch (c) { return !1 } } function h(a, b) { if (a && a.getAttribute(B)) b(a); else for (var c, d = a ? a.getElementsByTagName("input") : N, e = a ? a.getElementsByTagName("textarea") : O, f = d ? d.length : 0, g = e ? e.length : 0, h = f + g, i = 0; h > i; i++) c = f > i ? d[i] : e[i - f], b(c) } function i(a) { h(a, k) } function j(a) { h(a, l) } function k(a, b) { var c = !!b && a.value !== b, d = a.value === a.getAttribute(B); if ((c || d) && "true" === a.getAttribute(C)) { a.removeAttribute(C), a.value = a.value.replace(a.getAttribute(B), ""), a.className = a.className.replace(A, ""); var e = a.getAttribute(I); parseInt(e, 10) >= 0 && (a.setAttribute("maxLength", e), a.removeAttribute(I)); var f = a.getAttribute(D); return f && (a.type = f), !0 } return !1 } function l(a) { var b = a.getAttribute(B); if ("" === a.value && b) { a.setAttribute(C, "true"), a.value = b, a.className += " " + z; var c = a.getAttribute(I); c || (a.setAttribute(I, a.maxLength), a.removeAttribute("maxLength")); var d = a.getAttribute(D); return d ? a.type = "text" : "password" === a.type && g(a, "text") && a.setAttribute(D, "password"), !0 } return !1 } function m(a) { return function () { P && a.value === a.getAttribute(B) && "true" === a.getAttribute(C) ? f(a, 0) : k(a) } } function n(a) { return function () { l(a) } } function o(a) { return function () { i(a) } } function p(a) { return function (b) { return v = a.value, "true" === a.getAttribute(C) && v === a.getAttribute(B) && d(x, b.keyCode) ? (b.preventDefault && b.preventDefault(), !1) : void 0 } } function q(a) { return function () { k(a, v), "" === a.value && (a.blur(), f(a, 0)) } } function r(a) { return function () { a === c() && a.value === a.getAttribute(B) && "true" === a.getAttribute(C) && f(a, 0) } } function s(a) { var b = a.form; b && "string" == typeof b && (b = document.getElementById(b), b.getAttribute(E) || (e(b, "submit", o(b)), b.setAttribute(E, "true"))), e(a, "focus", m(a)), e(a, "blur", n(a)), P && (e(a, "keydown", p(a)), e(a, "keyup", q(a)), e(a, "click", r(a))), a.setAttribute(F, "true"), a.setAttribute(B, T), (P || a !== c()) && l(a) } var t = document.createElement("input"), u = void 0 !== t.placeholder; if (a.Placeholders = { nativeSupport: u, disable: u ? b : i, enable: u ? b : j }, !u) { var v, w = ["text", "search", "url", "tel", "email", "password", "number", "textarea"], x = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46], y = "#ccc", z = "placeholdersjs", A = new RegExp("(?:^|\\s)" + z + "(?!\\S)"), B = "data-placeholder-value", C = "data-placeholder-active", D = "data-placeholder-type", E = "data-placeholder-submit", F = "data-placeholder-bound", G = "data-placeholder-focus", H = "data-placeholder-live", I = "data-placeholder-maxlength", J = 100, K = document.getElementsByTagName("head")[0], L = document.documentElement, M = a.Placeholders, N = document.getElementsByTagName("input"), O = document.getElementsByTagName("textarea"), P = "false" === L.getAttribute(G), Q = "false" !== L.getAttribute(H), R = document.createElement("style"); R.type = "text/css"; var S = document.createTextNode("." + z + " {color:" + y + ";}"); R.styleSheet ? R.styleSheet.cssText = S.nodeValue : R.appendChild(S), K.insertBefore(R, K.firstChild); for (var T, U, V = 0, W = N.length + O.length; W > V; V++) U = V < N.length ? N[V] : O[V - N.length], T = U.attributes.placeholder, T && (T = T.nodeValue, T && d(w, U.type) && s(U)); var X = setInterval(function () { for (var a = 0, b = N.length + O.length; b > a; a++) U = a < N.length ? N[a] : O[a - N.length], T = U.attributes.placeholder, T ? (T = T.nodeValue, T && d(w, U.type) && (U.getAttribute(F) || s(U), (T !== U.getAttribute(B) || "password" === U.type && !U.getAttribute(D)) && ("password" === U.type && !U.getAttribute(D) && g(U, "text") && U.setAttribute(D, "password"), U.value === U.getAttribute(B) && (U.value = T), U.setAttribute(B, T)))) : U.getAttribute(C) && (k(U), U.removeAttribute(B)); Q || clearInterval(X) }, J); e(a, "beforeunload", function () { M.disable() }) } }(this);
    };
});

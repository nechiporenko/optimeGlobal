/*!
 * optimeGlobal
 * @author: 'Digital Force', http://digitalforce.ua
 * @version: 1.0.1
 * Copyright 2016.
 */

/**
 * bxSlider v4.2.5
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */

!function (a) { var b = { mode: "horizontal", slideSelector: "", infiniteLoop: !0, hideControlOnEnd: !1, speed: 500, easing: null, slideMargin: 0, startSlide: 0, randomStart: !1, captions: !1, ticker: !1, tickerHover: !1, adaptiveHeight: !1, adaptiveHeightSpeed: 500, video: !1, useCSS: !0, preloadImages: "visible", responsive: !0, slideZIndex: 50, wrapperClass: "bx-wrapper", touchEnabled: !0, swipeThreshold: 50, oneToOneTouch: !0, preventDefaultSwipeX: !0, preventDefaultSwipeY: !1, ariaLive: !0, ariaHidden: !0, keyboardEnabled: !1, pager: !0, pagerType: "full", pagerShortSeparator: " / ", pagerSelector: null, buildPager: null, pagerCustom: null, controls: !0, nextText: "Next", prevText: "Prev", nextSelector: null, prevSelector: null, autoControls: !1, startText: "Start", stopText: "Stop", autoControlsCombine: !1, autoControlsSelector: null, auto: !1, pause: 4e3, autoStart: !0, autoDirection: "next", stopAutoOnClick: !1, autoHover: !1, autoDelay: 0, autoSlideForOnePage: !1, minSlides: 1, maxSlides: 1, moveSlides: 0, slideWidth: 0, shrinkItems: !1, onSliderLoad: function () { return !0 }, onSlideBefore: function () { return !0 }, onSlideAfter: function () { return !0 }, onSlideNext: function () { return !0 }, onSlidePrev: function () { return !0 }, onSliderResize: function () { return !0 } }; a.fn.bxSlider = function (c) { if (0 === this.length) return this; if (this.length > 1) return this.each(function () { a(this).bxSlider(c) }), this; var d = {}, e = this, f = a(window).width(), g = a(window).height(); if (!a(e).data("bxSlider")) { var h = function () { a(e).data("bxSlider") || (d.settings = a.extend({}, b, c), d.settings.slideWidth = parseInt(d.settings.slideWidth), d.children = e.children(d.settings.slideSelector), d.children.length < d.settings.minSlides && (d.settings.minSlides = d.children.length), d.children.length < d.settings.maxSlides && (d.settings.maxSlides = d.children.length), d.settings.randomStart && (d.settings.startSlide = Math.floor(Math.random() * d.children.length)), d.active = { index: d.settings.startSlide }, d.carousel = d.settings.minSlides > 1 || d.settings.maxSlides > 1 ? !0 : !1, d.carousel && (d.settings.preloadImages = "all"), d.minThreshold = d.settings.minSlides * d.settings.slideWidth + (d.settings.minSlides - 1) * d.settings.slideMargin, d.maxThreshold = d.settings.maxSlides * d.settings.slideWidth + (d.settings.maxSlides - 1) * d.settings.slideMargin, d.working = !1, d.controls = {}, d.interval = null, d.animProp = "vertical" === d.settings.mode ? "top" : "left", d.usingCSS = d.settings.useCSS && "fade" !== d.settings.mode && function () { for (var a = document.createElement("div"), b = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], c = 0; c < b.length; c++) if (void 0 !== a.style[b[c]]) return d.cssPrefix = b[c].replace("Perspective", "").toLowerCase(), d.animProp = "-" + d.cssPrefix + "-transform", !0; return !1 }(), "vertical" === d.settings.mode && (d.settings.maxSlides = d.settings.minSlides), e.data("origStyle", e.attr("style")), e.children(d.settings.slideSelector).each(function () { a(this).data("origStyle", a(this).attr("style")) }), j()) }, j = function () { var b = d.children.eq(d.settings.startSlide); e.wrap('<div class="' + d.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), d.viewport = e.parent(), d.settings.ariaLive && !d.settings.ticker && d.viewport.attr("aria-live", "polite"), d.loader = a('<div class="bx-loading" />'), d.viewport.prepend(d.loader), e.css({ width: "horizontal" === d.settings.mode ? 1e3 * d.children.length + 215 + "%" : "auto", position: "relative" }), d.usingCSS && d.settings.easing ? e.css("-" + d.cssPrefix + "-transition-timing-function", d.settings.easing) : d.settings.easing || (d.settings.easing = "swing"), d.viewport.css({ width: "100%", overflow: "hidden", position: "relative" }), d.viewport.parent().css({ maxWidth: n() }), d.settings.pager || d.settings.controls || d.viewport.parent().css({ margin: "0 auto 0px" }), d.children.css({ "float": "horizontal" === d.settings.mode ? "left" : "none", listStyle: "none", position: "relative" }), d.children.css("width", o()), "horizontal" === d.settings.mode && d.settings.slideMargin > 0 && d.children.css("marginRight", d.settings.slideMargin), "vertical" === d.settings.mode && d.settings.slideMargin > 0 && d.children.css("marginBottom", d.settings.slideMargin), "fade" === d.settings.mode && (d.children.css({ position: "absolute", zIndex: 0, display: "none" }), d.children.eq(d.settings.startSlide).css({ zIndex: d.settings.slideZIndex, display: "block" })), d.controls.el = a('<div class="bx-controls" />'), d.settings.captions && y(), d.active.last = d.settings.startSlide === q() - 1, d.settings.video && e.fitVids(), ("all" === d.settings.preloadImages || d.settings.ticker) && (b = d.children), d.settings.ticker ? d.settings.pager = !1 : (d.settings.controls && w(), d.settings.auto && d.settings.autoControls && x(), d.settings.pager && v(), (d.settings.controls || d.settings.autoControls || d.settings.pager) && d.viewport.after(d.controls.el)), k(b, l) }, k = function (b, c) { var d = b.find('img:not([src=""]), iframe').length, e = 0; return 0 === d ? void c() : void b.find('img:not([src=""]), iframe').each(function () { a(this).one("load error", function () { ++e === d && c() }).each(function () { this.complete && a(this).load() }) }) }, l = function () { if (d.settings.infiniteLoop && "fade" !== d.settings.mode && !d.settings.ticker) { var b = "vertical" === d.settings.mode ? d.settings.minSlides : d.settings.maxSlides, c = d.children.slice(0, b).clone(!0).addClass("bx-clone"), f = d.children.slice(-b).clone(!0).addClass("bx-clone"); d.settings.ariaHidden && (c.attr("aria-hidden", !0), f.attr("aria-hidden", !0)), e.append(c).prepend(f) } d.loader.remove(), s(), "vertical" === d.settings.mode && (d.settings.adaptiveHeight = !0), d.viewport.height(m()), e.redrawSlider(), d.settings.onSliderLoad.call(e, d.active.index), d.initialized = !0, d.settings.responsive && a(window).bind("resize", S), d.settings.auto && d.settings.autoStart && (q() > 1 || d.settings.autoSlideForOnePage) && I(), d.settings.ticker && J(), d.settings.pager && E(d.settings.startSlide), d.settings.controls && H(), d.settings.touchEnabled && !d.settings.ticker && N(), d.settings.keyboardEnabled && !d.settings.ticker && a(document).keydown(M) }, m = function () { var b = 0, c = a(); if ("vertical" === d.settings.mode || d.settings.adaptiveHeight) if (d.carousel) { var e = 1 === d.settings.moveSlides ? d.active.index : d.active.index * r(); for (c = d.children.eq(e), i = 1; i <= d.settings.maxSlides - 1; i++) c = e + i >= d.children.length ? c.add(d.children.eq(i - 1)) : c.add(d.children.eq(e + i)) } else c = d.children.eq(d.active.index); else c = d.children; return "vertical" === d.settings.mode ? (c.each(function (c) { b += a(this).outerHeight() }), d.settings.slideMargin > 0 && (b += d.settings.slideMargin * (d.settings.minSlides - 1))) : b = Math.max.apply(Math, c.map(function () { return a(this).outerHeight(!1) }).get()), "border-box" === d.viewport.css("box-sizing") ? b += parseFloat(d.viewport.css("padding-top")) + parseFloat(d.viewport.css("padding-bottom")) + parseFloat(d.viewport.css("border-top-width")) + parseFloat(d.viewport.css("border-bottom-width")) : "padding-box" === d.viewport.css("box-sizing") && (b += parseFloat(d.viewport.css("padding-top")) + parseFloat(d.viewport.css("padding-bottom"))), b }, n = function () { var a = "100%"; return d.settings.slideWidth > 0 && (a = "horizontal" === d.settings.mode ? d.settings.maxSlides * d.settings.slideWidth + (d.settings.maxSlides - 1) * d.settings.slideMargin : d.settings.slideWidth), a }, o = function () { var a = d.settings.slideWidth, b = d.viewport.width(); if (0 === d.settings.slideWidth || d.settings.slideWidth > b && !d.carousel || "vertical" === d.settings.mode) a = b; else if (d.settings.maxSlides > 1 && "horizontal" === d.settings.mode) { if (b > d.maxThreshold) return a; b < d.minThreshold ? a = (b - d.settings.slideMargin * (d.settings.minSlides - 1)) / d.settings.minSlides : d.settings.shrinkItems && (a = Math.floor((b + d.settings.slideMargin) / Math.ceil((b + d.settings.slideMargin) / (a + d.settings.slideMargin)) - d.settings.slideMargin)) } return a }, p = function () { var a = 1, b = null; return "horizontal" === d.settings.mode && d.settings.slideWidth > 0 ? d.viewport.width() < d.minThreshold ? a = d.settings.minSlides : d.viewport.width() > d.maxThreshold ? a = d.settings.maxSlides : (b = d.children.first().width() + d.settings.slideMargin, a = Math.floor((d.viewport.width() + d.settings.slideMargin) / b)) : "vertical" === d.settings.mode && (a = d.settings.minSlides), a }, q = function () { var a = 0, b = 0, c = 0; if (d.settings.moveSlides > 0) if (d.settings.infiniteLoop) a = Math.ceil(d.children.length / r()); else for (; b < d.children.length;)++a, b = c + p(), c += d.settings.moveSlides <= p() ? d.settings.moveSlides : p(); else a = Math.ceil(d.children.length / p()); return a }, r = function () { return d.settings.moveSlides > 0 && d.settings.moveSlides <= p() ? d.settings.moveSlides : p() }, s = function () { var a, b, c; d.children.length > d.settings.maxSlides && d.active.last && !d.settings.infiniteLoop ? "horizontal" === d.settings.mode ? (b = d.children.last(), a = b.position(), t(-(a.left - (d.viewport.width() - b.outerWidth())), "reset", 0)) : "vertical" === d.settings.mode && (c = d.children.length - d.settings.minSlides, a = d.children.eq(c).position(), t(-a.top, "reset", 0)) : (a = d.children.eq(d.active.index * r()).position(), d.active.index === q() - 1 && (d.active.last = !0), void 0 !== a && ("horizontal" === d.settings.mode ? t(-a.left, "reset", 0) : "vertical" === d.settings.mode && t(-a.top, "reset", 0))) }, t = function (b, c, f, g) { var h, i; d.usingCSS ? (i = "vertical" === d.settings.mode ? "translate3d(0, " + b + "px, 0)" : "translate3d(" + b + "px, 0, 0)", e.css("-" + d.cssPrefix + "-transition-duration", f / 1e3 + "s"), "slide" === c ? (e.css(d.animProp, i), 0 !== f ? e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (b) { a(b.target).is(e) && (e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), F()) }) : F()) : "reset" === c ? e.css(d.animProp, i) : "ticker" === c && (e.css("-" + d.cssPrefix + "-transition-timing-function", "linear"), e.css(d.animProp, i), 0 !== f ? e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (b) { a(b.target).is(e) && (e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), t(g.resetValue, "reset", 0), K()) }) : (t(g.resetValue, "reset", 0), K()))) : (h = {}, h[d.animProp] = b, "slide" === c ? e.animate(h, f, d.settings.easing, function () { F() }) : "reset" === c ? e.css(d.animProp, b) : "ticker" === c && e.animate(h, f, "linear", function () { t(g.resetValue, "reset", 0), K() })) }, u = function () { for (var b = "", c = "", e = q(), f = 0; e > f; f++) c = "", d.settings.buildPager && a.isFunction(d.settings.buildPager) || d.settings.pagerCustom ? (c = d.settings.buildPager(f), d.pagerEl.addClass("bx-custom-pager")) : (c = f + 1, d.pagerEl.addClass("bx-default-pager")), b += '<div class="bx-pager-item"><a href="" data-slide-index="' + f + '" class="bx-pager-link">' + c + "</a></div>"; d.pagerEl.html(b) }, v = function () { d.settings.pagerCustom ? d.pagerEl = a(d.settings.pagerCustom) : (d.pagerEl = a('<div class="bx-pager" />'), d.settings.pagerSelector ? a(d.settings.pagerSelector).html(d.pagerEl) : d.controls.el.addClass("bx-has-pager").append(d.pagerEl), u()), d.pagerEl.on("click touchend", "a", D) }, w = function () { d.controls.next = a('<a class="bx-next" href="">' + d.settings.nextText + "</a>"), d.controls.prev = a('<a class="bx-prev" href="">' + d.settings.prevText + "</a>"), d.controls.next.bind("click touchend", z), d.controls.prev.bind("click touchend", A), d.settings.nextSelector && a(d.settings.nextSelector).append(d.controls.next), d.settings.prevSelector && a(d.settings.prevSelector).append(d.controls.prev), d.settings.nextSelector || d.settings.prevSelector || (d.controls.directionEl = a('<div class="bx-controls-direction" />'), d.controls.directionEl.append(d.controls.prev).append(d.controls.next), d.controls.el.addClass("bx-has-controls-direction").append(d.controls.directionEl)) }, x = function () { d.controls.start = a('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + d.settings.startText + "</a></div>"), d.controls.stop = a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + d.settings.stopText + "</a></div>"), d.controls.autoEl = a('<div class="bx-controls-auto" />'), d.controls.autoEl.on("click", ".bx-start", B), d.controls.autoEl.on("click", ".bx-stop", C), d.settings.autoControlsCombine ? d.controls.autoEl.append(d.controls.start) : d.controls.autoEl.append(d.controls.start).append(d.controls.stop), d.settings.autoControlsSelector ? a(d.settings.autoControlsSelector).html(d.controls.autoEl) : d.controls.el.addClass("bx-has-controls-auto").append(d.controls.autoEl), G(d.settings.autoStart ? "stop" : "start") }, y = function () { d.children.each(function (b) { var c = a(this).find("img:first").attr("title"); void 0 !== c && ("" + c).length && a(this).append('<div class="bx-caption"><span>' + c + "</span></div>") }) }, z = function (a) { a.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && e.stopAuto(), e.goToNextSlide()) }, A = function (a) { a.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && e.stopAuto(), e.goToPrevSlide()) }, B = function (a) { e.startAuto(), a.preventDefault() }, C = function (a) { e.stopAuto(), a.preventDefault() }, D = function (b) { var c, f; b.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && e.stopAuto(), c = a(b.currentTarget), void 0 !== c.attr("data-slide-index") && (f = parseInt(c.attr("data-slide-index")), f !== d.active.index && e.goToSlide(f))) }, E = function (b) { var c = d.children.length; return "short" === d.settings.pagerType ? (d.settings.maxSlides > 1 && (c = Math.ceil(d.children.length / d.settings.maxSlides)), void d.pagerEl.html(b + 1 + d.settings.pagerShortSeparator + c)) : (d.pagerEl.find("a").removeClass("active"), void d.pagerEl.each(function (c, d) { a(d).find("a").eq(b).addClass("active") })) }, F = function () { if (d.settings.infiniteLoop) { var a = ""; 0 === d.active.index ? a = d.children.eq(0).position() : d.active.index === q() - 1 && d.carousel ? a = d.children.eq((q() - 1) * r()).position() : d.active.index === d.children.length - 1 && (a = d.children.eq(d.children.length - 1).position()), a && ("horizontal" === d.settings.mode ? t(-a.left, "reset", 0) : "vertical" === d.settings.mode && t(-a.top, "reset", 0)) } d.working = !1, d.settings.onSlideAfter.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index) }, G = function (a) { d.settings.autoControlsCombine ? d.controls.autoEl.html(d.controls[a]) : (d.controls.autoEl.find("a").removeClass("active"), d.controls.autoEl.find("a:not(.bx-" + a + ")").addClass("active")) }, H = function () { 1 === q() ? (d.controls.prev.addClass("disabled"), d.controls.next.addClass("disabled")) : !d.settings.infiniteLoop && d.settings.hideControlOnEnd && (0 === d.active.index ? (d.controls.prev.addClass("disabled"), d.controls.next.removeClass("disabled")) : d.active.index === q() - 1 ? (d.controls.next.addClass("disabled"), d.controls.prev.removeClass("disabled")) : (d.controls.prev.removeClass("disabled"), d.controls.next.removeClass("disabled"))) }, I = function () { if (d.settings.autoDelay > 0) { setTimeout(e.startAuto, d.settings.autoDelay) } else e.startAuto(), a(window).focus(function () { e.startAuto() }).blur(function () { e.stopAuto() }); d.settings.autoHover && e.hover(function () { d.interval && (e.stopAuto(!0), d.autoPaused = !0) }, function () { d.autoPaused && (e.startAuto(!0), d.autoPaused = null) }) }, J = function () { var b, c, f, g, h, i, j, k, l = 0; "next" === d.settings.autoDirection ? e.append(d.children.clone().addClass("bx-clone")) : (e.prepend(d.children.clone().addClass("bx-clone")), b = d.children.first().position(), l = "horizontal" === d.settings.mode ? -b.left : -b.top), t(l, "reset", 0), d.settings.pager = !1, d.settings.controls = !1, d.settings.autoControls = !1, d.settings.tickerHover && (d.usingCSS ? (g = "horizontal" === d.settings.mode ? 4 : 5, d.viewport.hover(function () { c = e.css("-" + d.cssPrefix + "-transform"), f = parseFloat(c.split(",")[g]), t(f, "reset", 0) }, function () { k = 0, d.children.each(function (b) { k += "horizontal" === d.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0) }), h = d.settings.speed / k, i = "horizontal" === d.settings.mode ? "left" : "top", j = h * (k - Math.abs(parseInt(f))), K(j) })) : d.viewport.hover(function () { e.stop() }, function () { k = 0, d.children.each(function (b) { k += "horizontal" === d.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0) }), h = d.settings.speed / k, i = "horizontal" === d.settings.mode ? "left" : "top", j = h * (k - Math.abs(parseInt(e.css(i)))), K(j) })), K() }, K = function (a) { var b, c, f, g = a ? a : d.settings.speed, h = { left: 0, top: 0 }, i = { left: 0, top: 0 }; "next" === d.settings.autoDirection ? h = e.find(".bx-clone").first().position() : i = d.children.first().position(), b = "horizontal" === d.settings.mode ? -h.left : -h.top, c = "horizontal" === d.settings.mode ? -i.left : -i.top, f = { resetValue: c }, t(b, "ticker", g, f) }, L = function (b) { var c = a(window), d = { top: c.scrollTop(), left: c.scrollLeft() }, e = b.offset(); return d.right = d.left + c.width(), d.bottom = d.top + c.height(), e.right = e.left + b.outerWidth(), e.bottom = e.top + b.outerHeight(), !(d.right < e.left || d.left > e.right || d.bottom < e.top || d.top > e.bottom) }, M = function (a) { var b = document.activeElement.tagName.toLowerCase(), c = "input|textarea", d = new RegExp(b, ["i"]), f = d.exec(c); if (null == f && L(e)) { if (39 === a.keyCode) return z(a), !1; if (37 === a.keyCode) return A(a), !1 } }, N = function () { d.touch = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }, d.viewport.bind("touchstart MSPointerDown pointerdown", O), d.viewport.on("click", ".bxslider a", function (a) { d.viewport.hasClass("click-disabled") && (a.preventDefault(), d.viewport.removeClass("click-disabled")) }) }, O = function (a) { if (d.controls.el.addClass("disabled"), d.working) a.preventDefault(), d.controls.el.removeClass("disabled"); else { d.touch.originalPos = e.position(); var b = a.originalEvent, c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b]; d.touch.start.x = c[0].pageX, d.touch.start.y = c[0].pageY, d.viewport.get(0).setPointerCapture && (d.pointerId = b.pointerId, d.viewport.get(0).setPointerCapture(d.pointerId)), d.viewport.bind("touchmove MSPointerMove pointermove", Q), d.viewport.bind("touchend MSPointerUp pointerup", R), d.viewport.bind("MSPointerCancel pointercancel", P) } }, P = function (a) { t(d.touch.originalPos.left, "reset", 0), d.controls.el.removeClass("disabled"), d.viewport.unbind("MSPointerCancel pointercancel", P), d.viewport.unbind("touchmove MSPointerMove pointermove", Q), d.viewport.unbind("touchend MSPointerUp pointerup", R), d.viewport.get(0).releasePointerCapture && d.viewport.get(0).releasePointerCapture(d.pointerId) }, Q = function (a) { var b = a.originalEvent, c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b], e = Math.abs(c[0].pageX - d.touch.start.x), f = Math.abs(c[0].pageY - d.touch.start.y), g = 0, h = 0; 3 * e > f && d.settings.preventDefaultSwipeX ? a.preventDefault() : 3 * f > e && d.settings.preventDefaultSwipeY && a.preventDefault(), "fade" !== d.settings.mode && d.settings.oneToOneTouch && ("horizontal" === d.settings.mode ? (h = c[0].pageX - d.touch.start.x, g = d.touch.originalPos.left + h) : (h = c[0].pageY - d.touch.start.y, g = d.touch.originalPos.top + h), t(g, "reset", 0)) }, R = function (a) { d.viewport.unbind("touchmove MSPointerMove pointermove", Q), d.controls.el.removeClass("disabled"); var b = a.originalEvent, c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b], f = 0, g = 0; d.touch.end.x = c[0].pageX, d.touch.end.y = c[0].pageY, "fade" === d.settings.mode ? (g = Math.abs(d.touch.start.x - d.touch.end.x), g >= d.settings.swipeThreshold && (d.touch.start.x > d.touch.end.x ? e.goToNextSlide() : e.goToPrevSlide(), e.stopAuto())) : ("horizontal" === d.settings.mode ? (g = d.touch.end.x - d.touch.start.x, f = d.touch.originalPos.left) : (g = d.touch.end.y - d.touch.start.y, f = d.touch.originalPos.top), !d.settings.infiniteLoop && (0 === d.active.index && g > 0 || d.active.last && 0 > g) ? t(f, "reset", 200) : Math.abs(g) >= d.settings.swipeThreshold ? (0 > g ? e.goToNextSlide() : e.goToPrevSlide(), e.stopAuto()) : t(f, "reset", 200)), d.viewport.unbind("touchend MSPointerUp pointerup", R), d.viewport.get(0).releasePointerCapture && d.viewport.get(0).releasePointerCapture(d.pointerId) }, S = function (b) { if (d.initialized) if (d.working) window.setTimeout(S, 10); else { var c = a(window).width(), h = a(window).height(); (f !== c || g !== h) && (f = c, g = h, e.redrawSlider(), d.settings.onSliderResize.call(e, d.active.index)) } }, T = function (a) { var b = p(); d.settings.ariaHidden && !d.settings.ticker && (d.children.attr("aria-hidden", "true"), d.children.slice(a, a + b).attr("aria-hidden", "false")) }, U = function (a) { return 0 > a ? d.settings.infiniteLoop ? q() - 1 : d.active.index : a >= q() ? d.settings.infiniteLoop ? 0 : d.active.index : a }; return e.goToSlide = function (b, c) { var f, g, h, i, j = !0, k = 0, l = { left: 0, top: 0 }, n = null; if (d.oldIndex = d.active.index, d.active.index = U(b), !d.working && d.active.index !== d.oldIndex) { if (d.working = !0, j = d.settings.onSlideBefore.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index), "undefined" != typeof j && !j) return d.active.index = d.oldIndex, void (d.working = !1); "next" === c ? d.settings.onSlideNext.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index) || (j = !1) : "prev" === c && (d.settings.onSlidePrev.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index) || (j = !1)), d.active.last = d.active.index >= q() - 1, (d.settings.pager || d.settings.pagerCustom) && E(d.active.index), d.settings.controls && H(), "fade" === d.settings.mode ? (d.settings.adaptiveHeight && d.viewport.height() !== m() && d.viewport.animate({ height: m() }, d.settings.adaptiveHeightSpeed), d.children.filter(":visible").fadeOut(d.settings.speed).css({ zIndex: 0 }), d.children.eq(d.active.index).css("zIndex", d.settings.slideZIndex + 1).fadeIn(d.settings.speed, function () { a(this).css("zIndex", d.settings.slideZIndex), F() })) : (d.settings.adaptiveHeight && d.viewport.height() !== m() && d.viewport.animate({ height: m() }, d.settings.adaptiveHeightSpeed), !d.settings.infiniteLoop && d.carousel && d.active.last ? "horizontal" === d.settings.mode ? (n = d.children.eq(d.children.length - 1), l = n.position(), k = d.viewport.width() - n.outerWidth()) : (f = d.children.length - d.settings.minSlides, l = d.children.eq(f).position()) : d.carousel && d.active.last && "prev" === c ? (g = 1 === d.settings.moveSlides ? d.settings.maxSlides - r() : (q() - 1) * r() - (d.children.length - d.settings.maxSlides), n = e.children(".bx-clone").eq(g), l = n.position()) : "next" === c && 0 === d.active.index ? (l = e.find("> .bx-clone").eq(d.settings.maxSlides).position(), d.active.last = !1) : b >= 0 && (i = b * parseInt(r()), l = d.children.eq(i).position()), "undefined" != typeof l ? (h = "horizontal" === d.settings.mode ? -(l.left - k) : -l.top, t(h, "slide", d.settings.speed)) : d.working = !1), d.settings.ariaHidden && T(d.active.index * r()) } }, e.goToNextSlide = function () { if (d.settings.infiniteLoop || !d.active.last) { var a = parseInt(d.active.index) + 1; e.goToSlide(a, "next") } }, e.goToPrevSlide = function () { if (d.settings.infiniteLoop || 0 !== d.active.index) { var a = parseInt(d.active.index) - 1; e.goToSlide(a, "prev") } }, e.startAuto = function (a) { d.interval || (d.interval = setInterval(function () { "next" === d.settings.autoDirection ? e.goToNextSlide() : e.goToPrevSlide() }, d.settings.pause), d.settings.autoControls && a !== !0 && G("stop")) }, e.stopAuto = function (a) { d.interval && (clearInterval(d.interval), d.interval = null, d.settings.autoControls && a !== !0 && G("start")) }, e.getCurrentSlide = function () { return d.active.index }, e.getCurrentSlideElement = function () { return d.children.eq(d.active.index) }, e.getSlideElement = function (a) { return d.children.eq(a) }, e.getSlideCount = function () { return d.children.length }, e.isWorking = function () { return d.working }, e.redrawSlider = function () { d.children.add(e.find(".bx-clone")).outerWidth(o()), d.viewport.css("height", m()), d.settings.ticker || s(), d.active.last && (d.active.index = q() - 1), d.active.index >= q() && (d.active.last = !0), d.settings.pager && !d.settings.pagerCustom && (u(), E(d.active.index)), d.settings.ariaHidden && T(d.active.index * r()) }, e.destroySlider = function () { d.initialized && (d.initialized = !1, a(".bx-clone", this).remove(), d.children.each(function () { void 0 !== a(this).data("origStyle") ? a(this).attr("style", a(this).data("origStyle")) : a(this).removeAttr("style") }), void 0 !== a(this).data("origStyle") ? this.attr("style", a(this).data("origStyle")) : a(this).removeAttr("style"), a(this).unwrap().unwrap(), d.controls.el && d.controls.el.remove(), d.controls.next && d.controls.next.remove(), d.controls.prev && d.controls.prev.remove(), d.pagerEl && d.settings.controls && !d.settings.pagerCustom && d.pagerEl.remove(), a(".bx-caption", this).remove(), d.controls.autoEl && d.controls.autoEl.remove(), clearInterval(d.interval), d.settings.responsive && a(window).unbind("resize", S), d.settings.keyboardEnabled && a(document).unbind("keydown", M), a(this).removeData("bxSlider")) }, e.reloadSlider = function (b) { void 0 !== b && (c = b), e.destroySlider(), h(), a(e).data("bxSlider", this) }, h(), a(e).data("bxSlider", this), this } } }(jQuery);

/*
 arcticModal — jQuery plugin
 Version: 0.3
 Author: Sergey Predvoditelev (sergey.predvoditelev@gmail.com)
 Company: Arctic Laboratory (http://arcticlab.ru/)
 Docs & Examples: http://arcticlab.ru/arcticmodal/
 */
!function (e) { var o = { type: "html", content: "", url: "", ajax: {}, ajax_request: null, closeOnEsc: !0, closeOnOverlayClick: !0, clone: !1, overlay: { block: void 0, tpl: '<div class="arcticmodal-overlay"></div>', css: { backgroundColor: "#000", opacity: .6 } }, container: { block: void 0, tpl: '<div class="arcticmodal-container"><table class="arcticmodal-container_i"><tr><td class="arcticmodal-container_i2"></td></tr></table></div>' }, wrap: void 0, body: void 0, errors: { tpl: '<div class="arcticmodal-error arcticmodal-close"></div>', autoclose_delay: 2e3, ajax_unsuccessful_load: "Error" }, openEffect: { type: "fade", speed: 400 }, closeEffect: { type: "fade", speed: 400 }, beforeOpen: e.noop, afterOpen: e.noop, beforeClose: e.noop, afterClose: e.noop, afterLoading: e.noop, afterLoadingOnShow: e.noop, errorLoading: e.noop }, a = 0, r = e([]), t = { isEventOut: function (o, a) { var r = !0; return e(o).each(function () { e(a.target).get(0) == e(this).get(0) && (r = !1), 0 == e(a.target).closest("HTML", e(this).get(0)).length && (r = !1) }), r } }, c = { getParentEl: function (o) { var a = e(o); return a.data("arcticmodal") ? a : (a = e(o).closest(".arcticmodal-container").data("arcticmodalParentEl"), a ? a : !1) }, transition: function (o, a, r, t) { switch (t = void 0 == t ? e.noop : t, r.type) { case "fade": "show" == a ? o.fadeIn(r.speed, t) : o.fadeOut(r.speed, t); break; case "none": "show" == a ? o.show() : o.hide(), t() } }, prepare_body: function (o, a) { e(".arcticmodal-close", o.body).unbind("click.arcticmodal").bind("click.arcticmodal", function () { return a.arcticmodal("close"), !1 }) }, init_el: function (o, i) { var l = o.data("arcticmodal"); if (!l) { if (l = i, a++, l.modalID = a, l.overlay.block = e(l.overlay.tpl), l.overlay.block.css(l.overlay.css), l.container.block = e(l.container.tpl), l.body = e(".arcticmodal-container_i2", l.container.block), i.clone ? l.body.html(o.clone(!0)) : (o.before('<div id="arcticmodalReserve' + l.modalID + '" style="display: none" />'), l.body.html(o)), c.prepare_body(l, o), l.closeOnOverlayClick && l.overlay.block.add(l.container.block).click(function (a) { t.isEventOut(e(">*", l.body), a) && o.arcticmodal("close") }), l.container.block.data("arcticmodalParentEl", o), o.data("arcticmodal", l), r = e.merge(r, o), e.proxy(n.show, o)(), "html" == l.type) return o; if (void 0 != l.ajax.beforeSend) { var d = l.ajax.beforeSend; delete l.ajax.beforeSend } if (void 0 != l.ajax.success) { var s = l.ajax.success; delete l.ajax.success } if (void 0 != l.ajax.error) { var f = l.ajax.error; delete l.ajax.error } var u = e.extend(!0, { url: l.url, beforeSend: function () { void 0 == d ? l.body.html('<div class="arcticmodal-loading" />') : d(l, o) }, success: function (e) { o.trigger("afterLoading"), l.afterLoading(l, o, e), void 0 == s ? l.body.html(e) : s(l, o, e), c.prepare_body(l, o), o.trigger("afterLoadingOnShow"), l.afterLoadingOnShow(l, o, e) }, error: function () { o.trigger("errorLoading"), l.errorLoading(l, o), void 0 == f ? (l.body.html(l.errors.tpl), e(".arcticmodal-error", l.body).html(l.errors.ajax_unsuccessful_load), e(".arcticmodal-close", l.body).click(function () { return o.arcticmodal("close"), !1 }), l.errors.autoclose_delay && setTimeout(function () { o.arcticmodal("close") }, l.errors.autoclose_delay)) : f(l, o) } }, l.ajax); l.ajax_request = e.ajax(u), o.data("arcticmodal", l) } }, init: function (a) { if (a = e.extend(!0, {}, o, a), !e.isFunction(this)) return this.each(function () { c.init_el(e(this), e.extend(!0, {}, a)) }); if (void 0 == a) return void e.error("jquery.arcticmodal: Uncorrect parameters"); if ("" == a.type) return void e.error('jquery.arcticmodal: Don\'t set parameter "type"'); switch (a.type) { case "html": if ("" == a.content) return void e.error('jquery.arcticmodal: Don\'t set parameter "content"'); var r = a.content; return a.content = "", c.init_el(e(r), a); case "ajax": return "" == a.url ? void e.error('jquery.arcticmodal: Don\'t set parameter "url"') : c.init_el(e("<div />"), a) } } }, n = { show: function () { var o = c.getParentEl(this); if (o === !1) return void e.error("jquery.arcticmodal: Uncorrect call"); var a = o.data("arcticmodal"); if (a.overlay.block.hide(), a.container.block.hide(), e("BODY").append(a.overlay.block), e("BODY").append(a.container.block), a.beforeOpen(a, o), o.trigger("beforeOpen"), "hidden" != a.wrap.css("overflow")) { a.wrap.data("arcticmodalOverflow", a.wrap.css("overflow")); var t = a.wrap.outerWidth(!0); a.wrap.css("overflow", "hidden"); var n = a.wrap.outerWidth(!0); n != t && a.wrap.css("marginRight", n - t + "px") } return r.not(o).each(function () { var o = e(this).data("arcticmodal"); o.overlay.block.hide() }), c.transition(a.overlay.block, "show", r.length > 1 ? { type: "none" } : a.openEffect), c.transition(a.container.block, "show", r.length > 1 ? { type: "none" } : a.openEffect, function () { a.afterOpen(a, o), o.trigger("afterOpen") }), o }, close: function () { return e.isFunction(this) ? void r.each(function () { e(this).arcticmodal("close") }) : this.each(function () { var o = c.getParentEl(this); if (o === !1) return void e.error("jquery.arcticmodal: Uncorrect call"); var a = o.data("arcticmodal"); a.beforeClose(a, o) !== !1 && (o.trigger("beforeClose"), r.not(o).last().each(function () { var o = e(this).data("arcticmodal"); o.overlay.block.show() }), c.transition(a.overlay.block, "hide", r.length > 1 ? { type: "none" } : a.closeEffect), c.transition(a.container.block, "hide", r.length > 1 ? { type: "none" } : a.closeEffect, function () { a.afterClose(a, o), o.trigger("afterClose"), a.clone || e("#arcticmodalReserve" + a.modalID).replaceWith(a.body.find(">*")), a.overlay.block.remove(), a.container.block.remove(), o.data("arcticmodal", null), e(".arcticmodal-container").length || (a.wrap.data("arcticmodalOverflow") && a.wrap.css("overflow", a.wrap.data("arcticmodalOverflow")), a.wrap.css("marginRight", 0)) }), "ajax" == a.type && a.ajax_request.abort(), r = r.not(o)) }) }, setDefault: function (a) { e.extend(!0, o, a) } }; e(function () { o.wrap = e(document.all && !document.querySelector ? "html" : "body") }), e(document).bind("keyup.arcticmodal", function (e) { var o = r.last(); if (o.length) { var a = o.data("arcticmodal"); a.closeOnEsc && 27 === e.keyCode && o.arcticmodal("close") } }), e.arcticmodal = e.fn.arcticmodal = function (o) { return n[o] ? n[o].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof o && o ? void e.error("jquery.arcticmodal: Method " + o + " does not exist") : c.init.apply(this, arguments) } }(jQuery);

/* Selectric v1.9.5 (2016-02-26) - git.io/tjl9sQ - Copyright (c) 2016 Leonardo Santos - Dual licensed: MIT/GPL */
!function (e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function (t, o) { return void 0 === o && (o = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(o), o } : e(jQuery) }(function (e) { "use strict"; var t = "selectric", o = "Input Items Open Disabled TempShow HideSelect Wrapper Hover Responsive Above Scroll Group GroupLabel", i = ".sl", s = { onChange: function (t) { e(t).change() }, maxHeight: 300, keySearchTimeout: 500, arrowButtonMarkup: '<b class="button">&#x25be;</b>', disableOnMobile: !0, openOnHover: !1, hoverIntentTimeout: 500, expandToItemText: !1, responsive: !1, preventWindowScroll: !0, inheritOriginalWidth: !1, allowWrap: !0, customClass: { prefix: t, camelCase: !1, overwrite: !0 }, optionsItemBuilder: "{text}", labelBuilder: "{text}" }, n = { add: function (e, t, o) { this[e] || (this[e] = {}), this[e][t] = o }, remove: function (e, t) { delete this[e][t] } }, l = { replaceDiacritics: function (e) { for (var t = "40-46 50-53 54-57 62-70 71-74 61 47 77".replace(/\d+/g, "\\3$&").split(" "), o = t.length; o--;) e = e.toLowerCase().replace(RegExp("[" + t[o] + "]", "g"), "aeiouncy".charAt(o)); return e }, format: function (e) { var t = arguments; return ("" + e).replace(/{(\d+|(\w+))}/g, function (e, o, i) { return i && t[1] ? t[1][i] : t[o] }) }, nextEnabledItem: function (e, t) { for (; e[t = (t + 1) % e.length].disabled;); return t }, previousEnabledItem: function (e, t) { for (; e[t = (t > 0 ? t : e.length) - 1].disabled;); return t }, toDash: function (e) { return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() }, triggerCallback: function (o, i) { var s = i.element, a = i.options["on" + o]; e.isFunction(a) && a.call(s, s, i), n[o] && e.each(n[o], function () { this.call(s, s, i) }), e(s).trigger(t + "-" + l.toDash(o), i) } }, a = e(document), r = e(window), c = function (n, c) { function d(t) { if (A.options = e.extend(!0, {}, s, A.options, t), A.classes = {}, A.element = n, l.triggerCallback("BeforeInit", A), A.options.disableOnMobile && R) return void (A.disableOnMobile = !0); C(!0); var i = A.options.customClass, a = o.split(" "), r = $.width(); e.each(a, function (e, t) { var o = i.prefix + "-" + t; A.classes[t.toLowerCase()] = i.camelCase ? o : l.toDash(o) }), x = e("<input/>", { "class": A.classes.input, readonly: R }), k = e("<div/>", { "class": A.classes.items, tabindex: -1 }), T = e("<div/>", { "class": A.classes.scroll }), y = e("<div/>", { "class": i.prefix, html: A.options.arrowButtonMarkup }), D = e('<p class="label"/>'), I = $.wrap("<div>").parent().append(y.prepend(D), k, x), q = { open: m, close: g, destroy: C, refresh: u, init: d }, $.on(q).wrap('<div class="' + A.classes.hideselect + '">'), e.extend(A, q), E = A.options.labelBuilder, A.options.inheritOriginalWidth && r > 0 && I.width(r), p() } function p() { A.items = []; var t = $.children(), o = "<ul>", s = $.find("option"), n = s.index(s.filter(":selected")), a = 0; B = S = ~n ? n : 0, (M = t.length) && (t.each(function () { function t() { var t = e(this), i = t.html(), s = t.prop("disabled"), n = A.options.optionsItemBuilder; A.items[a] = { element: t, value: t.val(), text: i, slug: l.replaceDiacritics(i), disabled: s }, o += l.format('<li data-index="{1}" class="{2}">{3}</li>', a, e.trim([a == B ? "selected" : "", a == M - 1 ? "last" : "", s ? "disabled" : ""].join(" ")), e.isFunction(n) ? n(A.items[a], t, a) : l.format(n, A.items[a])), a++ } var i = e(this); if (i.is("optgroup")) { var s = i.prop("disabled"), n = i.children(); o += l.format('<ul class="{1}"><li class="{2}">{3}</li>', e.trim([A.classes.group, s ? "disabled" : "", i.prop("class")].join(" ")), A.classes.grouplabel, i.prop("label")), s && n.prop("disabled", !0), n.each(t), o += "</ul>" } else t.call(i) }), k.append(T.html(o + "</ul>")), D.html(e.isFunction(E) ? E(A.items[B]) : l.format(E, A.items[B]))), y.add($).add(I).add(x).off(i), I.prop("class", [A.classes.wrapper, A.options.customClass.overwrite ? $.prop("class").replace(/\S+/g, A.options.customClass.prefix + "-$&") : $.prop("class"), A.options.responsive ? A.classes.responsive : ""].join(" ")), $.prop("disabled") ? (I.addClass(A.classes.disabled), x.prop("disabled", !0)) : (L = !0, I.removeClass(A.classes.disabled).on("mouseenter" + i + " mouseleave" + i, function (t) { e(this).toggleClass(A.classes.hover), A.options.openOnHover && (clearTimeout(A.closeTimer), "mouseleave" == t.type ? A.closeTimer = setTimeout(g, A.options.hoverIntentTimeout) : m()) }), y.on("click" + i, function (e) { F ? g() : m(e) }), x.prop({ tabindex: Y, disabled: !1 }).on("keypress" + i, f).on("keydown" + i, function (e) { f(e), clearTimeout(A.resetStr), A.resetStr = setTimeout(function () { x.val("") }, A.options.keySearchTimeout); var t = e.keyCode || e.which; if (t > 36 && 41 > t) { if (!A.options.allowWrap && (39 > t && 0 == S || t > 38 && S + 1 == A.items.length)) return; b(l[(39 > t ? "previous" : "next") + "EnabledItem"](A.items, S)) } }).on("focusin" + i, function (e) { x.one("blur", function () { x.blur() }), F || m(e) }).on("oninput" in x[0] ? "input" : "keyup", function () { x.val().length && e.each(A.items, function (e, t) { return RegExp("^" + x.val(), "i").test(t.slug) && !t.disabled ? (b(e), !1) : void 0 }) }), $.prop("tabindex", !1), O = e("li", k.removeAttr("style")).on({ mousedown: function (e) { e.preventDefault(), e.stopPropagation() }, click: function () { return b(e(this).data("index"), !0), !1 } }).filter("[data-index]")), l.triggerCallback("Init", A) } function u() { l.triggerCallback("Refresh", A), p() } function f(e) { var t = e.keyCode || e.which; 13 == t && e.preventDefault(), /^(9|13|27)$/.test(t) && (e.stopPropagation(), b(S, !0)) } function h() { var e = k.closest(":visible").children(":hidden").addClass(A.classes.tempshow), t = A.options.maxHeight, o = k.outerWidth(), i = y.outerWidth() - (o - k.width()); !A.options.expandToItemText || i > o ? j = i : (k.css("overflow", "scroll"), I.width(9e4), j = k.width(), k.css("overflow", ""), I.width("")), k.width(j).height() > t && k.height(t), e.removeClass(A.classes.tempshow) } function m(o) { l.triggerCallback("BeforeOpen", A), o && (o.preventDefault(), o.stopPropagation()), L && (h(), e("." + A.classes.hideselect, "." + A.classes.open).children()[t]("close"), F = !0, H = k.outerHeight(), W = k.height(), I.addClass(A.classes.open), x.val("").is(":focus") || x.focus(), a.on("click" + i, g).on("scroll" + i, v), v(), A.options.preventWindowScroll && a.on("mousewheel" + i + " DOMMouseScroll" + i, "." + A.classes.scroll, function (t) { var o = t.originalEvent, i = e(this).scrollTop(), s = 0; "detail" in o && (s = -1 * o.detail), "wheelDelta" in o && (s = o.wheelDelta), "wheelDeltaY" in o && (s = o.wheelDeltaY), "deltaY" in o && (s = -1 * o.deltaY), (i == this.scrollHeight - W && 0 > s || 0 == i && s > 0) && t.preventDefault() }), w(S), l.triggerCallback("Open", A)) } function v() { I.toggleClass(A.classes.above, I.offset().top + I.outerHeight() + H > r.scrollTop() + r.height()) } function g() { if (l.triggerCallback("BeforeClose", A), B != S) { l.triggerCallback("BeforeChange", A); var t = A.items[S].text; $.prop("selectedIndex", B = S).data("value", t), D.html(e.isFunction(E) ? E(A.items[S]) : l.format(E, A.items[S])), l.triggerCallback("Change", A) } a.off(i), I.removeClass(A.classes.open), F = !1, l.triggerCallback("Close", A) } function b(e, t) { void 0 != e && (A.items[e].disabled || (O.removeClass("selected").eq(S = e).addClass("selected"), w(e), t && g())) } function w(e) { var t = O.eq(e).outerHeight(), o = O[e].offsetTop, i = T.scrollTop(), s = o + 2 * t; T.scrollTop(s > i + H ? s - H : i > o - t ? o - t : i) } function C(e) { L && (k.add(y).add(x).remove(), !e && $.removeData(t).removeData("value"), $.prop("tabindex", Y).off(i).off(q).unwrap().unwrap(), L = !1) } var x, k, T, y, D, I, O, S, B, H, W, j, M, q, E, A = this, $ = e(n), F = !1, L = !1, R = /android|ip(hone|od|ad)/i.test(navigator.userAgent), Y = $.prop("tabindex"); d(c) }; e.fn[t] = function (o) { return this.each(function () { var i = e.data(this, t); i && !i.disableOnMobile ? "" + o === o && i[o] ? i[o]() : i.init(o) : e.data(this, t, new c(this, o)) }) }, e.fn[t].hooks = n });

/*
 * verge 1.9.1+201402130803
 * https://github.com/ryanve/verge
 * MIT License 2013 Ryan Van Etten
 */
!function (a, b, c) { "undefined" != typeof module && module.exports ? module.exports = c() : a[b] = c() }(this, "verge", function () { function a() { return { width: k(), height: l() } } function b(a, b) { var c = {}; return b = +b || 0, c.width = (c.right = a.right + b) - (c.left = a.left - b), c.height = (c.bottom = a.bottom + b) - (c.top = a.top - b), c } function c(a, c) { return a = a && !a.nodeType ? a[0] : a, a && 1 === a.nodeType ? b(a.getBoundingClientRect(), c) : !1 } function d(b) { b = null == b ? a() : 1 === b.nodeType ? c(b) : b; var d = b.height, e = b.width; return d = "function" == typeof d ? d.call(b) : d, e = "function" == typeof e ? e.call(b) : e, e / d } var e = {}, f = "undefined" != typeof window && window, g = "undefined" != typeof document && document, h = g && g.documentElement, i = f.matchMedia || f.msMatchMedia, j = i ? function (a) { return !!i.call(f, a).matches } : function () { return !1 }, k = e.viewportW = function () { var a = h.clientWidth, b = f.innerWidth; return b > a ? b : a }, l = e.viewportH = function () { var a = h.clientHeight, b = f.innerHeight; return b > a ? b : a }; return e.mq = j, e.matchMedia = i ? function () { return i.apply(f, arguments) } : function () { return {} }, e.viewport = a, e.scrollX = function () { return f.pageXOffset || h.scrollLeft }, e.scrollY = function () { return f.pageYOffset || h.scrollTop }, e.rectangle = c, e.aspect = d, e.inX = function (a, b) { var d = c(a, b); return !!d && d.right >= 0 && d.left <= k() }, e.inY = function (a, b) { var d = c(a, b); return !!d && d.bottom >= 0 && d.top <= l() }, e.inViewport = function (a, b) { var d = c(a, b); return !!d && d.bottom >= 0 && d.right >= 0 && d.top <= l() && d.left <= k() }, e });
jQuery.extend(verge);
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
    // Staff-slider
    //---------------------------------------------------------------------------------------
    function initStaffSlider() {
        //var $slider = $('.js-staff');
        //$slider.bxSlider({
        //    auto: false,
        //    pager: true,
        //    slideMargin: 10,
        //    //nextSelector: $('.js-staff-next'),
        //    //prevSelector: $('.js-staff-prev'),
        //    //nextText: '',
        //    //prevText:'',
        //});
        //$('.js-staff').bxSlider({
        //    //auto: false,
        //    //pager: true
        //});
        var $slider = $('.js-staff');
        $slider.bxSlider({
            auto: false,
            pager: true,
            slideMargin: 10,
            nextSelector: $('.js-staff-next'),
            prevSelector: $('.js-staff-prev'),
            nextText: '',
            prevText:'',
        });
    }
    if ($('.js-staff').length) {
        initStaffSlider();
    }


    //
    // Если браузер не знает о плейсхолдерах в формах
    //---------------------------------------------------------------------------------------
    if ($('html').hasClass('no-placeholder')) {
        /* Placeholders.js v4.0.1 */
        !function (a) { "use strict"; function b() { } function c() { try { return document.activeElement } catch (a) { } } function d(a, b) { for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return !0; return !1 } function e(a, b, c) { return a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : void 0 } function f(a, b) { var c; a.createTextRange ? (c = a.createTextRange(), c.move("character", b), c.select()) : a.selectionStart && (a.focus(), a.setSelectionRange(b, b)) } function g(a, b) { try { return a.type = b, !0 } catch (c) { return !1 } } function h(a, b) { if (a && a.getAttribute(B)) b(a); else for (var c, d = a ? a.getElementsByTagName("input") : N, e = a ? a.getElementsByTagName("textarea") : O, f = d ? d.length : 0, g = e ? e.length : 0, h = f + g, i = 0; h > i; i++) c = f > i ? d[i] : e[i - f], b(c) } function i(a) { h(a, k) } function j(a) { h(a, l) } function k(a, b) { var c = !!b && a.value !== b, d = a.value === a.getAttribute(B); if ((c || d) && "true" === a.getAttribute(C)) { a.removeAttribute(C), a.value = a.value.replace(a.getAttribute(B), ""), a.className = a.className.replace(A, ""); var e = a.getAttribute(I); parseInt(e, 10) >= 0 && (a.setAttribute("maxLength", e), a.removeAttribute(I)); var f = a.getAttribute(D); return f && (a.type = f), !0 } return !1 } function l(a) { var b = a.getAttribute(B); if ("" === a.value && b) { a.setAttribute(C, "true"), a.value = b, a.className += " " + z; var c = a.getAttribute(I); c || (a.setAttribute(I, a.maxLength), a.removeAttribute("maxLength")); var d = a.getAttribute(D); return d ? a.type = "text" : "password" === a.type && g(a, "text") && a.setAttribute(D, "password"), !0 } return !1 } function m(a) { return function () { P && a.value === a.getAttribute(B) && "true" === a.getAttribute(C) ? f(a, 0) : k(a) } } function n(a) { return function () { l(a) } } function o(a) { return function () { i(a) } } function p(a) { return function (b) { return v = a.value, "true" === a.getAttribute(C) && v === a.getAttribute(B) && d(x, b.keyCode) ? (b.preventDefault && b.preventDefault(), !1) : void 0 } } function q(a) { return function () { k(a, v), "" === a.value && (a.blur(), f(a, 0)) } } function r(a) { return function () { a === c() && a.value === a.getAttribute(B) && "true" === a.getAttribute(C) && f(a, 0) } } function s(a) { var b = a.form; b && "string" == typeof b && (b = document.getElementById(b), b.getAttribute(E) || (e(b, "submit", o(b)), b.setAttribute(E, "true"))), e(a, "focus", m(a)), e(a, "blur", n(a)), P && (e(a, "keydown", p(a)), e(a, "keyup", q(a)), e(a, "click", r(a))), a.setAttribute(F, "true"), a.setAttribute(B, T), (P || a !== c()) && l(a) } var t = document.createElement("input"), u = void 0 !== t.placeholder; if (a.Placeholders = { nativeSupport: u, disable: u ? b : i, enable: u ? b : j }, !u) { var v, w = ["text", "search", "url", "tel", "email", "password", "number", "textarea"], x = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46], y = "#ccc", z = "placeholdersjs", A = new RegExp("(?:^|\\s)" + z + "(?!\\S)"), B = "data-placeholder-value", C = "data-placeholder-active", D = "data-placeholder-type", E = "data-placeholder-submit", F = "data-placeholder-bound", G = "data-placeholder-focus", H = "data-placeholder-live", I = "data-placeholder-maxlength", J = 100, K = document.getElementsByTagName("head")[0], L = document.documentElement, M = a.Placeholders, N = document.getElementsByTagName("input"), O = document.getElementsByTagName("textarea"), P = "false" === L.getAttribute(G), Q = "false" !== L.getAttribute(H), R = document.createElement("style"); R.type = "text/css"; var S = document.createTextNode("." + z + " {color:" + y + ";}"); R.styleSheet ? R.styleSheet.cssText = S.nodeValue : R.appendChild(S), K.insertBefore(R, K.firstChild); for (var T, U, V = 0, W = N.length + O.length; W > V; V++) U = V < N.length ? N[V] : O[V - N.length], T = U.attributes.placeholder, T && (T = T.nodeValue, T && d(w, U.type) && s(U)); var X = setInterval(function () { for (var a = 0, b = N.length + O.length; b > a; a++) U = a < N.length ? N[a] : O[a - N.length], T = U.attributes.placeholder, T ? (T = T.nodeValue, T && d(w, U.type) && (U.getAttribute(F) || s(U), (T !== U.getAttribute(B) || "password" === U.type && !U.getAttribute(D)) && ("password" === U.type && !U.getAttribute(D) && g(U, "text") && U.setAttribute(D, "password"), U.value === U.getAttribute(B) && (U.value = T), U.setAttribute(B, T)))) : U.getAttribute(C) && (k(U), U.removeAttribute(B)); Q || clearInterval(X) }, J); e(a, "beforeunload", function () { M.disable() }) } }(this);
    };
});

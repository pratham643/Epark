(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[95], {
    19399: function(t, e, n) {
        "use strict";
        var r, l = n(67294);
        function a() {
            return (a = Object.assign ? Object.assign.bind() : function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            }
            ).apply(this, arguments)
        }
        e.Z = function(t) {
            return l.createElement("svg", a({
                width: 16,
                height: 16,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), r || (r = l.createElement("path", {
                d: "M16 1.611L14.389 0 8 6.389 1.611 0 0 1.611 6.389 8 0 14.389 1.611 16 8 9.611 14.389 16 16 14.389 9.611 8 16 1.611z",
                fill: "#000"
            })))
        }
    },
    66238: function(t, e, n) {
        "use strict";
        n.d(e, {
            Z: function() {
                return u
            }
        });
        var r, l = n(85893);
        n(67294);
        var a, o = n(21803), _ = n.n(o), i = n(84269), b = n(32408);
        (a = r || (r = {}))[a.Default = 0] = "Default",
        a[a.White = 1] = "White",
        a[a.Arrow = 2] = "Arrow";
        var u = function(t) {
            var e = t.showBackBtn
              , n = t.title
              , a = t.titleColor
              , o = t.titleSize
              , u = t.children
              , s = t.onBack
              , c = t.customStyle
              , d = t.customChildrenStyle
              , g = t.backBtnType
              , f = void 0 === g ? r.Default : g
              , p = t.showTitle
              , h = function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                s ? s() : (0,
                i.kd)()
            }
              , m = "default";
            switch (f) {
            case r.Default:
                m = "default";
                break;
            case r.White:
                m = "white";
                break;
            case r.Arrow:
            default:
                m = "default"
            }
            return (0,
            l.jsxs)("div", {
                className: _().bar,
                style: void 0 === c ? null : c,
                children: [(void 0 === p || p) && (0,
                l.jsxs)("div", {
                    className: _().left,
                    children: [(void 0 === e || e) && (0,
                    l.jsx)(b.Z, {
                        onBack: h,
                        type: m
                    }), (0,
                    l.jsx)("h4", {
                        className: _().title,
                        style: {
                            color: void 0 === a ? "#000000" : a,
                            fontSize: void 0 === o ? "14px" : o
                        },
                        children: n
                    })]
                }), (0,
                l.jsx)("div", {
                    className: _().children,
                    style: void 0 === d ? null : d,
                    children: u
                })]
            })
        }
    },
    32408: function(t, e, n) {
        "use strict";
        n.d(e, {
            Z: function() {
                return k
            }
        });
        var r, l, a = n(14924), o = n(828), _ = n(85893), i = n(67294), b = n(94184), u = n.n(b);
        function s() {
            return (s = Object.assign ? Object.assign.bind() : function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var c = function(t) {
            return i.createElement("svg", s({
                width: 8,
                height: 13,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), r || (r = i.createElement("path", {
                d: "M7.41 11.331l-4.58-4.59 4.58-4.59L6 .741l-6 6 6 6 1.41-1.41z",
                fill: "#00163E"
            })))
        };
        function d() {
            return (d = Object.assign ? Object.assign.bind() : function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var g = function(t) {
            return i.createElement("svg", d({
                width: 16,
                height: 16,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), l || (l = i.createElement("path", {
                d: "M11.41 12.59L6.83 8l4.58-4.59L10 2 4 8l6 6 1.41-1.41z",
                fill: "#fff"
            })))
        }
          , f = n(49325)
          , p = n.n(f)
          , h = n(84269)
          , m = n(97461);
        function k(t) {
            var e, n = t.onBack, r = t.type, l = void 0 === r ? "default" : r, b = t.children, s = t.customStyle, d = t.noPadding, f = function(t) {
                n ? n(t) : (0,
                h.kd)()
            }, k = (0,
            o.Z)(i.useState(!1), 2), y = k[0], w = k[1], v = i.useRef(), x = i.useRef();
            return (i.useEffect(function() {
                w(!0)
            }, []),
            i.useEffect(function() {
                if (y) {
                    var t, e = (0,
                    m.PH)();
                    x.current = e,
                    null == v || null === (t = v.current) || void 0 === t || t.classList.add(e)
                }
                return function() {
                    x && (0,
                    m.FO)(x.current)
                }
            }, [y]),
            y) ? (0,
            _.jsxs)("button", {
                ref: v,
                type: "button",
                className: u()("cmn_touchable_area", (e = {},
                (0,
                a.Z)(e, p().back, "hidden" !== l && !(void 0 !== d && d)),
                (0,
                a.Z)(e, "cmn_hide", "hidden" === l),
                e)),
                style: s,
                onClick: f,
                children: [b && b, !b && (0,
                _.jsxs)(_.Fragment, {
                    children: ["default" === l && (0,
                    _.jsx)(c, {
                        className: p().backIcon
                    }), "white" === l && (0,
                    _.jsx)(g, {
                        className: p().backIcon
                    }), "arrow" === l && (0,
                    _.jsx)(c, {
                        className: p().backIcon
                    }), "hidden" === l && (0,
                    _.jsx)("span", {})]
                })]
            }) : null
        }
    },
    84269: function(t, e, n) {
        "use strict";
        n.d(e, {
            O8: function() {
                return i
            },
            kd: function() {
                return b
            }
        }),
        n(27484);
        var r = n(44572)
          , l = n(45606)
          , a = n(97461)
          , o = n(37266)
          , _ = n(69416);
        function i() {
            return Object.fromEntries(new URLSearchParams(window.location.search).entries())
        }
        function b() {
            if ((0,
            r.iF)()) {
                var t = null === n.g || void 0 === n.g ? void 0 : n.g.sessionStorage.getItem(_.x.InitialPagePath);
                n.g.location.pathname === t ? ((0,
                l.r)(),
                (0,
                a.Wm)(o.DR)) : window.history.back()
            } else
                window.history.back()
        }
    },
    13948: function(t, e, n) {
        "use strict";
        n.d(e, {
            J: function() {
                return u
            }
        });
        var r = n(85893);
        n(67294);
        var l = n(45697)
          , a = n.n(l)
          , o = n(94184)
          , _ = n.n(o)
          , i = n(78208)
          , b = n.n(i)
          , u = {
            default: "default",
            grey: "grey",
            blue: "blue",
            white: "white",
            orange: "orange",
            transparentBlue: "transparent-blue",
            transparentRed: "transparent-red",
            blueText: "blue-text",
            blackText: "black-text",
            blueGradient: "blue-gradient",
            lightBlue: "light-blue",
            lightRed: "light-red",
            lightGreen: "light-green",
            plainBlackText: "plain-black-text",
            blueBorder: "blue-border",
            black: "black",
            redBorder: "red-border",
            darkRed: "dark-red",
            fadedGreen: "faded-green",
            darkBlue: "dark-blue",
            green: "green",
            red: "red",
            blueArrow: "blue-arrow",
            blackArrow: "black-arrow",
            greyBlue: "grey-blue",
            primary: "primary",
            lightBlueV2: "light-blue-v2",
            mgBlack: "mg-black",
            mgGreyBorder: "mg-grey-border"
        }
          , s = function(t) {
            var e = t.size
              , n = t.type
              , l = t.isLoading
              , a = t.isDisabled
              , o = t.customStyle
              , i = t.onClick
              , u = t.label
              , s = t.btnType
              , c = t.isRound
              , d = t.labelStyle
              , g = t.fullWidth;
            return (0,
            r.jsx)("button", {
                type: s,
                className: _()(b().btn, b()["btn_size_".concat(e)], b()["".concat(n, "_btn")], {
                    loading_btn: l,
                    disabled_btn: a,
                    round_btn: c,
                    full_width: g
                }),
                disabled: a,
                style: o,
                onClick: i || null,
                children: l ? (0,
                r.jsx)("img", {
                    className: "loading_icon",
                    src: "/img/loading.svg",
                    alt: "loading"
                }) : "" !== u && (0,
                r.jsx)("span", {
                    className: b().label,
                    style: d,
                    children: u
                })
            })
        };
        s.propTypes = {
            type: a().oneOf([u.default, u.grey, u.blue, u.white, u.green, u.orange, u.transparentBlue, u.transparentRed, u.blueText, u.blackText, u.blueGradient, u.lightBlue, u.lightRed, u.lightGreen, u.plainBlackText, u.blueBorder, u.black, u.redBorder, u.darkRed, u.fadedGreen, u.darkBlue, u.green, u.red, u.blueArrow, u.blackArrow, u.greyBlue, u.primary, u.lightBlueV2, u.mgBlack, u.mgGreyBorder, ]),
            isDisabled: a().bool,
            isLoading: a().bool,
            onClick: a().func,
            size: a().oneOf(["xs", "s", "m", "l", "xl"]),
            label: a().string,
            icon: a().shape({
                show: a().bool,
                name: a().string,
                style: a().objectOf(a().any)
            }),
            postIcon: a().shape({
                show: a().bool,
                name: a().string
            }),
            customStyle: a().objectOf(a().any),
            btnType: a().string,
            isRound: a().bool,
            labelStyle: a().objectOf(a().any),
            fullWidth: a().bool
        },
        s.defaultProps = {
            type: "default",
            isDisabled: !1,
            isLoading: !1,
            onClick: function() {},
            size: "m",
            label: "",
            customStyle: null,
            btnType: "button",
            isRound: !1,
            labelStyle: null,
            fullWidth: !1
        },
        e.Z = s
    },
    24514: function(t, e, n) {
        "use strict";
        n.d(e, {
            dr: function() {
                return a
            },
            gO: function() {
                return l
            },
            uW: function() {
                return r
            }
        });
        var r = "/img/icons/guest-user.svg"
          , l = "/img/AppleAppstore_Button-1@2x-300x92.png"
          , a = "/img/GooglePlayStore_Button-1@2x-300x92.png"
    },
    21803: function(t) {
        t.exports = {
            bar: "TitleBar_bar__pOiBh",
            left: "TitleBar_left__JEPMn",
            title: "TitleBar_title__CSIQc",
            back: "TitleBar_back__WAH_u",
            children: "TitleBar_children__SOjfT",
            placeholderShimmer: "TitleBar_placeholderShimmer__ckvIk",
            "fade-in": "TitleBar_fade-in__6PjnV",
            "right-to-left-page": "TitleBar_right-to-left-page__zOU83",
            "bottom-to-top-page": "TitleBar_bottom-to-top-page__feScX",
            "top-to-bottom-page": "TitleBar_top-to-bottom-page__coekR",
            "scale-small-to-big": "TitleBar_scale-small-to-big__irhVD",
            "overlay-animation": "TitleBar_overlay-animation__kooyk",
            "center-popup": "TitleBar_center-popup__r_NGj"
        }
    },
    49325: function(t) {
        t.exports = {
            back: "BackButton_back__6X7X7"
        }
    },
    78208: function(t) {
        t.exports = {
            btn: "button_btn__gXwui",
            loading_icon: "button_loading_icon__ai7lH",
            pre_icon: "button_pre_icon__gZap3",
            post_icon: "button_post_icon__UxuON",
            icon_sdp: "button_icon_sdp__5sR6x",
            default_btn: "button_default_btn__pxKH2",
            grey_btn: "button_grey_btn__p0w4H",
            orange_btn: "button_orange_btn__8Lm2L",
            black_btn: "button_black_btn__sFzBF",
            blue_btn: "button_blue_btn__WmkDk",
            white_btn: "button_white_btn__XYzDO",
            green_btn: "button_green_btn__r54Hb",
            "blue-text_btn": "button_blue-text_btn__pTXwR",
            "blue-border_btn": "button_blue-border_btn__pweLo",
            "red-border_btn": "button_red-border_btn__pP5l5",
            "black-text_btn": "button_black-text_btn__mibjZ",
            "plain-black-text_btn": "button_plain-black-text_btn__1q7BW",
            "transparent-blue_btn": "button_transparent-blue_btn__QCVXN",
            "transparent-red_btn": "button_transparent-red_btn__uVgf0",
            "blue-gradient_btn": "button_blue-gradient_btn__UBttj",
            "light-blue_btn": "button_light-blue_btn__vwlLS",
            "dark-blue_btn": "button_dark-blue_btn__4P89Z",
            "light-red_btn": "button_light-red_btn__v0nm8",
            "dark-red_btn": "button_dark-red_btn__lu6Mn",
            "light-green_btn": "button_light-green_btn__tWXD9",
            "faded-green_btn": "button_faded-green_btn__1Muy_",
            red_btn: "button_red_btn__WrE3_",
            "blue-arrow_btn": "button_blue-arrow_btn__bNtND",
            "black-arrow_btn": "button_black-arrow_btn__EZic_",
            "light-blue-v2_btn": "button_light-blue-v2_btn__dBMPy",
            "mg-black_btn": "button_mg-black_btn__Y4Lq6",
            label: "button_label__TRhsr",
            "mg-grey-border_btn": "button_mg-grey-border_btn__H7__f",
            disabled_btn: "button_disabled_btn__F0Kzc",
            primary_btn: "button_primary_btn__JCqYy",
            round_btn: "button_round_btn__JNV2A",
            full_width: "button_full_width__ZI58c",
            btn_size_xs: "button_btn_size_xs__jSz2J",
            icon: "button_icon__uyeFy",
            btn_size_s: "button_btn_size_s__CiojN",
            btn_size_m: "button_btn_size_m__WeqpH",
            btn_size_l: "button_btn_size_l__IFUsk",
            btn_size_xl: "button_btn_size_xl__e9Q8W",
            "grey-blue_btn": "button_grey-blue_btn__wzcNt"
        }
    }
}]);
//# sourceMappingURL=95-34be468ed48247f4.js.map

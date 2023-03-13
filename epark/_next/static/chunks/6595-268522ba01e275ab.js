(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6595], {
    6561: function(e, t, n) {
        "use strict";
        var r, a = n(67294);
        function i() {
            return (i = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        t.Z = function(e) {
            return a.createElement("svg", i({
                width: 14,
                height: 14,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), r || (r = a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M13.814.186c.172.173.231.43.15.66L9.51 13.575a.637.637 0 01-1.182.048L5.882 8.118.378 5.672A.636.636 0 01.426 4.49L13.153.036a.636.636 0 01.66.15zM7.123 7.777l1.716 3.861 3.003-8.58-4.72 4.72zm3.819-5.619l-8.58 3.003 3.86 1.716 4.72-4.719z",
                fill: "#fff"
            })))
        }
    },
    32904: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return w
            }
        });
        var r = n(85893)
          , a = n(67294)
          , i = n(36456)
          , c = n(33924)
          , s = n(47568)
          , o = n(14924)
          , l = n(26042)
          , u = n(20414)
          , d = n(25675)
          , m = n.n(d)
          , f = n(94184)
          , _ = n.n(f)
          , p = n(59782)
          , b = n(62327)
          , h = n(6561)
          , v = n(55945)
          , g = n(18854)
          , x = n.n(g)
          , j = function() {
            var e = (0,
            a.useState)(!1)
              , t = e[0]
              , n = e[1];
            (0,
            a.useRef)();
            var d, f = (0,
            i.I0)(), g = (d = (0,
            s.Z)(function(e) {
                var t, r, a;
                return (0,
                u.__generator)(this, function(i) {
                    switch (i.label) {
                    case 0:
                        return n(!0),
                        [4, (0,
                        b.lx)("https://cst.parkplus.io/api/v2/cst/admin_dashboard/general_query/", e)];
                    case 1:
                        return r = (t = i.sent()).response,
                        a = t.error,
                        r && f((0,
                        c.d3)({
                            show: !0,
                            type: "notification",
                            content: {
                                title: "Thanks",
                                description: "We will get back to you soon."
                            },
                            interval: 3e3
                        })),
                        a && (n(!1),
                        f((0,
                        c.d3)({
                            show: !0,
                            type: "error",
                            content: {
                                title: "Oops",
                                description: "Something went wrong."
                            },
                            interval: 3e3
                        }))),
                        [2]
                    }
                })
            }),
            function(e) {
                return d.apply(this, arguments)
            }
            ), j = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all"
                  , n = (0,
                l.Z)({}, e);
                return ("all" === t || "select" === t) && (n.select.err = (0,
                v.aB)(n.select.input).errMsg),
                ("all" === t || "name" === t) && (n.name.err = (0,
                v.aB)(n.name.input).errMsg),
                ("all" === t || "email" === t) && (n.email.err = (0,
                v.aB)(n.email.input).errMsg || (0,
                v.D6)(n.email.input).errMsg),
                ("all" === t || "mobile" === t) && (n.mobile.err = (0,
                v.aB)(n.mobile.input).errMsg || (0,
                v.q$)(n.mobile.input).errMsg),
                n
            }, w = function(e) {
                Object.keys(e).every(function(t) {
                    return "" === e[t].err
                }) && g({
                    question: e.select.input,
                    name: e.name.input,
                    email: e.email.input,
                    contact_no: e.mobile.input,
                    query: e.message.input
                })
            }, y = (0,
            p.Z)(w, j, {
                select: {
                    input: "",
                    err: ""
                },
                name: {
                    input: "",
                    err: ""
                },
                email: {
                    input: "",
                    err: ""
                },
                mobile: {
                    input: "",
                    err: ""
                },
                message: {
                    input: "",
                    err: ""
                }
            }), N = y.form, S = y.handleChange, C = y.handleSubmit;
            return (0,
            r.jsx)("div", {
                className: x().root,
                children: (0,
                r.jsxs)("div", {
                    className: _()(x().container, "cmn_container_no_padding"),
                    children: [(0,
                    r.jsx)("div", {
                        className: x().bg_img,
                        children: (0,
                        r.jsx)(m(), {
                            src: "/img/contact-patterns.png",
                            layout: "fill",
                            objectFit: "cover"
                        })
                    }), (0,
                    r.jsxs)("div", {
                        className: x().content,
                        children: [(0,
                        r.jsx)("h3", {
                            className: x().title,
                            children: "Got a question?"
                        }), (0,
                        r.jsx)("p", {
                            className: x().subtitle,
                            children: "Just leave your email with us and we’ll get back to you shortly!"
                        })]
                    }), (0,
                    r.jsxs)("form", {
                        className: x().form,
                        children: [(0,
                        r.jsxs)("div", {
                            className: x().select_wrapper,
                            children: [(0,
                            r.jsxs)("select", {
                                id: "option",
                                className: x().select,
                                value: N.select.input,
                                onChange: function(e) {
                                    return S("select", e.target.value)
                                },
                                required: !0,
                                children: [(0,
                                r.jsx)("option", {
                                    className: x().option,
                                    value: "",
                                    hidden: !0,
                                    children: "I am looking for"
                                }), (0,
                                r.jsx)("option", {
                                    className: x().option,
                                    value: "Access Control for Society",
                                    children: "Access Control for Society"
                                }), (0,
                                r.jsx)("option", {
                                    className: x().option,
                                    value: "Parking Solution for Commercial Space",
                                    children: "Parking Solution for Commercial Space"
                                })]
                            }), N.select.err && (0,
                            r.jsx)("div", {
                                className: x().err,
                                children: "*Required field"
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            children: [(0,
                            r.jsx)("input", {
                                className: x().input_box,
                                type: "text",
                                placeholder: "Your full name",
                                value: N.name.input,
                                onChange: function(e) {
                                    return S("name", e.target.value)
                                },
                                required: !0
                            }), N.name.err && (0,
                            r.jsx)("div", {
                                className: x().err,
                                children: "*Required field"
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            children: [(0,
                            r.jsx)("input", {
                                className: x().input_box,
                                type: "email",
                                placeholder: "Your email address",
                                value: N.email.input,
                                onChange: function(e) {
                                    return S("email", e.target.value)
                                },
                                required: !0
                            }), N.email.err && (0,
                            r.jsx)("div", {
                                className: x().err,
                                children: "*Invalid email"
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            children: [(0,
                            r.jsx)("input", {
                                className: x().input_box,
                                type: "number",
                                placeholder: "Your mobile number",
                                value: N.mobile.input,
                                onChange: function(e) {
                                    e.target.value.length < 11 && S("mobile", e.target.value)
                                },
                                required: !0
                            }), N.mobile.err && (0,
                            r.jsx)("div", {
                                className: x().err,
                                children: "*Phone number should be 10 digit"
                            })]
                        }), (0,
                        r.jsx)("textarea", {
                            className: x().text_area,
                            placeholder: "Your message",
                            value: N.message.input,
                            onChange: function(e) {
                                return S("message", e.target.value)
                            }
                        }), (0,
                        r.jsx)("div", {
                            className: x().action,
                            children: (0,
                            r.jsxs)("button", {
                                type: "submit",
                                className: _()(x().btn, (0,
                                o.Z)({}, x().disabled_btn, t)),
                                onClick: function(e) {
                                    e.preventDefault(),
                                    C()
                                },
                                disabled: t,
                                children: ["Send", (0,
                                r.jsx)(h.Z, {
                                    className: x().icon
                                })]
                            })
                        })]
                    }), (0,
                    r.jsx)("div", {
                        className: x().img,
                        children: (0,
                        r.jsx)(m(), {
                            src: "/img/contact-illustration.png",
                            layout: "fill",
                            objectFit: "cover",
                            alt: ""
                        })
                    })]
                })
            })
        }
          , w = function() {
            var e = (0,
            i.I0)()
              , t = (0,
            i.v9)(function(e) {
                return e.layout.showContactForm
            })
              , s = function() {
                n.g.scrollY > 400 && !t.show && e((0,
                c.AG)({
                    show: !0
                }))
            };
            return (0,
            a.useEffect)(function() {
                return n.g.window.addEventListener("scroll", s),
                function() {
                    n.g.window.removeEventListener("scroll", s)
                }
            }, []),
            (0,
            r.jsx)("div", {
                id: "contact-us",
                style: {
                    minHeight: "500px"
                },
                children: (null == t ? void 0 : t.show) && (0,
                r.jsx)(j, {})
            })
        }
    },
    59782: function(e, t, n) {
        "use strict";
        var r = n(26042)
          , a = n(67294)
          , i = function(e, t, n) {
            var i = (0,
            a.useState)(n)
              , c = i[0]
              , s = i[1]
              , o = (0,
            a.useState)(!1)
              , l = o[0]
              , u = o[1];
            return {
                handleChange: function(e, n, a) {
                    var i = (0,
                    r.Z)({}, c);
                    i[e].input = n,
                    s(i),
                    l && s(t(c), e)
                },
                handleSubmit: function(r) {
                    r && r.preventDefault();
                    var a = t(c);
                    s(a),
                    u(!0),
                    Object.keys(a).every(function(e) {
                        return "" === a[e].err
                    }) && (e(a),
                    s(n))
                },
                form: c
            }
        };
        t.Z = i
    },
    96749: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return r.O
            }
        });
        var r = n(24436)
    },
    24436: function(e, t, n) {
        "use strict";
        n.d(t, {
            O: function() {
                return a
            }
        });
        var r = n(85893);
        function a(e) {
            var t = e.index
              , n = void 0 === t ? null : t;
            return !1 === n ? (0,
            r.jsx)("meta", {
                name: "robots",
                content: "noindex, nofollow"
            }) : !0 === n ? (0,
            r.jsx)("meta", {
                name: "robots",
                content: "index, follow"
            }) : null
        }
        n(67294),
        t.Z = a
    },
    55208: function(e, t, n) {
        "use strict";
        n.d(t, {
            JY: function() {
                return r
            },
            Mu: function() {
                return a
            },
            f9: function() {
                return i
            }
        });
        var r = function(e) {
            return null != e
        };
        function a(e) {
            return "string" == typeof e && !!e.trim()
        }
        function i(e) {
            var t = {
                isValid: !0,
                trimmedStr: e
            };
            return a(e) ? (t.isValid = !0,
            t.trimmedStr = e.trim()) : (t.isValid = !1,
            t.trimmedStr = null),
            t
        }
        var c, s, o, l = "7acf8a801faa2d470dcb953bca2a1a6fda873da23367815f5f4c1b8aa11d3647c33e06d73c5b9d6e39ebff99bb38fefa5de7f42ace2e8541fa1095d09d78607bdd1b23cc7accdbfe0ea9139dbb838d597cc1b57acdd94de3587aaa6f4389cb665aa5aa63652dfc53b315503aba846c52e90e19312c659ef4b49705d9efbe6536f4fbfa1332cef19c3b5357ce4ea47cbd1501441ffa66737191097e67e1c1f90a";
        s = function(e) {
            return e.split("").map(function(e) {
                return e.charCodeAt(0)
            })
        }
    },
    18854: function(e) {
        e.exports = {
            root: "contact_us_root__LKLnP",
            bg_img: "contact_us_bg_img__T1932",
            container: "contact_us_container__ZkHPa",
            content: "contact_us_content__H_Gdf",
            title: "contact_us_title__1yZtr",
            subtitle: "contact_us_subtitle__KMTsM",
            select: "contact_us_select__pTW6n",
            select_wrapper: "contact_us_select_wrapper__GRSJw",
            form: "contact_us_form__N61f_",
            input_box: "contact_us_input_box__FnyFM",
            text_area: "contact_us_text_area__xRSaN",
            btn: "contact_us_btn__Pp457",
            disabled_btn: "contact_us_disabled_btn__rIIZu",
            icon: "contact_us_icon__2QufK",
            action: "contact_us_action__gG4cS",
            img: "contact_us_img__vCkpw",
            err: "contact_us_err__3M5S1"
        }
    }
}]);
//# sourceMappingURL=6595-268522ba01e275ab.js.map

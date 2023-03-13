(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3330], {
    91608: function(t, e, i) {
        "use strict";
        var s, r, n = i(67294);
        function l() {
            return (l = Object.assign ? Object.assign.bind() : function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var s in i)
                        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
                }
                return t
            }
            ).apply(this, arguments)
        }
        e.Z = function(t) {
            return n.createElement("svg", l({
                width: 41,
                height: 40,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), s || (s = n.createElement("circle", {
                cx: 20.333,
                cy: 20,
                r: 20,
                fill: "#F6F7FB"
            })), r || (r = n.createElement("path", {
                d: "M19.865 14.6a1.045 1.045 0 010-1.444.965.965 0 011.396 0l5.925 6.123a1.045 1.045 0 010 1.443l-5.925 6.122a.965.965 0 01-1.396 0 1.045 1.045 0 010-1.443l4.239-4.38h-10.63a1.01 1.01 0 01-.999-1.02c0-.565.447-1.021.999-1.021h10.63l-4.239-4.38z",
                fill: "#5568A0"
            })))
        }
    },
    54101: function(t, e, i) {
        "use strict";
        var s, r, n = i(67294);
        function l() {
            return (l = Object.assign ? Object.assign.bind() : function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var s in i)
                        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
                }
                return t
            }
            ).apply(this, arguments)
        }
        e.Z = function(t) {
            return n.createElement("svg", l({
                width: 41,
                height: 40,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), s || (s = n.createElement("circle", {
                r: 20,
                transform: "matrix(1 0 0 -1 20.667 20)",
                fill: "#F6F7FB"
            })), r || (r = n.createElement("path", {
                d: "M20.419 14.6a1.045 1.045 0 000-1.444.965.965 0 00-1.396 0l-5.925 6.123a1.045 1.045 0 000 1.443l5.925 6.122a.965.965 0 001.396 0 1.045 1.045 0 000-1.443l-4.24-4.38H26.81c.552 0 .999-.457.999-1.02a1.01 1.01 0 00-.999-1.021H16.18l4.239-4.38z",
                fill: "#5568A0"
            })))
        }
    },
    3415: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return h
            }
        });
        var s = i(26042)
          , r = i(69396)
          , n = i(85893)
          , l = i(67294)
          , o = i(25675)
          , a = i.n(o)
          , d = i(94184)
          , c = i.n(d)
          , _ = i(46066)
          , u = i(87395)
          , v = i.n(u)
          , h = function(t) {
            var e = t.data
              , o = t.customStyle
              , d = t.className
              , u = (0,
            l.useRef)()
              , h = (0,
            l.useState)()
              , m = h[0]
              , j = h[1]
              , x = (0,
            l.useState)({
                dots: !1,
                infinite: !0,
                speed: 2e3,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: !1,
                autoplay: !0,
                autoplaySpeed: 300,
                rows: 3
            })
              , f = x[0]
              , g = x[1];
            return (0,
            l.useEffect)(function() {
                j(i.g.innerWidth);
                var t = function() {
                    j(i.g.innerWidth)
                };
                return i.g.addEventListener("resize", t),
                function() {
                    return i.g.removeEventListener("resize", t)
                }
            }, []),
            (0,
            l.useEffect)(function() {
                m < 450 ? g({
                    dots: !1,
                    infinite: !0,
                    speed: 2e3,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: !1,
                    autoplay: !0,
                    autoplaySpeed: 300,
                    rows: 3
                }) : g({
                    dots: !1,
                    infinite: !0,
                    speed: 2e3,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: !1,
                    autoplay: !0,
                    autoplaySpeed: 300,
                    rows: 2
                })
            }, [m]),
            (0,
            l.useEffect)(function() {
                u.current.slickPlay && u.current.slickPlay()
            }, []),
            (0,
            n.jsxs)("div", {
                className: c()(v().root, d),
                style: o,
                children: [(0,
                n.jsx)("div", {
                    className: c()(v().container, "cmn_container_no_padding"),
                    children: (0,
                    n.jsxs)("div", {
                        className: v().content,
                        children: [(0,
                        n.jsx)("h3", {
                            className: v().title,
                            children: null == e ? void 0 : e.title
                        }), (0,
                        n.jsx)("p", {
                            className: v().subtitle,
                            children: null == e ? void 0 : e.subtitle
                        })]
                    })
                }), (0,
                n.jsx)("div", {
                    className: v().slider,
                    ref: function(t) {
                        return u.current = t
                    },
                    children: (0,
                    n.jsx)(_.Z, (0,
                    r.Z)((0,
                    s.Z)({}, f), {
                        children: null == e ? void 0 : e.clients.map(function(t) {
                            var e, i, s, r, l, o;
                            return (0,
                            n.jsx)("div", {
                                className: v().item,
                                children: (0,
                                n.jsx)("div", {
                                    className: v().img,
                                    children: (0,
                                    n.jsx)(a(), {
                                        src: null == t ? void 0 : null === (e = t.logo) || void 0 === e ? void 0 : null === (i = e.data) || void 0 === i ? void 0 : null === (s = i.attributes) || void 0 === s ? void 0 : s.url,
                                        layout: "fill",
                                        objectFit: "contain",
                                        priority: !0,
                                        alt: null == t ? void 0 : null === (r = t.logo) || void 0 === r ? void 0 : null === (l = r.data) || void 0 === l ? void 0 : null === (o = l.attributes) || void 0 === o ? void 0 : o.alternativeText
                                    })
                                })
                            }, t.id)
                        })
                    }))
                }), (0,
                n.jsx)("div", {
                    className: v().overlay
                })]
            })
        }
    },
    96527: function(t, e, i) {
        "use strict";
        var s = i(85893);
        i(67294);
        var r = i(25675)
          , n = i.n(r)
          , l = i(82979)
          , o = i.n(l)
          , a = function(t) {
            var e, r, l, a, d, c, _ = t.story;
            return (0,
            s.jsxs)("div", {
                className: o().container,
                onClick: function() {
                    return i.g.open(_.url, "_blank")
                },
                children: [(0,
                s.jsx)("div", {
                    className: o().top,
                    children: (0,
                    s.jsx)("div", {
                        className: o().img,
                        children: (0,
                        s.jsx)(n(), {
                            src: null == _ ? void 0 : null === (e = _.brand_logo) || void 0 === e ? void 0 : null === (r = e.data) || void 0 === r ? void 0 : null === (l = r.attributes) || void 0 === l ? void 0 : l.url,
                            layout: "fill",
                            objectFit: "contain",
                            objectPosition: "left",
                            alt: null === (a = _.brand_logo) || void 0 === a ? void 0 : null === (d = a.data) || void 0 === d ? void 0 : null === (c = d.attributes) || void 0 === c ? void 0 : c.alternativeText
                        })
                    })
                }), (0,
                s.jsxs)("div", {
                    className: o().content,
                    children: [(0,
                    s.jsxs)("h3", {
                        className: o().title,
                        children: [(0,
                        s.jsx)("div", {
                            className: o().quotes,
                            children: "“"
                        }), _.title]
                    }), (0,
                    s.jsx)("p", {
                        className: o().subtitle,
                        children: _.subtitle
                    }), (0,
                    s.jsx)("a", {
                        href: _.url,
                        className: o().read,
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Read more..."
                    }), (0,
                    s.jsxs)("p", {
                        className: o().author,
                        children: ["by ", _.author]
                    }), (0,
                    s.jsx)("p", {
                        className: o().date,
                        children: _.published_date
                    })]
                })]
            })
        };
        e.Z = a
    },
    19609: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return v
            }
        });
        var s = i(85893)
          , r = i(67294)
          , n = i(46066)
          , l = i(25675)
          , o = i.n(l)
          , a = i(91608)
          , d = i(54101)
          , c = i(96527)
          , _ = i(38487)
          , u = i.n(_)
          , v = function(t) {
            var e, i, l, _, v, h, m = t.data, j = (0,
            r.useRef)(), x = function() {
                j.current.slickNext()
            }, f = function() {
                j.current.slickPrev()
            };
            return (0,
            s.jsxs)("div", {
                className: u().container,
                children: [(0,
                s.jsxs)("div", {
                    className: u().top,
                    children: [(0,
                    s.jsx)("div", {
                        className: u().quotes_img,
                        children: (0,
                        s.jsx)(o(), {
                            src: null == m ? void 0 : null === (e = m.quotes_img) || void 0 === e ? void 0 : null === (i = e.data) || void 0 === i ? void 0 : null === (l = i.attributes) || void 0 === l ? void 0 : l.url,
                            layout: "fill",
                            alt: null == m ? void 0 : null === (_ = m.quotes_img) || void 0 === _ ? void 0 : null === (v = _.data) || void 0 === v ? void 0 : null === (h = v.attributes) || void 0 === h ? void 0 : h.alternativeText
                        })
                    }), (0,
                    s.jsx)("h3", {
                        className: u().heading,
                        children: m.heading
                    }), (0,
                    s.jsx)("p", {
                        className: u().sub_heading,
                        children: m.sub_heading
                    })]
                }), (0,
                s.jsx)(n.Z, {
                    ref: function(t) {
                        return j.current = t
                    },
                    children: m.stories_list.map(function(t) {
                        return (0,
                        s.jsx)("div", {
                            className: u().story_container,
                            children: (0,
                            s.jsx)(c.Z, {
                                story: t
                            })
                        }, t.id)
                    })
                }), (0,
                s.jsxs)("div", {
                    style: {
                        textAlign: "center"
                    },
                    className: u().action,
                    children: [(0,
                    s.jsx)("button", {
                        className: u().btn,
                        type: "button",
                        onClick: function() {
                            return f()
                        },
                        children: (0,
                        s.jsx)(d.Z, {})
                    }), (0,
                    s.jsx)("button", {
                        className: u().btn,
                        type: "button",
                        onClick: function() {
                            return x()
                        },
                        children: (0,
                        s.jsx)(a.Z, {})
                    })]
                })]
            })
        }
    },
    36177: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return h
            }
        });
        var s = i(85893)
          , r = i(67294)
          , n = i(94184)
          , l = i.n(n)
          , o = i(25675)
          , a = i.n(o)
          , d = i(91608)
          , c = i(54101)
          , _ = i(96527)
          , u = i(37292)
          , v = i.n(u)
          , h = function(t) {
            var e, i, n, o, u, h, m = t.data, j = (0,
            r.useRef)(), x = function() {
                j.current.scrollLeft += 400
            }, f = function() {
                j.current.scrollLeft -= 400
            };
            return (0,
            s.jsxs)("div", {
                className: v().container,
                children: [(0,
                s.jsxs)("div", {
                    className: v().top,
                    children: [(0,
                    s.jsx)("div", {
                        className: v().quotes_img,
                        children: (0,
                        s.jsx)(a(), {
                            src: null == m ? void 0 : null === (e = m.quotes_img) || void 0 === e ? void 0 : null === (i = e.data) || void 0 === i ? void 0 : null === (n = i.attributes) || void 0 === n ? void 0 : n.url,
                            layout: "fill",
                            alt: null == m ? void 0 : null === (o = m.quotes_img) || void 0 === o ? void 0 : null === (u = o.data) || void 0 === u ? void 0 : null === (h = u.attributes) || void 0 === h ? void 0 : h.alternativeText
                        })
                    }), (0,
                    s.jsx)("h3", {
                        className: v().heading,
                        children: m.heading
                    }), (0,
                    s.jsx)("p", {
                        className: v().sub_heading,
                        children: m.sub_heading
                    })]
                }), (0,
                s.jsx)("button", {
                    onClick: f,
                    type: "button",
                    className: v().btn,
                    children: (0,
                    s.jsx)(c.Z, {})
                }), (0,
                s.jsxs)("div", {
                    className: v().grid,
                    ref: j,
                    children: [(0,
                    s.jsx)("div", {
                        className: l()(v().grid_item, v().a),
                        children: (0,
                        s.jsx)(_.Z, {
                            story: m.stories_list[0]
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: l()(v().grid_item, v().b),
                        children: (0,
                        s.jsx)(_.Z, {
                            story: m.stories_list[1]
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: l()(v().grid_item, v().c),
                        children: (0,
                        s.jsx)(_.Z, {
                            story: m.stories_list[2]
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: l()(v().grid_item, v().d),
                        children: (0,
                        s.jsx)(_.Z, {
                            story: m.stories_list[3]
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: l()(v().grid_item, v().e),
                        children: (0,
                        s.jsx)(_.Z, {
                            story: m.stories_list[4]
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: l()(v().grid_item, v().f),
                        children: (0,
                        s.jsx)(_.Z, {
                            story: m.stories_list[5]
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: l()(v().grid_item, v().g),
                        children: (0,
                        s.jsx)(_.Z, {
                            story: m.stories_list[6]
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: l()(v().grid_item, v().h),
                        children: (0,
                        s.jsx)(_.Z, {
                            story: m.stories_list[7]
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: l()(v().grid_item, v().i),
                        children: (0,
                        s.jsx)(_.Z, {
                            story: m.stories_list[8]
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: l()(v().grid_item, v().j),
                        children: (0,
                        s.jsx)(_.Z, {
                            story: m.stories_list[9]
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: l()(v().grid_item, v().k),
                        children: (0,
                        s.jsx)(_.Z, {
                            story: m.stories_list[10]
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: l()(v().grid_item, v().l),
                        children: (0,
                        s.jsx)(_.Z, {
                            story: m.stories_list[11]
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: v().left_blur
                    })]
                }), (0,
                s.jsx)("button", {
                    onClick: x,
                    type: "button",
                    className: v().btn2,
                    children: (0,
                    s.jsx)(d.Z, {})
                })]
            })
        }
    },
    87395: function(t) {
        t.exports = {
            root: "OurPartners_root__eJo1B",
            container: "OurPartners_container__tk_gY",
            content: "OurPartners_content__3MdBM",
            title: "OurPartners_title__BJkR_",
            subtitle: "OurPartners_subtitle__kG0RU",
            img: "OurPartners_img__3dTah",
            item: "OurPartners_item__Nz1Cw",
            slider: "OurPartners_slider__6gtTX",
            overlay: "OurPartners_overlay__GlW48"
        }
    },
    38487: function(t) {
        t.exports = {
            top: "Stories_top__iavzn",
            story_container: "Stories_story_container__osZAj",
            container: "Stories_container__GhqBe",
            heading: "Stories_heading__D7t0E",
            sub_heading: "Stories_sub_heading__x5m_S",
            action: "Stories_action__cl8rR",
            btn: "Stories_btn__YpeIX",
            quotes_img: "Stories_quotes_img__8ncCj"
        }
    },
    82979: function(t) {
        t.exports = {
            img: "Story_img__phhlV",
            container: "Story_container___1WBy",
            top: "Story_top__YwuRC",
            content: "Story_content__GaG9v",
            title: "Story_title__Q9v4k",
            subtitle: "Story_subtitle__sF8Bq",
            read: "Story_read__Qr66j",
            author: "Story_author__I70vo",
            quotes: "Story_quotes__qIj89",
            date: "Story_date__z1D__"
        }
    },
    37292: function(t) {
        t.exports = {
            container: "StoriesV2_container__eYWdD",
            grid: "StoriesV2_grid__Fx1hx",
            left_blur: "StoriesV2_left_blur__Nq11h",
            grid_item: "StoriesV2_grid_item__Pgxhd",
            a: "StoriesV2_a__j91N8",
            b: "StoriesV2_b___ZMhO",
            c: "StoriesV2_c__ca2ru",
            d: "StoriesV2_d__janqw",
            e: "StoriesV2_e__UhMaS",
            f: "StoriesV2_f___mvnd",
            g: "StoriesV2_g__skxyM",
            h: "StoriesV2_h__neD_S",
            i: "StoriesV2_i__KLZcJ",
            j: "StoriesV2_j__aeBUv",
            k: "StoriesV2_k__U2Rgv",
            l: "StoriesV2_l__tC4a1",
            btn: "StoriesV2_btn__zhGNU",
            btn2: "StoriesV2_btn2__1d35d",
            heading: "StoriesV2_heading__B_KsG",
            sub_heading: "StoriesV2_sub_heading__vEL5u",
            top: "StoriesV2_top__90_uZ",
            quotes_img: "StoriesV2_quotes_img__jPNkN"
        }
    }
}]);
//# sourceMappingURL=3330-fa15f316d06fbfeb.js.map

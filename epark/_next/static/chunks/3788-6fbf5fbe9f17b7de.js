(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3788], {
    3455: function(a, e, t) {
        "use strict";
        var n = t(85893);
        t(67294);
        var o = t(45697)
          , i = t.n(o)
          , r = t(41664)
          , s = t.n(r)
          , l = t(9008)
          , c = t.n(l)
          , d = t(35055)
          , p = t(14583)
          , h = t.n(p)
          , u = {
            internal: "internal",
            external: "external"
        };
        function _(a) {
            var e, t, o = a.data;
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(c(), {
                    children: (0,
                    n.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(((t = {})["@context"] = "https://schema.org",
                            t["@type"] = "BreadcrumbList",
                            t.itemListElement = [],
                            null == o || o.map(function(a, e) {
                                var n = {};
                                return n["@type"] = "ListItem",
                                n.name = null == a ? void 0 : a.name,
                                n.position = e + 1,
                                n.item = "".concat((0,
                                d.pf)()).concat(null == a ? void 0 : a.url),
                                t.itemListElement.push(n)
                            }),
                            t))
                        }
                    })
                }), (0,
                n.jsx)("div", {
                    className: ["cmn_container", h().root].join(" "),
                    children: null == o ? void 0 : o.map(function(a, e) {
                        return (0,
                        n.jsx)("div", {
                            className: h().link_item,
                            children: (null == a ? void 0 : a.type) === "internal" ? (0,
                            n.jsxs)(n.Fragment, {
                                children: [(0,
                                n.jsx)(s(), {
                                    href: a.url,
                                    children: (0,
                                    n.jsx)("a", {
                                        href: null == a ? void 0 : a.url,
                                        children: null == a ? void 0 : a.name
                                    })
                                }), e < o.length - 1 && (0,
                                n.jsx)(n.Fragment, {
                                    children: " > "
                                })]
                            }) : (0,
                            n.jsxs)(n.Fragment, {
                                children: [(0,
                                n.jsx)("a", {
                                    href: "".concat((0,
                                    d.pf)()).concat(null == a ? void 0 : a.url),
                                    children: null == a ? void 0 : a.name
                                }), e < o.length - 1 && (0,
                                n.jsx)(n.Fragment, {
                                    children: " > "
                                })]
                            })
                        }, null == a ? void 0 : a.id)
                    })
                })]
            })
        }
        _.propTypes = {
            data: i().arrayOf(i().shape({
                name: i().string,
                url: i().string,
                type: i().oneOf([u.internal, u.external])
            })).isRequired
        },
        e.Z = _
    },
    83788: function(a, e, t) {
        "use strict";
        t.d(e, {
            Z: function() {
                return Z
            }
        });
        var n = t(85893)
          , o = t(67294)
          , i = t(11163)
          , r = t(84269)
          , s = t(36456)
          , l = t(45697)
          , c = t.n(l)
          , d = t(94184)
          , p = t.n(d)
          , h = t(44572)
          , u = t(66238)
          , _ = t(9008)
          , m = t.n(_)
          , v = t(35055);
        function g(a) {
            var e, t, o = a.data;
            return (0,
            n.jsx)(m(), {
                children: (0,
                n.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(((t = {})["@context"] = "https://schema.org",
                        t["@type"] = "SiteNavigationElement",
                        t.name = "".concat(null == o ? void 0 : o.name),
                        t.url = "".concat((0,
                        v.pf)()).concat(null == o ? void 0 : o.url),
                        t))
                    }
                })
            })
        }
        function b(a) {
            var e, t, o = a.data;
            return (0,
            n.jsx)(m(), {
                children: (0,
                n.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(((t = {})["@context"] = "https://schema.org",
                        t["@type"] = "Table",
                        t.about = "".concat(o),
                        t))
                    }
                })
            })
        }
        function y(a) {
            var e, t, o, i, r = a.data;
            return (0,
            n.jsx)(m(), {
                children: (0,
                n.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(((i = {})["@context"] = "https://schema.org",
                        i["@type"] = "ParkingFacility",
                        i.address = {
                            "@type": "PostalAddress",
                            addressLocality: "".concat(null == r ? void 0 : null === (t = r.address) || void 0 === t ? void 0 : t.addressLocality),
                            streetAddress: "".concat(null == r ? void 0 : null === (o = r.address) || void 0 === o ? void 0 : o.streetAddress)
                        },
                        i.latitude = "".concat(null == r ? void 0 : r.latitude),
                        i.longitude = "".concat(null == r ? void 0 : r.longitude),
                        i))
                    }
                })
            })
        }
        function f(a) {
            var e, t, o = a.data;
            return (0,
            n.jsx)(m(), {
                children: (0,
                n.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(((t = {})["@context"] = "https://schema.org",
                        t["@type"] = "FinancialProduct",
                        t.name = null == o ? void 0 : o.name,
                        t.url = null == o ? void 0 : o.url,
                        t.brand = null == o ? void 0 : o.brand,
                        t.category = o.category,
                        t.offers = null == o ? void 0 : o.offers,
                        t))
                    }
                })
            })
        }
        function j(a) {
            var e, t, o = a.data;
            return (0,
            n.jsx)(m(), {
                children: (0,
                n.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(((t = {})["@context"] = "https://schema.org",
                        t["@type"] = "NewsArticle",
                        t.name = "".concat(null == o ? void 0 : o.name),
                        t.url = null == o ? void 0 : o.url,
                        t.headline = "".concat(null == o ? void 0 : o.headline),
                        t.mainEntityOfPage = null == o ? void 0 : o.mainEntityOfPage,
                        t))
                    }
                })
            })
        }
        g.propTypes = {
            name: c().string,
            url: c().string
        },
        b.propTypes = {
            about: c().string
        },
        y.propTypes = {
            address: {
                addressLocality: c().string,
                streetAddress: c().string
            },
            latitude: c().number,
            longitude: c().number
        },
        f.propTypes = {
            data: {
                name: c().string,
                url: c().string,
                brand: c().string,
                category: c().string,
                offers: c().object
            }
        },
        j.propTypes = {
            name: c().string,
            mainEntityOfPage: c().string,
            url: c().string,
            headline: c().string
        };
        var x = t(8364)
          , w = t(85898)
          , S = t(74309)
          , k = t.n(S)
          , N = (0,
        o.memo)(function(a) {
            var e = (0,
            i.useRouter)()
              , t = a.navList
              , o = function(a) {
                (null == a ? void 0 : a.includes("fastag")) ? e.push(a) : (0,
                w.$)(a)
            };
            return (0,
            n.jsx)("div", {
                className: k().cmn_navbar,
                children: t.map(function(a) {
                    var t = -1 !== a.route.indexOf(e.pathname);
                    return (0,
                    n.jsx)("div", {
                        className: p()(k().nav_tab, {
                            active_tab: t
                        }),
                        children: (0,
                        n.jsxs)("button", {
                            onClick: function() {
                                return o(null == a ? void 0 : a.href)
                            },
                            children: [(0,
                            n.jsx)("div", {
                                className: k().icon,
                                children: t ? (0,
                                n.jsx)("img", {
                                    src: a.activeIcon,
                                    alt: "Active ".concat(a.name)
                                }) : (0,
                                n.jsx)("img", {
                                    src: a.icon,
                                    alt: "Not active ".concat(a.name)
                                })
                            }), (0,
                            n.jsx)("span", {
                                className: k().label,
                                children: a.name
                            })]
                        })
                    }, "tab-".concat(a.key))
                })
            })
        });
        N.propTypes = {
            navList: c().arrayOf(c().object).isRequired
        },
        N.defaultProps = {};
        var A = t(13571)
          , C = t(18284)
          , O = t(32066)
          , L = t(3455);
        function P() {
            var a;
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsx)(m(), {
                    children: (0,
                    n.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(((a = {})["@context"] = "https://schema.org",
                            a["@type"] = "MobileApplication",
                            a.name = "Park+",
                            a.operatingSystem = "ANDROID and iOS",
                            a.offers = {
                                "@type": "Offer",
                                price: "0",
                                priceCurrency: "INR"
                            },
                            a.aggregateRating = {
                                "@type": "AggregateRating",
                                ratingValue: "4.6",
                                ratingCount: "71140"
                            },
                            a.applicationCategory = "Apps",
                            a.potentialAction = {
                                "@type": "ViewAction",
                                target: [{
                                    "@type": "EntryPoint",
                                    actionApplication: {
                                        "@type": "SoftwareApplication",
                                        "@id": "com.ovunque.parkwheels",
                                        name: "Park+ Parking | FASTag | RTO",
                                        operatingSystem: "ANDROID",
                                        applicationCategory: "Apps",
                                        applicationSubCategory: "Auto & Vehicles",
                                        downloadUrl: "https://play.google.com/store/apps/details?id:com.ovunque.parkwheels",
                                        offers: {
                                            "@type": "Offer",
                                            price: "0",
                                            priceCurrency: "INR"
                                        },
                                        aggregateRating: {
                                            "@type": "AggregateRating",
                                            ratingValue: "4.6",
                                            ratingCount: "71140"
                                        }
                                    }
                                }, {
                                    "@type": "EntryPoint",
                                    actionApplication: {
                                        "@type": "SoftwareApplication",
                                        "@id": "1244749178",
                                        name: "Park+ | Find Parking, Challan",
                                        operatingSystem: "iOS",
                                        applicationCategory: "Travel",
                                        downloadUrl: "https://apps.apple.com/in/app/park-find-parking-challan/id1244749178",
                                        offers: {
                                            "@type": "Offer",
                                            price: "0",
                                            priceCurrency: "INR"
                                        },
                                        aggregateRating: {
                                            "@type": "AggregateRating",
                                            ratingValue: "4.0",
                                            ratingCount: "737"
                                        }
                                    }
                                }, ]
                            },
                            a.description = "Park+ app is a one-stop solution for car owners. What you know was the best FASTag app offers so much more. From finding and booking parking spots near you and selling your car to getting your car cleaned daily right at your doorstep.",
                            a))
                        }
                    })
                })
            })
        }
        P.propTypes = {
            name: c().string,
            offers: c().object,
            aggregateRating: c().object,
            applicationCategory: c().string,
            potentialAction: c().object,
            description: c().string
        };
        var T = t(49163)
          , R = t(14924)
          , F = t(41664)
          , E = t.n(F)
          , B = t(96571)
          , I = t.n(B)
          , H = function(a) {
            var e = a.tabs
              , t = (0,
            i.useRouter)();
            t.asPath;
            var o = t.pathname;
            return (0,
            n.jsx)("div", {
                className: I().root,
                children: (0,
                n.jsx)("div", {
                    className: p()(I().tabs, "cmn_container", "cmn_hide_scrollbar"),
                    children: e.map(function(a) {
                        return (0,
                        n.jsx)(E(), {
                            href: a.route,
                            prefetch: !1,
                            children: (0,
                            n.jsx)("a", {
                                href: a.route,
                                className: p()(I().links, (0,
                                R.Z)({}, I().active_link, a.routeList.includes(o))),
                                children: a.label
                            })
                        }, a.id)
                    })
                })
            })
        }
          , M = t(52701)
          , q = t.n(M);
        function J(a) {
            var e, t = a.children, s = a.title, l = a.header, c = a.footer, d = a.breadCrumb, _ = a.navBar, m = a.pageHeader, v = a.customStyle, w = a.showProfile, S = a.showContact, k = a.isExpanded, R = a.subHeader, F = a.mobileApplicationSchema, E = a.siteNavigationSchema, B = a.tableSchema, I = a.parkingSchema, M = a.financialSchema, J = a.newsArticle, Z = (0,
            o.useState)(!1), D = Z[0], V = Z[1], U = (0,
            i.useRouter)(), X = null == U ? void 0 : null === (e = U.query) || void 0 === e ? void 0 : e.source;
            return (0,
            o.useEffect)(function() {
                var a;
                ("string" == typeof X && (a = ["androidparkplus"]).includes(null == X ? void 0 : X.toLowerCase()) || (0,
                h.iF)() || (0,
                x.vp)()) && V(!0)
            }, [U]),
            (0,
            n.jsxs)("div", {
                className: q().navbar_layout_v1,
                style: v,
                children: [l.show && !D ? (0,
                n.jsx)("div", {
                    className: p()("cmn_only_desktop"),
                    children: (0,
                    n.jsx)(C.ZP, {
                        activeLink: l.activeLink,
                        showProfile: w,
                        showContact: S,
                        isExpanded: k
                    })
                }) : (0,
                n.jsx)("div", {
                    className: "cmn_hide"
                }), (null == X ? void 0 : X.toLowerCase()) !== "iosparkplus" && (m.show ? (0,
                n.jsx)(n.Fragment, {
                    children: D ? (0,
                    n.jsx)(u.Z, {
                        onBack: r.kd
                    }) : (0,
                    n.jsx)("div", {
                        className: p()("cmn_only_mobile"),
                        children: (0,
                        n.jsx)(T.Z, {
                            showBackBtn: m.backBtn.show,
                            onBackBtnClick: m.backBtn.onClick,
                            showProfile: m.showProfile,
                            showMenu: m.showMenu
                        })
                    })
                }) : (0,
                n.jsx)("div", {
                    className: "cmn_hide"
                })), R.show ? (0,
                n.jsx)(H, {
                    tabs: R.tabs
                }) : (0,
                n.jsx)("div", {
                    className: "cmn_hide"
                }), "" !== s && (0,
                n.jsx)("div", {
                    className: q().head,
                    children: s
                }), d.show && !D && (0,
                n.jsx)(L.Z, {
                    data: d.data
                }), (0,
                n.jsx)("div", {
                    className: q().body,
                    children: t
                }), c.show && !D ? (0,
                n.jsx)(O.$, {}) : (0,
                n.jsx)("div", {
                    className: "cmn_hide"
                }), _.show ? (0,
                n.jsx)("div", {
                    className: p()("cmn_only_mobile", q().navbar),
                    children: (0,
                    n.jsx)(N, {
                        navList: A.qK
                    })
                }) : (0,
                n.jsx)("div", {
                    className: "cmn_hide"
                }), F.show ? (0,
                n.jsx)(P, {}) : (0,
                n.jsx)("div", {
                    className: "cmn_hide"
                }), E.show ? (0,
                n.jsx)(g, {
                    data: null == E ? void 0 : E.data
                }) : (0,
                n.jsx)("div", {
                    className: "cmn_hide"
                }), I.show ? (0,
                n.jsx)(y, {
                    data: null == I ? void 0 : I.data
                }) : (0,
                n.jsx)("div", {
                    className: "cmn_hide"
                }), (null == B ? void 0 : B.show) ? (0,
                n.jsx)(b, {
                    data: null == B ? void 0 : B.data
                }) : (0,
                n.jsx)("div", {
                    className: "cmn_hide"
                }), (null == M ? void 0 : M.show) ? (0,
                n.jsx)(f, {
                    data: null == M ? void 0 : M.data
                }) : (0,
                n.jsx)("div", {
                    className: "cmn_hide"
                }), (null == J ? void 0 : J.show) ? (0,
                n.jsx)(j, {
                    data: null == J ? void 0 : J.data
                }) : (0,
                n.jsx)("div", {
                    className: "cmn_hide"
                })]
            })
        }
        J.propTypes = {
            children: c().node.isRequired,
            title: c().string,
            header: c().shape({
                show: c().bool,
                activeLink: c().string
            }),
            footer: c().shape({
                show: c().bool
            }),
            navBar: c().shape({
                show: c().bool
            }),
            mobileApplicationSchema: c().shape({
                show: c().bool,
                data: c().string
            }),
            siteNavigationSchema: c().shape({
                show: c().bool,
                data: c().object
            }),
            tableSchema: c().shape({
                show: c().bool,
                data: c().object
            }),
            breadCrumb: c().shape({
                show: c().bool,
                data: c().arrayOf(c().object)
            }),
            parkingSchema: c().shape({
                show: c().bool,
                data: c().object
            }),
            financialSchema: c().shape({
                show: c().bool,
                data: c().object
            }),
            newsArticle: c().shape({
                show: c().bool,
                data: c().object
            }),
            downloadBanner: c().shape({
                show: c().bool
            }),
            pageHeader: c().shape({
                show: c().bool,
                title: c().string,
                backBtn: c().shape({
                    show: c().bool,
                    onClick: c().func
                }),
                showProfile: c().bool,
                showMenu: c().bool
            }),
            customStyle: c().objectOf(c().any),
            showProfile: c().bool,
            showContact: c().bool,
            isExpanded: c().bool,
            subHeader: c().shape({
                show: c().bool,
                tabs: c().arrayOf(c().any)
            })
        },
        J.defaultProps = {
            title: "",
            header: {
                show: !1,
                activeLink: null
            },
            footer: {
                show: !1
            },
            navBar: {
                show: !1
            },
            mobileApplicationSchema: {
                show: !1
            },
            siteNavigationSchema: {
                show: !1,
                data: {}
            },
            tableSchema: {
                show: !1,
                data: {}
            },
            breadCrumb: {
                show: !1,
                data: []
            },
            newsArticle: {
                show: !1,
                data: {}
            },
            parkingSchema: {
                show: !1,
                data: {}
            },
            financialSchema: {
                show: !1,
                data: {}
            },
            pageHeader: {
                show: !1,
                title: "",
                backBtn: {
                    show: !1,
                    onClick: function() {}
                },
                showProfile: !1,
                showMenu: !1
            },
            customStyle: null,
            showProfile: !0,
            showContact: !1,
            isExpanded: !0,
            subHeader: {
                show: !1,
                tabs: []
            }
        };
        var Z = (0,
        s.$j)(null, null)(J)
    },
    96571: function(a) {
        a.exports = {
            root: "Subheader_root__tpL7t",
            tabs: "Subheader_tabs__RHYKj",
            links: "Subheader_links__ELxXo",
            active_link: "Subheader_active_link__DQ3iq"
        }
    },
    14583: function(a) {
        a.exports = {
            root: "bread_crumbs_root__jaU8F",
            link_item: "bread_crumbs_link_item__kNR4h"
        }
    },
    52701: function(a) {
        a.exports = {
            navbar_layout_v1: "navbar_layout_v1_navbar_layout_v1__09XVx",
            head: "navbar_layout_v1_head__tqm_j",
            body: "navbar_layout_v1_body__5QYxu",
            navbar: "navbar_layout_v1_navbar__fjsX2",
            placeholderShimmer: "navbar_layout_v1_placeholderShimmer__XepNz",
            "fade-in": "navbar_layout_v1_fade-in__Ce0O5",
            "right-to-left-page": "navbar_layout_v1_right-to-left-page__xdTf0",
            "bottom-to-top-page": "navbar_layout_v1_bottom-to-top-page__YqJyT",
            "top-to-bottom-page": "navbar_layout_v1_top-to-bottom-page__kN7MF",
            "scale-small-to-big": "navbar_layout_v1_scale-small-to-big__LY9_s",
            "overlay-animation": "navbar_layout_v1_overlay-animation__zSoqx",
            "center-popup": "navbar_layout_v1_center-popup__1iCFv"
        }
    },
    74309: function(a) {
        a.exports = {
            cmn_navbar: "navbar_cmn_navbar__SFE7J",
            nav_tab: "navbar_nav_tab__D5_dl",
            icon: "navbar_icon__r6aIh",
            label: "navbar_label__C_Pr1",
            active_tab: "navbar_active_tab__O0TgT",
            placeholderShimmer: "navbar_placeholderShimmer__CGP6U",
            "fade-in": "navbar_fade-in__GghAz",
            "right-to-left-page": "navbar_right-to-left-page__d4LO0",
            "bottom-to-top-page": "navbar_bottom-to-top-page__BeE2K",
            "top-to-bottom-page": "navbar_top-to-bottom-page__v_SNx",
            "scale-small-to-big": "navbar_scale-small-to-big__0glAF",
            "overlay-animation": "navbar_overlay-animation__j_cF_",
            "center-popup": "navbar_center-popup__OE9Ms"
        }
    }
}]);
//# sourceMappingURL=3788-6fbf5fbe9f17b7de.js.map

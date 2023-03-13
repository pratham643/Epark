(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7609, 853, 5118, 8643, 9168, 6763, 4772, 7816], {
    86243: function(e, t, n) {
        "use strict";
        var r, l, o = n(67294);
        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        let i = ["children", "options"]
          , c = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e,t)=>(e[t.toLowerCase()] = t,
        e), {
            for: "htmlFor"
        })
          , u = {
            amp: "&",
            apos: "'",
            gt: ">",
            lt: "<",
            nbsp: "\xa0",
            quot: "“"
        }
          , s = ["style", "script"]
          , f = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi
          , p = /mailto:/i
          , d = /\n{2,}$/
          , g = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/
          , y = /^ *> ?/gm
          , h = /^ {2,}\n/
          , m = /^(?:( *[-*_]) *){3,}(?:\n *)+\n/
          , v = /^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/
          , k = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/
          , x = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/
          , _ = /^(?:\n *)*\n/
          , b = /\r\n?/g
          , C = /^\[\^([^\]]+)](:.*)\n/
          , L = /^\[\^([^\]]+)]/
          , M = /\f/g
          , H = /^\s*?\[(x|\s)\]/
          , E = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/
          , O = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/
          , S = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i
          , I = /&([a-z]+);/g
          , A = /^<!--[\s\S]*?(?:-->)/
          , R = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/
          , $ = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i
          , T = /^\{.*\}$/
          , w = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/
          , j = /^<([^ >]+@[^ >]+)>/
          , G = /^<([^ >]+:\/[^ >]+)>/
          , P = / *\n+$/
          , U = /(?:^|\n)( *)$/
          , B = /-([a-z])?/gi
          , z = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/
          , N = /^\[([^\]]*)\]:\s+(\S+)\s*("([^"]*)")?/
          , X = /^!\[([^\]]*)\] ?\[([^\]]*)\]/
          , D = /^\[([^\]]*)\] ?\[([^\]]*)\]/
          , W = /(\[|\])/g
          , Z = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/
          , F = /\t/g
          , K = /^ *\| */
          , q = /(^ *\||\| *$)/g
          , V = / *$/
          , Q = /^ *:-+: *$/
          , J = /^ *:-+ *$/
          , Y = /^ *-+: *$/
          , ee = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/
          , et = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/
          , en = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/
          , er = /^\\([^0-9A-Za-z\s])/
          , el = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i
          , eo = /^\n+/
          , ea = /^([ \t]*)/
          , ei = /\\([^0-9A-Z\s])/gi
          , ec = RegExp("^( *)((?:[*+-]|\\d+\\.)) +")
          , eu = RegExp("^( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)", "gm")
          , es = RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)")
          , ef = "(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*"
          , ep = RegExp("^\\[(" + ef + ")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)")
          , ed = RegExp("^!\\[(" + ef + ")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)")
          , eg = [g, k, v, E, O, A, eu, es, z]
          , ey = [...eg, /^[^\n]+(?:  \n|\n{2,})/, S, $];
        function eh(e) {
            return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase()
        }
        function em(e) {
            return Y.test(e) ? "right" : Q.test(e) ? "center" : J.test(e) ? "left" : null
        }
        function ev(e, t, n) {
            let r = n.t;
            n.t = !0;
            let l = t(e.trim(), n);
            n.t = r;
            let o = [[]];
            return l.forEach(function(e, t) {
                "tableSeparator" === e.type ? 0 !== t && t !== l.length - 1 && o.push([]) : ("text" !== e.type || null != l[t + 1] && "tableSeparator" !== l[t + 1].type || (e.content = e.content.replace(V, "")),
                o[o.length - 1].push(e))
            }),
            o
        }
        function ek(e, t, n) {
            var r, l, o;
            n.o = !0;
            let a = ev(e[1], t, n)
              , i = e[2].replace(q, "").split("|").map(em)
              , c = (r = e[3]).trim().split("\n").map(function(e) {
                return ev(e, t, n)
            });
            return n.o = !1,
            {
                align: i,
                cells: c,
                header: a,
                type: "table"
            }
        }
        function ex(e, t) {
            return null == e.align[t] ? {} : {
                textAlign: e.align[t]
            }
        }
        function e_(e) {
            return function(t, n) {
                return n.o ? e.exec(t) : null
            }
        }
        function eb(e) {
            return function(t, n) {
                return n.o || n.u ? e.exec(t) : null
            }
        }
        function eC(e) {
            return function(t, n) {
                return n.o || n.u ? null : e.exec(t)
            }
        }
        function eL(e) {
            return function(t) {
                return e.exec(t)
            }
        }
        function eM(e, t, n) {
            if (t.o || t.u || n && !n.endsWith("\n"))
                return null;
            let r = "";
            e.split("\n").every(e=>!eg.some(t=>t.test(e)) && (r += e + "\n",
            e.trim()));
            let l = r.trimEnd();
            return "" == l ? null : [r, l]
        }
        function eH(e) {
            try {
                if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data):/i))
                    return null
            } catch (t) {
                return null
            }
            return e
        }
        function eE(e) {
            return e.replace(ei, "$1")
        }
        function eO(e, t, n) {
            let r = n.o || !1
              , l = n.u || !1;
            n.o = !0,
            n.u = !0;
            let o = e(t, n);
            return n.o = r,
            n.u = l,
            o
        }
        function eS(e, t, n) {
            return n.o = !1,
            e(t + "\n\n", n)
        }
        let eI = (e,t,n)=>({
            content: eO(t, e[1], n)
        });
        function eA() {
            return {}
        }
        function eR() {
            return null
        }
        function e$(e, t, n) {
            let r = e
              , l = t.split(".");
            for (; l.length && void 0 !== (r = r[l[0]]); )
                l.shift();
            return r || n
        }
        (r = l || (l = {}))[r.MAX = 0] = "MAX",
        r[r.HIGH = 1] = "HIGH",
        r[r.MED = 2] = "MED",
        r[r.LOW = 3] = "LOW",
        r[r.MIN = 4] = "MIN",
        t.Z = e=>{
            let {children: t, options: n} = e
              , r = function(e, t) {
                if (null == e)
                    return {};
                var n, r, l = {}, o = Object.keys(e);
                for (r = 0; r < o.length; r++)
                    t.indexOf(n = o[r]) >= 0 || (l[n] = e[n]);
                return l
            }(e, i);
            return o.cloneElement(function(e, t={}) {
                var n, r, i;
                t.overrides = t.overrides || {},
                t.slugify = t.slugify || eh,
                t.namedCodesToUnicode = t.namedCodesToUnicode ? a({}, u, t.namedCodesToUnicode) : u;
                let q = t.createElement || o.createElement;
                function V(e, n, ...r) {
                    let l = e$(t.overrides, `${e}.props`, {});
                    return q(function(e, t) {
                        let n = e$(t, e);
                        return n ? "function" == typeof n || "object" == typeof n && "render"in n ? n : e$(t, `${e}.component`, e) : e
                    }(e, t.overrides), a({}, n, l, {
                        className: function(...e) {
                            return e.filter(Boolean).join(" ")
                        }(null == n ? void 0 : n.className, l.className) || void 0
                    }), ...r)
                }
                function Q(e) {
                    let n = !1;
                    t.forceInline ? n = !0 : t.forceBlock || (n = !1 === Z.test(e));
                    let r = ev(em(n ? e : `${e.trimEnd().replace(eo, "")}

`, {
                        o: n
                    }));
                    for (; "string" == typeof r[r.length - 1] && !r[r.length - 1].trim(); )
                        r.pop();
                    if (null === t.wrapper)
                        return r;
                    let l = t.wrapper || (n ? "span" : "div"), a;
                    if (r.length > 1 || t.forceWrapper)
                        a = r;
                    else {
                        if (1 === r.length)
                            return "string" == typeof (a = r[0]) ? V("span", {
                                key: "outer"
                            }, a) : a;
                        a = null
                    }
                    return o.createElement(l, {
                        key: "outer"
                    }, a)
                }
                function J(e) {
                    let t = e.match(f);
                    return t ? t.reduce(function(e, t, n) {
                        let r = t.indexOf("=");
                        if (-1 !== r) {
                            var l, a, i;
                            let u = (-1 !== (l = t.slice(0, r)).indexOf("-") && null === l.match(R) && (l = l.replace(B, function(e, t) {
                                return t.toUpperCase()
                            })),
                            l).trim()
                              , s = function(e) {
                                let t = e[0];
                                return ('"' === t || "'" === t) && e.length >= 2 && e[e.length - 1] === t ? e.slice(1, -1) : e
                            }(t.slice(r + 1).trim())
                              , f = c[u] || u
                              , p = e[f] = (i = s,
                            "style" === u ? i.split(/;\s?/).reduce(function(e, t) {
                                let n = t.slice(0, t.indexOf(":"));
                                return e[n.replace(/(-[a-z])/g, e=>e[1].toUpperCase())] = t.slice(n.length + 1).trim(),
                                e
                            }, {}) : "href" === u ? eH(i) : (i.match(T) && (i = i.slice(1, i.length - 1)),
                            "true" === i || "false" !== i && i));
                            "string" == typeof p && (S.test(p) || $.test(p)) && (e[f] = o.cloneElement(Q(p.trim()), {
                                key: n
                            }))
                        } else
                            "style" !== t && (e[c[t] || t] = !0);
                        return e
                    }, {}) : void 0
                }
                let Y = []
                  , ei = {}
                  , ef = {
                    blockQuote: {
                        i: eC(g),
                        l: l.HIGH,
                        _: (e,t,n)=>({
                            content: t(e[0].replace(y, ""), n)
                        }),
                        p: (e,t,n)=>V("blockquote", {
                            key: n.g
                        }, t(e.content, n))
                    },
                    breakLine: {
                        i: eL(h),
                        l: l.HIGH,
                        _: eA,
                        p: (e,t,n)=>V("br", {
                            key: n.g
                        })
                    },
                    breakThematic: {
                        i: eC(m),
                        l: l.HIGH,
                        _: eA,
                        p: (e,t,n)=>V("hr", {
                            key: n.g
                        })
                    },
                    codeBlock: {
                        i: eC(k),
                        l: l.MAX,
                        _: e=>({
                            content: e[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""),
                            lang: void 0
                        }),
                        p: (e,t,n)=>V("pre", {
                            key: n.g
                        }, V("code", {
                            className: e.lang ? `lang-${e.lang}` : ""
                        }, e.content))
                    },
                    codeFenced: {
                        i: eC(v),
                        l: l.MAX,
                        _: e=>({
                            content: e[3],
                            lang: e[2] || void 0,
                            type: "codeBlock"
                        })
                    },
                    codeInline: {
                        i: eb(x),
                        l: l.LOW,
                        _: e=>({
                            content: e[2]
                        }),
                        p: (e,t,n)=>V("code", {
                            key: n.g
                        }, e.content)
                    },
                    footnote: {
                        i: eC(C),
                        l: l.MAX,
                        _: e=>(Y.push({
                            footnote: e[2],
                            identifier: e[1]
                        }),
                        {}),
                        p: eR
                    },
                    footnoteReference: {
                        i: e_(L),
                        l: l.HIGH,
                        _: e=>({
                            content: e[1],
                            target: `#${t.slugify(e[1])}`
                        }),
                        p: (e,t,n)=>V("a", {
                            key: n.g,
                            href: eH(e.target)
                        }, V("sup", {
                            key: n.g
                        }, e.content))
                    },
                    gfmTask: {
                        i: e_(H),
                        l: l.HIGH,
                        _: e=>({
                            completed: "x" === e[1].toLowerCase()
                        }),
                        p: (e,t,n)=>V("input", {
                            checked: e.completed,
                            key: n.g,
                            readOnly: !0,
                            type: "checkbox"
                        })
                    },
                    heading: {
                        i: eC(E),
                        l: l.HIGH,
                        _: (e,n,r)=>({
                            content: eO(n, e[2], r),
                            id: t.slugify(e[2]),
                            level: e[1].length
                        }),
                        p: (e,t,n)=>(e.tag = `h${e.level}`,
                        V(e.tag, {
                            id: e.id,
                            key: n.g
                        }, t(e.content, n)))
                    },
                    headingSetext: {
                        i: eC(O),
                        l: l.MAX,
                        _: (e,t,n)=>({
                            content: eO(t, e[1], n),
                            level: "=" === e[2] ? 1 : 2,
                            type: "heading"
                        })
                    },
                    htmlComment: {
                        i: eL(A),
                        l: l.HIGH,
                        _: ()=>({}),
                        p: eR
                    },
                    image: {
                        i: eb(ed),
                        l: l.HIGH,
                        _: e=>({
                            alt: e[1],
                            target: eE(e[2]),
                            title: e[3]
                        }),
                        p: (e,t,n)=>V("img", {
                            key: n.g,
                            alt: e.alt || void 0,
                            title: e.title || void 0,
                            src: eH(e.target)
                        })
                    },
                    link: {
                        i: e_(ep),
                        l: l.LOW,
                        _: (e,t,n)=>({
                            content: function(e, t, n) {
                                let r = n.o || !1
                                  , l = n.u || !1;
                                n.o = !1,
                                n.u = !0;
                                let o = e(t, n);
                                return n.o = r,
                                n.u = l,
                                o
                            }(t, e[1], n),
                            target: eE(e[2]),
                            title: e[3]
                        }),
                        p: (e,t,n)=>V("a", {
                            key: n.g,
                            href: eH(e.target),
                            title: e.title
                        }, t(e.content, n))
                    },
                    linkAngleBraceStyleDetector: {
                        i: e_(G),
                        l: l.MAX,
                        _: e=>({
                            content: [{
                                content: e[1],
                                type: "text"
                            }],
                            target: e[1],
                            type: "link"
                        })
                    },
                    linkBareUrlDetector: {
                        i: (e,t)=>t.m ? null : e_(w)(e, t),
                        l: l.MAX,
                        _: e=>({
                            content: [{
                                content: e[1],
                                type: "text"
                            }],
                            target: e[1],
                            title: void 0,
                            type: "link"
                        })
                    },
                    linkMailtoDetector: {
                        i: e_(j),
                        l: l.MAX,
                        _(e) {
                            let t = e[1]
                              , n = e[1];
                            return p.test(n) || (n = "mailto:" + n),
                            {
                                content: [{
                                    content: t.replace("mailto:", ""),
                                    type: "text"
                                }],
                                target: n,
                                type: "link"
                            }
                        }
                    },
                    list: {
                        i(e, t, n) {
                            let r = U.exec(n);
                            return r && (t.h || !t.o) ? es.exec(e = r[1] + e) : null
                        },
                        l: l.HIGH,
                        _(e, t, n) {
                            let r = e[2]
                              , l = r.length > 1
                              , o = e[0].replace(d, "\n").match(eu)
                              , a = !1;
                            return {
                                items: o.map(function(e, r) {
                                    let l = ec.exec(e)[0].length
                                      , i = RegExp("^ {1," + l + "}", "gm")
                                      , c = e.replace(i, "").replace(ec, "")
                                      , u = r === o.length - 1
                                      , s = -1 !== c.indexOf("\n\n") || u && a;
                                    a = s;
                                    let f = n.o, p = n.h, d;
                                    n.h = !0,
                                    s ? (n.o = !1,
                                    d = c.replace(P, "\n\n")) : (n.o = !0,
                                    d = c.replace(P, ""));
                                    let g = t(d, n);
                                    return n.o = f,
                                    n.h = p,
                                    g
                                }),
                                ordered: l,
                                start: l ? +r : void 0
                            }
                        },
                        p: (e,t,n)=>V(e.ordered ? "ol" : "ul", {
                            key: n.g,
                            start: e.start
                        }, e.items.map(function(e, r) {
                            return V("li", {
                                key: r
                            }, t(e, n))
                        }))
                    },
                    newlineCoalescer: {
                        i: eC(_),
                        l: l.LOW,
                        _: eA,
                        p: ()=>"\n"
                    },
                    paragraph: {
                        i: eM,
                        l: l.LOW,
                        _: eI,
                        p: (e,t,n)=>V("p", {
                            key: n.g
                        }, t(e.content, n))
                    },
                    ref: {
                        i: e_(N),
                        l: l.MAX,
                        _: e=>(ei[e[1]] = {
                            target: e[2],
                            title: e[4]
                        },
                        {}),
                        p: eR
                    },
                    refImage: {
                        i: eb(X),
                        l: l.MAX,
                        _: e=>({
                            alt: e[1] || void 0,
                            ref: e[2]
                        }),
                        p: (e,t,n)=>V("img", {
                            key: n.g,
                            alt: e.alt,
                            src: eH(ei[e.ref].target),
                            title: ei[e.ref].title
                        })
                    },
                    refLink: {
                        i: e_(D),
                        l: l.MAX,
                        _: (e,t,n)=>({
                            content: t(e[1], n),
                            fallbackContent: t(e[0].replace(W, "\\$1"), n),
                            ref: e[2]
                        }),
                        p: (e,t,n)=>ei[e.ref] ? V("a", {
                            key: n.g,
                            href: eH(ei[e.ref].target),
                            title: ei[e.ref].title
                        }, t(e.content, n)) : V("span", {
                            key: n.g
                        }, t(e.fallbackContent, n))
                    },
                    table: {
                        i: eC(z),
                        l: l.HIGH,
                        _: ek,
                        p: (e,t,n)=>V("table", {
                            key: n.g
                        }, V("thead", null, V("tr", null, e.header.map(function(r, l) {
                            return V("th", {
                                key: l,
                                style: ex(e, l)
                            }, t(r, n))
                        }))), V("tbody", null, e.cells.map(function(r, l) {
                            return V("tr", {
                                key: l
                            }, r.map(function(r, l) {
                                return V("td", {
                                    key: l,
                                    style: ex(e, l)
                                }, t(r, n))
                            }))
                        })))
                    },
                    tableSeparator: {
                        i: function(e, t) {
                            return t.t ? K.exec(e) : null
                        },
                        l: l.HIGH,
                        _: function() {
                            return {
                                type: "tableSeparator"
                            }
                        },
                        p: ()=>" | "
                    },
                    text: {
                        i: eL(el),
                        l: l.MIN,
                        _: e=>({
                            content: e[0].replace(I, (e,n)=>t.namedCodesToUnicode[n] ? t.namedCodesToUnicode[n] : e)
                        }),
                        p: e=>e.content
                    },
                    textBolded: {
                        i: eb(ee),
                        l: l.MED,
                        _: (e,t,n)=>({
                            content: t(e[2], n)
                        }),
                        p: (e,t,n)=>V("strong", {
                            key: n.g
                        }, t(e.content, n))
                    },
                    textEmphasized: {
                        i: eb(et),
                        l: l.LOW,
                        _: (e,t,n)=>({
                            content: t(e[2], n)
                        }),
                        p: (e,t,n)=>V("em", {
                            key: n.g
                        }, t(e.content, n))
                    },
                    textEscaped: {
                        i: eb(er),
                        l: l.HIGH,
                        _: e=>({
                            content: e[1],
                            type: "text"
                        })
                    },
                    textStrikethroughed: {
                        i: eb(en),
                        l: l.LOW,
                        _: eI,
                        p: (e,t,n)=>V("del", {
                            key: n.g
                        }, t(e.content, n))
                    }
                };
                !0 !== t.disableParsingRawHTML && (ef.htmlBlock = {
                    i: eL(S),
                    l: l.HIGH,
                    _(e, t, n) {
                        let[,r] = e[3].match(ea)
                          , l = RegExp(`^${r}`, "gm")
                          , o = e[3].replace(l, "")
                          , a = ey.some(e=>e.test(o)) ? eS : eO
                          , i = e[1].toLowerCase()
                          , c = -1 !== s.indexOf(i);
                        n.m = n.m || "a" === i;
                        let u = c ? e[3] : a(t, o, n);
                        return n.m = !1,
                        {
                            attrs: J(e[2]),
                            content: u,
                            noInnerParse: c,
                            tag: c ? i : e[1]
                        }
                    },
                    p: (e,t,n)=>V(e.tag, a({
                        key: n.g
                    }, e.attrs), e.noInnerParse ? e.content : t(e.content, n))
                },
                ef.htmlSelfClosing = {
                    i: eL($),
                    l: l.HIGH,
                    _: e=>({
                        attrs: J(e[2] || ""),
                        tag: e[1]
                    }),
                    p: (e,t,n)=>V(e.tag, a({}, e.attrs, {
                        key: n.g
                    }))
                });
                let eg, em = ((eg = Object.keys(ef)).sort(function(e, t) {
                    let n = ef[e].l
                      , r = ef[t].l;
                    return n !== r ? n - r : e < t ? -1 : 1
                }),
                function(e, t) {
                    var n;
                    return function e(t, n) {
                        let r = []
                          , l = "";
                        for (; t; ) {
                            let o = 0;
                            for (; o < eg.length; ) {
                                let a = eg[o]
                                  , i = ef[a]
                                  , c = i.i(t, n, l);
                                if (c) {
                                    let u = c[0];
                                    t = t.substring(u.length);
                                    let s = i._(c, e, n);
                                    null == s.type && (s.type = a),
                                    r.push(s),
                                    l = u;
                                    break
                                }
                                o++
                            }
                        }
                        return r
                    }(e.replace(b, "\n").replace(M, "").replace(F, "    "), t)
                }
                ), ev = function e(t, n={}) {
                    var r, l, o;
                    if (Array.isArray(t)) {
                        let a = n.g
                          , i = []
                          , c = !1;
                        for (let u = 0; u < t.length; u++) {
                            n.g = u;
                            let s = e(t[u], n)
                              , f = "string" == typeof s;
                            f && c ? i[i.length - 1] += s : null !== s && i.push(s),
                            c = f
                        }
                        return n.g = a,
                        i
                    }
                    return r = t,
                    l = e,
                    o = n,
                    ef[r.type].p(r, l, o)
                }, eT = Q(e);
                return Y.length ? V("div", null, eT, V("footer", {
                    key: "footer"
                }, Y.map(function(e) {
                    return V("div", {
                        id: t.slugify(e.identifier),
                        key: e.identifier
                    }, e.identifier, ev(em(e.footnote, {
                        o: !0
                    })))
                }))) : eT
            }(t, n), r)
        }
    },
    71210: function(e, t) {
        "use strict";
        function n(e, t, n, r) {
            return !1
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getDomainLocale = n,
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    48418: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(94941).Z;
        n(45753).default,
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var l = n(92648).Z
          , o = n(17273).Z
          , a = l(n(67294))
          , i = n(76273)
          , c = n(22725)
          , u = n(63462)
          , s = n(21018)
          , f = n(57190)
          , p = n(71210)
          , d = n(98684)
          , g = {};
        function y(e, t, n, r) {
            if (e && i.isLocalURL(t)) {
                Promise.resolve(e.prefetch(t, n, r)).catch(function(e) {});
                var l = r && void 0 !== r.locale ? r.locale : e && e.locale;
                g[t + "%" + n + (l ? "%" + l : "")] = !0
            }
        }
        var h = a.default.forwardRef(function(e, t) {
            var n, l, h = e.href, m = e.as, v = e.children, k = e.prefetch, x = e.passHref, _ = e.replace, b = e.shallow, C = e.scroll, L = e.locale, M = e.onClick, H = e.onMouseEnter, E = e.onTouchStart, O = e.legacyBehavior, S = void 0 === O ? !0 !== Boolean(!1) : O, I = o(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
            n = v,
            S && ("string" == typeof n || "number" == typeof n) && (n = a.default.createElement("a", null, n));
            var A = !1 !== k
              , R = a.default.useContext(u.RouterContext)
              , $ = a.default.useContext(s.AppRouterContext);
            $ && (R = $);
            var T = a.default.useMemo(function() {
                var e = r(i.resolveHref(R, h, !0), 2)
                  , t = e[0]
                  , n = e[1];
                return {
                    href: t,
                    as: m ? i.resolveHref(R, m) : n || t
                }
            }, [R, h, m])
              , w = T.href
              , j = T.as
              , G = a.default.useRef(w)
              , P = a.default.useRef(j);
            S && (l = a.default.Children.only(n));
            var U = S ? l && "object" == typeof l && l.ref : t
              , B = r(f.useIntersection({
                rootMargin: "200px"
            }), 3)
              , z = B[0]
              , N = B[1]
              , X = B[2]
              , D = a.default.useCallback(function(e) {
                (P.current !== j || G.current !== w) && (X(),
                P.current = j,
                G.current = w),
                z(e),
                U && ("function" == typeof U ? U(e) : "object" == typeof U && (U.current = e))
            }, [j, U, w, X, z]);
            a.default.useEffect(function() {
                var e = N && A && i.isLocalURL(w)
                  , t = void 0 !== L ? L : R && R.locale
                  , n = g[w + "%" + j + (t ? "%" + t : "")];
                e && !n && y(R, w, j, {
                    locale: t
                })
            }, [j, w, N, L, A, R]);
            var W = {
                ref: D,
                onClick: function(e) {
                    S || "function" != typeof M || M(e),
                    S && l.props && "function" == typeof l.props.onClick && l.props.onClick(e),
                    e.defaultPrevented || function(e, t, n, r, l, o, c, u, s, f) {
                        if ("A" !== e.currentTarget.nodeName.toUpperCase() || (!(d = (p = e).currentTarget.target) || "_self" === d) && !p.metaKey && !p.ctrlKey && !p.shiftKey && !p.altKey && (!p.nativeEvent || 2 !== p.nativeEvent.which) && i.isLocalURL(n)) {
                            e.preventDefault();
                            var p, d, g = function() {
                                "beforePopState"in t ? t[l ? "replace" : "push"](n, r, {
                                    shallow: o,
                                    locale: u,
                                    scroll: c
                                }) : t[l ? "replace" : "push"](n, {
                                    forceOptimisticNavigation: !f
                                })
                            };
                            s ? a.default.startTransition(g) : g()
                        }
                    }(e, R, w, j, _, b, C, L, Boolean($), A)
                },
                onMouseEnter: function(e) {
                    S || "function" != typeof H || H(e),
                    S && l.props && "function" == typeof l.props.onMouseEnter && l.props.onMouseEnter(e),
                    !(!A && $) && i.isLocalURL(w) && y(R, w, j, {
                        priority: !0
                    })
                },
                onTouchStart: function(e) {
                    S || "function" != typeof E || E(e),
                    S && l.props && "function" == typeof l.props.onTouchStart && l.props.onTouchStart(e),
                    !(!A && $) && i.isLocalURL(w) && y(R, w, j, {
                        priority: !0
                    })
                }
            };
            if (!S || x || "a" === l.type && !("href"in l.props)) {
                var Z = void 0 !== L ? L : R && R.locale
                  , F = R && R.isLocaleDomain && p.getDomainLocale(j, Z, R.locales, R.domainLocales);
                W.href = F || d.addBasePath(c.addLocale(j, Z, R && R.defaultLocale))
            }
            return S ? a.default.cloneElement(l, W) : a.default.createElement("a", Object.assign({}, I, W), n)
        });
        t.default = h,
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    21018: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.TemplateContext = t.GlobalLayoutRouterContext = t.LayoutRouterContext = t.AppRouterContext = void 0;
        var r = (0,
        n(92648).Z)(n(67294))
          , l = r.default.createContext(null);
        t.AppRouterContext = l;
        var o = r.default.createContext(null);
        t.LayoutRouterContext = o;
        var a = r.default.createContext(null);
        t.GlobalLayoutRouterContext = a;
        var i = r.default.createContext(null);
        t.TemplateContext = i
    },
    9008: function(e, t, n) {
        e.exports = n(5443)
    },
    41664: function(e, t, n) {
        e.exports = n(48418)
    }
}]);
//# sourceMappingURL=7609-94fc5d25d5a356f2.js.map

/*!
* Chart.js
* http://chartjs.org/
* Version: 2.1.4
*
* Copyright 2016 Nick Downie
* Released under the MIT license
* https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
*/
!function t(e, i, a) {
    function o(r, s) {
        if (!i[r]) {
            if (!e[r]) {
                var l = "function" == typeof require && require;
                if (!s && l) return l(r, !0);
                if (n) return n(r, !0);
                var h = new Error("Cannot find module '" + r + "'");
                throw h.code = "MODULE_NOT_FOUND", h
            }
            var d = i[r] = {exports: {}};
            e[r][0].call(d.exports, function (t) {
                var i = e[r][1][t];
                return o(i ? i : t)
            }, d, d.exports, t, e, i, a)
        }
        return i[r].exports
    }

    for (var n = "function" == typeof require && require, r = 0; r < a.length; r++) o(a[r]);
    return o
}({
    1: [function (t, e, i) {
    }, {}], 2: [function (t, e, i) {
        function a(t) {
            if (t) {
                var e = /^#([a-fA-F0-9]{3})$/, i = /^#([a-fA-F0-9]{6})$/,
                    a = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
                    o = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
                    n = /(\w+)/, r = [0, 0, 0], s = 1, l = t.match(e);
                if (l) {
                    l = l[1];
                    for (var h = 0; h < r.length; h++) r[h] = parseInt(l[h] + l[h], 16)
                } else if (l = t.match(i)) {
                    l = l[1];
                    for (var h = 0; h < r.length; h++) r[h] = parseInt(l.slice(2 * h, 2 * h + 2), 16)
                } else if (l = t.match(a)) {
                    for (var h = 0; h < r.length; h++) r[h] = parseInt(l[h + 1]);
                    s = parseFloat(l[4])
                } else if (l = t.match(o)) {
                    for (var h = 0; h < r.length; h++) r[h] = Math.round(2.55 * parseFloat(l[h + 1]));
                    s = parseFloat(l[4])
                } else if (l = t.match(n)) {
                    if ("transparent" == l[1]) return [0, 0, 0, 0];
                    if (r = y[l[1]], !r) return
                }
                for (var h = 0; h < r.length; h++) r[h] = v(r[h], 0, 255);
                return s = s || 0 == s ? v(s, 0, 1) : 1, r[3] = s, r
            }
        }

        function o(t) {
            if (t) {
                var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                    i = t.match(e);
                if (i) {
                    var a = parseFloat(i[4]), o = v(parseInt(i[1]), 0, 360), n = v(parseFloat(i[2]), 0, 100),
                        r = v(parseFloat(i[3]), 0, 100), s = v(isNaN(a) ? 1 : a, 0, 1);
                    return [o, n, r, s]
                }
            }
        }

        function n(t) {
            if (t) {
                var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                    i = t.match(e);
                if (i) {
                    var a = parseFloat(i[4]), o = v(parseInt(i[1]), 0, 360), n = v(parseFloat(i[2]), 0, 100),
                        r = v(parseFloat(i[3]), 0, 100), s = v(isNaN(a) ? 1 : a, 0, 1);
                    return [o, n, r, s]
                }
            }
        }

        function r(t) {
            var e = a(t);
            return e && e.slice(0, 3)
        }

        function s(t) {
            var e = o(t);
            return e && e.slice(0, 3)
        }

        function l(t) {
            var e = a(t);
            return e ? e[3] : (e = o(t)) ? e[3] : (e = n(t)) ? e[3] : void 0
        }

        function h(t) {
            return "#" + x(t[0]) + x(t[1]) + x(t[2])
        }

        function d(t, e) {
            return 1 > e || t[3] && t[3] < 1 ? c(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
        }

        function c(t, e) {
            return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
        }

        function u(t, e) {
            if (1 > e || t[3] && t[3] < 1) return f(t, e);
            var i = Math.round(t[0] / 255 * 100), a = Math.round(t[1] / 255 * 100), o = Math.round(t[2] / 255 * 100);
            return "rgb(" + i + "%, " + a + "%, " + o + "%)"
        }

        function f(t, e) {
            var i = Math.round(t[0] / 255 * 100), a = Math.round(t[1] / 255 * 100), o = Math.round(t[2] / 255 * 100);
            return "rgba(" + i + "%, " + a + "%, " + o + "%, " + (e || t[3] || 1) + ")"
        }

        function g(t, e) {
            return 1 > e || t[3] && t[3] < 1 ? p(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
        }

        function p(t, e) {
            return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
        }

        function m(t, e) {
            return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
        }

        function b(t) {
            return k[t.slice(0, 3)]
        }

        function v(t, e, i) {
            return Math.min(Math.max(e, t), i)
        }

        function x(t) {
            var e = t.toString(16).toUpperCase();
            return e.length < 2 ? "0" + e : e
        }

        var y = t("color-name");
        e.exports = {
            getRgba: a,
            getHsla: o,
            getRgb: r,
            getHsl: s,
            getHwb: n,
            getAlpha: l,
            hexString: h,
            rgbString: d,
            rgbaString: c,
            percentString: u,
            percentaString: f,
            hslString: g,
            hslaString: p,
            hwbString: m,
            keyword: b
        };
        var k = {};
        for (var S in y) k[y[S]] = S
    }, {"color-name": 6}], 3: [function (t, e, i) {
        var a = t("color-convert"), o = t("chartjs-color-string"), n = function (t) {
            if (t instanceof n) return t;
            if (!(this instanceof n)) return new n(t);
            this.values = {
                rgb: [0, 0, 0],
                hsl: [0, 0, 0],
                hsv: [0, 0, 0],
                hwb: [0, 0, 0],
                cmyk: [0, 0, 0, 0],
                alpha: 1
            };
            var e;
            if ("string" == typeof t) if (e = o.getRgba(t)) this.setValues("rgb", e); else if (e = o.getHsla(t)) this.setValues("hsl", e); else {
                if (!(e = o.getHwb(t))) throw new Error('Unable to parse color from string "' + t + '"');
                this.setValues("hwb", e)
            } else if ("object" == typeof t) if (e = t, void 0 !== e.r || void 0 !== e.red) this.setValues("rgb", e); else if (void 0 !== e.l || void 0 !== e.lightness) this.setValues("hsl", e); else if (void 0 !== e.v || void 0 !== e.value) this.setValues("hsv", e); else if (void 0 !== e.w || void 0 !== e.whiteness) this.setValues("hwb", e); else {
                if (void 0 === e.c && void 0 === e.cyan) throw new Error("Unable to parse color from object " + JSON.stringify(t));
                this.setValues("cmyk", e)
            }
        };
        n.prototype = {
            rgb: function () {
                return this.setSpace("rgb", arguments)
            }, hsl: function () {
                return this.setSpace("hsl", arguments)
            }, hsv: function () {
                return this.setSpace("hsv", arguments)
            }, hwb: function () {
                return this.setSpace("hwb", arguments)
            }, cmyk: function () {
                return this.setSpace("cmyk", arguments)
            }, rgbArray: function () {
                return this.values.rgb
            }, hslArray: function () {
                return this.values.hsl
            }, hsvArray: function () {
                return this.values.hsv
            }, hwbArray: function () {
                var t = this.values;
                return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
            }, cmykArray: function () {
                return this.values.cmyk
            }, rgbaArray: function () {
                var t = this.values;
                return t.rgb.concat([t.alpha])
            }, hslaArray: function () {
                var t = this.values;
                return t.hsl.concat([t.alpha])
            }, alpha: function (t) {
                return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
            }, red: function (t) {
                return this.setChannel("rgb", 0, t)
            }, green: function (t) {
                return this.setChannel("rgb", 1, t)
            }, blue: function (t) {
                return this.setChannel("rgb", 2, t)
            }, hue: function (t) {
                return t && (t %= 360, t = 0 > t ? 360 + t : t), this.setChannel("hsl", 0, t)
            }, saturation: function (t) {
                return this.setChannel("hsl", 1, t)
            }, lightness: function (t) {
                return this.setChannel("hsl", 2, t)
            }, saturationv: function (t) {
                return this.setChannel("hsv", 1, t)
            }, whiteness: function (t) {
                return this.setChannel("hwb", 1, t)
            }, blackness: function (t) {
                return this.setChannel("hwb", 2, t)
            }, value: function (t) {
                return this.setChannel("hsv", 2, t)
            }, cyan: function (t) {
                return this.setChannel("cmyk", 0, t)
            }, magenta: function (t) {
                return this.setChannel("cmyk", 1, t)
            }, yellow: function (t) {
                return this.setChannel("cmyk", 2, t)
            }, black: function (t) {
                return this.setChannel("cmyk", 3, t)
            }, hexString: function () {
                return o.hexString(this.values.rgb)
            }, rgbString: function () {
                return o.rgbString(this.values.rgb, this.values.alpha)
            }, rgbaString: function () {
                return o.rgbaString(this.values.rgb, this.values.alpha)
            }, percentString: function () {
                return o.percentString(this.values.rgb, this.values.alpha)
            }, hslString: function () {
                return o.hslString(this.values.hsl, this.values.alpha)
            }, hslaString: function () {
                return o.hslaString(this.values.hsl, this.values.alpha)
            }, hwbString: function () {
                return o.hwbString(this.values.hwb, this.values.alpha)
            }, keyword: function () {
                return o.keyword(this.values.rgb, this.values.alpha)
            }, rgbNumber: function () {
                var t = this.values.rgb;
                return t[0] << 16 | t[1] << 8 | t[2]
            }, luminosity: function () {
                for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
                    var a = t[i] / 255;
                    e[i] = .03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)
                }
                return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
            }, contrast: function (t) {
                var e = this.luminosity(), i = t.luminosity();
                return e > i ? (e + .05) / (i + .05) : (i + .05) / (e + .05)
            }, level: function (t) {
                var e = this.contrast(t);
                return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
            }, dark: function () {
                var t = this.values.rgb, e = (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3;
                return 128 > e
            }, light: function () {
                return !this.dark()
            }, negate: function () {
                for (var t = [], e = 0; 3 > e; e++) t[e] = 255 - this.values.rgb[e];
                return this.setValues("rgb", t), this
            }, lighten: function (t) {
                var e = this.values.hsl;
                return e[2] += e[2] * t, this.setValues("hsl", e), this
            }, darken: function (t) {
                var e = this.values.hsl;
                return e[2] -= e[2] * t, this.setValues("hsl", e), this
            }, saturate: function (t) {
                var e = this.values.hsl;
                return e[1] += e[1] * t, this.setValues("hsl", e), this
            }, desaturate: function (t) {
                var e = this.values.hsl;
                return e[1] -= e[1] * t, this.setValues("hsl", e), this
            }, whiten: function (t) {
                var e = this.values.hwb;
                return e[1] += e[1] * t, this.setValues("hwb", e), this
            }, blacken: function (t) {
                var e = this.values.hwb;
                return e[2] += e[2] * t, this.setValues("hwb", e), this
            }, greyscale: function () {
                var t = this.values.rgb, e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                return this.setValues("rgb", [e, e, e]), this
            }, clearer: function (t) {
                var e = this.values.alpha;
                return this.setValues("alpha", e - e * t), this
            }, opaquer: function (t) {
                var e = this.values.alpha;
                return this.setValues("alpha", e + e * t), this
            }, rotate: function (t) {
                var e = this.values.hsl, i = (e[0] + t) % 360;
                return e[0] = 0 > i ? 360 + i : i, this.setValues("hsl", e), this
            }, mix: function (t, e) {
                var i = this, a = t, o = void 0 === e ? .5 : e, n = 2 * o - 1, r = i.alpha() - a.alpha(),
                    s = ((n * r === -1 ? n : (n + r) / (1 + n * r)) + 1) / 2, l = 1 - s;
                return this.rgb(s * i.red() + l * a.red(), s * i.green() + l * a.green(), s * i.blue() + l * a.blue()).alpha(i.alpha() * o + a.alpha() * (1 - o))
            }, toJSON: function () {
                return this.rgb()
            }, clone: function () {
                var t, e, i = new n, a = this.values, o = i.values;
                for (var r in a) a.hasOwnProperty(r) && (t = a[r], e = {}.toString.call(t), "[object Array]" === e ? o[r] = t.slice(0) : "[object Number]" === e ? o[r] = t : console.error("unexpected color value:", t));
                return i
            }
        }, n.prototype.spaces = {
            rgb: ["red", "green", "blue"],
            hsl: ["hue", "saturation", "lightness"],
            hsv: ["hue", "saturation", "value"],
            hwb: ["hue", "whiteness", "blackness"],
            cmyk: ["cyan", "magenta", "yellow", "black"]
        }, n.prototype.maxes = {
            rgb: [255, 255, 255],
            hsl: [360, 100, 100],
            hsv: [360, 100, 100],
            hwb: [360, 100, 100],
            cmyk: [100, 100, 100, 100]
        }, n.prototype.getValues = function (t) {
            for (var e = this.values, i = {}, a = 0; a < t.length; a++) i[t.charAt(a)] = e[t][a];
            return 1 !== e.alpha && (i.a = e.alpha), i
        }, n.prototype.setValues = function (t, e) {
            var i, o = this.values, n = this.spaces, r = this.maxes, s = 1;
            if ("alpha" === t) s = e; else if (e.length) o[t] = e.slice(0, t.length), s = e[t.length]; else if (void 0 !== e[t.charAt(0)]) {
                for (i = 0; i < t.length; i++) o[t][i] = e[t.charAt(i)];
                s = e.a
            } else if (void 0 !== e[n[t][0]]) {
                var l = n[t];
                for (i = 0; i < t.length; i++) o[t][i] = e[l[i]];
                s = e.alpha
            }
            if (o.alpha = Math.max(0, Math.min(1, void 0 === s ? o.alpha : s)), "alpha" === t) return !1;
            var h;
            for (i = 0; i < t.length; i++) h = Math.max(0, Math.min(r[t][i], o[t][i])), o[t][i] = Math.round(h);
            for (var d in n) d !== t && (o[d] = a[t][d](o[t]));
            return !0
        }, n.prototype.setSpace = function (t, e) {
            var i = e[0];
            return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this)
        }, n.prototype.setChannel = function (t, e, i) {
            var a = this.values[t];
            return void 0 === i ? a[e] : i === a[e] ? this : (a[e] = i, this.setValues(t, a), this)
        }, "undefined" != typeof window && (window.Color = n), e.exports = n
    }, {"chartjs-color-string": 2, "color-convert": 5}], 4: [function (t, e, i) {
        function a(t) {
            var e, i, a, o = t[0] / 255, n = t[1] / 255, r = t[2] / 255, s = Math.min(o, n, r), l = Math.max(o, n, r),
                h = l - s;
            return l == s ? e = 0 : o == l ? e = (n - r) / h : n == l ? e = 2 + (r - o) / h : r == l && (e = 4 + (o - n) / h), e = Math.min(60 * e, 360), 0 > e && (e += 360), a = (s + l) / 2, i = l == s ? 0 : .5 >= a ? h / (l + s) : h / (2 - l - s), [e, 100 * i, 100 * a]
        }

        function o(t) {
            var e, i, a, o = t[0], n = t[1], r = t[2], s = Math.min(o, n, r), l = Math.max(o, n, r), h = l - s;
            return i = 0 == l ? 0 : h / l * 1e3 / 10, l == s ? e = 0 : o == l ? e = (n - r) / h : n == l ? e = 2 + (r - o) / h : r == l && (e = 4 + (o - n) / h), e = Math.min(60 * e, 360), 0 > e && (e += 360), a = l / 255 * 1e3 / 10, [e, i, a]
        }

        function n(t) {
            var e = t[0], i = t[1], o = t[2], n = a(t)[0], r = 1 / 255 * Math.min(e, Math.min(i, o)),
                o = 1 - 1 / 255 * Math.max(e, Math.max(i, o));
            return [n, 100 * r, 100 * o]
        }

        function s(t) {
            var e, i, a, o, n = t[0] / 255, r = t[1] / 255, s = t[2] / 255;
            return o = Math.min(1 - n, 1 - r, 1 - s), e = (1 - n - o) / (1 - o) || 0, i = (1 - r - o) / (1 - o) || 0, a = (1 - s - o) / (1 - o) || 0, [100 * e, 100 * i, 100 * a, 100 * o]
        }

        function l(t) {
            return G[JSON.stringify(t)]
        }

        function h(t) {
            var e = t[0] / 255, i = t[1] / 255, a = t[2] / 255;
            e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92, a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92;
            var o = .4124 * e + .3576 * i + .1805 * a, n = .2126 * e + .7152 * i + .0722 * a,
                r = .0193 * e + .1192 * i + .9505 * a;
            return [100 * o, 100 * n, 100 * r]
        }

        function d(t) {
            var e, i, a, o = h(t), n = o[0], r = o[1], s = o[2];
            return n /= 95.047, r /= 100, s /= 108.883, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, e = 116 * r - 16, i = 500 * (n - r), a = 200 * (r - s), [e, i, a]
        }

        function c(t) {
            return B(d(t))
        }

        function u(t) {
            var e, i, a, o, n, r = t[0] / 360, s = t[1] / 100, l = t[2] / 100;
            if (0 == s) return n = 255 * l, [n, n, n];
            i = .5 > l ? l * (1 + s) : l + s - l * s, e = 2 * l - i, o = [0, 0, 0];
            for (var h = 0; 3 > h; h++) a = r + 1 / 3 * -(h - 1), 0 > a && a++, a > 1 && a--, n = 1 > 6 * a ? e + 6 * (i - e) * a : 1 > 2 * a ? i : 2 > 3 * a ? e + (i - e) * (2 / 3 - a) * 6 : e, o[h] = 255 * n;
            return o
        }

        function f(t) {
            var e, i, a = t[0], o = t[1] / 100, n = t[2] / 100;
            return 0 === n ? [0, 0, 0] : (n *= 2, o *= 1 >= n ? n : 2 - n, i = (n + o) / 2, e = 2 * o / (n + o), [a, 100 * e, 100 * i])
        }

        function p(t) {
            return n(u(t))
        }

        function m(t) {
            return s(u(t))
        }

        function v(t) {
            return l(u(t))
        }

        function x(t) {
            var e = t[0] / 60, i = t[1] / 100, a = t[2] / 100, o = Math.floor(e) % 6, n = e - Math.floor(e),
                r = 255 * a * (1 - i), s = 255 * a * (1 - i * n), l = 255 * a * (1 - i * (1 - n)), a = 255 * a;
            switch (o) {
                case 0:
                    return [a, l, r];
                case 1:
                    return [s, a, r];
                case 2:
                    return [r, a, l];
                case 3:
                    return [r, s, a];
                case 4:
                    return [l, r, a];
                case 5:
                    return [a, r, s]
            }
        }

        function y(t) {
            var e, i, a = t[0], o = t[1] / 100, n = t[2] / 100;
            return i = (2 - o) * n, e = o * n, e /= 1 >= i ? i : 2 - i, e = e || 0, i /= 2, [a, 100 * e, 100 * i]
        }

        function k(t) {
            return n(x(t))
        }

        function S(t) {
            return s(x(t))
        }

        function C(t) {
            return l(x(t))
        }

        function w(t) {
            var e, i, a, o, n = t[0] / 360, s = t[1] / 100, l = t[2] / 100, h = s + l;
            switch (h > 1 && (s /= h, l /= h), e = Math.floor(6 * n), i = 1 - l, a = 6 * n - e, 0 != (1 & e) && (a = 1 - a), o = s + a * (i - s), e) {
                default:
                case 6:
                case 0:
                    r = i, g = o, b = s;
                    break;
                case 1:
                    r = o, g = i, b = s;
                    break;
                case 2:
                    r = s, g = i, b = o;
                    break;
                case 3:
                    r = s, g = o, b = i;
                    break;
                case 4:
                    r = o, g = s, b = i;
                    break;
                case 5:
                    r = i, g = s, b = o
            }
            return [255 * r, 255 * g, 255 * b]
        }

        function M(t) {
            return a(w(t))
        }

        function D(t) {
            return o(w(t))
        }

        function A(t) {
            return s(w(t))
        }

        function I(t) {
            return l(w(t))
        }

        function F(t) {
            var e, i, a, o = t[0] / 100, n = t[1] / 100, r = t[2] / 100, s = t[3] / 100;
            return e = 1 - Math.min(1, o * (1 - s) + s), i = 1 - Math.min(1, n * (1 - s) + s), a = 1 - Math.min(1, r * (1 - s) + s), [255 * e, 255 * i, 255 * a]
        }

        function _(t) {
            return a(F(t))
        }

        function P(t) {
            return o(F(t))
        }

        function T(t) {
            return n(F(t))
        }

        function V(t) {
            return l(F(t))
        }

        function R(t) {
            var e, i, a, o = t[0] / 100, n = t[1] / 100, r = t[2] / 100;
            return e = 3.2406 * o + -1.5372 * n + r * -.4986, i = o * -.9689 + 1.8758 * n + .0415 * r, a = .0557 * o + n * -.204 + 1.057 * r, e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e = 12.92 * e, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i = 12.92 * i, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : a = 12.92 * a, e = Math.min(Math.max(0, e), 1), i = Math.min(Math.max(0, i), 1), a = Math.min(Math.max(0, a), 1), [255 * e, 255 * i, 255 * a]
        }

        function O(t) {
            var e, i, a, o = t[0], n = t[1], r = t[2];
            return o /= 95.047, n /= 100, r /= 108.883, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, e = 116 * n - 16, i = 500 * (o - n), a = 200 * (n - r), [e, i, a]
        }

        function W(t) {
            return B(O(t))
        }

        function L(t) {
            var e, i, a, o, n = t[0], r = t[1], s = t[2];
            return 8 >= n ? (i = 100 * n / 903.3, o = 7.787 * (i / 100) + 16 / 116) : (i = 100 * Math.pow((n + 16) / 116, 3), o = Math.pow(i / 100, 1 / 3)), e = .008856 >= e / 95.047 ? e = 95.047 * (r / 500 + o - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + o, 3), a = .008859 >= a / 108.883 ? a = 108.883 * (o - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(o - s / 200, 3), [e, i, a]
        }

        function B(t) {
            var e, i, a, o = t[0], n = t[1], r = t[2];
            return e = Math.atan2(r, n), i = 360 * e / 2 / Math.PI, 0 > i && (i += 360), a = Math.sqrt(n * n + r * r), [o, a, i]
        }

        function z(t) {
            return R(L(t))
        }

        function H(t) {
            var e, i, a, o = t[0], n = t[1], r = t[2];
            return a = r / 360 * 2 * Math.PI, e = n * Math.cos(a), i = n * Math.sin(a), [o, e, i]
        }

        function N(t) {
            return L(H(t))
        }

        function E(t) {
            return z(H(t))
        }

        function U(t) {
            return Q[t]
        }

        function j(t) {
            return a(U(t))
        }

        function q(t) {
            return o(U(t))
        }

        function Y(t) {
            return n(U(t))
        }

        function J(t) {
            return s(U(t))
        }

        function Z(t) {
            return d(U(t))
        }

        function X(t) {
            return h(U(t))
        }

        e.exports = {
            rgb2hsl: a,
            rgb2hsv: o,
            rgb2hwb: n,
            rgb2cmyk: s,
            rgb2keyword: l,
            rgb2xyz: h,
            rgb2lab: d,
            rgb2lch: c,
            hsl2rgb: u,
            hsl2hsv: f,
            hsl2hwb: p,
            hsl2cmyk: m,
            hsl2keyword: v,
            hsv2rgb: x,
            hsv2hsl: y,
            hsv2hwb: k,
            hsv2cmyk: S,
            hsv2keyword: C,
            hwb2rgb: w,
            hwb2hsl: M,
            hwb2hsv: D,
            hwb2cmyk: A,
            hwb2keyword: I,
            cmyk2rgb: F,
            cmyk2hsl: _,
            cmyk2hsv: P,
            cmyk2hwb: T,
            cmyk2keyword: V,
            keyword2rgb: U,
            keyword2hsl: j,
            keyword2hsv: q,
            keyword2hwb: Y,
            keyword2cmyk: J,
            keyword2lab: Z,
            keyword2xyz: X,
            xyz2rgb: R,
            xyz2lab: O,
            xyz2lch: W,
            lab2xyz: L,
            lab2rgb: z,
            lab2lch: B,
            lch2lab: H,
            lch2xyz: N,
            lch2rgb: E
        };
        var Q = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        }, G = {};
        for (var $ in Q) G[JSON.stringify(Q[$])] = $
    }, {}], 5: [function (t, e, i) {
        var a = t("./conversions"), o = function () {
            return new h
        };
        for (var n in a) {
            o[n + "Raw"] = function (t) {
                return function (e) {
                    return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), a[t](e)
                }
            }(n);
            var r = /(\w+)2(\w+)/.exec(n), s = r[1], l = r[2];
            o[s] = o[s] || {}, o[s][l] = o[n] = function (t) {
                return function (e) {
                    "number" == typeof e && (e = Array.prototype.slice.call(arguments));
                    var i = a[t](e);
                    if ("string" == typeof i || void 0 === i) return i;
                    for (var o = 0; o < i.length; o++) i[o] = Math.round(i[o]);
                    return i
                }
            }(n)
        }
        var h = function () {
            this.convs = {}
        };
        h.prototype.routeSpace = function (t, e) {
            var i = e[0];
            return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i))
        }, h.prototype.setValues = function (t, e) {
            return this.space = t, this.convs = {}, this.convs[t] = e, this
        }, h.prototype.getValues = function (t) {
            var e = this.convs[t];
            if (!e) {
                var i = this.space, a = this.convs[i];
                e = o[i][t](a), this.convs[t] = e
            }
            return e
        }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
            h.prototype[t] = function (e) {
                return this.routeSpace(t, arguments)
            }
        }), e.exports = o
    }, {"./conversions": 4}], 6: [function (t, e, i) {
        e.exports = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        }
    }, {}], 7: [function (t, e, i) {
        var a = t("./core/core.js")();
        t("./core/core.helpers")(a), t("./core/core.element")(a), t("./core/core.animation")(a), t("./core/core.controller")(a), t("./core/core.datasetController")(a), t("./core/core.layoutService")(a), t("./core/core.legend")(a), t("./core/core.plugin.js")(a), t("./core/core.scale")(a), t("./core/core.scaleService")(a), t("./core/core.title")(a), t("./core/core.tooltip")(a), t("./elements/element.arc")(a), t("./elements/element.line")(a), t("./elements/element.point")(a), t("./elements/element.rectangle")(a), t("./scales/scale.category")(a), t("./scales/scale.linear")(a), t("./scales/scale.logarithmic")(a), t("./scales/scale.radialLinear")(a), t("./scales/scale.time")(a), t("./controllers/controller.bar")(a), t("./controllers/controller.bubble")(a), t("./controllers/controller.doughnut")(a), t("./controllers/controller.line")(a), t("./controllers/controller.polarArea")(a), t("./controllers/controller.radar")(a), t("./charts/Chart.Bar")(a), t("./charts/Chart.Bubble")(a), t("./charts/Chart.Doughnut")(a), t("./charts/Chart.Line")(a), t("./charts/Chart.PolarArea")(a), t("./charts/Chart.Radar")(a), t("./charts/Chart.Scatter")(a), window.Chart = e.exports = a
    }, {
        "./charts/Chart.Bar": 8,
        "./charts/Chart.Bubble": 9,
        "./charts/Chart.Doughnut": 10,
        "./charts/Chart.Line": 11,
        "./charts/Chart.PolarArea": 12,
        "./charts/Chart.Radar": 13,
        "./charts/Chart.Scatter": 14,
        "./controllers/controller.bar": 15,
        "./controllers/controller.bubble": 16,
        "./controllers/controller.doughnut": 17,
        "./controllers/controller.line": 18,
        "./controllers/controller.polarArea": 19,
        "./controllers/controller.radar": 20,
        "./core/core.animation": 21,
        "./core/core.controller": 22,
        "./core/core.datasetController": 23,
        "./core/core.element": 24,
        "./core/core.helpers": 25,
        "./core/core.js": 26,
        "./core/core.layoutService": 27,
        "./core/core.legend": 28,
        "./core/core.plugin.js": 29,
        "./core/core.scale": 30,
        "./core/core.scaleService": 31,
        "./core/core.title": 32,
        "./core/core.tooltip": 33,
        "./elements/element.arc": 34,
        "./elements/element.line": 35,
        "./elements/element.point": 36,
        "./elements/element.rectangle": 37,
        "./scales/scale.category": 38,
        "./scales/scale.linear": 39,
        "./scales/scale.logarithmic": 40,
        "./scales/scale.radialLinear": 41,
        "./scales/scale.time": 42
    }], 8: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            t.Bar = function (e, i) {
                return i.type = "bar", new t(e, i)
            }
        }
    }, {}], 9: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            t.Bubble = function (e, i) {
                return i.type = "bubble", new t(e, i)
            }
        }
    }, {}], 10: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            t.Doughnut = function (e, i) {
                return i.type = "doughnut", new t(e, i)
            }
        }
    }, {}], 11: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            t.Line = function (e, i) {
                return i.type = "line", new t(e, i)
            }
        }
    }, {}], 12: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            t.PolarArea = function (e, i) {
                return i.type = "polarArea", new t(e, i)
            }
        }
    }, {}], 13: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            t.Radar = function (e, i) {
                return i.options = t.helpers.configMerge({aspectRatio: 1}, i.options), i.type = "radar", new t(e, i)
            }
        }
    }, {}], 14: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = {
                hover: {mode: "single"},
                scales: {
                    xAxes: [{type: "linear", position: "bottom", id: "x-axis-1"}],
                    yAxes: [{type: "linear", position: "left", id: "y-axis-1"}]
                },
                tooltips: {
                    callbacks: {
                        title: function (t, e) {
                            return ""
                        }, label: function (t, e) {
                            return "(" + t.xLabel + ", " + t.yLabel + ")"
                        }
                    }
                }
            };
            t.defaults.scatter = e, t.controllers.scatter = t.controllers.line, t.Scatter = function (e, i) {
                return i.type = "scatter", new t(e, i)
            }
        }
    }, {}], 15: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = t.helpers;
            t.defaults.bar = {
                hover: {mode: "label"},
                scales: {
                    xAxes: [{
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        gridLines: {offsetGridLines: !0}
                    }], yAxes: [{type: "linear"}]
                }
            }, t.controllers.bar = t.DatasetController.extend({
                dataElementType: t.elements.Rectangle, initialize: function (e, i) {
                    t.DatasetController.prototype.initialize.call(this, e, i), this.getMeta().bar = !0
                }, getBarCount: function () {
                    var t = 0;
                    return e.each(this.chart.data.datasets, function (e, i) {
                        var a = this.chart.getDatasetMeta(i);
                        a.bar && this.chart.isDatasetVisible(i) && ++t
                    }, this), t
                }, update: function (t) {
                    e.each(this.getMeta().data, function (e, i) {
                        this.updateElement(e, i, t)
                    }, this)
                }, updateElement: function (t, i, a) {
                    var o = this.getMeta(), n = this.getScaleForId(o.xAxisID), r = this.getScaleForId(o.yAxisID),
                        s = r.getBasePixel(), l = this.chart.options.elements.rectangle, h = t.custom || {},
                        d = this.getDataset();
                    e.extend(t, {
                        _xScale: n,
                        _yScale: r,
                        _datasetIndex: this.index,
                        _index: i,
                        _model: {
                            x: this.calculateBarX(i, this.index),
                            y: a ? s : this.calculateBarY(i, this.index),
                            label: this.chart.data.labels[i],
                            datasetLabel: d.label,
                            base: a ? s : this.calculateBarBase(this.index, i),
                            width: this.calculateBarWidth(i),
                            backgroundColor: h.backgroundColor ? h.backgroundColor : e.getValueAtIndexOrDefault(d.backgroundColor, i, l.backgroundColor),
                            borderSkipped: h.borderSkipped ? h.borderSkipped : l.borderSkipped,
                            borderColor: h.borderColor ? h.borderColor : e.getValueAtIndexOrDefault(d.borderColor, i, l.borderColor),
                            borderWidth: h.borderWidth ? h.borderWidth : e.getValueAtIndexOrDefault(d.borderWidth, i, l.borderWidth)
                        }
                    }), t.pivot()
                }, calculateBarBase: function (t, e) {
                    var i = this.getMeta(), a = this.getScaleForId(i.yAxisID), o = 0;
                    if (a.options.stacked) {
                        var n = this.chart, r = n.data.datasets, s = r[t].data[e];
                        if (0 > s) for (var l = 0; t > l; l++) {
                            var h = r[l], d = n.getDatasetMeta(l);
                            d.bar && d.yAxisID === a.id && n.isDatasetVisible(l) && (o += h.data[e] < 0 ? h.data[e] : 0)
                        } else for (var c = 0; t > c; c++) {
                            var u = r[c], f = n.getDatasetMeta(c);
                            f.bar && f.yAxisID === a.id && n.isDatasetVisible(c) && (o += u.data[e] > 0 ? u.data[e] : 0)
                        }
                        return a.getPixelForValue(o)
                    }
                    return a.getBasePixel()
                }, getRuler: function (t) {
                    var e, i = this.getMeta(), a = this.getScaleForId(i.xAxisID), o = this.getBarCount();
                    e = "category" === a.options.type ? a.getPixelForTick(t + 1) - a.getPixelForTick(t) : a.width / a.ticks.length;
                    var n = e * a.options.categoryPercentage, r = (e - e * a.options.categoryPercentage) / 2, s = n / o;
                    if (a.ticks.length !== this.chart.data.labels.length) {
                        var l = a.ticks.length / this.chart.data.labels.length;
                        s *= l
                    }
                    var h = s * a.options.barPercentage, d = s - s * a.options.barPercentage;
                    return {
                        datasetCount: o,
                        tickWidth: e,
                        categoryWidth: n,
                        categorySpacing: r,
                        fullBarWidth: s,
                        barWidth: h,
                        barSpacing: d
                    }
                }, calculateBarWidth: function (t) {
                    var e = this.getScaleForId(this.getMeta().xAxisID), i = this.getRuler(t);
                    return e.options.stacked ? i.categoryWidth : i.barWidth
                }, getBarIndex: function (t) {
                    var e, i, a = 0;
                    for (i = 0; t > i; ++i) e = this.chart.getDatasetMeta(i), e.bar && this.chart.isDatasetVisible(i) && ++a;
                    return a
                }, calculateBarX: function (t, e) {
                    var i = this.getMeta(), a = this.getScaleForId(i.xAxisID), o = this.getBarIndex(e),
                        n = this.getRuler(t), r = a.getPixelForValue(null, t, e, this.chart.isCombo);
                    return r -= this.chart.isCombo ? n.tickWidth / 2 : 0, a.options.stacked ? r + n.categoryWidth / 2 + n.categorySpacing : r + n.barWidth / 2 + n.categorySpacing + n.barWidth * o + n.barSpacing / 2 + n.barSpacing * o
                }, calculateBarY: function (t, e) {
                    var i = this.getMeta(), a = this.getScaleForId(i.yAxisID), o = this.getDataset().data[t];
                    if (a.options.stacked) {
                        for (var n = 0, r = 0, s = 0; e > s; s++) {
                            var l = this.chart.data.datasets[s], h = this.chart.getDatasetMeta(s);
                            h.bar && h.yAxisID === a.id && this.chart.isDatasetVisible(s) && (l.data[t] < 0 ? r += l.data[t] || 0 : n += l.data[t] || 0)
                        }
                        return 0 > o ? a.getPixelForValue(r + o) : a.getPixelForValue(n + o)
                    }
                    return a.getPixelForValue(o)
                }, draw: function (t) {
                    var i = t || 1;
                    e.each(this.getMeta().data, function (t, e) {
                        var a = this.getDataset().data[e];
                        null === a || void 0 === a || isNaN(a) || t.transition(i).draw()
                    }, this)
                }, setHoverStyle: function (t) {
                    var i = this.chart.data.datasets[t._datasetIndex], a = t._index, o = t.custom || {}, n = t._model;
                    n.backgroundColor = o.hoverBackgroundColor ? o.hoverBackgroundColor : e.getValueAtIndexOrDefault(i.hoverBackgroundColor, a, e.getHoverColor(n.backgroundColor)), n.borderColor = o.hoverBorderColor ? o.hoverBorderColor : e.getValueAtIndexOrDefault(i.hoverBorderColor, a, e.getHoverColor(n.borderColor)), n.borderWidth = o.hoverBorderWidth ? o.hoverBorderWidth : e.getValueAtIndexOrDefault(i.hoverBorderWidth, a, n.borderWidth)
                }, removeHoverStyle: function (t) {
                    var i = this.chart.data.datasets[t._datasetIndex], a = t._index, o = t.custom || {}, n = t._model,
                        r = this.chart.options.elements.rectangle;
                    n.backgroundColor = o.backgroundColor ? o.backgroundColor : e.getValueAtIndexOrDefault(i.backgroundColor, a, r.backgroundColor), n.borderColor = o.borderColor ? o.borderColor : e.getValueAtIndexOrDefault(i.borderColor, a, r.borderColor), n.borderWidth = o.borderWidth ? o.borderWidth : e.getValueAtIndexOrDefault(i.borderWidth, a, r.borderWidth)
                }
            }), t.defaults.horizontalBar = {
                hover: {mode: "label"},
                scales: {
                    xAxes: [{type: "linear", position: "bottom"}],
                    yAxes: [{
                        position: "left",
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        gridLines: {offsetGridLines: !0}
                    }]
                },
                elements: {rectangle: {borderSkipped: "left"}},
                tooltips: {
                    callbacks: {
                        title: function (t, e) {
                            var i = "";
                            return t.length > 0 && (t[0].yLabel ? i = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i
                        }, label: function (t, e) {
                            var i = e.datasets[t.datasetIndex].label || "";
                            return i + ": " + t.xLabel
                        }
                    }
                }
            }, t.controllers.horizontalBar = t.controllers.bar.extend({
                updateElement: function (t, i, a, o) {
                    var n = this.getMeta(), r = this.getScaleForId(n.xAxisID), s = this.getScaleForId(n.yAxisID),
                        l = r.getBasePixel(), h = t.custom || {}, d = this.getDataset(),
                        c = this.chart.options.elements.rectangle;
                    e.extend(t, {
                        _xScale: r,
                        _yScale: s,
                        _datasetIndex: this.index,
                        _index: i,
                        _model: {
                            x: a ? l : this.calculateBarX(i, this.index),
                            y: this.calculateBarY(i, this.index),
                            label: this.chart.data.labels[i],
                            datasetLabel: d.label,
                            base: a ? l : this.calculateBarBase(this.index, i),
                            height: this.calculateBarHeight(i),
                            backgroundColor: h.backgroundColor ? h.backgroundColor : e.getValueAtIndexOrDefault(d.backgroundColor, i, c.backgroundColor),
                            borderSkipped: h.borderSkipped ? h.borderSkipped : c.borderSkipped,
                            borderColor: h.borderColor ? h.borderColor : e.getValueAtIndexOrDefault(d.borderColor, i, c.borderColor),
                            borderWidth: h.borderWidth ? h.borderWidth : e.getValueAtIndexOrDefault(d.borderWidth, i, c.borderWidth)
                        },
                        draw: function () {
                            function t(t) {
                                return l[(d + t) % 4]
                            }

                            var e = this._chart.ctx, i = this._view, a = i.height / 2, o = i.y - a, n = i.y + a,
                                r = i.base - (i.base - i.x), s = i.borderWidth / 2;
                            i.borderWidth && (o += s, n -= s, r += s), e.beginPath(), e.fillStyle = i.backgroundColor, e.strokeStyle = i.borderColor, e.lineWidth = i.borderWidth;
                            var l = [[i.base, n], [i.base, o], [r, o], [r, n]], h = ["bottom", "left", "top", "right"],
                                d = h.indexOf(i.borderSkipped, 0);
                            -1 === d && (d = 0), e.moveTo.apply(e, t(0));
                            for (var c = 1; 4 > c; c++) e.lineTo.apply(e, t(c));
                            e.fill(), i.borderWidth && e.stroke()
                        },
                        inRange: function (t, e) {
                            var i = this._view, a = !1;
                            return i && (a = i.x < i.base ? e >= i.y - i.height / 2 && e <= i.y + i.height / 2 && t >= i.x && t <= i.base : e >= i.y - i.height / 2 && e <= i.y + i.height / 2 && t >= i.base && t <= i.x), a
                        }
                    }), t.pivot()
                }, calculateBarBase: function (t, e) {
                    var i = this.getMeta(), a = this.getScaleForId(i.xAxisID), o = 0;
                    if (a.options.stacked) {
                        var n = this.chart.data.datasets[t].data[e];
                        if (0 > n) for (var r = 0; t > r; r++) {
                            var s = this.chart.data.datasets[r], l = this.chart.getDatasetMeta(r);
                            l.bar && l.xAxisID === a.id && this.chart.isDatasetVisible(r) && (o += s.data[e] < 0 ? s.data[e] : 0)
                        } else for (var h = 0; t > h; h++) {
                            var d = this.chart.data.datasets[h], c = this.chart.getDatasetMeta(h);
                            c.bar && c.xAxisID === a.id && this.chart.isDatasetVisible(h) && (o += d.data[e] > 0 ? d.data[e] : 0)
                        }
                        return a.getPixelForValue(o)
                    }
                    return a.getBasePixel()
                }, getRuler: function (t) {
                    var e, i = this.getMeta(), a = this.getScaleForId(i.yAxisID), o = this.getBarCount();
                    e = "category" === a.options.type ? a.getPixelForTick(t + 1) - a.getPixelForTick(t) : a.width / a.ticks.length;
                    var n = e * a.options.categoryPercentage, r = (e - e * a.options.categoryPercentage) / 2, s = n / o;
                    if (a.ticks.length !== this.chart.data.labels.length) {
                        var l = a.ticks.length / this.chart.data.labels.length;
                        s *= l
                    }
                    var h = s * a.options.barPercentage, d = s - s * a.options.barPercentage;
                    return {
                        datasetCount: o,
                        tickHeight: e,
                        categoryHeight: n,
                        categorySpacing: r,
                        fullBarHeight: s,
                        barHeight: h,
                        barSpacing: d
                    }
                }, calculateBarHeight: function (t) {
                    var e = this.getScaleForId(this.getMeta().yAxisID), i = this.getRuler(t);
                    return e.options.stacked ? i.categoryHeight : i.barHeight
                }, calculateBarX: function (t, e) {
                    var i = this.getMeta(), a = this.getScaleForId(i.xAxisID), o = this.getDataset().data[t];
                    if (a.options.stacked) {
                        for (var n = 0, r = 0, s = 0; e > s; s++) {
                            var l = this.chart.data.datasets[s], h = this.chart.getDatasetMeta(s);
                            h.bar && h.xAxisID === a.id && this.chart.isDatasetVisible(s) && (l.data[t] < 0 ? r += l.data[t] || 0 : n += l.data[t] || 0)
                        }
                        return 0 > o ? a.getPixelForValue(r + o) : a.getPixelForValue(n + o)
                    }
                    return a.getPixelForValue(o)
                }, calculateBarY: function (t, e) {
                    var i = this.getMeta(), a = this.getScaleForId(i.yAxisID), o = this.getBarIndex(e),
                        n = this.getRuler(t), r = a.getPixelForValue(null, t, e, this.chart.isCombo);
                    return r -= this.chart.isCombo ? n.tickHeight / 2 : 0, a.options.stacked ? r + n.categoryHeight / 2 + n.categorySpacing : r + n.barHeight / 2 + n.categorySpacing + n.barHeight * o + n.barSpacing / 2 + n.barSpacing * o
                }
            })
        }
    }, {}], 16: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = t.helpers;
            t.defaults.bubble = {
                hover: {mode: "single"},
                scales: {
                    xAxes: [{type: "linear", position: "bottom", id: "x-axis-0"}],
                    yAxes: [{type: "linear", position: "left", id: "y-axis-0"}]
                },
                tooltips: {
                    callbacks: {
                        title: function (t, e) {
                            return ""
                        }, label: function (t, e) {
                            var i = e.datasets[t.datasetIndex].label || "",
                                a = e.datasets[t.datasetIndex].data[t.index];
                            return i + ": (" + a.x + ", " + a.y + ", " + a.r + ")"
                        }
                    }
                }
            }, t.controllers.bubble = t.DatasetController.extend({
                dataElementType: t.elements.Point, update: function (t) {
                    var i = this.getMeta(), a = i.data;
                    e.each(a, function (e, i) {
                        this.updateElement(e, i, t)
                    }, this)
                }, updateElement: function (t, i, a) {
                    var o = this.getMeta(), n = this.getScaleForId(o.xAxisID), r = this.getScaleForId(o.yAxisID),
                        s = t.custom || {}, l = this.getDataset(), h = l.data[i], d = this.chart.options.elements.point;
                    e.extend(t, {
                        _xScale: n,
                        _yScale: r,
                        _datasetIndex: this.index,
                        _index: i,
                        _model: {
                            x: a ? n.getPixelForDecimal(.5) : n.getPixelForValue(h, i, this.index, this.chart.isCombo),
                            y: a ? r.getBasePixel() : r.getPixelForValue(h, i, this.index),
                            radius: a ? 0 : s.radius ? s.radius : this.getRadius(h),
                            backgroundColor: s.backgroundColor ? s.backgroundColor : e.getValueAtIndexOrDefault(l.backgroundColor, i, d.backgroundColor),
                            borderColor: s.borderColor ? s.borderColor : e.getValueAtIndexOrDefault(l.borderColor, i, d.borderColor),
                            borderWidth: s.borderWidth ? s.borderWidth : e.getValueAtIndexOrDefault(l.borderWidth, i, d.borderWidth),
                            hitRadius: s.hitRadius ? s.hitRadius : e.getValueAtIndexOrDefault(l.hitRadius, i, d.hitRadius)
                        }
                    });
                    var c = t._model;
                    c.skip = s.skip ? s.skip : isNaN(c.x) || isNaN(c.y), t.pivot()
                }, getRadius: function (t) {
                    return t.r || this.chart.options.elements.point.radius
                }, setHoverStyle: function (t) {
                    var i = this.chart.data.datasets[t._datasetIndex], a = t._index, o = t.custom || {}, n = t._model;
                    n.radius = o.hoverRadius ? o.hoverRadius : e.getValueAtIndexOrDefault(i.hoverRadius, a, this.chart.options.elements.point.hoverRadius) + this.getRadius(this.getDataset().data[t._index]), n.backgroundColor = o.hoverBackgroundColor ? o.hoverBackgroundColor : e.getValueAtIndexOrDefault(i.hoverBackgroundColor, a, e.getHoverColor(n.backgroundColor)), n.borderColor = o.hoverBorderColor ? o.hoverBorderColor : e.getValueAtIndexOrDefault(i.hoverBorderColor, a, e.getHoverColor(n.borderColor)), n.borderWidth = o.hoverBorderWidth ? o.hoverBorderWidth : e.getValueAtIndexOrDefault(i.hoverBorderWidth, a, n.borderWidth)
                }, removeHoverStyle: function (t) {
                    var i = this.chart.data.datasets[t._datasetIndex], a = t._index, o = t.custom || {}, n = t._model,
                        r = this.chart.options.elements.point;
                    n.radius = o.radius ? o.radius : this.getRadius(i.data[t._index]), n.backgroundColor = o.backgroundColor ? o.backgroundColor : e.getValueAtIndexOrDefault(i.backgroundColor, a, r.backgroundColor), n.borderColor = o.borderColor ? o.borderColor : e.getValueAtIndexOrDefault(i.borderColor, a, r.borderColor), n.borderWidth = o.borderWidth ? o.borderWidth : e.getValueAtIndexOrDefault(i.borderWidth, a, r.borderWidth)
                }
            })
        }
    }, {}], 17: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = t.helpers, i = t.defaults;
            i.doughnut = {
                animation: {animateRotate: !0, animateScale: !1},
                aspectRatio: 1,
                hover: {mode: "single"},
                legendCallback: function (t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    var i = t.data, a = i.datasets, o = i.labels;
                    if (a.length) for (var n = 0; n < a[0].data.length; ++n) e.push('<li><span style="background-color:' + a[0].backgroundColor[n] + '"></span>'), o[n] && e.push(o[n]), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function (t) {
                            var i = t.data;
                            return i.labels.length && i.datasets.length ? i.labels.map(function (a, o) {
                                var n = t.getDatasetMeta(0), r = i.datasets[0], s = n.data[o], l = s.custom || {},
                                    h = e.getValueAtIndexOrDefault, d = t.options.elements.arc,
                                    c = l.backgroundColor ? l.backgroundColor : h(r.backgroundColor, o, d.backgroundColor),
                                    u = l.borderColor ? l.borderColor : h(r.borderColor, o, d.borderColor),
                                    f = l.borderWidth ? l.borderWidth : h(r.borderWidth, o, d.borderWidth);
                                return {
                                    text: a,
                                    fillStyle: c,
                                    strokeStyle: u,
                                    lineWidth: f,
                                    hidden: isNaN(r.data[o]) || n.data[o].hidden,
                                    index: o
                                }
                            }) : []
                        }
                    }, onClick: function (t, e) {
                        var i, a, o, n = e.index, r = this.chart;
                        for (i = 0, a = (r.data.datasets || []).length; a > i; ++i) o = r.getDatasetMeta(i), o.data[n].hidden = !o.data[n].hidden;
                        r.update()
                    }
                },
                cutoutPercentage: 50,
                rotation: Math.PI * -.5,
                circumference: 2 * Math.PI,
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (t, e) {
                            return e.labels[t.index] + ": " + e.datasets[t.datasetIndex].data[t.index]
                        }
                    }
                }
            }, i.pie = e.clone(i.doughnut), e.extend(i.pie, {cutoutPercentage: 0}), t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                dataElementType: t.elements.Arc, linkScales: e.noop, getRingIndex: function (t) {
                    for (var e = 0, i = 0; t > i; ++i) this.chart.isDatasetVisible(i) && ++e;
                    return e
                }, update: function (t) {
                    var i = this, a = i.chart, o = a.chartArea, n = a.options, r = n.elements.arc,
                        s = o.right - o.left - r.borderWidth, l = o.bottom - o.top - r.borderWidth, h = Math.min(s, l),
                        d = {x: 0, y: 0}, c = i.getMeta(), u = n.cutoutPercentage, f = n.circumference;
                    if (f < 2 * Math.PI) {
                        var g = n.rotation % (2 * Math.PI);
                        g += 2 * Math.PI * (g >= Math.PI ? -1 : g < -Math.PI ? 1 : 0);
                        var p = g + f, m = {x: Math.cos(g), y: Math.sin(g)}, b = {x: Math.cos(p), y: Math.sin(p)},
                            v = 0 >= g && p >= 0 || g <= 2 * Math.PI && 2 * Math.PI <= p,
                            x = g <= .5 * Math.PI && .5 * Math.PI <= p || g <= 2.5 * Math.PI && 2.5 * Math.PI <= p,
                            y = g <= -Math.PI && -Math.PI <= p || g <= Math.PI && Math.PI <= p,
                            k = g <= .5 * -Math.PI && .5 * -Math.PI <= p || g <= 1.5 * Math.PI && 1.5 * Math.PI <= p,
                            S = u / 100, C = {
                                x: y ? -1 : Math.min(m.x * (m.x < 0 ? 1 : S), b.x * (b.x < 0 ? 1 : S)),
                                y: k ? -1 : Math.min(m.y * (m.y < 0 ? 1 : S), b.y * (b.y < 0 ? 1 : S))
                            }, w = {
                                x: v ? 1 : Math.max(m.x * (m.x > 0 ? 1 : S), b.x * (b.x > 0 ? 1 : S)),
                                y: x ? 1 : Math.max(m.y * (m.y > 0 ? 1 : S), b.y * (b.y > 0 ? 1 : S))
                            }, M = {width: .5 * (w.x - C.x), height: .5 * (w.y - C.y)};
                        h = Math.min(s / M.width, l / M.height), d = {x: (w.x + C.x) * -.5, y: (w.y + C.y) * -.5}
                    }
                    a.outerRadius = Math.max(h / 2, 0), a.innerRadius = Math.max(u ? a.outerRadius / 100 * u : 1, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / a.getVisibleDatasetCount(), a.offsetX = d.x * a.outerRadius, a.offsetY = d.y * a.outerRadius, c.total = i.calculateTotal(), i.outerRadius = a.outerRadius - a.radiusLength * i.getRingIndex(i.index), i.innerRadius = i.outerRadius - a.radiusLength, e.each(c.data, function (e, a) {
                        i.updateElement(e, a, t)
                    })
                }, updateElement: function (t, i, a) {
                    var o = this, n = o.chart, r = n.chartArea, s = n.options, l = s.animation, h = s.elements.arc,
                        d = (r.left + r.right) / 2, c = (r.top + r.bottom) / 2, u = s.rotation, f = s.rotation,
                        g = o.getDataset(),
                        p = a && l.animateRotate ? 0 : t.hidden ? 0 : o.calculateCircumference(g.data[i]) * (s.circumference / (2 * Math.PI)),
                        m = a && l.animateScale ? 0 : o.innerRadius, b = a && l.animateScale ? 0 : o.outerRadius,
                        v = t.custom || {}, x = e.getValueAtIndexOrDefault;
                    e.extend(t, {
                        _datasetIndex: o.index,
                        _index: i,
                        _model: {
                            x: d + n.offsetX,
                            y: c + n.offsetY,
                            startAngle: u,
                            endAngle: f,
                            circumference: p,
                            outerRadius: b,
                            innerRadius: m,
                            label: x(g.label, i, n.data.labels[i])
                        }
                    });
                    var y = t._model;
                    y.backgroundColor = v.backgroundColor ? v.backgroundColor : x(g.backgroundColor, i, h.backgroundColor), y.hoverBackgroundColor = v.hoverBackgroundColor ? v.hoverBackgroundColor : x(g.hoverBackgroundColor, i, h.hoverBackgroundColor), y.borderWidth = v.borderWidth ? v.borderWidth : x(g.borderWidth, i, h.borderWidth), y.borderColor = v.borderColor ? v.borderColor : x(g.borderColor, i, h.borderColor), a && l.animateRotate || (0 === i ? y.startAngle = s.rotation : y.startAngle = o.getMeta().data[i - 1]._model.endAngle, y.endAngle = y.startAngle + y.circumference), t.pivot()
                }, removeHoverStyle: function (e) {
                    t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                }, calculateTotal: function () {
                    var t, i = this.getDataset(), a = this.getMeta(), o = 0;
                    return e.each(a.data, function (e, a) {
                        t = i.data[a], isNaN(t) || e.hidden || (o += Math.abs(t))
                    }), o
                }, calculateCircumference: function (t) {
                    var e = this.getMeta().total;
                    return e > 0 && !isNaN(t) ? 2 * Math.PI * (t / e) : 0
                }
            })
        }
    }, {}], 18: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = t.helpers;
            t.defaults.line = {
                showLines: !0,
                hover: {mode: "label"},
                scales: {xAxes: [{type: "category", id: "x-axis-0"}], yAxes: [{type: "linear", id: "y-axis-0"}]}
            }, t.controllers.line = t.DatasetController.extend({
                datasetElementType: t.elements.Line,
                dataElementType: t.elements.Point,
                addElementAndReset: function (e) {
                    var i = this, a = i.chart.options;
                    t.DatasetController.prototype.addElementAndReset.call(i, e), a.showLines && 0 !== a.elements.line.tension && i.updateBezierControlPoints()
                },
                update: function (t) {
                    var i, a, o, n, r = this, s = r.getMeta(), l = s.dataset, h = s.data || [], d = r.chart.options,
                        c = d.elements.line, u = r.getScaleForId(s.yAxisID);
                    for (d.showLines && (o = r.getDataset(), n = l.custom || {}, void 0 !== o.tension && void 0 === o.lineTension && (o.lineTension = o.tension), l._scale = u, l._datasetIndex = r.index, l._children = h, l._model = {
                        tension: n.tension ? n.tension : e.getValueOrDefault(o.lineTension, c.tension),
                        backgroundColor: n.backgroundColor ? n.backgroundColor : o.backgroundColor || c.backgroundColor,
                        borderWidth: n.borderWidth ? n.borderWidth : o.borderWidth || c.borderWidth,
                        borderColor: n.borderColor ? n.borderColor : o.borderColor || c.borderColor,
                        borderCapStyle: n.borderCapStyle ? n.borderCapStyle : o.borderCapStyle || c.borderCapStyle,
                        borderDash: n.borderDash ? n.borderDash : o.borderDash || c.borderDash,
                        borderDashOffset: n.borderDashOffset ? n.borderDashOffset : o.borderDashOffset || c.borderDashOffset,
                        borderJoinStyle: n.borderJoinStyle ? n.borderJoinStyle : o.borderJoinStyle || c.borderJoinStyle,
                        fill: n.fill ? n.fill : void 0 !== o.fill ? o.fill : c.fill,
                        scaleTop: u.top,
                        scaleBottom: u.bottom,
                        scaleZero: u.getBasePixel()
                    }, l.pivot()), i = 0, a = h.length; a > i; ++i) r.updateElement(h[i], i, t);
                    d.showLines && 0 !== c.tension && r.updateBezierControlPoints()
                },
                getPointBackgroundColor: function (t, i) {
                    var a = this.chart.options.elements.point.backgroundColor, o = this.getDataset(),
                        n = t.custom || {};
                    return n.backgroundColor ? a = n.backgroundColor : o.pointBackgroundColor ? a = e.getValueAtIndexOrDefault(o.pointBackgroundColor, i, a) : o.backgroundColor && (a = o.backgroundColor), a
                },
                getPointBorderColor: function (t, i) {
                    var a = this.chart.options.elements.point.borderColor, o = this.getDataset(), n = t.custom || {};
                    return n.borderColor ? a = n.borderColor : o.pointBorderColor ? a = e.getValueAtIndexOrDefault(o.pointBorderColor, i, a) : o.borderColor && (a = o.borderColor), a
                },
                getPointBorderWidth: function (t, i) {
                    var a = this.chart.options.elements.point.borderWidth, o = this.getDataset(), n = t.custom || {};
                    return n.borderWidth ? a = n.borderWidth : o.pointBorderWidth ? a = e.getValueAtIndexOrDefault(o.pointBorderWidth, i, a) : o.borderWidth && (a = o.borderWidth), a
                },
                updateElement: function (t, i, a) {
                    var o, n, r = this, s = r.getMeta(), l = t.custom || {}, h = r.getDataset(), d = r.index,
                        c = h.data[i], u = r.getScaleForId(s.yAxisID), f = r.getScaleForId(s.xAxisID),
                        g = r.chart.options.elements.point;
                    void 0 !== h.radius && void 0 === h.pointRadius && (h.pointRadius = h.radius), void 0 !== h.hitRadius && void 0 === h.pointHitRadius && (h.pointHitRadius = h.hitRadius), o = f.getPixelForValue(c, i, d, r.chart.isCombo), n = a ? u.getBasePixel() : r.calculatePointY(c, i, d, r.chart.isCombo), t._xScale = f, t._yScale = u, t._datasetIndex = d, t._index = i, t._model = {
                        x: o,
                        y: n,
                        skip: l.skip || isNaN(o) || isNaN(n),
                        radius: l.radius || e.getValueAtIndexOrDefault(h.pointRadius, i, g.radius),
                        pointStyle: l.pointStyle || e.getValueAtIndexOrDefault(h.pointStyle, i, g.pointStyle),
                        backgroundColor: r.getPointBackgroundColor(t, i),
                        borderColor: r.getPointBorderColor(t, i),
                        borderWidth: r.getPointBorderWidth(t, i),
                        tension: s.dataset._model ? s.dataset._model.tension : 0,
                        hitRadius: l.hitRadius || e.getValueAtIndexOrDefault(h.pointHitRadius, i, g.hitRadius)
                    }
                },
                calculatePointY: function (t, e, i, a) {
                    var o, n, r, s = this, l = s.chart, h = s.getMeta(), d = s.getScaleForId(h.yAxisID), c = 0, u = 0;
                    if (d.options.stacked) {
                        for (o = 0; i > o; o++) n = l.data.datasets[o], r = l.getDatasetMeta(o), "line" === r.type && l.isDatasetVisible(o) && (n.data[e] < 0 ? u += n.data[e] || 0 : c += n.data[e] || 0);
                        return 0 > t ? d.getPixelForValue(u + t) : d.getPixelForValue(c + t)
                    }
                    return d.getPixelForValue(t)
                },
                updateBezierControlPoints: function () {
                    var t, i, a, o, n, r = this.getMeta(), s = this.chart.chartArea, l = r.data || [];
                    for (t = 0, i = l.length; i > t; ++t) a = l[t], o = a._model, n = e.splineCurve(e.previousItem(l, t)._model, o, e.nextItem(l, t)._model, r.dataset._model.tension), o.controlPointPreviousX = Math.max(Math.min(n.previous.x, s.right), s.left), o.controlPointPreviousY = Math.max(Math.min(n.previous.y, s.bottom), s.top), o.controlPointNextX = Math.max(Math.min(n.next.x, s.right), s.left), o.controlPointNextY = Math.max(Math.min(n.next.y, s.bottom), s.top), a.pivot()
                },
                draw: function (t) {
                    var e, i, a = this.getMeta(), o = a.data || [], n = t || 1;
                    for (e = 0, i = o.length; i > e; ++e) o[e].transition(n);
                    for (this.chart.options.showLines && a.dataset.transition(n).draw(), e = 0, i = o.length; i > e; ++e) o[e].draw()
                },
                setHoverStyle: function (t) {
                    var i = this.chart.data.datasets[t._datasetIndex], a = t._index, o = t.custom || {}, n = t._model;
                    n.radius = o.hoverRadius || e.getValueAtIndexOrDefault(i.pointHoverRadius, a, this.chart.options.elements.point.hoverRadius), n.backgroundColor = o.hoverBackgroundColor || e.getValueAtIndexOrDefault(i.pointHoverBackgroundColor, a, e.getHoverColor(n.backgroundColor)), n.borderColor = o.hoverBorderColor || e.getValueAtIndexOrDefault(i.pointHoverBorderColor, a, e.getHoverColor(n.borderColor)), n.borderWidth = o.hoverBorderWidth || e.getValueAtIndexOrDefault(i.pointHoverBorderWidth, a, n.borderWidth)
                },
                removeHoverStyle: function (t) {
                    var i = this, a = i.chart.data.datasets[t._datasetIndex], o = t._index, n = t.custom || {},
                        r = t._model;
                    void 0 !== a.radius && void 0 === a.pointRadius && (a.pointRadius = a.radius), r.radius = n.radius || e.getValueAtIndexOrDefault(a.pointRadius, o, i.chart.options.elements.point.radius), r.backgroundColor = i.getPointBackgroundColor(t, o), r.borderColor = i.getPointBorderColor(t, o), r.borderWidth = i.getPointBorderWidth(t, o)
                }
            })
        }
    }, {}], 19: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = t.helpers;
            t.defaults.polarArea = {
                scale: {type: "radialLinear", lineArc: !0},
                animation: {animateRotate: !0, animateScale: !0},
                aspectRatio: 1,
                legendCallback: function (t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    var i = t.data, a = i.datasets, o = i.labels;
                    if (a.length) for (var n = 0; n < a[0].data.length; ++n) e.push('<li><span style="background-color:' + a[0].backgroundColor[n] + '">'), o[n] && e.push(o[n]), e.push("</span></li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function (t) {
                            var i = t.data;
                            return i.labels.length && i.datasets.length ? i.labels.map(function (a, o) {
                                var n = t.getDatasetMeta(0), r = i.datasets[0], s = n.data[o], l = s.custom || {},
                                    h = e.getValueAtIndexOrDefault, d = t.options.elements.arc,
                                    c = l.backgroundColor ? l.backgroundColor : h(r.backgroundColor, o, d.backgroundColor),
                                    u = l.borderColor ? l.borderColor : h(r.borderColor, o, d.borderColor),
                                    f = l.borderWidth ? l.borderWidth : h(r.borderWidth, o, d.borderWidth);
                                return {
                                    text: a,
                                    fillStyle: c,
                                    strokeStyle: u,
                                    lineWidth: f,
                                    hidden: isNaN(r.data[o]) || n.data[o].hidden,
                                    index: o
                                }
                            }) : []
                        }
                    }, onClick: function (t, e) {
                        var i, a, o, n = e.index, r = this.chart;
                        for (i = 0, a = (r.data.datasets || []).length; a > i; ++i) o = r.getDatasetMeta(i), o.data[n].hidden = !o.data[n].hidden;
                        r.update()
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (t, e) {
                            return e.labels[t.index] + ": " + t.yLabel
                        }
                    }
                }
            }, t.controllers.polarArea = t.DatasetController.extend({
                dataElementType: t.elements.Arc, linkScales: e.noop, update: function (t) {
                    var i = this, a = i.chart, o = a.chartArea, n = this.getMeta(), r = a.options, s = r.elements.arc,
                        l = Math.min(o.right - o.left, o.bottom - o.top);
                    a.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), a.innerRadius = Math.max(r.cutoutPercentage ? a.outerRadius / 100 * r.cutoutPercentage : 1, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / a.getVisibleDatasetCount(), i.outerRadius = a.outerRadius - a.radiusLength * i.index, i.innerRadius = i.outerRadius - a.radiusLength, n.count = i.countVisibleElements(), e.each(n.data, function (e, a) {
                        i.updateElement(e, a, t)
                    })
                }, updateElement: function (t, i, a) {
                    for (var o = this, n = o.chart, r = n.chartArea, s = o.getDataset(), l = n.options, h = l.animation, d = l.elements.arc, c = t.custom || {}, u = n.scale, f = e.getValueAtIndexOrDefault, g = n.data.labels, p = o.calculateCircumference(s.data[i]), m = (r.left + r.right) / 2, b = (r.top + r.bottom) / 2, v = 0, x = o.getMeta(), y = 0; i > y; ++y) isNaN(s.data[y]) || x.data[y].hidden || ++v;
                    var k = t.hidden ? 0 : u.getDistanceFromCenterForValue(s.data[i]), S = -.5 * Math.PI + p * v,
                        C = S + (t.hidden ? 0 : p), w = {
                            x: m,
                            y: b,
                            innerRadius: 0,
                            outerRadius: h.animateScale ? 0 : u.getDistanceFromCenterForValue(s.data[i]),
                            startAngle: h.animateRotate ? Math.PI * -.5 : S,
                            endAngle: h.animateRotate ? Math.PI * -.5 : C,
                            backgroundColor: c.backgroundColor ? c.backgroundColor : f(s.backgroundColor, i, d.backgroundColor),
                            borderWidth: c.borderWidth ? c.borderWidth : f(s.borderWidth, i, d.borderWidth),
                            borderColor: c.borderColor ? c.borderColor : f(s.borderColor, i, d.borderColor),
                            label: f(g, i, g[i])
                        };
                    e.extend(t, {
                        _datasetIndex: o.index,
                        _index: i,
                        _scale: u,
                        _model: a ? w : {
                            x: m,
                            y: b,
                            innerRadius: 0,
                            outerRadius: k,
                            startAngle: S,
                            endAngle: C,
                            backgroundColor: c.backgroundColor ? c.backgroundColor : f(s.backgroundColor, i, d.backgroundColor),
                            borderWidth: c.borderWidth ? c.borderWidth : f(s.borderWidth, i, d.borderWidth),
                            borderColor: c.borderColor ? c.borderColor : f(s.borderColor, i, d.borderColor),
                            label: f(g, i, g[i])
                        }
                    }), t.pivot()
                }, removeHoverStyle: function (e) {
                    t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                }, countVisibleElements: function () {
                    var t = this.getDataset(), i = this.getMeta(), a = 0;
                    return e.each(i.data, function (e, i) {
                        isNaN(t.data[i]) || e.hidden || a++
                    }), a
                }, calculateCircumference: function (t) {
                    var e = this.getMeta().count;
                    return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0
                }
            })
        }
    }, {}], 20: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = t.helpers;
            t.defaults.radar = {
                scale: {type: "radialLinear"},
                elements: {line: {tension: 0}}
            }, t.controllers.radar = t.DatasetController.extend({
                datasetElementType: t.elements.Line,
                dataElementType: t.elements.Point,
                linkScales: e.noop,
                addElementAndReset: function (e) {
                    t.DatasetController.prototype.addElementAndReset.call(this, e), this.updateBezierControlPoints()
                },
                update: function (t) {
                    var i = this.getMeta(), a = i.dataset, o = i.data, n = a.custom || {}, r = this.getDataset(),
                        s = this.chart.options.elements.line, l = this.chart.scale;
                    void 0 !== r.tension && void 0 === r.lineTension && (r.lineTension = r.tension), e.extend(i.dataset, {
                        _datasetIndex: this.index,
                        _children: o,
                        _loop: !0,
                        _model: {
                            tension: n.tension ? n.tension : e.getValueOrDefault(r.lineTension, s.tension),
                            backgroundColor: n.backgroundColor ? n.backgroundColor : r.backgroundColor || s.backgroundColor,
                            borderWidth: n.borderWidth ? n.borderWidth : r.borderWidth || s.borderWidth,
                            borderColor: n.borderColor ? n.borderColor : r.borderColor || s.borderColor,
                            fill: n.fill ? n.fill : void 0 !== r.fill ? r.fill : s.fill,
                            borderCapStyle: n.borderCapStyle ? n.borderCapStyle : r.borderCapStyle || s.borderCapStyle,
                            borderDash: n.borderDash ? n.borderDash : r.borderDash || s.borderDash,
                            borderDashOffset: n.borderDashOffset ? n.borderDashOffset : r.borderDashOffset || s.borderDashOffset,
                            borderJoinStyle: n.borderJoinStyle ? n.borderJoinStyle : r.borderJoinStyle || s.borderJoinStyle,
                            scaleTop: l.top,
                            scaleBottom: l.bottom,
                            scaleZero: l.getBasePosition()
                        }
                    }), i.dataset.pivot(), e.each(o, function (e, i) {
                        this.updateElement(e, i, t)
                    }, this), this.updateBezierControlPoints()
                },
                updateElement: function (t, i, a) {
                    var o = t.custom || {}, n = this.getDataset(), r = this.chart.scale,
                        s = this.chart.options.elements.point, l = r.getPointPositionForValue(i, n.data[i]);
                    e.extend(t, {
                        _datasetIndex: this.index,
                        _index: i,
                        _scale: r,
                        _model: {
                            x: a ? r.xCenter : l.x,
                            y: a ? r.yCenter : l.y,
                            tension: o.tension ? o.tension : e.getValueOrDefault(n.tension, this.chart.options.elements.line.tension),
                            radius: o.radius ? o.radius : e.getValueAtIndexOrDefault(n.pointRadius, i, s.radius),
                            backgroundColor: o.backgroundColor ? o.backgroundColor : e.getValueAtIndexOrDefault(n.pointBackgroundColor, i, s.backgroundColor),
                            borderColor: o.borderColor ? o.borderColor : e.getValueAtIndexOrDefault(n.pointBorderColor, i, s.borderColor),
                            borderWidth: o.borderWidth ? o.borderWidth : e.getValueAtIndexOrDefault(n.pointBorderWidth, i, s.borderWidth),
                            pointStyle: o.pointStyle ? o.pointStyle : e.getValueAtIndexOrDefault(n.pointStyle, i, s.pointStyle),
                            hitRadius: o.hitRadius ? o.hitRadius : e.getValueAtIndexOrDefault(n.hitRadius, i, s.hitRadius)
                        }
                    }), t._model.skip = o.skip ? o.skip : isNaN(t._model.x) || isNaN(t._model.y)
                },
                updateBezierControlPoints: function () {
                    var t = this.chart.chartArea, i = this.getMeta();
                    e.each(i.data, function (a, o) {
                        var n = a._model,
                            r = e.splineCurve(e.previousItem(i.data, o, !0)._model, n, e.nextItem(i.data, o, !0)._model, n.tension);
                        n.controlPointPreviousX = Math.max(Math.min(r.previous.x, t.right), t.left), n.controlPointPreviousY = Math.max(Math.min(r.previous.y, t.bottom), t.top), n.controlPointNextX = Math.max(Math.min(r.next.x, t.right), t.left), n.controlPointNextY = Math.max(Math.min(r.next.y, t.bottom), t.top), a.pivot()
                    }, this)
                },
                draw: function (t) {
                    var i = this.getMeta(), a = t || 1;
                    e.each(i.data, function (t, e) {
                        t.transition(a)
                    }), i.dataset.transition(a).draw(), e.each(i.data, function (t) {
                        t.draw()
                    })
                },
                setHoverStyle: function (t) {
                    var i = this.chart.data.datasets[t._datasetIndex], a = t.custom || {}, o = t._index, n = t._model;
                    n.radius = a.hoverRadius ? a.hoverRadius : e.getValueAtIndexOrDefault(i.pointHoverRadius, o, this.chart.options.elements.point.hoverRadius), n.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : e.getValueAtIndexOrDefault(i.pointHoverBackgroundColor, o, e.getHoverColor(n.backgroundColor)), n.borderColor = a.hoverBorderColor ? a.hoverBorderColor : e.getValueAtIndexOrDefault(i.pointHoverBorderColor, o, e.getHoverColor(n.borderColor)), n.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : e.getValueAtIndexOrDefault(i.pointHoverBorderWidth, o, n.borderWidth)
                },
                removeHoverStyle: function (t) {
                    var i = this.chart.data.datasets[t._datasetIndex], a = t.custom || {}, o = t._index, n = t._model,
                        r = this.chart.options.elements.point;
                    n.radius = a.radius ? a.radius : e.getValueAtIndexOrDefault(i.radius, o, r.radius), n.backgroundColor = a.backgroundColor ? a.backgroundColor : e.getValueAtIndexOrDefault(i.pointBackgroundColor, o, r.backgroundColor), n.borderColor = a.borderColor ? a.borderColor : e.getValueAtIndexOrDefault(i.pointBorderColor, o, r.borderColor), n.borderWidth = a.borderWidth ? a.borderWidth : e.getValueAtIndexOrDefault(i.pointBorderWidth, o, r.borderWidth)
                }
            })
        }
    }, {}], 21: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = t.helpers;
            t.defaults.global.animation = {
                duration: 1e3,
                easing: "easeOutQuart",
                onProgress: e.noop,
                onComplete: e.noop
            }, t.Animation = t.Element.extend({
                currentStep: null,
                numSteps: 60,
                easing: "",
                render: null,
                onAnimationProgress: null,
                onAnimationComplete: null
            }), t.animationService = {
                frameDuration: 17, animations: [], dropFrames: 0, request: null, addAnimation: function (t, e, i, a) {
                    a || (t.animating = !0);
                    for (var o = 0; o < this.animations.length; ++o) if (this.animations[o].chartInstance === t) return void (this.animations[o].animationObject = e);
                    this.animations.push({
                        chartInstance: t,
                        animationObject: e
                    }), 1 === this.animations.length && this.requestAnimationFrame()
                }, cancelAnimation: function (t) {
                    var i = e.findIndex(this.animations, function (e) {
                        return e.chartInstance === t
                    });
                    -1 !== i && (this.animations.splice(i, 1), t.animating = !1)
                }, requestAnimationFrame: function () {
                    var t = this;
                    null === t.request && (t.request = e.requestAnimFrame.call(window, function () {
                        t.request = null, t.startDigest()
                    }))
                }, startDigest: function () {
                    var t = Date.now(), e = 0;
                    this.dropFrames > 1 && (e = Math.floor(this.dropFrames), this.dropFrames = this.dropFrames % 1);
                    for (var i = 0; i < this.animations.length;) null === this.animations[i].animationObject.currentStep && (this.animations[i].animationObject.currentStep = 0), this.animations[i].animationObject.currentStep += 1 + e, this.animations[i].animationObject.currentStep > this.animations[i].animationObject.numSteps && (this.animations[i].animationObject.currentStep = this.animations[i].animationObject.numSteps), this.animations[i].animationObject.render(this.animations[i].chartInstance, this.animations[i].animationObject), this.animations[i].animationObject.onAnimationProgress && this.animations[i].animationObject.onAnimationProgress.call && this.animations[i].animationObject.onAnimationProgress.call(this.animations[i].chartInstance, this.animations[i]), this.animations[i].animationObject.currentStep === this.animations[i].animationObject.numSteps ? (this.animations[i].animationObject.onAnimationComplete && this.animations[i].animationObject.onAnimationComplete.call && this.animations[i].animationObject.onAnimationComplete.call(this.animations[i].chartInstance, this.animations[i]), this.animations[i].chartInstance.animating = !1, this.animations.splice(i, 1)) : ++i;
                    var a = Date.now(), o = (a - t) / this.frameDuration;
                    this.dropFrames += o, this.animations.length > 0 && this.requestAnimationFrame()
                }
            }
        }
    }, {}], 22: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = t.helpers;
            t.types = {}, t.instances = {}, t.controllers = {}, t.Controller = function (i) {
                return this.chart = i, this.config = i.config, this.options = this.config.options = e.configMerge(t.defaults.global, t.defaults[this.config.type], this.config.options || {}), this.id = e.uid(), Object.defineProperty(this, "data", {
                    get: function () {
                        return this.config.data
                    }
                }), t.instances[this.id] = this, this.options.responsive && this.resize(!0), this.initialize(), this
            }, e.extend(t.Controller.prototype, {
                initialize: function () {
                    return t.pluginService.notifyPlugins("beforeInit", [this]), this.bindEvents(), this.ensureScalesHaveIDs(), this.buildOrUpdateControllers(), this.buildScales(), this.buildSurroundingItems(), this.updateLayout(), this.resetElements(), this.initToolTip(), this.update(), t.pluginService.notifyPlugins("afterInit", [this]), this
                }, clear: function () {
                    return e.clear(this.chart), this
                }, stop: function () {
                    return t.animationService.cancelAnimation(this), this
                }, resize: function (t) {
                    var i = this.chart.canvas, a = e.getMaximumWidth(this.chart.canvas),
                        o = this.options.maintainAspectRatio && isNaN(this.chart.aspectRatio) === !1 && isFinite(this.chart.aspectRatio) && 0 !== this.chart.aspectRatio ? a / this.chart.aspectRatio : e.getMaximumHeight(this.chart.canvas),
                        n = this.chart.width !== a || this.chart.height !== o;
                    return n ? (i.width = this.chart.width = a, i.height = this.chart.height = o, e.retinaScale(this.chart), t || (this.stop(), this.update(this.options.responsiveAnimationDuration)), this) : this
                }, ensureScalesHaveIDs: function () {
                    var t = this.options, i = t.scales || {}, a = t.scale;
                    e.each(i.xAxes, function (t, e) {
                        t.id = t.id || "x-axis-" + e
                    }), e.each(i.yAxes, function (t, e) {
                        t.id = t.id || "y-axis-" + e
                    }), a && (a.id = a.id || "scale")
                }, buildScales: function () {
                    var i = this, a = i.options, o = i.scales = {}, n = [];
                    a.scales && (n = n.concat((a.scales.xAxes || []).map(function (t) {
                        return {options: t, dtype: "category"}
                    }), (a.scales.yAxes || []).map(function (t) {
                        return {options: t, dtype: "linear"}
                    }))), a.scale && n.push({
                        options: a.scale,
                        dtype: "radialLinear",
                        isDefault: !0
                    }), e.each(n, function (a, n) {
                        var r = a.options, s = e.getValueOrDefault(r.type, a.dtype),
                            l = t.scaleService.getScaleConstructor(s);
                        if (l) {
                            var h = new l({id: r.id, options: r, ctx: i.chart.ctx, chart: i});
                            o[h.id] = h, a.isDefault && (i.scale = h)
                        }
                    }), t.scaleService.addScalesToLayout(this)
                }, buildSurroundingItems: function () {
                    this.options.title && (this.titleBlock = new t.Title({
                        ctx: this.chart.ctx,
                        options: this.options.title,
                        chart: this
                    }), t.layoutService.addBox(this, this.titleBlock)), this.options.legend && (this.legend = new t.Legend({
                        ctx: this.chart.ctx,
                        options: this.options.legend,
                        chart: this
                    }), t.layoutService.addBox(this, this.legend))
                }, updateLayout: function () {
                    t.layoutService.update(this, this.chart.width, this.chart.height)
                }, buildOrUpdateControllers: function () {
                    var i = [], a = [];
                    if (e.each(this.data.datasets, function (e, o) {
                        var n = this.getDatasetMeta(o);
                        n.type || (n.type = e.type || this.config.type), i.push(n.type), n.controller ? n.controller.updateIndex(o) : (n.controller = new t.controllers[n.type](this, o), a.push(n.controller))
                    }, this), i.length > 1) for (var o = 1; o < i.length; o++) if (i[o] !== i[o - 1]) {
                        this.isCombo = !0;
                        break
                    }
                    return a
                }, resetElements: function () {
                    e.each(this.data.datasets, function (t, e) {
                        this.getDatasetMeta(e).controller.reset()
                    }, this)
                }, update: function (i, a) {
                    t.pluginService.notifyPlugins("beforeUpdate", [this]), this.tooltip._data = this.data;
                    var o = this.buildOrUpdateControllers();
                    e.each(this.data.datasets, function (t, e) {
                        this.getDatasetMeta(e).controller.buildOrUpdateElements()
                    }, this), t.layoutService.update(this, this.chart.width, this.chart.height), t.pluginService.notifyPlugins("afterScaleUpdate", [this]), e.each(o, function (t) {
                        t.reset()
                    }), e.each(this.data.datasets, function (t, e) {
                        this.getDatasetMeta(e).controller.update()
                    }, this), t.pluginService.notifyPlugins("afterUpdate", [this]), this.render(i, a)
                }, render: function (i, a) {
                    t.pluginService.notifyPlugins("beforeRender", [this]);
                    var o = this.options.animation;
                    if (o && ("undefined" != typeof i && 0 !== i || "undefined" == typeof i && 0 !== o.duration)) {
                        var n = new t.Animation;
                        n.numSteps = (i || o.duration) / 16.66, n.easing = o.easing, n.render = function (t, i) {
                            var a = e.easingEffects[i.easing], o = i.currentStep / i.numSteps, n = a(o);
                            t.draw(n, o, i.currentStep)
                        }, n.onAnimationProgress = o.onProgress, n.onAnimationComplete = o.onComplete, t.animationService.addAnimation(this, n, i, a)
                    } else this.draw(), o && o.onComplete && o.onComplete.call && o.onComplete.call(this);
                    return this
                }, draw: function (i) {
                    var a = i || 1;
                    this.clear(), t.pluginService.notifyPlugins("beforeDraw", [this, a]), e.each(this.boxes, function (t) {
                        t.draw(this.chartArea)
                    }, this), this.scale && this.scale.draw();
                    var o = this.chart.ctx;
                    o.save(), o.beginPath(), o.rect(this.chartArea.left, this.chartArea.top, this.chartArea.right - this.chartArea.left, this.chartArea.bottom - this.chartArea.top), o.clip(), e.each(this.data.datasets, function (t, e) {
                        this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.draw(i)
                    }, this, !0), o.restore(), this.tooltip.transition(a).draw(), t.pluginService.notifyPlugins("afterDraw", [this, a])
                }, getElementAtEvent: function (t) {
                    var i = e.getRelativePosition(t, this.chart), a = [];
                    return e.each(this.data.datasets, function (t, o) {
                        if (this.isDatasetVisible(o)) {
                            var n = this.getDatasetMeta(o);
                            e.each(n.data, function (t, e) {
                                return t.inRange(i.x, i.y) ? (a.push(t), a) : void 0
                            })
                        }
                    }, this), a
                }, getElementsAtEvent: function (t) {
                    var i = e.getRelativePosition(t, this.chart), a = [], o = function () {
                        if (this.data.datasets) for (var t = 0; t < this.data.datasets.length; t++) {
                            var e = this.getDatasetMeta(t);
                            if (this.isDatasetVisible(t)) for (var a = 0; a < e.data.length; a++) if (e.data[a].inRange(i.x, i.y)) return e.data[a]
                        }
                    }.call(this);
                    return o ? (e.each(this.data.datasets, function (t, e) {
                        if (this.isDatasetVisible(e)) {
                            var i = this.getDatasetMeta(e);
                            a.push(i.data[o._index])
                        }
                    }, this), a) : a
                }, getElementsAtEventForMode: function (t, e) {
                    var i = this;
                    switch (e) {
                        case"single":
                            return i.getElementAtEvent(t);
                        case"label":
                            return i.getElementsAtEvent(t);
                        case"dataset":
                            return i.getDatasetAtEvent(t);
                        default:
                            return t
                    }
                }, getDatasetAtEvent: function (t) {
                    var e = this.getElementAtEvent(t);
                    return e.length > 0 && (e = this.getDatasetMeta(e[0]._datasetIndex).data), e
                }, getDatasetMeta: function (t) {
                    var e = this.data.datasets[t];
                    e._meta || (e._meta = {});
                    var i = e._meta[this.id];
                    return i || (i = e._meta[this.id] = {
                        type: null,
                        data: [],
                        dataset: null,
                        controller: null,
                        hidden: null,
                        xAxisID: null,
                        yAxisID: null
                    }), i
                }, getVisibleDatasetCount: function () {
                    for (var t = 0, e = 0, i = this.data.datasets.length; i > e; ++e) this.isDatasetVisible(e) && t++;
                    return t
                }, isDatasetVisible: function (t) {
                    var e = this.getDatasetMeta(t);
                    return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                }, generateLegend: function () {
                    return this.options.legendCallback(this)
                }, destroy: function () {
                    this.clear(), e.unbindEvents(this, this.events), e.removeResizeListener(this.chart.canvas.parentNode);
                    var i = this.chart.canvas;
                    i.width = this.chart.width, i.height = this.chart.height, void 0 !== this.chart.originalDevicePixelRatio && this.chart.ctx.scale(1 / this.chart.originalDevicePixelRatio, 1 / this.chart.originalDevicePixelRatio), i.style.width = this.chart.originalCanvasStyleWidth, i.style.height = this.chart.originalCanvasStyleHeight, t.pluginService.notifyPlugins("destroy", [this]), delete t.instances[this.id]
                }, toBase64Image: function () {
                    return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
                }, initToolTip: function () {
                    this.tooltip = new t.Tooltip({
                        _chart: this.chart,
                        _chartInstance: this,
                        _data: this.data,
                        _options: this.options
                    }, this)
                }, bindEvents: function () {
                    e.bindEvents(this, this.options.events, function (t) {
                        this.eventHandler(t)
                    })
                }, updateHoverStyle: function (t, e, i) {
                    var a, o, n, r = i ? "setHoverStyle" : "removeHoverStyle";
                    switch (e) {
                        case"single":
                            t = [t[0]];
                            break;
                        case"label":
                        case"dataset":
                            break;
                        default:
                            return
                    }
                    for (o = 0, n = t.length; n > o; ++o) a = t[o], a && this.getDatasetMeta(a._datasetIndex).controller[r](a)
                }, eventHandler: function (t) {
                    var i = this, a = i.tooltip, o = i.options || {}, n = o.hover, r = o.tooltips;
                    return i.lastActive = i.lastActive || [], i.lastTooltipActive = i.lastTooltipActive || [], "mouseout" === t.type ? (i.active = [], i.tooltipActive = []) : (i.active = i.getElementsAtEventForMode(t, n.mode), i.tooltipActive = i.getElementsAtEventForMode(t, r.mode)), n.onHover && n.onHover.call(i, i.active), ("mouseup" === t.type || "click" === t.type) && (o.onClick && o.onClick.call(i, t, i.active), i.legend && i.legend.handleEvent && i.legend.handleEvent(t)), i.lastActive.length && i.updateHoverStyle(i.lastActive, n.mode, !1), i.active.length && n.mode && i.updateHoverStyle(i.active, n.mode, !0), (r.enabled || r.custom) && (a.initialize(), a._active = i.tooltipActive, a.update(!0)), a.pivot(), i.animating || e.arrayEquals(i.active, i.lastActive) && e.arrayEquals(i.tooltipActive, i.lastTooltipActive) || (i.stop(), (r.enabled || r.custom) && a.update(!0), i.render(n.animationDuration, !0)), i.lastActive = i.active, i.lastTooltipActive = i.tooltipActive, i
                }
            })
        }
    }, {}], 23: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = t.helpers, i = e.noop;
            t.DatasetController = function (t, e) {
                this.initialize.call(this, t, e)
            }, e.extend(t.DatasetController.prototype, {
                datasetElementType: null, dataElementType: null, initialize: function (t, e) {
                    this.chart = t, this.index = e, this.linkScales(), this.addElements()
                }, updateIndex: function (t) {
                    this.index = t
                }, linkScales: function () {
                    var t = this.getMeta(), e = this.getDataset();
                    null === t.xAxisID && (t.xAxisID = e.xAxisID || this.chart.options.scales.xAxes[0].id), null === t.yAxisID && (t.yAxisID = e.yAxisID || this.chart.options.scales.yAxes[0].id)
                }, getDataset: function () {
                    return this.chart.data.datasets[this.index]
                }, getMeta: function () {
                    return this.chart.getDatasetMeta(this.index)
                }, getScaleForId: function (t) {
                    return this.chart.scales[t]
                }, reset: function () {
                    this.update(!0)
                }, createMetaDataset: function () {
                    var t = this, e = t.datasetElementType;
                    return e && new e({_chart: t.chart.chart, _datasetIndex: t.index})
                }, createMetaData: function (t) {
                    var e = this, i = e.dataElementType;
                    return i && new i({_chart: e.chart.chart, _datasetIndex: e.index, _index: t})
                }, addElements: function () {
                    var t, e, i = this, a = i.getMeta(), o = i.getDataset().data || [], n = a.data;
                    for (t = 0, e = o.length; e > t; ++t) n[t] = n[t] || i.createMetaData(a, t);
                    a.dataset = a.dataset || i.createMetaDataset()
                }, addElementAndReset: function (t) {
                    var e = this, i = e.createMetaData(t);
                    e.getMeta().data.splice(t, 0, i), e.updateElement(i, t, !0)
                }, buildOrUpdateElements: function () {
                    var t = this.getMeta(), e = t.data, i = this.getDataset().data.length, a = e.length;
                    if (a > i) e.splice(i, a - i); else if (i > a) for (var o = a; i > o; ++o) this.addElementAndReset(o)
                }, update: i, draw: function (t) {
                    var i = t || 1;
                    e.each(this.getMeta().data, function (t, e) {
                        t.transition(i).draw()
                    })
                }, removeHoverStyle: function (t, i) {
                    var a = this.chart.data.datasets[t._datasetIndex], o = t._index, n = t.custom || {},
                        r = e.getValueAtIndexOrDefault, s = (e.color, t._model);
                    s.backgroundColor = n.backgroundColor ? n.backgroundColor : r(a.backgroundColor, o, i.backgroundColor), s.borderColor = n.borderColor ? n.borderColor : r(a.borderColor, o, i.borderColor), s.borderWidth = n.borderWidth ? n.borderWidth : r(a.borderWidth, o, i.borderWidth)
                }, setHoverStyle: function (t) {
                    var i = this.chart.data.datasets[t._datasetIndex], a = t._index, o = t.custom || {},
                        n = e.getValueAtIndexOrDefault, r = (e.color, e.getHoverColor), s = t._model;
                    s.backgroundColor = o.hoverBackgroundColor ? o.hoverBackgroundColor : n(i.hoverBackgroundColor, a, r(s.backgroundColor)), s.borderColor = o.hoverBorderColor ? o.hoverBorderColor : n(i.hoverBorderColor, a, r(s.borderColor)), s.borderWidth = o.hoverBorderWidth ? o.hoverBorderWidth : n(i.hoverBorderWidth, a, s.borderWidth)
                }
            }), t.DatasetController.extend = e.inherits
        }
    }, {}], 24: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = t.helpers;
            t.elements = {}, t.Element = function (t) {
                e.extend(this, t), this.initialize.apply(this, arguments)
            }, e.extend(t.Element.prototype, {
                initialize: function () {
                    this.hidden = !1
                }, pivot: function () {
                    return this._view || (this._view = e.clone(this._model)), this._start = e.clone(this._view), this
                }, transition: function (t) {
                    return this._view || (this._view = e.clone(this._model)), 1 === t ? (this._view = this._model, this._start = null, this) : (this._start || this.pivot(), e.each(this._model, function (i, a) {
                        if ("_" === a[0]) ; else if (this._view.hasOwnProperty(a)) if (i === this._view[a]) ; else if ("string" == typeof i) try {
                            var o = e.color(this._model[a]).mix(e.color(this._start[a]), t);
                            this._view[a] = o.rgbString()
                        } catch (n) {
                            this._view[a] = i
                        } else if ("number" == typeof i) {
                            var r = void 0 !== this._start[a] && isNaN(this._start[a]) === !1 ? this._start[a] : 0;
                            this._view[a] = (this._model[a] - r) * t + r
                        } else this._view[a] = i; else "number" != typeof i || isNaN(this._view[a]) ? this._view[a] = i : this._view[a] = i * t
                    }, this), this)
                }, tooltipPosition: function () {
                    return {x: this._model.x, y: this._model.y}
                }, hasValue: function () {
                    return e.isNumber(this._model.x) && e.isNumber(this._model.y)
                }
            }), t.Element.extend = e.inherits
        }
    }, {}], 25: [function (t, e, i) {
        "use strict";
        var a = t("chartjs-color");
        e.exports = function (t) {
            function e(t, e, i) {
                var a;
                return "string" == typeof t ? (a = parseInt(t, 10), -1 != t.indexOf("%") && (a = a / 100 * e.parentNode[i])) : a = t, a
            }

            function i(t) {
                return void 0 !== t && null !== t && "none" !== t
            }

            function o(t, a, o) {
                var n = document.defaultView, r = t.parentNode, s = n.getComputedStyle(t)[a],
                    l = n.getComputedStyle(r)[a], h = i(s), d = i(l), c = Number.POSITIVE_INFINITY;
                return h || d ? Math.min(h ? e(s, t, o) : c, d ? e(l, r, o) : c) : "none"
            }

            var n = t.helpers = {};
            n.each = function (t, e, i, a) {
                var o, r;
                if (n.isArray(t)) if (r = t.length, a) for (o = r - 1; o >= 0; o--) e.call(i, t[o], o); else for (o = 0; r > o; o++) e.call(i, t[o], o); else if ("object" == typeof t) {
                    var s = Object.keys(t);
                    for (r = s.length, o = 0; r > o; o++) e.call(i, t[s[o]], s[o])
                }
            }, n.clone = function (t) {
                var e = {};
                return n.each(t, function (t, i) {
                    n.isArray(t) ? e[i] = t.slice(0) : "object" == typeof t && null !== t ? e[i] = n.clone(t) : e[i] = t
                }), e
            }, n.extend = function (t) {
                for (var e = arguments.length, i = [], a = 1; e > a; a++) i.push(arguments[a]);
                return n.each(i, function (e) {
                    n.each(e, function (e, i) {
                        t[i] = e
                    })
                }), t
            }, n.configMerge = function (e) {
                var i = n.clone(e);
                return n.each(Array.prototype.slice.call(arguments, 1), function (e) {
                    n.each(e, function (e, a) {
                        if ("scales" === a) i[a] = n.scaleMerge(i.hasOwnProperty(a) ? i[a] : {}, e); else if ("scale" === a) i[a] = n.configMerge(i.hasOwnProperty(a) ? i[a] : {}, t.scaleService.getScaleDefaults(e.type), e); else if (i.hasOwnProperty(a) && n.isArray(i[a]) && n.isArray(e)) {
                            var o = i[a];
                            n.each(e, function (t, e) {
                                e < o.length ? "object" == typeof o[e] && null !== o[e] && "object" == typeof t && null !== t ? o[e] = n.configMerge(o[e], t) : o[e] = t : o.push(t)
                            })
                        } else i.hasOwnProperty(a) && "object" == typeof i[a] && null !== i[a] && "object" == typeof e ? i[a] = n.configMerge(i[a], e) : i[a] = e
                    })
                }), i
            }, n.extendDeep = function (t) {
                function e(t) {
                    return n.each(arguments, function (i) {
                        i !== t && n.each(i, function (i, a) {
                            t[a] && t[a].constructor && t[a].constructor === Object ? e(t[a], i) : t[a] = i
                        })
                    }), t
                }

                return e.apply(this, arguments)
            }, n.scaleMerge = function (e, i) {
                var a = n.clone(e);
                return n.each(i, function (e, i) {
                    "xAxes" === i || "yAxes" === i ? a.hasOwnProperty(i) ? n.each(e, function (e, o) {
                        var r = n.getValueOrDefault(e.type, "xAxes" === i ? "category" : "linear"),
                            s = t.scaleService.getScaleDefaults(r);
                        o >= a[i].length || !a[i][o].type ? a[i].push(n.configMerge(s, e)) : e.type && e.type !== a[i][o].type ? a[i][o] = n.configMerge(a[i][o], s, e) : a[i][o] = n.configMerge(a[i][o], e)
                    }) : (a[i] = [], n.each(e, function (e) {
                        var o = n.getValueOrDefault(e.type, "xAxes" === i ? "category" : "linear");
                        a[i].push(n.configMerge(t.scaleService.getScaleDefaults(o), e))
                    })) : a.hasOwnProperty(i) && "object" == typeof a[i] && null !== a[i] && "object" == typeof e ? a[i] = n.configMerge(a[i], e) : a[i] = e
                }), a
            }, n.getValueAtIndexOrDefault = function (t, e, i) {
                return void 0 === t || null === t ? i : n.isArray(t) ? e < t.length ? t[e] : i : t
            }, n.getValueOrDefault = function (t, e) {
                return void 0 === t ? e : t
            }, n.indexOf = function (t, e) {
                if (Array.prototype.indexOf) return t.indexOf(e);
                for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
                return -1
            }, n.where = function (t, e) {
                if (n.isArray(t) && Array.prototype.filter) return t.filter(e);
                var i = [];
                return n.each(t, function (t) {
                    e(t) && i.push(t)
                }), i
            }, n.findIndex = function (t, e, i) {
                var a = -1;
                if (Array.prototype.findIndex) a = t.findIndex(e, i); else for (var o = 0; o < t.length; ++o) if (i = void 0 !== i ? i : t, e.call(i, t[o], o, t)) {
                    a = o;
                    break
                }
                return a
            }, n.findNextWhere = function (t, e, i) {
                (void 0 === i || null === i) && (i = -1);
                for (var a = i + 1; a < t.length; a++) {
                    var o = t[a];
                    if (e(o)) return o
                }
            }, n.findPreviousWhere = function (t, e, i) {
                (void 0 === i || null === i) && (i = t.length);
                for (var a = i - 1; a >= 0; a--) {
                    var o = t[a];
                    if (e(o)) return o
                }
            }, n.inherits = function (t) {
                var e = this, i = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
                    return e.apply(this, arguments)
                }, a = function () {
                    this.constructor = i
                };
                return a.prototype = e.prototype, i.prototype = new a, i.extend = n.inherits, t && n.extend(i.prototype, t), i.__super__ = e.prototype, i
            }, n.noop = function () {
            }, n.uid = function () {
                var t = 0;
                return function () {
                    return t++
                }
            }(), n.warn = function (t) {
                console && "function" == typeof console.warn && console.warn(t)
            }, n.isNumber = function (t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            }, n.almostEquals = function (t, e, i) {
                return Math.abs(t - e) < i
            }, n.max = function (t) {
                return t.reduce(function (t, e) {
                    return isNaN(e) ? t : Math.max(t, e)
                }, Number.NEGATIVE_INFINITY)
            }, n.min = function (t) {
                return t.reduce(function (t, e) {
                    return isNaN(e) ? t : Math.min(t, e)
                }, Number.POSITIVE_INFINITY)
            }, n.sign = function (t) {
                return Math.sign ? Math.sign(t) : (t = +t, 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1)
            }, n.log10 = function (t) {
                return Math.log10 ? Math.log10(t) : Math.log(t) / Math.LN10
            }, n.toRadians = function (t) {
                return t * (Math.PI / 180)
            }, n.toDegrees = function (t) {
                return t * (180 / Math.PI)
            }, n.getAngleFromPoint = function (t, e) {
                var i = e.x - t.x, a = e.y - t.y, o = Math.sqrt(i * i + a * a), n = Math.atan2(a, i);
                return n < -.5 * Math.PI && (n += 2 * Math.PI), {angle: n, distance: o}
            }, n.aliasPixel = function (t) {
                return t % 2 === 0 ? 0 : .5
            }, n.splineCurve = function (t, e, i, a) {
                var o = t.skip ? e : t, n = e, r = i.skip ? e : i,
                    s = Math.sqrt(Math.pow(n.x - o.x, 2) + Math.pow(n.y - o.y, 2)),
                    l = Math.sqrt(Math.pow(r.x - n.x, 2) + Math.pow(r.y - n.y, 2)), h = s / (s + l), d = l / (s + l);
                h = isNaN(h) ? 0 : h, d = isNaN(d) ? 0 : d;
                var c = a * h, u = a * d;
                return {
                    previous: {x: n.x - c * (r.x - o.x), y: n.y - c * (r.y - o.y)},
                    next: {x: n.x + u * (r.x - o.x), y: n.y + u * (r.y - o.y)}
                }
            }, n.nextItem = function (t, e, i) {
                return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
            }, n.previousItem = function (t, e, i) {
                return i ? 0 >= e ? t[t.length - 1] : t[e - 1] : 0 >= e ? t[0] : t[e - 1]
            }, n.niceNum = function (t, e) {
                var i, a = Math.floor(n.log10(t)), o = t / Math.pow(10, a);
                return i = e ? 1.5 > o ? 1 : 3 > o ? 2 : 7 > o ? 5 : 10 : 1 >= o ? 1 : 2 >= o ? 2 : 5 >= o ? 5 : 10, i * Math.pow(10, a)
            };
            var r = n.easingEffects = {
                linear: function (t) {
                    return t
                }, easeInQuad: function (t) {
                    return t * t
                }, easeOutQuad: function (t) {
                    return -1 * t * (t - 2)
                }, easeInOutQuad: function (t) {
                    return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1)
                }, easeInCubic: function (t) {
                    return t * t * t
                }, easeOutCubic: function (t) {
                    return 1 * ((t = t / 1 - 1) * t * t + 1)
                }, easeInOutCubic: function (t) {
                    return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                }, easeInQuart: function (t) {
                    return t * t * t * t
                }, easeOutQuart: function (t) {
                    return -1 * ((t = t / 1 - 1) * t * t * t - 1)
                }, easeInOutQuart: function (t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)
                }, easeInQuint: function (t) {
                    return 1 * (t /= 1) * t * t * t * t
                }, easeOutQuint: function (t) {
                    return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
                }, easeInOutQuint: function (t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                }, easeInSine: function (t) {
                    return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
                }, easeOutSine: function (t) {
                    return 1 * Math.sin(t / 1 * (Math.PI / 2))
                }, easeInOutSine: function (t) {
                    return -0.5 * (Math.cos(Math.PI * t / 1) - 1)
                }, easeInExpo: function (t) {
                    return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
                }, easeOutExpo: function (t) {
                    return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
                }, easeInOutExpo: function (t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
                }, easeInCirc: function (t) {
                    return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
                }, easeOutCirc: function (t) {
                    return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
                }, easeInOutCirc: function (t) {
                    return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                }, easeInElastic: function (t) {
                    var e = 1.70158, i = 0, a = 1;
                    return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (i || (i = .3), a < Math.abs(1) ? (a = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / a), -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)))
                }, easeOutElastic: function (t) {
                    var e = 1.70158, i = 0, a = 1;
                    return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (i || (i = .3), a < Math.abs(1) ? (a = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / a), a * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / i) + 1)
                }, easeInOutElastic: function (t) {
                    var e = 1.70158, i = 0, a = 1;
                    return 0 === t ? 0 : 2 === (t /= .5) ? 1 : (i || (i = 1 * (.3 * 1.5)), a < Math.abs(1) ? (a = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / a), 1 > t ? -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)) : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i) * .5 + 1)
                }, easeInBack: function (t) {
                    var e = 1.70158;
                    return 1 * (t /= 1) * t * ((e + 1) * t - e)
                }, easeOutBack: function (t) {
                    var e = 1.70158;
                    return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
                }, easeInOutBack: function (t) {
                    var e = 1.70158;
                    return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
                }, easeInBounce: function (t) {
                    return 1 - r.easeOutBounce(1 - t)
                }, easeOutBounce: function (t) {
                    return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }, easeInOutBounce: function (t) {
                    return .5 > t ? .5 * r.easeInBounce(2 * t) : .5 * r.easeOutBounce(2 * t - 1) + .5
                }
            };
            n.requestAnimFrame = function () {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                    return window.setTimeout(t, 1e3 / 60)
                }
            }(), n.cancelAnimFrame = function () {
                return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (t) {
                    return window.clearTimeout(t, 1e3 / 60)
                }
            }(), n.getRelativePosition = function (t, e) {
                var i, a, o = t.originalEvent || t, r = t.currentTarget || t.srcElement, s = r.getBoundingClientRect(),
                    l = o.touches;
                l && l.length > 0 ? (i = l[0].clientX, a = l[0].clientY) : (i = o.clientX, a = o.clientY);
                var h = parseFloat(n.getStyle(r, "padding-left")), d = parseFloat(n.getStyle(r, "padding-top")),
                    c = parseFloat(n.getStyle(r, "padding-right")), u = parseFloat(n.getStyle(r, "padding-bottom")),
                    f = s.right - s.left - h - c, g = s.bottom - s.top - d - u;
                return i = Math.round((i - s.left - h) / f * r.width / e.currentDevicePixelRatio), a = Math.round((a - s.top - d) / g * r.height / e.currentDevicePixelRatio), {
                    x: i,
                    y: a
                }
            }, n.addEvent = function (t, e, i) {
                t.addEventListener ? t.addEventListener(e, i) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
            }, n.removeEvent = function (t, e, i) {
                t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = n.noop
            }, n.bindEvents = function (t, e, i) {
                var a = t.events = t.events || {};
                n.each(e, function (e) {
                    a[e] = function () {
                        i.apply(t, arguments)
                    }, n.addEvent(t.chart.canvas, e, a[e])
                })
            }, n.unbindEvents = function (t, e) {
                var i = t.chart.canvas;
                n.each(e, function (t, e) {
                    n.removeEvent(i, e, t)
                })
            }, n.getConstraintWidth = function (t) {
                return o(t, "max-width", "clientWidth")
            }, n.getConstraintHeight = function (t) {
                return o(t, "max-height", "clientHeight")
            }, n.getMaximumWidth = function (t) {
                var e = t.parentNode,
                    i = parseInt(n.getStyle(e, "padding-left")) + parseInt(n.getStyle(e, "padding-right")),
                    a = e.clientWidth - i, o = n.getConstraintWidth(t);
                return isNaN(o) ? a : Math.min(a, o)
            }, n.getMaximumHeight = function (t) {
                var e = t.parentNode,
                    i = parseInt(n.getStyle(e, "padding-top")) + parseInt(n.getStyle(e, "padding-bottom")),
                    a = e.clientHeight - i, o = n.getConstraintHeight(t);
                return isNaN(o) ? a : Math.min(a, o)
            }, n.getStyle = function (t, e) {
                return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
            }, n.retinaScale = function (t) {
                var e = t.ctx, i = t.canvas, a = i.width, o = i.height,
                    n = t.currentDevicePixelRatio = window.devicePixelRatio || 1;
                1 !== n && (i.height = o * n, i.width = a * n, e.scale(n, n), t.originalDevicePixelRatio = t.originalDevicePixelRatio || n), i.style.width = a + "px", i.style.height = o + "px"
            }, n.clear = function (t) {
                t.ctx.clearRect(0, 0, t.width, t.height)
            }, n.fontString = function (t, e, i) {
                return e + " " + t + "px " + i
            }, n.longestText = function (t, e, i, a) {
                a = a || {};
                var o = a.data = a.data || {}, r = a.garbageCollect = a.garbageCollect || [];
                a.font !== e && (o = a.data = {}, r = a.garbageCollect = [], a.font = e), t.font = e;
                var s = 0;
                n.each(i, function (e) {
                    if (void 0 !== e && null !== e) {
                        var i = o[e];
                        i || (i = o[e] = t.measureText(e).width, r.push(e)), i > s && (s = i)
                    }
                });
                var l = r.length / 2;
                if (l > i.length) {
                    for (var h = 0; l > h; h++) delete o[r[h]];
                    r.splice(0, l)
                }
                return s
            }, n.drawRoundedRectangle = function (t, e, i, a, o, n) {
                t.beginPath(), t.moveTo(e + n, i), t.lineTo(e + a - n, i), t.quadraticCurveTo(e + a, i, e + a, i + n), t.lineTo(e + a, i + o - n), t.quadraticCurveTo(e + a, i + o, e + a - n, i + o), t.lineTo(e + n, i + o), t.quadraticCurveTo(e, i + o, e, i + o - n), t.lineTo(e, i + n), t.quadraticCurveTo(e, i, e + n, i), t.closePath()
            }, n.color = function (e) {
                return a ? a(e instanceof CanvasGradient ? t.defaults.global.defaultColor : e) : (console.log("Color.js not found!"), e)
            }, n.addResizeListener = function (t, e) {
                var i = document.createElement("iframe"), a = "chartjs-hidden-iframe";
                i.classlist ? i.classlist.add(a) : i.setAttribute("class", a);
                var o = i.style;
                o.width = "100%", o.display = "block", o.border = 0, o.height = 0, o.margin = 0, o.position = "absolute", o.left = 0, o.right = 0, o.top = 0, o.bottom = 0, t.insertBefore(i, t.firstChild), (i.contentWindow || i).onresize = function () {
                    e && e()
                }
            }, n.removeResizeListener = function (t) {
                var e = t.querySelector(".chartjs-hidden-iframe");
                e && e.parentNode.removeChild(e)
            }, n.isArray = function (t) {
                return Array.isArray ? Array.isArray(t) : "[object Array]" === Object.prototype.toString.call(t)
            }, n.arrayEquals = function (t, e) {
                var i, a, o, r;
                if (!t || !e || t.length != e.length) return !1;
                for (i = 0, a = t.length; a > i; ++i) if (o = t[i], r = e[i], o instanceof Array && r instanceof Array) {
                    if (!n.arrayEquals(o, r)) return !1
                } else if (o != r) return !1;
                return !0
            }, n.pushAllIfDefined = function (t, e) {
                "undefined" != typeof t && (n.isArray(t) ? e.push.apply(e, t) : e.push(t))
            }, n.callCallback = function (t, e, i) {
                t && "function" == typeof t.call && t.apply(i, e)
            }, n.getHoverColor = function (t) {
                return t instanceof CanvasPattern ? t : n.color(t).saturate(.5).darken(.1).rgbString()
            }
        }
    }, {"chartjs-color": 3}], 26: [function (t, e, i) {
        "use strict";
        e.exports = function () {
            var t = function (e, i) {
                this.config = i, e.length && e[0].getContext && (e = e[0]), e.getContext && (e = e.getContext("2d")), this.ctx = e, this.canvas = e.canvas, this.width = e.canvas.width || parseInt(t.helpers.getStyle(e.canvas, "width")) || t.helpers.getMaximumWidth(e.canvas), this.height = e.canvas.height || parseInt(t.helpers.getStyle(e.canvas, "height")) || t.helpers.getMaximumHeight(e.canvas), this.aspectRatio = this.width / this.height, (isNaN(this.aspectRatio) || isFinite(this.aspectRatio) === !1) && (this.aspectRatio = void 0 !== i.aspectRatio ? i.aspectRatio : 2), this.originalCanvasStyleWidth = e.canvas.style.width, this.originalCanvasStyleHeight = e.canvas.style.height, t.helpers.retinaScale(this), i && (this.controller = new t.Controller(this));
                var a = this;
                return t.helpers.addResizeListener(e.canvas.parentNode, function () {
                    a.controller && a.controller.config.options.responsive && a.controller.resize()
                }), this.controller ? this.controller : this
            };
            return t.defaults = {
                global: {
                    responsive: !0,
                    responsiveAnimationDuration: 0,
                    maintainAspectRatio: !0,
                    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                    hover: {onHover: null, mode: "single", animationDuration: 400},
                    onClick: null,
                    defaultColor: "rgba(0,0,0,0.1)",
                    defaultFontColor: "#666",
                    defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    defaultFontSize: 12,
                    defaultFontStyle: "normal",
                    showLines: !0,
                    elements: {},
                    legendCallback: function (t) {
                        var e = [];
                        e.push('<ul class="' + t.id + '-legend">');
                        for (var i = 0; i < t.data.datasets.length; i++) e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
                        return e.push("</ul>"), e.join("")
                    }
                }
            }, t
        }
    }, {}], 27: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = t.helpers;
            t.layoutService = {
                defaults: {}, addBox: function (t, e) {
                    t.boxes || (t.boxes = []), t.boxes.push(e)
                }, removeBox: function (t, e) {
                    t.boxes && t.boxes.splice(t.boxes.indexOf(e), 1)
                }, update: function (t, i, a) {
                    function o(t) {
                        var e, i = t.isHorizontal();
                        i ? (e = t.update(t.options.fullWidth ? p : k, y), S -= e.height) : (e = t.update(x, v), k -= e.width), C.push({
                            horizontal: i,
                            minSize: e,
                            box: t
                        })
                    }

                    function n(t) {
                        var i = e.findNextWhere(C, function (e) {
                            return e.box === t
                        });
                        if (i) if (t.isHorizontal()) {
                            var a = {left: w, right: M, top: 0, bottom: 0};
                            t.update(t.options.fullWidth ? p : k, m / 2, a)
                        } else t.update(i.minSize.width, S)
                    }

                    function r(t) {
                        var i = e.findNextWhere(C, function (e) {
                            return e.box === t
                        }), a = {left: 0, right: 0, top: D, bottom: A};
                        i && t.update(i.minSize.width, S, a)
                    }

                    function s(t) {
                        t.isHorizontal() ? (t.left = t.options.fullWidth ? l : w, t.right = t.options.fullWidth ? i - l : w + k, t.top = P, t.bottom = P + t.height, P = t.bottom) : (t.left = _, t.right = _ + t.width, t.top = D, t.bottom = D + S, _ = t.right)
                    }

                    if (t) {
                        var l = 0, h = 0, d = e.where(t.boxes, function (t) {
                            return "left" === t.options.position
                        }), c = e.where(t.boxes, function (t) {
                            return "right" === t.options.position
                        }), u = e.where(t.boxes, function (t) {
                            return "top" === t.options.position
                        }), f = e.where(t.boxes, function (t) {
                            return "bottom" === t.options.position
                        }), g = e.where(t.boxes, function (t) {
                            return "chartArea" === t.options.position
                        });
                        u.sort(function (t, e) {
                            return (e.options.fullWidth ? 1 : 0) - (t.options.fullWidth ? 1 : 0)
                        }), f.sort(function (t, e) {
                            return (t.options.fullWidth ? 1 : 0) - (e.options.fullWidth ? 1 : 0)
                        });
                        var p = i - 2 * l, m = a - 2 * h, b = p / 2, v = m / 2, x = (i - b) / (d.length + c.length),
                            y = (a - v) / (u.length + f.length), k = p, S = m, C = [];
                        e.each(d.concat(c, u, f), o);
                        var w = l, M = l, D = h, A = h;
                        e.each(d.concat(c), n), e.each(d, function (t) {
                            w += t.width
                        }), e.each(c, function (t) {
                            M += t.width
                        }), e.each(u.concat(f), n), e.each(u, function (t) {
                            D += t.height
                        }), e.each(f, function (t) {
                            A += t.height
                        }), e.each(d.concat(c), r), w = l, M = l, D = h, A = h, e.each(d, function (t) {
                            w += t.width
                        }), e.each(c, function (t) {
                            M += t.width
                        }), e.each(u, function (t) {
                            D += t.height
                        }), e.each(f, function (t) {
                            A += t.height
                        });
                        var I = a - D - A, F = i - w - M;
                        (F !== k || I !== S) && (e.each(d, function (t) {
                            t.height = I
                        }), e.each(c, function (t) {
                            t.height = I
                        }), e.each(u, function (t) {
                            t.options.fullWidth || (t.width = F)
                        }), e.each(f, function (t) {
                            t.options.fullWidth || (t.width = F)
                        }), S = I, k = F);
                        var _ = l, P = h;
                        e.each(d.concat(u), s), _ += k, P += S, e.each(c, s), e.each(f, s), t.chartArea = {
                            left: w,
                            top: D,
                            right: w + k,
                            bottom: D + S
                        }, e.each(g, function (e) {
                            e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(k, S)
                        })
                    }
                }
            }
        }
    }, {}], 28: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = t.helpers, i = e.noop;
            t.defaults.global.legend = {
                display: !0,
                position: "top",
                fullWidth: !0,
                reverse: !1,
                onClick: function (t, e) {
                    var i = e.datasetIndex, a = this.chart, o = a.getDatasetMeta(i);
                    o.hidden = null === o.hidden ? !a.data.datasets[i].hidden : null, a.update()
                },
                labels: {
                    boxWidth: 40, padding: 10, generateLabels: function (t) {
                        var i = t.data;
                        return e.isArray(i.datasets) ? i.datasets.map(function (e, i) {
                            return {
                                text: e.label,
                                fillStyle: e.backgroundColor,
                                hidden: !t.isDatasetVisible(i),
                                lineCap: e.borderCapStyle,
                                lineDash: e.borderDash,
                                lineDashOffset: e.borderDashOffset,
                                lineJoin: e.borderJoinStyle,
                                lineWidth: e.borderWidth,
                                strokeStyle: e.borderColor,
                                datasetIndex: i
                            }
                        }, this) : []
                    }
                }
            }, t.Legend = t.Element.extend({
                initialize: function (t) {
                    e.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
                }, beforeUpdate: i, update: function (t, e, i) {
                    return this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this.margins = i, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this.beforeBuildLabels(), this.buildLabels(), this.afterBuildLabels(), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate(), this.minSize
                }, afterUpdate: i, beforeSetDimensions: i, setDimensions: function () {
                    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0, this.minSize = {
                        width: 0,
                        height: 0
                    }
                }, afterSetDimensions: i, beforeBuildLabels: i, buildLabels: function () {
                    this.legendItems = this.options.labels.generateLabels.call(this, this.chart), this.options.reverse && this.legendItems.reverse()
                }, afterBuildLabels: i, beforeFit: i, fit: function () {
                    var i = this.options, a = i.labels, o = i.display, n = this.ctx, r = t.defaults.global,
                        s = e.getValueOrDefault, l = s(a.fontSize, r.defaultFontSize),
                        h = s(a.fontStyle, r.defaultFontStyle), d = s(a.fontFamily, r.defaultFontFamily),
                        c = e.fontString(l, h, d), u = this.legendHitBoxes = [], f = this.minSize,
                        g = this.isHorizontal();
                    if (g ? (f.width = this.maxWidth, f.height = o ? 10 : 0) : (f.width = o ? 10 : 0, f.height = this.maxHeight), o && g) {
                        var p = this.lineWidths = [0], m = this.legendItems.length ? l + a.padding : 0;
                        n.textAlign = "left", n.textBaseline = "top", n.font = c, e.each(this.legendItems, function (t, e) {
                            var i = a.boxWidth + l / 2 + n.measureText(t.text).width;
                            p[p.length - 1] + i + a.padding >= this.width && (m += l + a.padding, p[p.length] = this.left), u[e] = {
                                left: 0,
                                top: 0,
                                width: i,
                                height: l
                            }, p[p.length - 1] += i + a.padding
                        }, this), f.height += m
                    }
                    this.width = f.width, this.height = f.height
                }, afterFit: i, isHorizontal: function () {
                    return "top" === this.options.position || "bottom" === this.options.position
                }, draw: function () {
                    var i = this.options, a = i.labels, o = t.defaults.global, n = o.elements.line, r = this.width,
                        s = this.lineWidths;
                    if (i.display) {
                        var l = this.ctx, h = {x: this.left + (r - s[0]) / 2, y: this.top + a.padding, line: 0},
                            d = e.getValueOrDefault, c = d(a.fontColor, o.defaultFontColor),
                            u = d(a.fontSize, o.defaultFontSize), f = d(a.fontStyle, o.defaultFontStyle),
                            g = d(a.fontFamily, o.defaultFontFamily), p = e.fontString(u, f, g);
                        if (this.isHorizontal()) {
                            l.textAlign = "left", l.textBaseline = "top", l.lineWidth = .5, l.strokeStyle = c, l.fillStyle = c, l.font = p;
                            var m = a.boxWidth, b = this.legendHitBoxes;
                            e.each(this.legendItems, function (t, e) {
                                var i = l.measureText(t.text).width, c = m + u / 2 + i, f = h.x, g = h.y;
                                f + c >= r && (g = h.y += u + a.padding, h.line++, f = h.x = this.left + (r - s[h.line]) / 2), l.save(), l.fillStyle = d(t.fillStyle, o.defaultColor), l.lineCap = d(t.lineCap, n.borderCapStyle), l.lineDashOffset = d(t.lineDashOffset, n.borderDashOffset), l.lineJoin = d(t.lineJoin, n.borderJoinStyle), l.lineWidth = d(t.lineWidth, n.borderWidth), l.strokeStyle = d(t.strokeStyle, o.defaultColor), l.setLineDash && l.setLineDash(d(t.lineDash, n.borderDash)), l.strokeRect(f, g, m, u), l.fillRect(f, g, m, u), l.restore(), b[e].left = f, b[e].top = g, l.fillText(t.text, m + u / 2 + f, g), t.hidden && (l.beginPath(), l.lineWidth = 2, l.moveTo(m + u / 2 + f, g + u / 2), l.lineTo(m + u / 2 + f + i, g + u / 2), l.stroke()), h.x += c + a.padding
                            }, this)
                        }
                    }
                }, handleEvent: function (t) {
                    var i = e.getRelativePosition(t, this.chart.chart), a = i.x, o = i.y, n = this.options;
                    if (a >= this.left && a <= this.right && o >= this.top && o <= this.bottom) for (var r = this.legendHitBoxes, s = 0; s < r.length; ++s) {
                        var l = r[s];
                        if (a >= l.left && a <= l.left + l.width && o >= l.top && o <= l.top + l.height) {
                            n.onClick && n.onClick.call(this, t, this.legendItems[s]);
                            break
                        }
                    }
                }
            })
        }
    }, {}], 29: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = t.helpers;
            t.plugins = [], t.pluginService = {
                register: function (e) {
                    var i = t.plugins;
                    -1 === i.indexOf(e) && i.push(e)
                }, remove: function (e) {
                    var i = t.plugins, a = i.indexOf(e);
                    -1 !== a && i.splice(a, 1)
                }, notifyPlugins: function (i, a, o) {
                    e.each(t.plugins, function (t) {
                        t[i] && "function" == typeof t[i] && t[i].apply(o, a)
                    }, o)
                }
            };
            var i = e.noop;
            t.PluginBase = t.Element.extend({
                beforeInit: i,
                afterInit: i,
                beforeUpdate: i,
                afterUpdate: i,
                beforeDraw: i,
                afterDraw: i,
                destroy: i
            })
        }
    }, {}], 30: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = t.helpers;
            t.defaults.scale = {
                display: !0,
                position: "left",
                gridLines: {
                    display: !0,
                    color: "rgba(0, 0, 0, 0.1)",
                    lineWidth: 1,
                    drawBorder: !0,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    tickMarkLength: 10,
                    zeroLineWidth: 1,
                    zeroLineColor: "rgba(0,0,0,0.25)",
                    offsetGridLines: !1
                },
                scaleLabel: {labelString: "", display: !1},
                ticks: {
                    beginAtZero: !1,
                    minRotation: 0,
                    maxRotation: 50,
                    mirror: !1,
                    padding: 10,
                    reverse: !1,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 0,
                    labelOffset: 0,
                    callback: function (t) {
                        return "" + t
                    }
                }
            }, t.Scale = t.Element.extend({
                beforeUpdate: function () {
                    e.callCallback(this.options.beforeUpdate, [this])
                },
                update: function (t, i, a) {
                    return this.beforeUpdate(), this.maxWidth = t, this.maxHeight = i, this.margins = e.extend({
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }, a), this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this.beforeBuildTicks(), this.buildTicks(), this.afterBuildTicks(), this.beforeTickToLabelConversion(), this.convertTicksToLabels(), this.afterTickToLabelConversion(), this.beforeCalculateTickRotation(), this.calculateTickRotation(), this.afterCalculateTickRotation(), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate(), this.minSize
                },
                afterUpdate: function () {
                    e.callCallback(this.options.afterUpdate, [this])
                },
                beforeSetDimensions: function () {
                    e.callCallback(this.options.beforeSetDimensions, [this])
                },
                setDimensions: function () {
                    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0
                },
                afterSetDimensions: function () {
                    e.callCallback(this.options.afterSetDimensions, [this])
                },
                beforeDataLimits: function () {
                    e.callCallback(this.options.beforeDataLimits, [this])
                },
                determineDataLimits: e.noop,
                afterDataLimits: function () {
                    e.callCallback(this.options.afterDataLimits, [this])
                },
                beforeBuildTicks: function () {
                    e.callCallback(this.options.beforeBuildTicks, [this])
                },
                buildTicks: e.noop,
                afterBuildTicks: function () {
                    e.callCallback(this.options.afterBuildTicks, [this])
                },
                beforeTickToLabelConversion: function () {
                    e.callCallback(this.options.beforeTickToLabelConversion, [this])
                },
                convertTicksToLabels: function () {
                    this.ticks = this.ticks.map(function (t, e, i) {
                        return this.options.ticks.userCallback ? this.options.ticks.userCallback(t, e, i) : this.options.ticks.callback(t, e, i)
                    }, this)
                },
                afterTickToLabelConversion: function () {
                    e.callCallback(this.options.afterTickToLabelConversion, [this])
                },
                beforeCalculateTickRotation: function () {
                    e.callCallback(this.options.beforeCalculateTickRotation, [this])
                },
                calculateTickRotation: function () {
                    var i = this.ctx, a = t.defaults.global, o = this.options.ticks,
                        n = e.getValueOrDefault(o.fontSize, a.defaultFontSize),
                        r = e.getValueOrDefault(o.fontStyle, a.defaultFontStyle),
                        s = e.getValueOrDefault(o.fontFamily, a.defaultFontFamily), l = e.fontString(n, r, s);
                    i.font = l;
                    var h, d = i.measureText(this.ticks[0]).width,
                        c = i.measureText(this.ticks[this.ticks.length - 1]).width;
                    if (this.labelRotation = o.minRotation || 0, this.paddingRight = 0, this.paddingLeft = 0, this.options.display && this.isHorizontal()) {
                        this.paddingRight = c / 2 + 3, this.paddingLeft = d / 2 + 3, this.longestTextCache || (this.longestTextCache = {});
                        for (var u, f, g = e.longestText(i, l, this.ticks, this.longestTextCache), p = g, m = this.getPixelForTick(1) - this.getPixelForTick(0) - 6; p > m && this.labelRotation < o.maxRotation;) {
                            if (u = Math.cos(e.toRadians(this.labelRotation)), f = Math.sin(e.toRadians(this.labelRotation)), h = u * d, h + n / 2 > this.yLabelWidth && (this.paddingLeft = h + n / 2), this.paddingRight = n / 2, f * g > this.maxHeight) {
                                this.labelRotation--;
                                break
                            }
                            this.labelRotation++, p = u * g
                        }
                    }
                    this.margins && (this.paddingLeft = Math.max(this.paddingLeft - this.margins.left, 0), this.paddingRight = Math.max(this.paddingRight - this.margins.right, 0))
                },
                afterCalculateTickRotation: function () {
                    e.callCallback(this.options.afterCalculateTickRotation, [this])
                },
                beforeFit: function () {
                    e.callCallback(this.options.beforeFit, [this])
                },
                fit: function () {
                    var i = this.minSize = {width: 0, height: 0}, a = this.options, o = t.defaults.global, n = a.ticks,
                        r = a.scaleLabel, s = a.display, l = this.isHorizontal(),
                        h = e.getValueOrDefault(n.fontSize, o.defaultFontSize),
                        d = e.getValueOrDefault(n.fontStyle, o.defaultFontStyle),
                        c = e.getValueOrDefault(n.fontFamily, o.defaultFontFamily), u = e.fontString(h, d, c),
                        f = e.getValueOrDefault(r.fontSize, o.defaultFontSize),
                        g = e.getValueOrDefault(r.fontStyle, o.defaultFontStyle),
                        p = e.getValueOrDefault(r.fontFamily, o.defaultFontFamily),
                        m = (e.fontString(f, g, p), a.gridLines.tickMarkLength);
                    if (l ? i.width = this.isFullWidth() ? this.maxWidth - this.margins.left - this.margins.right : this.maxWidth : i.width = s ? m : 0, l ? i.height = s ? m : 0 : i.height = this.maxHeight, r.display && s && (l ? i.height += 1.5 * f : i.width += 1.5 * f), n.display && s) {
                        this.longestTextCache || (this.longestTextCache = {});
                        var b = e.longestText(this.ctx, u, this.ticks, this.longestTextCache);
                        if (l) {
                            this.longestLabelWidth = b;
                            var v = Math.sin(e.toRadians(this.labelRotation)) * this.longestLabelWidth + 1.5 * h;
                            i.height = Math.min(this.maxHeight, i.height + v), this.ctx.font = u;
                            var x = this.ctx.measureText(this.ticks[0]).width,
                                y = this.ctx.measureText(this.ticks[this.ticks.length - 1]).width,
                                k = Math.cos(e.toRadians(this.labelRotation)),
                                S = Math.sin(e.toRadians(this.labelRotation));
                            this.paddingLeft = 0 !== this.labelRotation ? k * x + 3 : x / 2 + 3, this.paddingRight = 0 !== this.labelRotation ? S * (h / 2) + 3 : y / 2 + 3
                        } else {
                            var C = this.maxWidth - i.width, w = n.mirror;
                            w ? b = 0 : b += this.options.ticks.padding, C > b ? i.width += b : i.width = this.maxWidth, this.paddingTop = h / 2, this.paddingBottom = h / 2
                        }
                    }
                    this.margins && (this.paddingLeft = Math.max(this.paddingLeft - this.margins.left, 0), this.paddingTop = Math.max(this.paddingTop - this.margins.top, 0), this.paddingRight = Math.max(this.paddingRight - this.margins.right, 0), this.paddingBottom = Math.max(this.paddingBottom - this.margins.bottom, 0)), this.width = i.width, this.height = i.height
                },
                afterFit: function () {
                    e.callCallback(this.options.afterFit, [this])
                },
                isHorizontal: function () {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                isFullWidth: function () {
                    return this.options.fullWidth
                },
                getRightValue: function i(t) {
                    return null === t || "undefined" == typeof t ? NaN : "number" == typeof t && isNaN(t) ? NaN : "object" == typeof t ? t instanceof Date || t.isValid ? t : i(this.isHorizontal() ? t.x : t.y) : t
                },
                getLabelForIndex: e.noop,
                getPixelForValue: e.noop,
                getValueForPixel: e.noop,
                getPixelForTick: function (t, e) {
                    if (this.isHorizontal()) {
                        var i = this.width - (this.paddingLeft + this.paddingRight),
                            a = i / Math.max(this.ticks.length - (this.options.gridLines.offsetGridLines ? 0 : 1), 1),
                            o = a * t + this.paddingLeft;
                        e && (o += a / 2);
                        var n = this.left + Math.round(o);
                        return n += this.isFullWidth() ? this.margins.left : 0
                    }
                    var r = this.height - (this.paddingTop + this.paddingBottom);
                    return this.top + t * (r / (this.ticks.length - 1))
                },
                getPixelForDecimal: function (t) {
                    if (this.isHorizontal()) {
                        var e = this.width - (this.paddingLeft + this.paddingRight), i = e * t + this.paddingLeft,
                            a = this.left + Math.round(i);
                        return a += this.isFullWidth() ? this.margins.left : 0
                    }
                    return this.top + t * this.height
                },
                getBasePixel: function () {
                    var t = this, e = t.min, i = t.max;
                    return t.getPixelForValue(t.beginAtZero ? 0 : 0 > e && 0 > i ? i : e > 0 && i > 0 ? e : 0)
                },
                draw: function (i) {
                    var a = this.options;
                    if (a.display) {
                        var o, n, r, s, l, h = this.ctx, d = t.defaults.global, c = a.ticks, u = a.gridLines,
                            f = a.scaleLabel, g = 0 !== this.labelRotation, p = c.autoSkip;
                        c.maxTicksLimit && (l = c.maxTicksLimit);
                        var m = e.getValueOrDefault(c.fontColor, d.defaultFontColor),
                            b = e.getValueOrDefault(c.fontSize, d.defaultFontSize),
                            v = e.getValueOrDefault(c.fontStyle, d.defaultFontStyle),
                            x = e.getValueOrDefault(c.fontFamily, d.defaultFontFamily), y = e.fontString(b, v, x),
                            k = u.tickMarkLength, S = e.getValueOrDefault(f.fontColor, d.defaultFontColor),
                            C = e.getValueOrDefault(f.fontSize, d.defaultFontSize),
                            w = e.getValueOrDefault(f.fontStyle, d.defaultFontStyle),
                            M = e.getValueOrDefault(f.fontFamily, d.defaultFontFamily), D = e.fontString(C, w, M),
                            A = e.toRadians(this.labelRotation), I = Math.cos(A),
                            F = (Math.sin(A), this.longestLabelWidth * I);
                        if (h.fillStyle = m, this.isHorizontal()) {
                            o = !0;
                            var _ = "bottom" === a.position ? this.top : this.bottom - k,
                                P = "bottom" === a.position ? this.top + k : this.bottom;
                            if (n = !1, g && (F /= 2), (F + c.autoSkipPadding) * this.ticks.length > this.width - (this.paddingLeft + this.paddingRight) && (n = 1 + Math.floor((F + c.autoSkipPadding) * this.ticks.length / (this.width - (this.paddingLeft + this.paddingRight)))), l && this.ticks.length > l) for (; !n || this.ticks.length / (n || 1) > l;) n || (n = 1), n += 1;
                            p || (n = !1), e.each(this.ticks, function (t, r) {
                                var s = this.ticks.length === r + 1,
                                    l = n > 1 && r % n > 0 || r % n === 0 && r + n >= this.ticks.length;
                                if ((!l || s) && void 0 !== t && null !== t) {
                                    var d = this.getPixelForTick(r), f = this.getPixelForTick(r, u.offsetGridLines);
                                    u.display && (r === ("undefined" != typeof this.zeroLineIndex ? this.zeroLineIndex : 0) ? (h.lineWidth = u.zeroLineWidth, h.strokeStyle = u.zeroLineColor, o = !0) : o && (h.lineWidth = u.lineWidth, h.strokeStyle = u.color, o = !1), d += e.aliasPixel(h.lineWidth), h.beginPath(), u.drawTicks && (h.moveTo(d, _), h.lineTo(d, P)), u.drawOnChartArea && (h.moveTo(d, i.top), h.lineTo(d, i.bottom)), h.stroke()), c.display && (h.save(), h.translate(f + c.labelOffset, g ? this.top + 12 : "top" === a.position ? this.bottom - k : this.top + k), h.rotate(-1 * A), h.font = y, h.textAlign = g ? "right" : "center", h.textBaseline = g ? "middle" : "top" === a.position ? "bottom" : "top", h.fillText(t, 0, 0), h.restore())
                                }
                            }, this), f.display && (h.textAlign = "center", h.textBaseline = "middle", h.fillStyle = S, h.font = D, r = this.left + (this.right - this.left) / 2, s = "bottom" === a.position ? this.bottom - C / 2 : this.top + C / 2, h.fillText(f.labelString, r, s))
                        } else {
                            o = !0;
                            var T = "right" === a.position ? this.left : this.right - 5,
                                V = "right" === a.position ? this.left + 5 : this.right;
                            if (e.each(this.ticks, function (t, n) {
                                if (void 0 !== t && null !== t) {
                                    var r = this.getPixelForTick(n);
                                    if (u.display && (n === ("undefined" != typeof this.zeroLineIndex ? this.zeroLineIndex : 0) ? (h.lineWidth = u.zeroLineWidth, h.strokeStyle = u.zeroLineColor, o = !0) : o && (h.lineWidth = u.lineWidth, h.strokeStyle = u.color, o = !1), r += e.aliasPixel(h.lineWidth), h.beginPath(), u.drawTicks && (h.moveTo(T, r), h.lineTo(V, r)), u.drawOnChartArea && (h.moveTo(i.left, r), h.lineTo(i.right, r)), h.stroke()), c.display) {
                                        var s, l = this.getPixelForTick(n, u.offsetGridLines);
                                        h.save(), "left" === a.position ? c.mirror ? (s = this.right + c.padding, h.textAlign = "left") : (s = this.right - c.padding, h.textAlign = "right") : c.mirror ? (s = this.left - c.padding, h.textAlign = "right") : (s = this.left + c.padding, h.textAlign = "left"), h.translate(s, l + c.labelOffset), h.rotate(-1 * A), h.font = y, h.textBaseline = "middle", h.fillText(t, 0, 0), h.restore()
                                    }
                                }
                            }, this), f.display) {
                                r = "left" === a.position ? this.left + C / 2 : this.right - C / 2, s = this.top + (this.bottom - this.top) / 2;
                                var R = "left" === a.position ? -.5 * Math.PI : .5 * Math.PI;
                                h.save(), h.translate(r, s), h.rotate(R), h.textAlign = "center", h.fillStyle = S, h.font = D, h.textBaseline = "middle", h.fillText(f.labelString, 0, 0), h.restore()
                            }
                        }
                        if (u.drawBorder) {
                            h.lineWidth = u.lineWidth, h.strokeStyle = u.color;
                            var O = this.left, W = this.right, L = this.top, B = this.bottom,
                                z = e.aliasPixel(h.lineWidth);
                            this.isHorizontal() ? (L = B = "top" === a.position ? this.bottom : this.top, L += z, B += z) : (O = W = "left" === a.position ? this.right : this.left, O += z, W += z), h.beginPath(), h.moveTo(O, L), h.lineTo(W, B), h.stroke()
                        }
                    }
                }
            })
        }
    }, {}], 31: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = t.helpers;
            t.scaleService = {
                constructors: {}, defaults: {}, registerScaleType: function (t, i, a) {
                    this.constructors[t] = i, this.defaults[t] = e.clone(a)
                }, getScaleConstructor: function (t) {
                    return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                }, getScaleDefaults: function (i) {
                    return this.defaults.hasOwnProperty(i) ? e.scaleMerge(t.defaults.scale, this.defaults[i]) : {}
                }, updateScaleDefaults: function (t, i) {
                    var a = this.defaults;
                    a.hasOwnProperty(t) && (a[t] = e.extend(a[t], i))
                }, addScalesToLayout: function (i) {
                    e.each(i.scales, function (e) {
                        t.layoutService.addBox(i, e)
                    })
                }
            }
        }
    }, {}], 32: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = t.helpers;
            t.defaults.global.title = {
                display: !1,
                position: "top",
                fullWidth: !0,
                fontStyle: "bold",
                padding: 10,
                text: ""
            };
            var i = e.noop;
            t.Title = t.Element.extend({
                initialize: function (i) {
                    e.extend(this, i), this.options = e.configMerge(t.defaults.global.title, i.options), this.legendHitBoxes = []
                },
                beforeUpdate: i,
                update: function (t, e, i) {
                    return this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this.margins = i, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this.beforeBuildLabels(), this.buildLabels(), this.afterBuildLabels(), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate(), this.minSize
                },
                afterUpdate: i,
                beforeSetDimensions: i,
                setDimensions: function () {
                    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0, this.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: i,
                beforeBuildLabels: i,
                buildLabels: i,
                afterBuildLabels: i,
                beforeFit: i,
                fit: function () {
                    var i = this, a = (i.ctx, e.getValueOrDefault), o = i.options, n = t.defaults.global, r = o.display,
                        s = a(o.fontSize, n.defaultFontSize), l = i.minSize;
                    i.isHorizontal() ? (l.width = i.maxWidth, l.height = r ? s + 2 * o.padding : 0) : (l.width = r ? s + 2 * o.padding : 0, l.height = i.maxHeight), i.width = l.width, i.height = l.height
                },
                afterFit: i,
                isHorizontal: function () {
                    var t = this.options.position;
                    return "top" === t || "bottom" === t
                },
                draw: function () {
                    var i = this, a = i.ctx, o = e.getValueOrDefault, n = i.options, r = t.defaults.global;
                    if (n.display) {
                        var s, l, h = o(n.fontSize, r.defaultFontSize), d = o(n.fontStyle, r.defaultFontStyle),
                            c = o(n.fontFamily, r.defaultFontFamily), u = e.fontString(h, d, c), f = 0, g = i.top,
                            p = i.left, m = i.bottom, b = i.right;
                        a.fillStyle = o(n.fontColor, r.defaultFontColor), a.font = u, i.isHorizontal() ? (s = p + (b - p) / 2, l = g + (m - g) / 2) : (s = "left" === n.position ? p + h / 2 : b - h / 2, l = g + (m - g) / 2, f = Math.PI * ("left" === n.position ? -.5 : .5)), a.save(), a.translate(s, l), a.rotate(f), a.textAlign = "center", a.textBaseline = "middle", a.fillText(n.text, 0, 0), a.restore()
                    }
                }
            })
        }
    }, {}], 33: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            function e(t, e) {
                return e && (i.isArray(e) ? t = t.concat(e) : t.push(e)), t
            }

            var i = t.helpers;
            t.defaults.global.tooltips = {
                enabled: !0,
                custom: null,
                mode: "single",
                backgroundColor: "rgba(0,0,0,0.8)",
                titleFontStyle: "bold",
                titleSpacing: 2,
                titleMarginBottom: 6,
                titleColor: "#fff",
                titleAlign: "left",
                bodySpacing: 2,
                bodyColor: "#fff",
                bodyAlign: "left",
                footerFontStyle: "bold",
                footerSpacing: 2,
                footerMarginTop: 6,
                footerColor: "#fff",
                footerAlign: "left",
                yPadding: 6,
                xPadding: 6,
                yAlign: "center",
                xAlign: "center",
                caretSize: 5,
                cornerRadius: 6,
                multiKeyBackground: "#fff",
                callbacks: {
                    beforeTitle: i.noop, title: function (t, e) {
                        var i = "";
                        return t.length > 0 && (t[0].xLabel ? i = t[0].xLabel : e.labels.length > 0 && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i
                    }, afterTitle: i.noop, beforeBody: i.noop, beforeLabel: i.noop, label: function (t, e) {
                        var i = e.datasets[t.datasetIndex].label || "";
                        return i + ": " + t.yLabel
                    }, afterLabel: i.noop, afterBody: i.noop, beforeFooter: i.noop, footer: i.noop, afterFooter: i.noop
                }
            }, t.Tooltip = t.Element.extend({
                initialize: function () {
                    var e = t.defaults.global, a = this._options, o = a.tooltips;
                    i.extend(this, {
                        _model: {
                            xPadding: o.xPadding,
                            yPadding: o.yPadding,
                            xAlign: o.yAlign,
                            yAlign: o.xAlign,
                            bodyColor: o.bodyColor,
                            _bodyFontFamily: i.getValueOrDefault(o.bodyFontFamily, e.defaultFontFamily),
                            _bodyFontStyle: i.getValueOrDefault(o.bodyFontStyle, e.defaultFontStyle),
                            _bodyAlign: o.bodyAlign,
                            bodyFontSize: i.getValueOrDefault(o.bodyFontSize, e.defaultFontSize),
                            bodySpacing: o.bodySpacing,
                            titleColor: o.titleColor,
                            _titleFontFamily: i.getValueOrDefault(o.titleFontFamily, e.defaultFontFamily),
                            _titleFontStyle: i.getValueOrDefault(o.titleFontStyle, e.defaultFontStyle),
                            titleFontSize: i.getValueOrDefault(o.titleFontSize, e.defaultFontSize),
                            _titleAlign: o.titleAlign,
                            titleSpacing: o.titleSpacing,
                            titleMarginBottom: o.titleMarginBottom,
                            footerColor: o.footerColor,
                            _footerFontFamily: i.getValueOrDefault(o.footerFontFamily, e.defaultFontFamily),
                            _footerFontStyle: i.getValueOrDefault(o.footerFontStyle, e.defaultFontStyle),
                            footerFontSize: i.getValueOrDefault(o.footerFontSize, e.defaultFontSize),
                            _footerAlign: o.footerAlign,
                            footerSpacing: o.footerSpacing,
                            footerMarginTop: o.footerMarginTop,
                            caretSize: o.caretSize,
                            cornerRadius: o.cornerRadius,
                            backgroundColor: o.backgroundColor,
                            opacity: 0,
                            legendColorBackground: o.multiKeyBackground
                        }
                    })
                }, getTitle: function () {
                    var t = this._options.tooltips.callbacks.beforeTitle.apply(this, arguments),
                        i = this._options.tooltips.callbacks.title.apply(this, arguments),
                        a = this._options.tooltips.callbacks.afterTitle.apply(this, arguments), o = [];
                    return o = e(o, t), o = e(o, i), o = e(o, a)
                }, getBeforeBody: function () {
                    var t = this._options.tooltips.callbacks.beforeBody.apply(this, arguments);
                    return i.isArray(t) ? t : void 0 !== t ? [t] : []
                }, getBody: function (t, e) {
                    var a = [];
                    return i.each(t, function (t) {
                        i.pushAllIfDefined(this._options.tooltips.callbacks.beforeLabel.call(this, t, e), a), i.pushAllIfDefined(this._options.tooltips.callbacks.label.call(this, t, e), a), i.pushAllIfDefined(this._options.tooltips.callbacks.afterLabel.call(this, t, e), a)
                    }, this), a
                }, getAfterBody: function () {
                    var t = this._options.tooltips.callbacks.afterBody.apply(this, arguments);
                    return i.isArray(t) ? t : void 0 !== t ? [t] : []
                }, getFooter: function () {
                    var t = this._options.tooltips.callbacks.beforeFooter.apply(this, arguments),
                        i = this._options.tooltips.callbacks.footer.apply(this, arguments),
                        a = this._options.tooltips.callbacks.afterFooter.apply(this, arguments), o = [];
                    return o = e(o, t), o = e(o, i), o = e(o, a)
                }, getAveragePosition: function (t) {
                    if (!t.length) return !1;
                    var e = [], a = [];
                    i.each(t, function (t) {
                        if (t && t.hasValue()) {
                            var i = t.tooltipPosition();
                            e.push(i.x), a.push(i.y)
                        }
                    });
                    for (var o = 0, n = 0, r = 0; r < e.length; r++) o += e[r], n += a[r];
                    return {x: Math.round(o / e.length), y: Math.round(n / e.length)}
                }, update: function (t) {
                    if (this._active.length) {
                        this._model.opacity = 1;
                        var e, a = this._active[0], o = [], n = [];
                        if ("single" === this._options.tooltips.mode) {
                            var r = a._yScale || a._scale;
                            n.push({
                                xLabel: a._xScale ? a._xScale.getLabelForIndex(a._index, a._datasetIndex) : "",
                                yLabel: r ? r.getLabelForIndex(a._index, a._datasetIndex) : "",
                                index: a._index,
                                datasetIndex: a._datasetIndex
                            }), e = this.getAveragePosition(this._active)
                        } else i.each(this._data.datasets, function (t, e) {
                            if (this._chartInstance.isDatasetVisible(e)) {
                                var i = this._chartInstance.getDatasetMeta(e), o = i.data[a._index];
                                if (o) {
                                    var r = a._yScale || a._scale;
                                    n.push({
                                        xLabel: o._xScale ? o._xScale.getLabelForIndex(o._index, o._datasetIndex) : "",
                                        yLabel: r ? r.getLabelForIndex(o._index, o._datasetIndex) : "",
                                        index: a._index,
                                        datasetIndex: e
                                    })
                                }
                            }
                        }, this), i.each(this._active, function (t) {
                            t && o.push({borderColor: t._view.borderColor, backgroundColor: t._view.backgroundColor})
                        }, null), e = this.getAveragePosition(this._active);
                        i.extend(this._model, {
                            title: this.getTitle(n, this._data),
                            beforeBody: this.getBeforeBody(n, this._data),
                            body: this.getBody(n, this._data),
                            afterBody: this.getAfterBody(n, this._data),
                            footer: this.getFooter(n, this._data)
                        }), i.extend(this._model, {
                            x: Math.round(e.x),
                            y: Math.round(e.y),
                            caretPadding: i.getValueOrDefault(e.padding, 2),
                            labelColors: o
                        });
                        var s = this.getTooltipSize(this._model);
                        this.determineAlignment(s), i.extend(this._model, this.getBackgroundPoint(this._model, s))
                    } else this._model.opacity = 0;
                    return t && this._options.tooltips.custom && this._options.tooltips.custom.call(this, this._model), this
                }, getTooltipSize: function (t) {
                    var e = this._chart.ctx, a = {height: 2 * t.yPadding, width: 0},
                        o = t.body.length + t.beforeBody.length + t.afterBody.length;
                    return a.height += t.title.length * t.titleFontSize, a.height += (t.title.length - 1) * t.titleSpacing, a.height += t.title.length ? t.titleMarginBottom : 0, a.height += o * t.bodyFontSize, a.height += o ? (o - 1) * t.bodySpacing : 0, a.height += t.footer.length ? t.footerMarginTop : 0, a.height += t.footer.length * t.footerFontSize, a.height += t.footer.length ? (t.footer.length - 1) * t.footerSpacing : 0, e.font = i.fontString(t.titleFontSize, t._titleFontStyle, t._titleFontFamily), i.each(t.title, function (t) {
                        a.width = Math.max(a.width, e.measureText(t).width)
                    }), e.font = i.fontString(t.bodyFontSize, t._bodyFontStyle, t._bodyFontFamily), i.each(t.beforeBody.concat(t.afterBody), function (t) {
                        a.width = Math.max(a.width, e.measureText(t).width)
                    }), i.each(t.body, function (i) {
                        a.width = Math.max(a.width, e.measureText(i).width + ("single" !== this._options.tooltips.mode ? t.bodyFontSize + 2 : 0))
                    }, this), e.font = i.fontString(t.footerFontSize, t._footerFontStyle, t._footerFontFamily), i.each(t.footer, function (t) {
                        a.width = Math.max(a.width, e.measureText(t).width)
                    }), a.width += 2 * t.xPadding, a
                }, determineAlignment: function (t) {
                    this._model.y < t.height ? this._model.yAlign = "top" : this._model.y > this._chart.height - t.height && (this._model.yAlign = "bottom");
                    var e, i, a, o, n, r = this,
                        s = (this._chartInstance.chartArea.left + this._chartInstance.chartArea.right) / 2,
                        l = (this._chartInstance.chartArea.top + this._chartInstance.chartArea.bottom) / 2;
                    "center" === this._model.yAlign ? (e = function (t) {
                        return s >= t
                    }, i = function (t) {
                        return t > s
                    }) : (e = function (e) {
                        return e <= t.width / 2
                    }, i = function (e) {
                        return e >= r._chart.width - t.width / 2
                    }), a = function (e) {
                        return e + t.width > r._chart.width
                    }, o = function (e) {
                        return e - t.width < 0
                    }, n = function (t) {
                        return l >= t ? "top" : "bottom"
                    }, e(this._model.x) ? (this._model.xAlign = "left", a(this._model.x) && (this._model.xAlign = "center", this._model.yAlign = n(this._model.y))) : i(this._model.x) && (this._model.xAlign = "right", o(this._model.x) && (this._model.xAlign = "center", this._model.yAlign = n(this._model.y)))
                }, getBackgroundPoint: function (t, e) {
                    var i = {x: t.x, y: t.y};
                    return "right" === t.xAlign ? i.x -= e.width : "center" === t.xAlign && (i.x -= e.width / 2), "top" === t.yAlign ? i.y += t.caretPadding + t.caretSize : "bottom" === t.yAlign ? i.y -= e.height + t.caretPadding + t.caretSize : i.y -= e.height / 2, "center" === t.yAlign ? "left" === t.xAlign ? i.x += t.caretPadding + t.caretSize : "right" === t.xAlign && (i.x -= t.caretPadding + t.caretSize) : "left" === t.xAlign ? i.x -= t.cornerRadius + t.caretPadding : "right" === t.xAlign && (i.x += t.cornerRadius + t.caretPadding), i
                }, drawCaret: function (t, e, a, o) {
                    var n, r, s, l, h, d, c = this._view, u = this._chart.ctx;
                    "center" === c.yAlign ? ("left" === c.xAlign ? (n = t.x, r = n - c.caretSize, s = n) : (n = t.x + e.width, r = n + c.caretSize, s = n), h = t.y + e.height / 2, l = h - c.caretSize, d = h + c.caretSize) : ("left" === c.xAlign ? (n = t.x + c.cornerRadius, r = n + c.caretSize, s = r + c.caretSize) : "right" === c.xAlign ? (n = t.x + e.width - c.cornerRadius, r = n - c.caretSize, s = r - c.caretSize) : (r = t.x + e.width / 2, n = r - c.caretSize, s = r + c.caretSize), "top" === c.yAlign ? (l = t.y, h = l - c.caretSize, d = l) : (l = t.y + e.height, h = l + c.caretSize, d = l));
                    var f = i.color(c.backgroundColor);
                    u.fillStyle = f.alpha(a * f.alpha()).rgbString(), u.beginPath(), u.moveTo(n, l), u.lineTo(r, h), u.lineTo(s, d), u.closePath(), u.fill()
                }, drawTitle: function (t, e, a, o) {
                    if (e.title.length) {
                        a.textAlign = e._titleAlign, a.textBaseline = "top";
                        var n = i.color(e.titleColor);
                        a.fillStyle = n.alpha(o * n.alpha()).rgbString(), a.font = i.fontString(e.titleFontSize, e._titleFontStyle, e._titleFontFamily), i.each(e.title, function (i, o) {
                            a.fillText(i, t.x, t.y), t.y += e.titleFontSize + e.titleSpacing, o + 1 === e.title.length && (t.y += e.titleMarginBottom - e.titleSpacing)
                        })
                    }
                }, drawBody: function (t, e, a, o) {
                    a.textAlign = e._bodyAlign, a.textBaseline = "top";
                    var n = i.color(e.bodyColor);
                    a.fillStyle = n.alpha(o * n.alpha()).rgbString(), a.font = i.fontString(e.bodyFontSize, e._bodyFontStyle, e._bodyFontFamily), i.each(e.beforeBody, function (i) {
                        a.fillText(i, t.x, t.y), t.y += e.bodyFontSize + e.bodySpacing
                    }), i.each(e.body, function (n, r) {
                        "single" !== this._options.tooltips.mode && (a.fillStyle = i.color(e.legendColorBackground).alpha(o).rgbaString(), a.fillRect(t.x, t.y, e.bodyFontSize, e.bodyFontSize), a.strokeStyle = i.color(e.labelColors[r].borderColor).alpha(o).rgbaString(), a.strokeRect(t.x, t.y, e.bodyFontSize, e.bodyFontSize), a.fillStyle = i.color(e.labelColors[r].backgroundColor).alpha(o).rgbaString(), a.fillRect(t.x + 1, t.y + 1, e.bodyFontSize - 2, e.bodyFontSize - 2), a.fillStyle = i.color(e.bodyColor).alpha(o).rgbaString()), a.fillText(n, t.x + ("single" !== this._options.tooltips.mode ? e.bodyFontSize + 2 : 0), t.y), t.y += e.bodyFontSize + e.bodySpacing
                    }, this), i.each(e.afterBody, function (i) {
                        a.fillText(i, t.x, t.y), t.y += e.bodyFontSize
                    }), t.y -= e.bodySpacing
                }, drawFooter: function (t, e, a, o) {
                    if (e.footer.length) {
                        t.y += e.footerMarginTop, a.textAlign = e._footerAlign, a.textBaseline = "top";
                        var n = i.color(e.footerColor);
                        a.fillStyle = n.alpha(o * n.alpha()).rgbString(), a.font = i.fontString(e.footerFontSize, e._footerFontStyle, e._footerFontFamily), i.each(e.footer, function (i) {
                            a.fillText(i, t.x, t.y), t.y += e.footerFontSize + e.footerSpacing
                        })
                    }
                }, draw: function () {
                    var t = this._chart.ctx, e = this._view;
                    if (0 !== e.opacity) {
                        var a = e.caretPadding, o = this.getTooltipSize(e), n = {x: e.x, y: e.y},
                            r = Math.abs(e.opacity < .001) ? 0 : e.opacity;
                        if (this._options.tooltips.enabled) {
                            var s = i.color(e.backgroundColor);
                            t.fillStyle = s.alpha(r * s.alpha()).rgbString(), i.drawRoundedRectangle(t, n.x, n.y, o.width, o.height, e.cornerRadius), t.fill(), this.drawCaret(n, o, r, a), n.x += e.xPadding, n.y += e.yPadding, this.drawTitle(n, e, t, r), this.drawBody(n, e, t, r), this.drawFooter(n, e, t, r)
                        }
                    }
                }
            })
        }
    }, {}], 34: [function (t, e, i) {
        "use strict";
        e.exports = function (t, e) {
            var i = t.helpers, a = t.defaults.global;
            a.elements.arc = {
                backgroundColor: a.defaultColor,
                borderColor: "#fff",
                borderWidth: 2
            }, t.elements.Arc = t.Element.extend({
                inLabelRange: function (t) {
                    var e = this._view;
                    return e ? Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2) : !1
                }, inRange: function (t, e) {
                    var a = this._view;
                    if (a) {
                        for (var o = i.getAngleFromPoint(a, {
                            x: t,
                            y: e
                        }), n = o.angle, r = o.distance, s = a.startAngle, l = a.endAngle; s > l;) l += 2 * Math.PI;
                        for (; n > l;) n -= 2 * Math.PI;
                        for (; s > n;) n += 2 * Math.PI;
                        var h = n >= s && l >= n, d = r >= a.innerRadius && r <= a.outerRadius;
                        return h && d
                    }
                    return !1
                }, tooltipPosition: function () {
                    var t = this._view, e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                        i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                    return {x: t.x + Math.cos(e) * i, y: t.y + Math.sin(e) * i}
                }, draw: function () {
                    var t = this._chart.ctx, e = this._view, i = e.startAngle, a = e.endAngle;
                    t.beginPath(), t.arc(e.x, e.y, e.outerRadius, i, a), t.arc(e.x, e.y, e.innerRadius, a, i, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
                }
            })
        }
    }, {}], 35: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = t.helpers, i = t.defaults.global;
            t.defaults.global.elements.line = {
                tension: .4,
                backgroundColor: i.defaultColor,
                borderWidth: 3,
                borderColor: i.defaultColor,
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                fill: !0
            }, t.elements.Line = t.Element.extend({
                lineToNextPoint: function (t, e, i, a, o) {
                    var n = this._chart.ctx;
                    e._view.skip ? a.call(this, t, e, i) : t._view.skip ? o.call(this, t, e, i) : 0 === e._view.tension ? n.lineTo(e._view.x, e._view.y) : n.bezierCurveTo(t._view.controlPointNextX, t._view.controlPointNextY, e._view.controlPointPreviousX, e._view.controlPointPreviousY, e._view.x, e._view.y)
                }, draw: function () {
                    function t(t) {
                        r._view.skip || s._view.skip ? t && n.lineTo(a._view.scaleZero.x, a._view.scaleZero.y) : n.bezierCurveTo(s._view.controlPointNextX, s._view.controlPointNextY, r._view.controlPointPreviousX, r._view.controlPointPreviousY, r._view.x, r._view.y)
                    }

                    var a = this, o = this._view, n = this._chart.ctx, r = this._children[0],
                        s = this._children[this._children.length - 1];
                    n.save(), this._children.length > 0 && o.fill && (n.beginPath(), e.each(this._children, function (t, i) {
                        var a = e.previousItem(this._children, i), r = e.nextItem(this._children, i);
                        0 === i ? (this._loop ? n.moveTo(o.scaleZero.x, o.scaleZero.y) : n.moveTo(t._view.x, o.scaleZero), t._view.skip ? this._loop || n.moveTo(r._view.x, this._view.scaleZero) : n.lineTo(t._view.x, t._view.y)) : this.lineToNextPoint(a, t, r, function (t, e, i) {
                            this._loop ? n.lineTo(this._view.scaleZero.x, this._view.scaleZero.y) : (n.lineTo(t._view.x, this._view.scaleZero), n.moveTo(i._view.x, this._view.scaleZero))
                        }, function (t, e) {
                            n.lineTo(e._view.x, e._view.y)
                        })
                    }, this), this._loop ? t(!0) : (n.lineTo(this._children[this._children.length - 1]._view.x, o.scaleZero), n.lineTo(this._children[0]._view.x, o.scaleZero)), n.fillStyle = o.backgroundColor || i.defaultColor, n.closePath(), n.fill());
                    var l = i.elements.line;
                    n.lineCap = o.borderCapStyle || l.borderCapStyle, n.setLineDash && n.setLineDash(o.borderDash || l.borderDash), n.lineDashOffset = o.borderDashOffset || l.borderDashOffset, n.lineJoin = o.borderJoinStyle || l.borderJoinStyle, n.lineWidth = o.borderWidth || l.borderWidth, n.strokeStyle = o.borderColor || i.defaultColor, n.beginPath(), e.each(this._children, function (t, i) {
                        var a = e.previousItem(this._children, i), o = e.nextItem(this._children, i);
                        0 === i ? n.moveTo(t._view.x, t._view.y) : this.lineToNextPoint(a, t, o, function (t, e, i) {
                            n.moveTo(i._view.x, i._view.y)
                        }, function (t, e) {
                            n.moveTo(e._view.x, e._view.y)
                        })
                    }, this), this._loop && this._children.length > 0 && t(), n.stroke(), n.restore()
                }
            })
        }
    }, {}], 36: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = t.helpers, i = t.defaults.global, a = i.defaultColor;
            i.elements.point = {
                radius: 3,
                pointStyle: "circle",
                backgroundColor: a,
                borderWidth: 1,
                borderColor: a,
                hitRadius: 1,
                hoverRadius: 4,
                hoverBorderWidth: 1
            }, t.elements.Point = t.Element.extend({
                inRange: function (t, e) {
                    var i = this._view;
                    return i ? Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2) : !1
                }, inLabelRange: function (t) {
                    var e = this._view;
                    return e ? Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2) : !1
                }, tooltipPosition: function () {
                    var t = this._view;
                    return {x: t.x, y: t.y, padding: t.radius + t.borderWidth}
                }, draw: function () {
                    var t, o, n, r, s, l, h = this._view, d = this._chart.ctx, c = h.pointStyle, u = h.radius, f = h.x,
                        g = h.y;
                    if (!h.skip) {
                        if ("object" == typeof c && (t = c.toString(), "[object HTMLImageElement]" === t || "[object HTMLCanvasElement]" === t)) return void d.drawImage(c, f - c.width / 2, g - c.height / 2);
                        if (!(isNaN(u) || 0 >= u)) {
                            switch (d.strokeStyle = h.borderColor || a, d.lineWidth = e.getValueOrDefault(h.borderWidth, i.elements.point.borderWidth), d.fillStyle = h.backgroundColor || a, c) {
                                default:
                                    d.beginPath(), d.arc(f, g, u, 0, 2 * Math.PI), d.closePath(), d.fill();
                                    break;
                                case"triangle":
                                    d.beginPath(), o = 3 * u / Math.sqrt(3), s = o * Math.sqrt(3) / 2, d.moveTo(f - o / 2, g + s / 3), d.lineTo(f + o / 2, g + s / 3), d.lineTo(f, g - 2 * s / 3), d.closePath(), d.fill();
                                    break;
                                case"rect":
                                    l = 1 / Math.SQRT2 * u, d.fillRect(f - l, g - l, 2 * l, 2 * l), d.strokeRect(f - l, g - l, 2 * l, 2 * l);
                                    break;
                                case"rectRot":
                                    d.translate(f, g), d.rotate(Math.PI / 4), l = 1 / Math.SQRT2 * u, d.fillRect(-l, -l, 2 * l, 2 * l), d.strokeRect(-l, -l, 2 * l, 2 * l), d.setTransform(1, 0, 0, 1, 0, 0);
                                    break;
                                case"cross":
                                    d.beginPath(), d.moveTo(f, g + u), d.lineTo(f, g - u), d.moveTo(f - u, g), d.lineTo(f + u, g), d.closePath();
                                    break;
                                case"crossRot":
                                    d.beginPath(), n = Math.cos(Math.PI / 4) * u, r = Math.sin(Math.PI / 4) * u, d.moveTo(f - n, g - r), d.lineTo(f + n, g + r), d.moveTo(f - n, g + r), d.lineTo(f + n, g - r), d.closePath();
                                    break;
                                case"star":
                                    d.beginPath(), d.moveTo(f, g + u), d.lineTo(f, g - u), d.moveTo(f - u, g), d.lineTo(f + u, g), n = Math.cos(Math.PI / 4) * u, r = Math.sin(Math.PI / 4) * u, d.moveTo(f - n, g - r), d.lineTo(f + n, g + r), d.moveTo(f - n, g + r), d.lineTo(f + n, g - r), d.closePath();
                                    break;
                                case"line":
                                    d.beginPath(), d.moveTo(f - u, g), d.lineTo(f + u, g), d.closePath();
                                    break;
                                case"dash":
                                    d.beginPath(), d.moveTo(f, g), d.lineTo(f + u, g), d.closePath()
                            }
                            d.stroke()
                        }
                    }
                }
            })
        }
    }, {}], 37: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = (t.helpers, t.defaults.global);
            e.elements.rectangle = {
                backgroundColor: e.defaultColor,
                borderWidth: 0,
                borderColor: e.defaultColor,
                borderSkipped: "bottom"
            }, t.elements.Rectangle = t.Element.extend({
                draw: function () {
                    function t(t) {
                        return l[(d + t) % 4]
                    }

                    var e = this._chart.ctx, i = this._view, a = i.width / 2, o = i.x - a, n = i.x + a,
                        r = i.base - (i.base - i.y), s = i.borderWidth / 2;
                    i.borderWidth && (o += s, n -= s, r += s), e.beginPath(), e.fillStyle = i.backgroundColor, e.strokeStyle = i.borderColor, e.lineWidth = i.borderWidth;
                    var l = [[o, i.base], [o, r], [n, r], [n, i.base]], h = ["bottom", "left", "top", "right"],
                        d = h.indexOf(i.borderSkipped, 0);
                    -1 === d && (d = 0), e.moveTo.apply(e, t(0));
                    for (var c = 1; 4 > c; c++) e.lineTo.apply(e, t(c));
                    e.fill(), i.borderWidth && e.stroke()
                }, height: function () {
                    var t = this._view;
                    return t.base - t.y
                }, inRange: function (t, e) {
                    var i = this._view;
                    return i ? i.y < i.base ? t >= i.x - i.width / 2 && t <= i.x + i.width / 2 && e >= i.y && e <= i.base : t >= i.x - i.width / 2 && t <= i.x + i.width / 2 && e >= i.base && e <= i.y : !1
                }, inLabelRange: function (t) {
                    var e = this._view;
                    return e ? t >= e.x - e.width / 2 && t <= e.x + e.width / 2 : !1
                }, tooltipPosition: function () {
                    var t = this._view;
                    return {x: t.x, y: t.y}
                }
            })
        }
    }, {}], 38: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = t.helpers, i = {position: "bottom"}, a = t.Scale.extend({
                determineDataLimits: function () {
                    this.minIndex = 0, this.maxIndex = this.chart.data.labels.length - 1;
                    var t;
                    void 0 !== this.options.ticks.min && (t = e.indexOf(this.chart.data.labels, this.options.ticks.min), this.minIndex = -1 !== t ? t : this.minIndex), void 0 !== this.options.ticks.max && (t = e.indexOf(this.chart.data.labels, this.options.ticks.max), this.maxIndex = -1 !== t ? t : this.maxIndex), this.min = this.chart.data.labels[this.minIndex], this.max = this.chart.data.labels[this.maxIndex]
                }, buildTicks: function (t) {
                    this.ticks = 0 === this.minIndex && this.maxIndex === this.chart.data.labels.length - 1 ? this.chart.data.labels : this.chart.data.labels.slice(this.minIndex, this.maxIndex + 1)
                }, getLabelForIndex: function (t, e) {
                    return this.ticks[t]
                }, getPixelForValue: function (t, e, i, a) {
                    var o = Math.max(this.maxIndex + 1 - this.minIndex - (this.options.gridLines.offsetGridLines ? 0 : 1), 1);
                    if (this.isHorizontal()) {
                        var n = this.width - (this.paddingLeft + this.paddingRight), r = n / o,
                            s = r * (e - this.minIndex) + this.paddingLeft;
                        return this.options.gridLines.offsetGridLines && a && (s += r / 2), this.left + Math.round(s)
                    }
                    var l = this.height - (this.paddingTop + this.paddingBottom), h = l / o,
                        d = h * (e - this.minIndex) + this.paddingTop;
                    return this.options.gridLines.offsetGridLines && a && (d += h / 2), this.top + Math.round(d)
                }, getPixelForTick: function (t, e) {
                    return this.getPixelForValue(this.ticks[t], t + this.minIndex, null, e)
                }, getValueForPixel: function (t) {
                    var e, i = Math.max(this.ticks.length - (this.options.gridLines.offsetGridLines ? 0 : 1), 1),
                        a = this.isHorizontal(),
                        o = a ? this.width - (this.paddingLeft + this.paddingRight) : this.height - (this.paddingTop + this.paddingBottom),
                        n = o / i;
                    return this.options.gridLines.offsetGridLines && (t -= n / 2), t -= a ? this.paddingLeft : this.paddingTop, e = 0 >= t ? 0 : Math.round(t / n)
                }
            });
            t.scaleService.registerScaleType("category", a, i)
        }
    }, {}], 39: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = t.helpers, i = {
                position: "left", ticks: {
                    callback: function (t, i, a) {
                        var o = a.length > 3 ? a[2] - a[1] : a[1] - a[0];
                        Math.abs(o) > 1 && t !== Math.floor(t) && (o = t - Math.floor(t));
                        var n = e.log10(Math.abs(o)), r = "";
                        if (0 !== t) {
                            var s = -1 * Math.floor(n);
                            s = Math.max(Math.min(s, 20), 0), r = t.toFixed(s)
                        } else r = "0";
                        return r
                    }
                }
            }, a = t.Scale.extend({
                determineDataLimits: function () {
                    function t(t) {
                        return l ? t.xAxisID === i.id : t.yAxisID === i.id
                    }

                    var i = this, a = i.options, o = a.ticks, n = i.chart, r = n.data, s = r.datasets,
                        l = i.isHorizontal();
                    if (i.min = null, i.max = null, a.stacked) {
                        var h = {}, d = !1, c = !1;
                        e.each(s, function (o, r) {
                            var s = n.getDatasetMeta(r);
                            void 0 === h[s.type] && (h[s.type] = {positiveValues: [], negativeValues: []});
                            var l = h[s.type].positiveValues, u = h[s.type].negativeValues;
                            n.isDatasetVisible(r) && t(s) && e.each(o.data, function (t, e) {
                                var o = +i.getRightValue(t);
                                isNaN(o) || s.data[e].hidden || (l[e] = l[e] || 0, u[e] = u[e] || 0, a.relativePoints ? l[e] = 100 : 0 > o ? (c = !0, u[e] += o) : (d = !0, l[e] += o))
                            })
                        }), e.each(h, function (t) {
                            var a = t.positiveValues.concat(t.negativeValues), o = e.min(a), n = e.max(a);
                            i.min = null === i.min ? o : Math.min(i.min, o), i.max = null === i.max ? n : Math.max(i.max, n)
                        })
                    } else e.each(s, function (a, o) {
                        var r = n.getDatasetMeta(o);
                        n.isDatasetVisible(o) && t(r) && e.each(a.data, function (t, e) {
                            var a = +i.getRightValue(t);
                            isNaN(a) || r.data[e].hidden || (null === i.min ? i.min = a : a < i.min && (i.min = a), null === i.max ? i.max = a : a > i.max && (i.max = a))
                        })
                    });
                    if (o.beginAtZero) {
                        var u = e.sign(i.min), f = e.sign(i.max);
                        0 > u && 0 > f ? i.max = 0 : u > 0 && f > 0 && (i.min = 0)
                    }
                    void 0 !== o.min ? i.min = o.min : void 0 !== o.suggestedMin && (i.min = Math.min(i.min, o.suggestedMin)), void 0 !== o.max ? i.max = o.max : void 0 !== o.suggestedMax && (i.max = Math.max(i.max, o.suggestedMax)), i.min === i.max && (i.max++, o.beginAtZero || i.min--)
                }, buildTicks: function () {
                    var i, a = this, o = a.options, n = o.ticks, r = e.getValueOrDefault, s = a.isHorizontal(),
                        l = a.ticks = [];
                    if (s) i = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(a.width / 50)); else {
                        var h = r(n.fontSize, t.defaults.global.defaultFontSize);
                        i = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(a.height / (2 * h)))
                    }
                    i = Math.max(2, i);
                    var d, c = n.fixedStepSize && n.fixedStepSize > 0 || n.stepSize && n.stepSize > 0;
                    if (c) d = r(n.fixedStepSize, n.stepSize); else {
                        var u = e.niceNum(a.max - a.min, !1);
                        d = e.niceNum(u / (i - 1), !0)
                    }
                    var f = Math.floor(a.min / d) * d, g = Math.ceil(a.max / d) * d, p = (g - f) / d;
                    p = e.almostEquals(p, Math.round(p), d / 1e3) ? Math.round(p) : Math.ceil(p), l.push(void 0 !== n.min ? n.min : f);
                    for (var m = 1; p > m; ++m) l.push(f + m * d);
                    l.push(void 0 !== n.max ? n.max : g),
                    s || l.reverse(), a.max = e.max(l), a.min = e.min(l), n.reverse ? (l.reverse(), a.start = a.max, a.end = a.min) : (a.start = a.min, a.end = a.max)
                }, getLabelForIndex: function (t, e) {
                    return +this.getRightValue(this.chart.data.datasets[e].data[t])
                }, convertTicksToLabels: function () {
                    var e = this;
                    e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e)
                }, getPixelForValue: function (t, e, i, a) {
                    var o, n, r = this, s = r.paddingLeft, l = r.paddingBottom, h = r.start, d = +r.getRightValue(t),
                        c = r.end - h;
                    return r.isHorizontal() ? (n = r.width - (s + r.paddingRight), o = r.left + n / c * (d - h), Math.round(o + s)) : (n = r.height - (r.paddingTop + l), o = r.bottom - l - n / c * (d - h), Math.round(o))
                }, getValueForPixel: function (t) {
                    var e = this, i = e.isHorizontal(), a = e.paddingLeft, o = e.paddingBottom,
                        n = i ? e.width - (a + e.paddingRight) : e.height - (e.paddingTop + o),
                        r = (i ? t - e.left - a : e.bottom - o - t) / n;
                    return e.start + (e.end - e.start) * r
                }, getPixelForTick: function (t, e) {
                    return this.getPixelForValue(this.ticksAsNumbers[t], null, null, e)
                }
            });
            t.scaleService.registerScaleType("linear", a, i)
        }
    }, {}], 40: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = t.helpers, i = {
                position: "left", ticks: {
                    callback: function (t, i, a) {
                        var o = t / Math.pow(10, Math.floor(e.log10(t)));
                        return 1 === o || 2 === o || 5 === o || 0 === i || i === a.length - 1 ? t.toExponential() : ""
                    }
                }
            }, a = t.Scale.extend({
                determineDataLimits: function () {
                    function t(t) {
                        return h ? t.xAxisID === i.id : t.yAxisID === i.id
                    }

                    var i = this, a = i.options, o = a.ticks, n = i.chart, r = n.data, s = r.datasets,
                        l = e.getValueOrDefault, h = i.isHorizontal();
                    if (i.min = null, i.max = null, a.stacked) {
                        var d = {};
                        e.each(s, function (o, r) {
                            var s = n.getDatasetMeta(r);
                            n.isDatasetVisible(r) && t(s) && (void 0 === d[s.type] && (d[s.type] = []), e.each(o.data, function (t, e) {
                                var o = d[s.type], n = +i.getRightValue(t);
                                isNaN(n) || s.data[e].hidden || (o[e] = o[e] || 0, a.relativePoints ? o[e] = 100 : o[e] += n)
                            }))
                        }), e.each(d, function (t) {
                            var a = e.min(t), o = e.max(t);
                            i.min = null === i.min ? a : Math.min(i.min, a), i.max = null === i.max ? o : Math.max(i.max, o)
                        })
                    } else e.each(s, function (a, o) {
                        var r = n.getDatasetMeta(o);
                        n.isDatasetVisible(o) && t(r) && e.each(a.data, function (t, e) {
                            var a = +i.getRightValue(t);
                            isNaN(a) || r.data[e].hidden || (null === i.min ? i.min = a : a < i.min && (i.min = a), null === i.max ? i.max = a : a > i.max && (i.max = a))
                        })
                    });
                    i.min = l(o.min, i.min), i.max = l(o.max, i.max), i.min === i.max && (0 !== i.min && null !== i.min ? (i.min = Math.pow(10, Math.floor(e.log10(i.min)) - 1), i.max = Math.pow(10, Math.floor(e.log10(i.max)) + 1)) : (i.min = 1, i.max = 10))
                }, buildTicks: function () {
                    for (var t = this, i = t.options, a = i.ticks, o = e.getValueOrDefault, n = t.ticks = [], r = o(a.min, Math.pow(10, Math.floor(e.log10(t.min)))); r < t.max;) {
                        n.push(r);
                        var s = Math.floor(e.log10(r)), l = Math.floor(r / Math.pow(10, s)) + 1;
                        10 === l && (l = 1, ++s), r = l * Math.pow(10, s)
                    }
                    var h = o(a.max, r);
                    n.push(h), t.isHorizontal() || n.reverse(), t.max = e.max(n), t.min = e.min(n), a.reverse ? (n.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                }, convertTicksToLabels: function () {
                    this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this)
                }, getLabelForIndex: function (t, e) {
                    return +this.getRightValue(this.chart.data.datasets[e].data[t])
                }, getPixelForTick: function (t, e) {
                    return this.getPixelForValue(this.tickValues[t], null, null, e)
                }, getPixelForValue: function (t, i, a, o) {
                    var n, r, s = this, l = s.start, h = +s.getRightValue(t), d = e.log10(s.end) - e.log10(l),
                        c = s.paddingTop, u = s.paddingBottom, f = s.paddingLeft;
                    return s.isHorizontal() ? 0 === h ? r = s.left + f : (n = s.width - (f + s.paddingRight), r = s.left + n / d * (e.log10(h) - e.log10(l)), r += f) : 0 === h ? r = s.top + c : (n = s.height - (c + u), r = s.bottom - u - n / d * (e.log10(h) - e.log10(l))), r
                }, getValueForPixel: function (t) {
                    var i, a, o = this, n = e.log10(o.end) - e.log10(o.start);
                    return o.isHorizontal() ? (a = o.width - (o.paddingLeft + o.paddingRight), i = o.start * Math.pow(10, (t - o.left - o.paddingLeft) * n / a)) : (a = o.height - (o.paddingTop + o.paddingBottom), i = Math.pow(10, (o.bottom - o.paddingBottom - t) * n / a) / o.start), i
                }
            });
            t.scaleService.registerScaleType("logarithmic", a, i)
        }
    }, {}], 41: [function (t, e, i) {
        "use strict";
        e.exports = function (t) {
            var e = t.helpers, i = t.defaults.global, a = {
                display: !0,
                animate: !0,
                lineArc: !1,
                position: "chartArea",
                angleLines: {display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1},
                ticks: {
                    showLabelBackdrop: !0,
                    backdropColor: "rgba(255,255,255,0.75)",
                    backdropPaddingY: 2,
                    backdropPaddingX: 2
                },
                pointLabels: {
                    fontSize: 10, callback: function (t) {
                        return t
                    }
                }
            }, o = t.Scale.extend({
                getValueCount: function () {
                    return this.chart.data.labels.length
                }, setDimensions: function () {
                    var t = this.options;
                    this.width = this.maxWidth, this.height = this.maxHeight, this.xCenter = Math.round(this.width / 2), this.yCenter = Math.round(this.height / 2);
                    var a = e.min([this.height, this.width]),
                        o = e.getValueOrDefault(t.ticks.fontSize, i.defaultFontSize);
                    this.drawingArea = t.display ? a / 2 - (o / 2 + t.ticks.backdropPaddingY) : a / 2
                }, determineDataLimits: function () {
                    if (this.min = null, this.max = null, e.each(this.chart.data.datasets, function (t, i) {
                        if (this.chart.isDatasetVisible(i)) {
                            var a = this.chart.getDatasetMeta(i);
                            e.each(t.data, function (t, e) {
                                var i = +this.getRightValue(t);
                                isNaN(i) || a.data[e].hidden || (null === this.min ? this.min = i : i < this.min && (this.min = i), null === this.max ? this.max = i : i > this.max && (this.max = i))
                            }, this)
                        }
                    }, this), this.options.ticks.beginAtZero) {
                        var t = e.sign(this.min), i = e.sign(this.max);
                        0 > t && 0 > i ? this.max = 0 : t > 0 && i > 0 && (this.min = 0)
                    }
                    void 0 !== this.options.ticks.min ? this.min = this.options.ticks.min : void 0 !== this.options.ticks.suggestedMin && (this.min = Math.min(this.min, this.options.ticks.suggestedMin)), void 0 !== this.options.ticks.max ? this.max = this.options.ticks.max : void 0 !== this.options.ticks.suggestedMax && (this.max = Math.max(this.max, this.options.ticks.suggestedMax)), this.min === this.max && (this.min--, this.max++)
                }, buildTicks: function () {
                    this.ticks = [];
                    var t = e.getValueOrDefault(this.options.ticks.fontSize, i.defaultFontSize),
                        a = Math.min(this.options.ticks.maxTicksLimit ? this.options.ticks.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * t)));
                    a = Math.max(2, a);
                    var o = e.niceNum(this.max - this.min, !1), n = e.niceNum(o / (a - 1), !0),
                        r = Math.floor(this.min / n) * n, s = Math.ceil(this.max / n) * n, l = Math.ceil((s - r) / n);
                    this.ticks.push(void 0 !== this.options.ticks.min ? this.options.ticks.min : r);
                    for (var h = 1; l > h; ++h) this.ticks.push(r + h * n);
                    this.ticks.push(void 0 !== this.options.ticks.max ? this.options.ticks.max : s), this.max = e.max(this.ticks), this.min = e.min(this.ticks), this.options.ticks.reverse ? (this.ticks.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), this.zeroLineIndex = this.ticks.indexOf(0)
                }, convertTicksToLabels: function () {
                    t.Scale.prototype.convertTicksToLabels.call(this), this.pointLabels = this.chart.data.labels.map(this.options.pointLabels.callback, this)
                }, getLabelForIndex: function (t, e) {
                    return +this.getRightValue(this.chart.data.datasets[e].data[t])
                }, fit: function () {
                    var t, a, o, n, r, s, l, h, d, c, u, f, g = this.options.pointLabels,
                        p = e.getValueOrDefault(g.fontSize, i.defaultFontSize),
                        m = e.getValueOrDefault(g.fontStyle, i.defaultFontStyle),
                        b = e.getValueOrDefault(g.fontFamily, i.defaultFontFamily), v = e.fontString(p, m, b),
                        x = e.min([this.height / 2 - p - 5, this.width / 2]), y = this.width, k = 0;
                    for (this.ctx.font = v, a = 0; a < this.getValueCount(); a++) t = this.getPointPosition(a, x), o = this.ctx.measureText(this.pointLabels[a] ? this.pointLabels[a] : "").width + 5, 0 === a || a === this.getValueCount() / 2 ? (n = o / 2, t.x + n > y && (y = t.x + n, r = a), t.x - n < k && (k = t.x - n, l = a)) : a < this.getValueCount() / 2 ? t.x + o > y && (y = t.x + o, r = a) : a > this.getValueCount() / 2 && t.x - o < k && (k = t.x - o, l = a);
                    d = k, c = Math.ceil(y - this.width), s = this.getIndexAngle(r), h = this.getIndexAngle(l), u = c / Math.sin(s + Math.PI / 2), f = d / Math.sin(h + Math.PI / 2), u = e.isNumber(u) ? u : 0, f = e.isNumber(f) ? f : 0, this.drawingArea = Math.round(x - (f + u) / 2), this.setCenterPoint(f, u)
                }, setCenterPoint: function (t, e) {
                    var i = this.width - e - this.drawingArea, a = t + this.drawingArea;
                    this.xCenter = Math.round((a + i) / 2 + this.left), this.yCenter = Math.round(this.height / 2 + this.top)
                }, getIndexAngle: function (t) {
                    var e = 2 * Math.PI / this.getValueCount();
                    return t * e - Math.PI / 2
                }, getDistanceFromCenterForValue: function (t) {
                    if (null === t) return 0;
                    var e = this.drawingArea / (this.max - this.min);
                    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e
                }, getPointPosition: function (t, e) {
                    var i = this.getIndexAngle(t);
                    return {
                        x: Math.round(Math.cos(i) * e) + this.xCenter,
                        y: Math.round(Math.sin(i) * e) + this.yCenter
                    }
                }, getPointPositionForValue: function (t, e) {
                    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                }, getBasePosition: function () {
                    var t = this, e = t.min, i = t.max;
                    return t.getPointPositionForValue(0, t.beginAtZero ? 0 : 0 > e && 0 > i ? i : e > 0 && i > 0 ? e : 0)
                }, draw: function () {
                    if (this.options.display) {
                        var t = this.ctx;
                        if (e.each(this.ticks, function (a, o) {
                            if (o > 0 || this.options.reverse) {
                                var n = this.getDistanceFromCenterForValue(this.ticks[o]), r = this.yCenter - n;
                                if (this.options.gridLines.display) if (t.strokeStyle = this.options.gridLines.color, t.lineWidth = this.options.gridLines.lineWidth, this.options.lineArc) t.beginPath(), t.arc(this.xCenter, this.yCenter, n, 0, 2 * Math.PI), t.closePath(), t.stroke(); else {
                                    t.beginPath();
                                    for (var s = 0; s < this.getValueCount(); s++) {
                                        var l = this.getPointPosition(s, this.getDistanceFromCenterForValue(this.ticks[o]));
                                        0 === s ? t.moveTo(l.x, l.y) : t.lineTo(l.x, l.y)
                                    }
                                    t.closePath(), t.stroke()
                                }
                                if (this.options.ticks.display) {
                                    var h = e.getValueOrDefault(this.options.ticks.fontColor, i.defaultFontColor),
                                        d = e.getValueOrDefault(this.options.ticks.fontSize, i.defaultFontSize),
                                        c = e.getValueOrDefault(this.options.ticks.fontStyle, i.defaultFontStyle),
                                        u = e.getValueOrDefault(this.options.ticks.fontFamily, i.defaultFontFamily),
                                        f = e.fontString(d, c, u);
                                    if (t.font = f, this.options.ticks.showLabelBackdrop) {
                                        var g = t.measureText(a).width;
                                        t.fillStyle = this.options.ticks.backdropColor, t.fillRect(this.xCenter - g / 2 - this.options.ticks.backdropPaddingX, r - d / 2 - this.options.ticks.backdropPaddingY, g + 2 * this.options.ticks.backdropPaddingX, d + 2 * this.options.ticks.backdropPaddingY)
                                    }
                                    t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = h, t.fillText(a, this.xCenter, r)
                                }
                            }
                        }, this), !this.options.lineArc) {
                            t.lineWidth = this.options.angleLines.lineWidth, t.strokeStyle = this.options.angleLines.color;
                            for (var a = this.getValueCount() - 1; a >= 0; a--) {
                                if (this.options.angleLines.display) {
                                    var o = this.getPointPosition(a, this.getDistanceFromCenterForValue(this.options.reverse ? this.min : this.max));
                                    t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(o.x, o.y), t.stroke(), t.closePath()
                                }
                                var n = this.getPointPosition(a, this.getDistanceFromCenterForValue(this.options.reverse ? this.min : this.max) + 5),
                                    r = e.getValueOrDefault(this.options.pointLabels.fontColor, i.defaultFontColor),
                                    s = e.getValueOrDefault(this.options.pointLabels.fontSize, i.defaultFontSize),
                                    l = e.getValueOrDefault(this.options.pointLabels.fontStyle, i.defaultFontStyle),
                                    h = e.getValueOrDefault(this.options.pointLabels.fontFamily, i.defaultFontFamily),
                                    d = e.fontString(s, l, h);
                                t.font = d, t.fillStyle = r;
                                var c = this.pointLabels.length, u = this.pointLabels.length / 2, f = u / 2,
                                    g = f > a || a > c - f, p = a === f || a === c - f;
                                0 === a ? t.textAlign = "center" : a === u ? t.textAlign = "center" : u > a ? t.textAlign = "left" : t.textAlign = "right", p ? t.textBaseline = "middle" : g ? t.textBaseline = "bottom" : t.textBaseline = "top", t.fillText(this.pointLabels[a] ? this.pointLabels[a] : "", n.x, n.y)
                            }
                        }
                    }
                }
            });
            t.scaleService.registerScaleType("radialLinear", o, a)
        }
    }, {}], 42: [function (t, e, i) {
        "use strict";
        var a = t("moment");
        a = "function" == typeof a ? a : window.moment, e.exports = function (t) {
            var e = t.helpers, i = {
                units: [{name: "millisecond", steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]}, {
                    name: "second",
                    steps: [1, 2, 5, 10, 30]
                }, {name: "minute", steps: [1, 2, 5, 10, 30]}, {name: "hour", steps: [1, 2, 3, 6, 12]}, {
                    name: "day",
                    steps: [1, 2, 5]
                }, {name: "week", maxStep: 4}, {name: "month", maxStep: 3}, {
                    name: "quarter",
                    maxStep: 4
                }, {name: "year", maxStep: !1}]
            }, o = {
                position: "bottom",
                time: {
                    parser: !1,
                    format: !1,
                    unit: !1,
                    round: !1,
                    displayFormat: !1,
                    isoWeekday: !1,
                    displayFormats: {
                        millisecond: "h:mm:ss.SSS a",
                        second: "h:mm:ss a",
                        minute: "h:mm:ss a",
                        hour: "MMM D, hA",
                        day: "ll",
                        week: "ll",
                        month: "MMM YYYY",
                        quarter: "[Q]Q - YYYY",
                        year: "YYYY"
                    }
                },
                ticks: {autoSkip: !1}
            }, n = t.Scale.extend({
                initialize: function () {
                    if (!a) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                    t.Scale.prototype.initialize.call(this)
                }, getLabelMoment: function (t, e) {
                    return this.labelMoments[t][e]
                }, getMomentStartOf: function (t) {
                    return "week" === this.options.time.unit && this.options.time.isoWeekday !== !1 ? t.clone().startOf("isoWeek").isoWeekday(this.options.time.isoWeekday) : t.clone().startOf(this.tickUnit)
                }, determineDataLimits: function () {
                    this.labelMoments = [];
                    var t = [];
                    this.chart.data.labels && this.chart.data.labels.length > 0 ? (e.each(this.chart.data.labels, function (e, i) {
                        var a = this.parseTime(e);
                        a.isValid() && (this.options.time.round && a.startOf(this.options.time.round), t.push(a))
                    }, this), this.firstTick = a.min.call(this, t), this.lastTick = a.max.call(this, t)) : (this.firstTick = null, this.lastTick = null), e.each(this.chart.data.datasets, function (i, o) {
                        var n = [], r = this.chart.isDatasetVisible(o);
                        "object" == typeof i.data[0] && null !== i.data[0] ? e.each(i.data, function (t, e) {
                            var i = this.parseTime(this.getRightValue(t));
                            i.isValid() && (this.options.time.round && i.startOf(this.options.time.round), n.push(i), r && (this.firstTick = null !== this.firstTick ? a.min(this.firstTick, i) : i, this.lastTick = null !== this.lastTick ? a.max(this.lastTick, i) : i))
                        }, this) : n = t, this.labelMoments.push(n)
                    }, this), this.options.time.min && (this.firstTick = this.parseTime(this.options.time.min)), this.options.time.max && (this.lastTick = this.parseTime(this.options.time.max)), this.firstTick = (this.firstTick || a()).clone(), this.lastTick = (this.lastTick || a()).clone()
                }, buildTicks: function (a) {
                    this.ctx.save();
                    var o = e.getValueOrDefault(this.options.ticks.fontSize, t.defaults.global.defaultFontSize),
                        n = e.getValueOrDefault(this.options.ticks.fontStyle, t.defaults.global.defaultFontStyle),
                        r = e.getValueOrDefault(this.options.ticks.fontFamily, t.defaults.global.defaultFontFamily),
                        s = e.fontString(o, n, r);
                    if (this.ctx.font = s, this.ticks = [], this.unitScale = 1, this.scaleSizeInUnits = 0, this.options.time.unit) this.tickUnit = this.options.time.unit || "day", this.displayFormat = this.options.time.displayFormats[this.tickUnit], this.scaleSizeInUnits = this.lastTick.diff(this.firstTick, this.tickUnit, !0), this.unitScale = e.getValueOrDefault(this.options.time.unitStepSize, 1); else {
                        var l = this.isHorizontal() ? this.width - (this.paddingLeft + this.paddingRight) : this.height - (this.paddingTop + this.paddingBottom),
                            h = this.tickFormatFunction(this.firstTick, 0, []), d = this.ctx.measureText(h).width,
                            c = Math.cos(e.toRadians(this.options.ticks.maxRotation)),
                            u = Math.sin(e.toRadians(this.options.ticks.maxRotation));
                        d = d * c + o * u;
                        var f = l / d;
                        this.tickUnit = "millisecond", this.scaleSizeInUnits = this.lastTick.diff(this.firstTick, this.tickUnit, !0), this.displayFormat = this.options.time.displayFormats[this.tickUnit];
                        for (var g = 0, p = i.units[g]; g < i.units.length;) {
                            if (this.unitScale = 1, e.isArray(p.steps) && Math.ceil(this.scaleSizeInUnits / f) < e.max(p.steps)) {
                                for (var m = 0; m < p.steps.length; ++m) if (p.steps[m] >= Math.ceil(this.scaleSizeInUnits / f)) {
                                    this.unitScale = e.getValueOrDefault(this.options.time.unitStepSize, p.steps[m]);
                                    break
                                }
                                break
                            }
                            if (p.maxStep === !1 || Math.ceil(this.scaleSizeInUnits / f) < p.maxStep) {
                                this.unitScale = e.getValueOrDefault(this.options.time.unitStepSize, Math.ceil(this.scaleSizeInUnits / f));
                                break
                            }
                            ++g, p = i.units[g], this.tickUnit = p.name;
                            var b = this.firstTick.diff(this.getMomentStartOf(this.firstTick), this.tickUnit, !0),
                                v = this.getMomentStartOf(this.lastTick.clone().add(1, this.tickUnit)).diff(this.lastTick, this.tickUnit, !0);
                            this.scaleSizeInUnits = this.lastTick.diff(this.firstTick, this.tickUnit, !0) + b + v, this.displayFormat = this.options.time.displayFormats[p.name]
                        }
                    }
                    var x;
                    if (this.options.time.min ? x = this.getMomentStartOf(this.firstTick) : (this.firstTick = this.getMomentStartOf(this.firstTick), x = this.firstTick), !this.options.time.max) {
                        var y = this.getMomentStartOf(this.lastTick);
                        0 !== y.diff(this.lastTick, this.tickUnit, !0) && (this.lastTick = this.getMomentStartOf(this.lastTick.add(1, this.tickUnit)))
                    }
                    this.smallestLabelSeparation = this.width, e.each(this.chart.data.datasets, function (t, e) {
                        for (var i = 1; i < this.labelMoments[e].length; i++) this.smallestLabelSeparation = Math.min(this.smallestLabelSeparation, this.labelMoments[e][i].diff(this.labelMoments[e][i - 1], this.tickUnit, !0))
                    }, this), this.options.time.displayFormat && (this.displayFormat = this.options.time.displayFormat), this.ticks.push(this.firstTick.clone());
                    for (var k = 1; k <= this.scaleSizeInUnits; ++k) {
                        var S = x.clone().add(k, this.tickUnit);
                        if (this.options.time.max && S.diff(this.lastTick, this.tickUnit, !0) >= 0) break;
                        k % this.unitScale === 0 && this.ticks.push(S)
                    }
                    var C = this.ticks[this.ticks.length - 1].diff(this.lastTick, this.tickUnit);
                    (0 !== C || 0 === this.scaleSizeInUnits) && (this.options.time.max ? (this.ticks.push(this.lastTick.clone()), this.scaleSizeInUnits = this.lastTick.diff(this.ticks[0], this.tickUnit, !0)) : (this.ticks.push(this.lastTick.clone()), this.scaleSizeInUnits = this.lastTick.diff(this.firstTick, this.tickUnit, !0))), this.ctx.restore()
                }, getLabelForIndex: function (t, e) {
                    var i = this.chart.data.labels && t < this.chart.data.labels.length ? this.chart.data.labels[t] : "";
                    return "object" == typeof this.chart.data.datasets[e].data[0] && (i = this.getRightValue(this.chart.data.datasets[e].data[t])), this.options.time.tooltipFormat && (i = this.parseTime(i).format(this.options.time.tooltipFormat)), i
                }, tickFormatFunction: function (t, i, a) {
                    var o = t.format(this.displayFormat), n = this.options.ticks,
                        r = e.getValueOrDefault(n.callback, n.userCallback);
                    return r ? r(o, i, a) : o
                }, convertTicksToLabels: function () {
                    this.tickMoments = this.ticks, this.ticks = this.ticks.map(this.tickFormatFunction, this)
                }, getPixelForValue: function (t, e, i, a) {
                    var o = t && t.isValid && t.isValid() ? t : this.getLabelMoment(i, e);
                    if (o) {
                        var n = o.diff(this.firstTick, this.tickUnit, !0), r = n / this.scaleSizeInUnits;
                        if (this.isHorizontal()) {
                            var s = this.width - (this.paddingLeft + this.paddingRight),
                                l = (s / Math.max(this.ticks.length - 1, 1), s * r + this.paddingLeft);
                            return this.left + Math.round(l)
                        }
                        var h = this.height - (this.paddingTop + this.paddingBottom),
                            d = (h / Math.max(this.ticks.length - 1, 1), h * r + this.paddingTop);
                        return this.top + Math.round(d)
                    }
                }, getPixelForTick: function (t, e) {
                    return this.getPixelForValue(this.tickMoments[t], null, null, e)
                }, getValueForPixel: function (t) {
                    var e = this.isHorizontal() ? this.width - (this.paddingLeft + this.paddingRight) : this.height - (this.paddingTop + this.paddingBottom),
                        i = (t - (this.isHorizontal() ? this.left + this.paddingLeft : this.top + this.paddingTop)) / e;
                    return i *= this.scaleSizeInUnits, this.firstTick.clone().add(a.duration(i, this.tickUnit).asSeconds(), "seconds")
                }, parseTime: function (t) {
                    return "string" == typeof this.options.time.parser ? a(t, this.options.time.parser) : "function" == typeof this.options.time.parser ? this.options.time.parser(t) : "function" == typeof t.getMonth || "number" == typeof t ? a(t) : t.isValid && t.isValid() ? t : "string" != typeof this.options.time.format && this.options.time.format.call ? (console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"), this.options.time.format(t)) : a(t, this.options.time.format)
                }
            });
            t.scaleService.registerScaleType("time", n, o)
        }
    }, {moment: 1}]
}, {}, [7]);

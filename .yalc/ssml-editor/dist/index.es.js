import { defineComponent as B, inject as ne, openBlock as M, createElementBlock as V, normalizeClass as D, withModifiers as Ce, createElementVNode as q, toDisplayString as Ee, ref as _, watch as U, getCurrentScope as rl, onScopeDispose as ga, readonly as ol, unref as p, getCurrentInstance as Pe, onMounted as Te, nextTick as me, warn as Uu, isVNode as ei, computed as b, watchEffect as al, onBeforeUnmount as Ve, isRef as il, shallowRef as ut, onBeforeMount as Gu, provide as Be, mergeProps as St, renderSlot as Z, toRef as xt, onUnmounted as Yu, reactive as Lt, toRefs as yr, onUpdated as ya, createVNode as N, Fragment as He, useSlots as ba, withCtx as H, createBlock as re, resolveDynamicComponent as Ut, normalizeStyle as Ie, createTextVNode as En, createCommentVNode as ee, TransitionGroup as Zu, useAttrs as Xu, withDirectives as ct, vShow as en, Transition as fn, cloneVNode as Ju, Text as Qu, Comment as ec, Teleport as sl, onDeactivated as tc, toHandlers as nc, h as ke, createSlots as ll, resolveComponent as Wt, toRaw as Qr, triggerRef as Jn, resolveDirective as rc, renderList as Nn, withKeys as ht, vModelText as oc, pushScopeId as ac, popScopeId as ic, customRef as sc } from "vue";
import { SlateEditor as xe, SlateElement as lc, DomEditor as Zo, SlateText as uc, SlateTransforms as we, SlatePath as cc, SlateRange as Et } from "@wangeditor/editor";
const fc = { class: "button" }, dc = { class: "content" }, pc = /* @__PURE__ */ B({
  __name: "bar-button",
  props: {
    text: {},
    icon: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, r = ne("editor"), o = () => {
      !n.disabled && r && t("click", r == null ? void 0 : r.value);
    };
    return (a, i) => (M(), V("div", {
      class: D(["btn bar-button", { disabled: a.disabled }]),
      onClick: o,
      onMousedown: i[0] || (i[0] = Ce(() => {
      }, ["prevent"]))
    }, [
      q("div", fc, [
        q("span", {
          class: D(["font-size-30 iconfont-moyin", [`moyin-icon_${a.icon}`]])
        }, null, 2)
      ]),
      q("div", dc, Ee(a.text), 1)
    ], 34));
  }
});
const wa = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, vt = /* @__PURE__ */ wa(pc, [["__scopeId", "data-v-94376aa5"]]), zr = function(e, t, ...n) {
  let r;
  t.includes("mouse") || t.includes("click") ? r = "MouseEvents" : t.includes("key") ? r = "KeyboardEvent" : r = "HTMLEvents";
  const o = document.createEvent(r);
  return o.initEvent(t, ...n), e.dispatchEvent(o), e;
}, Kt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e == null ? void 0 : e(o);
  if (n === !1 || !a)
    return t == null ? void 0 : t(o);
};
var ti;
const $e = typeof window < "u", vc = (e) => typeof e == "string", eo = () => {
}, ul = $e && ((ti = window == null ? void 0 : window.navigator) == null ? void 0 : ti.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function lr(e) {
  return typeof e == "function" ? e() : p(e);
}
function mc(e, t) {
  function n(...r) {
    return new Promise((o, a) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(o).catch(a);
    });
  }
  return n;
}
function hc(e, t = {}) {
  let n, r, o = eo;
  const a = (s) => {
    clearTimeout(s), o(), o = eo;
  };
  return (s) => {
    const l = lr(e), u = lr(t.maxWait);
    return n && a(n), l <= 0 || u !== void 0 && u <= 0 ? (r && (a(r), r = null), Promise.resolve(s())) : new Promise((c, f) => {
      o = t.rejectOnCancel ? f : c, u && !r && (r = setTimeout(() => {
        n && a(n), r = null, c(s());
      }, u)), n = setTimeout(() => {
        r && a(r), r = null, c(s());
      }, l);
    });
  };
}
function gc(e) {
  return e;
}
function co(e) {
  return rl() ? (ga(e), !0) : !1;
}
function yc(e, t = 200, n = {}) {
  return mc(hc(t, n), e);
}
function bc(e, t = 200, n = {}) {
  const r = _(e.value), o = yc(() => {
    r.value = e.value;
  }, t, n);
  return U(e, () => o()), r;
}
function wc(e, t = !0) {
  Pe() ? Te(e) : t ? e() : me(e);
}
function to(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, o = _(!1);
  let a = null;
  function i() {
    a && (clearTimeout(a), a = null);
  }
  function s() {
    o.value = !1, i();
  }
  function l(...u) {
    i(), o.value = !0, a = setTimeout(() => {
      o.value = !1, a = null, e(...u);
    }, lr(t));
  }
  return r && (o.value = !0, $e && l()), co(s), {
    isPending: ol(o),
    start: l,
    stop: s
  };
}
function un(e) {
  var t;
  const n = lr(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Sa = $e ? window : void 0;
function Tn(...e) {
  let t, n, r, o;
  if (vc(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Sa) : [t, n, r, o] = e, !t)
    return eo;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], i = () => {
    a.forEach((c) => c()), a.length = 0;
  }, s = (c, f, v, y) => (c.addEventListener(f, v, y), () => c.removeEventListener(f, v, y)), l = U(() => [un(t), lr(o)], ([c, f]) => {
    i(), c && a.push(...n.flatMap((v) => r.map((y) => s(c, v, y, f))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), i();
  };
  return co(u), u;
}
let ni = !1;
function Sc(e, t, n = {}) {
  const { window: r = Sa, ignore: o = [], capture: a = !0, detectIframe: i = !1 } = n;
  if (!r)
    return;
  ul && !ni && (ni = !0, Array.from(r.document.body.children).forEach((v) => v.addEventListener("click", eo)));
  let s = !0;
  const l = (v) => o.some((y) => {
    if (typeof y == "string")
      return Array.from(r.document.querySelectorAll(y)).some((g) => g === v.target || v.composedPath().includes(g));
    {
      const g = un(y);
      return g && (v.target === g || v.composedPath().includes(g));
    }
  }), c = [
    Tn(r, "click", (v) => {
      const y = un(e);
      if (!(!y || y === v.target || v.composedPath().includes(y))) {
        if (v.detail === 0 && (s = !l(v)), !s) {
          s = !0;
          return;
        }
        t(v);
      }
    }, { passive: !0, capture: a }),
    Tn(r, "pointerdown", (v) => {
      const y = un(e);
      y && (s = !v.composedPath().includes(y) && !l(v));
    }, { passive: !0 }),
    i && Tn(r, "blur", (v) => {
      var y;
      const g = un(e);
      ((y = r.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !(g != null && g.contains(r.document.activeElement)) && t(v);
    })
  ].filter(Boolean);
  return () => c.forEach((v) => v());
}
function Ec(e, t = !1) {
  const n = _(), r = () => n.value = !!e();
  return r(), wc(r, t), n;
}
const ri = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, oi = "__vueuse_ssr_handlers__";
ri[oi] = ri[oi] || {};
var ai = Object.getOwnPropertySymbols, Tc = Object.prototype.hasOwnProperty, Oc = Object.prototype.propertyIsEnumerable, _c = (e, t) => {
  var n = {};
  for (var r in e)
    Tc.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ai)
    for (var r of ai(e))
      t.indexOf(r) < 0 && Oc.call(e, r) && (n[r] = e[r]);
  return n;
};
function Kn(e, t, n = {}) {
  const r = n, { window: o = Sa } = r, a = _c(r, ["window"]);
  let i;
  const s = Ec(() => o && "ResizeObserver" in o), l = () => {
    i && (i.disconnect(), i = void 0);
  }, u = U(() => un(e), (f) => {
    l(), s.value && o && f && (i = new ResizeObserver(t), i.observe(f, a));
  }, { immediate: !0, flush: "post" }), c = () => {
    l(), u();
  };
  return co(c), {
    isSupported: s,
    stop: c
  };
}
var ii;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ii || (ii = {}));
var Cc = Object.defineProperty, si = Object.getOwnPropertySymbols, $c = Object.prototype.hasOwnProperty, xc = Object.prototype.propertyIsEnumerable, li = (e, t, n) => t in e ? Cc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ic = (e, t) => {
  for (var n in t || (t = {}))
    $c.call(t, n) && li(e, n, t[n]);
  if (si)
    for (var n of si(t))
      xc.call(t, n) && li(e, n, t[n]);
  return e;
};
const Ac = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Ic({
  linear: gc
}, Ac);
const Mc = () => $e && /firefox/i.test(window.navigator.userAgent);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Gt = () => {
}, cl = Object.assign, Pc = Object.prototype.hasOwnProperty, ui = (e, t) => Pc.call(e, t), Rn = Array.isArray, We = (e) => typeof e == "function", Le = (e) => typeof e == "string", kc = (e) => typeof e == "symbol", Zt = (e) => e !== null && typeof e == "object", Lc = Object.prototype.toString, Fc = (e) => Lc.call(e), Mo = (e) => Fc(e).slice(8, -1), Nc = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Rc = /-(\w)/g, Dc = Nc((e) => e.replace(Rc, (t, n) => n ? n.toUpperCase() : ""));
var Bc = typeof global == "object" && global && global.Object === Object && global;
const fl = Bc;
var jc = typeof self == "object" && self && self.Object === Object && self, zc = fl || jc || Function("return this")();
const Tt = zc;
var Hc = Tt.Symbol;
const Mt = Hc;
var dl = Object.prototype, Vc = dl.hasOwnProperty, qc = dl.toString, Qn = Mt ? Mt.toStringTag : void 0;
function Wc(e) {
  var t = Vc.call(e, Qn), n = e[Qn];
  try {
    e[Qn] = void 0;
    var r = !0;
  } catch {
  }
  var o = qc.call(e);
  return r && (t ? e[Qn] = n : delete e[Qn]), o;
}
var Kc = Object.prototype, Uc = Kc.toString;
function Gc(e) {
  return Uc.call(e);
}
var Yc = "[object Null]", Zc = "[object Undefined]", ci = Mt ? Mt.toStringTag : void 0;
function Un(e) {
  return e == null ? e === void 0 ? Zc : Yc : ci && ci in Object(e) ? Wc(e) : Gc(e);
}
function dn(e) {
  return e != null && typeof e == "object";
}
var Xc = "[object Symbol]";
function fo(e) {
  return typeof e == "symbol" || dn(e) && Un(e) == Xc;
}
function Jc(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Qc = Array.isArray;
const Xt = Qc;
var ef = 1 / 0, fi = Mt ? Mt.prototype : void 0, di = fi ? fi.toString : void 0;
function pl(e) {
  if (typeof e == "string")
    return e;
  if (Xt(e))
    return Jc(e, pl) + "";
  if (fo(e))
    return di ? di.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ef ? "-0" : t;
}
var tf = /\s/;
function nf(e) {
  for (var t = e.length; t-- && tf.test(e.charAt(t)); )
    ;
  return t;
}
var rf = /^\s+/;
function of(e) {
  return e && e.slice(0, nf(e) + 1).replace(rf, "");
}
function Pt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var pi = 0 / 0, af = /^[-+]0x[0-9a-f]+$/i, sf = /^0b[01]+$/i, lf = /^0o[0-7]+$/i, uf = parseInt;
function vi(e) {
  if (typeof e == "number")
    return e;
  if (fo(e))
    return pi;
  if (Pt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Pt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = of(e);
  var n = sf.test(e);
  return n || lf.test(e) ? uf(e.slice(2), n ? 2 : 8) : af.test(e) ? pi : +e;
}
var cf = "[object AsyncFunction]", ff = "[object Function]", df = "[object GeneratorFunction]", pf = "[object Proxy]";
function vl(e) {
  if (!Pt(e))
    return !1;
  var t = Un(e);
  return t == ff || t == df || t == cf || t == pf;
}
var vf = Tt["__core-js_shared__"];
const Po = vf;
var mi = function() {
  var e = /[^.]+$/.exec(Po && Po.keys && Po.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function mf(e) {
  return !!mi && mi in e;
}
var hf = Function.prototype, gf = hf.toString;
function xn(e) {
  if (e != null) {
    try {
      return gf.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var yf = /[\\^$.*+?()[\]{}|]/g, bf = /^\[object .+?Constructor\]$/, wf = Function.prototype, Sf = Object.prototype, Ef = wf.toString, Tf = Sf.hasOwnProperty, Of = RegExp(
  "^" + Ef.call(Tf).replace(yf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function _f(e) {
  if (!Pt(e) || mf(e))
    return !1;
  var t = vl(e) ? Of : bf;
  return t.test(xn(e));
}
function Cf(e, t) {
  return e == null ? void 0 : e[t];
}
function In(e, t) {
  var n = Cf(e, t);
  return _f(n) ? n : void 0;
}
var $f = In(Tt, "WeakMap");
const Xo = $f;
var hi = Object.create, xf = function() {
  function e() {
  }
  return function(t) {
    if (!Pt(t))
      return {};
    if (hi)
      return hi(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const If = xf;
function Af(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Mf = function() {
  try {
    var e = In(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const gi = Mf;
function Pf(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var kf = 9007199254740991, Lf = /^(?:0|[1-9]\d*)$/;
function ml(e, t) {
  var n = typeof e;
  return t = t ?? kf, !!t && (n == "number" || n != "symbol" && Lf.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function hl(e, t, n) {
  t == "__proto__" && gi ? gi(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Ea(e, t) {
  return e === t || e !== e && t !== t;
}
var Ff = Object.prototype, Nf = Ff.hasOwnProperty;
function Ta(e, t, n) {
  var r = e[t];
  (!(Nf.call(e, t) && Ea(r, n)) || n === void 0 && !(t in e)) && hl(e, t, n);
}
function po(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, i = t.length; ++a < i; ) {
    var s = t[a], l = r ? r(n[s], e[s], s, n, e) : void 0;
    l === void 0 && (l = e[s]), o ? hl(n, s, l) : Ta(n, s, l);
  }
  return n;
}
var Rf = 9007199254740991;
function gl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Rf;
}
function yl(e) {
  return e != null && gl(e.length) && !vl(e);
}
var Df = Object.prototype;
function Oa(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Df;
  return e === n;
}
function Bf(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var jf = "[object Arguments]";
function yi(e) {
  return dn(e) && Un(e) == jf;
}
var bl = Object.prototype, zf = bl.hasOwnProperty, Hf = bl.propertyIsEnumerable, Vf = yi(function() {
  return arguments;
}()) ? yi : function(e) {
  return dn(e) && zf.call(e, "callee") && !Hf.call(e, "callee");
};
const qf = Vf;
function Wf() {
  return !1;
}
var wl = typeof exports == "object" && exports && !exports.nodeType && exports, bi = wl && typeof module == "object" && module && !module.nodeType && module, Kf = bi && bi.exports === wl, wi = Kf ? Tt.Buffer : void 0, Uf = wi ? wi.isBuffer : void 0, Gf = Uf || Wf;
const no = Gf;
var Yf = "[object Arguments]", Zf = "[object Array]", Xf = "[object Boolean]", Jf = "[object Date]", Qf = "[object Error]", ed = "[object Function]", td = "[object Map]", nd = "[object Number]", rd = "[object Object]", od = "[object RegExp]", ad = "[object Set]", id = "[object String]", sd = "[object WeakMap]", ld = "[object ArrayBuffer]", ud = "[object DataView]", cd = "[object Float32Array]", fd = "[object Float64Array]", dd = "[object Int8Array]", pd = "[object Int16Array]", vd = "[object Int32Array]", md = "[object Uint8Array]", hd = "[object Uint8ClampedArray]", gd = "[object Uint16Array]", yd = "[object Uint32Array]", Se = {};
Se[cd] = Se[fd] = Se[dd] = Se[pd] = Se[vd] = Se[md] = Se[hd] = Se[gd] = Se[yd] = !0;
Se[Yf] = Se[Zf] = Se[ld] = Se[Xf] = Se[ud] = Se[Jf] = Se[Qf] = Se[ed] = Se[td] = Se[nd] = Se[rd] = Se[od] = Se[ad] = Se[id] = Se[sd] = !1;
function bd(e) {
  return dn(e) && gl(e.length) && !!Se[Un(e)];
}
function _a(e) {
  return function(t) {
    return e(t);
  };
}
var Sl = typeof exports == "object" && exports && !exports.nodeType && exports, or = Sl && typeof module == "object" && module && !module.nodeType && module, wd = or && or.exports === Sl, ko = wd && fl.process, Sd = function() {
  try {
    var e = or && or.require && or.require("util").types;
    return e || ko && ko.binding && ko.binding("util");
  } catch {
  }
}();
const Dn = Sd;
var Si = Dn && Dn.isTypedArray, Ed = Si ? _a(Si) : bd;
const El = Ed;
var Td = Object.prototype, Od = Td.hasOwnProperty;
function Tl(e, t) {
  var n = Xt(e), r = !n && qf(e), o = !n && !r && no(e), a = !n && !r && !o && El(e), i = n || r || o || a, s = i ? Bf(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || Od.call(e, u)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    ml(u, l))) && s.push(u);
  return s;
}
function Ol(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var _d = Ol(Object.keys, Object);
const Cd = _d;
var $d = Object.prototype, xd = $d.hasOwnProperty;
function Id(e) {
  if (!Oa(e))
    return Cd(e);
  var t = [];
  for (var n in Object(e))
    xd.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Ca(e) {
  return yl(e) ? Tl(e) : Id(e);
}
function Ad(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Md = Object.prototype, Pd = Md.hasOwnProperty;
function kd(e) {
  if (!Pt(e))
    return Ad(e);
  var t = Oa(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Pd.call(e, r)) || n.push(r);
  return n;
}
function $a(e) {
  return yl(e) ? Tl(e, !0) : kd(e);
}
var Ld = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Fd = /^\w*$/;
function Nd(e, t) {
  if (Xt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || fo(e) ? !0 : Fd.test(e) || !Ld.test(e) || t != null && e in Object(t);
}
var Rd = In(Object, "create");
const ur = Rd;
function Dd() {
  this.__data__ = ur ? ur(null) : {}, this.size = 0;
}
function Bd(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var jd = "__lodash_hash_undefined__", zd = Object.prototype, Hd = zd.hasOwnProperty;
function Vd(e) {
  var t = this.__data__;
  if (ur) {
    var n = t[e];
    return n === jd ? void 0 : n;
  }
  return Hd.call(t, e) ? t[e] : void 0;
}
var qd = Object.prototype, Wd = qd.hasOwnProperty;
function Kd(e) {
  var t = this.__data__;
  return ur ? t[e] !== void 0 : Wd.call(t, e);
}
var Ud = "__lodash_hash_undefined__";
function Gd(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ur && t === void 0 ? Ud : t, this;
}
function _n(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
_n.prototype.clear = Dd;
_n.prototype.delete = Bd;
_n.prototype.get = Vd;
_n.prototype.has = Kd;
_n.prototype.set = Gd;
function Yd() {
  this.__data__ = [], this.size = 0;
}
function vo(e, t) {
  for (var n = e.length; n--; )
    if (Ea(e[n][0], t))
      return n;
  return -1;
}
var Zd = Array.prototype, Xd = Zd.splice;
function Jd(e) {
  var t = this.__data__, n = vo(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Xd.call(t, n, 1), --this.size, !0;
}
function Qd(e) {
  var t = this.__data__, n = vo(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ep(e) {
  return vo(this.__data__, e) > -1;
}
function tp(e, t) {
  var n = this.__data__, r = vo(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function tn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
tn.prototype.clear = Yd;
tn.prototype.delete = Jd;
tn.prototype.get = Qd;
tn.prototype.has = ep;
tn.prototype.set = tp;
var np = In(Tt, "Map");
const cr = np;
function rp() {
  this.size = 0, this.__data__ = {
    hash: new _n(),
    map: new (cr || tn)(),
    string: new _n()
  };
}
function op(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function mo(e, t) {
  var n = e.__data__;
  return op(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ap(e) {
  var t = mo(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ip(e) {
  return mo(this, e).get(e);
}
function sp(e) {
  return mo(this, e).has(e);
}
function lp(e, t) {
  var n = mo(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function nn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
nn.prototype.clear = rp;
nn.prototype.delete = ap;
nn.prototype.get = ip;
nn.prototype.has = sp;
nn.prototype.set = lp;
var up = "Expected a function";
function xa(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(up);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var i = e.apply(this, r);
    return n.cache = a.set(o, i) || a, i;
  };
  return n.cache = new (xa.Cache || nn)(), n;
}
xa.Cache = nn;
var cp = 500;
function fp(e) {
  var t = xa(e, function(r) {
    return n.size === cp && n.clear(), r;
  }), n = t.cache;
  return t;
}
var dp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, pp = /\\(\\)?/g, vp = fp(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(dp, function(n, r, o, a) {
    t.push(o ? a.replace(pp, "$1") : r || n);
  }), t;
});
const mp = vp;
function hp(e) {
  return e == null ? "" : pl(e);
}
function _l(e, t) {
  return Xt(e) ? e : Nd(e, t) ? [e] : mp(hp(e));
}
var gp = 1 / 0;
function Cl(e) {
  if (typeof e == "string" || fo(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -gp ? "-0" : t;
}
function yp(e, t) {
  t = _l(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Cl(t[n++])];
  return n && n == r ? e : void 0;
}
function nt(e, t, n) {
  var r = e == null ? void 0 : yp(e, t);
  return r === void 0 ? n : r;
}
function $l(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var bp = Ol(Object.getPrototypeOf, Object);
const xl = bp;
function Jo() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return Xt(e) ? e : [e];
}
function wp() {
  this.__data__ = new tn(), this.size = 0;
}
function Sp(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Ep(e) {
  return this.__data__.get(e);
}
function Tp(e) {
  return this.__data__.has(e);
}
var Op = 200;
function _p(e, t) {
  var n = this.__data__;
  if (n instanceof tn) {
    var r = n.__data__;
    if (!cr || r.length < Op - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new nn(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Yt(e) {
  var t = this.__data__ = new tn(e);
  this.size = t.size;
}
Yt.prototype.clear = wp;
Yt.prototype.delete = Sp;
Yt.prototype.get = Ep;
Yt.prototype.has = Tp;
Yt.prototype.set = _p;
function Cp(e, t) {
  return e && po(t, Ca(t), e);
}
function $p(e, t) {
  return e && po(t, $a(t), e);
}
var Il = typeof exports == "object" && exports && !exports.nodeType && exports, Ei = Il && typeof module == "object" && module && !module.nodeType && module, xp = Ei && Ei.exports === Il, Ti = xp ? Tt.Buffer : void 0, Oi = Ti ? Ti.allocUnsafe : void 0;
function Ip(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = Oi ? Oi(n) : new e.constructor(n);
  return e.copy(r), r;
}
function Ap(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (a[o++] = i);
  }
  return a;
}
function Al() {
  return [];
}
var Mp = Object.prototype, Pp = Mp.propertyIsEnumerable, _i = Object.getOwnPropertySymbols, kp = _i ? function(e) {
  return e == null ? [] : (e = Object(e), Ap(_i(e), function(t) {
    return Pp.call(e, t);
  }));
} : Al;
const Ia = kp;
function Lp(e, t) {
  return po(e, Ia(e), t);
}
var Fp = Object.getOwnPropertySymbols, Np = Fp ? function(e) {
  for (var t = []; e; )
    $l(t, Ia(e)), e = xl(e);
  return t;
} : Al;
const Ml = Np;
function Rp(e, t) {
  return po(e, Ml(e), t);
}
function Pl(e, t, n) {
  var r = t(e);
  return Xt(e) ? r : $l(r, n(e));
}
function Qo(e) {
  return Pl(e, Ca, Ia);
}
function Dp(e) {
  return Pl(e, $a, Ml);
}
var Bp = In(Tt, "DataView");
const ea = Bp;
var jp = In(Tt, "Promise");
const ta = jp;
var zp = In(Tt, "Set");
const na = zp;
var Ci = "[object Map]", Hp = "[object Object]", $i = "[object Promise]", xi = "[object Set]", Ii = "[object WeakMap]", Ai = "[object DataView]", Vp = xn(ea), qp = xn(cr), Wp = xn(ta), Kp = xn(na), Up = xn(Xo), yn = Un;
(ea && yn(new ea(new ArrayBuffer(1))) != Ai || cr && yn(new cr()) != Ci || ta && yn(ta.resolve()) != $i || na && yn(new na()) != xi || Xo && yn(new Xo()) != Ii) && (yn = function(e) {
  var t = Un(e), n = t == Hp ? e.constructor : void 0, r = n ? xn(n) : "";
  if (r)
    switch (r) {
      case Vp:
        return Ai;
      case qp:
        return Ci;
      case Wp:
        return $i;
      case Kp:
        return xi;
      case Up:
        return Ii;
    }
  return t;
});
const fr = yn;
var Gp = Object.prototype, Yp = Gp.hasOwnProperty;
function Zp(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && Yp.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var Xp = Tt.Uint8Array;
const ro = Xp;
function Aa(e) {
  var t = new e.constructor(e.byteLength);
  return new ro(t).set(new ro(e)), t;
}
function Jp(e, t) {
  var n = t ? Aa(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var Qp = /\w*$/;
function ev(e) {
  var t = new e.constructor(e.source, Qp.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Mi = Mt ? Mt.prototype : void 0, Pi = Mi ? Mi.valueOf : void 0;
function tv(e) {
  return Pi ? Object(Pi.call(e)) : {};
}
function nv(e, t) {
  var n = t ? Aa(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var rv = "[object Boolean]", ov = "[object Date]", av = "[object Map]", iv = "[object Number]", sv = "[object RegExp]", lv = "[object Set]", uv = "[object String]", cv = "[object Symbol]", fv = "[object ArrayBuffer]", dv = "[object DataView]", pv = "[object Float32Array]", vv = "[object Float64Array]", mv = "[object Int8Array]", hv = "[object Int16Array]", gv = "[object Int32Array]", yv = "[object Uint8Array]", bv = "[object Uint8ClampedArray]", wv = "[object Uint16Array]", Sv = "[object Uint32Array]";
function Ev(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case fv:
      return Aa(e);
    case rv:
    case ov:
      return new r(+e);
    case dv:
      return Jp(e, n);
    case pv:
    case vv:
    case mv:
    case hv:
    case gv:
    case yv:
    case bv:
    case wv:
    case Sv:
      return nv(e, n);
    case av:
      return new r();
    case iv:
    case uv:
      return new r(e);
    case sv:
      return ev(e);
    case lv:
      return new r();
    case cv:
      return tv(e);
  }
}
function Tv(e) {
  return typeof e.constructor == "function" && !Oa(e) ? If(xl(e)) : {};
}
var Ov = "[object Map]";
function _v(e) {
  return dn(e) && fr(e) == Ov;
}
var ki = Dn && Dn.isMap, Cv = ki ? _a(ki) : _v;
const $v = Cv;
var xv = "[object Set]";
function Iv(e) {
  return dn(e) && fr(e) == xv;
}
var Li = Dn && Dn.isSet, Av = Li ? _a(Li) : Iv;
const Mv = Av;
var Pv = 1, kv = 2, Lv = 4, kl = "[object Arguments]", Fv = "[object Array]", Nv = "[object Boolean]", Rv = "[object Date]", Dv = "[object Error]", Ll = "[object Function]", Bv = "[object GeneratorFunction]", jv = "[object Map]", zv = "[object Number]", Fl = "[object Object]", Hv = "[object RegExp]", Vv = "[object Set]", qv = "[object String]", Wv = "[object Symbol]", Kv = "[object WeakMap]", Uv = "[object ArrayBuffer]", Gv = "[object DataView]", Yv = "[object Float32Array]", Zv = "[object Float64Array]", Xv = "[object Int8Array]", Jv = "[object Int16Array]", Qv = "[object Int32Array]", em = "[object Uint8Array]", tm = "[object Uint8ClampedArray]", nm = "[object Uint16Array]", rm = "[object Uint32Array]", be = {};
be[kl] = be[Fv] = be[Uv] = be[Gv] = be[Nv] = be[Rv] = be[Yv] = be[Zv] = be[Xv] = be[Jv] = be[Qv] = be[jv] = be[zv] = be[Fl] = be[Hv] = be[Vv] = be[qv] = be[Wv] = be[em] = be[tm] = be[nm] = be[rm] = !0;
be[Dv] = be[Ll] = be[Kv] = !1;
function Hr(e, t, n, r, o, a) {
  var i, s = t & Pv, l = t & kv, u = t & Lv;
  if (n && (i = o ? n(e, r, o, a) : n(e)), i !== void 0)
    return i;
  if (!Pt(e))
    return e;
  var c = Xt(e);
  if (c) {
    if (i = Zp(e), !s)
      return Af(e, i);
  } else {
    var f = fr(e), v = f == Ll || f == Bv;
    if (no(e))
      return Ip(e, s);
    if (f == Fl || f == kl || v && !o) {
      if (i = l || v ? {} : Tv(e), !s)
        return l ? Rp(e, $p(i, e)) : Lp(e, Cp(i, e));
    } else {
      if (!be[f])
        return o ? e : {};
      i = Ev(e, f, s);
    }
  }
  a || (a = new Yt());
  var y = a.get(e);
  if (y)
    return y;
  a.set(e, i), Mv(e) ? e.forEach(function(h) {
    i.add(Hr(h, t, n, h, e, a));
  }) : $v(e) && e.forEach(function(h, m) {
    i.set(m, Hr(h, t, n, m, e, a));
  });
  var g = u ? l ? Dp : Qo : l ? $a : Ca, d = c ? void 0 : g(e);
  return Pf(d || e, function(h, m) {
    d && (m = h, h = e[m]), Ta(i, m, Hr(h, t, n, m, e, a));
  }), i;
}
var om = 4;
function Fi(e) {
  return Hr(e, om);
}
var am = "__lodash_hash_undefined__";
function im(e) {
  return this.__data__.set(e, am), this;
}
function sm(e) {
  return this.__data__.has(e);
}
function oo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new nn(); ++t < n; )
    this.add(e[t]);
}
oo.prototype.add = oo.prototype.push = im;
oo.prototype.has = sm;
function lm(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function um(e, t) {
  return e.has(t);
}
var cm = 1, fm = 2;
function Nl(e, t, n, r, o, a) {
  var i = n & cm, s = e.length, l = t.length;
  if (s != l && !(i && l > s))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, v = !0, y = n & fm ? new oo() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < s; ) {
    var g = e[f], d = t[f];
    if (r)
      var h = i ? r(d, g, f, t, e, a) : r(g, d, f, e, t, a);
    if (h !== void 0) {
      if (h)
        continue;
      v = !1;
      break;
    }
    if (y) {
      if (!lm(t, function(m, w) {
        if (!um(y, w) && (g === m || o(g, m, n, r, a)))
          return y.push(w);
      })) {
        v = !1;
        break;
      }
    } else if (!(g === d || o(g, d, n, r, a))) {
      v = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), v;
}
function dm(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function pm(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var vm = 1, mm = 2, hm = "[object Boolean]", gm = "[object Date]", ym = "[object Error]", bm = "[object Map]", wm = "[object Number]", Sm = "[object RegExp]", Em = "[object Set]", Tm = "[object String]", Om = "[object Symbol]", _m = "[object ArrayBuffer]", Cm = "[object DataView]", Ni = Mt ? Mt.prototype : void 0, Lo = Ni ? Ni.valueOf : void 0;
function $m(e, t, n, r, o, a, i) {
  switch (n) {
    case Cm:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case _m:
      return !(e.byteLength != t.byteLength || !a(new ro(e), new ro(t)));
    case hm:
    case gm:
    case wm:
      return Ea(+e, +t);
    case ym:
      return e.name == t.name && e.message == t.message;
    case Sm:
    case Tm:
      return e == t + "";
    case bm:
      var s = dm;
    case Em:
      var l = r & vm;
      if (s || (s = pm), e.size != t.size && !l)
        return !1;
      var u = i.get(e);
      if (u)
        return u == t;
      r |= mm, i.set(e, t);
      var c = Nl(s(e), s(t), r, o, a, i);
      return i.delete(e), c;
    case Om:
      if (Lo)
        return Lo.call(e) == Lo.call(t);
  }
  return !1;
}
var xm = 1, Im = Object.prototype, Am = Im.hasOwnProperty;
function Mm(e, t, n, r, o, a) {
  var i = n & xm, s = Qo(e), l = s.length, u = Qo(t), c = u.length;
  if (l != c && !i)
    return !1;
  for (var f = l; f--; ) {
    var v = s[f];
    if (!(i ? v in t : Am.call(t, v)))
      return !1;
  }
  var y = a.get(e), g = a.get(t);
  if (y && g)
    return y == t && g == e;
  var d = !0;
  a.set(e, t), a.set(t, e);
  for (var h = i; ++f < l; ) {
    v = s[f];
    var m = e[v], w = t[v];
    if (r)
      var O = i ? r(w, m, v, t, e, a) : r(m, w, v, e, t, a);
    if (!(O === void 0 ? m === w || o(m, w, n, r, a) : O)) {
      d = !1;
      break;
    }
    h || (h = v == "constructor");
  }
  if (d && !h) {
    var C = e.constructor, I = t.constructor;
    C != I && "constructor" in e && "constructor" in t && !(typeof C == "function" && C instanceof C && typeof I == "function" && I instanceof I) && (d = !1);
  }
  return a.delete(e), a.delete(t), d;
}
var Pm = 1, Ri = "[object Arguments]", Di = "[object Array]", Ir = "[object Object]", km = Object.prototype, Bi = km.hasOwnProperty;
function Lm(e, t, n, r, o, a) {
  var i = Xt(e), s = Xt(t), l = i ? Di : fr(e), u = s ? Di : fr(t);
  l = l == Ri ? Ir : l, u = u == Ri ? Ir : u;
  var c = l == Ir, f = u == Ir, v = l == u;
  if (v && no(e)) {
    if (!no(t))
      return !1;
    i = !0, c = !1;
  }
  if (v && !c)
    return a || (a = new Yt()), i || El(e) ? Nl(e, t, n, r, o, a) : $m(e, t, l, n, r, o, a);
  if (!(n & Pm)) {
    var y = c && Bi.call(e, "__wrapped__"), g = f && Bi.call(t, "__wrapped__");
    if (y || g) {
      var d = y ? e.value() : e, h = g ? t.value() : t;
      return a || (a = new Yt()), o(d, h, n, r, a);
    }
  }
  return v ? (a || (a = new Yt()), Mm(e, t, n, r, o, a)) : !1;
}
function Rl(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !dn(e) && !dn(t) ? e !== e && t !== t : Lm(e, t, n, r, Rl, o);
}
var Fm = function() {
  return Tt.Date.now();
};
const Fo = Fm;
var Nm = "Expected a function", Rm = Math.max, Dm = Math.min;
function ji(e, t, n) {
  var r, o, a, i, s, l, u = 0, c = !1, f = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(Nm);
  t = vi(t) || 0, Pt(n) && (c = !!n.leading, f = "maxWait" in n, a = f ? Rm(vi(n.maxWait) || 0, t) : a, v = "trailing" in n ? !!n.trailing : v);
  function y(S) {
    var T = r, x = o;
    return r = o = void 0, u = S, i = e.apply(x, T), i;
  }
  function g(S) {
    return u = S, s = setTimeout(m, t), c ? y(S) : i;
  }
  function d(S) {
    var T = S - l, x = S - u, j = t - T;
    return f ? Dm(j, a - x) : j;
  }
  function h(S) {
    var T = S - l, x = S - u;
    return l === void 0 || T >= t || T < 0 || f && x >= a;
  }
  function m() {
    var S = Fo();
    if (h(S))
      return w(S);
    s = setTimeout(m, d(S));
  }
  function w(S) {
    return s = void 0, v && r ? y(S) : (r = o = void 0, i);
  }
  function O() {
    s !== void 0 && clearTimeout(s), u = 0, r = l = o = s = void 0;
  }
  function C() {
    return s === void 0 ? i : w(Fo());
  }
  function I() {
    var S = Fo(), T = h(S);
    if (r = arguments, o = this, l = S, T) {
      if (s === void 0)
        return g(l);
      if (f)
        return clearTimeout(s), s = setTimeout(m, t), y(l);
    }
    return s === void 0 && (s = setTimeout(m, t)), i;
  }
  return I.cancel = O, I.flush = C, I;
}
function ao(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function zi(e, t) {
  return Rl(e, t);
}
function Bn(e) {
  return e == null;
}
function Bm(e) {
  return e === void 0;
}
function jm(e, t, n, r) {
  if (!Pt(e))
    return e;
  t = _l(t, e);
  for (var o = -1, a = t.length, i = a - 1, s = e; s != null && ++o < a; ) {
    var l = Cl(t[o]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != i) {
      var c = s[l];
      u = r ? r(c, l, s) : void 0, u === void 0 && (u = Pt(c) ? c : ml(t[o + 1]) ? [] : {});
    }
    Ta(s, l, u), s = s[l];
  }
  return e;
}
function zm(e, t, n) {
  return e == null ? e : jm(e, t, n);
}
const Hm = (e) => e === void 0, Gn = (e) => typeof e == "boolean", wt = (e) => typeof e == "number", dr = (e) => typeof Element > "u" ? !1 : e instanceof Element, Vm = (e) => Le(e) ? !Number.isNaN(Number(e)) : !1, qm = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), No = (e, t, n) => ({
  get value() {
    return nt(e, t, n);
  },
  set value(r) {
    zm(e, t, r);
  }
});
class Dl extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Cn(e, t) {
  throw new Dl(`[${e}] ${t}`);
}
function Re(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Le(e) ? new Dl(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Wm = "utils/dom/style", Bl = (e = "") => e.split(" ").filter((t) => !!t.trim()), ra = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, tr = (e, t) => {
  !e || !t.trim() || e.classList.add(...Bl(t));
}, Vr = (e, t) => {
  !e || !t.trim() || e.classList.remove(...Bl(t));
}, Km = (e, t) => {
  var n;
  if (!$e || !e || !t)
    return "";
  let r = Dc(t);
  r === "float" && (r = "cssFloat");
  try {
    const o = e.style[r];
    if (o)
      return o;
    const a = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return a ? a[r] : "";
  } catch {
    return e.style[r];
  }
};
function Jt(e, t = "px") {
  if (!e)
    return "";
  if (wt(e) || Vm(e))
    return `${e}${t}`;
  if (Le(e))
    return e;
  Re(Wm, "binding value must be a string or number");
}
let Ar;
const Um = (e) => {
  var t;
  if (!$e)
    return 0;
  if (Ar !== void 0)
    return Ar;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const r = n.offsetWidth;
  n.style.overflow = "scroll";
  const o = document.createElement("div");
  o.style.width = "100%", n.appendChild(o);
  const a = o.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), Ar = r - a, Ar;
};
function Gm(e, t) {
  if (!$e)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let r = t.offsetParent;
  for (; r !== null && e !== r && e.contains(r); )
    n.push(r), r = r.offsetParent;
  const o = t.offsetTop + n.reduce((l, u) => l + u.offsetTop, 0), a = o + t.offsetHeight, i = e.scrollTop, s = i + e.clientHeight;
  o < i ? e.scrollTop = o : a > s && (e.scrollTop = a - e.clientHeight);
}
/*! Element Plus Icons Vue v2.1.0 */
var Ft = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [r, o] of t)
    n[r] = o;
  return n;
}, Ym = {
  name: "ArrowDown"
}, Zm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Xm = /* @__PURE__ */ q(
  "path",
  {
    fill: "currentColor",
    d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
  },
  null,
  -1
  /* HOISTED */
), Jm = [
  Xm
];
function Qm(e, t, n, r, o, a) {
  return M(), V("svg", Zm, Jm);
}
var jl = /* @__PURE__ */ Ft(Ym, [["render", Qm], ["__file", "arrow-down.vue"]]), eh = {
  name: "ArrowRight"
}, th = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, nh = /* @__PURE__ */ q(
  "path",
  {
    fill: "currentColor",
    d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
  },
  null,
  -1
  /* HOISTED */
), rh = [
  nh
];
function oh(e, t, n, r, o, a) {
  return M(), V("svg", th, rh);
}
var ah = /* @__PURE__ */ Ft(eh, [["render", oh], ["__file", "arrow-right.vue"]]), ih = {
  name: "CircleCheck"
}, sh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, lh = /* @__PURE__ */ q(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), uh = /* @__PURE__ */ q(
  "path",
  {
    fill: "currentColor",
    d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
  },
  null,
  -1
  /* HOISTED */
), ch = [
  lh,
  uh
];
function fh(e, t, n, r, o, a) {
  return M(), V("svg", sh, ch);
}
var dh = /* @__PURE__ */ Ft(ih, [["render", fh], ["__file", "circle-check.vue"]]), ph = {
  name: "CircleClose"
}, vh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, mh = /* @__PURE__ */ q(
  "path",
  {
    fill: "currentColor",
    d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
  },
  null,
  -1
  /* HOISTED */
), hh = /* @__PURE__ */ q(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), gh = [
  mh,
  hh
];
function yh(e, t, n, r, o, a) {
  return M(), V("svg", vh, gh);
}
var Ma = /* @__PURE__ */ Ft(ph, [["render", yh], ["__file", "circle-close.vue"]]), bh = {
  name: "Close"
}, wh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Sh = /* @__PURE__ */ q(
  "path",
  {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  },
  null,
  -1
  /* HOISTED */
), Eh = [
  Sh
];
function Th(e, t, n, r, o, a) {
  return M(), V("svg", wh, Eh);
}
var oa = /* @__PURE__ */ Ft(bh, [["render", Th], ["__file", "close.vue"]]), Oh = {
  name: "Hide"
}, _h = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ch = /* @__PURE__ */ q(
  "path",
  {
    fill: "currentColor",
    d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
  },
  null,
  -1
  /* HOISTED */
), $h = /* @__PURE__ */ q(
  "path",
  {
    fill: "currentColor",
    d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
  },
  null,
  -1
  /* HOISTED */
), xh = [
  Ch,
  $h
];
function Ih(e, t, n, r, o, a) {
  return M(), V("svg", _h, xh);
}
var Ah = /* @__PURE__ */ Ft(Oh, [["render", Ih], ["__file", "hide.vue"]]), Mh = {
  name: "Loading"
}, Ph = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, kh = /* @__PURE__ */ q(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
  },
  null,
  -1
  /* HOISTED */
), Lh = [
  kh
];
function Fh(e, t, n, r, o, a) {
  return M(), V("svg", Ph, Lh);
}
var Nh = /* @__PURE__ */ Ft(Mh, [["render", Fh], ["__file", "loading.vue"]]), Rh = {
  name: "More"
}, Dh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Bh = /* @__PURE__ */ q(
  "path",
  {
    fill: "currentColor",
    d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"
  },
  null,
  -1
  /* HOISTED */
), jh = [
  Bh
];
function zh(e, t, n, r, o, a) {
  return M(), V("svg", Dh, jh);
}
var Hh = /* @__PURE__ */ Ft(Rh, [["render", zh], ["__file", "more.vue"]]), Vh = {
  name: "Search"
}, qh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Wh = /* @__PURE__ */ q(
  "path",
  {
    fill: "currentColor",
    d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
  },
  null,
  -1
  /* HOISTED */
), Kh = [
  Wh
];
function Uh(e, t, n, r, o, a) {
  return M(), V("svg", qh, Kh);
}
var Gh = /* @__PURE__ */ Ft(Vh, [["render", Uh], ["__file", "search.vue"]]), Yh = {
  name: "View"
}, Zh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Xh = /* @__PURE__ */ q(
  "path",
  {
    fill: "currentColor",
    d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
  },
  null,
  -1
  /* HOISTED */
), Jh = [
  Xh
];
function Qh(e, t, n, r, o, a) {
  return M(), V("svg", Zh, Jh);
}
var eg = /* @__PURE__ */ Ft(Yh, [["render", Qh], ["__file", "view.vue"]]);
const zl = "__epPropKey", te = (e) => e, tg = (e) => Zt(e) && !!e[zl], ho = (e, t) => {
  if (!Zt(e) || tg(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: i } = e, l = {
    type: a,
    required: !!r,
    validator: n || i ? (u) => {
      let c = !1, f = [];
      if (n && (f = Array.from(n), ui(e, "default") && f.push(o), c || (c = f.includes(u))), i && (c || (c = i(u))), !c && f.length > 0) {
        const v = [...new Set(f)].map((y) => JSON.stringify(y)).join(", ");
        Uu(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${v}], got value ${JSON.stringify(u)}.`);
      }
      return c;
    } : void 0,
    [zl]: !0
  };
  return ui(e, "default") && (l.default = o), l;
}, he = (e) => ao(Object.entries(e).map(([t, n]) => [
  t,
  ho(n, t)
])), It = te([
  String,
  Object,
  Function
]), ng = {
  Close: oa
}, Hl = {
  validating: Nh,
  success: dh,
  error: Ma
}, mt = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, rg = (e, t) => (e.install = (n) => {
  n.directive(t, e);
}, e), Yn = (e) => (e.install = Gt, e), og = (...e) => (t) => {
  e.forEach((n) => {
    We(n) ? n(t) : n.value = t;
  });
}, ze = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, ot = "update:modelValue", Vl = "change", br = ["", "default", "small", "large"], ag = {
  large: 40,
  default: 32,
  small: 24
}, ig = (e) => ag[e || "default"], sg = (e) => ["", ...br].includes(e);
var qr = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(qr || {});
const Wr = (e) => {
  const t = Rn(e) ? e : [e], n = [];
  return t.forEach((r) => {
    var o;
    Rn(r) ? n.push(...Wr(r)) : ei(r) && Rn(r.children) ? n.push(...Wr(r.children)) : (n.push(r), ei(r) && ((o = r.component) != null && o.subTree) && n.push(...Wr(r.component.subTree)));
  }), n;
}, ql = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e), Wl = (e) => e, lg = ["class", "style"], ug = /^on[A-Z]/, cg = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = b(() => ((n == null ? void 0 : n.value) || []).concat(lg)), o = Pe();
  return o ? b(() => {
    var a;
    return ao(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([i]) => !r.value.includes(i) && !(t && ug.test(i))));
  }) : (Re("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), b(() => ({})));
}, io = ({ from: e, replacement: t, scope: n, version: r, ref: o, type: a = "API" }, i) => {
  U(() => p(i), (s) => {
    s && Re(n, `[${a}] ${e} is about to be deprecated in version ${r}, please use ${t} instead.
For more detail, please visit: ${o}
`);
  }, {
    immediate: !0
  });
}, fg = (e, t, n) => {
  let r = {
    offsetX: 0,
    offsetY: 0
  };
  const o = (s) => {
    const l = s.clientX, u = s.clientY, { offsetX: c, offsetY: f } = r, v = e.value.getBoundingClientRect(), y = v.left, g = v.top, d = v.width, h = v.height, m = document.documentElement.clientWidth, w = document.documentElement.clientHeight, O = -y + c, C = -g + f, I = m - y - d + c, S = w - g - h + f, T = (j) => {
      const L = Math.min(Math.max(c + j.clientX - l, O), I), A = Math.min(Math.max(f + j.clientY - u, C), S);
      r = {
        offsetX: L,
        offsetY: A
      }, e.value.style.transform = `translate(${Jt(L)}, ${Jt(A)})`;
    }, x = () => {
      document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", x);
    };
    document.addEventListener("mousemove", T), document.addEventListener("mouseup", x);
  }, a = () => {
    t.value && e.value && t.value.addEventListener("mousedown", o);
  }, i = () => {
    t.value && e.value && t.value.removeEventListener("mousedown", o);
  };
  Te(() => {
    al(() => {
      n.value ? a() : i();
    });
  }), Ve(() => {
    i();
  });
};
var dg = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const pg = (e) => (t, n) => vg(t, n, p(e)), vg = (e, t, n) => nt(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t == null ? void 0 : t[o]) != null ? a : `{${o}}`}`;
}), mg = (e) => {
  const t = b(() => p(e).name), n = il(e) ? e : _(e);
  return {
    lang: t,
    locale: n,
    t: pg(e)
  };
}, hg = Symbol("localeContextKey"), go = (e) => {
  const t = e || ne(hg, _());
  return mg(b(() => t.value || dg));
};
let gg;
function yg(e, t = gg) {
  t && t.active && t.effects.push(e);
}
const Hi = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Kl = (e) => (e.w & pn) > 0, Ul = (e) => (e.n & pn) > 0, bg = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= pn;
}, wg = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      Kl(o) && !Ul(o) ? o.delete(e) : t[n++] = o, o.w &= ~pn, o.n &= ~pn;
    }
    t.length = n;
  }
};
let nr = 0, pn = 1;
const aa = 30;
let rt;
Symbol(process.env.NODE_ENV !== "production" ? "iterate" : "");
Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Sg {
  constructor(t, n = null, r) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, yg(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = rt, n = Kr;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = rt, rt = this, Kr = !0, pn = 1 << ++nr, nr <= aa ? bg(this) : Vi(this), this.fn();
    } finally {
      nr <= aa && wg(this), pn = 1 << --nr, rt = this.parent, Kr = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    rt === this ? this.deferStop = !0 : this.active && (Vi(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Vi(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Kr = !0;
function qi(e, t) {
  let n = !1;
  nr <= aa ? Ul(e) || (e.n |= pn, n = !Kl(e)) : n = !e.has(rt), n && (e.add(rt), rt.deps.push(e), process.env.NODE_ENV !== "production" && rt.onTrack && rt.onTrack(
    cl(
      {
        effect: rt
      },
      t
    )
  ));
}
function Wi(e, t) {
  const n = Rn(e) ? e : [...e];
  for (const r of n)
    r.computed && Ki(r, t);
  for (const r of n)
    r.computed || Ki(r, t);
}
function Ki(e, t) {
  (e !== rt || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(cl({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(kc)
);
function yo(e) {
  const t = e && e.__v_raw;
  return t ? yo(t) : e;
}
function Eg(e) {
  Kr && rt && (e = yo(e), process.env.NODE_ENV !== "production" ? qi(e.dep || (e.dep = Hi()), {
    target: e,
    type: "get",
    key: "value"
  }) : qi(e.dep || (e.dep = Hi())));
}
function Tg(e, t) {
  e = yo(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? Wi(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : Wi(n));
}
class Og {
  constructor(t, n, r, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new Sg(t, () => {
      this._dirty || (this._dirty = !0, Tg(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r;
  }
  get value() {
    const t = yo(this);
    return Eg(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function _g(e, t, n = !1) {
  let r, o;
  const a = We(e);
  a ? (r = e, o = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Gt) : (r = e.get, o = e.set);
  const i = new Og(r, o, a || !o, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const Ur = "el", Cg = "is-", gn = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, $g = Symbol("namespaceContextKey"), Pa = (e) => {
  const t = e || (Pe() ? ne($g, _(Ur)) : _(Ur));
  return b(() => p(t) || Ur);
}, fe = (e, t) => {
  const n = Pa(t);
  return {
    namespace: n,
    b: (d = "") => gn(n.value, e, d, "", ""),
    e: (d) => d ? gn(n.value, e, "", d, "") : "",
    m: (d) => d ? gn(n.value, e, "", "", d) : "",
    be: (d, h) => d && h ? gn(n.value, e, d, h, "") : "",
    em: (d, h) => d && h ? gn(n.value, e, "", d, h) : "",
    bm: (d, h) => d && h ? gn(n.value, e, d, "", h) : "",
    bem: (d, h, m) => d && h && m ? gn(n.value, e, d, h, m) : "",
    is: (d, ...h) => {
      const m = h.length >= 1 ? h[0] : !0;
      return d && m ? `${Cg}${d}` : "";
    },
    cssVar: (d) => {
      const h = {};
      for (const m in d)
        d[m] && (h[`--${n.value}-${m}`] = d[m]);
      return h;
    },
    cssVarName: (d) => `--${n.value}-${d}`,
    cssVarBlock: (d) => {
      const h = {};
      for (const m in d)
        d[m] && (h[`--${n.value}-${e}-${m}`] = d[m]);
      return h;
    },
    cssVarBlockName: (d) => `--${n.value}-${e}-${d}`
  };
}, xg = (e, t = {}) => {
  il(e) || Cn("[useLockscreen]", "You need to pass a ref param to this function");
  const n = t.ns || fe("popup"), r = _g(() => n.bm("parent", "hidden"));
  if (!$e || ra(document.body, r.value))
    return;
  let o = 0, a = !1, i = "0";
  const s = () => {
    setTimeout(() => {
      Vr(document == null ? void 0 : document.body, r.value), a && document && (document.body.style.width = i);
    }, 200);
  };
  U(e, (l) => {
    if (!l) {
      s();
      return;
    }
    a = !ra(document.body, r.value), a && (i = document.body.style.width), o = Um(n.namespace.value);
    const u = document.documentElement.clientHeight < document.body.scrollHeight, c = Km(document.body, "overflowY");
    o > 0 && (u || c === "scroll") && a && (document.body.style.width = `calc(100% - ${o}px)`), tr(document.body, r.value);
  }), ga(() => s());
}, Ig = ho({
  type: te(Boolean),
  default: null
}), Ag = ho({
  type: te(Function)
}), Gl = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: Ig,
    [n]: Ag
  };
  return {
    useModelToggle: ({
      indicator: i,
      toggleReason: s,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: c,
      onHide: f
    }) => {
      const v = Pe(), { emit: y } = v, g = v.props, d = b(() => We(g[n])), h = b(() => g[e] === null), m = (T) => {
        i.value !== !0 && (i.value = !0, s && (s.value = T), We(c) && c(T));
      }, w = (T) => {
        i.value !== !1 && (i.value = !1, s && (s.value = T), We(f) && f(T));
      }, O = (T) => {
        if (g.disabled === !0 || We(u) && !u())
          return;
        const x = d.value && $e;
        x && y(t, !0), (h.value || !x) && m(T);
      }, C = (T) => {
        if (g.disabled === !0 || !$e)
          return;
        const x = d.value && $e;
        x && y(t, !1), (h.value || !x) && w(T);
      }, I = (T) => {
        Gn(T) && (g.disabled && T ? d.value && y(t, !1) : i.value !== T && (T ? m() : w()));
      }, S = () => {
        i.value ? C() : O();
      };
      return U(() => g[e], I), l && v.appContext.config.globalProperties.$route !== void 0 && U(() => ({
        ...v.proxy.$route
      }), () => {
        l.value && i.value && C();
      }), Te(() => {
        I(g[e]);
      }), {
        hide: C,
        show: O,
        toggle: S,
        hasUpdateHandler: d
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
};
Gl("modelValue");
const Yl = (e) => {
  const t = Pe();
  return b(() => {
    var n, r;
    return (r = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
};
var Ye = "top", dt = "bottom", pt = "right", Ze = "left", ka = "auto", wr = [Ye, dt, pt, Ze], jn = "start", pr = "end", Mg = "clippingParents", Zl = "viewport", er = "popper", Pg = "reference", Ui = wr.reduce(function(e, t) {
  return e.concat([t + "-" + jn, t + "-" + pr]);
}, []), bo = [].concat(wr, [ka]).reduce(function(e, t) {
  return e.concat([t, t + "-" + jn, t + "-" + pr]);
}, []), kg = "beforeRead", Lg = "read", Fg = "afterRead", Ng = "beforeMain", Rg = "main", Dg = "afterMain", Bg = "beforeWrite", jg = "write", zg = "afterWrite", Hg = [kg, Lg, Fg, Ng, Rg, Dg, Bg, jg, zg];
function kt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ot(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function zn(e) {
  var t = Ot(e).Element;
  return e instanceof t || e instanceof Element;
}
function ft(e) {
  var t = Ot(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function La(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ot(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Vg(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !ft(a) || !kt(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(i) {
      var s = o[i];
      s === !1 ? a.removeAttribute(i) : a.setAttribute(i, s === !0 ? "" : s);
    }));
  });
}
function qg(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, i = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), s = i.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !ft(o) || !kt(o) || (Object.assign(o.style, s), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var Xl = { name: "applyStyles", enabled: !0, phase: "write", fn: Vg, effect: qg, requires: ["computeStyles"] };
function At(e) {
  return e.split("-")[0];
}
var On = Math.max, so = Math.min, Hn = Math.round;
function Vn(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, o = 1;
  if (ft(e) && t) {
    var a = e.offsetHeight, i = e.offsetWidth;
    i > 0 && (r = Hn(n.width) / i || 1), a > 0 && (o = Hn(n.height) / a || 1);
  }
  return { width: n.width / r, height: n.height / o, top: n.top / o, right: n.right / r, bottom: n.bottom / o, left: n.left / r, x: n.left / r, y: n.top / o };
}
function Fa(e) {
  var t = Vn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function Jl(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && La(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Qt(e) {
  return Ot(e).getComputedStyle(e);
}
function Wg(e) {
  return ["table", "td", "th"].indexOf(kt(e)) >= 0;
}
function vn(e) {
  return ((zn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function wo(e) {
  return kt(e) === "html" ? e : e.assignedSlot || e.parentNode || (La(e) ? e.host : null) || vn(e);
}
function Gi(e) {
  return !ft(e) || Qt(e).position === "fixed" ? null : e.offsetParent;
}
function Kg(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && ft(e)) {
    var r = Qt(e);
    if (r.position === "fixed")
      return null;
  }
  var o = wo(e);
  for (La(o) && (o = o.host); ft(o) && ["html", "body"].indexOf(kt(o)) < 0; ) {
    var a = Qt(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Sr(e) {
  for (var t = Ot(e), n = Gi(e); n && Wg(n) && Qt(n).position === "static"; )
    n = Gi(n);
  return n && (kt(n) === "html" || kt(n) === "body" && Qt(n).position === "static") ? t : n || Kg(e) || t;
}
function Na(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ar(e, t, n) {
  return On(e, so(t, n));
}
function Ug(e, t, n) {
  var r = ar(e, t, n);
  return r > n ? n : r;
}
function Ql() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function eu(e) {
  return Object.assign({}, Ql(), e);
}
function tu(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Gg = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, eu(typeof e != "number" ? e : tu(e, wr));
};
function Yg(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, i = n.modifiersData.popperOffsets, s = At(n.placement), l = Na(s), u = [Ze, pt].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!a || !i)) {
    var f = Gg(o.padding, n), v = Fa(a), y = l === "y" ? Ye : Ze, g = l === "y" ? dt : pt, d = n.rects.reference[c] + n.rects.reference[l] - i[l] - n.rects.popper[c], h = i[l] - n.rects.reference[l], m = Sr(a), w = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, O = d / 2 - h / 2, C = f[y], I = w - v[c] - f[g], S = w / 2 - v[c] / 2 + O, T = ar(C, S, I), x = l;
    n.modifiersData[r] = (t = {}, t[x] = T, t.centerOffset = T - S, t);
  }
}
function Zg(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || !Jl(t.elements.popper, o) || (t.elements.arrow = o));
}
var Xg = { name: "arrow", enabled: !0, phase: "main", fn: Yg, effect: Zg, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function qn(e) {
  return e.split("-")[1];
}
var Jg = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Qg(e) {
  var t = e.x, n = e.y, r = window, o = r.devicePixelRatio || 1;
  return { x: Hn(t * o) / o || 0, y: Hn(n * o) / o || 0 };
}
function Yi(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, i = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, f = e.isFixed, v = i.x, y = v === void 0 ? 0 : v, g = i.y, d = g === void 0 ? 0 : g, h = typeof c == "function" ? c({ x: y, y: d }) : { x: y, y: d };
  y = h.x, d = h.y;
  var m = i.hasOwnProperty("x"), w = i.hasOwnProperty("y"), O = Ze, C = Ye, I = window;
  if (u) {
    var S = Sr(n), T = "clientHeight", x = "clientWidth";
    if (S === Ot(n) && (S = vn(n), Qt(S).position !== "static" && s === "absolute" && (T = "scrollHeight", x = "scrollWidth")), S = S, o === Ye || (o === Ze || o === pt) && a === pr) {
      C = dt;
      var j = f && S === I && I.visualViewport ? I.visualViewport.height : S[T];
      d -= j - r.height, d *= l ? 1 : -1;
    }
    if (o === Ze || (o === Ye || o === dt) && a === pr) {
      O = pt;
      var L = f && S === I && I.visualViewport ? I.visualViewport.width : S[x];
      y -= L - r.width, y *= l ? 1 : -1;
    }
  }
  var A = Object.assign({ position: s }, u && Jg), $ = c === !0 ? Qg({ x: y, y: d }) : { x: y, y: d };
  if (y = $.x, d = $.y, l) {
    var F;
    return Object.assign({}, A, (F = {}, F[C] = w ? "0" : "", F[O] = m ? "0" : "", F.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + d + "px)" : "translate3d(" + y + "px, " + d + "px, 0)", F));
  }
  return Object.assign({}, A, (t = {}, t[C] = w ? d + "px" : "", t[O] = m ? y + "px" : "", t.transform = "", t));
}
function ey(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, i = a === void 0 ? !0 : a, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = { placement: At(t.placement), variation: qn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Yi(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: i, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Yi(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var nu = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: ey, data: {} }, Mr = { passive: !0 };
function ty(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, i = r.resize, s = i === void 0 ? !0 : i, l = Ot(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, Mr);
  }), s && l.addEventListener("resize", n.update, Mr), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Mr);
    }), s && l.removeEventListener("resize", n.update, Mr);
  };
}
var ru = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: ty, data: {} }, ny = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Gr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ny[t];
  });
}
var ry = { start: "end", end: "start" };
function Zi(e) {
  return e.replace(/start|end/g, function(t) {
    return ry[t];
  });
}
function Ra(e) {
  var t = Ot(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Da(e) {
  return Vn(vn(e)).left + Ra(e).scrollLeft;
}
function oy(e) {
  var t = Ot(e), n = vn(e), r = t.visualViewport, o = n.clientWidth, a = n.clientHeight, i = 0, s = 0;
  return r && (o = r.width, a = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = r.offsetLeft, s = r.offsetTop)), { width: o, height: a, x: i + Da(e), y: s };
}
function ay(e) {
  var t, n = vn(e), r = Ra(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = On(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = On(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + Da(e), l = -r.scrollTop;
  return Qt(o || n).direction === "rtl" && (s += On(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: i, x: s, y: l };
}
function Ba(e) {
  var t = Qt(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function ou(e) {
  return ["html", "body", "#document"].indexOf(kt(e)) >= 0 ? e.ownerDocument.body : ft(e) && Ba(e) ? e : ou(wo(e));
}
function ir(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = ou(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Ot(r), i = o ? [a].concat(a.visualViewport || [], Ba(r) ? r : []) : r, s = t.concat(i);
  return o ? s : s.concat(ir(wo(i)));
}
function ia(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function iy(e) {
  var t = Vn(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Xi(e, t) {
  return t === Zl ? ia(oy(e)) : zn(t) ? iy(t) : ia(ay(vn(e)));
}
function sy(e) {
  var t = ir(wo(e)), n = ["absolute", "fixed"].indexOf(Qt(e).position) >= 0, r = n && ft(e) ? Sr(e) : e;
  return zn(r) ? t.filter(function(o) {
    return zn(o) && Jl(o, r) && kt(o) !== "body";
  }) : [];
}
function ly(e, t, n) {
  var r = t === "clippingParents" ? sy(e) : [].concat(t), o = [].concat(r, [n]), a = o[0], i = o.reduce(function(s, l) {
    var u = Xi(e, l);
    return s.top = On(u.top, s.top), s.right = so(u.right, s.right), s.bottom = so(u.bottom, s.bottom), s.left = On(u.left, s.left), s;
  }, Xi(e, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function au(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? At(r) : null, a = r ? qn(r) : null, i = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case Ye:
      l = { x: i, y: t.y - n.height };
      break;
    case dt:
      l = { x: i, y: t.y + t.height };
      break;
    case pt:
      l = { x: t.x + t.width, y: s };
      break;
    case Ze:
      l = { x: t.x - n.width, y: s };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? Na(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case jn:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case pr:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function vr(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.boundary, i = a === void 0 ? Mg : a, s = n.rootBoundary, l = s === void 0 ? Zl : s, u = n.elementContext, c = u === void 0 ? er : u, f = n.altBoundary, v = f === void 0 ? !1 : f, y = n.padding, g = y === void 0 ? 0 : y, d = eu(typeof g != "number" ? g : tu(g, wr)), h = c === er ? Pg : er, m = e.rects.popper, w = e.elements[v ? h : c], O = ly(zn(w) ? w : w.contextElement || vn(e.elements.popper), i, l), C = Vn(e.elements.reference), I = au({ reference: C, element: m, strategy: "absolute", placement: o }), S = ia(Object.assign({}, m, I)), T = c === er ? S : C, x = { top: O.top - T.top + d.top, bottom: T.bottom - O.bottom + d.bottom, left: O.left - T.left + d.left, right: T.right - O.right + d.right }, j = e.modifiersData.offset;
  if (c === er && j) {
    var L = j[o];
    Object.keys(x).forEach(function(A) {
      var $ = [pt, dt].indexOf(A) >= 0 ? 1 : -1, F = [Ye, dt].indexOf(A) >= 0 ? "y" : "x";
      x[A] += L[F] * $;
    });
  }
  return x;
}
function uy(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, i = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? bo : l, c = qn(r), f = c ? s ? Ui : Ui.filter(function(g) {
    return qn(g) === c;
  }) : wr, v = f.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  v.length === 0 && (v = f);
  var y = v.reduce(function(g, d) {
    return g[d] = vr(e, { placement: d, boundary: o, rootBoundary: a, padding: i })[At(d)], g;
  }, {});
  return Object.keys(y).sort(function(g, d) {
    return y[g] - y[d];
  });
}
function cy(e) {
  if (At(e) === ka)
    return [];
  var t = Gr(e);
  return [Zi(e), t, Zi(t)];
}
function fy(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, i = n.altAxis, s = i === void 0 ? !0 : i, l = n.fallbackPlacements, u = n.padding, c = n.boundary, f = n.rootBoundary, v = n.altBoundary, y = n.flipVariations, g = y === void 0 ? !0 : y, d = n.allowedAutoPlacements, h = t.options.placement, m = At(h), w = m === h, O = l || (w || !g ? [Gr(h)] : cy(h)), C = [h].concat(O).reduce(function(Ae, Fe) {
      return Ae.concat(At(Fe) === ka ? uy(t, { placement: Fe, boundary: c, rootBoundary: f, padding: u, flipVariations: g, allowedAutoPlacements: d }) : Fe);
    }, []), I = t.rects.reference, S = t.rects.popper, T = /* @__PURE__ */ new Map(), x = !0, j = C[0], L = 0; L < C.length; L++) {
      var A = C[L], $ = At(A), F = qn(A) === jn, K = [Ye, dt].indexOf($) >= 0, G = K ? "width" : "height", ie = vr(t, { placement: A, boundary: c, rootBoundary: f, altBoundary: v, padding: u }), R = K ? F ? pt : Ze : F ? dt : Ye;
      I[G] > S[G] && (R = Gr(R));
      var se = Gr(R), oe = [];
      if (a && oe.push(ie[$] <= 0), s && oe.push(ie[R] <= 0, ie[se] <= 0), oe.every(function(Ae) {
        return Ae;
      })) {
        j = A, x = !1;
        break;
      }
      T.set(A, oe);
    }
    if (x)
      for (var J = g ? 3 : 1, ue = function(Ae) {
        var Fe = C.find(function(Ke) {
          var W = T.get(Ke);
          if (W)
            return W.slice(0, Ae).every(function(Q) {
              return Q;
            });
        });
        if (Fe)
          return j = Fe, "break";
      }, le = J; le > 0; le--) {
        var _e = ue(le);
        if (_e === "break")
          break;
      }
    t.placement !== j && (t.modifiersData[r]._skip = !0, t.placement = j, t.reset = !0);
  }
}
var dy = { name: "flip", enabled: !0, phase: "main", fn: fy, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Ji(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Qi(e) {
  return [Ye, pt, dt, Ze].some(function(t) {
    return e[t] >= 0;
  });
}
function py(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, i = vr(t, { elementContext: "reference" }), s = vr(t, { altBoundary: !0 }), l = Ji(i, r), u = Ji(s, o, a), c = Qi(l), f = Qi(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: c, hasPopperEscaped: f }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": c, "data-popper-escaped": f });
}
var vy = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: py };
function my(e, t, n) {
  var r = At(e), o = [Ze, Ye].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, i = a[0], s = a[1];
  return i = i || 0, s = (s || 0) * o, [Ze, pt].indexOf(r) >= 0 ? { x: s, y: i } : { x: i, y: s };
}
function hy(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, i = bo.reduce(function(c, f) {
    return c[f] = my(f, t.rects, a), c;
  }, {}), s = i[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = i;
}
var gy = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: hy };
function yy(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = au({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var iu = { name: "popperOffsets", enabled: !0, phase: "read", fn: yy, data: {} };
function by(e) {
  return e === "x" ? "y" : "x";
}
function wy(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, i = n.altAxis, s = i === void 0 ? !1 : i, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, f = n.padding, v = n.tether, y = v === void 0 ? !0 : v, g = n.tetherOffset, d = g === void 0 ? 0 : g, h = vr(t, { boundary: l, rootBoundary: u, padding: f, altBoundary: c }), m = At(t.placement), w = qn(t.placement), O = !w, C = Na(m), I = by(C), S = t.modifiersData.popperOffsets, T = t.rects.reference, x = t.rects.popper, j = typeof d == "function" ? d(Object.assign({}, t.rects, { placement: t.placement })) : d, L = typeof j == "number" ? { mainAxis: j, altAxis: j } : Object.assign({ mainAxis: 0, altAxis: 0 }, j), A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, $ = { x: 0, y: 0 };
  if (S) {
    if (a) {
      var F, K = C === "y" ? Ye : Ze, G = C === "y" ? dt : pt, ie = C === "y" ? "height" : "width", R = S[C], se = R + h[K], oe = R - h[G], J = y ? -x[ie] / 2 : 0, ue = w === jn ? T[ie] : x[ie], le = w === jn ? -x[ie] : -T[ie], _e = t.elements.arrow, Ae = y && _e ? Fa(_e) : { width: 0, height: 0 }, Fe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ql(), Ke = Fe[K], W = Fe[G], Q = ar(0, T[ie], Ae[ie]), Oe = O ? T[ie] / 2 - J - Q - Ke - L.mainAxis : ue - Q - Ke - L.mainAxis, pe = O ? -T[ie] / 2 + J + Q + W + L.mainAxis : le + Q + W + L.mainAxis, ge = t.elements.arrow && Sr(t.elements.arrow), Ne = ge ? C === "y" ? ge.clientTop || 0 : ge.clientLeft || 0 : 0, _t = (F = A == null ? void 0 : A[C]) != null ? F : 0, Ct = R + Oe - _t - Ne, Dt = R + pe - _t, Bt = ar(y ? so(se, Ct) : se, R, y ? On(oe, Dt) : oe);
      S[C] = Bt, $[C] = Bt - R;
    }
    if (s) {
      var Xe, on = C === "x" ? Ye : Ze, mn = C === "x" ? dt : pt, Je = S[I], it = I === "y" ? "height" : "width", jt = Je + h[on], an = Je - h[mn], $t = [Ye, Ze].indexOf(m) !== -1, k = (Xe = A == null ? void 0 : A[I]) != null ? Xe : 0, X = $t ? jt : Je - T[it] - x[it] - k + L.altAxis, ye = $t ? Je + T[it] + x[it] - k - L.altAxis : an, st = y && $t ? Ug(X, Je, ye) : ar(y ? X : jt, Je, y ? ye : an);
      S[I] = st, $[I] = st - Je;
    }
    t.modifiersData[r] = $;
  }
}
var Sy = { name: "preventOverflow", enabled: !0, phase: "main", fn: wy, requiresIfExists: ["offset"] };
function Ey(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Ty(e) {
  return e === Ot(e) || !ft(e) ? Ra(e) : Ey(e);
}
function Oy(e) {
  var t = e.getBoundingClientRect(), n = Hn(t.width) / e.offsetWidth || 1, r = Hn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function _y(e, t, n) {
  n === void 0 && (n = !1);
  var r = ft(t), o = ft(t) && Oy(t), a = vn(t), i = Vn(e, o), s = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((kt(t) !== "body" || Ba(a)) && (s = Ty(t)), ft(t) ? (l = Vn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Da(a))), { x: i.left + s.scrollLeft - l.x, y: i.top + s.scrollTop - l.y, width: i.width, height: i.height };
}
function Cy(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    n.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function(s) {
      if (!n.has(s)) {
        var l = t.get(s);
        l && o(l);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || o(a);
  }), r;
}
function $y(e) {
  var t = Cy(e);
  return Hg.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function xy(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Iy(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var es = { placement: "bottom", modifiers: [], strategy: "absolute" };
function ts() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function ja(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? es : o;
  return function(i, s, l) {
    l === void 0 && (l = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, es, a), modifiersData: {}, elements: { reference: i, popper: s }, attributes: {}, styles: {} }, c = [], f = !1, v = { state: u, setOptions: function(d) {
      var h = typeof d == "function" ? d(u.options) : d;
      g(), u.options = Object.assign({}, a, u.options, h), u.scrollParents = { reference: zn(i) ? ir(i) : i.contextElement ? ir(i.contextElement) : [], popper: ir(s) };
      var m = $y(Iy([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = m.filter(function(w) {
        return w.enabled;
      }), y(), v.update();
    }, forceUpdate: function() {
      if (!f) {
        var d = u.elements, h = d.reference, m = d.popper;
        if (ts(h, m)) {
          u.rects = { reference: _y(h, Sr(m), u.options.strategy === "fixed"), popper: Fa(m) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(x) {
            return u.modifiersData[x.name] = Object.assign({}, x.data);
          });
          for (var w = 0; w < u.orderedModifiers.length; w++) {
            if (u.reset === !0) {
              u.reset = !1, w = -1;
              continue;
            }
            var O = u.orderedModifiers[w], C = O.fn, I = O.options, S = I === void 0 ? {} : I, T = O.name;
            typeof C == "function" && (u = C({ state: u, options: S, name: T, instance: v }) || u);
          }
        }
      }
    }, update: xy(function() {
      return new Promise(function(d) {
        v.forceUpdate(), d(u);
      });
    }), destroy: function() {
      g(), f = !0;
    } };
    if (!ts(i, s))
      return v;
    v.setOptions(l).then(function(d) {
      !f && l.onFirstUpdate && l.onFirstUpdate(d);
    });
    function y() {
      u.orderedModifiers.forEach(function(d) {
        var h = d.name, m = d.options, w = m === void 0 ? {} : m, O = d.effect;
        if (typeof O == "function") {
          var C = O({ state: u, name: h, instance: v, options: w }), I = function() {
          };
          c.push(C || I);
        }
      });
    }
    function g() {
      c.forEach(function(d) {
        return d();
      }), c = [];
    }
    return v;
  };
}
ja();
var Ay = [ru, iu, nu, Xl];
ja({ defaultModifiers: Ay });
var My = [ru, iu, nu, Xl, gy, dy, Sy, Xg, vy], Py = ja({ defaultModifiers: My });
const ky = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = Ly(l);
      Object.assign(i.value, u);
    },
    requires: ["computeStyles"]
  }, o = b(() => {
    const { onFirstUpdate: l, placement: u, strategy: c, modifiers: f } = p(n);
    return {
      onFirstUpdate: l,
      placement: u || "bottom",
      strategy: c || "absolute",
      modifiers: [
        ...f || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = ut(), i = _({
    styles: {
      popper: {
        position: p(o).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), s = () => {
    a.value && (a.value.destroy(), a.value = void 0);
  };
  return U(o, (l) => {
    const u = p(a);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), U([e, t], ([l, u]) => {
    s(), !(!l || !u) && (a.value = Py(l, u, p(o)));
  }), Ve(() => {
    s();
  }), {
    state: b(() => {
      var l;
      return { ...((l = p(a)) == null ? void 0 : l.state) || {} };
    }),
    styles: b(() => p(i).styles),
    attributes: b(() => p(i).attributes),
    update: () => {
      var l;
      return (l = p(a)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = p(a)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: b(() => p(a))
  };
};
function Ly(e) {
  const t = Object.keys(e.elements), n = ao(t.map((o) => [o, e.styles[o] || {}])), r = ao(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const su = (e) => {
  if (!e)
    return { onClick: Gt, onMousedown: Gt, onMouseup: Gt };
  let t = !1, n = !1;
  return { onClick: (i) => {
    t && n && e(i), t = n = !1;
  }, onMousedown: (i) => {
    t = i.target === i.currentTarget;
  }, onMouseup: (i) => {
    n = i.target === i.currentTarget;
  } };
};
function ns() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return co(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const sa = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Fy = Symbol("elIdInjection"), lu = () => Pe() ? ne(Fy, sa) : sa, mr = (e) => {
  const t = lu();
  !$e && t === sa && Re("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Pa();
  return b(() => p(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let Ln = [];
const rs = (e) => {
  const t = e;
  t.key === ze.esc && Ln.forEach((n) => n(t));
}, Ny = (e) => {
  Te(() => {
    Ln.length === 0 && document.addEventListener("keydown", rs), $e && Ln.push(e);
  }), Ve(() => {
    Ln = Ln.filter((t) => t !== e), Ln.length === 0 && $e && document.removeEventListener("keydown", rs);
  });
};
let os;
const uu = () => {
  const e = Pa(), t = lu(), n = b(() => `${e.value}-popper-container-${t.prefix}`), r = b(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, Ry = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Dy = () => {
  const { id: e, selector: t } = uu();
  return Gu(() => {
    $e && (process.env.NODE_ENV === "test" || !os && !document.body.querySelector(t.value)) && (os = Ry(e.value));
  }), {
    id: e,
    selector: t
  };
}, By = he({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
}), jy = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = ns(), {
    registerTimeout: i,
    cancelTimeout: s
  } = ns();
  return {
    onOpen: (c) => {
      a(() => {
        r(c);
        const f = p(n);
        wt(f) && f > 0 && i(() => {
          o(c);
        }, f);
      }, p(e));
    },
    onClose: (c) => {
      s(), a(() => {
        o(c);
      }, p(t));
    }
  };
}, cu = Symbol("elForwardRef"), zy = (e) => {
  Be(cu, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Hy = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), as = _(0), Vy = 2e3, qy = Symbol("zIndexContextKey"), fu = (e) => {
  const t = e || (Pe() ? ne(qy, void 0) : void 0), n = b(() => {
    const a = p(t);
    return wt(a) ? a : Vy;
  }), r = b(() => n.value + as.value);
  return {
    initialZIndex: n,
    currentZIndex: r,
    nextZIndex: () => (as.value++, r.value)
  };
};
function Wy(e) {
  const t = _();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: o, selectionEnd: a, value: i } = e.value;
    if (o == null || a == null)
      return;
    const s = i.slice(0, Math.max(0, o)), l = i.slice(Math.max(0, a));
    t.value = {
      selectionStart: o,
      selectionEnd: a,
      value: i,
      beforeTxt: s,
      afterTxt: l
    };
  }
  function r() {
    if (e.value == null || t.value == null)
      return;
    const { value: o } = e.value, { beforeTxt: a, afterTxt: i, selectionStart: s } = t.value;
    if (a == null || i == null || s == null)
      return;
    let l = o.length;
    if (o.endsWith(i))
      l = o.length - i.length;
    else if (o.startsWith(a))
      l = a.length;
    else {
      const u = a[s - 1], c = o.indexOf(u, s - 1);
      c !== -1 && (l = c + 1);
    }
    e.value.setSelectionRange(l, l);
  }
  return [n, r];
}
const Ky = ho({
  type: String,
  values: br,
  required: !1
}), Uy = Symbol("size"), Gy = () => {
  const e = ne(Uy, {});
  return b(() => p(e.size) || "");
};
function Yy(e, { afterFocus: t, afterBlur: n } = {}) {
  const r = Pe(), { emit: o } = r, a = ut(), i = _(!1), s = (c) => {
    i.value || (i.value = !0, o("focus", c), t == null || t());
  }, l = (c) => {
    var f;
    c.relatedTarget && ((f = a.value) != null && f.contains(c.relatedTarget)) || (i.value = !1, o("blur", c), n == null || n());
  }, u = () => {
    var c;
    (c = e.value) == null || c.focus();
  };
  return U(a, (c) => {
    c && c.setAttribute("tabindex", "-1");
  }), Tn(a, "click", u), {
    wrapperRef: a,
    isFocused: i,
    handleFocus: s,
    handleBlur: l
  };
}
const Zy = Symbol(), is = _();
function Xy(e, t = void 0) {
  const n = Pe() ? ne(Zy, is) : is;
  return e ? b(() => {
    var r, o;
    return (o = (r = n.value) == null ? void 0 : r[e]) != null ? o : t;
  }) : n;
}
var ve = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const Jy = he({
  size: {
    type: te([Number, String])
  },
  color: {
    type: String
  }
}), Qy = B({
  name: "ElIcon",
  inheritAttrs: !1
}), e0 = /* @__PURE__ */ B({
  ...Qy,
  props: Jy,
  setup(e) {
    const t = e, n = fe("icon"), r = b(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: Hm(o) ? void 0 : Jt(o),
        "--color": a
      };
    });
    return (o, a) => (M(), V("i", St({
      class: p(n).b(),
      style: p(r)
    }, o.$attrs), [
      Z(o.$slots, "default")
    ], 16));
  }
});
var t0 = /* @__PURE__ */ ve(e0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const bt = mt(t0), Zn = Symbol("formContextKey"), $n = Symbol("formItemContextKey"), Er = (e, t = {}) => {
  const n = _(void 0), r = t.prop ? n : Yl("size"), o = t.global ? n : Gy(), a = t.form ? { size: void 0 } : ne(Zn, void 0), i = t.formItem ? { size: void 0 } : ne($n, void 0);
  return b(() => r.value || p(e) || (i == null ? void 0 : i.size) || (a == null ? void 0 : a.size) || o.value || "");
}, n0 = (e) => {
  const t = Yl("disabled"), n = ne(Zn, void 0);
  return b(() => t.value || p(e) || (n == null ? void 0 : n.disabled) || !1);
}, du = () => {
  const e = ne(Zn, void 0), t = ne($n, void 0);
  return {
    form: e,
    formItem: t
  };
}, r0 = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = _(!1)), r || (r = _(!1));
  const o = _();
  let a;
  const i = b(() => {
    var s;
    return !!(!e.label && t && t.inputIds && ((s = t.inputIds) == null ? void 0 : s.length) <= 1);
  });
  return Te(() => {
    a = U([xt(e, "id"), n], ([s, l]) => {
      const u = s ?? (l ? void 0 : mr().value);
      u !== o.value && (t != null && t.removeInputId && (o.value && t.removeInputId(o.value), !(r != null && r.value) && !l && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), Yu(() => {
    a && a(), t != null && t.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: i,
    inputId: o
  };
}, o0 = he({
  size: {
    type: String,
    values: br
  },
  disabled: Boolean
}), a0 = he({
  ...o0,
  model: Object,
  rules: {
    type: te(Object)
  },
  labelPosition: {
    type: String,
    values: ["left", "right", "top"],
    default: "right"
  },
  requireAsteriskPosition: {
    type: String,
    values: ["left", "right"],
    default: "left"
  },
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  labelSuffix: {
    type: String,
    default: ""
  },
  inline: Boolean,
  inlineMessage: Boolean,
  statusIcon: Boolean,
  showMessage: {
    type: Boolean,
    default: !0
  },
  validateOnRuleChange: {
    type: Boolean,
    default: !0
  },
  hideRequiredAsterisk: Boolean,
  scrollToError: Boolean,
  scrollIntoViewOptions: {
    type: [Object, Boolean]
  }
}), i0 = {
  validate: (e, t, n) => (Rn(e) || Le(e)) && Gn(t) && Le(n)
}, s0 = "ElForm";
function l0() {
  const e = _([]), t = b(() => {
    if (!e.value.length)
      return "0";
    const a = Math.max(...e.value);
    return a ? `${a}px` : "";
  });
  function n(a) {
    const i = e.value.indexOf(a);
    return i === -1 && t.value === "0" && Re(s0, `unexpected width ${a}`), i;
  }
  function r(a, i) {
    if (a && i) {
      const s = n(i);
      e.value.splice(s, 1, a);
    } else
      a && e.value.push(a);
  }
  function o(a) {
    const i = n(a);
    i > -1 && e.value.splice(i, 1);
  }
  return {
    autoLabelWidth: t,
    registerLabelWidth: r,
    deregisterLabelWidth: o
  };
}
const Pr = (e, t) => {
  const n = Jo(t);
  return n.length > 0 ? e.filter((r) => r.prop && n.includes(r.prop)) : e;
}, Yr = "ElForm", u0 = B({
  name: Yr
}), c0 = /* @__PURE__ */ B({
  ...u0,
  props: a0,
  emits: i0,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = [], a = Er(), i = fe("form"), s = b(() => {
      const { labelPosition: w, inline: O } = r;
      return [
        i.b(),
        i.m(a.value || "default"),
        {
          [i.m(`label-${w}`)]: w,
          [i.m("inline")]: O
        }
      ];
    }), l = (w) => {
      o.push(w);
    }, u = (w) => {
      w.prop && o.splice(o.indexOf(w), 1);
    }, c = (w = []) => {
      if (!r.model) {
        Re(Yr, "model is required for resetFields to work.");
        return;
      }
      Pr(o, w).forEach((O) => O.resetField());
    }, f = (w = []) => {
      Pr(o, w).forEach((O) => O.clearValidate());
    }, v = b(() => {
      const w = !!r.model;
      return w || Re(Yr, "model is required for validate to work."), w;
    }), y = (w) => {
      if (o.length === 0)
        return [];
      const O = Pr(o, w);
      return O.length ? O : (Re(Yr, "please pass correct props!"), []);
    }, g = async (w) => h(void 0, w), d = async (w = []) => {
      if (!v.value)
        return !1;
      const O = y(w);
      if (O.length === 0)
        return !0;
      let C = {};
      for (const I of O)
        try {
          await I.validate("");
        } catch (S) {
          C = {
            ...C,
            ...S
          };
        }
      return Object.keys(C).length === 0 ? !0 : Promise.reject(C);
    }, h = async (w = [], O) => {
      const C = !We(O);
      try {
        const I = await d(w);
        return I === !0 && (O == null || O(I)), I;
      } catch (I) {
        if (I instanceof Error)
          throw I;
        const S = I;
        return r.scrollToError && m(Object.keys(S)[0]), O == null || O(!1, S), C && Promise.reject(S);
      }
    }, m = (w) => {
      var O;
      const C = Pr(o, w)[0];
      C && ((O = C.$el) == null || O.scrollIntoView(r.scrollIntoViewOptions));
    };
    return U(() => r.rules, () => {
      r.validateOnRuleChange && g().catch((w) => Re(w));
    }, { deep: !0 }), Be(Zn, Lt({
      ...yr(r),
      emit: n,
      resetFields: c,
      clearValidate: f,
      validateField: h,
      addField: l,
      removeField: u,
      ...l0()
    })), t({
      validate: g,
      validateField: h,
      resetFields: c,
      clearValidate: f,
      scrollToField: m
    }), (w, O) => (M(), V("form", {
      class: D(p(s))
    }, [
      Z(w.$slots, "default")
    ], 2));
  }
});
var f0 = /* @__PURE__ */ ve(c0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);
function bn() {
  return bn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, bn.apply(this, arguments);
}
function d0(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, hr(e, t);
}
function la(e) {
  return la = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, la(e);
}
function hr(e, t) {
  return hr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, hr(e, t);
}
function p0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Zr(e, t, n) {
  return p0() ? Zr = Reflect.construct.bind() : Zr = function(o, a, i) {
    var s = [null];
    s.push.apply(s, a);
    var l = Function.bind.apply(o, s), u = new l();
    return i && hr(u, i.prototype), u;
  }, Zr.apply(null, arguments);
}
function v0(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function ua(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return ua = function(r) {
    if (r === null || !v0(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, o);
    }
    function o() {
      return Zr(r, arguments, la(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), hr(o, r);
  }, ua(e);
}
var m0 = /%[sdj%]/g, pu = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (pu = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function ca(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function at(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var o = 0, a = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var i = e.replace(m0, function(s) {
      if (s === "%%")
        return "%";
      if (o >= a)
        return s;
      switch (s) {
        case "%s":
          return String(n[o++]);
        case "%d":
          return Number(n[o++]);
        case "%j":
          try {
            return JSON.stringify(n[o++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return i;
  }
  return e;
}
function h0(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Me(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || h0(t) && typeof e == "string" && !e);
}
function g0(e, t, n) {
  var r = [], o = 0, a = e.length;
  function i(s) {
    r.push.apply(r, s || []), o++, o === a && n(r);
  }
  e.forEach(function(s) {
    t(s, i);
  });
}
function ss(e, t, n) {
  var r = 0, o = e.length;
  function a(i) {
    if (i && i.length) {
      n(i);
      return;
    }
    var s = r;
    r = r + 1, s < o ? t(e[s], a) : n([]);
  }
  a([]);
}
function y0(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || []);
  }), t;
}
var ls = /* @__PURE__ */ function(e) {
  d0(t, e);
  function t(n, r) {
    var o;
    return o = e.call(this, "Async Validation Error") || this, o.errors = n, o.fields = r, o;
  }
  return t;
}(/* @__PURE__ */ ua(Error));
function b0(e, t, n, r, o) {
  if (t.first) {
    var a = new Promise(function(v, y) {
      var g = function(m) {
        return r(m), m.length ? y(new ls(m, ca(m))) : v(o);
      }, d = y0(e);
      ss(d, n, g);
    });
    return a.catch(function(v) {
      return v;
    }), a;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), l = s.length, u = 0, c = [], f = new Promise(function(v, y) {
    var g = function(h) {
      if (c.push.apply(c, h), u++, u === l)
        return r(c), c.length ? y(new ls(c, ca(c))) : v(o);
    };
    s.length || (r(c), v(o)), s.forEach(function(d) {
      var h = e[d];
      i.indexOf(d) !== -1 ? ss(h, n, g) : g0(h, n, g);
    });
  });
  return f.catch(function(v) {
    return v;
  }), f;
}
function w0(e) {
  return !!(e && e.message !== void 0);
}
function S0(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function us(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = S0(t, e.fullFields) : r = t[n.field || e.fullField], w0(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function cs(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == "object" && typeof e[n] == "object" ? e[n] = bn({}, e[n], r) : e[n] = r;
      }
  }
  return e;
}
var vu = function(t, n, r, o, a, i) {
  t.required && (!r.hasOwnProperty(t.field) || Me(n, i || t.type)) && o.push(at(a.messages.required, t.fullField));
}, E0 = function(t, n, r, o, a) {
  (/^\s+$/.test(n) || n === "") && o.push(at(a.messages.whitespace, t.fullField));
}, kr, T0 = function() {
  if (kr)
    return kr;
  var e = "[a-fA-F\\d:]", t = function(C) {
    return C && C.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", o = (`
(?:
(?:` + r + ":){7}(?:" + r + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + r + ":){6}(?:" + n + "|:" + r + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + r + ":){5}(?::" + n + "|(?::" + r + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + r + ":){4}(?:(?::" + r + "){0,1}:" + n + "|(?::" + r + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + r + ":){3}(?:(?::" + r + "){0,2}:" + n + "|(?::" + r + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + r + ":){2}(?:(?::" + r + "){0,3}:" + n + "|(?::" + r + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + r + ":){1}(?:(?::" + r + "){0,4}:" + n + "|(?::" + r + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + r + "){0,5}:" + n + "|(?::" + r + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), a = new RegExp("(?:^" + n + "$)|(?:^" + o + "$)"), i = new RegExp("^" + n + "$"), s = new RegExp("^" + o + "$"), l = function(C) {
    return C && C.exact ? a : new RegExp("(?:" + t(C) + n + t(C) + ")|(?:" + t(C) + o + t(C) + ")", "g");
  };
  l.v4 = function(O) {
    return O && O.exact ? i : new RegExp("" + t(O) + n + t(O), "g");
  }, l.v6 = function(O) {
    return O && O.exact ? s : new RegExp("" + t(O) + o + t(O), "g");
  };
  var u = "(?:(?:[a-z]+:)?//)", c = "(?:\\S+(?::\\S*)?@)?", f = l.v4().source, v = l.v6().source, y = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", g = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", d = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", h = "(?::\\d{2,5})?", m = '(?:[/?#][^\\s"]*)?', w = "(?:" + u + "|www\\.)" + c + "(?:localhost|" + f + "|" + v + "|" + y + g + d + ")" + h + m;
  return kr = new RegExp("(?:^" + w + "$)", "i"), kr;
}, fs = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, rr = {
  integer: function(t) {
    return rr.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return rr.number(t) && !rr.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return typeof t == "object" && !rr.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(fs.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(T0());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(fs.hex);
  }
}, O0 = function(t, n, r, o, a) {
  if (t.required && n === void 0) {
    vu(t, n, r, o, a);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  i.indexOf(s) > -1 ? rr[s](n) || o.push(at(a.messages.types[s], t.fullField, t.type)) : s && typeof n !== t.type && o.push(at(a.messages.types[s], t.fullField, t.type));
}, _0 = function(t, n, r, o, a) {
  var i = typeof t.len == "number", s = typeof t.min == "number", l = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = n, f = null, v = typeof n == "number", y = typeof n == "string", g = Array.isArray(n);
  if (v ? f = "number" : y ? f = "string" : g && (f = "array"), !f)
    return !1;
  g && (c = n.length), y && (c = n.replace(u, "_").length), i ? c !== t.len && o.push(at(a.messages[f].len, t.fullField, t.len)) : s && !l && c < t.min ? o.push(at(a.messages[f].min, t.fullField, t.min)) : l && !s && c > t.max ? o.push(at(a.messages[f].max, t.fullField, t.max)) : s && l && (c < t.min || c > t.max) && o.push(at(a.messages[f].range, t.fullField, t.min, t.max));
}, Pn = "enum", C0 = function(t, n, r, o, a) {
  t[Pn] = Array.isArray(t[Pn]) ? t[Pn] : [], t[Pn].indexOf(n) === -1 && o.push(at(a.messages[Pn], t.fullField, t[Pn].join(", ")));
}, $0 = function(t, n, r, o, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || o.push(at(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(n) || o.push(at(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, ce = {
  required: vu,
  whitespace: E0,
  type: O0,
  range: _0,
  enum: C0,
  pattern: $0
}, x0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Me(n, "string") && !t.required)
      return r();
    ce.required(t, n, o, i, a, "string"), Me(n, "string") || (ce.type(t, n, o, i, a), ce.range(t, n, o, i, a), ce.pattern(t, n, o, i, a), t.whitespace === !0 && ce.whitespace(t, n, o, i, a));
  }
  r(i);
}, I0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Me(n) && !t.required)
      return r();
    ce.required(t, n, o, i, a), n !== void 0 && ce.type(t, n, o, i, a);
  }
  r(i);
}, A0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (n === "" && (n = void 0), Me(n) && !t.required)
      return r();
    ce.required(t, n, o, i, a), n !== void 0 && (ce.type(t, n, o, i, a), ce.range(t, n, o, i, a));
  }
  r(i);
}, M0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Me(n) && !t.required)
      return r();
    ce.required(t, n, o, i, a), n !== void 0 && ce.type(t, n, o, i, a);
  }
  r(i);
}, P0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Me(n) && !t.required)
      return r();
    ce.required(t, n, o, i, a), Me(n) || ce.type(t, n, o, i, a);
  }
  r(i);
}, k0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Me(n) && !t.required)
      return r();
    ce.required(t, n, o, i, a), n !== void 0 && (ce.type(t, n, o, i, a), ce.range(t, n, o, i, a));
  }
  r(i);
}, L0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Me(n) && !t.required)
      return r();
    ce.required(t, n, o, i, a), n !== void 0 && (ce.type(t, n, o, i, a), ce.range(t, n, o, i, a));
  }
  r(i);
}, F0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (n == null && !t.required)
      return r();
    ce.required(t, n, o, i, a, "array"), n != null && (ce.type(t, n, o, i, a), ce.range(t, n, o, i, a));
  }
  r(i);
}, N0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Me(n) && !t.required)
      return r();
    ce.required(t, n, o, i, a), n !== void 0 && ce.type(t, n, o, i, a);
  }
  r(i);
}, R0 = "enum", D0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Me(n) && !t.required)
      return r();
    ce.required(t, n, o, i, a), n !== void 0 && ce[R0](t, n, o, i, a);
  }
  r(i);
}, B0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Me(n, "string") && !t.required)
      return r();
    ce.required(t, n, o, i, a), Me(n, "string") || ce.pattern(t, n, o, i, a);
  }
  r(i);
}, j0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Me(n, "date") && !t.required)
      return r();
    if (ce.required(t, n, o, i, a), !Me(n, "date")) {
      var l;
      n instanceof Date ? l = n : l = new Date(n), ce.type(t, l, o, i, a), l && ce.range(t, l.getTime(), o, i, a);
    }
  }
  r(i);
}, z0 = function(t, n, r, o, a) {
  var i = [], s = Array.isArray(n) ? "array" : typeof n;
  ce.required(t, n, o, i, a, s), r(i);
}, Ro = function(t, n, r, o, a) {
  var i = t.type, s = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Me(n, i) && !t.required)
      return r();
    ce.required(t, n, o, s, a, i), Me(n, i) || ce.type(t, n, o, s, a);
  }
  r(s);
}, H0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Me(n) && !t.required)
      return r();
    ce.required(t, n, o, i, a);
  }
  r(i);
}, sr = {
  string: x0,
  method: I0,
  number: A0,
  boolean: M0,
  regexp: P0,
  integer: k0,
  float: L0,
  array: F0,
  object: N0,
  enum: D0,
  pattern: B0,
  date: j0,
  url: Ro,
  hex: Ro,
  email: Ro,
  required: z0,
  any: H0
};
function fa() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var da = fa(), Tr = /* @__PURE__ */ function() {
  function e(n) {
    this.rules = null, this._messages = da, this.define(n);
  }
  var t = e.prototype;
  return t.define = function(r) {
    var o = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(a) {
      var i = r[a];
      o.rules[a] = Array.isArray(i) ? i : [i];
    });
  }, t.messages = function(r) {
    return r && (this._messages = cs(fa(), r)), this._messages;
  }, t.validate = function(r, o, a) {
    var i = this;
    o === void 0 && (o = {}), a === void 0 && (a = function() {
    });
    var s = r, l = o, u = a;
    if (typeof l == "function" && (u = l, l = {}), !this.rules || Object.keys(this.rules).length === 0)
      return u && u(null, s), Promise.resolve(s);
    function c(d) {
      var h = [], m = {};
      function w(C) {
        if (Array.isArray(C)) {
          var I;
          h = (I = h).concat.apply(I, C);
        } else
          h.push(C);
      }
      for (var O = 0; O < d.length; O++)
        w(d[O]);
      h.length ? (m = ca(h), u(h, m)) : u(null, s);
    }
    if (l.messages) {
      var f = this.messages();
      f === da && (f = fa()), cs(f, l.messages), l.messages = f;
    } else
      l.messages = this.messages();
    var v = {}, y = l.keys || Object.keys(this.rules);
    y.forEach(function(d) {
      var h = i.rules[d], m = s[d];
      h.forEach(function(w) {
        var O = w;
        typeof O.transform == "function" && (s === r && (s = bn({}, s)), m = s[d] = O.transform(m)), typeof O == "function" ? O = {
          validator: O
        } : O = bn({}, O), O.validator = i.getValidationMethod(O), O.validator && (O.field = d, O.fullField = O.fullField || d, O.type = i.getType(O), v[d] = v[d] || [], v[d].push({
          rule: O,
          value: m,
          source: s,
          field: d
        }));
      });
    });
    var g = {};
    return b0(v, l, function(d, h) {
      var m = d.rule, w = (m.type === "object" || m.type === "array") && (typeof m.fields == "object" || typeof m.defaultField == "object");
      w = w && (m.required || !m.required && d.value), m.field = d.field;
      function O(S, T) {
        return bn({}, T, {
          fullField: m.fullField + "." + S,
          fullFields: m.fullFields ? [].concat(m.fullFields, [S]) : [S]
        });
      }
      function C(S) {
        S === void 0 && (S = []);
        var T = Array.isArray(S) ? S : [S];
        !l.suppressWarning && T.length && e.warning("async-validator:", T), T.length && m.message !== void 0 && (T = [].concat(m.message));
        var x = T.map(us(m, s));
        if (l.first && x.length)
          return g[m.field] = 1, h(x);
        if (!w)
          h(x);
        else {
          if (m.required && !d.value)
            return m.message !== void 0 ? x = [].concat(m.message).map(us(m, s)) : l.error && (x = [l.error(m, at(l.messages.required, m.field))]), h(x);
          var j = {};
          m.defaultField && Object.keys(d.value).map(function($) {
            j[$] = m.defaultField;
          }), j = bn({}, j, d.rule.fields);
          var L = {};
          Object.keys(j).forEach(function($) {
            var F = j[$], K = Array.isArray(F) ? F : [F];
            L[$] = K.map(O.bind(null, $));
          });
          var A = new e(L);
          A.messages(l.messages), d.rule.options && (d.rule.options.messages = l.messages, d.rule.options.error = l.error), A.validate(d.value, d.rule.options || l, function($) {
            var F = [];
            x && x.length && F.push.apply(F, x), $ && $.length && F.push.apply(F, $), h(F.length ? F : null);
          });
        }
      }
      var I;
      if (m.asyncValidator)
        I = m.asyncValidator(m, d.value, C, d.source, l);
      else if (m.validator) {
        try {
          I = m.validator(m, d.value, C, d.source, l);
        } catch (S) {
          console.error == null || console.error(S), l.suppressValidatorError || setTimeout(function() {
            throw S;
          }, 0), C(S.message);
        }
        I === !0 ? C() : I === !1 ? C(typeof m.message == "function" ? m.message(m.fullField || m.field) : m.message || (m.fullField || m.field) + " fails") : I instanceof Array ? C(I) : I instanceof Error && C(I.message);
      }
      I && I.then && I.then(function() {
        return C();
      }, function(S) {
        return C(S);
      });
    }, function(d) {
      c(d);
    }, s);
  }, t.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !sr.hasOwnProperty(r.type))
      throw new Error(at("Unknown rule type %s", r.type));
    return r.type || "string";
  }, t.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var o = Object.keys(r), a = o.indexOf("message");
    return a !== -1 && o.splice(a, 1), o.length === 1 && o[0] === "required" ? sr.required : sr[this.getType(r)] || void 0;
  }, e;
}();
Tr.register = function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  sr[t] = n;
};
Tr.warning = pu;
Tr.messages = da;
Tr.validators = sr;
const V0 = [
  "",
  "error",
  "validating",
  "success"
], q0 = he({
  label: String,
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  prop: {
    type: te([String, Array])
  },
  required: {
    type: Boolean,
    default: void 0
  },
  rules: {
    type: te([Object, Array])
  },
  error: String,
  validateStatus: {
    type: String,
    values: V0
  },
  for: String,
  inlineMessage: {
    type: [String, Boolean],
    default: ""
  },
  showMessage: {
    type: Boolean,
    default: !0
  },
  size: {
    type: String,
    values: br
  }
}), ds = "ElLabelWrap";
var W0 = B({
  name: ds,
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  setup(e, {
    slots: t
  }) {
    const n = ne(Zn, void 0), r = ne($n);
    r || Cn(ds, "usage: <el-form-item><label-wrap /></el-form-item>");
    const o = fe("form"), a = _(), i = _(0), s = () => {
      var c;
      if ((c = a.value) != null && c.firstElementChild) {
        const f = window.getComputedStyle(a.value.firstElementChild).width;
        return Math.ceil(Number.parseFloat(f));
      } else
        return 0;
    }, l = (c = "update") => {
      me(() => {
        t.default && e.isAutoWidth && (c === "update" ? i.value = s() : c === "remove" && (n == null || n.deregisterLabelWidth(i.value)));
      });
    }, u = () => l("update");
    return Te(() => {
      u();
    }), Ve(() => {
      l("remove");
    }), ya(() => u()), U(i, (c, f) => {
      e.updateAll && (n == null || n.registerLabelWidth(c, f));
    }), Kn(b(() => {
      var c, f;
      return (f = (c = a.value) == null ? void 0 : c.firstElementChild) != null ? f : null;
    }), u), () => {
      var c, f;
      if (!t)
        return null;
      const {
        isAutoWidth: v
      } = e;
      if (v) {
        const y = n == null ? void 0 : n.autoLabelWidth, g = r == null ? void 0 : r.hasLabel, d = {};
        if (g && y && y !== "auto") {
          const h = Math.max(0, Number.parseInt(y, 10) - i.value), m = n.labelPosition === "left" ? "marginRight" : "marginLeft";
          h && (d[m] = `${h}px`);
        }
        return N("div", {
          ref: a,
          class: [o.be("item", "label-wrap")],
          style: d
        }, [(c = t.default) == null ? void 0 : c.call(t)]);
      } else
        return N(He, {
          ref: a
        }, [(f = t.default) == null ? void 0 : f.call(t)]);
    };
  }
});
const K0 = ["role", "aria-labelledby"], U0 = B({
  name: "ElFormItem"
}), G0 = /* @__PURE__ */ B({
  ...U0,
  props: q0,
  setup(e, { expose: t }) {
    const n = e, r = ba(), o = ne(Zn, void 0), a = ne($n, void 0), i = Er(void 0, { formItem: !1 }), s = fe("form-item"), l = mr().value, u = _([]), c = _(""), f = bc(c, 100), v = _(""), y = _();
    let g, d = !1;
    const h = b(() => {
      if ((o == null ? void 0 : o.labelPosition) === "top")
        return {};
      const W = Jt(n.labelWidth || (o == null ? void 0 : o.labelWidth) || "");
      return W ? { width: W } : {};
    }), m = b(() => {
      if ((o == null ? void 0 : o.labelPosition) === "top" || o != null && o.inline)
        return {};
      if (!n.label && !n.labelWidth && j)
        return {};
      const W = Jt(n.labelWidth || (o == null ? void 0 : o.labelWidth) || "");
      return !n.label && !r.label ? { marginLeft: W } : {};
    }), w = b(() => [
      s.b(),
      s.m(i.value),
      s.is("error", c.value === "error"),
      s.is("validating", c.value === "validating"),
      s.is("success", c.value === "success"),
      s.is("required", K.value || n.required),
      s.is("no-asterisk", o == null ? void 0 : o.hideRequiredAsterisk),
      (o == null ? void 0 : o.requireAsteriskPosition) === "right" ? "asterisk-right" : "asterisk-left",
      { [s.m("feedback")]: o == null ? void 0 : o.statusIcon }
    ]), O = b(() => Gn(n.inlineMessage) ? n.inlineMessage : (o == null ? void 0 : o.inlineMessage) || !1), C = b(() => [
      s.e("error"),
      { [s.em("error", "inline")]: O.value }
    ]), I = b(() => n.prop ? Le(n.prop) ? n.prop : n.prop.join(".") : ""), S = b(() => !!(n.label || r.label)), T = b(() => n.for || u.value.length === 1 ? u.value[0] : void 0), x = b(() => !T.value && S.value), j = !!a, L = b(() => {
      const W = o == null ? void 0 : o.model;
      if (!(!W || !n.prop))
        return No(W, n.prop).value;
    }), A = b(() => {
      const { required: W } = n, Q = [];
      n.rules && Q.push(...Jo(n.rules));
      const Oe = o == null ? void 0 : o.rules;
      if (Oe && n.prop) {
        const pe = No(Oe, n.prop).value;
        pe && Q.push(...Jo(pe));
      }
      if (W !== void 0) {
        const pe = Q.map((ge, Ne) => [ge, Ne]).filter(([ge]) => Object.keys(ge).includes("required"));
        if (pe.length > 0)
          for (const [ge, Ne] of pe)
            ge.required !== W && (Q[Ne] = { ...ge, required: W });
        else
          Q.push({ required: W });
      }
      return Q;
    }), $ = b(() => A.value.length > 0), F = (W) => A.value.filter((Oe) => !Oe.trigger || !W ? !0 : Array.isArray(Oe.trigger) ? Oe.trigger.includes(W) : Oe.trigger === W).map(({ trigger: Oe, ...pe }) => pe), K = b(() => A.value.some((W) => W.required)), G = b(() => {
      var W;
      return f.value === "error" && n.showMessage && ((W = o == null ? void 0 : o.showMessage) != null ? W : !0);
    }), ie = b(() => `${n.label || ""}${(o == null ? void 0 : o.labelSuffix) || ""}`), R = (W) => {
      c.value = W;
    }, se = (W) => {
      var Q, Oe;
      const { errors: pe, fields: ge } = W;
      (!pe || !ge) && console.error(W), R("error"), v.value = pe ? (Oe = (Q = pe == null ? void 0 : pe[0]) == null ? void 0 : Q.message) != null ? Oe : `${n.prop} is required` : "", o == null || o.emit("validate", n.prop, !1, v.value);
    }, oe = () => {
      R("success"), o == null || o.emit("validate", n.prop, !0, "");
    }, J = async (W) => {
      const Q = I.value;
      return new Tr({
        [Q]: W
      }).validate({ [Q]: L.value }, { firstFields: !0 }).then(() => (oe(), !0)).catch((pe) => (se(pe), Promise.reject(pe)));
    }, ue = async (W, Q) => {
      if (d || !n.prop)
        return !1;
      const Oe = We(Q);
      if (!$.value)
        return Q == null || Q(!1), !1;
      const pe = F(W);
      return pe.length === 0 ? (Q == null || Q(!0), !0) : (R("validating"), J(pe).then(() => (Q == null || Q(!0), !0)).catch((ge) => {
        const { fields: Ne } = ge;
        return Q == null || Q(!1, Ne), Oe ? !1 : Promise.reject(Ne);
      }));
    }, le = () => {
      R(""), v.value = "", d = !1;
    }, _e = async () => {
      const W = o == null ? void 0 : o.model;
      if (!W || !n.prop)
        return;
      const Q = No(W, n.prop);
      d = !0, Q.value = Fi(g), await me(), le(), d = !1;
    }, Ae = (W) => {
      u.value.includes(W) || u.value.push(W);
    }, Fe = (W) => {
      u.value = u.value.filter((Q) => Q !== W);
    };
    U(() => n.error, (W) => {
      v.value = W || "", R(W ? "error" : "");
    }, { immediate: !0 }), U(() => n.validateStatus, (W) => R(W || ""));
    const Ke = Lt({
      ...yr(n),
      $el: y,
      size: i,
      validateState: c,
      labelId: l,
      inputIds: u,
      isGroup: x,
      hasLabel: S,
      addInputId: Ae,
      removeInputId: Fe,
      resetField: _e,
      clearValidate: le,
      validate: ue
    });
    return Be($n, Ke), Te(() => {
      n.prop && (o == null || o.addField(Ke), g = Fi(L.value));
    }), Ve(() => {
      o == null || o.removeField(Ke);
    }), t({
      size: i,
      validateMessage: v,
      validateState: c,
      validate: ue,
      clearValidate: le,
      resetField: _e
    }), (W, Q) => {
      var Oe;
      return M(), V("div", {
        ref_key: "formItemRef",
        ref: y,
        class: D(p(w)),
        role: p(x) ? "group" : void 0,
        "aria-labelledby": p(x) ? p(l) : void 0
      }, [
        N(p(W0), {
          "is-auto-width": p(h).width === "auto",
          "update-all": ((Oe = p(o)) == null ? void 0 : Oe.labelWidth) === "auto"
        }, {
          default: H(() => [
            p(S) ? (M(), re(Ut(p(T) ? "label" : "div"), {
              key: 0,
              id: p(l),
              for: p(T),
              class: D(p(s).e("label")),
              style: Ie(p(h))
            }, {
              default: H(() => [
                Z(W.$slots, "label", { label: p(ie) }, () => [
                  En(Ee(p(ie)), 1)
                ])
              ]),
              _: 3
            }, 8, ["id", "for", "class", "style"])) : ee("v-if", !0)
          ]),
          _: 3
        }, 8, ["is-auto-width", "update-all"]),
        q("div", {
          class: D(p(s).e("content")),
          style: Ie(p(m))
        }, [
          Z(W.$slots, "default"),
          N(Zu, {
            name: `${p(s).namespace.value}-zoom-in-top`
          }, {
            default: H(() => [
              p(G) ? Z(W.$slots, "error", {
                key: 0,
                error: v.value
              }, () => [
                q("div", {
                  class: D(p(C))
                }, Ee(v.value), 3)
              ]) : ee("v-if", !0)
            ]),
            _: 3
          }, 8, ["name"])
        ], 6)
      ], 10, K0);
    };
  }
});
var mu = /* @__PURE__ */ ve(G0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);
const hu = mt(f0, {
  FormItem: mu
});
Yn(mu);
let gt;
const Y0 = `
  height:0 !important;
  visibility:hidden !important;
  ${Mc() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, Z0 = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function X0(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Z0.map((i) => `${i}:${t.getPropertyValue(i)}`).join(";"), paddingSize: r, borderSize: o, boxSizing: n };
}
function ps(e, t = 1, n) {
  var r;
  gt || (gt = document.createElement("textarea"), document.body.appendChild(gt));
  const { paddingSize: o, borderSize: a, boxSizing: i, contextStyle: s } = X0(e);
  gt.setAttribute("style", `${s};${Y0}`), gt.value = e.value || e.placeholder || "";
  let l = gt.scrollHeight;
  const u = {};
  i === "border-box" ? l = l + a : i === "content-box" && (l = l - o), gt.value = "";
  const c = gt.scrollHeight - o;
  if (wt(t)) {
    let f = c * t;
    i === "border-box" && (f = f + o + a), l = Math.max(f, l), u.minHeight = `${f}px`;
  }
  if (wt(n)) {
    let f = c * n;
    i === "border-box" && (f = f + o + a), l = Math.min(f, l);
  }
  return u.height = `${l}px`, (r = gt.parentNode) == null || r.removeChild(gt), gt = void 0, u;
}
const J0 = he({
  id: {
    type: String,
    default: void 0
  },
  size: Ky,
  disabled: Boolean,
  modelValue: {
    type: te([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: te([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  showPassword: {
    type: Boolean,
    default: !1
  },
  showWordLimit: {
    type: Boolean,
    default: !1
  },
  suffixIcon: {
    type: It
  },
  prefixIcon: {
    type: It
  },
  containerRole: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: te([Object, Array, String]),
    default: () => Wl({})
  }
}), Q0 = {
  [ot]: (e) => Le(e),
  input: (e) => Le(e),
  change: (e) => Le(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, eb = ["role"], tb = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"], nb = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"], rb = B({
  name: "ElInput",
  inheritAttrs: !1
}), ob = /* @__PURE__ */ B({
  ...rb,
  props: J0,
  emits: Q0,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = Xu(), a = ba(), i = b(() => {
      const k = {};
      return r.containerRole === "combobox" && (k["aria-haspopup"] = o["aria-haspopup"], k["aria-owns"] = o["aria-owns"], k["aria-expanded"] = o["aria-expanded"]), k;
    }), s = b(() => [
      r.type === "textarea" ? h.b() : d.b(),
      d.m(y.value),
      d.is("disabled", g.value),
      d.is("exceed", Ae.value),
      {
        [d.b("group")]: a.prepend || a.append,
        [d.bm("group", "append")]: a.append,
        [d.bm("group", "prepend")]: a.prepend,
        [d.m("prefix")]: a.prefix || r.prefixIcon,
        [d.m("suffix")]: a.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [d.bm("suffix", "password-clear")]: J.value && ue.value
      },
      o.class
    ]), l = b(() => [
      d.e("wrapper"),
      d.is("focus", L.value)
    ]), u = cg({
      excludeKeys: b(() => Object.keys(i.value))
    }), { form: c, formItem: f } = du(), { inputId: v } = r0(r, {
      formItemContext: f
    }), y = Er(), g = n0(), d = fe("input"), h = fe("textarea"), m = ut(), w = ut(), O = _(!1), C = _(!1), I = _(!1), S = _(), T = ut(r.inputStyle), x = b(() => m.value || w.value), { wrapperRef: j, isFocused: L, handleFocus: A, handleBlur: $ } = Yy(x, {
      afterBlur() {
        var k;
        r.validateEvent && ((k = f == null ? void 0 : f.validate) == null || k.call(f, "blur").catch((X) => Re(X)));
      }
    }), F = b(() => {
      var k;
      return (k = c == null ? void 0 : c.statusIcon) != null ? k : !1;
    }), K = b(() => (f == null ? void 0 : f.validateState) || ""), G = b(() => K.value && Hl[K.value]), ie = b(() => I.value ? eg : Ah), R = b(() => [
      o.style,
      r.inputStyle
    ]), se = b(() => [
      r.inputStyle,
      T.value,
      { resize: r.resize }
    ]), oe = b(() => Bn(r.modelValue) ? "" : String(r.modelValue)), J = b(() => r.clearable && !g.value && !r.readonly && !!oe.value && (L.value || O.value)), ue = b(() => r.showPassword && !g.value && !r.readonly && !!oe.value && (!!oe.value || L.value)), le = b(() => r.showWordLimit && !!u.value.maxlength && (r.type === "text" || r.type === "textarea") && !g.value && !r.readonly && !r.showPassword), _e = b(() => oe.value.length), Ae = b(() => !!le.value && _e.value > Number(u.value.maxlength)), Fe = b(() => !!a.suffix || !!r.suffixIcon || J.value || r.showPassword || le.value || !!K.value && F.value), [Ke, W] = Wy(m);
    Kn(w, (k) => {
      if (pe(), !le.value || r.resize !== "both")
        return;
      const X = k[0], { width: ye } = X.contentRect;
      S.value = {
        right: `calc(100% - ${ye + 15 + 6}px)`
      };
    });
    const Q = () => {
      const { type: k, autosize: X } = r;
      if (!(!$e || k !== "textarea" || !w.value))
        if (X) {
          const ye = Zt(X) ? X.minRows : void 0, st = Zt(X) ? X.maxRows : void 0, zt = ps(w.value, ye, st);
          T.value = {
            overflowY: "hidden",
            ...zt
          }, me(() => {
            w.value.offsetHeight, T.value = zt;
          });
        } else
          T.value = {
            minHeight: ps(w.value).minHeight
          };
    }, pe = ((k) => {
      let X = !1;
      return () => {
        var ye;
        if (X || !r.autosize)
          return;
        ((ye = w.value) == null ? void 0 : ye.offsetParent) === null || (k(), X = !0);
      };
    })(Q), ge = () => {
      const k = x.value, X = r.formatter ? r.formatter(oe.value) : oe.value;
      !k || k.value === X || (k.value = X);
    }, Ne = async (k) => {
      Ke();
      let { value: X } = k.target;
      if (r.formatter && (X = r.parser ? r.parser(X) : X), !C.value) {
        if (X === oe.value) {
          ge();
          return;
        }
        n(ot, X), n("input", X), await me(), ge(), W();
      }
    }, _t = (k) => {
      n("change", k.target.value);
    }, Ct = (k) => {
      n("compositionstart", k), C.value = !0;
    }, Dt = (k) => {
      var X;
      n("compositionupdate", k);
      const ye = (X = k.target) == null ? void 0 : X.value, st = ye[ye.length - 1] || "";
      C.value = !ql(st);
    }, Bt = (k) => {
      n("compositionend", k), C.value && (C.value = !1, Ne(k));
    }, Xe = () => {
      I.value = !I.value, on();
    }, on = async () => {
      var k;
      await me(), (k = x.value) == null || k.focus();
    }, mn = () => {
      var k;
      return (k = x.value) == null ? void 0 : k.blur();
    }, Je = (k) => {
      O.value = !1, n("mouseleave", k);
    }, it = (k) => {
      O.value = !0, n("mouseenter", k);
    }, jt = (k) => {
      n("keydown", k);
    }, an = () => {
      var k;
      (k = x.value) == null || k.select();
    }, $t = () => {
      n(ot, ""), n("change", ""), n("clear"), n("input", "");
    };
    return U(() => r.modelValue, () => {
      var k;
      me(() => Q()), r.validateEvent && ((k = f == null ? void 0 : f.validate) == null || k.call(f, "change").catch((X) => Re(X)));
    }), U(oe, () => ge()), U(() => r.type, async () => {
      await me(), ge(), Q();
    }), Te(() => {
      !r.formatter && r.parser && Re("ElInput", "If you set the parser, you also need to set the formatter."), ge(), me(Q);
    }), t({
      input: m,
      textarea: w,
      ref: x,
      textareaStyle: se,
      autosize: xt(r, "autosize"),
      focus: on,
      blur: mn,
      select: an,
      clear: $t,
      resizeTextarea: Q
    }), (k, X) => ct((M(), V("div", St(p(i), {
      class: p(s),
      style: p(R),
      role: k.containerRole,
      onMouseenter: it,
      onMouseleave: Je
    }), [
      ee(" input "),
      k.type !== "textarea" ? (M(), V(He, { key: 0 }, [
        ee(" prepend slot "),
        k.$slots.prepend ? (M(), V("div", {
          key: 0,
          class: D(p(d).be("group", "prepend"))
        }, [
          Z(k.$slots, "prepend")
        ], 2)) : ee("v-if", !0),
        q("div", {
          ref_key: "wrapperRef",
          ref: j,
          class: D(p(l))
        }, [
          ee(" prefix slot "),
          k.$slots.prefix || k.prefixIcon ? (M(), V("span", {
            key: 0,
            class: D(p(d).e("prefix"))
          }, [
            q("span", {
              class: D(p(d).e("prefix-inner"))
            }, [
              Z(k.$slots, "prefix"),
              k.prefixIcon ? (M(), re(p(bt), {
                key: 0,
                class: D(p(d).e("icon"))
              }, {
                default: H(() => [
                  (M(), re(Ut(k.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0)
            ], 2)
          ], 2)) : ee("v-if", !0),
          q("input", St({
            id: p(v),
            ref_key: "input",
            ref: m,
            class: p(d).e("inner")
          }, p(u), {
            type: k.showPassword ? I.value ? "text" : "password" : k.type,
            disabled: p(g),
            formatter: k.formatter,
            parser: k.parser,
            readonly: k.readonly,
            autocomplete: k.autocomplete,
            tabindex: k.tabindex,
            "aria-label": k.label,
            placeholder: k.placeholder,
            style: k.inputStyle,
            form: r.form,
            onCompositionstart: Ct,
            onCompositionupdate: Dt,
            onCompositionend: Bt,
            onInput: Ne,
            onFocus: X[0] || (X[0] = (...ye) => p(A) && p(A)(...ye)),
            onBlur: X[1] || (X[1] = (...ye) => p($) && p($)(...ye)),
            onChange: _t,
            onKeydown: jt
          }), null, 16, tb),
          ee(" suffix slot "),
          p(Fe) ? (M(), V("span", {
            key: 1,
            class: D(p(d).e("suffix"))
          }, [
            q("span", {
              class: D(p(d).e("suffix-inner"))
            }, [
              !p(J) || !p(ue) || !p(le) ? (M(), V(He, { key: 0 }, [
                Z(k.$slots, "suffix"),
                k.suffixIcon ? (M(), re(p(bt), {
                  key: 0,
                  class: D(p(d).e("icon"))
                }, {
                  default: H(() => [
                    (M(), re(Ut(k.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : ee("v-if", !0)
              ], 64)) : ee("v-if", !0),
              p(J) ? (M(), re(p(bt), {
                key: 1,
                class: D([p(d).e("icon"), p(d).e("clear")]),
                onMousedown: Ce(p(Gt), ["prevent"]),
                onClick: $t
              }, {
                default: H(() => [
                  N(p(Ma))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : ee("v-if", !0),
              p(ue) ? (M(), re(p(bt), {
                key: 2,
                class: D([p(d).e("icon"), p(d).e("password")]),
                onClick: Xe
              }, {
                default: H(() => [
                  (M(), re(Ut(p(ie))))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0),
              p(le) ? (M(), V("span", {
                key: 3,
                class: D(p(d).e("count"))
              }, [
                q("span", {
                  class: D(p(d).e("count-inner"))
                }, Ee(p(_e)) + " / " + Ee(p(u).maxlength), 3)
              ], 2)) : ee("v-if", !0),
              p(K) && p(G) && p(F) ? (M(), re(p(bt), {
                key: 4,
                class: D([
                  p(d).e("icon"),
                  p(d).e("validateIcon"),
                  p(d).is("loading", p(K) === "validating")
                ])
              }, {
                default: H(() => [
                  (M(), re(Ut(p(G))))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0)
            ], 2)
          ], 2)) : ee("v-if", !0)
        ], 2),
        ee(" append slot "),
        k.$slots.append ? (M(), V("div", {
          key: 1,
          class: D(p(d).be("group", "append"))
        }, [
          Z(k.$slots, "append")
        ], 2)) : ee("v-if", !0)
      ], 64)) : (M(), V(He, { key: 1 }, [
        ee(" textarea "),
        q("textarea", St({
          id: p(v),
          ref_key: "textarea",
          ref: w,
          class: p(h).e("inner")
        }, p(u), {
          tabindex: k.tabindex,
          disabled: p(g),
          readonly: k.readonly,
          autocomplete: k.autocomplete,
          style: p(se),
          "aria-label": k.label,
          placeholder: k.placeholder,
          form: r.form,
          onCompositionstart: Ct,
          onCompositionupdate: Dt,
          onCompositionend: Bt,
          onInput: Ne,
          onFocus: X[2] || (X[2] = (...ye) => p(A) && p(A)(...ye)),
          onBlur: X[3] || (X[3] = (...ye) => p($) && p($)(...ye)),
          onChange: _t,
          onKeydown: jt
        }), null, 16, nb),
        p(le) ? (M(), V("span", {
          key: 0,
          style: Ie(S.value),
          class: D(p(d).e("count"))
        }, Ee(p(_e)) + " / " + Ee(p(u).maxlength), 7)) : ee("v-if", !0)
      ], 64))
    ], 16, eb)), [
      [en, k.type !== "hidden"]
    ]);
  }
});
var ab = /* @__PURE__ */ ve(ob, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const za = mt(ab), Fn = 4, ib = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, sb = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), gu = Symbol("scrollbarContextKey"), lb = he({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), ub = "Thumb", cb = /* @__PURE__ */ B({
  __name: "thumb",
  props: lb,
  setup(e) {
    const t = e, n = ne(gu), r = fe("scrollbar");
    n || Cn(ub, "can not inject scrollbar context");
    const o = _(), a = _(), i = _({}), s = _(!1);
    let l = !1, u = !1, c = $e ? document.onselectstart : null;
    const f = b(() => ib[t.vertical ? "vertical" : "horizontal"]), v = b(() => sb({
      size: t.size,
      move: t.move,
      bar: f.value
    })), y = b(() => o.value[f.value.offset] ** 2 / n.wrapElement[f.value.scrollSize] / t.ratio / a.value[f.value.offset]), g = (S) => {
      var T;
      if (S.stopPropagation(), S.ctrlKey || [1, 2].includes(S.button))
        return;
      (T = window.getSelection()) == null || T.removeAllRanges(), h(S);
      const x = S.currentTarget;
      x && (i.value[f.value.axis] = x[f.value.offset] - (S[f.value.client] - x.getBoundingClientRect()[f.value.direction]));
    }, d = (S) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const T = Math.abs(S.target.getBoundingClientRect()[f.value.direction] - S[f.value.client]), x = a.value[f.value.offset] / 2, j = (T - x) * 100 * y.value / o.value[f.value.offset];
      n.wrapElement[f.value.scroll] = j * n.wrapElement[f.value.scrollSize] / 100;
    }, h = (S) => {
      S.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", m), document.addEventListener("mouseup", w), c = document.onselectstart, document.onselectstart = () => !1;
    }, m = (S) => {
      if (!o.value || !a.value || l === !1)
        return;
      const T = i.value[f.value.axis];
      if (!T)
        return;
      const x = (o.value.getBoundingClientRect()[f.value.direction] - S[f.value.client]) * -1, j = a.value[f.value.offset] - T, L = (x - j) * 100 * y.value / o.value[f.value.offset];
      n.wrapElement[f.value.scroll] = L * n.wrapElement[f.value.scrollSize] / 100;
    }, w = () => {
      l = !1, i.value[f.value.axis] = 0, document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", w), I(), u && (s.value = !1);
    }, O = () => {
      u = !1, s.value = !!t.size;
    }, C = () => {
      u = !0, s.value = l;
    };
    Ve(() => {
      I(), document.removeEventListener("mouseup", w);
    });
    const I = () => {
      document.onselectstart !== c && (document.onselectstart = c);
    };
    return Tn(xt(n, "scrollbarElement"), "mousemove", O), Tn(xt(n, "scrollbarElement"), "mouseleave", C), (S, T) => (M(), re(fn, {
      name: p(r).b("fade"),
      persisted: ""
    }, {
      default: H(() => [
        ct(q("div", {
          ref_key: "instance",
          ref: o,
          class: D([p(r).e("bar"), p(r).is(p(f).key)]),
          onMousedown: d
        }, [
          q("div", {
            ref_key: "thumb",
            ref: a,
            class: D(p(r).e("thumb")),
            style: Ie(p(v)),
            onMousedown: g
          }, null, 38)
        ], 34), [
          [en, S.always || s.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var vs = /* @__PURE__ */ ve(cb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const fb = he({
  always: {
    type: Boolean,
    default: !0
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
}), db = /* @__PURE__ */ B({
  __name: "bar",
  props: fb,
  setup(e, { expose: t }) {
    const n = e, r = _(0), o = _(0);
    return t({
      handleScroll: (i) => {
        if (i) {
          const s = i.offsetHeight - Fn, l = i.offsetWidth - Fn;
          o.value = i.scrollTop * 100 / s * n.ratioY, r.value = i.scrollLeft * 100 / l * n.ratioX;
        }
      }
    }), (i, s) => (M(), V(He, null, [
      N(vs, {
        move: r.value,
        ratio: i.ratioX,
        size: i.width,
        always: i.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      N(vs, {
        move: o.value,
        ratio: i.ratioY,
        size: i.height,
        vertical: "",
        always: i.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var pb = /* @__PURE__ */ ve(db, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const vb = he({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: !1
  },
  wrapStyle: {
    type: te([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  }
}), mb = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(wt)
}, pa = "ElScrollbar", hb = B({
  name: pa
}), gb = /* @__PURE__ */ B({
  ...hb,
  props: vb,
  emits: mb,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = fe("scrollbar");
    let a, i;
    const s = _(), l = _(), u = _(), c = _("0"), f = _("0"), v = _(), y = _(1), g = _(1), d = b(() => {
      const T = {};
      return r.height && (T.height = Jt(r.height)), r.maxHeight && (T.maxHeight = Jt(r.maxHeight)), [r.wrapStyle, T];
    }), h = b(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), m = b(() => [o.e("view"), r.viewClass]), w = () => {
      var T;
      l.value && ((T = v.value) == null || T.handleScroll(l.value), n("scroll", {
        scrollTop: l.value.scrollTop,
        scrollLeft: l.value.scrollLeft
      }));
    };
    function O(T, x) {
      Zt(T) ? l.value.scrollTo(T) : wt(T) && wt(x) && l.value.scrollTo(T, x);
    }
    const C = (T) => {
      if (!wt(T)) {
        Re(pa, "value must be a number");
        return;
      }
      l.value.scrollTop = T;
    }, I = (T) => {
      if (!wt(T)) {
        Re(pa, "value must be a number");
        return;
      }
      l.value.scrollLeft = T;
    }, S = () => {
      if (!l.value)
        return;
      const T = l.value.offsetHeight - Fn, x = l.value.offsetWidth - Fn, j = T ** 2 / l.value.scrollHeight, L = x ** 2 / l.value.scrollWidth, A = Math.max(j, r.minSize), $ = Math.max(L, r.minSize);
      y.value = j / (T - j) / (A / (T - A)), g.value = L / (x - L) / ($ / (x - $)), f.value = A + Fn < T ? `${A}px` : "", c.value = $ + Fn < x ? `${$}px` : "";
    };
    return U(() => r.noresize, (T) => {
      T ? (a == null || a(), i == null || i()) : ({ stop: a } = Kn(u, S), i = Tn("resize", S));
    }, { immediate: !0 }), U(() => [r.maxHeight, r.height], () => {
      r.native || me(() => {
        var T;
        S(), l.value && ((T = v.value) == null || T.handleScroll(l.value));
      });
    }), Be(gu, Lt({
      scrollbarElement: s,
      wrapElement: l
    })), Te(() => {
      r.native || me(() => {
        S();
      });
    }), ya(() => S()), t({
      wrapRef: l,
      update: S,
      scrollTo: O,
      setScrollTop: C,
      setScrollLeft: I,
      handleScroll: w
    }), (T, x) => (M(), V("div", {
      ref_key: "scrollbarRef",
      ref: s,
      class: D(p(o).b())
    }, [
      q("div", {
        ref_key: "wrapRef",
        ref: l,
        class: D(p(h)),
        style: Ie(p(d)),
        onScroll: w
      }, [
        (M(), re(Ut(T.tag), {
          ref_key: "resizeRef",
          ref: u,
          class: D(p(m)),
          style: Ie(T.viewStyle)
        }, {
          default: H(() => [
            Z(T.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      T.native ? ee("v-if", !0) : (M(), re(pb, {
        key: 0,
        ref_key: "barRef",
        ref: v,
        height: f.value,
        width: c.value,
        always: T.always,
        "ratio-x": g.value,
        "ratio-y": y.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var yb = /* @__PURE__ */ ve(gb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const bb = mt(yb), Ha = Symbol("popper"), yu = Symbol("popperContent"), wb = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], bu = he({
  role: {
    type: String,
    values: wb,
    default: "tooltip"
  }
}), Sb = B({
  name: "ElPopper",
  inheritAttrs: !1
}), Eb = /* @__PURE__ */ B({
  ...Sb,
  props: bu,
  setup(e, { expose: t }) {
    const n = e, r = _(), o = _(), a = _(), i = _(), s = b(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: i,
      role: s
    };
    return t(l), Be(Ha, l), (u, c) => Z(u.$slots, "default");
  }
});
var Tb = /* @__PURE__ */ ve(Eb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const wu = he({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Ob = B({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), _b = /* @__PURE__ */ B({
  ...Ob,
  props: wu,
  setup(e, { expose: t }) {
    const n = e, r = fe("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: i } = ne(yu, void 0);
    return U(() => n.arrowOffset, (s) => {
      o.value = s;
    }), Ve(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (s, l) => (M(), V("span", {
      ref_key: "arrowRef",
      ref: a,
      class: D(p(r).e("arrow")),
      style: Ie(p(i)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Cb = /* @__PURE__ */ ve(_b, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const Do = "ElOnlyChild", $b = B({
  name: Do,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = ne(cu), a = Hy((r = o == null ? void 0 : o.setForwardRef) != null ? r : Gt);
    return () => {
      var i;
      const s = (i = t.default) == null ? void 0 : i.call(t, n);
      if (!s)
        return null;
      if (s.length > 1)
        return Re(Do, "requires exact only one valid child."), null;
      const l = Su(s);
      return l ? ct(Ju(l, n), [[a]]) : (Re(Do, "no valid child node found"), null);
    };
  }
});
function Su(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Zt(n))
      switch (n.type) {
        case ec:
          continue;
        case Qu:
        case "svg":
          return ms(n);
        case He:
          return Su(n.children);
        default:
          return n;
      }
    return ms(n);
  }
  return null;
}
function ms(e) {
  const t = fe("only-child");
  return N("span", {
    class: t.e("content")
  }, [e]);
}
const Eu = he({
  virtualRef: {
    type: te(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: te(Function)
  },
  onMouseleave: {
    type: te(Function)
  },
  onClick: {
    type: te(Function)
  },
  onKeydown: {
    type: te(Function)
  },
  onFocus: {
    type: te(Function)
  },
  onBlur: {
    type: te(Function)
  },
  onContextmenu: {
    type: te(Function)
  },
  id: String,
  open: Boolean
}), xb = B({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), Ib = /* @__PURE__ */ B({
  ...xb,
  props: Eu,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = ne(Ha, void 0);
    zy(o);
    const a = b(() => s.value ? n.id : void 0), i = b(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), s = b(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), l = b(() => s.value ? `${n.open}` : void 0);
    let u;
    return Te(() => {
      U(() => n.virtualRef, (c) => {
        c && (o.value = un(c));
      }, {
        immediate: !0
      }), U(o, (c, f) => {
        u == null || u(), u = void 0, dr(c) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((v) => {
          var y;
          const g = n[v];
          g && (c.addEventListener(v.slice(2).toLowerCase(), g), (y = f == null ? void 0 : f.removeEventListener) == null || y.call(f, v.slice(2).toLowerCase(), g));
        }), u = U([a, i, s, l], (v) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((y, g) => {
            Bn(v[g]) ? c.removeAttribute(y) : c.setAttribute(y, v[g]);
          });
        }, { immediate: !0 })), dr(f) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((v) => f.removeAttribute(v));
      }, {
        immediate: !0
      });
    }), Ve(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: o
    }), (c, f) => c.virtualTriggering ? ee("v-if", !0) : (M(), re(p($b), St({ key: 0 }, c.$attrs, {
      "aria-controls": p(a),
      "aria-describedby": p(i),
      "aria-expanded": p(l),
      "aria-haspopup": p(s)
    }), {
      default: H(() => [
        Z(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var Ab = /* @__PURE__ */ ve(Ib, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const Bo = "focus-trap.focus-after-trapped", jo = "focus-trap.focus-after-released", Mb = "focus-trap.focusout-prevented", hs = {
  cancelable: !0,
  bubbles: !1
}, Pb = {
  cancelable: !0,
  bubbles: !1
}, gs = "focusAfterTrapped", ys = "focusAfterReleased", Tu = Symbol("elFocusTrap"), Va = _(), So = _(0), qa = _(0);
let Lr = 0;
const Ou = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, bs = (e, t) => {
  for (const n of e)
    if (!kb(n, t))
      return n;
}, kb = (e, t) => {
  if (process.env.NODE_ENV === "test")
    return !1;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, Lb = (e) => {
  const t = Ou(e), n = bs(t, e), r = bs(t.reverse(), e);
  return [n, r];
}, Fb = (e) => e instanceof HTMLInputElement && "select" in e, sn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), qa.value = window.performance.now(), e !== n && Fb(e) && t && e.select();
  }
};
function ws(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const Nb = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = ws(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = ws(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, Rb = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (sn(r, t), document.activeElement !== n)
      return;
}, Ss = Nb(), Db = () => So.value > qa.value, Fr = () => {
  Va.value = "pointer", So.value = window.performance.now();
}, Es = () => {
  Va.value = "keyboard", So.value = window.performance.now();
}, Bb = () => (Te(() => {
  Lr === 0 && (document.addEventListener("mousedown", Fr), document.addEventListener("touchstart", Fr), document.addEventListener("keydown", Es)), Lr++;
}), Ve(() => {
  Lr--, Lr <= 0 && (document.removeEventListener("mousedown", Fr), document.removeEventListener("touchstart", Fr), document.removeEventListener("keydown", Es));
}), {
  focusReason: Va,
  lastUserFocusTimestamp: So,
  lastAutomatedFocusTimestamp: qa
}), Nr = (e) => new CustomEvent(Mb, {
  ...Pb,
  detail: e
}), jb = B({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    gs,
    ys,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = _();
    let r, o;
    const { focusReason: a } = Bb();
    Ny((g) => {
      e.trapped && !i.paused && t("release-requested", g);
    });
    const i = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, s = (g) => {
      if (!e.loop && !e.trapped || i.paused)
        return;
      const { key: d, altKey: h, ctrlKey: m, metaKey: w, currentTarget: O, shiftKey: C } = g, { loop: I } = e, S = d === ze.tab && !h && !m && !w, T = document.activeElement;
      if (S && T) {
        const x = O, [j, L] = Lb(x);
        if (j && L) {
          if (!C && T === L) {
            const $ = Nr({
              focusReason: a.value
            });
            t("focusout-prevented", $), $.defaultPrevented || (g.preventDefault(), I && sn(j, !0));
          } else if (C && [j, x].includes(T)) {
            const $ = Nr({
              focusReason: a.value
            });
            t("focusout-prevented", $), $.defaultPrevented || (g.preventDefault(), I && sn(L, !0));
          }
        } else if (T === x) {
          const $ = Nr({
            focusReason: a.value
          });
          t("focusout-prevented", $), $.defaultPrevented || g.preventDefault();
        }
      }
    };
    Be(Tu, {
      focusTrapRef: n,
      onKeydown: s
    }), U(() => e.focusTrapEl, (g) => {
      g && (n.value = g);
    }, { immediate: !0 }), U([n], ([g], [d]) => {
      g && (g.addEventListener("keydown", s), g.addEventListener("focusin", c), g.addEventListener("focusout", f)), d && (d.removeEventListener("keydown", s), d.removeEventListener("focusin", c), d.removeEventListener("focusout", f));
    });
    const l = (g) => {
      t(gs, g);
    }, u = (g) => t(ys, g), c = (g) => {
      const d = p(n);
      if (!d)
        return;
      const h = g.target, m = g.relatedTarget, w = h && d.contains(h);
      e.trapped || m && d.contains(m) || (r = m), w && t("focusin", g), !i.paused && e.trapped && (w ? o = h : sn(o, !0));
    }, f = (g) => {
      const d = p(n);
      if (!(i.paused || !d))
        if (e.trapped) {
          const h = g.relatedTarget;
          !Bn(h) && !d.contains(h) && setTimeout(() => {
            if (!i.paused && e.trapped) {
              const m = Nr({
                focusReason: a.value
              });
              t("focusout-prevented", m), m.defaultPrevented || sn(o, !0);
            }
          }, 0);
        } else {
          const h = g.target;
          h && d.contains(h) || t("focusout", g);
        }
    };
    async function v() {
      await me();
      const g = p(n);
      if (g) {
        Ss.push(i);
        const d = g.contains(document.activeElement) ? r : document.activeElement;
        if (r = d, !g.contains(d)) {
          const m = new Event(Bo, hs);
          g.addEventListener(Bo, l), g.dispatchEvent(m), m.defaultPrevented || me(() => {
            let w = e.focusStartEl;
            Le(w) || (sn(w), document.activeElement !== w && (w = "first")), w === "first" && Rb(Ou(g), !0), (document.activeElement === d || w === "container") && sn(g);
          });
        }
      }
    }
    function y() {
      const g = p(n);
      if (g) {
        g.removeEventListener(Bo, l);
        const d = new CustomEvent(jo, {
          ...hs,
          detail: {
            focusReason: a.value
          }
        });
        g.addEventListener(jo, u), g.dispatchEvent(d), !d.defaultPrevented && (a.value == "keyboard" || !Db() || g.contains(document.activeElement)) && sn(r ?? document.body), g.removeEventListener(jo, u), Ss.remove(i);
      }
    }
    return Te(() => {
      e.trapped && v(), U(() => e.trapped, (g) => {
        g ? v() : y();
      });
    }), Ve(() => {
      e.trapped && y();
    }), {
      onKeydown: s
    };
  }
});
function zb(e, t, n, r, o, a) {
  return Z(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var _u = /* @__PURE__ */ ve(jb, [["render", zb], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const Hb = ["fixed", "absolute"], Vb = he({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: te(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: bo,
    default: "bottom"
  },
  popperOptions: {
    type: te(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Hb,
    default: "absolute"
  }
}), Cu = he({
  ...Vb,
  id: String,
  style: {
    type: te([String, Array, Object])
  },
  className: {
    type: te([String, Array, Object])
  },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: te([String, Array, Object])
  },
  popperStyle: {
    type: te([String, Array, Object])
  },
  referenceEl: {
    type: te(Object)
  },
  triggerTargetEl: {
    type: te(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
}), qb = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Wb = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...Ub(e), ...t]
  };
  return Gb(a, o == null ? void 0 : o.modifiers), a;
}, Kb = (e) => {
  if ($e)
    return un(e);
};
function Ub(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: r } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: r
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n
      }
    }
  ];
}
function Gb(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Yb = 0, Zb = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = ne(Ha, void 0), a = _(), i = _(), s = b(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = b(() => {
    var m;
    const w = p(a), O = (m = p(i)) != null ? m : Yb;
    return {
      name: "arrow",
      enabled: !Bm(w),
      options: {
        element: w,
        padding: O
      }
    };
  }), u = b(() => ({
    onFirstUpdate: () => {
      g();
    },
    ...Wb(e, [
      p(l),
      p(s)
    ])
  })), c = b(() => Kb(e.referenceEl) || p(r)), { attributes: f, state: v, styles: y, update: g, forceUpdate: d, instanceRef: h } = ky(c, n, u);
  return U(h, (m) => t.value = m), Te(() => {
    U(() => {
      var m;
      return (m = p(c)) == null ? void 0 : m.getBoundingClientRect();
    }, () => {
      g();
    });
  }), {
    attributes: f,
    arrowRef: a,
    contentRef: n,
    instanceRef: h,
    state: v,
    styles: y,
    role: o,
    forceUpdate: d,
    update: g
  };
}, Xb = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = fu(), a = fe("popper"), i = b(() => p(t).popper), s = _(e.zIndex || o()), l = b(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = b(() => [
    { zIndex: p(s) },
    p(n).popper,
    e.popperStyle || {}
  ]), c = b(() => r.value === "dialog" ? "false" : void 0), f = b(() => p(n).arrow || {});
  return {
    ariaModal: c,
    arrowStyle: f,
    contentAttrs: i,
    contentClass: l,
    contentStyle: u,
    contentZIndex: s,
    updateZIndex: () => {
      s.value = e.zIndex || o();
    }
  };
}, Jb = (e, t) => {
  const n = _(!1), r = _();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var c;
      ((c = u.detail) == null ? void 0 : c.focusReason) !== "pointer" && (r.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (u) => {
      e.visible && !n.value && (u.target && (r.value = u.target), n.value = !0);
    },
    onFocusoutPrevented: (u) => {
      e.trapping || (u.detail.focusReason === "pointer" && u.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, Qb = B({
  name: "ElPopperContent"
}), e1 = /* @__PURE__ */ B({
  ...Qb,
  props: Cu,
  emits: qb,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: i,
      onFocusAfterTrapped: s,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: c
    } = Jb(r, n), { attributes: f, arrowRef: v, contentRef: y, styles: g, instanceRef: d, role: h, update: m } = Zb(r), {
      ariaModal: w,
      arrowStyle: O,
      contentAttrs: C,
      contentClass: I,
      contentStyle: S,
      updateZIndex: T
    } = Xb(r, {
      styles: g,
      attributes: f,
      role: h
    }), x = ne($n, void 0), j = _();
    Be(yu, {
      arrowStyle: O,
      arrowRef: v,
      arrowOffset: j
    }), x && (x.addInputId || x.removeInputId) && Be($n, {
      ...x,
      addInputId: Gt,
      removeInputId: Gt
    });
    let L;
    const A = (F = !0) => {
      m(), F && T();
    }, $ = () => {
      A(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return Te(() => {
      U(() => r.triggerTargetEl, (F, K) => {
        L == null || L(), L = void 0;
        const G = p(F || y.value), ie = p(K || y.value);
        dr(G) && (L = U([h, () => r.ariaLabel, w, () => r.id], (R) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((se, oe) => {
            Bn(R[oe]) ? G.removeAttribute(se) : G.setAttribute(se, R[oe]);
          });
        }, { immediate: !0 })), ie !== G && dr(ie) && ["role", "aria-label", "aria-modal", "id"].forEach((R) => {
          ie.removeAttribute(R);
        });
      }, { immediate: !0 }), U(() => r.visible, $, { immediate: !0 });
    }), Ve(() => {
      L == null || L(), L = void 0;
    }), t({
      popperContentRef: y,
      popperInstanceRef: d,
      updatePopper: A,
      contentStyle: S
    }), (F, K) => (M(), V("div", St({
      ref_key: "contentRef",
      ref: y
    }, p(C), {
      style: p(S),
      class: p(I),
      tabindex: "-1",
      onMouseenter: K[0] || (K[0] = (G) => F.$emit("mouseenter", G)),
      onMouseleave: K[1] || (K[1] = (G) => F.$emit("mouseleave", G))
    }), [
      N(p(_u), {
        trapped: p(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": p(y),
        "focus-start-el": p(o),
        onFocusAfterTrapped: p(s),
        onFocusAfterReleased: p(i),
        onFocusin: p(l),
        onFocusoutPrevented: p(u),
        onReleaseRequested: p(c)
      }, {
        default: H(() => [
          Z(F.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var t1 = /* @__PURE__ */ ve(e1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const n1 = mt(Tb), Wa = Symbol("elTooltip"), tt = he({
  ...By,
  ...Cu,
  appendTo: {
    type: te([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: !1
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: te(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean
}), gr = he({
  ...Eu,
  disabled: Boolean,
  trigger: {
    type: te([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: te(Array),
    default: () => [ze.enter, ze.space]
  }
}), {
  useModelToggleProps: r1,
  useModelToggleEmits: o1,
  useModelToggle: a1
} = Gl("visible"), i1 = he({
  ...bu,
  ...r1,
  ...tt,
  ...gr,
  ...wu,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), s1 = [
  ...o1,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], l1 = (e, t) => Rn(e) ? e.includes(t) : e === t, kn = (e, t, n) => (r) => {
  l1(p(e), t) && n(r);
}, u1 = B({
  name: "ElTooltipTrigger"
}), c1 = /* @__PURE__ */ B({
  ...u1,
  props: gr,
  setup(e, { expose: t }) {
    const n = e, r = fe("tooltip"), { controlled: o, id: a, open: i, onOpen: s, onClose: l, onToggle: u } = ne(Wa, void 0), c = _(null), f = () => {
      if (p(o) || n.disabled)
        return !0;
    }, v = xt(n, "trigger"), y = Kt(f, kn(v, "hover", s)), g = Kt(f, kn(v, "hover", l)), d = Kt(f, kn(v, "click", (C) => {
      C.button === 0 && u(C);
    })), h = Kt(f, kn(v, "focus", s)), m = Kt(f, kn(v, "focus", l)), w = Kt(f, kn(v, "contextmenu", (C) => {
      C.preventDefault(), u(C);
    })), O = Kt(f, (C) => {
      const { code: I } = C;
      n.triggerKeys.includes(I) && (C.preventDefault(), u(C));
    });
    return t({
      triggerRef: c
    }), (C, I) => (M(), re(p(Ab), {
      id: p(a),
      "virtual-ref": C.virtualRef,
      open: p(i),
      "virtual-triggering": C.virtualTriggering,
      class: D(p(r).e("trigger")),
      onBlur: p(m),
      onClick: p(d),
      onContextmenu: p(w),
      onFocus: p(h),
      onMouseenter: p(y),
      onMouseleave: p(g),
      onKeydown: p(O)
    }, {
      default: H(() => [
        Z(C.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var f1 = /* @__PURE__ */ ve(c1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const d1 = B({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), p1 = /* @__PURE__ */ B({
  ...d1,
  props: tt,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = uu(), o = fe("tooltip"), a = _(null), i = _(!1), {
      controlled: s,
      id: l,
      open: u,
      trigger: c,
      onClose: f,
      onOpen: v,
      onShow: y,
      onHide: g,
      onBeforeShow: d,
      onBeforeHide: h
    } = ne(Wa, void 0), m = b(() => n.transition || `${o.namespace.value}-fade-in-linear`), w = b(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    Ve(() => {
      i.value = !0;
    });
    const O = b(() => p(w) ? !0 : p(u)), C = b(() => n.disabled ? !1 : p(u)), I = b(() => n.appendTo || r.value), S = b(() => {
      var R;
      return (R = n.style) != null ? R : {};
    }), T = b(() => !p(u)), x = () => {
      g();
    }, j = () => {
      if (p(s))
        return !0;
    }, L = Kt(j, () => {
      n.enterable && p(c) === "hover" && v();
    }), A = Kt(j, () => {
      p(c) === "hover" && f();
    }), $ = () => {
      var R, se;
      (se = (R = a.value) == null ? void 0 : R.updatePopper) == null || se.call(R), d == null || d();
    }, F = () => {
      h == null || h();
    }, K = () => {
      y(), ie = Sc(b(() => {
        var R;
        return (R = a.value) == null ? void 0 : R.popperContentRef;
      }), () => {
        if (p(s))
          return;
        p(c) !== "hover" && f();
      });
    }, G = () => {
      n.virtualTriggering || f();
    };
    let ie;
    return U(() => p(u), (R) => {
      R || ie == null || ie();
    }, {
      flush: "post"
    }), U(() => n.content, () => {
      var R, se;
      (se = (R = a.value) == null ? void 0 : R.updatePopper) == null || se.call(R);
    }), t({
      contentRef: a
    }), (R, se) => (M(), re(sl, {
      disabled: !R.teleported,
      to: p(I)
    }, [
      N(fn, {
        name: p(m),
        onAfterLeave: x,
        onBeforeEnter: $,
        onAfterEnter: K,
        onBeforeLeave: F
      }, {
        default: H(() => [
          p(O) ? ct((M(), re(p(t1), St({
            key: 0,
            id: p(l),
            ref_key: "contentRef",
            ref: a
          }, R.$attrs, {
            "aria-label": R.ariaLabel,
            "aria-hidden": p(T),
            "boundaries-padding": R.boundariesPadding,
            "fallback-placements": R.fallbackPlacements,
            "gpu-acceleration": R.gpuAcceleration,
            offset: R.offset,
            placement: R.placement,
            "popper-options": R.popperOptions,
            strategy: R.strategy,
            effect: R.effect,
            enterable: R.enterable,
            pure: R.pure,
            "popper-class": R.popperClass,
            "popper-style": [R.popperStyle, p(S)],
            "reference-el": R.referenceEl,
            "trigger-target-el": R.triggerTargetEl,
            visible: p(C),
            "z-index": R.zIndex,
            onMouseenter: p(L),
            onMouseleave: p(A),
            onBlur: G,
            onClose: p(f)
          }), {
            default: H(() => [
              i.value ? ee("v-if", !0) : Z(R.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [en, p(C)]
          ]) : ee("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var v1 = /* @__PURE__ */ ve(p1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const m1 = ["innerHTML"], h1 = { key: 1 }, g1 = B({
  name: "ElTooltip"
}), y1 = /* @__PURE__ */ B({
  ...g1,
  props: i1,
  emits: s1,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    Dy();
    const o = mr(), a = _(), i = _(), s = () => {
      var m;
      const w = p(a);
      w && ((m = w.popperInstanceRef) == null || m.update());
    }, l = _(!1), u = _(), { show: c, hide: f, hasUpdateHandler: v } = a1({
      indicator: l,
      toggleReason: u
    }), { onOpen: y, onClose: g } = jy({
      showAfter: xt(r, "showAfter"),
      hideAfter: xt(r, "hideAfter"),
      autoClose: xt(r, "autoClose"),
      open: c,
      close: f
    }), d = b(() => Gn(r.visible) && !v.value);
    Be(Wa, {
      controlled: d,
      id: o,
      open: ol(l),
      trigger: xt(r, "trigger"),
      onOpen: (m) => {
        y(m);
      },
      onClose: (m) => {
        g(m);
      },
      onToggle: (m) => {
        p(l) ? g(m) : y(m);
      },
      onShow: () => {
        n("show", u.value);
      },
      onHide: () => {
        n("hide", u.value);
      },
      onBeforeShow: () => {
        n("before-show", u.value);
      },
      onBeforeHide: () => {
        n("before-hide", u.value);
      },
      updatePopper: s
    }), U(() => r.disabled, (m) => {
      m && l.value && (l.value = !1);
    });
    const h = (m) => {
      var w, O;
      const C = (O = (w = i.value) == null ? void 0 : w.contentRef) == null ? void 0 : O.popperContentRef, I = (m == null ? void 0 : m.relatedTarget) || document.activeElement;
      return C && C.contains(I);
    };
    return tc(() => l.value && f()), t({
      popperRef: a,
      contentRef: i,
      isFocusInsideContent: h,
      updatePopper: s,
      onOpen: y,
      onClose: g,
      hide: f
    }), (m, w) => (M(), re(p(n1), {
      ref_key: "popperRef",
      ref: a,
      role: m.role
    }, {
      default: H(() => [
        N(f1, {
          disabled: m.disabled,
          trigger: m.trigger,
          "trigger-keys": m.triggerKeys,
          "virtual-ref": m.virtualRef,
          "virtual-triggering": m.virtualTriggering
        }, {
          default: H(() => [
            m.$slots.default ? Z(m.$slots, "default", { key: 0 }) : ee("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        N(v1, {
          ref_key: "contentRef",
          ref: i,
          "aria-label": m.ariaLabel,
          "boundaries-padding": m.boundariesPadding,
          content: m.content,
          disabled: m.disabled,
          effect: m.effect,
          enterable: m.enterable,
          "fallback-placements": m.fallbackPlacements,
          "hide-after": m.hideAfter,
          "gpu-acceleration": m.gpuAcceleration,
          offset: m.offset,
          persistent: m.persistent,
          "popper-class": m.popperClass,
          "popper-style": m.popperStyle,
          placement: m.placement,
          "popper-options": m.popperOptions,
          pure: m.pure,
          "raw-content": m.rawContent,
          "reference-el": m.referenceEl,
          "trigger-target-el": m.triggerTargetEl,
          "show-after": m.showAfter,
          strategy: m.strategy,
          teleported: m.teleported,
          transition: m.transition,
          "virtual-triggering": m.virtualTriggering,
          "z-index": m.zIndex,
          "append-to": m.appendTo
        }, {
          default: H(() => [
            Z(m.$slots, "content", {}, () => [
              m.rawContent ? (M(), V("span", {
                key: 0,
                innerHTML: m.content
              }, null, 8, m1)) : (M(), V("span", h1, Ee(m.content), 1))
            ]),
            m.showArrow ? (M(), re(p(Cb), {
              key: 0,
              "arrow-offset": m.arrowOffset
            }, null, 8, ["arrow-offset"])) : ee("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var b1 = /* @__PURE__ */ ve(y1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const Eo = mt(b1);
function De(e, t) {
  w1(e) && (e = "100%");
  var n = S1(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Rr(e) {
  return Math.min(1, Math.max(0, e));
}
function w1(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function S1(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function $u(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Dr(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function wn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function E1(e, t, n) {
  return {
    r: De(e, 255) * 255,
    g: De(t, 255) * 255,
    b: De(n, 255) * 255
  };
}
function Ts(e, t, n) {
  e = De(e, 255), t = De(t, 255), n = De(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), a = 0, i = 0, s = (r + o) / 2;
  if (r === o)
    i = 0, a = 0;
  else {
    var l = r - o;
    switch (i = s > 0.5 ? l / (2 - r - o) : l / (r + o), r) {
      case e:
        a = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / l + 2;
        break;
      case n:
        a = (e - t) / l + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: i, l: s };
}
function zo(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function T1(e, t, n) {
  var r, o, a;
  if (e = De(e, 360), t = De(t, 100), n = De(n, 100), t === 0)
    o = n, a = n, r = n;
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - i;
    r = zo(s, i, e + 1 / 3), o = zo(s, i, e), a = zo(s, i, e - 1 / 3);
  }
  return { r: r * 255, g: o * 255, b: a * 255 };
}
function Os(e, t, n) {
  e = De(e, 255), t = De(t, 255), n = De(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), a = 0, i = r, s = r - o, l = r === 0 ? 0 : s / r;
  if (r === o)
    a = 0;
  else {
    switch (r) {
      case e:
        a = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / s + 2;
        break;
      case n:
        a = (e - t) / s + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: l, v: i };
}
function O1(e, t, n) {
  e = De(e, 360) * 6, t = De(t, 100), n = De(n, 100);
  var r = Math.floor(e), o = e - r, a = n * (1 - t), i = n * (1 - o * t), s = n * (1 - (1 - o) * t), l = r % 6, u = [n, i, a, a, s, n][l], c = [s, n, n, i, a, a][l], f = [a, a, s, n, n, i][l];
  return { r: u * 255, g: c * 255, b: f * 255 };
}
function _s(e, t, n, r) {
  var o = [
    wn(Math.round(e).toString(16)),
    wn(Math.round(t).toString(16)),
    wn(Math.round(n).toString(16))
  ];
  return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function _1(e, t, n, r, o) {
  var a = [
    wn(Math.round(e).toString(16)),
    wn(Math.round(t).toString(16)),
    wn(Math.round(n).toString(16)),
    wn(C1(r))
  ];
  return o && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function C1(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Cs(e) {
  return et(e) / 255;
}
function et(e) {
  return parseInt(e, 16);
}
function $1(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var va = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function x1(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, o = null, a = null, i = !1, s = !1;
  return typeof e == "string" && (e = M1(e)), typeof e == "object" && (qt(e.r) && qt(e.g) && qt(e.b) ? (t = E1(e.r, e.g, e.b), i = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : qt(e.h) && qt(e.s) && qt(e.v) ? (r = Dr(e.s), o = Dr(e.v), t = O1(e.h, r, o), i = !0, s = "hsv") : qt(e.h) && qt(e.s) && qt(e.l) && (r = Dr(e.s), a = Dr(e.l), t = T1(e.h, r, a), i = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = $u(n), {
    ok: i,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var I1 = "[-\\+]?\\d+%?", A1 = "[-\\+]?\\d*\\.\\d+%?", cn = "(?:".concat(A1, ")|(?:").concat(I1, ")"), Ho = "[\\s|\\(]+(".concat(cn, ")[,|\\s]+(").concat(cn, ")[,|\\s]+(").concat(cn, ")\\s*\\)?"), Vo = "[\\s|\\(]+(".concat(cn, ")[,|\\s]+(").concat(cn, ")[,|\\s]+(").concat(cn, ")[,|\\s]+(").concat(cn, ")\\s*\\)?"), yt = {
  CSS_UNIT: new RegExp(cn),
  rgb: new RegExp("rgb" + Ho),
  rgba: new RegExp("rgba" + Vo),
  hsl: new RegExp("hsl" + Ho),
  hsla: new RegExp("hsla" + Vo),
  hsv: new RegExp("hsv" + Ho),
  hsva: new RegExp("hsva" + Vo),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function M1(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (va[e])
    e = va[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = yt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = yt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = yt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = yt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = yt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = yt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = yt.hex8.exec(e), n ? {
    r: et(n[1]),
    g: et(n[2]),
    b: et(n[3]),
    a: Cs(n[4]),
    format: t ? "name" : "hex8"
  } : (n = yt.hex6.exec(e), n ? {
    r: et(n[1]),
    g: et(n[2]),
    b: et(n[3]),
    format: t ? "name" : "hex"
  } : (n = yt.hex4.exec(e), n ? {
    r: et(n[1] + n[1]),
    g: et(n[2] + n[2]),
    b: et(n[3] + n[3]),
    a: Cs(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = yt.hex3.exec(e), n ? {
    r: et(n[1] + n[1]),
    g: et(n[2] + n[2]),
    b: et(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function qt(e) {
  return !!yt.CSS_UNIT.exec(String(e));
}
var P1 = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = $1(t)), this.originalInput = t;
      var o = x1(t);
      this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : o.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, r, o, a = t.r / 255, i = t.g / 255, s = t.b / 255;
      return a <= 0.03928 ? n = a / 12.92 : n = Math.pow((a + 0.055) / 1.055, 2.4), i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), s <= 0.03928 ? o = s / 12.92 : o = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = $u(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Os(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Os(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Ts(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Ts(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), _s(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), _1(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(De(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(De(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + _s(this.r, this.g, this.b, !1), n = 0, r = Object.entries(va); n < r.length; n++) {
        var o = r[n], a = o[0], i = o[1];
        if (t === i)
          return a;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1, o = this.a < 1 && this.a >= 0, a = !n && o && (t.startsWith("hex") || t === "name");
      return a ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = Rr(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Rr(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Rr(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Rr(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), o = new e(t).toRgb(), a = n / 100, i = {
        r: (o.r - r.r) * a + r.r,
        g: (o.g - r.g) * a + r.g,
        b: (o.b - r.b) * a + r.b,
        a: (o.a - r.a) * a + r.a
      };
      return new e(i);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), o = 360 / n, a = [this];
      for (r.h = (r.h - (o * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + o) % 360, a.push(new e(r));
      return a;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, o = n.s, a = n.v, i = [], s = 1 / t; t--; )
        i.push(new e({ h: r, s: o, v: a })), a = (a + s) % 1;
      return i;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), r = new e(t).toRgb(), o = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
        a: o
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, o = [this], a = 360 / t, i = 1; i < t; i++)
        o.push(new e({ h: (r + i * a) % 360, s: n.s, l: n.l }));
      return o;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), Br = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function k1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const ln = /* @__PURE__ */ new Map();
let $s;
$e && (document.addEventListener("mousedown", (e) => $s = e), document.addEventListener("mouseup", (e) => {
  for (const t of ln.values())
    for (const { documentHandler: n } of t)
      n(e, $s);
}));
function xs(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : dr(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, i = r.target, s = o == null ? void 0 : o.target, l = !t || !t.instance, u = !i || !s, c = e.contains(i) || e.contains(s), f = e === i, v = n.length && n.some((g) => g == null ? void 0 : g.contains(i)) || n.length && n.includes(s), y = a && (a.contains(i) || a.contains(s));
    l || u || c || f || v || y || t.value(r, o);
  };
}
const L1 = {
  beforeMount(e, t) {
    ln.has(e) || ln.set(e, []), ln.get(e).push({
      documentHandler: xs(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    ln.has(e) || ln.set(e, []);
    const n = ln.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: xs(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    ln.delete(e);
  }
}, F1 = he({
  header: {
    type: String,
    default: ""
  },
  bodyStyle: {
    type: te([String, Object, Array]),
    default: ""
  },
  shadow: {
    type: String,
    values: ["always", "hover", "never"],
    default: "always"
  }
}), N1 = B({
  name: "ElCard"
}), R1 = /* @__PURE__ */ B({
  ...N1,
  props: F1,
  setup(e) {
    const t = fe("card");
    return (n, r) => (M(), V("div", {
      class: D([p(t).b(), p(t).is(`${n.shadow}-shadow`)])
    }, [
      n.$slots.header || n.header ? (M(), V("div", {
        key: 0,
        class: D(p(t).e("header"))
      }, [
        Z(n.$slots, "header", {}, () => [
          En(Ee(n.header), 1)
        ])
      ], 2)) : ee("v-if", !0),
      q("div", {
        class: D(p(t).e("body")),
        style: Ie(n.bodyStyle)
      }, [
        Z(n.$slots, "default")
      ], 6)
    ], 2));
  }
});
var D1 = /* @__PURE__ */ ve(R1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);
const B1 = mt(D1), xu = he({
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  closable: Boolean,
  disableTransitions: Boolean,
  hit: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: br,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), j1 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, z1 = B({
  name: "ElTag"
}), H1 = /* @__PURE__ */ B({
  ...z1,
  props: xu,
  emits: j1,
  setup(e, { emit: t }) {
    const n = e, r = Er(), o = fe("tag"), a = b(() => {
      const { type: l, hit: u, effect: c, closable: f, round: v } = n;
      return [
        o.b(),
        o.is("closable", f),
        o.m(l),
        o.m(r.value),
        o.m(c),
        o.is("hit", u),
        o.is("round", v)
      ];
    }), i = (l) => {
      t("close", l);
    }, s = (l) => {
      t("click", l);
    };
    return (l, u) => l.disableTransitions ? (M(), V("span", {
      key: 0,
      class: D(p(a)),
      style: Ie({ backgroundColor: l.color }),
      onClick: s
    }, [
      q("span", {
        class: D(p(o).e("content"))
      }, [
        Z(l.$slots, "default")
      ], 2),
      l.closable ? (M(), re(p(bt), {
        key: 0,
        class: D(p(o).e("close")),
        onClick: Ce(i, ["stop"])
      }, {
        default: H(() => [
          N(p(oa))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : ee("v-if", !0)
    ], 6)) : (M(), re(fn, {
      key: 1,
      name: `${p(o).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: H(() => [
        q("span", {
          class: D(p(a)),
          style: Ie({ backgroundColor: l.color }),
          onClick: s
        }, [
          q("span", {
            class: D(p(o).e("content"))
          }, [
            Z(l.$slots, "default")
          ], 2),
          l.closable ? (M(), re(p(bt), {
            key: 0,
            class: D(p(o).e("close")),
            onClick: Ce(i, ["stop"])
          }, {
            default: H(() => [
              N(p(oa))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ee("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var V1 = /* @__PURE__ */ ve(H1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const q1 = mt(V1), W1 = B({
  name: "ElCollapseTransition"
}), K1 = /* @__PURE__ */ B({
  ...W1,
  setup(e) {
    const t = fe("collapse-transition"), n = (o) => {
      o.style.maxHeight = "", o.style.overflow = o.dataset.oldOverflow, o.style.paddingTop = o.dataset.oldPaddingTop, o.style.paddingBottom = o.dataset.oldPaddingBottom;
    }, r = {
      beforeEnter(o) {
        o.dataset || (o.dataset = {}), o.dataset.oldPaddingTop = o.style.paddingTop, o.dataset.oldPaddingBottom = o.style.paddingBottom, o.style.maxHeight = 0, o.style.paddingTop = 0, o.style.paddingBottom = 0;
      },
      enter(o) {
        o.dataset.oldOverflow = o.style.overflow, o.scrollHeight !== 0 ? o.style.maxHeight = `${o.scrollHeight}px` : o.style.maxHeight = 0, o.style.paddingTop = o.dataset.oldPaddingTop, o.style.paddingBottom = o.dataset.oldPaddingBottom, o.style.overflow = "hidden";
      },
      afterEnter(o) {
        o.style.maxHeight = "", o.style.overflow = o.dataset.oldOverflow;
      },
      enterCancelled(o) {
        n(o);
      },
      beforeLeave(o) {
        o.dataset || (o.dataset = {}), o.dataset.oldPaddingTop = o.style.paddingTop, o.dataset.oldPaddingBottom = o.style.paddingBottom, o.dataset.oldOverflow = o.style.overflow, o.style.maxHeight = `${o.scrollHeight}px`, o.style.overflow = "hidden";
      },
      leave(o) {
        o.scrollHeight !== 0 && (o.style.maxHeight = 0, o.style.paddingTop = 0, o.style.paddingBottom = 0);
      },
      afterLeave(o) {
        n(o);
      },
      leaveCancelled(o) {
        n(o);
      }
    };
    return (o, a) => (M(), re(fn, St({
      name: p(t).b()
    }, nc(r)), {
      default: H(() => [
        Z(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
var Xr = /* @__PURE__ */ ve(K1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);
Xr.install = (e) => {
  e.component(Xr.name, Xr);
};
const U1 = Xr, G1 = he({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: {
    type: Boolean,
    default: !1
  },
  overlayClass: {
    type: te([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: te([String, Number])
  }
}), Y1 = {
  click: (e) => e instanceof MouseEvent
}, Z1 = "overlay";
var X1 = B({
  name: "ElOverlay",
  props: G1,
  emits: Y1,
  setup(e, { slots: t, emit: n }) {
    const r = fe(Z1), o = (l) => {
      n("click", l);
    }, { onClick: a, onMousedown: i, onMouseup: s } = su(e.customMaskEvent ? void 0 : o);
    return () => e.mask ? N("div", {
      class: [r.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: a,
      onMousedown: i,
      onMouseup: s
    }, [Z(t, "default")], qr.STYLE | qr.CLASS | qr.PROPS, ["onClick", "onMouseup", "onMousedown"]) : ke("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [Z(t, "default")]);
  }
});
const J1 = X1, Iu = Symbol("dialogInjectionKey"), Au = he({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: It
  },
  customClass: {
    type: String,
    default: ""
  },
  draggable: Boolean,
  fullscreen: Boolean,
  showClose: {
    type: Boolean,
    default: !0
  },
  title: {
    type: String,
    default: ""
  }
}), Q1 = {
  close: () => !0
}, ew = ["aria-label"], tw = ["id"], nw = B({ name: "ElDialogContent" }), rw = /* @__PURE__ */ B({
  ...nw,
  props: Au,
  emits: Q1,
  setup(e) {
    const t = e, { t: n } = go(), { Close: r } = ng, { dialogRef: o, headerRef: a, bodyId: i, ns: s, style: l } = ne(Iu), { focusTrapRef: u } = ne(Tu), c = b(() => [
      s.b(),
      s.is("fullscreen", t.fullscreen),
      s.is("draggable", t.draggable),
      s.is("align-center", t.alignCenter),
      { [s.m("center")]: t.center },
      t.customClass
    ]), f = og(u, o), v = b(() => t.draggable);
    return fg(o, a, v), (y, g) => (M(), V("div", {
      ref: p(f),
      class: D(p(c)),
      style: Ie(p(l)),
      tabindex: "-1"
    }, [
      q("header", {
        ref_key: "headerRef",
        ref: a,
        class: D(p(s).e("header"))
      }, [
        Z(y.$slots, "header", {}, () => [
          q("span", {
            role: "heading",
            class: D(p(s).e("title"))
          }, Ee(y.title), 3)
        ]),
        y.showClose ? (M(), V("button", {
          key: 0,
          "aria-label": p(n)("el.dialog.close"),
          class: D(p(s).e("headerbtn")),
          type: "button",
          onClick: g[0] || (g[0] = (d) => y.$emit("close"))
        }, [
          N(p(bt), {
            class: D(p(s).e("close"))
          }, {
            default: H(() => [
              (M(), re(Ut(y.closeIcon || p(r))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, ew)) : ee("v-if", !0)
      ], 2),
      q("div", {
        id: p(i),
        class: D(p(s).e("body"))
      }, [
        Z(y.$slots, "default")
      ], 10, tw),
      y.$slots.footer ? (M(), V("footer", {
        key: 0,
        class: D(p(s).e("footer"))
      }, [
        Z(y.$slots, "footer")
      ], 2)) : ee("v-if", !0)
    ], 6));
  }
});
var ow = /* @__PURE__ */ ve(rw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);
const aw = he({
  ...Au,
  appendToBody: Boolean,
  beforeClose: {
    type: te(Function)
  },
  destroyOnClose: Boolean,
  closeOnClickModal: {
    type: Boolean,
    default: !0
  },
  closeOnPressEscape: {
    type: Boolean,
    default: !0
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  modal: {
    type: Boolean,
    default: !0
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: Boolean,
  modalClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: {
    type: Boolean,
    default: !1
  }
}), iw = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [ot]: (e) => Gn(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, sw = (e, t) => {
  const r = Pe().emit, { nextZIndex: o } = fu();
  let a = "";
  const i = mr(), s = mr(), l = _(!1), u = _(!1), c = _(!1), f = _(e.zIndex || o());
  let v, y;
  const g = Xy("namespace", Ur), d = b(() => {
    const K = {}, G = `--${g.value}-dialog`;
    return e.fullscreen || (e.top && (K[`${G}-margin-top`] = e.top), e.width && (K[`${G}-width`] = Jt(e.width))), K;
  }), h = b(() => e.alignCenter ? { display: "flex" } : {});
  function m() {
    r("opened");
  }
  function w() {
    r("closed"), r(ot, !1), e.destroyOnClose && (c.value = !1);
  }
  function O() {
    r("close");
  }
  function C() {
    y == null || y(), v == null || v(), e.openDelay && e.openDelay > 0 ? { stop: v } = to(() => x(), e.openDelay) : x();
  }
  function I() {
    v == null || v(), y == null || y(), e.closeDelay && e.closeDelay > 0 ? { stop: y } = to(() => j(), e.closeDelay) : j();
  }
  function S() {
    function K(G) {
      G || (u.value = !0, l.value = !1);
    }
    e.beforeClose ? e.beforeClose(K) : I();
  }
  function T() {
    e.closeOnClickModal && S();
  }
  function x() {
    $e && (l.value = !0);
  }
  function j() {
    l.value = !1;
  }
  function L() {
    r("openAutoFocus");
  }
  function A() {
    r("closeAutoFocus");
  }
  function $(K) {
    var G;
    ((G = K.detail) == null ? void 0 : G.focusReason) === "pointer" && K.preventDefault();
  }
  e.lockScroll && xg(l);
  function F() {
    e.closeOnPressEscape && S();
  }
  return U(() => e.modelValue, (K) => {
    K ? (u.value = !1, C(), c.value = !0, f.value = e.zIndex ? f.value++ : o(), me(() => {
      r("open"), t.value && (t.value.scrollTop = 0);
    })) : l.value && I();
  }), U(() => e.fullscreen, (K) => {
    t.value && (K ? (a = t.value.style.transform, t.value.style.transform = "") : t.value.style.transform = a);
  }), Te(() => {
    e.modelValue && (l.value = !0, c.value = !0, C());
  }), {
    afterEnter: m,
    afterLeave: w,
    beforeLeave: O,
    handleClose: S,
    onModalClick: T,
    close: I,
    doClose: j,
    onOpenAutoFocus: L,
    onCloseAutoFocus: A,
    onCloseRequested: F,
    onFocusoutPrevented: $,
    titleId: i,
    bodyId: s,
    closed: u,
    style: d,
    overlayDialogStyle: h,
    rendered: c,
    visible: l,
    zIndex: f
  };
}, lw = ["aria-label", "aria-labelledby", "aria-describedby"], uw = B({
  name: "ElDialog",
  inheritAttrs: !1
}), cw = /* @__PURE__ */ B({
  ...uw,
  props: aw,
  emits: iw,
  setup(e, { expose: t }) {
    const n = e, r = ba();
    io({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, b(() => !!r.title)), io({
      scope: "el-dialog",
      from: "custom-class",
      replacement: "class",
      version: "2.3.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#attributes",
      type: "Attribute"
    }, b(() => !!n.customClass));
    const o = fe("dialog"), a = _(), i = _(), s = _(), {
      visible: l,
      titleId: u,
      bodyId: c,
      style: f,
      overlayDialogStyle: v,
      rendered: y,
      zIndex: g,
      afterEnter: d,
      afterLeave: h,
      beforeLeave: m,
      handleClose: w,
      onModalClick: O,
      onOpenAutoFocus: C,
      onCloseAutoFocus: I,
      onCloseRequested: S,
      onFocusoutPrevented: T
    } = sw(n, a);
    Be(Iu, {
      dialogRef: a,
      headerRef: i,
      bodyId: c,
      ns: o,
      rendered: y,
      style: f
    });
    const x = su(O), j = b(() => n.draggable && !n.fullscreen);
    return t({
      visible: l,
      dialogContentRef: s
    }), (L, A) => (M(), re(sl, {
      to: "body",
      disabled: !L.appendToBody
    }, [
      N(fn, {
        name: "dialog-fade",
        onAfterEnter: p(d),
        onAfterLeave: p(h),
        onBeforeLeave: p(m),
        persisted: ""
      }, {
        default: H(() => [
          ct(N(p(J1), {
            "custom-mask-event": "",
            mask: L.modal,
            "overlay-class": L.modalClass,
            "z-index": p(g)
          }, {
            default: H(() => [
              q("div", {
                role: "dialog",
                "aria-modal": "true",
                "aria-label": L.title || void 0,
                "aria-labelledby": L.title ? void 0 : p(u),
                "aria-describedby": p(c),
                class: D(`${p(o).namespace.value}-overlay-dialog`),
                style: Ie(p(v)),
                onClick: A[0] || (A[0] = (...$) => p(x).onClick && p(x).onClick(...$)),
                onMousedown: A[1] || (A[1] = (...$) => p(x).onMousedown && p(x).onMousedown(...$)),
                onMouseup: A[2] || (A[2] = (...$) => p(x).onMouseup && p(x).onMouseup(...$))
              }, [
                N(p(_u), {
                  loop: "",
                  trapped: p(l),
                  "focus-start-el": "container",
                  onFocusAfterTrapped: p(C),
                  onFocusAfterReleased: p(I),
                  onFocusoutPrevented: p(T),
                  onReleaseRequested: p(S)
                }, {
                  default: H(() => [
                    p(y) ? (M(), re(ow, St({
                      key: 0,
                      ref_key: "dialogContentRef",
                      ref: s
                    }, L.$attrs, {
                      "custom-class": L.customClass,
                      center: L.center,
                      "align-center": L.alignCenter,
                      "close-icon": L.closeIcon,
                      draggable: p(j),
                      fullscreen: L.fullscreen,
                      "show-close": L.showClose,
                      title: L.title,
                      onClose: p(w)
                    }), ll({
                      header: H(() => [
                        L.$slots.title ? Z(L.$slots, "title", { key: 1 }) : Z(L.$slots, "header", {
                          key: 0,
                          close: p(w),
                          titleId: p(u),
                          titleClass: p(o).e("title")
                        })
                      ]),
                      default: H(() => [
                        Z(L.$slots, "default")
                      ]),
                      _: 2
                    }, [
                      L.$slots.footer ? {
                        name: "footer",
                        fn: H(() => [
                          Z(L.$slots, "footer")
                        ])
                      } : void 0
                    ]), 1040, ["custom-class", "center", "align-center", "close-icon", "draggable", "fullscreen", "show-close", "title", "onClose"])) : ee("v-if", !0)
                  ]),
                  _: 3
                }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
              ], 46, lw)
            ]),
            _: 3
          }, 8, ["mask", "overlay-class", "z-index"]), [
            [en, p(l)]
          ])
        ]),
        _: 3
      }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
    ], 8, ["disabled"]));
  }
});
var fw = /* @__PURE__ */ ve(cw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);
const Mu = mt(fw), dw = /* @__PURE__ */ B({
  inheritAttrs: !1
});
function pw(e, t, n, r, o, a) {
  return Z(e.$slots, "default");
}
var vw = /* @__PURE__ */ ve(dw, [["render", pw], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);
const mw = /* @__PURE__ */ B({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function hw(e, t, n, r, o, a) {
  return Z(e.$slots, "default");
}
var gw = /* @__PURE__ */ ve(mw, [["render", hw], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);
const yw = "data-el-collection-item", bw = (e) => {
  const t = `El${e}Collection`, n = `${t}Item`, r = Symbol(t), o = Symbol(n), a = {
    ...vw,
    name: t,
    setup() {
      const s = _(null), l = /* @__PURE__ */ new Map();
      Be(r, {
        itemMap: l,
        getItems: () => {
          const c = p(s);
          if (!c)
            return [];
          const f = Array.from(c.querySelectorAll(`[${yw}]`));
          return [...l.values()].sort((y, g) => f.indexOf(y.ref) - f.indexOf(g.ref));
        },
        collectionRef: s
      });
    }
  }, i = {
    ...gw,
    name: n,
    setup(s, { attrs: l }) {
      const u = _(null), c = ne(r, void 0);
      Be(o, {
        collectionItemRef: u
      }), Te(() => {
        const f = p(u);
        f && c.itemMap.set(f, {
          ref: f,
          ...l
        });
      }), Ve(() => {
        const f = p(u);
        c.itemMap.delete(f);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: r,
    COLLECTION_ITEM_INJECTION_KEY: o,
    ElCollection: a,
    ElCollectionItem: i
  };
}, qo = he({
  trigger: gr.trigger,
  effect: {
    ...tt.effect,
    default: "light"
  },
  type: {
    type: te(String)
  },
  placement: {
    type: te(String),
    default: "bottom"
  },
  popperOptions: {
    type: te(Object),
    default: () => ({})
  },
  id: String,
  size: {
    type: String,
    default: ""
  },
  splitButton: Boolean,
  hideOnClick: {
    type: Boolean,
    default: !0
  },
  loop: {
    type: Boolean,
    default: !0
  },
  showTimeout: {
    type: Number,
    default: 150
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  tabindex: {
    type: te([Number, String]),
    default: 0
  },
  maxHeight: {
    type: te([Number, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  role: {
    type: String,
    default: "menu"
  },
  buttonProps: {
    type: te(Object)
  },
  teleported: tt.teleported
});
he({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: It
  }
});
he({
  onKeydown: { type: te(Function) }
});
bw("Dropdown");
let ww = class {
  constructor(t, n) {
    this.parent = t, this.domNode = n, this.subIndex = 0, this.subIndex = 0, this.init();
  }
  init() {
    this.subMenuItems = this.domNode.querySelectorAll("li"), this.addListeners();
  }
  gotoSubIndex(t) {
    t === this.subMenuItems.length ? t = 0 : t < 0 && (t = this.subMenuItems.length - 1), this.subMenuItems[t].focus(), this.subIndex = t;
  }
  addListeners() {
    const t = this.parent.domNode;
    Array.prototype.forEach.call(this.subMenuItems, (n) => {
      n.addEventListener("keydown", (r) => {
        let o = !1;
        switch (r.code) {
          case ze.down: {
            this.gotoSubIndex(this.subIndex + 1), o = !0;
            break;
          }
          case ze.up: {
            this.gotoSubIndex(this.subIndex - 1), o = !0;
            break;
          }
          case ze.tab: {
            zr(t, "mouseleave");
            break;
          }
          case ze.enter:
          case ze.space: {
            o = !0, r.currentTarget.click();
            break;
          }
        }
        return o && (r.preventDefault(), r.stopPropagation()), !1;
      });
    });
  }
}, Sw = class {
  constructor(t, n) {
    this.domNode = t, this.submenu = null, this.submenu = null, this.init(n);
  }
  init(t) {
    this.domNode.setAttribute("tabindex", "0");
    const n = this.domNode.querySelector(`.${t}-menu`);
    n && (this.submenu = new ww(this, n)), this.addListeners();
  }
  addListeners() {
    this.domNode.addEventListener("keydown", (t) => {
      let n = !1;
      switch (t.code) {
        case ze.down: {
          zr(t.currentTarget, "mouseenter"), this.submenu && this.submenu.gotoSubIndex(0), n = !0;
          break;
        }
        case ze.up: {
          zr(t.currentTarget, "mouseenter"), this.submenu && this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1), n = !0;
          break;
        }
        case ze.tab: {
          zr(t.currentTarget, "mouseleave");
          break;
        }
        case ze.enter:
        case ze.space: {
          n = !0, t.currentTarget.click();
          break;
        }
      }
      n && t.preventDefault();
    });
  }
}, Ew = class {
  constructor(t, n) {
    this.domNode = t, this.init(n);
  }
  init(t) {
    const n = this.domNode.childNodes;
    Array.from(n).forEach((r) => {
      r.nodeType === 1 && new Sw(r, t);
    });
  }
};
const Tw = B({
  name: "ElMenuCollapseTransition",
  setup() {
    const e = fe("menu");
    return {
      listeners: {
        onBeforeEnter: (n) => n.style.opacity = "0.2",
        onEnter(n, r) {
          tr(n, `${e.namespace.value}-opacity-transition`), n.style.opacity = "1", r();
        },
        onAfterEnter(n) {
          Vr(n, `${e.namespace.value}-opacity-transition`), n.style.opacity = "";
        },
        onBeforeLeave(n) {
          n.dataset || (n.dataset = {}), ra(n, e.m("collapse")) ? (Vr(n, e.m("collapse")), n.dataset.oldOverflow = n.style.overflow, n.dataset.scrollWidth = n.clientWidth.toString(), tr(n, e.m("collapse"))) : (tr(n, e.m("collapse")), n.dataset.oldOverflow = n.style.overflow, n.dataset.scrollWidth = n.clientWidth.toString(), Vr(n, e.m("collapse"))), n.style.width = `${n.scrollWidth}px`, n.style.overflow = "hidden";
        },
        onLeave(n) {
          tr(n, "horizontal-collapse-transition"), n.style.width = `${n.dataset.scrollWidth}px`;
        }
      }
    };
  }
});
function Ow(e, t, n, r, o, a) {
  return M(), re(fn, St({ mode: "out-in" }, e.listeners), {
    default: H(() => [
      Z(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
var _w = /* @__PURE__ */ ve(Tw, [["render", Ow], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);
function Pu(e, t) {
  const n = b(() => {
    let o = e.parent;
    const a = [t.value];
    for (; o.type.name !== "ElMenu"; )
      o.props.index && a.unshift(o.props.index), o = o.parent;
    return a;
  });
  return {
    parentMenu: b(() => {
      let o = e.parent;
      for (; o && !["ElMenu", "ElSubMenu"].includes(o.type.name); )
        o = o.parent;
      return o;
    }),
    indexPath: n
  };
}
function Cw(e) {
  return b(() => {
    const n = e.backgroundColor;
    return n ? new P1(n).shade(20).toString() : "";
  });
}
const ku = (e, t) => {
  const n = fe("menu");
  return b(() => n.cssVarBlock({
    "text-color": e.textColor || "",
    "hover-text-color": e.textColor || "",
    "bg-color": e.backgroundColor || "",
    "hover-bg-color": Cw(e).value || "",
    "active-color": e.activeTextColor || "",
    level: `${t}`
  }));
}, $w = he({
  index: {
    type: String,
    required: !0
  },
  showTimeout: {
    type: Number,
    default: 300
  },
  hideTimeout: {
    type: Number,
    default: 300
  },
  popperClass: String,
  disabled: Boolean,
  popperAppendToBody: {
    type: Boolean,
    default: void 0
  },
  teleported: {
    type: Boolean,
    default: void 0
  },
  popperOffset: {
    type: Number,
    default: 6
  },
  expandCloseIcon: {
    type: It
  },
  expandOpenIcon: {
    type: It
  },
  collapseCloseIcon: {
    type: It
  },
  collapseOpenIcon: {
    type: It
  }
}), jr = "ElSubMenu";
var Ka = B({
  name: jr,
  props: $w,
  setup(e, { slots: t, expose: n }) {
    io({
      from: "popper-append-to-body",
      replacement: "teleported",
      scope: jr,
      version: "2.3.0",
      ref: "https://element-plus.org/en-US/component/menu.html#submenu-attributes"
    }, b(() => e.popperAppendToBody !== void 0));
    const r = Pe(), { indexPath: o, parentMenu: a } = Pu(r, b(() => e.index)), i = fe("menu"), s = fe("sub-menu"), l = ne("rootMenu");
    l || Cn(jr, "can not inject root menu");
    const u = ne(`subMenu:${a.value.uid}`);
    u || Cn(jr, "can not inject sub menu");
    const c = _({}), f = _({});
    let v;
    const y = _(!1), g = _(), d = _(null), h = b(() => A.value === "horizontal" && w.value ? "bottom-start" : "right-start"), m = b(() => A.value === "horizontal" && w.value || A.value === "vertical" && !l.props.collapse ? e.expandCloseIcon && e.expandOpenIcon ? S.value ? e.expandOpenIcon : e.expandCloseIcon : jl : e.collapseCloseIcon && e.collapseOpenIcon ? S.value ? e.collapseOpenIcon : e.collapseCloseIcon : ah), w = b(() => u.level === 0), O = b(() => {
      var J;
      const ue = (J = e.teleported) != null ? J : e.popperAppendToBody;
      return ue === void 0 ? w.value : ue;
    }), C = b(() => l.props.collapse ? `${i.namespace.value}-zoom-in-left` : `${i.namespace.value}-zoom-in-top`), I = b(() => A.value === "horizontal" && w.value ? [
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end",
      "right-start",
      "left-start"
    ] : [
      "right-start",
      "right",
      "right-end",
      "left-start",
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end"
    ]), S = b(() => l.openedMenus.includes(e.index)), T = b(() => {
      let J = !1;
      return Object.values(c.value).forEach((ue) => {
        ue.active && (J = !0);
      }), Object.values(f.value).forEach((ue) => {
        ue.active && (J = !0);
      }), J;
    }), x = b(() => l.props.backgroundColor || ""), j = b(() => l.props.activeTextColor || ""), L = b(() => l.props.textColor || ""), A = b(() => l.props.mode), $ = Lt({
      index: e.index,
      indexPath: o,
      active: T
    }), F = ku(l.props, u.level + 1), K = b(() => A.value !== "horizontal" ? {
      color: L.value
    } : {
      borderBottomColor: T.value ? l.props.activeTextColor ? j.value : "" : "transparent",
      color: T.value ? j.value : L.value
    }), G = () => {
      var J, ue, le;
      return (le = (ue = (J = d.value) == null ? void 0 : J.popperRef) == null ? void 0 : ue.popperInstanceRef) == null ? void 0 : le.destroy();
    }, ie = (J) => {
      J || G();
    }, R = () => {
      l.props.menuTrigger === "hover" && l.props.mode === "horizontal" || l.props.collapse && l.props.mode === "vertical" || e.disabled || l.handleSubMenuClick({
        index: e.index,
        indexPath: o.value,
        active: T.value
      });
    }, se = (J, ue = e.showTimeout) => {
      var le;
      J.type !== "focus" && (l.props.menuTrigger === "click" && l.props.mode === "horizontal" || !l.props.collapse && l.props.mode === "vertical" || e.disabled || (u.mouseInChild.value = !0, v == null || v(), { stop: v } = to(() => {
        l.openMenu(e.index, o.value);
      }, ue), O.value && ((le = a.value.vnode.el) == null || le.dispatchEvent(new MouseEvent("mouseenter")))));
    }, oe = (J = !1) => {
      var ue, le;
      l.props.menuTrigger === "click" && l.props.mode === "horizontal" || !l.props.collapse && l.props.mode === "vertical" || (v == null || v(), u.mouseInChild.value = !1, { stop: v } = to(() => !y.value && l.closeMenu(e.index, o.value), e.hideTimeout), O.value && J && ((ue = r.parent) == null ? void 0 : ue.type.name) === "ElSubMenu" && ((le = u.handleMouseleave) == null || le.call(u, !0)));
    };
    U(() => l.props.collapse, (J) => ie(!!J));
    {
      const J = (le) => {
        f.value[le.index] = le;
      }, ue = (le) => {
        delete f.value[le.index];
      };
      Be(`subMenu:${r.uid}`, {
        addSubMenu: J,
        removeSubMenu: ue,
        handleMouseleave: oe,
        mouseInChild: y,
        level: u.level + 1
      });
    }
    return n({
      opened: S
    }), Te(() => {
      l.addSubMenu($), u.addSubMenu($);
    }), Ve(() => {
      u.removeSubMenu($), l.removeSubMenu($);
    }), () => {
      var J;
      const ue = [
        (J = t.title) == null ? void 0 : J.call(t),
        ke(bt, {
          class: s.e("icon-arrow"),
          style: {
            transform: S.value ? e.expandCloseIcon && e.expandOpenIcon || e.collapseCloseIcon && e.collapseOpenIcon && l.props.collapse ? "none" : "rotateZ(180deg)" : "none"
          }
        }, {
          default: () => Le(m.value) ? ke(r.appContext.components[m.value]) : ke(m.value)
        })
      ], le = l.isMenuPopup ? ke(Eo, {
        ref: d,
        visible: S.value,
        effect: "light",
        pure: !0,
        offset: e.popperOffset,
        showArrow: !1,
        persistent: !0,
        popperClass: e.popperClass,
        placement: h.value,
        teleported: O.value,
        fallbackPlacements: I.value,
        transition: C.value,
        gpuAcceleration: !1
      }, {
        content: () => {
          var _e;
          return ke("div", {
            class: [
              i.m(A.value),
              i.m("popup-container"),
              e.popperClass
            ],
            onMouseenter: (Ae) => se(Ae, 100),
            onMouseleave: () => oe(!0),
            onFocus: (Ae) => se(Ae, 100)
          }, [
            ke("ul", {
              class: [
                i.b(),
                i.m("popup"),
                i.m(`popup-${h.value}`)
              ],
              style: F.value
            }, [(_e = t.default) == null ? void 0 : _e.call(t)])
          ]);
        },
        default: () => ke("div", {
          class: s.e("title"),
          style: [
            K.value,
            { backgroundColor: x.value }
          ],
          onClick: R
        }, ue)
      }) : ke(He, {}, [
        ke("div", {
          class: s.e("title"),
          style: [
            K.value,
            { backgroundColor: x.value }
          ],
          ref: g,
          onClick: R
        }, ue),
        ke(U1, {}, {
          default: () => {
            var _e;
            return ct(ke("ul", {
              role: "menu",
              class: [i.b(), i.m("inline")],
              style: F.value
            }, [(_e = t.default) == null ? void 0 : _e.call(t)]), [[en, S.value]]);
          }
        })
      ]);
      return ke("li", {
        class: [
          s.b(),
          s.is("active", T.value),
          s.is("opened", S.value),
          s.is("disabled", e.disabled)
        ],
        role: "menuitem",
        ariaHaspopup: !0,
        ariaExpanded: S.value,
        onMouseenter: se,
        onMouseleave: () => oe(!0),
        onFocus: se
      }, [le]);
    };
  }
});
const xw = he({
  mode: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "vertical"
  },
  defaultActive: {
    type: String,
    default: ""
  },
  defaultOpeneds: {
    type: te(Array),
    default: () => Wl([])
  },
  uniqueOpened: Boolean,
  router: Boolean,
  menuTrigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover"
  },
  collapse: Boolean,
  backgroundColor: String,
  textColor: String,
  activeTextColor: String,
  collapseTransition: {
    type: Boolean,
    default: !0
  },
  ellipsis: {
    type: Boolean,
    default: !0
  },
  popperEffect: {
    type: String,
    values: ["dark", "light"],
    default: "dark"
  }
}), Wo = (e) => Array.isArray(e) && e.every((t) => Le(t)), Iw = {
  close: (e, t) => Le(e) && Wo(t),
  open: (e, t) => Le(e) && Wo(t),
  select: (e, t, n, r) => Le(e) && Wo(t) && Zt(n) && (r === void 0 || r instanceof Promise)
};
var Aw = B({
  name: "ElMenu",
  props: xw,
  emits: Iw,
  setup(e, { emit: t, slots: n, expose: r }) {
    const o = Pe(), a = o.appContext.config.globalProperties.$router, i = _(), s = fe("menu"), l = fe("sub-menu"), u = _(-1), c = _(e.defaultOpeneds && !e.collapse ? e.defaultOpeneds.slice(0) : []), f = _(e.defaultActive), v = _({}), y = _({}), g = b(() => e.mode === "horizontal" || e.mode === "vertical" && e.collapse), d = () => {
      const A = f.value && v.value[f.value];
      if (!A || e.mode === "horizontal" || e.collapse)
        return;
      A.indexPath.forEach((F) => {
        const K = y.value[F];
        K && h(F, K.indexPath);
      });
    }, h = (A, $) => {
      c.value.includes(A) || (e.uniqueOpened && (c.value = c.value.filter((F) => $.includes(F))), c.value.push(A), t("open", A, $));
    }, m = (A) => {
      const $ = c.value.indexOf(A);
      $ !== -1 && c.value.splice($, 1);
    }, w = (A, $) => {
      m(A), t("close", A, $);
    }, O = ({
      index: A,
      indexPath: $
    }) => {
      c.value.includes(A) ? w(A, $) : h(A, $);
    }, C = (A) => {
      (e.mode === "horizontal" || e.collapse) && (c.value = []);
      const { index: $, indexPath: F } = A;
      if (!(Bn($) || Bn(F)))
        if (e.router && a) {
          const K = A.route || $, G = a.push(K).then((ie) => (ie || (f.value = $), ie));
          t("select", $, F, { index: $, indexPath: F, route: K }, G);
        } else
          f.value = $, t("select", $, F, { index: $, indexPath: F });
    }, I = (A) => {
      const $ = v.value, F = $[A] || f.value && $[f.value] || $[e.defaultActive];
      F ? f.value = F.index : f.value = A;
    }, S = () => {
      var A, $;
      if (!i.value)
        return -1;
      const F = Array.from(($ = (A = i.value) == null ? void 0 : A.childNodes) != null ? $ : []).filter((J) => J.nodeName !== "#comment" && (J.nodeName !== "#text" || J.nodeValue)), K = 64, G = Number.parseInt(getComputedStyle(i.value).paddingLeft, 10), ie = Number.parseInt(getComputedStyle(i.value).paddingRight, 10), R = i.value.clientWidth - G - ie;
      let se = 0, oe = 0;
      return F.forEach((J, ue) => {
        se += J.offsetWidth || 0, se <= R - K && (oe = ue + 1);
      }), oe === F.length ? -1 : oe;
    }, T = (A, $ = 33.34) => {
      let F;
      return () => {
        F && clearTimeout(F), F = setTimeout(() => {
          A();
        }, $);
      };
    };
    let x = !0;
    const j = () => {
      const A = () => {
        u.value = -1, me(() => {
          u.value = S();
        });
      };
      x ? A() : T(A)(), x = !1;
    };
    U(() => e.defaultActive, (A) => {
      v.value[A] || (f.value = ""), I(A);
    }), U(() => e.collapse, (A) => {
      A && (c.value = []);
    }), U(v.value, d);
    let L;
    al(() => {
      e.mode === "horizontal" && e.ellipsis ? L = Kn(i, j).stop : L == null || L();
    });
    {
      const A = (G) => {
        y.value[G.index] = G;
      }, $ = (G) => {
        delete y.value[G.index];
      };
      Be("rootMenu", Lt({
        props: e,
        openedMenus: c,
        items: v,
        subMenus: y,
        activeIndex: f,
        isMenuPopup: g,
        addMenuItem: (G) => {
          v.value[G.index] = G;
        },
        removeMenuItem: (G) => {
          delete v.value[G.index];
        },
        addSubMenu: A,
        removeSubMenu: $,
        openMenu: h,
        closeMenu: w,
        handleMenuItemClick: C,
        handleSubMenuClick: O
      })), Be(`subMenu:${o.uid}`, {
        addSubMenu: A,
        removeSubMenu: $,
        mouseInChild: _(!1),
        level: 0
      });
    }
    return Te(() => {
      e.mode === "horizontal" && new Ew(o.vnode.el, s.namespace.value);
    }), r({
      open: ($) => {
        const { indexPath: F } = y.value[$];
        F.forEach((K) => h(K, F));
      },
      close: m,
      handleResize: j
    }), () => {
      var A, $;
      let F = ($ = (A = n.default) == null ? void 0 : A.call(n)) != null ? $ : [];
      const K = [];
      if (e.mode === "horizontal" && i.value) {
        const R = Wr(F), se = u.value === -1 ? R : R.slice(0, u.value), oe = u.value === -1 ? [] : R.slice(u.value);
        oe != null && oe.length && e.ellipsis && (F = se, K.push(ke(Ka, {
          index: "sub-menu-more",
          class: l.e("hide-arrow")
        }, {
          title: () => ke(bt, {
            class: l.e("icon-more")
          }, { default: () => ke(Hh) }),
          default: () => oe
        })));
      }
      const G = ku(e, 0), ie = ke("ul", {
        key: String(e.collapse),
        role: "menubar",
        ref: i,
        style: G.value,
        class: {
          [s.b()]: !0,
          [s.m(e.mode)]: !0,
          [s.m("collapse")]: e.collapse
        }
      }, [...F, ...K]);
      return e.collapseTransition && e.mode === "vertical" ? ke(_w, () => ie) : ie;
    };
  }
});
const Mw = he({
  index: {
    type: te([String, null]),
    default: null
  },
  route: {
    type: te([String, Object])
  },
  disabled: Boolean
}), Pw = {
  click: (e) => Le(e.index) && Array.isArray(e.indexPath)
}, Ko = "ElMenuItem", kw = B({
  name: Ko,
  components: {
    ElTooltip: Eo
  },
  props: Mw,
  emits: Pw,
  setup(e, { emit: t }) {
    const n = Pe(), r = ne("rootMenu"), o = fe("menu"), a = fe("menu-item");
    r || Cn(Ko, "can not inject root menu");
    const { parentMenu: i, indexPath: s } = Pu(n, xt(e, "index")), l = ne(`subMenu:${i.value.uid}`);
    l || Cn(Ko, "can not inject sub menu");
    const u = b(() => e.index === r.activeIndex), c = Lt({
      index: e.index,
      indexPath: s,
      active: u
    }), f = () => {
      e.disabled || (r.handleMenuItemClick({
        index: e.index,
        indexPath: s.value,
        route: e.route
      }), t("click", c));
    };
    return Te(() => {
      l.addSubMenu(c), r.addMenuItem(c);
    }), Ve(() => {
      l.removeSubMenu(c), r.removeMenuItem(c);
    }), {
      parentMenu: i,
      rootMenu: r,
      active: u,
      nsMenu: o,
      nsMenuItem: a,
      handleClick: f
    };
  }
});
function Lw(e, t, n, r, o, a) {
  const i = Wt("el-tooltip");
  return M(), V("li", {
    class: D([
      e.nsMenuItem.b(),
      e.nsMenuItem.is("active", e.active),
      e.nsMenuItem.is("disabled", e.disabled)
    ]),
    role: "menuitem",
    tabindex: "-1",
    onClick: t[0] || (t[0] = (...s) => e.handleClick && e.handleClick(...s))
  }, [
    e.parentMenu.type.name === "ElMenu" && e.rootMenu.props.collapse && e.$slots.title ? (M(), re(i, {
      key: 0,
      effect: e.rootMenu.props.popperEffect,
      placement: "right",
      "fallback-placements": ["left"],
      persistent: ""
    }, {
      content: H(() => [
        Z(e.$slots, "title")
      ]),
      default: H(() => [
        q("div", {
          class: D(e.nsMenu.be("tooltip", "trigger"))
        }, [
          Z(e.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 8, ["effect"])) : (M(), V(He, { key: 1 }, [
      Z(e.$slots, "default"),
      Z(e.$slots, "title")
    ], 64))
  ], 2);
}
var Lu = /* @__PURE__ */ ve(kw, [["render", Lw], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);
const Fw = {
  title: String
}, Nw = "ElMenuItemGroup", Rw = B({
  name: Nw,
  props: Fw,
  setup() {
    return {
      ns: fe("menu-item-group")
    };
  }
});
function Dw(e, t, n, r, o, a) {
  return M(), V("li", {
    class: D(e.ns.b())
  }, [
    q("div", {
      class: D(e.ns.e("title"))
    }, [
      e.$slots.title ? Z(e.$slots, "title", { key: 1 }) : (M(), V(He, { key: 0 }, [
        En(Ee(e.title), 1)
      ], 64))
    ], 2),
    q("ul", null, [
      Z(e.$slots, "default")
    ])
  ], 2);
}
var Fu = /* @__PURE__ */ ve(Rw, [["render", Dw], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);
const Bw = mt(Aw, {
  MenuItem: Lu,
  MenuItemGroup: Fu,
  SubMenu: Ka
}), Uo = Yn(Lu);
Yn(Fu);
Yn(Ka);
const Nu = Symbol("ElSelectGroup"), To = Symbol("ElSelect");
function jw(e, t) {
  const n = ne(To), r = ne(Nu, { disabled: !1 }), o = b(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), a = b(() => n.props.multiple ? f(n.props.modelValue, e.value) : v(e.value, n.props.modelValue)), i = b(() => {
    if (n.props.multiple) {
      const d = n.props.modelValue || [];
      return !a.value && d.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = b(() => e.label || (o.value ? "" : e.value)), l = b(() => e.value || e.label || ""), u = b(() => e.disabled || t.groupDisabled || i.value), c = Pe(), f = (d = [], h) => {
    if (o.value) {
      const m = n.props.valueKey;
      return d && d.some((w) => Qr(nt(w, m)) === nt(h, m));
    } else
      return d && d.includes(h);
  }, v = (d, h) => {
    if (o.value) {
      const { valueKey: m } = n.props;
      return nt(d, m) === nt(h, m);
    } else
      return d === h;
  }, y = () => {
    !e.disabled && !r.disabled && (n.hoverIndex = n.optionsArray.indexOf(c.proxy));
  };
  U(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), U(() => e.value, (d, h) => {
    const { remote: m, valueKey: w } = n.props;
    if (Object.is(d, h) || (n.onOptionDestroy(h, c.proxy), n.onOptionCreate(c.proxy)), !e.created && !m) {
      if (w && typeof d == "object" && typeof h == "object" && d[w] === h[w])
        return;
      n.setSelected();
    }
  }), U(() => r.disabled, () => {
    t.groupDisabled = r.disabled;
  }, { immediate: !0 });
  const { queryChange: g } = Qr(n);
  return U(g, (d) => {
    const { query: h } = p(d), m = new RegExp(qm(h), "i");
    t.visible = m.test(s.value) || e.created, t.visible || n.filteredOptionsCount--;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: s,
    currentValue: l,
    itemSelected: a,
    isDisabled: u,
    hoverItem: y
  };
}
const zw = B({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: !0,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = fe("select"), n = b(() => [
      t.be("dropdown", "item"),
      t.is("disabled", p(i)),
      {
        selected: p(a),
        hover: p(c)
      }
    ]), r = Lt({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: o, itemSelected: a, isDisabled: i, select: s, hoverItem: l } = jw(e, r), { visible: u, hover: c } = yr(r), f = Pe().proxy;
    s.onOptionCreate(f), Ve(() => {
      const y = f.value, { selected: g } = s, h = (s.props.multiple ? g : [g]).some((m) => m.value === f.value);
      me(() => {
        s.cachedOptions.get(y) === f && !h && s.cachedOptions.delete(y);
      }), s.onOptionDestroy(y, f);
    });
    function v() {
      e.disabled !== !0 && r.groupDisabled !== !0 && s.handleOptionSelect(f);
    }
    return {
      ns: t,
      containerKls: n,
      currentLabel: o,
      itemSelected: a,
      isDisabled: i,
      select: s,
      hoverItem: l,
      visible: u,
      hover: c,
      selectOptionClick: v,
      states: r
    };
  }
});
function Hw(e, t, n, r, o, a) {
  return ct((M(), V("li", {
    class: D(e.containerKls),
    onMouseenter: t[0] || (t[0] = (...i) => e.hoverItem && e.hoverItem(...i)),
    onClick: t[1] || (t[1] = Ce((...i) => e.selectOptionClick && e.selectOptionClick(...i), ["stop"]))
  }, [
    Z(e.$slots, "default", {}, () => [
      q("span", null, Ee(e.currentLabel), 1)
    ])
  ], 34)), [
    [en, e.visible]
  ]);
}
var Ua = /* @__PURE__ */ ve(zw, [["render", Hw], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const Vw = B({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ne(To), t = fe("select"), n = b(() => e.props.popperClass), r = b(() => e.props.multiple), o = b(() => e.props.fitInputWidth), a = _("");
    function i() {
      var s;
      a.value = `${(s = e.selectWrapper) == null ? void 0 : s.offsetWidth}px`;
    }
    return Te(() => {
      i(), Kn(e.selectWrapper, i);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: o
    };
  }
});
function qw(e, t, n, r, o, a) {
  return M(), V("div", {
    class: D([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Ie({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    Z(e.$slots, "default")
  ], 6);
}
var Ww = /* @__PURE__ */ ve(Vw, [["render", qw], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function Kw(e) {
  const { t } = go();
  return Lt({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: !1,
    selected: e.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: !1,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: !1,
    cachedPlaceHolder: "",
    currentPlaceholder: t("el.select.placeholder"),
    menuVisibleOnFocus: !1,
    isOnComposition: !1,
    prefixWidth: 11,
    mouseEnter: !1,
    focused: !1
  });
}
const Uw = (e, t, n) => {
  const { t: r } = go(), o = fe("select");
  io({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, b(() => e.suffixTransition === !1));
  const a = _(null), i = _(null), s = _(null), l = _(null), u = _(null), c = _(null), f = _(null), v = _(null), y = _(-1), g = ut({ query: "" }), d = ut(""), h = _([]);
  let m = 0;
  const { form: w, formItem: O } = du(), C = b(() => !e.filterable || e.multiple || !t.visible), I = b(() => e.disabled || (w == null ? void 0 : w.disabled)), S = b(() => {
    const E = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !I.value && t.inputHovering && E;
  }), T = b(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), x = b(() => o.is("reverse", T.value && t.visible && e.suffixTransition)), j = b(() => (w == null ? void 0 : w.statusIcon) && (O == null ? void 0 : O.validateState) && Hl[O == null ? void 0 : O.validateState]), L = b(() => e.remote ? 300 : 0), A = b(() => e.loading ? e.loadingText || r("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || r("el.select.noMatch") : t.options.size === 0 ? e.noDataText || r("el.select.noData") : null), $ = b(() => {
    const E = Array.from(t.options.values()), P = [];
    return h.value.forEach((z) => {
      const ae = E.findIndex((je) => je.currentLabel === z);
      ae > -1 && P.push(E[ae]);
    }), P.length ? P : E;
  }), F = b(() => Array.from(t.cachedOptions.values())), K = b(() => {
    const E = $.value.filter((P) => !P.created).some((P) => P.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !E;
  }), G = Er(), ie = b(() => ["small"].includes(G.value) ? "small" : "default"), R = b({
    get() {
      return t.visible && A.value !== !1;
    },
    set(E) {
      t.visible = E;
    }
  });
  U([() => I.value, () => G.value, () => w == null ? void 0 : w.size], () => {
    me(() => {
      se();
    });
  }), U(() => e.placeholder, (E) => {
    t.cachedPlaceHolder = t.currentPlaceholder = E, e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (t.currentPlaceholder = "");
  }), U(() => e.modelValue, (E, P) => {
    e.multiple && (se(), E && E.length > 0 || i.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", oe(t.query))), le(), e.filterable && !e.multiple && (t.inputLength = 20), !zi(E, P) && e.validateEvent && (O == null || O.validate("change").catch((z) => Re(z)));
  }, {
    flush: "post",
    deep: !0
  }), U(() => t.visible, (E) => {
    var P, z, ae, je, qe;
    E ? ((z = (P = l.value) == null ? void 0 : P.updatePopper) == null || z.call(P), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, (je = (ae = s.value) == null ? void 0 : ae.focus) == null || je.call(ae), e.multiple ? (qe = i.value) == null || qe.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), oe(t.query), !e.multiple && !e.remote && (g.value.query = "", Jn(g), Jn(d)))) : (e.filterable && (We(e.filterMethod) && e.filterMethod(""), We(e.remoteMethod) && e.remoteMethod("")), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, Ae(), me(() => {
      i.value && i.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", E);
  }), U(() => t.options.entries(), () => {
    var E, P, z;
    if (!$e)
      return;
    (P = (E = l.value) == null ? void 0 : E.updatePopper) == null || P.call(E), e.multiple && se();
    const ae = ((z = f.value) == null ? void 0 : z.querySelectorAll("input")) || [];
    Array.from(ae).includes(document.activeElement) || le(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && ue();
  }, {
    flush: "post"
  }), U(() => t.hoverIndex, (E) => {
    wt(E) && E > -1 ? y.value = $.value[E] || {} : y.value = {}, $.value.forEach((P) => {
      P.hover = y.value === P;
    });
  });
  const se = () => {
    me(() => {
      var E, P;
      if (!a.value)
        return;
      const z = a.value.$el.querySelector("input");
      m = m || (z.clientHeight > 0 ? z.clientHeight + 2 : 0);
      const ae = c.value, je = ig(G.value || (w == null ? void 0 : w.size)), qe = G.value || je === m || m <= 0 ? je : m;
      !(z.offsetParent === null) && (z.style.height = `${(t.selected.length === 0 ? qe : Math.max(ae ? ae.clientHeight + (ae.clientHeight > qe ? 6 : 0) : 0, qe)) - 2}px`), t.visible && A.value !== !1 && ((P = (E = l.value) == null ? void 0 : E.updatePopper) == null || P.call(E));
    });
  }, oe = async (E) => {
    if (!(t.previousQuery === E || t.isOnComposition)) {
      if (t.previousQuery === null && (We(e.filterMethod) || We(e.remoteMethod))) {
        t.previousQuery = E;
        return;
      }
      t.previousQuery = E, me(() => {
        var P, z;
        t.visible && ((z = (P = l.value) == null ? void 0 : P.updatePopper) == null || z.call(P));
      }), t.hoverIndex = -1, e.multiple && e.filterable && me(() => {
        const P = i.value.value.length * 15 + 20;
        t.inputLength = e.collapseTags ? Math.min(50, P) : P, J(), se();
      }), e.remote && We(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(E)) : We(e.filterMethod) ? (e.filterMethod(E), Jn(d)) : (t.filteredOptionsCount = t.optionsCount, g.value.query = E, Jn(g), Jn(d)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await me(), ue());
    }
  }, J = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = i.value.value ? "" : t.cachedPlaceHolder);
  }, ue = () => {
    const E = $.value.filter((ae) => ae.visible && !ae.disabled && !ae.states.groupDisabled), P = E.find((ae) => ae.created), z = E[0];
    t.hoverIndex = Dt($.value, P || z);
  }, le = () => {
    var E;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const z = _e(e.modelValue);
      (E = z.props) != null && E.created ? (t.createdLabel = z.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = z.currentLabel, t.selected = z, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const P = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((z) => {
      P.push(_e(z));
    }), t.selected = P, me(() => {
      se();
    });
  }, _e = (E) => {
    let P;
    const z = Mo(E).toLowerCase() === "object", ae = Mo(E).toLowerCase() === "null", je = Mo(E).toLowerCase() === "undefined";
    for (let Vt = t.cachedOptions.size - 1; Vt >= 0; Vt--) {
      const lt = F.value[Vt];
      if (z ? nt(lt.value, e.valueKey) === nt(E, e.valueKey) : lt.value === E) {
        P = {
          value: E,
          currentLabel: lt.currentLabel,
          isDisabled: lt.isDisabled
        };
        break;
      }
    }
    if (P)
      return P;
    const qe = z ? E.label : !ae && !je ? E : "", Ht = {
      value: E,
      currentLabel: qe
    };
    return e.multiple && (Ht.hitState = !1), Ht;
  }, Ae = () => {
    setTimeout(() => {
      const E = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((P) => $.value.findIndex((z) => nt(z, E) === nt(P, E)))) : t.hoverIndex = -1 : t.hoverIndex = $.value.findIndex((P) => An(P) === An(t.selected));
    }, 300);
  }, Fe = () => {
    var E, P;
    Ke(), (P = (E = l.value) == null ? void 0 : E.updatePopper) == null || P.call(E), e.multiple && se();
  }, Ke = () => {
    var E;
    t.inputWidth = (E = a.value) == null ? void 0 : E.$el.offsetWidth;
  }, W = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, oe(t.query));
  }, Q = ji(() => {
    W();
  }, L.value), Oe = ji((E) => {
    oe(E.target.value);
  }, L.value), pe = (E) => {
    zi(e.modelValue, E) || n.emit(Vl, E);
  }, ge = (E) => {
    if (E.code !== ze.delete) {
      if (E.target.value.length <= 0 && !it()) {
        const P = e.modelValue.slice();
        P.pop(), n.emit(ot, P), pe(P);
      }
      E.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }
  }, Ne = (E, P) => {
    const z = t.selected.indexOf(P);
    if (z > -1 && !I.value) {
      const ae = e.modelValue.slice();
      ae.splice(z, 1), n.emit(ot, ae), pe(ae), n.emit("remove-tag", P.value);
    }
    E.stopPropagation(), k();
  }, _t = (E) => {
    E.stopPropagation();
    const P = e.multiple ? [] : "";
    if (!Le(P))
      for (const z of t.selected)
        z.isDisabled && P.push(z.value);
    n.emit(ot, P), pe(P), t.hoverIndex = -1, t.visible = !1, n.emit("clear"), k();
  }, Ct = (E) => {
    var P;
    if (e.multiple) {
      const z = (e.modelValue || []).slice(), ae = Dt(z, E.value);
      ae > -1 ? z.splice(ae, 1) : (e.multipleLimit <= 0 || z.length < e.multipleLimit) && z.push(E.value), n.emit(ot, z), pe(z), E.created && (t.query = "", oe(""), t.inputLength = 20), e.filterable && ((P = i.value) == null || P.focus());
    } else
      n.emit(ot, E.value), pe(E.value), t.visible = !1;
    Bt(), !t.visible && me(() => {
      Xe(E);
    });
  }, Dt = (E = [], P) => {
    if (!Zt(P))
      return E.indexOf(P);
    const z = e.valueKey;
    let ae = -1;
    return E.some((je, qe) => Qr(nt(je, z)) === nt(P, z) ? (ae = qe, !0) : !1), ae;
  }, Bt = () => {
    const E = i.value || a.value;
    E && (E == null || E.focus());
  }, Xe = (E) => {
    var P, z, ae, je, qe;
    const Ht = Array.isArray(E) ? E[0] : E;
    let Vt = null;
    if (Ht != null && Ht.value) {
      const lt = $.value.filter((Ao) => Ao.value === Ht.value);
      lt.length > 0 && (Vt = lt[0].$el);
    }
    if (l.value && Vt) {
      const lt = (je = (ae = (z = (P = l.value) == null ? void 0 : P.popperRef) == null ? void 0 : z.contentRef) == null ? void 0 : ae.querySelector) == null ? void 0 : je.call(ae, `.${o.be("dropdown", "wrap")}`);
      lt && Gm(lt, Vt);
    }
    (qe = v.value) == null || qe.handleScroll();
  }, on = (E) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(E.value, E), t.cachedOptions.set(E.value, E);
  }, mn = (E, P) => {
    t.options.get(E) === P && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(E));
  }, Je = (E) => {
    E.code !== ze.backspace && it(!1), t.inputLength = i.value.value.length * 15 + 20, se();
  }, it = (E) => {
    if (!Array.isArray(t.selected))
      return;
    const P = t.selected[t.selected.length - 1];
    if (P)
      return E === !0 || E === !1 ? (P.hitState = E, E) : (P.hitState = !P.hitState, P.hitState);
  }, jt = (E) => {
    const P = E.target.value;
    if (E.type === "compositionend")
      t.isOnComposition = !1, me(() => oe(P));
    else {
      const z = P[P.length - 1] || "";
      t.isOnComposition = !ql(z);
    }
  }, an = () => {
    me(() => Xe(t.selected));
  }, $t = (E) => {
    t.focused || ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), t.focused = !0, n.emit("focus", E));
  }, k = () => {
    var E, P;
    t.visible ? (E = i.value || a.value) == null || E.focus() : (P = a.value) == null || P.focus();
  }, X = () => {
    var E, P, z;
    t.visible = !1, (E = a.value) == null || E.blur(), (z = (P = s.value) == null ? void 0 : P.blur) == null || z.call(P);
  }, ye = (E) => {
    var P, z, ae;
    (P = l.value) != null && P.isFocusInsideContent(E) || (z = u.value) != null && z.isFocusInsideContent(E) || (ae = f.value) != null && ae.contains(E.relatedTarget) || (t.visible && zt(), t.focused = !1, n.emit("blur", E));
  }, st = (E) => {
    _t(E);
  }, zt = () => {
    t.visible = !1;
  }, _o = (E) => {
    t.visible && (E.preventDefault(), E.stopPropagation(), t.visible = !1);
  }, _r = (E) => {
    E && !t.mouseEnter || I.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!l.value || !l.value.isFocusInsideContent()) && (t.visible = !t.visible), k());
  }, Cr = () => {
    t.visible ? $.value[t.hoverIndex] && Ct($.value[t.hoverIndex]) : _r();
  }, An = (E) => Zt(E.value) ? nt(E.value, e.valueKey) : E.value, Co = b(() => $.value.filter((E) => E.visible).every((E) => E.disabled)), Xn = b(() => t.selected.slice(0, e.maxCollapseTags)), $o = b(() => t.selected.slice(e.maxCollapseTags)), $r = (E) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !Co.value) {
      E === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : E === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const P = $.value[t.hoverIndex];
      (P.disabled === !0 || P.states.groupDisabled === !0 || !P.visible) && $r(E), me(() => Xe(y.value));
    }
  }, xr = () => {
    t.mouseEnter = !0;
  }, xo = () => {
    t.mouseEnter = !1;
  }, Io = (E, P) => {
    var z, ae;
    Ne(E, P), (ae = (z = u.value) == null ? void 0 : z.updatePopper) == null || ae.call(z);
  }, Mn = b(() => ({
    maxWidth: `${p(t.inputWidth) - 32 - (j.value ? 22 : 0)}px`,
    width: "100%"
  }));
  return {
    optionList: h,
    optionsArray: $,
    selectSize: G,
    handleResize: Fe,
    debouncedOnInputChange: Q,
    debouncedQueryChange: Oe,
    deletePrevTag: ge,
    deleteTag: Ne,
    deleteSelected: _t,
    handleOptionSelect: Ct,
    scrollToOption: Xe,
    readonly: C,
    resetInputHeight: se,
    showClose: S,
    iconComponent: T,
    iconReverse: x,
    showNewOption: K,
    collapseTagSize: ie,
    setSelected: le,
    managePlaceholder: J,
    selectDisabled: I,
    emptyText: A,
    toggleLastOptionHitState: it,
    resetInputState: Je,
    handleComposition: jt,
    onOptionCreate: on,
    onOptionDestroy: mn,
    handleMenuEnter: an,
    handleFocus: $t,
    focus: k,
    blur: X,
    handleBlur: ye,
    handleClearClick: st,
    handleClose: zt,
    handleKeydownEscape: _o,
    toggleMenu: _r,
    selectOption: Cr,
    getValueKey: An,
    navigateOptions: $r,
    handleDeleteTooltipTag: Io,
    dropMenuVisible: R,
    queryChange: g,
    groupQueryChange: d,
    showTagList: Xn,
    collapseTagList: $o,
    selectTagsStyle: Mn,
    reference: a,
    input: i,
    iOSInput: s,
    tooltipRef: l,
    tagTooltipRef: u,
    tags: c,
    selectWrapper: f,
    scrollbar: v,
    handleMouseEnter: xr,
    handleMouseLeave: xo
  };
};
var Gw = B({
  name: "ElOptions",
  emits: ["update-options"],
  setup(e, { slots: t, emit: n }) {
    let r = [];
    function o(a, i) {
      if (a.length !== i.length)
        return !1;
      for (const [s] of a.entries())
        if (a[s] != i[s])
          return !1;
      return !0;
    }
    return () => {
      var a, i;
      const s = (a = t.default) == null ? void 0 : a.call(t), l = [];
      function u(c) {
        Array.isArray(c) && c.forEach((f) => {
          var v, y, g, d;
          const h = (v = (f == null ? void 0 : f.type) || {}) == null ? void 0 : v.name;
          h === "ElOptionGroup" ? u(!Le(f.children) && !Array.isArray(f.children) && We((y = f.children) == null ? void 0 : y.default) ? (g = f.children) == null ? void 0 : g.default() : f.children) : h === "ElOption" ? l.push((d = f.props) == null ? void 0 : d.label) : Array.isArray(f.children) && u(f.children);
        });
      }
      return s.length && u((i = s[0]) == null ? void 0 : i.children), o(l, r) || (r = l, n("update-options", l)), s;
    };
  }
});
const Is = "ElSelect", Yw = B({
  name: Is,
  componentName: Is,
  components: {
    ElInput: za,
    ElSelectMenu: Ww,
    ElOption: Ua,
    ElOptions: Gw,
    ElTag: q1,
    ElScrollbar: bb,
    ElTooltip: Eo,
    ElIcon: bt
  },
  directives: { ClickOutside: L1 },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: sg
    },
    effect: {
      type: String,
      default: "light"
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    popperOptions: {
      type: Object,
      default: () => ({})
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: !0
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      default: !1
    },
    maxCollapseTags: {
      type: Number,
      default: 1
    },
    teleported: tt.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: It,
      default: Ma
    },
    fitInputWidth: {
      type: Boolean,
      default: !1
    },
    suffixIcon: {
      type: It,
      default: jl
    },
    tagType: { ...xu.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: !0
    },
    remoteShowSuffix: {
      type: Boolean,
      default: !1
    },
    suffixTransition: {
      type: Boolean,
      default: !0
    },
    placement: {
      type: String,
      values: bo,
      default: "bottom-start"
    }
  },
  emits: [
    ot,
    Vl,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = fe("select"), r = fe("input"), { t: o } = go(), a = Kw(e), {
      optionList: i,
      optionsArray: s,
      selectSize: l,
      readonly: u,
      handleResize: c,
      collapseTagSize: f,
      debouncedOnInputChange: v,
      debouncedQueryChange: y,
      deletePrevTag: g,
      deleteTag: d,
      deleteSelected: h,
      handleOptionSelect: m,
      scrollToOption: w,
      setSelected: O,
      resetInputHeight: C,
      managePlaceholder: I,
      showClose: S,
      selectDisabled: T,
      iconComponent: x,
      iconReverse: j,
      showNewOption: L,
      emptyText: A,
      toggleLastOptionHitState: $,
      resetInputState: F,
      handleComposition: K,
      onOptionCreate: G,
      onOptionDestroy: ie,
      handleMenuEnter: R,
      handleFocus: se,
      focus: oe,
      blur: J,
      handleBlur: ue,
      handleClearClick: le,
      handleClose: _e,
      handleKeydownEscape: Ae,
      toggleMenu: Fe,
      selectOption: Ke,
      getValueKey: W,
      navigateOptions: Q,
      handleDeleteTooltipTag: Oe,
      dropMenuVisible: pe,
      reference: ge,
      input: Ne,
      iOSInput: _t,
      tooltipRef: Ct,
      tagTooltipRef: Dt,
      tags: Bt,
      selectWrapper: Xe,
      scrollbar: on,
      queryChange: mn,
      groupQueryChange: Je,
      handleMouseEnter: it,
      handleMouseLeave: jt,
      showTagList: an,
      collapseTagList: $t,
      selectTagsStyle: k
    } = Uw(e, a, t), {
      inputWidth: X,
      selected: ye,
      inputLength: st,
      filteredOptionsCount: zt,
      visible: _o,
      selectedLabel: _r,
      hoverIndex: Cr,
      query: An,
      inputHovering: Co,
      currentPlaceholder: Xn,
      menuVisibleOnFocus: $o,
      isOnComposition: $r,
      options: xr,
      cachedOptions: xo,
      optionsCount: Io,
      prefixWidth: Mn
    } = yr(a), E = b(() => {
      const Qe = [n.b()], hn = p(l);
      return hn && Qe.push(n.m(hn)), e.disabled && Qe.push(n.m("disabled")), Qe;
    }), P = b(() => [
      n.e("tags"),
      n.is("disabled", p(T))
    ]), z = b(() => [
      n.b("tags-wrapper"),
      { "has-prefix": p(Mn) && p(ye).length }
    ]), ae = b(() => [
      n.e("input"),
      n.is(p(l)),
      n.is("disabled", p(T))
    ]), je = b(() => [
      n.e("input"),
      n.is(p(l)),
      n.em("input", "iOS")
    ]), qe = b(() => [
      n.is("empty", !e.allowCreate && !!p(An) && p(zt) === 0)
    ]), Ht = b(() => ({ maxWidth: `${p(X) > 123 ? p(X) - 123 : p(X) - 75}px` })), Vt = b(() => ({
      marginLeft: `${p(Mn)}px`,
      flexGrow: 1,
      width: `${p(st) / (p(X) - 32)}%`,
      maxWidth: `${p(X) - 42}px`
    }));
    Be(To, Lt({
      props: e,
      options: xr,
      optionsArray: s,
      cachedOptions: xo,
      optionsCount: Io,
      filteredOptionsCount: zt,
      hoverIndex: Cr,
      handleOptionSelect: m,
      onOptionCreate: G,
      onOptionDestroy: ie,
      selectWrapper: Xe,
      selected: ye,
      setSelected: O,
      queryChange: mn,
      groupQueryChange: Je
    })), Te(() => {
      a.cachedPlaceHolder = Xn.value = e.placeholder || (() => o("el.select.placeholder")), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (Xn.value = ""), Kn(Xe, c), e.remote && e.multiple && C(), me(() => {
        const Qe = ge.value && ge.value.$el;
        if (Qe && (X.value = Qe.getBoundingClientRect().width, t.slots.prefix)) {
          const hn = Qe.querySelector(`.${r.e("prefix")}`);
          Mn.value = Math.max(hn.getBoundingClientRect().width + 11, 30);
        }
      }), O();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(ot, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(ot, "");
    const lt = b(() => {
      var Qe, hn;
      return (hn = (Qe = Ct.value) == null ? void 0 : Qe.popperRef) == null ? void 0 : hn.contentRef;
    });
    return {
      isIOS: ul,
      onOptionsRendered: (Qe) => {
        i.value = Qe;
      },
      prefixWidth: Mn,
      selectSize: l,
      readonly: u,
      handleResize: c,
      collapseTagSize: f,
      debouncedOnInputChange: v,
      debouncedQueryChange: y,
      deletePrevTag: g,
      deleteTag: d,
      handleDeleteTooltipTag: Oe,
      deleteSelected: h,
      handleOptionSelect: m,
      scrollToOption: w,
      inputWidth: X,
      selected: ye,
      inputLength: st,
      filteredOptionsCount: zt,
      visible: _o,
      selectedLabel: _r,
      hoverIndex: Cr,
      query: An,
      inputHovering: Co,
      currentPlaceholder: Xn,
      menuVisibleOnFocus: $o,
      isOnComposition: $r,
      options: xr,
      resetInputHeight: C,
      managePlaceholder: I,
      showClose: S,
      selectDisabled: T,
      iconComponent: x,
      iconReverse: j,
      showNewOption: L,
      emptyText: A,
      toggleLastOptionHitState: $,
      resetInputState: F,
      handleComposition: K,
      handleMenuEnter: R,
      handleFocus: se,
      focus: oe,
      blur: J,
      handleBlur: ue,
      handleClearClick: le,
      handleClose: _e,
      handleKeydownEscape: Ae,
      toggleMenu: Fe,
      selectOption: Ke,
      getValueKey: W,
      navigateOptions: Q,
      dropMenuVisible: pe,
      reference: ge,
      input: Ne,
      iOSInput: _t,
      tooltipRef: Ct,
      popperPaneRef: lt,
      tags: Bt,
      selectWrapper: Xe,
      scrollbar: on,
      wrapperKls: E,
      tagsKls: P,
      tagWrapperKls: z,
      inputKls: ae,
      iOSInputKls: je,
      scrollbarKls: qe,
      selectTagsStyle: k,
      nsSelect: n,
      tagTextStyle: Ht,
      inputStyle: Vt,
      handleMouseEnter: it,
      handleMouseLeave: jt,
      showTagList: an,
      collapseTagList: $t,
      tagTooltipRef: Dt
    };
  }
}), Zw = ["disabled", "autocomplete"], Xw = ["disabled"], Jw = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function Qw(e, t, n, r, o, a) {
  const i = Wt("el-tag"), s = Wt("el-tooltip"), l = Wt("el-icon"), u = Wt("el-input"), c = Wt("el-option"), f = Wt("el-options"), v = Wt("el-scrollbar"), y = Wt("el-select-menu"), g = rc("click-outside");
  return ct((M(), V("div", {
    ref: "selectWrapper",
    class: D(e.wrapperKls),
    onMouseenter: t[22] || (t[22] = (...d) => e.handleMouseEnter && e.handleMouseEnter(...d)),
    onMouseleave: t[23] || (t[23] = (...d) => e.handleMouseLeave && e.handleMouseLeave(...d)),
    onClick: t[24] || (t[24] = Ce((...d) => e.toggleMenu && e.toggleMenu(...d), ["stop"]))
  }, [
    N(s, {
      ref: "tooltipRef",
      visible: e.dropMenuVisible,
      placement: e.placement,
      teleported: e.teleported,
      "popper-class": [e.nsSelect.e("popper"), e.popperClass],
      "popper-options": e.popperOptions,
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: e.effect,
      pure: "",
      trigger: "click",
      transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      persistent: e.persistent,
      onShow: e.handleMenuEnter
    }, {
      default: H(() => [
        q("div", {
          class: "select-trigger",
          onMouseenter: t[20] || (t[20] = (d) => e.inputHovering = !0),
          onMouseleave: t[21] || (t[21] = (d) => e.inputHovering = !1)
        }, [
          e.multiple ? (M(), V("div", {
            key: 0,
            ref: "tags",
            tabindex: "-1",
            class: D(e.tagsKls),
            style: Ie(e.selectTagsStyle),
            onClick: t[15] || (t[15] = (...d) => e.focus && e.focus(...d))
          }, [
            e.collapseTags && e.selected.length ? (M(), re(fn, {
              key: 0,
              onAfterLeave: e.resetInputHeight
            }, {
              default: H(() => [
                q("span", {
                  class: D(e.tagWrapperKls)
                }, [
                  (M(!0), V(He, null, Nn(e.showTagList, (d) => (M(), re(i, {
                    key: e.getValueKey(d),
                    closable: !e.selectDisabled && !d.isDisabled,
                    size: e.collapseTagSize,
                    hit: d.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (h) => e.deleteTag(h, d)
                  }, {
                    default: H(() => [
                      q("span", {
                        class: D(e.nsSelect.e("tags-text")),
                        style: Ie(e.tagTextStyle)
                      }, Ee(d.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128)),
                  e.selected.length > e.maxCollapseTags ? (M(), re(i, {
                    key: 0,
                    closable: !1,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    "disable-transitions": ""
                  }, {
                    default: H(() => [
                      e.collapseTagsTooltip ? (M(), re(s, {
                        key: 0,
                        ref: "tagTooltipRef",
                        disabled: e.dropMenuVisible,
                        "fallback-placements": ["bottom", "top", "right", "left"],
                        effect: e.effect,
                        placement: "bottom",
                        teleported: e.teleported
                      }, {
                        default: H(() => [
                          q("span", {
                            class: D(e.nsSelect.e("tags-text"))
                          }, "+ " + Ee(e.selected.length - e.maxCollapseTags), 3)
                        ]),
                        content: H(() => [
                          q("div", {
                            class: D(e.nsSelect.e("collapse-tags"))
                          }, [
                            (M(!0), V(He, null, Nn(e.collapseTagList, (d) => (M(), V("div", {
                              key: e.getValueKey(d),
                              class: D(e.nsSelect.e("collapse-tag"))
                            }, [
                              N(i, {
                                class: "in-tooltip",
                                closable: !e.selectDisabled && !d.isDisabled,
                                size: e.collapseTagSize,
                                hit: d.hitState,
                                type: e.tagType,
                                "disable-transitions": "",
                                style: { margin: "2px" },
                                onClose: (h) => e.handleDeleteTooltipTag(h, d)
                              }, {
                                default: H(() => [
                                  q("span", {
                                    class: D(e.nsSelect.e("tags-text")),
                                    style: Ie({
                                      maxWidth: e.inputWidth - 75 + "px"
                                    })
                                  }, Ee(d.currentLabel), 7)
                                ]),
                                _: 2
                              }, 1032, ["closable", "size", "hit", "type", "onClose"])
                            ], 2))), 128))
                          ], 2)
                        ]),
                        _: 1
                      }, 8, ["disabled", "effect", "teleported"])) : (M(), V("span", {
                        key: 1,
                        class: D(e.nsSelect.e("tags-text"))
                      }, "+ " + Ee(e.selected.length - e.maxCollapseTags), 3))
                    ]),
                    _: 1
                  }, 8, ["size", "type"])) : ee("v-if", !0)
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])) : ee("v-if", !0),
            e.collapseTags ? ee("v-if", !0) : (M(), re(fn, {
              key: 1,
              onAfterLeave: e.resetInputHeight
            }, {
              default: H(() => [
                q("span", {
                  class: D(e.tagWrapperKls),
                  style: Ie(e.prefixWidth && e.selected.length ? { marginLeft: `${e.prefixWidth}px` } : "")
                }, [
                  (M(!0), V(He, null, Nn(e.selected, (d) => (M(), re(i, {
                    key: e.getValueKey(d),
                    closable: !e.selectDisabled && !d.isDisabled,
                    size: e.collapseTagSize,
                    hit: d.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (h) => e.deleteTag(h, d)
                  }, {
                    default: H(() => [
                      q("span", {
                        class: D(e.nsSelect.e("tags-text")),
                        style: Ie({ maxWidth: e.inputWidth - 75 + "px" })
                      }, Ee(d.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                ], 6)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])),
            e.filterable && !e.selectDisabled ? ct((M(), V("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": t[0] || (t[0] = (d) => e.query = d),
              type: "text",
              class: D(e.inputKls),
              disabled: e.selectDisabled,
              autocomplete: e.autocomplete,
              style: Ie(e.inputStyle),
              onFocus: t[1] || (t[1] = (...d) => e.handleFocus && e.handleFocus(...d)),
              onBlur: t[2] || (t[2] = (...d) => e.handleBlur && e.handleBlur(...d)),
              onKeyup: t[3] || (t[3] = (...d) => e.managePlaceholder && e.managePlaceholder(...d)),
              onKeydown: [
                t[4] || (t[4] = (...d) => e.resetInputState && e.resetInputState(...d)),
                t[5] || (t[5] = ht(Ce((d) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                t[6] || (t[6] = ht(Ce((d) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                t[7] || (t[7] = ht((...d) => e.handleKeydownEscape && e.handleKeydownEscape(...d), ["esc"])),
                t[8] || (t[8] = ht(Ce((...d) => e.selectOption && e.selectOption(...d), ["stop", "prevent"]), ["enter"])),
                t[9] || (t[9] = ht((...d) => e.deletePrevTag && e.deletePrevTag(...d), ["delete"])),
                t[10] || (t[10] = ht((d) => e.visible = !1, ["tab"]))
              ],
              onCompositionstart: t[11] || (t[11] = (...d) => e.handleComposition && e.handleComposition(...d)),
              onCompositionupdate: t[12] || (t[12] = (...d) => e.handleComposition && e.handleComposition(...d)),
              onCompositionend: t[13] || (t[13] = (...d) => e.handleComposition && e.handleComposition(...d)),
              onInput: t[14] || (t[14] = (...d) => e.debouncedQueryChange && e.debouncedQueryChange(...d))
            }, null, 46, Zw)), [
              [oc, e.query]
            ]) : ee("v-if", !0)
          ], 6)) : ee("v-if", !0),
          ee(" fix: https://github.com/element-plus/element-plus/issues/11415 "),
          e.isIOS && !e.multiple && e.filterable && e.readonly ? (M(), V("input", {
            key: 1,
            ref: "iOSInput",
            class: D(e.iOSInputKls),
            disabled: e.selectDisabled,
            type: "text"
          }, null, 10, Xw)) : ee("v-if", !0),
          N(u, {
            id: e.id,
            ref: "reference",
            modelValue: e.selectedLabel,
            "onUpdate:modelValue": t[16] || (t[16] = (d) => e.selectedLabel = d),
            type: "text",
            placeholder: typeof e.currentPlaceholder == "function" ? e.currentPlaceholder() : e.currentPlaceholder,
            name: e.name,
            autocomplete: e.autocomplete,
            size: e.selectSize,
            disabled: e.selectDisabled,
            readonly: e.readonly,
            "validate-event": !1,
            class: D([e.nsSelect.is("focus", e.visible)]),
            tabindex: e.multiple && e.filterable ? -1 : void 0,
            onFocus: e.handleFocus,
            onBlur: e.handleBlur,
            onInput: e.debouncedOnInputChange,
            onPaste: e.debouncedOnInputChange,
            onCompositionstart: e.handleComposition,
            onCompositionupdate: e.handleComposition,
            onCompositionend: e.handleComposition,
            onKeydown: [
              t[17] || (t[17] = ht(Ce((d) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              t[18] || (t[18] = ht(Ce((d) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              ht(Ce(e.selectOption, ["stop", "prevent"]), ["enter"]),
              ht(e.handleKeydownEscape, ["esc"]),
              t[19] || (t[19] = ht((d) => e.visible = !1, ["tab"]))
            ]
          }, ll({
            suffix: H(() => [
              e.iconComponent && !e.showClose ? (M(), re(l, {
                key: 0,
                class: D([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: H(() => [
                  (M(), re(Ut(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0),
              e.showClose && e.clearIcon ? (M(), re(l, {
                key: 1,
                class: D([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: H(() => [
                  (M(), re(Ut(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : ee("v-if", !0)
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: H(() => [
                q("div", Jw, [
                  Z(e.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ], 32)
      ]),
      content: H(() => [
        N(y, null, {
          default: H(() => [
            ct(N(v, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: D(e.scrollbarKls)
            }, {
              default: H(() => [
                e.showNewOption ? (M(), re(c, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : ee("v-if", !0),
                N(f, { onUpdateOptions: e.onOptionsRendered }, {
                  default: H(() => [
                    Z(e.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["onUpdateOptions"])
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [en, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (M(), V(He, { key: 0 }, [
              e.$slots.empty ? Z(e.$slots, "empty", { key: 0 }) : (M(), V("p", {
                key: 1,
                class: D(e.nsSelect.be("dropdown", "empty"))
              }, Ee(e.emptyText), 3))
            ], 64)) : ee("v-if", !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [g, e.handleClose, e.popperPaneRef]
  ]);
}
var e2 = /* @__PURE__ */ ve(Yw, [["render", Qw], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const t2 = B({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = fe("select"), n = _(!0), r = Pe(), o = _([]);
    Be(Nu, Lt({
      ...yr(e)
    }));
    const a = ne(To);
    Te(() => {
      o.value = i(r.subTree);
    });
    const i = (l) => {
      const u = [];
      return Array.isArray(l.children) && l.children.forEach((c) => {
        var f;
        c.type && c.type.name === "ElOption" && c.component && c.component.proxy ? u.push(c.component.proxy) : (f = c.children) != null && f.length && u.push(...i(c));
      }), u;
    }, { groupQueryChange: s } = Qr(a);
    return U(s, () => {
      n.value = o.value.some((l) => l.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function n2(e, t, n, r, o, a) {
  return ct((M(), V("ul", {
    class: D(e.ns.be("group", "wrap"))
  }, [
    q("li", {
      class: D(e.ns.be("group", "title"))
    }, Ee(e.label), 3),
    q("li", null, [
      q("ul", {
        class: D(e.ns.b("group"))
      }, [
        Z(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [en, e.visible]
  ]);
}
var Ru = /* @__PURE__ */ ve(t2, [["render", n2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const As = mt(e2, {
  Option: Ua,
  OptionGroup: Ru
}), Ms = Yn(Ua);
Yn(Ru);
const r2 = he({
  trigger: gr.trigger,
  placement: qo.placement,
  disabled: gr.disabled,
  visible: tt.visible,
  transition: tt.transition,
  popperOptions: qo.popperOptions,
  tabindex: qo.tabindex,
  content: tt.content,
  popperStyle: tt.popperStyle,
  popperClass: tt.popperClass,
  enterable: {
    ...tt.enterable,
    default: !0
  },
  effect: {
    ...tt.effect,
    default: "light"
  },
  teleported: tt.teleported,
  title: String,
  width: {
    type: [String, Number],
    default: 150
  },
  offset: {
    type: Number,
    default: void 0
  },
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  },
  showArrow: {
    type: Boolean,
    default: !0
  },
  persistent: {
    type: Boolean,
    default: !0
  },
  "onUpdate:visible": {
    type: Function
  }
}), o2 = {
  "update:visible": (e) => Gn(e),
  "before-enter": () => !0,
  "before-leave": () => !0,
  "after-enter": () => !0,
  "after-leave": () => !0
}, a2 = "onUpdate:visible", i2 = B({
  name: "ElPopover"
}), s2 = /* @__PURE__ */ B({
  ...i2,
  props: r2,
  emits: o2,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = b(() => r[a2]), a = fe("popover"), i = _(), s = b(() => {
      var h;
      return (h = p(i)) == null ? void 0 : h.popperRef;
    }), l = b(() => [
      {
        width: Jt(r.width)
      },
      r.popperStyle
    ]), u = b(() => [a.b(), r.popperClass, { [a.m("plain")]: !!r.content }]), c = b(() => r.transition === `${a.namespace.value}-fade-in-linear`), f = () => {
      var h;
      (h = i.value) == null || h.hide();
    }, v = () => {
      n("before-enter");
    }, y = () => {
      n("before-leave");
    }, g = () => {
      n("after-enter");
    }, d = () => {
      n("update:visible", !1), n("after-leave");
    };
    return t({
      popperRef: s,
      hide: f
    }), (h, m) => (M(), re(p(Eo), St({
      ref_key: "tooltipRef",
      ref: i
    }, h.$attrs, {
      trigger: h.trigger,
      placement: h.placement,
      disabled: h.disabled,
      visible: h.visible,
      transition: h.transition,
      "popper-options": h.popperOptions,
      tabindex: h.tabindex,
      content: h.content,
      offset: h.offset,
      "show-after": h.showAfter,
      "hide-after": h.hideAfter,
      "auto-close": h.autoClose,
      "show-arrow": h.showArrow,
      "aria-label": h.title,
      effect: h.effect,
      enterable: h.enterable,
      "popper-class": p(u),
      "popper-style": p(l),
      teleported: h.teleported,
      persistent: h.persistent,
      "gpu-acceleration": p(c),
      "onUpdate:visible": p(o),
      onBeforeShow: v,
      onBeforeHide: y,
      onShow: g,
      onHide: d
    }), {
      content: H(() => [
        h.title ? (M(), V("div", {
          key: 0,
          class: D(p(a).e("title")),
          role: "title"
        }, Ee(h.title), 3)) : ee("v-if", !0),
        Z(h.$slots, "default", {}, () => [
          En(Ee(h.content), 1)
        ])
      ]),
      default: H(() => [
        h.$slots.reference ? Z(h.$slots, "reference", { key: 0 }) : ee("v-if", !0)
      ]),
      _: 3
    }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]));
  }
});
var l2 = /* @__PURE__ */ ve(s2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);
const Ps = (e, t) => {
  const n = t.arg || t.value, r = n == null ? void 0 : n.popperRef;
  r && (r.triggerRef = e);
};
var u2 = {
  mounted(e, t) {
    Ps(e, t);
  },
  updated(e, t) {
    Ps(e, t);
  }
};
const c2 = "popover", f2 = rg(u2, c2), rn = mt(l2, {
  directive: f2
});
const Ga = /* @__PURE__ */ B({
  __name: "bar-input",
  props: {
    type: {}
  },
  emits: ["submit"],
  setup(e, { expose: t, emit: n }) {
    const r = _(""), o = _();
    function a() {
      o.value.focus();
    }
    function i() {
      n("submit", r.value), r.value = "";
    }
    return t({
      focus: a
    }), (s, l) => (M(), re(p(hu), {
      class: "flex flex-row",
      onSubmit: Ce(i, ["prevent"])
    }, {
      default: H(() => [
        N(p(za), {
          type: s.type,
          ref_key: "inputRef",
          ref: o,
          modelValue: r.value,
          "onUpdate:modelValue": l[0] || (l[0] = (u) => r.value = u)
        }, null, 8, ["type", "modelValue"])
      ]),
      _: 1
    }, 8, ["onSubmit"]));
  }
});
const d2 = /* @__PURE__ */ B({
  __name: "bar-popover",
  props: {
    visible: { type: Boolean },
    trigger: {},
    hideAfter: {},
    width: {}
  },
  emits: ["update:visible"],
  setup(e) {
    return (t, n) => (M(), re(p(rn), {
      hideAfter: t.hideAfter,
      width: t.width,
      visible: t.visible,
      trigger: t.trigger,
      "onUpdate:visible": n[0] || (n[0] = (r) => t.$emit("update:visible", r))
    }, {
      reference: H(() => [
        Z(t.$slots, "reference")
      ]),
      default: H(() => [
        Z(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["hideAfter", "width", "visible", "trigger"]));
  }
});
const Or = (e) => (ac("data-v-889b5093"), e = e(), ic(), e), p2 = { class: "search-content" }, v2 = { class: "menu" }, m2 = /* @__PURE__ */ Or(() => /* @__PURE__ */ q("div", { class: "h h-1" }, null, -1)), h2 = { class: "flex flex-row" }, g2 = /* @__PURE__ */ Or(() => /* @__PURE__ */ q("div", { class: "h-1" }, null, -1)), y2 = { class: "content flex flex-col" }, b2 = ["onClick"], w2 = /* @__PURE__ */ Or(() => /* @__PURE__ */ q("div", { class: "w-2" }, null, -1)), S2 = /* @__PURE__ */ Or(() => /* @__PURE__ */ q("span", { class: "iconfont icon-play" }, null, -1)), E2 = /* @__PURE__ */ Or(() => /* @__PURE__ */ q("div", { class: "w-1" }, null, -1)), T2 = /* @__PURE__ */ B({
  __name: "search-content",
  props: {
    menuItemLabel: {},
    scenes: {},
    styles: {},
    dataList: {}
  },
  emits: ["submit", "fetch"],
  setup(e, { emit: t }) {
    const n = _(""), r = _(""), o = _(""), a = _("first");
    function i() {
      t("fetch", {
        search: n.value,
        menuKey: a.value,
        scene: r.value,
        style: o.value
      });
    }
    function s(u) {
      a.value = u, i();
    }
    function l(u) {
      t("submit", u);
    }
    return (u, c) => (M(), V("div", p2, [
      N(p(hu), {
        onSubmit: Ce(i, ["prevent"])
      }, {
        default: H(() => [
          N(p(za), {
            placeholder: "搜索",
            modelValue: n.value,
            "onUpdate:modelValue": c[0] || (c[0] = (f) => n.value = f),
            "suffix-icon": p(Gh)
          }, null, 8, ["modelValue", "suffix-icon"])
        ]),
        _: 1
      }, 8, ["onSubmit"]),
      q("div", v2, [
        N(p(Bw), {
          mode: "horizontal",
          "default-active": "first",
          onSelect: c[1] || (c[1] = (f) => s(f))
        }, {
          default: H(() => [
            N(p(Uo), { index: "first" }, {
              default: H(() => [
                En(Ee(u.menuItemLabel.first), 1)
              ]),
              _: 1
            }),
            N(p(Uo), { index: "second" }, {
              default: H(() => [
                En(Ee(u.menuItemLabel.second), 1)
              ]),
              _: 1
            }),
            N(p(Uo), { index: "last" }, {
              default: H(() => [
                En(Ee(u.menuItemLabel.last), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      m2,
      q("div", h2, [
        N(p(As), {
          modelValue: r.value,
          "onUpdate:modelValue": c[2] || (c[2] = (f) => r.value = f),
          onChange: i,
          class: "m m-2",
          size: "large"
        }, {
          default: H(() => [
            (M(!0), V(He, null, Nn(u.scenes, (f) => (M(), re(p(Ms), {
              key: f.value,
              label: f.label,
              value: f.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        N(p(As), {
          modelValue: o.value,
          "onUpdate:modelValue": c[3] || (c[3] = (f) => o.value = f),
          onChange: i,
          class: "m m-2",
          size: "large"
        }, {
          default: H(() => [
            (M(!0), V(He, null, Nn(u.styles, (f) => (M(), re(p(Ms), {
              key: f.value,
              label: f.label,
              value: f.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      g2,
      q("div", y2, [
        (M(!0), V(He, null, Nn(u.dataList, (f, v) => (M(), V("div", {
          onClick: (y) => l(f),
          class: "btn full p-4 item",
          key: v
        }, [
          w2,
          S2,
          E2,
          q("div", null, Ee(f.label), 1)
        ], 8, b2))), 128))
      ])
    ]));
  }
});
const Ya = /* @__PURE__ */ wa(T2, [["__scopeId", "data-v-889b5093"]]);
function O2(e, t) {
  let n, r, o;
  const a = _(!0), i = () => {
    a.value = !0, o();
  };
  U(e, i, { flush: "sync" });
  const s = typeof t == "function" ? t : t.get, l = typeof t == "function" ? void 0 : t.set, u = sc((c, f) => (r = c, o = f, {
    get() {
      return a.value && (n = s(), a.value = !1), r(), n;
    },
    set(v) {
      l == null || l(v);
    }
  }));
  return Object.isExtensible(u) && (u.trigger = i), u;
}
function Du(e) {
  return rl() ? (ga(e), !0) : !1;
}
function Za(e) {
  return typeof e == "function" ? e() : p(e);
}
const _2 = typeof window < "u", C2 = () => {
};
function Bu(e, t = !0) {
  Pe() ? Te(e) : t ? e() : me(e);
}
function Wn(e) {
  var t;
  const n = Za(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const ju = _2 ? window : void 0;
function ks(...e) {
  let t, n, r, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, o] = e, t = ju) : [t, n, r, o] = e, !t)
    return C2;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], i = () => {
    a.forEach((c) => c()), a.length = 0;
  }, s = (c, f, v, y) => (c.addEventListener(f, v, y), () => c.removeEventListener(f, v, y)), l = U(
    () => [Wn(t), Za(o)],
    ([c, f]) => {
      i(), c && a.push(
        ...n.flatMap((v) => r.map((y) => s(c, v, y, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    l(), i();
  };
  return Du(u), u;
}
function $2() {
  const e = _(!1);
  return Pe() && Te(() => {
    e.value = !0;
  }), e;
}
function x2(e) {
  const t = $2();
  return b(() => (t.value, !!e()));
}
function I2() {
  const e = Pe(), t = O2(
    () => null,
    () => e.proxy.$el
  );
  return ya(t.trigger), Te(t.trigger), t;
}
var Ls = Object.getOwnPropertySymbols, A2 = Object.prototype.hasOwnProperty, M2 = Object.prototype.propertyIsEnumerable, P2 = (e, t) => {
  var n = {};
  for (var r in e)
    A2.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Ls)
    for (var r of Ls(e))
      t.indexOf(r) < 0 && M2.call(e, r) && (n[r] = e[r]);
  return n;
};
function k2(e, t, n = {}) {
  const r = n, { window: o = ju } = r, a = P2(r, ["window"]);
  let i;
  const s = x2(() => o && "ResizeObserver" in o), l = () => {
    i && (i.disconnect(), i = void 0);
  }, u = b(
    () => Array.isArray(e) ? e.map((v) => Wn(v)) : [Wn(e)]
  ), c = U(
    u,
    (v) => {
      if (l(), s.value && o) {
        i = new ResizeObserver(t);
        for (const y of v)
          y && i.observe(y, a);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), f = () => {
    l(), c();
  };
  return Du(f), {
    isSupported: s,
    stop: f
  };
}
function L2(e, t = {}) {
  const {
    reset: n = !0,
    windowResize: r = !0,
    windowScroll: o = !0,
    immediate: a = !0
  } = t, i = _(0), s = _(0), l = _(0), u = _(0), c = _(0), f = _(0), v = _(0), y = _(0);
  function g() {
    const d = Wn(e);
    if (!d) {
      n && (i.value = 0, s.value = 0, l.value = 0, u.value = 0, c.value = 0, f.value = 0, v.value = 0, y.value = 0);
      return;
    }
    const h = d.getBoundingClientRect();
    i.value = h.height, s.value = h.bottom, l.value = h.left, u.value = h.right, c.value = h.top, f.value = h.width, v.value = h.x, y.value = h.y;
  }
  return k2(e, g), U(() => Wn(e), (d) => !d && g()), o && ks("scroll", g, { capture: !0, passive: !0 }), r && ks("resize", g, { passive: !0 }), Bu(() => {
    a && g();
  }), {
    height: i,
    bottom: s,
    left: l,
    right: u,
    top: c,
    width: f,
    x: v,
    y,
    update: g
  };
}
function F2(e = I2()) {
  const t = ut(), n = () => {
    const r = Wn(e);
    r && (t.value = r.parentElement);
  };
  return Bu(n), U(() => Za(e), n), t;
}
const N2 = { class: "content" }, R2 = /* @__PURE__ */ B({
  __name: "top-panel",
  setup(e, { expose: t }) {
    const n = _(!1), r = F2(), { top: o, left: a } = L2(r), i = b(() => `top:${o.value}px;left:${a.value}px`);
    function s() {
      n.value = !0;
    }
    function l() {
      n.value = !1;
    }
    return t({
      show: s,
      hide: l
    }), (u, c) => ct((M(), V("div", {
      class: "panel",
      style: Ie(i.value)
    }, [
      N(p(B1), null, {
        default: H(() => [
          q("div", N2, [
            Z(u.$slots, "default", {}, void 0, !0)
          ])
        ]),
        _: 3
      })
    ], 4)), [
      [en, n.value]
    ]);
  }
});
const D2 = /* @__PURE__ */ wa(R2, [["__scopeId", "data-v-298dc86b"]]), B2 = {
  install(e) {
    e.component("BarButton", vt), e.component("BarInput", Ga), e.component("BarPopover", d2), e.component("BarSearch", Ya), e.component("TopPanel", D2);
  }
};
let j2 = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function Nt(e = "r") {
  return `${e}-${j2()}`;
}
var zu = "Expected a function", Fs = 0 / 0, z2 = "[object Symbol]", H2 = /^\s+|\s+$/g, V2 = /^[-+]0x[0-9a-f]+$/i, q2 = /^0b[01]+$/i, W2 = /^0o[0-7]+$/i, K2 = parseInt, U2 = typeof Br == "object" && Br && Br.Object === Object && Br, G2 = typeof self == "object" && self && self.Object === Object && self, Y2 = U2 || G2 || Function("return this")(), Z2 = Object.prototype, X2 = Z2.toString, J2 = Math.max, Q2 = Math.min, Go = function() {
  return Y2.Date.now();
};
function eS(e, t, n) {
  var r, o, a, i, s, l, u = 0, c = !1, f = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(zu);
  t = Ns(t) || 0, lo(n) && (c = !!n.leading, f = "maxWait" in n, a = f ? J2(Ns(n.maxWait) || 0, t) : a, v = "trailing" in n ? !!n.trailing : v);
  function y(S) {
    var T = r, x = o;
    return r = o = void 0, u = S, i = e.apply(x, T), i;
  }
  function g(S) {
    return u = S, s = setTimeout(m, t), c ? y(S) : i;
  }
  function d(S) {
    var T = S - l, x = S - u, j = t - T;
    return f ? Q2(j, a - x) : j;
  }
  function h(S) {
    var T = S - l, x = S - u;
    return l === void 0 || T >= t || T < 0 || f && x >= a;
  }
  function m() {
    var S = Go();
    if (h(S))
      return w(S);
    s = setTimeout(m, d(S));
  }
  function w(S) {
    return s = void 0, v && r ? y(S) : (r = o = void 0, i);
  }
  function O() {
    s !== void 0 && clearTimeout(s), u = 0, r = l = o = s = void 0;
  }
  function C() {
    return s === void 0 ? i : w(Go());
  }
  function I() {
    var S = Go(), T = h(S);
    if (r = arguments, o = this, l = S, T) {
      if (s === void 0)
        return g(l);
      if (f)
        return s = setTimeout(m, t), y(l);
    }
    return s === void 0 && (s = setTimeout(m, t)), i;
  }
  return I.cancel = O, I.flush = C, I;
}
function tS(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(zu);
  return lo(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), eS(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
function lo(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function nS(e) {
  return !!e && typeof e == "object";
}
function rS(e) {
  return typeof e == "symbol" || nS(e) && X2.call(e) == z2;
}
function Ns(e) {
  if (typeof e == "number")
    return e;
  if (rS(e))
    return Fs;
  if (lo(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = lo(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(H2, "");
  var n = q2.test(e);
  return n || W2.test(e) ? K2(e.slice(2), n ? 2 : 8) : V2.test(e) ? Fs : +e;
}
var oS = tS;
const aS = /* @__PURE__ */ k1(oS);
function Rs(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function Xa(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {}), Object.keys(t).forEach(function(n) {
    typeof e[n] > "u" ? e[n] = t[n] : Rs(t[n]) && Rs(e[n]) && Object.keys(t[n]).length > 0 && Xa(e[n], t[n]);
  });
}
var Hu = {
  body: {},
  addEventListener: function() {
  },
  removeEventListener: function() {
  },
  activeElement: {
    blur: function() {
    },
    nodeName: ""
  },
  querySelector: function() {
    return null;
  },
  querySelectorAll: function() {
    return [];
  },
  getElementById: function() {
    return null;
  },
  createEvent: function() {
    return {
      initEvent: function() {
      }
    };
  },
  createElement: function() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function() {
      },
      getElementsByTagName: function() {
        return [];
      }
    };
  },
  createElementNS: function() {
    return {};
  },
  importNode: function() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function Ja() {
  var e = typeof document < "u" ? document : {};
  return Xa(e, Hu), e;
}
var iS = {
  document: Hu,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState: function() {
    },
    pushState: function() {
    },
    go: function() {
    },
    back: function() {
    }
  },
  CustomEvent: function() {
    return this;
  },
  addEventListener: function() {
  },
  removeEventListener: function() {
  },
  getComputedStyle: function() {
    return {
      getPropertyValue: function() {
        return "";
      }
    };
  },
  Image: function() {
  },
  Date: function() {
  },
  screen: {},
  setTimeout: function() {
  },
  clearTimeout: function() {
  },
  matchMedia: function() {
    return {};
  },
  requestAnimationFrame: function(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame: function(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  }
};
function Vu() {
  var e = typeof window < "u" ? window : {};
  return Xa(e, iS), e;
}
function sS(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function ma(e) {
  return ma = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ma(e);
}
function uo(e, t) {
  return uo = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, uo(e, t);
}
function lS() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Jr(e, t, n) {
  return lS() ? Jr = Reflect.construct : Jr = function(o, a, i) {
    var s = [null];
    s.push.apply(s, a);
    var l = Function.bind.apply(o, s), u = new l();
    return i && uo(u, i.prototype), u;
  }, Jr.apply(null, arguments);
}
function uS(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function ha(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return ha = function(r) {
    if (r === null || !uS(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, o);
    }
    function o() {
      return Jr(r, arguments, ma(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), uo(o, r);
  }, ha(e);
}
function cS(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fS(e) {
  var t = e.__proto__;
  Object.defineProperty(e, "__proto__", {
    get: function() {
      return t;
    },
    set: function(r) {
      t.__proto__ = r;
    }
  });
}
var Sn = /* @__PURE__ */ function(e) {
  sS(t, e);
  function t(n) {
    var r;
    return r = e.call.apply(e, [this].concat(n)) || this, fS(cS(r)), r;
  }
  return t;
}(/* @__PURE__ */ ha(Array));
function Qa(e) {
  e === void 0 && (e = []);
  var t = [];
  return e.forEach(function(n) {
    Array.isArray(n) ? t.push.apply(t, Qa(n)) : t.push(n);
  }), t;
}
function dS(e) {
  for (var t = [], n = 0; n < e.length; n += 1)
    t.indexOf(e[n]) === -1 && t.push(e[n]);
  return t;
}
function pS(e) {
  return e.toLowerCase().replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function vS(e, t) {
  if (typeof e != "string")
    return [e];
  for (var n = [], r = t.querySelectorAll(e), o = 0; o < r.length; o += 1)
    n.push(r[o]);
  return n;
}
function de(e, t) {
  var n = Vu(), r = Ja(), o = [];
  if (!t && e instanceof Sn)
    return e;
  if (!e)
    return new Sn(o);
  if (typeof e == "string") {
    var a = e.trim();
    if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
      var i = "div";
      a.indexOf("<li") === 0 && (i = "ul"), a.indexOf("<tr") === 0 && (i = "tbody"), (a.indexOf("<td") === 0 || a.indexOf("<th") === 0) && (i = "tr"), a.indexOf("<tbody") === 0 && (i = "table"), a.indexOf("<option") === 0 && (i = "select");
      var s = r.createElement(i);
      s.innerHTML = a;
      for (var l = 0; l < s.childNodes.length; l += 1)
        o.push(s.childNodes[l]);
    } else
      o = vS(e.trim(), t || r);
  } else if (e.nodeType || e === n || e === r)
    o.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof Sn)
      return e;
    o = e;
  }
  return new Sn(dS(o));
}
de.fn = Sn.prototype;
function Ds() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = Qa(t.map(function(o) {
    return o.split(" ");
  }));
  return this.forEach(function(o) {
    var a;
    (a = o.classList).add.apply(a, r);
  }), this;
}
function Bs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = Qa(t.map(function(o) {
    return o.split(" ");
  }));
  return this.forEach(function(o) {
    var a;
    (a = o.classList).remove.apply(a, r);
  }), this;
}
function js(e, t) {
  if (arguments.length === 1 && typeof e == "string")
    return this[0] ? this[0].getAttribute(e) : void 0;
  for (var n = 0; n < this.length; n += 1)
    if (arguments.length === 2)
      this[n].setAttribute(e, t);
    else
      for (var r in e)
        this[n][r] = e[r], this[n].setAttribute(r, e[r]);
  return this;
}
function zs() {
  var e = this[0];
  if (e) {
    var t = {};
    if (e.dataset)
      for (var n in e.dataset)
        t[n] = e.dataset[n];
    else
      for (var r = 0; r < e.attributes.length; r += 1) {
        var o = e.attributes[r];
        o.name.indexOf("data-") >= 0 && (t[pS(o.name.split("data-")[1])] = o.value);
      }
    for (var a in t)
      t[a] === "false" ? t[a] = !1 : t[a] === "true" ? t[a] = !0 : parseFloat(t[a]) === t[a] * 1 && (t[a] *= 1);
    return t;
  }
}
function Hs(e) {
  if (typeof e > "u") {
    var t = this[0];
    if (!t)
      return;
    if (t.multiple && t.nodeName.toLowerCase() === "select") {
      for (var n = [], r = 0; r < t.selectedOptions.length; r += 1)
        n.push(t.selectedOptions[r].value);
      return n;
    }
    return t.value;
  }
  for (var o = 0; o < this.length; o += 1) {
    var a = this[o];
    if (Array.isArray(e) && a.multiple && a.nodeName.toLowerCase() === "select")
      for (var i = 0; i < a.options.length; i += 1)
        a.options[i].selected = e.indexOf(a.options[i].value) >= 0;
    else
      a.value = e;
  }
  return this;
}
function Vs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0], o = t[1], a = t[2], i = t[3];
  typeof t[1] == "function" && (r = t[0], a = t[1], i = t[2], o = void 0), i || (i = !1);
  function s(d) {
    var h = d.target;
    if (h) {
      var m = d.target.dom7EventData || [];
      if (m.indexOf(d) < 0 && m.unshift(d), de(h).is(o))
        a.apply(h, m);
      else
        for (var w = de(h).parents(), O = 0; O < w.length; O += 1)
          de(w[O]).is(o) && a.apply(w[O], m);
    }
  }
  function l(d) {
    var h = d && d.target ? d.target.dom7EventData || [] : [];
    h.indexOf(d) < 0 && h.unshift(d), a.apply(this, h);
  }
  for (var u = r.split(" "), c, f = 0; f < this.length; f += 1) {
    var v = this[f];
    if (o)
      for (c = 0; c < u.length; c += 1) {
        var g = u[c];
        v.dom7LiveListeners || (v.dom7LiveListeners = {}), v.dom7LiveListeners[g] || (v.dom7LiveListeners[g] = []), v.dom7LiveListeners[g].push({
          listener: a,
          proxyListener: s
        }), v.addEventListener(g, s, i);
      }
    else
      for (c = 0; c < u.length; c += 1) {
        var y = u[c];
        v.dom7Listeners || (v.dom7Listeners = {}), v.dom7Listeners[y] || (v.dom7Listeners[y] = []), v.dom7Listeners[y].push({
          listener: a,
          proxyListener: l
        }), v.addEventListener(y, l, i);
      }
  }
  return this;
}
function qs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0], o = t[1], a = t[2], i = t[3];
  typeof t[1] == "function" && (r = t[0], a = t[1], i = t[2], o = void 0), i || (i = !1);
  for (var s = r.split(" "), l = 0; l < s.length; l += 1)
    for (var u = s[l], c = 0; c < this.length; c += 1) {
      var f = this[c], v = void 0;
      if (!o && f.dom7Listeners ? v = f.dom7Listeners[u] : o && f.dom7LiveListeners && (v = f.dom7LiveListeners[u]), v && v.length)
        for (var y = v.length - 1; y >= 0; y -= 1) {
          var g = v[y];
          a && g.listener === a || a && g.listener && g.listener.dom7proxy && g.listener.dom7proxy === a ? (f.removeEventListener(u, g.proxyListener, i), v.splice(y, 1)) : a || (f.removeEventListener(u, g.proxyListener, i), v.splice(y, 1));
        }
    }
  return this;
}
function Ws() {
  for (var e = 0; e < this.length; e += 1)
    this[e].style.display = "none";
  return this;
}
function Ks(e) {
  return e ? (this.forEach(function(t, n) {
    e.apply(t, [t, n]);
  }), this) : this;
}
function Us(e) {
  if (typeof e > "u")
    return this[0] ? this[0].innerHTML : null;
  for (var t = 0; t < this.length; t += 1)
    this[t].innerHTML = e;
  return this;
}
function Gs(e) {
  var t = Vu(), n = Ja(), r = this[0], o, a;
  if (!r || typeof e > "u")
    return !1;
  if (typeof e == "string") {
    if (r.matches)
      return r.matches(e);
    if (r.webkitMatchesSelector)
      return r.webkitMatchesSelector(e);
    if (r.msMatchesSelector)
      return r.msMatchesSelector(e);
    for (o = de(e), a = 0; a < o.length; a += 1)
      if (o[a] === r)
        return !0;
    return !1;
  }
  if (e === n)
    return r === n;
  if (e === t)
    return r === t;
  if (e.nodeType || e instanceof Sn) {
    for (o = e.nodeType ? [e] : e, a = 0; a < o.length; a += 1)
      if (o[a] === r)
        return !0;
    return !1;
  }
  return !1;
}
function Ys() {
  for (var e, t = Ja(), n = 0; n < arguments.length; n += 1) {
    e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    for (var r = 0; r < this.length; r += 1)
      if (typeof e == "string") {
        var o = t.createElement("div");
        for (o.innerHTML = e; o.firstChild; )
          this[r].appendChild(o.firstChild);
      } else if (e instanceof Sn)
        for (var a = 0; a < e.length; a += 1)
          this[r].appendChild(e[a]);
      else
        this[r].appendChild(e);
  }
  return this;
}
function Zs(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var r = this[n].parentNode; r; )
      e ? de(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
  return de(t);
}
function Xs(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var r = this[n].querySelectorAll(e), o = 0; o < r.length; o += 1)
      t.push(r[o]);
  return de(t);
}
function Js(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var r = this[n].children, o = 0; o < r.length; o += 1)
      (!e || de(r[o]).is(e)) && t.push(r[o]);
  return de(t);
}
var mS = "resize scroll".split(" ");
function qu(e) {
  function t() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    if (typeof r[0] > "u") {
      for (var a = 0; a < this.length; a += 1)
        mS.indexOf(e) < 0 && (e in this[a] ? this[a][e]() : de(this[a]).trigger(e));
      return this;
    }
    return this.on.apply(this, [e].concat(r));
  }
  return t;
}
var Qs = qu("click"), el = qu("focus");
Ws && (de.fn.hide = Ws);
Ys && (de.fn.append = Ys);
Qs && (de.fn.click = Qs);
Vs && (de.fn.on = Vs);
qs && (de.fn.off = qs);
el && (de.fn.focus = el);
js && (de.fn.attr = js);
Hs && (de.fn.val = Hs);
Us && (de.fn.html = Us);
zs && (de.fn.dataset = zs);
Ds && (de.fn.addClass = Ds);
Bs && (de.fn.removeClass = Bs);
Js && (de.fn.children = Js);
Ks && (de.fn.each = Ks);
Xs && (de.fn.find = Xs);
Gs && (de.fn.is = Gs);
Zs && (de.fn.parents = Zs);
const xE = globalThis.Node, IE = globalThis.Comment, AE = globalThis.Element, ME = globalThis.Text, PE = globalThis.Range, kE = globalThis.Selection, LE = globalThis.StaticRange;
function Wu(e, t, n, r, o) {
  de("body").on(
    "click",
    `#${r}-${t}`,
    aS((a) => {
      a.preventDefault();
      const i = gS(e, n, r);
      return i && o(i);
    })
  );
}
function Rt(e, t, n, r) {
  return Wu(e, "close", t, n, r);
}
function hS(e, t, n, r) {
  return Wu(e, "play", t, n, r);
}
function gS(e, t, n) {
  const [r] = xe.nodes(e, {
    at: [],
    match: (o) => !lc.isElement(o) || !Zo.checkNodeType(o, t) ? !1 : o.domId === n
  });
  return r;
}
function Oo(e, t, n) {
  const r = xe.previous(e, {
    at: t[1],
    match: (o) => uc.isText(o)
  });
  r != null && (we.insertText(e, n(t[0]), {
    at: xe.end(e, r[1])
  }), we.delete(e, { at: cc.next(r[1]) }));
}
function yS() {
  return Nt("w-e-dom-speaker");
}
let bS = class {
  getValue(t) {
    const {
      selection: n
    } = t;
    return n == null ? null : xe.string(t, n);
  }
  isDisabled(t) {
    const {
      selection: n
    } = t;
    if (n == null || Et.isCollapsed(n))
      return !0;
    const r = xe.string(t, n);
    return r.length != 1 || !/^[\u4E00-\u9FA5]+$/gi.test(r);
  }
  exec(t, n) {
    if (this.isDisabled(t))
      return;
    const {
      selection: r
    } = t;
    if (r == null)
      return;
    const o = this.getValue(t);
    if (o == null)
      return;
    const a = {
      type: "ssml-p",
      domId: yS(),
      word: o,
      phoneme: n,
      remark: n,
      bgColor: "speaker",
      children: [{
        text: ""
      }]
    };
    we.delete(t), we.insertNodes(t, a), t.move(1), Rt(t, "ssml-p", a.domId, (i) => {
      Oo(t, i, (s) => s.word);
    });
  }
};
function wS(e) {
  const t = {
    我: [{
      id: "1",
      text: "wo1",
      remark: "wo1"
    }, {
      id: "2",
      text: "wo2",
      remark: "wo2"
    }, {
      id: "3",
      text: "wo3",
      remark: "wo3"
    }],
    的: [{
      id: "1",
      text: "de1",
      remark: "de1"
    }, {
      id: "2",
      text: "de2",
      remark: "de2"
    }, {
      id: "3",
      text: "de3",
      remark: "de3"
    }]
  };
  return Promise.resolve(t[e] || t.我);
}
const SS = /* @__PURE__ */ B({
  emits: ["error"],
  props: ["fetch"],
  setup(e, {
    emit: t
  }) {
    const n = new bS(), r = ne("editor"), o = _([]), a = _(!1);
    function i() {
      a.value || (a.value = !0);
    }
    function s() {
      a.value && (a.value = !1);
    }
    async function l(u) {
      const c = n.getValue(u);
      if (c ? o.value = await (e.fetch || wS)(c) : o.value = [], n.isDisabled(u))
        return t("error", "选中一个中文字符，并且有不能在其他语句之内");
      if (o.value.length == 0)
        return t("error", "选中的字符没有不是多音字");
      i();
    }
    return () => N(rn, {
      visible: a.value,
      "onUpdate:visible": (u) => a.value = u,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => N(vt, {
        text: "多音字",
        icon: "speaker",
        onClick: l
      }, null),
      default: () => N("div", {
        class: "flex flex-col"
      }, [o.value.map(({
        id: u,
        text: c
      }) => N("div", {
        key: u,
        class: "btn full",
        onClick: () => {
          n.isDisabled(r == null ? void 0 : r.value) || n.exec(r == null ? void 0 : r.value, c), s();
        },
        onMousedown: Ce(() => {
        }, ["stop", "prevent"])
      }, [c]))])
    });
  }
});
function ES() {
  return Nt("w-e-dom-continuous");
}
class TS {
  getValue(t) {
    const {
      selection: n
    } = t;
    return n == null ? "" : xe.string(t, n);
  }
  isDisabled(t) {
    const {
      selection: n
    } = t;
    return !!(n == null || Et.isCollapsed(n) || xe.string(t, n).length < 2);
  }
  exec(t) {
    if (this.isDisabled(t))
      return;
    const {
      selection: n
    } = t;
    if (n == null)
      return;
    const r = this.getValue(t);
    if (r == null)
      return;
    const o = {
      type: "ssml-w",
      domId: ES(),
      children: [{
        text: r
      }],
      remark: "连读",
      bgColor: "continuous"
    };
    we.delete(t), we.insertNodes(t, o), Rt(t, "ssml-w", o.domId, (a) => {
      we.unwrapNodes(t, {
        at: a[1]
      });
    });
  }
}
const OS = /* @__PURE__ */ B({
  emits: ["error"],
  setup(e, {
    emit: t
  }) {
    const n = new TS();
    function r(o) {
      if (n.isDisabled(o))
        return t("error", "请选择多个中文字符或者多个多个英文单词");
      n.exec(o);
    }
    return () => N(vt, {
      text: "连读",
      icon: "continuous",
      onClick: r
    }, null);
  }
});
function _S() {
  return Nt("w-e-dom-read");
}
class CS {
  getValue(t) {
    const {
      selection: n
    } = t;
    return n == null ? "" : xe.string(t, n);
  }
  isDisabled(t) {
    const {
      selection: n
    } = t;
    return !!(n == null || Et.isCollapsed(n) || xe.string(t, n).length <= 0);
  }
  exec(t, n) {
    if (this.isDisabled(t))
      return;
    const {
      selection: r
    } = t;
    if (r == null)
      return;
    const o = this.getValue(t);
    if (o == null)
      return;
    const a = {
      type: "ssml-w",
      domId: _S(),
      phoneme: n.id,
      remark: n.remark,
      value: o,
      bgColor: "read",
      children: [{
        text: o
      }]
    };
    we.delete(t), we.insertNodes(t, a), Rt(t, "ssml-w", a.domId, (i) => Oo(t, i, () => o));
  }
}
const $S = [{
  id: "z",
  text: "重音",
  remark: "重"
}, {
  id: "t",
  text: "拖音",
  remark: "拖"
}, {
  id: "all",
  text: "重音+拖音",
  remark: "重+拖"
}], xS = /* @__PURE__ */ B({
  emits: ["error"],
  setup(e, {
    emit: t
  }) {
    const n = new CS(), r = ne("editor"), o = _(!1);
    function a() {
      o.value || (o.value = !0);
    }
    function i() {
      o.value && (o.value = !1);
    }
    function s(l) {
      if (n.isDisabled(l)) {
        t("error", "请先选择文本");
        return;
      }
      a();
    }
    return () => N(rn, {
      visible: o.value,
      "onUpdate:visible": (l) => o.value = l,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => N(vt, {
        text: "重音",
        icon: "read",
        onClick: s
      }, null),
      default: () => N("div", {
        class: "flex flex-col",
        onMousedown: Ce(() => {
        }, ["stop", "prevent"])
      }, [$S.map(({
        id: l,
        text: u,
        remark: c
      }) => N("div", {
        key: l,
        class: "btn full",
        onClick: () => {
          n.isDisabled(r == null ? void 0 : r.value) || n.exec(r == null ? void 0 : r.value, {
            id: l,
            text: u,
            remark: c
          }), i();
        },
        onMousedown: Ce(() => {
        }, ["stop", "prevent"])
      }, [u]))])
    });
  }
});
function IS() {
  return Nt("w-e-dom-digital");
}
class AS {
  getValue(t) {
    const {
      selection: n
    } = t;
    return n == null ? "" : xe.string(t, n);
  }
  isDisabled(t) {
    const {
      selection: n
    } = t;
    if (n == null || Et.isCollapsed(n))
      return !0;
    const r = xe.string(t, n);
    return !!(r.length <= 0 || Number.isNaN(Number(r)));
  }
  exec(t, n) {
    if (this.isDisabled(t))
      return;
    const {
      selection: r
    } = t;
    if (r == null)
      return;
    const o = this.getValue(t);
    if (o == null)
      return;
    const a = {
      type: "ssml-say-as",
      domId: IS(),
      interpretAs: n.id,
      remark: n.remark,
      bgColor: "digital",
      children: [{
        text: o
      }]
    };
    we.delete(t), we.insertNodes(t, a), Rt(t, "ssml-say-as", a.domId, (i) => {
      we.unwrapNodes(t, {
        at: i[1]
      });
    });
  }
}
const MS = [{
  id: "value",
  text: "读数值",
  remark: "读数值"
}, {
  id: "digits",
  text: "读数字",
  remark: "读数字"
}, {
  id: "telephone",
  text: "读手机号",
  remark: "读手机号"
}], PS = /* @__PURE__ */ B({
  emits: ["error"],
  setup(e, {
    emit: t
  }) {
    const n = new AS(), r = ne("editor"), o = _(!1);
    function a() {
      o.value = !o.value;
    }
    function i(s) {
      if (n.isDisabled(s)) {
        t("error", "请选择纯数字文本");
        return;
      }
      a();
    }
    return () => N(rn, {
      visible: o.value,
      "onUpdate:visible": (s) => o.value = s,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => N(vt, {
        text: "数字符号",
        icon: "digital",
        onClick: i
      }, null),
      default: () => N("div", {
        class: "flex flex-col"
      }, [MS.map(({
        id: s,
        text: l,
        remark: u
      }) => N("div", {
        key: s,
        class: "btn radius ssml-menu item full",
        onClick: () => {
          n.isDisabled(r == null ? void 0 : r.value) || n.exec(r == null ? void 0 : r.value, {
            id: s,
            text: l,
            remark: u
          }), a();
        },
        onMousedown: Ce(() => {
        }, ["stop", "prevent"])
      }, [l]))])
    });
  }
});
function kS() {
  return Nt("w-e-dom-alias");
}
class LS {
  getValue(t) {
    const {
      selection: n
    } = t;
    return n == null ? null : xe.string(t, n);
  }
  isDisabled(t) {
    const {
      selection: n
    } = t;
    return !!(n == null || Et.isCollapsed(n) || xe.string(t, n).length <= 0);
  }
  exec(t, n) {
    if (this.isDisabled(t))
      return;
    const {
      selection: r
    } = t;
    if (r == null)
      return;
    const o = this.getValue(t);
    if (o == null)
      return;
    const a = {
      type: "ssml-sub",
      domId: kS(),
      remark: `(${n})`,
      alias: n,
      value: o,
      bgColor: "alias",
      children: [{
        text: ""
      }]
    };
    we.delete(t), we.insertNodes(t, a), Rt(t, "ssml-sub", a.domId, (i) => Oo(t, i, (s) => s.value));
  }
}
const FS = /* @__PURE__ */ B({
  emits: ["error"],
  setup(e, {
    emit: t
  }) {
    const n = new LS(), r = ne("editor"), o = _(), a = _(!1), i = ut();
    function s() {
      a.value || (a.value = !0);
    }
    function l() {
      a.value && (a.value = !1);
    }
    async function u(f) {
      if (n.isDisabled(f)) {
        t("error", "选中一个中文字符，并且有不能在其他语句之内");
        return;
      }
      s(), i.value = f.selection, o.value.focus();
    }
    function c(f) {
      l();
      const v = r == null ? void 0 : r.value;
      !v || !f || (v.select(i.value), !n.isDisabled(v) && n.exec(v, f));
    }
    return () => N(rn, {
      visible: a.value,
      "onUpdate:visible": (f) => a.value = f,
      trigger: "contextmenu",
      placement: "right-end",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => N(vt, {
        text: "别名",
        icon: "alias",
        onClick: u
      }, null),
      default: () => N(Ga, {
        ref: o,
        onSubmit: c
      }, null)
    });
  }
});
function NS(e) {
  const { selection: t } = e;
  if (t) {
    const [n, r] = Et.edges(t), o = xe.range(e, n, r), a = xe.string(e, o), i = a.trimEnd();
    if (i !== a) {
      const s = a.length - i.length, l = { ...r, offset: r.offset - s }, u = { ...t, anchor: n, focus: l };
      we.select(e, u);
    }
  }
}
function RS() {
  return Nt("w-e-dom-english");
}
class DS {
  getValue(t) {
    const {
      selection: n
    } = t;
    return n == null ? null : xe.string(t, n);
  }
  isDisabled(t) {
    const {
      selection: n
    } = t;
    if (n == null || Et.isCollapsed(n))
      return !0;
    const r = xe.string(t, n);
    return r.length <= 0 || !/^[A-Za-z]+$/gi.test(r);
  }
  exec(t, n) {
    if (this.isDisabled(t))
      return;
    const {
      selection: r
    } = t;
    if (r == null)
      return;
    const o = this.getValue(t);
    if (o == null)
      return;
    const a = {
      type: "ssml-p",
      domId: RS(),
      word: o,
      phoneme: n,
      remark: n,
      bgColor: "english",
      children: [{
        text: ""
      }]
    };
    we.delete(t), we.insertNodes(t, a), t.move(1), Rt(t, "ssml-p", a.domId, (i) => Oo(t, i, (s) => s.word));
  }
}
function BS(e) {
  const t = {
    translate: [{
      id: "1",
      text: "wərd",
      remark: "wərd"
    }],
    global: [{
      id: "2",
      text: "ˈɡlōbəl",
      remark: "ˈɡlōbəl"
    }]
  };
  return Promise.resolve(t[e] || t.translate);
}
const jS = /* @__PURE__ */ B({
  emits: ["error"],
  props: ["popover", "fetch"],
  setup(e, {
    emit: t
  }) {
    const n = new DS(), r = ne("editor"), o = _([]), a = _(!1);
    function i() {
      a.value || (a.value = !0);
    }
    function s() {
      a.value && (a.value = !1);
    }
    async function l(u) {
      if (NS(u), n.isDisabled(u))
        return t("error", "请选择英文单词");
      const c = n.getValue(u);
      if (c) {
        if (o.value = await (e.fetch || BS)(c), o.value.length <= 0)
          return t("error", "找不到单词的音标");
        i();
      }
    }
    return () => N(rn, {
      visible: a.value,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => N(vt, {
        text: "音标",
        icon: "english",
        onClick: l
      }, null),
      default: () => N("div", {
        class: "flex flex-col"
      }, [o.value.map(({
        id: u,
        text: c
      }) => N("div", {
        key: u,
        class: "btn full",
        onClick: () => {
          n.isDisabled(r == null ? void 0 : r.value) || n.exec(r == null ? void 0 : r.value, c), s();
        },
        onMousedown: Ce(() => {
        }, ["stop", "prevent"])
      }, [c]))])
    });
  }
});
function zS() {
  return Nt("w-e-dom-changespeed");
}
class HS {
  getValue(t) {
    const {
      selection: n
    } = t;
    return n == null ? null : xe.string(t, n);
  }
  isDisabled(t) {
    const {
      selection: n
    } = t;
    return !!(n == null || Et.isCollapsed(n) || xe.string(t, n).length <= 1);
  }
  exec(t, n) {
    if (this.isDisabled(t))
      return;
    const {
      selection: r
    } = t;
    if (r == null)
      return;
    const o = this.getValue(t);
    if (o == null)
      return;
    const a = {
      type: "ssml-prosody",
      domId: zS(),
      remark: n,
      rate: n,
      bgColor: "changespeed",
      children: [{
        text: o
      }]
    };
    we.delete(t), we.insertNodes(t, a), Rt(t, "ssml-prosody", a.domId, (i) => {
      we.unwrapNodes(t, {
        at: i[1]
      });
    });
  }
}
function VS() {
  const e = [];
  for (let t = 2; t <= 40; t++) {
    const n = `${(t * 0.05).toFixed(2)}x`;
    e.push({
      id: t.toString(),
      text: n,
      remark: n
    });
  }
  return Promise.resolve(e);
}
const qS = /* @__PURE__ */ B({
  emits: ["error"],
  setup(e, {
    emit: t
  }) {
    const n = new HS(), r = ne("editor"), o = _([]), a = _(!1);
    function i() {
      a.value || (a.value = !0);
    }
    function s() {
      a.value && (a.value = !1);
    }
    async function l(u) {
      if (o.value = await VS(), n.isDisabled(u)) {
        t("error", "选中一个中文字符，并且有不能在其他语句之内");
        return;
      }
      i();
    }
    return () => N(rn, {
      style: {
        padding: "0px"
      },
      visible: a.value,
      "onUpdate:visible": (u) => a.value = u,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => N(vt, {
        text: "局部变速",
        icon: "changespeed",
        onClick: l
      }, null),
      default: () => N("div", {
        class: "flex flex-col h h-50 scroll scroll-y"
      }, [o.value.map(({
        id: u,
        text: c
      }) => N("div", {
        key: u,
        class: "btn full",
        onClick: () => {
          n.isDisabled(r == null ? void 0 : r.value) || n.exec(r == null ? void 0 : r.value, c), s();
        },
        onMousedown: Ce(() => {
        }, ["stop", "prevent"])
      }, [c]))])
    });
  }
});
function WS() {
  return Nt("w-e-dom-rhythm");
}
class KS {
  isDisabled(t) {
    const {
      selection: n
    } = t;
    return !!(n == null || Et.isExpanded(n));
  }
  exec(t, n) {
    if (this.isDisabled(t))
      return;
    const {
      selection: r
    } = t;
    if (r == null)
      return;
    const o = {
      type: "ssml-break",
      domId: WS(),
      time: n.id,
      remark: n.remark,
      bgColor: "rhythm",
      children: [{
        text: ""
      }]
    };
    we.insertNodes(t, o), t.move(1), Rt(t, "ssml-break", o.domId, (a) => {
      we.delete(t, {
        at: a[1]
      });
    });
  }
}
const US = [{
  id: "200ms",
  text: "短",
  remark: "短"
}, {
  id: "300ms",
  text: "中",
  remark: "中"
}, {
  id: "500ms",
  text: "长",
  remark: "长"
}], GS = /* @__PURE__ */ B({
  emits: ["error"],
  setup(e, {
    emit: t
  }) {
    const n = new KS(), r = ne("editor"), o = _(!1);
    function a() {
      o.value || (o.value = !0);
    }
    function i() {
      o.value && (o.value = !1);
    }
    function s(l) {
      if (n.isDisabled(l)) {
        t("error", "不能选择文本");
        return;
      }
      a();
    }
    return () => N(rn, {
      visible: o.value,
      "onUpdate:visible": (l) => o.value = l,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => N(vt, {
        text: "停顿调节",
        icon: "rhythm",
        onClick: s
      }, null),
      default: () => N("div", {
        class: "flex flex-col"
      }, [US.map(({
        id: l,
        text: u,
        remark: c
      }) => N("div", {
        key: l,
        class: "btn radius ssml-menu item full",
        onClick: () => {
          n.isDisabled(r == null ? void 0 : r.value) || n.exec(r == null ? void 0 : r.value, {
            id: l,
            text: u,
            remark: c
          }), i();
        },
        onMousedown: Ce(() => {
        }, ["stop", "prevent"])
      }, [u]))])
    });
  }
});
function YS(e) {
  if (window.navigator.userAgent.toLowerCase().indexOf("ie") >= 0) {
    const n = `<embed name="embedPlay" src="${e}"></embed>`;
    de("body").find("embed").length <= 0 && de("body").append(n);
    const r = document.embedPlay;
    r.volume = 100;
  } else {
    const n = `<audio id='audioPlay' src='${e}' hidden='true'>`;
    de("body").find("audio").length <= 0 && de("body").append(n), document.getElementById("audioPlay").play();
  }
}
function ZS() {
  return Nt("w-e-dom-special");
}
class XS {
  getValue(t) {
    const {
      selection: n
    } = t;
    return n == null ? null : xe.string(t, n);
  }
  isDisabled(t) {
    const {
      selection: n
    } = t;
    return n == null || Et.isExpanded(n) ? !0 : xe.string(t, n).length > 0;
  }
  exec(t, n) {
    if (this.isDisabled(t))
      return;
    const {
      selection: r
    } = t;
    if (r == null || this.getValue(t) == null)
      return;
    const a = {
      type: "ssml-audio",
      domId: ZS(),
      src: n.value,
      remark: n.label,
      bgColor: "special",
      children: [{
        text: ""
      }]
    };
    we.insertNodes(t, a), t.move(1), Rt(t, "ssml-audio", a.domId, (i) => we.delete(t, {
      at: i[1]
    })), hS(t, "ssml-audio", a.domId, (i) => YS(i[0].src));
  }
}
const JS = /* @__PURE__ */ B({
  emits: ["error"],
  props: {
    fetch: {
      type: Function,
      required: !0
    },
    scenes: {
      type: Object,
      required: !0
    },
    styles: {
      type: Object,
      required: !0
    }
  },
  setup(e, {
    emit: t
  }) {
    const n = new XS(), r = _(!1), o = ut(), a = _([]), i = ne("editor");
    async function s(u) {
      if (n.isDisabled(u)) {
        t("error", "请选中编辑区，并且不能选中文字");
        return;
      }
      r.value = !0, a.value = await e.fetch({
        search: "",
        menuKey: "first",
        scene: "",
        style: ""
      }), o.value = u.selection;
    }
    const l = (u) => {
      r.value = !1;
      const c = i == null ? void 0 : i.value;
      !c || !u || (c.select(o.value), !n.isDisabled(c) && n.exec(c, u));
    };
    return () => N("div", null, [N(vt, {
      text: "音效",
      icon: "special",
      onClick: s
    }, null), N(Mu, {
      modelValue: r.value,
      "onUpdate:modelValue": (u) => r.value = u,
      width: 500
    }, {
      default: () => [N(Ya, {
        menuItemLabel: {
          first: "默认音效",
          second: "自定义音效",
          last: "最近音效"
        },
        scenes: e.scenes,
        styles: e.styles,
        dataList: a.value,
        onSubmit: l,
        onFetch: async (u) => {
          const c = await e.fetch(u);
          a.value = c;
        }
      }, null)]
    })]);
  }
});
function QS() {
  return Nt("w-e-dom-mute");
}
class eE {
  isDisabled(t) {
    const {
      selection: n
    } = t;
    return !!(n == null || Et.isExpanded(n));
  }
  exec(t, n) {
    if (this.isDisabled(t))
      return;
    const {
      selection: r
    } = t;
    if (r == null)
      return;
    const o = {
      type: "ssml-break",
      domId: QS(),
      time: n,
      remark: n,
      bgColor: "mute",
      children: [{
        text: ""
      }]
    };
    we.insertNodes(t, o), t.move(1), Rt(t, "ssml-break", o.domId, (a) => {
      we.delete(t, {
        at: a[1]
      });
    });
  }
}
const tE = [{
  id: "150ms",
  text: "150ms",
  remark: "150ms"
}, {
  id: "200ms",
  text: "200ms",
  remark: "200ms"
}, {
  id: "300ms",
  text: "300ms",
  remark: "300ms"
}, {
  id: "400ms",
  text: "400ms",
  remark: "400ms"
}, {
  id: "500ms",
  text: "500ms",
  remark: "500ms"
}, {
  id: "600ms",
  text: "600ms",
  remark: "600ms"
}], nE = /* @__PURE__ */ B({
  emits: ["error"],
  setup(e, {
    emit: t
  }) {
    const n = new eE(), r = ne("editor");
    r || t("error", "请注入editor");
    const o = _(!1), a = _(), i = ut();
    function s() {
      o.value || (o.value = !0);
    }
    function l() {
      o.value && (o.value = !1);
    }
    function u(f) {
      if (n.isDisabled(f)) {
        t("error", "不能选择文本");
        return;
      }
      s(), i.value = f.selection, a.value.focus();
    }
    function c(f) {
      l();
      const v = r == null ? void 0 : r.value;
      !v || !f || (v.select(i.value), !n.isDisabled(v) && n.exec(v, f));
    }
    return () => N(rn, {
      visible: o.value,
      "onUpdate:visible": (f) => o.value = f,
      trigger: "contextmenu",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => N(vt, {
        text: "插入静音",
        icon: "mute",
        onClick: u
      }, null),
      default: () => N("div", {
        class: "flex flex-col"
      }, [tE.map(({
        id: f,
        text: v
      }) => N("div", {
        key: f,
        class: "btn radius ssml-menu item full",
        onClick: () => c(f),
        onMousedown: Ce(() => {
        }, ["stop", "prevent"])
      }, [v])), N(Ga, {
        type: "number",
        ref: a,
        onSubmit: c
      }, null)])
    });
  }
}), rE = /* @__PURE__ */ B({
  emits: ["error"],
  props: {
    fetch: {
      type: Function,
      required: !0
    },
    scenes: {
      type: Object,
      required: !0
    },
    styles: {
      type: Object,
      required: !0
    }
  },
  setup(e, {
    emit: t
  }) {
    const n = _(!1), r = ut(), o = _([]), a = ne("editor");
    async function i(l) {
      n.value = !0, o.value = await e.fetch({
        search: "",
        menuKey: "first",
        scene: "",
        style: ""
      }), r.value = l.selection;
    }
    const s = (l) => {
      n.value = !1;
      const u = a == null ? void 0 : a.value;
      if (!u || !l) {
        t("error", "背景音乐值无效");
        return;
      }
      u.emit("updateBgm", l);
    };
    return () => N("div", null, [N(vt, {
      text: "配乐",
      icon: "bgm",
      onClick: i
    }, null), N(Mu, {
      modelValue: n.value,
      "onUpdate:modelValue": (l) => n.value = l,
      width: 500
    }, {
      default: () => [N(Ya, {
        menuItemLabel: {
          first: "默认配乐",
          second: "自定义配乐",
          last: "最近配乐"
        },
        scenes: e.scenes,
        styles: e.styles,
        dataList: o.value,
        onSubmit: s,
        onFetch: async (l) => {
          const u = await e.fetch(l);
          o.value = u;
        }
      }, null)]
    })]);
  }
});
const oE = {
  install: (e) => {
    e.component("SpeakerMenu", SS), e.component("ContinuousMenu", OS), e.component("ReadMenu", xS), e.component("DigitalMenu", PS), e.component("AliasMenu", FS), e.component("EnglishMenu", jS), e.component("ChangespeedMenu", qS), e.component("RhythmMenu", GS), e.component("SpecialMenu", JS), e.component("MuteMenu", nE), e.component("BgmMenu", rE);
  }
};
function tl(e, t, n, r, o) {
  const a = t === void 0 ? void 0 : t.key;
  return { sel: e, data: t, children: n, text: r, elm: o, key: a };
}
const nl = Array.isArray;
function Yo(e) {
  return typeof e == "string" || typeof e == "number" || e instanceof String || e instanceof Number;
}
function Ku(e, t, n) {
  if (e.ns = "http://www.w3.org/2000/svg", n !== "foreignObject" && t !== void 0)
    for (let r = 0; r < t.length; ++r) {
      const o = t[r];
      if (typeof o == "string")
        continue;
      const a = o.data;
      a !== void 0 && Ku(a, o.children, o.sel);
    }
}
function Y(e, t, n) {
  let r = {}, o, a, i;
  if (n !== void 0 ? (t !== null && (r = t), nl(n) ? o = n : Yo(n) ? a = n.toString() : n && n.sel && (o = [n])) : t != null && (nl(t) ? o = t : Yo(t) ? a = t.toString() : t && t.sel ? o = [t] : r = t), o !== void 0)
    for (i = 0; i < o.length; ++i)
      Yo(o[i]) && (o[i] = tl(void 0, void 0, void 0, o[i], void 0));
  return e[0] === "s" && e[1] === "v" && e[2] === "g" && (e.length === 3 || e[3] === "." || e[3] === "#") && Ku(r, o, e), tl(e, r, o, a, void 0);
}
const Ge = { style: { userSelect: "none" }, contentEditable: !1 };
function aE(e) {
  const { domId: t, bgColor: n, remark: r, word: o } = e;
  return Y("span.ssml-wrap", { ...Ge }, [
    Y(`span.tag.bg-color.${n}`, [
      Y("span.tag-remark", { attrs: { "data-tag-remark": r } }),
      Y(`span#${t}-close.btn.btn-text`, Y("span.iconfont.icon-roundclosefill", null))
    ]),
    Y(`span.boundary.start.ft-color.${n}`),
    Y("span", o),
    Y(`span.boundary.end.ft-color.${n}`)
  ]);
}
function iE(e, t) {
  const { bgColor: n, domId: r, remark: o, value: a } = e;
  return Y("span.ssml-wrap", t ? {} : { ...Ge }, [
    Y(`span.tag.bg-color.${n}`, { ...Ge }, [
      Y("span.tag-remark", { attrs: { "data-tag-remark": o } }),
      Y(`span#${r}-close.btn.btn-text`, Y("span.iconfont.icon-roundclosefill", null))
    ]),
    Y(`span.boundary.start.ft-color.${n}`, { ...Ge }),
    Y("span", t || a),
    Y(`span.boundary.end.ft-color.${n}`, { ...Ge })
  ]);
}
function sE(e, t) {
  const { bgColor: n, domId: r, remark: o } = e;
  return Y("span.ssml-wrap", [
    Y(`span.tag.bg-color.${n}`, { ...Ge }, [
      Y("span.tag-remark", { attrs: { "data-tag-remark": o } }),
      Y(`span#${r}-close.btn.btn-text`, Y("span.iconfont.icon-roundclosefill", null))
    ]),
    Y(`span.boundary.start.ft-color.${n}`, { ...Ge }),
    Y("span", t),
    Y(`span.boundary.end.ft-color.${n}`, { ...Ge })
  ]);
}
function lE(e) {
  const { domId: t, remark: n, bgColor: r } = e;
  return Y("span.ssml-wrap", [
    Y(`span.tag.bg-color.${r}`, { ...Ge }, [
      Y("span.tag-remark", { attrs: { "data-tag-remark": n } }),
      Y(`span#${t}-close.btn.btn-text`, Y("span.iconfont.icon-roundclosefill", null))
    ])
  ]);
}
function uE(e) {
  const { domId: t, remark: n, bgColor: r, value: o } = e;
  return Y("span.ssml-wrap", { ...Ge }, [
    Y(`span.tag.bg-color.${r}`, [
      Y("span.tag-remark", { attrs: { "data-tag-remark": n } }),
      Y(`span#${t}-close.btn.btn-text`, Y("span.iconfont.icon-roundclosefill"))
    ]),
    Y(`span.boundary.start.ft-color.${r}`),
    Y("span", o),
    Y(`span.boundary.end.ft-color.${r}`)
  ]);
}
function cE(e, t) {
  const { bgColor: n, domId: r, remark: o } = e;
  return Y("span.ssml-wrap", [
    Y(`span.tag.bg-color.${n}`, { ...Ge }, [
      Y("span.tag-remark", { attrs: { "data-tag-remark": o } }),
      Y(`span#${r}-close.btn.btn-text`, Y("span.iconfont.icon-roundclosefill", null))
    ]),
    Y(`span.boundary.start.ft-color.${n}`, { ...Ge }),
    Y("span", t),
    Y(`span.boundary.end.ft-color.${n}`, { ...Ge })
  ]);
}
function fE(e) {
  const { bgColor: t, domId: n, remark: r } = e;
  return Y("span.ssml-wrap", [
    Y(`span.tag.bg-color.${t}`, { ...Ge }, [
      Y(`span#${n}-play.btn.btn-text`, Y("span.iconfont.icon-play", null)),
      Y("span.tag-remark", { attrs: { "data-tag-remark": r } }),
      Y(`span#${n}-close.btn.btn-text`, Y("span.iconfont.icon-roundclosefill", null))
    ])
  ]);
}
const dE = [
  {
    type: "ssml-p",
    renderElem: aE
  },
  {
    type: "ssml-w",
    renderElem: iE
  },
  {
    type: "ssml-say-as",
    renderElem: sE
  },
  {
    type: "ssml-break",
    renderElem: lE
  },
  {
    type: "ssml-sub",
    renderElem: uE
  },
  {
    type: "ssml-prosody",
    renderElem: cE
  },
  {
    type: "ssml-audio",
    renderElem: fE
  }
];
function pE(e, t) {
  return `<s>${t}</s>`;
}
function vE(e, t) {
  const { phoneme: n, value: r } = e;
  return n ? `<w phoneme="${n}">${r}</w>` : `<w>${t}</w>`;
}
function mE(e) {
  const { word: t, phoneme: n } = e;
  return `<p ph="${n}">${t}</p>`;
}
function hE(e, t) {
  const { interpretAs: n } = e;
  return `<say-as interpret-as="${n}">${t}</say-as>`;
}
function gE(e) {
  const { time: t } = e;
  return `<break time="${t}" />`;
}
function yE(e) {
  const { alias: t, value: n } = e;
  return `<sub alias="${t}">${n}</sub>`;
}
function bE(e, t) {
  const { rate: n } = e;
  return `<prosody rate="${n}">${t}</prosody>`;
}
function wE(e) {
  const { src: t } = e;
  return `<audio src="${t}" />`;
}
const SE = [
  {
    type: "paragraph",
    elemToHtml: pE
  },
  {
    type: "ssml-w",
    elemToHtml: vE
  },
  {
    type: "ssml-p",
    elemToHtml: mE
  },
  {
    type: "ssml-say-as",
    elemToHtml: hE
  },
  {
    type: "ssml-break",
    elemToHtml: gE
  },
  {
    type: "ssml-sub",
    elemToHtml: yE
  },
  {
    type: "ssml-prosody",
    elemToHtml: bE
  },
  {
    type: "ssml-audio",
    elemToHtml: wE
  }
];
function Ue(e, t) {
  return e === t;
}
function EE(e) {
  const { isInline: t, isVoid: n, deleteBackward: r, deleteForward: o, insertBreak: a, getHtml: i, apply: s } = e, l = e;
  l.isInline = (c) => {
    const f = Zo.getNodeType(c);
    return Ue(f, "ssml-w") || Ue(f, "ssml-p") || Ue(f, "ssml-break") || Ue(f, "ssml-say-as") || Ue(f, "ssml-sub") || Ue(f, "ssml-prosody") || Ue(f, "ssml-audio") ? !0 : t(c);
  }, l.isVoid = (c) => {
    const f = Zo.getNodeType(c);
    if (Ue(f, "ssml-w")) {
      const { phoneme: v } = c;
      return !!v;
    }
    return Ue(f, "ssml-p") || Ue(f, "ssml-break") ? !0 : Ue(f, "ssml-say-as") ? !1 : Ue(f, "ssml-sub") ? !0 : Ue(f, "ssml-prosody") ? !1 : Ue(f, "ssml-audio") ? !0 : n(c);
  }, l.deleteBackward = (c) => {
    r(c);
  }, l.deleteForward = (c) => {
    o(c);
  }, l.insertBreak = () => {
    a();
  };
  const u = { voice: "", volume: "", pitch: "" };
  return e.on("updateSpeak", (c) => {
    Object.assign(u, c);
  }), e.on("updateBgm", (c) => {
    u.bgm = c.value, u.bgmRemark = c.label;
  }), e.on("removeBgm", () => {
    u.bgm = void 0, u.bgmRemark = void 0;
  }), l.getHtml = () => {
    const c = [];
    for (const f in u)
      if (Object.prototype.hasOwnProperty.call(u, f)) {
        const v = u[f];
        v && c.push(`${f}=${v}`);
      }
    return `<speak ${c.join(" ")}>${i()}</speak>`;
  }, l.apply = (c) => {
    s(c);
  }, l;
}
const NE = {
  editorPlugin: EE,
  renderElems: dE,
  elemsToHtml: SE
};
const RE = {
  install(e) {
    e.use(B2), e.use(oE);
  }
};
export {
  FS as AliasMenu,
  vt as BarButton,
  Ga as BarInput,
  d2 as BarPopover,
  Ya as BarSearch,
  rE as BgmMenu,
  qS as ChangespeedMenu,
  OS as ContinuousMenu,
  IE as DOMComment,
  AE as DOMElement,
  xE as DOMNode,
  PE as DOMRange,
  kE as DOMSelection,
  LE as DOMStaticRange,
  ME as DOMText,
  PS as DigitalMenu,
  NE as EditorCoreModule,
  jS as EnglishMenu,
  nE as MuteMenu,
  xS as ReadMenu,
  GS as RhythmMenu,
  SS as SpeakerMenu,
  JS as SpecialMenu,
  D2 as TopPanel,
  RE as default,
  Nt as genRandomStr,
  YS as playSound
};

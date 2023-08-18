import { defineComponent as B, inject as ae, openBlock as x, createElementBlock as z, normalizeClass as R, withModifiers as Oe, createElementVNode as W, toDisplayString as $e, ref as $, watch as U, getCurrentScope as hu, onScopeDispose as gu, readonly as Bs, unref as p, getCurrentInstance as Ve, onMounted as Ce, nextTick as me, warn as bu, isVNode as ja, computed as y, isRef as yu, shallowRef as Kt, onBeforeUnmount as qe, onBeforeMount as wu, provide as Be, mergeProps as yt, renderSlot as oe, toRef as lt, onUnmounted as Su, reactive as wt, toRefs as pr, onUpdated as Ds, createVNode as N, Fragment as Le, useSlots as ra, withCtx as q, createBlock as Q, resolveDynamicComponent as ht, normalizeStyle as je, createTextVNode as Pn, createCommentVNode as ee, TransitionGroup as Eu, useAttrs as Ou, withDirectives as It, vShow as En, Transition as yn, cloneVNode as _u, Text as js, Comment as Tu, Teleport as $u, onDeactivated as Cu, toHandlers as xu, h as ke, watchEffect as Iu, resolveComponent as qt, toRaw as qr, triggerRef as Gn, resolveDirective as Au, renderList as kn, withKeys as dt, vModelText as Mu, createSlots as Pu, pushScopeId as ku, popScopeId as Lu } from "vue";
import { SlateEditor as Te, SlateElement as Fu, DomEditor as Bo, SlateText as Nu, SlateTransforms as ye, SlatePath as Ru, SlateRange as St } from "@wangeditor/editor";
const Bu = { class: "button" }, Du = { class: "content" }, ju = /* @__PURE__ */ B({
  __name: "bar-button",
  props: {
    text: {},
    icon: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, r = ae("editor"), o = () => {
      !n.disabled && r && t("click", r == null ? void 0 : r.value);
    };
    return (a, i) => (x(), z("div", {
      class: R(["btn bar-button", { disabled: a.disabled }]),
      onClick: o,
      onMousedown: i[0] || (i[0] = Oe(() => {
      }, ["prevent"]))
    }, [
      W("div", Bu, [
        W("span", {
          class: R(["font-size-30 iconfont-moyin", [`moyin-icon_${a.icon}`]])
        }, null, 2)
      ]),
      W("div", Du, $e(a.text), 1)
    ], 34));
  }
});
const zs = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Et = /* @__PURE__ */ zs(ju, [["__scopeId", "data-v-94376aa5"]]), Nr = function(e, t, ...n) {
  let r;
  t.includes("mouse") || t.includes("click") ? r = "MouseEvents" : t.includes("key") ? r = "KeyboardEvent" : r = "HTMLEvents";
  const o = document.createEvent(r);
  return o.initEvent(t, ...n), e.dispatchEvent(o), e;
}, Wt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e == null ? void 0 : e(o);
  if (n === !1 || !a)
    return t == null ? void 0 : t(o);
};
var za;
const Ne = typeof window < "u", zu = (e) => typeof e == "string", Wr = () => {
}, Hs = Ne && ((za = window == null ? void 0 : window.navigator) == null ? void 0 : za.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function rr(e) {
  return typeof e == "function" ? e() : p(e);
}
function Hu(e, t) {
  function n(...r) {
    return new Promise((o, a) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(o).catch(a);
    });
  }
  return n;
}
function Vu(e, t = {}) {
  let n, r, o = Wr;
  const a = (s) => {
    clearTimeout(s), o(), o = Wr;
  };
  return (s) => {
    const l = rr(e), u = rr(t.maxWait);
    return n && a(n), l <= 0 || u !== void 0 && u <= 0 ? (r && (a(r), r = null), Promise.resolve(s())) : new Promise((f, d) => {
      o = t.rejectOnCancel ? d : f, u && !r && (r = setTimeout(() => {
        n && a(n), r = null, f(s());
      }, u)), n = setTimeout(() => {
        r && a(r), r = null, f(s());
      }, l);
    });
  };
}
function qu(e) {
  return e;
}
function Xr(e) {
  return hu() ? (gu(e), !0) : !1;
}
function Wu(e, t = 200, n = {}) {
  return Hu(Vu(t, n), e);
}
function Ku(e, t = 200, n = {}) {
  const r = $(e.value), o = Wu(() => {
    r.value = e.value;
  }, t, n);
  return U(e, () => o()), r;
}
function Uu(e, t = !0) {
  Ve() ? Ce(e) : t ? e() : me(e);
}
function Ha(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, o = $(!1);
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
    }, rr(t));
  }
  return r && (o.value = !0, Ne && l()), Xr(s), {
    isPending: Bs(o),
    start: l,
    stop: s
  };
}
function an(e) {
  var t;
  const n = rr(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const oa = Ne ? window : void 0;
function gn(...e) {
  let t, n, r, o;
  if (zu(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = oa) : [t, n, r, o] = e, !t)
    return Wr;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], i = () => {
    a.forEach((f) => f()), a.length = 0;
  }, s = (f, d, m, b) => (f.addEventListener(d, m, b), () => f.removeEventListener(d, m, b)), l = U(() => [an(t), rr(o)], ([f, d]) => {
    i(), f && a.push(...n.flatMap((m) => r.map((b) => s(f, m, b, d))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), i();
  };
  return Xr(u), u;
}
let Va = !1;
function Gu(e, t, n = {}) {
  const { window: r = oa, ignore: o = [], capture: a = !0, detectIframe: i = !1 } = n;
  if (!r)
    return;
  Hs && !Va && (Va = !0, Array.from(r.document.body.children).forEach((m) => m.addEventListener("click", Wr)));
  let s = !0;
  const l = (m) => o.some((b) => {
    if (typeof b == "string")
      return Array.from(r.document.querySelectorAll(b)).some((g) => g === m.target || m.composedPath().includes(g));
    {
      const g = an(b);
      return g && (m.target === g || m.composedPath().includes(g));
    }
  }), f = [
    gn(r, "click", (m) => {
      const b = an(e);
      if (!(!b || b === m.target || m.composedPath().includes(b))) {
        if (m.detail === 0 && (s = !l(m)), !s) {
          s = !0;
          return;
        }
        t(m);
      }
    }, { passive: !0, capture: a }),
    gn(r, "pointerdown", (m) => {
      const b = an(e);
      b && (s = !m.composedPath().includes(b) && !l(m));
    }, { passive: !0 }),
    i && gn(r, "blur", (m) => {
      var b;
      const g = an(e);
      ((b = r.document.activeElement) == null ? void 0 : b.tagName) === "IFRAME" && !(g != null && g.contains(r.document.activeElement)) && t(m);
    })
  ].filter(Boolean);
  return () => f.forEach((m) => m());
}
function Yu(e, t = !1) {
  const n = $(), r = () => n.value = !!e();
  return r(), Uu(r, t), n;
}
const qa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Wa = "__vueuse_ssr_handlers__";
qa[Wa] = qa[Wa] || {};
var Ka = Object.getOwnPropertySymbols, Zu = Object.prototype.hasOwnProperty, Ju = Object.prototype.propertyIsEnumerable, Qu = (e, t) => {
  var n = {};
  for (var r in e)
    Zu.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Ka)
    for (var r of Ka(e))
      t.indexOf(r) < 0 && Ju.call(e, r) && (n[r] = e[r]);
  return n;
};
function Vn(e, t, n = {}) {
  const r = n, { window: o = oa } = r, a = Qu(r, ["window"]);
  let i;
  const s = Yu(() => o && "ResizeObserver" in o), l = () => {
    i && (i.disconnect(), i = void 0);
  }, u = U(() => an(e), (d) => {
    l(), s.value && o && d && (i = new ResizeObserver(t), i.observe(d, a));
  }, { immediate: !0, flush: "post" }), f = () => {
    l(), u();
  };
  return Xr(f), {
    isSupported: s,
    stop: f
  };
}
var Ua;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ua || (Ua = {}));
var Xu = Object.defineProperty, Ga = Object.getOwnPropertySymbols, ec = Object.prototype.hasOwnProperty, tc = Object.prototype.propertyIsEnumerable, Ya = (e, t, n) => t in e ? Xu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, nc = (e, t) => {
  for (var n in t || (t = {}))
    ec.call(t, n) && Ya(e, n, t[n]);
  if (Ga)
    for (var n of Ga(t))
      tc.call(t, n) && Ya(e, n, t[n]);
  return e;
};
const rc = {
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
nc({
  linear: qu
}, rc);
const oc = () => Ne && /firefox/i.test(window.navigator.userAgent);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const or = () => {
}, ac = Object.prototype.hasOwnProperty, Za = (e, t) => ac.call(e, t), Qn = Array.isArray, et = (e) => typeof e == "function", Ae = (e) => typeof e == "string", Gt = (e) => e !== null && typeof e == "object", ic = Object.prototype.toString, sc = (e) => ic.call(e), go = (e) => sc(e).slice(8, -1);
var lc = typeof global == "object" && global && global.Object === Object && global;
const Vs = lc;
var uc = typeof self == "object" && self && self.Object === Object && self, cc = Vs || uc || Function("return this")();
const Ot = cc;
var fc = Ot.Symbol;
const Mt = fc;
var qs = Object.prototype, dc = qs.hasOwnProperty, pc = qs.toString, Yn = Mt ? Mt.toStringTag : void 0;
function vc(e) {
  var t = dc.call(e, Yn), n = e[Yn];
  try {
    e[Yn] = void 0;
    var r = !0;
  } catch {
  }
  var o = pc.call(e);
  return r && (t ? e[Yn] = n : delete e[Yn]), o;
}
var mc = Object.prototype, hc = mc.toString;
function gc(e) {
  return hc.call(e);
}
var bc = "[object Null]", yc = "[object Undefined]", Ja = Mt ? Mt.toStringTag : void 0;
function qn(e) {
  return e == null ? e === void 0 ? yc : bc : Ja && Ja in Object(e) ? vc(e) : gc(e);
}
function ln(e) {
  return e != null && typeof e == "object";
}
var wc = "[object Symbol]";
function eo(e) {
  return typeof e == "symbol" || ln(e) && qn(e) == wc;
}
function Sc(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Ec = Array.isArray;
const Yt = Ec;
var Oc = 1 / 0, Qa = Mt ? Mt.prototype : void 0, Xa = Qa ? Qa.toString : void 0;
function Ws(e) {
  if (typeof e == "string")
    return e;
  if (Yt(e))
    return Sc(e, Ws) + "";
  if (eo(e))
    return Xa ? Xa.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Oc ? "-0" : t;
}
var _c = /\s/;
function Tc(e) {
  for (var t = e.length; t-- && _c.test(e.charAt(t)); )
    ;
  return t;
}
var $c = /^\s+/;
function Cc(e) {
  return e && e.slice(0, Tc(e) + 1).replace($c, "");
}
function Pt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ei = 0 / 0, xc = /^[-+]0x[0-9a-f]+$/i, Ic = /^0b[01]+$/i, Ac = /^0o[0-7]+$/i, Mc = parseInt;
function ti(e) {
  if (typeof e == "number")
    return e;
  if (eo(e))
    return ei;
  if (Pt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Pt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Cc(e);
  var n = Ic.test(e);
  return n || Ac.test(e) ? Mc(e.slice(2), n ? 2 : 8) : xc.test(e) ? ei : +e;
}
var Pc = "[object AsyncFunction]", kc = "[object Function]", Lc = "[object GeneratorFunction]", Fc = "[object Proxy]";
function Ks(e) {
  if (!Pt(e))
    return !1;
  var t = qn(e);
  return t == kc || t == Lc || t == Pc || t == Fc;
}
var Nc = Ot["__core-js_shared__"];
const bo = Nc;
var ni = function() {
  var e = /[^.]+$/.exec(bo && bo.keys && bo.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Rc(e) {
  return !!ni && ni in e;
}
var Bc = Function.prototype, Dc = Bc.toString;
function On(e) {
  if (e != null) {
    try {
      return Dc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var jc = /[\\^$.*+?()[\]{}|]/g, zc = /^\[object .+?Constructor\]$/, Hc = Function.prototype, Vc = Object.prototype, qc = Hc.toString, Wc = Vc.hasOwnProperty, Kc = RegExp(
  "^" + qc.call(Wc).replace(jc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Uc(e) {
  if (!Pt(e) || Rc(e))
    return !1;
  var t = Ks(e) ? Kc : zc;
  return t.test(On(e));
}
function Gc(e, t) {
  return e == null ? void 0 : e[t];
}
function _n(e, t) {
  var n = Gc(e, t);
  return Uc(n) ? n : void 0;
}
var Yc = _n(Ot, "WeakMap");
const Do = Yc;
var ri = Object.create, Zc = function() {
  function e() {
  }
  return function(t) {
    if (!Pt(t))
      return {};
    if (ri)
      return ri(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const Jc = Zc;
function Qc(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Xc = function() {
  try {
    var e = _n(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const oi = Xc;
function ef(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var tf = 9007199254740991, nf = /^(?:0|[1-9]\d*)$/;
function Us(e, t) {
  var n = typeof e;
  return t = t ?? tf, !!t && (n == "number" || n != "symbol" && nf.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Gs(e, t, n) {
  t == "__proto__" && oi ? oi(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function aa(e, t) {
  return e === t || e !== e && t !== t;
}
var rf = Object.prototype, of = rf.hasOwnProperty;
function ia(e, t, n) {
  var r = e[t];
  (!(of.call(e, t) && aa(r, n)) || n === void 0 && !(t in e)) && Gs(e, t, n);
}
function to(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, i = t.length; ++a < i; ) {
    var s = t[a], l = r ? r(n[s], e[s], s, n, e) : void 0;
    l === void 0 && (l = e[s]), o ? Gs(n, s, l) : ia(n, s, l);
  }
  return n;
}
var af = 9007199254740991;
function Ys(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= af;
}
function Zs(e) {
  return e != null && Ys(e.length) && !Ks(e);
}
var sf = Object.prototype;
function sa(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || sf;
  return e === n;
}
function lf(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var uf = "[object Arguments]";
function ai(e) {
  return ln(e) && qn(e) == uf;
}
var Js = Object.prototype, cf = Js.hasOwnProperty, ff = Js.propertyIsEnumerable, df = ai(function() {
  return arguments;
}()) ? ai : function(e) {
  return ln(e) && cf.call(e, "callee") && !ff.call(e, "callee");
};
const pf = df;
function vf() {
  return !1;
}
var Qs = typeof exports == "object" && exports && !exports.nodeType && exports, ii = Qs && typeof module == "object" && module && !module.nodeType && module, mf = ii && ii.exports === Qs, si = mf ? Ot.Buffer : void 0, hf = si ? si.isBuffer : void 0, gf = hf || vf;
const Kr = gf;
var bf = "[object Arguments]", yf = "[object Array]", wf = "[object Boolean]", Sf = "[object Date]", Ef = "[object Error]", Of = "[object Function]", _f = "[object Map]", Tf = "[object Number]", $f = "[object Object]", Cf = "[object RegExp]", xf = "[object Set]", If = "[object String]", Af = "[object WeakMap]", Mf = "[object ArrayBuffer]", Pf = "[object DataView]", kf = "[object Float32Array]", Lf = "[object Float64Array]", Ff = "[object Int8Array]", Nf = "[object Int16Array]", Rf = "[object Int32Array]", Bf = "[object Uint8Array]", Df = "[object Uint8ClampedArray]", jf = "[object Uint16Array]", zf = "[object Uint32Array]", Se = {};
Se[kf] = Se[Lf] = Se[Ff] = Se[Nf] = Se[Rf] = Se[Bf] = Se[Df] = Se[jf] = Se[zf] = !0;
Se[bf] = Se[yf] = Se[Mf] = Se[wf] = Se[Pf] = Se[Sf] = Se[Ef] = Se[Of] = Se[_f] = Se[Tf] = Se[$f] = Se[Cf] = Se[xf] = Se[If] = Se[Af] = !1;
function Hf(e) {
  return ln(e) && Ys(e.length) && !!Se[qn(e)];
}
function la(e) {
  return function(t) {
    return e(t);
  };
}
var Xs = typeof exports == "object" && exports && !exports.nodeType && exports, Xn = Xs && typeof module == "object" && module && !module.nodeType && module, Vf = Xn && Xn.exports === Xs, yo = Vf && Vs.process, qf = function() {
  try {
    var e = Xn && Xn.require && Xn.require("util").types;
    return e || yo && yo.binding && yo.binding("util");
  } catch {
  }
}();
const Ln = qf;
var li = Ln && Ln.isTypedArray, Wf = li ? la(li) : Hf;
const el = Wf;
var Kf = Object.prototype, Uf = Kf.hasOwnProperty;
function tl(e, t) {
  var n = Yt(e), r = !n && pf(e), o = !n && !r && Kr(e), a = !n && !r && !o && el(e), i = n || r || o || a, s = i ? lf(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || Uf.call(e, u)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Us(u, l))) && s.push(u);
  return s;
}
function nl(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Gf = nl(Object.keys, Object);
const Yf = Gf;
var Zf = Object.prototype, Jf = Zf.hasOwnProperty;
function Qf(e) {
  if (!sa(e))
    return Yf(e);
  var t = [];
  for (var n in Object(e))
    Jf.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function ua(e) {
  return Zs(e) ? tl(e) : Qf(e);
}
function Xf(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var ed = Object.prototype, td = ed.hasOwnProperty;
function nd(e) {
  if (!Pt(e))
    return Xf(e);
  var t = sa(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !td.call(e, r)) || n.push(r);
  return n;
}
function ca(e) {
  return Zs(e) ? tl(e, !0) : nd(e);
}
var rd = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, od = /^\w*$/;
function ad(e, t) {
  if (Yt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || eo(e) ? !0 : od.test(e) || !rd.test(e) || t != null && e in Object(t);
}
var id = _n(Object, "create");
const ar = id;
function sd() {
  this.__data__ = ar ? ar(null) : {}, this.size = 0;
}
function ld(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ud = "__lodash_hash_undefined__", cd = Object.prototype, fd = cd.hasOwnProperty;
function dd(e) {
  var t = this.__data__;
  if (ar) {
    var n = t[e];
    return n === ud ? void 0 : n;
  }
  return fd.call(t, e) ? t[e] : void 0;
}
var pd = Object.prototype, vd = pd.hasOwnProperty;
function md(e) {
  var t = this.__data__;
  return ar ? t[e] !== void 0 : vd.call(t, e);
}
var hd = "__lodash_hash_undefined__";
function gd(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ar && t === void 0 ? hd : t, this;
}
function wn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
wn.prototype.clear = sd;
wn.prototype.delete = ld;
wn.prototype.get = dd;
wn.prototype.has = md;
wn.prototype.set = gd;
function bd() {
  this.__data__ = [], this.size = 0;
}
function no(e, t) {
  for (var n = e.length; n--; )
    if (aa(e[n][0], t))
      return n;
  return -1;
}
var yd = Array.prototype, wd = yd.splice;
function Sd(e) {
  var t = this.__data__, n = no(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : wd.call(t, n, 1), --this.size, !0;
}
function Ed(e) {
  var t = this.__data__, n = no(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Od(e) {
  return no(this.__data__, e) > -1;
}
function _d(e, t) {
  var n = this.__data__, r = no(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Jt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Jt.prototype.clear = bd;
Jt.prototype.delete = Sd;
Jt.prototype.get = Ed;
Jt.prototype.has = Od;
Jt.prototype.set = _d;
var Td = _n(Ot, "Map");
const ir = Td;
function $d() {
  this.size = 0, this.__data__ = {
    hash: new wn(),
    map: new (ir || Jt)(),
    string: new wn()
  };
}
function Cd(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ro(e, t) {
  var n = e.__data__;
  return Cd(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function xd(e) {
  var t = ro(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Id(e) {
  return ro(this, e).get(e);
}
function Ad(e) {
  return ro(this, e).has(e);
}
function Md(e, t) {
  var n = ro(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function Qt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Qt.prototype.clear = $d;
Qt.prototype.delete = xd;
Qt.prototype.get = Id;
Qt.prototype.has = Ad;
Qt.prototype.set = Md;
var Pd = "Expected a function";
function fa(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Pd);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var i = e.apply(this, r);
    return n.cache = a.set(o, i) || a, i;
  };
  return n.cache = new (fa.Cache || Qt)(), n;
}
fa.Cache = Qt;
var kd = 500;
function Ld(e) {
  var t = fa(e, function(r) {
    return n.size === kd && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Fd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Nd = /\\(\\)?/g, Rd = Ld(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Fd, function(n, r, o, a) {
    t.push(o ? a.replace(Nd, "$1") : r || n);
  }), t;
});
const Bd = Rd;
function Dd(e) {
  return e == null ? "" : Ws(e);
}
function rl(e, t) {
  return Yt(e) ? e : ad(e, t) ? [e] : Bd(Dd(e));
}
var jd = 1 / 0;
function ol(e) {
  if (typeof e == "string" || eo(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -jd ? "-0" : t;
}
function zd(e, t) {
  t = rl(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[ol(t[n++])];
  return n && n == r ? e : void 0;
}
function Xe(e, t, n) {
  var r = e == null ? void 0 : zd(e, t);
  return r === void 0 ? n : r;
}
function al(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Hd = nl(Object.getPrototypeOf, Object);
const il = Hd;
function jo() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return Yt(e) ? e : [e];
}
function Vd() {
  this.__data__ = new Jt(), this.size = 0;
}
function qd(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Wd(e) {
  return this.__data__.get(e);
}
function Kd(e) {
  return this.__data__.has(e);
}
var Ud = 200;
function Gd(e, t) {
  var n = this.__data__;
  if (n instanceof Jt) {
    var r = n.__data__;
    if (!ir || r.length < Ud - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Qt(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Ut(e) {
  var t = this.__data__ = new Jt(e);
  this.size = t.size;
}
Ut.prototype.clear = Vd;
Ut.prototype.delete = qd;
Ut.prototype.get = Wd;
Ut.prototype.has = Kd;
Ut.prototype.set = Gd;
function Yd(e, t) {
  return e && to(t, ua(t), e);
}
function Zd(e, t) {
  return e && to(t, ca(t), e);
}
var sl = typeof exports == "object" && exports && !exports.nodeType && exports, ui = sl && typeof module == "object" && module && !module.nodeType && module, Jd = ui && ui.exports === sl, ci = Jd ? Ot.Buffer : void 0, fi = ci ? ci.allocUnsafe : void 0;
function Qd(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = fi ? fi(n) : new e.constructor(n);
  return e.copy(r), r;
}
function Xd(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (a[o++] = i);
  }
  return a;
}
function ll() {
  return [];
}
var ep = Object.prototype, tp = ep.propertyIsEnumerable, di = Object.getOwnPropertySymbols, np = di ? function(e) {
  return e == null ? [] : (e = Object(e), Xd(di(e), function(t) {
    return tp.call(e, t);
  }));
} : ll;
const da = np;
function rp(e, t) {
  return to(e, da(e), t);
}
var op = Object.getOwnPropertySymbols, ap = op ? function(e) {
  for (var t = []; e; )
    al(t, da(e)), e = il(e);
  return t;
} : ll;
const ul = ap;
function ip(e, t) {
  return to(e, ul(e), t);
}
function cl(e, t, n) {
  var r = t(e);
  return Yt(e) ? r : al(r, n(e));
}
function zo(e) {
  return cl(e, ua, da);
}
function sp(e) {
  return cl(e, ca, ul);
}
var lp = _n(Ot, "DataView");
const Ho = lp;
var up = _n(Ot, "Promise");
const Vo = up;
var cp = _n(Ot, "Set");
const qo = cp;
var pi = "[object Map]", fp = "[object Object]", vi = "[object Promise]", mi = "[object Set]", hi = "[object WeakMap]", gi = "[object DataView]", dp = On(Ho), pp = On(ir), vp = On(Vo), mp = On(qo), hp = On(Do), pn = qn;
(Ho && pn(new Ho(new ArrayBuffer(1))) != gi || ir && pn(new ir()) != pi || Vo && pn(Vo.resolve()) != vi || qo && pn(new qo()) != mi || Do && pn(new Do()) != hi) && (pn = function(e) {
  var t = qn(e), n = t == fp ? e.constructor : void 0, r = n ? On(n) : "";
  if (r)
    switch (r) {
      case dp:
        return gi;
      case pp:
        return pi;
      case vp:
        return vi;
      case mp:
        return mi;
      case hp:
        return hi;
    }
  return t;
});
const sr = pn;
var gp = Object.prototype, bp = gp.hasOwnProperty;
function yp(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && bp.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var wp = Ot.Uint8Array;
const Ur = wp;
function pa(e) {
  var t = new e.constructor(e.byteLength);
  return new Ur(t).set(new Ur(e)), t;
}
function Sp(e, t) {
  var n = t ? pa(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var Ep = /\w*$/;
function Op(e) {
  var t = new e.constructor(e.source, Ep.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var bi = Mt ? Mt.prototype : void 0, yi = bi ? bi.valueOf : void 0;
function _p(e) {
  return yi ? Object(yi.call(e)) : {};
}
function Tp(e, t) {
  var n = t ? pa(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var $p = "[object Boolean]", Cp = "[object Date]", xp = "[object Map]", Ip = "[object Number]", Ap = "[object RegExp]", Mp = "[object Set]", Pp = "[object String]", kp = "[object Symbol]", Lp = "[object ArrayBuffer]", Fp = "[object DataView]", Np = "[object Float32Array]", Rp = "[object Float64Array]", Bp = "[object Int8Array]", Dp = "[object Int16Array]", jp = "[object Int32Array]", zp = "[object Uint8Array]", Hp = "[object Uint8ClampedArray]", Vp = "[object Uint16Array]", qp = "[object Uint32Array]";
function Wp(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case Lp:
      return pa(e);
    case $p:
    case Cp:
      return new r(+e);
    case Fp:
      return Sp(e, n);
    case Np:
    case Rp:
    case Bp:
    case Dp:
    case jp:
    case zp:
    case Hp:
    case Vp:
    case qp:
      return Tp(e, n);
    case xp:
      return new r();
    case Ip:
    case Pp:
      return new r(e);
    case Ap:
      return Op(e);
    case Mp:
      return new r();
    case kp:
      return _p(e);
  }
}
function Kp(e) {
  return typeof e.constructor == "function" && !sa(e) ? Jc(il(e)) : {};
}
var Up = "[object Map]";
function Gp(e) {
  return ln(e) && sr(e) == Up;
}
var wi = Ln && Ln.isMap, Yp = wi ? la(wi) : Gp;
const Zp = Yp;
var Jp = "[object Set]";
function Qp(e) {
  return ln(e) && sr(e) == Jp;
}
var Si = Ln && Ln.isSet, Xp = Si ? la(Si) : Qp;
const ev = Xp;
var tv = 1, nv = 2, rv = 4, fl = "[object Arguments]", ov = "[object Array]", av = "[object Boolean]", iv = "[object Date]", sv = "[object Error]", dl = "[object Function]", lv = "[object GeneratorFunction]", uv = "[object Map]", cv = "[object Number]", pl = "[object Object]", fv = "[object RegExp]", dv = "[object Set]", pv = "[object String]", vv = "[object Symbol]", mv = "[object WeakMap]", hv = "[object ArrayBuffer]", gv = "[object DataView]", bv = "[object Float32Array]", yv = "[object Float64Array]", wv = "[object Int8Array]", Sv = "[object Int16Array]", Ev = "[object Int32Array]", Ov = "[object Uint8Array]", _v = "[object Uint8ClampedArray]", Tv = "[object Uint16Array]", $v = "[object Uint32Array]", be = {};
be[fl] = be[ov] = be[hv] = be[gv] = be[av] = be[iv] = be[bv] = be[yv] = be[wv] = be[Sv] = be[Ev] = be[uv] = be[cv] = be[pl] = be[fv] = be[dv] = be[pv] = be[vv] = be[Ov] = be[_v] = be[Tv] = be[$v] = !0;
be[sv] = be[dl] = be[mv] = !1;
function Rr(e, t, n, r, o, a) {
  var i, s = t & tv, l = t & nv, u = t & rv;
  if (n && (i = o ? n(e, r, o, a) : n(e)), i !== void 0)
    return i;
  if (!Pt(e))
    return e;
  var f = Yt(e);
  if (f) {
    if (i = yp(e), !s)
      return Qc(e, i);
  } else {
    var d = sr(e), m = d == dl || d == lv;
    if (Kr(e))
      return Qd(e, s);
    if (d == pl || d == fl || m && !o) {
      if (i = l || m ? {} : Kp(e), !s)
        return l ? ip(e, Zd(i, e)) : rp(e, Yd(i, e));
    } else {
      if (!be[d])
        return o ? e : {};
      i = Wp(e, d, s);
    }
  }
  a || (a = new Ut());
  var b = a.get(e);
  if (b)
    return b;
  a.set(e, i), ev(e) ? e.forEach(function(h) {
    i.add(Rr(h, t, n, h, e, a));
  }) : Zp(e) && e.forEach(function(h, v) {
    i.set(v, Rr(h, t, n, v, e, a));
  });
  var g = u ? l ? sp : zo : l ? ca : ua, c = f ? void 0 : g(e);
  return ef(c || e, function(h, v) {
    c && (v = h, h = e[v]), ia(i, v, Rr(h, t, n, v, e, a));
  }), i;
}
var Cv = 4;
function Ei(e) {
  return Rr(e, Cv);
}
var xv = "__lodash_hash_undefined__";
function Iv(e) {
  return this.__data__.set(e, xv), this;
}
function Av(e) {
  return this.__data__.has(e);
}
function Gr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Qt(); ++t < n; )
    this.add(e[t]);
}
Gr.prototype.add = Gr.prototype.push = Iv;
Gr.prototype.has = Av;
function Mv(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Pv(e, t) {
  return e.has(t);
}
var kv = 1, Lv = 2;
function vl(e, t, n, r, o, a) {
  var i = n & kv, s = e.length, l = t.length;
  if (s != l && !(i && l > s))
    return !1;
  var u = a.get(e), f = a.get(t);
  if (u && f)
    return u == t && f == e;
  var d = -1, m = !0, b = n & Lv ? new Gr() : void 0;
  for (a.set(e, t), a.set(t, e); ++d < s; ) {
    var g = e[d], c = t[d];
    if (r)
      var h = i ? r(c, g, d, t, e, a) : r(g, c, d, e, t, a);
    if (h !== void 0) {
      if (h)
        continue;
      m = !1;
      break;
    }
    if (b) {
      if (!Mv(t, function(v, w) {
        if (!Pv(b, w) && (g === v || o(g, v, n, r, a)))
          return b.push(w);
      })) {
        m = !1;
        break;
      }
    } else if (!(g === c || o(g, c, n, r, a))) {
      m = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), m;
}
function Fv(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function Nv(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Rv = 1, Bv = 2, Dv = "[object Boolean]", jv = "[object Date]", zv = "[object Error]", Hv = "[object Map]", Vv = "[object Number]", qv = "[object RegExp]", Wv = "[object Set]", Kv = "[object String]", Uv = "[object Symbol]", Gv = "[object ArrayBuffer]", Yv = "[object DataView]", Oi = Mt ? Mt.prototype : void 0, wo = Oi ? Oi.valueOf : void 0;
function Zv(e, t, n, r, o, a, i) {
  switch (n) {
    case Yv:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Gv:
      return !(e.byteLength != t.byteLength || !a(new Ur(e), new Ur(t)));
    case Dv:
    case jv:
    case Vv:
      return aa(+e, +t);
    case zv:
      return e.name == t.name && e.message == t.message;
    case qv:
    case Kv:
      return e == t + "";
    case Hv:
      var s = Fv;
    case Wv:
      var l = r & Rv;
      if (s || (s = Nv), e.size != t.size && !l)
        return !1;
      var u = i.get(e);
      if (u)
        return u == t;
      r |= Bv, i.set(e, t);
      var f = vl(s(e), s(t), r, o, a, i);
      return i.delete(e), f;
    case Uv:
      if (wo)
        return wo.call(e) == wo.call(t);
  }
  return !1;
}
var Jv = 1, Qv = Object.prototype, Xv = Qv.hasOwnProperty;
function em(e, t, n, r, o, a) {
  var i = n & Jv, s = zo(e), l = s.length, u = zo(t), f = u.length;
  if (l != f && !i)
    return !1;
  for (var d = l; d--; ) {
    var m = s[d];
    if (!(i ? m in t : Xv.call(t, m)))
      return !1;
  }
  var b = a.get(e), g = a.get(t);
  if (b && g)
    return b == t && g == e;
  var c = !0;
  a.set(e, t), a.set(t, e);
  for (var h = i; ++d < l; ) {
    m = s[d];
    var v = e[m], w = t[m];
    if (r)
      var _ = i ? r(w, v, m, t, e, a) : r(v, w, m, e, t, a);
    if (!(_ === void 0 ? v === w || o(v, w, n, r, a) : _)) {
      c = !1;
      break;
    }
    h || (h = m == "constructor");
  }
  if (c && !h) {
    var T = e.constructor, I = t.constructor;
    T != I && "constructor" in e && "constructor" in t && !(typeof T == "function" && T instanceof T && typeof I == "function" && I instanceof I) && (c = !1);
  }
  return a.delete(e), a.delete(t), c;
}
var tm = 1, _i = "[object Arguments]", Ti = "[object Array]", _r = "[object Object]", nm = Object.prototype, $i = nm.hasOwnProperty;
function rm(e, t, n, r, o, a) {
  var i = Yt(e), s = Yt(t), l = i ? Ti : sr(e), u = s ? Ti : sr(t);
  l = l == _i ? _r : l, u = u == _i ? _r : u;
  var f = l == _r, d = u == _r, m = l == u;
  if (m && Kr(e)) {
    if (!Kr(t))
      return !1;
    i = !0, f = !1;
  }
  if (m && !f)
    return a || (a = new Ut()), i || el(e) ? vl(e, t, n, r, o, a) : Zv(e, t, l, n, r, o, a);
  if (!(n & tm)) {
    var b = f && $i.call(e, "__wrapped__"), g = d && $i.call(t, "__wrapped__");
    if (b || g) {
      var c = b ? e.value() : e, h = g ? t.value() : t;
      return a || (a = new Ut()), o(c, h, n, r, a);
    }
  }
  return m ? (a || (a = new Ut()), em(e, t, n, r, o, a)) : !1;
}
function ml(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !ln(e) && !ln(t) ? e !== e && t !== t : rm(e, t, n, r, ml, o);
}
var om = function() {
  return Ot.Date.now();
};
const So = om;
var am = "Expected a function", im = Math.max, sm = Math.min;
function Ci(e, t, n) {
  var r, o, a, i, s, l, u = 0, f = !1, d = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(am);
  t = ti(t) || 0, Pt(n) && (f = !!n.leading, d = "maxWait" in n, a = d ? im(ti(n.maxWait) || 0, t) : a, m = "trailing" in n ? !!n.trailing : m);
  function b(E) {
    var O = r, M = o;
    return r = o = void 0, u = E, i = e.apply(M, O), i;
  }
  function g(E) {
    return u = E, s = setTimeout(v, t), f ? b(E) : i;
  }
  function c(E) {
    var O = E - l, M = E - u, H = t - O;
    return d ? sm(H, a - M) : H;
  }
  function h(E) {
    var O = E - l, M = E - u;
    return l === void 0 || O >= t || O < 0 || d && M >= a;
  }
  function v() {
    var E = So();
    if (h(E))
      return w(E);
    s = setTimeout(v, c(E));
  }
  function w(E) {
    return s = void 0, m && r ? b(E) : (r = o = void 0, i);
  }
  function _() {
    s !== void 0 && clearTimeout(s), u = 0, r = l = o = s = void 0;
  }
  function T() {
    return s === void 0 ? i : w(So());
  }
  function I() {
    var E = So(), O = h(E);
    if (r = arguments, o = this, l = E, O) {
      if (s === void 0)
        return g(l);
      if (d)
        return clearTimeout(s), s = setTimeout(v, t), b(l);
    }
    return s === void 0 && (s = setTimeout(v, t)), i;
  }
  return I.cancel = _, I.flush = T, I;
}
function Yr(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function xi(e, t) {
  return ml(e, t);
}
function Fn(e) {
  return e == null;
}
function lm(e) {
  return e === void 0;
}
function um(e, t, n, r) {
  if (!Pt(e))
    return e;
  t = rl(t, e);
  for (var o = -1, a = t.length, i = a - 1, s = e; s != null && ++o < a; ) {
    var l = ol(t[o]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != i) {
      var f = s[l];
      u = r ? r(f, l, s) : void 0, u === void 0 && (u = Pt(f) ? f : Us(t[o + 1]) ? [] : {});
    }
    ia(s, l, u), s = s[l];
  }
  return e;
}
function cm(e, t, n) {
  return e == null ? e : um(e, t, n);
}
const fm = (e) => e === void 0, vr = (e) => typeof e == "boolean", gt = (e) => typeof e == "number", lr = (e) => typeof Element > "u" ? !1 : e instanceof Element, dm = (e) => Ae(e) ? !Number.isNaN(Number(e)) : !1, pm = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Eo = (e, t, n) => ({
  get value() {
    return Xe(e, t, n);
  },
  set value(r) {
    cm(e, t, r);
  }
});
class hl extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Nn(e, t) {
  throw new hl(`[${e}] ${t}`);
}
function Fe(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Ae(e) ? new hl(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const vm = "utils/dom/style", gl = (e = "") => e.split(" ").filter((t) => !!t.trim()), mm = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, Tr = (e, t) => {
  !e || !t.trim() || e.classList.add(...gl(t));
}, Oo = (e, t) => {
  !e || !t.trim() || e.classList.remove(...gl(t));
};
function Rn(e, t = "px") {
  if (!e)
    return "";
  if (gt(e) || dm(e))
    return `${e}${t}`;
  if (Ae(e))
    return e;
  Fe(vm, "binding value must be a string or number");
}
function hm(e, t) {
  if (!Ne)
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
var Lt = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [r, o] of t)
    n[r] = o;
  return n;
}, gm = {
  name: "ArrowDown"
}, bm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ym = /* @__PURE__ */ W(
  "path",
  {
    fill: "currentColor",
    d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
  },
  null,
  -1
  /* HOISTED */
), wm = [
  ym
];
function Sm(e, t, n, r, o, a) {
  return x(), z("svg", bm, wm);
}
var bl = /* @__PURE__ */ Lt(gm, [["render", Sm], ["__file", "arrow-down.vue"]]), Em = {
  name: "ArrowRight"
}, Om = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _m = /* @__PURE__ */ W(
  "path",
  {
    fill: "currentColor",
    d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
  },
  null,
  -1
  /* HOISTED */
), Tm = [
  _m
];
function $m(e, t, n, r, o, a) {
  return x(), z("svg", Om, Tm);
}
var Cm = /* @__PURE__ */ Lt(Em, [["render", $m], ["__file", "arrow-right.vue"]]), xm = {
  name: "CircleCheck"
}, Im = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Am = /* @__PURE__ */ W(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), Mm = /* @__PURE__ */ W(
  "path",
  {
    fill: "currentColor",
    d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
  },
  null,
  -1
  /* HOISTED */
), Pm = [
  Am,
  Mm
];
function km(e, t, n, r, o, a) {
  return x(), z("svg", Im, Pm);
}
var Lm = /* @__PURE__ */ Lt(xm, [["render", km], ["__file", "circle-check.vue"]]), Fm = {
  name: "CircleClose"
}, Nm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Rm = /* @__PURE__ */ W(
  "path",
  {
    fill: "currentColor",
    d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
  },
  null,
  -1
  /* HOISTED */
), Bm = /* @__PURE__ */ W(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), Dm = [
  Rm,
  Bm
];
function jm(e, t, n, r, o, a) {
  return x(), z("svg", Nm, Dm);
}
var va = /* @__PURE__ */ Lt(Fm, [["render", jm], ["__file", "circle-close.vue"]]), zm = {
  name: "Close"
}, Hm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Vm = /* @__PURE__ */ W(
  "path",
  {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  },
  null,
  -1
  /* HOISTED */
), qm = [
  Vm
];
function Wm(e, t, n, r, o, a) {
  return x(), z("svg", Hm, qm);
}
var Ii = /* @__PURE__ */ Lt(zm, [["render", Wm], ["__file", "close.vue"]]), Km = {
  name: "Hide"
}, Um = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Gm = /* @__PURE__ */ W(
  "path",
  {
    fill: "currentColor",
    d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
  },
  null,
  -1
  /* HOISTED */
), Ym = /* @__PURE__ */ W(
  "path",
  {
    fill: "currentColor",
    d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
  },
  null,
  -1
  /* HOISTED */
), Zm = [
  Gm,
  Ym
];
function Jm(e, t, n, r, o, a) {
  return x(), z("svg", Um, Zm);
}
var Qm = /* @__PURE__ */ Lt(Km, [["render", Jm], ["__file", "hide.vue"]]), Xm = {
  name: "Loading"
}, eh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, th = /* @__PURE__ */ W(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
  },
  null,
  -1
  /* HOISTED */
), nh = [
  th
];
function rh(e, t, n, r, o, a) {
  return x(), z("svg", eh, nh);
}
var yl = /* @__PURE__ */ Lt(Xm, [["render", rh], ["__file", "loading.vue"]]), oh = {
  name: "More"
}, ah = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ih = /* @__PURE__ */ W(
  "path",
  {
    fill: "currentColor",
    d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"
  },
  null,
  -1
  /* HOISTED */
), sh = [
  ih
];
function lh(e, t, n, r, o, a) {
  return x(), z("svg", ah, sh);
}
var uh = /* @__PURE__ */ Lt(oh, [["render", lh], ["__file", "more.vue"]]), ch = {
  name: "Promotion"
}, fh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, dh = /* @__PURE__ */ W(
  "path",
  {
    fill: "currentColor",
    d: "m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z"
  },
  null,
  -1
  /* HOISTED */
), ph = [
  dh
];
function vh(e, t, n, r, o, a) {
  return x(), z("svg", fh, ph);
}
var mh = /* @__PURE__ */ Lt(ch, [["render", vh], ["__file", "promotion.vue"]]), hh = {
  name: "View"
}, gh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, bh = /* @__PURE__ */ W(
  "path",
  {
    fill: "currentColor",
    d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
  },
  null,
  -1
  /* HOISTED */
), yh = [
  bh
];
function wh(e, t, n, r, o, a) {
  return x(), z("svg", gh, yh);
}
var Sh = /* @__PURE__ */ Lt(hh, [["render", wh], ["__file", "view.vue"]]);
const wl = "__epPropKey", re = (e) => e, Eh = (e) => Gt(e) && !!e[wl], oo = (e, t) => {
  if (!Gt(e) || Eh(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: i } = e, l = {
    type: a,
    required: !!r,
    validator: n || i ? (u) => {
      let f = !1, d = [];
      if (n && (d = Array.from(n), Za(e, "default") && d.push(o), f || (f = d.includes(u))), i && (f || (f = i(u))), !f && d.length > 0) {
        const m = [...new Set(d)].map((b) => JSON.stringify(b)).join(", ");
        bu(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [wl]: !0
  };
  return Za(e, "default") && (l.default = o), l;
}, we = (e) => Yr(Object.entries(e).map(([t, n]) => [
  t,
  oo(n, t)
])), bt = re([
  String,
  Object,
  Function
]), Sl = {
  validating: yl,
  success: Lm,
  error: va
}, _t = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, Oh = (e, t) => (e.install = (n) => {
  n.directive(t, e);
}, e), Tn = (e) => (e.install = or, e), ze = {
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
}, mt = "update:modelValue", El = "change", mr = ["", "default", "small", "large"], _h = {
  large: 40,
  default: 32,
  small: 24
}, Th = (e) => _h[e || "default"], $h = (e) => ["", ...mr].includes(e), Br = (e) => {
  const t = Qn(e) ? e : [e], n = [];
  return t.forEach((r) => {
    var o;
    Qn(r) ? n.push(...Br(r)) : ja(r) && Qn(r.children) ? n.push(...Br(r.children)) : (n.push(r), ja(r) && ((o = r.component) != null && o.subTree) && n.push(...Br(r.component.subTree)));
  }), n;
}, Ol = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e), _l = (e) => e, Ch = ["class", "style"], xh = /^on[A-Z]/, Ih = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = y(() => ((n == null ? void 0 : n.value) || []).concat(Ch)), o = Ve();
  return o ? y(() => {
    var a;
    return Yr(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([i]) => !r.value.includes(i) && !(t && xh.test(i))));
  }) : (Fe("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), y(() => ({})));
}, ma = ({ from: e, replacement: t, scope: n, version: r, ref: o, type: a = "API" }, i) => {
  U(() => p(i), (s) => {
    s && Fe(n, `[${a}] ${e} is about to be deprecated in version ${r}, please use ${t} instead.
For more detail, please visit: ${o}
`);
  }, {
    immediate: !0
  });
};
var Ah = {
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
const Mh = (e) => (t, n) => Ph(t, n, p(e)), Ph = (e, t, n) => Xe(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t == null ? void 0 : t[o]) != null ? a : `{${o}}`}`;
}), kh = (e) => {
  const t = y(() => p(e).name), n = yu(e) ? e : $(e);
  return {
    lang: t,
    locale: n,
    t: Mh(e)
  };
}, Lh = Symbol("localeContextKey"), ha = (e) => {
  const t = e || ae(Lh, $());
  return kh(y(() => t.value || Ah));
}, _o = "el", Fh = "is-", dn = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, Nh = Symbol("namespaceContextKey"), ga = (e) => {
  const t = e || (Ve() ? ae(Nh, $(_o)) : $(_o));
  return y(() => p(t) || _o);
}, fe = (e, t) => {
  const n = ga(t);
  return {
    namespace: n,
    b: (c = "") => dn(n.value, e, c, "", ""),
    e: (c) => c ? dn(n.value, e, "", c, "") : "",
    m: (c) => c ? dn(n.value, e, "", "", c) : "",
    be: (c, h) => c && h ? dn(n.value, e, c, h, "") : "",
    em: (c, h) => c && h ? dn(n.value, e, "", c, h) : "",
    bm: (c, h) => c && h ? dn(n.value, e, c, "", h) : "",
    bem: (c, h, v) => c && h && v ? dn(n.value, e, c, h, v) : "",
    is: (c, ...h) => {
      const v = h.length >= 1 ? h[0] : !0;
      return c && v ? `${Fh}${c}` : "";
    },
    cssVar: (c) => {
      const h = {};
      for (const v in c)
        c[v] && (h[`--${n.value}-${v}`] = c[v]);
      return h;
    },
    cssVarName: (c) => `--${n.value}-${c}`,
    cssVarBlock: (c) => {
      const h = {};
      for (const v in c)
        c[v] && (h[`--${n.value}-${e}-${v}`] = c[v]);
      return h;
    },
    cssVarBlockName: (c) => `--${n.value}-${e}-${c}`
  };
}, Rh = oo({
  type: re(Boolean),
  default: null
}), Bh = oo({
  type: re(Function)
}), Tl = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: Rh,
    [n]: Bh
  };
  return {
    useModelToggle: ({
      indicator: i,
      toggleReason: s,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: f,
      onHide: d
    }) => {
      const m = Ve(), { emit: b } = m, g = m.props, c = y(() => et(g[n])), h = y(() => g[e] === null), v = (O) => {
        i.value !== !0 && (i.value = !0, s && (s.value = O), et(f) && f(O));
      }, w = (O) => {
        i.value !== !1 && (i.value = !1, s && (s.value = O), et(d) && d(O));
      }, _ = (O) => {
        if (g.disabled === !0 || et(u) && !u())
          return;
        const M = c.value && Ne;
        M && b(t, !0), (h.value || !M) && v(O);
      }, T = (O) => {
        if (g.disabled === !0 || !Ne)
          return;
        const M = c.value && Ne;
        M && b(t, !1), (h.value || !M) && w(O);
      }, I = (O) => {
        vr(O) && (g.disabled && O ? c.value && b(t, !1) : i.value !== O && (O ? v() : w()));
      }, E = () => {
        i.value ? T() : _();
      };
      return U(() => g[e], I), l && m.appContext.config.globalProperties.$route !== void 0 && U(() => ({
        ...m.proxy.$route
      }), () => {
        l.value && i.value && T();
      }), Ce(() => {
        I(g[e]);
      }), {
        hide: T,
        show: _,
        toggle: E,
        hasUpdateHandler: c
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
};
Tl("modelValue");
const $l = (e) => {
  const t = Ve();
  return y(() => {
    var n, r;
    return (r = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
};
var Ke = "top", ct = "bottom", ft = "right", Ue = "left", ba = "auto", hr = [Ke, ct, ft, Ue], Bn = "start", ur = "end", Dh = "clippingParents", Cl = "viewport", Zn = "popper", jh = "reference", Ai = hr.reduce(function(e, t) {
  return e.concat([t + "-" + Bn, t + "-" + ur]);
}, []), ao = [].concat(hr, [ba]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Bn, t + "-" + ur]);
}, []), zh = "beforeRead", Hh = "read", Vh = "afterRead", qh = "beforeMain", Wh = "main", Kh = "afterMain", Uh = "beforeWrite", Gh = "write", Yh = "afterWrite", Zh = [zh, Hh, Vh, qh, Wh, Kh, Uh, Gh, Yh];
function kt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Tt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Dn(e) {
  var t = Tt(e).Element;
  return e instanceof t || e instanceof Element;
}
function ut(e) {
  var t = Tt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ya(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Tt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Jh(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !ut(a) || !kt(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(i) {
      var s = o[i];
      s === !1 ? a.removeAttribute(i) : a.setAttribute(i, s === !0 ? "" : s);
    }));
  });
}
function Qh(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, i = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), s = i.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !ut(o) || !kt(o) || (Object.assign(o.style, s), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var xl = { name: "applyStyles", enabled: !0, phase: "write", fn: Jh, effect: Qh, requires: ["computeStyles"] };
function At(e) {
  return e.split("-")[0];
}
var bn = Math.max, Zr = Math.min, jn = Math.round;
function zn(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, o = 1;
  if (ut(e) && t) {
    var a = e.offsetHeight, i = e.offsetWidth;
    i > 0 && (r = jn(n.width) / i || 1), a > 0 && (o = jn(n.height) / a || 1);
  }
  return { width: n.width / r, height: n.height / o, top: n.top / o, right: n.right / r, bottom: n.bottom / o, left: n.left / r, x: n.left / r, y: n.top / o };
}
function wa(e) {
  var t = zn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function Il(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && ya(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Zt(e) {
  return Tt(e).getComputedStyle(e);
}
function Xh(e) {
  return ["table", "td", "th"].indexOf(kt(e)) >= 0;
}
function un(e) {
  return ((Dn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function io(e) {
  return kt(e) === "html" ? e : e.assignedSlot || e.parentNode || (ya(e) ? e.host : null) || un(e);
}
function Mi(e) {
  return !ut(e) || Zt(e).position === "fixed" ? null : e.offsetParent;
}
function eg(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && ut(e)) {
    var r = Zt(e);
    if (r.position === "fixed")
      return null;
  }
  var o = io(e);
  for (ya(o) && (o = o.host); ut(o) && ["html", "body"].indexOf(kt(o)) < 0; ) {
    var a = Zt(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function gr(e) {
  for (var t = Tt(e), n = Mi(e); n && Xh(n) && Zt(n).position === "static"; )
    n = Mi(n);
  return n && (kt(n) === "html" || kt(n) === "body" && Zt(n).position === "static") ? t : n || eg(e) || t;
}
function Sa(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function er(e, t, n) {
  return bn(e, Zr(t, n));
}
function tg(e, t, n) {
  var r = er(e, t, n);
  return r > n ? n : r;
}
function Al() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Ml(e) {
  return Object.assign({}, Al(), e);
}
function Pl(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var ng = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Ml(typeof e != "number" ? e : Pl(e, hr));
};
function rg(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, i = n.modifiersData.popperOffsets, s = At(n.placement), l = Sa(s), u = [Ue, ft].indexOf(s) >= 0, f = u ? "height" : "width";
  if (!(!a || !i)) {
    var d = ng(o.padding, n), m = wa(a), b = l === "y" ? Ke : Ue, g = l === "y" ? ct : ft, c = n.rects.reference[f] + n.rects.reference[l] - i[l] - n.rects.popper[f], h = i[l] - n.rects.reference[l], v = gr(a), w = v ? l === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, _ = c / 2 - h / 2, T = d[b], I = w - m[f] - d[g], E = w / 2 - m[f] / 2 + _, O = er(T, E, I), M = l;
    n.modifiersData[r] = (t = {}, t[M] = O, t.centerOffset = O - E, t);
  }
}
function og(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || !Il(t.elements.popper, o) || (t.elements.arrow = o));
}
var ag = { name: "arrow", enabled: !0, phase: "main", fn: rg, effect: og, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Hn(e) {
  return e.split("-")[1];
}
var ig = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function sg(e) {
  var t = e.x, n = e.y, r = window, o = r.devicePixelRatio || 1;
  return { x: jn(t * o) / o || 0, y: jn(n * o) / o || 0 };
}
function Pi(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, i = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, d = e.isFixed, m = i.x, b = m === void 0 ? 0 : m, g = i.y, c = g === void 0 ? 0 : g, h = typeof f == "function" ? f({ x: b, y: c }) : { x: b, y: c };
  b = h.x, c = h.y;
  var v = i.hasOwnProperty("x"), w = i.hasOwnProperty("y"), _ = Ue, T = Ke, I = window;
  if (u) {
    var E = gr(n), O = "clientHeight", M = "clientWidth";
    if (E === Tt(n) && (E = un(n), Zt(E).position !== "static" && s === "absolute" && (O = "scrollHeight", M = "scrollWidth")), E = E, o === Ke || (o === Ue || o === ft) && a === ur) {
      T = ct;
      var H = d && E === I && I.visualViewport ? I.visualViewport.height : E[O];
      c -= H - r.height, c *= l ? 1 : -1;
    }
    if (o === Ue || (o === Ke || o === ct) && a === ur) {
      _ = ft;
      var V = d && E === I && I.visualViewport ? I.visualViewport.width : E[M];
      b -= V - r.width, b *= l ? 1 : -1;
    }
  }
  var P = Object.assign({ position: s }, u && ig), C = f === !0 ? sg({ x: b, y: c }) : { x: b, y: c };
  if (b = C.x, c = C.y, l) {
    var L;
    return Object.assign({}, P, (L = {}, L[T] = w ? "0" : "", L[_] = v ? "0" : "", L.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + b + "px, " + c + "px)" : "translate3d(" + b + "px, " + c + "px, 0)", L));
  }
  return Object.assign({}, P, (t = {}, t[T] = w ? c + "px" : "", t[_] = v ? b + "px" : "", t.transform = "", t));
}
function lg(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, i = a === void 0 ? !0 : a, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = { placement: At(t.placement), variation: Hn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Pi(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: i, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Pi(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var kl = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: lg, data: {} }, $r = { passive: !0 };
function ug(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, i = r.resize, s = i === void 0 ? !0 : i, l = Tt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, $r);
  }), s && l.addEventListener("resize", n.update, $r), function() {
    a && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, $r);
    }), s && l.removeEventListener("resize", n.update, $r);
  };
}
var Ll = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: ug, data: {} }, cg = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Dr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return cg[t];
  });
}
var fg = { start: "end", end: "start" };
function ki(e) {
  return e.replace(/start|end/g, function(t) {
    return fg[t];
  });
}
function Ea(e) {
  var t = Tt(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Oa(e) {
  return zn(un(e)).left + Ea(e).scrollLeft;
}
function dg(e) {
  var t = Tt(e), n = un(e), r = t.visualViewport, o = n.clientWidth, a = n.clientHeight, i = 0, s = 0;
  return r && (o = r.width, a = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = r.offsetLeft, s = r.offsetTop)), { width: o, height: a, x: i + Oa(e), y: s };
}
function pg(e) {
  var t, n = un(e), r = Ea(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = bn(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = bn(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + Oa(e), l = -r.scrollTop;
  return Zt(o || n).direction === "rtl" && (s += bn(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: i, x: s, y: l };
}
function _a(e) {
  var t = Zt(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Fl(e) {
  return ["html", "body", "#document"].indexOf(kt(e)) >= 0 ? e.ownerDocument.body : ut(e) && _a(e) ? e : Fl(io(e));
}
function tr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Fl(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Tt(r), i = o ? [a].concat(a.visualViewport || [], _a(r) ? r : []) : r, s = t.concat(i);
  return o ? s : s.concat(tr(io(i)));
}
function Wo(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function vg(e) {
  var t = zn(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Li(e, t) {
  return t === Cl ? Wo(dg(e)) : Dn(t) ? vg(t) : Wo(pg(un(e)));
}
function mg(e) {
  var t = tr(io(e)), n = ["absolute", "fixed"].indexOf(Zt(e).position) >= 0, r = n && ut(e) ? gr(e) : e;
  return Dn(r) ? t.filter(function(o) {
    return Dn(o) && Il(o, r) && kt(o) !== "body";
  }) : [];
}
function hg(e, t, n) {
  var r = t === "clippingParents" ? mg(e) : [].concat(t), o = [].concat(r, [n]), a = o[0], i = o.reduce(function(s, l) {
    var u = Li(e, l);
    return s.top = bn(u.top, s.top), s.right = Zr(u.right, s.right), s.bottom = Zr(u.bottom, s.bottom), s.left = bn(u.left, s.left), s;
  }, Li(e, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Nl(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? At(r) : null, a = r ? Hn(r) : null, i = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case Ke:
      l = { x: i, y: t.y - n.height };
      break;
    case ct:
      l = { x: i, y: t.y + t.height };
      break;
    case ft:
      l = { x: t.x + t.width, y: s };
      break;
    case Ue:
      l = { x: t.x - n.width, y: s };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? Sa(o) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (a) {
      case Bn:
        l[u] = l[u] - (t[f] / 2 - n[f] / 2);
        break;
      case ur:
        l[u] = l[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return l;
}
function cr(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.boundary, i = a === void 0 ? Dh : a, s = n.rootBoundary, l = s === void 0 ? Cl : s, u = n.elementContext, f = u === void 0 ? Zn : u, d = n.altBoundary, m = d === void 0 ? !1 : d, b = n.padding, g = b === void 0 ? 0 : b, c = Ml(typeof g != "number" ? g : Pl(g, hr)), h = f === Zn ? jh : Zn, v = e.rects.popper, w = e.elements[m ? h : f], _ = hg(Dn(w) ? w : w.contextElement || un(e.elements.popper), i, l), T = zn(e.elements.reference), I = Nl({ reference: T, element: v, strategy: "absolute", placement: o }), E = Wo(Object.assign({}, v, I)), O = f === Zn ? E : T, M = { top: _.top - O.top + c.top, bottom: O.bottom - _.bottom + c.bottom, left: _.left - O.left + c.left, right: O.right - _.right + c.right }, H = e.modifiersData.offset;
  if (f === Zn && H) {
    var V = H[o];
    Object.keys(M).forEach(function(P) {
      var C = [ft, ct].indexOf(P) >= 0 ? 1 : -1, L = [Ke, ct].indexOf(P) >= 0 ? "y" : "x";
      M[P] += V[L] * C;
    });
  }
  return M;
}
function gg(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, i = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? ao : l, f = Hn(r), d = f ? s ? Ai : Ai.filter(function(g) {
    return Hn(g) === f;
  }) : hr, m = d.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  m.length === 0 && (m = d);
  var b = m.reduce(function(g, c) {
    return g[c] = cr(e, { placement: c, boundary: o, rootBoundary: a, padding: i })[At(c)], g;
  }, {});
  return Object.keys(b).sort(function(g, c) {
    return b[g] - b[c];
  });
}
function bg(e) {
  if (At(e) === ba)
    return [];
  var t = Dr(e);
  return [ki(e), t, ki(t)];
}
function yg(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, i = n.altAxis, s = i === void 0 ? !0 : i, l = n.fallbackPlacements, u = n.padding, f = n.boundary, d = n.rootBoundary, m = n.altBoundary, b = n.flipVariations, g = b === void 0 ? !0 : b, c = n.allowedAutoPlacements, h = t.options.placement, v = At(h), w = v === h, _ = l || (w || !g ? [Dr(h)] : bg(h)), T = [h].concat(_).reduce(function(xe, Me) {
      return xe.concat(At(Me) === ba ? gg(t, { placement: Me, boundary: f, rootBoundary: d, padding: u, flipVariations: g, allowedAutoPlacements: c }) : Me);
    }, []), I = t.rects.reference, E = t.rects.popper, O = /* @__PURE__ */ new Map(), M = !0, H = T[0], V = 0; V < T.length; V++) {
      var P = T[V], C = At(P), L = Hn(P) === Bn, Y = [Ke, ct].indexOf(C) >= 0, G = Y ? "width" : "height", ie = cr(t, { placement: P, boundary: f, rootBoundary: d, altBoundary: m, padding: u }), F = Y ? L ? ft : Ue : L ? ct : Ke;
      I[G] > E[G] && (F = Dr(F));
      var se = Dr(F), te = [];
      if (a && te.push(ie[C] <= 0), s && te.push(ie[F] <= 0, ie[se] <= 0), te.every(function(xe) {
        return xe;
      })) {
        H = P, M = !1;
        break;
      }
      O.set(P, te);
    }
    if (M)
      for (var Z = g ? 3 : 1, ue = function(xe) {
        var Me = T.find(function(We) {
          var j = O.get(We);
          if (j)
            return j.slice(0, xe).every(function(J) {
              return J;
            });
        });
        if (Me)
          return H = Me, "break";
      }, le = Z; le > 0; le--) {
        var _e = ue(le);
        if (_e === "break")
          break;
      }
    t.placement !== H && (t.modifiersData[r]._skip = !0, t.placement = H, t.reset = !0);
  }
}
var wg = { name: "flip", enabled: !0, phase: "main", fn: yg, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Fi(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Ni(e) {
  return [Ke, ft, ct, Ue].some(function(t) {
    return e[t] >= 0;
  });
}
function Sg(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, i = cr(t, { elementContext: "reference" }), s = cr(t, { altBoundary: !0 }), l = Fi(i, r), u = Fi(s, o, a), f = Ni(l), d = Ni(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: d }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": d });
}
var Eg = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Sg };
function Og(e, t, n) {
  var r = At(e), o = [Ue, Ke].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, i = a[0], s = a[1];
  return i = i || 0, s = (s || 0) * o, [Ue, ft].indexOf(r) >= 0 ? { x: s, y: i } : { x: i, y: s };
}
function _g(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, i = ao.reduce(function(f, d) {
    return f[d] = Og(d, t.rects, a), f;
  }, {}), s = i[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = i;
}
var Tg = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: _g };
function $g(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Nl({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var Rl = { name: "popperOffsets", enabled: !0, phase: "read", fn: $g, data: {} };
function Cg(e) {
  return e === "x" ? "y" : "x";
}
function xg(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, i = n.altAxis, s = i === void 0 ? !1 : i, l = n.boundary, u = n.rootBoundary, f = n.altBoundary, d = n.padding, m = n.tether, b = m === void 0 ? !0 : m, g = n.tetherOffset, c = g === void 0 ? 0 : g, h = cr(t, { boundary: l, rootBoundary: u, padding: d, altBoundary: f }), v = At(t.placement), w = Hn(t.placement), _ = !w, T = Sa(v), I = Cg(T), E = t.modifiersData.popperOffsets, O = t.rects.reference, M = t.rects.popper, H = typeof c == "function" ? c(Object.assign({}, t.rects, { placement: t.placement })) : c, V = typeof H == "number" ? { mainAxis: H, altAxis: H } : Object.assign({ mainAxis: 0, altAxis: 0 }, H), P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, C = { x: 0, y: 0 };
  if (E) {
    if (a) {
      var L, Y = T === "y" ? Ke : Ue, G = T === "y" ? ct : ft, ie = T === "y" ? "height" : "width", F = E[T], se = F + h[Y], te = F - h[G], Z = b ? -M[ie] / 2 : 0, ue = w === Bn ? O[ie] : M[ie], le = w === Bn ? -M[ie] : -O[ie], _e = t.elements.arrow, xe = b && _e ? wa(_e) : { width: 0, height: 0 }, Me = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Al(), We = Me[Y], j = Me[G], J = er(0, O[ie], xe[ie]), Ee = _ ? O[ie] / 2 - Z - J - We - V.mainAxis : ue - J - We - V.mainAxis, de = _ ? -O[ie] / 2 + Z + J + j + V.mainAxis : le + J + j + V.mainAxis, he = t.elements.arrow && gr(t.elements.arrow), Pe = he ? T === "y" ? he.clientTop || 0 : he.clientLeft || 0 : 0, $t = (L = P == null ? void 0 : P[T]) != null ? L : 0, Ct = F + Ee - $t - Pe, Rt = F + de - $t, Bt = er(b ? Zr(se, Ct) : se, F, b ? bn(te, Rt) : te);
      E[T] = Bt, C[T] = Bt - F;
    }
    if (s) {
      var Ge, en = T === "x" ? Ke : Ue, cn = T === "x" ? ct : ft, Ye = E[I], rt = I === "y" ? "height" : "width", Dt = Ye + h[en], tn = Ye - h[cn], xt = [Ke, Ue].indexOf(v) !== -1, k = (Ge = P == null ? void 0 : P[I]) != null ? Ge : 0, K = xt ? Dt : Ye - O[rt] - M[rt] - k + V.altAxis, ge = xt ? Ye + O[rt] + M[rt] - k - V.altAxis : tn, ot = b && xt ? tg(K, Ye, ge) : er(b ? K : Dt, Ye, b ? ge : tn);
      E[I] = ot, C[I] = ot - Ye;
    }
    t.modifiersData[r] = C;
  }
}
var Ig = { name: "preventOverflow", enabled: !0, phase: "main", fn: xg, requiresIfExists: ["offset"] };
function Ag(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Mg(e) {
  return e === Tt(e) || !ut(e) ? Ea(e) : Ag(e);
}
function Pg(e) {
  var t = e.getBoundingClientRect(), n = jn(t.width) / e.offsetWidth || 1, r = jn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function kg(e, t, n) {
  n === void 0 && (n = !1);
  var r = ut(t), o = ut(t) && Pg(t), a = un(t), i = zn(e, o), s = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((kt(t) !== "body" || _a(a)) && (s = Mg(t)), ut(t) ? (l = zn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Oa(a))), { x: i.left + s.scrollLeft - l.x, y: i.top + s.scrollTop - l.y, width: i.width, height: i.height };
}
function Lg(e) {
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
function Fg(e) {
  var t = Lg(e);
  return Zh.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function Ng(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Rg(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Ri = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Bi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Ta(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? Ri : o;
  return function(i, s, l) {
    l === void 0 && (l = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ri, a), modifiersData: {}, elements: { reference: i, popper: s }, attributes: {}, styles: {} }, f = [], d = !1, m = { state: u, setOptions: function(c) {
      var h = typeof c == "function" ? c(u.options) : c;
      g(), u.options = Object.assign({}, a, u.options, h), u.scrollParents = { reference: Dn(i) ? tr(i) : i.contextElement ? tr(i.contextElement) : [], popper: tr(s) };
      var v = Fg(Rg([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = v.filter(function(w) {
        return w.enabled;
      }), b(), m.update();
    }, forceUpdate: function() {
      if (!d) {
        var c = u.elements, h = c.reference, v = c.popper;
        if (Bi(h, v)) {
          u.rects = { reference: kg(h, gr(v), u.options.strategy === "fixed"), popper: wa(v) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(M) {
            return u.modifiersData[M.name] = Object.assign({}, M.data);
          });
          for (var w = 0; w < u.orderedModifiers.length; w++) {
            if (u.reset === !0) {
              u.reset = !1, w = -1;
              continue;
            }
            var _ = u.orderedModifiers[w], T = _.fn, I = _.options, E = I === void 0 ? {} : I, O = _.name;
            typeof T == "function" && (u = T({ state: u, options: E, name: O, instance: m }) || u);
          }
        }
      }
    }, update: Ng(function() {
      return new Promise(function(c) {
        m.forceUpdate(), c(u);
      });
    }), destroy: function() {
      g(), d = !0;
    } };
    if (!Bi(i, s))
      return m;
    m.setOptions(l).then(function(c) {
      !d && l.onFirstUpdate && l.onFirstUpdate(c);
    });
    function b() {
      u.orderedModifiers.forEach(function(c) {
        var h = c.name, v = c.options, w = v === void 0 ? {} : v, _ = c.effect;
        if (typeof _ == "function") {
          var T = _({ state: u, name: h, instance: m, options: w }), I = function() {
          };
          f.push(T || I);
        }
      });
    }
    function g() {
      f.forEach(function(c) {
        return c();
      }), f = [];
    }
    return m;
  };
}
Ta();
var Bg = [Ll, Rl, kl, xl];
Ta({ defaultModifiers: Bg });
var Dg = [Ll, Rl, kl, xl, Tg, wg, Ig, ag, Eg], jg = Ta({ defaultModifiers: Dg });
const zg = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = Hg(l);
      Object.assign(i.value, u);
    },
    requires: ["computeStyles"]
  }, o = y(() => {
    const { onFirstUpdate: l, placement: u, strategy: f, modifiers: d } = p(n);
    return {
      onFirstUpdate: l,
      placement: u || "bottom",
      strategy: f || "absolute",
      modifiers: [
        ...d || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = Kt(), i = $({
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
    s(), !(!l || !u) && (a.value = jg(l, u, p(o)));
  }), qe(() => {
    s();
  }), {
    state: y(() => {
      var l;
      return { ...((l = p(a)) == null ? void 0 : l.state) || {} };
    }),
    styles: y(() => p(i).styles),
    attributes: y(() => p(i).attributes),
    update: () => {
      var l;
      return (l = p(a)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = p(a)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: y(() => p(a))
  };
};
function Hg(e) {
  const t = Object.keys(e.elements), n = Yr(t.map((o) => [o, e.styles[o] || {}])), r = Yr(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
function Di() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return Xr(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const Ko = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Vg = Symbol("elIdInjection"), Bl = () => Ve() ? ae(Vg, Ko) : Ko, $a = (e) => {
  const t = Bl();
  !Ne && t === Ko && Fe("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = ga();
  return y(() => p(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let An = [];
const ji = (e) => {
  const t = e;
  t.key === ze.esc && An.forEach((n) => n(t));
}, qg = (e) => {
  Ce(() => {
    An.length === 0 && document.addEventListener("keydown", ji), Ne && An.push(e);
  }), qe(() => {
    An = An.filter((t) => t !== e), An.length === 0 && Ne && document.removeEventListener("keydown", ji);
  });
};
let zi;
const Dl = () => {
  const e = ga(), t = Bl(), n = y(() => `${e.value}-popper-container-${t.prefix}`), r = y(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, Wg = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Kg = () => {
  const { id: e, selector: t } = Dl();
  return wu(() => {
    Ne && (process.env.NODE_ENV === "test" || !zi && !document.body.querySelector(t.value)) && (zi = Wg(e.value));
  }), {
    id: e,
    selector: t
  };
}, Ug = we({
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
}), Gg = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = Di(), {
    registerTimeout: i,
    cancelTimeout: s
  } = Di();
  return {
    onOpen: (f) => {
      a(() => {
        r(f);
        const d = p(n);
        gt(d) && d > 0 && i(() => {
          o(f);
        }, d);
      }, p(e));
    },
    onClose: (f) => {
      s(), a(() => {
        o(f);
      }, p(t));
    }
  };
}, jl = Symbol("elForwardRef"), Yg = (e) => {
  Be(jl, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Zg = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Hi = $(0), Jg = 2e3, Qg = Symbol("zIndexContextKey"), Xg = (e) => {
  const t = e || (Ve() ? ae(Qg, void 0) : void 0), n = y(() => {
    const a = p(t);
    return gt(a) ? a : Jg;
  }), r = y(() => n.value + Hi.value);
  return {
    initialZIndex: n,
    currentZIndex: r,
    nextZIndex: () => (Hi.value++, r.value)
  };
};
function e0(e) {
  const t = $();
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
      const u = a[s - 1], f = o.indexOf(u, s - 1);
      f !== -1 && (l = f + 1);
    }
    e.value.setSelectionRange(l, l);
  }
  return [n, r];
}
const zl = oo({
  type: String,
  values: mr,
  required: !1
}), t0 = Symbol("size"), n0 = () => {
  const e = ae(t0, {});
  return y(() => p(e.size) || "");
};
function r0(e, { afterFocus: t, afterBlur: n } = {}) {
  const r = Ve(), { emit: o } = r, a = Kt(), i = $(!1), s = (f) => {
    i.value || (i.value = !0, o("focus", f), t == null || t());
  }, l = (f) => {
    var d;
    f.relatedTarget && ((d = a.value) != null && d.contains(f.relatedTarget)) || (i.value = !1, o("blur", f), n == null || n());
  }, u = () => {
    var f;
    (f = e.value) == null || f.focus();
  };
  return U(a, (f) => {
    f && f.setAttribute("tabindex", "-1");
  }), gn(a, "click", u), {
    wrapperRef: a,
    isFocused: i,
    handleFocus: s,
    handleBlur: l
  };
}
const o0 = Symbol(), Vi = $();
function a0(e, t = void 0) {
  const n = Ve() ? ae(o0, Vi) : Vi;
  return e ? y(() => {
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
const i0 = we({
  size: {
    type: re([Number, String])
  },
  color: {
    type: String
  }
}), s0 = B({
  name: "ElIcon",
  inheritAttrs: !1
}), l0 = /* @__PURE__ */ B({
  ...s0,
  props: i0,
  setup(e) {
    const t = e, n = fe("icon"), r = y(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: fm(o) ? void 0 : Rn(o),
        "--color": a
      };
    });
    return (o, a) => (x(), z("i", yt({
      class: p(n).b(),
      style: p(r)
    }, o.$attrs), [
      oe(o.$slots, "default")
    ], 16));
  }
});
var u0 = /* @__PURE__ */ ve(l0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const st = _t(u0), Wn = Symbol("formContextKey"), Sn = Symbol("formItemContextKey"), Kn = (e, t = {}) => {
  const n = $(void 0), r = t.prop ? n : $l("size"), o = t.global ? n : n0(), a = t.form ? { size: void 0 } : ae(Wn, void 0), i = t.formItem ? { size: void 0 } : ae(Sn, void 0);
  return y(() => r.value || p(e) || (i == null ? void 0 : i.size) || (a == null ? void 0 : a.size) || o.value || "");
}, Ca = (e) => {
  const t = $l("disabled"), n = ae(Wn, void 0);
  return y(() => t.value || p(e) || (n == null ? void 0 : n.disabled) || !1);
}, xa = () => {
  const e = ae(Wn, void 0), t = ae(Sn, void 0);
  return {
    form: e,
    formItem: t
  };
}, c0 = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = $(!1)), r || (r = $(!1));
  const o = $();
  let a;
  const i = y(() => {
    var s;
    return !!(!e.label && t && t.inputIds && ((s = t.inputIds) == null ? void 0 : s.length) <= 1);
  });
  return Ce(() => {
    a = U([lt(e, "id"), n], ([s, l]) => {
      const u = s ?? (l ? void 0 : $a().value);
      u !== o.value && (t != null && t.removeInputId && (o.value && t.removeInputId(o.value), !(r != null && r.value) && !l && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), Su(() => {
    a && a(), t != null && t.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: i,
    inputId: o
  };
}, f0 = we({
  size: {
    type: String,
    values: mr
  },
  disabled: Boolean
}), d0 = we({
  ...f0,
  model: Object,
  rules: {
    type: re(Object)
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
}), p0 = {
  validate: (e, t, n) => (Qn(e) || Ae(e)) && vr(t) && Ae(n)
}, v0 = "ElForm";
function m0() {
  const e = $([]), t = y(() => {
    if (!e.value.length)
      return "0";
    const a = Math.max(...e.value);
    return a ? `${a}px` : "";
  });
  function n(a) {
    const i = e.value.indexOf(a);
    return i === -1 && t.value === "0" && Fe(v0, `unexpected width ${a}`), i;
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
const Cr = (e, t) => {
  const n = jo(t);
  return n.length > 0 ? e.filter((r) => r.prop && n.includes(r.prop)) : e;
}, jr = "ElForm", h0 = B({
  name: jr
}), g0 = /* @__PURE__ */ B({
  ...h0,
  props: d0,
  emits: p0,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = [], a = Kn(), i = fe("form"), s = y(() => {
      const { labelPosition: w, inline: _ } = r;
      return [
        i.b(),
        i.m(a.value || "default"),
        {
          [i.m(`label-${w}`)]: w,
          [i.m("inline")]: _
        }
      ];
    }), l = (w) => {
      o.push(w);
    }, u = (w) => {
      w.prop && o.splice(o.indexOf(w), 1);
    }, f = (w = []) => {
      if (!r.model) {
        Fe(jr, "model is required for resetFields to work.");
        return;
      }
      Cr(o, w).forEach((_) => _.resetField());
    }, d = (w = []) => {
      Cr(o, w).forEach((_) => _.clearValidate());
    }, m = y(() => {
      const w = !!r.model;
      return w || Fe(jr, "model is required for validate to work."), w;
    }), b = (w) => {
      if (o.length === 0)
        return [];
      const _ = Cr(o, w);
      return _.length ? _ : (Fe(jr, "please pass correct props!"), []);
    }, g = async (w) => h(void 0, w), c = async (w = []) => {
      if (!m.value)
        return !1;
      const _ = b(w);
      if (_.length === 0)
        return !0;
      let T = {};
      for (const I of _)
        try {
          await I.validate("");
        } catch (E) {
          T = {
            ...T,
            ...E
          };
        }
      return Object.keys(T).length === 0 ? !0 : Promise.reject(T);
    }, h = async (w = [], _) => {
      const T = !et(_);
      try {
        const I = await c(w);
        return I === !0 && (_ == null || _(I)), I;
      } catch (I) {
        if (I instanceof Error)
          throw I;
        const E = I;
        return r.scrollToError && v(Object.keys(E)[0]), _ == null || _(!1, E), T && Promise.reject(E);
      }
    }, v = (w) => {
      var _;
      const T = Cr(o, w)[0];
      T && ((_ = T.$el) == null || _.scrollIntoView(r.scrollIntoViewOptions));
    };
    return U(() => r.rules, () => {
      r.validateOnRuleChange && g().catch((w) => Fe(w));
    }, { deep: !0 }), Be(Wn, wt({
      ...pr(r),
      emit: n,
      resetFields: f,
      clearValidate: d,
      validateField: h,
      addField: l,
      removeField: u,
      ...m0()
    })), t({
      validate: g,
      validateField: h,
      resetFields: f,
      clearValidate: d,
      scrollToField: v
    }), (w, _) => (x(), z("form", {
      class: R(p(s))
    }, [
      oe(w.$slots, "default")
    ], 2));
  }
});
var b0 = /* @__PURE__ */ ve(g0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);
function vn() {
  return vn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, vn.apply(this, arguments);
}
function y0(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, fr(e, t);
}
function Uo(e) {
  return Uo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Uo(e);
}
function fr(e, t) {
  return fr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, fr(e, t);
}
function w0() {
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
function zr(e, t, n) {
  return w0() ? zr = Reflect.construct.bind() : zr = function(o, a, i) {
    var s = [null];
    s.push.apply(s, a);
    var l = Function.bind.apply(o, s), u = new l();
    return i && fr(u, i.prototype), u;
  }, zr.apply(null, arguments);
}
function S0(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Go(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Go = function(r) {
    if (r === null || !S0(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, o);
    }
    function o() {
      return zr(r, arguments, Uo(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), fr(o, r);
  }, Go(e);
}
var E0 = /%[sdj%]/g, Hl = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Hl = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function Yo(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function tt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var o = 0, a = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var i = e.replace(E0, function(s) {
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
function O0(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Ie(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || O0(t) && typeof e == "string" && !e);
}
function _0(e, t, n) {
  var r = [], o = 0, a = e.length;
  function i(s) {
    r.push.apply(r, s || []), o++, o === a && n(r);
  }
  e.forEach(function(s) {
    t(s, i);
  });
}
function qi(e, t, n) {
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
function T0(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || []);
  }), t;
}
var Wi = /* @__PURE__ */ function(e) {
  y0(t, e);
  function t(n, r) {
    var o;
    return o = e.call(this, "Async Validation Error") || this, o.errors = n, o.fields = r, o;
  }
  return t;
}(/* @__PURE__ */ Go(Error));
function $0(e, t, n, r, o) {
  if (t.first) {
    var a = new Promise(function(m, b) {
      var g = function(v) {
        return r(v), v.length ? b(new Wi(v, Yo(v))) : m(o);
      }, c = T0(e);
      qi(c, n, g);
    });
    return a.catch(function(m) {
      return m;
    }), a;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), l = s.length, u = 0, f = [], d = new Promise(function(m, b) {
    var g = function(h) {
      if (f.push.apply(f, h), u++, u === l)
        return r(f), f.length ? b(new Wi(f, Yo(f))) : m(o);
    };
    s.length || (r(f), m(o)), s.forEach(function(c) {
      var h = e[c];
      i.indexOf(c) !== -1 ? qi(h, n, g) : _0(h, n, g);
    });
  });
  return d.catch(function(m) {
    return m;
  }), d;
}
function C0(e) {
  return !!(e && e.message !== void 0);
}
function x0(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function Ki(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = x0(t, e.fullFields) : r = t[n.field || e.fullField], C0(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function Ui(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == "object" && typeof e[n] == "object" ? e[n] = vn({}, e[n], r) : e[n] = r;
      }
  }
  return e;
}
var Vl = function(t, n, r, o, a, i) {
  t.required && (!r.hasOwnProperty(t.field) || Ie(n, i || t.type)) && o.push(tt(a.messages.required, t.fullField));
}, I0 = function(t, n, r, o, a) {
  (/^\s+$/.test(n) || n === "") && o.push(tt(a.messages.whitespace, t.fullField));
}, xr, A0 = function() {
  if (xr)
    return xr;
  var e = "[a-fA-F\\d:]", t = function(T) {
    return T && T.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
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
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), a = new RegExp("(?:^" + n + "$)|(?:^" + o + "$)"), i = new RegExp("^" + n + "$"), s = new RegExp("^" + o + "$"), l = function(T) {
    return T && T.exact ? a : new RegExp("(?:" + t(T) + n + t(T) + ")|(?:" + t(T) + o + t(T) + ")", "g");
  };
  l.v4 = function(_) {
    return _ && _.exact ? i : new RegExp("" + t(_) + n + t(_), "g");
  }, l.v6 = function(_) {
    return _ && _.exact ? s : new RegExp("" + t(_) + o + t(_), "g");
  };
  var u = "(?:(?:[a-z]+:)?//)", f = "(?:\\S+(?::\\S*)?@)?", d = l.v4().source, m = l.v6().source, b = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", g = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", c = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", h = "(?::\\d{2,5})?", v = '(?:[/?#][^\\s"]*)?', w = "(?:" + u + "|www\\.)" + f + "(?:localhost|" + d + "|" + m + "|" + b + g + c + ")" + h + v;
  return xr = new RegExp("(?:^" + w + "$)", "i"), xr;
}, Gi = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Jn = {
  integer: function(t) {
    return Jn.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Jn.number(t) && !Jn.integer(t);
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
    return typeof t == "object" && !Jn.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Gi.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(A0());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Gi.hex);
  }
}, M0 = function(t, n, r, o, a) {
  if (t.required && n === void 0) {
    Vl(t, n, r, o, a);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  i.indexOf(s) > -1 ? Jn[s](n) || o.push(tt(a.messages.types[s], t.fullField, t.type)) : s && typeof n !== t.type && o.push(tt(a.messages.types[s], t.fullField, t.type));
}, P0 = function(t, n, r, o, a) {
  var i = typeof t.len == "number", s = typeof t.min == "number", l = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, f = n, d = null, m = typeof n == "number", b = typeof n == "string", g = Array.isArray(n);
  if (m ? d = "number" : b ? d = "string" : g && (d = "array"), !d)
    return !1;
  g && (f = n.length), b && (f = n.replace(u, "_").length), i ? f !== t.len && o.push(tt(a.messages[d].len, t.fullField, t.len)) : s && !l && f < t.min ? o.push(tt(a.messages[d].min, t.fullField, t.min)) : l && !s && f > t.max ? o.push(tt(a.messages[d].max, t.fullField, t.max)) : s && l && (f < t.min || f > t.max) && o.push(tt(a.messages[d].range, t.fullField, t.min, t.max));
}, xn = "enum", k0 = function(t, n, r, o, a) {
  t[xn] = Array.isArray(t[xn]) ? t[xn] : [], t[xn].indexOf(n) === -1 && o.push(tt(a.messages[xn], t.fullField, t[xn].join(", ")));
}, L0 = function(t, n, r, o, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || o.push(tt(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(n) || o.push(tt(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, ce = {
  required: Vl,
  whitespace: I0,
  type: M0,
  range: P0,
  enum: k0,
  pattern: L0
}, F0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ie(n, "string") && !t.required)
      return r();
    ce.required(t, n, o, i, a, "string"), Ie(n, "string") || (ce.type(t, n, o, i, a), ce.range(t, n, o, i, a), ce.pattern(t, n, o, i, a), t.whitespace === !0 && ce.whitespace(t, n, o, i, a));
  }
  r(i);
}, N0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ie(n) && !t.required)
      return r();
    ce.required(t, n, o, i, a), n !== void 0 && ce.type(t, n, o, i, a);
  }
  r(i);
}, R0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (n === "" && (n = void 0), Ie(n) && !t.required)
      return r();
    ce.required(t, n, o, i, a), n !== void 0 && (ce.type(t, n, o, i, a), ce.range(t, n, o, i, a));
  }
  r(i);
}, B0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ie(n) && !t.required)
      return r();
    ce.required(t, n, o, i, a), n !== void 0 && ce.type(t, n, o, i, a);
  }
  r(i);
}, D0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ie(n) && !t.required)
      return r();
    ce.required(t, n, o, i, a), Ie(n) || ce.type(t, n, o, i, a);
  }
  r(i);
}, j0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ie(n) && !t.required)
      return r();
    ce.required(t, n, o, i, a), n !== void 0 && (ce.type(t, n, o, i, a), ce.range(t, n, o, i, a));
  }
  r(i);
}, z0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ie(n) && !t.required)
      return r();
    ce.required(t, n, o, i, a), n !== void 0 && (ce.type(t, n, o, i, a), ce.range(t, n, o, i, a));
  }
  r(i);
}, H0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (n == null && !t.required)
      return r();
    ce.required(t, n, o, i, a, "array"), n != null && (ce.type(t, n, o, i, a), ce.range(t, n, o, i, a));
  }
  r(i);
}, V0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ie(n) && !t.required)
      return r();
    ce.required(t, n, o, i, a), n !== void 0 && ce.type(t, n, o, i, a);
  }
  r(i);
}, q0 = "enum", W0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ie(n) && !t.required)
      return r();
    ce.required(t, n, o, i, a), n !== void 0 && ce[q0](t, n, o, i, a);
  }
  r(i);
}, K0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ie(n, "string") && !t.required)
      return r();
    ce.required(t, n, o, i, a), Ie(n, "string") || ce.pattern(t, n, o, i, a);
  }
  r(i);
}, U0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ie(n, "date") && !t.required)
      return r();
    if (ce.required(t, n, o, i, a), !Ie(n, "date")) {
      var l;
      n instanceof Date ? l = n : l = new Date(n), ce.type(t, l, o, i, a), l && ce.range(t, l.getTime(), o, i, a);
    }
  }
  r(i);
}, G0 = function(t, n, r, o, a) {
  var i = [], s = Array.isArray(n) ? "array" : typeof n;
  ce.required(t, n, o, i, a, s), r(i);
}, To = function(t, n, r, o, a) {
  var i = t.type, s = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Ie(n, i) && !t.required)
      return r();
    ce.required(t, n, o, s, a, i), Ie(n, i) || ce.type(t, n, o, s, a);
  }
  r(s);
}, Y0 = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ie(n) && !t.required)
      return r();
    ce.required(t, n, o, i, a);
  }
  r(i);
}, nr = {
  string: F0,
  method: N0,
  number: R0,
  boolean: B0,
  regexp: D0,
  integer: j0,
  float: z0,
  array: H0,
  object: V0,
  enum: W0,
  pattern: K0,
  date: U0,
  url: To,
  hex: To,
  email: To,
  required: G0,
  any: Y0
};
function Zo() {
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
var Jo = Zo(), br = /* @__PURE__ */ function() {
  function e(n) {
    this.rules = null, this._messages = Jo, this.define(n);
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
    return r && (this._messages = Ui(Zo(), r)), this._messages;
  }, t.validate = function(r, o, a) {
    var i = this;
    o === void 0 && (o = {}), a === void 0 && (a = function() {
    });
    var s = r, l = o, u = a;
    if (typeof l == "function" && (u = l, l = {}), !this.rules || Object.keys(this.rules).length === 0)
      return u && u(null, s), Promise.resolve(s);
    function f(c) {
      var h = [], v = {};
      function w(T) {
        if (Array.isArray(T)) {
          var I;
          h = (I = h).concat.apply(I, T);
        } else
          h.push(T);
      }
      for (var _ = 0; _ < c.length; _++)
        w(c[_]);
      h.length ? (v = Yo(h), u(h, v)) : u(null, s);
    }
    if (l.messages) {
      var d = this.messages();
      d === Jo && (d = Zo()), Ui(d, l.messages), l.messages = d;
    } else
      l.messages = this.messages();
    var m = {}, b = l.keys || Object.keys(this.rules);
    b.forEach(function(c) {
      var h = i.rules[c], v = s[c];
      h.forEach(function(w) {
        var _ = w;
        typeof _.transform == "function" && (s === r && (s = vn({}, s)), v = s[c] = _.transform(v)), typeof _ == "function" ? _ = {
          validator: _
        } : _ = vn({}, _), _.validator = i.getValidationMethod(_), _.validator && (_.field = c, _.fullField = _.fullField || c, _.type = i.getType(_), m[c] = m[c] || [], m[c].push({
          rule: _,
          value: v,
          source: s,
          field: c
        }));
      });
    });
    var g = {};
    return $0(m, l, function(c, h) {
      var v = c.rule, w = (v.type === "object" || v.type === "array") && (typeof v.fields == "object" || typeof v.defaultField == "object");
      w = w && (v.required || !v.required && c.value), v.field = c.field;
      function _(E, O) {
        return vn({}, O, {
          fullField: v.fullField + "." + E,
          fullFields: v.fullFields ? [].concat(v.fullFields, [E]) : [E]
        });
      }
      function T(E) {
        E === void 0 && (E = []);
        var O = Array.isArray(E) ? E : [E];
        !l.suppressWarning && O.length && e.warning("async-validator:", O), O.length && v.message !== void 0 && (O = [].concat(v.message));
        var M = O.map(Ki(v, s));
        if (l.first && M.length)
          return g[v.field] = 1, h(M);
        if (!w)
          h(M);
        else {
          if (v.required && !c.value)
            return v.message !== void 0 ? M = [].concat(v.message).map(Ki(v, s)) : l.error && (M = [l.error(v, tt(l.messages.required, v.field))]), h(M);
          var H = {};
          v.defaultField && Object.keys(c.value).map(function(C) {
            H[C] = v.defaultField;
          }), H = vn({}, H, c.rule.fields);
          var V = {};
          Object.keys(H).forEach(function(C) {
            var L = H[C], Y = Array.isArray(L) ? L : [L];
            V[C] = Y.map(_.bind(null, C));
          });
          var P = new e(V);
          P.messages(l.messages), c.rule.options && (c.rule.options.messages = l.messages, c.rule.options.error = l.error), P.validate(c.value, c.rule.options || l, function(C) {
            var L = [];
            M && M.length && L.push.apply(L, M), C && C.length && L.push.apply(L, C), h(L.length ? L : null);
          });
        }
      }
      var I;
      if (v.asyncValidator)
        I = v.asyncValidator(v, c.value, T, c.source, l);
      else if (v.validator) {
        try {
          I = v.validator(v, c.value, T, c.source, l);
        } catch (E) {
          console.error == null || console.error(E), l.suppressValidatorError || setTimeout(function() {
            throw E;
          }, 0), T(E.message);
        }
        I === !0 ? T() : I === !1 ? T(typeof v.message == "function" ? v.message(v.fullField || v.field) : v.message || (v.fullField || v.field) + " fails") : I instanceof Array ? T(I) : I instanceof Error && T(I.message);
      }
      I && I.then && I.then(function() {
        return T();
      }, function(E) {
        return T(E);
      });
    }, function(c) {
      f(c);
    }, s);
  }, t.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !nr.hasOwnProperty(r.type))
      throw new Error(tt("Unknown rule type %s", r.type));
    return r.type || "string";
  }, t.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var o = Object.keys(r), a = o.indexOf("message");
    return a !== -1 && o.splice(a, 1), o.length === 1 && o[0] === "required" ? nr.required : nr[this.getType(r)] || void 0;
  }, e;
}();
br.register = function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  nr[t] = n;
};
br.warning = Hl;
br.messages = Jo;
br.validators = nr;
const Z0 = [
  "",
  "error",
  "validating",
  "success"
], J0 = we({
  label: String,
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  prop: {
    type: re([String, Array])
  },
  required: {
    type: Boolean,
    default: void 0
  },
  rules: {
    type: re([Object, Array])
  },
  error: String,
  validateStatus: {
    type: String,
    values: Z0
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
    values: mr
  }
}), Yi = "ElLabelWrap";
var Q0 = B({
  name: Yi,
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  setup(e, {
    slots: t
  }) {
    const n = ae(Wn, void 0), r = ae(Sn);
    r || Nn(Yi, "usage: <el-form-item><label-wrap /></el-form-item>");
    const o = fe("form"), a = $(), i = $(0), s = () => {
      var f;
      if ((f = a.value) != null && f.firstElementChild) {
        const d = window.getComputedStyle(a.value.firstElementChild).width;
        return Math.ceil(Number.parseFloat(d));
      } else
        return 0;
    }, l = (f = "update") => {
      me(() => {
        t.default && e.isAutoWidth && (f === "update" ? i.value = s() : f === "remove" && (n == null || n.deregisterLabelWidth(i.value)));
      });
    }, u = () => l("update");
    return Ce(() => {
      u();
    }), qe(() => {
      l("remove");
    }), Ds(() => u()), U(i, (f, d) => {
      e.updateAll && (n == null || n.registerLabelWidth(f, d));
    }), Vn(y(() => {
      var f, d;
      return (d = (f = a.value) == null ? void 0 : f.firstElementChild) != null ? d : null;
    }), u), () => {
      var f, d;
      if (!t)
        return null;
      const {
        isAutoWidth: m
      } = e;
      if (m) {
        const b = n == null ? void 0 : n.autoLabelWidth, g = r == null ? void 0 : r.hasLabel, c = {};
        if (g && b && b !== "auto") {
          const h = Math.max(0, Number.parseInt(b, 10) - i.value), v = n.labelPosition === "left" ? "marginRight" : "marginLeft";
          h && (c[v] = `${h}px`);
        }
        return N("div", {
          ref: a,
          class: [o.be("item", "label-wrap")],
          style: c
        }, [(f = t.default) == null ? void 0 : f.call(t)]);
      } else
        return N(Le, {
          ref: a
        }, [(d = t.default) == null ? void 0 : d.call(t)]);
    };
  }
});
const X0 = ["role", "aria-labelledby"], eb = B({
  name: "ElFormItem"
}), tb = /* @__PURE__ */ B({
  ...eb,
  props: J0,
  setup(e, { expose: t }) {
    const n = e, r = ra(), o = ae(Wn, void 0), a = ae(Sn, void 0), i = Kn(void 0, { formItem: !1 }), s = fe("form-item"), l = $a().value, u = $([]), f = $(""), d = Ku(f, 100), m = $(""), b = $();
    let g, c = !1;
    const h = y(() => {
      if ((o == null ? void 0 : o.labelPosition) === "top")
        return {};
      const j = Rn(n.labelWidth || (o == null ? void 0 : o.labelWidth) || "");
      return j ? { width: j } : {};
    }), v = y(() => {
      if ((o == null ? void 0 : o.labelPosition) === "top" || o != null && o.inline)
        return {};
      if (!n.label && !n.labelWidth && H)
        return {};
      const j = Rn(n.labelWidth || (o == null ? void 0 : o.labelWidth) || "");
      return !n.label && !r.label ? { marginLeft: j } : {};
    }), w = y(() => [
      s.b(),
      s.m(i.value),
      s.is("error", f.value === "error"),
      s.is("validating", f.value === "validating"),
      s.is("success", f.value === "success"),
      s.is("required", Y.value || n.required),
      s.is("no-asterisk", o == null ? void 0 : o.hideRequiredAsterisk),
      (o == null ? void 0 : o.requireAsteriskPosition) === "right" ? "asterisk-right" : "asterisk-left",
      { [s.m("feedback")]: o == null ? void 0 : o.statusIcon }
    ]), _ = y(() => vr(n.inlineMessage) ? n.inlineMessage : (o == null ? void 0 : o.inlineMessage) || !1), T = y(() => [
      s.e("error"),
      { [s.em("error", "inline")]: _.value }
    ]), I = y(() => n.prop ? Ae(n.prop) ? n.prop : n.prop.join(".") : ""), E = y(() => !!(n.label || r.label)), O = y(() => n.for || u.value.length === 1 ? u.value[0] : void 0), M = y(() => !O.value && E.value), H = !!a, V = y(() => {
      const j = o == null ? void 0 : o.model;
      if (!(!j || !n.prop))
        return Eo(j, n.prop).value;
    }), P = y(() => {
      const { required: j } = n, J = [];
      n.rules && J.push(...jo(n.rules));
      const Ee = o == null ? void 0 : o.rules;
      if (Ee && n.prop) {
        const de = Eo(Ee, n.prop).value;
        de && J.push(...jo(de));
      }
      if (j !== void 0) {
        const de = J.map((he, Pe) => [he, Pe]).filter(([he]) => Object.keys(he).includes("required"));
        if (de.length > 0)
          for (const [he, Pe] of de)
            he.required !== j && (J[Pe] = { ...he, required: j });
        else
          J.push({ required: j });
      }
      return J;
    }), C = y(() => P.value.length > 0), L = (j) => P.value.filter((Ee) => !Ee.trigger || !j ? !0 : Array.isArray(Ee.trigger) ? Ee.trigger.includes(j) : Ee.trigger === j).map(({ trigger: Ee, ...de }) => de), Y = y(() => P.value.some((j) => j.required)), G = y(() => {
      var j;
      return d.value === "error" && n.showMessage && ((j = o == null ? void 0 : o.showMessage) != null ? j : !0);
    }), ie = y(() => `${n.label || ""}${(o == null ? void 0 : o.labelSuffix) || ""}`), F = (j) => {
      f.value = j;
    }, se = (j) => {
      var J, Ee;
      const { errors: de, fields: he } = j;
      (!de || !he) && console.error(j), F("error"), m.value = de ? (Ee = (J = de == null ? void 0 : de[0]) == null ? void 0 : J.message) != null ? Ee : `${n.prop} is required` : "", o == null || o.emit("validate", n.prop, !1, m.value);
    }, te = () => {
      F("success"), o == null || o.emit("validate", n.prop, !0, "");
    }, Z = async (j) => {
      const J = I.value;
      return new br({
        [J]: j
      }).validate({ [J]: V.value }, { firstFields: !0 }).then(() => (te(), !0)).catch((de) => (se(de), Promise.reject(de)));
    }, ue = async (j, J) => {
      if (c || !n.prop)
        return !1;
      const Ee = et(J);
      if (!C.value)
        return J == null || J(!1), !1;
      const de = L(j);
      return de.length === 0 ? (J == null || J(!0), !0) : (F("validating"), Z(de).then(() => (J == null || J(!0), !0)).catch((he) => {
        const { fields: Pe } = he;
        return J == null || J(!1, Pe), Ee ? !1 : Promise.reject(Pe);
      }));
    }, le = () => {
      F(""), m.value = "", c = !1;
    }, _e = async () => {
      const j = o == null ? void 0 : o.model;
      if (!j || !n.prop)
        return;
      const J = Eo(j, n.prop);
      c = !0, J.value = Ei(g), await me(), le(), c = !1;
    }, xe = (j) => {
      u.value.includes(j) || u.value.push(j);
    }, Me = (j) => {
      u.value = u.value.filter((J) => J !== j);
    };
    U(() => n.error, (j) => {
      m.value = j || "", F(j ? "error" : "");
    }, { immediate: !0 }), U(() => n.validateStatus, (j) => F(j || ""));
    const We = wt({
      ...pr(n),
      $el: b,
      size: i,
      validateState: f,
      labelId: l,
      inputIds: u,
      isGroup: M,
      hasLabel: E,
      addInputId: xe,
      removeInputId: Me,
      resetField: _e,
      clearValidate: le,
      validate: ue
    });
    return Be(Sn, We), Ce(() => {
      n.prop && (o == null || o.addField(We), g = Ei(V.value));
    }), qe(() => {
      o == null || o.removeField(We);
    }), t({
      size: i,
      validateMessage: m,
      validateState: f,
      validate: ue,
      clearValidate: le,
      resetField: _e
    }), (j, J) => {
      var Ee;
      return x(), z("div", {
        ref_key: "formItemRef",
        ref: b,
        class: R(p(w)),
        role: p(M) ? "group" : void 0,
        "aria-labelledby": p(M) ? p(l) : void 0
      }, [
        N(p(Q0), {
          "is-auto-width": p(h).width === "auto",
          "update-all": ((Ee = p(o)) == null ? void 0 : Ee.labelWidth) === "auto"
        }, {
          default: q(() => [
            p(E) ? (x(), Q(ht(p(O) ? "label" : "div"), {
              key: 0,
              id: p(l),
              for: p(O),
              class: R(p(s).e("label")),
              style: je(p(h))
            }, {
              default: q(() => [
                oe(j.$slots, "label", { label: p(ie) }, () => [
                  Pn($e(p(ie)), 1)
                ])
              ]),
              _: 3
            }, 8, ["id", "for", "class", "style"])) : ee("v-if", !0)
          ]),
          _: 3
        }, 8, ["is-auto-width", "update-all"]),
        W("div", {
          class: R(p(s).e("content")),
          style: je(p(v))
        }, [
          oe(j.$slots, "default"),
          N(Eu, {
            name: `${p(s).namespace.value}-zoom-in-top`
          }, {
            default: q(() => [
              p(G) ? oe(j.$slots, "error", {
                key: 0,
                error: m.value
              }, () => [
                W("div", {
                  class: R(p(T))
                }, $e(m.value), 3)
              ]) : ee("v-if", !0)
            ]),
            _: 3
          }, 8, ["name"])
        ], 6)
      ], 10, X0);
    };
  }
});
var ql = /* @__PURE__ */ ve(tb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);
const Wl = _t(b0, {
  FormItem: ql
});
Tn(ql);
let pt;
const nb = `
  height:0 !important;
  visibility:hidden !important;
  ${oc() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, rb = [
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
function ob(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: rb.map((i) => `${i}:${t.getPropertyValue(i)}`).join(";"), paddingSize: r, borderSize: o, boxSizing: n };
}
function Zi(e, t = 1, n) {
  var r;
  pt || (pt = document.createElement("textarea"), document.body.appendChild(pt));
  const { paddingSize: o, borderSize: a, boxSizing: i, contextStyle: s } = ob(e);
  pt.setAttribute("style", `${s};${nb}`), pt.value = e.value || e.placeholder || "";
  let l = pt.scrollHeight;
  const u = {};
  i === "border-box" ? l = l + a : i === "content-box" && (l = l - o), pt.value = "";
  const f = pt.scrollHeight - o;
  if (gt(t)) {
    let d = f * t;
    i === "border-box" && (d = d + o + a), l = Math.max(d, l), u.minHeight = `${d}px`;
  }
  if (gt(n)) {
    let d = f * n;
    i === "border-box" && (d = d + o + a), l = Math.min(d, l);
  }
  return u.height = `${l}px`, (r = pt.parentNode) == null || r.removeChild(pt), pt = void 0, u;
}
const ab = we({
  id: {
    type: String,
    default: void 0
  },
  size: zl,
  disabled: Boolean,
  modelValue: {
    type: re([
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
    type: re([Boolean, Object]),
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
    type: bt
  },
  prefixIcon: {
    type: bt
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
    type: re([Object, Array, String]),
    default: () => _l({})
  }
}), ib = {
  [mt]: (e) => Ae(e),
  input: (e) => Ae(e),
  change: (e) => Ae(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, sb = ["role"], lb = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"], ub = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"], cb = B({
  name: "ElInput",
  inheritAttrs: !1
}), fb = /* @__PURE__ */ B({
  ...cb,
  props: ab,
  emits: ib,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = Ou(), a = ra(), i = y(() => {
      const k = {};
      return r.containerRole === "combobox" && (k["aria-haspopup"] = o["aria-haspopup"], k["aria-owns"] = o["aria-owns"], k["aria-expanded"] = o["aria-expanded"]), k;
    }), s = y(() => [
      r.type === "textarea" ? h.b() : c.b(),
      c.m(b.value),
      c.is("disabled", g.value),
      c.is("exceed", xe.value),
      {
        [c.b("group")]: a.prepend || a.append,
        [c.bm("group", "append")]: a.append,
        [c.bm("group", "prepend")]: a.prepend,
        [c.m("prefix")]: a.prefix || r.prefixIcon,
        [c.m("suffix")]: a.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [c.bm("suffix", "password-clear")]: Z.value && ue.value
      },
      o.class
    ]), l = y(() => [
      c.e("wrapper"),
      c.is("focus", V.value)
    ]), u = Ih({
      excludeKeys: y(() => Object.keys(i.value))
    }), { form: f, formItem: d } = xa(), { inputId: m } = c0(r, {
      formItemContext: d
    }), b = Kn(), g = Ca(), c = fe("input"), h = fe("textarea"), v = Kt(), w = Kt(), _ = $(!1), T = $(!1), I = $(!1), E = $(), O = Kt(r.inputStyle), M = y(() => v.value || w.value), { wrapperRef: H, isFocused: V, handleFocus: P, handleBlur: C } = r0(M, {
      afterBlur() {
        var k;
        r.validateEvent && ((k = d == null ? void 0 : d.validate) == null || k.call(d, "blur").catch((K) => Fe(K)));
      }
    }), L = y(() => {
      var k;
      return (k = f == null ? void 0 : f.statusIcon) != null ? k : !1;
    }), Y = y(() => (d == null ? void 0 : d.validateState) || ""), G = y(() => Y.value && Sl[Y.value]), ie = y(() => I.value ? Sh : Qm), F = y(() => [
      o.style,
      r.inputStyle
    ]), se = y(() => [
      r.inputStyle,
      O.value,
      { resize: r.resize }
    ]), te = y(() => Fn(r.modelValue) ? "" : String(r.modelValue)), Z = y(() => r.clearable && !g.value && !r.readonly && !!te.value && (V.value || _.value)), ue = y(() => r.showPassword && !g.value && !r.readonly && !!te.value && (!!te.value || V.value)), le = y(() => r.showWordLimit && !!u.value.maxlength && (r.type === "text" || r.type === "textarea") && !g.value && !r.readonly && !r.showPassword), _e = y(() => te.value.length), xe = y(() => !!le.value && _e.value > Number(u.value.maxlength)), Me = y(() => !!a.suffix || !!r.suffixIcon || Z.value || r.showPassword || le.value || !!Y.value && L.value), [We, j] = e0(v);
    Vn(w, (k) => {
      if (de(), !le.value || r.resize !== "both")
        return;
      const K = k[0], { width: ge } = K.contentRect;
      E.value = {
        right: `calc(100% - ${ge + 15 + 6}px)`
      };
    });
    const J = () => {
      const { type: k, autosize: K } = r;
      if (!(!Ne || k !== "textarea" || !w.value))
        if (K) {
          const ge = Gt(K) ? K.minRows : void 0, ot = Gt(K) ? K.maxRows : void 0, jt = Zi(w.value, ge, ot);
          O.value = {
            overflowY: "hidden",
            ...jt
          }, me(() => {
            w.value.offsetHeight, O.value = jt;
          });
        } else
          O.value = {
            minHeight: Zi(w.value).minHeight
          };
    }, de = ((k) => {
      let K = !1;
      return () => {
        var ge;
        if (K || !r.autosize)
          return;
        ((ge = w.value) == null ? void 0 : ge.offsetParent) === null || (k(), K = !0);
      };
    })(J), he = () => {
      const k = M.value, K = r.formatter ? r.formatter(te.value) : te.value;
      !k || k.value === K || (k.value = K);
    }, Pe = async (k) => {
      We();
      let { value: K } = k.target;
      if (r.formatter && (K = r.parser ? r.parser(K) : K), !T.value) {
        if (K === te.value) {
          he();
          return;
        }
        n(mt, K), n("input", K), await me(), he(), j();
      }
    }, $t = (k) => {
      n("change", k.target.value);
    }, Ct = (k) => {
      n("compositionstart", k), T.value = !0;
    }, Rt = (k) => {
      var K;
      n("compositionupdate", k);
      const ge = (K = k.target) == null ? void 0 : K.value, ot = ge[ge.length - 1] || "";
      T.value = !Ol(ot);
    }, Bt = (k) => {
      n("compositionend", k), T.value && (T.value = !1, Pe(k));
    }, Ge = () => {
      I.value = !I.value, en();
    }, en = async () => {
      var k;
      await me(), (k = M.value) == null || k.focus();
    }, cn = () => {
      var k;
      return (k = M.value) == null ? void 0 : k.blur();
    }, Ye = (k) => {
      _.value = !1, n("mouseleave", k);
    }, rt = (k) => {
      _.value = !0, n("mouseenter", k);
    }, Dt = (k) => {
      n("keydown", k);
    }, tn = () => {
      var k;
      (k = M.value) == null || k.select();
    }, xt = () => {
      n(mt, ""), n("change", ""), n("clear"), n("input", "");
    };
    return U(() => r.modelValue, () => {
      var k;
      me(() => J()), r.validateEvent && ((k = d == null ? void 0 : d.validate) == null || k.call(d, "change").catch((K) => Fe(K)));
    }), U(te, () => he()), U(() => r.type, async () => {
      await me(), he(), J();
    }), Ce(() => {
      !r.formatter && r.parser && Fe("ElInput", "If you set the parser, you also need to set the formatter."), he(), me(J);
    }), t({
      input: v,
      textarea: w,
      ref: M,
      textareaStyle: se,
      autosize: lt(r, "autosize"),
      focus: en,
      blur: cn,
      select: tn,
      clear: xt,
      resizeTextarea: J
    }), (k, K) => It((x(), z("div", yt(p(i), {
      class: p(s),
      style: p(F),
      role: k.containerRole,
      onMouseenter: rt,
      onMouseleave: Ye
    }), [
      ee(" input "),
      k.type !== "textarea" ? (x(), z(Le, { key: 0 }, [
        ee(" prepend slot "),
        k.$slots.prepend ? (x(), z("div", {
          key: 0,
          class: R(p(c).be("group", "prepend"))
        }, [
          oe(k.$slots, "prepend")
        ], 2)) : ee("v-if", !0),
        W("div", {
          ref_key: "wrapperRef",
          ref: H,
          class: R(p(l))
        }, [
          ee(" prefix slot "),
          k.$slots.prefix || k.prefixIcon ? (x(), z("span", {
            key: 0,
            class: R(p(c).e("prefix"))
          }, [
            W("span", {
              class: R(p(c).e("prefix-inner"))
            }, [
              oe(k.$slots, "prefix"),
              k.prefixIcon ? (x(), Q(p(st), {
                key: 0,
                class: R(p(c).e("icon"))
              }, {
                default: q(() => [
                  (x(), Q(ht(k.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0)
            ], 2)
          ], 2)) : ee("v-if", !0),
          W("input", yt({
            id: p(m),
            ref_key: "input",
            ref: v,
            class: p(c).e("inner")
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
            onCompositionupdate: Rt,
            onCompositionend: Bt,
            onInput: Pe,
            onFocus: K[0] || (K[0] = (...ge) => p(P) && p(P)(...ge)),
            onBlur: K[1] || (K[1] = (...ge) => p(C) && p(C)(...ge)),
            onChange: $t,
            onKeydown: Dt
          }), null, 16, lb),
          ee(" suffix slot "),
          p(Me) ? (x(), z("span", {
            key: 1,
            class: R(p(c).e("suffix"))
          }, [
            W("span", {
              class: R(p(c).e("suffix-inner"))
            }, [
              !p(Z) || !p(ue) || !p(le) ? (x(), z(Le, { key: 0 }, [
                oe(k.$slots, "suffix"),
                k.suffixIcon ? (x(), Q(p(st), {
                  key: 0,
                  class: R(p(c).e("icon"))
                }, {
                  default: q(() => [
                    (x(), Q(ht(k.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : ee("v-if", !0)
              ], 64)) : ee("v-if", !0),
              p(Z) ? (x(), Q(p(st), {
                key: 1,
                class: R([p(c).e("icon"), p(c).e("clear")]),
                onMousedown: Oe(p(or), ["prevent"]),
                onClick: xt
              }, {
                default: q(() => [
                  N(p(va))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : ee("v-if", !0),
              p(ue) ? (x(), Q(p(st), {
                key: 2,
                class: R([p(c).e("icon"), p(c).e("password")]),
                onClick: Ge
              }, {
                default: q(() => [
                  (x(), Q(ht(p(ie))))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0),
              p(le) ? (x(), z("span", {
                key: 3,
                class: R(p(c).e("count"))
              }, [
                W("span", {
                  class: R(p(c).e("count-inner"))
                }, $e(p(_e)) + " / " + $e(p(u).maxlength), 3)
              ], 2)) : ee("v-if", !0),
              p(Y) && p(G) && p(L) ? (x(), Q(p(st), {
                key: 4,
                class: R([
                  p(c).e("icon"),
                  p(c).e("validateIcon"),
                  p(c).is("loading", p(Y) === "validating")
                ])
              }, {
                default: q(() => [
                  (x(), Q(ht(p(G))))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0)
            ], 2)
          ], 2)) : ee("v-if", !0)
        ], 2),
        ee(" append slot "),
        k.$slots.append ? (x(), z("div", {
          key: 1,
          class: R(p(c).be("group", "append"))
        }, [
          oe(k.$slots, "append")
        ], 2)) : ee("v-if", !0)
      ], 64)) : (x(), z(Le, { key: 1 }, [
        ee(" textarea "),
        W("textarea", yt({
          id: p(m),
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
          onCompositionupdate: Rt,
          onCompositionend: Bt,
          onInput: Pe,
          onFocus: K[2] || (K[2] = (...ge) => p(P) && p(P)(...ge)),
          onBlur: K[3] || (K[3] = (...ge) => p(C) && p(C)(...ge)),
          onChange: $t,
          onKeydown: Dt
        }), null, 16, ub),
        p(le) ? (x(), z("span", {
          key: 0,
          style: je(E.value),
          class: R(p(c).e("count"))
        }, $e(p(_e)) + " / " + $e(p(u).maxlength), 7)) : ee("v-if", !0)
      ], 64))
    ], 16, sb)), [
      [En, k.type !== "hidden"]
    ]);
  }
});
var db = /* @__PURE__ */ ve(fb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const Ia = _t(db), Mn = 4, pb = {
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
}, vb = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Kl = Symbol("scrollbarContextKey"), mb = we({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), hb = "Thumb", gb = /* @__PURE__ */ B({
  __name: "thumb",
  props: mb,
  setup(e) {
    const t = e, n = ae(Kl), r = fe("scrollbar");
    n || Nn(hb, "can not inject scrollbar context");
    const o = $(), a = $(), i = $({}), s = $(!1);
    let l = !1, u = !1, f = Ne ? document.onselectstart : null;
    const d = y(() => pb[t.vertical ? "vertical" : "horizontal"]), m = y(() => vb({
      size: t.size,
      move: t.move,
      bar: d.value
    })), b = y(() => o.value[d.value.offset] ** 2 / n.wrapElement[d.value.scrollSize] / t.ratio / a.value[d.value.offset]), g = (E) => {
      var O;
      if (E.stopPropagation(), E.ctrlKey || [1, 2].includes(E.button))
        return;
      (O = window.getSelection()) == null || O.removeAllRanges(), h(E);
      const M = E.currentTarget;
      M && (i.value[d.value.axis] = M[d.value.offset] - (E[d.value.client] - M.getBoundingClientRect()[d.value.direction]));
    }, c = (E) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const O = Math.abs(E.target.getBoundingClientRect()[d.value.direction] - E[d.value.client]), M = a.value[d.value.offset] / 2, H = (O - M) * 100 * b.value / o.value[d.value.offset];
      n.wrapElement[d.value.scroll] = H * n.wrapElement[d.value.scrollSize] / 100;
    }, h = (E) => {
      E.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", v), document.addEventListener("mouseup", w), f = document.onselectstart, document.onselectstart = () => !1;
    }, v = (E) => {
      if (!o.value || !a.value || l === !1)
        return;
      const O = i.value[d.value.axis];
      if (!O)
        return;
      const M = (o.value.getBoundingClientRect()[d.value.direction] - E[d.value.client]) * -1, H = a.value[d.value.offset] - O, V = (M - H) * 100 * b.value / o.value[d.value.offset];
      n.wrapElement[d.value.scroll] = V * n.wrapElement[d.value.scrollSize] / 100;
    }, w = () => {
      l = !1, i.value[d.value.axis] = 0, document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", w), I(), u && (s.value = !1);
    }, _ = () => {
      u = !1, s.value = !!t.size;
    }, T = () => {
      u = !0, s.value = l;
    };
    qe(() => {
      I(), document.removeEventListener("mouseup", w);
    });
    const I = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return gn(lt(n, "scrollbarElement"), "mousemove", _), gn(lt(n, "scrollbarElement"), "mouseleave", T), (E, O) => (x(), Q(yn, {
      name: p(r).b("fade"),
      persisted: ""
    }, {
      default: q(() => [
        It(W("div", {
          ref_key: "instance",
          ref: o,
          class: R([p(r).e("bar"), p(r).is(p(d).key)]),
          onMousedown: c
        }, [
          W("div", {
            ref_key: "thumb",
            ref: a,
            class: R(p(r).e("thumb")),
            style: je(p(m)),
            onMousedown: g
          }, null, 38)
        ], 34), [
          [En, E.always || s.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Ji = /* @__PURE__ */ ve(gb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const bb = we({
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
}), yb = /* @__PURE__ */ B({
  __name: "bar",
  props: bb,
  setup(e, { expose: t }) {
    const n = e, r = $(0), o = $(0);
    return t({
      handleScroll: (i) => {
        if (i) {
          const s = i.offsetHeight - Mn, l = i.offsetWidth - Mn;
          o.value = i.scrollTop * 100 / s * n.ratioY, r.value = i.scrollLeft * 100 / l * n.ratioX;
        }
      }
    }), (i, s) => (x(), z(Le, null, [
      N(Ji, {
        move: r.value,
        ratio: i.ratioX,
        size: i.width,
        always: i.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      N(Ji, {
        move: o.value,
        ratio: i.ratioY,
        size: i.height,
        vertical: "",
        always: i.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var wb = /* @__PURE__ */ ve(yb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const Sb = we({
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
    type: re([String, Object, Array]),
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
}), Eb = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(gt)
}, Qo = "ElScrollbar", Ob = B({
  name: Qo
}), _b = /* @__PURE__ */ B({
  ...Ob,
  props: Sb,
  emits: Eb,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = fe("scrollbar");
    let a, i;
    const s = $(), l = $(), u = $(), f = $("0"), d = $("0"), m = $(), b = $(1), g = $(1), c = y(() => {
      const O = {};
      return r.height && (O.height = Rn(r.height)), r.maxHeight && (O.maxHeight = Rn(r.maxHeight)), [r.wrapStyle, O];
    }), h = y(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), v = y(() => [o.e("view"), r.viewClass]), w = () => {
      var O;
      l.value && ((O = m.value) == null || O.handleScroll(l.value), n("scroll", {
        scrollTop: l.value.scrollTop,
        scrollLeft: l.value.scrollLeft
      }));
    };
    function _(O, M) {
      Gt(O) ? l.value.scrollTo(O) : gt(O) && gt(M) && l.value.scrollTo(O, M);
    }
    const T = (O) => {
      if (!gt(O)) {
        Fe(Qo, "value must be a number");
        return;
      }
      l.value.scrollTop = O;
    }, I = (O) => {
      if (!gt(O)) {
        Fe(Qo, "value must be a number");
        return;
      }
      l.value.scrollLeft = O;
    }, E = () => {
      if (!l.value)
        return;
      const O = l.value.offsetHeight - Mn, M = l.value.offsetWidth - Mn, H = O ** 2 / l.value.scrollHeight, V = M ** 2 / l.value.scrollWidth, P = Math.max(H, r.minSize), C = Math.max(V, r.minSize);
      b.value = H / (O - H) / (P / (O - P)), g.value = V / (M - V) / (C / (M - C)), d.value = P + Mn < O ? `${P}px` : "", f.value = C + Mn < M ? `${C}px` : "";
    };
    return U(() => r.noresize, (O) => {
      O ? (a == null || a(), i == null || i()) : ({ stop: a } = Vn(u, E), i = gn("resize", E));
    }, { immediate: !0 }), U(() => [r.maxHeight, r.height], () => {
      r.native || me(() => {
        var O;
        E(), l.value && ((O = m.value) == null || O.handleScroll(l.value));
      });
    }), Be(Kl, wt({
      scrollbarElement: s,
      wrapElement: l
    })), Ce(() => {
      r.native || me(() => {
        E();
      });
    }), Ds(() => E()), t({
      wrapRef: l,
      update: E,
      scrollTo: _,
      setScrollTop: T,
      setScrollLeft: I,
      handleScroll: w
    }), (O, M) => (x(), z("div", {
      ref_key: "scrollbarRef",
      ref: s,
      class: R(p(o).b())
    }, [
      W("div", {
        ref_key: "wrapRef",
        ref: l,
        class: R(p(h)),
        style: je(p(c)),
        onScroll: w
      }, [
        (x(), Q(ht(O.tag), {
          ref_key: "resizeRef",
          ref: u,
          class: R(p(v)),
          style: je(O.viewStyle)
        }, {
          default: q(() => [
            oe(O.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      O.native ? ee("v-if", !0) : (x(), Q(wb, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        height: d.value,
        width: f.value,
        always: O.always,
        "ratio-x": g.value,
        "ratio-y": b.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var Tb = /* @__PURE__ */ ve(_b, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const $b = _t(Tb), Aa = Symbol("popper"), Ul = Symbol("popperContent"), Cb = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Gl = we({
  role: {
    type: String,
    values: Cb,
    default: "tooltip"
  }
}), xb = B({
  name: "ElPopper",
  inheritAttrs: !1
}), Ib = /* @__PURE__ */ B({
  ...xb,
  props: Gl,
  setup(e, { expose: t }) {
    const n = e, r = $(), o = $(), a = $(), i = $(), s = y(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: i,
      role: s
    };
    return t(l), Be(Aa, l), (u, f) => oe(u.$slots, "default");
  }
});
var Ab = /* @__PURE__ */ ve(Ib, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const Yl = we({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Mb = B({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Pb = /* @__PURE__ */ B({
  ...Mb,
  props: Yl,
  setup(e, { expose: t }) {
    const n = e, r = fe("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: i } = ae(Ul, void 0);
    return U(() => n.arrowOffset, (s) => {
      o.value = s;
    }), qe(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (s, l) => (x(), z("span", {
      ref_key: "arrowRef",
      ref: a,
      class: R(p(r).e("arrow")),
      style: je(p(i)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var kb = /* @__PURE__ */ ve(Pb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const $o = "ElOnlyChild", Lb = B({
  name: $o,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = ae(jl), a = Zg((r = o == null ? void 0 : o.setForwardRef) != null ? r : or);
    return () => {
      var i;
      const s = (i = t.default) == null ? void 0 : i.call(t, n);
      if (!s)
        return null;
      if (s.length > 1)
        return Fe($o, "requires exact only one valid child."), null;
      const l = Zl(s);
      return l ? It(_u(l, n), [[a]]) : (Fe($o, "no valid child node found"), null);
    };
  }
});
function Zl(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Gt(n))
      switch (n.type) {
        case Tu:
          continue;
        case js:
        case "svg":
          return Qi(n);
        case Le:
          return Zl(n.children);
        default:
          return n;
      }
    return Qi(n);
  }
  return null;
}
function Qi(e) {
  const t = fe("only-child");
  return N("span", {
    class: t.e("content")
  }, [e]);
}
const Jl = we({
  virtualRef: {
    type: re(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: re(Function)
  },
  onMouseleave: {
    type: re(Function)
  },
  onClick: {
    type: re(Function)
  },
  onKeydown: {
    type: re(Function)
  },
  onFocus: {
    type: re(Function)
  },
  onBlur: {
    type: re(Function)
  },
  onContextmenu: {
    type: re(Function)
  },
  id: String,
  open: Boolean
}), Fb = B({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), Nb = /* @__PURE__ */ B({
  ...Fb,
  props: Jl,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = ae(Aa, void 0);
    Yg(o);
    const a = y(() => s.value ? n.id : void 0), i = y(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), s = y(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), l = y(() => s.value ? `${n.open}` : void 0);
    let u;
    return Ce(() => {
      U(() => n.virtualRef, (f) => {
        f && (o.value = an(f));
      }, {
        immediate: !0
      }), U(o, (f, d) => {
        u == null || u(), u = void 0, lr(f) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((m) => {
          var b;
          const g = n[m];
          g && (f.addEventListener(m.slice(2).toLowerCase(), g), (b = d == null ? void 0 : d.removeEventListener) == null || b.call(d, m.slice(2).toLowerCase(), g));
        }), u = U([a, i, s, l], (m) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((b, g) => {
            Fn(m[g]) ? f.removeAttribute(b) : f.setAttribute(b, m[g]);
          });
        }, { immediate: !0 })), lr(d) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((m) => d.removeAttribute(m));
      }, {
        immediate: !0
      });
    }), qe(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: o
    }), (f, d) => f.virtualTriggering ? ee("v-if", !0) : (x(), Q(p(Lb), yt({ key: 0 }, f.$attrs, {
      "aria-controls": p(a),
      "aria-describedby": p(i),
      "aria-expanded": p(l),
      "aria-haspopup": p(s)
    }), {
      default: q(() => [
        oe(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var Rb = /* @__PURE__ */ ve(Nb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const Co = "focus-trap.focus-after-trapped", xo = "focus-trap.focus-after-released", Bb = "focus-trap.focusout-prevented", Xi = {
  cancelable: !0,
  bubbles: !1
}, Db = {
  cancelable: !0,
  bubbles: !1
}, es = "focusAfterTrapped", ts = "focusAfterReleased", jb = Symbol("elFocusTrap"), Ma = $(), so = $(0), Pa = $(0);
let Ir = 0;
const Ql = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, ns = (e, t) => {
  for (const n of e)
    if (!zb(n, t))
      return n;
}, zb = (e, t) => {
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
}, Hb = (e) => {
  const t = Ql(e), n = ns(t, e), r = ns(t.reverse(), e);
  return [n, r];
}, Vb = (e) => e instanceof HTMLInputElement && "select" in e, rn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), Pa.value = window.performance.now(), e !== n && Vb(e) && t && e.select();
  }
};
function rs(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const qb = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = rs(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = rs(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, Wb = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (rn(r, t), document.activeElement !== n)
      return;
}, os = qb(), Kb = () => so.value > Pa.value, Ar = () => {
  Ma.value = "pointer", so.value = window.performance.now();
}, as = () => {
  Ma.value = "keyboard", so.value = window.performance.now();
}, Ub = () => (Ce(() => {
  Ir === 0 && (document.addEventListener("mousedown", Ar), document.addEventListener("touchstart", Ar), document.addEventListener("keydown", as)), Ir++;
}), qe(() => {
  Ir--, Ir <= 0 && (document.removeEventListener("mousedown", Ar), document.removeEventListener("touchstart", Ar), document.removeEventListener("keydown", as));
}), {
  focusReason: Ma,
  lastUserFocusTimestamp: so,
  lastAutomatedFocusTimestamp: Pa
}), Mr = (e) => new CustomEvent(Bb, {
  ...Db,
  detail: e
}), Gb = B({
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
    es,
    ts,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = $();
    let r, o;
    const { focusReason: a } = Ub();
    qg((g) => {
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
      const { key: c, altKey: h, ctrlKey: v, metaKey: w, currentTarget: _, shiftKey: T } = g, { loop: I } = e, E = c === ze.tab && !h && !v && !w, O = document.activeElement;
      if (E && O) {
        const M = _, [H, V] = Hb(M);
        if (H && V) {
          if (!T && O === V) {
            const C = Mr({
              focusReason: a.value
            });
            t("focusout-prevented", C), C.defaultPrevented || (g.preventDefault(), I && rn(H, !0));
          } else if (T && [H, M].includes(O)) {
            const C = Mr({
              focusReason: a.value
            });
            t("focusout-prevented", C), C.defaultPrevented || (g.preventDefault(), I && rn(V, !0));
          }
        } else if (O === M) {
          const C = Mr({
            focusReason: a.value
          });
          t("focusout-prevented", C), C.defaultPrevented || g.preventDefault();
        }
      }
    };
    Be(jb, {
      focusTrapRef: n,
      onKeydown: s
    }), U(() => e.focusTrapEl, (g) => {
      g && (n.value = g);
    }, { immediate: !0 }), U([n], ([g], [c]) => {
      g && (g.addEventListener("keydown", s), g.addEventListener("focusin", f), g.addEventListener("focusout", d)), c && (c.removeEventListener("keydown", s), c.removeEventListener("focusin", f), c.removeEventListener("focusout", d));
    });
    const l = (g) => {
      t(es, g);
    }, u = (g) => t(ts, g), f = (g) => {
      const c = p(n);
      if (!c)
        return;
      const h = g.target, v = g.relatedTarget, w = h && c.contains(h);
      e.trapped || v && c.contains(v) || (r = v), w && t("focusin", g), !i.paused && e.trapped && (w ? o = h : rn(o, !0));
    }, d = (g) => {
      const c = p(n);
      if (!(i.paused || !c))
        if (e.trapped) {
          const h = g.relatedTarget;
          !Fn(h) && !c.contains(h) && setTimeout(() => {
            if (!i.paused && e.trapped) {
              const v = Mr({
                focusReason: a.value
              });
              t("focusout-prevented", v), v.defaultPrevented || rn(o, !0);
            }
          }, 0);
        } else {
          const h = g.target;
          h && c.contains(h) || t("focusout", g);
        }
    };
    async function m() {
      await me();
      const g = p(n);
      if (g) {
        os.push(i);
        const c = g.contains(document.activeElement) ? r : document.activeElement;
        if (r = c, !g.contains(c)) {
          const v = new Event(Co, Xi);
          g.addEventListener(Co, l), g.dispatchEvent(v), v.defaultPrevented || me(() => {
            let w = e.focusStartEl;
            Ae(w) || (rn(w), document.activeElement !== w && (w = "first")), w === "first" && Wb(Ql(g), !0), (document.activeElement === c || w === "container") && rn(g);
          });
        }
      }
    }
    function b() {
      const g = p(n);
      if (g) {
        g.removeEventListener(Co, l);
        const c = new CustomEvent(xo, {
          ...Xi,
          detail: {
            focusReason: a.value
          }
        });
        g.addEventListener(xo, u), g.dispatchEvent(c), !c.defaultPrevented && (a.value == "keyboard" || !Kb() || g.contains(document.activeElement)) && rn(r ?? document.body), g.removeEventListener(xo, u), os.remove(i);
      }
    }
    return Ce(() => {
      e.trapped && m(), U(() => e.trapped, (g) => {
        g ? m() : b();
      });
    }), qe(() => {
      e.trapped && b();
    }), {
      onKeydown: s
    };
  }
});
function Yb(e, t, n, r, o, a) {
  return oe(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Zb = /* @__PURE__ */ ve(Gb, [["render", Yb], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const Jb = ["fixed", "absolute"], Qb = we({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: re(Array),
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
    values: ao,
    default: "bottom"
  },
  popperOptions: {
    type: re(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Jb,
    default: "absolute"
  }
}), Xl = we({
  ...Qb,
  id: String,
  style: {
    type: re([String, Array, Object])
  },
  className: {
    type: re([String, Array, Object])
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
    type: re([String, Array, Object])
  },
  popperStyle: {
    type: re([String, Array, Object])
  },
  referenceEl: {
    type: re(Object)
  },
  triggerTargetEl: {
    type: re(Object)
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
}), Xb = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, ey = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...ny(e), ...t]
  };
  return ry(a, o == null ? void 0 : o.modifiers), a;
}, ty = (e) => {
  if (Ne)
    return an(e);
};
function ny(e) {
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
function ry(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const oy = 0, ay = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = ae(Aa, void 0), a = $(), i = $(), s = y(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = y(() => {
    var v;
    const w = p(a), _ = (v = p(i)) != null ? v : oy;
    return {
      name: "arrow",
      enabled: !lm(w),
      options: {
        element: w,
        padding: _
      }
    };
  }), u = y(() => ({
    onFirstUpdate: () => {
      g();
    },
    ...ey(e, [
      p(l),
      p(s)
    ])
  })), f = y(() => ty(e.referenceEl) || p(r)), { attributes: d, state: m, styles: b, update: g, forceUpdate: c, instanceRef: h } = zg(f, n, u);
  return U(h, (v) => t.value = v), Ce(() => {
    U(() => {
      var v;
      return (v = p(f)) == null ? void 0 : v.getBoundingClientRect();
    }, () => {
      g();
    });
  }), {
    attributes: d,
    arrowRef: a,
    contentRef: n,
    instanceRef: h,
    state: m,
    styles: b,
    role: o,
    forceUpdate: c,
    update: g
  };
}, iy = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Xg(), a = fe("popper"), i = y(() => p(t).popper), s = $(e.zIndex || o()), l = y(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = y(() => [
    { zIndex: p(s) },
    p(n).popper,
    e.popperStyle || {}
  ]), f = y(() => r.value === "dialog" ? "false" : void 0), d = y(() => p(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: d,
    contentAttrs: i,
    contentClass: l,
    contentStyle: u,
    contentZIndex: s,
    updateZIndex: () => {
      s.value = e.zIndex || o();
    }
  };
}, sy = (e, t) => {
  const n = $(!1), r = $();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var f;
      ((f = u.detail) == null ? void 0 : f.focusReason) !== "pointer" && (r.value = "first", t("blur"));
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
}, ly = B({
  name: "ElPopperContent"
}), uy = /* @__PURE__ */ B({
  ...ly,
  props: Xl,
  emits: Xb,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: i,
      onFocusAfterTrapped: s,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = sy(r, n), { attributes: d, arrowRef: m, contentRef: b, styles: g, instanceRef: c, role: h, update: v } = ay(r), {
      ariaModal: w,
      arrowStyle: _,
      contentAttrs: T,
      contentClass: I,
      contentStyle: E,
      updateZIndex: O
    } = iy(r, {
      styles: g,
      attributes: d,
      role: h
    }), M = ae(Sn, void 0), H = $();
    Be(Ul, {
      arrowStyle: _,
      arrowRef: m,
      arrowOffset: H
    }), M && (M.addInputId || M.removeInputId) && Be(Sn, {
      ...M,
      addInputId: or,
      removeInputId: or
    });
    let V;
    const P = (L = !0) => {
      v(), L && O();
    }, C = () => {
      P(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return Ce(() => {
      U(() => r.triggerTargetEl, (L, Y) => {
        V == null || V(), V = void 0;
        const G = p(L || b.value), ie = p(Y || b.value);
        lr(G) && (V = U([h, () => r.ariaLabel, w, () => r.id], (F) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((se, te) => {
            Fn(F[te]) ? G.removeAttribute(se) : G.setAttribute(se, F[te]);
          });
        }, { immediate: !0 })), ie !== G && lr(ie) && ["role", "aria-label", "aria-modal", "id"].forEach((F) => {
          ie.removeAttribute(F);
        });
      }, { immediate: !0 }), U(() => r.visible, C, { immediate: !0 });
    }), qe(() => {
      V == null || V(), V = void 0;
    }), t({
      popperContentRef: b,
      popperInstanceRef: c,
      updatePopper: P,
      contentStyle: E
    }), (L, Y) => (x(), z("div", yt({
      ref_key: "contentRef",
      ref: b
    }, p(T), {
      style: p(E),
      class: p(I),
      tabindex: "-1",
      onMouseenter: Y[0] || (Y[0] = (G) => L.$emit("mouseenter", G)),
      onMouseleave: Y[1] || (Y[1] = (G) => L.$emit("mouseleave", G))
    }), [
      N(p(Zb), {
        trapped: p(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": p(b),
        "focus-start-el": p(o),
        onFocusAfterTrapped: p(s),
        onFocusAfterReleased: p(i),
        onFocusin: p(l),
        onFocusoutPrevented: p(u),
        onReleaseRequested: p(f)
      }, {
        default: q(() => [
          oe(L.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var cy = /* @__PURE__ */ ve(uy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const fy = _t(Ab), ka = Symbol("elTooltip"), Qe = we({
  ...Ug,
  ...Xl,
  appendTo: {
    type: re([String, Object])
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
    type: re(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean
}), dr = we({
  ...Jl,
  disabled: Boolean,
  trigger: {
    type: re([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: re(Array),
    default: () => [ze.enter, ze.space]
  }
}), {
  useModelToggleProps: dy,
  useModelToggleEmits: py,
  useModelToggle: vy
} = Tl("visible"), my = we({
  ...Gl,
  ...dy,
  ...Qe,
  ...dr,
  ...Yl,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), hy = [
  ...py,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], gy = (e, t) => Qn(e) ? e.includes(t) : e === t, In = (e, t, n) => (r) => {
  gy(p(e), t) && n(r);
}, by = B({
  name: "ElTooltipTrigger"
}), yy = /* @__PURE__ */ B({
  ...by,
  props: dr,
  setup(e, { expose: t }) {
    const n = e, r = fe("tooltip"), { controlled: o, id: a, open: i, onOpen: s, onClose: l, onToggle: u } = ae(ka, void 0), f = $(null), d = () => {
      if (p(o) || n.disabled)
        return !0;
    }, m = lt(n, "trigger"), b = Wt(d, In(m, "hover", s)), g = Wt(d, In(m, "hover", l)), c = Wt(d, In(m, "click", (T) => {
      T.button === 0 && u(T);
    })), h = Wt(d, In(m, "focus", s)), v = Wt(d, In(m, "focus", l)), w = Wt(d, In(m, "contextmenu", (T) => {
      T.preventDefault(), u(T);
    })), _ = Wt(d, (T) => {
      const { code: I } = T;
      n.triggerKeys.includes(I) && (T.preventDefault(), u(T));
    });
    return t({
      triggerRef: f
    }), (T, I) => (x(), Q(p(Rb), {
      id: p(a),
      "virtual-ref": T.virtualRef,
      open: p(i),
      "virtual-triggering": T.virtualTriggering,
      class: R(p(r).e("trigger")),
      onBlur: p(v),
      onClick: p(c),
      onContextmenu: p(w),
      onFocus: p(h),
      onMouseenter: p(b),
      onMouseleave: p(g),
      onKeydown: p(_)
    }, {
      default: q(() => [
        oe(T.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var wy = /* @__PURE__ */ ve(yy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const Sy = B({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Ey = /* @__PURE__ */ B({
  ...Sy,
  props: Qe,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = Dl(), o = fe("tooltip"), a = $(null), i = $(!1), {
      controlled: s,
      id: l,
      open: u,
      trigger: f,
      onClose: d,
      onOpen: m,
      onShow: b,
      onHide: g,
      onBeforeShow: c,
      onBeforeHide: h
    } = ae(ka, void 0), v = y(() => n.transition || `${o.namespace.value}-fade-in-linear`), w = y(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    qe(() => {
      i.value = !0;
    });
    const _ = y(() => p(w) ? !0 : p(u)), T = y(() => n.disabled ? !1 : p(u)), I = y(() => n.appendTo || r.value), E = y(() => {
      var F;
      return (F = n.style) != null ? F : {};
    }), O = y(() => !p(u)), M = () => {
      g();
    }, H = () => {
      if (p(s))
        return !0;
    }, V = Wt(H, () => {
      n.enterable && p(f) === "hover" && m();
    }), P = Wt(H, () => {
      p(f) === "hover" && d();
    }), C = () => {
      var F, se;
      (se = (F = a.value) == null ? void 0 : F.updatePopper) == null || se.call(F), c == null || c();
    }, L = () => {
      h == null || h();
    }, Y = () => {
      b(), ie = Gu(y(() => {
        var F;
        return (F = a.value) == null ? void 0 : F.popperContentRef;
      }), () => {
        if (p(s))
          return;
        p(f) !== "hover" && d();
      });
    }, G = () => {
      n.virtualTriggering || d();
    };
    let ie;
    return U(() => p(u), (F) => {
      F || ie == null || ie();
    }, {
      flush: "post"
    }), U(() => n.content, () => {
      var F, se;
      (se = (F = a.value) == null ? void 0 : F.updatePopper) == null || se.call(F);
    }), t({
      contentRef: a
    }), (F, se) => (x(), Q($u, {
      disabled: !F.teleported,
      to: p(I)
    }, [
      N(yn, {
        name: p(v),
        onAfterLeave: M,
        onBeforeEnter: C,
        onAfterEnter: Y,
        onBeforeLeave: L
      }, {
        default: q(() => [
          p(_) ? It((x(), Q(p(cy), yt({
            key: 0,
            id: p(l),
            ref_key: "contentRef",
            ref: a
          }, F.$attrs, {
            "aria-label": F.ariaLabel,
            "aria-hidden": p(O),
            "boundaries-padding": F.boundariesPadding,
            "fallback-placements": F.fallbackPlacements,
            "gpu-acceleration": F.gpuAcceleration,
            offset: F.offset,
            placement: F.placement,
            "popper-options": F.popperOptions,
            strategy: F.strategy,
            effect: F.effect,
            enterable: F.enterable,
            pure: F.pure,
            "popper-class": F.popperClass,
            "popper-style": [F.popperStyle, p(E)],
            "reference-el": F.referenceEl,
            "trigger-target-el": F.triggerTargetEl,
            visible: p(T),
            "z-index": F.zIndex,
            onMouseenter: p(V),
            onMouseleave: p(P),
            onBlur: G,
            onClose: p(d)
          }), {
            default: q(() => [
              i.value ? ee("v-if", !0) : oe(F.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [En, p(T)]
          ]) : ee("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var Oy = /* @__PURE__ */ ve(Ey, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const _y = ["innerHTML"], Ty = { key: 1 }, $y = B({
  name: "ElTooltip"
}), Cy = /* @__PURE__ */ B({
  ...$y,
  props: my,
  emits: hy,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    Kg();
    const o = $a(), a = $(), i = $(), s = () => {
      var v;
      const w = p(a);
      w && ((v = w.popperInstanceRef) == null || v.update());
    }, l = $(!1), u = $(), { show: f, hide: d, hasUpdateHandler: m } = vy({
      indicator: l,
      toggleReason: u
    }), { onOpen: b, onClose: g } = Gg({
      showAfter: lt(r, "showAfter"),
      hideAfter: lt(r, "hideAfter"),
      autoClose: lt(r, "autoClose"),
      open: f,
      close: d
    }), c = y(() => vr(r.visible) && !m.value);
    Be(ka, {
      controlled: c,
      id: o,
      open: Bs(l),
      trigger: lt(r, "trigger"),
      onOpen: (v) => {
        b(v);
      },
      onClose: (v) => {
        g(v);
      },
      onToggle: (v) => {
        p(l) ? g(v) : b(v);
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
    }), U(() => r.disabled, (v) => {
      v && l.value && (l.value = !1);
    });
    const h = (v) => {
      var w, _;
      const T = (_ = (w = i.value) == null ? void 0 : w.contentRef) == null ? void 0 : _.popperContentRef, I = (v == null ? void 0 : v.relatedTarget) || document.activeElement;
      return T && T.contains(I);
    };
    return Cu(() => l.value && d()), t({
      popperRef: a,
      contentRef: i,
      isFocusInsideContent: h,
      updatePopper: s,
      onOpen: b,
      onClose: g,
      hide: d
    }), (v, w) => (x(), Q(p(fy), {
      ref_key: "popperRef",
      ref: a,
      role: v.role
    }, {
      default: q(() => [
        N(wy, {
          disabled: v.disabled,
          trigger: v.trigger,
          "trigger-keys": v.triggerKeys,
          "virtual-ref": v.virtualRef,
          "virtual-triggering": v.virtualTriggering
        }, {
          default: q(() => [
            v.$slots.default ? oe(v.$slots, "default", { key: 0 }) : ee("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        N(Oy, {
          ref_key: "contentRef",
          ref: i,
          "aria-label": v.ariaLabel,
          "boundaries-padding": v.boundariesPadding,
          content: v.content,
          disabled: v.disabled,
          effect: v.effect,
          enterable: v.enterable,
          "fallback-placements": v.fallbackPlacements,
          "hide-after": v.hideAfter,
          "gpu-acceleration": v.gpuAcceleration,
          offset: v.offset,
          persistent: v.persistent,
          "popper-class": v.popperClass,
          "popper-style": v.popperStyle,
          placement: v.placement,
          "popper-options": v.popperOptions,
          pure: v.pure,
          "raw-content": v.rawContent,
          "reference-el": v.referenceEl,
          "trigger-target-el": v.triggerTargetEl,
          "show-after": v.showAfter,
          strategy: v.strategy,
          teleported: v.teleported,
          transition: v.transition,
          "virtual-triggering": v.virtualTriggering,
          "z-index": v.zIndex,
          "append-to": v.appendTo
        }, {
          default: q(() => [
            oe(v.$slots, "content", {}, () => [
              v.rawContent ? (x(), z("span", {
                key: 0,
                innerHTML: v.content
              }, null, 8, _y)) : (x(), z("span", Ty, $e(v.content), 1))
            ]),
            v.showArrow ? (x(), Q(p(kb), {
              key: 0,
              "arrow-offset": v.arrowOffset
            }, null, 8, ["arrow-offset"])) : ee("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var xy = /* @__PURE__ */ ve(Cy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const lo = _t(xy), eu = Symbol("buttonGroupContextKey"), Iy = (e, t) => {
  ma({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, y(() => e.type === "text"));
  const n = ae(eu, void 0), r = a0("button"), { form: o } = xa(), a = Kn(y(() => n == null ? void 0 : n.size)), i = Ca(), s = $(), l = ra(), u = y(() => e.type || (n == null ? void 0 : n.type) || ""), f = y(() => {
    var g, c, h;
    return (h = (c = e.autoInsertSpace) != null ? c : (g = r.value) == null ? void 0 : g.autoInsertSpace) != null ? h : !1;
  }), d = y(() => e.tag === "button" ? {
    ariaDisabled: i.value || e.loading,
    disabled: i.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), m = y(() => {
    var g;
    const c = (g = l.default) == null ? void 0 : g.call(l);
    if (f.value && (c == null ? void 0 : c.length) === 1) {
      const h = c[0];
      if ((h == null ? void 0 : h.type) === js) {
        const v = h.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(v.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: i,
    _size: a,
    _type: u,
    _ref: s,
    _props: d,
    shouldAddSpace: m,
    handleClick: (g) => {
      e.nativeType === "reset" && (o == null || o.resetFields()), t("click", g);
    }
  };
}, Ay = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], My = ["button", "submit", "reset"], Xo = we({
  size: zl,
  disabled: Boolean,
  type: {
    type: String,
    values: Ay,
    default: ""
  },
  icon: {
    type: bt
  },
  nativeType: {
    type: String,
    values: My,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: bt,
    default: () => yl
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: re([String, Object]),
    default: "button"
  }
}), Py = {
  click: (e) => e instanceof MouseEvent
};
function Re(e, t) {
  ky(e) && (e = "100%");
  var n = Ly(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Pr(e) {
  return Math.min(1, Math.max(0, e));
}
function ky(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Ly(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function tu(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function kr(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function mn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Fy(e, t, n) {
  return {
    r: Re(e, 255) * 255,
    g: Re(t, 255) * 255,
    b: Re(n, 255) * 255
  };
}
function is(e, t, n) {
  e = Re(e, 255), t = Re(t, 255), n = Re(n, 255);
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
function Io(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Ny(e, t, n) {
  var r, o, a;
  if (e = Re(e, 360), t = Re(t, 100), n = Re(n, 100), t === 0)
    o = n, a = n, r = n;
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - i;
    r = Io(s, i, e + 1 / 3), o = Io(s, i, e), a = Io(s, i, e - 1 / 3);
  }
  return { r: r * 255, g: o * 255, b: a * 255 };
}
function ss(e, t, n) {
  e = Re(e, 255), t = Re(t, 255), n = Re(n, 255);
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
function Ry(e, t, n) {
  e = Re(e, 360) * 6, t = Re(t, 100), n = Re(n, 100);
  var r = Math.floor(e), o = e - r, a = n * (1 - t), i = n * (1 - o * t), s = n * (1 - (1 - o) * t), l = r % 6, u = [n, i, a, a, s, n][l], f = [s, n, n, i, a, a][l], d = [a, a, s, n, n, i][l];
  return { r: u * 255, g: f * 255, b: d * 255 };
}
function ls(e, t, n, r) {
  var o = [
    mn(Math.round(e).toString(16)),
    mn(Math.round(t).toString(16)),
    mn(Math.round(n).toString(16))
  ];
  return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function By(e, t, n, r, o) {
  var a = [
    mn(Math.round(e).toString(16)),
    mn(Math.round(t).toString(16)),
    mn(Math.round(n).toString(16)),
    mn(Dy(r))
  ];
  return o && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function Dy(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function us(e) {
  return Je(e) / 255;
}
function Je(e) {
  return parseInt(e, 16);
}
function jy(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var ea = {
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
function zy(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, o = null, a = null, i = !1, s = !1;
  return typeof e == "string" && (e = qy(e)), typeof e == "object" && (Vt(e.r) && Vt(e.g) && Vt(e.b) ? (t = Fy(e.r, e.g, e.b), i = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Vt(e.h) && Vt(e.s) && Vt(e.v) ? (r = kr(e.s), o = kr(e.v), t = Ry(e.h, r, o), i = !0, s = "hsv") : Vt(e.h) && Vt(e.s) && Vt(e.l) && (r = kr(e.s), a = kr(e.l), t = Ny(e.h, r, a), i = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = tu(n), {
    ok: i,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var Hy = "[-\\+]?\\d+%?", Vy = "[-\\+]?\\d*\\.\\d+%?", sn = "(?:".concat(Vy, ")|(?:").concat(Hy, ")"), Ao = "[\\s|\\(]+(".concat(sn, ")[,|\\s]+(").concat(sn, ")[,|\\s]+(").concat(sn, ")\\s*\\)?"), Mo = "[\\s|\\(]+(".concat(sn, ")[,|\\s]+(").concat(sn, ")[,|\\s]+(").concat(sn, ")[,|\\s]+(").concat(sn, ")\\s*\\)?"), vt = {
  CSS_UNIT: new RegExp(sn),
  rgb: new RegExp("rgb" + Ao),
  rgba: new RegExp("rgba" + Mo),
  hsl: new RegExp("hsl" + Ao),
  hsla: new RegExp("hsla" + Mo),
  hsv: new RegExp("hsv" + Ao),
  hsva: new RegExp("hsva" + Mo),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function qy(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (ea[e])
    e = ea[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = vt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = vt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = vt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = vt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = vt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = vt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = vt.hex8.exec(e), n ? {
    r: Je(n[1]),
    g: Je(n[2]),
    b: Je(n[3]),
    a: us(n[4]),
    format: t ? "name" : "hex8"
  } : (n = vt.hex6.exec(e), n ? {
    r: Je(n[1]),
    g: Je(n[2]),
    b: Je(n[3]),
    format: t ? "name" : "hex"
  } : (n = vt.hex4.exec(e), n ? {
    r: Je(n[1] + n[1]),
    g: Je(n[2] + n[2]),
    b: Je(n[3] + n[3]),
    a: us(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = vt.hex3.exec(e), n ? {
    r: Je(n[1] + n[1]),
    g: Je(n[2] + n[2]),
    b: Je(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Vt(e) {
  return !!vt.CSS_UNIT.exec(String(e));
}
var nu = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = jy(t)), this.originalInput = t;
      var o = zy(t);
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
      return this.a = tu(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = ss(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = ss(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = is(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = is(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), ls(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), By(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(Re(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Re(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + ls(this.r, this.g, this.b, !1), n = 0, r = Object.entries(ea); n < r.length; n++) {
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
      return n.l += t / 100, n.l = Pr(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Pr(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Pr(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Pr(n.s), new e(n);
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
);
function nn(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function Wy(e) {
  const t = Ca(), n = fe("button");
  return y(() => {
    let r = {};
    const o = e.color;
    if (o) {
      const a = new nu(o), i = e.dark ? a.tint(20).toString() : nn(a, 20);
      if (e.plain)
        r = n.cssVarBlock({
          "bg-color": e.dark ? nn(a, 90) : a.tint(90).toString(),
          "text-color": o,
          "border-color": e.dark ? nn(a, 50) : a.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": o,
          "hover-border-color": o,
          "active-bg-color": i,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": i
        }), t.value && (r[n.cssVarBlockName("disabled-bg-color")] = e.dark ? nn(a, 90) : a.tint(90).toString(), r[n.cssVarBlockName("disabled-text-color")] = e.dark ? nn(a, 50) : a.tint(50).toString(), r[n.cssVarBlockName("disabled-border-color")] = e.dark ? nn(a, 80) : a.tint(80).toString());
      else {
        const s = e.dark ? nn(a, 30) : a.tint(30).toString(), l = a.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (r = n.cssVarBlock({
          "bg-color": o,
          "text-color": l,
          "border-color": o,
          "hover-bg-color": s,
          "hover-text-color": l,
          "hover-border-color": s,
          "active-bg-color": i,
          "active-border-color": i
        }), t.value) {
          const u = e.dark ? nn(a, 50) : a.tint(50).toString();
          r[n.cssVarBlockName("disabled-bg-color")] = u, r[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, r[n.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return r;
  });
}
const Ky = B({
  name: "ElButton"
}), Uy = /* @__PURE__ */ B({
  ...Ky,
  props: Xo,
  emits: Py,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = Wy(r), a = fe("button"), { _ref: i, _size: s, _type: l, _disabled: u, _props: f, shouldAddSpace: d, handleClick: m } = Iy(r, n);
    return t({
      ref: i,
      size: s,
      type: l,
      disabled: u,
      shouldAddSpace: d
    }), (b, g) => (x(), Q(ht(b.tag), yt({
      ref_key: "_ref",
      ref: i
    }, p(f), {
      class: [
        p(a).b(),
        p(a).m(p(l)),
        p(a).m(p(s)),
        p(a).is("disabled", p(u)),
        p(a).is("loading", b.loading),
        p(a).is("plain", b.plain),
        p(a).is("round", b.round),
        p(a).is("circle", b.circle),
        p(a).is("text", b.text),
        p(a).is("link", b.link),
        p(a).is("has-bg", b.bg)
      ],
      style: p(o),
      onClick: p(m)
    }), {
      default: q(() => [
        b.loading ? (x(), z(Le, { key: 0 }, [
          b.$slots.loading ? oe(b.$slots, "loading", { key: 0 }) : (x(), Q(p(st), {
            key: 1,
            class: R(p(a).is("loading"))
          }, {
            default: q(() => [
              (x(), Q(ht(b.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : b.icon || b.$slots.icon ? (x(), Q(p(st), { key: 1 }, {
          default: q(() => [
            b.icon ? (x(), Q(ht(b.icon), { key: 0 })) : oe(b.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : ee("v-if", !0),
        b.$slots.default ? (x(), z("span", {
          key: 2,
          class: R({ [p(a).em("text", "expand")]: p(d) })
        }, [
          oe(b.$slots, "default")
        ], 2)) : ee("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var Gy = /* @__PURE__ */ ve(Uy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const Yy = {
  size: Xo.size,
  type: Xo.type
}, Zy = B({
  name: "ElButtonGroup"
}), Jy = /* @__PURE__ */ B({
  ...Zy,
  props: Yy,
  setup(e) {
    const t = e;
    Be(eu, wt({
      size: lt(t, "size"),
      type: lt(t, "type")
    }));
    const n = fe("button");
    return (r, o) => (x(), z("div", {
      class: R(`${p(n).b("group")}`)
    }, [
      oe(r.$slots, "default")
    ], 2));
  }
});
var ru = /* @__PURE__ */ ve(Jy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const Qy = _t(Gy, {
  ButtonGroup: ru
});
Tn(ru);
var Lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Xy(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const on = /* @__PURE__ */ new Map();
let cs;
Ne && (document.addEventListener("mousedown", (e) => cs = e), document.addEventListener("mouseup", (e) => {
  for (const t of on.values())
    for (const { documentHandler: n } of t)
      n(e, cs);
}));
function fs(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : lr(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, i = r.target, s = o == null ? void 0 : o.target, l = !t || !t.instance, u = !i || !s, f = e.contains(i) || e.contains(s), d = e === i, m = n.length && n.some((g) => g == null ? void 0 : g.contains(i)) || n.length && n.includes(s), b = a && (a.contains(i) || a.contains(s));
    l || u || f || d || m || b || t.value(r, o);
  };
}
const e1 = {
  beforeMount(e, t) {
    on.has(e) || on.set(e, []), on.get(e).push({
      documentHandler: fs(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    on.has(e) || on.set(e, []);
    const n = on.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: fs(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    on.delete(e);
  }
}, ou = we({
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
    values: mr,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), t1 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, n1 = B({
  name: "ElTag"
}), r1 = /* @__PURE__ */ B({
  ...n1,
  props: ou,
  emits: t1,
  setup(e, { emit: t }) {
    const n = e, r = Kn(), o = fe("tag"), a = y(() => {
      const { type: l, hit: u, effect: f, closable: d, round: m } = n;
      return [
        o.b(),
        o.is("closable", d),
        o.m(l),
        o.m(r.value),
        o.m(f),
        o.is("hit", u),
        o.is("round", m)
      ];
    }), i = (l) => {
      t("close", l);
    }, s = (l) => {
      t("click", l);
    };
    return (l, u) => l.disableTransitions ? (x(), z("span", {
      key: 0,
      class: R(p(a)),
      style: je({ backgroundColor: l.color }),
      onClick: s
    }, [
      W("span", {
        class: R(p(o).e("content"))
      }, [
        oe(l.$slots, "default")
      ], 2),
      l.closable ? (x(), Q(p(st), {
        key: 0,
        class: R(p(o).e("close")),
        onClick: Oe(i, ["stop"])
      }, {
        default: q(() => [
          N(p(Ii))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : ee("v-if", !0)
    ], 6)) : (x(), Q(yn, {
      key: 1,
      name: `${p(o).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: q(() => [
        W("span", {
          class: R(p(a)),
          style: je({ backgroundColor: l.color }),
          onClick: s
        }, [
          W("span", {
            class: R(p(o).e("content"))
          }, [
            oe(l.$slots, "default")
          ], 2),
          l.closable ? (x(), Q(p(st), {
            key: 0,
            class: R(p(o).e("close")),
            onClick: Oe(i, ["stop"])
          }, {
            default: q(() => [
              N(p(Ii))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ee("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var o1 = /* @__PURE__ */ ve(r1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const a1 = _t(o1), i1 = B({
  name: "ElCollapseTransition"
}), s1 = /* @__PURE__ */ B({
  ...i1,
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
    return (o, a) => (x(), Q(yn, yt({
      name: p(t).b()
    }, xu(r)), {
      default: q(() => [
        oe(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
var Hr = /* @__PURE__ */ ve(s1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);
Hr.install = (e) => {
  e.component(Hr.name, Hr);
};
const l1 = Hr, u1 = /* @__PURE__ */ B({
  inheritAttrs: !1
});
function c1(e, t, n, r, o, a) {
  return oe(e.$slots, "default");
}
var f1 = /* @__PURE__ */ ve(u1, [["render", c1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);
const d1 = /* @__PURE__ */ B({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function p1(e, t, n, r, o, a) {
  return oe(e.$slots, "default");
}
var v1 = /* @__PURE__ */ ve(d1, [["render", p1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);
const m1 = "data-el-collection-item", h1 = (e) => {
  const t = `El${e}Collection`, n = `${t}Item`, r = Symbol(t), o = Symbol(n), a = {
    ...f1,
    name: t,
    setup() {
      const s = $(null), l = /* @__PURE__ */ new Map();
      Be(r, {
        itemMap: l,
        getItems: () => {
          const f = p(s);
          if (!f)
            return [];
          const d = Array.from(f.querySelectorAll(`[${m1}]`));
          return [...l.values()].sort((b, g) => d.indexOf(b.ref) - d.indexOf(g.ref));
        },
        collectionRef: s
      });
    }
  }, i = {
    ...v1,
    name: n,
    setup(s, { attrs: l }) {
      const u = $(null), f = ae(r, void 0);
      Be(o, {
        collectionItemRef: u
      }), Ce(() => {
        const d = p(u);
        d && f.itemMap.set(d, {
          ref: d,
          ...l
        });
      }), qe(() => {
        const d = p(u);
        f.itemMap.delete(d);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: r,
    COLLECTION_ITEM_INJECTION_KEY: o,
    ElCollection: a,
    ElCollectionItem: i
  };
}, Po = we({
  trigger: dr.trigger,
  effect: {
    ...Qe.effect,
    default: "light"
  },
  type: {
    type: re(String)
  },
  placement: {
    type: re(String),
    default: "bottom"
  },
  popperOptions: {
    type: re(Object),
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
    type: re([Number, String]),
    default: 0
  },
  maxHeight: {
    type: re([Number, String]),
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
    type: re(Object)
  },
  teleported: Qe.teleported
});
we({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: bt
  }
});
we({
  onKeydown: { type: re(Function) }
});
h1("Dropdown");
let g1 = class {
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
            Nr(t, "mouseleave");
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
}, b1 = class {
  constructor(t, n) {
    this.domNode = t, this.submenu = null, this.submenu = null, this.init(n);
  }
  init(t) {
    this.domNode.setAttribute("tabindex", "0");
    const n = this.domNode.querySelector(`.${t}-menu`);
    n && (this.submenu = new g1(this, n)), this.addListeners();
  }
  addListeners() {
    this.domNode.addEventListener("keydown", (t) => {
      let n = !1;
      switch (t.code) {
        case ze.down: {
          Nr(t.currentTarget, "mouseenter"), this.submenu && this.submenu.gotoSubIndex(0), n = !0;
          break;
        }
        case ze.up: {
          Nr(t.currentTarget, "mouseenter"), this.submenu && this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1), n = !0;
          break;
        }
        case ze.tab: {
          Nr(t.currentTarget, "mouseleave");
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
}, y1 = class {
  constructor(t, n) {
    this.domNode = t, this.init(n);
  }
  init(t) {
    const n = this.domNode.childNodes;
    Array.from(n).forEach((r) => {
      r.nodeType === 1 && new b1(r, t);
    });
  }
};
const w1 = B({
  name: "ElMenuCollapseTransition",
  setup() {
    const e = fe("menu");
    return {
      listeners: {
        onBeforeEnter: (n) => n.style.opacity = "0.2",
        onEnter(n, r) {
          Tr(n, `${e.namespace.value}-opacity-transition`), n.style.opacity = "1", r();
        },
        onAfterEnter(n) {
          Oo(n, `${e.namespace.value}-opacity-transition`), n.style.opacity = "";
        },
        onBeforeLeave(n) {
          n.dataset || (n.dataset = {}), mm(n, e.m("collapse")) ? (Oo(n, e.m("collapse")), n.dataset.oldOverflow = n.style.overflow, n.dataset.scrollWidth = n.clientWidth.toString(), Tr(n, e.m("collapse"))) : (Tr(n, e.m("collapse")), n.dataset.oldOverflow = n.style.overflow, n.dataset.scrollWidth = n.clientWidth.toString(), Oo(n, e.m("collapse"))), n.style.width = `${n.scrollWidth}px`, n.style.overflow = "hidden";
        },
        onLeave(n) {
          Tr(n, "horizontal-collapse-transition"), n.style.width = `${n.dataset.scrollWidth}px`;
        }
      }
    };
  }
});
function S1(e, t, n, r, o, a) {
  return x(), Q(yn, yt({ mode: "out-in" }, e.listeners), {
    default: q(() => [
      oe(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
var E1 = /* @__PURE__ */ ve(w1, [["render", S1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);
function au(e, t) {
  const n = y(() => {
    let o = e.parent;
    const a = [t.value];
    for (; o.type.name !== "ElMenu"; )
      o.props.index && a.unshift(o.props.index), o = o.parent;
    return a;
  });
  return {
    parentMenu: y(() => {
      let o = e.parent;
      for (; o && !["ElMenu", "ElSubMenu"].includes(o.type.name); )
        o = o.parent;
      return o;
    }),
    indexPath: n
  };
}
function O1(e) {
  return y(() => {
    const n = e.backgroundColor;
    return n ? new nu(n).shade(20).toString() : "";
  });
}
const iu = (e, t) => {
  const n = fe("menu");
  return y(() => n.cssVarBlock({
    "text-color": e.textColor || "",
    "hover-text-color": e.textColor || "",
    "bg-color": e.backgroundColor || "",
    "hover-bg-color": O1(e).value || "",
    "active-color": e.activeTextColor || "",
    level: `${t}`
  }));
}, _1 = we({
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
    type: bt
  },
  expandOpenIcon: {
    type: bt
  },
  collapseCloseIcon: {
    type: bt
  },
  collapseOpenIcon: {
    type: bt
  }
}), Fr = "ElSubMenu";
var La = B({
  name: Fr,
  props: _1,
  setup(e, { slots: t, expose: n }) {
    ma({
      from: "popper-append-to-body",
      replacement: "teleported",
      scope: Fr,
      version: "2.3.0",
      ref: "https://element-plus.org/en-US/component/menu.html#submenu-attributes"
    }, y(() => e.popperAppendToBody !== void 0));
    const r = Ve(), { indexPath: o, parentMenu: a } = au(r, y(() => e.index)), i = fe("menu"), s = fe("sub-menu"), l = ae("rootMenu");
    l || Nn(Fr, "can not inject root menu");
    const u = ae(`subMenu:${a.value.uid}`);
    u || Nn(Fr, "can not inject sub menu");
    const f = $({}), d = $({});
    let m;
    const b = $(!1), g = $(), c = $(null), h = y(() => P.value === "horizontal" && w.value ? "bottom-start" : "right-start"), v = y(() => P.value === "horizontal" && w.value || P.value === "vertical" && !l.props.collapse ? e.expandCloseIcon && e.expandOpenIcon ? E.value ? e.expandOpenIcon : e.expandCloseIcon : bl : e.collapseCloseIcon && e.collapseOpenIcon ? E.value ? e.collapseOpenIcon : e.collapseCloseIcon : Cm), w = y(() => u.level === 0), _ = y(() => {
      var Z;
      const ue = (Z = e.teleported) != null ? Z : e.popperAppendToBody;
      return ue === void 0 ? w.value : ue;
    }), T = y(() => l.props.collapse ? `${i.namespace.value}-zoom-in-left` : `${i.namespace.value}-zoom-in-top`), I = y(() => P.value === "horizontal" && w.value ? [
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
    ]), E = y(() => l.openedMenus.includes(e.index)), O = y(() => {
      let Z = !1;
      return Object.values(f.value).forEach((ue) => {
        ue.active && (Z = !0);
      }), Object.values(d.value).forEach((ue) => {
        ue.active && (Z = !0);
      }), Z;
    }), M = y(() => l.props.backgroundColor || ""), H = y(() => l.props.activeTextColor || ""), V = y(() => l.props.textColor || ""), P = y(() => l.props.mode), C = wt({
      index: e.index,
      indexPath: o,
      active: O
    }), L = iu(l.props, u.level + 1), Y = y(() => P.value !== "horizontal" ? {
      color: V.value
    } : {
      borderBottomColor: O.value ? l.props.activeTextColor ? H.value : "" : "transparent",
      color: O.value ? H.value : V.value
    }), G = () => {
      var Z, ue, le;
      return (le = (ue = (Z = c.value) == null ? void 0 : Z.popperRef) == null ? void 0 : ue.popperInstanceRef) == null ? void 0 : le.destroy();
    }, ie = (Z) => {
      Z || G();
    }, F = () => {
      l.props.menuTrigger === "hover" && l.props.mode === "horizontal" || l.props.collapse && l.props.mode === "vertical" || e.disabled || l.handleSubMenuClick({
        index: e.index,
        indexPath: o.value,
        active: O.value
      });
    }, se = (Z, ue = e.showTimeout) => {
      var le;
      Z.type !== "focus" && (l.props.menuTrigger === "click" && l.props.mode === "horizontal" || !l.props.collapse && l.props.mode === "vertical" || e.disabled || (u.mouseInChild.value = !0, m == null || m(), { stop: m } = Ha(() => {
        l.openMenu(e.index, o.value);
      }, ue), _.value && ((le = a.value.vnode.el) == null || le.dispatchEvent(new MouseEvent("mouseenter")))));
    }, te = (Z = !1) => {
      var ue, le;
      l.props.menuTrigger === "click" && l.props.mode === "horizontal" || !l.props.collapse && l.props.mode === "vertical" || (m == null || m(), u.mouseInChild.value = !1, { stop: m } = Ha(() => !b.value && l.closeMenu(e.index, o.value), e.hideTimeout), _.value && Z && ((ue = r.parent) == null ? void 0 : ue.type.name) === "ElSubMenu" && ((le = u.handleMouseleave) == null || le.call(u, !0)));
    };
    U(() => l.props.collapse, (Z) => ie(!!Z));
    {
      const Z = (le) => {
        d.value[le.index] = le;
      }, ue = (le) => {
        delete d.value[le.index];
      };
      Be(`subMenu:${r.uid}`, {
        addSubMenu: Z,
        removeSubMenu: ue,
        handleMouseleave: te,
        mouseInChild: b,
        level: u.level + 1
      });
    }
    return n({
      opened: E
    }), Ce(() => {
      l.addSubMenu(C), u.addSubMenu(C);
    }), qe(() => {
      u.removeSubMenu(C), l.removeSubMenu(C);
    }), () => {
      var Z;
      const ue = [
        (Z = t.title) == null ? void 0 : Z.call(t),
        ke(st, {
          class: s.e("icon-arrow"),
          style: {
            transform: E.value ? e.expandCloseIcon && e.expandOpenIcon || e.collapseCloseIcon && e.collapseOpenIcon && l.props.collapse ? "none" : "rotateZ(180deg)" : "none"
          }
        }, {
          default: () => Ae(v.value) ? ke(r.appContext.components[v.value]) : ke(v.value)
        })
      ], le = l.isMenuPopup ? ke(lo, {
        ref: c,
        visible: E.value,
        effect: "light",
        pure: !0,
        offset: e.popperOffset,
        showArrow: !1,
        persistent: !0,
        popperClass: e.popperClass,
        placement: h.value,
        teleported: _.value,
        fallbackPlacements: I.value,
        transition: T.value,
        gpuAcceleration: !1
      }, {
        content: () => {
          var _e;
          return ke("div", {
            class: [
              i.m(P.value),
              i.m("popup-container"),
              e.popperClass
            ],
            onMouseenter: (xe) => se(xe, 100),
            onMouseleave: () => te(!0),
            onFocus: (xe) => se(xe, 100)
          }, [
            ke("ul", {
              class: [
                i.b(),
                i.m("popup"),
                i.m(`popup-${h.value}`)
              ],
              style: L.value
            }, [(_e = t.default) == null ? void 0 : _e.call(t)])
          ]);
        },
        default: () => ke("div", {
          class: s.e("title"),
          style: [
            Y.value,
            { backgroundColor: M.value }
          ],
          onClick: F
        }, ue)
      }) : ke(Le, {}, [
        ke("div", {
          class: s.e("title"),
          style: [
            Y.value,
            { backgroundColor: M.value }
          ],
          ref: g,
          onClick: F
        }, ue),
        ke(l1, {}, {
          default: () => {
            var _e;
            return It(ke("ul", {
              role: "menu",
              class: [i.b(), i.m("inline")],
              style: L.value
            }, [(_e = t.default) == null ? void 0 : _e.call(t)]), [[En, E.value]]);
          }
        })
      ]);
      return ke("li", {
        class: [
          s.b(),
          s.is("active", O.value),
          s.is("opened", E.value),
          s.is("disabled", e.disabled)
        ],
        role: "menuitem",
        ariaHaspopup: !0,
        ariaExpanded: E.value,
        onMouseenter: se,
        onMouseleave: () => te(!0),
        onFocus: se
      }, [le]);
    };
  }
});
const T1 = we({
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
    type: re(Array),
    default: () => _l([])
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
}), ko = (e) => Array.isArray(e) && e.every((t) => Ae(t)), $1 = {
  close: (e, t) => Ae(e) && ko(t),
  open: (e, t) => Ae(e) && ko(t),
  select: (e, t, n, r) => Ae(e) && ko(t) && Gt(n) && (r === void 0 || r instanceof Promise)
};
var C1 = B({
  name: "ElMenu",
  props: T1,
  emits: $1,
  setup(e, { emit: t, slots: n, expose: r }) {
    const o = Ve(), a = o.appContext.config.globalProperties.$router, i = $(), s = fe("menu"), l = fe("sub-menu"), u = $(-1), f = $(e.defaultOpeneds && !e.collapse ? e.defaultOpeneds.slice(0) : []), d = $(e.defaultActive), m = $({}), b = $({}), g = y(() => e.mode === "horizontal" || e.mode === "vertical" && e.collapse), c = () => {
      const P = d.value && m.value[d.value];
      if (!P || e.mode === "horizontal" || e.collapse)
        return;
      P.indexPath.forEach((L) => {
        const Y = b.value[L];
        Y && h(L, Y.indexPath);
      });
    }, h = (P, C) => {
      f.value.includes(P) || (e.uniqueOpened && (f.value = f.value.filter((L) => C.includes(L))), f.value.push(P), t("open", P, C));
    }, v = (P) => {
      const C = f.value.indexOf(P);
      C !== -1 && f.value.splice(C, 1);
    }, w = (P, C) => {
      v(P), t("close", P, C);
    }, _ = ({
      index: P,
      indexPath: C
    }) => {
      f.value.includes(P) ? w(P, C) : h(P, C);
    }, T = (P) => {
      (e.mode === "horizontal" || e.collapse) && (f.value = []);
      const { index: C, indexPath: L } = P;
      if (!(Fn(C) || Fn(L)))
        if (e.router && a) {
          const Y = P.route || C, G = a.push(Y).then((ie) => (ie || (d.value = C), ie));
          t("select", C, L, { index: C, indexPath: L, route: Y }, G);
        } else
          d.value = C, t("select", C, L, { index: C, indexPath: L });
    }, I = (P) => {
      const C = m.value, L = C[P] || d.value && C[d.value] || C[e.defaultActive];
      L ? d.value = L.index : d.value = P;
    }, E = () => {
      var P, C;
      if (!i.value)
        return -1;
      const L = Array.from((C = (P = i.value) == null ? void 0 : P.childNodes) != null ? C : []).filter((Z) => Z.nodeName !== "#comment" && (Z.nodeName !== "#text" || Z.nodeValue)), Y = 64, G = Number.parseInt(getComputedStyle(i.value).paddingLeft, 10), ie = Number.parseInt(getComputedStyle(i.value).paddingRight, 10), F = i.value.clientWidth - G - ie;
      let se = 0, te = 0;
      return L.forEach((Z, ue) => {
        se += Z.offsetWidth || 0, se <= F - Y && (te = ue + 1);
      }), te === L.length ? -1 : te;
    }, O = (P, C = 33.34) => {
      let L;
      return () => {
        L && clearTimeout(L), L = setTimeout(() => {
          P();
        }, C);
      };
    };
    let M = !0;
    const H = () => {
      const P = () => {
        u.value = -1, me(() => {
          u.value = E();
        });
      };
      M ? P() : O(P)(), M = !1;
    };
    U(() => e.defaultActive, (P) => {
      m.value[P] || (d.value = ""), I(P);
    }), U(() => e.collapse, (P) => {
      P && (f.value = []);
    }), U(m.value, c);
    let V;
    Iu(() => {
      e.mode === "horizontal" && e.ellipsis ? V = Vn(i, H).stop : V == null || V();
    });
    {
      const P = (G) => {
        b.value[G.index] = G;
      }, C = (G) => {
        delete b.value[G.index];
      };
      Be("rootMenu", wt({
        props: e,
        openedMenus: f,
        items: m,
        subMenus: b,
        activeIndex: d,
        isMenuPopup: g,
        addMenuItem: (G) => {
          m.value[G.index] = G;
        },
        removeMenuItem: (G) => {
          delete m.value[G.index];
        },
        addSubMenu: P,
        removeSubMenu: C,
        openMenu: h,
        closeMenu: w,
        handleMenuItemClick: T,
        handleSubMenuClick: _
      })), Be(`subMenu:${o.uid}`, {
        addSubMenu: P,
        removeSubMenu: C,
        mouseInChild: $(!1),
        level: 0
      });
    }
    return Ce(() => {
      e.mode === "horizontal" && new y1(o.vnode.el, s.namespace.value);
    }), r({
      open: (C) => {
        const { indexPath: L } = b.value[C];
        L.forEach((Y) => h(Y, L));
      },
      close: v,
      handleResize: H
    }), () => {
      var P, C;
      let L = (C = (P = n.default) == null ? void 0 : P.call(n)) != null ? C : [];
      const Y = [];
      if (e.mode === "horizontal" && i.value) {
        const F = Br(L), se = u.value === -1 ? F : F.slice(0, u.value), te = u.value === -1 ? [] : F.slice(u.value);
        te != null && te.length && e.ellipsis && (L = se, Y.push(ke(La, {
          index: "sub-menu-more",
          class: l.e("hide-arrow")
        }, {
          title: () => ke(st, {
            class: l.e("icon-more")
          }, { default: () => ke(uh) }),
          default: () => te
        })));
      }
      const G = iu(e, 0), ie = ke("ul", {
        key: String(e.collapse),
        role: "menubar",
        ref: i,
        style: G.value,
        class: {
          [s.b()]: !0,
          [s.m(e.mode)]: !0,
          [s.m("collapse")]: e.collapse
        }
      }, [...L, ...Y]);
      return e.collapseTransition && e.mode === "vertical" ? ke(E1, () => ie) : ie;
    };
  }
});
const x1 = we({
  index: {
    type: re([String, null]),
    default: null
  },
  route: {
    type: re([String, Object])
  },
  disabled: Boolean
}), I1 = {
  click: (e) => Ae(e.index) && Array.isArray(e.indexPath)
}, Lo = "ElMenuItem", A1 = B({
  name: Lo,
  components: {
    ElTooltip: lo
  },
  props: x1,
  emits: I1,
  setup(e, { emit: t }) {
    const n = Ve(), r = ae("rootMenu"), o = fe("menu"), a = fe("menu-item");
    r || Nn(Lo, "can not inject root menu");
    const { parentMenu: i, indexPath: s } = au(n, lt(e, "index")), l = ae(`subMenu:${i.value.uid}`);
    l || Nn(Lo, "can not inject sub menu");
    const u = y(() => e.index === r.activeIndex), f = wt({
      index: e.index,
      indexPath: s,
      active: u
    }), d = () => {
      e.disabled || (r.handleMenuItemClick({
        index: e.index,
        indexPath: s.value,
        route: e.route
      }), t("click", f));
    };
    return Ce(() => {
      l.addSubMenu(f), r.addMenuItem(f);
    }), qe(() => {
      l.removeSubMenu(f), r.removeMenuItem(f);
    }), {
      parentMenu: i,
      rootMenu: r,
      active: u,
      nsMenu: o,
      nsMenuItem: a,
      handleClick: d
    };
  }
});
function M1(e, t, n, r, o, a) {
  const i = qt("el-tooltip");
  return x(), z("li", {
    class: R([
      e.nsMenuItem.b(),
      e.nsMenuItem.is("active", e.active),
      e.nsMenuItem.is("disabled", e.disabled)
    ]),
    role: "menuitem",
    tabindex: "-1",
    onClick: t[0] || (t[0] = (...s) => e.handleClick && e.handleClick(...s))
  }, [
    e.parentMenu.type.name === "ElMenu" && e.rootMenu.props.collapse && e.$slots.title ? (x(), Q(i, {
      key: 0,
      effect: e.rootMenu.props.popperEffect,
      placement: "right",
      "fallback-placements": ["left"],
      persistent: ""
    }, {
      content: q(() => [
        oe(e.$slots, "title")
      ]),
      default: q(() => [
        W("div", {
          class: R(e.nsMenu.be("tooltip", "trigger"))
        }, [
          oe(e.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 8, ["effect"])) : (x(), z(Le, { key: 1 }, [
      oe(e.$slots, "default"),
      oe(e.$slots, "title")
    ], 64))
  ], 2);
}
var su = /* @__PURE__ */ ve(A1, [["render", M1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);
const P1 = {
  title: String
}, k1 = "ElMenuItemGroup", L1 = B({
  name: k1,
  props: P1,
  setup() {
    return {
      ns: fe("menu-item-group")
    };
  }
});
function F1(e, t, n, r, o, a) {
  return x(), z("li", {
    class: R(e.ns.b())
  }, [
    W("div", {
      class: R(e.ns.e("title"))
    }, [
      e.$slots.title ? oe(e.$slots, "title", { key: 1 }) : (x(), z(Le, { key: 0 }, [
        Pn($e(e.title), 1)
      ], 64))
    ], 2),
    W("ul", null, [
      oe(e.$slots, "default")
    ])
  ], 2);
}
var lu = /* @__PURE__ */ ve(L1, [["render", F1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);
const N1 = _t(C1, {
  MenuItem: su,
  MenuItemGroup: lu,
  SubMenu: La
}), Fo = Tn(su);
Tn(lu);
Tn(La);
const uu = Symbol("ElSelectGroup"), uo = Symbol("ElSelect");
function R1(e, t) {
  const n = ae(uo), r = ae(uu, { disabled: !1 }), o = y(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), a = y(() => n.props.multiple ? d(n.props.modelValue, e.value) : m(e.value, n.props.modelValue)), i = y(() => {
    if (n.props.multiple) {
      const c = n.props.modelValue || [];
      return !a.value && c.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = y(() => e.label || (o.value ? "" : e.value)), l = y(() => e.value || e.label || ""), u = y(() => e.disabled || t.groupDisabled || i.value), f = Ve(), d = (c = [], h) => {
    if (o.value) {
      const v = n.props.valueKey;
      return c && c.some((w) => qr(Xe(w, v)) === Xe(h, v));
    } else
      return c && c.includes(h);
  }, m = (c, h) => {
    if (o.value) {
      const { valueKey: v } = n.props;
      return Xe(c, v) === Xe(h, v);
    } else
      return c === h;
  }, b = () => {
    !e.disabled && !r.disabled && (n.hoverIndex = n.optionsArray.indexOf(f.proxy));
  };
  U(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), U(() => e.value, (c, h) => {
    const { remote: v, valueKey: w } = n.props;
    if (Object.is(c, h) || (n.onOptionDestroy(h, f.proxy), n.onOptionCreate(f.proxy)), !e.created && !v) {
      if (w && typeof c == "object" && typeof h == "object" && c[w] === h[w])
        return;
      n.setSelected();
    }
  }), U(() => r.disabled, () => {
    t.groupDisabled = r.disabled;
  }, { immediate: !0 });
  const { queryChange: g } = qr(n);
  return U(g, (c) => {
    const { query: h } = p(c), v = new RegExp(pm(h), "i");
    t.visible = v.test(s.value) || e.created, t.visible || n.filteredOptionsCount--;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: s,
    currentValue: l,
    itemSelected: a,
    isDisabled: u,
    hoverItem: b
  };
}
const B1 = B({
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
    const t = fe("select"), n = y(() => [
      t.be("dropdown", "item"),
      t.is("disabled", p(i)),
      {
        selected: p(a),
        hover: p(f)
      }
    ]), r = wt({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: o, itemSelected: a, isDisabled: i, select: s, hoverItem: l } = R1(e, r), { visible: u, hover: f } = pr(r), d = Ve().proxy;
    s.onOptionCreate(d), qe(() => {
      const b = d.value, { selected: g } = s, h = (s.props.multiple ? g : [g]).some((v) => v.value === d.value);
      me(() => {
        s.cachedOptions.get(b) === d && !h && s.cachedOptions.delete(b);
      }), s.onOptionDestroy(b, d);
    });
    function m() {
      e.disabled !== !0 && r.groupDisabled !== !0 && s.handleOptionSelect(d);
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
      hover: f,
      selectOptionClick: m,
      states: r
    };
  }
});
function D1(e, t, n, r, o, a) {
  return It((x(), z("li", {
    class: R(e.containerKls),
    onMouseenter: t[0] || (t[0] = (...i) => e.hoverItem && e.hoverItem(...i)),
    onClick: t[1] || (t[1] = Oe((...i) => e.selectOptionClick && e.selectOptionClick(...i), ["stop"]))
  }, [
    oe(e.$slots, "default", {}, () => [
      W("span", null, $e(e.currentLabel), 1)
    ])
  ], 34)), [
    [En, e.visible]
  ]);
}
var Fa = /* @__PURE__ */ ve(B1, [["render", D1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const j1 = B({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ae(uo), t = fe("select"), n = y(() => e.props.popperClass), r = y(() => e.props.multiple), o = y(() => e.props.fitInputWidth), a = $("");
    function i() {
      var s;
      a.value = `${(s = e.selectWrapper) == null ? void 0 : s.offsetWidth}px`;
    }
    return Ce(() => {
      i(), Vn(e.selectWrapper, i);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: o
    };
  }
});
function z1(e, t, n, r, o, a) {
  return x(), z("div", {
    class: R([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: je({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    oe(e.$slots, "default")
  ], 6);
}
var H1 = /* @__PURE__ */ ve(j1, [["render", z1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function V1(e) {
  const { t } = ha();
  return wt({
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
const q1 = (e, t, n) => {
  const { t: r } = ha(), o = fe("select");
  ma({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, y(() => e.suffixTransition === !1));
  const a = $(null), i = $(null), s = $(null), l = $(null), u = $(null), f = $(null), d = $(null), m = $(null), b = $(-1), g = Kt({ query: "" }), c = Kt(""), h = $([]);
  let v = 0;
  const { form: w, formItem: _ } = xa(), T = y(() => !e.filterable || e.multiple || !t.visible), I = y(() => e.disabled || (w == null ? void 0 : w.disabled)), E = y(() => {
    const S = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !I.value && t.inputHovering && S;
  }), O = y(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), M = y(() => o.is("reverse", O.value && t.visible && e.suffixTransition)), H = y(() => (w == null ? void 0 : w.statusIcon) && (_ == null ? void 0 : _.validateState) && Sl[_ == null ? void 0 : _.validateState]), V = y(() => e.remote ? 300 : 0), P = y(() => e.loading ? e.loadingText || r("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || r("el.select.noMatch") : t.options.size === 0 ? e.noDataText || r("el.select.noData") : null), C = y(() => {
    const S = Array.from(t.options.values()), A = [];
    return h.value.forEach((D) => {
      const ne = S.findIndex((De) => De.currentLabel === D);
      ne > -1 && A.push(S[ne]);
    }), A.length ? A : S;
  }), L = y(() => Array.from(t.cachedOptions.values())), Y = y(() => {
    const S = C.value.filter((A) => !A.created).some((A) => A.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !S;
  }), G = Kn(), ie = y(() => ["small"].includes(G.value) ? "small" : "default"), F = y({
    get() {
      return t.visible && P.value !== !1;
    },
    set(S) {
      t.visible = S;
    }
  });
  U([() => I.value, () => G.value, () => w == null ? void 0 : w.size], () => {
    me(() => {
      se();
    });
  }), U(() => e.placeholder, (S) => {
    t.cachedPlaceHolder = t.currentPlaceholder = S, e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (t.currentPlaceholder = "");
  }), U(() => e.modelValue, (S, A) => {
    e.multiple && (se(), S && S.length > 0 || i.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", te(t.query))), le(), e.filterable && !e.multiple && (t.inputLength = 20), !xi(S, A) && e.validateEvent && (_ == null || _.validate("change").catch((D) => Fe(D)));
  }, {
    flush: "post",
    deep: !0
  }), U(() => t.visible, (S) => {
    var A, D, ne, De, He;
    S ? ((D = (A = l.value) == null ? void 0 : A.updatePopper) == null || D.call(A), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, (De = (ne = s.value) == null ? void 0 : ne.focus) == null || De.call(ne), e.multiple ? (He = i.value) == null || He.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), te(t.query), !e.multiple && !e.remote && (g.value.query = "", Gn(g), Gn(c)))) : (e.filterable && (et(e.filterMethod) && e.filterMethod(""), et(e.remoteMethod) && e.remoteMethod("")), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, xe(), me(() => {
      i.value && i.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", S);
  }), U(() => t.options.entries(), () => {
    var S, A, D;
    if (!Ne)
      return;
    (A = (S = l.value) == null ? void 0 : S.updatePopper) == null || A.call(S), e.multiple && se();
    const ne = ((D = d.value) == null ? void 0 : D.querySelectorAll("input")) || [];
    Array.from(ne).includes(document.activeElement) || le(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && ue();
  }, {
    flush: "post"
  }), U(() => t.hoverIndex, (S) => {
    gt(S) && S > -1 ? b.value = C.value[S] || {} : b.value = {}, C.value.forEach((A) => {
      A.hover = b.value === A;
    });
  });
  const se = () => {
    me(() => {
      var S, A;
      if (!a.value)
        return;
      const D = a.value.$el.querySelector("input");
      v = v || (D.clientHeight > 0 ? D.clientHeight + 2 : 0);
      const ne = f.value, De = Th(G.value || (w == null ? void 0 : w.size)), He = G.value || De === v || v <= 0 ? De : v;
      !(D.offsetParent === null) && (D.style.height = `${(t.selected.length === 0 ? He : Math.max(ne ? ne.clientHeight + (ne.clientHeight > He ? 6 : 0) : 0, He)) - 2}px`), t.visible && P.value !== !1 && ((A = (S = l.value) == null ? void 0 : S.updatePopper) == null || A.call(S));
    });
  }, te = async (S) => {
    if (!(t.previousQuery === S || t.isOnComposition)) {
      if (t.previousQuery === null && (et(e.filterMethod) || et(e.remoteMethod))) {
        t.previousQuery = S;
        return;
      }
      t.previousQuery = S, me(() => {
        var A, D;
        t.visible && ((D = (A = l.value) == null ? void 0 : A.updatePopper) == null || D.call(A));
      }), t.hoverIndex = -1, e.multiple && e.filterable && me(() => {
        const A = i.value.value.length * 15 + 20;
        t.inputLength = e.collapseTags ? Math.min(50, A) : A, Z(), se();
      }), e.remote && et(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(S)) : et(e.filterMethod) ? (e.filterMethod(S), Gn(c)) : (t.filteredOptionsCount = t.optionsCount, g.value.query = S, Gn(g), Gn(c)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await me(), ue());
    }
  }, Z = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = i.value.value ? "" : t.cachedPlaceHolder);
  }, ue = () => {
    const S = C.value.filter((ne) => ne.visible && !ne.disabled && !ne.states.groupDisabled), A = S.find((ne) => ne.created), D = S[0];
    t.hoverIndex = Rt(C.value, A || D);
  }, le = () => {
    var S;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const D = _e(e.modelValue);
      (S = D.props) != null && S.created ? (t.createdLabel = D.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = D.currentLabel, t.selected = D, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const A = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((D) => {
      A.push(_e(D));
    }), t.selected = A, me(() => {
      se();
    });
  }, _e = (S) => {
    let A;
    const D = go(S).toLowerCase() === "object", ne = go(S).toLowerCase() === "null", De = go(S).toLowerCase() === "undefined";
    for (let Ht = t.cachedOptions.size - 1; Ht >= 0; Ht--) {
      const at = L.value[Ht];
      if (D ? Xe(at.value, e.valueKey) === Xe(S, e.valueKey) : at.value === S) {
        A = {
          value: S,
          currentLabel: at.currentLabel,
          isDisabled: at.isDisabled
        };
        break;
      }
    }
    if (A)
      return A;
    const He = D ? S.label : !ne && !De ? S : "", zt = {
      value: S,
      currentLabel: He
    };
    return e.multiple && (zt.hitState = !1), zt;
  }, xe = () => {
    setTimeout(() => {
      const S = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((A) => C.value.findIndex((D) => Xe(D, S) === Xe(A, S)))) : t.hoverIndex = -1 : t.hoverIndex = C.value.findIndex((A) => $n(A) === $n(t.selected));
    }, 300);
  }, Me = () => {
    var S, A;
    We(), (A = (S = l.value) == null ? void 0 : S.updatePopper) == null || A.call(S), e.multiple && se();
  }, We = () => {
    var S;
    t.inputWidth = (S = a.value) == null ? void 0 : S.$el.offsetWidth;
  }, j = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, te(t.query));
  }, J = Ci(() => {
    j();
  }, V.value), Ee = Ci((S) => {
    te(S.target.value);
  }, V.value), de = (S) => {
    xi(e.modelValue, S) || n.emit(El, S);
  }, he = (S) => {
    if (S.code !== ze.delete) {
      if (S.target.value.length <= 0 && !rt()) {
        const A = e.modelValue.slice();
        A.pop(), n.emit(mt, A), de(A);
      }
      S.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }
  }, Pe = (S, A) => {
    const D = t.selected.indexOf(A);
    if (D > -1 && !I.value) {
      const ne = e.modelValue.slice();
      ne.splice(D, 1), n.emit(mt, ne), de(ne), n.emit("remove-tag", A.value);
    }
    S.stopPropagation(), k();
  }, $t = (S) => {
    S.stopPropagation();
    const A = e.multiple ? [] : "";
    if (!Ae(A))
      for (const D of t.selected)
        D.isDisabled && A.push(D.value);
    n.emit(mt, A), de(A), t.hoverIndex = -1, t.visible = !1, n.emit("clear"), k();
  }, Ct = (S) => {
    var A;
    if (e.multiple) {
      const D = (e.modelValue || []).slice(), ne = Rt(D, S.value);
      ne > -1 ? D.splice(ne, 1) : (e.multipleLimit <= 0 || D.length < e.multipleLimit) && D.push(S.value), n.emit(mt, D), de(D), S.created && (t.query = "", te(""), t.inputLength = 20), e.filterable && ((A = i.value) == null || A.focus());
    } else
      n.emit(mt, S.value), de(S.value), t.visible = !1;
    Bt(), !t.visible && me(() => {
      Ge(S);
    });
  }, Rt = (S = [], A) => {
    if (!Gt(A))
      return S.indexOf(A);
    const D = e.valueKey;
    let ne = -1;
    return S.some((De, He) => qr(Xe(De, D)) === Xe(A, D) ? (ne = He, !0) : !1), ne;
  }, Bt = () => {
    const S = i.value || a.value;
    S && (S == null || S.focus());
  }, Ge = (S) => {
    var A, D, ne, De, He;
    const zt = Array.isArray(S) ? S[0] : S;
    let Ht = null;
    if (zt != null && zt.value) {
      const at = C.value.filter((ho) => ho.value === zt.value);
      at.length > 0 && (Ht = at[0].$el);
    }
    if (l.value && Ht) {
      const at = (De = (ne = (D = (A = l.value) == null ? void 0 : A.popperRef) == null ? void 0 : D.contentRef) == null ? void 0 : ne.querySelector) == null ? void 0 : De.call(ne, `.${o.be("dropdown", "wrap")}`);
      at && hm(at, Ht);
    }
    (He = m.value) == null || He.handleScroll();
  }, en = (S) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(S.value, S), t.cachedOptions.set(S.value, S);
  }, cn = (S, A) => {
    t.options.get(S) === A && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(S));
  }, Ye = (S) => {
    S.code !== ze.backspace && rt(!1), t.inputLength = i.value.value.length * 15 + 20, se();
  }, rt = (S) => {
    if (!Array.isArray(t.selected))
      return;
    const A = t.selected[t.selected.length - 1];
    if (A)
      return S === !0 || S === !1 ? (A.hitState = S, S) : (A.hitState = !A.hitState, A.hitState);
  }, Dt = (S) => {
    const A = S.target.value;
    if (S.type === "compositionend")
      t.isOnComposition = !1, me(() => te(A));
    else {
      const D = A[A.length - 1] || "";
      t.isOnComposition = !Ol(D);
    }
  }, tn = () => {
    me(() => Ge(t.selected));
  }, xt = (S) => {
    t.focused || ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), t.focused = !0, n.emit("focus", S));
  }, k = () => {
    var S, A;
    t.visible ? (S = i.value || a.value) == null || S.focus() : (A = a.value) == null || A.focus();
  }, K = () => {
    var S, A, D;
    t.visible = !1, (S = a.value) == null || S.blur(), (D = (A = s.value) == null ? void 0 : A.blur) == null || D.call(A);
  }, ge = (S) => {
    var A, D, ne;
    (A = l.value) != null && A.isFocusInsideContent(S) || (D = u.value) != null && D.isFocusInsideContent(S) || (ne = d.value) != null && ne.contains(S.relatedTarget) || (t.visible && jt(), t.focused = !1, n.emit("blur", S));
  }, ot = (S) => {
    $t(S);
  }, jt = () => {
    t.visible = !1;
  }, co = (S) => {
    t.visible && (S.preventDefault(), S.stopPropagation(), t.visible = !1);
  }, wr = (S) => {
    S && !t.mouseEnter || I.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!l.value || !l.value.isFocusInsideContent()) && (t.visible = !t.visible), k());
  }, Sr = () => {
    t.visible ? C.value[t.hoverIndex] && Ct(C.value[t.hoverIndex]) : wr();
  }, $n = (S) => Gt(S.value) ? Xe(S.value, e.valueKey) : S.value, fo = y(() => C.value.filter((S) => S.visible).every((S) => S.disabled)), Un = y(() => t.selected.slice(0, e.maxCollapseTags)), po = y(() => t.selected.slice(e.maxCollapseTags)), Er = (S) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !fo.value) {
      S === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : S === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const A = C.value[t.hoverIndex];
      (A.disabled === !0 || A.states.groupDisabled === !0 || !A.visible) && Er(S), me(() => Ge(b.value));
    }
  }, Or = () => {
    t.mouseEnter = !0;
  }, vo = () => {
    t.mouseEnter = !1;
  }, mo = (S, A) => {
    var D, ne;
    Pe(S, A), (ne = (D = u.value) == null ? void 0 : D.updatePopper) == null || ne.call(D);
  }, Cn = y(() => ({
    maxWidth: `${p(t.inputWidth) - 32 - (H.value ? 22 : 0)}px`,
    width: "100%"
  }));
  return {
    optionList: h,
    optionsArray: C,
    selectSize: G,
    handleResize: Me,
    debouncedOnInputChange: J,
    debouncedQueryChange: Ee,
    deletePrevTag: he,
    deleteTag: Pe,
    deleteSelected: $t,
    handleOptionSelect: Ct,
    scrollToOption: Ge,
    readonly: T,
    resetInputHeight: se,
    showClose: E,
    iconComponent: O,
    iconReverse: M,
    showNewOption: Y,
    collapseTagSize: ie,
    setSelected: le,
    managePlaceholder: Z,
    selectDisabled: I,
    emptyText: P,
    toggleLastOptionHitState: rt,
    resetInputState: Ye,
    handleComposition: Dt,
    onOptionCreate: en,
    onOptionDestroy: cn,
    handleMenuEnter: tn,
    handleFocus: xt,
    focus: k,
    blur: K,
    handleBlur: ge,
    handleClearClick: ot,
    handleClose: jt,
    handleKeydownEscape: co,
    toggleMenu: wr,
    selectOption: Sr,
    getValueKey: $n,
    navigateOptions: Er,
    handleDeleteTooltipTag: mo,
    dropMenuVisible: F,
    queryChange: g,
    groupQueryChange: c,
    showTagList: Un,
    collapseTagList: po,
    selectTagsStyle: Cn,
    reference: a,
    input: i,
    iOSInput: s,
    tooltipRef: l,
    tagTooltipRef: u,
    tags: f,
    selectWrapper: d,
    scrollbar: m,
    handleMouseEnter: Or,
    handleMouseLeave: vo
  };
};
var W1 = B({
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
      function u(f) {
        Array.isArray(f) && f.forEach((d) => {
          var m, b, g, c;
          const h = (m = (d == null ? void 0 : d.type) || {}) == null ? void 0 : m.name;
          h === "ElOptionGroup" ? u(!Ae(d.children) && !Array.isArray(d.children) && et((b = d.children) == null ? void 0 : b.default) ? (g = d.children) == null ? void 0 : g.default() : d.children) : h === "ElOption" ? l.push((c = d.props) == null ? void 0 : c.label) : Array.isArray(d.children) && u(d.children);
        });
      }
      return s.length && u((i = s[0]) == null ? void 0 : i.children), o(l, r) || (r = l, n("update-options", l)), s;
    };
  }
});
const ds = "ElSelect", K1 = B({
  name: ds,
  componentName: ds,
  components: {
    ElInput: Ia,
    ElSelectMenu: H1,
    ElOption: Fa,
    ElOptions: W1,
    ElTag: a1,
    ElScrollbar: $b,
    ElTooltip: lo,
    ElIcon: st
  },
  directives: { ClickOutside: e1 },
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
      validator: $h
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
    teleported: Qe.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: bt,
      default: va
    },
    fitInputWidth: {
      type: Boolean,
      default: !1
    },
    suffixIcon: {
      type: bt,
      default: bl
    },
    tagType: { ...ou.type, default: "info" },
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
      values: ao,
      default: "bottom-start"
    }
  },
  emits: [
    mt,
    El,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = fe("select"), r = fe("input"), { t: o } = ha(), a = V1(e), {
      optionList: i,
      optionsArray: s,
      selectSize: l,
      readonly: u,
      handleResize: f,
      collapseTagSize: d,
      debouncedOnInputChange: m,
      debouncedQueryChange: b,
      deletePrevTag: g,
      deleteTag: c,
      deleteSelected: h,
      handleOptionSelect: v,
      scrollToOption: w,
      setSelected: _,
      resetInputHeight: T,
      managePlaceholder: I,
      showClose: E,
      selectDisabled: O,
      iconComponent: M,
      iconReverse: H,
      showNewOption: V,
      emptyText: P,
      toggleLastOptionHitState: C,
      resetInputState: L,
      handleComposition: Y,
      onOptionCreate: G,
      onOptionDestroy: ie,
      handleMenuEnter: F,
      handleFocus: se,
      focus: te,
      blur: Z,
      handleBlur: ue,
      handleClearClick: le,
      handleClose: _e,
      handleKeydownEscape: xe,
      toggleMenu: Me,
      selectOption: We,
      getValueKey: j,
      navigateOptions: J,
      handleDeleteTooltipTag: Ee,
      dropMenuVisible: de,
      reference: he,
      input: Pe,
      iOSInput: $t,
      tooltipRef: Ct,
      tagTooltipRef: Rt,
      tags: Bt,
      selectWrapper: Ge,
      scrollbar: en,
      queryChange: cn,
      groupQueryChange: Ye,
      handleMouseEnter: rt,
      handleMouseLeave: Dt,
      showTagList: tn,
      collapseTagList: xt,
      selectTagsStyle: k
    } = q1(e, a, t), {
      inputWidth: K,
      selected: ge,
      inputLength: ot,
      filteredOptionsCount: jt,
      visible: co,
      selectedLabel: wr,
      hoverIndex: Sr,
      query: $n,
      inputHovering: fo,
      currentPlaceholder: Un,
      menuVisibleOnFocus: po,
      isOnComposition: Er,
      options: Or,
      cachedOptions: vo,
      optionsCount: mo,
      prefixWidth: Cn
    } = pr(a), S = y(() => {
      const Ze = [n.b()], fn = p(l);
      return fn && Ze.push(n.m(fn)), e.disabled && Ze.push(n.m("disabled")), Ze;
    }), A = y(() => [
      n.e("tags"),
      n.is("disabled", p(O))
    ]), D = y(() => [
      n.b("tags-wrapper"),
      { "has-prefix": p(Cn) && p(ge).length }
    ]), ne = y(() => [
      n.e("input"),
      n.is(p(l)),
      n.is("disabled", p(O))
    ]), De = y(() => [
      n.e("input"),
      n.is(p(l)),
      n.em("input", "iOS")
    ]), He = y(() => [
      n.is("empty", !e.allowCreate && !!p($n) && p(jt) === 0)
    ]), zt = y(() => ({ maxWidth: `${p(K) > 123 ? p(K) - 123 : p(K) - 75}px` })), Ht = y(() => ({
      marginLeft: `${p(Cn)}px`,
      flexGrow: 1,
      width: `${p(ot) / (p(K) - 32)}%`,
      maxWidth: `${p(K) - 42}px`
    }));
    Be(uo, wt({
      props: e,
      options: Or,
      optionsArray: s,
      cachedOptions: vo,
      optionsCount: mo,
      filteredOptionsCount: jt,
      hoverIndex: Sr,
      handleOptionSelect: v,
      onOptionCreate: G,
      onOptionDestroy: ie,
      selectWrapper: Ge,
      selected: ge,
      setSelected: _,
      queryChange: cn,
      groupQueryChange: Ye
    })), Ce(() => {
      a.cachedPlaceHolder = Un.value = e.placeholder || (() => o("el.select.placeholder")), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (Un.value = ""), Vn(Ge, f), e.remote && e.multiple && T(), me(() => {
        const Ze = he.value && he.value.$el;
        if (Ze && (K.value = Ze.getBoundingClientRect().width, t.slots.prefix)) {
          const fn = Ze.querySelector(`.${r.e("prefix")}`);
          Cn.value = Math.max(fn.getBoundingClientRect().width + 11, 30);
        }
      }), _();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(mt, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(mt, "");
    const at = y(() => {
      var Ze, fn;
      return (fn = (Ze = Ct.value) == null ? void 0 : Ze.popperRef) == null ? void 0 : fn.contentRef;
    });
    return {
      isIOS: Hs,
      onOptionsRendered: (Ze) => {
        i.value = Ze;
      },
      prefixWidth: Cn,
      selectSize: l,
      readonly: u,
      handleResize: f,
      collapseTagSize: d,
      debouncedOnInputChange: m,
      debouncedQueryChange: b,
      deletePrevTag: g,
      deleteTag: c,
      handleDeleteTooltipTag: Ee,
      deleteSelected: h,
      handleOptionSelect: v,
      scrollToOption: w,
      inputWidth: K,
      selected: ge,
      inputLength: ot,
      filteredOptionsCount: jt,
      visible: co,
      selectedLabel: wr,
      hoverIndex: Sr,
      query: $n,
      inputHovering: fo,
      currentPlaceholder: Un,
      menuVisibleOnFocus: po,
      isOnComposition: Er,
      options: Or,
      resetInputHeight: T,
      managePlaceholder: I,
      showClose: E,
      selectDisabled: O,
      iconComponent: M,
      iconReverse: H,
      showNewOption: V,
      emptyText: P,
      toggleLastOptionHitState: C,
      resetInputState: L,
      handleComposition: Y,
      handleMenuEnter: F,
      handleFocus: se,
      focus: te,
      blur: Z,
      handleBlur: ue,
      handleClearClick: le,
      handleClose: _e,
      handleKeydownEscape: xe,
      toggleMenu: Me,
      selectOption: We,
      getValueKey: j,
      navigateOptions: J,
      dropMenuVisible: de,
      reference: he,
      input: Pe,
      iOSInput: $t,
      tooltipRef: Ct,
      popperPaneRef: at,
      tags: Bt,
      selectWrapper: Ge,
      scrollbar: en,
      wrapperKls: S,
      tagsKls: A,
      tagWrapperKls: D,
      inputKls: ne,
      iOSInputKls: De,
      scrollbarKls: He,
      selectTagsStyle: k,
      nsSelect: n,
      tagTextStyle: zt,
      inputStyle: Ht,
      handleMouseEnter: rt,
      handleMouseLeave: Dt,
      showTagList: tn,
      collapseTagList: xt,
      tagTooltipRef: Rt
    };
  }
}), U1 = ["disabled", "autocomplete"], G1 = ["disabled"], Y1 = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function Z1(e, t, n, r, o, a) {
  const i = qt("el-tag"), s = qt("el-tooltip"), l = qt("el-icon"), u = qt("el-input"), f = qt("el-option"), d = qt("el-options"), m = qt("el-scrollbar"), b = qt("el-select-menu"), g = Au("click-outside");
  return It((x(), z("div", {
    ref: "selectWrapper",
    class: R(e.wrapperKls),
    onMouseenter: t[22] || (t[22] = (...c) => e.handleMouseEnter && e.handleMouseEnter(...c)),
    onMouseleave: t[23] || (t[23] = (...c) => e.handleMouseLeave && e.handleMouseLeave(...c)),
    onClick: t[24] || (t[24] = Oe((...c) => e.toggleMenu && e.toggleMenu(...c), ["stop"]))
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
      default: q(() => [
        W("div", {
          class: "select-trigger",
          onMouseenter: t[20] || (t[20] = (c) => e.inputHovering = !0),
          onMouseleave: t[21] || (t[21] = (c) => e.inputHovering = !1)
        }, [
          e.multiple ? (x(), z("div", {
            key: 0,
            ref: "tags",
            tabindex: "-1",
            class: R(e.tagsKls),
            style: je(e.selectTagsStyle),
            onClick: t[15] || (t[15] = (...c) => e.focus && e.focus(...c))
          }, [
            e.collapseTags && e.selected.length ? (x(), Q(yn, {
              key: 0,
              onAfterLeave: e.resetInputHeight
            }, {
              default: q(() => [
                W("span", {
                  class: R(e.tagWrapperKls)
                }, [
                  (x(!0), z(Le, null, kn(e.showTagList, (c) => (x(), Q(i, {
                    key: e.getValueKey(c),
                    closable: !e.selectDisabled && !c.isDisabled,
                    size: e.collapseTagSize,
                    hit: c.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (h) => e.deleteTag(h, c)
                  }, {
                    default: q(() => [
                      W("span", {
                        class: R(e.nsSelect.e("tags-text")),
                        style: je(e.tagTextStyle)
                      }, $e(c.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128)),
                  e.selected.length > e.maxCollapseTags ? (x(), Q(i, {
                    key: 0,
                    closable: !1,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    "disable-transitions": ""
                  }, {
                    default: q(() => [
                      e.collapseTagsTooltip ? (x(), Q(s, {
                        key: 0,
                        ref: "tagTooltipRef",
                        disabled: e.dropMenuVisible,
                        "fallback-placements": ["bottom", "top", "right", "left"],
                        effect: e.effect,
                        placement: "bottom",
                        teleported: e.teleported
                      }, {
                        default: q(() => [
                          W("span", {
                            class: R(e.nsSelect.e("tags-text"))
                          }, "+ " + $e(e.selected.length - e.maxCollapseTags), 3)
                        ]),
                        content: q(() => [
                          W("div", {
                            class: R(e.nsSelect.e("collapse-tags"))
                          }, [
                            (x(!0), z(Le, null, kn(e.collapseTagList, (c) => (x(), z("div", {
                              key: e.getValueKey(c),
                              class: R(e.nsSelect.e("collapse-tag"))
                            }, [
                              N(i, {
                                class: "in-tooltip",
                                closable: !e.selectDisabled && !c.isDisabled,
                                size: e.collapseTagSize,
                                hit: c.hitState,
                                type: e.tagType,
                                "disable-transitions": "",
                                style: { margin: "2px" },
                                onClose: (h) => e.handleDeleteTooltipTag(h, c)
                              }, {
                                default: q(() => [
                                  W("span", {
                                    class: R(e.nsSelect.e("tags-text")),
                                    style: je({
                                      maxWidth: e.inputWidth - 75 + "px"
                                    })
                                  }, $e(c.currentLabel), 7)
                                ]),
                                _: 2
                              }, 1032, ["closable", "size", "hit", "type", "onClose"])
                            ], 2))), 128))
                          ], 2)
                        ]),
                        _: 1
                      }, 8, ["disabled", "effect", "teleported"])) : (x(), z("span", {
                        key: 1,
                        class: R(e.nsSelect.e("tags-text"))
                      }, "+ " + $e(e.selected.length - e.maxCollapseTags), 3))
                    ]),
                    _: 1
                  }, 8, ["size", "type"])) : ee("v-if", !0)
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])) : ee("v-if", !0),
            e.collapseTags ? ee("v-if", !0) : (x(), Q(yn, {
              key: 1,
              onAfterLeave: e.resetInputHeight
            }, {
              default: q(() => [
                W("span", {
                  class: R(e.tagWrapperKls),
                  style: je(e.prefixWidth && e.selected.length ? { marginLeft: `${e.prefixWidth}px` } : "")
                }, [
                  (x(!0), z(Le, null, kn(e.selected, (c) => (x(), Q(i, {
                    key: e.getValueKey(c),
                    closable: !e.selectDisabled && !c.isDisabled,
                    size: e.collapseTagSize,
                    hit: c.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (h) => e.deleteTag(h, c)
                  }, {
                    default: q(() => [
                      W("span", {
                        class: R(e.nsSelect.e("tags-text")),
                        style: je({ maxWidth: e.inputWidth - 75 + "px" })
                      }, $e(c.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                ], 6)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])),
            e.filterable && !e.selectDisabled ? It((x(), z("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": t[0] || (t[0] = (c) => e.query = c),
              type: "text",
              class: R(e.inputKls),
              disabled: e.selectDisabled,
              autocomplete: e.autocomplete,
              style: je(e.inputStyle),
              onFocus: t[1] || (t[1] = (...c) => e.handleFocus && e.handleFocus(...c)),
              onBlur: t[2] || (t[2] = (...c) => e.handleBlur && e.handleBlur(...c)),
              onKeyup: t[3] || (t[3] = (...c) => e.managePlaceholder && e.managePlaceholder(...c)),
              onKeydown: [
                t[4] || (t[4] = (...c) => e.resetInputState && e.resetInputState(...c)),
                t[5] || (t[5] = dt(Oe((c) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                t[6] || (t[6] = dt(Oe((c) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                t[7] || (t[7] = dt((...c) => e.handleKeydownEscape && e.handleKeydownEscape(...c), ["esc"])),
                t[8] || (t[8] = dt(Oe((...c) => e.selectOption && e.selectOption(...c), ["stop", "prevent"]), ["enter"])),
                t[9] || (t[9] = dt((...c) => e.deletePrevTag && e.deletePrevTag(...c), ["delete"])),
                t[10] || (t[10] = dt((c) => e.visible = !1, ["tab"]))
              ],
              onCompositionstart: t[11] || (t[11] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onCompositionupdate: t[12] || (t[12] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onCompositionend: t[13] || (t[13] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onInput: t[14] || (t[14] = (...c) => e.debouncedQueryChange && e.debouncedQueryChange(...c))
            }, null, 46, U1)), [
              [Mu, e.query]
            ]) : ee("v-if", !0)
          ], 6)) : ee("v-if", !0),
          ee(" fix: https://github.com/element-plus/element-plus/issues/11415 "),
          e.isIOS && !e.multiple && e.filterable && e.readonly ? (x(), z("input", {
            key: 1,
            ref: "iOSInput",
            class: R(e.iOSInputKls),
            disabled: e.selectDisabled,
            type: "text"
          }, null, 10, G1)) : ee("v-if", !0),
          N(u, {
            id: e.id,
            ref: "reference",
            modelValue: e.selectedLabel,
            "onUpdate:modelValue": t[16] || (t[16] = (c) => e.selectedLabel = c),
            type: "text",
            placeholder: typeof e.currentPlaceholder == "function" ? e.currentPlaceholder() : e.currentPlaceholder,
            name: e.name,
            autocomplete: e.autocomplete,
            size: e.selectSize,
            disabled: e.selectDisabled,
            readonly: e.readonly,
            "validate-event": !1,
            class: R([e.nsSelect.is("focus", e.visible)]),
            tabindex: e.multiple && e.filterable ? -1 : void 0,
            onFocus: e.handleFocus,
            onBlur: e.handleBlur,
            onInput: e.debouncedOnInputChange,
            onPaste: e.debouncedOnInputChange,
            onCompositionstart: e.handleComposition,
            onCompositionupdate: e.handleComposition,
            onCompositionend: e.handleComposition,
            onKeydown: [
              t[17] || (t[17] = dt(Oe((c) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              t[18] || (t[18] = dt(Oe((c) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              dt(Oe(e.selectOption, ["stop", "prevent"]), ["enter"]),
              dt(e.handleKeydownEscape, ["esc"]),
              t[19] || (t[19] = dt((c) => e.visible = !1, ["tab"]))
            ]
          }, Pu({
            suffix: q(() => [
              e.iconComponent && !e.showClose ? (x(), Q(l, {
                key: 0,
                class: R([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: q(() => [
                  (x(), Q(ht(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0),
              e.showClose && e.clearIcon ? (x(), Q(l, {
                key: 1,
                class: R([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: q(() => [
                  (x(), Q(ht(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : ee("v-if", !0)
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: q(() => [
                W("div", Y1, [
                  oe(e.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ], 32)
      ]),
      content: q(() => [
        N(b, null, {
          default: q(() => [
            It(N(m, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: R(e.scrollbarKls)
            }, {
              default: q(() => [
                e.showNewOption ? (x(), Q(f, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : ee("v-if", !0),
                N(d, { onUpdateOptions: e.onOptionsRendered }, {
                  default: q(() => [
                    oe(e.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["onUpdateOptions"])
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [En, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (x(), z(Le, { key: 0 }, [
              e.$slots.empty ? oe(e.$slots, "empty", { key: 0 }) : (x(), z("p", {
                key: 1,
                class: R(e.nsSelect.be("dropdown", "empty"))
              }, $e(e.emptyText), 3))
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
var J1 = /* @__PURE__ */ ve(K1, [["render", Z1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const Q1 = B({
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
    const t = fe("select"), n = $(!0), r = Ve(), o = $([]);
    Be(uu, wt({
      ...pr(e)
    }));
    const a = ae(uo);
    Ce(() => {
      o.value = i(r.subTree);
    });
    const i = (l) => {
      const u = [];
      return Array.isArray(l.children) && l.children.forEach((f) => {
        var d;
        f.type && f.type.name === "ElOption" && f.component && f.component.proxy ? u.push(f.component.proxy) : (d = f.children) != null && d.length && u.push(...i(f));
      }), u;
    }, { groupQueryChange: s } = qr(a);
    return U(s, () => {
      n.value = o.value.some((l) => l.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function X1(e, t, n, r, o, a) {
  return It((x(), z("ul", {
    class: R(e.ns.be("group", "wrap"))
  }, [
    W("li", {
      class: R(e.ns.be("group", "title"))
    }, $e(e.label), 3),
    W("li", null, [
      W("ul", {
        class: R(e.ns.b("group"))
      }, [
        oe(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [En, e.visible]
  ]);
}
var cu = /* @__PURE__ */ ve(Q1, [["render", X1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const ps = _t(J1, {
  Option: Fa,
  OptionGroup: cu
}), vs = Tn(Fa);
Tn(cu);
const ew = we({
  trigger: dr.trigger,
  placement: Po.placement,
  disabled: dr.disabled,
  visible: Qe.visible,
  transition: Qe.transition,
  popperOptions: Po.popperOptions,
  tabindex: Po.tabindex,
  content: Qe.content,
  popperStyle: Qe.popperStyle,
  popperClass: Qe.popperClass,
  enterable: {
    ...Qe.enterable,
    default: !0
  },
  effect: {
    ...Qe.effect,
    default: "light"
  },
  teleported: Qe.teleported,
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
}), tw = {
  "update:visible": (e) => vr(e),
  "before-enter": () => !0,
  "before-leave": () => !0,
  "after-enter": () => !0,
  "after-leave": () => !0
}, nw = "onUpdate:visible", rw = B({
  name: "ElPopover"
}), ow = /* @__PURE__ */ B({
  ...rw,
  props: ew,
  emits: tw,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = y(() => r[nw]), a = fe("popover"), i = $(), s = y(() => {
      var h;
      return (h = p(i)) == null ? void 0 : h.popperRef;
    }), l = y(() => [
      {
        width: Rn(r.width)
      },
      r.popperStyle
    ]), u = y(() => [a.b(), r.popperClass, { [a.m("plain")]: !!r.content }]), f = y(() => r.transition === `${a.namespace.value}-fade-in-linear`), d = () => {
      var h;
      (h = i.value) == null || h.hide();
    }, m = () => {
      n("before-enter");
    }, b = () => {
      n("before-leave");
    }, g = () => {
      n("after-enter");
    }, c = () => {
      n("update:visible", !1), n("after-leave");
    };
    return t({
      popperRef: s,
      hide: d
    }), (h, v) => (x(), Q(p(lo), yt({
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
      "gpu-acceleration": p(f),
      "onUpdate:visible": p(o),
      onBeforeShow: m,
      onBeforeHide: b,
      onShow: g,
      onHide: c
    }), {
      content: q(() => [
        h.title ? (x(), z("div", {
          key: 0,
          class: R(p(a).e("title")),
          role: "title"
        }, $e(h.title), 3)) : ee("v-if", !0),
        oe(h.$slots, "default", {}, () => [
          Pn($e(h.content), 1)
        ])
      ]),
      default: q(() => [
        h.$slots.reference ? oe(h.$slots, "reference", { key: 0 }) : ee("v-if", !0)
      ]),
      _: 3
    }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]));
  }
});
var aw = /* @__PURE__ */ ve(ow, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);
const ms = (e, t) => {
  const n = t.arg || t.value, r = n == null ? void 0 : n.popperRef;
  r && (r.triggerRef = e);
};
var iw = {
  mounted(e, t) {
    ms(e, t);
  },
  updated(e, t) {
    ms(e, t);
  }
};
const sw = "popover", lw = Oh(iw, sw), Xt = _t(aw, {
  directive: lw
});
const Na = /* @__PURE__ */ B({
  __name: "bar-input",
  props: {
    type: {}
  },
  emits: ["submit"],
  setup(e, { expose: t, emit: n }) {
    const r = $(""), o = $();
    function a() {
      o.value.focus();
    }
    function i() {
      n("submit", r.value), r.value = "";
    }
    return t({
      focus: a
    }), (s, l) => (x(), Q(p(Wl), {
      class: "flex flex-row",
      onSubmit: Oe(i, ["prevent"])
    }, {
      default: q(() => [
        N(p(Ia), {
          type: s.type,
          ref_key: "inputRef",
          ref: o,
          modelValue: r.value,
          "onUpdate:modelValue": l[0] || (l[0] = (u) => r.value = u)
        }, {
          append: q(() => [
            N(p(Qy), {
              onOnClick: i,
              icon: p(mh)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["type", "modelValue"])
      ]),
      _: 1
    }, 8, ["onSubmit"]));
  }
});
const uw = { class: "search-input" }, cw = /* @__PURE__ */ B({
  __name: "search-input",
  emits: ["submit"],
  setup(e, { emit: t }) {
    const n = $("");
    function r() {
      t("submit", n.value);
    }
    return (o, a) => (x(), z("div", uw, [
      N(p(Wl), {
        onSubmit: Oe(r, ["prevent"])
      }, {
        default: q(() => [
          N(p(Ia), {
            modelValue: n.value,
            "onUpdate:modelValue": a[0] || (a[0] = (i) => n.value = i)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["onSubmit"])
    ]));
  }
});
const fw = (e) => (ku("data-v-cbbc8bac"), e = e(), Lu(), e), dw = { class: "search-content" }, pw = { class: "menu" }, vw = /* @__PURE__ */ fw(() => /* @__PURE__ */ W("div", { class: "h h-1" }, null, -1)), mw = { class: "flex flex-wrap" }, hw = { class: "content flex flex-col scroll scroll-y h-30 font-size-15 p-2" }, gw = /* @__PURE__ */ B({
  __name: "search-content",
  setup(e) {
    const t = $([
      { value: "1", label: "全部场景" },
      { value: "2", label: "全部场景" },
      { value: "3", label: "全部场景" }
    ]), n = $([
      { value: "1", label: "全部风格" },
      { value: "2", label: "全部风格" },
      { value: "3", label: "全部风格" }
    ]), r = $([{ text: "测试1" }, { text: "测试2" }, { text: "测试3" }, { text: "测试4" }]);
    return (o, a) => (x(), z("div", dw, [
      W("div", pw, [
        N(p(N1), {
          mode: "horizontal",
          "default-active": "first"
        }, {
          default: q(() => [
            N(p(Fo), { index: "first" }, {
              default: q(() => [
                Pn("默认音效")
              ]),
              _: 1
            }),
            N(p(Fo), { index: "second" }, {
              default: q(() => [
                Pn("自定义音效")
              ]),
              _: 1
            }),
            N(p(Fo), { index: "last" }, {
              default: q(() => [
                Pn("近期使用")
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      vw,
      W("div", mw, [
        N(p(ps), {
          class: "m m-2",
          placeholder: "Select",
          size: "large"
        }, {
          default: q(() => [
            (x(!0), z(Le, null, kn(t.value, (i) => (x(), Q(p(vs), {
              key: i.value,
              label: i.label,
              value: i.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }),
        N(p(ps), {
          class: "m m-2",
          placeholder: "Select",
          size: "large",
          onChange: a[0] || (a[0] = Oe(() => {
          }, ["prevent"]))
        }, {
          default: q(() => [
            (x(!0), z(Le, null, kn(n.value, (i) => (x(), Q(p(vs), {
              key: i.value,
              label: i.label,
              value: i.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        })
      ]),
      W("div", hw, [
        (x(!0), z(Le, null, kn(r.value, (i, s) => (x(), z("div", {
          class: "btn btn-radius-2 h-5 w-full",
          key: s
        }, $e(i.text), 1))), 128))
      ])
    ]));
  }
});
const bw = /* @__PURE__ */ zs(gw, [["__scopeId", "data-v-cbbc8bac"]]), yw = /* @__PURE__ */ B({
  setup() {
    return () => N("div", null, [N(cw, null, null), N(bw, null, null)]);
  }
});
let ww = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function Ft(e = "r") {
  return `${e}-${ww()}`;
}
var fu = "Expected a function", hs = 0 / 0, Sw = "[object Symbol]", Ew = /^\s+|\s+$/g, Ow = /^[-+]0x[0-9a-f]+$/i, _w = /^0b[01]+$/i, Tw = /^0o[0-7]+$/i, $w = parseInt, Cw = typeof Lr == "object" && Lr && Lr.Object === Object && Lr, xw = typeof self == "object" && self && self.Object === Object && self, Iw = Cw || xw || Function("return this")(), Aw = Object.prototype, Mw = Aw.toString, Pw = Math.max, kw = Math.min, No = function() {
  return Iw.Date.now();
};
function Lw(e, t, n) {
  var r, o, a, i, s, l, u = 0, f = !1, d = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(fu);
  t = gs(t) || 0, Jr(n) && (f = !!n.leading, d = "maxWait" in n, a = d ? Pw(gs(n.maxWait) || 0, t) : a, m = "trailing" in n ? !!n.trailing : m);
  function b(E) {
    var O = r, M = o;
    return r = o = void 0, u = E, i = e.apply(M, O), i;
  }
  function g(E) {
    return u = E, s = setTimeout(v, t), f ? b(E) : i;
  }
  function c(E) {
    var O = E - l, M = E - u, H = t - O;
    return d ? kw(H, a - M) : H;
  }
  function h(E) {
    var O = E - l, M = E - u;
    return l === void 0 || O >= t || O < 0 || d && M >= a;
  }
  function v() {
    var E = No();
    if (h(E))
      return w(E);
    s = setTimeout(v, c(E));
  }
  function w(E) {
    return s = void 0, m && r ? b(E) : (r = o = void 0, i);
  }
  function _() {
    s !== void 0 && clearTimeout(s), u = 0, r = l = o = s = void 0;
  }
  function T() {
    return s === void 0 ? i : w(No());
  }
  function I() {
    var E = No(), O = h(E);
    if (r = arguments, o = this, l = E, O) {
      if (s === void 0)
        return g(l);
      if (d)
        return s = setTimeout(v, t), b(l);
    }
    return s === void 0 && (s = setTimeout(v, t)), i;
  }
  return I.cancel = _, I.flush = T, I;
}
function Fw(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(fu);
  return Jr(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), Lw(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
function Jr(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function Nw(e) {
  return !!e && typeof e == "object";
}
function Rw(e) {
  return typeof e == "symbol" || Nw(e) && Mw.call(e) == Sw;
}
function gs(e) {
  if (typeof e == "number")
    return e;
  if (Rw(e))
    return hs;
  if (Jr(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Jr(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Ew, "");
  var n = _w.test(e);
  return n || Tw.test(e) ? $w(e.slice(2), n ? 2 : 8) : Ow.test(e) ? hs : +e;
}
var Bw = Fw;
const Dw = /* @__PURE__ */ Xy(Bw);
function bs(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function Ra(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {}), Object.keys(t).forEach(function(n) {
    typeof e[n] > "u" ? e[n] = t[n] : bs(t[n]) && bs(e[n]) && Object.keys(t[n]).length > 0 && Ra(e[n], t[n]);
  });
}
var du = {
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
function Ba() {
  var e = typeof document < "u" ? document : {};
  return Ra(e, du), e;
}
var jw = {
  document: du,
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
function pu() {
  var e = typeof window < "u" ? window : {};
  return Ra(e, jw), e;
}
function zw(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function ta(e) {
  return ta = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ta(e);
}
function Qr(e, t) {
  return Qr = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Qr(e, t);
}
function Hw() {
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
function Vr(e, t, n) {
  return Hw() ? Vr = Reflect.construct : Vr = function(o, a, i) {
    var s = [null];
    s.push.apply(s, a);
    var l = Function.bind.apply(o, s), u = new l();
    return i && Qr(u, i.prototype), u;
  }, Vr.apply(null, arguments);
}
function Vw(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function na(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return na = function(r) {
    if (r === null || !Vw(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, o);
    }
    function o() {
      return Vr(r, arguments, ta(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Qr(o, r);
  }, na(e);
}
function qw(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ww(e) {
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
var hn = /* @__PURE__ */ function(e) {
  zw(t, e);
  function t(n) {
    var r;
    return r = e.call.apply(e, [this].concat(n)) || this, Ww(qw(r)), r;
  }
  return t;
}(/* @__PURE__ */ na(Array));
function Da(e) {
  e === void 0 && (e = []);
  var t = [];
  return e.forEach(function(n) {
    Array.isArray(n) ? t.push.apply(t, Da(n)) : t.push(n);
  }), t;
}
function Kw(e) {
  for (var t = [], n = 0; n < e.length; n += 1)
    t.indexOf(e[n]) === -1 && t.push(e[n]);
  return t;
}
function Uw(e) {
  return e.toLowerCase().replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function Gw(e, t) {
  if (typeof e != "string")
    return [e];
  for (var n = [], r = t.querySelectorAll(e), o = 0; o < r.length; o += 1)
    n.push(r[o]);
  return n;
}
function pe(e, t) {
  var n = pu(), r = Ba(), o = [];
  if (!t && e instanceof hn)
    return e;
  if (!e)
    return new hn(o);
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
      o = Gw(e.trim(), t || r);
  } else if (e.nodeType || e === n || e === r)
    o.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof hn)
      return e;
    o = e;
  }
  return new hn(Kw(o));
}
pe.fn = hn.prototype;
function ys() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = Da(t.map(function(o) {
    return o.split(" ");
  }));
  return this.forEach(function(o) {
    var a;
    (a = o.classList).add.apply(a, r);
  }), this;
}
function ws() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = Da(t.map(function(o) {
    return o.split(" ");
  }));
  return this.forEach(function(o) {
    var a;
    (a = o.classList).remove.apply(a, r);
  }), this;
}
function Ss(e, t) {
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
function Es() {
  var e = this[0];
  if (e) {
    var t = {};
    if (e.dataset)
      for (var n in e.dataset)
        t[n] = e.dataset[n];
    else
      for (var r = 0; r < e.attributes.length; r += 1) {
        var o = e.attributes[r];
        o.name.indexOf("data-") >= 0 && (t[Uw(o.name.split("data-")[1])] = o.value);
      }
    for (var a in t)
      t[a] === "false" ? t[a] = !1 : t[a] === "true" ? t[a] = !0 : parseFloat(t[a]) === t[a] * 1 && (t[a] *= 1);
    return t;
  }
}
function Os(e) {
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
function _s() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0], o = t[1], a = t[2], i = t[3];
  typeof t[1] == "function" && (r = t[0], a = t[1], i = t[2], o = void 0), i || (i = !1);
  function s(c) {
    var h = c.target;
    if (h) {
      var v = c.target.dom7EventData || [];
      if (v.indexOf(c) < 0 && v.unshift(c), pe(h).is(o))
        a.apply(h, v);
      else
        for (var w = pe(h).parents(), _ = 0; _ < w.length; _ += 1)
          pe(w[_]).is(o) && a.apply(w[_], v);
    }
  }
  function l(c) {
    var h = c && c.target ? c.target.dom7EventData || [] : [];
    h.indexOf(c) < 0 && h.unshift(c), a.apply(this, h);
  }
  for (var u = r.split(" "), f, d = 0; d < this.length; d += 1) {
    var m = this[d];
    if (o)
      for (f = 0; f < u.length; f += 1) {
        var g = u[f];
        m.dom7LiveListeners || (m.dom7LiveListeners = {}), m.dom7LiveListeners[g] || (m.dom7LiveListeners[g] = []), m.dom7LiveListeners[g].push({
          listener: a,
          proxyListener: s
        }), m.addEventListener(g, s, i);
      }
    else
      for (f = 0; f < u.length; f += 1) {
        var b = u[f];
        m.dom7Listeners || (m.dom7Listeners = {}), m.dom7Listeners[b] || (m.dom7Listeners[b] = []), m.dom7Listeners[b].push({
          listener: a,
          proxyListener: l
        }), m.addEventListener(b, l, i);
      }
  }
  return this;
}
function Ts() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0], o = t[1], a = t[2], i = t[3];
  typeof t[1] == "function" && (r = t[0], a = t[1], i = t[2], o = void 0), i || (i = !1);
  for (var s = r.split(" "), l = 0; l < s.length; l += 1)
    for (var u = s[l], f = 0; f < this.length; f += 1) {
      var d = this[f], m = void 0;
      if (!o && d.dom7Listeners ? m = d.dom7Listeners[u] : o && d.dom7LiveListeners && (m = d.dom7LiveListeners[u]), m && m.length)
        for (var b = m.length - 1; b >= 0; b -= 1) {
          var g = m[b];
          a && g.listener === a || a && g.listener && g.listener.dom7proxy && g.listener.dom7proxy === a ? (d.removeEventListener(u, g.proxyListener, i), m.splice(b, 1)) : a || (d.removeEventListener(u, g.proxyListener, i), m.splice(b, 1));
        }
    }
  return this;
}
function $s() {
  for (var e = 0; e < this.length; e += 1)
    this[e].style.display = "none";
  return this;
}
function Cs(e) {
  return e ? (this.forEach(function(t, n) {
    e.apply(t, [t, n]);
  }), this) : this;
}
function xs(e) {
  if (typeof e > "u")
    return this[0] ? this[0].innerHTML : null;
  for (var t = 0; t < this.length; t += 1)
    this[t].innerHTML = e;
  return this;
}
function Is(e) {
  var t = pu(), n = Ba(), r = this[0], o, a;
  if (!r || typeof e > "u")
    return !1;
  if (typeof e == "string") {
    if (r.matches)
      return r.matches(e);
    if (r.webkitMatchesSelector)
      return r.webkitMatchesSelector(e);
    if (r.msMatchesSelector)
      return r.msMatchesSelector(e);
    for (o = pe(e), a = 0; a < o.length; a += 1)
      if (o[a] === r)
        return !0;
    return !1;
  }
  if (e === n)
    return r === n;
  if (e === t)
    return r === t;
  if (e.nodeType || e instanceof hn) {
    for (o = e.nodeType ? [e] : e, a = 0; a < o.length; a += 1)
      if (o[a] === r)
        return !0;
    return !1;
  }
  return !1;
}
function As() {
  for (var e, t = Ba(), n = 0; n < arguments.length; n += 1) {
    e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    for (var r = 0; r < this.length; r += 1)
      if (typeof e == "string") {
        var o = t.createElement("div");
        for (o.innerHTML = e; o.firstChild; )
          this[r].appendChild(o.firstChild);
      } else if (e instanceof hn)
        for (var a = 0; a < e.length; a += 1)
          this[r].appendChild(e[a]);
      else
        this[r].appendChild(e);
  }
  return this;
}
function Ms(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var r = this[n].parentNode; r; )
      e ? pe(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
  return pe(t);
}
function Ps(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var r = this[n].querySelectorAll(e), o = 0; o < r.length; o += 1)
      t.push(r[o]);
  return pe(t);
}
function ks(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var r = this[n].children, o = 0; o < r.length; o += 1)
      (!e || pe(r[o]).is(e)) && t.push(r[o]);
  return pe(t);
}
var Yw = "resize scroll".split(" ");
function vu(e) {
  function t() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    if (typeof r[0] > "u") {
      for (var a = 0; a < this.length; a += 1)
        Yw.indexOf(e) < 0 && (e in this[a] ? this[a][e]() : pe(this[a]).trigger(e));
      return this;
    }
    return this.on.apply(this, [e].concat(r));
  }
  return t;
}
var Ls = vu("click"), Fs = vu("focus");
$s && (pe.fn.hide = $s);
As && (pe.fn.append = As);
Ls && (pe.fn.click = Ls);
_s && (pe.fn.on = _s);
Ts && (pe.fn.off = Ts);
Fs && (pe.fn.focus = Fs);
Ss && (pe.fn.attr = Ss);
Os && (pe.fn.val = Os);
xs && (pe.fn.html = xs);
Es && (pe.fn.dataset = Es);
ys && (pe.fn.addClass = ys);
ws && (pe.fn.removeClass = ws);
ks && (pe.fn.children = ks);
Cs && (pe.fn.each = Cs);
Ps && (pe.fn.find = Ps);
Is && (pe.fn.is = Is);
Ms && (pe.fn.parents = Ms);
function Nt(e, t, n, r) {
  pe("body").on(
    "click",
    `#${n}`,
    Dw((o) => {
      o.preventDefault();
      const a = Zw(e, t, n);
      return a && r(a);
    })
  );
}
function Zw(e, t, n) {
  const [r] = Te.nodes(e, {
    at: [],
    match: (o) => !Fu.isElement(o) || !Bo.checkNodeType(o, t) ? !1 : o.domId === n
  });
  return r;
}
function yr(e, t, n) {
  const r = Te.previous(e, {
    at: t[1],
    match: (o) => Nu.isText(o)
  });
  r != null && (ye.insertText(e, n(t[0]), {
    at: Te.end(e, r[1])
  }), ye.delete(e, { at: Ru.next(r[1]) }));
}
function Jw() {
  return Ft("w-e-dom-speaker");
}
let Qw = class {
  getValue(t) {
    const {
      selection: n
    } = t;
    return n == null ? null : Te.string(t, n);
  }
  isDisabled(t) {
    const {
      selection: n
    } = t;
    if (n == null || St.isCollapsed(n))
      return !0;
    const r = Te.string(t, n);
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
      domId: Jw(),
      word: o,
      phoneme: n,
      remark: n,
      bgColor: "speaker",
      children: [{
        text: ""
      }]
    };
    ye.delete(t), ye.insertNodes(t, a), t.move(1), Nt(t, "ssml-p", a.domId, (i) => {
      yr(t, i, (s) => s.word);
    });
  }
};
function Xw(e) {
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
const e2 = /* @__PURE__ */ B({
  emits: ["error"],
  props: ["fetch"],
  setup(e, {
    emit: t
  }) {
    const n = new Qw(), r = ae("editor"), o = $([]), a = $(!1);
    function i() {
      a.value || (a.value = !0);
    }
    function s() {
      a.value && (a.value = !1);
    }
    async function l(u) {
      const f = n.getValue(u);
      if (f ? o.value = await (e.fetch || Xw)(f) : o.value = [], n.isDisabled(u))
        return t("error", "选中一个中文字符，并且有不能在其他语句之内");
      if (o.value.length == 0)
        return t("error", "选中的字符没有不是多音字");
      i();
    }
    return () => N(Xt, {
      visible: a.value,
      "onUpdate:visible": (u) => a.value = u,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => N(Et, {
        text: "多音字",
        icon: "speaker",
        onClick: l
      }, null),
      default: () => N("div", {
        class: "flex flex-col"
      }, [o.value.map(({
        id: u,
        text: f
      }) => N("div", {
        key: u,
        class: "btn full",
        onClick: () => {
          n.isDisabled(r == null ? void 0 : r.value) || n.exec(r == null ? void 0 : r.value, f), s();
        },
        onMousedown: Oe(() => {
        }, ["stop", "prevent"])
      }, [f]))])
    });
  }
});
function t2() {
  return Ft("w-e-dom-continuous");
}
class n2 {
  getValue(t) {
    const {
      selection: n
    } = t;
    return n == null ? "" : Te.string(t, n);
  }
  isDisabled(t) {
    const {
      selection: n
    } = t;
    return !!(n == null || St.isCollapsed(n) || Te.string(t, n).length < 2);
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
      domId: t2(),
      children: [{
        text: r
      }],
      remark: "连读",
      bgColor: "continuous"
    };
    ye.delete(t), ye.insertNodes(t, o), Nt(t, "ssml-w", o.domId, (a) => {
      ye.unwrapNodes(t, {
        at: a[1]
      });
    });
  }
}
const r2 = /* @__PURE__ */ B({
  emits: ["error"],
  setup(e, {
    emit: t
  }) {
    const n = new n2();
    function r(o) {
      if (n.isDisabled(o))
        return t("error", "请选择多个中文字符或者多个多个英文单词");
      n.exec(o);
    }
    return () => N(Et, {
      text: "连读",
      icon: "continuous",
      onClick: r
    }, null);
  }
});
function o2() {
  return Ft("w-e-dom-read");
}
class a2 {
  getValue(t) {
    const {
      selection: n
    } = t;
    return n == null ? "" : Te.string(t, n);
  }
  isDisabled(t) {
    const {
      selection: n
    } = t;
    return !!(n == null || St.isCollapsed(n) || Te.string(t, n).length <= 0);
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
      domId: o2(),
      phoneme: n.id,
      remark: n.remark,
      value: o,
      bgColor: "read",
      children: [{
        text: o
      }]
    };
    ye.delete(t), ye.insertNodes(t, a), Nt(t, "ssml-w", a.domId, (i) => yr(t, i, () => o));
  }
}
const i2 = [{
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
}], s2 = /* @__PURE__ */ B({
  emits: ["error"],
  setup(e, {
    emit: t
  }) {
    const n = new a2(), r = ae("editor"), o = $(!1);
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
    return () => N(Xt, {
      visible: o.value,
      "onUpdate:visible": (l) => o.value = l,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => N(Et, {
        text: "重音",
        icon: "read",
        onClick: s
      }, null),
      default: () => N("div", {
        class: "flex flex-col",
        onMousedown: Oe(() => {
        }, ["stop", "prevent"])
      }, [i2.map(({
        id: l,
        text: u,
        remark: f
      }) => N("div", {
        key: l,
        class: "btn full",
        onClick: () => {
          n.isDisabled(r == null ? void 0 : r.value) || n.exec(r == null ? void 0 : r.value, {
            id: l,
            text: u,
            remark: f
          }), i();
        },
        onMousedown: Oe(() => {
        }, ["stop", "prevent"])
      }, [u]))])
    });
  }
});
function l2() {
  return Ft("w-e-dom-digital");
}
class u2 {
  getValue(t) {
    const {
      selection: n
    } = t;
    return n == null ? "" : Te.string(t, n);
  }
  isDisabled(t) {
    const {
      selection: n
    } = t;
    if (n == null || St.isCollapsed(n))
      return !0;
    const r = Te.string(t, n);
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
      domId: l2(),
      interpretAs: n.id,
      remark: n.remark,
      bgColor: "digital",
      children: [{
        text: o
      }]
    };
    ye.delete(t), ye.insertNodes(t, a), Nt(t, "ssml-say-as", a.domId, (i) => {
      ye.unwrapNodes(t, {
        at: i[1]
      });
    });
  }
}
const c2 = [{
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
}], f2 = /* @__PURE__ */ B({
  emits: ["error"],
  setup(e, {
    emit: t
  }) {
    const n = new u2(), r = ae("editor"), o = $(!1);
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
    return () => N(Xt, {
      visible: o.value,
      "onUpdate:visible": (s) => o.value = s,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => N(Et, {
        text: "数字符号",
        icon: "digital",
        onClick: i
      }, null),
      default: () => N("div", {
        class: "flex flex-col"
      }, [c2.map(({
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
        onMousedown: Oe(() => {
        }, ["stop", "prevent"])
      }, [l]))])
    });
  }
});
function d2() {
  return Ft("w-e-dom-alias");
}
class p2 {
  getValue(t) {
    const {
      selection: n
    } = t;
    return n == null ? null : Te.string(t, n);
  }
  isDisabled(t) {
    const {
      selection: n
    } = t;
    return !!(n == null || St.isCollapsed(n) || Te.string(t, n).length <= 0);
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
      domId: d2(),
      remark: `[${n}]`,
      alias: n,
      value: o,
      bgColor: "alias",
      children: [{
        text: ""
      }]
    };
    ye.delete(t), ye.insertNodes(t, a), Nt(t, "ssml-sub", a.domId, (i) => yr(t, i, (s) => s.value));
  }
}
const v2 = /* @__PURE__ */ B({
  emits: ["error"],
  setup(e, {
    emit: t
  }) {
    const n = new p2(), r = ae("editor"), o = $(), a = $(!1), i = Kt();
    function s() {
      a.value || (a.value = !0);
    }
    function l() {
      a.value && (a.value = !1);
    }
    async function u(d) {
      if (n.isDisabled(d)) {
        t("error", "选中一个中文字符，并且有不能在其他语句之内");
        return;
      }
      s(), i.value = d.selection, o.value.focus();
    }
    function f(d) {
      l();
      const m = r == null ? void 0 : r.value;
      !m || !d || (m.select(i.value), !n.isDisabled(m) && n.exec(m, d));
    }
    return () => N(Xt, {
      visible: a.value,
      "onUpdate:visible": (d) => a.value = d,
      trigger: "contextmenu",
      placement: "right-end",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => N(Et, {
        text: "别名",
        icon: "alias",
        onClick: u
      }, null),
      default: () => N(Na, {
        ref: o,
        onSubmit: f
      }, null)
    });
  }
});
function m2(e) {
  const { selection: t } = e;
  if (t) {
    const [n, r] = St.edges(t), o = Te.range(e, n, r), a = Te.string(e, o), i = a.trimEnd();
    if (i !== a) {
      const s = a.length - i.length, l = { ...r, offset: r.offset - s }, u = { ...t, anchor: n, focus: l };
      ye.select(e, u);
    }
  }
}
function h2() {
  return Ft("w-e-dom-english");
}
class g2 {
  getValue(t) {
    const {
      selection: n
    } = t;
    return n == null ? null : Te.string(t, n);
  }
  isDisabled(t) {
    const {
      selection: n
    } = t;
    if (n == null || St.isCollapsed(n))
      return !0;
    const r = Te.string(t, n);
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
      domId: h2(),
      word: o,
      phoneme: n,
      remark: n,
      bgColor: "english",
      children: [{
        text: ""
      }]
    };
    ye.delete(t), ye.insertNodes(t, a), t.move(1), Nt(t, "ssml-p", a.domId, (i) => yr(t, i, (s) => s.word));
  }
}
function b2(e) {
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
const y2 = /* @__PURE__ */ B({
  emits: ["error"],
  props: ["popover", "fetch"],
  setup(e, {
    emit: t
  }) {
    const n = new g2(), r = ae("editor"), o = $([]), a = $(!1);
    function i() {
      a.value || (a.value = !0);
    }
    function s() {
      a.value && (a.value = !1);
    }
    async function l(u) {
      if (m2(u), n.isDisabled(u))
        return t("error", "请选择英文单词");
      const f = n.getValue(u);
      if (f) {
        if (o.value = await (e.fetch || b2)(f), o.value.length <= 0)
          return t("error", "找不到单词的音标");
        i();
      }
    }
    return () => N(Xt, {
      visible: a.value,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => N(Et, {
        text: "音标",
        icon: "english",
        onClick: l
      }, null),
      default: () => N("div", {
        class: "flex flex-col"
      }, [o.value.map(({
        id: u,
        text: f
      }) => N("div", {
        key: u,
        class: "btn full",
        onClick: () => {
          n.isDisabled(r == null ? void 0 : r.value) || n.exec(r == null ? void 0 : r.value, f), s();
        },
        onMousedown: Oe(() => {
        }, ["stop", "prevent"])
      }, [f]))])
    });
  }
});
function w2() {
  return Ft("w-e-dom-changespeed");
}
class S2 {
  getValue(t) {
    const {
      selection: n
    } = t;
    return n == null ? null : Te.string(t, n);
  }
  isDisabled(t) {
    const {
      selection: n
    } = t;
    return !!(n == null || St.isCollapsed(n) || Te.string(t, n).length <= 1);
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
      domId: w2(),
      remark: n,
      rate: n,
      bgColor: "changespeed",
      children: [{
        text: o
      }]
    };
    ye.delete(t), ye.insertNodes(t, a), Nt(t, "ssml-prosody", a.domId, (i) => {
      ye.unwrapNodes(t, {
        at: i[1]
      });
    });
  }
}
function E2() {
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
const O2 = /* @__PURE__ */ B({
  emits: ["error"],
  setup(e, {
    emit: t
  }) {
    const n = new S2(), r = ae("editor"), o = $([]), a = $(!1);
    function i() {
      a.value || (a.value = !0);
    }
    function s() {
      a.value && (a.value = !1);
    }
    async function l(u) {
      if (o.value = await E2(), n.isDisabled(u)) {
        t("error", "选中一个中文字符，并且有不能在其他语句之内");
        return;
      }
      i();
    }
    return () => N(Xt, {
      style: {
        padding: "0px"
      },
      visible: a.value,
      "onUpdate:visible": (u) => a.value = u,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => N(Et, {
        text: "局部变速",
        icon: "changespeed",
        onClick: l
      }, null),
      default: () => N("div", {
        class: "flex flex-col h h-50 scroll scroll-y"
      }, [o.value.map(({
        id: u,
        text: f
      }) => N("div", {
        key: u,
        class: "btn full",
        onClick: () => {
          n.isDisabled(r == null ? void 0 : r.value) || n.exec(r == null ? void 0 : r.value, f), s();
        },
        onMousedown: Oe(() => {
        }, ["stop", "prevent"])
      }, [f]))])
    });
  }
});
function _2() {
  return Ft("w-e-dom-rhythm");
}
class T2 {
  isDisabled(t) {
    const {
      selection: n
    } = t;
    return !!(n == null || St.isExpanded(n));
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
      domId: _2(),
      time: n.id,
      remark: n.remark,
      bgColor: "rhythm",
      children: [{
        text: ""
      }]
    };
    ye.insertNodes(t, o), t.move(1), Nt(t, "ssml-break", o.domId, (a) => {
      ye.delete(t, {
        at: a[1]
      });
    });
  }
}
const $2 = [{
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
}], C2 = /* @__PURE__ */ B({
  emits: ["error"],
  setup(e, {
    emit: t
  }) {
    const n = new T2(), r = ae("editor"), o = $(!1);
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
    return () => N(Xt, {
      visible: o.value,
      "onUpdate:visible": (l) => o.value = l,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => N(Et, {
        text: "停顿调节",
        icon: "rhythm",
        onClick: s
      }, null),
      default: () => N("div", {
        class: "flex flex-col"
      }, [$2.map(({
        id: l,
        text: u,
        remark: f
      }) => N("div", {
        key: l,
        class: "btn radius ssml-menu item full",
        onClick: () => {
          n.isDisabled(r == null ? void 0 : r.value) || n.exec(r == null ? void 0 : r.value, {
            id: l,
            text: u,
            remark: f
          }), i();
        },
        onMousedown: Oe(() => {
        }, ["stop", "prevent"])
      }, [u]))])
    });
  }
});
function x2() {
  return Ft("w-e-dom-special");
}
class I2 {
  getValue(t) {
    const {
      selection: n
    } = t;
    return n == null ? null : Te.string(t, n);
  }
  isDisabled(t) {
    const {
      selection: n
    } = t;
    return n == null || St.isExpanded(n) ? !0 : Te.string(t, n).length > 0;
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
      domId: x2(),
      remark: `[${n}]`,
      alias: n,
      value: o,
      bgColor: "alias",
      children: [{
        text: ""
      }]
    };
    ye.delete(t), ye.insertNodes(t, a), Nt(t, "ssml-sub", a.domId, (i) => yr(t, i, (s) => s.value));
  }
}
const A2 = /* @__PURE__ */ B({
  emits: ["error"],
  setup(e, {
    emit: t
  }) {
    const n = new I2(), r = $(!1);
    async function o(a) {
      if (n.isDisabled(a)) {
        t("error", "请选中编辑区，并且不能选中文字");
        return;
      }
    }
    return () => N(Xt, {
      visible: r.value,
      "onUpdate:visible": (a) => r.value = a,
      trigger: "click",
      hideAfter: 0,
      width: 500
    }, {
      reference: () => N(Et, {
        text: "音效",
        icon: "special",
        onClick: o
      }, null),
      default: () => N(yw, null, null)
    });
  }
});
function M2() {
  return Ft("w-e-dom-mute");
}
class P2 {
  isDisabled(t) {
    const {
      selection: n
    } = t;
    return !!(n == null || St.isExpanded(n));
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
      domId: M2(),
      time: n,
      remark: n,
      bgColor: "mute",
      children: [{
        text: ""
      }]
    };
    ye.insertNodes(t, o), t.move(1), Nt(t, "ssml-break", o.domId, (a) => {
      ye.delete(t, {
        at: a[1]
      });
    });
  }
}
const k2 = [{
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
}], L2 = /* @__PURE__ */ B({
  emits: ["error"],
  setup(e, {
    emit: t
  }) {
    const n = new P2(), r = ae("editor");
    r || t("error", "请注入editor");
    const o = $(!1), a = $(), i = Kt();
    function s() {
      o.value || (o.value = !0);
    }
    function l() {
      o.value && (o.value = !1);
    }
    function u(d) {
      if (n.isDisabled(d)) {
        t("error", "不能选择文本");
        return;
      }
      s(), i.value = d.selection, a.value.focus();
    }
    function f(d) {
      l();
      const m = r == null ? void 0 : r.value;
      !m || !d || (m.select(i.value), !n.isDisabled(m) && n.exec(m, d));
    }
    return () => N(Xt, {
      visible: o.value,
      "onUpdate:visible": (d) => o.value = d,
      trigger: "contextmenu",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => N(Et, {
        text: "插入静音",
        icon: "mute",
        onClick: u
      }, null),
      default: () => N("div", {
        class: "flex flex-col"
      }, [k2.map(({
        id: d,
        text: m
      }) => N("div", {
        key: d,
        class: "btn radius ssml-menu item full",
        onClick: () => f(d),
        onMousedown: Oe(() => {
        }, ["stop", "prevent"])
      }, [m])), N(Na, {
        type: "number",
        ref: a,
        onSubmit: f
      }, null)])
    });
  }
});
function Ns(e, t, n, r, o) {
  const a = t === void 0 ? void 0 : t.key;
  return { sel: e, data: t, children: n, text: r, elm: o, key: a };
}
const Rs = Array.isArray;
function Ro(e) {
  return typeof e == "string" || typeof e == "number" || e instanceof String || e instanceof Number;
}
function mu(e, t, n) {
  if (e.ns = "http://www.w3.org/2000/svg", n !== "foreignObject" && t !== void 0)
    for (let r = 0; r < t.length; ++r) {
      const o = t[r];
      if (typeof o == "string")
        continue;
      const a = o.data;
      a !== void 0 && mu(a, o.children, o.sel);
    }
}
function X(e, t, n) {
  let r = {}, o, a, i;
  if (n !== void 0 ? (t !== null && (r = t), Rs(n) ? o = n : Ro(n) ? a = n.toString() : n && n.sel && (o = [n])) : t != null && (Rs(t) ? o = t : Ro(t) ? a = t.toString() : t && t.sel ? o = [t] : r = t), o !== void 0)
    for (i = 0; i < o.length; ++i)
      Ro(o[i]) && (o[i] = Ns(void 0, void 0, void 0, o[i], void 0));
  return e[0] === "s" && e[1] === "v" && e[2] === "g" && (e.length === 3 || e[3] === "." || e[3] === "#") && mu(r, o, e), Ns(e, r, o, a, void 0);
}
const nt = { style: { userSelect: "none" }, contentEditable: !1 };
function F2(e) {
  const { domId: t, bgColor: n, remark: r, word: o } = e;
  return X("span.ssml-wrap", { ...nt }, [
    X(`span.tag.bg-color.${n}`, [
      X("span.tag-remark", { attrs: { "data-tag-remark": r } }),
      X(`span#${t}.btn.btn-text`, X("span.iconfont.icon-roundclosefill", null))
    ]),
    X(`span.boundary.start.ft-color.${n}`),
    X("span", o),
    X(`span.boundary.end.ft-color.${n}`)
  ]);
}
function N2(e, t) {
  const { bgColor: n, domId: r, remark: o, value: a } = e;
  return X("span.ssml-wrap", t ? {} : { ...nt }, [
    X(`span.tag.bg-color.${n}`, { ...nt }, [
      X("span.tag-remark", { attrs: { "data-tag-remark": o } }),
      X(`span#${r}.btn.btn-text`, X("span.iconfont.icon-roundclosefill", null))
    ]),
    X(`span.boundary.start.ft-color.${n}`, { ...nt }),
    X("span", t || a),
    X(`span.boundary.end.ft-color.${n}`, { ...nt })
  ]);
}
function R2(e, t) {
  const { bgColor: n, domId: r, remark: o } = e;
  return X("span.ssml-wrap", [
    X(`span.tag.bg-color.${n}`, { ...nt }, [
      X("span.tag-remark", { attrs: { "data-tag-remark": o } }),
      X(`span#${r}.btn.btn-text`, X("span.iconfont.icon-roundclosefill", null))
    ]),
    X(`span.boundary.start.ft-color.${n}`, { ...nt }),
    X("span", t),
    X(`span.boundary.end.ft-color.${n}`, { ...nt })
  ]);
}
function B2(e) {
  const { domId: t, remark: n, bgColor: r } = e;
  return X("span.ssml-wrap", [
    X(`span.tag.bg-color.${r}`, { ...nt }, [
      X("span.tag-remark", { attrs: { "data-tag-remark": n } }),
      X(`span#${t}.btn.btn-text`, X("span.iconfont.icon-roundclosefill", null))
    ])
  ]);
}
function D2(e) {
  const { domId: t, remark: n, bgColor: r, value: o } = e;
  return X("span.ssml-wrap", { ...nt }, [
    X(`span.tag.bg-color.${r}`, [
      X("span.tag-remark", { attrs: { "data-tag-remark": n } }),
      X(`span#${t}.btn.btn-text`, X("span.iconfont.icon-roundclosefill"))
    ]),
    X(`span.boundary.start.ft-color.${r}`),
    X("span", o),
    X(`span.boundary.end.ft-color.${r}`)
  ]);
}
function j2(e, t) {
  const { bgColor: n, domId: r, remark: o } = e;
  return X("span.ssml-wrap", [
    X(`span.tag.bg-color.${n}`, { ...nt }, [
      X("span.tag-remark", { attrs: { "data-tag-remark": o } }),
      X(`span#${r}.btn.btn-text`, X("span.iconfont.icon-roundclosefill", null))
    ]),
    X(`span.boundary.start.ft-color.${n}`, { ...nt }),
    X("span", t),
    X(`span.boundary.end.ft-color.${n}`, { ...nt })
  ]);
}
const z2 = [
  {
    type: "ssml-p",
    renderElem: F2
  },
  {
    type: "ssml-w",
    renderElem: N2
  },
  {
    type: "ssml-say-as",
    renderElem: R2
  },
  {
    type: "ssml-break",
    renderElem: B2
  },
  {
    type: "ssml-sub",
    renderElem: D2
  },
  {
    type: "ssml-prosody",
    renderElem: j2
  }
];
function H2(e, t) {
  return `<s>${t}</s>`;
}
function V2(e, t) {
  const { phoneme: n, value: r } = e;
  return n ? `<w phoneme="${n}">${r}</w>` : `<w>${t}</w>`;
}
function q2(e) {
  const { word: t, phoneme: n } = e;
  return `<p ph="${n}">${t}</p>`;
}
function W2(e, t) {
  const { interpretAs: n } = e;
  return `<say-as interpret-as="${n}">${t}</say-as>`;
}
function K2(e) {
  const { time: t } = e;
  return `<break time="${t}" />`;
}
function U2(e) {
  const { alias: t, value: n } = e;
  return `<sub alias="${t}">${n}</sub>`;
}
function G2(e, t) {
  const { rate: n } = e;
  return `<prosody rate="${n}">${t}</prosody>`;
}
const Y2 = [
  {
    type: "paragraph",
    elemToHtml: H2
  },
  {
    type: "ssml-w",
    elemToHtml: V2
  },
  {
    type: "ssml-p",
    elemToHtml: q2
  },
  {
    type: "ssml-say-as",
    elemToHtml: W2
  },
  {
    type: "ssml-break",
    elemToHtml: K2
  },
  {
    type: "ssml-sub",
    elemToHtml: U2
  },
  {
    type: "ssml-prosody",
    elemToHtml: G2
  }
];
function it(e, t) {
  return e === t;
}
function Z2(e) {
  const { isInline: t, isVoid: n, deleteBackward: r, deleteForward: o, insertBreak: a, getHtml: i, apply: s } = e, l = e;
  l.isInline = (f) => {
    const d = Bo.getNodeType(f);
    return it(d, "ssml-w") || it(d, "ssml-p") || it(d, "ssml-break") || it(d, "ssml-say-as") || it(d, "ssml-sub") || it(d, "ssml-prosody") ? !0 : t(f);
  }, l.isVoid = (f) => {
    const d = Bo.getNodeType(f);
    if (it(d, "ssml-w")) {
      const { phoneme: m } = f;
      return !!m;
    }
    return it(d, "ssml-p") || it(d, "ssml-break") ? !0 : it(d, "ssml-say-as") ? !1 : it(d, "ssml-sub") ? !0 : it(d, "ssml-prosody") ? !1 : n(f);
  }, l.deleteBackward = (f) => {
    r(f);
  }, l.deleteForward = (f) => {
    o(f);
  }, l.insertBreak = () => {
    a();
  };
  const u = {};
  return e.on("updateSpeak", (f) => {
    Object.assign(u, f);
  }), l.getHtml = () => {
    const f = i();
    return `<speak volume="${u.volume}" pitch="${u.pitch}" rate="${u.rate}" voice="${u.voice}">${f}</speak>`;
  }, l.apply = (f) => {
    s(f);
  }, l;
}
const rS = {
  editorPlugin: Z2,
  renderElems: z2,
  elemsToHtml: Y2
};
const oS = {
  install: (e) => {
    e.component("BarButton", Et), e.component("BarInput", Na), e.component("SpeakerMenu", e2), e.component("ContinuousMenu", r2), e.component("ReadMenu", s2), e.component("DigitalMenu", f2), e.component("AliasMenu", v2), e.component("EnglishMenu", y2), e.component("ChangespeedMenu", O2), e.component("RhythmMenu", C2), e.component("SpecialMenu", A2), e.component("MuteMenu", L2);
  }
};
export {
  v2 as AliasMenu,
  Et as BarButton,
  Na as BarInput,
  O2 as ChangespeedMenu,
  r2 as ContinuousMenu,
  f2 as DigitalMenu,
  oS as EditorMenuPlugin,
  y2 as EnglishMenu,
  L2 as MuteMenu,
  s2 as ReadMenu,
  C2 as RhythmMenu,
  rS as SSMLModule,
  e2 as SpeakerMenu,
  A2 as SpecialMenu
};

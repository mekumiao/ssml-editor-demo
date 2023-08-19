import { defineComponent as $, inject as M, openBlock as D, createElementBlock as B, normalizeClass as fe, withModifiers as T, createElementVNode as E, toDisplayString as G, ref as v, createBlock as ee, unref as S, withCtx as L, createVNode as m, renderSlot as K, createTextVNode as oe, Fragment as ie, renderList as ue, pushScopeId as ct, popScopeId as ft, getCurrentInstance as ve, onMounted as he, nextTick as dt, watch as X, customRef as pt, getCurrentScope as mt, onScopeDispose as vt, shallowRef as Z, onUpdated as ht, computed as ge, withDirectives as gt, normalizeStyle as bt, vShow as yt } from "vue";
import { SlateEditor as w, SlateElement as wt, DomEditor as de, SlateText as xt, SlateTransforms as b, SlatePath as _t, SlateRange as A } from "@wangeditor/editor";
import { ElForm as Je, ElInput as Qe, ElPopover as P, ElMenu as kt, ElMenuItem as le, ElSelect as Se, ElOption as Ee, ElCard as $t, ElDialog as Ye } from "element-plus";
import { Search as St } from "@element-plus/icons-vue";
const Et = { class: "button" }, Ct = { class: "content" }, Dt = /* @__PURE__ */ $({
  __name: "bar-button",
  props: {
    text: {},
    icon: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const n = t, r = M("editor"), s = () => {
      !n.disabled && r && e("click", r == null ? void 0 : r.value);
    };
    return (o, i) => (D(), B("div", {
      class: fe(["btn bar-button", { disabled: o.disabled }]),
      onClick: s,
      onMousedown: i[0] || (i[0] = T(() => {
      }, ["prevent"]))
    }, [
      E("div", Et, [
        E("span", {
          class: fe(["font-size-30 iconfont-moyin", [`moyin-icon_${o.icon}`]])
        }, null, 2)
      ]),
      E("div", Ct, G(o.text), 1)
    ], 34));
  }
});
const z = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, s] of e)
    n[r] = s;
  return n;
}, I = /* @__PURE__ */ z(Dt, [["__scopeId", "data-v-94376aa5"]]);
const be = /* @__PURE__ */ $({
  __name: "bar-input",
  props: {
    type: {}
  },
  emits: ["submit"],
  setup(t, { expose: e, emit: n }) {
    const r = v(""), s = v();
    function o() {
      s.value.focus();
    }
    function i() {
      n("submit", r.value), r.value = "";
    }
    return e({
      focus: o
    }), (f, c) => (D(), ee(S(Je), {
      class: "flex flex-row",
      onSubmit: T(i, ["prevent"])
    }, {
      default: L(() => [
        m(S(Qe), {
          type: f.type,
          ref_key: "inputRef",
          ref: s,
          modelValue: r.value,
          "onUpdate:modelValue": c[0] || (c[0] = (u) => r.value = u)
        }, null, 8, ["type", "modelValue"])
      ]),
      _: 1
    }, 8, ["onSubmit"]));
  }
});
const Ot = /* @__PURE__ */ $({
  __name: "bar-popover",
  props: {
    visible: { type: Boolean },
    trigger: {},
    hideAfter: {},
    width: {}
  },
  emits: ["update:visible"],
  setup(t) {
    return (e, n) => (D(), ee(S(P), {
      hideAfter: e.hideAfter,
      width: e.width,
      visible: e.visible,
      trigger: e.trigger,
      "onUpdate:visible": n[0] || (n[0] = (r) => e.$emit("update:visible", r))
    }, {
      reference: L(() => [
        K(e.$slots, "reference")
      ]),
      default: L(() => [
        K(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["hideAfter", "width", "visible", "trigger"]));
  }
});
const J = (t) => (ct("data-v-889b5093"), t = t(), ft(), t), It = { class: "search-content" }, Lt = { class: "menu" }, Tt = /* @__PURE__ */ J(() => /* @__PURE__ */ E("div", { class: "h h-1" }, null, -1)), Mt = { class: "flex flex-row" }, At = /* @__PURE__ */ J(() => /* @__PURE__ */ E("div", { class: "h-1" }, null, -1)), Bt = { class: "content flex flex-col" }, Nt = ["onClick"], Vt = /* @__PURE__ */ J(() => /* @__PURE__ */ E("div", { class: "w-2" }, null, -1)), Ft = /* @__PURE__ */ J(() => /* @__PURE__ */ E("span", { class: "iconfont icon-play" }, null, -1)), Pt = /* @__PURE__ */ J(() => /* @__PURE__ */ E("div", { class: "w-1" }, null, -1)), jt = /* @__PURE__ */ $({
  __name: "search-content",
  props: {
    menuItemLabel: {},
    scenes: {},
    styles: {},
    dataList: {}
  },
  emits: ["submit", "fetch"],
  setup(t, { emit: e }) {
    const n = v(""), r = v(""), s = v(""), o = v("first");
    function i() {
      e("fetch", {
        search: n.value,
        menuKey: o.value,
        scene: r.value,
        style: s.value
      });
    }
    function f(u) {
      o.value = u, i();
    }
    function c(u) {
      e("submit", u);
    }
    return (u, l) => (D(), B("div", It, [
      m(S(Je), {
        onSubmit: T(i, ["prevent"])
      }, {
        default: L(() => [
          m(S(Qe), {
            placeholder: "搜索",
            modelValue: n.value,
            "onUpdate:modelValue": l[0] || (l[0] = (a) => n.value = a),
            "suffix-icon": S(St)
          }, null, 8, ["modelValue", "suffix-icon"])
        ]),
        _: 1
      }, 8, ["onSubmit"]),
      E("div", Lt, [
        m(S(kt), {
          mode: "horizontal",
          "default-active": "first",
          onSelect: l[1] || (l[1] = (a) => f(a))
        }, {
          default: L(() => [
            m(S(le), { index: "first" }, {
              default: L(() => [
                oe(G(u.menuItemLabel.first), 1)
              ]),
              _: 1
            }),
            m(S(le), { index: "second" }, {
              default: L(() => [
                oe(G(u.menuItemLabel.second), 1)
              ]),
              _: 1
            }),
            m(S(le), { index: "last" }, {
              default: L(() => [
                oe(G(u.menuItemLabel.last), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      Tt,
      E("div", Mt, [
        m(S(Se), {
          modelValue: r.value,
          "onUpdate:modelValue": l[2] || (l[2] = (a) => r.value = a),
          onChange: i,
          class: "m m-2",
          size: "large"
        }, {
          default: L(() => [
            (D(!0), B(ie, null, ue(u.scenes, (a) => (D(), ee(S(Ee), {
              key: a.value,
              label: a.label,
              value: a.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        m(S(Se), {
          modelValue: s.value,
          "onUpdate:modelValue": l[3] || (l[3] = (a) => s.value = a),
          onChange: i,
          class: "m m-2",
          size: "large"
        }, {
          default: L(() => [
            (D(!0), B(ie, null, ue(u.styles, (a) => (D(), ee(S(Ee), {
              key: a.value,
              label: a.label,
              value: a.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      At,
      E("div", Bt, [
        (D(!0), B(ie, null, ue(u.dataList, (a, d) => (D(), B("div", {
          onClick: (g) => c(a),
          class: "btn full p-4 item",
          key: d
        }, [
          Vt,
          Ft,
          Pt,
          E("div", null, G(a.label), 1)
        ], 8, Nt))), 128))
      ])
    ]));
  }
});
const ye = /* @__PURE__ */ z(jt, [["__scopeId", "data-v-889b5093"]]);
function Wt(t, e) {
  let n, r, s;
  const o = v(!0), i = () => {
    o.value = !0, s();
  };
  X(t, i, { flush: "sync" });
  const f = typeof e == "function" ? e : e.get, c = typeof e == "function" ? void 0 : e.set, u = pt((l, a) => (r = l, s = a, {
    get() {
      return o.value && (n = f(), o.value = !1), r(), n;
    },
    set(d) {
      c == null || c(d);
    }
  }));
  return Object.isExtensible(u) && (u.trigger = i), u;
}
function et(t) {
  return mt() ? (vt(t), !0) : !1;
}
function we(t) {
  return typeof t == "function" ? t() : S(t);
}
const Ht = typeof window < "u", Ut = () => {
};
function tt(t, e = !0) {
  ve() ? he(t) : e ? t() : dt(t);
}
function R(t) {
  var e;
  const n = we(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const nt = Ht ? window : void 0;
function Ce(...t) {
  let e, n, r, s;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, r, s] = t, e = nt) : [e, n, r, s] = t, !e)
    return Ut;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const o = [], i = () => {
    o.forEach((l) => l()), o.length = 0;
  }, f = (l, a, d, g) => (l.addEventListener(a, d, g), () => l.removeEventListener(a, d, g)), c = X(
    () => [R(e), we(s)],
    ([l, a]) => {
      i(), l && o.push(
        ...n.flatMap((d) => r.map((g) => f(l, d, g, a)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    c(), i();
  };
  return et(u), u;
}
function Rt() {
  const t = v(!1);
  return ve() && he(() => {
    t.value = !0;
  }), t;
}
function zt(t) {
  const e = Rt();
  return ge(() => (e.value, !!t()));
}
function qt() {
  const t = ve(), e = Wt(
    () => null,
    () => t.proxy.$el
  );
  return ht(e.trigger), he(e.trigger), e;
}
var De = Object.getOwnPropertySymbols, Gt = Object.prototype.hasOwnProperty, Kt = Object.prototype.propertyIsEnumerable, Xt = (t, e) => {
  var n = {};
  for (var r in t)
    Gt.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && De)
    for (var r of De(t))
      e.indexOf(r) < 0 && Kt.call(t, r) && (n[r] = t[r]);
  return n;
};
function Zt(t, e, n = {}) {
  const r = n, { window: s = nt } = r, o = Xt(r, ["window"]);
  let i;
  const f = zt(() => s && "ResizeObserver" in s), c = () => {
    i && (i.disconnect(), i = void 0);
  }, u = ge(
    () => Array.isArray(t) ? t.map((d) => R(d)) : [R(t)]
  ), l = X(
    u,
    (d) => {
      if (c(), f.value && s) {
        i = new ResizeObserver(e);
        for (const g of d)
          g && i.observe(g, o);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), a = () => {
    c(), l();
  };
  return et(a), {
    isSupported: f,
    stop: a
  };
}
function Jt(t, e = {}) {
  const {
    reset: n = !0,
    windowResize: r = !0,
    windowScroll: s = !0,
    immediate: o = !0
  } = e, i = v(0), f = v(0), c = v(0), u = v(0), l = v(0), a = v(0), d = v(0), g = v(0);
  function y() {
    const k = R(t);
    if (!k) {
      n && (i.value = 0, f.value = 0, c.value = 0, u.value = 0, l.value = 0, a.value = 0, d.value = 0, g.value = 0);
      return;
    }
    const x = k.getBoundingClientRect();
    i.value = x.height, f.value = x.bottom, c.value = x.left, u.value = x.right, l.value = x.top, a.value = x.width, d.value = x.x, g.value = x.y;
  }
  return Zt(t, y), X(() => R(t), (k) => !k && y()), s && Ce("scroll", y, { capture: !0, passive: !0 }), r && Ce("resize", y, { passive: !0 }), tt(() => {
    o && y();
  }), {
    height: i,
    bottom: f,
    left: c,
    right: u,
    top: l,
    width: a,
    x: d,
    y: g,
    update: y
  };
}
function Qt(t = qt()) {
  const e = Z(), n = () => {
    const r = R(t);
    r && (e.value = r.parentElement);
  };
  return tt(n), X(() => we(t), n), e;
}
const Yt = { class: "content" }, en = /* @__PURE__ */ $({
  __name: "top-panel",
  setup(t, { expose: e }) {
    const n = v(!1), r = Qt(), { top: s, left: o } = Jt(r), i = ge(() => `top:${s.value}px;left:${o.value}px`);
    function f() {
      n.value = !0;
    }
    function c() {
      n.value = !1;
    }
    return e({
      show: f,
      hide: c
    }), (u, l) => gt((D(), B("div", {
      class: "panel",
      style: bt(i.value)
    }, [
      m(S($t), null, {
        default: L(() => [
          E("div", Yt, [
            K(u.$slots, "default", {}, void 0, !0)
          ])
        ]),
        _: 3
      })
    ], 4)), [
      [yt, n.value]
    ]);
  }
});
const tn = /* @__PURE__ */ z(en, [["__scopeId", "data-v-298dc86b"]]), nn = {}, rn = { class: "content" };
function sn(t, e) {
  return D(), B("div", rn);
}
const on = /* @__PURE__ */ z(nn, [["render", sn]]), un = {}, ln = { class: "bar-wrapper-item" };
function an(t, e) {
  return D(), B("div", ln, [
    K(t.$slots, "default")
  ]);
}
const cn = /* @__PURE__ */ z(un, [["render", an]]), fn = { class: "bar-wrapper-group" }, dn = { class: "group-items" }, pn = /* @__PURE__ */ $({
  __name: "bar-wrapper-group",
  props: {
    divider: { default: "green" }
  },
  setup(t) {
    return (e, n) => (D(), B("div", fn, [
      E("div", {
        class: fe(["divider", [e.divider]])
      }, null, 2),
      E("div", dn, [
        K(e.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
});
const mn = /* @__PURE__ */ z(pn, [["__scopeId", "data-v-74379d98"]]), vn = {
  install(t) {
    t.component("BarButton", I), t.component("BarInput", be), t.component("BarPopover", Ot), t.component("BarSearch", ye), t.component("TopPanel", tn), t.component("BarWrapper", on), t.component("BarWrapperItem", cn), t.component("BarWrapperGroup", mn);
  }
};
let hn = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
function N(t = "r") {
  return `${t}-${hn()}`;
}
var Q = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var rt = "Expected a function", Oe = 0 / 0, bn = "[object Symbol]", yn = /^\s+|\s+$/g, wn = /^[-+]0x[0-9a-f]+$/i, xn = /^0b[01]+$/i, _n = /^0o[0-7]+$/i, kn = parseInt, $n = typeof Q == "object" && Q && Q.Object === Object && Q, Sn = typeof self == "object" && self && self.Object === Object && self, En = $n || Sn || Function("return this")(), Cn = Object.prototype, Dn = Cn.toString, On = Math.max, In = Math.min, ae = function() {
  return En.Date.now();
};
function Ln(t, e, n) {
  var r, s, o, i, f, c, u = 0, l = !1, a = !1, d = !0;
  if (typeof t != "function")
    throw new TypeError(rt);
  e = Ie(e) || 0, te(n) && (l = !!n.leading, a = "maxWait" in n, o = a ? On(Ie(n.maxWait) || 0, e) : o, d = "trailing" in n ? !!n.trailing : d);
  function g(_) {
    var j = r, q = s;
    return r = s = void 0, u = _, i = t.apply(q, j), i;
  }
  function y(_) {
    return u = _, f = setTimeout(F, e), l ? g(_) : i;
  }
  function k(_) {
    var j = _ - c, q = _ - u, $e = e - j;
    return a ? In($e, o - q) : $e;
  }
  function x(_) {
    var j = _ - c, q = _ - u;
    return c === void 0 || j >= e || j < 0 || a && q >= o;
  }
  function F() {
    var _ = ae();
    if (x(_))
      return H(_);
    f = setTimeout(F, k(_));
  }
  function H(_) {
    return f = void 0, d && r ? g(_) : (r = s = void 0, i);
  }
  function U() {
    f !== void 0 && clearTimeout(f), u = 0, r = c = s = f = void 0;
  }
  function at() {
    return f === void 0 ? i : H(ae());
  }
  function se() {
    var _ = ae(), j = x(_);
    if (r = arguments, s = this, c = _, j) {
      if (f === void 0)
        return y(c);
      if (a)
        return f = setTimeout(F, e), g(c);
    }
    return f === void 0 && (f = setTimeout(F, e)), i;
  }
  return se.cancel = U, se.flush = at, se;
}
function Tn(t, e, n) {
  var r = !0, s = !0;
  if (typeof t != "function")
    throw new TypeError(rt);
  return te(n) && (r = "leading" in n ? !!n.leading : r, s = "trailing" in n ? !!n.trailing : s), Ln(t, e, {
    leading: r,
    maxWait: e,
    trailing: s
  });
}
function te(t) {
  var e = typeof t;
  return !!t && (e == "object" || e == "function");
}
function Mn(t) {
  return !!t && typeof t == "object";
}
function An(t) {
  return typeof t == "symbol" || Mn(t) && Dn.call(t) == bn;
}
function Ie(t) {
  if (typeof t == "number")
    return t;
  if (An(t))
    return Oe;
  if (te(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = te(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = t.replace(yn, "");
  var n = xn.test(t);
  return n || _n.test(t) ? kn(t.slice(2), n ? 2 : 8) : wn.test(t) ? Oe : +t;
}
var Bn = Tn;
const Nn = /* @__PURE__ */ gn(Bn);
function Le(t) {
  return t !== null && typeof t == "object" && "constructor" in t && t.constructor === Object;
}
function xe(t, e) {
  t === void 0 && (t = {}), e === void 0 && (e = {}), Object.keys(e).forEach(function(n) {
    typeof t[n] > "u" ? t[n] = e[n] : Le(e[n]) && Le(t[n]) && Object.keys(e[n]).length > 0 && xe(t[n], e[n]);
  });
}
var st = {
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
function _e() {
  var t = typeof document < "u" ? document : {};
  return xe(t, st), t;
}
var Vn = {
  document: st,
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
  requestAnimationFrame: function(t) {
    return typeof setTimeout > "u" ? (t(), null) : setTimeout(t, 0);
  },
  cancelAnimationFrame: function(t) {
    typeof setTimeout > "u" || clearTimeout(t);
  }
};
function ot() {
  var t = typeof window < "u" ? window : {};
  return xe(t, Vn), t;
}
function Fn(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
}
function pe(t) {
  return pe = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, pe(t);
}
function ne(t, e) {
  return ne = Object.setPrototypeOf || function(r, s) {
    return r.__proto__ = s, r;
  }, ne(t, e);
}
function Pn() {
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
function Y(t, e, n) {
  return Pn() ? Y = Reflect.construct : Y = function(s, o, i) {
    var f = [null];
    f.push.apply(f, o);
    var c = Function.bind.apply(s, f), u = new c();
    return i && ne(u, i.prototype), u;
  }, Y.apply(null, arguments);
}
function jn(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function me(t) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return me = function(r) {
    if (r === null || !jn(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(r))
        return e.get(r);
      e.set(r, s);
    }
    function s() {
      return Y(r, arguments, pe(this).constructor);
    }
    return s.prototype = Object.create(r.prototype, {
      constructor: {
        value: s,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ne(s, r);
  }, me(t);
}
function Wn(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Hn(t) {
  var e = t.__proto__;
  Object.defineProperty(t, "__proto__", {
    get: function() {
      return e;
    },
    set: function(r) {
      e.__proto__ = r;
    }
  });
}
var W = /* @__PURE__ */ function(t) {
  Fn(e, t);
  function e(n) {
    var r;
    return r = t.call.apply(t, [this].concat(n)) || this, Hn(Wn(r)), r;
  }
  return e;
}(/* @__PURE__ */ me(Array));
function ke(t) {
  t === void 0 && (t = []);
  var e = [];
  return t.forEach(function(n) {
    Array.isArray(n) ? e.push.apply(e, ke(n)) : e.push(n);
  }), e;
}
function Un(t) {
  for (var e = [], n = 0; n < t.length; n += 1)
    e.indexOf(t[n]) === -1 && e.push(t[n]);
  return e;
}
function Rn(t) {
  return t.toLowerCase().replace(/-(.)/g, function(e, n) {
    return n.toUpperCase();
  });
}
function zn(t, e) {
  if (typeof t != "string")
    return [t];
  for (var n = [], r = e.querySelectorAll(t), s = 0; s < r.length; s += 1)
    n.push(r[s]);
  return n;
}
function h(t, e) {
  var n = ot(), r = _e(), s = [];
  if (!e && t instanceof W)
    return t;
  if (!t)
    return new W(s);
  if (typeof t == "string") {
    var o = t.trim();
    if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
      var i = "div";
      o.indexOf("<li") === 0 && (i = "ul"), o.indexOf("<tr") === 0 && (i = "tbody"), (o.indexOf("<td") === 0 || o.indexOf("<th") === 0) && (i = "tr"), o.indexOf("<tbody") === 0 && (i = "table"), o.indexOf("<option") === 0 && (i = "select");
      var f = r.createElement(i);
      f.innerHTML = o;
      for (var c = 0; c < f.childNodes.length; c += 1)
        s.push(f.childNodes[c]);
    } else
      s = zn(t.trim(), e || r);
  } else if (t.nodeType || t === n || t === r)
    s.push(t);
  else if (Array.isArray(t)) {
    if (t instanceof W)
      return t;
    s = t;
  }
  return new W(Un(s));
}
h.fn = W.prototype;
function Te() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  var r = ke(e.map(function(s) {
    return s.split(" ");
  }));
  return this.forEach(function(s) {
    var o;
    (o = s.classList).add.apply(o, r);
  }), this;
}
function Me() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  var r = ke(e.map(function(s) {
    return s.split(" ");
  }));
  return this.forEach(function(s) {
    var o;
    (o = s.classList).remove.apply(o, r);
  }), this;
}
function Ae(t, e) {
  if (arguments.length === 1 && typeof t == "string")
    return this[0] ? this[0].getAttribute(t) : void 0;
  for (var n = 0; n < this.length; n += 1)
    if (arguments.length === 2)
      this[n].setAttribute(t, e);
    else
      for (var r in t)
        this[n][r] = t[r], this[n].setAttribute(r, t[r]);
  return this;
}
function Be() {
  var t = this[0];
  if (t) {
    var e = {};
    if (t.dataset)
      for (var n in t.dataset)
        e[n] = t.dataset[n];
    else
      for (var r = 0; r < t.attributes.length; r += 1) {
        var s = t.attributes[r];
        s.name.indexOf("data-") >= 0 && (e[Rn(s.name.split("data-")[1])] = s.value);
      }
    for (var o in e)
      e[o] === "false" ? e[o] = !1 : e[o] === "true" ? e[o] = !0 : parseFloat(e[o]) === e[o] * 1 && (e[o] *= 1);
    return e;
  }
}
function Ne(t) {
  if (typeof t > "u") {
    var e = this[0];
    if (!e)
      return;
    if (e.multiple && e.nodeName.toLowerCase() === "select") {
      for (var n = [], r = 0; r < e.selectedOptions.length; r += 1)
        n.push(e.selectedOptions[r].value);
      return n;
    }
    return e.value;
  }
  for (var s = 0; s < this.length; s += 1) {
    var o = this[s];
    if (Array.isArray(t) && o.multiple && o.nodeName.toLowerCase() === "select")
      for (var i = 0; i < o.options.length; i += 1)
        o.options[i].selected = t.indexOf(o.options[i].value) >= 0;
    else
      o.value = t;
  }
  return this;
}
function Ve() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  var r = e[0], s = e[1], o = e[2], i = e[3];
  typeof e[1] == "function" && (r = e[0], o = e[1], i = e[2], s = void 0), i || (i = !1);
  function f(k) {
    var x = k.target;
    if (x) {
      var F = k.target.dom7EventData || [];
      if (F.indexOf(k) < 0 && F.unshift(k), h(x).is(s))
        o.apply(x, F);
      else
        for (var H = h(x).parents(), U = 0; U < H.length; U += 1)
          h(H[U]).is(s) && o.apply(H[U], F);
    }
  }
  function c(k) {
    var x = k && k.target ? k.target.dom7EventData || [] : [];
    x.indexOf(k) < 0 && x.unshift(k), o.apply(this, x);
  }
  for (var u = r.split(" "), l, a = 0; a < this.length; a += 1) {
    var d = this[a];
    if (s)
      for (l = 0; l < u.length; l += 1) {
        var y = u[l];
        d.dom7LiveListeners || (d.dom7LiveListeners = {}), d.dom7LiveListeners[y] || (d.dom7LiveListeners[y] = []), d.dom7LiveListeners[y].push({
          listener: o,
          proxyListener: f
        }), d.addEventListener(y, f, i);
      }
    else
      for (l = 0; l < u.length; l += 1) {
        var g = u[l];
        d.dom7Listeners || (d.dom7Listeners = {}), d.dom7Listeners[g] || (d.dom7Listeners[g] = []), d.dom7Listeners[g].push({
          listener: o,
          proxyListener: c
        }), d.addEventListener(g, c, i);
      }
  }
  return this;
}
function Fe() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  var r = e[0], s = e[1], o = e[2], i = e[3];
  typeof e[1] == "function" && (r = e[0], o = e[1], i = e[2], s = void 0), i || (i = !1);
  for (var f = r.split(" "), c = 0; c < f.length; c += 1)
    for (var u = f[c], l = 0; l < this.length; l += 1) {
      var a = this[l], d = void 0;
      if (!s && a.dom7Listeners ? d = a.dom7Listeners[u] : s && a.dom7LiveListeners && (d = a.dom7LiveListeners[u]), d && d.length)
        for (var g = d.length - 1; g >= 0; g -= 1) {
          var y = d[g];
          o && y.listener === o || o && y.listener && y.listener.dom7proxy && y.listener.dom7proxy === o ? (a.removeEventListener(u, y.proxyListener, i), d.splice(g, 1)) : o || (a.removeEventListener(u, y.proxyListener, i), d.splice(g, 1));
        }
    }
  return this;
}
function Pe() {
  for (var t = 0; t < this.length; t += 1)
    this[t].style.display = "none";
  return this;
}
function je(t) {
  return t ? (this.forEach(function(e, n) {
    t.apply(e, [e, n]);
  }), this) : this;
}
function We(t) {
  if (typeof t > "u")
    return this[0] ? this[0].innerHTML : null;
  for (var e = 0; e < this.length; e += 1)
    this[e].innerHTML = t;
  return this;
}
function He(t) {
  var e = ot(), n = _e(), r = this[0], s, o;
  if (!r || typeof t > "u")
    return !1;
  if (typeof t == "string") {
    if (r.matches)
      return r.matches(t);
    if (r.webkitMatchesSelector)
      return r.webkitMatchesSelector(t);
    if (r.msMatchesSelector)
      return r.msMatchesSelector(t);
    for (s = h(t), o = 0; o < s.length; o += 1)
      if (s[o] === r)
        return !0;
    return !1;
  }
  if (t === n)
    return r === n;
  if (t === e)
    return r === e;
  if (t.nodeType || t instanceof W) {
    for (s = t.nodeType ? [t] : t, o = 0; o < s.length; o += 1)
      if (s[o] === r)
        return !0;
    return !1;
  }
  return !1;
}
function Ue() {
  for (var t, e = _e(), n = 0; n < arguments.length; n += 1) {
    t = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    for (var r = 0; r < this.length; r += 1)
      if (typeof t == "string") {
        var s = e.createElement("div");
        for (s.innerHTML = t; s.firstChild; )
          this[r].appendChild(s.firstChild);
      } else if (t instanceof W)
        for (var o = 0; o < t.length; o += 1)
          this[r].appendChild(t[o]);
      else
        this[r].appendChild(t);
  }
  return this;
}
function Re(t) {
  for (var e = [], n = 0; n < this.length; n += 1)
    for (var r = this[n].parentNode; r; )
      t ? h(r).is(t) && e.push(r) : e.push(r), r = r.parentNode;
  return h(e);
}
function ze(t) {
  for (var e = [], n = 0; n < this.length; n += 1)
    for (var r = this[n].querySelectorAll(t), s = 0; s < r.length; s += 1)
      e.push(r[s]);
  return h(e);
}
function qe(t) {
  for (var e = [], n = 0; n < this.length; n += 1)
    for (var r = this[n].children, s = 0; s < r.length; s += 1)
      (!t || h(r[s]).is(t)) && e.push(r[s]);
  return h(e);
}
var qn = "resize scroll".split(" ");
function it(t) {
  function e() {
    for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
      r[s] = arguments[s];
    if (typeof r[0] > "u") {
      for (var o = 0; o < this.length; o += 1)
        qn.indexOf(t) < 0 && (t in this[o] ? this[o][t]() : h(this[o]).trigger(t));
      return this;
    }
    return this.on.apply(this, [t].concat(r));
  }
  return e;
}
var Ge = it("click"), Ke = it("focus");
Pe && (h.fn.hide = Pe);
Ue && (h.fn.append = Ue);
Ge && (h.fn.click = Ge);
Ve && (h.fn.on = Ve);
Fe && (h.fn.off = Fe);
Ke && (h.fn.focus = Ke);
Ae && (h.fn.attr = Ae);
Ne && (h.fn.val = Ne);
We && (h.fn.html = We);
Be && (h.fn.dataset = Be);
Te && (h.fn.addClass = Te);
Me && (h.fn.removeClass = Me);
qe && (h.fn.children = qe);
je && (h.fn.each = je);
ze && (h.fn.find = ze);
He && (h.fn.is = He);
Re && (h.fn.parents = Re);
const us = globalThis.Node, ls = globalThis.Comment, as = globalThis.Element, cs = globalThis.Text, fs = globalThis.Range, ds = globalThis.Selection, ps = globalThis.StaticRange;
function ut(t, e, n, r, s) {
  h("body").on(
    "click",
    `#${r}-${e}`,
    Nn((o) => {
      o.preventDefault();
      const i = Kn(t, n, r);
      return i && s(i);
    })
  );
}
function V(t, e, n, r) {
  return ut(t, "close", e, n, r);
}
function Gn(t, e, n, r) {
  return ut(t, "play", e, n, r);
}
function Kn(t, e, n) {
  const [r] = w.nodes(t, {
    at: [],
    match: (s) => !wt.isElement(s) || !de.checkNodeType(s, e) ? !1 : s.domId === n
  });
  return r;
}
function re(t, e, n) {
  const r = w.previous(t, {
    at: e[1],
    match: (s) => xt.isText(s)
  });
  r != null && (b.insertText(t, n(e[0]), {
    at: w.end(t, r[1])
  }), b.delete(t, { at: _t.next(r[1]) }));
}
function Xn() {
  return N("w-e-dom-speaker");
}
let Zn = class {
  getValue(e) {
    const {
      selection: n
    } = e;
    return n == null ? null : w.string(e, n);
  }
  isDisabled(e) {
    const {
      selection: n
    } = e;
    if (n == null || A.isCollapsed(n))
      return !0;
    const r = w.string(e, n);
    return r.length != 1 || !/^[\u4E00-\u9FA5]+$/gi.test(r);
  }
  exec(e, n) {
    if (this.isDisabled(e))
      return;
    const {
      selection: r
    } = e;
    if (r == null)
      return;
    const s = this.getValue(e);
    if (s == null)
      return;
    const o = {
      type: "ssml-p",
      domId: Xn(),
      word: s,
      phoneme: n,
      remark: n,
      bgColor: "speaker",
      children: [{
        text: ""
      }]
    };
    b.delete(e), b.insertNodes(e, o), e.move(1), V(e, "ssml-p", o.domId, (i) => {
      re(e, i, (f) => f.word);
    });
  }
};
function Jn(t) {
  const e = {
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
  return Promise.resolve(e[t] || e.我);
}
const Qn = /* @__PURE__ */ $({
  emits: ["error"],
  props: ["fetch"],
  setup(t, {
    emit: e
  }) {
    const n = new Zn(), r = M("editor"), s = v([]), o = v(!1);
    function i() {
      o.value || (o.value = !0);
    }
    function f() {
      o.value && (o.value = !1);
    }
    async function c(u) {
      const l = n.getValue(u);
      if (l ? s.value = await (t.fetch || Jn)(l) : s.value = [], n.isDisabled(u))
        return e("error", "选中一个中文字符，并且有不能在其他语句之内");
      if (s.value.length == 0)
        return e("error", "选中的字符没有不是多音字");
      i();
    }
    return () => m(P, {
      visible: o.value,
      "onUpdate:visible": (u) => o.value = u,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => m(I, {
        text: "多音字",
        icon: "speaker",
        onClick: c
      }, null),
      default: () => m("div", {
        class: "flex flex-col"
      }, [s.value.map(({
        id: u,
        text: l
      }) => m("div", {
        key: u,
        class: "btn full",
        onClick: () => {
          n.isDisabled(r == null ? void 0 : r.value) || n.exec(r == null ? void 0 : r.value, l), f();
        },
        onMousedown: T(() => {
        }, ["stop", "prevent"])
      }, [l]))])
    });
  }
});
function Yn() {
  return N("w-e-dom-continuous");
}
class er {
  getValue(e) {
    const {
      selection: n
    } = e;
    return n == null ? "" : w.string(e, n);
  }
  isDisabled(e) {
    const {
      selection: n
    } = e;
    return !!(n == null || A.isCollapsed(n) || w.string(e, n).length < 2);
  }
  exec(e) {
    if (this.isDisabled(e))
      return;
    const {
      selection: n
    } = e;
    if (n == null)
      return;
    const r = this.getValue(e);
    if (r == null)
      return;
    const s = {
      type: "ssml-w",
      domId: Yn(),
      children: [{
        text: r
      }],
      remark: "连读",
      bgColor: "continuous"
    };
    b.delete(e), b.insertNodes(e, s), V(e, "ssml-w", s.domId, (o) => {
      b.unwrapNodes(e, {
        at: o[1]
      });
    });
  }
}
const tr = /* @__PURE__ */ $({
  emits: ["error"],
  setup(t, {
    emit: e
  }) {
    const n = new er();
    function r(s) {
      if (n.isDisabled(s))
        return e("error", "请选择多个中文字符或者多个多个英文单词");
      n.exec(s);
    }
    return () => m(I, {
      text: "连读",
      icon: "continuous",
      onClick: r
    }, null);
  }
});
function nr() {
  return N("w-e-dom-read");
}
class rr {
  getValue(e) {
    const {
      selection: n
    } = e;
    return n == null ? "" : w.string(e, n);
  }
  isDisabled(e) {
    const {
      selection: n
    } = e;
    return !!(n == null || A.isCollapsed(n) || w.string(e, n).length <= 0);
  }
  exec(e, n) {
    if (this.isDisabled(e))
      return;
    const {
      selection: r
    } = e;
    if (r == null)
      return;
    const s = this.getValue(e);
    if (s == null)
      return;
    const o = {
      type: "ssml-w",
      domId: nr(),
      phoneme: n.id,
      remark: n.remark,
      value: s,
      bgColor: "read",
      children: [{
        text: s
      }]
    };
    b.delete(e), b.insertNodes(e, o), V(e, "ssml-w", o.domId, (i) => re(e, i, () => s));
  }
}
const sr = [{
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
}], or = /* @__PURE__ */ $({
  emits: ["error"],
  setup(t, {
    emit: e
  }) {
    const n = new rr(), r = M("editor"), s = v(!1);
    function o() {
      s.value || (s.value = !0);
    }
    function i() {
      s.value && (s.value = !1);
    }
    function f(c) {
      if (n.isDisabled(c)) {
        e("error", "请先选择文本");
        return;
      }
      o();
    }
    return () => m(P, {
      visible: s.value,
      "onUpdate:visible": (c) => s.value = c,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => m(I, {
        text: "重音",
        icon: "read",
        onClick: f
      }, null),
      default: () => m("div", {
        class: "flex flex-col",
        onMousedown: T(() => {
        }, ["stop", "prevent"])
      }, [sr.map(({
        id: c,
        text: u,
        remark: l
      }) => m("div", {
        key: c,
        class: "btn full",
        onClick: () => {
          n.isDisabled(r == null ? void 0 : r.value) || n.exec(r == null ? void 0 : r.value, {
            id: c,
            text: u,
            remark: l
          }), i();
        },
        onMousedown: T(() => {
        }, ["stop", "prevent"])
      }, [u]))])
    });
  }
});
function ir() {
  return N("w-e-dom-digital");
}
class ur {
  getValue(e) {
    const {
      selection: n
    } = e;
    return n == null ? "" : w.string(e, n);
  }
  isDisabled(e) {
    const {
      selection: n
    } = e;
    if (n == null || A.isCollapsed(n))
      return !0;
    const r = w.string(e, n);
    return !!(r.length <= 0 || Number.isNaN(Number(r)));
  }
  exec(e, n) {
    if (this.isDisabled(e))
      return;
    const {
      selection: r
    } = e;
    if (r == null)
      return;
    const s = this.getValue(e);
    if (s == null)
      return;
    const o = {
      type: "ssml-say-as",
      domId: ir(),
      interpretAs: n.id,
      remark: n.remark,
      bgColor: "digital",
      children: [{
        text: s
      }]
    };
    b.delete(e), b.insertNodes(e, o), V(e, "ssml-say-as", o.domId, (i) => {
      b.unwrapNodes(e, {
        at: i[1]
      });
    });
  }
}
const lr = [{
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
}], ar = /* @__PURE__ */ $({
  emits: ["error"],
  setup(t, {
    emit: e
  }) {
    const n = new ur(), r = M("editor"), s = v(!1);
    function o() {
      s.value = !s.value;
    }
    function i(f) {
      if (n.isDisabled(f)) {
        e("error", "请选择纯数字文本");
        return;
      }
      o();
    }
    return () => m(P, {
      visible: s.value,
      "onUpdate:visible": (f) => s.value = f,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => m(I, {
        text: "数字符号",
        icon: "digital",
        onClick: i
      }, null),
      default: () => m("div", {
        class: "flex flex-col"
      }, [lr.map(({
        id: f,
        text: c,
        remark: u
      }) => m("div", {
        key: f,
        class: "btn radius ssml-menu item full",
        onClick: () => {
          n.isDisabled(r == null ? void 0 : r.value) || n.exec(r == null ? void 0 : r.value, {
            id: f,
            text: c,
            remark: u
          }), o();
        },
        onMousedown: T(() => {
        }, ["stop", "prevent"])
      }, [c]))])
    });
  }
});
function cr() {
  return N("w-e-dom-alias");
}
class fr {
  getValue(e) {
    const {
      selection: n
    } = e;
    return n == null ? null : w.string(e, n);
  }
  isDisabled(e) {
    const {
      selection: n
    } = e;
    return !!(n == null || A.isCollapsed(n) || w.string(e, n).length <= 0);
  }
  exec(e, n) {
    if (this.isDisabled(e))
      return;
    const {
      selection: r
    } = e;
    if (r == null)
      return;
    const s = this.getValue(e);
    if (s == null)
      return;
    const o = {
      type: "ssml-sub",
      domId: cr(),
      remark: `(${n})`,
      alias: n,
      value: s,
      bgColor: "alias",
      children: [{
        text: ""
      }]
    };
    b.delete(e), b.insertNodes(e, o), V(e, "ssml-sub", o.domId, (i) => re(e, i, (f) => f.value));
  }
}
const dr = /* @__PURE__ */ $({
  emits: ["error"],
  setup(t, {
    emit: e
  }) {
    const n = new fr(), r = M("editor"), s = v(), o = v(!1), i = Z();
    function f() {
      o.value || (o.value = !0);
    }
    function c() {
      o.value && (o.value = !1);
    }
    async function u(a) {
      if (n.isDisabled(a)) {
        e("error", "选中一个中文字符，并且有不能在其他语句之内");
        return;
      }
      f(), i.value = a.selection, s.value.focus();
    }
    function l(a) {
      c();
      const d = r == null ? void 0 : r.value;
      !d || !a || (d.select(i.value), !n.isDisabled(d) && n.exec(d, a));
    }
    return () => m(P, {
      visible: o.value,
      "onUpdate:visible": (a) => o.value = a,
      trigger: "contextmenu",
      placement: "right-end",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => m(I, {
        text: "别名",
        icon: "alias",
        onClick: u
      }, null),
      default: () => m(be, {
        ref: s,
        onSubmit: l
      }, null)
    });
  }
});
function pr(t) {
  const { selection: e } = t;
  if (e) {
    const [n, r] = A.edges(e), s = w.range(t, n, r), o = w.string(t, s), i = o.trimEnd();
    if (i !== o) {
      const f = o.length - i.length, c = { ...r, offset: r.offset - f }, u = { ...e, anchor: n, focus: c };
      b.select(t, u);
    }
  }
}
function mr() {
  return N("w-e-dom-english");
}
class vr {
  getValue(e) {
    const {
      selection: n
    } = e;
    return n == null ? null : w.string(e, n);
  }
  isDisabled(e) {
    const {
      selection: n
    } = e;
    if (n == null || A.isCollapsed(n))
      return !0;
    const r = w.string(e, n);
    return r.length <= 0 || !/^[A-Za-z]+$/gi.test(r);
  }
  exec(e, n) {
    if (this.isDisabled(e))
      return;
    const {
      selection: r
    } = e;
    if (r == null)
      return;
    const s = this.getValue(e);
    if (s == null)
      return;
    const o = {
      type: "ssml-p",
      domId: mr(),
      word: s,
      phoneme: n,
      remark: n,
      bgColor: "english",
      children: [{
        text: ""
      }]
    };
    b.delete(e), b.insertNodes(e, o), e.move(1), V(e, "ssml-p", o.domId, (i) => re(e, i, (f) => f.word));
  }
}
function hr(t) {
  const e = {
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
  return Promise.resolve(e[t] || e.translate);
}
const gr = /* @__PURE__ */ $({
  emits: ["error"],
  props: ["popover", "fetch"],
  setup(t, {
    emit: e
  }) {
    const n = new vr(), r = M("editor"), s = v([]), o = v(!1);
    function i() {
      o.value || (o.value = !0);
    }
    function f() {
      o.value && (o.value = !1);
    }
    async function c(u) {
      if (pr(u), n.isDisabled(u))
        return e("error", "请选择英文单词");
      const l = n.getValue(u);
      if (l) {
        if (s.value = await (t.fetch || hr)(l), s.value.length <= 0)
          return e("error", "找不到单词的音标");
        i();
      }
    }
    return () => m(P, {
      visible: o.value,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => m(I, {
        text: "音标",
        icon: "english",
        onClick: c
      }, null),
      default: () => m("div", {
        class: "flex flex-col"
      }, [s.value.map(({
        id: u,
        text: l
      }) => m("div", {
        key: u,
        class: "btn full",
        onClick: () => {
          n.isDisabled(r == null ? void 0 : r.value) || n.exec(r == null ? void 0 : r.value, l), f();
        },
        onMousedown: T(() => {
        }, ["stop", "prevent"])
      }, [l]))])
    });
  }
});
function br() {
  return N("w-e-dom-changespeed");
}
class yr {
  getValue(e) {
    const {
      selection: n
    } = e;
    return n == null ? null : w.string(e, n);
  }
  isDisabled(e) {
    const {
      selection: n
    } = e;
    return !!(n == null || A.isCollapsed(n) || w.string(e, n).length <= 1);
  }
  exec(e, n) {
    if (this.isDisabled(e))
      return;
    const {
      selection: r
    } = e;
    if (r == null)
      return;
    const s = this.getValue(e);
    if (s == null)
      return;
    const o = {
      type: "ssml-prosody",
      domId: br(),
      remark: n,
      rate: n,
      bgColor: "changespeed",
      children: [{
        text: s
      }]
    };
    b.delete(e), b.insertNodes(e, o), V(e, "ssml-prosody", o.domId, (i) => {
      b.unwrapNodes(e, {
        at: i[1]
      });
    });
  }
}
function wr() {
  const t = [];
  for (let e = 2; e <= 40; e++) {
    const n = `${(e * 0.05).toFixed(2)}x`;
    t.push({
      id: e.toString(),
      text: n,
      remark: n
    });
  }
  return Promise.resolve(t);
}
const xr = /* @__PURE__ */ $({
  emits: ["error"],
  setup(t, {
    emit: e
  }) {
    const n = new yr(), r = M("editor"), s = v([]), o = v(!1);
    function i() {
      o.value || (o.value = !0);
    }
    function f() {
      o.value && (o.value = !1);
    }
    async function c(u) {
      if (s.value = await wr(), n.isDisabled(u)) {
        e("error", "选中一个中文字符，并且有不能在其他语句之内");
        return;
      }
      i();
    }
    return () => m(P, {
      style: {
        padding: "0px"
      },
      visible: o.value,
      "onUpdate:visible": (u) => o.value = u,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => m(I, {
        text: "局部变速",
        icon: "changespeed",
        onClick: c
      }, null),
      default: () => m("div", {
        class: "flex flex-col h h-50 scroll scroll-y"
      }, [s.value.map(({
        id: u,
        text: l
      }) => m("div", {
        key: u,
        class: "btn full",
        onClick: () => {
          n.isDisabled(r == null ? void 0 : r.value) || n.exec(r == null ? void 0 : r.value, l), f();
        },
        onMousedown: T(() => {
        }, ["stop", "prevent"])
      }, [l]))])
    });
  }
});
function _r() {
  return N("w-e-dom-rhythm");
}
class kr {
  isDisabled(e) {
    const {
      selection: n
    } = e;
    return !!(n == null || A.isExpanded(n));
  }
  exec(e, n) {
    if (this.isDisabled(e))
      return;
    const {
      selection: r
    } = e;
    if (r == null)
      return;
    const s = {
      type: "ssml-break",
      domId: _r(),
      time: n.id,
      remark: n.remark,
      bgColor: "rhythm",
      children: [{
        text: ""
      }]
    };
    b.insertNodes(e, s), e.move(1), V(e, "ssml-break", s.domId, (o) => {
      b.delete(e, {
        at: o[1]
      });
    });
  }
}
const $r = [{
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
}], Sr = /* @__PURE__ */ $({
  emits: ["error"],
  setup(t, {
    emit: e
  }) {
    const n = new kr(), r = M("editor"), s = v(!1);
    function o() {
      s.value || (s.value = !0);
    }
    function i() {
      s.value && (s.value = !1);
    }
    function f(c) {
      if (n.isDisabled(c)) {
        e("error", "不能选择文本");
        return;
      }
      o();
    }
    return () => m(P, {
      visible: s.value,
      "onUpdate:visible": (c) => s.value = c,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => m(I, {
        text: "停顿调节",
        icon: "rhythm",
        onClick: f
      }, null),
      default: () => m("div", {
        class: "flex flex-col"
      }, [$r.map(({
        id: c,
        text: u,
        remark: l
      }) => m("div", {
        key: c,
        class: "btn radius ssml-menu item full",
        onClick: () => {
          n.isDisabled(r == null ? void 0 : r.value) || n.exec(r == null ? void 0 : r.value, {
            id: c,
            text: u,
            remark: l
          }), i();
        },
        onMousedown: T(() => {
        }, ["stop", "prevent"])
      }, [u]))])
    });
  }
});
function Er(t) {
  if (window.navigator.userAgent.toLowerCase().indexOf("ie") >= 0) {
    const n = `<embed name="embedPlay" src="${t}"></embed>`;
    h("body").find("embed").length <= 0 && h("body").append(n);
    const r = document.embedPlay;
    r.volume = 100;
  } else {
    const n = `<audio id='audioPlay' src='${t}' hidden='true'>`;
    h("body").find("audio").length <= 0 && h("body").append(n), document.getElementById("audioPlay").play();
  }
}
function Cr() {
  return N("w-e-dom-special");
}
class Dr {
  getValue(e) {
    const {
      selection: n
    } = e;
    return n == null ? null : w.string(e, n);
  }
  isDisabled(e) {
    const {
      selection: n
    } = e;
    return n == null || A.isExpanded(n) ? !0 : w.string(e, n).length > 0;
  }
  exec(e, n) {
    if (this.isDisabled(e))
      return;
    const {
      selection: r
    } = e;
    if (r == null || this.getValue(e) == null)
      return;
    const o = {
      type: "ssml-audio",
      domId: Cr(),
      src: n.value,
      remark: n.label,
      bgColor: "special",
      children: [{
        text: ""
      }]
    };
    b.insertNodes(e, o), e.move(1), V(e, "ssml-audio", o.domId, (i) => b.delete(e, {
      at: i[1]
    })), Gn(e, "ssml-audio", o.domId, (i) => Er(i[0].src));
  }
}
const Or = /* @__PURE__ */ $({
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
  setup(t, {
    emit: e
  }) {
    const n = new Dr(), r = v(!1), s = Z(), o = v([]), i = M("editor");
    async function f(u) {
      if (n.isDisabled(u)) {
        e("error", "请选中编辑区，并且不能选中文字");
        return;
      }
      r.value = !0, o.value = await t.fetch({
        search: "",
        menuKey: "first",
        scene: "",
        style: ""
      }), s.value = u.selection;
    }
    const c = (u) => {
      r.value = !1;
      const l = i == null ? void 0 : i.value;
      !l || !u || (l.select(s.value), !n.isDisabled(l) && n.exec(l, u));
    };
    return () => m("div", null, [m(I, {
      text: "音效",
      icon: "special",
      onClick: f
    }, null), m(Ye, {
      modelValue: r.value,
      "onUpdate:modelValue": (u) => r.value = u,
      width: 500
    }, {
      default: () => [m(ye, {
        menuItemLabel: {
          first: "默认音效",
          second: "自定义音效",
          last: "最近音效"
        },
        scenes: t.scenes,
        styles: t.styles,
        dataList: o.value,
        onSubmit: c,
        onFetch: async (u) => {
          const l = await t.fetch(u);
          o.value = l;
        }
      }, null)]
    })]);
  }
});
function Ir() {
  return N("w-e-dom-mute");
}
class Lr {
  isDisabled(e) {
    const {
      selection: n
    } = e;
    return !!(n == null || A.isExpanded(n));
  }
  exec(e, n) {
    if (this.isDisabled(e))
      return;
    const {
      selection: r
    } = e;
    if (r == null)
      return;
    const s = {
      type: "ssml-break",
      domId: Ir(),
      time: n,
      remark: n,
      bgColor: "mute",
      children: [{
        text: ""
      }]
    };
    b.insertNodes(e, s), e.move(1), V(e, "ssml-break", s.domId, (o) => {
      b.delete(e, {
        at: o[1]
      });
    });
  }
}
const Tr = [{
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
}], Mr = /* @__PURE__ */ $({
  emits: ["error"],
  setup(t, {
    emit: e
  }) {
    const n = new Lr(), r = M("editor");
    r || e("error", "请注入editor");
    const s = v(!1), o = v(), i = Z();
    function f() {
      s.value || (s.value = !0);
    }
    function c() {
      s.value && (s.value = !1);
    }
    function u(a) {
      if (n.isDisabled(a)) {
        e("error", "不能选择文本");
        return;
      }
      f(), i.value = a.selection, o.value.focus();
    }
    function l(a) {
      c();
      const d = r == null ? void 0 : r.value;
      !d || !a || (d.select(i.value), !n.isDisabled(d) && n.exec(d, a));
    }
    return () => m(P, {
      visible: s.value,
      "onUpdate:visible": (a) => s.value = a,
      trigger: "contextmenu",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => m(I, {
        text: "插入静音",
        icon: "mute",
        onClick: u
      }, null),
      default: () => m("div", {
        class: "flex flex-col"
      }, [Tr.map(({
        id: a,
        text: d
      }) => m("div", {
        key: a,
        class: "btn radius ssml-menu item full",
        onClick: () => l(a),
        onMousedown: T(() => {
        }, ["stop", "prevent"])
      }, [d])), m(be, {
        type: "number",
        ref: o,
        onSubmit: l
      }, null)])
    });
  }
}), Ar = /* @__PURE__ */ $({
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
  setup(t, {
    emit: e
  }) {
    const n = v(!1), r = Z(), s = v([]), o = M("editor");
    async function i(c) {
      n.value = !0, s.value = await t.fetch({
        search: "",
        menuKey: "first",
        scene: "",
        style: ""
      }), r.value = c.selection;
    }
    const f = (c) => {
      n.value = !1;
      const u = o == null ? void 0 : o.value;
      if (!u || !c) {
        e("error", "背景音乐值无效");
        return;
      }
      u.emit("updateBgm", c);
    };
    return () => m("div", null, [m(I, {
      text: "配乐",
      icon: "bgm",
      onClick: i
    }, null), m(Ye, {
      modelValue: n.value,
      "onUpdate:modelValue": (c) => n.value = c,
      width: 500
    }, {
      default: () => [m(ye, {
        menuItemLabel: {
          first: "默认配乐",
          second: "自定义配乐",
          last: "最近配乐"
        },
        scenes: t.scenes,
        styles: t.styles,
        dataList: s.value,
        onSubmit: f,
        onFetch: async (c) => {
          const u = await t.fetch(c);
          s.value = u;
        }
      }, null)]
    })]);
  }
});
const Br = {
  install: (t) => {
    t.component("SpeakerMenu", Qn), t.component("ContinuousMenu", tr), t.component("ReadMenu", or), t.component("DigitalMenu", ar), t.component("AliasMenu", dr), t.component("EnglishMenu", gr), t.component("ChangespeedMenu", xr), t.component("RhythmMenu", Sr), t.component("SpecialMenu", Or), t.component("MuteMenu", Mr), t.component("BgmMenu", Ar);
  }
};
function Xe(t, e, n, r, s) {
  const o = e === void 0 ? void 0 : e.key;
  return { sel: t, data: e, children: n, text: r, elm: s, key: o };
}
const Ze = Array.isArray;
function ce(t) {
  return typeof t == "string" || typeof t == "number" || t instanceof String || t instanceof Number;
}
function lt(t, e, n) {
  if (t.ns = "http://www.w3.org/2000/svg", n !== "foreignObject" && e !== void 0)
    for (let r = 0; r < e.length; ++r) {
      const s = e[r];
      if (typeof s == "string")
        continue;
      const o = s.data;
      o !== void 0 && lt(o, s.children, s.sel);
    }
}
function p(t, e, n) {
  let r = {}, s, o, i;
  if (n !== void 0 ? (e !== null && (r = e), Ze(n) ? s = n : ce(n) ? o = n.toString() : n && n.sel && (s = [n])) : e != null && (Ze(e) ? s = e : ce(e) ? o = e.toString() : e && e.sel ? s = [e] : r = e), s !== void 0)
    for (i = 0; i < s.length; ++i)
      ce(s[i]) && (s[i] = Xe(void 0, void 0, void 0, s[i], void 0));
  return t[0] === "s" && t[1] === "v" && t[2] === "g" && (t.length === 3 || t[3] === "." || t[3] === "#") && lt(r, s, t), Xe(t, r, s, o, void 0);
}
const O = { style: { userSelect: "none" }, contentEditable: !1 };
function Nr(t) {
  const { domId: e, bgColor: n, remark: r, word: s } = t;
  return p("span.ssml-wrap", { ...O }, [
    p(`span.tag.bg-color.${n}`, [
      p("span.tag-remark", { attrs: { "data-tag-remark": r } }),
      p(`span#${e}-close.btn.btn-text`, p("span.iconfont.icon-roundclosefill", null))
    ]),
    p(`span.boundary.start.ft-color.${n}`),
    p("span", s),
    p(`span.boundary.end.ft-color.${n}`)
  ]);
}
function Vr(t, e) {
  const { bgColor: n, domId: r, remark: s, value: o } = t;
  return p("span.ssml-wrap", e ? {} : { ...O }, [
    p(`span.tag.bg-color.${n}`, { ...O }, [
      p("span.tag-remark", { attrs: { "data-tag-remark": s } }),
      p(`span#${r}-close.btn.btn-text`, p("span.iconfont.icon-roundclosefill", null))
    ]),
    p(`span.boundary.start.ft-color.${n}`, { ...O }),
    p("span", e || o),
    p(`span.boundary.end.ft-color.${n}`, { ...O })
  ]);
}
function Fr(t, e) {
  const { bgColor: n, domId: r, remark: s } = t;
  return p("span.ssml-wrap", [
    p(`span.tag.bg-color.${n}`, { ...O }, [
      p("span.tag-remark", { attrs: { "data-tag-remark": s } }),
      p(`span#${r}-close.btn.btn-text`, p("span.iconfont.icon-roundclosefill", null))
    ]),
    p(`span.boundary.start.ft-color.${n}`, { ...O }),
    p("span", e),
    p(`span.boundary.end.ft-color.${n}`, { ...O })
  ]);
}
function Pr(t) {
  const { domId: e, remark: n, bgColor: r } = t;
  return p("span.ssml-wrap", [
    p(`span.tag.bg-color.${r}`, { ...O }, [
      p("span.tag-remark", { attrs: { "data-tag-remark": n } }),
      p(`span#${e}-close.btn.btn-text`, p("span.iconfont.icon-roundclosefill", null))
    ])
  ]);
}
function jr(t) {
  const { domId: e, remark: n, bgColor: r, value: s } = t;
  return p("span.ssml-wrap", { ...O }, [
    p(`span.tag.bg-color.${r}`, [
      p("span.tag-remark", { attrs: { "data-tag-remark": n } }),
      p(`span#${e}-close.btn.btn-text`, p("span.iconfont.icon-roundclosefill"))
    ]),
    p(`span.boundary.start.ft-color.${r}`),
    p("span", s),
    p(`span.boundary.end.ft-color.${r}`)
  ]);
}
function Wr(t, e) {
  const { bgColor: n, domId: r, remark: s } = t;
  return p("span.ssml-wrap", [
    p(`span.tag.bg-color.${n}`, { ...O }, [
      p("span.tag-remark", { attrs: { "data-tag-remark": s } }),
      p(`span#${r}-close.btn.btn-text`, p("span.iconfont.icon-roundclosefill", null))
    ]),
    p(`span.boundary.start.ft-color.${n}`, { ...O }),
    p("span", e),
    p(`span.boundary.end.ft-color.${n}`, { ...O })
  ]);
}
function Hr(t) {
  const { bgColor: e, domId: n, remark: r } = t;
  return p("span.ssml-wrap", [
    p(`span.tag.bg-color.${e}`, { ...O }, [
      p(`span#${n}-play.btn.btn-text`, p("span.iconfont.icon-play", null)),
      p("span.tag-remark", { attrs: { "data-tag-remark": r } }),
      p(`span#${n}-close.btn.btn-text`, p("span.iconfont.icon-roundclosefill", null))
    ])
  ]);
}
const Ur = [
  {
    type: "ssml-p",
    renderElem: Nr
  },
  {
    type: "ssml-w",
    renderElem: Vr
  },
  {
    type: "ssml-say-as",
    renderElem: Fr
  },
  {
    type: "ssml-break",
    renderElem: Pr
  },
  {
    type: "ssml-sub",
    renderElem: jr
  },
  {
    type: "ssml-prosody",
    renderElem: Wr
  },
  {
    type: "ssml-audio",
    renderElem: Hr
  }
];
function Rr(t, e) {
  return `<s>${e}</s>`;
}
function zr(t, e) {
  const { phoneme: n, value: r } = t;
  return n ? `<w phoneme="${n}">${r}</w>` : `<w>${e}</w>`;
}
function qr(t) {
  const { word: e, phoneme: n } = t;
  return `<p ph="${n}">${e}</p>`;
}
function Gr(t, e) {
  const { interpretAs: n } = t;
  return `<say-as interpret-as="${n}">${e}</say-as>`;
}
function Kr(t) {
  const { time: e } = t;
  return `<break time="${e}" />`;
}
function Xr(t) {
  const { alias: e, value: n } = t;
  return `<sub alias="${e}">${n}</sub>`;
}
function Zr(t, e) {
  const { rate: n } = t;
  return `<prosody rate="${n}">${e}</prosody>`;
}
function Jr(t) {
  const { src: e } = t;
  return `<audio src="${e}" />`;
}
const Qr = [
  {
    type: "paragraph",
    elemToHtml: Rr
  },
  {
    type: "ssml-w",
    elemToHtml: zr
  },
  {
    type: "ssml-p",
    elemToHtml: qr
  },
  {
    type: "ssml-say-as",
    elemToHtml: Gr
  },
  {
    type: "ssml-break",
    elemToHtml: Kr
  },
  {
    type: "ssml-sub",
    elemToHtml: Xr
  },
  {
    type: "ssml-prosody",
    elemToHtml: Zr
  },
  {
    type: "ssml-audio",
    elemToHtml: Jr
  }
];
function Yr(t, e) {
  return {
    type: "paragraph",
    children: e
  };
}
function es(t, e) {
  const n = t.getAttribute("phoneme");
  return n ? {
    type: "ssml-w",
    phoneme: n,
    value: t.textContent,
    children: [{ text: t.textContent || "" }]
  } : {
    type: "ssml-w",
    children: e
  };
}
const ts = [
  {
    selector: "s",
    parseElemHtml: Yr
  },
  {
    selector: "w",
    parseElemHtml: es
  }
];
function C(t, e) {
  return t === e;
}
function ns(t) {
  const { isInline: e, isVoid: n, deleteBackward: r, deleteForward: s, insertBreak: o, getHtml: i, apply: f } = t, c = t;
  c.isInline = (l) => {
    const a = de.getNodeType(l);
    return C(a, "ssml-w") || C(a, "ssml-p") || C(a, "ssml-break") || C(a, "ssml-say-as") || C(a, "ssml-sub") || C(a, "ssml-prosody") || C(a, "ssml-audio") ? !0 : e(l);
  }, c.isVoid = (l) => {
    const a = de.getNodeType(l);
    if (C(a, "ssml-w")) {
      const { phoneme: d } = l;
      return !!d;
    }
    return C(a, "ssml-p") || C(a, "ssml-break") ? !0 : C(a, "ssml-say-as") ? !1 : C(a, "ssml-sub") ? !0 : C(a, "ssml-prosody") ? !1 : C(a, "ssml-audio") ? !0 : n(l);
  }, c.deleteBackward = (l) => {
    r(l);
  }, c.deleteForward = (l) => {
    s(l);
  }, c.insertBreak = () => {
    o();
  };
  const u = { voice: "", volume: "", pitch: "" };
  return t.on("updateSpeak", (l) => {
    Object.assign(u, l);
  }), t.on("updateBgm", (l) => {
    u.bgm = l.value, u.bgmRemark = l.label;
  }), t.on("removeBgm", () => {
    u.bgm = void 0, u.bgmRemark = void 0;
  }), c.getHtml = () => {
    const l = [];
    for (const a in u)
      if (Object.prototype.hasOwnProperty.call(u, a)) {
        const d = u[a];
        d && l.push(`${a}=${d}`);
      }
    return `<speak ${l.join(" ")}>${i()}</speak>`;
  }, c.apply = (l) => {
    f(l);
  }, c;
}
const vs = {
  editorPlugin: ns,
  renderElems: Ur,
  elemsToHtml: Qr,
  parseElemsHtml: ts
};
const hs = {
  install(t) {
    t.use(vn), t.use(Br);
  }
};
export {
  dr as AliasMenu,
  I as BarButton,
  be as BarInput,
  Ot as BarPopover,
  ye as BarSearch,
  on as BarWrapper,
  mn as BarWrapperGroup,
  cn as BarWrapperItem,
  Ar as BgmMenu,
  xr as ChangespeedMenu,
  tr as ContinuousMenu,
  ls as DOMComment,
  as as DOMElement,
  us as DOMNode,
  fs as DOMRange,
  ds as DOMSelection,
  ps as DOMStaticRange,
  cs as DOMText,
  ar as DigitalMenu,
  vs as EditorCoreModule,
  gr as EnglishMenu,
  Mr as MuteMenu,
  or as ReadMenu,
  Sr as RhythmMenu,
  Qn as SpeakerMenu,
  Or as SpecialMenu,
  tn as TopPanel,
  hs as default,
  N as genRandomStr,
  Er as playSound
};

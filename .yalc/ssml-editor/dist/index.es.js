var Qn = Object.defineProperty;
var Jn = (e, n, t) => n in e ? Qn(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var X = (e, n, t) => (Jn(e, typeof n != "symbol" ? n + "" : n, t), t);
import { SlateEditor as te, SlateElement as Zn, DomEditor as N, SlateText as el, SlateTransforms as L, SlatePath as tl, SlateRange as Z, createEditor as nl, Boot as K } from "@wangeditor/editor";
import { defineComponent as D, inject as me, openBlock as T, createElementBlock as P, normalizeClass as ve, withModifiers as q, createElementVNode as p, toDisplayString as W, ref as g, createBlock as z, unref as b, withCtx as v, createVNode as i, renderSlot as ne, isRef as ll, toRefs as sl, customRef as rl, getCurrentInstance as vn, onMounted as Ee, nextTick as ol, getCurrentScope as il, onScopeDispose as al, computed as Y, watch as ue, watchEffect as ul, createTextVNode as $, Fragment as re, renderList as ge, pushScopeId as $e, popScopeId as Ce, Teleport as yt, normalizeStyle as He, onUnmounted as bt, withDirectives as ye, vShow as be, shallowRef as U, reactive as Tt, createStaticVNode as mn, createCommentVNode as cl, toRaw as dl, provide as fl } from "vue";
import { ElForm as Ue, ElInput as We, ElPopover as oe, ElMenu as pl, ElMenuItem as tt, ElSelect as ft, ElOption as pt, ElButton as ee, ElTag as ae, ElIcon as hn, ElSlider as nt, ElDialog as vl } from "element-plus";
import { Search as ml, More as hl, Star as _l, Minus as gl, Share as yl } from "@element-plus/icons-vue";
const bl = "ssml-editor", xl = "ssml-editor-config", ie = {
  EDITOR: bl,
  EDITORCONFIG: xl
}, wl = "emitter-ediror-error", j = {
  ERROR: wl
}, El = "wangeditor-update-bgm", $l = "wangeditor-remove-bgm", Cl = "wangeditor-update-speak", pe = {
  UPDATE_BGM: El,
  REMOVE_BGM: $l,
  UPDATE_SPEAK: Cl
}, Sl = { class: "bar-button-icon" }, Ol = {
  class: "fw-normal",
  style: { "font-size": "0.85rem" }
}, Il = /* @__PURE__ */ D({
  __name: "bar-button",
  props: {
    text: {},
    icon: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = e, l = me(ie.EDITOR), s = () => {
      t.disabled || n("click", l.value);
    };
    return (r, o) => (T(), P("div", {
      class: ve(["bar-button px-2 py-1", { disabled: r.disabled }]),
      onClick: s,
      onMousedown: o[0] || (o[0] = q(() => {
      }, ["prevent"]))
    }, [
      p("div", Sl, [
        p("span", {
          class: ve(["fs-3 iconfont-moyin", [`moyin-icon_${r.icon}`]])
        }, null, 2)
      ]),
      p("div", Ol, W(r.text), 1)
    ], 34));
  }
});
const G = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [l, s] of n)
    t[l] = s;
  return t;
}, H = /* @__PURE__ */ G(Il, [["__scopeId", "data-v-7741060a"]]);
const xt = /* @__PURE__ */ D({
  __name: "bar-input",
  props: {
    type: {}
  },
  emits: ["submit"],
  setup(e, { expose: n, emit: t }) {
    const l = g(""), s = g();
    function r() {
      s.value.focus();
    }
    function o() {
      t("submit", l.value), l.value = "";
    }
    return n({
      focus: r
    }), (a, c) => (T(), z(b(Ue), {
      class: "flex flex-row",
      onSubmit: q(o, ["prevent"])
    }, {
      default: v(() => [
        i(b(We), {
          type: a.type,
          ref_key: "inputRef",
          ref: s,
          modelValue: l.value,
          "onUpdate:modelValue": c[0] || (c[0] = (f) => l.value = f)
        }, null, 8, ["type", "modelValue"])
      ]),
      _: 1
    }, 8, ["onSubmit"]));
  }
});
const kl = /* @__PURE__ */ D({
  __name: "bar-popover",
  props: {
    visible: { type: Boolean },
    trigger: {},
    hideAfter: {},
    width: {}
  },
  emits: ["update:visible"],
  setup(e) {
    return (n, t) => (T(), z(b(oe), {
      hideAfter: n.hideAfter,
      width: n.width,
      visible: n.visible,
      trigger: n.trigger,
      "onUpdate:visible": t[0] || (t[0] = (l) => n.$emit("update:visible", l))
    }, {
      reference: v(() => [
        ne(n.$slots, "reference")
      ]),
      default: v(() => [
        ne(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["hideAfter", "width", "visible", "trigger"]));
  }
});
function ze(e) {
  return il() ? (al(e), !0) : !1;
}
function Q(e) {
  return typeof e == "function" ? e() : b(e);
}
const Ne = typeof window < "u", Tl = (e) => e != null, Pe = () => {
};
var Rl = Object.defineProperty, Dl = Object.defineProperties, Ml = Object.getOwnPropertyDescriptors, Rt = Object.getOwnPropertySymbols, Vl = Object.prototype.hasOwnProperty, Pl = Object.prototype.propertyIsEnumerable, Dt = (e, n, t) => n in e ? Rl(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ll = (e, n) => {
  for (var t in n || (n = {}))
    Vl.call(n, t) && Dt(e, t, n[t]);
  if (Rt)
    for (var t of Rt(n))
      Pl.call(n, t) && Dt(e, t, n[t]);
  return e;
}, Al = (e, n) => Dl(e, Ml(n));
function Nl(e, n = {}) {
  if (!ll(e))
    return sl(e);
  const t = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const l in e.value)
    t[l] = rl(() => ({
      get() {
        return e.value[l];
      },
      set(s) {
        var r;
        if ((r = Q(n.replaceRef)) != null ? r : !0)
          if (Array.isArray(e.value)) {
            const a = [...e.value];
            a[l] = s, e.value = a;
          } else {
            const a = Al(Ll({}, e.value), { [l]: s });
            Object.setPrototypeOf(a, Object.getPrototypeOf(e.value)), e.value = a;
          }
        else
          e.value[l] = s;
      }
    }));
  return t;
}
function _n(e, n = !0) {
  vn() ? Ee(e) : n ? e() : ol(e);
}
function J(e) {
  var n;
  const t = Q(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const ce = Ne ? window : void 0;
function xe(...e) {
  let n, t, l, s;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([t, l, s] = e, n = ce) : [n, t, l, s] = e, !n)
    return Pe;
  Array.isArray(t) || (t = [t]), Array.isArray(l) || (l = [l]);
  const r = [], o = () => {
    r.forEach((h) => h()), r.length = 0;
  }, a = (h, m, _, y) => (h.addEventListener(m, _, y), () => h.removeEventListener(m, _, y)), c = ue(
    () => [J(n), Q(s)],
    ([h, m]) => {
      o(), h && r.push(
        ...t.flatMap((_) => l.map((y) => a(h, _, y, m)))
      );
    },
    { immediate: !0, flush: "post" }
  ), f = () => {
    c(), o();
  };
  return ze(f), f;
}
function Bl() {
  const e = g(!1);
  return vn() && Ee(() => {
    e.value = !0;
  }), e;
}
function wt(e) {
  const n = Bl();
  return Y(() => (n.value, !!e()));
}
function jl(e, n = {}) {
  const { window: t = ce } = n, l = wt(() => t && "matchMedia" in t && typeof t.matchMedia == "function");
  let s;
  const r = g(!1), o = (f) => {
    r.value = f.matches;
  }, a = () => {
    s && ("removeEventListener" in s ? s.removeEventListener("change", o) : s.removeListener(o));
  }, c = ul(() => {
    l.value && (a(), s = t.matchMedia(Q(e)), "addEventListener" in s ? s.addEventListener("change", o) : s.addListener(o), r.value = s.matches);
  });
  return ze(() => {
    c(), a(), s = void 0;
  }), r;
}
var Fl = Object.defineProperty, Hl = Object.defineProperties, Ul = Object.getOwnPropertyDescriptors, Mt = Object.getOwnPropertySymbols, Wl = Object.prototype.hasOwnProperty, zl = Object.prototype.propertyIsEnumerable, Vt = (e, n, t) => n in e ? Fl(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Gl = (e, n) => {
  for (var t in n || (n = {}))
    Wl.call(n, t) && Vt(e, t, n[t]);
  if (Mt)
    for (var t of Mt(n))
      zl.call(n, t) && Vt(e, t, n[t]);
  return e;
}, ql = (e, n) => Hl(e, Ul(n));
function Ge(e, n = {}) {
  var t, l;
  const {
    pointerTypes: s,
    preventDefault: r,
    stopPropagation: o,
    exact: a,
    onMove: c,
    onEnd: f,
    onStart: h,
    initialValue: m,
    axis: _ = "both",
    draggingElement: y = ce,
    handle: d = e
  } = n, u = g(
    (t = Q(m)) != null ? t : { x: 0, y: 0 }
  ), x = g(), C = (E) => s ? s.includes(E.pointerType) : !0, O = (E) => {
    Q(r) && E.preventDefault(), Q(o) && E.stopPropagation();
  }, w = (E) => {
    if (!C(E) || Q(a) && E.target !== Q(e))
      return;
    const R = Q(e).getBoundingClientRect(), A = {
      x: E.clientX - R.left,
      y: E.clientY - R.top
    };
    (h == null ? void 0 : h(A, E)) !== !1 && (x.value = A, O(E));
  }, S = (E) => {
    if (!C(E) || !x.value)
      return;
    let { x: R, y: A } = u.value;
    (_ === "x" || _ === "both") && (R = E.clientX - x.value.x), (_ === "y" || _ === "both") && (A = E.clientY - x.value.y), u.value = {
      x: R,
      y: A
    }, c == null || c(u.value, E), O(E);
  }, k = (E) => {
    C(E) && x.value && (x.value = void 0, f == null || f(u.value, E), O(E));
  };
  if (Ne) {
    const E = { capture: (l = n.capture) != null ? l : !0 };
    xe(d, "pointerdown", w, E), xe(y, "pointermove", S, E), xe(y, "pointerup", k, E);
  }
  return ql(Gl({}, Nl(u)), {
    position: u,
    isDragging: Y(() => !!x.value),
    style: Y(
      () => `left:${u.value.x}px;top:${u.value.y}px;`
    )
  });
}
var Pt = Object.getOwnPropertySymbols, Yl = Object.prototype.hasOwnProperty, Xl = Object.prototype.propertyIsEnumerable, Kl = (e, n) => {
  var t = {};
  for (var l in e)
    Yl.call(e, l) && n.indexOf(l) < 0 && (t[l] = e[l]);
  if (e != null && Pt)
    for (var l of Pt(e))
      n.indexOf(l) < 0 && Xl.call(e, l) && (t[l] = e[l]);
  return t;
};
function gn(e, n, t = {}) {
  const l = t, { window: s = ce } = l, r = Kl(l, ["window"]);
  let o;
  const a = wt(() => s && "ResizeObserver" in s), c = () => {
    o && (o.disconnect(), o = void 0);
  }, f = Y(
    () => Array.isArray(e) ? e.map((_) => J(_)) : [J(e)]
  ), h = ue(
    f,
    (_) => {
      if (c(), a.value && s) {
        o = new ResizeObserver(n);
        for (const y of _)
          y && o.observe(y, r);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), m = () => {
    c(), h();
  };
  return ze(m), {
    isSupported: a,
    stop: m
  };
}
function Me(e, n = {}) {
  const {
    reset: t = !0,
    windowResize: l = !0,
    windowScroll: s = !0,
    immediate: r = !0
  } = n, o = g(0), a = g(0), c = g(0), f = g(0), h = g(0), m = g(0), _ = g(0), y = g(0);
  function d() {
    const u = J(e);
    if (!u) {
      t && (o.value = 0, a.value = 0, c.value = 0, f.value = 0, h.value = 0, m.value = 0, _.value = 0, y.value = 0);
      return;
    }
    const x = u.getBoundingClientRect();
    o.value = x.height, a.value = x.bottom, c.value = x.left, f.value = x.right, h.value = x.top, m.value = x.width, _.value = x.x, y.value = x.y;
  }
  return gn(e, d), ue(() => J(e), (u) => !u && d()), s && xe("scroll", d, { capture: !0, passive: !0 }), l && xe("resize", d, { passive: !0 }), _n(() => {
    r && d();
  }), {
    height: o,
    bottom: a,
    left: c,
    right: f,
    top: h,
    width: m,
    x: _,
    y,
    update: d
  };
}
function yn(e, n = { width: 0, height: 0 }, t = {}) {
  const { window: l = ce, box: s = "content-box" } = t, r = Y(() => {
    var c, f;
    return (f = (c = J(e)) == null ? void 0 : c.namespaceURI) == null ? void 0 : f.includes("svg");
  }), o = g(n.width), a = g(n.height);
  return gn(
    e,
    ([c]) => {
      const f = s === "border-box" ? c.borderBoxSize : s === "content-box" ? c.contentBoxSize : c.devicePixelContentBoxSize;
      if (l && r.value) {
        const h = J(e);
        if (h) {
          const m = l.getComputedStyle(h);
          o.value = Number.parseFloat(m.width), a.value = Number.parseFloat(m.height);
        }
      } else if (f) {
        const h = Array.isArray(f) ? f : [f];
        o.value = h.reduce((m, { inlineSize: _ }) => m + _, 0), a.value = h.reduce((m, { blockSize: _ }) => m + _, 0);
      } else
        o.value = c.contentRect.width, a.value = c.contentRect.height;
    },
    t
  ), ue(
    () => J(e),
    (c) => {
      o.value = c ? n.width : 0, a.value = c ? n.height : 0;
    }
  ), {
    width: o,
    height: a
  };
}
function Ql(e, n, t = {}) {
  const {
    root: l,
    rootMargin: s = "0px",
    threshold: r = 0.1,
    window: o = ce,
    immediate: a = !0
  } = t, c = wt(() => o && "IntersectionObserver" in o), f = Y(() => {
    const d = Q(e);
    return (Array.isArray(d) ? d : [d]).map(J).filter(Tl);
  });
  let h = Pe;
  const m = g(a), _ = c.value ? ue(
    () => [f.value, J(l), m.value],
    ([d, u]) => {
      if (h(), !m.value || !d.length)
        return;
      const x = new IntersectionObserver(
        n,
        {
          root: J(u),
          rootMargin: s,
          threshold: r
        }
      );
      d.forEach((C) => C && x.observe(C)), h = () => {
        x.disconnect(), h = Pe;
      };
    },
    { immediate: a, flush: "post" }
  ) : Pe, y = () => {
    h(), _(), m.value = !1;
  };
  return ze(y), {
    isSupported: c,
    isActive: m,
    pause() {
      h(), m.value = !1;
    },
    resume() {
      m.value = !0;
    },
    stop: y
  };
}
function Jl(e, { window: n = ce, scrollTarget: t } = {}) {
  const l = g(!1);
  return Ql(
    e,
    ([{ isIntersecting: s }]) => {
      l.value = s;
    },
    {
      root: t,
      window: n
    }
  ), l;
}
function bn(e = {}) {
  const {
    window: n = ce,
    initialWidth: t = Number.POSITIVE_INFINITY,
    initialHeight: l = Number.POSITIVE_INFINITY,
    listenOrientation: s = !0,
    includeScrollbar: r = !0
  } = e, o = g(t), a = g(l), c = () => {
    n && (r ? (o.value = n.innerWidth, a.value = n.innerHeight) : (o.value = n.document.documentElement.clientWidth, a.value = n.document.documentElement.clientHeight));
  };
  if (c(), _n(c), xe("resize", c, { passive: !0 }), s) {
    const f = jl("(orientation: portrait)");
    ue(f, () => c());
  }
  return { width: o, height: a };
}
const Zl = (e) => ($e("data-v-fd90240d"), e = e(), Ce(), e), es = { class: "search-content vh-50" }, ts = { class: "ps-2 w-75" }, ns = { class: "menu" }, ls = { class: "flex flex-row pt-1" }, ss = { class: "content-list pt-1 w-90" }, rs = ["onClick"], os = /* @__PURE__ */ Zl(() => /* @__PURE__ */ p("span", { class: "iconfont icon-play" }, null, -1)), is = /* @__PURE__ */ D({
  __name: "bar-search",
  props: {
    menuItemLabel: {},
    scenes: {},
    styles: {},
    dataList: {},
    fetch: { type: Function }
  },
  emits: ["submit"],
  setup(e, { emit: n }) {
    const t = e, l = g(), s = g(""), r = g(""), o = g(""), a = g(t.dataList || []), c = g("first"), f = Jl(l);
    ue(f, (y) => {
      y && setTimeout(() => {
        var d;
        (d = l.value) == null || d.focus();
      }, 100);
    }), Ee(async () => {
      await h();
    });
    async function h() {
      a.value = await t.fetch({
        search: s.value,
        menuKey: c.value,
        scene: r.value,
        style: o.value
      });
    }
    function m(y) {
      c.value = y, h();
    }
    function _(y) {
      n("submit", y);
    }
    return (y, d) => (T(), P("div", es, [
      p("div", ts, [
        i(b(Ue), {
          onSubmit: q(h, ["prevent"])
        }, {
          default: v(() => [
            i(b(We), {
              ref_key: "searchInputRef",
              ref: l,
              placeholder: "搜索",
              modelValue: s.value,
              "onUpdate:modelValue": d[0] || (d[0] = (u) => s.value = u),
              "suffix-icon": b(ml)
            }, null, 8, ["modelValue", "suffix-icon"])
          ]),
          _: 1
        }, 8, ["onSubmit"])
      ]),
      p("div", ns, [
        i(b(pl), {
          mode: "horizontal",
          "default-active": "first",
          onSelect: d[1] || (d[1] = (u) => m(u))
        }, {
          default: v(() => [
            i(b(tt), { index: "first" }, {
              default: v(() => [
                $(W(y.menuItemLabel.first), 1)
              ]),
              _: 1
            }),
            i(b(tt), { index: "second" }, {
              default: v(() => [
                $(W(y.menuItemLabel.second), 1)
              ]),
              _: 1
            }),
            i(b(tt), { index: "last" }, {
              default: v(() => [
                $(W(y.menuItemLabel.last), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      p("div", ls, [
        i(b(ft), {
          modelValue: r.value,
          "onUpdate:modelValue": d[2] || (d[2] = (u) => r.value = u),
          onChange: h,
          class: "m-1",
          size: "large"
        }, {
          default: v(() => [
            (T(!0), P(re, null, ge(y.scenes, (u) => (T(), z(b(pt), {
              key: u.value,
              label: u.label,
              value: u.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        i(b(ft), {
          modelValue: o.value,
          "onUpdate:modelValue": d[3] || (d[3] = (u) => o.value = u),
          onChange: h,
          class: "m-1",
          size: "large"
        }, {
          default: v(() => [
            (T(!0), P(re, null, ge(y.styles, (u) => (T(), z(b(pt), {
              key: u.value,
              label: u.label,
              value: u.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      p("div", ss, [
        (T(!0), P(re, null, ge(a.value, (u, x) => (T(), P("div", {
          onClick: (C) => _(u),
          class: "content-list-item clickable ps-3",
          key: x
        }, [
          os,
          p("span", null, W(u.label), 1)
        ], 8, rs))), 128))
      ])
    ]));
  }
});
const qe = /* @__PURE__ */ G(is, [["__scopeId", "data-v-fd90240d"]]), as = /* @__PURE__ */ D({
  __name: "fixed-panel",
  emits: ["dragging"],
  setup(e, { emit: n }) {
    const t = g(), l = Ne ? window.innerWidth : 200, s = Ne ? window.innerHeight : 200, { x: r, y: o } = Ge(t, {
      initialValue: { x: l - 100, y: s / 2 },
      preventDefault: !0,
      onStart: () => {
        n("dragging", !0);
      },
      onEnd: () => {
        n("dragging", !1);
      }
    }), { width: a, height: c } = yn(t), { width: f, height: h } = bn(), m = Y(() => ({
      x: f.value - a.value,
      y: h.value - c.value
    })), _ = Y(() => {
      if (!m.value)
        return y(r.value, o.value);
      const d = r.value < 5 ? 5 : r.value > m.value.x ? m.value.x - 5 : r.value, u = o.value < 5 ? 5 : o.value > m.value.y ? m.value.y - 5 : o.value;
      return y(d, u);
    });
    function y(d, u) {
      return `left:${d}px;top:${u}px`;
    }
    return (d, u) => (T(), z(yt, { to: "body" }, [
      p("div", {
        ref_key: "boxRef",
        ref: t,
        class: "fixed-panel z-3 user-select-none",
        style: He([{ position: "fixed" }, _.value])
      }, [
        ne(d.$slots, "default")
      ], 4)
    ]));
  }
});
function Lt(e, n) {
  return `left:${e}px;top:${n}px`;
}
function Et(e, n) {
  const { width: t, height: l } = yn(e), { width: s, height: r } = bn(), o = Y(() => ({
    x: s.value - t.value,
    y: r.value - l.value
  }));
  return { style: Y(() => {
    const c = n.value.x, f = n.value.y;
    if (!o.value)
      return Lt(c, f);
    const h = c < 5 ? 5 : c > o.value.x ? o.value.x - 5 : c, m = f < 5 ? 5 : f > o.value.y ? o.value.y - 5 : f;
    return Lt(h, m);
  }) };
}
const us = {}, cs = { class: "content" };
function ds(e, n) {
  return T(), P("div", cs, [
    ne(e.$slots, "default", {}, void 0, !0)
  ]);
}
const xn = /* @__PURE__ */ G(us, [["render", ds], ["__scopeId", "data-v-7beae5b9"]]), fs = {}, ps = { class: "bar-wrapper-item" };
function vs(e, n) {
  return T(), P("div", ps, [
    ne(e.$slots, "default")
  ]);
}
const ms = /* @__PURE__ */ G(fs, [["render", vs]]), hs = { class: "bar-wrapper-group" }, _s = { class: "group-items" }, gs = /* @__PURE__ */ D({
  __name: "bar-wrapper-group",
  props: {
    divider: {}
  },
  setup(e) {
    return (n, t) => (T(), P("div", hs, [
      p("div", _s, [
        ne(n.$slots, "default", {}, void 0, !0)
      ]),
      p("div", {
        class: ve(["divider", [n.divider]])
      }, null, 2)
    ]));
  }
});
const de = /* @__PURE__ */ G(gs, [["__scopeId", "data-v-3a7abad9"]]), ys = /* @__PURE__ */ D({
  __name: "drag-box",
  props: {
    visible: { type: Boolean },
    initialValue: {}
  },
  emits: ["update:visible", "close"],
  setup(e, { expose: n, emit: t }) {
    const l = e, s = g(), r = g(), { position: o } = Ge(s, {
      initialValue: l.initialValue
    }), { style: a } = Et(s, o);
    function c(y) {
      o.value = y;
    }
    n({
      setPosition: c
    }), Ee(() => {
      window.addEventListener("click", f), window.addEventListener("keydown", _);
    }), bt(() => {
      window.addEventListener("click", f), window.addEventListener("keydown", _);
    });
    function f(y) {
      h(y) && m();
    }
    function h(y) {
      const d = y.target;
      return !(!s.value || !r.value || r.value.contains(d) || s.value.contains(d));
    }
    function m() {
      t("update:visible", !1), t("close");
    }
    function _(y) {
      y.code === "Escape" && m();
    }
    return (y, d) => (T(), P(re, null, [
      p("div", {
        ref_key: "referenceRef",
        ref: r
      }, [
        ne(y.$slots, "reference", {}, void 0, !0)
      ], 512),
      (T(), z(yt, { to: "body" }, [
        ye(p("div", {
          ref_key: "boxRef",
          ref: s,
          class: "demotestname card shadow brag-box user-select-none",
          style: He([{ position: "fixed" }, b(a)])
        }, [
          p("div", { class: "w-100 text-end me-2" }, [
            p("span", {
              onClick: m,
              class: "btn iconfont icon-close fs-5"
            })
          ]),
          ne(y.$slots, "default", {}, void 0, !0)
        ], 4), [
          [be, y.visible]
        ])
      ]))
    ], 64));
  }
});
const Se = /* @__PURE__ */ G(ys, [["__scopeId", "data-v-015e58d3"]]), bs = {
  install(e) {
    e.component("BarButton", H), e.component("BarInput", xt), e.component("BarPopover", kl), e.component("BarSearch", qe), e.component("FixedPanel", as), e.component("BarWrapper", xn), e.component("BarWrapperItem", ms), e.component("BarWrapperGroup", de), e.component("DragBox", Se);
  }
};
var _e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vt = { exports: {} }, wn = { exports: {} }, xs = void 0, En = function(e) {
  return e !== xs && e !== null;
}, ws = En, Es = {
  object: !0,
  function: !0,
  undefined: !0
  /* document.all */
}, $s = function(e) {
  return ws(e) ? hasOwnProperty.call(Es, typeof e) : !1;
}, Cs = $s, Ss = function(e) {
  if (!Cs(e))
    return !1;
  try {
    return e.constructor ? e.constructor.prototype === e : !1;
  } catch {
    return !1;
  }
}, Os = Ss, Is = function(e) {
  if (typeof e != "function" || !hasOwnProperty.call(e, "length"))
    return !1;
  try {
    if (typeof e.length != "number" || typeof e.call != "function" || typeof e.apply != "function")
      return !1;
  } catch {
    return !1;
  }
  return !Os(e);
}, ks = Is, Ts = /^\s*class[\s{/}]/, Rs = Function.prototype.toString, Ds = function(e) {
  return !(!ks(e) || Ts.test(Rs.call(e)));
}, Ms = function() {
  var e = Object.assign, n;
  return typeof e != "function" ? !1 : (n = { foo: "raz" }, e(n, { bar: "dwa" }, { trzy: "trzy" }), n.foo + n.bar + n.trzy === "razdwatrzy");
}, lt, At;
function Vs() {
  return At || (At = 1, lt = function() {
    try {
      return Object.keys("primitive"), !0;
    } catch {
      return !1;
    }
  }), lt;
}
var Ps = function() {
}, Ls = Ps(), Ct = function(e) {
  return e !== Ls && e !== null;
}, st, Nt;
function As() {
  if (Nt)
    return st;
  Nt = 1;
  var e = Ct, n = Object.keys;
  return st = function(t) {
    return n(e(t) ? Object(t) : t);
  }, st;
}
var rt, Bt;
function Ns() {
  return Bt || (Bt = 1, rt = Vs()() ? Object.keys : As()), rt;
}
var ot, jt;
function Bs() {
  if (jt)
    return ot;
  jt = 1;
  var e = Ct;
  return ot = function(n) {
    if (!e(n))
      throw new TypeError("Cannot use null or undefined");
    return n;
  }, ot;
}
var it, Ft;
function js() {
  if (Ft)
    return it;
  Ft = 1;
  var e = Ns(), n = Bs(), t = Math.max;
  return it = function(l, s) {
    var r, o, a = t(arguments.length, 2), c;
    for (l = Object(n(l)), c = function(f) {
      try {
        l[f] = s[f];
      } catch (h) {
        r || (r = h);
      }
    }, o = 1; o < a; ++o)
      s = arguments[o], e(s).forEach(c);
    if (r !== void 0)
      throw r;
    return l;
  }, it;
}
var Fs = Ms() ? Object.assign : js(), Hs = Ct, Us = Array.prototype.forEach, Ws = Object.create, zs = function(e, n) {
  var t;
  for (t in e)
    n[t] = e[t];
}, Gs = function(e) {
  var n = Ws(null);
  return Us.call(arguments, function(t) {
    Hs(t) && zs(Object(t), n);
  }), n;
}, at = "razdwatrzy", qs = function() {
  return typeof at.contains != "function" ? !1 : at.contains("dwa") === !0 && at.contains("foo") === !1;
}, ut, Ht;
function Ys() {
  if (Ht)
    return ut;
  Ht = 1;
  var e = String.prototype.indexOf;
  return ut = function(n) {
    return e.call(this, n, arguments[1]) > -1;
  }, ut;
}
var Xs = qs() ? String.prototype.contains : Ys(), Le = En, Ut = Ds, $n = Fs, Cn = Gs, Te = Xs, Ks = wn.exports = function(e, n) {
  var t, l, s, r, o;
  return arguments.length < 2 || typeof e != "string" ? (r = n, n = e, e = null) : r = arguments[2], Le(e) ? (t = Te.call(e, "c"), l = Te.call(e, "e"), s = Te.call(e, "w")) : (t = s = !0, l = !1), o = { value: n, configurable: t, enumerable: l, writable: s }, r ? $n(Cn(r), o) : o;
};
Ks.gs = function(e, n, t) {
  var l, s, r, o;
  return typeof e != "string" ? (r = t, t = n, n = e, e = null) : r = arguments[3], Le(n) ? Ut(n) ? Le(t) ? Ut(t) || (r = t, t = void 0) : t = void 0 : (r = n, n = t = void 0) : n = void 0, Le(e) ? (l = Te.call(e, "c"), s = Te.call(e, "e")) : (l = !0, s = !1), o = { get: n, set: t, configurable: l, enumerable: s }, r ? $n(Cn(r), o) : o;
};
var Qs = wn.exports, Js = function(e) {
  if (typeof e != "function")
    throw new TypeError(e + " is not a function");
  return e;
};
(function(e, n) {
  var t = Qs, l = Js, s = Function.prototype.apply, r = Function.prototype.call, o = Object.create, a = Object.defineProperty, c = Object.defineProperties, f = Object.prototype.hasOwnProperty, h = { configurable: !0, enumerable: !1, writable: !0 }, m, _, y, d, u, x, C;
  m = function(O, w) {
    var S;
    return l(w), f.call(this, "__ee__") ? S = this.__ee__ : (S = h.value = o(null), a(this, "__ee__", h), h.value = null), S[O] ? typeof S[O] == "object" ? S[O].push(w) : S[O] = [S[O], w] : S[O] = w, this;
  }, _ = function(O, w) {
    var S, k;
    return l(w), k = this, m.call(this, O, S = function() {
      y.call(k, O, S), s.call(w, this, arguments);
    }), S.__eeOnceListener__ = w, this;
  }, y = function(O, w) {
    var S, k, E, R;
    if (l(w), !f.call(this, "__ee__"))
      return this;
    if (S = this.__ee__, !S[O])
      return this;
    if (k = S[O], typeof k == "object")
      for (R = 0; E = k[R]; ++R)
        (E === w || E.__eeOnceListener__ === w) && (k.length === 2 ? S[O] = k[R ? 0 : 1] : k.splice(R, 1));
    else
      (k === w || k.__eeOnceListener__ === w) && delete S[O];
    return this;
  }, d = function(O) {
    var w, S, k, E, R;
    if (f.call(this, "__ee__") && (E = this.__ee__[O], !!E))
      if (typeof E == "object") {
        for (S = arguments.length, R = new Array(S - 1), w = 1; w < S; ++w)
          R[w - 1] = arguments[w];
        for (E = E.slice(), w = 0; k = E[w]; ++w)
          s.call(k, this, R);
      } else
        switch (arguments.length) {
          case 1:
            r.call(E, this);
            break;
          case 2:
            r.call(E, this, arguments[1]);
            break;
          case 3:
            r.call(E, this, arguments[1], arguments[2]);
            break;
          default:
            for (S = arguments.length, R = new Array(S - 1), w = 1; w < S; ++w)
              R[w - 1] = arguments[w];
            s.call(E, this, R);
        }
  }, u = {
    on: m,
    once: _,
    off: y,
    emit: d
  }, x = {
    on: t(m),
    once: t(_),
    off: t(y),
    emit: t(d)
  }, C = c({}, x), e.exports = n = function(O) {
    return O == null ? o(C) : c(Object(O), x);
  }, n.methods = u;
})(vt, vt.exports);
var Zs = vt.exports;
const er = /* @__PURE__ */ $t(Zs), F = er();
function le(e, n, t) {
  const [l] = te.nodes(e, {
    at: [],
    match: (s) => !Zn.isElement(s) || !N.checkNodeType(s, n) ? !1 : s.domId === t
  });
  return l;
}
function Oe(e, n, t) {
  const l = te.previous(e, {
    at: n[1],
    match: (s) => el.isText(s)
  });
  l != null && (L.insertText(e, t(n[0]), {
    at: te.end(e, l[1])
  }), L.delete(e, { at: tl.next(l[1]) }));
}
function Wt(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function St(e, n) {
  e === void 0 && (e = {}), n === void 0 && (n = {}), Object.keys(n).forEach(function(t) {
    typeof e[t] > "u" ? e[t] = n[t] : Wt(n[t]) && Wt(e[t]) && Object.keys(n[t]).length > 0 && St(e[t], n[t]);
  });
}
var Sn = {
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
function Ot() {
  var e = typeof document < "u" ? document : {};
  return St(e, Sn), e;
}
var tr = {
  document: Sn,
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
function On() {
  var e = typeof window < "u" ? window : {};
  return St(e, tr), e;
}
function nr(e, n) {
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n;
}
function mt(e) {
  return mt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, mt(e);
}
function Be(e, n) {
  return Be = Object.setPrototypeOf || function(l, s) {
    return l.__proto__ = s, l;
  }, Be(e, n);
}
function lr() {
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
function Ae(e, n, t) {
  return lr() ? Ae = Reflect.construct : Ae = function(s, r, o) {
    var a = [null];
    a.push.apply(a, r);
    var c = Function.bind.apply(s, a), f = new c();
    return o && Be(f, o.prototype), f;
  }, Ae.apply(null, arguments);
}
function sr(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function ht(e) {
  var n = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return ht = function(l) {
    if (l === null || !sr(l))
      return l;
    if (typeof l != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof n < "u") {
      if (n.has(l))
        return n.get(l);
      n.set(l, s);
    }
    function s() {
      return Ae(l, arguments, mt(this).constructor);
    }
    return s.prototype = Object.create(l.prototype, {
      constructor: {
        value: s,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Be(s, l);
  }, ht(e);
}
function rr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function or(e) {
  var n = e.__proto__;
  Object.defineProperty(e, "__proto__", {
    get: function() {
      return n;
    },
    set: function(l) {
      n.__proto__ = l;
    }
  });
}
var fe = /* @__PURE__ */ function(e) {
  nr(n, e);
  function n(t) {
    var l;
    return l = e.call.apply(e, [this].concat(t)) || this, or(rr(l)), l;
  }
  return n;
}(/* @__PURE__ */ ht(Array));
function It(e) {
  e === void 0 && (e = []);
  var n = [];
  return e.forEach(function(t) {
    Array.isArray(t) ? n.push.apply(n, It(t)) : n.push(t);
  }), n;
}
function ir(e) {
  for (var n = [], t = 0; t < e.length; t += 1)
    n.indexOf(e[t]) === -1 && n.push(e[t]);
  return n;
}
function ar(e) {
  return e.toLowerCase().replace(/-(.)/g, function(n, t) {
    return t.toUpperCase();
  });
}
function ur(e, n) {
  if (typeof e != "string")
    return [e];
  for (var t = [], l = n.querySelectorAll(e), s = 0; s < l.length; s += 1)
    t.push(l[s]);
  return t;
}
function M(e, n) {
  var t = On(), l = Ot(), s = [];
  if (!n && e instanceof fe)
    return e;
  if (!e)
    return new fe(s);
  if (typeof e == "string") {
    var r = e.trim();
    if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
      var o = "div";
      r.indexOf("<li") === 0 && (o = "ul"), r.indexOf("<tr") === 0 && (o = "tbody"), (r.indexOf("<td") === 0 || r.indexOf("<th") === 0) && (o = "tr"), r.indexOf("<tbody") === 0 && (o = "table"), r.indexOf("<option") === 0 && (o = "select");
      var a = l.createElement(o);
      a.innerHTML = r;
      for (var c = 0; c < a.childNodes.length; c += 1)
        s.push(a.childNodes[c]);
    } else
      s = ur(e.trim(), n || l);
  } else if (e.nodeType || e === t || e === l)
    s.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof fe)
      return e;
    s = e;
  }
  return new fe(ir(s));
}
M.fn = fe.prototype;
function zt() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  var l = It(n.map(function(s) {
    return s.split(" ");
  }));
  return this.forEach(function(s) {
    var r;
    (r = s.classList).add.apply(r, l);
  }), this;
}
function Gt() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  var l = It(n.map(function(s) {
    return s.split(" ");
  }));
  return this.forEach(function(s) {
    var r;
    (r = s.classList).remove.apply(r, l);
  }), this;
}
function qt(e, n) {
  if (arguments.length === 1 && typeof e == "string")
    return this[0] ? this[0].getAttribute(e) : void 0;
  for (var t = 0; t < this.length; t += 1)
    if (arguments.length === 2)
      this[t].setAttribute(e, n);
    else
      for (var l in e)
        this[t][l] = e[l], this[t].setAttribute(l, e[l]);
  return this;
}
function Yt() {
  var e = this[0];
  if (e) {
    var n = {};
    if (e.dataset)
      for (var t in e.dataset)
        n[t] = e.dataset[t];
    else
      for (var l = 0; l < e.attributes.length; l += 1) {
        var s = e.attributes[l];
        s.name.indexOf("data-") >= 0 && (n[ar(s.name.split("data-")[1])] = s.value);
      }
    for (var r in n)
      n[r] === "false" ? n[r] = !1 : n[r] === "true" ? n[r] = !0 : parseFloat(n[r]) === n[r] * 1 && (n[r] *= 1);
    return n;
  }
}
function Xt(e) {
  if (typeof e > "u") {
    var n = this[0];
    if (!n)
      return;
    if (n.multiple && n.nodeName.toLowerCase() === "select") {
      for (var t = [], l = 0; l < n.selectedOptions.length; l += 1)
        t.push(n.selectedOptions[l].value);
      return t;
    }
    return n.value;
  }
  for (var s = 0; s < this.length; s += 1) {
    var r = this[s];
    if (Array.isArray(e) && r.multiple && r.nodeName.toLowerCase() === "select")
      for (var o = 0; o < r.options.length; o += 1)
        r.options[o].selected = e.indexOf(r.options[o].value) >= 0;
    else
      r.value = e;
  }
  return this;
}
function Kt() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  var l = n[0], s = n[1], r = n[2], o = n[3];
  typeof n[1] == "function" && (l = n[0], r = n[1], o = n[2], s = void 0), o || (o = !1);
  function a(u) {
    var x = u.target;
    if (x) {
      var C = u.target.dom7EventData || [];
      if (C.indexOf(u) < 0 && C.unshift(u), M(x).is(s))
        r.apply(x, C);
      else
        for (var O = M(x).parents(), w = 0; w < O.length; w += 1)
          M(O[w]).is(s) && r.apply(O[w], C);
    }
  }
  function c(u) {
    var x = u && u.target ? u.target.dom7EventData || [] : [];
    x.indexOf(u) < 0 && x.unshift(u), r.apply(this, x);
  }
  for (var f = l.split(" "), h, m = 0; m < this.length; m += 1) {
    var _ = this[m];
    if (s)
      for (h = 0; h < f.length; h += 1) {
        var d = f[h];
        _.dom7LiveListeners || (_.dom7LiveListeners = {}), _.dom7LiveListeners[d] || (_.dom7LiveListeners[d] = []), _.dom7LiveListeners[d].push({
          listener: r,
          proxyListener: a
        }), _.addEventListener(d, a, o);
      }
    else
      for (h = 0; h < f.length; h += 1) {
        var y = f[h];
        _.dom7Listeners || (_.dom7Listeners = {}), _.dom7Listeners[y] || (_.dom7Listeners[y] = []), _.dom7Listeners[y].push({
          listener: r,
          proxyListener: c
        }), _.addEventListener(y, c, o);
      }
  }
  return this;
}
function Qt() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  var l = n[0], s = n[1], r = n[2], o = n[3];
  typeof n[1] == "function" && (l = n[0], r = n[1], o = n[2], s = void 0), o || (o = !1);
  for (var a = l.split(" "), c = 0; c < a.length; c += 1)
    for (var f = a[c], h = 0; h < this.length; h += 1) {
      var m = this[h], _ = void 0;
      if (!s && m.dom7Listeners ? _ = m.dom7Listeners[f] : s && m.dom7LiveListeners && (_ = m.dom7LiveListeners[f]), _ && _.length)
        for (var y = _.length - 1; y >= 0; y -= 1) {
          var d = _[y];
          r && d.listener === r || r && d.listener && d.listener.dom7proxy && d.listener.dom7proxy === r ? (m.removeEventListener(f, d.proxyListener, o), _.splice(y, 1)) : r || (m.removeEventListener(f, d.proxyListener, o), _.splice(y, 1));
        }
    }
  return this;
}
function Jt() {
  for (var e = 0; e < this.length; e += 1)
    this[e].style.display = "none";
  return this;
}
function Zt(e) {
  return e ? (this.forEach(function(n, t) {
    e.apply(n, [n, t]);
  }), this) : this;
}
function en(e) {
  if (typeof e > "u")
    return this[0] ? this[0].innerHTML : null;
  for (var n = 0; n < this.length; n += 1)
    this[n].innerHTML = e;
  return this;
}
function tn(e) {
  var n = On(), t = Ot(), l = this[0], s, r;
  if (!l || typeof e > "u")
    return !1;
  if (typeof e == "string") {
    if (l.matches)
      return l.matches(e);
    if (l.webkitMatchesSelector)
      return l.webkitMatchesSelector(e);
    if (l.msMatchesSelector)
      return l.msMatchesSelector(e);
    for (s = M(e), r = 0; r < s.length; r += 1)
      if (s[r] === l)
        return !0;
    return !1;
  }
  if (e === t)
    return l === t;
  if (e === n)
    return l === n;
  if (e.nodeType || e instanceof fe) {
    for (s = e.nodeType ? [e] : e, r = 0; r < s.length; r += 1)
      if (s[r] === l)
        return !0;
    return !1;
  }
  return !1;
}
function nn() {
  for (var e, n = Ot(), t = 0; t < arguments.length; t += 1) {
    e = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    for (var l = 0; l < this.length; l += 1)
      if (typeof e == "string") {
        var s = n.createElement("div");
        for (s.innerHTML = e; s.firstChild; )
          this[l].appendChild(s.firstChild);
      } else if (e instanceof fe)
        for (var r = 0; r < e.length; r += 1)
          this[l].appendChild(e[r]);
      else
        this[l].appendChild(e);
  }
  return this;
}
function ln(e) {
  for (var n = [], t = 0; t < this.length; t += 1)
    for (var l = this[t].parentNode; l; )
      e ? M(l).is(e) && n.push(l) : n.push(l), l = l.parentNode;
  return M(n);
}
function sn(e) {
  for (var n = [], t = 0; t < this.length; t += 1)
    for (var l = this[t].querySelectorAll(e), s = 0; s < l.length; s += 1)
      n.push(l[s]);
  return M(n);
}
function rn(e) {
  for (var n = [], t = 0; t < this.length; t += 1)
    for (var l = this[t].children, s = 0; s < l.length; s += 1)
      (!e || M(l[s]).is(e)) && n.push(l[s]);
  return M(n);
}
var cr = "resize scroll".split(" ");
function In(e) {
  function n() {
    for (var t = arguments.length, l = new Array(t), s = 0; s < t; s++)
      l[s] = arguments[s];
    if (typeof l[0] > "u") {
      for (var r = 0; r < this.length; r += 1)
        cr.indexOf(e) < 0 && (e in this[r] ? this[r][e]() : M(this[r]).trigger(e));
      return this;
    }
    return this.on.apply(this, [e].concat(l));
  }
  return n;
}
var on = In("click"), an = In("focus");
Jt && (M.fn.hide = Jt);
nn && (M.fn.append = nn);
on && (M.fn.click = on);
Kt && (M.fn.on = Kt);
Qt && (M.fn.off = Qt);
an && (M.fn.focus = an);
qt && (M.fn.attr = qt);
Xt && (M.fn.val = Xt);
en && (M.fn.html = en);
Yt && (M.fn.dataset = Yt);
zt && (M.fn.addClass = zt);
Gt && (M.fn.removeClass = Gt);
rn && (M.fn.children = rn);
Zt && (M.fn.each = Zt);
sn && (M.fn.find = sn);
tn && (M.fn.is = tn);
ln && (M.fn.parents = ln);
let dr = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((n, t) => (t &= 63, t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t > 62 ? n += "-" : n += "_", n), "");
function fr(e = "r") {
  return `${e}-${dr()}`;
}
function kn(e) {
  if (window.navigator.userAgent.toLowerCase().indexOf("ie") >= 0) {
    const t = `<embed name="embedPlay" src="${e}"></embed>`;
    M("body").find("embed").length <= 0 && M("body").append(t);
    const l = document.embedPlay;
    l.volume = 50;
  } else {
    const t = `<audio id='audioPlay' src='${e}' hidden='true'>`;
    M("body").find("audio").length <= 0 && M("body").append(t), document.getElementById("audioPlay").play();
  }
}
function un(e) {
  const n = Math.floor(e / 60), t = e % 60, l = String(n).padStart(2, "0"), s = String(t).padStart(2, "0");
  return `${l}:${s}`;
}
const Tn = "--editor-vdata";
function pr(e) {
  const n = JSON.stringify(e);
  window.localStorage.setItem(Tn, n);
}
function vr() {
  const e = window.localStorage.getItem(Tn);
  if (e) {
    const n = JSON.parse(e);
    if (n instanceof Array)
      return n;
  }
}
const je = g();
function mr(e) {
  e.selection && (console.log(e.selection), je.value = e.selection);
}
function hr() {
  je.value = null;
}
function _r() {
  return je.value ? je.value : null;
}
class se {
  constructor(n) {
    X(this, "editor");
    this.editor = n;
  }
  genDomID() {
    return fr(`w-e-dom-${this.key}`);
  }
  selection() {
    const { selection: n } = this.editor;
    return n ?? _r();
  }
  getValue() {
    const n = this.selection();
    return n == null ? "" : te.string(this.editor, n);
  }
  record() {
    mr(this.editor);
  }
  unrecord() {
    hr();
  }
  reselect() {
    const n = this.selection();
    n && this.editor.select(n);
  }
  isDisabled() {
    return this.selection() == null ? (F.emit(j.ERROR, "未选中编辑器"), !0) : !1;
  }
}
class Ye extends se {
  constructor(t) {
    super(t);
    X(this, "key", "speaker");
    t.on("ssml-speaker-close", Ye.handleClose);
  }
  static handleClose(t, l) {
    const s = le(t, "ssml-speaker", l.domId);
    s && Oe(t, s, (r) => r.word);
  }
  getValue() {
    return super.getValue();
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const t = this.selection();
    if (Z.isCollapsed(t))
      return F.emit(j.ERROR, "请选中文本"), !0;
    const l = this.getValue();
    return l.length != 1 ? !0 : /^[\u4E00-\u9FA5]+$/gi.test(l) ? !1 : (F.emit(j.ERROR, "选中一个中文字符，并且有不能在其他语句之内"), !0);
  }
  exec(t) {
    if (this.isDisabled())
      return;
    const l = this.getValue();
    if (l == null)
      return;
    const s = {
      type: "ssml-speaker",
      domId: this.genDomID(),
      word: l,
      phoneme: t.value,
      remark: t.label,
      bgColor: "speaker",
      children: [{ text: "" }]
    };
    L.delete(this.editor), L.insertNodes(this.editor, s), this.editor.move(1);
  }
}
const Rn = /* @__PURE__ */ D({
  setup() {
    const e = me(ie.EDITORCONFIG), n = U(), t = g([]), l = g(!1);
    function s() {
      l.value || (l.value = !0);
    }
    function r() {
      l.value && (l.value = !1);
    }
    async function o(a) {
      var f;
      if (n.value ?? (n.value = new Ye(a)), (f = n.value) != null && f.isDisabled())
        return;
      n.value.record();
      const c = n.value.getValue();
      if (c ? t.value = await e.fetchSpeaker(c) : t.value = [], t.value.length == 0)
        return n.value.unrecord(), F.emit(j.ERROR, "选中的字符没有不是多音字");
      s();
    }
    return () => i(oe, {
      visible: l.value,
      "onUpdate:visible": (a) => l.value = a,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => i(H, {
        text: "多音字",
        icon: "speaker",
        onClick: o
      }, null),
      default: () => i("div", {
        class: "d-flex flex-column"
      }, [t.value.map(({
        label: a,
        value: c
      }) => i("div", {
        key: c,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          n.value && !n.value.isDisabled() && (n.value.reselect(), n.value.exec({
            label: a,
            value: c
          }), n.value.unrecord()), r();
        },
        onMousedown: q(() => {
        }, ["stop", "prevent"])
      }, [a]))])
    });
  }
});
class Xe extends se {
  constructor(t) {
    super(t);
    X(this, "key", "continuous");
    t.on("ssml-continuous-close", Xe.handleClose);
  }
  static handleClose(t, l) {
    const s = le(t, "ssml-continuous", l.domId);
    s && Oe(t, s, (r) => r.value);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const t = this.selection();
    return Z.isCollapsed(t) ? (F.emit(j.ERROR, "请选择多个中文字符或者多个多个英文单词"), !0) : te.string(this.editor, t).length < 2;
  }
  exec() {
    if (this.isDisabled())
      return;
    const t = this.getValue();
    if (t == null)
      return;
    const l = {
      type: "ssml-continuous",
      domId: this.genDomID(),
      children: [{ text: "" }],
      remark: "连读",
      value: t,
      bgColor: "continuous"
    };
    L.delete(this.editor), L.insertNodes(this.editor, l), this.editor.move(1);
  }
}
const Dn = /* @__PURE__ */ D({
  setup() {
    const e = U();
    function n(t) {
      e.value ?? (e.value = new Xe(t)), !e.value.isDisabled() && (e.value.exec(), e.value.unrecord());
    }
    return () => i(H, {
      text: "连读",
      icon: "continuous",
      onClick: n
    }, null);
  }
});
class Mn extends se {
  constructor(t) {
    super(t);
    X(this, "key", "read");
  }
  static handleClose(t, l) {
    const s = le(t, "ssml-read", l.domId);
    s && Oe(t, s, (r) => r.value);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const t = this.selection();
    return t == null ? !0 : Z.isCollapsed(t) ? (F.emit(j.ERROR, "请先选择文本"), !0) : !1;
  }
  exec(t) {
    if (this.isDisabled())
      return;
    const l = this.getValue();
    if (l == null)
      return;
    const s = {
      type: "ssml-read",
      domId: this.genDomID(),
      phoneme: t.value,
      remark: t.label,
      value: l,
      bgColor: "read",
      children: [{ text: "" }]
    };
    L.delete(this.editor), L.insertNodes(this.editor, s), this.editor.move(1);
  }
}
const gr = [{
  label: "重音",
  value: "重"
}, {
  label: "拖音",
  value: "拖"
}, {
  label: "重音+拖音",
  value: "重+拖"
}], Vn = /* @__PURE__ */ D({
  setup() {
    const e = U(), n = g(!1);
    function t() {
      n.value || (n.value = !0);
    }
    function l() {
      n.value && (n.value = !1);
    }
    function s(r) {
      e.value ?? (e.value = new Mn(r)), !e.value.isDisabled() && (e.value.record(), t());
    }
    return () => i(oe, {
      visible: n.value,
      "onUpdate:visible": (r) => n.value = r,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => i(H, {
        text: "重音",
        icon: "read",
        onClick: s
      }, null),
      default: () => i("div", {
        class: "d-flex flex-column",
        onMousedown: q(() => {
        }, ["stop", "prevent"])
      }, [gr.map(({
        label: r,
        value: o
      }) => i("div", {
        key: o,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && (e.value.reselect(), e.value.exec({
            label: r,
            value: o
          }), e.value.unrecord()), l();
        },
        onMousedown: q(() => {
        }, ["stop", "prevent"])
      }, [r]))])
    });
  }
});
class Ke extends se {
  constructor(t) {
    super(t);
    X(this, "key", "digital");
    t.on("ssml-digital-close", Ke.handleClose);
  }
  static handleClose(t, l) {
    const s = le(t, "ssml-digital", l.domId);
    s && Oe(t, s, (r) => r.value);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const t = this.selection();
    if (Z.isCollapsed(t))
      return F.emit(j.ERROR, "请选择纯数字文本"), !0;
    const l = te.string(this.editor, t);
    return !!(l.length <= 0 || Number.isNaN(Number(l)));
  }
  exec(t) {
    if (this.isDisabled())
      return;
    const l = this.getValue();
    if (l == null)
      return;
    const s = {
      type: "ssml-digital",
      domId: this.genDomID(),
      interpretAs: t.value,
      remark: t.label,
      value: l,
      bgColor: "digital",
      children: [{ text: "" }]
    };
    L.delete(this.editor), L.insertNodes(this.editor, s), this.editor.move(1);
  }
}
const yr = [{
  value: "value",
  label: "读数值"
}, {
  value: "digits",
  label: "读数字"
}, {
  value: "telephone",
  label: "读手机号"
}], Pn = /* @__PURE__ */ D({
  setup() {
    const e = U(), n = g(!1);
    function t() {
      n.value = !n.value;
    }
    function l(s) {
      e.value ?? (e.value = new Ke(s)), !e.value.isDisabled() && (e.value.record(), t());
    }
    return () => i(oe, {
      visible: n.value,
      "onUpdate:visible": (s) => n.value = s,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => i(H, {
        text: "数字符号",
        icon: "digital",
        onClick: l
      }, null),
      default: () => i("div", {
        class: "d-flex flex-column"
      }, [yr.map(({
        label: s,
        value: r
      }) => i("div", {
        key: r,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && (e.value.reselect(), e.value.exec({
            label: s,
            value: r
          }), e.value.unrecord()), t();
        },
        onMousedown: q(() => {
        }, ["stop", "prevent"])
      }, [s]))])
    });
  }
});
class Ln extends se {
  constructor(t) {
    super(t);
    X(this, "key", "alias");
  }
  static handleClose(t, l) {
    const s = le(t, "ssml-alias", l.domId);
    s && Oe(t, s, (r) => r.value);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const t = this.selection();
    return Z.isCollapsed(t) ? (F.emit(j.ERROR, "选中一个中文字符，并且有不能在其他语句之内"), !0) : te.string(this.editor, t).length <= 0;
  }
  exec(t) {
    if (this.isDisabled())
      return;
    const l = this.getValue();
    if (l == null)
      return;
    const s = {
      type: "ssml-alias",
      domId: this.genDomID(),
      remark: `(${t.value})`,
      alias: t.value,
      value: l,
      bgColor: "alias",
      children: [{ text: "" }]
    };
    L.delete(this.editor), L.insertNodes(this.editor, s), this.editor.move(1);
  }
}
const An = /* @__PURE__ */ D({
  setup() {
    const e = U(), n = g(), t = g(!1);
    function l() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    async function r(a) {
      e.value ?? (e.value = new Ln(a)), !e.value.isDisabled() && (e.value.record(), l(), n.value.focus());
    }
    function o(a) {
      var c, f, h;
      s(), a && ((c = e.value) == null || c.reselect(), (f = e.value) == null || f.exec({
        value: a,
        label: a
      }), (h = e.value) == null || h.unrecord());
    }
    return () => i(oe, {
      visible: t.value,
      "onUpdate:visible": (a) => t.value = a,
      trigger: "contextmenu",
      placement: "right-end",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => i(H, {
        text: "别名",
        icon: "alias",
        onClick: r
      }, null),
      default: () => i(xt, {
        ref: n,
        onSubmit: o
      }, null)
    });
  }
});
function br(e) {
  const { selection: n } = e;
  if (n) {
    const [t, l] = Z.edges(n), s = te.range(e, t, l), r = te.string(e, s), o = r.trimEnd();
    if (o !== r) {
      const a = r.length - o.length, c = { ...l, offset: l.offset - a }, f = { ...n, anchor: t, focus: c };
      L.select(e, f);
    }
  }
}
class Qe extends se {
  constructor(t) {
    super(t);
    X(this, "key", "english");
    t.on("ssml-english-close", Qe.handleClose);
  }
  static handleClose(t, l) {
    const s = le(t, "ssml-english", l.domId);
    s && Oe(t, s, (r) => r.word);
  }
  getValue() {
    return super.getValue();
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const t = this.selection();
    if (Z.isCollapsed(t))
      return F.emit(j.ERROR, "请选择英文单词"), !0;
    const l = te.string(this.editor, t);
    return l.length <= 0 ? !0 : /^[A-Za-z]+$/gi.test(l) ? !1 : (F.emit(j.ERROR, "请选择英文单词"), !0);
  }
  exec(t) {
    if (this.isDisabled())
      return;
    const l = this.getValue();
    if (l == null)
      return;
    const s = {
      type: "ssml-english",
      domId: this.genDomID(),
      word: l,
      phoneme: t.value,
      remark: t.label,
      bgColor: "english",
      children: [{ text: "" }]
    };
    L.delete(this.editor), L.insertNodes(this.editor, s), this.editor.move(1);
  }
}
const Nn = /* @__PURE__ */ D({
  setup() {
    const e = U(), n = me(ie.EDITORCONFIG), t = g([]), l = g(!1);
    function s() {
      l.value || (l.value = !0);
    }
    function r() {
      l.value && (l.value = !1);
    }
    async function o(a) {
      if (e.value ?? (e.value = new Qe(a)), br(a), e.value.isDisabled())
        return;
      e.value.record();
      const c = e.value.getValue();
      if (c) {
        if (t.value = await n.fetchEnglish(c), t.value.length <= 0)
          return F.emit(j.ERROR, "找不到单词的音标");
        s();
      } else
        e.value.unrecord();
    }
    return () => i(oe, {
      visible: l.value,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => i(H, {
        text: "音标",
        icon: "english",
        onClick: o
      }, null),
      default: () => i("div", {
        class: "d-flex flex-column"
      }, [t.value.map(({
        label: a,
        value: c
      }) => i("div", {
        key: c,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && (e.value.reselect(), e.value.exec({
            label: a,
            value: c
          }), e.value.unrecord()), r();
        },
        onMousedown: q(() => {
        }, ["stop", "prevent"])
      }, [a]))])
    });
  }
});
class Je extends se {
  constructor(t) {
    super(t);
    X(this, "key", "changespeed");
    t.on("ssml-changespeed-close", Je.handleClose);
  }
  static handleClose(t, l) {
    const s = le(t, "ssml-changespeed", l.domId);
    s && L.unwrapNodes(t, { at: s[1] });
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const t = this.selection();
    return t == null ? !0 : Z.isCollapsed(t) ? (F.emit(j.ERROR, "请框选要变速的句子"), !0) : !1;
  }
  exec(t) {
    if (this.isDisabled())
      return;
    const l = this.getValue();
    if (l == null)
      return;
    const s = {
      type: "ssml-changespeed",
      domId: this.genDomID(),
      remark: t.label,
      rate: t.value,
      bgColor: "changespeed",
      children: [{ text: l }]
    };
    L.delete(this.editor), L.insertNodes(this.editor, s);
  }
}
const xr = [{
  value: "0.1x",
  label: "0.1x"
}, {
  value: "0.15x",
  label: "0.15x"
}, {
  value: "0.2x",
  label: "0.2x"
}, {
  value: "0.25x",
  label: "0.25x"
}, {
  value: "0.3x",
  label: "0.3x"
}, {
  value: "0.35x",
  label: "0.35x"
}, {
  value: "0.4x",
  label: "0.4x"
}], Bn = /* @__PURE__ */ D({
  setup() {
    const e = U(), n = g(!1);
    function t() {
      n.value || (n.value = !0);
    }
    function l() {
      n.value && (n.value = !1);
    }
    async function s(r) {
      e.value ?? (e.value = new Je(r)), !e.value.isDisabled() && (e.value.record(), t());
    }
    return () => i(oe, {
      style: {
        padding: "0px"
      },
      visible: n.value,
      "onUpdate:visible": (r) => n.value = r,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => i(H, {
        text: "局部变速",
        icon: "changespeed",
        onClick: s
      }, null),
      default: () => i("div", {
        class: "d-flex flex-column overflow-x-hidden overflow-y-scroll",
        style: "height:15rem"
      }, [xr.map(({
        label: r,
        value: o
      }) => i("div", {
        key: o,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          var a, c, f;
          (a = e.value) == null || a.reselect(), (c = e.value) == null || c.exec({
            label: r,
            value: o
          }), (f = e.value) == null || f.unrecord(), l();
        },
        onMousedown: q(() => {
        }, ["stop", "prevent"])
      }, [r]))])
    });
  }
});
class Ze extends se {
  constructor(t) {
    super(t);
    X(this, "key", "rhythm");
    t.on("ssml-rhythm-close", Ze.handleClose);
  }
  static handleClose(t, l) {
    const s = le(t, "ssml-rhythm", l.domId);
    s && L.delete(t, { at: s[1] });
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const t = this.selection();
    return Z.isExpanded(t) ? (F.emit(j.ERROR, "不能选中文本"), !0) : !1;
  }
  exec(t) {
    if (this.isDisabled())
      return;
    const l = {
      type: "ssml-rhythm",
      domId: this.genDomID(),
      time: t.value,
      remark: t.label,
      bgColor: "rhythm",
      children: [{ text: "" }]
    };
    L.insertNodes(this.editor, l), this.editor.move(1);
  }
}
const wr = [{
  value: "200ms",
  label: "短"
}, {
  value: "300ms",
  label: "中"
}, {
  value: "500ms",
  label: "长"
}], jn = /* @__PURE__ */ D({
  setup() {
    const e = U(), n = g(!1);
    function t() {
      n.value || (n.value = !0);
    }
    function l() {
      n.value && (n.value = !1);
    }
    function s(r) {
      e.value ?? (e.value = new Ze(r)), !e.value.isDisabled() && (e.value.record(), t());
    }
    return () => i(oe, {
      visible: n.value,
      "onUpdate:visible": (r) => n.value = r,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => i(H, {
        text: "停顿调节",
        icon: "rhythm",
        onClick: s
      }, null),
      default: () => i("div", {
        class: "d-flex flex-column"
      }, [wr.map(({
        label: r,
        value: o
      }) => i("div", {
        key: o,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && (e.value.reselect(), e.value.exec({
            label: r,
            value: o
          }), e.value.unrecord()), l();
        },
        onMousedown: q(() => {
        }, ["stop", "prevent"])
      }, [r]))])
    });
  }
});
class Re extends se {
  constructor(t) {
    super(t);
    X(this, "key", "special");
    t.on("ssml-special-close", Re.handleClose), t.on("ssml-special-play", Re.handlePlay);
  }
  static handleClose(t, l) {
    const s = le(t, "ssml-special", l.domId);
    s && L.delete(t, { at: s[1] });
  }
  static handlePlay(t, l) {
    kn(l.src);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const t = this.selection();
    return Z.isExpanded(t) ? (F.emit(j.ERROR, "不能框选文字"), !0) : !1;
  }
  exec(t) {
    if (this.isDisabled() || this.getValue() == null)
      return;
    const s = {
      type: "ssml-special",
      domId: this.genDomID(),
      src: t.value,
      remark: t.label,
      bgColor: "special",
      children: [{ text: "" }]
    };
    L.insertNodes(this.editor, s), this.editor.move(1);
  }
}
const Fn = /* @__PURE__ */ D({
  __name: "special-menu",
  setup(e) {
    const n = g(), t = g(), l = U(), s = g(!1), r = me(ie.EDITORCONFIG), o = { first: "默认音效", second: "自定义音效", last: "最近音效" }, a = [
      { value: "", label: "全部场景" },
      { value: "2", label: "场景2" },
      { value: "3", label: "场景3" }
    ], c = [
      { value: "", label: "全部风格" },
      { value: "2", label: "风格2" },
      { value: "3", label: "风格3" }
    ], f = g(), { x: h, y: m, height: _ } = Me(t), y = (u) => {
      if (l.value ?? (l.value = new Re(u)), l.value.isDisabled())
        return !1;
      l.value.record(), n.value.setPosition({
        x: h.value - 200,
        y: m.value + _.value
      }), s.value = !0;
    };
    function d(u) {
      l.value && !l.value.isDisabled() && (l.value.reselect(), l.value.exec(u), l.value.unrecord()), s.value = !1;
    }
    return (u, x) => (T(), z(b(Se), {
      ref_key: "dragRef",
      ref: n,
      visible: s.value,
      "onUpdate:visible": x[0] || (x[0] = (C) => s.value = C)
    }, {
      reference: v(() => [
        i(b(H), {
          ref_key: "menuRef",
          ref: t,
          text: "音效",
          icon: "special",
          onClick: y
        }, null, 512)
      ]),
      default: v(() => [
        i(b(qe), {
          menuItemLabel: o,
          scenes: a,
          styles: c,
          dataList: f.value,
          fetch: b(r).fetchSpecial,
          onSubmit: d
        }, null, 8, ["dataList", "fetch"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
class et extends se {
  constructor(t) {
    super(t);
    X(this, "key", "mute");
    t.on("ssml-mute-close", et.handleClose);
  }
  static handleClose(t, l) {
    const s = le(t, "ssml-mute", l.domId);
    s && L.delete(t, { at: s[1] });
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const t = this.selection();
    return Z.isExpanded(t) ? (F.emit(j.ERROR, "不能选中文本"), !0) : !1;
  }
  exec(t) {
    if (this.isDisabled())
      return;
    const l = {
      type: "ssml-mute",
      domId: this.genDomID(),
      time: t.value,
      remark: t.label,
      bgColor: "mute",
      children: [{ text: "" }]
    };
    L.insertNodes(this.editor, l), this.editor.move(1);
  }
}
const Er = [{
  value: "150ms",
  label: "150ms"
}, {
  value: "200ms",
  label: "200ms"
}, {
  value: "300ms",
  label: "300ms"
}, {
  value: "400ms",
  label: "400ms"
}, {
  value: "500ms",
  label: "500ms"
}, {
  value: "600ms",
  label: "600ms"
}], Hn = /* @__PURE__ */ D({
  setup() {
    const e = U(), n = g(!1), t = g();
    function l() {
      n.value || (n.value = !0);
    }
    function s() {
      n.value && (n.value = !1);
    }
    function r(a) {
      e.value ?? (e.value = new et(a)), !e.value.isDisabled() && (e.value.record(), l(), t.value.focus());
    }
    function o(a) {
      var c, f, h;
      s(), a && ((c = e.value) == null || c.reselect(), (f = e.value) == null || f.exec({
        value: a,
        label: a
      }), (h = e.value) == null || h.unrecord());
    }
    return () => i(oe, {
      visible: n.value,
      "onUpdate:visible": (a) => n.value = a,
      trigger: "contextmenu",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => i(H, {
        text: "插入静音",
        icon: "mute",
        onClick: r
      }, null),
      default: () => i("div", {
        class: "d-flex flex-column"
      }, [Er.map(({
        value: a,
        label: c
      }) => i("div", {
        key: a,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => o(a),
        onMousedown: q(() => {
        }, ["stop", "prevent"])
      }, [c])), i(xt, {
        type: "number",
        ref: t,
        onSubmit: o
      }, null)])
    });
  }
}), Un = /* @__PURE__ */ D({
  __name: "bgm-menu",
  setup(e) {
    const n = g(), t = g(), l = U(), s = g(!1), r = me(ie.EDITORCONFIG), o = { first: "默认配乐", second: "自定义配乐", last: "最近配乐" }, a = [
      { value: "", label: "全部场景" },
      { value: "2", label: "场景2" },
      { value: "3", label: "场景3" }
    ], c = [
      { value: "", label: "全部风格" },
      { value: "2", label: "风格2" },
      { value: "3", label: "风格3" }
    ], f = g(), { x: h, y: m, height: _ } = Me(t), y = async (u) => {
      const x = {
        x: h.value - 300,
        y: m.value + _.value
      };
      l.value = u, n.value.setPosition(x), s.value = !0, f.value ?? (f.value = await r.fetchBgm({ search: "", menuKey: "first", scene: "", style: "" }));
    };
    function d(u) {
      var x;
      (x = l.value) == null || x.emit(pe.UPDATE_BGM, u), s.value = !1;
    }
    return (u, x) => (T(), z(b(Se), {
      ref_key: "dragRef",
      ref: n,
      visible: s.value,
      "onUpdate:visible": x[0] || (x[0] = (C) => s.value = C)
    }, {
      reference: v(() => [
        i(b(H), {
          ref_key: "menuRef",
          ref: t,
          text: "配乐",
          icon: "bgm",
          onClick: y
        }, null, 512)
      ]),
      default: v(() => [
        i(b(qe), {
          menuItemLabel: o,
          scenes: a,
          styles: c,
          dataList: f.value,
          fetch: b(r).fetchBgm,
          onSubmit: d
        }, null, 8, ["dataList", "fetch"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Wn = /* @__PURE__ */ D({
  __name: "sensitive-menu",
  setup(e) {
    const n = me(ie.EDITORCONFIG), t = g(), l = g(), s = U(), r = g(!1), o = { first: "默认配乐", second: "自定义配乐", last: "最近配乐" }, a = [
      { value: "", label: "全部场景" },
      { value: "2", label: "场景2" },
      { value: "3", label: "场景3" }
    ], c = [
      { value: "", label: "全部风格" },
      { value: "2", label: "风格2" },
      { value: "3", label: "风格3" }
    ], f = g(), { x: h, y: m, height: _ } = Me(l), y = (u) => {
      const x = {
        x: h.value - 200,
        y: m.value + _.value
      };
      s.value = u, t.value.setPosition(x);
    };
    function d(u) {
      console.log(u);
    }
    return (u, x) => (T(), z(b(Se), {
      ref_key: "dragRef",
      ref: t,
      visible: r.value,
      "onUpdate:visible": x[0] || (x[0] = (C) => r.value = C)
    }, {
      refenence: v(() => [
        i(b(H), {
          ref_key: "menuRef",
          ref: l,
          text: "敏感词",
          icon: "sensitive",
          onClick: y
        }, null, 512)
      ]),
      default: v(() => [
        i(b(qe), {
          menuItemLabel: o,
          scenes: a,
          styles: c,
          dataList: f.value,
          fetch: b(n).fetchBgm,
          onSubmit: d
        }, null, 8, ["dataList", "fetch"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
const $r = {
  class: "select-list",
  style: { width: "120px" }
}, Cr = {
  class: "text-center d-flex flex-column justify-content-center fs-6",
  style: { height: "60px" }
}, Sr = {
  class: "text-center w-100 border-start border-top border-bottom border-secondary-subtle overflow-y-auto overflow-x-hidden scrollbar-none",
  style: { height: "180px" }
}, Or = ["onClick"], Ir = /* @__PURE__ */ D({
  __name: "select-list",
  props: {
    modelValue: {},
    dataList: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (n, t) => (T(), P("div", $r, [
      p("div", Cr, [
        ne(n.$slots, "default", {}, void 0, !0)
      ]),
      p("ul", Sr, [
        (T(!0), P(re, null, ge(n.dataList, (l, s) => (T(), P("li", {
          class: ve(["clickable select-item py-1", { activate: l.value === n.modelValue }]),
          key: s,
          onClick: (r) => n.$emit("update:modelValue", l.value)
        }, W(l.label), 11, Or))), 128))
      ])
    ]));
  }
});
const ke = /* @__PURE__ */ G(Ir, [["__scopeId", "data-v-8c60f94f"]]), kr = {
  style: { width: "600px", height: "360px" },
  class: "position-relative px-2 pb-2"
}, Tr = { class: "position-relative" }, Rr = { class: "position-absolute top-0 end-0" }, Dr = /* @__PURE__ */ p("li", null, [
  /* @__PURE__ */ p("span", { class: "text-nowrap" }, "近期使用:")
], -1), Mr = /* @__PURE__ */ p("span", { class: "my-3" }, "角色", -1), Vr = /* @__PURE__ */ p("span", { class: "my-3" }, "风格", -1), Pr = /* @__PURE__ */ p("span", { class: "my-3" }, "语速", -1), Lr = /* @__PURE__ */ p("span", { class: "my-3" }, "语调", -1), Ar = { class: "position-absolute bottom-0 end-0 d-flex flex-row justify-content-end me-4 mb-3" }, Nr = /* @__PURE__ */ D({
  __name: "management-content",
  setup(e) {
    const n = g(!1), t = g(""), l = g(""), s = g(""), r = g(""), o = g(""), a = g(""), c = g(""), f = g([]), h = g([]), m = g([]), _ = g([]), y = g([]), d = g([]);
    f.value = [
      { label: "全部类型", value: "" },
      { label: "常规", value: "2" },
      { label: "已购", value: "3" },
      { label: "收藏", value: "4" },
      { label: "我的", value: "5" },
      { label: "SVIP", value: "6" },
      { label: "付费", value: "7" }
    ], h.value = f.value, m.value = f.value, _.value = f.value, y.value = f.value, d.value = f.value;
    function u() {
    }
    return (x, C) => (T(), P("div", kr, [
      i(b(Ue), {
        onSubmit: q(u, ["prevent"])
      }, {
        default: v(() => [
          i(b(We), {
            modelValue: t.value,
            "onUpdate:modelValue": C[0] || (C[0] = (O) => t.value = O),
            placeholder: "请输入名称快速查找配音师"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["onSubmit"]),
      p("div", Tr, [
        p("div", Rr, [
          i(b(ee), {
            size: "small",
            icon: b(hl),
            onClick: C[1] || (C[1] = () => n.value = !n.value)
          }, null, 8, ["icon"])
        ]),
        p("ul", {
          class: ve(["d-flex flex-row row-gap-1 column-gap-2 overflow-x-hidden", { "flex-wrap": n.value }])
        }, [
          Dr,
          p("li", null, [
            i(b(ae), {
              type: "info",
              closable: ""
            }, {
              default: v(() => [
                $("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          p("li", null, [
            i(b(ae), {
              type: "info",
              closable: ""
            }, {
              default: v(() => [
                $("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          p("li", null, [
            i(b(ae), {
              type: "info",
              closable: ""
            }, {
              default: v(() => [
                $("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          p("li", null, [
            i(b(ae), {
              type: "info",
              closable: ""
            }, {
              default: v(() => [
                $("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          p("li", null, [
            i(b(ae), {
              type: "info",
              closable: ""
            }, {
              default: v(() => [
                $("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          p("li", null, [
            i(b(ae), {
              type: "info",
              closable: ""
            }, {
              default: v(() => [
                $("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          p("li", null, [
            i(b(ae), {
              type: "info",
              closable: ""
            }, {
              default: v(() => [
                $("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ])
        ], 2),
        ye(p("div", {
          class: ve({ "d-flex flex-row": !n.value })
        }, [
          i(ke, {
            modelValue: s.value,
            "onUpdate:modelValue": C[3] || (C[3] = (O) => s.value = O),
            dataList: h.value
          }, {
            default: v(() => [
              i(b(ft), {
                modelValue: l.value,
                "onUpdate:modelValue": C[2] || (C[2] = (O) => l.value = O)
              }, {
                default: v(() => [
                  (T(!0), P(re, null, ge(f.value, (O, w) => (T(), z(b(pt), {
                    value: O.value,
                    label: O.label,
                    key: w
                  }, null, 8, ["value", "label"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          i(ke, {
            modelValue: r.value,
            "onUpdate:modelValue": C[4] || (C[4] = (O) => r.value = O),
            dataList: m.value
          }, {
            default: v(() => [
              Mr
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          i(ke, {
            modelValue: o.value,
            "onUpdate:modelValue": C[5] || (C[5] = (O) => o.value = O),
            dataList: _.value
          }, {
            default: v(() => [
              Vr
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          i(ke, {
            modelValue: a.value,
            "onUpdate:modelValue": C[6] || (C[6] = (O) => a.value = O),
            dataList: y.value
          }, {
            default: v(() => [
              Pr
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          i(ke, {
            modelValue: c.value,
            "onUpdate:modelValue": C[7] || (C[7] = (O) => c.value = O),
            dataList: d.value
          }, {
            default: v(() => [
              Lr
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"])
        ], 2), [
          [be, !n.value]
        ])
      ]),
      p("div", Ar, [
        ye(i(b(ee), { type: "primary" }, {
          default: v(() => [
            $("确定")
          ]),
          _: 1
        }, 512), [
          [be, !n.value]
        ]),
        ye(i(b(ee), { type: "primary" }, {
          default: v(() => [
            $("全部清空")
          ]),
          _: 1
        }, 512), [
          [be, n.value]
        ])
      ])
    ]));
  }
}), zn = /* @__PURE__ */ D({
  __name: "management-menu",
  setup(e) {
    const n = g(), t = g(), l = U(), s = g(!1), { x: r, y: o, height: a } = Me(t), c = (h) => {
      const m = {
        x: r.value - 200,
        y: o.value + a.value
      };
      l.value = h, n.value.setPosition(m), s.value = !0;
    };
    function f(h) {
      console.log(h);
    }
    return (h, m) => (T(), z(b(Se), {
      ref_key: "dragRef",
      ref: n,
      visible: s.value,
      "onUpdate:visible": m[0] || (m[0] = (_) => s.value = _)
    }, {
      reference: v(() => [
        i(b(H), {
          ref_key: "menuRef",
          ref: t,
          text: "多人配音",
          icon: "management",
          onClick: c
        }, null, 512)
      ]),
      default: v(() => [
        i(Nr, { onSubmit: f })
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Br = /* @__PURE__ */ D({
  __name: "conversion-content",
  emits: ["submit"],
  setup(e) {
    return (n, t) => (T(), P("div", null, [
      p("button", {
        onClick: t[0] || (t[0] = (l) => n.$emit("submit", { value: "局部变音", label: "局部变音" }))
      }, "局部变音")
    ]));
  }
}), Gn = /* @__PURE__ */ D({
  __name: "conversion-menu",
  setup(e) {
    const n = g(), t = g(), l = U(), s = g(!1), { x: r, y: o, height: a } = Me(t), c = (h) => {
      const m = {
        x: r.value - 200,
        y: o.value + a.value
      };
      l.value = h, n.value.setPosition(m), s.value = !0;
    };
    function f(h) {
      console.log(h);
    }
    return (h, m) => (T(), z(b(Se), {
      ref_key: "dragRef",
      ref: n,
      visible: s.value,
      "onUpdate:visible": m[0] || (m[0] = (_) => s.value = _)
    }, {
      reference: v(() => [
        i(b(H), {
          ref_key: "menuRef",
          ref: t,
          text: "局部变音",
          icon: "conversion",
          onClick: c
        }, null, 512)
      ]),
      default: v(() => [
        i(Br, { onSubmit: f })
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), jr = (e) => ($e("data-v-631743dd"), e = e(), Ce(), e), Fr = { class: "anchor-avatar d-flex flex-column justify-content-center align-items-center" }, Hr = ["src"], Ur = /* @__PURE__ */ jr(() => /* @__PURE__ */ p("div", { class: "anchor-avatar-name text-white" }, "莫厚渊", -1)), Wr = /* @__PURE__ */ D({
  __name: "try-play-circle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: n }) {
    const t = g("https://img.sdaxia.top/upload/4314c841777e4d20901cd5d04a28e91a.png"), l = g(), s = g(0), r = g(0), { position: o } = Ge(l, {
      initialValue: { x: window.innerWidth - 15, y: window.innerHeight / 2 - 15 },
      onStart: (m, _) => h(_.clientX, _.clientY) ? !1 : void 0
    }), { style: a } = Et(l, o);
    function c(m) {
      h(m.clientX, m.clientY) && n("update:visible", !1);
    }
    function f(m) {
      s.value = m.clientX, r.value = m.clientY;
    }
    function h(m, _) {
      return m > s.value - 10 && m < s.value + 10 && _ > r.value - 10 && _ < r.value + 10;
    }
    return (m, _) => ye((T(), P("div", {
      ref_key: "boxRef",
      ref: l,
      class: "try-play-circel user-select-none rounded-circle overflow-hidden",
      style: He([b(a), { position: "fixed" }]),
      onMousedown: f,
      onMouseup: c
    }, [
      p("div", Fr, [
        p("img", {
          src: t.value,
          class: "rounded-circle"
        }, null, 8, Hr),
        Ur
      ])
    ], 36)), [
      [be, m.visible]
    ]);
  }
});
const zr = /* @__PURE__ */ G(Wr, [["__scopeId", "data-v-631743dd"]]), Gr = (e) => ($e("data-v-e8c67559"), e = e(), Ce(), e), qr = { class: "anchor-avatar d-flex flex-column align-items-center text-center justify-content-center" }, Yr = ["src"], Xr = /* @__PURE__ */ Gr(() => /* @__PURE__ */ p("div", { class: "anchor-avatar-name text-white" }, "莫厚渊", -1)), Kr = /* @__PURE__ */ D({
  __name: "anchor-avatar",
  setup(e) {
    const n = g("https://img.sdaxia.top/upload/4314c841777e4d20901cd5d04a28e91a.png");
    return (t, l) => (T(), P("div", qr, [
      p("img", {
        src: n.value,
        class: "rounded-circle",
        style: { height: "40px" }
      }, null, 8, Yr),
      Xr
    ]));
  }
});
const B = /* @__PURE__ */ G(Kr, [["__scopeId", "data-v-e8c67559"]]), Qr = {
  style: { height: "170px" },
  class: "w-100 d-flex flex-row flex-wrap justify-content-start overflow-x-hidden overflow-y-auto scrollbar-none"
}, Jr = /* @__PURE__ */ D({
  __name: "anchor-list",
  setup(e) {
    return (n, t) => (T(), P("div", Qr, [
      (T(), P(re, null, ge(100, (l, s) => p("div", {
        class: "m-2",
        key: s
      }, [
        i(B)
      ])), 64))
    ]));
  }
}), Zr = /* @__PURE__ */ D({
  __name: "tag-item",
  props: {
    isActivate: { type: Boolean }
  },
  setup(e) {
    return (n, t) => (T(), P("div", {
      class: ve(["tag-item p-2 text-white text-center", [n.isActivate ? "activate" : null]])
    }, [
      ne(n.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const I = /* @__PURE__ */ G(Zr, [["__scopeId", "data-v-80dc8a64"]]), eo = { class: "tag-list w-100" }, to = {
  class: "w-100 d-flex flex-row border-bottom border-secondary align-items-center",
  style: { height: "40px" }
}, no = {
  style: { height: "100px" },
  class: "w-100 d-flex flex-row flex-wrap align-items-start overflow-y-auto overflow-x-hidden scrollbar-none"
}, lo = /* @__PURE__ */ D({
  __name: "tag-list",
  setup(e) {
    return (n, t) => (T(), P("div", eo, [
      p("div", to, [
        i(I, null, {
          default: v(() => [
            $("全部")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("男声")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("女声")
          ]),
          _: 1
        })
      ]),
      p("div", no, [
        i(I, null, {
          default: v(() => [
            $("全部")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("影视")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("情感")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("娱乐")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("快板")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("书单")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("名人")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("角色")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("全部")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("影视")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("情感")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("娱乐")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("快板")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("书单")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("名人")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("角色")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("全部")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("影视")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("情感")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("娱乐")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("快板")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("书单")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("名人")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("角色")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("全部")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("影视")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("情感")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("娱乐")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("快板")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("书单")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("名人")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("角色")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("全部")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("影视")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("情感")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("娱乐")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("快板")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("书单")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("名人")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("角色")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("全部")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("影视")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("情感")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("娱乐")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("快板")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("书单")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("名人")
          ]),
          _: 1
        }),
        i(I, null, {
          default: v(() => [
            $("角色")
          ]),
          _: 1
        })
      ])
    ]));
  }
});
const Ve = (e) => ($e("data-v-00254d87"), e = e(), Ce(), e), so = {
  class: "slider-panle w-100 px-3 text-white",
  style: { "font-size": "0.5rem" }
}, ro = { class: "mt-2 row text-center justify-content-between align-items-center" }, oo = { class: "col-auto me-auto d-flex flex-row align-items-center" }, io = ["src"], ao = {
  class: "ms-2 d-flex flex-column justify-content-between",
  style: { height: "50px" }
}, uo = /* @__PURE__ */ Ve(() => /* @__PURE__ */ p("div", { class: "d-flex dlex-row column-gap-2 align-items-end" }, [
  /* @__PURE__ */ p("span", { class: "fs-6" }, "魔云猫"),
  /* @__PURE__ */ p("span", { style: { "font-size": "0.5rem" } }, "0.55x")
], -1)), co = { class: "d-flex flex-row column-gap-2 align-items-center" }, fo = /* @__PURE__ */ Ve(() => /* @__PURE__ */ p("span", { class: "badge text-bg-primary px-2" }, "24K", -1)), po = { class: "col-7 d-flex flex-column align-items-end" }, vo = /* @__PURE__ */ Ve(() => /* @__PURE__ */ p("div", null, "音频时长，请以生成后的为准", -1)), mo = { class: "mt-1" }, ho = /* @__PURE__ */ Ve(() => /* @__PURE__ */ p("span", null, "/", -1)), _o = /* @__PURE__ */ mn('<div class="role-list mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-2 column-gap-3" data-v-00254d87><div class="rounded-pill px-1 border" data-v-00254d87>女青年(默认)</div><div class="rounded-pill px-1" data-v-00254d87>男孩儿</div><div class="rounded-pill px-1" data-v-00254d87>男青少年</div><div class="rounded-pill px-1" data-v-00254d87>男中年</div><div class="rounded-pill px-1" data-v-00254d87>男孩儿</div><div class="rounded-pill px-1" data-v-00254d87>男青少年</div><div class="rounded-pill px-1" data-v-00254d87>男中年</div><div class="rounded-pill px-1" data-v-00254d87>男孩儿</div><div class="rounded-pill px-1" data-v-00254d87>男孩儿</div><div class="rounded-pill px-1" data-v-00254d87>男中年</div><div class="rounded-pill px-1" data-v-00254d87>男青少年</div><div class="rounded-pill px-1" data-v-00254d87>男青少年</div><div class="rounded-pill px-1" data-v-00254d87>男中年</div></div>', 1), go = { class: "audio-mood mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-1 column-gap-2" }, yo = /* @__PURE__ */ Ve(() => /* @__PURE__ */ p("div", { class: "my-3" }, [
  /* @__PURE__ */ p("span", { class: "border rounded-pill p-1" }, "配音师详情")
], -1)), bo = { class: "slider-box" }, xo = { class: "slider-box" }, wo = /* @__PURE__ */ mn('<ul class="d-flex flex-row gap-3 my-3" data-v-00254d87><li class="rounded-pill px-1 border" data-v-00254d87>常用</li><li class="rounded-pill px-1" data-v-00254d87>已购</li><li class="rounded-pill px-1" data-v-00254d87>收藏</li><li class="rounded-pill px-1" data-v-00254d87>我的</li></ul>', 1), Eo = { class: "d-flex flex-row flex-wrap row-gap-2 column-gap-3 mb-3" }, $o = /* @__PURE__ */ D({
  __name: "slider-panle",
  setup(e) {
    const n = g("https://img.sdaxia.top/upload/4314c841777e4d20901cd5d04a28e91a.png"), t = g(10), l = g(0), s = g([0, 2]), r = g(0), o = g([-10, 10]), a = g(0), c = Y(() => un(t.value)), f = Y(() => un(l.value)), h = Tt({
      0: "0",
      0.1: "0.1",
      0.2: "0.2",
      0.3: "0.3",
      0.4: "0.4",
      0.5: "0.5",
      0.6: "0.6",
      0.7: "0.7",
      0.8: "0.8",
      0.9: "0.9",
      1: "1.0",
      1.1: "1.1",
      1.2: "1.2",
      1.4: "1.4",
      1.5: "1.5",
      1.75: "1.75",
      2: "2.0"
    }), m = Tt({
      0: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      "-1": "-1",
      "-2": "-2",
      "-3": "-3",
      "-4": "-4",
      "-5": "-5",
      "-6": "-6",
      "-7": "-7",
      "-8": "-8",
      "-9": "-9",
      "-10": "-10"
    });
    return (_, y) => (T(), P("div", so, [
      p("div", ro, [
        p("div", oo, [
          p("img", {
            src: n.value,
            class: "rounded-circle",
            style: { height: "50px" }
          }, null, 8, io),
          p("div", ao, [
            uo,
            p("div", co, [
              i(b(hn), { class: "fs-6" }, {
                default: v(() => [
                  i(b(_l))
                ]),
                _: 1
              }),
              fo
            ])
          ])
        ]),
        p("div", po, [
          vo,
          p("div", mo, [
            p("span", null, W(f.value), 1),
            ho,
            p("span", null, W(c.value), 1)
          ]),
          i(b(nt), {
            max: t.value,
            modelValue: l.value,
            "onUpdate:modelValue": y[0] || (y[0] = (d) => l.value = d),
            size: "small"
          }, null, 8, ["max", "modelValue"])
        ])
      ]),
      _o,
      p("ul", go, [
        p("li", null, [
          i(B)
        ]),
        p("li", null, [
          i(B)
        ]),
        p("li", null, [
          i(B)
        ]),
        p("li", null, [
          i(B)
        ]),
        p("li", null, [
          i(B)
        ]),
        p("li", null, [
          i(B)
        ])
      ]),
      yo,
      p("div", bo, [
        p("div", null, [
          p("span", null, " 语速：" + W(r.value) + "x ", 1)
        ]),
        i(b(nt), {
          modelValue: r.value,
          "onUpdate:modelValue": y[1] || (y[1] = (d) => r.value = d),
          min: s.value[0],
          max: s.value[1],
          step: 0.05,
          marks: h
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      p("div", xo, [
        p("div", null, [
          p("span", null, " 语调：" + W(a.value), 1)
        ]),
        i(b(nt), {
          modelValue: a.value,
          "onUpdate:modelValue": y[2] || (y[2] = (d) => a.value = d),
          min: o.value[0],
          max: o.value[1],
          step: 0.2,
          marks: m
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      p("div", null, [
        wo,
        p("ul", Eo, [
          p("li", null, [
            i(B)
          ]),
          p("li", null, [
            i(B)
          ]),
          p("li", null, [
            i(B)
          ]),
          p("li", null, [
            i(B)
          ]),
          p("li", null, [
            i(B)
          ]),
          p("li", null, [
            i(B)
          ]),
          p("li", null, [
            i(B)
          ]),
          p("li", null, [
            i(B)
          ]),
          p("li", null, [
            i(B)
          ]),
          p("li", null, [
            i(B)
          ])
        ])
      ])
    ]));
  }
});
const Co = /* @__PURE__ */ G($o, [["__scopeId", "data-v-00254d87"]]), So = (e) => ($e("data-v-2d1e47a4"), e = e(), Ce(), e), Oo = { class: "box ms-2" }, Io = { class: "try-play-header text-center d-flex flex-row justify-content-between" }, ko = { class: "try-play-body d-flex flex-row" }, To = { class: "try-play-left w-50 border-right border-secondary" }, Ro = { class: "pe-1" }, Do = { class: "type-list d-flex flex-row border-bottom border-secondary" }, Mo = /* @__PURE__ */ So(() => /* @__PURE__ */ p("div", { class: "py-1 border-top border-secondary" }, null, -1)), Vo = { class: "try-play-right w-50 border-start rounded border-top border-secondary overflow-x-hidden overflow-y-auto scrollbar-none" }, Po = /* @__PURE__ */ D({
  __name: "try-play-panle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: n }) {
    const t = e, l = g(), s = g(""), r = g(), o = g();
    Ee(() => {
      window.addEventListener("keydown", a);
    }), bt(() => {
      window.addEventListener("keydown", a);
    }), ue(
      () => t.visible,
      (_) => {
        _ && setTimeout(() => {
          m();
        }, 200);
      }
    );
    function a(_) {
      _.code === "Escape" && t.visible && h();
    }
    const { position: c } = Ge(o, {
      initialValue: { x: 100, y: 100 }
    }), { style: f } = Et(r, c);
    function h() {
      n("update:visible", !1);
    }
    function m() {
      var _;
      (_ = l.value) == null || _.focus();
    }
    return (_, y) => ye((T(), P("div", {
      ref_key: "boxRef",
      ref: r,
      style: He([b(f), { position: "fixed" }]),
      class: "try-play user-select-none card z-3 shadow"
    }, [
      p("div", Oo, [
        p("div", Io, [
          p("div", {
            ref_key: "handleRef",
            ref: o,
            class: "col-11 try-play-move"
          }, null, 512),
          p("div", {
            onClick: h,
            class: "col-1 try-play-menu-close"
          }, [
            i(b(hn), { color: "white" }, {
              default: v(() => [
                i(b(gl))
              ]),
              _: 1
            })
          ])
        ]),
        p("div", ko, [
          p("div", To, [
            p("div", Ro, [
              i(b(Ue), {
                onSubmit: y[1] || (y[1] = q(() => {
                }, ["prevent"]))
              }, {
                default: v(() => [
                  i(b(We), {
                    "input-style": {},
                    ref_key: "searchInputRef",
                    ref: l,
                    modelValue: s.value,
                    "onUpdate:modelValue": y[0] || (y[0] = (d) => s.value = d),
                    placeholder: "输入名称搜索"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            p("div", Do, [
              i(I, null, {
                default: v(() => [
                  $("热榜")
                ]),
                _: 1
              }),
              i(I, null, {
                default: v(() => [
                  $("SVIP")
                ]),
                _: 1
              }),
              i(I, null, {
                default: v(() => [
                  $("付费")
                ]),
                _: 1
              })
            ]),
            i(lo),
            Mo,
            i(Jr)
          ]),
          p("div", Vo, [
            i(Co)
          ])
        ])
      ])
    ], 4)), [
      [be, _.visible]
    ]);
  }
});
const Lo = /* @__PURE__ */ G(Po, [["__scopeId", "data-v-2d1e47a4"]]), qn = /* @__PURE__ */ D({
  __name: "try-play",
  setup(e) {
    const n = g(!0);
    function t(l) {
      l || (n.value = !0);
    }
    return (l, s) => (T(), z(yt, { to: "body" }, [
      i(zr, {
        visible: n.value,
        "onUpdate:visible": s[0] || (s[0] = (r) => n.value = r)
      }, null, 8, ["visible"]),
      i(Lo, {
        visible: !n.value,
        "onUpdate:visible": t
      }, null, 8, ["visible"])
    ]));
  }
});
const Ao = {
  install: (e) => {
    e.component("SpeakerMenu", Rn), e.component("ContinuousMenu", Dn), e.component("ReadMenu", Vn), e.component("DigitalMenu", Pn), e.component("AliasMenu", An), e.component("EnglishMenu", Nn), e.component("ChangespeedMenu", Bn), e.component("RhythmMenu", jn), e.component("SpecialMenu", Fn), e.component("MuteMenu", Hn), e.component("BgmMenu", Un), e.component("SensitiveMenu", Wn), e.component("ManagementMenu", zn), e.component("ConversionMenu", Gn), e.component("TryPlay", qn);
  }
};
var _t = { exports: {} }, gt = { exports: {} };
(function(e, n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.ParsingError = void 0;
  class t extends Error {
    constructor(S, k) {
      super(S), this.cause = k;
    }
  }
  n.ParsingError = t;
  let l;
  function s() {
    return c(!1) || _() || m() || h();
  }
  function r() {
    return u(/\s*/), c(!0) || m() || f() || a(!1);
  }
  function o() {
    const w = a(!0), S = [];
    let k, E = r();
    for (; E; ) {
      if (E.node.type === "Element") {
        if (k)
          throw new Error("Found multiple root nodes");
        k = E.node;
      }
      E.excluded || S.push(E.node), E = r();
    }
    if (!k)
      throw new t("Failed to parse XML", "Root Element not found");
    if (l.xml.length !== 0)
      throw new t("Failed to parse XML", "Not Well-Formed XML");
    return {
      declaration: w ? w.node : null,
      root: k,
      children: S
    };
  }
  function a(w) {
    const S = u(w ? /^<\?(xml)\s*/ : /^<\?([\w-:.]+)\s*/);
    if (!S)
      return;
    const k = {
      name: S[1],
      type: "ProcessingInstruction",
      attributes: {}
    };
    for (; !(x() || C("?>")); ) {
      const E = y();
      if (E)
        k.attributes[E.name] = E.value;
      else
        return;
    }
    return u(/\?>/), {
      excluded: w ? !1 : l.options.filter(k) === !1,
      node: k
    };
  }
  function c(w) {
    const S = u(/^<([^?!</>\s]+)\s*/);
    if (!S)
      return;
    const k = {
      type: "Element",
      name: S[1],
      attributes: {},
      children: []
    }, E = w ? !1 : l.options.filter(k) === !1;
    for (; !(x() || C(">") || C("?>") || C("/>")); ) {
      const A = y();
      if (A)
        k.attributes[A.name] = A.value;
      else
        return;
    }
    if (u(/^\s*\/>/))
      return k.children = null, {
        excluded: E,
        node: k
      };
    u(/\??>/);
    let R = s();
    for (; R; )
      R.excluded || k.children.push(R.node), R = s();
    if (l.options.strictMode) {
      const A = `</${k.name}>`;
      if (l.xml.startsWith(A))
        l.xml = l.xml.slice(A.length);
      else
        throw new t("Failed to parse XML", `Closing tag not matching "${A}"`);
    } else
      u(/^<\/\s*[\w-:.\u00C0-\u00FF]+>/);
    return {
      excluded: E,
      node: k
    };
  }
  function f() {
    const w = u(/^<!DOCTYPE\s+\S+\s+SYSTEM[^>]*>/) || u(/^<!DOCTYPE\s+\S+\s+PUBLIC[^>]*>/) || u(/^<!DOCTYPE\s+\S+\s*\[[^\]]*]>/) || u(/^<!DOCTYPE\s+\S+\s*>/);
    if (w) {
      const S = {
        type: "DocumentType",
        content: w[0]
      };
      return {
        excluded: l.options.filter(S) === !1,
        node: S
      };
    }
  }
  function h() {
    if (l.xml.startsWith("<![CDATA[")) {
      const w = l.xml.indexOf("]]>");
      if (w > -1) {
        const S = w + 3, k = {
          type: "CDATA",
          content: l.xml.substring(0, S)
        };
        return l.xml = l.xml.slice(S), {
          excluded: l.options.filter(k) === !1,
          node: k
        };
      }
    }
  }
  function m() {
    const w = u(/^<!--[\s\S]*?-->/);
    if (w) {
      const S = {
        type: "Comment",
        content: w[0]
      };
      return {
        excluded: l.options.filter(S) === !1,
        node: S
      };
    }
  }
  function _() {
    const w = u(/^([^<]+)/);
    if (w) {
      const S = {
        type: "Text",
        content: w[1]
      };
      return {
        excluded: l.options.filter(S) === !1,
        node: S
      };
    }
  }
  function y() {
    const w = u(/([^=]+)\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)\s*/);
    if (w)
      return {
        name: w[1].trim(),
        value: d(w[2].trim())
      };
  }
  function d(w) {
    return w.replace(/^['"]|['"]$/g, "");
  }
  function u(w) {
    const S = l.xml.match(w);
    if (S)
      return l.xml = l.xml.slice(S[0].length), S;
  }
  function x() {
    return l.xml.length === 0;
  }
  function C(w) {
    return l.xml.indexOf(w) === 0;
  }
  function O(w, S = {}) {
    w = w.trim();
    const k = S.filter || (() => !0);
    return l = {
      xml: w,
      options: Object.assign(Object.assign({}, S), { filter: k, strictMode: S.strictMode === !0 })
    }, o();
  }
  e.exports = O, n.default = O;
})(gt, gt.exports);
var No = gt.exports;
(function(e, n) {
  var t = _e && _e.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(n, "__esModule", { value: !0 });
  const l = t(No);
  function s(d) {
    if (!d.options.indentation && !d.options.lineSeparator)
      return;
    d.content += d.options.lineSeparator;
    let u;
    for (u = 0; u < d.level; u++)
      d.content += d.options.indentation;
  }
  function r(d) {
    d.content = d.content.replace(/ +$/, "");
    let u;
    for (u = 0; u < d.level; u++)
      d.content += d.options.indentation;
  }
  function o(d, u) {
    d.content += u;
  }
  function a(d, u, x) {
    if (typeof d.content == "string")
      c(d.content, u, x);
    else if (d.type === "Element")
      h(d, u, x);
    else if (d.type === "ProcessingInstruction")
      _(d, u);
    else
      throw new Error("Unknown node type: " + d.type);
  }
  function c(d, u, x) {
    if (!x) {
      const C = d.trim();
      (u.options.lineSeparator || C.length === 0) && (d = C);
    }
    d.length > 0 && (!x && u.content.length > 0 && s(u), o(u, d));
  }
  function f(d, u) {
    const x = "/" + d.join("/"), C = d[d.length - 1];
    return u.includes(C) || u.includes(x);
  }
  function h(d, u, x) {
    if (u.path.push(d.name), !x && u.content.length > 0 && s(u), o(u, "<" + d.name), m(u, d.attributes), d.children === null || u.options.forceSelfClosingEmptyTag && d.children.length === 0) {
      const C = u.options.whiteSpaceAtEndOfSelfclosingTag ? " />" : "/>";
      o(u, C);
    } else if (d.children.length === 0)
      o(u, "></" + d.name + ">");
    else {
      const C = d.children;
      o(u, ">"), u.level++;
      let O = d.attributes["xml:space"] === "preserve", w = !1;
      if (!O && u.options.ignoredPaths && (w = f(u.path, u.options.ignoredPaths), O = w), !O && u.options.collapseContent) {
        let S = !1, k = !1, E = !1;
        C.forEach(function(R, A) {
          R.type === "Text" ? (R.content.includes(`
`) ? (k = !0, R.content = R.content.trim()) : (A === 0 || A === C.length - 1) && R.content.trim().length === 0 && (R.content = ""), R.content.trim().length > 0 && (S = !0)) : R.type === "CDATA" ? S = !0 : E = !0;
        }), S && (!E || !k) && (O = !0);
      }
      C.forEach(function(S) {
        a(S, u, x || O);
      }), u.level--, !x && !O && s(u), w && r(u), o(u, "</" + d.name + ">");
    }
    u.path.pop();
  }
  function m(d, u) {
    Object.keys(u).forEach(function(x) {
      const C = u[x].replace(/"/g, "&quot;");
      o(d, " " + x + '="' + C + '"');
    });
  }
  function _(d, u) {
    u.content.length > 0 && s(u), o(u, "<?" + d.name), m(u, d.attributes), o(u, "?>");
  }
  function y(d, u = {}) {
    u.indentation = "indentation" in u ? u.indentation : "    ", u.collapseContent = u.collapseContent === !0, u.lineSeparator = "lineSeparator" in u ? u.lineSeparator : `\r
`, u.whiteSpaceAtEndOfSelfclosingTag = u.whiteSpaceAtEndOfSelfclosingTag === !0, u.throwOnFailure = u.throwOnFailure !== !1;
    try {
      const x = (0, l.default)(d, { filter: u.filter, strictMode: u.strictMode }), C = { content: "", level: 0, options: u, path: [] };
      return x.declaration && _(x.declaration, C), x.children.forEach(function(O) {
        a(O, C, !1);
      }), u.lineSeparator ? C.content.replace(/\r\n/g, `
`).replace(/\n/g, u.lineSeparator) : C.content;
    } catch (x) {
      if (u.throwOnFailure)
        throw x;
      return d;
    }
  }
  y.minify = (d, u = {}) => y(d, Object.assign(Object.assign({}, u), { indentation: "", lineSeparator: "" })), e.exports = y, n.default = y;
})(_t, _t.exports);
var Bo = _t.exports;
const jo = /* @__PURE__ */ $t(Bo), he = (e) => ($e("data-v-71fe7760"), e = e(), Ce(), e), Fo = { class: "editor-title d-flex flex-row align-item-center justify-content-between" }, Ho = { class: "title-wrapper d-flex flex-column justify-content-center ps-3" }, Uo = /* @__PURE__ */ he(() => /* @__PURE__ */ p("div", { class: "title-author pb-1" }, "SSML编辑器", -1)), Wo = { class: "author d-flex flex-row align-items-center justify-content-start" }, zo = /* @__PURE__ */ he(() => /* @__PURE__ */ p("div", null, "已保存", -1)), Go = /* @__PURE__ */ he(() => /* @__PURE__ */ p("div", null, "|", -1)), qo = /* @__PURE__ */ he(() => /* @__PURE__ */ p("span", { class: "iconfont icon-play font-size-12 p-1" }, null, -1)), Yo = /* @__PURE__ */ he(() => /* @__PURE__ */ p("div", { class: "d-inline-block" }, null, -1)), Xo = { class: "operation-wrapper d-flex flex-row justify-content-center align-items-center" }, Ko = /* @__PURE__ */ he(() => /* @__PURE__ */ p("div", { class: "menu-divider" }, null, -1)), Qo = /* @__PURE__ */ he(() => /* @__PURE__ */ p("div", { class: "px-1" }, null, -1)), Jo = { class: "ssml-code" }, Zo = { class: "dialog-footer" }, ei = /* @__PURE__ */ D({
  __name: "editor-title",
  props: {
    characterTotal: {},
    characterMax: {},
    bgm: {}
  },
  setup(e) {
    const n = me(ie.EDITOR), t = g(!1), l = g(""), s = Y(() => jo(l.value, {
      indentation: "    ",
      filter: (a) => a.type !== "Comment",
      collapseContent: !1,
      lineSeparator: `
`
    })), r = () => {
      n && (l.value = n.value.getHtml(), t.value = !0);
    }, o = () => {
      n == null || n.value.emit(pe.REMOVE_BGM);
    };
    return (a, c) => (T(), P(re, null, [
      p("div", Fo, [
        p("div", Ho, [
          Uo,
          p("div", Wo, [
            zo,
            Go,
            p("div", null, W(a.characterTotal) + "/" + W(a.characterMax) + "字", 1),
            a.bgm ? (T(), z(b(ae), {
              key: 0,
              class: "bgm-txt ms-2",
              closable: "",
              size: "small",
              onClick: c[0] || (c[0] = () => a.bgm && a.bgm.value && b(kn)(a.bgm.value)),
              onClose: o
            }, {
              default: v(() => [
                qo,
                Yo,
                p("span", null, W(a.bgm.label), 1)
              ]),
              _: 1
            })) : cl("", !0)
          ])
        ]),
        p("div", Xo, [
          i(b(ee), {
            type: "primary",
            icon: b(yl),
            disabled: ""
          }, {
            default: v(() => [
              $("分享")
            ]),
            _: 1
          }, 8, ["icon"]),
          Ko,
          i(b(ee), {
            type: "primary",
            onClick: r
          }, {
            default: v(() => [
              $("查看SSML")
            ]),
            _: 1
          }),
          i(b(ee), { disabled: "" }, {
            default: v(() => [
              $("下载音频")
            ]),
            _: 1
          }),
          i(b(ee), { disabled: "" }, {
            default: v(() => [
              $("下载视频")
            ]),
            _: 1
          }),
          i(b(ee), { disabled: "" }, {
            default: v(() => [
              $("下载字幕")
            ]),
            _: 1
          }),
          i(b(ee), { disabled: "" }, {
            default: v(() => [
              $("声音转换")
            ]),
            _: 1
          }),
          Qo
        ])
      ]),
      i(b(vl), {
        modelValue: t.value,
        "onUpdate:modelValue": c[2] || (c[2] = (f) => t.value = f),
        title: "查看SSML",
        width: "50%"
      }, {
        footer: v(() => [
          p("span", Zo, [
            i(b(ee), {
              type: "primary",
              onClick: c[1] || (c[1] = (f) => t.value = !1)
            }, {
              default: v(() => [
                $(" 确定 ")
              ]),
              _: 1
            })
          ])
        ]),
        default: v(() => [
          p("pre", Jo, W(s.value), 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
});
const ti = /* @__PURE__ */ G(ei, [["__scopeId", "data-v-71fe7760"]]), ni = (e) => {
  const { isInline: n, isVoid: t } = e, l = e;
  return l.isInline = (s) => N.getNodeType(s) === "ssml-alias" ? !0 : n(s), l.isVoid = (s) => N.getNodeType(s) === "ssml-alias" ? !0 : t(s), l;
};
function cn(e, n, t, l, s) {
  const r = n === void 0 ? void 0 : n.key;
  return { sel: e, data: n, children: t, text: l, elm: s, key: r };
}
const dn = Array.isArray;
function ct(e) {
  return typeof e == "string" || typeof e == "number" || e instanceof String || e instanceof Number;
}
function Yn(e, n, t) {
  if (e.ns = "http://www.w3.org/2000/svg", t !== "foreignObject" && n !== void 0)
    for (let l = 0; l < n.length; ++l) {
      const s = n[l];
      if (typeof s == "string")
        continue;
      const r = s.data;
      r !== void 0 && Yn(r, s.children, s.sel);
    }
}
function V(e, n, t) {
  let l = {}, s, r, o;
  if (t !== void 0 ? (n !== null && (l = n), dn(t) ? s = t : ct(t) ? r = t.toString() : t && t.sel && (s = [t])) : n != null && (dn(n) ? s = n : ct(n) ? r = n.toString() : n && n.sel ? s = [n] : l = n), s !== void 0)
    for (o = 0; o < s.length; ++o)
      ct(s[o]) && (s[o] = cn(void 0, void 0, void 0, s[o], void 0));
  return e[0] === "s" && e[1] === "v" && e[2] === "g" && (e.length === 3 || e[3] === "." || e[3] === "#") && Yn(l, s, e), cn(e, l, s, r, void 0);
}
var Xn = "Expected a function", fn = 0 / 0, li = "[object Symbol]", si = /^\s+|\s+$/g, ri = /^[-+]0x[0-9a-f]+$/i, oi = /^0b[01]+$/i, ii = /^0o[0-7]+$/i, ai = parseInt, ui = typeof _e == "object" && _e && _e.Object === Object && _e, ci = typeof self == "object" && self && self.Object === Object && self, di = ui || ci || Function("return this")(), fi = Object.prototype, pi = fi.toString, vi = Math.max, mi = Math.min, dt = function() {
  return di.Date.now();
};
function hi(e, n, t) {
  var l, s, r, o, a, c, f = 0, h = !1, m = !1, _ = !0;
  if (typeof e != "function")
    throw new TypeError(Xn);
  n = pn(n) || 0, Fe(t) && (h = !!t.leading, m = "maxWait" in t, r = m ? vi(pn(t.maxWait) || 0, n) : r, _ = "trailing" in t ? !!t.trailing : _);
  function y(E) {
    var R = l, A = s;
    return l = s = void 0, f = E, o = e.apply(A, R), o;
  }
  function d(E) {
    return f = E, a = setTimeout(C, n), h ? y(E) : o;
  }
  function u(E) {
    var R = E - c, A = E - f, kt = n - R;
    return m ? mi(kt, r - A) : kt;
  }
  function x(E) {
    var R = E - c, A = E - f;
    return c === void 0 || R >= n || R < 0 || m && A >= r;
  }
  function C() {
    var E = dt();
    if (x(E))
      return O(E);
    a = setTimeout(C, u(E));
  }
  function O(E) {
    return a = void 0, _ && l ? y(E) : (l = s = void 0, o);
  }
  function w() {
    a !== void 0 && clearTimeout(a), f = 0, l = c = s = a = void 0;
  }
  function S() {
    return a === void 0 ? o : O(dt());
  }
  function k() {
    var E = dt(), R = x(E);
    if (l = arguments, s = this, c = E, R) {
      if (a === void 0)
        return d(c);
      if (m)
        return a = setTimeout(C, n), y(c);
    }
    return a === void 0 && (a = setTimeout(C, n)), o;
  }
  return k.cancel = w, k.flush = S, k;
}
function _i(e, n, t) {
  var l = !0, s = !0;
  if (typeof e != "function")
    throw new TypeError(Xn);
  return Fe(t) && (l = "leading" in t ? !!t.leading : l, s = "trailing" in t ? !!t.trailing : s), hi(e, n, {
    leading: l,
    maxWait: n,
    trailing: s
  });
}
function Fe(e) {
  var n = typeof e;
  return !!e && (n == "object" || n == "function");
}
function gi(e) {
  return !!e && typeof e == "object";
}
function yi(e) {
  return typeof e == "symbol" || gi(e) && pi.call(e) == li;
}
function pn(e) {
  if (typeof e == "number")
    return e;
  if (yi(e))
    return fn;
  if (Fe(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Fe(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(si, "");
  var t = oi.test(e);
  return t || ii.test(e) ? ai(e.slice(2), t ? 2 : 8) : ri.test(e) ? fn : +e;
}
var bi = _i;
const De = /* @__PURE__ */ $t(bi), we = { style: { userSelect: "none" }, contentEditable: !1 };
function Ie(e, n) {
  return V("span.ssml-wrap", { ...we }, [
    V(`span.tag.bg-color.${e.bgColor}`, [
      V("span.tag-remark", { attrs: { "data-tag-remark": e.remark } }),
      V(
        "span.btn-close",
        {
          on: {
            click: De((t) => {
              t.preventDefault(), n();
            })
          }
        },
        V("span.iconfont.icon-roundclosefill")
      )
    ]),
    V(`span.boundary.start.ft-color.${e.bgColor}`),
    V("span", e.plain),
    V(`span.boundary.end.ft-color.${e.bgColor}`)
  ]);
}
function xi(e, n, t) {
  return V("span.ssml-wrap", [
    V(`span.tag.bg-color.${e.bgColor}`, { ...we }, [
      V("span.tag-remark", { attrs: { "data-tag-remark": e.remark } }),
      V(
        "span.btn-close",
        {
          on: {
            click: De((l) => {
              l.preventDefault(), t();
            })
          }
        },
        V("span.iconfont.icon-roundclosefill", null)
      )
    ]),
    V(`span.boundary.start.ft-color.${e.bgColor}`, { ...we }),
    V("span", n),
    V(`span.boundary.end.ft-color.${e.bgColor}`, { ...we })
  ]);
}
function Kn(e, n) {
  return V("span.ssml-wrap", { ...we }, [
    V(`span.tag.bg-color.${e.bgColor}`, [
      V("span.tag-remark", { attrs: { "data-tag-remark": e.remark } }),
      V(
        "span.btn-close",
        {
          on: {
            click: De((t) => {
              t.preventDefault(), n();
            })
          }
        },
        V("span.iconfont.icon-roundclosefill", null)
      )
    ])
  ]);
}
function wi(e, n) {
  return V("span.ssml-wrap", { ...we }, [
    V(`span.tag.bg-color.${e.bgColor}`, [
      V(
        "span.btn-text",
        {
          on: {
            click: De((t) => {
              t.preventDefault(), n == null || n.play();
            })
          }
        },
        V("span.iconfont.icon-play", null)
      ),
      V("span.tag-remark", { attrs: { "data-tag-remark": e.remark } }),
      V(
        "span.btn-text",
        {
          on: {
            click: De((t) => {
              t.preventDefault(), n == null || n.close();
            })
          }
        },
        V("span.iconfont.icon-roundclosefill", null)
      )
    ])
  ]);
}
const Ei = {
  type: "ssml-alias",
  renderElem: (e, n, t) => {
    const l = e;
    return Ie(
      { ...l, plain: l.value },
      () => t.emit("ssml-alias-close", t, l)
    );
  }
}, $i = {
  type: "ssml-alias",
  elemToHtml: (e) => {
    const { alias: n, value: t } = e;
    return `<sub alias="${n}">${t}</sub>`;
  }
}, Ci = {
  editorPlugin: ni,
  renderElems: [Ei],
  elemsToHtml: [$i]
}, Si = (e) => {
  const { isInline: n, isVoid: t } = e, l = e;
  return l.isInline = (s) => N.getNodeType(s) === "ssml-changespeed" ? !0 : n(s), l.isVoid = (s) => N.getNodeType(s) === "ssml-changespeed" ? !1 : t(s), l;
}, Oi = {
  type: "ssml-changespeed",
  renderElem: (e, n, t) => {
    const l = e;
    return xi(
      l,
      n,
      () => t.emit("ssml-changespeed-close", t, l)
    );
  }
}, Ii = {
  type: "ssml-changespeed",
  elemToHtml: (e, n) => {
    const { rate: t } = e;
    return `<prosody rate="${t}">${n}</prosody>`;
  }
}, ki = {
  editorPlugin: Si,
  renderElems: [Oi],
  elemsToHtml: [Ii]
}, Ti = (e) => {
  const { isInline: n, isVoid: t } = e, l = e;
  return l.isInline = (s) => N.getNodeType(s) === "ssml-continuous" ? !0 : n(s), l.isVoid = (s) => N.getNodeType(s) === "ssml-continuous" ? !0 : t(s), l;
}, Ri = {
  type: "ssml-continuous",
  renderElem: (e, n, t) => {
    const l = e;
    return Ie(
      { ...l, plain: l.value },
      () => t.emit("ssml-continuous-close", t, l)
    );
  }
}, Di = {
  type: "ssml-continuous",
  elemToHtml: (e) => `<w>${e.value}</w>`
}, Mi = {
  editorPlugin: Ti,
  renderElems: [Ri],
  elemsToHtml: [Di]
}, Vi = (e) => {
  const { isInline: n, isVoid: t } = e, l = e;
  return l.isInline = (s) => N.getNodeType(s) === "ssml-digital" ? !0 : n(s), l.isVoid = (s) => N.getNodeType(s) === "ssml-digital" ? !0 : t(s), l;
}, Pi = {
  type: "ssml-digital",
  renderElem: (e, n, t) => {
    const l = e;
    return Ie(
      { ...l, plain: l.value },
      () => t.emit("ssml-digital-close", t, l)
    );
  }
}, Li = {
  type: "ssml-digital",
  elemToHtml: (e) => {
    const { interpretAs: n, value: t } = e;
    return `<say-as interpret-as="${n}">${t}</say-as>`;
  }
}, Ai = {
  editorPlugin: Vi,
  renderElems: [Pi],
  elemsToHtml: [Li]
}, Ni = (e) => {
  const { isInline: n, isVoid: t } = e, l = e;
  return l.isInline = (s) => N.getNodeType(s) === "ssml-english" ? !0 : n(s), l.isVoid = (s) => N.getNodeType(s) === "ssml-english" ? !0 : t(s), l;
}, Bi = {
  type: "ssml-english",
  renderElem: (e, n, t) => {
    const l = e;
    return Ie(
      { ...l, plain: l.word },
      () => t.emit("ssml-english-close", t, l)
    );
  }
}, ji = {
  type: "ssml-english",
  elemToHtml: (e) => {
    const { phoneme: n, word: t } = e;
    return `<p ph="${n}">${t}</p>`;
  }
}, Fi = {
  editorPlugin: Ni,
  renderElems: [Bi],
  elemsToHtml: [ji]
}, Hi = (e) => {
  const { isInline: n, isVoid: t } = e, l = e;
  return l.isInline = (s) => N.getNodeType(s) === "ssml-mute" ? !0 : n(s), l.isVoid = (s) => N.getNodeType(s) === "ssml-mute" ? !0 : t(s), l;
}, Ui = {
  type: "ssml-mute",
  renderElem: (e, n, t) => {
    const l = e;
    return Kn(l, () => t.emit("ssml-mute-close", t, l));
  }
}, Wi = {
  type: "ssml-mute",
  elemToHtml: (e) => {
    const { time: n } = e;
    return `<break time="${n}" />`;
  }
}, zi = {
  editorPlugin: Hi,
  renderElems: [Ui],
  elemsToHtml: [Wi]
}, Gi = (e) => {
  const { isInline: n, isVoid: t } = e, l = e;
  return l.isInline = (s) => N.getNodeType(s) === "ssml-read" ? !0 : n(s), l.isVoid = (s) => N.getNodeType(s) === "ssml-read" ? !0 : t(s), l;
}, qi = {
  type: "ssml-read",
  renderElem: (e, n, t) => {
    const l = e;
    return Ie({ ...l, plain: l.value }, () => {
      t.emit("ssml-read-close", t, l);
    });
  }
}, Yi = {
  type: "ssml-read",
  elemToHtml: (e) => {
    const { phoneme: n, value: t } = e;
    return `<w phoneme="${n}">${t}</w>`;
  }
}, Xi = {
  editorPlugin: Gi,
  renderElems: [qi],
  elemsToHtml: [Yi]
}, Ki = (e) => {
  const { isInline: n, isVoid: t } = e, l = e;
  return l.isInline = (s) => N.getNodeType(s) === "ssml-rhythm" ? !0 : n(s), l.isVoid = (s) => N.getNodeType(s) === "ssml-rhythm" ? !0 : t(s), l;
}, Qi = {
  type: "ssml-rhythm",
  renderElem: (e, n, t) => {
    const l = e;
    return Kn(l, () => t.emit("ssml-rhythm-close", t, l));
  }
}, Ji = {
  type: "ssml-rhythm",
  elemToHtml: (e) => {
    const { time: n } = e;
    return `<break time="${n}" />`;
  }
}, Zi = {
  editorPlugin: Ki,
  renderElems: [Qi],
  elemsToHtml: [Ji]
}, ea = (e) => {
  const { isInline: n, isVoid: t } = e, l = e;
  return l.isInline = (s) => N.getNodeType(s) === "ssml-speaker" ? !0 : n(s), l.isVoid = (s) => N.getNodeType(s) === "ssml-speaker" ? !0 : t(s), l;
}, ta = {
  type: "ssml-speaker",
  renderElem: (e, n, t) => {
    const l = e;
    return Ie(
      { ...l, plain: l.word },
      () => t.emit("ssml-speaker-close", t, l)
    );
  }
}, na = {
  type: "ssml-speaker",
  elemToHtml: (e) => {
    const { phoneme: n, word: t } = e;
    return `<p ph="${n}">${t}</p>`;
  }
}, la = {
  editorPlugin: ea,
  renderElems: [ta],
  elemsToHtml: [na]
}, sa = (e) => {
  const { isInline: n, isVoid: t } = e, l = e;
  return l.isInline = (s) => N.getNodeType(s) === "ssml-special" ? !0 : n(s), l.isVoid = (s) => N.getNodeType(s) === "ssml-special" ? !0 : t(s), l;
}, ra = {
  type: "ssml-special",
  renderElem: (e, n, t) => {
    const l = e;
    return wi(l, {
      close: () => t.emit("ssml-special-close", t, l),
      play: () => t.emit("ssml-special-play", t, l)
    });
  }
}, oa = {
  type: "ssml-special",
  elemToHtml: (e) => {
    const { src: n } = e;
    return `<audio src="${n}" />`;
  }
}, ia = {
  editorPlugin: sa,
  renderElems: [ra],
  elemsToHtml: [oa]
}, aa = (e) => {
  const { getHtml: n } = e, t = e, l = {
    volume: "",
    pitch: "",
    rate: "",
    voice: "",
    bgm: "",
    bgmRemark: "",
    backgroundMusicVolume: ""
  };
  return e.on(pe.UPDATE_SPEAK, (s) => {
    Object.assign(l, s);
  }), e.on(pe.UPDATE_BGM, (s) => {
    l.bgm = s.value, l.bgmRemark = s.label;
  }), e.on(pe.REMOVE_BGM, () => {
    l.bgm = void 0, l.bgmRemark = void 0;
  }), t.getHtml = () => {
    const s = ["bgmRemark"], r = [];
    for (const o in l)
      if (Object.prototype.hasOwnProperty.call(l, o)) {
        const a = l[o];
        a && !s.includes(o) && r.push(`${o}=${a}`);
      }
    return `<speak ${r.join(" ")}>${n()}</speak>`;
  }, t;
}, ua = {
  editorPlugin: aa
}, ca = (e) => {
  const { deleteBackward: n, deleteForward: t, insertBreak: l, apply: s, normalizeNode: r } = e, o = e;
  return o.deleteBackward = (a) => {
    n(a);
  }, o.deleteForward = (a) => {
    t(a);
  }, o.insertBreak = () => {
    l();
  }, o.normalizeNode = (a) => {
    r(a);
  }, o.apply = (a) => {
    s(a);
  }, o;
}, da = {
  editorPlugin: ca
};
function fa(e) {
  e.on("ssml-alias-close", Ln.handleClose), e.on("ssml-changespeed-close", Je.handleClose), e.on("ssml-continuous-close", Xe.handleClose), e.on("ssml-digital-close", Ke.handleClose), e.on("ssml-english-close", Qe.handleClose), e.on("ssml-mute-close", et.handleClose), e.on("ssml-read-close", Mn.handleClose), e.on("ssml-rhythm-close", Ze.handleClose), e.on("ssml-speaker-close", Ye.handleClose), e.on("ssml-special-close", Re.handleClose);
}
const pa = /* @__PURE__ */ D({
  __name: "editor-core",
  props: {
    editorConfig: {}
  },
  emits: ["created", "change"],
  setup(e, { emit: n }) {
    const t = e, l = g(null);
    Ee(() => {
      s();
    });
    const s = () => {
      if (!l.value)
        return;
      const r = vr();
      nl({
        selector: l.value,
        mode: "simple",
        content: r ?? [],
        config: {
          ...dl(t.editorConfig),
          onCreated(o) {
            fa(o), n("created", o), o.focus(!0);
            const a = o.getConfig();
            a.hoverbarKeys = void 0;
          },
          onChange(o) {
            n("change", o), pr(o.children);
          }
        }
      });
    };
    return (r, o) => (T(), P("div", {
      ref_key: "boxRef",
      ref: l,
      class: "edit-core",
      style: { height: "70vh", "overflow-y": "hidden" }
    }, null, 512));
  }
}), va = { class: "bar-view border-bottom border-1" }, ma = /* @__PURE__ */ D({
  __name: "bar-view",
  setup(e) {
    return (n, t) => (T(), P(re, null, [
      p("div", va, [
        i(b(xn), null, {
          default: v(() => [
            i(b(de), { divider: "green" }, {
              default: v(() => [
                i(b(H), {
                  text: "24K高清音质",
                  icon: "play",
                  disabled: ""
                })
              ]),
              _: 1
            }),
            i(b(de), { divider: "cyan" }, {
              default: v(() => [
                i(b(Rn)),
                i(b(Vn)),
                i(b(Pn)),
                i(b(Dn)),
                i(b(An)),
                i(b(Nn))
              ]),
              _: 1
            }),
            i(b(de), { divider: "orange" }, {
              default: v(() => [
                i(b(Bn)),
                i(b(zn)),
                i(b(Gn))
              ]),
              _: 1
            }),
            i(b(de), { divider: "purple" }, {
              default: v(() => [
                i(b(jn)),
                i(b(Hn))
              ]),
              _: 1
            }),
            i(b(de), { divider: "yellow" }, {
              default: v(() => [
                i(b(Fn)),
                i(b(Un))
              ]),
              _: 1
            }),
            i(b(de), null, {
              default: v(() => [
                i(b(Wn))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      i(b(qn))
    ], 64));
  }
}), ha = { class: "editor-view" }, _a = { class: "editor-box" }, ga = { class: "editor-core-container shadow pt-1" }, ya = /* @__PURE__ */ D({
  __name: "editor-view",
  emits: ["onCreated", "onChange"],
  setup(e, { emit: n }) {
    const t = g(0), l = U(), s = g(null);
    fl(ie.EDITOR, l);
    const r = { maxLength: 5e3, placeholder: "请输入内容..." };
    bt(() => {
      var c;
      (c = l.value) == null || c.destroy();
    });
    const o = (c) => {
      l.value = c, n("onCreated", c), c.on(pe.UPDATE_BGM, (f) => {
        s.value = f;
      }), c.on(pe.REMOVE_BGM, () => {
        s.value = null;
      });
    }, a = (c) => {
      t.value = c.getText().length, n("onChange", c);
    };
    return (c, f) => (T(), P("div", ha, [
      i(ti, {
        bgm: s.value,
        "character-total": t.value,
        "character-max": r.maxLength || 0
      }, null, 8, ["bgm", "character-total", "character-max"]),
      p("div", _a, [
        i(ma),
        p("div", ga, [
          i(pa, {
            "editor-config": r,
            onChange: a,
            onCreated: o
          })
        ])
      ])
    ]));
  }
});
const ba = /* @__PURE__ */ G(ya, [["__scopeId", "data-v-bc09f735"]]), xa = {
  install(e) {
    e.component("EditorView", ba);
  }
};
const Oa = {
  install(e, n) {
    const t = n ?? {};
    e.provide(ie.EDITORCONFIG, t), F.on(j.ERROR, t.handleError), K.registerModule(Ci), K.registerModule(ki), K.registerModule(Mi), K.registerModule(Ai), K.registerModule(Fi), K.registerModule(zi), K.registerModule(Xi), K.registerModule(Zi), K.registerModule(la), K.registerModule(ia), K.registerModule(ua), K.registerModule(da), e.use(bs), e.use(Ao), e.use(xa);
  }
};
export {
  j as EMITTER_EVENT,
  ie as PROVIDER_KEY,
  pe as WANGEDITOR_EVENT,
  Oa as default
};

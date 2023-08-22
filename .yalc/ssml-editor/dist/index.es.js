var Pn = Object.defineProperty;
var Vn = (e, t, n) => t in e ? Pn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var H = (e, t, n) => (Vn(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as A, inject as Re, openBlock as k, createElementBlock as V, normalizeClass as Ie, withModifiers as X, createElementVNode as C, toDisplayString as ne, ref as w, createBlock as U, unref as y, withCtx as h, createVNode as u, renderSlot as se, isRef as Un, toRefs as Fn, customRef as jn, getCurrentInstance as en, onMounted as j, nextTick as Gn, getCurrentScope as Wn, onScopeDispose as Kn, computed as z, watch as le, watchEffect as Hn, createTextVNode as S, Fragment as ve, renderList as Ee, pushScopeId as he, popScopeId as _e, Teleport as Ze, normalizeStyle as Te, onUnmounted as q, withDirectives as Je, vShow as et, shallowRef as G, createCommentVNode as zn, toRaw as ht, provide as Xn } from "vue";
import { SlateEditor as J, SlateElement as qn, DomEditor as He, SlateText as Yn, SlateTransforms as N, SlatePath as Qn, SlateRange as Z, createEditor as Zn } from "@wangeditor/editor";
import { ElForm as tt, ElInput as nt, ElPopover as re, ElMenu as Jn, ElMenuItem as Be, ElSelect as _t, ElOption as bt, ElIcon as er, ElTag as tr, ElButton as ue, ElDialog as nr } from "element-plus";
import { Search as rr, Minus as or, Share as ir } from "@element-plus/icons-vue";
const sr = "ssml-editor", lr = "ssml-editor-config", be = {
  EDITOR: sr,
  EDITORCONFIG: lr
}, ar = "emitter-ediror-error", ur = "emitter-bgm-menu-click", cr = "emitter-bgm-drag-box-submit", dr = "emitter-conversion-menu-click", fr = "emitter-conversion-drag-box-submit", pr = "emitter-management-menu-click", vr = "emitter-management-drag-box-submit", mr = "emitter-special-menu-click", hr = "emitter-special-drag-box-submit", _r = "emitter-sensitive-menu-click", br = "emitter-sensitive-drag-box-submit", M = {
  ERROR: ar,
  BGM_MENU_CLICK: ur,
  BGM_DRAG_BOX_SUBMIT: cr,
  CONVERSION_MENU_CLICK: dr,
  CONVERSION_DRAG_BOX_SUBMIT: fr,
  MANAGEMENT_MENU_CLICK: pr,
  MANAGEMENT_DRAG_BOX_SUBMIT: vr,
  SPECIAL_MENU_CLICK: mr,
  SPECIAL_DRAG_BOX_SUBMIT: hr,
  SENSITIVE_MENU_CLICK: _r,
  SENSITIVE_DRAG_BOX_SUBMIT: br
}, gr = "wangeditor-update-bgm", yr = "wangeditor-remove-bgm", wr = "wangeditor-update-speak", fe = {
  UPDATE_BGM: gr,
  REMOVE_BGM: yr,
  UPDATE_SPEAK: wr
}, xr = { class: "bar-button-icon" }, Er = {
  class: "fw-normal",
  style: { "font-size": "0.85rem" }
}, Sr = /* @__PURE__ */ A({
  __name: "bar-button",
  props: {
    text: {},
    icon: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, r = Re(be.EDITOR), o = () => {
      n.disabled || t("click", r.value);
    };
    return (i, s) => (k(), V("div", {
      class: Ie(["bar-button px-2 py-1", { disabled: i.disabled }]),
      onClick: o,
      onMousedown: s[0] || (s[0] = X(() => {
      }, ["prevent"]))
    }, [
      C("div", xr, [
        C("span", {
          class: Ie(["fs-3 iconfont-moyin", [`moyin-icon_${i.icon}`]])
        }, null, 2)
      ]),
      C("div", Er, ne(i.text), 1)
    ], 34));
  }
});
const K = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, F = /* @__PURE__ */ K(Sr, [["__scopeId", "data-v-7741060a"]]);
const rt = /* @__PURE__ */ A({
  __name: "bar-input",
  props: {
    type: {}
  },
  emits: ["submit"],
  setup(e, { expose: t, emit: n }) {
    const r = w(""), o = w();
    function i() {
      o.value.focus();
    }
    function s() {
      n("submit", r.value), r.value = "";
    }
    return t({
      focus: i
    }), (a, l) => (k(), U(y(tt), {
      class: "flex flex-row",
      onSubmit: X(s, ["prevent"])
    }, {
      default: h(() => [
        u(y(nt), {
          type: a.type,
          ref_key: "inputRef",
          ref: o,
          modelValue: r.value,
          "onUpdate:modelValue": l[0] || (l[0] = (v) => r.value = v)
        }, null, 8, ["type", "modelValue"])
      ]),
      _: 1
    }, 8, ["onSubmit"]));
  }
});
const Or = /* @__PURE__ */ A({
  __name: "bar-popover",
  props: {
    visible: { type: Boolean },
    trigger: {},
    hideAfter: {},
    width: {}
  },
  emits: ["update:visible"],
  setup(e) {
    return (t, n) => (k(), U(y(re), {
      hideAfter: t.hideAfter,
      width: t.width,
      visible: t.visible,
      trigger: t.trigger,
      "onUpdate:visible": n[0] || (n[0] = (r) => t.$emit("update:visible", r))
    }, {
      reference: h(() => [
        se(t.$slots, "reference")
      ]),
      default: h(() => [
        se(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["hideAfter", "width", "visible", "trigger"]));
  }
});
function ke(e) {
  return Wn() ? (Kn(e), !0) : !1;
}
function Y(e) {
  return typeof e == "function" ? e() : y(e);
}
const $e = typeof window < "u", Cr = (e) => e != null, Se = () => {
};
var Ir = Object.defineProperty, $r = Object.defineProperties, Mr = Object.getOwnPropertyDescriptors, gt = Object.getOwnPropertySymbols, Dr = Object.prototype.hasOwnProperty, Rr = Object.prototype.propertyIsEnumerable, yt = (e, t, n) => t in e ? Ir(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Tr = (e, t) => {
  for (var n in t || (t = {}))
    Dr.call(t, n) && yt(e, n, t[n]);
  if (gt)
    for (var n of gt(t))
      Rr.call(t, n) && yt(e, n, t[n]);
  return e;
}, kr = (e, t) => $r(e, Mr(t));
function Ar(e, t = {}) {
  if (!Un(e))
    return Fn(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const r in e.value)
    n[r] = jn(() => ({
      get() {
        return e.value[r];
      },
      set(o) {
        var i;
        if ((i = Y(t.replaceRef)) != null ? i : !0)
          if (Array.isArray(e.value)) {
            const a = [...e.value];
            a[r] = o, e.value = a;
          } else {
            const a = kr(Tr({}, e.value), { [r]: o });
            Object.setPrototypeOf(a, Object.getPrototypeOf(e.value)), e.value = a;
          }
        else
          e.value[r] = o;
      }
    }));
  return n;
}
function tn(e, t = !0) {
  en() ? j(e) : t ? e() : Gn(e);
}
function Q(e) {
  var t;
  const n = Y(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const ae = $e ? window : void 0;
function me(...e) {
  let t, n, r, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, o] = e, t = ae) : [t, n, r, o] = e, !t)
    return Se;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const i = [], s = () => {
    i.forEach((d) => d()), i.length = 0;
  }, a = (d, f, m, x) => (d.addEventListener(f, m, x), () => d.removeEventListener(f, m, x)), l = le(
    () => [Q(t), Y(o)],
    ([d, f]) => {
      s(), d && i.push(
        ...n.flatMap((m) => r.map((x) => a(d, m, x, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), v = () => {
    l(), s();
  };
  return ke(v), v;
}
function Lr() {
  const e = w(!1);
  return en() && j(() => {
    e.value = !0;
  }), e;
}
function ot(e) {
  const t = Lr();
  return z(() => (t.value, !!e()));
}
function Br(e, t = {}) {
  const { window: n = ae } = t, r = ot(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let o;
  const i = w(!1), s = (v) => {
    i.value = v.matches;
  }, a = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", s) : o.removeListener(s));
  }, l = Hn(() => {
    r.value && (a(), o = n.matchMedia(Y(e)), "addEventListener" in o ? o.addEventListener("change", s) : o.addListener(s), i.value = o.matches);
  });
  return ke(() => {
    l(), a(), o = void 0;
  }), i;
}
var Nr = Object.defineProperty, Pr = Object.defineProperties, Vr = Object.getOwnPropertyDescriptors, wt = Object.getOwnPropertySymbols, Ur = Object.prototype.hasOwnProperty, Fr = Object.prototype.propertyIsEnumerable, xt = (e, t, n) => t in e ? Nr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, jr = (e, t) => {
  for (var n in t || (t = {}))
    Ur.call(t, n) && xt(e, n, t[n]);
  if (wt)
    for (var n of wt(t))
      Fr.call(t, n) && xt(e, n, t[n]);
  return e;
}, Gr = (e, t) => Pr(e, Vr(t));
function Ae(e, t = {}) {
  var n, r;
  const {
    pointerTypes: o,
    preventDefault: i,
    stopPropagation: s,
    exact: a,
    onMove: l,
    onEnd: v,
    onStart: d,
    initialValue: f,
    axis: m = "both",
    draggingElement: x = ae,
    handle: p = e
  } = t, c = w(
    (n = Y(f)) != null ? n : { x: 0, y: 0 }
  ), b = w(), O = (g) => o ? o.includes(g.pointerType) : !0, R = (g) => {
    Y(i) && g.preventDefault(), Y(s) && g.stopPropagation();
  }, _ = (g) => {
    if (!O(g) || Y(a) && g.target !== Y(e))
      return;
    const T = Y(e).getBoundingClientRect(), P = {
      x: g.clientX - T.left,
      y: g.clientY - T.top
    };
    (d == null ? void 0 : d(P, g)) !== !1 && (b.value = P, R(g));
  }, E = (g) => {
    if (!O(g) || !b.value)
      return;
    let { x: T, y: P } = c.value;
    (m === "x" || m === "both") && (T = g.clientX - b.value.x), (m === "y" || m === "both") && (P = g.clientY - b.value.y), c.value = {
      x: T,
      y: P
    }, l == null || l(c.value, g), R(g);
  }, $ = (g) => {
    O(g) && b.value && (b.value = void 0, v == null || v(c.value, g), R(g));
  };
  if ($e) {
    const g = { capture: (r = t.capture) != null ? r : !0 };
    me(p, "pointerdown", _, g), me(x, "pointermove", E, g), me(x, "pointerup", $, g);
  }
  return Gr(jr({}, Ar(c)), {
    position: c,
    isDragging: z(() => !!b.value),
    style: z(
      () => `left:${c.value.x}px;top:${c.value.y}px;`
    )
  });
}
var Et = Object.getOwnPropertySymbols, Wr = Object.prototype.hasOwnProperty, Kr = Object.prototype.propertyIsEnumerable, Hr = (e, t) => {
  var n = {};
  for (var r in e)
    Wr.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Et)
    for (var r of Et(e))
      t.indexOf(r) < 0 && Kr.call(e, r) && (n[r] = e[r]);
  return n;
};
function nn(e, t, n = {}) {
  const r = n, { window: o = ae } = r, i = Hr(r, ["window"]);
  let s;
  const a = ot(() => o && "ResizeObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, v = z(
    () => Array.isArray(e) ? e.map((m) => Q(m)) : [Q(e)]
  ), d = le(
    v,
    (m) => {
      if (l(), a.value && o) {
        s = new ResizeObserver(t);
        for (const x of m)
          x && s.observe(x, i);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), f = () => {
    l(), d();
  };
  return ke(f), {
    isSupported: a,
    stop: f
  };
}
function xe(e, t = {}) {
  const {
    reset: n = !0,
    windowResize: r = !0,
    windowScroll: o = !0,
    immediate: i = !0
  } = t, s = w(0), a = w(0), l = w(0), v = w(0), d = w(0), f = w(0), m = w(0), x = w(0);
  function p() {
    const c = Q(e);
    if (!c) {
      n && (s.value = 0, a.value = 0, l.value = 0, v.value = 0, d.value = 0, f.value = 0, m.value = 0, x.value = 0);
      return;
    }
    const b = c.getBoundingClientRect();
    s.value = b.height, a.value = b.bottom, l.value = b.left, v.value = b.right, d.value = b.top, f.value = b.width, m.value = b.x, x.value = b.y;
  }
  return nn(e, p), le(() => Q(e), (c) => !c && p()), o && me("scroll", p, { capture: !0, passive: !0 }), r && me("resize", p, { passive: !0 }), tn(() => {
    i && p();
  }), {
    height: s,
    bottom: a,
    left: l,
    right: v,
    top: d,
    width: f,
    x: m,
    y: x,
    update: p
  };
}
function it(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: r = ae, box: o = "content-box" } = n, i = z(() => {
    var l, v;
    return (v = (l = Q(e)) == null ? void 0 : l.namespaceURI) == null ? void 0 : v.includes("svg");
  }), s = w(t.width), a = w(t.height);
  return nn(
    e,
    ([l]) => {
      const v = o === "border-box" ? l.borderBoxSize : o === "content-box" ? l.contentBoxSize : l.devicePixelContentBoxSize;
      if (r && i.value) {
        const d = Q(e);
        if (d) {
          const f = r.getComputedStyle(d);
          s.value = Number.parseFloat(f.width), a.value = Number.parseFloat(f.height);
        }
      } else if (v) {
        const d = Array.isArray(v) ? v : [v];
        s.value = d.reduce((f, { inlineSize: m }) => f + m, 0), a.value = d.reduce((f, { blockSize: m }) => f + m, 0);
      } else
        s.value = l.contentRect.width, a.value = l.contentRect.height;
    },
    n
  ), le(
    () => Q(e),
    (l) => {
      s.value = l ? t.width : 0, a.value = l ? t.height : 0;
    }
  ), {
    width: s,
    height: a
  };
}
function zr(e, t, n = {}) {
  const {
    root: r,
    rootMargin: o = "0px",
    threshold: i = 0.1,
    window: s = ae,
    immediate: a = !0
  } = n, l = ot(() => s && "IntersectionObserver" in s), v = z(() => {
    const p = Y(e);
    return (Array.isArray(p) ? p : [p]).map(Q).filter(Cr);
  });
  let d = Se;
  const f = w(a), m = l.value ? le(
    () => [v.value, Q(r), f.value],
    ([p, c]) => {
      if (d(), !f.value || !p.length)
        return;
      const b = new IntersectionObserver(
        t,
        {
          root: Q(c),
          rootMargin: o,
          threshold: i
        }
      );
      p.forEach((O) => O && b.observe(O)), d = () => {
        b.disconnect(), d = Se;
      };
    },
    { immediate: a, flush: "post" }
  ) : Se, x = () => {
    d(), m(), f.value = !1;
  };
  return ke(x), {
    isSupported: l,
    isActive: f,
    pause() {
      d(), f.value = !1;
    },
    resume() {
      f.value = !0;
    },
    stop: x
  };
}
function Xr(e, { window: t = ae, scrollTarget: n } = {}) {
  const r = w(!1);
  return zr(
    e,
    ([{ isIntersecting: o }]) => {
      r.value = o;
    },
    {
      root: n,
      window: t
    }
  ), r;
}
function st(e = {}) {
  const {
    window: t = ae,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: r = Number.POSITIVE_INFINITY,
    listenOrientation: o = !0,
    includeScrollbar: i = !0
  } = e, s = w(n), a = w(r), l = () => {
    t && (i ? (s.value = t.innerWidth, a.value = t.innerHeight) : (s.value = t.document.documentElement.clientWidth, a.value = t.document.documentElement.clientHeight));
  };
  if (l(), tn(l), me("resize", l, { passive: !0 }), o) {
    const v = Br("(orientation: portrait)");
    le(v, () => l());
  }
  return { width: s, height: a };
}
const lt = (e) => (he("data-v-9a2efc34"), e = e(), _e(), e), qr = { class: "search-content vh-50" }, Yr = { class: "ps-2 w-75" }, Qr = { class: "menu" }, Zr = /* @__PURE__ */ lt(() => /* @__PURE__ */ C("div", { class: "h h-1" }, null, -1)), Jr = { class: "flex flex-row" }, eo = /* @__PURE__ */ lt(() => /* @__PURE__ */ C("div", { class: "h-" }, null, -1)), to = { class: "content-list w-90" }, no = ["onClick"], ro = /* @__PURE__ */ lt(() => /* @__PURE__ */ C("span", { class: "iconfont icon-play" }, null, -1)), oo = /* @__PURE__ */ A({
  __name: "bar-search",
  props: {
    menuItemLabel: {},
    scenes: {},
    styles: {},
    dataList: {},
    fetch: { type: Function }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const n = e, r = w(), o = w(""), i = w(""), s = w(""), a = w(n.dataList || []), l = w("first"), v = Xr(r);
    le(v, (x) => {
      x && setTimeout(() => {
        var p;
        (p = r.value) == null || p.focus();
      }, 100);
    }), j(async () => {
      await d();
    });
    async function d() {
      a.value = await n.fetch({
        search: o.value,
        menuKey: l.value,
        scene: i.value,
        style: s.value
      });
    }
    function f(x) {
      l.value = x, d();
    }
    function m(x) {
      t("submit", x);
    }
    return (x, p) => (k(), V("div", qr, [
      C("div", Yr, [
        u(y(tt), {
          onSubmit: X(d, ["prevent"])
        }, {
          default: h(() => [
            u(y(nt), {
              ref_key: "searchInputRef",
              ref: r,
              placeholder: "搜索",
              modelValue: o.value,
              "onUpdate:modelValue": p[0] || (p[0] = (c) => o.value = c),
              "suffix-icon": y(rr)
            }, null, 8, ["modelValue", "suffix-icon"])
          ]),
          _: 1
        }, 8, ["onSubmit"])
      ]),
      C("div", Qr, [
        u(y(Jn), {
          mode: "horizontal",
          "default-active": "first",
          onSelect: p[1] || (p[1] = (c) => f(c))
        }, {
          default: h(() => [
            u(y(Be), { index: "first" }, {
              default: h(() => [
                S(ne(x.menuItemLabel.first), 1)
              ]),
              _: 1
            }),
            u(y(Be), { index: "second" }, {
              default: h(() => [
                S(ne(x.menuItemLabel.second), 1)
              ]),
              _: 1
            }),
            u(y(Be), { index: "last" }, {
              default: h(() => [
                S(ne(x.menuItemLabel.last), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      Zr,
      C("div", Jr, [
        u(y(_t), {
          modelValue: i.value,
          "onUpdate:modelValue": p[2] || (p[2] = (c) => i.value = c),
          onChange: d,
          class: "m m-2",
          size: "large"
        }, {
          default: h(() => [
            (k(!0), V(ve, null, Ee(x.scenes, (c) => (k(), U(y(bt), {
              key: c.value,
              label: c.label,
              value: c.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        u(y(_t), {
          modelValue: s.value,
          "onUpdate:modelValue": p[3] || (p[3] = (c) => s.value = c),
          onChange: d,
          class: "m m-2",
          size: "large"
        }, {
          default: h(() => [
            (k(!0), V(ve, null, Ee(x.styles, (c) => (k(), U(y(bt), {
              key: c.value,
              label: c.label,
              value: c.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      eo,
      C("div", to, [
        (k(!0), V(ve, null, Ee(a.value, (c, b) => (k(), V("div", {
          onClick: (O) => m(c),
          class: "content-list-item clickable ps-3",
          key: b
        }, [
          ro,
          C("span", null, ne(c.label), 1)
        ], 8, no))), 128))
      ])
    ]));
  }
});
const ge = /* @__PURE__ */ K(oo, [["__scopeId", "data-v-9a2efc34"]]), io = /* @__PURE__ */ A({
  __name: "fixed-panel",
  emits: ["dragging"],
  setup(e, { emit: t }) {
    const n = w(), r = $e ? window.innerWidth : 200, o = $e ? window.innerHeight : 200, { x: i, y: s } = Ae(n, {
      initialValue: { x: r - 100, y: o / 2 },
      preventDefault: !0,
      onStart: () => {
        t("dragging", !0);
      },
      onEnd: () => {
        t("dragging", !1);
      }
    }), { width: a, height: l } = it(n), { width: v, height: d } = st(), f = z(() => ({
      x: v.value - a.value,
      y: d.value - l.value
    })), m = z(() => {
      if (!f.value)
        return x(i.value, s.value);
      const p = i.value < 5 ? 5 : i.value > f.value.x ? f.value.x - 5 : i.value, c = s.value < 5 ? 5 : s.value > f.value.y ? f.value.y - 5 : s.value;
      return x(p, c);
    });
    function x(p, c) {
      return `left:${p}px;top:${c}px`;
    }
    return (p, c) => (k(), U(Ze, { to: "body" }, [
      C("div", {
        ref_key: "boxRef",
        ref: n,
        class: "fixed-panel z-3 user-select-none",
        style: Te([{ position: "fixed" }, m.value])
      }, [
        se(p.$slots, "default")
      ], 4)
    ]));
  }
});
function St(e, t) {
  return `left:${e}px;top:${t}px`;
}
function rn(e, t) {
  const { x: n, y: r } = t, { width: o, height: i } = it(e), { width: s, height: a } = st(), l = z(() => ({
    x: s.value - o.value,
    y: a.value - i.value
  }));
  return { style: z(() => {
    if (!l.value)
      return St(n.value, r.value);
    const d = n.value < 5 ? 5 : n.value > l.value.x ? l.value.x - 5 : n.value, f = r.value < 5 ? 5 : r.value > l.value.y ? l.value.y - 5 : r.value;
    return St(d, f);
  }) };
}
const so = {}, lo = { class: "content" };
function ao(e, t) {
  return k(), V("div", lo, [
    se(e.$slots, "default", {}, void 0, !0)
  ]);
}
const on = /* @__PURE__ */ K(so, [["render", ao], ["__scopeId", "data-v-7beae5b9"]]), uo = {}, co = { class: "bar-wrapper-item" };
function fo(e, t) {
  return k(), V("div", co, [
    se(e.$slots, "default")
  ]);
}
const po = /* @__PURE__ */ K(uo, [["render", fo]]), vo = { class: "bar-wrapper-group" }, mo = { class: "group-items" }, ho = /* @__PURE__ */ A({
  __name: "bar-wrapper-group",
  props: {
    divider: {}
  },
  setup(e) {
    return (t, n) => (k(), V("div", vo, [
      C("div", mo, [
        se(t.$slots, "default", {}, void 0, !0)
      ]),
      C("div", {
        class: Ie(["divider", [t.divider]])
      }, null, 2)
    ]));
  }
});
const ce = /* @__PURE__ */ K(ho, [["__scopeId", "data-v-3a7abad9"]]), _o = /* @__PURE__ */ A({
  __name: "drag-box",
  props: {
    visible: { type: Boolean },
    position: {}
  },
  emits: ["update:visible", "update:position"],
  setup(e, { emit: t }) {
    const n = e, r = w(), { x: o, y: i } = Ae(r, {
      initialValue: n.position
    }), { width: s, height: a } = it(r), { width: l, height: v } = st();
    le([o, i], ([b, O]) => {
      t("update:position", { x: b, y: O });
    });
    const d = z(() => ({
      x: l.value - s.value,
      y: v.value - a.value
    })), f = z(() => {
      const { x: b, y: O } = n.position;
      if (!d.value)
        return c(b, O);
      const R = b < 5 ? 5 : b > d.value.x ? d.value.x - 5 : b, _ = O < 5 ? 5 : O > d.value.y ? d.value.y - 5 : O;
      return c(R, _);
    });
    j(() => {
      window.addEventListener("keydown", p);
    }), q(() => {
      window.addEventListener("keydown", p);
    });
    function m() {
      t("update:visible", !1);
    }
    function x(b) {
      const O = b.target;
      r.value && !r.value.contains(O) && n.visible && t("update:visible", !1);
    }
    function p(b) {
      b.code === "Escape" && n.visible && m();
    }
    function c(b, O) {
      return `left:${b}px;top:${O}px`;
    }
    return (b, O) => (k(), U(Ze, { to: "body" }, [
      Je(C("div", {
        class: "drag-box-mask user-select-none",
        onClick: x
      }, [
        C("div", {
          ref_key: "boxRef",
          ref: r,
          class: "card shadow brag-box",
          style: Te([{ position: "fixed" }, f.value])
        }, [
          C("div", { class: "w-100 text-end me-2" }, [
            C("span", {
              onClick: m,
              class: "btn iconfont icon-close fs-5"
            })
          ]),
          se(b.$slots, "default", {}, void 0, !0)
        ], 4)
      ], 512), [
        [et, b.visible]
      ])
    ]));
  }
});
const ye = /* @__PURE__ */ K(_o, [["__scopeId", "data-v-ca198ced"]]), bo = {
  install(e) {
    e.component("BarButton", F), e.component("BarInput", rt), e.component("BarPopover", Or), e.component("BarSearch", ge), e.component("FixedPanel", io), e.component("BarWrapper", on), e.component("BarWrapperItem", po), e.component("BarWrapperGroup", ce), e.component("DragBox", ye);
  }
};
var pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function at(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ze = { exports: {} }, sn = { exports: {} }, go = void 0, ln = function(e) {
  return e !== go && e !== null;
}, yo = ln, wo = {
  object: !0,
  function: !0,
  undefined: !0
  /* document.all */
}, xo = function(e) {
  return yo(e) ? hasOwnProperty.call(wo, typeof e) : !1;
}, Eo = xo, So = function(e) {
  if (!Eo(e))
    return !1;
  try {
    return e.constructor ? e.constructor.prototype === e : !1;
  } catch {
    return !1;
  }
}, Oo = So, Co = function(e) {
  if (typeof e != "function" || !hasOwnProperty.call(e, "length"))
    return !1;
  try {
    if (typeof e.length != "number" || typeof e.call != "function" || typeof e.apply != "function")
      return !1;
  } catch {
    return !1;
  }
  return !Oo(e);
}, Io = Co, $o = /^\s*class[\s{/}]/, Mo = Function.prototype.toString, Do = function(e) {
  return !(!Io(e) || $o.test(Mo.call(e)));
}, Ro = function() {
  var e = Object.assign, t;
  return typeof e != "function" ? !1 : (t = { foo: "raz" }, e(t, { bar: "dwa" }, { trzy: "trzy" }), t.foo + t.bar + t.trzy === "razdwatrzy");
}, Ne, Ot;
function To() {
  return Ot || (Ot = 1, Ne = function() {
    try {
      return Object.keys("primitive"), !0;
    } catch {
      return !1;
    }
  }), Ne;
}
var ko = function() {
}, Ao = ko(), ut = function(e) {
  return e !== Ao && e !== null;
}, Pe, Ct;
function Lo() {
  if (Ct)
    return Pe;
  Ct = 1;
  var e = ut, t = Object.keys;
  return Pe = function(n) {
    return t(e(n) ? Object(n) : n);
  }, Pe;
}
var Ve, It;
function Bo() {
  return It || (It = 1, Ve = To()() ? Object.keys : Lo()), Ve;
}
var Ue, $t;
function No() {
  if ($t)
    return Ue;
  $t = 1;
  var e = ut;
  return Ue = function(t) {
    if (!e(t))
      throw new TypeError("Cannot use null or undefined");
    return t;
  }, Ue;
}
var Fe, Mt;
function Po() {
  if (Mt)
    return Fe;
  Mt = 1;
  var e = Bo(), t = No(), n = Math.max;
  return Fe = function(r, o) {
    var i, s, a = n(arguments.length, 2), l;
    for (r = Object(t(r)), l = function(v) {
      try {
        r[v] = o[v];
      } catch (d) {
        i || (i = d);
      }
    }, s = 1; s < a; ++s)
      o = arguments[s], e(o).forEach(l);
    if (i !== void 0)
      throw i;
    return r;
  }, Fe;
}
var Vo = Ro() ? Object.assign : Po(), Uo = ut, Fo = Array.prototype.forEach, jo = Object.create, Go = function(e, t) {
  var n;
  for (n in e)
    t[n] = e[n];
}, Wo = function(e) {
  var t = jo(null);
  return Fo.call(arguments, function(n) {
    Uo(n) && Go(Object(n), t);
  }), t;
}, je = "razdwatrzy", Ko = function() {
  return typeof je.contains != "function" ? !1 : je.contains("dwa") === !0 && je.contains("foo") === !1;
}, Ge, Dt;
function Ho() {
  if (Dt)
    return Ge;
  Dt = 1;
  var e = String.prototype.indexOf;
  return Ge = function(t) {
    return e.call(this, t, arguments[1]) > -1;
  }, Ge;
}
var zo = Ko() ? String.prototype.contains : Ho(), Oe = ln, Rt = Do, an = Vo, un = Wo, we = zo, Xo = sn.exports = function(e, t) {
  var n, r, o, i, s;
  return arguments.length < 2 || typeof e != "string" ? (i = t, t = e, e = null) : i = arguments[2], Oe(e) ? (n = we.call(e, "c"), r = we.call(e, "e"), o = we.call(e, "w")) : (n = o = !0, r = !1), s = { value: t, configurable: n, enumerable: r, writable: o }, i ? an(un(i), s) : s;
};
Xo.gs = function(e, t, n) {
  var r, o, i, s;
  return typeof e != "string" ? (i = n, n = t, t = e, e = null) : i = arguments[3], Oe(t) ? Rt(t) ? Oe(n) ? Rt(n) || (i = n, n = void 0) : n = void 0 : (i = t, t = n = void 0) : t = void 0, Oe(e) ? (r = we.call(e, "c"), o = we.call(e, "e")) : (r = !0, o = !1), s = { get: t, set: n, configurable: r, enumerable: o }, i ? an(un(i), s) : s;
};
var qo = sn.exports, Yo = function(e) {
  if (typeof e != "function")
    throw new TypeError(e + " is not a function");
  return e;
};
(function(e, t) {
  var n = qo, r = Yo, o = Function.prototype.apply, i = Function.prototype.call, s = Object.create, a = Object.defineProperty, l = Object.defineProperties, v = Object.prototype.hasOwnProperty, d = { configurable: !0, enumerable: !1, writable: !0 }, f, m, x, p, c, b, O;
  f = function(R, _) {
    var E;
    return r(_), v.call(this, "__ee__") ? E = this.__ee__ : (E = d.value = s(null), a(this, "__ee__", d), d.value = null), E[R] ? typeof E[R] == "object" ? E[R].push(_) : E[R] = [E[R], _] : E[R] = _, this;
  }, m = function(R, _) {
    var E, $;
    return r(_), $ = this, f.call(this, R, E = function() {
      x.call($, R, E), o.call(_, this, arguments);
    }), E.__eeOnceListener__ = _, this;
  }, x = function(R, _) {
    var E, $, g, T;
    if (r(_), !v.call(this, "__ee__"))
      return this;
    if (E = this.__ee__, !E[R])
      return this;
    if ($ = E[R], typeof $ == "object")
      for (T = 0; g = $[T]; ++T)
        (g === _ || g.__eeOnceListener__ === _) && ($.length === 2 ? E[R] = $[T ? 0 : 1] : $.splice(T, 1));
    else
      ($ === _ || $.__eeOnceListener__ === _) && delete E[R];
    return this;
  }, p = function(R) {
    var _, E, $, g, T;
    if (v.call(this, "__ee__") && (g = this.__ee__[R], !!g))
      if (typeof g == "object") {
        for (E = arguments.length, T = new Array(E - 1), _ = 1; _ < E; ++_)
          T[_ - 1] = arguments[_];
        for (g = g.slice(), _ = 0; $ = g[_]; ++_)
          o.call($, this, T);
      } else
        switch (arguments.length) {
          case 1:
            i.call(g, this);
            break;
          case 2:
            i.call(g, this, arguments[1]);
            break;
          case 3:
            i.call(g, this, arguments[1], arguments[2]);
            break;
          default:
            for (E = arguments.length, T = new Array(E - 1), _ = 1; _ < E; ++_)
              T[_ - 1] = arguments[_];
            o.call(g, this, T);
        }
  }, c = {
    on: f,
    once: m,
    off: x,
    emit: p
  }, b = {
    on: n(f),
    once: n(m),
    off: n(x),
    emit: n(p)
  }, O = l({}, b), e.exports = t = function(R) {
    return R == null ? s(O) : l(Object(R), b);
  }, t.methods = c;
})(ze, ze.exports);
var Qo = ze.exports;
const Zo = /* @__PURE__ */ at(Qo), D = Zo();
var cn = "Expected a function", Tt = 0 / 0, Jo = "[object Symbol]", ei = /^\s+|\s+$/g, ti = /^[-+]0x[0-9a-f]+$/i, ni = /^0b[01]+$/i, ri = /^0o[0-7]+$/i, oi = parseInt, ii = typeof pe == "object" && pe && pe.Object === Object && pe, si = typeof self == "object" && self && self.Object === Object && self, li = ii || si || Function("return this")(), ai = Object.prototype, ui = ai.toString, ci = Math.max, di = Math.min, We = function() {
  return li.Date.now();
};
function fi(e, t, n) {
  var r, o, i, s, a, l, v = 0, d = !1, f = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(cn);
  t = kt(t) || 0, Me(n) && (d = !!n.leading, f = "maxWait" in n, i = f ? ci(kt(n.maxWait) || 0, t) : i, m = "trailing" in n ? !!n.trailing : m);
  function x(g) {
    var T = r, P = o;
    return r = o = void 0, v = g, s = e.apply(P, T), s;
  }
  function p(g) {
    return v = g, a = setTimeout(O, t), d ? x(g) : s;
  }
  function c(g) {
    var T = g - l, P = g - v, mt = t - T;
    return f ? di(mt, i - P) : mt;
  }
  function b(g) {
    var T = g - l, P = g - v;
    return l === void 0 || T >= t || T < 0 || f && P >= i;
  }
  function O() {
    var g = We();
    if (b(g))
      return R(g);
    a = setTimeout(O, c(g));
  }
  function R(g) {
    return a = void 0, m && r ? x(g) : (r = o = void 0, s);
  }
  function _() {
    a !== void 0 && clearTimeout(a), v = 0, r = l = o = a = void 0;
  }
  function E() {
    return a === void 0 ? s : R(We());
  }
  function $() {
    var g = We(), T = b(g);
    if (r = arguments, o = this, l = g, T) {
      if (a === void 0)
        return p(l);
      if (f)
        return a = setTimeout(O, t), x(l);
    }
    return a === void 0 && (a = setTimeout(O, t)), s;
  }
  return $.cancel = _, $.flush = E, $;
}
function pi(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(cn);
  return Me(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), fi(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
function Me(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function vi(e) {
  return !!e && typeof e == "object";
}
function mi(e) {
  return typeof e == "symbol" || vi(e) && ui.call(e) == Jo;
}
function kt(e) {
  if (typeof e == "number")
    return e;
  if (mi(e))
    return Tt;
  if (Me(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Me(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(ei, "");
  var n = ni.test(e);
  return n || ri.test(e) ? oi(e.slice(2), n ? 2 : 8) : ti.test(e) ? Tt : +e;
}
var hi = pi;
const _i = /* @__PURE__ */ at(hi);
function At(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function ct(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {}), Object.keys(t).forEach(function(n) {
    typeof e[n] > "u" ? e[n] = t[n] : At(t[n]) && At(e[n]) && Object.keys(t[n]).length > 0 && ct(e[n], t[n]);
  });
}
var dn = {
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
function dt() {
  var e = typeof document < "u" ? document : {};
  return ct(e, dn), e;
}
var bi = {
  document: dn,
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
function fn() {
  var e = typeof window < "u" ? window : {};
  return ct(e, bi), e;
}
function gi(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function Xe(e) {
  return Xe = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Xe(e);
}
function De(e, t) {
  return De = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, De(e, t);
}
function yi() {
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
function Ce(e, t, n) {
  return yi() ? Ce = Reflect.construct : Ce = function(o, i, s) {
    var a = [null];
    a.push.apply(a, i);
    var l = Function.bind.apply(o, a), v = new l();
    return s && De(v, s.prototype), v;
  }, Ce.apply(null, arguments);
}
function wi(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function qe(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return qe = function(r) {
    if (r === null || !wi(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, o);
    }
    function o() {
      return Ce(r, arguments, Xe(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), De(o, r);
  }, qe(e);
}
function xi(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ei(e) {
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
var de = /* @__PURE__ */ function(e) {
  gi(t, e);
  function t(n) {
    var r;
    return r = e.call.apply(e, [this].concat(n)) || this, Ei(xi(r)), r;
  }
  return t;
}(/* @__PURE__ */ qe(Array));
function ft(e) {
  e === void 0 && (e = []);
  var t = [];
  return e.forEach(function(n) {
    Array.isArray(n) ? t.push.apply(t, ft(n)) : t.push(n);
  }), t;
}
function Si(e) {
  for (var t = [], n = 0; n < e.length; n += 1)
    t.indexOf(e[n]) === -1 && t.push(e[n]);
  return t;
}
function Oi(e) {
  return e.toLowerCase().replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function Ci(e, t) {
  if (typeof e != "string")
    return [e];
  for (var n = [], r = t.querySelectorAll(e), o = 0; o < r.length; o += 1)
    n.push(r[o]);
  return n;
}
function L(e, t) {
  var n = fn(), r = dt(), o = [];
  if (!t && e instanceof de)
    return e;
  if (!e)
    return new de(o);
  if (typeof e == "string") {
    var i = e.trim();
    if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
      var s = "div";
      i.indexOf("<li") === 0 && (s = "ul"), i.indexOf("<tr") === 0 && (s = "tbody"), (i.indexOf("<td") === 0 || i.indexOf("<th") === 0) && (s = "tr"), i.indexOf("<tbody") === 0 && (s = "table"), i.indexOf("<option") === 0 && (s = "select");
      var a = r.createElement(s);
      a.innerHTML = i;
      for (var l = 0; l < a.childNodes.length; l += 1)
        o.push(a.childNodes[l]);
    } else
      o = Ci(e.trim(), t || r);
  } else if (e.nodeType || e === n || e === r)
    o.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof de)
      return e;
    o = e;
  }
  return new de(Si(o));
}
L.fn = de.prototype;
function Lt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = ft(t.map(function(o) {
    return o.split(" ");
  }));
  return this.forEach(function(o) {
    var i;
    (i = o.classList).add.apply(i, r);
  }), this;
}
function Bt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = ft(t.map(function(o) {
    return o.split(" ");
  }));
  return this.forEach(function(o) {
    var i;
    (i = o.classList).remove.apply(i, r);
  }), this;
}
function Nt(e, t) {
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
function Pt() {
  var e = this[0];
  if (e) {
    var t = {};
    if (e.dataset)
      for (var n in e.dataset)
        t[n] = e.dataset[n];
    else
      for (var r = 0; r < e.attributes.length; r += 1) {
        var o = e.attributes[r];
        o.name.indexOf("data-") >= 0 && (t[Oi(o.name.split("data-")[1])] = o.value);
      }
    for (var i in t)
      t[i] === "false" ? t[i] = !1 : t[i] === "true" ? t[i] = !0 : parseFloat(t[i]) === t[i] * 1 && (t[i] *= 1);
    return t;
  }
}
function Vt(e) {
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
    var i = this[o];
    if (Array.isArray(e) && i.multiple && i.nodeName.toLowerCase() === "select")
      for (var s = 0; s < i.options.length; s += 1)
        i.options[s].selected = e.indexOf(i.options[s].value) >= 0;
    else
      i.value = e;
  }
  return this;
}
function Ut() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0], o = t[1], i = t[2], s = t[3];
  typeof t[1] == "function" && (r = t[0], i = t[1], s = t[2], o = void 0), s || (s = !1);
  function a(c) {
    var b = c.target;
    if (b) {
      var O = c.target.dom7EventData || [];
      if (O.indexOf(c) < 0 && O.unshift(c), L(b).is(o))
        i.apply(b, O);
      else
        for (var R = L(b).parents(), _ = 0; _ < R.length; _ += 1)
          L(R[_]).is(o) && i.apply(R[_], O);
    }
  }
  function l(c) {
    var b = c && c.target ? c.target.dom7EventData || [] : [];
    b.indexOf(c) < 0 && b.unshift(c), i.apply(this, b);
  }
  for (var v = r.split(" "), d, f = 0; f < this.length; f += 1) {
    var m = this[f];
    if (o)
      for (d = 0; d < v.length; d += 1) {
        var p = v[d];
        m.dom7LiveListeners || (m.dom7LiveListeners = {}), m.dom7LiveListeners[p] || (m.dom7LiveListeners[p] = []), m.dom7LiveListeners[p].push({
          listener: i,
          proxyListener: a
        }), m.addEventListener(p, a, s);
      }
    else
      for (d = 0; d < v.length; d += 1) {
        var x = v[d];
        m.dom7Listeners || (m.dom7Listeners = {}), m.dom7Listeners[x] || (m.dom7Listeners[x] = []), m.dom7Listeners[x].push({
          listener: i,
          proxyListener: l
        }), m.addEventListener(x, l, s);
      }
  }
  return this;
}
function Ft() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0], o = t[1], i = t[2], s = t[3];
  typeof t[1] == "function" && (r = t[0], i = t[1], s = t[2], o = void 0), s || (s = !1);
  for (var a = r.split(" "), l = 0; l < a.length; l += 1)
    for (var v = a[l], d = 0; d < this.length; d += 1) {
      var f = this[d], m = void 0;
      if (!o && f.dom7Listeners ? m = f.dom7Listeners[v] : o && f.dom7LiveListeners && (m = f.dom7LiveListeners[v]), m && m.length)
        for (var x = m.length - 1; x >= 0; x -= 1) {
          var p = m[x];
          i && p.listener === i || i && p.listener && p.listener.dom7proxy && p.listener.dom7proxy === i ? (f.removeEventListener(v, p.proxyListener, s), m.splice(x, 1)) : i || (f.removeEventListener(v, p.proxyListener, s), m.splice(x, 1));
        }
    }
  return this;
}
function jt() {
  for (var e = 0; e < this.length; e += 1)
    this[e].style.display = "none";
  return this;
}
function Gt(e) {
  return e ? (this.forEach(function(t, n) {
    e.apply(t, [t, n]);
  }), this) : this;
}
function Wt(e) {
  if (typeof e > "u")
    return this[0] ? this[0].innerHTML : null;
  for (var t = 0; t < this.length; t += 1)
    this[t].innerHTML = e;
  return this;
}
function Kt(e) {
  var t = fn(), n = dt(), r = this[0], o, i;
  if (!r || typeof e > "u")
    return !1;
  if (typeof e == "string") {
    if (r.matches)
      return r.matches(e);
    if (r.webkitMatchesSelector)
      return r.webkitMatchesSelector(e);
    if (r.msMatchesSelector)
      return r.msMatchesSelector(e);
    for (o = L(e), i = 0; i < o.length; i += 1)
      if (o[i] === r)
        return !0;
    return !1;
  }
  if (e === n)
    return r === n;
  if (e === t)
    return r === t;
  if (e.nodeType || e instanceof de) {
    for (o = e.nodeType ? [e] : e, i = 0; i < o.length; i += 1)
      if (o[i] === r)
        return !0;
    return !1;
  }
  return !1;
}
function Ht() {
  for (var e, t = dt(), n = 0; n < arguments.length; n += 1) {
    e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    for (var r = 0; r < this.length; r += 1)
      if (typeof e == "string") {
        var o = t.createElement("div");
        for (o.innerHTML = e; o.firstChild; )
          this[r].appendChild(o.firstChild);
      } else if (e instanceof de)
        for (var i = 0; i < e.length; i += 1)
          this[r].appendChild(e[i]);
      else
        this[r].appendChild(e);
  }
  return this;
}
function zt(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var r = this[n].parentNode; r; )
      e ? L(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
  return L(t);
}
function Xt(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var r = this[n].querySelectorAll(e), o = 0; o < r.length; o += 1)
      t.push(r[o]);
  return L(t);
}
function qt(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var r = this[n].children, o = 0; o < r.length; o += 1)
      (!e || L(r[o]).is(e)) && t.push(r[o]);
  return L(t);
}
var Ii = "resize scroll".split(" ");
function pn(e) {
  function t() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    if (typeof r[0] > "u") {
      for (var i = 0; i < this.length; i += 1)
        Ii.indexOf(e) < 0 && (e in this[i] ? this[i][e]() : L(this[i]).trigger(e));
      return this;
    }
    return this.on.apply(this, [e].concat(r));
  }
  return t;
}
var Yt = pn("click"), Qt = pn("focus");
jt && (L.fn.hide = jt);
Ht && (L.fn.append = Ht);
Yt && (L.fn.click = Yt);
Ut && (L.fn.on = Ut);
Ft && (L.fn.off = Ft);
Qt && (L.fn.focus = Qt);
Nt && (L.fn.attr = Nt);
Vt && (L.fn.val = Vt);
Wt && (L.fn.html = Wt);
Pt && (L.fn.dataset = Pt);
Lt && (L.fn.addClass = Lt);
Bt && (L.fn.removeClass = Bt);
qt && (L.fn.children = qt);
Gt && (L.fn.each = Gt);
Xt && (L.fn.find = Xt);
Kt && (L.fn.is = Kt);
zt && (L.fn.parents = zt);
const Dl = globalThis.Node, Rl = globalThis.Comment, Tl = globalThis.Element, kl = globalThis.Text, Al = globalThis.Range, Ll = globalThis.Selection, Bl = globalThis.StaticRange;
function vn(e, t, n, r, o) {
  L("body").on(
    "click",
    `#${r}-${t}`,
    _i((i) => {
      i.preventDefault();
      const s = Mi(e, n, r);
      return s && o(s);
    })
  );
}
function ee(e, t, n, r) {
  return vn(e, "close", t, n, r);
}
function $i(e, t, n, r) {
  return vn(e, "play", t, n, r);
}
function Mi(e, t, n) {
  const [r] = J.nodes(e, {
    at: [],
    match: (o) => !qn.isElement(o) || !He.checkNodeType(o, t) ? !1 : o.domId === n
  });
  return r;
}
function Le(e, t, n) {
  const r = J.previous(e, {
    at: t[1],
    match: (o) => Yn.isText(o)
  });
  r != null && (N.insertText(e, n(t[0]), {
    at: J.end(e, r[1])
  }), N.delete(e, { at: Qn.next(r[1]) }));
}
let Di = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function Ri(e = "r") {
  return `${e}-${Di()}`;
}
function mn(e) {
  if (window.navigator.userAgent.toLowerCase().indexOf("ie") >= 0) {
    const n = `<embed name="embedPlay" src="${e}"></embed>`;
    L("body").find("embed").length <= 0 && L("body").append(n);
    const r = document.embedPlay;
    r.volume = 50;
  } else {
    const n = `<audio id='audioPlay' src='${e}' hidden='true'>`;
    L("body").find("audio").length <= 0 && L("body").append(n), document.getElementById("audioPlay").play();
  }
}
class te {
  constructor(t) {
    H(this, "oldSelection", null);
    H(this, "editor");
    this.editor = t;
  }
  genDomID() {
    return Ri(`w-e-dom-${this.key}`);
  }
  selection() {
    const { selection: t } = this.editor;
    return t ?? this.oldSelection;
  }
  getValue() {
    const t = this.selection();
    return t == null ? "" : J.string(this.editor, t);
  }
  record() {
    this.oldSelection = this.editor.selection;
  }
  restore() {
    this.oldSelection && this.editor.select(this.oldSelection);
  }
  isDisabled() {
    return this.selection() == null ? (D.emit(M.ERROR, "未选中编辑器"), !0) : !1;
  }
}
class Ti extends te {
  constructor(n) {
    super(n);
    H(this, "key", "speaker");
  }
  getValue() {
    return super.getValue();
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const n = this.selection();
    if (Z.isCollapsed(n))
      return D.emit(M.ERROR, "请选中文本"), !0;
    const r = this.getValue();
    return r.length != 1 ? !0 : /^[\u4E00-\u9FA5]+$/gi.test(r) ? !1 : (D.emit(M.ERROR, "选中一个中文字符，并且有不能在其他语句之内"), !0);
  }
  exec(n) {
    if (this.isDisabled())
      return;
    const r = this.getValue();
    if (r == null)
      return;
    const o = {
      type: "ssml-p",
      domId: this.genDomID(),
      word: r,
      phoneme: n.value,
      remark: n.label,
      bgColor: "speaker",
      children: [{ text: "" }]
    };
    N.delete(this.editor), N.insertNodes(this.editor, o), this.editor.move(1), ee(this.editor, "ssml-p", o.domId, (i) => {
      Le(this.editor, i, (s) => s.word);
    });
  }
}
const hn = /* @__PURE__ */ A({
  setup() {
    const e = Re(be.EDITORCONFIG), t = G(), n = w([]), r = w(!1);
    function o() {
      r.value || (r.value = !0);
    }
    function i() {
      r.value && (r.value = !1);
    }
    async function s(a) {
      var v;
      if (t.value ?? (t.value = new Ti(a)), (v = t.value) != null && v.isDisabled())
        return;
      const l = t.value.getValue();
      if (l ? n.value = await e.fetchSpeaker(l) : n.value = [], n.value.length == 0)
        return D.emit(M.ERROR, "选中的字符没有不是多音字");
      o();
    }
    return () => u(re, {
      visible: r.value,
      "onUpdate:visible": (a) => r.value = a,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => u(F, {
        text: "多音字",
        icon: "speaker",
        onClick: s
      }, null),
      default: () => u("div", {
        class: "d-flex flex-column"
      }, [n.value.map(({
        label: a,
        value: l
      }) => u("div", {
        key: l,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          t.value && !t.value.isDisabled() && t.value.exec({
            label: a,
            value: l
          }), i();
        },
        onMousedown: X(() => {
        }, ["stop", "prevent"])
      }, [a]))])
    });
  }
});
class ki extends te {
  constructor(n) {
    super(n);
    H(this, "key", "continuous");
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const n = this.selection();
    return Z.isCollapsed(n) ? (D.emit(M.ERROR, "请选择多个中文字符或者多个多个英文单词"), !0) : J.string(this.editor, n).length < 2;
  }
  exec() {
    if (this.isDisabled())
      return;
    const n = this.getValue();
    if (n == null)
      return;
    const r = {
      type: "ssml-w",
      domId: this.genDomID(),
      children: [{ text: n }],
      remark: "连读",
      bgColor: "continuous"
    };
    N.delete(this.editor), N.insertNodes(this.editor, r), ee(this.editor, "ssml-w", r.domId, (o) => {
      N.unwrapNodes(this.editor, { at: o[1] });
    });
  }
}
const _n = /* @__PURE__ */ A({
  setup() {
    const e = G();
    function t(n) {
      e.value ?? (e.value = new ki(n)), e.value.exec();
    }
    return () => u(F, {
      text: "连读",
      icon: "continuous",
      onClick: t
    }, null);
  }
});
class Ai extends te {
  constructor() {
    super(...arguments);
    H(this, "key", "read");
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const n = this.selection();
    return n == null ? !0 : Z.isCollapsed(n) ? (D.emit(M.ERROR, "请先选择文本"), !0) : !1;
  }
  exec(n) {
    if (this.isDisabled())
      return;
    const r = this.getValue();
    if (r == null)
      return;
    const o = {
      type: "ssml-w",
      domId: this.genDomID(),
      phoneme: n.value,
      remark: n.label,
      value: r,
      bgColor: "read",
      children: [{ text: r }]
    };
    N.delete(this.editor), N.insertNodes(this.editor, o), ee(
      this.editor,
      "ssml-w",
      o.domId,
      (i) => Le(this.editor, i, () => r)
    );
  }
}
const Li = [{
  label: "重音",
  value: "重"
}, {
  label: "拖音",
  value: "拖"
}, {
  label: "重音+拖音",
  value: "重+拖"
}], bn = /* @__PURE__ */ A({
  setup() {
    const e = G(), t = w(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function r() {
      t.value && (t.value = !1);
    }
    function o(i) {
      e.value ?? (e.value = new Ai(i)), !e.value.isDisabled() && n();
    }
    return () => u(re, {
      visible: t.value,
      "onUpdate:visible": (i) => t.value = i,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => u(F, {
        text: "重音",
        icon: "read",
        onClick: o
      }, null),
      default: () => u("div", {
        class: "d-flex flex-column",
        onMousedown: X(() => {
        }, ["stop", "prevent"])
      }, [Li.map(({
        label: i,
        value: s
      }) => u("div", {
        key: s,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && e.value.exec({
            label: i,
            value: s
          }), r();
        },
        onMousedown: X(() => {
        }, ["stop", "prevent"])
      }, [i]))])
    });
  }
});
class Bi extends te {
  constructor(n) {
    super(n);
    H(this, "key", "digital");
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const n = this.selection();
    if (Z.isCollapsed(n))
      return D.emit(M.ERROR, "请选择纯数字文本"), !0;
    const r = J.string(this.editor, n);
    return !!(r.length <= 0 || Number.isNaN(Number(r)));
  }
  exec(n) {
    if (this.isDisabled())
      return;
    const r = this.getValue();
    if (r == null)
      return;
    const o = {
      type: "ssml-say-as",
      domId: this.genDomID(),
      interpretAs: n.value,
      remark: n.label,
      bgColor: "digital",
      children: [{ text: r }]
    };
    N.delete(this.editor), N.insertNodes(this.editor, o), ee(this.editor, "ssml-say-as", o.domId, (i) => {
      N.unwrapNodes(this.editor, { at: i[1] });
    });
  }
}
const Ni = [{
  value: "value",
  label: "读数值"
}, {
  value: "digits",
  label: "读数字"
}, {
  value: "telephone",
  label: "读手机号"
}], gn = /* @__PURE__ */ A({
  setup() {
    const e = G(), t = w(!1);
    function n() {
      t.value = !t.value;
    }
    function r(o) {
      e.value ?? (e.value = new Bi(o)), !e.value.isDisabled() && n();
    }
    return () => u(re, {
      visible: t.value,
      "onUpdate:visible": (o) => t.value = o,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => u(F, {
        text: "数字符号",
        icon: "digital",
        onClick: r
      }, null),
      default: () => u("div", {
        class: "d-flex flex-column"
      }, [Ni.map(({
        label: o,
        value: i
      }) => u("div", {
        key: i,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && e.value.exec({
            label: o,
            value: i
          }), n();
        },
        onMousedown: X(() => {
        }, ["stop", "prevent"])
      }, [o]))])
    });
  }
});
class Pi extends te {
  constructor(n) {
    super(n);
    H(this, "key", "alias");
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const n = this.selection();
    return Z.isCollapsed(n) ? (D.emit(M.ERROR, "选中一个中文字符，并且有不能在其他语句之内"), !0) : J.string(this.editor, n).length <= 0;
  }
  exec(n) {
    if (this.isDisabled())
      return;
    const r = this.getValue();
    if (r == null)
      return;
    const o = {
      type: "ssml-sub",
      domId: this.genDomID(),
      remark: `(${n.label})`,
      alias: n.value,
      value: r,
      bgColor: "alias",
      children: [{ text: "" }]
    };
    N.delete(this.editor), N.insertNodes(this.editor, o), ee(
      this.editor,
      "ssml-sub",
      o.domId,
      (i) => Le(this.editor, i, (s) => s.value)
    );
  }
}
const yn = /* @__PURE__ */ A({
  setup() {
    const e = G(), t = w(), n = w(!1);
    function r() {
      n.value || (n.value = !0);
    }
    function o() {
      n.value && (n.value = !1);
    }
    async function i(a) {
      e.value ?? (e.value = new Pi(a)), !e.value.isDisabled() && (e.value.record(), r(), t.value.focus());
    }
    function s(a) {
      var l, v;
      o(), a && ((l = e.value) == null || l.restore(), (v = e.value) == null || v.exec({
        value: a,
        label: a
      }));
    }
    return () => u(re, {
      visible: n.value,
      "onUpdate:visible": (a) => n.value = a,
      trigger: "contextmenu",
      placement: "right-end",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => u(F, {
        text: "别名",
        icon: "alias",
        onClick: i
      }, null),
      default: () => u(rt, {
        ref: t,
        onSubmit: s
      }, null)
    });
  }
});
function Vi(e) {
  const { selection: t } = e;
  if (t) {
    const [n, r] = Z.edges(t), o = J.range(e, n, r), i = J.string(e, o), s = i.trimEnd();
    if (s !== i) {
      const a = i.length - s.length, l = { ...r, offset: r.offset - a }, v = { ...t, anchor: n, focus: l };
      N.select(e, v);
    }
  }
}
class Ui extends te {
  constructor(n) {
    super(n);
    H(this, "key", "english");
  }
  getValue() {
    return super.getValue();
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const n = this.selection();
    if (Z.isCollapsed(n))
      return !0;
    const r = J.string(this.editor, n);
    return r.length <= 0 ? !0 : /^[A-Za-z]+$/gi.test(r) ? !1 : (D.emit(M.ERROR, "请选择英文单词"), !0);
  }
  exec(n) {
    if (this.isDisabled())
      return;
    const r = this.getValue();
    if (r == null)
      return;
    const o = {
      type: "ssml-p",
      domId: this.genDomID(),
      word: r,
      phoneme: n.value,
      remark: n.label,
      bgColor: "english",
      children: [{ text: "" }]
    };
    N.delete(this.editor), N.insertNodes(this.editor, o), this.editor.move(1), ee(
      this.editor,
      "ssml-p",
      o.domId,
      (i) => Le(this.editor, i, (s) => s.word)
    );
  }
}
const wn = /* @__PURE__ */ A({
  setup() {
    const e = G(), t = Re(be.EDITORCONFIG), n = w([]), r = w(!1);
    function o() {
      r.value || (r.value = !0);
    }
    function i() {
      r.value && (r.value = !1);
    }
    async function s(a) {
      if (e.value ?? (e.value = new Ui(a)), Vi(a), e.value.isDisabled())
        return;
      const l = e.value.getValue();
      if (l) {
        if (n.value = await t.fetchEnglish(l), n.value.length <= 0)
          return D.emit(M.ERROR, "找不到单词的音标");
        o();
      }
    }
    return () => u(re, {
      visible: r.value,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => u(F, {
        text: "音标",
        icon: "english",
        onClick: s
      }, null),
      default: () => u("div", {
        class: "d-flex flex-column"
      }, [n.value.map(({
        label: a,
        value: l
      }) => u("div", {
        key: l,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && e.value.exec({
            label: a,
            value: l
          }), i();
        },
        onMousedown: X(() => {
        }, ["stop", "prevent"])
      }, [a]))])
    });
  }
});
class Fi extends te {
  constructor(n) {
    super(n);
    H(this, "key", "changespeed");
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const n = this.selection();
    return n == null ? !0 : Z.isCollapsed(n) ? (D.emit(M.ERROR, "请框选要变音的句子"), !0) : !1;
  }
  exec(n) {
    if (this.isDisabled())
      return;
    const r = this.getValue();
    if (r == null)
      return;
    const o = {
      type: "ssml-prosody",
      domId: this.genDomID(),
      remark: n.label,
      rate: n.value,
      bgColor: "changespeed",
      children: [{ text: r }]
    };
    N.delete(this.editor), N.insertNodes(this.editor, o), ee(this.editor, "ssml-prosody", o.domId, (i) => {
      N.unwrapNodes(this.editor, { at: i[1] });
    });
  }
}
const ji = [{
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
}], xn = /* @__PURE__ */ A({
  setup() {
    const e = G(), t = w(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function r() {
      t.value && (t.value = !1);
    }
    async function o(i) {
      e.value ?? (e.value = new Fi(i)), !e.value.isDisabled() && n();
    }
    return () => u(re, {
      style: {
        padding: "0px"
      },
      visible: t.value,
      "onUpdate:visible": (i) => t.value = i,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => u(F, {
        text: "局部变速",
        icon: "changespeed",
        onClick: o
      }, null),
      default: () => u("div", {
        class: "d-flex flex-column overflow-x-hidden overflow-y-scroll",
        style: "height:15rem"
      }, [ji.map(({
        label: i,
        value: s
      }) => u("div", {
        key: s,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          var a;
          (a = e.value) == null || a.exec({
            label: i,
            value: s
          }), r();
        },
        onMousedown: X(() => {
        }, ["stop", "prevent"])
      }, [i]))])
    });
  }
});
class Gi extends te {
  constructor(n) {
    super(n);
    H(this, "key", "rhythm");
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const n = this.selection();
    return Z.isExpanded(n) ? (D.emit(M.ERROR, "不能选中文本"), !0) : !1;
  }
  exec(n) {
    if (this.isDisabled())
      return;
    const r = {
      type: "ssml-break",
      domId: this.genDomID(),
      time: n.value,
      remark: n.label,
      bgColor: "rhythm",
      children: [{ text: "" }]
    };
    N.insertNodes(this.editor, r), this.editor.move(1), ee(this.editor, "ssml-break", r.domId, (o) => {
      N.delete(this.editor, { at: o[1] });
    });
  }
}
const Wi = [{
  value: "200ms",
  label: "短"
}, {
  value: "300ms",
  label: "中"
}, {
  value: "500ms",
  label: "长"
}], En = /* @__PURE__ */ A({
  setup() {
    const e = G(), t = w(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function r() {
      t.value && (t.value = !1);
    }
    function o(i) {
      e.value ?? (e.value = new Gi(i)), !e.value.isDisabled() && n();
    }
    return () => u(re, {
      visible: t.value,
      "onUpdate:visible": (i) => t.value = i,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => u(F, {
        text: "停顿调节",
        icon: "rhythm",
        onClick: o
      }, null),
      default: () => u("div", {
        class: "d-flex flex-column"
      }, [Wi.map(({
        label: i,
        value: s
      }) => u("div", {
        key: s,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && e.value.exec({
            label: i,
            value: s
          }), r();
        },
        onMousedown: X(() => {
        }, ["stop", "prevent"])
      }, [i]))])
    });
  }
});
class Ki extends te {
  constructor(n) {
    super(n);
    H(this, "key", "special");
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const n = this.selection();
    return Z.isExpanded(n) ? (D.emit(M.ERROR, "不能框选文字"), !0) : !1;
  }
  exec(n) {
    if (this.isDisabled() || this.getValue() == null)
      return;
    const o = {
      type: "ssml-audio",
      domId: this.genDomID(),
      src: n.value,
      remark: n.label,
      bgColor: "special",
      children: [{ text: "" }]
    };
    N.insertNodes(this.editor, o), this.editor.move(1), ee(
      this.editor,
      "ssml-audio",
      o.domId,
      (i) => N.delete(this.editor, { at: i[1] })
    ), $i(
      this.editor,
      "ssml-audio",
      o.domId,
      (i) => mn(i[0].src)
    );
  }
}
const Sn = /* @__PURE__ */ A({
  __name: "special-menu",
  setup(e) {
    const t = w(), n = G(), { x: r, y: o, height: i } = xe(t), s = (l) => {
      if (n.value ?? (n.value = new Ki(l)), n.value.isDisabled())
        return !1;
      n.value.record(), D.emit(M.SPECIAL_MENU_CLICK, {
        x: r.value - 200,
        y: o.value + i.value
      });
    };
    function a(l) {
      n.value && !n.value.isDisabled() && (n.value.restore(), n.value.exec(l));
    }
    return j(() => {
      D.on(M.SPECIAL_DRAG_BOX_SUBMIT, a);
    }), q(() => {
      D.off(M.SPECIAL_DRAG_BOX_SUBMIT, a);
    }), (l, v) => (k(), U(y(F), {
      ref_key: "menuRef",
      ref: t,
      text: "音效",
      icon: "special",
      onClick: s
    }, null, 512));
  }
}), On = /* @__PURE__ */ A({
  __name: "special-drag-box",
  setup(e) {
    const t = w(!1), n = w({ x: 20, y: 20 }), r = { first: "默认音效", second: "自定义音效", last: "最近音效" }, o = [
      { value: "", label: "全部场景" },
      { value: "2", label: "场景2" },
      { value: "3", label: "场景3" }
    ], i = [
      { value: "", label: "全部风格" },
      { value: "2", label: "风格2" },
      { value: "3", label: "风格3" }
    ], s = w();
    j(() => {
      D.on(M.SPECIAL_MENU_CLICK, l);
    }), q(() => {
      D.off(M.SPECIAL_MENU_CLICK, l);
    });
    function a(d) {
      return Promise.resolve([
        {
          value: "https://download.samplelib.com/wav/sample-3s.wav#1",
          label: `${d.search || "测试"}音效1`
        },
        {
          value: "https://download.samplelib.com/wav/sample-3s.wav#2",
          label: `${d.menuKey || "测试"}音效2`
        },
        {
          value: "https://download.samplelib.com/wav/sample-3s.wav#3",
          label: `${d.scene || "测试"}音效3`
        },
        {
          value: "https://download.samplelib.com/wav/sample-3s.wav#4",
          label: `${d.style || "测试"}音效4`
        }
      ]);
    }
    async function l(d) {
      n.value = d, t.value = !0, s.value ?? (s.value = await a({ search: "", menuKey: "first", scene: "", style: "" }));
    }
    function v(d) {
      t.value = !1, D.emit(M.SPECIAL_DRAG_BOX_SUBMIT, d);
    }
    return (d, f) => (k(), U(y(ye), {
      visible: t.value,
      "onUpdate:visible": f[0] || (f[0] = (m) => t.value = m),
      position: n.value,
      "onUpdate:position": f[1] || (f[1] = (m) => n.value = m)
    }, {
      default: h(() => [
        u(y(ge), {
          menuItemLabel: r,
          scenes: o,
          styles: i,
          dataList: s.value,
          fetch: a,
          onSubmit: v
        }, null, 8, ["dataList"])
      ]),
      _: 1
    }, 8, ["visible", "position"]));
  }
});
class Hi extends te {
  constructor() {
    super(...arguments);
    H(this, "key", "mute");
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const n = this.selection();
    return Z.isExpanded(n) ? (D.emit(M.ERROR, "不能选中文本"), !0) : !1;
  }
  exec(n) {
    if (this.isDisabled())
      return;
    const r = {
      type: "ssml-break",
      domId: this.genDomID(),
      time: n.value,
      remark: n.label,
      bgColor: "mute",
      children: [{ text: "" }]
    };
    N.insertNodes(this.editor, r), this.editor.move(1), ee(this.editor, "ssml-break", r.domId, (o) => {
      N.delete(this.editor, { at: o[1] });
    });
  }
}
const zi = [{
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
}], Cn = /* @__PURE__ */ A({
  setup() {
    const e = G(), t = w(!1), n = w();
    function r() {
      t.value || (t.value = !0);
    }
    function o() {
      t.value && (t.value = !1);
    }
    function i(a) {
      e.value ?? (e.value = new Hi(a)), !e.value.isDisabled() && (r(), e.value.record(), n.value.focus());
    }
    function s(a) {
      var l, v;
      o(), a && ((l = e.value) == null || l.restore(), (v = e.value) == null || v.exec({
        value: a,
        label: a
      }));
    }
    return () => u(re, {
      visible: t.value,
      "onUpdate:visible": (a) => t.value = a,
      trigger: "contextmenu",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => u(F, {
        text: "插入静音",
        icon: "mute",
        onClick: i
      }, null),
      default: () => u("div", {
        class: "d-flex flex-column"
      }, [zi.map(({
        value: a,
        label: l
      }) => u("div", {
        key: a,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => s(a),
        onMousedown: X(() => {
        }, ["stop", "prevent"])
      }, [l])), u(rt, {
        type: "number",
        ref: n,
        onSubmit: s
      }, null)])
    });
  }
}), In = /* @__PURE__ */ A({
  __name: "bgm-menu",
  setup(e) {
    const t = w(), n = G(), { x: r, y: o, height: i } = xe(t), s = (l) => {
      n.value = l, D.emit(M.BGM_MENU_CLICK, {
        x: r.value - 200,
        y: o.value + i.value
      });
    };
    function a(l) {
      var v;
      (v = n.value) == null || v.emit(fe.UPDATE_BGM, l);
    }
    return j(() => {
      D.on(M.BGM_DRAG_BOX_SUBMIT, a);
    }), q(() => {
      D.off(M.BGM_DRAG_BOX_SUBMIT, a);
    }), (l, v) => (k(), U(y(F), {
      ref_key: "menuRef",
      ref: t,
      text: "配乐",
      icon: "bgm",
      onClick: s
    }, null, 512));
  }
}), $n = /* @__PURE__ */ A({
  __name: "bgm-drag-box",
  setup(e) {
    const t = w(!1), n = w({ x: 20, y: 20 }), r = { first: "默认配乐", second: "自定义配乐", last: "最近配乐" }, o = [
      { value: "", label: "全部场景" },
      { value: "2", label: "场景2" },
      { value: "3", label: "场景3" }
    ], i = [
      { value: "", label: "全部风格" },
      { value: "2", label: "风格2" },
      { value: "3", label: "风格3" }
    ], s = w();
    j(() => {
      D.on(M.BGM_MENU_CLICK, l);
    }), q(() => {
      D.off(M.BGM_MENU_CLICK, l);
    });
    function a(d) {
      return Promise.resolve([
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#1",
          label: `${d.search || "测试"}背景音乐1`
        },
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#2",
          label: `${d.menuKey || "测试"}背景音乐2`
        },
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#3",
          label: `${d.scene || "测试"}背景音乐3`
        },
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#4",
          label: `${d.style || "测试"}背景音乐4`
        }
      ]);
    }
    async function l(d) {
      n.value = d, t.value = !0, s.value ?? (s.value = await a({ search: "", menuKey: "first", scene: "", style: "" }));
    }
    function v(d) {
      t.value = !1, D.emit(M.BGM_DRAG_BOX_SUBMIT, d);
    }
    return (d, f) => (k(), U(y(ye), {
      visible: t.value,
      "onUpdate:visible": f[0] || (f[0] = (m) => t.value = m),
      position: n.value,
      "onUpdate:position": f[1] || (f[1] = (m) => n.value = m)
    }, {
      default: h(() => [
        u(y(ge), {
          menuItemLabel: r,
          scenes: o,
          styles: i,
          dataList: s.value,
          fetch: a,
          onSubmit: v
        }, null, 8, ["dataList"])
      ]),
      _: 1
    }, 8, ["visible", "position"]));
  }
}), Mn = /* @__PURE__ */ A({
  __name: "sensitive-menu",
  setup(e) {
    const t = w(), n = G(), { x: r, y: o, height: i } = xe(t), s = (l) => {
      n.value = l, D.emit(M.SENSITIVE_MENU_CLICK, {
        x: r.value - 200,
        y: o.value + i.value
      });
    };
    function a(l) {
      console.log(l);
    }
    return j(() => {
      D.on(M.SENSITIVE_DRAG_BOX_SUBMIT, a);
    }), q(() => {
      D.off(M.SENSITIVE_DRAG_BOX_SUBMIT, a);
    }), (l, v) => (k(), U(y(F), {
      ref_key: "menuRef",
      ref: t,
      text: "敏感词",
      icon: "sensitive",
      onClick: s
    }, null, 512));
  }
}), Dn = /* @__PURE__ */ A({
  __name: "sensitive-drag-box",
  setup(e) {
    const t = w(!1), n = w({ x: 20, y: 20 }), r = { first: "默认配乐", second: "自定义配乐", last: "最近配乐" }, o = [
      { value: "", label: "全部场景" },
      { value: "2", label: "场景2" },
      { value: "3", label: "场景3" }
    ], i = [
      { value: "", label: "全部风格" },
      { value: "2", label: "风格2" },
      { value: "3", label: "风格3" }
    ], s = w();
    j(() => {
      D.on(M.SENSITIVE_MENU_CLICK, l);
    }), q(() => {
      D.off(M.SENSITIVE_MENU_CLICK, l);
    });
    function a(d) {
      return Promise.resolve([
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#1",
          label: `${d.search || "测试"}背景音乐1`
        },
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#2",
          label: `${d.menuKey || "测试"}背景音乐2`
        },
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#3",
          label: `${d.scene || "测试"}背景音乐3`
        },
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#4",
          label: `${d.style || "测试"}背景音乐4`
        }
      ]);
    }
    async function l(d) {
      n.value = d, t.value = !0, s.value ?? (s.value = await a({ search: "", menuKey: "first", scene: "", style: "" }));
    }
    function v(d) {
      t.value = !1, D.emit(M.SENSITIVE_DRAG_BOX_SUBMIT, d);
    }
    return (d, f) => (k(), U(y(ye), {
      visible: t.value,
      "onUpdate:visible": f[0] || (f[0] = (m) => t.value = m),
      position: n.value,
      "onUpdate:position": f[1] || (f[1] = (m) => n.value = m)
    }, {
      default: h(() => [
        u(y(ge), {
          menuItemLabel: r,
          scenes: o,
          styles: i,
          dataList: s.value,
          fetch: a,
          onSubmit: v
        }, null, 8, ["dataList"])
      ]),
      _: 1
    }, 8, ["visible", "position"]));
  }
}), Rn = /* @__PURE__ */ A({
  __name: "management-menu",
  setup(e) {
    const t = w(), n = G(), { x: r, y: o, height: i } = xe(t), s = (l) => {
      n.value = l, D.emit(M.MANAGEMENT_MENU_CLICK, {
        x: r.value - 200,
        y: o.value + i.value
      });
    };
    function a(l) {
      console.log(l);
    }
    return j(() => {
      D.on(M.MANAGEMENT_DRAG_BOX_SUBMIT, a);
    }), q(() => {
      D.off(M.MANAGEMENT_DRAG_BOX_SUBMIT, a);
    }), (l, v) => (k(), U(y(F), {
      ref_key: "menuRef",
      ref: t,
      text: "多人配音",
      icon: "management",
      onClick: s
    }, null, 512));
  }
}), Tn = /* @__PURE__ */ A({
  __name: "management-drag-box",
  setup(e) {
    const t = w(!1), n = w({ x: 20, y: 20 }), r = { first: "默认配乐", second: "自定义配乐", last: "最近配乐" }, o = [
      { value: "", label: "全部场景" },
      { value: "2", label: "场景2" },
      { value: "3", label: "场景3" }
    ], i = [
      { value: "", label: "全部风格" },
      { value: "2", label: "风格2" },
      { value: "3", label: "风格3" }
    ], s = w();
    j(() => {
      D.on(M.MANAGEMENT_MENU_CLICK, l);
    }), q(() => {
      D.off(M.MANAGEMENT_MENU_CLICK, l);
    });
    function a(d) {
      return Promise.resolve([
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#1",
          label: `${d.search || "测试"}背景音乐1`
        },
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#2",
          label: `${d.menuKey || "测试"}背景音乐2`
        },
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#3",
          label: `${d.scene || "测试"}背景音乐3`
        },
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#4",
          label: `${d.style || "测试"}背景音乐4`
        }
      ]);
    }
    async function l(d) {
      n.value = d, t.value = !0, s.value ?? (s.value = await a({ search: "", menuKey: "first", scene: "", style: "" }));
    }
    function v(d) {
      t.value = !1, D.emit(M.MANAGEMENT_DRAG_BOX_SUBMIT, d);
    }
    return (d, f) => (k(), U(y(ye), {
      visible: t.value,
      "onUpdate:visible": f[0] || (f[0] = (m) => t.value = m),
      position: n.value,
      "onUpdate:position": f[1] || (f[1] = (m) => n.value = m)
    }, {
      default: h(() => [
        u(y(ge), {
          menuItemLabel: r,
          scenes: o,
          styles: i,
          dataList: s.value,
          fetch: a,
          onSubmit: v
        }, null, 8, ["dataList"])
      ]),
      _: 1
    }, 8, ["visible", "position"]));
  }
}), kn = /* @__PURE__ */ A({
  __name: "conversion-menu",
  setup(e) {
    const t = w(), n = G(), { x: r, y: o, height: i } = xe(t), s = (l) => {
      n.value = l, D.emit(M.CONVERSION_MENU_CLICK, {
        x: r.value - 200,
        y: o.value + i.value
      });
    };
    function a(l) {
      console.log(l);
    }
    return j(() => {
      D.on(M.CONVERSION_DRAG_BOX_SUBMIT, a);
    }), q(() => {
      D.off(M.CONVERSION_DRAG_BOX_SUBMIT, a);
    }), (l, v) => (k(), U(y(F), {
      ref_key: "menuRef",
      ref: t,
      text: "局部变音",
      icon: "conversion",
      onClick: s
    }, null, 512));
  }
}), An = /* @__PURE__ */ A({
  __name: "conversion-drag-box",
  setup(e) {
    const t = w(!1), n = w({ x: 20, y: 20 }), r = { first: "默认配乐", second: "自定义配乐", last: "最近配乐" }, o = [
      { value: "", label: "全部场景" },
      { value: "2", label: "场景2" },
      { value: "3", label: "场景3" }
    ], i = [
      { value: "", label: "全部风格" },
      { value: "2", label: "风格2" },
      { value: "3", label: "风格3" }
    ], s = w();
    j(() => {
      D.on(M.CONVERSION_MENU_CLICK, l);
    }), q(() => {
      D.off(M.CONVERSION_MENU_CLICK, l);
    });
    function a(d) {
      return Promise.resolve([
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#1",
          label: `${d.search || "测试"}背景音乐1`
        },
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#2",
          label: `${d.menuKey || "测试"}背景音乐2`
        },
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#3",
          label: `${d.scene || "测试"}背景音乐3`
        },
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#4",
          label: `${d.style || "测试"}背景音乐4`
        }
      ]);
    }
    async function l(d) {
      n.value = d, t.value = !0, s.value ?? (s.value = await a({ search: "", menuKey: "first", scene: "", style: "" }));
    }
    function v(d) {
      t.value = !1, D.emit(M.CONVERSION_DRAG_BOX_SUBMIT, d);
    }
    return (d, f) => (k(), U(y(ye), {
      visible: t.value,
      "onUpdate:visible": f[0] || (f[0] = (m) => t.value = m),
      position: n.value,
      "onUpdate:position": f[1] || (f[1] = (m) => n.value = m)
    }, {
      default: h(() => [
        u(y(ge), {
          menuItemLabel: r,
          scenes: o,
          styles: i,
          dataList: s.value,
          fetch: a,
          onSubmit: v
        }, null, 8, ["dataList"])
      ]),
      _: 1
    }, 8, ["visible", "position"]));
  }
}), Xi = (e) => (he("data-v-4d512c0b"), e = e(), _e(), e), qi = { class: "anchor-avatar d-flex flex-column justify-content-center align-items-center" }, Yi = ["src"], Qi = /* @__PURE__ */ Xi(() => /* @__PURE__ */ C("div", { class: "anchor-avatar-name text-white" }, "膜厚渊", -1)), Zi = /* @__PURE__ */ A({
  __name: "try-play-circle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = w(`
  https://mobvoi-speech-public.mobvoi.com/headerImage/4314c841777e4d20901cd5d04a28e91a.png?iopcmd=thumbnail&type=8&width=80&height=80`), r = w(), o = w(0), i = w(0), { style: s } = rn(
      r,
      Ae(r, {
        onStart: (d, f) => v(f.clientX, f.clientY) ? !1 : void 0
      })
    );
    function a(d) {
      v(d.clientX, d.clientY) && t("update:visible", !1);
    }
    function l(d) {
      o.value = d.clientX, i.value = d.clientY;
    }
    function v(d, f) {
      return d > o.value - 10 && d < o.value + 10 && f > i.value - 10 && f < i.value + 10;
    }
    return (d, f) => Je((k(), V("div", {
      ref_key: "boxRef",
      ref: r,
      class: "try-play-circel user-select-none rounded-circle overflow-hidden",
      style: Te([y(s), { position: "fixed" }]),
      onMousedown: l,
      onMouseup: a
    }, [
      C("div", qi, [
        C("img", {
          src: n.value,
          class: "rounded-circle"
        }, null, 8, Yi),
        Qi
      ])
    ], 36)), [
      [et, d.visible]
    ]);
  }
});
const Ji = /* @__PURE__ */ K(Zi, [["__scopeId", "data-v-4d512c0b"]]), es = (e) => (he("data-v-e2d2a636"), e = e(), _e(), e), ts = { class: "anchor-avatar d-flex flex-column justify-content-center" }, ns = ["src"], rs = /* @__PURE__ */ es(() => /* @__PURE__ */ C("div", { class: "anchor-avatar-name text-white" }, "膜厚渊", -1)), os = /* @__PURE__ */ A({
  __name: "anchor-avatar",
  setup(e) {
    const t = w(`
  https://mobvoi-speech-public.mobvoi.com/headerImage/4314c841777e4d20901cd5d04a28e91a.png?iopcmd=thumbnail&type=8&width=80&height=80`);
    return (n, r) => (k(), V("div", ts, [
      C("img", {
        src: t.value,
        class: "rounded-circle"
      }, null, 8, ns),
      rs
    ]));
  }
});
const is = /* @__PURE__ */ K(os, [["__scopeId", "data-v-e2d2a636"]]), ss = { class: "anchor-list w-100 d-flex flex-row flex-wrap justify-content-between align-content-start overflow-x-hidden overflow-y-auto" }, ls = /* @__PURE__ */ A({
  __name: "anchor-list",
  setup(e) {
    return (t, n) => (k(), V("div", ss, [
      (k(), V(ve, null, Ee(100, (r, o) => u(is, { key: o })), 64))
    ]));
  }
});
const as = /* @__PURE__ */ K(ls, [["__scopeId", "data-v-3c347263"]]), us = /* @__PURE__ */ A({
  __name: "tag-item",
  props: {
    isActivate: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (k(), V("div", {
      class: Ie(["tag-item p-2 text-white", [t.isActivate ? "activate" : null]])
    }, [
      se(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const I = /* @__PURE__ */ K(us, [["__scopeId", "data-v-fe47427c"]]), cs = { class: "tag-list w-100" }, ds = { class: "w-100 d-flex flex-row" }, fs = { class: "tag-list-body w-100 d-flex flex-row flex-wrap align-items-start overflow-y-auto overflow-x-hidden" }, ps = /* @__PURE__ */ A({
  __name: "tag-list",
  setup(e) {
    return (t, n) => (k(), V("div", cs, [
      C("div", ds, [
        u(I, null, {
          default: h(() => [
            S("全部")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("男声")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("女声")
          ]),
          _: 1
        })
      ]),
      C("div", fs, [
        u(I, null, {
          default: h(() => [
            S("全部")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("影视")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("情感")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("娱乐")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("快板")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("书单")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("名人")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("角色")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("全部")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("影视")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("情感")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("娱乐")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("快板")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("书单")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("名人")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("角色")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("全部")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("影视")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("情感")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("娱乐")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("快板")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("书单")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("名人")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("角色")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("全部")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("影视")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("情感")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("娱乐")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("快板")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("书单")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("名人")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("角色")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("全部")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("影视")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("情感")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("娱乐")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("快板")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("书单")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("名人")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("角色")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("全部")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("影视")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("情感")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("娱乐")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("快板")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("书单")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("名人")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            S("角色")
          ]),
          _: 1
        })
      ])
    ]));
  }
});
const vs = /* @__PURE__ */ K(ps, [["__scopeId", "data-v-4d21bc70"]]);
const Ln = (e) => (he("data-v-e826b02c"), e = e(), _e(), e), ms = { class: "try-play-header d-flex flex-row justify-content-between align-items-center" }, hs = { class: "try-play-body w-100 h-100 d-flex flex-row" }, _s = { class: "try-play-left w-50" }, bs = { class: "type-list d-flex flex-row border-bottom border-secondary" }, gs = /* @__PURE__ */ Ln(() => /* @__PURE__ */ C("div", { class: "py-1" }, null, -1)), ys = /* @__PURE__ */ Ln(() => /* @__PURE__ */ C("div", { class: "try-play-right border border-secondary w-50" }, "right", -1)), ws = /* @__PURE__ */ A({
  __name: "try-play-panle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = w(""), r = w(), o = w(), { style: i } = rn(
      r,
      Ae(o, {
        onStart: () => {
        },
        onEnd: () => {
        }
      })
    );
    function s() {
      t("update:visible", !1);
    }
    return (a, l) => Je((k(), V("div", {
      ref_key: "boxRef",
      ref: r,
      style: Te([y(i), { position: "fixed" }]),
      class: "try-play user-select-none card z-3 shadow px-2 pb-2"
    }, [
      C("div", ms, [
        C("div", {
          ref_key: "handleRef",
          ref: o,
          class: "w-100 h-100"
        }, null, 512),
        C("div", {
          onClick: s,
          class: "px-2 py-1 try-play-menu-close"
        }, [
          u(y(er), { color: "white" }, {
            default: h(() => [
              u(y(or))
            ]),
            _: 1
          })
        ])
      ]),
      C("div", null, [
        C("div", hs, [
          C("div", _s, [
            C("div", null, [
              u(y(tt), {
                onSubmit: l[1] || (l[1] = X(() => {
                }, ["prevent"]))
              }, {
                default: h(() => [
                  u(y(nt), {
                    modelValue: n.value,
                    "onUpdate:modelValue": l[0] || (l[0] = (v) => n.value = v),
                    placeholder: "输入名称搜索"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            C("div", bs, [
              u(I, null, {
                default: h(() => [
                  S("热榜")
                ]),
                _: 1
              }),
              u(I, null, {
                default: h(() => [
                  S("SVIP")
                ]),
                _: 1
              }),
              u(I, null, {
                default: h(() => [
                  S("付费")
                ]),
                _: 1
              })
            ]),
            u(vs),
            gs,
            u(as)
          ]),
          ys
        ])
      ])
    ], 4)), [
      [et, a.visible]
    ]);
  }
});
const xs = /* @__PURE__ */ K(ws, [["__scopeId", "data-v-e826b02c"]]), Bn = /* @__PURE__ */ A({
  __name: "try-play",
  setup(e) {
    const t = w(!0);
    function n(r) {
      r || (t.value = !0);
    }
    return (r, o) => (k(), U(Ze, { to: "body" }, [
      u(Ji, {
        visible: t.value,
        "onUpdate:visible": o[0] || (o[0] = (i) => t.value = i)
      }, null, 8, ["visible"]),
      u(xs, {
        visible: !t.value,
        "onUpdate:visible": n
      }, null, 8, ["visible"])
    ]));
  }
});
const Es = {
  install: (e) => {
    e.component("SpeakerMenu", hn), e.component("ContinuousMenu", _n), e.component("ReadMenu", bn), e.component("DigitalMenu", gn), e.component("AliasMenu", yn), e.component("EnglishMenu", wn), e.component("ChangespeedMenu", xn), e.component("RhythmMenu", En), e.component("SpecialMenu", Sn), e.component("SpecialDragBox", On), e.component("MuteMenu", Cn), e.component("BgmMenu", In), e.component("BgmDragBox", $n), e.component("SensitiveMenu", Mn), e.component("SensitiveDragBox", Dn), e.component("ManagementMenu", Rn), e.component("ManagementDragBox", Tn), e.component("ConversionMenu", kn), e.component("ConversionDragBox", An), e.component("TryPlay", Bn);
  }
};
var Ye = { exports: {} }, Qe = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.ParsingError = void 0;
  class n extends Error {
    constructor(E, $) {
      super(E), this.cause = $;
    }
  }
  t.ParsingError = n;
  let r;
  function o() {
    return l(!1) || m() || f() || d();
  }
  function i() {
    return c(/\s*/), l(!0) || f() || v() || a(!1);
  }
  function s() {
    const _ = a(!0), E = [];
    let $, g = i();
    for (; g; ) {
      if (g.node.type === "Element") {
        if ($)
          throw new Error("Found multiple root nodes");
        $ = g.node;
      }
      g.excluded || E.push(g.node), g = i();
    }
    if (!$)
      throw new n("Failed to parse XML", "Root Element not found");
    if (r.xml.length !== 0)
      throw new n("Failed to parse XML", "Not Well-Formed XML");
    return {
      declaration: _ ? _.node : null,
      root: $,
      children: E
    };
  }
  function a(_) {
    const E = c(_ ? /^<\?(xml)\s*/ : /^<\?([\w-:.]+)\s*/);
    if (!E)
      return;
    const $ = {
      name: E[1],
      type: "ProcessingInstruction",
      attributes: {}
    };
    for (; !(b() || O("?>")); ) {
      const g = x();
      if (g)
        $.attributes[g.name] = g.value;
      else
        return;
    }
    return c(/\?>/), {
      excluded: _ ? !1 : r.options.filter($) === !1,
      node: $
    };
  }
  function l(_) {
    const E = c(/^<([^?!</>\s]+)\s*/);
    if (!E)
      return;
    const $ = {
      type: "Element",
      name: E[1],
      attributes: {},
      children: []
    }, g = _ ? !1 : r.options.filter($) === !1;
    for (; !(b() || O(">") || O("?>") || O("/>")); ) {
      const P = x();
      if (P)
        $.attributes[P.name] = P.value;
      else
        return;
    }
    if (c(/^\s*\/>/))
      return $.children = null, {
        excluded: g,
        node: $
      };
    c(/\??>/);
    let T = o();
    for (; T; )
      T.excluded || $.children.push(T.node), T = o();
    if (r.options.strictMode) {
      const P = `</${$.name}>`;
      if (r.xml.startsWith(P))
        r.xml = r.xml.slice(P.length);
      else
        throw new n("Failed to parse XML", `Closing tag not matching "${P}"`);
    } else
      c(/^<\/\s*[\w-:.\u00C0-\u00FF]+>/);
    return {
      excluded: g,
      node: $
    };
  }
  function v() {
    const _ = c(/^<!DOCTYPE\s+\S+\s+SYSTEM[^>]*>/) || c(/^<!DOCTYPE\s+\S+\s+PUBLIC[^>]*>/) || c(/^<!DOCTYPE\s+\S+\s*\[[^\]]*]>/) || c(/^<!DOCTYPE\s+\S+\s*>/);
    if (_) {
      const E = {
        type: "DocumentType",
        content: _[0]
      };
      return {
        excluded: r.options.filter(E) === !1,
        node: E
      };
    }
  }
  function d() {
    if (r.xml.startsWith("<![CDATA[")) {
      const _ = r.xml.indexOf("]]>");
      if (_ > -1) {
        const E = _ + 3, $ = {
          type: "CDATA",
          content: r.xml.substring(0, E)
        };
        return r.xml = r.xml.slice(E), {
          excluded: r.options.filter($) === !1,
          node: $
        };
      }
    }
  }
  function f() {
    const _ = c(/^<!--[\s\S]*?-->/);
    if (_) {
      const E = {
        type: "Comment",
        content: _[0]
      };
      return {
        excluded: r.options.filter(E) === !1,
        node: E
      };
    }
  }
  function m() {
    const _ = c(/^([^<]+)/);
    if (_) {
      const E = {
        type: "Text",
        content: _[1]
      };
      return {
        excluded: r.options.filter(E) === !1,
        node: E
      };
    }
  }
  function x() {
    const _ = c(/([^=]+)\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)\s*/);
    if (_)
      return {
        name: _[1].trim(),
        value: p(_[2].trim())
      };
  }
  function p(_) {
    return _.replace(/^['"]|['"]$/g, "");
  }
  function c(_) {
    const E = r.xml.match(_);
    if (E)
      return r.xml = r.xml.slice(E[0].length), E;
  }
  function b() {
    return r.xml.length === 0;
  }
  function O(_) {
    return r.xml.indexOf(_) === 0;
  }
  function R(_, E = {}) {
    _ = _.trim();
    const $ = E.filter || (() => !0);
    return r = {
      xml: _,
      options: Object.assign(Object.assign({}, E), { filter: $, strictMode: E.strictMode === !0 })
    }, s();
  }
  e.exports = R, t.default = R;
})(Qe, Qe.exports);
var Ss = Qe.exports;
(function(e, t) {
  var n = pe && pe.__importDefault || function(p) {
    return p && p.__esModule ? p : { default: p };
  };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const r = n(Ss);
  function o(p) {
    if (!p.options.indentation && !p.options.lineSeparator)
      return;
    p.content += p.options.lineSeparator;
    let c;
    for (c = 0; c < p.level; c++)
      p.content += p.options.indentation;
  }
  function i(p) {
    p.content = p.content.replace(/ +$/, "");
    let c;
    for (c = 0; c < p.level; c++)
      p.content += p.options.indentation;
  }
  function s(p, c) {
    p.content += c;
  }
  function a(p, c, b) {
    if (typeof p.content == "string")
      l(p.content, c, b);
    else if (p.type === "Element")
      d(p, c, b);
    else if (p.type === "ProcessingInstruction")
      m(p, c);
    else
      throw new Error("Unknown node type: " + p.type);
  }
  function l(p, c, b) {
    if (!b) {
      const O = p.trim();
      (c.options.lineSeparator || O.length === 0) && (p = O);
    }
    p.length > 0 && (!b && c.content.length > 0 && o(c), s(c, p));
  }
  function v(p, c) {
    const b = "/" + p.join("/"), O = p[p.length - 1];
    return c.includes(O) || c.includes(b);
  }
  function d(p, c, b) {
    if (c.path.push(p.name), !b && c.content.length > 0 && o(c), s(c, "<" + p.name), f(c, p.attributes), p.children === null || c.options.forceSelfClosingEmptyTag && p.children.length === 0) {
      const O = c.options.whiteSpaceAtEndOfSelfclosingTag ? " />" : "/>";
      s(c, O);
    } else if (p.children.length === 0)
      s(c, "></" + p.name + ">");
    else {
      const O = p.children;
      s(c, ">"), c.level++;
      let R = p.attributes["xml:space"] === "preserve", _ = !1;
      if (!R && c.options.ignoredPaths && (_ = v(c.path, c.options.ignoredPaths), R = _), !R && c.options.collapseContent) {
        let E = !1, $ = !1, g = !1;
        O.forEach(function(T, P) {
          T.type === "Text" ? (T.content.includes(`
`) ? ($ = !0, T.content = T.content.trim()) : (P === 0 || P === O.length - 1) && T.content.trim().length === 0 && (T.content = ""), T.content.trim().length > 0 && (E = !0)) : T.type === "CDATA" ? E = !0 : g = !0;
        }), E && (!g || !$) && (R = !0);
      }
      O.forEach(function(E) {
        a(E, c, b || R);
      }), c.level--, !b && !R && o(c), _ && i(c), s(c, "</" + p.name + ">");
    }
    c.path.pop();
  }
  function f(p, c) {
    Object.keys(c).forEach(function(b) {
      const O = c[b].replace(/"/g, "&quot;");
      s(p, " " + b + '="' + O + '"');
    });
  }
  function m(p, c) {
    c.content.length > 0 && o(c), s(c, "<?" + p.name), f(c, p.attributes), s(c, "?>");
  }
  function x(p, c = {}) {
    c.indentation = "indentation" in c ? c.indentation : "    ", c.collapseContent = c.collapseContent === !0, c.lineSeparator = "lineSeparator" in c ? c.lineSeparator : `\r
`, c.whiteSpaceAtEndOfSelfclosingTag = c.whiteSpaceAtEndOfSelfclosingTag === !0, c.throwOnFailure = c.throwOnFailure !== !1;
    try {
      const b = (0, r.default)(p, { filter: c.filter, strictMode: c.strictMode }), O = { content: "", level: 0, options: c, path: [] };
      return b.declaration && m(b.declaration, O), b.children.forEach(function(R) {
        a(R, O, !1);
      }), c.lineSeparator ? O.content.replace(/\r\n/g, `
`).replace(/\n/g, c.lineSeparator) : O.content;
    } catch (b) {
      if (c.throwOnFailure)
        throw b;
      return p;
    }
  }
  x.minify = (p, c = {}) => x(p, Object.assign(Object.assign({}, c), { indentation: "", lineSeparator: "" })), e.exports = x, t.default = x;
})(Ye, Ye.exports);
var Os = Ye.exports;
const Cs = /* @__PURE__ */ at(Os), oe = (e) => (he("data-v-19dfe013"), e = e(), _e(), e), Is = { class: "edit-title" }, $s = { class: "title-wrapper" }, Ms = /* @__PURE__ */ oe(() => /* @__PURE__ */ C("div", { class: "title-author" }, "SSML编辑器", -1)), Ds = /* @__PURE__ */ oe(() => /* @__PURE__ */ C("div", { class: "h h-1" }, null, -1)), Rs = { class: "author" }, Ts = /* @__PURE__ */ oe(() => /* @__PURE__ */ C("div", null, "已保存", -1)), ks = /* @__PURE__ */ oe(() => /* @__PURE__ */ C("div", null, "|", -1)), As = /* @__PURE__ */ oe(() => /* @__PURE__ */ C("div", { class: "w-2" }, null, -1)), Ls = /* @__PURE__ */ oe(() => /* @__PURE__ */ C("span", { class: "iconfont icon-play font-size-12 p1" }, null, -1)), Bs = /* @__PURE__ */ oe(() => /* @__PURE__ */ C("div", { class: "inline-block w-1 p-1" }, null, -1)), Ns = { class: "operation-wrapper" }, Ps = /* @__PURE__ */ oe(() => /* @__PURE__ */ C("div", { class: "menu-divider" }, null, -1)), Vs = /* @__PURE__ */ oe(() => /* @__PURE__ */ C("div", { class: "w w-2" }, null, -1)), Us = { class: "ssml-code" }, Fs = { class: "dialog-footer" }, js = /* @__PURE__ */ A({
  __name: "editor-title",
  props: {
    characterTotal: {},
    characterMax: {},
    bgm: {}
  },
  setup(e) {
    const t = Re(be.EDITOR), n = w(!1), r = w(""), o = z(() => Cs(r.value, {
      indentation: "    ",
      filter: (a) => a.type !== "Comment",
      collapseContent: !1,
      lineSeparator: `
`
    })), i = () => {
      t && (r.value = t.value.getHtml(), n.value = !0);
    }, s = () => {
      t == null || t.value.emit(fe.REMOVE_BGM);
    };
    return (a, l) => (k(), V(ve, null, [
      C("div", Is, [
        C("div", $s, [
          Ms,
          Ds,
          C("div", Rs, [
            Ts,
            ks,
            C("div", null, ne(a.characterTotal) + "/" + ne(a.characterMax) + "字", 1),
            As,
            a.bgm ? (k(), U(y(tr), {
              key: 0,
              class: "bgm-txt p-2",
              closable: "",
              size: "small",
              onClick: l[0] || (l[0] = () => a.bgm && a.bgm.value && y(mn)(a.bgm.value)),
              onClose: s
            }, {
              default: h(() => [
                Ls,
                Bs,
                C("span", null, ne(a.bgm.label), 1)
              ]),
              _: 1
            })) : zn("", !0)
          ])
        ]),
        C("div", Ns, [
          u(y(ue), {
            type: "primary",
            icon: y(ir),
            disabled: ""
          }, {
            default: h(() => [
              S("分享")
            ]),
            _: 1
          }, 8, ["icon"]),
          Ps,
          u(y(ue), {
            type: "primary",
            onClick: i
          }, {
            default: h(() => [
              S("查看SSML")
            ]),
            _: 1
          }),
          u(y(ue), { disabled: "" }, {
            default: h(() => [
              S("下载音频")
            ]),
            _: 1
          }),
          u(y(ue), { disabled: "" }, {
            default: h(() => [
              S("下载视频")
            ]),
            _: 1
          }),
          u(y(ue), { disabled: "" }, {
            default: h(() => [
              S("下载字幕")
            ]),
            _: 1
          }),
          u(y(ue), { disabled: "" }, {
            default: h(() => [
              S("声音转换")
            ]),
            _: 1
          }),
          Vs
        ])
      ]),
      u(y(nr), {
        modelValue: n.value,
        "onUpdate:modelValue": l[2] || (l[2] = (v) => n.value = v),
        title: "查看SSML",
        width: "50%"
      }, {
        footer: h(() => [
          C("span", Fs, [
            u(y(ue), {
              type: "primary",
              onClick: l[1] || (l[1] = (v) => n.value = !1)
            }, {
              default: h(() => [
                S(" 确定 ")
              ]),
              _: 1
            })
          ])
        ]),
        default: h(() => [
          C("pre", Us, ne(o.value), 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
});
const Gs = /* @__PURE__ */ K(js, [["__scopeId", "data-v-19dfe013"]]), Ws = /* @__PURE__ */ A({
  __name: "editor-core",
  props: {
    editorConfig: {},
    defaultHtml: {}
  },
  emits: ["created", "change"],
  setup(e, { emit: t }) {
    const n = e, r = w(null);
    j(() => {
      o();
    });
    const o = () => {
      r.value && Zn({
        selector: r.value,
        mode: "simple",
        html: ht(n.defaultHtml),
        config: {
          ...ht(n.editorConfig),
          onCreated(i) {
            const s = i.getConfig();
            s.hoverbarKeys = void 0, i.focus(!0), t("created", i);
          },
          onChange(i) {
            t("change", i);
          }
        }
      });
    };
    return (i, s) => (k(), V("div", {
      ref_key: "boxRef",
      ref: r,
      class: "edit-core",
      style: { height: "600px", "overflow-y": "hidden" }
    }, null, 512));
  }
}), Ks = { class: "content" }, Hs = /* @__PURE__ */ A({
  __name: "bar-view",
  setup(e) {
    return (t, n) => (k(), V(ve, null, [
      C("div", Ks, [
        u(y(on), null, {
          default: h(() => [
            u(y(ce), { divider: "green" }, {
              default: h(() => [
                u(y(F), {
                  text: "24K高清音质",
                  icon: "play",
                  disabled: ""
                })
              ]),
              _: 1
            }),
            u(y(ce), { divider: "cyan" }, {
              default: h(() => [
                u(y(hn)),
                u(y(bn)),
                u(y(gn)),
                u(y(_n)),
                u(y(yn)),
                u(y(wn))
              ]),
              _: 1
            }),
            u(y(ce), { divider: "orange" }, {
              default: h(() => [
                u(y(xn)),
                u(y(Rn)),
                u(y(kn))
              ]),
              _: 1
            }),
            u(y(ce), { divider: "purple" }, {
              default: h(() => [
                u(y(En)),
                u(y(Cn))
              ]),
              _: 1
            }),
            u(y(ce), { divider: "yellow" }, {
              default: h(() => [
                u(y(Sn)),
                u(y(In))
              ]),
              _: 1
            }),
            u(y(ce), null, {
              default: h(() => [
                u(y(Mn))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      u(y($n)),
      u(y(On)),
      u(y(Dn)),
      u(y(Tn)),
      u(y(An)),
      u(y(Bn))
    ], 64));
  }
}), zs = (e) => (he("data-v-f96fd805"), e = e(), _e(), e), Xs = { class: "edit-view" }, qs = { class: "edit-box" }, Ys = /* @__PURE__ */ zs(() => /* @__PURE__ */ C("div", { class: "h h-1" }, null, -1)), Qs = { class: "editor" }, Zs = `地球在极其遥远的未来可能面临一些威胁，但目前不太可能突然消失。
The Earth may face some threats in the extremely distant future, but it is currently unlikely to suddenly disappear.
`, Js = /* @__PURE__ */ A({
  __name: "editor-view",
  emits: ["onCreated", "onChange"],
  setup(e, { emit: t }) {
    const n = w(0), r = G(), o = w(null);
    Xn(be.EDITOR, r);
    const i = { maxLength: 5e3, placeholder: "请输入内容..." };
    q(() => {
      var l;
      (l = r.value) == null || l.destroy();
    });
    const s = (l) => {
      r.value = l, t("onCreated", l), l.on(fe.UPDATE_BGM, (v) => {
        o.value = v;
      }), l.on(fe.REMOVE_BGM, () => {
        o.value = null;
      });
    }, a = (l) => {
      n.value = l.getText().length, t("onChange", l);
    };
    return (l, v) => (k(), V("div", Xs, [
      u(Gs, {
        bgm: o.value,
        "character-total": n.value,
        "character-max": i.maxLength || 0
      }, null, 8, ["bgm", "character-total", "character-max"]),
      C("div", qs, [
        u(Hs),
        Ys,
        C("div", Qs, [
          u(Ws, {
            "editor-config": i,
            "default-html": Zs,
            onChange: a,
            onCreated: s
          })
        ])
      ])
    ]));
  }
});
const el = /* @__PURE__ */ K(Js, [["__scopeId", "data-v-f96fd805"]]), tl = {
  install(e) {
    e.component("EditorView", el);
  }
};
function Zt(e, t, n, r, o) {
  const i = t === void 0 ? void 0 : t.key;
  return { sel: e, data: t, children: n, text: r, elm: o, key: i };
}
const Jt = Array.isArray;
function Ke(e) {
  return typeof e == "string" || typeof e == "number" || e instanceof String || e instanceof Number;
}
function Nn(e, t, n) {
  if (e.ns = "http://www.w3.org/2000/svg", n !== "foreignObject" && t !== void 0)
    for (let r = 0; r < t.length; ++r) {
      const o = t[r];
      if (typeof o == "string")
        continue;
      const i = o.data;
      i !== void 0 && Nn(i, o.children, o.sel);
    }
}
function B(e, t, n) {
  let r = {}, o, i, s;
  if (n !== void 0 ? (t !== null && (r = t), Jt(n) ? o = n : Ke(n) ? i = n.toString() : n && n.sel && (o = [n])) : t != null && (Jt(t) ? o = t : Ke(t) ? i = t.toString() : t && t.sel ? o = [t] : r = t), o !== void 0)
    for (s = 0; s < o.length; ++s)
      Ke(o[s]) && (o[s] = Zt(void 0, void 0, void 0, o[s], void 0));
  return e[0] === "s" && e[1] === "v" && e[2] === "g" && (e.length === 3 || e[3] === "." || e[3] === "#") && Nn(r, o, e), Zt(e, r, o, i, void 0);
}
const ie = { style: { userSelect: "none" }, contentEditable: !1 };
function pt(e) {
  return B("span.ssml-wrap", [
    B(`span.tag.bg-color.${e.bgColor}`, { ...ie }, [
      B("span.tag-remark", { attrs: { "data-tag-remark": e.remark } }),
      B(`span#${e.domId}-close.btn-close`, B("span.iconfont.icon-roundclosefill", null))
    ]),
    B(`span.boundary.start.ft-color.${e.bgColor}`, { ...ie }),
    B("span", e.plain),
    B(`span.boundary.end.ft-color.${e.bgColor}`, { ...ie })
  ]);
}
function vt(e, t) {
  return B("span.ssml-wrap", [
    B(`span.tag.bg-color.${e.bgColor}`, { ...ie }, [
      B("span.tag-remark", { attrs: { "data-tag-remark": e.remark } }),
      B(`span#${e.domId}-close.btn-close`, B("span.iconfont.icon-roundclosefill", null))
    ]),
    B(`span.boundary.start.ft-color.${e.bgColor}`, { ...ie }),
    B("span", t),
    B(`span.boundary.end.ft-color.${e.bgColor}`, { ...ie })
  ]);
}
function nl(e) {
  return B("span.ssml-wrap", [
    B(`span.tag.bg-color.${e.bgColor}`, { ...ie }, [
      B("span.tag-remark", { attrs: { "data-tag-remark": e.remark } }),
      B(`span#${e.domId}-close.btn-close`, B("span.iconfont.icon-roundclosefill", null))
    ])
  ]);
}
function rl(e) {
  return B("span.ssml-wrap", [
    B(`span.tag.bg-color.${e.bgColor}`, { ...ie }, [
      B(`span#${e.domId}-play.btn-text`, B("span.iconfont.icon-play", null)),
      B("span.tag-remark", { attrs: { "data-tag-remark": e.remark } }),
      B(`span#${e.domId}-close.btn-text`, B("span.iconfont.icon-roundclosefill", null))
    ])
  ]);
}
function ol(e) {
  const t = e;
  return pt({ ...t, plain: t.word });
}
function il(e, t) {
  if (t)
    return vt(e, t);
  const n = e;
  return pt({ ...n, plain: n.value });
}
function sl(e, t) {
  if (!t)
    throw Error("children is not null");
  return vt(e, t);
}
function ll(e) {
  return nl(e);
}
function al(e) {
  const t = e;
  return pt({ ...t, plain: t.value });
}
function ul(e, t) {
  if (!t)
    throw Error("children is not null");
  return vt(e, t);
}
function cl(e) {
  return rl(e);
}
const dl = [
  {
    type: "ssml-p",
    renderElem: ol
  },
  {
    type: "ssml-w",
    renderElem: il
  },
  {
    type: "ssml-say-as",
    renderElem: sl
  },
  {
    type: "ssml-break",
    renderElem: ll
  },
  {
    type: "ssml-sub",
    renderElem: al
  },
  {
    type: "ssml-prosody",
    renderElem: ul
  },
  {
    type: "ssml-audio",
    renderElem: cl
  }
];
function fl(e, t) {
  return `<s>${t}</s>`;
}
function pl(e, t) {
  const { phoneme: n, value: r } = e;
  return n ? `<w phoneme="${n}">${r}</w>` : `<w>${t}</w>`;
}
function vl(e) {
  const { word: t, phoneme: n } = e;
  return `<p ph="${n}">${t}</p>`;
}
function ml(e, t) {
  const { interpretAs: n } = e;
  return `<say-as interpret-as="${n}">${t}</say-as>`;
}
function hl(e) {
  const { time: t } = e;
  return `<break time="${t}" />`;
}
function _l(e) {
  const { alias: t, value: n } = e;
  return `<sub alias="${t}">${n}</sub>`;
}
function bl(e, t) {
  const { rate: n } = e;
  return `<prosody rate="${n}">${t}</prosody>`;
}
function gl(e) {
  const { src: t } = e;
  return `<audio src="${t}" />`;
}
const yl = [
  {
    type: "paragraph",
    elemToHtml: fl
  },
  {
    type: "ssml-w",
    elemToHtml: pl
  },
  {
    type: "ssml-p",
    elemToHtml: vl
  },
  {
    type: "ssml-say-as",
    elemToHtml: ml
  },
  {
    type: "ssml-break",
    elemToHtml: hl
  },
  {
    type: "ssml-sub",
    elemToHtml: _l
  },
  {
    type: "ssml-prosody",
    elemToHtml: bl
  },
  {
    type: "ssml-audio",
    elemToHtml: gl
  }
];
function wl(e, t) {
  return {
    type: "paragraph",
    children: t
  };
}
function xl(e, t) {
  const n = e.getAttribute("phoneme");
  return n ? {
    type: "ssml-w",
    phoneme: n,
    value: e.textContent,
    children: [{ text: e.textContent || "" }]
  } : {
    type: "ssml-w",
    children: t
  };
}
const El = [
  {
    selector: "s",
    parseElemHtml: wl
  },
  {
    selector: "w",
    parseElemHtml: xl
  }
];
function W(e, t) {
  return e === t;
}
function Sl(e) {
  const {
    isInline: t,
    isVoid: n,
    deleteBackward: r,
    deleteForward: o,
    insertBreak: i,
    getHtml: s,
    apply: a,
    normalizeNode: l
  } = e, v = e;
  v.isInline = (f) => {
    const m = He.getNodeType(f);
    return W(m, "ssml-w") || W(m, "ssml-p") || W(m, "ssml-break") || W(m, "ssml-say-as") || W(m, "ssml-sub") || W(m, "ssml-prosody") || W(m, "ssml-audio") ? !0 : t(f);
  }, v.isVoid = (f) => {
    const m = He.getNodeType(f);
    if (W(m, "ssml-w")) {
      const { phoneme: x } = f;
      return !!x;
    }
    return W(m, "ssml-p") || W(m, "ssml-break") ? !0 : W(m, "ssml-say-as") ? !1 : W(m, "ssml-sub") ? !0 : W(m, "ssml-prosody") ? !1 : W(m, "ssml-audio") ? !0 : n(f);
  }, v.deleteBackward = (f) => {
    r(f);
  }, v.deleteForward = (f) => {
    o(f);
  }, v.insertBreak = () => {
    i();
  }, v.normalizeNode = (f) => {
    l(f);
  };
  const d = { voice: "", volume: "", pitch: "" };
  return e.on(fe.UPDATE_SPEAK, (f) => {
    Object.assign(d, f);
  }), e.on(fe.UPDATE_BGM, (f) => {
    d.bgm = f.value, d.bgmRemark = f.label;
  }), e.on(fe.REMOVE_BGM, () => {
    d.bgm = void 0, d.bgmRemark = void 0;
  }), v.getHtml = () => {
    const f = [];
    for (const m in d)
      if (Object.prototype.hasOwnProperty.call(d, m)) {
        const x = d[m];
        x && f.push(`${m}=${x}`);
      }
    return `<speak ${f.join(" ")}>${s()}</speak>`;
  }, v.apply = (f) => {
    a(f);
  }, v;
}
const Nl = {
  editorPlugin: Sl,
  renderElems: dl,
  elemsToHtml: yl,
  parseElemsHtml: El
};
const Pl = {
  install(e, t) {
    const n = t ?? {};
    e.provide(be.EDITORCONFIG, n), D.on(M.ERROR, n.handleError), e.use(bo), e.use(Es), e.use(tl);
  }
};
export {
  yn as AliasMenu,
  F as BarButton,
  rt as BarInput,
  Or as BarPopover,
  ge as BarSearch,
  on as BarWrapper,
  ce as BarWrapperGroup,
  po as BarWrapperItem,
  $n as BgmDragBox,
  In as BgmMenu,
  xn as ChangespeedMenu,
  _n as ContinuousMenu,
  An as ConversionDragBox,
  kn as ConversionMenu,
  Rl as DOMComment,
  Tl as DOMElement,
  Dl as DOMNode,
  Al as DOMRange,
  Ll as DOMSelection,
  Bl as DOMStaticRange,
  kl as DOMText,
  gn as DigitalMenu,
  ye as DragBox,
  M as EMITTER_EVENT,
  Nl as EditorCoreModule,
  el as EditorView,
  wn as EnglishMenu,
  io as FixedPanel,
  Tn as ManagementDragBox,
  Rn as ManagementMenu,
  Cn as MuteMenu,
  be as PROVIDER_KEY,
  bn as ReadMenu,
  En as RhythmMenu,
  Dn as SensitiveDragBox,
  Mn as SensitiveMenu,
  hn as SpeakerMenu,
  On as SpecialDragBox,
  Sn as SpecialMenu,
  Bn as TryPlay,
  fe as WANGEDITOR_EVENT,
  Pl as default,
  Ri as genRandomStr,
  mn as playSound,
  rn as withLimitView
};

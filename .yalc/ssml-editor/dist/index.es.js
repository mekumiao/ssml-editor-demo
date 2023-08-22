var Nn = Object.defineProperty;
var Pn = (e, t, n) => t in e ? Nn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var H = (e, t, n) => (Pn(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as A, inject as Re, openBlock as k, createElementBlock as V, normalizeClass as Ie, withModifiers as q, createElementVNode as I, toDisplayString as ne, ref as w, createBlock as U, unref as y, withCtx as h, createVNode as u, renderSlot as se, isRef as Vn, toRefs as Un, customRef as Fn, getCurrentInstance as Jt, onMounted as F, nextTick as jn, getCurrentScope as Gn, onScopeDispose as Wn, computed as z, watch as re, watchEffect as Kn, createTextVNode as S, Fragment as ve, renderList as Ee, pushScopeId as ye, popScopeId as we, Teleport as Ze, normalizeStyle as Te, onUnmounted as X, withDirectives as Je, vShow as et, shallowRef as G, createCommentVNode as Hn, toRaw as mt, provide as zn } from "vue";
import { SlateEditor as J, SlateElement as Xn, DomEditor as He, SlateText as qn, SlateTransforms as N, SlatePath as Yn, SlateRange as Z, createEditor as Qn } from "@wangeditor/editor";
import { ElForm as tt, ElInput as nt, ElPopover as oe, ElMenu as Zn, ElMenuItem as Be, ElSelect as ht, ElOption as _t, ElIcon as Jn, ElTag as er, ElButton as ae, ElDialog as tr } from "element-plus";
import { Search as nr, Minus as rr, Share as or } from "@element-plus/icons-vue";
const ir = "ssml-editor", sr = "ssml-editor-config", he = {
  EDITOR: ir,
  EDITORCONFIG: sr
}, lr = "emitter-ediror-error", ar = "emitter-bgm-menu-click", ur = "emitter-bgm-drag-box-submit", cr = "emitter-conversion-menu-click", dr = "emitter-conversion-drag-box-submit", fr = "emitter-management-menu-click", pr = "emitter-management-drag-box-submit", vr = "emitter-special-menu-click", mr = "emitter-special-drag-box-submit", hr = "emitter-sensitive-menu-click", _r = "emitter-sensitive-drag-box-submit", M = {
  ERROR: lr,
  BGM_MENU_CLICK: ar,
  BGM_DRAG_BOX_SUBMIT: ur,
  CONVERSION_MENU_CLICK: cr,
  CONVERSION_DRAG_BOX_SUBMIT: dr,
  MANAGEMENT_MENU_CLICK: fr,
  MANAGEMENT_DRAG_BOX_SUBMIT: pr,
  SPECIAL_MENU_CLICK: vr,
  SPECIAL_DRAG_BOX_SUBMIT: mr,
  SENSITIVE_MENU_CLICK: hr,
  SENSITIVE_DRAG_BOX_SUBMIT: _r
}, br = "wangeditor-update-bgm", gr = "wangeditor-remove-bgm", yr = "wangeditor-update-speak", de = {
  UPDATE_BGM: br,
  REMOVE_BGM: gr,
  UPDATE_SPEAK: yr
}, wr = { class: "bar-button-icon" }, xr = {
  class: "fw-normal",
  style: { "font-size": "0.85rem" }
}, Er = /* @__PURE__ */ A({
  __name: "bar-button",
  props: {
    text: {},
    icon: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, r = Re(he.EDITOR), o = () => {
      n.disabled || t("click", r.value);
    };
    return (i, s) => (k(), V("div", {
      class: Ie(["bar-button px-2 py-1", { disabled: i.disabled }]),
      onClick: o,
      onMousedown: s[0] || (s[0] = q(() => {
      }, ["prevent"]))
    }, [
      I("div", wr, [
        I("span", {
          class: Ie(["fs-3 iconfont-moyin", [`moyin-icon_${i.icon}`]])
        }, null, 2)
      ]),
      I("div", xr, ne(i.text), 1)
    ], 34));
  }
});
const K = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, j = /* @__PURE__ */ K(Er, [["__scopeId", "data-v-7741060a"]]);
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
      onSubmit: q(s, ["prevent"])
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
const Sr = /* @__PURE__ */ A({
  __name: "bar-popover",
  props: {
    visible: { type: Boolean },
    trigger: {},
    hideAfter: {},
    width: {}
  },
  emits: ["update:visible"],
  setup(e) {
    return (t, n) => (k(), U(y(oe), {
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
  return Gn() ? (Wn(e), !0) : !1;
}
function Y(e) {
  return typeof e == "function" ? e() : y(e);
}
const $e = typeof window < "u", Or = (e) => e != null, Se = () => {
};
var Cr = Object.defineProperty, Ir = Object.defineProperties, $r = Object.getOwnPropertyDescriptors, bt = Object.getOwnPropertySymbols, Mr = Object.prototype.hasOwnProperty, Dr = Object.prototype.propertyIsEnumerable, gt = (e, t, n) => t in e ? Cr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Rr = (e, t) => {
  for (var n in t || (t = {}))
    Mr.call(t, n) && gt(e, n, t[n]);
  if (bt)
    for (var n of bt(t))
      Dr.call(t, n) && gt(e, n, t[n]);
  return e;
}, Tr = (e, t) => Ir(e, $r(t));
function kr(e, t = {}) {
  if (!Vn(e))
    return Un(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const r in e.value)
    n[r] = Fn(() => ({
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
            const a = Tr(Rr({}, e.value), { [r]: o });
            Object.setPrototypeOf(a, Object.getPrototypeOf(e.value)), e.value = a;
          }
        else
          e.value[r] = o;
      }
    }));
  return n;
}
function en(e, t = !0) {
  Jt() ? F(e) : t ? e() : jn(e);
}
function Q(e) {
  var t;
  const n = Y(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const le = $e ? window : void 0;
function me(...e) {
  let t, n, r, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, o] = e, t = le) : [t, n, r, o] = e, !t)
    return Se;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const i = [], s = () => {
    i.forEach((d) => d()), i.length = 0;
  }, a = (d, f, m, x) => (d.addEventListener(f, m, x), () => d.removeEventListener(f, m, x)), l = re(
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
function Ar() {
  const e = w(!1);
  return Jt() && F(() => {
    e.value = !0;
  }), e;
}
function ot(e) {
  const t = Ar();
  return z(() => (t.value, !!e()));
}
function Lr(e, t = {}) {
  const { window: n = le } = t, r = ot(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let o;
  const i = w(!1), s = (v) => {
    i.value = v.matches;
  }, a = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", s) : o.removeListener(s));
  }, l = Kn(() => {
    r.value && (a(), o = n.matchMedia(Y(e)), "addEventListener" in o ? o.addEventListener("change", s) : o.addListener(s), i.value = o.matches);
  });
  return ke(() => {
    l(), a(), o = void 0;
  }), i;
}
var Br = Object.defineProperty, Nr = Object.defineProperties, Pr = Object.getOwnPropertyDescriptors, yt = Object.getOwnPropertySymbols, Vr = Object.prototype.hasOwnProperty, Ur = Object.prototype.propertyIsEnumerable, wt = (e, t, n) => t in e ? Br(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Fr = (e, t) => {
  for (var n in t || (t = {}))
    Vr.call(t, n) && wt(e, n, t[n]);
  if (yt)
    for (var n of yt(t))
      Ur.call(t, n) && wt(e, n, t[n]);
  return e;
}, jr = (e, t) => Nr(e, Pr(t));
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
    draggingElement: x = le,
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
  return jr(Fr({}, kr(c)), {
    position: c,
    isDragging: z(() => !!b.value),
    style: z(
      () => `left:${c.value.x}px;top:${c.value.y}px;`
    )
  });
}
var xt = Object.getOwnPropertySymbols, Gr = Object.prototype.hasOwnProperty, Wr = Object.prototype.propertyIsEnumerable, Kr = (e, t) => {
  var n = {};
  for (var r in e)
    Gr.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && xt)
    for (var r of xt(e))
      t.indexOf(r) < 0 && Wr.call(e, r) && (n[r] = e[r]);
  return n;
};
function tn(e, t, n = {}) {
  const r = n, { window: o = le } = r, i = Kr(r, ["window"]);
  let s;
  const a = ot(() => o && "ResizeObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, v = z(
    () => Array.isArray(e) ? e.map((m) => Q(m)) : [Q(e)]
  ), d = re(
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
  return tn(e, p), re(() => Q(e), (c) => !c && p()), o && me("scroll", p, { capture: !0, passive: !0 }), r && me("resize", p, { passive: !0 }), en(() => {
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
  const { window: r = le, box: o = "content-box" } = n, i = z(() => {
    var l, v;
    return (v = (l = Q(e)) == null ? void 0 : l.namespaceURI) == null ? void 0 : v.includes("svg");
  }), s = w(t.width), a = w(t.height);
  return tn(
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
  ), re(
    () => Q(e),
    (l) => {
      s.value = l ? t.width : 0, a.value = l ? t.height : 0;
    }
  ), {
    width: s,
    height: a
  };
}
function Hr(e, t, n = {}) {
  const {
    root: r,
    rootMargin: o = "0px",
    threshold: i = 0.1,
    window: s = le,
    immediate: a = !0
  } = n, l = ot(() => s && "IntersectionObserver" in s), v = z(() => {
    const p = Y(e);
    return (Array.isArray(p) ? p : [p]).map(Q).filter(Or);
  });
  let d = Se;
  const f = w(a), m = l.value ? re(
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
function zr(e, { window: t = le, scrollTarget: n } = {}) {
  const r = w(!1);
  return Hr(
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
    window: t = le,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: r = Number.POSITIVE_INFINITY,
    listenOrientation: o = !0,
    includeScrollbar: i = !0
  } = e, s = w(n), a = w(r), l = () => {
    t && (i ? (s.value = t.innerWidth, a.value = t.innerHeight) : (s.value = t.document.documentElement.clientWidth, a.value = t.document.documentElement.clientHeight));
  };
  if (l(), en(l), me("resize", l, { passive: !0 }), o) {
    const v = Lr("(orientation: portrait)");
    re(v, () => l());
  }
  return { width: s, height: a };
}
const Xr = (e) => (ye("data-v-fd90240d"), e = e(), we(), e), qr = { class: "search-content vh-50" }, Yr = { class: "ps-2 w-75" }, Qr = { class: "menu" }, Zr = { class: "flex flex-row pt-1" }, Jr = { class: "content-list pt-1 w-90" }, eo = ["onClick"], to = /* @__PURE__ */ Xr(() => /* @__PURE__ */ I("span", { class: "iconfont icon-play" }, null, -1)), no = /* @__PURE__ */ A({
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
    const n = e, r = w(), o = w(""), i = w(""), s = w(""), a = w(n.dataList || []), l = w("first"), v = zr(r);
    re(v, (x) => {
      x && setTimeout(() => {
        var p;
        (p = r.value) == null || p.focus();
      }, 100);
    }), F(async () => {
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
      I("div", Yr, [
        u(y(tt), {
          onSubmit: q(d, ["prevent"])
        }, {
          default: h(() => [
            u(y(nt), {
              ref_key: "searchInputRef",
              ref: r,
              placeholder: "搜索",
              modelValue: o.value,
              "onUpdate:modelValue": p[0] || (p[0] = (c) => o.value = c),
              "suffix-icon": y(nr)
            }, null, 8, ["modelValue", "suffix-icon"])
          ]),
          _: 1
        }, 8, ["onSubmit"])
      ]),
      I("div", Qr, [
        u(y(Zn), {
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
      I("div", Zr, [
        u(y(ht), {
          modelValue: i.value,
          "onUpdate:modelValue": p[2] || (p[2] = (c) => i.value = c),
          onChange: d,
          class: "m-1",
          size: "large"
        }, {
          default: h(() => [
            (k(!0), V(ve, null, Ee(x.scenes, (c) => (k(), U(y(_t), {
              key: c.value,
              label: c.label,
              value: c.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        u(y(ht), {
          modelValue: s.value,
          "onUpdate:modelValue": p[3] || (p[3] = (c) => s.value = c),
          onChange: d,
          class: "m-1",
          size: "large"
        }, {
          default: h(() => [
            (k(!0), V(ve, null, Ee(x.styles, (c) => (k(), U(y(_t), {
              key: c.value,
              label: c.label,
              value: c.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      I("div", Jr, [
        (k(!0), V(ve, null, Ee(a.value, (c, b) => (k(), V("div", {
          onClick: (O) => m(c),
          class: "content-list-item clickable ps-3",
          key: b
        }, [
          to,
          I("span", null, ne(c.label), 1)
        ], 8, eo))), 128))
      ])
    ]));
  }
});
const _e = /* @__PURE__ */ K(no, [["__scopeId", "data-v-fd90240d"]]), ro = /* @__PURE__ */ A({
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
      I("div", {
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
function Et(e, t) {
  return `left:${e}px;top:${t}px`;
}
function nn(e, t) {
  const { x: n, y: r } = t, { width: o, height: i } = it(e), { width: s, height: a } = st(), l = z(() => ({
    x: s.value - o.value,
    y: a.value - i.value
  }));
  return { style: z(() => {
    if (!l.value)
      return Et(n.value, r.value);
    const d = n.value < 5 ? 5 : n.value > l.value.x ? l.value.x - 5 : n.value, f = r.value < 5 ? 5 : r.value > l.value.y ? l.value.y - 5 : r.value;
    return Et(d, f);
  }) };
}
const oo = {}, io = { class: "content" };
function so(e, t) {
  return k(), V("div", io, [
    se(e.$slots, "default", {}, void 0, !0)
  ]);
}
const rn = /* @__PURE__ */ K(oo, [["render", so], ["__scopeId", "data-v-7beae5b9"]]), lo = {}, ao = { class: "bar-wrapper-item" };
function uo(e, t) {
  return k(), V("div", ao, [
    se(e.$slots, "default")
  ]);
}
const co = /* @__PURE__ */ K(lo, [["render", uo]]), fo = { class: "bar-wrapper-group" }, po = { class: "group-items" }, vo = /* @__PURE__ */ A({
  __name: "bar-wrapper-group",
  props: {
    divider: {}
  },
  setup(e) {
    return (t, n) => (k(), V("div", fo, [
      I("div", po, [
        se(t.$slots, "default", {}, void 0, !0)
      ]),
      I("div", {
        class: Ie(["divider", [t.divider]])
      }, null, 2)
    ]));
  }
});
const ue = /* @__PURE__ */ K(vo, [["__scopeId", "data-v-3a7abad9"]]), mo = /* @__PURE__ */ A({
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
    re([o, i], ([b, O]) => {
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
    F(() => {
      window.addEventListener("keydown", p);
    }), X(() => {
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
      Je(I("div", {
        class: "drag-box-mask user-select-none",
        onClick: x
      }, [
        I("div", {
          ref_key: "boxRef",
          ref: r,
          class: "card shadow brag-box",
          style: Te([{ position: "fixed" }, f.value])
        }, [
          I("div", { class: "w-100 text-end me-2" }, [
            I("span", {
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
const be = /* @__PURE__ */ K(mo, [["__scopeId", "data-v-ca198ced"]]), ho = {
  install(e) {
    e.component("BarButton", j), e.component("BarInput", rt), e.component("BarPopover", Sr), e.component("BarSearch", _e), e.component("FixedPanel", ro), e.component("BarWrapper", rn), e.component("BarWrapperItem", co), e.component("BarWrapperGroup", ue), e.component("DragBox", be);
  }
};
var pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function lt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ze = { exports: {} }, on = { exports: {} }, _o = void 0, sn = function(e) {
  return e !== _o && e !== null;
}, bo = sn, go = {
  object: !0,
  function: !0,
  undefined: !0
  /* document.all */
}, yo = function(e) {
  return bo(e) ? hasOwnProperty.call(go, typeof e) : !1;
}, wo = yo, xo = function(e) {
  if (!wo(e))
    return !1;
  try {
    return e.constructor ? e.constructor.prototype === e : !1;
  } catch {
    return !1;
  }
}, Eo = xo, So = function(e) {
  if (typeof e != "function" || !hasOwnProperty.call(e, "length"))
    return !1;
  try {
    if (typeof e.length != "number" || typeof e.call != "function" || typeof e.apply != "function")
      return !1;
  } catch {
    return !1;
  }
  return !Eo(e);
}, Oo = So, Co = /^\s*class[\s{/}]/, Io = Function.prototype.toString, $o = function(e) {
  return !(!Oo(e) || Co.test(Io.call(e)));
}, Mo = function() {
  var e = Object.assign, t;
  return typeof e != "function" ? !1 : (t = { foo: "raz" }, e(t, { bar: "dwa" }, { trzy: "trzy" }), t.foo + t.bar + t.trzy === "razdwatrzy");
}, Ne, St;
function Do() {
  return St || (St = 1, Ne = function() {
    try {
      return Object.keys("primitive"), !0;
    } catch {
      return !1;
    }
  }), Ne;
}
var Ro = function() {
}, To = Ro(), at = function(e) {
  return e !== To && e !== null;
}, Pe, Ot;
function ko() {
  if (Ot)
    return Pe;
  Ot = 1;
  var e = at, t = Object.keys;
  return Pe = function(n) {
    return t(e(n) ? Object(n) : n);
  }, Pe;
}
var Ve, Ct;
function Ao() {
  return Ct || (Ct = 1, Ve = Do()() ? Object.keys : ko()), Ve;
}
var Ue, It;
function Lo() {
  if (It)
    return Ue;
  It = 1;
  var e = at;
  return Ue = function(t) {
    if (!e(t))
      throw new TypeError("Cannot use null or undefined");
    return t;
  }, Ue;
}
var Fe, $t;
function Bo() {
  if ($t)
    return Fe;
  $t = 1;
  var e = Ao(), t = Lo(), n = Math.max;
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
var No = Mo() ? Object.assign : Bo(), Po = at, Vo = Array.prototype.forEach, Uo = Object.create, Fo = function(e, t) {
  var n;
  for (n in e)
    t[n] = e[n];
}, jo = function(e) {
  var t = Uo(null);
  return Vo.call(arguments, function(n) {
    Po(n) && Fo(Object(n), t);
  }), t;
}, je = "razdwatrzy", Go = function() {
  return typeof je.contains != "function" ? !1 : je.contains("dwa") === !0 && je.contains("foo") === !1;
}, Ge, Mt;
function Wo() {
  if (Mt)
    return Ge;
  Mt = 1;
  var e = String.prototype.indexOf;
  return Ge = function(t) {
    return e.call(this, t, arguments[1]) > -1;
  }, Ge;
}
var Ko = Go() ? String.prototype.contains : Wo(), Oe = sn, Dt = $o, ln = No, an = jo, ge = Ko, Ho = on.exports = function(e, t) {
  var n, r, o, i, s;
  return arguments.length < 2 || typeof e != "string" ? (i = t, t = e, e = null) : i = arguments[2], Oe(e) ? (n = ge.call(e, "c"), r = ge.call(e, "e"), o = ge.call(e, "w")) : (n = o = !0, r = !1), s = { value: t, configurable: n, enumerable: r, writable: o }, i ? ln(an(i), s) : s;
};
Ho.gs = function(e, t, n) {
  var r, o, i, s;
  return typeof e != "string" ? (i = n, n = t, t = e, e = null) : i = arguments[3], Oe(t) ? Dt(t) ? Oe(n) ? Dt(n) || (i = n, n = void 0) : n = void 0 : (i = t, t = n = void 0) : t = void 0, Oe(e) ? (r = ge.call(e, "c"), o = ge.call(e, "e")) : (r = !0, o = !1), s = { get: t, set: n, configurable: r, enumerable: o }, i ? ln(an(i), s) : s;
};
var zo = on.exports, Xo = function(e) {
  if (typeof e != "function")
    throw new TypeError(e + " is not a function");
  return e;
};
(function(e, t) {
  var n = zo, r = Xo, o = Function.prototype.apply, i = Function.prototype.call, s = Object.create, a = Object.defineProperty, l = Object.defineProperties, v = Object.prototype.hasOwnProperty, d = { configurable: !0, enumerable: !1, writable: !0 }, f, m, x, p, c, b, O;
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
var qo = ze.exports;
const Yo = /* @__PURE__ */ lt(qo), D = Yo();
var un = "Expected a function", Rt = 0 / 0, Qo = "[object Symbol]", Zo = /^\s+|\s+$/g, Jo = /^[-+]0x[0-9a-f]+$/i, ei = /^0b[01]+$/i, ti = /^0o[0-7]+$/i, ni = parseInt, ri = typeof pe == "object" && pe && pe.Object === Object && pe, oi = typeof self == "object" && self && self.Object === Object && self, ii = ri || oi || Function("return this")(), si = Object.prototype, li = si.toString, ai = Math.max, ui = Math.min, We = function() {
  return ii.Date.now();
};
function ci(e, t, n) {
  var r, o, i, s, a, l, v = 0, d = !1, f = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(un);
  t = Tt(t) || 0, Me(n) && (d = !!n.leading, f = "maxWait" in n, i = f ? ai(Tt(n.maxWait) || 0, t) : i, m = "trailing" in n ? !!n.trailing : m);
  function x(g) {
    var T = r, P = o;
    return r = o = void 0, v = g, s = e.apply(P, T), s;
  }
  function p(g) {
    return v = g, a = setTimeout(O, t), d ? x(g) : s;
  }
  function c(g) {
    var T = g - l, P = g - v, vt = t - T;
    return f ? ui(vt, i - P) : vt;
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
function di(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(un);
  return Me(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), ci(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
function Me(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function fi(e) {
  return !!e && typeof e == "object";
}
function pi(e) {
  return typeof e == "symbol" || fi(e) && li.call(e) == Qo;
}
function Tt(e) {
  if (typeof e == "number")
    return e;
  if (pi(e))
    return Rt;
  if (Me(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Me(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Zo, "");
  var n = ei.test(e);
  return n || ti.test(e) ? ni(e.slice(2), n ? 2 : 8) : Jo.test(e) ? Rt : +e;
}
var vi = di;
const mi = /* @__PURE__ */ lt(vi);
function kt(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function ut(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {}), Object.keys(t).forEach(function(n) {
    typeof e[n] > "u" ? e[n] = t[n] : kt(t[n]) && kt(e[n]) && Object.keys(t[n]).length > 0 && ut(e[n], t[n]);
  });
}
var cn = {
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
function ct() {
  var e = typeof document < "u" ? document : {};
  return ut(e, cn), e;
}
var hi = {
  document: cn,
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
function dn() {
  var e = typeof window < "u" ? window : {};
  return ut(e, hi), e;
}
function _i(e, t) {
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
function bi() {
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
  return bi() ? Ce = Reflect.construct : Ce = function(o, i, s) {
    var a = [null];
    a.push.apply(a, i);
    var l = Function.bind.apply(o, a), v = new l();
    return s && De(v, s.prototype), v;
  }, Ce.apply(null, arguments);
}
function gi(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function qe(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return qe = function(r) {
    if (r === null || !gi(r))
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
function yi(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wi(e) {
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
var ce = /* @__PURE__ */ function(e) {
  _i(t, e);
  function t(n) {
    var r;
    return r = e.call.apply(e, [this].concat(n)) || this, wi(yi(r)), r;
  }
  return t;
}(/* @__PURE__ */ qe(Array));
function dt(e) {
  e === void 0 && (e = []);
  var t = [];
  return e.forEach(function(n) {
    Array.isArray(n) ? t.push.apply(t, dt(n)) : t.push(n);
  }), t;
}
function xi(e) {
  for (var t = [], n = 0; n < e.length; n += 1)
    t.indexOf(e[n]) === -1 && t.push(e[n]);
  return t;
}
function Ei(e) {
  return e.toLowerCase().replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function Si(e, t) {
  if (typeof e != "string")
    return [e];
  for (var n = [], r = t.querySelectorAll(e), o = 0; o < r.length; o += 1)
    n.push(r[o]);
  return n;
}
function L(e, t) {
  var n = dn(), r = ct(), o = [];
  if (!t && e instanceof ce)
    return e;
  if (!e)
    return new ce(o);
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
      o = Si(e.trim(), t || r);
  } else if (e.nodeType || e === n || e === r)
    o.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof ce)
      return e;
    o = e;
  }
  return new ce(xi(o));
}
L.fn = ce.prototype;
function At() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = dt(t.map(function(o) {
    return o.split(" ");
  }));
  return this.forEach(function(o) {
    var i;
    (i = o.classList).add.apply(i, r);
  }), this;
}
function Lt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = dt(t.map(function(o) {
    return o.split(" ");
  }));
  return this.forEach(function(o) {
    var i;
    (i = o.classList).remove.apply(i, r);
  }), this;
}
function Bt(e, t) {
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
function Nt() {
  var e = this[0];
  if (e) {
    var t = {};
    if (e.dataset)
      for (var n in e.dataset)
        t[n] = e.dataset[n];
    else
      for (var r = 0; r < e.attributes.length; r += 1) {
        var o = e.attributes[r];
        o.name.indexOf("data-") >= 0 && (t[Ei(o.name.split("data-")[1])] = o.value);
      }
    for (var i in t)
      t[i] === "false" ? t[i] = !1 : t[i] === "true" ? t[i] = !0 : parseFloat(t[i]) === t[i] * 1 && (t[i] *= 1);
    return t;
  }
}
function Pt(e) {
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
function Vt() {
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
function Ut() {
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
function Ft() {
  for (var e = 0; e < this.length; e += 1)
    this[e].style.display = "none";
  return this;
}
function jt(e) {
  return e ? (this.forEach(function(t, n) {
    e.apply(t, [t, n]);
  }), this) : this;
}
function Gt(e) {
  if (typeof e > "u")
    return this[0] ? this[0].innerHTML : null;
  for (var t = 0; t < this.length; t += 1)
    this[t].innerHTML = e;
  return this;
}
function Wt(e) {
  var t = dn(), n = ct(), r = this[0], o, i;
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
  if (e.nodeType || e instanceof ce) {
    for (o = e.nodeType ? [e] : e, i = 0; i < o.length; i += 1)
      if (o[i] === r)
        return !0;
    return !1;
  }
  return !1;
}
function Kt() {
  for (var e, t = ct(), n = 0; n < arguments.length; n += 1) {
    e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    for (var r = 0; r < this.length; r += 1)
      if (typeof e == "string") {
        var o = t.createElement("div");
        for (o.innerHTML = e; o.firstChild; )
          this[r].appendChild(o.firstChild);
      } else if (e instanceof ce)
        for (var i = 0; i < e.length; i += 1)
          this[r].appendChild(e[i]);
      else
        this[r].appendChild(e);
  }
  return this;
}
function Ht(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var r = this[n].parentNode; r; )
      e ? L(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
  return L(t);
}
function zt(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var r = this[n].querySelectorAll(e), o = 0; o < r.length; o += 1)
      t.push(r[o]);
  return L(t);
}
function Xt(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var r = this[n].children, o = 0; o < r.length; o += 1)
      (!e || L(r[o]).is(e)) && t.push(r[o]);
  return L(t);
}
var Oi = "resize scroll".split(" ");
function fn(e) {
  function t() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    if (typeof r[0] > "u") {
      for (var i = 0; i < this.length; i += 1)
        Oi.indexOf(e) < 0 && (e in this[i] ? this[i][e]() : L(this[i]).trigger(e));
      return this;
    }
    return this.on.apply(this, [e].concat(r));
  }
  return t;
}
var qt = fn("click"), Yt = fn("focus");
Ft && (L.fn.hide = Ft);
Kt && (L.fn.append = Kt);
qt && (L.fn.click = qt);
Vt && (L.fn.on = Vt);
Ut && (L.fn.off = Ut);
Yt && (L.fn.focus = Yt);
Bt && (L.fn.attr = Bt);
Pt && (L.fn.val = Pt);
Gt && (L.fn.html = Gt);
Nt && (L.fn.dataset = Nt);
At && (L.fn.addClass = At);
Lt && (L.fn.removeClass = Lt);
Xt && (L.fn.children = Xt);
jt && (L.fn.each = jt);
zt && (L.fn.find = zt);
Wt && (L.fn.is = Wt);
Ht && (L.fn.parents = Ht);
const Ol = globalThis.Node, Cl = globalThis.Comment, Il = globalThis.Element, $l = globalThis.Text, Ml = globalThis.Range, Dl = globalThis.Selection, Rl = globalThis.StaticRange;
function pn(e, t, n, r, o) {
  L("body").on(
    "click",
    `#${r}-${t}`,
    mi((i) => {
      i.preventDefault();
      const s = Ii(e, n, r);
      return s && o(s);
    })
  );
}
function ee(e, t, n, r) {
  return pn(e, "close", t, n, r);
}
function Ci(e, t, n, r) {
  return pn(e, "play", t, n, r);
}
function Ii(e, t, n) {
  const [r] = J.nodes(e, {
    at: [],
    match: (o) => !Xn.isElement(o) || !He.checkNodeType(o, t) ? !1 : o.domId === n
  });
  return r;
}
function Le(e, t, n) {
  const r = J.previous(e, {
    at: t[1],
    match: (o) => qn.isText(o)
  });
  r != null && (N.insertText(e, n(t[0]), {
    at: J.end(e, r[1])
  }), N.delete(e, { at: Yn.next(r[1]) }));
}
let $i = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function Mi(e = "r") {
  return `${e}-${$i()}`;
}
function vn(e) {
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
    return Mi(`w-e-dom-${this.key}`);
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
class Di extends te {
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
const mn = /* @__PURE__ */ A({
  setup() {
    const e = Re(he.EDITORCONFIG), t = G(), n = w([]), r = w(!1);
    function o() {
      r.value || (r.value = !0);
    }
    function i() {
      r.value && (r.value = !1);
    }
    async function s(a) {
      var v;
      if (t.value ?? (t.value = new Di(a)), (v = t.value) != null && v.isDisabled())
        return;
      const l = t.value.getValue();
      if (l ? n.value = await e.fetchSpeaker(l) : n.value = [], n.value.length == 0)
        return D.emit(M.ERROR, "选中的字符没有不是多音字");
      o();
    }
    return () => u(oe, {
      visible: r.value,
      "onUpdate:visible": (a) => r.value = a,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => u(j, {
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
        onMousedown: q(() => {
        }, ["stop", "prevent"])
      }, [a]))])
    });
  }
});
class Ri extends te {
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
const hn = /* @__PURE__ */ A({
  setup() {
    const e = G();
    function t(n) {
      e.value ?? (e.value = new Ri(n)), e.value.exec();
    }
    return () => u(j, {
      text: "连读",
      icon: "continuous",
      onClick: t
    }, null);
  }
});
class Ti extends te {
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
const ki = [{
  label: "重音",
  value: "重"
}, {
  label: "拖音",
  value: "拖"
}, {
  label: "重音+拖音",
  value: "重+拖"
}], _n = /* @__PURE__ */ A({
  setup() {
    const e = G(), t = w(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function r() {
      t.value && (t.value = !1);
    }
    function o(i) {
      e.value ?? (e.value = new Ti(i)), !e.value.isDisabled() && n();
    }
    return () => u(oe, {
      visible: t.value,
      "onUpdate:visible": (i) => t.value = i,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => u(j, {
        text: "重音",
        icon: "read",
        onClick: o
      }, null),
      default: () => u("div", {
        class: "d-flex flex-column",
        onMousedown: q(() => {
        }, ["stop", "prevent"])
      }, [ki.map(({
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
        onMousedown: q(() => {
        }, ["stop", "prevent"])
      }, [i]))])
    });
  }
});
class Ai extends te {
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
const Li = [{
  value: "value",
  label: "读数值"
}, {
  value: "digits",
  label: "读数字"
}, {
  value: "telephone",
  label: "读手机号"
}], bn = /* @__PURE__ */ A({
  setup() {
    const e = G(), t = w(!1);
    function n() {
      t.value = !t.value;
    }
    function r(o) {
      e.value ?? (e.value = new Ai(o)), !e.value.isDisabled() && n();
    }
    return () => u(oe, {
      visible: t.value,
      "onUpdate:visible": (o) => t.value = o,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => u(j, {
        text: "数字符号",
        icon: "digital",
        onClick: r
      }, null),
      default: () => u("div", {
        class: "d-flex flex-column"
      }, [Li.map(({
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
        onMousedown: q(() => {
        }, ["stop", "prevent"])
      }, [o]))])
    });
  }
});
class Bi extends te {
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
const gn = /* @__PURE__ */ A({
  setup() {
    const e = G(), t = w(), n = w(!1);
    function r() {
      n.value || (n.value = !0);
    }
    function o() {
      n.value && (n.value = !1);
    }
    async function i(a) {
      e.value ?? (e.value = new Bi(a)), !e.value.isDisabled() && (e.value.record(), r(), t.value.focus());
    }
    function s(a) {
      var l, v;
      o(), a && ((l = e.value) == null || l.restore(), (v = e.value) == null || v.exec({
        value: a,
        label: a
      }));
    }
    return () => u(oe, {
      visible: n.value,
      "onUpdate:visible": (a) => n.value = a,
      trigger: "contextmenu",
      placement: "right-end",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => u(j, {
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
function Ni(e) {
  const { selection: t } = e;
  if (t) {
    const [n, r] = Z.edges(t), o = J.range(e, n, r), i = J.string(e, o), s = i.trimEnd();
    if (s !== i) {
      const a = i.length - s.length, l = { ...r, offset: r.offset - a }, v = { ...t, anchor: n, focus: l };
      N.select(e, v);
    }
  }
}
class Pi extends te {
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
const yn = /* @__PURE__ */ A({
  setup() {
    const e = G(), t = Re(he.EDITORCONFIG), n = w([]), r = w(!1);
    function o() {
      r.value || (r.value = !0);
    }
    function i() {
      r.value && (r.value = !1);
    }
    async function s(a) {
      if (e.value ?? (e.value = new Pi(a)), Ni(a), e.value.isDisabled())
        return;
      const l = e.value.getValue();
      if (l) {
        if (n.value = await t.fetchEnglish(l), n.value.length <= 0)
          return D.emit(M.ERROR, "找不到单词的音标");
        o();
      }
    }
    return () => u(oe, {
      visible: r.value,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => u(j, {
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
        onMousedown: q(() => {
        }, ["stop", "prevent"])
      }, [a]))])
    });
  }
});
class Vi extends te {
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
const Ui = [{
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
}], wn = /* @__PURE__ */ A({
  setup() {
    const e = G(), t = w(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function r() {
      t.value && (t.value = !1);
    }
    async function o(i) {
      e.value ?? (e.value = new Vi(i)), !e.value.isDisabled() && n();
    }
    return () => u(oe, {
      style: {
        padding: "0px"
      },
      visible: t.value,
      "onUpdate:visible": (i) => t.value = i,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => u(j, {
        text: "局部变速",
        icon: "changespeed",
        onClick: o
      }, null),
      default: () => u("div", {
        class: "d-flex flex-column overflow-x-hidden overflow-y-scroll",
        style: "height:15rem"
      }, [Ui.map(({
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
        onMousedown: q(() => {
        }, ["stop", "prevent"])
      }, [i]))])
    });
  }
});
class Fi extends te {
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
const ji = [{
  value: "200ms",
  label: "短"
}, {
  value: "300ms",
  label: "中"
}, {
  value: "500ms",
  label: "长"
}], xn = /* @__PURE__ */ A({
  setup() {
    const e = G(), t = w(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function r() {
      t.value && (t.value = !1);
    }
    function o(i) {
      e.value ?? (e.value = new Fi(i)), !e.value.isDisabled() && n();
    }
    return () => u(oe, {
      visible: t.value,
      "onUpdate:visible": (i) => t.value = i,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => u(j, {
        text: "停顿调节",
        icon: "rhythm",
        onClick: o
      }, null),
      default: () => u("div", {
        class: "d-flex flex-column"
      }, [ji.map(({
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
        onMousedown: q(() => {
        }, ["stop", "prevent"])
      }, [i]))])
    });
  }
});
class Gi extends te {
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
    ), Ci(
      this.editor,
      "ssml-audio",
      o.domId,
      (i) => vn(i[0].src)
    );
  }
}
const En = /* @__PURE__ */ A({
  __name: "special-menu",
  setup(e) {
    const t = w(), n = G(), { x: r, y: o, height: i } = xe(t), s = (l) => {
      if (n.value ?? (n.value = new Gi(l)), n.value.isDisabled())
        return !1;
      n.value.record(), D.emit(M.SPECIAL_MENU_CLICK, {
        x: r.value - 200,
        y: o.value + i.value
      });
    };
    function a(l) {
      n.value && !n.value.isDisabled() && (n.value.restore(), n.value.exec(l));
    }
    return F(() => {
      D.on(M.SPECIAL_DRAG_BOX_SUBMIT, a);
    }), X(() => {
      D.off(M.SPECIAL_DRAG_BOX_SUBMIT, a);
    }), (l, v) => (k(), U(y(j), {
      ref_key: "menuRef",
      ref: t,
      text: "音效",
      icon: "special",
      onClick: s
    }, null, 512));
  }
}), Sn = /* @__PURE__ */ A({
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
    F(() => {
      D.on(M.SPECIAL_MENU_CLICK, l);
    }), X(() => {
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
    return (d, f) => (k(), U(y(be), {
      visible: t.value,
      "onUpdate:visible": f[0] || (f[0] = (m) => t.value = m),
      position: n.value,
      "onUpdate:position": f[1] || (f[1] = (m) => n.value = m)
    }, {
      default: h(() => [
        u(y(_e), {
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
class Wi extends te {
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
const Ki = [{
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
}], On = /* @__PURE__ */ A({
  setup() {
    const e = G(), t = w(!1), n = w();
    function r() {
      t.value || (t.value = !0);
    }
    function o() {
      t.value && (t.value = !1);
    }
    function i(a) {
      e.value ?? (e.value = new Wi(a)), !e.value.isDisabled() && (r(), e.value.record(), n.value.focus());
    }
    function s(a) {
      var l, v;
      o(), a && ((l = e.value) == null || l.restore(), (v = e.value) == null || v.exec({
        value: a,
        label: a
      }));
    }
    return () => u(oe, {
      visible: t.value,
      "onUpdate:visible": (a) => t.value = a,
      trigger: "contextmenu",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => u(j, {
        text: "插入静音",
        icon: "mute",
        onClick: i
      }, null),
      default: () => u("div", {
        class: "d-flex flex-column"
      }, [Ki.map(({
        value: a,
        label: l
      }) => u("div", {
        key: a,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => s(a),
        onMousedown: q(() => {
        }, ["stop", "prevent"])
      }, [l])), u(rt, {
        type: "number",
        ref: n,
        onSubmit: s
      }, null)])
    });
  }
}), Cn = /* @__PURE__ */ A({
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
      (v = n.value) == null || v.emit(de.UPDATE_BGM, l);
    }
    return F(() => {
      D.on(M.BGM_DRAG_BOX_SUBMIT, a);
    }), X(() => {
      D.off(M.BGM_DRAG_BOX_SUBMIT, a);
    }), (l, v) => (k(), U(y(j), {
      ref_key: "menuRef",
      ref: t,
      text: "配乐",
      icon: "bgm",
      onClick: s
    }, null, 512));
  }
}), In = /* @__PURE__ */ A({
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
    F(() => {
      D.on(M.BGM_MENU_CLICK, l);
    }), X(() => {
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
    return (d, f) => (k(), U(y(be), {
      visible: t.value,
      "onUpdate:visible": f[0] || (f[0] = (m) => t.value = m),
      position: n.value,
      "onUpdate:position": f[1] || (f[1] = (m) => n.value = m)
    }, {
      default: h(() => [
        u(y(_e), {
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
}), $n = /* @__PURE__ */ A({
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
    return F(() => {
      D.on(M.SENSITIVE_DRAG_BOX_SUBMIT, a);
    }), X(() => {
      D.off(M.SENSITIVE_DRAG_BOX_SUBMIT, a);
    }), (l, v) => (k(), U(y(j), {
      ref_key: "menuRef",
      ref: t,
      text: "敏感词",
      icon: "sensitive",
      onClick: s
    }, null, 512));
  }
}), Mn = /* @__PURE__ */ A({
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
    F(() => {
      D.on(M.SENSITIVE_MENU_CLICK, l);
    }), X(() => {
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
    return (d, f) => (k(), U(y(be), {
      visible: t.value,
      "onUpdate:visible": f[0] || (f[0] = (m) => t.value = m),
      position: n.value,
      "onUpdate:position": f[1] || (f[1] = (m) => n.value = m)
    }, {
      default: h(() => [
        u(y(_e), {
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
}), Dn = /* @__PURE__ */ A({
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
    return F(() => {
      D.on(M.MANAGEMENT_DRAG_BOX_SUBMIT, a);
    }), X(() => {
      D.off(M.MANAGEMENT_DRAG_BOX_SUBMIT, a);
    }), (l, v) => (k(), U(y(j), {
      ref_key: "menuRef",
      ref: t,
      text: "多人配音",
      icon: "management",
      onClick: s
    }, null, 512));
  }
}), Rn = /* @__PURE__ */ A({
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
    F(() => {
      D.on(M.MANAGEMENT_MENU_CLICK, l);
    }), X(() => {
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
    return (d, f) => (k(), U(y(be), {
      visible: t.value,
      "onUpdate:visible": f[0] || (f[0] = (m) => t.value = m),
      position: n.value,
      "onUpdate:position": f[1] || (f[1] = (m) => n.value = m)
    }, {
      default: h(() => [
        u(y(_e), {
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
}), Tn = /* @__PURE__ */ A({
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
    return F(() => {
      D.on(M.CONVERSION_DRAG_BOX_SUBMIT, a);
    }), X(() => {
      D.off(M.CONVERSION_DRAG_BOX_SUBMIT, a);
    }), (l, v) => (k(), U(y(j), {
      ref_key: "menuRef",
      ref: t,
      text: "局部变音",
      icon: "conversion",
      onClick: s
    }, null, 512));
  }
}), kn = /* @__PURE__ */ A({
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
    F(() => {
      D.on(M.CONVERSION_MENU_CLICK, l);
    }), X(() => {
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
    return (d, f) => (k(), U(y(be), {
      visible: t.value,
      "onUpdate:visible": f[0] || (f[0] = (m) => t.value = m),
      position: n.value,
      "onUpdate:position": f[1] || (f[1] = (m) => n.value = m)
    }, {
      default: h(() => [
        u(y(_e), {
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
}), Hi = (e) => (ye("data-v-93c5e583"), e = e(), we(), e), zi = { class: "anchor-avatar d-flex flex-column justify-content-center align-items-center" }, Xi = ["src"], qi = /* @__PURE__ */ Hi(() => /* @__PURE__ */ I("div", { class: "anchor-avatar-name text-white" }, "莫厚渊", -1)), Yi = /* @__PURE__ */ A({
  __name: "try-play-circle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = w(`
  https://mobvoi-speech-public.mobvoi.com/headerImage/4314c841777e4d20901cd5d04a28e91a.png?iopcmd=thumbnail&type=8&width=80&height=80`), r = w(), o = w(0), i = w(0), { style: s } = nn(
      r,
      Ae(r, {
        initialValue: { x: window.innerWidth - 15, y: window.innerHeight / 2 - 15 },
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
      I("div", zi, [
        I("img", {
          src: n.value,
          class: "rounded-circle"
        }, null, 8, Xi),
        qi
      ])
    ], 36)), [
      [et, d.visible]
    ]);
  }
});
const Qi = /* @__PURE__ */ K(Yi, [["__scopeId", "data-v-93c5e583"]]), Zi = (e) => (ye("data-v-09793f61"), e = e(), we(), e), Ji = { class: "anchor-avatar d-flex flex-column justify-content-center" }, es = ["src"], ts = /* @__PURE__ */ Zi(() => /* @__PURE__ */ I("div", { class: "anchor-avatar-name text-white" }, "莫厚渊", -1)), ns = /* @__PURE__ */ A({
  __name: "anchor-avatar",
  setup(e) {
    const t = w(`
  https://mobvoi-speech-public.mobvoi.com/headerImage/4314c841777e4d20901cd5d04a28e91a.png?iopcmd=thumbnail&type=8&width=80&height=80`);
    return (n, r) => (k(), V("div", Ji, [
      I("img", {
        src: t.value,
        class: "rounded-circle"
      }, null, 8, es),
      ts
    ]));
  }
});
const rs = /* @__PURE__ */ K(ns, [["__scopeId", "data-v-09793f61"]]), os = { class: "anchor-list w-100 d-flex flex-row flex-wrap justify-content-between align-content-start overflow-x-hidden overflow-y-auto" }, is = /* @__PURE__ */ A({
  __name: "anchor-list",
  setup(e) {
    return (t, n) => (k(), V("div", os, [
      (k(), V(ve, null, Ee(100, (r, o) => u(rs, { key: o })), 64))
    ]));
  }
});
const ss = /* @__PURE__ */ K(is, [["__scopeId", "data-v-3c347263"]]), ls = /* @__PURE__ */ A({
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
const C = /* @__PURE__ */ K(ls, [["__scopeId", "data-v-fe47427c"]]), as = { class: "tag-list w-100" }, us = { class: "w-100 d-flex flex-row" }, cs = { class: "tag-list-body w-100 d-flex flex-row flex-wrap align-items-start overflow-y-auto overflow-x-hidden" }, ds = /* @__PURE__ */ A({
  __name: "tag-list",
  setup(e) {
    return (t, n) => (k(), V("div", as, [
      I("div", us, [
        u(C, null, {
          default: h(() => [
            S("全部")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("男声")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("女声")
          ]),
          _: 1
        })
      ]),
      I("div", cs, [
        u(C, null, {
          default: h(() => [
            S("全部")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("影视")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("情感")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("娱乐")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("快板")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("书单")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("名人")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("角色")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("全部")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("影视")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("情感")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("娱乐")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("快板")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("书单")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("名人")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("角色")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("全部")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("影视")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("情感")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("娱乐")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("快板")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("书单")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("名人")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("角色")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("全部")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("影视")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("情感")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("娱乐")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("快板")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("书单")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("名人")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("角色")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("全部")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("影视")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("情感")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("娱乐")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("快板")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("书单")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("名人")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("角色")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("全部")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("影视")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("情感")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("娱乐")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("快板")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("书单")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("名人")
          ]),
          _: 1
        }),
        u(C, null, {
          default: h(() => [
            S("角色")
          ]),
          _: 1
        })
      ])
    ]));
  }
});
const fs = /* @__PURE__ */ K(ds, [["__scopeId", "data-v-4d21bc70"]]);
const An = (e) => (ye("data-v-f75c8d40"), e = e(), we(), e), ps = { class: "px-2 pb-2" }, vs = { class: "try-play-header d-flex flex-row justify-content-between align-items-center" }, ms = { class: "try-play-body w-100 h-100 d-flex flex-row" }, hs = { class: "try-play-left w-50" }, _s = { class: "type-list d-flex flex-row border-bottom border-secondary" }, bs = /* @__PURE__ */ An(() => /* @__PURE__ */ I("div", { class: "py-1" }, null, -1)), gs = /* @__PURE__ */ An(() => /* @__PURE__ */ I("div", { class: "try-play-right border border-secondary w-50" }, "right", -1)), ys = /* @__PURE__ */ A({
  __name: "try-play-panle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = e, r = w(), o = w(""), i = w(), s = w();
    F(() => {
      window.addEventListener("keydown", a);
    }), X(() => {
      window.addEventListener("keydown", a);
    }), re(
      () => n.visible,
      (f) => {
        f && setTimeout(() => {
          d();
        }, 200);
      }
    );
    function a(f) {
      f.code === "Escape" && n.visible && v();
    }
    const { style: l } = nn(
      i,
      Ae(s, {
        initialValue: {
          x: 200,
          y: 200
        }
      })
    );
    function v() {
      t("update:visible", !1);
    }
    function d() {
      var f;
      (f = r.value) == null || f.focus();
    }
    return (f, m) => Je((k(), V("div", {
      ref_key: "boxRef",
      ref: i,
      style: Te([y(l), { position: "fixed" }]),
      class: "try-play user-select-none card z-3 shadow"
    }, [
      I("div", ps, [
        I("div", vs, [
          I("div", {
            ref_key: "handleRef",
            ref: s,
            class: "w-100 h-100"
          }, null, 512),
          I("div", {
            onClick: v,
            class: "px-2 py-1 try-play-menu-close"
          }, [
            u(y(Jn), { color: "white" }, {
              default: h(() => [
                u(y(rr))
              ]),
              _: 1
            })
          ])
        ]),
        I("div", null, [
          I("div", ms, [
            I("div", hs, [
              I("div", null, [
                u(y(tt), {
                  onSubmit: m[1] || (m[1] = q(() => {
                  }, ["prevent"]))
                }, {
                  default: h(() => [
                    u(y(nt), {
                      ref_key: "searchInputRef",
                      ref: r,
                      modelValue: o.value,
                      "onUpdate:modelValue": m[0] || (m[0] = (x) => o.value = x),
                      placeholder: "输入名称搜索"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              I("div", _s, [
                u(C, null, {
                  default: h(() => [
                    S("热榜")
                  ]),
                  _: 1
                }),
                u(C, null, {
                  default: h(() => [
                    S("SVIP")
                  ]),
                  _: 1
                }),
                u(C, null, {
                  default: h(() => [
                    S("付费")
                  ]),
                  _: 1
                })
              ]),
              u(fs),
              bs,
              u(ss)
            ]),
            gs
          ])
        ])
      ])
    ], 4)), [
      [et, f.visible]
    ]);
  }
});
const ws = /* @__PURE__ */ K(ys, [["__scopeId", "data-v-f75c8d40"]]), Ln = /* @__PURE__ */ A({
  __name: "try-play",
  setup(e) {
    const t = w(!0);
    function n(r) {
      r || (t.value = !0);
    }
    return (r, o) => (k(), U(Ze, { to: "body" }, [
      u(Qi, {
        visible: t.value,
        "onUpdate:visible": o[0] || (o[0] = (i) => t.value = i)
      }, null, 8, ["visible"]),
      u(ws, {
        visible: !t.value,
        "onUpdate:visible": n
      }, null, 8, ["visible"])
    ]));
  }
});
const xs = {
  install: (e) => {
    e.component("SpeakerMenu", mn), e.component("ContinuousMenu", hn), e.component("ReadMenu", _n), e.component("DigitalMenu", bn), e.component("AliasMenu", gn), e.component("EnglishMenu", yn), e.component("ChangespeedMenu", wn), e.component("RhythmMenu", xn), e.component("SpecialMenu", En), e.component("SpecialDragBox", Sn), e.component("MuteMenu", On), e.component("BgmMenu", Cn), e.component("BgmDragBox", In), e.component("SensitiveMenu", $n), e.component("SensitiveDragBox", Mn), e.component("ManagementMenu", Dn), e.component("ManagementDragBox", Rn), e.component("ConversionMenu", Tn), e.component("ConversionDragBox", kn), e.component("TryPlay", Ln);
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
var Es = Qe.exports;
(function(e, t) {
  var n = pe && pe.__importDefault || function(p) {
    return p && p.__esModule ? p : { default: p };
  };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const r = n(Es);
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
var Ss = Ye.exports;
const Os = /* @__PURE__ */ lt(Ss), fe = (e) => (ye("data-v-f5188410"), e = e(), we(), e), Cs = { class: "editor-title d-flex flex-row align-item-center justify-content-between" }, Is = { class: "title-wrapper d-flex flex-column justify-content-center ps-3" }, $s = /* @__PURE__ */ fe(() => /* @__PURE__ */ I("div", { class: "title-author pb-1" }, "SSML编辑器", -1)), Ms = { class: "author d-flex flex-row align-items-center justify-content-start" }, Ds = /* @__PURE__ */ fe(() => /* @__PURE__ */ I("div", null, "已保存", -1)), Rs = /* @__PURE__ */ fe(() => /* @__PURE__ */ I("div", null, "|", -1)), Ts = /* @__PURE__ */ fe(() => /* @__PURE__ */ I("span", { class: "iconfont icon-play font-size-12 p-1" }, null, -1)), ks = /* @__PURE__ */ fe(() => /* @__PURE__ */ I("div", { class: "d-inline-block" }, null, -1)), As = { class: "operation-wrapper d-flex flex-row justify-content-center align-items-center" }, Ls = /* @__PURE__ */ fe(() => /* @__PURE__ */ I("div", { class: "menu-divider" }, null, -1)), Bs = /* @__PURE__ */ fe(() => /* @__PURE__ */ I("div", { class: "px-1" }, null, -1)), Ns = { class: "ssml-code" }, Ps = { class: "dialog-footer" }, Vs = /* @__PURE__ */ A({
  __name: "editor-title",
  props: {
    characterTotal: {},
    characterMax: {},
    bgm: {}
  },
  setup(e) {
    const t = Re(he.EDITOR), n = w(!1), r = w(""), o = z(() => Os(r.value, {
      indentation: "    ",
      filter: (a) => a.type !== "Comment",
      collapseContent: !1,
      lineSeparator: `
`
    })), i = () => {
      t && (r.value = t.value.getHtml(), n.value = !0);
    }, s = () => {
      t == null || t.value.emit(de.REMOVE_BGM);
    };
    return (a, l) => (k(), V(ve, null, [
      I("div", Cs, [
        I("div", Is, [
          $s,
          I("div", Ms, [
            Ds,
            Rs,
            I("div", null, ne(a.characterTotal) + "/" + ne(a.characterMax) + "字", 1),
            a.bgm ? (k(), U(y(er), {
              key: 0,
              class: "bgm-txt ms-2",
              closable: "",
              size: "small",
              onClick: l[0] || (l[0] = () => a.bgm && a.bgm.value && y(vn)(a.bgm.value)),
              onClose: s
            }, {
              default: h(() => [
                Ts,
                ks,
                I("span", null, ne(a.bgm.label), 1)
              ]),
              _: 1
            })) : Hn("", !0)
          ])
        ]),
        I("div", As, [
          u(y(ae), {
            type: "primary",
            icon: y(or),
            disabled: ""
          }, {
            default: h(() => [
              S("分享")
            ]),
            _: 1
          }, 8, ["icon"]),
          Ls,
          u(y(ae), {
            type: "primary",
            onClick: i
          }, {
            default: h(() => [
              S("查看SSML")
            ]),
            _: 1
          }),
          u(y(ae), { disabled: "" }, {
            default: h(() => [
              S("下载音频")
            ]),
            _: 1
          }),
          u(y(ae), { disabled: "" }, {
            default: h(() => [
              S("下载视频")
            ]),
            _: 1
          }),
          u(y(ae), { disabled: "" }, {
            default: h(() => [
              S("下载字幕")
            ]),
            _: 1
          }),
          u(y(ae), { disabled: "" }, {
            default: h(() => [
              S("声音转换")
            ]),
            _: 1
          }),
          Bs
        ])
      ]),
      u(y(tr), {
        modelValue: n.value,
        "onUpdate:modelValue": l[2] || (l[2] = (v) => n.value = v),
        title: "查看SSML",
        width: "50%"
      }, {
        footer: h(() => [
          I("span", Ps, [
            u(y(ae), {
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
          I("pre", Ns, ne(o.value), 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
});
const Us = /* @__PURE__ */ K(Vs, [["__scopeId", "data-v-f5188410"]]), Fs = /* @__PURE__ */ A({
  __name: "editor-core",
  props: {
    editorConfig: {},
    defaultHtml: {}
  },
  emits: ["created", "change"],
  setup(e, { emit: t }) {
    const n = e, r = w(null);
    F(() => {
      o();
    });
    const o = () => {
      r.value && Qn({
        selector: r.value,
        mode: "simple",
        html: mt(n.defaultHtml),
        config: {
          ...mt(n.editorConfig),
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
}), js = { class: "content" }, Gs = /* @__PURE__ */ A({
  __name: "bar-view",
  setup(e) {
    return (t, n) => (k(), V(ve, null, [
      I("div", js, [
        u(y(rn), null, {
          default: h(() => [
            u(y(ue), { divider: "green" }, {
              default: h(() => [
                u(y(j), {
                  text: "24K高清音质",
                  icon: "play",
                  disabled: ""
                })
              ]),
              _: 1
            }),
            u(y(ue), { divider: "cyan" }, {
              default: h(() => [
                u(y(mn)),
                u(y(_n)),
                u(y(bn)),
                u(y(hn)),
                u(y(gn)),
                u(y(yn))
              ]),
              _: 1
            }),
            u(y(ue), { divider: "orange" }, {
              default: h(() => [
                u(y(wn)),
                u(y(Dn)),
                u(y(Tn))
              ]),
              _: 1
            }),
            u(y(ue), { divider: "purple" }, {
              default: h(() => [
                u(y(xn)),
                u(y(On))
              ]),
              _: 1
            }),
            u(y(ue), { divider: "yellow" }, {
              default: h(() => [
                u(y(En)),
                u(y(Cn))
              ]),
              _: 1
            }),
            u(y(ue), null, {
              default: h(() => [
                u(y($n))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      u(y(In)),
      u(y(Sn)),
      u(y(Mn)),
      u(y(Rn)),
      u(y(kn)),
      u(y(Ln))
    ], 64));
  }
}), Ws = { class: "editor-view" }, Ks = { class: "editor-box" }, Hs = { class: "editor-core-container pt-1" }, zs = `地球在极其遥远的未来可能面临一些威胁，但目前不太可能突然消失。
The Earth may face some threats in the extremely distant future, but it is currently unlikely to suddenly disappear.
`, Xs = /* @__PURE__ */ A({
  __name: "editor-view",
  emits: ["onCreated", "onChange"],
  setup(e, { emit: t }) {
    const n = w(0), r = G(), o = w(null);
    zn(he.EDITOR, r);
    const i = { maxLength: 5e3, placeholder: "请输入内容..." };
    X(() => {
      var l;
      (l = r.value) == null || l.destroy();
    });
    const s = (l) => {
      r.value = l, t("onCreated", l), l.on(de.UPDATE_BGM, (v) => {
        o.value = v;
      }), l.on(de.REMOVE_BGM, () => {
        o.value = null;
      });
    }, a = (l) => {
      n.value = l.getText().length, t("onChange", l);
    };
    return (l, v) => (k(), V("div", Ws, [
      u(Us, {
        bgm: o.value,
        "character-total": n.value,
        "character-max": i.maxLength || 0
      }, null, 8, ["bgm", "character-total", "character-max"]),
      I("div", Ks, [
        u(Gs),
        I("div", Hs, [
          u(Fs, {
            "editor-config": i,
            "default-html": zs,
            onChange: a,
            onCreated: s
          })
        ])
      ])
    ]));
  }
});
const qs = /* @__PURE__ */ K(Xs, [["__scopeId", "data-v-0eafcab5"]]), Ys = {
  install(e) {
    e.component("EditorView", qs);
  }
};
function Qt(e, t, n, r, o) {
  const i = t === void 0 ? void 0 : t.key;
  return { sel: e, data: t, children: n, text: r, elm: o, key: i };
}
const Zt = Array.isArray;
function Ke(e) {
  return typeof e == "string" || typeof e == "number" || e instanceof String || e instanceof Number;
}
function Bn(e, t, n) {
  if (e.ns = "http://www.w3.org/2000/svg", n !== "foreignObject" && t !== void 0)
    for (let r = 0; r < t.length; ++r) {
      const o = t[r];
      if (typeof o == "string")
        continue;
      const i = o.data;
      i !== void 0 && Bn(i, o.children, o.sel);
    }
}
function B(e, t, n) {
  let r = {}, o, i, s;
  if (n !== void 0 ? (t !== null && (r = t), Zt(n) ? o = n : Ke(n) ? i = n.toString() : n && n.sel && (o = [n])) : t != null && (Zt(t) ? o = t : Ke(t) ? i = t.toString() : t && t.sel ? o = [t] : r = t), o !== void 0)
    for (s = 0; s < o.length; ++s)
      Ke(o[s]) && (o[s] = Qt(void 0, void 0, void 0, o[s], void 0));
  return e[0] === "s" && e[1] === "v" && e[2] === "g" && (e.length === 3 || e[3] === "." || e[3] === "#") && Bn(r, o, e), Qt(e, r, o, i, void 0);
}
const ie = { style: { userSelect: "none" }, contentEditable: !1 };
function ft(e) {
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
function pt(e, t) {
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
function Qs(e) {
  return B("span.ssml-wrap", [
    B(`span.tag.bg-color.${e.bgColor}`, { ...ie }, [
      B("span.tag-remark", { attrs: { "data-tag-remark": e.remark } }),
      B(`span#${e.domId}-close.btn-close`, B("span.iconfont.icon-roundclosefill", null))
    ])
  ]);
}
function Zs(e) {
  return B("span.ssml-wrap", [
    B(`span.tag.bg-color.${e.bgColor}`, { ...ie }, [
      B(`span#${e.domId}-play.btn-text`, B("span.iconfont.icon-play", null)),
      B("span.tag-remark", { attrs: { "data-tag-remark": e.remark } }),
      B(`span#${e.domId}-close.btn-text`, B("span.iconfont.icon-roundclosefill", null))
    ])
  ]);
}
function Js(e) {
  const t = e;
  return ft({ ...t, plain: t.word });
}
function el(e, t) {
  if (t)
    return pt(e, t);
  const n = e;
  return ft({ ...n, plain: n.value });
}
function tl(e, t) {
  if (!t)
    throw Error("children is not null");
  return pt(e, t);
}
function nl(e) {
  return Qs(e);
}
function rl(e) {
  const t = e;
  return ft({ ...t, plain: t.value });
}
function ol(e, t) {
  if (!t)
    throw Error("children is not null");
  return pt(e, t);
}
function il(e) {
  return Zs(e);
}
const sl = [
  {
    type: "ssml-p",
    renderElem: Js
  },
  {
    type: "ssml-w",
    renderElem: el
  },
  {
    type: "ssml-say-as",
    renderElem: tl
  },
  {
    type: "ssml-break",
    renderElem: nl
  },
  {
    type: "ssml-sub",
    renderElem: rl
  },
  {
    type: "ssml-prosody",
    renderElem: ol
  },
  {
    type: "ssml-audio",
    renderElem: il
  }
];
function ll(e, t) {
  return `<s>${t}</s>`;
}
function al(e, t) {
  const { phoneme: n, value: r } = e;
  return n ? `<w phoneme="${n}">${r}</w>` : `<w>${t}</w>`;
}
function ul(e) {
  const { word: t, phoneme: n } = e;
  return `<p ph="${n}">${t}</p>`;
}
function cl(e, t) {
  const { interpretAs: n } = e;
  return `<say-as interpret-as="${n}">${t}</say-as>`;
}
function dl(e) {
  const { time: t } = e;
  return `<break time="${t}" />`;
}
function fl(e) {
  const { alias: t, value: n } = e;
  return `<sub alias="${t}">${n}</sub>`;
}
function pl(e, t) {
  const { rate: n } = e;
  return `<prosody rate="${n}">${t}</prosody>`;
}
function vl(e) {
  const { src: t } = e;
  return `<audio src="${t}" />`;
}
const ml = [
  {
    type: "paragraph",
    elemToHtml: ll
  },
  {
    type: "ssml-w",
    elemToHtml: al
  },
  {
    type: "ssml-p",
    elemToHtml: ul
  },
  {
    type: "ssml-say-as",
    elemToHtml: cl
  },
  {
    type: "ssml-break",
    elemToHtml: dl
  },
  {
    type: "ssml-sub",
    elemToHtml: fl
  },
  {
    type: "ssml-prosody",
    elemToHtml: pl
  },
  {
    type: "ssml-audio",
    elemToHtml: vl
  }
];
function hl(e, t) {
  return {
    type: "paragraph",
    children: t
  };
}
function _l(e, t) {
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
const bl = [
  {
    selector: "s",
    parseElemHtml: hl
  },
  {
    selector: "w",
    parseElemHtml: _l
  }
];
function W(e, t) {
  return e === t;
}
function gl(e) {
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
  return e.on(de.UPDATE_SPEAK, (f) => {
    Object.assign(d, f);
  }), e.on(de.UPDATE_BGM, (f) => {
    d.bgm = f.value, d.bgmRemark = f.label;
  }), e.on(de.REMOVE_BGM, () => {
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
const Tl = {
  editorPlugin: gl,
  renderElems: sl,
  elemsToHtml: ml,
  parseElemsHtml: bl
};
const kl = {
  install(e, t) {
    const n = t ?? {};
    e.provide(he.EDITORCONFIG, n), D.on(M.ERROR, n.handleError), e.use(ho), e.use(xs), e.use(Ys);
  }
};
export {
  gn as AliasMenu,
  j as BarButton,
  rt as BarInput,
  Sr as BarPopover,
  _e as BarSearch,
  rn as BarWrapper,
  ue as BarWrapperGroup,
  co as BarWrapperItem,
  In as BgmDragBox,
  Cn as BgmMenu,
  wn as ChangespeedMenu,
  hn as ContinuousMenu,
  kn as ConversionDragBox,
  Tn as ConversionMenu,
  Cl as DOMComment,
  Il as DOMElement,
  Ol as DOMNode,
  Ml as DOMRange,
  Dl as DOMSelection,
  Rl as DOMStaticRange,
  $l as DOMText,
  bn as DigitalMenu,
  be as DragBox,
  M as EMITTER_EVENT,
  Tl as EditorCoreModule,
  qs as EditorView,
  yn as EnglishMenu,
  ro as FixedPanel,
  Rn as ManagementDragBox,
  Dn as ManagementMenu,
  On as MuteMenu,
  he as PROVIDER_KEY,
  _n as ReadMenu,
  xn as RhythmMenu,
  Mn as SensitiveDragBox,
  $n as SensitiveMenu,
  mn as SpeakerMenu,
  Sn as SpecialDragBox,
  En as SpecialMenu,
  Ln as TryPlay,
  de as WANGEDITOR_EVENT,
  kl as default,
  Mi as genRandomStr,
  vn as playSound,
  nn as withLimitView
};

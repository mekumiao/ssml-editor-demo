var Gn = Object.defineProperty;
var qn = (e, t, n) => t in e ? Gn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ee = (e, t, n) => (qn(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as M, inject as pe, openBlock as I, createElementBlock as D, normalizeClass as _e, withModifiers as Q, createElementVNode as d, toDisplayString as j, ref as y, createBlock as Y, unref as b, withCtx as v, createVNode as o, renderSlot as oe, isRef as Xn, toRefs as Yn, customRef as Kn, getCurrentInstance as an, onMounted as Ee, nextTick as Qn, getCurrentScope as Zn, onScopeDispose as Jn, computed as Z, watch as ve, watchEffect as es, createTextVNode as E, Fragment as le, renderList as xe, toRaw as dt, pushScopeId as ke, popScopeId as Se, Teleport as ft, normalizeStyle as je, onUnmounted as pt, withDirectives as de, vShow as fe, shallowRef as G, createCommentVNode as un, reactive as Et, createStaticVNode as cn, provide as ts } from "vue";
import { SlateEditor as $e, SlateRange as se, SlateTransforms as A, DomEditor as V, SlateText as ns, SlateElement as ss, Boot as K, createEditor as rs } from "@wangeditor/editor";
import { ElForm as ze, ElInput as He, ElPopover as ue, ElMenu as ls, ElMenuItem as qe, ElSelect as rt, ElOption as lt, ElButton as re, ElTag as ce, ElIcon as dn, ElSlider as Xe, ElDialog as os } from "element-plus";
import { Search as as, More as is, Star as us, Minus as cs, Share as ds } from "@element-plus/icons-vue";
const fs = "ssml-editor", ps = "ssml-editor-config", ae = {
  EDITOR: fs,
  EDITORCONFIG: ps
}, vs = "emitter-ediror-error", z = {
  ERROR: vs
}, ms = "wangeditor-update-bgm", hs = "wangeditor-remove-bgm", _s = "wangeditor-update-speak", Ne = {
  UPDATE_BGM: ms,
  REMOVE_BGM: hs,
  UPDATE_SPEAK: _s
}, ys = { class: "bar-button-icon" }, gs = {
  class: "fw-normal",
  style: { "font-size": "0.85rem" }
}, bs = /* @__PURE__ */ M({
  __name: "bar-button",
  props: {
    text: {},
    icon: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, s = pe(ae.EDITOR), r = () => {
      n.disabled || t("click", s.value);
    };
    return (l, a) => (I(), D("div", {
      class: _e(["bar-button px-2 py-1", { disabled: l.disabled }]),
      onClick: r,
      onMousedown: a[0] || (a[0] = Q(() => {
      }, ["prevent"]))
    }, [
      d("div", ys, [
        d("span", {
          class: _e(["fs-3 iconfont-moyin", [`moyin-icon_${l.icon}`]])
        }, null, 2)
      ]),
      d("div", gs, j(l.text), 1)
    ], 34));
  }
});
const X = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, q = /* @__PURE__ */ X(bs, [["__scopeId", "data-v-7741060a"]]);
const vt = /* @__PURE__ */ M({
  __name: "bar-input",
  props: {
    type: {}
  },
  emits: ["submit"],
  setup(e, { expose: t, emit: n }) {
    const s = y(""), r = y();
    function l() {
      r.value.focus();
    }
    function a() {
      n("submit", s.value), s.value = "";
    }
    return t({
      focus: l
    }), (i, c) => (I(), Y(b(ze), {
      class: "flex flex-row",
      onSubmit: Q(a, ["prevent"])
    }, {
      default: v(() => [
        o(b(He), {
          type: i.type,
          ref_key: "inputRef",
          ref: r,
          modelValue: s.value,
          "onUpdate:modelValue": c[0] || (c[0] = (m) => s.value = m)
        }, null, 8, ["type", "modelValue"])
      ]),
      _: 1
    }, 8, ["onSubmit"]));
  }
});
const xs = /* @__PURE__ */ M({
  __name: "bar-popover",
  props: {
    visible: { type: Boolean },
    trigger: {},
    hideAfter: {},
    width: {}
  },
  emits: ["update:visible"],
  setup(e) {
    return (t, n) => (I(), Y(b(ue), {
      hideAfter: t.hideAfter,
      width: t.width,
      visible: t.visible,
      trigger: t.trigger,
      "onUpdate:visible": n[0] || (n[0] = (s) => t.$emit("update:visible", s))
    }, {
      reference: v(() => [
        oe(t.$slots, "reference")
      ]),
      default: v(() => [
        oe(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["hideAfter", "width", "visible", "trigger"]));
  }
});
function Ue(e) {
  return Zn() ? (Jn(e), !0) : !1;
}
function te(e) {
  return typeof e == "function" ? e() : b(e);
}
const Ae = typeof window < "u", ws = (e) => e != null, Me = () => {
};
var $s = Object.defineProperty, Es = Object.defineProperties, ks = Object.getOwnPropertyDescriptors, kt = Object.getOwnPropertySymbols, Ss = Object.prototype.hasOwnProperty, Cs = Object.prototype.propertyIsEnumerable, St = (e, t, n) => t in e ? $s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Os = (e, t) => {
  for (var n in t || (t = {}))
    Ss.call(t, n) && St(e, n, t[n]);
  if (kt)
    for (var n of kt(t))
      Cs.call(t, n) && St(e, n, t[n]);
  return e;
}, Rs = (e, t) => Es(e, ks(t));
function Ts(e, t = {}) {
  if (!Xn(e))
    return Yn(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const s in e.value)
    n[s] = Kn(() => ({
      get() {
        return e.value[s];
      },
      set(r) {
        var l;
        if ((l = te(t.replaceRef)) != null ? l : !0)
          if (Array.isArray(e.value)) {
            const i = [...e.value];
            i[s] = r, e.value = i;
          } else {
            const i = Rs(Os({}, e.value), { [s]: r });
            Object.setPrototypeOf(i, Object.getPrototypeOf(e.value)), e.value = i;
          }
        else
          e.value[s] = r;
      }
    }));
  return n;
}
function fn(e, t = !0) {
  an() ? Ee(e) : t ? e() : Qn(e);
}
function ne(e) {
  var t;
  const n = te(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const me = Ae ? window : void 0;
function we(...e) {
  let t, n, s, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, r] = e, t = me) : [t, n, s, r] = e, !t)
    return Me;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const l = [], a = () => {
    l.forEach((_) => _()), l.length = 0;
  }, i = (_, p, h, g) => (_.addEventListener(p, h, g), () => _.removeEventListener(p, h, g)), c = ve(
    () => [ne(t), te(r)],
    ([_, p]) => {
      a(), _ && l.push(
        ...n.flatMap((h) => s.map((g) => i(_, h, g, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), m = () => {
    c(), a();
  };
  return Ue(m), m;
}
function Is() {
  const e = y(!1);
  return an() && Ee(() => {
    e.value = !0;
  }), e;
}
function mt(e) {
  const t = Is();
  return Z(() => (t.value, !!e()));
}
function Ps(e, t = {}) {
  const { window: n = me } = t, s = mt(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let r;
  const l = y(!1), a = (m) => {
    l.value = m.matches;
  }, i = () => {
    r && ("removeEventListener" in r ? r.removeEventListener("change", a) : r.removeListener(a));
  }, c = es(() => {
    s.value && (i(), r = n.matchMedia(te(e)), "addEventListener" in r ? r.addEventListener("change", a) : r.addListener(a), l.value = r.matches);
  });
  return Ue(() => {
    c(), i(), r = void 0;
  }), l;
}
var Vs = Object.defineProperty, Ms = Object.defineProperties, Ls = Object.getOwnPropertyDescriptors, Ct = Object.getOwnPropertySymbols, Ds = Object.prototype.hasOwnProperty, Ns = Object.prototype.propertyIsEnumerable, Ot = (e, t, n) => t in e ? Vs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, As = (e, t) => {
  for (var n in t || (t = {}))
    Ds.call(t, n) && Ot(e, n, t[n]);
  if (Ct)
    for (var n of Ct(t))
      Ns.call(t, n) && Ot(e, n, t[n]);
  return e;
}, Fs = (e, t) => Ms(e, Ls(t));
function We(e, t = {}) {
  var n, s;
  const {
    pointerTypes: r,
    preventDefault: l,
    stopPropagation: a,
    exact: i,
    onMove: c,
    onEnd: m,
    onStart: _,
    initialValue: p,
    axis: h = "both",
    draggingElement: g = me,
    handle: f = e
  } = t, u = y(
    (n = te(p)) != null ? n : { x: 0, y: 0 }
  ), k = y(), R = (w) => r ? r.includes(w.pointerType) : !0, T = (w) => {
    te(l) && w.preventDefault(), te(a) && w.stopPropagation();
  }, $ = (w) => {
    if (!R(w) || te(i) && w.target !== te(e))
      return;
    const P = te(e).getBoundingClientRect(), N = {
      x: w.clientX - P.left,
      y: w.clientY - P.top
    };
    (_ == null ? void 0 : _(N, w)) !== !1 && (k.value = N, T(w));
  }, S = (w) => {
    if (!R(w) || !k.value)
      return;
    let { x: P, y: N } = u.value;
    (h === "x" || h === "both") && (P = w.clientX - k.value.x), (h === "y" || h === "both") && (N = w.clientY - k.value.y), u.value = {
      x: P,
      y: N
    }, c == null || c(u.value, w), T(w);
  }, O = (w) => {
    R(w) && k.value && (k.value = void 0, m == null || m(u.value, w), T(w));
  };
  if (Ae) {
    const w = { capture: (s = t.capture) != null ? s : !0 };
    we(f, "pointerdown", $, w), we(g, "pointermove", S, w), we(g, "pointerup", O, w);
  }
  return Fs(As({}, Ts(u)), {
    position: u,
    isDragging: Z(() => !!k.value),
    style: Z(
      () => `left:${u.value.x}px;top:${u.value.y}px;`
    )
  });
}
var Rt = Object.getOwnPropertySymbols, Bs = Object.prototype.hasOwnProperty, js = Object.prototype.propertyIsEnumerable, zs = (e, t) => {
  var n = {};
  for (var s in e)
    Bs.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && Rt)
    for (var s of Rt(e))
      t.indexOf(s) < 0 && js.call(e, s) && (n[s] = e[s]);
  return n;
};
function pn(e, t, n = {}) {
  const s = n, { window: r = me } = s, l = zs(s, ["window"]);
  let a;
  const i = mt(() => r && "ResizeObserver" in r), c = () => {
    a && (a.disconnect(), a = void 0);
  }, m = Z(
    () => Array.isArray(e) ? e.map((h) => ne(h)) : [ne(e)]
  ), _ = ve(
    m,
    (h) => {
      if (c(), i.value && r) {
        a = new ResizeObserver(t);
        for (const g of h)
          g && a.observe(g, l);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), p = () => {
    c(), _();
  };
  return Ue(p), {
    isSupported: i,
    stop: p
  };
}
function Te(e, t = {}) {
  const {
    reset: n = !0,
    windowResize: s = !0,
    windowScroll: r = !0,
    immediate: l = !0
  } = t, a = y(0), i = y(0), c = y(0), m = y(0), _ = y(0), p = y(0), h = y(0), g = y(0);
  function f() {
    const u = ne(e);
    if (!u) {
      n && (a.value = 0, i.value = 0, c.value = 0, m.value = 0, _.value = 0, p.value = 0, h.value = 0, g.value = 0);
      return;
    }
    const k = u.getBoundingClientRect();
    a.value = k.height, i.value = k.bottom, c.value = k.left, m.value = k.right, _.value = k.top, p.value = k.width, h.value = k.x, g.value = k.y;
  }
  return pn(e, f), ve(() => ne(e), (u) => !u && f()), r && we("scroll", f, { capture: !0, passive: !0 }), s && we("resize", f, { passive: !0 }), fn(() => {
    l && f();
  }), {
    height: a,
    bottom: i,
    left: c,
    right: m,
    top: _,
    width: p,
    x: h,
    y: g,
    update: f
  };
}
function vn(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: s = me, box: r = "content-box" } = n, l = Z(() => {
    var c, m;
    return (m = (c = ne(e)) == null ? void 0 : c.namespaceURI) == null ? void 0 : m.includes("svg");
  }), a = y(t.width), i = y(t.height);
  return pn(
    e,
    ([c]) => {
      const m = r === "border-box" ? c.borderBoxSize : r === "content-box" ? c.contentBoxSize : c.devicePixelContentBoxSize;
      if (s && l.value) {
        const _ = ne(e);
        if (_) {
          const p = s.getComputedStyle(_);
          a.value = Number.parseFloat(p.width), i.value = Number.parseFloat(p.height);
        }
      } else if (m) {
        const _ = Array.isArray(m) ? m : [m];
        a.value = _.reduce((p, { inlineSize: h }) => p + h, 0), i.value = _.reduce((p, { blockSize: h }) => p + h, 0);
      } else
        a.value = c.contentRect.width, i.value = c.contentRect.height;
    },
    n
  ), ve(
    () => ne(e),
    (c) => {
      a.value = c ? t.width : 0, i.value = c ? t.height : 0;
    }
  ), {
    width: a,
    height: i
  };
}
function Hs(e, t, n = {}) {
  const {
    root: s,
    rootMargin: r = "0px",
    threshold: l = 0.1,
    window: a = me,
    immediate: i = !0
  } = n, c = mt(() => a && "IntersectionObserver" in a), m = Z(() => {
    const f = te(e);
    return (Array.isArray(f) ? f : [f]).map(ne).filter(ws);
  });
  let _ = Me;
  const p = y(i), h = c.value ? ve(
    () => [m.value, ne(s), p.value],
    ([f, u]) => {
      if (_(), !p.value || !f.length)
        return;
      const k = new IntersectionObserver(
        t,
        {
          root: ne(u),
          rootMargin: r,
          threshold: l
        }
      );
      f.forEach((R) => R && k.observe(R)), _ = () => {
        k.disconnect(), _ = Me;
      };
    },
    { immediate: i, flush: "post" }
  ) : Me, g = () => {
    _(), h(), p.value = !1;
  };
  return Ue(g), {
    isSupported: c,
    isActive: p,
    pause() {
      _(), p.value = !1;
    },
    resume() {
      p.value = !0;
    },
    stop: g
  };
}
function Us(e, { window: t = me, scrollTarget: n } = {}) {
  const s = y(!1);
  return Hs(
    e,
    ([{ isIntersecting: r }]) => {
      s.value = r;
    },
    {
      root: n,
      window: t
    }
  ), s;
}
function mn(e = {}) {
  const {
    window: t = me,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: s = Number.POSITIVE_INFINITY,
    listenOrientation: r = !0,
    includeScrollbar: l = !0
  } = e, a = y(n), i = y(s), c = () => {
    t && (l ? (a.value = t.innerWidth, i.value = t.innerHeight) : (a.value = t.document.documentElement.clientWidth, i.value = t.document.documentElement.clientHeight));
  };
  if (c(), fn(c), we("resize", c, { passive: !0 }), r) {
    const m = Ps("(orientation: portrait)");
    ve(m, () => c());
  }
  return { width: a, height: i };
}
const Ws = (e) => (ke("data-v-e61eb377"), e = e(), Se(), e), Gs = { class: "search-content vh-50" }, qs = { class: "ps-2 w-75" }, Xs = { class: "menu" }, Ys = { class: "flex flex-row pt-1" }, Ks = { class: "content-list pt-1 w-90" }, Qs = ["onClick"], Zs = /* @__PURE__ */ Ws(() => /* @__PURE__ */ d("span", { class: "iconfont icon-play" }, null, -1)), Js = /* @__PURE__ */ M({
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
    const n = e, s = y(), r = y(""), l = y(""), a = y(""), i = y(n.dataList || []), c = y("first"), m = Us(s);
    ve(m, (g) => {
      g && setTimeout(() => {
        var f;
        (f = s.value) == null || f.focus();
      }, 100);
    }), Ee(async () => {
      i.value.length || await _();
    });
    async function _() {
      i.value = await n.fetch({
        search: r.value,
        menuKey: c.value,
        scene: l.value,
        style: a.value
      });
    }
    function p(g) {
      c.value = g, _();
    }
    function h(g) {
      t("submit", g);
    }
    return (g, f) => (I(), D("div", Gs, [
      d("div", qs, [
        o(b(ze), {
          onSubmit: Q(_, ["prevent"])
        }, {
          default: v(() => [
            o(b(He), {
              ref_key: "searchInputRef",
              ref: s,
              placeholder: "搜索",
              modelValue: r.value,
              "onUpdate:modelValue": f[0] || (f[0] = (u) => r.value = u),
              "suffix-icon": b(as)
            }, null, 8, ["modelValue", "suffix-icon"])
          ]),
          _: 1
        }, 8, ["onSubmit"])
      ]),
      d("div", Xs, [
        o(b(ls), {
          mode: "horizontal",
          "default-active": "first",
          onSelect: f[1] || (f[1] = (u) => p(u))
        }, {
          default: v(() => [
            o(b(qe), { index: "first" }, {
              default: v(() => [
                E(j(g.menuItemLabel.first), 1)
              ]),
              _: 1
            }),
            o(b(qe), { index: "second" }, {
              default: v(() => [
                E(j(g.menuItemLabel.second), 1)
              ]),
              _: 1
            }),
            o(b(qe), { index: "last" }, {
              default: v(() => [
                E(j(g.menuItemLabel.last), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      d("div", Ys, [
        o(b(rt), {
          modelValue: l.value,
          "onUpdate:modelValue": f[2] || (f[2] = (u) => l.value = u),
          onChange: _,
          class: "m-1",
          size: "large"
        }, {
          default: v(() => [
            (I(!0), D(le, null, xe(g.scenes, (u) => (I(), Y(b(lt), {
              key: u.value,
              label: u.label,
              value: u.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        o(b(rt), {
          modelValue: a.value,
          "onUpdate:modelValue": f[3] || (f[3] = (u) => a.value = u),
          onChange: _,
          class: "m-1",
          size: "large"
        }, {
          default: v(() => [
            (I(!0), D(le, null, xe(g.styles, (u) => (I(), Y(b(lt), {
              key: u.value,
              label: u.label,
              value: u.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      d("div", Ks, [
        (I(!0), D(le, null, xe(i.value, (u, k) => (I(), D("div", {
          onClick: (R) => h(dt(u)),
          class: "content-list-item clickable ps-3",
          key: k
        }, [
          Zs,
          d("span", null, j(u.label), 1)
        ], 8, Qs))), 128))
      ])
    ]));
  }
});
const ht = /* @__PURE__ */ X(Js, [["__scopeId", "data-v-e61eb377"]]), er = /* @__PURE__ */ M({
  __name: "fixed-panel",
  emits: ["dragging"],
  setup(e, { emit: t }) {
    const n = y(), s = Ae ? window.innerWidth : 200, r = Ae ? window.innerHeight : 200, { x: l, y: a } = We(n, {
      initialValue: { x: s - 100, y: r / 2 },
      preventDefault: !0,
      onStart: () => {
        t("dragging", !0);
      },
      onEnd: () => {
        t("dragging", !1);
      }
    }), { width: i, height: c } = vn(n), { width: m, height: _ } = mn(), p = Z(() => ({
      x: m.value - i.value,
      y: _.value - c.value
    })), h = Z(() => {
      if (!p.value)
        return g(l.value, a.value);
      const f = l.value < 5 ? 5 : l.value > p.value.x ? p.value.x - 5 : l.value, u = a.value < 5 ? 5 : a.value > p.value.y ? p.value.y - 5 : a.value;
      return g(f, u);
    });
    function g(f, u) {
      return `left:${f}px;top:${u}px`;
    }
    return (f, u) => (I(), Y(ft, { to: "body" }, [
      d("div", {
        ref_key: "boxRef",
        ref: n,
        class: "fixed-panel z-3 user-select-none",
        style: je([{ position: "fixed" }, h.value])
      }, [
        oe(f.$slots, "default")
      ], 4)
    ]));
  }
});
function Tt(e, t) {
  return `left:${e}px;top:${t}px`;
}
function _t(e, t) {
  const { width: n, height: s } = vn(e), { width: r, height: l } = mn(), a = Z(() => ({
    x: r.value - n.value,
    y: l.value - s.value
  }));
  return { style: Z(() => {
    const c = t.value.x, m = t.value.y;
    if (!a.value)
      return Tt(c, m);
    const _ = c < 5 ? 5 : c > a.value.x ? a.value.x - 5 : c, p = m < 5 ? 5 : m > a.value.y ? a.value.y - 5 : m;
    return Tt(_, p);
  }) };
}
const tr = {}, nr = { class: "content" };
function sr(e, t) {
  return I(), D("div", nr, [
    oe(e.$slots, "default", {}, void 0, !0)
  ]);
}
const hn = /* @__PURE__ */ X(tr, [["render", sr], ["__scopeId", "data-v-7beae5b9"]]), rr = {}, lr = { class: "bar-wrapper-item" };
function or(e, t) {
  return I(), D("div", lr, [
    oe(e.$slots, "default")
  ]);
}
const ar = /* @__PURE__ */ X(rr, [["render", or]]), ir = { class: "bar-wrapper-group" }, ur = { class: "group-items" }, cr = /* @__PURE__ */ M({
  __name: "bar-wrapper-group",
  props: {
    divider: {}
  },
  setup(e) {
    return (t, n) => (I(), D("div", ir, [
      d("div", ur, [
        oe(t.$slots, "default", {}, void 0, !0)
      ]),
      d("div", {
        class: _e(["divider", [t.divider]])
      }, null, 2)
    ]));
  }
});
const ge = /* @__PURE__ */ X(cr, [["__scopeId", "data-v-3a7abad9"]]), dr = /* @__PURE__ */ M({
  __name: "drag-box",
  props: {
    visible: { type: Boolean },
    initialValue: {}
  },
  emits: ["update:visible", "close"],
  setup(e, { expose: t, emit: n }) {
    const s = e, r = y(), l = y(), { position: a } = We(r, {
      initialValue: s.initialValue
    }), { style: i } = _t(r, a);
    function c(g) {
      a.value = g;
    }
    t({
      setPosition: c
    }), Ee(() => {
      window.addEventListener("click", m), window.addEventListener("keydown", h);
    }), pt(() => {
      window.addEventListener("click", m), window.addEventListener("keydown", h);
    });
    function m(g) {
      _(g) && p();
    }
    function _(g) {
      const f = g.target;
      return !(!r.value || !l.value || l.value.contains(f) || r.value.contains(f));
    }
    function p() {
      n("update:visible", !1), n("close");
    }
    function h(g) {
      g.code === "Escape" && p();
    }
    return (g, f) => (I(), D(le, null, [
      d("div", {
        ref_key: "referenceRef",
        ref: l
      }, [
        oe(g.$slots, "reference", {}, void 0, !0)
      ], 512),
      (I(), Y(ft, { to: "body" }, [
        de(d("div", {
          ref_key: "boxRef",
          ref: r,
          class: "demotestname card shadow brag-box user-select-none",
          style: je([{ position: "fixed" }, b(i)])
        }, [
          d("div", { class: "w-100 text-end me-2" }, [
            d("span", {
              onClick: p,
              class: "btn iconfont icon-close fs-5"
            })
          ]),
          oe(g.$slots, "default", {}, void 0, !0)
        ], 4), [
          [fe, g.visible]
        ])
      ]))
    ], 64));
  }
});
const Ce = /* @__PURE__ */ X(dr, [["__scopeId", "data-v-015e58d3"]]), fr = {
  install(e) {
    e.component("BarButton", q), e.component("BarInput", vt), e.component("BarPopover", xs), e.component("BarSearch", ht), e.component("FixedPanel", er), e.component("BarWrapper", hn), e.component("BarWrapperItem", ar), e.component("BarWrapperGroup", ge), e.component("DragBox", Ce);
  }
};
var be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function yt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ot = { exports: {} }, _n = { exports: {} }, pr = void 0, yn = function(e) {
  return e !== pr && e !== null;
}, vr = yn, mr = {
  object: !0,
  function: !0,
  undefined: !0
  /* document.all */
}, hr = function(e) {
  return vr(e) ? hasOwnProperty.call(mr, typeof e) : !1;
}, _r = hr, yr = function(e) {
  if (!_r(e))
    return !1;
  try {
    return e.constructor ? e.constructor.prototype === e : !1;
  } catch {
    return !1;
  }
}, gr = yr, br = function(e) {
  if (typeof e != "function" || !hasOwnProperty.call(e, "length"))
    return !1;
  try {
    if (typeof e.length != "number" || typeof e.call != "function" || typeof e.apply != "function")
      return !1;
  } catch {
    return !1;
  }
  return !gr(e);
}, xr = br, wr = /^\s*class[\s{/}]/, $r = Function.prototype.toString, Er = function(e) {
  return !(!xr(e) || wr.test($r.call(e)));
}, kr = function() {
  var e = Object.assign, t;
  return typeof e != "function" ? !1 : (t = { foo: "raz" }, e(t, { bar: "dwa" }, { trzy: "trzy" }), t.foo + t.bar + t.trzy === "razdwatrzy");
}, Ye, It;
function Sr() {
  return It || (It = 1, Ye = function() {
    try {
      return Object.keys("primitive"), !0;
    } catch {
      return !1;
    }
  }), Ye;
}
var Cr = function() {
}, Or = Cr(), gt = function(e) {
  return e !== Or && e !== null;
}, Ke, Pt;
function Rr() {
  if (Pt)
    return Ke;
  Pt = 1;
  var e = gt, t = Object.keys;
  return Ke = function(n) {
    return t(e(n) ? Object(n) : n);
  }, Ke;
}
var Qe, Vt;
function Tr() {
  return Vt || (Vt = 1, Qe = Sr()() ? Object.keys : Rr()), Qe;
}
var Ze, Mt;
function Ir() {
  if (Mt)
    return Ze;
  Mt = 1;
  var e = gt;
  return Ze = function(t) {
    if (!e(t))
      throw new TypeError("Cannot use null or undefined");
    return t;
  }, Ze;
}
var Je, Lt;
function Pr() {
  if (Lt)
    return Je;
  Lt = 1;
  var e = Tr(), t = Ir(), n = Math.max;
  return Je = function(s, r) {
    var l, a, i = n(arguments.length, 2), c;
    for (s = Object(t(s)), c = function(m) {
      try {
        s[m] = r[m];
      } catch (_) {
        l || (l = _);
      }
    }, a = 1; a < i; ++a)
      r = arguments[a], e(r).forEach(c);
    if (l !== void 0)
      throw l;
    return s;
  }, Je;
}
var Vr = kr() ? Object.assign : Pr(), Mr = gt, Lr = Array.prototype.forEach, Dr = Object.create, Nr = function(e, t) {
  var n;
  for (n in e)
    t[n] = e[n];
}, Ar = function(e) {
  var t = Dr(null);
  return Lr.call(arguments, function(n) {
    Mr(n) && Nr(Object(n), t);
  }), t;
}, et = "razdwatrzy", Fr = function() {
  return typeof et.contains != "function" ? !1 : et.contains("dwa") === !0 && et.contains("foo") === !1;
}, tt, Dt;
function Br() {
  if (Dt)
    return tt;
  Dt = 1;
  var e = String.prototype.indexOf;
  return tt = function(t) {
    return e.call(this, t, arguments[1]) > -1;
  }, tt;
}
var jr = Fr() ? String.prototype.contains : Br(), Le = yn, Nt = Er, gn = Vr, bn = Ar, Re = jr, zr = _n.exports = function(e, t) {
  var n, s, r, l, a;
  return arguments.length < 2 || typeof e != "string" ? (l = t, t = e, e = null) : l = arguments[2], Le(e) ? (n = Re.call(e, "c"), s = Re.call(e, "e"), r = Re.call(e, "w")) : (n = r = !0, s = !1), a = { value: t, configurable: n, enumerable: s, writable: r }, l ? gn(bn(l), a) : a;
};
zr.gs = function(e, t, n) {
  var s, r, l, a;
  return typeof e != "string" ? (l = n, n = t, t = e, e = null) : l = arguments[3], Le(t) ? Nt(t) ? Le(n) ? Nt(n) || (l = n, n = void 0) : n = void 0 : (l = t, t = n = void 0) : t = void 0, Le(e) ? (s = Re.call(e, "c"), r = Re.call(e, "e")) : (s = !0, r = !1), a = { get: t, set: n, configurable: s, enumerable: r }, l ? gn(bn(l), a) : a;
};
var Hr = _n.exports, Ur = function(e) {
  if (typeof e != "function")
    throw new TypeError(e + " is not a function");
  return e;
};
(function(e, t) {
  var n = Hr, s = Ur, r = Function.prototype.apply, l = Function.prototype.call, a = Object.create, i = Object.defineProperty, c = Object.defineProperties, m = Object.prototype.hasOwnProperty, _ = { configurable: !0, enumerable: !1, writable: !0 }, p, h, g, f, u, k, R;
  p = function(T, $) {
    var S;
    return s($), m.call(this, "__ee__") ? S = this.__ee__ : (S = _.value = a(null), i(this, "__ee__", _), _.value = null), S[T] ? typeof S[T] == "object" ? S[T].push($) : S[T] = [S[T], $] : S[T] = $, this;
  }, h = function(T, $) {
    var S, O;
    return s($), O = this, p.call(this, T, S = function() {
      g.call(O, T, S), r.call($, this, arguments);
    }), S.__eeOnceListener__ = $, this;
  }, g = function(T, $) {
    var S, O, w, P;
    if (s($), !m.call(this, "__ee__"))
      return this;
    if (S = this.__ee__, !S[T])
      return this;
    if (O = S[T], typeof O == "object")
      for (P = 0; w = O[P]; ++P)
        (w === $ || w.__eeOnceListener__ === $) && (O.length === 2 ? S[T] = O[P ? 0 : 1] : O.splice(P, 1));
    else
      (O === $ || O.__eeOnceListener__ === $) && delete S[T];
    return this;
  }, f = function(T) {
    var $, S, O, w, P;
    if (m.call(this, "__ee__") && (w = this.__ee__[T], !!w))
      if (typeof w == "object") {
        for (S = arguments.length, P = new Array(S - 1), $ = 1; $ < S; ++$)
          P[$ - 1] = arguments[$];
        for (w = w.slice(), $ = 0; O = w[$]; ++$)
          r.call(O, this, P);
      } else
        switch (arguments.length) {
          case 1:
            l.call(w, this);
            break;
          case 2:
            l.call(w, this, arguments[1]);
            break;
          case 3:
            l.call(w, this, arguments[1], arguments[2]);
            break;
          default:
            for (S = arguments.length, P = new Array(S - 1), $ = 1; $ < S; ++$)
              P[$ - 1] = arguments[$];
            r.call(w, this, P);
        }
  }, u = {
    on: p,
    once: h,
    off: g,
    emit: f
  }, k = {
    on: n(p),
    once: n(h),
    off: n(g),
    emit: n(f)
  }, R = c({}, k), e.exports = t = function(T) {
    return T == null ? a(R) : c(Object(T), k);
  }, t.methods = u;
})(ot, ot.exports);
var Wr = ot.exports;
const Gr = /* @__PURE__ */ yt(Wr), H = Gr();
class ie {
  constructor(t) {
    ee(this, "editor");
    this.editor = t;
  }
  getValue() {
    const { selection: t } = this.editor;
    return t == null ? "" : $e.string(this.editor, t);
  }
  isDisabled() {
    const { selection: t } = this.editor;
    return t == null ? (H.emit(z.ERROR, "未选中编辑器"), !0) : !1;
  }
}
class qr extends ie {
  constructor(n) {
    super(n);
    ee(this, "key", "speaker");
  }
  getValue() {
    return super.getValue();
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: n } = this.editor;
    if (!n)
      return !0;
    if (se.isCollapsed(n))
      return H.emit(z.ERROR, "请选中文本"), !0;
    const s = this.getValue();
    return s.length != 1 ? !0 : /^[\u4E00-\u9FA5]+$/gi.test(s) ? !1 : (H.emit(z.ERROR, "选中一个中文字符，并且有不能在其他语句之内"), !0);
  }
  exec(n) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const s = this.getValue();
    if (s == null)
      return;
    const r = {
      type: "ssml-phoneme",
      ph: n.value,
      remark: n.label,
      children: [{ text: s }]
    };
    A.insertNodes(this.editor, r);
  }
}
const xn = /* @__PURE__ */ M({
  setup() {
    const e = pe(ae.EDITORCONFIG), t = G(), n = y([]), s = y(!1);
    function r() {
      s.value || (s.value = !0);
    }
    function l() {
      s.value && (s.value = !1);
    }
    async function a(i) {
      var m;
      if (t.value ?? (t.value = new qr(i)), (m = t.value) != null && m.isDisabled())
        return;
      const c = t.value.getValue();
      if (c ? n.value = await e.fetchSpeaker(c) : n.value = [], n.value.length == 0)
        return H.emit(z.ERROR, "选中的字符没有不是多音字");
      r();
    }
    return () => o(ue, {
      visible: s.value,
      "onUpdate:visible": (i) => s.value = i,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => o(q, {
        text: "多音字",
        icon: "speaker",
        onClick: a
      }, null),
      default: () => o("div", {
        class: "d-flex flex-column"
      }, [n.value.map(({
        label: i,
        value: c
      }) => o("div", {
        key: c,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          t.value && !t.value.isDisabled() && t.value.exec({
            label: i,
            value: c
          }), l();
        },
        onMousedown: Q(() => {
        }, ["stop", "prevent"])
      }, [i]))])
    });
  }
});
class Xr extends ie {
  constructor(n) {
    super(n);
    ee(this, "key", "continuous");
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: n } = this.editor;
    return n ? se.isCollapsed(n) ? (H.emit(z.ERROR, "请选择多个中文字符或者多个多个英文单词"), !0) : $e.string(this.editor, n).length < 2 : !0;
  }
  exec() {
    if (this.isDisabled())
      return;
    const n = this.getValue();
    if (n == null)
      return;
    const s = {
      type: "ssml-w",
      remark: "连读",
      children: [{ text: n }]
    };
    A.insertNodes(this.editor, s);
  }
}
const wn = /* @__PURE__ */ M({
  setup() {
    const e = G();
    function t(n) {
      e.value ?? (e.value = new Xr(n)), !e.value.isDisabled() && e.value.exec();
    }
    return () => o(q, {
      text: "连读",
      icon: "continuous",
      onClick: t
    }, null);
  }
});
class Yr extends ie {
  constructor(n) {
    super(n);
    ee(this, "key", "read");
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: n } = this.editor;
    return !n || n == null ? !0 : se.isCollapsed(n) ? (H.emit(z.ERROR, "请先选择文本"), !0) : !1;
  }
  exec(n) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const s = this.getValue();
    if (s == null)
      return;
    const r = {
      type: "ssml-emphasis",
      level: n.value,
      remark: n.label,
      children: [{ text: s }]
    };
    A.insertNodes(this.editor, r);
  }
}
const Kr = [{
  label: "重音",
  value: "重"
}, {
  label: "拖音",
  value: "拖"
}, {
  label: "重音+拖音",
  value: "重+拖"
}], $n = /* @__PURE__ */ M({
  setup() {
    const e = G(), t = y(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    function r(l) {
      e.value ?? (e.value = new Yr(l)), !e.value.isDisabled() && n();
    }
    return () => o(ue, {
      visible: t.value,
      "onUpdate:visible": (l) => t.value = l,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => o(q, {
        text: "重音",
        icon: "read",
        onClick: r
      }, null),
      default: () => o("div", {
        class: "d-flex flex-column",
        onMousedown: Q(() => {
        }, ["stop", "prevent"])
      }, [Kr.map(({
        label: l,
        value: a
      }) => o("div", {
        key: a,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && e.value.exec({
            label: l,
            value: a
          }), s();
        },
        onMousedown: Q(() => {
        }, ["stop", "prevent"])
      }, [l]))])
    });
  }
});
class Qr extends ie {
  constructor(n) {
    super(n);
    ee(this, "key", "digital");
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: n } = this.editor;
    if (!n)
      return !0;
    if (se.isCollapsed(n))
      return H.emit(z.ERROR, "请选择纯数字"), !0;
    const s = $e.string(this.editor, n);
    return s.length <= 0 ? !0 : Number.isNaN(Number(s)) ? (H.emit(z.ERROR, "请选择纯数字"), !0) : !1;
  }
  exec(n) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const s = this.getValue();
    if (s == null)
      return;
    const r = {
      type: "ssml-say-as",
      interpretAs: n.value,
      remark: n.label,
      children: [{ text: s }]
    };
    A.delete(this.editor), A.insertNodes(this.editor, r);
  }
}
const Zr = [{
  value: "value",
  label: "读数值"
}, {
  value: "digits",
  label: "读数字"
}, {
  value: "telephone",
  label: "读手机号"
}], En = /* @__PURE__ */ M({
  setup() {
    const e = G(), t = y(!1);
    function n() {
      t.value = !t.value;
    }
    function s(r) {
      e.value ?? (e.value = new Qr(r)), !e.value.isDisabled() && n();
    }
    return () => o(ue, {
      visible: t.value,
      "onUpdate:visible": (r) => t.value = r,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => o(q, {
        text: "数字符号",
        icon: "digital",
        onClick: s
      }, null),
      default: () => o("div", {
        class: "d-flex flex-column"
      }, [Zr.map(({
        label: r,
        value: l
      }) => o("div", {
        key: l,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && e.value.exec({
            label: r,
            value: l
          }), n();
        },
        onMousedown: Q(() => {
        }, ["stop", "prevent"])
      }, [r]))])
    });
  }
});
class Jr extends ie {
  constructor(n) {
    super(n);
    ee(this, "key", "alias");
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: n } = this.editor;
    return n == null ? !0 : se.isCollapsed(n) ? (H.emit(z.ERROR, "选中一个中文字符，并且有不能在其他语句之内"), !0) : this.getValue().length <= 0;
  }
  exec(n) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const s = this.getValue();
    if (s == null)
      return;
    const r = {
      type: "ssml-sub",
      remark: n.value,
      alias: n.value,
      children: [{ text: s }]
    };
    A.insertNodes(this.editor, r);
  }
}
const kn = /* @__PURE__ */ M({
  setup() {
    const e = G(), t = y(), n = y(!1);
    function s() {
      n.value || (n.value = !0);
    }
    function r() {
      n.value && (n.value = !1);
    }
    async function l(i) {
      e.value ?? (e.value = new Jr(i)), !e.value.isDisabled() && (s(), t.value.focus());
    }
    function a(i) {
      var c;
      r(), i && ((c = e.value) == null || c.exec({
        value: i,
        label: i
      }));
    }
    return () => o(ue, {
      visible: n.value,
      "onUpdate:visible": (i) => n.value = i,
      trigger: "contextmenu",
      placement: "right-end",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => o(q, {
        text: "别名",
        icon: "alias",
        onClick: l
      }, null),
      default: () => o(vt, {
        ref: t,
        onSubmit: a
      }, null)
    });
  }
});
function el(e) {
  const { selection: t } = e;
  if (t) {
    const [n, s] = se.edges(t), r = $e.range(e, n, s), l = $e.string(e, r), a = l.trimEnd();
    if (a !== l) {
      const i = l.length - a.length, c = { ...s, offset: s.offset - i }, m = { ...t, anchor: n, focus: c };
      A.select(e, m);
    }
  }
}
class tl extends ie {
  constructor(n) {
    super(n);
    ee(this, "key", "english");
  }
  getValue() {
    return super.getValue();
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: n } = this.editor;
    if (!n)
      return !0;
    if (se.isCollapsed(n))
      return H.emit(z.ERROR, "请选择英文单词"), !0;
    const s = $e.string(this.editor, n);
    return s.length <= 0 ? !0 : /^[A-Za-z]+$/gi.test(s) ? !1 : (H.emit(z.ERROR, "请选择英文单词"), !0);
  }
  exec(n) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const s = this.getValue();
    if (s == null)
      return;
    const r = {
      type: "ssml-phoneme",
      ph: n.value,
      remark: n.label,
      children: [{ text: s }]
    };
    A.insertNodes(this.editor, r);
  }
}
const Sn = /* @__PURE__ */ M({
  setup() {
    const e = G(), t = pe(ae.EDITORCONFIG), n = y([]), s = y(!1);
    function r() {
      s.value || (s.value = !0);
    }
    function l() {
      s.value && (s.value = !1);
    }
    async function a(i) {
      if (e.value ?? (e.value = new tl(i)), el(i), e.value.isDisabled())
        return;
      const c = e.value.getValue();
      if (c) {
        if (n.value = await t.fetchEnglish(c), n.value.length <= 0)
          return H.emit(z.ERROR, "找不到单词的音标");
        r();
      }
    }
    return () => o(ue, {
      visible: s.value,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => o(q, {
        text: "音标",
        icon: "english",
        onClick: a
      }, null),
      default: () => o("div", {
        class: "d-flex flex-column"
      }, [n.value.map(({
        label: i,
        value: c
      }) => o("div", {
        key: c,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && e.value.exec({
            label: i,
            value: c
          }), l();
        },
        onMousedown: Q(() => {
        }, ["stop", "prevent"])
      }, [i]))])
    });
  }
});
class nl extends ie {
  constructor(n) {
    super(n);
    ee(this, "key", "changespeed");
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: n } = this.editor;
    return n == null ? !0 : se.isCollapsed(n) ? (H.emit(z.ERROR, "请框选要变速的句子"), !0) : !1;
  }
  exec(n) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const s = this.getValue();
    if (s == null)
      return;
    const r = {
      type: "ssml-prosody",
      remark: n.label,
      rate: Number(n.value),
      children: [{ text: s }]
    };
    A.insertNodes(this.editor, r);
  }
}
const sl = [{
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
}], Cn = /* @__PURE__ */ M({
  setup() {
    const e = G(), t = y(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    async function r(l) {
      e.value ?? (e.value = new nl(l)), !e.value.isDisabled() && n();
    }
    return () => o(ue, {
      style: {
        padding: "0px"
      },
      visible: t.value,
      "onUpdate:visible": (l) => t.value = l,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => o(q, {
        text: "局部变速",
        icon: "changespeed",
        onClick: r
      }, null),
      default: () => o("div", {
        class: "d-flex flex-column overflow-x-hidden overflow-y-scroll",
        style: "height:15rem"
      }, [sl.map(({
        label: l,
        value: a
      }) => o("div", {
        key: a,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          var i;
          (i = e.value) == null || i.exec({
            label: l,
            value: a
          }), s();
        },
        onMousedown: Q(() => {
        }, ["stop", "prevent"])
      }, [l]))])
    });
  }
});
class rl extends ie {
  constructor(n) {
    super(n);
    ee(this, "key", "rhythm");
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: n } = this.editor;
    return n ? se.isExpanded(n) ? (H.emit(z.ERROR, "不能选中文本"), !0) : !1 : !0;
  }
  exec(n) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const s = {
      type: "ssml-break",
      strength: n.value,
      remark: n.label,
      children: [{ text: "" }]
    };
    A.insertNodes(this.editor, s);
  }
}
const ll = [{
  value: "200ms",
  label: "短"
}, {
  value: "300ms",
  label: "中"
}, {
  value: "500ms",
  label: "长"
}], On = /* @__PURE__ */ M({
  setup() {
    const e = G(), t = y(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    function r(l) {
      e.value ?? (e.value = new rl(l)), !e.value.isDisabled() && n();
    }
    return () => o(ue, {
      visible: t.value,
      "onUpdate:visible": (l) => t.value = l,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => o(q, {
        text: "停顿调节",
        icon: "rhythm",
        onClick: r
      }, null),
      default: () => o("div", {
        class: "d-flex flex-column"
      }, [ll.map(({
        label: l,
        value: a
      }) => o("div", {
        key: a,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && e.value.exec({
            label: l,
            value: a
          }), s();
        },
        onMousedown: Q(() => {
        }, ["stop", "prevent"])
      }, [l]))])
    });
  }
});
class ol extends ie {
  constructor(n) {
    super(n);
    ee(this, "key", "special");
  }
  restoreSelection() {
    this.editor.restoreSelection();
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: n } = this.editor;
    return n ? se.isExpanded(n) ? (H.emit(z.ERROR, "不能框选文字"), !0) : !1 : !0;
  }
  exec(n) {
    if (this.editor.restoreSelection(), this.isDisabled() || this.getValue() == null)
      return;
    const r = {
      type: "ssml-audio",
      src: n.value,
      remark: n.label,
      children: [{ text: "" }]
    };
    A.insertNodes(this.editor, r);
  }
}
const Rn = /* @__PURE__ */ M({
  __name: "special-menu",
  setup(e) {
    const t = y(), n = y(), s = G(), r = y(!1), l = pe(ae.EDITORCONFIG), a = { first: "默认音效", second: "自定义音效", last: "最近音效" }, i = [
      { value: "", label: "全部场景" },
      { value: "2", label: "场景2" },
      { value: "3", label: "场景3" }
    ], c = [
      { value: "", label: "全部风格" },
      { value: "2", label: "风格2" },
      { value: "3", label: "风格3" }
    ], { x: m, y: _, height: p } = Te(n), h = (f) => {
      s.value ?? (s.value = new ol(f)), !s.value.isDisabled() && (t.value.setPosition({
        x: m.value - 200,
        y: _.value + p.value
      }), r.value = !0);
    };
    function g(f) {
      var u;
      (u = s.value) == null || u.restoreSelection(), s.value && !s.value.isDisabled() && s.value.exec(f), r.value = !1;
    }
    return (f, u) => (I(), Y(b(Ce), {
      ref_key: "dragRef",
      ref: t,
      visible: r.value,
      "onUpdate:visible": u[0] || (u[0] = (k) => r.value = k)
    }, {
      reference: v(() => [
        o(b(q), {
          ref_key: "menuRef",
          ref: n,
          text: "音效",
          icon: "special",
          onClick: h
        }, null, 512)
      ]),
      default: v(() => [
        o(b(ht), {
          menuItemLabel: a,
          scenes: i,
          styles: c,
          fetch: b(l).fetchSpecial,
          onSubmit: g
        }, null, 8, ["fetch"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
class al extends ie {
  constructor(n) {
    super(n);
    ee(this, "key", "mute");
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: n } = this.editor;
    return n ? se.isExpanded(n) ? (H.emit(z.ERROR, "不能选中文本"), !0) : !1 : !0;
  }
  exec(n) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const s = {
      type: "ssml-break",
      time: n.value,
      remark: n.label,
      children: [{ text: "" }]
    };
    A.insertNodes(this.editor, s);
  }
}
const il = [{
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
}], Tn = /* @__PURE__ */ M({
  setup() {
    const e = G(), t = y(!1), n = y();
    function s() {
      t.value || (t.value = !0);
    }
    function r() {
      t.value && (t.value = !1);
    }
    function l(i) {
      e.value ?? (e.value = new al(i)), !e.value.isDisabled() && (s(), n.value.focus());
    }
    function a(i) {
      var c;
      r(), i && ((c = e.value) == null || c.exec({
        value: i,
        label: i
      }));
    }
    return () => o(ue, {
      visible: t.value,
      "onUpdate:visible": (i) => t.value = i,
      trigger: "contextmenu",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => o(q, {
        text: "插入静音",
        icon: "mute",
        onClick: l
      }, null),
      default: () => o("div", {
        class: "d-flex flex-column"
      }, [il.map(({
        value: i,
        label: c
      }) => o("div", {
        key: i,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => a(i),
        onMousedown: Q(() => {
        }, ["stop", "prevent"])
      }, [c])), o(vt, {
        type: "number",
        ref: n,
        onSubmit: a
      }, null)])
    });
  }
}), In = /* @__PURE__ */ M({
  __name: "bgm-menu",
  setup(e) {
    const t = y(), n = y(), s = G(), r = y(!1), l = pe(ae.EDITORCONFIG), a = { first: "默认配乐", second: "自定义配乐", last: "最近配乐" }, i = [
      { value: "", label: "全部场景" },
      { value: "2", label: "场景2" },
      { value: "3", label: "场景3" }
    ], c = [
      { value: "", label: "全部风格" },
      { value: "2", label: "风格2" },
      { value: "3", label: "风格3" }
    ], { x: m, y: _, height: p } = Te(n), h = async (f) => {
      const u = {
        x: m.value - 300,
        y: _.value + p.value
      };
      s.value = f, t.value.setPosition(u), r.value = !0;
    };
    function g(f) {
      var u;
      (u = s.value) == null || u.emit(Ne.UPDATE_BGM, f), r.value = !1;
    }
    return (f, u) => (I(), Y(b(Ce), {
      ref_key: "dragRef",
      ref: t,
      visible: r.value,
      "onUpdate:visible": u[0] || (u[0] = (k) => r.value = k)
    }, {
      reference: v(() => [
        o(b(q), {
          ref_key: "menuRef",
          ref: n,
          text: "配乐",
          icon: "bgm",
          onClick: h
        }, null, 512)
      ]),
      default: v(() => [
        o(b(ht), {
          menuItemLabel: a,
          scenes: i,
          styles: c,
          fetch: b(l).fetchBgm,
          onSubmit: g
        }, null, 8, ["fetch"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Pn = /* @__PURE__ */ M({
  __name: "sensitive-menu",
  setup(e) {
    const t = pe(ae.EDITORCONFIG);
    console.log(t);
    const n = y(), s = y(), r = G(), l = y(!1), { x: a, y: i, height: c } = Te(s), m = (_) => {
      r.value = _, n.value.setPosition({
        x: a.value - 200,
        y: i.value + c.value
      }), l.value = !0;
    };
    return (_, p) => (I(), Y(b(Ce), {
      ref_key: "dragRef",
      ref: n,
      visible: l.value,
      "onUpdate:visible": p[0] || (p[0] = (h) => l.value = h)
    }, {
      reference: v(() => [
        o(b(q), {
          ref_key: "menuRef",
          ref: s,
          text: "敏感词",
          icon: "sensitive",
          onClick: m
        }, null, 512)
      ]),
      default: v(() => [
        o(Pn)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
const ul = {
  class: "select-list",
  style: { width: "120px" }
}, cl = {
  class: "text-center d-flex flex-column justify-content-center fs-6",
  style: { height: "60px" }
}, dl = ["onClick"], fl = /* @__PURE__ */ M({
  __name: "select-list",
  props: {
    modelValue: {},
    dataList: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: n }) {
    const s = e, r = y();
    function l(i) {
      n("update:modelValue", i.value);
    }
    function a() {
      var i;
      if (r.value) {
        for (let c = 0; c < s.dataList.length; c++)
          if (s.dataList[c].value === s.modelValue) {
            (i = r.value.children[c]) == null || i.scrollIntoView({ behavior: "smooth" });
            return;
          }
      }
    }
    return t({
      scrollIntoViewTheItem: a
    }), (i, c) => (I(), D("div", ul, [
      d("div", cl, [
        oe(i.$slots, "default", {}, void 0, !0)
      ]),
      d("ul", {
        ref_key: "listRef",
        ref: r,
        class: "text-center w-100 border-start border-top border-bottom border-secondary-subtle overflow-y-auto overflow-x-hidden scrollbar-none",
        style: { height: "180px" }
      }, [
        (I(!0), D(le, null, xe(i.dataList, (m, _) => (I(), D("li", {
          class: _e(["clickable select-item py-1", { activate: m.value === i.modelValue }]),
          key: _,
          onClick: (p) => l(dt(m))
        }, j(m.label), 11, dl))), 128))
      ], 512)
    ]));
  }
});
const Oe = /* @__PURE__ */ X(fl, [["__scopeId", "data-v-efb1399e"]]), pl = () => {
  const e = [];
  for (let t = 2; t <= 40; t++) {
    const n = (t * 0.05).toFixed(2);
    e.push({ value: n, label: `${n}x` });
  }
  return e;
}, vl = () => {
  const e = [];
  for (let t = -10; t <= 10; t++)
    e.push({ value: t.toString(), label: t.toString() });
  return e;
}, ml = {
  style: { width: "600px", height: "360px" },
  class: "position-relative px-2 pb-2"
}, hl = { class: "position-relative" }, _l = { class: "position-absolute top-0 end-0" }, yl = /* @__PURE__ */ d("li", null, [
  /* @__PURE__ */ d("span", { class: "text-nowrap" }, "近期使用:")
], -1), gl = /* @__PURE__ */ d("span", { class: "my-3" }, "角色", -1), bl = /* @__PURE__ */ d("span", { class: "my-3" }, "风格", -1), xl = /* @__PURE__ */ d("span", { class: "my-3" }, "语速", -1), wl = /* @__PURE__ */ d("span", { class: "my-3" }, "语调", -1), $l = { class: "position-absolute bottom-0 end-0 d-flex flex-row justify-content-end me-4 mb-3" }, El = /* @__PURE__ */ M({
  __name: "management-content",
  setup(e) {
    const t = y(!1), n = y(""), s = y(), r = y(), l = y(), a = y(), i = y(), c = y(""), m = y(""), _ = y(""), p = y(""), h = y(""), g = y(""), f = y([]), u = y([]), k = y([]), R = y([]), T = y(pl()), $ = y(vl());
    f.value = [
      { label: "全部类型", value: "" },
      { label: "常规", value: "2" },
      { label: "已购", value: "3" },
      { label: "收藏", value: "4" },
      { label: "我的", value: "5" },
      { label: "SVIP", value: "6" },
      { label: "付费", value: "7" }
    ], u.value = f.value, k.value = f.value, R.value = f.value;
    function S() {
    }
    function O() {
    }
    function w() {
      _.value = "", Ge(s);
    }
    function P() {
      p.value = "", Ge(r);
    }
    function N() {
      h.value = "1.00", g.value = "0", Ge(l);
    }
    function Pe() {
    }
    function Un() {
    }
    async function Ge($t) {
      console.log($t);
    }
    return ($t, U) => (I(), D("div", ml, [
      o(b(ze), {
        onSubmit: Q(S, ["prevent"])
      }, {
        default: v(() => [
          o(b(He), {
            modelValue: n.value,
            "onUpdate:modelValue": U[0] || (U[0] = (W) => n.value = W),
            placeholder: "请输入名称快速查找配音师"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["onSubmit"]),
      d("div", hl, [
        d("div", _l, [
          o(b(re), {
            size: "small",
            icon: b(is),
            onClick: U[1] || (U[1] = () => t.value = !t.value)
          }, null, 8, ["icon"])
        ]),
        d("ul", {
          class: _e(["d-flex flex-row row-gap-1 column-gap-2 overflow-x-hidden", { "flex-wrap": t.value }])
        }, [
          yl,
          d("li", null, [
            o(b(ce), {
              type: "info",
              closable: ""
            }, {
              default: v(() => [
                E("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          d("li", null, [
            o(b(ce), {
              type: "info",
              closable: ""
            }, {
              default: v(() => [
                E("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          d("li", null, [
            o(b(ce), {
              type: "info",
              closable: ""
            }, {
              default: v(() => [
                E("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          d("li", null, [
            o(b(ce), {
              type: "info",
              closable: ""
            }, {
              default: v(() => [
                E("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          d("li", null, [
            o(b(ce), {
              type: "info",
              closable: ""
            }, {
              default: v(() => [
                E("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          d("li", null, [
            o(b(ce), {
              type: "info",
              closable: ""
            }, {
              default: v(() => [
                E("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          d("li", null, [
            o(b(ce), {
              type: "info",
              closable: ""
            }, {
              default: v(() => [
                E("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ])
        ], 2),
        de(d("div", {
          class: _e({ "d-flex flex-row": !t.value })
        }, [
          o(Oe, {
            "onUpdate:modelValue": [
              w,
              U[3] || (U[3] = (W) => m.value = W)
            ],
            ref_key: "selSpeakerRef",
            ref: s,
            modelValue: m.value,
            dataList: u.value
          }, {
            default: v(() => [
              o(b(rt), {
                onChange: O,
                modelValue: c.value,
                "onUpdate:modelValue": U[2] || (U[2] = (W) => c.value = W)
              }, {
                default: v(() => [
                  (I(!0), D(le, null, xe(f.value, (W, Wn) => (I(), Y(b(lt), {
                    value: W.value,
                    label: W.label,
                    key: Wn
                  }, null, 8, ["value", "label"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          o(Oe, {
            "onUpdate:modelValue": [
              P,
              U[4] || (U[4] = (W) => _.value = W)
            ],
            ref_key: "selRoleRef",
            ref: r,
            modelValue: _.value,
            dataList: k.value
          }, {
            default: v(() => [
              gl
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          o(Oe, {
            "onUpdate:modelValue": [
              N,
              U[5] || (U[5] = (W) => p.value = W)
            ],
            ref_key: "selStyleRef",
            ref: l,
            modelValue: p.value,
            dataList: R.value
          }, {
            default: v(() => [
              bl
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          o(Oe, {
            "onUpdate:modelValue": [
              Pe,
              U[6] || (U[6] = (W) => h.value = W)
            ],
            ref_key: "selSpeedRef",
            ref: a,
            modelValue: h.value,
            dataList: T.value
          }, {
            default: v(() => [
              xl
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          o(Oe, {
            "onUpdate:modelValue": [
              Un,
              U[7] || (U[7] = (W) => g.value = W)
            ],
            ref_key: "selPitchRef",
            ref: i,
            modelValue: g.value,
            dataList: $.value
          }, {
            default: v(() => [
              wl
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"])
        ], 2), [
          [fe, !t.value]
        ])
      ]),
      d("div", $l, [
        de(o(b(re), { type: "primary" }, {
          default: v(() => [
            E("确定")
          ]),
          _: 1
        }, 512), [
          [fe, !t.value]
        ]),
        de(o(b(re), { type: "primary" }, {
          default: v(() => [
            E("全部清空")
          ]),
          _: 1
        }, 512), [
          [fe, t.value]
        ])
      ])
    ]));
  }
}), Vn = /* @__PURE__ */ M({
  __name: "management-menu",
  setup(e) {
    const t = y(), n = y(), s = G(), r = y(!1), { x: l, y: a, height: i } = Te(n), c = (_) => {
      const p = {
        x: l.value - 200,
        y: a.value + i.value
      };
      s.value = _, t.value.setPosition(p), r.value = !0;
    };
    function m(_) {
      console.log(_);
    }
    return (_, p) => (I(), Y(b(Ce), {
      ref_key: "dragRef",
      ref: t,
      visible: r.value,
      "onUpdate:visible": p[0] || (p[0] = (h) => r.value = h)
    }, {
      reference: v(() => [
        o(b(q), {
          ref_key: "menuRef",
          ref: n,
          text: "多人配音",
          icon: "management",
          onClick: c
        }, null, 512)
      ]),
      default: v(() => [
        o(El, { onSubmit: m })
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), kl = { class: "speaker-item" }, Sl = { class: "speaker-head" }, Cl = ["src"], Ol = { class: "speaker-name" }, Rl = /* @__PURE__ */ M({
  __name: "speaker-item",
  props: {
    name: {},
    img: { default: "https://img.sdaxia.top/upload/4314c841777e4d20901cd5d04a28e91a.png" }
  },
  setup(e) {
    return (t, n) => (I(), D("div", kl, [
      d("div", Sl, [
        d("img", {
          src: t.img,
          class: "rounded-circle",
          style: { height: "40px" }
        }, null, 8, Cl)
      ]),
      d("div", Ol, j(t.name), 1)
    ]));
  }
});
const F = /* @__PURE__ */ X(Rl, [["__scopeId", "data-v-c961717f"]]), Tl = {
  class: "px-2 py-1",
  style: { width: "410px" }
}, Il = /* @__PURE__ */ d("p", { class: "text-start text-danger" }, "请在安静的环境中进行录音，以需要转换的风格，读出以下文案", -1), Pl = {
  class: "border border-secondary rounded w-100",
  style: { height: "100px" }
}, Vl = { class: "mt-2" }, Ml = { class: "w-100 d-flex flex-column row-gap-1" }, Ll = /* @__PURE__ */ d("button", { class: "btn btn-success" }, "实时录音", -1), Dl = /* @__PURE__ */ d("p", {
  class: "mt-2 text-secondary",
  style: { "font-size": "0.5rem" }
}, " 录音内容需要和滑选一致，音频限制60秒，滑选文案限制60个字 ", -1), Nl = { class: "audio-upload" }, Al = { class: "border rounded-pill border-secondary d-flex flex-row justify-content-between" }, Fl = { class: "d-flex flex-row align-items-center" }, Bl = /* @__PURE__ */ d("div", null, "图标", -1), jl = /* @__PURE__ */ d("div", null, [
  /* @__PURE__ */ d("div", null, "删除"),
  /* @__PURE__ */ d("button", null, "上传音频")
], -1), zl = /* @__PURE__ */ d("template", null, [
  /* @__PURE__ */ d("span", {
    class: "text-secondary",
    style: { "font-size": "0.5rem" }
  }, "点击选择文件"),
  /* @__PURE__ */ d("button", { class: "btn btn-primary" })
], -1), Hl = /* @__PURE__ */ d("span", {
  class: "text-secondary",
  style: { "font-size": "0.5rem" }
}, "点击开始录音", -1), Ul = /* @__PURE__ */ d("p", null, "选择需要转换的配音师", -1), Wl = { class: "speakers-container d-flex flex-row flex-wrap row-gap-1 column-gap-2" }, Gl = /* @__PURE__ */ d("button", {
  class: "btn btn-primary",
  disabled: ""
}, "完成录音并上传完成后，可选择配音师转换", -1), ql = /* @__PURE__ */ M({
  __name: "conversion-content",
  props: {
    text: {}
  },
  emits: ["submit"],
  setup(e) {
    const t = y(), n = y(), s = y(!1), r = y(!1), l = G();
    function a(_) {
      if (!_.target)
        return;
      const p = _.target.files[0];
      p && (l.value = p, console.log("已选择文件:", p.name));
    }
    function i() {
      var _;
      (_ = t.value) == null || _.click();
    }
    function c() {
    }
    function m() {
    }
    return (_, p) => {
      var h;
      return I(), D("div", Tl, [
        d("section", null, [
          Il,
          d("div", Pl, j(_.text), 1)
        ]),
        de(d("section", Vl, [
          d("div", Ml, [
            d("input", {
              accept: "audio/*",
              ref_key: "inputFileRef",
              ref: t,
              onChange: a,
              type: "file",
              hidden: ""
            }, null, 544),
            Ll,
            d("button", {
              onClick: i,
              class: "btn btn-primary"
            }, "上传录音")
          ]),
          Dl
        ], 512), [
          [fe, !s.value]
        ]),
        de(d("section", null, [
          d("div", Nl, [
            d("div", Al, [
              r.value ? (I(), D(le, { key: 0 }, [
                d("div", Fl, [
                  Bl,
                  d("div", null, j((h = n.value) == null ? void 0 : h.name), 1)
                ]),
                jl
              ], 64)) : un("", !0),
              zl,
              d("template", null, [
                Hl,
                d("button", {
                  onClick: c,
                  class: "btn btn-primary"
                }, "开始录音"),
                d("button", {
                  onClick: m,
                  class: "btn btn-primary"
                }, "结束录音")
              ])
            ]),
            d("div", null, [
              Ul,
              d("div", Wl, [
                o(F, { name: "莫厚渊" }),
                o(F, { name: "莫厚渊" }),
                o(F, { name: "莫厚渊" }),
                o(F, { name: "莫厚渊" }),
                o(F, { name: "莫厚渊" }),
                o(F, { name: "莫厚渊" }),
                o(F, { name: "莫厚渊" }),
                o(F, { name: "莫厚渊" }),
                o(F, { name: "莫厚渊" }),
                o(F, { name: "莫厚渊" }),
                o(F, { name: "莫厚渊" }),
                o(F, { name: "莫厚渊" }),
                o(F, { name: "莫厚渊" }),
                o(F, { name: "莫厚渊" }),
                o(F, { name: "莫厚渊" }),
                o(F, { name: "莫厚渊" }),
                o(F, { name: "莫厚渊" }),
                o(F, { name: "莫厚渊" })
              ])
            ]),
            Gl
          ])
        ], 512), [
          [fe, s.value]
        ])
      ]);
    };
  }
}), Mn = /* @__PURE__ */ M({
  __name: "conversion-menu",
  setup(e) {
    const t = y(), n = y(), s = G(), r = y(!1), l = y("ttttt"), { x: a, y: i, height: c } = Te(n), m = (p) => {
      const h = {
        x: a.value - 200,
        y: i.value + c.value
      };
      s.value = p, t.value.setPosition(h), r.value = !0;
    };
    function _(p) {
      console.log(p);
    }
    return (p, h) => (I(), Y(b(Ce), {
      ref_key: "dragRef",
      ref: t,
      visible: r.value,
      "onUpdate:visible": h[0] || (h[0] = (g) => r.value = g)
    }, {
      reference: v(() => [
        o(b(q), {
          ref_key: "menuRef",
          ref: n,
          text: "局部变音",
          icon: "conversion",
          onClick: m
        }, null, 512)
      ]),
      default: v(() => [
        o(ql, {
          text: l.value,
          onSubmit: _
        }, null, 8, ["text"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Xl = (e) => (ke("data-v-631743dd"), e = e(), Se(), e), Yl = { class: "anchor-avatar d-flex flex-column justify-content-center align-items-center" }, Kl = ["src"], Ql = /* @__PURE__ */ Xl(() => /* @__PURE__ */ d("div", { class: "anchor-avatar-name text-white" }, "莫厚渊", -1)), Zl = /* @__PURE__ */ M({
  __name: "try-play-circle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = y("https://img.sdaxia.top/upload/4314c841777e4d20901cd5d04a28e91a.png"), s = y(), r = y(0), l = y(0), { position: a } = We(s, {
      initialValue: { x: window.innerWidth - 15, y: window.innerHeight / 2 - 15 },
      onStart: (p, h) => _(h.clientX, h.clientY) ? !1 : void 0
    }), { style: i } = _t(s, a);
    function c(p) {
      _(p.clientX, p.clientY) && t("update:visible", !1);
    }
    function m(p) {
      r.value = p.clientX, l.value = p.clientY;
    }
    function _(p, h) {
      return p > r.value - 10 && p < r.value + 10 && h > l.value - 10 && h < l.value + 10;
    }
    return (p, h) => de((I(), D("div", {
      ref_key: "boxRef",
      ref: s,
      class: "try-play-circel user-select-none rounded-circle overflow-hidden",
      style: je([b(i), { position: "fixed" }]),
      onMousedown: m,
      onMouseup: c
    }, [
      d("div", Yl, [
        d("img", {
          src: n.value,
          class: "rounded-circle"
        }, null, 8, Kl),
        Ql
      ])
    ], 36)), [
      [fe, p.visible]
    ]);
  }
});
const Jl = /* @__PURE__ */ X(Zl, [["__scopeId", "data-v-631743dd"]]), eo = (e) => (ke("data-v-e8c67559"), e = e(), Se(), e), to = { class: "anchor-avatar d-flex flex-column align-items-center text-center justify-content-center" }, no = ["src"], so = /* @__PURE__ */ eo(() => /* @__PURE__ */ d("div", { class: "anchor-avatar-name text-white" }, "莫厚渊", -1)), ro = /* @__PURE__ */ M({
  __name: "anchor-avatar",
  setup(e) {
    const t = y("https://img.sdaxia.top/upload/4314c841777e4d20901cd5d04a28e91a.png");
    return (n, s) => (I(), D("div", to, [
      d("img", {
        src: t.value,
        class: "rounded-circle",
        style: { height: "40px" }
      }, null, 8, no),
      so
    ]));
  }
});
const B = /* @__PURE__ */ X(ro, [["__scopeId", "data-v-e8c67559"]]), lo = {
  style: { height: "170px" },
  class: "w-100 d-flex flex-row flex-wrap justify-content-start overflow-x-hidden overflow-y-auto scrollbar-none"
}, oo = /* @__PURE__ */ M({
  __name: "anchor-list",
  setup(e) {
    return (t, n) => (I(), D("div", lo, [
      (I(), D(le, null, xe(100, (s, r) => d("div", {
        class: "m-2",
        key: r
      }, [
        o(B)
      ])), 64))
    ]));
  }
}), ao = /* @__PURE__ */ M({
  __name: "tag-item",
  props: {
    isActivate: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (I(), D("div", {
      class: _e(["tag-item p-2 text-white text-center", [t.isActivate ? "activate" : null]])
    }, [
      oe(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const C = /* @__PURE__ */ X(ao, [["__scopeId", "data-v-80dc8a64"]]), io = { class: "tag-list w-100" }, uo = {
  class: "w-100 d-flex flex-row border-bottom border-secondary align-items-center",
  style: { height: "40px" }
}, co = {
  style: { height: "100px" },
  class: "w-100 d-flex flex-row flex-wrap align-items-start overflow-y-auto overflow-x-hidden scrollbar-none"
}, fo = /* @__PURE__ */ M({
  __name: "tag-list",
  setup(e) {
    return (t, n) => (I(), D("div", io, [
      d("div", uo, [
        o(C, null, {
          default: v(() => [
            E("全部")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("男声")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("女声")
          ]),
          _: 1
        })
      ]),
      d("div", co, [
        o(C, null, {
          default: v(() => [
            E("全部")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("影视")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("情感")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("娱乐")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("快板")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("书单")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("名人")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("角色")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("全部")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("影视")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("情感")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("娱乐")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("快板")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("书单")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("名人")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("角色")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("全部")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("影视")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("情感")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("娱乐")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("快板")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("书单")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("名人")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("角色")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("全部")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("影视")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("情感")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("娱乐")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("快板")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("书单")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("名人")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("角色")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("全部")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("影视")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("情感")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("娱乐")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("快板")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("书单")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("名人")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("角色")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("全部")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("影视")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("情感")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("娱乐")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("快板")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("书单")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("名人")
          ]),
          _: 1
        }),
        o(C, null, {
          default: v(() => [
            E("角色")
          ]),
          _: 1
        })
      ])
    ]));
  }
});
function At(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function bt(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {}), Object.keys(t).forEach(function(n) {
    typeof e[n] > "u" ? e[n] = t[n] : At(t[n]) && At(e[n]) && Object.keys(t[n]).length > 0 && bt(e[n], t[n]);
  });
}
var Ln = {
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
function xt() {
  var e = typeof document < "u" ? document : {};
  return bt(e, Ln), e;
}
var po = {
  document: Ln,
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
function Dn() {
  var e = typeof window < "u" ? window : {};
  return bt(e, po), e;
}
function vo(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function at(e) {
  return at = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, at(e);
}
function Fe(e, t) {
  return Fe = Object.setPrototypeOf || function(s, r) {
    return s.__proto__ = r, s;
  }, Fe(e, t);
}
function mo() {
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
function De(e, t, n) {
  return mo() ? De = Reflect.construct : De = function(r, l, a) {
    var i = [null];
    i.push.apply(i, l);
    var c = Function.bind.apply(r, i), m = new c();
    return a && Fe(m, a.prototype), m;
  }, De.apply(null, arguments);
}
function ho(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function it(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return it = function(s) {
    if (s === null || !ho(s))
      return s;
    if (typeof s != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(s))
        return t.get(s);
      t.set(s, r);
    }
    function r() {
      return De(s, arguments, at(this).constructor);
    }
    return r.prototype = Object.create(s.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Fe(r, s);
  }, it(e);
}
function _o(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yo(e) {
  var t = e.__proto__;
  Object.defineProperty(e, "__proto__", {
    get: function() {
      return t;
    },
    set: function(s) {
      t.__proto__ = s;
    }
  });
}
var he = /* @__PURE__ */ function(e) {
  vo(t, e);
  function t(n) {
    var s;
    return s = e.call.apply(e, [this].concat(n)) || this, yo(_o(s)), s;
  }
  return t;
}(/* @__PURE__ */ it(Array));
function wt(e) {
  e === void 0 && (e = []);
  var t = [];
  return e.forEach(function(n) {
    Array.isArray(n) ? t.push.apply(t, wt(n)) : t.push(n);
  }), t;
}
function go(e) {
  for (var t = [], n = 0; n < e.length; n += 1)
    t.indexOf(e[n]) === -1 && t.push(e[n]);
  return t;
}
function bo(e) {
  return e.toLowerCase().replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function xo(e, t) {
  if (typeof e != "string")
    return [e];
  for (var n = [], s = t.querySelectorAll(e), r = 0; r < s.length; r += 1)
    n.push(s[r]);
  return n;
}
function L(e, t) {
  var n = Dn(), s = xt(), r = [];
  if (!t && e instanceof he)
    return e;
  if (!e)
    return new he(r);
  if (typeof e == "string") {
    var l = e.trim();
    if (l.indexOf("<") >= 0 && l.indexOf(">") >= 0) {
      var a = "div";
      l.indexOf("<li") === 0 && (a = "ul"), l.indexOf("<tr") === 0 && (a = "tbody"), (l.indexOf("<td") === 0 || l.indexOf("<th") === 0) && (a = "tr"), l.indexOf("<tbody") === 0 && (a = "table"), l.indexOf("<option") === 0 && (a = "select");
      var i = s.createElement(a);
      i.innerHTML = l;
      for (var c = 0; c < i.childNodes.length; c += 1)
        r.push(i.childNodes[c]);
    } else
      r = xo(e.trim(), t || s);
  } else if (e.nodeType || e === n || e === s)
    r.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof he)
      return e;
    r = e;
  }
  return new he(go(r));
}
L.fn = he.prototype;
function Ft() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = wt(t.map(function(r) {
    return r.split(" ");
  }));
  return this.forEach(function(r) {
    var l;
    (l = r.classList).add.apply(l, s);
  }), this;
}
function Bt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = wt(t.map(function(r) {
    return r.split(" ");
  }));
  return this.forEach(function(r) {
    var l;
    (l = r.classList).remove.apply(l, s);
  }), this;
}
function jt(e, t) {
  if (arguments.length === 1 && typeof e == "string")
    return this[0] ? this[0].getAttribute(e) : void 0;
  for (var n = 0; n < this.length; n += 1)
    if (arguments.length === 2)
      this[n].setAttribute(e, t);
    else
      for (var s in e)
        this[n][s] = e[s], this[n].setAttribute(s, e[s]);
  return this;
}
function zt() {
  var e = this[0];
  if (e) {
    var t = {};
    if (e.dataset)
      for (var n in e.dataset)
        t[n] = e.dataset[n];
    else
      for (var s = 0; s < e.attributes.length; s += 1) {
        var r = e.attributes[s];
        r.name.indexOf("data-") >= 0 && (t[bo(r.name.split("data-")[1])] = r.value);
      }
    for (var l in t)
      t[l] === "false" ? t[l] = !1 : t[l] === "true" ? t[l] = !0 : parseFloat(t[l]) === t[l] * 1 && (t[l] *= 1);
    return t;
  }
}
function Ht(e) {
  if (typeof e > "u") {
    var t = this[0];
    if (!t)
      return;
    if (t.multiple && t.nodeName.toLowerCase() === "select") {
      for (var n = [], s = 0; s < t.selectedOptions.length; s += 1)
        n.push(t.selectedOptions[s].value);
      return n;
    }
    return t.value;
  }
  for (var r = 0; r < this.length; r += 1) {
    var l = this[r];
    if (Array.isArray(e) && l.multiple && l.nodeName.toLowerCase() === "select")
      for (var a = 0; a < l.options.length; a += 1)
        l.options[a].selected = e.indexOf(l.options[a].value) >= 0;
    else
      l.value = e;
  }
  return this;
}
function Ut() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = t[0], r = t[1], l = t[2], a = t[3];
  typeof t[1] == "function" && (s = t[0], l = t[1], a = t[2], r = void 0), a || (a = !1);
  function i(u) {
    var k = u.target;
    if (k) {
      var R = u.target.dom7EventData || [];
      if (R.indexOf(u) < 0 && R.unshift(u), L(k).is(r))
        l.apply(k, R);
      else
        for (var T = L(k).parents(), $ = 0; $ < T.length; $ += 1)
          L(T[$]).is(r) && l.apply(T[$], R);
    }
  }
  function c(u) {
    var k = u && u.target ? u.target.dom7EventData || [] : [];
    k.indexOf(u) < 0 && k.unshift(u), l.apply(this, k);
  }
  for (var m = s.split(" "), _, p = 0; p < this.length; p += 1) {
    var h = this[p];
    if (r)
      for (_ = 0; _ < m.length; _ += 1) {
        var f = m[_];
        h.dom7LiveListeners || (h.dom7LiveListeners = {}), h.dom7LiveListeners[f] || (h.dom7LiveListeners[f] = []), h.dom7LiveListeners[f].push({
          listener: l,
          proxyListener: i
        }), h.addEventListener(f, i, a);
      }
    else
      for (_ = 0; _ < m.length; _ += 1) {
        var g = m[_];
        h.dom7Listeners || (h.dom7Listeners = {}), h.dom7Listeners[g] || (h.dom7Listeners[g] = []), h.dom7Listeners[g].push({
          listener: l,
          proxyListener: c
        }), h.addEventListener(g, c, a);
      }
  }
  return this;
}
function Wt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = t[0], r = t[1], l = t[2], a = t[3];
  typeof t[1] == "function" && (s = t[0], l = t[1], a = t[2], r = void 0), a || (a = !1);
  for (var i = s.split(" "), c = 0; c < i.length; c += 1)
    for (var m = i[c], _ = 0; _ < this.length; _ += 1) {
      var p = this[_], h = void 0;
      if (!r && p.dom7Listeners ? h = p.dom7Listeners[m] : r && p.dom7LiveListeners && (h = p.dom7LiveListeners[m]), h && h.length)
        for (var g = h.length - 1; g >= 0; g -= 1) {
          var f = h[g];
          l && f.listener === l || l && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === l ? (p.removeEventListener(m, f.proxyListener, a), h.splice(g, 1)) : l || (p.removeEventListener(m, f.proxyListener, a), h.splice(g, 1));
        }
    }
  return this;
}
function Gt() {
  for (var e = 0; e < this.length; e += 1)
    this[e].style.display = "none";
  return this;
}
function qt(e) {
  return e ? (this.forEach(function(t, n) {
    e.apply(t, [t, n]);
  }), this) : this;
}
function Xt(e) {
  if (typeof e > "u")
    return this[0] ? this[0].innerHTML : null;
  for (var t = 0; t < this.length; t += 1)
    this[t].innerHTML = e;
  return this;
}
function Yt(e) {
  var t = Dn(), n = xt(), s = this[0], r, l;
  if (!s || typeof e > "u")
    return !1;
  if (typeof e == "string") {
    if (s.matches)
      return s.matches(e);
    if (s.webkitMatchesSelector)
      return s.webkitMatchesSelector(e);
    if (s.msMatchesSelector)
      return s.msMatchesSelector(e);
    for (r = L(e), l = 0; l < r.length; l += 1)
      if (r[l] === s)
        return !0;
    return !1;
  }
  if (e === n)
    return s === n;
  if (e === t)
    return s === t;
  if (e.nodeType || e instanceof he) {
    for (r = e.nodeType ? [e] : e, l = 0; l < r.length; l += 1)
      if (r[l] === s)
        return !0;
    return !1;
  }
  return !1;
}
function Kt() {
  for (var e, t = xt(), n = 0; n < arguments.length; n += 1) {
    e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    for (var s = 0; s < this.length; s += 1)
      if (typeof e == "string") {
        var r = t.createElement("div");
        for (r.innerHTML = e; r.firstChild; )
          this[s].appendChild(r.firstChild);
      } else if (e instanceof he)
        for (var l = 0; l < e.length; l += 1)
          this[s].appendChild(e[l]);
      else
        this[s].appendChild(e);
  }
  return this;
}
function Qt(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var s = this[n].parentNode; s; )
      e ? L(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
  return L(t);
}
function Zt(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var s = this[n].querySelectorAll(e), r = 0; r < s.length; r += 1)
      t.push(s[r]);
  return L(t);
}
function Jt(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var s = this[n].children, r = 0; r < s.length; r += 1)
      (!e || L(s[r]).is(e)) && t.push(s[r]);
  return L(t);
}
var wo = "resize scroll".split(" ");
function Nn(e) {
  function t() {
    for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)
      s[r] = arguments[r];
    if (typeof s[0] > "u") {
      for (var l = 0; l < this.length; l += 1)
        wo.indexOf(e) < 0 && (e in this[l] ? this[l][e]() : L(this[l]).trigger(e));
      return this;
    }
    return this.on.apply(this, [e].concat(s));
  }
  return t;
}
var en = Nn("click"), tn = Nn("focus");
Gt && (L.fn.hide = Gt);
Kt && (L.fn.append = Kt);
en && (L.fn.click = en);
Ut && (L.fn.on = Ut);
Wt && (L.fn.off = Wt);
tn && (L.fn.focus = tn);
jt && (L.fn.attr = jt);
Ht && (L.fn.val = Ht);
Xt && (L.fn.html = Xt);
zt && (L.fn.dataset = zt);
Ft && (L.fn.addClass = Ft);
Bt && (L.fn.removeClass = Bt);
Jt && (L.fn.children = Jt);
qt && (L.fn.each = qt);
Zt && (L.fn.find = Zt);
Yt && (L.fn.is = Yt);
Qt && (L.fn.parents = Qt);
function An(e) {
  if (window.navigator.userAgent.toLowerCase().indexOf("ie") >= 0) {
    const n = `<embed name="embedPlay" src="${e}"></embed>`;
    L("body").find("embed").length <= 0 && L("body").append(n);
    const s = document.embedPlay;
    s.volume = 50;
  } else {
    const n = `<audio id='audioPlay' src='${e}' hidden='true'>`;
    L("body").find("audio").length <= 0 && L("body").append(n), document.getElementById("audioPlay").play();
  }
}
function nn(e) {
  const t = Math.floor(e / 60), n = e % 60, s = String(t).padStart(2, "0"), r = String(n).padStart(2, "0");
  return `${s}:${r}`;
}
const $o = () => ({
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
}), Eo = () => ({
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
}), ko = () => "https://img.sdaxia.top/upload/4314c841777e4d20901cd5d04a28e91a.png";
function Ve() {
  return () => Promise.resolve([]);
}
function So(e) {
  const t = (e == null ? void 0 : e.handleError) || (() => {
  }), n = (e == null ? void 0 : e.fetchSpeaker) || Ve(), s = (e == null ? void 0 : e.fetchSpeaker) || Ve(), r = (e == null ? void 0 : e.fetchBgm) || Ve(), l = (e == null ? void 0 : e.fetchSpecial) || Ve();
  return {
    handleError: t,
    fetchSpeaker: n,
    fetchEnglish: s,
    fetchBgm: r,
    fetchSpecial: l,
    speed: $o,
    pitch: Eo,
    demoAvatar: ko
  };
}
function Co(e, t) {
  const n = So(t);
  return e(ae.EDITORCONFIG, n), n;
}
function Oo() {
  const e = pe(ae.EDITORCONFIG);
  if (e)
    return e;
  throw Error("请注入GlobalEditorConfig");
}
const Ie = (e) => (ke("data-v-3ce19bbf"), e = e(), Se(), e), Ro = {
  class: "slider-panle w-100 px-3 text-white",
  style: { "font-size": "0.5rem" }
}, To = { class: "mt-2 row text-center justify-content-between align-items-center" }, Io = { class: "col-auto me-auto d-flex flex-row align-items-center" }, Po = ["src"], Vo = {
  class: "ms-2 d-flex flex-column justify-content-between",
  style: { height: "50px" }
}, Mo = /* @__PURE__ */ Ie(() => /* @__PURE__ */ d("div", { class: "d-flex dlex-row column-gap-2 align-items-end" }, [
  /* @__PURE__ */ d("span", { class: "fs-6" }, "魔云猫"),
  /* @__PURE__ */ d("span", { style: { "font-size": "0.5rem" } }, "0.55x")
], -1)), Lo = { class: "d-flex flex-row column-gap-2 align-items-center" }, Do = /* @__PURE__ */ Ie(() => /* @__PURE__ */ d("span", { class: "badge text-bg-primary px-2" }, "24K", -1)), No = { class: "col-7 d-flex flex-column align-items-end" }, Ao = /* @__PURE__ */ Ie(() => /* @__PURE__ */ d("div", null, "音频时长，请以生成后的为准", -1)), Fo = { class: "mt-1" }, Bo = /* @__PURE__ */ Ie(() => /* @__PURE__ */ d("span", null, "/", -1)), jo = /* @__PURE__ */ cn('<div class="role-list mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-2 column-gap-3" data-v-3ce19bbf><div class="rounded-pill px-1 border" data-v-3ce19bbf>女青年(默认)</div><div class="rounded-pill px-1" data-v-3ce19bbf>男孩儿</div><div class="rounded-pill px-1" data-v-3ce19bbf>男青少年</div><div class="rounded-pill px-1" data-v-3ce19bbf>男中年</div><div class="rounded-pill px-1" data-v-3ce19bbf>男孩儿</div><div class="rounded-pill px-1" data-v-3ce19bbf>男青少年</div><div class="rounded-pill px-1" data-v-3ce19bbf>男中年</div><div class="rounded-pill px-1" data-v-3ce19bbf>男孩儿</div><div class="rounded-pill px-1" data-v-3ce19bbf>男孩儿</div><div class="rounded-pill px-1" data-v-3ce19bbf>男中年</div><div class="rounded-pill px-1" data-v-3ce19bbf>男青少年</div><div class="rounded-pill px-1" data-v-3ce19bbf>男青少年</div><div class="rounded-pill px-1" data-v-3ce19bbf>男中年</div></div>', 1), zo = { class: "audio-mood mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-1 column-gap-2" }, Ho = /* @__PURE__ */ Ie(() => /* @__PURE__ */ d("div", { class: "my-3" }, [
  /* @__PURE__ */ d("span", { class: "border rounded-pill p-1" }, "配音师详情")
], -1)), Uo = { class: "slider-box" }, Wo = { class: "slider-box" }, Go = /* @__PURE__ */ cn('<ul class="d-flex flex-row gap-3 my-3" data-v-3ce19bbf><li class="rounded-pill px-1 border" data-v-3ce19bbf>常用</li><li class="rounded-pill px-1" data-v-3ce19bbf>已购</li><li class="rounded-pill px-1" data-v-3ce19bbf>收藏</li><li class="rounded-pill px-1" data-v-3ce19bbf>我的</li></ul>', 1), qo = { class: "d-flex flex-row flex-wrap row-gap-2 column-gap-3 mb-3" }, Xo = /* @__PURE__ */ M({
  __name: "slider-panle",
  setup(e) {
    const t = Oo(), n = y(10), s = y(0), r = y([0, 2]), l = y(0), a = y([-10, 10]), i = y(0), c = Z(() => nn(n.value)), m = Z(() => nn(s.value)), _ = Et(t.speed()), p = Et(t.pitch());
    return (h, g) => (I(), D("div", Ro, [
      d("div", To, [
        d("div", Io, [
          d("img", {
            src: b(t).demoAvatar(),
            class: "rounded-circle",
            style: { height: "50px" }
          }, null, 8, Po),
          d("div", Vo, [
            Mo,
            d("div", Lo, [
              o(b(dn), { class: "fs-6" }, {
                default: v(() => [
                  o(b(us))
                ]),
                _: 1
              }),
              Do
            ])
          ])
        ]),
        d("div", No, [
          Ao,
          d("div", Fo, [
            d("span", null, j(m.value), 1),
            Bo,
            d("span", null, j(c.value), 1)
          ]),
          o(b(Xe), {
            max: n.value,
            modelValue: s.value,
            "onUpdate:modelValue": g[0] || (g[0] = (f) => s.value = f),
            size: "small"
          }, null, 8, ["max", "modelValue"])
        ])
      ]),
      jo,
      d("ul", zo, [
        d("li", null, [
          o(B)
        ]),
        d("li", null, [
          o(B)
        ]),
        d("li", null, [
          o(B)
        ]),
        d("li", null, [
          o(B)
        ]),
        d("li", null, [
          o(B)
        ]),
        d("li", null, [
          o(B)
        ])
      ]),
      Ho,
      d("div", Uo, [
        d("div", null, [
          d("span", null, "语速：" + j(l.value) + "x", 1)
        ]),
        o(b(Xe), {
          modelValue: l.value,
          "onUpdate:modelValue": g[1] || (g[1] = (f) => l.value = f),
          min: r.value[0],
          max: r.value[1],
          step: 0.05,
          marks: _
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      d("div", Wo, [
        d("div", null, [
          d("span", null, "语调：" + j(i.value), 1)
        ]),
        o(b(Xe), {
          modelValue: i.value,
          "onUpdate:modelValue": g[2] || (g[2] = (f) => i.value = f),
          min: a.value[0],
          max: a.value[1],
          step: 0.2,
          marks: p
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      d("div", null, [
        Go,
        d("ul", qo, [
          d("li", null, [
            o(B)
          ]),
          d("li", null, [
            o(B)
          ]),
          d("li", null, [
            o(B)
          ]),
          d("li", null, [
            o(B)
          ]),
          d("li", null, [
            o(B)
          ]),
          d("li", null, [
            o(B)
          ]),
          d("li", null, [
            o(B)
          ]),
          d("li", null, [
            o(B)
          ]),
          d("li", null, [
            o(B)
          ]),
          d("li", null, [
            o(B)
          ])
        ])
      ])
    ]));
  }
});
const Yo = /* @__PURE__ */ X(Xo, [["__scopeId", "data-v-3ce19bbf"]]), Ko = (e) => (ke("data-v-2d1e47a4"), e = e(), Se(), e), Qo = { class: "box ms-2" }, Zo = { class: "try-play-header text-center d-flex flex-row justify-content-between" }, Jo = { class: "try-play-body d-flex flex-row" }, ea = { class: "try-play-left w-50 border-right border-secondary" }, ta = { class: "pe-1" }, na = { class: "type-list d-flex flex-row border-bottom border-secondary" }, sa = /* @__PURE__ */ Ko(() => /* @__PURE__ */ d("div", { class: "py-1 border-top border-secondary" }, null, -1)), ra = { class: "try-play-right w-50 border-start rounded border-top border-secondary overflow-x-hidden overflow-y-auto scrollbar-none" }, la = /* @__PURE__ */ M({
  __name: "try-play-panle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = e, s = y(), r = y(""), l = y(), a = y();
    Ee(() => {
      window.addEventListener("keydown", i);
    }), pt(() => {
      window.addEventListener("keydown", i);
    }), ve(
      () => n.visible,
      (h) => {
        h && setTimeout(() => {
          p();
        }, 200);
      }
    );
    function i(h) {
      h.code === "Escape" && n.visible && _();
    }
    const { position: c } = We(a, {
      initialValue: { x: 100, y: 100 }
    }), { style: m } = _t(l, c);
    function _() {
      t("update:visible", !1);
    }
    function p() {
      var h;
      (h = s.value) == null || h.focus();
    }
    return (h, g) => de((I(), D("div", {
      ref_key: "boxRef",
      ref: l,
      style: je([b(m), { position: "fixed" }]),
      class: "try-play user-select-none card z-3 shadow"
    }, [
      d("div", Qo, [
        d("div", Zo, [
          d("div", {
            ref_key: "handleRef",
            ref: a,
            class: "col-11 try-play-move"
          }, null, 512),
          d("div", {
            onClick: _,
            class: "col-1 try-play-menu-close"
          }, [
            o(b(dn), { color: "white" }, {
              default: v(() => [
                o(b(cs))
              ]),
              _: 1
            })
          ])
        ]),
        d("div", Jo, [
          d("div", ea, [
            d("div", ta, [
              o(b(ze), {
                onSubmit: g[1] || (g[1] = Q(() => {
                }, ["prevent"]))
              }, {
                default: v(() => [
                  o(b(He), {
                    "input-style": {},
                    ref_key: "searchInputRef",
                    ref: s,
                    modelValue: r.value,
                    "onUpdate:modelValue": g[0] || (g[0] = (f) => r.value = f),
                    placeholder: "输入名称搜索"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            d("div", na, [
              o(C, null, {
                default: v(() => [
                  E("热榜")
                ]),
                _: 1
              }),
              o(C, null, {
                default: v(() => [
                  E("SVIP")
                ]),
                _: 1
              }),
              o(C, null, {
                default: v(() => [
                  E("付费")
                ]),
                _: 1
              })
            ]),
            o(fo),
            sa,
            o(oo)
          ]),
          d("div", ra, [
            o(Yo)
          ])
        ])
      ])
    ], 4)), [
      [fe, h.visible]
    ]);
  }
});
const oa = /* @__PURE__ */ X(la, [["__scopeId", "data-v-2d1e47a4"]]), Fn = /* @__PURE__ */ M({
  __name: "try-play",
  setup(e) {
    const t = y(!0);
    function n(s) {
      s || (t.value = !0);
    }
    return (s, r) => (I(), Y(ft, { to: "body" }, [
      o(Jl, {
        visible: t.value,
        "onUpdate:visible": r[0] || (r[0] = (l) => t.value = l)
      }, null, 8, ["visible"]),
      o(oa, {
        visible: !t.value,
        "onUpdate:visible": n
      }, null, 8, ["visible"])
    ]));
  }
});
const aa = {
  install: (e) => {
    e.component("SpeakerMenu", xn), e.component("ContinuousMenu", wn), e.component("ReadMenu", $n), e.component("DigitalMenu", En), e.component("AliasMenu", kn), e.component("EnglishMenu", Sn), e.component("ChangespeedMenu", Cn), e.component("RhythmMenu", On), e.component("SpecialMenu", Rn), e.component("MuteMenu", Tn), e.component("BgmMenu", In), e.component("SensitiveMenu", Pn), e.component("ManagementMenu", Vn), e.component("ConversionMenu", Mn), e.component("TryPlay", Fn);
  }
};
var ut = { exports: {} }, ct = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.ParsingError = void 0;
  class n extends Error {
    constructor(S, O) {
      super(S), this.cause = O;
    }
  }
  t.ParsingError = n;
  let s;
  function r() {
    return c(!1) || h() || p() || _();
  }
  function l() {
    return u(/\s*/), c(!0) || p() || m() || i(!1);
  }
  function a() {
    const $ = i(!0), S = [];
    let O, w = l();
    for (; w; ) {
      if (w.node.type === "Element") {
        if (O)
          throw new Error("Found multiple root nodes");
        O = w.node;
      }
      w.excluded || S.push(w.node), w = l();
    }
    if (!O)
      throw new n("Failed to parse XML", "Root Element not found");
    if (s.xml.length !== 0)
      throw new n("Failed to parse XML", "Not Well-Formed XML");
    return {
      declaration: $ ? $.node : null,
      root: O,
      children: S
    };
  }
  function i($) {
    const S = u($ ? /^<\?(xml)\s*/ : /^<\?([\w-:.]+)\s*/);
    if (!S)
      return;
    const O = {
      name: S[1],
      type: "ProcessingInstruction",
      attributes: {}
    };
    for (; !(k() || R("?>")); ) {
      const w = g();
      if (w)
        O.attributes[w.name] = w.value;
      else
        return;
    }
    return u(/\?>/), {
      excluded: $ ? !1 : s.options.filter(O) === !1,
      node: O
    };
  }
  function c($) {
    const S = u(/^<([^?!</>\s]+)\s*/);
    if (!S)
      return;
    const O = {
      type: "Element",
      name: S[1],
      attributes: {},
      children: []
    }, w = $ ? !1 : s.options.filter(O) === !1;
    for (; !(k() || R(">") || R("?>") || R("/>")); ) {
      const N = g();
      if (N)
        O.attributes[N.name] = N.value;
      else
        return;
    }
    if (u(/^\s*\/>/))
      return O.children = null, {
        excluded: w,
        node: O
      };
    u(/\??>/);
    let P = r();
    for (; P; )
      P.excluded || O.children.push(P.node), P = r();
    if (s.options.strictMode) {
      const N = `</${O.name}>`;
      if (s.xml.startsWith(N))
        s.xml = s.xml.slice(N.length);
      else
        throw new n("Failed to parse XML", `Closing tag not matching "${N}"`);
    } else
      u(/^<\/\s*[\w-:.\u00C0-\u00FF]+>/);
    return {
      excluded: w,
      node: O
    };
  }
  function m() {
    const $ = u(/^<!DOCTYPE\s+\S+\s+SYSTEM[^>]*>/) || u(/^<!DOCTYPE\s+\S+\s+PUBLIC[^>]*>/) || u(/^<!DOCTYPE\s+\S+\s*\[[^\]]*]>/) || u(/^<!DOCTYPE\s+\S+\s*>/);
    if ($) {
      const S = {
        type: "DocumentType",
        content: $[0]
      };
      return {
        excluded: s.options.filter(S) === !1,
        node: S
      };
    }
  }
  function _() {
    if (s.xml.startsWith("<![CDATA[")) {
      const $ = s.xml.indexOf("]]>");
      if ($ > -1) {
        const S = $ + 3, O = {
          type: "CDATA",
          content: s.xml.substring(0, S)
        };
        return s.xml = s.xml.slice(S), {
          excluded: s.options.filter(O) === !1,
          node: O
        };
      }
    }
  }
  function p() {
    const $ = u(/^<!--[\s\S]*?-->/);
    if ($) {
      const S = {
        type: "Comment",
        content: $[0]
      };
      return {
        excluded: s.options.filter(S) === !1,
        node: S
      };
    }
  }
  function h() {
    const $ = u(/^([^<]+)/);
    if ($) {
      const S = {
        type: "Text",
        content: $[1]
      };
      return {
        excluded: s.options.filter(S) === !1,
        node: S
      };
    }
  }
  function g() {
    const $ = u(/([^=]+)\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)\s*/);
    if ($)
      return {
        name: $[1].trim(),
        value: f($[2].trim())
      };
  }
  function f($) {
    return $.replace(/^['"]|['"]$/g, "");
  }
  function u($) {
    const S = s.xml.match($);
    if (S)
      return s.xml = s.xml.slice(S[0].length), S;
  }
  function k() {
    return s.xml.length === 0;
  }
  function R($) {
    return s.xml.indexOf($) === 0;
  }
  function T($, S = {}) {
    $ = $.trim();
    const O = S.filter || (() => !0);
    return s = {
      xml: $,
      options: Object.assign(Object.assign({}, S), { filter: O, strictMode: S.strictMode === !0 })
    }, a();
  }
  e.exports = T, t.default = T;
})(ct, ct.exports);
var ia = ct.exports;
(function(e, t) {
  var n = be && be.__importDefault || function(f) {
    return f && f.__esModule ? f : { default: f };
  };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const s = n(ia);
  function r(f) {
    if (!f.options.indentation && !f.options.lineSeparator)
      return;
    f.content += f.options.lineSeparator;
    let u;
    for (u = 0; u < f.level; u++)
      f.content += f.options.indentation;
  }
  function l(f) {
    f.content = f.content.replace(/ +$/, "");
    let u;
    for (u = 0; u < f.level; u++)
      f.content += f.options.indentation;
  }
  function a(f, u) {
    f.content += u;
  }
  function i(f, u, k) {
    if (typeof f.content == "string")
      c(f.content, u, k);
    else if (f.type === "Element")
      _(f, u, k);
    else if (f.type === "ProcessingInstruction")
      h(f, u);
    else
      throw new Error("Unknown node type: " + f.type);
  }
  function c(f, u, k) {
    if (!k) {
      const R = f.trim();
      (u.options.lineSeparator || R.length === 0) && (f = R);
    }
    f.length > 0 && (!k && u.content.length > 0 && r(u), a(u, f));
  }
  function m(f, u) {
    const k = "/" + f.join("/"), R = f[f.length - 1];
    return u.includes(R) || u.includes(k);
  }
  function _(f, u, k) {
    if (u.path.push(f.name), !k && u.content.length > 0 && r(u), a(u, "<" + f.name), p(u, f.attributes), f.children === null || u.options.forceSelfClosingEmptyTag && f.children.length === 0) {
      const R = u.options.whiteSpaceAtEndOfSelfclosingTag ? " />" : "/>";
      a(u, R);
    } else if (f.children.length === 0)
      a(u, "></" + f.name + ">");
    else {
      const R = f.children;
      a(u, ">"), u.level++;
      let T = f.attributes["xml:space"] === "preserve", $ = !1;
      if (!T && u.options.ignoredPaths && ($ = m(u.path, u.options.ignoredPaths), T = $), !T && u.options.collapseContent) {
        let S = !1, O = !1, w = !1;
        R.forEach(function(P, N) {
          P.type === "Text" ? (P.content.includes(`
`) ? (O = !0, P.content = P.content.trim()) : (N === 0 || N === R.length - 1) && P.content.trim().length === 0 && (P.content = ""), P.content.trim().length > 0 && (S = !0)) : P.type === "CDATA" ? S = !0 : w = !0;
        }), S && (!w || !O) && (T = !0);
      }
      R.forEach(function(S) {
        i(S, u, k || T);
      }), u.level--, !k && !T && r(u), $ && l(u), a(u, "</" + f.name + ">");
    }
    u.path.pop();
  }
  function p(f, u) {
    Object.keys(u).forEach(function(k) {
      const R = u[k].replace(/"/g, "&quot;");
      a(f, " " + k + '="' + R + '"');
    });
  }
  function h(f, u) {
    u.content.length > 0 && r(u), a(u, "<?" + f.name), p(u, f.attributes), a(u, "?>");
  }
  function g(f, u = {}) {
    u.indentation = "indentation" in u ? u.indentation : "    ", u.collapseContent = u.collapseContent === !0, u.lineSeparator = "lineSeparator" in u ? u.lineSeparator : `\r
`, u.whiteSpaceAtEndOfSelfclosingTag = u.whiteSpaceAtEndOfSelfclosingTag === !0, u.throwOnFailure = u.throwOnFailure !== !1;
    try {
      const k = (0, s.default)(f, { filter: u.filter, strictMode: u.strictMode }), R = { content: "", level: 0, options: u, path: [] };
      return k.declaration && h(k.declaration, R), k.children.forEach(function(T) {
        i(T, R, !1);
      }), u.lineSeparator ? R.content.replace(/\r\n/g, `
`).replace(/\n/g, u.lineSeparator) : R.content;
    } catch (k) {
      if (u.throwOnFailure)
        throw k;
      return f;
    }
  }
  g.minify = (f, u = {}) => g(f, Object.assign(Object.assign({}, u), { indentation: "", lineSeparator: "" })), e.exports = g, t.default = g;
})(ut, ut.exports);
var ua = ut.exports;
const ca = /* @__PURE__ */ yt(ua), da = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => V.getNodeType(r) === "ssml-audio" ? !0 : t(r), s.isVoid = (r) => V.getNodeType(r) === "ssml-audio" ? !0 : n(r), s;
};
function sn(e, t, n, s, r) {
  const l = t === void 0 ? void 0 : t.key;
  return { sel: e, data: t, children: n, text: s, elm: r, key: l };
}
const rn = Array.isArray;
function nt(e) {
  return typeof e == "string" || typeof e == "number" || e instanceof String || e instanceof Number;
}
function Bn(e, t, n) {
  if (e.ns = "http://www.w3.org/2000/svg", n !== "foreignObject" && t !== void 0)
    for (let s = 0; s < t.length; ++s) {
      const r = t[s];
      if (typeof r == "string")
        continue;
      const l = r.data;
      l !== void 0 && Bn(l, r.children, r.sel);
    }
}
function x(e, t, n) {
  let s = {}, r, l, a;
  if (n !== void 0 ? (t !== null && (s = t), rn(n) ? r = n : nt(n) ? l = n.toString() : n && n.sel && (r = [n])) : t != null && (rn(t) ? r = t : nt(t) ? l = t.toString() : t && t.sel ? r = [t] : s = t), r !== void 0)
    for (a = 0; a < r.length; ++a)
      nt(r[a]) && (r[a] = sn(void 0, void 0, void 0, r[a], void 0));
  return e[0] === "s" && e[1] === "v" && e[2] === "g" && (e.length === 3 || e[3] === "." || e[3] === "#") && Bn(s, r, e), sn(e, s, r, l, void 0);
}
var jn = "Expected a function", ln = 0 / 0, fa = "[object Symbol]", pa = /^\s+|\s+$/g, va = /^[-+]0x[0-9a-f]+$/i, ma = /^0b[01]+$/i, ha = /^0o[0-7]+$/i, _a = parseInt, ya = typeof be == "object" && be && be.Object === Object && be, ga = typeof self == "object" && self && self.Object === Object && self, ba = ya || ga || Function("return this")(), xa = Object.prototype, wa = xa.toString, $a = Math.max, Ea = Math.min, st = function() {
  return ba.Date.now();
};
function ka(e, t, n) {
  var s, r, l, a, i, c, m = 0, _ = !1, p = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(jn);
  t = on(t) || 0, Be(n) && (_ = !!n.leading, p = "maxWait" in n, l = p ? $a(on(n.maxWait) || 0, t) : l, h = "trailing" in n ? !!n.trailing : h);
  function g(w) {
    var P = s, N = r;
    return s = r = void 0, m = w, a = e.apply(N, P), a;
  }
  function f(w) {
    return m = w, i = setTimeout(R, t), _ ? g(w) : a;
  }
  function u(w) {
    var P = w - c, N = w - m, Pe = t - P;
    return p ? Ea(Pe, l - N) : Pe;
  }
  function k(w) {
    var P = w - c, N = w - m;
    return c === void 0 || P >= t || P < 0 || p && N >= l;
  }
  function R() {
    var w = st();
    if (k(w))
      return T(w);
    i = setTimeout(R, u(w));
  }
  function T(w) {
    return i = void 0, h && s ? g(w) : (s = r = void 0, a);
  }
  function $() {
    i !== void 0 && clearTimeout(i), m = 0, s = c = r = i = void 0;
  }
  function S() {
    return i === void 0 ? a : T(st());
  }
  function O() {
    var w = st(), P = k(w);
    if (s = arguments, r = this, c = w, P) {
      if (i === void 0)
        return f(c);
      if (p)
        return i = setTimeout(R, t), g(c);
    }
    return i === void 0 && (i = setTimeout(R, t)), a;
  }
  return O.cancel = $, O.flush = S, O;
}
function Sa(e, t, n) {
  var s = !0, r = !0;
  if (typeof e != "function")
    throw new TypeError(jn);
  return Be(n) && (s = "leading" in n ? !!n.leading : s, r = "trailing" in n ? !!n.trailing : r), ka(e, t, {
    leading: s,
    maxWait: t,
    trailing: r
  });
}
function Be(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function Ca(e) {
  return !!e && typeof e == "object";
}
function Oa(e) {
  return typeof e == "symbol" || Ca(e) && wa.call(e) == fa;
}
function on(e) {
  if (typeof e == "number")
    return e;
  if (Oa(e))
    return ln;
  if (Be(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Be(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(pa, "");
  var n = ma.test(e);
  return n || ha.test(e) ? _a(e.slice(2), n ? 2 : 8) : va.test(e) ? ln : +e;
}
var Ra = Sa;
const J = /* @__PURE__ */ yt(Ra), Ta = {
  type: "ssml-audio",
  renderElem: (e, t, n) => {
    const { remark: s, src: r } = e;
    return x("span.ssml-wrapper.no-line-height", [
      x(
        "span.remark.left",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-audio)"
          }
        },
        [
          x("span.iconfont.icon-roundclosefill", {
            on: {
              click: J((l) => {
                l.preventDefault();
                const a = V.findPath(n, e);
                A.delete(n, { at: a });
              })
            }
          }),
          x("span.iconfont.icon-play", {
            on: {
              click: J((l) => {
                l.preventDefault(), An(r);
              })
            }
          }),
          x("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, Ia = {
  type: "ssml-audio",
  elemToHtml: (e, t) => {
    const { remark: n, src: s } = e;
    return `<span
          data-w-e-type="ssml-audio"
          data-w-e-is-void
          data-w-e-is-inline
          data-ow-src="${s}"
          data-ow-remark="${n}"
        >${t}</span>`;
  }
}, Pa = {
  editorPlugin: da,
  renderElems: [Ta],
  elemsToHtml: [Ia]
}, Va = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => V.getNodeType(r) === "ssml-break" ? !0 : t(r), s.isVoid = (r) => V.getNodeType(r) === "ssml-break" ? !0 : n(r), s;
}, Ma = {
  type: "ssml-break",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return x(
      "span.ssml-wrapper",
      {
        props: { contentEditable: !1 }
      },
      [
        x(
          "span.remark",
          {
            style: {
              backgroundColor: "var(--ssml-break)"
            }
          },
          [
            x("span.iconfont.icon-roundclosefill", {
              on: {
                click: J((r) => {
                  r.preventDefault();
                  const l = V.findPath(n, e);
                  A.delete(n, { at: l });
                })
              }
            }),
            x("span.data-content", { attrs: { "data-content": s } })
          ]
        ),
        x("span.data-content", {
          attrs: { "data-content": "|" },
          style: { color: "var(--ssml-break)" }
        })
      ]
    );
  }
}, La = {
  type: "ssml-break",
  elemToHtml: (e) => {
    const { remark: t, time: n, strength: s } = e;
    return `<span
          data-w-e-type="ssml-break"
          data-w-e-is-void
          data-w-e-is-inline
          data-ow-remark="${t}"
          data-ow-time="${n}"
          data-ow-strength="${s}"
        ></span>`;
  }
}, Da = {
  editorPlugin: Va,
  renderElems: [Ma],
  elemsToHtml: [La]
}, Na = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => V.getNodeType(r) === "ssml-emphasis" ? !0 : t(r), s.isVoid = (r) => V.getNodeType(r) === "ssml-emphasis" ? !1 : n(r), s;
}, Aa = {
  type: "ssml-emphasis",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return x("span.ssml-wrapper", [
      x(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-emphasis)"
          }
        },
        [
          x("span.iconfont.icon-roundclosefill", {
            on: {
              click: J((r) => {
                r.preventDefault();
                const l = V.findPath(n, e);
                A.unwrapNodes(n, { at: l });
              })
            }
          }),
          x("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      x("span.data-content", {
        attrs: { "data-content": "{{" },
        style: { color: "var(--ssml-emphasis)" }
      }),
      x("span", t),
      x("span.data-content", {
        attrs: { "data-content": "}}" },
        style: { color: "var(--ssml-emphasis)" }
      })
    ]);
  }
}, Fa = {
  type: "ssml-emphasis",
  elemToHtml: (e, t) => {
    const { remark: n, level: s } = e;
    return `<span
          data-w-e-type="ssml-emphasis"
          data-w-e-is-void
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-level="${s}"
        >${t}</span>`;
  }
}, Ba = {
  editorPlugin: Na,
  renderElems: [Aa],
  elemsToHtml: [Fa]
}, ja = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => V.getNodeType(r) === "ssml-mstts:express-as" ? !0 : t(r), s.isVoid = (r) => V.getNodeType(r) === "ssml-mstts:express-as" ? !1 : n(r), s;
}, za = {
  type: "ssml-mstts:express-as",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return x("span.ssml-wrapper", [
      x(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-mstts--express-as)"
          }
        },
        [
          x("span.iconfont.icon-roundclosefill", {
            on: {
              click: J((r) => {
                r.preventDefault();
                const l = V.findPath(n, e);
                A.unwrapNodes(n, { at: l });
              })
            }
          }),
          x("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      x("span.data-content", {
        attrs: { "data-content": "{{" },
        style: { color: "var(--ssml-mstts--express-as)" }
      }),
      x("span", t),
      x("span.data-content", {
        attrs: { "data-content": "}}" },
        style: { color: "var(--ssml-mstts--express-as)" }
      })
    ]);
  }
}, Ha = {
  type: "ssml-mstts:express-as",
  elemToHtml: (e, t) => {
    const { remark: n, style: s, role: r, styledegree: l } = e;
    return `<span
          data-w-e-type="ssml-mstts:express-as"
          data-w-e-is-void
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-style="${s}"
          data-ow-styledegree="${l}"
          data-ow-role="${r}"
        >${t}</span>`;
  }
}, Ua = {
  editorPlugin: ja,
  renderElems: [za],
  elemsToHtml: [Ha]
}, Wa = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => V.getNodeType(r) === "ssml-p" ? !0 : t(r), s.isVoid = (r) => V.getNodeType(r) === "ssml-p" ? !1 : n(r), s;
}, Ga = {
  type: "ssml-p",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return x("span.ssml-wrapper", [
      x(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-p)"
          }
        },
        [
          x("span.iconfont.icon-roundclosefill", {
            on: {
              click: J((r) => {
                r.preventDefault();
                const l = V.findPath(n, e);
                A.unwrapNodes(n, { at: l });
              })
            }
          }),
          x("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      x("span.data-content", {
        attrs: { "data-content": "{{" },
        style: { color: "var(--ssml-p)" }
      }),
      x("span", t),
      x("span.data-content", {
        attrs: { "data-content": "}}" },
        style: { color: "var(--ssml-p)" }
      })
    ]);
  }
}, qa = {
  type: "ssml-p",
  elemToHtml: (e, t) => {
    const { remark: n } = e;
    return `<span
          data-w-e-type="ssml-p"
          data-w-e-is-void
          data-w-e-is-inline
          data-ow-remark="${n}"
        >${t}</span>`;
  }
}, Xa = {
  editorPlugin: Wa,
  renderElems: [Ga],
  elemsToHtml: [qa]
}, Ya = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => V.getNodeType(r) === "ssml-phoneme" ? !0 : t(r), s.isVoid = (r) => V.getNodeType(r) === "ssml-phoneme" ? !1 : n(r), s;
}, Ka = {
  type: "ssml-phoneme",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return x("span.ssml-wrapper", [
      x(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-phoneme)"
          }
        },
        [
          x("span.iconfont.icon-roundclosefill", {
            on: {
              click: J((r) => {
                r.preventDefault();
                const l = V.findPath(n, e);
                A.unwrapNodes(n, { at: l });
              })
            }
          }),
          x("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      x("span.data-content", {
        attrs: { "data-content": "{{" },
        style: { color: "var(--ssml-phoneme)" }
      }),
      x("span", t),
      x("span.data-content", {
        attrs: { "data-content": "}}" },
        style: { color: "var(--ssml-phoneme)" }
      })
    ]);
  }
}, Qa = {
  type: "ssml-phoneme",
  elemToHtml: (e, t) => {
    const { remark: n, alphabet: s, ph: r } = e;
    return `<span
          data-w-e-type="ssml-phoneme"
          data-w-e-is-void
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-alphabet="${s}"
          data-ow-ph="${r}"
        >${t}</span>`;
  }
}, Za = {
  editorPlugin: Ya,
  renderElems: [Ka],
  elemsToHtml: [Qa]
}, Ja = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => V.getNodeType(r) === "ssml-prosody" ? !0 : t(r), s.isVoid = (r) => V.getNodeType(r) === "ssml-prosody" ? !1 : n(r), s;
}, ei = {
  type: "ssml-prosody",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return x("span.ssml-wrapper", [
      x(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-prosody)"
          }
        },
        [
          x("span.iconfont.icon-roundclosefill", {
            on: {
              click: J((r) => {
                r.preventDefault();
                const l = V.findPath(n, e);
                A.unwrapNodes(n, { at: l });
              })
            }
          }),
          x("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      x("span.data-content", {
        attrs: { "data-content": "{{" },
        style: { color: "var(--ssml-prosody)" }
      }),
      x("span", t),
      x("span.data-content", {
        attrs: { "data-content": "}}" },
        style: { color: "var(--ssml-prosody)" }
      })
    ]);
  }
}, ti = {
  type: "ssml-prosody",
  elemToHtml: (e, t) => {
    const { remark: n, contour: s, pitch: r, range: l, rate: a, volume: i } = e;
    return `<span
          data-w-e-type="ssml-prosody"
          data-w-e-is-void
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-contour="${s}"
          data-ow-pitch="${r}"
          data-ow-range="${l}"
          data-ow-rate="${a}"
          data-ow-volume="${i}"
        >${t}</span>`;
  }
}, ni = {
  editorPlugin: Ja,
  renderElems: [ei],
  elemsToHtml: [ti]
}, si = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => V.getNodeType(r) === "ssml-s" ? !0 : t(r), s.isVoid = (r) => V.getNodeType(r) === "ssml-s" ? !1 : n(r), s;
}, ri = {
  type: "ssml-s",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return x("span.ssml-wrapper", [
      x(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-s)"
          }
        },
        [
          x("span.iconfont.icon-roundclosefill", {
            on: {
              click: J((r) => {
                r.preventDefault();
                const l = V.findPath(n, e);
                A.unwrapNodes(n, { at: l });
              })
            }
          }),
          x("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      x("span.data-content", {
        attrs: { "data-content": "{{" },
        style: { color: "var(--ssml-s)" }
      }),
      x("span", t),
      x("span.data-content", {
        attrs: { "data-content": "}}" },
        style: { color: "var(--ssml-s)" }
      })
    ]);
  }
}, li = {
  type: "ssml-s",
  elemToHtml: (e, t) => {
    const { remark: n } = e;
    return `<span
          data-w-e-type="ssml-s"
          data-w-e-is-void
          data-w-e-is-inline
          data-ow-remark="${n}"
        >${t}</span>`;
  }
}, oi = {
  editorPlugin: si,
  renderElems: [ri],
  elemsToHtml: [li]
}, ai = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => V.getNodeType(r) === "ssml-say-as" ? !0 : t(r), s.isVoid = (r) => V.getNodeType(r) === "ssml-say-as" ? !1 : n(r), s;
}, ii = {
  type: "ssml-say-as",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return x("span.ssml-wrapper", [
      x(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-say-as)"
          }
        },
        [
          x("span.iconfont.icon-roundclosefill", {
            on: {
              click: J((r) => {
                r.preventDefault();
                const l = V.findPath(n, e);
                A.unwrapNodes(n, { at: l });
              })
            }
          }),
          x("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      x("span.data-content", {
        attrs: { "data-content": "{{" },
        style: { color: "var(--ssml-say-as)" }
      }),
      x("span", t),
      x("span.data-content", {
        attrs: { "data-content": "}}" },
        style: { color: "var(--ssml-say-as)" }
      })
    ]);
  }
}, ui = {
  type: "ssml-say-as",
  elemToHtml: (e, t) => {
    const { remark: n, interpretAs: s, detail: r, format: l } = e;
    return `<span
          data-w-e-type="ssml-say-as"
          data-w-e-is-void
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-interpretAs="${s}"
          data-ow-detail="${r}"
          data-ow-format="${l}"
        >${t}</span>`;
  }
}, ci = {
  editorPlugin: ai,
  renderElems: [ii],
  elemsToHtml: [ui]
}, di = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => V.getNodeType(r) === "ssml-sub" ? !0 : t(r), s.isVoid = (r) => V.getNodeType(r) === "ssml-sub" ? !1 : n(r), s;
}, fi = {
  type: "ssml-sub",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return x("span.ssml-wrapper", [
      x(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-sub)"
          }
        },
        [
          x("span.iconfont.icon-roundclosefill", {
            on: {
              click: J((r) => {
                r.preventDefault();
                const l = V.findPath(n, e);
                A.unwrapNodes(n, { at: l });
              })
            }
          }),
          x("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      x("span.data-content", {
        attrs: { "data-content": "{{" },
        style: { color: "var(--ssml-sub)" }
      }),
      x("span", t),
      x("span.data-content", {
        attrs: { "data-content": "}}" },
        style: { color: "var(--ssml-sub)" }
      })
    ]);
  }
}, pi = {
  type: "ssml-sub",
  elemToHtml: (e, t) => {
    const { remark: n, alias: s } = e;
    return `<span
          data-w-e-type="ssml-sub"
          data-w-e-is-void
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-alias="${s}"
        >${t}</span>`;
  }
}, vi = {
  editorPlugin: di,
  renderElems: [fi],
  elemsToHtml: [pi]
}, mi = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => V.getNodeType(r) === "ssml-voice" ? !0 : t(r), s.isVoid = (r) => V.getNodeType(r) === "ssml-voice" ? !1 : n(r), s;
}, hi = {
  type: "ssml-voice",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return x("span.ssml-wrapper", [
      x(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-voice)"
          }
        },
        [
          x("span.iconfont.icon-roundclosefill", {
            on: {
              click: J((r) => {
                r.preventDefault();
                const l = V.findPath(n, e);
                A.unwrapNodes(n, { at: l });
              })
            }
          }),
          x("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      x("span.data-content", {
        attrs: { "data-content": "{{" },
        style: { color: "var(--ssml-voice)" }
      }),
      x("span", t),
      x("span.data-content", {
        attrs: { "data-content": "}}" },
        style: { color: "var(--ssml-voice)" }
      })
    ]);
  }
}, _i = {
  type: "ssml-voice",
  elemToHtml: (e, t) => {
    const { remark: n, name: s, effect: r } = e;
    return `<span
          data-w-e-type="ssml-voice"
          data-w-e-is-void
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-name="${s}"
          data-ow-effect="${r}"
        >${t}</span>`;
  }
}, yi = {
  editorPlugin: mi,
  renderElems: [hi],
  elemsToHtml: [_i]
}, gi = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => V.getNodeType(r) === "ssml-w" ? !0 : t(r), s.isVoid = (r) => V.getNodeType(r) === "ssml-w" ? !1 : n(r), s;
}, bi = {
  type: "ssml-w",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return x("span.ssml-wrapper", [
      x(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-w)"
          }
        },
        [
          x("span.iconfont.icon-roundclosefill", {
            on: {
              click: J((r) => {
                r.preventDefault();
                const l = V.findPath(n, e);
                A.unwrapNodes(n, { at: l });
              })
            }
          }),
          x("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      x("span.data-content", {
        attrs: { "data-content": "{{" },
        style: { color: "var(--ssml-w)" }
      }),
      x("span", t),
      x("span.data-content", {
        attrs: { "data-content": "}}" },
        style: { color: "var(--ssml-w)" }
      })
    ]);
  }
}, xi = {
  type: "ssml-s",
  elemToHtml: (e, t) => {
    const { remark: n } = e;
    return `<span
          data-w-e-type="ssml-s"
          data-w-e-is-void
          data-w-e-is-inline
          data-ow-remark="${n}"
        >${t}</span>`;
  }
}, wi = {
  editorPlugin: gi,
  renderElems: [bi],
  elemsToHtml: [xi]
}, $i = (e) => {
  const { deleteBackward: t, deleteForward: n, insertBreak: s, apply: r, normalizeNode: l, insertText: a } = e, i = e;
  return i.deleteBackward = (c) => {
    t(c);
  }, i.deleteForward = (c) => {
    n(c);
  }, i.insertBreak = () => {
    s();
  }, i.normalizeNode = (c) => {
    l(c);
  }, i.apply = (c) => {
    r(c);
  }, i.insertText = (c) => {
    a(c);
  }, i;
};
function Ei(e) {
  return e.replaceAll(/[&]/gi, "&amp;").replaceAll(/[<]/gi, "&lt;").replaceAll(/[>]/gi, "&gt;");
}
function ki(e, t) {
  return t ? `<audio src="${e.src}">${t}</audio>` : `<audio src="${e.src}"/>`;
}
function Si(e) {
  return e.time ? `<break time="${e.time}"/>` : e.strength ? `<break strength="${e.strength}"/>` : "<break/>";
}
function Ci(e, t) {
  return e.level ? `<emphasis level="${e.level}">${t}</emphasis>` : `<emphasis>${t}</emphasis>`;
}
function Oi(e, t) {
  const n = e.role ? ` role="${e.role}"` : "", s = e.styledegree ? ` styledegree="${e.styledegree}"` : "";
  return `<mstts:express-as style="${e.style}"${n}${s}>${t}</mstts:express-as>`;
}
function Ri(e, t) {
  return `<p>${t}</p>`;
}
function Ti(e, t) {
  const n = e.alphabet ? `alphabet="${e.alphabet}"` : "";
  return `<phoneme ph="${e.ph}"${n}>${t}</phoneme>`;
}
function Ii(e, t) {
  const n = e.contour ? ` contour="${e.contour}"` : "", s = e.pitch ? ` pitch="${e.pitch}"` : "", r = e.range ? ` range="${e.range}"` : "", l = e.volume ? ` volume="${e.volume}"` : "", a = e.rate ? ` rate="${e.rate}"` : "";
  return `<prosody${n}${s}${r}${l}${a}>${t}</prosody>`;
}
function Pi(e, t) {
  const n = e.interpretAs ? ` interpretAs="${e.interpretAs}"` : "", s = e.format ? ` format="${e.format}"` : "", r = e.detail ? ` detail="${e.detail}"` : "";
  return `<say-as${n}${s}${r}>${t}</say-as>`;
}
function Vi(e, t) {
  return `<s>${t}</s>`;
}
function Mi(e, t) {
  return `<w>${t}</w>`;
}
function Li(e, t) {
  return `<sub alias=${e.alias}>${t}</sub>`;
}
function zn(e, t) {
  const n = e.effect ? ` effect="${e.effect}"` : "";
  return `<vocie name="${e.name}${n}">${t}</vocie>`;
}
function Di(e, t) {
  return `<speak version="${e.version}" xml:lang="${e.xmlLang}" xmlns="${e.xmlns}">${t}</speak>`;
}
function Hn(e) {
  if (ns.isText(e))
    return Ei(e.text);
  if (ss.isElement(e)) {
    const t = e.children.map((s) => Hn(s)).join("");
    switch (V.getNodeType(e)) {
      case "paragraph":
        return `<p>${t}</p>`;
      case "ssml-audio":
        return ki(e, t);
      case "ssml-break":
        return Si(e);
      case "ssml-emphasis":
        return Ci(e, t);
      case "ssml-mstts:express-as":
        return Oi(e, t);
      case "ssml-p":
        return Ri(e, t);
      case "ssml-phoneme":
        return Ti(e, t);
      case "ssml-prosody":
        return Ii(e, t);
      case "ssml-s":
        return Vi(e, t);
      case "ssml-w":
        return Mi(e, t);
      case "ssml-say-as":
        return Pi(e, t);
      case "ssml-sub":
        return Li(e, t);
      case "ssml-voice":
        return zn(e, t);
      default:
        return t;
    }
  }
  return "";
}
function Ni(e) {
  const t = {
    type: "ssml-speak",
    version: "1.0",
    xmlLang: "zh-CN",
    xmlns: "http://www.w3.org/2001/10/synthesis"
  }, n = {
    type: "ssml-voice",
    name: "XiaoXiao-晓晓",
    remark: "默认语音",
    children: []
  }, s = e.map((r) => Hn(r)).join("");
  return Di(t, zn(n, s));
}
const Ai = {
  install() {
    K.registerModule(Pa), K.registerModule(Da), K.registerModule(Ba), K.registerModule(Ua), K.registerModule(Xa), K.registerModule(Za), K.registerModule(ni), K.registerModule(oi), K.registerModule(ci), K.registerModule(vi), K.registerModule(yi), K.registerModule(wi), K.registerPlugin($i);
  }
}, ye = (e) => (ke("data-v-fdde579b"), e = e(), Se(), e), Fi = { class: "editor-title d-flex flex-row align-item-center justify-content-between" }, Bi = { class: "title-wrapper d-flex flex-column justify-content-center ps-3" }, ji = /* @__PURE__ */ ye(() => /* @__PURE__ */ d("div", { class: "title-author pb-1" }, "SSML编辑器", -1)), zi = { class: "author d-flex flex-row align-items-center justify-content-start" }, Hi = /* @__PURE__ */ ye(() => /* @__PURE__ */ d("div", null, "已保存", -1)), Ui = /* @__PURE__ */ ye(() => /* @__PURE__ */ d("div", null, "|", -1)), Wi = /* @__PURE__ */ ye(() => /* @__PURE__ */ d("span", { class: "iconfont icon-play font-size-12 p-1" }, null, -1)), Gi = /* @__PURE__ */ ye(() => /* @__PURE__ */ d("div", { class: "d-inline-block" }, null, -1)), qi = { class: "operation-wrapper d-flex flex-row justify-content-center align-items-center" }, Xi = /* @__PURE__ */ ye(() => /* @__PURE__ */ d("div", { class: "menu-divider" }, null, -1)), Yi = /* @__PURE__ */ ye(() => /* @__PURE__ */ d("div", { class: "px-1" }, null, -1)), Ki = { class: "ssml-code" }, Qi = { class: "dialog-footer" }, Zi = /* @__PURE__ */ M({
  __name: "editor-title",
  props: {
    characterTotal: {},
    characterMax: {},
    bgm: {}
  },
  setup(e) {
    const t = pe(ae.EDITOR), n = y(!1), s = y(""), r = Z(() => ca(s.value, {
      indentation: "    ",
      filter: (i) => i.type !== "Comment",
      collapseContent: !1,
      lineSeparator: `
`
    })), l = () => {
      t && (s.value = Ni(t.value.children), n.value = !0);
    }, a = () => {
      t == null || t.value.emit(Ne.REMOVE_BGM);
    };
    return (i, c) => (I(), D(le, null, [
      d("div", Fi, [
        d("div", Bi, [
          ji,
          d("div", zi, [
            Hi,
            Ui,
            d("div", null, j(i.characterTotal) + "/" + j(i.characterMax) + "字", 1),
            i.bgm ? (I(), Y(b(ce), {
              key: 0,
              class: "bgm-txt ms-2",
              closable: "",
              size: "small",
              onClick: c[0] || (c[0] = () => i.bgm && i.bgm.value && b(An)(i.bgm.value)),
              onClose: a
            }, {
              default: v(() => [
                Wi,
                Gi,
                d("span", null, j(i.bgm.label), 1)
              ]),
              _: 1
            })) : un("", !0)
          ])
        ]),
        d("div", qi, [
          o(b(re), {
            type: "primary",
            icon: b(ds),
            disabled: ""
          }, {
            default: v(() => [
              E("分享")
            ]),
            _: 1
          }, 8, ["icon"]),
          Xi,
          o(b(re), {
            type: "primary",
            onClick: l
          }, {
            default: v(() => [
              E("查看SSML")
            ]),
            _: 1
          }),
          o(b(re), { disabled: "" }, {
            default: v(() => [
              E("下载音频")
            ]),
            _: 1
          }),
          o(b(re), { disabled: "" }, {
            default: v(() => [
              E("下载视频")
            ]),
            _: 1
          }),
          o(b(re), { disabled: "" }, {
            default: v(() => [
              E("下载字幕")
            ]),
            _: 1
          }),
          o(b(re), { disabled: "" }, {
            default: v(() => [
              E("声音转换")
            ]),
            _: 1
          }),
          Yi
        ])
      ]),
      o(b(os), {
        modelValue: n.value,
        "onUpdate:modelValue": c[2] || (c[2] = (m) => n.value = m),
        title: "查看SSML",
        width: "50%"
      }, {
        footer: v(() => [
          d("span", Qi, [
            o(b(re), {
              type: "primary",
              onClick: c[1] || (c[1] = (m) => n.value = !1)
            }, {
              default: v(() => [
                E("确定")
              ]),
              _: 1
            })
          ])
        ]),
        default: v(() => [
          d("pre", Ki, j(r.value), 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
});
const Ji = /* @__PURE__ */ X(Zi, [["__scopeId", "data-v-fdde579b"]]);
const eu = /* @__PURE__ */ M({
  __name: "editor-core",
  props: {
    editorConfig: {}
  },
  emits: ["created", "change"],
  setup(e, { emit: t }) {
    const n = e, s = y(null);
    Ee(() => {
      r();
    });
    const r = () => {
      s.value && rs({
        selector: s.value,
        mode: "simple",
        content: [],
        config: {
          ...dt(n.editorConfig),
          onCreated(l) {
            t("created", l), l.focus(!0);
            const a = l.getConfig();
            a.hoverbarKeys = void 0;
          },
          onChange(l) {
            t("change", l), l.children;
          }
        }
      });
    };
    return (l, a) => (I(), D("div", {
      ref_key: "boxRef",
      ref: s,
      class: "edit-core",
      style: { height: "70vh", "overflow-y": "hidden" }
    }, null, 512));
  }
}), tu = { class: "bar-view border-bottom border-1" }, nu = /* @__PURE__ */ M({
  __name: "bar-view",
  setup(e) {
    return (t, n) => (I(), D(le, null, [
      d("div", tu, [
        o(b(hn), null, {
          default: v(() => [
            o(b(ge), { divider: "green" }, {
              default: v(() => [
                o(b(q), {
                  text: "24K高清音质",
                  icon: "play",
                  disabled: ""
                })
              ]),
              _: 1
            }),
            o(b(ge), { divider: "cyan" }, {
              default: v(() => [
                o(b(xn)),
                o(b($n)),
                o(b(En)),
                o(b(wn)),
                o(b(kn)),
                o(b(Sn))
              ]),
              _: 1
            }),
            o(b(ge), { divider: "orange" }, {
              default: v(() => [
                o(b(Cn)),
                o(b(Vn)),
                o(b(Mn))
              ]),
              _: 1
            }),
            o(b(ge), { divider: "purple" }, {
              default: v(() => [
                o(b(On)),
                o(b(Tn))
              ]),
              _: 1
            }),
            o(b(ge), { divider: "yellow" }, {
              default: v(() => [
                o(b(Rn)),
                o(b(In))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      o(b(Fn))
    ], 64));
  }
}), su = { class: "editor-view" }, ru = { class: "editor-box" }, lu = { class: "editor-core-container shadow pt-1" }, ou = /* @__PURE__ */ M({
  __name: "editor-view",
  emits: ["onCreated", "onChange"],
  setup(e, { emit: t }) {
    const n = y(0), s = G(), r = y(null);
    ts(ae.EDITOR, s);
    const l = { maxLength: 5e3, placeholder: "请输入内容..." };
    pt(() => {
      var c;
      (c = s.value) == null || c.destroy();
    });
    const a = (c) => {
      s.value = c, t("onCreated", c), c.on(Ne.UPDATE_BGM, (m) => {
        r.value = m;
      }), c.on(Ne.REMOVE_BGM, () => {
        r.value = null;
      });
    }, i = (c) => {
      n.value = (l.maxLength || 0) - V.getLeftLengthOfMaxLength(c), t("onChange", c);
    };
    return (c, m) => (I(), D("div", su, [
      o(Ji, {
        bgm: r.value,
        "character-total": n.value,
        "character-max": l.maxLength || 0
      }, null, 8, ["bgm", "character-total", "character-max"]),
      d("div", ru, [
        o(nu),
        d("div", lu, [
          o(eu, {
            "editor-config": l,
            onChange: i,
            onCreated: a
          })
        ])
      ])
    ]));
  }
});
const au = /* @__PURE__ */ X(ou, [["__scopeId", "data-v-860a12c5"]]), iu = {
  install(e) {
    e.component("EditorView", au);
  }
};
const vu = {
  install(e, t) {
    const n = Co(e.provide, t);
    H.on(z.ERROR, n.handleError), e.use(Ai), e.use(fr), e.use(aa), e.use(iu);
  }
};
export {
  z as EMITTER_EVENT,
  ae as PROVIDER_KEY,
  Ne as WANGEDITOR_EVENT,
  So as createGlobalEditorConfig,
  vu as default,
  Oo as injectGlobalConfig,
  Co as provideGlobalConfig
};

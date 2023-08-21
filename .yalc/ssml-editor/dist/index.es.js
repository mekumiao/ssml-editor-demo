var Mn = Object.defineProperty;
var In = (t, e, n) => e in t ? Mn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Se = (t, e, n) => (In(t, typeof e != "symbol" ? e + "" : e, n), n);
import { defineComponent as T, inject as Y, openBlock as I, createElementBlock as R, normalizeClass as Be, withModifiers as U, createElementVNode as E, toDisplayString as Z, ref as w, createBlock as V, unref as y, withCtx as D, createVNode as v, renderSlot as ue, isRef as Tn, toRefs as Pn, customRef as Ln, getCurrentInstance as Ft, onMounted as N, nextTick as An, getCurrentScope as Bn, onScopeDispose as Vn, computed as q, watch as ne, watchEffect as Nn, createTextVNode as X, Fragment as me, renderList as ke, pushScopeId as ze, popScopeId as He, Teleport as jt, normalizeStyle as Rt, onUnmounted as W, withDirectives as Fn, vShow as jn, shallowRef as re, createCommentVNode as Rn, toRaw as nt, provide as Wn } from "vue";
import { SlateEditor as B, SlateElement as zn, DomEditor as Ve, SlateText as Hn, SlateTransforms as L, SlatePath as Un, SlateRange as K, createEditor as qn } from "@wangeditor/editor";
import { ElForm as Wt, ElInput as zt, ElPopover as J, ElMenu as Kn, ElMenuItem as Ee, ElSelect as rt, ElOption as ot, ElTag as Xn, ElButton as se, ElDialog as Yn, ElMessage as Gn } from "element-plus";
import { Search as Qn, Share as Zn } from "@element-plus/icons-vue";
const Jn = { class: "bar-button-icon" }, er = {
  class: "fw-normal",
  style: { "font-size": "0.85rem" }
}, tr = /* @__PURE__ */ T({
  __name: "bar-button",
  props: {
    text: {},
    icon: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const n = t, r = Y("editor"), o = () => {
      !n.disabled && r && e("click", r == null ? void 0 : r.value);
    };
    return (i, s) => (I(), R("div", {
      class: Be(["bar-button px-2 py-1", { disabled: i.disabled }]),
      onClick: o,
      onMousedown: s[0] || (s[0] = U(() => {
      }, ["prevent"]))
    }, [
      E("div", Jn, [
        E("span", {
          class: Be(["fs-3 iconfont-moyin", [`moyin-icon_${i.icon}`]])
        }, null, 2)
      ]),
      E("div", er, Z(i.text), 1)
    ], 34));
  }
});
const oe = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, o] of e)
    n[r] = o;
  return n;
}, F = /* @__PURE__ */ oe(tr, [["__scopeId", "data-v-edb3cf59"]]);
const Ue = /* @__PURE__ */ T({
  __name: "bar-input",
  props: {
    type: {}
  },
  emits: ["submit"],
  setup(t, { expose: e, emit: n }) {
    const r = w(""), o = w();
    function i() {
      o.value.focus();
    }
    function s() {
      n("submit", r.value), r.value = "";
    }
    return e({
      focus: i
    }), (a, l) => (I(), V(y(Wt), {
      class: "flex flex-row",
      onSubmit: U(s, ["prevent"])
    }, {
      default: D(() => [
        v(y(zt), {
          type: a.type,
          ref_key: "inputRef",
          ref: o,
          modelValue: r.value,
          "onUpdate:modelValue": l[0] || (l[0] = (f) => r.value = f)
        }, null, 8, ["type", "modelValue"])
      ]),
      _: 1
    }, 8, ["onSubmit"]));
  }
});
const nr = /* @__PURE__ */ T({
  __name: "bar-popover",
  props: {
    visible: { type: Boolean },
    trigger: {},
    hideAfter: {},
    width: {}
  },
  emits: ["update:visible"],
  setup(t) {
    return (e, n) => (I(), V(y(J), {
      hideAfter: e.hideAfter,
      width: e.width,
      visible: e.visible,
      trigger: e.trigger,
      "onUpdate:visible": n[0] || (n[0] = (r) => e.$emit("update:visible", r))
    }, {
      reference: D(() => [
        ue(e.$slots, "reference")
      ]),
      default: D(() => [
        ue(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["hideAfter", "width", "visible", "trigger"]));
  }
});
function xe(t) {
  return Bn() ? (Vn(t), !0) : !1;
}
function z(t) {
  return typeof t == "function" ? t() : y(t);
}
const Ht = typeof window < "u", rr = (t) => t != null, ge = () => {
};
var or = Object.defineProperty, ir = Object.defineProperties, sr = Object.getOwnPropertyDescriptors, it = Object.getOwnPropertySymbols, lr = Object.prototype.hasOwnProperty, ar = Object.prototype.propertyIsEnumerable, st = (t, e, n) => e in t ? or(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, ur = (t, e) => {
  for (var n in e || (e = {}))
    lr.call(e, n) && st(t, n, e[n]);
  if (it)
    for (var n of it(e))
      ar.call(e, n) && st(t, n, e[n]);
  return t;
}, cr = (t, e) => ir(t, sr(e));
function fr(t, e = {}) {
  if (!Tn(t))
    return Pn(t);
  const n = Array.isArray(t.value) ? Array.from({ length: t.value.length }) : {};
  for (const r in t.value)
    n[r] = Ln(() => ({
      get() {
        return t.value[r];
      },
      set(o) {
        var i;
        if ((i = z(e.replaceRef)) != null ? i : !0)
          if (Array.isArray(t.value)) {
            const a = [...t.value];
            a[r] = o, t.value = a;
          } else {
            const a = cr(ur({}, t.value), { [r]: o });
            Object.setPrototypeOf(a, Object.getPrototypeOf(t.value)), t.value = a;
          }
        else
          t.value[r] = o;
      }
    }));
  return n;
}
function Ut(t, e = !0) {
  Ft() ? N(t) : e ? t() : An(t);
}
function H(t) {
  var e;
  const n = z(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const ie = Ht ? window : void 0;
function fe(...t) {
  let e, n, r, o;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, r, o] = t, e = ie) : [e, n, r, o] = t, !e)
    return ge;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const i = [], s = () => {
    i.forEach((u) => u()), i.length = 0;
  }, a = (u, d, p, x) => (u.addEventListener(d, p, x), () => u.removeEventListener(d, p, x)), l = ne(
    () => [H(e), z(o)],
    ([u, d]) => {
      s(), u && i.push(
        ...n.flatMap((p) => r.map((x) => a(u, p, x, d)))
      );
    },
    { immediate: !0, flush: "post" }
  ), f = () => {
    l(), s();
  };
  return xe(f), f;
}
function dr() {
  const t = w(!1);
  return Ft() && N(() => {
    t.value = !0;
  }), t;
}
function qe(t) {
  const e = dr();
  return q(() => (e.value, !!t()));
}
function pr(t, e = {}) {
  const { window: n = ie } = e, r = qe(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let o;
  const i = w(!1), s = (f) => {
    i.value = f.matches;
  }, a = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", s) : o.removeListener(s));
  }, l = Nn(() => {
    r.value && (a(), o = n.matchMedia(z(t)), "addEventListener" in o ? o.addEventListener("change", s) : o.addListener(s), i.value = o.matches);
  });
  return xe(() => {
    l(), a(), o = void 0;
  }), i;
}
var mr = Object.defineProperty, vr = Object.defineProperties, hr = Object.getOwnPropertyDescriptors, lt = Object.getOwnPropertySymbols, gr = Object.prototype.hasOwnProperty, br = Object.prototype.propertyIsEnumerable, at = (t, e, n) => e in t ? mr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, yr = (t, e) => {
  for (var n in e || (e = {}))
    gr.call(e, n) && at(t, n, e[n]);
  if (lt)
    for (var n of lt(e))
      br.call(e, n) && at(t, n, e[n]);
  return t;
}, _r = (t, e) => vr(t, hr(e));
function qt(t, e = {}) {
  var n, r;
  const {
    pointerTypes: o,
    preventDefault: i,
    stopPropagation: s,
    exact: a,
    onMove: l,
    onEnd: f,
    onStart: u,
    initialValue: d,
    axis: p = "both",
    draggingElement: x = ie,
    handle: m = t
  } = e, c = w(
    (n = z(d)) != null ? n : { x: 0, y: 0 }
  ), g = w(), $ = (b) => o ? o.includes(b.pointerType) : !0, k = (b) => {
    z(i) && b.preventDefault(), z(s) && b.stopPropagation();
  }, h = (b) => {
    if (!$(b) || z(a) && b.target !== z(t))
      return;
    const C = z(t).getBoundingClientRect(), A = {
      x: b.clientX - C.left,
      y: b.clientY - C.top
    };
    (u == null ? void 0 : u(A, b)) !== !1 && (g.value = A, k(b));
  }, _ = (b) => {
    if (!$(b) || !g.value)
      return;
    let { x: C, y: A } = c.value;
    (p === "x" || p === "both") && (C = b.clientX - g.value.x), (p === "y" || p === "both") && (A = b.clientY - g.value.y), c.value = {
      x: C,
      y: A
    }, l == null || l(c.value, b), k(b);
  }, S = (b) => {
    $(b) && g.value && (g.value = void 0, f == null || f(c.value, b), k(b));
  };
  if (Ht) {
    const b = { capture: (r = e.capture) != null ? r : !0 };
    fe(m, "pointerdown", h, b), fe(x, "pointermove", _, b), fe(x, "pointerup", S, b);
  }
  return _r(yr({}, fr(c)), {
    position: c,
    isDragging: q(() => !!g.value),
    style: q(
      () => `left:${c.value.x}px;top:${c.value.y}px;`
    )
  });
}
var ut = Object.getOwnPropertySymbols, wr = Object.prototype.hasOwnProperty, xr = Object.prototype.propertyIsEnumerable, $r = (t, e) => {
  var n = {};
  for (var r in t)
    wr.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && ut)
    for (var r of ut(t))
      e.indexOf(r) < 0 && xr.call(t, r) && (n[r] = t[r]);
  return n;
};
function Kt(t, e, n = {}) {
  const r = n, { window: o = ie } = r, i = $r(r, ["window"]);
  let s;
  const a = qe(() => o && "ResizeObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, f = q(
    () => Array.isArray(t) ? t.map((p) => H(p)) : [H(t)]
  ), u = ne(
    f,
    (p) => {
      if (l(), a.value && o) {
        s = new ResizeObserver(e);
        for (const x of p)
          x && s.observe(x, i);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), d = () => {
    l(), u();
  };
  return xe(d), {
    isSupported: a,
    stop: d
  };
}
function he(t, e = {}) {
  const {
    reset: n = !0,
    windowResize: r = !0,
    windowScroll: o = !0,
    immediate: i = !0
  } = e, s = w(0), a = w(0), l = w(0), f = w(0), u = w(0), d = w(0), p = w(0), x = w(0);
  function m() {
    const c = H(t);
    if (!c) {
      n && (s.value = 0, a.value = 0, l.value = 0, f.value = 0, u.value = 0, d.value = 0, p.value = 0, x.value = 0);
      return;
    }
    const g = c.getBoundingClientRect();
    s.value = g.height, a.value = g.bottom, l.value = g.left, f.value = g.right, u.value = g.top, d.value = g.width, p.value = g.x, x.value = g.y;
  }
  return Kt(t, m), ne(() => H(t), (c) => !c && m()), o && fe("scroll", m, { capture: !0, passive: !0 }), r && fe("resize", m, { passive: !0 }), Ut(() => {
    i && m();
  }), {
    height: s,
    bottom: a,
    left: l,
    right: f,
    top: u,
    width: d,
    x: p,
    y: x,
    update: m
  };
}
function Xt(t, e = { width: 0, height: 0 }, n = {}) {
  const { window: r = ie, box: o = "content-box" } = n, i = q(() => {
    var l, f;
    return (f = (l = H(t)) == null ? void 0 : l.namespaceURI) == null ? void 0 : f.includes("svg");
  }), s = w(e.width), a = w(e.height);
  return Kt(
    t,
    ([l]) => {
      const f = o === "border-box" ? l.borderBoxSize : o === "content-box" ? l.contentBoxSize : l.devicePixelContentBoxSize;
      if (r && i.value) {
        const u = H(t);
        if (u) {
          const d = r.getComputedStyle(u);
          s.value = Number.parseFloat(d.width), a.value = Number.parseFloat(d.height);
        }
      } else if (f) {
        const u = Array.isArray(f) ? f : [f];
        s.value = u.reduce((d, { inlineSize: p }) => d + p, 0), a.value = u.reduce((d, { blockSize: p }) => d + p, 0);
      } else
        s.value = l.contentRect.width, a.value = l.contentRect.height;
    },
    n
  ), ne(
    () => H(t),
    (l) => {
      s.value = l ? e.width : 0, a.value = l ? e.height : 0;
    }
  ), {
    width: s,
    height: a
  };
}
function Sr(t, e, n = {}) {
  const {
    root: r,
    rootMargin: o = "0px",
    threshold: i = 0.1,
    window: s = ie,
    immediate: a = !0
  } = n, l = qe(() => s && "IntersectionObserver" in s), f = q(() => {
    const m = z(t);
    return (Array.isArray(m) ? m : [m]).map(H).filter(rr);
  });
  let u = ge;
  const d = w(a), p = l.value ? ne(
    () => [f.value, H(r), d.value],
    ([m, c]) => {
      if (u(), !d.value || !m.length)
        return;
      const g = new IntersectionObserver(
        e,
        {
          root: H(c),
          rootMargin: o,
          threshold: i
        }
      );
      m.forEach(($) => $ && g.observe($)), u = () => {
        g.disconnect(), u = ge;
      };
    },
    { immediate: a, flush: "post" }
  ) : ge, x = () => {
    u(), p(), d.value = !1;
  };
  return xe(x), {
    isSupported: l,
    isActive: d,
    pause() {
      u(), d.value = !1;
    },
    resume() {
      d.value = !0;
    },
    stop: x
  };
}
function kr(t, { window: e = ie, scrollTarget: n } = {}) {
  const r = w(!1);
  return Sr(
    t,
    ([{ isIntersecting: o }]) => {
      r.value = o;
    },
    {
      root: n,
      window: e
    }
  ), r;
}
function Yt(t = {}) {
  const {
    window: e = ie,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: r = Number.POSITIVE_INFINITY,
    listenOrientation: o = !0,
    includeScrollbar: i = !0
  } = t, s = w(n), a = w(r), l = () => {
    e && (i ? (s.value = e.innerWidth, a.value = e.innerHeight) : (s.value = e.document.documentElement.clientWidth, a.value = e.document.documentElement.clientHeight));
  };
  if (l(), Ut(l), fe("resize", l, { passive: !0 }), o) {
    const f = pr("(orientation: portrait)");
    ne(f, () => l());
  }
  return { width: s, height: a };
}
const Ke = (t) => (ze("data-v-2f9c7bc6"), t = t(), He(), t), Er = { class: "search-content vh-50 user-select-none" }, Cr = { class: "ps-2 w-75" }, Or = { class: "menu" }, Dr = /* @__PURE__ */ Ke(() => /* @__PURE__ */ E("div", { class: "h h-1" }, null, -1)), Mr = { class: "flex flex-row" }, Ir = /* @__PURE__ */ Ke(() => /* @__PURE__ */ E("div", { class: "h-" }, null, -1)), Tr = { class: "content-list w-90" }, Pr = ["onClick"], Lr = /* @__PURE__ */ Ke(() => /* @__PURE__ */ E("span", { class: "iconfont icon-play" }, null, -1)), Ar = /* @__PURE__ */ T({
  __name: "bar-search",
  props: {
    menuItemLabel: {},
    scenes: {},
    styles: {},
    dataList: {},
    fetch: { type: Function }
  },
  emits: ["submit"],
  setup(t, { emit: e }) {
    const n = t, r = w(), o = w(""), i = w(""), s = w(""), a = w(n.dataList || []), l = w("first"), f = kr(r);
    ne(f, (x) => {
      x && setTimeout(() => {
        var m;
        (m = r.value) == null || m.focus();
      }, 100);
    }), N(async () => {
      await u();
    });
    async function u() {
      a.value = await n.fetch({
        search: o.value,
        menuKey: l.value,
        scene: i.value,
        style: s.value
      });
    }
    function d(x) {
      l.value = x, u();
    }
    function p(x) {
      e("submit", x);
    }
    return (x, m) => (I(), R("div", Er, [
      E("div", Cr, [
        v(y(Wt), {
          onSubmit: U(u, ["prevent"])
        }, {
          default: D(() => [
            v(y(zt), {
              ref_key: "searchInputRef",
              ref: r,
              placeholder: "搜索",
              modelValue: o.value,
              "onUpdate:modelValue": m[0] || (m[0] = (c) => o.value = c),
              "suffix-icon": y(Qn)
            }, null, 8, ["modelValue", "suffix-icon"])
          ]),
          _: 1
        }, 8, ["onSubmit"])
      ]),
      E("div", Or, [
        v(y(Kn), {
          mode: "horizontal",
          "default-active": "first",
          onSelect: m[1] || (m[1] = (c) => d(c))
        }, {
          default: D(() => [
            v(y(Ee), { index: "first" }, {
              default: D(() => [
                X(Z(x.menuItemLabel.first), 1)
              ]),
              _: 1
            }),
            v(y(Ee), { index: "second" }, {
              default: D(() => [
                X(Z(x.menuItemLabel.second), 1)
              ]),
              _: 1
            }),
            v(y(Ee), { index: "last" }, {
              default: D(() => [
                X(Z(x.menuItemLabel.last), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      Dr,
      E("div", Mr, [
        v(y(rt), {
          modelValue: i.value,
          "onUpdate:modelValue": m[2] || (m[2] = (c) => i.value = c),
          onChange: u,
          class: "m m-2",
          size: "large"
        }, {
          default: D(() => [
            (I(!0), R(me, null, ke(x.scenes, (c) => (I(), V(y(ot), {
              key: c.value,
              label: c.label,
              value: c.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        v(y(rt), {
          modelValue: s.value,
          "onUpdate:modelValue": m[3] || (m[3] = (c) => s.value = c),
          onChange: u,
          class: "m m-2",
          size: "large"
        }, {
          default: D(() => [
            (I(!0), R(me, null, ke(x.styles, (c) => (I(), V(y(ot), {
              key: c.value,
              label: c.label,
              value: c.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      Ir,
      E("div", Tr, [
        (I(!0), R(me, null, ke(a.value, (c, g) => (I(), R("div", {
          onClick: ($) => p(c),
          class: "content-list-item clickable ps-3",
          key: g
        }, [
          Lr,
          E("span", null, Z(c.label), 1)
        ], 8, Pr))), 128))
      ])
    ]));
  }
});
const de = /* @__PURE__ */ oe(Ar, [["__scopeId", "data-v-2f9c7bc6"]]), Br = /* @__PURE__ */ E("div", { class: "w-100 text-end me-2" }, [
  /* @__PURE__ */ E("span", { class: "btn iconfont icon-close fs-5" })
], -1), Gt = /* @__PURE__ */ T({
  __name: "fixed-panel",
  setup(t) {
    const e = w(), { x: n, y: r } = qt(e, {
      initialValue: { x: 40, y: 40 }
    }), { width: o, height: i } = Xt(e), { width: s, height: a } = Yt(), l = q(() => ({
      x: s.value - o.value,
      y: a.value - i.value
    })), f = q(() => {
      if (!l.value)
        return u(n.value, r.value);
      const d = n.value < 5 ? 5 : n.value > l.value.x ? l.value.x - 5 : n.value, p = r.value < 5 ? 5 : r.value > l.value.y ? l.value.y - 5 : r.value;
      return u(d, p);
    });
    function u(d, p) {
      return `left:${d}px;top:${p}px`;
    }
    return (d, p) => (I(), V(jt, { to: "body" }, [
      E("div", {
        ref_key: "boxRef",
        ref: e,
        class: "card shadow brag-box z-3",
        style: Rt([{ position: "fixed" }, f.value])
      }, [
        Br,
        ue(d.$slots, "default")
      ], 4)
    ]));
  }
});
const Vr = {}, Nr = { class: "content" };
function Fr(t, e) {
  return I(), R("div", Nr, [
    ue(t.$slots, "default", {}, void 0, !0)
  ]);
}
const Qt = /* @__PURE__ */ oe(Vr, [["render", Fr], ["__scopeId", "data-v-7beae5b9"]]), jr = {}, Rr = { class: "bar-wrapper-item" };
function Wr(t, e) {
  return I(), R("div", Rr, [
    ue(t.$slots, "default")
  ]);
}
const zr = /* @__PURE__ */ oe(jr, [["render", Wr]]), Hr = { class: "bar-wrapper-group" }, Ur = { class: "group-items" }, qr = /* @__PURE__ */ T({
  __name: "bar-wrapper-group",
  props: {
    divider: {}
  },
  setup(t) {
    return (e, n) => (I(), R("div", Hr, [
      E("div", Ur, [
        ue(e.$slots, "default", {}, void 0, !0)
      ]),
      E("div", {
        class: Be(["divider", [e.divider]])
      }, null, 2)
    ]));
  }
});
const le = /* @__PURE__ */ oe(qr, [["__scopeId", "data-v-3a7abad9"]]), Kr = /* @__PURE__ */ T({
  __name: "drag-box",
  props: {
    visible: { type: Boolean },
    position: {}
  },
  emits: ["update:visible", "update:position"],
  setup(t, { emit: e }) {
    const n = t, r = w(), { x: o, y: i } = qt(r, {
      initialValue: n.position
    }), { width: s, height: a } = Xt(r), { width: l, height: f } = Yt();
    ne([o, i], ([g, $]) => {
      e("update:position", { x: g, y: $ });
    });
    const u = q(() => ({
      x: l.value - s.value,
      y: f.value - a.value
    })), d = q(() => {
      const { x: g, y: $ } = n.position;
      if (!u.value)
        return c(g, $);
      const k = g < 5 ? 5 : g > u.value.x ? u.value.x - 5 : g, h = $ < 5 ? 5 : $ > u.value.y ? u.value.y - 5 : $;
      return c(k, h);
    });
    N(() => {
      window.addEventListener("keydown", m);
    }), W(() => {
      window.addEventListener("keydown", m);
    });
    function p() {
      e("update:visible", !1);
    }
    function x(g) {
      const $ = g.target;
      r.value && !r.value.contains($) && n.visible && e("update:visible", !1);
    }
    function m(g) {
      g.code === "Escape" && n.visible && p();
    }
    function c(g, $) {
      return `left:${g}px;top:${$}px`;
    }
    return (g, $) => (I(), V(jt, { to: "body" }, [
      Fn(E("div", {
        class: "drag-box-mask",
        onClick: x
      }, [
        E("div", {
          ref_key: "boxRef",
          ref: r,
          class: "card shadow brag-box",
          style: Rt([{ position: "fixed" }, d.value])
        }, [
          E("div", { class: "w-100 text-end me-2" }, [
            E("span", {
              onClick: p,
              class: "btn iconfont icon-close fs-5"
            })
          ]),
          ue(g.$slots, "default", {}, void 0, !0)
        ], 4)
      ], 512), [
        [jn, g.visible]
      ])
    ]));
  }
});
const pe = /* @__PURE__ */ oe(Kr, [["__scopeId", "data-v-0f200676"]]), Xr = {
  install(t) {
    t.component("BarButton", F), t.component("BarInput", Ue), t.component("BarPopover", nr), t.component("BarSearch", de), t.component("FixedPanel", Gt), t.component("BarWrapper", Qt), t.component("BarWrapperItem", zr), t.component("BarWrapperGroup", le), t.component("DragBox", pe);
  }
};
let Yr = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
function G(t = "r") {
  return `${t}-${Yr()}`;
}
var ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Xe(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Zt = "Expected a function", ct = 0 / 0, Gr = "[object Symbol]", Qr = /^\s+|\s+$/g, Zr = /^[-+]0x[0-9a-f]+$/i, Jr = /^0b[01]+$/i, eo = /^0o[0-7]+$/i, to = parseInt, no = typeof ce == "object" && ce && ce.Object === Object && ce, ro = typeof self == "object" && self && self.Object === Object && self, oo = no || ro || Function("return this")(), io = Object.prototype, so = io.toString, lo = Math.max, ao = Math.min, Ce = function() {
  return oo.Date.now();
};
function uo(t, e, n) {
  var r, o, i, s, a, l, f = 0, u = !1, d = !1, p = !0;
  if (typeof t != "function")
    throw new TypeError(Zt);
  e = ft(e) || 0, _e(n) && (u = !!n.leading, d = "maxWait" in n, i = d ? lo(ft(n.maxWait) || 0, e) : i, p = "trailing" in n ? !!n.trailing : p);
  function x(b) {
    var C = r, A = o;
    return r = o = void 0, f = b, s = t.apply(A, C), s;
  }
  function m(b) {
    return f = b, a = setTimeout($, e), u ? x(b) : s;
  }
  function c(b) {
    var C = b - l, A = b - f, tt = e - C;
    return d ? ao(tt, i - A) : tt;
  }
  function g(b) {
    var C = b - l, A = b - f;
    return l === void 0 || C >= e || C < 0 || d && A >= i;
  }
  function $() {
    var b = Ce();
    if (g(b))
      return k(b);
    a = setTimeout($, c(b));
  }
  function k(b) {
    return a = void 0, p && r ? x(b) : (r = o = void 0, s);
  }
  function h() {
    a !== void 0 && clearTimeout(a), f = 0, r = l = o = a = void 0;
  }
  function _() {
    return a === void 0 ? s : k(Ce());
  }
  function S() {
    var b = Ce(), C = g(b);
    if (r = arguments, o = this, l = b, C) {
      if (a === void 0)
        return m(l);
      if (d)
        return a = setTimeout($, e), x(l);
    }
    return a === void 0 && (a = setTimeout($, e)), s;
  }
  return S.cancel = h, S.flush = _, S;
}
function co(t, e, n) {
  var r = !0, o = !0;
  if (typeof t != "function")
    throw new TypeError(Zt);
  return _e(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), uo(t, e, {
    leading: r,
    maxWait: e,
    trailing: o
  });
}
function _e(t) {
  var e = typeof t;
  return !!t && (e == "object" || e == "function");
}
function fo(t) {
  return !!t && typeof t == "object";
}
function po(t) {
  return typeof t == "symbol" || fo(t) && so.call(t) == Gr;
}
function ft(t) {
  if (typeof t == "number")
    return t;
  if (po(t))
    return ct;
  if (_e(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = _e(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = t.replace(Qr, "");
  var n = Jr.test(t);
  return n || eo.test(t) ? to(t.slice(2), n ? 2 : 8) : Zr.test(t) ? ct : +t;
}
var mo = co;
const vo = /* @__PURE__ */ Xe(mo);
function dt(t) {
  return t !== null && typeof t == "object" && "constructor" in t && t.constructor === Object;
}
function Ye(t, e) {
  t === void 0 && (t = {}), e === void 0 && (e = {}), Object.keys(e).forEach(function(n) {
    typeof t[n] > "u" ? t[n] = e[n] : dt(e[n]) && dt(t[n]) && Object.keys(e[n]).length > 0 && Ye(t[n], e[n]);
  });
}
var Jt = {
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
function Ge() {
  var t = typeof document < "u" ? document : {};
  return Ye(t, Jt), t;
}
var ho = {
  document: Jt,
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
function en() {
  var t = typeof window < "u" ? window : {};
  return Ye(t, ho), t;
}
function go(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
}
function Ne(t) {
  return Ne = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ne(t);
}
function we(t, e) {
  return we = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, we(t, e);
}
function bo() {
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
function be(t, e, n) {
  return bo() ? be = Reflect.construct : be = function(o, i, s) {
    var a = [null];
    a.push.apply(a, i);
    var l = Function.bind.apply(o, a), f = new l();
    return s && we(f, s.prototype), f;
  }, be.apply(null, arguments);
}
function yo(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function Fe(t) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Fe = function(r) {
    if (r === null || !yo(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(r))
        return e.get(r);
      e.set(r, o);
    }
    function o() {
      return be(r, arguments, Ne(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), we(o, r);
  }, Fe(t);
}
function _o(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function wo(t) {
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
var ae = /* @__PURE__ */ function(t) {
  go(e, t);
  function e(n) {
    var r;
    return r = t.call.apply(t, [this].concat(n)) || this, wo(_o(r)), r;
  }
  return e;
}(/* @__PURE__ */ Fe(Array));
function Qe(t) {
  t === void 0 && (t = []);
  var e = [];
  return t.forEach(function(n) {
    Array.isArray(n) ? e.push.apply(e, Qe(n)) : e.push(n);
  }), e;
}
function xo(t) {
  for (var e = [], n = 0; n < t.length; n += 1)
    e.indexOf(t[n]) === -1 && e.push(t[n]);
  return e;
}
function $o(t) {
  return t.toLowerCase().replace(/-(.)/g, function(e, n) {
    return n.toUpperCase();
  });
}
function So(t, e) {
  if (typeof t != "string")
    return [t];
  for (var n = [], r = e.querySelectorAll(t), o = 0; o < r.length; o += 1)
    n.push(r[o]);
  return n;
}
function M(t, e) {
  var n = en(), r = Ge(), o = [];
  if (!e && t instanceof ae)
    return t;
  if (!t)
    return new ae(o);
  if (typeof t == "string") {
    var i = t.trim();
    if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
      var s = "div";
      i.indexOf("<li") === 0 && (s = "ul"), i.indexOf("<tr") === 0 && (s = "tbody"), (i.indexOf("<td") === 0 || i.indexOf("<th") === 0) && (s = "tr"), i.indexOf("<tbody") === 0 && (s = "table"), i.indexOf("<option") === 0 && (s = "select");
      var a = r.createElement(s);
      a.innerHTML = i;
      for (var l = 0; l < a.childNodes.length; l += 1)
        o.push(a.childNodes[l]);
    } else
      o = So(t.trim(), e || r);
  } else if (t.nodeType || t === n || t === r)
    o.push(t);
  else if (Array.isArray(t)) {
    if (t instanceof ae)
      return t;
    o = t;
  }
  return new ae(xo(o));
}
M.fn = ae.prototype;
function pt() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  var r = Qe(e.map(function(o) {
    return o.split(" ");
  }));
  return this.forEach(function(o) {
    var i;
    (i = o.classList).add.apply(i, r);
  }), this;
}
function mt() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  var r = Qe(e.map(function(o) {
    return o.split(" ");
  }));
  return this.forEach(function(o) {
    var i;
    (i = o.classList).remove.apply(i, r);
  }), this;
}
function vt(t, e) {
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
function ht() {
  var t = this[0];
  if (t) {
    var e = {};
    if (t.dataset)
      for (var n in t.dataset)
        e[n] = t.dataset[n];
    else
      for (var r = 0; r < t.attributes.length; r += 1) {
        var o = t.attributes[r];
        o.name.indexOf("data-") >= 0 && (e[$o(o.name.split("data-")[1])] = o.value);
      }
    for (var i in e)
      e[i] === "false" ? e[i] = !1 : e[i] === "true" ? e[i] = !0 : parseFloat(e[i]) === e[i] * 1 && (e[i] *= 1);
    return e;
  }
}
function gt(t) {
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
  for (var o = 0; o < this.length; o += 1) {
    var i = this[o];
    if (Array.isArray(t) && i.multiple && i.nodeName.toLowerCase() === "select")
      for (var s = 0; s < i.options.length; s += 1)
        i.options[s].selected = t.indexOf(i.options[s].value) >= 0;
    else
      i.value = t;
  }
  return this;
}
function bt() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  var r = e[0], o = e[1], i = e[2], s = e[3];
  typeof e[1] == "function" && (r = e[0], i = e[1], s = e[2], o = void 0), s || (s = !1);
  function a(c) {
    var g = c.target;
    if (g) {
      var $ = c.target.dom7EventData || [];
      if ($.indexOf(c) < 0 && $.unshift(c), M(g).is(o))
        i.apply(g, $);
      else
        for (var k = M(g).parents(), h = 0; h < k.length; h += 1)
          M(k[h]).is(o) && i.apply(k[h], $);
    }
  }
  function l(c) {
    var g = c && c.target ? c.target.dom7EventData || [] : [];
    g.indexOf(c) < 0 && g.unshift(c), i.apply(this, g);
  }
  for (var f = r.split(" "), u, d = 0; d < this.length; d += 1) {
    var p = this[d];
    if (o)
      for (u = 0; u < f.length; u += 1) {
        var m = f[u];
        p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[m] || (p.dom7LiveListeners[m] = []), p.dom7LiveListeners[m].push({
          listener: i,
          proxyListener: a
        }), p.addEventListener(m, a, s);
      }
    else
      for (u = 0; u < f.length; u += 1) {
        var x = f[u];
        p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[x] || (p.dom7Listeners[x] = []), p.dom7Listeners[x].push({
          listener: i,
          proxyListener: l
        }), p.addEventListener(x, l, s);
      }
  }
  return this;
}
function yt() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  var r = e[0], o = e[1], i = e[2], s = e[3];
  typeof e[1] == "function" && (r = e[0], i = e[1], s = e[2], o = void 0), s || (s = !1);
  for (var a = r.split(" "), l = 0; l < a.length; l += 1)
    for (var f = a[l], u = 0; u < this.length; u += 1) {
      var d = this[u], p = void 0;
      if (!o && d.dom7Listeners ? p = d.dom7Listeners[f] : o && d.dom7LiveListeners && (p = d.dom7LiveListeners[f]), p && p.length)
        for (var x = p.length - 1; x >= 0; x -= 1) {
          var m = p[x];
          i && m.listener === i || i && m.listener && m.listener.dom7proxy && m.listener.dom7proxy === i ? (d.removeEventListener(f, m.proxyListener, s), p.splice(x, 1)) : i || (d.removeEventListener(f, m.proxyListener, s), p.splice(x, 1));
        }
    }
  return this;
}
function _t() {
  for (var t = 0; t < this.length; t += 1)
    this[t].style.display = "none";
  return this;
}
function wt(t) {
  return t ? (this.forEach(function(e, n) {
    t.apply(e, [e, n]);
  }), this) : this;
}
function xt(t) {
  if (typeof t > "u")
    return this[0] ? this[0].innerHTML : null;
  for (var e = 0; e < this.length; e += 1)
    this[e].innerHTML = t;
  return this;
}
function $t(t) {
  var e = en(), n = Ge(), r = this[0], o, i;
  if (!r || typeof t > "u")
    return !1;
  if (typeof t == "string") {
    if (r.matches)
      return r.matches(t);
    if (r.webkitMatchesSelector)
      return r.webkitMatchesSelector(t);
    if (r.msMatchesSelector)
      return r.msMatchesSelector(t);
    for (o = M(t), i = 0; i < o.length; i += 1)
      if (o[i] === r)
        return !0;
    return !1;
  }
  if (t === n)
    return r === n;
  if (t === e)
    return r === e;
  if (t.nodeType || t instanceof ae) {
    for (o = t.nodeType ? [t] : t, i = 0; i < o.length; i += 1)
      if (o[i] === r)
        return !0;
    return !1;
  }
  return !1;
}
function St() {
  for (var t, e = Ge(), n = 0; n < arguments.length; n += 1) {
    t = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    for (var r = 0; r < this.length; r += 1)
      if (typeof t == "string") {
        var o = e.createElement("div");
        for (o.innerHTML = t; o.firstChild; )
          this[r].appendChild(o.firstChild);
      } else if (t instanceof ae)
        for (var i = 0; i < t.length; i += 1)
          this[r].appendChild(t[i]);
      else
        this[r].appendChild(t);
  }
  return this;
}
function kt(t) {
  for (var e = [], n = 0; n < this.length; n += 1)
    for (var r = this[n].parentNode; r; )
      t ? M(r).is(t) && e.push(r) : e.push(r), r = r.parentNode;
  return M(e);
}
function Et(t) {
  for (var e = [], n = 0; n < this.length; n += 1)
    for (var r = this[n].querySelectorAll(t), o = 0; o < r.length; o += 1)
      e.push(r[o]);
  return M(e);
}
function Ct(t) {
  for (var e = [], n = 0; n < this.length; n += 1)
    for (var r = this[n].children, o = 0; o < r.length; o += 1)
      (!t || M(r[o]).is(t)) && e.push(r[o]);
  return M(e);
}
var ko = "resize scroll".split(" ");
function tn(t) {
  function e() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    if (typeof r[0] > "u") {
      for (var i = 0; i < this.length; i += 1)
        ko.indexOf(t) < 0 && (t in this[i] ? this[i][t]() : M(this[i]).trigger(t));
      return this;
    }
    return this.on.apply(this, [t].concat(r));
  }
  return e;
}
var Ot = tn("click"), Dt = tn("focus");
_t && (M.fn.hide = _t);
St && (M.fn.append = St);
Ot && (M.fn.click = Ot);
bt && (M.fn.on = bt);
yt && (M.fn.off = yt);
Dt && (M.fn.focus = Dt);
vt && (M.fn.attr = vt);
gt && (M.fn.val = gt);
xt && (M.fn.html = xt);
ht && (M.fn.dataset = ht);
pt && (M.fn.addClass = pt);
mt && (M.fn.removeClass = mt);
Ct && (M.fn.children = Ct);
wt && (M.fn.each = wt);
Et && (M.fn.find = Et);
$t && (M.fn.is = $t);
kt && (M.fn.parents = kt);
const Hs = globalThis.Node, Us = globalThis.Comment, qs = globalThis.Element, Ks = globalThis.Text, Xs = globalThis.Range, Ys = globalThis.Selection, Gs = globalThis.StaticRange;
function nn(t, e, n, r, o) {
  M("body").on(
    "click",
    `#${r}-${e}`,
    vo((i) => {
      i.preventDefault();
      const s = Co(t, n, r);
      return s && o(s);
    })
  );
}
function Q(t, e, n, r) {
  return nn(t, "close", e, n, r);
}
function Eo(t, e, n, r) {
  return nn(t, "play", e, n, r);
}
function Co(t, e, n) {
  const [r] = B.nodes(t, {
    at: [],
    match: (o) => !zn.isElement(o) || !Ve.checkNodeType(o, e) ? !1 : o.domId === n
  });
  return r;
}
function $e(t, e, n) {
  const r = B.previous(t, {
    at: e[1],
    match: (o) => Hn.isText(o)
  });
  r != null && (L.insertText(t, n(e[0]), {
    at: B.end(t, r[1])
  }), L.delete(t, { at: Un.next(r[1]) }));
}
function Oo() {
  return G("w-e-dom-speaker");
}
let Do = class {
  getValue(e) {
    const {
      selection: n
    } = e;
    return n == null ? null : B.string(e, n);
  }
  isDisabled(e) {
    const {
      selection: n
    } = e;
    if (n == null || K.isCollapsed(n))
      return !0;
    const r = B.string(e, n);
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
    const o = this.getValue(e);
    if (o == null)
      return;
    const i = {
      type: "ssml-p",
      domId: Oo(),
      word: o,
      phoneme: n,
      remark: n,
      bgColor: "speaker",
      children: [{
        text: ""
      }]
    };
    L.delete(e), L.insertNodes(e, i), e.move(1), Q(e, "ssml-p", i.domId, (s) => {
      $e(e, s, (a) => a.word);
    });
  }
};
function Mo(t) {
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
const rn = /* @__PURE__ */ T({
  emits: ["error"],
  props: ["fetch"],
  setup(t, {
    emit: e
  }) {
    const n = new Do(), r = Y("editor"), o = w([]), i = w(!1);
    function s() {
      i.value || (i.value = !0);
    }
    function a() {
      i.value && (i.value = !1);
    }
    async function l(f) {
      const u = n.getValue(f);
      if (u ? o.value = await (t.fetch || Mo)(u) : o.value = [], n.isDisabled(f))
        return e("error", "选中一个中文字符，并且有不能在其他语句之内");
      if (o.value.length == 0)
        return e("error", "选中的字符没有不是多音字");
      s();
    }
    return () => v(J, {
      visible: i.value,
      "onUpdate:visible": (f) => i.value = f,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => v(F, {
        text: "多音字",
        icon: "speaker",
        onClick: l
      }, null),
      default: () => v("div", {
        class: "d-flex flex-column"
      }, [o.value.map(({
        id: f,
        text: u
      }) => v("div", {
        key: f,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          n.isDisabled(r == null ? void 0 : r.value) || n.exec(r == null ? void 0 : r.value, u), a();
        },
        onMousedown: U(() => {
        }, ["stop", "prevent"])
      }, [u]))])
    });
  }
});
function Io() {
  return G("w-e-dom-continuous");
}
class To {
  getValue(e) {
    const {
      selection: n
    } = e;
    return n == null ? "" : B.string(e, n);
  }
  isDisabled(e) {
    const {
      selection: n
    } = e;
    return !!(n == null || K.isCollapsed(n) || B.string(e, n).length < 2);
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
    const o = {
      type: "ssml-w",
      domId: Io(),
      children: [{
        text: r
      }],
      remark: "连读",
      bgColor: "continuous"
    };
    L.delete(e), L.insertNodes(e, o), Q(e, "ssml-w", o.domId, (i) => {
      L.unwrapNodes(e, {
        at: i[1]
      });
    });
  }
}
const on = /* @__PURE__ */ T({
  emits: ["error"],
  setup(t, {
    emit: e
  }) {
    const n = new To();
    function r(o) {
      if (n.isDisabled(o))
        return e("error", "请选择多个中文字符或者多个多个英文单词");
      n.exec(o);
    }
    return () => v(F, {
      text: "连读",
      icon: "continuous",
      onClick: r
    }, null);
  }
});
function Po() {
  return G("w-e-dom-read");
}
class Lo {
  getValue(e) {
    const {
      selection: n
    } = e;
    return n == null ? "" : B.string(e, n);
  }
  isDisabled(e) {
    const {
      selection: n
    } = e;
    return !!(n == null || K.isCollapsed(n) || B.string(e, n).length <= 0);
  }
  exec(e, n) {
    if (this.isDisabled(e))
      return;
    const {
      selection: r
    } = e;
    if (r == null)
      return;
    const o = this.getValue(e);
    if (o == null)
      return;
    const i = {
      type: "ssml-w",
      domId: Po(),
      phoneme: n.id,
      remark: n.remark,
      value: o,
      bgColor: "read",
      children: [{
        text: o
      }]
    };
    L.delete(e), L.insertNodes(e, i), Q(e, "ssml-w", i.domId, (s) => $e(e, s, () => o));
  }
}
const Ao = [{
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
}], sn = /* @__PURE__ */ T({
  emits: ["error"],
  setup(t, {
    emit: e
  }) {
    const n = new Lo(), r = Y("editor"), o = w(!1);
    function i() {
      o.value || (o.value = !0);
    }
    function s() {
      o.value && (o.value = !1);
    }
    function a(l) {
      if (n.isDisabled(l)) {
        e("error", "请先选择文本");
        return;
      }
      i();
    }
    return () => v(J, {
      visible: o.value,
      "onUpdate:visible": (l) => o.value = l,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => v(F, {
        text: "重音",
        icon: "read",
        onClick: a
      }, null),
      default: () => v("div", {
        class: "d-flex flex-column",
        onMousedown: U(() => {
        }, ["stop", "prevent"])
      }, [Ao.map(({
        id: l,
        text: f,
        remark: u
      }) => v("div", {
        key: l,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          n.isDisabled(r == null ? void 0 : r.value) || n.exec(r == null ? void 0 : r.value, {
            id: l,
            text: f,
            remark: u
          }), s();
        },
        onMousedown: U(() => {
        }, ["stop", "prevent"])
      }, [f]))])
    });
  }
});
function Bo() {
  return G("w-e-dom-digital");
}
class Vo {
  getValue(e) {
    const {
      selection: n
    } = e;
    return n == null ? "" : B.string(e, n);
  }
  isDisabled(e) {
    const {
      selection: n
    } = e;
    if (n == null || K.isCollapsed(n))
      return !0;
    const r = B.string(e, n);
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
    const o = this.getValue(e);
    if (o == null)
      return;
    const i = {
      type: "ssml-say-as",
      domId: Bo(),
      interpretAs: n.id,
      remark: n.remark,
      bgColor: "digital",
      children: [{
        text: o
      }]
    };
    L.delete(e), L.insertNodes(e, i), Q(e, "ssml-say-as", i.domId, (s) => {
      L.unwrapNodes(e, {
        at: s[1]
      });
    });
  }
}
const No = [{
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
}], ln = /* @__PURE__ */ T({
  emits: ["error"],
  setup(t, {
    emit: e
  }) {
    const n = new Vo(), r = Y("editor"), o = w(!1);
    function i() {
      o.value = !o.value;
    }
    function s(a) {
      if (n.isDisabled(a)) {
        e("error", "请选择纯数字文本");
        return;
      }
      i();
    }
    return () => v(J, {
      visible: o.value,
      "onUpdate:visible": (a) => o.value = a,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => v(F, {
        text: "数字符号",
        icon: "digital",
        onClick: s
      }, null),
      default: () => v("div", {
        class: "d-flex flex-column"
      }, [No.map(({
        id: a,
        text: l,
        remark: f
      }) => v("div", {
        key: a,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          n.isDisabled(r == null ? void 0 : r.value) || n.exec(r == null ? void 0 : r.value, {
            id: a,
            text: l,
            remark: f
          }), i();
        },
        onMousedown: U(() => {
        }, ["stop", "prevent"])
      }, [l]))])
    });
  }
});
function Fo() {
  return G("w-e-dom-alias");
}
class jo {
  getValue(e) {
    const {
      selection: n
    } = e;
    return n == null ? null : B.string(e, n);
  }
  isDisabled(e) {
    const {
      selection: n
    } = e;
    return !!(n == null || K.isCollapsed(n) || B.string(e, n).length <= 0);
  }
  exec(e, n) {
    if (this.isDisabled(e))
      return;
    const {
      selection: r
    } = e;
    if (r == null)
      return;
    const o = this.getValue(e);
    if (o == null)
      return;
    const i = {
      type: "ssml-sub",
      domId: Fo(),
      remark: `(${n})`,
      alias: n,
      value: o,
      bgColor: "alias",
      children: [{
        text: ""
      }]
    };
    L.delete(e), L.insertNodes(e, i), Q(e, "ssml-sub", i.domId, (s) => $e(e, s, (a) => a.value));
  }
}
const an = /* @__PURE__ */ T({
  emits: ["error"],
  setup(t, {
    emit: e
  }) {
    const n = new jo(), r = Y("editor"), o = w(), i = w(!1), s = re();
    function a() {
      i.value || (i.value = !0);
    }
    function l() {
      i.value && (i.value = !1);
    }
    async function f(d) {
      if (n.isDisabled(d)) {
        e("error", "选中一个中文字符，并且有不能在其他语句之内");
        return;
      }
      a(), s.value = d.selection, o.value.focus();
    }
    function u(d) {
      l();
      const p = r == null ? void 0 : r.value;
      !p || !d || (p.select(s.value), !n.isDisabled(p) && n.exec(p, d));
    }
    return () => v(J, {
      visible: i.value,
      "onUpdate:visible": (d) => i.value = d,
      trigger: "contextmenu",
      placement: "right-end",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => v(F, {
        text: "别名",
        icon: "alias",
        onClick: f
      }, null),
      default: () => v(Ue, {
        ref: o,
        onSubmit: u
      }, null)
    });
  }
});
function Ro(t) {
  const { selection: e } = t;
  if (e) {
    const [n, r] = K.edges(e), o = B.range(t, n, r), i = B.string(t, o), s = i.trimEnd();
    if (s !== i) {
      const a = i.length - s.length, l = { ...r, offset: r.offset - a }, f = { ...e, anchor: n, focus: l };
      L.select(t, f);
    }
  }
}
function Wo() {
  return G("w-e-dom-english");
}
class zo {
  getValue(e) {
    const {
      selection: n
    } = e;
    return n == null ? null : B.string(e, n);
  }
  isDisabled(e) {
    const {
      selection: n
    } = e;
    if (n == null || K.isCollapsed(n))
      return !0;
    const r = B.string(e, n);
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
    const o = this.getValue(e);
    if (o == null)
      return;
    const i = {
      type: "ssml-p",
      domId: Wo(),
      word: o,
      phoneme: n,
      remark: n,
      bgColor: "english",
      children: [{
        text: ""
      }]
    };
    L.delete(e), L.insertNodes(e, i), e.move(1), Q(e, "ssml-p", i.domId, (s) => $e(e, s, (a) => a.word));
  }
}
function Ho(t) {
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
const un = /* @__PURE__ */ T({
  emits: ["error"],
  props: ["popover", "fetch"],
  setup(t, {
    emit: e
  }) {
    const n = new zo(), r = Y("editor"), o = w([]), i = w(!1);
    function s() {
      i.value || (i.value = !0);
    }
    function a() {
      i.value && (i.value = !1);
    }
    async function l(f) {
      if (Ro(f), n.isDisabled(f))
        return e("error", "请选择英文单词");
      const u = n.getValue(f);
      if (u) {
        if (o.value = await (t.fetch || Ho)(u), o.value.length <= 0)
          return e("error", "找不到单词的音标");
        s();
      }
    }
    return () => v(J, {
      visible: i.value,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => v(F, {
        text: "音标",
        icon: "english",
        onClick: l
      }, null),
      default: () => v("div", {
        class: "d-flex flex-column"
      }, [o.value.map(({
        id: f,
        text: u
      }) => v("div", {
        key: f,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          n.isDisabled(r == null ? void 0 : r.value) || n.exec(r == null ? void 0 : r.value, u), a();
        },
        onMousedown: U(() => {
        }, ["stop", "prevent"])
      }, [u]))])
    });
  }
});
function Uo() {
  return G("w-e-dom-changespeed");
}
class qo {
  getValue(e) {
    const {
      selection: n
    } = e;
    return n == null ? null : B.string(e, n);
  }
  isDisabled(e) {
    const {
      selection: n
    } = e;
    return !!(n == null || K.isCollapsed(n) || B.string(e, n).length <= 1);
  }
  exec(e, n) {
    if (this.isDisabled(e))
      return;
    const {
      selection: r
    } = e;
    if (r == null)
      return;
    const o = this.getValue(e);
    if (o == null)
      return;
    const i = {
      type: "ssml-prosody",
      domId: Uo(),
      remark: n,
      rate: n,
      bgColor: "changespeed",
      children: [{
        text: o
      }]
    };
    L.delete(e), L.insertNodes(e, i), Q(e, "ssml-prosody", i.domId, (s) => {
      L.unwrapNodes(e, {
        at: s[1]
      });
    });
  }
}
function Ko() {
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
const cn = /* @__PURE__ */ T({
  emits: ["error"],
  setup(t, {
    emit: e
  }) {
    const n = new qo(), r = Y("editor"), o = w([]), i = w(!1);
    function s() {
      i.value || (i.value = !0);
    }
    function a() {
      i.value && (i.value = !1);
    }
    async function l(f) {
      if (o.value = await Ko(), n.isDisabled(f)) {
        e("error", "选中一个中文字符，并且有不能在其他语句之内");
        return;
      }
      s();
    }
    return () => v(J, {
      style: {
        padding: "0px"
      },
      visible: i.value,
      "onUpdate:visible": (f) => i.value = f,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => v(F, {
        text: "局部变速",
        icon: "changespeed",
        onClick: l
      }, null),
      default: () => v("div", {
        class: "d-flex flex-column overflow-x-hidden overflow-y-scroll",
        style: "height:15rem"
      }, [o.value.map(({
        id: f,
        text: u
      }) => v("div", {
        key: f,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          n.isDisabled(r == null ? void 0 : r.value) || n.exec(r == null ? void 0 : r.value, u), a();
        },
        onMousedown: U(() => {
        }, ["stop", "prevent"])
      }, [u]))])
    });
  }
});
function Xo() {
  return G("w-e-dom-rhythm");
}
class Yo {
  isDisabled(e) {
    const {
      selection: n
    } = e;
    return !!(n == null || K.isExpanded(n));
  }
  exec(e, n) {
    if (this.isDisabled(e))
      return;
    const {
      selection: r
    } = e;
    if (r == null)
      return;
    const o = {
      type: "ssml-break",
      domId: Xo(),
      time: n.id,
      remark: n.remark,
      bgColor: "rhythm",
      children: [{
        text: ""
      }]
    };
    L.insertNodes(e, o), e.move(1), Q(e, "ssml-break", o.domId, (i) => {
      L.delete(e, {
        at: i[1]
      });
    });
  }
}
const Go = [{
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
}], fn = /* @__PURE__ */ T({
  emits: ["error"],
  setup(t, {
    emit: e
  }) {
    const n = new Yo(), r = Y("editor"), o = w(!1);
    function i() {
      o.value || (o.value = !0);
    }
    function s() {
      o.value && (o.value = !1);
    }
    function a(l) {
      if (n.isDisabled(l)) {
        e("error", "不能选择文本");
        return;
      }
      i();
    }
    return () => v(J, {
      visible: o.value,
      "onUpdate:visible": (l) => o.value = l,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => v(F, {
        text: "停顿调节",
        icon: "rhythm",
        onClick: a
      }, null),
      default: () => v("div", {
        class: "d-flex flex-column"
      }, [Go.map(({
        id: l,
        text: f,
        remark: u
      }) => v("div", {
        key: l,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          n.isDisabled(r == null ? void 0 : r.value) || n.exec(r == null ? void 0 : r.value, {
            id: l,
            text: f,
            remark: u
          }), s();
        },
        onMousedown: U(() => {
        }, ["stop", "prevent"])
      }, [f]))])
    });
  }
});
var je = { exports: {} }, dn = { exports: {} }, Qo = void 0, pn = function(t) {
  return t !== Qo && t !== null;
}, Zo = pn, Jo = {
  object: !0,
  function: !0,
  undefined: !0
  /* document.all */
}, ei = function(t) {
  return Zo(t) ? hasOwnProperty.call(Jo, typeof t) : !1;
}, ti = ei, ni = function(t) {
  if (!ti(t))
    return !1;
  try {
    return t.constructor ? t.constructor.prototype === t : !1;
  } catch {
    return !1;
  }
}, ri = ni, oi = function(t) {
  if (typeof t != "function" || !hasOwnProperty.call(t, "length"))
    return !1;
  try {
    if (typeof t.length != "number" || typeof t.call != "function" || typeof t.apply != "function")
      return !1;
  } catch {
    return !1;
  }
  return !ri(t);
}, ii = oi, si = /^\s*class[\s{/}]/, li = Function.prototype.toString, ai = function(t) {
  return !(!ii(t) || si.test(li.call(t)));
}, ui = function() {
  var t = Object.assign, e;
  return typeof t != "function" ? !1 : (e = { foo: "raz" }, t(e, { bar: "dwa" }, { trzy: "trzy" }), e.foo + e.bar + e.trzy === "razdwatrzy");
}, Oe, Mt;
function ci() {
  return Mt || (Mt = 1, Oe = function() {
    try {
      return Object.keys("primitive"), !0;
    } catch {
      return !1;
    }
  }), Oe;
}
var fi = function() {
}, di = fi(), Ze = function(t) {
  return t !== di && t !== null;
}, De, It;
function pi() {
  if (It)
    return De;
  It = 1;
  var t = Ze, e = Object.keys;
  return De = function(n) {
    return e(t(n) ? Object(n) : n);
  }, De;
}
var Me, Tt;
function mi() {
  return Tt || (Tt = 1, Me = ci()() ? Object.keys : pi()), Me;
}
var Ie, Pt;
function vi() {
  if (Pt)
    return Ie;
  Pt = 1;
  var t = Ze;
  return Ie = function(e) {
    if (!t(e))
      throw new TypeError("Cannot use null or undefined");
    return e;
  }, Ie;
}
var Te, Lt;
function hi() {
  if (Lt)
    return Te;
  Lt = 1;
  var t = mi(), e = vi(), n = Math.max;
  return Te = function(r, o) {
    var i, s, a = n(arguments.length, 2), l;
    for (r = Object(e(r)), l = function(f) {
      try {
        r[f] = o[f];
      } catch (u) {
        i || (i = u);
      }
    }, s = 1; s < a; ++s)
      o = arguments[s], t(o).forEach(l);
    if (i !== void 0)
      throw i;
    return r;
  }, Te;
}
var gi = ui() ? Object.assign : hi(), bi = Ze, yi = Array.prototype.forEach, _i = Object.create, wi = function(t, e) {
  var n;
  for (n in t)
    e[n] = t[n];
}, xi = function(t) {
  var e = _i(null);
  return yi.call(arguments, function(n) {
    bi(n) && wi(Object(n), e);
  }), e;
}, Pe = "razdwatrzy", $i = function() {
  return typeof Pe.contains != "function" ? !1 : Pe.contains("dwa") === !0 && Pe.contains("foo") === !1;
}, Le, At;
function Si() {
  if (At)
    return Le;
  At = 1;
  var t = String.prototype.indexOf;
  return Le = function(e) {
    return t.call(this, e, arguments[1]) > -1;
  }, Le;
}
var ki = $i() ? String.prototype.contains : Si(), ye = pn, Bt = ai, mn = gi, vn = xi, ve = ki, Ei = dn.exports = function(t, e) {
  var n, r, o, i, s;
  return arguments.length < 2 || typeof t != "string" ? (i = e, e = t, t = null) : i = arguments[2], ye(t) ? (n = ve.call(t, "c"), r = ve.call(t, "e"), o = ve.call(t, "w")) : (n = o = !0, r = !1), s = { value: e, configurable: n, enumerable: r, writable: o }, i ? mn(vn(i), s) : s;
};
Ei.gs = function(t, e, n) {
  var r, o, i, s;
  return typeof t != "string" ? (i = n, n = e, e = t, t = null) : i = arguments[3], ye(e) ? Bt(e) ? ye(n) ? Bt(n) || (i = n, n = void 0) : n = void 0 : (i = e, e = n = void 0) : e = void 0, ye(t) ? (r = ve.call(t, "c"), o = ve.call(t, "e")) : (r = !0, o = !1), s = { get: e, set: n, configurable: r, enumerable: o }, i ? mn(vn(i), s) : s;
};
var Ci = dn.exports, Oi = function(t) {
  if (typeof t != "function")
    throw new TypeError(t + " is not a function");
  return t;
};
(function(t, e) {
  var n = Ci, r = Oi, o = Function.prototype.apply, i = Function.prototype.call, s = Object.create, a = Object.defineProperty, l = Object.defineProperties, f = Object.prototype.hasOwnProperty, u = { configurable: !0, enumerable: !1, writable: !0 }, d, p, x, m, c, g, $;
  d = function(k, h) {
    var _;
    return r(h), f.call(this, "__ee__") ? _ = this.__ee__ : (_ = u.value = s(null), a(this, "__ee__", u), u.value = null), _[k] ? typeof _[k] == "object" ? _[k].push(h) : _[k] = [_[k], h] : _[k] = h, this;
  }, p = function(k, h) {
    var _, S;
    return r(h), S = this, d.call(this, k, _ = function() {
      x.call(S, k, _), o.call(h, this, arguments);
    }), _.__eeOnceListener__ = h, this;
  }, x = function(k, h) {
    var _, S, b, C;
    if (r(h), !f.call(this, "__ee__"))
      return this;
    if (_ = this.__ee__, !_[k])
      return this;
    if (S = _[k], typeof S == "object")
      for (C = 0; b = S[C]; ++C)
        (b === h || b.__eeOnceListener__ === h) && (S.length === 2 ? _[k] = S[C ? 0 : 1] : S.splice(C, 1));
    else
      (S === h || S.__eeOnceListener__ === h) && delete _[k];
    return this;
  }, m = function(k) {
    var h, _, S, b, C;
    if (f.call(this, "__ee__") && (b = this.__ee__[k], !!b))
      if (typeof b == "object") {
        for (_ = arguments.length, C = new Array(_ - 1), h = 1; h < _; ++h)
          C[h - 1] = arguments[h];
        for (b = b.slice(), h = 0; S = b[h]; ++h)
          o.call(S, this, C);
      } else
        switch (arguments.length) {
          case 1:
            i.call(b, this);
            break;
          case 2:
            i.call(b, this, arguments[1]);
            break;
          case 3:
            i.call(b, this, arguments[1], arguments[2]);
            break;
          default:
            for (_ = arguments.length, C = new Array(_ - 1), h = 1; h < _; ++h)
              C[h - 1] = arguments[h];
            o.call(b, this, C);
        }
  }, c = {
    on: d,
    once: p,
    off: x,
    emit: m
  }, g = {
    on: n(d),
    once: n(p),
    off: n(x),
    emit: n(m)
  }, $ = l({}, g), t.exports = e = function(k) {
    return k == null ? s($) : l(Object(k), g);
  }, e.methods = c;
})(je, je.exports);
var Di = je.exports;
const Mi = /* @__PURE__ */ Xe(Di), O = Mi();
function hn(t) {
  if (window.navigator.userAgent.toLowerCase().indexOf("ie") >= 0) {
    const n = `<embed name="embedPlay" src="${t}"></embed>`;
    M("body").find("embed").length <= 0 && M("body").append(n);
    const r = document.embedPlay;
    r.volume = 100;
  } else {
    const n = `<audio id='audioPlay' src='${t}' hidden='true'>`;
    M("body").find("audio").length <= 0 && M("body").append(n), document.getElementById("audioPlay").play();
  }
}
function Ii() {
  return G("w-e-dom-special");
}
class Ti {
  constructor(e) {
    Se(this, "editor");
    Se(this, "oldSelection");
    this.editor = e;
  }
  recordSelection() {
    this.oldSelection = this.editor.selection;
  }
  getSelection() {
    const { selection: e } = this.editor;
    return e ?? this.oldSelection;
  }
  getValue() {
    const { selection: e } = this.editor;
    return e == null ? null : B.string(this.editor, e);
  }
  isDisabled() {
    const e = this.getSelection();
    return e == null ? (O.emit("editor-error", "未选中编辑器"), !0) : K.isExpanded(e) ? (O.emit("editor-error", "不能框选文字"), !0) : !1;
  }
  exec(e) {
    if (this.isDisabled() || (this.editor.select(this.getSelection()), this.getValue() == null))
      return;
    const r = {
      type: "ssml-audio",
      domId: Ii(),
      src: e.value,
      remark: e.label,
      bgColor: "special",
      children: [{ text: "" }]
    };
    L.insertNodes(this.editor, r), this.editor.move(1), Q(
      this.editor,
      "ssml-audio",
      r.domId,
      (o) => L.delete(this.editor, { at: o[1] })
    ), Eo(
      this.editor,
      "ssml-audio",
      r.domId,
      (o) => hn(o[0].src)
    );
  }
}
const gn = /* @__PURE__ */ T({
  __name: "special-menu",
  setup(t) {
    const e = w(), n = re(), { x: r, y: o, height: i } = he(e), s = (l) => {
      if (n.value ?? (n.value = new Ti(l)), n.value.isDisabled())
        return !1;
      n.value.recordSelection(), O.emit("special-menu-click", {
        x: r.value - 200,
        y: o.value + i.value
      });
    };
    function a(l) {
      n.value && !n.value.isDisabled() && n.value.exec(l);
    }
    return N(() => {
      O.on("special-drag-box-submit", a);
    }), W(() => {
      O.off("special-drag-box-submit", a);
    }), (l, f) => (I(), V(y(F), {
      ref_key: "menuRef",
      ref: e,
      text: "音效",
      icon: "special",
      onClick: s
    }, null, 512));
  }
}), bn = /* @__PURE__ */ T({
  __name: "special-drag-box",
  setup(t) {
    const e = w(!1), n = w({ x: 20, y: 20 }), r = { first: "默认音效", second: "自定义音效", last: "最近音效" }, o = [
      { value: "", label: "全部场景" },
      { value: "2", label: "场景2" },
      { value: "3", label: "场景3" }
    ], i = [
      { value: "", label: "全部风格" },
      { value: "2", label: "风格2" },
      { value: "3", label: "风格3" }
    ], s = w();
    N(() => {
      O.on("special-menu-click", l);
    }), W(() => {
      O.off("special-menu-click", l);
    });
    function a(u) {
      return Promise.resolve([
        {
          value: "https://download.samplelib.com/wav/sample-3s.wav#1",
          label: `${u.search || "测试"}音效1`
        },
        {
          value: "https://download.samplelib.com/wav/sample-3s.wav#2",
          label: `${u.menuKey || "测试"}音效2`
        },
        {
          value: "https://download.samplelib.com/wav/sample-3s.wav#3",
          label: `${u.scene || "测试"}音效3`
        },
        {
          value: "https://download.samplelib.com/wav/sample-3s.wav#4",
          label: `${u.style || "测试"}音效4`
        }
      ]);
    }
    async function l(u) {
      n.value = u, e.value = !0, s.value ?? (s.value = await a({ search: "", menuKey: "first", scene: "", style: "" }));
    }
    function f(u) {
      e.value = !1, O.emit("special-drag-box-submit", u);
    }
    return (u, d) => (I(), V(y(pe), {
      visible: e.value,
      "onUpdate:visible": d[0] || (d[0] = (p) => e.value = p),
      position: n.value,
      "onUpdate:position": d[1] || (d[1] = (p) => n.value = p)
    }, {
      default: D(() => [
        v(y(de), {
          menuItemLabel: r,
          scenes: o,
          styles: i,
          dataList: s.value,
          fetch: a,
          onSubmit: f
        }, null, 8, ["dataList"])
      ]),
      _: 1
    }, 8, ["visible", "position"]));
  }
});
function Pi() {
  return G("w-e-dom-mute");
}
class Li {
  isDisabled(e) {
    const {
      selection: n
    } = e;
    return !!(n == null || K.isExpanded(n));
  }
  exec(e, n) {
    if (this.isDisabled(e))
      return;
    const {
      selection: r
    } = e;
    if (r == null)
      return;
    const o = {
      type: "ssml-break",
      domId: Pi(),
      time: n,
      remark: n,
      bgColor: "mute",
      children: [{
        text: ""
      }]
    };
    L.insertNodes(e, o), e.move(1), Q(e, "ssml-break", o.domId, (i) => {
      L.delete(e, {
        at: i[1]
      });
    });
  }
}
const Ai = [{
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
}], yn = /* @__PURE__ */ T({
  emits: ["error"],
  setup(t, {
    emit: e
  }) {
    const n = new Li(), r = Y("editor");
    r || e("error", "请注入editor");
    const o = w(!1), i = w(), s = re();
    function a() {
      o.value || (o.value = !0);
    }
    function l() {
      o.value && (o.value = !1);
    }
    function f(d) {
      if (n.isDisabled(d)) {
        e("error", "不能选择文本");
        return;
      }
      a(), s.value = d.selection, i.value.focus();
    }
    function u(d) {
      l();
      const p = r == null ? void 0 : r.value;
      !p || !d || (p.select(s.value), !n.isDisabled(p) && n.exec(p, d));
    }
    return () => v(J, {
      visible: o.value,
      "onUpdate:visible": (d) => o.value = d,
      trigger: "contextmenu",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => v(F, {
        text: "插入静音",
        icon: "mute",
        onClick: f
      }, null),
      default: () => v("div", {
        class: "d-flex flex-column"
      }, [Ai.map(({
        id: d,
        text: p
      }) => v("div", {
        key: d,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => u(d),
        onMousedown: U(() => {
        }, ["stop", "prevent"])
      }, [p])), v(Ue, {
        type: "number",
        ref: i,
        onSubmit: u
      }, null)])
    });
  }
}), _n = /* @__PURE__ */ T({
  __name: "bgm-menu",
  setup(t) {
    const e = w(), n = re(), { x: r, y: o, height: i } = he(e), s = (l) => {
      n.value = l, O.emit("bgm-menu-click", {
        x: r.value - 200,
        y: o.value + i.value
      });
    };
    function a(l) {
      var f;
      (f = n.value) == null || f.emit("updateBgm", l);
    }
    return N(() => {
      O.on("bgm-drag-box-submit", a);
    }), W(() => {
      O.off("gbm-drag-box-submit", a);
    }), (l, f) => (I(), V(y(F), {
      ref_key: "menuRef",
      ref: e,
      text: "配乐",
      icon: "bgm",
      onClick: s
    }, null, 512));
  }
}), wn = /* @__PURE__ */ T({
  __name: "bgm-drag-box",
  setup(t) {
    const e = w(!1), n = w({ x: 20, y: 20 }), r = { first: "默认配乐", second: "自定义配乐", last: "最近配乐" }, o = [
      { value: "", label: "全部场景" },
      { value: "2", label: "场景2" },
      { value: "3", label: "场景3" }
    ], i = [
      { value: "", label: "全部风格" },
      { value: "2", label: "风格2" },
      { value: "3", label: "风格3" }
    ], s = w();
    N(() => {
      O.on("bgm-menu-click", l);
    }), W(() => {
      O.off("bgm-menu-click", l);
    });
    function a(u) {
      return Promise.resolve([
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#1",
          label: `${u.search || "测试"}背景音乐1`
        },
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#2",
          label: `${u.menuKey || "测试"}背景音乐2`
        },
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#3",
          label: `${u.scene || "测试"}背景音乐3`
        },
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#4",
          label: `${u.style || "测试"}背景音乐4`
        }
      ]);
    }
    async function l(u) {
      n.value = u, e.value = !0, s.value ?? (s.value = await a({ search: "", menuKey: "first", scene: "", style: "" }));
    }
    function f(u) {
      e.value = !1, O.emit("bgm-drag-box-submit", u);
    }
    return (u, d) => (I(), V(y(pe), {
      visible: e.value,
      "onUpdate:visible": d[0] || (d[0] = (p) => e.value = p),
      position: n.value,
      "onUpdate:position": d[1] || (d[1] = (p) => n.value = p)
    }, {
      default: D(() => [
        v(y(de), {
          menuItemLabel: r,
          scenes: o,
          styles: i,
          dataList: s.value,
          fetch: a,
          onSubmit: f
        }, null, 8, ["dataList"])
      ]),
      _: 1
    }, 8, ["visible", "position"]));
  }
}), xn = /* @__PURE__ */ T({
  __name: "sensitive-menu",
  setup(t) {
    const e = w(), n = re(), { x: r, y: o, height: i } = he(e), s = (l) => {
      n.value = l, O.emit("sensitive-menu-click", {
        x: r.value - 200,
        y: o.value + i.value
      });
    };
    function a(l) {
      var f;
      (f = n.value) == null || f.emit("sensitive", l);
    }
    return N(() => {
      O.on("sensitive-drag-box-submit", a);
    }), W(() => {
      O.off("sensitive-drag-box-submit", a);
    }), (l, f) => (I(), V(y(F), {
      ref_key: "menuRef",
      ref: e,
      text: "敏感词",
      icon: "sensitive",
      onClick: s
    }, null, 512));
  }
}), $n = /* @__PURE__ */ T({
  __name: "sensitive-drag-box",
  setup(t) {
    const e = w(!1), n = w({ x: 20, y: 20 }), r = { first: "默认配乐", second: "自定义配乐", last: "最近配乐" }, o = [
      { value: "", label: "全部场景" },
      { value: "2", label: "场景2" },
      { value: "3", label: "场景3" }
    ], i = [
      { value: "", label: "全部风格" },
      { value: "2", label: "风格2" },
      { value: "3", label: "风格3" }
    ], s = w();
    N(() => {
      O.on("sensitive-menu-click", l);
    }), W(() => {
      O.off("sensitive-menu-click", l);
    });
    function a(u) {
      return Promise.resolve([
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#1",
          label: `${u.search || "测试"}背景音乐1`
        },
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#2",
          label: `${u.menuKey || "测试"}背景音乐2`
        },
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#3",
          label: `${u.scene || "测试"}背景音乐3`
        },
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#4",
          label: `${u.style || "测试"}背景音乐4`
        }
      ]);
    }
    async function l(u) {
      n.value = u, e.value = !0, s.value ?? (s.value = await a({ search: "", menuKey: "first", scene: "", style: "" }));
    }
    function f(u) {
      e.value = !1, O.emit("sensitive-drag-box-submit", u);
    }
    return (u, d) => (I(), V(y(pe), {
      visible: e.value,
      "onUpdate:visible": d[0] || (d[0] = (p) => e.value = p),
      position: n.value,
      "onUpdate:position": d[1] || (d[1] = (p) => n.value = p)
    }, {
      default: D(() => [
        v(y(de), {
          menuItemLabel: r,
          scenes: o,
          styles: i,
          dataList: s.value,
          fetch: a,
          onSubmit: f
        }, null, 8, ["dataList"])
      ]),
      _: 1
    }, 8, ["visible", "position"]));
  }
}), Sn = /* @__PURE__ */ T({
  __name: "management-menu",
  setup(t) {
    const e = w(), n = re(), { x: r, y: o, height: i } = he(e), s = (l) => {
      n.value = l, O.emit("management-menu-click", {
        x: r.value - 200,
        y: o.value + i.value
      });
    };
    function a(l) {
      var f;
      (f = n.value) == null || f.emit("management", l);
    }
    return N(() => {
      O.on("management-drag-box-submit", a);
    }), W(() => {
      O.off("management-drag-box-submit", a);
    }), (l, f) => (I(), V(y(F), {
      ref_key: "menuRef",
      ref: e,
      text: "多人配音",
      icon: "management",
      onClick: s
    }, null, 512));
  }
}), kn = /* @__PURE__ */ T({
  __name: "management-drag-box",
  setup(t) {
    const e = w(!1), n = w({ x: 20, y: 20 }), r = { first: "默认配乐", second: "自定义配乐", last: "最近配乐" }, o = [
      { value: "", label: "全部场景" },
      { value: "2", label: "场景2" },
      { value: "3", label: "场景3" }
    ], i = [
      { value: "", label: "全部风格" },
      { value: "2", label: "风格2" },
      { value: "3", label: "风格3" }
    ], s = w();
    N(() => {
      O.on("management-menu-click", l);
    }), W(() => {
      O.off("management-menu-click", l);
    });
    function a(u) {
      return Promise.resolve([
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#1",
          label: `${u.search || "测试"}背景音乐1`
        },
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#2",
          label: `${u.menuKey || "测试"}背景音乐2`
        },
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#3",
          label: `${u.scene || "测试"}背景音乐3`
        },
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#4",
          label: `${u.style || "测试"}背景音乐4`
        }
      ]);
    }
    async function l(u) {
      n.value = u, e.value = !0, s.value ?? (s.value = await a({ search: "", menuKey: "first", scene: "", style: "" }));
    }
    function f(u) {
      e.value = !1, O.emit("management-drag-box-submit", u);
    }
    return (u, d) => (I(), V(y(pe), {
      visible: e.value,
      "onUpdate:visible": d[0] || (d[0] = (p) => e.value = p),
      position: n.value,
      "onUpdate:position": d[1] || (d[1] = (p) => n.value = p)
    }, {
      default: D(() => [
        v(y(de), {
          menuItemLabel: r,
          scenes: o,
          styles: i,
          dataList: s.value,
          fetch: a,
          onSubmit: f
        }, null, 8, ["dataList"])
      ]),
      _: 1
    }, 8, ["visible", "position"]));
  }
}), En = /* @__PURE__ */ T({
  __name: "conversion-menu",
  setup(t) {
    const e = w(), n = re(), { x: r, y: o, height: i } = he(e), s = (l) => {
      n.value = l, O.emit("bgm-menu-click", {
        x: r.value - 200,
        y: o.value + i.value
      });
    };
    function a(l) {
      var f;
      (f = n.value) == null || f.emit("updateBgm", l);
    }
    return N(() => {
      O.on("bgm-drag-box-submit", a);
    }), W(() => {
      O.off("gbm-drag-box-submit", a);
    }), (l, f) => (I(), V(y(F), {
      ref_key: "menuRef",
      ref: e,
      text: "局部变音",
      icon: "conversion",
      onClick: s
    }, null, 512));
  }
}), Cn = /* @__PURE__ */ T({
  __name: "conversion-drag-box",
  setup(t) {
    const e = w(!1), n = w({ x: 20, y: 20 }), r = { first: "默认配乐", second: "自定义配乐", last: "最近配乐" }, o = [
      { value: "", label: "全部场景" },
      { value: "2", label: "场景2" },
      { value: "3", label: "场景3" }
    ], i = [
      { value: "", label: "全部风格" },
      { value: "2", label: "风格2" },
      { value: "3", label: "风格3" }
    ], s = w();
    N(() => {
      O.on("conversion-menu-click", l);
    }), W(() => {
      O.off("conversion-menu-click", l);
    });
    function a(u) {
      return Promise.resolve([
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#1",
          label: `${u.search || "测试"}背景音乐1`
        },
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#2",
          label: `${u.menuKey || "测试"}背景音乐2`
        },
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#3",
          label: `${u.scene || "测试"}背景音乐3`
        },
        {
          value: "https://download.samplelib.com/wav/sample-6s.wav#4",
          label: `${u.style || "测试"}背景音乐4`
        }
      ]);
    }
    async function l(u) {
      n.value = u, e.value = !0, s.value ?? (s.value = await a({ search: "", menuKey: "first", scene: "", style: "" }));
    }
    function f(u) {
      e.value = !1, O.emit("conversion-drag-box-submit", u);
    }
    return (u, d) => (I(), V(y(pe), {
      visible: e.value,
      "onUpdate:visible": d[0] || (d[0] = (p) => e.value = p),
      position: n.value,
      "onUpdate:position": d[1] || (d[1] = (p) => n.value = p)
    }, {
      default: D(() => [
        v(y(de), {
          menuItemLabel: r,
          scenes: o,
          styles: i,
          dataList: s.value,
          fetch: a,
          onSubmit: f
        }, null, 8, ["dataList"])
      ]),
      _: 1
    }, 8, ["visible", "position"]));
  }
}), Bi = /* @__PURE__ */ E("div", null, "xxxxx", -1), On = /* @__PURE__ */ T({
  __name: "try-play",
  setup(t) {
    return (e, n) => (I(), V(y(Gt), null, {
      default: D(() => [
        Bi
      ]),
      _: 1
    }));
  }
});
const Vi = {
  install: (t) => {
    t.component("SpeakerMenu", rn), t.component("ContinuousMenu", on), t.component("ReadMenu", sn), t.component("DigitalMenu", ln), t.component("AliasMenu", an), t.component("EnglishMenu", un), t.component("ChangespeedMenu", cn), t.component("RhythmMenu", fn), t.component("SpecialMenu", gn), t.component("SpecialDragBox", bn), t.component("MuteMenu", yn), t.component("BgmMenu", _n), t.component("BgmDragBox", wn), t.component("SensitiveMenu", xn), t.component("SensitiveDragBox", $n), t.component("ManagementMenu", Sn), t.component("ManagementDragBox", kn), t.component("ConversionMenu", En), t.component("ConversionDragBox", Cn), t.component("TryPlay", On);
  }
};
var Re = { exports: {} }, We = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ParsingError = void 0;
  class n extends Error {
    constructor(_, S) {
      super(_), this.cause = S;
    }
  }
  e.ParsingError = n;
  let r;
  function o() {
    return l(!1) || p() || d() || u();
  }
  function i() {
    return c(/\s*/), l(!0) || d() || f() || a(!1);
  }
  function s() {
    const h = a(!0), _ = [];
    let S, b = i();
    for (; b; ) {
      if (b.node.type === "Element") {
        if (S)
          throw new Error("Found multiple root nodes");
        S = b.node;
      }
      b.excluded || _.push(b.node), b = i();
    }
    if (!S)
      throw new n("Failed to parse XML", "Root Element not found");
    if (r.xml.length !== 0)
      throw new n("Failed to parse XML", "Not Well-Formed XML");
    return {
      declaration: h ? h.node : null,
      root: S,
      children: _
    };
  }
  function a(h) {
    const _ = c(h ? /^<\?(xml)\s*/ : /^<\?([\w-:.]+)\s*/);
    if (!_)
      return;
    const S = {
      name: _[1],
      type: "ProcessingInstruction",
      attributes: {}
    };
    for (; !(g() || $("?>")); ) {
      const b = x();
      if (b)
        S.attributes[b.name] = b.value;
      else
        return;
    }
    return c(/\?>/), {
      excluded: h ? !1 : r.options.filter(S) === !1,
      node: S
    };
  }
  function l(h) {
    const _ = c(/^<([^?!</>\s]+)\s*/);
    if (!_)
      return;
    const S = {
      type: "Element",
      name: _[1],
      attributes: {},
      children: []
    }, b = h ? !1 : r.options.filter(S) === !1;
    for (; !(g() || $(">") || $("?>") || $("/>")); ) {
      const A = x();
      if (A)
        S.attributes[A.name] = A.value;
      else
        return;
    }
    if (c(/^\s*\/>/))
      return S.children = null, {
        excluded: b,
        node: S
      };
    c(/\??>/);
    let C = o();
    for (; C; )
      C.excluded || S.children.push(C.node), C = o();
    if (r.options.strictMode) {
      const A = `</${S.name}>`;
      if (r.xml.startsWith(A))
        r.xml = r.xml.slice(A.length);
      else
        throw new n("Failed to parse XML", `Closing tag not matching "${A}"`);
    } else
      c(/^<\/\s*[\w-:.\u00C0-\u00FF]+>/);
    return {
      excluded: b,
      node: S
    };
  }
  function f() {
    const h = c(/^<!DOCTYPE\s+\S+\s+SYSTEM[^>]*>/) || c(/^<!DOCTYPE\s+\S+\s+PUBLIC[^>]*>/) || c(/^<!DOCTYPE\s+\S+\s*\[[^\]]*]>/) || c(/^<!DOCTYPE\s+\S+\s*>/);
    if (h) {
      const _ = {
        type: "DocumentType",
        content: h[0]
      };
      return {
        excluded: r.options.filter(_) === !1,
        node: _
      };
    }
  }
  function u() {
    if (r.xml.startsWith("<![CDATA[")) {
      const h = r.xml.indexOf("]]>");
      if (h > -1) {
        const _ = h + 3, S = {
          type: "CDATA",
          content: r.xml.substring(0, _)
        };
        return r.xml = r.xml.slice(_), {
          excluded: r.options.filter(S) === !1,
          node: S
        };
      }
    }
  }
  function d() {
    const h = c(/^<!--[\s\S]*?-->/);
    if (h) {
      const _ = {
        type: "Comment",
        content: h[0]
      };
      return {
        excluded: r.options.filter(_) === !1,
        node: _
      };
    }
  }
  function p() {
    const h = c(/^([^<]+)/);
    if (h) {
      const _ = {
        type: "Text",
        content: h[1]
      };
      return {
        excluded: r.options.filter(_) === !1,
        node: _
      };
    }
  }
  function x() {
    const h = c(/([^=]+)\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)\s*/);
    if (h)
      return {
        name: h[1].trim(),
        value: m(h[2].trim())
      };
  }
  function m(h) {
    return h.replace(/^['"]|['"]$/g, "");
  }
  function c(h) {
    const _ = r.xml.match(h);
    if (_)
      return r.xml = r.xml.slice(_[0].length), _;
  }
  function g() {
    return r.xml.length === 0;
  }
  function $(h) {
    return r.xml.indexOf(h) === 0;
  }
  function k(h, _ = {}) {
    h = h.trim();
    const S = _.filter || (() => !0);
    return r = {
      xml: h,
      options: Object.assign(Object.assign({}, _), { filter: S, strictMode: _.strictMode === !0 })
    }, s();
  }
  t.exports = k, e.default = k;
})(We, We.exports);
var Ni = We.exports;
(function(t, e) {
  var n = ce && ce.__importDefault || function(m) {
    return m && m.__esModule ? m : { default: m };
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  const r = n(Ni);
  function o(m) {
    if (!m.options.indentation && !m.options.lineSeparator)
      return;
    m.content += m.options.lineSeparator;
    let c;
    for (c = 0; c < m.level; c++)
      m.content += m.options.indentation;
  }
  function i(m) {
    m.content = m.content.replace(/ +$/, "");
    let c;
    for (c = 0; c < m.level; c++)
      m.content += m.options.indentation;
  }
  function s(m, c) {
    m.content += c;
  }
  function a(m, c, g) {
    if (typeof m.content == "string")
      l(m.content, c, g);
    else if (m.type === "Element")
      u(m, c, g);
    else if (m.type === "ProcessingInstruction")
      p(m, c);
    else
      throw new Error("Unknown node type: " + m.type);
  }
  function l(m, c, g) {
    if (!g) {
      const $ = m.trim();
      (c.options.lineSeparator || $.length === 0) && (m = $);
    }
    m.length > 0 && (!g && c.content.length > 0 && o(c), s(c, m));
  }
  function f(m, c) {
    const g = "/" + m.join("/"), $ = m[m.length - 1];
    return c.includes($) || c.includes(g);
  }
  function u(m, c, g) {
    if (c.path.push(m.name), !g && c.content.length > 0 && o(c), s(c, "<" + m.name), d(c, m.attributes), m.children === null || c.options.forceSelfClosingEmptyTag && m.children.length === 0) {
      const $ = c.options.whiteSpaceAtEndOfSelfclosingTag ? " />" : "/>";
      s(c, $);
    } else if (m.children.length === 0)
      s(c, "></" + m.name + ">");
    else {
      const $ = m.children;
      s(c, ">"), c.level++;
      let k = m.attributes["xml:space"] === "preserve", h = !1;
      if (!k && c.options.ignoredPaths && (h = f(c.path, c.options.ignoredPaths), k = h), !k && c.options.collapseContent) {
        let _ = !1, S = !1, b = !1;
        $.forEach(function(C, A) {
          C.type === "Text" ? (C.content.includes(`
`) ? (S = !0, C.content = C.content.trim()) : (A === 0 || A === $.length - 1) && C.content.trim().length === 0 && (C.content = ""), C.content.trim().length > 0 && (_ = !0)) : C.type === "CDATA" ? _ = !0 : b = !0;
        }), _ && (!b || !S) && (k = !0);
      }
      $.forEach(function(_) {
        a(_, c, g || k);
      }), c.level--, !g && !k && o(c), h && i(c), s(c, "</" + m.name + ">");
    }
    c.path.pop();
  }
  function d(m, c) {
    Object.keys(c).forEach(function(g) {
      const $ = c[g].replace(/"/g, "&quot;");
      s(m, " " + g + '="' + $ + '"');
    });
  }
  function p(m, c) {
    c.content.length > 0 && o(c), s(c, "<?" + m.name), d(c, m.attributes), s(c, "?>");
  }
  function x(m, c = {}) {
    c.indentation = "indentation" in c ? c.indentation : "    ", c.collapseContent = c.collapseContent === !0, c.lineSeparator = "lineSeparator" in c ? c.lineSeparator : `\r
`, c.whiteSpaceAtEndOfSelfclosingTag = c.whiteSpaceAtEndOfSelfclosingTag === !0, c.throwOnFailure = c.throwOnFailure !== !1;
    try {
      const g = (0, r.default)(m, { filter: c.filter, strictMode: c.strictMode }), $ = { content: "", level: 0, options: c, path: [] };
      return g.declaration && p(g.declaration, $), g.children.forEach(function(k) {
        a(k, $, !1);
      }), c.lineSeparator ? $.content.replace(/\r\n/g, `
`).replace(/\n/g, c.lineSeparator) : $.content;
    } catch (g) {
      if (c.throwOnFailure)
        throw g;
      return m;
    }
  }
  x.minify = (m, c = {}) => x(m, Object.assign(Object.assign({}, c), { indentation: "", lineSeparator: "" })), t.exports = x, e.default = x;
})(Re, Re.exports);
var Fi = Re.exports;
const ji = /* @__PURE__ */ Xe(Fi), ee = (t) => (ze("data-v-dc5f32f2"), t = t(), He(), t), Ri = { class: "edit-title" }, Wi = { class: "title-wrapper" }, zi = /* @__PURE__ */ ee(() => /* @__PURE__ */ E("div", { class: "title-author" }, "SSML编辑器", -1)), Hi = /* @__PURE__ */ ee(() => /* @__PURE__ */ E("div", { class: "h h-1" }, null, -1)), Ui = { class: "author" }, qi = /* @__PURE__ */ ee(() => /* @__PURE__ */ E("div", null, "已保存", -1)), Ki = /* @__PURE__ */ ee(() => /* @__PURE__ */ E("div", null, "|", -1)), Xi = /* @__PURE__ */ ee(() => /* @__PURE__ */ E("div", { class: "w-2" }, null, -1)), Yi = /* @__PURE__ */ ee(() => /* @__PURE__ */ E("span", { class: "iconfont icon-play font-size-12 p1" }, null, -1)), Gi = /* @__PURE__ */ ee(() => /* @__PURE__ */ E("div", { class: "inline-block w-1 p-1" }, null, -1)), Qi = { class: "operation-wrapper" }, Zi = /* @__PURE__ */ ee(() => /* @__PURE__ */ E("div", { class: "menu-divider" }, null, -1)), Ji = /* @__PURE__ */ ee(() => /* @__PURE__ */ E("div", { class: "w w-2" }, null, -1)), es = { class: "ssml-code" }, ts = { class: "dialog-footer" }, ns = /* @__PURE__ */ T({
  __name: "editor-title",
  props: {
    characterTotal: {},
    characterMax: {},
    bgm: {}
  },
  setup(t) {
    const e = Y("editor"), n = w(!1), r = w(""), o = q(() => ji(r.value, {
      indentation: "    ",
      filter: (a) => a.type !== "Comment",
      collapseContent: !1,
      lineSeparator: `
`
    })), i = () => {
      e && (r.value = e.value.getHtml(), n.value = !0);
    }, s = () => {
      var a;
      (a = e == null ? void 0 : e.value) == null || a.emit("removeBgm");
    };
    return (a, l) => (I(), R(me, null, [
      E("div", Ri, [
        E("div", Wi, [
          zi,
          Hi,
          E("div", Ui, [
            qi,
            Ki,
            E("div", null, Z(a.characterTotal) + "/" + Z(a.characterMax) + "字", 1),
            Xi,
            a.bgm ? (I(), V(y(Xn), {
              key: 0,
              class: "bgm-txt p-2",
              closable: "",
              size: "small",
              onClick: l[0] || (l[0] = () => a.bgm && a.bgm.value && y(hn)(a.bgm.value)),
              onClose: s
            }, {
              default: D(() => [
                Yi,
                Gi,
                E("span", null, Z(a.bgm.label), 1)
              ]),
              _: 1
            })) : Rn("", !0)
          ])
        ]),
        E("div", Qi, [
          v(y(se), {
            type: "primary",
            icon: y(Zn),
            disabled: ""
          }, {
            default: D(() => [
              X("分享")
            ]),
            _: 1
          }, 8, ["icon"]),
          Zi,
          v(y(se), {
            type: "primary",
            onClick: i
          }, {
            default: D(() => [
              X("查看SSML")
            ]),
            _: 1
          }),
          v(y(se), { disabled: "" }, {
            default: D(() => [
              X("下载音频")
            ]),
            _: 1
          }),
          v(y(se), { disabled: "" }, {
            default: D(() => [
              X("下载视频")
            ]),
            _: 1
          }),
          v(y(se), { disabled: "" }, {
            default: D(() => [
              X("下载字幕")
            ]),
            _: 1
          }),
          v(y(se), { disabled: "" }, {
            default: D(() => [
              X("声音转换")
            ]),
            _: 1
          }),
          Ji
        ])
      ]),
      v(y(Yn), {
        modelValue: n.value,
        "onUpdate:modelValue": l[2] || (l[2] = (f) => n.value = f),
        title: "查看SSML",
        width: "50%"
      }, {
        footer: D(() => [
          E("span", ts, [
            v(y(se), {
              type: "primary",
              onClick: l[1] || (l[1] = (f) => n.value = !1)
            }, {
              default: D(() => [
                X(" 确定 ")
              ]),
              _: 1
            })
          ])
        ]),
        default: D(() => [
          E("pre", es, Z(o.value), 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
});
const rs = /* @__PURE__ */ oe(ns, [["__scopeId", "data-v-dc5f32f2"]]), os = /* @__PURE__ */ T({
  __name: "editor-core",
  props: {
    editorConfig: {},
    defaultHtml: {}
  },
  emits: ["created", "change"],
  setup(t, { emit: e }) {
    const n = t, r = w(null);
    N(() => {
      o();
    });
    const o = () => {
      r.value && qn({
        selector: r.value,
        mode: "simple",
        html: nt(n.defaultHtml),
        config: {
          ...nt(n.editorConfig),
          onCreated(i) {
            const s = i.getConfig();
            s.hoverbarKeys = void 0, i.focus(!0), e("created", i);
          },
          onChange(i) {
            e("change", i);
          }
        }
      });
    };
    return (i, s) => (I(), R("div", {
      ref_key: "boxRef",
      ref: r,
      class: "edit-core",
      style: { height: "600px", "overflow-y": "hidden" }
    }, null, 512));
  }
});
function Vt(t, e, n, r, o) {
  const i = e === void 0 ? void 0 : e.key;
  return { sel: t, data: e, children: n, text: r, elm: o, key: i };
}
const Nt = Array.isArray;
function Ae(t) {
  return typeof t == "string" || typeof t == "number" || t instanceof String || t instanceof Number;
}
function Dn(t, e, n) {
  if (t.ns = "http://www.w3.org/2000/svg", n !== "foreignObject" && e !== void 0)
    for (let r = 0; r < e.length; ++r) {
      const o = e[r];
      if (typeof o == "string")
        continue;
      const i = o.data;
      i !== void 0 && Dn(i, o.children, o.sel);
    }
}
function P(t, e, n) {
  let r = {}, o, i, s;
  if (n !== void 0 ? (e !== null && (r = e), Nt(n) ? o = n : Ae(n) ? i = n.toString() : n && n.sel && (o = [n])) : e != null && (Nt(e) ? o = e : Ae(e) ? i = e.toString() : e && e.sel ? o = [e] : r = e), o !== void 0)
    for (s = 0; s < o.length; ++s)
      Ae(o[s]) && (o[s] = Vt(void 0, void 0, void 0, o[s], void 0));
  return t[0] === "s" && t[1] === "v" && t[2] === "g" && (t.length === 3 || t[3] === "." || t[3] === "#") && Dn(r, o, t), Vt(t, r, o, i, void 0);
}
const te = { style: { userSelect: "none" }, contentEditable: !1 };
function Je(t) {
  return P("span.ssml-wrap", [
    P(`span.tag.bg-color.${t.bgColor}`, { ...te }, [
      P("span.tag-remark", { attrs: { "data-tag-remark": t.remark } }),
      P(`span#${t.domId}-close.btn-close`, P("span.iconfont.icon-roundclosefill", null))
    ]),
    P(`span.boundary.start.ft-color.${t.bgColor}`, { ...te }),
    P("span", t.plain),
    P(`span.boundary.end.ft-color.${t.bgColor}`, { ...te })
  ]);
}
function et(t, e) {
  return P("span.ssml-wrap", [
    P(`span.tag.bg-color.${t.bgColor}`, { ...te }, [
      P("span.tag-remark", { attrs: { "data-tag-remark": t.remark } }),
      P(`span#${t.domId}-close.btn-close`, P("span.iconfont.icon-roundclosefill", null))
    ]),
    P(`span.boundary.start.ft-color.${t.bgColor}`, { ...te }),
    P("span", e),
    P(`span.boundary.end.ft-color.${t.bgColor}`, { ...te })
  ]);
}
function is(t) {
  return P("span.ssml-wrap", [
    P(`span.tag.bg-color.${t.bgColor}`, { ...te }, [
      P("span.tag-remark", { attrs: { "data-tag-remark": t.remark } }),
      P(`span#${t.domId}-close.btn-close`, P("span.iconfont.icon-roundclosefill", null))
    ])
  ]);
}
function ss(t) {
  return P("span.ssml-wrap", [
    P(`span.tag.bg-color.${t.bgColor}`, { ...te }, [
      P(`span#${t.domId}-play.btn-text`, P("span.iconfont.icon-play", null)),
      P("span.tag-remark", { attrs: { "data-tag-remark": t.remark } }),
      P(`span#${t.domId}-close.btn-text`, P("span.iconfont.icon-roundclosefill", null))
    ])
  ]);
}
function ls(t) {
  const e = t;
  return Je({ ...e, plain: e.word });
}
function as(t, e) {
  if (e)
    return et(t, e);
  const n = t;
  return Je({ ...n, plain: n.value });
}
function us(t, e) {
  if (!e)
    throw Error("children is not null");
  return et(t, e);
}
function cs(t) {
  return is(t);
}
function fs(t) {
  const e = t;
  return Je({ ...e, plain: e.value });
}
function ds(t, e) {
  if (!e)
    throw Error("children is not null");
  return et(t, e);
}
function ps(t) {
  return ss(t);
}
const ms = [
  {
    type: "ssml-p",
    renderElem: ls
  },
  {
    type: "ssml-w",
    renderElem: as
  },
  {
    type: "ssml-say-as",
    renderElem: us
  },
  {
    type: "ssml-break",
    renderElem: cs
  },
  {
    type: "ssml-sub",
    renderElem: fs
  },
  {
    type: "ssml-prosody",
    renderElem: ds
  },
  {
    type: "ssml-audio",
    renderElem: ps
  }
];
function vs(t, e) {
  return `<s>${e}</s>`;
}
function hs(t, e) {
  const { phoneme: n, value: r } = t;
  return n ? `<w phoneme="${n}">${r}</w>` : `<w>${e}</w>`;
}
function gs(t) {
  const { word: e, phoneme: n } = t;
  return `<p ph="${n}">${e}</p>`;
}
function bs(t, e) {
  const { interpretAs: n } = t;
  return `<say-as interpret-as="${n}">${e}</say-as>`;
}
function ys(t) {
  const { time: e } = t;
  return `<break time="${e}" />`;
}
function _s(t) {
  const { alias: e, value: n } = t;
  return `<sub alias="${e}">${n}</sub>`;
}
function ws(t, e) {
  const { rate: n } = t;
  return `<prosody rate="${n}">${e}</prosody>`;
}
function xs(t) {
  const { src: e } = t;
  return `<audio src="${e}" />`;
}
const $s = [
  {
    type: "paragraph",
    elemToHtml: vs
  },
  {
    type: "ssml-w",
    elemToHtml: hs
  },
  {
    type: "ssml-p",
    elemToHtml: gs
  },
  {
    type: "ssml-say-as",
    elemToHtml: bs
  },
  {
    type: "ssml-break",
    elemToHtml: ys
  },
  {
    type: "ssml-sub",
    elemToHtml: _s
  },
  {
    type: "ssml-prosody",
    elemToHtml: ws
  },
  {
    type: "ssml-audio",
    elemToHtml: xs
  }
];
function Ss(t, e) {
  return {
    type: "paragraph",
    children: e
  };
}
function ks(t, e) {
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
const Es = [
  {
    selector: "s",
    parseElemHtml: Ss
  },
  {
    selector: "w",
    parseElemHtml: ks
  }
];
function j(t, e) {
  return t === e;
}
function Cs(t) {
  const {
    isInline: e,
    isVoid: n,
    deleteBackward: r,
    deleteForward: o,
    insertBreak: i,
    getHtml: s,
    apply: a,
    normalizeNode: l
  } = t, f = t;
  f.isInline = (d) => {
    const p = Ve.getNodeType(d);
    return j(p, "ssml-w") || j(p, "ssml-p") || j(p, "ssml-break") || j(p, "ssml-say-as") || j(p, "ssml-sub") || j(p, "ssml-prosody") || j(p, "ssml-audio") ? !0 : e(d);
  }, f.isVoid = (d) => {
    const p = Ve.getNodeType(d);
    if (j(p, "ssml-w")) {
      const { phoneme: x } = d;
      return !!x;
    }
    return j(p, "ssml-p") || j(p, "ssml-break") ? !0 : j(p, "ssml-say-as") ? !1 : j(p, "ssml-sub") ? !0 : j(p, "ssml-prosody") ? !1 : j(p, "ssml-audio") ? !0 : n(d);
  }, f.deleteBackward = (d) => {
    r(d);
  }, f.deleteForward = (d) => {
    o(d);
  }, f.insertBreak = () => {
    i();
  }, f.normalizeNode = (d) => {
    l(d);
  };
  const u = { voice: "", volume: "", pitch: "" };
  return t.on("updateSpeak", (d) => {
    Object.assign(u, d);
  }), t.on("updateBgm", (d) => {
    u.bgm = d.value, u.bgmRemark = d.label;
  }), t.on("removeBgm", () => {
    u.bgm = void 0, u.bgmRemark = void 0;
  }), f.getHtml = () => {
    const d = [];
    for (const p in u)
      if (Object.prototype.hasOwnProperty.call(u, p)) {
        const x = u[p];
        x && d.push(`${p}=${x}`);
      }
    return `<speak ${d.join(" ")}>${s()}</speak>`;
  }, f.apply = (d) => {
    a(d);
  }, f;
}
const Zs = {
  editorPlugin: Cs,
  renderElems: ms,
  elemsToHtml: $s,
  parseElemsHtml: Es
};
const Os = { class: "content" }, Ds = /* @__PURE__ */ T({
  __name: "bar-view",
  setup(t) {
    N(() => {
      O.on("editor-error", e);
    }), W(() => {
      O.off("editor-error", e);
    });
    function e(o) {
      Gn.warning({
        message: o,
        grouping: !0
      });
    }
    function n(o) {
      const i = {
        我: [
          { id: "1", text: "wo1", remark: "wo1" },
          { id: "2", text: "wo2", remark: "wo2" },
          { id: "3", text: "wo3", remark: "wo3" }
        ],
        的: [
          { id: "1", text: "de1", remark: "de1" },
          { id: "2", text: "de2", remark: "de2" },
          { id: "3", text: "de3", remark: "de3" }
        ]
      };
      return Promise.resolve(i[o] || i.的);
    }
    function r(o) {
      const i = {
        translate: [{ id: "1", text: "wərd", remark: "wərd" }],
        global: [{ id: "2", text: "ˈɡlōbəl", remark: "ˈɡlōbəl" }]
      };
      return Promise.resolve(i[o] || i.translate);
    }
    return (o, i) => (I(), R(me, null, [
      E("div", Os, [
        v(y(Qt), null, {
          default: D(() => [
            v(y(le), { divider: "green" }, {
              default: D(() => [
                v(y(F), {
                  text: "24K高清音质",
                  icon: "play",
                  disabled: ""
                })
              ]),
              _: 1
            }),
            v(y(le), { divider: "cyan" }, {
              default: D(() => [
                v(y(rn), {
                  onError: e,
                  fetch: n
                }),
                v(y(sn), { onError: e }),
                v(y(ln), { onError: e }),
                v(y(on), { onError: e }),
                v(y(an), { onError: e }),
                v(y(un), {
                  fetch: r,
                  onError: e
                })
              ]),
              _: 1
            }),
            v(y(le), { divider: "orange" }, {
              default: D(() => [
                v(y(cn), { onError: e }),
                v(y(Sn)),
                v(y(En))
              ]),
              _: 1
            }),
            v(y(le), { divider: "purple" }, {
              default: D(() => [
                v(y(fn), { onError: e }),
                v(y(yn), { onError: e })
              ]),
              _: 1
            }),
            v(y(le), { divider: "yellow" }, {
              default: D(() => [
                v(y(gn)),
                v(y(_n))
              ]),
              _: 1
            }),
            v(y(le), null, {
              default: D(() => [
                v(y(xn))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      v(y(wn)),
      v(y(bn)),
      v(y($n)),
      v(y(kn)),
      v(y(Cn)),
      v(y(On))
    ], 64));
  }
}), Ms = (t) => (ze("data-v-60e192fb"), t = t(), He(), t), Is = { class: "edit-view" }, Ts = { class: "edit-box" }, Ps = /* @__PURE__ */ Ms(() => /* @__PURE__ */ E("div", { class: "h h-1" }, null, -1)), Ls = { class: "editor" }, As = `地球在极其遥远的未来可能面临一些威胁，但目前不太可能突然消失。
The Earth may face some threats in the extremely distant future, but it is currently unlikely to suddenly disappear.
`, Bs = /* @__PURE__ */ T({
  __name: "editor-view",
  emits: ["onCreated", "onChange"],
  setup(t, { emit: e }) {
    const n = w(0), r = re(), o = w(null);
    Wn("editor", r);
    const i = { maxLength: 5e3, placeholder: "请输入内容..." };
    W(() => {
      var l;
      (l = r.value) == null || l.destroy();
    });
    const s = (l) => {
      r.value = l, e("onCreated", l), l.on("updateBgm", (f) => {
        o.value = f;
      }), l.on("removeBgm", () => {
        o.value = null;
      });
    }, a = (l) => {
      n.value = l.getText().length, e("onChange", l);
    };
    return (l, f) => (I(), R("div", Is, [
      v(rs, {
        bgm: o.value,
        "character-total": n.value,
        "character-max": i.maxLength || 0
      }, null, 8, ["bgm", "character-total", "character-max"]),
      E("div", Ts, [
        v(Ds),
        Ps,
        E("div", Ls, [
          v(os, {
            "editor-config": i,
            "default-html": As,
            onChange: a,
            onCreated: s
          })
        ])
      ])
    ]));
  }
});
const Vs = /* @__PURE__ */ oe(Bs, [["__scopeId", "data-v-60e192fb"]]), Ns = {
  install(t) {
    t.component("EditorView", Vs);
  }
};
const Js = {
  install(t) {
    t.use(Xr), t.use(Vi), t.use(Ns);
  }
};
export {
  an as AliasMenu,
  F as BarButton,
  Ue as BarInput,
  nr as BarPopover,
  de as BarSearch,
  Qt as BarWrapper,
  le as BarWrapperGroup,
  zr as BarWrapperItem,
  wn as BgmDragBox,
  _n as BgmMenu,
  cn as ChangespeedMenu,
  on as ContinuousMenu,
  Cn as ConversionDragBox,
  En as ConversionMenu,
  Us as DOMComment,
  qs as DOMElement,
  Hs as DOMNode,
  Xs as DOMRange,
  Ys as DOMSelection,
  Gs as DOMStaticRange,
  Ks as DOMText,
  ln as DigitalMenu,
  pe as DragBox,
  Zs as EditorCoreModule,
  Vs as EditorView,
  un as EnglishMenu,
  Gt as FixedPanel,
  kn as ManagementDragBox,
  Sn as ManagementMenu,
  yn as MuteMenu,
  sn as ReadMenu,
  fn as RhythmMenu,
  $n as SensitiveDragBox,
  xn as SensitiveMenu,
  rn as SpeakerMenu,
  bn as SpecialDragBox,
  gn as SpecialMenu,
  On as TryPlay,
  Js as default,
  G as genRandomStr,
  hn as playSound
};

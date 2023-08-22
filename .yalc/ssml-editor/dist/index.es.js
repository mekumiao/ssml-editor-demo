var Xn = Object.defineProperty;
var zn = (e, n, t) => n in e ? Xn(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var K = (e, n, t) => (zn(e, typeof n != "symbol" ? n + "" : n, t), t);
import { SlateEditor as ee, SlateElement as qn, DomEditor as B, SlateText as Yn, SlateTransforms as L, SlatePath as Qn, SlateRange as Z, createEditor as Jn, Boot as Y } from "@wangeditor/editor";
import { defineComponent as N, inject as Pe, openBlock as k, createElementBlock as U, normalizeClass as De, withModifiers as q, createElementVNode as $, toDisplayString as se, ref as w, createBlock as j, unref as b, withCtx as h, createVNode as u, renderSlot as re, isRef as Zn, toRefs as es, customRef as ts, getCurrentInstance as rn, onMounted as G, nextTick as ns, getCurrentScope as ss, onScopeDispose as os, computed as X, watch as oe, watchEffect as ls, createTextVNode as C, Fragment as me, renderList as Oe, pushScopeId as Se, popScopeId as Ie, Teleport as at, normalizeStyle as Le, onUnmounted as z, withDirectives as ut, vShow as ct, shallowRef as H, createCommentVNode as rs, toRaw as is, provide as as } from "vue";
import { ElForm as dt, ElInput as ft, ElPopover as le, ElMenu as us, ElMenuItem as Xe, ElSelect as Et, ElOption as Ct, ElIcon as cs, ElTag as ds, ElButton as ae, ElDialog as fs } from "element-plus";
import { Search as ps, Minus as ms, Share as vs } from "@element-plus/icons-vue";
const hs = "ssml-editor", _s = "ssml-editor-config", _e = {
  EDITOR: hs,
  EDITORCONFIG: _s
}, gs = "emitter-ediror-error", ys = "emitter-bgm-menu-click", bs = "emitter-bgm-drag-box-submit", ws = "emitter-conversion-menu-click", xs = "emitter-conversion-drag-box-submit", Es = "emitter-management-menu-click", Cs = "emitter-management-drag-box-submit", Ss = "emitter-special-menu-click", Is = "emitter-special-drag-box-submit", $s = "emitter-sensitive-menu-click", Os = "emitter-sensitive-drag-box-submit", M = {
  ERROR: gs,
  BGM_MENU_CLICK: ys,
  BGM_DRAG_BOX_SUBMIT: bs,
  CONVERSION_MENU_CLICK: ws,
  CONVERSION_DRAG_BOX_SUBMIT: xs,
  MANAGEMENT_MENU_CLICK: Es,
  MANAGEMENT_DRAG_BOX_SUBMIT: Cs,
  SPECIAL_MENU_CLICK: Ss,
  SPECIAL_DRAG_BOX_SUBMIT: Is,
  SENSITIVE_MENU_CLICK: $s,
  SENSITIVE_DRAG_BOX_SUBMIT: Os
}, Ms = "wangeditor-update-bgm", Ts = "wangeditor-remove-bgm", Rs = "wangeditor-update-speak", de = {
  UPDATE_BGM: Ms,
  REMOVE_BGM: Ts,
  UPDATE_SPEAK: Rs
}, Ds = { class: "bar-button-icon" }, ks = {
  class: "fw-normal",
  style: { "font-size": "0.85rem" }
}, Ns = /* @__PURE__ */ N({
  __name: "bar-button",
  props: {
    text: {},
    icon: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = e, s = Pe(_e.EDITOR), o = () => {
      t.disabled || n("click", s.value);
    };
    return (l, r) => (k(), U("div", {
      class: De(["bar-button px-2 py-1", { disabled: l.disabled }]),
      onClick: o,
      onMousedown: r[0] || (r[0] = q(() => {
      }, ["prevent"]))
    }, [
      $("div", Ds, [
        $("span", {
          class: De(["fs-3 iconfont-moyin", [`moyin-icon_${l.icon}`]])
        }, null, 2)
      ]),
      $("div", ks, se(l.text), 1)
    ], 34));
  }
});
const W = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [s, o] of n)
    t[s] = o;
  return t;
}, F = /* @__PURE__ */ W(Ns, [["__scopeId", "data-v-7741060a"]]);
const pt = /* @__PURE__ */ N({
  __name: "bar-input",
  props: {
    type: {}
  },
  emits: ["submit"],
  setup(e, { expose: n, emit: t }) {
    const s = w(""), o = w();
    function l() {
      o.value.focus();
    }
    function r() {
      t("submit", s.value), s.value = "";
    }
    return n({
      focus: l
    }), (i, a) => (k(), j(b(dt), {
      class: "flex flex-row",
      onSubmit: q(r, ["prevent"])
    }, {
      default: h(() => [
        u(b(ft), {
          type: i.type,
          ref_key: "inputRef",
          ref: o,
          modelValue: s.value,
          "onUpdate:modelValue": a[0] || (a[0] = (m) => s.value = m)
        }, null, 8, ["type", "modelValue"])
      ]),
      _: 1
    }, 8, ["onSubmit"]));
  }
});
const As = /* @__PURE__ */ N({
  __name: "bar-popover",
  props: {
    visible: { type: Boolean },
    trigger: {},
    hideAfter: {},
    width: {}
  },
  emits: ["update:visible"],
  setup(e) {
    return (n, t) => (k(), j(b(le), {
      hideAfter: n.hideAfter,
      width: n.width,
      visible: n.visible,
      trigger: n.trigger,
      "onUpdate:visible": t[0] || (t[0] = (s) => n.$emit("update:visible", s))
    }, {
      reference: h(() => [
        re(n.$slots, "reference")
      ]),
      default: h(() => [
        re(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["hideAfter", "width", "visible", "trigger"]));
  }
});
function Ve(e) {
  return ss() ? (os(e), !0) : !1;
}
function Q(e) {
  return typeof e == "function" ? e() : b(e);
}
const ke = typeof window < "u", Ps = (e) => e != null, Me = () => {
};
var Ls = Object.defineProperty, Vs = Object.defineProperties, Bs = Object.getOwnPropertyDescriptors, St = Object.getOwnPropertySymbols, Us = Object.prototype.hasOwnProperty, js = Object.prototype.propertyIsEnumerable, It = (e, n, t) => n in e ? Ls(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Gs = (e, n) => {
  for (var t in n || (n = {}))
    Us.call(n, t) && It(e, t, n[t]);
  if (St)
    for (var t of St(n))
      js.call(n, t) && It(e, t, n[t]);
  return e;
}, Fs = (e, n) => Vs(e, Bs(n));
function Hs(e, n = {}) {
  if (!Zn(e))
    return es(e);
  const t = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const s in e.value)
    t[s] = ts(() => ({
      get() {
        return e.value[s];
      },
      set(o) {
        var l;
        if ((l = Q(n.replaceRef)) != null ? l : !0)
          if (Array.isArray(e.value)) {
            const i = [...e.value];
            i[s] = o, e.value = i;
          } else {
            const i = Fs(Gs({}, e.value), { [s]: o });
            Object.setPrototypeOf(i, Object.getPrototypeOf(e.value)), e.value = i;
          }
        else
          e.value[s] = o;
      }
    }));
  return t;
}
function an(e, n = !0) {
  rn() ? G(e) : n ? e() : ns(e);
}
function J(e) {
  var n;
  const t = Q(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const ie = ke ? window : void 0;
function ve(...e) {
  let n, t, s, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([t, s, o] = e, n = ie) : [n, t, s, o] = e, !n)
    return Me;
  Array.isArray(t) || (t = [t]), Array.isArray(s) || (s = [s]);
  const l = [], r = () => {
    l.forEach((d) => d()), l.length = 0;
  }, i = (d, p, v, x) => (d.addEventListener(p, v, x), () => d.removeEventListener(p, v, x)), a = oe(
    () => [J(n), Q(o)],
    ([d, p]) => {
      r(), d && l.push(
        ...t.flatMap((v) => s.map((x) => i(d, v, x, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), m = () => {
    a(), r();
  };
  return Ve(m), m;
}
function Ws() {
  const e = w(!1);
  return rn() && G(() => {
    e.value = !0;
  }), e;
}
function mt(e) {
  const n = Ws();
  return X(() => (n.value, !!e()));
}
function Ks(e, n = {}) {
  const { window: t = ie } = n, s = mt(() => t && "matchMedia" in t && typeof t.matchMedia == "function");
  let o;
  const l = w(!1), r = (m) => {
    l.value = m.matches;
  }, i = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", r) : o.removeListener(r));
  }, a = ls(() => {
    s.value && (i(), o = t.matchMedia(Q(e)), "addEventListener" in o ? o.addEventListener("change", r) : o.addListener(r), l.value = o.matches);
  });
  return Ve(() => {
    a(), i(), o = void 0;
  }), l;
}
var Xs = Object.defineProperty, zs = Object.defineProperties, qs = Object.getOwnPropertyDescriptors, $t = Object.getOwnPropertySymbols, Ys = Object.prototype.hasOwnProperty, Qs = Object.prototype.propertyIsEnumerable, Ot = (e, n, t) => n in e ? Xs(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Js = (e, n) => {
  for (var t in n || (n = {}))
    Ys.call(n, t) && Ot(e, t, n[t]);
  if ($t)
    for (var t of $t(n))
      Qs.call(n, t) && Ot(e, t, n[t]);
  return e;
}, Zs = (e, n) => zs(e, qs(n));
function Be(e, n = {}) {
  var t, s;
  const {
    pointerTypes: o,
    preventDefault: l,
    stopPropagation: r,
    exact: i,
    onMove: a,
    onEnd: m,
    onStart: d,
    initialValue: p,
    axis: v = "both",
    draggingElement: x = ie,
    handle: f = e
  } = n, c = w(
    (t = Q(p)) != null ? t : { x: 0, y: 0 }
  ), g = w(), S = (y) => o ? o.includes(y.pointerType) : !0, R = (y) => {
    Q(l) && y.preventDefault(), Q(r) && y.stopPropagation();
  }, _ = (y) => {
    if (!S(y) || Q(i) && y.target !== Q(e))
      return;
    const D = Q(e).getBoundingClientRect(), V = {
      x: y.clientX - D.left,
      y: y.clientY - D.top
    };
    (d == null ? void 0 : d(V, y)) !== !1 && (g.value = V, R(y));
  }, E = (y) => {
    if (!S(y) || !g.value)
      return;
    let { x: D, y: V } = c.value;
    (v === "x" || v === "both") && (D = y.clientX - g.value.x), (v === "y" || v === "both") && (V = y.clientY - g.value.y), c.value = {
      x: D,
      y: V
    }, a == null || a(c.value, y), R(y);
  }, O = (y) => {
    S(y) && g.value && (g.value = void 0, m == null || m(c.value, y), R(y));
  };
  if (ke) {
    const y = { capture: (s = n.capture) != null ? s : !0 };
    ve(f, "pointerdown", _, y), ve(x, "pointermove", E, y), ve(x, "pointerup", O, y);
  }
  return Zs(Js({}, Hs(c)), {
    position: c,
    isDragging: X(() => !!g.value),
    style: X(
      () => `left:${c.value.x}px;top:${c.value.y}px;`
    )
  });
}
var Mt = Object.getOwnPropertySymbols, eo = Object.prototype.hasOwnProperty, to = Object.prototype.propertyIsEnumerable, no = (e, n) => {
  var t = {};
  for (var s in e)
    eo.call(e, s) && n.indexOf(s) < 0 && (t[s] = e[s]);
  if (e != null && Mt)
    for (var s of Mt(e))
      n.indexOf(s) < 0 && to.call(e, s) && (t[s] = e[s]);
  return t;
};
function un(e, n, t = {}) {
  const s = t, { window: o = ie } = s, l = no(s, ["window"]);
  let r;
  const i = mt(() => o && "ResizeObserver" in o), a = () => {
    r && (r.disconnect(), r = void 0);
  }, m = X(
    () => Array.isArray(e) ? e.map((v) => J(v)) : [J(e)]
  ), d = oe(
    m,
    (v) => {
      if (a(), i.value && o) {
        r = new ResizeObserver(n);
        for (const x of v)
          x && r.observe(x, l);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), p = () => {
    a(), d();
  };
  return Ve(p), {
    isSupported: i,
    stop: p
  };
}
function $e(e, n = {}) {
  const {
    reset: t = !0,
    windowResize: s = !0,
    windowScroll: o = !0,
    immediate: l = !0
  } = n, r = w(0), i = w(0), a = w(0), m = w(0), d = w(0), p = w(0), v = w(0), x = w(0);
  function f() {
    const c = J(e);
    if (!c) {
      t && (r.value = 0, i.value = 0, a.value = 0, m.value = 0, d.value = 0, p.value = 0, v.value = 0, x.value = 0);
      return;
    }
    const g = c.getBoundingClientRect();
    r.value = g.height, i.value = g.bottom, a.value = g.left, m.value = g.right, d.value = g.top, p.value = g.width, v.value = g.x, x.value = g.y;
  }
  return un(e, f), oe(() => J(e), (c) => !c && f()), o && ve("scroll", f, { capture: !0, passive: !0 }), s && ve("resize", f, { passive: !0 }), an(() => {
    l && f();
  }), {
    height: r,
    bottom: i,
    left: a,
    right: m,
    top: d,
    width: p,
    x: v,
    y: x,
    update: f
  };
}
function vt(e, n = { width: 0, height: 0 }, t = {}) {
  const { window: s = ie, box: o = "content-box" } = t, l = X(() => {
    var a, m;
    return (m = (a = J(e)) == null ? void 0 : a.namespaceURI) == null ? void 0 : m.includes("svg");
  }), r = w(n.width), i = w(n.height);
  return un(
    e,
    ([a]) => {
      const m = o === "border-box" ? a.borderBoxSize : o === "content-box" ? a.contentBoxSize : a.devicePixelContentBoxSize;
      if (s && l.value) {
        const d = J(e);
        if (d) {
          const p = s.getComputedStyle(d);
          r.value = Number.parseFloat(p.width), i.value = Number.parseFloat(p.height);
        }
      } else if (m) {
        const d = Array.isArray(m) ? m : [m];
        r.value = d.reduce((p, { inlineSize: v }) => p + v, 0), i.value = d.reduce((p, { blockSize: v }) => p + v, 0);
      } else
        r.value = a.contentRect.width, i.value = a.contentRect.height;
    },
    t
  ), oe(
    () => J(e),
    (a) => {
      r.value = a ? n.width : 0, i.value = a ? n.height : 0;
    }
  ), {
    width: r,
    height: i
  };
}
function so(e, n, t = {}) {
  const {
    root: s,
    rootMargin: o = "0px",
    threshold: l = 0.1,
    window: r = ie,
    immediate: i = !0
  } = t, a = mt(() => r && "IntersectionObserver" in r), m = X(() => {
    const f = Q(e);
    return (Array.isArray(f) ? f : [f]).map(J).filter(Ps);
  });
  let d = Me;
  const p = w(i), v = a.value ? oe(
    () => [m.value, J(s), p.value],
    ([f, c]) => {
      if (d(), !p.value || !f.length)
        return;
      const g = new IntersectionObserver(
        n,
        {
          root: J(c),
          rootMargin: o,
          threshold: l
        }
      );
      f.forEach((S) => S && g.observe(S)), d = () => {
        g.disconnect(), d = Me;
      };
    },
    { immediate: i, flush: "post" }
  ) : Me, x = () => {
    d(), v(), p.value = !1;
  };
  return Ve(x), {
    isSupported: a,
    isActive: p,
    pause() {
      d(), p.value = !1;
    },
    resume() {
      p.value = !0;
    },
    stop: x
  };
}
function oo(e, { window: n = ie, scrollTarget: t } = {}) {
  const s = w(!1);
  return so(
    e,
    ([{ isIntersecting: o }]) => {
      s.value = o;
    },
    {
      root: t,
      window: n
    }
  ), s;
}
function ht(e = {}) {
  const {
    window: n = ie,
    initialWidth: t = Number.POSITIVE_INFINITY,
    initialHeight: s = Number.POSITIVE_INFINITY,
    listenOrientation: o = !0,
    includeScrollbar: l = !0
  } = e, r = w(t), i = w(s), a = () => {
    n && (l ? (r.value = n.innerWidth, i.value = n.innerHeight) : (r.value = n.document.documentElement.clientWidth, i.value = n.document.documentElement.clientHeight));
  };
  if (a(), an(a), ve("resize", a, { passive: !0 }), o) {
    const m = Ks("(orientation: portrait)");
    oe(m, () => a());
  }
  return { width: r, height: i };
}
const lo = (e) => (Se("data-v-fd90240d"), e = e(), Ie(), e), ro = { class: "search-content vh-50" }, io = { class: "ps-2 w-75" }, ao = { class: "menu" }, uo = { class: "flex flex-row pt-1" }, co = { class: "content-list pt-1 w-90" }, fo = ["onClick"], po = /* @__PURE__ */ lo(() => /* @__PURE__ */ $("span", { class: "iconfont icon-play" }, null, -1)), mo = /* @__PURE__ */ N({
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
    const t = e, s = w(), o = w(""), l = w(""), r = w(""), i = w(t.dataList || []), a = w("first"), m = oo(s);
    oe(m, (x) => {
      x && setTimeout(() => {
        var f;
        (f = s.value) == null || f.focus();
      }, 100);
    }), G(async () => {
      await d();
    });
    async function d() {
      i.value = await t.fetch({
        search: o.value,
        menuKey: a.value,
        scene: l.value,
        style: r.value
      });
    }
    function p(x) {
      a.value = x, d();
    }
    function v(x) {
      n("submit", x);
    }
    return (x, f) => (k(), U("div", ro, [
      $("div", io, [
        u(b(dt), {
          onSubmit: q(d, ["prevent"])
        }, {
          default: h(() => [
            u(b(ft), {
              ref_key: "searchInputRef",
              ref: s,
              placeholder: "搜索",
              modelValue: o.value,
              "onUpdate:modelValue": f[0] || (f[0] = (c) => o.value = c),
              "suffix-icon": b(ps)
            }, null, 8, ["modelValue", "suffix-icon"])
          ]),
          _: 1
        }, 8, ["onSubmit"])
      ]),
      $("div", ao, [
        u(b(us), {
          mode: "horizontal",
          "default-active": "first",
          onSelect: f[1] || (f[1] = (c) => p(c))
        }, {
          default: h(() => [
            u(b(Xe), { index: "first" }, {
              default: h(() => [
                C(se(x.menuItemLabel.first), 1)
              ]),
              _: 1
            }),
            u(b(Xe), { index: "second" }, {
              default: h(() => [
                C(se(x.menuItemLabel.second), 1)
              ]),
              _: 1
            }),
            u(b(Xe), { index: "last" }, {
              default: h(() => [
                C(se(x.menuItemLabel.last), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      $("div", uo, [
        u(b(Et), {
          modelValue: l.value,
          "onUpdate:modelValue": f[2] || (f[2] = (c) => l.value = c),
          onChange: d,
          class: "m-1",
          size: "large"
        }, {
          default: h(() => [
            (k(!0), U(me, null, Oe(x.scenes, (c) => (k(), j(b(Ct), {
              key: c.value,
              label: c.label,
              value: c.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        u(b(Et), {
          modelValue: r.value,
          "onUpdate:modelValue": f[3] || (f[3] = (c) => r.value = c),
          onChange: d,
          class: "m-1",
          size: "large"
        }, {
          default: h(() => [
            (k(!0), U(me, null, Oe(x.styles, (c) => (k(), j(b(Ct), {
              key: c.value,
              label: c.label,
              value: c.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      $("div", co, [
        (k(!0), U(me, null, Oe(i.value, (c, g) => (k(), U("div", {
          onClick: (S) => v(c),
          class: "content-list-item clickable ps-3",
          key: g
        }, [
          po,
          $("span", null, se(c.label), 1)
        ], 8, fo))), 128))
      ])
    ]));
  }
});
const ge = /* @__PURE__ */ W(mo, [["__scopeId", "data-v-fd90240d"]]), vo = /* @__PURE__ */ N({
  __name: "fixed-panel",
  emits: ["dragging"],
  setup(e, { emit: n }) {
    const t = w(), s = ke ? window.innerWidth : 200, o = ke ? window.innerHeight : 200, { x: l, y: r } = Be(t, {
      initialValue: { x: s - 100, y: o / 2 },
      preventDefault: !0,
      onStart: () => {
        n("dragging", !0);
      },
      onEnd: () => {
        n("dragging", !1);
      }
    }), { width: i, height: a } = vt(t), { width: m, height: d } = ht(), p = X(() => ({
      x: m.value - i.value,
      y: d.value - a.value
    })), v = X(() => {
      if (!p.value)
        return x(l.value, r.value);
      const f = l.value < 5 ? 5 : l.value > p.value.x ? p.value.x - 5 : l.value, c = r.value < 5 ? 5 : r.value > p.value.y ? p.value.y - 5 : r.value;
      return x(f, c);
    });
    function x(f, c) {
      return `left:${f}px;top:${c}px`;
    }
    return (f, c) => (k(), j(at, { to: "body" }, [
      $("div", {
        ref_key: "boxRef",
        ref: t,
        class: "fixed-panel z-3 user-select-none",
        style: Le([{ position: "fixed" }, v.value])
      }, [
        re(f.$slots, "default")
      ], 4)
    ]));
  }
});
function Tt(e, n) {
  return `left:${e}px;top:${n}px`;
}
function cn(e, n) {
  const { x: t, y: s } = n, { width: o, height: l } = vt(e), { width: r, height: i } = ht(), a = X(() => ({
    x: r.value - o.value,
    y: i.value - l.value
  }));
  return { style: X(() => {
    if (!a.value)
      return Tt(t.value, s.value);
    const d = t.value < 5 ? 5 : t.value > a.value.x ? a.value.x - 5 : t.value, p = s.value < 5 ? 5 : s.value > a.value.y ? a.value.y - 5 : s.value;
    return Tt(d, p);
  }) };
}
const ho = {}, _o = { class: "content" };
function go(e, n) {
  return k(), U("div", _o, [
    re(e.$slots, "default", {}, void 0, !0)
  ]);
}
const dn = /* @__PURE__ */ W(ho, [["render", go], ["__scopeId", "data-v-7beae5b9"]]), yo = {}, bo = { class: "bar-wrapper-item" };
function wo(e, n) {
  return k(), U("div", bo, [
    re(e.$slots, "default")
  ]);
}
const xo = /* @__PURE__ */ W(yo, [["render", wo]]), Eo = { class: "bar-wrapper-group" }, Co = { class: "group-items" }, So = /* @__PURE__ */ N({
  __name: "bar-wrapper-group",
  props: {
    divider: {}
  },
  setup(e) {
    return (n, t) => (k(), U("div", Eo, [
      $("div", Co, [
        re(n.$slots, "default", {}, void 0, !0)
      ]),
      $("div", {
        class: De(["divider", [n.divider]])
      }, null, 2)
    ]));
  }
});
const ue = /* @__PURE__ */ W(So, [["__scopeId", "data-v-3a7abad9"]]), Io = /* @__PURE__ */ N({
  __name: "drag-box",
  props: {
    visible: { type: Boolean },
    position: {}
  },
  emits: ["update:visible", "update:position"],
  setup(e, { emit: n }) {
    const t = e, s = w(), { x: o, y: l } = Be(s, {
      initialValue: t.position
    }), { width: r, height: i } = vt(s), { width: a, height: m } = ht();
    oe([o, l], ([g, S]) => {
      n("update:position", { x: g, y: S });
    });
    const d = X(() => ({
      x: a.value - r.value,
      y: m.value - i.value
    })), p = X(() => {
      const { x: g, y: S } = t.position;
      if (!d.value)
        return c(g, S);
      const R = g < 5 ? 5 : g > d.value.x ? d.value.x - 5 : g, _ = S < 5 ? 5 : S > d.value.y ? d.value.y - 5 : S;
      return c(R, _);
    });
    G(() => {
      window.addEventListener("keydown", f);
    }), z(() => {
      window.addEventListener("keydown", f);
    });
    function v() {
      n("update:visible", !1);
    }
    function x(g) {
      const S = g.target;
      s.value && !s.value.contains(S) && t.visible && n("update:visible", !1);
    }
    function f(g) {
      g.code === "Escape" && t.visible && v();
    }
    function c(g, S) {
      return `left:${g}px;top:${S}px`;
    }
    return (g, S) => (k(), j(at, { to: "body" }, [
      ut($("div", {
        class: "drag-box-mask user-select-none",
        onClick: x
      }, [
        $("div", {
          ref_key: "boxRef",
          ref: s,
          class: "card shadow brag-box",
          style: Le([{ position: "fixed" }, p.value])
        }, [
          $("div", { class: "w-100 text-end me-2" }, [
            $("span", {
              onClick: v,
              class: "btn iconfont icon-close fs-5"
            })
          ]),
          re(g.$slots, "default", {}, void 0, !0)
        ], 4)
      ], 512), [
        [ct, g.visible]
      ])
    ]));
  }
});
const ye = /* @__PURE__ */ W(Io, [["__scopeId", "data-v-ca198ced"]]), $o = {
  install(e) {
    e.component("BarButton", F), e.component("BarInput", pt), e.component("BarPopover", As), e.component("BarSearch", ge), e.component("FixedPanel", vo), e.component("BarWrapper", dn), e.component("BarWrapperItem", xo), e.component("BarWrapperGroup", ue), e.component("DragBox", ye);
  }
};
var pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var st = { exports: {} }, fn = { exports: {} }, Oo = void 0, pn = function(e) {
  return e !== Oo && e !== null;
}, Mo = pn, To = {
  object: !0,
  function: !0,
  undefined: !0
  /* document.all */
}, Ro = function(e) {
  return Mo(e) ? hasOwnProperty.call(To, typeof e) : !1;
}, Do = Ro, ko = function(e) {
  if (!Do(e))
    return !1;
  try {
    return e.constructor ? e.constructor.prototype === e : !1;
  } catch {
    return !1;
  }
}, No = ko, Ao = function(e) {
  if (typeof e != "function" || !hasOwnProperty.call(e, "length"))
    return !1;
  try {
    if (typeof e.length != "number" || typeof e.call != "function" || typeof e.apply != "function")
      return !1;
  } catch {
    return !1;
  }
  return !No(e);
}, Po = Ao, Lo = /^\s*class[\s{/}]/, Vo = Function.prototype.toString, Bo = function(e) {
  return !(!Po(e) || Lo.test(Vo.call(e)));
}, Uo = function() {
  var e = Object.assign, n;
  return typeof e != "function" ? !1 : (n = { foo: "raz" }, e(n, { bar: "dwa" }, { trzy: "trzy" }), n.foo + n.bar + n.trzy === "razdwatrzy");
}, ze, Rt;
function jo() {
  return Rt || (Rt = 1, ze = function() {
    try {
      return Object.keys("primitive"), !0;
    } catch {
      return !1;
    }
  }), ze;
}
var Go = function() {
}, Fo = Go(), gt = function(e) {
  return e !== Fo && e !== null;
}, qe, Dt;
function Ho() {
  if (Dt)
    return qe;
  Dt = 1;
  var e = gt, n = Object.keys;
  return qe = function(t) {
    return n(e(t) ? Object(t) : t);
  }, qe;
}
var Ye, kt;
function Wo() {
  return kt || (kt = 1, Ye = jo()() ? Object.keys : Ho()), Ye;
}
var Qe, Nt;
function Ko() {
  if (Nt)
    return Qe;
  Nt = 1;
  var e = gt;
  return Qe = function(n) {
    if (!e(n))
      throw new TypeError("Cannot use null or undefined");
    return n;
  }, Qe;
}
var Je, At;
function Xo() {
  if (At)
    return Je;
  At = 1;
  var e = Wo(), n = Ko(), t = Math.max;
  return Je = function(s, o) {
    var l, r, i = t(arguments.length, 2), a;
    for (s = Object(n(s)), a = function(m) {
      try {
        s[m] = o[m];
      } catch (d) {
        l || (l = d);
      }
    }, r = 1; r < i; ++r)
      o = arguments[r], e(o).forEach(a);
    if (l !== void 0)
      throw l;
    return s;
  }, Je;
}
var zo = Uo() ? Object.assign : Xo(), qo = gt, Yo = Array.prototype.forEach, Qo = Object.create, Jo = function(e, n) {
  var t;
  for (t in e)
    n[t] = e[t];
}, Zo = function(e) {
  var n = Qo(null);
  return Yo.call(arguments, function(t) {
    qo(t) && Jo(Object(t), n);
  }), n;
}, Ze = "razdwatrzy", el = function() {
  return typeof Ze.contains != "function" ? !1 : Ze.contains("dwa") === !0 && Ze.contains("foo") === !1;
}, et, Pt;
function tl() {
  if (Pt)
    return et;
  Pt = 1;
  var e = String.prototype.indexOf;
  return et = function(n) {
    return e.call(this, n, arguments[1]) > -1;
  }, et;
}
var nl = el() ? String.prototype.contains : tl(), Te = pn, Lt = Bo, mn = zo, vn = Zo, xe = nl, sl = fn.exports = function(e, n) {
  var t, s, o, l, r;
  return arguments.length < 2 || typeof e != "string" ? (l = n, n = e, e = null) : l = arguments[2], Te(e) ? (t = xe.call(e, "c"), s = xe.call(e, "e"), o = xe.call(e, "w")) : (t = o = !0, s = !1), r = { value: n, configurable: t, enumerable: s, writable: o }, l ? mn(vn(l), r) : r;
};
sl.gs = function(e, n, t) {
  var s, o, l, r;
  return typeof e != "string" ? (l = t, t = n, n = e, e = null) : l = arguments[3], Te(n) ? Lt(n) ? Te(t) ? Lt(t) || (l = t, t = void 0) : t = void 0 : (l = n, n = t = void 0) : n = void 0, Te(e) ? (s = xe.call(e, "c"), o = xe.call(e, "e")) : (s = !0, o = !1), r = { get: n, set: t, configurable: s, enumerable: o }, l ? mn(vn(l), r) : r;
};
var ol = fn.exports, ll = function(e) {
  if (typeof e != "function")
    throw new TypeError(e + " is not a function");
  return e;
};
(function(e, n) {
  var t = ol, s = ll, o = Function.prototype.apply, l = Function.prototype.call, r = Object.create, i = Object.defineProperty, a = Object.defineProperties, m = Object.prototype.hasOwnProperty, d = { configurable: !0, enumerable: !1, writable: !0 }, p, v, x, f, c, g, S;
  p = function(R, _) {
    var E;
    return s(_), m.call(this, "__ee__") ? E = this.__ee__ : (E = d.value = r(null), i(this, "__ee__", d), d.value = null), E[R] ? typeof E[R] == "object" ? E[R].push(_) : E[R] = [E[R], _] : E[R] = _, this;
  }, v = function(R, _) {
    var E, O;
    return s(_), O = this, p.call(this, R, E = function() {
      x.call(O, R, E), o.call(_, this, arguments);
    }), E.__eeOnceListener__ = _, this;
  }, x = function(R, _) {
    var E, O, y, D;
    if (s(_), !m.call(this, "__ee__"))
      return this;
    if (E = this.__ee__, !E[R])
      return this;
    if (O = E[R], typeof O == "object")
      for (D = 0; y = O[D]; ++D)
        (y === _ || y.__eeOnceListener__ === _) && (O.length === 2 ? E[R] = O[D ? 0 : 1] : O.splice(D, 1));
    else
      (O === _ || O.__eeOnceListener__ === _) && delete E[R];
    return this;
  }, f = function(R) {
    var _, E, O, y, D;
    if (m.call(this, "__ee__") && (y = this.__ee__[R], !!y))
      if (typeof y == "object") {
        for (E = arguments.length, D = new Array(E - 1), _ = 1; _ < E; ++_)
          D[_ - 1] = arguments[_];
        for (y = y.slice(), _ = 0; O = y[_]; ++_)
          o.call(O, this, D);
      } else
        switch (arguments.length) {
          case 1:
            l.call(y, this);
            break;
          case 2:
            l.call(y, this, arguments[1]);
            break;
          case 3:
            l.call(y, this, arguments[1], arguments[2]);
            break;
          default:
            for (E = arguments.length, D = new Array(E - 1), _ = 1; _ < E; ++_)
              D[_ - 1] = arguments[_];
            o.call(y, this, D);
        }
  }, c = {
    on: p,
    once: v,
    off: x,
    emit: f
  }, g = {
    on: t(p),
    once: t(v),
    off: t(x),
    emit: t(f)
  }, S = a({}, g), e.exports = n = function(R) {
    return R == null ? r(S) : a(Object(R), g);
  }, n.methods = c;
})(st, st.exports);
var rl = st.exports;
const il = /* @__PURE__ */ _t(rl), T = il();
function te(e, n, t) {
  const [s] = ee.nodes(e, {
    at: [],
    match: (o) => !qn.isElement(o) || !B.checkNodeType(o, n) ? !1 : o.domId === t
  });
  return s;
}
function be(e, n, t) {
  const s = ee.previous(e, {
    at: n[1],
    match: (o) => Yn.isText(o)
  });
  s != null && (L.insertText(e, t(n[0]), {
    at: ee.end(e, s[1])
  }), L.delete(e, { at: Qn.next(s[1]) }));
}
function Vt(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function yt(e, n) {
  e === void 0 && (e = {}), n === void 0 && (n = {}), Object.keys(n).forEach(function(t) {
    typeof e[t] > "u" ? e[t] = n[t] : Vt(n[t]) && Vt(e[t]) && Object.keys(n[t]).length > 0 && yt(e[t], n[t]);
  });
}
var hn = {
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
function bt() {
  var e = typeof document < "u" ? document : {};
  return yt(e, hn), e;
}
var al = {
  document: hn,
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
function _n() {
  var e = typeof window < "u" ? window : {};
  return yt(e, al), e;
}
function ul(e, n) {
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n;
}
function ot(e) {
  return ot = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, ot(e);
}
function Ne(e, n) {
  return Ne = Object.setPrototypeOf || function(s, o) {
    return s.__proto__ = o, s;
  }, Ne(e, n);
}
function cl() {
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
function Re(e, n, t) {
  return cl() ? Re = Reflect.construct : Re = function(o, l, r) {
    var i = [null];
    i.push.apply(i, l);
    var a = Function.bind.apply(o, i), m = new a();
    return r && Ne(m, r.prototype), m;
  }, Re.apply(null, arguments);
}
function dl(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function lt(e) {
  var n = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return lt = function(s) {
    if (s === null || !dl(s))
      return s;
    if (typeof s != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof n < "u") {
      if (n.has(s))
        return n.get(s);
      n.set(s, o);
    }
    function o() {
      return Re(s, arguments, ot(this).constructor);
    }
    return o.prototype = Object.create(s.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Ne(o, s);
  }, lt(e);
}
function fl(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pl(e) {
  var n = e.__proto__;
  Object.defineProperty(e, "__proto__", {
    get: function() {
      return n;
    },
    set: function(s) {
      n.__proto__ = s;
    }
  });
}
var ce = /* @__PURE__ */ function(e) {
  ul(n, e);
  function n(t) {
    var s;
    return s = e.call.apply(e, [this].concat(t)) || this, pl(fl(s)), s;
  }
  return n;
}(/* @__PURE__ */ lt(Array));
function wt(e) {
  e === void 0 && (e = []);
  var n = [];
  return e.forEach(function(t) {
    Array.isArray(t) ? n.push.apply(n, wt(t)) : n.push(t);
  }), n;
}
function ml(e) {
  for (var n = [], t = 0; t < e.length; t += 1)
    n.indexOf(e[t]) === -1 && n.push(e[t]);
  return n;
}
function vl(e) {
  return e.toLowerCase().replace(/-(.)/g, function(n, t) {
    return t.toUpperCase();
  });
}
function hl(e, n) {
  if (typeof e != "string")
    return [e];
  for (var t = [], s = n.querySelectorAll(e), o = 0; o < s.length; o += 1)
    t.push(s[o]);
  return t;
}
function A(e, n) {
  var t = _n(), s = bt(), o = [];
  if (!n && e instanceof ce)
    return e;
  if (!e)
    return new ce(o);
  if (typeof e == "string") {
    var l = e.trim();
    if (l.indexOf("<") >= 0 && l.indexOf(">") >= 0) {
      var r = "div";
      l.indexOf("<li") === 0 && (r = "ul"), l.indexOf("<tr") === 0 && (r = "tbody"), (l.indexOf("<td") === 0 || l.indexOf("<th") === 0) && (r = "tr"), l.indexOf("<tbody") === 0 && (r = "table"), l.indexOf("<option") === 0 && (r = "select");
      var i = s.createElement(r);
      i.innerHTML = l;
      for (var a = 0; a < i.childNodes.length; a += 1)
        o.push(i.childNodes[a]);
    } else
      o = hl(e.trim(), n || s);
  } else if (e.nodeType || e === t || e === s)
    o.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof ce)
      return e;
    o = e;
  }
  return new ce(ml(o));
}
A.fn = ce.prototype;
function Bt() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  var s = wt(n.map(function(o) {
    return o.split(" ");
  }));
  return this.forEach(function(o) {
    var l;
    (l = o.classList).add.apply(l, s);
  }), this;
}
function Ut() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  var s = wt(n.map(function(o) {
    return o.split(" ");
  }));
  return this.forEach(function(o) {
    var l;
    (l = o.classList).remove.apply(l, s);
  }), this;
}
function jt(e, n) {
  if (arguments.length === 1 && typeof e == "string")
    return this[0] ? this[0].getAttribute(e) : void 0;
  for (var t = 0; t < this.length; t += 1)
    if (arguments.length === 2)
      this[t].setAttribute(e, n);
    else
      for (var s in e)
        this[t][s] = e[s], this[t].setAttribute(s, e[s]);
  return this;
}
function Gt() {
  var e = this[0];
  if (e) {
    var n = {};
    if (e.dataset)
      for (var t in e.dataset)
        n[t] = e.dataset[t];
    else
      for (var s = 0; s < e.attributes.length; s += 1) {
        var o = e.attributes[s];
        o.name.indexOf("data-") >= 0 && (n[vl(o.name.split("data-")[1])] = o.value);
      }
    for (var l in n)
      n[l] === "false" ? n[l] = !1 : n[l] === "true" ? n[l] = !0 : parseFloat(n[l]) === n[l] * 1 && (n[l] *= 1);
    return n;
  }
}
function Ft(e) {
  if (typeof e > "u") {
    var n = this[0];
    if (!n)
      return;
    if (n.multiple && n.nodeName.toLowerCase() === "select") {
      for (var t = [], s = 0; s < n.selectedOptions.length; s += 1)
        t.push(n.selectedOptions[s].value);
      return t;
    }
    return n.value;
  }
  for (var o = 0; o < this.length; o += 1) {
    var l = this[o];
    if (Array.isArray(e) && l.multiple && l.nodeName.toLowerCase() === "select")
      for (var r = 0; r < l.options.length; r += 1)
        l.options[r].selected = e.indexOf(l.options[r].value) >= 0;
    else
      l.value = e;
  }
  return this;
}
function Ht() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  var s = n[0], o = n[1], l = n[2], r = n[3];
  typeof n[1] == "function" && (s = n[0], l = n[1], r = n[2], o = void 0), r || (r = !1);
  function i(c) {
    var g = c.target;
    if (g) {
      var S = c.target.dom7EventData || [];
      if (S.indexOf(c) < 0 && S.unshift(c), A(g).is(o))
        l.apply(g, S);
      else
        for (var R = A(g).parents(), _ = 0; _ < R.length; _ += 1)
          A(R[_]).is(o) && l.apply(R[_], S);
    }
  }
  function a(c) {
    var g = c && c.target ? c.target.dom7EventData || [] : [];
    g.indexOf(c) < 0 && g.unshift(c), l.apply(this, g);
  }
  for (var m = s.split(" "), d, p = 0; p < this.length; p += 1) {
    var v = this[p];
    if (o)
      for (d = 0; d < m.length; d += 1) {
        var f = m[d];
        v.dom7LiveListeners || (v.dom7LiveListeners = {}), v.dom7LiveListeners[f] || (v.dom7LiveListeners[f] = []), v.dom7LiveListeners[f].push({
          listener: l,
          proxyListener: i
        }), v.addEventListener(f, i, r);
      }
    else
      for (d = 0; d < m.length; d += 1) {
        var x = m[d];
        v.dom7Listeners || (v.dom7Listeners = {}), v.dom7Listeners[x] || (v.dom7Listeners[x] = []), v.dom7Listeners[x].push({
          listener: l,
          proxyListener: a
        }), v.addEventListener(x, a, r);
      }
  }
  return this;
}
function Wt() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  var s = n[0], o = n[1], l = n[2], r = n[3];
  typeof n[1] == "function" && (s = n[0], l = n[1], r = n[2], o = void 0), r || (r = !1);
  for (var i = s.split(" "), a = 0; a < i.length; a += 1)
    for (var m = i[a], d = 0; d < this.length; d += 1) {
      var p = this[d], v = void 0;
      if (!o && p.dom7Listeners ? v = p.dom7Listeners[m] : o && p.dom7LiveListeners && (v = p.dom7LiveListeners[m]), v && v.length)
        for (var x = v.length - 1; x >= 0; x -= 1) {
          var f = v[x];
          l && f.listener === l || l && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === l ? (p.removeEventListener(m, f.proxyListener, r), v.splice(x, 1)) : l || (p.removeEventListener(m, f.proxyListener, r), v.splice(x, 1));
        }
    }
  return this;
}
function Kt() {
  for (var e = 0; e < this.length; e += 1)
    this[e].style.display = "none";
  return this;
}
function Xt(e) {
  return e ? (this.forEach(function(n, t) {
    e.apply(n, [n, t]);
  }), this) : this;
}
function zt(e) {
  if (typeof e > "u")
    return this[0] ? this[0].innerHTML : null;
  for (var n = 0; n < this.length; n += 1)
    this[n].innerHTML = e;
  return this;
}
function qt(e) {
  var n = _n(), t = bt(), s = this[0], o, l;
  if (!s || typeof e > "u")
    return !1;
  if (typeof e == "string") {
    if (s.matches)
      return s.matches(e);
    if (s.webkitMatchesSelector)
      return s.webkitMatchesSelector(e);
    if (s.msMatchesSelector)
      return s.msMatchesSelector(e);
    for (o = A(e), l = 0; l < o.length; l += 1)
      if (o[l] === s)
        return !0;
    return !1;
  }
  if (e === t)
    return s === t;
  if (e === n)
    return s === n;
  if (e.nodeType || e instanceof ce) {
    for (o = e.nodeType ? [e] : e, l = 0; l < o.length; l += 1)
      if (o[l] === s)
        return !0;
    return !1;
  }
  return !1;
}
function Yt() {
  for (var e, n = bt(), t = 0; t < arguments.length; t += 1) {
    e = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    for (var s = 0; s < this.length; s += 1)
      if (typeof e == "string") {
        var o = n.createElement("div");
        for (o.innerHTML = e; o.firstChild; )
          this[s].appendChild(o.firstChild);
      } else if (e instanceof ce)
        for (var l = 0; l < e.length; l += 1)
          this[s].appendChild(e[l]);
      else
        this[s].appendChild(e);
  }
  return this;
}
function Qt(e) {
  for (var n = [], t = 0; t < this.length; t += 1)
    for (var s = this[t].parentNode; s; )
      e ? A(s).is(e) && n.push(s) : n.push(s), s = s.parentNode;
  return A(n);
}
function Jt(e) {
  for (var n = [], t = 0; t < this.length; t += 1)
    for (var s = this[t].querySelectorAll(e), o = 0; o < s.length; o += 1)
      n.push(s[o]);
  return A(n);
}
function Zt(e) {
  for (var n = [], t = 0; t < this.length; t += 1)
    for (var s = this[t].children, o = 0; o < s.length; o += 1)
      (!e || A(s[o]).is(e)) && n.push(s[o]);
  return A(n);
}
var _l = "resize scroll".split(" ");
function gn(e) {
  function n() {
    for (var t = arguments.length, s = new Array(t), o = 0; o < t; o++)
      s[o] = arguments[o];
    if (typeof s[0] > "u") {
      for (var l = 0; l < this.length; l += 1)
        _l.indexOf(e) < 0 && (e in this[l] ? this[l][e]() : A(this[l]).trigger(e));
      return this;
    }
    return this.on.apply(this, [e].concat(s));
  }
  return n;
}
var en = gn("click"), tn = gn("focus");
Kt && (A.fn.hide = Kt);
Yt && (A.fn.append = Yt);
en && (A.fn.click = en);
Ht && (A.fn.on = Ht);
Wt && (A.fn.off = Wt);
tn && (A.fn.focus = tn);
jt && (A.fn.attr = jt);
Ft && (A.fn.val = Ft);
zt && (A.fn.html = zt);
Gt && (A.fn.dataset = Gt);
Bt && (A.fn.addClass = Bt);
Ut && (A.fn.removeClass = Ut);
Zt && (A.fn.children = Zt);
Xt && (A.fn.each = Xt);
Jt && (A.fn.find = Jt);
qt && (A.fn.is = qt);
Qt && (A.fn.parents = Qt);
let gl = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((n, t) => (t &= 63, t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t > 62 ? n += "-" : n += "_", n), "");
function yl(e = "r") {
  return `${e}-${gl()}`;
}
function yn(e) {
  if (window.navigator.userAgent.toLowerCase().indexOf("ie") >= 0) {
    const t = `<embed name="embedPlay" src="${e}"></embed>`;
    A("body").find("embed").length <= 0 && A("body").append(t);
    const s = document.embedPlay;
    s.volume = 50;
  } else {
    const t = `<audio id='audioPlay' src='${e}' hidden='true'>`;
    A("body").find("audio").length <= 0 && A("body").append(t), document.getElementById("audioPlay").play();
  }
}
class ne {
  constructor(n) {
    K(this, "oldSelection", null);
    K(this, "editor");
    this.editor = n;
  }
  genDomID() {
    return yl(`w-e-dom-${this.key}`);
  }
  selection() {
    const { selection: n } = this.editor;
    return n ?? this.oldSelection;
  }
  getValue() {
    const n = this.selection();
    return n == null ? "" : ee.string(this.editor, n);
  }
  record() {
    this.oldSelection = this.editor.selection;
  }
  restore() {
    this.oldSelection && this.editor.select(this.oldSelection);
  }
  isDisabled() {
    return this.selection() == null ? (T.emit(M.ERROR, "未选中编辑器"), !0) : !1;
  }
}
class Ue extends ne {
  constructor(t) {
    super(t);
    K(this, "key", "speaker");
    t.on("ssml-speaker-close", Ue.handleClose);
  }
  static handleClose(t, s) {
    const o = te(t, "ssml-speaker", s.domId);
    o && be(t, o, (l) => l.word);
  }
  getValue() {
    return super.getValue();
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const t = this.selection();
    if (Z.isCollapsed(t))
      return T.emit(M.ERROR, "请选中文本"), !0;
    const s = this.getValue();
    return s.length != 1 ? !0 : /^[\u4E00-\u9FA5]+$/gi.test(s) ? !1 : (T.emit(M.ERROR, "选中一个中文字符，并且有不能在其他语句之内"), !0);
  }
  exec(t) {
    if (this.isDisabled())
      return;
    const s = this.getValue();
    if (s == null)
      return;
    const o = {
      type: "ssml-speaker",
      domId: this.genDomID(),
      word: s,
      phoneme: t.value,
      remark: t.label,
      bgColor: "speaker",
      children: [{ text: "" }]
    };
    L.delete(this.editor), L.insertNodes(this.editor, o), this.editor.move(1);
  }
}
const bn = /* @__PURE__ */ N({
  setup() {
    const e = Pe(_e.EDITORCONFIG), n = H(), t = w([]), s = w(!1);
    function o() {
      s.value || (s.value = !0);
    }
    function l() {
      s.value && (s.value = !1);
    }
    async function r(i) {
      var m;
      if (n.value ?? (n.value = new Ue(i)), (m = n.value) != null && m.isDisabled())
        return;
      const a = n.value.getValue();
      if (a ? t.value = await e.fetchSpeaker(a) : t.value = [], t.value.length == 0)
        return T.emit(M.ERROR, "选中的字符没有不是多音字");
      o();
    }
    return () => u(le, {
      visible: s.value,
      "onUpdate:visible": (i) => s.value = i,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => u(F, {
        text: "多音字",
        icon: "speaker",
        onClick: r
      }, null),
      default: () => u("div", {
        class: "d-flex flex-column"
      }, [t.value.map(({
        label: i,
        value: a
      }) => u("div", {
        key: a,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          n.value && !n.value.isDisabled() && n.value.exec({
            label: i,
            value: a
          }), l();
        },
        onMousedown: q(() => {
        }, ["stop", "prevent"])
      }, [i]))])
    });
  }
});
class je extends ne {
  constructor(t) {
    super(t);
    K(this, "key", "continuous");
    t.on("ssml-continuous-close", je.handleClose);
  }
  static handleClose(t, s) {
    const o = te(t, "ssml-continuous", s.domId);
    o && be(t, o, (l) => l.value);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const t = this.selection();
    return Z.isCollapsed(t) ? (T.emit(M.ERROR, "请选择多个中文字符或者多个多个英文单词"), !0) : ee.string(this.editor, t).length < 2;
  }
  exec() {
    if (this.isDisabled())
      return;
    const t = this.getValue();
    if (t == null)
      return;
    const s = {
      type: "ssml-continuous",
      domId: this.genDomID(),
      children: [{ text: "" }],
      remark: "连读",
      value: t,
      bgColor: "continuous"
    };
    L.delete(this.editor), L.insertNodes(this.editor, s), this.editor.move(1);
  }
}
const wn = /* @__PURE__ */ N({
  setup() {
    const e = H();
    function n(t) {
      e.value ?? (e.value = new je(t)), e.value.exec();
    }
    return () => u(F, {
      text: "连读",
      icon: "continuous",
      onClick: n
    }, null);
  }
});
class xn extends ne {
  constructor(t) {
    super(t);
    K(this, "key", "read");
  }
  static handleClose(t, s) {
    const o = te(t, "ssml-read", s.domId);
    o && be(t, o, (l) => l.value);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const t = this.selection();
    return t == null ? !0 : Z.isCollapsed(t) ? (T.emit(M.ERROR, "请先选择文本"), !0) : !1;
  }
  exec(t) {
    if (this.isDisabled())
      return;
    const s = this.getValue();
    if (s == null)
      return;
    const o = {
      type: "ssml-read",
      domId: this.genDomID(),
      phoneme: t.value,
      remark: t.label,
      value: s,
      bgColor: "read",
      children: [{ text: "" }]
    };
    L.delete(this.editor), L.insertNodes(this.editor, o), this.editor.move(1);
  }
}
const bl = [{
  label: "重音",
  value: "重"
}, {
  label: "拖音",
  value: "拖"
}, {
  label: "重音+拖音",
  value: "重+拖"
}], En = /* @__PURE__ */ N({
  setup() {
    const e = H(), n = w(!1);
    function t() {
      n.value || (n.value = !0);
    }
    function s() {
      n.value && (n.value = !1);
    }
    function o(l) {
      e.value ?? (e.value = new xn(l)), !e.value.isDisabled() && t();
    }
    return () => u(le, {
      visible: n.value,
      "onUpdate:visible": (l) => n.value = l,
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
        onMousedown: q(() => {
        }, ["stop", "prevent"])
      }, [bl.map(({
        label: l,
        value: r
      }) => u("div", {
        key: r,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && e.value.exec({
            label: l,
            value: r
          }), s();
        },
        onMousedown: q(() => {
        }, ["stop", "prevent"])
      }, [l]))])
    });
  }
});
class Ge extends ne {
  constructor(t) {
    super(t);
    K(this, "key", "digital");
    t.on("ssml-digital-close", Ge.handleClose);
  }
  static handleClose(t, s) {
    const o = te(t, "ssml-digital", s.domId);
    o && be(t, o, (l) => l.value);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const t = this.selection();
    if (Z.isCollapsed(t))
      return T.emit(M.ERROR, "请选择纯数字文本"), !0;
    const s = ee.string(this.editor, t);
    return !!(s.length <= 0 || Number.isNaN(Number(s)));
  }
  exec(t) {
    if (this.isDisabled())
      return;
    const s = this.getValue();
    if (s == null)
      return;
    const o = {
      type: "ssml-digital",
      domId: this.genDomID(),
      interpretAs: t.value,
      remark: t.label,
      value: s,
      bgColor: "digital",
      children: [{ text: "" }]
    };
    L.delete(this.editor), L.insertNodes(this.editor, o), this.editor.move(1);
  }
}
const wl = [{
  value: "value",
  label: "读数值"
}, {
  value: "digits",
  label: "读数字"
}, {
  value: "telephone",
  label: "读手机号"
}], Cn = /* @__PURE__ */ N({
  setup() {
    const e = H(), n = w(!1);
    function t() {
      n.value = !n.value;
    }
    function s(o) {
      e.value ?? (e.value = new Ge(o)), !e.value.isDisabled() && t();
    }
    return () => u(le, {
      visible: n.value,
      "onUpdate:visible": (o) => n.value = o,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => u(F, {
        text: "数字符号",
        icon: "digital",
        onClick: s
      }, null),
      default: () => u("div", {
        class: "d-flex flex-column"
      }, [wl.map(({
        label: o,
        value: l
      }) => u("div", {
        key: l,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && e.value.exec({
            label: o,
            value: l
          }), t();
        },
        onMousedown: q(() => {
        }, ["stop", "prevent"])
      }, [o]))])
    });
  }
});
class Sn extends ne {
  constructor(t) {
    super(t);
    K(this, "key", "alias");
  }
  static handleClose(t, s) {
    const o = te(t, "ssml-alias", s.domId);
    o && be(t, o, (l) => l.value);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const t = this.selection();
    return Z.isCollapsed(t) ? (T.emit(M.ERROR, "选中一个中文字符，并且有不能在其他语句之内"), !0) : ee.string(this.editor, t).length <= 0;
  }
  exec(t) {
    if (this.isDisabled())
      return;
    const s = this.getValue();
    if (s == null)
      return;
    const o = {
      type: "ssml-alias",
      domId: this.genDomID(),
      remark: `(${t.value})`,
      alias: t.value,
      value: s,
      bgColor: "alias",
      children: [{ text: "" }]
    };
    L.delete(this.editor), L.insertNodes(this.editor, o), this.editor.move(1);
  }
}
const In = /* @__PURE__ */ N({
  setup() {
    const e = H(), n = w(), t = w(!1);
    function s() {
      t.value || (t.value = !0);
    }
    function o() {
      t.value && (t.value = !1);
    }
    async function l(i) {
      e.value ?? (e.value = new Sn(i)), !e.value.isDisabled() && (e.value.record(), s(), n.value.focus());
    }
    function r(i) {
      var a, m;
      o(), i && ((a = e.value) == null || a.restore(), (m = e.value) == null || m.exec({
        value: i,
        label: i
      }));
    }
    return () => u(le, {
      visible: t.value,
      "onUpdate:visible": (i) => t.value = i,
      trigger: "contextmenu",
      placement: "right-end",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => u(F, {
        text: "别名",
        icon: "alias",
        onClick: l
      }, null),
      default: () => u(pt, {
        ref: n,
        onSubmit: r
      }, null)
    });
  }
});
function xl(e) {
  const { selection: n } = e;
  if (n) {
    const [t, s] = Z.edges(n), o = ee.range(e, t, s), l = ee.string(e, o), r = l.trimEnd();
    if (r !== l) {
      const i = l.length - r.length, a = { ...s, offset: s.offset - i }, m = { ...n, anchor: t, focus: a };
      L.select(e, m);
    }
  }
}
class Fe extends ne {
  constructor(t) {
    super(t);
    K(this, "key", "english");
    t.on("ssml-english-close", Fe.handleClose);
  }
  static handleClose(t, s) {
    const o = te(t, "ssml-english", s.domId);
    o && be(t, o, (l) => l.word);
  }
  getValue() {
    return super.getValue();
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const t = this.selection();
    if (Z.isCollapsed(t))
      return !0;
    const s = ee.string(this.editor, t);
    return s.length <= 0 ? !0 : /^[A-Za-z]+$/gi.test(s) ? !1 : (T.emit(M.ERROR, "请选择英文单词"), !0);
  }
  exec(t) {
    if (this.isDisabled())
      return;
    const s = this.getValue();
    if (s == null)
      return;
    const o = {
      type: "ssml-english",
      domId: this.genDomID(),
      word: s,
      phoneme: t.value,
      remark: t.label,
      bgColor: "english",
      children: [{ text: "" }]
    };
    L.delete(this.editor), L.insertNodes(this.editor, o), this.editor.move(1);
  }
}
const $n = /* @__PURE__ */ N({
  setup() {
    const e = H(), n = Pe(_e.EDITORCONFIG), t = w([]), s = w(!1);
    function o() {
      s.value || (s.value = !0);
    }
    function l() {
      s.value && (s.value = !1);
    }
    async function r(i) {
      if (e.value ?? (e.value = new Fe(i)), xl(i), e.value.isDisabled())
        return;
      const a = e.value.getValue();
      if (a) {
        if (t.value = await n.fetchEnglish(a), t.value.length <= 0)
          return T.emit(M.ERROR, "找不到单词的音标");
        o();
      }
    }
    return () => u(le, {
      visible: s.value,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => u(F, {
        text: "音标",
        icon: "english",
        onClick: r
      }, null),
      default: () => u("div", {
        class: "d-flex flex-column"
      }, [t.value.map(({
        label: i,
        value: a
      }) => u("div", {
        key: a,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && e.value.exec({
            label: i,
            value: a
          }), l();
        },
        onMousedown: q(() => {
        }, ["stop", "prevent"])
      }, [i]))])
    });
  }
});
class He extends ne {
  constructor(t) {
    super(t);
    K(this, "key", "changespeed");
    t.on("ssml-changespeed-close", He.handleClose);
  }
  static handleClose(t, s) {
    const o = te(t, "ssml-changespeed", s.domId);
    o && L.unwrapNodes(t, { at: o[1] });
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const t = this.selection();
    return t == null ? !0 : Z.isCollapsed(t) ? (T.emit(M.ERROR, "请框选要变速的句子"), !0) : !1;
  }
  exec(t) {
    if (this.isDisabled())
      return;
    const s = this.getValue();
    if (s == null)
      return;
    const o = {
      type: "ssml-changespeed",
      domId: this.genDomID(),
      remark: t.label,
      rate: t.value,
      bgColor: "changespeed",
      children: [{ text: s }]
    };
    L.delete(this.editor), L.insertNodes(this.editor, o);
  }
}
const El = [{
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
}], On = /* @__PURE__ */ N({
  setup() {
    const e = H(), n = w(!1);
    function t() {
      n.value || (n.value = !0);
    }
    function s() {
      n.value && (n.value = !1);
    }
    async function o(l) {
      e.value ?? (e.value = new He(l)), !e.value.isDisabled() && t();
    }
    return () => u(le, {
      style: {
        padding: "0px"
      },
      visible: n.value,
      "onUpdate:visible": (l) => n.value = l,
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
      }, [El.map(({
        label: l,
        value: r
      }) => u("div", {
        key: r,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          var i;
          (i = e.value) == null || i.exec({
            label: l,
            value: r
          }), s();
        },
        onMousedown: q(() => {
        }, ["stop", "prevent"])
      }, [l]))])
    });
  }
});
class We extends ne {
  constructor(t) {
    super(t);
    K(this, "key", "rhythm");
    t.on("ssml-rhythm-close", We.handleClose);
  }
  static handleClose(t, s) {
    const o = te(t, "ssml-rhythm", s.domId);
    o && L.delete(t, { at: o[1] });
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const t = this.selection();
    return Z.isExpanded(t) ? (T.emit(M.ERROR, "不能选中文本"), !0) : !1;
  }
  exec(t) {
    if (this.isDisabled())
      return;
    const s = {
      type: "ssml-rhythm",
      domId: this.genDomID(),
      time: t.value,
      remark: t.label,
      bgColor: "rhythm",
      children: [{ text: "" }]
    };
    L.insertNodes(this.editor, s), this.editor.move(1);
  }
}
const Cl = [{
  value: "200ms",
  label: "短"
}, {
  value: "300ms",
  label: "中"
}, {
  value: "500ms",
  label: "长"
}], Mn = /* @__PURE__ */ N({
  setup() {
    const e = H(), n = w(!1);
    function t() {
      n.value || (n.value = !0);
    }
    function s() {
      n.value && (n.value = !1);
    }
    function o(l) {
      e.value ?? (e.value = new We(l)), !e.value.isDisabled() && t();
    }
    return () => u(le, {
      visible: n.value,
      "onUpdate:visible": (l) => n.value = l,
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
      }, [Cl.map(({
        label: l,
        value: r
      }) => u("div", {
        key: r,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && e.value.exec({
            label: l,
            value: r
          }), s();
        },
        onMousedown: q(() => {
        }, ["stop", "prevent"])
      }, [l]))])
    });
  }
});
class Ee extends ne {
  constructor(t) {
    super(t);
    K(this, "key", "special");
    t.on("ssml-special-close", Ee.handleClose), t.on("ssml-special-play", Ee.handlePlay);
  }
  static handleClose(t, s) {
    const o = te(t, "ssml-special", s.domId);
    o && L.delete(t, { at: o[1] });
  }
  static handlePlay(t, s) {
    yn(s.src);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const t = this.selection();
    return Z.isExpanded(t) ? (T.emit(M.ERROR, "不能框选文字"), !0) : !1;
  }
  exec(t) {
    if (this.isDisabled() || this.getValue() == null)
      return;
    const o = {
      type: "ssml-special",
      domId: this.genDomID(),
      src: t.value,
      remark: t.label,
      bgColor: "special",
      children: [{ text: "" }]
    };
    L.insertNodes(this.editor, o), this.editor.move(1);
  }
}
const Tn = /* @__PURE__ */ N({
  __name: "special-menu",
  setup(e) {
    const n = w(), t = H(), { x: s, y: o, height: l } = $e(n), r = (a) => {
      if (t.value ?? (t.value = new Ee(a)), t.value.isDisabled())
        return !1;
      t.value.record(), T.emit(M.SPECIAL_MENU_CLICK, {
        x: s.value - 200,
        y: o.value + l.value
      });
    };
    function i(a) {
      t.value && !t.value.isDisabled() && (t.value.restore(), t.value.exec(a));
    }
    return G(() => {
      T.on(M.SPECIAL_DRAG_BOX_SUBMIT, i);
    }), z(() => {
      T.off(M.SPECIAL_DRAG_BOX_SUBMIT, i);
    }), (a, m) => (k(), j(b(F), {
      ref_key: "menuRef",
      ref: n,
      text: "音效",
      icon: "special",
      onClick: r
    }, null, 512));
  }
}), Rn = /* @__PURE__ */ N({
  __name: "special-drag-box",
  setup(e) {
    const n = w(!1), t = w({ x: 20, y: 20 }), s = { first: "默认音效", second: "自定义音效", last: "最近音效" }, o = [
      { value: "", label: "全部场景" },
      { value: "2", label: "场景2" },
      { value: "3", label: "场景3" }
    ], l = [
      { value: "", label: "全部风格" },
      { value: "2", label: "风格2" },
      { value: "3", label: "风格3" }
    ], r = w();
    G(() => {
      T.on(M.SPECIAL_MENU_CLICK, a);
    }), z(() => {
      T.off(M.SPECIAL_MENU_CLICK, a);
    });
    function i(d) {
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
    async function a(d) {
      t.value = d, n.value = !0, r.value ?? (r.value = await i({ search: "", menuKey: "first", scene: "", style: "" }));
    }
    function m(d) {
      n.value = !1, T.emit(M.SPECIAL_DRAG_BOX_SUBMIT, d);
    }
    return (d, p) => (k(), j(b(ye), {
      visible: n.value,
      "onUpdate:visible": p[0] || (p[0] = (v) => n.value = v),
      position: t.value,
      "onUpdate:position": p[1] || (p[1] = (v) => t.value = v)
    }, {
      default: h(() => [
        u(b(ge), {
          menuItemLabel: s,
          scenes: o,
          styles: l,
          dataList: r.value,
          fetch: i,
          onSubmit: m
        }, null, 8, ["dataList"])
      ]),
      _: 1
    }, 8, ["visible", "position"]));
  }
});
class Ke extends ne {
  constructor(t) {
    super(t);
    K(this, "key", "mute");
    t.on("ssml-mute-close", Ke.handleClose);
  }
  static handleClose(t, s) {
    const o = te(t, "ssml-mute", s.domId);
    o && L.delete(t, { at: o[1] });
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const t = this.selection();
    return Z.isExpanded(t) ? (T.emit(M.ERROR, "不能选中文本"), !0) : !1;
  }
  exec(t) {
    if (this.isDisabled())
      return;
    const s = {
      type: "ssml-mute",
      domId: this.genDomID(),
      time: t.value,
      remark: t.label,
      bgColor: "mute",
      children: [{ text: "" }]
    };
    L.insertNodes(this.editor, s), this.editor.move(1);
  }
}
const Sl = [{
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
}], Dn = /* @__PURE__ */ N({
  setup() {
    const e = H(), n = w(!1), t = w();
    function s() {
      n.value || (n.value = !0);
    }
    function o() {
      n.value && (n.value = !1);
    }
    function l(i) {
      e.value ?? (e.value = new Ke(i)), !e.value.isDisabled() && (s(), e.value.record(), t.value.focus());
    }
    function r(i) {
      var a, m;
      o(), i && ((a = e.value) == null || a.restore(), (m = e.value) == null || m.exec({
        value: i,
        label: i
      }));
    }
    return () => u(le, {
      visible: n.value,
      "onUpdate:visible": (i) => n.value = i,
      trigger: "contextmenu",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => u(F, {
        text: "插入静音",
        icon: "mute",
        onClick: l
      }, null),
      default: () => u("div", {
        class: "d-flex flex-column"
      }, [Sl.map(({
        value: i,
        label: a
      }) => u("div", {
        key: i,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => r(i),
        onMousedown: q(() => {
        }, ["stop", "prevent"])
      }, [a])), u(pt, {
        type: "number",
        ref: t,
        onSubmit: r
      }, null)])
    });
  }
}), kn = /* @__PURE__ */ N({
  __name: "bgm-menu",
  setup(e) {
    const n = w(), t = H(), { x: s, y: o, height: l } = $e(n), r = (a) => {
      t.value = a, T.emit(M.BGM_MENU_CLICK, {
        x: s.value - 200,
        y: o.value + l.value
      });
    };
    function i(a) {
      var m;
      (m = t.value) == null || m.emit(de.UPDATE_BGM, a);
    }
    return G(() => {
      T.on(M.BGM_DRAG_BOX_SUBMIT, i);
    }), z(() => {
      T.off(M.BGM_DRAG_BOX_SUBMIT, i);
    }), (a, m) => (k(), j(b(F), {
      ref_key: "menuRef",
      ref: n,
      text: "配乐",
      icon: "bgm",
      onClick: r
    }, null, 512));
  }
}), Nn = /* @__PURE__ */ N({
  __name: "bgm-drag-box",
  setup(e) {
    const n = w(!1), t = w({ x: 20, y: 20 }), s = { first: "默认配乐", second: "自定义配乐", last: "最近配乐" }, o = [
      { value: "", label: "全部场景" },
      { value: "2", label: "场景2" },
      { value: "3", label: "场景3" }
    ], l = [
      { value: "", label: "全部风格" },
      { value: "2", label: "风格2" },
      { value: "3", label: "风格3" }
    ], r = w();
    G(() => {
      T.on(M.BGM_MENU_CLICK, a);
    }), z(() => {
      T.off(M.BGM_MENU_CLICK, a);
    });
    function i(d) {
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
    async function a(d) {
      t.value = d, n.value = !0, r.value ?? (r.value = await i({ search: "", menuKey: "first", scene: "", style: "" }));
    }
    function m(d) {
      n.value = !1, T.emit(M.BGM_DRAG_BOX_SUBMIT, d);
    }
    return (d, p) => (k(), j(b(ye), {
      visible: n.value,
      "onUpdate:visible": p[0] || (p[0] = (v) => n.value = v),
      position: t.value,
      "onUpdate:position": p[1] || (p[1] = (v) => t.value = v)
    }, {
      default: h(() => [
        u(b(ge), {
          menuItemLabel: s,
          scenes: o,
          styles: l,
          dataList: r.value,
          fetch: i,
          onSubmit: m
        }, null, 8, ["dataList"])
      ]),
      _: 1
    }, 8, ["visible", "position"]));
  }
}), An = /* @__PURE__ */ N({
  __name: "sensitive-menu",
  setup(e) {
    const n = w(), t = H(), { x: s, y: o, height: l } = $e(n), r = (a) => {
      t.value = a, T.emit(M.SENSITIVE_MENU_CLICK, {
        x: s.value - 200,
        y: o.value + l.value
      });
    };
    function i(a) {
      console.log(a);
    }
    return G(() => {
      T.on(M.SENSITIVE_DRAG_BOX_SUBMIT, i);
    }), z(() => {
      T.off(M.SENSITIVE_DRAG_BOX_SUBMIT, i);
    }), (a, m) => (k(), j(b(F), {
      ref_key: "menuRef",
      ref: n,
      text: "敏感词",
      icon: "sensitive",
      onClick: r
    }, null, 512));
  }
}), Pn = /* @__PURE__ */ N({
  __name: "sensitive-drag-box",
  setup(e) {
    const n = w(!1), t = w({ x: 20, y: 20 }), s = { first: "默认配乐", second: "自定义配乐", last: "最近配乐" }, o = [
      { value: "", label: "全部场景" },
      { value: "2", label: "场景2" },
      { value: "3", label: "场景3" }
    ], l = [
      { value: "", label: "全部风格" },
      { value: "2", label: "风格2" },
      { value: "3", label: "风格3" }
    ], r = w();
    G(() => {
      T.on(M.SENSITIVE_MENU_CLICK, a);
    }), z(() => {
      T.off(M.SENSITIVE_MENU_CLICK, a);
    });
    function i(d) {
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
    async function a(d) {
      t.value = d, n.value = !0, r.value ?? (r.value = await i({ search: "", menuKey: "first", scene: "", style: "" }));
    }
    function m(d) {
      n.value = !1, T.emit(M.SENSITIVE_DRAG_BOX_SUBMIT, d);
    }
    return (d, p) => (k(), j(b(ye), {
      visible: n.value,
      "onUpdate:visible": p[0] || (p[0] = (v) => n.value = v),
      position: t.value,
      "onUpdate:position": p[1] || (p[1] = (v) => t.value = v)
    }, {
      default: h(() => [
        u(b(ge), {
          menuItemLabel: s,
          scenes: o,
          styles: l,
          dataList: r.value,
          fetch: i,
          onSubmit: m
        }, null, 8, ["dataList"])
      ]),
      _: 1
    }, 8, ["visible", "position"]));
  }
}), Ln = /* @__PURE__ */ N({
  __name: "management-menu",
  setup(e) {
    const n = w(), t = H(), { x: s, y: o, height: l } = $e(n), r = (a) => {
      t.value = a, T.emit(M.MANAGEMENT_MENU_CLICK, {
        x: s.value - 200,
        y: o.value + l.value
      });
    };
    function i(a) {
      console.log(a);
    }
    return G(() => {
      T.on(M.MANAGEMENT_DRAG_BOX_SUBMIT, i);
    }), z(() => {
      T.off(M.MANAGEMENT_DRAG_BOX_SUBMIT, i);
    }), (a, m) => (k(), j(b(F), {
      ref_key: "menuRef",
      ref: n,
      text: "多人配音",
      icon: "management",
      onClick: r
    }, null, 512));
  }
}), Vn = /* @__PURE__ */ N({
  __name: "management-drag-box",
  setup(e) {
    const n = w(!1), t = w({ x: 20, y: 20 }), s = { first: "默认配乐", second: "自定义配乐", last: "最近配乐" }, o = [
      { value: "", label: "全部场景" },
      { value: "2", label: "场景2" },
      { value: "3", label: "场景3" }
    ], l = [
      { value: "", label: "全部风格" },
      { value: "2", label: "风格2" },
      { value: "3", label: "风格3" }
    ], r = w();
    G(() => {
      T.on(M.MANAGEMENT_MENU_CLICK, a);
    }), z(() => {
      T.off(M.MANAGEMENT_MENU_CLICK, a);
    });
    function i(d) {
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
    async function a(d) {
      t.value = d, n.value = !0, r.value ?? (r.value = await i({ search: "", menuKey: "first", scene: "", style: "" }));
    }
    function m(d) {
      n.value = !1, T.emit(M.MANAGEMENT_DRAG_BOX_SUBMIT, d);
    }
    return (d, p) => (k(), j(b(ye), {
      visible: n.value,
      "onUpdate:visible": p[0] || (p[0] = (v) => n.value = v),
      position: t.value,
      "onUpdate:position": p[1] || (p[1] = (v) => t.value = v)
    }, {
      default: h(() => [
        u(b(ge), {
          menuItemLabel: s,
          scenes: o,
          styles: l,
          dataList: r.value,
          fetch: i,
          onSubmit: m
        }, null, 8, ["dataList"])
      ]),
      _: 1
    }, 8, ["visible", "position"]));
  }
}), Bn = /* @__PURE__ */ N({
  __name: "conversion-menu",
  setup(e) {
    const n = w(), t = H(), { x: s, y: o, height: l } = $e(n), r = (a) => {
      t.value = a, T.emit(M.CONVERSION_MENU_CLICK, {
        x: s.value - 200,
        y: o.value + l.value
      });
    };
    function i(a) {
      console.log(a);
    }
    return G(() => {
      T.on(M.CONVERSION_DRAG_BOX_SUBMIT, i);
    }), z(() => {
      T.off(M.CONVERSION_DRAG_BOX_SUBMIT, i);
    }), (a, m) => (k(), j(b(F), {
      ref_key: "menuRef",
      ref: n,
      text: "局部变音",
      icon: "conversion",
      onClick: r
    }, null, 512));
  }
}), Un = /* @__PURE__ */ N({
  __name: "conversion-drag-box",
  setup(e) {
    const n = w(!1), t = w({ x: 20, y: 20 }), s = { first: "默认配乐", second: "自定义配乐", last: "最近配乐" }, o = [
      { value: "", label: "全部场景" },
      { value: "2", label: "场景2" },
      { value: "3", label: "场景3" }
    ], l = [
      { value: "", label: "全部风格" },
      { value: "2", label: "风格2" },
      { value: "3", label: "风格3" }
    ], r = w();
    G(() => {
      T.on(M.CONVERSION_MENU_CLICK, a);
    }), z(() => {
      T.off(M.CONVERSION_MENU_CLICK, a);
    });
    function i(d) {
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
    async function a(d) {
      t.value = d, n.value = !0, r.value ?? (r.value = await i({ search: "", menuKey: "first", scene: "", style: "" }));
    }
    function m(d) {
      n.value = !1, T.emit(M.CONVERSION_DRAG_BOX_SUBMIT, d);
    }
    return (d, p) => (k(), j(b(ye), {
      visible: n.value,
      "onUpdate:visible": p[0] || (p[0] = (v) => n.value = v),
      position: t.value,
      "onUpdate:position": p[1] || (p[1] = (v) => t.value = v)
    }, {
      default: h(() => [
        u(b(ge), {
          menuItemLabel: s,
          scenes: o,
          styles: l,
          dataList: r.value,
          fetch: i,
          onSubmit: m
        }, null, 8, ["dataList"])
      ]),
      _: 1
    }, 8, ["visible", "position"]));
  }
}), Il = (e) => (Se("data-v-93c5e583"), e = e(), Ie(), e), $l = { class: "anchor-avatar d-flex flex-column justify-content-center align-items-center" }, Ol = ["src"], Ml = /* @__PURE__ */ Il(() => /* @__PURE__ */ $("div", { class: "anchor-avatar-name text-white" }, "莫厚渊", -1)), Tl = /* @__PURE__ */ N({
  __name: "try-play-circle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: n }) {
    const t = w(`
  https://mobvoi-speech-public.mobvoi.com/headerImage/4314c841777e4d20901cd5d04a28e91a.png?iopcmd=thumbnail&type=8&width=80&height=80`), s = w(), o = w(0), l = w(0), { style: r } = cn(
      s,
      Be(s, {
        initialValue: { x: window.innerWidth - 15, y: window.innerHeight / 2 - 15 },
        onStart: (d, p) => m(p.clientX, p.clientY) ? !1 : void 0
      })
    );
    function i(d) {
      m(d.clientX, d.clientY) && n("update:visible", !1);
    }
    function a(d) {
      o.value = d.clientX, l.value = d.clientY;
    }
    function m(d, p) {
      return d > o.value - 10 && d < o.value + 10 && p > l.value - 10 && p < l.value + 10;
    }
    return (d, p) => ut((k(), U("div", {
      ref_key: "boxRef",
      ref: s,
      class: "try-play-circel user-select-none rounded-circle overflow-hidden",
      style: Le([b(r), { position: "fixed" }]),
      onMousedown: a,
      onMouseup: i
    }, [
      $("div", $l, [
        $("img", {
          src: t.value,
          class: "rounded-circle"
        }, null, 8, Ol),
        Ml
      ])
    ], 36)), [
      [ct, d.visible]
    ]);
  }
});
const Rl = /* @__PURE__ */ W(Tl, [["__scopeId", "data-v-93c5e583"]]), Dl = (e) => (Se("data-v-09793f61"), e = e(), Ie(), e), kl = { class: "anchor-avatar d-flex flex-column justify-content-center" }, Nl = ["src"], Al = /* @__PURE__ */ Dl(() => /* @__PURE__ */ $("div", { class: "anchor-avatar-name text-white" }, "莫厚渊", -1)), Pl = /* @__PURE__ */ N({
  __name: "anchor-avatar",
  setup(e) {
    const n = w(`
  https://mobvoi-speech-public.mobvoi.com/headerImage/4314c841777e4d20901cd5d04a28e91a.png?iopcmd=thumbnail&type=8&width=80&height=80`);
    return (t, s) => (k(), U("div", kl, [
      $("img", {
        src: n.value,
        class: "rounded-circle"
      }, null, 8, Nl),
      Al
    ]));
  }
});
const Ll = /* @__PURE__ */ W(Pl, [["__scopeId", "data-v-09793f61"]]), Vl = { class: "anchor-list w-100 d-flex flex-row flex-wrap justify-content-between align-content-start overflow-x-hidden overflow-y-auto" }, Bl = /* @__PURE__ */ N({
  __name: "anchor-list",
  setup(e) {
    return (n, t) => (k(), U("div", Vl, [
      (k(), U(me, null, Oe(100, (s, o) => u(Ll, { key: o })), 64))
    ]));
  }
});
const Ul = /* @__PURE__ */ W(Bl, [["__scopeId", "data-v-3c347263"]]), jl = /* @__PURE__ */ N({
  __name: "tag-item",
  props: {
    isActivate: { type: Boolean }
  },
  setup(e) {
    return (n, t) => (k(), U("div", {
      class: De(["tag-item p-2 text-white", [n.isActivate ? "activate" : null]])
    }, [
      re(n.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const I = /* @__PURE__ */ W(jl, [["__scopeId", "data-v-fe47427c"]]), Gl = { class: "tag-list w-100" }, Fl = { class: "w-100 d-flex flex-row" }, Hl = { class: "tag-list-body w-100 d-flex flex-row flex-wrap align-items-start overflow-y-auto overflow-x-hidden" }, Wl = /* @__PURE__ */ N({
  __name: "tag-list",
  setup(e) {
    return (n, t) => (k(), U("div", Gl, [
      $("div", Fl, [
        u(I, null, {
          default: h(() => [
            C("全部")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("男声")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("女声")
          ]),
          _: 1
        })
      ]),
      $("div", Hl, [
        u(I, null, {
          default: h(() => [
            C("全部")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("影视")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("情感")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("娱乐")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("快板")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("书单")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("名人")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("角色")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("全部")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("影视")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("情感")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("娱乐")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("快板")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("书单")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("名人")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("角色")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("全部")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("影视")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("情感")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("娱乐")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("快板")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("书单")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("名人")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("角色")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("全部")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("影视")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("情感")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("娱乐")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("快板")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("书单")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("名人")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("角色")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("全部")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("影视")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("情感")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("娱乐")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("快板")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("书单")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("名人")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("角色")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("全部")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("影视")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("情感")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("娱乐")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("快板")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("书单")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("名人")
          ]),
          _: 1
        }),
        u(I, null, {
          default: h(() => [
            C("角色")
          ]),
          _: 1
        })
      ])
    ]));
  }
});
const Kl = /* @__PURE__ */ W(Wl, [["__scopeId", "data-v-4d21bc70"]]);
const jn = (e) => (Se("data-v-f75c8d40"), e = e(), Ie(), e), Xl = { class: "px-2 pb-2" }, zl = { class: "try-play-header d-flex flex-row justify-content-between align-items-center" }, ql = { class: "try-play-body w-100 h-100 d-flex flex-row" }, Yl = { class: "try-play-left w-50" }, Ql = { class: "type-list d-flex flex-row border-bottom border-secondary" }, Jl = /* @__PURE__ */ jn(() => /* @__PURE__ */ $("div", { class: "py-1" }, null, -1)), Zl = /* @__PURE__ */ jn(() => /* @__PURE__ */ $("div", { class: "try-play-right border border-secondary w-50" }, "right", -1)), er = /* @__PURE__ */ N({
  __name: "try-play-panle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: n }) {
    const t = e, s = w(), o = w(""), l = w(), r = w();
    G(() => {
      window.addEventListener("keydown", i);
    }), z(() => {
      window.addEventListener("keydown", i);
    }), oe(
      () => t.visible,
      (p) => {
        p && setTimeout(() => {
          d();
        }, 200);
      }
    );
    function i(p) {
      p.code === "Escape" && t.visible && m();
    }
    const { style: a } = cn(
      l,
      Be(r, {
        initialValue: {
          x: 200,
          y: 200
        }
      })
    );
    function m() {
      n("update:visible", !1);
    }
    function d() {
      var p;
      (p = s.value) == null || p.focus();
    }
    return (p, v) => ut((k(), U("div", {
      ref_key: "boxRef",
      ref: l,
      style: Le([b(a), { position: "fixed" }]),
      class: "try-play user-select-none card z-3 shadow"
    }, [
      $("div", Xl, [
        $("div", zl, [
          $("div", {
            ref_key: "handleRef",
            ref: r,
            class: "w-100 h-100"
          }, null, 512),
          $("div", {
            onClick: m,
            class: "px-2 py-1 try-play-menu-close"
          }, [
            u(b(cs), { color: "white" }, {
              default: h(() => [
                u(b(ms))
              ]),
              _: 1
            })
          ])
        ]),
        $("div", null, [
          $("div", ql, [
            $("div", Yl, [
              $("div", null, [
                u(b(dt), {
                  onSubmit: v[1] || (v[1] = q(() => {
                  }, ["prevent"]))
                }, {
                  default: h(() => [
                    u(b(ft), {
                      ref_key: "searchInputRef",
                      ref: s,
                      modelValue: o.value,
                      "onUpdate:modelValue": v[0] || (v[0] = (x) => o.value = x),
                      placeholder: "输入名称搜索"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              $("div", Ql, [
                u(I, null, {
                  default: h(() => [
                    C("热榜")
                  ]),
                  _: 1
                }),
                u(I, null, {
                  default: h(() => [
                    C("SVIP")
                  ]),
                  _: 1
                }),
                u(I, null, {
                  default: h(() => [
                    C("付费")
                  ]),
                  _: 1
                })
              ]),
              u(Kl),
              Jl,
              u(Ul)
            ]),
            Zl
          ])
        ])
      ])
    ], 4)), [
      [ct, p.visible]
    ]);
  }
});
const tr = /* @__PURE__ */ W(er, [["__scopeId", "data-v-f75c8d40"]]), Gn = /* @__PURE__ */ N({
  __name: "try-play",
  setup(e) {
    const n = w(!0);
    function t(s) {
      s || (n.value = !0);
    }
    return (s, o) => (k(), j(at, { to: "body" }, [
      u(Rl, {
        visible: n.value,
        "onUpdate:visible": o[0] || (o[0] = (l) => n.value = l)
      }, null, 8, ["visible"]),
      u(tr, {
        visible: !n.value,
        "onUpdate:visible": t
      }, null, 8, ["visible"])
    ]));
  }
});
const nr = {
  install: (e) => {
    e.component("SpeakerMenu", bn), e.component("ContinuousMenu", wn), e.component("ReadMenu", En), e.component("DigitalMenu", Cn), e.component("AliasMenu", In), e.component("EnglishMenu", $n), e.component("ChangespeedMenu", On), e.component("RhythmMenu", Mn), e.component("SpecialMenu", Tn), e.component("SpecialDragBox", Rn), e.component("MuteMenu", Dn), e.component("BgmMenu", kn), e.component("BgmDragBox", Nn), e.component("SensitiveMenu", An), e.component("SensitiveDragBox", Pn), e.component("ManagementMenu", Ln), e.component("ManagementDragBox", Vn), e.component("ConversionMenu", Bn), e.component("ConversionDragBox", Un), e.component("TryPlay", Gn);
  }
};
var rt = { exports: {} }, it = { exports: {} };
(function(e, n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.ParsingError = void 0;
  class t extends Error {
    constructor(E, O) {
      super(E), this.cause = O;
    }
  }
  n.ParsingError = t;
  let s;
  function o() {
    return a(!1) || v() || p() || d();
  }
  function l() {
    return c(/\s*/), a(!0) || p() || m() || i(!1);
  }
  function r() {
    const _ = i(!0), E = [];
    let O, y = l();
    for (; y; ) {
      if (y.node.type === "Element") {
        if (O)
          throw new Error("Found multiple root nodes");
        O = y.node;
      }
      y.excluded || E.push(y.node), y = l();
    }
    if (!O)
      throw new t("Failed to parse XML", "Root Element not found");
    if (s.xml.length !== 0)
      throw new t("Failed to parse XML", "Not Well-Formed XML");
    return {
      declaration: _ ? _.node : null,
      root: O,
      children: E
    };
  }
  function i(_) {
    const E = c(_ ? /^<\?(xml)\s*/ : /^<\?([\w-:.]+)\s*/);
    if (!E)
      return;
    const O = {
      name: E[1],
      type: "ProcessingInstruction",
      attributes: {}
    };
    for (; !(g() || S("?>")); ) {
      const y = x();
      if (y)
        O.attributes[y.name] = y.value;
      else
        return;
    }
    return c(/\?>/), {
      excluded: _ ? !1 : s.options.filter(O) === !1,
      node: O
    };
  }
  function a(_) {
    const E = c(/^<([^?!</>\s]+)\s*/);
    if (!E)
      return;
    const O = {
      type: "Element",
      name: E[1],
      attributes: {},
      children: []
    }, y = _ ? !1 : s.options.filter(O) === !1;
    for (; !(g() || S(">") || S("?>") || S("/>")); ) {
      const V = x();
      if (V)
        O.attributes[V.name] = V.value;
      else
        return;
    }
    if (c(/^\s*\/>/))
      return O.children = null, {
        excluded: y,
        node: O
      };
    c(/\??>/);
    let D = o();
    for (; D; )
      D.excluded || O.children.push(D.node), D = o();
    if (s.options.strictMode) {
      const V = `</${O.name}>`;
      if (s.xml.startsWith(V))
        s.xml = s.xml.slice(V.length);
      else
        throw new t("Failed to parse XML", `Closing tag not matching "${V}"`);
    } else
      c(/^<\/\s*[\w-:.\u00C0-\u00FF]+>/);
    return {
      excluded: y,
      node: O
    };
  }
  function m() {
    const _ = c(/^<!DOCTYPE\s+\S+\s+SYSTEM[^>]*>/) || c(/^<!DOCTYPE\s+\S+\s+PUBLIC[^>]*>/) || c(/^<!DOCTYPE\s+\S+\s*\[[^\]]*]>/) || c(/^<!DOCTYPE\s+\S+\s*>/);
    if (_) {
      const E = {
        type: "DocumentType",
        content: _[0]
      };
      return {
        excluded: s.options.filter(E) === !1,
        node: E
      };
    }
  }
  function d() {
    if (s.xml.startsWith("<![CDATA[")) {
      const _ = s.xml.indexOf("]]>");
      if (_ > -1) {
        const E = _ + 3, O = {
          type: "CDATA",
          content: s.xml.substring(0, E)
        };
        return s.xml = s.xml.slice(E), {
          excluded: s.options.filter(O) === !1,
          node: O
        };
      }
    }
  }
  function p() {
    const _ = c(/^<!--[\s\S]*?-->/);
    if (_) {
      const E = {
        type: "Comment",
        content: _[0]
      };
      return {
        excluded: s.options.filter(E) === !1,
        node: E
      };
    }
  }
  function v() {
    const _ = c(/^([^<]+)/);
    if (_) {
      const E = {
        type: "Text",
        content: _[1]
      };
      return {
        excluded: s.options.filter(E) === !1,
        node: E
      };
    }
  }
  function x() {
    const _ = c(/([^=]+)\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)\s*/);
    if (_)
      return {
        name: _[1].trim(),
        value: f(_[2].trim())
      };
  }
  function f(_) {
    return _.replace(/^['"]|['"]$/g, "");
  }
  function c(_) {
    const E = s.xml.match(_);
    if (E)
      return s.xml = s.xml.slice(E[0].length), E;
  }
  function g() {
    return s.xml.length === 0;
  }
  function S(_) {
    return s.xml.indexOf(_) === 0;
  }
  function R(_, E = {}) {
    _ = _.trim();
    const O = E.filter || (() => !0);
    return s = {
      xml: _,
      options: Object.assign(Object.assign({}, E), { filter: O, strictMode: E.strictMode === !0 })
    }, r();
  }
  e.exports = R, n.default = R;
})(it, it.exports);
var sr = it.exports;
(function(e, n) {
  var t = pe && pe.__importDefault || function(f) {
    return f && f.__esModule ? f : { default: f };
  };
  Object.defineProperty(n, "__esModule", { value: !0 });
  const s = t(sr);
  function o(f) {
    if (!f.options.indentation && !f.options.lineSeparator)
      return;
    f.content += f.options.lineSeparator;
    let c;
    for (c = 0; c < f.level; c++)
      f.content += f.options.indentation;
  }
  function l(f) {
    f.content = f.content.replace(/ +$/, "");
    let c;
    for (c = 0; c < f.level; c++)
      f.content += f.options.indentation;
  }
  function r(f, c) {
    f.content += c;
  }
  function i(f, c, g) {
    if (typeof f.content == "string")
      a(f.content, c, g);
    else if (f.type === "Element")
      d(f, c, g);
    else if (f.type === "ProcessingInstruction")
      v(f, c);
    else
      throw new Error("Unknown node type: " + f.type);
  }
  function a(f, c, g) {
    if (!g) {
      const S = f.trim();
      (c.options.lineSeparator || S.length === 0) && (f = S);
    }
    f.length > 0 && (!g && c.content.length > 0 && o(c), r(c, f));
  }
  function m(f, c) {
    const g = "/" + f.join("/"), S = f[f.length - 1];
    return c.includes(S) || c.includes(g);
  }
  function d(f, c, g) {
    if (c.path.push(f.name), !g && c.content.length > 0 && o(c), r(c, "<" + f.name), p(c, f.attributes), f.children === null || c.options.forceSelfClosingEmptyTag && f.children.length === 0) {
      const S = c.options.whiteSpaceAtEndOfSelfclosingTag ? " />" : "/>";
      r(c, S);
    } else if (f.children.length === 0)
      r(c, "></" + f.name + ">");
    else {
      const S = f.children;
      r(c, ">"), c.level++;
      let R = f.attributes["xml:space"] === "preserve", _ = !1;
      if (!R && c.options.ignoredPaths && (_ = m(c.path, c.options.ignoredPaths), R = _), !R && c.options.collapseContent) {
        let E = !1, O = !1, y = !1;
        S.forEach(function(D, V) {
          D.type === "Text" ? (D.content.includes(`
`) ? (O = !0, D.content = D.content.trim()) : (V === 0 || V === S.length - 1) && D.content.trim().length === 0 && (D.content = ""), D.content.trim().length > 0 && (E = !0)) : D.type === "CDATA" ? E = !0 : y = !0;
        }), E && (!y || !O) && (R = !0);
      }
      S.forEach(function(E) {
        i(E, c, g || R);
      }), c.level--, !g && !R && o(c), _ && l(c), r(c, "</" + f.name + ">");
    }
    c.path.pop();
  }
  function p(f, c) {
    Object.keys(c).forEach(function(g) {
      const S = c[g].replace(/"/g, "&quot;");
      r(f, " " + g + '="' + S + '"');
    });
  }
  function v(f, c) {
    c.content.length > 0 && o(c), r(c, "<?" + f.name), p(c, f.attributes), r(c, "?>");
  }
  function x(f, c = {}) {
    c.indentation = "indentation" in c ? c.indentation : "    ", c.collapseContent = c.collapseContent === !0, c.lineSeparator = "lineSeparator" in c ? c.lineSeparator : `\r
`, c.whiteSpaceAtEndOfSelfclosingTag = c.whiteSpaceAtEndOfSelfclosingTag === !0, c.throwOnFailure = c.throwOnFailure !== !1;
    try {
      const g = (0, s.default)(f, { filter: c.filter, strictMode: c.strictMode }), S = { content: "", level: 0, options: c, path: [] };
      return g.declaration && v(g.declaration, S), g.children.forEach(function(R) {
        i(R, S, !1);
      }), c.lineSeparator ? S.content.replace(/\r\n/g, `
`).replace(/\n/g, c.lineSeparator) : S.content;
    } catch (g) {
      if (c.throwOnFailure)
        throw g;
      return f;
    }
  }
  x.minify = (f, c = {}) => x(f, Object.assign(Object.assign({}, c), { indentation: "", lineSeparator: "" })), e.exports = x, n.default = x;
})(rt, rt.exports);
var or = rt.exports;
const lr = /* @__PURE__ */ _t(or), fe = (e) => (Se("data-v-71fe7760"), e = e(), Ie(), e), rr = { class: "editor-title d-flex flex-row align-item-center justify-content-between" }, ir = { class: "title-wrapper d-flex flex-column justify-content-center ps-3" }, ar = /* @__PURE__ */ fe(() => /* @__PURE__ */ $("div", { class: "title-author pb-1" }, "SSML编辑器", -1)), ur = { class: "author d-flex flex-row align-items-center justify-content-start" }, cr = /* @__PURE__ */ fe(() => /* @__PURE__ */ $("div", null, "已保存", -1)), dr = /* @__PURE__ */ fe(() => /* @__PURE__ */ $("div", null, "|", -1)), fr = /* @__PURE__ */ fe(() => /* @__PURE__ */ $("span", { class: "iconfont icon-play font-size-12 p-1" }, null, -1)), pr = /* @__PURE__ */ fe(() => /* @__PURE__ */ $("div", { class: "d-inline-block" }, null, -1)), mr = { class: "operation-wrapper d-flex flex-row justify-content-center align-items-center" }, vr = /* @__PURE__ */ fe(() => /* @__PURE__ */ $("div", { class: "menu-divider" }, null, -1)), hr = /* @__PURE__ */ fe(() => /* @__PURE__ */ $("div", { class: "px-1" }, null, -1)), _r = { class: "ssml-code" }, gr = { class: "dialog-footer" }, yr = /* @__PURE__ */ N({
  __name: "editor-title",
  props: {
    characterTotal: {},
    characterMax: {},
    bgm: {}
  },
  setup(e) {
    const n = Pe(_e.EDITOR), t = w(!1), s = w(""), o = X(() => lr(s.value, {
      indentation: "    ",
      filter: (i) => i.type !== "Comment",
      collapseContent: !1,
      lineSeparator: `
`
    })), l = () => {
      n && (s.value = n.value.getHtml(), t.value = !0);
    }, r = () => {
      n == null || n.value.emit(de.REMOVE_BGM);
    };
    return (i, a) => (k(), U(me, null, [
      $("div", rr, [
        $("div", ir, [
          ar,
          $("div", ur, [
            cr,
            dr,
            $("div", null, se(i.characterTotal) + "/" + se(i.characterMax) + "字", 1),
            i.bgm ? (k(), j(b(ds), {
              key: 0,
              class: "bgm-txt ms-2",
              closable: "",
              size: "small",
              onClick: a[0] || (a[0] = () => i.bgm && i.bgm.value && b(yn)(i.bgm.value)),
              onClose: r
            }, {
              default: h(() => [
                fr,
                pr,
                $("span", null, se(i.bgm.label), 1)
              ]),
              _: 1
            })) : rs("", !0)
          ])
        ]),
        $("div", mr, [
          u(b(ae), {
            type: "primary",
            icon: b(vs),
            disabled: ""
          }, {
            default: h(() => [
              C("分享")
            ]),
            _: 1
          }, 8, ["icon"]),
          vr,
          u(b(ae), {
            type: "primary",
            onClick: l
          }, {
            default: h(() => [
              C("查看SSML")
            ]),
            _: 1
          }),
          u(b(ae), { disabled: "" }, {
            default: h(() => [
              C("下载音频")
            ]),
            _: 1
          }),
          u(b(ae), { disabled: "" }, {
            default: h(() => [
              C("下载视频")
            ]),
            _: 1
          }),
          u(b(ae), { disabled: "" }, {
            default: h(() => [
              C("下载字幕")
            ]),
            _: 1
          }),
          u(b(ae), { disabled: "" }, {
            default: h(() => [
              C("声音转换")
            ]),
            _: 1
          }),
          hr
        ])
      ]),
      u(b(fs), {
        modelValue: t.value,
        "onUpdate:modelValue": a[2] || (a[2] = (m) => t.value = m),
        title: "查看SSML",
        width: "50%"
      }, {
        footer: h(() => [
          $("span", gr, [
            u(b(ae), {
              type: "primary",
              onClick: a[1] || (a[1] = (m) => t.value = !1)
            }, {
              default: h(() => [
                C(" 确定 ")
              ]),
              _: 1
            })
          ])
        ]),
        default: h(() => [
          $("pre", _r, se(o.value), 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
});
const br = /* @__PURE__ */ W(yr, [["__scopeId", "data-v-71fe7760"]]), Fn = "--editor-vdata";
function wr(e) {
  const n = JSON.stringify(e);
  window.localStorage.setItem(Fn, n);
}
function xr() {
  const e = window.localStorage.getItem(Fn);
  if (e) {
    const n = JSON.parse(e);
    if (n instanceof Array)
      return n;
  }
}
const Er = (e) => {
  const { isInline: n, isVoid: t } = e, s = e;
  return s.isInline = (o) => B.getNodeType(o) === "ssml-alias" ? !0 : n(o), s.isVoid = (o) => B.getNodeType(o) === "ssml-alias" ? !0 : t(o), s;
};
function nn(e, n, t, s, o) {
  const l = n === void 0 ? void 0 : n.key;
  return { sel: e, data: n, children: t, text: s, elm: o, key: l };
}
const sn = Array.isArray;
function tt(e) {
  return typeof e == "string" || typeof e == "number" || e instanceof String || e instanceof Number;
}
function Hn(e, n, t) {
  if (e.ns = "http://www.w3.org/2000/svg", t !== "foreignObject" && n !== void 0)
    for (let s = 0; s < n.length; ++s) {
      const o = n[s];
      if (typeof o == "string")
        continue;
      const l = o.data;
      l !== void 0 && Hn(l, o.children, o.sel);
    }
}
function P(e, n, t) {
  let s = {}, o, l, r;
  if (t !== void 0 ? (n !== null && (s = n), sn(t) ? o = t : tt(t) ? l = t.toString() : t && t.sel && (o = [t])) : n != null && (sn(n) ? o = n : tt(n) ? l = n.toString() : n && n.sel ? o = [n] : s = n), o !== void 0)
    for (r = 0; r < o.length; ++r)
      tt(o[r]) && (o[r] = nn(void 0, void 0, void 0, o[r], void 0));
  return e[0] === "s" && e[1] === "v" && e[2] === "g" && (e.length === 3 || e[3] === "." || e[3] === "#") && Hn(s, o, e), nn(e, s, o, l, void 0);
}
var Wn = "Expected a function", on = 0 / 0, Cr = "[object Symbol]", Sr = /^\s+|\s+$/g, Ir = /^[-+]0x[0-9a-f]+$/i, $r = /^0b[01]+$/i, Or = /^0o[0-7]+$/i, Mr = parseInt, Tr = typeof pe == "object" && pe && pe.Object === Object && pe, Rr = typeof self == "object" && self && self.Object === Object && self, Dr = Tr || Rr || Function("return this")(), kr = Object.prototype, Nr = kr.toString, Ar = Math.max, Pr = Math.min, nt = function() {
  return Dr.Date.now();
};
function Lr(e, n, t) {
  var s, o, l, r, i, a, m = 0, d = !1, p = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(Wn);
  n = ln(n) || 0, Ae(t) && (d = !!t.leading, p = "maxWait" in t, l = p ? Ar(ln(t.maxWait) || 0, n) : l, v = "trailing" in t ? !!t.trailing : v);
  function x(y) {
    var D = s, V = o;
    return s = o = void 0, m = y, r = e.apply(V, D), r;
  }
  function f(y) {
    return m = y, i = setTimeout(S, n), d ? x(y) : r;
  }
  function c(y) {
    var D = y - a, V = y - m, xt = n - D;
    return p ? Pr(xt, l - V) : xt;
  }
  function g(y) {
    var D = y - a, V = y - m;
    return a === void 0 || D >= n || D < 0 || p && V >= l;
  }
  function S() {
    var y = nt();
    if (g(y))
      return R(y);
    i = setTimeout(S, c(y));
  }
  function R(y) {
    return i = void 0, v && s ? x(y) : (s = o = void 0, r);
  }
  function _() {
    i !== void 0 && clearTimeout(i), m = 0, s = a = o = i = void 0;
  }
  function E() {
    return i === void 0 ? r : R(nt());
  }
  function O() {
    var y = nt(), D = g(y);
    if (s = arguments, o = this, a = y, D) {
      if (i === void 0)
        return f(a);
      if (p)
        return i = setTimeout(S, n), x(a);
    }
    return i === void 0 && (i = setTimeout(S, n)), r;
  }
  return O.cancel = _, O.flush = E, O;
}
function Vr(e, n, t) {
  var s = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(Wn);
  return Ae(t) && (s = "leading" in t ? !!t.leading : s, o = "trailing" in t ? !!t.trailing : o), Lr(e, n, {
    leading: s,
    maxWait: n,
    trailing: o
  });
}
function Ae(e) {
  var n = typeof e;
  return !!e && (n == "object" || n == "function");
}
function Br(e) {
  return !!e && typeof e == "object";
}
function Ur(e) {
  return typeof e == "symbol" || Br(e) && Nr.call(e) == Cr;
}
function ln(e) {
  if (typeof e == "number")
    return e;
  if (Ur(e))
    return on;
  if (Ae(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ae(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Sr, "");
  var t = $r.test(e);
  return t || Or.test(e) ? Mr(e.slice(2), t ? 2 : 8) : Ir.test(e) ? on : +e;
}
var jr = Vr;
const Ce = /* @__PURE__ */ _t(jr), he = { style: { userSelect: "none" }, contentEditable: !1 };
function we(e, n) {
  return P("span.ssml-wrap", { ...he }, [
    P(`span.tag.bg-color.${e.bgColor}`, [
      P("span.tag-remark", { attrs: { "data-tag-remark": e.remark } }),
      P(
        "span.btn-close",
        {
          on: {
            click: Ce((t) => {
              t.preventDefault(), n();
            })
          }
        },
        P("span.iconfont.icon-roundclosefill")
      )
    ]),
    P(`span.boundary.start.ft-color.${e.bgColor}`),
    P("span", e.plain),
    P(`span.boundary.end.ft-color.${e.bgColor}`)
  ]);
}
function Gr(e, n, t) {
  return P("span.ssml-wrap", [
    P(`span.tag.bg-color.${e.bgColor}`, { ...he }, [
      P("span.tag-remark", { attrs: { "data-tag-remark": e.remark } }),
      P(
        "span.btn-close",
        {
          on: {
            click: Ce((s) => {
              s.preventDefault(), t();
            })
          }
        },
        P("span.iconfont.icon-roundclosefill", null)
      )
    ]),
    P(`span.boundary.start.ft-color.${e.bgColor}`, { ...he }),
    P("span", n),
    P(`span.boundary.end.ft-color.${e.bgColor}`, { ...he })
  ]);
}
function Kn(e, n) {
  return P("span.ssml-wrap", { ...he }, [
    P(`span.tag.bg-color.${e.bgColor}`, [
      P("span.tag-remark", { attrs: { "data-tag-remark": e.remark } }),
      P(
        "span.btn-close",
        {
          on: {
            click: Ce((t) => {
              t.preventDefault(), n();
            })
          }
        },
        P("span.iconfont.icon-roundclosefill", null)
      )
    ])
  ]);
}
function Fr(e, n) {
  return P("span.ssml-wrap", { ...he }, [
    P(`span.tag.bg-color.${e.bgColor}`, [
      P(
        "span.btn-text",
        {
          on: {
            click: Ce((t) => {
              t.preventDefault(), n == null || n.play();
            })
          }
        },
        P("span.iconfont.icon-play", null)
      ),
      P("span.tag-remark", { attrs: { "data-tag-remark": e.remark } }),
      P(
        "span.btn-text",
        {
          on: {
            click: Ce((t) => {
              t.preventDefault(), n == null || n.close();
            })
          }
        },
        P("span.iconfont.icon-roundclosefill", null)
      )
    ])
  ]);
}
const Hr = {
  type: "ssml-alias",
  renderElem: (e, n, t) => {
    const s = e;
    return we(
      { ...s, plain: s.value },
      () => t.emit("ssml-alias-close", t, s)
    );
  }
}, Wr = {
  type: "ssml-alias",
  elemToHtml: (e) => {
    const { alias: n, value: t } = e;
    return `<sub alias="${n}">${t}</sub>`;
  }
}, Kr = {
  editorPlugin: Er,
  renderElems: [Hr],
  elemsToHtml: [Wr]
}, Xr = (e) => {
  const { isInline: n, isVoid: t } = e, s = e;
  return s.isInline = (o) => B.getNodeType(o) === "ssml-changespeed" ? !0 : n(o), s.isVoid = (o) => B.getNodeType(o) === "ssml-changespeed" ? !1 : t(o), s;
}, zr = {
  type: "ssml-changespeed",
  renderElem: (e, n, t) => {
    const s = e;
    return Gr(
      s,
      n,
      () => t.emit("ssml-changespeed-close", t, s)
    );
  }
}, qr = {
  type: "ssml-changespeed",
  elemToHtml: (e, n) => {
    const { rate: t } = e;
    return `<prosody rate="${t}">${n}</prosody>`;
  }
}, Yr = {
  editorPlugin: Xr,
  renderElems: [zr],
  elemsToHtml: [qr]
}, Qr = (e) => {
  const { isInline: n, isVoid: t } = e, s = e;
  return s.isInline = (o) => B.getNodeType(o) === "ssml-continuous" ? !0 : n(o), s.isVoid = (o) => B.getNodeType(o) === "ssml-continuous" ? !0 : t(o), s;
}, Jr = {
  type: "ssml-continuous",
  renderElem: (e, n, t) => {
    const s = e;
    return we(
      { ...s, plain: s.value },
      () => t.emit("ssml-continuous-close", t, s)
    );
  }
}, Zr = {
  type: "ssml-continuous",
  elemToHtml: (e, n) => `<w>${n}</w>`
}, ei = {
  editorPlugin: Qr,
  renderElems: [Jr],
  elemsToHtml: [Zr]
}, ti = (e) => {
  const { isInline: n, isVoid: t } = e, s = e;
  return s.isInline = (o) => B.getNodeType(o) === "ssml-digital" ? !0 : n(o), s.isVoid = (o) => B.getNodeType(o) === "ssml-digital" ? !0 : t(o), s;
}, ni = {
  type: "ssml-digital",
  renderElem: (e, n, t) => {
    const s = e;
    return we(
      { ...s, plain: s.value },
      () => t.emit("ssml-digital-close", t, s)
    );
  }
}, si = {
  type: "ssml-digital",
  elemToHtml: (e, n) => {
    const { interpretAs: t } = e;
    return `<say-as interpret-as="${t}">${n}</say-as>`;
  }
}, oi = {
  editorPlugin: ti,
  renderElems: [ni],
  elemsToHtml: [si]
}, li = (e) => {
  const { isInline: n, isVoid: t } = e, s = e;
  return s.isInline = (o) => B.getNodeType(o) === "ssml-english" ? !0 : n(o), s.isVoid = (o) => B.getNodeType(o) === "ssml-english" ? !0 : t(o), s;
}, ri = {
  type: "ssml-english",
  renderElem: (e, n, t) => {
    const s = e;
    return we(
      { ...s, plain: s.word },
      () => t.emit("ssml-english-close", t, s)
    );
  }
}, ii = {
  type: "ssml-english",
  elemToHtml: (e) => {
    const { phoneme: n, word: t } = e;
    return `<p ph="${n}">${t}</p>`;
  }
}, ai = {
  editorPlugin: li,
  renderElems: [ri],
  elemsToHtml: [ii]
}, ui = (e) => {
  const { isInline: n, isVoid: t } = e, s = e;
  return s.isInline = (o) => B.getNodeType(o) === "ssml-mute" ? !0 : n(o), s.isVoid = (o) => B.getNodeType(o) === "ssml-mute" ? !0 : t(o), s;
}, ci = {
  type: "ssml-mute",
  renderElem: (e, n, t) => {
    const s = e;
    return Kn(s, () => t.emit("ssml-mute-close", t, s));
  }
}, di = {
  type: "ssml-mute",
  elemToHtml: (e) => {
    const { time: n } = e;
    return `<break time="${n}" />`;
  }
}, fi = {
  editorPlugin: ui,
  renderElems: [ci],
  elemsToHtml: [di]
}, pi = (e) => {
  const { isInline: n, isVoid: t } = e, s = e;
  return s.isInline = (o) => B.getNodeType(o) === "ssml-read" ? !0 : n(o), s.isVoid = (o) => B.getNodeType(o) === "ssml-read" ? !0 : t(o), s;
}, mi = {
  type: "ssml-read",
  renderElem: (e, n, t) => {
    const s = e;
    return we({ ...s, plain: s.value }, () => {
      t.emit("ssml-read-close", t, s);
    });
  }
}, vi = {
  type: "ssml-read",
  elemToHtml: (e) => {
    const { phoneme: n, value: t } = e;
    return `<w phoneme="${n}">${t}</w>`;
  }
}, hi = {
  editorPlugin: pi,
  renderElems: [mi],
  elemsToHtml: [vi]
}, _i = (e) => {
  const { isInline: n, isVoid: t } = e, s = e;
  return s.isInline = (o) => B.getNodeType(o) === "ssml-rhythm" ? !0 : n(o), s.isVoid = (o) => B.getNodeType(o) === "ssml-rhythm" ? !0 : t(o), s;
}, gi = {
  type: "ssml-rhythm",
  renderElem: (e, n, t) => {
    const s = e;
    return Kn(s, () => t.emit("ssml-rhythm-close", t, s));
  }
}, yi = {
  type: "ssml-rhythm",
  elemToHtml: (e) => {
    const { time: n } = e;
    return `<break time="${n}" />`;
  }
}, bi = {
  editorPlugin: _i,
  renderElems: [gi],
  elemsToHtml: [yi]
}, wi = (e) => {
  const { isInline: n, isVoid: t } = e, s = e;
  return s.isInline = (o) => B.getNodeType(o) === "ssml-speaker" ? !0 : n(o), s.isVoid = (o) => B.getNodeType(o) === "ssml-speaker" ? !0 : t(o), s;
}, xi = {
  type: "ssml-speaker",
  renderElem: (e, n, t) => {
    const s = e;
    return we(
      { ...s, plain: s.word },
      () => t.emit("ssml-speaker-close", t, s)
    );
  }
}, Ei = {
  type: "ssml-speaker",
  elemToHtml: (e) => {
    const { phoneme: n, word: t } = e;
    return `<p ph="${n}">${t}</p>`;
  }
}, Ci = {
  editorPlugin: wi,
  renderElems: [xi],
  elemsToHtml: [Ei]
}, Si = (e) => {
  const { isInline: n, isVoid: t } = e, s = e;
  return s.isInline = (o) => B.getNodeType(o) === "ssml-special" ? !0 : n(o), s.isVoid = (o) => B.getNodeType(o) === "ssml-special" ? !0 : t(o), s;
}, Ii = {
  type: "ssml-special",
  renderElem: (e, n, t) => {
    const s = e;
    return Fr(s, {
      close: () => t.emit("ssml-special-close", t, s),
      play: () => t.emit("ssml-special-play", t, s)
    });
  }
}, $i = {
  type: "ssml-special",
  elemToHtml: (e) => {
    const { src: n } = e;
    return `<audio src="${n}" />`;
  }
}, Oi = {
  editorPlugin: Si,
  renderElems: [Ii],
  elemsToHtml: [$i]
}, Mi = (e) => {
  const { getHtml: n } = e, t = e, s = {
    volume: "",
    pitch: "",
    rate: "",
    voice: "",
    bgm: "",
    bgmRemark: "",
    backgroundMusicVolume: ""
  };
  return e.on(de.UPDATE_SPEAK, (o) => {
    Object.assign(s, o);
  }), e.on(de.UPDATE_BGM, (o) => {
    s.bgm = o.value, s.bgmRemark = o.label;
  }), e.on(de.REMOVE_BGM, () => {
    s.bgm = void 0, s.bgmRemark = void 0;
  }), t.getHtml = () => {
    const o = ["bgmRemark"], l = [];
    for (const r in s)
      if (Object.prototype.hasOwnProperty.call(s, r)) {
        const i = s[r];
        i && !o.includes(r) && l.push(`${r}=${i}`);
      }
    return `<speak ${l.join(" ")}>${n()}</speak>`;
  }, t;
}, Ti = {
  editorPlugin: Mi
};
function Ri(e) {
  e.on("ssml-alias-close", Sn.handleClose), e.on("ssml-changespeed-close", He.handleClose), e.on("ssml-continuous-close", je.handleClose), e.on("ssml-digital-close", Ge.handleClose), e.on("ssml-english-close", Fe.handleClose), e.on("ssml-mute-close", Ke.handleClose), e.on("ssml-read-close", xn.handleClose), e.on("ssml-rhythm-close", We.handleClose), e.on("ssml-speaker-close", Ue.handleClose), e.on("ssml-special-close", Ee.handleClose);
}
const Di = /* @__PURE__ */ N({
  __name: "editor-core",
  props: {
    editorConfig: {}
  },
  emits: ["created", "change"],
  setup(e, { emit: n }) {
    const t = e, s = w(null);
    G(() => {
      o();
    });
    const o = () => {
      if (!s.value)
        return;
      const l = xr();
      Jn({
        selector: s.value,
        mode: "simple",
        content: l ?? [],
        config: {
          ...is(t.editorConfig),
          onCreated(r) {
            Ri(r), n("created", r), r.focus(!0);
            const i = r.getConfig();
            i.hoverbarKeys = void 0;
          },
          onChange(r) {
            n("change", r), wr(r.children);
          }
        }
      });
    };
    return (l, r) => (k(), U("div", {
      ref_key: "boxRef",
      ref: s,
      class: "edit-core",
      style: { height: "70vh", "overflow-y": "hidden" }
    }, null, 512));
  }
}), ki = { class: "bar-view border-bottom border-1" }, Ni = /* @__PURE__ */ N({
  __name: "bar-view",
  setup(e) {
    return (n, t) => (k(), U(me, null, [
      $("div", ki, [
        u(b(dn), null, {
          default: h(() => [
            u(b(ue), { divider: "green" }, {
              default: h(() => [
                u(b(F), {
                  text: "24K高清音质",
                  icon: "play",
                  disabled: ""
                })
              ]),
              _: 1
            }),
            u(b(ue), { divider: "cyan" }, {
              default: h(() => [
                u(b(bn)),
                u(b(En)),
                u(b(Cn)),
                u(b(wn)),
                u(b(In)),
                u(b($n))
              ]),
              _: 1
            }),
            u(b(ue), { divider: "orange" }, {
              default: h(() => [
                u(b(On)),
                u(b(Ln)),
                u(b(Bn))
              ]),
              _: 1
            }),
            u(b(ue), { divider: "purple" }, {
              default: h(() => [
                u(b(Mn)),
                u(b(Dn))
              ]),
              _: 1
            }),
            u(b(ue), { divider: "yellow" }, {
              default: h(() => [
                u(b(Tn)),
                u(b(kn))
              ]),
              _: 1
            }),
            u(b(ue), null, {
              default: h(() => [
                u(b(An))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      u(b(Nn)),
      u(b(Rn)),
      u(b(Pn)),
      u(b(Vn)),
      u(b(Un)),
      u(b(Gn))
    ], 64));
  }
}), Ai = { class: "editor-view" }, Pi = { class: "editor-box" }, Li = { class: "editor-core-container shadow pt-1" }, Vi = /* @__PURE__ */ N({
  __name: "editor-view",
  emits: ["onCreated", "onChange"],
  setup(e, { emit: n }) {
    const t = w(0), s = H(), o = w(null);
    as(_e.EDITOR, s);
    const l = { maxLength: 5e3, placeholder: "请输入内容..." };
    z(() => {
      var a;
      (a = s.value) == null || a.destroy();
    });
    const r = (a) => {
      s.value = a, n("onCreated", a), a.on(de.UPDATE_BGM, (m) => {
        o.value = m;
      }), a.on(de.REMOVE_BGM, () => {
        o.value = null;
      });
    }, i = (a) => {
      t.value = a.getText().length, n("onChange", a);
    };
    return (a, m) => (k(), U("div", Ai, [
      u(br, {
        bgm: o.value,
        "character-total": t.value,
        "character-max": l.maxLength || 0
      }, null, 8, ["bgm", "character-total", "character-max"]),
      $("div", Pi, [
        u(Ni),
        $("div", Li, [
          u(Di, {
            "editor-config": l,
            onChange: i,
            onCreated: r
          })
        ])
      ])
    ]));
  }
});
const Bi = /* @__PURE__ */ W(Vi, [["__scopeId", "data-v-bc09f735"]]), Ui = {
  install(e) {
    e.component("EditorView", Bi);
  }
};
const Ki = {
  install(e, n) {
    const t = n ?? {};
    e.provide(_e.EDITORCONFIG, t), T.on(M.ERROR, t.handleError), Y.registerModule(Kr), Y.registerModule(Yr), Y.registerModule(ei), Y.registerModule(oi), Y.registerModule(ai), Y.registerModule(fi), Y.registerModule(hi), Y.registerModule(bi), Y.registerModule(Ci), Y.registerModule(Oi), Y.registerModule(Ti), e.use($o), e.use(nr), e.use(Ui);
  }
};
export {
  M as EMITTER_EVENT,
  _e as PROVIDER_KEY,
  de as WANGEDITOR_EVENT,
  Ki as default
};

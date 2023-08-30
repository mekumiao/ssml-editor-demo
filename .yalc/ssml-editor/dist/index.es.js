var ur = Object.defineProperty;
var cr = (e, t, n) => t in e ? ur(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ue = (e, t, n) => (cr(e, typeof t != "symbol" ? t + "" : t, n), n);
import { effectScope as cs, ref as g, markRaw as Le, toRaw as ie, hasInjectionContext as dr, inject as ds, getCurrentInstance as Xt, watch as te, unref as b, reactive as Lt, isRef as Xe, isReactive as Kt, toRef as $t, nextTick as Mt, computed as ne, getCurrentScope as fs, onScopeDispose as ps, toRefs as jt, shallowRef as Y, shallowReactive as et, defineComponent as L, openBlock as C, createElementBlock as I, normalizeClass as ye, withModifiers as oe, createElementVNode as h, toDisplayString as z, createBlock as K, withCtx as R, createVNode as y, renderSlot as Pe, customRef as fr, onMounted as ge, watchEffect as pr, Fragment as Z, renderList as le, createTextVNode as B, onUnmounted as Jt, Teleport as ms, withDirectives as Oe, normalizeStyle as bt, vShow as Te, createCommentVNode as Ee, provide as mr, pushScopeId as Qt, popScopeId as Zt } from "vue";
import { DomEditor as D, SlateNode as en, SlateEditor as X, SlateTransforms as W, SlateRange as pe, Boot as ce, SlateText as rt, SlateElement as vr, createEditor as hr } from "@wangeditor/editor";
import { ElForm as _t, ElInput as wt, ElPopover as Re, ElMenu as yr, ElMenuItem as gr, ElSelect as bn, ElOption as _n, ElButton as fe, ElTag as Ve, ElIcon as vs, ElSlider as kt, ElDialog as br } from "element-plus";
import { Search as _r, More as wr, StarFilled as xr, Star as Er, Minus as $r, Share as kr } from "@element-plus/icons-vue";
var hs = !1;
function it(e, t, n) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function St(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1);
    return;
  }
  delete e[t];
}
function Sr() {
  return ys().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function ys() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Cr = typeof Proxy == "function", Or = "devtools-plugin:setup", Tr = "plugin:settings:set";
let Ue, Ht;
function Pr() {
  var e;
  return Ue !== void 0 || (typeof window < "u" && window.performance ? (Ue = !0, Ht = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Ue = !0, Ht = global.perf_hooks.performance) : Ue = !1), Ue;
}
function Rr() {
  return Pr() ? Ht.now() : Date.now();
}
class Vr {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const s = {};
    if (t.settings)
      for (const a in t.settings) {
        const l = t.settings[a];
        s[a] = l.defaultValue;
      }
    const r = `__vue-devtools-plugin-settings__${t.id}`;
    let o = Object.assign({}, s);
    try {
      const a = localStorage.getItem(r), l = JSON.parse(a);
      Object.assign(o, l);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return o;
      },
      setSettings(a) {
        try {
          localStorage.setItem(r, JSON.stringify(a));
        } catch {
        }
        o = a;
      },
      now() {
        return Rr();
      }
    }, n && n.on(Tr, (a, l) => {
      a === this.plugin.id && this.fallbacks.setSettings(l);
    }), this.proxiedOn = new Proxy({}, {
      get: (a, l) => this.target ? this.target.on[l] : (...i) => {
        this.onQueue.push({
          method: l,
          args: i
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (a, l) => this.target ? this.target[l] : l === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(l) ? (...i) => (this.targetQueue.push({
        method: l,
        args: i,
        resolve: () => {
        }
      }), this.fallbacks[l](...i)) : (...i) => new Promise((u) => {
        this.targetQueue.push({
          method: l,
          args: i,
          resolve: u
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function gs(e, t) {
  const n = e, s = ys(), r = Sr(), o = Cr && n.enableEarlyProxy;
  if (r && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o))
    r.emit(Or, e, t);
  else {
    const a = o ? new Vr(n, r) : null;
    (s.__VUE_DEVTOOLS_PLUGINS__ = s.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: a
    }), a && t(a.proxiedTarget);
  }
}
/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let tt;
const ot = (e) => tt = e, bs = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function je(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Se;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Se || (Se = {}));
const xt = typeof window < "u", nt = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && xt, wn = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function Ir(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], { type: e.type }) : e;
}
function tn(e, t, n) {
  const s = new XMLHttpRequest();
  s.open("GET", e), s.responseType = "blob", s.onload = function() {
    xs(s.response, t, n);
  }, s.onerror = function() {
    console.error("could not download file");
  }, s.send();
}
function _s(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function ct(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
const dt = typeof navigator == "object" ? navigator : { userAgent: "" }, ws = /* @__PURE__ */ (() => /Macintosh/.test(dt.userAgent) && /AppleWebKit/.test(dt.userAgent) && !/Safari/.test(dt.userAgent))(), xs = xt ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !ws ? Nr : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in dt ? Dr : (
      // Fallback to using FileReader and a popup
      Ar
    )
  )
) : () => {
};
function Nr(e, t = "download", n) {
  const s = document.createElement("a");
  s.download = t, s.rel = "noopener", typeof e == "string" ? (s.href = e, s.origin !== location.origin ? _s(s.href) ? tn(e, t, n) : (s.target = "_blank", ct(s)) : ct(s)) : (s.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    ct(s);
  }, 0));
}
function Dr(e, t = "download", n) {
  if (typeof e == "string")
    if (_s(e))
      tn(e, t, n);
    else {
      const s = document.createElement("a");
      s.href = e, s.target = "_blank", setTimeout(function() {
        ct(s);
      });
    }
  else
    navigator.msSaveOrOpenBlob(Ir(e, n), t);
}
function Ar(e, t, n, s) {
  if (s = s || open("", "_blank"), s && (s.document.title = s.document.body.innerText = "downloading..."), typeof e == "string")
    return tn(e, t, n);
  const r = e.type === "application/octet-stream", o = /constructor/i.test(String(wn.HTMLElement)) || "safari" in wn, a = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((a || r && o || ws) && typeof FileReader < "u") {
    const l = new FileReader();
    l.onloadend = function() {
      let i = l.result;
      if (typeof i != "string")
        throw s = null, new Error("Wrong reader.result type");
      i = a ? i : i.replace(/^data:[^;]*;/, "data:attachment/file;"), s ? s.location.href = i : location.assign(i), s = null;
    }, l.readAsDataURL(e);
  } else {
    const l = URL.createObjectURL(e);
    s ? s.location.assign(l) : location.href = l, s = null, setTimeout(function() {
      URL.revokeObjectURL(l);
    }, 4e4);
  }
}
function Q(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function nn(e) {
  return "_a" in e && "install" in e;
}
function Es() {
  if (!("clipboard" in navigator))
    return Q("Your browser doesn't support the Clipboard API", "error"), !0;
}
function $s(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (Q('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Lr(e) {
  if (!Es())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), Q("Global state copied to clipboard.");
    } catch (t) {
      if ($s(t))
        return;
      Q("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function Mr(e) {
  if (!Es())
    try {
      ks(e, JSON.parse(await navigator.clipboard.readText())), Q("Global state pasted from clipboard.");
    } catch (t) {
      if ($s(t))
        return;
      Q("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function jr(e) {
  try {
    xs(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    Q("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let Ce;
function Hr() {
  Ce || (Ce = document.createElement("input"), Ce.type = "file", Ce.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      Ce.onchange = async () => {
        const s = Ce.files;
        if (!s)
          return t(null);
        const r = s.item(0);
        return t(r ? { text: await r.text(), file: r } : null);
      }, Ce.oncancel = () => t(null), Ce.onerror = n, Ce.click();
    });
  }
  return e;
}
async function Fr(e) {
  try {
    const n = await Hr()();
    if (!n)
      return;
    const { text: s, file: r } = n;
    ks(e, JSON.parse(s)), Q(`Global state imported from "${r.name}".`);
  } catch (t) {
    Q("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function ks(e, t) {
  for (const n in t) {
    const s = e.state.value[n];
    s && Object.assign(s, t[n]);
  }
}
function _e(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const Ss = "🍍 Pinia (root)", Ft = "_root";
function Ur(e) {
  return nn(e) ? {
    id: Ft,
    label: Ss
  } : {
    id: e.$id,
    label: e.$id
  };
}
function Br(e) {
  if (nn(e)) {
    const n = Array.from(e._s.keys()), s = e._s;
    return {
      state: n.map((o) => ({
        editable: !0,
        key: o,
        value: e.state.value[o]
      })),
      getters: n.filter((o) => s.get(o)._getters).map((o) => {
        const a = s.get(o);
        return {
          editable: !1,
          key: o,
          value: a._getters.reduce((l, i) => (l[i] = a[i], l), {})
        };
      })
    };
  }
  const t = {
    state: Object.keys(e.$state).map((n) => ({
      editable: !0,
      key: n,
      value: e.$state[n]
    }))
  };
  return e._getters && e._getters.length && (t.getters = e._getters.map((n) => ({
    editable: !1,
    key: n,
    value: e[n]
  }))), e._customProperties.size && (t.customProperties = Array.from(e._customProperties).map((n) => ({
    editable: !0,
    key: n,
    value: e[n]
  }))), t;
}
function zr(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: _e(e.type),
    key: _e(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function Wr(e) {
  switch (e) {
    case Se.direct:
      return "mutation";
    case Se.patchFunction:
      return "$patch";
    case Se.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let Ge = !0;
const ft = [], Ae = "pinia:mutations", se = "pinia", { assign: Gr } = Object, ht = (e) => "🍍 " + e;
function Yr(e, t) {
  gs({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: ft,
    app: e
  }, (n) => {
    typeof n.now != "function" && Q("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: Ae,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: se,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            Lr(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await Mr(t), n.sendInspectorTree(se), n.sendInspectorState(se);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            jr(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Fr(t), n.sendInspectorTree(se), n.sendInspectorState(se);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (s) => {
            const r = t._s.get(s);
            r ? typeof r.$reset != "function" ? Q(`Cannot reset "${s}" store because it doesn't have a "$reset" method implemented.`, "warn") : (r.$reset(), Q(`Store "${s}" reset.`)) : Q(`Cannot reset "${s}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((s, r) => {
      const o = s.componentInstance && s.componentInstance.proxy;
      if (o && o._pStores) {
        const a = s.componentInstance.proxy._pStores;
        Object.values(a).forEach((l) => {
          s.instanceData.state.push({
            type: ht(l.$id),
            key: "state",
            editable: !0,
            value: l._isOptionsAPI ? {
              _custom: {
                value: ie(l.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => l.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(l.$state).reduce((i, u) => (i[u] = l.$state[u], i), {})
            )
          }), l._getters && l._getters.length && s.instanceData.state.push({
            type: ht(l.$id),
            key: "getters",
            editable: !1,
            value: l._getters.reduce((i, u) => {
              try {
                i[u] = l[u];
              } catch (m) {
                i[u] = m;
              }
              return i;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((s) => {
      if (s.app === e && s.inspectorId === se) {
        let r = [t];
        r = r.concat(Array.from(t._s.values())), s.rootNodes = (s.filter ? r.filter((o) => "$id" in o ? o.$id.toLowerCase().includes(s.filter.toLowerCase()) : Ss.toLowerCase().includes(s.filter.toLowerCase())) : r).map(Ur);
      }
    }), n.on.getInspectorState((s) => {
      if (s.app === e && s.inspectorId === se) {
        const r = s.nodeId === Ft ? t : t._s.get(s.nodeId);
        if (!r)
          return;
        r && (s.state = Br(r));
      }
    }), n.on.editInspectorState((s, r) => {
      if (s.app === e && s.inspectorId === se) {
        const o = s.nodeId === Ft ? t : t._s.get(s.nodeId);
        if (!o)
          return Q(`store "${s.nodeId}" not found`, "error");
        const { path: a } = s;
        nn(o) ? a.unshift("state") : (a.length !== 1 || !o._customProperties.has(a[0]) || a[0] in o.$state) && a.unshift("$state"), Ge = !1, s.set(o, a, s.state.value), Ge = !0;
      }
    }), n.on.editComponentState((s) => {
      if (s.type.startsWith("🍍")) {
        const r = s.type.replace(/^🍍\s*/, ""), o = t._s.get(r);
        if (!o)
          return Q(`store "${r}" not found`, "error");
        const { path: a } = s;
        if (a[0] !== "state")
          return Q(`Invalid path for store "${r}":
${a}
Only state can be modified.`);
        a[0] = "$state", Ge = !1, s.set(o, a, s.state.value), Ge = !0;
      }
    });
  });
}
function qr(e, t) {
  ft.includes(ht(t.$id)) || ft.push(ht(t.$id)), gs({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: ft,
    app: e,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (n) => {
    const s = typeof n.now == "function" ? n.now.bind(n) : Date.now;
    t.$onAction(({ after: a, onError: l, name: i, args: u }) => {
      const m = Cs++;
      n.addTimelineEvent({
        layerId: Ae,
        event: {
          time: s(),
          title: "🛫 " + i,
          subtitle: "start",
          data: {
            store: _e(t.$id),
            action: _e(i),
            args: u
          },
          groupId: m
        }
      }), a((p) => {
        Ie = void 0, n.addTimelineEvent({
          layerId: Ae,
          event: {
            time: s(),
            title: "🛬 " + i,
            subtitle: "end",
            data: {
              store: _e(t.$id),
              action: _e(i),
              args: u,
              result: p
            },
            groupId: m
          }
        });
      }), l((p) => {
        Ie = void 0, n.addTimelineEvent({
          layerId: Ae,
          event: {
            time: s(),
            logType: "error",
            title: "💥 " + i,
            subtitle: "end",
            data: {
              store: _e(t.$id),
              action: _e(i),
              args: u,
              error: p
            },
            groupId: m
          }
        });
      });
    }, !0), t._customProperties.forEach((a) => {
      te(() => b(t[a]), (l, i) => {
        n.notifyComponentUpdate(), n.sendInspectorState(se), Ge && n.addTimelineEvent({
          layerId: Ae,
          event: {
            time: s(),
            title: "Change",
            subtitle: a,
            data: {
              newValue: l,
              oldValue: i
            },
            groupId: Ie
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: a, type: l }, i) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(se), !Ge)
        return;
      const u = {
        time: s(),
        title: Wr(l),
        data: Gr({ store: _e(t.$id) }, zr(a)),
        groupId: Ie
      };
      l === Se.patchFunction ? u.subtitle = "⤵️" : l === Se.patchObject ? u.subtitle = "🧩" : a && !Array.isArray(a) && (u.subtitle = a.type), a && (u.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: a
        }
      }), n.addTimelineEvent({
        layerId: Ae,
        event: u
      });
    }, { detached: !0, flush: "sync" });
    const r = t._hotUpdate;
    t._hotUpdate = Le((a) => {
      r(a), n.addTimelineEvent({
        layerId: Ae,
        event: {
          time: s(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: _e(t.$id),
            info: _e("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(se), n.sendInspectorState(se);
    });
    const { $dispose: o } = t;
    t.$dispose = () => {
      o(), n.notifyComponentUpdate(), n.sendInspectorTree(se), n.sendInspectorState(se), n.getSettings().logStoreChanges && Q(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(se), n.sendInspectorState(se), n.getSettings().logStoreChanges && Q(`"${t.$id}" store installed 🆕`);
  });
}
let Cs = 0, Ie;
function xn(e, t, n) {
  const s = t.reduce((r, o) => (r[o] = ie(e)[o], r), {});
  for (const r in s)
    e[r] = function() {
      const o = Cs, a = n ? new Proxy(e, {
        get(...i) {
          return Ie = o, Reflect.get(...i);
        },
        set(...i) {
          return Ie = o, Reflect.set(...i);
        }
      }) : e;
      Ie = o;
      const l = s[r].apply(a, arguments);
      return Ie = void 0, l;
    };
}
function Xr({ app: e, store: t, options: n }) {
  if (t.$id.startsWith("__hot:"))
    return;
  t._isOptionsAPI = !!n.state, xn(t, Object.keys(n.actions), t._isOptionsAPI);
  const s = t._hotUpdate;
  ie(t)._hotUpdate = function(r) {
    s.apply(this, arguments), xn(t, Object.keys(r._hmrPayload.actions), !!t._isOptionsAPI);
  }, qr(
    e,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    t
  );
}
function Kr() {
  const e = cs(!0), t = e.run(() => g({}));
  let n = [], s = [];
  const r = Le({
    install(o) {
      ot(r), r._a = o, o.provide(bs, r), o.config.globalProperties.$pinia = r, nt && Yr(o, r), s.forEach((a) => n.push(a)), s = [];
    },
    use(o) {
      return !this._a && !hs ? s.push(o) : n.push(o), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return nt && typeof Proxy < "u" && r.use(Xr), r;
}
function Os(e, t) {
  for (const n in t) {
    const s = t[n];
    if (!(n in e))
      continue;
    const r = e[n];
    je(r) && je(s) && !Xe(s) && !Kt(s) ? e[n] = Os(r, s) : e[n] = s;
  }
  return e;
}
const Ts = () => {
};
function En(e, t, n, s = Ts) {
  e.push(t);
  const r = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), s());
  };
  return !n && fs() && ps(r), r;
}
function Be(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Jr = (e) => e();
function Ut(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, s) => e.set(s, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], r = e[n];
    je(r) && je(s) && e.hasOwnProperty(n) && !Xe(s) && !Kt(s) ? e[n] = Ut(r, s) : e[n] = s;
  }
  return e;
}
const Qr = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function Zr(e) {
  return !je(e) || !e.hasOwnProperty(Qr);
}
const { assign: he } = Object;
function $n(e) {
  return !!(Xe(e) && e.effect);
}
function kn(e, t, n, s) {
  const { state: r, actions: o, getters: a } = t, l = n.state.value[e];
  let i;
  function u() {
    !l && (process.env.NODE_ENV === "production" || !s) && (n.state.value[e] = r ? r() : {});
    const m = process.env.NODE_ENV !== "production" && s ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      jt(g(r ? r() : {}).value)
    ) : jt(n.state.value[e]);
    return he(m, o, Object.keys(a || {}).reduce((p, f) => (process.env.NODE_ENV !== "production" && f in m && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${f}" in store "${e}".`), p[f] = Le(ne(() => {
      ot(n);
      const v = n._s.get(e);
      return a[f].call(v, v);
    })), p), {}));
  }
  return i = Bt(e, u, t, n, s, !0), i;
}
function Bt(e, t, n = {}, s, r, o) {
  let a;
  const l = he({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !s._e.active)
    throw new Error("Pinia destroyed");
  const i = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !hs && (i.onTrigger = (O) => {
    u ? v = O : u == !1 && !x._hotUpdating && (Array.isArray(v) ? v.push(O) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let u, m, p = [], f = [], v;
  const d = s.state.value[e];
  !o && !d && (process.env.NODE_ENV === "production" || !r) && (s.state.value[e] = {});
  const c = g({});
  let w;
  function S(O) {
    let T;
    u = m = !1, process.env.NODE_ENV !== "production" && (v = []), typeof O == "function" ? (O(s.state.value[e]), T = {
      type: Se.patchFunction,
      storeId: e,
      events: v
    }) : (Ut(s.state.value[e], O), T = {
      type: Se.patchObject,
      payload: O,
      storeId: e,
      events: v
    });
    const N = w = Symbol();
    Mt().then(() => {
      w === N && (u = !0);
    }), m = !0, Be(p, T, s.state.value[e]);
  }
  const V = o ? function() {
    const { state: T } = n, N = T ? T() : {};
    this.$patch((U) => {
      he(U, N);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : Ts
  );
  function $() {
    a.stop(), p = [], f = [], s._s.delete(e);
  }
  function k(O, T) {
    return function() {
      ot(s);
      const N = Array.from(arguments), U = [], j = [];
      function De(A) {
        U.push(A);
      }
      function Fe(A) {
        j.push(A);
      }
      Be(f, {
        args: N,
        name: O,
        store: x,
        after: De,
        onError: Fe
      });
      let q;
      try {
        q = T.apply(this && this.$id === e ? this : x, N);
      } catch (A) {
        throw Be(j, A), A;
      }
      return q instanceof Promise ? q.then((A) => (Be(U, A), A)).catch((A) => (Be(j, A), Promise.reject(A))) : (Be(U, q), q);
    };
  }
  const P = /* @__PURE__ */ Le({
    actions: {},
    getters: {},
    state: [],
    hotState: c
  }), _ = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: En.bind(null, f),
    $patch: S,
    $reset: V,
    $subscribe(O, T = {}) {
      const N = En(p, O, T.detached, () => U()), U = a.run(() => te(() => s.state.value[e], (j) => {
        (T.flush === "sync" ? m : u) && O({
          storeId: e,
          type: Se.direct,
          events: v
        }, j);
      }, he({}, i, T)));
      return N;
    },
    $dispose: $
  }, x = Lt(process.env.NODE_ENV !== "production" || nt ? he(
    {
      _hmrPayload: P,
      _customProperties: Le(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    _
    // must be added later
    // setupStore
  ) : _);
  s._s.set(e, x);
  const M = s._a && s._a.runWithContext || Jr, J = s._e.run(() => (a = cs(), M(() => a.run(t))));
  for (const O in J) {
    const T = J[O];
    if (Xe(T) && !$n(T) || Kt(T))
      process.env.NODE_ENV !== "production" && r ? it(c.value, O, $t(J, O)) : o || (d && Zr(T) && (Xe(T) ? T.value = d[O] : Ut(T, d[O])), s.state.value[e][O] = T), process.env.NODE_ENV !== "production" && P.state.push(O);
    else if (typeof T == "function") {
      const N = process.env.NODE_ENV !== "production" && r ? T : k(O, T);
      J[O] = N, process.env.NODE_ENV !== "production" && (P.actions[O] = T), l.actions[O] = T;
    } else
      process.env.NODE_ENV !== "production" && $n(T) && (P.getters[O] = o ? (
        // @ts-expect-error
        n.getters[O]
      ) : T, xt && (J._getters || // @ts-expect-error: same
      (J._getters = Le([]))).push(O));
  }
  if (he(x, J), he(ie(x), J), Object.defineProperty(x, "$state", {
    get: () => process.env.NODE_ENV !== "production" && r ? c.value : s.state.value[e],
    set: (O) => {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error("cannot set hotState");
      S((T) => {
        he(T, O);
      });
    }
  }), process.env.NODE_ENV !== "production" && (x._hotUpdate = Le((O) => {
    x._hotUpdating = !0, O._hmrPayload.state.forEach((T) => {
      if (T in x.$state) {
        const N = O.$state[T], U = x.$state[T];
        typeof N == "object" && je(N) && je(U) ? Os(N, U) : O.$state[T] = U;
      }
      it(x, T, $t(O.$state, T));
    }), Object.keys(x.$state).forEach((T) => {
      T in O.$state || St(x, T);
    }), u = !1, m = !1, s.state.value[e] = $t(O._hmrPayload, "hotState"), m = !0, Mt().then(() => {
      u = !0;
    });
    for (const T in O._hmrPayload.actions) {
      const N = O[T];
      it(x, T, k(T, N));
    }
    for (const T in O._hmrPayload.getters) {
      const N = O._hmrPayload.getters[T], U = o ? (
        // special handling of options api
        ne(() => (ot(s), N.call(x, x)))
      ) : N;
      it(x, T, U);
    }
    Object.keys(x._hmrPayload.getters).forEach((T) => {
      T in O._hmrPayload.getters || St(x, T);
    }), Object.keys(x._hmrPayload.actions).forEach((T) => {
      T in O._hmrPayload.actions || St(x, T);
    }), x._hmrPayload = O._hmrPayload, x._getters = O._getters, x._hotUpdating = !1;
  })), nt) {
    const O = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((T) => {
      Object.defineProperty(x, T, he({ value: x[T] }, O));
    });
  }
  return s._p.forEach((O) => {
    if (nt) {
      const T = a.run(() => O({
        store: x,
        app: s._a,
        pinia: s,
        options: l
      }));
      Object.keys(T || {}).forEach((N) => x._customProperties.add(N)), he(x, T);
    } else
      he(x, a.run(() => O({
        store: x,
        app: s._a,
        pinia: s,
        options: l
      })));
  }), process.env.NODE_ENV !== "production" && x.$state && typeof x.$state == "object" && typeof x.$state.constructor == "function" && !x.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${x.$id}".`), d && o && n.hydrate && n.hydrate(x.$state, d), u = !0, m = !0, x;
}
function sn(e, t, n) {
  let s, r;
  const o = typeof t == "function";
  if (typeof e == "string")
    s = e, r = o ? n : t;
  else if (r = e, s = e.id, process.env.NODE_ENV !== "production" && typeof s != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function a(l, i) {
    const u = dr();
    if (l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && tt && tt._testing ? null : l) || (u ? ds(bs, null) : null), l && ot(l), process.env.NODE_ENV !== "production" && !tt)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    l = tt, l._s.has(s) || (o ? Bt(s, t, r, l) : kn(s, r, l), process.env.NODE_ENV !== "production" && (a._pinia = l));
    const m = l._s.get(s);
    if (process.env.NODE_ENV !== "production" && i) {
      const p = "__hot:" + s, f = o ? Bt(p, t, r, l, !0) : kn(p, he({}, r), l, !0);
      i._hotUpdate(f), delete l.state.value[p], l._s.delete(p);
    }
    if (process.env.NODE_ENV !== "production" && xt) {
      const p = Xt();
      if (p && p.proxy && // avoid adding stores that are just built for hot module replacement
      !i) {
        const f = p.proxy, v = "_pStores" in f ? f._pStores : f._pStores = {};
        v[s] = m;
      }
    }
    return m;
  }
  return a.$id = s, a;
}
function Sn() {
  return { id: "", src: "" };
}
function de() {
  return () => Promise.resolve([]);
}
function Ps(e) {
  const t = (e == null ? void 0 : e.editorConfig) || { maxLength: 5e3, placeholder: "请输入内容..." }, n = (e == null ? void 0 : e.handleError) || (() => {
  }), s = (e == null ? void 0 : e.pinyin) || { fetchData: de() }, r = (e == null ? void 0 : e.english) || { fetchData: de() }, o = (e == null ? void 0 : e.special) || {
    fetchData: de(),
    fetchScene: de(),
    fetchStyle: de()
  }, a = (e == null ? void 0 : e.bgm) || {
    fetchData: de(),
    fetchScene: de(),
    fetchStyle: de()
  }, l = (e == null ? void 0 : e.tryPlay) || {
    fetchData: de(),
    featchTag: de(),
    fetchStar: de(),
    fetchFlag: de()
  }, i = (e == null ? void 0 : e.conversion) || {
    timeoutMilliseconds: 2e4,
    audioUpload: () => Sn(),
    transfer: () => Sn(),
    fetchSpeaker: de()
  }, u = o, m = a, p = l;
  return u.menus ?? (u.menus = [
    { label: "默认音效", value: "" },
    { label: "自定义音效", value: "custom" },
    { label: "最近音效", value: "history" }
  ]), m.menus ?? (m.menus = [
    { label: "默认配乐", value: "" },
    { label: "自定义配乐", value: "custom" },
    { label: "最近配乐", value: "history" }
  ]), p.gender ?? (p.gender = [
    { label: "全部", value: "" },
    { label: "男声", value: "Male" },
    { label: "女声", value: "Female" }
  ]), p.category ?? (p.category = [
    { label: "热榜", value: "" },
    { label: "SVIP", value: "SVIP" },
    { label: "付费", value: "付费" }
  ]), p.flags ?? (p.flags = [
    { label: "常用", value: "常用" },
    { label: "已购", value: "已购" },
    { label: "收藏", value: "收藏" },
    { label: "我的", value: "我的" }
  ]), {
    editorConfig: t,
    handleError: n,
    pinyin: s,
    english: r,
    bgm: m,
    special: u,
    tryPlay: p,
    conversion: i
  };
}
const eo = () => ({
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
}), to = () => ({
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
}), at = () => "https://img.sdaxia.top/upload/4314c841777e4d20901cd5d04a28e91a.png", me = sn("--editor-config", () => {
  const e = Y(), t = Y(), n = ne(() => e.value), s = ne(() => {
    if (t.value)
      return t.value;
    throw Error("请设置GlobalEditorConfig");
  });
  return { editor: n, globalEditConfig: s, setEditor: (a) => {
    e.value = a;
  }, setGlobalEditConfig: (a) => {
    t.value = a ?? Ps();
  } };
}), no = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => D.getNodeType(r) === "ssml-audio" ? !0 : t(r), s.isVoid = (r) => D.getNodeType(r) === "ssml-audio" ? !en.string(r) : n(r), s;
};
function Cn(e, t, n, s, r) {
  const o = t === void 0 ? void 0 : t.key;
  return { sel: e, data: t, children: n, text: s, elm: r, key: o };
}
const On = Array.isArray;
function Ct(e) {
  return typeof e == "string" || typeof e == "number" || e instanceof String || e instanceof Number;
}
function Rs(e, t, n) {
  if (e.ns = "http://www.w3.org/2000/svg", n !== "foreignObject" && t !== void 0)
    for (let s = 0; s < t.length; ++s) {
      const r = t[s];
      if (typeof r == "string")
        continue;
      const o = r.data;
      o !== void 0 && Rs(o, r.children, r.sel);
    }
}
function E(e, t, n) {
  let s = {}, r, o, a;
  if (n !== void 0 ? (t !== null && (s = t), On(n) ? r = n : Ct(n) ? o = n.toString() : n && n.sel && (r = [n])) : t != null && (On(t) ? r = t : Ct(t) ? o = t.toString() : t && t.sel ? r = [t] : s = t), r !== void 0)
    for (a = 0; a < r.length; ++a)
      Ct(r[a]) && (r[a] = Cn(void 0, void 0, void 0, r[a], void 0));
  return e[0] === "s" && e[1] === "v" && e[2] === "g" && (e.length === 3 || e[3] === "." || e[3] === "#") && Rs(s, r, e), Cn(e, s, r, o, void 0);
}
var Ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vs = "Expected a function", Tn = 0 / 0, so = "[object Symbol]", ro = /^\s+|\s+$/g, oo = /^[-+]0x[0-9a-f]+$/i, ao = /^0b[01]+$/i, lo = /^0o[0-7]+$/i, io = parseInt, uo = typeof Ye == "object" && Ye && Ye.Object === Object && Ye, co = typeof self == "object" && self && self.Object === Object && self, fo = uo || co || Function("return this")(), po = Object.prototype, mo = po.toString, vo = Math.max, ho = Math.min, Ot = function() {
  return fo.Date.now();
};
function yo(e, t, n) {
  var s, r, o, a, l, i, u = 0, m = !1, p = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(Vs);
  t = Pn(t) || 0, yt(n) && (m = !!n.leading, p = "maxWait" in n, o = p ? vo(Pn(n.maxWait) || 0, t) : o, f = "trailing" in n ? !!n.trailing : f);
  function v(_) {
    var x = s, M = r;
    return s = r = void 0, u = _, a = e.apply(M, x), a;
  }
  function d(_) {
    return u = _, l = setTimeout(S, t), m ? v(_) : a;
  }
  function c(_) {
    var x = _ - i, M = _ - u, J = t - x;
    return p ? ho(J, o - M) : J;
  }
  function w(_) {
    var x = _ - i, M = _ - u;
    return i === void 0 || x >= t || x < 0 || p && M >= o;
  }
  function S() {
    var _ = Ot();
    if (w(_))
      return V(_);
    l = setTimeout(S, c(_));
  }
  function V(_) {
    return l = void 0, f && s ? v(_) : (s = r = void 0, a);
  }
  function $() {
    l !== void 0 && clearTimeout(l), u = 0, s = i = r = l = void 0;
  }
  function k() {
    return l === void 0 ? a : V(Ot());
  }
  function P() {
    var _ = Ot(), x = w(_);
    if (s = arguments, r = this, i = _, x) {
      if (l === void 0)
        return d(i);
      if (p)
        return l = setTimeout(S, t), v(i);
    }
    return l === void 0 && (l = setTimeout(S, t)), a;
  }
  return P.cancel = $, P.flush = k, P;
}
function go(e, t, n) {
  var s = !0, r = !0;
  if (typeof e != "function")
    throw new TypeError(Vs);
  return yt(n) && (s = "leading" in n ? !!n.leading : s, r = "trailing" in n ? !!n.trailing : r), yo(e, t, {
    leading: s,
    maxWait: t,
    trailing: r
  });
}
function yt(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function bo(e) {
  return !!e && typeof e == "object";
}
function _o(e) {
  return typeof e == "symbol" || bo(e) && mo.call(e) == so;
}
function Pn(e) {
  if (typeof e == "number")
    return e;
  if (_o(e))
    return Tn;
  if (yt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = yt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(ro, "");
  var n = ao.test(e);
  return n || lo.test(e) ? io(e.slice(2), n ? 2 : 8) : oo.test(e) ? Tn : +e;
}
var wo = go;
const ae = /* @__PURE__ */ rn(wo);
function Rn(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function on(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {}), Object.keys(t).forEach(function(n) {
    typeof e[n] > "u" ? e[n] = t[n] : Rn(t[n]) && Rn(e[n]) && Object.keys(t[n]).length > 0 && on(e[n], t[n]);
  });
}
var Is = {
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
function an() {
  var e = typeof document < "u" ? document : {};
  return on(e, Is), e;
}
var xo = {
  document: Is,
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
function Ns() {
  var e = typeof window < "u" ? window : {};
  return on(e, xo), e;
}
function Eo(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function zt(e) {
  return zt = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, zt(e);
}
function gt(e, t) {
  return gt = Object.setPrototypeOf || function(s, r) {
    return s.__proto__ = r, s;
  }, gt(e, t);
}
function $o() {
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
function pt(e, t, n) {
  return $o() ? pt = Reflect.construct : pt = function(r, o, a) {
    var l = [null];
    l.push.apply(l, o);
    var i = Function.bind.apply(r, l), u = new i();
    return a && gt(u, a.prototype), u;
  }, pt.apply(null, arguments);
}
function ko(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Wt(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Wt = function(s) {
    if (s === null || !ko(s))
      return s;
    if (typeof s != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(s))
        return t.get(s);
      t.set(s, r);
    }
    function r() {
      return pt(s, arguments, zt(this).constructor);
    }
    return r.prototype = Object.create(s.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), gt(r, s);
  }, Wt(e);
}
function So(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Co(e) {
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
var Me = /* @__PURE__ */ function(e) {
  Eo(t, e);
  function t(n) {
    var s;
    return s = e.call.apply(e, [this].concat(n)) || this, Co(So(s)), s;
  }
  return t;
}(/* @__PURE__ */ Wt(Array));
function ln(e) {
  e === void 0 && (e = []);
  var t = [];
  return e.forEach(function(n) {
    Array.isArray(n) ? t.push.apply(t, ln(n)) : t.push(n);
  }), t;
}
function Oo(e) {
  for (var t = [], n = 0; n < e.length; n += 1)
    t.indexOf(e[n]) === -1 && t.push(e[n]);
  return t;
}
function To(e) {
  return e.toLowerCase().replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function Po(e, t) {
  if (typeof e != "string")
    return [e];
  for (var n = [], s = t.querySelectorAll(e), r = 0; r < s.length; r += 1)
    n.push(s[r]);
  return n;
}
function F(e, t) {
  var n = Ns(), s = an(), r = [];
  if (!t && e instanceof Me)
    return e;
  if (!e)
    return new Me(r);
  if (typeof e == "string") {
    var o = e.trim();
    if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
      var a = "div";
      o.indexOf("<li") === 0 && (a = "ul"), o.indexOf("<tr") === 0 && (a = "tbody"), (o.indexOf("<td") === 0 || o.indexOf("<th") === 0) && (a = "tr"), o.indexOf("<tbody") === 0 && (a = "table"), o.indexOf("<option") === 0 && (a = "select");
      var l = s.createElement(a);
      l.innerHTML = o;
      for (var i = 0; i < l.childNodes.length; i += 1)
        r.push(l.childNodes[i]);
    } else
      r = Po(e.trim(), t || s);
  } else if (e.nodeType || e === n || e === s)
    r.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof Me)
      return e;
    r = e;
  }
  return new Me(Oo(r));
}
F.fn = Me.prototype;
function Vn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = ln(t.map(function(r) {
    return r.split(" ");
  }));
  return this.forEach(function(r) {
    var o;
    (o = r.classList).add.apply(o, s);
  }), this;
}
function In() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = ln(t.map(function(r) {
    return r.split(" ");
  }));
  return this.forEach(function(r) {
    var o;
    (o = r.classList).remove.apply(o, s);
  }), this;
}
function Nn(e, t) {
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
function Dn() {
  var e = this[0];
  if (e) {
    var t = {};
    if (e.dataset)
      for (var n in e.dataset)
        t[n] = e.dataset[n];
    else
      for (var s = 0; s < e.attributes.length; s += 1) {
        var r = e.attributes[s];
        r.name.indexOf("data-") >= 0 && (t[To(r.name.split("data-")[1])] = r.value);
      }
    for (var o in t)
      t[o] === "false" ? t[o] = !1 : t[o] === "true" ? t[o] = !0 : parseFloat(t[o]) === t[o] * 1 && (t[o] *= 1);
    return t;
  }
}
function An(e) {
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
    var o = this[r];
    if (Array.isArray(e) && o.multiple && o.nodeName.toLowerCase() === "select")
      for (var a = 0; a < o.options.length; a += 1)
        o.options[a].selected = e.indexOf(o.options[a].value) >= 0;
    else
      o.value = e;
  }
  return this;
}
function Ln() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = t[0], r = t[1], o = t[2], a = t[3];
  typeof t[1] == "function" && (s = t[0], o = t[1], a = t[2], r = void 0), a || (a = !1);
  function l(c) {
    var w = c.target;
    if (w) {
      var S = c.target.dom7EventData || [];
      if (S.indexOf(c) < 0 && S.unshift(c), F(w).is(r))
        o.apply(w, S);
      else
        for (var V = F(w).parents(), $ = 0; $ < V.length; $ += 1)
          F(V[$]).is(r) && o.apply(V[$], S);
    }
  }
  function i(c) {
    var w = c && c.target ? c.target.dom7EventData || [] : [];
    w.indexOf(c) < 0 && w.unshift(c), o.apply(this, w);
  }
  for (var u = s.split(" "), m, p = 0; p < this.length; p += 1) {
    var f = this[p];
    if (r)
      for (m = 0; m < u.length; m += 1) {
        var d = u[m];
        f.dom7LiveListeners || (f.dom7LiveListeners = {}), f.dom7LiveListeners[d] || (f.dom7LiveListeners[d] = []), f.dom7LiveListeners[d].push({
          listener: o,
          proxyListener: l
        }), f.addEventListener(d, l, a);
      }
    else
      for (m = 0; m < u.length; m += 1) {
        var v = u[m];
        f.dom7Listeners || (f.dom7Listeners = {}), f.dom7Listeners[v] || (f.dom7Listeners[v] = []), f.dom7Listeners[v].push({
          listener: o,
          proxyListener: i
        }), f.addEventListener(v, i, a);
      }
  }
  return this;
}
function Mn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = t[0], r = t[1], o = t[2], a = t[3];
  typeof t[1] == "function" && (s = t[0], o = t[1], a = t[2], r = void 0), a || (a = !1);
  for (var l = s.split(" "), i = 0; i < l.length; i += 1)
    for (var u = l[i], m = 0; m < this.length; m += 1) {
      var p = this[m], f = void 0;
      if (!r && p.dom7Listeners ? f = p.dom7Listeners[u] : r && p.dom7LiveListeners && (f = p.dom7LiveListeners[u]), f && f.length)
        for (var v = f.length - 1; v >= 0; v -= 1) {
          var d = f[v];
          o && d.listener === o || o && d.listener && d.listener.dom7proxy && d.listener.dom7proxy === o ? (p.removeEventListener(u, d.proxyListener, a), f.splice(v, 1)) : o || (p.removeEventListener(u, d.proxyListener, a), f.splice(v, 1));
        }
    }
  return this;
}
function jn() {
  for (var e = 0; e < this.length; e += 1)
    this[e].style.display = "none";
  return this;
}
function Hn(e) {
  return e ? (this.forEach(function(t, n) {
    e.apply(t, [t, n]);
  }), this) : this;
}
function Fn(e) {
  if (typeof e > "u")
    return this[0] ? this[0].innerHTML : null;
  for (var t = 0; t < this.length; t += 1)
    this[t].innerHTML = e;
  return this;
}
function Un(e) {
  var t = Ns(), n = an(), s = this[0], r, o;
  if (!s || typeof e > "u")
    return !1;
  if (typeof e == "string") {
    if (s.matches)
      return s.matches(e);
    if (s.webkitMatchesSelector)
      return s.webkitMatchesSelector(e);
    if (s.msMatchesSelector)
      return s.msMatchesSelector(e);
    for (r = F(e), o = 0; o < r.length; o += 1)
      if (r[o] === s)
        return !0;
    return !1;
  }
  if (e === n)
    return s === n;
  if (e === t)
    return s === t;
  if (e.nodeType || e instanceof Me) {
    for (r = e.nodeType ? [e] : e, o = 0; o < r.length; o += 1)
      if (r[o] === s)
        return !0;
    return !1;
  }
  return !1;
}
function Bn() {
  for (var e, t = an(), n = 0; n < arguments.length; n += 1) {
    e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    for (var s = 0; s < this.length; s += 1)
      if (typeof e == "string") {
        var r = t.createElement("div");
        for (r.innerHTML = e; r.firstChild; )
          this[s].appendChild(r.firstChild);
      } else if (e instanceof Me)
        for (var o = 0; o < e.length; o += 1)
          this[s].appendChild(e[o]);
      else
        this[s].appendChild(e);
  }
  return this;
}
function zn(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var s = this[n].parentNode; s; )
      e ? F(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
  return F(t);
}
function Wn(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var s = this[n].querySelectorAll(e), r = 0; r < s.length; r += 1)
      t.push(s[r]);
  return F(t);
}
function Gn(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var s = this[n].children, r = 0; r < s.length; r += 1)
      (!e || F(s[r]).is(e)) && t.push(s[r]);
  return F(t);
}
var Ro = "resize scroll".split(" ");
function Ds(e) {
  function t() {
    for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)
      s[r] = arguments[r];
    if (typeof s[0] > "u") {
      for (var o = 0; o < this.length; o += 1)
        Ro.indexOf(e) < 0 && (e in this[o] ? this[o][e]() : F(this[o]).trigger(e));
      return this;
    }
    return this.on.apply(this, [e].concat(s));
  }
  return t;
}
var Yn = Ds("click"), qn = Ds("focus");
jn && (F.fn.hide = jn);
Bn && (F.fn.append = Bn);
Yn && (F.fn.click = Yn);
Ln && (F.fn.on = Ln);
Mn && (F.fn.off = Mn);
qn && (F.fn.focus = qn);
Nn && (F.fn.attr = Nn);
An && (F.fn.val = An);
Fn && (F.fn.html = Fn);
Dn && (F.fn.dataset = Dn);
Vn && (F.fn.addClass = Vn);
In && (F.fn.removeClass = In);
Gn && (F.fn.children = Gn);
Hn && (F.fn.each = Hn);
Wn && (F.fn.find = Wn);
Un && (F.fn.is = Un);
zn && (F.fn.parents = zn);
const Ad = globalThis.Node, Ld = globalThis.Comment, Md = globalThis.Element, jd = globalThis.Text, Hd = globalThis.Range, Fd = globalThis.Selection, Ud = globalThis.StaticRange;
let Vo = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function Bd(e = "r") {
  return `${e}-${Vo()}`;
}
class Io {
  constructor() {
    ue(this, "audio");
    ue(this, "src");
    this.audio = null, this.src = null;
  }
  removeAudioElement() {
    this.audio && (document.body.removeChild(this.audio), this.audio = null, this.src = null);
  }
  play(t) {
    this.stop(), this.audio = document.createElement("audio"), this.audio.hidden = !0, this.audio.volume = 0.5, this.audio.src = t, this.src = t, document.body.appendChild(this.audio), this.audio.play();
  }
  stop(t) {
    t && t !== this.src || this.audio && (this.audio.pause(), this.audio.currentTime = 0, this.removeAudioElement());
  }
}
const Ke = new Io();
function Xn(e) {
  const t = Math.floor(e / 60), n = e % 60, s = String(t).padStart(2, "0"), r = String(n).padStart(2, "0");
  return `${s}:${r}`;
}
class No {
  constructor(t, n) {
    ue(this, "id");
    ue(this, "accept");
    ue(this, "dom");
    ue(this, "isdestroy", !1);
    ue(this, "resolve");
    ue(this, "reject");
    this.id = `--editor-input-file-${t}`, this.accept = n, this.dom = null, this.resolve = null, this.reject = null;
  }
  createInputElement() {
    const t = document.createElement("input");
    return t.type = "file", t.accept = this.accept, t.hidden = !0, t;
  }
  change(t) {
    var n, s;
    if (this.dom && this.dom.files && this.dom.files.length > 0) {
      const r = this.dom.files.item(0);
      if (r) {
        (n = this.resolve) == null || n.call(this, r), this.dom.value = "";
        return;
      }
      this.dom.value = "";
    }
    return (s = this.reject) == null ? void 0 : s.call(this, t);
  }
  cancel(t) {
    var n;
    return this.dom && (this.dom.value = ""), (n = this.reject) == null ? void 0 : n.call(this, t);
  }
  open() {
    if (this.isdestroy)
      throw Error("对象已经销毁");
    this.dom || (this.dom = this.createInputElement(), this.dom.addEventListener("change", this.change.bind(this)), this.dom.addEventListener("cancel", this.cancel.bind(this)), document.body.appendChild(this.dom)), this.dom.click();
    const t = this;
    return new Promise((n, s) => {
      t.resolve = n, t.reject = s;
    });
  }
  destroy() {
    this.isdestroy || (this.dom && document.body.removeChild(this.dom), this.dom = null, this.isdestroy = !0);
  }
}
class Do {
  constructor(t) {
    ue(this, "cancelled", !1);
    ue(this, "timeoutId", null);
    this.timeoutMilliseconds = t;
  }
  get token() {
    return {
      isCancellationRequested: () => this.cancelled
    };
  }
  cancel() {
    this.cancelled = !0, this.clearTimeout();
  }
  clearTimeout() {
    this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  startTimeout() {
    this.timeoutId = setTimeout(() => {
      this.cancel();
    }, this.timeoutMilliseconds);
  }
}
function Ao(e) {
  const { selection: t } = e;
  if (t) {
    const [n, s] = pe.edges(t), r = X.range(e, n, s), o = X.string(e, r), a = o.trimEnd();
    if (a !== o) {
      const l = o.length - a.length, i = { ...s, offset: s.offset - l }, u = { ...t, anchor: n, focus: i };
      W.select(e, u);
    }
  }
}
function Kn(e, t) {
  X.withoutNormalizing(e, () => {
    const n = X.start(e, t), s = X.end(e, t);
    W.insertText(e, " ", { at: n }), W.insertText(e, " ", {
      at: { path: s.path, offset: s.offset + 1 }
    }), W.select(e, {
      anchor: { path: n.path, offset: n.offset + 1 },
      focus: { path: s.path, offset: s.offset + 1 }
    });
  });
}
function Je(e, t) {
  X.withoutNormalizing(e, () => {
    const n = X.before(e, t), s = X.after(e, t);
    if (!n || !s)
      return;
    const r = {
      anchor: { path: n.path, offset: n.offset - 1 },
      focus: { path: n.path, offset: n.offset }
    }, o = {
      anchor: { path: s.path, offset: s.offset },
      focus: { path: s.path, offset: s.offset + 1 }
    };
    X.string(e, r) === " " && W.delete(e, { at: r }), X.string(e, o) === " " && W.delete(e, { at: o });
  });
}
const Lo = {
  type: "ssml-audio",
  renderElem: (e, t, n) => t ? Mo(e, t, n) : jo(e, n)
};
function Mo(e, t, n) {
  const { remark: s, src: r } = e;
  return E("span.ssml-wrapper", [
    E("span.data-content", {
      props: { contentEditable: !1 },
      attrs: { "data-content": "{" },
      style: { color: "var(--ssml-audio)" }
    }),
    E("span", t),
    E("span.data-content", {
      props: { contentEditable: !1 },
      attrs: { "data-content": "}" },
      style: { color: "var(--ssml-audio)" }
    }),
    E(
      "span.remark",
      {
        props: { contentEditable: !1 },
        style: {
          backgroundColor: "var(--ssml-audio)"
        }
      },
      [
        E("span.iconfont.icon-roundclosefill", {
          on: {
            click: ae((o) => {
              o.preventDefault(), Ke.stop(r);
              const a = D.findPath(n, e);
              Je(n, a), W.unwrapNodes(n, { at: a });
            })
          }
        }),
        E("span.iconfont.icon-play", {
          on: {
            click: ae((o) => {
              o.preventDefault(), Ke.play(r);
            })
          }
        }),
        E("span.data-content", { attrs: { "data-content": s } })
      ]
    )
  ]);
}
function jo(e, t) {
  const { remark: n, src: s } = e;
  return E("span.ssml-wrapper.no-line-height", [
    E(
      "span.remark.left",
      {
        props: { contentEditable: !1 },
        style: {
          backgroundColor: "var(--ssml-audio)"
        }
      },
      [
        E("span.iconfont.icon-roundclosefill", {
          on: {
            click: ae((r) => {
              r.preventDefault(), Ke.stop(s);
              const o = D.findPath(t, e);
              W.delete(t, { at: o });
            })
          }
        }),
        E("span.iconfont.icon-play", {
          on: {
            click: ae((r) => {
              r.preventDefault(), Ke.play(s);
            })
          }
        }),
        E("span.data-content", { attrs: { "data-content": n } })
      ]
    )
  ]);
}
const Ho = {
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
}, Fo = {
  selector: 'span[data-w-e-type="ssml-audio"]',
  parseElemHtml: (e, t) => {
    const n = e.getAttribute("data-ow-src") || "", s = e.getAttribute("data-ow-remark") || "";
    return {
      type: "ssml-audio",
      src: n,
      remark: s,
      children: t
    };
  }
}, Uo = {
  editorPlugin: no,
  renderElems: [Lo],
  elemsToHtml: [Ho],
  parseElemsHtml: [Fo]
}, Bo = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => D.getNodeType(r) === "ssml-break" ? !0 : t(r), s.isVoid = (r) => D.getNodeType(r) === "ssml-break" ? !0 : n(r), s;
}, zo = {
  type: "ssml-break",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return E(
      "span.ssml-wrapper",
      {
        props: { contentEditable: !1 }
      },
      [
        E(
          "span.remark",
          {
            style: {
              backgroundColor: "var(--ssml-break)"
            }
          },
          [
            E("span.iconfont.icon-roundclosefill", {
              on: {
                click: ae((r) => {
                  r.preventDefault();
                  const o = D.findPath(n, e);
                  W.delete(n, { at: o });
                })
              }
            }),
            E("span.data-content", { attrs: { "data-content": s } })
          ]
        ),
        E("span.data-content", {
          attrs: { "data-content": "|" },
          style: { color: "var(--ssml-break)" }
        })
      ]
    );
  }
}, Wo = {
  type: "ssml-break",
  elemToHtml: (e) => {
    const { remark: t, time: n, strength: s } = e;
    return `<span
          data-w-e-type="ssml-break"
          data-w-e-is-void
          data-w-e-is-inline
          data-ow-remark="${t}"
          data-ow-time="${n ?? ""}"
          data-ow-strength="${s ?? "medium"}"
        ></span>`;
  }
}, Go = {
  selector: 'span[data-w-e-type="ssml-break"]',
  parseElemHtml: (e) => {
    const t = e.getAttribute("data-ow-remark") || "", n = e.getAttribute("data-ow-time") || "", s = e.getAttribute("data-ow-strength") || "";
    return {
      type: "ssml-break",
      remark: t,
      time: n,
      strength: s,
      children: [{ text: "" }]
    };
  }
}, Yo = {
  editorPlugin: Bo,
  renderElems: [zo],
  elemsToHtml: [Wo],
  parseElemsHtml: [Go]
}, qo = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => D.getNodeType(r) === "ssml-emphasis" ? !0 : t(r), s.isVoid = (r) => D.getNodeType(r) === "ssml-emphasis" ? !1 : n(r), s;
}, Xo = {
  type: "ssml-emphasis",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return E("span.ssml-wrapper", [
      E("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-emphasis)" }
      }),
      E("span", t),
      E("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-emphasis)" }
      }),
      E(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-emphasis)"
          }
        },
        [
          E("span.iconfont.icon-roundclosefill", {
            on: {
              click: ae((r) => {
                r.preventDefault();
                const o = D.findPath(n, e);
                W.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, Ko = {
  type: "ssml-emphasis",
  elemToHtml: (e, t) => {
    const { remark: n, level: s } = e;
    return `<span
          data-w-e-type="ssml-emphasis"
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-level="${s ?? "none"}"
        >${t}</span>`;
  }
}, Jo = {
  selector: 'span[data-w-e-type="ssml-emphasis"]',
  parseElemHtml: (e, t) => {
    const n = e.getAttribute("data-ow-remark") || "", s = e.getAttribute("data-ow-level") || "";
    return {
      type: "ssml-emphasis",
      remark: n,
      level: s,
      children: t
    };
  }
}, Qo = {
  editorPlugin: qo,
  renderElems: [Xo],
  elemsToHtml: [Ko],
  parseElemsHtml: [Jo]
}, Zo = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => D.getNodeType(r) === "ssml-mstts:express-as" ? !0 : t(r), s.isVoid = (r) => D.getNodeType(r) === "ssml-mstts:express-as" ? !1 : n(r), s;
}, ea = {
  type: "ssml-mstts:express-as",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return E("span.ssml-wrapper", [
      E("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-mstts--express-as)" }
      }),
      E("span", t),
      E("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-mstts--express-as)" }
      }),
      E(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-mstts--express-as)"
          }
        },
        [
          E("span.iconfont.icon-roundclosefill", {
            on: {
              click: ae((r) => {
                r.preventDefault();
                const o = D.findPath(n, e);
                W.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, ta = {
  type: "ssml-mstts:express-as",
  elemToHtml: (e, t) => {
    const { remark: n, style: s, role: r, styledegree: o } = e;
    return `<span
          data-w-e-type="ssml-mstts:express-as"
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-style="${s}"
          data-ow-styledegree="${o ?? ""}"
          data-ow-role="${r ?? ""}"
        >${t}</span>`;
  }
}, na = {
  selector: 'span[data-w-e-type="ssml-mstts:express-as"]',
  parseElemHtml: (e, t) => {
    const n = e.getAttribute("data-ow-remark") || "", s = e.getAttribute("data-ow-style") || "", r = e.getAttribute("data-ow-styledegree") || "", o = e.getAttribute("data-ow-role") || "";
    return {
      type: "ssml-mstts:express-as",
      style: s,
      remark: n,
      styledegree: r,
      role: o,
      children: t
    };
  }
}, sa = {
  editorPlugin: Zo,
  renderElems: [ea],
  elemsToHtml: [ta],
  parseElemsHtml: [na]
}, ra = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => D.getNodeType(r) === "ssml-p" ? !0 : t(r), s.isVoid = (r) => D.getNodeType(r) === "ssml-p" ? !1 : n(r), s;
}, oa = {
  type: "ssml-p",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return E("span.ssml-wrapper", [
      E("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-p)" }
      }),
      E("span", t),
      E("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-p)" }
      }),
      E(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-p)"
          }
        },
        [
          E("span.iconfont.icon-roundclosefill", {
            on: {
              click: ae((r) => {
                r.preventDefault();
                const o = D.findPath(n, e);
                W.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, aa = {
  type: "ssml-p",
  elemToHtml: (e, t) => {
    const { remark: n } = e;
    return `<span
          data-w-e-type="ssml-p"
          data-w-e-is-inline
          data-ow-remark="${n}"
        >${t}</span>`;
  }
}, la = {
  selector: 'span[data-w-e-type="ssml-p"]',
  parseElemHtml: (e, t) => ({
    type: "ssml-p",
    remark: e.getAttribute("data-ow-remark") || "",
    children: t
  })
}, ia = {
  editorPlugin: ra,
  renderElems: [oa],
  elemsToHtml: [aa],
  parseElemsHtml: [la]
}, ua = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => D.getNodeType(r) === "ssml-phoneme" ? !0 : t(r), s.isVoid = (r) => D.getNodeType(r) === "ssml-phoneme" ? !1 : n(r), s;
}, ca = {
  type: "ssml-phoneme",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return E("span.ssml-wrapper", [
      E("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-phoneme)" }
      }),
      E("span", t),
      E("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-phoneme)" }
      }),
      E(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-phoneme)"
          }
        },
        [
          E("span.iconfont.icon-roundclosefill", {
            on: {
              click: ae((r) => {
                r.preventDefault();
                const o = D.findPath(n, e);
                Je(n, o), W.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, da = {
  type: "ssml-phoneme",
  elemToHtml: (e, t) => {
    const { remark: n, alphabet: s, ph: r } = e;
    return `<span
          data-w-e-type="ssml-phoneme"
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-alphabet="${s ?? ""}"
          data-ow-ph="${r}"
        >${t}</span>`;
  }
}, fa = {
  selector: 'span[data-w-e-type="ssml-phoneme"]',
  parseElemHtml: (e, t) => {
    const n = e.getAttribute("data-ow-remark") || "", s = e.getAttribute("data-ow-alphabet") || "", r = e.getAttribute("data-ow-ph") || "";
    return {
      type: "ssml-phoneme",
      remark: n,
      alphabet: s,
      ph: r,
      children: t
    };
  }
}, pa = {
  editorPlugin: ua,
  renderElems: [ca],
  elemsToHtml: [da],
  parseElemsHtml: [fa]
}, ma = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => D.getNodeType(r) === "ssml-prosody" ? !0 : t(r), s.isVoid = (r) => D.getNodeType(r) === "ssml-prosody" ? !1 : n(r), s;
}, va = {
  type: "ssml-prosody",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return E("span.ssml-wrapper", [
      E("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-prosody)" }
      }),
      E("span", t),
      E("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-prosody)" }
      }),
      E(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-prosody)"
          }
        },
        [
          E("span.iconfont.icon-roundclosefill", {
            on: {
              click: ae((r) => {
                r.preventDefault();
                const o = D.findPath(n, e);
                Je(n, o), W.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, ha = {
  type: "ssml-prosody",
  elemToHtml: (e, t) => {
    const { remark: n, contour: s, pitch: r, range: o, rate: a, volume: l } = e;
    return `<span
          data-w-e-type="ssml-prosody"
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-contour="${s ?? ""}"
          data-ow-pitch="${r ?? ""}"
          data-ow-range="${o ?? ""}"
          data-ow-rate="${a ?? ""}"
          data-ow-volume="${l ?? ""}"
        >${t}</span>`;
  }
}, ya = {
  selector: 'span[data-w-e-type="ssml-prosody"]',
  parseElemHtml: (e, t) => {
    const n = e.getAttribute("data-ow-remark") || "", s = e.getAttribute("data-ow-contour") || "", r = e.getAttribute("data-ow-pitch ") || "", o = e.getAttribute("data-ow-range") || "", a = e.getAttribute("data-ow-rate") || void 0, l = e.getAttribute("data-ow-volume") || "";
    return {
      type: "ssml-prosody",
      remark: n,
      contour: s,
      pitch: r,
      range: o,
      rate: a,
      volume: l,
      children: t
    };
  }
}, ga = {
  editorPlugin: ma,
  renderElems: [va],
  elemsToHtml: [ha],
  parseElemsHtml: [ya]
}, ba = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => D.getNodeType(r) === "ssml-s" ? !0 : t(r), s.isVoid = (r) => D.getNodeType(r) === "ssml-s" ? !1 : n(r), s;
}, _a = {
  type: "ssml-s",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return E("span.ssml-wrapper", [
      E("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-s)" }
      }),
      E("span", t),
      E("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-s)" }
      }),
      E(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-s)"
          }
        },
        [
          E("span.iconfont.icon-roundclosefill", {
            on: {
              click: ae((r) => {
                r.preventDefault();
                const o = D.findPath(n, e);
                W.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, wa = {
  type: "ssml-s",
  elemToHtml: (e, t) => {
    const { remark: n } = e;
    return `<span
          data-w-e-type="ssml-s"
          data-w-e-is-inline
          data-ow-remark="${n}"
        >${t}</span>`;
  }
}, xa = {
  selector: 'span[data-w-e-type="ssml-s"]',
  parseElemHtml: (e, t) => ({
    type: "ssml-s",
    remark: e.getAttribute("data-ow-remark") || "",
    children: t
  })
}, Ea = {
  editorPlugin: ba,
  renderElems: [_a],
  elemsToHtml: [wa],
  parseElemsHtml: [xa]
}, $a = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => D.getNodeType(r) === "ssml-say-as" ? !0 : t(r), s.isVoid = (r) => D.getNodeType(r) === "ssml-say-as" ? !1 : n(r), s;
}, ka = {
  type: "ssml-say-as",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return E("span.ssml-wrapper", [
      E("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-say-as)" }
      }),
      E("span", t),
      E("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-say-as)" }
      }),
      E(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-say-as)"
          }
        },
        [
          E("span.iconfont.icon-roundclosefill", {
            on: {
              click: ae((r) => {
                r.preventDefault();
                const o = D.findPath(n, e);
                Je(n, o), W.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, Sa = {
  type: "ssml-say-as",
  elemToHtml: (e, t) => {
    const { remark: n, interpretAs: s, detail: r, format: o } = e;
    return `<span
          data-w-e-type="ssml-say-as"
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-interpretAs="${s}"
          data-ow-detail="${r ?? ""}"
          data-ow-format="${o ?? ""}"
        >${t}</span>`;
  }
}, Ca = {
  selector: 'span[data-w-e-type="ssml-say-as"]',
  parseElemHtml: (e, t) => {
    const n = e.getAttribute("data-ow-remark") || "", s = e.getAttribute("data-ow-interpretAs") || "", r = e.getAttribute("data-ow-format") || "", o = e.getAttribute("data-ow-detail") || "";
    return {
      type: "ssml-say-as",
      remark: n,
      interpretAs: s,
      detail: o,
      format: r,
      children: t
    };
  }
}, Oa = {
  editorPlugin: $a,
  renderElems: [ka],
  elemsToHtml: [Sa],
  parseElemsHtml: [Ca]
}, Ta = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => D.getNodeType(r) === "ssml-sub" ? !0 : t(r), s.isVoid = (r) => D.getNodeType(r) === "ssml-sub" ? !1 : n(r), s;
}, Pa = {
  type: "ssml-sub",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return E("span.ssml-wrapper", [
      E("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-sub)" }
      }),
      E("span", t),
      E("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-sub)" }
      }),
      E(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-sub)"
          }
        },
        [
          E("span.iconfont.icon-roundclosefill", {
            on: {
              click: ae((r) => {
                r.preventDefault();
                const o = D.findPath(n, e);
                Je(n, o), W.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, Ra = {
  type: "ssml-sub",
  elemToHtml: (e, t) => {
    const { remark: n, alias: s } = e;
    return `<span
          data-w-e-type="ssml-sub"
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-alias="${s}"
        >${t}</span>`;
  }
}, Va = {
  selector: 'span[data-w-e-type="ssml-sub"]',
  parseElemHtml: (e, t) => {
    const n = e.getAttribute("data-ow-remark") || "", s = e.getAttribute("data-ow-alias") || "";
    return {
      type: "ssml-sub",
      remark: n,
      alias: s,
      children: t
    };
  }
}, Ia = {
  editorPlugin: Ta,
  renderElems: [Pa],
  elemsToHtml: [Ra],
  parseElemsHtml: [Va]
}, Na = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => D.getNodeType(r) === "ssml-voice" ? !0 : t(r), s.isVoid = (r) => D.getNodeType(r) === "ssml-voice" ? !1 : n(r), s;
}, Da = {
  type: "ssml-voice",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return E("span.ssml-wrapper", [
      E("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-voice)" }
      }),
      E("span", t),
      E("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-voice)" }
      }),
      E(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-voice)"
          }
        },
        [
          E("span.iconfont.icon-roundclosefill", {
            on: {
              click: ae((r) => {
                r.preventDefault();
                const o = D.findPath(n, e);
                W.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, Aa = {
  type: "ssml-voice",
  elemToHtml: (e, t) => {
    const { remark: n, name: s, effect: r } = e;
    return `<span
          data-w-e-type="ssml-voice"
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-name="${s}"
          data-ow-effect="${r ?? ""}"
        >${t}</span>`;
  }
}, La = {
  selector: 'span[data-w-e-type="ssml-voice"]',
  parseElemHtml: (e, t) => {
    const n = e.getAttribute("data-ow-remark") || "", s = e.getAttribute("data-ow-name") || "", r = e.getAttribute("data-ow-effect") || "";
    return {
      type: "ssml-voice",
      remark: n,
      name: s,
      effect: r,
      children: t
    };
  }
}, Ma = {
  editorPlugin: Na,
  renderElems: [Da],
  elemsToHtml: [Aa],
  parseElemsHtml: [La]
}, ja = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => D.getNodeType(r) === "custom-management" ? !0 : t(r), s.isVoid = (r) => D.getNodeType(r) === "custom-management" ? !1 : n(r), s;
}, Ha = {
  type: "custom-management",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return E("span.ssml-wrapper", [
      E("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{{" },
        style: { color: "var(--custom-management)" }
      }),
      E("span", t),
      E("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}}" },
        style: { color: "var(--custom-management)" }
      }),
      E(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--custom-management)"
          }
        },
        [
          E("span.iconfont.icon-roundclosefill", {
            on: {
              click: ae((r) => {
                r.preventDefault();
                const o = D.findPath(n, e);
                Je(n, o), W.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, Fa = {
  type: "custom-management",
  elemToHtml: (e, t) => {
    const { remark: n, style: s, role: r, name: o, pitch: a, rate: l } = e;
    return `<span
          data-w-e-type="custom-management"
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-style="${s}"
          data-ow-name="${o}"
          data-ow-role="${r}"
          data-ow-pitch="${a}"
          data-ow-rate="${l}"
        >${t}</span>`;
  }
}, Ua = {
  selector: 'span[data-w-e-type="custom-management"]',
  parseElemHtml: (e, t) => {
    const n = e.getAttribute("data-ow-remark") || "", s = e.getAttribute("data-ow-name") || "", r = e.getAttribute("data-ow-role") || "", o = e.getAttribute("data-ow-style") || "", a = e.getAttribute("data-ow-pitch") || "", l = e.getAttribute("data-ow-rate") || "";
    return {
      type: "custom-management",
      remark: n,
      name: s,
      role: r,
      style: o,
      pitch: a,
      rate: l,
      children: t
    };
  }
}, Ba = {
  editorPlugin: ja,
  renderElems: [Ha],
  elemsToHtml: [Fa],
  parseElemsHtml: [Ua]
}, za = (e) => {
  const {
    deleteBackward: t,
    deleteForward: n,
    insertBreak: s,
    apply: r,
    normalizeNode: o,
    insertText: a,
    insertData: l,
    setFragmentData: i,
    insertNode: u
  } = e, m = e;
  m.deleteBackward = (f) => {
    t(f);
  }, m.deleteForward = (f) => {
    n(f);
  }, m.insertBreak = () => {
    s();
  }, m.normalizeNode = (f) => {
    o(f);
  }, m.apply = (f) => {
    r(f);
  }, m.insertData = (f) => (f.types.includes("application/x-slate-fragment") || f.setData("text/html", f.getData("text/plain").trim()), l(f)), m.setFragmentData = (f) => {
    i(f);
    const v = f.getData("text/plain").replaceAll(/[\s]/gi, "");
    f.setData("text/plain", v);
  }, m.insertText = (f) => {
    a(f);
  };
  const p = [
    "ssml-prosody",
    "ssml-sub",
    "custom-management",
    "ssml-phoneme",
    "ssml-say-as"
  ];
  return m.insertNode = (f) => {
    const v = D.getNodeType(f);
    return p.includes(v) ? (e.selection && Kn(e, e.selection), W.insertNodes(e, f)) : v === "ssml-audio" && en.string(f) ? (e.selection && Kn(e, e.selection), W.insertNodes(e, f)) : u(f);
  }, m;
};
const Wa = {
  install() {
    ce.registerModule(Uo), ce.registerModule(Yo), ce.registerModule(Qo), ce.registerModule(sa), ce.registerModule(ia), ce.registerModule(pa), ce.registerModule(ga), ce.registerModule(Ea), ce.registerModule(Oa), ce.registerModule(Ia), ce.registerModule(Ma), ce.registerModule(Ba), ce.registerPlugin(za);
  }
}, He = sn("--editor-ssml", () => {
  const e = et({
    type: "ssml-speak",
    version: "1.0",
    xmlLang: "zh-CN",
    xmlns: "http://www.w3.org/2001/10/synthesis",
    "xmlns:mstts": "http://www.w3.org/2001/mstts",
    "xmlns:emo": "http://www.w3.org/2009/10/emotionml",
    remark: "",
    children: []
  }), t = et({
    name: "zh-CN-XiaomoNeural",
    type: "ssml-voice",
    remark: "Xiaomo-晓墨",
    effect: "",
    children: []
  }), n = et({
    type: "ssml-mstts:backgroundaudio",
    src: "",
    remark: "",
    children: []
  }), s = et({
    type: "ssml-mstts:express-as",
    style: "",
    role: "",
    remark: "",
    children: []
  }), r = et({
    type: "ssml-prosody",
    remark: "",
    children: []
  });
  return { rootSpeak: e, rootVoice: t, rootBackgroundaudio: n, rootExpressAs: s, rootProsody: r };
});
function ut() {
  return { label: "", value: "" };
}
function Ga() {
  return {
    id: "",
    avatar: "",
    isFree: !1,
    isStar: !1,
    isSupper24K: !1,
    roles: [],
    styles: [],
    label: "",
    value: ""
  };
}
function As() {
  return {
    word: "",
    category: "",
    gender: "",
    tag: ""
  };
}
const un = sn("--editor-try-play", () => {
  const e = He(), t = g(Ga());
  return { speaker: ne(() => t.value), setSpeaker: (r) => {
    t.value = r, e.rootVoice.name = r.value;
  } };
}), Ya = { class: "bar-button-icon" }, qa = {
  class: "fw-normal",
  style: { "font-size": "0.85rem" }
}, Xa = /* @__PURE__ */ L({
  __name: "bar-button",
  props: {
    text: {},
    icon: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, s = () => {
      if (!n.disabled) {
        const { editor: r } = me();
        r && t("click", r);
      }
    };
    return (r, o) => (C(), I("div", {
      class: ye(["bar-button px-2 py-1", { disabled: r.disabled }]),
      onClick: s,
      onMousedown: o[0] || (o[0] = oe(() => {
      }, ["prevent"]))
    }, [
      h("div", Ya, [
        h("span", {
          class: ye(["fs-3 iconfont-moyin", [`moyin-icon_${r.icon}`]])
        }, null, 2)
      ]),
      h("div", qa, z(r.text), 1)
    ], 34));
  }
});
const ve = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, re = /* @__PURE__ */ ve(Xa, [["__scopeId", "data-v-2da9a7ca"]]);
const cn = /* @__PURE__ */ L({
  __name: "bar-input",
  props: {
    type: {}
  },
  emits: ["submit"],
  setup(e, { expose: t, emit: n }) {
    const s = g(""), r = g();
    function o() {
      r.value.focus();
    }
    function a() {
      n("submit", s.value), s.value = "";
    }
    return t({
      focus: o
    }), (l, i) => (C(), K(b(_t), {
      onSubmit: oe(a, ["prevent"])
    }, {
      default: R(() => [
        y(b(wt), {
          type: l.type,
          ref_key: "inputRef",
          ref: r,
          modelValue: s.value,
          "onUpdate:modelValue": i[0] || (i[0] = (u) => s.value = u)
        }, null, 8, ["type", "modelValue"])
      ]),
      _: 1
    }, 8, ["onSubmit"]));
  }
});
const Ka = /* @__PURE__ */ L({
  __name: "bar-popover",
  props: {
    visible: { type: Boolean },
    trigger: {},
    hideAfter: {},
    width: {}
  },
  emits: ["update:visible"],
  setup(e) {
    return (t, n) => (C(), K(b(Re), {
      hideAfter: t.hideAfter,
      width: t.width,
      visible: t.visible,
      trigger: t.trigger,
      "onUpdate:visible": n[0] || (n[0] = (s) => t.$emit("update:visible", s))
    }, {
      reference: R(() => [
        Pe(t.$slots, "reference")
      ]),
      default: R(() => [
        Pe(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["hideAfter", "width", "visible", "trigger"]));
  }
});
function Et(e) {
  return fs() ? (ps(e), !0) : !1;
}
function we(e) {
  return typeof e == "function" ? e() : b(e);
}
const Ls = typeof window < "u", Ja = (e) => e != null, mt = () => {
};
var Qa = Object.defineProperty, Za = Object.defineProperties, el = Object.getOwnPropertyDescriptors, Jn = Object.getOwnPropertySymbols, tl = Object.prototype.hasOwnProperty, nl = Object.prototype.propertyIsEnumerable, Qn = (e, t, n) => t in e ? Qa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, sl = (e, t) => {
  for (var n in t || (t = {}))
    tl.call(t, n) && Qn(e, n, t[n]);
  if (Jn)
    for (var n of Jn(t))
      nl.call(t, n) && Qn(e, n, t[n]);
  return e;
}, rl = (e, t) => Za(e, el(t));
function ol(e, t = {}) {
  if (!Xe(e))
    return jt(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const s in e.value)
    n[s] = fr(() => ({
      get() {
        return e.value[s];
      },
      set(r) {
        var o;
        if ((o = we(t.replaceRef)) != null ? o : !0)
          if (Array.isArray(e.value)) {
            const l = [...e.value];
            l[s] = r, e.value = l;
          } else {
            const l = rl(sl({}, e.value), { [s]: r });
            Object.setPrototypeOf(l, Object.getPrototypeOf(e.value)), e.value = l;
          }
        else
          e.value[s] = r;
      }
    }));
  return n;
}
function Ms(e, t = !0) {
  Xt() ? ge(e) : t ? e() : Mt(e);
}
function xe(e) {
  var t;
  const n = we(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Ne = Ls ? window : void 0;
function qe(...e) {
  let t, n, s, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, r] = e, t = Ne) : [t, n, s, r] = e, !t)
    return mt;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const o = [], a = () => {
    o.forEach((m) => m()), o.length = 0;
  }, l = (m, p, f, v) => (m.addEventListener(p, f, v), () => m.removeEventListener(p, f, v)), i = te(
    () => [xe(t), we(r)],
    ([m, p]) => {
      a(), m && o.push(
        ...n.flatMap((f) => s.map((v) => l(m, f, v, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    i(), a();
  };
  return Et(u), u;
}
function al() {
  const e = g(!1);
  return Xt() && ge(() => {
    e.value = !0;
  }), e;
}
function dn(e) {
  const t = al();
  return ne(() => (t.value, !!e()));
}
function ll(e, t = {}) {
  const { window: n = Ne } = t, s = dn(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let r;
  const o = g(!1), a = (u) => {
    o.value = u.matches;
  }, l = () => {
    r && ("removeEventListener" in r ? r.removeEventListener("change", a) : r.removeListener(a));
  }, i = pr(() => {
    s.value && (l(), r = n.matchMedia(we(e)), "addEventListener" in r ? r.addEventListener("change", a) : r.addListener(a), o.value = r.matches);
  });
  return Et(() => {
    i(), l(), r = void 0;
  }), o;
}
var il = Object.defineProperty, ul = Object.defineProperties, cl = Object.getOwnPropertyDescriptors, Zn = Object.getOwnPropertySymbols, dl = Object.prototype.hasOwnProperty, fl = Object.prototype.propertyIsEnumerable, es = (e, t, n) => t in e ? il(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, pl = (e, t) => {
  for (var n in t || (t = {}))
    dl.call(t, n) && es(e, n, t[n]);
  if (Zn)
    for (var n of Zn(t))
      fl.call(t, n) && es(e, n, t[n]);
  return e;
}, ml = (e, t) => ul(e, cl(t));
function fn(e, t = {}) {
  var n, s;
  const {
    pointerTypes: r,
    preventDefault: o,
    stopPropagation: a,
    exact: l,
    onMove: i,
    onEnd: u,
    onStart: m,
    initialValue: p,
    axis: f = "both",
    draggingElement: v = Ne,
    handle: d = e
  } = t, c = g(
    (n = we(p)) != null ? n : { x: 0, y: 0 }
  ), w = g(), S = (_) => r ? r.includes(_.pointerType) : !0, V = (_) => {
    we(o) && _.preventDefault(), we(a) && _.stopPropagation();
  }, $ = (_) => {
    if (!S(_) || we(l) && _.target !== we(e))
      return;
    const x = we(e).getBoundingClientRect(), M = {
      x: _.clientX - x.left,
      y: _.clientY - x.top
    };
    (m == null ? void 0 : m(M, _)) !== !1 && (w.value = M, V(_));
  }, k = (_) => {
    if (!S(_) || !w.value)
      return;
    let { x, y: M } = c.value;
    (f === "x" || f === "both") && (x = _.clientX - w.value.x), (f === "y" || f === "both") && (M = _.clientY - w.value.y), c.value = {
      x,
      y: M
    }, i == null || i(c.value, _), V(_);
  }, P = (_) => {
    S(_) && w.value && (w.value = void 0, u == null || u(c.value, _), V(_));
  };
  if (Ls) {
    const _ = { capture: (s = t.capture) != null ? s : !0 };
    qe(d, "pointerdown", $, _), qe(v, "pointermove", k, _), qe(v, "pointerup", P, _);
  }
  return ml(pl({}, ol(c)), {
    position: c,
    isDragging: ne(() => !!w.value),
    style: ne(
      () => `left:${c.value.x}px;top:${c.value.y}px;`
    )
  });
}
var ts = Object.getOwnPropertySymbols, vl = Object.prototype.hasOwnProperty, hl = Object.prototype.propertyIsEnumerable, yl = (e, t) => {
  var n = {};
  for (var s in e)
    vl.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && ts)
    for (var s of ts(e))
      t.indexOf(s) < 0 && hl.call(e, s) && (n[s] = e[s]);
  return n;
};
function js(e, t, n = {}) {
  const s = n, { window: r = Ne } = s, o = yl(s, ["window"]);
  let a;
  const l = dn(() => r && "ResizeObserver" in r), i = () => {
    a && (a.disconnect(), a = void 0);
  }, u = ne(
    () => Array.isArray(e) ? e.map((f) => xe(f)) : [xe(e)]
  ), m = te(
    u,
    (f) => {
      if (i(), l.value && r) {
        a = new ResizeObserver(t);
        for (const v of f)
          v && a.observe(v, o);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), p = () => {
    i(), m();
  };
  return Et(p), {
    isSupported: l,
    stop: p
  };
}
function lt(e, t = {}) {
  const {
    reset: n = !0,
    windowResize: s = !0,
    windowScroll: r = !0,
    immediate: o = !0
  } = t, a = g(0), l = g(0), i = g(0), u = g(0), m = g(0), p = g(0), f = g(0), v = g(0);
  function d() {
    const c = xe(e);
    if (!c) {
      n && (a.value = 0, l.value = 0, i.value = 0, u.value = 0, m.value = 0, p.value = 0, f.value = 0, v.value = 0);
      return;
    }
    const w = c.getBoundingClientRect();
    a.value = w.height, l.value = w.bottom, i.value = w.left, u.value = w.right, m.value = w.top, p.value = w.width, f.value = w.x, v.value = w.y;
  }
  return js(e, d), te(() => xe(e), (c) => !c && d()), r && qe("scroll", d, { capture: !0, passive: !0 }), s && qe("resize", d, { passive: !0 }), Ms(() => {
    o && d();
  }), {
    height: a,
    bottom: l,
    left: i,
    right: u,
    top: m,
    width: p,
    x: f,
    y: v,
    update: d
  };
}
function gl(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: s = Ne, box: r = "content-box" } = n, o = ne(() => {
    var i, u;
    return (u = (i = xe(e)) == null ? void 0 : i.namespaceURI) == null ? void 0 : u.includes("svg");
  }), a = g(t.width), l = g(t.height);
  return js(
    e,
    ([i]) => {
      const u = r === "border-box" ? i.borderBoxSize : r === "content-box" ? i.contentBoxSize : i.devicePixelContentBoxSize;
      if (s && o.value) {
        const m = xe(e);
        if (m) {
          const p = s.getComputedStyle(m);
          a.value = Number.parseFloat(p.width), l.value = Number.parseFloat(p.height);
        }
      } else if (u) {
        const m = Array.isArray(u) ? u : [u];
        a.value = m.reduce((p, { inlineSize: f }) => p + f, 0), l.value = m.reduce((p, { blockSize: f }) => p + f, 0);
      } else
        a.value = i.contentRect.width, l.value = i.contentRect.height;
    },
    n
  ), te(
    () => xe(e),
    (i) => {
      a.value = i ? t.width : 0, l.value = i ? t.height : 0;
    }
  ), {
    width: a,
    height: l
  };
}
function bl(e, t, n = {}) {
  const {
    root: s,
    rootMargin: r = "0px",
    threshold: o = 0.1,
    window: a = Ne,
    immediate: l = !0
  } = n, i = dn(() => a && "IntersectionObserver" in a), u = ne(() => {
    const d = we(e);
    return (Array.isArray(d) ? d : [d]).map(xe).filter(Ja);
  });
  let m = mt;
  const p = g(l), f = i.value ? te(
    () => [u.value, xe(s), p.value],
    ([d, c]) => {
      if (m(), !p.value || !d.length)
        return;
      const w = new IntersectionObserver(
        t,
        {
          root: xe(c),
          rootMargin: r,
          threshold: o
        }
      );
      d.forEach((S) => S && w.observe(S)), m = () => {
        w.disconnect(), m = mt;
      };
    },
    { immediate: l, flush: "post" }
  ) : mt, v = () => {
    m(), f(), p.value = !1;
  };
  return Et(v), {
    isSupported: i,
    isActive: p,
    pause() {
      m(), p.value = !1;
    },
    resume() {
      p.value = !0;
    },
    stop: v
  };
}
function pn(e, { window: t = Ne, scrollTarget: n } = {}) {
  const s = g(!1);
  return bl(
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
function _l(e = {}) {
  const {
    window: t = Ne,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: s = Number.POSITIVE_INFINITY,
    listenOrientation: r = !0,
    includeScrollbar: o = !0
  } = e, a = g(n), l = g(s), i = () => {
    t && (o ? (a.value = t.innerWidth, l.value = t.innerHeight) : (a.value = t.document.documentElement.clientWidth, l.value = t.document.documentElement.clientHeight));
  };
  if (i(), Ms(i), qe("resize", i, { passive: !0 }), r) {
    const u = ll("(orientation: portrait)");
    te(u, () => i());
  }
  return { width: a, height: l };
}
const wl = { class: "search-content w-100" }, xl = { class: "ps-2 w-75" }, El = { class: "menu ps-2" }, $l = { class: "flex flex-row pt-1" }, kl = {
  class: "content-list overflow-x-hidden overflow-y-auto py-2",
  style: { height: "250px" }
}, Sl = ["onClick"], Cl = /* @__PURE__ */ h("span", { class: "iconfont icon-play" }, null, -1), Ol = { class: "ps-2" }, mn = /* @__PURE__ */ L({
  __name: "bar-search",
  props: {
    menus: {},
    fetchScene: { type: Function },
    fetchStyle: { type: Function },
    fetchData: { type: Function },
    sceneList: {},
    styleList: {},
    dataList: {}
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const n = e, s = g(), r = g(""), o = g(""), a = g(""), l = g(""), i = g(n.dataList || []), u = g(n.sceneList || []), m = g(n.styleList || []), p = pn(s);
    te(p, (c) => {
      c && setTimeout(() => {
        var w;
        (w = s.value) == null || w.focus();
      }, 100);
    }), ge(async () => {
      i.value.length || await f(), u.value.length || (u.value = await n.fetchScene()), m.value.length || (m.value = await n.fetchStyle());
    });
    async function f() {
      i.value = await n.fetchData({
        word: r.value,
        menu: l.value,
        scene: o.value,
        style: a.value
      });
    }
    function v(c) {
      l.value = c, f();
    }
    function d(c) {
      t("submit", c);
    }
    return (c, w) => (C(), I("div", wl, [
      h("div", xl, [
        y(b(_t), {
          onSubmit: oe(f, ["prevent"])
        }, {
          default: R(() => [
            y(b(wt), {
              ref_key: "searchInputRef",
              ref: s,
              placeholder: "搜索",
              modelValue: r.value,
              "onUpdate:modelValue": w[0] || (w[0] = (S) => r.value = S),
              "suffix-icon": b(_r)
            }, null, 8, ["modelValue", "suffix-icon"])
          ]),
          _: 1
        }, 8, ["onSubmit"])
      ]),
      h("div", El, [
        y(b(yr), {
          mode: "horizontal",
          "default-active": c.menus.length > 0 ? c.menus[0].value : "",
          onSelect: w[1] || (w[1] = (S) => v(S))
        }, {
          default: R(() => [
            (C(!0), I(Z, null, le(c.menus, (S, V) => (C(), K(b(gr), {
              index: S.value,
              key: V
            }, {
              default: R(() => [
                B(z(S.label), 1)
              ]),
              _: 2
            }, 1032, ["index"]))), 128))
          ]),
          _: 1
        }, 8, ["default-active"])
      ]),
      h("div", $l, [
        y(b(bn), {
          modelValue: o.value,
          "onUpdate:modelValue": w[2] || (w[2] = (S) => o.value = S),
          onChange: f,
          class: "m-1",
          size: "default"
        }, {
          default: R(() => [
            (C(!0), I(Z, null, le(u.value, (S) => (C(), K(b(_n), {
              key: S.value,
              label: S.label,
              value: S.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        y(b(bn), {
          modelValue: a.value,
          "onUpdate:modelValue": w[3] || (w[3] = (S) => a.value = S),
          onChange: f,
          class: "m-1",
          size: "default"
        }, {
          default: R(() => [
            (C(!0), I(Z, null, le(m.value, (S) => (C(), K(b(_n), {
              key: S.value,
              label: S.label,
              value: S.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      h("ul", kl, [
        (C(!0), I(Z, null, le(i.value, (S, V) => (C(), I("li", {
          onClick: ($) => d(ie(S)),
          class: "content-list-item clickable ps-2 py-2",
          key: V
        }, [
          Cl,
          h("span", Ol, z(S.label), 1)
        ], 8, Sl))), 128))
      ])
    ]));
  }
});
const Tl = {}, Pl = { class: "content" };
function Rl(e, t) {
  return C(), I("div", Pl, [
    Pe(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Hs = /* @__PURE__ */ ve(Tl, [["render", Rl], ["__scopeId", "data-v-7beae5b9"]]), Vl = {}, Il = { class: "bar-wrapper-item" };
function Nl(e, t) {
  return C(), I("div", Il, [
    Pe(e.$slots, "default")
  ]);
}
const Dl = /* @__PURE__ */ ve(Vl, [["render", Nl]]), Al = { class: "bar-wrapper-group" }, Ll = { class: "group-items" }, Ml = /* @__PURE__ */ L({
  __name: "bar-wrapper-group",
  props: {
    divider: {}
  },
  setup(e) {
    return (t, n) => (C(), I("div", Al, [
      h("div", Ll, [
        Pe(t.$slots, "default", {}, void 0, !0)
      ]),
      h("div", {
        class: ye(["divider", [t.divider]])
      }, null, 2)
    ]));
  }
});
const We = /* @__PURE__ */ ve(Ml, [["__scopeId", "data-v-be31f837"]]);
function jl(e, t) {
  return `left:${e}px;top:${t}px`;
}
function vn(e, t) {
  const { width: n, height: s } = gl(e), { width: r, height: o } = _l(), a = ne(() => ({
    x: r.value - n.value,
    y: o.value - s.value
  }));
  return { style: ne(() => {
    const i = t.value.x, u = t.value.y, m = i < 5 ? 5 : i > a.value.x ? a.value.x - 5 : i, p = u < 5 ? 5 : u > a.value.y ? a.value.y - 5 : u;
    return jl(m, p);
  }) };
}
var Gt = { exports: {} }, Fs = { exports: {} }, Hl = void 0, Us = function(e) {
  return e !== Hl && e !== null;
}, Fl = Us, Ul = {
  object: !0,
  function: !0,
  undefined: !0
  /* document.all */
}, Bl = function(e) {
  return Fl(e) ? hasOwnProperty.call(Ul, typeof e) : !1;
}, zl = Bl, Wl = function(e) {
  if (!zl(e))
    return !1;
  try {
    return e.constructor ? e.constructor.prototype === e : !1;
  } catch {
    return !1;
  }
}, Gl = Wl, Yl = function(e) {
  if (typeof e != "function" || !hasOwnProperty.call(e, "length"))
    return !1;
  try {
    if (typeof e.length != "number" || typeof e.call != "function" || typeof e.apply != "function")
      return !1;
  } catch {
    return !1;
  }
  return !Gl(e);
}, ql = Yl, Xl = /^\s*class[\s{/}]/, Kl = Function.prototype.toString, Jl = function(e) {
  return !(!ql(e) || Xl.test(Kl.call(e)));
}, Ql = function() {
  var e = Object.assign, t;
  return typeof e != "function" ? !1 : (t = { foo: "raz" }, e(t, { bar: "dwa" }, { trzy: "trzy" }), t.foo + t.bar + t.trzy === "razdwatrzy");
}, Tt, ns;
function Zl() {
  return ns || (ns = 1, Tt = function() {
    try {
      return Object.keys("primitive"), !0;
    } catch {
      return !1;
    }
  }), Tt;
}
var ei = function() {
}, ti = ei(), hn = function(e) {
  return e !== ti && e !== null;
}, Pt, ss;
function ni() {
  if (ss)
    return Pt;
  ss = 1;
  var e = hn, t = Object.keys;
  return Pt = function(n) {
    return t(e(n) ? Object(n) : n);
  }, Pt;
}
var Rt, rs;
function si() {
  return rs || (rs = 1, Rt = Zl()() ? Object.keys : ni()), Rt;
}
var Vt, os;
function ri() {
  if (os)
    return Vt;
  os = 1;
  var e = hn;
  return Vt = function(t) {
    if (!e(t))
      throw new TypeError("Cannot use null or undefined");
    return t;
  }, Vt;
}
var It, as;
function oi() {
  if (as)
    return It;
  as = 1;
  var e = si(), t = ri(), n = Math.max;
  return It = function(s, r) {
    var o, a, l = n(arguments.length, 2), i;
    for (s = Object(t(s)), i = function(u) {
      try {
        s[u] = r[u];
      } catch (m) {
        o || (o = m);
      }
    }, a = 1; a < l; ++a)
      r = arguments[a], e(r).forEach(i);
    if (o !== void 0)
      throw o;
    return s;
  }, It;
}
var ai = Ql() ? Object.assign : oi(), li = hn, ii = Array.prototype.forEach, ui = Object.create, ci = function(e, t) {
  var n;
  for (n in e)
    t[n] = e[n];
}, di = function(e) {
  var t = ui(null);
  return ii.call(arguments, function(n) {
    li(n) && ci(Object(n), t);
  }), t;
}, Nt = "razdwatrzy", fi = function() {
  return typeof Nt.contains != "function" ? !1 : Nt.contains("dwa") === !0 && Nt.contains("foo") === !1;
}, Dt, ls;
function pi() {
  if (ls)
    return Dt;
  ls = 1;
  var e = String.prototype.indexOf;
  return Dt = function(t) {
    return e.call(this, t, arguments[1]) > -1;
  }, Dt;
}
var mi = fi() ? String.prototype.contains : pi(), vt = Us, is = Jl, Bs = ai, zs = di, st = mi, vi = Fs.exports = function(e, t) {
  var n, s, r, o, a;
  return arguments.length < 2 || typeof e != "string" ? (o = t, t = e, e = null) : o = arguments[2], vt(e) ? (n = st.call(e, "c"), s = st.call(e, "e"), r = st.call(e, "w")) : (n = r = !0, s = !1), a = { value: t, configurable: n, enumerable: s, writable: r }, o ? Bs(zs(o), a) : a;
};
vi.gs = function(e, t, n) {
  var s, r, o, a;
  return typeof e != "string" ? (o = n, n = t, t = e, e = null) : o = arguments[3], vt(t) ? is(t) ? vt(n) ? is(n) || (o = n, n = void 0) : n = void 0 : (o = t, t = n = void 0) : t = void 0, vt(e) ? (s = st.call(e, "c"), r = st.call(e, "e")) : (s = !0, r = !1), a = { get: t, set: n, configurable: s, enumerable: r }, o ? Bs(zs(o), a) : a;
};
var hi = Fs.exports, yi = function(e) {
  if (typeof e != "function")
    throw new TypeError(e + " is not a function");
  return e;
};
(function(e, t) {
  var n = hi, s = yi, r = Function.prototype.apply, o = Function.prototype.call, a = Object.create, l = Object.defineProperty, i = Object.defineProperties, u = Object.prototype.hasOwnProperty, m = { configurable: !0, enumerable: !1, writable: !0 }, p, f, v, d, c, w, S;
  p = function(V, $) {
    var k;
    return s($), u.call(this, "__ee__") ? k = this.__ee__ : (k = m.value = a(null), l(this, "__ee__", m), m.value = null), k[V] ? typeof k[V] == "object" ? k[V].push($) : k[V] = [k[V], $] : k[V] = $, this;
  }, f = function(V, $) {
    var k, P;
    return s($), P = this, p.call(this, V, k = function() {
      v.call(P, V, k), r.call($, this, arguments);
    }), k.__eeOnceListener__ = $, this;
  }, v = function(V, $) {
    var k, P, _, x;
    if (s($), !u.call(this, "__ee__"))
      return this;
    if (k = this.__ee__, !k[V])
      return this;
    if (P = k[V], typeof P == "object")
      for (x = 0; _ = P[x]; ++x)
        (_ === $ || _.__eeOnceListener__ === $) && (P.length === 2 ? k[V] = P[x ? 0 : 1] : P.splice(x, 1));
    else
      (P === $ || P.__eeOnceListener__ === $) && delete k[V];
    return this;
  }, d = function(V) {
    var $, k, P, _, x;
    if (u.call(this, "__ee__") && (_ = this.__ee__[V], !!_))
      if (typeof _ == "object") {
        for (k = arguments.length, x = new Array(k - 1), $ = 1; $ < k; ++$)
          x[$ - 1] = arguments[$];
        for (_ = _.slice(), $ = 0; P = _[$]; ++$)
          r.call(P, this, x);
      } else
        switch (arguments.length) {
          case 1:
            o.call(_, this);
            break;
          case 2:
            o.call(_, this, arguments[1]);
            break;
          case 3:
            o.call(_, this, arguments[1], arguments[2]);
            break;
          default:
            for (k = arguments.length, x = new Array(k - 1), $ = 1; $ < k; ++$)
              x[$ - 1] = arguments[$];
            r.call(_, this, x);
        }
  }, c = {
    on: p,
    once: f,
    off: v,
    emit: d
  }, w = {
    on: n(p),
    once: n(f),
    off: n(v),
    emit: n(d)
  }, S = i({}, w), e.exports = t = function(V) {
    return V == null ? a(S) : i(Object(V), w);
  }, t.methods = c;
})(Gt, Gt.exports);
var gi = Gt.exports;
const bi = /* @__PURE__ */ rn(gi), $e = bi(), _i = "wangeditor-error", G = {
  ERROR: _i
}, wi = "emitter-error", xi = "emitter-view-click", Ei = "emitter-view-keydown", ke = { ERROR: wi, VIEW_CLICK: xi, VIEW_KEYDOWN: Ei }, $i = { class: "w-100 d-flex flex-row align-items-center" }, Qe = /* @__PURE__ */ L({
  __name: "drag-box",
  props: {
    visible: { type: Boolean },
    initialValue: {}
  },
  emits: ["update:visible", "close"],
  setup(e, { expose: t, emit: n }) {
    const s = e, r = g(), o = g(), a = g(), { position: l } = fn(o, {
      initialValue: s.initialValue
    }), { style: i } = vn(r, l);
    function u(d) {
      l.value = d;
    }
    t({
      setPosition: u
    }), ge(() => {
      $e.on(ke.VIEW_CLICK, m), document.addEventListener("keydown", v);
    }), Jt(() => {
      $e.off(ke.VIEW_CLICK, m), document.removeEventListener("keydown", v);
    });
    function m(d) {
      p(d) && f();
    }
    function p(d) {
      const c = d.target;
      return !(!r.value || !a.value || a.value.contains(c) || r.value.contains(c));
    }
    function f() {
      n("update:visible", !1), n("close");
    }
    function v(d) {
      d.code === "Escape" && f();
    }
    return (d, c) => (C(), I(Z, null, [
      h("div", {
        ref_key: "referenceRef",
        ref: a,
        onMousedown: c[0] || (c[0] = oe(() => {
        }, ["prevent"]))
      }, [
        Pe(d.$slots, "reference")
      ], 544),
      (C(), K(ms, { to: "body" }, [
        Oe(h("div", {
          ref_key: "boxRef",
          ref: r,
          class: "demotestname card shadow brag-box user-select-none",
          style: bt([{ position: "fixed" }, b(i)]),
          onMousedown: c[1] || (c[1] = oe(() => {
          }, ["prevent"]))
        }, [
          h("div", $i, [
            h("div", {
              ref_key: "dragRef",
              ref: o,
              class: "w-100",
              style: { height: "40px", cursor: "move" }
            }, null, 512),
            h("span", {
              onClick: f,
              class: "btn iconfont icon-close fs-5"
            })
          ]),
          Pe(d.$slots, "default")
        ], 36), [
          [Te, d.visible]
        ])
      ]))
    ], 64));
  }
}), ki = {
  install(e) {
    e.component("BarButton", re), e.component("BarInput", cn), e.component("BarPopover", Ka), e.component("BarSearch", mn), e.component("BarWrapper", Hs), e.component("BarWrapperItem", Dl), e.component("BarWrapperGroup", We), e.component("DragBox", Qe);
  }
};
class be {
  constructor(t) {
    ue(this, "editor");
    this.editor = t;
  }
  getValue() {
    const { selection: t } = this.editor;
    return t == null ? "" : X.string(this.editor, t);
  }
  isDisabled() {
    const { selection: t } = this.editor;
    return t == null ? (this.editor.emit(G.ERROR, "未选中编辑器"), !0) : !1;
  }
}
class Si extends be {
  constructor(t) {
    super(t);
  }
  getValue() {
    return super.getValue();
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    if (!t)
      return !0;
    if (pe.isCollapsed(t))
      return this.editor.emit(G.ERROR, "请选中文本"), !0;
    const n = this.getValue();
    return n.length != 1 ? !0 : /^[\u4E00-\u9FA5]+$/gi.test(n) ? !1 : (this.editor.emit(G.ERROR, "选中一个中文字符，并且有不能在其他语句之内"), !0);
  }
  exec(t) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const n = this.getValue();
    if (n == null)
      return;
    const s = {
      type: "ssml-phoneme",
      alphabet: "sapi",
      ph: t.value,
      remark: t.label,
      children: [{ text: n }]
    };
    this.editor.insertNode(s);
  }
}
const Ws = /* @__PURE__ */ L({
  setup() {
    const {
      globalEditConfig: e
    } = me(), t = Y(), n = g([]), s = g(!1);
    function r() {
      s.value || (s.value = !0);
    }
    function o() {
      s.value && (s.value = !1);
    }
    async function a(l) {
      var u;
      if (t.value ?? (t.value = new Si(l)), (u = t.value) != null && u.isDisabled())
        return;
      const i = t.value.getValue();
      if (i ? n.value = await e.pinyin.fetchData(i) : n.value = [], n.value.length == 0)
        return l.emit(G.ERROR, "选中的字符没有不是多音字");
      r();
    }
    return () => y(Re, {
      visible: s.value,
      "onUpdate:visible": (l) => s.value = l,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => y(re, {
        text: "多音字",
        icon: "speaker",
        onClick: a
      }, null),
      default: () => y("div", {
        class: "d-flex flex-column overflow-x-hidden overflow-y-auto",
        style: "max-height: 300px"
      }, [n.value.map(({
        label: l,
        value: i
      }) => y("div", {
        key: i,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          t.value && !t.value.isDisabled() && t.value.exec({
            label: l,
            value: i
          }), o();
        },
        onMousedown: oe(() => {
        }, ["stop", "prevent"])
      }, [l]))])
    });
  }
});
class Ci extends be {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t ? pe.isCollapsed(t) ? (this.editor.emit(G.ERROR, "请选择多个中文字符或者多个多个英文单词"), !0) : X.string(this.editor, t).length < 2 : !0;
  }
  exec() {
    if (this.isDisabled())
      return;
    const t = this.getValue();
    if (t == null)
      return;
    const n = {
      type: "ssml-prosody",
      rate: "medium",
      remark: "连读",
      children: [{ text: t }]
    };
    this.editor.insertNode(n);
  }
}
const Gs = /* @__PURE__ */ L({
  setup() {
    const e = Y();
    function t(n) {
      e.value ?? (e.value = new Ci(n)), !e.value.isDisabled() && e.value.exec();
    }
    return () => y(re, {
      text: "连读",
      icon: "continuous",
      onClick: t
    }, null);
  }
}), Oi = [
  { label: "重音", value: "z" },
  { label: "拖音", value: "t" },
  { label: "重音+拖音", value: "z+t" }
], Ti = {
  z: { pitch: "x-high", rate: void 0 },
  t: { pitch: void 0, rate: "medium" },
  "z+t": { pitch: "x-high", rate: "medium" }
};
class Pi extends be {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return !t || t == null ? !0 : pe.isCollapsed(t) ? (this.editor.emit(G.ERROR, "请先选择文本"), !0) : !1;
  }
  exec(t) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const n = this.getValue();
    if (n == null)
      return;
    const { pitch: s, rate: r } = Ti[t.value], o = {
      type: "ssml-prosody",
      remark: t.label,
      pitch: s,
      rate: r,
      children: [{ text: n }]
    };
    this.editor.insertNode(o);
  }
}
const Ys = /* @__PURE__ */ L({
  setup() {
    const e = Y(), t = g(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    function r(o) {
      e.value ?? (e.value = new Pi(o)), !e.value.isDisabled() && n();
    }
    return () => y(Re, {
      visible: t.value,
      "onUpdate:visible": (o) => t.value = o,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => y(re, {
        text: "重音",
        icon: "read",
        onClick: r
      }, null),
      default: () => y("div", {
        class: "d-flex flex-column",
        onMousedown: oe(() => {
        }, ["stop", "prevent"])
      }, [Oi.map(({
        label: o,
        value: a
      }) => y("div", {
        key: a,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && e.value.exec({
            label: o,
            value: a
          }), s();
        },
        onMousedown: oe(() => {
        }, ["stop", "prevent"])
      }, [o]))])
    });
  }
});
class Ri extends be {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    if (!t)
      return !0;
    if (pe.isCollapsed(t))
      return this.editor.emit(G.ERROR, "请选择纯数字"), !0;
    const n = X.string(this.editor, t);
    return n.length <= 0 ? !0 : Number.isNaN(Number(n)) ? (this.editor.emit(G.ERROR, "请选择纯数字"), !0) : !1;
  }
  exec(t) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const n = this.getValue();
    if (n == null)
      return;
    const s = {
      type: "ssml-say-as",
      interpretAs: t.value,
      remark: t.label,
      children: [{ text: n }]
    };
    this.editor.insertNode(s);
  }
}
const Vi = [{
  value: "cardinal",
  label: "读数值"
}, {
  value: "characters",
  label: "读数字"
}, {
  value: "telephone",
  label: "读手机号"
}], qs = /* @__PURE__ */ L({
  setup() {
    const e = Y(), t = g(!1);
    function n() {
      t.value = !t.value;
    }
    function s(r) {
      e.value ?? (e.value = new Ri(r)), !e.value.isDisabled() && n();
    }
    return () => y(Re, {
      visible: t.value,
      "onUpdate:visible": (r) => t.value = r,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => y(re, {
        text: "数字符号",
        icon: "digital",
        onClick: s
      }, null),
      default: () => y("div", {
        class: "d-flex flex-column"
      }, [Vi.map(({
        label: r,
        value: o
      }) => y("div", {
        key: o,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && e.value.exec({
            label: r,
            value: o
          }), n();
        },
        onMousedown: oe(() => {
        }, ["stop", "prevent"])
      }, [r]))])
    });
  }
});
class Ii extends be {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t == null ? !0 : pe.isCollapsed(t) ? (this.editor.emit(G.ERROR, "选中一个中文字符，并且有不能在其他语句之内"), !0) : this.getValue().length <= 0;
  }
  exec(t) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const n = this.getValue();
    if (n == null)
      return;
    const s = {
      type: "ssml-sub",
      remark: t.value,
      alias: t.value,
      children: [{ text: n }]
    };
    this.editor.insertNode(s);
  }
}
const Xs = /* @__PURE__ */ L({
  setup() {
    const e = Y(), t = g(), n = g(!1);
    function s() {
      n.value || (n.value = !0);
    }
    function r() {
      n.value && (n.value = !1);
    }
    async function o(l) {
      e.value ?? (e.value = new Ii(l)), !e.value.isDisabled() && (s(), t.value.focus());
    }
    function a(l) {
      var i;
      r(), l && ((i = e.value) == null || i.exec({
        value: l,
        label: l
      }));
    }
    return () => y(Re, {
      visible: n.value,
      "onUpdate:visible": (l) => n.value = l,
      trigger: "contextmenu",
      placement: "right-end",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => y(re, {
        text: "别名",
        icon: "alias",
        onClick: o
      }, null),
      default: () => y(cn, {
        ref: t,
        onSubmit: a
      }, null)
    });
  }
});
class Ni extends be {
  constructor(t) {
    super(t);
  }
  getValue() {
    return super.getValue();
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    if (!t)
      return !0;
    if (pe.isCollapsed(t))
      return this.editor.emit(G.ERROR, "请选择英文单词"), !0;
    const n = X.string(this.editor, t);
    return n.length <= 0 ? !0 : /^[A-Za-z]+$/gi.test(n) ? !1 : (this.editor.emit(G.ERROR, "请选择英文单词"), !0);
  }
  exec(t) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const n = this.getValue();
    if (n == null)
      return;
    const s = {
      type: "ssml-phoneme",
      alphabet: "ipa",
      ph: t.value,
      remark: t.label,
      children: [{ text: n }]
    };
    this.editor.insertNode(s);
  }
}
const Ks = /* @__PURE__ */ L({
  setup() {
    const {
      globalEditConfig: e
    } = me(), t = Y(), n = g([]), s = g(!1);
    function r() {
      s.value || (s.value = !0);
    }
    function o() {
      s.value && (s.value = !1);
    }
    async function a(l) {
      if (t.value ?? (t.value = new Ni(l)), Ao(l), t.value.isDisabled())
        return;
      const i = t.value.getValue();
      if (i) {
        if (n.value = await e.english.fetchData(i), n.value.length <= 0)
          return l.emit(G.ERROR, "找不到单词的音标");
        r();
      }
    }
    return () => y(Re, {
      visible: s.value,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => y(re, {
        text: "音标",
        icon: "english",
        onClick: a
      }, null),
      default: () => y("div", {
        class: "d-flex flex-column"
      }, [n.value.map(({
        label: l,
        value: i
      }) => y("div", {
        key: i,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          t.value && !t.value.isDisabled() && t.value.exec({
            label: l,
            value: i
          }), o();
        },
        onMousedown: oe(() => {
        }, ["stop", "prevent"])
      }, [l]))])
    });
  }
});
class Di extends be {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t == null ? !0 : pe.isCollapsed(t) ? (this.editor.emit(G.ERROR, "请框选要变速的句子"), !0) : !1;
  }
  exec(t) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const n = this.getValue();
    if (n == null)
      return;
    const s = {
      type: "ssml-prosody",
      remark: t.label,
      rate: t.value,
      children: [{ text: n }]
    };
    this.editor.insertNode(s);
  }
}
function H(e) {
  return `${((e - 1) * 100).toFixed(0)}%`;
}
const Ai = [
  { value: H(0.5), label: "0.5x" },
  { value: H(0.55), label: "0.55x" },
  { value: H(0.6), label: "0.6x" },
  { value: H(0.65), label: "0.65x" },
  { value: H(0.7), label: "0.7x" },
  { value: H(0.75), label: "0.75x" },
  { value: H(0.8), label: "0.8x" },
  { value: H(0.85), label: "0.85x" },
  { value: H(0.9), label: "0.9x" },
  { value: H(0.95), label: "0.95x" },
  { value: H(1), label: "1x" },
  { value: H(1.05), label: "1.05x" },
  { value: H(1.1), label: "1.1x" },
  { value: H(1.15), label: "1.15x" },
  { value: H(1.2), label: "1.2x" },
  { value: H(1.25), label: "1.25x" },
  { value: H(1.3), label: "1.3x" },
  { value: H(1.35), label: "1.35x" },
  { value: H(1.4), label: "1.4x" },
  { value: H(1.45), label: "1.45x" },
  { value: H(1.5), label: "1.5x" },
  { value: H(1.55), label: "1.55x" },
  { value: H(1.6), label: "1.6x" },
  { value: H(1.65), label: "1.65x" },
  { value: H(1.7), label: "1.7x" },
  { value: H(1.75), label: "1.75x" },
  { value: H(1.8), label: "1.8x" },
  { value: H(1.85), label: "1.85x" },
  { value: H(1.9), label: "1.9x" },
  { value: H(1.95), label: "1.95x" },
  { value: H(2), label: "2x" }
], Js = /* @__PURE__ */ L({
  setup() {
    const e = Y(), t = g(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    async function r(o) {
      e.value ?? (e.value = new Di(o)), !e.value.isDisabled() && n();
    }
    return () => y(Re, {
      style: {
        padding: "0px"
      },
      visible: t.value,
      "onUpdate:visible": (o) => t.value = o,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => y(re, {
        text: "局部变速",
        icon: "changespeed",
        onClick: r
      }, null),
      default: () => y("div", {
        class: "d-flex flex-column overflow-x-hidden overflow-y-scroll",
        style: "height:15rem"
      }, [Ai.map(({
        label: o,
        value: a
      }) => y("div", {
        key: a,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          var l;
          (l = e.value) == null || l.exec({
            label: o,
            value: a
          }), s();
        },
        onMousedown: oe(() => {
        }, ["stop", "prevent"])
      }, [o]))])
    });
  }
});
class Li extends be {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t ? pe.isExpanded(t) ? (this.editor.emit(G.ERROR, "不能选中文本"), !0) : !1 : !0;
  }
  exec(t) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const n = {
      type: "ssml-break",
      strength: t.value,
      remark: t.label,
      children: [{ text: "" }]
    };
    this.editor.insertNode(n);
  }
}
const Mi = [{
  value: "weak",
  label: "短"
}, {
  value: "medium",
  label: "中"
}, {
  value: "strong",
  label: "长"
}], Qs = /* @__PURE__ */ L({
  setup() {
    const e = Y(), t = g(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    function r(o) {
      e.value ?? (e.value = new Li(o)), !e.value.isDisabled() && n();
    }
    return () => y(Re, {
      visible: t.value,
      "onUpdate:visible": (o) => t.value = o,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => y(re, {
        text: "停顿调节",
        icon: "rhythm",
        onClick: r
      }, null),
      default: () => y("div", {
        class: "d-flex flex-column"
      }, [Mi.map(({
        label: o,
        value: a
      }) => y("div", {
        key: a,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && e.value.exec({
            label: o,
            value: a
          }), s();
        },
        onMousedown: oe(() => {
        }, ["stop", "prevent"])
      }, [o]))])
    });
  }
});
class ji extends be {
  constructor(t) {
    super(t);
  }
  restoreSelection() {
    this.editor.restoreSelection();
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t ? pe.isExpanded(t) ? (this.editor.emit(G.ERROR, "不能框选文字"), !0) : !1 : !0;
  }
  exec(t) {
    if (this.editor.restoreSelection(), this.isDisabled() || this.getValue() == null)
      return;
    const s = {
      type: "ssml-audio",
      src: t.value,
      remark: t.label,
      children: [{ text: "" }]
    };
    this.editor.insertNode(s);
  }
}
const Zs = /* @__PURE__ */ L({
  __name: "special-menu",
  setup(e) {
    const t = g(), n = g(), s = Y(), { globalEditConfig: r } = me(), { special: o } = r, a = g(!1), { x: l, y: i, height: u } = lt(n), m = (f) => {
      s.value ?? (s.value = new ji(f)), !s.value.isDisabled() && (t.value.setPosition({
        x: l.value - 200,
        y: i.value + u.value
      }), a.value = !0);
    };
    function p(f) {
      var v;
      (v = s.value) == null || v.restoreSelection(), s.value && !s.value.isDisabled() && s.value.exec(f), a.value = !1;
    }
    return (f, v) => (C(), K(b(Qe), {
      ref_key: "dragRef",
      ref: t,
      visible: a.value,
      "onUpdate:visible": v[0] || (v[0] = (d) => a.value = d)
    }, {
      reference: R(() => [
        y(b(re), {
          ref_key: "menuRef",
          ref: n,
          text: "音效",
          icon: "special",
          onClick: m
        }, null, 512)
      ]),
      default: R(() => [
        y(b(mn), {
          menus: b(o).menus,
          fetchScene: b(o).fetchScene,
          fetchStyle: b(o).fetchStyle,
          fetchData: b(o).fetchData,
          onSubmit: p
        }, null, 8, ["menus", "fetchScene", "fetchStyle", "fetchData"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
class Hi extends be {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t ? pe.isExpanded(t) ? (this.editor.emit(G.ERROR, "不能选中文本"), !0) : !1 : !0;
  }
  exec(t) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const n = {
      type: "ssml-break",
      time: t.value,
      remark: t.label,
      children: [{ text: "" }]
    };
    this.editor.insertNode(n);
  }
}
const Fi = [{
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
}], er = /* @__PURE__ */ L({
  setup() {
    const e = Y(), t = g(!1), n = g();
    function s() {
      t.value || (t.value = !0);
    }
    function r() {
      t.value && (t.value = !1);
    }
    function o(l) {
      e.value ?? (e.value = new Hi(l)), !e.value.isDisabled() && (s(), n.value.focus());
    }
    function a(l) {
      var i;
      r(), l && ((i = e.value) == null || i.exec({
        value: l,
        label: l
      }));
    }
    return () => y(Re, {
      visible: t.value,
      "onUpdate:visible": (l) => t.value = l,
      trigger: "contextmenu",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => y(re, {
        text: "插入静音",
        icon: "mute",
        onClick: o
      }, null),
      default: () => y("div", {
        class: "d-flex flex-column"
      }, [Fi.map(({
        value: l,
        label: i
      }) => y("div", {
        key: l,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => a(l),
        onMousedown: oe(() => {
        }, ["stop", "prevent"])
      }, [i])), y(cn, {
        type: "text",
        ref: n,
        onSubmit: a
      }, null)])
    });
  }
}), tr = /* @__PURE__ */ L({
  __name: "bgm-menu",
  setup(e) {
    const t = g(), n = g(), s = Y(), { globalEditConfig: r } = me(), { bgm: o } = r, a = g(!1), { x: l, y: i, height: u } = lt(n), m = async (f) => {
      const v = {
        x: l.value - 300,
        y: i.value + u.value
      };
      s.value = f, t.value.setPosition(v), a.value = !0;
    };
    function p(f) {
      const { rootBackgroundaudio: v } = He();
      v.src = f.value, v.remark = f.label, a.value = !1;
    }
    return (f, v) => (C(), K(b(Qe), {
      ref_key: "dragRef",
      ref: t,
      visible: a.value,
      "onUpdate:visible": v[0] || (v[0] = (d) => a.value = d)
    }, {
      reference: R(() => [
        y(b(re), {
          ref_key: "menuRef",
          ref: n,
          text: "配乐",
          icon: "bgm",
          onClick: m
        }, null, 512)
      ]),
      default: R(() => [
        y(b(mn), {
          menus: b(o).menus,
          fetchScene: b(o).fetchScene,
          fetchStyle: b(o).fetchStyle,
          fetchData: b(o).fetchData,
          onSubmit: p
        }, null, 8, ["menus", "fetchScene", "fetchStyle", "fetchData"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), nr = /* @__PURE__ */ L({
  __name: "sensitive-menu",
  setup(e) {
    const t = g(), n = g(), s = Y(), r = g(!1), { x: o, y: a, height: l } = lt(n), i = (u) => {
      s.value = u, t.value.setPosition({
        x: o.value - 200,
        y: a.value + l.value
      }), r.value = !0;
    };
    return (u, m) => (C(), K(b(Qe), {
      ref_key: "dragRef",
      ref: t,
      visible: r.value,
      "onUpdate:visible": m[0] || (m[0] = (p) => r.value = p)
    }, {
      reference: R(() => [
        y(b(re), {
          ref_key: "menuRef",
          ref: n,
          text: "敏感词",
          icon: "sensitive",
          onClick: i
        }, null, 512)
      ]),
      default: R(() => [
        y(nr)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
const Ui = {
  class: "select-list",
  style: { width: "120px" }
}, Bi = {
  class: "text-center d-flex flex-column justify-content-center fs-6",
  style: { height: "60px" }
}, zi = ["onClick"], Wi = /* @__PURE__ */ L({
  __name: "select-list",
  props: {
    modelValue: {},
    dataList: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: n }) {
    const s = e, r = g();
    function o(l) {
      n("update:modelValue", ie(l));
    }
    function a() {
      var l;
      if (r.value) {
        for (let i = 0; i < s.dataList.length; i++)
          if (s.dataList[i].value === s.modelValue.value) {
            (l = r.value.children[i]) == null || l.scrollIntoView({ behavior: "smooth" });
            return;
          }
      }
    }
    return t({
      scrollIntoViewTheItem: a
    }), (l, i) => (C(), I("div", Ui, [
      h("div", Bi, [
        Pe(l.$slots, "default", {}, void 0, !0)
      ]),
      h("ul", {
        ref_key: "listRef",
        ref: r,
        class: "text-center w-100 border-start border-top border-bottom border-secondary-subtle overflow-y-auto overflow-x-hidden scrollbar-none",
        style: { height: "180px" }
      }, [
        (C(!0), I(Z, null, le(l.dataList, (u, m) => (C(), I("li", {
          class: ye(["clickable select-item py-1", { activate: u.value === l.modelValue.value }]),
          key: m,
          onClick: (p) => o(u)
        }, z(u.label), 11, zi))), 128))
      ], 512)
    ]));
  }
});
const ze = /* @__PURE__ */ ve(Wi, [["__scopeId", "data-v-657a8ff9"]]), Gi = () => [
  { value: "0.5", label: "0.5x" },
  { value: "0.6", label: "0.6x" },
  { value: "0.7", label: "0.7x" },
  { value: "0.8", label: "0.8x" },
  { value: "0.9", label: "0.9x" },
  { value: "1.0", label: "1.0x" },
  { value: "1.1", label: "1.1x" },
  { value: "1.2", label: "1.2x" },
  { value: "1.4", label: "1.4x" },
  { value: "1.5", label: "1.5x" },
  { value: "1.75", label: "1.75x" },
  { value: "2.0", label: "2.0x" }
], Yi = () => [
  { value: "-10", label: "-10" },
  { value: "-9", label: "-9" },
  { value: "-8", label: "-8" },
  { value: "-7", label: "-7" },
  { value: "-6", label: "-6" },
  { value: "-5", label: "-5" },
  { value: "-4", label: "-4" },
  { value: "-3", label: "-3" },
  { value: "-2", label: "-2" },
  { value: "-1", label: "-1" },
  { value: "0", label: "0" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" }
];
function qi(e) {
  return `${(0.05 * e * 100).toFixed(0)}%`;
}
function Xi(e) {
  return `${((e - 1) * 100).toFixed(0)}%`;
}
const Ki = {
  style: { width: "600px", height: "360px" },
  class: "position-relative px-2 pb-2"
}, Ji = { class: "position-relative" }, Qi = { class: "position-absolute top-0 end-0" }, Zi = /* @__PURE__ */ h("li", null, [
  /* @__PURE__ */ h("span", { class: "text-nowrap" }, "近期使用:")
], -1), eu = /* @__PURE__ */ h("span", { class: "my-3" }, "类型", -1), tu = /* @__PURE__ */ h("span", { class: "my-3" }, "配音师", -1), nu = /* @__PURE__ */ h("span", { class: "my-3" }, "角色", -1), su = /* @__PURE__ */ h("span", { class: "my-3" }, "风格", -1), ru = /* @__PURE__ */ h("span", { class: "my-3" }, "语速", -1), ou = /* @__PURE__ */ h("span", { class: "my-3" }, "语调", -1), au = { class: "position-absolute bottom-0 end-0 d-flex flex-row justify-content-end me-4 mb-3" }, lu = /* @__PURE__ */ L({
  __name: "management-content",
  emits: ["submit"],
  setup(e, { emit: t }) {
    const { globalEditConfig: n } = me(), { tryPlay: s } = n, r = g(!1), o = g(""), a = g(), l = g(), i = g(), u = g(), m = g(), p = g(), f = g(ut()), v = g(ut()), d = g(ut()), c = g(ut()), w = g({ label: "", value: "1.0" }), S = g({ label: "", value: "0" }), V = Y([]), $ = g([{ label: "全部类型", value: "" }, ...s.flags]), k = g([]), P = g([]), _ = g([]), x = g(Gi()), M = g(Yi());
    ge(async () => {
      const q = await s.fetchData(As());
      V.value = q, k.value = q, q.length > 0 && (P.value = q[0].roles, _.value = q[0].styles, v.value = q[0]), P.value.length > 0 && (d.value = P.value[0]), _.value.length > 0 && (c.value = _.value[0]);
    });
    function J() {
    }
    function O() {
    }
    function T(q) {
      const A = V.value.find((ee) => ee.value === q.value);
      A && (P.value = A.roles, _.value = A.styles, P.value.length > 0 && (d.value = P.value[0]), _.value.length > 0 && (c.value = _.value[0]));
    }
    function N() {
    }
    function U() {
    }
    function j() {
    }
    function De() {
    }
    function Fe() {
      const q = {
        label: `${v.value.label}|${d.value.label}|${c.value.label}|${w.value.label}`,
        value: v.value.value,
        role: d.value.value,
        style: c.value.value,
        speed: Xi(Number(w.value.value)),
        pitch: qi(Number(S.value.value))
      };
      t("submit", q);
    }
    return (q, A) => (C(), I("div", Ki, [
      y(b(_t), {
        onSubmit: oe(J, ["prevent"])
      }, {
        default: R(() => [
          y(b(wt), {
            modelValue: o.value,
            "onUpdate:modelValue": A[0] || (A[0] = (ee) => o.value = ee),
            placeholder: "请输入名称快速查找配音师"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["onSubmit"]),
      h("div", Ji, [
        h("div", Qi, [
          y(b(fe), {
            size: "small",
            icon: b(wr),
            onClick: A[1] || (A[1] = () => r.value = !r.value)
          }, null, 8, ["icon"])
        ]),
        h("ul", {
          class: ye(["d-flex flex-row row-gap-1 column-gap-2 overflow-x-hidden", { "flex-wrap": r.value }])
        }, [
          Zi,
          h("li", null, [
            y(b(Ve), {
              type: "info",
              closable: ""
            }, {
              default: R(() => [
                B("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            y(b(Ve), {
              type: "info",
              closable: ""
            }, {
              default: R(() => [
                B("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            y(b(Ve), {
              type: "info",
              closable: ""
            }, {
              default: R(() => [
                B("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            y(b(Ve), {
              type: "info",
              closable: ""
            }, {
              default: R(() => [
                B("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            y(b(Ve), {
              type: "info",
              closable: ""
            }, {
              default: R(() => [
                B("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            y(b(Ve), {
              type: "info",
              closable: ""
            }, {
              default: R(() => [
                B("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            y(b(Ve), {
              type: "info",
              closable: ""
            }, {
              default: R(() => [
                B("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ])
        ], 2),
        Oe(h("div", {
          class: ye({ "d-flex flex-row": !r.value })
        }, [
          y(ze, {
            "onUpdate:modelValue": [
              O,
              A[2] || (A[2] = (ee) => f.value = ee)
            ],
            ref_key: "selTypeRef",
            ref: a,
            modelValue: f.value,
            dataList: $.value
          }, {
            default: R(() => [
              eu
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          y(ze, {
            "onUpdate:modelValue": [
              T,
              A[3] || (A[3] = (ee) => v.value = ee)
            ],
            ref_key: "selSpeakerRef",
            ref: l,
            modelValue: v.value,
            dataList: k.value
          }, {
            default: R(() => [
              tu
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          y(ze, {
            "onUpdate:modelValue": [
              N,
              A[4] || (A[4] = (ee) => d.value = ee)
            ],
            ref_key: "selRoleRef",
            ref: i,
            modelValue: d.value,
            dataList: P.value
          }, {
            default: R(() => [
              nu
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          y(ze, {
            "onUpdate:modelValue": [
              U,
              A[5] || (A[5] = (ee) => c.value = ee)
            ],
            ref_key: "selStyleRef",
            ref: u,
            modelValue: c.value,
            dataList: _.value
          }, {
            default: R(() => [
              su
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          y(ze, {
            "onUpdate:modelValue": [
              j,
              A[6] || (A[6] = (ee) => w.value = ee)
            ],
            ref_key: "selSpeedRef",
            ref: m,
            modelValue: w.value,
            dataList: x.value
          }, {
            default: R(() => [
              ru
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          y(ze, {
            "onUpdate:modelValue": [
              De,
              A[7] || (A[7] = (ee) => S.value = ee)
            ],
            ref_key: "selPitchRef",
            ref: p,
            modelValue: S.value,
            dataList: M.value
          }, {
            default: R(() => [
              ou
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"])
        ], 2), [
          [Te, !r.value]
        ])
      ]),
      h("div", au, [
        Oe(y(b(fe), {
          onClick: Fe,
          type: "primary"
        }, {
          default: R(() => [
            B("确定")
          ]),
          _: 1
        }, 512), [
          [Te, !r.value]
        ]),
        Oe(y(b(fe), { type: "primary" }, {
          default: R(() => [
            B("全部清空")
          ]),
          _: 1
        }, 512), [
          [Te, r.value]
        ])
      ])
    ]));
  }
});
class iu extends be {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    if (t == null)
      return !0;
    if (pe.isCollapsed(t))
      return this.editor.emit(G.ERROR, "请框选句子"), !0;
    if (D.getSelectedNodeByType(this.editor, "custom-management"))
      return this.editor.emit(G.ERROR, "多人配音不能嵌套使用"), !0;
    const [n] = X.node(this.editor, t), s = this.editor.getParentNode(n);
    return !s || !D.checkNodeType(s, "paragraph") ? (this.editor.emit(G.ERROR, "多人配音需要在最外层使用"), !0) : !1;
  }
  exec(t) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const n = this.getValue();
    if (n == null)
      return;
    const s = {
      type: "custom-management",
      remark: t.label,
      name: t.value,
      role: t.role,
      style: t.style,
      rate: t.speed,
      pitch: t.pitch,
      children: [{ text: n }]
    };
    this.editor.insertNode(s);
  }
}
const sr = /* @__PURE__ */ L({
  __name: "management-menu",
  setup(e) {
    const t = g(), n = g(), s = Y(), r = g(!1), o = Y(), { x: a, y: l, height: i } = lt(n), u = (p) => {
      o.value ?? (o.value = new iu(p));
      const f = {
        x: a.value - 200,
        y: l.value + i.value
      };
      s.value = p, t.value.setPosition(f), r.value = !0;
    };
    function m(p) {
      var f;
      o.value && !o.value.isDisabled() && ((f = o.value) == null || f.exec(p)), r.value = !1;
    }
    return (p, f) => (C(), K(b(Qe), {
      ref_key: "dragRef",
      ref: t,
      visible: r.value,
      "onUpdate:visible": f[0] || (f[0] = (v) => r.value = v)
    }, {
      reference: R(() => [
        y(b(re), {
          ref_key: "menuRef",
          ref: n,
          text: "多人配音",
          icon: "management",
          onClick: u
        }, null, 512)
      ]),
      default: R(() => [
        y(lu, { onSubmit: m })
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), uu = { class: "speaker-head" }, cu = ["src"], du = { class: "speaker-name" }, fu = /* @__PURE__ */ L({
  __name: "speaker-item",
  props: {
    name: {},
    value: {},
    avatar: {},
    activated: { type: Boolean }
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => (C(), I("div", {
      class: "speaker-item",
      onClick: n[0] || (n[0] = (s) => t.$emit("click", t.value || ""))
    }, [
      h("div", uu, [
        h("img", {
          src: t.avatar || b(at)(),
          class: ye([{ "border border-warning": t.activated }, "rounded-circle"]),
          style: { height: "40px" }
        }, null, 10, cu)
      ]),
      h("div", du, z(t.name), 1)
    ]));
  }
});
const pu = /* @__PURE__ */ ve(fu, [["__scopeId", "data-v-8c6b2288"]]);
class mu {
  constructor() {
    ue(this, "mediaRecorder", null);
  }
  get state() {
    var t;
    return (t = this.mediaRecorder) == null ? void 0 : t.state;
  }
  async start() {
    if (navigator.mediaDevices.getUserMedia) {
      let t = [];
      try {
        const n = await navigator.mediaDevices.getUserMedia({ audio: !0 }), s = new MediaRecorder(n);
        return new Promise((r, o) => {
          s.ondataavailable = (a) => {
            t.push(a.data);
          }, s.onstop = () => {
            const a = new Blob(t, { type: "audio/wav; codecs=opus" });
            r(a);
          }, s.onerror = (a) => {
            o(a);
          }, s.start();
        });
      } catch (n) {
        throw new Error("授权失败！请确保使用https访问网站", { cause: n });
      } finally {
        t = [];
      }
    }
    throw Error("浏览器不支持 getUserMedia");
  }
  stop() {
    this.mediaRecorder && this.mediaRecorder.stop();
  }
}
const vu = { class: "d-flex flex-row justify-content-between border rounded-pill border-secondary my-3 py-1 px-2" }, hu = {
  class: "text-secondary d-flex flex-row align-items-center",
  style: { "font-size": "0.5rem" }
}, yu = {
  key: 0,
  class: "iconfont icon-play"
}, gu = /* @__PURE__ */ h("span", { class: "iconfont icon-delete" }, null, -1), bu = [
  gu
], _u = {
  key: 1,
  style: { "font-size": "0.5rem" }
}, wu = /* @__PURE__ */ h("p", null, "选择需要转换的配音师", -1), xu = {
  class: "speakers-container border rounded d-flex flex-row flex-wrap row-gap-1 column-gap-2 overflow-y-auto overflow-x-hidden",
  style: { height: "150px" }
}, Eu = ["disabled"], $u = /* @__PURE__ */ L({
  __name: "audio-upload",
  emits: ["submit"],
  setup(e, { expose: t, emit: n }) {
    const { globalEditConfig: s } = me(), { audioUpload: r, transfer: o, fetchSpeaker: a, timeoutMilliseconds: l } = s.conversion, i = g(), u = g(), m = g(), p = g(!0), f = g([]), v = g(), d = Y(), c = Y(), w = new mu(), S = new No("audio-conversion", "audio/*"), V = ne(() => w.state), $ = pn(i), k = ds("reopen");
    te($, (j) => {
      j || P();
    }), ge(async () => {
      f.value = await a();
    }), te($, (j) => {
      j || (p.value = !0);
    }), t({
      openInputFile: J
    });
    function P() {
      u.value = void 0, m.value = void 0, p.value = !0, v.value = void 0, d.value = void 0, c.value = void 0;
    }
    function _() {
      w.stop();
    }
    async function x() {
      try {
        d.value = await w.start();
      } catch (j) {
        $e.emit(ke.ERROR, `${j}`, j);
      }
    }
    function M() {
      u.value = void 0, m.value = void 0, d.value = void 0, c.value = void 0, v.value = void 0;
    }
    async function J() {
      try {
        return c.value = await S.open(), p.value = !1, !0;
      } catch {
        return !1;
      }
    }
    async function O() {
      try {
        const j = new Do(l);
        if (p.value && d.value)
          j.startTimeout(), u.value = await r(d.value, j.token);
        else if (!p.value && c.value)
          j.startTimeout(), u.value = await r(c.value, j.token);
        else
          throw new Error("请选则文件或实时录音");
      } catch (j) {
        $e.emit(ke.ERROR, `${j}`, j);
      }
    }
    async function T(j) {
      try {
        u.value ? (v.value = j, m.value = await o({ audioId: u.value.id, speakerId: j.id })) : $e.emit(ke.ERROR, "请先上传录音文件");
      } catch (De) {
        $e.emit(ke.ERROR, `${De}`, De);
      }
    }
    function N() {
      m.value && v.value && (n("submit", { label: v.value.label, value: m.value.src }), P());
    }
    function U() {
      k == null || k();
    }
    return (j, De) => {
      var Fe, q;
      return C(), I("div", {
        class: "audio-upload",
        ref_key: "boxRef",
        ref: i
      }, [
        h("div", vu, [
          h("div", hu, [
            d.value || c.value ? (C(), I("span", yu)) : Ee("", !0),
            h("span", null, z(((Fe = c.value) == null ? void 0 : Fe.name) || ((q = d.value) == null ? void 0 : q.name)), 1)
          ]),
          h("div", null, [
            !u.value && (d.value || c.value) ? (C(), I("button", {
              key: 0,
              onClick: M,
              class: "btn btn-sm rounded-pill"
            }, bu)) : Ee("", !0),
            u.value ? (C(), I("span", _u, "已上传")) : Ee("", !0),
            p.value ? (C(), I(Z, { key: 2 }, [
              V.value === "recording" ? (C(), I("button", {
                key: 0,
                onClick: _,
                class: "btn btn-primary btn-sm rounded-pill"
              }, " 结束录音 ")) : (C(), I("button", {
                key: 1,
                onClick: x,
                class: "btn btn-primary btn-sm rounded-pill"
              }, " 开始录音 "))
            ], 64)) : Ee("", !0),
            !p.value && !c.value ? (C(), I("button", {
              key: 3,
              onClick: J,
              class: "btn btn-primary btn-sm rounded-pill"
            }, " 选择文件 ")) : Ee("", !0),
            u.value ? (C(), I("button", {
              key: 4,
              onClick: U,
              class: "btn btn-primary btn-sm rounded-pill"
            }, " 重传音频 ")) : Ee("", !0),
            !u.value && (c.value || d.value) ? (C(), I("button", {
              key: 5,
              onClick: O,
              class: "btn btn-primary btn-sm rounded-pill"
            }, " 上传音频 ")) : Ee("", !0)
          ])
        ]),
        h("div", null, [
          wu,
          h("div", xu, [
            (C(!0), I(Z, null, le(f.value, (A, ee) => {
              var gn;
              return C(), K(pu, {
                onClick: (Pd) => T(A),
                key: ee,
                name: A.label,
                avatar: A.avatar,
                activated: A.value === ((gn = v.value) == null ? void 0 : gn.value)
              }, null, 8, ["onClick", "name", "avatar", "activated"]);
            }), 128))
          ])
        ]),
        h("button", {
          class: "btn btn-primary mt-1",
          onClick: N,
          disabled: !m.value
        }, " 完成录音并上传完成后，可选择配音师转换 ", 8, Eu)
      ], 512);
    };
  }
}), ku = {
  class: "fw-bold",
  style: { "font-size": "0.5rem" }
}, Su = /* @__PURE__ */ h("p", { class: "text-start text-danger" }, "请在安静的环境中进行录音，以需要转换的风格，读出以下文案", -1), Cu = {
  class: "border border-secondary rounded p-2 w-100",
  style: { height: "100px" }
}, Ou = { class: "mt-2" }, Tu = /* @__PURE__ */ h("p", {
  class: "mt-2 text-secondary",
  style: { "font-size": "0.5rem" }
}, " 录音内容需要和滑选一致，音频限制60秒，滑选文案限制60个字 ", -1), Pu = /* @__PURE__ */ L({
  __name: "conversion-content",
  props: {
    text: {}
  },
  emits: ["submit"],
  setup(e) {
    const t = g(), n = g(), s = g(!0), r = g(!1), o = pn(t);
    mr("reopen", () => {
      s.value = !0, r.value = !1;
    }), te(o, (i) => {
      i || (s.value = !0, r.value = !1);
    });
    function a() {
      s.value = !0, r.value = !0;
    }
    async function l() {
      var i;
      await ((i = n.value) == null ? void 0 : i.openInputFile()) && (s.value = !1, r.value = !0);
    }
    return (i, u) => (C(), I("div", {
      ref_key: "boxRef",
      ref: t,
      class: "px-2 py-1",
      style: { width: "410px" }
    }, [
      Oe(h("section", ku, [
        Su,
        h("div", Cu, z(i.text), 1)
      ], 512), [
        [Te, s.value]
      ]),
      Oe(h("section", Ou, [
        h("div", { class: "w-100 d-flex flex-column row-gap-1" }, [
          h("button", {
            onClick: a,
            class: "btn btn-success"
          }, "实时录音"),
          h("button", {
            onClick: l,
            class: "btn btn-primary"
          }, "上传录音")
        ]),
        Tu
      ], 512), [
        [Te, !r.value]
      ]),
      Oe(h("section", null, [
        y($u, {
          ref_key: "audioUploadRef",
          ref: n,
          onSubmit: u[0] || (u[0] = (m) => i.$emit("submit", m))
        }, null, 512)
      ], 512), [
        [Te, r.value]
      ])
    ], 512));
  }
});
class Ru extends be {
  constructor(t) {
    super(t);
  }
  getValue() {
    return super.getValue();
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t == null ? !0 : pe.isCollapsed(t) ? (this.editor.emit(G.ERROR, "请框选要变音的句子"), !0) : !1;
  }
  exec(t) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const n = this.getValue();
    if (n == null)
      return;
    const s = {
      type: "ssml-audio",
      remark: t.label,
      src: t.value,
      children: [{ text: n }]
    };
    this.editor.insertNode(s);
  }
}
const rr = /* @__PURE__ */ L({
  __name: "conversion-menu",
  setup(e) {
    const t = g(), n = g(), s = Y(), r = Y(), o = g(!1), a = g(""), { x: l, y: i, height: u } = lt(n), m = (f) => {
      if (r.value ?? (r.value = new Ru(f)), r.value.isDisabled())
        return;
      a.value = r.value.getValue();
      const v = {
        x: l.value - 200,
        y: i.value + u.value
      };
      s.value = f, t.value.setPosition(v), o.value = !0;
    };
    function p(f) {
      var v;
      (v = r.value) == null || v.exec(f), o.value = !1;
    }
    return (f, v) => (C(), K(b(Qe), {
      ref_key: "dragRef",
      ref: t,
      visible: o.value,
      "onUpdate:visible": v[0] || (v[0] = (d) => o.value = d)
    }, {
      reference: R(() => [
        y(b(re), {
          ref_key: "menuRef",
          ref: n,
          text: "局部变音",
          icon: "conversion",
          onClick: m
        }, null, 512)
      ]),
      default: R(() => [
        y(Pu, {
          text: a.value,
          onSubmit: p
        }, null, 8, ["text"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Vu = { class: "anchor-avatar d-flex flex-column justify-content-center align-items-center" }, Iu = ["src"], Nu = { class: "anchor-avatar-name text-white" }, Du = /* @__PURE__ */ L({
  __name: "try-play-circle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = g(), s = g(0), r = g(0), o = un(), { position: a } = fn(n, {
      initialValue: { x: window.innerWidth - 15, y: window.innerHeight / 2 - 15 },
      onStart: (p, f) => m(f.clientX, f.clientY) ? !1 : void 0
    }), { style: l } = vn(n, a);
    function i(p) {
      m(p.clientX, p.clientY) && t("update:visible", !1);
    }
    function u(p) {
      s.value = p.clientX, r.value = p.clientY;
    }
    function m(p, f) {
      return p > s.value - 10 && p < s.value + 10 && f > r.value - 10 && f < r.value + 10;
    }
    return (p, f) => Oe((C(), I("div", {
      ref_key: "boxRef",
      ref: n,
      class: "try-play-circel user-select-none rounded-circle overflow-hidden",
      style: bt([b(l), { position: "fixed" }]),
      onMousedown: u,
      onMouseup: i
    }, [
      h("div", Vu, [
        h("img", {
          src: b(o).speaker.avatar || b(at)(),
          class: "rounded-circle"
        }, null, 8, Iu),
        h("div", Nu, z(b(o).speaker.label), 1)
      ])
    ], 36)), [
      [Te, p.visible]
    ]);
  }
});
const Au = /* @__PURE__ */ ve(Du, [["__scopeId", "data-v-b8319066"]]), Lu = {
  key: 0,
  class: "position-absolute top-0 start-100 translate-middle text-bg-danger text-nowrap rounded px-1",
  style: { "font-size": "0.5rem" }
}, Mu = ["src"], ju = { class: "anchor-avatar-name text-white" }, Hu = /* @__PURE__ */ L({
  __name: "anchor-avatar",
  props: {
    activate: { type: Boolean },
    data: {}
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => {
      var s, r, o;
      return C(), I("div", {
        class: "anchor-avatar d-flex flex-column align-items-center text-center justify-content-center position-relative",
        onClick: n[0] || (n[0] = (a) => {
          var l;
          return t.$emit("click", (l = t.data) == null ? void 0 : l.value);
        })
      }, [
        (s = t.data) != null && s.isFree ? Ee("", !0) : (C(), I("span", Lu, "付费")),
        h("img", {
          src: ((r = t.data) == null ? void 0 : r.src) ?? b(at)(),
          class: ye(["rounded-circle", { "border border-2 border-warning": t.activate }]),
          style: { height: "40px" }
        }, null, 10, Mu),
        h("div", ju, z((o = t.data) == null ? void 0 : o.label), 1)
      ]);
    };
  }
});
const or = /* @__PURE__ */ ve(Hu, [["__scopeId", "data-v-845325c9"]]), Fu = {
  style: { height: "170px" },
  class: "w-100 d-flex flex-row flex-wrap justify-content-start overflow-x-hidden overflow-y-auto scrollbar-none"
}, Uu = /* @__PURE__ */ L({
  __name: "anchor-list",
  props: {
    filter: {}
  },
  setup(e) {
    const t = e, { globalEditConfig: n } = me(), { fetchData: s } = n.tryPlay, r = un(), o = g([]);
    te(
      () => t.filter,
      async (l) => {
        o.value = await s(ie(l));
      }
    );
    function a(l) {
      r.setSpeaker(l);
    }
    return ge(async () => {
      o.value = await s(ie(t.filter)), o.value.length > 0 && a(o.value[0]);
    }), (l, i) => (C(), I("div", Fu, [
      (C(!0), I(Z, null, le(o.value, (u, m) => (C(), I("div", {
        class: "m-3",
        key: m
      }, [
        y(or, {
          data: u,
          activate: u.value === b(r).speaker.value,
          onClick: (p) => a(ie(u))
        }, null, 8, ["data", "activate", "onClick"])
      ]))), 128))
    ]));
  }
}), At = /* @__PURE__ */ L({
  __name: "tag-item",
  props: {
    activate: { type: Boolean },
    value: {}
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => (C(), I("span", {
      class: ye(["tag-item d-inline-block text-white text-center text-nowrap text-truncate", { "border border-white rounded-pill": t.activate }]),
      onClick: n[0] || (n[0] = (s) => t.$emit("click", t.value)),
      style: { height: "20px", "min-width": "60px", "max-width": "160px", "font-size": "0.5rem", cursor: "pointer" }
    }, [
      Pe(t.$slots, "default")
    ], 2));
  }
}), Bu = { class: "tag-list w-100" }, zu = {
  class: "w-100 d-flex flex-row border-bottom border-secondary align-items-center",
  style: { height: "40px" }
}, Wu = {
  class: "w-100 d-flex flex-row border-bottom border-secondary align-items-center",
  style: { height: "40px" }
}, Gu = {
  style: { height: "100px" },
  class: "w-100 pt-2 d-flex flex-row flex-wrap align-content-start row-gap-2 overflow-y-auto overflow-x-hidden scrollbar-none"
}, Yu = /* @__PURE__ */ L({
  __name: "tag-list",
  props: {
    filter: {}
  },
  emits: ["update:filter"],
  setup(e, { emit: t }) {
    const n = e, { globalEditConfig: s } = me(), { category: r, gender: o, featchTag: a } = s.tryPlay, l = g([]);
    ge(async () => {
      l.value = await a();
    });
    function i(p) {
      t("update:filter", { ...ie(n.filter), category: p });
    }
    function u(p) {
      t("update:filter", { ...ie(n.filter), gender: p });
    }
    function m(p) {
      t("update:filter", { ...ie(n.filter), tag: p });
    }
    return (p, f) => (C(), I("div", Bu, [
      h("div", zu, [
        (C(!0), I(Z, null, le(b(r), (v, d) => (C(), K(At, {
          onClick: i,
          key: d,
          value: v.value,
          activate: p.filter.category === v.value
        }, {
          default: R(() => [
            B(z(v.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "activate"]))), 128))
      ]),
      h("div", Wu, [
        (C(!0), I(Z, null, le(b(o), (v, d) => (C(), K(At, {
          onClick: u,
          key: d,
          value: v.value,
          activate: p.filter.gender === v.value
        }, {
          default: R(() => [
            B(z(v.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "activate"]))), 128))
      ]),
      h("div", Gu, [
        (C(!0), I(Z, null, le(l.value, (v, d) => (C(), K(At, {
          onClick: m,
          key: d,
          value: v.value,
          activate: p.filter.tag === v.value
        }, {
          default: R(() => [
            B(z(v.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "activate"]))), 128))
      ])
    ]));
  }
});
const qu = ["src"], Xu = {
  class: "anchor-avatar-name text-white",
  style: { "font-size": "0.5rem" }
}, Ku = /* @__PURE__ */ L({
  __name: "style-avatar",
  props: {
    activate: { type: Boolean },
    data: {}
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => {
      var s, r;
      return C(), I("div", {
        class: "anchor-avatar d-flex flex-column align-items-center text-center justify-content-center position-relative",
        onClick: n[0] || (n[0] = (o) => {
          var a;
          return t.$emit("click", (a = t.data) == null ? void 0 : a.value);
        })
      }, [
        h("img", {
          src: ((s = t.data) == null ? void 0 : s.src) || b(at)(),
          class: ye(["rounded-circle", { "border border-2 border-warning": t.activate }]),
          style: { height: "30px" }
        }, null, 10, qu),
        h("div", Xu, z((r = t.data) == null ? void 0 : r.label), 1)
      ]);
    };
  }
});
const Ju = /* @__PURE__ */ ve(Ku, [["__scopeId", "data-v-71aedb65"]]);
function Qu(e) {
  return `${(0.05 * e * 100).toFixed(0)}%`;
}
function Zu(e) {
  return `${((e - 1) * 100).toFixed(0)}%`;
}
const yn = (e) => (Qt("data-v-c4fe6de7"), e = e(), Zt(), e), ec = {
  class: "slider-panle w-100 px-3 text-white",
  style: { "font-size": "0.5rem" }
}, tc = { class: "mt-2 d-flex text-center justify-content-between align-items-center" }, nc = { class: "me-auto d-flex flex-row align-items-center" }, sc = ["src"], rc = {
  class: "ms-2 d-flex flex-column justify-content-between",
  style: { height: "50px" }
}, oc = { class: "d-flex dlex-row column-gap-2 align-items-end" }, ac = { class: "fs-6" }, lc = { style: { "font-size": "0.5rem" } }, ic = { class: "d-flex flex-row column-gap-2 align-items-center" }, uc = {
  key: 0,
  class: "badge text-bg-primary px-2"
}, cc = { class: "d-flex flex-column align-items-end" }, dc = /* @__PURE__ */ yn(() => /* @__PURE__ */ h("div", { class: "text-info" }, "音频时长，请以生成后的为准", -1)), fc = { class: "mt-1" }, pc = /* @__PURE__ */ yn(() => /* @__PURE__ */ h("span", null, "/", -1)), mc = { class: "role-list mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-2 column-gap-3" }, vc = ["onClick"], hc = { class: "audio-mood mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-1 column-gap-2" }, yc = ["onClick"], gc = /* @__PURE__ */ yn(() => /* @__PURE__ */ h("div", { class: "my-3" }, [
  /* @__PURE__ */ h("span", { class: "border rounded-pill p-1" }, "配音师详情")
], -1)), bc = { class: "slider-box" }, _c = { class: "slider-box" }, wc = { class: "d-flex flex-row gap-3 my-3" }, xc = ["onClick"], Ec = {
  class: "d-flex flex-row flex-wrap row-gap-2 column-gap-3 mb-3",
  style: { "min-height": "100px" }
}, $c = ["onClick"], kc = /* @__PURE__ */ L({
  __name: "slider-panle",
  setup(e) {
    const { globalEditConfig: t } = me(), { rootProsody: n, rootExpressAs: s } = He(), { fetchStar: r, flags: o, fetchFlag: a } = t.tryPlay, l = un(), i = g(l.speaker.isStar), u = g(10), m = g(0), p = g([0, 2]), f = g(1), v = g([-10, 10]), d = g(0), c = ne(() => Xn(u.value)), w = ne(() => Xn(m.value)), S = Lt(eo()), V = Lt(to()), $ = g(""), k = g([]);
    ge(async () => {
      await M("");
    }), te(
      () => l.speaker,
      (O) => {
        O.roles.length > 0 && _(O.roles[0].value), O.styles.length > 0 && x(O.styles[0].value);
      },
      { immediate: !0 }
    ), te(
      d,
      (O) => {
        n.pitch = Qu(O);
      },
      { immediate: !0 }
    ), te(
      f,
      (O) => {
        n.rate = Zu(O);
      },
      { immediate: !0 }
    );
    async function P() {
      i.value = await r(l.speaker.value, !i.value);
    }
    function _(O) {
      s.role = O;
    }
    function x(O) {
      s.style = O;
    }
    async function M(O) {
      $.value = O;
      try {
        k.value = await a(O);
      } catch (T) {
        $e.emit(ke.ERROR, `${T}`, T);
      }
    }
    function J(O) {
      l.setSpeaker(ie(O));
    }
    return (O, T) => (C(), I("div", ec, [
      h("div", tc, [
        h("div", nc, [
          h("img", {
            src: b(at)(),
            class: "rounded-circle",
            style: { height: "50px" }
          }, null, 8, sc),
          h("div", rc, [
            h("div", oc, [
              h("span", ac, z(b(l).speaker.label), 1),
              h("span", lc, z(f.value) + "x", 1)
            ]),
            h("div", ic, [
              y(b(vs), {
                onClick: P,
                class: "fs-6",
                style: bt({ color: i.value ? "red" : "white" })
              }, {
                default: R(() => [
                  i.value ? (C(), K(b(xr), { key: 0 })) : (C(), K(b(Er), { key: 1 }))
                ]),
                _: 1
              }, 8, ["style"]),
              b(l).speaker.isSupper24K ? (C(), I("span", uc, " 24K ")) : Ee("", !0)
            ])
          ])
        ]),
        h("div", cc, [
          dc,
          h("div", fc, [
            h("span", null, z(w.value), 1),
            pc,
            h("span", null, z(c.value), 1)
          ]),
          y(b(kt), {
            max: u.value,
            modelValue: m.value,
            "onUpdate:modelValue": T[0] || (T[0] = (N) => m.value = N),
            size: "small"
          }, null, 8, ["max", "modelValue"])
        ])
      ]),
      h("div", mc, [
        (C(!0), I(Z, null, le(b(l).speaker.roles, (N, U) => (C(), I("div", {
          onClick: (j) => _(N.value),
          key: U,
          class: ye(["rounded-pill px-1", { border: N.value === (b(s).role || "") }])
        }, z(N.label), 11, vc))), 128))
      ]),
      h("ul", hc, [
        (C(!0), I(Z, null, le(b(l).speaker.styles, (N, U) => (C(), I("li", {
          class: "mx-2",
          onClick: (j) => x(N.value),
          key: U
        }, [
          y(Ju, {
            activate: N.value === (b(s).style || ""),
            data: N
          }, null, 8, ["activate", "data"])
        ], 8, yc))), 128))
      ]),
      gc,
      h("div", bc, [
        h("div", null, [
          h("span", null, "语速：" + z(f.value) + "x", 1)
        ]),
        y(b(kt), {
          modelValue: f.value,
          "onUpdate:modelValue": T[1] || (T[1] = (N) => f.value = N),
          min: p.value[0],
          max: p.value[1],
          step: 0.05,
          marks: S
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      h("div", _c, [
        h("div", null, [
          h("span", null, "语调：" + z(d.value), 1)
        ]),
        y(b(kt), {
          modelValue: d.value,
          "onUpdate:modelValue": T[2] || (T[2] = (N) => d.value = N),
          min: v.value[0],
          max: v.value[1],
          step: 0.2,
          marks: V
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      h("div", null, [
        h("ul", wc, [
          (C(!0), I(Z, null, le(b(o), (N, U) => (C(), I("li", {
            onClick: (j) => M(N.value),
            key: U,
            class: ye(["rounded-pill px-1", { border: N.value === $.value }])
          }, z(N.label), 11, xc))), 128))
        ]),
        h("ul", Ec, [
          (C(!0), I(Z, null, le(k.value, (N, U) => (C(), I("li", {
            onClick: (j) => J(N),
            key: U
          }, [
            y(or, {
              activate: N.value === b(l).speaker.value,
              data: N
            }, null, 8, ["activate", "data"])
          ], 8, $c))), 128))
        ])
      ])
    ]));
  }
});
const Sc = /* @__PURE__ */ ve(kc, [["__scopeId", "data-v-c4fe6de7"]]), Cc = (e) => (Qt("data-v-f0208c5e"), e = e(), Zt(), e), Oc = { class: "box ms-2" }, Tc = { class: "try-play-header text-center d-flex flex-row justify-content-between" }, Pc = { class: "try-play-body d-flex flex-row" }, Rc = { class: "try-play-left w-50 border-right border-secondary" }, Vc = { class: "pe-1" }, Ic = /* @__PURE__ */ Cc(() => /* @__PURE__ */ h("div", { class: "py-1 border-top border-secondary" }, null, -1)), Nc = { class: "try-play-right w-50 border-start rounded border-top border-secondary overflow-x-hidden overflow-y-auto scrollbar-none" }, Dc = /* @__PURE__ */ L({
  __name: "try-play-panle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = e, s = g(), r = g(""), o = g(), a = g(), l = g(As());
    ge(() => {
      window.addEventListener("keydown", i);
    }), Jt(() => {
      window.addEventListener("keydown", i);
    }), te(
      () => n.visible,
      (d) => {
        d && setTimeout(() => {
          f();
        }, 200);
      }
    );
    function i(d) {
      d.code === "Escape" && n.visible && p();
    }
    const { position: u } = fn(a, {
      initialValue: { x: 40, y: 40 }
    }), { style: m } = vn(o, u);
    ge(() => {
      u.value.x = (window.innerWidth - 890) / 2, u.value.y = (window.innerHeight - 390) / 2;
    });
    function p() {
      t("update:visible", !1);
    }
    function f() {
      var d;
      (d = s.value) == null || d.focus();
    }
    function v() {
      l.value = { ...l.value, word: r.value };
    }
    return (d, c) => Oe((C(), I("div", {
      ref_key: "boxRef",
      ref: o,
      style: bt([b(m), { position: "fixed" }]),
      class: "try-play user-select-none card z-3 shadow"
    }, [
      h("div", Oc, [
        h("div", Tc, [
          h("div", {
            ref_key: "handleRef",
            ref: a,
            class: "col-11 try-play-move"
          }, null, 512),
          h("div", {
            onClick: p,
            class: "col-1 try-play-menu-close"
          }, [
            y(b(vs), { color: "white" }, {
              default: R(() => [
                y(b($r))
              ]),
              _: 1
            })
          ])
        ]),
        h("div", Pc, [
          h("div", Rc, [
            h("div", Vc, [
              y(b(_t), {
                onSubmit: oe(v, ["prevent"])
              }, {
                default: R(() => [
                  y(b(wt), {
                    "input-style": { color: "white" },
                    ref_key: "searchInputRef",
                    ref: s,
                    modelValue: r.value,
                    "onUpdate:modelValue": c[0] || (c[0] = (w) => r.value = w),
                    placeholder: "输入名称搜索"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["onSubmit"])
            ]),
            y(Yu, {
              filter: l.value,
              "onUpdate:filter": c[1] || (c[1] = (w) => l.value = w)
            }, null, 8, ["filter"]),
            Ic,
            y(Uu, { filter: l.value }, null, 8, ["filter"])
          ]),
          h("div", Nc, [
            y(Sc)
          ])
        ])
      ])
    ], 4)), [
      [Te, d.visible]
    ]);
  }
});
const Ac = /* @__PURE__ */ ve(Dc, [["__scopeId", "data-v-f0208c5e"]]), ar = /* @__PURE__ */ L({
  __name: "try-play",
  setup(e) {
    const t = g(!0);
    function n(s) {
      s || (t.value = !0);
    }
    return (s, r) => (C(), K(ms, { to: "body" }, [
      y(Au, {
        visible: t.value,
        "onUpdate:visible": r[0] || (r[0] = (o) => t.value = o)
      }, null, 8, ["visible"]),
      y(Ac, {
        visible: !t.value,
        "onUpdate:visible": n
      }, null, 8, ["visible"])
    ]));
  }
});
const Lc = {
  install: (e) => {
    e.component("PinyinMenu", Ws), e.component("ContinuousMenu", Gs), e.component("ReadMenu", Ys), e.component("DigitalMenu", qs), e.component("AliasMenu", Xs), e.component("EnglishMenu", Ks), e.component("ChangespeedMenu", Js), e.component("RhythmMenu", Qs), e.component("SpecialMenu", Zs), e.component("MuteMenu", er), e.component("BgmMenu", tr), e.component("SensitiveMenu", nr), e.component("ManagementMenu", sr), e.component("ConversionMenu", rr), e.component("TryPlay", ar);
  }
};
var Yt = { exports: {} }, qt = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.ParsingError = void 0;
  class n extends Error {
    constructor(k, P) {
      super(k), this.cause = P;
    }
  }
  t.ParsingError = n;
  let s;
  function r() {
    return i(!1) || f() || p() || m();
  }
  function o() {
    return c(/\s*/), i(!0) || p() || u() || l(!1);
  }
  function a() {
    const $ = l(!0), k = [];
    let P, _ = o();
    for (; _; ) {
      if (_.node.type === "Element") {
        if (P)
          throw new Error("Found multiple root nodes");
        P = _.node;
      }
      _.excluded || k.push(_.node), _ = o();
    }
    if (!P)
      throw new n("Failed to parse XML", "Root Element not found");
    if (s.xml.length !== 0)
      throw new n("Failed to parse XML", "Not Well-Formed XML");
    return {
      declaration: $ ? $.node : null,
      root: P,
      children: k
    };
  }
  function l($) {
    const k = c($ ? /^<\?(xml)\s*/ : /^<\?([\w-:.]+)\s*/);
    if (!k)
      return;
    const P = {
      name: k[1],
      type: "ProcessingInstruction",
      attributes: {}
    };
    for (; !(w() || S("?>")); ) {
      const _ = v();
      if (_)
        P.attributes[_.name] = _.value;
      else
        return;
    }
    return c(/\?>/), {
      excluded: $ ? !1 : s.options.filter(P) === !1,
      node: P
    };
  }
  function i($) {
    const k = c(/^<([^?!</>\s]+)\s*/);
    if (!k)
      return;
    const P = {
      type: "Element",
      name: k[1],
      attributes: {},
      children: []
    }, _ = $ ? !1 : s.options.filter(P) === !1;
    for (; !(w() || S(">") || S("?>") || S("/>")); ) {
      const M = v();
      if (M)
        P.attributes[M.name] = M.value;
      else
        return;
    }
    if (c(/^\s*\/>/))
      return P.children = null, {
        excluded: _,
        node: P
      };
    c(/\??>/);
    let x = r();
    for (; x; )
      x.excluded || P.children.push(x.node), x = r();
    if (s.options.strictMode) {
      const M = `</${P.name}>`;
      if (s.xml.startsWith(M))
        s.xml = s.xml.slice(M.length);
      else
        throw new n("Failed to parse XML", `Closing tag not matching "${M}"`);
    } else
      c(/^<\/\s*[\w-:.\u00C0-\u00FF]+>/);
    return {
      excluded: _,
      node: P
    };
  }
  function u() {
    const $ = c(/^<!DOCTYPE\s+\S+\s+SYSTEM[^>]*>/) || c(/^<!DOCTYPE\s+\S+\s+PUBLIC[^>]*>/) || c(/^<!DOCTYPE\s+\S+\s*\[[^\]]*]>/) || c(/^<!DOCTYPE\s+\S+\s*>/);
    if ($) {
      const k = {
        type: "DocumentType",
        content: $[0]
      };
      return {
        excluded: s.options.filter(k) === !1,
        node: k
      };
    }
  }
  function m() {
    if (s.xml.startsWith("<![CDATA[")) {
      const $ = s.xml.indexOf("]]>");
      if ($ > -1) {
        const k = $ + 3, P = {
          type: "CDATA",
          content: s.xml.substring(0, k)
        };
        return s.xml = s.xml.slice(k), {
          excluded: s.options.filter(P) === !1,
          node: P
        };
      }
    }
  }
  function p() {
    const $ = c(/^<!--[\s\S]*?-->/);
    if ($) {
      const k = {
        type: "Comment",
        content: $[0]
      };
      return {
        excluded: s.options.filter(k) === !1,
        node: k
      };
    }
  }
  function f() {
    const $ = c(/^([^<]+)/);
    if ($) {
      const k = {
        type: "Text",
        content: $[1]
      };
      return {
        excluded: s.options.filter(k) === !1,
        node: k
      };
    }
  }
  function v() {
    const $ = c(/([^=]+)\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)\s*/);
    if ($)
      return {
        name: $[1].trim(),
        value: d($[2].trim())
      };
  }
  function d($) {
    return $.replace(/^['"]|['"]$/g, "");
  }
  function c($) {
    const k = s.xml.match($);
    if (k)
      return s.xml = s.xml.slice(k[0].length), k;
  }
  function w() {
    return s.xml.length === 0;
  }
  function S($) {
    return s.xml.indexOf($) === 0;
  }
  function V($, k = {}) {
    $ = $.trim();
    const P = k.filter || (() => !0);
    return s = {
      xml: $,
      options: Object.assign(Object.assign({}, k), { filter: P, strictMode: k.strictMode === !0 })
    }, a();
  }
  e.exports = V, t.default = V;
})(qt, qt.exports);
var Mc = qt.exports;
(function(e, t) {
  var n = Ye && Ye.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const s = n(Mc);
  function r(d) {
    if (!d.options.indentation && !d.options.lineSeparator)
      return;
    d.content += d.options.lineSeparator;
    let c;
    for (c = 0; c < d.level; c++)
      d.content += d.options.indentation;
  }
  function o(d) {
    d.content = d.content.replace(/ +$/, "");
    let c;
    for (c = 0; c < d.level; c++)
      d.content += d.options.indentation;
  }
  function a(d, c) {
    d.content += c;
  }
  function l(d, c, w) {
    if (typeof d.content == "string")
      i(d.content, c, w);
    else if (d.type === "Element")
      m(d, c, w);
    else if (d.type === "ProcessingInstruction")
      f(d, c);
    else
      throw new Error("Unknown node type: " + d.type);
  }
  function i(d, c, w) {
    if (!w) {
      const S = d.trim();
      (c.options.lineSeparator || S.length === 0) && (d = S);
    }
    d.length > 0 && (!w && c.content.length > 0 && r(c), a(c, d));
  }
  function u(d, c) {
    const w = "/" + d.join("/"), S = d[d.length - 1];
    return c.includes(S) || c.includes(w);
  }
  function m(d, c, w) {
    if (c.path.push(d.name), !w && c.content.length > 0 && r(c), a(c, "<" + d.name), p(c, d.attributes), d.children === null || c.options.forceSelfClosingEmptyTag && d.children.length === 0) {
      const S = c.options.whiteSpaceAtEndOfSelfclosingTag ? " />" : "/>";
      a(c, S);
    } else if (d.children.length === 0)
      a(c, "></" + d.name + ">");
    else {
      const S = d.children;
      a(c, ">"), c.level++;
      let V = d.attributes["xml:space"] === "preserve", $ = !1;
      if (!V && c.options.ignoredPaths && ($ = u(c.path, c.options.ignoredPaths), V = $), !V && c.options.collapseContent) {
        let k = !1, P = !1, _ = !1;
        S.forEach(function(x, M) {
          x.type === "Text" ? (x.content.includes(`
`) ? (P = !0, x.content = x.content.trim()) : (M === 0 || M === S.length - 1) && x.content.trim().length === 0 && (x.content = ""), x.content.trim().length > 0 && (k = !0)) : x.type === "CDATA" ? k = !0 : _ = !0;
        }), k && (!_ || !P) && (V = !0);
      }
      S.forEach(function(k) {
        l(k, c, w || V);
      }), c.level--, !w && !V && r(c), $ && o(c), a(c, "</" + d.name + ">");
    }
    c.path.pop();
  }
  function p(d, c) {
    Object.keys(c).forEach(function(w) {
      const S = c[w].replace(/"/g, "&quot;");
      a(d, " " + w + '="' + S + '"');
    });
  }
  function f(d, c) {
    c.content.length > 0 && r(c), a(c, "<?" + d.name), p(c, d.attributes), a(c, "?>");
  }
  function v(d, c = {}) {
    c.indentation = "indentation" in c ? c.indentation : "    ", c.collapseContent = c.collapseContent === !0, c.lineSeparator = "lineSeparator" in c ? c.lineSeparator : `\r
`, c.whiteSpaceAtEndOfSelfclosingTag = c.whiteSpaceAtEndOfSelfclosingTag === !0, c.throwOnFailure = c.throwOnFailure !== !1;
    try {
      const w = (0, s.default)(d, { filter: c.filter, strictMode: c.strictMode }), S = { content: "", level: 0, options: c, path: [] };
      return w.declaration && f(w.declaration, S), w.children.forEach(function(V) {
        l(V, S, !1);
      }), c.lineSeparator ? S.content.replace(/\r\n/g, `
`).replace(/\n/g, c.lineSeparator) : S.content;
    } catch (w) {
      if (c.throwOnFailure)
        throw w;
      return d;
    }
  }
  v.minify = (d, c = {}) => v(d, Object.assign(Object.assign({}, c), { indentation: "", lineSeparator: "" })), e.exports = v, t.default = v;
})(Yt, Yt.exports);
var jc = Yt.exports;
const Hc = /* @__PURE__ */ rn(jc);
function Fc(e) {
  return e.replaceAll(/[&]/gi, "&amp;").replaceAll(/[<]/gi, "&lt;").replaceAll(/[>]/gi, "&gt;");
}
function Uc(e, t) {
  return t ? `<audio src="${e.src}">${t}</audio>` : `<audio src="${e.src}"/>`;
}
function Bc(e) {
  return e.time ? `<break time="${e.time}"/>` : e.strength ? `<break strength="${e.strength}"/>` : "<break/>";
}
function zc(e, t) {
  return e.level ? `<emphasis level="${e.level}">${t}</emphasis>` : `<emphasis>${t}</emphasis>`;
}
function Wc(e, t) {
  if (!e.style)
    return t;
  const n = e.role ? ` role="${e.role}"` : "", s = e.styledegree ? ` styledegree="${e.styledegree}"` : "";
  return `<mstts:express-as style="${e.style}"${n}${s}>${t}</mstts:express-as>`;
}
function Gc(e) {
  if (!e.src)
    return "";
  const t = e.volume ? ` volume="${e.volume}"` : "", n = e.fadein ? ` fadein="${e.fadein}"` : "", s = e.fadeout ? ` fadeout="${e.fadeout}"` : "";
  return `<mstts:backgroundaudio src="${e.src}"${t}${n}${s}/>`;
}
function Yc(e) {
  return !e.attrType || !e.value ? "" : `<mstts:silence type="${e.attrType}" value="${e.value}"/>`;
}
function qc(e, t) {
  return `<p>${t}</p>`;
}
function Xc(e, t) {
  const n = e.alphabet ? `alphabet="${e.alphabet}"` : "";
  return `<phoneme ph="${e.ph}"${n}>${t}</phoneme>`;
}
function Kc(e, t) {
  if (!e.contour && !e.pitch && !e.range && !e.rate && !e.volume)
    return t;
  const n = e.contour ? ` contour="${e.contour}"` : "", s = e.pitch ? ` pitch="${e.pitch}"` : "", r = e.range ? ` range="${e.range}"` : "", o = e.volume ? ` volume="${e.volume}"` : "", a = e.rate ? ` rate="${e.rate}"` : "";
  return `<prosody${n}${s}${r}${o}${a}>${t}</prosody>`;
}
function Jc(e, t) {
  const n = e.interpretAs ? ` interpret-as="${e.interpretAs}"` : "", s = e.format ? ` format="${e.format}"` : "", r = e.detail ? ` detail="${e.detail}"` : "";
  return `<say-as${n}${s}${r}>${t}</say-as>`;
}
function Qc(e, t) {
  return `<s>${t}</s>`;
}
function Zc(e, t) {
  return `<sub alias="${e.alias}">${t}</sub>`;
}
function ed(e, t) {
  const n = e.effect ? ` effect="${e.effect}"` : "";
  return `<voice name="${e.name}${n}">${t}</voice>`;
}
function td(e, t) {
  return `<speak version="${e.version}" xml:lang="${e.xmlLang}" xmlns="${e.xmlns}" xmlns:mstts="${e["xmlns:mstts"]}" xmlns:emo="${e["xmlns:emo"]}">${t}</speak>`;
}
function lr(e) {
  if (rt.isText(e))
    return Fc(e.text.trim());
  if (vr.isElement(e)) {
    const t = e.children.map((s) => lr(s)).join("");
    switch (D.getNodeType(e)) {
      case "paragraph":
        return `<p>${t}</p>`;
      case "ssml-speak":
        return td(e, t);
      case "ssml-mstts:backgroundaudio":
        return Gc(e);
      case "ssml-audio":
        return Uc(e, t);
      case "ssml-break":
        return Bc(e);
      case "ssml-emphasis":
        return zc(e, t);
      case "ssml-mstts:express-as":
        return Wc(e, t);
      case "ssml-p":
        return qc(e, t);
      case "ssml-phoneme":
        return Xc(e, t);
      case "ssml-prosody":
        return Kc(e, t);
      case "ssml-s":
        return Qc(e, t);
      case "ssml-say-as":
        return Jc(e, t);
      case "ssml-sub":
        return Zc(e, t);
      case "ssml-voice":
        return ed(e, t);
      case "ssml-mstts:silence":
        return Yc(e);
      default:
        return t;
    }
  }
  return "";
}
function nd(e, t) {
  const n = { type: "ssml-voice", remark: "", name: t.name, children: [] }, s = ir(), r = {
    type: "ssml-mstts:express-as",
    remark: "",
    style: t.style,
    role: t.role,
    children: []
  }, o = () => ({
    type: "ssml-prosody",
    remark: "",
    rate: t.rate,
    pitch: t.pitch,
    children: []
  });
  n.children.push(...s), n.children.push(r);
  function a() {
    const i = o();
    r.children.push(i);
    function u(m) {
      i.children.push(m);
    }
    return { prosody: i, pushNode: u };
  }
  let l;
  for (let i = 0; i < t.children.length; i++) {
    const u = t.children[i];
    if (!(rt.isText(u) && !u.text.trim()))
      if (rt.isText(u)) {
        l ?? (l = a()), l.pushNode(u);
        continue;
      } else if (X.isVoid(e, u)) {
        l = void 0, r.children.push(u);
        continue;
      } else {
        const m = D.findPath(e, u), [p] = X.nodes(e, {
          at: m,
          mode: "lowest",
          voids: !1,
          match: (f) => D.checkNodeType(f, "ssml-prosody")
        });
        if (p) {
          l = void 0, r.children.push(u);
          continue;
        } else
          l ?? (l = a()), l.pushNode(u);
      }
  }
  return n;
}
function ir() {
  return [
    {
      type: "ssml-mstts:silence",
      attrType: "comma-exact",
      value: "200ms",
      remark: "逗号静音",
      children: []
    },
    {
      type: "ssml-mstts:silence",
      attrType: "semicolon-exact",
      value: "200ms",
      remark: "分号静音",
      children: []
    },
    {
      type: "ssml-mstts:silence",
      attrType: "enumerationcomma-exact",
      value: "200ms",
      remark: "顿号静音",
      children: []
    }
  ];
}
function sd() {
  const { rootVoice: e, rootExpressAs: t } = He(), n = { ...e, children: [] }, s = ir(), r = { ...t, children: [] };
  n.children.push(...s), n.children.push(r);
  function o(a) {
    r.children.push(a);
  }
  return { voice: n, pushNode: o };
}
function us(e) {
  const { rootProsody: t } = He(), n = { ...t, children: [] };
  e(n);
  function s(r) {
    n.children.push(r);
  }
  return { prosody: n, pushNode: s };
}
function rd() {
  return {
    type: "ssml-break",
    time: "200ms",
    children: [{ text: "" }],
    remark: "paragraphBreak"
  };
}
function od(e) {
  const t = e.children.filter((n) => D.checkNodeType(n, "paragraph")).filter((n) => !!en.string(n).trim()).map((n, s, r) => {
    const a = n.children;
    return s < r.length - 1 ? a.concat([rd()]) : a;
  });
  return [].concat(...t);
}
function ad(e) {
  const t = od(e), n = [];
  let s, r;
  for (let o = 0; o < t.length; o++) {
    const a = t[o];
    if (!(rt.isText(a) && !a.text.trim())) {
      if (D.checkNodeType(a, "custom-management")) {
        s && (n.push(s.voice), s = void 0, r = void 0), n.push(nd(e, a));
        continue;
      }
      if (s ?? (s = sd()), rt.isText(a)) {
        r ?? (r = us(s.pushNode)), r.pushNode(a);
        continue;
      } else if (X.isVoid(e, a)) {
        r = void 0, s.pushNode(a);
        continue;
      } else {
        const l = D.findPath(e, a), [i] = X.nodes(e, {
          at: l,
          mode: "lowest",
          voids: !1,
          match: (u) => D.checkNodeType(u, "ssml-prosody")
        });
        if (i) {
          r = void 0, s.pushNode(a);
          continue;
        } else {
          r ?? (r = us(s.pushNode)), r.pushNode(a);
          continue;
        }
      }
    }
  }
  return s && n.push(s.voice), n;
}
function ld() {
  const { editor: e } = me();
  if (!e)
    throw Error("没有找到 editor 对象");
  const { rootSpeak: t, rootBackgroundaudio: n } = He(), s = { ...t, children: [] }, r = { ...n };
  return s.children.push(r, ...ad(e)), lr(s);
}
const Ze = (e) => (Qt("data-v-fb2870b0"), e = e(), Zt(), e), id = { class: "editor-title d-flex flex-row align-item-center justify-content-between" }, ud = { class: "title-wrapper d-flex flex-column justify-content-center ps-3" }, cd = /* @__PURE__ */ Ze(() => /* @__PURE__ */ h("div", { class: "title-author pb-1" }, "SSML编辑器", -1)), dd = { class: "author d-flex flex-row align-items-center justify-content-start" }, fd = /* @__PURE__ */ Ze(() => /* @__PURE__ */ h("div", null, "未保存", -1)), pd = /* @__PURE__ */ Ze(() => /* @__PURE__ */ h("span", { class: "iconfont icon-play font-size-12 p-1" }, null, -1)), md = /* @__PURE__ */ Ze(() => /* @__PURE__ */ h("div", { class: "d-inline-block" }, null, -1)), vd = { class: "operation-wrapper d-flex flex-row justify-content-center align-items-center" }, hd = /* @__PURE__ */ Ze(() => /* @__PURE__ */ h("div", { class: "menu-divider" }, null, -1)), yd = /* @__PURE__ */ Ze(() => /* @__PURE__ */ h("div", { class: "px-1" }, null, -1)), gd = {
  class: "ssml-code border border-secondary-subtle rounded-2 px-2",
  style: { "white-space": "pre-wrap", "max-height": "50vh" }
}, bd = { class: "dialog-footer" }, _d = /* @__PURE__ */ L({
  __name: "editor-title",
  setup(e) {
    const t = g(!1), n = g(""), { rootBackgroundaudio: s } = He(), r = ne(() => Hc(n.value, {
      indentation: "    ",
      filter: (u) => u.type !== "Comment",
      collapseContent: !0,
      lineSeparator: `
`
    })), o = () => {
      n.value = ld(), t.value = !0;
    }, a = () => {
      s.src && Ke.play(s.src);
    }, l = () => {
      Ke.stop(s.src), s.src = "", s.remark = "";
    };
    async function i(u) {
      await navigator.clipboard.writeText(u ? r.value : n.value), t.value = !1;
    }
    return (u, m) => (C(), I(Z, null, [
      h("div", id, [
        h("div", ud, [
          cd,
          h("div", dd, [
            fd,
            b(s).src ? (C(), K(b(Ve), {
              key: 0,
              class: "bgm-txt ms-2",
              closable: "",
              size: "small",
              onClick: a,
              onClose: l
            }, {
              default: R(() => [
                pd,
                md,
                h("span", null, z(b(s).remark), 1)
              ]),
              _: 1
            })) : Ee("", !0)
          ])
        ]),
        h("div", vd, [
          y(b(fe), {
            type: "primary",
            icon: b(kr),
            disabled: ""
          }, {
            default: R(() => [
              B("分享")
            ]),
            _: 1
          }, 8, ["icon"]),
          hd,
          y(b(fe), {
            type: "primary",
            onClick: o
          }, {
            default: R(() => [
              B("查看SSML")
            ]),
            _: 1
          }),
          y(b(fe), { disabled: "" }, {
            default: R(() => [
              B("下载音频")
            ]),
            _: 1
          }),
          y(b(fe), { disabled: "" }, {
            default: R(() => [
              B("下载视频")
            ]),
            _: 1
          }),
          y(b(fe), { disabled: "" }, {
            default: R(() => [
              B("下载字幕")
            ]),
            _: 1
          }),
          y(b(fe), { disabled: "" }, {
            default: R(() => [
              B("声音转换")
            ]),
            _: 1
          }),
          yd
        ])
      ]),
      y(b(br), {
        modelValue: t.value,
        "onUpdate:modelValue": m[4] || (m[4] = (p) => t.value = p),
        title: "查看SSML",
        width: "80%"
      }, {
        header: R(() => [
          y(b(fe), {
            type: "info",
            onClick: m[0] || (m[0] = (p) => i(!0))
          }, {
            default: R(() => [
              B("复制+关闭")
            ]),
            _: 1
          }),
          y(b(fe), {
            type: "primary",
            onClick: m[1] || (m[1] = (p) => i(!1))
          }, {
            default: R(() => [
              B("压缩+复制+关闭(推荐)")
            ]),
            _: 1
          })
        ]),
        footer: R(() => [
          h("span", bd, [
            y(b(fe), {
              type: "info",
              onClick: m[2] || (m[2] = (p) => i(!0))
            }, {
              default: R(() => [
                B("复制+关闭")
              ]),
              _: 1
            }),
            y(b(fe), {
              type: "primary",
              onClick: m[3] || (m[3] = (p) => i(!1))
            }, {
              default: R(() => [
                B("压缩+复制+关闭(推荐)")
              ]),
              _: 1
            })
          ])
        ]),
        default: R(() => [
          h("pre", gd, z(r.value), 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
});
const wd = /* @__PURE__ */ ve(_d, [["__scopeId", "data-v-fb2870b0"]]), xd = /* @__PURE__ */ L({
  __name: "editor-core",
  emits: ["created", "change"],
  setup(e, { emit: t }) {
    const { editor: n, setEditor: s, globalEditConfig: r } = me(), o = g(null);
    ge(() => {
      a();
    }), Jt(() => {
      n == null || n.destroy();
    });
    function a() {
      if (!o.value)
        return;
      const l = hr({
        selector: o.value,
        mode: "simple",
        config: {
          ...ie(r.editorConfig),
          onCreated(i) {
            t("created", i);
          },
          onChange(i) {
            t("change", i);
          }
        }
      });
      s(l), l.on(G.ERROR, r.handleError);
    }
    return (l, i) => (C(), I("div", {
      ref_key: "boxRef",
      ref: o,
      class: "edit-core",
      style: { height: "70vh", "overflow-y": "hidden" }
    }, null, 512));
  }
}), Ed = { class: "bar-view border-bottom border-1" }, $d = /* @__PURE__ */ L({
  __name: "bar-view",
  setup(e) {
    return (t, n) => (C(), I(Z, null, [
      h("div", Ed, [
        y(b(Hs), null, {
          default: R(() => [
            y(b(We), { divider: "green" }, {
              default: R(() => [
                y(b(re), {
                  text: "24K高清音质",
                  icon: "play",
                  disabled: ""
                })
              ]),
              _: 1
            }),
            y(b(We), { divider: "cyan" }, {
              default: R(() => [
                y(b(Ws)),
                y(b(Ys)),
                y(b(qs)),
                y(b(Gs)),
                y(b(Xs)),
                y(b(Ks))
              ]),
              _: 1
            }),
            y(b(We), { divider: "orange" }, {
              default: R(() => [
                y(b(Js)),
                y(b(sr)),
                y(b(rr))
              ]),
              _: 1
            }),
            y(b(We), { divider: "purple" }, {
              default: R(() => [
                y(b(Qs)),
                y(b(er))
              ]),
              _: 1
            }),
            y(b(We), { divider: "yellow" }, {
              default: R(() => [
                y(b(Zs)),
                y(b(tr))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      y(b(ar))
    ], 64));
  }
}), kd = { class: "editor-box" }, Sd = { class: "editor-core-container shadow pt-1" }, Cd = /* @__PURE__ */ L({
  __name: "editor-view",
  emits: ["created", "change"],
  setup(e, { emit: t }) {
    const n = (a) => {
      t("created", a);
    }, s = (a) => {
      t("change", a);
    };
    function r(a) {
      $e.emit(ke.VIEW_CLICK, a);
    }
    function o(a) {
      $e.emit(ke.VIEW_KEYDOWN, a);
    }
    return (a, l) => (C(), I("div", {
      class: "editor-view",
      onClick: r,
      onKeydown: o
    }, [
      y(wd),
      h("div", kd, [
        y($d),
        h("div", Sd, [
          y(xd, {
            onChange: s,
            onCreated: n
          })
        ])
      ])
    ], 32));
  }
});
const Od = /* @__PURE__ */ ve(Cd, [["__scopeId", "data-v-c398e700"]]), Td = {
  install(e) {
    e.component("EditorView", Od);
  }
}, zd = {
  install(e, t) {
    e.use(Kr()), e.use(() => {
      const { setGlobalEditConfig: n } = me(), s = Ps(t);
      n(s), $e.on(ke.ERROR, s.handleError);
    }), e.use(Wa), e.use(ki), e.use(Lc), e.use(Td);
  }
};
export {
  Io as AudioPlayer,
  Do as CancellationTokenSource,
  Ld as DOMComment,
  Md as DOMElement,
  Ad as DOMNode,
  Hd as DOMRange,
  Fd as DOMSelection,
  Ud as DOMStaticRange,
  jd as DOMText,
  ke as EMITTER_EVENT,
  Od as EditorView,
  No as FileSelector,
  G as WANGEDITOR_EVENT,
  Ke as audioPlayer,
  Ps as createGlobalEditorConfig,
  zd as default,
  As as defaultFilterSpeaker,
  ut as defaultLabelValue,
  Ga as defaultSpeaker,
  at as demoAvatar,
  Xn as formatTime,
  Bd as genRandomStr,
  to as pitch,
  eo as speed
};

var hr = Object.defineProperty;
var yr = (e, t, n) => t in e ? hr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var W = (e, t, n) => (yr(e, typeof t != "symbol" ? t + "" : t, n), n);
import { effectScope as ps, ref as _, markRaw as Ae, toRaw as de, isRef as Me, isReactive as _t, toRef as ut, hasInjectionContext as gr, inject as ms, getCurrentInstance as tn, watch as ee, unref as v, reactive as ht, nextTick as zt, computed as Y, getCurrentScope as vs, onScopeDispose as hs, toRefs as Wt, shallowRef as q, shallowReactive as Qe, defineComponent as A, openBlock as C, createElementBlock as D, normalizeClass as fe, withModifiers as ne, createElementVNode as h, toDisplayString as H, createBlock as K, withCtx as N, createVNode as g, renderSlot as Se, customRef as br, onMounted as pe, watchEffect as _r, Fragment as Z, renderList as ie, createTextVNode as B, onUnmounted as nn, Teleport as ys, withDirectives as Te, normalizeStyle as wt, vShow as Oe, pushScopeId as xt, popScopeId as Et, createCommentVNode as ke, provide as wr } from "vue";
import { DomEditor as V, SlateNode as sn, SlateEditor as X, SlateTransforms as G, SlateRange as me, Boot as ue, SlateText as nt, SlateElement as xr, createEditor as Er } from "@wangeditor/editor";
import { ElForm as kt, ElInput as $t, ElPopover as Re, ElMenu as kr, ElMenuItem as $r, ElSelect as $n, ElOption as Sn, ElIcon as rn, ElButton as ce, ElTag as Pe, ElSlider as Dt, ElDialog as Sr } from "element-plus";
import { Search as Cr, Loading as Tr, More as Or, StarFilled as Rr, Star as Pr, Minus as Dr, Share as Nr } from "@element-plus/icons-vue";
var gs = !1;
function lt(e, t, n) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function Nt(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1);
    return;
  }
  delete e[t];
}
function Ir() {
  return bs().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function bs() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Vr = typeof Proxy == "function", Ar = "devtools-plugin:setup", Lr = "plugin:settings:set";
let He, Gt;
function Mr() {
  var e;
  return He !== void 0 || (typeof window < "u" && window.performance ? (He = !0, Gt = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (He = !0, Gt = global.perf_hooks.performance) : He = !1), He;
}
function jr() {
  return Mr() ? Gt.now() : Date.now();
}
class Fr {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const s = {};
    if (t.settings)
      for (const a in t.settings) {
        const i = t.settings[a];
        s[a] = i.defaultValue;
      }
    const r = `__vue-devtools-plugin-settings__${t.id}`;
    let o = Object.assign({}, s);
    try {
      const a = localStorage.getItem(r), i = JSON.parse(a);
      Object.assign(o, i);
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
        return jr();
      }
    }, n && n.on(Lr, (a, i) => {
      a === this.plugin.id && this.fallbacks.setSettings(i);
    }), this.proxiedOn = new Proxy({}, {
      get: (a, i) => this.target ? this.target.on[i] : (...l) => {
        this.onQueue.push({
          method: i,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (a, i) => this.target ? this.target[i] : i === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(i) ? (...l) => (this.targetQueue.push({
        method: i,
        args: l,
        resolve: () => {
        }
      }), this.fallbacks[i](...l)) : (...l) => new Promise((u) => {
        this.targetQueue.push({
          method: i,
          args: l,
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
function _s(e, t) {
  const n = e, s = bs(), r = Ir(), o = Vr && n.enableEarlyProxy;
  if (r && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o))
    r.emit(Ar, e, t);
  else {
    const a = o ? new Fr(n, r) : null;
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
let Ze;
const st = (e) => Ze = e, ws = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function je(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var $e;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})($e || ($e = {}));
const St = typeof window < "u", et = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && St, Cn = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function Hr(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], { type: e.type }) : e;
}
function on(e, t, n) {
  const s = new XMLHttpRequest();
  s.open("GET", e), s.responseType = "blob", s.onload = function() {
    ks(s.response, t, n);
  }, s.onerror = function() {
    console.error("could not download file");
  }, s.send();
}
function xs(e) {
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
const dt = typeof navigator == "object" ? navigator : { userAgent: "" }, Es = /* @__PURE__ */ (() => /Macintosh/.test(dt.userAgent) && /AppleWebKit/.test(dt.userAgent) && !/Safari/.test(dt.userAgent))(), ks = St ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Es ? Ur : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in dt ? Br : (
      // Fallback to using FileReader and a popup
      zr
    )
  )
) : () => {
};
function Ur(e, t = "download", n) {
  const s = document.createElement("a");
  s.download = t, s.rel = "noopener", typeof e == "string" ? (s.href = e, s.origin !== location.origin ? xs(s.href) ? on(e, t, n) : (s.target = "_blank", ct(s)) : ct(s)) : (s.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    ct(s);
  }, 0));
}
function Br(e, t = "download", n) {
  if (typeof e == "string")
    if (xs(e))
      on(e, t, n);
    else {
      const s = document.createElement("a");
      s.href = e, s.target = "_blank", setTimeout(function() {
        ct(s);
      });
    }
  else
    navigator.msSaveOrOpenBlob(Hr(e, n), t);
}
function zr(e, t, n, s) {
  if (s = s || open("", "_blank"), s && (s.document.title = s.document.body.innerText = "downloading..."), typeof e == "string")
    return on(e, t, n);
  const r = e.type === "application/octet-stream", o = /constructor/i.test(String(Cn.HTMLElement)) || "safari" in Cn, a = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((a || r && o || Es) && typeof FileReader < "u") {
    const i = new FileReader();
    i.onloadend = function() {
      let l = i.result;
      if (typeof l != "string")
        throw s = null, new Error("Wrong reader.result type");
      l = a ? l : l.replace(/^data:[^;]*;/, "data:attachment/file;"), s ? s.location.href = l : location.assign(l), s = null;
    }, i.readAsDataURL(e);
  } else {
    const i = URL.createObjectURL(e);
    s ? s.location.assign(i) : location.href = i, s = null, setTimeout(function() {
      URL.revokeObjectURL(i);
    }, 4e4);
  }
}
function Q(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function an(e) {
  return "_a" in e && "install" in e;
}
function $s() {
  if (!("clipboard" in navigator))
    return Q("Your browser doesn't support the Clipboard API", "error"), !0;
}
function Ss(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (Q('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Wr(e) {
  if (!$s())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), Q("Global state copied to clipboard.");
    } catch (t) {
      if (Ss(t))
        return;
      Q("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function Gr(e) {
  if (!$s())
    try {
      Cs(e, JSON.parse(await navigator.clipboard.readText())), Q("Global state pasted from clipboard.");
    } catch (t) {
      if (Ss(t))
        return;
      Q("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function qr(e) {
  try {
    ks(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    Q("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let Ce;
function Yr() {
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
async function Xr(e) {
  try {
    const n = await Yr()();
    if (!n)
      return;
    const { text: s, file: r } = n;
    Cs(e, JSON.parse(s)), Q(`Global state imported from "${r.name}".`);
  } catch (t) {
    Q("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function Cs(e, t) {
  for (const n in t) {
    const s = e.state.value[n];
    s && Object.assign(s, t[n]);
  }
}
function xe(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const Ts = "🍍 Pinia (root)", qt = "_root";
function Kr(e) {
  return an(e) ? {
    id: qt,
    label: Ts
  } : {
    id: e.$id,
    label: e.$id
  };
}
function Jr(e) {
  if (an(e)) {
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
          value: a._getters.reduce((i, l) => (i[l] = a[l], i), {})
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
function Qr(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: xe(e.type),
    key: xe(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function Zr(e) {
  switch (e) {
    case $e.direct:
      return "mutation";
    case $e.patchFunction:
      return "$patch";
    case $e.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let We = !0;
const ft = [], Ve = "pinia:mutations", te = "pinia", { assign: eo } = Object, yt = (e) => "🍍 " + e;
function to(e, t) {
  _s({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: ft,
    app: e
  }, (n) => {
    typeof n.now != "function" && Q("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: Ve,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: te,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            Wr(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await Gr(t), n.sendInspectorTree(te), n.sendInspectorState(te);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            qr(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Xr(t), n.sendInspectorTree(te), n.sendInspectorState(te);
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
        Object.values(a).forEach((i) => {
          s.instanceData.state.push({
            type: yt(i.$id),
            key: "state",
            editable: !0,
            value: i._isOptionsAPI ? {
              _custom: {
                value: de(i.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => i.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(i.$state).reduce((l, u) => (l[u] = i.$state[u], l), {})
            )
          }), i._getters && i._getters.length && s.instanceData.state.push({
            type: yt(i.$id),
            key: "getters",
            editable: !1,
            value: i._getters.reduce((l, u) => {
              try {
                l[u] = i[u];
              } catch (f) {
                l[u] = f;
              }
              return l;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((s) => {
      if (s.app === e && s.inspectorId === te) {
        let r = [t];
        r = r.concat(Array.from(t._s.values())), s.rootNodes = (s.filter ? r.filter((o) => "$id" in o ? o.$id.toLowerCase().includes(s.filter.toLowerCase()) : Ts.toLowerCase().includes(s.filter.toLowerCase())) : r).map(Kr);
      }
    }), n.on.getInspectorState((s) => {
      if (s.app === e && s.inspectorId === te) {
        const r = s.nodeId === qt ? t : t._s.get(s.nodeId);
        if (!r)
          return;
        r && (s.state = Jr(r));
      }
    }), n.on.editInspectorState((s, r) => {
      if (s.app === e && s.inspectorId === te) {
        const o = s.nodeId === qt ? t : t._s.get(s.nodeId);
        if (!o)
          return Q(`store "${s.nodeId}" not found`, "error");
        const { path: a } = s;
        an(o) ? a.unshift("state") : (a.length !== 1 || !o._customProperties.has(a[0]) || a[0] in o.$state) && a.unshift("$state"), We = !1, s.set(o, a, s.state.value), We = !0;
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
        a[0] = "$state", We = !1, s.set(o, a, s.state.value), We = !0;
      }
    });
  });
}
function no(e, t) {
  ft.includes(yt(t.$id)) || ft.push(yt(t.$id)), _s({
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
    t.$onAction(({ after: a, onError: i, name: l, args: u }) => {
      const f = Os++;
      n.addTimelineEvent({
        layerId: Ve,
        event: {
          time: s(),
          title: "🛫 " + l,
          subtitle: "start",
          data: {
            store: xe(t.$id),
            action: xe(l),
            args: u
          },
          groupId: f
        }
      }), a((p) => {
        De = void 0, n.addTimelineEvent({
          layerId: Ve,
          event: {
            time: s(),
            title: "🛬 " + l,
            subtitle: "end",
            data: {
              store: xe(t.$id),
              action: xe(l),
              args: u,
              result: p
            },
            groupId: f
          }
        });
      }), i((p) => {
        De = void 0, n.addTimelineEvent({
          layerId: Ve,
          event: {
            time: s(),
            logType: "error",
            title: "💥 " + l,
            subtitle: "end",
            data: {
              store: xe(t.$id),
              action: xe(l),
              args: u,
              error: p
            },
            groupId: f
          }
        });
      });
    }, !0), t._customProperties.forEach((a) => {
      ee(() => v(t[a]), (i, l) => {
        n.notifyComponentUpdate(), n.sendInspectorState(te), We && n.addTimelineEvent({
          layerId: Ve,
          event: {
            time: s(),
            title: "Change",
            subtitle: a,
            data: {
              newValue: i,
              oldValue: l
            },
            groupId: De
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: a, type: i }, l) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(te), !We)
        return;
      const u = {
        time: s(),
        title: Zr(i),
        data: eo({ store: xe(t.$id) }, Qr(a)),
        groupId: De
      };
      i === $e.patchFunction ? u.subtitle = "⤵️" : i === $e.patchObject ? u.subtitle = "🧩" : a && !Array.isArray(a) && (u.subtitle = a.type), a && (u.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: a
        }
      }), n.addTimelineEvent({
        layerId: Ve,
        event: u
      });
    }, { detached: !0, flush: "sync" });
    const r = t._hotUpdate;
    t._hotUpdate = Ae((a) => {
      r(a), n.addTimelineEvent({
        layerId: Ve,
        event: {
          time: s(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: xe(t.$id),
            info: xe("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(te), n.sendInspectorState(te);
    });
    const { $dispose: o } = t;
    t.$dispose = () => {
      o(), n.notifyComponentUpdate(), n.sendInspectorTree(te), n.sendInspectorState(te), n.getSettings().logStoreChanges && Q(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(te), n.sendInspectorState(te), n.getSettings().logStoreChanges && Q(`"${t.$id}" store installed 🆕`);
  });
}
let Os = 0, De;
function Tn(e, t, n) {
  const s = t.reduce((r, o) => (r[o] = de(e)[o], r), {});
  for (const r in s)
    e[r] = function() {
      const o = Os, a = n ? new Proxy(e, {
        get(...l) {
          return De = o, Reflect.get(...l);
        },
        set(...l) {
          return De = o, Reflect.set(...l);
        }
      }) : e;
      De = o;
      const i = s[r].apply(a, arguments);
      return De = void 0, i;
    };
}
function so({ app: e, store: t, options: n }) {
  if (t.$id.startsWith("__hot:"))
    return;
  t._isOptionsAPI = !!n.state, Tn(t, Object.keys(n.actions), t._isOptionsAPI);
  const s = t._hotUpdate;
  de(t)._hotUpdate = function(r) {
    s.apply(this, arguments), Tn(t, Object.keys(r._hmrPayload.actions), !!t._isOptionsAPI);
  }, no(
    e,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    t
  );
}
function ro() {
  const e = ps(!0), t = e.run(() => _({}));
  let n = [], s = [];
  const r = Ae({
    install(o) {
      st(r), r._a = o, o.provide(ws, r), o.config.globalProperties.$pinia = r, et && to(o, r), s.forEach((a) => n.push(a)), s = [];
    },
    use(o) {
      return !this._a && !gs ? s.push(o) : n.push(o), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return et && typeof Proxy < "u" && r.use(so), r;
}
function Rs(e, t) {
  for (const n in t) {
    const s = t[n];
    if (!(n in e))
      continue;
    const r = e[n];
    je(r) && je(s) && !Me(s) && !_t(s) ? e[n] = Rs(r, s) : e[n] = s;
  }
  return e;
}
const Ps = () => {
};
function On(e, t, n, s = Ps) {
  e.push(t);
  const r = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), s());
  };
  return !n && vs() && hs(r), r;
}
function Ue(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const oo = (e) => e();
function Yt(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, s) => e.set(s, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], r = e[n];
    je(r) && je(s) && e.hasOwnProperty(n) && !Me(s) && !_t(s) ? e[n] = Yt(r, s) : e[n] = s;
  }
  return e;
}
const ao = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function io(e) {
  return !je(e) || !e.hasOwnProperty(ao);
}
const { assign: he } = Object;
function Rn(e) {
  return !!(Me(e) && e.effect);
}
function Pn(e, t, n, s) {
  const { state: r, actions: o, getters: a } = t, i = n.state.value[e];
  let l;
  function u() {
    !i && (process.env.NODE_ENV === "production" || !s) && (n.state.value[e] = r ? r() : {});
    const f = process.env.NODE_ENV !== "production" && s ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      Wt(_(r ? r() : {}).value)
    ) : Wt(n.state.value[e]);
    return he(f, o, Object.keys(a || {}).reduce((p, m) => (process.env.NODE_ENV !== "production" && m in f && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${m}" in store "${e}".`), p[m] = Ae(Y(() => {
      st(n);
      const y = n._s.get(e);
      return a[m].call(y, y);
    })), p), {}));
  }
  return l = Xt(e, u, t, n, s, !0), l;
}
function Xt(e, t, n = {}, s, r, o) {
  let a;
  const i = he({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !s._e.active)
    throw new Error("Pinia destroyed");
  const l = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !gs && (l.onTrigger = (T) => {
    u ? y = T : u == !1 && !w._hotUpdating && (Array.isArray(y) ? y.push(T) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let u, f, p = [], m = [], y;
  const c = s.state.value[e];
  !o && !c && (process.env.NODE_ENV === "production" || !r) && (s.state.value[e] = {});
  const d = _({});
  let E;
  function k(T) {
    let O;
    u = f = !1, process.env.NODE_ENV !== "production" && (y = []), typeof T == "function" ? (T(s.state.value[e]), O = {
      type: $e.patchFunction,
      storeId: e,
      events: y
    }) : (Yt(s.state.value[e], T), O = {
      type: $e.patchObject,
      payload: T,
      storeId: e,
      events: y
    });
    const I = E = Symbol();
    zt().then(() => {
      E === I && (u = !0);
    }), f = !0, Ue(p, O, s.state.value[e]);
  }
  const S = o ? function() {
    const { state: O } = n, I = O ? O() : {};
    this.$patch((U) => {
      he(U, I);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : Ps
  );
  function b() {
    a.stop(), p = [], m = [], s._s.delete(e);
  }
  function x(T, O) {
    return function() {
      st(s);
      const I = Array.from(arguments), U = [], we = [];
      function at(ae) {
        U.push(ae);
      }
      function Rt(ae) {
        we.push(ae);
      }
      Ue(m, {
        args: I,
        name: T,
        store: w,
        after: at,
        onError: Rt
      });
      let Ie;
      try {
        Ie = O.apply(this && this.$id === e ? this : w, I);
      } catch (ae) {
        throw Ue(we, ae), ae;
      }
      return Ie instanceof Promise ? Ie.then((ae) => (Ue(U, ae), ae)).catch((ae) => (Ue(we, ae), Promise.reject(ae))) : (Ue(U, Ie), Ie);
    };
  }
  const R = /* @__PURE__ */ Ae({
    actions: {},
    getters: {},
    state: [],
    hotState: d
  }), P = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: On.bind(null, m),
    $patch: k,
    $reset: S,
    $subscribe(T, O = {}) {
      const I = On(p, T, O.detached, () => U()), U = a.run(() => ee(() => s.state.value[e], (we) => {
        (O.flush === "sync" ? f : u) && T({
          storeId: e,
          type: $e.direct,
          events: y
        }, we);
      }, he({}, l, O)));
      return I;
    },
    $dispose: b
  }, w = ht(process.env.NODE_ENV !== "production" || et ? he(
    {
      _hmrPayload: R,
      _customProperties: Ae(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    P
    // must be added later
    // setupStore
  ) : P);
  s._s.set(e, w);
  const L = s._a && s._a.runWithContext || oo, F = s._e.run(() => (a = ps(), L(() => a.run(t))));
  for (const T in F) {
    const O = F[T];
    if (Me(O) && !Rn(O) || _t(O))
      process.env.NODE_ENV !== "production" && r ? lt(d.value, T, ut(F, T)) : o || (c && io(O) && (Me(O) ? O.value = c[T] : Yt(O, c[T])), s.state.value[e][T] = O), process.env.NODE_ENV !== "production" && R.state.push(T);
    else if (typeof O == "function") {
      const I = process.env.NODE_ENV !== "production" && r ? O : x(T, O);
      F[T] = I, process.env.NODE_ENV !== "production" && (R.actions[T] = O), i.actions[T] = O;
    } else
      process.env.NODE_ENV !== "production" && Rn(O) && (R.getters[T] = o ? (
        // @ts-expect-error
        n.getters[T]
      ) : O, St && (F._getters || // @ts-expect-error: same
      (F._getters = Ae([]))).push(T));
  }
  if (he(w, F), he(de(w), F), Object.defineProperty(w, "$state", {
    get: () => process.env.NODE_ENV !== "production" && r ? d.value : s.state.value[e],
    set: (T) => {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error("cannot set hotState");
      k((O) => {
        he(O, T);
      });
    }
  }), process.env.NODE_ENV !== "production" && (w._hotUpdate = Ae((T) => {
    w._hotUpdating = !0, T._hmrPayload.state.forEach((O) => {
      if (O in w.$state) {
        const I = T.$state[O], U = w.$state[O];
        typeof I == "object" && je(I) && je(U) ? Rs(I, U) : T.$state[O] = U;
      }
      lt(w, O, ut(T.$state, O));
    }), Object.keys(w.$state).forEach((O) => {
      O in T.$state || Nt(w, O);
    }), u = !1, f = !1, s.state.value[e] = ut(T._hmrPayload, "hotState"), f = !0, zt().then(() => {
      u = !0;
    });
    for (const O in T._hmrPayload.actions) {
      const I = T[O];
      lt(w, O, x(O, I));
    }
    for (const O in T._hmrPayload.getters) {
      const I = T._hmrPayload.getters[O], U = o ? (
        // special handling of options api
        Y(() => (st(s), I.call(w, w)))
      ) : I;
      lt(w, O, U);
    }
    Object.keys(w._hmrPayload.getters).forEach((O) => {
      O in T._hmrPayload.getters || Nt(w, O);
    }), Object.keys(w._hmrPayload.actions).forEach((O) => {
      O in T._hmrPayload.actions || Nt(w, O);
    }), w._hmrPayload = T._hmrPayload, w._getters = T._getters, w._hotUpdating = !1;
  })), et) {
    const T = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((O) => {
      Object.defineProperty(w, O, he({ value: w[O] }, T));
    });
  }
  return s._p.forEach((T) => {
    if (et) {
      const O = a.run(() => T({
        store: w,
        app: s._a,
        pinia: s,
        options: i
      }));
      Object.keys(O || {}).forEach((I) => w._customProperties.add(I)), he(w, O);
    } else
      he(w, a.run(() => T({
        store: w,
        app: s._a,
        pinia: s,
        options: i
      })));
  }), process.env.NODE_ENV !== "production" && w.$state && typeof w.$state == "object" && typeof w.$state.constructor == "function" && !w.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${w.$id}".`), c && o && n.hydrate && n.hydrate(w.$state, c), u = !0, f = !0, w;
}
function Ct(e, t, n) {
  let s, r;
  const o = typeof t == "function";
  if (typeof e == "string")
    s = e, r = o ? n : t;
  else if (r = e, s = e.id, process.env.NODE_ENV !== "production" && typeof s != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function a(i, l) {
    const u = gr();
    if (i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && Ze && Ze._testing ? null : i) || (u ? ms(ws, null) : null), i && st(i), process.env.NODE_ENV !== "production" && !Ze)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    i = Ze, i._s.has(s) || (o ? Xt(s, t, r, i) : Pn(s, r, i), process.env.NODE_ENV !== "production" && (a._pinia = i));
    const f = i._s.get(s);
    if (process.env.NODE_ENV !== "production" && l) {
      const p = "__hot:" + s, m = o ? Xt(p, t, r, i, !0) : Pn(p, he({}, r), i, !0);
      l._hotUpdate(m), delete i.state.value[p], i._s.delete(p);
    }
    if (process.env.NODE_ENV !== "production" && St) {
      const p = tn();
      if (p && p.proxy && // avoid adding stores that are just built for hot module replacement
      !l) {
        const m = p.proxy, y = "_pStores" in m ? m._pStores : m._pStores = {};
        y[s] = f;
      }
    }
    return f;
  }
  return a.$id = s, a;
}
function Ds(e) {
  {
    e = de(e);
    const t = {};
    for (const n in e) {
      const s = e[n];
      (Me(s) || _t(s)) && (t[n] = // ---
      ut(e, n));
    }
    return t;
  }
}
function Dn() {
  return { id: "", src: "" };
}
function ve() {
  return () => Promise.resolve([]);
}
function Ns(e) {
  const t = (e == null ? void 0 : e.editorConfig) || { maxLength: 5e3, placeholder: "请输入内容..." }, n = (e == null ? void 0 : e.handleError) || (() => {
  }), s = (e == null ? void 0 : e.pinyin) || { fetchData: ve() }, r = (e == null ? void 0 : e.english) || { fetchData: ve() }, o = (e == null ? void 0 : e.special) || {
    fetchData: ve(),
    fetchScene: ve(),
    fetchStyle: ve()
  }, a = (e == null ? void 0 : e.bgm) || {
    fetchData: ve(),
    fetchScene: ve(),
    fetchStyle: ve()
  }, i = (e == null ? void 0 : e.tryPlay) || {
    play: () => Promise,
    fetchData: ve(),
    featchTag: ve(),
    fetchStar: ve()
  }, l = (e == null ? void 0 : e.conversion) || {
    timeoutMilliseconds: 2e4,
    audioUpload: () => Dn(),
    transfer: () => Dn(),
    fetchSpeaker: ve()
  }, u = o, f = a, p = i;
  return u.menus ?? (u.menus = [
    { label: "默认音效", value: "" },
    { label: "自定义音效", value: "custom" },
    { label: "最近音效", value: "history" }
  ]), f.menus ?? (f.menus = [
    { label: "默认配乐", value: "" },
    { label: "自定义配乐", value: "custom" },
    { label: "最近配乐", value: "history" }
  ]), p.gender ?? (p.gender = [
    { label: "全部", value: "" },
    { label: "男声", value: "Male" },
    { label: "女声", value: "Female" }
  ]), p.topFlag ?? (p.topFlag = [
    { label: "热榜", value: "" },
    { label: "SVIP", value: "SVIP" },
    { label: "付费", value: "付费" }
  ]), p.category ?? (p.category = [
    { label: "常用", value: "常用" },
    { label: "已购", value: "已购" },
    { label: "收藏", value: "收藏" },
    { label: "我的", value: "我的" }
  ]), {
    editorConfig: t,
    handleError: n,
    pinyin: s,
    english: r,
    bgm: f,
    special: u,
    tryPlay: p,
    conversion: l
  };
}
const lo = () => ({
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
}), uo = () => ({
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
}), rt = () => "https://img.sdaxia.top/upload/4314c841777e4d20901cd5d04a28e91a.png", re = Ct("--editor-config", () => {
  const e = q(), t = q(), n = Y(() => e.value), s = Y(() => {
    if (t.value)
      return t.value;
    throw Error("请设置GlobalEditorConfig");
  });
  return { editor: n, globalEditConfig: s, setEditor: (a) => {
    e.value = a;
  }, setGlobalEditConfig: (a) => {
    t.value = a ?? Ns();
  } };
}), co = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => V.getNodeType(r) === "ssml-audio" ? !0 : t(r), s.isVoid = (r) => V.getNodeType(r) === "ssml-audio" ? !sn.string(r) : n(r), s;
};
function Nn(e, t, n, s, r) {
  const o = t === void 0 ? void 0 : t.key;
  return { sel: e, data: t, children: n, text: s, elm: r, key: o };
}
const In = Array.isArray;
function It(e) {
  return typeof e == "string" || typeof e == "number" || e instanceof String || e instanceof Number;
}
function Is(e, t, n) {
  if (e.ns = "http://www.w3.org/2000/svg", n !== "foreignObject" && t !== void 0)
    for (let s = 0; s < t.length; ++s) {
      const r = t[s];
      if (typeof r == "string")
        continue;
      const o = r.data;
      o !== void 0 && Is(o, r.children, r.sel);
    }
}
function $(e, t, n) {
  let s = {}, r, o, a;
  if (n !== void 0 ? (t !== null && (s = t), In(n) ? r = n : It(n) ? o = n.toString() : n && n.sel && (r = [n])) : t != null && (In(t) ? r = t : It(t) ? o = t.toString() : t && t.sel ? r = [t] : s = t), r !== void 0)
    for (a = 0; a < r.length; ++a)
      It(r[a]) && (r[a] = Nn(void 0, void 0, void 0, r[a], void 0));
  return e[0] === "s" && e[1] === "v" && e[2] === "g" && (e.length === 3 || e[3] === "." || e[3] === "#") && Is(s, r, e), Nn(e, s, r, o, void 0);
}
var Ge = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ln(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vs = "Expected a function", Vn = 0 / 0, fo = "[object Symbol]", po = /^\s+|\s+$/g, mo = /^[-+]0x[0-9a-f]+$/i, vo = /^0b[01]+$/i, ho = /^0o[0-7]+$/i, yo = parseInt, go = typeof Ge == "object" && Ge && Ge.Object === Object && Ge, bo = typeof self == "object" && self && self.Object === Object && self, _o = go || bo || Function("return this")(), wo = Object.prototype, xo = wo.toString, Eo = Math.max, ko = Math.min, Vt = function() {
  return _o.Date.now();
};
function $o(e, t, n) {
  var s, r, o, a, i, l, u = 0, f = !1, p = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(Vs);
  t = An(t) || 0, gt(n) && (f = !!n.leading, p = "maxWait" in n, o = p ? Eo(An(n.maxWait) || 0, t) : o, m = "trailing" in n ? !!n.trailing : m);
  function y(P) {
    var w = s, L = r;
    return s = r = void 0, u = P, a = e.apply(L, w), a;
  }
  function c(P) {
    return u = P, i = setTimeout(k, t), f ? y(P) : a;
  }
  function d(P) {
    var w = P - l, L = P - u, F = t - w;
    return p ? ko(F, o - L) : F;
  }
  function E(P) {
    var w = P - l, L = P - u;
    return l === void 0 || w >= t || w < 0 || p && L >= o;
  }
  function k() {
    var P = Vt();
    if (E(P))
      return S(P);
    i = setTimeout(k, d(P));
  }
  function S(P) {
    return i = void 0, m && s ? y(P) : (s = r = void 0, a);
  }
  function b() {
    i !== void 0 && clearTimeout(i), u = 0, s = l = r = i = void 0;
  }
  function x() {
    return i === void 0 ? a : S(Vt());
  }
  function R() {
    var P = Vt(), w = E(P);
    if (s = arguments, r = this, l = P, w) {
      if (i === void 0)
        return c(l);
      if (p)
        return i = setTimeout(k, t), y(l);
    }
    return i === void 0 && (i = setTimeout(k, t)), a;
  }
  return R.cancel = b, R.flush = x, R;
}
function So(e, t, n) {
  var s = !0, r = !0;
  if (typeof e != "function")
    throw new TypeError(Vs);
  return gt(n) && (s = "leading" in n ? !!n.leading : s, r = "trailing" in n ? !!n.trailing : r), $o(e, t, {
    leading: s,
    maxWait: t,
    trailing: r
  });
}
function gt(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function Co(e) {
  return !!e && typeof e == "object";
}
function To(e) {
  return typeof e == "symbol" || Co(e) && xo.call(e) == fo;
}
function An(e) {
  if (typeof e == "number")
    return e;
  if (To(e))
    return Vn;
  if (gt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = gt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(po, "");
  var n = vo.test(e);
  return n || ho.test(e) ? yo(e.slice(2), n ? 2 : 8) : mo.test(e) ? Vn : +e;
}
var Oo = So;
const se = /* @__PURE__ */ ln(Oo);
function Ln(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function un(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {}), Object.keys(t).forEach(function(n) {
    typeof e[n] > "u" ? e[n] = t[n] : Ln(t[n]) && Ln(e[n]) && Object.keys(t[n]).length > 0 && un(e[n], t[n]);
  });
}
var As = {
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
function cn() {
  var e = typeof document < "u" ? document : {};
  return un(e, As), e;
}
var Ro = {
  document: As,
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
function Ls() {
  var e = typeof window < "u" ? window : {};
  return un(e, Ro), e;
}
function Po(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function Kt(e) {
  return Kt = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Kt(e);
}
function bt(e, t) {
  return bt = Object.setPrototypeOf || function(s, r) {
    return s.__proto__ = r, s;
  }, bt(e, t);
}
function Do() {
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
  return Do() ? pt = Reflect.construct : pt = function(r, o, a) {
    var i = [null];
    i.push.apply(i, o);
    var l = Function.bind.apply(r, i), u = new l();
    return a && bt(u, a.prototype), u;
  }, pt.apply(null, arguments);
}
function No(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Jt(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Jt = function(s) {
    if (s === null || !No(s))
      return s;
    if (typeof s != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(s))
        return t.get(s);
      t.set(s, r);
    }
    function r() {
      return pt(s, arguments, Kt(this).constructor);
    }
    return r.prototype = Object.create(s.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), bt(r, s);
  }, Jt(e);
}
function Io(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Vo(e) {
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
var Le = /* @__PURE__ */ function(e) {
  Po(t, e);
  function t(n) {
    var s;
    return s = e.call.apply(e, [this].concat(n)) || this, Vo(Io(s)), s;
  }
  return t;
}(/* @__PURE__ */ Jt(Array));
function dn(e) {
  e === void 0 && (e = []);
  var t = [];
  return e.forEach(function(n) {
    Array.isArray(n) ? t.push.apply(t, dn(n)) : t.push(n);
  }), t;
}
function Ao(e) {
  for (var t = [], n = 0; n < e.length; n += 1)
    t.indexOf(e[n]) === -1 && t.push(e[n]);
  return t;
}
function Lo(e) {
  return e.toLowerCase().replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function Mo(e, t) {
  if (typeof e != "string")
    return [e];
  for (var n = [], s = t.querySelectorAll(e), r = 0; r < s.length; r += 1)
    n.push(s[r]);
  return n;
}
function j(e, t) {
  var n = Ls(), s = cn(), r = [];
  if (!t && e instanceof Le)
    return e;
  if (!e)
    return new Le(r);
  if (typeof e == "string") {
    var o = e.trim();
    if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
      var a = "div";
      o.indexOf("<li") === 0 && (a = "ul"), o.indexOf("<tr") === 0 && (a = "tbody"), (o.indexOf("<td") === 0 || o.indexOf("<th") === 0) && (a = "tr"), o.indexOf("<tbody") === 0 && (a = "table"), o.indexOf("<option") === 0 && (a = "select");
      var i = s.createElement(a);
      i.innerHTML = o;
      for (var l = 0; l < i.childNodes.length; l += 1)
        r.push(i.childNodes[l]);
    } else
      r = Mo(e.trim(), t || s);
  } else if (e.nodeType || e === n || e === s)
    r.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof Le)
      return e;
    r = e;
  }
  return new Le(Ao(r));
}
j.fn = Le.prototype;
function Mn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = dn(t.map(function(r) {
    return r.split(" ");
  }));
  return this.forEach(function(r) {
    var o;
    (o = r.classList).add.apply(o, s);
  }), this;
}
function jn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = dn(t.map(function(r) {
    return r.split(" ");
  }));
  return this.forEach(function(r) {
    var o;
    (o = r.classList).remove.apply(o, s);
  }), this;
}
function Fn(e, t) {
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
function Hn() {
  var e = this[0];
  if (e) {
    var t = {};
    if (e.dataset)
      for (var n in e.dataset)
        t[n] = e.dataset[n];
    else
      for (var s = 0; s < e.attributes.length; s += 1) {
        var r = e.attributes[s];
        r.name.indexOf("data-") >= 0 && (t[Lo(r.name.split("data-")[1])] = r.value);
      }
    for (var o in t)
      t[o] === "false" ? t[o] = !1 : t[o] === "true" ? t[o] = !0 : parseFloat(t[o]) === t[o] * 1 && (t[o] *= 1);
    return t;
  }
}
function Un(e) {
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
function Bn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = t[0], r = t[1], o = t[2], a = t[3];
  typeof t[1] == "function" && (s = t[0], o = t[1], a = t[2], r = void 0), a || (a = !1);
  function i(d) {
    var E = d.target;
    if (E) {
      var k = d.target.dom7EventData || [];
      if (k.indexOf(d) < 0 && k.unshift(d), j(E).is(r))
        o.apply(E, k);
      else
        for (var S = j(E).parents(), b = 0; b < S.length; b += 1)
          j(S[b]).is(r) && o.apply(S[b], k);
    }
  }
  function l(d) {
    var E = d && d.target ? d.target.dom7EventData || [] : [];
    E.indexOf(d) < 0 && E.unshift(d), o.apply(this, E);
  }
  for (var u = s.split(" "), f, p = 0; p < this.length; p += 1) {
    var m = this[p];
    if (r)
      for (f = 0; f < u.length; f += 1) {
        var c = u[f];
        m.dom7LiveListeners || (m.dom7LiveListeners = {}), m.dom7LiveListeners[c] || (m.dom7LiveListeners[c] = []), m.dom7LiveListeners[c].push({
          listener: o,
          proxyListener: i
        }), m.addEventListener(c, i, a);
      }
    else
      for (f = 0; f < u.length; f += 1) {
        var y = u[f];
        m.dom7Listeners || (m.dom7Listeners = {}), m.dom7Listeners[y] || (m.dom7Listeners[y] = []), m.dom7Listeners[y].push({
          listener: o,
          proxyListener: l
        }), m.addEventListener(y, l, a);
      }
  }
  return this;
}
function zn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = t[0], r = t[1], o = t[2], a = t[3];
  typeof t[1] == "function" && (s = t[0], o = t[1], a = t[2], r = void 0), a || (a = !1);
  for (var i = s.split(" "), l = 0; l < i.length; l += 1)
    for (var u = i[l], f = 0; f < this.length; f += 1) {
      var p = this[f], m = void 0;
      if (!r && p.dom7Listeners ? m = p.dom7Listeners[u] : r && p.dom7LiveListeners && (m = p.dom7LiveListeners[u]), m && m.length)
        for (var y = m.length - 1; y >= 0; y -= 1) {
          var c = m[y];
          o && c.listener === o || o && c.listener && c.listener.dom7proxy && c.listener.dom7proxy === o ? (p.removeEventListener(u, c.proxyListener, a), m.splice(y, 1)) : o || (p.removeEventListener(u, c.proxyListener, a), m.splice(y, 1));
        }
    }
  return this;
}
function Wn() {
  for (var e = 0; e < this.length; e += 1)
    this[e].style.display = "none";
  return this;
}
function Gn(e) {
  return e ? (this.forEach(function(t, n) {
    e.apply(t, [t, n]);
  }), this) : this;
}
function qn(e) {
  if (typeof e > "u")
    return this[0] ? this[0].innerHTML : null;
  for (var t = 0; t < this.length; t += 1)
    this[t].innerHTML = e;
  return this;
}
function Yn(e) {
  var t = Ls(), n = cn(), s = this[0], r, o;
  if (!s || typeof e > "u")
    return !1;
  if (typeof e == "string") {
    if (s.matches)
      return s.matches(e);
    if (s.webkitMatchesSelector)
      return s.webkitMatchesSelector(e);
    if (s.msMatchesSelector)
      return s.msMatchesSelector(e);
    for (r = j(e), o = 0; o < r.length; o += 1)
      if (r[o] === s)
        return !0;
    return !1;
  }
  if (e === n)
    return s === n;
  if (e === t)
    return s === t;
  if (e.nodeType || e instanceof Le) {
    for (r = e.nodeType ? [e] : e, o = 0; o < r.length; o += 1)
      if (r[o] === s)
        return !0;
    return !1;
  }
  return !1;
}
function Xn() {
  for (var e, t = cn(), n = 0; n < arguments.length; n += 1) {
    e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    for (var s = 0; s < this.length; s += 1)
      if (typeof e == "string") {
        var r = t.createElement("div");
        for (r.innerHTML = e; r.firstChild; )
          this[s].appendChild(r.firstChild);
      } else if (e instanceof Le)
        for (var o = 0; o < e.length; o += 1)
          this[s].appendChild(e[o]);
      else
        this[s].appendChild(e);
  }
  return this;
}
function Kn(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var s = this[n].parentNode; s; )
      e ? j(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
  return j(t);
}
function Jn(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var s = this[n].querySelectorAll(e), r = 0; r < s.length; r += 1)
      t.push(s[r]);
  return j(t);
}
function Qn(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var s = this[n].children, r = 0; r < s.length; r += 1)
      (!e || j(s[r]).is(e)) && t.push(s[r]);
  return j(t);
}
var jo = "resize scroll".split(" ");
function Ms(e) {
  function t() {
    for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)
      s[r] = arguments[r];
    if (typeof s[0] > "u") {
      for (var o = 0; o < this.length; o += 1)
        jo.indexOf(e) < 0 && (e in this[o] ? this[o][e]() : j(this[o]).trigger(e));
      return this;
    }
    return this.on.apply(this, [e].concat(s));
  }
  return t;
}
var Zn = Ms("click"), es = Ms("focus");
Wn && (j.fn.hide = Wn);
Xn && (j.fn.append = Xn);
Zn && (j.fn.click = Zn);
Bn && (j.fn.on = Bn);
zn && (j.fn.off = zn);
es && (j.fn.focus = es);
Fn && (j.fn.attr = Fn);
Un && (j.fn.val = Un);
qn && (j.fn.html = qn);
Hn && (j.fn.dataset = Hn);
Mn && (j.fn.addClass = Mn);
jn && (j.fn.removeClass = jn);
Qn && (j.fn.children = Qn);
Gn && (j.fn.each = Gn);
Jn && (j.fn.find = Jn);
Yn && (j.fn.is = Yn);
Kn && (j.fn.parents = Kn);
const Fd = globalThis.Node, Hd = globalThis.Comment, Ud = globalThis.Element, Bd = globalThis.Text, zd = globalThis.Range, Wd = globalThis.Selection, Gd = globalThis.StaticRange;
let Fo = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function qd(e = "r") {
  return `${e}-${Fo()}`;
}
let Ho = class {
  constructor() {
    W(this, "audio");
    W(this, "src");
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
};
const Ye = new Ho();
function ts(e) {
  const t = Math.floor(e / 60), n = e % 60, s = String(t).padStart(2, "0"), r = String(n).padStart(2, "0");
  return `${s}:${r}`;
}
class Uo {
  constructor(t) {
    W(this, "accept");
    W(this, "dom");
    W(this, "isdestroy", !1);
    W(this, "resolve");
    W(this, "reject");
    this.accept = t, this.dom = null, this.resolve = null, this.reject = null;
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
class ns {
  constructor(t) {
    W(this, "cancelled", !1);
    W(this, "timeoutId", null);
    this.timeoutMilliseconds = t;
  }
  get token() {
    return {
      isCancellationRequested: () => this.cancelled,
      throwIfRequested: () => {
        if (this.cancelled)
          throw new Error("Operation canceled");
      }
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
class Bo {
  constructor(t = 60) {
    W(this, "isStop", !1);
    W(this, "count", _(0));
    W(this, "timeoutId", null);
    this.timeoutSeconds = t;
  }
  clearTimeout() {
    this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  get state() {
    return Y(() => this.count.value);
  }
  start(t) {
    t && (this.timeoutSeconds = t), this.isStop = !1, this.count.value = 0, this.clearTimeout(), this.timeoutId = setInterval(() => {
      !this.isStop && this.count.value < this.timeoutSeconds ? this.count.value++ : this.clearTimeout();
    }, 1e3);
  }
  stop() {
    this.isStop = !0, this.clearTimeout();
  }
}
function zo(e) {
  const { selection: t } = e;
  if (t) {
    const [n, s] = me.edges(t), r = X.range(e, n, s), o = X.string(e, r), a = o.trimEnd();
    if (a !== o) {
      const i = o.length - a.length, l = { ...s, offset: s.offset - i }, u = { ...t, anchor: n, focus: l };
      G.select(e, u);
    }
  }
}
function ss(e, t) {
  X.withoutNormalizing(e, () => {
    const n = X.start(e, t), s = X.end(e, t);
    G.insertText(e, " ", { at: n }), G.insertText(e, " ", {
      at: { path: s.path, offset: s.offset + 1 }
    }), G.select(e, {
      anchor: { path: n.path, offset: n.offset + 1 },
      focus: { path: s.path, offset: s.offset + 1 }
    });
  });
}
function Xe(e, t) {
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
    X.string(e, r) === " " && G.delete(e, { at: r }), X.string(e, o) === " " && G.delete(e, { at: o });
  });
}
const Wo = {
  type: "ssml-audio",
  renderElem: (e, t, n) => t ? Go(e, t, n) : qo(e, n)
};
function Go(e, t, n) {
  const { remark: s, src: r } = e;
  return $("span.ssml-wrapper", [
    $(
      "span.remark",
      {
        props: { contentEditable: !1 },
        style: {
          backgroundColor: "var(--ssml-audio)"
        }
      },
      [
        $("span.iconfont.icon-roundclosefill", {
          on: {
            click: se((o) => {
              o.preventDefault(), Ye.stop(r);
              const a = V.findPath(n, e);
              Xe(n, a), G.unwrapNodes(n, { at: a });
            })
          }
        }),
        $("span.iconfont.icon-play", {
          on: {
            click: se((o) => {
              o.preventDefault(), Ye.play(r);
            })
          }
        }),
        $("span.data-content", { attrs: { "data-content": s } })
      ]
    ),
    $("span.data-content", {
      props: { contentEditable: !1 },
      attrs: { "data-content": "{" },
      style: { color: "var(--ssml-audio)" }
    }),
    $("span", t),
    $("span.data-content", {
      props: { contentEditable: !1 },
      attrs: { "data-content": "}" },
      style: { color: "var(--ssml-audio)" }
    })
  ]);
}
function qo(e, t) {
  const { remark: n, src: s } = e;
  return $(
    "span.ssml-wrapper",
    {
      props: { contentEditable: !1 }
    },
    [
      $(
        "span.remark",
        {
          style: {
            backgroundColor: "var(--ssml-audio)"
          }
        },
        [
          $("span.iconfont.icon-roundclosefill", {
            on: {
              click: se((r) => {
                r.preventDefault(), Ye.stop(s);
                const o = V.findPath(t, e);
                G.delete(t, { at: o });
              })
            }
          }),
          $("span.iconfont.icon-play", {
            on: {
              click: se((r) => {
                r.preventDefault(), Ye.play(s);
              })
            }
          }),
          $("span.data-content", { attrs: { "data-content": n } })
        ]
      ),
      $("span.iconfont.icon-music", {
        style: { color: "var(--ssml-audio)" }
      })
    ]
  );
}
const Yo = {
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
}, Xo = {
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
}, Ko = {
  editorPlugin: co,
  renderElems: [Wo],
  elemsToHtml: [Yo],
  parseElemsHtml: [Xo]
}, Jo = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => V.getNodeType(r) === "ssml-break" ? !0 : t(r), s.isVoid = (r) => V.getNodeType(r) === "ssml-break" ? !0 : n(r), s;
}, Qo = {
  type: "ssml-break",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return $(
      "span.ssml-wrapper",
      {
        props: { contentEditable: !1 }
      },
      [
        $(
          "span.remark",
          {
            style: {
              backgroundColor: "var(--ssml-break)"
            }
          },
          [
            $("span.iconfont.icon-roundclosefill", {
              on: {
                click: se((r) => {
                  r.preventDefault();
                  const o = V.findPath(n, e);
                  G.delete(n, { at: o });
                })
              }
            }),
            $("span.data-content", { attrs: { "data-content": s } })
          ]
        ),
        $("span.iconfont.icon-tingdun", {
          style: { color: "var(--ssml-break)" }
        })
      ]
    );
  }
}, Zo = {
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
}, ea = {
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
}, ta = {
  editorPlugin: Jo,
  renderElems: [Qo],
  elemsToHtml: [Zo],
  parseElemsHtml: [ea]
}, na = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => V.getNodeType(r) === "ssml-emphasis" ? !0 : t(r), s.isVoid = (r) => V.getNodeType(r) === "ssml-emphasis" ? !1 : n(r), s;
}, sa = {
  type: "ssml-emphasis",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return $("span.ssml-wrapper", [
      $(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-emphasis)"
          }
        },
        [
          $("span.iconfont.icon-roundclosefill", {
            on: {
              click: se((r) => {
                r.preventDefault();
                const o = V.findPath(n, e);
                G.unwrapNodes(n, { at: o });
              })
            }
          }),
          $("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      $("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-emphasis)" }
      }),
      $("span", t),
      $("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-emphasis)" }
      })
    ]);
  }
}, ra = {
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
}, oa = {
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
}, aa = {
  editorPlugin: na,
  renderElems: [sa],
  elemsToHtml: [ra],
  parseElemsHtml: [oa]
}, ia = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => V.getNodeType(r) === "ssml-mstts:express-as" ? !0 : t(r), s.isVoid = (r) => V.getNodeType(r) === "ssml-mstts:express-as" ? !1 : n(r), s;
}, la = {
  type: "ssml-mstts:express-as",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return $("span.ssml-wrapper", [
      $(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-mstts--express-as)"
          }
        },
        [
          $("span.iconfont.icon-roundclosefill", {
            on: {
              click: se((r) => {
                r.preventDefault();
                const o = V.findPath(n, e);
                G.unwrapNodes(n, { at: o });
              })
            }
          }),
          $("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      $("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-mstts--express-as)" }
      }),
      $("span", t),
      $("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-mstts--express-as)" }
      })
    ]);
  }
}, ua = {
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
}, ca = {
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
}, da = {
  editorPlugin: ia,
  renderElems: [la],
  elemsToHtml: [ua],
  parseElemsHtml: [ca]
}, fa = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => V.getNodeType(r) === "ssml-p" ? !0 : t(r), s.isVoid = (r) => V.getNodeType(r) === "ssml-p" ? !1 : n(r), s;
}, pa = {
  type: "ssml-p",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return $("span.ssml-wrapper", [
      $(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-p)"
          }
        },
        [
          $("span.iconfont.icon-roundclosefill", {
            on: {
              click: se((r) => {
                r.preventDefault();
                const o = V.findPath(n, e);
                G.unwrapNodes(n, { at: o });
              })
            }
          }),
          $("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      $("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-p)" }
      }),
      $("span", t),
      $("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-p)" }
      })
    ]);
  }
}, ma = {
  type: "ssml-p",
  elemToHtml: (e, t) => {
    const { remark: n } = e;
    return `<span
          data-w-e-type="ssml-p"
          data-w-e-is-inline
          data-ow-remark="${n}"
        >${t}</span>`;
  }
}, va = {
  selector: 'span[data-w-e-type="ssml-p"]',
  parseElemHtml: (e, t) => ({
    type: "ssml-p",
    remark: e.getAttribute("data-ow-remark") || "",
    children: t
  })
}, ha = {
  editorPlugin: fa,
  renderElems: [pa],
  elemsToHtml: [ma],
  parseElemsHtml: [va]
}, ya = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => V.getNodeType(r) === "ssml-phoneme" ? !0 : t(r), s.isVoid = (r) => V.getNodeType(r) === "ssml-phoneme" ? !1 : n(r), s;
}, ga = {
  type: "ssml-phoneme",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return $("span.ssml-wrapper", [
      $(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-phoneme)"
          }
        },
        [
          $("span.iconfont.icon-roundclosefill", {
            on: {
              click: se((r) => {
                r.preventDefault();
                const o = V.findPath(n, e);
                Xe(n, o), G.unwrapNodes(n, { at: o });
              })
            }
          }),
          $("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      $("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-phoneme)" }
      }),
      $("span", t),
      $("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-phoneme)" }
      })
    ]);
  }
}, ba = {
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
}, _a = {
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
}, wa = {
  editorPlugin: ya,
  renderElems: [ga],
  elemsToHtml: [ba],
  parseElemsHtml: [_a]
}, xa = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => V.getNodeType(r) === "ssml-prosody" ? !0 : t(r), s.isVoid = (r) => V.getNodeType(r) === "ssml-prosody" ? !1 : n(r), s;
}, Ea = {
  type: "ssml-prosody",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return $("span.ssml-wrapper", [
      $(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-prosody)"
          }
        },
        [
          $("span.iconfont.icon-roundclosefill", {
            on: {
              click: se((r) => {
                r.preventDefault();
                const o = V.findPath(n, e);
                Xe(n, o), G.unwrapNodes(n, { at: o });
              })
            }
          }),
          $("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      $("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-prosody)" }
      }),
      $("span", t),
      $("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-prosody)" }
      })
    ]);
  }
}, ka = {
  type: "ssml-prosody",
  elemToHtml: (e, t) => {
    const { remark: n, contour: s, pitch: r, range: o, rate: a, volume: i } = e;
    return `<span
          data-w-e-type="ssml-prosody"
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-contour="${s ?? ""}"
          data-ow-pitch="${r ?? ""}"
          data-ow-range="${o ?? ""}"
          data-ow-rate="${a ?? ""}"
          data-ow-volume="${i ?? ""}"
        >${t}</span>`;
  }
}, $a = {
  selector: 'span[data-w-e-type="ssml-prosody"]',
  parseElemHtml: (e, t) => {
    const n = e.getAttribute("data-ow-remark") || "", s = e.getAttribute("data-ow-contour") || "", r = e.getAttribute("data-ow-pitch ") || "", o = e.getAttribute("data-ow-range") || "", a = e.getAttribute("data-ow-rate") || void 0, i = e.getAttribute("data-ow-volume") || "";
    return {
      type: "ssml-prosody",
      remark: n,
      contour: s,
      pitch: r,
      range: o,
      rate: a,
      volume: i,
      children: t
    };
  }
}, Sa = {
  editorPlugin: xa,
  renderElems: [Ea],
  elemsToHtml: [ka],
  parseElemsHtml: [$a]
}, Ca = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => V.getNodeType(r) === "ssml-s" ? !0 : t(r), s.isVoid = (r) => V.getNodeType(r) === "ssml-s" ? !1 : n(r), s;
}, Ta = {
  type: "ssml-s",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return $("span.ssml-wrapper", [
      $(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-s)"
          }
        },
        [
          $("span.iconfont.icon-roundclosefill", {
            on: {
              click: se((r) => {
                r.preventDefault();
                const o = V.findPath(n, e);
                G.unwrapNodes(n, { at: o });
              })
            }
          }),
          $("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      $("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-s)" }
      }),
      $("span", t),
      $("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-s)" }
      })
    ]);
  }
}, Oa = {
  type: "ssml-s",
  elemToHtml: (e, t) => {
    const { remark: n } = e;
    return `<span
          data-w-e-type="ssml-s"
          data-w-e-is-inline
          data-ow-remark="${n}"
        >${t}</span>`;
  }
}, Ra = {
  selector: 'span[data-w-e-type="ssml-s"]',
  parseElemHtml: (e, t) => ({
    type: "ssml-s",
    remark: e.getAttribute("data-ow-remark") || "",
    children: t
  })
}, Pa = {
  editorPlugin: Ca,
  renderElems: [Ta],
  elemsToHtml: [Oa],
  parseElemsHtml: [Ra]
}, Da = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => V.getNodeType(r) === "ssml-say-as" ? !0 : t(r), s.isVoid = (r) => V.getNodeType(r) === "ssml-say-as" ? !1 : n(r), s;
}, Na = {
  type: "ssml-say-as",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return $("span.ssml-wrapper", [
      $(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-say-as)"
          }
        },
        [
          $("span.iconfont.icon-roundclosefill", {
            on: {
              click: se((r) => {
                r.preventDefault();
                const o = V.findPath(n, e);
                Xe(n, o), G.unwrapNodes(n, { at: o });
              })
            }
          }),
          $("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      $("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-say-as)" }
      }),
      $("span", t),
      $("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-say-as)" }
      })
    ]);
  }
}, Ia = {
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
}, Va = {
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
}, Aa = {
  editorPlugin: Da,
  renderElems: [Na],
  elemsToHtml: [Ia],
  parseElemsHtml: [Va]
}, La = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => V.getNodeType(r) === "ssml-sub" ? !0 : t(r), s.isVoid = (r) => V.getNodeType(r) === "ssml-sub" ? !1 : n(r), s;
}, Ma = {
  type: "ssml-sub",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return $("span.ssml-wrapper", [
      $(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-sub)"
          }
        },
        [
          $("span.iconfont.icon-roundclosefill", {
            on: {
              click: se((r) => {
                r.preventDefault();
                const o = V.findPath(n, e);
                Xe(n, o), G.unwrapNodes(n, { at: o });
              })
            }
          }),
          $("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      $("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-sub)" }
      }),
      $("span", t),
      $("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-sub)" }
      })
    ]);
  }
}, ja = {
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
}, Fa = {
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
}, Ha = {
  editorPlugin: La,
  renderElems: [Ma],
  elemsToHtml: [ja],
  parseElemsHtml: [Fa]
}, Ua = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => V.getNodeType(r) === "ssml-voice" ? !0 : t(r), s.isVoid = (r) => V.getNodeType(r) === "ssml-voice" ? !1 : n(r), s;
}, Ba = {
  type: "ssml-voice",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return $("span.ssml-wrapper", [
      $(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-voice)"
          }
        },
        [
          $("span.iconfont.icon-roundclosefill", {
            on: {
              click: se((r) => {
                r.preventDefault();
                const o = V.findPath(n, e);
                G.unwrapNodes(n, { at: o });
              })
            }
          }),
          $("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      $("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-voice)" }
      }),
      $("span", t),
      $("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-voice)" }
      })
    ]);
  }
}, za = {
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
}, Wa = {
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
}, Ga = {
  editorPlugin: Ua,
  renderElems: [Ba],
  elemsToHtml: [za],
  parseElemsHtml: [Wa]
}, qa = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => V.getNodeType(r) === "custom-management" ? !0 : t(r), s.isVoid = (r) => V.getNodeType(r) === "custom-management" ? !1 : n(r), s;
}, Ya = "wangeditor-error", Xa = "ssml-element-click", z = {
  ERROR: Ya,
  SSML_ELEMENT_CLICK: Xa
}, Ka = "emitter-error", Ja = "emitter-view-click", Qa = "emitter-view-keydown", Za = "emitter-editor-created", ge = { ERROR: Ka, VIEW_CLICK: Ja, VIEW_KEYDOWN: Qa, EDITOR_CREATED: Za }, ei = {
  type: "custom-management",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return $("span.ssml-wrapper", [
      $(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--custom-management)"
          },
          on: {
            mousedown: (r) => r.preventDefault(),
            click: se((r) => {
              r.preventDefault(), n.select(V.findPath(n, e)), n.emit(z.SSML_ELEMENT_CLICK, n, e);
            })
          }
        },
        [
          $("span.iconfont.icon-roundclosefill", {
            on: {
              click: se((r) => {
                r.preventDefault();
                const o = V.findPath(n, e);
                Xe(n, o), G.unwrapNodes(n, { at: o });
              })
            }
          }),
          $("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      $("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{{" },
        style: { color: "var(--custom-management)" }
      }),
      $("span", t),
      $("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}}" },
        style: { color: "var(--custom-management)" }
      })
    ]);
  }
}, ti = {
  type: "custom-management",
  elemToHtml: (e, t) => {
    const { remark: n, style: s, role: r, name: o, pitch: a, rate: i, custom: l } = e;
    return `<span
          data-w-e-type="custom-management"
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-style="${s}"
          data-ow-name="${o}"
          data-ow-role="${r}"
          data-ow-pitch="${a}"
          data-ow-rate="${i}"
          data-ow-custom="${JSON.stringify(l)}"
        >${t}</span>`;
  }
}, ni = {
  selector: 'span[data-w-e-type="custom-management"]',
  parseElemHtml: (e, t) => {
    const n = e.getAttribute("data-ow-remark") || "", s = e.getAttribute("data-ow-name") || "", r = e.getAttribute("data-ow-role") || "", o = e.getAttribute("data-ow-style") || "", a = e.getAttribute("data-ow-pitch") || "", i = e.getAttribute("data-ow-rate") || "", l = e.getAttribute("data-ow-custom") || "{}";
    return {
      type: "custom-management",
      remark: n,
      name: s,
      role: r,
      style: o,
      pitch: a,
      rate: i,
      custom: JSON.parse(l),
      children: t
    };
  }
}, si = {
  editorPlugin: qa,
  renderElems: [ei],
  elemsToHtml: [ti],
  parseElemsHtml: [ni]
}, ri = (e) => {
  const {
    deleteBackward: t,
    deleteForward: n,
    insertBreak: s,
    apply: r,
    normalizeNode: o,
    insertText: a,
    insertData: i,
    setFragmentData: l,
    insertNode: u
  } = e, f = e;
  f.deleteBackward = (m) => {
    t(m);
  }, f.deleteForward = (m) => {
    n(m);
  }, f.insertBreak = () => {
    s();
  }, f.normalizeNode = (m) => {
    o(m);
  }, f.apply = (m) => {
    r(m);
  }, f.insertData = (m) => {
    if (m.types.includes("application/x-slate-fragment"))
      return i(m);
    {
      const y = new DataTransfer();
      return y.setData("text/plain", m.getData("text/plain").trim()), i(y);
    }
  }, f.setFragmentData = (m) => {
    l(m);
    const y = m.getData("text/plain").replaceAll(/[\s]/gi, "");
    m.setData("text/plain", y);
  }, f.insertText = (m) => {
    a(m);
  };
  const p = [
    "ssml-prosody",
    "ssml-sub",
    "custom-management",
    "ssml-phoneme",
    "ssml-say-as"
  ];
  return f.insertNode = (m) => {
    const y = V.getNodeType(m);
    return p.includes(y) ? (e.selection && ss(e, e.selection), G.insertNodes(e, m)) : y === "ssml-audio" && sn.string(m) ? (e.selection && ss(e, e.selection), G.insertNodes(e, m)) : X.isVoid(e, m) ? (u(m), e.move(1)) : u(m);
  }, f;
};
const oi = {
  install() {
    ue.registerModule(Ko), ue.registerModule(ta), ue.registerModule(aa), ue.registerModule(da), ue.registerModule(ha), ue.registerModule(wa), ue.registerModule(Sa), ue.registerModule(Pa), ue.registerModule(Aa), ue.registerModule(Ha), ue.registerModule(Ga), ue.registerModule(si), ue.registerPlugin(ri);
  }
}, Fe = Ct("--editor-ssml", () => {
  const e = Qe({
    type: "ssml-speak",
    version: "1.0",
    xmlLang: "zh-CN",
    xmlns: "http://www.w3.org/2001/10/synthesis",
    "xmlns:mstts": "http://www.w3.org/2001/mstts",
    "xmlns:emo": "http://www.w3.org/2009/10/emotionml",
    remark: "",
    children: []
  }), t = Qe({
    name: "zh-CN-XiaomoNeural",
    type: "ssml-voice",
    remark: "Xiaomo-晓墨",
    effect: "",
    children: []
  }), n = Qe({
    type: "ssml-mstts:backgroundaudio",
    src: "",
    remark: "",
    children: []
  }), s = Qe({
    type: "ssml-mstts:express-as",
    style: "",
    role: "",
    remark: "",
    children: []
  }), r = Qe({
    type: "ssml-prosody",
    remark: "",
    children: []
  });
  return { rootSpeak: e, rootVoice: t, rootBackgroundaudio: n, rootExpressAs: s, rootProsody: r };
});
function Xd() {
  return { label: "", value: "" };
}
function ai() {
  return {
    id: "",
    category: "",
    avatar: "",
    isFree: !1,
    isStar: !1,
    isSupper24K: !1,
    roles: [],
    styles: [],
    name: "",
    displayName: ""
  };
}
function fn() {
  return {
    word: "",
    topFlag: "",
    category: "",
    gender: "",
    tag: ""
  };
}
class js {
  constructor() {
    W(this, "audio");
    W(this, "isPlaying", _(!1));
    W(this, "isLoading", _(!1));
    W(this, "loadResolve");
    W(this, "loadReject");
    this.audio = new Audio(), this.audio.addEventListener("canplaythrough", () => {
      var t;
      this.isLoading.value = !1, (t = this.loadResolve) == null || t.call(this);
    }), this.audio.addEventListener("play", () => {
      this.isPlaying.value = !0;
    }), this.audio.addEventListener("pause", () => {
      this.isPlaying.value = !1;
    }), this.audio.addEventListener("error", () => {
      var t;
      this.isLoading.value = !1, this.isPlaying.value = !1, (t = this.loadReject) == null || t.call(this);
    });
  }
  load(t) {
    return this.pause(), this.isPlaying.value = !1, this.isLoading.value = !0, this.audio.src = t, this.audio.load(), new Promise((n, s) => {
      this.loadResolve = n, this.loadReject = s;
    });
  }
  play() {
    this.audio.play();
  }
  pause() {
    this.audio.pause();
  }
  togglePlayPause() {
    this.isPlaying.value ? this.pause() : this.play();
  }
  get playState() {
    return Y(() => this.isPlaying.value ? "playing" : "paused");
  }
  get loadState() {
    return Y(() => this.isLoading.value ? "loading" : "complete");
  }
}
const Tt = Ct("--editor-try-play", () => {
  const e = Fe(), t = q(new js()), n = _(ai()), s = Y(() => n.value), r = Y(() => t.value);
  return { speaker: s, setSpeaker: (a) => {
    n.value = a, e.rootVoice.name = a.name;
  }, audioPlayer: r };
}), ii = () => [
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
], li = () => [
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
function ui(e) {
  return `${(0.05 * e * 100).toFixed(0)}%`;
}
function ci(e) {
  return `${((e - 1) * 100).toFixed(0)}%`;
}
function di() {
  return {
    category: "",
    name: "",
    role: "",
    style: "",
    speed: "1.0",
    pitch: "0"
  };
}
const Fs = Ct("--editor-management-menu", () => ({ contentData: ht(di()) })), fi = { class: "bar-button-icon" }, pi = {
  class: "fw-normal",
  style: { "font-size": "0.85rem" }
}, mi = /* @__PURE__ */ A({
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
        const { editor: r } = re();
        r && t("click", r);
      }
    };
    return (r, o) => (C(), D("div", {
      class: fe(["bar-button px-2 py-1", { disabled: r.disabled }]),
      onClick: s,
      onMousedown: o[0] || (o[0] = ne(() => {
      }, ["prevent"]))
    }, [
      h("div", fi, [
        h("span", {
          class: fe(["fs-3 iconfont-moyin", [`moyin-icon_${r.icon}`]])
        }, null, 2)
      ]),
      h("div", pi, H(r.text), 1)
    ], 34));
  }
});
const le = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, oe = /* @__PURE__ */ le(mi, [["__scopeId", "data-v-2da9a7ca"]]);
const pn = /* @__PURE__ */ A({
  __name: "bar-input",
  props: {
    type: {}
  },
  emits: ["submit"],
  setup(e, { expose: t, emit: n }) {
    const s = _(""), r = _();
    function o() {
      r.value.focus();
    }
    function a() {
      n("submit", s.value), s.value = "";
    }
    return t({
      focus: o
    }), (i, l) => (C(), K(v(kt), {
      onSubmit: ne(a, ["prevent"])
    }, {
      default: N(() => [
        g(v($t), {
          type: i.type,
          ref_key: "inputRef",
          ref: r,
          modelValue: s.value,
          "onUpdate:modelValue": l[0] || (l[0] = (u) => s.value = u)
        }, null, 8, ["type", "modelValue"])
      ]),
      _: 1
    }, 8, ["onSubmit"]));
  }
});
const vi = /* @__PURE__ */ A({
  __name: "bar-popover",
  props: {
    visible: { type: Boolean },
    trigger: {},
    hideAfter: {},
    width: {}
  },
  emits: ["update:visible"],
  setup(e) {
    return (t, n) => (C(), K(v(Re), {
      hideAfter: t.hideAfter,
      width: t.width,
      visible: t.visible,
      trigger: t.trigger,
      "onUpdate:visible": n[0] || (n[0] = (s) => t.$emit("update:visible", s))
    }, {
      reference: N(() => [
        Se(t.$slots, "reference")
      ]),
      default: N(() => [
        Se(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["hideAfter", "width", "visible", "trigger"]));
  }
});
function Ot(e) {
  return vs() ? (hs(e), !0) : !1;
}
function ye(e) {
  return typeof e == "function" ? e() : v(e);
}
const Hs = typeof window < "u" && typeof document < "u", hi = (e) => e != null, yi = Object.prototype.toString, gi = (e) => yi.call(e) === "[object Object]", mt = () => {
};
function bi(e, t = {}) {
  if (!Me(e))
    return Wt(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const s in e.value)
    n[s] = br(() => ({
      get() {
        return e.value[s];
      },
      set(r) {
        var o;
        if ((o = ye(t.replaceRef)) != null ? o : !0)
          if (Array.isArray(e.value)) {
            const i = [...e.value];
            i[s] = r, e.value = i;
          } else {
            const i = { ...e.value, [s]: r };
            Object.setPrototypeOf(i, Object.getPrototypeOf(e.value)), e.value = i;
          }
        else
          e.value[s] = r;
      }
    }));
  return n;
}
function Us(e, t = !0) {
  tn() ? pe(e) : t ? e() : zt(e);
}
function Ee(e) {
  var t;
  const n = ye(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Ne = Hs ? window : void 0;
function qe(...e) {
  let t, n, s, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, r] = e, t = Ne) : [t, n, s, r] = e, !t)
    return mt;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const o = [], a = () => {
    o.forEach((f) => f()), o.length = 0;
  }, i = (f, p, m, y) => (f.addEventListener(p, m, y), () => f.removeEventListener(p, m, y)), l = ee(
    () => [Ee(t), ye(r)],
    ([f, p]) => {
      if (a(), !f)
        return;
      const m = gi(p) ? { ...p } : p;
      o.push(
        ...n.flatMap((y) => s.map((c) => i(f, y, c, m)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    l(), a();
  };
  return Ot(u), u;
}
function _i() {
  const e = _(!1);
  return tn() && pe(() => {
    e.value = !0;
  }), e;
}
function mn(e) {
  const t = _i();
  return Y(() => (t.value, !!e()));
}
function wi(e, t = {}) {
  const { window: n = Ne } = t, s = mn(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let r;
  const o = _(!1), a = (u) => {
    o.value = u.matches;
  }, i = () => {
    r && ("removeEventListener" in r ? r.removeEventListener("change", a) : r.removeListener(a));
  }, l = _r(() => {
    s.value && (i(), r = n.matchMedia(ye(e)), "addEventListener" in r ? r.addEventListener("change", a) : r.addListener(a), o.value = r.matches);
  });
  return Ot(() => {
    l(), i(), r = void 0;
  }), o;
}
function vn(e, t = {}) {
  var n, s;
  const {
    pointerTypes: r,
    preventDefault: o,
    stopPropagation: a,
    exact: i,
    onMove: l,
    onEnd: u,
    onStart: f,
    initialValue: p,
    axis: m = "both",
    draggingElement: y = Ne,
    containerElement: c,
    handle: d = e
  } = t, E = _(
    (n = ye(p)) != null ? n : { x: 0, y: 0 }
  ), k = _(), S = (w) => r ? r.includes(w.pointerType) : !0, b = (w) => {
    ye(o) && w.preventDefault(), ye(a) && w.stopPropagation();
  }, x = (w) => {
    var L;
    if (!S(w) || ye(i) && w.target !== ye(e))
      return;
    const T = ((L = ye(c)) != null ? L : ye(e)).getBoundingClientRect(), O = {
      x: w.clientX - T.left,
      y: w.clientY - T.top
    };
    (f == null ? void 0 : f(O, w)) !== !1 && (k.value = O, b(w));
  }, R = (w) => {
    if (!S(w) || !k.value)
      return;
    let { x: L, y: F } = E.value;
    (m === "x" || m === "both") && (L = w.clientX - k.value.x), (m === "y" || m === "both") && (F = w.clientY - k.value.y), E.value = {
      x: L,
      y: F
    }, l == null || l(E.value, w), b(w);
  }, P = (w) => {
    S(w) && k.value && (k.value = void 0, u == null || u(E.value, w), b(w));
  };
  if (Hs) {
    const w = { capture: (s = t.capture) != null ? s : !0 };
    qe(d, "pointerdown", x, w), qe(y, "pointermove", R, w), qe(y, "pointerup", P, w);
  }
  return {
    ...bi(E),
    position: E,
    isDragging: Y(() => !!k.value),
    style: Y(
      () => `left:${E.value.x}px;top:${E.value.y}px;`
    )
  };
}
function Bs(e, t, n = {}) {
  const { window: s = Ne, ...r } = n;
  let o;
  const a = mn(() => s && "ResizeObserver" in s), i = () => {
    o && (o.disconnect(), o = void 0);
  }, l = Y(
    () => Array.isArray(e) ? e.map((p) => Ee(p)) : [Ee(e)]
  ), u = ee(
    l,
    (p) => {
      if (i(), a.value && s) {
        o = new ResizeObserver(t);
        for (const m of p)
          m && o.observe(m, r);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), f = () => {
    i(), u();
  };
  return Ot(f), {
    isSupported: a,
    stop: f
  };
}
function ot(e, t = {}) {
  const {
    reset: n = !0,
    windowResize: s = !0,
    windowScroll: r = !0,
    immediate: o = !0
  } = t, a = _(0), i = _(0), l = _(0), u = _(0), f = _(0), p = _(0), m = _(0), y = _(0);
  function c() {
    const d = Ee(e);
    if (!d) {
      n && (a.value = 0, i.value = 0, l.value = 0, u.value = 0, f.value = 0, p.value = 0, m.value = 0, y.value = 0);
      return;
    }
    const E = d.getBoundingClientRect();
    a.value = E.height, i.value = E.bottom, l.value = E.left, u.value = E.right, f.value = E.top, p.value = E.width, m.value = E.x, y.value = E.y;
  }
  return Bs(e, c), ee(() => Ee(e), (d) => !d && c()), r && qe("scroll", c, { capture: !0, passive: !0 }), s && qe("resize", c, { passive: !0 }), Us(() => {
    o && c();
  }), {
    height: a,
    bottom: i,
    left: l,
    right: u,
    top: f,
    width: p,
    x: m,
    y,
    update: c
  };
}
function xi(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: s = Ne, box: r = "content-box" } = n, o = Y(() => {
    var l, u;
    return (u = (l = Ee(e)) == null ? void 0 : l.namespaceURI) == null ? void 0 : u.includes("svg");
  }), a = _(t.width), i = _(t.height);
  return Bs(
    e,
    ([l]) => {
      const u = r === "border-box" ? l.borderBoxSize : r === "content-box" ? l.contentBoxSize : l.devicePixelContentBoxSize;
      if (s && o.value) {
        const f = Ee(e);
        if (f) {
          const p = s.getComputedStyle(f);
          a.value = Number.parseFloat(p.width), i.value = Number.parseFloat(p.height);
        }
      } else if (u) {
        const f = Array.isArray(u) ? u : [u];
        a.value = f.reduce((p, { inlineSize: m }) => p + m, 0), i.value = f.reduce((p, { blockSize: m }) => p + m, 0);
      } else
        a.value = l.contentRect.width, i.value = l.contentRect.height;
    },
    n
  ), ee(
    () => Ee(e),
    (l) => {
      a.value = l ? t.width : 0, i.value = l ? t.height : 0;
    }
  ), {
    width: a,
    height: i
  };
}
function Ei(e, t, n = {}) {
  const {
    root: s,
    rootMargin: r = "0px",
    threshold: o = 0.1,
    window: a = Ne,
    immediate: i = !0
  } = n, l = mn(() => a && "IntersectionObserver" in a), u = Y(() => {
    const c = ye(e);
    return (Array.isArray(c) ? c : [c]).map(Ee).filter(hi);
  });
  let f = mt;
  const p = _(i), m = l.value ? ee(
    () => [u.value, Ee(s), p.value],
    ([c, d]) => {
      if (f(), !p.value || !c.length)
        return;
      const E = new IntersectionObserver(
        t,
        {
          root: Ee(d),
          rootMargin: r,
          threshold: o
        }
      );
      c.forEach((k) => k && E.observe(k)), f = () => {
        E.disconnect(), f = mt;
      };
    },
    { immediate: i, flush: "post" }
  ) : mt, y = () => {
    f(), m(), p.value = !1;
  };
  return Ot(y), {
    isSupported: l,
    isActive: p,
    pause() {
      f(), p.value = !1;
    },
    resume() {
      p.value = !0;
    },
    stop: y
  };
}
function hn(e, { window: t = Ne, scrollTarget: n } = {}) {
  const s = _(!1);
  return Ei(
    e,
    ([{ isIntersecting: r }]) => {
      s.value = r;
    },
    {
      root: n,
      window: t,
      threshold: 0
    }
  ), s;
}
function ki(e = {}) {
  const {
    window: t = Ne,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: s = Number.POSITIVE_INFINITY,
    listenOrientation: r = !0,
    includeScrollbar: o = !0
  } = e, a = _(n), i = _(s), l = () => {
    t && (o ? (a.value = t.innerWidth, i.value = t.innerHeight) : (a.value = t.document.documentElement.clientWidth, i.value = t.document.documentElement.clientHeight));
  };
  if (l(), Us(l), qe("resize", l, { passive: !0 }), r) {
    const u = wi("(orientation: portrait)");
    ee(u, () => l());
  }
  return { width: a, height: i };
}
const $i = { class: "search-content w-100" }, Si = { class: "ps-2 w-75" }, Ci = { class: "menu ps-2" }, Ti = { class: "flex flex-row pt-1" }, Oi = {
  class: "content-list overflow-x-hidden overflow-y-auto py-2",
  style: { height: "250px" }
}, Ri = ["onClick"], Pi = /* @__PURE__ */ h("span", { class: "iconfont icon-play" }, null, -1), Di = { class: "ps-2" }, yn = /* @__PURE__ */ A({
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
    const n = e, s = _(), r = _(""), o = _(""), a = _(""), i = _(""), l = _(n.dataList || []), u = _(n.sceneList || []), f = _(n.styleList || []), p = hn(s);
    ee(p, (d) => {
      d && setTimeout(() => {
        var E;
        (E = s.value) == null || E.focus();
      }, 100);
    }), pe(async () => {
      l.value.length || await m(), u.value.length || (u.value = await n.fetchScene()), f.value.length || (f.value = await n.fetchStyle());
    });
    async function m() {
      l.value = await n.fetchData({
        word: r.value,
        menu: i.value,
        scene: o.value,
        style: a.value
      });
    }
    function y(d) {
      i.value = d, m();
    }
    function c(d) {
      t("submit", d);
    }
    return (d, E) => (C(), D("div", $i, [
      h("div", Si, [
        g(v(kt), {
          onSubmit: ne(m, ["prevent"])
        }, {
          default: N(() => [
            g(v($t), {
              ref_key: "searchInputRef",
              ref: s,
              placeholder: "搜索",
              modelValue: r.value,
              "onUpdate:modelValue": E[0] || (E[0] = (k) => r.value = k),
              "suffix-icon": v(Cr)
            }, null, 8, ["modelValue", "suffix-icon"])
          ]),
          _: 1
        }, 8, ["onSubmit"])
      ]),
      h("div", Ci, [
        g(v(kr), {
          mode: "horizontal",
          "default-active": d.menus.length > 0 ? d.menus[0].value : "",
          onSelect: E[1] || (E[1] = (k) => y(k))
        }, {
          default: N(() => [
            (C(!0), D(Z, null, ie(d.menus, (k, S) => (C(), K(v($r), {
              index: k.value,
              key: S
            }, {
              default: N(() => [
                B(H(k.label), 1)
              ]),
              _: 2
            }, 1032, ["index"]))), 128))
          ]),
          _: 1
        }, 8, ["default-active"])
      ]),
      h("div", Ti, [
        g(v($n), {
          modelValue: o.value,
          "onUpdate:modelValue": E[2] || (E[2] = (k) => o.value = k),
          onChange: m,
          class: "m-1",
          size: "default"
        }, {
          default: N(() => [
            (C(!0), D(Z, null, ie(u.value, (k) => (C(), K(v(Sn), {
              key: k.value,
              label: k.label,
              value: k.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        g(v($n), {
          modelValue: a.value,
          "onUpdate:modelValue": E[3] || (E[3] = (k) => a.value = k),
          onChange: m,
          class: "m-1",
          size: "default"
        }, {
          default: N(() => [
            (C(!0), D(Z, null, ie(f.value, (k) => (C(), K(v(Sn), {
              key: k.value,
              label: k.label,
              value: k.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      h("ul", Oi, [
        (C(!0), D(Z, null, ie(l.value, (k, S) => (C(), D("li", {
          onClick: (b) => c(de(k)),
          class: "content-list-item clickable ps-2 py-2",
          key: S
        }, [
          Pi,
          h("span", Di, H(k.label), 1)
        ], 8, Ri))), 128))
      ])
    ]));
  }
});
const Ni = {}, Ii = { class: "content" };
function Vi(e, t) {
  return C(), D("div", Ii, [
    Se(e.$slots, "default", {}, void 0, !0)
  ]);
}
const zs = /* @__PURE__ */ le(Ni, [["render", Vi], ["__scopeId", "data-v-7beae5b9"]]), Ai = {}, Li = { class: "bar-wrapper-item" };
function Mi(e, t) {
  return C(), D("div", Li, [
    Se(e.$slots, "default")
  ]);
}
const ji = /* @__PURE__ */ le(Ai, [["render", Mi]]), Fi = { class: "bar-wrapper-group" }, Hi = { class: "group-items" }, Ui = /* @__PURE__ */ A({
  __name: "bar-wrapper-group",
  props: {
    divider: {}
  },
  setup(e) {
    return (t, n) => (C(), D("div", Fi, [
      h("div", Hi, [
        Se(t.$slots, "default", {}, void 0, !0)
      ]),
      h("div", {
        class: fe(["divider", [t.divider]])
      }, null, 2)
    ]));
  }
});
const ze = /* @__PURE__ */ le(Ui, [["__scopeId", "data-v-be31f837"]]);
function Bi(e, t) {
  return `left:${e}px;top:${t}px`;
}
function gn(e, t) {
  const { width: n, height: s } = xi(e), { width: r, height: o } = ki(), a = Y(() => ({
    x: r.value - n.value,
    y: o.value - s.value
  }));
  return { style: Y(() => {
    const l = t.value.x, u = t.value.y, f = l < 5 ? 5 : l > a.value.x ? a.value.x - 5 : l, p = u < 5 ? 5 : u > a.value.y ? a.value.y - 5 : u;
    return Bi(f, p);
  }) };
}
var Qt = { exports: {} }, Ws = { exports: {} }, zi = void 0, Gs = function(e) {
  return e !== zi && e !== null;
}, Wi = Gs, Gi = {
  object: !0,
  function: !0,
  undefined: !0
  /* document.all */
}, qi = function(e) {
  return Wi(e) ? hasOwnProperty.call(Gi, typeof e) : !1;
}, Yi = qi, Xi = function(e) {
  if (!Yi(e))
    return !1;
  try {
    return e.constructor ? e.constructor.prototype === e : !1;
  } catch {
    return !1;
  }
}, Ki = Xi, Ji = function(e) {
  if (typeof e != "function" || !hasOwnProperty.call(e, "length"))
    return !1;
  try {
    if (typeof e.length != "number" || typeof e.call != "function" || typeof e.apply != "function")
      return !1;
  } catch {
    return !1;
  }
  return !Ki(e);
}, Qi = Ji, Zi = /^\s*class[\s{/}]/, el = Function.prototype.toString, tl = function(e) {
  return !(!Qi(e) || Zi.test(el.call(e)));
}, nl = function() {
  var e = Object.assign, t;
  return typeof e != "function" ? !1 : (t = { foo: "raz" }, e(t, { bar: "dwa" }, { trzy: "trzy" }), t.foo + t.bar + t.trzy === "razdwatrzy");
}, At, rs;
function sl() {
  return rs || (rs = 1, At = function() {
    try {
      return Object.keys("primitive"), !0;
    } catch {
      return !1;
    }
  }), At;
}
var rl = function() {
}, ol = rl(), bn = function(e) {
  return e !== ol && e !== null;
}, Lt, os;
function al() {
  if (os)
    return Lt;
  os = 1;
  var e = bn, t = Object.keys;
  return Lt = function(n) {
    return t(e(n) ? Object(n) : n);
  }, Lt;
}
var Mt, as;
function il() {
  return as || (as = 1, Mt = sl()() ? Object.keys : al()), Mt;
}
var jt, is;
function ll() {
  if (is)
    return jt;
  is = 1;
  var e = bn;
  return jt = function(t) {
    if (!e(t))
      throw new TypeError("Cannot use null or undefined");
    return t;
  }, jt;
}
var Ft, ls;
function ul() {
  if (ls)
    return Ft;
  ls = 1;
  var e = il(), t = ll(), n = Math.max;
  return Ft = function(s, r) {
    var o, a, i = n(arguments.length, 2), l;
    for (s = Object(t(s)), l = function(u) {
      try {
        s[u] = r[u];
      } catch (f) {
        o || (o = f);
      }
    }, a = 1; a < i; ++a)
      r = arguments[a], e(r).forEach(l);
    if (o !== void 0)
      throw o;
    return s;
  }, Ft;
}
var cl = nl() ? Object.assign : ul(), dl = bn, fl = Array.prototype.forEach, pl = Object.create, ml = function(e, t) {
  var n;
  for (n in e)
    t[n] = e[n];
}, vl = function(e) {
  var t = pl(null);
  return fl.call(arguments, function(n) {
    dl(n) && ml(Object(n), t);
  }), t;
}, Ht = "razdwatrzy", hl = function() {
  return typeof Ht.contains != "function" ? !1 : Ht.contains("dwa") === !0 && Ht.contains("foo") === !1;
}, Ut, us;
function yl() {
  if (us)
    return Ut;
  us = 1;
  var e = String.prototype.indexOf;
  return Ut = function(t) {
    return e.call(this, t, arguments[1]) > -1;
  }, Ut;
}
var gl = hl() ? String.prototype.contains : yl(), vt = Gs, cs = tl, qs = cl, Ys = vl, tt = gl, bl = Ws.exports = function(e, t) {
  var n, s, r, o, a;
  return arguments.length < 2 || typeof e != "string" ? (o = t, t = e, e = null) : o = arguments[2], vt(e) ? (n = tt.call(e, "c"), s = tt.call(e, "e"), r = tt.call(e, "w")) : (n = r = !0, s = !1), a = { value: t, configurable: n, enumerable: s, writable: r }, o ? qs(Ys(o), a) : a;
};
bl.gs = function(e, t, n) {
  var s, r, o, a;
  return typeof e != "string" ? (o = n, n = t, t = e, e = null) : o = arguments[3], vt(t) ? cs(t) ? vt(n) ? cs(n) || (o = n, n = void 0) : n = void 0 : (o = t, t = n = void 0) : t = void 0, vt(e) ? (s = tt.call(e, "c"), r = tt.call(e, "e")) : (s = !0, r = !1), a = { get: t, set: n, configurable: s, enumerable: r }, o ? qs(Ys(o), a) : a;
};
var _l = Ws.exports, wl = function(e) {
  if (typeof e != "function")
    throw new TypeError(e + " is not a function");
  return e;
};
(function(e, t) {
  var n = _l, s = wl, r = Function.prototype.apply, o = Function.prototype.call, a = Object.create, i = Object.defineProperty, l = Object.defineProperties, u = Object.prototype.hasOwnProperty, f = { configurable: !0, enumerable: !1, writable: !0 }, p, m, y, c, d, E, k;
  p = function(S, b) {
    var x;
    return s(b), u.call(this, "__ee__") ? x = this.__ee__ : (x = f.value = a(null), i(this, "__ee__", f), f.value = null), x[S] ? typeof x[S] == "object" ? x[S].push(b) : x[S] = [x[S], b] : x[S] = b, this;
  }, m = function(S, b) {
    var x, R;
    return s(b), R = this, p.call(this, S, x = function() {
      y.call(R, S, x), r.call(b, this, arguments);
    }), x.__eeOnceListener__ = b, this;
  }, y = function(S, b) {
    var x, R, P, w;
    if (s(b), !u.call(this, "__ee__"))
      return this;
    if (x = this.__ee__, !x[S])
      return this;
    if (R = x[S], typeof R == "object")
      for (w = 0; P = R[w]; ++w)
        (P === b || P.__eeOnceListener__ === b) && (R.length === 2 ? x[S] = R[w ? 0 : 1] : R.splice(w, 1));
    else
      (R === b || R.__eeOnceListener__ === b) && delete x[S];
    return this;
  }, c = function(S) {
    var b, x, R, P, w;
    if (u.call(this, "__ee__") && (P = this.__ee__[S], !!P))
      if (typeof P == "object") {
        for (x = arguments.length, w = new Array(x - 1), b = 1; b < x; ++b)
          w[b - 1] = arguments[b];
        for (P = P.slice(), b = 0; R = P[b]; ++b)
          r.call(R, this, w);
      } else
        switch (arguments.length) {
          case 1:
            o.call(P, this);
            break;
          case 2:
            o.call(P, this, arguments[1]);
            break;
          case 3:
            o.call(P, this, arguments[1], arguments[2]);
            break;
          default:
            for (x = arguments.length, w = new Array(x - 1), b = 1; b < x; ++b)
              w[b - 1] = arguments[b];
            r.call(P, this, w);
        }
  }, d = {
    on: p,
    once: m,
    off: y,
    emit: c
  }, E = {
    on: n(p),
    once: n(m),
    off: n(y),
    emit: n(c)
  }, k = l({}, E), e.exports = t = function(S) {
    return S == null ? a(k) : l(Object(S), E);
  }, t.methods = d;
})(Qt, Qt.exports);
var xl = Qt.exports;
const El = /* @__PURE__ */ ln(xl), be = El(), kl = { class: "w-100 d-flex flex-row align-items-center" }, Ke = /* @__PURE__ */ A({
  __name: "drag-box",
  props: {
    visible: { type: Boolean },
    initialValue: {}
  },
  emits: ["update:visible", "close"],
  setup(e, { expose: t, emit: n }) {
    const s = e, r = _(), o = _(), a = _(), { position: i } = vn(o, {
      initialValue: s.initialValue
    }), { style: l } = gn(r, i);
    function u(c) {
      i.value = c;
    }
    t({
      setPosition: u
    }), pe(() => {
      be.on(ge.VIEW_CLICK, f), document.addEventListener("keydown", y);
    }), nn(() => {
      be.off(ge.VIEW_CLICK, f), document.removeEventListener("keydown", y);
    });
    function f(c) {
      p(c) && m();
    }
    function p(c) {
      const d = c.target;
      return !(!r.value || !a.value || a.value.contains(d) || r.value.contains(d));
    }
    function m() {
      n("update:visible", !1), n("close");
    }
    function y(c) {
      c.code === "Escape" && m();
    }
    return (c, d) => (C(), D(Z, null, [
      h("div", {
        ref_key: "referenceRef",
        ref: a,
        onMousedown: d[0] || (d[0] = ne(() => {
        }, ["prevent"]))
      }, [
        Se(c.$slots, "reference")
      ], 544),
      (C(), K(ys, { to: "body" }, [
        Te(h("div", {
          ref_key: "boxRef",
          ref: r,
          class: "demotestname card shadow brag-box user-select-none z-2",
          style: wt([{ position: "fixed" }, v(l)]),
          onMousedown: d[1] || (d[1] = ne(() => {
          }, ["prevent"]))
        }, [
          h("div", kl, [
            h("div", {
              ref_key: "dragRef",
              ref: o,
              class: "w-100",
              style: { height: "40px", cursor: "move" }
            }, null, 512),
            h("span", {
              onClick: m,
              class: "btn iconfont icon-close fs-5"
            })
          ]),
          Se(c.$slots, "default")
        ], 36), [
          [Oe, c.visible]
        ])
      ]))
    ], 64));
  }
}), $l = {
  install(e) {
    e.component("BarButton", oe), e.component("BarInput", pn), e.component("BarPopover", vi), e.component("BarSearch", yn), e.component("BarWrapper", zs), e.component("BarWrapperItem", ji), e.component("BarWrapperGroup", ze), e.component("DragBox", Ke);
  }
};
function Sl(e) {
  return e.replaceAll(/[&]/gi, "&amp;").replaceAll(/[<]/gi, "&lt;").replaceAll(/[>]/gi, "&gt;");
}
function Cl(e, t) {
  return t ? `<audio src="${e.src}">${t}</audio>` : `<audio src="${e.src}"/>`;
}
function Tl(e) {
  return e.time ? `<break time="${e.time}"/>` : e.strength ? `<break strength="${e.strength}"/>` : "<break/>";
}
function Ol(e, t) {
  return e.level ? `<emphasis level="${e.level}">${t}</emphasis>` : `<emphasis>${t}</emphasis>`;
}
function Rl(e, t) {
  if (!e.style)
    return t;
  const n = e.role ? ` role="${e.role}"` : "", s = e.styledegree ? ` styledegree="${e.styledegree}"` : "";
  return `<mstts:express-as style="${e.style}"${n}${s}>${t}</mstts:express-as>`;
}
function Pl(e) {
  if (!e.src)
    return "";
  const t = e.volume ? ` volume="${e.volume}"` : "", n = e.fadein ? ` fadein="${e.fadein}"` : "", s = e.fadeout ? ` fadeout="${e.fadeout}"` : "";
  return `<mstts:backgroundaudio src="${e.src}"${t}${n}${s}/>`;
}
function Dl(e) {
  return !e.attrType || !e.value ? "" : `<mstts:silence type="${e.attrType}" value="${e.value}"/>`;
}
function Nl(e, t) {
  return `<p>${t}</p>`;
}
function Il(e, t) {
  const n = e.alphabet ? `alphabet="${e.alphabet}"` : "";
  return `<phoneme ph="${e.ph}"${n}>${t}</phoneme>`;
}
function Vl(e, t) {
  if (!e.contour && !e.pitch && !e.range && !e.rate && !e.volume)
    return t;
  const n = e.contour ? ` contour="${e.contour}"` : "", s = e.pitch ? ` pitch="${e.pitch}"` : "", r = e.range ? ` range="${e.range}"` : "", o = e.volume ? ` volume="${e.volume}"` : "", a = e.rate ? ` rate="${e.rate}"` : "";
  return `<prosody${n}${s}${r}${o}${a}>${t}</prosody>`;
}
function Al(e, t) {
  const n = e.interpretAs ? ` interpret-as="${e.interpretAs}"` : "", s = e.format ? ` format="${e.format}"` : "", r = e.detail ? ` detail="${e.detail}"` : "";
  return `<say-as${n}${s}${r}>${t}</say-as>`;
}
function Ll(e, t) {
  return `<s>${t}</s>`;
}
function Ml(e, t) {
  return `<sub alias="${e.alias}">${t}</sub>`;
}
function jl(e, t) {
  const n = e.effect ? ` effect="${e.effect}"` : "";
  return `<voice name="${e.name}${n}">${t}</voice>`;
}
function Fl(e, t) {
  return `<speak version="${e.version}" xml:lang="${e.xmlLang}" xmlns="${e.xmlns}" xmlns:mstts="${e["xmlns:mstts"]}" xmlns:emo="${e["xmlns:emo"]}">${t}</speak>`;
}
function Xs(e) {
  if (nt.isText(e))
    return Sl(e.text.trim());
  if (xr.isElement(e)) {
    const t = e.children.map((s) => Xs(s)).join("");
    switch (V.getNodeType(e)) {
      case "paragraph":
        return `<p>${t}</p>`;
      case "ssml-speak":
        return Fl(e, t);
      case "ssml-mstts:backgroundaudio":
        return Pl(e);
      case "ssml-audio":
        return Cl(e, t);
      case "ssml-break":
        return Tl(e);
      case "ssml-emphasis":
        return Ol(e, t);
      case "ssml-mstts:express-as":
        return Rl(e, t);
      case "ssml-p":
        return Nl(e, t);
      case "ssml-phoneme":
        return Il(e, t);
      case "ssml-prosody":
        return Vl(e, t);
      case "ssml-s":
        return Ll(e, t);
      case "ssml-say-as":
        return Al(e, t);
      case "ssml-sub":
        return Ml(e, t);
      case "ssml-voice":
        return jl(e, t);
      case "ssml-mstts:silence":
        return Dl(e);
      default:
        return t;
    }
  }
  return "";
}
function Hl(e, t) {
  const n = { type: "ssml-voice", remark: "", name: t.name, children: [] }, s = Ks(), r = {
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
    const l = o();
    r.children.push(l);
    function u(f) {
      l.children.push(f);
    }
    return { prosody: l, pushNode: u };
  }
  let i;
  for (let l = 0; l < t.children.length; l++) {
    const u = t.children[l];
    if (!(nt.isText(u) && !u.text.trim()))
      if (nt.isText(u)) {
        i ?? (i = a()), i.pushNode(u);
        continue;
      } else if (X.isVoid(e, u)) {
        i = void 0, r.children.push(u);
        continue;
      } else {
        const f = V.findPath(e, u), [p] = X.nodes(e, {
          at: f,
          mode: "lowest",
          voids: !1,
          match: (m) => V.checkNodeType(m, "ssml-prosody")
        });
        if (p) {
          i = void 0, r.children.push(u);
          continue;
        } else
          i ?? (i = a()), i.pushNode(u);
      }
  }
  return n;
}
function Ks() {
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
function Ul() {
  const { rootVoice: e, rootExpressAs: t } = Fe(), n = { ...e, children: [] }, s = Ks(), r = { ...t, children: [] };
  n.children.push(...s), n.children.push(r);
  function o(a) {
    r.children.push(a);
  }
  return { voice: n, pushNode: o };
}
function ds(e) {
  const { rootProsody: t } = Fe(), n = { ...t, children: [] };
  e(n);
  function s(r) {
    n.children.push(r);
  }
  return { prosody: n, pushNode: s };
}
function Bl() {
  return {
    type: "ssml-break",
    time: "200ms",
    children: [{ text: "" }],
    remark: "paragraphBreak"
  };
}
function zl(e) {
  const t = e.children.filter((n) => V.checkNodeType(n, "paragraph")).filter((n) => !!sn.string(n).trim()).map((n, s, r) => {
    const a = n.children;
    return s < r.length - 1 ? a.concat([Bl()]) : a;
  });
  return [].concat(...t);
}
function Wl(e) {
  const t = zl(e), n = [];
  let s, r;
  for (let o = 0; o < t.length; o++) {
    const a = t[o];
    if (!(nt.isText(a) && !a.text.trim())) {
      if (V.checkNodeType(a, "custom-management")) {
        s && (n.push(s.voice), s = void 0, r = void 0), n.push(Hl(e, a));
        continue;
      }
      if (s ?? (s = Ul()), nt.isText(a)) {
        r ?? (r = ds(s.pushNode)), r.pushNode(a);
        continue;
      } else if (X.isVoid(e, a)) {
        r = void 0, s.pushNode(a);
        continue;
      } else {
        const i = V.findPath(e, a), [l] = X.nodes(e, {
          at: i,
          mode: "lowest",
          voids: !1,
          match: (u) => V.checkNodeType(u, "ssml-prosody")
        });
        if (l) {
          r = void 0, s.pushNode(a);
          continue;
        } else {
          r ?? (r = ds(s.pushNode)), r.pushNode(a);
          continue;
        }
      }
    }
  }
  return s && n.push(s.voice), n;
}
function _n() {
  const { editor: e } = re();
  if (!e)
    throw Error("没有找到 editor 对象");
  const { rootSpeak: t, rootBackgroundaudio: n } = Fe(), s = { ...t, children: [] }, r = { ...n };
  return s.children.push(r, ...Wl(e)), Xs(s);
}
const Gl = (e) => (xt("data-v-f485fb08"), e = e(), Et(), e), ql = { class: "play-menu-icon d-flex justify-content-center align-items-center" }, Yl = {
  key: 0,
  class: "fs-3 iconfont-moyin moyin-icon_play"
}, Xl = {
  key: 2,
  class: "iconfont icon-pause"
}, Kl = /* @__PURE__ */ Gl(() => /* @__PURE__ */ h("div", {
  class: "fw-normal",
  style: { "font-size": "0.85rem" }
}, "24K高清音质", -1)), Jl = /* @__PURE__ */ A({
  __name: "play-menu",
  props: {
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = Tt(), { audioPlayer: n } = t, s = n.playState, r = n.loadState, o = re(), { globalEditConfig: a } = o;
    async function i() {
      if (s.value === "playing") {
        n.pause();
        return;
      }
      try {
        const l = _n(), u = await a.tryPlay.play(l);
        await n.load(u.src), n.play();
      } catch {
        n.pause();
      }
    }
    return (l, u) => (C(), D("div", {
      class: fe(["play-menu px-2 py-1", { disabled: l.disabled }]),
      onClick: u[0] || (u[0] = (f) => !l.disabled && i()),
      onMousedown: u[1] || (u[1] = ne(() => {
      }, ["prevent"]))
    }, [
      h("div", ql, [
        v(r) === "complete" && v(s) === "paused" ? (C(), D("span", Yl)) : v(r) === "loading" ? (C(), K(v(rn), {
          key: 1,
          class: "is-loading"
        }, {
          default: N(() => [
            g(v(Tr))
          ]),
          _: 1
        })) : (C(), D("span", Xl))
      ]),
      Kl
    ], 34));
  }
});
const Js = /* @__PURE__ */ le(Jl, [["__scopeId", "data-v-f485fb08"]]);
class _e {
  constructor(t) {
    W(this, "editor");
    this.editor = t;
  }
  getValue() {
    const { selection: t } = this.editor;
    return t == null ? "" : X.string(this.editor, t);
  }
  isDisabled() {
    const { selection: t } = this.editor;
    return t == null ? (this.editor.emit(z.ERROR, "未选中编辑器"), !0) : !1;
  }
}
class Ql extends _e {
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
    if (me.isCollapsed(t))
      return this.editor.emit(z.ERROR, "请框选一个中文字符"), !0;
    const n = this.getValue();
    return n.length != 1 ? (this.editor.emit(z.ERROR, "请框选一个中文字符"), !0) : /^[\u4E00-\u9FA5]$/gi.test(n) ? !1 : (this.editor.emit(z.ERROR, "请框选一个中文字符"), !0);
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
const Qs = /* @__PURE__ */ A({
  setup() {
    const {
      globalEditConfig: e
    } = re(), t = q(), n = _([]), s = _(!1);
    function r() {
      s.value || (s.value = !0);
    }
    function o() {
      s.value && (s.value = !1);
    }
    async function a(i) {
      var u;
      if (t.value ?? (t.value = new Ql(i)), (u = t.value) != null && u.isDisabled())
        return;
      const l = t.value.getValue();
      if (l ? n.value = await e.pinyin.fetchData(l) : n.value = [], n.value.length == 0)
        return i.emit(z.ERROR, "选中的字符没有不是多音字");
      r();
    }
    return () => g(Re, {
      visible: s.value,
      "onUpdate:visible": (i) => s.value = i,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => g(oe, {
        text: "多音字",
        icon: "speaker",
        onClick: a
      }, null),
      default: () => g("div", {
        class: "d-flex flex-column overflow-x-hidden overflow-y-auto",
        style: "max-height: 300px"
      }, [n.value.map(({
        label: i,
        value: l
      }) => g("div", {
        key: l,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          t.value && !t.value.isDisabled() && t.value.exec({
            label: i,
            value: l
          }), o();
        },
        onMousedown: ne(() => {
        }, ["stop", "prevent"])
      }, [i]))])
    });
  }
});
class Zl extends _e {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t ? me.isCollapsed(t) ? (this.editor.emit(z.ERROR, "请框选要连读的词或句子"), !0) : X.string(this.editor, t).length < 2 : !0;
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
const Zs = /* @__PURE__ */ A({
  setup() {
    const e = q();
    function t(n) {
      e.value ?? (e.value = new Zl(n)), !e.value.isDisabled() && e.value.exec();
    }
    return () => g(oe, {
      text: "连读",
      icon: "continuous",
      onClick: t
    }, null);
  }
}), eu = [
  { label: "重音", value: "z" },
  { label: "拖音", value: "t" },
  { label: "重音+拖音", value: "z+t" }
], tu = {
  z: { pitch: "x-high", rate: void 0 },
  t: { pitch: void 0, rate: "medium" },
  "z+t": { pitch: "x-high", rate: "medium" }
};
class nu extends _e {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return !t || t == null ? !0 : me.isCollapsed(t) ? (this.editor.emit(z.ERROR, "请框选词或句子"), !0) : !1;
  }
  exec(t) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const n = this.getValue();
    if (n == null)
      return;
    const { pitch: s, rate: r } = tu[t.value], o = {
      type: "ssml-prosody",
      remark: t.label,
      pitch: s,
      rate: r,
      children: [{ text: n }]
    };
    this.editor.insertNode(o);
  }
}
const er = /* @__PURE__ */ A({
  setup() {
    const e = q(), t = _(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    function r(o) {
      e.value ?? (e.value = new nu(o)), !e.value.isDisabled() && n();
    }
    return () => g(Re, {
      visible: t.value,
      "onUpdate:visible": (o) => t.value = o,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => g(oe, {
        text: "重音",
        icon: "read",
        onClick: r
      }, null),
      default: () => g("div", {
        class: "d-flex flex-column",
        onMousedown: ne(() => {
        }, ["stop", "prevent"])
      }, [eu.map(({
        label: o,
        value: a
      }) => g("div", {
        key: a,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && e.value.exec({
            label: o,
            value: a
          }), s();
        },
        onMousedown: ne(() => {
        }, ["stop", "prevent"])
      }, [o]))])
    });
  }
});
class su extends _e {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    if (!t)
      return !0;
    if (me.isCollapsed(t))
      return this.editor.emit(z.ERROR, "请框选纯数字"), !0;
    const n = X.string(this.editor, t);
    return n.length <= 0 ? !0 : Number.isNaN(Number(n)) ? (this.editor.emit(z.ERROR, "请框选纯数字"), !0) : !1;
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
const ru = [{
  value: "cardinal",
  label: "读数值"
}, {
  value: "characters",
  label: "读数字"
}, {
  value: "telephone",
  label: "读手机号"
}], tr = /* @__PURE__ */ A({
  setup() {
    const e = q(), t = _(!1);
    function n() {
      t.value = !t.value;
    }
    function s(r) {
      e.value ?? (e.value = new su(r)), !e.value.isDisabled() && n();
    }
    return () => g(Re, {
      visible: t.value,
      "onUpdate:visible": (r) => t.value = r,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => g(oe, {
        text: "数字符号",
        icon: "digital",
        onClick: s
      }, null),
      default: () => g("div", {
        class: "d-flex flex-column"
      }, [ru.map(({
        label: r,
        value: o
      }) => g("div", {
        key: o,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && e.value.exec({
            label: r,
            value: o
          }), n();
        },
        onMousedown: ne(() => {
        }, ["stop", "prevent"])
      }, [r]))])
    });
  }
});
class ou extends _e {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t == null ? !0 : me.isCollapsed(t) ? (this.editor.emit(z.ERROR, "请框选要设置别名的词或句子"), !0) : !1;
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
const nr = /* @__PURE__ */ A({
  setup() {
    const e = q(), t = _(), n = _(!1);
    function s() {
      n.value || (n.value = !0);
    }
    function r() {
      n.value && (n.value = !1);
    }
    async function o(i) {
      e.value ?? (e.value = new ou(i)), !e.value.isDisabled() && (s(), t.value.focus());
    }
    function a(i) {
      var l;
      r(), i && ((l = e.value) == null || l.exec({
        value: i,
        label: i
      }));
    }
    return () => g(Re, {
      visible: n.value,
      "onUpdate:visible": (i) => n.value = i,
      trigger: "contextmenu",
      placement: "right-end",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => g(oe, {
        text: "别名",
        icon: "alias",
        onClick: o
      }, null),
      default: () => g(pn, {
        ref: t,
        onSubmit: a
      }, null)
    });
  }
});
class au extends _e {
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
    if (me.isCollapsed(t))
      return this.editor.emit(z.ERROR, "请框选英文单词"), !0;
    const n = X.string(this.editor, t);
    return n.length <= 0 ? !0 : /^[A-Za-z]+$/gi.test(n) ? !1 : (this.editor.emit(z.ERROR, "请框选英文单词"), !0);
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
const sr = /* @__PURE__ */ A({
  setup() {
    const {
      globalEditConfig: e
    } = re(), t = q(), n = _([]), s = _(!1);
    function r() {
      s.value || (s.value = !0);
    }
    function o() {
      s.value && (s.value = !1);
    }
    async function a(i) {
      if (t.value ?? (t.value = new au(i)), zo(i), t.value.isDisabled())
        return;
      const l = t.value.getValue();
      if (l) {
        if (n.value = await e.english.fetchData(l), n.value.length <= 0)
          return i.emit(z.ERROR, "找不到单词的音标");
        r();
      }
    }
    return () => g(Re, {
      visible: s.value,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => g(oe, {
        text: "音标",
        icon: "english",
        onClick: a
      }, null),
      default: () => g("div", {
        class: "d-flex flex-column"
      }, [n.value.map(({
        label: i,
        value: l
      }) => g("div", {
        key: l,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          t.value && !t.value.isDisabled() && t.value.exec({
            label: i,
            value: l
          }), o();
        },
        onMousedown: ne(() => {
        }, ["stop", "prevent"])
      }, [i]))])
    });
  }
});
class iu extends _e {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t == null ? !0 : me.isCollapsed(t) ? (this.editor.emit(z.ERROR, "请框选要变速的句子"), !0) : !1;
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
function M(e) {
  return `${((e - 1) * 100).toFixed(0)}%`;
}
const lu = [
  { value: M(0.5), label: "0.5x" },
  { value: M(0.55), label: "0.55x" },
  { value: M(0.6), label: "0.6x" },
  { value: M(0.65), label: "0.65x" },
  { value: M(0.7), label: "0.7x" },
  { value: M(0.75), label: "0.75x" },
  { value: M(0.8), label: "0.8x" },
  { value: M(0.85), label: "0.85x" },
  { value: M(0.9), label: "0.9x" },
  { value: M(0.95), label: "0.95x" },
  { value: M(1), label: "1x" },
  { value: M(1.05), label: "1.05x" },
  { value: M(1.1), label: "1.1x" },
  { value: M(1.15), label: "1.15x" },
  { value: M(1.2), label: "1.2x" },
  { value: M(1.25), label: "1.25x" },
  { value: M(1.3), label: "1.3x" },
  { value: M(1.35), label: "1.35x" },
  { value: M(1.4), label: "1.4x" },
  { value: M(1.45), label: "1.45x" },
  { value: M(1.5), label: "1.5x" },
  { value: M(1.55), label: "1.55x" },
  { value: M(1.6), label: "1.6x" },
  { value: M(1.65), label: "1.65x" },
  { value: M(1.7), label: "1.7x" },
  { value: M(1.75), label: "1.75x" },
  { value: M(1.8), label: "1.8x" },
  { value: M(1.85), label: "1.85x" },
  { value: M(1.9), label: "1.9x" },
  { value: M(1.95), label: "1.95x" },
  { value: M(2), label: "2x" }
], rr = /* @__PURE__ */ A({
  setup() {
    const e = q(), t = _(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    async function r(o) {
      e.value ?? (e.value = new iu(o)), !e.value.isDisabled() && n();
    }
    return () => g(Re, {
      style: {
        padding: "0px"
      },
      visible: t.value,
      "onUpdate:visible": (o) => t.value = o,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => g(oe, {
        text: "局部变速",
        icon: "changespeed",
        onClick: r
      }, null),
      default: () => g("div", {
        class: "d-flex flex-column overflow-x-hidden overflow-y-scroll",
        style: "height:15rem"
      }, [lu.map(({
        label: o,
        value: a
      }) => g("div", {
        key: a,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          var i;
          (i = e.value) == null || i.exec({
            label: o,
            value: a
          }), s();
        },
        onMousedown: ne(() => {
        }, ["stop", "prevent"])
      }, [o]))])
    });
  }
});
class uu extends _e {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t ? me.isExpanded(t) ? (this.editor.emit(z.ERROR, "不能框选文本"), !0) : !1 : !0;
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
const cu = [{
  value: "weak",
  label: "短"
}, {
  value: "medium",
  label: "中"
}, {
  value: "strong",
  label: "长"
}], or = /* @__PURE__ */ A({
  setup() {
    const e = q(), t = _(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    function r(o) {
      e.value ?? (e.value = new uu(o)), !e.value.isDisabled() && n();
    }
    return () => g(Re, {
      visible: t.value,
      "onUpdate:visible": (o) => t.value = o,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => g(oe, {
        text: "停顿调节",
        icon: "rhythm",
        onClick: r
      }, null),
      default: () => g("div", {
        class: "d-flex flex-column"
      }, [cu.map(({
        label: o,
        value: a
      }) => g("div", {
        key: a,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && e.value.exec({
            label: o,
            value: a
          }), s();
        },
        onMousedown: ne(() => {
        }, ["stop", "prevent"])
      }, [o]))])
    });
  }
});
class du extends _e {
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
    return t ? me.isExpanded(t) ? (this.editor.emit(z.ERROR, "不能框选文字"), !0) : !1 : !0;
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
const ar = /* @__PURE__ */ A({
  __name: "special-menu",
  setup(e) {
    const t = _(), n = _(), s = q(), { globalEditConfig: r } = re(), { special: o } = r, a = _(!1), { x: i, y: l, height: u } = ot(n), f = (m) => {
      s.value ?? (s.value = new du(m)), !s.value.isDisabled() && (t.value.setPosition({
        x: i.value - 200,
        y: l.value + u.value
      }), a.value = !0);
    };
    function p(m) {
      var y;
      (y = s.value) == null || y.restoreSelection(), s.value && !s.value.isDisabled() && s.value.exec(m), a.value = !1;
    }
    return (m, y) => (C(), K(v(Ke), {
      ref_key: "dragRef",
      ref: t,
      visible: a.value,
      "onUpdate:visible": y[0] || (y[0] = (c) => a.value = c)
    }, {
      reference: N(() => [
        g(v(oe), {
          ref_key: "menuRef",
          ref: n,
          text: "音效",
          icon: "special",
          onClick: f
        }, null, 512)
      ]),
      default: N(() => [
        g(v(yn), {
          menus: v(o).menus,
          fetchScene: v(o).fetchScene,
          fetchStyle: v(o).fetchStyle,
          fetchData: v(o).fetchData,
          onSubmit: p
        }, null, 8, ["menus", "fetchScene", "fetchStyle", "fetchData"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
class fu extends _e {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t ? me.isExpanded(t) ? (this.editor.emit(z.ERROR, "不能框选文本"), !0) : !1 : !0;
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
const pu = [{
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
}], ir = /* @__PURE__ */ A({
  setup() {
    const e = q(), t = _(!1), n = _();
    function s() {
      t.value || (t.value = !0);
    }
    function r() {
      t.value && (t.value = !1);
    }
    function o(i) {
      e.value ?? (e.value = new fu(i)), !e.value.isDisabled() && (s(), n.value.focus());
    }
    function a(i) {
      var l;
      r(), i && ((l = e.value) == null || l.exec({
        value: i,
        label: i
      }));
    }
    return () => g(Re, {
      visible: t.value,
      "onUpdate:visible": (i) => t.value = i,
      trigger: "contextmenu",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => g(oe, {
        text: "插入静音",
        icon: "mute",
        onClick: o
      }, null),
      default: () => g("div", {
        class: "d-flex flex-column"
      }, [pu.map(({
        value: i,
        label: l
      }) => g("div", {
        key: i,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => a(i),
        onMousedown: ne(() => {
        }, ["stop", "prevent"])
      }, [l])), g(pn, {
        type: "text",
        ref: n,
        onSubmit: a
      }, null)])
    });
  }
}), lr = /* @__PURE__ */ A({
  __name: "bgm-menu",
  setup(e) {
    const t = _(), n = _(), s = q(), { globalEditConfig: r } = re(), { bgm: o } = r, a = _(!1), { x: i, y: l, height: u } = ot(n), f = async (m) => {
      const y = {
        x: i.value - 300,
        y: l.value + u.value
      };
      s.value = m, t.value.setPosition(y), a.value = !0;
    };
    function p(m) {
      const { rootBackgroundaudio: y } = Fe();
      y.src = m.value, y.remark = m.label, a.value = !1;
    }
    return (m, y) => (C(), K(v(Ke), {
      ref_key: "dragRef",
      ref: t,
      visible: a.value,
      "onUpdate:visible": y[0] || (y[0] = (c) => a.value = c)
    }, {
      reference: N(() => [
        g(v(oe), {
          ref_key: "menuRef",
          ref: n,
          text: "配乐",
          icon: "bgm",
          onClick: f
        }, null, 512)
      ]),
      default: N(() => [
        g(v(yn), {
          menus: v(o).menus,
          fetchScene: v(o).fetchScene,
          fetchStyle: v(o).fetchStyle,
          fetchData: v(o).fetchData,
          onSubmit: p
        }, null, 8, ["menus", "fetchScene", "fetchStyle", "fetchData"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), ur = /* @__PURE__ */ A({
  __name: "sensitive-menu",
  setup(e) {
    const t = _(), n = _(), s = q(), r = _(!1), { x: o, y: a, height: i } = ot(n), l = (u) => {
      s.value = u, t.value.setPosition({
        x: o.value - 200,
        y: a.value + i.value
      }), r.value = !0;
    };
    return (u, f) => (C(), K(v(Ke), {
      ref_key: "dragRef",
      ref: t,
      visible: r.value,
      "onUpdate:visible": f[0] || (f[0] = (p) => r.value = p)
    }, {
      reference: N(() => [
        g(v(oe), {
          ref_key: "menuRef",
          ref: n,
          text: "敏感词",
          icon: "sensitive",
          onClick: l
        }, null, 512)
      ]),
      default: N(() => [
        g(ur)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
const mu = {
  class: "select-list",
  style: { width: "120px" }
}, vu = {
  class: "text-center d-flex flex-column justify-content-center fs-6",
  style: { height: "60px" }
}, hu = ["onClick"], yu = /* @__PURE__ */ A({
  __name: "select-list",
  props: {
    modelValue: {},
    dataList: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: n }) {
    const s = e, r = _();
    function o(i) {
      n("update:modelValue", i.value);
    }
    function a() {
      var i;
      if (r.value) {
        for (let l = 0; l < s.dataList.length; l++)
          if (s.dataList[l].value === s.modelValue) {
            (i = r.value.children[l]) == null || i.scrollIntoView({ behavior: "smooth" });
            return;
          }
      }
    }
    return t({
      scrollIntoViewTheItem: a
    }), (i, l) => (C(), D("div", mu, [
      h("div", vu, [
        Se(i.$slots, "default", {}, void 0, !0)
      ]),
      h("ul", {
        ref_key: "listRef",
        ref: r,
        class: "text-center w-100 border-start border-top border-bottom border-secondary-subtle overflow-y-auto overflow-x-hidden scrollbar-none",
        style: { height: "180px" }
      }, [
        (C(!0), D(Z, null, ie(i.dataList, (u, f) => (C(), D("li", {
          class: fe(["clickable select-item py-1", { activate: u.value === i.modelValue }]),
          key: f,
          onClick: (p) => o(u)
        }, H(u.label), 11, hu))), 128))
      ], 512)
    ]));
  }
});
const Be = /* @__PURE__ */ le(yu, [["__scopeId", "data-v-e0f0259e"]]), gu = {
  style: { width: "600px", height: "360px" },
  class: "position-relative px-2 pb-2"
}, bu = { class: "position-relative" }, _u = { class: "position-absolute top-0 end-0" }, wu = /* @__PURE__ */ h("li", null, [
  /* @__PURE__ */ h("span", { class: "text-nowrap" }, "近期使用:")
], -1), xu = /* @__PURE__ */ h("span", { class: "my-3" }, "类型", -1), Eu = /* @__PURE__ */ h("span", { class: "my-3" }, "配音师", -1), ku = /* @__PURE__ */ h("span", { class: "my-3" }, "角色", -1), $u = /* @__PURE__ */ h("span", { class: "my-3" }, "风格", -1), Su = /* @__PURE__ */ h("span", { class: "my-3" }, "语速", -1), Cu = /* @__PURE__ */ h("span", { class: "my-3" }, "语调", -1), Tu = { class: "position-absolute bottom-0 end-0 d-flex flex-row justify-content-end me-4 mb-3" }, Ou = /* @__PURE__ */ A({
  __name: "management-content",
  emits: ["submit"],
  setup(e, { emit: t }) {
    const { globalEditConfig: n } = re(), { tryPlay: s } = n, r = _(!1), o = _(""), a = Fs(), { contentData: i } = Ds(a), l = q([]), u = _([{ label: "全部类型", value: "" }, ...s.category]), f = _([]), p = _([]), m = _([]), y = _(ii()), c = _(li());
    pe(async () => {
      i.value.category = u.value[0].value, await E();
    });
    async function d(b) {
      i.value.category = b, await E();
    }
    async function E() {
      const b = await s.fetchData({ ...fn(), ...i.value });
      l.value = b, f.value = b.map((x) => ({ label: x.displayName, value: x.name })), b.length > 0 && (p.value = b[0].roles, m.value = b[0].styles, i.value.name = b[0].name), p.value.length > 0 && (i.value.role = p.value[0].value), m.value.length > 0 && (i.value.style = m.value[0].value);
    }
    function k(b) {
      const x = l.value.find((R) => R.name === b);
      x && (p.value = x.roles, m.value = x.styles, p.value.length > 0 && (i.value.role = p.value[0].value), m.value.length > 0 && (i.value.style = m.value[0].value));
    }
    function S() {
      var L, F, T, O;
      const b = ((L = f.value.find((I) => I.value === i.value.name)) == null ? void 0 : L.label) || "", x = ((F = p.value.find((I) => I.value === i.value.role)) == null ? void 0 : F.label) || "", R = ((T = m.value.find((I) => I.value === i.value.style)) == null ? void 0 : T.label) || "", P = ((O = y.value.find((I) => I.value === i.value.speed)) == null ? void 0 : O.label) || "", w = {
        category: i.value.category,
        name: i.value.name,
        label: `${b}|${x}|${R}|${P}`,
        value: i.value.name,
        role: i.value.role,
        style: i.value.style,
        speed: ci(Number(i.value.speed)),
        pitch: ui(Number(i.value.pitch))
      };
      t("submit", w);
    }
    return (b, x) => (C(), D("div", gu, [
      g(v(kt), {
        onSubmit: ne(E, ["prevent"])
      }, {
        default: N(() => [
          g(v($t), {
            modelValue: o.value,
            "onUpdate:modelValue": x[0] || (x[0] = (R) => o.value = R),
            placeholder: "请输入名称快速查找配音师"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["onSubmit"]),
      h("div", bu, [
        h("div", _u, [
          g(v(ce), {
            size: "small",
            icon: v(Or),
            onClick: x[1] || (x[1] = () => r.value = !r.value)
          }, null, 8, ["icon"])
        ]),
        h("ul", {
          class: fe(["d-flex flex-row row-gap-1 column-gap-2 overflow-x-hidden", { "flex-wrap": r.value }])
        }, [
          wu,
          h("li", null, [
            g(v(Pe), {
              type: "info",
              closable: ""
            }, {
              default: N(() => [
                B("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            g(v(Pe), {
              type: "info",
              closable: ""
            }, {
              default: N(() => [
                B("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            g(v(Pe), {
              type: "info",
              closable: ""
            }, {
              default: N(() => [
                B("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            g(v(Pe), {
              type: "info",
              closable: ""
            }, {
              default: N(() => [
                B("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            g(v(Pe), {
              type: "info",
              closable: ""
            }, {
              default: N(() => [
                B("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            g(v(Pe), {
              type: "info",
              closable: ""
            }, {
              default: N(() => [
                B("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            g(v(Pe), {
              type: "info",
              closable: ""
            }, {
              default: N(() => [
                B("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ])
        ], 2),
        Te(h("div", {
          class: fe({ "d-flex flex-row": !r.value })
        }, [
          g(Be, {
            "onUpdate:modelValue": [
              d,
              x[2] || (x[2] = (R) => v(i).category = R)
            ],
            modelValue: v(i).category,
            dataList: u.value
          }, {
            default: N(() => [
              xu
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          g(Be, {
            "onUpdate:modelValue": [
              k,
              x[3] || (x[3] = (R) => v(i).name = R)
            ],
            modelValue: v(i).name,
            dataList: f.value
          }, {
            default: N(() => [
              Eu
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          g(Be, {
            modelValue: v(i).role,
            "onUpdate:modelValue": x[4] || (x[4] = (R) => v(i).role = R),
            dataList: p.value
          }, {
            default: N(() => [
              ku
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          g(Be, {
            modelValue: v(i).style,
            "onUpdate:modelValue": x[5] || (x[5] = (R) => v(i).style = R),
            dataList: m.value
          }, {
            default: N(() => [
              $u
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          g(Be, {
            modelValue: v(i).speed,
            "onUpdate:modelValue": x[6] || (x[6] = (R) => v(i).speed = R),
            dataList: y.value
          }, {
            default: N(() => [
              Su
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          g(Be, {
            modelValue: v(i).pitch,
            "onUpdate:modelValue": x[7] || (x[7] = (R) => v(i).pitch = R),
            dataList: c.value
          }, {
            default: N(() => [
              Cu
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"])
        ], 2), [
          [Oe, !r.value]
        ])
      ]),
      h("div", Tu, [
        Te(g(v(ce), {
          onClick: S,
          type: "primary"
        }, {
          default: N(() => [
            B("确定")
          ]),
          _: 1
        }, 512), [
          [Oe, !r.value]
        ]),
        Te(g(v(ce), { type: "primary" }, {
          default: N(() => [
            B("全部清空")
          ]),
          _: 1
        }, 512), [
          [Oe, r.value]
        ])
      ])
    ]));
  }
});
class fs extends _e {
  constructor(n) {
    super(n);
    W(this, "contentData");
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: n } = this.editor;
    if (n == null)
      return !0;
    if (V.getSelectedNodeByType(this.editor, "custom-management"))
      return !1;
    if (me.isCollapsed(n))
      return this.editor.emit(z.ERROR, "请框选句子"), !0;
    const [s] = X.node(this.editor, n), r = this.editor.getParentNode(s);
    return !r || !V.checkNodeType(r, "paragraph") ? (this.editor.emit(z.ERROR, "多人配音需要在最外层使用"), !0) : !1;
  }
  exec(n) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const s = this.getValue();
    if (s == null)
      return;
    const r = V.getSelectedNodeByType(this.editor, "custom-management");
    if (r)
      G.setNodes(
        this.editor,
        {
          custom: { contentData: this.contentData || {} },
          remark: n.label,
          name: n.value,
          role: n.role,
          style: n.style,
          rate: n.speed,
          pitch: n.pitch
        },
        {
          at: V.findPath(this.editor, r)
        }
      );
    else {
      const o = {
        type: "custom-management",
        custom: { contentData: this.contentData || {} },
        remark: n.label,
        name: n.value,
        role: n.role,
        style: n.style,
        rate: n.speed,
        pitch: n.pitch,
        children: [{ text: s }]
      };
      this.editor.insertNode(o);
    }
  }
}
const cr = /* @__PURE__ */ A({
  __name: "management-menu",
  setup(e) {
    const t = _(), n = _(), s = _(!1), r = q(), o = Fs(), { contentData: a } = Ds(o), { x: i, y: l, height: u } = ot(n);
    pe(() => {
      be.on(ge.EDITOR_CREATED, (c) => {
        c.on(z.SSML_ELEMENT_CLICK, (d, E) => {
          var k;
          if (E.type === "custom-management") {
            r.value ?? (r.value = new fs(d));
            const b = ((k = E.custom) == null ? void 0 : k.contentData) || {};
            b && (a.value.category = b.category, a.value.name = b.name, a.value.pitch = b.pitch, a.value.role = b.role, a.value.speed = b.speed, a.value.style = b.style), setTimeout(() => {
              f();
            }, 200);
          }
        });
      });
    });
    function f() {
      var d;
      const c = {
        x: i.value - 200,
        y: l.value + u.value
      };
      (d = t.value) == null || d.setPosition(c), s.value = !0;
    }
    function p() {
      s.value = !1;
    }
    function m(c) {
      r.value ?? (r.value = new fs(c)), !r.value.isDisabled() && f();
    }
    function y(c) {
      var d;
      r.value && !r.value.isDisabled() && (r.value.contentData = { ...a.value }, (d = r.value) == null || d.exec(c)), p();
    }
    return (c, d) => (C(), K(v(Ke), {
      ref_key: "dragRef",
      ref: t,
      visible: s.value,
      "onUpdate:visible": d[0] || (d[0] = (E) => s.value = E)
    }, {
      reference: N(() => [
        g(v(oe), {
          ref_key: "menuRef",
          ref: n,
          text: "多人配音",
          icon: "management",
          onClick: m
        }, null, 512)
      ]),
      default: N(() => [
        g(Ou, { onSubmit: y })
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Ru = { class: "speaker-head" }, Pu = ["src"], Du = { class: "speaker-name" }, Nu = /* @__PURE__ */ A({
  __name: "speaker-item",
  props: {
    label: {},
    value: {},
    avatar: {},
    activated: { type: Boolean }
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => (C(), D("div", {
      class: "speaker-item",
      onClick: n[0] || (n[0] = (s) => t.$emit("click", t.value || ""))
    }, [
      h("div", Ru, [
        h("img", {
          src: t.avatar || v(rt)(),
          class: fe([{ "border border-warning": t.activated }, "rounded-circle"]),
          style: { height: "40px" }
        }, null, 10, Pu)
      ]),
      h("div", Du, H(t.label), 1)
    ]));
  }
});
const Iu = /* @__PURE__ */ le(Nu, [["__scopeId", "data-v-b043c1a6"]]);
class Vu {
  constructor() {
    W(this, "mediaRecorder", null);
    W(this, "isRecording", _(!1));
  }
  get recorderState() {
    return Y(() => this.isRecording.value ? "recording" : "paused");
  }
  async start(t) {
    if (navigator.mediaDevices.getUserMedia) {
      const n = [];
      try {
        const s = await navigator.mediaDevices.getUserMedia({ audio: !0 }), r = new MediaRecorder(s);
        return this.mediaRecorder = r, new Promise((o, a) => {
          r.ondataavailable = (i) => {
            t.isCancellationRequested() ? (r.stop(), this.isRecording.value = !1, t.throwIfRequested()) : n.push(i.data);
          }, r.onstart = () => {
            this.isRecording.value = !0;
          }, r.onpause = () => {
            this.isRecording.value = !1;
          }, r.onstop = () => {
            this.isRecording.value = !1;
            const i = new Blob(n, { type: "audio/wav" });
            o(i);
          }, r.onerror = (i) => {
            this.isRecording.value = !1, a(i);
          }, t.throwIfRequested(), r.start();
        });
      } catch (s) {
        throw console.error(s), new Error("授权失败！", { cause: s });
      }
    }
    throw Error("浏览器不支持 getUserMedia");
  }
  stop() {
    this.mediaRecorder && this.mediaRecorder.stop();
  }
}
const Au = { class: "d-flex flex-row justify-content-between border rounded-pill border-secondary my-3 py-1 px-2" }, Lu = {
  class: "text-secondary d-flex flex-row align-items-center",
  style: { "font-size": "0.5rem" }
}, Mu = {
  key: 0,
  class: "iconfont icon-pause"
}, ju = {
  key: 1,
  class: "iconfont icon-play"
}, Fu = /* @__PURE__ */ h("span", { class: "iconfont icon-delete" }, null, -1), Hu = [
  Fu
], Uu = {
  key: 1,
  style: { "font-size": "0.5rem" }
}, Bu = /* @__PURE__ */ h("p", null, "选择需要转换的配音师", -1), zu = {
  class: "speakers-container border rounded d-flex flex-row flex-wrap row-gap-1 column-gap-2 overflow-y-auto overflow-x-hidden",
  style: { height: "150px" }
}, Wu = ["disabled"], Gu = /* @__PURE__ */ A({
  __name: "audio-upload",
  emits: ["submit"],
  setup(e, { expose: t, emit: n }) {
    const { globalEditConfig: s } = re(), { audioUpload: r, transfer: o, fetchSpeaker: a, timeoutMilliseconds: i } = s.conversion, l = _(), u = _(), f = _(), p = _(!0), m = _([]), y = _(), c = q(), d = q(), E = new js(), { playState: k } = E;
    let S;
    const b = new Vu(), x = new Uo("audio/*"), R = new Bo(60), { state: P } = R, { recorderState: w } = b, L = hn(l), F = ms("reopen");
    ee(L, (J) => {
      J || T();
    }), pe(async () => {
      m.value = await a();
    }), ee(L, (J) => {
      J || (p.value = !0, S == null || S.cancel());
    }), t({
      openInputFile: at
    });
    function T() {
      p.value = !0, O();
    }
    function O() {
      E.pause(), u.value = void 0, f.value = void 0, y.value = void 0, c.value = void 0, d.value = void 0, S == null || S.cancel();
    }
    function I() {
      b.stop(), R.stop();
    }
    async function U() {
      S = new ns(6e4), R.start();
      try {
        S.startTimeout(), c.value = await b.start(S.token);
      } catch (J) {
        be.emit(ge.ERROR, `${J}`, J);
      } finally {
        S.cancel(), R.stop();
      }
    }
    function we() {
      if (k.value === "playing")
        E.pause();
      else if (c.value) {
        const J = window.URL.createObjectURL(c.value);
        E.load(J), E.play();
      } else if (d.value) {
        const J = window.URL.createObjectURL(d.value);
        E.load(J), E.play();
      }
    }
    async function at() {
      try {
        return d.value = await x.open(), p.value = !1, !0;
      } catch {
        return !1;
      }
    }
    async function Rt() {
      try {
        if (S = new ns(i), p.value && c.value)
          S.startTimeout(), u.value = await r(c.value, S.token);
        else if (!p.value && d.value)
          S.startTimeout(), u.value = await r(d.value, S.token);
        else
          throw new Error("请选则文件或实时录音");
      } catch (J) {
        be.emit(ge.ERROR, `${J}`, J);
      }
    }
    async function Ie(J) {
      try {
        u.value ? (y.value = J, f.value = await o({ audioId: u.value.id, speakerId: J.id })) : be.emit(ge.ERROR, "请先上传音频文件");
      } catch (Pt) {
        be.emit(ge.ERROR, `${Pt}`, Pt);
      }
    }
    function ae() {
      f.value && y.value && (n("submit", { label: y.value.displayName, value: f.value.src }), T());
    }
    function mr() {
      S == null || S.cancel(), F == null || F();
    }
    return (J, Pt) => {
      var xn, En;
      return C(), D("div", {
        class: "audio-upload",
        ref_key: "boxRef",
        ref: l
      }, [
        h("div", Au, [
          h("div", Lu, [
            c.value || d.value ? (C(), D("button", {
              key: 0,
              onClick: we,
              class: "btn btn-sm rounded-pill"
            }, [
              v(k) === "playing" || v(w) === "recording" ? (C(), D("span", Mu)) : (C(), D("span", ju))
            ])) : ke("", !0),
            h("span", null, H(((xn = d.value) == null ? void 0 : xn.name) || ((En = c.value) == null ? void 0 : En.name)), 1)
          ]),
          h("div", null, [
            !u.value && (c.value || d.value) ? (C(), D("button", {
              key: 0,
              onClick: O,
              class: "btn btn-sm rounded-pill"
            }, Hu)) : ke("", !0),
            u.value ? (C(), D("span", Uu, "已上传")) : ke("", !0),
            p.value && !c.value ? (C(), D(Z, { key: 2 }, [
              v(w) === "recording" ? (C(), D("button", {
                key: 0,
                onClick: I,
                class: "btn btn-primary btn-sm rounded-pill"
              }, " 结束录音(" + H(v(P)) + ")s ", 1)) : (C(), D("button", {
                key: 1,
                onClick: U,
                class: "btn btn-primary btn-sm rounded-pill"
              }, " 开始录音 "))
            ], 64)) : ke("", !0),
            !p.value && !d.value ? (C(), D("button", {
              key: 3,
              onClick: at,
              class: "btn btn-primary btn-sm rounded-pill"
            }, " 选择文件 ")) : ke("", !0),
            u.value ? (C(), D("button", {
              key: 4,
              onClick: mr,
              class: "btn btn-primary btn-sm rounded-pill"
            }, " 重传音频 ")) : ke("", !0),
            !u.value && (d.value || c.value) ? (C(), D("button", {
              key: 5,
              onClick: Rt,
              class: "btn btn-primary btn-sm rounded-pill"
            }, " 上传音频 ")) : ke("", !0)
          ])
        ]),
        h("div", null, [
          Bu,
          h("div", zu, [
            (C(!0), D(Z, null, ie(m.value, (it, vr) => {
              var kn;
              return C(), K(Iu, {
                onClick: (Id) => Ie(it),
                key: vr,
                label: it.displayName,
                avatar: it.avatar,
                activated: it.name === ((kn = y.value) == null ? void 0 : kn.name)
              }, null, 8, ["onClick", "label", "avatar", "activated"]);
            }), 128))
          ])
        ]),
        h("button", {
          class: "btn btn-primary mt-1",
          onClick: ae,
          disabled: !f.value
        }, " 完成录音并上传完成后，可选择配音师转换 ", 8, Wu)
      ], 512);
    };
  }
}), qu = {
  class: "fw-bold",
  style: { "font-size": "0.5rem" }
}, Yu = /* @__PURE__ */ h("p", { class: "text-start text-danger" }, "请在安静的环境中进行录音，以需要转换的风格，读出以下文案", -1), Xu = {
  class: "border border-secondary rounded p-2 w-100",
  style: { height: "100px" }
}, Ku = { class: "mt-2" }, Ju = /* @__PURE__ */ h("p", {
  class: "mt-2 text-secondary",
  style: { "font-size": "0.5rem" }
}, " 录音内容需要和滑选一致，音频限制60秒，滑选文案限制60个字 ", -1), Qu = /* @__PURE__ */ A({
  __name: "conversion-content",
  props: {
    text: {}
  },
  emits: ["submit"],
  setup(e) {
    const t = _(), n = _(), s = _(!0), r = _(!1), o = hn(t);
    wr("reopen", () => {
      s.value = !0, r.value = !1;
    }), ee(o, (l) => {
      l || (s.value = !0, r.value = !1);
    });
    function a() {
      s.value = !0, r.value = !0;
    }
    async function i() {
      var l;
      await ((l = n.value) == null ? void 0 : l.openInputFile()) && (s.value = !1, r.value = !0);
    }
    return (l, u) => (C(), D("div", {
      ref_key: "boxRef",
      ref: t,
      class: "px-2 py-1",
      style: { width: "410px" }
    }, [
      Te(h("section", qu, [
        Yu,
        h("div", Xu, H(l.text), 1)
      ], 512), [
        [Oe, s.value]
      ]),
      Te(h("section", Ku, [
        h("div", { class: "w-100 d-flex flex-column row-gap-1" }, [
          h("button", {
            onClick: a,
            class: "btn btn-success"
          }, "实时录音"),
          h("button", {
            onClick: i,
            class: "btn btn-primary"
          }, "上传录音")
        ]),
        Ju
      ], 512), [
        [Oe, !r.value]
      ]),
      Te(h("section", null, [
        g(Gu, {
          ref_key: "audioUploadRef",
          ref: n,
          onSubmit: u[0] || (u[0] = (f) => l.$emit("submit", f))
        }, null, 512)
      ], 512), [
        [Oe, r.value]
      ])
    ], 512));
  }
});
class Zu extends _e {
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
    return t == null ? !0 : me.isCollapsed(t) ? (this.editor.emit(z.ERROR, "请框选要变音的句子"), !0) : !1;
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
const dr = /* @__PURE__ */ A({
  __name: "conversion-menu",
  setup(e) {
    const t = _(), n = _(), s = q(), r = q(), o = _(!1), a = _(""), { x: i, y: l, height: u } = ot(n), f = (m) => {
      if (r.value ?? (r.value = new Zu(m)), r.value.isDisabled())
        return;
      a.value = r.value.getValue();
      const y = {
        x: i.value - 200,
        y: l.value + u.value
      };
      s.value = m, t.value.setPosition(y), o.value = !0;
    };
    function p(m) {
      var y;
      (y = r.value) == null || y.exec(m), o.value = !1;
    }
    return (m, y) => (C(), K(v(Ke), {
      ref_key: "dragRef",
      ref: t,
      visible: o.value,
      "onUpdate:visible": y[0] || (y[0] = (c) => o.value = c)
    }, {
      reference: N(() => [
        g(v(oe), {
          ref_key: "menuRef",
          ref: n,
          text: "局部变音",
          icon: "conversion",
          onClick: f
        }, null, 512)
      ]),
      default: N(() => [
        g(Qu, {
          text: a.value,
          onSubmit: p
        }, null, 8, ["text"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), ec = { class: "anchor-avatar d-flex flex-column justify-content-center align-items-center" }, tc = { class: "position-relative" }, nc = ["src"], sc = {
  key: 0,
  class: "iconfont icon-play1"
}, rc = {
  key: 1,
  class: "iconfont icon-pause1"
}, oc = { class: "anchor-avatar-name text-white" }, ac = /* @__PURE__ */ A({
  __name: "try-play-circle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = _(), s = _(), r = _(0), o = _(0), a = Tt(), { globalEditConfig: i } = re(), { audioPlayer: l } = a, u = l.playState, { position: f } = vn(n, {
      initialValue: { x: window.innerWidth - 15, y: window.innerHeight / 2 - 15 },
      onStart: (k, S) => c(S.clientX, S.clientY) ? !1 : void 0
    }), { style: p } = gn(n, f);
    function m(k) {
      if (c(k.clientX, k.clientY))
        return d(k) ? E() : t("update:visible", !1);
    }
    function y(k) {
      r.value = k.clientX, o.value = k.clientY;
    }
    function c(k, S) {
      return k > r.value - 10 && k < r.value + 10 && S > o.value - 10 && S < o.value + 10;
    }
    function d(k) {
      var b;
      const S = k.target;
      return ((b = s.value) == null ? void 0 : b.contains(S)) || !1;
    }
    async function E() {
      if (u.value === "playing")
        l.pause();
      else
        try {
          const k = _n(), S = await i.tryPlay.play(k);
          l.load(S.src), l.play();
        } catch {
          l.pause();
        }
    }
    return (k, S) => Te((C(), D("div", {
      ref_key: "boxRef",
      ref: n,
      class: "try-play-circel user-select-none rounded-circle overflow-hidden",
      style: wt([v(p), { position: "fixed" }]),
      onMousedown: y,
      onMouseup: m
    }, [
      h("div", ec, [
        h("div", tc, [
          h("img", {
            src: v(a).speaker.avatar || v(rt)(),
            class: "rounded-circle"
          }, null, 8, nc),
          h("button", {
            ref_key: "btnPlayRef",
            ref: s,
            class: "btn w-100 h-100 position-absolute top-50 start-50 translate-middle bg-black bg-opacity-50 text-white rounded-circle"
          }, [
            v(u) === "paused" ? (C(), D("span", sc)) : (C(), D("span", rc))
          ], 512)
        ]),
        h("div", oc, H(v(a).speaker.displayName), 1)
      ])
    ], 36)), [
      [Oe, k.visible]
    ]);
  }
});
const ic = /* @__PURE__ */ le(ac, [["__scopeId", "data-v-236e9f7d"]]), lc = {
  key: 0,
  class: "position-absolute top-0 start-100 translate-middle text-bg-danger text-nowrap rounded px-1",
  style: { "font-size": "0.5rem" }
}, uc = ["src"], cc = { class: "anchor-avatar-name text-white" }, dc = /* @__PURE__ */ A({
  __name: "anchor-avatar",
  props: {
    activate: { type: Boolean },
    data: {}
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => {
      var s, r, o;
      return C(), D("div", {
        class: "anchor-avatar d-flex flex-column align-items-center text-center justify-content-center position-relative",
        onClick: n[0] || (n[0] = (a) => {
          var i;
          return t.$emit("click", (i = t.data) == null ? void 0 : i.value);
        })
      }, [
        (s = t.data) != null && s.isFree ? ke("", !0) : (C(), D("span", lc, "付费")),
        h("img", {
          src: ((r = t.data) == null ? void 0 : r.src) ?? v(rt)(),
          class: fe(["rounded-circle", { "border border-2 border-warning": t.activate }]),
          style: { height: "40px" }
        }, null, 10, uc),
        h("div", cc, H((o = t.data) == null ? void 0 : o.label), 1)
      ]);
    };
  }
});
const fr = /* @__PURE__ */ le(dc, [["__scopeId", "data-v-845325c9"]]), fc = {
  style: { height: "170px" },
  class: "w-100 d-flex flex-row flex-wrap justify-content-start overflow-x-hidden overflow-y-auto scrollbar-none"
}, pc = /* @__PURE__ */ A({
  __name: "anchor-list",
  props: {
    filter: {}
  },
  setup(e) {
    const t = e, { globalEditConfig: n } = re(), { fetchData: s } = n.tryPlay, r = Tt(), o = _([]), a = q([]);
    ee(
      () => t.filter,
      async (l) => {
        const u = await s(de(l));
        a.value = u, o.value = u.map((f) => ({ label: f.displayName, value: f.name }));
      }
    );
    function i(l) {
      const u = a.value.find((f) => f.name === l);
      u && r.setSpeaker(u);
    }
    return pe(async () => {
      const l = await s(de(t.filter));
      a.value = l, o.value = l.map((u) => ({ label: u.displayName, value: u.name })), o.value.length > 0 && i(o.value[0].value);
    }), (l, u) => (C(), D("div", fc, [
      (C(!0), D(Z, null, ie(o.value, (f, p) => (C(), D("div", {
        class: "m-3",
        key: p
      }, [
        g(fr, {
          data: f,
          activate: f.value === v(r).speaker.name,
          onClick: (m) => i(f.value)
        }, null, 8, ["data", "activate", "onClick"])
      ]))), 128))
    ]));
  }
}), Bt = /* @__PURE__ */ A({
  __name: "tag-item",
  props: {
    activate: { type: Boolean },
    value: {}
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => (C(), D("span", {
      class: fe(["tag-item d-inline-block text-white text-center text-nowrap text-truncate", { "border border-white rounded-pill": t.activate }]),
      onClick: n[0] || (n[0] = (s) => t.$emit("click", t.value)),
      style: { height: "20px", "min-width": "60px", "max-width": "160px", "font-size": "0.5rem", cursor: "pointer" }
    }, [
      Se(t.$slots, "default")
    ], 2));
  }
}), mc = { class: "tag-list w-100" }, vc = {
  class: "w-100 d-flex flex-row border-bottom border-secondary align-items-center",
  style: { height: "40px" }
}, hc = {
  class: "w-100 d-flex flex-row border-bottom border-secondary align-items-center",
  style: { height: "40px" }
}, yc = {
  style: { height: "100px" },
  class: "w-100 pt-2 d-flex flex-row flex-wrap align-content-start row-gap-2 overflow-y-auto overflow-x-hidden scrollbar-none"
}, gc = /* @__PURE__ */ A({
  __name: "tag-list",
  props: {
    filter: {}
  },
  emits: ["update:filter"],
  setup(e, { emit: t }) {
    const n = e, { globalEditConfig: s } = re(), { topFlag: r, gender: o, featchTag: a } = s.tryPlay, i = _([]);
    pe(async () => {
      i.value = await a();
    });
    function l(p) {
      t("update:filter", { ...de(n.filter), topFlag: p });
    }
    function u(p) {
      t("update:filter", { ...de(n.filter), gender: p });
    }
    function f(p) {
      t("update:filter", { ...de(n.filter), tag: p });
    }
    return (p, m) => (C(), D("div", mc, [
      h("div", vc, [
        (C(!0), D(Z, null, ie(v(r), (y, c) => (C(), K(Bt, {
          onClick: l,
          key: c,
          value: y.value,
          activate: p.filter.topFlag === y.value
        }, {
          default: N(() => [
            B(H(y.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "activate"]))), 128))
      ]),
      h("div", hc, [
        (C(!0), D(Z, null, ie(v(o), (y, c) => (C(), K(Bt, {
          onClick: u,
          key: c,
          value: y.value,
          activate: p.filter.gender === y.value
        }, {
          default: N(() => [
            B(H(y.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "activate"]))), 128))
      ]),
      h("div", yc, [
        (C(!0), D(Z, null, ie(i.value, (y, c) => (C(), K(Bt, {
          onClick: f,
          key: c,
          value: y.value,
          activate: p.filter.tag === y.value
        }, {
          default: N(() => [
            B(H(y.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "activate"]))), 128))
      ])
    ]));
  }
});
const bc = ["src"], _c = {
  class: "anchor-avatar-name text-white",
  style: { "font-size": "0.5rem" }
}, wc = /* @__PURE__ */ A({
  __name: "style-avatar",
  props: {
    activate: { type: Boolean },
    data: {}
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => {
      var s, r;
      return C(), D("div", {
        class: "anchor-avatar d-flex flex-column align-items-center text-center justify-content-center position-relative",
        onClick: n[0] || (n[0] = (o) => {
          var a;
          return t.$emit("click", (a = t.data) == null ? void 0 : a.value);
        })
      }, [
        h("img", {
          src: ((s = t.data) == null ? void 0 : s.src) || v(rt)(),
          class: fe(["rounded-circle", { "border border-2 border-warning": t.activate }]),
          style: { height: "30px" }
        }, null, 10, bc),
        h("div", _c, H((r = t.data) == null ? void 0 : r.label), 1)
      ]);
    };
  }
});
const xc = /* @__PURE__ */ le(wc, [["__scopeId", "data-v-71aedb65"]]);
function Ec(e) {
  return `${(0.05 * e * 100).toFixed(0)}%`;
}
function kc(e) {
  return `${((e - 1) * 100).toFixed(0)}%`;
}
const wn = (e) => (xt("data-v-0210af00"), e = e(), Et(), e), $c = {
  class: "slider-panle w-100 px-3 text-white",
  style: { "font-size": "0.5rem" }
}, Sc = { class: "mt-2 d-flex text-center justify-content-between align-items-center" }, Cc = { class: "me-auto d-flex flex-row align-items-center" }, Tc = ["src"], Oc = {
  class: "ms-2 d-flex flex-column justify-content-between",
  style: { height: "50px" }
}, Rc = { class: "d-flex dlex-row column-gap-2 align-items-end" }, Pc = { class: "fs-6" }, Dc = { style: { "font-size": "0.5rem" } }, Nc = { class: "d-flex flex-row column-gap-2 align-items-center" }, Ic = {
  key: 0,
  class: "badge text-bg-primary px-2"
}, Vc = { class: "d-flex flex-column align-items-end" }, Ac = /* @__PURE__ */ wn(() => /* @__PURE__ */ h("div", { class: "text-info" }, "音频时长，请以生成后的为准", -1)), Lc = { class: "mt-1" }, Mc = /* @__PURE__ */ wn(() => /* @__PURE__ */ h("span", null, "/", -1)), jc = { class: "role-list mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-2 column-gap-3" }, Fc = ["onClick"], Hc = { class: "audio-mood mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-1 column-gap-2" }, Uc = ["onClick"], Bc = /* @__PURE__ */ wn(() => /* @__PURE__ */ h("div", { class: "my-3" }, [
  /* @__PURE__ */ h("span", { class: "border rounded-pill p-1" }, "配音师详情")
], -1)), zc = { class: "slider-box" }, Wc = { class: "slider-box" }, Gc = { class: "d-flex flex-row gap-3 my-3" }, qc = ["onClick"], Yc = {
  class: "d-flex flex-row flex-wrap row-gap-2 column-gap-3 mb-3",
  style: { "min-height": "100px" }
}, Xc = ["onClick"], Kc = /* @__PURE__ */ A({
  __name: "slider-panle",
  setup(e) {
    const { globalEditConfig: t } = re(), { rootProsody: n, rootExpressAs: s } = Fe(), { fetchStar: r, category: o, fetchData: a } = t.tryPlay, i = Tt(), l = _(i.speaker.isStar), u = _(10), f = _(0), p = _([0, 2]), m = _(1), y = _([-10, 10]), c = _(0), d = Y(() => ts(u.value)), E = Y(() => ts(f.value)), k = ht(lo()), S = ht(uo()), b = _(""), x = _([]);
    pe(async () => {
      await L(o[0].value);
    }), ee(
      () => i.speaker,
      (T) => {
        T.roles.length > 0 && P(T.roles[0].value), T.styles.length > 0 && w(T.styles[0].value);
      },
      { immediate: !0 }
    ), ee(
      c,
      (T) => {
        n.pitch = Ec(T);
      },
      { immediate: !0 }
    ), ee(
      m,
      (T) => {
        n.rate = kc(T);
      },
      { immediate: !0 }
    );
    async function R() {
      l.value = await r(i.speaker.name, !l.value);
    }
    function P(T) {
      s.role = T;
    }
    function w(T) {
      s.style = T;
    }
    async function L(T) {
      b.value = T;
      try {
        x.value = await a({ ...fn(), category: T });
      } catch (O) {
        be.emit(ge.ERROR, `${O}`, O);
      }
    }
    function F(T) {
      i.setSpeaker(de(T));
    }
    return (T, O) => (C(), D("div", $c, [
      h("div", Sc, [
        h("div", Cc, [
          h("img", {
            src: v(rt)(),
            class: "rounded-circle",
            style: { height: "50px" }
          }, null, 8, Tc),
          h("div", Oc, [
            h("div", Rc, [
              h("span", Pc, H(v(i).speaker.displayName), 1),
              h("span", Dc, H(m.value) + "x", 1)
            ]),
            h("div", Nc, [
              g(v(rn), {
                onClick: R,
                class: "fs-6",
                style: wt({ color: l.value ? "red" : "white" })
              }, {
                default: N(() => [
                  l.value ? (C(), K(v(Rr), { key: 0 })) : (C(), K(v(Pr), { key: 1 }))
                ]),
                _: 1
              }, 8, ["style"]),
              v(i).speaker.isSupper24K ? (C(), D("span", Ic, " 24K ")) : ke("", !0)
            ])
          ])
        ]),
        h("div", Vc, [
          Ac,
          h("div", Lc, [
            h("span", null, H(E.value), 1),
            Mc,
            h("span", null, H(d.value), 1)
          ]),
          g(v(Dt), {
            max: u.value,
            modelValue: f.value,
            "onUpdate:modelValue": O[0] || (O[0] = (I) => f.value = I),
            size: "small"
          }, null, 8, ["max", "modelValue"])
        ])
      ]),
      h("div", jc, [
        (C(!0), D(Z, null, ie(v(i).speaker.roles, (I, U) => (C(), D("div", {
          onClick: (we) => P(I.value),
          key: U,
          class: fe(["rounded-pill px-1", { border: I.value === (v(s).role || "") }])
        }, H(I.label), 11, Fc))), 128))
      ]),
      h("ul", Hc, [
        (C(!0), D(Z, null, ie(v(i).speaker.styles, (I, U) => (C(), D("li", {
          class: "mx-2",
          onClick: (we) => w(I.value),
          key: U
        }, [
          g(xc, {
            activate: I.value === (v(s).style || ""),
            data: I
          }, null, 8, ["activate", "data"])
        ], 8, Uc))), 128))
      ]),
      Bc,
      h("div", zc, [
        h("div", null, [
          h("span", null, "语速：" + H(m.value) + "x", 1)
        ]),
        g(v(Dt), {
          modelValue: m.value,
          "onUpdate:modelValue": O[1] || (O[1] = (I) => m.value = I),
          min: p.value[0],
          max: p.value[1],
          step: 0.05,
          marks: k
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      h("div", Wc, [
        h("div", null, [
          h("span", null, "语调：" + H(c.value), 1)
        ]),
        g(v(Dt), {
          modelValue: c.value,
          "onUpdate:modelValue": O[2] || (O[2] = (I) => c.value = I),
          min: y.value[0],
          max: y.value[1],
          step: 0.2,
          marks: S
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      h("div", null, [
        h("ul", Gc, [
          (C(!0), D(Z, null, ie(v(o), (I, U) => (C(), D("li", {
            onClick: (we) => L(I.value),
            key: U,
            class: fe(["rounded-pill px-1", { border: I.value === b.value }])
          }, H(I.label), 11, qc))), 128))
        ]),
        h("ul", Yc, [
          (C(!0), D(Z, null, ie(x.value, (I, U) => (C(), D("li", {
            onClick: (we) => F(I),
            key: U
          }, [
            g(fr, {
              activate: I.name === v(i).speaker.name,
              data: { ...I, label: I.displayName, value: I.name }
            }, null, 8, ["activate", "data"])
          ], 8, Xc))), 128))
        ])
      ])
    ]));
  }
});
const Jc = /* @__PURE__ */ le(Kc, [["__scopeId", "data-v-0210af00"]]), Qc = (e) => (xt("data-v-f0208c5e"), e = e(), Et(), e), Zc = { class: "box ms-2" }, ed = { class: "try-play-header text-center d-flex flex-row justify-content-between" }, td = { class: "try-play-body d-flex flex-row" }, nd = { class: "try-play-left w-50 border-right border-secondary" }, sd = { class: "pe-1" }, rd = /* @__PURE__ */ Qc(() => /* @__PURE__ */ h("div", { class: "py-1 border-top border-secondary" }, null, -1)), od = { class: "try-play-right w-50 border-start rounded border-top border-secondary overflow-x-hidden overflow-y-auto scrollbar-none" }, ad = /* @__PURE__ */ A({
  __name: "try-play-panle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = e, s = _(), r = _(""), o = _(), a = _(), i = _(fn());
    pe(() => {
      window.addEventListener("keydown", l);
    }), nn(() => {
      window.addEventListener("keydown", l);
    }), ee(
      () => n.visible,
      (c) => {
        c && setTimeout(() => {
          m();
        }, 200);
      }
    );
    function l(c) {
      c.code === "Escape" && n.visible && p();
    }
    const { position: u } = vn(a, {
      initialValue: { x: 40, y: 40 }
    }), { style: f } = gn(o, u);
    pe(() => {
      u.value.x = (window.innerWidth - 890) / 2, u.value.y = (window.innerHeight - 390) / 2;
    });
    function p() {
      t("update:visible", !1);
    }
    function m() {
      var c;
      (c = s.value) == null || c.focus();
    }
    function y() {
      i.value = { ...i.value, word: r.value };
    }
    return (c, d) => Te((C(), D("div", {
      ref_key: "boxRef",
      ref: o,
      style: wt([v(f), { position: "fixed" }]),
      class: "try-play user-select-none card z-3 shadow"
    }, [
      h("div", Zc, [
        h("div", ed, [
          h("div", {
            ref_key: "handleRef",
            ref: a,
            class: "col-11 try-play-move"
          }, null, 512),
          h("div", {
            onClick: p,
            class: "col-1 try-play-menu-close"
          }, [
            g(v(rn), { color: "white" }, {
              default: N(() => [
                g(v(Dr))
              ]),
              _: 1
            })
          ])
        ]),
        h("div", td, [
          h("div", nd, [
            h("div", sd, [
              g(v(kt), {
                onSubmit: ne(y, ["prevent"])
              }, {
                default: N(() => [
                  g(v($t), {
                    "input-style": { color: "white" },
                    ref_key: "searchInputRef",
                    ref: s,
                    modelValue: r.value,
                    "onUpdate:modelValue": d[0] || (d[0] = (E) => r.value = E),
                    placeholder: "输入名称搜索"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["onSubmit"])
            ]),
            g(gc, {
              filter: i.value,
              "onUpdate:filter": d[1] || (d[1] = (E) => i.value = E)
            }, null, 8, ["filter"]),
            rd,
            g(pc, { filter: i.value }, null, 8, ["filter"])
          ]),
          h("div", od, [
            g(Jc)
          ])
        ])
      ])
    ], 4)), [
      [Oe, c.visible]
    ]);
  }
});
const id = /* @__PURE__ */ le(ad, [["__scopeId", "data-v-f0208c5e"]]), pr = /* @__PURE__ */ A({
  __name: "try-play",
  setup(e) {
    const t = _(!0);
    function n(s) {
      s || (t.value = !0);
    }
    return (s, r) => (C(), K(ys, { to: "body" }, [
      g(ic, {
        visible: t.value,
        "onUpdate:visible": r[0] || (r[0] = (o) => t.value = o)
      }, null, 8, ["visible"]),
      g(id, {
        visible: !t.value,
        "onUpdate:visible": n
      }, null, 8, ["visible"])
    ]));
  }
});
const ld = {
  install: (e) => {
    e.component("PlayMenu", Js), e.component("PinyinMenu", Qs), e.component("ContinuousMenu", Zs), e.component("ReadMenu", er), e.component("DigitalMenu", tr), e.component("AliasMenu", nr), e.component("EnglishMenu", sr), e.component("ChangespeedMenu", rr), e.component("RhythmMenu", or), e.component("SpecialMenu", ar), e.component("MuteMenu", ir), e.component("BgmMenu", lr), e.component("SensitiveMenu", ur), e.component("ManagementMenu", cr), e.component("ConversionMenu", dr), e.component("TryPlay", pr);
  }
};
var Zt = { exports: {} }, en = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.ParsingError = void 0;
  class n extends Error {
    constructor(x, R) {
      super(x), this.cause = R;
    }
  }
  t.ParsingError = n;
  let s;
  function r() {
    return l(!1) || m() || p() || f();
  }
  function o() {
    return d(/\s*/), l(!0) || p() || u() || i(!1);
  }
  function a() {
    const b = i(!0), x = [];
    let R, P = o();
    for (; P; ) {
      if (P.node.type === "Element") {
        if (R)
          throw new Error("Found multiple root nodes");
        R = P.node;
      }
      P.excluded || x.push(P.node), P = o();
    }
    if (!R)
      throw new n("Failed to parse XML", "Root Element not found");
    if (s.xml.length !== 0)
      throw new n("Failed to parse XML", "Not Well-Formed XML");
    return {
      declaration: b ? b.node : null,
      root: R,
      children: x
    };
  }
  function i(b) {
    const x = d(b ? /^<\?(xml)\s*/ : /^<\?([\w-:.]+)\s*/);
    if (!x)
      return;
    const R = {
      name: x[1],
      type: "ProcessingInstruction",
      attributes: {}
    };
    for (; !(E() || k("?>")); ) {
      const P = y();
      if (P)
        R.attributes[P.name] = P.value;
      else
        return;
    }
    return d(/\?>/), {
      excluded: b ? !1 : s.options.filter(R) === !1,
      node: R
    };
  }
  function l(b) {
    const x = d(/^<([^?!</>\s]+)\s*/);
    if (!x)
      return;
    const R = {
      type: "Element",
      name: x[1],
      attributes: {},
      children: []
    }, P = b ? !1 : s.options.filter(R) === !1;
    for (; !(E() || k(">") || k("?>") || k("/>")); ) {
      const L = y();
      if (L)
        R.attributes[L.name] = L.value;
      else
        return;
    }
    if (d(/^\s*\/>/))
      return R.children = null, {
        excluded: P,
        node: R
      };
    d(/\??>/);
    let w = r();
    for (; w; )
      w.excluded || R.children.push(w.node), w = r();
    if (s.options.strictMode) {
      const L = `</${R.name}>`;
      if (s.xml.startsWith(L))
        s.xml = s.xml.slice(L.length);
      else
        throw new n("Failed to parse XML", `Closing tag not matching "${L}"`);
    } else
      d(/^<\/\s*[\w-:.\u00C0-\u00FF]+>/);
    return {
      excluded: P,
      node: R
    };
  }
  function u() {
    const b = d(/^<!DOCTYPE\s+\S+\s+SYSTEM[^>]*>/) || d(/^<!DOCTYPE\s+\S+\s+PUBLIC[^>]*>/) || d(/^<!DOCTYPE\s+\S+\s*\[[^\]]*]>/) || d(/^<!DOCTYPE\s+\S+\s*>/);
    if (b) {
      const x = {
        type: "DocumentType",
        content: b[0]
      };
      return {
        excluded: s.options.filter(x) === !1,
        node: x
      };
    }
  }
  function f() {
    if (s.xml.startsWith("<![CDATA[")) {
      const b = s.xml.indexOf("]]>");
      if (b > -1) {
        const x = b + 3, R = {
          type: "CDATA",
          content: s.xml.substring(0, x)
        };
        return s.xml = s.xml.slice(x), {
          excluded: s.options.filter(R) === !1,
          node: R
        };
      }
    }
  }
  function p() {
    const b = d(/^<!--[\s\S]*?-->/);
    if (b) {
      const x = {
        type: "Comment",
        content: b[0]
      };
      return {
        excluded: s.options.filter(x) === !1,
        node: x
      };
    }
  }
  function m() {
    const b = d(/^([^<]+)/);
    if (b) {
      const x = {
        type: "Text",
        content: b[1]
      };
      return {
        excluded: s.options.filter(x) === !1,
        node: x
      };
    }
  }
  function y() {
    const b = d(/([^=]+)\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)\s*/);
    if (b)
      return {
        name: b[1].trim(),
        value: c(b[2].trim())
      };
  }
  function c(b) {
    return b.replace(/^['"]|['"]$/g, "");
  }
  function d(b) {
    const x = s.xml.match(b);
    if (x)
      return s.xml = s.xml.slice(x[0].length), x;
  }
  function E() {
    return s.xml.length === 0;
  }
  function k(b) {
    return s.xml.indexOf(b) === 0;
  }
  function S(b, x = {}) {
    b = b.trim();
    const R = x.filter || (() => !0);
    return s = {
      xml: b,
      options: Object.assign(Object.assign({}, x), { filter: R, strictMode: x.strictMode === !0 })
    }, a();
  }
  e.exports = S, t.default = S;
})(en, en.exports);
var ud = en.exports;
(function(e, t) {
  var n = Ge && Ge.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const s = n(ud);
  function r(c) {
    if (!c.options.indentation && !c.options.lineSeparator)
      return;
    c.content += c.options.lineSeparator;
    let d;
    for (d = 0; d < c.level; d++)
      c.content += c.options.indentation;
  }
  function o(c) {
    c.content = c.content.replace(/ +$/, "");
    let d;
    for (d = 0; d < c.level; d++)
      c.content += c.options.indentation;
  }
  function a(c, d) {
    c.content += d;
  }
  function i(c, d, E) {
    if (typeof c.content == "string")
      l(c.content, d, E);
    else if (c.type === "Element")
      f(c, d, E);
    else if (c.type === "ProcessingInstruction")
      m(c, d);
    else
      throw new Error("Unknown node type: " + c.type);
  }
  function l(c, d, E) {
    if (!E) {
      const k = c.trim();
      (d.options.lineSeparator || k.length === 0) && (c = k);
    }
    c.length > 0 && (!E && d.content.length > 0 && r(d), a(d, c));
  }
  function u(c, d) {
    const E = "/" + c.join("/"), k = c[c.length - 1];
    return d.includes(k) || d.includes(E);
  }
  function f(c, d, E) {
    if (d.path.push(c.name), !E && d.content.length > 0 && r(d), a(d, "<" + c.name), p(d, c.attributes), c.children === null || d.options.forceSelfClosingEmptyTag && c.children.length === 0) {
      const k = d.options.whiteSpaceAtEndOfSelfclosingTag ? " />" : "/>";
      a(d, k);
    } else if (c.children.length === 0)
      a(d, "></" + c.name + ">");
    else {
      const k = c.children;
      a(d, ">"), d.level++;
      let S = c.attributes["xml:space"] === "preserve", b = !1;
      if (!S && d.options.ignoredPaths && (b = u(d.path, d.options.ignoredPaths), S = b), !S && d.options.collapseContent) {
        let x = !1, R = !1, P = !1;
        k.forEach(function(w, L) {
          w.type === "Text" ? (w.content.includes(`
`) ? (R = !0, w.content = w.content.trim()) : (L === 0 || L === k.length - 1) && w.content.trim().length === 0 && (w.content = ""), w.content.trim().length > 0 && (x = !0)) : w.type === "CDATA" ? x = !0 : P = !0;
        }), x && (!P || !R) && (S = !0);
      }
      k.forEach(function(x) {
        i(x, d, E || S);
      }), d.level--, !E && !S && r(d), b && o(d), a(d, "</" + c.name + ">");
    }
    d.path.pop();
  }
  function p(c, d) {
    Object.keys(d).forEach(function(E) {
      const k = d[E].replace(/"/g, "&quot;");
      a(c, " " + E + '="' + k + '"');
    });
  }
  function m(c, d) {
    d.content.length > 0 && r(d), a(d, "<?" + c.name), p(d, c.attributes), a(d, "?>");
  }
  function y(c, d = {}) {
    d.indentation = "indentation" in d ? d.indentation : "    ", d.collapseContent = d.collapseContent === !0, d.lineSeparator = "lineSeparator" in d ? d.lineSeparator : `\r
`, d.whiteSpaceAtEndOfSelfclosingTag = d.whiteSpaceAtEndOfSelfclosingTag === !0, d.throwOnFailure = d.throwOnFailure !== !1;
    try {
      const E = (0, s.default)(c, { filter: d.filter, strictMode: d.strictMode }), k = { content: "", level: 0, options: d, path: [] };
      return E.declaration && m(E.declaration, k), E.children.forEach(function(S) {
        i(S, k, !1);
      }), d.lineSeparator ? k.content.replace(/\r\n/g, `
`).replace(/\n/g, d.lineSeparator) : k.content;
    } catch (E) {
      if (d.throwOnFailure)
        throw E;
      return c;
    }
  }
  y.minify = (c, d = {}) => y(c, Object.assign(Object.assign({}, d), { indentation: "", lineSeparator: "" })), e.exports = y, t.default = y;
})(Zt, Zt.exports);
var cd = Zt.exports;
const dd = /* @__PURE__ */ ln(cd), Je = (e) => (xt("data-v-fb2870b0"), e = e(), Et(), e), fd = { class: "editor-title d-flex flex-row align-item-center justify-content-between" }, pd = { class: "title-wrapper d-flex flex-column justify-content-center ps-3" }, md = /* @__PURE__ */ Je(() => /* @__PURE__ */ h("div", { class: "title-author pb-1" }, "SSML编辑器", -1)), vd = { class: "author d-flex flex-row align-items-center justify-content-start" }, hd = /* @__PURE__ */ Je(() => /* @__PURE__ */ h("div", null, "未保存", -1)), yd = /* @__PURE__ */ Je(() => /* @__PURE__ */ h("span", { class: "iconfont icon-play font-size-12 p-1" }, null, -1)), gd = /* @__PURE__ */ Je(() => /* @__PURE__ */ h("div", { class: "d-inline-block" }, null, -1)), bd = { class: "operation-wrapper d-flex flex-row justify-content-center align-items-center" }, _d = /* @__PURE__ */ Je(() => /* @__PURE__ */ h("div", { class: "menu-divider" }, null, -1)), wd = /* @__PURE__ */ Je(() => /* @__PURE__ */ h("div", { class: "px-1" }, null, -1)), xd = {
  class: "ssml-code border border-secondary-subtle rounded-2 px-2",
  style: { "white-space": "pre-wrap", "max-height": "50vh" }
}, Ed = { class: "dialog-footer" }, kd = /* @__PURE__ */ A({
  __name: "editor-title",
  setup(e) {
    const t = _(!1), n = _(""), { rootBackgroundaudio: s } = Fe(), r = Y(() => dd(n.value, {
      indentation: "    ",
      filter: (u) => u.type !== "Comment",
      collapseContent: !0,
      lineSeparator: `
`
    })), o = () => {
      n.value = _n(), t.value = !0;
    }, a = () => {
      s.src && Ye.play(s.src);
    }, i = () => {
      Ye.stop(s.src), s.src = "", s.remark = "";
    };
    async function l(u) {
      await navigator.clipboard.writeText(u ? r.value : n.value), t.value = !1;
    }
    return (u, f) => (C(), D(Z, null, [
      h("div", fd, [
        h("div", pd, [
          md,
          h("div", vd, [
            hd,
            v(s).src ? (C(), K(v(Pe), {
              key: 0,
              class: "bgm-txt ms-2",
              closable: "",
              size: "small",
              onClick: a,
              onClose: i
            }, {
              default: N(() => [
                yd,
                gd,
                h("span", null, H(v(s).remark), 1)
              ]),
              _: 1
            })) : ke("", !0)
          ])
        ]),
        h("div", bd, [
          g(v(ce), {
            type: "primary",
            icon: v(Nr),
            disabled: ""
          }, {
            default: N(() => [
              B("分享")
            ]),
            _: 1
          }, 8, ["icon"]),
          _d,
          g(v(ce), {
            type: "primary",
            onClick: o
          }, {
            default: N(() => [
              B("查看SSML")
            ]),
            _: 1
          }),
          g(v(ce), { disabled: "" }, {
            default: N(() => [
              B("下载音频")
            ]),
            _: 1
          }),
          g(v(ce), { disabled: "" }, {
            default: N(() => [
              B("下载视频")
            ]),
            _: 1
          }),
          g(v(ce), { disabled: "" }, {
            default: N(() => [
              B("下载字幕")
            ]),
            _: 1
          }),
          g(v(ce), { disabled: "" }, {
            default: N(() => [
              B("声音转换")
            ]),
            _: 1
          }),
          wd
        ])
      ]),
      g(v(Sr), {
        modelValue: t.value,
        "onUpdate:modelValue": f[4] || (f[4] = (p) => t.value = p),
        title: "查看SSML",
        width: "80%"
      }, {
        header: N(() => [
          g(v(ce), {
            type: "info",
            onClick: f[0] || (f[0] = (p) => l(!0))
          }, {
            default: N(() => [
              B("复制+关闭")
            ]),
            _: 1
          }),
          g(v(ce), {
            type: "primary",
            onClick: f[1] || (f[1] = (p) => l(!1))
          }, {
            default: N(() => [
              B("压缩+复制+关闭(推荐)")
            ]),
            _: 1
          })
        ]),
        footer: N(() => [
          h("span", Ed, [
            g(v(ce), {
              type: "info",
              onClick: f[2] || (f[2] = (p) => l(!0))
            }, {
              default: N(() => [
                B("复制+关闭")
              ]),
              _: 1
            }),
            g(v(ce), {
              type: "primary",
              onClick: f[3] || (f[3] = (p) => l(!1))
            }, {
              default: N(() => [
                B("压缩+复制+关闭(推荐)")
              ]),
              _: 1
            })
          ])
        ]),
        default: N(() => [
          h("pre", xd, H(r.value), 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
});
const $d = /* @__PURE__ */ le(kd, [["__scopeId", "data-v-fb2870b0"]]), Sd = /* @__PURE__ */ A({
  __name: "editor-core",
  emits: ["created", "change"],
  setup(e, { emit: t }) {
    const { editor: n, setEditor: s, globalEditConfig: r } = re(), o = _(null);
    pe(() => {
      a();
    }), nn(() => {
      n == null || n.destroy();
    });
    function a() {
      if (!o.value)
        return;
      const i = Er({
        selector: o.value,
        mode: "simple",
        config: {
          ...de(r.editorConfig),
          onCreated(l) {
            t("created", l), be.emit(ge.EDITOR_CREATED, l);
          },
          onChange(l) {
            t("change", l);
          }
        }
      });
      s(i), i.on(z.ERROR, r.handleError);
    }
    return (i, l) => (C(), D("div", {
      ref_key: "boxRef",
      ref: o,
      class: "edit-core",
      style: { height: "70vh", "overflow-y": "hidden" }
    }, null, 512));
  }
}), Cd = { class: "bar-view border-bottom border-1" }, Td = /* @__PURE__ */ A({
  __name: "bar-view",
  setup(e) {
    return (t, n) => (C(), D(Z, null, [
      h("div", Cd, [
        g(v(zs), null, {
          default: N(() => [
            g(v(ze), { divider: "green" }, {
              default: N(() => [
                g(v(Js))
              ]),
              _: 1
            }),
            g(v(ze), { divider: "cyan" }, {
              default: N(() => [
                g(v(Qs)),
                g(v(er)),
                g(v(tr)),
                g(v(Zs)),
                g(v(nr)),
                g(v(sr))
              ]),
              _: 1
            }),
            g(v(ze), { divider: "orange" }, {
              default: N(() => [
                g(v(rr)),
                g(v(cr)),
                g(v(dr))
              ]),
              _: 1
            }),
            g(v(ze), { divider: "purple" }, {
              default: N(() => [
                g(v(or)),
                g(v(ir))
              ]),
              _: 1
            }),
            g(v(ze), { divider: "yellow" }, {
              default: N(() => [
                g(v(ar)),
                g(v(lr))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      g(v(pr))
    ], 64));
  }
}), Od = { class: "editor-box" }, Rd = { class: "editor-core-container shadow pt-1" }, Pd = /* @__PURE__ */ A({
  __name: "editor-view",
  emits: ["created", "change"],
  setup(e, { emit: t }) {
    const n = (a) => {
      t("created", a);
    }, s = (a) => {
      t("change", a);
    };
    function r(a) {
      be.emit(ge.VIEW_CLICK, a);
    }
    function o(a) {
      be.emit(ge.VIEW_KEYDOWN, a);
    }
    return (a, i) => (C(), D("div", {
      class: "editor-view",
      onClick: r,
      onKeydown: o
    }, [
      Se(a.$slots, "default", {}, () => [
        g($d)
      ], !0),
      h("div", Od, [
        g(Td),
        h("div", Rd, [
          g(Sd, {
            onChange: s,
            onCreated: n
          })
        ])
      ])
    ], 32));
  }
});
const Dd = /* @__PURE__ */ le(Pd, [["__scopeId", "data-v-b5e6df8c"]]), Nd = {
  install(e) {
    e.component("EditorView", Dd);
  }
}, Kd = {
  install(e, t) {
    e.use(ro()), e.use(() => {
      const { setGlobalEditConfig: n } = re(), s = Ns(t);
      n(s), be.on(ge.ERROR, s.handleError);
    }), e.use(oi), e.use($l), e.use(ld), e.use(Nd);
  }
};
export {
  Ho as AudioPlayer,
  ns as CancellationTokenSource,
  Hd as DOMComment,
  Ud as DOMElement,
  Fd as DOMNode,
  zd as DOMRange,
  Wd as DOMSelection,
  Gd as DOMStaticRange,
  Bd as DOMText,
  ge as EMITTER_EVENT,
  Dd as EditorView,
  Uo as FileSelector,
  Bo as Timer,
  z as WANGEDITOR_EVENT,
  Ye as audioPlayer,
  Ns as createGlobalEditorConfig,
  Kd as default,
  fn as defaultFilterSpeaker,
  Xd as defaultLabelValue,
  ai as defaultSpeaker,
  rt as demoAvatar,
  ts as formatTime,
  qd as genRandomStr,
  uo as pitch,
  _n as serializeToSSML,
  lo as speed
};

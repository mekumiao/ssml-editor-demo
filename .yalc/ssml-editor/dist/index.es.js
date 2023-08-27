var ks = Object.defineProperty;
var Os = (e, t, n) => t in e ? ks(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ke = (e, t, n) => (Os(e, typeof t != "symbol" ? t + "" : t, n), n);
import { effectScope as Tn, ref as y, markRaw as ke, toRaw as Te, hasInjectionContext as Cs, inject as Ps, getCurrentInstance as Nt, watch as me, unref as b, reactive as xt, isRef as Me, isReactive as Dt, toRef as ht, nextTick as Et, computed as K, getCurrentScope as In, onScopeDispose as Vn, toRefs as $t, shallowRef as X, shallowReactive as Ze, defineComponent as R, openBlock as V, createElementBlock as L, normalizeClass as Ce, withModifiers as te, createElementVNode as f, toDisplayString as Q, createBlock as ne, withCtx as _, createVNode as i, renderSlot as _e, customRef as Ts, onMounted as He, watchEffect as Is, createTextVNode as w, Fragment as fe, renderList as De, onUnmounted as Lt, Teleport as An, withDirectives as xe, normalizeStyle as Mt, vShow as Ee, createCommentVNode as Rn, pushScopeId as Ye, popScopeId as qe, createStaticVNode as Nn } from "vue";
import { DomEditor as N, SlateTransforms as B, SlateText as Vs, SlateElement as As, Boot as re, SlateEditor as je, SlateRange as de, createEditor as Rs } from "@wangeditor/editor";
import { ElForm as dt, ElInput as ft, ElPopover as ye, ElMenu as Ns, ElMenuItem as _t, ElSelect as St, ElOption as kt, ElButton as ie, ElTag as be, ElIcon as Dn, ElSlider as yt, ElDialog as Ds } from "element-plus";
import { Search as Ls, More as Ms, Star as js, Minus as Hs, Share as Fs } from "@element-plus/icons-vue";
var Ln = !1;
function et(e, t, n) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function gt(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1);
    return;
  }
  delete e[t];
}
function Bs() {
  return Mn().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Mn() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Us = typeof Proxy == "function", zs = "devtools-plugin:setup", Ws = "plugin:settings:set";
let Ie, Ot;
function Gs() {
  var e;
  return Ie !== void 0 || (typeof window < "u" && window.performance ? (Ie = !0, Ot = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Ie = !0, Ot = global.perf_hooks.performance) : Ie = !1), Ie;
}
function Xs() {
  return Gs() ? Ot.now() : Date.now();
}
class Ys {
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
        return Xs();
      }
    }, n && n.on(Ws, (a, l) => {
      a === this.plugin.id && this.fallbacks.setSettings(l);
    }), this.proxiedOn = new Proxy({}, {
      get: (a, l) => this.target ? this.target.on[l] : (...u) => {
        this.onQueue.push({
          method: l,
          args: u
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (a, l) => this.target ? this.target[l] : l === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(l) ? (...u) => (this.targetQueue.push({
        method: l,
        args: u,
        resolve: () => {
        }
      }), this.fallbacks[l](...u)) : (...u) => new Promise((p) => {
        this.targetQueue.push({
          method: l,
          args: u,
          resolve: p
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
function jn(e, t) {
  const n = e, s = Mn(), r = Bs(), o = Us && n.enableEarlyProxy;
  if (r && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o))
    r.emit(zs, e, t);
  else {
    const a = o ? new Ys(n, r) : null;
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
let We;
const Xe = (e) => We = e, Hn = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Pe(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var pe;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(pe || (pe = {}));
const pt = typeof window < "u", Ge = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && pt, Jt = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function qs(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], { type: e.type }) : e;
}
function jt(e, t, n) {
  const s = new XMLHttpRequest();
  s.open("GET", e), s.responseType = "blob", s.onload = function() {
    Un(s.response, t, n);
  }, s.onerror = function() {
    console.error("could not download file");
  }, s.send();
}
function Fn(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function nt(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
const st = typeof navigator == "object" ? navigator : { userAgent: "" }, Bn = /* @__PURE__ */ (() => /Macintosh/.test(st.userAgent) && /AppleWebKit/.test(st.userAgent) && !/Safari/.test(st.userAgent))(), Un = pt ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Bn ? Js : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in st ? Qs : (
      // Fallback to using FileReader and a popup
      Ks
    )
  )
) : () => {
};
function Js(e, t = "download", n) {
  const s = document.createElement("a");
  s.download = t, s.rel = "noopener", typeof e == "string" ? (s.href = e, s.origin !== location.origin ? Fn(s.href) ? jt(e, t, n) : (s.target = "_blank", nt(s)) : nt(s)) : (s.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    nt(s);
  }, 0));
}
function Qs(e, t = "download", n) {
  if (typeof e == "string")
    if (Fn(e))
      jt(e, t, n);
    else {
      const s = document.createElement("a");
      s.href = e, s.target = "_blank", setTimeout(function() {
        nt(s);
      });
    }
  else
    navigator.msSaveOrOpenBlob(qs(e, n), t);
}
function Ks(e, t, n, s) {
  if (s = s || open("", "_blank"), s && (s.document.title = s.document.body.innerText = "downloading..."), typeof e == "string")
    return jt(e, t, n);
  const r = e.type === "application/octet-stream", o = /constructor/i.test(String(Jt.HTMLElement)) || "safari" in Jt, a = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((a || r && o || Bn) && typeof FileReader < "u") {
    const l = new FileReader();
    l.onloadend = function() {
      let u = l.result;
      if (typeof u != "string")
        throw s = null, new Error("Wrong reader.result type");
      u = a ? u : u.replace(/^data:[^;]*;/, "data:attachment/file;"), s ? s.location.href = u : location.assign(u), s = null;
    }, l.readAsDataURL(e);
  } else {
    const l = URL.createObjectURL(e);
    s ? s.location.assign(l) : location.href = l, s = null, setTimeout(function() {
      URL.revokeObjectURL(l);
    }, 4e4);
  }
}
function W(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function Ht(e) {
  return "_a" in e && "install" in e;
}
function zn() {
  if (!("clipboard" in navigator))
    return W("Your browser doesn't support the Clipboard API", "error"), !0;
}
function Wn(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (W('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Zs(e) {
  if (!zn())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), W("Global state copied to clipboard.");
    } catch (t) {
      if (Wn(t))
        return;
      W("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function er(e) {
  if (!zn())
    try {
      Gn(e, JSON.parse(await navigator.clipboard.readText())), W("Global state pasted from clipboard.");
    } catch (t) {
      if (Wn(t))
        return;
      W("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function tr(e) {
  try {
    Un(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    W("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let he;
function nr() {
  he || (he = document.createElement("input"), he.type = "file", he.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      he.onchange = async () => {
        const s = he.files;
        if (!s)
          return t(null);
        const r = s.item(0);
        return t(r ? { text: await r.text(), file: r } : null);
      }, he.oncancel = () => t(null), he.onerror = n, he.click();
    });
  }
  return e;
}
async function sr(e) {
  try {
    const n = await nr()();
    if (!n)
      return;
    const { text: s, file: r } = n;
    Gn(e, JSON.parse(s)), W(`Global state imported from "${r.name}".`);
  } catch (t) {
    W("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function Gn(e, t) {
  for (const n in t) {
    const s = e.state.value[n];
    s && Object.assign(s, t[n]);
  }
}
function le(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const Xn = "🍍 Pinia (root)", Ct = "_root";
function rr(e) {
  return Ht(e) ? {
    id: Ct,
    label: Xn
  } : {
    id: e.$id,
    label: e.$id
  };
}
function or(e) {
  if (Ht(e)) {
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
          value: a._getters.reduce((l, u) => (l[u] = a[u], l), {})
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
function ar(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: le(e.type),
    key: le(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function lr(e) {
  switch (e) {
    case pe.direct:
      return "mutation";
    case pe.patchFunction:
      return "$patch";
    case pe.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let Re = !0;
const rt = [], Se = "pinia:mutations", q = "pinia", { assign: ir } = Object, lt = (e) => "🍍 " + e;
function ur(e, t) {
  jn({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: rt,
    app: e
  }, (n) => {
    typeof n.now != "function" && W("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: Se,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: q,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            Zs(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await er(t), n.sendInspectorTree(q), n.sendInspectorState(q);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            tr(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await sr(t), n.sendInspectorTree(q), n.sendInspectorState(q);
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
            r ? typeof r.$reset != "function" ? W(`Cannot reset "${s}" store because it doesn't have a "$reset" method implemented.`, "warn") : (r.$reset(), W(`Store "${s}" reset.`)) : W(`Cannot reset "${s}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((s, r) => {
      const o = s.componentInstance && s.componentInstance.proxy;
      if (o && o._pStores) {
        const a = s.componentInstance.proxy._pStores;
        Object.values(a).forEach((l) => {
          s.instanceData.state.push({
            type: lt(l.$id),
            key: "state",
            editable: !0,
            value: l._isOptionsAPI ? {
              _custom: {
                value: Te(l.$state),
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
              Object.keys(l.$state).reduce((u, p) => (u[p] = l.$state[p], u), {})
            )
          }), l._getters && l._getters.length && s.instanceData.state.push({
            type: lt(l.$id),
            key: "getters",
            editable: !1,
            value: l._getters.reduce((u, p) => {
              try {
                u[p] = l[p];
              } catch (m) {
                u[p] = m;
              }
              return u;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((s) => {
      if (s.app === e && s.inspectorId === q) {
        let r = [t];
        r = r.concat(Array.from(t._s.values())), s.rootNodes = (s.filter ? r.filter((o) => "$id" in o ? o.$id.toLowerCase().includes(s.filter.toLowerCase()) : Xn.toLowerCase().includes(s.filter.toLowerCase())) : r).map(rr);
      }
    }), n.on.getInspectorState((s) => {
      if (s.app === e && s.inspectorId === q) {
        const r = s.nodeId === Ct ? t : t._s.get(s.nodeId);
        if (!r)
          return;
        r && (s.state = or(r));
      }
    }), n.on.editInspectorState((s, r) => {
      if (s.app === e && s.inspectorId === q) {
        const o = s.nodeId === Ct ? t : t._s.get(s.nodeId);
        if (!o)
          return W(`store "${s.nodeId}" not found`, "error");
        const { path: a } = s;
        Ht(o) ? a.unshift("state") : (a.length !== 1 || !o._customProperties.has(a[0]) || a[0] in o.$state) && a.unshift("$state"), Re = !1, s.set(o, a, s.state.value), Re = !0;
      }
    }), n.on.editComponentState((s) => {
      if (s.type.startsWith("🍍")) {
        const r = s.type.replace(/^🍍\s*/, ""), o = t._s.get(r);
        if (!o)
          return W(`store "${r}" not found`, "error");
        const { path: a } = s;
        if (a[0] !== "state")
          return W(`Invalid path for store "${r}":
${a}
Only state can be modified.`);
        a[0] = "$state", Re = !1, s.set(o, a, s.state.value), Re = !0;
      }
    });
  });
}
function cr(e, t) {
  rt.includes(lt(t.$id)) || rt.push(lt(t.$id)), jn({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: rt,
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
    t.$onAction(({ after: a, onError: l, name: u, args: p }) => {
      const m = Yn++;
      n.addTimelineEvent({
        layerId: Se,
        event: {
          time: s(),
          title: "🛫 " + u,
          subtitle: "start",
          data: {
            store: le(t.$id),
            action: le(u),
            args: p
          },
          groupId: m
        }
      }), a((v) => {
        we = void 0, n.addTimelineEvent({
          layerId: Se,
          event: {
            time: s(),
            title: "🛬 " + u,
            subtitle: "end",
            data: {
              store: le(t.$id),
              action: le(u),
              args: p,
              result: v
            },
            groupId: m
          }
        });
      }), l((v) => {
        we = void 0, n.addTimelineEvent({
          layerId: Se,
          event: {
            time: s(),
            logType: "error",
            title: "💥 " + u,
            subtitle: "end",
            data: {
              store: le(t.$id),
              action: le(u),
              args: p,
              error: v
            },
            groupId: m
          }
        });
      });
    }, !0), t._customProperties.forEach((a) => {
      me(() => b(t[a]), (l, u) => {
        n.notifyComponentUpdate(), n.sendInspectorState(q), Re && n.addTimelineEvent({
          layerId: Se,
          event: {
            time: s(),
            title: "Change",
            subtitle: a,
            data: {
              newValue: l,
              oldValue: u
            },
            groupId: we
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: a, type: l }, u) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(q), !Re)
        return;
      const p = {
        time: s(),
        title: lr(l),
        data: ir({ store: le(t.$id) }, ar(a)),
        groupId: we
      };
      l === pe.patchFunction ? p.subtitle = "⤵️" : l === pe.patchObject ? p.subtitle = "🧩" : a && !Array.isArray(a) && (p.subtitle = a.type), a && (p.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: a
        }
      }), n.addTimelineEvent({
        layerId: Se,
        event: p
      });
    }, { detached: !0, flush: "sync" });
    const r = t._hotUpdate;
    t._hotUpdate = ke((a) => {
      r(a), n.addTimelineEvent({
        layerId: Se,
        event: {
          time: s(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: le(t.$id),
            info: le("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(q), n.sendInspectorState(q);
    });
    const { $dispose: o } = t;
    t.$dispose = () => {
      o(), n.notifyComponentUpdate(), n.sendInspectorTree(q), n.sendInspectorState(q), n.getSettings().logStoreChanges && W(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(q), n.sendInspectorState(q), n.getSettings().logStoreChanges && W(`"${t.$id}" store installed 🆕`);
  });
}
let Yn = 0, we;
function Qt(e, t, n) {
  const s = t.reduce((r, o) => (r[o] = Te(e)[o], r), {});
  for (const r in s)
    e[r] = function() {
      const o = Yn, a = n ? new Proxy(e, {
        get(...u) {
          return we = o, Reflect.get(...u);
        },
        set(...u) {
          return we = o, Reflect.set(...u);
        }
      }) : e;
      we = o;
      const l = s[r].apply(a, arguments);
      return we = void 0, l;
    };
}
function dr({ app: e, store: t, options: n }) {
  if (t.$id.startsWith("__hot:"))
    return;
  t._isOptionsAPI = !!n.state, Qt(t, Object.keys(n.actions), t._isOptionsAPI);
  const s = t._hotUpdate;
  Te(t)._hotUpdate = function(r) {
    s.apply(this, arguments), Qt(t, Object.keys(r._hmrPayload.actions), !!t._isOptionsAPI);
  }, cr(
    e,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    t
  );
}
function fr() {
  const e = Tn(!0), t = e.run(() => y({}));
  let n = [], s = [];
  const r = ke({
    install(o) {
      Xe(r), r._a = o, o.provide(Hn, r), o.config.globalProperties.$pinia = r, Ge && ur(o, r), s.forEach((a) => n.push(a)), s = [];
    },
    use(o) {
      return !this._a && !Ln ? s.push(o) : n.push(o), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return Ge && typeof Proxy < "u" && r.use(dr), r;
}
function qn(e, t) {
  for (const n in t) {
    const s = t[n];
    if (!(n in e))
      continue;
    const r = e[n];
    Pe(r) && Pe(s) && !Me(s) && !Dt(s) ? e[n] = qn(r, s) : e[n] = s;
  }
  return e;
}
const Jn = () => {
};
function Kt(e, t, n, s = Jn) {
  e.push(t);
  const r = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), s());
  };
  return !n && In() && Vn(r), r;
}
function Ve(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const pr = (e) => e();
function Pt(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, s) => e.set(s, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], r = e[n];
    Pe(r) && Pe(s) && e.hasOwnProperty(n) && !Me(s) && !Dt(s) ? e[n] = Pt(r, s) : e[n] = s;
  }
  return e;
}
const mr = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function vr(e) {
  return !Pe(e) || !e.hasOwnProperty(mr);
}
const { assign: oe } = Object;
function Zt(e) {
  return !!(Me(e) && e.effect);
}
function en(e, t, n, s) {
  const { state: r, actions: o, getters: a } = t, l = n.state.value[e];
  let u;
  function p() {
    !l && (process.env.NODE_ENV === "production" || !s) && (n.state.value[e] = r ? r() : {});
    const m = process.env.NODE_ENV !== "production" && s ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      $t(y(r ? r() : {}).value)
    ) : $t(n.state.value[e]);
    return oe(m, o, Object.keys(a || {}).reduce((v, h) => (process.env.NODE_ENV !== "production" && h in m && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${h}" in store "${e}".`), v[h] = ke(K(() => {
      Xe(n);
      const g = n._s.get(e);
      return a[h].call(g, g);
    })), v), {}));
  }
  return u = Tt(e, p, t, n, s, !0), u;
}
function Tt(e, t, n = {}, s, r, o) {
  let a;
  const l = oe({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !s._e.active)
    throw new Error("Pinia destroyed");
  const u = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !Ln && (u.onTrigger = (C) => {
    p ? g = C : p == !1 && !E._hotUpdating && (Array.isArray(g) ? g.push(C) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let p, m, v = [], h = [], g;
  const d = s.state.value[e];
  !o && !d && (process.env.NODE_ENV === "production" || !r) && (s.state.value[e] = {});
  const c = y({});
  let $;
  function T(C) {
    let k;
    p = m = !1, process.env.NODE_ENV !== "production" && (g = []), typeof C == "function" ? (C(s.state.value[e]), k = {
      type: pe.patchFunction,
      storeId: e,
      events: g
    }) : (Pt(s.state.value[e], C), k = {
      type: pe.patchObject,
      payload: C,
      storeId: e,
      events: g
    });
    const F = $ = Symbol();
    Et().then(() => {
      $ === F && (p = !0);
    }), m = !0, Ve(v, k, s.state.value[e]);
  }
  const j = o ? function() {
    const { state: k } = n, F = k ? k() : {};
    this.$patch((D) => {
      oe(D, F);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : Jn
  );
  function P() {
    a.stop(), v = [], h = [], s._s.delete(e);
  }
  function I(C, k) {
    return function() {
      Xe(s);
      const F = Array.from(arguments), D = [], U = [];
      function vt(se) {
        D.push(se);
      }
      function Ss(se) {
        U.push(se);
      }
      Ve(h, {
        args: F,
        name: C,
        store: E,
        after: vt,
        onError: Ss
      });
      let Ue;
      try {
        Ue = k.apply(this && this.$id === e ? this : E, F);
      } catch (se) {
        throw Ve(U, se), se;
      }
      return Ue instanceof Promise ? Ue.then((se) => (Ve(D, se), se)).catch((se) => (Ve(U, se), Promise.reject(se))) : (Ve(D, Ue), Ue);
    };
  }
  const A = /* @__PURE__ */ ke({
    actions: {},
    getters: {},
    state: [],
    hotState: c
  }), S = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Kt.bind(null, h),
    $patch: T,
    $reset: j,
    $subscribe(C, k = {}) {
      const F = Kt(v, C, k.detached, () => D()), D = a.run(() => me(() => s.state.value[e], (U) => {
        (k.flush === "sync" ? m : p) && C({
          storeId: e,
          type: pe.direct,
          events: g
        }, U);
      }, oe({}, u, k)));
      return F;
    },
    $dispose: P
  }, E = xt(process.env.NODE_ENV !== "production" || Ge ? oe(
    {
      _hmrPayload: A,
      _customProperties: ke(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    S
    // must be added later
    // setupStore
  ) : S);
  s._s.set(e, E);
  const H = s._a && s._a.runWithContext || pr, ee = s._e.run(() => (a = Tn(), H(() => a.run(t))));
  for (const C in ee) {
    const k = ee[C];
    if (Me(k) && !Zt(k) || Dt(k))
      process.env.NODE_ENV !== "production" && r ? et(c.value, C, ht(ee, C)) : o || (d && vr(k) && (Me(k) ? k.value = d[C] : Pt(k, d[C])), s.state.value[e][C] = k), process.env.NODE_ENV !== "production" && A.state.push(C);
    else if (typeof k == "function") {
      const F = process.env.NODE_ENV !== "production" && r ? k : I(C, k);
      ee[C] = F, process.env.NODE_ENV !== "production" && (A.actions[C] = k), l.actions[C] = k;
    } else
      process.env.NODE_ENV !== "production" && Zt(k) && (A.getters[C] = o ? (
        // @ts-expect-error
        n.getters[C]
      ) : k, pt && (ee._getters || // @ts-expect-error: same
      (ee._getters = ke([]))).push(C));
  }
  if (oe(E, ee), oe(Te(E), ee), Object.defineProperty(E, "$state", {
    get: () => process.env.NODE_ENV !== "production" && r ? c.value : s.state.value[e],
    set: (C) => {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error("cannot set hotState");
      T((k) => {
        oe(k, C);
      });
    }
  }), process.env.NODE_ENV !== "production" && (E._hotUpdate = ke((C) => {
    E._hotUpdating = !0, C._hmrPayload.state.forEach((k) => {
      if (k in E.$state) {
        const F = C.$state[k], D = E.$state[k];
        typeof F == "object" && Pe(F) && Pe(D) ? qn(F, D) : C.$state[k] = D;
      }
      et(E, k, ht(C.$state, k));
    }), Object.keys(E.$state).forEach((k) => {
      k in C.$state || gt(E, k);
    }), p = !1, m = !1, s.state.value[e] = ht(C._hmrPayload, "hotState"), m = !0, Et().then(() => {
      p = !0;
    });
    for (const k in C._hmrPayload.actions) {
      const F = C[k];
      et(E, k, I(k, F));
    }
    for (const k in C._hmrPayload.getters) {
      const F = C._hmrPayload.getters[k], D = o ? (
        // special handling of options api
        K(() => (Xe(s), F.call(E, E)))
      ) : F;
      et(E, k, D);
    }
    Object.keys(E._hmrPayload.getters).forEach((k) => {
      k in C._hmrPayload.getters || gt(E, k);
    }), Object.keys(E._hmrPayload.actions).forEach((k) => {
      k in C._hmrPayload.actions || gt(E, k);
    }), E._hmrPayload = C._hmrPayload, E._getters = C._getters, E._hotUpdating = !1;
  })), Ge) {
    const C = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((k) => {
      Object.defineProperty(E, k, oe({ value: E[k] }, C));
    });
  }
  return s._p.forEach((C) => {
    if (Ge) {
      const k = a.run(() => C({
        store: E,
        app: s._a,
        pinia: s,
        options: l
      }));
      Object.keys(k || {}).forEach((F) => E._customProperties.add(F)), oe(E, k);
    } else
      oe(E, a.run(() => C({
        store: E,
        app: s._a,
        pinia: s,
        options: l
      })));
  }), process.env.NODE_ENV !== "production" && E.$state && typeof E.$state == "object" && typeof E.$state.constructor == "function" && !E.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${E.$id}".`), d && o && n.hydrate && n.hydrate(E.$state, d), p = !0, m = !0, E;
}
function Qn(e, t, n) {
  let s, r;
  const o = typeof t == "function";
  if (typeof e == "string")
    s = e, r = o ? n : t;
  else if (r = e, s = e.id, process.env.NODE_ENV !== "production" && typeof s != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function a(l, u) {
    const p = Cs();
    if (l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && We && We._testing ? null : l) || (p ? Ps(Hn, null) : null), l && Xe(l), process.env.NODE_ENV !== "production" && !We)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    l = We, l._s.has(s) || (o ? Tt(s, t, r, l) : en(s, r, l), process.env.NODE_ENV !== "production" && (a._pinia = l));
    const m = l._s.get(s);
    if (process.env.NODE_ENV !== "production" && u) {
      const v = "__hot:" + s, h = o ? Tt(v, t, r, l, !0) : en(v, oe({}, r), l, !0);
      u._hotUpdate(h), delete l.state.value[v], l._s.delete(v);
    }
    if (process.env.NODE_ENV !== "production" && pt) {
      const v = Nt();
      if (v && v.proxy && // avoid adding stores that are just built for hot module replacement
      !u) {
        const h = v.proxy, g = "_pStores" in h ? h._pStores : h._pStores = {};
        g[s] = m;
      }
    }
    return m;
  }
  return a.$id = s, a;
}
const hr = () => ({
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
}), _r = () => ({
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
}), yr = () => "https://img.sdaxia.top/upload/4314c841777e4d20901cd5d04a28e91a.png";
function tt() {
  return () => Promise.resolve([]);
}
function Kn(e) {
  const t = (e == null ? void 0 : e.editorConfig) || { maxLength: 5e3, placeholder: "请输入内容..." }, n = (e == null ? void 0 : e.handleError) || (() => {
  }), s = (e == null ? void 0 : e.fetchPinyin) || tt(), r = (e == null ? void 0 : e.fetchPinyin) || tt(), o = (e == null ? void 0 : e.fetchBgm) || tt(), a = (e == null ? void 0 : e.fetchSpecial) || tt();
  return {
    editorConfig: t,
    handleError: n,
    fetchPinyin: s,
    fetchEnglish: r,
    fetchBgm: o,
    fetchSpecial: a,
    speed: hr,
    pitch: _r,
    demoAvatar: yr
  };
}
const ge = Qn("--editor-config", () => {
  const e = X(), t = X(), n = K(() => e.value), s = K(() => {
    if (t.value)
      return t.value;
    throw Error("请设置GlobalEditorConfig");
  });
  return { editor: n, globalEditConfig: s, setEditor: (a) => {
    e.value = a;
  }, setGlobalEditConfig: (a) => {
    t.value = a ?? Kn();
  } };
}), gr = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => N.getNodeType(r) === "ssml-audio" ? !0 : t(r), s.isVoid = (r) => N.getNodeType(r) === "ssml-audio" ? !0 : n(r), s;
};
function tn(e, t, n, s, r) {
  const o = t === void 0 ? void 0 : t.key;
  return { sel: e, data: t, children: n, text: s, elm: r, key: o };
}
const nn = Array.isArray;
function bt(e) {
  return typeof e == "string" || typeof e == "number" || e instanceof String || e instanceof Number;
}
function Zn(e, t, n) {
  if (e.ns = "http://www.w3.org/2000/svg", n !== "foreignObject" && t !== void 0)
    for (let s = 0; s < t.length; ++s) {
      const r = t[s];
      if (typeof r == "string")
        continue;
      const o = r.data;
      o !== void 0 && Zn(o, r.children, r.sel);
    }
}
function x(e, t, n) {
  let s = {}, r, o, a;
  if (n !== void 0 ? (t !== null && (s = t), nn(n) ? r = n : bt(n) ? o = n.toString() : n && n.sel && (r = [n])) : t != null && (nn(t) ? r = t : bt(t) ? o = t.toString() : t && t.sel ? r = [t] : s = t), r !== void 0)
    for (a = 0; a < r.length; ++a)
      bt(r[a]) && (r[a] = tn(void 0, void 0, void 0, r[a], void 0));
  return e[0] === "s" && e[1] === "v" && e[2] === "g" && (e.length === 3 || e[3] === "." || e[3] === "#") && Zn(s, r, e), tn(e, s, r, o, void 0);
}
var Ne = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function es(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ts = "Expected a function", sn = 0 / 0, br = "[object Symbol]", wr = /^\s+|\s+$/g, xr = /^[-+]0x[0-9a-f]+$/i, Er = /^0b[01]+$/i, $r = /^0o[0-7]+$/i, Sr = parseInt, kr = typeof Ne == "object" && Ne && Ne.Object === Object && Ne, Or = typeof self == "object" && self && self.Object === Object && self, Cr = kr || Or || Function("return this")(), Pr = Object.prototype, Tr = Pr.toString, Ir = Math.max, Vr = Math.min, wt = function() {
  return Cr.Date.now();
};
function Ar(e, t, n) {
  var s, r, o, a, l, u, p = 0, m = !1, v = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(ts);
  t = rn(t) || 0, it(n) && (m = !!n.leading, v = "maxWait" in n, o = v ? Ir(rn(n.maxWait) || 0, t) : o, h = "trailing" in n ? !!n.trailing : h);
  function g(S) {
    var E = s, H = r;
    return s = r = void 0, p = S, a = e.apply(H, E), a;
  }
  function d(S) {
    return p = S, l = setTimeout(T, t), m ? g(S) : a;
  }
  function c(S) {
    var E = S - u, H = S - p, ee = t - E;
    return v ? Vr(ee, o - H) : ee;
  }
  function $(S) {
    var E = S - u, H = S - p;
    return u === void 0 || E >= t || E < 0 || v && H >= o;
  }
  function T() {
    var S = wt();
    if ($(S))
      return j(S);
    l = setTimeout(T, c(S));
  }
  function j(S) {
    return l = void 0, h && s ? g(S) : (s = r = void 0, a);
  }
  function P() {
    l !== void 0 && clearTimeout(l), p = 0, s = u = r = l = void 0;
  }
  function I() {
    return l === void 0 ? a : j(wt());
  }
  function A() {
    var S = wt(), E = $(S);
    if (s = arguments, r = this, u = S, E) {
      if (l === void 0)
        return d(u);
      if (v)
        return l = setTimeout(T, t), g(u);
    }
    return l === void 0 && (l = setTimeout(T, t)), a;
  }
  return A.cancel = P, A.flush = I, A;
}
function Rr(e, t, n) {
  var s = !0, r = !0;
  if (typeof e != "function")
    throw new TypeError(ts);
  return it(n) && (s = "leading" in n ? !!n.leading : s, r = "trailing" in n ? !!n.trailing : r), Ar(e, t, {
    leading: s,
    maxWait: t,
    trailing: r
  });
}
function it(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function Nr(e) {
  return !!e && typeof e == "object";
}
function Dr(e) {
  return typeof e == "symbol" || Nr(e) && Tr.call(e) == br;
}
function rn(e) {
  if (typeof e == "number")
    return e;
  if (Dr(e))
    return sn;
  if (it(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = it(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(wr, "");
  var n = Er.test(e);
  return n || $r.test(e) ? Sr(e.slice(2), n ? 2 : 8) : xr.test(e) ? sn : +e;
}
var Lr = Rr;
const ae = /* @__PURE__ */ es(Lr);
function on(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function Ft(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {}), Object.keys(t).forEach(function(n) {
    typeof e[n] > "u" ? e[n] = t[n] : on(t[n]) && on(e[n]) && Object.keys(t[n]).length > 0 && Ft(e[n], t[n]);
  });
}
var ns = {
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
function Bt() {
  var e = typeof document < "u" ? document : {};
  return Ft(e, ns), e;
}
var Mr = {
  document: ns,
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
function ss() {
  var e = typeof window < "u" ? window : {};
  return Ft(e, Mr), e;
}
function jr(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function It(e) {
  return It = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, It(e);
}
function ut(e, t) {
  return ut = Object.setPrototypeOf || function(s, r) {
    return s.__proto__ = r, s;
  }, ut(e, t);
}
function Hr() {
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
function ot(e, t, n) {
  return Hr() ? ot = Reflect.construct : ot = function(r, o, a) {
    var l = [null];
    l.push.apply(l, o);
    var u = Function.bind.apply(r, l), p = new u();
    return a && ut(p, a.prototype), p;
  }, ot.apply(null, arguments);
}
function Fr(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Vt(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Vt = function(s) {
    if (s === null || !Fr(s))
      return s;
    if (typeof s != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(s))
        return t.get(s);
      t.set(s, r);
    }
    function r() {
      return ot(s, arguments, It(this).constructor);
    }
    return r.prototype = Object.create(s.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ut(r, s);
  }, Vt(e);
}
function Br(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ur(e) {
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
var Oe = /* @__PURE__ */ function(e) {
  jr(t, e);
  function t(n) {
    var s;
    return s = e.call.apply(e, [this].concat(n)) || this, Ur(Br(s)), s;
  }
  return t;
}(/* @__PURE__ */ Vt(Array));
function Ut(e) {
  e === void 0 && (e = []);
  var t = [];
  return e.forEach(function(n) {
    Array.isArray(n) ? t.push.apply(t, Ut(n)) : t.push(n);
  }), t;
}
function zr(e) {
  for (var t = [], n = 0; n < e.length; n += 1)
    t.indexOf(e[n]) === -1 && t.push(e[n]);
  return t;
}
function Wr(e) {
  return e.toLowerCase().replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function Gr(e, t) {
  if (typeof e != "string")
    return [e];
  for (var n = [], s = t.querySelectorAll(e), r = 0; r < s.length; r += 1)
    n.push(s[r]);
  return n;
}
function M(e, t) {
  var n = ss(), s = Bt(), r = [];
  if (!t && e instanceof Oe)
    return e;
  if (!e)
    return new Oe(r);
  if (typeof e == "string") {
    var o = e.trim();
    if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
      var a = "div";
      o.indexOf("<li") === 0 && (a = "ul"), o.indexOf("<tr") === 0 && (a = "tbody"), (o.indexOf("<td") === 0 || o.indexOf("<th") === 0) && (a = "tr"), o.indexOf("<tbody") === 0 && (a = "table"), o.indexOf("<option") === 0 && (a = "select");
      var l = s.createElement(a);
      l.innerHTML = o;
      for (var u = 0; u < l.childNodes.length; u += 1)
        r.push(l.childNodes[u]);
    } else
      r = Gr(e.trim(), t || s);
  } else if (e.nodeType || e === n || e === s)
    r.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof Oe)
      return e;
    r = e;
  }
  return new Oe(zr(r));
}
M.fn = Oe.prototype;
function an() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = Ut(t.map(function(r) {
    return r.split(" ");
  }));
  return this.forEach(function(r) {
    var o;
    (o = r.classList).add.apply(o, s);
  }), this;
}
function ln() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = Ut(t.map(function(r) {
    return r.split(" ");
  }));
  return this.forEach(function(r) {
    var o;
    (o = r.classList).remove.apply(o, s);
  }), this;
}
function un(e, t) {
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
function cn() {
  var e = this[0];
  if (e) {
    var t = {};
    if (e.dataset)
      for (var n in e.dataset)
        t[n] = e.dataset[n];
    else
      for (var s = 0; s < e.attributes.length; s += 1) {
        var r = e.attributes[s];
        r.name.indexOf("data-") >= 0 && (t[Wr(r.name.split("data-")[1])] = r.value);
      }
    for (var o in t)
      t[o] === "false" ? t[o] = !1 : t[o] === "true" ? t[o] = !0 : parseFloat(t[o]) === t[o] * 1 && (t[o] *= 1);
    return t;
  }
}
function dn(e) {
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
function fn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = t[0], r = t[1], o = t[2], a = t[3];
  typeof t[1] == "function" && (s = t[0], o = t[1], a = t[2], r = void 0), a || (a = !1);
  function l(c) {
    var $ = c.target;
    if ($) {
      var T = c.target.dom7EventData || [];
      if (T.indexOf(c) < 0 && T.unshift(c), M($).is(r))
        o.apply($, T);
      else
        for (var j = M($).parents(), P = 0; P < j.length; P += 1)
          M(j[P]).is(r) && o.apply(j[P], T);
    }
  }
  function u(c) {
    var $ = c && c.target ? c.target.dom7EventData || [] : [];
    $.indexOf(c) < 0 && $.unshift(c), o.apply(this, $);
  }
  for (var p = s.split(" "), m, v = 0; v < this.length; v += 1) {
    var h = this[v];
    if (r)
      for (m = 0; m < p.length; m += 1) {
        var d = p[m];
        h.dom7LiveListeners || (h.dom7LiveListeners = {}), h.dom7LiveListeners[d] || (h.dom7LiveListeners[d] = []), h.dom7LiveListeners[d].push({
          listener: o,
          proxyListener: l
        }), h.addEventListener(d, l, a);
      }
    else
      for (m = 0; m < p.length; m += 1) {
        var g = p[m];
        h.dom7Listeners || (h.dom7Listeners = {}), h.dom7Listeners[g] || (h.dom7Listeners[g] = []), h.dom7Listeners[g].push({
          listener: o,
          proxyListener: u
        }), h.addEventListener(g, u, a);
      }
  }
  return this;
}
function pn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = t[0], r = t[1], o = t[2], a = t[3];
  typeof t[1] == "function" && (s = t[0], o = t[1], a = t[2], r = void 0), a || (a = !1);
  for (var l = s.split(" "), u = 0; u < l.length; u += 1)
    for (var p = l[u], m = 0; m < this.length; m += 1) {
      var v = this[m], h = void 0;
      if (!r && v.dom7Listeners ? h = v.dom7Listeners[p] : r && v.dom7LiveListeners && (h = v.dom7LiveListeners[p]), h && h.length)
        for (var g = h.length - 1; g >= 0; g -= 1) {
          var d = h[g];
          o && d.listener === o || o && d.listener && d.listener.dom7proxy && d.listener.dom7proxy === o ? (v.removeEventListener(p, d.proxyListener, a), h.splice(g, 1)) : o || (v.removeEventListener(p, d.proxyListener, a), h.splice(g, 1));
        }
    }
  return this;
}
function mn() {
  for (var e = 0; e < this.length; e += 1)
    this[e].style.display = "none";
  return this;
}
function vn(e) {
  return e ? (this.forEach(function(t, n) {
    e.apply(t, [t, n]);
  }), this) : this;
}
function hn(e) {
  if (typeof e > "u")
    return this[0] ? this[0].innerHTML : null;
  for (var t = 0; t < this.length; t += 1)
    this[t].innerHTML = e;
  return this;
}
function _n(e) {
  var t = ss(), n = Bt(), s = this[0], r, o;
  if (!s || typeof e > "u")
    return !1;
  if (typeof e == "string") {
    if (s.matches)
      return s.matches(e);
    if (s.webkitMatchesSelector)
      return s.webkitMatchesSelector(e);
    if (s.msMatchesSelector)
      return s.msMatchesSelector(e);
    for (r = M(e), o = 0; o < r.length; o += 1)
      if (r[o] === s)
        return !0;
    return !1;
  }
  if (e === n)
    return s === n;
  if (e === t)
    return s === t;
  if (e.nodeType || e instanceof Oe) {
    for (r = e.nodeType ? [e] : e, o = 0; o < r.length; o += 1)
      if (r[o] === s)
        return !0;
    return !1;
  }
  return !1;
}
function yn() {
  for (var e, t = Bt(), n = 0; n < arguments.length; n += 1) {
    e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    for (var s = 0; s < this.length; s += 1)
      if (typeof e == "string") {
        var r = t.createElement("div");
        for (r.innerHTML = e; r.firstChild; )
          this[s].appendChild(r.firstChild);
      } else if (e instanceof Oe)
        for (var o = 0; o < e.length; o += 1)
          this[s].appendChild(e[o]);
      else
        this[s].appendChild(e);
  }
  return this;
}
function gn(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var s = this[n].parentNode; s; )
      e ? M(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
  return M(t);
}
function bn(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var s = this[n].querySelectorAll(e), r = 0; r < s.length; r += 1)
      t.push(s[r]);
  return M(t);
}
function wn(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var s = this[n].children, r = 0; r < s.length; r += 1)
      (!e || M(s[r]).is(e)) && t.push(s[r]);
  return M(t);
}
var Xr = "resize scroll".split(" ");
function rs(e) {
  function t() {
    for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)
      s[r] = arguments[r];
    if (typeof s[0] > "u") {
      for (var o = 0; o < this.length; o += 1)
        Xr.indexOf(e) < 0 && (e in this[o] ? this[o][e]() : M(this[o]).trigger(e));
      return this;
    }
    return this.on.apply(this, [e].concat(s));
  }
  return t;
}
var xn = rs("click"), En = rs("focus");
mn && (M.fn.hide = mn);
yn && (M.fn.append = yn);
xn && (M.fn.click = xn);
fn && (M.fn.on = fn);
pn && (M.fn.off = pn);
En && (M.fn.focus = En);
un && (M.fn.attr = un);
dn && (M.fn.val = dn);
hn && (M.fn.html = hn);
cn && (M.fn.dataset = cn);
an && (M.fn.addClass = an);
ln && (M.fn.removeClass = ln);
wn && (M.fn.children = wn);
vn && (M.fn.each = vn);
bn && (M.fn.find = bn);
_n && (M.fn.is = _n);
gn && (M.fn.parents = gn);
class Yr {
  constructor() {
    Ke(this, "audio");
    Ke(this, "src");
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
const ct = new Yr();
function $n(e) {
  const t = Math.floor(e / 60), n = e % 60, s = String(t).padStart(2, "0"), r = String(n).padStart(2, "0");
  return `${s}:${r}`;
}
const qr = {
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
              click: ae((o) => {
                o.preventDefault(), ct.stop(r);
                const a = N.findPath(n, e);
                B.delete(n, { at: a });
              })
            }
          }),
          x("span.iconfont.icon-play", {
            on: {
              click: ae((o) => {
                o.preventDefault(), ct.play(r);
              })
            }
          }),
          x("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, Jr = {
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
}, Qr = {
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
}, Kr = {
  editorPlugin: gr,
  renderElems: [qr],
  elemsToHtml: [Jr],
  parseElemHtml: [Qr]
}, Zr = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => N.getNodeType(r) === "ssml-break" ? !0 : t(r), s.isVoid = (r) => N.getNodeType(r) === "ssml-break" ? !0 : n(r), s;
}, eo = {
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
                click: ae((r) => {
                  r.preventDefault();
                  const o = N.findPath(n, e);
                  B.delete(n, { at: o });
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
}, to = {
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
}, no = {
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
}, so = {
  editorPlugin: Zr,
  renderElems: [eo],
  elemsToHtml: [to],
  parseElemHtml: [no]
}, ro = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => N.getNodeType(r) === "ssml-emphasis" ? !0 : t(r), s.isVoid = (r) => N.getNodeType(r) === "ssml-emphasis" ? !1 : n(r), s;
}, oo = {
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
              click: ae((r) => {
                r.preventDefault();
                const o = N.findPath(n, e);
                B.unwrapNodes(n, { at: o });
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
}, ao = {
  type: "ssml-emphasis",
  elemToHtml: (e, t) => {
    const { remark: n, level: s } = e;
    return `<span
          data-w-e-type="ssml-emphasis"
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-level="${s}"
        >${t}</span>`;
  }
}, lo = {
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
}, io = {
  editorPlugin: ro,
  renderElems: [oo],
  elemsToHtml: [ao],
  parseElemHtml: [lo]
}, uo = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => N.getNodeType(r) === "ssml-mstts:express-as" ? !0 : t(r), s.isVoid = (r) => N.getNodeType(r) === "ssml-mstts:express-as" ? !1 : n(r), s;
}, co = {
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
              click: ae((r) => {
                r.preventDefault();
                const o = N.findPath(n, e);
                B.unwrapNodes(n, { at: o });
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
}, fo = {
  type: "ssml-mstts:express-as",
  elemToHtml: (e, t) => {
    const { remark: n, style: s, role: r, styledegree: o } = e;
    return `<span
          data-w-e-type="ssml-mstts:express-as"
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-style="${s}"
          data-ow-styledegree="${o}"
          data-ow-role="${r}"
        >${t}</span>`;
  }
}, po = {
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
}, mo = {
  editorPlugin: uo,
  renderElems: [co],
  elemsToHtml: [fo],
  parseElemHtml: [po]
}, vo = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => N.getNodeType(r) === "ssml-p" ? !0 : t(r), s.isVoid = (r) => N.getNodeType(r) === "ssml-p" ? !1 : n(r), s;
}, ho = {
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
              click: ae((r) => {
                r.preventDefault();
                const o = N.findPath(n, e);
                B.unwrapNodes(n, { at: o });
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
}, _o = {
  type: "ssml-p",
  elemToHtml: (e, t) => {
    const { remark: n } = e;
    return `<span
          data-w-e-type="ssml-p"
          data-w-e-is-inline
          data-ow-remark="${n}"
        >${t}</span>`;
  }
}, yo = {
  selector: 'span[data-w-e-type="ssml-p"]',
  parseElemHtml: (e, t) => ({
    type: "ssml-p",
    remark: e.getAttribute("data-ow-remark") || "",
    children: t
  })
}, go = {
  editorPlugin: vo,
  renderElems: [ho],
  elemsToHtml: [_o],
  parseElemHtml: [yo]
}, bo = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => N.getNodeType(r) === "ssml-phoneme" ? !0 : t(r), s.isVoid = (r) => N.getNodeType(r) === "ssml-phoneme" ? !1 : n(r), s;
}, wo = {
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
              click: ae((r) => {
                r.preventDefault();
                const o = N.findPath(n, e);
                B.unwrapNodes(n, { at: o });
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
}, xo = {
  type: "ssml-phoneme",
  elemToHtml: (e, t) => {
    const { remark: n, alphabet: s, ph: r } = e;
    return `<span
          data-w-e-type="ssml-phoneme"
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-alphabet="${s}"
          data-ow-ph="${r}"
        >${t}</span>`;
  }
}, Eo = {
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
}, $o = {
  editorPlugin: bo,
  renderElems: [wo],
  elemsToHtml: [xo],
  parseElemHtml: [Eo]
}, So = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => N.getNodeType(r) === "ssml-prosody" ? !0 : t(r), s.isVoid = (r) => N.getNodeType(r) === "ssml-prosody" ? !1 : n(r), s;
}, ko = {
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
              click: ae((r) => {
                r.preventDefault();
                const o = N.findPath(n, e);
                B.unwrapNodes(n, { at: o });
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
}, Oo = {
  type: "ssml-prosody",
  elemToHtml: (e, t) => {
    const { remark: n, contour: s, pitch: r, range: o, rate: a, volume: l } = e;
    return `<span
          data-w-e-type="ssml-prosody"
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-contour="${s}"
          data-ow-pitch="${r}"
          data-ow-range="${o}"
          data-ow-rate="${a}"
          data-ow-volume="${l}"
        >${t}</span>`;
  }
}, Co = {
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
}, Po = {
  editorPlugin: So,
  renderElems: [ko],
  elemsToHtml: [Oo],
  parseElemHtml: [Co]
}, To = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => N.getNodeType(r) === "ssml-s" ? !0 : t(r), s.isVoid = (r) => N.getNodeType(r) === "ssml-s" ? !1 : n(r), s;
}, Io = {
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
              click: ae((r) => {
                r.preventDefault();
                const o = N.findPath(n, e);
                B.unwrapNodes(n, { at: o });
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
}, Vo = {
  type: "ssml-s",
  elemToHtml: (e, t) => {
    const { remark: n } = e;
    return `<span
          data-w-e-type="ssml-s"
          data-w-e-is-inline
          data-ow-remark="${n}"
        >${t}</span>`;
  }
}, Ao = {
  selector: 'span[data-w-e-type="ssml-s"]',
  parseElemHtml: (e, t) => ({
    type: "ssml-s",
    remark: e.getAttribute("data-ow-remark") || "",
    children: t
  })
}, Ro = {
  editorPlugin: To,
  renderElems: [Io],
  elemsToHtml: [Vo],
  parseElemHtml: [Ao]
}, No = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => N.getNodeType(r) === "ssml-say-as" ? !0 : t(r), s.isVoid = (r) => N.getNodeType(r) === "ssml-say-as" ? !1 : n(r), s;
}, Do = {
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
              click: ae((r) => {
                r.preventDefault();
                const o = N.findPath(n, e);
                B.unwrapNodes(n, { at: o });
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
}, Lo = {
  type: "ssml-say-as",
  elemToHtml: (e, t) => {
    const { remark: n, interpretAs: s, detail: r, format: o } = e;
    return `<span
          data-w-e-type="ssml-say-as"
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-interpretAs="${s}"
          data-ow-detail="${r}"
          data-ow-format="${o}"
        >${t}</span>`;
  }
}, Mo = {
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
}, jo = {
  editorPlugin: No,
  renderElems: [Do],
  elemsToHtml: [Lo],
  parseElemHtml: [Mo]
}, Ho = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => N.getNodeType(r) === "ssml-sub" ? !0 : t(r), s.isVoid = (r) => N.getNodeType(r) === "ssml-sub" ? !1 : n(r), s;
}, Fo = {
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
              click: ae((r) => {
                r.preventDefault();
                const o = N.findPath(n, e);
                B.unwrapNodes(n, { at: o });
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
}, Bo = {
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
}, Uo = {
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
}, zo = {
  editorPlugin: Ho,
  renderElems: [Fo],
  elemsToHtml: [Bo],
  parseElemHtml: [Uo]
}, Wo = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => N.getNodeType(r) === "ssml-voice" ? !0 : t(r), s.isVoid = (r) => N.getNodeType(r) === "ssml-voice" ? !1 : n(r), s;
}, Go = {
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
              click: ae((r) => {
                r.preventDefault();
                const o = N.findPath(n, e);
                B.unwrapNodes(n, { at: o });
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
}, Xo = {
  type: "ssml-voice",
  elemToHtml: (e, t) => {
    const { remark: n, name: s, effect: r } = e;
    return `<span
          data-w-e-type="ssml-voice"
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-name="${s}"
          data-ow-effect="${r}"
        >${t}</span>`;
  }
}, Yo = {
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
}, qo = {
  editorPlugin: Wo,
  renderElems: [Go],
  elemsToHtml: [Xo],
  parseElemHtml: [Yo]
}, Jo = (e) => {
  const {
    deleteBackward: t,
    deleteForward: n,
    insertBreak: s,
    apply: r,
    normalizeNode: o,
    insertText: a,
    insertData: l,
    setFragmentData: u
  } = e, p = e;
  return p.deleteBackward = (m) => {
    t(m);
  }, p.deleteForward = (m) => {
    n(m);
  }, p.insertBreak = () => {
    s();
  }, p.normalizeNode = (m) => {
    console.log("normalizeNode"), o(m);
  }, p.apply = (m) => {
    console.log("apply", JSON.stringify(m)), r(m);
  }, p.insertData = (m) => {
    if (m.types.includes("application/x-slate-fragment"))
      return l(m);
    a(m.getData("text/plain").trim());
  }, p.setFragmentData = (m) => {
    u(m);
    const v = m.getData("text/plain").replaceAll(/[\s]/gi, "");
    m.setData("text/plain", v);
  }, p.insertText = (m) => {
    a(m);
  }, p;
};
function Qo(e) {
  return e.replaceAll(/[&]/gi, "&amp;").replaceAll(/[<]/gi, "&lt;").replaceAll(/[>]/gi, "&gt;");
}
function Ko(e, t) {
  return t ? `<audio src="${e.src}">${t}</audio>` : `<audio src="${e.src}"/>`;
}
function Zo(e) {
  return e.time ? `<break time="${e.time}"/>` : e.strength ? `<break strength="${e.strength}"/>` : "<break/>";
}
function ea(e, t) {
  return e.level ? `<emphasis level="${e.level}">${t}</emphasis>` : `<emphasis>${t}</emphasis>`;
}
function ta(e, t) {
  if (!e.style)
    return t;
  const n = e.role ? ` role="${e.role}"` : "", s = e.styledegree ? ` styledegree="${e.styledegree}"` : "";
  return `<mstts:express-as style="${e.style}"${n}${s}>${t}</mstts:express-as>`;
}
function na(e) {
  if (!e.src)
    return "";
  const t = e.volume ? ` volume="${e.volume}"` : "", n = e.fadein ? ` fadein="${e.fadein}"` : "", s = e.fadeout ? ` fadeout="${e.fadeout}"` : "";
  return `<mstts:backgroundaudio src="${e.src}"${t}${n}${s}/>`;
}
function sa(e) {
  return !e.attrType || !e.value ? "" : `<mstts:silence type="${e.attrType}" value="${e.value}"/>`;
}
function ra(e, t) {
  return `<p>${t}</p>`;
}
function oa(e, t) {
  const n = e.alphabet ? `alphabet="${e.alphabet}"` : "";
  return `<phoneme ph="${e.ph}"${n}>${t}</phoneme>`;
}
function aa(e, t) {
  const n = e.contour ? ` contour="${e.contour}"` : "", s = e.pitch ? ` pitch="${e.pitch}"` : "", r = e.range ? ` range="${e.range}"` : "", o = e.volume ? ` volume="${e.volume}"` : "", a = e.rate ? ` rate="${e.rate}"` : "";
  return `<prosody${n}${s}${r}${o}${a}>${t}</prosody>`;
}
function la(e, t) {
  const n = e.interpretAs ? ` interpret-as="${e.interpretAs}"` : "", s = e.format ? ` format="${e.format}"` : "", r = e.detail ? ` detail="${e.detail}"` : "";
  return `<say-as${n}${s}${r}>${t}</say-as>`;
}
function ia(e, t) {
  return `<s>${t}</s>`;
}
function ua(e, t) {
  return `<sub alias=${e.alias}>${t}</sub>`;
}
function ca(e, t) {
  const n = e.effect ? ` effect="${e.effect}"` : "";
  return `<voice name="${e.name}${n}">${t}</voice>`;
}
function da(e, t) {
  return `<speak
  version="${e.version}"
  xml:lang="${e.xmlLang}"
  xmlns="${e.xmlns}"
  xmlns:mstts="${e["xmlns:mstts"]}"
  xmlns:emo="${e["xmlns:emo"]}"
  >${t}</speak>`;
}
function os(e) {
  if (Vs.isText(e))
    return Qo(e.text);
  if (As.isElement(e)) {
    const t = e.children.map((s) => os(s)).join("");
    switch (N.getNodeType(e)) {
      case "paragraph":
        return `<p>${t}</p>`;
      case "ssml-speak":
        return da(e, t);
      case "ssml-mstts:backgroundaudio":
        return na(e);
      case "ssml-audio":
        return Ko(e, t);
      case "ssml-break":
        return Zo(e);
      case "ssml-emphasis":
        return ea(e, t);
      case "ssml-mstts:express-as":
        return ta(e, t);
      case "ssml-p":
        return ra(e, t);
      case "ssml-phoneme":
        return oa(e, t);
      case "ssml-prosody":
        return aa(e, t);
      case "ssml-s":
        return ia(e, t);
      case "ssml-say-as":
        return la(e, t);
      case "ssml-sub":
        return ua(e, t);
      case "ssml-voice":
        return ca(e, t);
      case "ssml-mstts:silence":
        return sa(e);
      default:
        return t;
    }
  }
  return "";
}
function fa() {
  const { editor: e } = ge();
  if (!e)
    throw Error("没有找到 editor 对象");
  const { rootSpeak: t, rootVoice: n, rootExpressAs: s, rootBackgroundaudio: r } = zt(), o = { ...t, children: [] }, a = { ...r }, l = { ...n, children: [] }, u = { ...s, children: [] }, p = [
    {
      type: "ssml-mstts:silence",
      attrType: "comma-exact",
      value: "50ms",
      remark: "逗号静音",
      children: []
    },
    {
      type: "ssml-mstts:silence",
      attrType: "semicolon-exact",
      value: "100ms",
      remark: "分号静音",
      children: []
    },
    {
      type: "ssml-mstts:silence",
      attrType: "enumerationcomma-exact",
      value: "150ms",
      remark: "顿号静音",
      children: []
    }
  ];
  return o.children.push(a), o.children.push(l), l.children.push(...p), l.children.push(u), u.children = e.children, os(o);
}
const pa = {
  install() {
    re.registerModule(Kr), re.registerModule(so), re.registerModule(io), re.registerModule(mo), re.registerModule(go), re.registerModule($o), re.registerModule(Po), re.registerModule(Ro), re.registerModule(jo), re.registerModule(zo), re.registerModule(qo), re.registerPlugin(Jo);
  }
}, zt = Qn("--editor-ssml", () => {
  const e = Ze({
    type: "ssml-speak",
    version: "1.0",
    xmlLang: "zh-CN",
    xmlns: "http://www.w3.org/2001/10/synthesis",
    "xmlns:mstts": "http://www.w3.org/2001/mstts",
    "xmlns:emo": "http://www.w3.org/2009/10/emotionml",
    remark: "",
    children: []
  }), t = Ze({
    name: "zh-CN-XiaomoNeural",
    type: "ssml-voice",
    remark: "Xiaomo-晓墨",
    effect: "",
    children: []
  }), n = Ze({
    type: "ssml-mstts:backgroundaudio",
    src: "",
    remark: "",
    children: []
  }), s = Ze({
    type: "ssml-mstts:express-as",
    style: "",
    role: "",
    remark: "",
    children: []
  });
  return { rootSpeak: e, rootVoice: t, rootBackgroundaudio: n, rootExpressAs: s };
}), ma = { class: "bar-button-icon" }, va = {
  class: "fw-normal",
  style: { "font-size": "0.85rem" }
}, ha = /* @__PURE__ */ R({
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
        const { editor: r } = ge();
        r && t("click", r);
      }
    };
    return (r, o) => (V(), L("div", {
      class: Ce(["bar-button px-2 py-1", { disabled: r.disabled }]),
      onClick: s,
      onMousedown: o[0] || (o[0] = te(() => {
      }, ["prevent"]))
    }, [
      f("div", ma, [
        f("span", {
          class: Ce(["fs-3 iconfont-moyin", [`moyin-icon_${r.icon}`]])
        }, null, 2)
      ]),
      f("div", va, Q(r.text), 1)
    ], 34));
  }
});
const Z = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, J = /* @__PURE__ */ Z(ha, [["__scopeId", "data-v-7f1d5309"]]);
const Wt = /* @__PURE__ */ R({
  __name: "bar-input",
  props: {
    type: {}
  },
  emits: ["submit"],
  setup(e, { expose: t, emit: n }) {
    const s = y(""), r = y();
    function o() {
      r.value.focus();
    }
    function a() {
      n("submit", s.value), s.value = "";
    }
    return t({
      focus: o
    }), (l, u) => (V(), ne(b(dt), {
      onSubmit: te(a, ["prevent"])
    }, {
      default: _(() => [
        i(b(ft), {
          type: l.type,
          ref_key: "inputRef",
          ref: r,
          modelValue: s.value,
          "onUpdate:modelValue": u[0] || (u[0] = (p) => s.value = p)
        }, null, 8, ["type", "modelValue"])
      ]),
      _: 1
    }, 8, ["onSubmit"]));
  }
});
const _a = /* @__PURE__ */ R({
  __name: "bar-popover",
  props: {
    visible: { type: Boolean },
    trigger: {},
    hideAfter: {},
    width: {}
  },
  emits: ["update:visible"],
  setup(e) {
    return (t, n) => (V(), ne(b(ye), {
      hideAfter: t.hideAfter,
      width: t.width,
      visible: t.visible,
      trigger: t.trigger,
      "onUpdate:visible": n[0] || (n[0] = (s) => t.$emit("update:visible", s))
    }, {
      reference: _(() => [
        _e(t.$slots, "reference")
      ]),
      default: _(() => [
        _e(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["hideAfter", "width", "visible", "trigger"]));
  }
});
function mt(e) {
  return In() ? (Vn(e), !0) : !1;
}
function ue(e) {
  return typeof e == "function" ? e() : b(e);
}
const as = typeof window < "u", ya = (e) => e != null, at = () => {
};
var ga = Object.defineProperty, ba = Object.defineProperties, wa = Object.getOwnPropertyDescriptors, Sn = Object.getOwnPropertySymbols, xa = Object.prototype.hasOwnProperty, Ea = Object.prototype.propertyIsEnumerable, kn = (e, t, n) => t in e ? ga(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, $a = (e, t) => {
  for (var n in t || (t = {}))
    xa.call(t, n) && kn(e, n, t[n]);
  if (Sn)
    for (var n of Sn(t))
      Ea.call(t, n) && kn(e, n, t[n]);
  return e;
}, Sa = (e, t) => ba(e, wa(t));
function ka(e, t = {}) {
  if (!Me(e))
    return $t(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const s in e.value)
    n[s] = Ts(() => ({
      get() {
        return e.value[s];
      },
      set(r) {
        var o;
        if ((o = ue(t.replaceRef)) != null ? o : !0)
          if (Array.isArray(e.value)) {
            const l = [...e.value];
            l[s] = r, e.value = l;
          } else {
            const l = Sa($a({}, e.value), { [s]: r });
            Object.setPrototypeOf(l, Object.getPrototypeOf(e.value)), e.value = l;
          }
        else
          e.value[s] = r;
      }
    }));
  return n;
}
function ls(e, t = !0) {
  Nt() ? He(e) : t ? e() : Et(e);
}
function ce(e) {
  var t;
  const n = ue(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const $e = as ? window : void 0;
function Le(...e) {
  let t, n, s, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, r] = e, t = $e) : [t, n, s, r] = e, !t)
    return at;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const o = [], a = () => {
    o.forEach((m) => m()), o.length = 0;
  }, l = (m, v, h, g) => (m.addEventListener(v, h, g), () => m.removeEventListener(v, h, g)), u = me(
    () => [ce(t), ue(r)],
    ([m, v]) => {
      a(), m && o.push(
        ...n.flatMap((h) => s.map((g) => l(m, h, g, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), p = () => {
    u(), a();
  };
  return mt(p), p;
}
function Oa() {
  const e = y(!1);
  return Nt() && He(() => {
    e.value = !0;
  }), e;
}
function Gt(e) {
  const t = Oa();
  return K(() => (t.value, !!e()));
}
function Ca(e, t = {}) {
  const { window: n = $e } = t, s = Gt(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let r;
  const o = y(!1), a = (p) => {
    o.value = p.matches;
  }, l = () => {
    r && ("removeEventListener" in r ? r.removeEventListener("change", a) : r.removeListener(a));
  }, u = Is(() => {
    s.value && (l(), r = n.matchMedia(ue(e)), "addEventListener" in r ? r.addEventListener("change", a) : r.addListener(a), o.value = r.matches);
  });
  return mt(() => {
    u(), l(), r = void 0;
  }), o;
}
var Pa = Object.defineProperty, Ta = Object.defineProperties, Ia = Object.getOwnPropertyDescriptors, On = Object.getOwnPropertySymbols, Va = Object.prototype.hasOwnProperty, Aa = Object.prototype.propertyIsEnumerable, Cn = (e, t, n) => t in e ? Pa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ra = (e, t) => {
  for (var n in t || (t = {}))
    Va.call(t, n) && Cn(e, n, t[n]);
  if (On)
    for (var n of On(t))
      Aa.call(t, n) && Cn(e, n, t[n]);
  return e;
}, Na = (e, t) => Ta(e, Ia(t));
function Xt(e, t = {}) {
  var n, s;
  const {
    pointerTypes: r,
    preventDefault: o,
    stopPropagation: a,
    exact: l,
    onMove: u,
    onEnd: p,
    onStart: m,
    initialValue: v,
    axis: h = "both",
    draggingElement: g = $e,
    handle: d = e
  } = t, c = y(
    (n = ue(v)) != null ? n : { x: 0, y: 0 }
  ), $ = y(), T = (S) => r ? r.includes(S.pointerType) : !0, j = (S) => {
    ue(o) && S.preventDefault(), ue(a) && S.stopPropagation();
  }, P = (S) => {
    if (!T(S) || ue(l) && S.target !== ue(e))
      return;
    const E = ue(e).getBoundingClientRect(), H = {
      x: S.clientX - E.left,
      y: S.clientY - E.top
    };
    (m == null ? void 0 : m(H, S)) !== !1 && ($.value = H, j(S));
  }, I = (S) => {
    if (!T(S) || !$.value)
      return;
    let { x: E, y: H } = c.value;
    (h === "x" || h === "both") && (E = S.clientX - $.value.x), (h === "y" || h === "both") && (H = S.clientY - $.value.y), c.value = {
      x: E,
      y: H
    }, u == null || u(c.value, S), j(S);
  }, A = (S) => {
    T(S) && $.value && ($.value = void 0, p == null || p(c.value, S), j(S));
  };
  if (as) {
    const S = { capture: (s = t.capture) != null ? s : !0 };
    Le(d, "pointerdown", P, S), Le(g, "pointermove", I, S), Le(g, "pointerup", A, S);
  }
  return Na(Ra({}, ka(c)), {
    position: c,
    isDragging: K(() => !!$.value),
    style: K(
      () => `left:${c.value.x}px;top:${c.value.y}px;`
    )
  });
}
var Pn = Object.getOwnPropertySymbols, Da = Object.prototype.hasOwnProperty, La = Object.prototype.propertyIsEnumerable, Ma = (e, t) => {
  var n = {};
  for (var s in e)
    Da.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && Pn)
    for (var s of Pn(e))
      t.indexOf(s) < 0 && La.call(e, s) && (n[s] = e[s]);
  return n;
};
function is(e, t, n = {}) {
  const s = n, { window: r = $e } = s, o = Ma(s, ["window"]);
  let a;
  const l = Gt(() => r && "ResizeObserver" in r), u = () => {
    a && (a.disconnect(), a = void 0);
  }, p = K(
    () => Array.isArray(e) ? e.map((h) => ce(h)) : [ce(e)]
  ), m = me(
    p,
    (h) => {
      if (u(), l.value && r) {
        a = new ResizeObserver(t);
        for (const g of h)
          g && a.observe(g, o);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), v = () => {
    u(), m();
  };
  return mt(v), {
    isSupported: l,
    stop: v
  };
}
function Je(e, t = {}) {
  const {
    reset: n = !0,
    windowResize: s = !0,
    windowScroll: r = !0,
    immediate: o = !0
  } = t, a = y(0), l = y(0), u = y(0), p = y(0), m = y(0), v = y(0), h = y(0), g = y(0);
  function d() {
    const c = ce(e);
    if (!c) {
      n && (a.value = 0, l.value = 0, u.value = 0, p.value = 0, m.value = 0, v.value = 0, h.value = 0, g.value = 0);
      return;
    }
    const $ = c.getBoundingClientRect();
    a.value = $.height, l.value = $.bottom, u.value = $.left, p.value = $.right, m.value = $.top, v.value = $.width, h.value = $.x, g.value = $.y;
  }
  return is(e, d), me(() => ce(e), (c) => !c && d()), r && Le("scroll", d, { capture: !0, passive: !0 }), s && Le("resize", d, { passive: !0 }), ls(() => {
    o && d();
  }), {
    height: a,
    bottom: l,
    left: u,
    right: p,
    top: m,
    width: v,
    x: h,
    y: g,
    update: d
  };
}
function ja(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: s = $e, box: r = "content-box" } = n, o = K(() => {
    var u, p;
    return (p = (u = ce(e)) == null ? void 0 : u.namespaceURI) == null ? void 0 : p.includes("svg");
  }), a = y(t.width), l = y(t.height);
  return is(
    e,
    ([u]) => {
      const p = r === "border-box" ? u.borderBoxSize : r === "content-box" ? u.contentBoxSize : u.devicePixelContentBoxSize;
      if (s && o.value) {
        const m = ce(e);
        if (m) {
          const v = s.getComputedStyle(m);
          a.value = Number.parseFloat(v.width), l.value = Number.parseFloat(v.height);
        }
      } else if (p) {
        const m = Array.isArray(p) ? p : [p];
        a.value = m.reduce((v, { inlineSize: h }) => v + h, 0), l.value = m.reduce((v, { blockSize: h }) => v + h, 0);
      } else
        a.value = u.contentRect.width, l.value = u.contentRect.height;
    },
    n
  ), me(
    () => ce(e),
    (u) => {
      a.value = u ? t.width : 0, l.value = u ? t.height : 0;
    }
  ), {
    width: a,
    height: l
  };
}
function Ha(e, t, n = {}) {
  const {
    root: s,
    rootMargin: r = "0px",
    threshold: o = 0.1,
    window: a = $e,
    immediate: l = !0
  } = n, u = Gt(() => a && "IntersectionObserver" in a), p = K(() => {
    const d = ue(e);
    return (Array.isArray(d) ? d : [d]).map(ce).filter(ya);
  });
  let m = at;
  const v = y(l), h = u.value ? me(
    () => [p.value, ce(s), v.value],
    ([d, c]) => {
      if (m(), !v.value || !d.length)
        return;
      const $ = new IntersectionObserver(
        t,
        {
          root: ce(c),
          rootMargin: r,
          threshold: o
        }
      );
      d.forEach((T) => T && $.observe(T)), m = () => {
        $.disconnect(), m = at;
      };
    },
    { immediate: l, flush: "post" }
  ) : at, g = () => {
    m(), h(), v.value = !1;
  };
  return mt(g), {
    isSupported: u,
    isActive: v,
    pause() {
      m(), v.value = !1;
    },
    resume() {
      v.value = !0;
    },
    stop: g
  };
}
function Fa(e, { window: t = $e, scrollTarget: n } = {}) {
  const s = y(!1);
  return Ha(
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
function Ba(e = {}) {
  const {
    window: t = $e,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: s = Number.POSITIVE_INFINITY,
    listenOrientation: r = !0,
    includeScrollbar: o = !0
  } = e, a = y(n), l = y(s), u = () => {
    t && (o ? (a.value = t.innerWidth, l.value = t.innerHeight) : (a.value = t.document.documentElement.clientWidth, l.value = t.document.documentElement.clientHeight));
  };
  if (u(), ls(u), Le("resize", u, { passive: !0 }), r) {
    const p = Ca("(orientation: portrait)");
    me(p, () => u());
  }
  return { width: a, height: l };
}
const Ua = { class: "search-content w-100" }, za = { class: "ps-2 w-75" }, Wa = { class: "menu ps-2" }, Ga = { class: "flex flex-row pt-1" }, Xa = {
  class: "content-list overflow-x-hidden overflow-y-auto py-2",
  style: { height: "250px" }
}, Ya = ["onClick"], qa = /* @__PURE__ */ f("span", { class: "iconfont icon-play" }, null, -1), Ja = { class: "ps-2" }, Yt = /* @__PURE__ */ R({
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
    const n = e, s = y(), r = y(""), o = y(""), a = y(""), l = y(n.dataList || []), u = y("first"), p = Fa(s);
    me(p, (g) => {
      g && setTimeout(() => {
        var d;
        (d = s.value) == null || d.focus();
      }, 100);
    }), He(async () => {
      l.value.length || await m();
    });
    async function m() {
      l.value = await n.fetch({
        search: r.value,
        menuKey: u.value,
        scene: o.value,
        style: a.value
      });
    }
    function v(g) {
      u.value = g, m();
    }
    function h(g) {
      t("submit", g);
    }
    return (g, d) => (V(), L("div", Ua, [
      f("div", za, [
        i(b(dt), {
          onSubmit: te(m, ["prevent"])
        }, {
          default: _(() => [
            i(b(ft), {
              ref_key: "searchInputRef",
              ref: s,
              placeholder: "搜索",
              modelValue: r.value,
              "onUpdate:modelValue": d[0] || (d[0] = (c) => r.value = c),
              "suffix-icon": b(Ls)
            }, null, 8, ["modelValue", "suffix-icon"])
          ]),
          _: 1
        }, 8, ["onSubmit"])
      ]),
      f("div", Wa, [
        i(b(Ns), {
          mode: "horizontal",
          "default-active": "first",
          onSelect: d[1] || (d[1] = (c) => v(c))
        }, {
          default: _(() => [
            i(b(_t), { index: "first" }, {
              default: _(() => [
                w(Q(g.menuItemLabel.first), 1)
              ]),
              _: 1
            }),
            i(b(_t), { index: "second" }, {
              default: _(() => [
                w(Q(g.menuItemLabel.second), 1)
              ]),
              _: 1
            }),
            i(b(_t), { index: "last" }, {
              default: _(() => [
                w(Q(g.menuItemLabel.last), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      f("div", Ga, [
        i(b(St), {
          modelValue: o.value,
          "onUpdate:modelValue": d[2] || (d[2] = (c) => o.value = c),
          onChange: m,
          class: "m-1",
          size: "default"
        }, {
          default: _(() => [
            (V(!0), L(fe, null, De(g.scenes, (c) => (V(), ne(b(kt), {
              key: c.value,
              label: c.label,
              value: c.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        i(b(St), {
          modelValue: a.value,
          "onUpdate:modelValue": d[3] || (d[3] = (c) => a.value = c),
          onChange: m,
          class: "m-1",
          size: "default"
        }, {
          default: _(() => [
            (V(!0), L(fe, null, De(g.styles, (c) => (V(), ne(b(kt), {
              key: c.value,
              label: c.label,
              value: c.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      f("ul", Xa, [
        (V(!0), L(fe, null, De(l.value, (c, $) => (V(), L("li", {
          onClick: (T) => h(Te(c)),
          class: "content-list-item clickable ps-2 py-2",
          key: $
        }, [
          qa,
          f("span", Ja, Q(c.label), 1)
        ], 8, Ya))), 128))
      ])
    ]));
  }
});
const Qa = {}, Ka = { class: "content" };
function Za(e, t) {
  return V(), L("div", Ka, [
    _e(e.$slots, "default", {}, void 0, !0)
  ]);
}
const us = /* @__PURE__ */ Z(Qa, [["render", Za], ["__scopeId", "data-v-7beae5b9"]]), el = {}, tl = { class: "bar-wrapper-item" };
function nl(e, t) {
  return V(), L("div", tl, [
    _e(e.$slots, "default")
  ]);
}
const sl = /* @__PURE__ */ Z(el, [["render", nl]]), rl = { class: "bar-wrapper-group" }, ol = { class: "group-items" }, al = /* @__PURE__ */ R({
  __name: "bar-wrapper-group",
  props: {
    divider: {}
  },
  setup(e) {
    return (t, n) => (V(), L("div", rl, [
      f("div", ol, [
        _e(t.$slots, "default", {}, void 0, !0)
      ]),
      f("div", {
        class: Ce(["divider", [t.divider]])
      }, null, 2)
    ]));
  }
});
const Ae = /* @__PURE__ */ Z(al, [["__scopeId", "data-v-3a7abad9"]]);
function ll(e, t) {
  return `left:${e}px;top:${t}px`;
}
function qt(e, t) {
  const { width: n, height: s } = ja(e), { width: r, height: o } = Ba(), a = K(() => ({
    x: r.value - n.value,
    y: o.value - s.value
  }));
  return { style: K(() => {
    const u = t.value.x, p = t.value.y, m = u < 5 ? 5 : u > a.value.x ? a.value.x - 5 : u, v = p < 5 ? 5 : p > a.value.y ? a.value.y - 5 : p;
    return ll(m, v);
  }) };
}
const il = { class: "w-100 d-flex flex-row align-items-center" }, ul = /* @__PURE__ */ R({
  __name: "drag-box",
  props: {
    visible: { type: Boolean },
    initialValue: {}
  },
  emits: ["update:visible", "close"],
  setup(e, { expose: t, emit: n }) {
    const s = e, r = y(), o = y(), a = y(), { position: l } = Xt(o, {
      initialValue: s.initialValue
    }), { style: u } = qt(r, l);
    function p(d) {
      l.value = d;
    }
    t({
      setPosition: p
    }), He(() => {
      window.addEventListener("click", m), window.addEventListener("keydown", g);
    }), Lt(() => {
      window.addEventListener("click", m), window.addEventListener("keydown", g);
    });
    function m(d) {
      v(d) && h();
    }
    function v(d) {
      const c = d.target;
      return !(!r.value || !a.value || a.value.contains(c) || r.value.contains(c));
    }
    function h() {
      n("update:visible", !1), n("close");
    }
    function g(d) {
      d.code === "Escape" && h();
    }
    return (d, c) => (V(), L(fe, null, [
      f("div", {
        ref_key: "referenceRef",
        ref: a
      }, [
        _e(d.$slots, "reference", {}, void 0, !0)
      ], 512),
      (V(), ne(An, { to: "body" }, [
        xe(f("div", {
          ref_key: "boxRef",
          ref: r,
          class: "demotestname card shadow brag-box user-select-none",
          style: Mt([{ position: "fixed" }, b(u)])
        }, [
          f("div", il, [
            f("div", {
              ref_key: "dragRef",
              ref: o,
              class: "w-100",
              style: { height: "40px" }
            }, null, 512),
            f("span", {
              onClick: h,
              class: "btn iconfont icon-close fs-5"
            })
          ]),
          _e(d.$slots, "default", {}, void 0, !0)
        ], 4), [
          [Ee, d.visible]
        ])
      ]))
    ], 64));
  }
});
const Fe = /* @__PURE__ */ Z(ul, [["__scopeId", "data-v-15ec952a"]]), cl = {
  install(e) {
    e.component("BarButton", J), e.component("BarInput", Wt), e.component("BarPopover", _a), e.component("BarSearch", Yt), e.component("BarWrapper", us), e.component("BarWrapperItem", sl), e.component("BarWrapperGroup", Ae), e.component("DragBox", Fe);
  }
}, dl = "wangeditor-error", Y = {
  ERROR: dl
};
class ve {
  constructor(t) {
    Ke(this, "editor");
    this.editor = t;
  }
  getValue() {
    const { selection: t } = this.editor;
    return t == null ? "" : je.string(this.editor, t);
  }
  isDisabled() {
    const { selection: t } = this.editor;
    return t == null ? (this.editor.emit(Y.ERROR, "未选中编辑器"), !0) : !1;
  }
}
class fl extends ve {
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
    if (de.isCollapsed(t))
      return this.editor.emit(Y.ERROR, "请选中文本"), !0;
    const n = this.getValue();
    return n.length != 1 ? !0 : /^[\u4E00-\u9FA5]+$/gi.test(n) ? !1 : (this.editor.emit(Y.ERROR, "选中一个中文字符，并且有不能在其他语句之内"), !0);
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
    B.insertNodes(this.editor, s);
  }
}
const cs = /* @__PURE__ */ R({
  setup() {
    const {
      globalEditConfig: e
    } = ge(), t = X(), n = y([]), s = y(!1);
    function r() {
      s.value || (s.value = !0);
    }
    function o() {
      s.value && (s.value = !1);
    }
    async function a(l) {
      var p;
      if (t.value ?? (t.value = new fl(l)), (p = t.value) != null && p.isDisabled())
        return;
      const u = t.value.getValue();
      if (u ? n.value = await e.fetchPinyin(u) : n.value = [], n.value.length == 0)
        return l.emit(Y.ERROR, "选中的字符没有不是多音字");
      r();
    }
    return () => i(ye, {
      visible: s.value,
      "onUpdate:visible": (l) => s.value = l,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => i(J, {
        text: "多音字",
        icon: "speaker",
        onClick: a
      }, null),
      default: () => i("div", {
        class: "d-flex flex-column"
      }, [n.value.map(({
        label: l,
        value: u
      }) => i("div", {
        key: u,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          t.value && !t.value.isDisabled() && t.value.exec({
            label: l,
            value: u
          }), o();
        },
        onMousedown: te(() => {
        }, ["stop", "prevent"])
      }, [l]))])
    });
  }
});
class pl extends ve {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t ? de.isCollapsed(t) ? (this.editor.emit(Y.ERROR, "请选择多个中文字符或者多个多个英文单词"), !0) : je.string(this.editor, t).length < 2 : !0;
  }
  exec() {
    if (this.isDisabled())
      return;
    const t = this.getValue();
    if (t == null)
      return;
    const n = {
      type: "ssml-prosody",
      rate: "fast",
      remark: "连读",
      children: [{ text: t }]
    };
    B.insertNodes(this.editor, n);
  }
}
const ds = /* @__PURE__ */ R({
  setup() {
    const e = X();
    function t(n) {
      e.value ?? (e.value = new pl(n)), !e.value.isDisabled() && e.value.exec();
    }
    return () => i(J, {
      text: "连读",
      icon: "continuous",
      onClick: t
    }, null);
  }
});
class ml extends ve {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return !t || t == null ? !0 : de.isCollapsed(t) ? (this.editor.emit(Y.ERROR, "请先选择文本"), !0) : !1;
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
      children: [{ text: n }]
    };
    switch (t.value) {
      case "z":
        s.rate = "fast";
        break;
      case "t":
        s.pitch = "+10%";
        break;
      case "z+t":
        s.rate = "fast", s.pitch = "+10%";
        break;
    }
    B.insertNodes(this.editor, s);
  }
}
const vl = [
  { label: "重音", value: "z" },
  { label: "拖音", value: "t" },
  { label: "重音+拖音", value: "z+t" }
], fs = /* @__PURE__ */ R({
  setup() {
    const e = X(), t = y(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    function r(o) {
      e.value ?? (e.value = new ml(o)), !e.value.isDisabled() && n();
    }
    return () => i(ye, {
      visible: t.value,
      "onUpdate:visible": (o) => t.value = o,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => i(J, {
        text: "重音",
        icon: "read",
        onClick: r
      }, null),
      default: () => i("div", {
        class: "d-flex flex-column",
        onMousedown: te(() => {
        }, ["stop", "prevent"])
      }, [vl.map(({
        label: o,
        value: a
      }) => i("div", {
        key: a,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && e.value.exec({
            label: o,
            value: a
          }), s();
        },
        onMousedown: te(() => {
        }, ["stop", "prevent"])
      }, [o]))])
    });
  }
});
class hl extends ve {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    if (!t)
      return !0;
    if (de.isCollapsed(t))
      return this.editor.emit(Y.ERROR, "请选择纯数字"), !0;
    const n = je.string(this.editor, t);
    return n.length <= 0 ? !0 : Number.isNaN(Number(n)) ? (this.editor.emit(Y.ERROR, "请选择纯数字"), !0) : !1;
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
    B.delete(this.editor), B.insertNodes(this.editor, s);
  }
}
const _l = [{
  value: "cardinal",
  label: "读数值"
}, {
  value: "characters",
  label: "读数字"
}, {
  value: "telephone",
  label: "读手机号"
}], ps = /* @__PURE__ */ R({
  setup() {
    const e = X(), t = y(!1);
    function n() {
      t.value = !t.value;
    }
    function s(r) {
      e.value ?? (e.value = new hl(r)), !e.value.isDisabled() && n();
    }
    return () => i(ye, {
      visible: t.value,
      "onUpdate:visible": (r) => t.value = r,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => i(J, {
        text: "数字符号",
        icon: "digital",
        onClick: s
      }, null),
      default: () => i("div", {
        class: "d-flex flex-column"
      }, [_l.map(({
        label: r,
        value: o
      }) => i("div", {
        key: o,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && e.value.exec({
            label: r,
            value: o
          }), n();
        },
        onMousedown: te(() => {
        }, ["stop", "prevent"])
      }, [r]))])
    });
  }
});
class yl extends ve {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t == null ? !0 : de.isCollapsed(t) ? (this.editor.emit(Y.ERROR, "选中一个中文字符，并且有不能在其他语句之内"), !0) : this.getValue().length <= 0;
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
    B.insertNodes(this.editor, s);
  }
}
const ms = /* @__PURE__ */ R({
  setup() {
    const e = X(), t = y(), n = y(!1);
    function s() {
      n.value || (n.value = !0);
    }
    function r() {
      n.value && (n.value = !1);
    }
    async function o(l) {
      e.value ?? (e.value = new yl(l)), !e.value.isDisabled() && (s(), t.value.focus());
    }
    function a(l) {
      var u;
      r(), l && ((u = e.value) == null || u.exec({
        value: l,
        label: l
      }));
    }
    return () => i(ye, {
      visible: n.value,
      "onUpdate:visible": (l) => n.value = l,
      trigger: "contextmenu",
      placement: "right-end",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => i(J, {
        text: "别名",
        icon: "alias",
        onClick: o
      }, null),
      default: () => i(Wt, {
        ref: t,
        onSubmit: a
      }, null)
    });
  }
});
function gl(e) {
  const { selection: t } = e;
  if (t) {
    const [n, s] = de.edges(t), r = je.range(e, n, s), o = je.string(e, r), a = o.trimEnd();
    if (a !== o) {
      const l = o.length - a.length, u = { ...s, offset: s.offset - l }, p = { ...t, anchor: n, focus: u };
      B.select(e, p);
    }
  }
}
class bl extends ve {
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
    if (de.isCollapsed(t))
      return this.editor.emit(Y.ERROR, "请选择英文单词"), !0;
    const n = je.string(this.editor, t);
    return n.length <= 0 ? !0 : /^[A-Za-z]+$/gi.test(n) ? !1 : (this.editor.emit(Y.ERROR, "请选择英文单词"), !0);
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
    B.insertNodes(this.editor, s);
  }
}
const vs = /* @__PURE__ */ R({
  setup() {
    const {
      globalEditConfig: e
    } = ge(), t = X(), n = y([]), s = y(!1);
    function r() {
      s.value || (s.value = !0);
    }
    function o() {
      s.value && (s.value = !1);
    }
    async function a(l) {
      if (t.value ?? (t.value = new bl(l)), gl(l), t.value.isDisabled())
        return;
      const u = t.value.getValue();
      if (u) {
        if (n.value = await e.fetchEnglish(u), n.value.length <= 0)
          return l.emit(Y.ERROR, "找不到单词的音标");
        r();
      }
    }
    return () => i(ye, {
      visible: s.value,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => i(J, {
        text: "音标",
        icon: "english",
        onClick: a
      }, null),
      default: () => i("div", {
        class: "d-flex flex-column"
      }, [n.value.map(({
        label: l,
        value: u
      }) => i("div", {
        key: u,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          t.value && !t.value.isDisabled() && t.value.exec({
            label: l,
            value: u
          }), o();
        },
        onMousedown: te(() => {
        }, ["stop", "prevent"])
      }, [l]))])
    });
  }
});
class wl extends ve {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t == null ? !0 : de.isCollapsed(t) ? (this.editor.emit(Y.ERROR, "请框选要变速的句子"), !0) : !1;
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
    B.insertNodes(this.editor, s);
  }
}
const xl = [
  { value: "0.5", label: "0.5x" },
  { value: "0.55", label: "0.55x" },
  { value: "0.6", label: "0.6x" },
  { value: "0.65", label: "0.65x" },
  { value: "0.7", label: "0.7x" },
  { value: "0.75", label: "0.75x" },
  { value: "0.8", label: "0.8x" },
  { value: "0.85", label: "0.85x" },
  { value: "0.9", label: "0.9x" },
  { value: "0.95", label: "0.95x" },
  { value: "1", label: "1x" },
  { value: "1.05", label: "1.05x" },
  { value: "1.1", label: "1.1x" },
  { value: "1.15", label: "1.15x" },
  { value: "1.2", label: "1.2x" },
  { value: "1.25", label: "1.25x" },
  { value: "1.3", label: "1.3x" },
  { value: "1.35", label: "1.35x" },
  { value: "1.4", label: "1.4x" },
  { value: "1.45", label: "1.45x" },
  { value: "1.5", label: "1.5x" },
  { value: "1.55", label: "1.55x" },
  { value: "1.6", label: "1.6x" },
  { value: "1.65", label: "1.65x" },
  { value: "1.7", label: "1.7x" },
  { value: "1.75", label: "1.75x" },
  { value: "1.8", label: "1.8x" },
  { value: "1.85", label: "1.85x" },
  { value: "1.9", label: "1.9x" },
  { value: "1.95", label: "1.95x" },
  { value: "2", label: "2x" }
], hs = /* @__PURE__ */ R({
  setup() {
    const e = X(), t = y(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    async function r(o) {
      e.value ?? (e.value = new wl(o)), !e.value.isDisabled() && n();
    }
    return () => i(ye, {
      style: {
        padding: "0px"
      },
      visible: t.value,
      "onUpdate:visible": (o) => t.value = o,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => i(J, {
        text: "局部变速",
        icon: "changespeed",
        onClick: r
      }, null),
      default: () => i("div", {
        class: "d-flex flex-column overflow-x-hidden overflow-y-scroll",
        style: "height:15rem"
      }, [xl.map(({
        label: o,
        value: a
      }) => i("div", {
        key: a,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          var l;
          (l = e.value) == null || l.exec({
            label: o,
            value: a
          }), s();
        },
        onMousedown: te(() => {
        }, ["stop", "prevent"])
      }, [o]))])
    });
  }
});
class El extends ve {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t ? de.isExpanded(t) ? (this.editor.emit(Y.ERROR, "不能选中文本"), !0) : !1 : !0;
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
    B.insertNodes(this.editor, n);
  }
}
const $l = [{
  value: "weak",
  label: "短"
}, {
  value: "medium",
  label: "中"
}, {
  value: "strong",
  label: "长"
}], _s = /* @__PURE__ */ R({
  setup() {
    const e = X(), t = y(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    function r(o) {
      e.value ?? (e.value = new El(o)), !e.value.isDisabled() && n();
    }
    return () => i(ye, {
      visible: t.value,
      "onUpdate:visible": (o) => t.value = o,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => i(J, {
        text: "停顿调节",
        icon: "rhythm",
        onClick: r
      }, null),
      default: () => i("div", {
        class: "d-flex flex-column"
      }, [$l.map(({
        label: o,
        value: a
      }) => i("div", {
        key: a,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          e.value && !e.value.isDisabled() && e.value.exec({
            label: o,
            value: a
          }), s();
        },
        onMousedown: te(() => {
        }, ["stop", "prevent"])
      }, [o]))])
    });
  }
});
class Sl extends ve {
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
    return t ? de.isExpanded(t) ? (this.editor.emit(Y.ERROR, "不能框选文字"), !0) : !1 : !0;
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
    B.insertNodes(this.editor, s);
  }
}
const ys = /* @__PURE__ */ R({
  __name: "special-menu",
  setup(e) {
    const t = y(), n = y(), s = X(), { globalEditConfig: r } = ge(), o = y(!1), a = { first: "默认音效", second: "自定义音效", last: "最近音效" }, l = [
      { value: "", label: "全部场景" },
      { value: "2", label: "场景2" },
      { value: "3", label: "场景3" }
    ], u = [
      { value: "", label: "全部风格" },
      { value: "2", label: "风格2" },
      { value: "3", label: "风格3" }
    ], { x: p, y: m, height: v } = Je(n), h = (d) => {
      s.value ?? (s.value = new Sl(d)), !s.value.isDisabled() && (t.value.setPosition({
        x: p.value - 200,
        y: m.value + v.value
      }), o.value = !0);
    };
    function g(d) {
      var c;
      (c = s.value) == null || c.restoreSelection(), s.value && !s.value.isDisabled() && s.value.exec(d), o.value = !1;
    }
    return (d, c) => (V(), ne(b(Fe), {
      ref_key: "dragRef",
      ref: t,
      visible: o.value,
      "onUpdate:visible": c[0] || (c[0] = ($) => o.value = $)
    }, {
      reference: _(() => [
        i(b(J), {
          ref_key: "menuRef",
          ref: n,
          text: "音效",
          icon: "special",
          onClick: h
        }, null, 512)
      ]),
      default: _(() => [
        i(b(Yt), {
          menuItemLabel: a,
          scenes: l,
          styles: u,
          fetch: b(r).fetchSpecial,
          onSubmit: g
        }, null, 8, ["fetch"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
class kl extends ve {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t ? de.isExpanded(t) ? (this.editor.emit(Y.ERROR, "不能选中文本"), !0) : !1 : !0;
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
    B.insertNodes(this.editor, n);
  }
}
const Ol = [{
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
}], gs = /* @__PURE__ */ R({
  setup() {
    const e = X(), t = y(!1), n = y();
    function s() {
      t.value || (t.value = !0);
    }
    function r() {
      t.value && (t.value = !1);
    }
    function o(l) {
      e.value ?? (e.value = new kl(l)), !e.value.isDisabled() && (s(), n.value.focus());
    }
    function a(l) {
      var u;
      r(), l && ((u = e.value) == null || u.exec({
        value: l,
        label: l
      }));
    }
    return () => i(ye, {
      visible: t.value,
      "onUpdate:visible": (l) => t.value = l,
      trigger: "contextmenu",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => i(J, {
        text: "插入静音",
        icon: "mute",
        onClick: o
      }, null),
      default: () => i("div", {
        class: "d-flex flex-column"
      }, [Ol.map(({
        value: l,
        label: u
      }) => i("div", {
        key: l,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => a(l),
        onMousedown: te(() => {
        }, ["stop", "prevent"])
      }, [u])), i(Wt, {
        type: "text",
        ref: n,
        onSubmit: a
      }, null)])
    });
  }
}), bs = /* @__PURE__ */ R({
  __name: "bgm-menu",
  setup(e) {
    const t = y(), n = y(), s = X(), r = y(!1), { globalEditConfig: o } = ge(), a = { first: "默认配乐", second: "自定义配乐", last: "最近配乐" }, l = [
      { value: "", label: "全部场景" },
      { value: "2", label: "场景2" },
      { value: "3", label: "场景3" }
    ], u = [
      { value: "", label: "全部风格" },
      { value: "2", label: "风格2" },
      { value: "3", label: "风格3" }
    ], { x: p, y: m, height: v } = Je(n), h = async (d) => {
      const c = {
        x: p.value - 300,
        y: m.value + v.value
      };
      s.value = d, t.value.setPosition(c), r.value = !0;
    };
    function g(d) {
      const { rootBackgroundaudio: c } = zt();
      c.src = d.value, c.remark = d.label, r.value = !1;
    }
    return (d, c) => (V(), ne(b(Fe), {
      ref_key: "dragRef",
      ref: t,
      visible: r.value,
      "onUpdate:visible": c[0] || (c[0] = ($) => r.value = $)
    }, {
      reference: _(() => [
        i(b(J), {
          ref_key: "menuRef",
          ref: n,
          text: "配乐",
          icon: "bgm",
          onClick: h
        }, null, 512)
      ]),
      default: _(() => [
        i(b(Yt), {
          menuItemLabel: a,
          scenes: l,
          styles: u,
          fetch: b(o).fetchBgm,
          onSubmit: g
        }, null, 8, ["fetch"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), ws = /* @__PURE__ */ R({
  __name: "sensitive-menu",
  setup(e) {
    const t = y(), n = y(), s = X(), r = y(!1), { x: o, y: a, height: l } = Je(n), u = (p) => {
      s.value = p, t.value.setPosition({
        x: o.value - 200,
        y: a.value + l.value
      }), r.value = !0;
    };
    return (p, m) => (V(), ne(b(Fe), {
      ref_key: "dragRef",
      ref: t,
      visible: r.value,
      "onUpdate:visible": m[0] || (m[0] = (v) => r.value = v)
    }, {
      reference: _(() => [
        i(b(J), {
          ref_key: "menuRef",
          ref: n,
          text: "敏感词",
          icon: "sensitive",
          onClick: u
        }, null, 512)
      ]),
      default: _(() => [
        i(ws)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
const Cl = {
  class: "select-list",
  style: { width: "120px" }
}, Pl = {
  class: "text-center d-flex flex-column justify-content-center fs-6",
  style: { height: "60px" }
}, Tl = ["onClick"], Il = /* @__PURE__ */ R({
  __name: "select-list",
  props: {
    modelValue: {},
    dataList: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: n }) {
    const s = e, r = y();
    function o(l) {
      n("update:modelValue", l.value);
    }
    function a() {
      var l;
      if (r.value) {
        for (let u = 0; u < s.dataList.length; u++)
          if (s.dataList[u].value === s.modelValue) {
            (l = r.value.children[u]) == null || l.scrollIntoView({ behavior: "smooth" });
            return;
          }
      }
    }
    return t({
      scrollIntoViewTheItem: a
    }), (l, u) => (V(), L("div", Cl, [
      f("div", Pl, [
        _e(l.$slots, "default", {}, void 0, !0)
      ]),
      f("ul", {
        ref_key: "listRef",
        ref: r,
        class: "text-center w-100 border-start border-top border-bottom border-secondary-subtle overflow-y-auto overflow-x-hidden scrollbar-none",
        style: { height: "180px" }
      }, [
        (V(!0), L(fe, null, De(l.dataList, (p, m) => (V(), L("li", {
          class: Ce(["clickable select-item py-1", { activate: p.value === l.modelValue }]),
          key: m,
          onClick: (v) => o(Te(p))
        }, Q(p.label), 11, Tl))), 128))
      ], 512)
    ]));
  }
});
const ze = /* @__PURE__ */ Z(Il, [["__scopeId", "data-v-efb1399e"]]), Vl = () => {
  const e = [];
  for (let t = 2; t <= 40; t++) {
    const n = (t * 0.05).toFixed(2);
    e.push({ value: n, label: `${n}x` });
  }
  return e;
}, Al = () => {
  const e = [];
  for (let t = -10; t <= 10; t++)
    e.push({ value: t.toString(), label: t.toString() });
  return e;
}, Rl = {
  style: { width: "600px", height: "360px" },
  class: "position-relative px-2 pb-2"
}, Nl = { class: "position-relative" }, Dl = { class: "position-absolute top-0 end-0" }, Ll = /* @__PURE__ */ f("li", null, [
  /* @__PURE__ */ f("span", { class: "text-nowrap" }, "近期使用:")
], -1), Ml = /* @__PURE__ */ f("span", { class: "my-3" }, "角色", -1), jl = /* @__PURE__ */ f("span", { class: "my-3" }, "风格", -1), Hl = /* @__PURE__ */ f("span", { class: "my-3" }, "语速", -1), Fl = /* @__PURE__ */ f("span", { class: "my-3" }, "语调", -1), Bl = { class: "position-absolute bottom-0 end-0 d-flex flex-row justify-content-end me-4 mb-3" }, Ul = /* @__PURE__ */ R({
  __name: "management-content",
  setup(e) {
    const t = y(!1), n = y(""), s = y(), r = y(), o = y(), a = y(), l = y(), u = y(""), p = y(""), m = y(""), v = y(""), h = y(""), g = y(""), d = y([]), c = y([]), $ = y([]), T = y([]), j = y(Vl()), P = y(Al());
    d.value = [
      { label: "全部类型", value: "" },
      { label: "常规", value: "2" },
      { label: "已购", value: "3" },
      { label: "收藏", value: "4" },
      { label: "我的", value: "5" },
      { label: "SVIP", value: "6" },
      { label: "付费", value: "7" }
    ], c.value = d.value, $.value = d.value, T.value = d.value;
    function I() {
    }
    function A() {
    }
    function S() {
      m.value = "", k(s);
    }
    function E() {
      v.value = "", k(r);
    }
    function H() {
      h.value = "1.00", g.value = "0", k(o);
    }
    function ee() {
    }
    function C() {
    }
    async function k(F) {
      console.log(F);
    }
    return (F, D) => (V(), L("div", Rl, [
      i(b(dt), {
        onSubmit: te(I, ["prevent"])
      }, {
        default: _(() => [
          i(b(ft), {
            modelValue: n.value,
            "onUpdate:modelValue": D[0] || (D[0] = (U) => n.value = U),
            placeholder: "请输入名称快速查找配音师"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["onSubmit"]),
      f("div", Nl, [
        f("div", Dl, [
          i(b(ie), {
            size: "small",
            icon: b(Ms),
            onClick: D[1] || (D[1] = () => t.value = !t.value)
          }, null, 8, ["icon"])
        ]),
        f("ul", {
          class: Ce(["d-flex flex-row row-gap-1 column-gap-2 overflow-x-hidden", { "flex-wrap": t.value }])
        }, [
          Ll,
          f("li", null, [
            i(b(be), {
              type: "info",
              closable: ""
            }, {
              default: _(() => [
                w("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          f("li", null, [
            i(b(be), {
              type: "info",
              closable: ""
            }, {
              default: _(() => [
                w("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          f("li", null, [
            i(b(be), {
              type: "info",
              closable: ""
            }, {
              default: _(() => [
                w("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          f("li", null, [
            i(b(be), {
              type: "info",
              closable: ""
            }, {
              default: _(() => [
                w("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          f("li", null, [
            i(b(be), {
              type: "info",
              closable: ""
            }, {
              default: _(() => [
                w("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          f("li", null, [
            i(b(be), {
              type: "info",
              closable: ""
            }, {
              default: _(() => [
                w("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          f("li", null, [
            i(b(be), {
              type: "info",
              closable: ""
            }, {
              default: _(() => [
                w("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ])
        ], 2),
        xe(f("div", {
          class: Ce({ "d-flex flex-row": !t.value })
        }, [
          i(ze, {
            "onUpdate:modelValue": [
              S,
              D[3] || (D[3] = (U) => p.value = U)
            ],
            ref_key: "selSpeakerRef",
            ref: s,
            modelValue: p.value,
            dataList: c.value
          }, {
            default: _(() => [
              i(b(St), {
                onChange: A,
                modelValue: u.value,
                "onUpdate:modelValue": D[2] || (D[2] = (U) => u.value = U)
              }, {
                default: _(() => [
                  (V(!0), L(fe, null, De(d.value, (U, vt) => (V(), ne(b(kt), {
                    value: U.value,
                    label: U.label,
                    key: vt
                  }, null, 8, ["value", "label"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          i(ze, {
            "onUpdate:modelValue": [
              E,
              D[4] || (D[4] = (U) => m.value = U)
            ],
            ref_key: "selRoleRef",
            ref: r,
            modelValue: m.value,
            dataList: $.value
          }, {
            default: _(() => [
              Ml
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          i(ze, {
            "onUpdate:modelValue": [
              H,
              D[5] || (D[5] = (U) => v.value = U)
            ],
            ref_key: "selStyleRef",
            ref: o,
            modelValue: v.value,
            dataList: T.value
          }, {
            default: _(() => [
              jl
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          i(ze, {
            "onUpdate:modelValue": [
              ee,
              D[6] || (D[6] = (U) => h.value = U)
            ],
            ref_key: "selSpeedRef",
            ref: a,
            modelValue: h.value,
            dataList: j.value
          }, {
            default: _(() => [
              Hl
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          i(ze, {
            "onUpdate:modelValue": [
              C,
              D[7] || (D[7] = (U) => g.value = U)
            ],
            ref_key: "selPitchRef",
            ref: l,
            modelValue: g.value,
            dataList: P.value
          }, {
            default: _(() => [
              Fl
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"])
        ], 2), [
          [Ee, !t.value]
        ])
      ]),
      f("div", Bl, [
        xe(i(b(ie), { type: "primary" }, {
          default: _(() => [
            w("确定")
          ]),
          _: 1
        }, 512), [
          [Ee, !t.value]
        ]),
        xe(i(b(ie), { type: "primary" }, {
          default: _(() => [
            w("全部清空")
          ]),
          _: 1
        }, 512), [
          [Ee, t.value]
        ])
      ])
    ]));
  }
}), xs = /* @__PURE__ */ R({
  __name: "management-menu",
  setup(e) {
    const t = y(), n = y(), s = X(), r = y(!1), { x: o, y: a, height: l } = Je(n), u = (m) => {
      const v = {
        x: o.value - 200,
        y: a.value + l.value
      };
      s.value = m, t.value.setPosition(v), r.value = !0;
    };
    function p(m) {
      console.log(m);
    }
    return (m, v) => (V(), ne(b(Fe), {
      ref_key: "dragRef",
      ref: t,
      visible: r.value,
      "onUpdate:visible": v[0] || (v[0] = (h) => r.value = h)
    }, {
      reference: _(() => [
        i(b(J), {
          ref_key: "menuRef",
          ref: n,
          text: "多人配音",
          icon: "management",
          onClick: u
        }, null, 512)
      ]),
      default: _(() => [
        i(Ul, { onSubmit: p })
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), zl = { class: "speaker-item" }, Wl = { class: "speaker-head" }, Gl = ["src"], Xl = { class: "speaker-name" }, Yl = /* @__PURE__ */ R({
  __name: "speaker-item",
  props: {
    name: {},
    img: { default: "https://img.sdaxia.top/upload/4314c841777e4d20901cd5d04a28e91a.png" }
  },
  setup(e) {
    return (t, n) => (V(), L("div", zl, [
      f("div", Wl, [
        f("img", {
          src: t.img,
          class: "rounded-circle",
          style: { height: "40px" }
        }, null, 8, Gl)
      ]),
      f("div", Xl, Q(t.name), 1)
    ]));
  }
});
const z = /* @__PURE__ */ Z(Yl, [["__scopeId", "data-v-c961717f"]]), ql = {
  class: "px-2 py-1",
  style: { width: "410px" }
}, Jl = /* @__PURE__ */ f("p", { class: "text-start text-danger" }, "请在安静的环境中进行录音，以需要转换的风格，读出以下文案", -1), Ql = {
  class: "border border-secondary rounded w-100",
  style: { height: "100px" }
}, Kl = { class: "mt-2" }, Zl = { class: "w-100 d-flex flex-column row-gap-1" }, ei = /* @__PURE__ */ f("button", { class: "btn btn-success" }, "实时录音", -1), ti = /* @__PURE__ */ f("p", {
  class: "mt-2 text-secondary",
  style: { "font-size": "0.5rem" }
}, " 录音内容需要和滑选一致，音频限制60秒，滑选文案限制60个字 ", -1), ni = { class: "audio-upload" }, si = { class: "border rounded-pill border-secondary d-flex flex-row justify-content-between" }, ri = { class: "d-flex flex-row align-items-center" }, oi = /* @__PURE__ */ f("div", null, "图标", -1), ai = /* @__PURE__ */ f("div", null, [
  /* @__PURE__ */ f("div", null, "删除"),
  /* @__PURE__ */ f("button", null, "上传音频")
], -1), li = /* @__PURE__ */ f("template", null, [
  /* @__PURE__ */ f("span", {
    class: "text-secondary",
    style: { "font-size": "0.5rem" }
  }, "点击选择文件"),
  /* @__PURE__ */ f("button", { class: "btn btn-primary" })
], -1), ii = /* @__PURE__ */ f("span", {
  class: "text-secondary",
  style: { "font-size": "0.5rem" }
}, "点击开始录音", -1), ui = /* @__PURE__ */ f("p", null, "选择需要转换的配音师", -1), ci = { class: "speakers-container d-flex flex-row flex-wrap row-gap-1 column-gap-2" }, di = /* @__PURE__ */ f("button", {
  class: "btn btn-primary",
  disabled: ""
}, "完成录音并上传完成后，可选择配音师转换", -1), fi = /* @__PURE__ */ R({
  __name: "conversion-content",
  props: {
    text: {}
  },
  emits: ["submit"],
  setup(e) {
    const t = y(), n = y(), s = y(!1), r = y(!1), o = X();
    function a(m) {
      if (!m.target)
        return;
      const v = m.target.files[0];
      v && (o.value = v, console.log("已选择文件:", v.name));
    }
    function l() {
      var m;
      (m = t.value) == null || m.click();
    }
    function u() {
    }
    function p() {
    }
    return (m, v) => {
      var h;
      return V(), L("div", ql, [
        f("section", null, [
          Jl,
          f("div", Ql, Q(m.text), 1)
        ]),
        xe(f("section", Kl, [
          f("div", Zl, [
            f("input", {
              accept: "audio/*",
              ref_key: "inputFileRef",
              ref: t,
              onChange: a,
              type: "file",
              hidden: ""
            }, null, 544),
            ei,
            f("button", {
              onClick: l,
              class: "btn btn-primary"
            }, "上传录音")
          ]),
          ti
        ], 512), [
          [Ee, !s.value]
        ]),
        xe(f("section", null, [
          f("div", ni, [
            f("div", si, [
              r.value ? (V(), L(fe, { key: 0 }, [
                f("div", ri, [
                  oi,
                  f("div", null, Q((h = n.value) == null ? void 0 : h.name), 1)
                ]),
                ai
              ], 64)) : Rn("", !0),
              li,
              f("template", null, [
                ii,
                f("button", {
                  onClick: u,
                  class: "btn btn-primary"
                }, "开始录音"),
                f("button", {
                  onClick: p,
                  class: "btn btn-primary"
                }, "结束录音")
              ])
            ]),
            f("div", null, [
              ui,
              f("div", ci, [
                i(z, { name: "莫厚渊" }),
                i(z, { name: "莫厚渊" }),
                i(z, { name: "莫厚渊" }),
                i(z, { name: "莫厚渊" }),
                i(z, { name: "莫厚渊" }),
                i(z, { name: "莫厚渊" }),
                i(z, { name: "莫厚渊" }),
                i(z, { name: "莫厚渊" }),
                i(z, { name: "莫厚渊" }),
                i(z, { name: "莫厚渊" }),
                i(z, { name: "莫厚渊" }),
                i(z, { name: "莫厚渊" }),
                i(z, { name: "莫厚渊" }),
                i(z, { name: "莫厚渊" }),
                i(z, { name: "莫厚渊" }),
                i(z, { name: "莫厚渊" }),
                i(z, { name: "莫厚渊" }),
                i(z, { name: "莫厚渊" })
              ])
            ]),
            di
          ])
        ], 512), [
          [Ee, s.value]
        ])
      ]);
    };
  }
}), Es = /* @__PURE__ */ R({
  __name: "conversion-menu",
  setup(e) {
    const t = y(), n = y(), s = X(), r = y(!1), o = y("ttttt"), { x: a, y: l, height: u } = Je(n), p = (v) => {
      const h = {
        x: a.value - 200,
        y: l.value + u.value
      };
      s.value = v, t.value.setPosition(h), r.value = !0;
    };
    function m(v) {
      console.log(v);
    }
    return (v, h) => (V(), ne(b(Fe), {
      ref_key: "dragRef",
      ref: t,
      visible: r.value,
      "onUpdate:visible": h[0] || (h[0] = (g) => r.value = g)
    }, {
      reference: _(() => [
        i(b(J), {
          ref_key: "menuRef",
          ref: n,
          text: "局部变音",
          icon: "conversion",
          onClick: p
        }, null, 512)
      ]),
      default: _(() => [
        i(fi, {
          text: o.value,
          onSubmit: m
        }, null, 8, ["text"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), pi = (e) => (Ye("data-v-d94c0954"), e = e(), qe(), e), mi = { class: "anchor-avatar d-flex flex-column justify-content-center align-items-center" }, vi = ["src"], hi = /* @__PURE__ */ pi(() => /* @__PURE__ */ f("div", { class: "anchor-avatar-name text-white" }, "莫厚渊", -1)), _i = /* @__PURE__ */ R({
  __name: "try-play-circle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = y("https://img.sdaxia.top/upload/4314c841777e4d20901cd5d04a28e91a.png"), s = y(), r = y(0), o = y(0), { position: a } = Xt(s, {
      initialValue: { x: window.innerWidth - 15, y: window.innerHeight / 2 - 15 },
      onStart: (v, h) => m(h.clientX, h.clientY) ? !1 : void 0
    }), { style: l } = qt(s, a);
    function u(v) {
      m(v.clientX, v.clientY) && t("update:visible", !1);
    }
    function p(v) {
      r.value = v.clientX, o.value = v.clientY;
    }
    function m(v, h) {
      return v > r.value - 10 && v < r.value + 10 && h > o.value - 10 && h < o.value + 10;
    }
    return (v, h) => xe((V(), L("div", {
      ref_key: "boxRef",
      ref: s,
      class: "try-play-circel user-select-none rounded-circle overflow-hidden",
      style: Mt([b(l), { position: "fixed" }]),
      onMousedown: p,
      onMouseup: u
    }, [
      f("div", mi, [
        f("img", {
          src: n.value,
          class: "rounded-circle"
        }, null, 8, vi),
        hi
      ])
    ], 36)), [
      [Ee, v.visible]
    ]);
  }
});
const yi = /* @__PURE__ */ Z(_i, [["__scopeId", "data-v-d94c0954"]]), gi = (e) => (Ye("data-v-e8c67559"), e = e(), qe(), e), bi = { class: "anchor-avatar d-flex flex-column align-items-center text-center justify-content-center" }, wi = ["src"], xi = /* @__PURE__ */ gi(() => /* @__PURE__ */ f("div", { class: "anchor-avatar-name text-white" }, "莫厚渊", -1)), Ei = /* @__PURE__ */ R({
  __name: "anchor-avatar",
  setup(e) {
    const t = y("https://img.sdaxia.top/upload/4314c841777e4d20901cd5d04a28e91a.png");
    return (n, s) => (V(), L("div", bi, [
      f("img", {
        src: t.value,
        class: "rounded-circle",
        style: { height: "40px" }
      }, null, 8, wi),
      xi
    ]));
  }
});
const G = /* @__PURE__ */ Z(Ei, [["__scopeId", "data-v-e8c67559"]]), $i = {
  style: { height: "170px" },
  class: "w-100 d-flex flex-row flex-wrap justify-content-start overflow-x-hidden overflow-y-auto scrollbar-none"
}, Si = /* @__PURE__ */ R({
  __name: "anchor-list",
  setup(e) {
    return (t, n) => (V(), L("div", $i, [
      (V(), L(fe, null, De(100, (s, r) => f("div", {
        class: "m-2",
        key: r
      }, [
        i(G)
      ])), 64))
    ]));
  }
}), ki = /* @__PURE__ */ R({
  __name: "tag-item",
  props: {
    isActivate: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (V(), L("div", {
      class: Ce(["tag-item p-2 text-white text-center", [t.isActivate ? "activate" : null]])
    }, [
      _e(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const O = /* @__PURE__ */ Z(ki, [["__scopeId", "data-v-80dc8a64"]]), Oi = { class: "tag-list w-100" }, Ci = {
  class: "w-100 d-flex flex-row border-bottom border-secondary align-items-center",
  style: { height: "40px" }
}, Pi = {
  style: { height: "100px" },
  class: "w-100 d-flex flex-row flex-wrap align-items-start overflow-y-auto overflow-x-hidden scrollbar-none"
}, Ti = /* @__PURE__ */ R({
  __name: "tag-list",
  setup(e) {
    return (t, n) => (V(), L("div", Oi, [
      f("div", Ci, [
        i(O, null, {
          default: _(() => [
            w("全部")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("男声")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("女声")
          ]),
          _: 1
        })
      ]),
      f("div", Pi, [
        i(O, null, {
          default: _(() => [
            w("全部")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("影视")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("情感")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("娱乐")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("快板")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("书单")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("名人")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("角色")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("全部")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("影视")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("情感")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("娱乐")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("快板")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("书单")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("名人")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("角色")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("全部")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("影视")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("情感")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("娱乐")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("快板")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("书单")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("名人")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("角色")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("全部")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("影视")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("情感")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("娱乐")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("快板")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("书单")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("名人")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("角色")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("全部")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("影视")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("情感")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("娱乐")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("快板")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("书单")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("名人")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("角色")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("全部")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("影视")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("情感")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("娱乐")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("快板")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("书单")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("名人")
          ]),
          _: 1
        }),
        i(O, null, {
          default: _(() => [
            w("角色")
          ]),
          _: 1
        })
      ])
    ]));
  }
});
const Qe = (e) => (Ye("data-v-1b5a3a37"), e = e(), qe(), e), Ii = {
  class: "slider-panle w-100 px-3 text-white",
  style: { "font-size": "0.5rem" }
}, Vi = { class: "mt-2 row text-center justify-content-between align-items-center" }, Ai = { class: "col-auto me-auto d-flex flex-row align-items-center" }, Ri = ["src"], Ni = {
  class: "ms-2 d-flex flex-column justify-content-between",
  style: { height: "50px" }
}, Di = /* @__PURE__ */ Qe(() => /* @__PURE__ */ f("div", { class: "d-flex dlex-row column-gap-2 align-items-end" }, [
  /* @__PURE__ */ f("span", { class: "fs-6" }, "魔云猫"),
  /* @__PURE__ */ f("span", { style: { "font-size": "0.5rem" } }, "0.55x")
], -1)), Li = { class: "d-flex flex-row column-gap-2 align-items-center" }, Mi = /* @__PURE__ */ Qe(() => /* @__PURE__ */ f("span", { class: "badge text-bg-primary px-2" }, "24K", -1)), ji = { class: "col-7 d-flex flex-column align-items-end" }, Hi = /* @__PURE__ */ Qe(() => /* @__PURE__ */ f("div", null, "音频时长，请以生成后的为准", -1)), Fi = { class: "mt-1" }, Bi = /* @__PURE__ */ Qe(() => /* @__PURE__ */ f("span", null, "/", -1)), Ui = /* @__PURE__ */ Nn('<div class="role-list mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-2 column-gap-3" data-v-1b5a3a37><div class="rounded-pill px-1 border" data-v-1b5a3a37>女青年(默认)</div><div class="rounded-pill px-1" data-v-1b5a3a37>男孩儿</div><div class="rounded-pill px-1" data-v-1b5a3a37>男青少年</div><div class="rounded-pill px-1" data-v-1b5a3a37>男中年</div><div class="rounded-pill px-1" data-v-1b5a3a37>男孩儿</div><div class="rounded-pill px-1" data-v-1b5a3a37>男青少年</div><div class="rounded-pill px-1" data-v-1b5a3a37>男中年</div><div class="rounded-pill px-1" data-v-1b5a3a37>男孩儿</div><div class="rounded-pill px-1" data-v-1b5a3a37>男孩儿</div><div class="rounded-pill px-1" data-v-1b5a3a37>男中年</div><div class="rounded-pill px-1" data-v-1b5a3a37>男青少年</div><div class="rounded-pill px-1" data-v-1b5a3a37>男青少年</div><div class="rounded-pill px-1" data-v-1b5a3a37>男中年</div></div>', 1), zi = { class: "audio-mood mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-1 column-gap-2" }, Wi = /* @__PURE__ */ Qe(() => /* @__PURE__ */ f("div", { class: "my-3" }, [
  /* @__PURE__ */ f("span", { class: "border rounded-pill p-1" }, "配音师详情")
], -1)), Gi = { class: "slider-box" }, Xi = { class: "slider-box" }, Yi = /* @__PURE__ */ Nn('<ul class="d-flex flex-row gap-3 my-3" data-v-1b5a3a37><li class="rounded-pill px-1 border" data-v-1b5a3a37>常用</li><li class="rounded-pill px-1" data-v-1b5a3a37>已购</li><li class="rounded-pill px-1" data-v-1b5a3a37>收藏</li><li class="rounded-pill px-1" data-v-1b5a3a37>我的</li></ul>', 1), qi = { class: "d-flex flex-row flex-wrap row-gap-2 column-gap-3 mb-3" }, Ji = /* @__PURE__ */ R({
  __name: "slider-panle",
  setup(e) {
    const { globalEditConfig: t } = ge(), n = y(10), s = y(0), r = y([0, 2]), o = y(0), a = y([-10, 10]), l = y(0), u = K(() => $n(n.value)), p = K(() => $n(s.value)), m = xt(t.speed()), v = xt(t.pitch());
    return (h, g) => (V(), L("div", Ii, [
      f("div", Vi, [
        f("div", Ai, [
          f("img", {
            src: b(t).demoAvatar(),
            class: "rounded-circle",
            style: { height: "50px" }
          }, null, 8, Ri),
          f("div", Ni, [
            Di,
            f("div", Li, [
              i(b(Dn), { class: "fs-6" }, {
                default: _(() => [
                  i(b(js))
                ]),
                _: 1
              }),
              Mi
            ])
          ])
        ]),
        f("div", ji, [
          Hi,
          f("div", Fi, [
            f("span", null, Q(p.value), 1),
            Bi,
            f("span", null, Q(u.value), 1)
          ]),
          i(b(yt), {
            max: n.value,
            modelValue: s.value,
            "onUpdate:modelValue": g[0] || (g[0] = (d) => s.value = d),
            size: "small"
          }, null, 8, ["max", "modelValue"])
        ])
      ]),
      Ui,
      f("ul", zi, [
        f("li", null, [
          i(G)
        ]),
        f("li", null, [
          i(G)
        ]),
        f("li", null, [
          i(G)
        ]),
        f("li", null, [
          i(G)
        ]),
        f("li", null, [
          i(G)
        ]),
        f("li", null, [
          i(G)
        ])
      ]),
      Wi,
      f("div", Gi, [
        f("div", null, [
          f("span", null, "语速：" + Q(o.value) + "x", 1)
        ]),
        i(b(yt), {
          modelValue: o.value,
          "onUpdate:modelValue": g[1] || (g[1] = (d) => o.value = d),
          min: r.value[0],
          max: r.value[1],
          step: 0.05,
          marks: m
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      f("div", Xi, [
        f("div", null, [
          f("span", null, "语调：" + Q(l.value), 1)
        ]),
        i(b(yt), {
          modelValue: l.value,
          "onUpdate:modelValue": g[2] || (g[2] = (d) => l.value = d),
          min: a.value[0],
          max: a.value[1],
          step: 0.2,
          marks: v
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      f("div", null, [
        Yi,
        f("ul", qi, [
          f("li", null, [
            i(G)
          ]),
          f("li", null, [
            i(G)
          ]),
          f("li", null, [
            i(G)
          ]),
          f("li", null, [
            i(G)
          ]),
          f("li", null, [
            i(G)
          ]),
          f("li", null, [
            i(G)
          ]),
          f("li", null, [
            i(G)
          ]),
          f("li", null, [
            i(G)
          ]),
          f("li", null, [
            i(G)
          ]),
          f("li", null, [
            i(G)
          ])
        ])
      ])
    ]));
  }
});
const Qi = /* @__PURE__ */ Z(Ji, [["__scopeId", "data-v-1b5a3a37"]]), Ki = (e) => (Ye("data-v-9db29a03"), e = e(), qe(), e), Zi = { class: "box ms-2" }, eu = { class: "try-play-header text-center d-flex flex-row justify-content-between" }, tu = { class: "try-play-body d-flex flex-row" }, nu = { class: "try-play-left w-50 border-right border-secondary" }, su = { class: "pe-1" }, ru = { class: "type-list d-flex flex-row border-bottom border-secondary" }, ou = /* @__PURE__ */ Ki(() => /* @__PURE__ */ f("div", { class: "py-1 border-top border-secondary" }, null, -1)), au = { class: "try-play-right w-50 border-start rounded border-top border-secondary overflow-x-hidden overflow-y-auto scrollbar-none" }, lu = /* @__PURE__ */ R({
  __name: "try-play-panle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = e, s = y(), r = y(""), o = y(), a = y();
    He(() => {
      window.addEventListener("keydown", l);
    }), Lt(() => {
      window.addEventListener("keydown", l);
    }), me(
      () => n.visible,
      (h) => {
        h && setTimeout(() => {
          v();
        }, 200);
      }
    );
    function l(h) {
      h.code === "Escape" && n.visible && m();
    }
    const { position: u } = Xt(a, {
      initialValue: { x: 100, y: 100 }
    }), { style: p } = qt(o, u);
    function m() {
      t("update:visible", !1);
    }
    function v() {
      var h;
      (h = s.value) == null || h.focus();
    }
    return (h, g) => xe((V(), L("div", {
      ref_key: "boxRef",
      ref: o,
      style: Mt([b(p), { position: "fixed" }]),
      class: "try-play user-select-none card z-3 shadow"
    }, [
      f("div", Zi, [
        f("div", eu, [
          f("div", {
            ref_key: "handleRef",
            ref: a,
            class: "col-11 try-play-move"
          }, null, 512),
          f("div", {
            onClick: m,
            class: "col-1 try-play-menu-close"
          }, [
            i(b(Dn), { color: "white" }, {
              default: _(() => [
                i(b(Hs))
              ]),
              _: 1
            })
          ])
        ]),
        f("div", tu, [
          f("div", nu, [
            f("div", su, [
              i(b(dt), {
                onSubmit: g[1] || (g[1] = te(() => {
                }, ["prevent"]))
              }, {
                default: _(() => [
                  i(b(ft), {
                    "input-style": {},
                    ref_key: "searchInputRef",
                    ref: s,
                    modelValue: r.value,
                    "onUpdate:modelValue": g[0] || (g[0] = (d) => r.value = d),
                    placeholder: "输入名称搜索"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            f("div", ru, [
              i(O, null, {
                default: _(() => [
                  w("热榜")
                ]),
                _: 1
              }),
              i(O, null, {
                default: _(() => [
                  w("SVIP")
                ]),
                _: 1
              }),
              i(O, null, {
                default: _(() => [
                  w("付费")
                ]),
                _: 1
              })
            ]),
            i(Ti),
            ou,
            i(Si)
          ]),
          f("div", au, [
            i(Qi)
          ])
        ])
      ])
    ], 4)), [
      [Ee, h.visible]
    ]);
  }
});
const iu = /* @__PURE__ */ Z(lu, [["__scopeId", "data-v-9db29a03"]]), $s = /* @__PURE__ */ R({
  __name: "try-play",
  setup(e) {
    const t = y(!0);
    function n(s) {
      s || (t.value = !0);
    }
    return (s, r) => (V(), ne(An, { to: "body" }, [
      i(yi, {
        visible: t.value,
        "onUpdate:visible": r[0] || (r[0] = (o) => t.value = o)
      }, null, 8, ["visible"]),
      i(iu, {
        visible: !t.value,
        "onUpdate:visible": n
      }, null, 8, ["visible"])
    ]));
  }
});
const uu = {
  install: (e) => {
    e.component("PinyinMenu", cs), e.component("ContinuousMenu", ds), e.component("ReadMenu", fs), e.component("DigitalMenu", ps), e.component("AliasMenu", ms), e.component("EnglishMenu", vs), e.component("ChangespeedMenu", hs), e.component("RhythmMenu", _s), e.component("SpecialMenu", ys), e.component("MuteMenu", gs), e.component("BgmMenu", bs), e.component("SensitiveMenu", ws), e.component("ManagementMenu", xs), e.component("ConversionMenu", Es), e.component("TryPlay", $s);
  }
};
var At = { exports: {} }, Rt = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.ParsingError = void 0;
  class n extends Error {
    constructor(I, A) {
      super(I), this.cause = A;
    }
  }
  t.ParsingError = n;
  let s;
  function r() {
    return u(!1) || h() || v() || m();
  }
  function o() {
    return c(/\s*/), u(!0) || v() || p() || l(!1);
  }
  function a() {
    const P = l(!0), I = [];
    let A, S = o();
    for (; S; ) {
      if (S.node.type === "Element") {
        if (A)
          throw new Error("Found multiple root nodes");
        A = S.node;
      }
      S.excluded || I.push(S.node), S = o();
    }
    if (!A)
      throw new n("Failed to parse XML", "Root Element not found");
    if (s.xml.length !== 0)
      throw new n("Failed to parse XML", "Not Well-Formed XML");
    return {
      declaration: P ? P.node : null,
      root: A,
      children: I
    };
  }
  function l(P) {
    const I = c(P ? /^<\?(xml)\s*/ : /^<\?([\w-:.]+)\s*/);
    if (!I)
      return;
    const A = {
      name: I[1],
      type: "ProcessingInstruction",
      attributes: {}
    };
    for (; !($() || T("?>")); ) {
      const S = g();
      if (S)
        A.attributes[S.name] = S.value;
      else
        return;
    }
    return c(/\?>/), {
      excluded: P ? !1 : s.options.filter(A) === !1,
      node: A
    };
  }
  function u(P) {
    const I = c(/^<([^?!</>\s]+)\s*/);
    if (!I)
      return;
    const A = {
      type: "Element",
      name: I[1],
      attributes: {},
      children: []
    }, S = P ? !1 : s.options.filter(A) === !1;
    for (; !($() || T(">") || T("?>") || T("/>")); ) {
      const H = g();
      if (H)
        A.attributes[H.name] = H.value;
      else
        return;
    }
    if (c(/^\s*\/>/))
      return A.children = null, {
        excluded: S,
        node: A
      };
    c(/\??>/);
    let E = r();
    for (; E; )
      E.excluded || A.children.push(E.node), E = r();
    if (s.options.strictMode) {
      const H = `</${A.name}>`;
      if (s.xml.startsWith(H))
        s.xml = s.xml.slice(H.length);
      else
        throw new n("Failed to parse XML", `Closing tag not matching "${H}"`);
    } else
      c(/^<\/\s*[\w-:.\u00C0-\u00FF]+>/);
    return {
      excluded: S,
      node: A
    };
  }
  function p() {
    const P = c(/^<!DOCTYPE\s+\S+\s+SYSTEM[^>]*>/) || c(/^<!DOCTYPE\s+\S+\s+PUBLIC[^>]*>/) || c(/^<!DOCTYPE\s+\S+\s*\[[^\]]*]>/) || c(/^<!DOCTYPE\s+\S+\s*>/);
    if (P) {
      const I = {
        type: "DocumentType",
        content: P[0]
      };
      return {
        excluded: s.options.filter(I) === !1,
        node: I
      };
    }
  }
  function m() {
    if (s.xml.startsWith("<![CDATA[")) {
      const P = s.xml.indexOf("]]>");
      if (P > -1) {
        const I = P + 3, A = {
          type: "CDATA",
          content: s.xml.substring(0, I)
        };
        return s.xml = s.xml.slice(I), {
          excluded: s.options.filter(A) === !1,
          node: A
        };
      }
    }
  }
  function v() {
    const P = c(/^<!--[\s\S]*?-->/);
    if (P) {
      const I = {
        type: "Comment",
        content: P[0]
      };
      return {
        excluded: s.options.filter(I) === !1,
        node: I
      };
    }
  }
  function h() {
    const P = c(/^([^<]+)/);
    if (P) {
      const I = {
        type: "Text",
        content: P[1]
      };
      return {
        excluded: s.options.filter(I) === !1,
        node: I
      };
    }
  }
  function g() {
    const P = c(/([^=]+)\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)\s*/);
    if (P)
      return {
        name: P[1].trim(),
        value: d(P[2].trim())
      };
  }
  function d(P) {
    return P.replace(/^['"]|['"]$/g, "");
  }
  function c(P) {
    const I = s.xml.match(P);
    if (I)
      return s.xml = s.xml.slice(I[0].length), I;
  }
  function $() {
    return s.xml.length === 0;
  }
  function T(P) {
    return s.xml.indexOf(P) === 0;
  }
  function j(P, I = {}) {
    P = P.trim();
    const A = I.filter || (() => !0);
    return s = {
      xml: P,
      options: Object.assign(Object.assign({}, I), { filter: A, strictMode: I.strictMode === !0 })
    }, a();
  }
  e.exports = j, t.default = j;
})(Rt, Rt.exports);
var cu = Rt.exports;
(function(e, t) {
  var n = Ne && Ne.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const s = n(cu);
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
  function l(d, c, $) {
    if (typeof d.content == "string")
      u(d.content, c, $);
    else if (d.type === "Element")
      m(d, c, $);
    else if (d.type === "ProcessingInstruction")
      h(d, c);
    else
      throw new Error("Unknown node type: " + d.type);
  }
  function u(d, c, $) {
    if (!$) {
      const T = d.trim();
      (c.options.lineSeparator || T.length === 0) && (d = T);
    }
    d.length > 0 && (!$ && c.content.length > 0 && r(c), a(c, d));
  }
  function p(d, c) {
    const $ = "/" + d.join("/"), T = d[d.length - 1];
    return c.includes(T) || c.includes($);
  }
  function m(d, c, $) {
    if (c.path.push(d.name), !$ && c.content.length > 0 && r(c), a(c, "<" + d.name), v(c, d.attributes), d.children === null || c.options.forceSelfClosingEmptyTag && d.children.length === 0) {
      const T = c.options.whiteSpaceAtEndOfSelfclosingTag ? " />" : "/>";
      a(c, T);
    } else if (d.children.length === 0)
      a(c, "></" + d.name + ">");
    else {
      const T = d.children;
      a(c, ">"), c.level++;
      let j = d.attributes["xml:space"] === "preserve", P = !1;
      if (!j && c.options.ignoredPaths && (P = p(c.path, c.options.ignoredPaths), j = P), !j && c.options.collapseContent) {
        let I = !1, A = !1, S = !1;
        T.forEach(function(E, H) {
          E.type === "Text" ? (E.content.includes(`
`) ? (A = !0, E.content = E.content.trim()) : (H === 0 || H === T.length - 1) && E.content.trim().length === 0 && (E.content = ""), E.content.trim().length > 0 && (I = !0)) : E.type === "CDATA" ? I = !0 : S = !0;
        }), I && (!S || !A) && (j = !0);
      }
      T.forEach(function(I) {
        l(I, c, $ || j);
      }), c.level--, !$ && !j && r(c), P && o(c), a(c, "</" + d.name + ">");
    }
    c.path.pop();
  }
  function v(d, c) {
    Object.keys(c).forEach(function($) {
      const T = c[$].replace(/"/g, "&quot;");
      a(d, " " + $ + '="' + T + '"');
    });
  }
  function h(d, c) {
    c.content.length > 0 && r(c), a(c, "<?" + d.name), v(c, d.attributes), a(c, "?>");
  }
  function g(d, c = {}) {
    c.indentation = "indentation" in c ? c.indentation : "    ", c.collapseContent = c.collapseContent === !0, c.lineSeparator = "lineSeparator" in c ? c.lineSeparator : `\r
`, c.whiteSpaceAtEndOfSelfclosingTag = c.whiteSpaceAtEndOfSelfclosingTag === !0, c.throwOnFailure = c.throwOnFailure !== !1;
    try {
      const $ = (0, s.default)(d, { filter: c.filter, strictMode: c.strictMode }), T = { content: "", level: 0, options: c, path: [] };
      return $.declaration && h($.declaration, T), $.children.forEach(function(j) {
        l(j, T, !1);
      }), c.lineSeparator ? T.content.replace(/\r\n/g, `
`).replace(/\n/g, c.lineSeparator) : T.content;
    } catch ($) {
      if (c.throwOnFailure)
        throw $;
      return d;
    }
  }
  g.minify = (d, c = {}) => g(d, Object.assign(Object.assign({}, c), { indentation: "", lineSeparator: "" })), e.exports = g, t.default = g;
})(At, At.exports);
var du = At.exports;
const fu = /* @__PURE__ */ es(du), Be = (e) => (Ye("data-v-27607a6d"), e = e(), qe(), e), pu = { class: "editor-title d-flex flex-row align-item-center justify-content-between" }, mu = { class: "title-wrapper d-flex flex-column justify-content-center ps-3" }, vu = /* @__PURE__ */ Be(() => /* @__PURE__ */ f("div", { class: "title-author pb-1" }, "SSML编辑器", -1)), hu = { class: "author d-flex flex-row align-items-center justify-content-start" }, _u = /* @__PURE__ */ Be(() => /* @__PURE__ */ f("div", null, "未保存", -1)), yu = /* @__PURE__ */ Be(() => /* @__PURE__ */ f("span", { class: "iconfont icon-play font-size-12 p-1" }, null, -1)), gu = /* @__PURE__ */ Be(() => /* @__PURE__ */ f("div", { class: "d-inline-block" }, null, -1)), bu = { class: "operation-wrapper d-flex flex-row justify-content-center align-items-center" }, wu = /* @__PURE__ */ Be(() => /* @__PURE__ */ f("div", { class: "menu-divider" }, null, -1)), xu = /* @__PURE__ */ Be(() => /* @__PURE__ */ f("div", { class: "px-1" }, null, -1)), Eu = {
  class: "ssml-code border border-secondary-subtle rounded-2 px-2",
  style: { "white-space": "pre-wrap", "max-height": "50vh" }
}, $u = { class: "dialog-footer" }, Su = /* @__PURE__ */ R({
  __name: "editor-title",
  setup(e) {
    const t = y(!1), n = y(""), { rootBackgroundaudio: s } = zt(), r = K(() => fu(n.value, {
      indentation: "    ",
      filter: (p) => p.type !== "Comment",
      collapseContent: !1,
      lineSeparator: `
`
    })), o = () => {
      n.value = fa(), t.value = !0;
    }, a = () => {
      s.src && ct.play(s.src);
    }, l = () => {
      ct.stop(s.src), s.src = "", s.remark = "";
    };
    async function u() {
      await navigator.clipboard.writeText(r.value), t.value = !1;
    }
    return (p, m) => (V(), L(fe, null, [
      f("div", pu, [
        f("div", mu, [
          vu,
          f("div", hu, [
            _u,
            b(s).src ? (V(), ne(b(be), {
              key: 0,
              class: "bgm-txt ms-2",
              closable: "",
              size: "small",
              onClick: a,
              onClose: l
            }, {
              default: _(() => [
                yu,
                gu,
                f("span", null, Q(b(s).remark), 1)
              ]),
              _: 1
            })) : Rn("", !0)
          ])
        ]),
        f("div", bu, [
          i(b(ie), {
            type: "primary",
            icon: b(Fs),
            disabled: ""
          }, {
            default: _(() => [
              w("分享")
            ]),
            _: 1
          }, 8, ["icon"]),
          wu,
          i(b(ie), {
            type: "primary",
            onClick: o
          }, {
            default: _(() => [
              w("查看SSML")
            ]),
            _: 1
          }),
          i(b(ie), { disabled: "" }, {
            default: _(() => [
              w("下载音频")
            ]),
            _: 1
          }),
          i(b(ie), { disabled: "" }, {
            default: _(() => [
              w("下载视频")
            ]),
            _: 1
          }),
          i(b(ie), { disabled: "" }, {
            default: _(() => [
              w("下载字幕")
            ]),
            _: 1
          }),
          i(b(ie), { disabled: "" }, {
            default: _(() => [
              w("声音转换")
            ]),
            _: 1
          }),
          xu
        ])
      ]),
      i(b(Ds), {
        modelValue: t.value,
        "onUpdate:modelValue": m[0] || (m[0] = (v) => t.value = v),
        title: "查看SSML",
        width: "80%"
      }, {
        header: _(() => [
          i(b(ie), {
            type: "primary",
            onClick: u
          }, {
            default: _(() => [
              w("复制+关闭")
            ]),
            _: 1
          })
        ]),
        footer: _(() => [
          f("span", $u, [
            i(b(ie), {
              type: "primary",
              onClick: u
            }, {
              default: _(() => [
                w("复制+关闭")
              ]),
              _: 1
            })
          ])
        ]),
        default: _(() => [
          f("pre", Eu, Q(r.value), 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
});
const ku = /* @__PURE__ */ Z(Su, [["__scopeId", "data-v-27607a6d"]]), Ou = /* @__PURE__ */ R({
  __name: "editor-core",
  emits: ["created", "change"],
  setup(e, { emit: t }) {
    const { editor: n, setEditor: s, globalEditConfig: r } = ge(), o = y(null);
    He(() => {
      a();
    }), Lt(() => {
      n == null || n.destroy();
    });
    function a() {
      if (!o.value)
        return;
      const l = Rs({
        selector: o.value,
        mode: "simple",
        config: {
          ...Te(r.editorConfig),
          onCreated(p) {
            t("created", p), p.focus(!0);
          },
          onChange(p) {
            t("change", p);
          }
        }
      });
      s(l), window.editor = l;
      const u = l.getConfig();
      u.hoverbarKeys = void 0, l.on(Y.ERROR, r.handleError);
    }
    return (l, u) => (V(), L("div", {
      ref_key: "boxRef",
      ref: o,
      class: "edit-core",
      style: { height: "70vh", "overflow-y": "hidden" }
    }, null, 512));
  }
}), Cu = { class: "bar-view border-bottom border-1" }, Pu = /* @__PURE__ */ R({
  __name: "bar-view",
  setup(e) {
    return (t, n) => (V(), L(fe, null, [
      f("div", Cu, [
        i(b(us), null, {
          default: _(() => [
            i(b(Ae), { divider: "green" }, {
              default: _(() => [
                i(b(J), {
                  text: "24K高清音质",
                  icon: "play",
                  disabled: ""
                })
              ]),
              _: 1
            }),
            i(b(Ae), { divider: "cyan" }, {
              default: _(() => [
                i(b(cs)),
                i(b(fs)),
                i(b(ps)),
                i(b(ds)),
                i(b(ms)),
                i(b(vs))
              ]),
              _: 1
            }),
            i(b(Ae), { divider: "orange" }, {
              default: _(() => [
                i(b(hs)),
                i(b(xs)),
                i(b(Es))
              ]),
              _: 1
            }),
            i(b(Ae), { divider: "purple" }, {
              default: _(() => [
                i(b(_s)),
                i(b(gs))
              ]),
              _: 1
            }),
            i(b(Ae), { divider: "yellow" }, {
              default: _(() => [
                i(b(ys)),
                i(b(bs))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      i(b($s))
    ], 64));
  }
}), Tu = { class: "editor-view" }, Iu = { class: "editor-box" }, Vu = { class: "editor-core-container shadow pt-1" }, Au = /* @__PURE__ */ R({
  __name: "editor-view",
  emits: ["onCreated", "onChange"],
  setup(e, { emit: t }) {
    const n = (r) => {
      t("onCreated", r);
    }, s = (r) => {
      t("onChange", r);
    };
    return (r, o) => (V(), L("div", Tu, [
      i(ku),
      f("div", Iu, [
        i(Pu),
        f("div", Vu, [
          i(Ou, {
            onChange: s,
            onCreated: n
          })
        ])
      ])
    ]));
  }
});
const Ru = /* @__PURE__ */ Z(Au, [["__scopeId", "data-v-15ef0dbd"]]), Nu = {
  install(e) {
    e.component("EditorView", Ru);
  }
}, Fu = {
  install(e, t) {
    e.use(fr()), e.use(() => {
      const { setGlobalEditConfig: n } = ge();
      n(Kn(t));
    }), e.use(pa), e.use(cl), e.use(uu), e.use(Nu);
  }
};
export {
  Y as WANGEDITOR_EVENT,
  Kn as createGlobalEditorConfig,
  Fu as default
};

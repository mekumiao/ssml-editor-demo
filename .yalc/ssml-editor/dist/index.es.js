var ks = Object.defineProperty;
var Os = (e, t, n) => t in e ? ks(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ee = (e, t, n) => (Os(e, typeof t != "symbol" ? t + "" : t, n), n);
import { effectScope as Tn, ref as y, markRaw as Oe, toRaw as Ie, hasInjectionContext as Cs, inject as Ps, getCurrentInstance as Nt, watch as ve, unref as b, reactive as xt, isRef as je, isReactive as Dt, toRef as ht, nextTick as Et, computed as K, getCurrentScope as In, onScopeDispose as Vn, toRefs as $t, shallowRef as Y, shallowReactive as Ze, defineComponent as R, openBlock as V, createElementBlock as L, normalizeClass as Pe, withModifiers as ne, createElementVNode as d, toDisplayString as Q, createBlock as se, withCtx as _, createVNode as i, renderSlot as ye, customRef as Ts, onMounted as Fe, watchEffect as Is, createTextVNode as w, Fragment as pe, renderList as Le, pushScopeId as Be, popScopeId as Ue, onUnmounted as Lt, Teleport as An, withDirectives as Ee, normalizeStyle as Mt, vShow as $e, createCommentVNode as Rn, createStaticVNode as Nn } from "vue";
import { DomEditor as N, SlateTransforms as B, SlateText as Vs, SlateElement as As, Boot as oe, SlateEditor as He, SlateRange as de, createEditor as Rs } from "@wangeditor/editor";
import { ElForm as dt, ElInput as ft, ElPopover as ge, ElMenu as Ns, ElMenuItem as _t, ElSelect as St, ElOption as kt, ElButton as fe, ElTag as we, ElIcon as Dn, ElSlider as yt, ElDialog as Ds } from "element-plus";
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
let Ve, Ot;
function Gs() {
  var e;
  return Ve !== void 0 || (typeof window < "u" && window.performance ? (Ve = !0, Ot = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Ve = !0, Ot = global.perf_hooks.performance) : Ve = !1), Ve;
}
function Ys() {
  return Gs() ? Ot.now() : Date.now();
}
class Xs {
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
        return Ys();
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
    const a = o ? new Xs(n, r) : null;
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
let Xe;
const Je = (e) => Xe = e, Hn = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Te(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var me;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(me || (me = {}));
const pt = typeof window < "u", qe = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && pt, Jt = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
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
let _e;
function nr() {
  _e || (_e = document.createElement("input"), _e.type = "file", _e.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      _e.onchange = async () => {
        const s = _e.files;
        if (!s)
          return t(null);
        const r = s.item(0);
        return t(r ? { text: await r.text(), file: r } : null);
      }, _e.oncancel = () => t(null), _e.onerror = n, _e.click();
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
function ie(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const Yn = "🍍 Pinia (root)", Ct = "_root";
function rr(e) {
  return Ht(e) ? {
    id: Ct,
    label: Yn
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
    operation: ie(e.type),
    key: ie(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function lr(e) {
  switch (e) {
    case me.direct:
      return "mutation";
    case me.patchFunction:
      return "$patch";
    case me.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let Ne = !0;
const rt = [], ke = "pinia:mutations", q = "pinia", { assign: ir } = Object, lt = (e) => "🍍 " + e;
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
      id: ke,
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
                value: Ie(l.$state),
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
              } catch (v) {
                u[p] = v;
              }
              return u;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((s) => {
      if (s.app === e && s.inspectorId === q) {
        let r = [t];
        r = r.concat(Array.from(t._s.values())), s.rootNodes = (s.filter ? r.filter((o) => "$id" in o ? o.$id.toLowerCase().includes(s.filter.toLowerCase()) : Yn.toLowerCase().includes(s.filter.toLowerCase())) : r).map(rr);
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
        Ht(o) ? a.unshift("state") : (a.length !== 1 || !o._customProperties.has(a[0]) || a[0] in o.$state) && a.unshift("$state"), Ne = !1, s.set(o, a, s.state.value), Ne = !0;
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
        a[0] = "$state", Ne = !1, s.set(o, a, s.state.value), Ne = !0;
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
      const v = Xn++;
      n.addTimelineEvent({
        layerId: ke,
        event: {
          time: s(),
          title: "🛫 " + u,
          subtitle: "start",
          data: {
            store: ie(t.$id),
            action: ie(u),
            args: p
          },
          groupId: v
        }
      }), a((m) => {
        xe = void 0, n.addTimelineEvent({
          layerId: ke,
          event: {
            time: s(),
            title: "🛬 " + u,
            subtitle: "end",
            data: {
              store: ie(t.$id),
              action: ie(u),
              args: p,
              result: m
            },
            groupId: v
          }
        });
      }), l((m) => {
        xe = void 0, n.addTimelineEvent({
          layerId: ke,
          event: {
            time: s(),
            logType: "error",
            title: "💥 " + u,
            subtitle: "end",
            data: {
              store: ie(t.$id),
              action: ie(u),
              args: p,
              error: m
            },
            groupId: v
          }
        });
      });
    }, !0), t._customProperties.forEach((a) => {
      ve(() => b(t[a]), (l, u) => {
        n.notifyComponentUpdate(), n.sendInspectorState(q), Ne && n.addTimelineEvent({
          layerId: ke,
          event: {
            time: s(),
            title: "Change",
            subtitle: a,
            data: {
              newValue: l,
              oldValue: u
            },
            groupId: xe
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: a, type: l }, u) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(q), !Ne)
        return;
      const p = {
        time: s(),
        title: lr(l),
        data: ir({ store: ie(t.$id) }, ar(a)),
        groupId: xe
      };
      l === me.patchFunction ? p.subtitle = "⤵️" : l === me.patchObject ? p.subtitle = "🧩" : a && !Array.isArray(a) && (p.subtitle = a.type), a && (p.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: a
        }
      }), n.addTimelineEvent({
        layerId: ke,
        event: p
      });
    }, { detached: !0, flush: "sync" });
    const r = t._hotUpdate;
    t._hotUpdate = Oe((a) => {
      r(a), n.addTimelineEvent({
        layerId: ke,
        event: {
          time: s(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: ie(t.$id),
            info: ie("HMR update")
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
let Xn = 0, xe;
function Qt(e, t, n) {
  const s = t.reduce((r, o) => (r[o] = Ie(e)[o], r), {});
  for (const r in s)
    e[r] = function() {
      const o = Xn, a = n ? new Proxy(e, {
        get(...u) {
          return xe = o, Reflect.get(...u);
        },
        set(...u) {
          return xe = o, Reflect.set(...u);
        }
      }) : e;
      xe = o;
      const l = s[r].apply(a, arguments);
      return xe = void 0, l;
    };
}
function dr({ app: e, store: t, options: n }) {
  if (t.$id.startsWith("__hot:"))
    return;
  t._isOptionsAPI = !!n.state, Qt(t, Object.keys(n.actions), t._isOptionsAPI);
  const s = t._hotUpdate;
  Ie(t)._hotUpdate = function(r) {
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
  const r = Oe({
    install(o) {
      Je(r), r._a = o, o.provide(Hn, r), o.config.globalProperties.$pinia = r, qe && ur(o, r), s.forEach((a) => n.push(a)), s = [];
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
  return qe && typeof Proxy < "u" && r.use(dr), r;
}
function qn(e, t) {
  for (const n in t) {
    const s = t[n];
    if (!(n in e))
      continue;
    const r = e[n];
    Te(r) && Te(s) && !je(s) && !Dt(s) ? e[n] = qn(r, s) : e[n] = s;
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
function Ae(e, ...t) {
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
    Te(r) && Te(s) && e.hasOwnProperty(n) && !je(s) && !Dt(s) ? e[n] = Pt(r, s) : e[n] = s;
  }
  return e;
}
const mr = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function vr(e) {
  return !Te(e) || !e.hasOwnProperty(mr);
}
const { assign: ae } = Object;
function Zt(e) {
  return !!(je(e) && e.effect);
}
function en(e, t, n, s) {
  const { state: r, actions: o, getters: a } = t, l = n.state.value[e];
  let u;
  function p() {
    !l && (process.env.NODE_ENV === "production" || !s) && (n.state.value[e] = r ? r() : {});
    const v = process.env.NODE_ENV !== "production" && s ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      $t(y(r ? r() : {}).value)
    ) : $t(n.state.value[e]);
    return ae(v, o, Object.keys(a || {}).reduce((m, h) => (process.env.NODE_ENV !== "production" && h in v && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${h}" in store "${e}".`), m[h] = Oe(K(() => {
      Je(n);
      const g = n._s.get(e);
      return a[h].call(g, g);
    })), m), {}));
  }
  return u = Tt(e, p, t, n, s, !0), u;
}
function Tt(e, t, n = {}, s, r, o) {
  let a;
  const l = ae({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !s._e.active)
    throw new Error("Pinia destroyed");
  const u = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !Ln && (u.onTrigger = (C) => {
    p ? g = C : p == !1 && !E._hotUpdating && (Array.isArray(g) ? g.push(C) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let p, v, m = [], h = [], g;
  const f = s.state.value[e];
  !o && !f && (process.env.NODE_ENV === "production" || !r) && (s.state.value[e] = {});
  const c = y({});
  let $;
  function T(C) {
    let k;
    p = v = !1, process.env.NODE_ENV !== "production" && (g = []), typeof C == "function" ? (C(s.state.value[e]), k = {
      type: me.patchFunction,
      storeId: e,
      events: g
    }) : (Pt(s.state.value[e], C), k = {
      type: me.patchObject,
      payload: C,
      storeId: e,
      events: g
    });
    const F = $ = Symbol();
    Et().then(() => {
      $ === F && (p = !0);
    }), v = !0, Ae(m, k, s.state.value[e]);
  }
  const j = o ? function() {
    const { state: k } = n, F = k ? k() : {};
    this.$patch((D) => {
      ae(D, F);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : Jn
  );
  function P() {
    a.stop(), m = [], h = [], s._s.delete(e);
  }
  function I(C, k) {
    return function() {
      Je(s);
      const F = Array.from(arguments), D = [], U = [];
      function vt(re) {
        D.push(re);
      }
      function Ss(re) {
        U.push(re);
      }
      Ae(h, {
        args: F,
        name: C,
        store: E,
        after: vt,
        onError: Ss
      });
      let Ge;
      try {
        Ge = k.apply(this && this.$id === e ? this : E, F);
      } catch (re) {
        throw Ae(U, re), re;
      }
      return Ge instanceof Promise ? Ge.then((re) => (Ae(D, re), re)).catch((re) => (Ae(U, re), Promise.reject(re))) : (Ae(D, Ge), Ge);
    };
  }
  const A = /* @__PURE__ */ Oe({
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
      const F = Kt(m, C, k.detached, () => D()), D = a.run(() => ve(() => s.state.value[e], (U) => {
        (k.flush === "sync" ? v : p) && C({
          storeId: e,
          type: me.direct,
          events: g
        }, U);
      }, ae({}, u, k)));
      return F;
    },
    $dispose: P
  }, E = xt(process.env.NODE_ENV !== "production" || qe ? ae(
    {
      _hmrPayload: A,
      _customProperties: Oe(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    S
    // must be added later
    // setupStore
  ) : S);
  s._s.set(e, E);
  const H = s._a && s._a.runWithContext || pr, te = s._e.run(() => (a = Tn(), H(() => a.run(t))));
  for (const C in te) {
    const k = te[C];
    if (je(k) && !Zt(k) || Dt(k))
      process.env.NODE_ENV !== "production" && r ? et(c.value, C, ht(te, C)) : o || (f && vr(k) && (je(k) ? k.value = f[C] : Pt(k, f[C])), s.state.value[e][C] = k), process.env.NODE_ENV !== "production" && A.state.push(C);
    else if (typeof k == "function") {
      const F = process.env.NODE_ENV !== "production" && r ? k : I(C, k);
      te[C] = F, process.env.NODE_ENV !== "production" && (A.actions[C] = k), l.actions[C] = k;
    } else
      process.env.NODE_ENV !== "production" && Zt(k) && (A.getters[C] = o ? (
        // @ts-expect-error
        n.getters[C]
      ) : k, pt && (te._getters || // @ts-expect-error: same
      (te._getters = Oe([]))).push(C));
  }
  if (ae(E, te), ae(Ie(E), te), Object.defineProperty(E, "$state", {
    get: () => process.env.NODE_ENV !== "production" && r ? c.value : s.state.value[e],
    set: (C) => {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error("cannot set hotState");
      T((k) => {
        ae(k, C);
      });
    }
  }), process.env.NODE_ENV !== "production" && (E._hotUpdate = Oe((C) => {
    E._hotUpdating = !0, C._hmrPayload.state.forEach((k) => {
      if (k in E.$state) {
        const F = C.$state[k], D = E.$state[k];
        typeof F == "object" && Te(F) && Te(D) ? qn(F, D) : C.$state[k] = D;
      }
      et(E, k, ht(C.$state, k));
    }), Object.keys(E.$state).forEach((k) => {
      k in C.$state || gt(E, k);
    }), p = !1, v = !1, s.state.value[e] = ht(C._hmrPayload, "hotState"), v = !0, Et().then(() => {
      p = !0;
    });
    for (const k in C._hmrPayload.actions) {
      const F = C[k];
      et(E, k, I(k, F));
    }
    for (const k in C._hmrPayload.getters) {
      const F = C._hmrPayload.getters[k], D = o ? (
        // special handling of options api
        K(() => (Je(s), F.call(E, E)))
      ) : F;
      et(E, k, D);
    }
    Object.keys(E._hmrPayload.getters).forEach((k) => {
      k in C._hmrPayload.getters || gt(E, k);
    }), Object.keys(E._hmrPayload.actions).forEach((k) => {
      k in C._hmrPayload.actions || gt(E, k);
    }), E._hmrPayload = C._hmrPayload, E._getters = C._getters, E._hotUpdating = !1;
  })), qe) {
    const C = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((k) => {
      Object.defineProperty(E, k, ae({ value: E[k] }, C));
    });
  }
  return s._p.forEach((C) => {
    if (qe) {
      const k = a.run(() => C({
        store: E,
        app: s._a,
        pinia: s,
        options: l
      }));
      Object.keys(k || {}).forEach((F) => E._customProperties.add(F)), ae(E, k);
    } else
      ae(E, a.run(() => C({
        store: E,
        app: s._a,
        pinia: s,
        options: l
      })));
  }), process.env.NODE_ENV !== "production" && E.$state && typeof E.$state == "object" && typeof E.$state.constructor == "function" && !E.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${E.$id}".`), f && o && n.hydrate && n.hydrate(E.$state, f), p = !0, v = !0, E;
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
    (process.env.NODE_ENV === "test" && Xe && Xe._testing ? null : l) || (p ? Ps(Hn, null) : null), l && Je(l), process.env.NODE_ENV !== "production" && !Xe)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    l = Xe, l._s.has(s) || (o ? Tt(s, t, r, l) : en(s, r, l), process.env.NODE_ENV !== "production" && (a._pinia = l));
    const v = l._s.get(s);
    if (process.env.NODE_ENV !== "production" && u) {
      const m = "__hot:" + s, h = o ? Tt(m, t, r, l, !0) : en(m, ae({}, r), l, !0);
      u._hotUpdate(h), delete l.state.value[m], l._s.delete(m);
    }
    if (process.env.NODE_ENV !== "production" && pt) {
      const m = Nt();
      if (m && m.proxy && // avoid adding stores that are just built for hot module replacement
      !u) {
        const h = m.proxy, g = "_pStores" in h ? h._pStores : h._pStores = {};
        g[s] = v;
      }
    }
    return v;
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
  }), s = (e == null ? void 0 : e.fetchSpeaker) || tt(), r = (e == null ? void 0 : e.fetchSpeaker) || tt(), o = (e == null ? void 0 : e.fetchBgm) || tt(), a = (e == null ? void 0 : e.fetchSpecial) || tt();
  return {
    editorConfig: t,
    handleError: n,
    fetchSpeaker: s,
    fetchEnglish: r,
    fetchBgm: o,
    fetchSpecial: a,
    speed: hr,
    pitch: _r,
    demoAvatar: yr
  };
}
const be = Qn("--editor-config", () => {
  const e = Y(), t = Y(), n = K(() => e.value), s = K(() => {
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
var De = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function es(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ts = "Expected a function", sn = 0 / 0, br = "[object Symbol]", wr = /^\s+|\s+$/g, xr = /^[-+]0x[0-9a-f]+$/i, Er = /^0b[01]+$/i, $r = /^0o[0-7]+$/i, Sr = parseInt, kr = typeof De == "object" && De && De.Object === Object && De, Or = typeof self == "object" && self && self.Object === Object && self, Cr = kr || Or || Function("return this")(), Pr = Object.prototype, Tr = Pr.toString, Ir = Math.max, Vr = Math.min, wt = function() {
  return Cr.Date.now();
};
function Ar(e, t, n) {
  var s, r, o, a, l, u, p = 0, v = !1, m = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(ts);
  t = rn(t) || 0, it(n) && (v = !!n.leading, m = "maxWait" in n, o = m ? Ir(rn(n.maxWait) || 0, t) : o, h = "trailing" in n ? !!n.trailing : h);
  function g(S) {
    var E = s, H = r;
    return s = r = void 0, p = S, a = e.apply(H, E), a;
  }
  function f(S) {
    return p = S, l = setTimeout(T, t), v ? g(S) : a;
  }
  function c(S) {
    var E = S - u, H = S - p, te = t - E;
    return m ? Vr(te, o - H) : te;
  }
  function $(S) {
    var E = S - u, H = S - p;
    return u === void 0 || E >= t || E < 0 || m && H >= o;
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
        return f(u);
      if (m)
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
const le = /* @__PURE__ */ es(Lr);
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
var Ce = /* @__PURE__ */ function(e) {
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
  if (!t && e instanceof Ce)
    return e;
  if (!e)
    return new Ce(r);
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
    if (e instanceof Ce)
      return e;
    r = e;
  }
  return new Ce(zr(r));
}
M.fn = Ce.prototype;
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
  for (var p = s.split(" "), v, m = 0; m < this.length; m += 1) {
    var h = this[m];
    if (r)
      for (v = 0; v < p.length; v += 1) {
        var f = p[v];
        h.dom7LiveListeners || (h.dom7LiveListeners = {}), h.dom7LiveListeners[f] || (h.dom7LiveListeners[f] = []), h.dom7LiveListeners[f].push({
          listener: o,
          proxyListener: l
        }), h.addEventListener(f, l, a);
      }
    else
      for (v = 0; v < p.length; v += 1) {
        var g = p[v];
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
    for (var p = l[u], v = 0; v < this.length; v += 1) {
      var m = this[v], h = void 0;
      if (!r && m.dom7Listeners ? h = m.dom7Listeners[p] : r && m.dom7LiveListeners && (h = m.dom7LiveListeners[p]), h && h.length)
        for (var g = h.length - 1; g >= 0; g -= 1) {
          var f = h[g];
          o && f.listener === o || o && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === o ? (m.removeEventListener(p, f.proxyListener, a), h.splice(g, 1)) : o || (m.removeEventListener(p, f.proxyListener, a), h.splice(g, 1));
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
  if (e.nodeType || e instanceof Ce) {
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
      } else if (e instanceof Ce)
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
var Yr = "resize scroll".split(" ");
function rs(e) {
  function t() {
    for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)
      s[r] = arguments[r];
    if (typeof s[0] > "u") {
      for (var o = 0; o < this.length; o += 1)
        Yr.indexOf(e) < 0 && (e in this[o] ? this[o][e]() : M(this[o]).trigger(e));
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
class Xr {
  constructor() {
    ee(this, "audio");
    ee(this, "src");
    this.audio = null, this.src = null;
  }
  removeAudioElement() {
    this.audio && (document.body.removeChild(this.audio), this.audio = null, this.src = null);
  }
  play(t) {
    this.stop(), this.audio = document.createElement("audio"), this.audio.hidden = !0, this.audio.volume = 50, this.audio.src = t, document.body.appendChild(this.audio), this.audio.play();
  }
  stop(t) {
    t && t !== this.src || this.audio && (this.audio.pause(), this.audio.currentTime = 0, this.removeAudioElement());
  }
}
const ct = new Xr();
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
              click: le((o) => {
                o.preventDefault(), ct.stop(r);
                const a = N.findPath(n, e);
                B.delete(n, { at: a });
              })
            }
          }),
          x("span.iconfont.icon-play", {
            on: {
              click: le((o) => {
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
                click: le((r) => {
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
              click: le((r) => {
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
              click: le((r) => {
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
              click: le((r) => {
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
              click: le((r) => {
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
              click: le((r) => {
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
              click: le((r) => {
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
              click: le((r) => {
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
              click: le((r) => {
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
              click: le((r) => {
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
}, Yo = {
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
}, Xo = {
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
  elemsToHtml: [Yo],
  parseElemHtml: [Xo]
}, Jo = (e) => {
  const { deleteBackward: t, deleteForward: n, insertBreak: s, apply: r, normalizeNode: o, insertText: a } = e, l = e;
  return l.deleteBackward = (u) => {
    t(u);
  }, l.deleteForward = (u) => {
    n(u);
  }, l.insertBreak = () => {
    s();
  }, l.normalizeNode = (u) => {
    o(u);
  }, l.apply = (u) => {
    console.log("apply", JSON.stringify(u)), r(u);
  }, l.insertText = (u) => {
    a(u);
  }, l;
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
  const n = e.role ? ` role="${e.role}"` : "", s = e.styledegree ? ` styledegree="${e.styledegree}"` : "";
  return `<mstts:express-as style="${e.style}"${n}${s}>${t}</mstts:express-as>`;
}
function na(e) {
  if (!e.src)
    return "";
  const t = e.volume ? ` volume="${e.volume}"` : "", n = e.fadein ? ` fadein="${e.fadein}"` : "", s = e.fadeout ? ` fadeout="${e.fadeout}"` : "";
  return `<mstts:backgroundaudio src="${e.src}"${t}${n}${s}/>`;
}
function sa(e, t) {
  return `<p>${t}</p>`;
}
function ra(e, t) {
  const n = e.alphabet ? `alphabet="${e.alphabet}"` : "";
  return `<phoneme ph="${e.ph}"${n}>${t}</phoneme>`;
}
function oa(e, t) {
  const n = e.contour ? ` contour="${e.contour}"` : "", s = e.pitch ? ` pitch="${e.pitch}"` : "", r = e.range ? ` range="${e.range}"` : "", o = e.volume ? ` volume="${e.volume}"` : "", a = e.rate ? ` rate="${e.rate}"` : "";
  return `<prosody${n}${s}${r}${o}${a}>${t}</prosody>`;
}
function aa(e, t) {
  const n = e.interpretAs ? ` interpretAs="${e.interpretAs}"` : "", s = e.format ? ` format="${e.format}"` : "", r = e.detail ? ` detail="${e.detail}"` : "";
  return `<say-as${n}${s}${r}>${t}</say-as>`;
}
function la(e, t) {
  return `<s>${t}</s>`;
}
function ia(e, t) {
  return `<sub alias=${e.alias}>${t}</sub>`;
}
function ua(e, t) {
  const n = e.effect ? ` effect="${e.effect}"` : "";
  return `<voice name="${e.name}${n}">${t}</voice>`;
}
function ca(e, t) {
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
        return ca(e, t);
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
        return sa(e, t);
      case "ssml-phoneme":
        return ra(e, t);
      case "ssml-prosody":
        return oa(e, t);
      case "ssml-s":
        return la(e, t);
      case "ssml-say-as":
        return aa(e, t);
      case "ssml-sub":
        return ia(e, t);
      case "ssml-voice":
        return ua(e, t);
      default:
        return t;
    }
  }
  return "";
}
function da() {
  const { editor: e } = be();
  if (!e)
    throw Error("没有找到 editor 对象");
  const { rootSpeak: t, rootVoice: n, rootExpressAs: s, rootBackgroundaudio: r } = zt(), o = { ...t, children: [] }, a = { ...r }, l = { ...n, children: [] }, u = { ...s, children: [] };
  return o.children.push(a), o.children.push(l), l.children.push(u), u.children = e.children, os(o);
}
const fa = {
  install() {
    oe.registerModule(Kr), oe.registerModule(so), oe.registerModule(io), oe.registerModule(mo), oe.registerModule(go), oe.registerModule($o), oe.registerModule(Po), oe.registerModule(Ro), oe.registerModule(jo), oe.registerModule(zo), oe.registerModule(qo), oe.registerPlugin(Jo);
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
    remark: "",
    effect: "",
    children: []
  }), n = Ze({
    type: "ssml-mstts:backgroundaudio",
    src: "",
    remark: "",
    children: []
  }), s = Ze({
    type: "ssml-mstts:express-as",
    style: "Default",
    role: "Default",
    remark: "",
    children: []
  });
  return { rootSpeak: e, rootVoice: t, rootBackgroundaudio: n, rootExpressAs: s };
}), pa = { class: "bar-button-icon" }, ma = {
  class: "fw-normal",
  style: { "font-size": "0.85rem" }
}, va = /* @__PURE__ */ R({
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
        const { editor: r } = be();
        r && t("click", r);
      }
    };
    return (r, o) => (V(), L("div", {
      class: Pe(["bar-button px-2 py-1", { disabled: r.disabled }]),
      onClick: s,
      onMousedown: o[0] || (o[0] = ne(() => {
      }, ["prevent"]))
    }, [
      d("div", pa, [
        d("span", {
          class: Pe(["fs-3 iconfont-moyin", [`moyin-icon_${r.icon}`]])
        }, null, 2)
      ]),
      d("div", ma, Q(r.text), 1)
    ], 34));
  }
});
const Z = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, J = /* @__PURE__ */ Z(va, [["__scopeId", "data-v-7f1d5309"]]);
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
    }), (l, u) => (V(), se(b(dt), {
      class: "flex flex-row",
      onSubmit: ne(a, ["prevent"])
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
const ha = /* @__PURE__ */ R({
  __name: "bar-popover",
  props: {
    visible: { type: Boolean },
    trigger: {},
    hideAfter: {},
    width: {}
  },
  emits: ["update:visible"],
  setup(e) {
    return (t, n) => (V(), se(b(ge), {
      hideAfter: t.hideAfter,
      width: t.width,
      visible: t.visible,
      trigger: t.trigger,
      "onUpdate:visible": n[0] || (n[0] = (s) => t.$emit("update:visible", s))
    }, {
      reference: _(() => [
        ye(t.$slots, "reference")
      ]),
      default: _(() => [
        ye(t.$slots, "default")
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
const as = typeof window < "u", _a = (e) => e != null, at = () => {
};
var ya = Object.defineProperty, ga = Object.defineProperties, ba = Object.getOwnPropertyDescriptors, Sn = Object.getOwnPropertySymbols, wa = Object.prototype.hasOwnProperty, xa = Object.prototype.propertyIsEnumerable, kn = (e, t, n) => t in e ? ya(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ea = (e, t) => {
  for (var n in t || (t = {}))
    wa.call(t, n) && kn(e, n, t[n]);
  if (Sn)
    for (var n of Sn(t))
      xa.call(t, n) && kn(e, n, t[n]);
  return e;
}, $a = (e, t) => ga(e, ba(t));
function Sa(e, t = {}) {
  if (!je(e))
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
            const l = $a(Ea({}, e.value), { [s]: r });
            Object.setPrototypeOf(l, Object.getPrototypeOf(e.value)), e.value = l;
          }
        else
          e.value[s] = r;
      }
    }));
  return n;
}
function ls(e, t = !0) {
  Nt() ? Fe(e) : t ? e() : Et(e);
}
function ce(e) {
  var t;
  const n = ue(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Se = as ? window : void 0;
function Me(...e) {
  let t, n, s, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, r] = e, t = Se) : [t, n, s, r] = e, !t)
    return at;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const o = [], a = () => {
    o.forEach((v) => v()), o.length = 0;
  }, l = (v, m, h, g) => (v.addEventListener(m, h, g), () => v.removeEventListener(m, h, g)), u = ve(
    () => [ce(t), ue(r)],
    ([v, m]) => {
      a(), v && o.push(
        ...n.flatMap((h) => s.map((g) => l(v, h, g, m)))
      );
    },
    { immediate: !0, flush: "post" }
  ), p = () => {
    u(), a();
  };
  return mt(p), p;
}
function ka() {
  const e = y(!1);
  return Nt() && Fe(() => {
    e.value = !0;
  }), e;
}
function Gt(e) {
  const t = ka();
  return K(() => (t.value, !!e()));
}
function Oa(e, t = {}) {
  const { window: n = Se } = t, s = Gt(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
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
var Ca = Object.defineProperty, Pa = Object.defineProperties, Ta = Object.getOwnPropertyDescriptors, On = Object.getOwnPropertySymbols, Ia = Object.prototype.hasOwnProperty, Va = Object.prototype.propertyIsEnumerable, Cn = (e, t, n) => t in e ? Ca(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Aa = (e, t) => {
  for (var n in t || (t = {}))
    Ia.call(t, n) && Cn(e, n, t[n]);
  if (On)
    for (var n of On(t))
      Va.call(t, n) && Cn(e, n, t[n]);
  return e;
}, Ra = (e, t) => Pa(e, Ta(t));
function Yt(e, t = {}) {
  var n, s;
  const {
    pointerTypes: r,
    preventDefault: o,
    stopPropagation: a,
    exact: l,
    onMove: u,
    onEnd: p,
    onStart: v,
    initialValue: m,
    axis: h = "both",
    draggingElement: g = Se,
    handle: f = e
  } = t, c = y(
    (n = ue(m)) != null ? n : { x: 0, y: 0 }
  ), $ = y(), T = (S) => r ? r.includes(S.pointerType) : !0, j = (S) => {
    ue(o) && S.preventDefault(), ue(a) && S.stopPropagation();
  }, P = (S) => {
    if (!T(S) || ue(l) && S.target !== ue(e))
      return;
    const E = ue(e).getBoundingClientRect(), H = {
      x: S.clientX - E.left,
      y: S.clientY - E.top
    };
    (v == null ? void 0 : v(H, S)) !== !1 && ($.value = H, j(S));
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
    Me(f, "pointerdown", P, S), Me(g, "pointermove", I, S), Me(g, "pointerup", A, S);
  }
  return Ra(Aa({}, Sa(c)), {
    position: c,
    isDragging: K(() => !!$.value),
    style: K(
      () => `left:${c.value.x}px;top:${c.value.y}px;`
    )
  });
}
var Pn = Object.getOwnPropertySymbols, Na = Object.prototype.hasOwnProperty, Da = Object.prototype.propertyIsEnumerable, La = (e, t) => {
  var n = {};
  for (var s in e)
    Na.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && Pn)
    for (var s of Pn(e))
      t.indexOf(s) < 0 && Da.call(e, s) && (n[s] = e[s]);
  return n;
};
function is(e, t, n = {}) {
  const s = n, { window: r = Se } = s, o = La(s, ["window"]);
  let a;
  const l = Gt(() => r && "ResizeObserver" in r), u = () => {
    a && (a.disconnect(), a = void 0);
  }, p = K(
    () => Array.isArray(e) ? e.map((h) => ce(h)) : [ce(e)]
  ), v = ve(
    p,
    (h) => {
      if (u(), l.value && r) {
        a = new ResizeObserver(t);
        for (const g of h)
          g && a.observe(g, o);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), m = () => {
    u(), v();
  };
  return mt(m), {
    isSupported: l,
    stop: m
  };
}
function Qe(e, t = {}) {
  const {
    reset: n = !0,
    windowResize: s = !0,
    windowScroll: r = !0,
    immediate: o = !0
  } = t, a = y(0), l = y(0), u = y(0), p = y(0), v = y(0), m = y(0), h = y(0), g = y(0);
  function f() {
    const c = ce(e);
    if (!c) {
      n && (a.value = 0, l.value = 0, u.value = 0, p.value = 0, v.value = 0, m.value = 0, h.value = 0, g.value = 0);
      return;
    }
    const $ = c.getBoundingClientRect();
    a.value = $.height, l.value = $.bottom, u.value = $.left, p.value = $.right, v.value = $.top, m.value = $.width, h.value = $.x, g.value = $.y;
  }
  return is(e, f), ve(() => ce(e), (c) => !c && f()), r && Me("scroll", f, { capture: !0, passive: !0 }), s && Me("resize", f, { passive: !0 }), ls(() => {
    o && f();
  }), {
    height: a,
    bottom: l,
    left: u,
    right: p,
    top: v,
    width: m,
    x: h,
    y: g,
    update: f
  };
}
function Ma(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: s = Se, box: r = "content-box" } = n, o = K(() => {
    var u, p;
    return (p = (u = ce(e)) == null ? void 0 : u.namespaceURI) == null ? void 0 : p.includes("svg");
  }), a = y(t.width), l = y(t.height);
  return is(
    e,
    ([u]) => {
      const p = r === "border-box" ? u.borderBoxSize : r === "content-box" ? u.contentBoxSize : u.devicePixelContentBoxSize;
      if (s && o.value) {
        const v = ce(e);
        if (v) {
          const m = s.getComputedStyle(v);
          a.value = Number.parseFloat(m.width), l.value = Number.parseFloat(m.height);
        }
      } else if (p) {
        const v = Array.isArray(p) ? p : [p];
        a.value = v.reduce((m, { inlineSize: h }) => m + h, 0), l.value = v.reduce((m, { blockSize: h }) => m + h, 0);
      } else
        a.value = u.contentRect.width, l.value = u.contentRect.height;
    },
    n
  ), ve(
    () => ce(e),
    (u) => {
      a.value = u ? t.width : 0, l.value = u ? t.height : 0;
    }
  ), {
    width: a,
    height: l
  };
}
function ja(e, t, n = {}) {
  const {
    root: s,
    rootMargin: r = "0px",
    threshold: o = 0.1,
    window: a = Se,
    immediate: l = !0
  } = n, u = Gt(() => a && "IntersectionObserver" in a), p = K(() => {
    const f = ue(e);
    return (Array.isArray(f) ? f : [f]).map(ce).filter(_a);
  });
  let v = at;
  const m = y(l), h = u.value ? ve(
    () => [p.value, ce(s), m.value],
    ([f, c]) => {
      if (v(), !m.value || !f.length)
        return;
      const $ = new IntersectionObserver(
        t,
        {
          root: ce(c),
          rootMargin: r,
          threshold: o
        }
      );
      f.forEach((T) => T && $.observe(T)), v = () => {
        $.disconnect(), v = at;
      };
    },
    { immediate: l, flush: "post" }
  ) : at, g = () => {
    v(), h(), m.value = !1;
  };
  return mt(g), {
    isSupported: u,
    isActive: m,
    pause() {
      v(), m.value = !1;
    },
    resume() {
      m.value = !0;
    },
    stop: g
  };
}
function Ha(e, { window: t = Se, scrollTarget: n } = {}) {
  const s = y(!1);
  return ja(
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
function Fa(e = {}) {
  const {
    window: t = Se,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: s = Number.POSITIVE_INFINITY,
    listenOrientation: r = !0,
    includeScrollbar: o = !0
  } = e, a = y(n), l = y(s), u = () => {
    t && (o ? (a.value = t.innerWidth, l.value = t.innerHeight) : (a.value = t.document.documentElement.clientWidth, l.value = t.document.documentElement.clientHeight));
  };
  if (u(), ls(u), Me("resize", u, { passive: !0 }), r) {
    const p = Oa("(orientation: portrait)");
    ve(p, () => u());
  }
  return { width: a, height: l };
}
const Ba = (e) => (Be("data-v-e61eb377"), e = e(), Ue(), e), Ua = { class: "search-content vh-50" }, za = { class: "ps-2 w-75" }, Wa = { class: "menu" }, Ga = { class: "flex flex-row pt-1" }, Ya = { class: "content-list pt-1 w-90" }, Xa = ["onClick"], qa = /* @__PURE__ */ Ba(() => /* @__PURE__ */ d("span", { class: "iconfont icon-play" }, null, -1)), Ja = /* @__PURE__ */ R({
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
    const n = e, s = y(), r = y(""), o = y(""), a = y(""), l = y(n.dataList || []), u = y("first"), p = Ha(s);
    ve(p, (g) => {
      g && setTimeout(() => {
        var f;
        (f = s.value) == null || f.focus();
      }, 100);
    }), Fe(async () => {
      l.value.length || await v();
    });
    async function v() {
      l.value = await n.fetch({
        search: r.value,
        menuKey: u.value,
        scene: o.value,
        style: a.value
      });
    }
    function m(g) {
      u.value = g, v();
    }
    function h(g) {
      t("submit", g);
    }
    return (g, f) => (V(), L("div", Ua, [
      d("div", za, [
        i(b(dt), {
          onSubmit: ne(v, ["prevent"])
        }, {
          default: _(() => [
            i(b(ft), {
              ref_key: "searchInputRef",
              ref: s,
              placeholder: "搜索",
              modelValue: r.value,
              "onUpdate:modelValue": f[0] || (f[0] = (c) => r.value = c),
              "suffix-icon": b(Ls)
            }, null, 8, ["modelValue", "suffix-icon"])
          ]),
          _: 1
        }, 8, ["onSubmit"])
      ]),
      d("div", Wa, [
        i(b(Ns), {
          mode: "horizontal",
          "default-active": "first",
          onSelect: f[1] || (f[1] = (c) => m(c))
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
      d("div", Ga, [
        i(b(St), {
          modelValue: o.value,
          "onUpdate:modelValue": f[2] || (f[2] = (c) => o.value = c),
          onChange: v,
          class: "m-1",
          size: "large"
        }, {
          default: _(() => [
            (V(!0), L(pe, null, Le(g.scenes, (c) => (V(), se(b(kt), {
              key: c.value,
              label: c.label,
              value: c.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        i(b(St), {
          modelValue: a.value,
          "onUpdate:modelValue": f[3] || (f[3] = (c) => a.value = c),
          onChange: v,
          class: "m-1",
          size: "large"
        }, {
          default: _(() => [
            (V(!0), L(pe, null, Le(g.styles, (c) => (V(), se(b(kt), {
              key: c.value,
              label: c.label,
              value: c.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      d("div", Ya, [
        (V(!0), L(pe, null, Le(l.value, (c, $) => (V(), L("div", {
          onClick: (T) => h(Ie(c)),
          class: "content-list-item clickable ps-3",
          key: $
        }, [
          qa,
          d("span", null, Q(c.label), 1)
        ], 8, Xa))), 128))
      ])
    ]));
  }
});
const Xt = /* @__PURE__ */ Z(Ja, [["__scopeId", "data-v-e61eb377"]]);
const Qa = {}, Ka = { class: "content" };
function Za(e, t) {
  return V(), L("div", Ka, [
    ye(e.$slots, "default", {}, void 0, !0)
  ]);
}
const us = /* @__PURE__ */ Z(Qa, [["render", Za], ["__scopeId", "data-v-7beae5b9"]]), el = {}, tl = { class: "bar-wrapper-item" };
function nl(e, t) {
  return V(), L("div", tl, [
    ye(e.$slots, "default")
  ]);
}
const sl = /* @__PURE__ */ Z(el, [["render", nl]]), rl = { class: "bar-wrapper-group" }, ol = { class: "group-items" }, al = /* @__PURE__ */ R({
  __name: "bar-wrapper-group",
  props: {
    divider: {}
  },
  setup(e) {
    return (t, n) => (V(), L("div", rl, [
      d("div", ol, [
        ye(t.$slots, "default", {}, void 0, !0)
      ]),
      d("div", {
        class: Pe(["divider", [t.divider]])
      }, null, 2)
    ]));
  }
});
const Re = /* @__PURE__ */ Z(al, [["__scopeId", "data-v-3a7abad9"]]);
function ll(e, t) {
  return `left:${e}px;top:${t}px`;
}
function qt(e, t) {
  const { width: n, height: s } = Ma(e), { width: r, height: o } = Fa(), a = K(() => ({
    x: r.value - n.value,
    y: o.value - s.value
  }));
  return { style: K(() => {
    const u = t.value.x, p = t.value.y, v = u < 5 ? 5 : u > a.value.x ? a.value.x - 5 : u, m = p < 5 ? 5 : p > a.value.y ? a.value.y - 5 : p;
    return ll(v, m);
  }) };
}
const il = /* @__PURE__ */ R({
  __name: "drag-box",
  props: {
    visible: { type: Boolean },
    initialValue: {}
  },
  emits: ["update:visible", "close"],
  setup(e, { expose: t, emit: n }) {
    const s = e, r = y(), o = y(), { position: a } = Yt(r, {
      initialValue: s.initialValue
    }), { style: l } = qt(r, a);
    function u(g) {
      a.value = g;
    }
    t({
      setPosition: u
    }), Fe(() => {
      window.addEventListener("click", p), window.addEventListener("keydown", h);
    }), Lt(() => {
      window.addEventListener("click", p), window.addEventListener("keydown", h);
    });
    function p(g) {
      v(g) && m();
    }
    function v(g) {
      const f = g.target;
      return !(!r.value || !o.value || o.value.contains(f) || r.value.contains(f));
    }
    function m() {
      n("update:visible", !1), n("close");
    }
    function h(g) {
      g.code === "Escape" && m();
    }
    return (g, f) => (V(), L(pe, null, [
      d("div", {
        ref_key: "referenceRef",
        ref: o
      }, [
        ye(g.$slots, "reference", {}, void 0, !0)
      ], 512),
      (V(), se(An, { to: "body" }, [
        Ee(d("div", {
          ref_key: "boxRef",
          ref: r,
          class: "demotestname card shadow brag-box user-select-none",
          style: Mt([{ position: "fixed" }, b(l)])
        }, [
          d("div", { class: "w-100 text-end me-2" }, [
            d("span", {
              onClick: m,
              class: "btn iconfont icon-close fs-5"
            })
          ]),
          ye(g.$slots, "default", {}, void 0, !0)
        ], 4), [
          [$e, g.visible]
        ])
      ]))
    ], 64));
  }
});
const ze = /* @__PURE__ */ Z(il, [["__scopeId", "data-v-7fa7270a"]]), ul = {
  install(e) {
    e.component("BarButton", J), e.component("BarInput", Wt), e.component("BarPopover", ha), e.component("BarSearch", Xt), e.component("BarWrapper", us), e.component("BarWrapperItem", sl), e.component("BarWrapperGroup", Re), e.component("DragBox", ze);
  }
}, cl = "wangeditor-error", X = {
  ERROR: cl
};
class he {
  constructor(t) {
    ee(this, "editor");
    this.editor = t;
  }
  getValue() {
    const { selection: t } = this.editor;
    return t == null ? "" : He.string(this.editor, t);
  }
  isDisabled() {
    const { selection: t } = this.editor;
    return t == null ? (this.editor.emit(X.ERROR, "未选中编辑器"), !0) : !1;
  }
}
class dl extends he {
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
    if (de.isCollapsed(n))
      return this.editor.emit(X.ERROR, "请选中文本"), !0;
    const s = this.getValue();
    return s.length != 1 ? !0 : /^[\u4E00-\u9FA5]+$/gi.test(s) ? !1 : (this.editor.emit(X.ERROR, "选中一个中文字符，并且有不能在其他语句之内"), !0);
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
    B.insertNodes(this.editor, r);
  }
}
const cs = /* @__PURE__ */ R({
  setup() {
    const {
      globalEditConfig: e
    } = be(), t = Y(), n = y([]), s = y(!1);
    function r() {
      s.value || (s.value = !0);
    }
    function o() {
      s.value && (s.value = !1);
    }
    async function a(l) {
      var p;
      if (t.value ?? (t.value = new dl(l)), (p = t.value) != null && p.isDisabled())
        return;
      const u = t.value.getValue();
      if (u ? n.value = await e.fetchSpeaker(u) : n.value = [], n.value.length == 0)
        return l.emit(X.ERROR, "选中的字符没有不是多音字");
      r();
    }
    return () => i(ge, {
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
        onMousedown: ne(() => {
        }, ["stop", "prevent"])
      }, [l]))])
    });
  }
});
class fl extends he {
  constructor(n) {
    super(n);
    ee(this, "key", "continuous");
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: n } = this.editor;
    return n ? de.isCollapsed(n) ? (this.editor.emit(X.ERROR, "请选择多个中文字符或者多个多个英文单词"), !0) : He.string(this.editor, n).length < 2 : !0;
  }
  exec() {
    if (this.isDisabled())
      return;
    const n = this.getValue();
    if (n == null)
      return;
    const s = {
      type: "ssml-prosody",
      rate: "fast",
      remark: "连读",
      children: [{ text: n }]
    };
    B.insertNodes(this.editor, s);
  }
}
const ds = /* @__PURE__ */ R({
  setup() {
    const e = Y();
    function t(n) {
      e.value ?? (e.value = new fl(n)), !e.value.isDisabled() && e.value.exec();
    }
    return () => i(J, {
      text: "连读",
      icon: "continuous",
      onClick: t
    }, null);
  }
});
class pl extends he {
  constructor(n) {
    super(n);
    ee(this, "key", "read");
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: n } = this.editor;
    return !n || n == null ? !0 : de.isCollapsed(n) ? (this.editor.emit(X.ERROR, "请先选择文本"), !0) : !1;
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
      children: [{ text: s }]
    };
    switch (n.value) {
      case "z":
        r.rate = "fast";
        break;
      case "t":
        r.pitch = "+10%";
        break;
      case "z+t":
        r.rate = "fast", r.pitch = "+10%";
        break;
    }
    B.insertNodes(this.editor, r);
  }
}
const ml = [
  { label: "重音", value: "z" },
  { label: "拖音", value: "t" },
  { label: "重音+拖音", value: "z+t" }
], fs = /* @__PURE__ */ R({
  setup() {
    const e = Y(), t = y(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    function r(o) {
      e.value ?? (e.value = new pl(o)), !e.value.isDisabled() && n();
    }
    return () => i(ge, {
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
        onMousedown: ne(() => {
        }, ["stop", "prevent"])
      }, [ml.map(({
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
        onMousedown: ne(() => {
        }, ["stop", "prevent"])
      }, [o]))])
    });
  }
});
class vl extends he {
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
    if (de.isCollapsed(n))
      return this.editor.emit(X.ERROR, "请选择纯数字"), !0;
    const s = He.string(this.editor, n);
    return s.length <= 0 ? !0 : Number.isNaN(Number(s)) ? (this.editor.emit(X.ERROR, "请选择纯数字"), !0) : !1;
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
    B.delete(this.editor), B.insertNodes(this.editor, r);
  }
}
const hl = [{
  value: "value",
  label: "读数值"
}, {
  value: "digits",
  label: "读数字"
}, {
  value: "telephone",
  label: "读手机号"
}], ps = /* @__PURE__ */ R({
  setup() {
    const e = Y(), t = y(!1);
    function n() {
      t.value = !t.value;
    }
    function s(r) {
      e.value ?? (e.value = new vl(r)), !e.value.isDisabled() && n();
    }
    return () => i(ge, {
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
      }, [hl.map(({
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
        onMousedown: ne(() => {
        }, ["stop", "prevent"])
      }, [r]))])
    });
  }
});
class _l extends he {
  constructor(n) {
    super(n);
    ee(this, "key", "alias");
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: n } = this.editor;
    return n == null ? !0 : de.isCollapsed(n) ? (this.editor.emit(X.ERROR, "选中一个中文字符，并且有不能在其他语句之内"), !0) : this.getValue().length <= 0;
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
    B.insertNodes(this.editor, r);
  }
}
const ms = /* @__PURE__ */ R({
  setup() {
    const e = Y(), t = y(), n = y(!1);
    function s() {
      n.value || (n.value = !0);
    }
    function r() {
      n.value && (n.value = !1);
    }
    async function o(l) {
      e.value ?? (e.value = new _l(l)), !e.value.isDisabled() && (s(), t.value.focus());
    }
    function a(l) {
      var u;
      r(), l && ((u = e.value) == null || u.exec({
        value: l,
        label: l
      }));
    }
    return () => i(ge, {
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
function yl(e) {
  const { selection: t } = e;
  if (t) {
    const [n, s] = de.edges(t), r = He.range(e, n, s), o = He.string(e, r), a = o.trimEnd();
    if (a !== o) {
      const l = o.length - a.length, u = { ...s, offset: s.offset - l }, p = { ...t, anchor: n, focus: u };
      B.select(e, p);
    }
  }
}
class gl extends he {
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
    if (de.isCollapsed(n))
      return this.editor.emit(X.ERROR, "请选择英文单词"), !0;
    const s = He.string(this.editor, n);
    return s.length <= 0 ? !0 : /^[A-Za-z]+$/gi.test(s) ? !1 : (this.editor.emit(X.ERROR, "请选择英文单词"), !0);
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
    B.insertNodes(this.editor, r);
  }
}
const vs = /* @__PURE__ */ R({
  setup() {
    const {
      globalEditConfig: e
    } = be(), t = Y(), n = y([]), s = y(!1);
    function r() {
      s.value || (s.value = !0);
    }
    function o() {
      s.value && (s.value = !1);
    }
    async function a(l) {
      if (t.value ?? (t.value = new gl(l)), yl(l), t.value.isDisabled())
        return;
      const u = t.value.getValue();
      if (u) {
        if (n.value = await e.fetchEnglish(u), n.value.length <= 0)
          return l.emit(X.ERROR, "找不到单词的音标");
        r();
      }
    }
    return () => i(ge, {
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
        onMousedown: ne(() => {
        }, ["stop", "prevent"])
      }, [l]))])
    });
  }
});
class bl extends he {
  constructor(n) {
    super(n);
    ee(this, "key", "changespeed");
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: n } = this.editor;
    return n == null ? !0 : de.isCollapsed(n) ? (this.editor.emit(X.ERROR, "请框选要变速的句子"), !0) : !1;
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
      rate: n.value,
      children: [{ text: s }]
    };
    B.insertNodes(this.editor, r);
  }
}
const wl = [{
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
}], hs = /* @__PURE__ */ R({
  setup() {
    const e = Y(), t = y(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    async function r(o) {
      e.value ?? (e.value = new bl(o)), !e.value.isDisabled() && n();
    }
    return () => i(ge, {
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
      }, [wl.map(({
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
        onMousedown: ne(() => {
        }, ["stop", "prevent"])
      }, [o]))])
    });
  }
});
class xl extends he {
  constructor(n) {
    super(n);
    ee(this, "key", "rhythm");
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: n } = this.editor;
    return n ? de.isExpanded(n) ? (this.editor.emit(X.ERROR, "不能选中文本"), !0) : !1 : !0;
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
    B.insertNodes(this.editor, s);
  }
}
const El = [{
  value: "200ms",
  label: "短"
}, {
  value: "300ms",
  label: "中"
}, {
  value: "500ms",
  label: "长"
}], _s = /* @__PURE__ */ R({
  setup() {
    const e = Y(), t = y(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    function r(o) {
      e.value ?? (e.value = new xl(o)), !e.value.isDisabled() && n();
    }
    return () => i(ge, {
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
      }, [El.map(({
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
        onMousedown: ne(() => {
        }, ["stop", "prevent"])
      }, [o]))])
    });
  }
});
class $l extends he {
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
    return n ? de.isExpanded(n) ? (this.editor.emit(X.ERROR, "不能框选文字"), !0) : !1 : !0;
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
    B.insertNodes(this.editor, r);
  }
}
const ys = /* @__PURE__ */ R({
  __name: "special-menu",
  setup(e) {
    const t = y(), n = y(), s = Y(), { globalEditConfig: r } = be(), o = y(!1), a = { first: "默认音效", second: "自定义音效", last: "最近音效" }, l = [
      { value: "", label: "全部场景" },
      { value: "2", label: "场景2" },
      { value: "3", label: "场景3" }
    ], u = [
      { value: "", label: "全部风格" },
      { value: "2", label: "风格2" },
      { value: "3", label: "风格3" }
    ], { x: p, y: v, height: m } = Qe(n), h = (f) => {
      s.value ?? (s.value = new $l(f)), !s.value.isDisabled() && (t.value.setPosition({
        x: p.value - 200,
        y: v.value + m.value
      }), o.value = !0);
    };
    function g(f) {
      var c;
      (c = s.value) == null || c.restoreSelection(), s.value && !s.value.isDisabled() && s.value.exec(f), o.value = !1;
    }
    return (f, c) => (V(), se(b(ze), {
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
        i(b(Xt), {
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
class Sl extends he {
  constructor(n) {
    super(n);
    ee(this, "key", "mute");
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: n } = this.editor;
    return n ? de.isExpanded(n) ? (this.editor.emit(X.ERROR, "不能选中文本"), !0) : !1 : !0;
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
    B.insertNodes(this.editor, s);
  }
}
const kl = [{
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
    const e = Y(), t = y(!1), n = y();
    function s() {
      t.value || (t.value = !0);
    }
    function r() {
      t.value && (t.value = !1);
    }
    function o(l) {
      e.value ?? (e.value = new Sl(l)), !e.value.isDisabled() && (s(), n.value.focus());
    }
    function a(l) {
      var u;
      r(), l && ((u = e.value) == null || u.exec({
        value: l,
        label: l
      }));
    }
    return () => i(ge, {
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
      }, [kl.map(({
        value: l,
        label: u
      }) => i("div", {
        key: l,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => a(l),
        onMousedown: ne(() => {
        }, ["stop", "prevent"])
      }, [u])), i(Wt, {
        type: "number",
        ref: n,
        onSubmit: a
      }, null)])
    });
  }
}), bs = /* @__PURE__ */ R({
  __name: "bgm-menu",
  setup(e) {
    const t = y(), n = y(), s = Y(), r = y(!1), { globalEditConfig: o } = be(), a = { first: "默认配乐", second: "自定义配乐", last: "最近配乐" }, l = [
      { value: "", label: "全部场景" },
      { value: "2", label: "场景2" },
      { value: "3", label: "场景3" }
    ], u = [
      { value: "", label: "全部风格" },
      { value: "2", label: "风格2" },
      { value: "3", label: "风格3" }
    ], { x: p, y: v, height: m } = Qe(n), h = async (f) => {
      const c = {
        x: p.value - 300,
        y: v.value + m.value
      };
      s.value = f, t.value.setPosition(c), r.value = !0;
    };
    function g(f) {
      const { rootBackgroundaudio: c } = zt();
      c.src = f.value, c.remark = f.label, r.value = !1;
    }
    return (f, c) => (V(), se(b(ze), {
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
        i(b(Xt), {
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
    const t = y(), n = y(), s = Y(), r = y(!1), { x: o, y: a, height: l } = Qe(n), u = (p) => {
      s.value = p, t.value.setPosition({
        x: o.value - 200,
        y: a.value + l.value
      }), r.value = !0;
    };
    return (p, v) => (V(), se(b(ze), {
      ref_key: "dragRef",
      ref: t,
      visible: r.value,
      "onUpdate:visible": v[0] || (v[0] = (m) => r.value = m)
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
const Ol = {
  class: "select-list",
  style: { width: "120px" }
}, Cl = {
  class: "text-center d-flex flex-column justify-content-center fs-6",
  style: { height: "60px" }
}, Pl = ["onClick"], Tl = /* @__PURE__ */ R({
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
    }), (l, u) => (V(), L("div", Ol, [
      d("div", Cl, [
        ye(l.$slots, "default", {}, void 0, !0)
      ]),
      d("ul", {
        ref_key: "listRef",
        ref: r,
        class: "text-center w-100 border-start border-top border-bottom border-secondary-subtle overflow-y-auto overflow-x-hidden scrollbar-none",
        style: { height: "180px" }
      }, [
        (V(!0), L(pe, null, Le(l.dataList, (p, v) => (V(), L("li", {
          class: Pe(["clickable select-item py-1", { activate: p.value === l.modelValue }]),
          key: v,
          onClick: (m) => o(Ie(p))
        }, Q(p.label), 11, Pl))), 128))
      ], 512)
    ]));
  }
});
const Ye = /* @__PURE__ */ Z(Tl, [["__scopeId", "data-v-efb1399e"]]), Il = () => {
  const e = [];
  for (let t = 2; t <= 40; t++) {
    const n = (t * 0.05).toFixed(2);
    e.push({ value: n, label: `${n}x` });
  }
  return e;
}, Vl = () => {
  const e = [];
  for (let t = -10; t <= 10; t++)
    e.push({ value: t.toString(), label: t.toString() });
  return e;
}, Al = {
  style: { width: "600px", height: "360px" },
  class: "position-relative px-2 pb-2"
}, Rl = { class: "position-relative" }, Nl = { class: "position-absolute top-0 end-0" }, Dl = /* @__PURE__ */ d("li", null, [
  /* @__PURE__ */ d("span", { class: "text-nowrap" }, "近期使用:")
], -1), Ll = /* @__PURE__ */ d("span", { class: "my-3" }, "角色", -1), Ml = /* @__PURE__ */ d("span", { class: "my-3" }, "风格", -1), jl = /* @__PURE__ */ d("span", { class: "my-3" }, "语速", -1), Hl = /* @__PURE__ */ d("span", { class: "my-3" }, "语调", -1), Fl = { class: "position-absolute bottom-0 end-0 d-flex flex-row justify-content-end me-4 mb-3" }, Bl = /* @__PURE__ */ R({
  __name: "management-content",
  setup(e) {
    const t = y(!1), n = y(""), s = y(), r = y(), o = y(), a = y(), l = y(), u = y(""), p = y(""), v = y(""), m = y(""), h = y(""), g = y(""), f = y([]), c = y([]), $ = y([]), T = y([]), j = y(Il()), P = y(Vl());
    f.value = [
      { label: "全部类型", value: "" },
      { label: "常规", value: "2" },
      { label: "已购", value: "3" },
      { label: "收藏", value: "4" },
      { label: "我的", value: "5" },
      { label: "SVIP", value: "6" },
      { label: "付费", value: "7" }
    ], c.value = f.value, $.value = f.value, T.value = f.value;
    function I() {
    }
    function A() {
    }
    function S() {
      v.value = "", k(s);
    }
    function E() {
      m.value = "", k(r);
    }
    function H() {
      h.value = "1.00", g.value = "0", k(o);
    }
    function te() {
    }
    function C() {
    }
    async function k(F) {
      console.log(F);
    }
    return (F, D) => (V(), L("div", Al, [
      i(b(dt), {
        onSubmit: ne(I, ["prevent"])
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
      d("div", Rl, [
        d("div", Nl, [
          i(b(fe), {
            size: "small",
            icon: b(Ms),
            onClick: D[1] || (D[1] = () => t.value = !t.value)
          }, null, 8, ["icon"])
        ]),
        d("ul", {
          class: Pe(["d-flex flex-row row-gap-1 column-gap-2 overflow-x-hidden", { "flex-wrap": t.value }])
        }, [
          Dl,
          d("li", null, [
            i(b(we), {
              type: "info",
              closable: ""
            }, {
              default: _(() => [
                w("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          d("li", null, [
            i(b(we), {
              type: "info",
              closable: ""
            }, {
              default: _(() => [
                w("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          d("li", null, [
            i(b(we), {
              type: "info",
              closable: ""
            }, {
              default: _(() => [
                w("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          d("li", null, [
            i(b(we), {
              type: "info",
              closable: ""
            }, {
              default: _(() => [
                w("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          d("li", null, [
            i(b(we), {
              type: "info",
              closable: ""
            }, {
              default: _(() => [
                w("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          d("li", null, [
            i(b(we), {
              type: "info",
              closable: ""
            }, {
              default: _(() => [
                w("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          d("li", null, [
            i(b(we), {
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
        Ee(d("div", {
          class: Pe({ "d-flex flex-row": !t.value })
        }, [
          i(Ye, {
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
                  (V(!0), L(pe, null, Le(f.value, (U, vt) => (V(), se(b(kt), {
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
          i(Ye, {
            "onUpdate:modelValue": [
              E,
              D[4] || (D[4] = (U) => v.value = U)
            ],
            ref_key: "selRoleRef",
            ref: r,
            modelValue: v.value,
            dataList: $.value
          }, {
            default: _(() => [
              Ll
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          i(Ye, {
            "onUpdate:modelValue": [
              H,
              D[5] || (D[5] = (U) => m.value = U)
            ],
            ref_key: "selStyleRef",
            ref: o,
            modelValue: m.value,
            dataList: T.value
          }, {
            default: _(() => [
              Ml
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          i(Ye, {
            "onUpdate:modelValue": [
              te,
              D[6] || (D[6] = (U) => h.value = U)
            ],
            ref_key: "selSpeedRef",
            ref: a,
            modelValue: h.value,
            dataList: j.value
          }, {
            default: _(() => [
              jl
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          i(Ye, {
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
              Hl
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"])
        ], 2), [
          [$e, !t.value]
        ])
      ]),
      d("div", Fl, [
        Ee(i(b(fe), { type: "primary" }, {
          default: _(() => [
            w("确定")
          ]),
          _: 1
        }, 512), [
          [$e, !t.value]
        ]),
        Ee(i(b(fe), { type: "primary" }, {
          default: _(() => [
            w("全部清空")
          ]),
          _: 1
        }, 512), [
          [$e, t.value]
        ])
      ])
    ]));
  }
}), xs = /* @__PURE__ */ R({
  __name: "management-menu",
  setup(e) {
    const t = y(), n = y(), s = Y(), r = y(!1), { x: o, y: a, height: l } = Qe(n), u = (v) => {
      const m = {
        x: o.value - 200,
        y: a.value + l.value
      };
      s.value = v, t.value.setPosition(m), r.value = !0;
    };
    function p(v) {
      console.log(v);
    }
    return (v, m) => (V(), se(b(ze), {
      ref_key: "dragRef",
      ref: t,
      visible: r.value,
      "onUpdate:visible": m[0] || (m[0] = (h) => r.value = h)
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
        i(Bl, { onSubmit: p })
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Ul = { class: "speaker-item" }, zl = { class: "speaker-head" }, Wl = ["src"], Gl = { class: "speaker-name" }, Yl = /* @__PURE__ */ R({
  __name: "speaker-item",
  props: {
    name: {},
    img: { default: "https://img.sdaxia.top/upload/4314c841777e4d20901cd5d04a28e91a.png" }
  },
  setup(e) {
    return (t, n) => (V(), L("div", Ul, [
      d("div", zl, [
        d("img", {
          src: t.img,
          class: "rounded-circle",
          style: { height: "40px" }
        }, null, 8, Wl)
      ]),
      d("div", Gl, Q(t.name), 1)
    ]));
  }
});
const z = /* @__PURE__ */ Z(Yl, [["__scopeId", "data-v-c961717f"]]), Xl = {
  class: "px-2 py-1",
  style: { width: "410px" }
}, ql = /* @__PURE__ */ d("p", { class: "text-start text-danger" }, "请在安静的环境中进行录音，以需要转换的风格，读出以下文案", -1), Jl = {
  class: "border border-secondary rounded w-100",
  style: { height: "100px" }
}, Ql = { class: "mt-2" }, Kl = { class: "w-100 d-flex flex-column row-gap-1" }, Zl = /* @__PURE__ */ d("button", { class: "btn btn-success" }, "实时录音", -1), ei = /* @__PURE__ */ d("p", {
  class: "mt-2 text-secondary",
  style: { "font-size": "0.5rem" }
}, " 录音内容需要和滑选一致，音频限制60秒，滑选文案限制60个字 ", -1), ti = { class: "audio-upload" }, ni = { class: "border rounded-pill border-secondary d-flex flex-row justify-content-between" }, si = { class: "d-flex flex-row align-items-center" }, ri = /* @__PURE__ */ d("div", null, "图标", -1), oi = /* @__PURE__ */ d("div", null, [
  /* @__PURE__ */ d("div", null, "删除"),
  /* @__PURE__ */ d("button", null, "上传音频")
], -1), ai = /* @__PURE__ */ d("template", null, [
  /* @__PURE__ */ d("span", {
    class: "text-secondary",
    style: { "font-size": "0.5rem" }
  }, "点击选择文件"),
  /* @__PURE__ */ d("button", { class: "btn btn-primary" })
], -1), li = /* @__PURE__ */ d("span", {
  class: "text-secondary",
  style: { "font-size": "0.5rem" }
}, "点击开始录音", -1), ii = /* @__PURE__ */ d("p", null, "选择需要转换的配音师", -1), ui = { class: "speakers-container d-flex flex-row flex-wrap row-gap-1 column-gap-2" }, ci = /* @__PURE__ */ d("button", {
  class: "btn btn-primary",
  disabled: ""
}, "完成录音并上传完成后，可选择配音师转换", -1), di = /* @__PURE__ */ R({
  __name: "conversion-content",
  props: {
    text: {}
  },
  emits: ["submit"],
  setup(e) {
    const t = y(), n = y(), s = y(!1), r = y(!1), o = Y();
    function a(v) {
      if (!v.target)
        return;
      const m = v.target.files[0];
      m && (o.value = m, console.log("已选择文件:", m.name));
    }
    function l() {
      var v;
      (v = t.value) == null || v.click();
    }
    function u() {
    }
    function p() {
    }
    return (v, m) => {
      var h;
      return V(), L("div", Xl, [
        d("section", null, [
          ql,
          d("div", Jl, Q(v.text), 1)
        ]),
        Ee(d("section", Ql, [
          d("div", Kl, [
            d("input", {
              accept: "audio/*",
              ref_key: "inputFileRef",
              ref: t,
              onChange: a,
              type: "file",
              hidden: ""
            }, null, 544),
            Zl,
            d("button", {
              onClick: l,
              class: "btn btn-primary"
            }, "上传录音")
          ]),
          ei
        ], 512), [
          [$e, !s.value]
        ]),
        Ee(d("section", null, [
          d("div", ti, [
            d("div", ni, [
              r.value ? (V(), L(pe, { key: 0 }, [
                d("div", si, [
                  ri,
                  d("div", null, Q((h = n.value) == null ? void 0 : h.name), 1)
                ]),
                oi
              ], 64)) : Rn("", !0),
              ai,
              d("template", null, [
                li,
                d("button", {
                  onClick: u,
                  class: "btn btn-primary"
                }, "开始录音"),
                d("button", {
                  onClick: p,
                  class: "btn btn-primary"
                }, "结束录音")
              ])
            ]),
            d("div", null, [
              ii,
              d("div", ui, [
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
            ci
          ])
        ], 512), [
          [$e, s.value]
        ])
      ]);
    };
  }
}), Es = /* @__PURE__ */ R({
  __name: "conversion-menu",
  setup(e) {
    const t = y(), n = y(), s = Y(), r = y(!1), o = y("ttttt"), { x: a, y: l, height: u } = Qe(n), p = (m) => {
      const h = {
        x: a.value - 200,
        y: l.value + u.value
      };
      s.value = m, t.value.setPosition(h), r.value = !0;
    };
    function v(m) {
      console.log(m);
    }
    return (m, h) => (V(), se(b(ze), {
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
        i(di, {
          text: o.value,
          onSubmit: v
        }, null, 8, ["text"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), fi = (e) => (Be("data-v-d94c0954"), e = e(), Ue(), e), pi = { class: "anchor-avatar d-flex flex-column justify-content-center align-items-center" }, mi = ["src"], vi = /* @__PURE__ */ fi(() => /* @__PURE__ */ d("div", { class: "anchor-avatar-name text-white" }, "莫厚渊", -1)), hi = /* @__PURE__ */ R({
  __name: "try-play-circle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = y("https://img.sdaxia.top/upload/4314c841777e4d20901cd5d04a28e91a.png"), s = y(), r = y(0), o = y(0), { position: a } = Yt(s, {
      initialValue: { x: window.innerWidth - 15, y: window.innerHeight / 2 - 15 },
      onStart: (m, h) => v(h.clientX, h.clientY) ? !1 : void 0
    }), { style: l } = qt(s, a);
    function u(m) {
      v(m.clientX, m.clientY) && t("update:visible", !1);
    }
    function p(m) {
      r.value = m.clientX, o.value = m.clientY;
    }
    function v(m, h) {
      return m > r.value - 10 && m < r.value + 10 && h > o.value - 10 && h < o.value + 10;
    }
    return (m, h) => Ee((V(), L("div", {
      ref_key: "boxRef",
      ref: s,
      class: "try-play-circel user-select-none rounded-circle overflow-hidden",
      style: Mt([b(l), { position: "fixed" }]),
      onMousedown: p,
      onMouseup: u
    }, [
      d("div", pi, [
        d("img", {
          src: n.value,
          class: "rounded-circle"
        }, null, 8, mi),
        vi
      ])
    ], 36)), [
      [$e, m.visible]
    ]);
  }
});
const _i = /* @__PURE__ */ Z(hi, [["__scopeId", "data-v-d94c0954"]]), yi = (e) => (Be("data-v-e8c67559"), e = e(), Ue(), e), gi = { class: "anchor-avatar d-flex flex-column align-items-center text-center justify-content-center" }, bi = ["src"], wi = /* @__PURE__ */ yi(() => /* @__PURE__ */ d("div", { class: "anchor-avatar-name text-white" }, "莫厚渊", -1)), xi = /* @__PURE__ */ R({
  __name: "anchor-avatar",
  setup(e) {
    const t = y("https://img.sdaxia.top/upload/4314c841777e4d20901cd5d04a28e91a.png");
    return (n, s) => (V(), L("div", gi, [
      d("img", {
        src: t.value,
        class: "rounded-circle",
        style: { height: "40px" }
      }, null, 8, bi),
      wi
    ]));
  }
});
const G = /* @__PURE__ */ Z(xi, [["__scopeId", "data-v-e8c67559"]]), Ei = {
  style: { height: "170px" },
  class: "w-100 d-flex flex-row flex-wrap justify-content-start overflow-x-hidden overflow-y-auto scrollbar-none"
}, $i = /* @__PURE__ */ R({
  __name: "anchor-list",
  setup(e) {
    return (t, n) => (V(), L("div", Ei, [
      (V(), L(pe, null, Le(100, (s, r) => d("div", {
        class: "m-2",
        key: r
      }, [
        i(G)
      ])), 64))
    ]));
  }
}), Si = /* @__PURE__ */ R({
  __name: "tag-item",
  props: {
    isActivate: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (V(), L("div", {
      class: Pe(["tag-item p-2 text-white text-center", [t.isActivate ? "activate" : null]])
    }, [
      ye(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const O = /* @__PURE__ */ Z(Si, [["__scopeId", "data-v-80dc8a64"]]), ki = { class: "tag-list w-100" }, Oi = {
  class: "w-100 d-flex flex-row border-bottom border-secondary align-items-center",
  style: { height: "40px" }
}, Ci = {
  style: { height: "100px" },
  class: "w-100 d-flex flex-row flex-wrap align-items-start overflow-y-auto overflow-x-hidden scrollbar-none"
}, Pi = /* @__PURE__ */ R({
  __name: "tag-list",
  setup(e) {
    return (t, n) => (V(), L("div", ki, [
      d("div", Oi, [
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
      d("div", Ci, [
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
const Ke = (e) => (Be("data-v-1b5a3a37"), e = e(), Ue(), e), Ti = {
  class: "slider-panle w-100 px-3 text-white",
  style: { "font-size": "0.5rem" }
}, Ii = { class: "mt-2 row text-center justify-content-between align-items-center" }, Vi = { class: "col-auto me-auto d-flex flex-row align-items-center" }, Ai = ["src"], Ri = {
  class: "ms-2 d-flex flex-column justify-content-between",
  style: { height: "50px" }
}, Ni = /* @__PURE__ */ Ke(() => /* @__PURE__ */ d("div", { class: "d-flex dlex-row column-gap-2 align-items-end" }, [
  /* @__PURE__ */ d("span", { class: "fs-6" }, "魔云猫"),
  /* @__PURE__ */ d("span", { style: { "font-size": "0.5rem" } }, "0.55x")
], -1)), Di = { class: "d-flex flex-row column-gap-2 align-items-center" }, Li = /* @__PURE__ */ Ke(() => /* @__PURE__ */ d("span", { class: "badge text-bg-primary px-2" }, "24K", -1)), Mi = { class: "col-7 d-flex flex-column align-items-end" }, ji = /* @__PURE__ */ Ke(() => /* @__PURE__ */ d("div", null, "音频时长，请以生成后的为准", -1)), Hi = { class: "mt-1" }, Fi = /* @__PURE__ */ Ke(() => /* @__PURE__ */ d("span", null, "/", -1)), Bi = /* @__PURE__ */ Nn('<div class="role-list mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-2 column-gap-3" data-v-1b5a3a37><div class="rounded-pill px-1 border" data-v-1b5a3a37>女青年(默认)</div><div class="rounded-pill px-1" data-v-1b5a3a37>男孩儿</div><div class="rounded-pill px-1" data-v-1b5a3a37>男青少年</div><div class="rounded-pill px-1" data-v-1b5a3a37>男中年</div><div class="rounded-pill px-1" data-v-1b5a3a37>男孩儿</div><div class="rounded-pill px-1" data-v-1b5a3a37>男青少年</div><div class="rounded-pill px-1" data-v-1b5a3a37>男中年</div><div class="rounded-pill px-1" data-v-1b5a3a37>男孩儿</div><div class="rounded-pill px-1" data-v-1b5a3a37>男孩儿</div><div class="rounded-pill px-1" data-v-1b5a3a37>男中年</div><div class="rounded-pill px-1" data-v-1b5a3a37>男青少年</div><div class="rounded-pill px-1" data-v-1b5a3a37>男青少年</div><div class="rounded-pill px-1" data-v-1b5a3a37>男中年</div></div>', 1), Ui = { class: "audio-mood mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-1 column-gap-2" }, zi = /* @__PURE__ */ Ke(() => /* @__PURE__ */ d("div", { class: "my-3" }, [
  /* @__PURE__ */ d("span", { class: "border rounded-pill p-1" }, "配音师详情")
], -1)), Wi = { class: "slider-box" }, Gi = { class: "slider-box" }, Yi = /* @__PURE__ */ Nn('<ul class="d-flex flex-row gap-3 my-3" data-v-1b5a3a37><li class="rounded-pill px-1 border" data-v-1b5a3a37>常用</li><li class="rounded-pill px-1" data-v-1b5a3a37>已购</li><li class="rounded-pill px-1" data-v-1b5a3a37>收藏</li><li class="rounded-pill px-1" data-v-1b5a3a37>我的</li></ul>', 1), Xi = { class: "d-flex flex-row flex-wrap row-gap-2 column-gap-3 mb-3" }, qi = /* @__PURE__ */ R({
  __name: "slider-panle",
  setup(e) {
    const { globalEditConfig: t } = be(), n = y(10), s = y(0), r = y([0, 2]), o = y(0), a = y([-10, 10]), l = y(0), u = K(() => $n(n.value)), p = K(() => $n(s.value)), v = xt(t.speed()), m = xt(t.pitch());
    return (h, g) => (V(), L("div", Ti, [
      d("div", Ii, [
        d("div", Vi, [
          d("img", {
            src: b(t).demoAvatar(),
            class: "rounded-circle",
            style: { height: "50px" }
          }, null, 8, Ai),
          d("div", Ri, [
            Ni,
            d("div", Di, [
              i(b(Dn), { class: "fs-6" }, {
                default: _(() => [
                  i(b(js))
                ]),
                _: 1
              }),
              Li
            ])
          ])
        ]),
        d("div", Mi, [
          ji,
          d("div", Hi, [
            d("span", null, Q(p.value), 1),
            Fi,
            d("span", null, Q(u.value), 1)
          ]),
          i(b(yt), {
            max: n.value,
            modelValue: s.value,
            "onUpdate:modelValue": g[0] || (g[0] = (f) => s.value = f),
            size: "small"
          }, null, 8, ["max", "modelValue"])
        ])
      ]),
      Bi,
      d("ul", Ui, [
        d("li", null, [
          i(G)
        ]),
        d("li", null, [
          i(G)
        ]),
        d("li", null, [
          i(G)
        ]),
        d("li", null, [
          i(G)
        ]),
        d("li", null, [
          i(G)
        ]),
        d("li", null, [
          i(G)
        ])
      ]),
      zi,
      d("div", Wi, [
        d("div", null, [
          d("span", null, "语速：" + Q(o.value) + "x", 1)
        ]),
        i(b(yt), {
          modelValue: o.value,
          "onUpdate:modelValue": g[1] || (g[1] = (f) => o.value = f),
          min: r.value[0],
          max: r.value[1],
          step: 0.05,
          marks: v
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      d("div", Gi, [
        d("div", null, [
          d("span", null, "语调：" + Q(l.value), 1)
        ]),
        i(b(yt), {
          modelValue: l.value,
          "onUpdate:modelValue": g[2] || (g[2] = (f) => l.value = f),
          min: a.value[0],
          max: a.value[1],
          step: 0.2,
          marks: m
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      d("div", null, [
        Yi,
        d("ul", Xi, [
          d("li", null, [
            i(G)
          ]),
          d("li", null, [
            i(G)
          ]),
          d("li", null, [
            i(G)
          ]),
          d("li", null, [
            i(G)
          ]),
          d("li", null, [
            i(G)
          ]),
          d("li", null, [
            i(G)
          ]),
          d("li", null, [
            i(G)
          ]),
          d("li", null, [
            i(G)
          ]),
          d("li", null, [
            i(G)
          ]),
          d("li", null, [
            i(G)
          ])
        ])
      ])
    ]));
  }
});
const Ji = /* @__PURE__ */ Z(qi, [["__scopeId", "data-v-1b5a3a37"]]), Qi = (e) => (Be("data-v-9db29a03"), e = e(), Ue(), e), Ki = { class: "box ms-2" }, Zi = { class: "try-play-header text-center d-flex flex-row justify-content-between" }, eu = { class: "try-play-body d-flex flex-row" }, tu = { class: "try-play-left w-50 border-right border-secondary" }, nu = { class: "pe-1" }, su = { class: "type-list d-flex flex-row border-bottom border-secondary" }, ru = /* @__PURE__ */ Qi(() => /* @__PURE__ */ d("div", { class: "py-1 border-top border-secondary" }, null, -1)), ou = { class: "try-play-right w-50 border-start rounded border-top border-secondary overflow-x-hidden overflow-y-auto scrollbar-none" }, au = /* @__PURE__ */ R({
  __name: "try-play-panle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = e, s = y(), r = y(""), o = y(), a = y();
    Fe(() => {
      window.addEventListener("keydown", l);
    }), Lt(() => {
      window.addEventListener("keydown", l);
    }), ve(
      () => n.visible,
      (h) => {
        h && setTimeout(() => {
          m();
        }, 200);
      }
    );
    function l(h) {
      h.code === "Escape" && n.visible && v();
    }
    const { position: u } = Yt(a, {
      initialValue: { x: 100, y: 100 }
    }), { style: p } = qt(o, u);
    function v() {
      t("update:visible", !1);
    }
    function m() {
      var h;
      (h = s.value) == null || h.focus();
    }
    return (h, g) => Ee((V(), L("div", {
      ref_key: "boxRef",
      ref: o,
      style: Mt([b(p), { position: "fixed" }]),
      class: "try-play user-select-none card z-3 shadow"
    }, [
      d("div", Ki, [
        d("div", Zi, [
          d("div", {
            ref_key: "handleRef",
            ref: a,
            class: "col-11 try-play-move"
          }, null, 512),
          d("div", {
            onClick: v,
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
        d("div", eu, [
          d("div", tu, [
            d("div", nu, [
              i(b(dt), {
                onSubmit: g[1] || (g[1] = ne(() => {
                }, ["prevent"]))
              }, {
                default: _(() => [
                  i(b(ft), {
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
            d("div", su, [
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
            i(Pi),
            ru,
            i($i)
          ]),
          d("div", ou, [
            i(Ji)
          ])
        ])
      ])
    ], 4)), [
      [$e, h.visible]
    ]);
  }
});
const lu = /* @__PURE__ */ Z(au, [["__scopeId", "data-v-9db29a03"]]), $s = /* @__PURE__ */ R({
  __name: "try-play",
  setup(e) {
    const t = y(!0);
    function n(s) {
      s || (t.value = !0);
    }
    return (s, r) => (V(), se(An, { to: "body" }, [
      i(_i, {
        visible: t.value,
        "onUpdate:visible": r[0] || (r[0] = (o) => t.value = o)
      }, null, 8, ["visible"]),
      i(lu, {
        visible: !t.value,
        "onUpdate:visible": n
      }, null, 8, ["visible"])
    ]));
  }
});
const iu = {
  install: (e) => {
    e.component("SpeakerMenu", cs), e.component("ContinuousMenu", ds), e.component("ReadMenu", fs), e.component("DigitalMenu", ps), e.component("AliasMenu", ms), e.component("EnglishMenu", vs), e.component("ChangespeedMenu", hs), e.component("RhythmMenu", _s), e.component("SpecialMenu", ys), e.component("MuteMenu", gs), e.component("BgmMenu", bs), e.component("SensitiveMenu", ws), e.component("ManagementMenu", xs), e.component("ConversionMenu", Es), e.component("TryPlay", $s);
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
    return u(!1) || h() || m() || v();
  }
  function o() {
    return c(/\s*/), u(!0) || m() || p() || l(!1);
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
  function v() {
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
  function m() {
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
        value: f(P[2].trim())
      };
  }
  function f(P) {
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
var uu = Rt.exports;
(function(e, t) {
  var n = De && De.__importDefault || function(f) {
    return f && f.__esModule ? f : { default: f };
  };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const s = n(uu);
  function r(f) {
    if (!f.options.indentation && !f.options.lineSeparator)
      return;
    f.content += f.options.lineSeparator;
    let c;
    for (c = 0; c < f.level; c++)
      f.content += f.options.indentation;
  }
  function o(f) {
    f.content = f.content.replace(/ +$/, "");
    let c;
    for (c = 0; c < f.level; c++)
      f.content += f.options.indentation;
  }
  function a(f, c) {
    f.content += c;
  }
  function l(f, c, $) {
    if (typeof f.content == "string")
      u(f.content, c, $);
    else if (f.type === "Element")
      v(f, c, $);
    else if (f.type === "ProcessingInstruction")
      h(f, c);
    else
      throw new Error("Unknown node type: " + f.type);
  }
  function u(f, c, $) {
    if (!$) {
      const T = f.trim();
      (c.options.lineSeparator || T.length === 0) && (f = T);
    }
    f.length > 0 && (!$ && c.content.length > 0 && r(c), a(c, f));
  }
  function p(f, c) {
    const $ = "/" + f.join("/"), T = f[f.length - 1];
    return c.includes(T) || c.includes($);
  }
  function v(f, c, $) {
    if (c.path.push(f.name), !$ && c.content.length > 0 && r(c), a(c, "<" + f.name), m(c, f.attributes), f.children === null || c.options.forceSelfClosingEmptyTag && f.children.length === 0) {
      const T = c.options.whiteSpaceAtEndOfSelfclosingTag ? " />" : "/>";
      a(c, T);
    } else if (f.children.length === 0)
      a(c, "></" + f.name + ">");
    else {
      const T = f.children;
      a(c, ">"), c.level++;
      let j = f.attributes["xml:space"] === "preserve", P = !1;
      if (!j && c.options.ignoredPaths && (P = p(c.path, c.options.ignoredPaths), j = P), !j && c.options.collapseContent) {
        let I = !1, A = !1, S = !1;
        T.forEach(function(E, H) {
          E.type === "Text" ? (E.content.includes(`
`) ? (A = !0, E.content = E.content.trim()) : (H === 0 || H === T.length - 1) && E.content.trim().length === 0 && (E.content = ""), E.content.trim().length > 0 && (I = !0)) : E.type === "CDATA" ? I = !0 : S = !0;
        }), I && (!S || !A) && (j = !0);
      }
      T.forEach(function(I) {
        l(I, c, $ || j);
      }), c.level--, !$ && !j && r(c), P && o(c), a(c, "</" + f.name + ">");
    }
    c.path.pop();
  }
  function m(f, c) {
    Object.keys(c).forEach(function($) {
      const T = c[$].replace(/"/g, "&quot;");
      a(f, " " + $ + '="' + T + '"');
    });
  }
  function h(f, c) {
    c.content.length > 0 && r(c), a(c, "<?" + f.name), m(c, f.attributes), a(c, "?>");
  }
  function g(f, c = {}) {
    c.indentation = "indentation" in c ? c.indentation : "    ", c.collapseContent = c.collapseContent === !0, c.lineSeparator = "lineSeparator" in c ? c.lineSeparator : `\r
`, c.whiteSpaceAtEndOfSelfclosingTag = c.whiteSpaceAtEndOfSelfclosingTag === !0, c.throwOnFailure = c.throwOnFailure !== !1;
    try {
      const $ = (0, s.default)(f, { filter: c.filter, strictMode: c.strictMode }), T = { content: "", level: 0, options: c, path: [] };
      return $.declaration && h($.declaration, T), $.children.forEach(function(j) {
        l(j, T, !1);
      }), c.lineSeparator ? T.content.replace(/\r\n/g, `
`).replace(/\n/g, c.lineSeparator) : T.content;
    } catch ($) {
      if (c.throwOnFailure)
        throw $;
      return f;
    }
  }
  g.minify = (f, c = {}) => g(f, Object.assign(Object.assign({}, c), { indentation: "", lineSeparator: "" })), e.exports = g, t.default = g;
})(At, At.exports);
var cu = At.exports;
const du = /* @__PURE__ */ es(cu), We = (e) => (Be("data-v-6e8ad850"), e = e(), Ue(), e), fu = { class: "editor-title d-flex flex-row align-item-center justify-content-between" }, pu = { class: "title-wrapper d-flex flex-column justify-content-center ps-3" }, mu = /* @__PURE__ */ We(() => /* @__PURE__ */ d("div", { class: "title-author pb-1" }, "SSML编辑器", -1)), vu = { class: "author d-flex flex-row align-items-center justify-content-start" }, hu = /* @__PURE__ */ We(() => /* @__PURE__ */ d("div", null, "未保存", -1)), _u = /* @__PURE__ */ We(() => /* @__PURE__ */ d("span", { class: "iconfont icon-play font-size-12 p-1" }, null, -1)), yu = /* @__PURE__ */ We(() => /* @__PURE__ */ d("div", { class: "d-inline-block" }, null, -1)), gu = { class: "operation-wrapper d-flex flex-row justify-content-center align-items-center" }, bu = /* @__PURE__ */ We(() => /* @__PURE__ */ d("div", { class: "menu-divider" }, null, -1)), wu = /* @__PURE__ */ We(() => /* @__PURE__ */ d("div", { class: "px-1" }, null, -1)), xu = {
  class: "ssml-code",
  style: { "white-space": "pre-wrap" }
}, Eu = { class: "dialog-footer" }, $u = /* @__PURE__ */ R({
  __name: "editor-title",
  setup(e) {
    const t = y(!1), n = y(""), { rootBackgroundaudio: s } = zt(), r = K(() => du(n.value, {
      indentation: "    ",
      filter: (p) => p.type !== "Comment",
      collapseContent: !1,
      lineSeparator: `
`
    })), o = () => {
      n.value = da(), t.value = !0;
    }, a = () => {
      s.src && ct.play(s.src);
    }, l = () => {
      ct.stop(s.src), s.src = "", s.remark = "";
    };
    async function u() {
      await navigator.clipboard.writeText(r.value), t.value = !1;
    }
    return (p, v) => (V(), L(pe, null, [
      d("div", fu, [
        d("div", pu, [
          mu,
          d("div", vu, [
            hu,
            b(s).src ? (V(), se(b(we), {
              key: 0,
              class: "bgm-txt ms-2",
              closable: "",
              size: "small",
              onClick: a,
              onClose: l
            }, {
              default: _(() => [
                _u,
                yu,
                d("span", null, Q(b(s).remark), 1)
              ]),
              _: 1
            })) : Rn("", !0)
          ])
        ]),
        d("div", gu, [
          i(b(fe), {
            type: "primary",
            icon: b(Fs),
            disabled: ""
          }, {
            default: _(() => [
              w("分享")
            ]),
            _: 1
          }, 8, ["icon"]),
          bu,
          i(b(fe), {
            type: "primary",
            onClick: o
          }, {
            default: _(() => [
              w("查看SSML")
            ]),
            _: 1
          }),
          i(b(fe), { disabled: "" }, {
            default: _(() => [
              w("下载音频")
            ]),
            _: 1
          }),
          i(b(fe), { disabled: "" }, {
            default: _(() => [
              w("下载视频")
            ]),
            _: 1
          }),
          i(b(fe), { disabled: "" }, {
            default: _(() => [
              w("下载字幕")
            ]),
            _: 1
          }),
          i(b(fe), { disabled: "" }, {
            default: _(() => [
              w("声音转换")
            ]),
            _: 1
          }),
          wu
        ])
      ]),
      i(b(Ds), {
        modelValue: t.value,
        "onUpdate:modelValue": v[0] || (v[0] = (m) => t.value = m),
        title: "查看SSML",
        width: "80%"
      }, {
        footer: _(() => [
          d("span", Eu, [
            i(b(fe), {
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
          d("pre", xu, Q(r.value), 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
});
const Su = /* @__PURE__ */ Z($u, [["__scopeId", "data-v-6e8ad850"]]), ku = /* @__PURE__ */ R({
  __name: "editor-core",
  emits: ["created", "change"],
  setup(e, { emit: t }) {
    const { editor: n, setEditor: s, globalEditConfig: r } = be(), o = y(null);
    Fe(() => {
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
          ...Ie(r.editorConfig),
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
      u.hoverbarKeys = void 0, l.on(X.ERROR, r.handleError);
    }
    return (l, u) => (V(), L("div", {
      ref_key: "boxRef",
      ref: o,
      class: "edit-core",
      style: { height: "70vh", "overflow-y": "hidden" }
    }, null, 512));
  }
}), Ou = { class: "bar-view border-bottom border-1" }, Cu = /* @__PURE__ */ R({
  __name: "bar-view",
  setup(e) {
    return (t, n) => (V(), L(pe, null, [
      d("div", Ou, [
        i(b(us), null, {
          default: _(() => [
            i(b(Re), { divider: "green" }, {
              default: _(() => [
                i(b(J), {
                  text: "24K高清音质",
                  icon: "play",
                  disabled: ""
                })
              ]),
              _: 1
            }),
            i(b(Re), { divider: "cyan" }, {
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
            i(b(Re), { divider: "orange" }, {
              default: _(() => [
                i(b(hs)),
                i(b(xs)),
                i(b(Es))
              ]),
              _: 1
            }),
            i(b(Re), { divider: "purple" }, {
              default: _(() => [
                i(b(_s)),
                i(b(gs))
              ]),
              _: 1
            }),
            i(b(Re), { divider: "yellow" }, {
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
}), Pu = { class: "editor-view" }, Tu = { class: "editor-box" }, Iu = { class: "editor-core-container shadow pt-1" }, Vu = /* @__PURE__ */ R({
  __name: "editor-view",
  emits: ["onCreated", "onChange"],
  setup(e, { emit: t }) {
    const n = (r) => {
      t("onCreated", r);
    }, s = (r) => {
      t("onChange", r);
    };
    return (r, o) => (V(), L("div", Pu, [
      i(Su),
      d("div", Tu, [
        i(Cu),
        d("div", Iu, [
          i(ku, {
            onChange: s,
            onCreated: n
          })
        ])
      ])
    ]));
  }
});
const Au = /* @__PURE__ */ Z(Vu, [["__scopeId", "data-v-15ef0dbd"]]), Ru = {
  install(e) {
    e.component("EditorView", Au);
  }
}, Hu = {
  install(e, t) {
    e.use(fr()), e.use(() => {
      const { setGlobalEditConfig: n } = be();
      n(Kn(t));
    }), e.use(fa), e.use(ul), e.use(iu), e.use(Ru);
  }
};
export {
  X as WANGEDITOR_EVENT,
  Kn as createGlobalEditorConfig,
  Hu as default
};

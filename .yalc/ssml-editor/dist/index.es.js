var fr = Object.defineProperty;
var pr = (e, t, n) => t in e ? fr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var re = (e, t, n) => (pr(e, typeof t != "symbol" ? t + "" : t, n), n);
import { effectScope as fs, ref as g, markRaw as Ae, toRaw as ie, hasInjectionContext as mr, inject as ps, getCurrentInstance as Kt, watch as te, unref as b, reactive as Mt, isRef as Ye, isReactive as Jt, toRef as kt, nextTick as jt, computed as Z, getCurrentScope as ms, onScopeDispose as vs, toRefs as Ht, shallowRef as Y, shallowReactive as et, defineComponent as L, openBlock as C, createElementBlock as I, normalizeClass as ye, withModifiers as oe, createElementVNode as h, toDisplayString as z, createBlock as X, withCtx as R, createVNode as y, renderSlot as Pe, customRef as vr, onMounted as ge, watchEffect as hr, Fragment as Q, renderList as le, createTextVNode as B, onUnmounted as Qt, Teleport as hs, withDirectives as Oe, normalizeStyle as _t, vShow as Te, createCommentVNode as Ee, provide as yr, pushScopeId as Zt, popScopeId as en } from "vue";
import { DomEditor as D, SlateNode as tn, SlateEditor as q, SlateTransforms as W, SlateRange as pe, Boot as ce, SlateText as rt, SlateElement as gr, createEditor as br } from "@wangeditor/editor";
import { ElForm as wt, ElInput as xt, ElPopover as Re, ElMenu as _r, ElMenuItem as wr, ElSelect as wn, ElOption as xn, ElButton as fe, ElTag as Ve, ElIcon as ys, ElSlider as St, ElDialog as xr } from "element-plus";
import { Search as Er, More as $r, StarFilled as kr, Star as Sr, Minus as Cr, Share as Or } from "@element-plus/icons-vue";
var gs = !1;
function ut(e, t, n) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function Ct(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1);
    return;
  }
  delete e[t];
}
function Tr() {
  return bs().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function bs() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Pr = typeof Proxy == "function", Rr = "devtools-plugin:setup", Vr = "plugin:settings:set";
let He, Ft;
function Ir() {
  var e;
  return He !== void 0 || (typeof window < "u" && window.performance ? (He = !0, Ft = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (He = !0, Ft = global.perf_hooks.performance) : He = !1), He;
}
function Nr() {
  return Ir() ? Ft.now() : Date.now();
}
class Dr {
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
        return Nr();
      }
    }, n && n.on(Vr, (a, l) => {
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
function _s(e, t) {
  const n = e, s = bs(), r = Tr(), o = Pr && n.enableEarlyProxy;
  if (r && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o))
    r.emit(Rr, e, t);
  else {
    const a = o ? new Dr(n, r) : null;
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
const ot = (e) => tt = e, ws = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Me(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Se;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Se || (Se = {}));
const Et = typeof window < "u", nt = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && Et, En = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function Ar(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], { type: e.type }) : e;
}
function nn(e, t, n) {
  const s = new XMLHttpRequest();
  s.open("GET", e), s.responseType = "blob", s.onload = function() {
    $s(s.response, t, n);
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
function dt(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
const ft = typeof navigator == "object" ? navigator : { userAgent: "" }, Es = /* @__PURE__ */ (() => /Macintosh/.test(ft.userAgent) && /AppleWebKit/.test(ft.userAgent) && !/Safari/.test(ft.userAgent))(), $s = Et ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Es ? Lr : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in ft ? Mr : (
      // Fallback to using FileReader and a popup
      jr
    )
  )
) : () => {
};
function Lr(e, t = "download", n) {
  const s = document.createElement("a");
  s.download = t, s.rel = "noopener", typeof e == "string" ? (s.href = e, s.origin !== location.origin ? xs(s.href) ? nn(e, t, n) : (s.target = "_blank", dt(s)) : dt(s)) : (s.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    dt(s);
  }, 0));
}
function Mr(e, t = "download", n) {
  if (typeof e == "string")
    if (xs(e))
      nn(e, t, n);
    else {
      const s = document.createElement("a");
      s.href = e, s.target = "_blank", setTimeout(function() {
        dt(s);
      });
    }
  else
    navigator.msSaveOrOpenBlob(Ar(e, n), t);
}
function jr(e, t, n, s) {
  if (s = s || open("", "_blank"), s && (s.document.title = s.document.body.innerText = "downloading..."), typeof e == "string")
    return nn(e, t, n);
  const r = e.type === "application/octet-stream", o = /constructor/i.test(String(En.HTMLElement)) || "safari" in En, a = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((a || r && o || Es) && typeof FileReader < "u") {
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
function J(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function sn(e) {
  return "_a" in e && "install" in e;
}
function ks() {
  if (!("clipboard" in navigator))
    return J("Your browser doesn't support the Clipboard API", "error"), !0;
}
function Ss(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (J('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Hr(e) {
  if (!ks())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), J("Global state copied to clipboard.");
    } catch (t) {
      if (Ss(t))
        return;
      J("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function Fr(e) {
  if (!ks())
    try {
      Cs(e, JSON.parse(await navigator.clipboard.readText())), J("Global state pasted from clipboard.");
    } catch (t) {
      if (Ss(t))
        return;
      J("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function Ur(e) {
  try {
    $s(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    J("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let Ce;
function Br() {
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
async function zr(e) {
  try {
    const n = await Br()();
    if (!n)
      return;
    const { text: s, file: r } = n;
    Cs(e, JSON.parse(s)), J(`Global state imported from "${r.name}".`);
  } catch (t) {
    J("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function Cs(e, t) {
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
const Os = "🍍 Pinia (root)", Ut = "_root";
function Wr(e) {
  return sn(e) ? {
    id: Ut,
    label: Os
  } : {
    id: e.$id,
    label: e.$id
  };
}
function Gr(e) {
  if (sn(e)) {
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
function Yr(e) {
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
function qr(e) {
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
let ze = !0;
const pt = [], De = "pinia:mutations", ne = "pinia", { assign: Xr } = Object, yt = (e) => "🍍 " + e;
function Kr(e, t) {
  _s({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: pt,
    app: e
  }, (n) => {
    typeof n.now != "function" && J("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: De,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: ne,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            Hr(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await Fr(t), n.sendInspectorTree(ne), n.sendInspectorState(ne);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            Ur(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await zr(t), n.sendInspectorTree(ne), n.sendInspectorState(ne);
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
            r ? typeof r.$reset != "function" ? J(`Cannot reset "${s}" store because it doesn't have a "$reset" method implemented.`, "warn") : (r.$reset(), J(`Store "${s}" reset.`)) : J(`Cannot reset "${s}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((s, r) => {
      const o = s.componentInstance && s.componentInstance.proxy;
      if (o && o._pStores) {
        const a = s.componentInstance.proxy._pStores;
        Object.values(a).forEach((l) => {
          s.instanceData.state.push({
            type: yt(l.$id),
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
            type: yt(l.$id),
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
      if (s.app === e && s.inspectorId === ne) {
        let r = [t];
        r = r.concat(Array.from(t._s.values())), s.rootNodes = (s.filter ? r.filter((o) => "$id" in o ? o.$id.toLowerCase().includes(s.filter.toLowerCase()) : Os.toLowerCase().includes(s.filter.toLowerCase())) : r).map(Wr);
      }
    }), n.on.getInspectorState((s) => {
      if (s.app === e && s.inspectorId === ne) {
        const r = s.nodeId === Ut ? t : t._s.get(s.nodeId);
        if (!r)
          return;
        r && (s.state = Gr(r));
      }
    }), n.on.editInspectorState((s, r) => {
      if (s.app === e && s.inspectorId === ne) {
        const o = s.nodeId === Ut ? t : t._s.get(s.nodeId);
        if (!o)
          return J(`store "${s.nodeId}" not found`, "error");
        const { path: a } = s;
        sn(o) ? a.unshift("state") : (a.length !== 1 || !o._customProperties.has(a[0]) || a[0] in o.$state) && a.unshift("$state"), ze = !1, s.set(o, a, s.state.value), ze = !0;
      }
    }), n.on.editComponentState((s) => {
      if (s.type.startsWith("🍍")) {
        const r = s.type.replace(/^🍍\s*/, ""), o = t._s.get(r);
        if (!o)
          return J(`store "${r}" not found`, "error");
        const { path: a } = s;
        if (a[0] !== "state")
          return J(`Invalid path for store "${r}":
${a}
Only state can be modified.`);
        a[0] = "$state", ze = !1, s.set(o, a, s.state.value), ze = !0;
      }
    });
  });
}
function Jr(e, t) {
  pt.includes(yt(t.$id)) || pt.push(yt(t.$id)), _s({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: pt,
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
      const m = Ts++;
      n.addTimelineEvent({
        layerId: De,
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
          layerId: De,
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
          layerId: De,
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
        n.notifyComponentUpdate(), n.sendInspectorState(ne), ze && n.addTimelineEvent({
          layerId: De,
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
      if (n.notifyComponentUpdate(), n.sendInspectorState(ne), !ze)
        return;
      const u = {
        time: s(),
        title: qr(l),
        data: Xr({ store: _e(t.$id) }, Yr(a)),
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
        layerId: De,
        event: u
      });
    }, { detached: !0, flush: "sync" });
    const r = t._hotUpdate;
    t._hotUpdate = Ae((a) => {
      r(a), n.addTimelineEvent({
        layerId: De,
        event: {
          time: s(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: _e(t.$id),
            info: _e("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(ne), n.sendInspectorState(ne);
    });
    const { $dispose: o } = t;
    t.$dispose = () => {
      o(), n.notifyComponentUpdate(), n.sendInspectorTree(ne), n.sendInspectorState(ne), n.getSettings().logStoreChanges && J(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(ne), n.sendInspectorState(ne), n.getSettings().logStoreChanges && J(`"${t.$id}" store installed 🆕`);
  });
}
let Ts = 0, Ie;
function $n(e, t, n) {
  const s = t.reduce((r, o) => (r[o] = ie(e)[o], r), {});
  for (const r in s)
    e[r] = function() {
      const o = Ts, a = n ? new Proxy(e, {
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
function Qr({ app: e, store: t, options: n }) {
  if (t.$id.startsWith("__hot:"))
    return;
  t._isOptionsAPI = !!n.state, $n(t, Object.keys(n.actions), t._isOptionsAPI);
  const s = t._hotUpdate;
  ie(t)._hotUpdate = function(r) {
    s.apply(this, arguments), $n(t, Object.keys(r._hmrPayload.actions), !!t._isOptionsAPI);
  }, Jr(
    e,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    t
  );
}
function Zr() {
  const e = fs(!0), t = e.run(() => g({}));
  let n = [], s = [];
  const r = Ae({
    install(o) {
      ot(r), r._a = o, o.provide(ws, r), o.config.globalProperties.$pinia = r, nt && Kr(o, r), s.forEach((a) => n.push(a)), s = [];
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
  return nt && typeof Proxy < "u" && r.use(Qr), r;
}
function Ps(e, t) {
  for (const n in t) {
    const s = t[n];
    if (!(n in e))
      continue;
    const r = e[n];
    Me(r) && Me(s) && !Ye(s) && !Jt(s) ? e[n] = Ps(r, s) : e[n] = s;
  }
  return e;
}
const Rs = () => {
};
function kn(e, t, n, s = Rs) {
  e.push(t);
  const r = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), s());
  };
  return !n && ms() && vs(r), r;
}
function Fe(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const eo = (e) => e();
function Bt(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, s) => e.set(s, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], r = e[n];
    Me(r) && Me(s) && e.hasOwnProperty(n) && !Ye(s) && !Jt(s) ? e[n] = Bt(r, s) : e[n] = s;
  }
  return e;
}
const to = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function no(e) {
  return !Me(e) || !e.hasOwnProperty(to);
}
const { assign: he } = Object;
function Sn(e) {
  return !!(Ye(e) && e.effect);
}
function Cn(e, t, n, s) {
  const { state: r, actions: o, getters: a } = t, l = n.state.value[e];
  let i;
  function u() {
    !l && (process.env.NODE_ENV === "production" || !s) && (n.state.value[e] = r ? r() : {});
    const m = process.env.NODE_ENV !== "production" && s ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      Ht(g(r ? r() : {}).value)
    ) : Ht(n.state.value[e]);
    return he(m, o, Object.keys(a || {}).reduce((p, f) => (process.env.NODE_ENV !== "production" && f in m && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${f}" in store "${e}".`), p[f] = Ae(Z(() => {
      ot(n);
      const v = n._s.get(e);
      return a[f].call(v, v);
    })), p), {}));
  }
  return i = zt(e, u, t, n, s, !0), i;
}
function zt(e, t, n = {}, s, r, o) {
  let a;
  const l = he({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !s._e.active)
    throw new Error("Pinia destroyed");
  const i = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !gs && (i.onTrigger = (O) => {
    u ? v = O : u == !1 && !x._hotUpdating && (Array.isArray(v) ? v.push(O) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let u, m, p = [], f = [], v;
  const d = s.state.value[e];
  !o && !d && (process.env.NODE_ENV === "production" || !r) && (s.state.value[e] = {});
  const c = g({});
  let w;
  function k(O) {
    let T;
    u = m = !1, process.env.NODE_ENV !== "production" && (v = []), typeof O == "function" ? (O(s.state.value[e]), T = {
      type: Se.patchFunction,
      storeId: e,
      events: v
    }) : (Bt(s.state.value[e], O), T = {
      type: Se.patchObject,
      payload: O,
      storeId: e,
      events: v
    });
    const N = w = Symbol();
    jt().then(() => {
      w === N && (u = !0);
    }), m = !0, Fe(p, T, s.state.value[e]);
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
    } : Rs
  );
  function $() {
    a.stop(), p = [], f = [], s._s.delete(e);
  }
  function S(O, T) {
    return function() {
      ot(s);
      const N = Array.from(arguments), U = [], ue = [];
      function Qe(M) {
        U.push(M);
      }
      function Ze(M) {
        ue.push(M);
      }
      Fe(f, {
        args: N,
        name: O,
        store: x,
        after: Qe,
        onError: Ze
      });
      let A;
      try {
        A = T.apply(this && this.$id === e ? this : x, N);
      } catch (M) {
        throw Fe(ue, M), M;
      }
      return A instanceof Promise ? A.then((M) => (Fe(U, M), M)).catch((M) => (Fe(ue, M), Promise.reject(M))) : (Fe(U, A), A);
    };
  }
  const P = /* @__PURE__ */ Ae({
    actions: {},
    getters: {},
    state: [],
    hotState: c
  }), _ = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: kn.bind(null, f),
    $patch: k,
    $reset: V,
    $subscribe(O, T = {}) {
      const N = kn(p, O, T.detached, () => U()), U = a.run(() => te(() => s.state.value[e], (ue) => {
        (T.flush === "sync" ? m : u) && O({
          storeId: e,
          type: Se.direct,
          events: v
        }, ue);
      }, he({}, i, T)));
      return N;
    },
    $dispose: $
  }, x = Mt(process.env.NODE_ENV !== "production" || nt ? he(
    {
      _hmrPayload: P,
      _customProperties: Ae(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    _
    // must be added later
    // setupStore
  ) : _);
  s._s.set(e, x);
  const j = s._a && s._a.runWithContext || eo, ee = s._e.run(() => (a = fs(), j(() => a.run(t))));
  for (const O in ee) {
    const T = ee[O];
    if (Ye(T) && !Sn(T) || Jt(T))
      process.env.NODE_ENV !== "production" && r ? ut(c.value, O, kt(ee, O)) : o || (d && no(T) && (Ye(T) ? T.value = d[O] : Bt(T, d[O])), s.state.value[e][O] = T), process.env.NODE_ENV !== "production" && P.state.push(O);
    else if (typeof T == "function") {
      const N = process.env.NODE_ENV !== "production" && r ? T : S(O, T);
      ee[O] = N, process.env.NODE_ENV !== "production" && (P.actions[O] = T), l.actions[O] = T;
    } else
      process.env.NODE_ENV !== "production" && Sn(T) && (P.getters[O] = o ? (
        // @ts-expect-error
        n.getters[O]
      ) : T, Et && (ee._getters || // @ts-expect-error: same
      (ee._getters = Ae([]))).push(O));
  }
  if (he(x, ee), he(ie(x), ee), Object.defineProperty(x, "$state", {
    get: () => process.env.NODE_ENV !== "production" && r ? c.value : s.state.value[e],
    set: (O) => {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error("cannot set hotState");
      k((T) => {
        he(T, O);
      });
    }
  }), process.env.NODE_ENV !== "production" && (x._hotUpdate = Ae((O) => {
    x._hotUpdating = !0, O._hmrPayload.state.forEach((T) => {
      if (T in x.$state) {
        const N = O.$state[T], U = x.$state[T];
        typeof N == "object" && Me(N) && Me(U) ? Ps(N, U) : O.$state[T] = U;
      }
      ut(x, T, kt(O.$state, T));
    }), Object.keys(x.$state).forEach((T) => {
      T in O.$state || Ct(x, T);
    }), u = !1, m = !1, s.state.value[e] = kt(O._hmrPayload, "hotState"), m = !0, jt().then(() => {
      u = !0;
    });
    for (const T in O._hmrPayload.actions) {
      const N = O[T];
      ut(x, T, S(T, N));
    }
    for (const T in O._hmrPayload.getters) {
      const N = O._hmrPayload.getters[T], U = o ? (
        // special handling of options api
        Z(() => (ot(s), N.call(x, x)))
      ) : N;
      ut(x, T, U);
    }
    Object.keys(x._hmrPayload.getters).forEach((T) => {
      T in O._hmrPayload.getters || Ct(x, T);
    }), Object.keys(x._hmrPayload.actions).forEach((T) => {
      T in O._hmrPayload.actions || Ct(x, T);
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
function rn(e, t, n) {
  let s, r;
  const o = typeof t == "function";
  if (typeof e == "string")
    s = e, r = o ? n : t;
  else if (r = e, s = e.id, process.env.NODE_ENV !== "production" && typeof s != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function a(l, i) {
    const u = mr();
    if (l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && tt && tt._testing ? null : l) || (u ? ps(ws, null) : null), l && ot(l), process.env.NODE_ENV !== "production" && !tt)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    l = tt, l._s.has(s) || (o ? zt(s, t, r, l) : Cn(s, r, l), process.env.NODE_ENV !== "production" && (a._pinia = l));
    const m = l._s.get(s);
    if (process.env.NODE_ENV !== "production" && i) {
      const p = "__hot:" + s, f = o ? zt(p, t, r, l, !0) : Cn(p, he({}, r), l, !0);
      i._hotUpdate(f), delete l.state.value[p], l._s.delete(p);
    }
    if (process.env.NODE_ENV !== "production" && Et) {
      const p = Kt();
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
function On() {
  return { id: "", src: "" };
}
function de() {
  return () => Promise.resolve([]);
}
function Vs(e) {
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
    audioUpload: () => On(),
    transfer: () => On(),
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
const so = () => ({
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
}), ro = () => ({
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
}), at = () => "https://img.sdaxia.top/upload/4314c841777e4d20901cd5d04a28e91a.png", me = rn("--editor-config", () => {
  const e = Y(), t = Y(), n = Z(() => e.value), s = Z(() => {
    if (t.value)
      return t.value;
    throw Error("请设置GlobalEditorConfig");
  });
  return { editor: n, globalEditConfig: s, setEditor: (a) => {
    e.value = a;
  }, setGlobalEditConfig: (a) => {
    t.value = a ?? Vs();
  } };
}), oo = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => D.getNodeType(r) === "ssml-audio" ? !0 : t(r), s.isVoid = (r) => D.getNodeType(r) === "ssml-audio" ? !tn.string(r) : n(r), s;
};
function Tn(e, t, n, s, r) {
  const o = t === void 0 ? void 0 : t.key;
  return { sel: e, data: t, children: n, text: s, elm: r, key: o };
}
const Pn = Array.isArray;
function Ot(e) {
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
function E(e, t, n) {
  let s = {}, r, o, a;
  if (n !== void 0 ? (t !== null && (s = t), Pn(n) ? r = n : Ot(n) ? o = n.toString() : n && n.sel && (r = [n])) : t != null && (Pn(t) ? r = t : Ot(t) ? o = t.toString() : t && t.sel ? r = [t] : s = t), r !== void 0)
    for (a = 0; a < r.length; ++a)
      Ot(r[a]) && (r[a] = Tn(void 0, void 0, void 0, r[a], void 0));
  return e[0] === "s" && e[1] === "v" && e[2] === "g" && (e.length === 3 || e[3] === "." || e[3] === "#") && Is(s, r, e), Tn(e, s, r, o, void 0);
}
var We = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function on(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ns = "Expected a function", Rn = 0 / 0, ao = "[object Symbol]", lo = /^\s+|\s+$/g, io = /^[-+]0x[0-9a-f]+$/i, uo = /^0b[01]+$/i, co = /^0o[0-7]+$/i, fo = parseInt, po = typeof We == "object" && We && We.Object === Object && We, mo = typeof self == "object" && self && self.Object === Object && self, vo = po || mo || Function("return this")(), ho = Object.prototype, yo = ho.toString, go = Math.max, bo = Math.min, Tt = function() {
  return vo.Date.now();
};
function _o(e, t, n) {
  var s, r, o, a, l, i, u = 0, m = !1, p = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(Ns);
  t = Vn(t) || 0, gt(n) && (m = !!n.leading, p = "maxWait" in n, o = p ? go(Vn(n.maxWait) || 0, t) : o, f = "trailing" in n ? !!n.trailing : f);
  function v(_) {
    var x = s, j = r;
    return s = r = void 0, u = _, a = e.apply(j, x), a;
  }
  function d(_) {
    return u = _, l = setTimeout(k, t), m ? v(_) : a;
  }
  function c(_) {
    var x = _ - i, j = _ - u, ee = t - x;
    return p ? bo(ee, o - j) : ee;
  }
  function w(_) {
    var x = _ - i, j = _ - u;
    return i === void 0 || x >= t || x < 0 || p && j >= o;
  }
  function k() {
    var _ = Tt();
    if (w(_))
      return V(_);
    l = setTimeout(k, c(_));
  }
  function V(_) {
    return l = void 0, f && s ? v(_) : (s = r = void 0, a);
  }
  function $() {
    l !== void 0 && clearTimeout(l), u = 0, s = i = r = l = void 0;
  }
  function S() {
    return l === void 0 ? a : V(Tt());
  }
  function P() {
    var _ = Tt(), x = w(_);
    if (s = arguments, r = this, i = _, x) {
      if (l === void 0)
        return d(i);
      if (p)
        return l = setTimeout(k, t), v(i);
    }
    return l === void 0 && (l = setTimeout(k, t)), a;
  }
  return P.cancel = $, P.flush = S, P;
}
function wo(e, t, n) {
  var s = !0, r = !0;
  if (typeof e != "function")
    throw new TypeError(Ns);
  return gt(n) && (s = "leading" in n ? !!n.leading : s, r = "trailing" in n ? !!n.trailing : r), _o(e, t, {
    leading: s,
    maxWait: t,
    trailing: r
  });
}
function gt(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function xo(e) {
  return !!e && typeof e == "object";
}
function Eo(e) {
  return typeof e == "symbol" || xo(e) && yo.call(e) == ao;
}
function Vn(e) {
  if (typeof e == "number")
    return e;
  if (Eo(e))
    return Rn;
  if (gt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = gt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(lo, "");
  var n = uo.test(e);
  return n || co.test(e) ? fo(e.slice(2), n ? 2 : 8) : io.test(e) ? Rn : +e;
}
var $o = wo;
const ae = /* @__PURE__ */ on($o);
function In(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function an(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {}), Object.keys(t).forEach(function(n) {
    typeof e[n] > "u" ? e[n] = t[n] : In(t[n]) && In(e[n]) && Object.keys(t[n]).length > 0 && an(e[n], t[n]);
  });
}
var Ds = {
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
function ln() {
  var e = typeof document < "u" ? document : {};
  return an(e, Ds), e;
}
var ko = {
  document: Ds,
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
function As() {
  var e = typeof window < "u" ? window : {};
  return an(e, ko), e;
}
function So(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function Wt(e) {
  return Wt = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Wt(e);
}
function bt(e, t) {
  return bt = Object.setPrototypeOf || function(s, r) {
    return s.__proto__ = r, s;
  }, bt(e, t);
}
function Co() {
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
function mt(e, t, n) {
  return Co() ? mt = Reflect.construct : mt = function(r, o, a) {
    var l = [null];
    l.push.apply(l, o);
    var i = Function.bind.apply(r, l), u = new i();
    return a && bt(u, a.prototype), u;
  }, mt.apply(null, arguments);
}
function Oo(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Gt(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Gt = function(s) {
    if (s === null || !Oo(s))
      return s;
    if (typeof s != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(s))
        return t.get(s);
      t.set(s, r);
    }
    function r() {
      return mt(s, arguments, Wt(this).constructor);
    }
    return r.prototype = Object.create(s.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), bt(r, s);
  }, Gt(e);
}
function To(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Po(e) {
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
  So(t, e);
  function t(n) {
    var s;
    return s = e.call.apply(e, [this].concat(n)) || this, Po(To(s)), s;
  }
  return t;
}(/* @__PURE__ */ Gt(Array));
function un(e) {
  e === void 0 && (e = []);
  var t = [];
  return e.forEach(function(n) {
    Array.isArray(n) ? t.push.apply(t, un(n)) : t.push(n);
  }), t;
}
function Ro(e) {
  for (var t = [], n = 0; n < e.length; n += 1)
    t.indexOf(e[n]) === -1 && t.push(e[n]);
  return t;
}
function Vo(e) {
  return e.toLowerCase().replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function Io(e, t) {
  if (typeof e != "string")
    return [e];
  for (var n = [], s = t.querySelectorAll(e), r = 0; r < s.length; r += 1)
    n.push(s[r]);
  return n;
}
function F(e, t) {
  var n = As(), s = ln(), r = [];
  if (!t && e instanceof Le)
    return e;
  if (!e)
    return new Le(r);
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
      r = Io(e.trim(), t || s);
  } else if (e.nodeType || e === n || e === s)
    r.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof Le)
      return e;
    r = e;
  }
  return new Le(Ro(r));
}
F.fn = Le.prototype;
function Nn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = un(t.map(function(r) {
    return r.split(" ");
  }));
  return this.forEach(function(r) {
    var o;
    (o = r.classList).add.apply(o, s);
  }), this;
}
function Dn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = un(t.map(function(r) {
    return r.split(" ");
  }));
  return this.forEach(function(r) {
    var o;
    (o = r.classList).remove.apply(o, s);
  }), this;
}
function An(e, t) {
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
function Ln() {
  var e = this[0];
  if (e) {
    var t = {};
    if (e.dataset)
      for (var n in e.dataset)
        t[n] = e.dataset[n];
    else
      for (var s = 0; s < e.attributes.length; s += 1) {
        var r = e.attributes[s];
        r.name.indexOf("data-") >= 0 && (t[Vo(r.name.split("data-")[1])] = r.value);
      }
    for (var o in t)
      t[o] === "false" ? t[o] = !1 : t[o] === "true" ? t[o] = !0 : parseFloat(t[o]) === t[o] * 1 && (t[o] *= 1);
    return t;
  }
}
function Mn(e) {
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
function jn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = t[0], r = t[1], o = t[2], a = t[3];
  typeof t[1] == "function" && (s = t[0], o = t[1], a = t[2], r = void 0), a || (a = !1);
  function l(c) {
    var w = c.target;
    if (w) {
      var k = c.target.dom7EventData || [];
      if (k.indexOf(c) < 0 && k.unshift(c), F(w).is(r))
        o.apply(w, k);
      else
        for (var V = F(w).parents(), $ = 0; $ < V.length; $ += 1)
          F(V[$]).is(r) && o.apply(V[$], k);
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
function Hn() {
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
function Fn() {
  for (var e = 0; e < this.length; e += 1)
    this[e].style.display = "none";
  return this;
}
function Un(e) {
  return e ? (this.forEach(function(t, n) {
    e.apply(t, [t, n]);
  }), this) : this;
}
function Bn(e) {
  if (typeof e > "u")
    return this[0] ? this[0].innerHTML : null;
  for (var t = 0; t < this.length; t += 1)
    this[t].innerHTML = e;
  return this;
}
function zn(e) {
  var t = As(), n = ln(), s = this[0], r, o;
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
  if (e.nodeType || e instanceof Le) {
    for (r = e.nodeType ? [e] : e, o = 0; o < r.length; o += 1)
      if (r[o] === s)
        return !0;
    return !1;
  }
  return !1;
}
function Wn() {
  for (var e, t = ln(), n = 0; n < arguments.length; n += 1) {
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
function Gn(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var s = this[n].parentNode; s; )
      e ? F(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
  return F(t);
}
function Yn(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var s = this[n].querySelectorAll(e), r = 0; r < s.length; r += 1)
      t.push(s[r]);
  return F(t);
}
function qn(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var s = this[n].children, r = 0; r < s.length; r += 1)
      (!e || F(s[r]).is(e)) && t.push(s[r]);
  return F(t);
}
var No = "resize scroll".split(" ");
function Ls(e) {
  function t() {
    for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)
      s[r] = arguments[r];
    if (typeof s[0] > "u") {
      for (var o = 0; o < this.length; o += 1)
        No.indexOf(e) < 0 && (e in this[o] ? this[o][e]() : F(this[o]).trigger(e));
      return this;
    }
    return this.on.apply(this, [e].concat(s));
  }
  return t;
}
var Xn = Ls("click"), Kn = Ls("focus");
Fn && (F.fn.hide = Fn);
Wn && (F.fn.append = Wn);
Xn && (F.fn.click = Xn);
jn && (F.fn.on = jn);
Hn && (F.fn.off = Hn);
Kn && (F.fn.focus = Kn);
An && (F.fn.attr = An);
Mn && (F.fn.val = Mn);
Bn && (F.fn.html = Bn);
Ln && (F.fn.dataset = Ln);
Nn && (F.fn.addClass = Nn);
Dn && (F.fn.removeClass = Dn);
qn && (F.fn.children = qn);
Un && (F.fn.each = Un);
Yn && (F.fn.find = Yn);
zn && (F.fn.is = zn);
Gn && (F.fn.parents = Gn);
const Fd = globalThis.Node, Ud = globalThis.Comment, Bd = globalThis.Element, zd = globalThis.Text, Wd = globalThis.Range, Gd = globalThis.Selection, Yd = globalThis.StaticRange;
let Do = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function qd(e = "r") {
  return `${e}-${Do()}`;
}
let Ao = class {
  constructor() {
    re(this, "audio");
    re(this, "src");
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
const qe = new Ao();
function Jn(e) {
  const t = Math.floor(e / 60), n = e % 60, s = String(t).padStart(2, "0"), r = String(n).padStart(2, "0");
  return `${s}:${r}`;
}
class Lo {
  constructor(t, n) {
    re(this, "id");
    re(this, "accept");
    re(this, "dom");
    re(this, "isdestroy", !1);
    re(this, "resolve");
    re(this, "reject");
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
class Mo {
  constructor(t) {
    re(this, "cancelled", !1);
    re(this, "timeoutId", null);
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
function jo(e) {
  const { selection: t } = e;
  if (t) {
    const [n, s] = pe.edges(t), r = q.range(e, n, s), o = q.string(e, r), a = o.trimEnd();
    if (a !== o) {
      const l = o.length - a.length, i = { ...s, offset: s.offset - l }, u = { ...t, anchor: n, focus: i };
      W.select(e, u);
    }
  }
}
function Qn(e, t) {
  q.withoutNormalizing(e, () => {
    const n = q.start(e, t), s = q.end(e, t);
    W.insertText(e, " ", { at: n }), W.insertText(e, " ", {
      at: { path: s.path, offset: s.offset + 1 }
    }), W.select(e, {
      anchor: { path: n.path, offset: n.offset + 1 },
      focus: { path: s.path, offset: s.offset + 1 }
    });
  });
}
function Xe(e, t) {
  q.withoutNormalizing(e, () => {
    const n = q.before(e, t), s = q.after(e, t);
    if (!n || !s)
      return;
    const r = {
      anchor: { path: n.path, offset: n.offset - 1 },
      focus: { path: n.path, offset: n.offset }
    }, o = {
      anchor: { path: s.path, offset: s.offset },
      focus: { path: s.path, offset: s.offset + 1 }
    };
    q.string(e, r) === " " && W.delete(e, { at: r }), q.string(e, o) === " " && W.delete(e, { at: o });
  });
}
const Ho = {
  type: "ssml-audio",
  renderElem: (e, t, n) => t ? Fo(e, t, n) : Uo(e, n)
};
function Fo(e, t, n) {
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
              o.preventDefault(), qe.stop(r);
              const a = D.findPath(n, e);
              Xe(n, a), W.unwrapNodes(n, { at: a });
            })
          }
        }),
        E("span.iconfont.icon-play", {
          on: {
            click: ae((o) => {
              o.preventDefault(), qe.play(r);
            })
          }
        }),
        E("span.data-content", { attrs: { "data-content": s } })
      ]
    )
  ]);
}
function Uo(e, t) {
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
              r.preventDefault(), qe.stop(s);
              const o = D.findPath(t, e);
              W.delete(t, { at: o });
            })
          }
        }),
        E("span.iconfont.icon-play", {
          on: {
            click: ae((r) => {
              r.preventDefault(), qe.play(s);
            })
          }
        }),
        E("span.data-content", { attrs: { "data-content": n } })
      ]
    )
  ]);
}
const Bo = {
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
}, zo = {
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
}, Wo = {
  editorPlugin: oo,
  renderElems: [Ho],
  elemsToHtml: [Bo],
  parseElemsHtml: [zo]
}, Go = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => D.getNodeType(r) === "ssml-break" ? !0 : t(r), s.isVoid = (r) => D.getNodeType(r) === "ssml-break" ? !0 : n(r), s;
}, Yo = {
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
}, qo = {
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
}, Xo = {
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
}, Ko = {
  editorPlugin: Go,
  renderElems: [Yo],
  elemsToHtml: [qo],
  parseElemsHtml: [Xo]
}, Jo = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => D.getNodeType(r) === "ssml-emphasis" ? !0 : t(r), s.isVoid = (r) => D.getNodeType(r) === "ssml-emphasis" ? !1 : n(r), s;
}, Qo = {
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
}, Zo = {
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
}, ea = {
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
}, ta = {
  editorPlugin: Jo,
  renderElems: [Qo],
  elemsToHtml: [Zo],
  parseElemsHtml: [ea]
}, na = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => D.getNodeType(r) === "ssml-mstts:express-as" ? !0 : t(r), s.isVoid = (r) => D.getNodeType(r) === "ssml-mstts:express-as" ? !1 : n(r), s;
}, sa = {
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
}, ra = {
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
}, oa = {
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
}, aa = {
  editorPlugin: na,
  renderElems: [sa],
  elemsToHtml: [ra],
  parseElemsHtml: [oa]
}, la = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => D.getNodeType(r) === "ssml-p" ? !0 : t(r), s.isVoid = (r) => D.getNodeType(r) === "ssml-p" ? !1 : n(r), s;
}, ia = {
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
}, ua = {
  type: "ssml-p",
  elemToHtml: (e, t) => {
    const { remark: n } = e;
    return `<span
          data-w-e-type="ssml-p"
          data-w-e-is-inline
          data-ow-remark="${n}"
        >${t}</span>`;
  }
}, ca = {
  selector: 'span[data-w-e-type="ssml-p"]',
  parseElemHtml: (e, t) => ({
    type: "ssml-p",
    remark: e.getAttribute("data-ow-remark") || "",
    children: t
  })
}, da = {
  editorPlugin: la,
  renderElems: [ia],
  elemsToHtml: [ua],
  parseElemsHtml: [ca]
}, fa = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => D.getNodeType(r) === "ssml-phoneme" ? !0 : t(r), s.isVoid = (r) => D.getNodeType(r) === "ssml-phoneme" ? !1 : n(r), s;
}, pa = {
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
                Xe(n, o), W.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, ma = {
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
}, va = {
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
}, ha = {
  editorPlugin: fa,
  renderElems: [pa],
  elemsToHtml: [ma],
  parseElemsHtml: [va]
}, ya = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => D.getNodeType(r) === "ssml-prosody" ? !0 : t(r), s.isVoid = (r) => D.getNodeType(r) === "ssml-prosody" ? !1 : n(r), s;
}, ga = {
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
                Xe(n, o), W.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, ba = {
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
}, _a = {
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
}, wa = {
  editorPlugin: ya,
  renderElems: [ga],
  elemsToHtml: [ba],
  parseElemsHtml: [_a]
}, xa = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => D.getNodeType(r) === "ssml-s" ? !0 : t(r), s.isVoid = (r) => D.getNodeType(r) === "ssml-s" ? !1 : n(r), s;
}, Ea = {
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
}, $a = {
  type: "ssml-s",
  elemToHtml: (e, t) => {
    const { remark: n } = e;
    return `<span
          data-w-e-type="ssml-s"
          data-w-e-is-inline
          data-ow-remark="${n}"
        >${t}</span>`;
  }
}, ka = {
  selector: 'span[data-w-e-type="ssml-s"]',
  parseElemHtml: (e, t) => ({
    type: "ssml-s",
    remark: e.getAttribute("data-ow-remark") || "",
    children: t
  })
}, Sa = {
  editorPlugin: xa,
  renderElems: [Ea],
  elemsToHtml: [$a],
  parseElemsHtml: [ka]
}, Ca = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => D.getNodeType(r) === "ssml-say-as" ? !0 : t(r), s.isVoid = (r) => D.getNodeType(r) === "ssml-say-as" ? !1 : n(r), s;
}, Oa = {
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
                Xe(n, o), W.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, Ta = {
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
}, Pa = {
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
}, Ra = {
  editorPlugin: Ca,
  renderElems: [Oa],
  elemsToHtml: [Ta],
  parseElemsHtml: [Pa]
}, Va = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => D.getNodeType(r) === "ssml-sub" ? !0 : t(r), s.isVoid = (r) => D.getNodeType(r) === "ssml-sub" ? !1 : n(r), s;
}, Ia = {
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
                Xe(n, o), W.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, Na = {
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
}, Da = {
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
}, Aa = {
  editorPlugin: Va,
  renderElems: [Ia],
  elemsToHtml: [Na],
  parseElemsHtml: [Da]
}, La = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => D.getNodeType(r) === "ssml-voice" ? !0 : t(r), s.isVoid = (r) => D.getNodeType(r) === "ssml-voice" ? !1 : n(r), s;
}, Ma = {
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
}, ja = {
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
}, Ha = {
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
}, Fa = {
  editorPlugin: La,
  renderElems: [Ma],
  elemsToHtml: [ja],
  parseElemsHtml: [Ha]
}, Ua = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => D.getNodeType(r) === "custom-management" ? !0 : t(r), s.isVoid = (r) => D.getNodeType(r) === "custom-management" ? !1 : n(r), s;
}, Ba = {
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
                Xe(n, o), W.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, za = {
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
}, Wa = {
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
}, Ga = {
  editorPlugin: Ua,
  renderElems: [Ba],
  elemsToHtml: [za],
  parseElemsHtml: [Wa]
}, Ya = (e) => {
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
    return p.includes(v) ? (e.selection && Qn(e, e.selection), W.insertNodes(e, f)) : v === "ssml-audio" && tn.string(f) ? (e.selection && Qn(e, e.selection), W.insertNodes(e, f)) : u(f);
  }, m;
};
const qa = {
  install() {
    ce.registerModule(Wo), ce.registerModule(Ko), ce.registerModule(ta), ce.registerModule(aa), ce.registerModule(da), ce.registerModule(ha), ce.registerModule(wa), ce.registerModule(Sa), ce.registerModule(Ra), ce.registerModule(Aa), ce.registerModule(Fa), ce.registerModule(Ga), ce.registerPlugin(Ya);
  }
}, je = rn("--editor-ssml", () => {
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
function ct() {
  return { label: "", value: "" };
}
function Xa() {
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
function Ms() {
  return {
    word: "",
    category: "",
    gender: "",
    tag: ""
  };
}
const cn = rn("--editor-try-play", () => {
  const e = je(), t = g(Xa());
  return { speaker: Z(() => t.value), setSpeaker: (r) => {
    t.value = r, e.rootVoice.name = r.value;
  } };
}), Ka = { class: "bar-button-icon" }, Ja = {
  class: "fw-normal",
  style: { "font-size": "0.85rem" }
}, Qa = /* @__PURE__ */ L({
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
      h("div", Ka, [
        h("span", {
          class: ye(["fs-3 iconfont-moyin", [`moyin-icon_${r.icon}`]])
        }, null, 2)
      ]),
      h("div", Ja, z(r.text), 1)
    ], 34));
  }
});
const ve = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, se = /* @__PURE__ */ ve(Qa, [["__scopeId", "data-v-2da9a7ca"]]);
const dn = /* @__PURE__ */ L({
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
    }), (l, i) => (C(), X(b(wt), {
      onSubmit: oe(a, ["prevent"])
    }, {
      default: R(() => [
        y(b(xt), {
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
const Za = /* @__PURE__ */ L({
  __name: "bar-popover",
  props: {
    visible: { type: Boolean },
    trigger: {},
    hideAfter: {},
    width: {}
  },
  emits: ["update:visible"],
  setup(e) {
    return (t, n) => (C(), X(b(Re), {
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
function $t(e) {
  return ms() ? (vs(e), !0) : !1;
}
function we(e) {
  return typeof e == "function" ? e() : b(e);
}
const js = typeof window < "u", el = (e) => e != null, vt = () => {
};
var tl = Object.defineProperty, nl = Object.defineProperties, sl = Object.getOwnPropertyDescriptors, Zn = Object.getOwnPropertySymbols, rl = Object.prototype.hasOwnProperty, ol = Object.prototype.propertyIsEnumerable, es = (e, t, n) => t in e ? tl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, al = (e, t) => {
  for (var n in t || (t = {}))
    rl.call(t, n) && es(e, n, t[n]);
  if (Zn)
    for (var n of Zn(t))
      ol.call(t, n) && es(e, n, t[n]);
  return e;
}, ll = (e, t) => nl(e, sl(t));
function il(e, t = {}) {
  if (!Ye(e))
    return Ht(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const s in e.value)
    n[s] = vr(() => ({
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
            const l = ll(al({}, e.value), { [s]: r });
            Object.setPrototypeOf(l, Object.getPrototypeOf(e.value)), e.value = l;
          }
        else
          e.value[s] = r;
      }
    }));
  return n;
}
function Hs(e, t = !0) {
  Kt() ? ge(e) : t ? e() : jt(e);
}
function xe(e) {
  var t;
  const n = we(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Ne = js ? window : void 0;
function Ge(...e) {
  let t, n, s, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, r] = e, t = Ne) : [t, n, s, r] = e, !t)
    return vt;
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
  return $t(u), u;
}
function ul() {
  const e = g(!1);
  return Kt() && ge(() => {
    e.value = !0;
  }), e;
}
function fn(e) {
  const t = ul();
  return Z(() => (t.value, !!e()));
}
function cl(e, t = {}) {
  const { window: n = Ne } = t, s = fn(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let r;
  const o = g(!1), a = (u) => {
    o.value = u.matches;
  }, l = () => {
    r && ("removeEventListener" in r ? r.removeEventListener("change", a) : r.removeListener(a));
  }, i = hr(() => {
    s.value && (l(), r = n.matchMedia(we(e)), "addEventListener" in r ? r.addEventListener("change", a) : r.addListener(a), o.value = r.matches);
  });
  return $t(() => {
    i(), l(), r = void 0;
  }), o;
}
var dl = Object.defineProperty, fl = Object.defineProperties, pl = Object.getOwnPropertyDescriptors, ts = Object.getOwnPropertySymbols, ml = Object.prototype.hasOwnProperty, vl = Object.prototype.propertyIsEnumerable, ns = (e, t, n) => t in e ? dl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, hl = (e, t) => {
  for (var n in t || (t = {}))
    ml.call(t, n) && ns(e, n, t[n]);
  if (ts)
    for (var n of ts(t))
      vl.call(t, n) && ns(e, n, t[n]);
  return e;
}, yl = (e, t) => fl(e, pl(t));
function pn(e, t = {}) {
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
  ), w = g(), k = (_) => r ? r.includes(_.pointerType) : !0, V = (_) => {
    we(o) && _.preventDefault(), we(a) && _.stopPropagation();
  }, $ = (_) => {
    if (!k(_) || we(l) && _.target !== we(e))
      return;
    const x = we(e).getBoundingClientRect(), j = {
      x: _.clientX - x.left,
      y: _.clientY - x.top
    };
    (m == null ? void 0 : m(j, _)) !== !1 && (w.value = j, V(_));
  }, S = (_) => {
    if (!k(_) || !w.value)
      return;
    let { x, y: j } = c.value;
    (f === "x" || f === "both") && (x = _.clientX - w.value.x), (f === "y" || f === "both") && (j = _.clientY - w.value.y), c.value = {
      x,
      y: j
    }, i == null || i(c.value, _), V(_);
  }, P = (_) => {
    k(_) && w.value && (w.value = void 0, u == null || u(c.value, _), V(_));
  };
  if (js) {
    const _ = { capture: (s = t.capture) != null ? s : !0 };
    Ge(d, "pointerdown", $, _), Ge(v, "pointermove", S, _), Ge(v, "pointerup", P, _);
  }
  return yl(hl({}, il(c)), {
    position: c,
    isDragging: Z(() => !!w.value),
    style: Z(
      () => `left:${c.value.x}px;top:${c.value.y}px;`
    )
  });
}
var ss = Object.getOwnPropertySymbols, gl = Object.prototype.hasOwnProperty, bl = Object.prototype.propertyIsEnumerable, _l = (e, t) => {
  var n = {};
  for (var s in e)
    gl.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && ss)
    for (var s of ss(e))
      t.indexOf(s) < 0 && bl.call(e, s) && (n[s] = e[s]);
  return n;
};
function Fs(e, t, n = {}) {
  const s = n, { window: r = Ne } = s, o = _l(s, ["window"]);
  let a;
  const l = fn(() => r && "ResizeObserver" in r), i = () => {
    a && (a.disconnect(), a = void 0);
  }, u = Z(
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
  return $t(p), {
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
  return Fs(e, d), te(() => xe(e), (c) => !c && d()), r && Ge("scroll", d, { capture: !0, passive: !0 }), s && Ge("resize", d, { passive: !0 }), Hs(() => {
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
function wl(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: s = Ne, box: r = "content-box" } = n, o = Z(() => {
    var i, u;
    return (u = (i = xe(e)) == null ? void 0 : i.namespaceURI) == null ? void 0 : u.includes("svg");
  }), a = g(t.width), l = g(t.height);
  return Fs(
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
function xl(e, t, n = {}) {
  const {
    root: s,
    rootMargin: r = "0px",
    threshold: o = 0.1,
    window: a = Ne,
    immediate: l = !0
  } = n, i = fn(() => a && "IntersectionObserver" in a), u = Z(() => {
    const d = we(e);
    return (Array.isArray(d) ? d : [d]).map(xe).filter(el);
  });
  let m = vt;
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
      d.forEach((k) => k && w.observe(k)), m = () => {
        w.disconnect(), m = vt;
      };
    },
    { immediate: l, flush: "post" }
  ) : vt, v = () => {
    m(), f(), p.value = !1;
  };
  return $t(v), {
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
function mn(e, { window: t = Ne, scrollTarget: n } = {}) {
  const s = g(!1);
  return xl(
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
function El(e = {}) {
  const {
    window: t = Ne,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: s = Number.POSITIVE_INFINITY,
    listenOrientation: r = !0,
    includeScrollbar: o = !0
  } = e, a = g(n), l = g(s), i = () => {
    t && (o ? (a.value = t.innerWidth, l.value = t.innerHeight) : (a.value = t.document.documentElement.clientWidth, l.value = t.document.documentElement.clientHeight));
  };
  if (i(), Hs(i), Ge("resize", i, { passive: !0 }), r) {
    const u = cl("(orientation: portrait)");
    te(u, () => i());
  }
  return { width: a, height: l };
}
const $l = { class: "search-content w-100" }, kl = { class: "ps-2 w-75" }, Sl = { class: "menu ps-2" }, Cl = { class: "flex flex-row pt-1" }, Ol = {
  class: "content-list overflow-x-hidden overflow-y-auto py-2",
  style: { height: "250px" }
}, Tl = ["onClick"], Pl = /* @__PURE__ */ h("span", { class: "iconfont icon-play" }, null, -1), Rl = { class: "ps-2" }, vn = /* @__PURE__ */ L({
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
    const n = e, s = g(), r = g(""), o = g(""), a = g(""), l = g(""), i = g(n.dataList || []), u = g(n.sceneList || []), m = g(n.styleList || []), p = mn(s);
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
    return (c, w) => (C(), I("div", $l, [
      h("div", kl, [
        y(b(wt), {
          onSubmit: oe(f, ["prevent"])
        }, {
          default: R(() => [
            y(b(xt), {
              ref_key: "searchInputRef",
              ref: s,
              placeholder: "搜索",
              modelValue: r.value,
              "onUpdate:modelValue": w[0] || (w[0] = (k) => r.value = k),
              "suffix-icon": b(Er)
            }, null, 8, ["modelValue", "suffix-icon"])
          ]),
          _: 1
        }, 8, ["onSubmit"])
      ]),
      h("div", Sl, [
        y(b(_r), {
          mode: "horizontal",
          "default-active": c.menus.length > 0 ? c.menus[0].value : "",
          onSelect: w[1] || (w[1] = (k) => v(k))
        }, {
          default: R(() => [
            (C(!0), I(Q, null, le(c.menus, (k, V) => (C(), X(b(wr), {
              index: k.value,
              key: V
            }, {
              default: R(() => [
                B(z(k.label), 1)
              ]),
              _: 2
            }, 1032, ["index"]))), 128))
          ]),
          _: 1
        }, 8, ["default-active"])
      ]),
      h("div", Cl, [
        y(b(wn), {
          modelValue: o.value,
          "onUpdate:modelValue": w[2] || (w[2] = (k) => o.value = k),
          onChange: f,
          class: "m-1",
          size: "default"
        }, {
          default: R(() => [
            (C(!0), I(Q, null, le(u.value, (k) => (C(), X(b(xn), {
              key: k.value,
              label: k.label,
              value: k.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        y(b(wn), {
          modelValue: a.value,
          "onUpdate:modelValue": w[3] || (w[3] = (k) => a.value = k),
          onChange: f,
          class: "m-1",
          size: "default"
        }, {
          default: R(() => [
            (C(!0), I(Q, null, le(m.value, (k) => (C(), X(b(xn), {
              key: k.value,
              label: k.label,
              value: k.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      h("ul", Ol, [
        (C(!0), I(Q, null, le(i.value, (k, V) => (C(), I("li", {
          onClick: ($) => d(ie(k)),
          class: "content-list-item clickable ps-2 py-2",
          key: V
        }, [
          Pl,
          h("span", Rl, z(k.label), 1)
        ], 8, Tl))), 128))
      ])
    ]));
  }
});
const Vl = {}, Il = { class: "content" };
function Nl(e, t) {
  return C(), I("div", Il, [
    Pe(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Us = /* @__PURE__ */ ve(Vl, [["render", Nl], ["__scopeId", "data-v-7beae5b9"]]), Dl = {}, Al = { class: "bar-wrapper-item" };
function Ll(e, t) {
  return C(), I("div", Al, [
    Pe(e.$slots, "default")
  ]);
}
const Ml = /* @__PURE__ */ ve(Dl, [["render", Ll]]), jl = { class: "bar-wrapper-group" }, Hl = { class: "group-items" }, Fl = /* @__PURE__ */ L({
  __name: "bar-wrapper-group",
  props: {
    divider: {}
  },
  setup(e) {
    return (t, n) => (C(), I("div", jl, [
      h("div", Hl, [
        Pe(t.$slots, "default", {}, void 0, !0)
      ]),
      h("div", {
        class: ye(["divider", [t.divider]])
      }, null, 2)
    ]));
  }
});
const Be = /* @__PURE__ */ ve(Fl, [["__scopeId", "data-v-be31f837"]]);
function Ul(e, t) {
  return `left:${e}px;top:${t}px`;
}
function hn(e, t) {
  const { width: n, height: s } = wl(e), { width: r, height: o } = El(), a = Z(() => ({
    x: r.value - n.value,
    y: o.value - s.value
  }));
  return { style: Z(() => {
    const i = t.value.x, u = t.value.y, m = i < 5 ? 5 : i > a.value.x ? a.value.x - 5 : i, p = u < 5 ? 5 : u > a.value.y ? a.value.y - 5 : u;
    return Ul(m, p);
  }) };
}
var Yt = { exports: {} }, Bs = { exports: {} }, Bl = void 0, zs = function(e) {
  return e !== Bl && e !== null;
}, zl = zs, Wl = {
  object: !0,
  function: !0,
  undefined: !0
  /* document.all */
}, Gl = function(e) {
  return zl(e) ? hasOwnProperty.call(Wl, typeof e) : !1;
}, Yl = Gl, ql = function(e) {
  if (!Yl(e))
    return !1;
  try {
    return e.constructor ? e.constructor.prototype === e : !1;
  } catch {
    return !1;
  }
}, Xl = ql, Kl = function(e) {
  if (typeof e != "function" || !hasOwnProperty.call(e, "length"))
    return !1;
  try {
    if (typeof e.length != "number" || typeof e.call != "function" || typeof e.apply != "function")
      return !1;
  } catch {
    return !1;
  }
  return !Xl(e);
}, Jl = Kl, Ql = /^\s*class[\s{/}]/, Zl = Function.prototype.toString, ei = function(e) {
  return !(!Jl(e) || Ql.test(Zl.call(e)));
}, ti = function() {
  var e = Object.assign, t;
  return typeof e != "function" ? !1 : (t = { foo: "raz" }, e(t, { bar: "dwa" }, { trzy: "trzy" }), t.foo + t.bar + t.trzy === "razdwatrzy");
}, Pt, rs;
function ni() {
  return rs || (rs = 1, Pt = function() {
    try {
      return Object.keys("primitive"), !0;
    } catch {
      return !1;
    }
  }), Pt;
}
var si = function() {
}, ri = si(), yn = function(e) {
  return e !== ri && e !== null;
}, Rt, os;
function oi() {
  if (os)
    return Rt;
  os = 1;
  var e = yn, t = Object.keys;
  return Rt = function(n) {
    return t(e(n) ? Object(n) : n);
  }, Rt;
}
var Vt, as;
function ai() {
  return as || (as = 1, Vt = ni()() ? Object.keys : oi()), Vt;
}
var It, ls;
function li() {
  if (ls)
    return It;
  ls = 1;
  var e = yn;
  return It = function(t) {
    if (!e(t))
      throw new TypeError("Cannot use null or undefined");
    return t;
  }, It;
}
var Nt, is;
function ii() {
  if (is)
    return Nt;
  is = 1;
  var e = ai(), t = li(), n = Math.max;
  return Nt = function(s, r) {
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
  }, Nt;
}
var ui = ti() ? Object.assign : ii(), ci = yn, di = Array.prototype.forEach, fi = Object.create, pi = function(e, t) {
  var n;
  for (n in e)
    t[n] = e[n];
}, mi = function(e) {
  var t = fi(null);
  return di.call(arguments, function(n) {
    ci(n) && pi(Object(n), t);
  }), t;
}, Dt = "razdwatrzy", vi = function() {
  return typeof Dt.contains != "function" ? !1 : Dt.contains("dwa") === !0 && Dt.contains("foo") === !1;
}, At, us;
function hi() {
  if (us)
    return At;
  us = 1;
  var e = String.prototype.indexOf;
  return At = function(t) {
    return e.call(this, t, arguments[1]) > -1;
  }, At;
}
var yi = vi() ? String.prototype.contains : hi(), ht = zs, cs = ei, Ws = ui, Gs = mi, st = yi, gi = Bs.exports = function(e, t) {
  var n, s, r, o, a;
  return arguments.length < 2 || typeof e != "string" ? (o = t, t = e, e = null) : o = arguments[2], ht(e) ? (n = st.call(e, "c"), s = st.call(e, "e"), r = st.call(e, "w")) : (n = r = !0, s = !1), a = { value: t, configurable: n, enumerable: s, writable: r }, o ? Ws(Gs(o), a) : a;
};
gi.gs = function(e, t, n) {
  var s, r, o, a;
  return typeof e != "string" ? (o = n, n = t, t = e, e = null) : o = arguments[3], ht(t) ? cs(t) ? ht(n) ? cs(n) || (o = n, n = void 0) : n = void 0 : (o = t, t = n = void 0) : t = void 0, ht(e) ? (s = st.call(e, "c"), r = st.call(e, "e")) : (s = !0, r = !1), a = { get: t, set: n, configurable: s, enumerable: r }, o ? Ws(Gs(o), a) : a;
};
var bi = Bs.exports, _i = function(e) {
  if (typeof e != "function")
    throw new TypeError(e + " is not a function");
  return e;
};
(function(e, t) {
  var n = bi, s = _i, r = Function.prototype.apply, o = Function.prototype.call, a = Object.create, l = Object.defineProperty, i = Object.defineProperties, u = Object.prototype.hasOwnProperty, m = { configurable: !0, enumerable: !1, writable: !0 }, p, f, v, d, c, w, k;
  p = function(V, $) {
    var S;
    return s($), u.call(this, "__ee__") ? S = this.__ee__ : (S = m.value = a(null), l(this, "__ee__", m), m.value = null), S[V] ? typeof S[V] == "object" ? S[V].push($) : S[V] = [S[V], $] : S[V] = $, this;
  }, f = function(V, $) {
    var S, P;
    return s($), P = this, p.call(this, V, S = function() {
      v.call(P, V, S), r.call($, this, arguments);
    }), S.__eeOnceListener__ = $, this;
  }, v = function(V, $) {
    var S, P, _, x;
    if (s($), !u.call(this, "__ee__"))
      return this;
    if (S = this.__ee__, !S[V])
      return this;
    if (P = S[V], typeof P == "object")
      for (x = 0; _ = P[x]; ++x)
        (_ === $ || _.__eeOnceListener__ === $) && (P.length === 2 ? S[V] = P[x ? 0 : 1] : P.splice(x, 1));
    else
      (P === $ || P.__eeOnceListener__ === $) && delete S[V];
    return this;
  }, d = function(V) {
    var $, S, P, _, x;
    if (u.call(this, "__ee__") && (_ = this.__ee__[V], !!_))
      if (typeof _ == "object") {
        for (S = arguments.length, x = new Array(S - 1), $ = 1; $ < S; ++$)
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
            for (S = arguments.length, x = new Array(S - 1), $ = 1; $ < S; ++$)
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
  }, k = i({}, w), e.exports = t = function(V) {
    return V == null ? a(k) : i(Object(V), w);
  }, t.methods = c;
})(Yt, Yt.exports);
var wi = Yt.exports;
const xi = /* @__PURE__ */ on(wi), $e = xi(), Ei = "wangeditor-error", G = {
  ERROR: Ei
}, $i = "emitter-error", ki = "emitter-view-click", Si = "emitter-view-keydown", ke = { ERROR: $i, VIEW_CLICK: ki, VIEW_KEYDOWN: Si }, Ci = { class: "w-100 d-flex flex-row align-items-center" }, Ke = /* @__PURE__ */ L({
  __name: "drag-box",
  props: {
    visible: { type: Boolean },
    initialValue: {}
  },
  emits: ["update:visible", "close"],
  setup(e, { expose: t, emit: n }) {
    const s = e, r = g(), o = g(), a = g(), { position: l } = pn(o, {
      initialValue: s.initialValue
    }), { style: i } = hn(r, l);
    function u(d) {
      l.value = d;
    }
    t({
      setPosition: u
    }), ge(() => {
      $e.on(ke.VIEW_CLICK, m), document.addEventListener("keydown", v);
    }), Qt(() => {
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
    return (d, c) => (C(), I(Q, null, [
      h("div", {
        ref_key: "referenceRef",
        ref: a,
        onMousedown: c[0] || (c[0] = oe(() => {
        }, ["prevent"]))
      }, [
        Pe(d.$slots, "reference")
      ], 544),
      (C(), X(hs, { to: "body" }, [
        Oe(h("div", {
          ref_key: "boxRef",
          ref: r,
          class: "demotestname card shadow brag-box user-select-none",
          style: _t([{ position: "fixed" }, b(i)]),
          onMousedown: c[1] || (c[1] = oe(() => {
          }, ["prevent"]))
        }, [
          h("div", Ci, [
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
}), Oi = {
  install(e) {
    e.component("BarButton", se), e.component("BarInput", dn), e.component("BarPopover", Za), e.component("BarSearch", vn), e.component("BarWrapper", Us), e.component("BarWrapperItem", Ml), e.component("BarWrapperGroup", Be), e.component("DragBox", Ke);
  }
};
class be {
  constructor(t) {
    re(this, "editor");
    this.editor = t;
  }
  getValue() {
    const { selection: t } = this.editor;
    return t == null ? "" : q.string(this.editor, t);
  }
  isDisabled() {
    const { selection: t } = this.editor;
    return t == null ? (this.editor.emit(G.ERROR, "未选中编辑器"), !0) : !1;
  }
}
class Ti extends be {
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
const Ys = /* @__PURE__ */ L({
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
      if (t.value ?? (t.value = new Ti(l)), (u = t.value) != null && u.isDisabled())
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
      reference: () => y(se, {
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
class Pi extends be {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t ? pe.isCollapsed(t) ? (this.editor.emit(G.ERROR, "请选择多个中文字符或者多个多个英文单词"), !0) : q.string(this.editor, t).length < 2 : !0;
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
const qs = /* @__PURE__ */ L({
  setup() {
    const e = Y();
    function t(n) {
      e.value ?? (e.value = new Pi(n)), !e.value.isDisabled() && e.value.exec();
    }
    return () => y(se, {
      text: "连读",
      icon: "continuous",
      onClick: t
    }, null);
  }
}), Ri = [
  { label: "重音", value: "z" },
  { label: "拖音", value: "t" },
  { label: "重音+拖音", value: "z+t" }
], Vi = {
  z: { pitch: "x-high", rate: void 0 },
  t: { pitch: void 0, rate: "medium" },
  "z+t": { pitch: "x-high", rate: "medium" }
};
class Ii extends be {
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
    const { pitch: s, rate: r } = Vi[t.value], o = {
      type: "ssml-prosody",
      remark: t.label,
      pitch: s,
      rate: r,
      children: [{ text: n }]
    };
    this.editor.insertNode(o);
  }
}
const Xs = /* @__PURE__ */ L({
  setup() {
    const e = Y(), t = g(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    function r(o) {
      e.value ?? (e.value = new Ii(o)), !e.value.isDisabled() && n();
    }
    return () => y(Re, {
      visible: t.value,
      "onUpdate:visible": (o) => t.value = o,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => y(se, {
        text: "重音",
        icon: "read",
        onClick: r
      }, null),
      default: () => y("div", {
        class: "d-flex flex-column",
        onMousedown: oe(() => {
        }, ["stop", "prevent"])
      }, [Ri.map(({
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
class Ni extends be {
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
    const n = q.string(this.editor, t);
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
const Di = [{
  value: "cardinal",
  label: "读数值"
}, {
  value: "characters",
  label: "读数字"
}, {
  value: "telephone",
  label: "读手机号"
}], Ks = /* @__PURE__ */ L({
  setup() {
    const e = Y(), t = g(!1);
    function n() {
      t.value = !t.value;
    }
    function s(r) {
      e.value ?? (e.value = new Ni(r)), !e.value.isDisabled() && n();
    }
    return () => y(Re, {
      visible: t.value,
      "onUpdate:visible": (r) => t.value = r,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => y(se, {
        text: "数字符号",
        icon: "digital",
        onClick: s
      }, null),
      default: () => y("div", {
        class: "d-flex flex-column"
      }, [Di.map(({
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
class Ai extends be {
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
const Js = /* @__PURE__ */ L({
  setup() {
    const e = Y(), t = g(), n = g(!1);
    function s() {
      n.value || (n.value = !0);
    }
    function r() {
      n.value && (n.value = !1);
    }
    async function o(l) {
      e.value ?? (e.value = new Ai(l)), !e.value.isDisabled() && (s(), t.value.focus());
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
      reference: () => y(se, {
        text: "别名",
        icon: "alias",
        onClick: o
      }, null),
      default: () => y(dn, {
        ref: t,
        onSubmit: a
      }, null)
    });
  }
});
class Li extends be {
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
    const n = q.string(this.editor, t);
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
const Qs = /* @__PURE__ */ L({
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
      if (t.value ?? (t.value = new Li(l)), jo(l), t.value.isDisabled())
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
      reference: () => y(se, {
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
class Mi extends be {
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
const ji = [
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
], Zs = /* @__PURE__ */ L({
  setup() {
    const e = Y(), t = g(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    async function r(o) {
      e.value ?? (e.value = new Mi(o)), !e.value.isDisabled() && n();
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
      reference: () => y(se, {
        text: "局部变速",
        icon: "changespeed",
        onClick: r
      }, null),
      default: () => y("div", {
        class: "d-flex flex-column overflow-x-hidden overflow-y-scroll",
        style: "height:15rem"
      }, [ji.map(({
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
      strength: t.value,
      remark: t.label,
      children: [{ text: "" }]
    };
    this.editor.insertNode(n);
  }
}
const Fi = [{
  value: "weak",
  label: "短"
}, {
  value: "medium",
  label: "中"
}, {
  value: "strong",
  label: "长"
}], er = /* @__PURE__ */ L({
  setup() {
    const e = Y(), t = g(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    function r(o) {
      e.value ?? (e.value = new Hi(o)), !e.value.isDisabled() && n();
    }
    return () => y(Re, {
      visible: t.value,
      "onUpdate:visible": (o) => t.value = o,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => y(se, {
        text: "停顿调节",
        icon: "rhythm",
        onClick: r
      }, null),
      default: () => y("div", {
        class: "d-flex flex-column"
      }, [Fi.map(({
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
class Ui extends be {
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
const tr = /* @__PURE__ */ L({
  __name: "special-menu",
  setup(e) {
    const t = g(), n = g(), s = Y(), { globalEditConfig: r } = me(), { special: o } = r, a = g(!1), { x: l, y: i, height: u } = lt(n), m = (f) => {
      s.value ?? (s.value = new Ui(f)), !s.value.isDisabled() && (t.value.setPosition({
        x: l.value - 200,
        y: i.value + u.value
      }), a.value = !0);
    };
    function p(f) {
      var v;
      (v = s.value) == null || v.restoreSelection(), s.value && !s.value.isDisabled() && s.value.exec(f), a.value = !1;
    }
    return (f, v) => (C(), X(b(Ke), {
      ref_key: "dragRef",
      ref: t,
      visible: a.value,
      "onUpdate:visible": v[0] || (v[0] = (d) => a.value = d)
    }, {
      reference: R(() => [
        y(b(se), {
          ref_key: "menuRef",
          ref: n,
          text: "音效",
          icon: "special",
          onClick: m
        }, null, 512)
      ]),
      default: R(() => [
        y(b(vn), {
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
class Bi extends be {
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
}], nr = /* @__PURE__ */ L({
  setup() {
    const e = Y(), t = g(!1), n = g();
    function s() {
      t.value || (t.value = !0);
    }
    function r() {
      t.value && (t.value = !1);
    }
    function o(l) {
      e.value ?? (e.value = new Bi(l)), !e.value.isDisabled() && (s(), n.value.focus());
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
      reference: () => y(se, {
        text: "插入静音",
        icon: "mute",
        onClick: o
      }, null),
      default: () => y("div", {
        class: "d-flex flex-column"
      }, [zi.map(({
        value: l,
        label: i
      }) => y("div", {
        key: l,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => a(l),
        onMousedown: oe(() => {
        }, ["stop", "prevent"])
      }, [i])), y(dn, {
        type: "text",
        ref: n,
        onSubmit: a
      }, null)])
    });
  }
}), sr = /* @__PURE__ */ L({
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
      const { rootBackgroundaudio: v } = je();
      v.src = f.value, v.remark = f.label, a.value = !1;
    }
    return (f, v) => (C(), X(b(Ke), {
      ref_key: "dragRef",
      ref: t,
      visible: a.value,
      "onUpdate:visible": v[0] || (v[0] = (d) => a.value = d)
    }, {
      reference: R(() => [
        y(b(se), {
          ref_key: "menuRef",
          ref: n,
          text: "配乐",
          icon: "bgm",
          onClick: m
        }, null, 512)
      ]),
      default: R(() => [
        y(b(vn), {
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
}), rr = /* @__PURE__ */ L({
  __name: "sensitive-menu",
  setup(e) {
    const t = g(), n = g(), s = Y(), r = g(!1), { x: o, y: a, height: l } = lt(n), i = (u) => {
      s.value = u, t.value.setPosition({
        x: o.value - 200,
        y: a.value + l.value
      }), r.value = !0;
    };
    return (u, m) => (C(), X(b(Ke), {
      ref_key: "dragRef",
      ref: t,
      visible: r.value,
      "onUpdate:visible": m[0] || (m[0] = (p) => r.value = p)
    }, {
      reference: R(() => [
        y(b(se), {
          ref_key: "menuRef",
          ref: n,
          text: "敏感词",
          icon: "sensitive",
          onClick: i
        }, null, 512)
      ]),
      default: R(() => [
        y(rr)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
const Wi = {
  class: "select-list",
  style: { width: "120px" }
}, Gi = {
  class: "text-center d-flex flex-column justify-content-center fs-6",
  style: { height: "60px" }
}, Yi = ["onClick"], qi = /* @__PURE__ */ L({
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
    }), (l, i) => (C(), I("div", Wi, [
      h("div", Gi, [
        Pe(l.$slots, "default", {}, void 0, !0)
      ]),
      h("ul", {
        ref_key: "listRef",
        ref: r,
        class: "text-center w-100 border-start border-top border-bottom border-secondary-subtle overflow-y-auto overflow-x-hidden scrollbar-none",
        style: { height: "180px" }
      }, [
        (C(!0), I(Q, null, le(l.dataList, (u, m) => (C(), I("li", {
          class: ye(["clickable select-item py-1", { activate: u.value === l.modelValue.value }]),
          key: m,
          onClick: (p) => o(u)
        }, z(u.label), 11, Yi))), 128))
      ], 512)
    ]));
  }
});
const Ue = /* @__PURE__ */ ve(qi, [["__scopeId", "data-v-657a8ff9"]]), Xi = () => [
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
], Ki = () => [
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
function Ji(e) {
  return `${(0.05 * e * 100).toFixed(0)}%`;
}
function Qi(e) {
  return `${((e - 1) * 100).toFixed(0)}%`;
}
const Zi = {
  style: { width: "600px", height: "360px" },
  class: "position-relative px-2 pb-2"
}, eu = { class: "position-relative" }, tu = { class: "position-absolute top-0 end-0" }, nu = /* @__PURE__ */ h("li", null, [
  /* @__PURE__ */ h("span", { class: "text-nowrap" }, "近期使用:")
], -1), su = /* @__PURE__ */ h("span", { class: "my-3" }, "类型", -1), ru = /* @__PURE__ */ h("span", { class: "my-3" }, "配音师", -1), ou = /* @__PURE__ */ h("span", { class: "my-3" }, "角色", -1), au = /* @__PURE__ */ h("span", { class: "my-3" }, "风格", -1), lu = /* @__PURE__ */ h("span", { class: "my-3" }, "语速", -1), iu = /* @__PURE__ */ h("span", { class: "my-3" }, "语调", -1), uu = { class: "position-absolute bottom-0 end-0 d-flex flex-row justify-content-end me-4 mb-3" }, cu = /* @__PURE__ */ L({
  __name: "management-content",
  emits: ["submit"],
  setup(e, { emit: t }) {
    const { globalEditConfig: n } = me(), { tryPlay: s } = n, r = g(!1), o = g(""), a = g(), l = g(), i = g(), u = g(), m = g(), p = g(), f = g(ct()), v = g(ct()), d = g(ct()), c = g(ct()), w = g({ label: "", value: "1.0" }), k = g({ label: "", value: "0" }), V = Y([]), $ = g([{ label: "全部类型", value: "" }, ...s.flags]), S = g([]), P = g([]), _ = g([]), x = g(Xi()), j = g(Ki());
    ge(async () => {
      const A = await s.fetchData(Ms());
      V.value = A, S.value = A, A.length > 0 && (P.value = A[0].roles, _.value = A[0].styles, v.value = A[0]), P.value.length > 0 && (d.value = P.value[0]), _.value.length > 0 && (c.value = _.value[0]);
    });
    function ee() {
    }
    function O() {
    }
    function T(A) {
      const M = V.value.find((K) => K.value === A.value);
      M && (P.value = M.roles, _.value = M.styles, P.value.length > 0 && (d.value = P.value[0]), _.value.length > 0 && (c.value = _.value[0]));
    }
    function N() {
    }
    function U() {
    }
    function ue() {
    }
    function Qe() {
    }
    function Ze() {
      const A = {
        label: `${v.value.label}|${d.value.label}|${c.value.label}|${w.value.label}`,
        value: v.value.value,
        role: d.value.value,
        style: c.value.value,
        speed: Qi(Number(w.value.value)),
        pitch: Ji(Number(k.value.value))
      };
      t("submit", A);
    }
    return (A, M) => (C(), I("div", Zi, [
      y(b(wt), {
        onSubmit: oe(ee, ["prevent"])
      }, {
        default: R(() => [
          y(b(xt), {
            modelValue: o.value,
            "onUpdate:modelValue": M[0] || (M[0] = (K) => o.value = K),
            placeholder: "请输入名称快速查找配音师"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["onSubmit"]),
      h("div", eu, [
        h("div", tu, [
          y(b(fe), {
            size: "small",
            icon: b($r),
            onClick: M[1] || (M[1] = () => r.value = !r.value)
          }, null, 8, ["icon"])
        ]),
        h("ul", {
          class: ye(["d-flex flex-row row-gap-1 column-gap-2 overflow-x-hidden", { "flex-wrap": r.value }])
        }, [
          nu,
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
          y(Ue, {
            "onUpdate:modelValue": [
              O,
              M[2] || (M[2] = (K) => f.value = K)
            ],
            ref_key: "selTypeRef",
            ref: a,
            modelValue: f.value,
            dataList: $.value
          }, {
            default: R(() => [
              su
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          y(Ue, {
            "onUpdate:modelValue": [
              T,
              M[3] || (M[3] = (K) => v.value = K)
            ],
            ref_key: "selSpeakerRef",
            ref: l,
            modelValue: v.value,
            dataList: S.value
          }, {
            default: R(() => [
              ru
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          y(Ue, {
            "onUpdate:modelValue": [
              N,
              M[4] || (M[4] = (K) => d.value = K)
            ],
            ref_key: "selRoleRef",
            ref: i,
            modelValue: d.value,
            dataList: P.value
          }, {
            default: R(() => [
              ou
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          y(Ue, {
            "onUpdate:modelValue": [
              U,
              M[5] || (M[5] = (K) => c.value = K)
            ],
            ref_key: "selStyleRef",
            ref: u,
            modelValue: c.value,
            dataList: _.value
          }, {
            default: R(() => [
              au
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          y(Ue, {
            "onUpdate:modelValue": [
              ue,
              M[6] || (M[6] = (K) => w.value = K)
            ],
            ref_key: "selSpeedRef",
            ref: m,
            modelValue: w.value,
            dataList: x.value
          }, {
            default: R(() => [
              lu
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          y(Ue, {
            "onUpdate:modelValue": [
              Qe,
              M[7] || (M[7] = (K) => k.value = K)
            ],
            ref_key: "selPitchRef",
            ref: p,
            modelValue: k.value,
            dataList: j.value
          }, {
            default: R(() => [
              iu
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"])
        ], 2), [
          [Te, !r.value]
        ])
      ]),
      h("div", uu, [
        Oe(y(b(fe), {
          onClick: Ze,
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
class du extends be {
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
    const [n] = q.node(this.editor, t), s = this.editor.getParentNode(n);
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
const or = /* @__PURE__ */ L({
  __name: "management-menu",
  setup(e) {
    const t = g(), n = g(), s = Y(), r = g(!1), o = Y(), { x: a, y: l, height: i } = lt(n), u = (p) => {
      o.value ?? (o.value = new du(p));
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
    return (p, f) => (C(), X(b(Ke), {
      ref_key: "dragRef",
      ref: t,
      visible: r.value,
      "onUpdate:visible": f[0] || (f[0] = (v) => r.value = v)
    }, {
      reference: R(() => [
        y(b(se), {
          ref_key: "menuRef",
          ref: n,
          text: "多人配音",
          icon: "management",
          onClick: u
        }, null, 512)
      ]),
      default: R(() => [
        y(cu, { onSubmit: m })
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), fu = { class: "speaker-head" }, pu = ["src"], mu = { class: "speaker-name" }, vu = /* @__PURE__ */ L({
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
      h("div", fu, [
        h("img", {
          src: t.avatar || b(at)(),
          class: ye([{ "border border-warning": t.activated }, "rounded-circle"]),
          style: { height: "40px" }
        }, null, 10, pu)
      ]),
      h("div", mu, z(t.name), 1)
    ]));
  }
});
const hu = /* @__PURE__ */ ve(vu, [["__scopeId", "data-v-8c6b2288"]]);
class yu {
  constructor() {
    re(this, "mediaRecorder", null);
  }
  get state() {
    var t;
    return (t = this.mediaRecorder) == null ? void 0 : t.state;
  }
  async start() {
    if (navigator.mediaDevices.getUserMedia) {
      const t = [];
      try {
        const n = await navigator.mediaDevices.getUserMedia({ audio: !0 }), s = new MediaRecorder(n);
        return new Promise((r, o) => {
          s.ondataavailable = (a) => {
            t.push(a.data);
          }, s.onstop = () => {
            const a = new Blob(t, { type: "audio/wav" });
            r(a);
          }, s.onerror = (a) => {
            o(a);
          }, s.start();
        });
      } catch (n) {
        throw console.error(n), new Error("授权失败！", { cause: n });
      }
    }
    throw Error("浏览器不支持 getUserMedia");
  }
  stop() {
    this.mediaRecorder && this.mediaRecorder.stop();
  }
}
class gu {
  constructor() {
    re(this, "audio");
    re(this, "isPlaying", g(!1));
    this.audio = new Audio(), this.audio.addEventListener("play", () => {
      this.isPlaying.value = !0;
    }), this.audio.addEventListener("pause", () => {
      this.isPlaying.value = !1;
    });
  }
  load(t) {
    this.audio.src = t, this.audio.load();
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
    return Z(() => this.isPlaying.value ? "playing" : "paused");
  }
}
const bu = { class: "d-flex flex-row justify-content-between border rounded-pill border-secondary my-3 py-1 px-2" }, _u = {
  class: "text-secondary d-flex flex-row align-items-center",
  style: { "font-size": "0.5rem" }
}, wu = {
  key: 0,
  class: "iconfont icon-pause"
}, xu = {
  key: 1,
  class: "iconfont icon-play"
}, Eu = /* @__PURE__ */ h("span", { class: "iconfont icon-delete" }, null, -1), $u = [
  Eu
], ku = {
  key: 1,
  style: { "font-size": "0.5rem" }
}, Su = /* @__PURE__ */ h("p", null, "选择需要转换的配音师", -1), Cu = {
  class: "speakers-container border rounded d-flex flex-row flex-wrap row-gap-1 column-gap-2 overflow-y-auto overflow-x-hidden",
  style: { height: "150px" }
}, Ou = ["disabled"], Tu = /* @__PURE__ */ L({
  __name: "audio-upload",
  emits: ["submit"],
  setup(e, { expose: t, emit: n }) {
    const { globalEditConfig: s } = me(), { audioUpload: r, transfer: o, fetchSpeaker: a, timeoutMilliseconds: l } = s.conversion, i = g(), u = g(), m = g(), p = g(!0), f = g([]), v = g(), d = Y(), c = Y(), w = new gu(), k = w.playState, V = new yu(), $ = new Lo("audio-conversion", "audio/*"), S = Z(() => V.state), P = mn(i), _ = ps("reopen");
    te(P, (A) => {
      A || x();
    }), ge(async () => {
      f.value = await a();
    }), te(P, (A) => {
      A || (p.value = !0);
    }), t({
      openInputFile: N
    });
    function x() {
      p.value = !0, j();
    }
    function j() {
      w.pause(), u.value = void 0, m.value = void 0, v.value = void 0, d.value = void 0, c.value = void 0;
    }
    function ee() {
      V.stop();
    }
    async function O() {
      try {
        d.value = await V.start();
      } catch (A) {
        $e.emit(ke.ERROR, `${A}`, A);
      }
    }
    function T() {
      if (k.value === "playing")
        w.pause();
      else if (d.value) {
        const A = window.URL.createObjectURL(d.value);
        w.load(A), w.play();
      } else if (c.value) {
        const A = window.URL.createObjectURL(c.value);
        w.load(A), w.play();
      }
    }
    async function N() {
      try {
        return c.value = await $.open(), p.value = !1, !0;
      } catch {
        return !1;
      }
    }
    async function U() {
      try {
        const A = new Mo(l);
        if (p.value && d.value)
          A.startTimeout(), u.value = await r(d.value, A.token);
        else if (!p.value && c.value)
          A.startTimeout(), u.value = await r(c.value, A.token);
        else
          throw new Error("请选则文件或实时录音");
      } catch (A) {
        $e.emit(ke.ERROR, `${A}`, A);
      }
    }
    async function ue(A) {
      try {
        u.value ? (v.value = A, m.value = await o({ audioId: u.value.id, speakerId: A.id })) : $e.emit(ke.ERROR, "请先上传音频文件");
      } catch (M) {
        $e.emit(ke.ERROR, `${M}`, M);
      }
    }
    function Qe() {
      m.value && v.value && (n("submit", { label: v.value.label, value: m.value.src }), x());
    }
    function Ze() {
      _ == null || _();
    }
    return (A, M) => {
      var K, bn;
      return C(), I("div", {
        class: "audio-upload",
        ref_key: "boxRef",
        ref: i
      }, [
        h("div", bu, [
          h("div", _u, [
            d.value || c.value ? (C(), I("button", {
              key: 0,
              onClick: T,
              class: "btn btn-sm rounded-pill"
            }, [
              b(k) === "playing" ? (C(), I("span", wu)) : (C(), I("span", xu))
            ])) : Ee("", !0),
            h("span", null, z(((K = c.value) == null ? void 0 : K.name) || ((bn = d.value) == null ? void 0 : bn.name)), 1)
          ]),
          h("div", null, [
            !u.value && (d.value || c.value) ? (C(), I("button", {
              key: 0,
              onClick: j,
              class: "btn btn-sm rounded-pill"
            }, $u)) : Ee("", !0),
            u.value ? (C(), I("span", ku, "已上传")) : Ee("", !0),
            p.value ? (C(), I(Q, { key: 2 }, [
              S.value === "recording" ? (C(), I("button", {
                key: 0,
                onClick: ee,
                class: "btn btn-primary btn-sm rounded-pill"
              }, " 结束录音 ")) : (C(), I("button", {
                key: 1,
                onClick: O,
                class: "btn btn-primary btn-sm rounded-pill"
              }, " 开始录音 "))
            ], 64)) : Ee("", !0),
            !p.value && !c.value ? (C(), I("button", {
              key: 3,
              onClick: N,
              class: "btn btn-primary btn-sm rounded-pill"
            }, " 选择文件 ")) : Ee("", !0),
            u.value ? (C(), I("button", {
              key: 4,
              onClick: Ze,
              class: "btn btn-primary btn-sm rounded-pill"
            }, " 重传音频 ")) : Ee("", !0),
            !u.value && (c.value || d.value) ? (C(), I("button", {
              key: 5,
              onClick: U,
              class: "btn btn-primary btn-sm rounded-pill"
            }, " 上传音频 ")) : Ee("", !0)
          ])
        ]),
        h("div", null, [
          Su,
          h("div", Cu, [
            (C(!0), I(Q, null, le(f.value, (it, dr) => {
              var _n;
              return C(), X(hu, {
                onClick: (Dd) => ue(it),
                key: dr,
                name: it.label,
                avatar: it.avatar,
                activated: it.value === ((_n = v.value) == null ? void 0 : _n.value)
              }, null, 8, ["onClick", "name", "avatar", "activated"]);
            }), 128))
          ])
        ]),
        h("button", {
          class: "btn btn-primary mt-1",
          onClick: Qe,
          disabled: !m.value
        }, " 完成录音并上传完成后，可选择配音师转换 ", 8, Ou)
      ], 512);
    };
  }
}), Pu = {
  class: "fw-bold",
  style: { "font-size": "0.5rem" }
}, Ru = /* @__PURE__ */ h("p", { class: "text-start text-danger" }, "请在安静的环境中进行录音，以需要转换的风格，读出以下文案", -1), Vu = {
  class: "border border-secondary rounded p-2 w-100",
  style: { height: "100px" }
}, Iu = { class: "mt-2" }, Nu = /* @__PURE__ */ h("p", {
  class: "mt-2 text-secondary",
  style: { "font-size": "0.5rem" }
}, " 录音内容需要和滑选一致，音频限制60秒，滑选文案限制60个字 ", -1), Du = /* @__PURE__ */ L({
  __name: "conversion-content",
  props: {
    text: {}
  },
  emits: ["submit"],
  setup(e) {
    const t = g(), n = g(), s = g(!0), r = g(!1), o = mn(t);
    yr("reopen", () => {
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
      Oe(h("section", Pu, [
        Ru,
        h("div", Vu, z(i.text), 1)
      ], 512), [
        [Te, s.value]
      ]),
      Oe(h("section", Iu, [
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
        Nu
      ], 512), [
        [Te, !r.value]
      ]),
      Oe(h("section", null, [
        y(Tu, {
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
class Au extends be {
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
const ar = /* @__PURE__ */ L({
  __name: "conversion-menu",
  setup(e) {
    const t = g(), n = g(), s = Y(), r = Y(), o = g(!1), a = g(""), { x: l, y: i, height: u } = lt(n), m = (f) => {
      if (r.value ?? (r.value = new Au(f)), r.value.isDisabled())
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
    return (f, v) => (C(), X(b(Ke), {
      ref_key: "dragRef",
      ref: t,
      visible: o.value,
      "onUpdate:visible": v[0] || (v[0] = (d) => o.value = d)
    }, {
      reference: R(() => [
        y(b(se), {
          ref_key: "menuRef",
          ref: n,
          text: "局部变音",
          icon: "conversion",
          onClick: m
        }, null, 512)
      ]),
      default: R(() => [
        y(Du, {
          text: a.value,
          onSubmit: p
        }, null, 8, ["text"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Lu = { class: "anchor-avatar d-flex flex-column justify-content-center align-items-center" }, Mu = ["src"], ju = { class: "anchor-avatar-name text-white" }, Hu = /* @__PURE__ */ L({
  __name: "try-play-circle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = g(), s = g(0), r = g(0), o = cn(), { position: a } = pn(n, {
      initialValue: { x: window.innerWidth - 15, y: window.innerHeight / 2 - 15 },
      onStart: (p, f) => m(f.clientX, f.clientY) ? !1 : void 0
    }), { style: l } = hn(n, a);
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
      style: _t([b(l), { position: "fixed" }]),
      onMousedown: u,
      onMouseup: i
    }, [
      h("div", Lu, [
        h("img", {
          src: b(o).speaker.avatar || b(at)(),
          class: "rounded-circle"
        }, null, 8, Mu),
        h("div", ju, z(b(o).speaker.label), 1)
      ])
    ], 36)), [
      [Te, p.visible]
    ]);
  }
});
const Fu = /* @__PURE__ */ ve(Hu, [["__scopeId", "data-v-b8319066"]]), Uu = {
  key: 0,
  class: "position-absolute top-0 start-100 translate-middle text-bg-danger text-nowrap rounded px-1",
  style: { "font-size": "0.5rem" }
}, Bu = ["src"], zu = { class: "anchor-avatar-name text-white" }, Wu = /* @__PURE__ */ L({
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
        (s = t.data) != null && s.isFree ? Ee("", !0) : (C(), I("span", Uu, "付费")),
        h("img", {
          src: ((r = t.data) == null ? void 0 : r.src) ?? b(at)(),
          class: ye(["rounded-circle", { "border border-2 border-warning": t.activate }]),
          style: { height: "40px" }
        }, null, 10, Bu),
        h("div", zu, z((o = t.data) == null ? void 0 : o.label), 1)
      ]);
    };
  }
});
const lr = /* @__PURE__ */ ve(Wu, [["__scopeId", "data-v-845325c9"]]), Gu = {
  style: { height: "170px" },
  class: "w-100 d-flex flex-row flex-wrap justify-content-start overflow-x-hidden overflow-y-auto scrollbar-none"
}, Yu = /* @__PURE__ */ L({
  __name: "anchor-list",
  props: {
    filter: {}
  },
  setup(e) {
    const t = e, { globalEditConfig: n } = me(), { fetchData: s } = n.tryPlay, r = cn(), o = g([]);
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
    }), (l, i) => (C(), I("div", Gu, [
      (C(!0), I(Q, null, le(o.value, (u, m) => (C(), I("div", {
        class: "m-3",
        key: m
      }, [
        y(lr, {
          data: u,
          activate: u.value === b(r).speaker.value,
          onClick: (p) => a(ie(u))
        }, null, 8, ["data", "activate", "onClick"])
      ]))), 128))
    ]));
  }
}), Lt = /* @__PURE__ */ L({
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
}), qu = { class: "tag-list w-100" }, Xu = {
  class: "w-100 d-flex flex-row border-bottom border-secondary align-items-center",
  style: { height: "40px" }
}, Ku = {
  class: "w-100 d-flex flex-row border-bottom border-secondary align-items-center",
  style: { height: "40px" }
}, Ju = {
  style: { height: "100px" },
  class: "w-100 pt-2 d-flex flex-row flex-wrap align-content-start row-gap-2 overflow-y-auto overflow-x-hidden scrollbar-none"
}, Qu = /* @__PURE__ */ L({
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
    return (p, f) => (C(), I("div", qu, [
      h("div", Xu, [
        (C(!0), I(Q, null, le(b(r), (v, d) => (C(), X(Lt, {
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
      h("div", Ku, [
        (C(!0), I(Q, null, le(b(o), (v, d) => (C(), X(Lt, {
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
      h("div", Ju, [
        (C(!0), I(Q, null, le(l.value, (v, d) => (C(), X(Lt, {
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
const Zu = ["src"], ec = {
  class: "anchor-avatar-name text-white",
  style: { "font-size": "0.5rem" }
}, tc = /* @__PURE__ */ L({
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
        }, null, 10, Zu),
        h("div", ec, z((r = t.data) == null ? void 0 : r.label), 1)
      ]);
    };
  }
});
const nc = /* @__PURE__ */ ve(tc, [["__scopeId", "data-v-71aedb65"]]);
function sc(e) {
  return `${(0.05 * e * 100).toFixed(0)}%`;
}
function rc(e) {
  return `${((e - 1) * 100).toFixed(0)}%`;
}
const gn = (e) => (Zt("data-v-c4fe6de7"), e = e(), en(), e), oc = {
  class: "slider-panle w-100 px-3 text-white",
  style: { "font-size": "0.5rem" }
}, ac = { class: "mt-2 d-flex text-center justify-content-between align-items-center" }, lc = { class: "me-auto d-flex flex-row align-items-center" }, ic = ["src"], uc = {
  class: "ms-2 d-flex flex-column justify-content-between",
  style: { height: "50px" }
}, cc = { class: "d-flex dlex-row column-gap-2 align-items-end" }, dc = { class: "fs-6" }, fc = { style: { "font-size": "0.5rem" } }, pc = { class: "d-flex flex-row column-gap-2 align-items-center" }, mc = {
  key: 0,
  class: "badge text-bg-primary px-2"
}, vc = { class: "d-flex flex-column align-items-end" }, hc = /* @__PURE__ */ gn(() => /* @__PURE__ */ h("div", { class: "text-info" }, "音频时长，请以生成后的为准", -1)), yc = { class: "mt-1" }, gc = /* @__PURE__ */ gn(() => /* @__PURE__ */ h("span", null, "/", -1)), bc = { class: "role-list mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-2 column-gap-3" }, _c = ["onClick"], wc = { class: "audio-mood mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-1 column-gap-2" }, xc = ["onClick"], Ec = /* @__PURE__ */ gn(() => /* @__PURE__ */ h("div", { class: "my-3" }, [
  /* @__PURE__ */ h("span", { class: "border rounded-pill p-1" }, "配音师详情")
], -1)), $c = { class: "slider-box" }, kc = { class: "slider-box" }, Sc = { class: "d-flex flex-row gap-3 my-3" }, Cc = ["onClick"], Oc = {
  class: "d-flex flex-row flex-wrap row-gap-2 column-gap-3 mb-3",
  style: { "min-height": "100px" }
}, Tc = ["onClick"], Pc = /* @__PURE__ */ L({
  __name: "slider-panle",
  setup(e) {
    const { globalEditConfig: t } = me(), { rootProsody: n, rootExpressAs: s } = je(), { fetchStar: r, flags: o, fetchFlag: a } = t.tryPlay, l = cn(), i = g(l.speaker.isStar), u = g(10), m = g(0), p = g([0, 2]), f = g(1), v = g([-10, 10]), d = g(0), c = Z(() => Jn(u.value)), w = Z(() => Jn(m.value)), k = Mt(so()), V = Mt(ro()), $ = g(""), S = g([]);
    ge(async () => {
      await j("");
    }), te(
      () => l.speaker,
      (O) => {
        O.roles.length > 0 && _(O.roles[0].value), O.styles.length > 0 && x(O.styles[0].value);
      },
      { immediate: !0 }
    ), te(
      d,
      (O) => {
        n.pitch = sc(O);
      },
      { immediate: !0 }
    ), te(
      f,
      (O) => {
        n.rate = rc(O);
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
    async function j(O) {
      $.value = O;
      try {
        S.value = await a(O);
      } catch (T) {
        $e.emit(ke.ERROR, `${T}`, T);
      }
    }
    function ee(O) {
      l.setSpeaker(ie(O));
    }
    return (O, T) => (C(), I("div", oc, [
      h("div", ac, [
        h("div", lc, [
          h("img", {
            src: b(at)(),
            class: "rounded-circle",
            style: { height: "50px" }
          }, null, 8, ic),
          h("div", uc, [
            h("div", cc, [
              h("span", dc, z(b(l).speaker.label), 1),
              h("span", fc, z(f.value) + "x", 1)
            ]),
            h("div", pc, [
              y(b(ys), {
                onClick: P,
                class: "fs-6",
                style: _t({ color: i.value ? "red" : "white" })
              }, {
                default: R(() => [
                  i.value ? (C(), X(b(kr), { key: 0 })) : (C(), X(b(Sr), { key: 1 }))
                ]),
                _: 1
              }, 8, ["style"]),
              b(l).speaker.isSupper24K ? (C(), I("span", mc, " 24K ")) : Ee("", !0)
            ])
          ])
        ]),
        h("div", vc, [
          hc,
          h("div", yc, [
            h("span", null, z(w.value), 1),
            gc,
            h("span", null, z(c.value), 1)
          ]),
          y(b(St), {
            max: u.value,
            modelValue: m.value,
            "onUpdate:modelValue": T[0] || (T[0] = (N) => m.value = N),
            size: "small"
          }, null, 8, ["max", "modelValue"])
        ])
      ]),
      h("div", bc, [
        (C(!0), I(Q, null, le(b(l).speaker.roles, (N, U) => (C(), I("div", {
          onClick: (ue) => _(N.value),
          key: U,
          class: ye(["rounded-pill px-1", { border: N.value === (b(s).role || "") }])
        }, z(N.label), 11, _c))), 128))
      ]),
      h("ul", wc, [
        (C(!0), I(Q, null, le(b(l).speaker.styles, (N, U) => (C(), I("li", {
          class: "mx-2",
          onClick: (ue) => x(N.value),
          key: U
        }, [
          y(nc, {
            activate: N.value === (b(s).style || ""),
            data: N
          }, null, 8, ["activate", "data"])
        ], 8, xc))), 128))
      ]),
      Ec,
      h("div", $c, [
        h("div", null, [
          h("span", null, "语速：" + z(f.value) + "x", 1)
        ]),
        y(b(St), {
          modelValue: f.value,
          "onUpdate:modelValue": T[1] || (T[1] = (N) => f.value = N),
          min: p.value[0],
          max: p.value[1],
          step: 0.05,
          marks: k
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      h("div", kc, [
        h("div", null, [
          h("span", null, "语调：" + z(d.value), 1)
        ]),
        y(b(St), {
          modelValue: d.value,
          "onUpdate:modelValue": T[2] || (T[2] = (N) => d.value = N),
          min: v.value[0],
          max: v.value[1],
          step: 0.2,
          marks: V
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      h("div", null, [
        h("ul", Sc, [
          (C(!0), I(Q, null, le(b(o), (N, U) => (C(), I("li", {
            onClick: (ue) => j(N.value),
            key: U,
            class: ye(["rounded-pill px-1", { border: N.value === $.value }])
          }, z(N.label), 11, Cc))), 128))
        ]),
        h("ul", Oc, [
          (C(!0), I(Q, null, le(S.value, (N, U) => (C(), I("li", {
            onClick: (ue) => ee(N),
            key: U
          }, [
            y(lr, {
              activate: N.value === b(l).speaker.value,
              data: N
            }, null, 8, ["activate", "data"])
          ], 8, Tc))), 128))
        ])
      ])
    ]));
  }
});
const Rc = /* @__PURE__ */ ve(Pc, [["__scopeId", "data-v-c4fe6de7"]]), Vc = (e) => (Zt("data-v-f0208c5e"), e = e(), en(), e), Ic = { class: "box ms-2" }, Nc = { class: "try-play-header text-center d-flex flex-row justify-content-between" }, Dc = { class: "try-play-body d-flex flex-row" }, Ac = { class: "try-play-left w-50 border-right border-secondary" }, Lc = { class: "pe-1" }, Mc = /* @__PURE__ */ Vc(() => /* @__PURE__ */ h("div", { class: "py-1 border-top border-secondary" }, null, -1)), jc = { class: "try-play-right w-50 border-start rounded border-top border-secondary overflow-x-hidden overflow-y-auto scrollbar-none" }, Hc = /* @__PURE__ */ L({
  __name: "try-play-panle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = e, s = g(), r = g(""), o = g(), a = g(), l = g(Ms());
    ge(() => {
      window.addEventListener("keydown", i);
    }), Qt(() => {
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
    const { position: u } = pn(a, {
      initialValue: { x: 40, y: 40 }
    }), { style: m } = hn(o, u);
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
      style: _t([b(m), { position: "fixed" }]),
      class: "try-play user-select-none card z-3 shadow"
    }, [
      h("div", Ic, [
        h("div", Nc, [
          h("div", {
            ref_key: "handleRef",
            ref: a,
            class: "col-11 try-play-move"
          }, null, 512),
          h("div", {
            onClick: p,
            class: "col-1 try-play-menu-close"
          }, [
            y(b(ys), { color: "white" }, {
              default: R(() => [
                y(b(Cr))
              ]),
              _: 1
            })
          ])
        ]),
        h("div", Dc, [
          h("div", Ac, [
            h("div", Lc, [
              y(b(wt), {
                onSubmit: oe(v, ["prevent"])
              }, {
                default: R(() => [
                  y(b(xt), {
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
            y(Qu, {
              filter: l.value,
              "onUpdate:filter": c[1] || (c[1] = (w) => l.value = w)
            }, null, 8, ["filter"]),
            Mc,
            y(Yu, { filter: l.value }, null, 8, ["filter"])
          ]),
          h("div", jc, [
            y(Rc)
          ])
        ])
      ])
    ], 4)), [
      [Te, d.visible]
    ]);
  }
});
const Fc = /* @__PURE__ */ ve(Hc, [["__scopeId", "data-v-f0208c5e"]]), ir = /* @__PURE__ */ L({
  __name: "try-play",
  setup(e) {
    const t = g(!0);
    function n(s) {
      s || (t.value = !0);
    }
    return (s, r) => (C(), X(hs, { to: "body" }, [
      y(Fu, {
        visible: t.value,
        "onUpdate:visible": r[0] || (r[0] = (o) => t.value = o)
      }, null, 8, ["visible"]),
      y(Fc, {
        visible: !t.value,
        "onUpdate:visible": n
      }, null, 8, ["visible"])
    ]));
  }
});
const Uc = {
  install: (e) => {
    e.component("PinyinMenu", Ys), e.component("ContinuousMenu", qs), e.component("ReadMenu", Xs), e.component("DigitalMenu", Ks), e.component("AliasMenu", Js), e.component("EnglishMenu", Qs), e.component("ChangespeedMenu", Zs), e.component("RhythmMenu", er), e.component("SpecialMenu", tr), e.component("MuteMenu", nr), e.component("BgmMenu", sr), e.component("SensitiveMenu", rr), e.component("ManagementMenu", or), e.component("ConversionMenu", ar), e.component("TryPlay", ir);
  }
};
var qt = { exports: {} }, Xt = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.ParsingError = void 0;
  class n extends Error {
    constructor(S, P) {
      super(S), this.cause = P;
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
    const $ = l(!0), S = [];
    let P, _ = o();
    for (; _; ) {
      if (_.node.type === "Element") {
        if (P)
          throw new Error("Found multiple root nodes");
        P = _.node;
      }
      _.excluded || S.push(_.node), _ = o();
    }
    if (!P)
      throw new n("Failed to parse XML", "Root Element not found");
    if (s.xml.length !== 0)
      throw new n("Failed to parse XML", "Not Well-Formed XML");
    return {
      declaration: $ ? $.node : null,
      root: P,
      children: S
    };
  }
  function l($) {
    const S = c($ ? /^<\?(xml)\s*/ : /^<\?([\w-:.]+)\s*/);
    if (!S)
      return;
    const P = {
      name: S[1],
      type: "ProcessingInstruction",
      attributes: {}
    };
    for (; !(w() || k("?>")); ) {
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
    const S = c(/^<([^?!</>\s]+)\s*/);
    if (!S)
      return;
    const P = {
      type: "Element",
      name: S[1],
      attributes: {},
      children: []
    }, _ = $ ? !1 : s.options.filter(P) === !1;
    for (; !(w() || k(">") || k("?>") || k("/>")); ) {
      const j = v();
      if (j)
        P.attributes[j.name] = j.value;
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
      const j = `</${P.name}>`;
      if (s.xml.startsWith(j))
        s.xml = s.xml.slice(j.length);
      else
        throw new n("Failed to parse XML", `Closing tag not matching "${j}"`);
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
  function m() {
    if (s.xml.startsWith("<![CDATA[")) {
      const $ = s.xml.indexOf("]]>");
      if ($ > -1) {
        const S = $ + 3, P = {
          type: "CDATA",
          content: s.xml.substring(0, S)
        };
        return s.xml = s.xml.slice(S), {
          excluded: s.options.filter(P) === !1,
          node: P
        };
      }
    }
  }
  function p() {
    const $ = c(/^<!--[\s\S]*?-->/);
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
  function f() {
    const $ = c(/^([^<]+)/);
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
    const S = s.xml.match($);
    if (S)
      return s.xml = s.xml.slice(S[0].length), S;
  }
  function w() {
    return s.xml.length === 0;
  }
  function k($) {
    return s.xml.indexOf($) === 0;
  }
  function V($, S = {}) {
    $ = $.trim();
    const P = S.filter || (() => !0);
    return s = {
      xml: $,
      options: Object.assign(Object.assign({}, S), { filter: P, strictMode: S.strictMode === !0 })
    }, a();
  }
  e.exports = V, t.default = V;
})(Xt, Xt.exports);
var Bc = Xt.exports;
(function(e, t) {
  var n = We && We.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const s = n(Bc);
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
      const k = d.trim();
      (c.options.lineSeparator || k.length === 0) && (d = k);
    }
    d.length > 0 && (!w && c.content.length > 0 && r(c), a(c, d));
  }
  function u(d, c) {
    const w = "/" + d.join("/"), k = d[d.length - 1];
    return c.includes(k) || c.includes(w);
  }
  function m(d, c, w) {
    if (c.path.push(d.name), !w && c.content.length > 0 && r(c), a(c, "<" + d.name), p(c, d.attributes), d.children === null || c.options.forceSelfClosingEmptyTag && d.children.length === 0) {
      const k = c.options.whiteSpaceAtEndOfSelfclosingTag ? " />" : "/>";
      a(c, k);
    } else if (d.children.length === 0)
      a(c, "></" + d.name + ">");
    else {
      const k = d.children;
      a(c, ">"), c.level++;
      let V = d.attributes["xml:space"] === "preserve", $ = !1;
      if (!V && c.options.ignoredPaths && ($ = u(c.path, c.options.ignoredPaths), V = $), !V && c.options.collapseContent) {
        let S = !1, P = !1, _ = !1;
        k.forEach(function(x, j) {
          x.type === "Text" ? (x.content.includes(`
`) ? (P = !0, x.content = x.content.trim()) : (j === 0 || j === k.length - 1) && x.content.trim().length === 0 && (x.content = ""), x.content.trim().length > 0 && (S = !0)) : x.type === "CDATA" ? S = !0 : _ = !0;
        }), S && (!_ || !P) && (V = !0);
      }
      k.forEach(function(S) {
        l(S, c, w || V);
      }), c.level--, !w && !V && r(c), $ && o(c), a(c, "</" + d.name + ">");
    }
    c.path.pop();
  }
  function p(d, c) {
    Object.keys(c).forEach(function(w) {
      const k = c[w].replace(/"/g, "&quot;");
      a(d, " " + w + '="' + k + '"');
    });
  }
  function f(d, c) {
    c.content.length > 0 && r(c), a(c, "<?" + d.name), p(c, d.attributes), a(c, "?>");
  }
  function v(d, c = {}) {
    c.indentation = "indentation" in c ? c.indentation : "    ", c.collapseContent = c.collapseContent === !0, c.lineSeparator = "lineSeparator" in c ? c.lineSeparator : `\r
`, c.whiteSpaceAtEndOfSelfclosingTag = c.whiteSpaceAtEndOfSelfclosingTag === !0, c.throwOnFailure = c.throwOnFailure !== !1;
    try {
      const w = (0, s.default)(d, { filter: c.filter, strictMode: c.strictMode }), k = { content: "", level: 0, options: c, path: [] };
      return w.declaration && f(w.declaration, k), w.children.forEach(function(V) {
        l(V, k, !1);
      }), c.lineSeparator ? k.content.replace(/\r\n/g, `
`).replace(/\n/g, c.lineSeparator) : k.content;
    } catch (w) {
      if (c.throwOnFailure)
        throw w;
      return d;
    }
  }
  v.minify = (d, c = {}) => v(d, Object.assign(Object.assign({}, c), { indentation: "", lineSeparator: "" })), e.exports = v, t.default = v;
})(qt, qt.exports);
var zc = qt.exports;
const Wc = /* @__PURE__ */ on(zc);
function Gc(e) {
  return e.replaceAll(/[&]/gi, "&amp;").replaceAll(/[<]/gi, "&lt;").replaceAll(/[>]/gi, "&gt;");
}
function Yc(e, t) {
  return t ? `<audio src="${e.src}">${t}</audio>` : `<audio src="${e.src}"/>`;
}
function qc(e) {
  return e.time ? `<break time="${e.time}"/>` : e.strength ? `<break strength="${e.strength}"/>` : "<break/>";
}
function Xc(e, t) {
  return e.level ? `<emphasis level="${e.level}">${t}</emphasis>` : `<emphasis>${t}</emphasis>`;
}
function Kc(e, t) {
  if (!e.style)
    return t;
  const n = e.role ? ` role="${e.role}"` : "", s = e.styledegree ? ` styledegree="${e.styledegree}"` : "";
  return `<mstts:express-as style="${e.style}"${n}${s}>${t}</mstts:express-as>`;
}
function Jc(e) {
  if (!e.src)
    return "";
  const t = e.volume ? ` volume="${e.volume}"` : "", n = e.fadein ? ` fadein="${e.fadein}"` : "", s = e.fadeout ? ` fadeout="${e.fadeout}"` : "";
  return `<mstts:backgroundaudio src="${e.src}"${t}${n}${s}/>`;
}
function Qc(e) {
  return !e.attrType || !e.value ? "" : `<mstts:silence type="${e.attrType}" value="${e.value}"/>`;
}
function Zc(e, t) {
  return `<p>${t}</p>`;
}
function ed(e, t) {
  const n = e.alphabet ? `alphabet="${e.alphabet}"` : "";
  return `<phoneme ph="${e.ph}"${n}>${t}</phoneme>`;
}
function td(e, t) {
  if (!e.contour && !e.pitch && !e.range && !e.rate && !e.volume)
    return t;
  const n = e.contour ? ` contour="${e.contour}"` : "", s = e.pitch ? ` pitch="${e.pitch}"` : "", r = e.range ? ` range="${e.range}"` : "", o = e.volume ? ` volume="${e.volume}"` : "", a = e.rate ? ` rate="${e.rate}"` : "";
  return `<prosody${n}${s}${r}${o}${a}>${t}</prosody>`;
}
function nd(e, t) {
  const n = e.interpretAs ? ` interpret-as="${e.interpretAs}"` : "", s = e.format ? ` format="${e.format}"` : "", r = e.detail ? ` detail="${e.detail}"` : "";
  return `<say-as${n}${s}${r}>${t}</say-as>`;
}
function sd(e, t) {
  return `<s>${t}</s>`;
}
function rd(e, t) {
  return `<sub alias="${e.alias}">${t}</sub>`;
}
function od(e, t) {
  const n = e.effect ? ` effect="${e.effect}"` : "";
  return `<voice name="${e.name}${n}">${t}</voice>`;
}
function ad(e, t) {
  return `<speak version="${e.version}" xml:lang="${e.xmlLang}" xmlns="${e.xmlns}" xmlns:mstts="${e["xmlns:mstts"]}" xmlns:emo="${e["xmlns:emo"]}">${t}</speak>`;
}
function ur(e) {
  if (rt.isText(e))
    return Gc(e.text.trim());
  if (gr.isElement(e)) {
    const t = e.children.map((s) => ur(s)).join("");
    switch (D.getNodeType(e)) {
      case "paragraph":
        return `<p>${t}</p>`;
      case "ssml-speak":
        return ad(e, t);
      case "ssml-mstts:backgroundaudio":
        return Jc(e);
      case "ssml-audio":
        return Yc(e, t);
      case "ssml-break":
        return qc(e);
      case "ssml-emphasis":
        return Xc(e, t);
      case "ssml-mstts:express-as":
        return Kc(e, t);
      case "ssml-p":
        return Zc(e, t);
      case "ssml-phoneme":
        return ed(e, t);
      case "ssml-prosody":
        return td(e, t);
      case "ssml-s":
        return sd(e, t);
      case "ssml-say-as":
        return nd(e, t);
      case "ssml-sub":
        return rd(e, t);
      case "ssml-voice":
        return od(e, t);
      case "ssml-mstts:silence":
        return Qc(e);
      default:
        return t;
    }
  }
  return "";
}
function ld(e, t) {
  const n = { type: "ssml-voice", remark: "", name: t.name, children: [] }, s = cr(), r = {
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
      } else if (q.isVoid(e, u)) {
        l = void 0, r.children.push(u);
        continue;
      } else {
        const m = D.findPath(e, u), [p] = q.nodes(e, {
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
function cr() {
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
function id() {
  const { rootVoice: e, rootExpressAs: t } = je(), n = { ...e, children: [] }, s = cr(), r = { ...t, children: [] };
  n.children.push(...s), n.children.push(r);
  function o(a) {
    r.children.push(a);
  }
  return { voice: n, pushNode: o };
}
function ds(e) {
  const { rootProsody: t } = je(), n = { ...t, children: [] };
  e(n);
  function s(r) {
    n.children.push(r);
  }
  return { prosody: n, pushNode: s };
}
function ud() {
  return {
    type: "ssml-break",
    time: "200ms",
    children: [{ text: "" }],
    remark: "paragraphBreak"
  };
}
function cd(e) {
  const t = e.children.filter((n) => D.checkNodeType(n, "paragraph")).filter((n) => !!tn.string(n).trim()).map((n, s, r) => {
    const a = n.children;
    return s < r.length - 1 ? a.concat([ud()]) : a;
  });
  return [].concat(...t);
}
function dd(e) {
  const t = cd(e), n = [];
  let s, r;
  for (let o = 0; o < t.length; o++) {
    const a = t[o];
    if (!(rt.isText(a) && !a.text.trim())) {
      if (D.checkNodeType(a, "custom-management")) {
        s && (n.push(s.voice), s = void 0, r = void 0), n.push(ld(e, a));
        continue;
      }
      if (s ?? (s = id()), rt.isText(a)) {
        r ?? (r = ds(s.pushNode)), r.pushNode(a);
        continue;
      } else if (q.isVoid(e, a)) {
        r = void 0, s.pushNode(a);
        continue;
      } else {
        const l = D.findPath(e, a), [i] = q.nodes(e, {
          at: l,
          mode: "lowest",
          voids: !1,
          match: (u) => D.checkNodeType(u, "ssml-prosody")
        });
        if (i) {
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
function fd() {
  const { editor: e } = me();
  if (!e)
    throw Error("没有找到 editor 对象");
  const { rootSpeak: t, rootBackgroundaudio: n } = je(), s = { ...t, children: [] }, r = { ...n };
  return s.children.push(r, ...dd(e)), ur(s);
}
const Je = (e) => (Zt("data-v-fb2870b0"), e = e(), en(), e), pd = { class: "editor-title d-flex flex-row align-item-center justify-content-between" }, md = { class: "title-wrapper d-flex flex-column justify-content-center ps-3" }, vd = /* @__PURE__ */ Je(() => /* @__PURE__ */ h("div", { class: "title-author pb-1" }, "SSML编辑器", -1)), hd = { class: "author d-flex flex-row align-items-center justify-content-start" }, yd = /* @__PURE__ */ Je(() => /* @__PURE__ */ h("div", null, "未保存", -1)), gd = /* @__PURE__ */ Je(() => /* @__PURE__ */ h("span", { class: "iconfont icon-play font-size-12 p-1" }, null, -1)), bd = /* @__PURE__ */ Je(() => /* @__PURE__ */ h("div", { class: "d-inline-block" }, null, -1)), _d = { class: "operation-wrapper d-flex flex-row justify-content-center align-items-center" }, wd = /* @__PURE__ */ Je(() => /* @__PURE__ */ h("div", { class: "menu-divider" }, null, -1)), xd = /* @__PURE__ */ Je(() => /* @__PURE__ */ h("div", { class: "px-1" }, null, -1)), Ed = {
  class: "ssml-code border border-secondary-subtle rounded-2 px-2",
  style: { "white-space": "pre-wrap", "max-height": "50vh" }
}, $d = { class: "dialog-footer" }, kd = /* @__PURE__ */ L({
  __name: "editor-title",
  setup(e) {
    const t = g(!1), n = g(""), { rootBackgroundaudio: s } = je(), r = Z(() => Wc(n.value, {
      indentation: "    ",
      filter: (u) => u.type !== "Comment",
      collapseContent: !0,
      lineSeparator: `
`
    })), o = () => {
      n.value = fd(), t.value = !0;
    }, a = () => {
      s.src && qe.play(s.src);
    }, l = () => {
      qe.stop(s.src), s.src = "", s.remark = "";
    };
    async function i(u) {
      await navigator.clipboard.writeText(u ? r.value : n.value), t.value = !1;
    }
    return (u, m) => (C(), I(Q, null, [
      h("div", pd, [
        h("div", md, [
          vd,
          h("div", hd, [
            yd,
            b(s).src ? (C(), X(b(Ve), {
              key: 0,
              class: "bgm-txt ms-2",
              closable: "",
              size: "small",
              onClick: a,
              onClose: l
            }, {
              default: R(() => [
                gd,
                bd,
                h("span", null, z(b(s).remark), 1)
              ]),
              _: 1
            })) : Ee("", !0)
          ])
        ]),
        h("div", _d, [
          y(b(fe), {
            type: "primary",
            icon: b(Or),
            disabled: ""
          }, {
            default: R(() => [
              B("分享")
            ]),
            _: 1
          }, 8, ["icon"]),
          wd,
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
          xd
        ])
      ]),
      y(b(xr), {
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
          h("span", $d, [
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
          h("pre", Ed, z(r.value), 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
});
const Sd = /* @__PURE__ */ ve(kd, [["__scopeId", "data-v-fb2870b0"]]), Cd = /* @__PURE__ */ L({
  __name: "editor-core",
  emits: ["created", "change"],
  setup(e, { emit: t }) {
    const { editor: n, setEditor: s, globalEditConfig: r } = me(), o = g(null);
    ge(() => {
      a();
    }), Qt(() => {
      n == null || n.destroy();
    });
    function a() {
      if (!o.value)
        return;
      const l = br({
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
}), Od = { class: "bar-view border-bottom border-1" }, Td = /* @__PURE__ */ L({
  __name: "bar-view",
  setup(e) {
    return (t, n) => (C(), I(Q, null, [
      h("div", Od, [
        y(b(Us), null, {
          default: R(() => [
            y(b(Be), { divider: "green" }, {
              default: R(() => [
                y(b(se), {
                  text: "24K高清音质",
                  icon: "play",
                  disabled: ""
                })
              ]),
              _: 1
            }),
            y(b(Be), { divider: "cyan" }, {
              default: R(() => [
                y(b(Ys)),
                y(b(Xs)),
                y(b(Ks)),
                y(b(qs)),
                y(b(Js)),
                y(b(Qs))
              ]),
              _: 1
            }),
            y(b(Be), { divider: "orange" }, {
              default: R(() => [
                y(b(Zs)),
                y(b(or)),
                y(b(ar))
              ]),
              _: 1
            }),
            y(b(Be), { divider: "purple" }, {
              default: R(() => [
                y(b(er)),
                y(b(nr))
              ]),
              _: 1
            }),
            y(b(Be), { divider: "yellow" }, {
              default: R(() => [
                y(b(tr)),
                y(b(sr))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      y(b(ir))
    ], 64));
  }
}), Pd = { class: "editor-box" }, Rd = { class: "editor-core-container shadow pt-1" }, Vd = /* @__PURE__ */ L({
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
      y(Sd),
      h("div", Pd, [
        y(Td),
        h("div", Rd, [
          y(Cd, {
            onChange: s,
            onCreated: n
          })
        ])
      ])
    ], 32));
  }
});
const Id = /* @__PURE__ */ ve(Vd, [["__scopeId", "data-v-c398e700"]]), Nd = {
  install(e) {
    e.component("EditorView", Id);
  }
}, Kd = {
  install(e, t) {
    e.use(Zr()), e.use(() => {
      const { setGlobalEditConfig: n } = me(), s = Vs(t);
      n(s), $e.on(ke.ERROR, s.handleError);
    }), e.use(qa), e.use(Oi), e.use(Uc), e.use(Nd);
  }
};
export {
  Ao as AudioPlayer,
  Mo as CancellationTokenSource,
  Ud as DOMComment,
  Bd as DOMElement,
  Fd as DOMNode,
  Wd as DOMRange,
  Gd as DOMSelection,
  Yd as DOMStaticRange,
  zd as DOMText,
  ke as EMITTER_EVENT,
  Id as EditorView,
  Lo as FileSelector,
  G as WANGEDITOR_EVENT,
  qe as audioPlayer,
  Vs as createGlobalEditorConfig,
  Kd as default,
  Ms as defaultFilterSpeaker,
  ct as defaultLabelValue,
  Xa as defaultSpeaker,
  at as demoAvatar,
  Jn as formatTime,
  qd as genRandomStr,
  ro as pitch,
  so as speed
};

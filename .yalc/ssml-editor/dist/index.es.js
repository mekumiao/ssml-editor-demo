var cr = Object.defineProperty;
var dr = (e, t, n) => t in e ? cr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ee = (e, t, n) => (dr(e, typeof t != "symbol" ? t + "" : t, n), n);
import { effectScope as us, ref as w, markRaw as Ie, toRaw as ie, isRef as Le, isReactive as gt, toRef as lt, hasInjectionContext as fr, inject as cs, getCurrentInstance as Jt, watch as Z, unref as v, reactive as mt, nextTick as Ft, computed as Q, getCurrentScope as ds, onScopeDispose as fs, toRefs as Ht, shallowRef as Y, shallowReactive as Je, defineComponent as A, openBlock as O, createElementBlock as N, normalizeClass as ge, withModifiers as re, createElementVNode as h, toDisplayString as z, createBlock as X, withCtx as P, createVNode as y, renderSlot as Oe, customRef as pr, onMounted as ue, watchEffect as mr, Fragment as J, renderList as oe, createTextVNode as B, onUnmounted as Qt, Teleport as ps, withDirectives as Se, normalizeStyle as bt, vShow as Ce, createCommentVNode as Ee, provide as vr, pushScopeId as Zt, popScopeId as en } from "vue";
import { DomEditor as I, SlateNode as tn, SlateEditor as q, SlateTransforms as W, SlateRange as ce, Boot as ae, SlateText as tt, SlateElement as hr, createEditor as yr } from "@wangeditor/editor";
import { ElForm as _t, ElInput as wt, ElPopover as Te, ElMenu as gr, ElMenuItem as br, ElSelect as xn, ElOption as En, ElButton as le, ElTag as Re, ElIcon as ms, ElSlider as Ot, ElDialog as _r } from "element-plus";
import { Search as wr, More as xr, StarFilled as Er, Star as kr, Minus as $r, Share as Sr } from "@element-plus/icons-vue";
var vs = !1;
function at(e, t, n) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function Tt(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1);
    return;
  }
  delete e[t];
}
function Cr() {
  return hs().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function hs() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Or = typeof Proxy == "function", Tr = "devtools-plugin:setup", Rr = "plugin:settings:set";
let Fe, Ut;
function Dr() {
  var e;
  return Fe !== void 0 || (typeof window < "u" && window.performance ? (Fe = !0, Ut = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Fe = !0, Ut = global.perf_hooks.performance) : Fe = !1), Fe;
}
function Pr() {
  return Dr() ? Ut.now() : Date.now();
}
class Nr {
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
        return Pr();
      }
    }, n && n.on(Rr, (a, l) => {
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
function ys(e, t) {
  const n = e, s = hs(), r = Cr(), o = Or && n.enableEarlyProxy;
  if (r && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o))
    r.emit(Tr, e, t);
  else {
    const a = o ? new Nr(n, r) : null;
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
let Qe;
const nt = (e) => Qe = e, gs = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Me(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var ke;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(ke || (ke = {}));
const xt = typeof window < "u", Ze = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && xt, kn = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function Vr(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], { type: e.type }) : e;
}
function nn(e, t, n) {
  const s = new XMLHttpRequest();
  s.open("GET", e), s.responseType = "blob", s.onload = function() {
    ws(s.response, t, n);
  }, s.onerror = function() {
    console.error("could not download file");
  }, s.send();
}
function bs(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function it(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
const ut = typeof navigator == "object" ? navigator : { userAgent: "" }, _s = /* @__PURE__ */ (() => /Macintosh/.test(ut.userAgent) && /AppleWebKit/.test(ut.userAgent) && !/Safari/.test(ut.userAgent))(), ws = xt ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !_s ? Ir : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in ut ? Ar : (
      // Fallback to using FileReader and a popup
      Lr
    )
  )
) : () => {
};
function Ir(e, t = "download", n) {
  const s = document.createElement("a");
  s.download = t, s.rel = "noopener", typeof e == "string" ? (s.href = e, s.origin !== location.origin ? bs(s.href) ? nn(e, t, n) : (s.target = "_blank", it(s)) : it(s)) : (s.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    it(s);
  }, 0));
}
function Ar(e, t = "download", n) {
  if (typeof e == "string")
    if (bs(e))
      nn(e, t, n);
    else {
      const s = document.createElement("a");
      s.href = e, s.target = "_blank", setTimeout(function() {
        it(s);
      });
    }
  else
    navigator.msSaveOrOpenBlob(Vr(e, n), t);
}
function Lr(e, t, n, s) {
  if (s = s || open("", "_blank"), s && (s.document.title = s.document.body.innerText = "downloading..."), typeof e == "string")
    return nn(e, t, n);
  const r = e.type === "application/octet-stream", o = /constructor/i.test(String(kn.HTMLElement)) || "safari" in kn, a = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((a || r && o || _s) && typeof FileReader < "u") {
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
function K(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function sn(e) {
  return "_a" in e && "install" in e;
}
function xs() {
  if (!("clipboard" in navigator))
    return K("Your browser doesn't support the Clipboard API", "error"), !0;
}
function Es(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (K('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Mr(e) {
  if (!xs())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), K("Global state copied to clipboard.");
    } catch (t) {
      if (Es(t))
        return;
      K("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function jr(e) {
  if (!xs())
    try {
      ks(e, JSON.parse(await navigator.clipboard.readText())), K("Global state pasted from clipboard.");
    } catch (t) {
      if (Es(t))
        return;
      K("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function Fr(e) {
  try {
    ws(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    K("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let $e;
function Hr() {
  $e || ($e = document.createElement("input"), $e.type = "file", $e.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      $e.onchange = async () => {
        const s = $e.files;
        if (!s)
          return t(null);
        const r = s.item(0);
        return t(r ? { text: await r.text(), file: r } : null);
      }, $e.oncancel = () => t(null), $e.onerror = n, $e.click();
    });
  }
  return e;
}
async function Ur(e) {
  try {
    const n = await Hr()();
    if (!n)
      return;
    const { text: s, file: r } = n;
    ks(e, JSON.parse(s)), K(`Global state imported from "${r.name}".`);
  } catch (t) {
    K("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function ks(e, t) {
  for (const n in t) {
    const s = e.state.value[n];
    s && Object.assign(s, t[n]);
  }
}
function we(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const $s = "🍍 Pinia (root)", Bt = "_root";
function Br(e) {
  return sn(e) ? {
    id: Bt,
    label: $s
  } : {
    id: e.$id,
    label: e.$id
  };
}
function zr(e) {
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
function Wr(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: we(e.type),
    key: we(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function Gr(e) {
  switch (e) {
    case ke.direct:
      return "mutation";
    case ke.patchFunction:
      return "$patch";
    case ke.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let ze = !0;
const ct = [], Ve = "pinia:mutations", te = "pinia", { assign: Yr } = Object, vt = (e) => "🍍 " + e;
function qr(e, t) {
  ys({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: ct,
    app: e
  }, (n) => {
    typeof n.now != "function" && K("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
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
            Mr(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await jr(t), n.sendInspectorTree(te), n.sendInspectorState(te);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            Fr(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Ur(t), n.sendInspectorTree(te), n.sendInspectorState(te);
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
            r ? typeof r.$reset != "function" ? K(`Cannot reset "${s}" store because it doesn't have a "$reset" method implemented.`, "warn") : (r.$reset(), K(`Store "${s}" reset.`)) : K(`Cannot reset "${s}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((s, r) => {
      const o = s.componentInstance && s.componentInstance.proxy;
      if (o && o._pStores) {
        const a = s.componentInstance.proxy._pStores;
        Object.values(a).forEach((l) => {
          s.instanceData.state.push({
            type: vt(l.$id),
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
            type: vt(l.$id),
            key: "getters",
            editable: !1,
            value: l._getters.reduce((i, u) => {
              try {
                i[u] = l[u];
              } catch (p) {
                i[u] = p;
              }
              return i;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((s) => {
      if (s.app === e && s.inspectorId === te) {
        let r = [t];
        r = r.concat(Array.from(t._s.values())), s.rootNodes = (s.filter ? r.filter((o) => "$id" in o ? o.$id.toLowerCase().includes(s.filter.toLowerCase()) : $s.toLowerCase().includes(s.filter.toLowerCase())) : r).map(Br);
      }
    }), n.on.getInspectorState((s) => {
      if (s.app === e && s.inspectorId === te) {
        const r = s.nodeId === Bt ? t : t._s.get(s.nodeId);
        if (!r)
          return;
        r && (s.state = zr(r));
      }
    }), n.on.editInspectorState((s, r) => {
      if (s.app === e && s.inspectorId === te) {
        const o = s.nodeId === Bt ? t : t._s.get(s.nodeId);
        if (!o)
          return K(`store "${s.nodeId}" not found`, "error");
        const { path: a } = s;
        sn(o) ? a.unshift("state") : (a.length !== 1 || !o._customProperties.has(a[0]) || a[0] in o.$state) && a.unshift("$state"), ze = !1, s.set(o, a, s.state.value), ze = !0;
      }
    }), n.on.editComponentState((s) => {
      if (s.type.startsWith("🍍")) {
        const r = s.type.replace(/^🍍\s*/, ""), o = t._s.get(r);
        if (!o)
          return K(`store "${r}" not found`, "error");
        const { path: a } = s;
        if (a[0] !== "state")
          return K(`Invalid path for store "${r}":
${a}
Only state can be modified.`);
        a[0] = "$state", ze = !1, s.set(o, a, s.state.value), ze = !0;
      }
    });
  });
}
function Xr(e, t) {
  ct.includes(vt(t.$id)) || ct.push(vt(t.$id)), ys({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: ct,
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
      const p = Ss++;
      n.addTimelineEvent({
        layerId: Ve,
        event: {
          time: s(),
          title: "🛫 " + i,
          subtitle: "start",
          data: {
            store: we(t.$id),
            action: we(i),
            args: u
          },
          groupId: p
        }
      }), a((f) => {
        De = void 0, n.addTimelineEvent({
          layerId: Ve,
          event: {
            time: s(),
            title: "🛬 " + i,
            subtitle: "end",
            data: {
              store: we(t.$id),
              action: we(i),
              args: u,
              result: f
            },
            groupId: p
          }
        });
      }), l((f) => {
        De = void 0, n.addTimelineEvent({
          layerId: Ve,
          event: {
            time: s(),
            logType: "error",
            title: "💥 " + i,
            subtitle: "end",
            data: {
              store: we(t.$id),
              action: we(i),
              args: u,
              error: f
            },
            groupId: p
          }
        });
      });
    }, !0), t._customProperties.forEach((a) => {
      Z(() => v(t[a]), (l, i) => {
        n.notifyComponentUpdate(), n.sendInspectorState(te), ze && n.addTimelineEvent({
          layerId: Ve,
          event: {
            time: s(),
            title: "Change",
            subtitle: a,
            data: {
              newValue: l,
              oldValue: i
            },
            groupId: De
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: a, type: l }, i) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(te), !ze)
        return;
      const u = {
        time: s(),
        title: Gr(l),
        data: Yr({ store: we(t.$id) }, Wr(a)),
        groupId: De
      };
      l === ke.patchFunction ? u.subtitle = "⤵️" : l === ke.patchObject ? u.subtitle = "🧩" : a && !Array.isArray(a) && (u.subtitle = a.type), a && (u.data["rawEvent(s)"] = {
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
    t._hotUpdate = Ie((a) => {
      r(a), n.addTimelineEvent({
        layerId: Ve,
        event: {
          time: s(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: we(t.$id),
            info: we("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(te), n.sendInspectorState(te);
    });
    const { $dispose: o } = t;
    t.$dispose = () => {
      o(), n.notifyComponentUpdate(), n.sendInspectorTree(te), n.sendInspectorState(te), n.getSettings().logStoreChanges && K(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(te), n.sendInspectorState(te), n.getSettings().logStoreChanges && K(`"${t.$id}" store installed 🆕`);
  });
}
let Ss = 0, De;
function $n(e, t, n) {
  const s = t.reduce((r, o) => (r[o] = ie(e)[o], r), {});
  for (const r in s)
    e[r] = function() {
      const o = Ss, a = n ? new Proxy(e, {
        get(...i) {
          return De = o, Reflect.get(...i);
        },
        set(...i) {
          return De = o, Reflect.set(...i);
        }
      }) : e;
      De = o;
      const l = s[r].apply(a, arguments);
      return De = void 0, l;
    };
}
function Kr({ app: e, store: t, options: n }) {
  if (t.$id.startsWith("__hot:"))
    return;
  t._isOptionsAPI = !!n.state, $n(t, Object.keys(n.actions), t._isOptionsAPI);
  const s = t._hotUpdate;
  ie(t)._hotUpdate = function(r) {
    s.apply(this, arguments), $n(t, Object.keys(r._hmrPayload.actions), !!t._isOptionsAPI);
  }, Xr(
    e,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    t
  );
}
function Jr() {
  const e = us(!0), t = e.run(() => w({}));
  let n = [], s = [];
  const r = Ie({
    install(o) {
      nt(r), r._a = o, o.provide(gs, r), o.config.globalProperties.$pinia = r, Ze && qr(o, r), s.forEach((a) => n.push(a)), s = [];
    },
    use(o) {
      return !this._a && !vs ? s.push(o) : n.push(o), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return Ze && typeof Proxy < "u" && r.use(Kr), r;
}
function Cs(e, t) {
  for (const n in t) {
    const s = t[n];
    if (!(n in e))
      continue;
    const r = e[n];
    Me(r) && Me(s) && !Le(s) && !gt(s) ? e[n] = Cs(r, s) : e[n] = s;
  }
  return e;
}
const Os = () => {
};
function Sn(e, t, n, s = Os) {
  e.push(t);
  const r = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), s());
  };
  return !n && ds() && fs(r), r;
}
function He(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Qr = (e) => e();
function zt(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, s) => e.set(s, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], r = e[n];
    Me(r) && Me(s) && e.hasOwnProperty(n) && !Le(s) && !gt(s) ? e[n] = zt(r, s) : e[n] = s;
  }
  return e;
}
const Zr = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function eo(e) {
  return !Me(e) || !e.hasOwnProperty(Zr);
}
const { assign: me } = Object;
function Cn(e) {
  return !!(Le(e) && e.effect);
}
function On(e, t, n, s) {
  const { state: r, actions: o, getters: a } = t, l = n.state.value[e];
  let i;
  function u() {
    !l && (process.env.NODE_ENV === "production" || !s) && (n.state.value[e] = r ? r() : {});
    const p = process.env.NODE_ENV !== "production" && s ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      Ht(w(r ? r() : {}).value)
    ) : Ht(n.state.value[e]);
    return me(p, o, Object.keys(a || {}).reduce((f, m) => (process.env.NODE_ENV !== "production" && m in p && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${m}" in store "${e}".`), f[m] = Ie(Q(() => {
      nt(n);
      const g = n._s.get(e);
      return a[m].call(g, g);
    })), f), {}));
  }
  return i = Wt(e, u, t, n, s, !0), i;
}
function Wt(e, t, n = {}, s, r, o) {
  let a;
  const l = me({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !s._e.active)
    throw new Error("Pinia destroyed");
  const i = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !vs && (i.onTrigger = (S) => {
    u ? g = S : u == !1 && !_._hotUpdating && (Array.isArray(g) ? g.push(S) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let u, p, f = [], m = [], g;
  const c = s.state.value[e];
  !o && !c && (process.env.NODE_ENV === "production" || !r) && (s.state.value[e] = {});
  const d = w({});
  let E;
  function $(S) {
    let C;
    u = p = !1, process.env.NODE_ENV !== "production" && (g = []), typeof S == "function" ? (S(s.state.value[e]), C = {
      type: ke.patchFunction,
      storeId: e,
      events: g
    }) : (zt(s.state.value[e], S), C = {
      type: ke.patchObject,
      payload: S,
      storeId: e,
      events: g
    });
    const V = E = Symbol();
    Ft().then(() => {
      E === V && (u = !0);
    }), p = !0, He(f, C, s.state.value[e]);
  }
  const R = o ? function() {
    const { state: C } = n, V = C ? C() : {};
    this.$patch((H) => {
      me(H, V);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : Os
  );
  function b() {
    a.stop(), f = [], m = [], s._s.delete(e);
  }
  function x(S, C) {
    return function() {
      nt(s);
      const V = Array.from(arguments), H = [], _e = [];
      function $t(M) {
        H.push(M);
      }
      function St(M) {
        _e.push(M);
      }
      He(m, {
        args: V,
        name: S,
        store: _,
        after: $t,
        onError: St
      });
      let Ne;
      try {
        Ne = C.apply(this && this.$id === e ? this : _, V);
      } catch (M) {
        throw He(_e, M), M;
      }
      return Ne instanceof Promise ? Ne.then((M) => (He(H, M), M)).catch((M) => (He(_e, M), Promise.reject(M))) : (He(H, Ne), Ne);
    };
  }
  const T = /* @__PURE__ */ Ie({
    actions: {},
    getters: {},
    state: [],
    hotState: d
  }), D = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Sn.bind(null, m),
    $patch: $,
    $reset: R,
    $subscribe(S, C = {}) {
      const V = Sn(f, S, C.detached, () => H()), H = a.run(() => Z(() => s.state.value[e], (_e) => {
        (C.flush === "sync" ? p : u) && S({
          storeId: e,
          type: ke.direct,
          events: g
        }, _e);
      }, me({}, i, C)));
      return V;
    },
    $dispose: b
  }, _ = mt(process.env.NODE_ENV !== "production" || Ze ? me(
    {
      _hmrPayload: T,
      _customProperties: Ie(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    D
    // must be added later
    // setupStore
  ) : D);
  s._s.set(e, _);
  const L = s._a && s._a.runWithContext || Qr, U = s._e.run(() => (a = us(), L(() => a.run(t))));
  for (const S in U) {
    const C = U[S];
    if (Le(C) && !Cn(C) || gt(C))
      process.env.NODE_ENV !== "production" && r ? at(d.value, S, lt(U, S)) : o || (c && eo(C) && (Le(C) ? C.value = c[S] : zt(C, c[S])), s.state.value[e][S] = C), process.env.NODE_ENV !== "production" && T.state.push(S);
    else if (typeof C == "function") {
      const V = process.env.NODE_ENV !== "production" && r ? C : x(S, C);
      U[S] = V, process.env.NODE_ENV !== "production" && (T.actions[S] = C), l.actions[S] = C;
    } else
      process.env.NODE_ENV !== "production" && Cn(C) && (T.getters[S] = o ? (
        // @ts-expect-error
        n.getters[S]
      ) : C, xt && (U._getters || // @ts-expect-error: same
      (U._getters = Ie([]))).push(S));
  }
  if (me(_, U), me(ie(_), U), Object.defineProperty(_, "$state", {
    get: () => process.env.NODE_ENV !== "production" && r ? d.value : s.state.value[e],
    set: (S) => {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error("cannot set hotState");
      $((C) => {
        me(C, S);
      });
    }
  }), process.env.NODE_ENV !== "production" && (_._hotUpdate = Ie((S) => {
    _._hotUpdating = !0, S._hmrPayload.state.forEach((C) => {
      if (C in _.$state) {
        const V = S.$state[C], H = _.$state[C];
        typeof V == "object" && Me(V) && Me(H) ? Cs(V, H) : S.$state[C] = H;
      }
      at(_, C, lt(S.$state, C));
    }), Object.keys(_.$state).forEach((C) => {
      C in S.$state || Tt(_, C);
    }), u = !1, p = !1, s.state.value[e] = lt(S._hmrPayload, "hotState"), p = !0, Ft().then(() => {
      u = !0;
    });
    for (const C in S._hmrPayload.actions) {
      const V = S[C];
      at(_, C, x(C, V));
    }
    for (const C in S._hmrPayload.getters) {
      const V = S._hmrPayload.getters[C], H = o ? (
        // special handling of options api
        Q(() => (nt(s), V.call(_, _)))
      ) : V;
      at(_, C, H);
    }
    Object.keys(_._hmrPayload.getters).forEach((C) => {
      C in S._hmrPayload.getters || Tt(_, C);
    }), Object.keys(_._hmrPayload.actions).forEach((C) => {
      C in S._hmrPayload.actions || Tt(_, C);
    }), _._hmrPayload = S._hmrPayload, _._getters = S._getters, _._hotUpdating = !1;
  })), Ze) {
    const S = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((C) => {
      Object.defineProperty(_, C, me({ value: _[C] }, S));
    });
  }
  return s._p.forEach((S) => {
    if (Ze) {
      const C = a.run(() => S({
        store: _,
        app: s._a,
        pinia: s,
        options: l
      }));
      Object.keys(C || {}).forEach((V) => _._customProperties.add(V)), me(_, C);
    } else
      me(_, a.run(() => S({
        store: _,
        app: s._a,
        pinia: s,
        options: l
      })));
  }), process.env.NODE_ENV !== "production" && _.$state && typeof _.$state == "object" && typeof _.$state.constructor == "function" && !_.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${_.$id}".`), c && o && n.hydrate && n.hydrate(_.$state, c), u = !0, p = !0, _;
}
function Et(e, t, n) {
  let s, r;
  const o = typeof t == "function";
  if (typeof e == "string")
    s = e, r = o ? n : t;
  else if (r = e, s = e.id, process.env.NODE_ENV !== "production" && typeof s != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function a(l, i) {
    const u = fr();
    if (l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && Qe && Qe._testing ? null : l) || (u ? cs(gs, null) : null), l && nt(l), process.env.NODE_ENV !== "production" && !Qe)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    l = Qe, l._s.has(s) || (o ? Wt(s, t, r, l) : On(s, r, l), process.env.NODE_ENV !== "production" && (a._pinia = l));
    const p = l._s.get(s);
    if (process.env.NODE_ENV !== "production" && i) {
      const f = "__hot:" + s, m = o ? Wt(f, t, r, l, !0) : On(f, me({}, r), l, !0);
      i._hotUpdate(m), delete l.state.value[f], l._s.delete(f);
    }
    if (process.env.NODE_ENV !== "production" && xt) {
      const f = Jt();
      if (f && f.proxy && // avoid adding stores that are just built for hot module replacement
      !i) {
        const m = f.proxy, g = "_pStores" in m ? m._pStores : m._pStores = {};
        g[s] = p;
      }
    }
    return p;
  }
  return a.$id = s, a;
}
function Ts(e) {
  {
    e = ie(e);
    const t = {};
    for (const n in e) {
      const s = e[n];
      (Le(s) || gt(s)) && (t[n] = // ---
      lt(e, n));
    }
    return t;
  }
}
function Tn() {
  return { id: "", src: "" };
}
function pe() {
  return () => Promise.resolve([]);
}
function Rs(e) {
  const t = (e == null ? void 0 : e.editorConfig) || { maxLength: 5e3, placeholder: "请输入内容..." }, n = (e == null ? void 0 : e.handleError) || (() => {
  }), s = (e == null ? void 0 : e.pinyin) || { fetchData: pe() }, r = (e == null ? void 0 : e.english) || { fetchData: pe() }, o = (e == null ? void 0 : e.special) || {
    fetchData: pe(),
    fetchScene: pe(),
    fetchStyle: pe()
  }, a = (e == null ? void 0 : e.bgm) || {
    fetchData: pe(),
    fetchScene: pe(),
    fetchStyle: pe()
  }, l = (e == null ? void 0 : e.tryPlay) || {
    fetchData: pe(),
    featchTag: pe(),
    fetchStar: pe()
  }, i = (e == null ? void 0 : e.conversion) || {
    timeoutMilliseconds: 2e4,
    audioUpload: () => Tn(),
    transfer: () => Tn(),
    fetchSpeaker: pe()
  }, u = o, p = a, f = l;
  return u.menus ?? (u.menus = [
    { label: "默认音效", value: "" },
    { label: "自定义音效", value: "custom" },
    { label: "最近音效", value: "history" }
  ]), p.menus ?? (p.menus = [
    { label: "默认配乐", value: "" },
    { label: "自定义配乐", value: "custom" },
    { label: "最近配乐", value: "history" }
  ]), f.gender ?? (f.gender = [
    { label: "全部", value: "" },
    { label: "男声", value: "Male" },
    { label: "女声", value: "Female" }
  ]), f.topFlag ?? (f.topFlag = [
    { label: "热榜", value: "" },
    { label: "SVIP", value: "SVIP" },
    { label: "付费", value: "付费" }
  ]), f.category ?? (f.category = [
    { label: "常用", value: "常用" },
    { label: "已购", value: "已购" },
    { label: "收藏", value: "收藏" },
    { label: "我的", value: "我的" }
  ]), {
    editorConfig: t,
    handleError: n,
    pinyin: s,
    english: r,
    bgm: p,
    special: u,
    tryPlay: f,
    conversion: i
  };
}
const to = () => ({
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
}), no = () => ({
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
}), st = () => "https://img.sdaxia.top/upload/4314c841777e4d20901cd5d04a28e91a.png", de = Et("--editor-config", () => {
  const e = Y(), t = Y(), n = Q(() => e.value), s = Q(() => {
    if (t.value)
      return t.value;
    throw Error("请设置GlobalEditorConfig");
  });
  return { editor: n, globalEditConfig: s, setEditor: (a) => {
    e.value = a;
  }, setGlobalEditConfig: (a) => {
    t.value = a ?? Rs();
  } };
}), so = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-audio" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-audio" ? !tn.string(r) : n(r), s;
};
function Rn(e, t, n, s, r) {
  const o = t === void 0 ? void 0 : t.key;
  return { sel: e, data: t, children: n, text: s, elm: r, key: o };
}
const Dn = Array.isArray;
function Rt(e) {
  return typeof e == "string" || typeof e == "number" || e instanceof String || e instanceof Number;
}
function Ds(e, t, n) {
  if (e.ns = "http://www.w3.org/2000/svg", n !== "foreignObject" && t !== void 0)
    for (let s = 0; s < t.length; ++s) {
      const r = t[s];
      if (typeof r == "string")
        continue;
      const o = r.data;
      o !== void 0 && Ds(o, r.children, r.sel);
    }
}
function k(e, t, n) {
  let s = {}, r, o, a;
  if (n !== void 0 ? (t !== null && (s = t), Dn(n) ? r = n : Rt(n) ? o = n.toString() : n && n.sel && (r = [n])) : t != null && (Dn(t) ? r = t : Rt(t) ? o = t.toString() : t && t.sel ? r = [t] : s = t), r !== void 0)
    for (a = 0; a < r.length; ++a)
      Rt(r[a]) && (r[a] = Rn(void 0, void 0, void 0, r[a], void 0));
  return e[0] === "s" && e[1] === "v" && e[2] === "g" && (e.length === 3 || e[3] === "." || e[3] === "#") && Ds(s, r, e), Rn(e, s, r, o, void 0);
}
var We = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ps = "Expected a function", Pn = 0 / 0, ro = "[object Symbol]", oo = /^\s+|\s+$/g, ao = /^[-+]0x[0-9a-f]+$/i, lo = /^0b[01]+$/i, io = /^0o[0-7]+$/i, uo = parseInt, co = typeof We == "object" && We && We.Object === Object && We, fo = typeof self == "object" && self && self.Object === Object && self, po = co || fo || Function("return this")(), mo = Object.prototype, vo = mo.toString, ho = Math.max, yo = Math.min, Dt = function() {
  return po.Date.now();
};
function go(e, t, n) {
  var s, r, o, a, l, i, u = 0, p = !1, f = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(Ps);
  t = Nn(t) || 0, ht(n) && (p = !!n.leading, f = "maxWait" in n, o = f ? ho(Nn(n.maxWait) || 0, t) : o, m = "trailing" in n ? !!n.trailing : m);
  function g(D) {
    var _ = s, L = r;
    return s = r = void 0, u = D, a = e.apply(L, _), a;
  }
  function c(D) {
    return u = D, l = setTimeout($, t), p ? g(D) : a;
  }
  function d(D) {
    var _ = D - i, L = D - u, U = t - _;
    return f ? yo(U, o - L) : U;
  }
  function E(D) {
    var _ = D - i, L = D - u;
    return i === void 0 || _ >= t || _ < 0 || f && L >= o;
  }
  function $() {
    var D = Dt();
    if (E(D))
      return R(D);
    l = setTimeout($, d(D));
  }
  function R(D) {
    return l = void 0, m && s ? g(D) : (s = r = void 0, a);
  }
  function b() {
    l !== void 0 && clearTimeout(l), u = 0, s = i = r = l = void 0;
  }
  function x() {
    return l === void 0 ? a : R(Dt());
  }
  function T() {
    var D = Dt(), _ = E(D);
    if (s = arguments, r = this, i = D, _) {
      if (l === void 0)
        return c(i);
      if (f)
        return l = setTimeout($, t), g(i);
    }
    return l === void 0 && (l = setTimeout($, t)), a;
  }
  return T.cancel = b, T.flush = x, T;
}
function bo(e, t, n) {
  var s = !0, r = !0;
  if (typeof e != "function")
    throw new TypeError(Ps);
  return ht(n) && (s = "leading" in n ? !!n.leading : s, r = "trailing" in n ? !!n.trailing : r), go(e, t, {
    leading: s,
    maxWait: t,
    trailing: r
  });
}
function ht(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function _o(e) {
  return !!e && typeof e == "object";
}
function wo(e) {
  return typeof e == "symbol" || _o(e) && vo.call(e) == ro;
}
function Nn(e) {
  if (typeof e == "number")
    return e;
  if (wo(e))
    return Pn;
  if (ht(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ht(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(oo, "");
  var n = lo.test(e);
  return n || io.test(e) ? uo(e.slice(2), n ? 2 : 8) : ao.test(e) ? Pn : +e;
}
var xo = bo;
const ne = /* @__PURE__ */ rn(xo);
function Vn(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function on(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {}), Object.keys(t).forEach(function(n) {
    typeof e[n] > "u" ? e[n] = t[n] : Vn(t[n]) && Vn(e[n]) && Object.keys(t[n]).length > 0 && on(e[n], t[n]);
  });
}
var Ns = {
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
  return on(e, Ns), e;
}
var Eo = {
  document: Ns,
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
function Vs() {
  var e = typeof window < "u" ? window : {};
  return on(e, Eo), e;
}
function ko(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function Gt(e) {
  return Gt = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Gt(e);
}
function yt(e, t) {
  return yt = Object.setPrototypeOf || function(s, r) {
    return s.__proto__ = r, s;
  }, yt(e, t);
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
function dt(e, t, n) {
  return $o() ? dt = Reflect.construct : dt = function(r, o, a) {
    var l = [null];
    l.push.apply(l, o);
    var i = Function.bind.apply(r, l), u = new i();
    return a && yt(u, a.prototype), u;
  }, dt.apply(null, arguments);
}
function So(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Yt(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Yt = function(s) {
    if (s === null || !So(s))
      return s;
    if (typeof s != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(s))
        return t.get(s);
      t.set(s, r);
    }
    function r() {
      return dt(s, arguments, Gt(this).constructor);
    }
    return r.prototype = Object.create(s.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), yt(r, s);
  }, Yt(e);
}
function Co(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Oo(e) {
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
var Ae = /* @__PURE__ */ function(e) {
  ko(t, e);
  function t(n) {
    var s;
    return s = e.call.apply(e, [this].concat(n)) || this, Oo(Co(s)), s;
  }
  return t;
}(/* @__PURE__ */ Yt(Array));
function ln(e) {
  e === void 0 && (e = []);
  var t = [];
  return e.forEach(function(n) {
    Array.isArray(n) ? t.push.apply(t, ln(n)) : t.push(n);
  }), t;
}
function To(e) {
  for (var t = [], n = 0; n < e.length; n += 1)
    t.indexOf(e[n]) === -1 && t.push(e[n]);
  return t;
}
function Ro(e) {
  return e.toLowerCase().replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function Do(e, t) {
  if (typeof e != "string")
    return [e];
  for (var n = [], s = t.querySelectorAll(e), r = 0; r < s.length; r += 1)
    n.push(s[r]);
  return n;
}
function F(e, t) {
  var n = Vs(), s = an(), r = [];
  if (!t && e instanceof Ae)
    return e;
  if (!e)
    return new Ae(r);
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
      r = Do(e.trim(), t || s);
  } else if (e.nodeType || e === n || e === s)
    r.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof Ae)
      return e;
    r = e;
  }
  return new Ae(To(r));
}
F.fn = Ae.prototype;
function In() {
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
function An() {
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
function Ln(e, t) {
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
function Mn() {
  var e = this[0];
  if (e) {
    var t = {};
    if (e.dataset)
      for (var n in e.dataset)
        t[n] = e.dataset[n];
    else
      for (var s = 0; s < e.attributes.length; s += 1) {
        var r = e.attributes[s];
        r.name.indexOf("data-") >= 0 && (t[Ro(r.name.split("data-")[1])] = r.value);
      }
    for (var o in t)
      t[o] === "false" ? t[o] = !1 : t[o] === "true" ? t[o] = !0 : parseFloat(t[o]) === t[o] * 1 && (t[o] *= 1);
    return t;
  }
}
function jn(e) {
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
function Fn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = t[0], r = t[1], o = t[2], a = t[3];
  typeof t[1] == "function" && (s = t[0], o = t[1], a = t[2], r = void 0), a || (a = !1);
  function l(d) {
    var E = d.target;
    if (E) {
      var $ = d.target.dom7EventData || [];
      if ($.indexOf(d) < 0 && $.unshift(d), F(E).is(r))
        o.apply(E, $);
      else
        for (var R = F(E).parents(), b = 0; b < R.length; b += 1)
          F(R[b]).is(r) && o.apply(R[b], $);
    }
  }
  function i(d) {
    var E = d && d.target ? d.target.dom7EventData || [] : [];
    E.indexOf(d) < 0 && E.unshift(d), o.apply(this, E);
  }
  for (var u = s.split(" "), p, f = 0; f < this.length; f += 1) {
    var m = this[f];
    if (r)
      for (p = 0; p < u.length; p += 1) {
        var c = u[p];
        m.dom7LiveListeners || (m.dom7LiveListeners = {}), m.dom7LiveListeners[c] || (m.dom7LiveListeners[c] = []), m.dom7LiveListeners[c].push({
          listener: o,
          proxyListener: l
        }), m.addEventListener(c, l, a);
      }
    else
      for (p = 0; p < u.length; p += 1) {
        var g = u[p];
        m.dom7Listeners || (m.dom7Listeners = {}), m.dom7Listeners[g] || (m.dom7Listeners[g] = []), m.dom7Listeners[g].push({
          listener: o,
          proxyListener: i
        }), m.addEventListener(g, i, a);
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
    for (var u = l[i], p = 0; p < this.length; p += 1) {
      var f = this[p], m = void 0;
      if (!r && f.dom7Listeners ? m = f.dom7Listeners[u] : r && f.dom7LiveListeners && (m = f.dom7LiveListeners[u]), m && m.length)
        for (var g = m.length - 1; g >= 0; g -= 1) {
          var c = m[g];
          o && c.listener === o || o && c.listener && c.listener.dom7proxy && c.listener.dom7proxy === o ? (f.removeEventListener(u, c.proxyListener, a), m.splice(g, 1)) : o || (f.removeEventListener(u, c.proxyListener, a), m.splice(g, 1));
        }
    }
  return this;
}
function Un() {
  for (var e = 0; e < this.length; e += 1)
    this[e].style.display = "none";
  return this;
}
function Bn(e) {
  return e ? (this.forEach(function(t, n) {
    e.apply(t, [t, n]);
  }), this) : this;
}
function zn(e) {
  if (typeof e > "u")
    return this[0] ? this[0].innerHTML : null;
  for (var t = 0; t < this.length; t += 1)
    this[t].innerHTML = e;
  return this;
}
function Wn(e) {
  var t = Vs(), n = an(), s = this[0], r, o;
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
  if (e.nodeType || e instanceof Ae) {
    for (r = e.nodeType ? [e] : e, o = 0; o < r.length; o += 1)
      if (r[o] === s)
        return !0;
    return !1;
  }
  return !1;
}
function Gn() {
  for (var e, t = an(), n = 0; n < arguments.length; n += 1) {
    e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    for (var s = 0; s < this.length; s += 1)
      if (typeof e == "string") {
        var r = t.createElement("div");
        for (r.innerHTML = e; r.firstChild; )
          this[s].appendChild(r.firstChild);
      } else if (e instanceof Ae)
        for (var o = 0; o < e.length; o += 1)
          this[s].appendChild(e[o]);
      else
        this[s].appendChild(e);
  }
  return this;
}
function Yn(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var s = this[n].parentNode; s; )
      e ? F(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
  return F(t);
}
function qn(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var s = this[n].querySelectorAll(e), r = 0; r < s.length; r += 1)
      t.push(s[r]);
  return F(t);
}
function Xn(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var s = this[n].children, r = 0; r < s.length; r += 1)
      (!e || F(s[r]).is(e)) && t.push(s[r]);
  return F(t);
}
var Po = "resize scroll".split(" ");
function Is(e) {
  function t() {
    for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)
      s[r] = arguments[r];
    if (typeof s[0] > "u") {
      for (var o = 0; o < this.length; o += 1)
        Po.indexOf(e) < 0 && (e in this[o] ? this[o][e]() : F(this[o]).trigger(e));
      return this;
    }
    return this.on.apply(this, [e].concat(s));
  }
  return t;
}
var Kn = Is("click"), Jn = Is("focus");
Un && (F.fn.hide = Un);
Gn && (F.fn.append = Gn);
Kn && (F.fn.click = Kn);
Fn && (F.fn.on = Fn);
Hn && (F.fn.off = Hn);
Jn && (F.fn.focus = Jn);
Ln && (F.fn.attr = Ln);
jn && (F.fn.val = jn);
zn && (F.fn.html = zn);
Mn && (F.fn.dataset = Mn);
In && (F.fn.addClass = In);
An && (F.fn.removeClass = An);
Xn && (F.fn.children = Xn);
Bn && (F.fn.each = Bn);
qn && (F.fn.find = qn);
Wn && (F.fn.is = Wn);
Yn && (F.fn.parents = Yn);
const Sd = globalThis.Node, Cd = globalThis.Comment, Od = globalThis.Element, Td = globalThis.Text, Rd = globalThis.Range, Dd = globalThis.Selection, Pd = globalThis.StaticRange;
let No = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function Nd(e = "r") {
  return `${e}-${No()}`;
}
let Vo = class {
  constructor() {
    ee(this, "audio");
    ee(this, "src");
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
const Ye = new Vo();
function Qn(e) {
  const t = Math.floor(e / 60), n = e % 60, s = String(t).padStart(2, "0"), r = String(n).padStart(2, "0");
  return `${s}:${r}`;
}
class Io {
  constructor(t, n) {
    ee(this, "id");
    ee(this, "accept");
    ee(this, "dom");
    ee(this, "isdestroy", !1);
    ee(this, "resolve");
    ee(this, "reject");
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
class Ao {
  constructor(t) {
    ee(this, "cancelled", !1);
    ee(this, "timeoutId", null);
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
function Lo(e) {
  const { selection: t } = e;
  if (t) {
    const [n, s] = ce.edges(t), r = q.range(e, n, s), o = q.string(e, r), a = o.trimEnd();
    if (a !== o) {
      const l = o.length - a.length, i = { ...s, offset: s.offset - l }, u = { ...t, anchor: n, focus: i };
      W.select(e, u);
    }
  }
}
function Zn(e, t) {
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
function qe(e, t) {
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
const Mo = {
  type: "ssml-audio",
  renderElem: (e, t, n) => t ? jo(e, t, n) : Fo(e, n)
};
function jo(e, t, n) {
  const { remark: s, src: r } = e;
  return k("span.ssml-wrapper", [
    k("span.data-content", {
      props: { contentEditable: !1 },
      attrs: { "data-content": "{" },
      style: { color: "var(--ssml-audio)" }
    }),
    k("span", t),
    k("span.data-content", {
      props: { contentEditable: !1 },
      attrs: { "data-content": "}" },
      style: { color: "var(--ssml-audio)" }
    }),
    k(
      "span.remark",
      {
        props: { contentEditable: !1 },
        style: {
          backgroundColor: "var(--ssml-audio)"
        }
      },
      [
        k("span.iconfont.icon-roundclosefill", {
          on: {
            click: ne((o) => {
              o.preventDefault(), Ye.stop(r);
              const a = I.findPath(n, e);
              qe(n, a), W.unwrapNodes(n, { at: a });
            })
          }
        }),
        k("span.iconfont.icon-play", {
          on: {
            click: ne((o) => {
              o.preventDefault(), Ye.play(r);
            })
          }
        }),
        k("span.data-content", { attrs: { "data-content": s } })
      ]
    )
  ]);
}
function Fo(e, t) {
  const { remark: n, src: s } = e;
  return k("span.ssml-wrapper.no-line-height", [
    k(
      "span.remark.left",
      {
        props: { contentEditable: !1 },
        style: {
          backgroundColor: "var(--ssml-audio)"
        }
      },
      [
        k("span.iconfont.icon-roundclosefill", {
          on: {
            click: ne((r) => {
              r.preventDefault(), Ye.stop(s);
              const o = I.findPath(t, e);
              W.delete(t, { at: o });
            })
          }
        }),
        k("span.iconfont.icon-play", {
          on: {
            click: ne((r) => {
              r.preventDefault(), Ye.play(s);
            })
          }
        }),
        k("span.data-content", { attrs: { "data-content": n } })
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
}, Uo = {
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
}, Bo = {
  editorPlugin: so,
  renderElems: [Mo],
  elemsToHtml: [Ho],
  parseElemsHtml: [Uo]
}, zo = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-break" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-break" ? !0 : n(r), s;
}, Wo = {
  type: "ssml-break",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return k(
      "span.ssml-wrapper",
      {
        props: { contentEditable: !1 }
      },
      [
        k(
          "span.remark",
          {
            style: {
              backgroundColor: "var(--ssml-break)"
            }
          },
          [
            k("span.iconfont.icon-roundclosefill", {
              on: {
                click: ne((r) => {
                  r.preventDefault();
                  const o = I.findPath(n, e);
                  W.delete(n, { at: o });
                })
              }
            }),
            k("span.data-content", { attrs: { "data-content": s } })
          ]
        ),
        k("span.data-content", {
          attrs: { "data-content": "|" },
          style: { color: "var(--ssml-break)" }
        })
      ]
    );
  }
}, Go = {
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
}, Yo = {
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
}, qo = {
  editorPlugin: zo,
  renderElems: [Wo],
  elemsToHtml: [Go],
  parseElemsHtml: [Yo]
}, Xo = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-emphasis" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-emphasis" ? !1 : n(r), s;
}, Ko = {
  type: "ssml-emphasis",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return k("span.ssml-wrapper", [
      k("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-emphasis)" }
      }),
      k("span", t),
      k("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-emphasis)" }
      }),
      k(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-emphasis)"
          }
        },
        [
          k("span.iconfont.icon-roundclosefill", {
            on: {
              click: ne((r) => {
                r.preventDefault();
                const o = I.findPath(n, e);
                W.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, Jo = {
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
}, Qo = {
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
}, Zo = {
  editorPlugin: Xo,
  renderElems: [Ko],
  elemsToHtml: [Jo],
  parseElemsHtml: [Qo]
}, ea = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-mstts:express-as" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-mstts:express-as" ? !1 : n(r), s;
}, ta = {
  type: "ssml-mstts:express-as",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return k("span.ssml-wrapper", [
      k("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-mstts--express-as)" }
      }),
      k("span", t),
      k("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-mstts--express-as)" }
      }),
      k(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-mstts--express-as)"
          }
        },
        [
          k("span.iconfont.icon-roundclosefill", {
            on: {
              click: ne((r) => {
                r.preventDefault();
                const o = I.findPath(n, e);
                W.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, na = {
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
}, sa = {
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
}, ra = {
  editorPlugin: ea,
  renderElems: [ta],
  elemsToHtml: [na],
  parseElemsHtml: [sa]
}, oa = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-p" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-p" ? !1 : n(r), s;
}, aa = {
  type: "ssml-p",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return k("span.ssml-wrapper", [
      k("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-p)" }
      }),
      k("span", t),
      k("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-p)" }
      }),
      k(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-p)"
          }
        },
        [
          k("span.iconfont.icon-roundclosefill", {
            on: {
              click: ne((r) => {
                r.preventDefault();
                const o = I.findPath(n, e);
                W.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, la = {
  type: "ssml-p",
  elemToHtml: (e, t) => {
    const { remark: n } = e;
    return `<span
          data-w-e-type="ssml-p"
          data-w-e-is-inline
          data-ow-remark="${n}"
        >${t}</span>`;
  }
}, ia = {
  selector: 'span[data-w-e-type="ssml-p"]',
  parseElemHtml: (e, t) => ({
    type: "ssml-p",
    remark: e.getAttribute("data-ow-remark") || "",
    children: t
  })
}, ua = {
  editorPlugin: oa,
  renderElems: [aa],
  elemsToHtml: [la],
  parseElemsHtml: [ia]
}, ca = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-phoneme" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-phoneme" ? !1 : n(r), s;
}, da = {
  type: "ssml-phoneme",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return k("span.ssml-wrapper", [
      k("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-phoneme)" }
      }),
      k("span", t),
      k("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-phoneme)" }
      }),
      k(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-phoneme)"
          }
        },
        [
          k("span.iconfont.icon-roundclosefill", {
            on: {
              click: ne((r) => {
                r.preventDefault();
                const o = I.findPath(n, e);
                qe(n, o), W.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, fa = {
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
}, pa = {
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
}, ma = {
  editorPlugin: ca,
  renderElems: [da],
  elemsToHtml: [fa],
  parseElemsHtml: [pa]
}, va = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-prosody" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-prosody" ? !1 : n(r), s;
}, ha = {
  type: "ssml-prosody",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return k("span.ssml-wrapper", [
      k("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-prosody)" }
      }),
      k("span", t),
      k("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-prosody)" }
      }),
      k(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-prosody)"
          }
        },
        [
          k("span.iconfont.icon-roundclosefill", {
            on: {
              click: ne((r) => {
                r.preventDefault();
                const o = I.findPath(n, e);
                qe(n, o), W.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, ya = {
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
}, ga = {
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
}, ba = {
  editorPlugin: va,
  renderElems: [ha],
  elemsToHtml: [ya],
  parseElemsHtml: [ga]
}, _a = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-s" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-s" ? !1 : n(r), s;
}, wa = {
  type: "ssml-s",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return k("span.ssml-wrapper", [
      k("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-s)" }
      }),
      k("span", t),
      k("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-s)" }
      }),
      k(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-s)"
          }
        },
        [
          k("span.iconfont.icon-roundclosefill", {
            on: {
              click: ne((r) => {
                r.preventDefault();
                const o = I.findPath(n, e);
                W.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, xa = {
  type: "ssml-s",
  elemToHtml: (e, t) => {
    const { remark: n } = e;
    return `<span
          data-w-e-type="ssml-s"
          data-w-e-is-inline
          data-ow-remark="${n}"
        >${t}</span>`;
  }
}, Ea = {
  selector: 'span[data-w-e-type="ssml-s"]',
  parseElemHtml: (e, t) => ({
    type: "ssml-s",
    remark: e.getAttribute("data-ow-remark") || "",
    children: t
  })
}, ka = {
  editorPlugin: _a,
  renderElems: [wa],
  elemsToHtml: [xa],
  parseElemsHtml: [Ea]
}, $a = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-say-as" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-say-as" ? !1 : n(r), s;
}, Sa = {
  type: "ssml-say-as",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return k("span.ssml-wrapper", [
      k("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-say-as)" }
      }),
      k("span", t),
      k("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-say-as)" }
      }),
      k(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-say-as)"
          }
        },
        [
          k("span.iconfont.icon-roundclosefill", {
            on: {
              click: ne((r) => {
                r.preventDefault();
                const o = I.findPath(n, e);
                qe(n, o), W.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, Ca = {
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
}, Oa = {
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
}, Ta = {
  editorPlugin: $a,
  renderElems: [Sa],
  elemsToHtml: [Ca],
  parseElemsHtml: [Oa]
}, Ra = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-sub" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-sub" ? !1 : n(r), s;
}, Da = {
  type: "ssml-sub",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return k("span.ssml-wrapper", [
      k("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-sub)" }
      }),
      k("span", t),
      k("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-sub)" }
      }),
      k(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-sub)"
          }
        },
        [
          k("span.iconfont.icon-roundclosefill", {
            on: {
              click: ne((r) => {
                r.preventDefault();
                const o = I.findPath(n, e);
                qe(n, o), W.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, Pa = {
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
}, Na = {
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
}, Va = {
  editorPlugin: Ra,
  renderElems: [Da],
  elemsToHtml: [Pa],
  parseElemsHtml: [Na]
}, Ia = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-voice" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-voice" ? !1 : n(r), s;
}, Aa = {
  type: "ssml-voice",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return k("span.ssml-wrapper", [
      k("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-voice)" }
      }),
      k("span", t),
      k("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-voice)" }
      }),
      k(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-voice)"
          }
        },
        [
          k("span.iconfont.icon-roundclosefill", {
            on: {
              click: ne((r) => {
                r.preventDefault();
                const o = I.findPath(n, e);
                W.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, La = {
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
}, Ma = {
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
}, ja = {
  editorPlugin: Ia,
  renderElems: [Aa],
  elemsToHtml: [La],
  parseElemsHtml: [Ma]
}, Fa = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "custom-management" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "custom-management" ? !1 : n(r), s;
}, Ha = "wangeditor-error", Ua = "ssml-element-click", G = {
  ERROR: Ha,
  SSML_ELEMENT_CLICK: Ua
}, Ba = "emitter-error", za = "emitter-view-click", Wa = "emitter-view-keydown", Ga = "emitter-editor-created", he = { ERROR: Ba, VIEW_CLICK: za, VIEW_KEYDOWN: Wa, EDITOR_CREATED: Ga }, Ya = {
  type: "custom-management",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return k("span.ssml-wrapper", [
      k("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{{" },
        style: { color: "var(--custom-management)" }
      }),
      k("span", t),
      k("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}}" },
        style: { color: "var(--custom-management)" }
      }),
      k(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--custom-management)"
          },
          on: {
            mousedown: (r) => r.preventDefault(),
            click: ne((r) => {
              r.preventDefault(), n.select(I.findPath(n, e)), n.emit(G.SSML_ELEMENT_CLICK, n, e);
            })
          }
        },
        [
          k("span.iconfont.icon-roundclosefill", {
            on: {
              click: ne((r) => {
                r.preventDefault();
                const o = I.findPath(n, e);
                qe(n, o), W.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, qa = {
  type: "custom-management",
  elemToHtml: (e, t) => {
    const { remark: n, style: s, role: r, name: o, pitch: a, rate: l, custom: i } = e;
    return `<span
          data-w-e-type="custom-management"
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-style="${s}"
          data-ow-name="${o}"
          data-ow-role="${r}"
          data-ow-pitch="${a}"
          data-ow-rate="${l}"
          data-ow-custom="${JSON.stringify(i)}"
        >${t}</span>`;
  }
}, Xa = {
  selector: 'span[data-w-e-type="custom-management"]',
  parseElemHtml: (e, t) => {
    const n = e.getAttribute("data-ow-remark") || "", s = e.getAttribute("data-ow-name") || "", r = e.getAttribute("data-ow-role") || "", o = e.getAttribute("data-ow-style") || "", a = e.getAttribute("data-ow-pitch") || "", l = e.getAttribute("data-ow-rate") || "", i = e.getAttribute("data-ow-custom") || "{}";
    return {
      type: "custom-management",
      remark: n,
      name: s,
      role: r,
      style: o,
      pitch: a,
      rate: l,
      custom: JSON.parse(i),
      children: t
    };
  }
}, Ka = {
  editorPlugin: Fa,
  renderElems: [Ya],
  elemsToHtml: [qa],
  parseElemsHtml: [Xa]
}, Ja = (e) => {
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
  } = e, p = e;
  p.deleteBackward = (m) => {
    t(m);
  }, p.deleteForward = (m) => {
    n(m);
  }, p.insertBreak = () => {
    s();
  }, p.normalizeNode = (m) => {
    o(m);
  }, p.apply = (m) => {
    r(m);
  }, p.insertData = (m) => (m.types.includes("application/x-slate-fragment") || m.setData("text/html", m.getData("text/plain").trim()), l(m)), p.setFragmentData = (m) => {
    i(m);
    const g = m.getData("text/plain").replaceAll(/[\s]/gi, "");
    m.setData("text/plain", g);
  }, p.insertText = (m) => {
    a(m);
  };
  const f = [
    "ssml-prosody",
    "ssml-sub",
    "custom-management",
    "ssml-phoneme",
    "ssml-say-as"
  ];
  return p.insertNode = (m) => {
    const g = I.getNodeType(m);
    return f.includes(g) ? (e.selection && Zn(e, e.selection), W.insertNodes(e, m)) : g === "ssml-audio" && tn.string(m) ? (e.selection && Zn(e, e.selection), W.insertNodes(e, m)) : u(m);
  }, p;
};
const Qa = {
  install() {
    ae.registerModule(Bo), ae.registerModule(qo), ae.registerModule(Zo), ae.registerModule(ra), ae.registerModule(ua), ae.registerModule(ma), ae.registerModule(ba), ae.registerModule(ka), ae.registerModule(Ta), ae.registerModule(Va), ae.registerModule(ja), ae.registerModule(Ka), ae.registerPlugin(Ja);
  }
}, je = Et("--editor-ssml", () => {
  const e = Je({
    type: "ssml-speak",
    version: "1.0",
    xmlLang: "zh-CN",
    xmlns: "http://www.w3.org/2001/10/synthesis",
    "xmlns:mstts": "http://www.w3.org/2001/mstts",
    "xmlns:emo": "http://www.w3.org/2009/10/emotionml",
    remark: "",
    children: []
  }), t = Je({
    name: "zh-CN-XiaomoNeural",
    type: "ssml-voice",
    remark: "Xiaomo-晓墨",
    effect: "",
    children: []
  }), n = Je({
    type: "ssml-mstts:backgroundaudio",
    src: "",
    remark: "",
    children: []
  }), s = Je({
    type: "ssml-mstts:express-as",
    style: "",
    role: "",
    remark: "",
    children: []
  }), r = Je({
    type: "ssml-prosody",
    remark: "",
    children: []
  });
  return { rootSpeak: e, rootVoice: t, rootBackgroundaudio: n, rootExpressAs: s, rootProsody: r };
});
function Id() {
  return { label: "", value: "" };
}
function Za() {
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
function un() {
  return {
    word: "",
    topFlag: "",
    category: "",
    gender: "",
    tag: ""
  };
}
const cn = Et("--editor-try-play", () => {
  const e = je(), t = w(Za());
  return { speaker: Q(() => t.value), setSpeaker: (r) => {
    t.value = r, e.rootVoice.name = r.name;
  } };
}), el = () => [
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
], tl = () => [
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
function nl(e) {
  return `${(0.05 * e * 100).toFixed(0)}%`;
}
function sl(e) {
  return `${((e - 1) * 100).toFixed(0)}%`;
}
function rl() {
  return {
    category: "",
    name: "",
    role: "",
    style: "",
    speed: "1.0",
    pitch: "0"
  };
}
const As = Et("--editor-management-menu", () => ({ contentData: mt(rl()) })), ol = { class: "bar-button-icon" }, al = {
  class: "fw-normal",
  style: { "font-size": "0.85rem" }
}, ll = /* @__PURE__ */ A({
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
        const { editor: r } = de();
        r && t("click", r);
      }
    };
    return (r, o) => (O(), N("div", {
      class: ge(["bar-button px-2 py-1", { disabled: r.disabled }]),
      onClick: s,
      onMousedown: o[0] || (o[0] = re(() => {
      }, ["prevent"]))
    }, [
      h("div", ol, [
        h("span", {
          class: ge(["fs-3 iconfont-moyin", [`moyin-icon_${r.icon}`]])
        }, null, 2)
      ]),
      h("div", al, z(r.text), 1)
    ], 34));
  }
});
const fe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, se = /* @__PURE__ */ fe(ll, [["__scopeId", "data-v-2da9a7ca"]]);
const dn = /* @__PURE__ */ A({
  __name: "bar-input",
  props: {
    type: {}
  },
  emits: ["submit"],
  setup(e, { expose: t, emit: n }) {
    const s = w(""), r = w();
    function o() {
      r.value.focus();
    }
    function a() {
      n("submit", s.value), s.value = "";
    }
    return t({
      focus: o
    }), (l, i) => (O(), X(v(_t), {
      onSubmit: re(a, ["prevent"])
    }, {
      default: P(() => [
        y(v(wt), {
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
const il = /* @__PURE__ */ A({
  __name: "bar-popover",
  props: {
    visible: { type: Boolean },
    trigger: {},
    hideAfter: {},
    width: {}
  },
  emits: ["update:visible"],
  setup(e) {
    return (t, n) => (O(), X(v(Te), {
      hideAfter: t.hideAfter,
      width: t.width,
      visible: t.visible,
      trigger: t.trigger,
      "onUpdate:visible": n[0] || (n[0] = (s) => t.$emit("update:visible", s))
    }, {
      reference: P(() => [
        Oe(t.$slots, "reference")
      ]),
      default: P(() => [
        Oe(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["hideAfter", "width", "visible", "trigger"]));
  }
});
function kt(e) {
  return ds() ? (fs(e), !0) : !1;
}
function ve(e) {
  return typeof e == "function" ? e() : v(e);
}
const Ls = typeof window < "u" && typeof document < "u", ul = (e) => e != null, cl = Object.prototype.toString, dl = (e) => cl.call(e) === "[object Object]", ft = () => {
};
function fl(e, t = {}) {
  if (!Le(e))
    return Ht(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const s in e.value)
    n[s] = pr(() => ({
      get() {
        return e.value[s];
      },
      set(r) {
        var o;
        if ((o = ve(t.replaceRef)) != null ? o : !0)
          if (Array.isArray(e.value)) {
            const l = [...e.value];
            l[s] = r, e.value = l;
          } else {
            const l = { ...e.value, [s]: r };
            Object.setPrototypeOf(l, Object.getPrototypeOf(e.value)), e.value = l;
          }
        else
          e.value[s] = r;
      }
    }));
  return n;
}
function Ms(e, t = !0) {
  Jt() ? ue(e) : t ? e() : Ft(e);
}
function xe(e) {
  var t;
  const n = ve(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Pe = Ls ? window : void 0;
function Ge(...e) {
  let t, n, s, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, r] = e, t = Pe) : [t, n, s, r] = e, !t)
    return ft;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const o = [], a = () => {
    o.forEach((p) => p()), o.length = 0;
  }, l = (p, f, m, g) => (p.addEventListener(f, m, g), () => p.removeEventListener(f, m, g)), i = Z(
    () => [xe(t), ve(r)],
    ([p, f]) => {
      if (a(), !p)
        return;
      const m = dl(f) ? { ...f } : f;
      o.push(
        ...n.flatMap((g) => s.map((c) => l(p, g, c, m)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    i(), a();
  };
  return kt(u), u;
}
function pl() {
  const e = w(!1);
  return Jt() && ue(() => {
    e.value = !0;
  }), e;
}
function fn(e) {
  const t = pl();
  return Q(() => (t.value, !!e()));
}
function ml(e, t = {}) {
  const { window: n = Pe } = t, s = fn(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let r;
  const o = w(!1), a = (u) => {
    o.value = u.matches;
  }, l = () => {
    r && ("removeEventListener" in r ? r.removeEventListener("change", a) : r.removeListener(a));
  }, i = mr(() => {
    s.value && (l(), r = n.matchMedia(ve(e)), "addEventListener" in r ? r.addEventListener("change", a) : r.addListener(a), o.value = r.matches);
  });
  return kt(() => {
    i(), l(), r = void 0;
  }), o;
}
function pn(e, t = {}) {
  var n, s;
  const {
    pointerTypes: r,
    preventDefault: o,
    stopPropagation: a,
    exact: l,
    onMove: i,
    onEnd: u,
    onStart: p,
    initialValue: f,
    axis: m = "both",
    draggingElement: g = Pe,
    containerElement: c,
    handle: d = e
  } = t, E = w(
    (n = ve(f)) != null ? n : { x: 0, y: 0 }
  ), $ = w(), R = (_) => r ? r.includes(_.pointerType) : !0, b = (_) => {
    ve(o) && _.preventDefault(), ve(a) && _.stopPropagation();
  }, x = (_) => {
    var L;
    if (!R(_) || ve(l) && _.target !== ve(e))
      return;
    const S = ((L = ve(c)) != null ? L : ve(e)).getBoundingClientRect(), C = {
      x: _.clientX - S.left,
      y: _.clientY - S.top
    };
    (p == null ? void 0 : p(C, _)) !== !1 && ($.value = C, b(_));
  }, T = (_) => {
    if (!R(_) || !$.value)
      return;
    let { x: L, y: U } = E.value;
    (m === "x" || m === "both") && (L = _.clientX - $.value.x), (m === "y" || m === "both") && (U = _.clientY - $.value.y), E.value = {
      x: L,
      y: U
    }, i == null || i(E.value, _), b(_);
  }, D = (_) => {
    R(_) && $.value && ($.value = void 0, u == null || u(E.value, _), b(_));
  };
  if (Ls) {
    const _ = { capture: (s = t.capture) != null ? s : !0 };
    Ge(d, "pointerdown", x, _), Ge(g, "pointermove", T, _), Ge(g, "pointerup", D, _);
  }
  return {
    ...fl(E),
    position: E,
    isDragging: Q(() => !!$.value),
    style: Q(
      () => `left:${E.value.x}px;top:${E.value.y}px;`
    )
  };
}
function js(e, t, n = {}) {
  const { window: s = Pe, ...r } = n;
  let o;
  const a = fn(() => s && "ResizeObserver" in s), l = () => {
    o && (o.disconnect(), o = void 0);
  }, i = Q(
    () => Array.isArray(e) ? e.map((f) => xe(f)) : [xe(e)]
  ), u = Z(
    i,
    (f) => {
      if (l(), a.value && s) {
        o = new ResizeObserver(t);
        for (const m of f)
          m && o.observe(m, r);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), p = () => {
    l(), u();
  };
  return kt(p), {
    isSupported: a,
    stop: p
  };
}
function rt(e, t = {}) {
  const {
    reset: n = !0,
    windowResize: s = !0,
    windowScroll: r = !0,
    immediate: o = !0
  } = t, a = w(0), l = w(0), i = w(0), u = w(0), p = w(0), f = w(0), m = w(0), g = w(0);
  function c() {
    const d = xe(e);
    if (!d) {
      n && (a.value = 0, l.value = 0, i.value = 0, u.value = 0, p.value = 0, f.value = 0, m.value = 0, g.value = 0);
      return;
    }
    const E = d.getBoundingClientRect();
    a.value = E.height, l.value = E.bottom, i.value = E.left, u.value = E.right, p.value = E.top, f.value = E.width, m.value = E.x, g.value = E.y;
  }
  return js(e, c), Z(() => xe(e), (d) => !d && c()), r && Ge("scroll", c, { capture: !0, passive: !0 }), s && Ge("resize", c, { passive: !0 }), Ms(() => {
    o && c();
  }), {
    height: a,
    bottom: l,
    left: i,
    right: u,
    top: p,
    width: f,
    x: m,
    y: g,
    update: c
  };
}
function vl(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: s = Pe, box: r = "content-box" } = n, o = Q(() => {
    var i, u;
    return (u = (i = xe(e)) == null ? void 0 : i.namespaceURI) == null ? void 0 : u.includes("svg");
  }), a = w(t.width), l = w(t.height);
  return js(
    e,
    ([i]) => {
      const u = r === "border-box" ? i.borderBoxSize : r === "content-box" ? i.contentBoxSize : i.devicePixelContentBoxSize;
      if (s && o.value) {
        const p = xe(e);
        if (p) {
          const f = s.getComputedStyle(p);
          a.value = Number.parseFloat(f.width), l.value = Number.parseFloat(f.height);
        }
      } else if (u) {
        const p = Array.isArray(u) ? u : [u];
        a.value = p.reduce((f, { inlineSize: m }) => f + m, 0), l.value = p.reduce((f, { blockSize: m }) => f + m, 0);
      } else
        a.value = i.contentRect.width, l.value = i.contentRect.height;
    },
    n
  ), Z(
    () => xe(e),
    (i) => {
      a.value = i ? t.width : 0, l.value = i ? t.height : 0;
    }
  ), {
    width: a,
    height: l
  };
}
function hl(e, t, n = {}) {
  const {
    root: s,
    rootMargin: r = "0px",
    threshold: o = 0.1,
    window: a = Pe,
    immediate: l = !0
  } = n, i = fn(() => a && "IntersectionObserver" in a), u = Q(() => {
    const c = ve(e);
    return (Array.isArray(c) ? c : [c]).map(xe).filter(ul);
  });
  let p = ft;
  const f = w(l), m = i.value ? Z(
    () => [u.value, xe(s), f.value],
    ([c, d]) => {
      if (p(), !f.value || !c.length)
        return;
      const E = new IntersectionObserver(
        t,
        {
          root: xe(d),
          rootMargin: r,
          threshold: o
        }
      );
      c.forEach(($) => $ && E.observe($)), p = () => {
        E.disconnect(), p = ft;
      };
    },
    { immediate: l, flush: "post" }
  ) : ft, g = () => {
    p(), m(), f.value = !1;
  };
  return kt(g), {
    isSupported: i,
    isActive: f,
    pause() {
      p(), f.value = !1;
    },
    resume() {
      f.value = !0;
    },
    stop: g
  };
}
function mn(e, { window: t = Pe, scrollTarget: n } = {}) {
  const s = w(!1);
  return hl(
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
function yl(e = {}) {
  const {
    window: t = Pe,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: s = Number.POSITIVE_INFINITY,
    listenOrientation: r = !0,
    includeScrollbar: o = !0
  } = e, a = w(n), l = w(s), i = () => {
    t && (o ? (a.value = t.innerWidth, l.value = t.innerHeight) : (a.value = t.document.documentElement.clientWidth, l.value = t.document.documentElement.clientHeight));
  };
  if (i(), Ms(i), Ge("resize", i, { passive: !0 }), r) {
    const u = ml("(orientation: portrait)");
    Z(u, () => i());
  }
  return { width: a, height: l };
}
const gl = { class: "search-content w-100" }, bl = { class: "ps-2 w-75" }, _l = { class: "menu ps-2" }, wl = { class: "flex flex-row pt-1" }, xl = {
  class: "content-list overflow-x-hidden overflow-y-auto py-2",
  style: { height: "250px" }
}, El = ["onClick"], kl = /* @__PURE__ */ h("span", { class: "iconfont icon-play" }, null, -1), $l = { class: "ps-2" }, vn = /* @__PURE__ */ A({
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
    const n = e, s = w(), r = w(""), o = w(""), a = w(""), l = w(""), i = w(n.dataList || []), u = w(n.sceneList || []), p = w(n.styleList || []), f = mn(s);
    Z(f, (d) => {
      d && setTimeout(() => {
        var E;
        (E = s.value) == null || E.focus();
      }, 100);
    }), ue(async () => {
      i.value.length || await m(), u.value.length || (u.value = await n.fetchScene()), p.value.length || (p.value = await n.fetchStyle());
    });
    async function m() {
      i.value = await n.fetchData({
        word: r.value,
        menu: l.value,
        scene: o.value,
        style: a.value
      });
    }
    function g(d) {
      l.value = d, m();
    }
    function c(d) {
      t("submit", d);
    }
    return (d, E) => (O(), N("div", gl, [
      h("div", bl, [
        y(v(_t), {
          onSubmit: re(m, ["prevent"])
        }, {
          default: P(() => [
            y(v(wt), {
              ref_key: "searchInputRef",
              ref: s,
              placeholder: "搜索",
              modelValue: r.value,
              "onUpdate:modelValue": E[0] || (E[0] = ($) => r.value = $),
              "suffix-icon": v(wr)
            }, null, 8, ["modelValue", "suffix-icon"])
          ]),
          _: 1
        }, 8, ["onSubmit"])
      ]),
      h("div", _l, [
        y(v(gr), {
          mode: "horizontal",
          "default-active": d.menus.length > 0 ? d.menus[0].value : "",
          onSelect: E[1] || (E[1] = ($) => g($))
        }, {
          default: P(() => [
            (O(!0), N(J, null, oe(d.menus, ($, R) => (O(), X(v(br), {
              index: $.value,
              key: R
            }, {
              default: P(() => [
                B(z($.label), 1)
              ]),
              _: 2
            }, 1032, ["index"]))), 128))
          ]),
          _: 1
        }, 8, ["default-active"])
      ]),
      h("div", wl, [
        y(v(xn), {
          modelValue: o.value,
          "onUpdate:modelValue": E[2] || (E[2] = ($) => o.value = $),
          onChange: m,
          class: "m-1",
          size: "default"
        }, {
          default: P(() => [
            (O(!0), N(J, null, oe(u.value, ($) => (O(), X(v(En), {
              key: $.value,
              label: $.label,
              value: $.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        y(v(xn), {
          modelValue: a.value,
          "onUpdate:modelValue": E[3] || (E[3] = ($) => a.value = $),
          onChange: m,
          class: "m-1",
          size: "default"
        }, {
          default: P(() => [
            (O(!0), N(J, null, oe(p.value, ($) => (O(), X(v(En), {
              key: $.value,
              label: $.label,
              value: $.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      h("ul", xl, [
        (O(!0), N(J, null, oe(i.value, ($, R) => (O(), N("li", {
          onClick: (b) => c(ie($)),
          class: "content-list-item clickable ps-2 py-2",
          key: R
        }, [
          kl,
          h("span", $l, z($.label), 1)
        ], 8, El))), 128))
      ])
    ]));
  }
});
const Sl = {}, Cl = { class: "content" };
function Ol(e, t) {
  return O(), N("div", Cl, [
    Oe(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Fs = /* @__PURE__ */ fe(Sl, [["render", Ol], ["__scopeId", "data-v-7beae5b9"]]), Tl = {}, Rl = { class: "bar-wrapper-item" };
function Dl(e, t) {
  return O(), N("div", Rl, [
    Oe(e.$slots, "default")
  ]);
}
const Pl = /* @__PURE__ */ fe(Tl, [["render", Dl]]), Nl = { class: "bar-wrapper-group" }, Vl = { class: "group-items" }, Il = /* @__PURE__ */ A({
  __name: "bar-wrapper-group",
  props: {
    divider: {}
  },
  setup(e) {
    return (t, n) => (O(), N("div", Nl, [
      h("div", Vl, [
        Oe(t.$slots, "default", {}, void 0, !0)
      ]),
      h("div", {
        class: ge(["divider", [t.divider]])
      }, null, 2)
    ]));
  }
});
const Be = /* @__PURE__ */ fe(Il, [["__scopeId", "data-v-be31f837"]]);
function Al(e, t) {
  return `left:${e}px;top:${t}px`;
}
function hn(e, t) {
  const { width: n, height: s } = vl(e), { width: r, height: o } = yl(), a = Q(() => ({
    x: r.value - n.value,
    y: o.value - s.value
  }));
  return { style: Q(() => {
    const i = t.value.x, u = t.value.y, p = i < 5 ? 5 : i > a.value.x ? a.value.x - 5 : i, f = u < 5 ? 5 : u > a.value.y ? a.value.y - 5 : u;
    return Al(p, f);
  }) };
}
var qt = { exports: {} }, Hs = { exports: {} }, Ll = void 0, Us = function(e) {
  return e !== Ll && e !== null;
}, Ml = Us, jl = {
  object: !0,
  function: !0,
  undefined: !0
  /* document.all */
}, Fl = function(e) {
  return Ml(e) ? hasOwnProperty.call(jl, typeof e) : !1;
}, Hl = Fl, Ul = function(e) {
  if (!Hl(e))
    return !1;
  try {
    return e.constructor ? e.constructor.prototype === e : !1;
  } catch {
    return !1;
  }
}, Bl = Ul, zl = function(e) {
  if (typeof e != "function" || !hasOwnProperty.call(e, "length"))
    return !1;
  try {
    if (typeof e.length != "number" || typeof e.call != "function" || typeof e.apply != "function")
      return !1;
  } catch {
    return !1;
  }
  return !Bl(e);
}, Wl = zl, Gl = /^\s*class[\s{/}]/, Yl = Function.prototype.toString, ql = function(e) {
  return !(!Wl(e) || Gl.test(Yl.call(e)));
}, Xl = function() {
  var e = Object.assign, t;
  return typeof e != "function" ? !1 : (t = { foo: "raz" }, e(t, { bar: "dwa" }, { trzy: "trzy" }), t.foo + t.bar + t.trzy === "razdwatrzy");
}, Pt, es;
function Kl() {
  return es || (es = 1, Pt = function() {
    try {
      return Object.keys("primitive"), !0;
    } catch {
      return !1;
    }
  }), Pt;
}
var Jl = function() {
}, Ql = Jl(), yn = function(e) {
  return e !== Ql && e !== null;
}, Nt, ts;
function Zl() {
  if (ts)
    return Nt;
  ts = 1;
  var e = yn, t = Object.keys;
  return Nt = function(n) {
    return t(e(n) ? Object(n) : n);
  }, Nt;
}
var Vt, ns;
function ei() {
  return ns || (ns = 1, Vt = Kl()() ? Object.keys : Zl()), Vt;
}
var It, ss;
function ti() {
  if (ss)
    return It;
  ss = 1;
  var e = yn;
  return It = function(t) {
    if (!e(t))
      throw new TypeError("Cannot use null or undefined");
    return t;
  }, It;
}
var At, rs;
function ni() {
  if (rs)
    return At;
  rs = 1;
  var e = ei(), t = ti(), n = Math.max;
  return At = function(s, r) {
    var o, a, l = n(arguments.length, 2), i;
    for (s = Object(t(s)), i = function(u) {
      try {
        s[u] = r[u];
      } catch (p) {
        o || (o = p);
      }
    }, a = 1; a < l; ++a)
      r = arguments[a], e(r).forEach(i);
    if (o !== void 0)
      throw o;
    return s;
  }, At;
}
var si = Xl() ? Object.assign : ni(), ri = yn, oi = Array.prototype.forEach, ai = Object.create, li = function(e, t) {
  var n;
  for (n in e)
    t[n] = e[n];
}, ii = function(e) {
  var t = ai(null);
  return oi.call(arguments, function(n) {
    ri(n) && li(Object(n), t);
  }), t;
}, Lt = "razdwatrzy", ui = function() {
  return typeof Lt.contains != "function" ? !1 : Lt.contains("dwa") === !0 && Lt.contains("foo") === !1;
}, Mt, os;
function ci() {
  if (os)
    return Mt;
  os = 1;
  var e = String.prototype.indexOf;
  return Mt = function(t) {
    return e.call(this, t, arguments[1]) > -1;
  }, Mt;
}
var di = ui() ? String.prototype.contains : ci(), pt = Us, as = ql, Bs = si, zs = ii, et = di, fi = Hs.exports = function(e, t) {
  var n, s, r, o, a;
  return arguments.length < 2 || typeof e != "string" ? (o = t, t = e, e = null) : o = arguments[2], pt(e) ? (n = et.call(e, "c"), s = et.call(e, "e"), r = et.call(e, "w")) : (n = r = !0, s = !1), a = { value: t, configurable: n, enumerable: s, writable: r }, o ? Bs(zs(o), a) : a;
};
fi.gs = function(e, t, n) {
  var s, r, o, a;
  return typeof e != "string" ? (o = n, n = t, t = e, e = null) : o = arguments[3], pt(t) ? as(t) ? pt(n) ? as(n) || (o = n, n = void 0) : n = void 0 : (o = t, t = n = void 0) : t = void 0, pt(e) ? (s = et.call(e, "c"), r = et.call(e, "e")) : (s = !0, r = !1), a = { get: t, set: n, configurable: s, enumerable: r }, o ? Bs(zs(o), a) : a;
};
var pi = Hs.exports, mi = function(e) {
  if (typeof e != "function")
    throw new TypeError(e + " is not a function");
  return e;
};
(function(e, t) {
  var n = pi, s = mi, r = Function.prototype.apply, o = Function.prototype.call, a = Object.create, l = Object.defineProperty, i = Object.defineProperties, u = Object.prototype.hasOwnProperty, p = { configurable: !0, enumerable: !1, writable: !0 }, f, m, g, c, d, E, $;
  f = function(R, b) {
    var x;
    return s(b), u.call(this, "__ee__") ? x = this.__ee__ : (x = p.value = a(null), l(this, "__ee__", p), p.value = null), x[R] ? typeof x[R] == "object" ? x[R].push(b) : x[R] = [x[R], b] : x[R] = b, this;
  }, m = function(R, b) {
    var x, T;
    return s(b), T = this, f.call(this, R, x = function() {
      g.call(T, R, x), r.call(b, this, arguments);
    }), x.__eeOnceListener__ = b, this;
  }, g = function(R, b) {
    var x, T, D, _;
    if (s(b), !u.call(this, "__ee__"))
      return this;
    if (x = this.__ee__, !x[R])
      return this;
    if (T = x[R], typeof T == "object")
      for (_ = 0; D = T[_]; ++_)
        (D === b || D.__eeOnceListener__ === b) && (T.length === 2 ? x[R] = T[_ ? 0 : 1] : T.splice(_, 1));
    else
      (T === b || T.__eeOnceListener__ === b) && delete x[R];
    return this;
  }, c = function(R) {
    var b, x, T, D, _;
    if (u.call(this, "__ee__") && (D = this.__ee__[R], !!D))
      if (typeof D == "object") {
        for (x = arguments.length, _ = new Array(x - 1), b = 1; b < x; ++b)
          _[b - 1] = arguments[b];
        for (D = D.slice(), b = 0; T = D[b]; ++b)
          r.call(T, this, _);
      } else
        switch (arguments.length) {
          case 1:
            o.call(D, this);
            break;
          case 2:
            o.call(D, this, arguments[1]);
            break;
          case 3:
            o.call(D, this, arguments[1], arguments[2]);
            break;
          default:
            for (x = arguments.length, _ = new Array(x - 1), b = 1; b < x; ++b)
              _[b - 1] = arguments[b];
            r.call(D, this, _);
        }
  }, d = {
    on: f,
    once: m,
    off: g,
    emit: c
  }, E = {
    on: n(f),
    once: n(m),
    off: n(g),
    emit: n(c)
  }, $ = i({}, E), e.exports = t = function(R) {
    return R == null ? a($) : i(Object(R), E);
  }, t.methods = d;
})(qt, qt.exports);
var vi = qt.exports;
const hi = /* @__PURE__ */ rn(vi), ye = hi(), yi = { class: "w-100 d-flex flex-row align-items-center" }, Xe = /* @__PURE__ */ A({
  __name: "drag-box",
  props: {
    visible: { type: Boolean },
    initialValue: {}
  },
  emits: ["update:visible", "close"],
  setup(e, { expose: t, emit: n }) {
    const s = e, r = w(), o = w(), a = w(), { position: l } = pn(o, {
      initialValue: s.initialValue
    }), { style: i } = hn(r, l);
    function u(c) {
      l.value = c;
    }
    t({
      setPosition: u
    }), ue(() => {
      ye.on(he.VIEW_CLICK, p), document.addEventListener("keydown", g);
    }), Qt(() => {
      ye.off(he.VIEW_CLICK, p), document.removeEventListener("keydown", g);
    });
    function p(c) {
      f(c) && m();
    }
    function f(c) {
      const d = c.target;
      return !(!r.value || !a.value || a.value.contains(d) || r.value.contains(d));
    }
    function m() {
      n("update:visible", !1), n("close");
    }
    function g(c) {
      c.code === "Escape" && m();
    }
    return (c, d) => (O(), N(J, null, [
      h("div", {
        ref_key: "referenceRef",
        ref: a,
        onMousedown: d[0] || (d[0] = re(() => {
        }, ["prevent"]))
      }, [
        Oe(c.$slots, "reference")
      ], 544),
      (O(), X(ps, { to: "body" }, [
        Se(h("div", {
          ref_key: "boxRef",
          ref: r,
          class: "demotestname card shadow brag-box user-select-none z-2",
          style: bt([{ position: "fixed" }, v(i)]),
          onMousedown: d[1] || (d[1] = re(() => {
          }, ["prevent"]))
        }, [
          h("div", yi, [
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
          Oe(c.$slots, "default")
        ], 36), [
          [Ce, c.visible]
        ])
      ]))
    ], 64));
  }
}), gi = {
  install(e) {
    e.component("BarButton", se), e.component("BarInput", dn), e.component("BarPopover", il), e.component("BarSearch", vn), e.component("BarWrapper", Fs), e.component("BarWrapperItem", Pl), e.component("BarWrapperGroup", Be), e.component("DragBox", Xe);
  }
};
class be {
  constructor(t) {
    ee(this, "editor");
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
class bi extends be {
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
    if (ce.isCollapsed(t))
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
const Ws = /* @__PURE__ */ A({
  setup() {
    const {
      globalEditConfig: e
    } = de(), t = Y(), n = w([]), s = w(!1);
    function r() {
      s.value || (s.value = !0);
    }
    function o() {
      s.value && (s.value = !1);
    }
    async function a(l) {
      var u;
      if (t.value ?? (t.value = new bi(l)), (u = t.value) != null && u.isDisabled())
        return;
      const i = t.value.getValue();
      if (i ? n.value = await e.pinyin.fetchData(i) : n.value = [], n.value.length == 0)
        return l.emit(G.ERROR, "选中的字符没有不是多音字");
      r();
    }
    return () => y(Te, {
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
        onMousedown: re(() => {
        }, ["stop", "prevent"])
      }, [l]))])
    });
  }
});
class _i extends be {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t ? ce.isCollapsed(t) ? (this.editor.emit(G.ERROR, "请选择多个中文字符或者多个多个英文单词"), !0) : q.string(this.editor, t).length < 2 : !0;
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
const Gs = /* @__PURE__ */ A({
  setup() {
    const e = Y();
    function t(n) {
      e.value ?? (e.value = new _i(n)), !e.value.isDisabled() && e.value.exec();
    }
    return () => y(se, {
      text: "连读",
      icon: "continuous",
      onClick: t
    }, null);
  }
}), wi = [
  { label: "重音", value: "z" },
  { label: "拖音", value: "t" },
  { label: "重音+拖音", value: "z+t" }
], xi = {
  z: { pitch: "x-high", rate: void 0 },
  t: { pitch: void 0, rate: "medium" },
  "z+t": { pitch: "x-high", rate: "medium" }
};
class Ei extends be {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return !t || t == null ? !0 : ce.isCollapsed(t) ? (this.editor.emit(G.ERROR, "请先选择文本"), !0) : !1;
  }
  exec(t) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const n = this.getValue();
    if (n == null)
      return;
    const { pitch: s, rate: r } = xi[t.value], o = {
      type: "ssml-prosody",
      remark: t.label,
      pitch: s,
      rate: r,
      children: [{ text: n }]
    };
    this.editor.insertNode(o);
  }
}
const Ys = /* @__PURE__ */ A({
  setup() {
    const e = Y(), t = w(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    function r(o) {
      e.value ?? (e.value = new Ei(o)), !e.value.isDisabled() && n();
    }
    return () => y(Te, {
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
        onMousedown: re(() => {
        }, ["stop", "prevent"])
      }, [wi.map(({
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
        onMousedown: re(() => {
        }, ["stop", "prevent"])
      }, [o]))])
    });
  }
});
class ki extends be {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    if (!t)
      return !0;
    if (ce.isCollapsed(t))
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
const $i = [{
  value: "cardinal",
  label: "读数值"
}, {
  value: "characters",
  label: "读数字"
}, {
  value: "telephone",
  label: "读手机号"
}], qs = /* @__PURE__ */ A({
  setup() {
    const e = Y(), t = w(!1);
    function n() {
      t.value = !t.value;
    }
    function s(r) {
      e.value ?? (e.value = new ki(r)), !e.value.isDisabled() && n();
    }
    return () => y(Te, {
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
      }, [$i.map(({
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
        onMousedown: re(() => {
        }, ["stop", "prevent"])
      }, [r]))])
    });
  }
});
class Si extends be {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t == null ? !0 : ce.isCollapsed(t) ? (this.editor.emit(G.ERROR, "选中一个中文字符，并且有不能在其他语句之内"), !0) : this.getValue().length <= 0;
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
const Xs = /* @__PURE__ */ A({
  setup() {
    const e = Y(), t = w(), n = w(!1);
    function s() {
      n.value || (n.value = !0);
    }
    function r() {
      n.value && (n.value = !1);
    }
    async function o(l) {
      e.value ?? (e.value = new Si(l)), !e.value.isDisabled() && (s(), t.value.focus());
    }
    function a(l) {
      var i;
      r(), l && ((i = e.value) == null || i.exec({
        value: l,
        label: l
      }));
    }
    return () => y(Te, {
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
class Ci extends be {
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
    if (ce.isCollapsed(t))
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
const Ks = /* @__PURE__ */ A({
  setup() {
    const {
      globalEditConfig: e
    } = de(), t = Y(), n = w([]), s = w(!1);
    function r() {
      s.value || (s.value = !0);
    }
    function o() {
      s.value && (s.value = !1);
    }
    async function a(l) {
      if (t.value ?? (t.value = new Ci(l)), Lo(l), t.value.isDisabled())
        return;
      const i = t.value.getValue();
      if (i) {
        if (n.value = await e.english.fetchData(i), n.value.length <= 0)
          return l.emit(G.ERROR, "找不到单词的音标");
        r();
      }
    }
    return () => y(Te, {
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
        onMousedown: re(() => {
        }, ["stop", "prevent"])
      }, [l]))])
    });
  }
});
class Oi extends be {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t == null ? !0 : ce.isCollapsed(t) ? (this.editor.emit(G.ERROR, "请框选要变速的句子"), !0) : !1;
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
function j(e) {
  return `${((e - 1) * 100).toFixed(0)}%`;
}
const Ti = [
  { value: j(0.5), label: "0.5x" },
  { value: j(0.55), label: "0.55x" },
  { value: j(0.6), label: "0.6x" },
  { value: j(0.65), label: "0.65x" },
  { value: j(0.7), label: "0.7x" },
  { value: j(0.75), label: "0.75x" },
  { value: j(0.8), label: "0.8x" },
  { value: j(0.85), label: "0.85x" },
  { value: j(0.9), label: "0.9x" },
  { value: j(0.95), label: "0.95x" },
  { value: j(1), label: "1x" },
  { value: j(1.05), label: "1.05x" },
  { value: j(1.1), label: "1.1x" },
  { value: j(1.15), label: "1.15x" },
  { value: j(1.2), label: "1.2x" },
  { value: j(1.25), label: "1.25x" },
  { value: j(1.3), label: "1.3x" },
  { value: j(1.35), label: "1.35x" },
  { value: j(1.4), label: "1.4x" },
  { value: j(1.45), label: "1.45x" },
  { value: j(1.5), label: "1.5x" },
  { value: j(1.55), label: "1.55x" },
  { value: j(1.6), label: "1.6x" },
  { value: j(1.65), label: "1.65x" },
  { value: j(1.7), label: "1.7x" },
  { value: j(1.75), label: "1.75x" },
  { value: j(1.8), label: "1.8x" },
  { value: j(1.85), label: "1.85x" },
  { value: j(1.9), label: "1.9x" },
  { value: j(1.95), label: "1.95x" },
  { value: j(2), label: "2x" }
], Js = /* @__PURE__ */ A({
  setup() {
    const e = Y(), t = w(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    async function r(o) {
      e.value ?? (e.value = new Oi(o)), !e.value.isDisabled() && n();
    }
    return () => y(Te, {
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
      }, [Ti.map(({
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
        onMousedown: re(() => {
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
    return t ? ce.isExpanded(t) ? (this.editor.emit(G.ERROR, "不能选中文本"), !0) : !1 : !0;
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
const Di = [{
  value: "weak",
  label: "短"
}, {
  value: "medium",
  label: "中"
}, {
  value: "strong",
  label: "长"
}], Qs = /* @__PURE__ */ A({
  setup() {
    const e = Y(), t = w(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    function r(o) {
      e.value ?? (e.value = new Ri(o)), !e.value.isDisabled() && n();
    }
    return () => y(Te, {
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
      }, [Di.map(({
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
        onMousedown: re(() => {
        }, ["stop", "prevent"])
      }, [o]))])
    });
  }
});
class Pi extends be {
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
    return t ? ce.isExpanded(t) ? (this.editor.emit(G.ERROR, "不能框选文字"), !0) : !1 : !0;
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
const Zs = /* @__PURE__ */ A({
  __name: "special-menu",
  setup(e) {
    const t = w(), n = w(), s = Y(), { globalEditConfig: r } = de(), { special: o } = r, a = w(!1), { x: l, y: i, height: u } = rt(n), p = (m) => {
      s.value ?? (s.value = new Pi(m)), !s.value.isDisabled() && (t.value.setPosition({
        x: l.value - 200,
        y: i.value + u.value
      }), a.value = !0);
    };
    function f(m) {
      var g;
      (g = s.value) == null || g.restoreSelection(), s.value && !s.value.isDisabled() && s.value.exec(m), a.value = !1;
    }
    return (m, g) => (O(), X(v(Xe), {
      ref_key: "dragRef",
      ref: t,
      visible: a.value,
      "onUpdate:visible": g[0] || (g[0] = (c) => a.value = c)
    }, {
      reference: P(() => [
        y(v(se), {
          ref_key: "menuRef",
          ref: n,
          text: "音效",
          icon: "special",
          onClick: p
        }, null, 512)
      ]),
      default: P(() => [
        y(v(vn), {
          menus: v(o).menus,
          fetchScene: v(o).fetchScene,
          fetchStyle: v(o).fetchStyle,
          fetchData: v(o).fetchData,
          onSubmit: f
        }, null, 8, ["menus", "fetchScene", "fetchStyle", "fetchData"])
      ]),
      _: 1
    }, 8, ["visible"]));
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
    return t ? ce.isExpanded(t) ? (this.editor.emit(G.ERROR, "不能选中文本"), !0) : !1 : !0;
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
const Vi = [{
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
}], er = /* @__PURE__ */ A({
  setup() {
    const e = Y(), t = w(!1), n = w();
    function s() {
      t.value || (t.value = !0);
    }
    function r() {
      t.value && (t.value = !1);
    }
    function o(l) {
      e.value ?? (e.value = new Ni(l)), !e.value.isDisabled() && (s(), n.value.focus());
    }
    function a(l) {
      var i;
      r(), l && ((i = e.value) == null || i.exec({
        value: l,
        label: l
      }));
    }
    return () => y(Te, {
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
      }, [Vi.map(({
        value: l,
        label: i
      }) => y("div", {
        key: l,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => a(l),
        onMousedown: re(() => {
        }, ["stop", "prevent"])
      }, [i])), y(dn, {
        type: "text",
        ref: n,
        onSubmit: a
      }, null)])
    });
  }
}), tr = /* @__PURE__ */ A({
  __name: "bgm-menu",
  setup(e) {
    const t = w(), n = w(), s = Y(), { globalEditConfig: r } = de(), { bgm: o } = r, a = w(!1), { x: l, y: i, height: u } = rt(n), p = async (m) => {
      const g = {
        x: l.value - 300,
        y: i.value + u.value
      };
      s.value = m, t.value.setPosition(g), a.value = !0;
    };
    function f(m) {
      const { rootBackgroundaudio: g } = je();
      g.src = m.value, g.remark = m.label, a.value = !1;
    }
    return (m, g) => (O(), X(v(Xe), {
      ref_key: "dragRef",
      ref: t,
      visible: a.value,
      "onUpdate:visible": g[0] || (g[0] = (c) => a.value = c)
    }, {
      reference: P(() => [
        y(v(se), {
          ref_key: "menuRef",
          ref: n,
          text: "配乐",
          icon: "bgm",
          onClick: p
        }, null, 512)
      ]),
      default: P(() => [
        y(v(vn), {
          menus: v(o).menus,
          fetchScene: v(o).fetchScene,
          fetchStyle: v(o).fetchStyle,
          fetchData: v(o).fetchData,
          onSubmit: f
        }, null, 8, ["menus", "fetchScene", "fetchStyle", "fetchData"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), nr = /* @__PURE__ */ A({
  __name: "sensitive-menu",
  setup(e) {
    const t = w(), n = w(), s = Y(), r = w(!1), { x: o, y: a, height: l } = rt(n), i = (u) => {
      s.value = u, t.value.setPosition({
        x: o.value - 200,
        y: a.value + l.value
      }), r.value = !0;
    };
    return (u, p) => (O(), X(v(Xe), {
      ref_key: "dragRef",
      ref: t,
      visible: r.value,
      "onUpdate:visible": p[0] || (p[0] = (f) => r.value = f)
    }, {
      reference: P(() => [
        y(v(se), {
          ref_key: "menuRef",
          ref: n,
          text: "敏感词",
          icon: "sensitive",
          onClick: i
        }, null, 512)
      ]),
      default: P(() => [
        y(nr)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
const Ii = {
  class: "select-list",
  style: { width: "120px" }
}, Ai = {
  class: "text-center d-flex flex-column justify-content-center fs-6",
  style: { height: "60px" }
}, Li = ["onClick"], Mi = /* @__PURE__ */ A({
  __name: "select-list",
  props: {
    modelValue: {},
    dataList: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: n }) {
    const s = e, r = w();
    function o(l) {
      n("update:modelValue", l.value);
    }
    function a() {
      var l;
      if (r.value) {
        for (let i = 0; i < s.dataList.length; i++)
          if (s.dataList[i].value === s.modelValue) {
            (l = r.value.children[i]) == null || l.scrollIntoView({ behavior: "smooth" });
            return;
          }
      }
    }
    return t({
      scrollIntoViewTheItem: a
    }), (l, i) => (O(), N("div", Ii, [
      h("div", Ai, [
        Oe(l.$slots, "default", {}, void 0, !0)
      ]),
      h("ul", {
        ref_key: "listRef",
        ref: r,
        class: "text-center w-100 border-start border-top border-bottom border-secondary-subtle overflow-y-auto overflow-x-hidden scrollbar-none",
        style: { height: "180px" }
      }, [
        (O(!0), N(J, null, oe(l.dataList, (u, p) => (O(), N("li", {
          class: ge(["clickable select-item py-1", { activate: u.value === l.modelValue }]),
          key: p,
          onClick: (f) => o(u)
        }, z(u.label), 11, Li))), 128))
      ], 512)
    ]));
  }
});
const Ue = /* @__PURE__ */ fe(Mi, [["__scopeId", "data-v-e0f0259e"]]), ji = {
  style: { width: "600px", height: "360px" },
  class: "position-relative px-2 pb-2"
}, Fi = { class: "position-relative" }, Hi = { class: "position-absolute top-0 end-0" }, Ui = /* @__PURE__ */ h("li", null, [
  /* @__PURE__ */ h("span", { class: "text-nowrap" }, "近期使用:")
], -1), Bi = /* @__PURE__ */ h("span", { class: "my-3" }, "类型", -1), zi = /* @__PURE__ */ h("span", { class: "my-3" }, "配音师", -1), Wi = /* @__PURE__ */ h("span", { class: "my-3" }, "角色", -1), Gi = /* @__PURE__ */ h("span", { class: "my-3" }, "风格", -1), Yi = /* @__PURE__ */ h("span", { class: "my-3" }, "语速", -1), qi = /* @__PURE__ */ h("span", { class: "my-3" }, "语调", -1), Xi = { class: "position-absolute bottom-0 end-0 d-flex flex-row justify-content-end me-4 mb-3" }, Ki = /* @__PURE__ */ A({
  __name: "management-content",
  emits: ["submit"],
  setup(e, { emit: t }) {
    const { globalEditConfig: n } = de(), { tryPlay: s } = n, r = w(!1), o = w(""), a = As(), { contentData: l } = Ts(a), i = Y([]), u = w([{ label: "全部类型", value: "" }, ...s.category]), p = w([]), f = w([]), m = w([]), g = w(el()), c = w(tl());
    ue(async () => {
      l.value.category = u.value[0].value, await E();
    });
    async function d(b) {
      l.value.category = b, await E();
    }
    async function E() {
      const b = await s.fetchData({ ...un(), ...l.value });
      i.value = b, p.value = b.map((x) => ({ label: x.displayName, value: x.name })), b.length > 0 && (f.value = b[0].roles, m.value = b[0].styles, l.value.name = b[0].name), f.value.length > 0 && (l.value.role = f.value[0].value), m.value.length > 0 && (l.value.style = m.value[0].value);
    }
    function $(b) {
      const x = i.value.find((T) => T.name === b);
      x && (f.value = x.roles, m.value = x.styles, f.value.length > 0 && (l.value.role = f.value[0].value), m.value.length > 0 && (l.value.style = m.value[0].value));
    }
    function R() {
      var L, U, S, C;
      const b = ((L = p.value.find((V) => V.value === l.value.name)) == null ? void 0 : L.label) || "", x = ((U = f.value.find((V) => V.value === l.value.role)) == null ? void 0 : U.label) || "", T = ((S = m.value.find((V) => V.value === l.value.style)) == null ? void 0 : S.label) || "", D = ((C = g.value.find((V) => V.value === l.value.speed)) == null ? void 0 : C.label) || "", _ = {
        category: l.value.category,
        name: l.value.name,
        label: `${b}|${x}|${T}|${D}`,
        value: l.value.name,
        role: l.value.role,
        style: l.value.style,
        speed: sl(Number(l.value.speed)),
        pitch: nl(Number(l.value.pitch))
      };
      t("submit", _);
    }
    return (b, x) => (O(), N("div", ji, [
      y(v(_t), {
        onSubmit: re(E, ["prevent"])
      }, {
        default: P(() => [
          y(v(wt), {
            modelValue: o.value,
            "onUpdate:modelValue": x[0] || (x[0] = (T) => o.value = T),
            placeholder: "请输入名称快速查找配音师"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["onSubmit"]),
      h("div", Fi, [
        h("div", Hi, [
          y(v(le), {
            size: "small",
            icon: v(xr),
            onClick: x[1] || (x[1] = () => r.value = !r.value)
          }, null, 8, ["icon"])
        ]),
        h("ul", {
          class: ge(["d-flex flex-row row-gap-1 column-gap-2 overflow-x-hidden", { "flex-wrap": r.value }])
        }, [
          Ui,
          h("li", null, [
            y(v(Re), {
              type: "info",
              closable: ""
            }, {
              default: P(() => [
                B("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            y(v(Re), {
              type: "info",
              closable: ""
            }, {
              default: P(() => [
                B("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            y(v(Re), {
              type: "info",
              closable: ""
            }, {
              default: P(() => [
                B("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            y(v(Re), {
              type: "info",
              closable: ""
            }, {
              default: P(() => [
                B("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            y(v(Re), {
              type: "info",
              closable: ""
            }, {
              default: P(() => [
                B("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            y(v(Re), {
              type: "info",
              closable: ""
            }, {
              default: P(() => [
                B("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            y(v(Re), {
              type: "info",
              closable: ""
            }, {
              default: P(() => [
                B("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ])
        ], 2),
        Se(h("div", {
          class: ge({ "d-flex flex-row": !r.value })
        }, [
          y(Ue, {
            "onUpdate:modelValue": [
              d,
              x[2] || (x[2] = (T) => v(l).category = T)
            ],
            modelValue: v(l).category,
            dataList: u.value
          }, {
            default: P(() => [
              Bi
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          y(Ue, {
            "onUpdate:modelValue": [
              $,
              x[3] || (x[3] = (T) => v(l).name = T)
            ],
            modelValue: v(l).name,
            dataList: p.value
          }, {
            default: P(() => [
              zi
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          y(Ue, {
            modelValue: v(l).role,
            "onUpdate:modelValue": x[4] || (x[4] = (T) => v(l).role = T),
            dataList: f.value
          }, {
            default: P(() => [
              Wi
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          y(Ue, {
            modelValue: v(l).style,
            "onUpdate:modelValue": x[5] || (x[5] = (T) => v(l).style = T),
            dataList: m.value
          }, {
            default: P(() => [
              Gi
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          y(Ue, {
            modelValue: v(l).speed,
            "onUpdate:modelValue": x[6] || (x[6] = (T) => v(l).speed = T),
            dataList: g.value
          }, {
            default: P(() => [
              Yi
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          y(Ue, {
            modelValue: v(l).pitch,
            "onUpdate:modelValue": x[7] || (x[7] = (T) => v(l).pitch = T),
            dataList: c.value
          }, {
            default: P(() => [
              qi
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"])
        ], 2), [
          [Ce, !r.value]
        ])
      ]),
      h("div", Xi, [
        Se(y(v(le), {
          onClick: R,
          type: "primary"
        }, {
          default: P(() => [
            B("确定")
          ]),
          _: 1
        }, 512), [
          [Ce, !r.value]
        ]),
        Se(y(v(le), { type: "primary" }, {
          default: P(() => [
            B("全部清空")
          ]),
          _: 1
        }, 512), [
          [Ce, r.value]
        ])
      ])
    ]));
  }
});
class ls extends be {
  constructor(n) {
    super(n);
    ee(this, "contentData");
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: n } = this.editor;
    if (n == null)
      return !0;
    if (I.getSelectedNodeByType(this.editor, "custom-management"))
      return !1;
    if (ce.isCollapsed(n))
      return this.editor.emit(G.ERROR, "请框选句子"), !0;
    const [s] = q.node(this.editor, n), r = this.editor.getParentNode(s);
    return !r || !I.checkNodeType(r, "paragraph") ? (this.editor.emit(G.ERROR, "多人配音需要在最外层使用"), !0) : !1;
  }
  exec(n) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const s = this.getValue();
    if (s == null)
      return;
    const r = I.getSelectedNodeByType(this.editor, "custom-management");
    if (r)
      W.setNodes(
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
          at: I.findPath(this.editor, r)
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
const sr = /* @__PURE__ */ A({
  __name: "management-menu",
  setup(e) {
    const t = w(), n = w(), s = w(!1), r = Y(), o = As(), { contentData: a } = Ts(o), { x: l, y: i, height: u } = rt(n);
    ue(() => {
      ye.on(he.EDITOR_CREATED, (c) => {
        c.on(G.SSML_ELEMENT_CLICK, (d, E) => {
          var $;
          if (E.type === "custom-management") {
            r.value ?? (r.value = new ls(d));
            const b = (($ = E.custom) == null ? void 0 : $.contentData) || {};
            b && (a.value.category = b.category, a.value.name = b.name, a.value.pitch = b.pitch, a.value.role = b.role, a.value.speed = b.speed, a.value.style = b.style), setTimeout(() => {
              p();
            }, 200);
          }
        });
      });
    });
    function p() {
      var d;
      const c = {
        x: l.value - 200,
        y: i.value + u.value
      };
      (d = t.value) == null || d.setPosition(c), s.value = !0;
    }
    function f() {
      s.value = !1;
    }
    function m(c) {
      r.value ?? (r.value = new ls(c)), !r.value.isDisabled() && p();
    }
    function g(c) {
      var d;
      r.value && !r.value.isDisabled() && (r.value.contentData = { ...a.value }, (d = r.value) == null || d.exec(c)), f();
    }
    return (c, d) => (O(), X(v(Xe), {
      ref_key: "dragRef",
      ref: t,
      visible: s.value,
      "onUpdate:visible": d[0] || (d[0] = (E) => s.value = E)
    }, {
      reference: P(() => [
        y(v(se), {
          ref_key: "menuRef",
          ref: n,
          text: "多人配音",
          icon: "management",
          onClick: m
        }, null, 512)
      ]),
      default: P(() => [
        y(Ki, { onSubmit: g })
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Ji = { class: "speaker-head" }, Qi = ["src"], Zi = { class: "speaker-name" }, eu = /* @__PURE__ */ A({
  __name: "speaker-item",
  props: {
    label: {},
    value: {},
    avatar: {},
    activated: { type: Boolean }
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => (O(), N("div", {
      class: "speaker-item",
      onClick: n[0] || (n[0] = (s) => t.$emit("click", t.value || ""))
    }, [
      h("div", Ji, [
        h("img", {
          src: t.avatar || v(st)(),
          class: ge([{ "border border-warning": t.activated }, "rounded-circle"]),
          style: { height: "40px" }
        }, null, 10, Qi)
      ]),
      h("div", Zi, z(t.label), 1)
    ]));
  }
});
const tu = /* @__PURE__ */ fe(eu, [["__scopeId", "data-v-b043c1a6"]]);
class nu {
  constructor() {
    ee(this, "mediaRecorder", null);
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
class su {
  constructor() {
    ee(this, "audio");
    ee(this, "isPlaying", w(!1));
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
    return Q(() => this.isPlaying.value ? "playing" : "paused");
  }
}
const ru = { class: "d-flex flex-row justify-content-between border rounded-pill border-secondary my-3 py-1 px-2" }, ou = {
  class: "text-secondary d-flex flex-row align-items-center",
  style: { "font-size": "0.5rem" }
}, au = {
  key: 0,
  class: "iconfont icon-pause"
}, lu = {
  key: 1,
  class: "iconfont icon-play"
}, iu = /* @__PURE__ */ h("span", { class: "iconfont icon-delete" }, null, -1), uu = [
  iu
], cu = {
  key: 1,
  style: { "font-size": "0.5rem" }
}, du = /* @__PURE__ */ h("p", null, "选择需要转换的配音师", -1), fu = {
  class: "speakers-container border rounded d-flex flex-row flex-wrap row-gap-1 column-gap-2 overflow-y-auto overflow-x-hidden",
  style: { height: "150px" }
}, pu = ["disabled"], mu = /* @__PURE__ */ A({
  __name: "audio-upload",
  emits: ["submit"],
  setup(e, { expose: t, emit: n }) {
    const { globalEditConfig: s } = de(), { audioUpload: r, transfer: o, fetchSpeaker: a, timeoutMilliseconds: l } = s.conversion, i = w(), u = w(), p = w(), f = w(!0), m = w([]), g = w(), c = Y(), d = Y(), E = new su(), $ = E.playState;
    let R;
    const b = new nu(), x = new Io("audio-conversion", "audio/*"), T = Q(() => b.state), D = mn(i), _ = cs("reopen");
    Z(D, (M) => {
      M || L();
    }), ue(async () => {
      m.value = await a();
    }), Z(D, (M) => {
      M || (f.value = !0, R == null || R.cancel());
    }), t({
      openInputFile: H
    });
    function L() {
      f.value = !0, U();
    }
    function U() {
      E.pause(), u.value = void 0, p.value = void 0, g.value = void 0, c.value = void 0, d.value = void 0, R == null || R.cancel();
    }
    function S() {
      b.stop();
    }
    async function C() {
      try {
        c.value = await b.start();
      } catch (M) {
        ye.emit(he.ERROR, `${M}`, M);
      }
    }
    function V() {
      if ($.value === "playing")
        E.pause();
      else if (c.value) {
        const M = window.URL.createObjectURL(c.value);
        E.load(M), E.play();
      } else if (d.value) {
        const M = window.URL.createObjectURL(d.value);
        E.load(M), E.play();
      }
    }
    async function H() {
      try {
        return d.value = await x.open(), f.value = !1, !0;
      } catch {
        return !1;
      }
    }
    async function _e() {
      try {
        if (R = new Ao(l), f.value && c.value)
          R.startTimeout(), u.value = await r(c.value, R.token);
        else if (!f.value && d.value)
          R.startTimeout(), u.value = await r(d.value, R.token);
        else
          throw new Error("请选则文件或实时录音");
      } catch (M) {
        ye.emit(he.ERROR, `${M}`, M);
      }
    }
    async function $t(M) {
      try {
        u.value ? (g.value = M, p.value = await o({ audioId: u.value.id, speakerId: M.id })) : ye.emit(he.ERROR, "请先上传音频文件");
      } catch (Ct) {
        ye.emit(he.ERROR, `${Ct}`, Ct);
      }
    }
    function St() {
      p.value && g.value && (n("submit", { label: g.value.displayName, value: p.value.src }), L());
    }
    function Ne() {
      R == null || R.cancel(), _ == null || _();
    }
    return (M, Ct) => {
      var bn, _n;
      return O(), N("div", {
        class: "audio-upload",
        ref_key: "boxRef",
        ref: i
      }, [
        h("div", ru, [
          h("div", ou, [
            c.value || d.value ? (O(), N("button", {
              key: 0,
              onClick: V,
              class: "btn btn-sm rounded-pill"
            }, [
              v($) === "playing" ? (O(), N("span", au)) : (O(), N("span", lu))
            ])) : Ee("", !0),
            h("span", null, z(((bn = d.value) == null ? void 0 : bn.name) || ((_n = c.value) == null ? void 0 : _n.name)), 1)
          ]),
          h("div", null, [
            !u.value && (c.value || d.value) ? (O(), N("button", {
              key: 0,
              onClick: U,
              class: "btn btn-sm rounded-pill"
            }, uu)) : Ee("", !0),
            u.value ? (O(), N("span", cu, "已上传")) : Ee("", !0),
            f.value ? (O(), N(J, { key: 2 }, [
              T.value === "recording" ? (O(), N("button", {
                key: 0,
                onClick: S,
                class: "btn btn-primary btn-sm rounded-pill"
              }, " 结束录音 ")) : (O(), N("button", {
                key: 1,
                onClick: C,
                class: "btn btn-primary btn-sm rounded-pill"
              }, " 开始录音 "))
            ], 64)) : Ee("", !0),
            !f.value && !d.value ? (O(), N("button", {
              key: 3,
              onClick: H,
              class: "btn btn-primary btn-sm rounded-pill"
            }, " 选择文件 ")) : Ee("", !0),
            u.value ? (O(), N("button", {
              key: 4,
              onClick: Ne,
              class: "btn btn-primary btn-sm rounded-pill"
            }, " 重传音频 ")) : Ee("", !0),
            !u.value && (d.value || c.value) ? (O(), N("button", {
              key: 5,
              onClick: _e,
              class: "btn btn-primary btn-sm rounded-pill"
            }, " 上传音频 ")) : Ee("", !0)
          ])
        ]),
        h("div", null, [
          du,
          h("div", fu, [
            (O(!0), N(J, null, oe(m.value, (ot, ur) => {
              var wn;
              return O(), X(tu, {
                onClick: (_d) => $t(ot),
                key: ur,
                label: ot.displayName,
                avatar: ot.avatar,
                activated: ot.name === ((wn = g.value) == null ? void 0 : wn.name)
              }, null, 8, ["onClick", "label", "avatar", "activated"]);
            }), 128))
          ])
        ]),
        h("button", {
          class: "btn btn-primary mt-1",
          onClick: St,
          disabled: !p.value
        }, " 完成录音并上传完成后，可选择配音师转换 ", 8, pu)
      ], 512);
    };
  }
}), vu = {
  class: "fw-bold",
  style: { "font-size": "0.5rem" }
}, hu = /* @__PURE__ */ h("p", { class: "text-start text-danger" }, "请在安静的环境中进行录音，以需要转换的风格，读出以下文案", -1), yu = {
  class: "border border-secondary rounded p-2 w-100",
  style: { height: "100px" }
}, gu = { class: "mt-2" }, bu = /* @__PURE__ */ h("p", {
  class: "mt-2 text-secondary",
  style: { "font-size": "0.5rem" }
}, " 录音内容需要和滑选一致，音频限制60秒，滑选文案限制60个字 ", -1), _u = /* @__PURE__ */ A({
  __name: "conversion-content",
  props: {
    text: {}
  },
  emits: ["submit"],
  setup(e) {
    const t = w(), n = w(), s = w(!0), r = w(!1), o = mn(t);
    vr("reopen", () => {
      s.value = !0, r.value = !1;
    }), Z(o, (i) => {
      i || (s.value = !0, r.value = !1);
    });
    function a() {
      s.value = !0, r.value = !0;
    }
    async function l() {
      var i;
      await ((i = n.value) == null ? void 0 : i.openInputFile()) && (s.value = !1, r.value = !0);
    }
    return (i, u) => (O(), N("div", {
      ref_key: "boxRef",
      ref: t,
      class: "px-2 py-1",
      style: { width: "410px" }
    }, [
      Se(h("section", vu, [
        hu,
        h("div", yu, z(i.text), 1)
      ], 512), [
        [Ce, s.value]
      ]),
      Se(h("section", gu, [
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
        bu
      ], 512), [
        [Ce, !r.value]
      ]),
      Se(h("section", null, [
        y(mu, {
          ref_key: "audioUploadRef",
          ref: n,
          onSubmit: u[0] || (u[0] = (p) => i.$emit("submit", p))
        }, null, 512)
      ], 512), [
        [Ce, r.value]
      ])
    ], 512));
  }
});
class wu extends be {
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
    return t == null ? !0 : ce.isCollapsed(t) ? (this.editor.emit(G.ERROR, "请框选要变音的句子"), !0) : !1;
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
const rr = /* @__PURE__ */ A({
  __name: "conversion-menu",
  setup(e) {
    const t = w(), n = w(), s = Y(), r = Y(), o = w(!1), a = w(""), { x: l, y: i, height: u } = rt(n), p = (m) => {
      if (r.value ?? (r.value = new wu(m)), r.value.isDisabled())
        return;
      a.value = r.value.getValue();
      const g = {
        x: l.value - 200,
        y: i.value + u.value
      };
      s.value = m, t.value.setPosition(g), o.value = !0;
    };
    function f(m) {
      var g;
      (g = r.value) == null || g.exec(m), o.value = !1;
    }
    return (m, g) => (O(), X(v(Xe), {
      ref_key: "dragRef",
      ref: t,
      visible: o.value,
      "onUpdate:visible": g[0] || (g[0] = (c) => o.value = c)
    }, {
      reference: P(() => [
        y(v(se), {
          ref_key: "menuRef",
          ref: n,
          text: "局部变音",
          icon: "conversion",
          onClick: p
        }, null, 512)
      ]),
      default: P(() => [
        y(_u, {
          text: a.value,
          onSubmit: f
        }, null, 8, ["text"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), xu = { class: "anchor-avatar d-flex flex-column justify-content-center align-items-center" }, Eu = ["src"], ku = { class: "anchor-avatar-name text-white" }, $u = /* @__PURE__ */ A({
  __name: "try-play-circle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = w(), s = w(0), r = w(0), o = cn(), { position: a } = pn(n, {
      initialValue: { x: window.innerWidth - 15, y: window.innerHeight / 2 - 15 },
      onStart: (f, m) => p(m.clientX, m.clientY) ? !1 : void 0
    }), { style: l } = hn(n, a);
    function i(f) {
      p(f.clientX, f.clientY) && t("update:visible", !1);
    }
    function u(f) {
      s.value = f.clientX, r.value = f.clientY;
    }
    function p(f, m) {
      return f > s.value - 10 && f < s.value + 10 && m > r.value - 10 && m < r.value + 10;
    }
    return (f, m) => Se((O(), N("div", {
      ref_key: "boxRef",
      ref: n,
      class: "try-play-circel user-select-none rounded-circle overflow-hidden",
      style: bt([v(l), { position: "fixed" }]),
      onMousedown: u,
      onMouseup: i
    }, [
      h("div", xu, [
        h("img", {
          src: v(o).speaker.avatar || v(st)(),
          class: "rounded-circle"
        }, null, 8, Eu),
        h("div", ku, z(v(o).speaker.displayName), 1)
      ])
    ], 36)), [
      [Ce, f.visible]
    ]);
  }
});
const Su = /* @__PURE__ */ fe($u, [["__scopeId", "data-v-daadb844"]]), Cu = {
  key: 0,
  class: "position-absolute top-0 start-100 translate-middle text-bg-danger text-nowrap rounded px-1",
  style: { "font-size": "0.5rem" }
}, Ou = ["src"], Tu = { class: "anchor-avatar-name text-white" }, Ru = /* @__PURE__ */ A({
  __name: "anchor-avatar",
  props: {
    activate: { type: Boolean },
    data: {}
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => {
      var s, r, o;
      return O(), N("div", {
        class: "anchor-avatar d-flex flex-column align-items-center text-center justify-content-center position-relative",
        onClick: n[0] || (n[0] = (a) => {
          var l;
          return t.$emit("click", (l = t.data) == null ? void 0 : l.value);
        })
      }, [
        (s = t.data) != null && s.isFree ? Ee("", !0) : (O(), N("span", Cu, "付费")),
        h("img", {
          src: ((r = t.data) == null ? void 0 : r.src) ?? v(st)(),
          class: ge(["rounded-circle", { "border border-2 border-warning": t.activate }]),
          style: { height: "40px" }
        }, null, 10, Ou),
        h("div", Tu, z((o = t.data) == null ? void 0 : o.label), 1)
      ]);
    };
  }
});
const or = /* @__PURE__ */ fe(Ru, [["__scopeId", "data-v-845325c9"]]), Du = {
  style: { height: "170px" },
  class: "w-100 d-flex flex-row flex-wrap justify-content-start overflow-x-hidden overflow-y-auto scrollbar-none"
}, Pu = /* @__PURE__ */ A({
  __name: "anchor-list",
  props: {
    filter: {}
  },
  setup(e) {
    const t = e, { globalEditConfig: n } = de(), { fetchData: s } = n.tryPlay, r = cn(), o = w([]), a = Y([]);
    Z(
      () => t.filter,
      async (i) => {
        const u = await s(ie(i));
        a.value = u, o.value = u.map((p) => ({ label: p.displayName, value: p.name }));
      }
    );
    function l(i) {
      const u = a.value.find((p) => p.name === i);
      u && r.setSpeaker(u);
    }
    return ue(async () => {
      const i = await s(ie(t.filter));
      a.value = i, o.value = i.map((u) => ({ label: u.displayName, value: u.name })), o.value.length > 0 && l(o.value[0].value);
    }), (i, u) => (O(), N("div", Du, [
      (O(!0), N(J, null, oe(o.value, (p, f) => (O(), N("div", {
        class: "m-3",
        key: f
      }, [
        y(or, {
          data: p,
          activate: p.value === v(r).speaker.name,
          onClick: (m) => l(p.value)
        }, null, 8, ["data", "activate", "onClick"])
      ]))), 128))
    ]));
  }
}), jt = /* @__PURE__ */ A({
  __name: "tag-item",
  props: {
    activate: { type: Boolean },
    value: {}
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => (O(), N("span", {
      class: ge(["tag-item d-inline-block text-white text-center text-nowrap text-truncate", { "border border-white rounded-pill": t.activate }]),
      onClick: n[0] || (n[0] = (s) => t.$emit("click", t.value)),
      style: { height: "20px", "min-width": "60px", "max-width": "160px", "font-size": "0.5rem", cursor: "pointer" }
    }, [
      Oe(t.$slots, "default")
    ], 2));
  }
}), Nu = { class: "tag-list w-100" }, Vu = {
  class: "w-100 d-flex flex-row border-bottom border-secondary align-items-center",
  style: { height: "40px" }
}, Iu = {
  class: "w-100 d-flex flex-row border-bottom border-secondary align-items-center",
  style: { height: "40px" }
}, Au = {
  style: { height: "100px" },
  class: "w-100 pt-2 d-flex flex-row flex-wrap align-content-start row-gap-2 overflow-y-auto overflow-x-hidden scrollbar-none"
}, Lu = /* @__PURE__ */ A({
  __name: "tag-list",
  props: {
    filter: {}
  },
  emits: ["update:filter"],
  setup(e, { emit: t }) {
    const n = e, { globalEditConfig: s } = de(), { topFlag: r, gender: o, featchTag: a } = s.tryPlay, l = w([]);
    ue(async () => {
      l.value = await a();
    });
    function i(f) {
      t("update:filter", { ...ie(n.filter), topFlag: f });
    }
    function u(f) {
      t("update:filter", { ...ie(n.filter), gender: f });
    }
    function p(f) {
      t("update:filter", { ...ie(n.filter), tag: f });
    }
    return (f, m) => (O(), N("div", Nu, [
      h("div", Vu, [
        (O(!0), N(J, null, oe(v(r), (g, c) => (O(), X(jt, {
          onClick: i,
          key: c,
          value: g.value,
          activate: f.filter.topFlag === g.value
        }, {
          default: P(() => [
            B(z(g.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "activate"]))), 128))
      ]),
      h("div", Iu, [
        (O(!0), N(J, null, oe(v(o), (g, c) => (O(), X(jt, {
          onClick: u,
          key: c,
          value: g.value,
          activate: f.filter.gender === g.value
        }, {
          default: P(() => [
            B(z(g.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "activate"]))), 128))
      ]),
      h("div", Au, [
        (O(!0), N(J, null, oe(l.value, (g, c) => (O(), X(jt, {
          onClick: p,
          key: c,
          value: g.value,
          activate: f.filter.tag === g.value
        }, {
          default: P(() => [
            B(z(g.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "activate"]))), 128))
      ])
    ]));
  }
});
const Mu = ["src"], ju = {
  class: "anchor-avatar-name text-white",
  style: { "font-size": "0.5rem" }
}, Fu = /* @__PURE__ */ A({
  __name: "style-avatar",
  props: {
    activate: { type: Boolean },
    data: {}
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => {
      var s, r;
      return O(), N("div", {
        class: "anchor-avatar d-flex flex-column align-items-center text-center justify-content-center position-relative",
        onClick: n[0] || (n[0] = (o) => {
          var a;
          return t.$emit("click", (a = t.data) == null ? void 0 : a.value);
        })
      }, [
        h("img", {
          src: ((s = t.data) == null ? void 0 : s.src) || v(st)(),
          class: ge(["rounded-circle", { "border border-2 border-warning": t.activate }]),
          style: { height: "30px" }
        }, null, 10, Mu),
        h("div", ju, z((r = t.data) == null ? void 0 : r.label), 1)
      ]);
    };
  }
});
const Hu = /* @__PURE__ */ fe(Fu, [["__scopeId", "data-v-71aedb65"]]);
function Uu(e) {
  return `${(0.05 * e * 100).toFixed(0)}%`;
}
function Bu(e) {
  return `${((e - 1) * 100).toFixed(0)}%`;
}
const gn = (e) => (Zt("data-v-0210af00"), e = e(), en(), e), zu = {
  class: "slider-panle w-100 px-3 text-white",
  style: { "font-size": "0.5rem" }
}, Wu = { class: "mt-2 d-flex text-center justify-content-between align-items-center" }, Gu = { class: "me-auto d-flex flex-row align-items-center" }, Yu = ["src"], qu = {
  class: "ms-2 d-flex flex-column justify-content-between",
  style: { height: "50px" }
}, Xu = { class: "d-flex dlex-row column-gap-2 align-items-end" }, Ku = { class: "fs-6" }, Ju = { style: { "font-size": "0.5rem" } }, Qu = { class: "d-flex flex-row column-gap-2 align-items-center" }, Zu = {
  key: 0,
  class: "badge text-bg-primary px-2"
}, ec = { class: "d-flex flex-column align-items-end" }, tc = /* @__PURE__ */ gn(() => /* @__PURE__ */ h("div", { class: "text-info" }, "音频时长，请以生成后的为准", -1)), nc = { class: "mt-1" }, sc = /* @__PURE__ */ gn(() => /* @__PURE__ */ h("span", null, "/", -1)), rc = { class: "role-list mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-2 column-gap-3" }, oc = ["onClick"], ac = { class: "audio-mood mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-1 column-gap-2" }, lc = ["onClick"], ic = /* @__PURE__ */ gn(() => /* @__PURE__ */ h("div", { class: "my-3" }, [
  /* @__PURE__ */ h("span", { class: "border rounded-pill p-1" }, "配音师详情")
], -1)), uc = { class: "slider-box" }, cc = { class: "slider-box" }, dc = { class: "d-flex flex-row gap-3 my-3" }, fc = ["onClick"], pc = {
  class: "d-flex flex-row flex-wrap row-gap-2 column-gap-3 mb-3",
  style: { "min-height": "100px" }
}, mc = ["onClick"], vc = /* @__PURE__ */ A({
  __name: "slider-panle",
  setup(e) {
    const { globalEditConfig: t } = de(), { rootProsody: n, rootExpressAs: s } = je(), { fetchStar: r, category: o, fetchData: a } = t.tryPlay, l = cn(), i = w(l.speaker.isStar), u = w(10), p = w(0), f = w([0, 2]), m = w(1), g = w([-10, 10]), c = w(0), d = Q(() => Qn(u.value)), E = Q(() => Qn(p.value)), $ = mt(to()), R = mt(no()), b = w(""), x = w([]);
    ue(async () => {
      await L(o[0].value);
    }), Z(
      () => l.speaker,
      (S) => {
        S.roles.length > 0 && D(S.roles[0].value), S.styles.length > 0 && _(S.styles[0].value);
      },
      { immediate: !0 }
    ), Z(
      c,
      (S) => {
        n.pitch = Uu(S);
      },
      { immediate: !0 }
    ), Z(
      m,
      (S) => {
        n.rate = Bu(S);
      },
      { immediate: !0 }
    );
    async function T() {
      i.value = await r(l.speaker.name, !i.value);
    }
    function D(S) {
      s.role = S;
    }
    function _(S) {
      s.style = S;
    }
    async function L(S) {
      b.value = S;
      try {
        x.value = await a({ ...un(), category: S });
      } catch (C) {
        ye.emit(he.ERROR, `${C}`, C);
      }
    }
    function U(S) {
      l.setSpeaker(ie(S));
    }
    return (S, C) => (O(), N("div", zu, [
      h("div", Wu, [
        h("div", Gu, [
          h("img", {
            src: v(st)(),
            class: "rounded-circle",
            style: { height: "50px" }
          }, null, 8, Yu),
          h("div", qu, [
            h("div", Xu, [
              h("span", Ku, z(v(l).speaker.displayName), 1),
              h("span", Ju, z(m.value) + "x", 1)
            ]),
            h("div", Qu, [
              y(v(ms), {
                onClick: T,
                class: "fs-6",
                style: bt({ color: i.value ? "red" : "white" })
              }, {
                default: P(() => [
                  i.value ? (O(), X(v(Er), { key: 0 })) : (O(), X(v(kr), { key: 1 }))
                ]),
                _: 1
              }, 8, ["style"]),
              v(l).speaker.isSupper24K ? (O(), N("span", Zu, " 24K ")) : Ee("", !0)
            ])
          ])
        ]),
        h("div", ec, [
          tc,
          h("div", nc, [
            h("span", null, z(E.value), 1),
            sc,
            h("span", null, z(d.value), 1)
          ]),
          y(v(Ot), {
            max: u.value,
            modelValue: p.value,
            "onUpdate:modelValue": C[0] || (C[0] = (V) => p.value = V),
            size: "small"
          }, null, 8, ["max", "modelValue"])
        ])
      ]),
      h("div", rc, [
        (O(!0), N(J, null, oe(v(l).speaker.roles, (V, H) => (O(), N("div", {
          onClick: (_e) => D(V.value),
          key: H,
          class: ge(["rounded-pill px-1", { border: V.value === (v(s).role || "") }])
        }, z(V.label), 11, oc))), 128))
      ]),
      h("ul", ac, [
        (O(!0), N(J, null, oe(v(l).speaker.styles, (V, H) => (O(), N("li", {
          class: "mx-2",
          onClick: (_e) => _(V.value),
          key: H
        }, [
          y(Hu, {
            activate: V.value === (v(s).style || ""),
            data: V
          }, null, 8, ["activate", "data"])
        ], 8, lc))), 128))
      ]),
      ic,
      h("div", uc, [
        h("div", null, [
          h("span", null, "语速：" + z(m.value) + "x", 1)
        ]),
        y(v(Ot), {
          modelValue: m.value,
          "onUpdate:modelValue": C[1] || (C[1] = (V) => m.value = V),
          min: f.value[0],
          max: f.value[1],
          step: 0.05,
          marks: $
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      h("div", cc, [
        h("div", null, [
          h("span", null, "语调：" + z(c.value), 1)
        ]),
        y(v(Ot), {
          modelValue: c.value,
          "onUpdate:modelValue": C[2] || (C[2] = (V) => c.value = V),
          min: g.value[0],
          max: g.value[1],
          step: 0.2,
          marks: R
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      h("div", null, [
        h("ul", dc, [
          (O(!0), N(J, null, oe(v(o), (V, H) => (O(), N("li", {
            onClick: (_e) => L(V.value),
            key: H,
            class: ge(["rounded-pill px-1", { border: V.value === b.value }])
          }, z(V.label), 11, fc))), 128))
        ]),
        h("ul", pc, [
          (O(!0), N(J, null, oe(x.value, (V, H) => (O(), N("li", {
            onClick: (_e) => U(V),
            key: H
          }, [
            y(or, {
              activate: V.name === v(l).speaker.name,
              data: { ...V, label: V.displayName, value: V.name }
            }, null, 8, ["activate", "data"])
          ], 8, mc))), 128))
        ])
      ])
    ]));
  }
});
const hc = /* @__PURE__ */ fe(vc, [["__scopeId", "data-v-0210af00"]]), yc = (e) => (Zt("data-v-f0208c5e"), e = e(), en(), e), gc = { class: "box ms-2" }, bc = { class: "try-play-header text-center d-flex flex-row justify-content-between" }, _c = { class: "try-play-body d-flex flex-row" }, wc = { class: "try-play-left w-50 border-right border-secondary" }, xc = { class: "pe-1" }, Ec = /* @__PURE__ */ yc(() => /* @__PURE__ */ h("div", { class: "py-1 border-top border-secondary" }, null, -1)), kc = { class: "try-play-right w-50 border-start rounded border-top border-secondary overflow-x-hidden overflow-y-auto scrollbar-none" }, $c = /* @__PURE__ */ A({
  __name: "try-play-panle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = e, s = w(), r = w(""), o = w(), a = w(), l = w(un());
    ue(() => {
      window.addEventListener("keydown", i);
    }), Qt(() => {
      window.addEventListener("keydown", i);
    }), Z(
      () => n.visible,
      (c) => {
        c && setTimeout(() => {
          m();
        }, 200);
      }
    );
    function i(c) {
      c.code === "Escape" && n.visible && f();
    }
    const { position: u } = pn(a, {
      initialValue: { x: 40, y: 40 }
    }), { style: p } = hn(o, u);
    ue(() => {
      u.value.x = (window.innerWidth - 890) / 2, u.value.y = (window.innerHeight - 390) / 2;
    });
    function f() {
      t("update:visible", !1);
    }
    function m() {
      var c;
      (c = s.value) == null || c.focus();
    }
    function g() {
      l.value = { ...l.value, word: r.value };
    }
    return (c, d) => Se((O(), N("div", {
      ref_key: "boxRef",
      ref: o,
      style: bt([v(p), { position: "fixed" }]),
      class: "try-play user-select-none card z-3 shadow"
    }, [
      h("div", gc, [
        h("div", bc, [
          h("div", {
            ref_key: "handleRef",
            ref: a,
            class: "col-11 try-play-move"
          }, null, 512),
          h("div", {
            onClick: f,
            class: "col-1 try-play-menu-close"
          }, [
            y(v(ms), { color: "white" }, {
              default: P(() => [
                y(v($r))
              ]),
              _: 1
            })
          ])
        ]),
        h("div", _c, [
          h("div", wc, [
            h("div", xc, [
              y(v(_t), {
                onSubmit: re(g, ["prevent"])
              }, {
                default: P(() => [
                  y(v(wt), {
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
            y(Lu, {
              filter: l.value,
              "onUpdate:filter": d[1] || (d[1] = (E) => l.value = E)
            }, null, 8, ["filter"]),
            Ec,
            y(Pu, { filter: l.value }, null, 8, ["filter"])
          ]),
          h("div", kc, [
            y(hc)
          ])
        ])
      ])
    ], 4)), [
      [Ce, c.visible]
    ]);
  }
});
const Sc = /* @__PURE__ */ fe($c, [["__scopeId", "data-v-f0208c5e"]]), ar = /* @__PURE__ */ A({
  __name: "try-play",
  setup(e) {
    const t = w(!0);
    function n(s) {
      s || (t.value = !0);
    }
    return (s, r) => (O(), X(ps, { to: "body" }, [
      y(Su, {
        visible: t.value,
        "onUpdate:visible": r[0] || (r[0] = (o) => t.value = o)
      }, null, 8, ["visible"]),
      y(Sc, {
        visible: !t.value,
        "onUpdate:visible": n
      }, null, 8, ["visible"])
    ]));
  }
});
const Cc = {
  install: (e) => {
    e.component("PinyinMenu", Ws), e.component("ContinuousMenu", Gs), e.component("ReadMenu", Ys), e.component("DigitalMenu", qs), e.component("AliasMenu", Xs), e.component("EnglishMenu", Ks), e.component("ChangespeedMenu", Js), e.component("RhythmMenu", Qs), e.component("SpecialMenu", Zs), e.component("MuteMenu", er), e.component("BgmMenu", tr), e.component("SensitiveMenu", nr), e.component("ManagementMenu", sr), e.component("ConversionMenu", rr), e.component("TryPlay", ar);
  }
};
var Xt = { exports: {} }, Kt = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.ParsingError = void 0;
  class n extends Error {
    constructor(x, T) {
      super(x), this.cause = T;
    }
  }
  t.ParsingError = n;
  let s;
  function r() {
    return i(!1) || m() || f() || p();
  }
  function o() {
    return d(/\s*/), i(!0) || f() || u() || l(!1);
  }
  function a() {
    const b = l(!0), x = [];
    let T, D = o();
    for (; D; ) {
      if (D.node.type === "Element") {
        if (T)
          throw new Error("Found multiple root nodes");
        T = D.node;
      }
      D.excluded || x.push(D.node), D = o();
    }
    if (!T)
      throw new n("Failed to parse XML", "Root Element not found");
    if (s.xml.length !== 0)
      throw new n("Failed to parse XML", "Not Well-Formed XML");
    return {
      declaration: b ? b.node : null,
      root: T,
      children: x
    };
  }
  function l(b) {
    const x = d(b ? /^<\?(xml)\s*/ : /^<\?([\w-:.]+)\s*/);
    if (!x)
      return;
    const T = {
      name: x[1],
      type: "ProcessingInstruction",
      attributes: {}
    };
    for (; !(E() || $("?>")); ) {
      const D = g();
      if (D)
        T.attributes[D.name] = D.value;
      else
        return;
    }
    return d(/\?>/), {
      excluded: b ? !1 : s.options.filter(T) === !1,
      node: T
    };
  }
  function i(b) {
    const x = d(/^<([^?!</>\s]+)\s*/);
    if (!x)
      return;
    const T = {
      type: "Element",
      name: x[1],
      attributes: {},
      children: []
    }, D = b ? !1 : s.options.filter(T) === !1;
    for (; !(E() || $(">") || $("?>") || $("/>")); ) {
      const L = g();
      if (L)
        T.attributes[L.name] = L.value;
      else
        return;
    }
    if (d(/^\s*\/>/))
      return T.children = null, {
        excluded: D,
        node: T
      };
    d(/\??>/);
    let _ = r();
    for (; _; )
      _.excluded || T.children.push(_.node), _ = r();
    if (s.options.strictMode) {
      const L = `</${T.name}>`;
      if (s.xml.startsWith(L))
        s.xml = s.xml.slice(L.length);
      else
        throw new n("Failed to parse XML", `Closing tag not matching "${L}"`);
    } else
      d(/^<\/\s*[\w-:.\u00C0-\u00FF]+>/);
    return {
      excluded: D,
      node: T
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
  function p() {
    if (s.xml.startsWith("<![CDATA[")) {
      const b = s.xml.indexOf("]]>");
      if (b > -1) {
        const x = b + 3, T = {
          type: "CDATA",
          content: s.xml.substring(0, x)
        };
        return s.xml = s.xml.slice(x), {
          excluded: s.options.filter(T) === !1,
          node: T
        };
      }
    }
  }
  function f() {
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
  function g() {
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
  function $(b) {
    return s.xml.indexOf(b) === 0;
  }
  function R(b, x = {}) {
    b = b.trim();
    const T = x.filter || (() => !0);
    return s = {
      xml: b,
      options: Object.assign(Object.assign({}, x), { filter: T, strictMode: x.strictMode === !0 })
    }, a();
  }
  e.exports = R, t.default = R;
})(Kt, Kt.exports);
var Oc = Kt.exports;
(function(e, t) {
  var n = We && We.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const s = n(Oc);
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
  function l(c, d, E) {
    if (typeof c.content == "string")
      i(c.content, d, E);
    else if (c.type === "Element")
      p(c, d, E);
    else if (c.type === "ProcessingInstruction")
      m(c, d);
    else
      throw new Error("Unknown node type: " + c.type);
  }
  function i(c, d, E) {
    if (!E) {
      const $ = c.trim();
      (d.options.lineSeparator || $.length === 0) && (c = $);
    }
    c.length > 0 && (!E && d.content.length > 0 && r(d), a(d, c));
  }
  function u(c, d) {
    const E = "/" + c.join("/"), $ = c[c.length - 1];
    return d.includes($) || d.includes(E);
  }
  function p(c, d, E) {
    if (d.path.push(c.name), !E && d.content.length > 0 && r(d), a(d, "<" + c.name), f(d, c.attributes), c.children === null || d.options.forceSelfClosingEmptyTag && c.children.length === 0) {
      const $ = d.options.whiteSpaceAtEndOfSelfclosingTag ? " />" : "/>";
      a(d, $);
    } else if (c.children.length === 0)
      a(d, "></" + c.name + ">");
    else {
      const $ = c.children;
      a(d, ">"), d.level++;
      let R = c.attributes["xml:space"] === "preserve", b = !1;
      if (!R && d.options.ignoredPaths && (b = u(d.path, d.options.ignoredPaths), R = b), !R && d.options.collapseContent) {
        let x = !1, T = !1, D = !1;
        $.forEach(function(_, L) {
          _.type === "Text" ? (_.content.includes(`
`) ? (T = !0, _.content = _.content.trim()) : (L === 0 || L === $.length - 1) && _.content.trim().length === 0 && (_.content = ""), _.content.trim().length > 0 && (x = !0)) : _.type === "CDATA" ? x = !0 : D = !0;
        }), x && (!D || !T) && (R = !0);
      }
      $.forEach(function(x) {
        l(x, d, E || R);
      }), d.level--, !E && !R && r(d), b && o(d), a(d, "</" + c.name + ">");
    }
    d.path.pop();
  }
  function f(c, d) {
    Object.keys(d).forEach(function(E) {
      const $ = d[E].replace(/"/g, "&quot;");
      a(c, " " + E + '="' + $ + '"');
    });
  }
  function m(c, d) {
    d.content.length > 0 && r(d), a(d, "<?" + c.name), f(d, c.attributes), a(d, "?>");
  }
  function g(c, d = {}) {
    d.indentation = "indentation" in d ? d.indentation : "    ", d.collapseContent = d.collapseContent === !0, d.lineSeparator = "lineSeparator" in d ? d.lineSeparator : `\r
`, d.whiteSpaceAtEndOfSelfclosingTag = d.whiteSpaceAtEndOfSelfclosingTag === !0, d.throwOnFailure = d.throwOnFailure !== !1;
    try {
      const E = (0, s.default)(c, { filter: d.filter, strictMode: d.strictMode }), $ = { content: "", level: 0, options: d, path: [] };
      return E.declaration && m(E.declaration, $), E.children.forEach(function(R) {
        l(R, $, !1);
      }), d.lineSeparator ? $.content.replace(/\r\n/g, `
`).replace(/\n/g, d.lineSeparator) : $.content;
    } catch (E) {
      if (d.throwOnFailure)
        throw E;
      return c;
    }
  }
  g.minify = (c, d = {}) => g(c, Object.assign(Object.assign({}, d), { indentation: "", lineSeparator: "" })), e.exports = g, t.default = g;
})(Xt, Xt.exports);
var Tc = Xt.exports;
const Rc = /* @__PURE__ */ rn(Tc);
function Dc(e) {
  return e.replaceAll(/[&]/gi, "&amp;").replaceAll(/[<]/gi, "&lt;").replaceAll(/[>]/gi, "&gt;");
}
function Pc(e, t) {
  return t ? `<audio src="${e.src}">${t}</audio>` : `<audio src="${e.src}"/>`;
}
function Nc(e) {
  return e.time ? `<break time="${e.time}"/>` : e.strength ? `<break strength="${e.strength}"/>` : "<break/>";
}
function Vc(e, t) {
  return e.level ? `<emphasis level="${e.level}">${t}</emphasis>` : `<emphasis>${t}</emphasis>`;
}
function Ic(e, t) {
  if (!e.style)
    return t;
  const n = e.role ? ` role="${e.role}"` : "", s = e.styledegree ? ` styledegree="${e.styledegree}"` : "";
  return `<mstts:express-as style="${e.style}"${n}${s}>${t}</mstts:express-as>`;
}
function Ac(e) {
  if (!e.src)
    return "";
  const t = e.volume ? ` volume="${e.volume}"` : "", n = e.fadein ? ` fadein="${e.fadein}"` : "", s = e.fadeout ? ` fadeout="${e.fadeout}"` : "";
  return `<mstts:backgroundaudio src="${e.src}"${t}${n}${s}/>`;
}
function Lc(e) {
  return !e.attrType || !e.value ? "" : `<mstts:silence type="${e.attrType}" value="${e.value}"/>`;
}
function Mc(e, t) {
  return `<p>${t}</p>`;
}
function jc(e, t) {
  const n = e.alphabet ? `alphabet="${e.alphabet}"` : "";
  return `<phoneme ph="${e.ph}"${n}>${t}</phoneme>`;
}
function Fc(e, t) {
  if (!e.contour && !e.pitch && !e.range && !e.rate && !e.volume)
    return t;
  const n = e.contour ? ` contour="${e.contour}"` : "", s = e.pitch ? ` pitch="${e.pitch}"` : "", r = e.range ? ` range="${e.range}"` : "", o = e.volume ? ` volume="${e.volume}"` : "", a = e.rate ? ` rate="${e.rate}"` : "";
  return `<prosody${n}${s}${r}${o}${a}>${t}</prosody>`;
}
function Hc(e, t) {
  const n = e.interpretAs ? ` interpret-as="${e.interpretAs}"` : "", s = e.format ? ` format="${e.format}"` : "", r = e.detail ? ` detail="${e.detail}"` : "";
  return `<say-as${n}${s}${r}>${t}</say-as>`;
}
function Uc(e, t) {
  return `<s>${t}</s>`;
}
function Bc(e, t) {
  return `<sub alias="${e.alias}">${t}</sub>`;
}
function zc(e, t) {
  const n = e.effect ? ` effect="${e.effect}"` : "";
  return `<voice name="${e.name}${n}">${t}</voice>`;
}
function Wc(e, t) {
  return `<speak version="${e.version}" xml:lang="${e.xmlLang}" xmlns="${e.xmlns}" xmlns:mstts="${e["xmlns:mstts"]}" xmlns:emo="${e["xmlns:emo"]}">${t}</speak>`;
}
function lr(e) {
  if (tt.isText(e))
    return Dc(e.text.trim());
  if (hr.isElement(e)) {
    const t = e.children.map((s) => lr(s)).join("");
    switch (I.getNodeType(e)) {
      case "paragraph":
        return `<p>${t}</p>`;
      case "ssml-speak":
        return Wc(e, t);
      case "ssml-mstts:backgroundaudio":
        return Ac(e);
      case "ssml-audio":
        return Pc(e, t);
      case "ssml-break":
        return Nc(e);
      case "ssml-emphasis":
        return Vc(e, t);
      case "ssml-mstts:express-as":
        return Ic(e, t);
      case "ssml-p":
        return Mc(e, t);
      case "ssml-phoneme":
        return jc(e, t);
      case "ssml-prosody":
        return Fc(e, t);
      case "ssml-s":
        return Uc(e, t);
      case "ssml-say-as":
        return Hc(e, t);
      case "ssml-sub":
        return Bc(e, t);
      case "ssml-voice":
        return zc(e, t);
      case "ssml-mstts:silence":
        return Lc(e);
      default:
        return t;
    }
  }
  return "";
}
function Gc(e, t) {
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
    function u(p) {
      i.children.push(p);
    }
    return { prosody: i, pushNode: u };
  }
  let l;
  for (let i = 0; i < t.children.length; i++) {
    const u = t.children[i];
    if (!(tt.isText(u) && !u.text.trim()))
      if (tt.isText(u)) {
        l ?? (l = a()), l.pushNode(u);
        continue;
      } else if (q.isVoid(e, u)) {
        l = void 0, r.children.push(u);
        continue;
      } else {
        const p = I.findPath(e, u), [f] = q.nodes(e, {
          at: p,
          mode: "lowest",
          voids: !1,
          match: (m) => I.checkNodeType(m, "ssml-prosody")
        });
        if (f) {
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
function Yc() {
  const { rootVoice: e, rootExpressAs: t } = je(), n = { ...e, children: [] }, s = ir(), r = { ...t, children: [] };
  n.children.push(...s), n.children.push(r);
  function o(a) {
    r.children.push(a);
  }
  return { voice: n, pushNode: o };
}
function is(e) {
  const { rootProsody: t } = je(), n = { ...t, children: [] };
  e(n);
  function s(r) {
    n.children.push(r);
  }
  return { prosody: n, pushNode: s };
}
function qc() {
  return {
    type: "ssml-break",
    time: "200ms",
    children: [{ text: "" }],
    remark: "paragraphBreak"
  };
}
function Xc(e) {
  const t = e.children.filter((n) => I.checkNodeType(n, "paragraph")).filter((n) => !!tn.string(n).trim()).map((n, s, r) => {
    const a = n.children;
    return s < r.length - 1 ? a.concat([qc()]) : a;
  });
  return [].concat(...t);
}
function Kc(e) {
  const t = Xc(e), n = [];
  let s, r;
  for (let o = 0; o < t.length; o++) {
    const a = t[o];
    if (!(tt.isText(a) && !a.text.trim())) {
      if (I.checkNodeType(a, "custom-management")) {
        s && (n.push(s.voice), s = void 0, r = void 0), n.push(Gc(e, a));
        continue;
      }
      if (s ?? (s = Yc()), tt.isText(a)) {
        r ?? (r = is(s.pushNode)), r.pushNode(a);
        continue;
      } else if (q.isVoid(e, a)) {
        r = void 0, s.pushNode(a);
        continue;
      } else {
        const l = I.findPath(e, a), [i] = q.nodes(e, {
          at: l,
          mode: "lowest",
          voids: !1,
          match: (u) => I.checkNodeType(u, "ssml-prosody")
        });
        if (i) {
          r = void 0, s.pushNode(a);
          continue;
        } else {
          r ?? (r = is(s.pushNode)), r.pushNode(a);
          continue;
        }
      }
    }
  }
  return s && n.push(s.voice), n;
}
function Jc() {
  const { editor: e } = de();
  if (!e)
    throw Error("没有找到 editor 对象");
  const { rootSpeak: t, rootBackgroundaudio: n } = je(), s = { ...t, children: [] }, r = { ...n };
  return s.children.push(r, ...Kc(e)), lr(s);
}
const Ke = (e) => (Zt("data-v-fb2870b0"), e = e(), en(), e), Qc = { class: "editor-title d-flex flex-row align-item-center justify-content-between" }, Zc = { class: "title-wrapper d-flex flex-column justify-content-center ps-3" }, ed = /* @__PURE__ */ Ke(() => /* @__PURE__ */ h("div", { class: "title-author pb-1" }, "SSML编辑器", -1)), td = { class: "author d-flex flex-row align-items-center justify-content-start" }, nd = /* @__PURE__ */ Ke(() => /* @__PURE__ */ h("div", null, "未保存", -1)), sd = /* @__PURE__ */ Ke(() => /* @__PURE__ */ h("span", { class: "iconfont icon-play font-size-12 p-1" }, null, -1)), rd = /* @__PURE__ */ Ke(() => /* @__PURE__ */ h("div", { class: "d-inline-block" }, null, -1)), od = { class: "operation-wrapper d-flex flex-row justify-content-center align-items-center" }, ad = /* @__PURE__ */ Ke(() => /* @__PURE__ */ h("div", { class: "menu-divider" }, null, -1)), ld = /* @__PURE__ */ Ke(() => /* @__PURE__ */ h("div", { class: "px-1" }, null, -1)), id = {
  class: "ssml-code border border-secondary-subtle rounded-2 px-2",
  style: { "white-space": "pre-wrap", "max-height": "50vh" }
}, ud = { class: "dialog-footer" }, cd = /* @__PURE__ */ A({
  __name: "editor-title",
  setup(e) {
    const t = w(!1), n = w(""), { rootBackgroundaudio: s } = je(), r = Q(() => Rc(n.value, {
      indentation: "    ",
      filter: (u) => u.type !== "Comment",
      collapseContent: !0,
      lineSeparator: `
`
    })), o = () => {
      n.value = Jc(), t.value = !0;
    }, a = () => {
      s.src && Ye.play(s.src);
    }, l = () => {
      Ye.stop(s.src), s.src = "", s.remark = "";
    };
    async function i(u) {
      await navigator.clipboard.writeText(u ? r.value : n.value), t.value = !1;
    }
    return (u, p) => (O(), N(J, null, [
      h("div", Qc, [
        h("div", Zc, [
          ed,
          h("div", td, [
            nd,
            v(s).src ? (O(), X(v(Re), {
              key: 0,
              class: "bgm-txt ms-2",
              closable: "",
              size: "small",
              onClick: a,
              onClose: l
            }, {
              default: P(() => [
                sd,
                rd,
                h("span", null, z(v(s).remark), 1)
              ]),
              _: 1
            })) : Ee("", !0)
          ])
        ]),
        h("div", od, [
          y(v(le), {
            type: "primary",
            icon: v(Sr),
            disabled: ""
          }, {
            default: P(() => [
              B("分享")
            ]),
            _: 1
          }, 8, ["icon"]),
          ad,
          y(v(le), {
            type: "primary",
            onClick: o
          }, {
            default: P(() => [
              B("查看SSML")
            ]),
            _: 1
          }),
          y(v(le), { disabled: "" }, {
            default: P(() => [
              B("下载音频")
            ]),
            _: 1
          }),
          y(v(le), { disabled: "" }, {
            default: P(() => [
              B("下载视频")
            ]),
            _: 1
          }),
          y(v(le), { disabled: "" }, {
            default: P(() => [
              B("下载字幕")
            ]),
            _: 1
          }),
          y(v(le), { disabled: "" }, {
            default: P(() => [
              B("声音转换")
            ]),
            _: 1
          }),
          ld
        ])
      ]),
      y(v(_r), {
        modelValue: t.value,
        "onUpdate:modelValue": p[4] || (p[4] = (f) => t.value = f),
        title: "查看SSML",
        width: "80%"
      }, {
        header: P(() => [
          y(v(le), {
            type: "info",
            onClick: p[0] || (p[0] = (f) => i(!0))
          }, {
            default: P(() => [
              B("复制+关闭")
            ]),
            _: 1
          }),
          y(v(le), {
            type: "primary",
            onClick: p[1] || (p[1] = (f) => i(!1))
          }, {
            default: P(() => [
              B("压缩+复制+关闭(推荐)")
            ]),
            _: 1
          })
        ]),
        footer: P(() => [
          h("span", ud, [
            y(v(le), {
              type: "info",
              onClick: p[2] || (p[2] = (f) => i(!0))
            }, {
              default: P(() => [
                B("复制+关闭")
              ]),
              _: 1
            }),
            y(v(le), {
              type: "primary",
              onClick: p[3] || (p[3] = (f) => i(!1))
            }, {
              default: P(() => [
                B("压缩+复制+关闭(推荐)")
              ]),
              _: 1
            })
          ])
        ]),
        default: P(() => [
          h("pre", id, z(r.value), 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
});
const dd = /* @__PURE__ */ fe(cd, [["__scopeId", "data-v-fb2870b0"]]), fd = /* @__PURE__ */ A({
  __name: "editor-core",
  emits: ["created", "change"],
  setup(e, { emit: t }) {
    const { editor: n, setEditor: s, globalEditConfig: r } = de(), o = w(null);
    ue(() => {
      a();
    }), Qt(() => {
      n == null || n.destroy();
    });
    function a() {
      if (!o.value)
        return;
      const l = yr({
        selector: o.value,
        mode: "simple",
        config: {
          ...ie(r.editorConfig),
          onCreated(i) {
            t("created", i), ye.emit(he.EDITOR_CREATED, i);
          },
          onChange(i) {
            t("change", i);
          }
        }
      });
      s(l), l.on(G.ERROR, r.handleError);
    }
    return (l, i) => (O(), N("div", {
      ref_key: "boxRef",
      ref: o,
      class: "edit-core",
      style: { height: "70vh", "overflow-y": "hidden" }
    }, null, 512));
  }
}), pd = { class: "bar-view border-bottom border-1" }, md = /* @__PURE__ */ A({
  __name: "bar-view",
  setup(e) {
    return (t, n) => (O(), N(J, null, [
      h("div", pd, [
        y(v(Fs), null, {
          default: P(() => [
            y(v(Be), { divider: "green" }, {
              default: P(() => [
                y(v(se), {
                  text: "24K高清音质",
                  icon: "play",
                  disabled: ""
                })
              ]),
              _: 1
            }),
            y(v(Be), { divider: "cyan" }, {
              default: P(() => [
                y(v(Ws)),
                y(v(Ys)),
                y(v(qs)),
                y(v(Gs)),
                y(v(Xs)),
                y(v(Ks))
              ]),
              _: 1
            }),
            y(v(Be), { divider: "orange" }, {
              default: P(() => [
                y(v(Js)),
                y(v(sr)),
                y(v(rr))
              ]),
              _: 1
            }),
            y(v(Be), { divider: "purple" }, {
              default: P(() => [
                y(v(Qs)),
                y(v(er))
              ]),
              _: 1
            }),
            y(v(Be), { divider: "yellow" }, {
              default: P(() => [
                y(v(Zs)),
                y(v(tr))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      y(v(ar))
    ], 64));
  }
}), vd = { class: "editor-box" }, hd = { class: "editor-core-container shadow pt-1" }, yd = /* @__PURE__ */ A({
  __name: "editor-view",
  emits: ["created", "change"],
  setup(e, { emit: t }) {
    const n = (a) => {
      t("created", a);
    }, s = (a) => {
      t("change", a);
    };
    function r(a) {
      ye.emit(he.VIEW_CLICK, a);
    }
    function o(a) {
      ye.emit(he.VIEW_KEYDOWN, a);
    }
    return (a, l) => (O(), N("div", {
      class: "editor-view",
      onClick: r,
      onKeydown: o
    }, [
      y(dd),
      h("div", vd, [
        y(md),
        h("div", hd, [
          y(fd, {
            onChange: s,
            onCreated: n
          })
        ])
      ])
    ], 32));
  }
});
const gd = /* @__PURE__ */ fe(yd, [["__scopeId", "data-v-c398e700"]]), bd = {
  install(e) {
    e.component("EditorView", gd);
  }
}, Ad = {
  install(e, t) {
    e.use(Jr()), e.use(() => {
      const { setGlobalEditConfig: n } = de(), s = Rs(t);
      n(s), ye.on(he.ERROR, s.handleError);
    }), e.use(Qa), e.use(gi), e.use(Cc), e.use(bd);
  }
};
export {
  Vo as AudioPlayer,
  Ao as CancellationTokenSource,
  Cd as DOMComment,
  Od as DOMElement,
  Sd as DOMNode,
  Rd as DOMRange,
  Dd as DOMSelection,
  Pd as DOMStaticRange,
  Td as DOMText,
  he as EMITTER_EVENT,
  gd as EditorView,
  Io as FileSelector,
  G as WANGEDITOR_EVENT,
  Ye as audioPlayer,
  Rs as createGlobalEditorConfig,
  Ad as default,
  un as defaultFilterSpeaker,
  Id as defaultLabelValue,
  Za as defaultSpeaker,
  st as demoAvatar,
  Qn as formatTime,
  Nd as genRandomStr,
  no as pitch,
  to as speed
};

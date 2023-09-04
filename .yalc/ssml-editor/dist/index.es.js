var yr = Object.defineProperty;
var gr = (e, t, n) => t in e ? yr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var W = (e, t, n) => (gr(e, typeof t != "symbol" ? t + "" : t, n), n);
import { effectScope as ps, ref as b, markRaw as Me, toRaw as me, isRef as Fe, isReactive as Et, toRef as ft, hasInjectionContext as br, inject as ms, getCurrentInstance as sn, watch as ee, unref as v, reactive as bt, nextTick as Ke, computed as X, getCurrentScope as vs, onScopeDispose as hs, toRefs as qt, shallowRef as q, shallowReactive as tt, defineComponent as L, openBlock as S, createElementBlock as D, normalizeClass as ve, withModifiers as ae, createElementVNode as y, toDisplayString as U, createBlock as J, withCtx as V, createVNode as g, renderSlot as Re, customRef as _r, onMounted as he, watchEffect as wr, Fragment as Q, renderList as le, createTextVNode as ne, onUnmounted as rn, Teleport as ys, withDirectives as Pe, normalizeStyle as kt, vShow as De, pushScopeId as $t, popScopeId as St, createCommentVNode as Se, provide as xr } from "vue";
import { DomEditor as A, SlateNode as on, SlateEditor as K, SlateTransforms as G, SlateRange as ye, Boot as fe, SlateText as ot, SlateElement as Er, createEditor as kr } from "@wangeditor/editor";
import { ElForm as Ct, ElInput as Rt, ElPopover as Ne, ElMenu as $r, ElMenuItem as Sr, ElSelect as Sn, ElOption as Cn, ElIcon as an, ElButton as pe, ElTag as gs, ElSlider as It, ElDialog as Cr } from "element-plus";
import { Search as Rr, Loading as Tr, More as Or, StarFilled as Pr, Star as Dr, Minus as Nr, Share as Ir } from "@element-plus/icons-vue";
var bs = !1;
function dt(e, t, n) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function Vt(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1);
    return;
  }
  delete e[t];
}
function Vr() {
  return _s().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function _s() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Ar = typeof Proxy == "function", Lr = "devtools-plugin:setup", Mr = "plugin:settings:set";
let Be, Yt;
function jr() {
  var e;
  return Be !== void 0 || (typeof window < "u" && window.performance ? (Be = !0, Yt = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Be = !0, Yt = global.perf_hooks.performance) : Be = !1), Be;
}
function Fr() {
  return jr() ? Yt.now() : Date.now();
}
class Hr {
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
        return Fr();
      }
    }, n && n.on(Mr, (a, i) => {
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
function ws(e, t) {
  const n = e, s = _s(), r = Vr(), o = Ar && n.enableEarlyProxy;
  if (r && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o))
    r.emit(Lr, e, t);
  else {
    const a = o ? new Hr(n, r) : null;
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
let nt;
const at = (e) => nt = e, xs = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function He(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Ce;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Ce || (Ce = {}));
const Tt = typeof window < "u", st = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && Tt, Rn = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function Ur(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], { type: e.type }) : e;
}
function ln(e, t, n) {
  const s = new XMLHttpRequest();
  s.open("GET", e), s.responseType = "blob", s.onload = function() {
    $s(s.response, t, n);
  }, s.onerror = function() {
    console.error("could not download file");
  }, s.send();
}
function Es(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function pt(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
const mt = typeof navigator == "object" ? navigator : { userAgent: "" }, ks = /* @__PURE__ */ (() => /Macintosh/.test(mt.userAgent) && /AppleWebKit/.test(mt.userAgent) && !/Safari/.test(mt.userAgent))(), $s = Tt ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !ks ? Br : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in mt ? zr : (
      // Fallback to using FileReader and a popup
      Wr
    )
  )
) : () => {
};
function Br(e, t = "download", n) {
  const s = document.createElement("a");
  s.download = t, s.rel = "noopener", typeof e == "string" ? (s.href = e, s.origin !== location.origin ? Es(s.href) ? ln(e, t, n) : (s.target = "_blank", pt(s)) : pt(s)) : (s.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    pt(s);
  }, 0));
}
function zr(e, t = "download", n) {
  if (typeof e == "string")
    if (Es(e))
      ln(e, t, n);
    else {
      const s = document.createElement("a");
      s.href = e, s.target = "_blank", setTimeout(function() {
        pt(s);
      });
    }
  else
    navigator.msSaveOrOpenBlob(Ur(e, n), t);
}
function Wr(e, t, n, s) {
  if (s = s || open("", "_blank"), s && (s.document.title = s.document.body.innerText = "downloading..."), typeof e == "string")
    return ln(e, t, n);
  const r = e.type === "application/octet-stream", o = /constructor/i.test(String(Rn.HTMLElement)) || "safari" in Rn, a = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((a || r && o || ks) && typeof FileReader < "u") {
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
function Z(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function un(e) {
  return "_a" in e && "install" in e;
}
function Ss() {
  if (!("clipboard" in navigator))
    return Z("Your browser doesn't support the Clipboard API", "error"), !0;
}
function Cs(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (Z('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Gr(e) {
  if (!Ss())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), Z("Global state copied to clipboard.");
    } catch (t) {
      if (Cs(t))
        return;
      Z("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function qr(e) {
  if (!Ss())
    try {
      Rs(e, JSON.parse(await navigator.clipboard.readText())), Z("Global state pasted from clipboard.");
    } catch (t) {
      if (Cs(t))
        return;
      Z("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function Yr(e) {
  try {
    $s(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    Z("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let Oe;
function Xr() {
  Oe || (Oe = document.createElement("input"), Oe.type = "file", Oe.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      Oe.onchange = async () => {
        const s = Oe.files;
        if (!s)
          return t(null);
        const r = s.item(0);
        return t(r ? { text: await r.text(), file: r } : null);
      }, Oe.oncancel = () => t(null), Oe.onerror = n, Oe.click();
    });
  }
  return e;
}
async function Kr(e) {
  try {
    const n = await Xr()();
    if (!n)
      return;
    const { text: s, file: r } = n;
    Rs(e, JSON.parse(s)), Z(`Global state imported from "${r.name}".`);
  } catch (t) {
    Z("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function Rs(e, t) {
  for (const n in t) {
    const s = e.state.value[n];
    s && Object.assign(s, t[n]);
  }
}
function Ee(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const Ts = "🍍 Pinia (root)", Xt = "_root";
function Jr(e) {
  return un(e) ? {
    id: Xt,
    label: Ts
  } : {
    id: e.$id,
    label: e.$id
  };
}
function Qr(e) {
  if (un(e)) {
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
function Zr(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: Ee(e.type),
    key: Ee(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function eo(e) {
  switch (e) {
    case Ce.direct:
      return "mutation";
    case Ce.patchFunction:
      return "$patch";
    case Ce.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let qe = !0;
const vt = [], Le = "pinia:mutations", se = "pinia", { assign: to } = Object, _t = (e) => "🍍 " + e;
function no(e, t) {
  ws({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: vt,
    app: e
  }, (n) => {
    typeof n.now != "function" && Z("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: Le,
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
            Gr(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await qr(t), n.sendInspectorTree(se), n.sendInspectorState(se);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            Yr(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Kr(t), n.sendInspectorTree(se), n.sendInspectorState(se);
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
            r ? typeof r.$reset != "function" ? Z(`Cannot reset "${s}" store because it doesn't have a "$reset" method implemented.`, "warn") : (r.$reset(), Z(`Store "${s}" reset.`)) : Z(`Cannot reset "${s}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((s, r) => {
      const o = s.componentInstance && s.componentInstance.proxy;
      if (o && o._pStores) {
        const a = s.componentInstance.proxy._pStores;
        Object.values(a).forEach((i) => {
          s.instanceData.state.push({
            type: _t(i.$id),
            key: "state",
            editable: !0,
            value: i._isOptionsAPI ? {
              _custom: {
                value: me(i.$state),
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
            type: _t(i.$id),
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
      if (s.app === e && s.inspectorId === se) {
        let r = [t];
        r = r.concat(Array.from(t._s.values())), s.rootNodes = (s.filter ? r.filter((o) => "$id" in o ? o.$id.toLowerCase().includes(s.filter.toLowerCase()) : Ts.toLowerCase().includes(s.filter.toLowerCase())) : r).map(Jr);
      }
    }), n.on.getInspectorState((s) => {
      if (s.app === e && s.inspectorId === se) {
        const r = s.nodeId === Xt ? t : t._s.get(s.nodeId);
        if (!r)
          return;
        r && (s.state = Qr(r));
      }
    }), n.on.editInspectorState((s, r) => {
      if (s.app === e && s.inspectorId === se) {
        const o = s.nodeId === Xt ? t : t._s.get(s.nodeId);
        if (!o)
          return Z(`store "${s.nodeId}" not found`, "error");
        const { path: a } = s;
        un(o) ? a.unshift("state") : (a.length !== 1 || !o._customProperties.has(a[0]) || a[0] in o.$state) && a.unshift("$state"), qe = !1, s.set(o, a, s.state.value), qe = !0;
      }
    }), n.on.editComponentState((s) => {
      if (s.type.startsWith("🍍")) {
        const r = s.type.replace(/^🍍\s*/, ""), o = t._s.get(r);
        if (!o)
          return Z(`store "${r}" not found`, "error");
        const { path: a } = s;
        if (a[0] !== "state")
          return Z(`Invalid path for store "${r}":
${a}
Only state can be modified.`);
        a[0] = "$state", qe = !1, s.set(o, a, s.state.value), qe = !0;
      }
    });
  });
}
function so(e, t) {
  vt.includes(_t(t.$id)) || vt.push(_t(t.$id)), ws({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: vt,
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
        layerId: Le,
        event: {
          time: s(),
          title: "🛫 " + l,
          subtitle: "start",
          data: {
            store: Ee(t.$id),
            action: Ee(l),
            args: u
          },
          groupId: f
        }
      }), a((m) => {
        Ve = void 0, n.addTimelineEvent({
          layerId: Le,
          event: {
            time: s(),
            title: "🛬 " + l,
            subtitle: "end",
            data: {
              store: Ee(t.$id),
              action: Ee(l),
              args: u,
              result: m
            },
            groupId: f
          }
        });
      }), i((m) => {
        Ve = void 0, n.addTimelineEvent({
          layerId: Le,
          event: {
            time: s(),
            logType: "error",
            title: "💥 " + l,
            subtitle: "end",
            data: {
              store: Ee(t.$id),
              action: Ee(l),
              args: u,
              error: m
            },
            groupId: f
          }
        });
      });
    }, !0), t._customProperties.forEach((a) => {
      ee(() => v(t[a]), (i, l) => {
        n.notifyComponentUpdate(), n.sendInspectorState(se), qe && n.addTimelineEvent({
          layerId: Le,
          event: {
            time: s(),
            title: "Change",
            subtitle: a,
            data: {
              newValue: i,
              oldValue: l
            },
            groupId: Ve
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: a, type: i }, l) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(se), !qe)
        return;
      const u = {
        time: s(),
        title: eo(i),
        data: to({ store: Ee(t.$id) }, Zr(a)),
        groupId: Ve
      };
      i === Ce.patchFunction ? u.subtitle = "⤵️" : i === Ce.patchObject ? u.subtitle = "🧩" : a && !Array.isArray(a) && (u.subtitle = a.type), a && (u.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: a
        }
      }), n.addTimelineEvent({
        layerId: Le,
        event: u
      });
    }, { detached: !0, flush: "sync" });
    const r = t._hotUpdate;
    t._hotUpdate = Me((a) => {
      r(a), n.addTimelineEvent({
        layerId: Le,
        event: {
          time: s(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: Ee(t.$id),
            info: Ee("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(se), n.sendInspectorState(se);
    });
    const { $dispose: o } = t;
    t.$dispose = () => {
      o(), n.notifyComponentUpdate(), n.sendInspectorTree(se), n.sendInspectorState(se), n.getSettings().logStoreChanges && Z(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(se), n.sendInspectorState(se), n.getSettings().logStoreChanges && Z(`"${t.$id}" store installed 🆕`);
  });
}
let Os = 0, Ve;
function Tn(e, t, n) {
  const s = t.reduce((r, o) => (r[o] = me(e)[o], r), {});
  for (const r in s)
    e[r] = function() {
      const o = Os, a = n ? new Proxy(e, {
        get(...l) {
          return Ve = o, Reflect.get(...l);
        },
        set(...l) {
          return Ve = o, Reflect.set(...l);
        }
      }) : e;
      Ve = o;
      const i = s[r].apply(a, arguments);
      return Ve = void 0, i;
    };
}
function ro({ app: e, store: t, options: n }) {
  if (t.$id.startsWith("__hot:"))
    return;
  t._isOptionsAPI = !!n.state, Tn(t, Object.keys(n.actions), t._isOptionsAPI);
  const s = t._hotUpdate;
  me(t)._hotUpdate = function(r) {
    s.apply(this, arguments), Tn(t, Object.keys(r._hmrPayload.actions), !!t._isOptionsAPI);
  }, so(
    e,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    t
  );
}
function oo() {
  const e = ps(!0), t = e.run(() => b({}));
  let n = [], s = [];
  const r = Me({
    install(o) {
      at(r), r._a = o, o.provide(xs, r), o.config.globalProperties.$pinia = r, st && no(o, r), s.forEach((a) => n.push(a)), s = [];
    },
    use(o) {
      return !this._a && !bs ? s.push(o) : n.push(o), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return st && typeof Proxy < "u" && r.use(ro), r;
}
function Ps(e, t) {
  for (const n in t) {
    const s = t[n];
    if (!(n in e))
      continue;
    const r = e[n];
    He(r) && He(s) && !Fe(s) && !Et(s) ? e[n] = Ps(r, s) : e[n] = s;
  }
  return e;
}
const Ds = () => {
};
function On(e, t, n, s = Ds) {
  e.push(t);
  const r = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), s());
  };
  return !n && vs() && hs(r), r;
}
function ze(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const ao = (e) => e();
function Kt(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, s) => e.set(s, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], r = e[n];
    He(r) && He(s) && e.hasOwnProperty(n) && !Fe(s) && !Et(s) ? e[n] = Kt(r, s) : e[n] = s;
  }
  return e;
}
const io = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function lo(e) {
  return !He(e) || !e.hasOwnProperty(io);
}
const { assign: be } = Object;
function Pn(e) {
  return !!(Fe(e) && e.effect);
}
function Dn(e, t, n, s) {
  const { state: r, actions: o, getters: a } = t, i = n.state.value[e];
  let l;
  function u() {
    !i && (process.env.NODE_ENV === "production" || !s) && (n.state.value[e] = r ? r() : {});
    const f = process.env.NODE_ENV !== "production" && s ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      qt(b(r ? r() : {}).value)
    ) : qt(n.state.value[e]);
    return be(f, o, Object.keys(a || {}).reduce((m, p) => (process.env.NODE_ENV !== "production" && p in f && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${p}" in store "${e}".`), m[p] = Me(X(() => {
      at(n);
      const h = n._s.get(e);
      return a[p].call(h, h);
    })), m), {}));
  }
  return l = Jt(e, u, t, n, s, !0), l;
}
function Jt(e, t, n = {}, s, r, o) {
  let a;
  const i = be({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !s._e.active)
    throw new Error("Pinia destroyed");
  const l = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !bs && (l.onTrigger = (T) => {
    u ? h = T : u == !1 && !w._hotUpdating && (Array.isArray(h) ? h.push(T) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let u, f, m = [], p = [], h;
  const d = s.state.value[e];
  !o && !d && (process.env.NODE_ENV === "production" || !r) && (s.state.value[e] = {});
  const c = b({});
  let x;
  function $(T) {
    let O;
    u = f = !1, process.env.NODE_ENV !== "production" && (h = []), typeof T == "function" ? (T(s.state.value[e]), O = {
      type: Ce.patchFunction,
      storeId: e,
      events: h
    }) : (Kt(s.state.value[e], T), O = {
      type: Ce.patchObject,
      payload: T,
      storeId: e,
      events: h
    });
    const R = x = Symbol();
    Ke().then(() => {
      x === R && (u = !0);
    }), f = !0, ze(m, O, s.state.value[e]);
  }
  const E = o ? function() {
    const { state: O } = n, R = O ? O() : {};
    this.$patch((I) => {
      be(I, R);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : Ds
  );
  function _() {
    a.stop(), m = [], p = [], s._s.delete(e);
  }
  function C(T, O) {
    return function() {
      at(s);
      const R = Array.from(arguments), I = [], M = [];
      function Te(te) {
        I.push(te);
      }
      function Ie(te) {
        M.push(te);
      }
      ze(p, {
        args: R,
        name: T,
        store: w,
        after: Te,
        onError: Ie
      });
      let $e;
      try {
        $e = O.apply(this && this.$id === e ? this : w, R);
      } catch (te) {
        throw ze(M, te), te;
      }
      return $e instanceof Promise ? $e.then((te) => (ze(I, te), te)).catch((te) => (ze(M, te), Promise.reject(te))) : (ze(I, $e), $e);
    };
  }
  const N = /* @__PURE__ */ Me({
    actions: {},
    getters: {},
    state: [],
    hotState: c
  }), P = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: On.bind(null, p),
    $patch: $,
    $reset: E,
    $subscribe(T, O = {}) {
      const R = On(m, T, O.detached, () => I()), I = a.run(() => ee(() => s.state.value[e], (M) => {
        (O.flush === "sync" ? f : u) && T({
          storeId: e,
          type: Ce.direct,
          events: h
        }, M);
      }, be({}, l, O)));
      return R;
    },
    $dispose: _
  }, w = bt(process.env.NODE_ENV !== "production" || st ? be(
    {
      _hmrPayload: N,
      _customProperties: Me(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    P
    // must be added later
    // setupStore
  ) : P);
  s._s.set(e, w);
  const j = s._a && s._a.runWithContext || ao, B = s._e.run(() => (a = ps(), j(() => a.run(t))));
  for (const T in B) {
    const O = B[T];
    if (Fe(O) && !Pn(O) || Et(O))
      process.env.NODE_ENV !== "production" && r ? dt(c.value, T, ft(B, T)) : o || (d && lo(O) && (Fe(O) ? O.value = d[T] : Kt(O, d[T])), s.state.value[e][T] = O), process.env.NODE_ENV !== "production" && N.state.push(T);
    else if (typeof O == "function") {
      const R = process.env.NODE_ENV !== "production" && r ? O : C(T, O);
      B[T] = R, process.env.NODE_ENV !== "production" && (N.actions[T] = O), i.actions[T] = O;
    } else
      process.env.NODE_ENV !== "production" && Pn(O) && (N.getters[T] = o ? (
        // @ts-expect-error
        n.getters[T]
      ) : O, Tt && (B._getters || // @ts-expect-error: same
      (B._getters = Me([]))).push(T));
  }
  if (be(w, B), be(me(w), B), Object.defineProperty(w, "$state", {
    get: () => process.env.NODE_ENV !== "production" && r ? c.value : s.state.value[e],
    set: (T) => {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error("cannot set hotState");
      $((O) => {
        be(O, T);
      });
    }
  }), process.env.NODE_ENV !== "production" && (w._hotUpdate = Me((T) => {
    w._hotUpdating = !0, T._hmrPayload.state.forEach((O) => {
      if (O in w.$state) {
        const R = T.$state[O], I = w.$state[O];
        typeof R == "object" && He(R) && He(I) ? Ps(R, I) : T.$state[O] = I;
      }
      dt(w, O, ft(T.$state, O));
    }), Object.keys(w.$state).forEach((O) => {
      O in T.$state || Vt(w, O);
    }), u = !1, f = !1, s.state.value[e] = ft(T._hmrPayload, "hotState"), f = !0, Ke().then(() => {
      u = !0;
    });
    for (const O in T._hmrPayload.actions) {
      const R = T[O];
      dt(w, O, C(O, R));
    }
    for (const O in T._hmrPayload.getters) {
      const R = T._hmrPayload.getters[O], I = o ? (
        // special handling of options api
        X(() => (at(s), R.call(w, w)))
      ) : R;
      dt(w, O, I);
    }
    Object.keys(w._hmrPayload.getters).forEach((O) => {
      O in T._hmrPayload.getters || Vt(w, O);
    }), Object.keys(w._hmrPayload.actions).forEach((O) => {
      O in T._hmrPayload.actions || Vt(w, O);
    }), w._hmrPayload = T._hmrPayload, w._getters = T._getters, w._hotUpdating = !1;
  })), st) {
    const T = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((O) => {
      Object.defineProperty(w, O, be({ value: w[O] }, T));
    });
  }
  return s._p.forEach((T) => {
    if (st) {
      const O = a.run(() => T({
        store: w,
        app: s._a,
        pinia: s,
        options: i
      }));
      Object.keys(O || {}).forEach((R) => w._customProperties.add(R)), be(w, O);
    } else
      be(w, a.run(() => T({
        store: w,
        app: s._a,
        pinia: s,
        options: i
      })));
  }), process.env.NODE_ENV !== "production" && w.$state && typeof w.$state == "object" && typeof w.$state.constructor == "function" && !w.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${w.$id}".`), d && o && n.hydrate && n.hydrate(w.$state, d), u = !0, f = !0, w;
}
function Ot(e, t, n) {
  let s, r;
  const o = typeof t == "function";
  if (typeof e == "string")
    s = e, r = o ? n : t;
  else if (r = e, s = e.id, process.env.NODE_ENV !== "production" && typeof s != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function a(i, l) {
    const u = br();
    if (i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && nt && nt._testing ? null : i) || (u ? ms(xs, null) : null), i && at(i), process.env.NODE_ENV !== "production" && !nt)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    i = nt, i._s.has(s) || (o ? Jt(s, t, r, i) : Dn(s, r, i), process.env.NODE_ENV !== "production" && (a._pinia = i));
    const f = i._s.get(s);
    if (process.env.NODE_ENV !== "production" && l) {
      const m = "__hot:" + s, p = o ? Jt(m, t, r, i, !0) : Dn(m, be({}, r), i, !0);
      l._hotUpdate(p), delete i.state.value[m], i._s.delete(m);
    }
    if (process.env.NODE_ENV !== "production" && Tt) {
      const m = sn();
      if (m && m.proxy && // avoid adding stores that are just built for hot module replacement
      !l) {
        const p = m.proxy, h = "_pStores" in p ? p._pStores : p._pStores = {};
        h[s] = f;
      }
    }
    return f;
  }
  return a.$id = s, a;
}
function Ns(e) {
  {
    e = me(e);
    const t = {};
    for (const n in e) {
      const s = e[n];
      (Fe(s) || Et(s)) && (t[n] = // ---
      ft(e, n));
    }
    return t;
  }
}
function At() {
  return { id: "", src: "" };
}
const uo = () => [
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
], co = () => [
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
function fo(e) {
  return `${(0.05 * e * 100).toFixed(0)}%`;
}
function po(e) {
  return `${((e - 1) * 100).toFixed(0)}%`;
}
function Is() {
  return {
    category: "",
    name: "",
    role: "",
    style: "",
    speed: "1.0",
    pitch: "0"
  };
}
function mo() {
  return { ...Is(), id: "", label: "" };
}
function ge() {
  return () => Promise.resolve([]);
}
function Vs(e) {
  const t = (e == null ? void 0 : e.editorConfig) || { maxLength: 5e3, placeholder: "请输入内容..." }, n = (e == null ? void 0 : e.handleError) || (() => {
  }), s = (e == null ? void 0 : e.pinyin) || { fetchData: ge() }, r = (e == null ? void 0 : e.english) || { fetchData: ge() }, o = (e == null ? void 0 : e.special) || {
    fetchData: ge(),
    fetchScene: ge(),
    fetchStyle: ge()
  }, a = (e == null ? void 0 : e.bgm) || {
    fetchData: ge(),
    fetchScene: ge(),
    fetchStyle: ge()
  }, i = (e == null ? void 0 : e.tryPlay) || {
    play: () => Promise.resolve(At()),
    fetchData: ge(),
    featchTag: ge(),
    fetchStar: () => Promise.resolve(!0)
  }, l = (e == null ? void 0 : e.conversion) || {
    timeoutMilliseconds: 2e4,
    audioUpload: () => Promise.resolve(At()),
    transfer: () => Promise.resolve(At()),
    fetchSpeaker: ge()
  }, u = (e == null ? void 0 : e.management) || {
    recordRecentUsage: () => Promise.resolve(mo()),
    fetchRecentUsage: ge(),
    deleteRecentUsage: () => Promise.resolve()
  }, f = o, m = a, p = i;
  return f.menus ?? (f.menus = [
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
    bgm: m,
    special: f,
    tryPlay: p,
    conversion: l,
    management: u
  };
}
const vo = () => ({
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
}), ho = () => ({
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
}), it = () => "https://img.sdaxia.top/upload/4314c841777e4d20901cd5d04a28e91a.png", ue = Ot("--editor-config", () => {
  const e = q(), t = q(), n = X(() => e.value), s = X(() => {
    if (t.value)
      return t.value;
    throw Error("请设置GlobalEditorConfig");
  });
  return { editor: n, globalEditConfig: s, setEditor: (a) => {
    e.value = a;
  }, setGlobalEditConfig: (a) => {
    t.value = a ?? Vs();
  } };
}), yo = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => A.getNodeType(r) === "ssml-audio" ? !0 : t(r), s.isVoid = (r) => A.getNodeType(r) === "ssml-audio" ? !on.string(r) : n(r), s;
};
function Nn(e, t, n, s, r) {
  const o = t === void 0 ? void 0 : t.key;
  return { sel: e, data: t, children: n, text: s, elm: r, key: o };
}
const In = Array.isArray;
function Lt(e) {
  return typeof e == "string" || typeof e == "number" || e instanceof String || e instanceof Number;
}
function As(e, t, n) {
  if (e.ns = "http://www.w3.org/2000/svg", n !== "foreignObject" && t !== void 0)
    for (let s = 0; s < t.length; ++s) {
      const r = t[s];
      if (typeof r == "string")
        continue;
      const o = r.data;
      o !== void 0 && As(o, r.children, r.sel);
    }
}
function k(e, t, n) {
  let s = {}, r, o, a;
  if (n !== void 0 ? (t !== null && (s = t), In(n) ? r = n : Lt(n) ? o = n.toString() : n && n.sel && (r = [n])) : t != null && (In(t) ? r = t : Lt(t) ? o = t.toString() : t && t.sel ? r = [t] : s = t), r !== void 0)
    for (a = 0; a < r.length; ++a)
      Lt(r[a]) && (r[a] = Nn(void 0, void 0, void 0, r[a], void 0));
  return e[0] === "s" && e[1] === "v" && e[2] === "g" && (e.length === 3 || e[3] === "." || e[3] === "#") && As(s, r, e), Nn(e, s, r, o, void 0);
}
var Ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function cn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ls = "Expected a function", Vn = 0 / 0, go = "[object Symbol]", bo = /^\s+|\s+$/g, _o = /^[-+]0x[0-9a-f]+$/i, wo = /^0b[01]+$/i, xo = /^0o[0-7]+$/i, Eo = parseInt, ko = typeof Ye == "object" && Ye && Ye.Object === Object && Ye, $o = typeof self == "object" && self && self.Object === Object && self, So = ko || $o || Function("return this")(), Co = Object.prototype, Ro = Co.toString, To = Math.max, Oo = Math.min, Mt = function() {
  return So.Date.now();
};
function Po(e, t, n) {
  var s, r, o, a, i, l, u = 0, f = !1, m = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(Ls);
  t = An(t) || 0, wt(n) && (f = !!n.leading, m = "maxWait" in n, o = m ? To(An(n.maxWait) || 0, t) : o, p = "trailing" in n ? !!n.trailing : p);
  function h(P) {
    var w = s, j = r;
    return s = r = void 0, u = P, a = e.apply(j, w), a;
  }
  function d(P) {
    return u = P, i = setTimeout($, t), f ? h(P) : a;
  }
  function c(P) {
    var w = P - l, j = P - u, B = t - w;
    return m ? Oo(B, o - j) : B;
  }
  function x(P) {
    var w = P - l, j = P - u;
    return l === void 0 || w >= t || w < 0 || m && j >= o;
  }
  function $() {
    var P = Mt();
    if (x(P))
      return E(P);
    i = setTimeout($, c(P));
  }
  function E(P) {
    return i = void 0, p && s ? h(P) : (s = r = void 0, a);
  }
  function _() {
    i !== void 0 && clearTimeout(i), u = 0, s = l = r = i = void 0;
  }
  function C() {
    return i === void 0 ? a : E(Mt());
  }
  function N() {
    var P = Mt(), w = x(P);
    if (s = arguments, r = this, l = P, w) {
      if (i === void 0)
        return d(l);
      if (m)
        return i = setTimeout($, t), h(l);
    }
    return i === void 0 && (i = setTimeout($, t)), a;
  }
  return N.cancel = _, N.flush = C, N;
}
function Do(e, t, n) {
  var s = !0, r = !0;
  if (typeof e != "function")
    throw new TypeError(Ls);
  return wt(n) && (s = "leading" in n ? !!n.leading : s, r = "trailing" in n ? !!n.trailing : r), Po(e, t, {
    leading: s,
    maxWait: t,
    trailing: r
  });
}
function wt(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function No(e) {
  return !!e && typeof e == "object";
}
function Io(e) {
  return typeof e == "symbol" || No(e) && Ro.call(e) == go;
}
function An(e) {
  if (typeof e == "number")
    return e;
  if (Io(e))
    return Vn;
  if (wt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = wt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(bo, "");
  var n = wo.test(e);
  return n || xo.test(e) ? Eo(e.slice(2), n ? 2 : 8) : _o.test(e) ? Vn : +e;
}
var Vo = Do;
const ie = /* @__PURE__ */ cn(Vo);
function Ln(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function dn(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {}), Object.keys(t).forEach(function(n) {
    typeof e[n] > "u" ? e[n] = t[n] : Ln(t[n]) && Ln(e[n]) && Object.keys(t[n]).length > 0 && dn(e[n], t[n]);
  });
}
var Ms = {
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
function fn() {
  var e = typeof document < "u" ? document : {};
  return dn(e, Ms), e;
}
var Ao = {
  document: Ms,
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
function js() {
  var e = typeof window < "u" ? window : {};
  return dn(e, Ao), e;
}
function Lo(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function Qt(e) {
  return Qt = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Qt(e);
}
function xt(e, t) {
  return xt = Object.setPrototypeOf || function(s, r) {
    return s.__proto__ = r, s;
  }, xt(e, t);
}
function Mo() {
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
function ht(e, t, n) {
  return Mo() ? ht = Reflect.construct : ht = function(r, o, a) {
    var i = [null];
    i.push.apply(i, o);
    var l = Function.bind.apply(r, i), u = new l();
    return a && xt(u, a.prototype), u;
  }, ht.apply(null, arguments);
}
function jo(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Zt(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Zt = function(s) {
    if (s === null || !jo(s))
      return s;
    if (typeof s != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(s))
        return t.get(s);
      t.set(s, r);
    }
    function r() {
      return ht(s, arguments, Qt(this).constructor);
    }
    return r.prototype = Object.create(s.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), xt(r, s);
  }, Zt(e);
}
function Fo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ho(e) {
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
var je = /* @__PURE__ */ function(e) {
  Lo(t, e);
  function t(n) {
    var s;
    return s = e.call.apply(e, [this].concat(n)) || this, Ho(Fo(s)), s;
  }
  return t;
}(/* @__PURE__ */ Zt(Array));
function pn(e) {
  e === void 0 && (e = []);
  var t = [];
  return e.forEach(function(n) {
    Array.isArray(n) ? t.push.apply(t, pn(n)) : t.push(n);
  }), t;
}
function Uo(e) {
  for (var t = [], n = 0; n < e.length; n += 1)
    t.indexOf(e[n]) === -1 && t.push(e[n]);
  return t;
}
function Bo(e) {
  return e.toLowerCase().replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function zo(e, t) {
  if (typeof e != "string")
    return [e];
  for (var n = [], s = t.querySelectorAll(e), r = 0; r < s.length; r += 1)
    n.push(s[r]);
  return n;
}
function H(e, t) {
  var n = js(), s = fn(), r = [];
  if (!t && e instanceof je)
    return e;
  if (!e)
    return new je(r);
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
      r = zo(e.trim(), t || s);
  } else if (e.nodeType || e === n || e === s)
    r.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof je)
      return e;
    r = e;
  }
  return new je(Uo(r));
}
H.fn = je.prototype;
function Mn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = pn(t.map(function(r) {
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
  var s = pn(t.map(function(r) {
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
        r.name.indexOf("data-") >= 0 && (t[Bo(r.name.split("data-")[1])] = r.value);
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
  function i(c) {
    var x = c.target;
    if (x) {
      var $ = c.target.dom7EventData || [];
      if ($.indexOf(c) < 0 && $.unshift(c), H(x).is(r))
        o.apply(x, $);
      else
        for (var E = H(x).parents(), _ = 0; _ < E.length; _ += 1)
          H(E[_]).is(r) && o.apply(E[_], $);
    }
  }
  function l(c) {
    var x = c && c.target ? c.target.dom7EventData || [] : [];
    x.indexOf(c) < 0 && x.unshift(c), o.apply(this, x);
  }
  for (var u = s.split(" "), f, m = 0; m < this.length; m += 1) {
    var p = this[m];
    if (r)
      for (f = 0; f < u.length; f += 1) {
        var d = u[f];
        p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[d] || (p.dom7LiveListeners[d] = []), p.dom7LiveListeners[d].push({
          listener: o,
          proxyListener: i
        }), p.addEventListener(d, i, a);
      }
    else
      for (f = 0; f < u.length; f += 1) {
        var h = u[f];
        p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[h] || (p.dom7Listeners[h] = []), p.dom7Listeners[h].push({
          listener: o,
          proxyListener: l
        }), p.addEventListener(h, l, a);
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
      var m = this[f], p = void 0;
      if (!r && m.dom7Listeners ? p = m.dom7Listeners[u] : r && m.dom7LiveListeners && (p = m.dom7LiveListeners[u]), p && p.length)
        for (var h = p.length - 1; h >= 0; h -= 1) {
          var d = p[h];
          o && d.listener === o || o && d.listener && d.listener.dom7proxy && d.listener.dom7proxy === o ? (m.removeEventListener(u, d.proxyListener, a), p.splice(h, 1)) : o || (m.removeEventListener(u, d.proxyListener, a), p.splice(h, 1));
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
  var t = js(), n = fn(), s = this[0], r, o;
  if (!s || typeof e > "u")
    return !1;
  if (typeof e == "string") {
    if (s.matches)
      return s.matches(e);
    if (s.webkitMatchesSelector)
      return s.webkitMatchesSelector(e);
    if (s.msMatchesSelector)
      return s.msMatchesSelector(e);
    for (r = H(e), o = 0; o < r.length; o += 1)
      if (r[o] === s)
        return !0;
    return !1;
  }
  if (e === n)
    return s === n;
  if (e === t)
    return s === t;
  if (e.nodeType || e instanceof je) {
    for (r = e.nodeType ? [e] : e, o = 0; o < r.length; o += 1)
      if (r[o] === s)
        return !0;
    return !1;
  }
  return !1;
}
function Xn() {
  for (var e, t = fn(), n = 0; n < arguments.length; n += 1) {
    e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    for (var s = 0; s < this.length; s += 1)
      if (typeof e == "string") {
        var r = t.createElement("div");
        for (r.innerHTML = e; r.firstChild; )
          this[s].appendChild(r.firstChild);
      } else if (e instanceof je)
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
      e ? H(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
  return H(t);
}
function Jn(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var s = this[n].querySelectorAll(e), r = 0; r < s.length; r += 1)
      t.push(s[r]);
  return H(t);
}
function Qn(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var s = this[n].children, r = 0; r < s.length; r += 1)
      (!e || H(s[r]).is(e)) && t.push(s[r]);
  return H(t);
}
var Wo = "resize scroll".split(" ");
function Fs(e) {
  function t() {
    for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)
      s[r] = arguments[r];
    if (typeof s[0] > "u") {
      for (var o = 0; o < this.length; o += 1)
        Wo.indexOf(e) < 0 && (e in this[o] ? this[o][e]() : H(this[o]).trigger(e));
      return this;
    }
    return this.on.apply(this, [e].concat(s));
  }
  return t;
}
var Zn = Fs("click"), es = Fs("focus");
Wn && (H.fn.hide = Wn);
Xn && (H.fn.append = Xn);
Zn && (H.fn.click = Zn);
Bn && (H.fn.on = Bn);
zn && (H.fn.off = zn);
es && (H.fn.focus = es);
Fn && (H.fn.attr = Fn);
Un && (H.fn.val = Un);
qn && (H.fn.html = qn);
Hn && (H.fn.dataset = Hn);
Mn && (H.fn.addClass = Mn);
jn && (H.fn.removeClass = jn);
Qn && (H.fn.children = Qn);
Gn && (H.fn.each = Gn);
Jn && (H.fn.find = Jn);
Yn && (H.fn.is = Yn);
Kn && (H.fn.parents = Kn);
const Hd = globalThis.Node, Ud = globalThis.Comment, Bd = globalThis.Element, zd = globalThis.Text, Wd = globalThis.Range, Gd = globalThis.Selection, qd = globalThis.StaticRange;
let Go = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function Yd(e = "r") {
  return `${e}-${Go()}`;
}
let qo = class {
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
const Je = new qo();
function ts(e) {
  const t = Math.floor(e / 60), n = e % 60, s = String(t).padStart(2, "0"), r = String(n).padStart(2, "0");
  return `${s}:${r}`;
}
class Yo {
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
class Xo {
  constructor(t = 60) {
    W(this, "isStop", !1);
    W(this, "count", b(0));
    W(this, "timeoutId", null);
    this.timeoutSeconds = t;
  }
  clearTimeout() {
    this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  get state() {
    return X(() => this.count.value);
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
function Ko(e) {
  const { selection: t } = e;
  if (t) {
    const [n, s] = ye.edges(t), r = K.range(e, n, s), o = K.string(e, r), a = o.trimEnd();
    if (a !== o) {
      const i = o.length - a.length, l = { ...s, offset: s.offset - i }, u = { ...t, anchor: n, focus: l };
      G.select(e, u);
    }
  }
}
function ss(e, t) {
  K.withoutNormalizing(e, () => {
    const n = K.start(e, t), s = K.end(e, t);
    G.insertText(e, " ", { at: n }), G.insertText(e, " ", {
      at: { path: s.path, offset: s.offset + 1 }
    }), G.select(e, {
      anchor: { path: n.path, offset: n.offset + 1 },
      focus: { path: s.path, offset: s.offset + 1 }
    });
  });
}
function Qe(e, t) {
  K.withoutNormalizing(e, () => {
    const n = K.before(e, t), s = K.after(e, t);
    if (!n || !s)
      return;
    const r = {
      anchor: { path: n.path, offset: n.offset - 1 },
      focus: { path: n.path, offset: n.offset }
    }, o = {
      anchor: { path: s.path, offset: s.offset },
      focus: { path: s.path, offset: s.offset + 1 }
    };
    K.string(e, r) === " " && G.delete(e, { at: r }), K.string(e, o) === " " && G.delete(e, { at: o });
  });
}
const Jo = {
  type: "ssml-audio",
  renderElem: (e, t, n) => t ? Qo(e, t, n) : Zo(e, n)
};
function Qo(e, t, n) {
  const { remark: s, src: r } = e;
  return k("span.ssml-wrapper", [
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
            click: ie((o) => {
              o.preventDefault(), Je.stop(r);
              const a = A.findPath(n, e);
              Qe(n, a), G.unwrapNodes(n, { at: a });
            })
          }
        }),
        k("span.iconfont.icon-play", {
          on: {
            click: ie((o) => {
              o.preventDefault(), Je.play(r);
            })
          }
        }),
        k("span.data-content", { attrs: { "data-content": s } })
      ]
    ),
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
    })
  ]);
}
function Zo(e, t) {
  const { remark: n, src: s } = e;
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
            backgroundColor: "var(--ssml-audio)"
          }
        },
        [
          k("span.iconfont.icon-roundclosefill", {
            on: {
              click: ie((r) => {
                r.preventDefault(), Je.stop(s);
                const o = A.findPath(t, e);
                G.delete(t, { at: o });
              })
            }
          }),
          k("span.iconfont.icon-play", {
            on: {
              click: ie((r) => {
                r.preventDefault(), Je.play(s);
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": n } })
        ]
      ),
      k("span.iconfont.icon-music", {
        style: { color: "var(--ssml-audio)" }
      })
    ]
  );
}
const ea = {
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
}, ta = {
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
}, na = {
  editorPlugin: yo,
  renderElems: [Jo],
  elemsToHtml: [ea],
  parseElemsHtml: [ta]
}, sa = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => A.getNodeType(r) === "ssml-break" ? !0 : t(r), s.isVoid = (r) => A.getNodeType(r) === "ssml-break" ? !0 : n(r), s;
}, ra = {
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
                click: ie((r) => {
                  r.preventDefault();
                  const o = A.findPath(n, e);
                  G.delete(n, { at: o });
                })
              }
            }),
            k("span.data-content", { attrs: { "data-content": s } })
          ]
        ),
        k("span.iconfont.icon-tingdun", {
          style: { color: "var(--ssml-break)" }
        })
      ]
    );
  }
}, oa = {
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
}, aa = {
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
}, ia = {
  editorPlugin: sa,
  renderElems: [ra],
  elemsToHtml: [oa],
  parseElemsHtml: [aa]
}, la = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => A.getNodeType(r) === "ssml-emphasis" ? !0 : t(r), s.isVoid = (r) => A.getNodeType(r) === "ssml-emphasis" ? !1 : n(r), s;
}, ua = {
  type: "ssml-emphasis",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return k("span.ssml-wrapper", [
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
              click: ie((r) => {
                r.preventDefault();
                const o = A.findPath(n, e);
                G.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
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
      })
    ]);
  }
}, ca = {
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
}, da = {
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
}, fa = {
  editorPlugin: la,
  renderElems: [ua],
  elemsToHtml: [ca],
  parseElemsHtml: [da]
}, pa = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => A.getNodeType(r) === "ssml-mstts:express-as" ? !0 : t(r), s.isVoid = (r) => A.getNodeType(r) === "ssml-mstts:express-as" ? !1 : n(r), s;
}, ma = {
  type: "ssml-mstts:express-as",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return k("span.ssml-wrapper", [
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
              click: ie((r) => {
                r.preventDefault();
                const o = A.findPath(n, e);
                G.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
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
      })
    ]);
  }
}, va = {
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
}, ha = {
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
}, ya = {
  editorPlugin: pa,
  renderElems: [ma],
  elemsToHtml: [va],
  parseElemsHtml: [ha]
}, ga = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => A.getNodeType(r) === "ssml-p" ? !0 : t(r), s.isVoid = (r) => A.getNodeType(r) === "ssml-p" ? !1 : n(r), s;
}, ba = {
  type: "ssml-p",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return k("span.ssml-wrapper", [
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
              click: ie((r) => {
                r.preventDefault();
                const o = A.findPath(n, e);
                G.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
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
      })
    ]);
  }
}, _a = {
  type: "ssml-p",
  elemToHtml: (e, t) => {
    const { remark: n } = e;
    return `<span
          data-w-e-type="ssml-p"
          data-w-e-is-inline
          data-ow-remark="${n}"
        >${t}</span>`;
  }
}, wa = {
  selector: 'span[data-w-e-type="ssml-p"]',
  parseElemHtml: (e, t) => ({
    type: "ssml-p",
    remark: e.getAttribute("data-ow-remark") || "",
    children: t
  })
}, xa = {
  editorPlugin: ga,
  renderElems: [ba],
  elemsToHtml: [_a],
  parseElemsHtml: [wa]
}, Ea = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => A.getNodeType(r) === "ssml-phoneme" ? !0 : t(r), s.isVoid = (r) => A.getNodeType(r) === "ssml-phoneme" ? !1 : n(r), s;
}, ka = {
  type: "ssml-phoneme",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return k("span.ssml-wrapper", [
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
              click: ie((r) => {
                r.preventDefault();
                const o = A.findPath(n, e);
                Qe(n, o), G.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
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
      })
    ]);
  }
}, $a = {
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
}, Sa = {
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
}, Ca = {
  editorPlugin: Ea,
  renderElems: [ka],
  elemsToHtml: [$a],
  parseElemsHtml: [Sa]
}, Ra = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => A.getNodeType(r) === "ssml-prosody" ? !0 : t(r), s.isVoid = (r) => A.getNodeType(r) === "ssml-prosody" ? !1 : n(r), s;
}, Ta = {
  type: "ssml-prosody",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return k("span.ssml-wrapper", [
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
              click: ie((r) => {
                r.preventDefault();
                const o = A.findPath(n, e);
                Qe(n, o), G.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
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
      })
    ]);
  }
}, Oa = {
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
}, Pa = {
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
}, Da = {
  editorPlugin: Ra,
  renderElems: [Ta],
  elemsToHtml: [Oa],
  parseElemsHtml: [Pa]
}, Na = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => A.getNodeType(r) === "ssml-s" ? !0 : t(r), s.isVoid = (r) => A.getNodeType(r) === "ssml-s" ? !1 : n(r), s;
}, Ia = {
  type: "ssml-s",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return k("span.ssml-wrapper", [
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
              click: ie((r) => {
                r.preventDefault();
                const o = A.findPath(n, e);
                G.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
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
      })
    ]);
  }
}, Va = {
  type: "ssml-s",
  elemToHtml: (e, t) => {
    const { remark: n } = e;
    return `<span
          data-w-e-type="ssml-s"
          data-w-e-is-inline
          data-ow-remark="${n}"
        >${t}</span>`;
  }
}, Aa = {
  selector: 'span[data-w-e-type="ssml-s"]',
  parseElemHtml: (e, t) => ({
    type: "ssml-s",
    remark: e.getAttribute("data-ow-remark") || "",
    children: t
  })
}, La = {
  editorPlugin: Na,
  renderElems: [Ia],
  elemsToHtml: [Va],
  parseElemsHtml: [Aa]
}, Ma = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => A.getNodeType(r) === "ssml-say-as" ? !0 : t(r), s.isVoid = (r) => A.getNodeType(r) === "ssml-say-as" ? !1 : n(r), s;
}, ja = {
  type: "ssml-say-as",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return k("span.ssml-wrapper", [
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
              click: ie((r) => {
                r.preventDefault();
                const o = A.findPath(n, e);
                Qe(n, o), G.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
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
      })
    ]);
  }
}, Fa = {
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
}, Ha = {
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
}, Ua = {
  editorPlugin: Ma,
  renderElems: [ja],
  elemsToHtml: [Fa],
  parseElemsHtml: [Ha]
}, Ba = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => A.getNodeType(r) === "ssml-sub" ? !0 : t(r), s.isVoid = (r) => A.getNodeType(r) === "ssml-sub" ? !1 : n(r), s;
}, za = {
  type: "ssml-sub",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return k("span.ssml-wrapper", [
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
              click: ie((r) => {
                r.preventDefault();
                const o = A.findPath(n, e);
                Qe(n, o), G.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
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
      })
    ]);
  }
}, Wa = {
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
}, Ga = {
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
}, qa = {
  editorPlugin: Ba,
  renderElems: [za],
  elemsToHtml: [Wa],
  parseElemsHtml: [Ga]
}, Ya = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => A.getNodeType(r) === "ssml-voice" ? !0 : t(r), s.isVoid = (r) => A.getNodeType(r) === "ssml-voice" ? !1 : n(r), s;
}, Xa = {
  type: "ssml-voice",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return k("span.ssml-wrapper", [
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
              click: ie((r) => {
                r.preventDefault();
                const o = A.findPath(n, e);
                G.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
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
      })
    ]);
  }
}, Ka = {
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
}, Ja = {
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
}, Qa = {
  editorPlugin: Ya,
  renderElems: [Xa],
  elemsToHtml: [Ka],
  parseElemsHtml: [Ja]
}, Za = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => A.getNodeType(r) === "custom-management" ? !0 : t(r), s.isVoid = (r) => A.getNodeType(r) === "custom-management" ? !1 : n(r), s;
}, ei = "wangeditor-error", ti = "ssml-element-click", z = {
  ERROR: ei,
  SSML_ELEMENT_CLICK: ti
}, ni = "emitter-error", si = "emitter-view-click", ri = "emitter-view-keydown", oi = "emitter-editor-created", re = { ERROR: ni, VIEW_CLICK: si, VIEW_KEYDOWN: ri, EDITOR_CREATED: oi }, ai = {
  type: "custom-management",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return k("span.ssml-wrapper", [
      k(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--custom-management)"
          },
          on: {
            mousedown: (r) => r.preventDefault(),
            click: ie((r) => {
              r.preventDefault(), n.select(A.findPath(n, e)), n.emit(z.SSML_ELEMENT_CLICK, n, e);
            })
          }
        },
        [
          k("span.iconfont.icon-roundclosefill", {
            on: {
              click: ie((r) => {
                r.preventDefault();
                const o = A.findPath(n, e);
                Qe(n, o), G.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
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
      })
    ]);
  }
}, ii = {
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
}, li = {
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
}, ui = {
  editorPlugin: Za,
  renderElems: [ai],
  elemsToHtml: [ii],
  parseElemsHtml: [li]
}, ci = (e) => {
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
  f.deleteBackward = (p) => {
    t(p);
  }, f.deleteForward = (p) => {
    n(p);
  }, f.insertBreak = () => {
    s();
  }, f.normalizeNode = (p) => {
    o(p);
  }, f.apply = (p) => {
    r(p);
  }, f.insertData = (p) => {
    if (p.types.includes("application/x-slate-fragment"))
      return i(p);
    {
      const h = new DataTransfer();
      return h.setData("text/plain", p.getData("text/plain").trim()), i(h);
    }
  }, f.setFragmentData = (p) => {
    l(p);
    const h = p.getData("text/plain").replaceAll(/[\s]/gi, "");
    p.setData("text/plain", h);
  }, f.insertText = (p) => {
    a(p);
  };
  const m = [
    "ssml-prosody",
    "ssml-sub",
    "custom-management",
    "ssml-phoneme",
    "ssml-say-as"
  ];
  return f.insertNode = (p) => {
    const h = A.getNodeType(p);
    return m.includes(h) ? (e.selection && ss(e, e.selection), G.insertNodes(e, p)) : h === "ssml-audio" && on.string(p) ? (e.selection && ss(e, e.selection), G.insertNodes(e, p)) : K.isVoid(e, p) ? (u(p), e.move(1)) : u(p);
  }, f;
};
const di = {
  install() {
    fe.registerModule(na), fe.registerModule(ia), fe.registerModule(fa), fe.registerModule(ya), fe.registerModule(xa), fe.registerModule(Ca), fe.registerModule(Da), fe.registerModule(La), fe.registerModule(Ua), fe.registerModule(qa), fe.registerModule(Qa), fe.registerModule(ui), fe.registerPlugin(ci);
  }
}, Ue = Ot("--editor-ssml", () => {
  const e = tt({
    type: "ssml-speak",
    version: "1.0",
    xmlLang: "zh-CN",
    xmlns: "http://www.w3.org/2001/10/synthesis",
    "xmlns:mstts": "http://www.w3.org/2001/mstts",
    "xmlns:emo": "http://www.w3.org/2009/10/emotionml",
    remark: "",
    children: []
  }), t = tt({
    name: "zh-CN-XiaomoNeural",
    type: "ssml-voice",
    remark: "Xiaomo-晓墨",
    effect: "",
    children: []
  }), n = tt({
    type: "ssml-mstts:backgroundaudio",
    src: "",
    remark: "",
    children: []
  }), s = tt({
    type: "ssml-mstts:express-as",
    style: "",
    role: "",
    remark: "",
    children: []
  }), r = tt({
    type: "ssml-prosody",
    remark: "",
    children: []
  });
  return { rootSpeak: e, rootVoice: t, rootBackgroundaudio: n, rootExpressAs: s, rootProsody: r };
});
function Kd() {
  return { label: "", value: "" };
}
function fi() {
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
function mn() {
  return {
    word: "",
    topFlag: "",
    category: "",
    gender: "",
    tag: ""
  };
}
class Hs {
  constructor() {
    W(this, "audio");
    W(this, "isPlaying", b(!1));
    W(this, "isLoading", b(!1));
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
    return X(() => this.isPlaying.value ? "playing" : "paused");
  }
  get loadState() {
    return X(() => this.isLoading.value ? "loading" : "complete");
  }
}
const Pt = Ot("--editor-try-play", () => {
  const e = Ue(), t = q(new Hs()), n = b(fi()), s = X(() => n.value), r = X(() => t.value);
  return { speaker: s, setSpeaker: (a) => {
    n.value = a, e.rootVoice.name = a.name;
  }, audioPlayer: r };
}), Us = Ot("--editor-management-menu", () => ({ contentData: bt(Is()) })), pi = { class: "bar-button-icon" }, mi = {
  class: "fw-normal",
  style: { "font-size": "0.85rem" }
}, vi = /* @__PURE__ */ L({
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
        const { editor: r } = ue();
        r && t("click", r);
      }
    };
    return (r, o) => (S(), D("div", {
      class: ve(["bar-button px-2 py-1", { disabled: r.disabled }]),
      onClick: s,
      onMousedown: o[0] || (o[0] = ae(() => {
      }, ["prevent"]))
    }, [
      y("div", pi, [
        y("span", {
          class: ve(["fs-3 iconfont-moyin", [`moyin-icon_${r.icon}`]])
        }, null, 2)
      ]),
      y("div", mi, U(r.text), 1)
    ], 34));
  }
});
const de = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, ce = /* @__PURE__ */ de(vi, [["__scopeId", "data-v-2da9a7ca"]]);
const vn = /* @__PURE__ */ L({
  __name: "bar-input",
  props: {
    type: {}
  },
  emits: ["submit"],
  setup(e, { expose: t, emit: n }) {
    const s = b(""), r = b();
    function o() {
      Ke(() => {
        r.value.input.focus();
      });
    }
    function a() {
      n("submit", s.value), s.value = "";
    }
    return t({
      focus: o
    }), (i, l) => (S(), J(v(Ct), {
      onSubmit: ae(a, ["prevent"])
    }, {
      default: V(() => [
        g(v(Rt), {
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
const hi = /* @__PURE__ */ L({
  __name: "bar-popover",
  props: {
    visible: { type: Boolean },
    trigger: {},
    hideAfter: {},
    width: {}
  },
  emits: ["update:visible"],
  setup(e) {
    return (t, n) => (S(), J(v(Ne), {
      hideAfter: t.hideAfter,
      width: t.width,
      visible: t.visible,
      trigger: t.trigger,
      "onUpdate:visible": n[0] || (n[0] = (s) => t.$emit("update:visible", s))
    }, {
      reference: V(() => [
        Re(t.$slots, "reference")
      ]),
      default: V(() => [
        Re(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["hideAfter", "width", "visible", "trigger"]));
  }
});
function Dt(e) {
  return vs() ? (hs(e), !0) : !1;
}
function _e(e) {
  return typeof e == "function" ? e() : v(e);
}
const Bs = typeof window < "u" && typeof document < "u", yi = (e) => e != null, gi = Object.prototype.toString, bi = (e) => gi.call(e) === "[object Object]", yt = () => {
};
function _i(e, t = {}) {
  if (!Fe(e))
    return qt(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const s in e.value)
    n[s] = _r(() => ({
      get() {
        return e.value[s];
      },
      set(r) {
        var o;
        if ((o = _e(t.replaceRef)) != null ? o : !0)
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
function zs(e, t = !0) {
  sn() ? he(e) : t ? e() : Ke(e);
}
function ke(e) {
  var t;
  const n = _e(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Ae = Bs ? window : void 0;
function Xe(...e) {
  let t, n, s, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, r] = e, t = Ae) : [t, n, s, r] = e, !t)
    return yt;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const o = [], a = () => {
    o.forEach((f) => f()), o.length = 0;
  }, i = (f, m, p, h) => (f.addEventListener(m, p, h), () => f.removeEventListener(m, p, h)), l = ee(
    () => [ke(t), _e(r)],
    ([f, m]) => {
      if (a(), !f)
        return;
      const p = bi(m) ? { ...m } : m;
      o.push(
        ...n.flatMap((h) => s.map((d) => i(f, h, d, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    l(), a();
  };
  return Dt(u), u;
}
function wi() {
  const e = b(!1);
  return sn() && he(() => {
    e.value = !0;
  }), e;
}
function hn(e) {
  const t = wi();
  return X(() => (t.value, !!e()));
}
function xi(e, t = {}) {
  const { window: n = Ae } = t, s = hn(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let r;
  const o = b(!1), a = (u) => {
    o.value = u.matches;
  }, i = () => {
    r && ("removeEventListener" in r ? r.removeEventListener("change", a) : r.removeListener(a));
  }, l = wr(() => {
    s.value && (i(), r = n.matchMedia(_e(e)), "addEventListener" in r ? r.addEventListener("change", a) : r.addListener(a), o.value = r.matches);
  });
  return Dt(() => {
    l(), i(), r = void 0;
  }), o;
}
function yn(e, t = {}) {
  var n, s;
  const {
    pointerTypes: r,
    preventDefault: o,
    stopPropagation: a,
    exact: i,
    onMove: l,
    onEnd: u,
    onStart: f,
    initialValue: m,
    axis: p = "both",
    draggingElement: h = Ae,
    containerElement: d,
    handle: c = e
  } = t, x = b(
    (n = _e(m)) != null ? n : { x: 0, y: 0 }
  ), $ = b(), E = (w) => r ? r.includes(w.pointerType) : !0, _ = (w) => {
    _e(o) && w.preventDefault(), _e(a) && w.stopPropagation();
  }, C = (w) => {
    var j;
    if (!E(w) || _e(i) && w.target !== _e(e))
      return;
    const T = ((j = _e(d)) != null ? j : _e(e)).getBoundingClientRect(), O = {
      x: w.clientX - T.left,
      y: w.clientY - T.top
    };
    (f == null ? void 0 : f(O, w)) !== !1 && ($.value = O, _(w));
  }, N = (w) => {
    if (!E(w) || !$.value)
      return;
    let { x: j, y: B } = x.value;
    (p === "x" || p === "both") && (j = w.clientX - $.value.x), (p === "y" || p === "both") && (B = w.clientY - $.value.y), x.value = {
      x: j,
      y: B
    }, l == null || l(x.value, w), _(w);
  }, P = (w) => {
    E(w) && $.value && ($.value = void 0, u == null || u(x.value, w), _(w));
  };
  if (Bs) {
    const w = { capture: (s = t.capture) != null ? s : !0 };
    Xe(c, "pointerdown", C, w), Xe(h, "pointermove", N, w), Xe(h, "pointerup", P, w);
  }
  return {
    ..._i(x),
    position: x,
    isDragging: X(() => !!$.value),
    style: X(
      () => `left:${x.value.x}px;top:${x.value.y}px;`
    )
  };
}
function Ws(e, t, n = {}) {
  const { window: s = Ae, ...r } = n;
  let o;
  const a = hn(() => s && "ResizeObserver" in s), i = () => {
    o && (o.disconnect(), o = void 0);
  }, l = X(
    () => Array.isArray(e) ? e.map((m) => ke(m)) : [ke(e)]
  ), u = ee(
    l,
    (m) => {
      if (i(), a.value && s) {
        o = new ResizeObserver(t);
        for (const p of m)
          p && o.observe(p, r);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), f = () => {
    i(), u();
  };
  return Dt(f), {
    isSupported: a,
    stop: f
  };
}
function lt(e, t = {}) {
  const {
    reset: n = !0,
    windowResize: s = !0,
    windowScroll: r = !0,
    immediate: o = !0
  } = t, a = b(0), i = b(0), l = b(0), u = b(0), f = b(0), m = b(0), p = b(0), h = b(0);
  function d() {
    const c = ke(e);
    if (!c) {
      n && (a.value = 0, i.value = 0, l.value = 0, u.value = 0, f.value = 0, m.value = 0, p.value = 0, h.value = 0);
      return;
    }
    const x = c.getBoundingClientRect();
    a.value = x.height, i.value = x.bottom, l.value = x.left, u.value = x.right, f.value = x.top, m.value = x.width, p.value = x.x, h.value = x.y;
  }
  return Ws(e, d), ee(() => ke(e), (c) => !c && d()), r && Xe("scroll", d, { capture: !0, passive: !0 }), s && Xe("resize", d, { passive: !0 }), zs(() => {
    o && d();
  }), {
    height: a,
    bottom: i,
    left: l,
    right: u,
    top: f,
    width: m,
    x: p,
    y: h,
    update: d
  };
}
function Ei(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: s = Ae, box: r = "content-box" } = n, o = X(() => {
    var l, u;
    return (u = (l = ke(e)) == null ? void 0 : l.namespaceURI) == null ? void 0 : u.includes("svg");
  }), a = b(t.width), i = b(t.height);
  return Ws(
    e,
    ([l]) => {
      const u = r === "border-box" ? l.borderBoxSize : r === "content-box" ? l.contentBoxSize : l.devicePixelContentBoxSize;
      if (s && o.value) {
        const f = ke(e);
        if (f) {
          const m = s.getComputedStyle(f);
          a.value = Number.parseFloat(m.width), i.value = Number.parseFloat(m.height);
        }
      } else if (u) {
        const f = Array.isArray(u) ? u : [u];
        a.value = f.reduce((m, { inlineSize: p }) => m + p, 0), i.value = f.reduce((m, { blockSize: p }) => m + p, 0);
      } else
        a.value = l.contentRect.width, i.value = l.contentRect.height;
    },
    n
  ), ee(
    () => ke(e),
    (l) => {
      a.value = l ? t.width : 0, i.value = l ? t.height : 0;
    }
  ), {
    width: a,
    height: i
  };
}
function ki(e, t, n = {}) {
  const {
    root: s,
    rootMargin: r = "0px",
    threshold: o = 0.1,
    window: a = Ae,
    immediate: i = !0
  } = n, l = hn(() => a && "IntersectionObserver" in a), u = X(() => {
    const d = _e(e);
    return (Array.isArray(d) ? d : [d]).map(ke).filter(yi);
  });
  let f = yt;
  const m = b(i), p = l.value ? ee(
    () => [u.value, ke(s), m.value],
    ([d, c]) => {
      if (f(), !m.value || !d.length)
        return;
      const x = new IntersectionObserver(
        t,
        {
          root: ke(c),
          rootMargin: r,
          threshold: o
        }
      );
      d.forEach(($) => $ && x.observe($)), f = () => {
        x.disconnect(), f = yt;
      };
    },
    { immediate: i, flush: "post" }
  ) : yt, h = () => {
    f(), p(), m.value = !1;
  };
  return Dt(h), {
    isSupported: l,
    isActive: m,
    pause() {
      f(), m.value = !1;
    },
    resume() {
      m.value = !0;
    },
    stop: h
  };
}
function Nt(e, { window: t = Ae, scrollTarget: n } = {}) {
  const s = b(!1);
  return ki(
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
function $i(e = {}) {
  const {
    window: t = Ae,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: s = Number.POSITIVE_INFINITY,
    listenOrientation: r = !0,
    includeScrollbar: o = !0
  } = e, a = b(n), i = b(s), l = () => {
    t && (o ? (a.value = t.innerWidth, i.value = t.innerHeight) : (a.value = t.document.documentElement.clientWidth, i.value = t.document.documentElement.clientHeight));
  };
  if (l(), zs(l), Xe("resize", l, { passive: !0 }), r) {
    const u = xi("(orientation: portrait)");
    ee(u, () => l());
  }
  return { width: a, height: i };
}
const Si = { class: "search-content w-100" }, Ci = { class: "ps-2 w-75" }, Ri = { class: "menu ps-2" }, Ti = { class: "flex flex-row pt-1" }, Oi = {
  class: "content-list overflow-x-hidden overflow-y-auto py-2",
  style: { height: "250px" }
}, Pi = ["onClick"], Di = /* @__PURE__ */ y("span", { class: "iconfont icon-play" }, null, -1), Ni = { class: "ps-2" }, gn = /* @__PURE__ */ L({
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
    const n = e, s = b(), r = b(""), o = b(""), a = b(""), i = b(""), l = b(n.dataList || []), u = b(n.sceneList || []), f = b(n.styleList || []), m = Nt(s);
    ee(m, (c) => {
      c && Ke(() => {
        var x, $;
        ($ = (x = s.value) == null ? void 0 : x.input) == null || $.focus();
      });
    }), he(async () => {
      l.value.length || await p(), u.value.length || (u.value = await n.fetchScene()), f.value.length || (f.value = await n.fetchStyle());
    });
    async function p() {
      l.value = await n.fetchData({
        word: r.value,
        menu: i.value,
        scene: o.value,
        style: a.value
      });
    }
    function h(c) {
      i.value = c, p();
    }
    function d(c) {
      t("submit", c);
    }
    return (c, x) => (S(), D("div", Si, [
      y("div", Ci, [
        g(v(Ct), {
          onSubmit: ae(p, ["prevent"])
        }, {
          default: V(() => [
            g(v(Rt), {
              ref_key: "searchInputRef",
              ref: s,
              placeholder: "搜索",
              modelValue: r.value,
              "onUpdate:modelValue": x[0] || (x[0] = ($) => r.value = $),
              "suffix-icon": v(Rr)
            }, null, 8, ["modelValue", "suffix-icon"])
          ]),
          _: 1
        }, 8, ["onSubmit"])
      ]),
      y("div", Ri, [
        g(v($r), {
          mode: "horizontal",
          "default-active": c.menus.length > 0 ? c.menus[0].value : "",
          onSelect: x[1] || (x[1] = ($) => h($))
        }, {
          default: V(() => [
            (S(!0), D(Q, null, le(c.menus, ($, E) => (S(), J(v(Sr), {
              index: $.value,
              key: E
            }, {
              default: V(() => [
                ne(U($.label), 1)
              ]),
              _: 2
            }, 1032, ["index"]))), 128))
          ]),
          _: 1
        }, 8, ["default-active"])
      ]),
      y("div", Ti, [
        g(v(Sn), {
          modelValue: o.value,
          "onUpdate:modelValue": x[2] || (x[2] = ($) => o.value = $),
          onChange: p,
          class: "m-1",
          size: "default"
        }, {
          default: V(() => [
            (S(!0), D(Q, null, le(u.value, ($) => (S(), J(v(Cn), {
              key: $.value,
              label: $.label,
              value: $.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        g(v(Sn), {
          modelValue: a.value,
          "onUpdate:modelValue": x[3] || (x[3] = ($) => a.value = $),
          onChange: p,
          class: "m-1",
          size: "default"
        }, {
          default: V(() => [
            (S(!0), D(Q, null, le(f.value, ($) => (S(), J(v(Cn), {
              key: $.value,
              label: $.label,
              value: $.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      y("ul", Oi, [
        (S(!0), D(Q, null, le(l.value, ($, E) => (S(), D("li", {
          onClick: (_) => d(me($)),
          class: "content-list-item clickable ps-2 py-2",
          key: E
        }, [
          Di,
          y("span", Ni, U($.label), 1)
        ], 8, Pi))), 128))
      ])
    ]));
  }
});
const Ii = {}, Vi = { class: "content" };
function Ai(e, t) {
  return S(), D("div", Vi, [
    Re(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Gs = /* @__PURE__ */ de(Ii, [["render", Ai], ["__scopeId", "data-v-7beae5b9"]]), Li = {}, Mi = { class: "bar-wrapper-item" };
function ji(e, t) {
  return S(), D("div", Mi, [
    Re(e.$slots, "default")
  ]);
}
const Fi = /* @__PURE__ */ de(Li, [["render", ji]]), Hi = { class: "bar-wrapper-group" }, Ui = { class: "group-items" }, Bi = /* @__PURE__ */ L({
  __name: "bar-wrapper-group",
  props: {
    divider: {}
  },
  setup(e) {
    return (t, n) => (S(), D("div", Hi, [
      y("div", Ui, [
        Re(t.$slots, "default", {}, void 0, !0)
      ]),
      y("div", {
        class: ve(["divider", [t.divider]])
      }, null, 2)
    ]));
  }
});
const Ge = /* @__PURE__ */ de(Bi, [["__scopeId", "data-v-be31f837"]]);
function zi(e, t) {
  return `left:${e}px;top:${t}px`;
}
function bn(e, t) {
  const { width: n, height: s } = Ei(e), { width: r, height: o } = $i(), a = X(() => ({
    x: r.value - n.value,
    y: o.value - s.value
  }));
  return { style: X(() => {
    const l = t.value.x, u = t.value.y, f = l < 5 ? 5 : l > a.value.x ? a.value.x - 5 : l, m = u < 5 ? 5 : u > a.value.y ? a.value.y - 5 : u;
    return zi(f, m);
  }) };
}
var en = { exports: {} }, qs = { exports: {} }, Wi = void 0, Ys = function(e) {
  return e !== Wi && e !== null;
}, Gi = Ys, qi = {
  object: !0,
  function: !0,
  undefined: !0
  /* document.all */
}, Yi = function(e) {
  return Gi(e) ? hasOwnProperty.call(qi, typeof e) : !1;
}, Xi = Yi, Ki = function(e) {
  if (!Xi(e))
    return !1;
  try {
    return e.constructor ? e.constructor.prototype === e : !1;
  } catch {
    return !1;
  }
}, Ji = Ki, Qi = function(e) {
  if (typeof e != "function" || !hasOwnProperty.call(e, "length"))
    return !1;
  try {
    if (typeof e.length != "number" || typeof e.call != "function" || typeof e.apply != "function")
      return !1;
  } catch {
    return !1;
  }
  return !Ji(e);
}, Zi = Qi, el = /^\s*class[\s{/}]/, tl = Function.prototype.toString, nl = function(e) {
  return !(!Zi(e) || el.test(tl.call(e)));
}, sl = function() {
  var e = Object.assign, t;
  return typeof e != "function" ? !1 : (t = { foo: "raz" }, e(t, { bar: "dwa" }, { trzy: "trzy" }), t.foo + t.bar + t.trzy === "razdwatrzy");
}, jt, rs;
function rl() {
  return rs || (rs = 1, jt = function() {
    try {
      return Object.keys("primitive"), !0;
    } catch {
      return !1;
    }
  }), jt;
}
var ol = function() {
}, al = ol(), _n = function(e) {
  return e !== al && e !== null;
}, Ft, os;
function il() {
  if (os)
    return Ft;
  os = 1;
  var e = _n, t = Object.keys;
  return Ft = function(n) {
    return t(e(n) ? Object(n) : n);
  }, Ft;
}
var Ht, as;
function ll() {
  return as || (as = 1, Ht = rl()() ? Object.keys : il()), Ht;
}
var Ut, is;
function ul() {
  if (is)
    return Ut;
  is = 1;
  var e = _n;
  return Ut = function(t) {
    if (!e(t))
      throw new TypeError("Cannot use null or undefined");
    return t;
  }, Ut;
}
var Bt, ls;
function cl() {
  if (ls)
    return Bt;
  ls = 1;
  var e = ll(), t = ul(), n = Math.max;
  return Bt = function(s, r) {
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
  }, Bt;
}
var dl = sl() ? Object.assign : cl(), fl = _n, pl = Array.prototype.forEach, ml = Object.create, vl = function(e, t) {
  var n;
  for (n in e)
    t[n] = e[n];
}, hl = function(e) {
  var t = ml(null);
  return pl.call(arguments, function(n) {
    fl(n) && vl(Object(n), t);
  }), t;
}, zt = "razdwatrzy", yl = function() {
  return typeof zt.contains != "function" ? !1 : zt.contains("dwa") === !0 && zt.contains("foo") === !1;
}, Wt, us;
function gl() {
  if (us)
    return Wt;
  us = 1;
  var e = String.prototype.indexOf;
  return Wt = function(t) {
    return e.call(this, t, arguments[1]) > -1;
  }, Wt;
}
var bl = yl() ? String.prototype.contains : gl(), gt = Ys, cs = nl, Xs = dl, Ks = hl, rt = bl, _l = qs.exports = function(e, t) {
  var n, s, r, o, a;
  return arguments.length < 2 || typeof e != "string" ? (o = t, t = e, e = null) : o = arguments[2], gt(e) ? (n = rt.call(e, "c"), s = rt.call(e, "e"), r = rt.call(e, "w")) : (n = r = !0, s = !1), a = { value: t, configurable: n, enumerable: s, writable: r }, o ? Xs(Ks(o), a) : a;
};
_l.gs = function(e, t, n) {
  var s, r, o, a;
  return typeof e != "string" ? (o = n, n = t, t = e, e = null) : o = arguments[3], gt(t) ? cs(t) ? gt(n) ? cs(n) || (o = n, n = void 0) : n = void 0 : (o = t, t = n = void 0) : t = void 0, gt(e) ? (s = rt.call(e, "c"), r = rt.call(e, "e")) : (s = !0, r = !1), a = { get: t, set: n, configurable: s, enumerable: r }, o ? Xs(Ks(o), a) : a;
};
var wl = qs.exports, xl = function(e) {
  if (typeof e != "function")
    throw new TypeError(e + " is not a function");
  return e;
};
(function(e, t) {
  var n = wl, s = xl, r = Function.prototype.apply, o = Function.prototype.call, a = Object.create, i = Object.defineProperty, l = Object.defineProperties, u = Object.prototype.hasOwnProperty, f = { configurable: !0, enumerable: !1, writable: !0 }, m, p, h, d, c, x, $;
  m = function(E, _) {
    var C;
    return s(_), u.call(this, "__ee__") ? C = this.__ee__ : (C = f.value = a(null), i(this, "__ee__", f), f.value = null), C[E] ? typeof C[E] == "object" ? C[E].push(_) : C[E] = [C[E], _] : C[E] = _, this;
  }, p = function(E, _) {
    var C, N;
    return s(_), N = this, m.call(this, E, C = function() {
      h.call(N, E, C), r.call(_, this, arguments);
    }), C.__eeOnceListener__ = _, this;
  }, h = function(E, _) {
    var C, N, P, w;
    if (s(_), !u.call(this, "__ee__"))
      return this;
    if (C = this.__ee__, !C[E])
      return this;
    if (N = C[E], typeof N == "object")
      for (w = 0; P = N[w]; ++w)
        (P === _ || P.__eeOnceListener__ === _) && (N.length === 2 ? C[E] = N[w ? 0 : 1] : N.splice(w, 1));
    else
      (N === _ || N.__eeOnceListener__ === _) && delete C[E];
    return this;
  }, d = function(E) {
    var _, C, N, P, w;
    if (u.call(this, "__ee__") && (P = this.__ee__[E], !!P))
      if (typeof P == "object") {
        for (C = arguments.length, w = new Array(C - 1), _ = 1; _ < C; ++_)
          w[_ - 1] = arguments[_];
        for (P = P.slice(), _ = 0; N = P[_]; ++_)
          r.call(N, this, w);
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
            for (C = arguments.length, w = new Array(C - 1), _ = 1; _ < C; ++_)
              w[_ - 1] = arguments[_];
            r.call(P, this, w);
        }
  }, c = {
    on: m,
    once: p,
    off: h,
    emit: d
  }, x = {
    on: n(m),
    once: n(p),
    off: n(h),
    emit: n(d)
  }, $ = l({}, x), e.exports = t = function(E) {
    return E == null ? a($) : l(Object(E), x);
  }, t.methods = c;
})(en, en.exports);
var El = en.exports;
const kl = /* @__PURE__ */ cn(El), oe = kl(), $l = { class: "w-100 d-flex flex-row align-items-center" }, Ze = /* @__PURE__ */ L({
  __name: "drag-box",
  props: {
    visible: { type: Boolean },
    initialValue: {}
  },
  emits: ["update:visible", "close"],
  setup(e, { expose: t, emit: n }) {
    const s = e, r = b(), o = b(), a = b(), { position: i } = yn(o, {
      initialValue: s.initialValue
    }), { style: l } = bn(r, i);
    function u(d) {
      i.value = d;
    }
    t({
      setPosition: u
    }), he(() => {
      oe.on(re.VIEW_CLICK, f), document.addEventListener("keydown", h);
    }), rn(() => {
      oe.off(re.VIEW_CLICK, f), document.removeEventListener("keydown", h);
    });
    function f(d) {
      m(d) && p();
    }
    function m(d) {
      const c = d.target;
      return !(!r.value || !a.value || a.value.contains(c) || r.value.contains(c));
    }
    function p() {
      n("update:visible", !1), n("close");
    }
    function h(d) {
      d.code === "Escape" && p();
    }
    return (d, c) => (S(), D(Q, null, [
      y("div", {
        ref_key: "referenceRef",
        ref: a,
        onMousedown: c[0] || (c[0] = ae(() => {
        }, ["prevent"]))
      }, [
        Re(d.$slots, "reference")
      ], 544),
      (S(), J(ys, { to: "body" }, [
        Pe(y("div", {
          ref_key: "boxRef",
          ref: r,
          class: "demotestname card shadow brag-box user-select-none z-2",
          style: kt([{ position: "fixed" }, v(l)]),
          onMousedown: c[1] || (c[1] = ae(() => {
          }, ["prevent"]))
        }, [
          y("div", $l, [
            y("div", {
              ref_key: "dragRef",
              ref: o,
              class: "w-100",
              style: { height: "40px", cursor: "move" }
            }, null, 512),
            y("span", {
              onClick: p,
              class: "btn iconfont icon-close fs-5"
            })
          ]),
          Re(d.$slots, "default")
        ], 36), [
          [De, d.visible]
        ])
      ]))
    ], 64));
  }
}), Sl = {
  install(e) {
    e.component("BarButton", ce), e.component("BarInput", vn), e.component("BarPopover", hi), e.component("BarSearch", gn), e.component("BarWrapper", Gs), e.component("BarWrapperItem", Fi), e.component("BarWrapperGroup", Ge), e.component("DragBox", Ze);
  }
};
function Cl(e) {
  return e.replaceAll(/[&]/gi, "&amp;").replaceAll(/[<]/gi, "&lt;").replaceAll(/[>]/gi, "&gt;");
}
function Rl(e, t) {
  return t ? `<audio src="${e.src}">${t}</audio>` : `<audio src="${e.src}"/>`;
}
function Tl(e) {
  return e.time ? `<break time="${e.time}"/>` : e.strength ? `<break strength="${e.strength}"/>` : "<break/>";
}
function Ol(e, t) {
  return e.level ? `<emphasis level="${e.level}">${t}</emphasis>` : `<emphasis>${t}</emphasis>`;
}
function Pl(e, t) {
  if (!e.style)
    return t;
  const n = e.role ? ` role="${e.role}"` : "", s = e.styledegree ? ` styledegree="${e.styledegree}"` : "";
  return `<mstts:express-as style="${e.style}"${n}${s}>${t}</mstts:express-as>`;
}
function Dl(e) {
  if (!e.src)
    return "";
  const t = e.volume ? ` volume="${e.volume}"` : "", n = e.fadein ? ` fadein="${e.fadein}"` : "", s = e.fadeout ? ` fadeout="${e.fadeout}"` : "";
  return `<mstts:backgroundaudio src="${e.src}"${t}${n}${s}/>`;
}
function Nl(e) {
  return !e.attrType || !e.value ? "" : `<mstts:silence type="${e.attrType}" value="${e.value}"/>`;
}
function Il(e, t) {
  return `<p>${t}</p>`;
}
function Vl(e, t) {
  const n = e.alphabet ? `alphabet="${e.alphabet}"` : "";
  return `<phoneme ph="${e.ph}"${n}>${t}</phoneme>`;
}
function Al(e, t) {
  if (!e.contour && !e.pitch && !e.range && !e.rate && !e.volume)
    return t;
  const n = e.contour ? ` contour="${e.contour}"` : "", s = e.pitch ? ` pitch="${e.pitch}"` : "", r = e.range ? ` range="${e.range}"` : "", o = e.volume ? ` volume="${e.volume}"` : "", a = e.rate ? ` rate="${e.rate}"` : "";
  return `<prosody${n}${s}${r}${o}${a}>${t}</prosody>`;
}
function Ll(e, t) {
  const n = e.interpretAs ? ` interpret-as="${e.interpretAs}"` : "", s = e.format ? ` format="${e.format}"` : "", r = e.detail ? ` detail="${e.detail}"` : "";
  return `<say-as${n}${s}${r}>${t}</say-as>`;
}
function Ml(e, t) {
  return `<s>${t}</s>`;
}
function jl(e, t) {
  return `<sub alias="${e.alias}">${t}</sub>`;
}
function Fl(e, t) {
  const n = e.effect ? ` effect="${e.effect}"` : "";
  return `<voice name="${e.name}${n}">${t}</voice>`;
}
function Hl(e, t) {
  return `<speak version="${e.version}" xml:lang="${e.xmlLang}" xmlns="${e.xmlns}" xmlns:mstts="${e["xmlns:mstts"]}" xmlns:emo="${e["xmlns:emo"]}">${t}</speak>`;
}
function Js(e) {
  if (ot.isText(e))
    return Cl(e.text.trim());
  if (Er.isElement(e)) {
    const t = e.children.map((s) => Js(s)).join("");
    switch (A.getNodeType(e)) {
      case "paragraph":
        return `<p>${t}</p>`;
      case "ssml-speak":
        return Hl(e, t);
      case "ssml-mstts:backgroundaudio":
        return Dl(e);
      case "ssml-audio":
        return Rl(e, t);
      case "ssml-break":
        return Tl(e);
      case "ssml-emphasis":
        return Ol(e, t);
      case "ssml-mstts:express-as":
        return Pl(e, t);
      case "ssml-p":
        return Il(e, t);
      case "ssml-phoneme":
        return Vl(e, t);
      case "ssml-prosody":
        return Al(e, t);
      case "ssml-s":
        return Ml(e, t);
      case "ssml-say-as":
        return Ll(e, t);
      case "ssml-sub":
        return jl(e, t);
      case "ssml-voice":
        return Fl(e, t);
      case "ssml-mstts:silence":
        return Nl(e);
      default:
        return t;
    }
  }
  return "";
}
function Ul(e, t) {
  const n = { type: "ssml-voice", remark: "", name: t.name, children: [] }, s = Qs(), r = {
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
    if (!(ot.isText(u) && !u.text.trim()))
      if (ot.isText(u)) {
        i ?? (i = a()), i.pushNode(u);
        continue;
      } else if (K.isVoid(e, u)) {
        i = void 0, r.children.push(u);
        continue;
      } else {
        const f = A.findPath(e, u), [m] = K.nodes(e, {
          at: f,
          mode: "lowest",
          voids: !1,
          match: (p) => A.checkNodeType(p, "ssml-prosody")
        });
        if (m) {
          i = void 0, r.children.push(u);
          continue;
        } else
          i ?? (i = a()), i.pushNode(u);
      }
  }
  return n;
}
function Qs() {
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
function Bl() {
  const { rootVoice: e, rootExpressAs: t } = Ue(), n = { ...e, children: [] }, s = Qs(), r = { ...t, children: [] };
  n.children.push(...s), n.children.push(r);
  function o(a) {
    r.children.push(a);
  }
  return { voice: n, pushNode: o };
}
function ds(e) {
  const { rootProsody: t } = Ue(), n = { ...t, children: [] };
  e(n);
  function s(r) {
    n.children.push(r);
  }
  return { prosody: n, pushNode: s };
}
function zl() {
  return {
    type: "ssml-break",
    time: "200ms",
    children: [{ text: "" }],
    remark: "paragraphBreak"
  };
}
function Wl(e) {
  const t = e.children.filter((n) => A.checkNodeType(n, "paragraph")).filter((n) => !!on.string(n).trim()).map((n, s, r) => {
    const a = n.children;
    return s < r.length - 1 ? a.concat([zl()]) : a;
  });
  return [].concat(...t);
}
function Gl(e) {
  const t = Wl(e), n = [];
  let s, r;
  for (let o = 0; o < t.length; o++) {
    const a = t[o];
    if (!(ot.isText(a) && !a.text.trim())) {
      if (A.checkNodeType(a, "custom-management")) {
        s && (n.push(s.voice), s = void 0, r = void 0), n.push(Ul(e, a));
        continue;
      }
      if (s ?? (s = Bl()), ot.isText(a)) {
        r ?? (r = ds(s.pushNode)), r.pushNode(a);
        continue;
      } else if (K.isVoid(e, a)) {
        r = void 0, s.pushNode(a);
        continue;
      } else {
        const i = A.findPath(e, a), [l] = K.nodes(e, {
          at: i,
          mode: "lowest",
          voids: !1,
          match: (u) => A.checkNodeType(u, "ssml-prosody")
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
function wn() {
  const { editor: e } = ue();
  if (!e)
    throw Error("没有找到 editor 对象");
  const { rootSpeak: t, rootBackgroundaudio: n } = Ue(), s = { ...t, children: [] }, r = { ...n };
  return s.children.push(r, ...Gl(e)), Js(s);
}
const ql = (e) => ($t("data-v-f485fb08"), e = e(), St(), e), Yl = { class: "play-menu-icon d-flex justify-content-center align-items-center" }, Xl = {
  key: 0,
  class: "fs-3 iconfont-moyin moyin-icon_play"
}, Kl = {
  key: 2,
  class: "iconfont icon-pause"
}, Jl = /* @__PURE__ */ ql(() => /* @__PURE__ */ y("div", {
  class: "fw-normal",
  style: { "font-size": "0.85rem" }
}, "24K高清音质", -1)), Ql = /* @__PURE__ */ L({
  __name: "play-menu",
  props: {
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = Pt(), { audioPlayer: n } = t, s = n.playState, r = n.loadState, o = ue(), { globalEditConfig: a } = o;
    async function i() {
      if (s.value === "playing") {
        n.pause();
        return;
      }
      try {
        const l = wn(), u = await a.tryPlay.play(l);
        await n.load(u.src), n.play();
      } catch {
        n.pause();
      }
    }
    return (l, u) => (S(), D("div", {
      class: ve(["play-menu px-2 py-1", { disabled: l.disabled }]),
      onClick: u[0] || (u[0] = (f) => !l.disabled && i()),
      onMousedown: u[1] || (u[1] = ae(() => {
      }, ["prevent"]))
    }, [
      y("div", Yl, [
        v(r) === "complete" && v(s) === "paused" ? (S(), D("span", Xl)) : v(r) === "loading" ? (S(), J(v(an), {
          key: 1,
          class: "is-loading"
        }, {
          default: V(() => [
            g(v(Tr))
          ]),
          _: 1
        })) : (S(), D("span", Kl))
      ]),
      Jl
    ], 34));
  }
});
const Zs = /* @__PURE__ */ de(Ql, [["__scopeId", "data-v-f485fb08"]]);
class we {
  constructor(t) {
    W(this, "editor");
    this.editor = t;
  }
  getValue() {
    const { selection: t } = this.editor;
    return t == null ? "" : K.string(this.editor, t);
  }
  isDisabled() {
    const { selection: t } = this.editor;
    return t == null ? (this.editor.emit(z.ERROR, "未选中编辑器"), !0) : !1;
  }
}
class Zl extends we {
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
    if (ye.isCollapsed(t))
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
const er = /* @__PURE__ */ L({
  setup() {
    const {
      globalEditConfig: e
    } = ue(), t = q(), n = b([]), s = b(!1);
    function r() {
      s.value || (s.value = !0);
    }
    function o() {
      s.value && (s.value = !1);
    }
    async function a(i) {
      var u;
      if (t.value ?? (t.value = new Zl(i)), (u = t.value) != null && u.isDisabled())
        return;
      const l = t.value.getValue();
      if (l ? n.value = await e.pinyin.fetchData(l) : n.value = [], n.value.length == 0)
        return i.emit(z.ERROR, "选中的字符没有不是多音字");
      r();
    }
    return () => g(Ne, {
      visible: s.value,
      "onUpdate:visible": (i) => s.value = i,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => g(ce, {
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
        onMousedown: ae(() => {
        }, ["stop", "prevent"])
      }, [i]))])
    });
  }
});
class eu extends we {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t ? ye.isCollapsed(t) ? (this.editor.emit(z.ERROR, "请框选要连读的词或句子"), !0) : K.string(this.editor, t).length < 2 : !0;
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
const tr = /* @__PURE__ */ L({
  setup() {
    const e = q();
    function t(n) {
      e.value ?? (e.value = new eu(n)), !e.value.isDisabled() && e.value.exec();
    }
    return () => g(ce, {
      text: "连读",
      icon: "continuous",
      onClick: t
    }, null);
  }
}), tu = [
  { label: "重音", value: "z" },
  { label: "拖音", value: "t" },
  { label: "重音+拖音", value: "z+t" }
], nu = {
  z: { pitch: "x-high", rate: void 0 },
  t: { pitch: void 0, rate: "medium" },
  "z+t": { pitch: "x-high", rate: "medium" }
};
class su extends we {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return !t || t == null ? !0 : ye.isCollapsed(t) ? (this.editor.emit(z.ERROR, "请框选词或句子"), !0) : !1;
  }
  exec(t) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const n = this.getValue();
    if (n == null)
      return;
    const { pitch: s, rate: r } = nu[t.value], o = {
      type: "ssml-prosody",
      remark: t.label,
      pitch: s,
      rate: r,
      children: [{ text: n }]
    };
    this.editor.insertNode(o);
  }
}
const nr = /* @__PURE__ */ L({
  setup() {
    const e = q(), t = b(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    function r(o) {
      e.value ?? (e.value = new su(o)), !e.value.isDisabled() && n();
    }
    return () => g(Ne, {
      visible: t.value,
      "onUpdate:visible": (o) => t.value = o,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => g(ce, {
        text: "重音",
        icon: "read",
        onClick: r
      }, null),
      default: () => g("div", {
        class: "d-flex flex-column",
        onMousedown: ae(() => {
        }, ["stop", "prevent"])
      }, [tu.map(({
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
        onMousedown: ae(() => {
        }, ["stop", "prevent"])
      }, [o]))])
    });
  }
});
class ru extends we {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    if (!t)
      return !0;
    if (ye.isCollapsed(t))
      return this.editor.emit(z.ERROR, "请框选纯数字"), !0;
    const n = K.string(this.editor, t);
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
const ou = [{
  value: "cardinal",
  label: "读数值"
}, {
  value: "characters",
  label: "读数字"
}, {
  value: "telephone",
  label: "读手机号"
}], sr = /* @__PURE__ */ L({
  setup() {
    const e = q(), t = b(!1);
    function n() {
      t.value = !t.value;
    }
    function s(r) {
      e.value ?? (e.value = new ru(r)), !e.value.isDisabled() && n();
    }
    return () => g(Ne, {
      visible: t.value,
      "onUpdate:visible": (r) => t.value = r,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => g(ce, {
        text: "数字符号",
        icon: "digital",
        onClick: s
      }, null),
      default: () => g("div", {
        class: "d-flex flex-column"
      }, [ou.map(({
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
        onMousedown: ae(() => {
        }, ["stop", "prevent"])
      }, [r]))])
    });
  }
});
class au extends we {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t == null ? !0 : ye.isCollapsed(t) ? (this.editor.emit(z.ERROR, "请框选要设置别名的词或句子"), !0) : !1;
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
const rr = /* @__PURE__ */ L({
  setup() {
    const e = q(), t = b(), n = b(!1);
    function s() {
      n.value || (n.value = !0);
    }
    function r() {
      n.value && (n.value = !1);
    }
    async function o(i) {
      var l;
      e.value ?? (e.value = new au(i)), !e.value.isDisabled() && (s(), (l = t.value) == null || l.focus());
    }
    function a(i) {
      var l;
      r(), i && ((l = e.value) == null || l.exec({
        value: i,
        label: i
      }));
    }
    return () => g(Ne, {
      visible: n.value,
      "onUpdate:visible": (i) => n.value = i,
      trigger: "contextmenu",
      placement: "right-end",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => g(ce, {
        text: "别名",
        icon: "alias",
        onClick: o
      }, null),
      default: () => g(vn, {
        ref: t,
        onSubmit: a
      }, null)
    });
  }
});
class iu extends we {
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
    if (ye.isCollapsed(t))
      return this.editor.emit(z.ERROR, "请框选英文单词"), !0;
    const n = K.string(this.editor, t);
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
const or = /* @__PURE__ */ L({
  setup() {
    const {
      globalEditConfig: e
    } = ue(), t = q(), n = b([]), s = b(!1);
    function r() {
      s.value || (s.value = !0);
    }
    function o() {
      s.value && (s.value = !1);
    }
    async function a(i) {
      if (t.value ?? (t.value = new iu(i)), Ko(i), t.value.isDisabled())
        return;
      const l = t.value.getValue();
      if (l) {
        if (n.value = await e.english.fetchData(l), n.value.length <= 0)
          return i.emit(z.ERROR, "找不到单词的音标");
        r();
      }
    }
    return () => g(Ne, {
      visible: s.value,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => g(ce, {
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
        onMousedown: ae(() => {
        }, ["stop", "prevent"])
      }, [i]))])
    });
  }
});
class lu extends we {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t == null ? !0 : ye.isCollapsed(t) ? (this.editor.emit(z.ERROR, "请框选要变速的句子"), !0) : !1;
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
function F(e) {
  return `${((e - 1) * 100).toFixed(0)}%`;
}
const uu = [
  { value: F(0.5), label: "0.5x" },
  { value: F(0.55), label: "0.55x" },
  { value: F(0.6), label: "0.6x" },
  { value: F(0.65), label: "0.65x" },
  { value: F(0.7), label: "0.7x" },
  { value: F(0.75), label: "0.75x" },
  { value: F(0.8), label: "0.8x" },
  { value: F(0.85), label: "0.85x" },
  { value: F(0.9), label: "0.9x" },
  { value: F(0.95), label: "0.95x" },
  { value: F(1), label: "1x" },
  { value: F(1.05), label: "1.05x" },
  { value: F(1.1), label: "1.1x" },
  { value: F(1.15), label: "1.15x" },
  { value: F(1.2), label: "1.2x" },
  { value: F(1.25), label: "1.25x" },
  { value: F(1.3), label: "1.3x" },
  { value: F(1.35), label: "1.35x" },
  { value: F(1.4), label: "1.4x" },
  { value: F(1.45), label: "1.45x" },
  { value: F(1.5), label: "1.5x" },
  { value: F(1.55), label: "1.55x" },
  { value: F(1.6), label: "1.6x" },
  { value: F(1.65), label: "1.65x" },
  { value: F(1.7), label: "1.7x" },
  { value: F(1.75), label: "1.75x" },
  { value: F(1.8), label: "1.8x" },
  { value: F(1.85), label: "1.85x" },
  { value: F(1.9), label: "1.9x" },
  { value: F(1.95), label: "1.95x" },
  { value: F(2), label: "2x" }
], ar = /* @__PURE__ */ L({
  setup() {
    const e = q(), t = b(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    async function r(o) {
      e.value ?? (e.value = new lu(o)), !e.value.isDisabled() && n();
    }
    return () => g(Ne, {
      style: {
        padding: "0px"
      },
      visible: t.value,
      "onUpdate:visible": (o) => t.value = o,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => g(ce, {
        text: "局部变速",
        icon: "changespeed",
        onClick: r
      }, null),
      default: () => g("div", {
        class: "d-flex flex-column overflow-x-hidden overflow-y-scroll",
        style: "height:15rem"
      }, [uu.map(({
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
        onMousedown: ae(() => {
        }, ["stop", "prevent"])
      }, [o]))])
    });
  }
});
class cu extends we {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t ? ye.isExpanded(t) ? (this.editor.emit(z.ERROR, "不能框选文本"), !0) : !1 : !0;
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
const du = [{
  value: "weak",
  label: "短"
}, {
  value: "medium",
  label: "中"
}, {
  value: "strong",
  label: "长"
}], ir = /* @__PURE__ */ L({
  setup() {
    const e = q(), t = b(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    function r(o) {
      e.value ?? (e.value = new cu(o)), !e.value.isDisabled() && n();
    }
    return () => g(Ne, {
      visible: t.value,
      "onUpdate:visible": (o) => t.value = o,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => g(ce, {
        text: "停顿调节",
        icon: "rhythm",
        onClick: r
      }, null),
      default: () => g("div", {
        class: "d-flex flex-column"
      }, [du.map(({
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
        onMousedown: ae(() => {
        }, ["stop", "prevent"])
      }, [o]))])
    });
  }
});
class fu extends we {
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
    return t ? ye.isExpanded(t) ? (this.editor.emit(z.ERROR, "不能框选文字"), !0) : !1 : !0;
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
const lr = /* @__PURE__ */ L({
  __name: "special-menu",
  setup(e) {
    const t = b(), n = b(), s = q(), { globalEditConfig: r } = ue(), { special: o } = r, a = b(!1), { x: i, y: l, height: u } = lt(n), f = (p) => {
      s.value ?? (s.value = new fu(p)), !s.value.isDisabled() && (t.value.setPosition({
        x: i.value - 200,
        y: l.value + u.value
      }), a.value = !0);
    };
    function m(p) {
      var h;
      (h = s.value) == null || h.restoreSelection(), s.value && !s.value.isDisabled() && s.value.exec(p), a.value = !1;
    }
    return (p, h) => (S(), J(v(Ze), {
      ref_key: "dragRef",
      ref: t,
      visible: a.value,
      "onUpdate:visible": h[0] || (h[0] = (d) => a.value = d)
    }, {
      reference: V(() => [
        g(v(ce), {
          ref_key: "menuRef",
          ref: n,
          text: "音效",
          icon: "special",
          onClick: f
        }, null, 512)
      ]),
      default: V(() => [
        g(v(gn), {
          menus: v(o).menus,
          fetchScene: v(o).fetchScene,
          fetchStyle: v(o).fetchStyle,
          fetchData: v(o).fetchData,
          onSubmit: m
        }, null, 8, ["menus", "fetchScene", "fetchStyle", "fetchData"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
class pu extends we {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t ? ye.isExpanded(t) ? (this.editor.emit(z.ERROR, "不能框选文本"), !0) : !1 : !0;
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
const mu = [{
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
}], ur = /* @__PURE__ */ L({
  setup() {
    const e = q(), t = b(!1), n = b();
    function s() {
      t.value || (t.value = !0);
    }
    function r() {
      t.value && (t.value = !1);
    }
    function o(i) {
      var l;
      e.value ?? (e.value = new pu(i)), !e.value.isDisabled() && (s(), (l = n.value) == null || l.focus());
    }
    function a(i) {
      var l;
      r(), i && ((l = e.value) == null || l.exec({
        value: i,
        label: i
      }));
    }
    return () => g(Ne, {
      visible: t.value,
      "onUpdate:visible": (i) => t.value = i,
      trigger: "contextmenu",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => g(ce, {
        text: "插入静音",
        icon: "mute",
        onClick: o
      }, null),
      default: () => g("div", {
        class: "d-flex flex-column"
      }, [mu.map(({
        value: i,
        label: l
      }) => g("div", {
        key: i,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => a(i),
        onMousedown: ae(() => {
        }, ["stop", "prevent"])
      }, [l])), g(vn, {
        type: "text",
        ref: n,
        onSubmit: a
      }, null)])
    });
  }
}), cr = /* @__PURE__ */ L({
  __name: "bgm-menu",
  setup(e) {
    const t = b(), n = b(), s = q(), { globalEditConfig: r } = ue(), { bgm: o } = r, a = b(!1), { x: i, y: l, height: u } = lt(n), f = async (p) => {
      const h = {
        x: i.value - 300,
        y: l.value + u.value
      };
      s.value = p, t.value.setPosition(h), a.value = !0;
    };
    function m(p) {
      const { rootBackgroundaudio: h } = Ue();
      h.src = p.value, h.remark = p.label, a.value = !1;
    }
    return (p, h) => (S(), J(v(Ze), {
      ref_key: "dragRef",
      ref: t,
      visible: a.value,
      "onUpdate:visible": h[0] || (h[0] = (d) => a.value = d)
    }, {
      reference: V(() => [
        g(v(ce), {
          ref_key: "menuRef",
          ref: n,
          text: "配乐",
          icon: "bgm",
          onClick: f
        }, null, 512)
      ]),
      default: V(() => [
        g(v(gn), {
          menus: v(o).menus,
          fetchScene: v(o).fetchScene,
          fetchStyle: v(o).fetchStyle,
          fetchData: v(o).fetchData,
          onSubmit: m
        }, null, 8, ["menus", "fetchScene", "fetchStyle", "fetchData"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), dr = /* @__PURE__ */ L({
  __name: "sensitive-menu",
  setup(e) {
    const t = b(), n = b(), s = q(), r = b(!1), { x: o, y: a, height: i } = lt(n), l = (u) => {
      s.value = u, t.value.setPosition({
        x: o.value - 200,
        y: a.value + i.value
      }), r.value = !0;
    };
    return (u, f) => (S(), J(v(Ze), {
      ref_key: "dragRef",
      ref: t,
      visible: r.value,
      "onUpdate:visible": f[0] || (f[0] = (m) => r.value = m)
    }, {
      reference: V(() => [
        g(v(ce), {
          ref_key: "menuRef",
          ref: n,
          text: "敏感词",
          icon: "sensitive",
          onClick: l
        }, null, 512)
      ]),
      default: V(() => [
        g(dr)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
const vu = {
  class: "select-list",
  style: { width: "120px" }
}, hu = {
  class: "text-center d-flex flex-column justify-content-center fs-6",
  style: { height: "60px" }
}, yu = ["onClick"], gu = /* @__PURE__ */ L({
  __name: "select-list",
  props: {
    modelValue: {},
    dataList: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: n }) {
    const s = e, r = b();
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
    }), (i, l) => (S(), D("div", vu, [
      y("div", hu, [
        Re(i.$slots, "default", {}, void 0, !0)
      ]),
      y("ul", {
        ref_key: "listRef",
        ref: r,
        class: "text-center w-100 border-start border-top border-bottom border-secondary-subtle overflow-y-auto overflow-x-hidden scrollbar-none",
        style: { height: "180px" }
      }, [
        (S(!0), D(Q, null, le(i.dataList, (u, f) => (S(), D("li", {
          class: ve(["clickable select-item py-1", { activate: u.value === i.modelValue }]),
          key: f,
          onClick: (m) => o(u)
        }, U(u.label), 11, yu))), 128))
      ], 512)
    ]));
  }
});
const We = /* @__PURE__ */ de(gu, [["__scopeId", "data-v-e0f0259e"]]), bu = { class: "position-relative" }, _u = { class: "position-absolute top-0 end-0" }, wu = /* @__PURE__ */ y("li", null, [
  /* @__PURE__ */ y("span", { class: "text-nowrap" }, "近期使用:")
], -1), xu = ["onClick"], Eu = /* @__PURE__ */ y("span", { class: "my-3" }, "类型", -1), ku = /* @__PURE__ */ y("span", { class: "my-3" }, "配音师", -1), $u = /* @__PURE__ */ y("span", { class: "my-3" }, "角色", -1), Su = /* @__PURE__ */ y("span", { class: "my-3" }, "风格", -1), Cu = /* @__PURE__ */ y("span", { class: "my-3" }, "语速", -1), Ru = /* @__PURE__ */ y("span", { class: "my-3" }, "语调", -1), Tu = { class: "position-absolute bottom-0 end-0 d-flex flex-row justify-content-end me-4 mb-3" }, Ou = /* @__PURE__ */ L({
  __name: "management-content",
  emits: ["submit"],
  setup(e, { emit: t }) {
    const { globalEditConfig: n } = ue(), { tryPlay: s, management: r } = n, o = b(), a = b(!1), i = b(""), l = Us(), { contentData: u } = Ns(l), f = q([]), m = b([]), p = b([{ label: "全部类型", value: "" }, ...s.category]), h = b([]), d = b([]), c = b([]), x = b(uo()), $ = b(co()), E = Nt(o);
    he(async () => {
      u.value.category = p.value[0].value, await C(), await w();
    }), ee(E, (R) => {
      R || (i.value = "", a.value = !1);
    });
    async function _(R) {
      u.value.category = R, await C();
    }
    async function C() {
      const R = await s.fetchData({ ...mn(), ...u.value });
      f.value = R, h.value = R.map((I) => ({ label: I.displayName, value: I.name })), R.length > 0 && (d.value = R[0].roles, c.value = R[0].styles, u.value.name = R[0].name), d.value.length > 0 && (u.value.role = d.value[0].value), c.value.length > 0 && (u.value.style = c.value[0].value);
    }
    function N(R) {
      const I = f.value.find((M) => M.name === R);
      I && (d.value = I.roles, c.value = I.styles, d.value.length > 0 && (u.value.role = d.value[0].value), c.value.length > 0 && (u.value.style = c.value[0].value));
    }
    function P() {
      var $e, te, ut, Y;
      const R = (($e = h.value.find((xe) => xe.value === u.value.name)) == null ? void 0 : $e.label) || "", I = ((te = d.value.find((xe) => xe.value === u.value.role)) == null ? void 0 : te.label) || "", M = ((ut = c.value.find((xe) => xe.value === u.value.style)) == null ? void 0 : ut.label) || "", Te = ((Y = x.value.find((xe) => xe.value === u.value.speed)) == null ? void 0 : Y.label) || "", Ie = {
        category: u.value.category,
        name: u.value.name,
        label: `${R}|${I}|${M}|${Te}`,
        value: u.value.name,
        role: u.value.role,
        style: u.value.style,
        speed: po(Number(u.value.speed)),
        pitch: fo(Number(u.value.pitch))
      };
      t("submit", Ie), j(Ie);
    }
    async function w() {
      try {
        m.value = await r.fetchRecentUsage();
      } catch (R) {
        oe.emit(re.ERROR, `${R}`, R);
      }
    }
    async function j(R) {
      try {
        const I = { ...u.value, label: R.label, id: "" }, M = await r.recordRecentUsage(I);
        m.value.push(M);
      } catch (I) {
        oe.emit(re.ERROR, `${I}`, I);
      }
    }
    function B(R) {
      u.value.category = R.category, u.value.name = R.name, u.value.pitch = R.pitch, u.value.role = R.role, u.value.speed = R.speed, u.value.style = R.style, P();
    }
    async function T(R) {
      try {
        const I = m.value[R];
        await r.deleteRecentUsage(I.id), m.value.splice(R, 1);
      } catch (I) {
        oe.emit(re.ERROR, `${I}`, I);
      }
    }
    async function O() {
      try {
        await r.deleteRecentUsage(), m.value = [];
      } catch (R) {
        oe.emit(re.ERROR, `${R}`, R);
      }
    }
    return (R, I) => (S(), D("div", {
      ref_key: "boxRef",
      ref: o,
      style: { width: "600px", height: "360px" },
      class: "position-relative px-2 pb-2"
    }, [
      g(v(Ct), {
        onSubmit: ae(C, ["prevent"])
      }, {
        default: V(() => [
          g(v(Rt), {
            modelValue: i.value,
            "onUpdate:modelValue": I[0] || (I[0] = (M) => i.value = M),
            placeholder: "请输入名称快速查找配音师"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["onSubmit"]),
      y("div", bu, [
        y("div", _u, [
          g(v(pe), {
            size: "small",
            icon: v(Or),
            onClick: I[1] || (I[1] = () => a.value = !a.value)
          }, null, 8, ["icon"])
        ]),
        y("ul", {
          class: ve(["d-flex flex-row row-gap-1 column-gap-2 overflow-x-hidden", { "flex-wrap": a.value }])
        }, [
          wu,
          (S(!0), D(Q, null, le(m.value, (M, Te) => (S(), D("li", {
            class: "btn m-0 p-0",
            onClick: (Ie) => B(M),
            key: Te
          }, [
            g(v(gs), {
              type: "info",
              onClose: (Ie) => T(Te),
              closable: ""
            }, {
              default: V(() => [
                ne(U(M.label), 1)
              ]),
              _: 2
            }, 1032, ["onClose"])
          ], 8, xu))), 128))
        ], 2),
        Pe(y("div", {
          class: ve({ "d-flex flex-row": !a.value })
        }, [
          g(We, {
            "onUpdate:modelValue": [
              _,
              I[2] || (I[2] = (M) => v(u).category = M)
            ],
            modelValue: v(u).category,
            dataList: p.value
          }, {
            default: V(() => [
              Eu
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          g(We, {
            "onUpdate:modelValue": [
              N,
              I[3] || (I[3] = (M) => v(u).name = M)
            ],
            modelValue: v(u).name,
            dataList: h.value
          }, {
            default: V(() => [
              ku
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          g(We, {
            modelValue: v(u).role,
            "onUpdate:modelValue": I[4] || (I[4] = (M) => v(u).role = M),
            dataList: d.value
          }, {
            default: V(() => [
              $u
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          g(We, {
            modelValue: v(u).style,
            "onUpdate:modelValue": I[5] || (I[5] = (M) => v(u).style = M),
            dataList: c.value
          }, {
            default: V(() => [
              Su
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          g(We, {
            modelValue: v(u).speed,
            "onUpdate:modelValue": I[6] || (I[6] = (M) => v(u).speed = M),
            dataList: x.value
          }, {
            default: V(() => [
              Cu
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          g(We, {
            modelValue: v(u).pitch,
            "onUpdate:modelValue": I[7] || (I[7] = (M) => v(u).pitch = M),
            dataList: $.value
          }, {
            default: V(() => [
              Ru
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"])
        ], 2), [
          [De, !a.value]
        ])
      ]),
      y("div", Tu, [
        Pe(g(v(pe), {
          onClick: P,
          type: "primary"
        }, {
          default: V(() => [
            ne("确定")
          ]),
          _: 1
        }, 512), [
          [De, !a.value]
        ]),
        Pe(g(v(pe), {
          onClick: O,
          type: "primary"
        }, {
          default: V(() => [
            ne("全部清空")
          ]),
          _: 1
        }, 512), [
          [De, a.value]
        ])
      ])
    ], 512));
  }
});
class fs extends we {
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
    if (A.getSelectedNodeByType(this.editor, "custom-management"))
      return !1;
    if (ye.isCollapsed(n))
      return this.editor.emit(z.ERROR, "请框选句子"), !0;
    const [s] = K.node(this.editor, n), r = this.editor.getParentNode(s);
    return !r || !A.checkNodeType(r, "paragraph") ? (this.editor.emit(z.ERROR, "多人配音需要在最外层使用"), !0) : !1;
  }
  exec(n) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const s = this.getValue();
    if (s == null)
      return;
    const r = A.getSelectedNodeByType(this.editor, "custom-management");
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
          at: A.findPath(this.editor, r)
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
const fr = /* @__PURE__ */ L({
  __name: "management-menu",
  setup(e) {
    const t = b(), n = b(), s = b(!1), r = q(), o = Us(), { contentData: a } = Ns(o), { x: i, y: l, height: u } = lt(n);
    he(() => {
      oe.on(re.EDITOR_CREATED, (d) => {
        d.on(z.SSML_ELEMENT_CLICK, (c, x) => {
          var $;
          if (x.type === "custom-management") {
            r.value ?? (r.value = new fs(c));
            const _ = (($ = x.custom) == null ? void 0 : $.contentData) || {};
            _ && (a.value.category = _.category, a.value.name = _.name, a.value.pitch = _.pitch, a.value.role = _.role, a.value.speed = _.speed, a.value.style = _.style), setTimeout(() => {
              f();
            }, 200);
          }
        });
      });
    });
    function f() {
      var c;
      const d = {
        x: i.value - 200,
        y: l.value + u.value
      };
      (c = t.value) == null || c.setPosition(d), s.value = !0;
    }
    function m() {
      s.value = !1;
    }
    function p(d) {
      r.value ?? (r.value = new fs(d)), !r.value.isDisabled() && f();
    }
    function h(d) {
      var c;
      r.value && !r.value.isDisabled() && (r.value.contentData = { ...a.value }, (c = r.value) == null || c.exec(d)), m();
    }
    return (d, c) => (S(), J(v(Ze), {
      ref_key: "dragRef",
      ref: t,
      visible: s.value,
      "onUpdate:visible": c[0] || (c[0] = (x) => s.value = x)
    }, {
      reference: V(() => [
        g(v(ce), {
          ref_key: "menuRef",
          ref: n,
          text: "多人配音",
          icon: "management",
          onClick: p
        }, null, 512)
      ]),
      default: V(() => [
        g(Ou, { onSubmit: h })
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Pu = { class: "speaker-head" }, Du = ["src"], Nu = { class: "speaker-name" }, Iu = /* @__PURE__ */ L({
  __name: "speaker-item",
  props: {
    label: {},
    value: {},
    avatar: {},
    activated: { type: Boolean }
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => (S(), D("div", {
      class: "speaker-item",
      onClick: n[0] || (n[0] = (s) => t.$emit("click", t.value || ""))
    }, [
      y("div", Pu, [
        y("img", {
          src: t.avatar || v(it)(),
          class: ve([{ "border border-warning": t.activated }, "rounded-circle"]),
          style: { height: "40px" }
        }, null, 10, Du)
      ]),
      y("div", Nu, U(t.label), 1)
    ]));
  }
});
const Vu = /* @__PURE__ */ de(Iu, [["__scopeId", "data-v-b043c1a6"]]);
class Au {
  constructor() {
    W(this, "mediaRecorder", null);
    W(this, "isRecording", b(!1));
  }
  get recorderState() {
    return X(() => this.isRecording.value ? "recording" : "paused");
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
const Lu = { class: "d-flex flex-row justify-content-between border rounded-pill border-secondary my-3 py-1 px-2" }, Mu = {
  class: "text-secondary d-flex flex-row align-items-center",
  style: { "font-size": "0.5rem" }
}, ju = {
  key: 0,
  class: "iconfont icon-pause"
}, Fu = {
  key: 1,
  class: "iconfont icon-play"
}, Hu = /* @__PURE__ */ y("span", { class: "iconfont icon-delete" }, null, -1), Uu = [
  Hu
], Bu = {
  key: 1,
  style: { "font-size": "0.5rem" }
}, zu = /* @__PURE__ */ y("p", null, "选择需要转换的配音师", -1), Wu = {
  class: "speakers-container border rounded d-flex flex-row flex-wrap row-gap-1 column-gap-2 overflow-y-auto overflow-x-hidden",
  style: { height: "150px" }
}, Gu = ["disabled"], qu = /* @__PURE__ */ L({
  __name: "audio-upload",
  emits: ["submit"],
  setup(e, { expose: t, emit: n }) {
    const { globalEditConfig: s } = ue(), { audioUpload: r, transfer: o, fetchSpeaker: a, timeoutMilliseconds: i } = s.conversion, l = b(), u = b(), f = b(), m = b(!0), p = b([]), h = b(), d = q(), c = q(), x = new Hs(), { playState: $ } = x;
    let E;
    const _ = new Au(), C = new Yo("audio/*"), N = new Xo(60), { state: P } = N, { recorderState: w } = _, j = Nt(l), B = ms("reopen");
    ee(j, (Y) => {
      Y || T();
    }), he(async () => {
      p.value = await a();
    }), ee(j, (Y) => {
      Y || (m.value = !0, E == null || E.cancel());
    }), t({
      openInputFile: Te
    });
    function T() {
      m.value = !0, O();
    }
    function O() {
      x.pause(), u.value = void 0, f.value = void 0, h.value = void 0, d.value = void 0, c.value = void 0, E == null || E.cancel();
    }
    function R() {
      _.stop(), N.stop();
    }
    async function I() {
      E = new ns(6e4), N.start();
      try {
        E.startTimeout(), d.value = await _.start(E.token);
      } catch (Y) {
        oe.emit(re.ERROR, `${Y}`, Y);
      } finally {
        E.cancel(), N.stop();
      }
    }
    function M() {
      if ($.value === "playing")
        x.pause();
      else if (d.value) {
        const Y = window.URL.createObjectURL(d.value);
        x.load(Y), x.play();
      } else if (c.value) {
        const Y = window.URL.createObjectURL(c.value);
        x.load(Y), x.play();
      }
    }
    async function Te() {
      try {
        return c.value = await C.open(), m.value = !1, !0;
      } catch {
        return !1;
      }
    }
    async function Ie() {
      try {
        if (E = new ns(i), m.value && d.value)
          E.startTimeout(), u.value = await r(d.value, E.token);
        else if (!m.value && c.value)
          E.startTimeout(), u.value = await r(c.value, E.token);
        else
          throw new Error("请选则文件或实时录音");
      } catch (Y) {
        oe.emit(re.ERROR, `${Y}`, Y);
      }
    }
    async function $e(Y) {
      try {
        u.value ? (h.value = Y, f.value = await o({ audioId: u.value.id, speakerId: Y.id })) : oe.emit(re.ERROR, "请先上传音频文件");
      } catch (xe) {
        oe.emit(re.ERROR, `${xe}`, xe);
      }
    }
    function te() {
      f.value && h.value && (n("submit", { label: h.value.displayName, value: f.value.src }), T());
    }
    function ut() {
      E == null || E.cancel(), B == null || B();
    }
    return (Y, xe) => {
      var En, kn;
      return S(), D("div", {
        class: "audio-upload",
        ref_key: "boxRef",
        ref: l
      }, [
        y("div", Lu, [
          y("div", Mu, [
            d.value || c.value ? (S(), D("button", {
              key: 0,
              onClick: M,
              class: "btn btn-sm rounded-pill"
            }, [
              v($) === "playing" || v(w) === "recording" ? (S(), D("span", ju)) : (S(), D("span", Fu))
            ])) : Se("", !0),
            y("span", null, U(((En = c.value) == null ? void 0 : En.name) || ((kn = d.value) == null ? void 0 : kn.name)), 1)
          ]),
          y("div", null, [
            !u.value && (d.value || c.value) ? (S(), D("button", {
              key: 0,
              onClick: O,
              class: "btn btn-sm rounded-pill"
            }, Uu)) : Se("", !0),
            u.value ? (S(), D("span", Bu, "已上传")) : Se("", !0),
            m.value && !d.value ? (S(), D(Q, { key: 2 }, [
              v(w) === "recording" ? (S(), D("button", {
                key: 0,
                onClick: R,
                class: "btn btn-primary btn-sm rounded-pill"
              }, " 结束录音(" + U(v(P)) + ")s ", 1)) : (S(), D("button", {
                key: 1,
                onClick: I,
                class: "btn btn-primary btn-sm rounded-pill"
              }, " 开始录音 "))
            ], 64)) : Se("", !0),
            !m.value && !c.value ? (S(), D("button", {
              key: 3,
              onClick: Te,
              class: "btn btn-primary btn-sm rounded-pill"
            }, " 选择文件 ")) : Se("", !0),
            u.value ? (S(), D("button", {
              key: 4,
              onClick: ut,
              class: "btn btn-primary btn-sm rounded-pill"
            }, " 重传音频 ")) : Se("", !0),
            !u.value && (c.value || d.value) ? (S(), D("button", {
              key: 5,
              onClick: Ie,
              class: "btn btn-primary btn-sm rounded-pill"
            }, " 上传音频 ")) : Se("", !0)
          ])
        ]),
        y("div", null, [
          zu,
          y("div", Wu, [
            (S(!0), D(Q, null, le(p.value, (ct, hr) => {
              var $n;
              return S(), J(Vu, {
                onClick: (Vd) => $e(ct),
                key: hr,
                label: ct.displayName,
                avatar: ct.avatar,
                activated: ct.name === (($n = h.value) == null ? void 0 : $n.name)
              }, null, 8, ["onClick", "label", "avatar", "activated"]);
            }), 128))
          ])
        ]),
        y("button", {
          class: "btn btn-primary mt-1",
          onClick: te,
          disabled: !f.value
        }, " 完成录音并上传完成后，可选择配音师转换 ", 8, Gu)
      ], 512);
    };
  }
}), Yu = {
  class: "fw-bold",
  style: { "font-size": "0.5rem" }
}, Xu = /* @__PURE__ */ y("p", { class: "text-start text-danger" }, "请在安静的环境中进行录音，以需要转换的风格，读出以下文案", -1), Ku = {
  class: "border border-secondary rounded p-2 w-100",
  style: { height: "100px" }
}, Ju = { class: "mt-2" }, Qu = /* @__PURE__ */ y("p", {
  class: "mt-2 text-secondary",
  style: { "font-size": "0.5rem" }
}, " 录音内容需要和滑选一致，音频限制60秒，滑选文案限制60个字 ", -1), Zu = /* @__PURE__ */ L({
  __name: "conversion-content",
  props: {
    text: {}
  },
  emits: ["submit"],
  setup(e) {
    const t = b(), n = b(), s = b(!0), r = b(!1), o = Nt(t);
    xr("reopen", () => {
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
    return (l, u) => (S(), D("div", {
      ref_key: "boxRef",
      ref: t,
      class: "px-2 py-1",
      style: { width: "410px" }
    }, [
      Pe(y("section", Yu, [
        Xu,
        y("div", Ku, U(l.text), 1)
      ], 512), [
        [De, s.value]
      ]),
      Pe(y("section", Ju, [
        y("div", { class: "w-100 d-flex flex-column row-gap-1" }, [
          y("button", {
            onClick: a,
            class: "btn btn-success"
          }, "实时录音"),
          y("button", {
            onClick: i,
            class: "btn btn-primary"
          }, "上传录音")
        ]),
        Qu
      ], 512), [
        [De, !r.value]
      ]),
      Pe(y("section", null, [
        g(qu, {
          ref_key: "audioUploadRef",
          ref: n,
          onSubmit: u[0] || (u[0] = (f) => l.$emit("submit", f))
        }, null, 512)
      ], 512), [
        [De, r.value]
      ])
    ], 512));
  }
});
class ec extends we {
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
    return t == null ? !0 : ye.isCollapsed(t) ? (this.editor.emit(z.ERROR, "请框选要变音的句子"), !0) : !1;
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
const pr = /* @__PURE__ */ L({
  __name: "conversion-menu",
  setup(e) {
    const t = b(), n = b(), s = q(), r = q(), o = b(!1), a = b(""), { x: i, y: l, height: u } = lt(n), f = (p) => {
      if (r.value ?? (r.value = new ec(p)), r.value.isDisabled())
        return;
      a.value = r.value.getValue();
      const h = {
        x: i.value - 200,
        y: l.value + u.value
      };
      s.value = p, t.value.setPosition(h), o.value = !0;
    };
    function m(p) {
      var h;
      (h = r.value) == null || h.exec(p), o.value = !1;
    }
    return (p, h) => (S(), J(v(Ze), {
      ref_key: "dragRef",
      ref: t,
      visible: o.value,
      "onUpdate:visible": h[0] || (h[0] = (d) => o.value = d)
    }, {
      reference: V(() => [
        g(v(ce), {
          ref_key: "menuRef",
          ref: n,
          text: "局部变音",
          icon: "conversion",
          onClick: f
        }, null, 512)
      ]),
      default: V(() => [
        g(Zu, {
          text: a.value,
          onSubmit: m
        }, null, 8, ["text"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), tc = { class: "anchor-avatar d-flex flex-column justify-content-center align-items-center" }, nc = { class: "position-relative" }, sc = ["src"], rc = {
  key: 0,
  class: "iconfont icon-play1"
}, oc = {
  key: 1,
  class: "iconfont icon-pause1"
}, ac = { class: "anchor-avatar-name text-white" }, ic = /* @__PURE__ */ L({
  __name: "try-play-circle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = b(), s = b(), r = b(0), o = b(0), a = Pt(), { globalEditConfig: i } = ue(), { audioPlayer: l } = a, u = l.playState, { position: f } = yn(n, {
      initialValue: { x: window.innerWidth - 15, y: window.innerHeight / 2 - 15 },
      onStart: (E, _) => c(_.clientX, _.clientY) ? !1 : void 0
    }), { style: m } = bn(n, f);
    function p(E) {
      (() => {
        if (c(E.clientX, E.clientY))
          return x(E) ? $() : t("update:visible", !1);
      })(), h();
    }
    function h() {
      r.value = 0, o.value = 0;
    }
    function d(E) {
      r.value = E.clientX, o.value = E.clientY;
    }
    function c(E, _) {
      return E > r.value - 10 && E < r.value + 10 && _ > o.value - 10 && _ < o.value + 10;
    }
    function x(E) {
      var C;
      const _ = E.target;
      return ((C = s.value) == null ? void 0 : C.contains(_)) || !1;
    }
    async function $() {
      if (u.value === "playing")
        l.pause();
      else
        try {
          const E = wn(), _ = await i.tryPlay.play(E);
          l.load(_.src), l.play();
        } catch {
          l.pause();
        }
    }
    return (E, _) => Pe((S(), D("div", {
      ref_key: "boxRef",
      ref: n,
      class: "try-play-circel user-select-none rounded-circle overflow-hidden",
      style: kt([v(m), { position: "fixed" }]),
      onMousedown: d,
      onMouseup: p
    }, [
      y("div", tc, [
        y("div", nc, [
          y("img", {
            src: v(a).speaker.avatar || v(it)(),
            class: "rounded-circle"
          }, null, 8, sc),
          y("button", {
            ref_key: "btnPlayRef",
            ref: s,
            class: "btn w-100 h-100 position-absolute top-50 start-50 translate-middle bg-black bg-opacity-50 text-white rounded-circle"
          }, [
            v(u) === "paused" ? (S(), D("span", rc)) : (S(), D("span", oc))
          ], 512)
        ]),
        y("div", ac, U(v(a).speaker.displayName), 1)
      ])
    ], 36)), [
      [De, E.visible]
    ]);
  }
});
const lc = /* @__PURE__ */ de(ic, [["__scopeId", "data-v-0f55dd94"]]), uc = {
  key: 0,
  class: "position-absolute top-0 start-100 translate-middle text-bg-danger text-nowrap rounded px-1",
  style: { "font-size": "0.5rem" }
}, cc = ["src"], dc = { class: "anchor-avatar-name text-white" }, fc = /* @__PURE__ */ L({
  __name: "anchor-avatar",
  props: {
    activate: { type: Boolean },
    data: {}
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => {
      var s, r, o;
      return S(), D("div", {
        class: "anchor-avatar d-flex flex-column align-items-center text-center justify-content-center position-relative",
        onClick: n[0] || (n[0] = (a) => {
          var i;
          return t.$emit("click", (i = t.data) == null ? void 0 : i.value);
        })
      }, [
        (s = t.data) != null && s.isFree ? Se("", !0) : (S(), D("span", uc, "付费")),
        y("img", {
          src: ((r = t.data) == null ? void 0 : r.src) ?? v(it)(),
          class: ve(["rounded-circle", { "border border-2 border-warning": t.activate }]),
          style: { height: "40px" }
        }, null, 10, cc),
        y("div", dc, U((o = t.data) == null ? void 0 : o.label), 1)
      ]);
    };
  }
});
const mr = /* @__PURE__ */ de(fc, [["__scopeId", "data-v-845325c9"]]), pc = {
  style: { height: "170px" },
  class: "w-100 d-flex flex-row flex-wrap justify-content-start overflow-x-hidden overflow-y-auto scrollbar-none"
}, mc = /* @__PURE__ */ L({
  __name: "anchor-list",
  props: {
    filter: {}
  },
  setup(e) {
    const t = e, { globalEditConfig: n } = ue(), { fetchData: s } = n.tryPlay, r = Pt(), o = b([]), a = q([]);
    ee(
      () => t.filter,
      async (l) => {
        const u = await s(me(l));
        a.value = u, o.value = u.map((f) => ({ label: f.displayName, value: f.name }));
      }
    );
    function i(l) {
      const u = a.value.find((f) => f.name === l);
      u && r.setSpeaker(u);
    }
    return he(async () => {
      const l = await s(me(t.filter));
      a.value = l, o.value = l.map((u) => ({ label: u.displayName, value: u.name })), o.value.length > 0 && i(o.value[0].value);
    }), (l, u) => (S(), D("div", pc, [
      (S(!0), D(Q, null, le(o.value, (f, m) => (S(), D("div", {
        class: "m-3",
        key: m
      }, [
        g(mr, {
          data: f,
          activate: f.value === v(r).speaker.name,
          onClick: (p) => i(f.value)
        }, null, 8, ["data", "activate", "onClick"])
      ]))), 128))
    ]));
  }
}), Gt = /* @__PURE__ */ L({
  __name: "tag-item",
  props: {
    activate: { type: Boolean },
    value: {}
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => (S(), D("span", {
      class: ve(["tag-item d-inline-block text-white text-center text-nowrap text-truncate", { "border border-white rounded-pill": t.activate }]),
      onClick: n[0] || (n[0] = (s) => t.$emit("click", t.value)),
      style: { height: "20px", "min-width": "60px", "max-width": "160px", "font-size": "0.5rem", cursor: "pointer" }
    }, [
      Re(t.$slots, "default")
    ], 2));
  }
}), vc = { class: "tag-list w-100" }, hc = {
  class: "w-100 d-flex flex-row border-bottom border-secondary align-items-center",
  style: { height: "40px" }
}, yc = {
  class: "w-100 d-flex flex-row border-bottom border-secondary align-items-center",
  style: { height: "40px" }
}, gc = {
  style: { height: "100px" },
  class: "w-100 pt-2 d-flex flex-row flex-wrap align-content-start row-gap-2 overflow-y-auto overflow-x-hidden scrollbar-none"
}, bc = /* @__PURE__ */ L({
  __name: "tag-list",
  props: {
    filter: {}
  },
  emits: ["update:filter"],
  setup(e, { emit: t }) {
    const n = e, { globalEditConfig: s } = ue(), { topFlag: r, gender: o, featchTag: a } = s.tryPlay, i = b([]);
    he(async () => {
      i.value = await a();
    });
    function l(m) {
      t("update:filter", { ...me(n.filter), topFlag: m });
    }
    function u(m) {
      t("update:filter", { ...me(n.filter), gender: m });
    }
    function f(m) {
      t("update:filter", { ...me(n.filter), tag: m });
    }
    return (m, p) => (S(), D("div", vc, [
      y("div", hc, [
        (S(!0), D(Q, null, le(v(r), (h, d) => (S(), J(Gt, {
          onClick: l,
          key: d,
          value: h.value,
          activate: m.filter.topFlag === h.value
        }, {
          default: V(() => [
            ne(U(h.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "activate"]))), 128))
      ]),
      y("div", yc, [
        (S(!0), D(Q, null, le(v(o), (h, d) => (S(), J(Gt, {
          onClick: u,
          key: d,
          value: h.value,
          activate: m.filter.gender === h.value
        }, {
          default: V(() => [
            ne(U(h.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "activate"]))), 128))
      ]),
      y("div", gc, [
        (S(!0), D(Q, null, le(i.value, (h, d) => (S(), J(Gt, {
          onClick: f,
          key: d,
          value: h.value,
          activate: m.filter.tag === h.value
        }, {
          default: V(() => [
            ne(U(h.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "activate"]))), 128))
      ])
    ]));
  }
});
const _c = ["src"], wc = {
  class: "anchor-avatar-name text-white",
  style: { "font-size": "0.5rem" }
}, xc = /* @__PURE__ */ L({
  __name: "style-avatar",
  props: {
    activate: { type: Boolean },
    data: {}
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => {
      var s, r;
      return S(), D("div", {
        class: "anchor-avatar d-flex flex-column align-items-center text-center justify-content-center position-relative",
        onClick: n[0] || (n[0] = (o) => {
          var a;
          return t.$emit("click", (a = t.data) == null ? void 0 : a.value);
        })
      }, [
        y("img", {
          src: ((s = t.data) == null ? void 0 : s.src) || v(it)(),
          class: ve(["rounded-circle", { "border border-2 border-warning": t.activate }]),
          style: { height: "30px" }
        }, null, 10, _c),
        y("div", wc, U((r = t.data) == null ? void 0 : r.label), 1)
      ]);
    };
  }
});
const Ec = /* @__PURE__ */ de(xc, [["__scopeId", "data-v-71aedb65"]]);
function kc(e) {
  return `${(0.05 * e * 100).toFixed(0)}%`;
}
function $c(e) {
  return `${((e - 1) * 100).toFixed(0)}%`;
}
const xn = (e) => ($t("data-v-0210af00"), e = e(), St(), e), Sc = {
  class: "slider-panle w-100 px-3 text-white",
  style: { "font-size": "0.5rem" }
}, Cc = { class: "mt-2 d-flex text-center justify-content-between align-items-center" }, Rc = { class: "me-auto d-flex flex-row align-items-center" }, Tc = ["src"], Oc = {
  class: "ms-2 d-flex flex-column justify-content-between",
  style: { height: "50px" }
}, Pc = { class: "d-flex dlex-row column-gap-2 align-items-end" }, Dc = { class: "fs-6" }, Nc = { style: { "font-size": "0.5rem" } }, Ic = { class: "d-flex flex-row column-gap-2 align-items-center" }, Vc = {
  key: 0,
  class: "badge text-bg-primary px-2"
}, Ac = { class: "d-flex flex-column align-items-end" }, Lc = /* @__PURE__ */ xn(() => /* @__PURE__ */ y("div", { class: "text-info" }, "音频时长，请以生成后的为准", -1)), Mc = { class: "mt-1" }, jc = /* @__PURE__ */ xn(() => /* @__PURE__ */ y("span", null, "/", -1)), Fc = { class: "role-list mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-2 column-gap-3" }, Hc = ["onClick"], Uc = { class: "audio-mood mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-1 column-gap-2" }, Bc = ["onClick"], zc = /* @__PURE__ */ xn(() => /* @__PURE__ */ y("div", { class: "my-3" }, [
  /* @__PURE__ */ y("span", { class: "border rounded-pill p-1" }, "配音师详情")
], -1)), Wc = { class: "slider-box" }, Gc = { class: "slider-box" }, qc = { class: "d-flex flex-row gap-3 my-3" }, Yc = ["onClick"], Xc = {
  class: "d-flex flex-row flex-wrap row-gap-2 column-gap-3 mb-3",
  style: { "min-height": "100px" }
}, Kc = ["onClick"], Jc = /* @__PURE__ */ L({
  __name: "slider-panle",
  setup(e) {
    const { globalEditConfig: t } = ue(), { rootProsody: n, rootExpressAs: s } = Ue(), { fetchStar: r, category: o, fetchData: a } = t.tryPlay, i = Pt(), l = b(i.speaker.isStar), u = b(10), f = b(0), m = b([0, 2]), p = b(1), h = b([-10, 10]), d = b(0), c = X(() => ts(u.value)), x = X(() => ts(f.value)), $ = bt(vo()), E = bt(ho()), _ = b(""), C = b([]);
    he(async () => {
      await j(o[0].value);
    }), ee(
      () => i.speaker,
      (T) => {
        T.roles.length > 0 && P(T.roles[0].value), T.styles.length > 0 && w(T.styles[0].value);
      },
      { immediate: !0 }
    ), ee(
      d,
      (T) => {
        n.pitch = kc(T);
      },
      { immediate: !0 }
    ), ee(
      p,
      (T) => {
        n.rate = $c(T);
      },
      { immediate: !0 }
    );
    async function N() {
      l.value = await r(i.speaker.name, !l.value);
    }
    function P(T) {
      s.role = T;
    }
    function w(T) {
      s.style = T;
    }
    async function j(T) {
      _.value = T;
      try {
        C.value = await a({ ...mn(), category: T });
      } catch (O) {
        oe.emit(re.ERROR, `${O}`, O);
      }
    }
    function B(T) {
      i.setSpeaker(me(T));
    }
    return (T, O) => (S(), D("div", Sc, [
      y("div", Cc, [
        y("div", Rc, [
          y("img", {
            src: v(it)(),
            class: "rounded-circle",
            style: { height: "50px" }
          }, null, 8, Tc),
          y("div", Oc, [
            y("div", Pc, [
              y("span", Dc, U(v(i).speaker.displayName), 1),
              y("span", Nc, U(p.value) + "x", 1)
            ]),
            y("div", Ic, [
              g(v(an), {
                onClick: N,
                class: "fs-6",
                style: kt({ color: l.value ? "red" : "white" })
              }, {
                default: V(() => [
                  l.value ? (S(), J(v(Pr), { key: 0 })) : (S(), J(v(Dr), { key: 1 }))
                ]),
                _: 1
              }, 8, ["style"]),
              v(i).speaker.isSupper24K ? (S(), D("span", Vc, " 24K ")) : Se("", !0)
            ])
          ])
        ]),
        y("div", Ac, [
          Lc,
          y("div", Mc, [
            y("span", null, U(x.value), 1),
            jc,
            y("span", null, U(c.value), 1)
          ]),
          g(v(It), {
            max: u.value,
            modelValue: f.value,
            "onUpdate:modelValue": O[0] || (O[0] = (R) => f.value = R),
            size: "small"
          }, null, 8, ["max", "modelValue"])
        ])
      ]),
      y("div", Fc, [
        (S(!0), D(Q, null, le(v(i).speaker.roles, (R, I) => (S(), D("div", {
          onClick: (M) => P(R.value),
          key: I,
          class: ve(["rounded-pill px-1", { border: R.value === (v(s).role || "") }])
        }, U(R.label), 11, Hc))), 128))
      ]),
      y("ul", Uc, [
        (S(!0), D(Q, null, le(v(i).speaker.styles, (R, I) => (S(), D("li", {
          class: "mx-2",
          onClick: (M) => w(R.value),
          key: I
        }, [
          g(Ec, {
            activate: R.value === (v(s).style || ""),
            data: R
          }, null, 8, ["activate", "data"])
        ], 8, Bc))), 128))
      ]),
      zc,
      y("div", Wc, [
        y("div", null, [
          y("span", null, "语速：" + U(p.value) + "x", 1)
        ]),
        g(v(It), {
          modelValue: p.value,
          "onUpdate:modelValue": O[1] || (O[1] = (R) => p.value = R),
          min: m.value[0],
          max: m.value[1],
          step: 0.05,
          marks: $
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      y("div", Gc, [
        y("div", null, [
          y("span", null, "语调：" + U(d.value), 1)
        ]),
        g(v(It), {
          modelValue: d.value,
          "onUpdate:modelValue": O[2] || (O[2] = (R) => d.value = R),
          min: h.value[0],
          max: h.value[1],
          step: 0.2,
          marks: E
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      y("div", null, [
        y("ul", qc, [
          (S(!0), D(Q, null, le(v(o), (R, I) => (S(), D("li", {
            onClick: (M) => j(R.value),
            key: I,
            class: ve(["rounded-pill px-1", { border: R.value === _.value }])
          }, U(R.label), 11, Yc))), 128))
        ]),
        y("ul", Xc, [
          (S(!0), D(Q, null, le(C.value, (R, I) => (S(), D("li", {
            onClick: (M) => B(R),
            key: I
          }, [
            g(mr, {
              activate: R.name === v(i).speaker.name,
              data: { ...R, label: R.displayName, value: R.name }
            }, null, 8, ["activate", "data"])
          ], 8, Kc))), 128))
        ])
      ])
    ]));
  }
});
const Qc = /* @__PURE__ */ de(Jc, [["__scopeId", "data-v-0210af00"]]), Zc = (e) => ($t("data-v-b9c1f88f"), e = e(), St(), e), ed = { class: "box ms-2" }, td = { class: "try-play-header text-center d-flex flex-row justify-content-between" }, nd = { class: "try-play-body d-flex flex-row" }, sd = { class: "try-play-left w-50 border-right border-secondary" }, rd = { class: "pe-1" }, od = /* @__PURE__ */ Zc(() => /* @__PURE__ */ y("div", { class: "py-1 border-top border-secondary" }, null, -1)), ad = { class: "try-play-right w-50 border-start rounded border-top border-secondary overflow-x-hidden overflow-y-auto scrollbar-none" }, id = /* @__PURE__ */ L({
  __name: "try-play-panle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = e, s = b(), r = b(""), o = b(), a = b(), i = b(mn());
    he(() => {
      window.addEventListener("keydown", l);
    }), rn(() => {
      window.addEventListener("keydown", l);
    }), ee(
      () => n.visible,
      (d) => {
        d && p();
      }
    );
    function l(d) {
      d.code === "Escape" && n.visible && m();
    }
    const { position: u } = yn(a, {
      initialValue: { x: 40, y: 40 }
    }), { style: f } = bn(o, u);
    he(() => {
      u.value.x = (window.innerWidth - 890) / 2, u.value.y = (window.innerHeight - 390) / 2;
    });
    function m() {
      t("update:visible", !1);
    }
    function p() {
      Ke(() => {
        var d, c;
        (c = (d = s.value) == null ? void 0 : d.input) == null || c.focus();
      });
    }
    function h() {
      i.value = { ...i.value, word: r.value };
    }
    return (d, c) => Pe((S(), D("div", {
      ref_key: "boxRef",
      ref: o,
      style: kt([v(f), { position: "fixed" }]),
      class: "try-play user-select-none card z-3 shadow"
    }, [
      y("div", ed, [
        y("div", td, [
          y("div", {
            ref_key: "handleRef",
            ref: a,
            class: "col-11 try-play-move"
          }, null, 512),
          y("div", {
            onClick: m,
            class: "col-1 try-play-menu-close"
          }, [
            g(v(an), { color: "white" }, {
              default: V(() => [
                g(v(Nr))
              ]),
              _: 1
            })
          ])
        ]),
        y("div", nd, [
          y("div", sd, [
            y("div", rd, [
              g(v(Ct), {
                onSubmit: ae(h, ["prevent"])
              }, {
                default: V(() => [
                  g(v(Rt), {
                    "input-style": { color: "white" },
                    ref_key: "searchInputRef",
                    ref: s,
                    modelValue: r.value,
                    "onUpdate:modelValue": c[0] || (c[0] = (x) => r.value = x),
                    placeholder: "输入名称搜索"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["onSubmit"])
            ]),
            g(bc, {
              filter: i.value,
              "onUpdate:filter": c[1] || (c[1] = (x) => i.value = x)
            }, null, 8, ["filter"]),
            od,
            g(mc, { filter: i.value }, null, 8, ["filter"])
          ]),
          y("div", ad, [
            g(Qc)
          ])
        ])
      ])
    ], 4)), [
      [De, d.visible]
    ]);
  }
});
const ld = /* @__PURE__ */ de(id, [["__scopeId", "data-v-b9c1f88f"]]), vr = /* @__PURE__ */ L({
  __name: "try-play",
  setup(e) {
    const t = b(!0);
    function n(s) {
      s || (t.value = !0);
    }
    return (s, r) => (S(), J(ys, { to: "body" }, [
      g(lc, {
        visible: t.value,
        "onUpdate:visible": r[0] || (r[0] = (o) => t.value = o)
      }, null, 8, ["visible"]),
      g(ld, {
        visible: !t.value,
        "onUpdate:visible": n
      }, null, 8, ["visible"])
    ]));
  }
});
const ud = {
  install: (e) => {
    e.component("PlayMenu", Zs), e.component("PinyinMenu", er), e.component("ContinuousMenu", tr), e.component("ReadMenu", nr), e.component("DigitalMenu", sr), e.component("AliasMenu", rr), e.component("EnglishMenu", or), e.component("ChangespeedMenu", ar), e.component("RhythmMenu", ir), e.component("SpecialMenu", lr), e.component("MuteMenu", ur), e.component("BgmMenu", cr), e.component("SensitiveMenu", dr), e.component("ManagementMenu", fr), e.component("ConversionMenu", pr), e.component("TryPlay", vr);
  }
};
var tn = { exports: {} }, nn = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.ParsingError = void 0;
  class n extends Error {
    constructor(C, N) {
      super(C), this.cause = N;
    }
  }
  t.ParsingError = n;
  let s;
  function r() {
    return l(!1) || p() || m() || f();
  }
  function o() {
    return c(/\s*/), l(!0) || m() || u() || i(!1);
  }
  function a() {
    const _ = i(!0), C = [];
    let N, P = o();
    for (; P; ) {
      if (P.node.type === "Element") {
        if (N)
          throw new Error("Found multiple root nodes");
        N = P.node;
      }
      P.excluded || C.push(P.node), P = o();
    }
    if (!N)
      throw new n("Failed to parse XML", "Root Element not found");
    if (s.xml.length !== 0)
      throw new n("Failed to parse XML", "Not Well-Formed XML");
    return {
      declaration: _ ? _.node : null,
      root: N,
      children: C
    };
  }
  function i(_) {
    const C = c(_ ? /^<\?(xml)\s*/ : /^<\?([\w-:.]+)\s*/);
    if (!C)
      return;
    const N = {
      name: C[1],
      type: "ProcessingInstruction",
      attributes: {}
    };
    for (; !(x() || $("?>")); ) {
      const P = h();
      if (P)
        N.attributes[P.name] = P.value;
      else
        return;
    }
    return c(/\?>/), {
      excluded: _ ? !1 : s.options.filter(N) === !1,
      node: N
    };
  }
  function l(_) {
    const C = c(/^<([^?!</>\s]+)\s*/);
    if (!C)
      return;
    const N = {
      type: "Element",
      name: C[1],
      attributes: {},
      children: []
    }, P = _ ? !1 : s.options.filter(N) === !1;
    for (; !(x() || $(">") || $("?>") || $("/>")); ) {
      const j = h();
      if (j)
        N.attributes[j.name] = j.value;
      else
        return;
    }
    if (c(/^\s*\/>/))
      return N.children = null, {
        excluded: P,
        node: N
      };
    c(/\??>/);
    let w = r();
    for (; w; )
      w.excluded || N.children.push(w.node), w = r();
    if (s.options.strictMode) {
      const j = `</${N.name}>`;
      if (s.xml.startsWith(j))
        s.xml = s.xml.slice(j.length);
      else
        throw new n("Failed to parse XML", `Closing tag not matching "${j}"`);
    } else
      c(/^<\/\s*[\w-:.\u00C0-\u00FF]+>/);
    return {
      excluded: P,
      node: N
    };
  }
  function u() {
    const _ = c(/^<!DOCTYPE\s+\S+\s+SYSTEM[^>]*>/) || c(/^<!DOCTYPE\s+\S+\s+PUBLIC[^>]*>/) || c(/^<!DOCTYPE\s+\S+\s*\[[^\]]*]>/) || c(/^<!DOCTYPE\s+\S+\s*>/);
    if (_) {
      const C = {
        type: "DocumentType",
        content: _[0]
      };
      return {
        excluded: s.options.filter(C) === !1,
        node: C
      };
    }
  }
  function f() {
    if (s.xml.startsWith("<![CDATA[")) {
      const _ = s.xml.indexOf("]]>");
      if (_ > -1) {
        const C = _ + 3, N = {
          type: "CDATA",
          content: s.xml.substring(0, C)
        };
        return s.xml = s.xml.slice(C), {
          excluded: s.options.filter(N) === !1,
          node: N
        };
      }
    }
  }
  function m() {
    const _ = c(/^<!--[\s\S]*?-->/);
    if (_) {
      const C = {
        type: "Comment",
        content: _[0]
      };
      return {
        excluded: s.options.filter(C) === !1,
        node: C
      };
    }
  }
  function p() {
    const _ = c(/^([^<]+)/);
    if (_) {
      const C = {
        type: "Text",
        content: _[1]
      };
      return {
        excluded: s.options.filter(C) === !1,
        node: C
      };
    }
  }
  function h() {
    const _ = c(/([^=]+)\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)\s*/);
    if (_)
      return {
        name: _[1].trim(),
        value: d(_[2].trim())
      };
  }
  function d(_) {
    return _.replace(/^['"]|['"]$/g, "");
  }
  function c(_) {
    const C = s.xml.match(_);
    if (C)
      return s.xml = s.xml.slice(C[0].length), C;
  }
  function x() {
    return s.xml.length === 0;
  }
  function $(_) {
    return s.xml.indexOf(_) === 0;
  }
  function E(_, C = {}) {
    _ = _.trim();
    const N = C.filter || (() => !0);
    return s = {
      xml: _,
      options: Object.assign(Object.assign({}, C), { filter: N, strictMode: C.strictMode === !0 })
    }, a();
  }
  e.exports = E, t.default = E;
})(nn, nn.exports);
var cd = nn.exports;
(function(e, t) {
  var n = Ye && Ye.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const s = n(cd);
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
  function i(d, c, x) {
    if (typeof d.content == "string")
      l(d.content, c, x);
    else if (d.type === "Element")
      f(d, c, x);
    else if (d.type === "ProcessingInstruction")
      p(d, c);
    else
      throw new Error("Unknown node type: " + d.type);
  }
  function l(d, c, x) {
    if (!x) {
      const $ = d.trim();
      (c.options.lineSeparator || $.length === 0) && (d = $);
    }
    d.length > 0 && (!x && c.content.length > 0 && r(c), a(c, d));
  }
  function u(d, c) {
    const x = "/" + d.join("/"), $ = d[d.length - 1];
    return c.includes($) || c.includes(x);
  }
  function f(d, c, x) {
    if (c.path.push(d.name), !x && c.content.length > 0 && r(c), a(c, "<" + d.name), m(c, d.attributes), d.children === null || c.options.forceSelfClosingEmptyTag && d.children.length === 0) {
      const $ = c.options.whiteSpaceAtEndOfSelfclosingTag ? " />" : "/>";
      a(c, $);
    } else if (d.children.length === 0)
      a(c, "></" + d.name + ">");
    else {
      const $ = d.children;
      a(c, ">"), c.level++;
      let E = d.attributes["xml:space"] === "preserve", _ = !1;
      if (!E && c.options.ignoredPaths && (_ = u(c.path, c.options.ignoredPaths), E = _), !E && c.options.collapseContent) {
        let C = !1, N = !1, P = !1;
        $.forEach(function(w, j) {
          w.type === "Text" ? (w.content.includes(`
`) ? (N = !0, w.content = w.content.trim()) : (j === 0 || j === $.length - 1) && w.content.trim().length === 0 && (w.content = ""), w.content.trim().length > 0 && (C = !0)) : w.type === "CDATA" ? C = !0 : P = !0;
        }), C && (!P || !N) && (E = !0);
      }
      $.forEach(function(C) {
        i(C, c, x || E);
      }), c.level--, !x && !E && r(c), _ && o(c), a(c, "</" + d.name + ">");
    }
    c.path.pop();
  }
  function m(d, c) {
    Object.keys(c).forEach(function(x) {
      const $ = c[x].replace(/"/g, "&quot;");
      a(d, " " + x + '="' + $ + '"');
    });
  }
  function p(d, c) {
    c.content.length > 0 && r(c), a(c, "<?" + d.name), m(c, d.attributes), a(c, "?>");
  }
  function h(d, c = {}) {
    c.indentation = "indentation" in c ? c.indentation : "    ", c.collapseContent = c.collapseContent === !0, c.lineSeparator = "lineSeparator" in c ? c.lineSeparator : `\r
`, c.whiteSpaceAtEndOfSelfclosingTag = c.whiteSpaceAtEndOfSelfclosingTag === !0, c.throwOnFailure = c.throwOnFailure !== !1;
    try {
      const x = (0, s.default)(d, { filter: c.filter, strictMode: c.strictMode }), $ = { content: "", level: 0, options: c, path: [] };
      return x.declaration && p(x.declaration, $), x.children.forEach(function(E) {
        i(E, $, !1);
      }), c.lineSeparator ? $.content.replace(/\r\n/g, `
`).replace(/\n/g, c.lineSeparator) : $.content;
    } catch (x) {
      if (c.throwOnFailure)
        throw x;
      return d;
    }
  }
  h.minify = (d, c = {}) => h(d, Object.assign(Object.assign({}, c), { indentation: "", lineSeparator: "" })), e.exports = h, t.default = h;
})(tn, tn.exports);
var dd = tn.exports;
const fd = /* @__PURE__ */ cn(dd), et = (e) => ($t("data-v-fb2870b0"), e = e(), St(), e), pd = { class: "editor-title d-flex flex-row align-item-center justify-content-between" }, md = { class: "title-wrapper d-flex flex-column justify-content-center ps-3" }, vd = /* @__PURE__ */ et(() => /* @__PURE__ */ y("div", { class: "title-author pb-1" }, "SSML编辑器", -1)), hd = { class: "author d-flex flex-row align-items-center justify-content-start" }, yd = /* @__PURE__ */ et(() => /* @__PURE__ */ y("div", null, "未保存", -1)), gd = /* @__PURE__ */ et(() => /* @__PURE__ */ y("span", { class: "iconfont icon-play font-size-12 p-1" }, null, -1)), bd = /* @__PURE__ */ et(() => /* @__PURE__ */ y("div", { class: "d-inline-block" }, null, -1)), _d = { class: "operation-wrapper d-flex flex-row justify-content-center align-items-center" }, wd = /* @__PURE__ */ et(() => /* @__PURE__ */ y("div", { class: "menu-divider" }, null, -1)), xd = /* @__PURE__ */ et(() => /* @__PURE__ */ y("div", { class: "px-1" }, null, -1)), Ed = {
  class: "ssml-code border border-secondary-subtle rounded-2 px-2",
  style: { "white-space": "pre-wrap", "max-height": "50vh" }
}, kd = { class: "dialog-footer" }, $d = /* @__PURE__ */ L({
  __name: "editor-title",
  setup(e) {
    const t = b(!1), n = b(""), { rootBackgroundaudio: s } = Ue(), r = X(() => fd(n.value, {
      indentation: "    ",
      filter: (u) => u.type !== "Comment",
      collapseContent: !0,
      lineSeparator: `
`
    })), o = () => {
      n.value = wn(), t.value = !0;
    }, a = () => {
      s.src && Je.play(s.src);
    }, i = () => {
      Je.stop(s.src), s.src = "", s.remark = "";
    };
    async function l(u) {
      await navigator.clipboard.writeText(u ? r.value : n.value), t.value = !1;
    }
    return (u, f) => (S(), D(Q, null, [
      y("div", pd, [
        y("div", md, [
          vd,
          y("div", hd, [
            yd,
            v(s).src ? (S(), J(v(gs), {
              key: 0,
              class: "bgm-txt ms-2",
              closable: "",
              size: "small",
              onClick: a,
              onClose: i
            }, {
              default: V(() => [
                gd,
                bd,
                y("span", null, U(v(s).remark), 1)
              ]),
              _: 1
            })) : Se("", !0)
          ])
        ]),
        y("div", _d, [
          g(v(pe), {
            type: "primary",
            icon: v(Ir),
            disabled: ""
          }, {
            default: V(() => [
              ne("分享")
            ]),
            _: 1
          }, 8, ["icon"]),
          wd,
          g(v(pe), {
            type: "primary",
            onClick: o
          }, {
            default: V(() => [
              ne("查看SSML")
            ]),
            _: 1
          }),
          g(v(pe), { disabled: "" }, {
            default: V(() => [
              ne("下载音频")
            ]),
            _: 1
          }),
          g(v(pe), { disabled: "" }, {
            default: V(() => [
              ne("下载视频")
            ]),
            _: 1
          }),
          g(v(pe), { disabled: "" }, {
            default: V(() => [
              ne("下载字幕")
            ]),
            _: 1
          }),
          g(v(pe), { disabled: "" }, {
            default: V(() => [
              ne("声音转换")
            ]),
            _: 1
          }),
          xd
        ])
      ]),
      g(v(Cr), {
        modelValue: t.value,
        "onUpdate:modelValue": f[4] || (f[4] = (m) => t.value = m),
        title: "查看SSML",
        width: "80%"
      }, {
        header: V(() => [
          g(v(pe), {
            type: "info",
            onClick: f[0] || (f[0] = (m) => l(!0))
          }, {
            default: V(() => [
              ne("复制+关闭")
            ]),
            _: 1
          }),
          g(v(pe), {
            type: "primary",
            onClick: f[1] || (f[1] = (m) => l(!1))
          }, {
            default: V(() => [
              ne("压缩+复制+关闭(推荐)")
            ]),
            _: 1
          })
        ]),
        footer: V(() => [
          y("span", kd, [
            g(v(pe), {
              type: "info",
              onClick: f[2] || (f[2] = (m) => l(!0))
            }, {
              default: V(() => [
                ne("复制+关闭")
              ]),
              _: 1
            }),
            g(v(pe), {
              type: "primary",
              onClick: f[3] || (f[3] = (m) => l(!1))
            }, {
              default: V(() => [
                ne("压缩+复制+关闭(推荐)")
              ]),
              _: 1
            })
          ])
        ]),
        default: V(() => [
          y("pre", Ed, U(r.value), 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
});
const Sd = /* @__PURE__ */ de($d, [["__scopeId", "data-v-fb2870b0"]]), Cd = /* @__PURE__ */ L({
  __name: "editor-core",
  emits: ["created", "change"],
  setup(e, { emit: t }) {
    const { editor: n, setEditor: s, globalEditConfig: r } = ue(), o = b(null);
    he(() => {
      a();
    }), rn(() => {
      n == null || n.destroy();
    });
    function a() {
      if (!o.value)
        return;
      const i = kr({
        selector: o.value,
        mode: "simple",
        config: {
          ...me(r.editorConfig),
          onCreated(l) {
            t("created", l), oe.emit(re.EDITOR_CREATED, l);
          },
          onChange(l) {
            t("change", l);
          }
        }
      });
      s(i), i.on(z.ERROR, r.handleError);
    }
    return (i, l) => (S(), D("div", {
      ref_key: "boxRef",
      ref: o,
      class: "edit-core",
      style: { height: "70vh", "overflow-y": "hidden" }
    }, null, 512));
  }
}), Rd = { class: "bar-view border-bottom border-1" }, Td = /* @__PURE__ */ L({
  __name: "bar-view",
  setup(e) {
    return (t, n) => (S(), D(Q, null, [
      y("div", Rd, [
        g(v(Gs), null, {
          default: V(() => [
            g(v(Ge), { divider: "green" }, {
              default: V(() => [
                g(v(Zs))
              ]),
              _: 1
            }),
            g(v(Ge), { divider: "cyan" }, {
              default: V(() => [
                g(v(er)),
                g(v(nr)),
                g(v(sr)),
                g(v(tr)),
                g(v(rr)),
                g(v(or))
              ]),
              _: 1
            }),
            g(v(Ge), { divider: "orange" }, {
              default: V(() => [
                g(v(ar)),
                g(v(fr)),
                g(v(pr))
              ]),
              _: 1
            }),
            g(v(Ge), { divider: "purple" }, {
              default: V(() => [
                g(v(ir)),
                g(v(ur))
              ]),
              _: 1
            }),
            g(v(Ge), { divider: "yellow" }, {
              default: V(() => [
                g(v(lr)),
                g(v(cr))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      g(v(vr))
    ], 64));
  }
}), Od = { class: "editor-box" }, Pd = { class: "editor-core-container shadow pt-1" }, Dd = /* @__PURE__ */ L({
  __name: "editor-view",
  emits: ["created", "change"],
  setup(e, { emit: t }) {
    const n = (a) => {
      t("created", a);
    }, s = (a) => {
      t("change", a);
    };
    function r(a) {
      oe.emit(re.VIEW_CLICK, a);
    }
    function o(a) {
      oe.emit(re.VIEW_KEYDOWN, a);
    }
    return (a, i) => (S(), D("div", {
      class: "editor-view",
      onClick: r,
      onKeydown: o
    }, [
      Re(a.$slots, "default", {}, () => [
        g(Sd)
      ], !0),
      y("div", Od, [
        g(Td),
        y("div", Pd, [
          g(Cd, {
            onChange: s,
            onCreated: n
          })
        ])
      ])
    ], 32));
  }
});
const Nd = /* @__PURE__ */ de(Dd, [["__scopeId", "data-v-b5e6df8c"]]), Id = {
  install(e) {
    e.component("EditorView", Nd);
  }
}, Jd = {
  install(e, t) {
    e.use(oo()), e.use(() => {
      const { setGlobalEditConfig: n } = ue(), s = Vs(t);
      n(s), oe.on(re.ERROR, s.handleError);
    }), e.use(di), e.use(Sl), e.use(ud), e.use(Id);
  }
};
export {
  qo as AudioPlayer,
  ns as CancellationTokenSource,
  Ud as DOMComment,
  Bd as DOMElement,
  Hd as DOMNode,
  Wd as DOMRange,
  Gd as DOMSelection,
  qd as DOMStaticRange,
  zd as DOMText,
  re as EMITTER_EVENT,
  Nd as EditorView,
  Yo as FileSelector,
  Xo as Timer,
  z as WANGEDITOR_EVENT,
  Je as audioPlayer,
  Vs as createGlobalEditorConfig,
  Jd as default,
  mn as defaultFilterSpeaker,
  Kd as defaultLabelValue,
  fi as defaultSpeaker,
  it as demoAvatar,
  ts as formatTime,
  Yd as genRandomStr,
  ho as pitch,
  wn as serializeToSSML,
  vo as speed
};

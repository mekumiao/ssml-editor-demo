var vr = Object.defineProperty;
var hr = (e, t, n) => t in e ? vr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ee = (e, t, n) => (hr(e, typeof t != "symbol" ? t + "" : t, n), n);
import { effectScope as ms, ref as _, markRaw as Ve, toRaw as le, isRef as Le, isReactive as gt, toRef as it, hasInjectionContext as yr, inject as vs, getCurrentInstance as Jt, watch as Q, unref as v, reactive as mt, nextTick as Ft, computed as Z, getCurrentScope as hs, onScopeDispose as ys, toRefs as Ht, shallowRef as G, shallowReactive as Je, defineComponent as A, openBlock as T, createElementBlock as N, normalizeClass as ye, withModifiers as re, createElementVNode as h, toDisplayString as B, createBlock as X, withCtx as R, createVNode as b, renderSlot as Oe, customRef as gr, onMounted as ue, watchEffect as br, Fragment as J, renderList as oe, createTextVNode as U, onUnmounted as Qt, Teleport as gs, withDirectives as Se, normalizeStyle as bt, vShow as Ce, createCommentVNode as Ee, provide as _r, pushScopeId as Zt, popScopeId as en } from "vue";
import { DomEditor as I, SlateNode as tn, SlateEditor as q, SlateTransforms as z, SlateRange as ce, Boot as ae, SlateText as tt, SlateElement as wr, createEditor as xr } from "@wangeditor/editor";
import { ElForm as _t, ElInput as wt, ElPopover as Te, ElMenu as Er, ElMenuItem as $r, ElSelect as xn, ElOption as En, ElButton as ie, ElTag as Pe, ElIcon as bs, ElSlider as Ot, ElDialog as kr } from "element-plus";
import { Search as Sr, More as Cr, StarFilled as Or, Star as Tr, Minus as Pr, Share as Rr } from "@element-plus/icons-vue";
var _s = !1;
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
function Dr() {
  return ws().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function ws() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Nr = typeof Proxy == "function", Ir = "devtools-plugin:setup", Vr = "plugin:settings:set";
let Fe, Ut;
function Ar() {
  var e;
  return Fe !== void 0 || (typeof window < "u" && window.performance ? (Fe = !0, Ut = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Fe = !0, Ut = global.perf_hooks.performance) : Fe = !1), Fe;
}
function Lr() {
  return Ar() ? Ut.now() : Date.now();
}
class Mr {
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
        return Lr();
      }
    }, n && n.on(Vr, (a, i) => {
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
function xs(e, t) {
  const n = e, s = ws(), r = Dr(), o = Nr && n.enableEarlyProxy;
  if (r && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o))
    r.emit(Ir, e, t);
  else {
    const a = o ? new Mr(n, r) : null;
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
const nt = (e) => Qe = e, Es = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Me(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var $e;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})($e || ($e = {}));
const xt = typeof window < "u", Ze = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && xt, $n = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function jr(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], { type: e.type }) : e;
}
function nn(e, t, n) {
  const s = new XMLHttpRequest();
  s.open("GET", e), s.responseType = "blob", s.onload = function() {
    Ss(s.response, t, n);
  }, s.onerror = function() {
    console.error("could not download file");
  }, s.send();
}
function $s(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function lt(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
const ut = typeof navigator == "object" ? navigator : { userAgent: "" }, ks = /* @__PURE__ */ (() => /Macintosh/.test(ut.userAgent) && /AppleWebKit/.test(ut.userAgent) && !/Safari/.test(ut.userAgent))(), Ss = xt ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !ks ? Fr : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in ut ? Hr : (
      // Fallback to using FileReader and a popup
      Ur
    )
  )
) : () => {
};
function Fr(e, t = "download", n) {
  const s = document.createElement("a");
  s.download = t, s.rel = "noopener", typeof e == "string" ? (s.href = e, s.origin !== location.origin ? $s(s.href) ? nn(e, t, n) : (s.target = "_blank", lt(s)) : lt(s)) : (s.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    lt(s);
  }, 0));
}
function Hr(e, t = "download", n) {
  if (typeof e == "string")
    if ($s(e))
      nn(e, t, n);
    else {
      const s = document.createElement("a");
      s.href = e, s.target = "_blank", setTimeout(function() {
        lt(s);
      });
    }
  else
    navigator.msSaveOrOpenBlob(jr(e, n), t);
}
function Ur(e, t, n, s) {
  if (s = s || open("", "_blank"), s && (s.document.title = s.document.body.innerText = "downloading..."), typeof e == "string")
    return nn(e, t, n);
  const r = e.type === "application/octet-stream", o = /constructor/i.test(String($n.HTMLElement)) || "safari" in $n, a = /CriOS\/[\d]+/.test(navigator.userAgent);
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
function K(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function sn(e) {
  return "_a" in e && "install" in e;
}
function Cs() {
  if (!("clipboard" in navigator))
    return K("Your browser doesn't support the Clipboard API", "error"), !0;
}
function Os(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (K('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Br(e) {
  if (!Cs())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), K("Global state copied to clipboard.");
    } catch (t) {
      if (Os(t))
        return;
      K("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function zr(e) {
  if (!Cs())
    try {
      Ts(e, JSON.parse(await navigator.clipboard.readText())), K("Global state pasted from clipboard.");
    } catch (t) {
      if (Os(t))
        return;
      K("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function Wr(e) {
  try {
    Ss(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    K("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let ke;
function Gr() {
  ke || (ke = document.createElement("input"), ke.type = "file", ke.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      ke.onchange = async () => {
        const s = ke.files;
        if (!s)
          return t(null);
        const r = s.item(0);
        return t(r ? { text: await r.text(), file: r } : null);
      }, ke.oncancel = () => t(null), ke.onerror = n, ke.click();
    });
  }
  return e;
}
async function Yr(e) {
  try {
    const n = await Gr()();
    if (!n)
      return;
    const { text: s, file: r } = n;
    Ts(e, JSON.parse(s)), K(`Global state imported from "${r.name}".`);
  } catch (t) {
    K("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function Ts(e, t) {
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
const Ps = "🍍 Pinia (root)", Bt = "_root";
function qr(e) {
  return sn(e) ? {
    id: Bt,
    label: Ps
  } : {
    id: e.$id,
    label: e.$id
  };
}
function Xr(e) {
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
function Kr(e) {
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
function Jr(e) {
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
let ze = !0;
const ct = [], Ie = "pinia:mutations", te = "pinia", { assign: Qr } = Object, vt = (e) => "🍍 " + e;
function Zr(e, t) {
  xs({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: ct,
    app: e
  }, (n) => {
    typeof n.now != "function" && K("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: Ie,
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
            Br(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await zr(t), n.sendInspectorTree(te), n.sendInspectorState(te);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            Wr(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Yr(t), n.sendInspectorTree(te), n.sendInspectorState(te);
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
        Object.values(a).forEach((i) => {
          s.instanceData.state.push({
            type: vt(i.$id),
            key: "state",
            editable: !0,
            value: i._isOptionsAPI ? {
              _custom: {
                value: le(i.$state),
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
            type: vt(i.$id),
            key: "getters",
            editable: !1,
            value: i._getters.reduce((l, u) => {
              try {
                l[u] = i[u];
              } catch (m) {
                l[u] = m;
              }
              return l;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((s) => {
      if (s.app === e && s.inspectorId === te) {
        let r = [t];
        r = r.concat(Array.from(t._s.values())), s.rootNodes = (s.filter ? r.filter((o) => "$id" in o ? o.$id.toLowerCase().includes(s.filter.toLowerCase()) : Ps.toLowerCase().includes(s.filter.toLowerCase())) : r).map(qr);
      }
    }), n.on.getInspectorState((s) => {
      if (s.app === e && s.inspectorId === te) {
        const r = s.nodeId === Bt ? t : t._s.get(s.nodeId);
        if (!r)
          return;
        r && (s.state = Xr(r));
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
function eo(e, t) {
  ct.includes(vt(t.$id)) || ct.push(vt(t.$id)), xs({
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
    t.$onAction(({ after: a, onError: i, name: l, args: u }) => {
      const m = Rs++;
      n.addTimelineEvent({
        layerId: Ie,
        event: {
          time: s(),
          title: "🛫 " + l,
          subtitle: "start",
          data: {
            store: _e(t.$id),
            action: _e(l),
            args: u
          },
          groupId: m
        }
      }), a((f) => {
        Re = void 0, n.addTimelineEvent({
          layerId: Ie,
          event: {
            time: s(),
            title: "🛬 " + l,
            subtitle: "end",
            data: {
              store: _e(t.$id),
              action: _e(l),
              args: u,
              result: f
            },
            groupId: m
          }
        });
      }), i((f) => {
        Re = void 0, n.addTimelineEvent({
          layerId: Ie,
          event: {
            time: s(),
            logType: "error",
            title: "💥 " + l,
            subtitle: "end",
            data: {
              store: _e(t.$id),
              action: _e(l),
              args: u,
              error: f
            },
            groupId: m
          }
        });
      });
    }, !0), t._customProperties.forEach((a) => {
      Q(() => v(t[a]), (i, l) => {
        n.notifyComponentUpdate(), n.sendInspectorState(te), ze && n.addTimelineEvent({
          layerId: Ie,
          event: {
            time: s(),
            title: "Change",
            subtitle: a,
            data: {
              newValue: i,
              oldValue: l
            },
            groupId: Re
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: a, type: i }, l) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(te), !ze)
        return;
      const u = {
        time: s(),
        title: Jr(i),
        data: Qr({ store: _e(t.$id) }, Kr(a)),
        groupId: Re
      };
      i === $e.patchFunction ? u.subtitle = "⤵️" : i === $e.patchObject ? u.subtitle = "🧩" : a && !Array.isArray(a) && (u.subtitle = a.type), a && (u.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: a
        }
      }), n.addTimelineEvent({
        layerId: Ie,
        event: u
      });
    }, { detached: !0, flush: "sync" });
    const r = t._hotUpdate;
    t._hotUpdate = Ve((a) => {
      r(a), n.addTimelineEvent({
        layerId: Ie,
        event: {
          time: s(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: _e(t.$id),
            info: _e("HMR update")
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
let Rs = 0, Re;
function kn(e, t, n) {
  const s = t.reduce((r, o) => (r[o] = le(e)[o], r), {});
  for (const r in s)
    e[r] = function() {
      const o = Rs, a = n ? new Proxy(e, {
        get(...l) {
          return Re = o, Reflect.get(...l);
        },
        set(...l) {
          return Re = o, Reflect.set(...l);
        }
      }) : e;
      Re = o;
      const i = s[r].apply(a, arguments);
      return Re = void 0, i;
    };
}
function to({ app: e, store: t, options: n }) {
  if (t.$id.startsWith("__hot:"))
    return;
  t._isOptionsAPI = !!n.state, kn(t, Object.keys(n.actions), t._isOptionsAPI);
  const s = t._hotUpdate;
  le(t)._hotUpdate = function(r) {
    s.apply(this, arguments), kn(t, Object.keys(r._hmrPayload.actions), !!t._isOptionsAPI);
  }, eo(
    e,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    t
  );
}
function no() {
  const e = ms(!0), t = e.run(() => _({}));
  let n = [], s = [];
  const r = Ve({
    install(o) {
      nt(r), r._a = o, o.provide(Es, r), o.config.globalProperties.$pinia = r, Ze && Zr(o, r), s.forEach((a) => n.push(a)), s = [];
    },
    use(o) {
      return !this._a && !_s ? s.push(o) : n.push(o), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return Ze && typeof Proxy < "u" && r.use(to), r;
}
function Ds(e, t) {
  for (const n in t) {
    const s = t[n];
    if (!(n in e))
      continue;
    const r = e[n];
    Me(r) && Me(s) && !Le(s) && !gt(s) ? e[n] = Ds(r, s) : e[n] = s;
  }
  return e;
}
const Ns = () => {
};
function Sn(e, t, n, s = Ns) {
  e.push(t);
  const r = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), s());
  };
  return !n && hs() && ys(r), r;
}
function He(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const so = (e) => e();
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
const ro = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function oo(e) {
  return !Me(e) || !e.hasOwnProperty(ro);
}
const { assign: me } = Object;
function Cn(e) {
  return !!(Le(e) && e.effect);
}
function On(e, t, n, s) {
  const { state: r, actions: o, getters: a } = t, i = n.state.value[e];
  let l;
  function u() {
    !i && (process.env.NODE_ENV === "production" || !s) && (n.state.value[e] = r ? r() : {});
    const m = process.env.NODE_ENV !== "production" && s ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      Ht(_(r ? r() : {}).value)
    ) : Ht(n.state.value[e]);
    return me(m, o, Object.keys(a || {}).reduce((f, p) => (process.env.NODE_ENV !== "production" && p in m && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${p}" in store "${e}".`), f[p] = Ve(Z(() => {
      nt(n);
      const y = n._s.get(e);
      return a[p].call(y, y);
    })), f), {}));
  }
  return l = Wt(e, u, t, n, s, !0), l;
}
function Wt(e, t, n = {}, s, r, o) {
  let a;
  const i = me({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !s._e.active)
    throw new Error("Pinia destroyed");
  const l = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !_s && (l.onTrigger = (P) => {
    u ? y = P : u == !1 && !E._hotUpdating && (Array.isArray(y) ? y.push(P) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let u, m, f = [], p = [], y;
  const d = s.state.value[e];
  !o && !d && (process.env.NODE_ENV === "production" || !r) && (s.state.value[e] = {});
  const c = _({});
  let w;
  function C(P) {
    let S;
    u = m = !1, process.env.NODE_ENV !== "production" && (y = []), typeof P == "function" ? (P(s.state.value[e]), S = {
      type: $e.patchFunction,
      storeId: e,
      events: y
    }) : (zt(s.state.value[e], P), S = {
      type: $e.patchObject,
      payload: P,
      storeId: e,
      events: y
    });
    const V = w = Symbol();
    Ft().then(() => {
      w === V && (u = !0);
    }), m = !0, He(f, S, s.state.value[e]);
  }
  const O = o ? function() {
    const { state: S } = n, V = S ? S() : {};
    this.$patch((H) => {
      me(H, V);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : Ns
  );
  function g() {
    a.stop(), f = [], p = [], s._s.delete(e);
  }
  function x(P, S) {
    return function() {
      nt(s);
      const V = Array.from(arguments), H = [], be = [];
      function kt(M) {
        H.push(M);
      }
      function St(M) {
        be.push(M);
      }
      He(p, {
        args: V,
        name: P,
        store: E,
        after: kt,
        onError: St
      });
      let Ne;
      try {
        Ne = S.apply(this && this.$id === e ? this : E, V);
      } catch (M) {
        throw He(be, M), M;
      }
      return Ne instanceof Promise ? Ne.then((M) => (He(H, M), M)).catch((M) => (He(be, M), Promise.reject(M))) : (He(H, Ne), Ne);
    };
  }
  const D = /* @__PURE__ */ Ve({
    actions: {},
    getters: {},
    state: [],
    hotState: c
  }), $ = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Sn.bind(null, p),
    $patch: C,
    $reset: O,
    $subscribe(P, S = {}) {
      const V = Sn(f, P, S.detached, () => H()), H = a.run(() => Q(() => s.state.value[e], (be) => {
        (S.flush === "sync" ? m : u) && P({
          storeId: e,
          type: $e.direct,
          events: y
        }, be);
      }, me({}, l, S)));
      return V;
    },
    $dispose: g
  }, E = mt(process.env.NODE_ENV !== "production" || Ze ? me(
    {
      _hmrPayload: D,
      _customProperties: Ve(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    $
    // must be added later
    // setupStore
  ) : $);
  s._s.set(e, E);
  const L = s._a && s._a.runWithContext || so, Y = s._e.run(() => (a = ms(), L(() => a.run(t))));
  for (const P in Y) {
    const S = Y[P];
    if (Le(S) && !Cn(S) || gt(S))
      process.env.NODE_ENV !== "production" && r ? at(c.value, P, it(Y, P)) : o || (d && oo(S) && (Le(S) ? S.value = d[P] : zt(S, d[P])), s.state.value[e][P] = S), process.env.NODE_ENV !== "production" && D.state.push(P);
    else if (typeof S == "function") {
      const V = process.env.NODE_ENV !== "production" && r ? S : x(P, S);
      Y[P] = V, process.env.NODE_ENV !== "production" && (D.actions[P] = S), i.actions[P] = S;
    } else
      process.env.NODE_ENV !== "production" && Cn(S) && (D.getters[P] = o ? (
        // @ts-expect-error
        n.getters[P]
      ) : S, xt && (Y._getters || // @ts-expect-error: same
      (Y._getters = Ve([]))).push(P));
  }
  if (me(E, Y), me(le(E), Y), Object.defineProperty(E, "$state", {
    get: () => process.env.NODE_ENV !== "production" && r ? c.value : s.state.value[e],
    set: (P) => {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error("cannot set hotState");
      C((S) => {
        me(S, P);
      });
    }
  }), process.env.NODE_ENV !== "production" && (E._hotUpdate = Ve((P) => {
    E._hotUpdating = !0, P._hmrPayload.state.forEach((S) => {
      if (S in E.$state) {
        const V = P.$state[S], H = E.$state[S];
        typeof V == "object" && Me(V) && Me(H) ? Ds(V, H) : P.$state[S] = H;
      }
      at(E, S, it(P.$state, S));
    }), Object.keys(E.$state).forEach((S) => {
      S in P.$state || Tt(E, S);
    }), u = !1, m = !1, s.state.value[e] = it(P._hmrPayload, "hotState"), m = !0, Ft().then(() => {
      u = !0;
    });
    for (const S in P._hmrPayload.actions) {
      const V = P[S];
      at(E, S, x(S, V));
    }
    for (const S in P._hmrPayload.getters) {
      const V = P._hmrPayload.getters[S], H = o ? (
        // special handling of options api
        Z(() => (nt(s), V.call(E, E)))
      ) : V;
      at(E, S, H);
    }
    Object.keys(E._hmrPayload.getters).forEach((S) => {
      S in P._hmrPayload.getters || Tt(E, S);
    }), Object.keys(E._hmrPayload.actions).forEach((S) => {
      S in P._hmrPayload.actions || Tt(E, S);
    }), E._hmrPayload = P._hmrPayload, E._getters = P._getters, E._hotUpdating = !1;
  })), Ze) {
    const P = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((S) => {
      Object.defineProperty(E, S, me({ value: E[S] }, P));
    });
  }
  return s._p.forEach((P) => {
    if (Ze) {
      const S = a.run(() => P({
        store: E,
        app: s._a,
        pinia: s,
        options: i
      }));
      Object.keys(S || {}).forEach((V) => E._customProperties.add(V)), me(E, S);
    } else
      me(E, a.run(() => P({
        store: E,
        app: s._a,
        pinia: s,
        options: i
      })));
  }), process.env.NODE_ENV !== "production" && E.$state && typeof E.$state == "object" && typeof E.$state.constructor == "function" && !E.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${E.$id}".`), d && o && n.hydrate && n.hydrate(E.$state, d), u = !0, m = !0, E;
}
function Et(e, t, n) {
  let s, r;
  const o = typeof t == "function";
  if (typeof e == "string")
    s = e, r = o ? n : t;
  else if (r = e, s = e.id, process.env.NODE_ENV !== "production" && typeof s != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function a(i, l) {
    const u = yr();
    if (i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && Qe && Qe._testing ? null : i) || (u ? vs(Es, null) : null), i && nt(i), process.env.NODE_ENV !== "production" && !Qe)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    i = Qe, i._s.has(s) || (o ? Wt(s, t, r, i) : On(s, r, i), process.env.NODE_ENV !== "production" && (a._pinia = i));
    const m = i._s.get(s);
    if (process.env.NODE_ENV !== "production" && l) {
      const f = "__hot:" + s, p = o ? Wt(f, t, r, i, !0) : On(f, me({}, r), i, !0);
      l._hotUpdate(p), delete i.state.value[f], i._s.delete(f);
    }
    if (process.env.NODE_ENV !== "production" && xt) {
      const f = Jt();
      if (f && f.proxy && // avoid adding stores that are just built for hot module replacement
      !l) {
        const p = f.proxy, y = "_pStores" in p ? p._pStores : p._pStores = {};
        y[s] = m;
      }
    }
    return m;
  }
  return a.$id = s, a;
}
function Is(e) {
  {
    e = le(e);
    const t = {};
    for (const n in e) {
      const s = e[n];
      (Le(s) || gt(s)) && (t[n] = // ---
      it(e, n));
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
function Vs(e) {
  const t = (e == null ? void 0 : e.editorConfig) || { maxLength: 5e3, placeholder: "请输入内容..." }, n = (e == null ? void 0 : e.handleError) || (() => {
  }), s = (e == null ? void 0 : e.pinyin) || { fetchData: pe() }, r = (e == null ? void 0 : e.english) || { fetchData: pe() }, o = (e == null ? void 0 : e.special) || {
    fetchData: pe(),
    fetchScene: pe(),
    fetchStyle: pe()
  }, a = (e == null ? void 0 : e.bgm) || {
    fetchData: pe(),
    fetchScene: pe(),
    fetchStyle: pe()
  }, i = (e == null ? void 0 : e.tryPlay) || {
    fetchData: pe(),
    featchTag: pe(),
    fetchStar: pe()
  }, l = (e == null ? void 0 : e.conversion) || {
    timeoutMilliseconds: 2e4,
    audioUpload: () => Tn(),
    transfer: () => Tn(),
    fetchSpeaker: pe()
  }, u = o, m = a, f = i;
  return u.menus ?? (u.menus = [
    { label: "默认音效", value: "" },
    { label: "自定义音效", value: "custom" },
    { label: "最近音效", value: "history" }
  ]), m.menus ?? (m.menus = [
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
    bgm: m,
    special: u,
    tryPlay: f,
    conversion: l
  };
}
const ao = () => ({
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
}), io = () => ({
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
  const e = G(), t = G(), n = Z(() => e.value), s = Z(() => {
    if (t.value)
      return t.value;
    throw Error("请设置GlobalEditorConfig");
  });
  return { editor: n, globalEditConfig: s, setEditor: (a) => {
    e.value = a;
  }, setGlobalEditConfig: (a) => {
    t.value = a ?? Vs();
  } };
}), lo = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-audio" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-audio" ? !tn.string(r) : n(r), s;
};
function Pn(e, t, n, s, r) {
  const o = t === void 0 ? void 0 : t.key;
  return { sel: e, data: t, children: n, text: s, elm: r, key: o };
}
const Rn = Array.isArray;
function Pt(e) {
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
  if (n !== void 0 ? (t !== null && (s = t), Rn(n) ? r = n : Pt(n) ? o = n.toString() : n && n.sel && (r = [n])) : t != null && (Rn(t) ? r = t : Pt(t) ? o = t.toString() : t && t.sel ? r = [t] : s = t), r !== void 0)
    for (a = 0; a < r.length; ++a)
      Pt(r[a]) && (r[a] = Pn(void 0, void 0, void 0, r[a], void 0));
  return e[0] === "s" && e[1] === "v" && e[2] === "g" && (e.length === 3 || e[3] === "." || e[3] === "#") && As(s, r, e), Pn(e, s, r, o, void 0);
}
var We = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ls = "Expected a function", Dn = 0 / 0, uo = "[object Symbol]", co = /^\s+|\s+$/g, fo = /^[-+]0x[0-9a-f]+$/i, po = /^0b[01]+$/i, mo = /^0o[0-7]+$/i, vo = parseInt, ho = typeof We == "object" && We && We.Object === Object && We, yo = typeof self == "object" && self && self.Object === Object && self, go = ho || yo || Function("return this")(), bo = Object.prototype, _o = bo.toString, wo = Math.max, xo = Math.min, Rt = function() {
  return go.Date.now();
};
function Eo(e, t, n) {
  var s, r, o, a, i, l, u = 0, m = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(Ls);
  t = Nn(t) || 0, ht(n) && (m = !!n.leading, f = "maxWait" in n, o = f ? wo(Nn(n.maxWait) || 0, t) : o, p = "trailing" in n ? !!n.trailing : p);
  function y($) {
    var E = s, L = r;
    return s = r = void 0, u = $, a = e.apply(L, E), a;
  }
  function d($) {
    return u = $, i = setTimeout(C, t), m ? y($) : a;
  }
  function c($) {
    var E = $ - l, L = $ - u, Y = t - E;
    return f ? xo(Y, o - L) : Y;
  }
  function w($) {
    var E = $ - l, L = $ - u;
    return l === void 0 || E >= t || E < 0 || f && L >= o;
  }
  function C() {
    var $ = Rt();
    if (w($))
      return O($);
    i = setTimeout(C, c($));
  }
  function O($) {
    return i = void 0, p && s ? y($) : (s = r = void 0, a);
  }
  function g() {
    i !== void 0 && clearTimeout(i), u = 0, s = l = r = i = void 0;
  }
  function x() {
    return i === void 0 ? a : O(Rt());
  }
  function D() {
    var $ = Rt(), E = w($);
    if (s = arguments, r = this, l = $, E) {
      if (i === void 0)
        return d(l);
      if (f)
        return i = setTimeout(C, t), y(l);
    }
    return i === void 0 && (i = setTimeout(C, t)), a;
  }
  return D.cancel = g, D.flush = x, D;
}
function $o(e, t, n) {
  var s = !0, r = !0;
  if (typeof e != "function")
    throw new TypeError(Ls);
  return ht(n) && (s = "leading" in n ? !!n.leading : s, r = "trailing" in n ? !!n.trailing : r), Eo(e, t, {
    leading: s,
    maxWait: t,
    trailing: r
  });
}
function ht(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function ko(e) {
  return !!e && typeof e == "object";
}
function So(e) {
  return typeof e == "symbol" || ko(e) && _o.call(e) == uo;
}
function Nn(e) {
  if (typeof e == "number")
    return e;
  if (So(e))
    return Dn;
  if (ht(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ht(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(co, "");
  var n = po.test(e);
  return n || mo.test(e) ? vo(e.slice(2), n ? 2 : 8) : fo.test(e) ? Dn : +e;
}
var Co = $o;
const ne = /* @__PURE__ */ rn(Co);
function In(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function on(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {}), Object.keys(t).forEach(function(n) {
    typeof e[n] > "u" ? e[n] = t[n] : In(t[n]) && In(e[n]) && Object.keys(t[n]).length > 0 && on(e[n], t[n]);
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
function an() {
  var e = typeof document < "u" ? document : {};
  return on(e, Ms), e;
}
var Oo = {
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
  return on(e, Oo), e;
}
function To(e, t) {
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
function Po() {
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
  return Po() ? dt = Reflect.construct : dt = function(r, o, a) {
    var i = [null];
    i.push.apply(i, o);
    var l = Function.bind.apply(r, i), u = new l();
    return a && yt(u, a.prototype), u;
  }, dt.apply(null, arguments);
}
function Ro(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Yt(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Yt = function(s) {
    if (s === null || !Ro(s))
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
function Do(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function No(e) {
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
  To(t, e);
  function t(n) {
    var s;
    return s = e.call.apply(e, [this].concat(n)) || this, No(Do(s)), s;
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
function Io(e) {
  for (var t = [], n = 0; n < e.length; n += 1)
    t.indexOf(e[n]) === -1 && t.push(e[n]);
  return t;
}
function Vo(e) {
  return e.toLowerCase().replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function Ao(e, t) {
  if (typeof e != "string")
    return [e];
  for (var n = [], s = t.querySelectorAll(e), r = 0; r < s.length; r += 1)
    n.push(s[r]);
  return n;
}
function F(e, t) {
  var n = js(), s = an(), r = [];
  if (!t && e instanceof Ae)
    return e;
  if (!e)
    return new Ae(r);
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
      r = Ao(e.trim(), t || s);
  } else if (e.nodeType || e === n || e === s)
    r.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof Ae)
      return e;
    r = e;
  }
  return new Ae(Io(r));
}
F.fn = Ae.prototype;
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
        r.name.indexOf("data-") >= 0 && (t[Vo(r.name.split("data-")[1])] = r.value);
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
  function i(c) {
    var w = c.target;
    if (w) {
      var C = c.target.dom7EventData || [];
      if (C.indexOf(c) < 0 && C.unshift(c), F(w).is(r))
        o.apply(w, C);
      else
        for (var O = F(w).parents(), g = 0; g < O.length; g += 1)
          F(O[g]).is(r) && o.apply(O[g], C);
    }
  }
  function l(c) {
    var w = c && c.target ? c.target.dom7EventData || [] : [];
    w.indexOf(c) < 0 && w.unshift(c), o.apply(this, w);
  }
  for (var u = s.split(" "), m, f = 0; f < this.length; f += 1) {
    var p = this[f];
    if (r)
      for (m = 0; m < u.length; m += 1) {
        var d = u[m];
        p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[d] || (p.dom7LiveListeners[d] = []), p.dom7LiveListeners[d].push({
          listener: o,
          proxyListener: i
        }), p.addEventListener(d, i, a);
      }
    else
      for (m = 0; m < u.length; m += 1) {
        var y = u[m];
        p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[y] || (p.dom7Listeners[y] = []), p.dom7Listeners[y].push({
          listener: o,
          proxyListener: l
        }), p.addEventListener(y, l, a);
      }
  }
  return this;
}
function Hn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = t[0], r = t[1], o = t[2], a = t[3];
  typeof t[1] == "function" && (s = t[0], o = t[1], a = t[2], r = void 0), a || (a = !1);
  for (var i = s.split(" "), l = 0; l < i.length; l += 1)
    for (var u = i[l], m = 0; m < this.length; m += 1) {
      var f = this[m], p = void 0;
      if (!r && f.dom7Listeners ? p = f.dom7Listeners[u] : r && f.dom7LiveListeners && (p = f.dom7LiveListeners[u]), p && p.length)
        for (var y = p.length - 1; y >= 0; y -= 1) {
          var d = p[y];
          o && d.listener === o || o && d.listener && d.listener.dom7proxy && d.listener.dom7proxy === o ? (f.removeEventListener(u, d.proxyListener, a), p.splice(y, 1)) : o || (f.removeEventListener(u, d.proxyListener, a), p.splice(y, 1));
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
  var t = js(), n = an(), s = this[0], r, o;
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
var Lo = "resize scroll".split(" ");
function Fs(e) {
  function t() {
    for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)
      s[r] = arguments[r];
    if (typeof s[0] > "u") {
      for (var o = 0; o < this.length; o += 1)
        Lo.indexOf(e) < 0 && (e in this[o] ? this[o][e]() : F(this[o]).trigger(e));
      return this;
    }
    return this.on.apply(this, [e].concat(s));
  }
  return t;
}
var Kn = Fs("click"), Jn = Fs("focus");
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
Vn && (F.fn.addClass = Vn);
An && (F.fn.removeClass = An);
Xn && (F.fn.children = Xn);
Bn && (F.fn.each = Bn);
qn && (F.fn.find = qn);
Wn && (F.fn.is = Wn);
Yn && (F.fn.parents = Yn);
const Gd = globalThis.Node, Yd = globalThis.Comment, qd = globalThis.Element, Xd = globalThis.Text, Kd = globalThis.Range, Jd = globalThis.Selection, Qd = globalThis.StaticRange;
let Mo = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function Zd(e = "r") {
  return `${e}-${Mo()}`;
}
let jo = class {
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
const Ye = new jo();
function Qn(e) {
  const t = Math.floor(e / 60), n = e % 60, s = String(t).padStart(2, "0"), r = String(n).padStart(2, "0");
  return `${s}:${r}`;
}
class Fo {
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
class Ho {
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
function Uo(e) {
  const { selection: t } = e;
  if (t) {
    const [n, s] = ce.edges(t), r = q.range(e, n, s), o = q.string(e, r), a = o.trimEnd();
    if (a !== o) {
      const i = o.length - a.length, l = { ...s, offset: s.offset - i }, u = { ...t, anchor: n, focus: l };
      z.select(e, u);
    }
  }
}
function Zn(e, t) {
  q.withoutNormalizing(e, () => {
    const n = q.start(e, t), s = q.end(e, t);
    z.insertText(e, " ", { at: n }), z.insertText(e, " ", {
      at: { path: s.path, offset: s.offset + 1 }
    }), z.select(e, {
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
    q.string(e, r) === " " && z.delete(e, { at: r }), q.string(e, o) === " " && z.delete(e, { at: o });
  });
}
const Bo = {
  type: "ssml-audio",
  renderElem: (e, t, n) => t ? zo(e, t, n) : Wo(e, n)
};
function zo(e, t, n) {
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
              qe(n, a), z.unwrapNodes(n, { at: a });
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
function Wo(e, t) {
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
              z.delete(t, { at: o });
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
const Go = {
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
}, Yo = {
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
}, qo = {
  editorPlugin: lo,
  renderElems: [Bo],
  elemsToHtml: [Go],
  parseElemsHtml: [Yo]
}, Xo = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-break" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-break" ? !0 : n(r), s;
}, Ko = {
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
                  z.delete(n, { at: o });
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
}, Jo = {
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
}, Qo = {
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
}, Zo = {
  editorPlugin: Xo,
  renderElems: [Ko],
  elemsToHtml: [Jo],
  parseElemsHtml: [Qo]
}, ea = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-emphasis" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-emphasis" ? !1 : n(r), s;
}, ta = {
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
                z.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, na = {
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
}, sa = {
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
}, ra = {
  editorPlugin: ea,
  renderElems: [ta],
  elemsToHtml: [na],
  parseElemsHtml: [sa]
}, oa = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-mstts:express-as" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-mstts:express-as" ? !1 : n(r), s;
}, aa = {
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
                z.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, ia = {
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
}, la = {
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
}, ua = {
  editorPlugin: oa,
  renderElems: [aa],
  elemsToHtml: [ia],
  parseElemsHtml: [la]
}, ca = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-p" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-p" ? !1 : n(r), s;
}, da = {
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
                z.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, fa = {
  type: "ssml-p",
  elemToHtml: (e, t) => {
    const { remark: n } = e;
    return `<span
          data-w-e-type="ssml-p"
          data-w-e-is-inline
          data-ow-remark="${n}"
        >${t}</span>`;
  }
}, pa = {
  selector: 'span[data-w-e-type="ssml-p"]',
  parseElemHtml: (e, t) => ({
    type: "ssml-p",
    remark: e.getAttribute("data-ow-remark") || "",
    children: t
  })
}, ma = {
  editorPlugin: ca,
  renderElems: [da],
  elemsToHtml: [fa],
  parseElemsHtml: [pa]
}, va = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-phoneme" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-phoneme" ? !1 : n(r), s;
}, ha = {
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
                qe(n, o), z.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, ya = {
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
}, ga = {
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
}, ba = {
  editorPlugin: va,
  renderElems: [ha],
  elemsToHtml: [ya],
  parseElemsHtml: [ga]
}, _a = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-prosody" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-prosody" ? !1 : n(r), s;
}, wa = {
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
                qe(n, o), z.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, xa = {
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
}, Ea = {
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
}, $a = {
  editorPlugin: _a,
  renderElems: [wa],
  elemsToHtml: [xa],
  parseElemsHtml: [Ea]
}, ka = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-s" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-s" ? !1 : n(r), s;
}, Sa = {
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
                z.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, Ca = {
  type: "ssml-s",
  elemToHtml: (e, t) => {
    const { remark: n } = e;
    return `<span
          data-w-e-type="ssml-s"
          data-w-e-is-inline
          data-ow-remark="${n}"
        >${t}</span>`;
  }
}, Oa = {
  selector: 'span[data-w-e-type="ssml-s"]',
  parseElemHtml: (e, t) => ({
    type: "ssml-s",
    remark: e.getAttribute("data-ow-remark") || "",
    children: t
  })
}, Ta = {
  editorPlugin: ka,
  renderElems: [Sa],
  elemsToHtml: [Ca],
  parseElemsHtml: [Oa]
}, Pa = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-say-as" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-say-as" ? !1 : n(r), s;
}, Ra = {
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
                qe(n, o), z.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, Da = {
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
}, Na = {
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
}, Ia = {
  editorPlugin: Pa,
  renderElems: [Ra],
  elemsToHtml: [Da],
  parseElemsHtml: [Na]
}, Va = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-sub" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-sub" ? !1 : n(r), s;
}, Aa = {
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
                qe(n, o), z.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, La = {
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
}, Ma = {
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
}, ja = {
  editorPlugin: Va,
  renderElems: [Aa],
  elemsToHtml: [La],
  parseElemsHtml: [Ma]
}, Fa = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-voice" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-voice" ? !1 : n(r), s;
}, Ha = {
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
                z.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, Ua = {
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
}, Ba = {
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
}, za = {
  editorPlugin: Fa,
  renderElems: [Ha],
  elemsToHtml: [Ua],
  parseElemsHtml: [Ba]
}, Wa = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "custom-management" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "custom-management" ? !1 : n(r), s;
}, Ga = "wangeditor-error", Ya = "ssml-element-click", W = {
  ERROR: Ga,
  SSML_ELEMENT_CLICK: Ya
}, qa = "emitter-error", Xa = "emitter-view-click", Ka = "emitter-view-keydown", Ja = "emitter-editor-created", ve = { ERROR: qa, VIEW_CLICK: Xa, VIEW_KEYDOWN: Ka, EDITOR_CREATED: Ja }, Qa = {
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
              r.preventDefault(), n.select(I.findPath(n, e)), n.emit(W.SSML_ELEMENT_CLICK, n, e);
            })
          }
        },
        [
          k("span.iconfont.icon-roundclosefill", {
            on: {
              click: ne((r) => {
                r.preventDefault();
                const o = I.findPath(n, e);
                qe(n, o), z.unwrapNodes(n, { at: o });
              })
            }
          }),
          k("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, Za = {
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
}, ei = {
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
}, ti = {
  editorPlugin: Wa,
  renderElems: [Qa],
  elemsToHtml: [Za],
  parseElemsHtml: [ei]
}, ni = (e) => {
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
  } = e, m = e;
  m.deleteBackward = (p) => {
    t(p);
  }, m.deleteForward = (p) => {
    n(p);
  }, m.insertBreak = () => {
    s();
  }, m.normalizeNode = (p) => {
    o(p);
  }, m.apply = (p) => {
    r(p);
  }, m.insertData = (p) => (p.types.includes("application/x-slate-fragment") || p.setData("text/html", p.getData("text/plain").trim()), i(p)), m.setFragmentData = (p) => {
    l(p);
    const y = p.getData("text/plain").replaceAll(/[\s]/gi, "");
    p.setData("text/plain", y);
  }, m.insertText = (p) => {
    a(p);
  };
  const f = [
    "ssml-prosody",
    "ssml-sub",
    "custom-management",
    "ssml-phoneme",
    "ssml-say-as"
  ];
  return m.insertNode = (p) => {
    const y = I.getNodeType(p);
    return f.includes(y) ? (e.selection && Zn(e, e.selection), z.insertNodes(e, p)) : y === "ssml-audio" && tn.string(p) ? (e.selection && Zn(e, e.selection), z.insertNodes(e, p)) : u(p);
  }, m;
};
const si = {
  install() {
    ae.registerModule(qo), ae.registerModule(Zo), ae.registerModule(ra), ae.registerModule(ua), ae.registerModule(ma), ae.registerModule(ba), ae.registerModule($a), ae.registerModule(Ta), ae.registerModule(Ia), ae.registerModule(ja), ae.registerModule(za), ae.registerModule(ti), ae.registerPlugin(ni);
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
function tf() {
  return { label: "", value: "" };
}
function ri() {
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
  const e = je(), t = _(ri());
  return { speaker: Z(() => t.value), setSpeaker: (r) => {
    t.value = r, e.rootVoice.name = r.name;
  } };
}), oi = () => [
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
], ai = () => [
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
function ii(e) {
  return `${(0.05 * e * 100).toFixed(0)}%`;
}
function li(e) {
  return `${((e - 1) * 100).toFixed(0)}%`;
}
function ui() {
  return {
    category: "",
    name: "",
    role: "",
    style: "",
    speed: "1.0",
    pitch: "0"
  };
}
const Hs = Et("--editor-management-menu", () => ({ contentData: mt(ui()) })), ci = { class: "bar-button-icon" }, di = {
  class: "fw-normal",
  style: { "font-size": "0.85rem" }
}, fi = /* @__PURE__ */ A({
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
    return (r, o) => (T(), N("div", {
      class: ye(["bar-button px-2 py-1", { disabled: r.disabled }]),
      onClick: s,
      onMousedown: o[0] || (o[0] = re(() => {
      }, ["prevent"]))
    }, [
      h("div", ci, [
        h("span", {
          class: ye(["fs-3 iconfont-moyin", [`moyin-icon_${r.icon}`]])
        }, null, 2)
      ]),
      h("div", di, B(r.text), 1)
    ], 34));
  }
});
const fe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, se = /* @__PURE__ */ fe(fi, [["__scopeId", "data-v-2da9a7ca"]]);
const dn = /* @__PURE__ */ A({
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
    }), (i, l) => (T(), X(v(_t), {
      onSubmit: re(a, ["prevent"])
    }, {
      default: R(() => [
        b(v(wt), {
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
const pi = /* @__PURE__ */ A({
  __name: "bar-popover",
  props: {
    visible: { type: Boolean },
    trigger: {},
    hideAfter: {},
    width: {}
  },
  emits: ["update:visible"],
  setup(e) {
    return (t, n) => (T(), X(v(Te), {
      hideAfter: t.hideAfter,
      width: t.width,
      visible: t.visible,
      trigger: t.trigger,
      "onUpdate:visible": n[0] || (n[0] = (s) => t.$emit("update:visible", s))
    }, {
      reference: R(() => [
        Oe(t.$slots, "reference")
      ]),
      default: R(() => [
        Oe(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["hideAfter", "width", "visible", "trigger"]));
  }
});
function $t(e) {
  return hs() ? (ys(e), !0) : !1;
}
function we(e) {
  return typeof e == "function" ? e() : v(e);
}
const Us = typeof window < "u", mi = (e) => e != null, ft = () => {
};
var vi = Object.defineProperty, hi = Object.defineProperties, yi = Object.getOwnPropertyDescriptors, es = Object.getOwnPropertySymbols, gi = Object.prototype.hasOwnProperty, bi = Object.prototype.propertyIsEnumerable, ts = (e, t, n) => t in e ? vi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, _i = (e, t) => {
  for (var n in t || (t = {}))
    gi.call(t, n) && ts(e, n, t[n]);
  if (es)
    for (var n of es(t))
      bi.call(t, n) && ts(e, n, t[n]);
  return e;
}, wi = (e, t) => hi(e, yi(t));
function xi(e, t = {}) {
  if (!Le(e))
    return Ht(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const s in e.value)
    n[s] = gr(() => ({
      get() {
        return e.value[s];
      },
      set(r) {
        var o;
        if ((o = we(t.replaceRef)) != null ? o : !0)
          if (Array.isArray(e.value)) {
            const i = [...e.value];
            i[s] = r, e.value = i;
          } else {
            const i = wi(_i({}, e.value), { [s]: r });
            Object.setPrototypeOf(i, Object.getPrototypeOf(e.value)), e.value = i;
          }
        else
          e.value[s] = r;
      }
    }));
  return n;
}
function Bs(e, t = !0) {
  Jt() ? ue(e) : t ? e() : Ft(e);
}
function xe(e) {
  var t;
  const n = we(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const De = Us ? window : void 0;
function Ge(...e) {
  let t, n, s, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, r] = e, t = De) : [t, n, s, r] = e, !t)
    return ft;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const o = [], a = () => {
    o.forEach((m) => m()), o.length = 0;
  }, i = (m, f, p, y) => (m.addEventListener(f, p, y), () => m.removeEventListener(f, p, y)), l = Q(
    () => [xe(t), we(r)],
    ([m, f]) => {
      a(), m && o.push(
        ...n.flatMap((p) => s.map((y) => i(m, p, y, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    l(), a();
  };
  return $t(u), u;
}
function Ei() {
  const e = _(!1);
  return Jt() && ue(() => {
    e.value = !0;
  }), e;
}
function fn(e) {
  const t = Ei();
  return Z(() => (t.value, !!e()));
}
function $i(e, t = {}) {
  const { window: n = De } = t, s = fn(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let r;
  const o = _(!1), a = (u) => {
    o.value = u.matches;
  }, i = () => {
    r && ("removeEventListener" in r ? r.removeEventListener("change", a) : r.removeListener(a));
  }, l = br(() => {
    s.value && (i(), r = n.matchMedia(we(e)), "addEventListener" in r ? r.addEventListener("change", a) : r.addListener(a), o.value = r.matches);
  });
  return $t(() => {
    l(), i(), r = void 0;
  }), o;
}
var ki = Object.defineProperty, Si = Object.defineProperties, Ci = Object.getOwnPropertyDescriptors, ns = Object.getOwnPropertySymbols, Oi = Object.prototype.hasOwnProperty, Ti = Object.prototype.propertyIsEnumerable, ss = (e, t, n) => t in e ? ki(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Pi = (e, t) => {
  for (var n in t || (t = {}))
    Oi.call(t, n) && ss(e, n, t[n]);
  if (ns)
    for (var n of ns(t))
      Ti.call(t, n) && ss(e, n, t[n]);
  return e;
}, Ri = (e, t) => Si(e, Ci(t));
function pn(e, t = {}) {
  var n, s;
  const {
    pointerTypes: r,
    preventDefault: o,
    stopPropagation: a,
    exact: i,
    onMove: l,
    onEnd: u,
    onStart: m,
    initialValue: f,
    axis: p = "both",
    draggingElement: y = De,
    handle: d = e
  } = t, c = _(
    (n = we(f)) != null ? n : { x: 0, y: 0 }
  ), w = _(), C = ($) => r ? r.includes($.pointerType) : !0, O = ($) => {
    we(o) && $.preventDefault(), we(a) && $.stopPropagation();
  }, g = ($) => {
    if (!C($) || we(i) && $.target !== we(e))
      return;
    const E = we(e).getBoundingClientRect(), L = {
      x: $.clientX - E.left,
      y: $.clientY - E.top
    };
    (m == null ? void 0 : m(L, $)) !== !1 && (w.value = L, O($));
  }, x = ($) => {
    if (!C($) || !w.value)
      return;
    let { x: E, y: L } = c.value;
    (p === "x" || p === "both") && (E = $.clientX - w.value.x), (p === "y" || p === "both") && (L = $.clientY - w.value.y), c.value = {
      x: E,
      y: L
    }, l == null || l(c.value, $), O($);
  }, D = ($) => {
    C($) && w.value && (w.value = void 0, u == null || u(c.value, $), O($));
  };
  if (Us) {
    const $ = { capture: (s = t.capture) != null ? s : !0 };
    Ge(d, "pointerdown", g, $), Ge(y, "pointermove", x, $), Ge(y, "pointerup", D, $);
  }
  return Ri(Pi({}, xi(c)), {
    position: c,
    isDragging: Z(() => !!w.value),
    style: Z(
      () => `left:${c.value.x}px;top:${c.value.y}px;`
    )
  });
}
var rs = Object.getOwnPropertySymbols, Di = Object.prototype.hasOwnProperty, Ni = Object.prototype.propertyIsEnumerable, Ii = (e, t) => {
  var n = {};
  for (var s in e)
    Di.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && rs)
    for (var s of rs(e))
      t.indexOf(s) < 0 && Ni.call(e, s) && (n[s] = e[s]);
  return n;
};
function zs(e, t, n = {}) {
  const s = n, { window: r = De } = s, o = Ii(s, ["window"]);
  let a;
  const i = fn(() => r && "ResizeObserver" in r), l = () => {
    a && (a.disconnect(), a = void 0);
  }, u = Z(
    () => Array.isArray(e) ? e.map((p) => xe(p)) : [xe(e)]
  ), m = Q(
    u,
    (p) => {
      if (l(), i.value && r) {
        a = new ResizeObserver(t);
        for (const y of p)
          y && a.observe(y, o);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), f = () => {
    l(), m();
  };
  return $t(f), {
    isSupported: i,
    stop: f
  };
}
function rt(e, t = {}) {
  const {
    reset: n = !0,
    windowResize: s = !0,
    windowScroll: r = !0,
    immediate: o = !0
  } = t, a = _(0), i = _(0), l = _(0), u = _(0), m = _(0), f = _(0), p = _(0), y = _(0);
  function d() {
    const c = xe(e);
    if (!c) {
      n && (a.value = 0, i.value = 0, l.value = 0, u.value = 0, m.value = 0, f.value = 0, p.value = 0, y.value = 0);
      return;
    }
    const w = c.getBoundingClientRect();
    a.value = w.height, i.value = w.bottom, l.value = w.left, u.value = w.right, m.value = w.top, f.value = w.width, p.value = w.x, y.value = w.y;
  }
  return zs(e, d), Q(() => xe(e), (c) => !c && d()), r && Ge("scroll", d, { capture: !0, passive: !0 }), s && Ge("resize", d, { passive: !0 }), Bs(() => {
    o && d();
  }), {
    height: a,
    bottom: i,
    left: l,
    right: u,
    top: m,
    width: f,
    x: p,
    y,
    update: d
  };
}
function Vi(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: s = De, box: r = "content-box" } = n, o = Z(() => {
    var l, u;
    return (u = (l = xe(e)) == null ? void 0 : l.namespaceURI) == null ? void 0 : u.includes("svg");
  }), a = _(t.width), i = _(t.height);
  return zs(
    e,
    ([l]) => {
      const u = r === "border-box" ? l.borderBoxSize : r === "content-box" ? l.contentBoxSize : l.devicePixelContentBoxSize;
      if (s && o.value) {
        const m = xe(e);
        if (m) {
          const f = s.getComputedStyle(m);
          a.value = Number.parseFloat(f.width), i.value = Number.parseFloat(f.height);
        }
      } else if (u) {
        const m = Array.isArray(u) ? u : [u];
        a.value = m.reduce((f, { inlineSize: p }) => f + p, 0), i.value = m.reduce((f, { blockSize: p }) => f + p, 0);
      } else
        a.value = l.contentRect.width, i.value = l.contentRect.height;
    },
    n
  ), Q(
    () => xe(e),
    (l) => {
      a.value = l ? t.width : 0, i.value = l ? t.height : 0;
    }
  ), {
    width: a,
    height: i
  };
}
function Ai(e, t, n = {}) {
  const {
    root: s,
    rootMargin: r = "0px",
    threshold: o = 0.1,
    window: a = De,
    immediate: i = !0
  } = n, l = fn(() => a && "IntersectionObserver" in a), u = Z(() => {
    const d = we(e);
    return (Array.isArray(d) ? d : [d]).map(xe).filter(mi);
  });
  let m = ft;
  const f = _(i), p = l.value ? Q(
    () => [u.value, xe(s), f.value],
    ([d, c]) => {
      if (m(), !f.value || !d.length)
        return;
      const w = new IntersectionObserver(
        t,
        {
          root: xe(c),
          rootMargin: r,
          threshold: o
        }
      );
      d.forEach((C) => C && w.observe(C)), m = () => {
        w.disconnect(), m = ft;
      };
    },
    { immediate: i, flush: "post" }
  ) : ft, y = () => {
    m(), p(), f.value = !1;
  };
  return $t(y), {
    isSupported: l,
    isActive: f,
    pause() {
      m(), f.value = !1;
    },
    resume() {
      f.value = !0;
    },
    stop: y
  };
}
function mn(e, { window: t = De, scrollTarget: n } = {}) {
  const s = _(!1);
  return Ai(
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
function Li(e = {}) {
  const {
    window: t = De,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: s = Number.POSITIVE_INFINITY,
    listenOrientation: r = !0,
    includeScrollbar: o = !0
  } = e, a = _(n), i = _(s), l = () => {
    t && (o ? (a.value = t.innerWidth, i.value = t.innerHeight) : (a.value = t.document.documentElement.clientWidth, i.value = t.document.documentElement.clientHeight));
  };
  if (l(), Bs(l), Ge("resize", l, { passive: !0 }), r) {
    const u = $i("(orientation: portrait)");
    Q(u, () => l());
  }
  return { width: a, height: i };
}
const Mi = { class: "search-content w-100" }, ji = { class: "ps-2 w-75" }, Fi = { class: "menu ps-2" }, Hi = { class: "flex flex-row pt-1" }, Ui = {
  class: "content-list overflow-x-hidden overflow-y-auto py-2",
  style: { height: "250px" }
}, Bi = ["onClick"], zi = /* @__PURE__ */ h("span", { class: "iconfont icon-play" }, null, -1), Wi = { class: "ps-2" }, vn = /* @__PURE__ */ A({
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
    const n = e, s = _(), r = _(""), o = _(""), a = _(""), i = _(""), l = _(n.dataList || []), u = _(n.sceneList || []), m = _(n.styleList || []), f = mn(s);
    Q(f, (c) => {
      c && setTimeout(() => {
        var w;
        (w = s.value) == null || w.focus();
      }, 100);
    }), ue(async () => {
      l.value.length || await p(), u.value.length || (u.value = await n.fetchScene()), m.value.length || (m.value = await n.fetchStyle());
    });
    async function p() {
      l.value = await n.fetchData({
        word: r.value,
        menu: i.value,
        scene: o.value,
        style: a.value
      });
    }
    function y(c) {
      i.value = c, p();
    }
    function d(c) {
      t("submit", c);
    }
    return (c, w) => (T(), N("div", Mi, [
      h("div", ji, [
        b(v(_t), {
          onSubmit: re(p, ["prevent"])
        }, {
          default: R(() => [
            b(v(wt), {
              ref_key: "searchInputRef",
              ref: s,
              placeholder: "搜索",
              modelValue: r.value,
              "onUpdate:modelValue": w[0] || (w[0] = (C) => r.value = C),
              "suffix-icon": v(Sr)
            }, null, 8, ["modelValue", "suffix-icon"])
          ]),
          _: 1
        }, 8, ["onSubmit"])
      ]),
      h("div", Fi, [
        b(v(Er), {
          mode: "horizontal",
          "default-active": c.menus.length > 0 ? c.menus[0].value : "",
          onSelect: w[1] || (w[1] = (C) => y(C))
        }, {
          default: R(() => [
            (T(!0), N(J, null, oe(c.menus, (C, O) => (T(), X(v($r), {
              index: C.value,
              key: O
            }, {
              default: R(() => [
                U(B(C.label), 1)
              ]),
              _: 2
            }, 1032, ["index"]))), 128))
          ]),
          _: 1
        }, 8, ["default-active"])
      ]),
      h("div", Hi, [
        b(v(xn), {
          modelValue: o.value,
          "onUpdate:modelValue": w[2] || (w[2] = (C) => o.value = C),
          onChange: p,
          class: "m-1",
          size: "default"
        }, {
          default: R(() => [
            (T(!0), N(J, null, oe(u.value, (C) => (T(), X(v(En), {
              key: C.value,
              label: C.label,
              value: C.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        b(v(xn), {
          modelValue: a.value,
          "onUpdate:modelValue": w[3] || (w[3] = (C) => a.value = C),
          onChange: p,
          class: "m-1",
          size: "default"
        }, {
          default: R(() => [
            (T(!0), N(J, null, oe(m.value, (C) => (T(), X(v(En), {
              key: C.value,
              label: C.label,
              value: C.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      h("ul", Ui, [
        (T(!0), N(J, null, oe(l.value, (C, O) => (T(), N("li", {
          onClick: (g) => d(le(C)),
          class: "content-list-item clickable ps-2 py-2",
          key: O
        }, [
          zi,
          h("span", Wi, B(C.label), 1)
        ], 8, Bi))), 128))
      ])
    ]));
  }
});
const Gi = {}, Yi = { class: "content" };
function qi(e, t) {
  return T(), N("div", Yi, [
    Oe(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Ws = /* @__PURE__ */ fe(Gi, [["render", qi], ["__scopeId", "data-v-7beae5b9"]]), Xi = {}, Ki = { class: "bar-wrapper-item" };
function Ji(e, t) {
  return T(), N("div", Ki, [
    Oe(e.$slots, "default")
  ]);
}
const Qi = /* @__PURE__ */ fe(Xi, [["render", Ji]]), Zi = { class: "bar-wrapper-group" }, el = { class: "group-items" }, tl = /* @__PURE__ */ A({
  __name: "bar-wrapper-group",
  props: {
    divider: {}
  },
  setup(e) {
    return (t, n) => (T(), N("div", Zi, [
      h("div", el, [
        Oe(t.$slots, "default", {}, void 0, !0)
      ]),
      h("div", {
        class: ye(["divider", [t.divider]])
      }, null, 2)
    ]));
  }
});
const Be = /* @__PURE__ */ fe(tl, [["__scopeId", "data-v-be31f837"]]);
function nl(e, t) {
  return `left:${e}px;top:${t}px`;
}
function hn(e, t) {
  const { width: n, height: s } = Vi(e), { width: r, height: o } = Li(), a = Z(() => ({
    x: r.value - n.value,
    y: o.value - s.value
  }));
  return { style: Z(() => {
    const l = t.value.x, u = t.value.y, m = l < 5 ? 5 : l > a.value.x ? a.value.x - 5 : l, f = u < 5 ? 5 : u > a.value.y ? a.value.y - 5 : u;
    return nl(m, f);
  }) };
}
var qt = { exports: {} }, Gs = { exports: {} }, sl = void 0, Ys = function(e) {
  return e !== sl && e !== null;
}, rl = Ys, ol = {
  object: !0,
  function: !0,
  undefined: !0
  /* document.all */
}, al = function(e) {
  return rl(e) ? hasOwnProperty.call(ol, typeof e) : !1;
}, il = al, ll = function(e) {
  if (!il(e))
    return !1;
  try {
    return e.constructor ? e.constructor.prototype === e : !1;
  } catch {
    return !1;
  }
}, ul = ll, cl = function(e) {
  if (typeof e != "function" || !hasOwnProperty.call(e, "length"))
    return !1;
  try {
    if (typeof e.length != "number" || typeof e.call != "function" || typeof e.apply != "function")
      return !1;
  } catch {
    return !1;
  }
  return !ul(e);
}, dl = cl, fl = /^\s*class[\s{/}]/, pl = Function.prototype.toString, ml = function(e) {
  return !(!dl(e) || fl.test(pl.call(e)));
}, vl = function() {
  var e = Object.assign, t;
  return typeof e != "function" ? !1 : (t = { foo: "raz" }, e(t, { bar: "dwa" }, { trzy: "trzy" }), t.foo + t.bar + t.trzy === "razdwatrzy");
}, Dt, os;
function hl() {
  return os || (os = 1, Dt = function() {
    try {
      return Object.keys("primitive"), !0;
    } catch {
      return !1;
    }
  }), Dt;
}
var yl = function() {
}, gl = yl(), yn = function(e) {
  return e !== gl && e !== null;
}, Nt, as;
function bl() {
  if (as)
    return Nt;
  as = 1;
  var e = yn, t = Object.keys;
  return Nt = function(n) {
    return t(e(n) ? Object(n) : n);
  }, Nt;
}
var It, is;
function _l() {
  return is || (is = 1, It = hl()() ? Object.keys : bl()), It;
}
var Vt, ls;
function wl() {
  if (ls)
    return Vt;
  ls = 1;
  var e = yn;
  return Vt = function(t) {
    if (!e(t))
      throw new TypeError("Cannot use null or undefined");
    return t;
  }, Vt;
}
var At, us;
function xl() {
  if (us)
    return At;
  us = 1;
  var e = _l(), t = wl(), n = Math.max;
  return At = function(s, r) {
    var o, a, i = n(arguments.length, 2), l;
    for (s = Object(t(s)), l = function(u) {
      try {
        s[u] = r[u];
      } catch (m) {
        o || (o = m);
      }
    }, a = 1; a < i; ++a)
      r = arguments[a], e(r).forEach(l);
    if (o !== void 0)
      throw o;
    return s;
  }, At;
}
var El = vl() ? Object.assign : xl(), $l = yn, kl = Array.prototype.forEach, Sl = Object.create, Cl = function(e, t) {
  var n;
  for (n in e)
    t[n] = e[n];
}, Ol = function(e) {
  var t = Sl(null);
  return kl.call(arguments, function(n) {
    $l(n) && Cl(Object(n), t);
  }), t;
}, Lt = "razdwatrzy", Tl = function() {
  return typeof Lt.contains != "function" ? !1 : Lt.contains("dwa") === !0 && Lt.contains("foo") === !1;
}, Mt, cs;
function Pl() {
  if (cs)
    return Mt;
  cs = 1;
  var e = String.prototype.indexOf;
  return Mt = function(t) {
    return e.call(this, t, arguments[1]) > -1;
  }, Mt;
}
var Rl = Tl() ? String.prototype.contains : Pl(), pt = Ys, ds = ml, qs = El, Xs = Ol, et = Rl, Dl = Gs.exports = function(e, t) {
  var n, s, r, o, a;
  return arguments.length < 2 || typeof e != "string" ? (o = t, t = e, e = null) : o = arguments[2], pt(e) ? (n = et.call(e, "c"), s = et.call(e, "e"), r = et.call(e, "w")) : (n = r = !0, s = !1), a = { value: t, configurable: n, enumerable: s, writable: r }, o ? qs(Xs(o), a) : a;
};
Dl.gs = function(e, t, n) {
  var s, r, o, a;
  return typeof e != "string" ? (o = n, n = t, t = e, e = null) : o = arguments[3], pt(t) ? ds(t) ? pt(n) ? ds(n) || (o = n, n = void 0) : n = void 0 : (o = t, t = n = void 0) : t = void 0, pt(e) ? (s = et.call(e, "c"), r = et.call(e, "e")) : (s = !0, r = !1), a = { get: t, set: n, configurable: s, enumerable: r }, o ? qs(Xs(o), a) : a;
};
var Nl = Gs.exports, Il = function(e) {
  if (typeof e != "function")
    throw new TypeError(e + " is not a function");
  return e;
};
(function(e, t) {
  var n = Nl, s = Il, r = Function.prototype.apply, o = Function.prototype.call, a = Object.create, i = Object.defineProperty, l = Object.defineProperties, u = Object.prototype.hasOwnProperty, m = { configurable: !0, enumerable: !1, writable: !0 }, f, p, y, d, c, w, C;
  f = function(O, g) {
    var x;
    return s(g), u.call(this, "__ee__") ? x = this.__ee__ : (x = m.value = a(null), i(this, "__ee__", m), m.value = null), x[O] ? typeof x[O] == "object" ? x[O].push(g) : x[O] = [x[O], g] : x[O] = g, this;
  }, p = function(O, g) {
    var x, D;
    return s(g), D = this, f.call(this, O, x = function() {
      y.call(D, O, x), r.call(g, this, arguments);
    }), x.__eeOnceListener__ = g, this;
  }, y = function(O, g) {
    var x, D, $, E;
    if (s(g), !u.call(this, "__ee__"))
      return this;
    if (x = this.__ee__, !x[O])
      return this;
    if (D = x[O], typeof D == "object")
      for (E = 0; $ = D[E]; ++E)
        ($ === g || $.__eeOnceListener__ === g) && (D.length === 2 ? x[O] = D[E ? 0 : 1] : D.splice(E, 1));
    else
      (D === g || D.__eeOnceListener__ === g) && delete x[O];
    return this;
  }, d = function(O) {
    var g, x, D, $, E;
    if (u.call(this, "__ee__") && ($ = this.__ee__[O], !!$))
      if (typeof $ == "object") {
        for (x = arguments.length, E = new Array(x - 1), g = 1; g < x; ++g)
          E[g - 1] = arguments[g];
        for ($ = $.slice(), g = 0; D = $[g]; ++g)
          r.call(D, this, E);
      } else
        switch (arguments.length) {
          case 1:
            o.call($, this);
            break;
          case 2:
            o.call($, this, arguments[1]);
            break;
          case 3:
            o.call($, this, arguments[1], arguments[2]);
            break;
          default:
            for (x = arguments.length, E = new Array(x - 1), g = 1; g < x; ++g)
              E[g - 1] = arguments[g];
            r.call($, this, E);
        }
  }, c = {
    on: f,
    once: p,
    off: y,
    emit: d
  }, w = {
    on: n(f),
    once: n(p),
    off: n(y),
    emit: n(d)
  }, C = l({}, w), e.exports = t = function(O) {
    return O == null ? a(C) : l(Object(O), w);
  }, t.methods = c;
})(qt, qt.exports);
var Vl = qt.exports;
const Al = /* @__PURE__ */ rn(Vl), he = Al(), Ll = { class: "w-100 d-flex flex-row align-items-center" }, Xe = /* @__PURE__ */ A({
  __name: "drag-box",
  props: {
    visible: { type: Boolean },
    initialValue: {}
  },
  emits: ["update:visible", "close"],
  setup(e, { expose: t, emit: n }) {
    const s = e, r = _(), o = _(), a = _(), { position: i } = pn(o, {
      initialValue: s.initialValue
    }), { style: l } = hn(r, i);
    function u(d) {
      i.value = d;
    }
    t({
      setPosition: u
    }), ue(() => {
      he.on(ve.VIEW_CLICK, m), document.addEventListener("keydown", y);
    }), Qt(() => {
      he.off(ve.VIEW_CLICK, m), document.removeEventListener("keydown", y);
    });
    function m(d) {
      f(d) && p();
    }
    function f(d) {
      const c = d.target;
      return !(!r.value || !a.value || a.value.contains(c) || r.value.contains(c));
    }
    function p() {
      n("update:visible", !1), n("close");
    }
    function y(d) {
      d.code === "Escape" && p();
    }
    return (d, c) => (T(), N(J, null, [
      h("div", {
        ref_key: "referenceRef",
        ref: a,
        onMousedown: c[0] || (c[0] = re(() => {
        }, ["prevent"]))
      }, [
        Oe(d.$slots, "reference")
      ], 544),
      (T(), X(gs, { to: "body" }, [
        Se(h("div", {
          ref_key: "boxRef",
          ref: r,
          class: "demotestname card shadow brag-box user-select-none z-2",
          style: bt([{ position: "fixed" }, v(l)]),
          onMousedown: c[1] || (c[1] = re(() => {
          }, ["prevent"]))
        }, [
          h("div", Ll, [
            h("div", {
              ref_key: "dragRef",
              ref: o,
              class: "w-100",
              style: { height: "40px", cursor: "move" }
            }, null, 512),
            h("span", {
              onClick: p,
              class: "btn iconfont icon-close fs-5"
            })
          ]),
          Oe(d.$slots, "default")
        ], 36), [
          [Ce, d.visible]
        ])
      ]))
    ], 64));
  }
}), Ml = {
  install(e) {
    e.component("BarButton", se), e.component("BarInput", dn), e.component("BarPopover", pi), e.component("BarSearch", vn), e.component("BarWrapper", Ws), e.component("BarWrapperItem", Qi), e.component("BarWrapperGroup", Be), e.component("DragBox", Xe);
  }
};
class ge {
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
    return t == null ? (this.editor.emit(W.ERROR, "未选中编辑器"), !0) : !1;
  }
}
class jl extends ge {
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
      return this.editor.emit(W.ERROR, "请选中文本"), !0;
    const n = this.getValue();
    return n.length != 1 ? !0 : /^[\u4E00-\u9FA5]+$/gi.test(n) ? !1 : (this.editor.emit(W.ERROR, "选中一个中文字符，并且有不能在其他语句之内"), !0);
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
const Ks = /* @__PURE__ */ A({
  setup() {
    const {
      globalEditConfig: e
    } = de(), t = G(), n = _([]), s = _(!1);
    function r() {
      s.value || (s.value = !0);
    }
    function o() {
      s.value && (s.value = !1);
    }
    async function a(i) {
      var u;
      if (t.value ?? (t.value = new jl(i)), (u = t.value) != null && u.isDisabled())
        return;
      const l = t.value.getValue();
      if (l ? n.value = await e.pinyin.fetchData(l) : n.value = [], n.value.length == 0)
        return i.emit(W.ERROR, "选中的字符没有不是多音字");
      r();
    }
    return () => b(Te, {
      visible: s.value,
      "onUpdate:visible": (i) => s.value = i,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => b(se, {
        text: "多音字",
        icon: "speaker",
        onClick: a
      }, null),
      default: () => b("div", {
        class: "d-flex flex-column overflow-x-hidden overflow-y-auto",
        style: "max-height: 300px"
      }, [n.value.map(({
        label: i,
        value: l
      }) => b("div", {
        key: l,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          t.value && !t.value.isDisabled() && t.value.exec({
            label: i,
            value: l
          }), o();
        },
        onMousedown: re(() => {
        }, ["stop", "prevent"])
      }, [i]))])
    });
  }
});
class Fl extends ge {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t ? ce.isCollapsed(t) ? (this.editor.emit(W.ERROR, "请选择多个中文字符或者多个多个英文单词"), !0) : q.string(this.editor, t).length < 2 : !0;
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
const Js = /* @__PURE__ */ A({
  setup() {
    const e = G();
    function t(n) {
      e.value ?? (e.value = new Fl(n)), !e.value.isDisabled() && e.value.exec();
    }
    return () => b(se, {
      text: "连读",
      icon: "continuous",
      onClick: t
    }, null);
  }
}), Hl = [
  { label: "重音", value: "z" },
  { label: "拖音", value: "t" },
  { label: "重音+拖音", value: "z+t" }
], Ul = {
  z: { pitch: "x-high", rate: void 0 },
  t: { pitch: void 0, rate: "medium" },
  "z+t": { pitch: "x-high", rate: "medium" }
};
class Bl extends ge {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return !t || t == null ? !0 : ce.isCollapsed(t) ? (this.editor.emit(W.ERROR, "请先选择文本"), !0) : !1;
  }
  exec(t) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const n = this.getValue();
    if (n == null)
      return;
    const { pitch: s, rate: r } = Ul[t.value], o = {
      type: "ssml-prosody",
      remark: t.label,
      pitch: s,
      rate: r,
      children: [{ text: n }]
    };
    this.editor.insertNode(o);
  }
}
const Qs = /* @__PURE__ */ A({
  setup() {
    const e = G(), t = _(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    function r(o) {
      e.value ?? (e.value = new Bl(o)), !e.value.isDisabled() && n();
    }
    return () => b(Te, {
      visible: t.value,
      "onUpdate:visible": (o) => t.value = o,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => b(se, {
        text: "重音",
        icon: "read",
        onClick: r
      }, null),
      default: () => b("div", {
        class: "d-flex flex-column",
        onMousedown: re(() => {
        }, ["stop", "prevent"])
      }, [Hl.map(({
        label: o,
        value: a
      }) => b("div", {
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
class zl extends ge {
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
      return this.editor.emit(W.ERROR, "请选择纯数字"), !0;
    const n = q.string(this.editor, t);
    return n.length <= 0 ? !0 : Number.isNaN(Number(n)) ? (this.editor.emit(W.ERROR, "请选择纯数字"), !0) : !1;
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
const Wl = [{
  value: "cardinal",
  label: "读数值"
}, {
  value: "characters",
  label: "读数字"
}, {
  value: "telephone",
  label: "读手机号"
}], Zs = /* @__PURE__ */ A({
  setup() {
    const e = G(), t = _(!1);
    function n() {
      t.value = !t.value;
    }
    function s(r) {
      e.value ?? (e.value = new zl(r)), !e.value.isDisabled() && n();
    }
    return () => b(Te, {
      visible: t.value,
      "onUpdate:visible": (r) => t.value = r,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => b(se, {
        text: "数字符号",
        icon: "digital",
        onClick: s
      }, null),
      default: () => b("div", {
        class: "d-flex flex-column"
      }, [Wl.map(({
        label: r,
        value: o
      }) => b("div", {
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
class Gl extends ge {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t == null ? !0 : ce.isCollapsed(t) ? (this.editor.emit(W.ERROR, "选中一个中文字符，并且有不能在其他语句之内"), !0) : this.getValue().length <= 0;
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
const er = /* @__PURE__ */ A({
  setup() {
    const e = G(), t = _(), n = _(!1);
    function s() {
      n.value || (n.value = !0);
    }
    function r() {
      n.value && (n.value = !1);
    }
    async function o(i) {
      e.value ?? (e.value = new Gl(i)), !e.value.isDisabled() && (s(), t.value.focus());
    }
    function a(i) {
      var l;
      r(), i && ((l = e.value) == null || l.exec({
        value: i,
        label: i
      }));
    }
    return () => b(Te, {
      visible: n.value,
      "onUpdate:visible": (i) => n.value = i,
      trigger: "contextmenu",
      placement: "right-end",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => b(se, {
        text: "别名",
        icon: "alias",
        onClick: o
      }, null),
      default: () => b(dn, {
        ref: t,
        onSubmit: a
      }, null)
    });
  }
});
class Yl extends ge {
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
      return this.editor.emit(W.ERROR, "请选择英文单词"), !0;
    const n = q.string(this.editor, t);
    return n.length <= 0 ? !0 : /^[A-Za-z]+$/gi.test(n) ? !1 : (this.editor.emit(W.ERROR, "请选择英文单词"), !0);
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
const tr = /* @__PURE__ */ A({
  setup() {
    const {
      globalEditConfig: e
    } = de(), t = G(), n = _([]), s = _(!1);
    function r() {
      s.value || (s.value = !0);
    }
    function o() {
      s.value && (s.value = !1);
    }
    async function a(i) {
      if (t.value ?? (t.value = new Yl(i)), Uo(i), t.value.isDisabled())
        return;
      const l = t.value.getValue();
      if (l) {
        if (n.value = await e.english.fetchData(l), n.value.length <= 0)
          return i.emit(W.ERROR, "找不到单词的音标");
        r();
      }
    }
    return () => b(Te, {
      visible: s.value,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => b(se, {
        text: "音标",
        icon: "english",
        onClick: a
      }, null),
      default: () => b("div", {
        class: "d-flex flex-column"
      }, [n.value.map(({
        label: i,
        value: l
      }) => b("div", {
        key: l,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          t.value && !t.value.isDisabled() && t.value.exec({
            label: i,
            value: l
          }), o();
        },
        onMousedown: re(() => {
        }, ["stop", "prevent"])
      }, [i]))])
    });
  }
});
class ql extends ge {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t == null ? !0 : ce.isCollapsed(t) ? (this.editor.emit(W.ERROR, "请框选要变速的句子"), !0) : !1;
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
const Xl = [
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
], nr = /* @__PURE__ */ A({
  setup() {
    const e = G(), t = _(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    async function r(o) {
      e.value ?? (e.value = new ql(o)), !e.value.isDisabled() && n();
    }
    return () => b(Te, {
      style: {
        padding: "0px"
      },
      visible: t.value,
      "onUpdate:visible": (o) => t.value = o,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => b(se, {
        text: "局部变速",
        icon: "changespeed",
        onClick: r
      }, null),
      default: () => b("div", {
        class: "d-flex flex-column overflow-x-hidden overflow-y-scroll",
        style: "height:15rem"
      }, [Xl.map(({
        label: o,
        value: a
      }) => b("div", {
        key: a,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          var i;
          (i = e.value) == null || i.exec({
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
class Kl extends ge {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t ? ce.isExpanded(t) ? (this.editor.emit(W.ERROR, "不能选中文本"), !0) : !1 : !0;
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
const Jl = [{
  value: "weak",
  label: "短"
}, {
  value: "medium",
  label: "中"
}, {
  value: "strong",
  label: "长"
}], sr = /* @__PURE__ */ A({
  setup() {
    const e = G(), t = _(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    function r(o) {
      e.value ?? (e.value = new Kl(o)), !e.value.isDisabled() && n();
    }
    return () => b(Te, {
      visible: t.value,
      "onUpdate:visible": (o) => t.value = o,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => b(se, {
        text: "停顿调节",
        icon: "rhythm",
        onClick: r
      }, null),
      default: () => b("div", {
        class: "d-flex flex-column"
      }, [Jl.map(({
        label: o,
        value: a
      }) => b("div", {
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
class Ql extends ge {
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
    return t ? ce.isExpanded(t) ? (this.editor.emit(W.ERROR, "不能框选文字"), !0) : !1 : !0;
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
const rr = /* @__PURE__ */ A({
  __name: "special-menu",
  setup(e) {
    const t = _(), n = _(), s = G(), { globalEditConfig: r } = de(), { special: o } = r, a = _(!1), { x: i, y: l, height: u } = rt(n), m = (p) => {
      s.value ?? (s.value = new Ql(p)), !s.value.isDisabled() && (t.value.setPosition({
        x: i.value - 200,
        y: l.value + u.value
      }), a.value = !0);
    };
    function f(p) {
      var y;
      (y = s.value) == null || y.restoreSelection(), s.value && !s.value.isDisabled() && s.value.exec(p), a.value = !1;
    }
    return (p, y) => (T(), X(v(Xe), {
      ref_key: "dragRef",
      ref: t,
      visible: a.value,
      "onUpdate:visible": y[0] || (y[0] = (d) => a.value = d)
    }, {
      reference: R(() => [
        b(v(se), {
          ref_key: "menuRef",
          ref: n,
          text: "音效",
          icon: "special",
          onClick: m
        }, null, 512)
      ]),
      default: R(() => [
        b(v(vn), {
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
class Zl extends ge {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t ? ce.isExpanded(t) ? (this.editor.emit(W.ERROR, "不能选中文本"), !0) : !1 : !0;
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
const eu = [{
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
}], or = /* @__PURE__ */ A({
  setup() {
    const e = G(), t = _(!1), n = _();
    function s() {
      t.value || (t.value = !0);
    }
    function r() {
      t.value && (t.value = !1);
    }
    function o(i) {
      e.value ?? (e.value = new Zl(i)), !e.value.isDisabled() && (s(), n.value.focus());
    }
    function a(i) {
      var l;
      r(), i && ((l = e.value) == null || l.exec({
        value: i,
        label: i
      }));
    }
    return () => b(Te, {
      visible: t.value,
      "onUpdate:visible": (i) => t.value = i,
      trigger: "contextmenu",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => b(se, {
        text: "插入静音",
        icon: "mute",
        onClick: o
      }, null),
      default: () => b("div", {
        class: "d-flex flex-column"
      }, [eu.map(({
        value: i,
        label: l
      }) => b("div", {
        key: i,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => a(i),
        onMousedown: re(() => {
        }, ["stop", "prevent"])
      }, [l])), b(dn, {
        type: "text",
        ref: n,
        onSubmit: a
      }, null)])
    });
  }
}), ar = /* @__PURE__ */ A({
  __name: "bgm-menu",
  setup(e) {
    const t = _(), n = _(), s = G(), { globalEditConfig: r } = de(), { bgm: o } = r, a = _(!1), { x: i, y: l, height: u } = rt(n), m = async (p) => {
      const y = {
        x: i.value - 300,
        y: l.value + u.value
      };
      s.value = p, t.value.setPosition(y), a.value = !0;
    };
    function f(p) {
      const { rootBackgroundaudio: y } = je();
      y.src = p.value, y.remark = p.label, a.value = !1;
    }
    return (p, y) => (T(), X(v(Xe), {
      ref_key: "dragRef",
      ref: t,
      visible: a.value,
      "onUpdate:visible": y[0] || (y[0] = (d) => a.value = d)
    }, {
      reference: R(() => [
        b(v(se), {
          ref_key: "menuRef",
          ref: n,
          text: "配乐",
          icon: "bgm",
          onClick: m
        }, null, 512)
      ]),
      default: R(() => [
        b(v(vn), {
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
}), ir = /* @__PURE__ */ A({
  __name: "sensitive-menu",
  setup(e) {
    const t = _(), n = _(), s = G(), r = _(!1), { x: o, y: a, height: i } = rt(n), l = (u) => {
      s.value = u, t.value.setPosition({
        x: o.value - 200,
        y: a.value + i.value
      }), r.value = !0;
    };
    return (u, m) => (T(), X(v(Xe), {
      ref_key: "dragRef",
      ref: t,
      visible: r.value,
      "onUpdate:visible": m[0] || (m[0] = (f) => r.value = f)
    }, {
      reference: R(() => [
        b(v(se), {
          ref_key: "menuRef",
          ref: n,
          text: "敏感词",
          icon: "sensitive",
          onClick: l
        }, null, 512)
      ]),
      default: R(() => [
        b(ir)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
const tu = {
  class: "select-list",
  style: { width: "120px" }
}, nu = {
  class: "text-center d-flex flex-column justify-content-center fs-6",
  style: { height: "60px" }
}, su = ["onClick"], ru = /* @__PURE__ */ A({
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
    }), (i, l) => (T(), N("div", tu, [
      h("div", nu, [
        Oe(i.$slots, "default", {}, void 0, !0)
      ]),
      h("ul", {
        ref_key: "listRef",
        ref: r,
        class: "text-center w-100 border-start border-top border-bottom border-secondary-subtle overflow-y-auto overflow-x-hidden scrollbar-none",
        style: { height: "180px" }
      }, [
        (T(!0), N(J, null, oe(i.dataList, (u, m) => (T(), N("li", {
          class: ye(["clickable select-item py-1", { activate: u.value === i.modelValue }]),
          key: m,
          onClick: (f) => o(u)
        }, B(u.label), 11, su))), 128))
      ], 512)
    ]));
  }
});
const Ue = /* @__PURE__ */ fe(ru, [["__scopeId", "data-v-e0f0259e"]]), ou = {
  style: { width: "600px", height: "360px" },
  class: "position-relative px-2 pb-2"
}, au = { class: "position-relative" }, iu = { class: "position-absolute top-0 end-0" }, lu = /* @__PURE__ */ h("li", null, [
  /* @__PURE__ */ h("span", { class: "text-nowrap" }, "近期使用:")
], -1), uu = /* @__PURE__ */ h("span", { class: "my-3" }, "类型", -1), cu = /* @__PURE__ */ h("span", { class: "my-3" }, "配音师", -1), du = /* @__PURE__ */ h("span", { class: "my-3" }, "角色", -1), fu = /* @__PURE__ */ h("span", { class: "my-3" }, "风格", -1), pu = /* @__PURE__ */ h("span", { class: "my-3" }, "语速", -1), mu = /* @__PURE__ */ h("span", { class: "my-3" }, "语调", -1), vu = { class: "position-absolute bottom-0 end-0 d-flex flex-row justify-content-end me-4 mb-3" }, hu = /* @__PURE__ */ A({
  __name: "management-content",
  emits: ["submit"],
  setup(e, { emit: t }) {
    const { globalEditConfig: n } = de(), { tryPlay: s } = n, r = _(!1), o = _(""), a = Hs(), { contentData: i } = Is(a), l = G([]), u = _([{ label: "全部类型", value: "" }, ...s.category]), m = _([]), f = _([]), p = _([]), y = _(oi()), d = _(ai());
    ue(async () => {
      i.value.category = u.value[0].value, await c();
    }), Q(
      () => i.value.category,
      async () => {
        await c();
      }
    );
    async function c() {
      const O = await s.fetchData({ ...un(), ...i });
      l.value = O, m.value = O.map((g) => ({ label: g.displayName, value: g.name })), O.length > 0 && (f.value = O[0].roles, p.value = O[0].styles, i.value.name = O[0].name), f.value.length > 0 && (i.value.role = f.value[0].value), p.value.length > 0 && (i.value.style = p.value[0].value);
    }
    function w(O) {
      const g = l.value.find((x) => x.name === O);
      g && (f.value = g.roles, p.value = g.styles, f.value.length > 0 && (i.value.role = f.value[0].value), p.value.length > 0 && (i.value.style = p.value[0].value));
    }
    function C() {
      var E, L, Y, P;
      const O = ((E = m.value.find((S) => S.value === i.value.name)) == null ? void 0 : E.label) || "", g = ((L = f.value.find((S) => S.value === i.value.role)) == null ? void 0 : L.label) || "", x = ((Y = p.value.find((S) => S.value === i.value.style)) == null ? void 0 : Y.label) || "", D = ((P = y.value.find((S) => S.value === i.value.speed)) == null ? void 0 : P.label) || "", $ = {
        category: i.value.category,
        name: i.value.name,
        label: `${O}|${g}|${x}|${D}`,
        value: i.value.name,
        role: i.value.role,
        style: i.value.style,
        speed: li(Number(i.value.speed)),
        pitch: ii(Number(i.value.pitch))
      };
      t("submit", $);
    }
    return (O, g) => (T(), N("div", ou, [
      b(v(_t), {
        onSubmit: re(c, ["prevent"])
      }, {
        default: R(() => [
          b(v(wt), {
            modelValue: o.value,
            "onUpdate:modelValue": g[0] || (g[0] = (x) => o.value = x),
            placeholder: "请输入名称快速查找配音师"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["onSubmit"]),
      h("div", au, [
        h("div", iu, [
          b(v(ie), {
            size: "small",
            icon: v(Cr),
            onClick: g[1] || (g[1] = () => r.value = !r.value)
          }, null, 8, ["icon"])
        ]),
        h("ul", {
          class: ye(["d-flex flex-row row-gap-1 column-gap-2 overflow-x-hidden", { "flex-wrap": r.value }])
        }, [
          lu,
          h("li", null, [
            b(v(Pe), {
              type: "info",
              closable: ""
            }, {
              default: R(() => [
                U("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            b(v(Pe), {
              type: "info",
              closable: ""
            }, {
              default: R(() => [
                U("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            b(v(Pe), {
              type: "info",
              closable: ""
            }, {
              default: R(() => [
                U("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            b(v(Pe), {
              type: "info",
              closable: ""
            }, {
              default: R(() => [
                U("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            b(v(Pe), {
              type: "info",
              closable: ""
            }, {
              default: R(() => [
                U("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            b(v(Pe), {
              type: "info",
              closable: ""
            }, {
              default: R(() => [
                U("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            b(v(Pe), {
              type: "info",
              closable: ""
            }, {
              default: R(() => [
                U("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ])
        ], 2),
        Se(h("div", {
          class: ye({ "d-flex flex-row": !r.value })
        }, [
          b(Ue, {
            modelValue: v(i).category,
            "onUpdate:modelValue": g[2] || (g[2] = (x) => v(i).category = x),
            dataList: u.value
          }, {
            default: R(() => [
              uu
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          b(Ue, {
            "onUpdate:modelValue": [
              w,
              g[3] || (g[3] = (x) => v(i).name = x)
            ],
            modelValue: v(i).name,
            dataList: m.value
          }, {
            default: R(() => [
              cu
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          b(Ue, {
            modelValue: v(i).role,
            "onUpdate:modelValue": g[4] || (g[4] = (x) => v(i).role = x),
            dataList: f.value
          }, {
            default: R(() => [
              du
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          b(Ue, {
            modelValue: v(i).style,
            "onUpdate:modelValue": g[5] || (g[5] = (x) => v(i).style = x),
            dataList: p.value
          }, {
            default: R(() => [
              fu
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          b(Ue, {
            modelValue: v(i).speed,
            "onUpdate:modelValue": g[6] || (g[6] = (x) => v(i).speed = x),
            dataList: y.value
          }, {
            default: R(() => [
              pu
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          b(Ue, {
            modelValue: v(i).pitch,
            "onUpdate:modelValue": g[7] || (g[7] = (x) => v(i).pitch = x),
            dataList: d.value
          }, {
            default: R(() => [
              mu
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"])
        ], 2), [
          [Ce, !r.value]
        ])
      ]),
      h("div", vu, [
        Se(b(v(ie), {
          onClick: C,
          type: "primary"
        }, {
          default: R(() => [
            U("确定")
          ]),
          _: 1
        }, 512), [
          [Ce, !r.value]
        ]),
        Se(b(v(ie), { type: "primary" }, {
          default: R(() => [
            U("全部清空")
          ]),
          _: 1
        }, 512), [
          [Ce, r.value]
        ])
      ])
    ]));
  }
});
class fs extends ge {
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
      return this.editor.emit(W.ERROR, "请框选句子"), !0;
    const [s] = q.node(this.editor, n), r = this.editor.getParentNode(s);
    return !r || !I.checkNodeType(r, "paragraph") ? (this.editor.emit(W.ERROR, "多人配音需要在最外层使用"), !0) : !1;
  }
  exec(n) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const s = this.getValue();
    if (s == null)
      return;
    const r = I.getSelectedNodeByType(this.editor, "custom-management");
    if (r)
      z.setNodes(
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
const lr = /* @__PURE__ */ A({
  __name: "management-menu",
  setup(e) {
    const t = _(), n = _(), s = _(!1), r = G(), o = Hs(), { contentData: a } = Is(o), { x: i, y: l, height: u } = rt(n);
    ue(() => {
      he.on(ve.EDITOR_CREATED, (d) => {
        d.on(W.SSML_ELEMENT_CLICK, (c, w) => {
          var C;
          if (w.type === "custom-management") {
            r.value ?? (r.value = new fs(c));
            const g = ((C = w.custom) == null ? void 0 : C.contentData) || {};
            g && (a.value.category = g.category, a.value.name = g.name, a.value.pitch = g.pitch, a.value.role = g.role, a.value.speed = g.speed, a.value.style = g.style), setTimeout(() => {
              m();
            }, 200);
          }
        });
      });
    });
    function m() {
      var c;
      const d = {
        x: i.value - 200,
        y: l.value + u.value
      };
      (c = t.value) == null || c.setPosition(d), s.value = !0;
    }
    function f() {
      s.value = !1;
    }
    function p(d) {
      r.value ?? (r.value = new fs(d)), !r.value.isDisabled() && m();
    }
    function y(d) {
      var c;
      r.value && !r.value.isDisabled() && (r.value.contentData = { ...a.value }, (c = r.value) == null || c.exec(d)), f();
    }
    return (d, c) => (T(), X(v(Xe), {
      ref_key: "dragRef",
      ref: t,
      visible: s.value,
      "onUpdate:visible": c[0] || (c[0] = (w) => s.value = w)
    }, {
      reference: R(() => [
        b(v(se), {
          ref_key: "menuRef",
          ref: n,
          text: "多人配音",
          icon: "management",
          onClick: p
        }, null, 512)
      ]),
      default: R(() => [
        b(hu, { onSubmit: y })
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), yu = { class: "speaker-head" }, gu = ["src"], bu = { class: "speaker-name" }, _u = /* @__PURE__ */ A({
  __name: "speaker-item",
  props: {
    label: {},
    value: {},
    avatar: {},
    activated: { type: Boolean }
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => (T(), N("div", {
      class: "speaker-item",
      onClick: n[0] || (n[0] = (s) => t.$emit("click", t.value || ""))
    }, [
      h("div", yu, [
        h("img", {
          src: t.avatar || v(st)(),
          class: ye([{ "border border-warning": t.activated }, "rounded-circle"]),
          style: { height: "40px" }
        }, null, 10, gu)
      ]),
      h("div", bu, B(t.label), 1)
    ]));
  }
});
const wu = /* @__PURE__ */ fe(_u, [["__scopeId", "data-v-b043c1a6"]]);
class xu {
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
class Eu {
  constructor() {
    ee(this, "audio");
    ee(this, "isPlaying", _(!1));
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
const $u = { class: "d-flex flex-row justify-content-between border rounded-pill border-secondary my-3 py-1 px-2" }, ku = {
  class: "text-secondary d-flex flex-row align-items-center",
  style: { "font-size": "0.5rem" }
}, Su = {
  key: 0,
  class: "iconfont icon-pause"
}, Cu = {
  key: 1,
  class: "iconfont icon-play"
}, Ou = /* @__PURE__ */ h("span", { class: "iconfont icon-delete" }, null, -1), Tu = [
  Ou
], Pu = {
  key: 1,
  style: { "font-size": "0.5rem" }
}, Ru = /* @__PURE__ */ h("p", null, "选择需要转换的配音师", -1), Du = {
  class: "speakers-container border rounded d-flex flex-row flex-wrap row-gap-1 column-gap-2 overflow-y-auto overflow-x-hidden",
  style: { height: "150px" }
}, Nu = ["disabled"], Iu = /* @__PURE__ */ A({
  __name: "audio-upload",
  emits: ["submit"],
  setup(e, { expose: t, emit: n }) {
    const { globalEditConfig: s } = de(), { audioUpload: r, transfer: o, fetchSpeaker: a, timeoutMilliseconds: i } = s.conversion, l = _(), u = _(), m = _(), f = _(!0), p = _([]), y = _(), d = G(), c = G(), w = new Eu(), C = w.playState;
    let O;
    const g = new xu(), x = new Fo("audio-conversion", "audio/*"), D = Z(() => g.state), $ = mn(l), E = vs("reopen");
    Q($, (M) => {
      M || L();
    }), ue(async () => {
      p.value = await a();
    }), Q($, (M) => {
      M || (f.value = !0, O == null || O.cancel());
    }), t({
      openInputFile: H
    });
    function L() {
      f.value = !0, Y();
    }
    function Y() {
      w.pause(), u.value = void 0, m.value = void 0, y.value = void 0, d.value = void 0, c.value = void 0, O == null || O.cancel();
    }
    function P() {
      g.stop();
    }
    async function S() {
      try {
        d.value = await g.start();
      } catch (M) {
        he.emit(ve.ERROR, `${M}`, M);
      }
    }
    function V() {
      if (C.value === "playing")
        w.pause();
      else if (d.value) {
        const M = window.URL.createObjectURL(d.value);
        w.load(M), w.play();
      } else if (c.value) {
        const M = window.URL.createObjectURL(c.value);
        w.load(M), w.play();
      }
    }
    async function H() {
      try {
        return c.value = await x.open(), f.value = !1, !0;
      } catch {
        return !1;
      }
    }
    async function be() {
      try {
        if (O = new Ho(i), f.value && d.value)
          O.startTimeout(), u.value = await r(d.value, O.token);
        else if (!f.value && c.value)
          O.startTimeout(), u.value = await r(c.value, O.token);
        else
          throw new Error("请选则文件或实时录音");
      } catch (M) {
        he.emit(ve.ERROR, `${M}`, M);
      }
    }
    async function kt(M) {
      try {
        u.value ? (y.value = M, m.value = await o({ audioId: u.value.id, speakerId: M.id })) : he.emit(ve.ERROR, "请先上传音频文件");
      } catch (Ct) {
        he.emit(ve.ERROR, `${Ct}`, Ct);
      }
    }
    function St() {
      m.value && y.value && (n("submit", { label: y.value.displayName, value: m.value.src }), L());
    }
    function Ne() {
      O == null || O.cancel(), E == null || E();
    }
    return (M, Ct) => {
      var bn, _n;
      return T(), N("div", {
        class: "audio-upload",
        ref_key: "boxRef",
        ref: l
      }, [
        h("div", $u, [
          h("div", ku, [
            d.value || c.value ? (T(), N("button", {
              key: 0,
              onClick: V,
              class: "btn btn-sm rounded-pill"
            }, [
              v(C) === "playing" ? (T(), N("span", Su)) : (T(), N("span", Cu))
            ])) : Ee("", !0),
            h("span", null, B(((bn = c.value) == null ? void 0 : bn.name) || ((_n = d.value) == null ? void 0 : _n.name)), 1)
          ]),
          h("div", null, [
            !u.value && (d.value || c.value) ? (T(), N("button", {
              key: 0,
              onClick: Y,
              class: "btn btn-sm rounded-pill"
            }, Tu)) : Ee("", !0),
            u.value ? (T(), N("span", Pu, "已上传")) : Ee("", !0),
            f.value ? (T(), N(J, { key: 2 }, [
              D.value === "recording" ? (T(), N("button", {
                key: 0,
                onClick: P,
                class: "btn btn-primary btn-sm rounded-pill"
              }, " 结束录音 ")) : (T(), N("button", {
                key: 1,
                onClick: S,
                class: "btn btn-primary btn-sm rounded-pill"
              }, " 开始录音 "))
            ], 64)) : Ee("", !0),
            !f.value && !c.value ? (T(), N("button", {
              key: 3,
              onClick: H,
              class: "btn btn-primary btn-sm rounded-pill"
            }, " 选择文件 ")) : Ee("", !0),
            u.value ? (T(), N("button", {
              key: 4,
              onClick: Ne,
              class: "btn btn-primary btn-sm rounded-pill"
            }, " 重传音频 ")) : Ee("", !0),
            !u.value && (c.value || d.value) ? (T(), N("button", {
              key: 5,
              onClick: be,
              class: "btn btn-primary btn-sm rounded-pill"
            }, " 上传音频 ")) : Ee("", !0)
          ])
        ]),
        h("div", null, [
          Ru,
          h("div", Du, [
            (T(!0), N(J, null, oe(p.value, (ot, mr) => {
              var wn;
              return T(), X(wu, {
                onClick: (Fd) => kt(ot),
                key: mr,
                label: ot.displayName,
                avatar: ot.avatar,
                activated: ot.name === ((wn = y.value) == null ? void 0 : wn.name)
              }, null, 8, ["onClick", "label", "avatar", "activated"]);
            }), 128))
          ])
        ]),
        h("button", {
          class: "btn btn-primary mt-1",
          onClick: St,
          disabled: !m.value
        }, " 完成录音并上传完成后，可选择配音师转换 ", 8, Nu)
      ], 512);
    };
  }
}), Vu = {
  class: "fw-bold",
  style: { "font-size": "0.5rem" }
}, Au = /* @__PURE__ */ h("p", { class: "text-start text-danger" }, "请在安静的环境中进行录音，以需要转换的风格，读出以下文案", -1), Lu = {
  class: "border border-secondary rounded p-2 w-100",
  style: { height: "100px" }
}, Mu = { class: "mt-2" }, ju = /* @__PURE__ */ h("p", {
  class: "mt-2 text-secondary",
  style: { "font-size": "0.5rem" }
}, " 录音内容需要和滑选一致，音频限制60秒，滑选文案限制60个字 ", -1), Fu = /* @__PURE__ */ A({
  __name: "conversion-content",
  props: {
    text: {}
  },
  emits: ["submit"],
  setup(e) {
    const t = _(), n = _(), s = _(!0), r = _(!1), o = mn(t);
    _r("reopen", () => {
      s.value = !0, r.value = !1;
    }), Q(o, (l) => {
      l || (s.value = !0, r.value = !1);
    });
    function a() {
      s.value = !0, r.value = !0;
    }
    async function i() {
      var l;
      await ((l = n.value) == null ? void 0 : l.openInputFile()) && (s.value = !1, r.value = !0);
    }
    return (l, u) => (T(), N("div", {
      ref_key: "boxRef",
      ref: t,
      class: "px-2 py-1",
      style: { width: "410px" }
    }, [
      Se(h("section", Vu, [
        Au,
        h("div", Lu, B(l.text), 1)
      ], 512), [
        [Ce, s.value]
      ]),
      Se(h("section", Mu, [
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
        ju
      ], 512), [
        [Ce, !r.value]
      ]),
      Se(h("section", null, [
        b(Iu, {
          ref_key: "audioUploadRef",
          ref: n,
          onSubmit: u[0] || (u[0] = (m) => l.$emit("submit", m))
        }, null, 512)
      ], 512), [
        [Ce, r.value]
      ])
    ], 512));
  }
});
class Hu extends ge {
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
    return t == null ? !0 : ce.isCollapsed(t) ? (this.editor.emit(W.ERROR, "请框选要变音的句子"), !0) : !1;
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
const ur = /* @__PURE__ */ A({
  __name: "conversion-menu",
  setup(e) {
    const t = _(), n = _(), s = G(), r = G(), o = _(!1), a = _(""), { x: i, y: l, height: u } = rt(n), m = (p) => {
      if (r.value ?? (r.value = new Hu(p)), r.value.isDisabled())
        return;
      a.value = r.value.getValue();
      const y = {
        x: i.value - 200,
        y: l.value + u.value
      };
      s.value = p, t.value.setPosition(y), o.value = !0;
    };
    function f(p) {
      var y;
      (y = r.value) == null || y.exec(p), o.value = !1;
    }
    return (p, y) => (T(), X(v(Xe), {
      ref_key: "dragRef",
      ref: t,
      visible: o.value,
      "onUpdate:visible": y[0] || (y[0] = (d) => o.value = d)
    }, {
      reference: R(() => [
        b(v(se), {
          ref_key: "menuRef",
          ref: n,
          text: "局部变音",
          icon: "conversion",
          onClick: m
        }, null, 512)
      ]),
      default: R(() => [
        b(Fu, {
          text: a.value,
          onSubmit: f
        }, null, 8, ["text"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Uu = { class: "anchor-avatar d-flex flex-column justify-content-center align-items-center" }, Bu = ["src"], zu = { class: "anchor-avatar-name text-white" }, Wu = /* @__PURE__ */ A({
  __name: "try-play-circle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = _(), s = _(0), r = _(0), o = cn(), { position: a } = pn(n, {
      initialValue: { x: window.innerWidth - 15, y: window.innerHeight / 2 - 15 },
      onStart: (f, p) => m(p.clientX, p.clientY) ? !1 : void 0
    }), { style: i } = hn(n, a);
    function l(f) {
      m(f.clientX, f.clientY) && t("update:visible", !1);
    }
    function u(f) {
      s.value = f.clientX, r.value = f.clientY;
    }
    function m(f, p) {
      return f > s.value - 10 && f < s.value + 10 && p > r.value - 10 && p < r.value + 10;
    }
    return (f, p) => Se((T(), N("div", {
      ref_key: "boxRef",
      ref: n,
      class: "try-play-circel user-select-none rounded-circle overflow-hidden",
      style: bt([v(i), { position: "fixed" }]),
      onMousedown: u,
      onMouseup: l
    }, [
      h("div", Uu, [
        h("img", {
          src: v(o).speaker.avatar || v(st)(),
          class: "rounded-circle"
        }, null, 8, Bu),
        h("div", zu, B(v(o).speaker.displayName), 1)
      ])
    ], 36)), [
      [Ce, f.visible]
    ]);
  }
});
const Gu = /* @__PURE__ */ fe(Wu, [["__scopeId", "data-v-daadb844"]]), Yu = {
  key: 0,
  class: "position-absolute top-0 start-100 translate-middle text-bg-danger text-nowrap rounded px-1",
  style: { "font-size": "0.5rem" }
}, qu = ["src"], Xu = { class: "anchor-avatar-name text-white" }, Ku = /* @__PURE__ */ A({
  __name: "anchor-avatar",
  props: {
    activate: { type: Boolean },
    data: {}
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => {
      var s, r, o;
      return T(), N("div", {
        class: "anchor-avatar d-flex flex-column align-items-center text-center justify-content-center position-relative",
        onClick: n[0] || (n[0] = (a) => {
          var i;
          return t.$emit("click", (i = t.data) == null ? void 0 : i.value);
        })
      }, [
        (s = t.data) != null && s.isFree ? Ee("", !0) : (T(), N("span", Yu, "付费")),
        h("img", {
          src: ((r = t.data) == null ? void 0 : r.src) ?? v(st)(),
          class: ye(["rounded-circle", { "border border-2 border-warning": t.activate }]),
          style: { height: "40px" }
        }, null, 10, qu),
        h("div", Xu, B((o = t.data) == null ? void 0 : o.label), 1)
      ]);
    };
  }
});
const cr = /* @__PURE__ */ fe(Ku, [["__scopeId", "data-v-845325c9"]]), Ju = {
  style: { height: "170px" },
  class: "w-100 d-flex flex-row flex-wrap justify-content-start overflow-x-hidden overflow-y-auto scrollbar-none"
}, Qu = /* @__PURE__ */ A({
  __name: "anchor-list",
  props: {
    filter: {}
  },
  setup(e) {
    const t = e, { globalEditConfig: n } = de(), { fetchData: s } = n.tryPlay, r = cn(), o = _([]), a = G([]);
    Q(
      () => t.filter,
      async (l) => {
        const u = await s(le(l));
        a.value = u, o.value = u.map((m) => ({ label: m.displayName, value: m.name }));
      }
    );
    function i(l) {
      const u = a.value.find((m) => m.name === l);
      u && r.setSpeaker(u);
    }
    return ue(async () => {
      const l = await s(le(t.filter));
      a.value = l, o.value = l.map((u) => ({ label: u.displayName, value: u.name })), o.value.length > 0 && i(o.value[0].value);
    }), (l, u) => (T(), N("div", Ju, [
      (T(!0), N(J, null, oe(o.value, (m, f) => (T(), N("div", {
        class: "m-3",
        key: f
      }, [
        b(cr, {
          data: m,
          activate: m.value === v(r).speaker.name,
          onClick: (p) => i(m.value)
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
    return (t, n) => (T(), N("span", {
      class: ye(["tag-item d-inline-block text-white text-center text-nowrap text-truncate", { "border border-white rounded-pill": t.activate }]),
      onClick: n[0] || (n[0] = (s) => t.$emit("click", t.value)),
      style: { height: "20px", "min-width": "60px", "max-width": "160px", "font-size": "0.5rem", cursor: "pointer" }
    }, [
      Oe(t.$slots, "default")
    ], 2));
  }
}), Zu = { class: "tag-list w-100" }, ec = {
  class: "w-100 d-flex flex-row border-bottom border-secondary align-items-center",
  style: { height: "40px" }
}, tc = {
  class: "w-100 d-flex flex-row border-bottom border-secondary align-items-center",
  style: { height: "40px" }
}, nc = {
  style: { height: "100px" },
  class: "w-100 pt-2 d-flex flex-row flex-wrap align-content-start row-gap-2 overflow-y-auto overflow-x-hidden scrollbar-none"
}, sc = /* @__PURE__ */ A({
  __name: "tag-list",
  props: {
    filter: {}
  },
  emits: ["update:filter"],
  setup(e, { emit: t }) {
    const n = e, { globalEditConfig: s } = de(), { topFlag: r, gender: o, featchTag: a } = s.tryPlay, i = _([]);
    ue(async () => {
      i.value = await a();
    });
    function l(f) {
      t("update:filter", { ...le(n.filter), topFlag: f });
    }
    function u(f) {
      t("update:filter", { ...le(n.filter), gender: f });
    }
    function m(f) {
      t("update:filter", { ...le(n.filter), tag: f });
    }
    return (f, p) => (T(), N("div", Zu, [
      h("div", ec, [
        (T(!0), N(J, null, oe(v(r), (y, d) => (T(), X(jt, {
          onClick: l,
          key: d,
          value: y.value,
          activate: f.filter.topFlag === y.value
        }, {
          default: R(() => [
            U(B(y.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "activate"]))), 128))
      ]),
      h("div", tc, [
        (T(!0), N(J, null, oe(v(o), (y, d) => (T(), X(jt, {
          onClick: u,
          key: d,
          value: y.value,
          activate: f.filter.gender === y.value
        }, {
          default: R(() => [
            U(B(y.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "activate"]))), 128))
      ]),
      h("div", nc, [
        (T(!0), N(J, null, oe(i.value, (y, d) => (T(), X(jt, {
          onClick: m,
          key: d,
          value: y.value,
          activate: f.filter.tag === y.value
        }, {
          default: R(() => [
            U(B(y.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "activate"]))), 128))
      ])
    ]));
  }
});
const rc = ["src"], oc = {
  class: "anchor-avatar-name text-white",
  style: { "font-size": "0.5rem" }
}, ac = /* @__PURE__ */ A({
  __name: "style-avatar",
  props: {
    activate: { type: Boolean },
    data: {}
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => {
      var s, r;
      return T(), N("div", {
        class: "anchor-avatar d-flex flex-column align-items-center text-center justify-content-center position-relative",
        onClick: n[0] || (n[0] = (o) => {
          var a;
          return t.$emit("click", (a = t.data) == null ? void 0 : a.value);
        })
      }, [
        h("img", {
          src: ((s = t.data) == null ? void 0 : s.src) || v(st)(),
          class: ye(["rounded-circle", { "border border-2 border-warning": t.activate }]),
          style: { height: "30px" }
        }, null, 10, rc),
        h("div", oc, B((r = t.data) == null ? void 0 : r.label), 1)
      ]);
    };
  }
});
const ic = /* @__PURE__ */ fe(ac, [["__scopeId", "data-v-71aedb65"]]);
function lc(e) {
  return `${(0.05 * e * 100).toFixed(0)}%`;
}
function uc(e) {
  return `${((e - 1) * 100).toFixed(0)}%`;
}
const gn = (e) => (Zt("data-v-0210af00"), e = e(), en(), e), cc = {
  class: "slider-panle w-100 px-3 text-white",
  style: { "font-size": "0.5rem" }
}, dc = { class: "mt-2 d-flex text-center justify-content-between align-items-center" }, fc = { class: "me-auto d-flex flex-row align-items-center" }, pc = ["src"], mc = {
  class: "ms-2 d-flex flex-column justify-content-between",
  style: { height: "50px" }
}, vc = { class: "d-flex dlex-row column-gap-2 align-items-end" }, hc = { class: "fs-6" }, yc = { style: { "font-size": "0.5rem" } }, gc = { class: "d-flex flex-row column-gap-2 align-items-center" }, bc = {
  key: 0,
  class: "badge text-bg-primary px-2"
}, _c = { class: "d-flex flex-column align-items-end" }, wc = /* @__PURE__ */ gn(() => /* @__PURE__ */ h("div", { class: "text-info" }, "音频时长，请以生成后的为准", -1)), xc = { class: "mt-1" }, Ec = /* @__PURE__ */ gn(() => /* @__PURE__ */ h("span", null, "/", -1)), $c = { class: "role-list mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-2 column-gap-3" }, kc = ["onClick"], Sc = { class: "audio-mood mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-1 column-gap-2" }, Cc = ["onClick"], Oc = /* @__PURE__ */ gn(() => /* @__PURE__ */ h("div", { class: "my-3" }, [
  /* @__PURE__ */ h("span", { class: "border rounded-pill p-1" }, "配音师详情")
], -1)), Tc = { class: "slider-box" }, Pc = { class: "slider-box" }, Rc = { class: "d-flex flex-row gap-3 my-3" }, Dc = ["onClick"], Nc = {
  class: "d-flex flex-row flex-wrap row-gap-2 column-gap-3 mb-3",
  style: { "min-height": "100px" }
}, Ic = ["onClick"], Vc = /* @__PURE__ */ A({
  __name: "slider-panle",
  setup(e) {
    const { globalEditConfig: t } = de(), { rootProsody: n, rootExpressAs: s } = je(), { fetchStar: r, category: o, fetchData: a } = t.tryPlay, i = cn(), l = _(i.speaker.isStar), u = _(10), m = _(0), f = _([0, 2]), p = _(1), y = _([-10, 10]), d = _(0), c = Z(() => Qn(u.value)), w = Z(() => Qn(m.value)), C = mt(ao()), O = mt(io()), g = _(""), x = _([]);
    ue(async () => {
      await L(o[0].value);
    }), Q(
      () => i.speaker,
      (P) => {
        P.roles.length > 0 && $(P.roles[0].value), P.styles.length > 0 && E(P.styles[0].value);
      },
      { immediate: !0 }
    ), Q(
      d,
      (P) => {
        n.pitch = lc(P);
      },
      { immediate: !0 }
    ), Q(
      p,
      (P) => {
        n.rate = uc(P);
      },
      { immediate: !0 }
    );
    async function D() {
      l.value = await r(i.speaker.name, !l.value);
    }
    function $(P) {
      s.role = P;
    }
    function E(P) {
      s.style = P;
    }
    async function L(P) {
      g.value = P;
      try {
        x.value = await a({ ...un(), category: P });
      } catch (S) {
        he.emit(ve.ERROR, `${S}`, S);
      }
    }
    function Y(P) {
      i.setSpeaker(le(P));
    }
    return (P, S) => (T(), N("div", cc, [
      h("div", dc, [
        h("div", fc, [
          h("img", {
            src: v(st)(),
            class: "rounded-circle",
            style: { height: "50px" }
          }, null, 8, pc),
          h("div", mc, [
            h("div", vc, [
              h("span", hc, B(v(i).speaker.displayName), 1),
              h("span", yc, B(p.value) + "x", 1)
            ]),
            h("div", gc, [
              b(v(bs), {
                onClick: D,
                class: "fs-6",
                style: bt({ color: l.value ? "red" : "white" })
              }, {
                default: R(() => [
                  l.value ? (T(), X(v(Or), { key: 0 })) : (T(), X(v(Tr), { key: 1 }))
                ]),
                _: 1
              }, 8, ["style"]),
              v(i).speaker.isSupper24K ? (T(), N("span", bc, " 24K ")) : Ee("", !0)
            ])
          ])
        ]),
        h("div", _c, [
          wc,
          h("div", xc, [
            h("span", null, B(w.value), 1),
            Ec,
            h("span", null, B(c.value), 1)
          ]),
          b(v(Ot), {
            max: u.value,
            modelValue: m.value,
            "onUpdate:modelValue": S[0] || (S[0] = (V) => m.value = V),
            size: "small"
          }, null, 8, ["max", "modelValue"])
        ])
      ]),
      h("div", $c, [
        (T(!0), N(J, null, oe(v(i).speaker.roles, (V, H) => (T(), N("div", {
          onClick: (be) => $(V.value),
          key: H,
          class: ye(["rounded-pill px-1", { border: V.value === (v(s).role || "") }])
        }, B(V.label), 11, kc))), 128))
      ]),
      h("ul", Sc, [
        (T(!0), N(J, null, oe(v(i).speaker.styles, (V, H) => (T(), N("li", {
          class: "mx-2",
          onClick: (be) => E(V.value),
          key: H
        }, [
          b(ic, {
            activate: V.value === (v(s).style || ""),
            data: V
          }, null, 8, ["activate", "data"])
        ], 8, Cc))), 128))
      ]),
      Oc,
      h("div", Tc, [
        h("div", null, [
          h("span", null, "语速：" + B(p.value) + "x", 1)
        ]),
        b(v(Ot), {
          modelValue: p.value,
          "onUpdate:modelValue": S[1] || (S[1] = (V) => p.value = V),
          min: f.value[0],
          max: f.value[1],
          step: 0.05,
          marks: C
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      h("div", Pc, [
        h("div", null, [
          h("span", null, "语调：" + B(d.value), 1)
        ]),
        b(v(Ot), {
          modelValue: d.value,
          "onUpdate:modelValue": S[2] || (S[2] = (V) => d.value = V),
          min: y.value[0],
          max: y.value[1],
          step: 0.2,
          marks: O
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      h("div", null, [
        h("ul", Rc, [
          (T(!0), N(J, null, oe(v(o), (V, H) => (T(), N("li", {
            onClick: (be) => L(V.value),
            key: H,
            class: ye(["rounded-pill px-1", { border: V.value === g.value }])
          }, B(V.label), 11, Dc))), 128))
        ]),
        h("ul", Nc, [
          (T(!0), N(J, null, oe(x.value, (V, H) => (T(), N("li", {
            onClick: (be) => Y(V),
            key: H
          }, [
            b(cr, {
              activate: V.name === v(i).speaker.name,
              data: { ...V, label: V.displayName, value: V.name }
            }, null, 8, ["activate", "data"])
          ], 8, Ic))), 128))
        ])
      ])
    ]));
  }
});
const Ac = /* @__PURE__ */ fe(Vc, [["__scopeId", "data-v-0210af00"]]), Lc = (e) => (Zt("data-v-f0208c5e"), e = e(), en(), e), Mc = { class: "box ms-2" }, jc = { class: "try-play-header text-center d-flex flex-row justify-content-between" }, Fc = { class: "try-play-body d-flex flex-row" }, Hc = { class: "try-play-left w-50 border-right border-secondary" }, Uc = { class: "pe-1" }, Bc = /* @__PURE__ */ Lc(() => /* @__PURE__ */ h("div", { class: "py-1 border-top border-secondary" }, null, -1)), zc = { class: "try-play-right w-50 border-start rounded border-top border-secondary overflow-x-hidden overflow-y-auto scrollbar-none" }, Wc = /* @__PURE__ */ A({
  __name: "try-play-panle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = e, s = _(), r = _(""), o = _(), a = _(), i = _(un());
    ue(() => {
      window.addEventListener("keydown", l);
    }), Qt(() => {
      window.addEventListener("keydown", l);
    }), Q(
      () => n.visible,
      (d) => {
        d && setTimeout(() => {
          p();
        }, 200);
      }
    );
    function l(d) {
      d.code === "Escape" && n.visible && f();
    }
    const { position: u } = pn(a, {
      initialValue: { x: 40, y: 40 }
    }), { style: m } = hn(o, u);
    ue(() => {
      u.value.x = (window.innerWidth - 890) / 2, u.value.y = (window.innerHeight - 390) / 2;
    });
    function f() {
      t("update:visible", !1);
    }
    function p() {
      var d;
      (d = s.value) == null || d.focus();
    }
    function y() {
      i.value = { ...i.value, word: r.value };
    }
    return (d, c) => Se((T(), N("div", {
      ref_key: "boxRef",
      ref: o,
      style: bt([v(m), { position: "fixed" }]),
      class: "try-play user-select-none card z-3 shadow"
    }, [
      h("div", Mc, [
        h("div", jc, [
          h("div", {
            ref_key: "handleRef",
            ref: a,
            class: "col-11 try-play-move"
          }, null, 512),
          h("div", {
            onClick: f,
            class: "col-1 try-play-menu-close"
          }, [
            b(v(bs), { color: "white" }, {
              default: R(() => [
                b(v(Pr))
              ]),
              _: 1
            })
          ])
        ]),
        h("div", Fc, [
          h("div", Hc, [
            h("div", Uc, [
              b(v(_t), {
                onSubmit: re(y, ["prevent"])
              }, {
                default: R(() => [
                  b(v(wt), {
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
            b(sc, {
              filter: i.value,
              "onUpdate:filter": c[1] || (c[1] = (w) => i.value = w)
            }, null, 8, ["filter"]),
            Bc,
            b(Qu, { filter: i.value }, null, 8, ["filter"])
          ]),
          h("div", zc, [
            b(Ac)
          ])
        ])
      ])
    ], 4)), [
      [Ce, d.visible]
    ]);
  }
});
const Gc = /* @__PURE__ */ fe(Wc, [["__scopeId", "data-v-f0208c5e"]]), dr = /* @__PURE__ */ A({
  __name: "try-play",
  setup(e) {
    const t = _(!0);
    function n(s) {
      s || (t.value = !0);
    }
    return (s, r) => (T(), X(gs, { to: "body" }, [
      b(Gu, {
        visible: t.value,
        "onUpdate:visible": r[0] || (r[0] = (o) => t.value = o)
      }, null, 8, ["visible"]),
      b(Gc, {
        visible: !t.value,
        "onUpdate:visible": n
      }, null, 8, ["visible"])
    ]));
  }
});
const Yc = {
  install: (e) => {
    e.component("PinyinMenu", Ks), e.component("ContinuousMenu", Js), e.component("ReadMenu", Qs), e.component("DigitalMenu", Zs), e.component("AliasMenu", er), e.component("EnglishMenu", tr), e.component("ChangespeedMenu", nr), e.component("RhythmMenu", sr), e.component("SpecialMenu", rr), e.component("MuteMenu", or), e.component("BgmMenu", ar), e.component("SensitiveMenu", ir), e.component("ManagementMenu", lr), e.component("ConversionMenu", ur), e.component("TryPlay", dr);
  }
};
var Xt = { exports: {} }, Kt = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.ParsingError = void 0;
  class n extends Error {
    constructor(x, D) {
      super(x), this.cause = D;
    }
  }
  t.ParsingError = n;
  let s;
  function r() {
    return l(!1) || p() || f() || m();
  }
  function o() {
    return c(/\s*/), l(!0) || f() || u() || i(!1);
  }
  function a() {
    const g = i(!0), x = [];
    let D, $ = o();
    for (; $; ) {
      if ($.node.type === "Element") {
        if (D)
          throw new Error("Found multiple root nodes");
        D = $.node;
      }
      $.excluded || x.push($.node), $ = o();
    }
    if (!D)
      throw new n("Failed to parse XML", "Root Element not found");
    if (s.xml.length !== 0)
      throw new n("Failed to parse XML", "Not Well-Formed XML");
    return {
      declaration: g ? g.node : null,
      root: D,
      children: x
    };
  }
  function i(g) {
    const x = c(g ? /^<\?(xml)\s*/ : /^<\?([\w-:.]+)\s*/);
    if (!x)
      return;
    const D = {
      name: x[1],
      type: "ProcessingInstruction",
      attributes: {}
    };
    for (; !(w() || C("?>")); ) {
      const $ = y();
      if ($)
        D.attributes[$.name] = $.value;
      else
        return;
    }
    return c(/\?>/), {
      excluded: g ? !1 : s.options.filter(D) === !1,
      node: D
    };
  }
  function l(g) {
    const x = c(/^<([^?!</>\s]+)\s*/);
    if (!x)
      return;
    const D = {
      type: "Element",
      name: x[1],
      attributes: {},
      children: []
    }, $ = g ? !1 : s.options.filter(D) === !1;
    for (; !(w() || C(">") || C("?>") || C("/>")); ) {
      const L = y();
      if (L)
        D.attributes[L.name] = L.value;
      else
        return;
    }
    if (c(/^\s*\/>/))
      return D.children = null, {
        excluded: $,
        node: D
      };
    c(/\??>/);
    let E = r();
    for (; E; )
      E.excluded || D.children.push(E.node), E = r();
    if (s.options.strictMode) {
      const L = `</${D.name}>`;
      if (s.xml.startsWith(L))
        s.xml = s.xml.slice(L.length);
      else
        throw new n("Failed to parse XML", `Closing tag not matching "${L}"`);
    } else
      c(/^<\/\s*[\w-:.\u00C0-\u00FF]+>/);
    return {
      excluded: $,
      node: D
    };
  }
  function u() {
    const g = c(/^<!DOCTYPE\s+\S+\s+SYSTEM[^>]*>/) || c(/^<!DOCTYPE\s+\S+\s+PUBLIC[^>]*>/) || c(/^<!DOCTYPE\s+\S+\s*\[[^\]]*]>/) || c(/^<!DOCTYPE\s+\S+\s*>/);
    if (g) {
      const x = {
        type: "DocumentType",
        content: g[0]
      };
      return {
        excluded: s.options.filter(x) === !1,
        node: x
      };
    }
  }
  function m() {
    if (s.xml.startsWith("<![CDATA[")) {
      const g = s.xml.indexOf("]]>");
      if (g > -1) {
        const x = g + 3, D = {
          type: "CDATA",
          content: s.xml.substring(0, x)
        };
        return s.xml = s.xml.slice(x), {
          excluded: s.options.filter(D) === !1,
          node: D
        };
      }
    }
  }
  function f() {
    const g = c(/^<!--[\s\S]*?-->/);
    if (g) {
      const x = {
        type: "Comment",
        content: g[0]
      };
      return {
        excluded: s.options.filter(x) === !1,
        node: x
      };
    }
  }
  function p() {
    const g = c(/^([^<]+)/);
    if (g) {
      const x = {
        type: "Text",
        content: g[1]
      };
      return {
        excluded: s.options.filter(x) === !1,
        node: x
      };
    }
  }
  function y() {
    const g = c(/([^=]+)\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)\s*/);
    if (g)
      return {
        name: g[1].trim(),
        value: d(g[2].trim())
      };
  }
  function d(g) {
    return g.replace(/^['"]|['"]$/g, "");
  }
  function c(g) {
    const x = s.xml.match(g);
    if (x)
      return s.xml = s.xml.slice(x[0].length), x;
  }
  function w() {
    return s.xml.length === 0;
  }
  function C(g) {
    return s.xml.indexOf(g) === 0;
  }
  function O(g, x = {}) {
    g = g.trim();
    const D = x.filter || (() => !0);
    return s = {
      xml: g,
      options: Object.assign(Object.assign({}, x), { filter: D, strictMode: x.strictMode === !0 })
    }, a();
  }
  e.exports = O, t.default = O;
})(Kt, Kt.exports);
var qc = Kt.exports;
(function(e, t) {
  var n = We && We.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const s = n(qc);
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
  function i(d, c, w) {
    if (typeof d.content == "string")
      l(d.content, c, w);
    else if (d.type === "Element")
      m(d, c, w);
    else if (d.type === "ProcessingInstruction")
      p(d, c);
    else
      throw new Error("Unknown node type: " + d.type);
  }
  function l(d, c, w) {
    if (!w) {
      const C = d.trim();
      (c.options.lineSeparator || C.length === 0) && (d = C);
    }
    d.length > 0 && (!w && c.content.length > 0 && r(c), a(c, d));
  }
  function u(d, c) {
    const w = "/" + d.join("/"), C = d[d.length - 1];
    return c.includes(C) || c.includes(w);
  }
  function m(d, c, w) {
    if (c.path.push(d.name), !w && c.content.length > 0 && r(c), a(c, "<" + d.name), f(c, d.attributes), d.children === null || c.options.forceSelfClosingEmptyTag && d.children.length === 0) {
      const C = c.options.whiteSpaceAtEndOfSelfclosingTag ? " />" : "/>";
      a(c, C);
    } else if (d.children.length === 0)
      a(c, "></" + d.name + ">");
    else {
      const C = d.children;
      a(c, ">"), c.level++;
      let O = d.attributes["xml:space"] === "preserve", g = !1;
      if (!O && c.options.ignoredPaths && (g = u(c.path, c.options.ignoredPaths), O = g), !O && c.options.collapseContent) {
        let x = !1, D = !1, $ = !1;
        C.forEach(function(E, L) {
          E.type === "Text" ? (E.content.includes(`
`) ? (D = !0, E.content = E.content.trim()) : (L === 0 || L === C.length - 1) && E.content.trim().length === 0 && (E.content = ""), E.content.trim().length > 0 && (x = !0)) : E.type === "CDATA" ? x = !0 : $ = !0;
        }), x && (!$ || !D) && (O = !0);
      }
      C.forEach(function(x) {
        i(x, c, w || O);
      }), c.level--, !w && !O && r(c), g && o(c), a(c, "</" + d.name + ">");
    }
    c.path.pop();
  }
  function f(d, c) {
    Object.keys(c).forEach(function(w) {
      const C = c[w].replace(/"/g, "&quot;");
      a(d, " " + w + '="' + C + '"');
    });
  }
  function p(d, c) {
    c.content.length > 0 && r(c), a(c, "<?" + d.name), f(c, d.attributes), a(c, "?>");
  }
  function y(d, c = {}) {
    c.indentation = "indentation" in c ? c.indentation : "    ", c.collapseContent = c.collapseContent === !0, c.lineSeparator = "lineSeparator" in c ? c.lineSeparator : `\r
`, c.whiteSpaceAtEndOfSelfclosingTag = c.whiteSpaceAtEndOfSelfclosingTag === !0, c.throwOnFailure = c.throwOnFailure !== !1;
    try {
      const w = (0, s.default)(d, { filter: c.filter, strictMode: c.strictMode }), C = { content: "", level: 0, options: c, path: [] };
      return w.declaration && p(w.declaration, C), w.children.forEach(function(O) {
        i(O, C, !1);
      }), c.lineSeparator ? C.content.replace(/\r\n/g, `
`).replace(/\n/g, c.lineSeparator) : C.content;
    } catch (w) {
      if (c.throwOnFailure)
        throw w;
      return d;
    }
  }
  y.minify = (d, c = {}) => y(d, Object.assign(Object.assign({}, c), { indentation: "", lineSeparator: "" })), e.exports = y, t.default = y;
})(Xt, Xt.exports);
var Xc = Xt.exports;
const Kc = /* @__PURE__ */ rn(Xc);
function Jc(e) {
  return e.replaceAll(/[&]/gi, "&amp;").replaceAll(/[<]/gi, "&lt;").replaceAll(/[>]/gi, "&gt;");
}
function Qc(e, t) {
  return t ? `<audio src="${e.src}">${t}</audio>` : `<audio src="${e.src}"/>`;
}
function Zc(e) {
  return e.time ? `<break time="${e.time}"/>` : e.strength ? `<break strength="${e.strength}"/>` : "<break/>";
}
function ed(e, t) {
  return e.level ? `<emphasis level="${e.level}">${t}</emphasis>` : `<emphasis>${t}</emphasis>`;
}
function td(e, t) {
  if (!e.style)
    return t;
  const n = e.role ? ` role="${e.role}"` : "", s = e.styledegree ? ` styledegree="${e.styledegree}"` : "";
  return `<mstts:express-as style="${e.style}"${n}${s}>${t}</mstts:express-as>`;
}
function nd(e) {
  if (!e.src)
    return "";
  const t = e.volume ? ` volume="${e.volume}"` : "", n = e.fadein ? ` fadein="${e.fadein}"` : "", s = e.fadeout ? ` fadeout="${e.fadeout}"` : "";
  return `<mstts:backgroundaudio src="${e.src}"${t}${n}${s}/>`;
}
function sd(e) {
  return !e.attrType || !e.value ? "" : `<mstts:silence type="${e.attrType}" value="${e.value}"/>`;
}
function rd(e, t) {
  return `<p>${t}</p>`;
}
function od(e, t) {
  const n = e.alphabet ? `alphabet="${e.alphabet}"` : "";
  return `<phoneme ph="${e.ph}"${n}>${t}</phoneme>`;
}
function ad(e, t) {
  if (!e.contour && !e.pitch && !e.range && !e.rate && !e.volume)
    return t;
  const n = e.contour ? ` contour="${e.contour}"` : "", s = e.pitch ? ` pitch="${e.pitch}"` : "", r = e.range ? ` range="${e.range}"` : "", o = e.volume ? ` volume="${e.volume}"` : "", a = e.rate ? ` rate="${e.rate}"` : "";
  return `<prosody${n}${s}${r}${o}${a}>${t}</prosody>`;
}
function id(e, t) {
  const n = e.interpretAs ? ` interpret-as="${e.interpretAs}"` : "", s = e.format ? ` format="${e.format}"` : "", r = e.detail ? ` detail="${e.detail}"` : "";
  return `<say-as${n}${s}${r}>${t}</say-as>`;
}
function ld(e, t) {
  return `<s>${t}</s>`;
}
function ud(e, t) {
  return `<sub alias="${e.alias}">${t}</sub>`;
}
function cd(e, t) {
  const n = e.effect ? ` effect="${e.effect}"` : "";
  return `<voice name="${e.name}${n}">${t}</voice>`;
}
function dd(e, t) {
  return `<speak version="${e.version}" xml:lang="${e.xmlLang}" xmlns="${e.xmlns}" xmlns:mstts="${e["xmlns:mstts"]}" xmlns:emo="${e["xmlns:emo"]}">${t}</speak>`;
}
function fr(e) {
  if (tt.isText(e))
    return Jc(e.text.trim());
  if (wr.isElement(e)) {
    const t = e.children.map((s) => fr(s)).join("");
    switch (I.getNodeType(e)) {
      case "paragraph":
        return `<p>${t}</p>`;
      case "ssml-speak":
        return dd(e, t);
      case "ssml-mstts:backgroundaudio":
        return nd(e);
      case "ssml-audio":
        return Qc(e, t);
      case "ssml-break":
        return Zc(e);
      case "ssml-emphasis":
        return ed(e, t);
      case "ssml-mstts:express-as":
        return td(e, t);
      case "ssml-p":
        return rd(e, t);
      case "ssml-phoneme":
        return od(e, t);
      case "ssml-prosody":
        return ad(e, t);
      case "ssml-s":
        return ld(e, t);
      case "ssml-say-as":
        return id(e, t);
      case "ssml-sub":
        return ud(e, t);
      case "ssml-voice":
        return cd(e, t);
      case "ssml-mstts:silence":
        return sd(e);
      default:
        return t;
    }
  }
  return "";
}
function fd(e, t) {
  const n = { type: "ssml-voice", remark: "", name: t.name, children: [] }, s = pr(), r = {
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
    function u(m) {
      l.children.push(m);
    }
    return { prosody: l, pushNode: u };
  }
  let i;
  for (let l = 0; l < t.children.length; l++) {
    const u = t.children[l];
    if (!(tt.isText(u) && !u.text.trim()))
      if (tt.isText(u)) {
        i ?? (i = a()), i.pushNode(u);
        continue;
      } else if (q.isVoid(e, u)) {
        i = void 0, r.children.push(u);
        continue;
      } else {
        const m = I.findPath(e, u), [f] = q.nodes(e, {
          at: m,
          mode: "lowest",
          voids: !1,
          match: (p) => I.checkNodeType(p, "ssml-prosody")
        });
        if (f) {
          i = void 0, r.children.push(u);
          continue;
        } else
          i ?? (i = a()), i.pushNode(u);
      }
  }
  return n;
}
function pr() {
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
function pd() {
  const { rootVoice: e, rootExpressAs: t } = je(), n = { ...e, children: [] }, s = pr(), r = { ...t, children: [] };
  n.children.push(...s), n.children.push(r);
  function o(a) {
    r.children.push(a);
  }
  return { voice: n, pushNode: o };
}
function ps(e) {
  const { rootProsody: t } = je(), n = { ...t, children: [] };
  e(n);
  function s(r) {
    n.children.push(r);
  }
  return { prosody: n, pushNode: s };
}
function md() {
  return {
    type: "ssml-break",
    time: "200ms",
    children: [{ text: "" }],
    remark: "paragraphBreak"
  };
}
function vd(e) {
  const t = e.children.filter((n) => I.checkNodeType(n, "paragraph")).filter((n) => !!tn.string(n).trim()).map((n, s, r) => {
    const a = n.children;
    return s < r.length - 1 ? a.concat([md()]) : a;
  });
  return [].concat(...t);
}
function hd(e) {
  const t = vd(e), n = [];
  let s, r;
  for (let o = 0; o < t.length; o++) {
    const a = t[o];
    if (!(tt.isText(a) && !a.text.trim())) {
      if (I.checkNodeType(a, "custom-management")) {
        s && (n.push(s.voice), s = void 0, r = void 0), n.push(fd(e, a));
        continue;
      }
      if (s ?? (s = pd()), tt.isText(a)) {
        r ?? (r = ps(s.pushNode)), r.pushNode(a);
        continue;
      } else if (q.isVoid(e, a)) {
        r = void 0, s.pushNode(a);
        continue;
      } else {
        const i = I.findPath(e, a), [l] = q.nodes(e, {
          at: i,
          mode: "lowest",
          voids: !1,
          match: (u) => I.checkNodeType(u, "ssml-prosody")
        });
        if (l) {
          r = void 0, s.pushNode(a);
          continue;
        } else {
          r ?? (r = ps(s.pushNode)), r.pushNode(a);
          continue;
        }
      }
    }
  }
  return s && n.push(s.voice), n;
}
function yd() {
  const { editor: e } = de();
  if (!e)
    throw Error("没有找到 editor 对象");
  const { rootSpeak: t, rootBackgroundaudio: n } = je(), s = { ...t, children: [] }, r = { ...n };
  return s.children.push(r, ...hd(e)), fr(s);
}
const Ke = (e) => (Zt("data-v-fb2870b0"), e = e(), en(), e), gd = { class: "editor-title d-flex flex-row align-item-center justify-content-between" }, bd = { class: "title-wrapper d-flex flex-column justify-content-center ps-3" }, _d = /* @__PURE__ */ Ke(() => /* @__PURE__ */ h("div", { class: "title-author pb-1" }, "SSML编辑器", -1)), wd = { class: "author d-flex flex-row align-items-center justify-content-start" }, xd = /* @__PURE__ */ Ke(() => /* @__PURE__ */ h("div", null, "未保存", -1)), Ed = /* @__PURE__ */ Ke(() => /* @__PURE__ */ h("span", { class: "iconfont icon-play font-size-12 p-1" }, null, -1)), $d = /* @__PURE__ */ Ke(() => /* @__PURE__ */ h("div", { class: "d-inline-block" }, null, -1)), kd = { class: "operation-wrapper d-flex flex-row justify-content-center align-items-center" }, Sd = /* @__PURE__ */ Ke(() => /* @__PURE__ */ h("div", { class: "menu-divider" }, null, -1)), Cd = /* @__PURE__ */ Ke(() => /* @__PURE__ */ h("div", { class: "px-1" }, null, -1)), Od = {
  class: "ssml-code border border-secondary-subtle rounded-2 px-2",
  style: { "white-space": "pre-wrap", "max-height": "50vh" }
}, Td = { class: "dialog-footer" }, Pd = /* @__PURE__ */ A({
  __name: "editor-title",
  setup(e) {
    const t = _(!1), n = _(""), { rootBackgroundaudio: s } = je(), r = Z(() => Kc(n.value, {
      indentation: "    ",
      filter: (u) => u.type !== "Comment",
      collapseContent: !0,
      lineSeparator: `
`
    })), o = () => {
      n.value = yd(), t.value = !0;
    }, a = () => {
      s.src && Ye.play(s.src);
    }, i = () => {
      Ye.stop(s.src), s.src = "", s.remark = "";
    };
    async function l(u) {
      await navigator.clipboard.writeText(u ? r.value : n.value), t.value = !1;
    }
    return (u, m) => (T(), N(J, null, [
      h("div", gd, [
        h("div", bd, [
          _d,
          h("div", wd, [
            xd,
            v(s).src ? (T(), X(v(Pe), {
              key: 0,
              class: "bgm-txt ms-2",
              closable: "",
              size: "small",
              onClick: a,
              onClose: i
            }, {
              default: R(() => [
                Ed,
                $d,
                h("span", null, B(v(s).remark), 1)
              ]),
              _: 1
            })) : Ee("", !0)
          ])
        ]),
        h("div", kd, [
          b(v(ie), {
            type: "primary",
            icon: v(Rr),
            disabled: ""
          }, {
            default: R(() => [
              U("分享")
            ]),
            _: 1
          }, 8, ["icon"]),
          Sd,
          b(v(ie), {
            type: "primary",
            onClick: o
          }, {
            default: R(() => [
              U("查看SSML")
            ]),
            _: 1
          }),
          b(v(ie), { disabled: "" }, {
            default: R(() => [
              U("下载音频")
            ]),
            _: 1
          }),
          b(v(ie), { disabled: "" }, {
            default: R(() => [
              U("下载视频")
            ]),
            _: 1
          }),
          b(v(ie), { disabled: "" }, {
            default: R(() => [
              U("下载字幕")
            ]),
            _: 1
          }),
          b(v(ie), { disabled: "" }, {
            default: R(() => [
              U("声音转换")
            ]),
            _: 1
          }),
          Cd
        ])
      ]),
      b(v(kr), {
        modelValue: t.value,
        "onUpdate:modelValue": m[4] || (m[4] = (f) => t.value = f),
        title: "查看SSML",
        width: "80%"
      }, {
        header: R(() => [
          b(v(ie), {
            type: "info",
            onClick: m[0] || (m[0] = (f) => l(!0))
          }, {
            default: R(() => [
              U("复制+关闭")
            ]),
            _: 1
          }),
          b(v(ie), {
            type: "primary",
            onClick: m[1] || (m[1] = (f) => l(!1))
          }, {
            default: R(() => [
              U("压缩+复制+关闭(推荐)")
            ]),
            _: 1
          })
        ]),
        footer: R(() => [
          h("span", Td, [
            b(v(ie), {
              type: "info",
              onClick: m[2] || (m[2] = (f) => l(!0))
            }, {
              default: R(() => [
                U("复制+关闭")
              ]),
              _: 1
            }),
            b(v(ie), {
              type: "primary",
              onClick: m[3] || (m[3] = (f) => l(!1))
            }, {
              default: R(() => [
                U("压缩+复制+关闭(推荐)")
              ]),
              _: 1
            })
          ])
        ]),
        default: R(() => [
          h("pre", Od, B(r.value), 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
});
const Rd = /* @__PURE__ */ fe(Pd, [["__scopeId", "data-v-fb2870b0"]]), Dd = /* @__PURE__ */ A({
  __name: "editor-core",
  emits: ["created", "change"],
  setup(e, { emit: t }) {
    const { editor: n, setEditor: s, globalEditConfig: r } = de(), o = _(null);
    ue(() => {
      a();
    }), Qt(() => {
      n == null || n.destroy();
    });
    function a() {
      if (!o.value)
        return;
      const i = xr({
        selector: o.value,
        mode: "simple",
        config: {
          ...le(r.editorConfig),
          onCreated(l) {
            t("created", l), he.emit(ve.EDITOR_CREATED, l);
          },
          onChange(l) {
            t("change", l);
          }
        }
      });
      s(i), i.on(W.ERROR, r.handleError);
    }
    return (i, l) => (T(), N("div", {
      ref_key: "boxRef",
      ref: o,
      class: "edit-core",
      style: { height: "70vh", "overflow-y": "hidden" }
    }, null, 512));
  }
}), Nd = { class: "bar-view border-bottom border-1" }, Id = /* @__PURE__ */ A({
  __name: "bar-view",
  setup(e) {
    return (t, n) => (T(), N(J, null, [
      h("div", Nd, [
        b(v(Ws), null, {
          default: R(() => [
            b(v(Be), { divider: "green" }, {
              default: R(() => [
                b(v(se), {
                  text: "24K高清音质",
                  icon: "play",
                  disabled: ""
                })
              ]),
              _: 1
            }),
            b(v(Be), { divider: "cyan" }, {
              default: R(() => [
                b(v(Ks)),
                b(v(Qs)),
                b(v(Zs)),
                b(v(Js)),
                b(v(er)),
                b(v(tr))
              ]),
              _: 1
            }),
            b(v(Be), { divider: "orange" }, {
              default: R(() => [
                b(v(nr)),
                b(v(lr)),
                b(v(ur))
              ]),
              _: 1
            }),
            b(v(Be), { divider: "purple" }, {
              default: R(() => [
                b(v(sr)),
                b(v(or))
              ]),
              _: 1
            }),
            b(v(Be), { divider: "yellow" }, {
              default: R(() => [
                b(v(rr)),
                b(v(ar))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      b(v(dr))
    ], 64));
  }
}), Vd = { class: "editor-box" }, Ad = { class: "editor-core-container shadow pt-1" }, Ld = /* @__PURE__ */ A({
  __name: "editor-view",
  emits: ["created", "change"],
  setup(e, { emit: t }) {
    const n = (a) => {
      t("created", a);
    }, s = (a) => {
      t("change", a);
    };
    function r(a) {
      he.emit(ve.VIEW_CLICK, a);
    }
    function o(a) {
      he.emit(ve.VIEW_KEYDOWN, a);
    }
    return (a, i) => (T(), N("div", {
      class: "editor-view",
      onClick: r,
      onKeydown: o
    }, [
      b(Rd),
      h("div", Vd, [
        b(Id),
        h("div", Ad, [
          b(Dd, {
            onChange: s,
            onCreated: n
          })
        ])
      ])
    ], 32));
  }
});
const Md = /* @__PURE__ */ fe(Ld, [["__scopeId", "data-v-c398e700"]]), jd = {
  install(e) {
    e.component("EditorView", Md);
  }
}, nf = {
  install(e, t) {
    e.use(no()), e.use(() => {
      const { setGlobalEditConfig: n } = de(), s = Vs(t);
      n(s), he.on(ve.ERROR, s.handleError);
    }), e.use(si), e.use(Ml), e.use(Yc), e.use(jd);
  }
};
export {
  jo as AudioPlayer,
  Ho as CancellationTokenSource,
  Yd as DOMComment,
  qd as DOMElement,
  Gd as DOMNode,
  Kd as DOMRange,
  Jd as DOMSelection,
  Qd as DOMStaticRange,
  Xd as DOMText,
  ve as EMITTER_EVENT,
  Md as EditorView,
  Fo as FileSelector,
  W as WANGEDITOR_EVENT,
  Ye as audioPlayer,
  Vs as createGlobalEditorConfig,
  nf as default,
  un as defaultFilterSpeaker,
  tf as defaultLabelValue,
  ri as defaultSpeaker,
  st as demoAvatar,
  Qn as formatTime,
  Zd as genRandomStr,
  io as pitch,
  ao as speed
};

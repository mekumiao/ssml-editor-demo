var rr = Object.defineProperty;
var or = (e, t, n) => t in e ? rr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var he = (e, t, n) => (or(e, typeof t != "symbol" ? t + "" : t, n), n);
import { effectScope as os, ref as b, markRaw as Ie, toRaw as oe, hasInjectionContext as ar, inject as ir, getCurrentInstance as qt, watch as se, unref as y, reactive as Lt, isRef as Ge, isReactive as Kt, toRef as Et, nextTick as Mt, computed as ee, getCurrentScope as as, onScopeDispose as is, toRefs as jt, shallowRef as X, shallowReactive as Je, defineComponent as A, openBlock as P, createElementBlock as D, normalizeClass as _e, withModifiers as re, createElementVNode as h, toDisplayString as B, createBlock as J, withCtx as T, createVNode as v, renderSlot as ke, customRef as lr, onMounted as $e, watchEffect as ur, Fragment as Q, renderList as le, createTextVNode as U, onUnmounted as Jt, Teleport as ls, withDirectives as Te, normalizeStyle as yt, vShow as Re, createCommentVNode as gt, pushScopeId as Qt, popScopeId as Zt } from "vue";
import { DomEditor as I, SlateTransforms as Y, SlateEditor as G, SlateRange as pe, Boot as ae, SlateText as tt, SlateElement as cr, SlateNode as dr, createEditor as fr } from "@wangeditor/editor";
import { ElForm as bt, ElInput as _t, ElPopover as Se, ElMenu as pr, ElMenuItem as mr, ElSelect as hn, ElOption as yn, ElButton as ie, ElTag as Oe, ElIcon as us, ElSlider as kt, ElDialog as vr } from "element-plus";
import { Search as hr, More as yr, StarFilled as gr, Star as br, Minus as _r, Share as wr } from "@element-plus/icons-vue";
var cs = !1;
function at(e, t, n) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function St(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1);
    return;
  }
  delete e[t];
}
function xr() {
  return ds().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function ds() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const $r = typeof Proxy == "function", Er = "devtools-plugin:setup", kr = "plugin:settings:set";
let Me, Ht;
function Sr() {
  var e;
  return Me !== void 0 || (typeof window < "u" && window.performance ? (Me = !0, Ht = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Me = !0, Ht = global.perf_hooks.performance) : Me = !1), Me;
}
function Cr() {
  return Sr() ? Ht.now() : Date.now();
}
class Or {
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
        return Cr();
      }
    }, n && n.on(kr, (a, i) => {
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
function fs(e, t) {
  const n = e, s = ds(), r = xr(), o = $r && n.enableEarlyProxy;
  if (r && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o))
    r.emit(Er, e, t);
  else {
    const a = o ? new Or(n, r) : null;
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
const nt = (e) => Qe = e, ps = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Ae(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var xe;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(xe || (xe = {}));
const wt = typeof window < "u", Ze = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && wt, gn = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function Pr(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], { type: e.type }) : e;
}
function en(e, t, n) {
  const s = new XMLHttpRequest();
  s.open("GET", e), s.responseType = "blob", s.onload = function() {
    hs(s.response, t, n);
  }, s.onerror = function() {
    console.error("could not download file");
  }, s.send();
}
function ms(e) {
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
const lt = typeof navigator == "object" ? navigator : { userAgent: "" }, vs = /* @__PURE__ */ (() => /Macintosh/.test(lt.userAgent) && /AppleWebKit/.test(lt.userAgent) && !/Safari/.test(lt.userAgent))(), hs = wt ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !vs ? Tr : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in lt ? Rr : (
      // Fallback to using FileReader and a popup
      Vr
    )
  )
) : () => {
};
function Tr(e, t = "download", n) {
  const s = document.createElement("a");
  s.download = t, s.rel = "noopener", typeof e == "string" ? (s.href = e, s.origin !== location.origin ? ms(s.href) ? en(e, t, n) : (s.target = "_blank", it(s)) : it(s)) : (s.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    it(s);
  }, 0));
}
function Rr(e, t = "download", n) {
  if (typeof e == "string")
    if (ms(e))
      en(e, t, n);
    else {
      const s = document.createElement("a");
      s.href = e, s.target = "_blank", setTimeout(function() {
        it(s);
      });
    }
  else
    navigator.msSaveOrOpenBlob(Pr(e, n), t);
}
function Vr(e, t, n, s) {
  if (s = s || open("", "_blank"), s && (s.document.title = s.document.body.innerText = "downloading..."), typeof e == "string")
    return en(e, t, n);
  const r = e.type === "application/octet-stream", o = /constructor/i.test(String(gn.HTMLElement)) || "safari" in gn, a = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((a || r && o || vs) && typeof FileReader < "u") {
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
function tn(e) {
  return "_a" in e && "install" in e;
}
function ys() {
  if (!("clipboard" in navigator))
    return K("Your browser doesn't support the Clipboard API", "error"), !0;
}
function gs(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (K('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Nr(e) {
  if (!ys())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), K("Global state copied to clipboard.");
    } catch (t) {
      if (gs(t))
        return;
      K("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function Ir(e) {
  if (!ys())
    try {
      bs(e, JSON.parse(await navigator.clipboard.readText())), K("Global state pasted from clipboard.");
    } catch (t) {
      if (gs(t))
        return;
      K("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function Dr(e) {
  try {
    hs(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    K("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let Ee;
function Ar() {
  Ee || (Ee = document.createElement("input"), Ee.type = "file", Ee.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      Ee.onchange = async () => {
        const s = Ee.files;
        if (!s)
          return t(null);
        const r = s.item(0);
        return t(r ? { text: await r.text(), file: r } : null);
      }, Ee.oncancel = () => t(null), Ee.onerror = n, Ee.click();
    });
  }
  return e;
}
async function Lr(e) {
  try {
    const n = await Ar()();
    if (!n)
      return;
    const { text: s, file: r } = n;
    bs(e, JSON.parse(s)), K(`Global state imported from "${r.name}".`);
  } catch (t) {
    K("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function bs(e, t) {
  for (const n in t) {
    const s = e.state.value[n];
    s && Object.assign(s, t[n]);
  }
}
function ye(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const _s = "🍍 Pinia (root)", Ft = "_root";
function Mr(e) {
  return tn(e) ? {
    id: Ft,
    label: _s
  } : {
    id: e.$id,
    label: e.$id
  };
}
function jr(e) {
  if (tn(e)) {
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
function Hr(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: ye(e.type),
    key: ye(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function Fr(e) {
  switch (e) {
    case xe.direct:
      return "mutation";
    case xe.patchFunction:
      return "$patch";
    case xe.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let Be = !0;
const ut = [], Ne = "pinia:mutations", Z = "pinia", { assign: Ur } = Object, pt = (e) => "🍍 " + e;
function Br(e, t) {
  fs({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: ut,
    app: e
  }, (n) => {
    typeof n.now != "function" && K("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: Ne,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: Z,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            Nr(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await Ir(t), n.sendInspectorTree(Z), n.sendInspectorState(Z);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            Dr(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Lr(t), n.sendInspectorTree(Z), n.sendInspectorState(Z);
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
            type: pt(i.$id),
            key: "state",
            editable: !0,
            value: i._isOptionsAPI ? {
              _custom: {
                value: oe(i.$state),
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
            type: pt(i.$id),
            key: "getters",
            editable: !1,
            value: i._getters.reduce((l, u) => {
              try {
                l[u] = i[u];
              } catch (p) {
                l[u] = p;
              }
              return l;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((s) => {
      if (s.app === e && s.inspectorId === Z) {
        let r = [t];
        r = r.concat(Array.from(t._s.values())), s.rootNodes = (s.filter ? r.filter((o) => "$id" in o ? o.$id.toLowerCase().includes(s.filter.toLowerCase()) : _s.toLowerCase().includes(s.filter.toLowerCase())) : r).map(Mr);
      }
    }), n.on.getInspectorState((s) => {
      if (s.app === e && s.inspectorId === Z) {
        const r = s.nodeId === Ft ? t : t._s.get(s.nodeId);
        if (!r)
          return;
        r && (s.state = jr(r));
      }
    }), n.on.editInspectorState((s, r) => {
      if (s.app === e && s.inspectorId === Z) {
        const o = s.nodeId === Ft ? t : t._s.get(s.nodeId);
        if (!o)
          return K(`store "${s.nodeId}" not found`, "error");
        const { path: a } = s;
        tn(o) ? a.unshift("state") : (a.length !== 1 || !o._customProperties.has(a[0]) || a[0] in o.$state) && a.unshift("$state"), Be = !1, s.set(o, a, s.state.value), Be = !0;
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
        a[0] = "$state", Be = !1, s.set(o, a, s.state.value), Be = !0;
      }
    });
  });
}
function zr(e, t) {
  ut.includes(pt(t.$id)) || ut.push(pt(t.$id)), fs({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: ut,
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
      const p = ws++;
      n.addTimelineEvent({
        layerId: Ne,
        event: {
          time: s(),
          title: "🛫 " + l,
          subtitle: "start",
          data: {
            store: ye(t.$id),
            action: ye(l),
            args: u
          },
          groupId: p
        }
      }), a((m) => {
        Pe = void 0, n.addTimelineEvent({
          layerId: Ne,
          event: {
            time: s(),
            title: "🛬 " + l,
            subtitle: "end",
            data: {
              store: ye(t.$id),
              action: ye(l),
              args: u,
              result: m
            },
            groupId: p
          }
        });
      }), i((m) => {
        Pe = void 0, n.addTimelineEvent({
          layerId: Ne,
          event: {
            time: s(),
            logType: "error",
            title: "💥 " + l,
            subtitle: "end",
            data: {
              store: ye(t.$id),
              action: ye(l),
              args: u,
              error: m
            },
            groupId: p
          }
        });
      });
    }, !0), t._customProperties.forEach((a) => {
      se(() => y(t[a]), (i, l) => {
        n.notifyComponentUpdate(), n.sendInspectorState(Z), Be && n.addTimelineEvent({
          layerId: Ne,
          event: {
            time: s(),
            title: "Change",
            subtitle: a,
            data: {
              newValue: i,
              oldValue: l
            },
            groupId: Pe
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: a, type: i }, l) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(Z), !Be)
        return;
      const u = {
        time: s(),
        title: Fr(i),
        data: Ur({ store: ye(t.$id) }, Hr(a)),
        groupId: Pe
      };
      i === xe.patchFunction ? u.subtitle = "⤵️" : i === xe.patchObject ? u.subtitle = "🧩" : a && !Array.isArray(a) && (u.subtitle = a.type), a && (u.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: a
        }
      }), n.addTimelineEvent({
        layerId: Ne,
        event: u
      });
    }, { detached: !0, flush: "sync" });
    const r = t._hotUpdate;
    t._hotUpdate = Ie((a) => {
      r(a), n.addTimelineEvent({
        layerId: Ne,
        event: {
          time: s(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: ye(t.$id),
            info: ye("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(Z), n.sendInspectorState(Z);
    });
    const { $dispose: o } = t;
    t.$dispose = () => {
      o(), n.notifyComponentUpdate(), n.sendInspectorTree(Z), n.sendInspectorState(Z), n.getSettings().logStoreChanges && K(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(Z), n.sendInspectorState(Z), n.getSettings().logStoreChanges && K(`"${t.$id}" store installed 🆕`);
  });
}
let ws = 0, Pe;
function bn(e, t, n) {
  const s = t.reduce((r, o) => (r[o] = oe(e)[o], r), {});
  for (const r in s)
    e[r] = function() {
      const o = ws, a = n ? new Proxy(e, {
        get(...l) {
          return Pe = o, Reflect.get(...l);
        },
        set(...l) {
          return Pe = o, Reflect.set(...l);
        }
      }) : e;
      Pe = o;
      const i = s[r].apply(a, arguments);
      return Pe = void 0, i;
    };
}
function Wr({ app: e, store: t, options: n }) {
  if (t.$id.startsWith("__hot:"))
    return;
  t._isOptionsAPI = !!n.state, bn(t, Object.keys(n.actions), t._isOptionsAPI);
  const s = t._hotUpdate;
  oe(t)._hotUpdate = function(r) {
    s.apply(this, arguments), bn(t, Object.keys(r._hmrPayload.actions), !!t._isOptionsAPI);
  }, zr(
    e,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    t
  );
}
function Gr() {
  const e = os(!0), t = e.run(() => b({}));
  let n = [], s = [];
  const r = Ie({
    install(o) {
      nt(r), r._a = o, o.provide(ps, r), o.config.globalProperties.$pinia = r, Ze && Br(o, r), s.forEach((a) => n.push(a)), s = [];
    },
    use(o) {
      return !this._a && !cs ? s.push(o) : n.push(o), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return Ze && typeof Proxy < "u" && r.use(Wr), r;
}
function xs(e, t) {
  for (const n in t) {
    const s = t[n];
    if (!(n in e))
      continue;
    const r = e[n];
    Ae(r) && Ae(s) && !Ge(s) && !Kt(s) ? e[n] = xs(r, s) : e[n] = s;
  }
  return e;
}
const $s = () => {
};
function _n(e, t, n, s = $s) {
  e.push(t);
  const r = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), s());
  };
  return !n && as() && is(r), r;
}
function je(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Yr = (e) => e();
function Ut(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, s) => e.set(s, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], r = e[n];
    Ae(r) && Ae(s) && e.hasOwnProperty(n) && !Ge(s) && !Kt(s) ? e[n] = Ut(r, s) : e[n] = s;
  }
  return e;
}
const Xr = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function qr(e) {
  return !Ae(e) || !e.hasOwnProperty(Xr);
}
const { assign: fe } = Object;
function wn(e) {
  return !!(Ge(e) && e.effect);
}
function xn(e, t, n, s) {
  const { state: r, actions: o, getters: a } = t, i = n.state.value[e];
  let l;
  function u() {
    !i && (process.env.NODE_ENV === "production" || !s) && (n.state.value[e] = r ? r() : {});
    const p = process.env.NODE_ENV !== "production" && s ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      jt(b(r ? r() : {}).value)
    ) : jt(n.state.value[e]);
    return fe(p, o, Object.keys(a || {}).reduce((m, c) => (process.env.NODE_ENV !== "production" && c in p && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${c}" in store "${e}".`), m[c] = Ie(ee(() => {
      nt(n);
      const g = n._s.get(e);
      return a[c].call(g, g);
    })), m), {}));
  }
  return l = Bt(e, u, t, n, s, !0), l;
}
function Bt(e, t, n = {}, s, r, o) {
  let a;
  const i = fe({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !s._e.active)
    throw new Error("Pinia destroyed");
  const l = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !cs && (l.onTrigger = (C) => {
    u ? g = C : u == !1 && !_._hotUpdating && (Array.isArray(g) ? g.push(C) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let u, p, m = [], c = [], g;
  const f = s.state.value[e];
  !o && !f && (process.env.NODE_ENV === "production" || !r) && (s.state.value[e] = {});
  const d = b({});
  let w;
  function S(C) {
    let O;
    u = p = !1, process.env.NODE_ENV !== "production" && (g = []), typeof C == "function" ? (C(s.state.value[e]), O = {
      type: xe.patchFunction,
      storeId: e,
      events: g
    }) : (Ut(s.state.value[e], C), O = {
      type: xe.patchObject,
      payload: C,
      storeId: e,
      events: g
    });
    const N = w = Symbol();
    Mt().then(() => {
      w === N && (u = !0);
    }), p = !0, je(m, O, s.state.value[e]);
  }
  const V = o ? function() {
    const { state: O } = n, N = O ? O() : {};
    this.$patch((F) => {
      fe(F, N);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : $s
  );
  function x() {
    a.stop(), m = [], c = [], s._s.delete(e);
  }
  function k(C, O) {
    return function() {
      nt(s);
      const N = Array.from(arguments), F = [], ve = [];
      function $t(H) {
        F.push(H);
      }
      function Ce(H) {
        ve.push(H);
      }
      je(c, {
        args: N,
        name: C,
        store: _,
        after: $t,
        onError: Ce
      });
      let z;
      try {
        z = O.apply(this && this.$id === e ? this : _, N);
      } catch (H) {
        throw je(ve, H), H;
      }
      return z instanceof Promise ? z.then((H) => (je(F, H), H)).catch((H) => (je(ve, H), Promise.reject(H))) : (je(F, z), z);
    };
  }
  const R = /* @__PURE__ */ Ie({
    actions: {},
    getters: {},
    state: [],
    hotState: d
  }), $ = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: _n.bind(null, c),
    $patch: S,
    $reset: V,
    $subscribe(C, O = {}) {
      const N = _n(m, C, O.detached, () => F()), F = a.run(() => se(() => s.state.value[e], (ve) => {
        (O.flush === "sync" ? p : u) && C({
          storeId: e,
          type: xe.direct,
          events: g
        }, ve);
      }, fe({}, l, O)));
      return N;
    },
    $dispose: x
  }, _ = Lt(process.env.NODE_ENV !== "production" || Ze ? fe(
    {
      _hmrPayload: R,
      _customProperties: Ie(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    $
    // must be added later
    // setupStore
  ) : $);
  s._s.set(e, _);
  const M = s._a && s._a.runWithContext || Yr, ne = s._e.run(() => (a = os(), M(() => a.run(t))));
  for (const C in ne) {
    const O = ne[C];
    if (Ge(O) && !wn(O) || Kt(O))
      process.env.NODE_ENV !== "production" && r ? at(d.value, C, Et(ne, C)) : o || (f && qr(O) && (Ge(O) ? O.value = f[C] : Ut(O, f[C])), s.state.value[e][C] = O), process.env.NODE_ENV !== "production" && R.state.push(C);
    else if (typeof O == "function") {
      const N = process.env.NODE_ENV !== "production" && r ? O : k(C, O);
      ne[C] = N, process.env.NODE_ENV !== "production" && (R.actions[C] = O), i.actions[C] = O;
    } else
      process.env.NODE_ENV !== "production" && wn(O) && (R.getters[C] = o ? (
        // @ts-expect-error
        n.getters[C]
      ) : O, wt && (ne._getters || // @ts-expect-error: same
      (ne._getters = Ie([]))).push(C));
  }
  if (fe(_, ne), fe(oe(_), ne), Object.defineProperty(_, "$state", {
    get: () => process.env.NODE_ENV !== "production" && r ? d.value : s.state.value[e],
    set: (C) => {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error("cannot set hotState");
      S((O) => {
        fe(O, C);
      });
    }
  }), process.env.NODE_ENV !== "production" && (_._hotUpdate = Ie((C) => {
    _._hotUpdating = !0, C._hmrPayload.state.forEach((O) => {
      if (O in _.$state) {
        const N = C.$state[O], F = _.$state[O];
        typeof N == "object" && Ae(N) && Ae(F) ? xs(N, F) : C.$state[O] = F;
      }
      at(_, O, Et(C.$state, O));
    }), Object.keys(_.$state).forEach((O) => {
      O in C.$state || St(_, O);
    }), u = !1, p = !1, s.state.value[e] = Et(C._hmrPayload, "hotState"), p = !0, Mt().then(() => {
      u = !0;
    });
    for (const O in C._hmrPayload.actions) {
      const N = C[O];
      at(_, O, k(O, N));
    }
    for (const O in C._hmrPayload.getters) {
      const N = C._hmrPayload.getters[O], F = o ? (
        // special handling of options api
        ee(() => (nt(s), N.call(_, _)))
      ) : N;
      at(_, O, F);
    }
    Object.keys(_._hmrPayload.getters).forEach((O) => {
      O in C._hmrPayload.getters || St(_, O);
    }), Object.keys(_._hmrPayload.actions).forEach((O) => {
      O in C._hmrPayload.actions || St(_, O);
    }), _._hmrPayload = C._hmrPayload, _._getters = C._getters, _._hotUpdating = !1;
  })), Ze) {
    const C = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((O) => {
      Object.defineProperty(_, O, fe({ value: _[O] }, C));
    });
  }
  return s._p.forEach((C) => {
    if (Ze) {
      const O = a.run(() => C({
        store: _,
        app: s._a,
        pinia: s,
        options: i
      }));
      Object.keys(O || {}).forEach((N) => _._customProperties.add(N)), fe(_, O);
    } else
      fe(_, a.run(() => C({
        store: _,
        app: s._a,
        pinia: s,
        options: i
      })));
  }), process.env.NODE_ENV !== "production" && _.$state && typeof _.$state == "object" && typeof _.$state.constructor == "function" && !_.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${_.$id}".`), f && o && n.hydrate && n.hydrate(_.$state, f), u = !0, p = !0, _;
}
function nn(e, t, n) {
  let s, r;
  const o = typeof t == "function";
  if (typeof e == "string")
    s = e, r = o ? n : t;
  else if (r = e, s = e.id, process.env.NODE_ENV !== "production" && typeof s != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function a(i, l) {
    const u = ar();
    if (i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && Qe && Qe._testing ? null : i) || (u ? ir(ps, null) : null), i && nt(i), process.env.NODE_ENV !== "production" && !Qe)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    i = Qe, i._s.has(s) || (o ? Bt(s, t, r, i) : xn(s, r, i), process.env.NODE_ENV !== "production" && (a._pinia = i));
    const p = i._s.get(s);
    if (process.env.NODE_ENV !== "production" && l) {
      const m = "__hot:" + s, c = o ? Bt(m, t, r, i, !0) : xn(m, fe({}, r), i, !0);
      l._hotUpdate(c), delete i.state.value[m], i._s.delete(m);
    }
    if (process.env.NODE_ENV !== "production" && wt) {
      const m = qt();
      if (m && m.proxy && // avoid adding stores that are just built for hot module replacement
      !l) {
        const c = m.proxy, g = "_pStores" in c ? c._pStores : c._pStores = {};
        g[s] = p;
      }
    }
    return p;
  }
  return a.$id = s, a;
}
function de() {
  return () => Promise.resolve([]);
}
function Es(e) {
  const t = (e == null ? void 0 : e.editorConfig) || { maxLength: 5e3, placeholder: "请输入内容..." }, n = (e == null ? void 0 : e.handleError) || (() => {
  }), s = (e == null ? void 0 : e.pinyin) || { fetchData: de() }, r = (e == null ? void 0 : e.english) || { fetchData: de() }, o = (e == null ? void 0 : e.special) || {
    fetchData: de(),
    fetchScene: de(),
    fetchStyle: de()
  }, a = (e == null ? void 0 : e.bgm) || {
    fetchData: de(),
    fetchScene: de(),
    fetchStyle: de()
  }, i = (e == null ? void 0 : e.tryPlay) || {
    fetchData: de(),
    featchTag: de(),
    fetchStar: de(),
    fetchFlag: de()
  }, l = o, u = a, p = i;
  return l.menus ?? (l.menus = [
    { label: "默认音效", value: "" },
    { label: "自定义音效", value: "custom" },
    { label: "最近音效", value: "history" }
  ]), u.menus ?? (u.menus = [
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
    bgm: u,
    special: l,
    tryPlay: p
  };
}
const Kr = () => ({
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
}), Jr = () => ({
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
}), st = () => "https://img.sdaxia.top/upload/4314c841777e4d20901cd5d04a28e91a.png", me = nn("--editor-config", () => {
  const e = X(), t = X(), n = ee(() => e.value), s = ee(() => {
    if (t.value)
      return t.value;
    throw Error("请设置GlobalEditorConfig");
  });
  return { editor: n, globalEditConfig: s, setEditor: (a) => {
    e.value = a;
  }, setGlobalEditConfig: (a) => {
    t.value = a ?? Es();
  } };
}), Qr = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-audio" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-audio" ? !0 : n(r), s;
};
function $n(e, t, n, s, r) {
  const o = t === void 0 ? void 0 : t.key;
  return { sel: e, data: t, children: n, text: s, elm: r, key: o };
}
const En = Array.isArray;
function Ct(e) {
  return typeof e == "string" || typeof e == "number" || e instanceof String || e instanceof Number;
}
function ks(e, t, n) {
  if (e.ns = "http://www.w3.org/2000/svg", n !== "foreignObject" && t !== void 0)
    for (let s = 0; s < t.length; ++s) {
      const r = t[s];
      if (typeof r == "string")
        continue;
      const o = r.data;
      o !== void 0 && ks(o, r.children, r.sel);
    }
}
function E(e, t, n) {
  let s = {}, r, o, a;
  if (n !== void 0 ? (t !== null && (s = t), En(n) ? r = n : Ct(n) ? o = n.toString() : n && n.sel && (r = [n])) : t != null && (En(t) ? r = t : Ct(t) ? o = t.toString() : t && t.sel ? r = [t] : s = t), r !== void 0)
    for (a = 0; a < r.length; ++a)
      Ct(r[a]) && (r[a] = $n(void 0, void 0, void 0, r[a], void 0));
  return e[0] === "s" && e[1] === "v" && e[2] === "g" && (e.length === 3 || e[3] === "." || e[3] === "#") && ks(s, r, e), $n(e, s, r, o, void 0);
}
var ze = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function sn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ss = "Expected a function", kn = 0 / 0, Zr = "[object Symbol]", eo = /^\s+|\s+$/g, to = /^[-+]0x[0-9a-f]+$/i, no = /^0b[01]+$/i, so = /^0o[0-7]+$/i, ro = parseInt, oo = typeof ze == "object" && ze && ze.Object === Object && ze, ao = typeof self == "object" && self && self.Object === Object && self, io = oo || ao || Function("return this")(), lo = Object.prototype, uo = lo.toString, co = Math.max, fo = Math.min, Ot = function() {
  return io.Date.now();
};
function po(e, t, n) {
  var s, r, o, a, i, l, u = 0, p = !1, m = !1, c = !0;
  if (typeof e != "function")
    throw new TypeError(Ss);
  t = Sn(t) || 0, mt(n) && (p = !!n.leading, m = "maxWait" in n, o = m ? co(Sn(n.maxWait) || 0, t) : o, c = "trailing" in n ? !!n.trailing : c);
  function g($) {
    var _ = s, M = r;
    return s = r = void 0, u = $, a = e.apply(M, _), a;
  }
  function f($) {
    return u = $, i = setTimeout(S, t), p ? g($) : a;
  }
  function d($) {
    var _ = $ - l, M = $ - u, ne = t - _;
    return m ? fo(ne, o - M) : ne;
  }
  function w($) {
    var _ = $ - l, M = $ - u;
    return l === void 0 || _ >= t || _ < 0 || m && M >= o;
  }
  function S() {
    var $ = Ot();
    if (w($))
      return V($);
    i = setTimeout(S, d($));
  }
  function V($) {
    return i = void 0, c && s ? g($) : (s = r = void 0, a);
  }
  function x() {
    i !== void 0 && clearTimeout(i), u = 0, s = l = r = i = void 0;
  }
  function k() {
    return i === void 0 ? a : V(Ot());
  }
  function R() {
    var $ = Ot(), _ = w($);
    if (s = arguments, r = this, l = $, _) {
      if (i === void 0)
        return f(l);
      if (m)
        return i = setTimeout(S, t), g(l);
    }
    return i === void 0 && (i = setTimeout(S, t)), a;
  }
  return R.cancel = x, R.flush = k, R;
}
function mo(e, t, n) {
  var s = !0, r = !0;
  if (typeof e != "function")
    throw new TypeError(Ss);
  return mt(n) && (s = "leading" in n ? !!n.leading : s, r = "trailing" in n ? !!n.trailing : r), po(e, t, {
    leading: s,
    maxWait: t,
    trailing: r
  });
}
function mt(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function vo(e) {
  return !!e && typeof e == "object";
}
function ho(e) {
  return typeof e == "symbol" || vo(e) && uo.call(e) == Zr;
}
function Sn(e) {
  if (typeof e == "number")
    return e;
  if (ho(e))
    return kn;
  if (mt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = mt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(eo, "");
  var n = no.test(e);
  return n || so.test(e) ? ro(e.slice(2), n ? 2 : 8) : to.test(e) ? kn : +e;
}
var yo = mo;
const ue = /* @__PURE__ */ sn(yo);
function Cn(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function rn(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {}), Object.keys(t).forEach(function(n) {
    typeof e[n] > "u" ? e[n] = t[n] : Cn(t[n]) && Cn(e[n]) && Object.keys(t[n]).length > 0 && rn(e[n], t[n]);
  });
}
var Cs = {
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
function on() {
  var e = typeof document < "u" ? document : {};
  return rn(e, Cs), e;
}
var go = {
  document: Cs,
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
function Os() {
  var e = typeof window < "u" ? window : {};
  return rn(e, go), e;
}
function bo(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function zt(e) {
  return zt = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, zt(e);
}
function vt(e, t) {
  return vt = Object.setPrototypeOf || function(s, r) {
    return s.__proto__ = r, s;
  }, vt(e, t);
}
function _o() {
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
function ct(e, t, n) {
  return _o() ? ct = Reflect.construct : ct = function(r, o, a) {
    var i = [null];
    i.push.apply(i, o);
    var l = Function.bind.apply(r, i), u = new l();
    return a && vt(u, a.prototype), u;
  }, ct.apply(null, arguments);
}
function wo(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Wt(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Wt = function(s) {
    if (s === null || !wo(s))
      return s;
    if (typeof s != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(s))
        return t.get(s);
      t.set(s, r);
    }
    function r() {
      return ct(s, arguments, zt(this).constructor);
    }
    return r.prototype = Object.create(s.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), vt(r, s);
  }, Wt(e);
}
function xo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function $o(e) {
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
var De = /* @__PURE__ */ function(e) {
  bo(t, e);
  function t(n) {
    var s;
    return s = e.call.apply(e, [this].concat(n)) || this, $o(xo(s)), s;
  }
  return t;
}(/* @__PURE__ */ Wt(Array));
function an(e) {
  e === void 0 && (e = []);
  var t = [];
  return e.forEach(function(n) {
    Array.isArray(n) ? t.push.apply(t, an(n)) : t.push(n);
  }), t;
}
function Eo(e) {
  for (var t = [], n = 0; n < e.length; n += 1)
    t.indexOf(e[n]) === -1 && t.push(e[n]);
  return t;
}
function ko(e) {
  return e.toLowerCase().replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function So(e, t) {
  if (typeof e != "string")
    return [e];
  for (var n = [], s = t.querySelectorAll(e), r = 0; r < s.length; r += 1)
    n.push(s[r]);
  return n;
}
function j(e, t) {
  var n = Os(), s = on(), r = [];
  if (!t && e instanceof De)
    return e;
  if (!e)
    return new De(r);
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
      r = So(e.trim(), t || s);
  } else if (e.nodeType || e === n || e === s)
    r.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof De)
      return e;
    r = e;
  }
  return new De(Eo(r));
}
j.fn = De.prototype;
function On() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = an(t.map(function(r) {
    return r.split(" ");
  }));
  return this.forEach(function(r) {
    var o;
    (o = r.classList).add.apply(o, s);
  }), this;
}
function Pn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = an(t.map(function(r) {
    return r.split(" ");
  }));
  return this.forEach(function(r) {
    var o;
    (o = r.classList).remove.apply(o, s);
  }), this;
}
function Tn(e, t) {
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
function Rn() {
  var e = this[0];
  if (e) {
    var t = {};
    if (e.dataset)
      for (var n in e.dataset)
        t[n] = e.dataset[n];
    else
      for (var s = 0; s < e.attributes.length; s += 1) {
        var r = e.attributes[s];
        r.name.indexOf("data-") >= 0 && (t[ko(r.name.split("data-")[1])] = r.value);
      }
    for (var o in t)
      t[o] === "false" ? t[o] = !1 : t[o] === "true" ? t[o] = !0 : parseFloat(t[o]) === t[o] * 1 && (t[o] *= 1);
    return t;
  }
}
function Vn(e) {
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
function Nn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = t[0], r = t[1], o = t[2], a = t[3];
  typeof t[1] == "function" && (s = t[0], o = t[1], a = t[2], r = void 0), a || (a = !1);
  function i(d) {
    var w = d.target;
    if (w) {
      var S = d.target.dom7EventData || [];
      if (S.indexOf(d) < 0 && S.unshift(d), j(w).is(r))
        o.apply(w, S);
      else
        for (var V = j(w).parents(), x = 0; x < V.length; x += 1)
          j(V[x]).is(r) && o.apply(V[x], S);
    }
  }
  function l(d) {
    var w = d && d.target ? d.target.dom7EventData || [] : [];
    w.indexOf(d) < 0 && w.unshift(d), o.apply(this, w);
  }
  for (var u = s.split(" "), p, m = 0; m < this.length; m += 1) {
    var c = this[m];
    if (r)
      for (p = 0; p < u.length; p += 1) {
        var f = u[p];
        c.dom7LiveListeners || (c.dom7LiveListeners = {}), c.dom7LiveListeners[f] || (c.dom7LiveListeners[f] = []), c.dom7LiveListeners[f].push({
          listener: o,
          proxyListener: i
        }), c.addEventListener(f, i, a);
      }
    else
      for (p = 0; p < u.length; p += 1) {
        var g = u[p];
        c.dom7Listeners || (c.dom7Listeners = {}), c.dom7Listeners[g] || (c.dom7Listeners[g] = []), c.dom7Listeners[g].push({
          listener: o,
          proxyListener: l
        }), c.addEventListener(g, l, a);
      }
  }
  return this;
}
function In() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var s = t[0], r = t[1], o = t[2], a = t[3];
  typeof t[1] == "function" && (s = t[0], o = t[1], a = t[2], r = void 0), a || (a = !1);
  for (var i = s.split(" "), l = 0; l < i.length; l += 1)
    for (var u = i[l], p = 0; p < this.length; p += 1) {
      var m = this[p], c = void 0;
      if (!r && m.dom7Listeners ? c = m.dom7Listeners[u] : r && m.dom7LiveListeners && (c = m.dom7LiveListeners[u]), c && c.length)
        for (var g = c.length - 1; g >= 0; g -= 1) {
          var f = c[g];
          o && f.listener === o || o && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === o ? (m.removeEventListener(u, f.proxyListener, a), c.splice(g, 1)) : o || (m.removeEventListener(u, f.proxyListener, a), c.splice(g, 1));
        }
    }
  return this;
}
function Dn() {
  for (var e = 0; e < this.length; e += 1)
    this[e].style.display = "none";
  return this;
}
function An(e) {
  return e ? (this.forEach(function(t, n) {
    e.apply(t, [t, n]);
  }), this) : this;
}
function Ln(e) {
  if (typeof e > "u")
    return this[0] ? this[0].innerHTML : null;
  for (var t = 0; t < this.length; t += 1)
    this[t].innerHTML = e;
  return this;
}
function Mn(e) {
  var t = Os(), n = on(), s = this[0], r, o;
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
  if (e.nodeType || e instanceof De) {
    for (r = e.nodeType ? [e] : e, o = 0; o < r.length; o += 1)
      if (r[o] === s)
        return !0;
    return !1;
  }
  return !1;
}
function jn() {
  for (var e, t = on(), n = 0; n < arguments.length; n += 1) {
    e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    for (var s = 0; s < this.length; s += 1)
      if (typeof e == "string") {
        var r = t.createElement("div");
        for (r.innerHTML = e; r.firstChild; )
          this[s].appendChild(r.firstChild);
      } else if (e instanceof De)
        for (var o = 0; o < e.length; o += 1)
          this[s].appendChild(e[o]);
      else
        this[s].appendChild(e);
  }
  return this;
}
function Hn(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var s = this[n].parentNode; s; )
      e ? j(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
  return j(t);
}
function Fn(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var s = this[n].querySelectorAll(e), r = 0; r < s.length; r += 1)
      t.push(s[r]);
  return j(t);
}
function Un(e) {
  for (var t = [], n = 0; n < this.length; n += 1)
    for (var s = this[n].children, r = 0; r < s.length; r += 1)
      (!e || j(s[r]).is(e)) && t.push(s[r]);
  return j(t);
}
var Co = "resize scroll".split(" ");
function Ps(e) {
  function t() {
    for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)
      s[r] = arguments[r];
    if (typeof s[0] > "u") {
      for (var o = 0; o < this.length; o += 1)
        Co.indexOf(e) < 0 && (e in this[o] ? this[o][e]() : j(this[o]).trigger(e));
      return this;
    }
    return this.on.apply(this, [e].concat(s));
  }
  return t;
}
var Bn = Ps("click"), zn = Ps("focus");
Dn && (j.fn.hide = Dn);
jn && (j.fn.append = jn);
Bn && (j.fn.click = Bn);
Nn && (j.fn.on = Nn);
In && (j.fn.off = In);
zn && (j.fn.focus = zn);
Tn && (j.fn.attr = Tn);
Vn && (j.fn.val = Vn);
Ln && (j.fn.html = Ln);
Rn && (j.fn.dataset = Rn);
On && (j.fn.addClass = On);
Pn && (j.fn.removeClass = Pn);
Un && (j.fn.children = Un);
An && (j.fn.each = An);
Fn && (j.fn.find = Fn);
Mn && (j.fn.is = Mn);
Hn && (j.fn.parents = Hn);
class Oo {
  constructor() {
    he(this, "audio");
    he(this, "src");
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
const ht = new Oo();
function Wn(e) {
  const t = Math.floor(e / 60), n = e % 60, s = String(t).padStart(2, "0"), r = String(n).padStart(2, "0");
  return `${s}:${r}`;
}
class Po {
  constructor(t, n) {
    he(this, "id");
    he(this, "accept");
    he(this, "dom");
    he(this, "isdestroy", !1);
    he(this, "resolve");
    he(this, "reject");
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
const To = {
  type: "ssml-audio",
  renderElem: (e, t, n) => {
    const { remark: s, src: r } = e;
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
              click: ue((o) => {
                o.preventDefault(), ht.stop(r);
                const a = I.findPath(n, e);
                Y.delete(n, { at: a });
              })
            }
          }),
          E("span.iconfont.icon-play", {
            on: {
              click: ue((o) => {
                o.preventDefault(), ht.play(r);
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      )
    ]);
  }
}, Ro = {
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
}, Vo = {
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
}, No = {
  editorPlugin: Qr,
  renderElems: [To],
  elemsToHtml: [Ro],
  parseElemsHtml: [Vo]
}, Io = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-break" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-break" ? !0 : n(r), s;
}, Do = {
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
                click: ue((r) => {
                  r.preventDefault();
                  const o = I.findPath(n, e);
                  Y.delete(n, { at: o });
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
}, Ao = {
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
}, Lo = {
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
}, Mo = {
  editorPlugin: Io,
  renderElems: [Do],
  elemsToHtml: [Ao],
  parseElemsHtml: [Lo]
}, jo = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-emphasis" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-emphasis" ? !1 : n(r), s;
}, Ho = {
  type: "ssml-emphasis",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return E("span.ssml-wrapper", [
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
              click: ue((r) => {
                r.preventDefault();
                const o = I.findPath(n, e);
                Y.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      E("span.data-content", {
        attrs: { "data-content": "{{" },
        style: { color: "var(--ssml-emphasis)" }
      }),
      E("span", t),
      E("span.data-content", {
        attrs: { "data-content": "}}" },
        style: { color: "var(--ssml-emphasis)" }
      })
    ]);
  }
}, Fo = {
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
}, Uo = {
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
}, Bo = {
  editorPlugin: jo,
  renderElems: [Ho],
  elemsToHtml: [Fo],
  parseElemsHtml: [Uo]
}, zo = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-mstts:express-as" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-mstts:express-as" ? !1 : n(r), s;
}, Wo = {
  type: "ssml-mstts:express-as",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return E("span.ssml-wrapper", [
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
              click: ue((r) => {
                r.preventDefault();
                const o = I.findPath(n, e);
                Y.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      E("span.data-content", {
        attrs: { "data-content": "{{" },
        style: { color: "var(--ssml-mstts--express-as)" }
      }),
      E("span", t),
      E("span.data-content", {
        attrs: { "data-content": "}}" },
        style: { color: "var(--ssml-mstts--express-as)" }
      })
    ]);
  }
}, Go = {
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
}, Yo = {
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
}, Xo = {
  editorPlugin: zo,
  renderElems: [Wo],
  elemsToHtml: [Go],
  parseElemsHtml: [Yo]
}, qo = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-p" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-p" ? !1 : n(r), s;
}, Ko = {
  type: "ssml-p",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return E("span.ssml-wrapper", [
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
              click: ue((r) => {
                r.preventDefault();
                const o = I.findPath(n, e);
                Y.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      E("span.data-content", {
        attrs: { "data-content": "{{" },
        style: { color: "var(--ssml-p)" }
      }),
      E("span", t),
      E("span.data-content", {
        attrs: { "data-content": "}}" },
        style: { color: "var(--ssml-p)" }
      })
    ]);
  }
}, Jo = {
  type: "ssml-p",
  elemToHtml: (e, t) => {
    const { remark: n } = e;
    return `<span
          data-w-e-type="ssml-p"
          data-w-e-is-inline
          data-ow-remark="${n}"
        >${t}</span>`;
  }
}, Qo = {
  selector: 'span[data-w-e-type="ssml-p"]',
  parseElemHtml: (e, t) => ({
    type: "ssml-p",
    remark: e.getAttribute("data-ow-remark") || "",
    children: t
  })
}, Zo = {
  editorPlugin: qo,
  renderElems: [Ko],
  elemsToHtml: [Jo],
  parseElemsHtml: [Qo]
}, ea = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-phoneme" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-phoneme" ? !1 : n(r), s;
};
function ta(e) {
  const { selection: t } = e;
  if (t) {
    const [n, s] = pe.edges(t), r = G.range(e, n, s), o = G.string(e, r), a = o.trimEnd();
    if (a !== o) {
      const i = o.length - a.length, l = { ...s, offset: s.offset - i }, u = { ...t, anchor: n, focus: l };
      Y.select(e, u);
    }
  }
}
function na(e, t) {
  G.withoutNormalizing(e, () => {
    const n = G.start(e, t), s = G.end(e, t);
    Y.insertText(e, " ", { at: n }), Y.insertText(e, " ", {
      at: { path: s.path, offset: s.offset + 1 }
    }), Y.select(e, {
      anchor: { path: n.path, offset: n.offset + 1 },
      focus: { path: s.path, offset: s.offset + 1 }
    });
  });
}
function rt(e, t) {
  G.withoutNormalizing(e, () => {
    const n = G.before(e, t), s = G.after(e, t);
    if (!n || !s)
      return;
    const r = {
      anchor: { path: n.path, offset: n.offset - 1 },
      focus: { path: n.path, offset: n.offset }
    }, o = {
      anchor: { path: s.path, offset: s.offset },
      focus: { path: s.path, offset: s.offset + 1 }
    };
    G.string(e, r) === " " && Y.delete(e, { at: r }), G.string(e, o) === " " && Y.delete(e, { at: o });
  });
}
const sa = {
  type: "ssml-phoneme",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return E("span.ssml-wrapper", [
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
              click: ue((r) => {
                r.preventDefault();
                const o = I.findPath(n, e);
                rt(n, o), Y.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      E("span.data-content", {
        attrs: { "data-content": "{{" },
        style: { color: "var(--ssml-phoneme)" }
      }),
      E("span", t),
      E("span.data-content", {
        attrs: { "data-content": "}}" },
        style: { color: "var(--ssml-phoneme)" }
      })
    ]);
  }
}, ra = {
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
}, oa = {
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
}, aa = {
  editorPlugin: ea,
  renderElems: [sa],
  elemsToHtml: [ra],
  parseElemsHtml: [oa]
}, ia = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-prosody" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-prosody" ? !1 : n(r), s;
}, la = {
  type: "ssml-prosody",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return E("span.ssml-wrapper", [
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
              click: ue((r) => {
                r.preventDefault();
                const o = I.findPath(n, e);
                rt(n, o), Y.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      E("span.data-content", {
        attrs: { "data-content": "{{" },
        style: { color: "var(--ssml-prosody)" }
      }),
      E("span", t),
      E("span.data-content", {
        attrs: { "data-content": "}}" },
        style: { color: "var(--ssml-prosody)" }
      })
    ]);
  }
}, ua = {
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
}, ca = {
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
}, da = {
  editorPlugin: ia,
  renderElems: [la],
  elemsToHtml: [ua],
  parseElemsHtml: [ca]
}, fa = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-s" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-s" ? !1 : n(r), s;
}, pa = {
  type: "ssml-s",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return E("span.ssml-wrapper", [
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
              click: ue((r) => {
                r.preventDefault();
                const o = I.findPath(n, e);
                Y.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      E("span.data-content", {
        attrs: { "data-content": "{{" },
        style: { color: "var(--ssml-s)" }
      }),
      E("span", t),
      E("span.data-content", {
        attrs: { "data-content": "}}" },
        style: { color: "var(--ssml-s)" }
      })
    ]);
  }
}, ma = {
  type: "ssml-s",
  elemToHtml: (e, t) => {
    const { remark: n } = e;
    return `<span
          data-w-e-type="ssml-s"
          data-w-e-is-inline
          data-ow-remark="${n}"
        >${t}</span>`;
  }
}, va = {
  selector: 'span[data-w-e-type="ssml-s"]',
  parseElemHtml: (e, t) => ({
    type: "ssml-s",
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
  return s.isInline = (r) => I.getNodeType(r) === "ssml-say-as" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-say-as" ? !1 : n(r), s;
}, ga = {
  type: "ssml-say-as",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return E("span.ssml-wrapper", [
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
              click: ue((r) => {
                r.preventDefault();
                const o = I.findPath(n, e);
                rt(n, o), Y.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      E("span.data-content", {
        attrs: { "data-content": "{{" },
        style: { color: "var(--ssml-say-as)" }
      }),
      E("span", t),
      E("span.data-content", {
        attrs: { "data-content": "}}" },
        style: { color: "var(--ssml-say-as)" }
      })
    ]);
  }
}, ba = {
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
}, _a = {
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
}, wa = {
  editorPlugin: ya,
  renderElems: [ga],
  elemsToHtml: [ba],
  parseElemsHtml: [_a]
}, xa = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-sub" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-sub" ? !1 : n(r), s;
}, $a = {
  type: "ssml-sub",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return E("span.ssml-wrapper", [
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
              click: ue((r) => {
                r.preventDefault();
                const o = I.findPath(n, e);
                rt(n, o), Y.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      E("span.data-content", {
        attrs: { "data-content": "{{" },
        style: { color: "var(--ssml-sub)" }
      }),
      E("span", t),
      E("span.data-content", {
        attrs: { "data-content": "}}" },
        style: { color: "var(--ssml-sub)" }
      })
    ]);
  }
}, Ea = {
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
}, ka = {
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
}, Sa = {
  editorPlugin: xa,
  renderElems: [$a],
  elemsToHtml: [Ea],
  parseElemsHtml: [ka]
}, Ca = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "ssml-voice" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "ssml-voice" ? !1 : n(r), s;
}, Oa = {
  type: "ssml-voice",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return E("span.ssml-wrapper", [
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
              click: ue((r) => {
                r.preventDefault();
                const o = I.findPath(n, e);
                Y.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      E("span.data-content", {
        attrs: { "data-content": "{{" },
        style: { color: "var(--ssml-voice)" }
      }),
      E("span", t),
      E("span.data-content", {
        attrs: { "data-content": "}}" },
        style: { color: "var(--ssml-voice)" }
      })
    ]);
  }
}, Pa = {
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
}, Ta = {
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
}, Ra = {
  editorPlugin: Ca,
  renderElems: [Oa],
  elemsToHtml: [Pa],
  parseElemsHtml: [Ta]
}, Va = (e) => {
  const { isInline: t, isVoid: n } = e, s = e;
  return s.isInline = (r) => I.getNodeType(r) === "custom-management" ? !0 : t(r), s.isVoid = (r) => I.getNodeType(r) === "custom-management" ? !1 : n(r), s;
}, Na = {
  type: "custom-management",
  renderElem: (e, t, n) => {
    const { remark: s } = e;
    return E("span.ssml-wrapper", [
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
              click: ue((r) => {
                r.preventDefault();
                const o = I.findPath(n, e);
                rt(n, o), Y.unwrapNodes(n, { at: o });
              })
            }
          }),
          E("span.data-content", { attrs: { "data-content": s } })
        ]
      ),
      E("span.data-content", {
        attrs: { "data-content": "{{" },
        style: { color: "var(--custom-management)" }
      }),
      E("span", t),
      E("span.data-content", {
        attrs: { "data-content": "}}" },
        style: { color: "var(--custom-management)" }
      })
    ]);
  }
}, Ia = {
  type: "custom-management",
  elemToHtml: (e, t) => {
    const { remark: n, style: s, role: r, name: o, pitch: a, rate: i } = e;
    return `<span
          data-w-e-type="custom-management"
          data-w-e-is-inline
          data-ow-remark="${n}"
          data-ow-style="${s}"
          data-ow-name="${o}"
          data-ow-role="${r}"
          data-ow-pitch="${a}"
          data-ow-rate="${i}"
        >${t}</span>`;
  }
}, Da = {
  selector: 'span[data-w-e-type="custom-management"]',
  parseElemHtml: (e, t) => {
    const n = e.getAttribute("data-ow-remark") || "", s = e.getAttribute("data-ow-name") || "", r = e.getAttribute("data-ow-role") || "", o = e.getAttribute("data-ow-style") || "", a = e.getAttribute("data-ow-pitch") || "", i = e.getAttribute("data-ow-rate") || "";
    return {
      type: "custom-management",
      remark: n,
      name: s,
      role: r,
      style: o,
      pitch: a,
      rate: i,
      children: t
    };
  }
}, Aa = {
  editorPlugin: Va,
  renderElems: [Na],
  elemsToHtml: [Ia],
  parseElemsHtml: [Da]
}, La = (e) => {
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
  } = e, p = e;
  p.deleteBackward = (c) => {
    t(c);
  }, p.deleteForward = (c) => {
    n(c);
  }, p.insertBreak = () => {
    s();
  }, p.normalizeNode = (c) => {
    o(c);
  }, p.apply = (c) => {
    r(c);
  }, p.insertData = (c) => (c.types.includes("application/x-slate-fragment") || c.setData("text/html", c.getData("text/plain").trim()), i(c)), p.setFragmentData = (c) => {
    l(c);
    const g = c.getData("text/plain").replaceAll(/[\s]/gi, "");
    c.setData("text/plain", g);
  }, p.insertText = (c) => {
    a(c);
  };
  const m = [
    "ssml-prosody",
    "ssml-sub",
    "custom-management",
    "ssml-phoneme",
    "ssml-say-as"
  ];
  return p.insertNode = (c) => {
    const g = I.getNodeType(c);
    return m.includes(g) ? (e.selection && na(e, e.selection), Y.insertNodes(e, c)) : u(c);
  }, p;
};
const Ma = {
  install() {
    ae.registerModule(No), ae.registerModule(Mo), ae.registerModule(Bo), ae.registerModule(Xo), ae.registerModule(Zo), ae.registerModule(aa), ae.registerModule(da), ae.registerModule(ha), ae.registerModule(wa), ae.registerModule(Sa), ae.registerModule(Ra), ae.registerModule(Aa), ae.registerPlugin(La);
  }
}, Le = nn("--editor-ssml", () => {
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
function He() {
  return { label: "", value: "" };
}
function ja() {
  return {
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
function Ts() {
  return {
    word: "",
    category: "",
    gender: "",
    tag: ""
  };
}
const ln = nn("--editor-try-play", () => {
  const e = Le(), t = b(ja());
  return { speaker: ee(() => t.value), setSpeaker: (r) => {
    t.value = r, e.rootVoice.name = r.value;
  } };
}), Ha = { class: "bar-button-icon" }, Fa = {
  class: "fw-normal",
  style: { "font-size": "0.85rem" }
}, Ua = /* @__PURE__ */ A({
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
    return (r, o) => (P(), D("div", {
      class: _e(["bar-button px-2 py-1", { disabled: r.disabled }]),
      onClick: s,
      onMousedown: o[0] || (o[0] = re(() => {
      }, ["prevent"]))
    }, [
      h("div", Ha, [
        h("span", {
          class: _e(["fs-3 iconfont-moyin", [`moyin-icon_${r.icon}`]])
        }, null, 2)
      ]),
      h("div", Fa, B(r.text), 1)
    ], 34));
  }
});
const ce = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, te = /* @__PURE__ */ ce(Ua, [["__scopeId", "data-v-2da9a7ca"]]);
const un = /* @__PURE__ */ A({
  __name: "bar-input",
  props: {
    type: {}
  },
  emits: ["submit"],
  setup(e, { expose: t, emit: n }) {
    const s = b(""), r = b();
    function o() {
      r.value.focus();
    }
    function a() {
      n("submit", s.value), s.value = "";
    }
    return t({
      focus: o
    }), (i, l) => (P(), J(y(bt), {
      onSubmit: re(a, ["prevent"])
    }, {
      default: T(() => [
        v(y(_t), {
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
const Ba = /* @__PURE__ */ A({
  __name: "bar-popover",
  props: {
    visible: { type: Boolean },
    trigger: {},
    hideAfter: {},
    width: {}
  },
  emits: ["update:visible"],
  setup(e) {
    return (t, n) => (P(), J(y(Se), {
      hideAfter: t.hideAfter,
      width: t.width,
      visible: t.visible,
      trigger: t.trigger,
      "onUpdate:visible": n[0] || (n[0] = (s) => t.$emit("update:visible", s))
    }, {
      reference: T(() => [
        ke(t.$slots, "reference")
      ]),
      default: T(() => [
        ke(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["hideAfter", "width", "visible", "trigger"]));
  }
});
function xt(e) {
  return as() ? (is(e), !0) : !1;
}
function ge(e) {
  return typeof e == "function" ? e() : y(e);
}
const Rs = typeof window < "u", za = (e) => e != null, dt = () => {
};
var Wa = Object.defineProperty, Ga = Object.defineProperties, Ya = Object.getOwnPropertyDescriptors, Gn = Object.getOwnPropertySymbols, Xa = Object.prototype.hasOwnProperty, qa = Object.prototype.propertyIsEnumerable, Yn = (e, t, n) => t in e ? Wa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ka = (e, t) => {
  for (var n in t || (t = {}))
    Xa.call(t, n) && Yn(e, n, t[n]);
  if (Gn)
    for (var n of Gn(t))
      qa.call(t, n) && Yn(e, n, t[n]);
  return e;
}, Ja = (e, t) => Ga(e, Ya(t));
function Qa(e, t = {}) {
  if (!Ge(e))
    return jt(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const s in e.value)
    n[s] = lr(() => ({
      get() {
        return e.value[s];
      },
      set(r) {
        var o;
        if ((o = ge(t.replaceRef)) != null ? o : !0)
          if (Array.isArray(e.value)) {
            const i = [...e.value];
            i[s] = r, e.value = i;
          } else {
            const i = Ja(Ka({}, e.value), { [s]: r });
            Object.setPrototypeOf(i, Object.getPrototypeOf(e.value)), e.value = i;
          }
        else
          e.value[s] = r;
      }
    }));
  return n;
}
function Vs(e, t = !0) {
  qt() ? $e(e) : t ? e() : Mt(e);
}
function be(e) {
  var t;
  const n = ge(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Ve = Rs ? window : void 0;
function We(...e) {
  let t, n, s, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, r] = e, t = Ve) : [t, n, s, r] = e, !t)
    return dt;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const o = [], a = () => {
    o.forEach((p) => p()), o.length = 0;
  }, i = (p, m, c, g) => (p.addEventListener(m, c, g), () => p.removeEventListener(m, c, g)), l = se(
    () => [be(t), ge(r)],
    ([p, m]) => {
      a(), p && o.push(
        ...n.flatMap((c) => s.map((g) => i(p, c, g, m)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    l(), a();
  };
  return xt(u), u;
}
function Za() {
  const e = b(!1);
  return qt() && $e(() => {
    e.value = !0;
  }), e;
}
function cn(e) {
  const t = Za();
  return ee(() => (t.value, !!e()));
}
function ei(e, t = {}) {
  const { window: n = Ve } = t, s = cn(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let r;
  const o = b(!1), a = (u) => {
    o.value = u.matches;
  }, i = () => {
    r && ("removeEventListener" in r ? r.removeEventListener("change", a) : r.removeListener(a));
  }, l = ur(() => {
    s.value && (i(), r = n.matchMedia(ge(e)), "addEventListener" in r ? r.addEventListener("change", a) : r.addListener(a), o.value = r.matches);
  });
  return xt(() => {
    l(), i(), r = void 0;
  }), o;
}
var ti = Object.defineProperty, ni = Object.defineProperties, si = Object.getOwnPropertyDescriptors, Xn = Object.getOwnPropertySymbols, ri = Object.prototype.hasOwnProperty, oi = Object.prototype.propertyIsEnumerable, qn = (e, t, n) => t in e ? ti(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ai = (e, t) => {
  for (var n in t || (t = {}))
    ri.call(t, n) && qn(e, n, t[n]);
  if (Xn)
    for (var n of Xn(t))
      oi.call(t, n) && qn(e, n, t[n]);
  return e;
}, ii = (e, t) => ni(e, si(t));
function dn(e, t = {}) {
  var n, s;
  const {
    pointerTypes: r,
    preventDefault: o,
    stopPropagation: a,
    exact: i,
    onMove: l,
    onEnd: u,
    onStart: p,
    initialValue: m,
    axis: c = "both",
    draggingElement: g = Ve,
    handle: f = e
  } = t, d = b(
    (n = ge(m)) != null ? n : { x: 0, y: 0 }
  ), w = b(), S = ($) => r ? r.includes($.pointerType) : !0, V = ($) => {
    ge(o) && $.preventDefault(), ge(a) && $.stopPropagation();
  }, x = ($) => {
    if (!S($) || ge(i) && $.target !== ge(e))
      return;
    const _ = ge(e).getBoundingClientRect(), M = {
      x: $.clientX - _.left,
      y: $.clientY - _.top
    };
    (p == null ? void 0 : p(M, $)) !== !1 && (w.value = M, V($));
  }, k = ($) => {
    if (!S($) || !w.value)
      return;
    let { x: _, y: M } = d.value;
    (c === "x" || c === "both") && (_ = $.clientX - w.value.x), (c === "y" || c === "both") && (M = $.clientY - w.value.y), d.value = {
      x: _,
      y: M
    }, l == null || l(d.value, $), V($);
  }, R = ($) => {
    S($) && w.value && (w.value = void 0, u == null || u(d.value, $), V($));
  };
  if (Rs) {
    const $ = { capture: (s = t.capture) != null ? s : !0 };
    We(f, "pointerdown", x, $), We(g, "pointermove", k, $), We(g, "pointerup", R, $);
  }
  return ii(ai({}, Qa(d)), {
    position: d,
    isDragging: ee(() => !!w.value),
    style: ee(
      () => `left:${d.value.x}px;top:${d.value.y}px;`
    )
  });
}
var Kn = Object.getOwnPropertySymbols, li = Object.prototype.hasOwnProperty, ui = Object.prototype.propertyIsEnumerable, ci = (e, t) => {
  var n = {};
  for (var s in e)
    li.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && Kn)
    for (var s of Kn(e))
      t.indexOf(s) < 0 && ui.call(e, s) && (n[s] = e[s]);
  return n;
};
function Ns(e, t, n = {}) {
  const s = n, { window: r = Ve } = s, o = ci(s, ["window"]);
  let a;
  const i = cn(() => r && "ResizeObserver" in r), l = () => {
    a && (a.disconnect(), a = void 0);
  }, u = ee(
    () => Array.isArray(e) ? e.map((c) => be(c)) : [be(e)]
  ), p = se(
    u,
    (c) => {
      if (l(), i.value && r) {
        a = new ResizeObserver(t);
        for (const g of c)
          g && a.observe(g, o);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), m = () => {
    l(), p();
  };
  return xt(m), {
    isSupported: i,
    stop: m
  };
}
function ot(e, t = {}) {
  const {
    reset: n = !0,
    windowResize: s = !0,
    windowScroll: r = !0,
    immediate: o = !0
  } = t, a = b(0), i = b(0), l = b(0), u = b(0), p = b(0), m = b(0), c = b(0), g = b(0);
  function f() {
    const d = be(e);
    if (!d) {
      n && (a.value = 0, i.value = 0, l.value = 0, u.value = 0, p.value = 0, m.value = 0, c.value = 0, g.value = 0);
      return;
    }
    const w = d.getBoundingClientRect();
    a.value = w.height, i.value = w.bottom, l.value = w.left, u.value = w.right, p.value = w.top, m.value = w.width, c.value = w.x, g.value = w.y;
  }
  return Ns(e, f), se(() => be(e), (d) => !d && f()), r && We("scroll", f, { capture: !0, passive: !0 }), s && We("resize", f, { passive: !0 }), Vs(() => {
    o && f();
  }), {
    height: a,
    bottom: i,
    left: l,
    right: u,
    top: p,
    width: m,
    x: c,
    y: g,
    update: f
  };
}
function di(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: s = Ve, box: r = "content-box" } = n, o = ee(() => {
    var l, u;
    return (u = (l = be(e)) == null ? void 0 : l.namespaceURI) == null ? void 0 : u.includes("svg");
  }), a = b(t.width), i = b(t.height);
  return Ns(
    e,
    ([l]) => {
      const u = r === "border-box" ? l.borderBoxSize : r === "content-box" ? l.contentBoxSize : l.devicePixelContentBoxSize;
      if (s && o.value) {
        const p = be(e);
        if (p) {
          const m = s.getComputedStyle(p);
          a.value = Number.parseFloat(m.width), i.value = Number.parseFloat(m.height);
        }
      } else if (u) {
        const p = Array.isArray(u) ? u : [u];
        a.value = p.reduce((m, { inlineSize: c }) => m + c, 0), i.value = p.reduce((m, { blockSize: c }) => m + c, 0);
      } else
        a.value = l.contentRect.width, i.value = l.contentRect.height;
    },
    n
  ), se(
    () => be(e),
    (l) => {
      a.value = l ? t.width : 0, i.value = l ? t.height : 0;
    }
  ), {
    width: a,
    height: i
  };
}
function fi(e, t, n = {}) {
  const {
    root: s,
    rootMargin: r = "0px",
    threshold: o = 0.1,
    window: a = Ve,
    immediate: i = !0
  } = n, l = cn(() => a && "IntersectionObserver" in a), u = ee(() => {
    const f = ge(e);
    return (Array.isArray(f) ? f : [f]).map(be).filter(za);
  });
  let p = dt;
  const m = b(i), c = l.value ? se(
    () => [u.value, be(s), m.value],
    ([f, d]) => {
      if (p(), !m.value || !f.length)
        return;
      const w = new IntersectionObserver(
        t,
        {
          root: be(d),
          rootMargin: r,
          threshold: o
        }
      );
      f.forEach((S) => S && w.observe(S)), p = () => {
        w.disconnect(), p = dt;
      };
    },
    { immediate: i, flush: "post" }
  ) : dt, g = () => {
    p(), c(), m.value = !1;
  };
  return xt(g), {
    isSupported: l,
    isActive: m,
    pause() {
      p(), m.value = !1;
    },
    resume() {
      m.value = !0;
    },
    stop: g
  };
}
function Is(e, { window: t = Ve, scrollTarget: n } = {}) {
  const s = b(!1);
  return fi(
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
function pi(e = {}) {
  const {
    window: t = Ve,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: s = Number.POSITIVE_INFINITY,
    listenOrientation: r = !0,
    includeScrollbar: o = !0
  } = e, a = b(n), i = b(s), l = () => {
    t && (o ? (a.value = t.innerWidth, i.value = t.innerHeight) : (a.value = t.document.documentElement.clientWidth, i.value = t.document.documentElement.clientHeight));
  };
  if (l(), Vs(l), We("resize", l, { passive: !0 }), r) {
    const u = ei("(orientation: portrait)");
    se(u, () => l());
  }
  return { width: a, height: i };
}
const mi = { class: "search-content w-100" }, vi = { class: "ps-2 w-75" }, hi = { class: "menu ps-2" }, yi = { class: "flex flex-row pt-1" }, gi = {
  class: "content-list overflow-x-hidden overflow-y-auto py-2",
  style: { height: "250px" }
}, bi = ["onClick"], _i = /* @__PURE__ */ h("span", { class: "iconfont icon-play" }, null, -1), wi = { class: "ps-2" }, fn = /* @__PURE__ */ A({
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
    const n = e, s = b(), r = b(""), o = b(""), a = b(""), i = b(""), l = b(n.dataList || []), u = b(n.sceneList || []), p = b(n.styleList || []), m = Is(s);
    se(m, (d) => {
      d && setTimeout(() => {
        var w;
        (w = s.value) == null || w.focus();
      }, 100);
    }), $e(async () => {
      l.value.length || await c(), u.value.length || (u.value = await n.fetchScene()), p.value.length || (p.value = await n.fetchStyle());
    });
    async function c() {
      l.value = await n.fetchData({
        word: r.value,
        menu: i.value,
        scene: o.value,
        style: a.value
      });
    }
    function g(d) {
      i.value = d, c();
    }
    function f(d) {
      t("submit", d);
    }
    return (d, w) => (P(), D("div", mi, [
      h("div", vi, [
        v(y(bt), {
          onSubmit: re(c, ["prevent"])
        }, {
          default: T(() => [
            v(y(_t), {
              ref_key: "searchInputRef",
              ref: s,
              placeholder: "搜索",
              modelValue: r.value,
              "onUpdate:modelValue": w[0] || (w[0] = (S) => r.value = S),
              "suffix-icon": y(hr)
            }, null, 8, ["modelValue", "suffix-icon"])
          ]),
          _: 1
        }, 8, ["onSubmit"])
      ]),
      h("div", hi, [
        v(y(pr), {
          mode: "horizontal",
          "default-active": d.menus.length > 0 ? d.menus[0].value : "",
          onSelect: w[1] || (w[1] = (S) => g(S))
        }, {
          default: T(() => [
            (P(!0), D(Q, null, le(d.menus, (S, V) => (P(), J(y(mr), {
              index: S.value,
              key: V
            }, {
              default: T(() => [
                U(B(S.label), 1)
              ]),
              _: 2
            }, 1032, ["index"]))), 128))
          ]),
          _: 1
        }, 8, ["default-active"])
      ]),
      h("div", yi, [
        v(y(hn), {
          modelValue: o.value,
          "onUpdate:modelValue": w[2] || (w[2] = (S) => o.value = S),
          onChange: c,
          class: "m-1",
          size: "default"
        }, {
          default: T(() => [
            (P(!0), D(Q, null, le(u.value, (S) => (P(), J(y(yn), {
              key: S.value,
              label: S.label,
              value: S.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        v(y(hn), {
          modelValue: a.value,
          "onUpdate:modelValue": w[3] || (w[3] = (S) => a.value = S),
          onChange: c,
          class: "m-1",
          size: "default"
        }, {
          default: T(() => [
            (P(!0), D(Q, null, le(p.value, (S) => (P(), J(y(yn), {
              key: S.value,
              label: S.label,
              value: S.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      h("ul", gi, [
        (P(!0), D(Q, null, le(l.value, (S, V) => (P(), D("li", {
          onClick: (x) => f(oe(S)),
          class: "content-list-item clickable ps-2 py-2",
          key: V
        }, [
          _i,
          h("span", wi, B(S.label), 1)
        ], 8, bi))), 128))
      ])
    ]));
  }
});
const xi = {}, $i = { class: "content" };
function Ei(e, t) {
  return P(), D("div", $i, [
    ke(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Ds = /* @__PURE__ */ ce(xi, [["render", Ei], ["__scopeId", "data-v-7beae5b9"]]), ki = {}, Si = { class: "bar-wrapper-item" };
function Ci(e, t) {
  return P(), D("div", Si, [
    ke(e.$slots, "default")
  ]);
}
const Oi = /* @__PURE__ */ ce(ki, [["render", Ci]]), Pi = { class: "bar-wrapper-group" }, Ti = { class: "group-items" }, Ri = /* @__PURE__ */ A({
  __name: "bar-wrapper-group",
  props: {
    divider: {}
  },
  setup(e) {
    return (t, n) => (P(), D("div", Pi, [
      h("div", Ti, [
        ke(t.$slots, "default", {}, void 0, !0)
      ]),
      h("div", {
        class: _e(["divider", [t.divider]])
      }, null, 2)
    ]));
  }
});
const Ue = /* @__PURE__ */ ce(Ri, [["__scopeId", "data-v-be31f837"]]);
function Vi(e, t) {
  return `left:${e}px;top:${t}px`;
}
function pn(e, t) {
  const { width: n, height: s } = di(e), { width: r, height: o } = pi(), a = ee(() => ({
    x: r.value - n.value,
    y: o.value - s.value
  }));
  return { style: ee(() => {
    const l = t.value.x, u = t.value.y, p = l < 5 ? 5 : l > a.value.x ? a.value.x - 5 : l, m = u < 5 ? 5 : u > a.value.y ? a.value.y - 5 : u;
    return Vi(p, m);
  }) };
}
var Gt = { exports: {} }, As = { exports: {} }, Ni = void 0, Ls = function(e) {
  return e !== Ni && e !== null;
}, Ii = Ls, Di = {
  object: !0,
  function: !0,
  undefined: !0
  /* document.all */
}, Ai = function(e) {
  return Ii(e) ? hasOwnProperty.call(Di, typeof e) : !1;
}, Li = Ai, Mi = function(e) {
  if (!Li(e))
    return !1;
  try {
    return e.constructor ? e.constructor.prototype === e : !1;
  } catch {
    return !1;
  }
}, ji = Mi, Hi = function(e) {
  if (typeof e != "function" || !hasOwnProperty.call(e, "length"))
    return !1;
  try {
    if (typeof e.length != "number" || typeof e.call != "function" || typeof e.apply != "function")
      return !1;
  } catch {
    return !1;
  }
  return !ji(e);
}, Fi = Hi, Ui = /^\s*class[\s{/}]/, Bi = Function.prototype.toString, zi = function(e) {
  return !(!Fi(e) || Ui.test(Bi.call(e)));
}, Wi = function() {
  var e = Object.assign, t;
  return typeof e != "function" ? !1 : (t = { foo: "raz" }, e(t, { bar: "dwa" }, { trzy: "trzy" }), t.foo + t.bar + t.trzy === "razdwatrzy");
}, Pt, Jn;
function Gi() {
  return Jn || (Jn = 1, Pt = function() {
    try {
      return Object.keys("primitive"), !0;
    } catch {
      return !1;
    }
  }), Pt;
}
var Yi = function() {
}, Xi = Yi(), mn = function(e) {
  return e !== Xi && e !== null;
}, Tt, Qn;
function qi() {
  if (Qn)
    return Tt;
  Qn = 1;
  var e = mn, t = Object.keys;
  return Tt = function(n) {
    return t(e(n) ? Object(n) : n);
  }, Tt;
}
var Rt, Zn;
function Ki() {
  return Zn || (Zn = 1, Rt = Gi()() ? Object.keys : qi()), Rt;
}
var Vt, es;
function Ji() {
  if (es)
    return Vt;
  es = 1;
  var e = mn;
  return Vt = function(t) {
    if (!e(t))
      throw new TypeError("Cannot use null or undefined");
    return t;
  }, Vt;
}
var Nt, ts;
function Qi() {
  if (ts)
    return Nt;
  ts = 1;
  var e = Ki(), t = Ji(), n = Math.max;
  return Nt = function(s, r) {
    var o, a, i = n(arguments.length, 2), l;
    for (s = Object(t(s)), l = function(u) {
      try {
        s[u] = r[u];
      } catch (p) {
        o || (o = p);
      }
    }, a = 1; a < i; ++a)
      r = arguments[a], e(r).forEach(l);
    if (o !== void 0)
      throw o;
    return s;
  }, Nt;
}
var Zi = Wi() ? Object.assign : Qi(), el = mn, tl = Array.prototype.forEach, nl = Object.create, sl = function(e, t) {
  var n;
  for (n in e)
    t[n] = e[n];
}, rl = function(e) {
  var t = nl(null);
  return tl.call(arguments, function(n) {
    el(n) && sl(Object(n), t);
  }), t;
}, It = "razdwatrzy", ol = function() {
  return typeof It.contains != "function" ? !1 : It.contains("dwa") === !0 && It.contains("foo") === !1;
}, Dt, ns;
function al() {
  if (ns)
    return Dt;
  ns = 1;
  var e = String.prototype.indexOf;
  return Dt = function(t) {
    return e.call(this, t, arguments[1]) > -1;
  }, Dt;
}
var il = ol() ? String.prototype.contains : al(), ft = Ls, ss = zi, Ms = Zi, js = rl, et = il, ll = As.exports = function(e, t) {
  var n, s, r, o, a;
  return arguments.length < 2 || typeof e != "string" ? (o = t, t = e, e = null) : o = arguments[2], ft(e) ? (n = et.call(e, "c"), s = et.call(e, "e"), r = et.call(e, "w")) : (n = r = !0, s = !1), a = { value: t, configurable: n, enumerable: s, writable: r }, o ? Ms(js(o), a) : a;
};
ll.gs = function(e, t, n) {
  var s, r, o, a;
  return typeof e != "string" ? (o = n, n = t, t = e, e = null) : o = arguments[3], ft(t) ? ss(t) ? ft(n) ? ss(n) || (o = n, n = void 0) : n = void 0 : (o = t, t = n = void 0) : t = void 0, ft(e) ? (s = et.call(e, "c"), r = et.call(e, "e")) : (s = !0, r = !1), a = { get: t, set: n, configurable: s, enumerable: r }, o ? Ms(js(o), a) : a;
};
var ul = As.exports, cl = function(e) {
  if (typeof e != "function")
    throw new TypeError(e + " is not a function");
  return e;
};
(function(e, t) {
  var n = ul, s = cl, r = Function.prototype.apply, o = Function.prototype.call, a = Object.create, i = Object.defineProperty, l = Object.defineProperties, u = Object.prototype.hasOwnProperty, p = { configurable: !0, enumerable: !1, writable: !0 }, m, c, g, f, d, w, S;
  m = function(V, x) {
    var k;
    return s(x), u.call(this, "__ee__") ? k = this.__ee__ : (k = p.value = a(null), i(this, "__ee__", p), p.value = null), k[V] ? typeof k[V] == "object" ? k[V].push(x) : k[V] = [k[V], x] : k[V] = x, this;
  }, c = function(V, x) {
    var k, R;
    return s(x), R = this, m.call(this, V, k = function() {
      g.call(R, V, k), r.call(x, this, arguments);
    }), k.__eeOnceListener__ = x, this;
  }, g = function(V, x) {
    var k, R, $, _;
    if (s(x), !u.call(this, "__ee__"))
      return this;
    if (k = this.__ee__, !k[V])
      return this;
    if (R = k[V], typeof R == "object")
      for (_ = 0; $ = R[_]; ++_)
        ($ === x || $.__eeOnceListener__ === x) && (R.length === 2 ? k[V] = R[_ ? 0 : 1] : R.splice(_, 1));
    else
      (R === x || R.__eeOnceListener__ === x) && delete k[V];
    return this;
  }, f = function(V) {
    var x, k, R, $, _;
    if (u.call(this, "__ee__") && ($ = this.__ee__[V], !!$))
      if (typeof $ == "object") {
        for (k = arguments.length, _ = new Array(k - 1), x = 1; x < k; ++x)
          _[x - 1] = arguments[x];
        for ($ = $.slice(), x = 0; R = $[x]; ++x)
          r.call(R, this, _);
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
            for (k = arguments.length, _ = new Array(k - 1), x = 1; x < k; ++x)
              _[x - 1] = arguments[x];
            r.call($, this, _);
        }
  }, d = {
    on: m,
    once: c,
    off: g,
    emit: f
  }, w = {
    on: n(m),
    once: n(c),
    off: n(g),
    emit: n(f)
  }, S = l({}, w), e.exports = t = function(V) {
    return V == null ? a(S) : l(Object(V), w);
  }, t.methods = d;
})(Gt, Gt.exports);
var dl = Gt.exports;
const fl = /* @__PURE__ */ sn(dl), Ye = fl(), pl = "wangeditor-error", W = {
  ERROR: pl
}, ml = "emitter-error", vl = "emitter-view-click", hl = "emitter-view-keydown", Xe = { ERROR: ml, VIEW_CLICK: vl, VIEW_KEYDOWN: hl }, yl = { class: "w-100 d-flex flex-row align-items-center" }, qe = /* @__PURE__ */ A({
  __name: "drag-box",
  props: {
    visible: { type: Boolean },
    initialValue: {}
  },
  emits: ["update:visible", "close"],
  setup(e, { expose: t, emit: n }) {
    const s = e, r = b(), o = b(), a = b(), { position: i } = dn(o, {
      initialValue: s.initialValue
    }), { style: l } = pn(r, i);
    function u(f) {
      i.value = f;
    }
    t({
      setPosition: u
    }), $e(() => {
      Ye.on(Xe.VIEW_CLICK, p), document.addEventListener("keydown", g);
    }), Jt(() => {
      Ye.off(Xe.VIEW_CLICK, p), document.removeEventListener("keydown", g);
    });
    function p(f) {
      m(f) && c();
    }
    function m(f) {
      const d = f.target;
      return !(!r.value || !a.value || a.value.contains(d) || r.value.contains(d));
    }
    function c() {
      n("update:visible", !1), n("close");
    }
    function g(f) {
      f.code === "Escape" && c();
    }
    return (f, d) => (P(), D(Q, null, [
      h("div", {
        ref_key: "referenceRef",
        ref: a,
        onMousedown: d[0] || (d[0] = re(() => {
        }, ["prevent"]))
      }, [
        ke(f.$slots, "reference")
      ], 544),
      (P(), J(ls, { to: "body" }, [
        Te(h("div", {
          ref_key: "boxRef",
          ref: r,
          class: "demotestname card shadow brag-box user-select-none",
          style: yt([{ position: "fixed" }, y(l)]),
          onMousedown: d[1] || (d[1] = re(() => {
          }, ["prevent"]))
        }, [
          h("div", yl, [
            h("div", {
              ref_key: "dragRef",
              ref: o,
              class: "w-100",
              style: { height: "40px", cursor: "move" }
            }, null, 512),
            h("span", {
              onClick: c,
              class: "btn iconfont icon-close fs-5"
            })
          ]),
          ke(f.$slots, "default")
        ], 36), [
          [Re, f.visible]
        ])
      ]))
    ], 64));
  }
}), gl = {
  install(e) {
    e.component("BarButton", te), e.component("BarInput", un), e.component("BarPopover", Ba), e.component("BarSearch", fn), e.component("BarWrapper", Ds), e.component("BarWrapperItem", Oi), e.component("BarWrapperGroup", Ue), e.component("DragBox", qe);
  }
};
class we {
  constructor(t) {
    he(this, "editor");
    this.editor = t;
  }
  getValue() {
    const { selection: t } = this.editor;
    return t == null ? "" : G.string(this.editor, t);
  }
  isDisabled() {
    const { selection: t } = this.editor;
    return t == null ? (this.editor.emit(W.ERROR, "未选中编辑器"), !0) : !1;
  }
}
class bl extends we {
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
const Hs = /* @__PURE__ */ A({
  setup() {
    const {
      globalEditConfig: e
    } = me(), t = X(), n = b([]), s = b(!1);
    function r() {
      s.value || (s.value = !0);
    }
    function o() {
      s.value && (s.value = !1);
    }
    async function a(i) {
      var u;
      if (t.value ?? (t.value = new bl(i)), (u = t.value) != null && u.isDisabled())
        return;
      const l = t.value.getValue();
      if (l ? n.value = await e.pinyin.fetchData(l) : n.value = [], n.value.length == 0)
        return i.emit(W.ERROR, "选中的字符没有不是多音字");
      r();
    }
    return () => v(Se, {
      visible: s.value,
      "onUpdate:visible": (i) => s.value = i,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => v(te, {
        text: "多音字",
        icon: "speaker",
        onClick: a
      }, null),
      default: () => v("div", {
        class: "d-flex flex-column overflow-x-hidden overflow-y-auto",
        style: "max-height: 300px"
      }, [n.value.map(({
        label: i,
        value: l
      }) => v("div", {
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
class _l extends we {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t ? pe.isCollapsed(t) ? (this.editor.emit(W.ERROR, "请选择多个中文字符或者多个多个英文单词"), !0) : G.string(this.editor, t).length < 2 : !0;
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
const Fs = /* @__PURE__ */ A({
  setup() {
    const e = X();
    function t(n) {
      e.value ?? (e.value = new _l(n)), !e.value.isDisabled() && e.value.exec();
    }
    return () => v(te, {
      text: "连读",
      icon: "continuous",
      onClick: t
    }, null);
  }
}), wl = [
  { label: "重音", value: "z" },
  { label: "拖音", value: "t" },
  { label: "重音+拖音", value: "z+t" }
], xl = {
  z: { pitch: "x-high", rate: void 0 },
  t: { pitch: void 0, rate: "medium" },
  "z+t": { pitch: "x-high", rate: "medium" }
};
class $l extends we {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return !t || t == null ? !0 : pe.isCollapsed(t) ? (this.editor.emit(W.ERROR, "请先选择文本"), !0) : !1;
  }
  exec(t) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const n = this.getValue();
    if (n == null)
      return;
    const { pitch: s, rate: r } = xl[t.value], o = {
      type: "ssml-prosody",
      remark: t.label,
      pitch: s,
      rate: r,
      children: [{ text: n }]
    };
    this.editor.insertNode(o);
  }
}
const Us = /* @__PURE__ */ A({
  setup() {
    const e = X(), t = b(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    function r(o) {
      e.value ?? (e.value = new $l(o)), !e.value.isDisabled() && n();
    }
    return () => v(Se, {
      visible: t.value,
      "onUpdate:visible": (o) => t.value = o,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => v(te, {
        text: "重音",
        icon: "read",
        onClick: r
      }, null),
      default: () => v("div", {
        class: "d-flex flex-column",
        onMousedown: re(() => {
        }, ["stop", "prevent"])
      }, [wl.map(({
        label: o,
        value: a
      }) => v("div", {
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
class El extends we {
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
      return this.editor.emit(W.ERROR, "请选择纯数字"), !0;
    const n = G.string(this.editor, t);
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
const kl = [{
  value: "cardinal",
  label: "读数值"
}, {
  value: "characters",
  label: "读数字"
}, {
  value: "telephone",
  label: "读手机号"
}], Bs = /* @__PURE__ */ A({
  setup() {
    const e = X(), t = b(!1);
    function n() {
      t.value = !t.value;
    }
    function s(r) {
      e.value ?? (e.value = new El(r)), !e.value.isDisabled() && n();
    }
    return () => v(Se, {
      visible: t.value,
      "onUpdate:visible": (r) => t.value = r,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => v(te, {
        text: "数字符号",
        icon: "digital",
        onClick: s
      }, null),
      default: () => v("div", {
        class: "d-flex flex-column"
      }, [kl.map(({
        label: r,
        value: o
      }) => v("div", {
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
class Sl extends we {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t == null ? !0 : pe.isCollapsed(t) ? (this.editor.emit(W.ERROR, "选中一个中文字符，并且有不能在其他语句之内"), !0) : this.getValue().length <= 0;
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
const zs = /* @__PURE__ */ A({
  setup() {
    const e = X(), t = b(), n = b(!1);
    function s() {
      n.value || (n.value = !0);
    }
    function r() {
      n.value && (n.value = !1);
    }
    async function o(i) {
      e.value ?? (e.value = new Sl(i)), !e.value.isDisabled() && (s(), t.value.focus());
    }
    function a(i) {
      var l;
      r(), i && ((l = e.value) == null || l.exec({
        value: i,
        label: i
      }));
    }
    return () => v(Se, {
      visible: n.value,
      "onUpdate:visible": (i) => n.value = i,
      trigger: "contextmenu",
      placement: "right-end",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => v(te, {
        text: "别名",
        icon: "alias",
        onClick: o
      }, null),
      default: () => v(un, {
        ref: t,
        onSubmit: a
      }, null)
    });
  }
});
class Cl extends we {
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
      return this.editor.emit(W.ERROR, "请选择英文单词"), !0;
    const n = G.string(this.editor, t);
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
const Ws = /* @__PURE__ */ A({
  setup() {
    const {
      globalEditConfig: e
    } = me(), t = X(), n = b([]), s = b(!1);
    function r() {
      s.value || (s.value = !0);
    }
    function o() {
      s.value && (s.value = !1);
    }
    async function a(i) {
      if (t.value ?? (t.value = new Cl(i)), ta(i), t.value.isDisabled())
        return;
      const l = t.value.getValue();
      if (l) {
        if (n.value = await e.english.fetchData(l), n.value.length <= 0)
          return i.emit(W.ERROR, "找不到单词的音标");
        r();
      }
    }
    return () => v(Se, {
      visible: s.value,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => v(te, {
        text: "音标",
        icon: "english",
        onClick: a
      }, null),
      default: () => v("div", {
        class: "d-flex flex-column"
      }, [n.value.map(({
        label: i,
        value: l
      }) => v("div", {
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
class Ol extends we {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t == null ? !0 : pe.isCollapsed(t) ? (this.editor.emit(W.ERROR, "请框选要变速的句子"), !0) : !1;
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
function L(e) {
  return `${((e - 1) * 100).toFixed(0)}%`;
}
const Pl = [
  { value: L(0.5), label: "0.5x" },
  { value: L(0.55), label: "0.55x" },
  { value: L(0.6), label: "0.6x" },
  { value: L(0.65), label: "0.65x" },
  { value: L(0.7), label: "0.7x" },
  { value: L(0.75), label: "0.75x" },
  { value: L(0.8), label: "0.8x" },
  { value: L(0.85), label: "0.85x" },
  { value: L(0.9), label: "0.9x" },
  { value: L(0.95), label: "0.95x" },
  { value: L(1), label: "1x" },
  { value: L(1.05), label: "1.05x" },
  { value: L(1.1), label: "1.1x" },
  { value: L(1.15), label: "1.15x" },
  { value: L(1.2), label: "1.2x" },
  { value: L(1.25), label: "1.25x" },
  { value: L(1.3), label: "1.3x" },
  { value: L(1.35), label: "1.35x" },
  { value: L(1.4), label: "1.4x" },
  { value: L(1.45), label: "1.45x" },
  { value: L(1.5), label: "1.5x" },
  { value: L(1.55), label: "1.55x" },
  { value: L(1.6), label: "1.6x" },
  { value: L(1.65), label: "1.65x" },
  { value: L(1.7), label: "1.7x" },
  { value: L(1.75), label: "1.75x" },
  { value: L(1.8), label: "1.8x" },
  { value: L(1.85), label: "1.85x" },
  { value: L(1.9), label: "1.9x" },
  { value: L(1.95), label: "1.95x" },
  { value: L(2), label: "2x" }
], Gs = /* @__PURE__ */ A({
  setup() {
    const e = X(), t = b(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    async function r(o) {
      e.value ?? (e.value = new Ol(o)), !e.value.isDisabled() && n();
    }
    return () => v(Se, {
      style: {
        padding: "0px"
      },
      visible: t.value,
      "onUpdate:visible": (o) => t.value = o,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => v(te, {
        text: "局部变速",
        icon: "changespeed",
        onClick: r
      }, null),
      default: () => v("div", {
        class: "d-flex flex-column overflow-x-hidden overflow-y-scroll",
        style: "height:15rem"
      }, [Pl.map(({
        label: o,
        value: a
      }) => v("div", {
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
class Tl extends we {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t ? pe.isExpanded(t) ? (this.editor.emit(W.ERROR, "不能选中文本"), !0) : !1 : !0;
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
const Rl = [{
  value: "weak",
  label: "短"
}, {
  value: "medium",
  label: "中"
}, {
  value: "strong",
  label: "长"
}], Ys = /* @__PURE__ */ A({
  setup() {
    const e = X(), t = b(!1);
    function n() {
      t.value || (t.value = !0);
    }
    function s() {
      t.value && (t.value = !1);
    }
    function r(o) {
      e.value ?? (e.value = new Tl(o)), !e.value.isDisabled() && n();
    }
    return () => v(Se, {
      visible: t.value,
      "onUpdate:visible": (o) => t.value = o,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => v(te, {
        text: "停顿调节",
        icon: "rhythm",
        onClick: r
      }, null),
      default: () => v("div", {
        class: "d-flex flex-column"
      }, [Rl.map(({
        label: o,
        value: a
      }) => v("div", {
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
class Vl extends we {
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
    return t ? pe.isExpanded(t) ? (this.editor.emit(W.ERROR, "不能框选文字"), !0) : !1 : !0;
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
const Xs = /* @__PURE__ */ A({
  __name: "special-menu",
  setup(e) {
    const t = b(), n = b(), s = X(), { globalEditConfig: r } = me(), { special: o } = r, a = b(!1), { x: i, y: l, height: u } = ot(n), p = (c) => {
      s.value ?? (s.value = new Vl(c)), !s.value.isDisabled() && (t.value.setPosition({
        x: i.value - 200,
        y: l.value + u.value
      }), a.value = !0);
    };
    function m(c) {
      var g;
      (g = s.value) == null || g.restoreSelection(), s.value && !s.value.isDisabled() && s.value.exec(c), a.value = !1;
    }
    return (c, g) => (P(), J(y(qe), {
      ref_key: "dragRef",
      ref: t,
      visible: a.value,
      "onUpdate:visible": g[0] || (g[0] = (f) => a.value = f)
    }, {
      reference: T(() => [
        v(y(te), {
          ref_key: "menuRef",
          ref: n,
          text: "音效",
          icon: "special",
          onClick: p
        }, null, 512)
      ]),
      default: T(() => [
        v(y(fn), {
          menus: y(o).menus,
          fetchScene: y(o).fetchScene,
          fetchStyle: y(o).fetchStyle,
          fetchData: y(o).fetchData,
          onSubmit: m
        }, null, 8, ["menus", "fetchScene", "fetchStyle", "fetchData"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
class Nl extends we {
  constructor(t) {
    super(t);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: t } = this.editor;
    return t ? pe.isExpanded(t) ? (this.editor.emit(W.ERROR, "不能选中文本"), !0) : !1 : !0;
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
const Il = [{
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
}], qs = /* @__PURE__ */ A({
  setup() {
    const e = X(), t = b(!1), n = b();
    function s() {
      t.value || (t.value = !0);
    }
    function r() {
      t.value && (t.value = !1);
    }
    function o(i) {
      e.value ?? (e.value = new Nl(i)), !e.value.isDisabled() && (s(), n.value.focus());
    }
    function a(i) {
      var l;
      r(), i && ((l = e.value) == null || l.exec({
        value: i,
        label: i
      }));
    }
    return () => v(Se, {
      visible: t.value,
      "onUpdate:visible": (i) => t.value = i,
      trigger: "contextmenu",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => v(te, {
        text: "插入静音",
        icon: "mute",
        onClick: o
      }, null),
      default: () => v("div", {
        class: "d-flex flex-column"
      }, [Il.map(({
        value: i,
        label: l
      }) => v("div", {
        key: i,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => a(i),
        onMousedown: re(() => {
        }, ["stop", "prevent"])
      }, [l])), v(un, {
        type: "text",
        ref: n,
        onSubmit: a
      }, null)])
    });
  }
}), Ks = /* @__PURE__ */ A({
  __name: "bgm-menu",
  setup(e) {
    const t = b(), n = b(), s = X(), { globalEditConfig: r } = me(), { bgm: o } = r, a = b(!1), { x: i, y: l, height: u } = ot(n), p = async (c) => {
      const g = {
        x: i.value - 300,
        y: l.value + u.value
      };
      s.value = c, t.value.setPosition(g), a.value = !0;
    };
    function m(c) {
      const { rootBackgroundaudio: g } = Le();
      g.src = c.value, g.remark = c.label, a.value = !1;
    }
    return (c, g) => (P(), J(y(qe), {
      ref_key: "dragRef",
      ref: t,
      visible: a.value,
      "onUpdate:visible": g[0] || (g[0] = (f) => a.value = f)
    }, {
      reference: T(() => [
        v(y(te), {
          ref_key: "menuRef",
          ref: n,
          text: "配乐",
          icon: "bgm",
          onClick: p
        }, null, 512)
      ]),
      default: T(() => [
        v(y(fn), {
          menus: y(o).menus,
          fetchScene: y(o).fetchScene,
          fetchStyle: y(o).fetchStyle,
          fetchData: y(o).fetchData,
          onSubmit: m
        }, null, 8, ["menus", "fetchScene", "fetchStyle", "fetchData"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Js = /* @__PURE__ */ A({
  __name: "sensitive-menu",
  setup(e) {
    const t = b(), n = b(), s = X(), r = b(!1), { x: o, y: a, height: i } = ot(n), l = (u) => {
      s.value = u, t.value.setPosition({
        x: o.value - 200,
        y: a.value + i.value
      }), r.value = !0;
    };
    return (u, p) => (P(), J(y(qe), {
      ref_key: "dragRef",
      ref: t,
      visible: r.value,
      "onUpdate:visible": p[0] || (p[0] = (m) => r.value = m)
    }, {
      reference: T(() => [
        v(y(te), {
          ref_key: "menuRef",
          ref: n,
          text: "敏感词",
          icon: "sensitive",
          onClick: l
        }, null, 512)
      ]),
      default: T(() => [
        v(Js)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
const Dl = {
  class: "select-list",
  style: { width: "120px" }
}, Al = {
  class: "text-center d-flex flex-column justify-content-center fs-6",
  style: { height: "60px" }
}, Ll = ["onClick"], Ml = /* @__PURE__ */ A({
  __name: "select-list",
  props: {
    modelValue: {},
    dataList: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: n }) {
    const s = e, r = b();
    function o(i) {
      n("update:modelValue", oe(i));
    }
    function a() {
      var i;
      if (r.value) {
        for (let l = 0; l < s.dataList.length; l++)
          if (s.dataList[l].value === s.modelValue.value) {
            (i = r.value.children[l]) == null || i.scrollIntoView({ behavior: "smooth" });
            return;
          }
      }
    }
    return t({
      scrollIntoViewTheItem: a
    }), (i, l) => (P(), D("div", Dl, [
      h("div", Al, [
        ke(i.$slots, "default", {}, void 0, !0)
      ]),
      h("ul", {
        ref_key: "listRef",
        ref: r,
        class: "text-center w-100 border-start border-top border-bottom border-secondary-subtle overflow-y-auto overflow-x-hidden scrollbar-none",
        style: { height: "180px" }
      }, [
        (P(!0), D(Q, null, le(i.dataList, (u, p) => (P(), D("li", {
          class: _e(["clickable select-item py-1", { activate: u.value === i.modelValue.value }]),
          key: p,
          onClick: (m) => o(u)
        }, B(u.label), 11, Ll))), 128))
      ], 512)
    ]));
  }
});
const Fe = /* @__PURE__ */ ce(Ml, [["__scopeId", "data-v-657a8ff9"]]), jl = () => [
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
], Hl = () => [
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
function Fl(e) {
  return `${(0.05 * e * 100).toFixed(0)}%`;
}
function Ul(e) {
  return `${((e - 1) * 100).toFixed(0)}%`;
}
const Bl = {
  style: { width: "600px", height: "360px" },
  class: "position-relative px-2 pb-2"
}, zl = { class: "position-relative" }, Wl = { class: "position-absolute top-0 end-0" }, Gl = /* @__PURE__ */ h("li", null, [
  /* @__PURE__ */ h("span", { class: "text-nowrap" }, "近期使用:")
], -1), Yl = /* @__PURE__ */ h("span", { class: "my-3" }, "类型", -1), Xl = /* @__PURE__ */ h("span", { class: "my-3" }, "配音师", -1), ql = /* @__PURE__ */ h("span", { class: "my-3" }, "角色", -1), Kl = /* @__PURE__ */ h("span", { class: "my-3" }, "风格", -1), Jl = /* @__PURE__ */ h("span", { class: "my-3" }, "语速", -1), Ql = /* @__PURE__ */ h("span", { class: "my-3" }, "语调", -1), Zl = { class: "position-absolute bottom-0 end-0 d-flex flex-row justify-content-end me-4 mb-3" }, eu = /* @__PURE__ */ A({
  __name: "management-content",
  emits: ["submit"],
  setup(e, { emit: t }) {
    const { globalEditConfig: n } = me(), { tryPlay: s } = n, r = b(!1), o = b(""), a = b(), i = b(), l = b(), u = b(), p = b(), m = b(), c = b(He()), g = b(He()), f = b(He()), d = b(He()), w = b(He()), S = b(He()), V = b([{ label: "全部类型", value: "" }, ...s.flags]), x = b([]), k = b([]), R = b([]), $ = b(jl()), _ = b(Hl());
    $e(async () => {
      const Ce = await s.fetchData(Ts());
      x.value = Ce, k.value = Ce[0].roles, R.value = Ce[0].styles;
    });
    function M() {
    }
    function ne() {
    }
    function C() {
    }
    function O() {
    }
    function N() {
    }
    function F() {
    }
    function ve() {
    }
    function $t() {
      const Ce = {
        label: `${g.value.label}|${f.value.label}|${d.value.label}|${w.value.label}`,
        value: g.value.value,
        role: f.value.value,
        style: d.value.value,
        speed: Ul(Number(w.value.value)),
        pitch: Fl(Number(S.value.value))
      };
      t("submit", Ce);
    }
    return (Ce, z) => (P(), D("div", Bl, [
      v(y(bt), {
        onSubmit: re(M, ["prevent"])
      }, {
        default: T(() => [
          v(y(_t), {
            modelValue: o.value,
            "onUpdate:modelValue": z[0] || (z[0] = (H) => o.value = H),
            placeholder: "请输入名称快速查找配音师"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["onSubmit"]),
      h("div", zl, [
        h("div", Wl, [
          v(y(ie), {
            size: "small",
            icon: y(yr),
            onClick: z[1] || (z[1] = () => r.value = !r.value)
          }, null, 8, ["icon"])
        ]),
        h("ul", {
          class: _e(["d-flex flex-row row-gap-1 column-gap-2 overflow-x-hidden", { "flex-wrap": r.value }])
        }, [
          Gl,
          h("li", null, [
            v(y(Oe), {
              type: "info",
              closable: ""
            }, {
              default: T(() => [
                U("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            v(y(Oe), {
              type: "info",
              closable: ""
            }, {
              default: T(() => [
                U("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            v(y(Oe), {
              type: "info",
              closable: ""
            }, {
              default: T(() => [
                U("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            v(y(Oe), {
              type: "info",
              closable: ""
            }, {
              default: T(() => [
                U("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            v(y(Oe), {
              type: "info",
              closable: ""
            }, {
              default: T(() => [
                U("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            v(y(Oe), {
              type: "info",
              closable: ""
            }, {
              default: T(() => [
                U("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ]),
          h("li", null, [
            v(y(Oe), {
              type: "info",
              closable: ""
            }, {
              default: T(() => [
                U("魔小婉|女青年|娱乐|1x")
              ]),
              _: 1
            })
          ])
        ], 2),
        Te(h("div", {
          class: _e({ "d-flex flex-row": !r.value })
        }, [
          v(Fe, {
            "onUpdate:modelValue": [
              ne,
              z[2] || (z[2] = (H) => c.value = H)
            ],
            ref_key: "selTypeRef",
            ref: a,
            modelValue: c.value,
            dataList: V.value
          }, {
            default: T(() => [
              Yl
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          v(Fe, {
            "onUpdate:modelValue": [
              C,
              z[3] || (z[3] = (H) => g.value = H)
            ],
            ref_key: "selSpeakerRef",
            ref: i,
            modelValue: g.value,
            dataList: x.value
          }, {
            default: T(() => [
              Xl
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          v(Fe, {
            "onUpdate:modelValue": [
              O,
              z[4] || (z[4] = (H) => f.value = H)
            ],
            ref_key: "selRoleRef",
            ref: l,
            modelValue: f.value,
            dataList: k.value
          }, {
            default: T(() => [
              ql
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          v(Fe, {
            "onUpdate:modelValue": [
              N,
              z[5] || (z[5] = (H) => d.value = H)
            ],
            ref_key: "selStyleRef",
            ref: u,
            modelValue: d.value,
            dataList: R.value
          }, {
            default: T(() => [
              Kl
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          v(Fe, {
            "onUpdate:modelValue": [
              F,
              z[6] || (z[6] = (H) => w.value = H)
            ],
            ref_key: "selSpeedRef",
            ref: p,
            modelValue: w.value,
            dataList: $.value
          }, {
            default: T(() => [
              Jl
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          v(Fe, {
            "onUpdate:modelValue": [
              ve,
              z[7] || (z[7] = (H) => S.value = H)
            ],
            ref_key: "selPitchRef",
            ref: m,
            modelValue: S.value,
            dataList: _.value
          }, {
            default: T(() => [
              Ql
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"])
        ], 2), [
          [Re, !r.value]
        ])
      ]),
      h("div", Zl, [
        Te(v(y(ie), {
          onClick: $t,
          type: "primary"
        }, {
          default: T(() => [
            U("确定")
          ]),
          _: 1
        }, 512), [
          [Re, !r.value]
        ]),
        Te(v(y(ie), { type: "primary" }, {
          default: T(() => [
            U("全部清空")
          ]),
          _: 1
        }, 512), [
          [Re, r.value]
        ])
      ])
    ]));
  }
});
class tu extends we {
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
      return this.editor.emit(W.ERROR, "请框选句子"), !0;
    if (I.getSelectedNodeByType(this.editor, "custom-management"))
      return this.editor.emit(W.ERROR, "多人配音不能嵌套使用"), !0;
    const [n] = G.node(this.editor, t), s = this.editor.getParentNode(n);
    return !s || !I.checkNodeType(s, "paragraph") ? (this.editor.emit(W.ERROR, "多人配音需要在最外层使用"), !0) : !1;
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
const Qs = /* @__PURE__ */ A({
  __name: "management-menu",
  setup(e) {
    const t = b(), n = b(), s = X(), r = b(!1), o = X(), { x: a, y: i, height: l } = ot(n), u = (m) => {
      o.value ?? (o.value = new tu(m));
      const c = {
        x: a.value - 200,
        y: i.value + l.value
      };
      s.value = m, t.value.setPosition(c), r.value = !0;
    };
    function p(m) {
      var c;
      o.value && !o.value.isDisabled() && ((c = o.value) == null || c.exec(m)), r.value = !1;
    }
    return (m, c) => (P(), J(y(qe), {
      ref_key: "dragRef",
      ref: t,
      visible: r.value,
      "onUpdate:visible": c[0] || (c[0] = (g) => r.value = g)
    }, {
      reference: T(() => [
        v(y(te), {
          ref_key: "menuRef",
          ref: n,
          text: "多人配音",
          icon: "management",
          onClick: u
        }, null, 512)
      ]),
      default: T(() => [
        v(eu, { onSubmit: p })
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), nu = { class: "speaker-item" }, su = { class: "speaker-head" }, ru = ["src"], ou = { class: "speaker-name" }, au = /* @__PURE__ */ A({
  __name: "speaker-item",
  props: {
    name: {},
    src: { default: st() }
  },
  setup(e) {
    return (t, n) => (P(), D("div", nu, [
      h("div", su, [
        h("img", {
          src: t.src,
          class: "rounded-circle",
          style: { height: "40px" }
        }, null, 8, ru)
      ]),
      h("div", ou, B(t.name), 1)
    ]));
  }
});
const q = /* @__PURE__ */ ce(au, [["__scopeId", "data-v-01793229"]]);
class iu {
  constructor() {
    he(this, "mediaRecorder", null);
  }
  async open() {
    if (navigator.mediaDevices.getUserMedia) {
      let t = [];
      try {
        const n = await navigator.mediaDevices.getUserMedia({ audio: !0 }), s = new MediaRecorder(n);
        return new Promise((r, o) => {
          s.ondataavailable = (a) => {
            t.push(a.data);
          }, s.onstop = () => {
            const a = new Blob(t, { type: "audio/ogg; codecs=opus" });
            r(a);
          }, s.onerror = (a) => {
            o(a);
          }, s.start();
        });
      } catch (n) {
        throw new Error("授权失败！", { cause: n });
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
const lu = /* @__PURE__ */ h("p", { class: "text-start text-danger" }, "请在安静的环境中进行录音，以需要转换的风格，读出以下文案", -1), uu = {
  class: "border border-secondary rounded w-100",
  style: { height: "100px" }
}, cu = { class: "mt-2" }, du = /* @__PURE__ */ h("p", {
  class: "mt-2 text-secondary",
  style: { "font-size": "0.5rem" }
}, " 录音内容需要和滑选一致，音频限制60秒，滑选文案限制60个字 ", -1), fu = { class: "audio-upload" }, pu = { class: "border rounded-pill border-secondary d-flex flex-row justify-content-between" }, mu = { class: "d-flex flex-row align-items-center" }, vu = /* @__PURE__ */ h("div", null, "图标", -1), hu = /* @__PURE__ */ h("div", null, [
  /* @__PURE__ */ h("div", null, "删除"),
  /* @__PURE__ */ h("button", null, "上传音频")
], -1), yu = /* @__PURE__ */ h("template", null, [
  /* @__PURE__ */ h("span", {
    class: "text-secondary",
    style: { "font-size": "0.5rem" }
  }, "点击选择文件"),
  /* @__PURE__ */ h("button", { class: "btn btn-primary" })
], -1), gu = /* @__PURE__ */ h("span", {
  class: "text-secondary",
  style: { "font-size": "0.5rem" }
}, "点击开始录音", -1), bu = /* @__PURE__ */ h("p", null, "选择需要转换的配音师", -1), _u = { class: "speakers-container d-flex flex-row flex-wrap row-gap-1 column-gap-2" }, wu = /* @__PURE__ */ h("button", {
  class: "btn btn-primary",
  disabled: ""
}, "完成录音并上传完成后，可选择配音师转换", -1), xu = /* @__PURE__ */ A({
  __name: "conversion-content",
  props: {
    text: {}
  },
  emits: ["submit"],
  setup(e) {
    const t = b(), n = b(), s = b(!1), r = b(!1), o = X(), a = X(), i = new iu(), l = new Po("audio-conversion", "audio/*"), u = Is(t);
    se(u, (c) => {
      c || (r.value = !1, s.value = !1);
    });
    async function p() {
      s.value = !0, r.value = !0;
      try {
        o.value = await i.open();
      } catch {
      }
    }
    async function m() {
      s.value = !0, r.value = !1;
      try {
        a.value = await l.open();
      } catch {
      }
    }
    return (c, g) => {
      var f;
      return P(), D("div", {
        ref_key: "boxRef",
        ref: t,
        class: "px-2 py-1",
        style: { width: "410px" }
      }, [
        h("section", null, [
          lu,
          h("div", uu, B(c.text), 1)
        ]),
        Te(h("section", cu, [
          h("div", { class: "w-100 d-flex flex-column row-gap-1" }, [
            h("button", {
              onClick: p,
              class: "btn btn-success"
            }, "实时录音"),
            h("button", {
              onClick: m,
              class: "btn btn-primary"
            }, "上传录音")
          ]),
          du
        ], 512), [
          [Re, !s.value]
        ]),
        Te(h("section", null, [
          h("div", fu, [
            h("div", pu, [
              r.value ? (P(), D(Q, { key: 0 }, [
                h("div", mu, [
                  vu,
                  h("div", null, B((f = n.value) == null ? void 0 : f.name), 1)
                ]),
                hu
              ], 64)) : gt("", !0),
              yu,
              h("template", null, [
                gu,
                h("button", {
                  onClick: g[0] || (g[0] = //@ts-ignore
                  (...d) => y(i).stop && y(i).stop(...d)),
                  class: "btn btn-primary"
                }, "结束录音")
              ])
            ]),
            h("div", null, [
              bu,
              h("div", _u, [
                v(q, { name: "莫厚渊" }),
                v(q, { name: "莫厚渊" }),
                v(q, { name: "莫厚渊" }),
                v(q, { name: "莫厚渊" }),
                v(q, { name: "莫厚渊" }),
                v(q, { name: "莫厚渊" }),
                v(q, { name: "莫厚渊" }),
                v(q, { name: "莫厚渊" }),
                v(q, { name: "莫厚渊" }),
                v(q, { name: "莫厚渊" }),
                v(q, { name: "莫厚渊" }),
                v(q, { name: "莫厚渊" }),
                v(q, { name: "莫厚渊" }),
                v(q, { name: "莫厚渊" }),
                v(q, { name: "莫厚渊" }),
                v(q, { name: "莫厚渊" }),
                v(q, { name: "莫厚渊" }),
                v(q, { name: "莫厚渊" })
              ])
            ]),
            wu
          ])
        ], 512), [
          [Re, s.value]
        ])
      ], 512);
    };
  }
}), Zs = /* @__PURE__ */ A({
  __name: "conversion-menu",
  setup(e) {
    const t = b(), n = b(), s = X(), r = b(!1), o = b("ttttt"), { x: a, y: i, height: l } = ot(n), u = (m) => {
      const c = {
        x: a.value - 200,
        y: i.value + l.value
      };
      s.value = m, t.value.setPosition(c), r.value = !0;
    };
    function p(m) {
      console.log(m);
    }
    return (m, c) => (P(), J(y(qe), {
      ref_key: "dragRef",
      ref: t,
      visible: r.value,
      "onUpdate:visible": c[0] || (c[0] = (g) => r.value = g)
    }, {
      reference: T(() => [
        v(y(te), {
          ref_key: "menuRef",
          ref: n,
          text: "局部变音",
          icon: "conversion",
          onClick: u
        }, null, 512)
      ]),
      default: T(() => [
        v(xu, {
          text: o.value,
          onSubmit: p
        }, null, 8, ["text"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), $u = { class: "anchor-avatar d-flex flex-column justify-content-center align-items-center" }, Eu = ["src"], ku = { class: "anchor-avatar-name text-white" }, Su = /* @__PURE__ */ A({
  __name: "try-play-circle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = b(), s = b(0), r = b(0), o = ln(), { position: a } = dn(n, {
      initialValue: { x: window.innerWidth - 15, y: window.innerHeight / 2 - 15 },
      onStart: (m, c) => p(c.clientX, c.clientY) ? !1 : void 0
    }), { style: i } = pn(n, a);
    function l(m) {
      p(m.clientX, m.clientY) && t("update:visible", !1);
    }
    function u(m) {
      s.value = m.clientX, r.value = m.clientY;
    }
    function p(m, c) {
      return m > s.value - 10 && m < s.value + 10 && c > r.value - 10 && c < r.value + 10;
    }
    return (m, c) => Te((P(), D("div", {
      ref_key: "boxRef",
      ref: n,
      class: "try-play-circel user-select-none rounded-circle overflow-hidden",
      style: yt([y(i), { position: "fixed" }]),
      onMousedown: u,
      onMouseup: l
    }, [
      h("div", $u, [
        h("img", {
          src: y(o).speaker.avatar || y(st)(),
          class: "rounded-circle"
        }, null, 8, Eu),
        h("div", ku, B(y(o).speaker.label), 1)
      ])
    ], 36)), [
      [Re, m.visible]
    ]);
  }
});
const Cu = /* @__PURE__ */ ce(Su, [["__scopeId", "data-v-b8319066"]]), Ou = {
  key: 0,
  class: "position-absolute top-0 start-100 translate-middle text-bg-danger text-nowrap rounded px-1",
  style: { "font-size": "0.5rem" }
}, Pu = ["src"], Tu = { class: "anchor-avatar-name text-white" }, Ru = /* @__PURE__ */ A({
  __name: "anchor-avatar",
  props: {
    activate: { type: Boolean },
    data: {}
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => {
      var s, r, o;
      return P(), D("div", {
        class: "anchor-avatar d-flex flex-column align-items-center text-center justify-content-center position-relative",
        onClick: n[0] || (n[0] = (a) => {
          var i;
          return t.$emit("click", (i = t.data) == null ? void 0 : i.value);
        })
      }, [
        (s = t.data) != null && s.isFree ? gt("", !0) : (P(), D("span", Ou, "付费")),
        h("img", {
          src: ((r = t.data) == null ? void 0 : r.src) ?? y(st)(),
          class: _e(["rounded-circle", { "border border-2 border-warning": t.activate }]),
          style: { height: "40px" }
        }, null, 10, Pu),
        h("div", Tu, B((o = t.data) == null ? void 0 : o.label), 1)
      ]);
    };
  }
});
const er = /* @__PURE__ */ ce(Ru, [["__scopeId", "data-v-845325c9"]]), Vu = {
  style: { height: "170px" },
  class: "w-100 d-flex flex-row flex-wrap justify-content-start overflow-x-hidden overflow-y-auto scrollbar-none"
}, Nu = /* @__PURE__ */ A({
  __name: "anchor-list",
  props: {
    filter: {}
  },
  setup(e) {
    const t = e, { globalEditConfig: n } = me(), { fetchData: s } = n.tryPlay, r = ln(), o = b([]);
    se(
      () => t.filter,
      async (i) => {
        o.value = await s(oe(i));
      }
    );
    function a(i) {
      r.setSpeaker(i);
    }
    return $e(async () => {
      o.value = await s(oe(t.filter)), o.value.length > 0 && a(o.value[0]);
    }), (i, l) => (P(), D("div", Vu, [
      (P(!0), D(Q, null, le(o.value, (u, p) => (P(), D("div", {
        class: "m-3",
        key: p
      }, [
        v(er, {
          data: u,
          activate: u.value === y(r).speaker.value,
          onClick: (m) => a(oe(u))
        }, null, 8, ["data", "activate", "onClick"])
      ]))), 128))
    ]));
  }
}), At = /* @__PURE__ */ A({
  __name: "tag-item",
  props: {
    activate: { type: Boolean },
    value: {}
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => (P(), D("span", {
      class: _e(["tag-item d-inline-block text-white text-center text-nowrap text-truncate", { "border border-white rounded-pill": t.activate }]),
      onClick: n[0] || (n[0] = (s) => t.$emit("click", t.value)),
      style: { height: "20px", "min-width": "60px", "max-width": "160px", "font-size": "0.5rem", cursor: "pointer" }
    }, [
      ke(t.$slots, "default")
    ], 2));
  }
}), Iu = { class: "tag-list w-100" }, Du = {
  class: "w-100 d-flex flex-row border-bottom border-secondary align-items-center",
  style: { height: "40px" }
}, Au = {
  class: "w-100 d-flex flex-row border-bottom border-secondary align-items-center",
  style: { height: "40px" }
}, Lu = {
  style: { height: "100px" },
  class: "w-100 pt-2 d-flex flex-row flex-wrap align-content-start row-gap-2 overflow-y-auto overflow-x-hidden scrollbar-none"
}, Mu = /* @__PURE__ */ A({
  __name: "tag-list",
  props: {
    filter: {}
  },
  emits: ["update:filter"],
  setup(e, { emit: t }) {
    const n = e, { globalEditConfig: s } = me(), { category: r, gender: o, featchTag: a } = s.tryPlay, i = b([]);
    $e(async () => {
      i.value = await a();
    });
    function l(m) {
      t("update:filter", { ...oe(n.filter), category: m });
    }
    function u(m) {
      t("update:filter", { ...oe(n.filter), gender: m });
    }
    function p(m) {
      t("update:filter", { ...oe(n.filter), tag: m });
    }
    return (m, c) => (P(), D("div", Iu, [
      h("div", Du, [
        (P(!0), D(Q, null, le(y(r), (g, f) => (P(), J(At, {
          onClick: l,
          key: f,
          value: g.value,
          activate: m.filter.category === g.value
        }, {
          default: T(() => [
            U(B(g.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "activate"]))), 128))
      ]),
      h("div", Au, [
        (P(!0), D(Q, null, le(y(o), (g, f) => (P(), J(At, {
          onClick: u,
          key: f,
          value: g.value,
          activate: m.filter.gender === g.value
        }, {
          default: T(() => [
            U(B(g.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "activate"]))), 128))
      ]),
      h("div", Lu, [
        (P(!0), D(Q, null, le(i.value, (g, f) => (P(), J(At, {
          onClick: p,
          key: f,
          value: g.value,
          activate: m.filter.tag === g.value
        }, {
          default: T(() => [
            U(B(g.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "activate"]))), 128))
      ])
    ]));
  }
});
const ju = ["src"], Hu = {
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
      return P(), D("div", {
        class: "anchor-avatar d-flex flex-column align-items-center text-center justify-content-center position-relative",
        onClick: n[0] || (n[0] = (o) => {
          var a;
          return t.$emit("click", (a = t.data) == null ? void 0 : a.value);
        })
      }, [
        h("img", {
          src: ((s = t.data) == null ? void 0 : s.src) || y(st)(),
          class: _e(["rounded-circle", { "border border-2 border-warning": t.activate }]),
          style: { height: "30px" }
        }, null, 10, ju),
        h("div", Hu, B((r = t.data) == null ? void 0 : r.label), 1)
      ]);
    };
  }
});
const Uu = /* @__PURE__ */ ce(Fu, [["__scopeId", "data-v-71aedb65"]]);
function Bu(e) {
  return `${(0.05 * e * 100).toFixed(0)}%`;
}
function zu(e) {
  return `${((e - 1) * 100).toFixed(0)}%`;
}
const vn = (e) => (Qt("data-v-5e5bc595"), e = e(), Zt(), e), Wu = {
  class: "slider-panle w-100 px-3 text-white",
  style: { "font-size": "0.5rem" }
}, Gu = { class: "mt-2 d-flex text-center justify-content-between align-items-center" }, Yu = { class: "me-auto d-flex flex-row align-items-center" }, Xu = ["src"], qu = {
  class: "ms-2 d-flex flex-column justify-content-between",
  style: { height: "50px" }
}, Ku = { class: "d-flex dlex-row column-gap-2 align-items-end" }, Ju = { class: "fs-6" }, Qu = { style: { "font-size": "0.5rem" } }, Zu = { class: "d-flex flex-row column-gap-2 align-items-center" }, ec = {
  key: 0,
  class: "badge text-bg-primary px-2"
}, tc = { class: "d-flex flex-column align-items-end" }, nc = /* @__PURE__ */ vn(() => /* @__PURE__ */ h("div", { class: "text-info" }, "音频时长，请以生成后的为准", -1)), sc = { class: "mt-1" }, rc = /* @__PURE__ */ vn(() => /* @__PURE__ */ h("span", null, "/", -1)), oc = { class: "role-list mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-2 column-gap-3" }, ac = ["onClick"], ic = { class: "audio-mood mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-1 column-gap-2" }, lc = ["onClick"], uc = /* @__PURE__ */ vn(() => /* @__PURE__ */ h("div", { class: "my-3" }, [
  /* @__PURE__ */ h("span", { class: "border rounded-pill p-1" }, "配音师详情")
], -1)), cc = { class: "slider-box" }, dc = { class: "slider-box" }, fc = { class: "d-flex flex-row gap-3 my-3" }, pc = ["onClick"], mc = {
  class: "d-flex flex-row flex-wrap row-gap-2 column-gap-3 mb-3",
  style: { "min-height": "100px" }
}, vc = ["onClick"], hc = /* @__PURE__ */ A({
  __name: "slider-panle",
  setup(e) {
    const { globalEditConfig: t } = me(), { rootProsody: n, rootExpressAs: s } = Le(), { fetchStar: r, flags: o, fetchFlag: a } = t.tryPlay, i = ln(), l = b(i.speaker.isStar), u = b(10), p = b(0), m = b([0, 2]), c = b(1), g = b([-10, 10]), f = b(0), d = ee(() => Wn(u.value)), w = ee(() => Wn(p.value)), S = Lt(Kr()), V = Lt(Jr()), x = b(""), k = b([]);
    $e(async () => {
      await M("");
    }), se(
      () => i.speaker,
      (C) => {
        C.roles.length > 0 && $(C.roles[0].value), C.styles.length > 0 && _(C.styles[0].value);
      },
      { immediate: !0 }
    ), se(
      f,
      (C) => {
        n.pitch = Bu(C);
      },
      { immediate: !0 }
    ), se(
      c,
      (C) => {
        n.rate = zu(C);
      },
      { immediate: !0 }
    );
    async function R() {
      l.value = await r(i.speaker.value, !l.value);
    }
    function $(C) {
      s.role = C;
    }
    function _(C) {
      s.style = C;
    }
    async function M(C) {
      x.value = C;
      try {
        k.value = await a(C);
      } catch (O) {
        Ye.emit(Xe.ERROR, O);
      }
    }
    function ne(C) {
      i.setSpeaker(oe(C));
    }
    return (C, O) => (P(), D("div", Wu, [
      h("div", Gu, [
        h("div", Yu, [
          h("img", {
            src: y(st)(),
            class: "rounded-circle",
            style: { height: "50px" }
          }, null, 8, Xu),
          h("div", qu, [
            h("div", Ku, [
              h("span", Ju, B(y(i).speaker.label), 1),
              h("span", Qu, B(c.value) + "x", 1)
            ]),
            h("div", Zu, [
              v(y(us), {
                onClick: R,
                class: "fs-6",
                style: yt({ color: l.value ? "red" : "white" })
              }, {
                default: T(() => [
                  l.value ? (P(), J(y(gr), { key: 0 })) : (P(), J(y(br), { key: 1 }))
                ]),
                _: 1
              }, 8, ["style"]),
              y(i).speaker.isSupper24K ? (P(), D("span", ec, " 24K ")) : gt("", !0)
            ])
          ])
        ]),
        h("div", tc, [
          nc,
          h("div", sc, [
            h("span", null, B(w.value), 1),
            rc,
            h("span", null, B(d.value), 1)
          ]),
          v(y(kt), {
            max: u.value,
            modelValue: p.value,
            "onUpdate:modelValue": O[0] || (O[0] = (N) => p.value = N),
            size: "small"
          }, null, 8, ["max", "modelValue"])
        ])
      ]),
      h("div", oc, [
        (P(!0), D(Q, null, le(y(i).speaker.roles, (N, F) => (P(), D("div", {
          onClick: (ve) => $(N.value),
          key: F,
          class: _e(["rounded-pill px-1", { border: N.value === (y(s).role || "") }])
        }, B(N.label), 11, ac))), 128))
      ]),
      h("ul", ic, [
        (P(!0), D(Q, null, le(y(i).speaker.styles, (N, F) => (P(), D("li", {
          class: "mx-2",
          onClick: (ve) => _(N.value),
          key: F
        }, [
          v(Uu, {
            activate: N.value === (y(s).style || ""),
            data: N
          }, null, 8, ["activate", "data"])
        ], 8, lc))), 128))
      ]),
      uc,
      h("div", cc, [
        h("div", null, [
          h("span", null, "语速：" + B(c.value) + "x", 1)
        ]),
        v(y(kt), {
          modelValue: c.value,
          "onUpdate:modelValue": O[1] || (O[1] = (N) => c.value = N),
          min: m.value[0],
          max: m.value[1],
          step: 0.05,
          marks: S
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      h("div", dc, [
        h("div", null, [
          h("span", null, "语调：" + B(f.value), 1)
        ]),
        v(y(kt), {
          modelValue: f.value,
          "onUpdate:modelValue": O[2] || (O[2] = (N) => f.value = N),
          min: g.value[0],
          max: g.value[1],
          step: 0.2,
          marks: V
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      h("div", null, [
        h("ul", fc, [
          (P(!0), D(Q, null, le(y(o), (N, F) => (P(), D("li", {
            onClick: (ve) => M(N.value),
            key: F,
            class: _e(["rounded-pill px-1", { border: N.value === x.value }])
          }, B(N.label), 11, pc))), 128))
        ]),
        h("ul", mc, [
          (P(!0), D(Q, null, le(k.value, (N, F) => (P(), D("li", {
            onClick: (ve) => ne(N),
            key: F
          }, [
            v(er, {
              activate: N.value === y(i).speaker.value,
              data: N
            }, null, 8, ["activate", "data"])
          ], 8, vc))), 128))
        ])
      ])
    ]));
  }
});
const yc = /* @__PURE__ */ ce(hc, [["__scopeId", "data-v-5e5bc595"]]), gc = (e) => (Qt("data-v-7d5776fb"), e = e(), Zt(), e), bc = { class: "box ms-2" }, _c = { class: "try-play-header text-center d-flex flex-row justify-content-between" }, wc = { class: "try-play-body d-flex flex-row" }, xc = { class: "try-play-left w-50 border-right border-secondary" }, $c = { class: "pe-1" }, Ec = /* @__PURE__ */ gc(() => /* @__PURE__ */ h("div", { class: "py-1 border-top border-secondary" }, null, -1)), kc = { class: "try-play-right w-50 border-start rounded border-top border-secondary overflow-x-hidden overflow-y-auto scrollbar-none" }, Sc = /* @__PURE__ */ A({
  __name: "try-play-panle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = e, s = b(), r = b(""), o = b(), a = b(), i = b(Ts());
    $e(() => {
      window.addEventListener("keydown", l);
    }), Jt(() => {
      window.addEventListener("keydown", l);
    }), se(
      () => n.visible,
      (f) => {
        f && setTimeout(() => {
          c();
        }, 200);
      }
    );
    function l(f) {
      f.code === "Escape" && n.visible && m();
    }
    const { position: u } = dn(a, {
      initialValue: { x: 100, y: 100 }
    }), { style: p } = pn(o, u);
    function m() {
      t("update:visible", !1);
    }
    function c() {
      var f;
      (f = s.value) == null || f.focus();
    }
    function g() {
      i.value = { ...i.value, word: r.value };
    }
    return (f, d) => Te((P(), D("div", {
      ref_key: "boxRef",
      ref: o,
      style: yt([y(p), { position: "fixed" }]),
      class: "try-play user-select-none card z-3 shadow"
    }, [
      h("div", bc, [
        h("div", _c, [
          h("div", {
            ref_key: "handleRef",
            ref: a,
            class: "col-11 try-play-move"
          }, null, 512),
          h("div", {
            onClick: m,
            class: "col-1 try-play-menu-close"
          }, [
            v(y(us), { color: "white" }, {
              default: T(() => [
                v(y(_r))
              ]),
              _: 1
            })
          ])
        ]),
        h("div", wc, [
          h("div", xc, [
            h("div", $c, [
              v(y(bt), {
                onSubmit: re(g, ["prevent"])
              }, {
                default: T(() => [
                  v(y(_t), {
                    "input-style": { color: "white" },
                    ref_key: "searchInputRef",
                    ref: s,
                    modelValue: r.value,
                    "onUpdate:modelValue": d[0] || (d[0] = (w) => r.value = w),
                    placeholder: "输入名称搜索"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["onSubmit"])
            ]),
            v(Mu, {
              filter: i.value,
              "onUpdate:filter": d[1] || (d[1] = (w) => i.value = w)
            }, null, 8, ["filter"]),
            Ec,
            v(Nu, { filter: i.value }, null, 8, ["filter"])
          ]),
          h("div", kc, [
            v(yc)
          ])
        ])
      ])
    ], 4)), [
      [Re, f.visible]
    ]);
  }
});
const Cc = /* @__PURE__ */ ce(Sc, [["__scopeId", "data-v-7d5776fb"]]), tr = /* @__PURE__ */ A({
  __name: "try-play",
  setup(e) {
    const t = b(!0);
    function n(s) {
      s || (t.value = !0);
    }
    return (s, r) => (P(), J(ls, { to: "body" }, [
      v(Cu, {
        visible: t.value,
        "onUpdate:visible": r[0] || (r[0] = (o) => t.value = o)
      }, null, 8, ["visible"]),
      v(Cc, {
        visible: !t.value,
        "onUpdate:visible": n
      }, null, 8, ["visible"])
    ]));
  }
});
const Oc = {
  install: (e) => {
    e.component("PinyinMenu", Hs), e.component("ContinuousMenu", Fs), e.component("ReadMenu", Us), e.component("DigitalMenu", Bs), e.component("AliasMenu", zs), e.component("EnglishMenu", Ws), e.component("ChangespeedMenu", Gs), e.component("RhythmMenu", Ys), e.component("SpecialMenu", Xs), e.component("MuteMenu", qs), e.component("BgmMenu", Ks), e.component("SensitiveMenu", Js), e.component("ManagementMenu", Qs), e.component("ConversionMenu", Zs), e.component("TryPlay", tr);
  }
};
var Yt = { exports: {} }, Xt = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.ParsingError = void 0;
  class n extends Error {
    constructor(k, R) {
      super(k), this.cause = R;
    }
  }
  t.ParsingError = n;
  let s;
  function r() {
    return l(!1) || c() || m() || p();
  }
  function o() {
    return d(/\s*/), l(!0) || m() || u() || i(!1);
  }
  function a() {
    const x = i(!0), k = [];
    let R, $ = o();
    for (; $; ) {
      if ($.node.type === "Element") {
        if (R)
          throw new Error("Found multiple root nodes");
        R = $.node;
      }
      $.excluded || k.push($.node), $ = o();
    }
    if (!R)
      throw new n("Failed to parse XML", "Root Element not found");
    if (s.xml.length !== 0)
      throw new n("Failed to parse XML", "Not Well-Formed XML");
    return {
      declaration: x ? x.node : null,
      root: R,
      children: k
    };
  }
  function i(x) {
    const k = d(x ? /^<\?(xml)\s*/ : /^<\?([\w-:.]+)\s*/);
    if (!k)
      return;
    const R = {
      name: k[1],
      type: "ProcessingInstruction",
      attributes: {}
    };
    for (; !(w() || S("?>")); ) {
      const $ = g();
      if ($)
        R.attributes[$.name] = $.value;
      else
        return;
    }
    return d(/\?>/), {
      excluded: x ? !1 : s.options.filter(R) === !1,
      node: R
    };
  }
  function l(x) {
    const k = d(/^<([^?!</>\s]+)\s*/);
    if (!k)
      return;
    const R = {
      type: "Element",
      name: k[1],
      attributes: {},
      children: []
    }, $ = x ? !1 : s.options.filter(R) === !1;
    for (; !(w() || S(">") || S("?>") || S("/>")); ) {
      const M = g();
      if (M)
        R.attributes[M.name] = M.value;
      else
        return;
    }
    if (d(/^\s*\/>/))
      return R.children = null, {
        excluded: $,
        node: R
      };
    d(/\??>/);
    let _ = r();
    for (; _; )
      _.excluded || R.children.push(_.node), _ = r();
    if (s.options.strictMode) {
      const M = `</${R.name}>`;
      if (s.xml.startsWith(M))
        s.xml = s.xml.slice(M.length);
      else
        throw new n("Failed to parse XML", `Closing tag not matching "${M}"`);
    } else
      d(/^<\/\s*[\w-:.\u00C0-\u00FF]+>/);
    return {
      excluded: $,
      node: R
    };
  }
  function u() {
    const x = d(/^<!DOCTYPE\s+\S+\s+SYSTEM[^>]*>/) || d(/^<!DOCTYPE\s+\S+\s+PUBLIC[^>]*>/) || d(/^<!DOCTYPE\s+\S+\s*\[[^\]]*]>/) || d(/^<!DOCTYPE\s+\S+\s*>/);
    if (x) {
      const k = {
        type: "DocumentType",
        content: x[0]
      };
      return {
        excluded: s.options.filter(k) === !1,
        node: k
      };
    }
  }
  function p() {
    if (s.xml.startsWith("<![CDATA[")) {
      const x = s.xml.indexOf("]]>");
      if (x > -1) {
        const k = x + 3, R = {
          type: "CDATA",
          content: s.xml.substring(0, k)
        };
        return s.xml = s.xml.slice(k), {
          excluded: s.options.filter(R) === !1,
          node: R
        };
      }
    }
  }
  function m() {
    const x = d(/^<!--[\s\S]*?-->/);
    if (x) {
      const k = {
        type: "Comment",
        content: x[0]
      };
      return {
        excluded: s.options.filter(k) === !1,
        node: k
      };
    }
  }
  function c() {
    const x = d(/^([^<]+)/);
    if (x) {
      const k = {
        type: "Text",
        content: x[1]
      };
      return {
        excluded: s.options.filter(k) === !1,
        node: k
      };
    }
  }
  function g() {
    const x = d(/([^=]+)\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)\s*/);
    if (x)
      return {
        name: x[1].trim(),
        value: f(x[2].trim())
      };
  }
  function f(x) {
    return x.replace(/^['"]|['"]$/g, "");
  }
  function d(x) {
    const k = s.xml.match(x);
    if (k)
      return s.xml = s.xml.slice(k[0].length), k;
  }
  function w() {
    return s.xml.length === 0;
  }
  function S(x) {
    return s.xml.indexOf(x) === 0;
  }
  function V(x, k = {}) {
    x = x.trim();
    const R = k.filter || (() => !0);
    return s = {
      xml: x,
      options: Object.assign(Object.assign({}, k), { filter: R, strictMode: k.strictMode === !0 })
    }, a();
  }
  e.exports = V, t.default = V;
})(Xt, Xt.exports);
var Pc = Xt.exports;
(function(e, t) {
  var n = ze && ze.__importDefault || function(f) {
    return f && f.__esModule ? f : { default: f };
  };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const s = n(Pc);
  function r(f) {
    if (!f.options.indentation && !f.options.lineSeparator)
      return;
    f.content += f.options.lineSeparator;
    let d;
    for (d = 0; d < f.level; d++)
      f.content += f.options.indentation;
  }
  function o(f) {
    f.content = f.content.replace(/ +$/, "");
    let d;
    for (d = 0; d < f.level; d++)
      f.content += f.options.indentation;
  }
  function a(f, d) {
    f.content += d;
  }
  function i(f, d, w) {
    if (typeof f.content == "string")
      l(f.content, d, w);
    else if (f.type === "Element")
      p(f, d, w);
    else if (f.type === "ProcessingInstruction")
      c(f, d);
    else
      throw new Error("Unknown node type: " + f.type);
  }
  function l(f, d, w) {
    if (!w) {
      const S = f.trim();
      (d.options.lineSeparator || S.length === 0) && (f = S);
    }
    f.length > 0 && (!w && d.content.length > 0 && r(d), a(d, f));
  }
  function u(f, d) {
    const w = "/" + f.join("/"), S = f[f.length - 1];
    return d.includes(S) || d.includes(w);
  }
  function p(f, d, w) {
    if (d.path.push(f.name), !w && d.content.length > 0 && r(d), a(d, "<" + f.name), m(d, f.attributes), f.children === null || d.options.forceSelfClosingEmptyTag && f.children.length === 0) {
      const S = d.options.whiteSpaceAtEndOfSelfclosingTag ? " />" : "/>";
      a(d, S);
    } else if (f.children.length === 0)
      a(d, "></" + f.name + ">");
    else {
      const S = f.children;
      a(d, ">"), d.level++;
      let V = f.attributes["xml:space"] === "preserve", x = !1;
      if (!V && d.options.ignoredPaths && (x = u(d.path, d.options.ignoredPaths), V = x), !V && d.options.collapseContent) {
        let k = !1, R = !1, $ = !1;
        S.forEach(function(_, M) {
          _.type === "Text" ? (_.content.includes(`
`) ? (R = !0, _.content = _.content.trim()) : (M === 0 || M === S.length - 1) && _.content.trim().length === 0 && (_.content = ""), _.content.trim().length > 0 && (k = !0)) : _.type === "CDATA" ? k = !0 : $ = !0;
        }), k && (!$ || !R) && (V = !0);
      }
      S.forEach(function(k) {
        i(k, d, w || V);
      }), d.level--, !w && !V && r(d), x && o(d), a(d, "</" + f.name + ">");
    }
    d.path.pop();
  }
  function m(f, d) {
    Object.keys(d).forEach(function(w) {
      const S = d[w].replace(/"/g, "&quot;");
      a(f, " " + w + '="' + S + '"');
    });
  }
  function c(f, d) {
    d.content.length > 0 && r(d), a(d, "<?" + f.name), m(d, f.attributes), a(d, "?>");
  }
  function g(f, d = {}) {
    d.indentation = "indentation" in d ? d.indentation : "    ", d.collapseContent = d.collapseContent === !0, d.lineSeparator = "lineSeparator" in d ? d.lineSeparator : `\r
`, d.whiteSpaceAtEndOfSelfclosingTag = d.whiteSpaceAtEndOfSelfclosingTag === !0, d.throwOnFailure = d.throwOnFailure !== !1;
    try {
      const w = (0, s.default)(f, { filter: d.filter, strictMode: d.strictMode }), S = { content: "", level: 0, options: d, path: [] };
      return w.declaration && c(w.declaration, S), w.children.forEach(function(V) {
        i(V, S, !1);
      }), d.lineSeparator ? S.content.replace(/\r\n/g, `
`).replace(/\n/g, d.lineSeparator) : S.content;
    } catch (w) {
      if (d.throwOnFailure)
        throw w;
      return f;
    }
  }
  g.minify = (f, d = {}) => g(f, Object.assign(Object.assign({}, d), { indentation: "", lineSeparator: "" })), e.exports = g, t.default = g;
})(Yt, Yt.exports);
var Tc = Yt.exports;
const Rc = /* @__PURE__ */ sn(Tc);
function Vc(e) {
  return e.replaceAll(/[&]/gi, "&amp;").replaceAll(/[<]/gi, "&lt;").replaceAll(/[>]/gi, "&gt;");
}
function Nc(e, t) {
  return t ? `<audio src="${e.src}">${t}</audio>` : `<audio src="${e.src}"/>`;
}
function Ic(e) {
  return e.time ? `<break time="${e.time}"/>` : e.strength ? `<break strength="${e.strength}"/>` : "<break/>";
}
function Dc(e, t) {
  return e.level ? `<emphasis level="${e.level}">${t}</emphasis>` : `<emphasis>${t}</emphasis>`;
}
function Ac(e, t) {
  if (!e.style)
    return t;
  const n = e.role ? ` role="${e.role}"` : "", s = e.styledegree ? ` styledegree="${e.styledegree}"` : "";
  return `<mstts:express-as style="${e.style}"${n}${s}>${t}</mstts:express-as>`;
}
function Lc(e) {
  if (!e.src)
    return "";
  const t = e.volume ? ` volume="${e.volume}"` : "", n = e.fadein ? ` fadein="${e.fadein}"` : "", s = e.fadeout ? ` fadeout="${e.fadeout}"` : "";
  return `<mstts:backgroundaudio src="${e.src}"${t}${n}${s}/>`;
}
function Mc(e) {
  return !e.attrType || !e.value ? "" : `<mstts:silence type="${e.attrType}" value="${e.value}"/>`;
}
function jc(e, t) {
  return `<p>${t}</p>`;
}
function Hc(e, t) {
  const n = e.alphabet ? `alphabet="${e.alphabet}"` : "";
  return `<phoneme ph="${e.ph}"${n}>${t}</phoneme>`;
}
function Fc(e, t) {
  if (!e.contour && !e.pitch && !e.range && !e.rate && !e.volume)
    return t;
  const n = e.contour ? ` contour="${e.contour}"` : "", s = e.pitch ? ` pitch="${e.pitch}"` : "", r = e.range ? ` range="${e.range}"` : "", o = e.volume ? ` volume="${e.volume}"` : "", a = e.rate ? ` rate="${e.rate}"` : "";
  return `<prosody${n}${s}${r}${o}${a}>${t}</prosody>`;
}
function Uc(e, t) {
  const n = e.interpretAs ? ` interpret-as="${e.interpretAs}"` : "", s = e.format ? ` format="${e.format}"` : "", r = e.detail ? ` detail="${e.detail}"` : "";
  return `<say-as${n}${s}${r}>${t}</say-as>`;
}
function Bc(e, t) {
  return `<s>${t}</s>`;
}
function zc(e, t) {
  return `<sub alias="${e.alias}">${t}</sub>`;
}
function Wc(e, t) {
  const n = e.effect ? ` effect="${e.effect}"` : "";
  return `<voice name="${e.name}${n}">${t}</voice>`;
}
function Gc(e, t) {
  return `<speak version="${e.version}" xml:lang="${e.xmlLang}" xmlns="${e.xmlns}" xmlns:mstts="${e["xmlns:mstts"]}" xmlns:emo="${e["xmlns:emo"]}">${t}</speak>`;
}
function nr(e) {
  if (tt.isText(e))
    return Vc(e.text.trim());
  if (cr.isElement(e)) {
    const t = e.children.map((s) => nr(s)).join("");
    switch (I.getNodeType(e)) {
      case "paragraph":
        return `<p>${t}</p>`;
      case "ssml-speak":
        return Gc(e, t);
      case "ssml-mstts:backgroundaudio":
        return Lc(e);
      case "ssml-audio":
        return Nc(e, t);
      case "ssml-break":
        return Ic(e);
      case "ssml-emphasis":
        return Dc(e, t);
      case "ssml-mstts:express-as":
        return Ac(e, t);
      case "ssml-p":
        return jc(e, t);
      case "ssml-phoneme":
        return Hc(e, t);
      case "ssml-prosody":
        return Fc(e, t);
      case "ssml-s":
        return Bc(e, t);
      case "ssml-say-as":
        return Uc(e, t);
      case "ssml-sub":
        return zc(e, t);
      case "ssml-voice":
        return Wc(e, t);
      case "ssml-mstts:silence":
        return Mc(e);
      default:
        return t;
    }
  }
  return "";
}
function Yc(e, t) {
  const n = { type: "ssml-voice", remark: "", name: t.name, children: [] }, s = sr(), r = {
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
    function u(p) {
      l.children.push(p);
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
      } else if (G.isVoid(e, u)) {
        i = void 0, r.children.push(u);
        continue;
      } else {
        const p = I.findPath(e, u), [m] = G.nodes(e, {
          at: p,
          mode: "lowest",
          voids: !1,
          match: (c) => I.checkNodeType(c, "ssml-prosody")
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
function sr() {
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
function Xc() {
  const { rootVoice: e, rootExpressAs: t } = Le(), n = { ...e, children: [] }, s = sr(), r = { ...t, children: [] };
  n.children.push(...s), n.children.push(r);
  function o(a) {
    r.children.push(a);
  }
  return { voice: n, pushNode: o };
}
function rs(e) {
  const { rootProsody: t } = Le(), n = { ...t, children: [] };
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
function Kc(e) {
  const t = e.children.filter((n) => I.checkNodeType(n, "paragraph")).filter((n) => !!dr.string(n).trim()).map((n, s, r) => {
    const a = n.children;
    return s < r.length - 1 ? a.concat([qc()]) : a;
  });
  return [].concat(...t);
}
function Jc(e) {
  const t = Kc(e), n = [];
  let s, r;
  for (let o = 0; o < t.length; o++) {
    const a = t[o];
    if (!(tt.isText(a) && !a.text.trim())) {
      if (I.checkNodeType(a, "custom-management")) {
        s && (n.push(s.voice), s = void 0, r = void 0), n.push(Yc(e, a));
        continue;
      }
      if (s ?? (s = Xc()), tt.isText(a)) {
        r ?? (r = rs(s.pushNode)), r.pushNode(a);
        continue;
      } else if (G.isVoid(e, a)) {
        r = void 0, s.pushNode(a);
        continue;
      } else {
        const i = I.findPath(e, a), [l] = G.nodes(e, {
          at: i,
          mode: "lowest",
          voids: !1,
          match: (u) => I.checkNodeType(u, "ssml-prosody")
        });
        if (l) {
          r = void 0, s.pushNode(a);
          continue;
        } else {
          r ?? (r = rs(s.pushNode)), r.pushNode(a);
          continue;
        }
      }
    }
  }
  return s && n.push(s.voice), n;
}
function Qc() {
  const { editor: e } = me();
  if (!e)
    throw Error("没有找到 editor 对象");
  const { rootSpeak: t, rootBackgroundaudio: n } = Le(), s = { ...t, children: [] }, r = { ...n };
  return s.children.push(r, ...Jc(e)), nr(s);
}
const Ke = (e) => (Qt("data-v-fb2870b0"), e = e(), Zt(), e), Zc = { class: "editor-title d-flex flex-row align-item-center justify-content-between" }, ed = { class: "title-wrapper d-flex flex-column justify-content-center ps-3" }, td = /* @__PURE__ */ Ke(() => /* @__PURE__ */ h("div", { class: "title-author pb-1" }, "SSML编辑器", -1)), nd = { class: "author d-flex flex-row align-items-center justify-content-start" }, sd = /* @__PURE__ */ Ke(() => /* @__PURE__ */ h("div", null, "未保存", -1)), rd = /* @__PURE__ */ Ke(() => /* @__PURE__ */ h("span", { class: "iconfont icon-play font-size-12 p-1" }, null, -1)), od = /* @__PURE__ */ Ke(() => /* @__PURE__ */ h("div", { class: "d-inline-block" }, null, -1)), ad = { class: "operation-wrapper d-flex flex-row justify-content-center align-items-center" }, id = /* @__PURE__ */ Ke(() => /* @__PURE__ */ h("div", { class: "menu-divider" }, null, -1)), ld = /* @__PURE__ */ Ke(() => /* @__PURE__ */ h("div", { class: "px-1" }, null, -1)), ud = {
  class: "ssml-code border border-secondary-subtle rounded-2 px-2",
  style: { "white-space": "pre-wrap", "max-height": "50vh" }
}, cd = { class: "dialog-footer" }, dd = /* @__PURE__ */ A({
  __name: "editor-title",
  setup(e) {
    const t = b(!1), n = b(""), { rootBackgroundaudio: s } = Le(), r = ee(() => Rc(n.value, {
      indentation: "    ",
      filter: (u) => u.type !== "Comment",
      collapseContent: !0,
      lineSeparator: `
`
    })), o = () => {
      n.value = Qc(), t.value = !0;
    }, a = () => {
      s.src && ht.play(s.src);
    }, i = () => {
      ht.stop(s.src), s.src = "", s.remark = "";
    };
    async function l(u) {
      await navigator.clipboard.writeText(u ? r.value : n.value), t.value = !1;
    }
    return (u, p) => (P(), D(Q, null, [
      h("div", Zc, [
        h("div", ed, [
          td,
          h("div", nd, [
            sd,
            y(s).src ? (P(), J(y(Oe), {
              key: 0,
              class: "bgm-txt ms-2",
              closable: "",
              size: "small",
              onClick: a,
              onClose: i
            }, {
              default: T(() => [
                rd,
                od,
                h("span", null, B(y(s).remark), 1)
              ]),
              _: 1
            })) : gt("", !0)
          ])
        ]),
        h("div", ad, [
          v(y(ie), {
            type: "primary",
            icon: y(wr),
            disabled: ""
          }, {
            default: T(() => [
              U("分享")
            ]),
            _: 1
          }, 8, ["icon"]),
          id,
          v(y(ie), {
            type: "primary",
            onClick: o
          }, {
            default: T(() => [
              U("查看SSML")
            ]),
            _: 1
          }),
          v(y(ie), { disabled: "" }, {
            default: T(() => [
              U("下载音频")
            ]),
            _: 1
          }),
          v(y(ie), { disabled: "" }, {
            default: T(() => [
              U("下载视频")
            ]),
            _: 1
          }),
          v(y(ie), { disabled: "" }, {
            default: T(() => [
              U("下载字幕")
            ]),
            _: 1
          }),
          v(y(ie), { disabled: "" }, {
            default: T(() => [
              U("声音转换")
            ]),
            _: 1
          }),
          ld
        ])
      ]),
      v(y(vr), {
        modelValue: t.value,
        "onUpdate:modelValue": p[4] || (p[4] = (m) => t.value = m),
        title: "查看SSML",
        width: "80%"
      }, {
        header: T(() => [
          v(y(ie), {
            type: "info",
            onClick: p[0] || (p[0] = (m) => l(!0))
          }, {
            default: T(() => [
              U("复制+关闭")
            ]),
            _: 1
          }),
          v(y(ie), {
            type: "primary",
            onClick: p[1] || (p[1] = (m) => l(!1))
          }, {
            default: T(() => [
              U("压缩+复制+关闭(推荐)")
            ]),
            _: 1
          })
        ]),
        footer: T(() => [
          h("span", cd, [
            v(y(ie), {
              type: "info",
              onClick: p[2] || (p[2] = (m) => l(!0))
            }, {
              default: T(() => [
                U("复制+关闭")
              ]),
              _: 1
            }),
            v(y(ie), {
              type: "primary",
              onClick: p[3] || (p[3] = (m) => l(!1))
            }, {
              default: T(() => [
                U("压缩+复制+关闭(推荐)")
              ]),
              _: 1
            })
          ])
        ]),
        default: T(() => [
          h("pre", ud, B(r.value), 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
});
const fd = /* @__PURE__ */ ce(dd, [["__scopeId", "data-v-fb2870b0"]]), pd = /* @__PURE__ */ A({
  __name: "editor-core",
  emits: ["created", "change"],
  setup(e, { emit: t }) {
    const { editor: n, setEditor: s, globalEditConfig: r } = me(), o = b(null);
    $e(() => {
      a();
    }), Jt(() => {
      n == null || n.destroy();
    });
    function a() {
      if (!o.value)
        return;
      const i = fr({
        selector: o.value,
        mode: "simple",
        config: {
          ...oe(r.editorConfig),
          onCreated(l) {
            t("created", l);
          },
          onChange(l) {
            t("change", l);
          }
        }
      });
      s(i), i.on(W.ERROR, r.handleError);
    }
    return (i, l) => (P(), D("div", {
      ref_key: "boxRef",
      ref: o,
      class: "edit-core",
      style: { height: "70vh", "overflow-y": "hidden" }
    }, null, 512));
  }
}), md = { class: "bar-view border-bottom border-1" }, vd = /* @__PURE__ */ A({
  __name: "bar-view",
  setup(e) {
    return (t, n) => (P(), D(Q, null, [
      h("div", md, [
        v(y(Ds), null, {
          default: T(() => [
            v(y(Ue), { divider: "green" }, {
              default: T(() => [
                v(y(te), {
                  text: "24K高清音质",
                  icon: "play",
                  disabled: ""
                })
              ]),
              _: 1
            }),
            v(y(Ue), { divider: "cyan" }, {
              default: T(() => [
                v(y(Hs)),
                v(y(Us)),
                v(y(Bs)),
                v(y(Fs)),
                v(y(zs)),
                v(y(Ws))
              ]),
              _: 1
            }),
            v(y(Ue), { divider: "orange" }, {
              default: T(() => [
                v(y(Gs)),
                v(y(Qs)),
                v(y(Zs))
              ]),
              _: 1
            }),
            v(y(Ue), { divider: "purple" }, {
              default: T(() => [
                v(y(Ys)),
                v(y(qs))
              ]),
              _: 1
            }),
            v(y(Ue), { divider: "yellow" }, {
              default: T(() => [
                v(y(Xs)),
                v(y(Ks))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      v(y(tr))
    ], 64));
  }
}), hd = { class: "editor-box" }, yd = { class: "editor-core-container shadow pt-1" }, gd = /* @__PURE__ */ A({
  __name: "editor-view",
  emits: ["created", "change"],
  setup(e, { emit: t }) {
    const n = (a) => {
      t("created", a);
    }, s = (a) => {
      t("change", a);
    };
    function r(a) {
      Ye.emit(Xe.VIEW_CLICK, a);
    }
    function o(a) {
      Ye.emit(Xe.VIEW_KEYDOWN, a);
    }
    return (a, i) => (P(), D("div", {
      class: "editor-view",
      onClick: r,
      onKeydown: o
    }, [
      v(fd),
      h("div", hd, [
        v(vd),
        h("div", yd, [
          v(pd, {
            onChange: s,
            onCreated: n
          })
        ])
      ])
    ], 32));
  }
});
const bd = /* @__PURE__ */ ce(gd, [["__scopeId", "data-v-c398e700"]]), _d = {
  install(e) {
    e.component("EditorView", bd);
  }
}, Sd = {
  install(e, t) {
    e.use(Gr()), e.use(() => {
      const { setGlobalEditConfig: n } = me(), s = Es(t);
      n(s), Ye.on(Xe.ERROR, s.handleError);
    }), e.use(Ma), e.use(gl), e.use(Oc), e.use(_d);
  }
};
export {
  Xe as EMITTER_EVENT,
  bd as EditorView,
  W as WANGEDITOR_EVENT,
  Es as createGlobalEditorConfig,
  Sd as default,
  Ts as defaultFilterSpeaker,
  He as defaultLabelValue,
  ja as defaultSpeaker,
  st as demoAvatar,
  Jr as pitch,
  Kr as speed
};

var Cy = Object.defineProperty;
var Ry = (n, s, r) => s in n ? Cy(n, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[s] = r;
var Pe = (n, s, r) => (Ry(n, typeof s != "symbol" ? s + "" : s, r), r);
import { effectScope as Mc, ref as L, markRaw as Fn, toRaw as St, isRef as Hn, isReactive as es, toRef as Wi, hasInjectionContext as ky, inject as Vc, getCurrentInstance as na, watch as Ye, unref as C, reactive as Ji, nextTick as hr, computed as Be, getCurrentScope as Uc, onScopeDispose as Fc, toRefs as Go, shallowRef as Ve, shallowReactive as Br, defineComponent as ce, openBlock as M, createElementBlock as K, normalizeClass as $t, withModifiers as st, createElementVNode as A, toDisplayString as me, createBlock as we, withCtx as X, createVNode as U, renderSlot as en, customRef as Ay, onMounted as Ct, watchEffect as Ty, Fragment as Re, renderList as De, createTextVNode as Qe, onUnmounted as ra, Teleport as Bc, withDirectives as pn, normalizeStyle as ts, vShow as hn, pushScopeId as ns, popScopeId as rs, createCommentVNode as Qt, provide as Oy } from "vue";
import { DomEditor as ie, SlateNode as ia, SlateEditor as He, SlateTransforms as Me, SlateRange as Rt, Boot as xt, SlateText as Gr, SlateElement as Iy, createEditor as Ny } from "@wangeditor/editor";
import { ElForm as is, ElInput as ss, ElPopover as vn, ElMenu as Ly, ElMenuItem as Py, ElSelect as Qu, ElOption as ju, ElIcon as sa, ElButton as Et, ElTag as Hc, ElSlider as No, ElDialog as Dy } from "element-plus";
import { Search as My, Loading as Vy, More as Uy, StarFilled as Fy, Star as By, Minus as Hy, Share as Wy } from "@element-plus/icons-vue";
var Wc = !1;
function Hi(n, s, r) {
  return Array.isArray(n) ? (n.length = Math.max(n.length, s), n.splice(s, 1, r), r) : (n[s] = r, r);
}
function Lo(n, s) {
  if (Array.isArray(n)) {
    n.splice(s, 1);
    return;
  }
  delete n[s];
}
function zy() {
  return zc().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function zc() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Gy = typeof Proxy == "function", qy = "devtools-plugin:setup", Ky = "plugin:settings:set";
let lr, qo;
function Yy() {
  var n;
  return lr !== void 0 || (typeof window < "u" && window.performance ? (lr = !0, qo = window.performance) : typeof global < "u" && (!((n = global.perf_hooks) === null || n === void 0) && n.performance) ? (lr = !0, qo = global.perf_hooks.performance) : lr = !1), lr;
}
function Xy() {
  return Yy() ? qo.now() : Date.now();
}
class Jy {
  constructor(s, r) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = s, this.hook = r;
    const o = {};
    if (s.settings)
      for (const d in s.settings) {
        const v = s.settings[d];
        o[d] = v.defaultValue;
      }
    const l = `__vue-devtools-plugin-settings__${s.id}`;
    let c = Object.assign({}, o);
    try {
      const d = localStorage.getItem(l), v = JSON.parse(d);
      Object.assign(c, v);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return c;
      },
      setSettings(d) {
        try {
          localStorage.setItem(l, JSON.stringify(d));
        } catch {
        }
        c = d;
      },
      now() {
        return Xy();
      }
    }, r && r.on(Ky, (d, v) => {
      d === this.plugin.id && this.fallbacks.setSettings(v);
    }), this.proxiedOn = new Proxy({}, {
      get: (d, v) => this.target ? this.target.on[v] : (...m) => {
        this.onQueue.push({
          method: v,
          args: m
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (d, v) => this.target ? this.target[v] : v === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(v) ? (...m) => (this.targetQueue.push({
        method: v,
        args: m,
        resolve: () => {
        }
      }), this.fallbacks[v](...m)) : (...m) => new Promise((h) => {
        this.targetQueue.push({
          method: v,
          args: m,
          resolve: h
        });
      })
    });
  }
  async setRealTarget(s) {
    this.target = s;
    for (const r of this.onQueue)
      this.target.on[r.method](...r.args);
    for (const r of this.targetQueue)
      r.resolve(await this.target[r.method](...r.args));
  }
}
function Gc(n, s) {
  const r = n, o = zc(), l = zy(), c = Gy && r.enableEarlyProxy;
  if (l && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !c))
    l.emit(qy, n, s);
  else {
    const d = c ? new Jy(r, l) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: r,
      setupFn: s,
      proxy: d
    }), d && s(d.proxiedTarget);
  }
}
/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let Hr;
const qr = (n) => Hr = n, qc = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Wn(n) {
  return n && typeof n == "object" && Object.prototype.toString.call(n) === "[object Object]" && typeof n.toJSON != "function";
}
var jt;
(function(n) {
  n.direct = "direct", n.patchObject = "patch object", n.patchFunction = "patch function";
})(jt || (jt = {}));
const os = typeof window < "u", Wr = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && os, ec = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function Zy(n, { autoBom: s = !1 } = {}) {
  return s && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(n.type) ? new Blob([String.fromCharCode(65279), n], { type: n.type }) : n;
}
function oa(n, s, r) {
  const o = new XMLHttpRequest();
  o.open("GET", n), o.responseType = "blob", o.onload = function() {
    Xc(o.response, s, r);
  }, o.onerror = function() {
    console.error("could not download file");
  }, o.send();
}
function Kc(n) {
  const s = new XMLHttpRequest();
  s.open("HEAD", n, !1);
  try {
    s.send();
  } catch {
  }
  return s.status >= 200 && s.status <= 299;
}
function zi(n) {
  try {
    n.dispatchEvent(new MouseEvent("click"));
  } catch {
    const r = document.createEvent("MouseEvents");
    r.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), n.dispatchEvent(r);
  }
}
const Gi = typeof navigator == "object" ? navigator : { userAgent: "" }, Yc = /* @__PURE__ */ (() => /Macintosh/.test(Gi.userAgent) && /AppleWebKit/.test(Gi.userAgent) && !/Safari/.test(Gi.userAgent))(), Xc = os ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Yc ? Qy : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in Gi ? jy : (
      // Fallback to using FileReader and a popup
      e0
    )
  )
) : () => {
};
function Qy(n, s = "download", r) {
  const o = document.createElement("a");
  o.download = s, o.rel = "noopener", typeof n == "string" ? (o.href = n, o.origin !== location.origin ? Kc(o.href) ? oa(n, s, r) : (o.target = "_blank", zi(o)) : zi(o)) : (o.href = URL.createObjectURL(n), setTimeout(function() {
    URL.revokeObjectURL(o.href);
  }, 4e4), setTimeout(function() {
    zi(o);
  }, 0));
}
function jy(n, s = "download", r) {
  if (typeof n == "string")
    if (Kc(n))
      oa(n, s, r);
    else {
      const o = document.createElement("a");
      o.href = n, o.target = "_blank", setTimeout(function() {
        zi(o);
      });
    }
  else
    navigator.msSaveOrOpenBlob(Zy(n, r), s);
}
function e0(n, s, r, o) {
  if (o = o || open("", "_blank"), o && (o.document.title = o.document.body.innerText = "downloading..."), typeof n == "string")
    return oa(n, s, r);
  const l = n.type === "application/octet-stream", c = /constructor/i.test(String(ec.HTMLElement)) || "safari" in ec, d = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((d || l && c || Yc) && typeof FileReader < "u") {
    const v = new FileReader();
    v.onloadend = function() {
      let m = v.result;
      if (typeof m != "string")
        throw o = null, new Error("Wrong reader.result type");
      m = d ? m : m.replace(/^data:[^;]*;/, "data:attachment/file;"), o ? o.location.href = m : location.assign(m), o = null;
    }, v.readAsDataURL(n);
  } else {
    const v = URL.createObjectURL(n);
    o ? o.location.assign(v) : location.href = v, o = null, setTimeout(function() {
      URL.revokeObjectURL(v);
    }, 4e4);
  }
}
function Ke(n, s) {
  const r = "🍍 " + n;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(r, s) : s === "error" ? console.error(r) : s === "warn" ? console.warn(r) : console.log(r);
}
function aa(n) {
  return "_a" in n && "install" in n;
}
function Jc() {
  if (!("clipboard" in navigator))
    return Ke("Your browser doesn't support the Clipboard API", "error"), !0;
}
function Zc(n) {
  return n instanceof Error && n.message.toLowerCase().includes("document is not focused") ? (Ke('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function t0(n) {
  if (!Jc())
    try {
      await navigator.clipboard.writeText(JSON.stringify(n.state.value)), Ke("Global state copied to clipboard.");
    } catch (s) {
      if (Zc(s))
        return;
      Ke("Failed to serialize the state. Check the console for more details.", "error"), console.error(s);
    }
}
async function n0(n) {
  if (!Jc())
    try {
      Qc(n, JSON.parse(await navigator.clipboard.readText())), Ke("Global state pasted from clipboard.");
    } catch (s) {
      if (Zc(s))
        return;
      Ke("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(s);
    }
}
async function r0(n) {
  try {
    Xc(new Blob([JSON.stringify(n.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (s) {
    Ke("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(s);
  }
}
let dn;
function i0() {
  dn || (dn = document.createElement("input"), dn.type = "file", dn.accept = ".json");
  function n() {
    return new Promise((s, r) => {
      dn.onchange = async () => {
        const o = dn.files;
        if (!o)
          return s(null);
        const l = o.item(0);
        return s(l ? { text: await l.text(), file: l } : null);
      }, dn.oncancel = () => s(null), dn.onerror = r, dn.click();
    });
  }
  return n;
}
async function s0(n) {
  try {
    const r = await i0()();
    if (!r)
      return;
    const { text: o, file: l } = r;
    Qc(n, JSON.parse(o)), Ke(`Global state imported from "${l.name}".`);
  } catch (s) {
    Ke("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(s);
  }
}
function Qc(n, s) {
  for (const r in s) {
    const o = n.state.value[r];
    o && Object.assign(o, s[r]);
  }
}
function qt(n) {
  return {
    _custom: {
      display: n
    }
  };
}
const jc = "🍍 Pinia (root)", Ko = "_root";
function o0(n) {
  return aa(n) ? {
    id: Ko,
    label: jc
  } : {
    id: n.$id,
    label: n.$id
  };
}
function a0(n) {
  if (aa(n)) {
    const r = Array.from(n._s.keys()), o = n._s;
    return {
      state: r.map((c) => ({
        editable: !0,
        key: c,
        value: n.state.value[c]
      })),
      getters: r.filter((c) => o.get(c)._getters).map((c) => {
        const d = o.get(c);
        return {
          editable: !1,
          key: c,
          value: d._getters.reduce((v, m) => (v[m] = d[m], v), {})
        };
      })
    };
  }
  const s = {
    state: Object.keys(n.$state).map((r) => ({
      editable: !0,
      key: r,
      value: n.$state[r]
    }))
  };
  return n._getters && n._getters.length && (s.getters = n._getters.map((r) => ({
    editable: !1,
    key: r,
    value: n[r]
  }))), n._customProperties.size && (s.customProperties = Array.from(n._customProperties).map((r) => ({
    editable: !0,
    key: r,
    value: n[r]
  }))), s;
}
function l0(n) {
  return n ? Array.isArray(n) ? n.reduce((s, r) => (s.keys.push(r.key), s.operations.push(r.type), s.oldValue[r.key] = r.oldValue, s.newValue[r.key] = r.newValue, s), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: qt(n.type),
    key: qt(n.key),
    oldValue: n.oldValue,
    newValue: n.newValue
  } : {};
}
function u0(n) {
  switch (n) {
    case jt.direct:
      return "mutation";
    case jt.patchFunction:
      return "$patch";
    case jt.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let dr = !0;
const qi = [], Vn = "pinia:mutations", nt = "pinia", { assign: c0 } = Object, Zi = (n) => "🍍 " + n;
function f0(n, s) {
  Gc({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: qi,
    app: n
  }, (r) => {
    typeof r.now != "function" && Ke("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), r.addTimelineLayer({
      id: Vn,
      label: "Pinia 🍍",
      color: 15064968
    }), r.addInspector({
      id: nt,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            t0(s);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await n0(s), r.sendInspectorTree(nt), r.sendInspectorState(nt);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            r0(s);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await s0(s), r.sendInspectorTree(nt), r.sendInspectorState(nt);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (o) => {
            const l = s._s.get(o);
            l ? typeof l.$reset != "function" ? Ke(`Cannot reset "${o}" store because it doesn't have a "$reset" method implemented.`, "warn") : (l.$reset(), Ke(`Store "${o}" reset.`)) : Ke(`Cannot reset "${o}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), r.on.inspectComponent((o, l) => {
      const c = o.componentInstance && o.componentInstance.proxy;
      if (c && c._pStores) {
        const d = o.componentInstance.proxy._pStores;
        Object.values(d).forEach((v) => {
          o.instanceData.state.push({
            type: Zi(v.$id),
            key: "state",
            editable: !0,
            value: v._isOptionsAPI ? {
              _custom: {
                value: St(v.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => v.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(v.$state).reduce((m, h) => (m[h] = v.$state[h], m), {})
            )
          }), v._getters && v._getters.length && o.instanceData.state.push({
            type: Zi(v.$id),
            key: "getters",
            editable: !1,
            value: v._getters.reduce((m, h) => {
              try {
                m[h] = v[h];
              } catch (y) {
                m[h] = y;
              }
              return m;
            }, {})
          });
        });
      }
    }), r.on.getInspectorTree((o) => {
      if (o.app === n && o.inspectorId === nt) {
        let l = [s];
        l = l.concat(Array.from(s._s.values())), o.rootNodes = (o.filter ? l.filter((c) => "$id" in c ? c.$id.toLowerCase().includes(o.filter.toLowerCase()) : jc.toLowerCase().includes(o.filter.toLowerCase())) : l).map(o0);
      }
    }), r.on.getInspectorState((o) => {
      if (o.app === n && o.inspectorId === nt) {
        const l = o.nodeId === Ko ? s : s._s.get(o.nodeId);
        if (!l)
          return;
        l && (o.state = a0(l));
      }
    }), r.on.editInspectorState((o, l) => {
      if (o.app === n && o.inspectorId === nt) {
        const c = o.nodeId === Ko ? s : s._s.get(o.nodeId);
        if (!c)
          return Ke(`store "${o.nodeId}" not found`, "error");
        const { path: d } = o;
        aa(c) ? d.unshift("state") : (d.length !== 1 || !c._customProperties.has(d[0]) || d[0] in c.$state) && d.unshift("$state"), dr = !1, o.set(c, d, o.state.value), dr = !0;
      }
    }), r.on.editComponentState((o) => {
      if (o.type.startsWith("🍍")) {
        const l = o.type.replace(/^🍍\s*/, ""), c = s._s.get(l);
        if (!c)
          return Ke(`store "${l}" not found`, "error");
        const { path: d } = o;
        if (d[0] !== "state")
          return Ke(`Invalid path for store "${l}":
${d}
Only state can be modified.`);
        d[0] = "$state", dr = !1, o.set(c, d, o.state.value), dr = !0;
      }
    });
  });
}
function d0(n, s) {
  qi.includes(Zi(s.$id)) || qi.push(Zi(s.$id)), Gc({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: qi,
    app: n,
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
  }, (r) => {
    const o = typeof r.now == "function" ? r.now.bind(r) : Date.now;
    s.$onAction(({ after: d, onError: v, name: m, args: h }) => {
      const y = ef++;
      r.addTimelineEvent({
        layerId: Vn,
        event: {
          time: o(),
          title: "🛫 " + m,
          subtitle: "start",
          data: {
            store: qt(s.$id),
            action: qt(m),
            args: h
          },
          groupId: y
        }
      }), d((S) => {
        Cn = void 0, r.addTimelineEvent({
          layerId: Vn,
          event: {
            time: o(),
            title: "🛬 " + m,
            subtitle: "end",
            data: {
              store: qt(s.$id),
              action: qt(m),
              args: h,
              result: S
            },
            groupId: y
          }
        });
      }), v((S) => {
        Cn = void 0, r.addTimelineEvent({
          layerId: Vn,
          event: {
            time: o(),
            logType: "error",
            title: "💥 " + m,
            subtitle: "end",
            data: {
              store: qt(s.$id),
              action: qt(m),
              args: h,
              error: S
            },
            groupId: y
          }
        });
      });
    }, !0), s._customProperties.forEach((d) => {
      Ye(() => C(s[d]), (v, m) => {
        r.notifyComponentUpdate(), r.sendInspectorState(nt), dr && r.addTimelineEvent({
          layerId: Vn,
          event: {
            time: o(),
            title: "Change",
            subtitle: d,
            data: {
              newValue: v,
              oldValue: m
            },
            groupId: Cn
          }
        });
      }, { deep: !0 });
    }), s.$subscribe(({ events: d, type: v }, m) => {
      if (r.notifyComponentUpdate(), r.sendInspectorState(nt), !dr)
        return;
      const h = {
        time: o(),
        title: u0(v),
        data: c0({ store: qt(s.$id) }, l0(d)),
        groupId: Cn
      };
      v === jt.patchFunction ? h.subtitle = "⤵️" : v === jt.patchObject ? h.subtitle = "🧩" : d && !Array.isArray(d) && (h.subtitle = d.type), d && (h.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: d
        }
      }), r.addTimelineEvent({
        layerId: Vn,
        event: h
      });
    }, { detached: !0, flush: "sync" });
    const l = s._hotUpdate;
    s._hotUpdate = Fn((d) => {
      l(d), r.addTimelineEvent({
        layerId: Vn,
        event: {
          time: o(),
          title: "🔥 " + s.$id,
          subtitle: "HMR update",
          data: {
            store: qt(s.$id),
            info: qt("HMR update")
          }
        }
      }), r.notifyComponentUpdate(), r.sendInspectorTree(nt), r.sendInspectorState(nt);
    });
    const { $dispose: c } = s;
    s.$dispose = () => {
      c(), r.notifyComponentUpdate(), r.sendInspectorTree(nt), r.sendInspectorState(nt), r.getSettings().logStoreChanges && Ke(`Disposed "${s.$id}" store 🗑`);
    }, r.notifyComponentUpdate(), r.sendInspectorTree(nt), r.sendInspectorState(nt), r.getSettings().logStoreChanges && Ke(`"${s.$id}" store installed 🆕`);
  });
}
let ef = 0, Cn;
function tc(n, s, r) {
  const o = s.reduce((l, c) => (l[c] = St(n)[c], l), {});
  for (const l in o)
    n[l] = function() {
      const c = ef, d = r ? new Proxy(n, {
        get(...m) {
          return Cn = c, Reflect.get(...m);
        },
        set(...m) {
          return Cn = c, Reflect.set(...m);
        }
      }) : n;
      Cn = c;
      const v = o[l].apply(d, arguments);
      return Cn = void 0, v;
    };
}
function p0({ app: n, store: s, options: r }) {
  if (s.$id.startsWith("__hot:"))
    return;
  s._isOptionsAPI = !!r.state, tc(s, Object.keys(r.actions), s._isOptionsAPI);
  const o = s._hotUpdate;
  St(s)._hotUpdate = function(l) {
    o.apply(this, arguments), tc(s, Object.keys(l._hmrPayload.actions), !!s._isOptionsAPI);
  }, d0(
    n,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    s
  );
}
function h0() {
  const n = Mc(!0), s = n.run(() => L({}));
  let r = [], o = [];
  const l = Fn({
    install(c) {
      qr(l), l._a = c, c.provide(qc, l), c.config.globalProperties.$pinia = l, Wr && f0(c, l), o.forEach((d) => r.push(d)), o = [];
    },
    use(c) {
      return !this._a && !Wc ? o.push(c) : r.push(c), this;
    },
    _p: r,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: n,
    _s: /* @__PURE__ */ new Map(),
    state: s
  });
  return Wr && typeof Proxy < "u" && l.use(p0), l;
}
function tf(n, s) {
  for (const r in s) {
    const o = s[r];
    if (!(r in n))
      continue;
    const l = n[r];
    Wn(l) && Wn(o) && !Hn(o) && !es(o) ? n[r] = tf(l, o) : n[r] = o;
  }
  return n;
}
const nf = () => {
};
function nc(n, s, r, o = nf) {
  n.push(s);
  const l = () => {
    const c = n.indexOf(s);
    c > -1 && (n.splice(c, 1), o());
  };
  return !r && Uc() && Fc(l), l;
}
function ur(n, ...s) {
  n.slice().forEach((r) => {
    r(...s);
  });
}
const v0 = (n) => n();
function Yo(n, s) {
  n instanceof Map && s instanceof Map && s.forEach((r, o) => n.set(o, r)), n instanceof Set && s instanceof Set && s.forEach(n.add, n);
  for (const r in s) {
    if (!s.hasOwnProperty(r))
      continue;
    const o = s[r], l = n[r];
    Wn(l) && Wn(o) && n.hasOwnProperty(r) && !Hn(o) && !es(o) ? n[r] = Yo(l, o) : n[r] = o;
  }
  return n;
}
const m0 = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function g0(n) {
  return !Wn(n) || !n.hasOwnProperty(m0);
}
const { assign: Mt } = Object;
function rc(n) {
  return !!(Hn(n) && n.effect);
}
function ic(n, s, r, o) {
  const { state: l, actions: c, getters: d } = s, v = r.state.value[n];
  let m;
  function h() {
    !v && (process.env.NODE_ENV === "production" || !o) && (r.state.value[n] = l ? l() : {});
    const y = process.env.NODE_ENV !== "production" && o ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      Go(L(l ? l() : {}).value)
    ) : Go(r.state.value[n]);
    return Mt(y, c, Object.keys(d || {}).reduce((S, $) => (process.env.NODE_ENV !== "production" && $ in y && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${$}" in store "${n}".`), S[$] = Fn(Be(() => {
      qr(r);
      const k = r._s.get(n);
      return d[$].call(k, k);
    })), S), {}));
  }
  return m = Xo(n, h, s, r, o, !0), m;
}
function Xo(n, s, r = {}, o, l, c) {
  let d;
  const v = Mt({ actions: {} }, r);
  if (process.env.NODE_ENV !== "production" && !o._e.active)
    throw new Error("Pinia destroyed");
  const m = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !Wc && (m.onTrigger = (G) => {
    h ? k = G : h == !1 && !P._hotUpdating && (Array.isArray(k) ? k.push(G) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let h, y, S = [], $ = [], k;
  const x = o.state.value[n];
  !c && !x && (process.env.NODE_ENV === "production" || !l) && (o.state.value[n] = {});
  const b = L({});
  let D;
  function B(G) {
    let q;
    h = y = !1, process.env.NODE_ENV !== "production" && (k = []), typeof G == "function" ? (G(o.state.value[n]), q = {
      type: jt.patchFunction,
      storeId: n,
      events: k
    }) : (Yo(o.state.value[n], G), q = {
      type: jt.patchObject,
      payload: G,
      storeId: n,
      events: k
    });
    const z = D = Symbol();
    hr().then(() => {
      D === z && (h = !0);
    }), y = !0, ur(S, q, o.state.value[n]);
  }
  const H = c ? function() {
    const { state: q } = r, z = q ? q() : {};
    this.$patch((Q) => {
      Mt(Q, z);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${n}" is built using the setup syntax and does not implement $reset().`);
    } : nf
  );
  function O() {
    d.stop(), S = [], $ = [], o._s.delete(n);
  }
  function W(G, q) {
    return function() {
      qr(o);
      const z = Array.from(arguments), Q = [], fe = [];
      function Xe(Se) {
        Q.push(Se);
      }
      function Yt(Se) {
        fe.push(Se);
      }
      ur($, {
        args: z,
        name: G,
        store: P,
        after: Xe,
        onError: Yt
      });
      let Ge;
      try {
        Ge = q.apply(this && this.$id === n ? this : P, z);
      } catch (Se) {
        throw ur(fe, Se), Se;
      }
      return Ge instanceof Promise ? Ge.then((Se) => (ur(Q, Se), Se)).catch((Se) => (ur(fe, Se), Promise.reject(Se))) : (ur(Q, Ge), Ge);
    };
  }
  const J = /* @__PURE__ */ Fn({
    actions: {},
    getters: {},
    state: [],
    hotState: b
  }), ee = {
    _p: o,
    // _s: scope,
    $id: n,
    $onAction: nc.bind(null, $),
    $patch: B,
    $reset: H,
    $subscribe(G, q = {}) {
      const z = nc(S, G, q.detached, () => Q()), Q = d.run(() => Ye(() => o.state.value[n], (fe) => {
        (q.flush === "sync" ? y : h) && G({
          storeId: n,
          type: jt.direct,
          events: k
        }, fe);
      }, Mt({}, m, q)));
      return z;
    },
    $dispose: O
  }, P = Ji(process.env.NODE_ENV !== "production" || Wr ? Mt(
    {
      _hmrPayload: J,
      _customProperties: Fn(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    ee
    // must be added later
    // setupStore
  ) : ee);
  o._s.set(n, P);
  const ve = o._a && o._a.runWithContext || v0, Ae = o._e.run(() => (d = Mc(), ve(() => d.run(s))));
  for (const G in Ae) {
    const q = Ae[G];
    if (Hn(q) && !rc(q) || es(q))
      process.env.NODE_ENV !== "production" && l ? Hi(b.value, G, Wi(Ae, G)) : c || (x && g0(q) && (Hn(q) ? q.value = x[G] : Yo(q, x[G])), o.state.value[n][G] = q), process.env.NODE_ENV !== "production" && J.state.push(G);
    else if (typeof q == "function") {
      const z = process.env.NODE_ENV !== "production" && l ? q : W(G, q);
      Ae[G] = z, process.env.NODE_ENV !== "production" && (J.actions[G] = q), v.actions[G] = q;
    } else
      process.env.NODE_ENV !== "production" && rc(q) && (J.getters[G] = c ? (
        // @ts-expect-error
        r.getters[G]
      ) : q, os && (Ae._getters || // @ts-expect-error: same
      (Ae._getters = Fn([]))).push(G));
  }
  if (Mt(P, Ae), Mt(St(P), Ae), Object.defineProperty(P, "$state", {
    get: () => process.env.NODE_ENV !== "production" && l ? b.value : o.state.value[n],
    set: (G) => {
      if (process.env.NODE_ENV !== "production" && l)
        throw new Error("cannot set hotState");
      B((q) => {
        Mt(q, G);
      });
    }
  }), process.env.NODE_ENV !== "production" && (P._hotUpdate = Fn((G) => {
    P._hotUpdating = !0, G._hmrPayload.state.forEach((q) => {
      if (q in P.$state) {
        const z = G.$state[q], Q = P.$state[q];
        typeof z == "object" && Wn(z) && Wn(Q) ? tf(z, Q) : G.$state[q] = Q;
      }
      Hi(P, q, Wi(G.$state, q));
    }), Object.keys(P.$state).forEach((q) => {
      q in G.$state || Lo(P, q);
    }), h = !1, y = !1, o.state.value[n] = Wi(G._hmrPayload, "hotState"), y = !0, hr().then(() => {
      h = !0;
    });
    for (const q in G._hmrPayload.actions) {
      const z = G[q];
      Hi(P, q, W(q, z));
    }
    for (const q in G._hmrPayload.getters) {
      const z = G._hmrPayload.getters[q], Q = c ? (
        // special handling of options api
        Be(() => (qr(o), z.call(P, P)))
      ) : z;
      Hi(P, q, Q);
    }
    Object.keys(P._hmrPayload.getters).forEach((q) => {
      q in G._hmrPayload.getters || Lo(P, q);
    }), Object.keys(P._hmrPayload.actions).forEach((q) => {
      q in G._hmrPayload.actions || Lo(P, q);
    }), P._hmrPayload = G._hmrPayload, P._getters = G._getters, P._hotUpdating = !1;
  })), Wr) {
    const G = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((q) => {
      Object.defineProperty(P, q, Mt({ value: P[q] }, G));
    });
  }
  return o._p.forEach((G) => {
    if (Wr) {
      const q = d.run(() => G({
        store: P,
        app: o._a,
        pinia: o,
        options: v
      }));
      Object.keys(q || {}).forEach((z) => P._customProperties.add(z)), Mt(P, q);
    } else
      Mt(P, d.run(() => G({
        store: P,
        app: o._a,
        pinia: o,
        options: v
      })));
  }), process.env.NODE_ENV !== "production" && P.$state && typeof P.$state == "object" && typeof P.$state.constructor == "function" && !P.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${P.$id}".`), x && c && r.hydrate && r.hydrate(P.$state, x), h = !0, y = !0, P;
}
function as(n, s, r) {
  let o, l;
  const c = typeof s == "function";
  if (typeof n == "string")
    o = n, l = c ? r : s;
  else if (l = n, o = n.id, process.env.NODE_ENV !== "production" && typeof o != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function d(v, m) {
    const h = ky();
    if (v = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && Hr && Hr._testing ? null : v) || (h ? Vc(qc, null) : null), v && qr(v), process.env.NODE_ENV !== "production" && !Hr)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    v = Hr, v._s.has(o) || (c ? Xo(o, s, l, v) : ic(o, l, v), process.env.NODE_ENV !== "production" && (d._pinia = v));
    const y = v._s.get(o);
    if (process.env.NODE_ENV !== "production" && m) {
      const S = "__hot:" + o, $ = c ? Xo(S, s, l, v, !0) : ic(S, Mt({}, l), v, !0);
      m._hotUpdate($), delete v.state.value[S], v._s.delete(S);
    }
    if (process.env.NODE_ENV !== "production" && os) {
      const S = na();
      if (S && S.proxy && // avoid adding stores that are just built for hot module replacement
      !m) {
        const $ = S.proxy, k = "_pStores" in $ ? $._pStores : $._pStores = {};
        k[o] = y;
      }
    }
    return y;
  }
  return d.$id = o, d;
}
function rf(n) {
  {
    n = St(n);
    const s = {};
    for (const r in n) {
      const o = n[r];
      (Hn(o) || es(o)) && (s[r] = // ---
      Wi(n, r));
    }
    return s;
  }
}
function Po() {
  return { id: "", src: "" };
}
const _0 = () => [
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
], y0 = () => [
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
function b0(n) {
  return `${(0.05 * n * 100).toFixed(0)}%`;
}
function w0(n) {
  return `${((n - 1) * 100).toFixed(0)}%`;
}
function sf() {
  return {
    category: "",
    name: "",
    role: "",
    style: "",
    speed: "1.0",
    pitch: "0"
  };
}
function x0() {
  return { ...sf(), id: "", label: "" };
}
function Dt() {
  return () => Promise.resolve([]);
}
function of(n) {
  const s = (n == null ? void 0 : n.editorConfig) || { maxLength: 5e3, placeholder: "请输入内容..." }, r = (n == null ? void 0 : n.handleError) || (() => {
  }), o = (n == null ? void 0 : n.pinyin) || { fetchData: Dt() }, l = (n == null ? void 0 : n.english) || { fetchData: Dt() }, c = (n == null ? void 0 : n.special) || {
    fetchData: Dt(),
    fetchScene: Dt(),
    fetchStyle: Dt()
  }, d = (n == null ? void 0 : n.bgm) || {
    fetchData: Dt(),
    fetchScene: Dt(),
    fetchStyle: Dt()
  }, v = (n == null ? void 0 : n.tryPlay) || {
    play: () => Promise.resolve(Po()),
    fetchData: Dt(),
    featchTag: Dt(),
    fetchStar: () => Promise.resolve(!0)
  }, m = (n == null ? void 0 : n.conversion) || {
    timeoutMilliseconds: 2e4,
    audioUpload: () => Promise.resolve(Po()),
    transfer: () => Promise.resolve(Po()),
    fetchSpeaker: Dt()
  }, h = (n == null ? void 0 : n.management) || {
    recordRecentUsage: () => Promise.resolve(x0()),
    fetchRecentUsage: Dt(),
    deleteRecentUsage: () => Promise.resolve()
  }, y = c, S = d, $ = v;
  return y.menus ?? (y.menus = [
    { label: "默认音效", value: "" },
    { label: "自定义音效", value: "custom" },
    { label: "最近音效", value: "history" }
  ]), S.menus ?? (S.menus = [
    { label: "默认配乐", value: "" },
    { label: "自定义配乐", value: "custom" },
    { label: "最近配乐", value: "history" }
  ]), $.gender ?? ($.gender = [
    { label: "全部", value: "" },
    { label: "男声", value: "Male" },
    { label: "女声", value: "Female" }
  ]), $.topFlag ?? ($.topFlag = [
    { label: "热榜", value: "" },
    { label: "SVIP", value: "SVIP" },
    { label: "付费", value: "付费" }
  ]), $.category ?? ($.category = [
    { label: "常用", value: "常用" },
    { label: "已购", value: "已购" },
    { label: "收藏", value: "收藏" },
    { label: "我的", value: "我的" }
  ]), {
    editorConfig: s,
    handleError: r,
    pinyin: o,
    english: l,
    bgm: S,
    special: y,
    tryPlay: $,
    conversion: m,
    management: h
  };
}
const E0 = () => ({
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
}), S0 = () => ({
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
}), Kr = () => "https://img.sdaxia.top/upload/4314c841777e4d20901cd5d04a28e91a.png", ut = as("--editor-config", () => {
  const n = Ve(), s = Ve(), r = Be(() => n.value), o = Be(() => {
    if (s.value)
      return s.value;
    throw Error("请设置GlobalEditorConfig");
  });
  return { editor: r, globalEditConfig: o, setEditor: (d) => {
    n.value = d;
  }, setGlobalEditConfig: (d) => {
    s.value = d ?? of();
  } };
}), $0 = (n) => {
  const { isInline: s, isVoid: r } = n, o = n;
  return o.isInline = (l) => ie.getNodeType(l) === "ssml-audio" ? !0 : s(l), o.isVoid = (l) => ie.getNodeType(l) === "ssml-audio" ? !ia.string(l) : r(l), o;
};
function Jo(n, s, r, o, l) {
  const c = s === void 0 ? void 0 : s.key;
  return { sel: n, data: s, children: r, text: o, elm: l, key: c };
}
const sc = Array.isArray;
function Do(n) {
  return typeof n == "string" || typeof n == "number" || n instanceof String || n instanceof Number;
}
function af(n, s, r) {
  if (n.ns = "http://www.w3.org/2000/svg", r !== "foreignObject" && s !== void 0)
    for (let o = 0; o < s.length; ++o) {
      const l = s[o];
      if (typeof l == "string")
        continue;
      const c = l.data;
      c !== void 0 && af(c, l.children, l.sel);
    }
}
function oc(n, s, r) {
  let o = {}, l, c, d;
  if (r !== void 0 ? (s !== null && (o = s), sc(r) ? l = r : Do(r) ? c = r.toString() : r && r.sel && (l = [r])) : s != null && (sc(s) ? l = s : Do(s) ? c = s.toString() : s && s.sel ? l = [s] : o = s), l !== void 0)
    for (d = 0; d < l.length; ++d)
      Do(l[d]) && (l[d] = Jo(void 0, void 0, void 0, l[d], void 0));
  return n[0] === "s" && n[1] === "v" && n[2] === "g" && (n.length === 3 || n[3] === "." || n[3] === "#") && af(o, l, n), Jo(n, o, l, c, void 0);
}
function lf(n, s) {
  for (const r of n)
    r != null && r !== !1 && r !== "" && (Array.isArray(r) ? lf(r, s) : typeof r == "string" || typeof r == "number" || typeof r == "boolean" ? s.push(Jo(void 0, void 0, void 0, String(r), void 0)) : s.push(r));
  return s;
}
function F(n, s, ...r) {
  const o = lf(r, []);
  return typeof n == "function" ? n(s, o) : o.length === 1 && !o[0].sel && o[0].text ? oc(n, s, o[0].text) : oc(n, s, o);
}
F || (F = {});
var Un = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function uf(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Qi = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Qi.exports;
(function(n, s) {
  (function() {
    var r, o = "4.17.21", l = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", v = "Invalid `variable` option passed into `_.template`", m = "__lodash_hash_undefined__", h = 500, y = "__lodash_placeholder__", S = 1, $ = 2, k = 4, x = 1, b = 2, D = 1, B = 2, H = 4, O = 8, W = 16, J = 32, ee = 64, P = 128, ve = 256, Ae = 512, G = 30, q = "...", z = 800, Q = 16, fe = 1, Xe = 2, Yt = 3, Ge = 1 / 0, Se = 9007199254740991, Gn = 17976931348623157e292, $e = 0 / 0, Ne = 4294967295, Xr = Ne - 1, Jr = Ne >>> 1, qn = [
      ["ary", P],
      ["bind", D],
      ["bindKey", B],
      ["curry", O],
      ["curryRight", W],
      ["flip", Ae],
      ["partial", J],
      ["partialRight", ee],
      ["rearg", ve]
    ], mn = "[object Arguments]", kn = "[object Array]", ba = "[object AsyncFunction]", yr = "[object Boolean]", br = "[object Date]", Hf = "[object DOMException]", Zr = "[object Error]", Qr = "[object Function]", wa = "[object GeneratorFunction]", Ft = "[object Map]", wr = "[object Number]", Wf = "[object Null]", tn = "[object Object]", xa = "[object Promise]", zf = "[object Proxy]", xr = "[object RegExp]", Bt = "[object Set]", Er = "[object String]", jr = "[object Symbol]", Gf = "[object Undefined]", Sr = "[object WeakMap]", qf = "[object WeakSet]", $r = "[object ArrayBuffer]", Kn = "[object DataView]", fs = "[object Float32Array]", ds = "[object Float64Array]", ps = "[object Int8Array]", hs = "[object Int16Array]", vs = "[object Int32Array]", ms = "[object Uint8Array]", gs = "[object Uint8ClampedArray]", _s = "[object Uint16Array]", ys = "[object Uint32Array]", Kf = /\b__p \+= '';/g, Yf = /\b(__p \+=) '' \+/g, Xf = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ea = /&(?:amp|lt|gt|quot|#39);/g, Sa = /[&<>"']/g, Jf = RegExp(Ea.source), Zf = RegExp(Sa.source), Qf = /<%-([\s\S]+?)%>/g, jf = /<%([\s\S]+?)%>/g, $a = /<%=([\s\S]+?)%>/g, ed = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, td = /^\w*$/, nd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, bs = /[\\^$.*+?()[\]{}|]/g, rd = RegExp(bs.source), ws = /^\s+/, id = /\s/, sd = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, od = /\{\n\/\* \[wrapped with (.+)\] \*/, ad = /,? & /, ld = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ud = /[()=,{}\[\]\/\s]/, cd = /\\(\\)?/g, fd = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ca = /\w*$/, dd = /^[-+]0x[0-9a-f]+$/i, pd = /^0b[01]+$/i, hd = /^\[object .+?Constructor\]$/, vd = /^0o[0-7]+$/i, md = /^(?:0|[1-9]\d*)$/, gd = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ei = /($^)/, _d = /['\n\r\u2028\u2029\\]/g, ti = "\\ud800-\\udfff", yd = "\\u0300-\\u036f", bd = "\\ufe20-\\ufe2f", wd = "\\u20d0-\\u20ff", Ra = yd + bd + wd, ka = "\\u2700-\\u27bf", Aa = "a-z\\xdf-\\xf6\\xf8-\\xff", xd = "\\xac\\xb1\\xd7\\xf7", Ed = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Sd = "\\u2000-\\u206f", $d = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ta = "A-Z\\xc0-\\xd6\\xd8-\\xde", Oa = "\\ufe0e\\ufe0f", Ia = xd + Ed + Sd + $d, xs = "['’]", Cd = "[" + ti + "]", Na = "[" + Ia + "]", ni = "[" + Ra + "]", La = "\\d+", Rd = "[" + ka + "]", Pa = "[" + Aa + "]", Da = "[^" + ti + Ia + La + ka + Aa + Ta + "]", Es = "\\ud83c[\\udffb-\\udfff]", kd = "(?:" + ni + "|" + Es + ")", Ma = "[^" + ti + "]", Ss = "(?:\\ud83c[\\udde6-\\uddff]){2}", $s = "[\\ud800-\\udbff][\\udc00-\\udfff]", Yn = "[" + Ta + "]", Va = "\\u200d", Ua = "(?:" + Pa + "|" + Da + ")", Ad = "(?:" + Yn + "|" + Da + ")", Fa = "(?:" + xs + "(?:d|ll|m|re|s|t|ve))?", Ba = "(?:" + xs + "(?:D|LL|M|RE|S|T|VE))?", Ha = kd + "?", Wa = "[" + Oa + "]?", Td = "(?:" + Va + "(?:" + [Ma, Ss, $s].join("|") + ")" + Wa + Ha + ")*", Od = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Id = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", za = Wa + Ha + Td, Nd = "(?:" + [Rd, Ss, $s].join("|") + ")" + za, Ld = "(?:" + [Ma + ni + "?", ni, Ss, $s, Cd].join("|") + ")", Pd = RegExp(xs, "g"), Dd = RegExp(ni, "g"), Cs = RegExp(Es + "(?=" + Es + ")|" + Ld + za, "g"), Md = RegExp([
      Yn + "?" + Pa + "+" + Fa + "(?=" + [Na, Yn, "$"].join("|") + ")",
      Ad + "+" + Ba + "(?=" + [Na, Yn + Ua, "$"].join("|") + ")",
      Yn + "?" + Ua + "+" + Fa,
      Yn + "+" + Ba,
      Id,
      Od,
      La,
      Nd
    ].join("|"), "g"), Vd = RegExp("[" + Va + ti + Ra + Oa + "]"), Ud = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Fd = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], Bd = -1, ke = {};
    ke[fs] = ke[ds] = ke[ps] = ke[hs] = ke[vs] = ke[ms] = ke[gs] = ke[_s] = ke[ys] = !0, ke[mn] = ke[kn] = ke[$r] = ke[yr] = ke[Kn] = ke[br] = ke[Zr] = ke[Qr] = ke[Ft] = ke[wr] = ke[tn] = ke[xr] = ke[Bt] = ke[Er] = ke[Sr] = !1;
    var Ce = {};
    Ce[mn] = Ce[kn] = Ce[$r] = Ce[Kn] = Ce[yr] = Ce[br] = Ce[fs] = Ce[ds] = Ce[ps] = Ce[hs] = Ce[vs] = Ce[Ft] = Ce[wr] = Ce[tn] = Ce[xr] = Ce[Bt] = Ce[Er] = Ce[jr] = Ce[ms] = Ce[gs] = Ce[_s] = Ce[ys] = !0, Ce[Zr] = Ce[Qr] = Ce[Sr] = !1;
    var Hd = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, Wd = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, zd = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Gd = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, qd = parseFloat, Kd = parseInt, Ga = typeof Un == "object" && Un && Un.Object === Object && Un, Yd = typeof self == "object" && self && self.Object === Object && self, Je = Ga || Yd || Function("return this")(), Rs = s && !s.nodeType && s, An = Rs && !0 && n && !n.nodeType && n, qa = An && An.exports === Rs, ks = qa && Ga.process, kt = function() {
      try {
        var w = An && An.require && An.require("util").types;
        return w || ks && ks.binding && ks.binding("util");
      } catch {
      }
    }(), Ka = kt && kt.isArrayBuffer, Ya = kt && kt.isDate, Xa = kt && kt.isMap, Ja = kt && kt.isRegExp, Za = kt && kt.isSet, Qa = kt && kt.isTypedArray;
    function mt(w, T, R) {
      switch (R.length) {
        case 0:
          return w.call(T);
        case 1:
          return w.call(T, R[0]);
        case 2:
          return w.call(T, R[0], R[1]);
        case 3:
          return w.call(T, R[0], R[1], R[2]);
      }
      return w.apply(T, R);
    }
    function Xd(w, T, R, Z) {
      for (var se = -1, ge = w == null ? 0 : w.length; ++se < ge; ) {
        var We = w[se];
        T(Z, We, R(We), w);
      }
      return Z;
    }
    function At(w, T) {
      for (var R = -1, Z = w == null ? 0 : w.length; ++R < Z && T(w[R], R, w) !== !1; )
        ;
      return w;
    }
    function Jd(w, T) {
      for (var R = w == null ? 0 : w.length; R-- && T(w[R], R, w) !== !1; )
        ;
      return w;
    }
    function ja(w, T) {
      for (var R = -1, Z = w == null ? 0 : w.length; ++R < Z; )
        if (!T(w[R], R, w))
          return !1;
      return !0;
    }
    function gn(w, T) {
      for (var R = -1, Z = w == null ? 0 : w.length, se = 0, ge = []; ++R < Z; ) {
        var We = w[R];
        T(We, R, w) && (ge[se++] = We);
      }
      return ge;
    }
    function ri(w, T) {
      var R = w == null ? 0 : w.length;
      return !!R && Xn(w, T, 0) > -1;
    }
    function As(w, T, R) {
      for (var Z = -1, se = w == null ? 0 : w.length; ++Z < se; )
        if (R(T, w[Z]))
          return !0;
      return !1;
    }
    function Te(w, T) {
      for (var R = -1, Z = w == null ? 0 : w.length, se = Array(Z); ++R < Z; )
        se[R] = T(w[R], R, w);
      return se;
    }
    function _n(w, T) {
      for (var R = -1, Z = T.length, se = w.length; ++R < Z; )
        w[se + R] = T[R];
      return w;
    }
    function Ts(w, T, R, Z) {
      var se = -1, ge = w == null ? 0 : w.length;
      for (Z && ge && (R = w[++se]); ++se < ge; )
        R = T(R, w[se], se, w);
      return R;
    }
    function Zd(w, T, R, Z) {
      var se = w == null ? 0 : w.length;
      for (Z && se && (R = w[--se]); se--; )
        R = T(R, w[se], se, w);
      return R;
    }
    function Os(w, T) {
      for (var R = -1, Z = w == null ? 0 : w.length; ++R < Z; )
        if (T(w[R], R, w))
          return !0;
      return !1;
    }
    var Qd = Is("length");
    function jd(w) {
      return w.split("");
    }
    function ep(w) {
      return w.match(ld) || [];
    }
    function el(w, T, R) {
      var Z;
      return R(w, function(se, ge, We) {
        if (T(se, ge, We))
          return Z = ge, !1;
      }), Z;
    }
    function ii(w, T, R, Z) {
      for (var se = w.length, ge = R + (Z ? 1 : -1); Z ? ge-- : ++ge < se; )
        if (T(w[ge], ge, w))
          return ge;
      return -1;
    }
    function Xn(w, T, R) {
      return T === T ? dp(w, T, R) : ii(w, tl, R);
    }
    function tp(w, T, R, Z) {
      for (var se = R - 1, ge = w.length; ++se < ge; )
        if (Z(w[se], T))
          return se;
      return -1;
    }
    function tl(w) {
      return w !== w;
    }
    function nl(w, T) {
      var R = w == null ? 0 : w.length;
      return R ? Ls(w, T) / R : $e;
    }
    function Is(w) {
      return function(T) {
        return T == null ? r : T[w];
      };
    }
    function Ns(w) {
      return function(T) {
        return w == null ? r : w[T];
      };
    }
    function rl(w, T, R, Z, se) {
      return se(w, function(ge, We, Ee) {
        R = Z ? (Z = !1, ge) : T(R, ge, We, Ee);
      }), R;
    }
    function np(w, T) {
      var R = w.length;
      for (w.sort(T); R--; )
        w[R] = w[R].value;
      return w;
    }
    function Ls(w, T) {
      for (var R, Z = -1, se = w.length; ++Z < se; ) {
        var ge = T(w[Z]);
        ge !== r && (R = R === r ? ge : R + ge);
      }
      return R;
    }
    function Ps(w, T) {
      for (var R = -1, Z = Array(w); ++R < w; )
        Z[R] = T(R);
      return Z;
    }
    function rp(w, T) {
      return Te(T, function(R) {
        return [R, w[R]];
      });
    }
    function il(w) {
      return w && w.slice(0, ll(w) + 1).replace(ws, "");
    }
    function gt(w) {
      return function(T) {
        return w(T);
      };
    }
    function Ds(w, T) {
      return Te(T, function(R) {
        return w[R];
      });
    }
    function Cr(w, T) {
      return w.has(T);
    }
    function sl(w, T) {
      for (var R = -1, Z = w.length; ++R < Z && Xn(T, w[R], 0) > -1; )
        ;
      return R;
    }
    function ol(w, T) {
      for (var R = w.length; R-- && Xn(T, w[R], 0) > -1; )
        ;
      return R;
    }
    function ip(w, T) {
      for (var R = w.length, Z = 0; R--; )
        w[R] === T && ++Z;
      return Z;
    }
    var sp = Ns(Hd), op = Ns(Wd);
    function ap(w) {
      return "\\" + Gd[w];
    }
    function lp(w, T) {
      return w == null ? r : w[T];
    }
    function Jn(w) {
      return Vd.test(w);
    }
    function up(w) {
      return Ud.test(w);
    }
    function cp(w) {
      for (var T, R = []; !(T = w.next()).done; )
        R.push(T.value);
      return R;
    }
    function Ms(w) {
      var T = -1, R = Array(w.size);
      return w.forEach(function(Z, se) {
        R[++T] = [se, Z];
      }), R;
    }
    function al(w, T) {
      return function(R) {
        return w(T(R));
      };
    }
    function yn(w, T) {
      for (var R = -1, Z = w.length, se = 0, ge = []; ++R < Z; ) {
        var We = w[R];
        (We === T || We === y) && (w[R] = y, ge[se++] = R);
      }
      return ge;
    }
    function si(w) {
      var T = -1, R = Array(w.size);
      return w.forEach(function(Z) {
        R[++T] = Z;
      }), R;
    }
    function fp(w) {
      var T = -1, R = Array(w.size);
      return w.forEach(function(Z) {
        R[++T] = [Z, Z];
      }), R;
    }
    function dp(w, T, R) {
      for (var Z = R - 1, se = w.length; ++Z < se; )
        if (w[Z] === T)
          return Z;
      return -1;
    }
    function pp(w, T, R) {
      for (var Z = R + 1; Z--; )
        if (w[Z] === T)
          return Z;
      return Z;
    }
    function Zn(w) {
      return Jn(w) ? vp(w) : Qd(w);
    }
    function Ht(w) {
      return Jn(w) ? mp(w) : jd(w);
    }
    function ll(w) {
      for (var T = w.length; T-- && id.test(w.charAt(T)); )
        ;
      return T;
    }
    var hp = Ns(zd);
    function vp(w) {
      for (var T = Cs.lastIndex = 0; Cs.test(w); )
        ++T;
      return T;
    }
    function mp(w) {
      return w.match(Cs) || [];
    }
    function gp(w) {
      return w.match(Md) || [];
    }
    var _p = function w(T) {
      T = T == null ? Je : Qn.defaults(Je.Object(), T, Qn.pick(Je, Fd));
      var R = T.Array, Z = T.Date, se = T.Error, ge = T.Function, We = T.Math, Ee = T.Object, Vs = T.RegExp, yp = T.String, Tt = T.TypeError, oi = R.prototype, bp = ge.prototype, jn = Ee.prototype, ai = T["__core-js_shared__"], li = bp.toString, be = jn.hasOwnProperty, wp = 0, ul = function() {
        var e = /[^.]+$/.exec(ai && ai.keys && ai.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), ui = jn.toString, xp = li.call(Ee), Ep = Je._, Sp = Vs(
        "^" + li.call(be).replace(bs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ci = qa ? T.Buffer : r, bn = T.Symbol, fi = T.Uint8Array, cl = ci ? ci.allocUnsafe : r, di = al(Ee.getPrototypeOf, Ee), fl = Ee.create, dl = jn.propertyIsEnumerable, pi = oi.splice, pl = bn ? bn.isConcatSpreadable : r, Rr = bn ? bn.iterator : r, Tn = bn ? bn.toStringTag : r, hi = function() {
        try {
          var e = Pn(Ee, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), $p = T.clearTimeout !== Je.clearTimeout && T.clearTimeout, Cp = Z && Z.now !== Je.Date.now && Z.now, Rp = T.setTimeout !== Je.setTimeout && T.setTimeout, vi = We.ceil, mi = We.floor, Us = Ee.getOwnPropertySymbols, kp = ci ? ci.isBuffer : r, hl = T.isFinite, Ap = oi.join, Tp = al(Ee.keys, Ee), ze = We.max, et = We.min, Op = Z.now, Ip = T.parseInt, vl = We.random, Np = oi.reverse, Fs = Pn(T, "DataView"), kr = Pn(T, "Map"), Bs = Pn(T, "Promise"), er = Pn(T, "Set"), Ar = Pn(T, "WeakMap"), Tr = Pn(Ee, "create"), gi = Ar && new Ar(), tr = {}, Lp = Dn(Fs), Pp = Dn(kr), Dp = Dn(Bs), Mp = Dn(er), Vp = Dn(Ar), _i = bn ? bn.prototype : r, Or = _i ? _i.valueOf : r, ml = _i ? _i.toString : r;
      function f(e) {
        if (Le(e) && !oe(e) && !(e instanceof pe)) {
          if (e instanceof Ot)
            return e;
          if (be.call(e, "__wrapped__"))
            return gu(e);
        }
        return new Ot(e);
      }
      var nr = function() {
        function e() {
        }
        return function(t) {
          if (!Oe(t))
            return {};
          if (fl)
            return fl(t);
          e.prototype = t;
          var i = new e();
          return e.prototype = r, i;
        };
      }();
      function yi() {
      }
      function Ot(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r;
      }
      f.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Qf,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: jf,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: $a,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: f
        }
      }, f.prototype = yi.prototype, f.prototype.constructor = f, Ot.prototype = nr(yi.prototype), Ot.prototype.constructor = Ot;
      function pe(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ne, this.__views__ = [];
      }
      function Up() {
        var e = new pe(this.__wrapped__);
        return e.__actions__ = ft(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = ft(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = ft(this.__views__), e;
      }
      function Fp() {
        if (this.__filtered__) {
          var e = new pe(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Bp() {
        var e = this.__wrapped__.value(), t = this.__dir__, i = oe(e), a = t < 0, u = i ? e.length : 0, p = jh(0, u, this.__views__), g = p.start, _ = p.end, E = _ - g, I = a ? _ : g - 1, N = this.__iteratees__, V = N.length, Y = 0, j = et(E, this.__takeCount__);
        if (!i || !a && u == E && j == E)
          return Fl(e, this.__actions__);
        var ne = [];
        e:
          for (; E-- && Y < j; ) {
            I += t;
            for (var le = -1, re = e[I]; ++le < V; ) {
              var de = N[le], he = de.iteratee, bt = de.type, lt = he(re);
              if (bt == Xe)
                re = lt;
              else if (!lt) {
                if (bt == fe)
                  continue e;
                break e;
              }
            }
            ne[Y++] = re;
          }
        return ne;
      }
      pe.prototype = nr(yi.prototype), pe.prototype.constructor = pe;
      function On(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function Hp() {
        this.__data__ = Tr ? Tr(null) : {}, this.size = 0;
      }
      function Wp(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function zp(e) {
        var t = this.__data__;
        if (Tr) {
          var i = t[e];
          return i === m ? r : i;
        }
        return be.call(t, e) ? t[e] : r;
      }
      function Gp(e) {
        var t = this.__data__;
        return Tr ? t[e] !== r : be.call(t, e);
      }
      function qp(e, t) {
        var i = this.__data__;
        return this.size += this.has(e) ? 0 : 1, i[e] = Tr && t === r ? m : t, this;
      }
      On.prototype.clear = Hp, On.prototype.delete = Wp, On.prototype.get = zp, On.prototype.has = Gp, On.prototype.set = qp;
      function nn(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function Kp() {
        this.__data__ = [], this.size = 0;
      }
      function Yp(e) {
        var t = this.__data__, i = bi(t, e);
        if (i < 0)
          return !1;
        var a = t.length - 1;
        return i == a ? t.pop() : pi.call(t, i, 1), --this.size, !0;
      }
      function Xp(e) {
        var t = this.__data__, i = bi(t, e);
        return i < 0 ? r : t[i][1];
      }
      function Jp(e) {
        return bi(this.__data__, e) > -1;
      }
      function Zp(e, t) {
        var i = this.__data__, a = bi(i, e);
        return a < 0 ? (++this.size, i.push([e, t])) : i[a][1] = t, this;
      }
      nn.prototype.clear = Kp, nn.prototype.delete = Yp, nn.prototype.get = Xp, nn.prototype.has = Jp, nn.prototype.set = Zp;
      function rn(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function Qp() {
        this.size = 0, this.__data__ = {
          hash: new On(),
          map: new (kr || nn)(),
          string: new On()
        };
      }
      function jp(e) {
        var t = Ii(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function eh(e) {
        return Ii(this, e).get(e);
      }
      function th(e) {
        return Ii(this, e).has(e);
      }
      function nh(e, t) {
        var i = Ii(this, e), a = i.size;
        return i.set(e, t), this.size += i.size == a ? 0 : 1, this;
      }
      rn.prototype.clear = Qp, rn.prototype.delete = jp, rn.prototype.get = eh, rn.prototype.has = th, rn.prototype.set = nh;
      function In(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.__data__ = new rn(); ++t < i; )
          this.add(e[t]);
      }
      function rh(e) {
        return this.__data__.set(e, m), this;
      }
      function ih(e) {
        return this.__data__.has(e);
      }
      In.prototype.add = In.prototype.push = rh, In.prototype.has = ih;
      function Wt(e) {
        var t = this.__data__ = new nn(e);
        this.size = t.size;
      }
      function sh() {
        this.__data__ = new nn(), this.size = 0;
      }
      function oh(e) {
        var t = this.__data__, i = t.delete(e);
        return this.size = t.size, i;
      }
      function ah(e) {
        return this.__data__.get(e);
      }
      function lh(e) {
        return this.__data__.has(e);
      }
      function uh(e, t) {
        var i = this.__data__;
        if (i instanceof nn) {
          var a = i.__data__;
          if (!kr || a.length < l - 1)
            return a.push([e, t]), this.size = ++i.size, this;
          i = this.__data__ = new rn(a);
        }
        return i.set(e, t), this.size = i.size, this;
      }
      Wt.prototype.clear = sh, Wt.prototype.delete = oh, Wt.prototype.get = ah, Wt.prototype.has = lh, Wt.prototype.set = uh;
      function gl(e, t) {
        var i = oe(e), a = !i && Mn(e), u = !i && !a && $n(e), p = !i && !a && !u && or(e), g = i || a || u || p, _ = g ? Ps(e.length, yp) : [], E = _.length;
        for (var I in e)
          (t || be.call(e, I)) && !(g && // Safari 9 has enumerable `arguments.length` in strict mode.
          (I == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          u && (I == "offset" || I == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          p && (I == "buffer" || I == "byteLength" || I == "byteOffset") || // Skip index properties.
          ln(I, E))) && _.push(I);
        return _;
      }
      function _l(e) {
        var t = e.length;
        return t ? e[Qs(0, t - 1)] : r;
      }
      function ch(e, t) {
        return Ni(ft(e), Nn(t, 0, e.length));
      }
      function fh(e) {
        return Ni(ft(e));
      }
      function Hs(e, t, i) {
        (i !== r && !zt(e[t], i) || i === r && !(t in e)) && sn(e, t, i);
      }
      function Ir(e, t, i) {
        var a = e[t];
        (!(be.call(e, t) && zt(a, i)) || i === r && !(t in e)) && sn(e, t, i);
      }
      function bi(e, t) {
        for (var i = e.length; i--; )
          if (zt(e[i][0], t))
            return i;
        return -1;
      }
      function dh(e, t, i, a) {
        return wn(e, function(u, p, g) {
          t(a, u, i(u), g);
        }), a;
      }
      function yl(e, t) {
        return e && Jt(t, qe(t), e);
      }
      function ph(e, t) {
        return e && Jt(t, pt(t), e);
      }
      function sn(e, t, i) {
        t == "__proto__" && hi ? hi(e, t, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : e[t] = i;
      }
      function Ws(e, t) {
        for (var i = -1, a = t.length, u = R(a), p = e == null; ++i < a; )
          u[i] = p ? r : So(e, t[i]);
        return u;
      }
      function Nn(e, t, i) {
        return e === e && (i !== r && (e = e <= i ? e : i), t !== r && (e = e >= t ? e : t)), e;
      }
      function It(e, t, i, a, u, p) {
        var g, _ = t & S, E = t & $, I = t & k;
        if (i && (g = u ? i(e, a, u, p) : i(e)), g !== r)
          return g;
        if (!Oe(e))
          return e;
        var N = oe(e);
        if (N) {
          if (g = tv(e), !_)
            return ft(e, g);
        } else {
          var V = tt(e), Y = V == Qr || V == wa;
          if ($n(e))
            return Wl(e, _);
          if (V == tn || V == mn || Y && !u) {
            if (g = E || Y ? {} : lu(e), !_)
              return E ? zh(e, ph(g, e)) : Wh(e, yl(g, e));
          } else {
            if (!Ce[V])
              return u ? e : {};
            g = nv(e, V, _);
          }
        }
        p || (p = new Wt());
        var j = p.get(e);
        if (j)
          return j;
        p.set(e, g), Mu(e) ? e.forEach(function(re) {
          g.add(It(re, t, i, re, e, p));
        }) : Pu(e) && e.forEach(function(re, de) {
          g.set(de, It(re, t, i, de, e, p));
        });
        var ne = I ? E ? uo : lo : E ? pt : qe, le = N ? r : ne(e);
        return At(le || e, function(re, de) {
          le && (de = re, re = e[de]), Ir(g, de, It(re, t, i, de, e, p));
        }), g;
      }
      function hh(e) {
        var t = qe(e);
        return function(i) {
          return bl(i, e, t);
        };
      }
      function bl(e, t, i) {
        var a = i.length;
        if (e == null)
          return !a;
        for (e = Ee(e); a--; ) {
          var u = i[a], p = t[u], g = e[u];
          if (g === r && !(u in e) || !p(g))
            return !1;
        }
        return !0;
      }
      function wl(e, t, i) {
        if (typeof e != "function")
          throw new Tt(d);
        return Ur(function() {
          e.apply(r, i);
        }, t);
      }
      function Nr(e, t, i, a) {
        var u = -1, p = ri, g = !0, _ = e.length, E = [], I = t.length;
        if (!_)
          return E;
        i && (t = Te(t, gt(i))), a ? (p = As, g = !1) : t.length >= l && (p = Cr, g = !1, t = new In(t));
        e:
          for (; ++u < _; ) {
            var N = e[u], V = i == null ? N : i(N);
            if (N = a || N !== 0 ? N : 0, g && V === V) {
              for (var Y = I; Y--; )
                if (t[Y] === V)
                  continue e;
              E.push(N);
            } else
              p(t, V, a) || E.push(N);
          }
        return E;
      }
      var wn = Yl(Xt), xl = Yl(Gs, !0);
      function vh(e, t) {
        var i = !0;
        return wn(e, function(a, u, p) {
          return i = !!t(a, u, p), i;
        }), i;
      }
      function wi(e, t, i) {
        for (var a = -1, u = e.length; ++a < u; ) {
          var p = e[a], g = t(p);
          if (g != null && (_ === r ? g === g && !yt(g) : i(g, _)))
            var _ = g, E = p;
        }
        return E;
      }
      function mh(e, t, i, a) {
        var u = e.length;
        for (i = ae(i), i < 0 && (i = -i > u ? 0 : u + i), a = a === r || a > u ? u : ae(a), a < 0 && (a += u), a = i > a ? 0 : Uu(a); i < a; )
          e[i++] = t;
        return e;
      }
      function El(e, t) {
        var i = [];
        return wn(e, function(a, u, p) {
          t(a, u, p) && i.push(a);
        }), i;
      }
      function Ze(e, t, i, a, u) {
        var p = -1, g = e.length;
        for (i || (i = iv), u || (u = []); ++p < g; ) {
          var _ = e[p];
          t > 0 && i(_) ? t > 1 ? Ze(_, t - 1, i, a, u) : _n(u, _) : a || (u[u.length] = _);
        }
        return u;
      }
      var zs = Xl(), Sl = Xl(!0);
      function Xt(e, t) {
        return e && zs(e, t, qe);
      }
      function Gs(e, t) {
        return e && Sl(e, t, qe);
      }
      function xi(e, t) {
        return gn(t, function(i) {
          return un(e[i]);
        });
      }
      function Ln(e, t) {
        t = En(t, e);
        for (var i = 0, a = t.length; e != null && i < a; )
          e = e[Zt(t[i++])];
        return i && i == a ? e : r;
      }
      function $l(e, t, i) {
        var a = t(e);
        return oe(e) ? a : _n(a, i(e));
      }
      function ot(e) {
        return e == null ? e === r ? Gf : Wf : Tn && Tn in Ee(e) ? Qh(e) : fv(e);
      }
      function qs(e, t) {
        return e > t;
      }
      function gh(e, t) {
        return e != null && be.call(e, t);
      }
      function _h(e, t) {
        return e != null && t in Ee(e);
      }
      function yh(e, t, i) {
        return e >= et(t, i) && e < ze(t, i);
      }
      function Ks(e, t, i) {
        for (var a = i ? As : ri, u = e[0].length, p = e.length, g = p, _ = R(p), E = 1 / 0, I = []; g--; ) {
          var N = e[g];
          g && t && (N = Te(N, gt(t))), E = et(N.length, E), _[g] = !i && (t || u >= 120 && N.length >= 120) ? new In(g && N) : r;
        }
        N = e[0];
        var V = -1, Y = _[0];
        e:
          for (; ++V < u && I.length < E; ) {
            var j = N[V], ne = t ? t(j) : j;
            if (j = i || j !== 0 ? j : 0, !(Y ? Cr(Y, ne) : a(I, ne, i))) {
              for (g = p; --g; ) {
                var le = _[g];
                if (!(le ? Cr(le, ne) : a(e[g], ne, i)))
                  continue e;
              }
              Y && Y.push(ne), I.push(j);
            }
          }
        return I;
      }
      function bh(e, t, i, a) {
        return Xt(e, function(u, p, g) {
          t(a, i(u), p, g);
        }), a;
      }
      function Lr(e, t, i) {
        t = En(t, e), e = du(e, t);
        var a = e == null ? e : e[Zt(Lt(t))];
        return a == null ? r : mt(a, e, i);
      }
      function Cl(e) {
        return Le(e) && ot(e) == mn;
      }
      function wh(e) {
        return Le(e) && ot(e) == $r;
      }
      function xh(e) {
        return Le(e) && ot(e) == br;
      }
      function Pr(e, t, i, a, u) {
        return e === t ? !0 : e == null || t == null || !Le(e) && !Le(t) ? e !== e && t !== t : Eh(e, t, i, a, Pr, u);
      }
      function Eh(e, t, i, a, u, p) {
        var g = oe(e), _ = oe(t), E = g ? kn : tt(e), I = _ ? kn : tt(t);
        E = E == mn ? tn : E, I = I == mn ? tn : I;
        var N = E == tn, V = I == tn, Y = E == I;
        if (Y && $n(e)) {
          if (!$n(t))
            return !1;
          g = !0, N = !1;
        }
        if (Y && !N)
          return p || (p = new Wt()), g || or(e) ? su(e, t, i, a, u, p) : Jh(e, t, E, i, a, u, p);
        if (!(i & x)) {
          var j = N && be.call(e, "__wrapped__"), ne = V && be.call(t, "__wrapped__");
          if (j || ne) {
            var le = j ? e.value() : e, re = ne ? t.value() : t;
            return p || (p = new Wt()), u(le, re, i, a, p);
          }
        }
        return Y ? (p || (p = new Wt()), Zh(e, t, i, a, u, p)) : !1;
      }
      function Sh(e) {
        return Le(e) && tt(e) == Ft;
      }
      function Ys(e, t, i, a) {
        var u = i.length, p = u, g = !a;
        if (e == null)
          return !p;
        for (e = Ee(e); u--; ) {
          var _ = i[u];
          if (g && _[2] ? _[1] !== e[_[0]] : !(_[0] in e))
            return !1;
        }
        for (; ++u < p; ) {
          _ = i[u];
          var E = _[0], I = e[E], N = _[1];
          if (g && _[2]) {
            if (I === r && !(E in e))
              return !1;
          } else {
            var V = new Wt();
            if (a)
              var Y = a(I, N, E, e, t, V);
            if (!(Y === r ? Pr(N, I, x | b, a, V) : Y))
              return !1;
          }
        }
        return !0;
      }
      function Rl(e) {
        if (!Oe(e) || ov(e))
          return !1;
        var t = un(e) ? Sp : hd;
        return t.test(Dn(e));
      }
      function $h(e) {
        return Le(e) && ot(e) == xr;
      }
      function Ch(e) {
        return Le(e) && tt(e) == Bt;
      }
      function Rh(e) {
        return Le(e) && Ui(e.length) && !!ke[ot(e)];
      }
      function kl(e) {
        return typeof e == "function" ? e : e == null ? ht : typeof e == "object" ? oe(e) ? Ol(e[0], e[1]) : Tl(e) : Ju(e);
      }
      function Xs(e) {
        if (!Vr(e))
          return Tp(e);
        var t = [];
        for (var i in Ee(e))
          be.call(e, i) && i != "constructor" && t.push(i);
        return t;
      }
      function kh(e) {
        if (!Oe(e))
          return cv(e);
        var t = Vr(e), i = [];
        for (var a in e)
          a == "constructor" && (t || !be.call(e, a)) || i.push(a);
        return i;
      }
      function Js(e, t) {
        return e < t;
      }
      function Al(e, t) {
        var i = -1, a = dt(e) ? R(e.length) : [];
        return wn(e, function(u, p, g) {
          a[++i] = t(u, p, g);
        }), a;
      }
      function Tl(e) {
        var t = fo(e);
        return t.length == 1 && t[0][2] ? cu(t[0][0], t[0][1]) : function(i) {
          return i === e || Ys(i, e, t);
        };
      }
      function Ol(e, t) {
        return ho(e) && uu(t) ? cu(Zt(e), t) : function(i) {
          var a = So(i, e);
          return a === r && a === t ? $o(i, e) : Pr(t, a, x | b);
        };
      }
      function Ei(e, t, i, a, u) {
        e !== t && zs(t, function(p, g) {
          if (u || (u = new Wt()), Oe(p))
            Ah(e, t, g, i, Ei, a, u);
          else {
            var _ = a ? a(mo(e, g), p, g + "", e, t, u) : r;
            _ === r && (_ = p), Hs(e, g, _);
          }
        }, pt);
      }
      function Ah(e, t, i, a, u, p, g) {
        var _ = mo(e, i), E = mo(t, i), I = g.get(E);
        if (I) {
          Hs(e, i, I);
          return;
        }
        var N = p ? p(_, E, i + "", e, t, g) : r, V = N === r;
        if (V) {
          var Y = oe(E), j = !Y && $n(E), ne = !Y && !j && or(E);
          N = E, Y || j || ne ? oe(_) ? N = _ : Ue(_) ? N = ft(_) : j ? (V = !1, N = Wl(E, !0)) : ne ? (V = !1, N = zl(E, !0)) : N = [] : Fr(E) || Mn(E) ? (N = _, Mn(_) ? N = Fu(_) : (!Oe(_) || un(_)) && (N = lu(E))) : V = !1;
        }
        V && (g.set(E, N), u(N, E, a, p, g), g.delete(E)), Hs(e, i, N);
      }
      function Il(e, t) {
        var i = e.length;
        if (i)
          return t += t < 0 ? i : 0, ln(t, i) ? e[t] : r;
      }
      function Nl(e, t, i) {
        t.length ? t = Te(t, function(p) {
          return oe(p) ? function(g) {
            return Ln(g, p.length === 1 ? p[0] : p);
          } : p;
        }) : t = [ht];
        var a = -1;
        t = Te(t, gt(te()));
        var u = Al(e, function(p, g, _) {
          var E = Te(t, function(I) {
            return I(p);
          });
          return { criteria: E, index: ++a, value: p };
        });
        return np(u, function(p, g) {
          return Hh(p, g, i);
        });
      }
      function Th(e, t) {
        return Ll(e, t, function(i, a) {
          return $o(e, a);
        });
      }
      function Ll(e, t, i) {
        for (var a = -1, u = t.length, p = {}; ++a < u; ) {
          var g = t[a], _ = Ln(e, g);
          i(_, g) && Dr(p, En(g, e), _);
        }
        return p;
      }
      function Oh(e) {
        return function(t) {
          return Ln(t, e);
        };
      }
      function Zs(e, t, i, a) {
        var u = a ? tp : Xn, p = -1, g = t.length, _ = e;
        for (e === t && (t = ft(t)), i && (_ = Te(e, gt(i))); ++p < g; )
          for (var E = 0, I = t[p], N = i ? i(I) : I; (E = u(_, N, E, a)) > -1; )
            _ !== e && pi.call(_, E, 1), pi.call(e, E, 1);
        return e;
      }
      function Pl(e, t) {
        for (var i = e ? t.length : 0, a = i - 1; i--; ) {
          var u = t[i];
          if (i == a || u !== p) {
            var p = u;
            ln(u) ? pi.call(e, u, 1) : to(e, u);
          }
        }
        return e;
      }
      function Qs(e, t) {
        return e + mi(vl() * (t - e + 1));
      }
      function Ih(e, t, i, a) {
        for (var u = -1, p = ze(vi((t - e) / (i || 1)), 0), g = R(p); p--; )
          g[a ? p : ++u] = e, e += i;
        return g;
      }
      function js(e, t) {
        var i = "";
        if (!e || t < 1 || t > Se)
          return i;
        do
          t % 2 && (i += e), t = mi(t / 2), t && (e += e);
        while (t);
        return i;
      }
      function ue(e, t) {
        return go(fu(e, t, ht), e + "");
      }
      function Nh(e) {
        return _l(ar(e));
      }
      function Lh(e, t) {
        var i = ar(e);
        return Ni(i, Nn(t, 0, i.length));
      }
      function Dr(e, t, i, a) {
        if (!Oe(e))
          return e;
        t = En(t, e);
        for (var u = -1, p = t.length, g = p - 1, _ = e; _ != null && ++u < p; ) {
          var E = Zt(t[u]), I = i;
          if (E === "__proto__" || E === "constructor" || E === "prototype")
            return e;
          if (u != g) {
            var N = _[E];
            I = a ? a(N, E, _) : r, I === r && (I = Oe(N) ? N : ln(t[u + 1]) ? [] : {});
          }
          Ir(_, E, I), _ = _[E];
        }
        return e;
      }
      var Dl = gi ? function(e, t) {
        return gi.set(e, t), e;
      } : ht, Ph = hi ? function(e, t) {
        return hi(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Ro(t),
          writable: !0
        });
      } : ht;
      function Dh(e) {
        return Ni(ar(e));
      }
      function Nt(e, t, i) {
        var a = -1, u = e.length;
        t < 0 && (t = -t > u ? 0 : u + t), i = i > u ? u : i, i < 0 && (i += u), u = t > i ? 0 : i - t >>> 0, t >>>= 0;
        for (var p = R(u); ++a < u; )
          p[a] = e[a + t];
        return p;
      }
      function Mh(e, t) {
        var i;
        return wn(e, function(a, u, p) {
          return i = t(a, u, p), !i;
        }), !!i;
      }
      function Si(e, t, i) {
        var a = 0, u = e == null ? a : e.length;
        if (typeof t == "number" && t === t && u <= Jr) {
          for (; a < u; ) {
            var p = a + u >>> 1, g = e[p];
            g !== null && !yt(g) && (i ? g <= t : g < t) ? a = p + 1 : u = p;
          }
          return u;
        }
        return eo(e, t, ht, i);
      }
      function eo(e, t, i, a) {
        var u = 0, p = e == null ? 0 : e.length;
        if (p === 0)
          return 0;
        t = i(t);
        for (var g = t !== t, _ = t === null, E = yt(t), I = t === r; u < p; ) {
          var N = mi((u + p) / 2), V = i(e[N]), Y = V !== r, j = V === null, ne = V === V, le = yt(V);
          if (g)
            var re = a || ne;
          else
            I ? re = ne && (a || Y) : _ ? re = ne && Y && (a || !j) : E ? re = ne && Y && !j && (a || !le) : j || le ? re = !1 : re = a ? V <= t : V < t;
          re ? u = N + 1 : p = N;
        }
        return et(p, Xr);
      }
      function Ml(e, t) {
        for (var i = -1, a = e.length, u = 0, p = []; ++i < a; ) {
          var g = e[i], _ = t ? t(g) : g;
          if (!i || !zt(_, E)) {
            var E = _;
            p[u++] = g === 0 ? 0 : g;
          }
        }
        return p;
      }
      function Vl(e) {
        return typeof e == "number" ? e : yt(e) ? $e : +e;
      }
      function _t(e) {
        if (typeof e == "string")
          return e;
        if (oe(e))
          return Te(e, _t) + "";
        if (yt(e))
          return ml ? ml.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -Ge ? "-0" : t;
      }
      function xn(e, t, i) {
        var a = -1, u = ri, p = e.length, g = !0, _ = [], E = _;
        if (i)
          g = !1, u = As;
        else if (p >= l) {
          var I = t ? null : Yh(e);
          if (I)
            return si(I);
          g = !1, u = Cr, E = new In();
        } else
          E = t ? [] : _;
        e:
          for (; ++a < p; ) {
            var N = e[a], V = t ? t(N) : N;
            if (N = i || N !== 0 ? N : 0, g && V === V) {
              for (var Y = E.length; Y--; )
                if (E[Y] === V)
                  continue e;
              t && E.push(V), _.push(N);
            } else
              u(E, V, i) || (E !== _ && E.push(V), _.push(N));
          }
        return _;
      }
      function to(e, t) {
        return t = En(t, e), e = du(e, t), e == null || delete e[Zt(Lt(t))];
      }
      function Ul(e, t, i, a) {
        return Dr(e, t, i(Ln(e, t)), a);
      }
      function $i(e, t, i, a) {
        for (var u = e.length, p = a ? u : -1; (a ? p-- : ++p < u) && t(e[p], p, e); )
          ;
        return i ? Nt(e, a ? 0 : p, a ? p + 1 : u) : Nt(e, a ? p + 1 : 0, a ? u : p);
      }
      function Fl(e, t) {
        var i = e;
        return i instanceof pe && (i = i.value()), Ts(t, function(a, u) {
          return u.func.apply(u.thisArg, _n([a], u.args));
        }, i);
      }
      function no(e, t, i) {
        var a = e.length;
        if (a < 2)
          return a ? xn(e[0]) : [];
        for (var u = -1, p = R(a); ++u < a; )
          for (var g = e[u], _ = -1; ++_ < a; )
            _ != u && (p[u] = Nr(p[u] || g, e[_], t, i));
        return xn(Ze(p, 1), t, i);
      }
      function Bl(e, t, i) {
        for (var a = -1, u = e.length, p = t.length, g = {}; ++a < u; ) {
          var _ = a < p ? t[a] : r;
          i(g, e[a], _);
        }
        return g;
      }
      function ro(e) {
        return Ue(e) ? e : [];
      }
      function io(e) {
        return typeof e == "function" ? e : ht;
      }
      function En(e, t) {
        return oe(e) ? e : ho(e, t) ? [e] : mu(ye(e));
      }
      var Vh = ue;
      function Sn(e, t, i) {
        var a = e.length;
        return i = i === r ? a : i, !t && i >= a ? e : Nt(e, t, i);
      }
      var Hl = $p || function(e) {
        return Je.clearTimeout(e);
      };
      function Wl(e, t) {
        if (t)
          return e.slice();
        var i = e.length, a = cl ? cl(i) : new e.constructor(i);
        return e.copy(a), a;
      }
      function so(e) {
        var t = new e.constructor(e.byteLength);
        return new fi(t).set(new fi(e)), t;
      }
      function Uh(e, t) {
        var i = t ? so(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.byteLength);
      }
      function Fh(e) {
        var t = new e.constructor(e.source, Ca.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      function Bh(e) {
        return Or ? Ee(Or.call(e)) : {};
      }
      function zl(e, t) {
        var i = t ? so(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.length);
      }
      function Gl(e, t) {
        if (e !== t) {
          var i = e !== r, a = e === null, u = e === e, p = yt(e), g = t !== r, _ = t === null, E = t === t, I = yt(t);
          if (!_ && !I && !p && e > t || p && g && E && !_ && !I || a && g && E || !i && E || !u)
            return 1;
          if (!a && !p && !I && e < t || I && i && u && !a && !p || _ && i && u || !g && u || !E)
            return -1;
        }
        return 0;
      }
      function Hh(e, t, i) {
        for (var a = -1, u = e.criteria, p = t.criteria, g = u.length, _ = i.length; ++a < g; ) {
          var E = Gl(u[a], p[a]);
          if (E) {
            if (a >= _)
              return E;
            var I = i[a];
            return E * (I == "desc" ? -1 : 1);
          }
        }
        return e.index - t.index;
      }
      function ql(e, t, i, a) {
        for (var u = -1, p = e.length, g = i.length, _ = -1, E = t.length, I = ze(p - g, 0), N = R(E + I), V = !a; ++_ < E; )
          N[_] = t[_];
        for (; ++u < g; )
          (V || u < p) && (N[i[u]] = e[u]);
        for (; I--; )
          N[_++] = e[u++];
        return N;
      }
      function Kl(e, t, i, a) {
        for (var u = -1, p = e.length, g = -1, _ = i.length, E = -1, I = t.length, N = ze(p - _, 0), V = R(N + I), Y = !a; ++u < N; )
          V[u] = e[u];
        for (var j = u; ++E < I; )
          V[j + E] = t[E];
        for (; ++g < _; )
          (Y || u < p) && (V[j + i[g]] = e[u++]);
        return V;
      }
      function ft(e, t) {
        var i = -1, a = e.length;
        for (t || (t = R(a)); ++i < a; )
          t[i] = e[i];
        return t;
      }
      function Jt(e, t, i, a) {
        var u = !i;
        i || (i = {});
        for (var p = -1, g = t.length; ++p < g; ) {
          var _ = t[p], E = a ? a(i[_], e[_], _, i, e) : r;
          E === r && (E = e[_]), u ? sn(i, _, E) : Ir(i, _, E);
        }
        return i;
      }
      function Wh(e, t) {
        return Jt(e, po(e), t);
      }
      function zh(e, t) {
        return Jt(e, ou(e), t);
      }
      function Ci(e, t) {
        return function(i, a) {
          var u = oe(i) ? Xd : dh, p = t ? t() : {};
          return u(i, e, te(a, 2), p);
        };
      }
      function rr(e) {
        return ue(function(t, i) {
          var a = -1, u = i.length, p = u > 1 ? i[u - 1] : r, g = u > 2 ? i[2] : r;
          for (p = e.length > 3 && typeof p == "function" ? (u--, p) : r, g && at(i[0], i[1], g) && (p = u < 3 ? r : p, u = 1), t = Ee(t); ++a < u; ) {
            var _ = i[a];
            _ && e(t, _, a, p);
          }
          return t;
        });
      }
      function Yl(e, t) {
        return function(i, a) {
          if (i == null)
            return i;
          if (!dt(i))
            return e(i, a);
          for (var u = i.length, p = t ? u : -1, g = Ee(i); (t ? p-- : ++p < u) && a(g[p], p, g) !== !1; )
            ;
          return i;
        };
      }
      function Xl(e) {
        return function(t, i, a) {
          for (var u = -1, p = Ee(t), g = a(t), _ = g.length; _--; ) {
            var E = g[e ? _ : ++u];
            if (i(p[E], E, p) === !1)
              break;
          }
          return t;
        };
      }
      function Gh(e, t, i) {
        var a = t & D, u = Mr(e);
        function p() {
          var g = this && this !== Je && this instanceof p ? u : e;
          return g.apply(a ? i : this, arguments);
        }
        return p;
      }
      function Jl(e) {
        return function(t) {
          t = ye(t);
          var i = Jn(t) ? Ht(t) : r, a = i ? i[0] : t.charAt(0), u = i ? Sn(i, 1).join("") : t.slice(1);
          return a[e]() + u;
        };
      }
      function ir(e) {
        return function(t) {
          return Ts(Yu(Ku(t).replace(Pd, "")), e, "");
        };
      }
      function Mr(e) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new e();
            case 1:
              return new e(t[0]);
            case 2:
              return new e(t[0], t[1]);
            case 3:
              return new e(t[0], t[1], t[2]);
            case 4:
              return new e(t[0], t[1], t[2], t[3]);
            case 5:
              return new e(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var i = nr(e.prototype), a = e.apply(i, t);
          return Oe(a) ? a : i;
        };
      }
      function qh(e, t, i) {
        var a = Mr(e);
        function u() {
          for (var p = arguments.length, g = R(p), _ = p, E = sr(u); _--; )
            g[_] = arguments[_];
          var I = p < 3 && g[0] !== E && g[p - 1] !== E ? [] : yn(g, E);
          if (p -= I.length, p < i)
            return tu(
              e,
              t,
              Ri,
              u.placeholder,
              r,
              g,
              I,
              r,
              r,
              i - p
            );
          var N = this && this !== Je && this instanceof u ? a : e;
          return mt(N, this, g);
        }
        return u;
      }
      function Zl(e) {
        return function(t, i, a) {
          var u = Ee(t);
          if (!dt(t)) {
            var p = te(i, 3);
            t = qe(t), i = function(_) {
              return p(u[_], _, u);
            };
          }
          var g = e(t, i, a);
          return g > -1 ? u[p ? t[g] : g] : r;
        };
      }
      function Ql(e) {
        return an(function(t) {
          var i = t.length, a = i, u = Ot.prototype.thru;
          for (e && t.reverse(); a--; ) {
            var p = t[a];
            if (typeof p != "function")
              throw new Tt(d);
            if (u && !g && Oi(p) == "wrapper")
              var g = new Ot([], !0);
          }
          for (a = g ? a : i; ++a < i; ) {
            p = t[a];
            var _ = Oi(p), E = _ == "wrapper" ? co(p) : r;
            E && vo(E[0]) && E[1] == (P | O | J | ve) && !E[4].length && E[9] == 1 ? g = g[Oi(E[0])].apply(g, E[3]) : g = p.length == 1 && vo(p) ? g[_]() : g.thru(p);
          }
          return function() {
            var I = arguments, N = I[0];
            if (g && I.length == 1 && oe(N))
              return g.plant(N).value();
            for (var V = 0, Y = i ? t[V].apply(this, I) : N; ++V < i; )
              Y = t[V].call(this, Y);
            return Y;
          };
        });
      }
      function Ri(e, t, i, a, u, p, g, _, E, I) {
        var N = t & P, V = t & D, Y = t & B, j = t & (O | W), ne = t & Ae, le = Y ? r : Mr(e);
        function re() {
          for (var de = arguments.length, he = R(de), bt = de; bt--; )
            he[bt] = arguments[bt];
          if (j)
            var lt = sr(re), wt = ip(he, lt);
          if (a && (he = ql(he, a, u, j)), p && (he = Kl(he, p, g, j)), de -= wt, j && de < I) {
            var Fe = yn(he, lt);
            return tu(
              e,
              t,
              Ri,
              re.placeholder,
              i,
              he,
              Fe,
              _,
              E,
              I - de
            );
          }
          var Gt = V ? i : this, fn = Y ? Gt[e] : e;
          return de = he.length, _ ? he = dv(he, _) : ne && de > 1 && he.reverse(), N && E < de && (he.length = E), this && this !== Je && this instanceof re && (fn = le || Mr(fn)), fn.apply(Gt, he);
        }
        return re;
      }
      function jl(e, t) {
        return function(i, a) {
          return bh(i, e, t(a), {});
        };
      }
      function ki(e, t) {
        return function(i, a) {
          var u;
          if (i === r && a === r)
            return t;
          if (i !== r && (u = i), a !== r) {
            if (u === r)
              return a;
            typeof i == "string" || typeof a == "string" ? (i = _t(i), a = _t(a)) : (i = Vl(i), a = Vl(a)), u = e(i, a);
          }
          return u;
        };
      }
      function oo(e) {
        return an(function(t) {
          return t = Te(t, gt(te())), ue(function(i) {
            var a = this;
            return e(t, function(u) {
              return mt(u, a, i);
            });
          });
        });
      }
      function Ai(e, t) {
        t = t === r ? " " : _t(t);
        var i = t.length;
        if (i < 2)
          return i ? js(t, e) : t;
        var a = js(t, vi(e / Zn(t)));
        return Jn(t) ? Sn(Ht(a), 0, e).join("") : a.slice(0, e);
      }
      function Kh(e, t, i, a) {
        var u = t & D, p = Mr(e);
        function g() {
          for (var _ = -1, E = arguments.length, I = -1, N = a.length, V = R(N + E), Y = this && this !== Je && this instanceof g ? p : e; ++I < N; )
            V[I] = a[I];
          for (; E--; )
            V[I++] = arguments[++_];
          return mt(Y, u ? i : this, V);
        }
        return g;
      }
      function eu(e) {
        return function(t, i, a) {
          return a && typeof a != "number" && at(t, i, a) && (i = a = r), t = cn(t), i === r ? (i = t, t = 0) : i = cn(i), a = a === r ? t < i ? 1 : -1 : cn(a), Ih(t, i, a, e);
        };
      }
      function Ti(e) {
        return function(t, i) {
          return typeof t == "string" && typeof i == "string" || (t = Pt(t), i = Pt(i)), e(t, i);
        };
      }
      function tu(e, t, i, a, u, p, g, _, E, I) {
        var N = t & O, V = N ? g : r, Y = N ? r : g, j = N ? p : r, ne = N ? r : p;
        t |= N ? J : ee, t &= ~(N ? ee : J), t & H || (t &= ~(D | B));
        var le = [
          e,
          t,
          u,
          j,
          V,
          ne,
          Y,
          _,
          E,
          I
        ], re = i.apply(r, le);
        return vo(e) && pu(re, le), re.placeholder = a, hu(re, e, t);
      }
      function ao(e) {
        var t = We[e];
        return function(i, a) {
          if (i = Pt(i), a = a == null ? 0 : et(ae(a), 292), a && hl(i)) {
            var u = (ye(i) + "e").split("e"), p = t(u[0] + "e" + (+u[1] + a));
            return u = (ye(p) + "e").split("e"), +(u[0] + "e" + (+u[1] - a));
          }
          return t(i);
        };
      }
      var Yh = er && 1 / si(new er([, -0]))[1] == Ge ? function(e) {
        return new er(e);
      } : To;
      function nu(e) {
        return function(t) {
          var i = tt(t);
          return i == Ft ? Ms(t) : i == Bt ? fp(t) : rp(t, e(t));
        };
      }
      function on(e, t, i, a, u, p, g, _) {
        var E = t & B;
        if (!E && typeof e != "function")
          throw new Tt(d);
        var I = a ? a.length : 0;
        if (I || (t &= ~(J | ee), a = u = r), g = g === r ? g : ze(ae(g), 0), _ = _ === r ? _ : ae(_), I -= u ? u.length : 0, t & ee) {
          var N = a, V = u;
          a = u = r;
        }
        var Y = E ? r : co(e), j = [
          e,
          t,
          i,
          a,
          u,
          N,
          V,
          p,
          g,
          _
        ];
        if (Y && uv(j, Y), e = j[0], t = j[1], i = j[2], a = j[3], u = j[4], _ = j[9] = j[9] === r ? E ? 0 : e.length : ze(j[9] - I, 0), !_ && t & (O | W) && (t &= ~(O | W)), !t || t == D)
          var ne = Gh(e, t, i);
        else
          t == O || t == W ? ne = qh(e, t, _) : (t == J || t == (D | J)) && !u.length ? ne = Kh(e, t, i, a) : ne = Ri.apply(r, j);
        var le = Y ? Dl : pu;
        return hu(le(ne, j), e, t);
      }
      function ru(e, t, i, a) {
        return e === r || zt(e, jn[i]) && !be.call(a, i) ? t : e;
      }
      function iu(e, t, i, a, u, p) {
        return Oe(e) && Oe(t) && (p.set(t, e), Ei(e, t, r, iu, p), p.delete(t)), e;
      }
      function Xh(e) {
        return Fr(e) ? r : e;
      }
      function su(e, t, i, a, u, p) {
        var g = i & x, _ = e.length, E = t.length;
        if (_ != E && !(g && E > _))
          return !1;
        var I = p.get(e), N = p.get(t);
        if (I && N)
          return I == t && N == e;
        var V = -1, Y = !0, j = i & b ? new In() : r;
        for (p.set(e, t), p.set(t, e); ++V < _; ) {
          var ne = e[V], le = t[V];
          if (a)
            var re = g ? a(le, ne, V, t, e, p) : a(ne, le, V, e, t, p);
          if (re !== r) {
            if (re)
              continue;
            Y = !1;
            break;
          }
          if (j) {
            if (!Os(t, function(de, he) {
              if (!Cr(j, he) && (ne === de || u(ne, de, i, a, p)))
                return j.push(he);
            })) {
              Y = !1;
              break;
            }
          } else if (!(ne === le || u(ne, le, i, a, p))) {
            Y = !1;
            break;
          }
        }
        return p.delete(e), p.delete(t), Y;
      }
      function Jh(e, t, i, a, u, p, g) {
        switch (i) {
          case Kn:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            e = e.buffer, t = t.buffer;
          case $r:
            return !(e.byteLength != t.byteLength || !p(new fi(e), new fi(t)));
          case yr:
          case br:
          case wr:
            return zt(+e, +t);
          case Zr:
            return e.name == t.name && e.message == t.message;
          case xr:
          case Er:
            return e == t + "";
          case Ft:
            var _ = Ms;
          case Bt:
            var E = a & x;
            if (_ || (_ = si), e.size != t.size && !E)
              return !1;
            var I = g.get(e);
            if (I)
              return I == t;
            a |= b, g.set(e, t);
            var N = su(_(e), _(t), a, u, p, g);
            return g.delete(e), N;
          case jr:
            if (Or)
              return Or.call(e) == Or.call(t);
        }
        return !1;
      }
      function Zh(e, t, i, a, u, p) {
        var g = i & x, _ = lo(e), E = _.length, I = lo(t), N = I.length;
        if (E != N && !g)
          return !1;
        for (var V = E; V--; ) {
          var Y = _[V];
          if (!(g ? Y in t : be.call(t, Y)))
            return !1;
        }
        var j = p.get(e), ne = p.get(t);
        if (j && ne)
          return j == t && ne == e;
        var le = !0;
        p.set(e, t), p.set(t, e);
        for (var re = g; ++V < E; ) {
          Y = _[V];
          var de = e[Y], he = t[Y];
          if (a)
            var bt = g ? a(he, de, Y, t, e, p) : a(de, he, Y, e, t, p);
          if (!(bt === r ? de === he || u(de, he, i, a, p) : bt)) {
            le = !1;
            break;
          }
          re || (re = Y == "constructor");
        }
        if (le && !re) {
          var lt = e.constructor, wt = t.constructor;
          lt != wt && "constructor" in e && "constructor" in t && !(typeof lt == "function" && lt instanceof lt && typeof wt == "function" && wt instanceof wt) && (le = !1);
        }
        return p.delete(e), p.delete(t), le;
      }
      function an(e) {
        return go(fu(e, r, bu), e + "");
      }
      function lo(e) {
        return $l(e, qe, po);
      }
      function uo(e) {
        return $l(e, pt, ou);
      }
      var co = gi ? function(e) {
        return gi.get(e);
      } : To;
      function Oi(e) {
        for (var t = e.name + "", i = tr[t], a = be.call(tr, t) ? i.length : 0; a--; ) {
          var u = i[a], p = u.func;
          if (p == null || p == e)
            return u.name;
        }
        return t;
      }
      function sr(e) {
        var t = be.call(f, "placeholder") ? f : e;
        return t.placeholder;
      }
      function te() {
        var e = f.iteratee || ko;
        return e = e === ko ? kl : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function Ii(e, t) {
        var i = e.__data__;
        return sv(t) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
      }
      function fo(e) {
        for (var t = qe(e), i = t.length; i--; ) {
          var a = t[i], u = e[a];
          t[i] = [a, u, uu(u)];
        }
        return t;
      }
      function Pn(e, t) {
        var i = lp(e, t);
        return Rl(i) ? i : r;
      }
      function Qh(e) {
        var t = be.call(e, Tn), i = e[Tn];
        try {
          e[Tn] = r;
          var a = !0;
        } catch {
        }
        var u = ui.call(e);
        return a && (t ? e[Tn] = i : delete e[Tn]), u;
      }
      var po = Us ? function(e) {
        return e == null ? [] : (e = Ee(e), gn(Us(e), function(t) {
          return dl.call(e, t);
        }));
      } : Oo, ou = Us ? function(e) {
        for (var t = []; e; )
          _n(t, po(e)), e = di(e);
        return t;
      } : Oo, tt = ot;
      (Fs && tt(new Fs(new ArrayBuffer(1))) != Kn || kr && tt(new kr()) != Ft || Bs && tt(Bs.resolve()) != xa || er && tt(new er()) != Bt || Ar && tt(new Ar()) != Sr) && (tt = function(e) {
        var t = ot(e), i = t == tn ? e.constructor : r, a = i ? Dn(i) : "";
        if (a)
          switch (a) {
            case Lp:
              return Kn;
            case Pp:
              return Ft;
            case Dp:
              return xa;
            case Mp:
              return Bt;
            case Vp:
              return Sr;
          }
        return t;
      });
      function jh(e, t, i) {
        for (var a = -1, u = i.length; ++a < u; ) {
          var p = i[a], g = p.size;
          switch (p.type) {
            case "drop":
              e += g;
              break;
            case "dropRight":
              t -= g;
              break;
            case "take":
              t = et(t, e + g);
              break;
            case "takeRight":
              e = ze(e, t - g);
              break;
          }
        }
        return { start: e, end: t };
      }
      function ev(e) {
        var t = e.match(od);
        return t ? t[1].split(ad) : [];
      }
      function au(e, t, i) {
        t = En(t, e);
        for (var a = -1, u = t.length, p = !1; ++a < u; ) {
          var g = Zt(t[a]);
          if (!(p = e != null && i(e, g)))
            break;
          e = e[g];
        }
        return p || ++a != u ? p : (u = e == null ? 0 : e.length, !!u && Ui(u) && ln(g, u) && (oe(e) || Mn(e)));
      }
      function tv(e) {
        var t = e.length, i = new e.constructor(t);
        return t && typeof e[0] == "string" && be.call(e, "index") && (i.index = e.index, i.input = e.input), i;
      }
      function lu(e) {
        return typeof e.constructor == "function" && !Vr(e) ? nr(di(e)) : {};
      }
      function nv(e, t, i) {
        var a = e.constructor;
        switch (t) {
          case $r:
            return so(e);
          case yr:
          case br:
            return new a(+e);
          case Kn:
            return Uh(e, i);
          case fs:
          case ds:
          case ps:
          case hs:
          case vs:
          case ms:
          case gs:
          case _s:
          case ys:
            return zl(e, i);
          case Ft:
            return new a();
          case wr:
          case Er:
            return new a(e);
          case xr:
            return Fh(e);
          case Bt:
            return new a();
          case jr:
            return Bh(e);
        }
      }
      function rv(e, t) {
        var i = t.length;
        if (!i)
          return e;
        var a = i - 1;
        return t[a] = (i > 1 ? "& " : "") + t[a], t = t.join(i > 2 ? ", " : " "), e.replace(sd, `{
/* [wrapped with ` + t + `] */
`);
      }
      function iv(e) {
        return oe(e) || Mn(e) || !!(pl && e && e[pl]);
      }
      function ln(e, t) {
        var i = typeof e;
        return t = t ?? Se, !!t && (i == "number" || i != "symbol" && md.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function at(e, t, i) {
        if (!Oe(i))
          return !1;
        var a = typeof t;
        return (a == "number" ? dt(i) && ln(t, i.length) : a == "string" && t in i) ? zt(i[t], e) : !1;
      }
      function ho(e, t) {
        if (oe(e))
          return !1;
        var i = typeof e;
        return i == "number" || i == "symbol" || i == "boolean" || e == null || yt(e) ? !0 : td.test(e) || !ed.test(e) || t != null && e in Ee(t);
      }
      function sv(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function vo(e) {
        var t = Oi(e), i = f[t];
        if (typeof i != "function" || !(t in pe.prototype))
          return !1;
        if (e === i)
          return !0;
        var a = co(i);
        return !!a && e === a[0];
      }
      function ov(e) {
        return !!ul && ul in e;
      }
      var av = ai ? un : Io;
      function Vr(e) {
        var t = e && e.constructor, i = typeof t == "function" && t.prototype || jn;
        return e === i;
      }
      function uu(e) {
        return e === e && !Oe(e);
      }
      function cu(e, t) {
        return function(i) {
          return i == null ? !1 : i[e] === t && (t !== r || e in Ee(i));
        };
      }
      function lv(e) {
        var t = Mi(e, function(a) {
          return i.size === h && i.clear(), a;
        }), i = t.cache;
        return t;
      }
      function uv(e, t) {
        var i = e[1], a = t[1], u = i | a, p = u < (D | B | P), g = a == P && i == O || a == P && i == ve && e[7].length <= t[8] || a == (P | ve) && t[7].length <= t[8] && i == O;
        if (!(p || g))
          return e;
        a & D && (e[2] = t[2], u |= i & D ? 0 : H);
        var _ = t[3];
        if (_) {
          var E = e[3];
          e[3] = E ? ql(E, _, t[4]) : _, e[4] = E ? yn(e[3], y) : t[4];
        }
        return _ = t[5], _ && (E = e[5], e[5] = E ? Kl(E, _, t[6]) : _, e[6] = E ? yn(e[5], y) : t[6]), _ = t[7], _ && (e[7] = _), a & P && (e[8] = e[8] == null ? t[8] : et(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = u, e;
      }
      function cv(e) {
        var t = [];
        if (e != null)
          for (var i in Ee(e))
            t.push(i);
        return t;
      }
      function fv(e) {
        return ui.call(e);
      }
      function fu(e, t, i) {
        return t = ze(t === r ? e.length - 1 : t, 0), function() {
          for (var a = arguments, u = -1, p = ze(a.length - t, 0), g = R(p); ++u < p; )
            g[u] = a[t + u];
          u = -1;
          for (var _ = R(t + 1); ++u < t; )
            _[u] = a[u];
          return _[t] = i(g), mt(e, this, _);
        };
      }
      function du(e, t) {
        return t.length < 2 ? e : Ln(e, Nt(t, 0, -1));
      }
      function dv(e, t) {
        for (var i = e.length, a = et(t.length, i), u = ft(e); a--; ) {
          var p = t[a];
          e[a] = ln(p, i) ? u[p] : r;
        }
        return e;
      }
      function mo(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
          return e[t];
      }
      var pu = vu(Dl), Ur = Rp || function(e, t) {
        return Je.setTimeout(e, t);
      }, go = vu(Ph);
      function hu(e, t, i) {
        var a = t + "";
        return go(e, rv(a, pv(ev(a), i)));
      }
      function vu(e) {
        var t = 0, i = 0;
        return function() {
          var a = Op(), u = Q - (a - i);
          if (i = a, u > 0) {
            if (++t >= z)
              return arguments[0];
          } else
            t = 0;
          return e.apply(r, arguments);
        };
      }
      function Ni(e, t) {
        var i = -1, a = e.length, u = a - 1;
        for (t = t === r ? a : t; ++i < t; ) {
          var p = Qs(i, u), g = e[p];
          e[p] = e[i], e[i] = g;
        }
        return e.length = t, e;
      }
      var mu = lv(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(nd, function(i, a, u, p) {
          t.push(u ? p.replace(cd, "$1") : a || i);
        }), t;
      });
      function Zt(e) {
        if (typeof e == "string" || yt(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -Ge ? "-0" : t;
      }
      function Dn(e) {
        if (e != null) {
          try {
            return li.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function pv(e, t) {
        return At(qn, function(i) {
          var a = "_." + i[0];
          t & i[1] && !ri(e, a) && e.push(a);
        }), e.sort();
      }
      function gu(e) {
        if (e instanceof pe)
          return e.clone();
        var t = new Ot(e.__wrapped__, e.__chain__);
        return t.__actions__ = ft(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
      }
      function hv(e, t, i) {
        (i ? at(e, t, i) : t === r) ? t = 1 : t = ze(ae(t), 0);
        var a = e == null ? 0 : e.length;
        if (!a || t < 1)
          return [];
        for (var u = 0, p = 0, g = R(vi(a / t)); u < a; )
          g[p++] = Nt(e, u, u += t);
        return g;
      }
      function vv(e) {
        for (var t = -1, i = e == null ? 0 : e.length, a = 0, u = []; ++t < i; ) {
          var p = e[t];
          p && (u[a++] = p);
        }
        return u;
      }
      function mv() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var t = R(e - 1), i = arguments[0], a = e; a--; )
          t[a - 1] = arguments[a];
        return _n(oe(i) ? ft(i) : [i], Ze(t, 1));
      }
      var gv = ue(function(e, t) {
        return Ue(e) ? Nr(e, Ze(t, 1, Ue, !0)) : [];
      }), _v = ue(function(e, t) {
        var i = Lt(t);
        return Ue(i) && (i = r), Ue(e) ? Nr(e, Ze(t, 1, Ue, !0), te(i, 2)) : [];
      }), yv = ue(function(e, t) {
        var i = Lt(t);
        return Ue(i) && (i = r), Ue(e) ? Nr(e, Ze(t, 1, Ue, !0), r, i) : [];
      });
      function bv(e, t, i) {
        var a = e == null ? 0 : e.length;
        return a ? (t = i || t === r ? 1 : ae(t), Nt(e, t < 0 ? 0 : t, a)) : [];
      }
      function wv(e, t, i) {
        var a = e == null ? 0 : e.length;
        return a ? (t = i || t === r ? 1 : ae(t), t = a - t, Nt(e, 0, t < 0 ? 0 : t)) : [];
      }
      function xv(e, t) {
        return e && e.length ? $i(e, te(t, 3), !0, !0) : [];
      }
      function Ev(e, t) {
        return e && e.length ? $i(e, te(t, 3), !0) : [];
      }
      function Sv(e, t, i, a) {
        var u = e == null ? 0 : e.length;
        return u ? (i && typeof i != "number" && at(e, t, i) && (i = 0, a = u), mh(e, t, i, a)) : [];
      }
      function _u(e, t, i) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var u = i == null ? 0 : ae(i);
        return u < 0 && (u = ze(a + u, 0)), ii(e, te(t, 3), u);
      }
      function yu(e, t, i) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var u = a - 1;
        return i !== r && (u = ae(i), u = i < 0 ? ze(a + u, 0) : et(u, a - 1)), ii(e, te(t, 3), u, !0);
      }
      function bu(e) {
        var t = e == null ? 0 : e.length;
        return t ? Ze(e, 1) : [];
      }
      function $v(e) {
        var t = e == null ? 0 : e.length;
        return t ? Ze(e, Ge) : [];
      }
      function Cv(e, t) {
        var i = e == null ? 0 : e.length;
        return i ? (t = t === r ? 1 : ae(t), Ze(e, t)) : [];
      }
      function Rv(e) {
        for (var t = -1, i = e == null ? 0 : e.length, a = {}; ++t < i; ) {
          var u = e[t];
          a[u[0]] = u[1];
        }
        return a;
      }
      function wu(e) {
        return e && e.length ? e[0] : r;
      }
      function kv(e, t, i) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var u = i == null ? 0 : ae(i);
        return u < 0 && (u = ze(a + u, 0)), Xn(e, t, u);
      }
      function Av(e) {
        var t = e == null ? 0 : e.length;
        return t ? Nt(e, 0, -1) : [];
      }
      var Tv = ue(function(e) {
        var t = Te(e, ro);
        return t.length && t[0] === e[0] ? Ks(t) : [];
      }), Ov = ue(function(e) {
        var t = Lt(e), i = Te(e, ro);
        return t === Lt(i) ? t = r : i.pop(), i.length && i[0] === e[0] ? Ks(i, te(t, 2)) : [];
      }), Iv = ue(function(e) {
        var t = Lt(e), i = Te(e, ro);
        return t = typeof t == "function" ? t : r, t && i.pop(), i.length && i[0] === e[0] ? Ks(i, r, t) : [];
      });
      function Nv(e, t) {
        return e == null ? "" : Ap.call(e, t);
      }
      function Lt(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : r;
      }
      function Lv(e, t, i) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var u = a;
        return i !== r && (u = ae(i), u = u < 0 ? ze(a + u, 0) : et(u, a - 1)), t === t ? pp(e, t, u) : ii(e, tl, u, !0);
      }
      function Pv(e, t) {
        return e && e.length ? Il(e, ae(t)) : r;
      }
      var Dv = ue(xu);
      function xu(e, t) {
        return e && e.length && t && t.length ? Zs(e, t) : e;
      }
      function Mv(e, t, i) {
        return e && e.length && t && t.length ? Zs(e, t, te(i, 2)) : e;
      }
      function Vv(e, t, i) {
        return e && e.length && t && t.length ? Zs(e, t, r, i) : e;
      }
      var Uv = an(function(e, t) {
        var i = e == null ? 0 : e.length, a = Ws(e, t);
        return Pl(e, Te(t, function(u) {
          return ln(u, i) ? +u : u;
        }).sort(Gl)), a;
      });
      function Fv(e, t) {
        var i = [];
        if (!(e && e.length))
          return i;
        var a = -1, u = [], p = e.length;
        for (t = te(t, 3); ++a < p; ) {
          var g = e[a];
          t(g, a, e) && (i.push(g), u.push(a));
        }
        return Pl(e, u), i;
      }
      function _o(e) {
        return e == null ? e : Np.call(e);
      }
      function Bv(e, t, i) {
        var a = e == null ? 0 : e.length;
        return a ? (i && typeof i != "number" && at(e, t, i) ? (t = 0, i = a) : (t = t == null ? 0 : ae(t), i = i === r ? a : ae(i)), Nt(e, t, i)) : [];
      }
      function Hv(e, t) {
        return Si(e, t);
      }
      function Wv(e, t, i) {
        return eo(e, t, te(i, 2));
      }
      function zv(e, t) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var a = Si(e, t);
          if (a < i && zt(e[a], t))
            return a;
        }
        return -1;
      }
      function Gv(e, t) {
        return Si(e, t, !0);
      }
      function qv(e, t, i) {
        return eo(e, t, te(i, 2), !0);
      }
      function Kv(e, t) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var a = Si(e, t, !0) - 1;
          if (zt(e[a], t))
            return a;
        }
        return -1;
      }
      function Yv(e) {
        return e && e.length ? Ml(e) : [];
      }
      function Xv(e, t) {
        return e && e.length ? Ml(e, te(t, 2)) : [];
      }
      function Jv(e) {
        var t = e == null ? 0 : e.length;
        return t ? Nt(e, 1, t) : [];
      }
      function Zv(e, t, i) {
        return e && e.length ? (t = i || t === r ? 1 : ae(t), Nt(e, 0, t < 0 ? 0 : t)) : [];
      }
      function Qv(e, t, i) {
        var a = e == null ? 0 : e.length;
        return a ? (t = i || t === r ? 1 : ae(t), t = a - t, Nt(e, t < 0 ? 0 : t, a)) : [];
      }
      function jv(e, t) {
        return e && e.length ? $i(e, te(t, 3), !1, !0) : [];
      }
      function em(e, t) {
        return e && e.length ? $i(e, te(t, 3)) : [];
      }
      var tm = ue(function(e) {
        return xn(Ze(e, 1, Ue, !0));
      }), nm = ue(function(e) {
        var t = Lt(e);
        return Ue(t) && (t = r), xn(Ze(e, 1, Ue, !0), te(t, 2));
      }), rm = ue(function(e) {
        var t = Lt(e);
        return t = typeof t == "function" ? t : r, xn(Ze(e, 1, Ue, !0), r, t);
      });
      function im(e) {
        return e && e.length ? xn(e) : [];
      }
      function sm(e, t) {
        return e && e.length ? xn(e, te(t, 2)) : [];
      }
      function om(e, t) {
        return t = typeof t == "function" ? t : r, e && e.length ? xn(e, r, t) : [];
      }
      function yo(e) {
        if (!(e && e.length))
          return [];
        var t = 0;
        return e = gn(e, function(i) {
          if (Ue(i))
            return t = ze(i.length, t), !0;
        }), Ps(t, function(i) {
          return Te(e, Is(i));
        });
      }
      function Eu(e, t) {
        if (!(e && e.length))
          return [];
        var i = yo(e);
        return t == null ? i : Te(i, function(a) {
          return mt(t, r, a);
        });
      }
      var am = ue(function(e, t) {
        return Ue(e) ? Nr(e, t) : [];
      }), lm = ue(function(e) {
        return no(gn(e, Ue));
      }), um = ue(function(e) {
        var t = Lt(e);
        return Ue(t) && (t = r), no(gn(e, Ue), te(t, 2));
      }), cm = ue(function(e) {
        var t = Lt(e);
        return t = typeof t == "function" ? t : r, no(gn(e, Ue), r, t);
      }), fm = ue(yo);
      function dm(e, t) {
        return Bl(e || [], t || [], Ir);
      }
      function pm(e, t) {
        return Bl(e || [], t || [], Dr);
      }
      var hm = ue(function(e) {
        var t = e.length, i = t > 1 ? e[t - 1] : r;
        return i = typeof i == "function" ? (e.pop(), i) : r, Eu(e, i);
      });
      function Su(e) {
        var t = f(e);
        return t.__chain__ = !0, t;
      }
      function vm(e, t) {
        return t(e), e;
      }
      function Li(e, t) {
        return t(e);
      }
      var mm = an(function(e) {
        var t = e.length, i = t ? e[0] : 0, a = this.__wrapped__, u = function(p) {
          return Ws(p, e);
        };
        return t > 1 || this.__actions__.length || !(a instanceof pe) || !ln(i) ? this.thru(u) : (a = a.slice(i, +i + (t ? 1 : 0)), a.__actions__.push({
          func: Li,
          args: [u],
          thisArg: r
        }), new Ot(a, this.__chain__).thru(function(p) {
          return t && !p.length && p.push(r), p;
        }));
      });
      function gm() {
        return Su(this);
      }
      function _m() {
        return new Ot(this.value(), this.__chain__);
      }
      function ym() {
        this.__values__ === r && (this.__values__ = Vu(this.value()));
        var e = this.__index__ >= this.__values__.length, t = e ? r : this.__values__[this.__index__++];
        return { done: e, value: t };
      }
      function bm() {
        return this;
      }
      function wm(e) {
        for (var t, i = this; i instanceof yi; ) {
          var a = gu(i);
          a.__index__ = 0, a.__values__ = r, t ? u.__wrapped__ = a : t = a;
          var u = a;
          i = i.__wrapped__;
        }
        return u.__wrapped__ = e, t;
      }
      function xm() {
        var e = this.__wrapped__;
        if (e instanceof pe) {
          var t = e;
          return this.__actions__.length && (t = new pe(this)), t = t.reverse(), t.__actions__.push({
            func: Li,
            args: [_o],
            thisArg: r
          }), new Ot(t, this.__chain__);
        }
        return this.thru(_o);
      }
      function Em() {
        return Fl(this.__wrapped__, this.__actions__);
      }
      var Sm = Ci(function(e, t, i) {
        be.call(e, i) ? ++e[i] : sn(e, i, 1);
      });
      function $m(e, t, i) {
        var a = oe(e) ? ja : vh;
        return i && at(e, t, i) && (t = r), a(e, te(t, 3));
      }
      function Cm(e, t) {
        var i = oe(e) ? gn : El;
        return i(e, te(t, 3));
      }
      var Rm = Zl(_u), km = Zl(yu);
      function Am(e, t) {
        return Ze(Pi(e, t), 1);
      }
      function Tm(e, t) {
        return Ze(Pi(e, t), Ge);
      }
      function Om(e, t, i) {
        return i = i === r ? 1 : ae(i), Ze(Pi(e, t), i);
      }
      function $u(e, t) {
        var i = oe(e) ? At : wn;
        return i(e, te(t, 3));
      }
      function Cu(e, t) {
        var i = oe(e) ? Jd : xl;
        return i(e, te(t, 3));
      }
      var Im = Ci(function(e, t, i) {
        be.call(e, i) ? e[i].push(t) : sn(e, i, [t]);
      });
      function Nm(e, t, i, a) {
        e = dt(e) ? e : ar(e), i = i && !a ? ae(i) : 0;
        var u = e.length;
        return i < 0 && (i = ze(u + i, 0)), Fi(e) ? i <= u && e.indexOf(t, i) > -1 : !!u && Xn(e, t, i) > -1;
      }
      var Lm = ue(function(e, t, i) {
        var a = -1, u = typeof t == "function", p = dt(e) ? R(e.length) : [];
        return wn(e, function(g) {
          p[++a] = u ? mt(t, g, i) : Lr(g, t, i);
        }), p;
      }), Pm = Ci(function(e, t, i) {
        sn(e, i, t);
      });
      function Pi(e, t) {
        var i = oe(e) ? Te : Al;
        return i(e, te(t, 3));
      }
      function Dm(e, t, i, a) {
        return e == null ? [] : (oe(t) || (t = t == null ? [] : [t]), i = a ? r : i, oe(i) || (i = i == null ? [] : [i]), Nl(e, t, i));
      }
      var Mm = Ci(function(e, t, i) {
        e[i ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function Vm(e, t, i) {
        var a = oe(e) ? Ts : rl, u = arguments.length < 3;
        return a(e, te(t, 4), i, u, wn);
      }
      function Um(e, t, i) {
        var a = oe(e) ? Zd : rl, u = arguments.length < 3;
        return a(e, te(t, 4), i, u, xl);
      }
      function Fm(e, t) {
        var i = oe(e) ? gn : El;
        return i(e, Vi(te(t, 3)));
      }
      function Bm(e) {
        var t = oe(e) ? _l : Nh;
        return t(e);
      }
      function Hm(e, t, i) {
        (i ? at(e, t, i) : t === r) ? t = 1 : t = ae(t);
        var a = oe(e) ? ch : Lh;
        return a(e, t);
      }
      function Wm(e) {
        var t = oe(e) ? fh : Dh;
        return t(e);
      }
      function zm(e) {
        if (e == null)
          return 0;
        if (dt(e))
          return Fi(e) ? Zn(e) : e.length;
        var t = tt(e);
        return t == Ft || t == Bt ? e.size : Xs(e).length;
      }
      function Gm(e, t, i) {
        var a = oe(e) ? Os : Mh;
        return i && at(e, t, i) && (t = r), a(e, te(t, 3));
      }
      var qm = ue(function(e, t) {
        if (e == null)
          return [];
        var i = t.length;
        return i > 1 && at(e, t[0], t[1]) ? t = [] : i > 2 && at(t[0], t[1], t[2]) && (t = [t[0]]), Nl(e, Ze(t, 1), []);
      }), Di = Cp || function() {
        return Je.Date.now();
      };
      function Km(e, t) {
        if (typeof t != "function")
          throw new Tt(d);
        return e = ae(e), function() {
          if (--e < 1)
            return t.apply(this, arguments);
        };
      }
      function Ru(e, t, i) {
        return t = i ? r : t, t = e && t == null ? e.length : t, on(e, P, r, r, r, r, t);
      }
      function ku(e, t) {
        var i;
        if (typeof t != "function")
          throw new Tt(d);
        return e = ae(e), function() {
          return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = r), i;
        };
      }
      var bo = ue(function(e, t, i) {
        var a = D;
        if (i.length) {
          var u = yn(i, sr(bo));
          a |= J;
        }
        return on(e, a, t, i, u);
      }), Au = ue(function(e, t, i) {
        var a = D | B;
        if (i.length) {
          var u = yn(i, sr(Au));
          a |= J;
        }
        return on(t, a, e, i, u);
      });
      function Tu(e, t, i) {
        t = i ? r : t;
        var a = on(e, O, r, r, r, r, r, t);
        return a.placeholder = Tu.placeholder, a;
      }
      function Ou(e, t, i) {
        t = i ? r : t;
        var a = on(e, W, r, r, r, r, r, t);
        return a.placeholder = Ou.placeholder, a;
      }
      function Iu(e, t, i) {
        var a, u, p, g, _, E, I = 0, N = !1, V = !1, Y = !0;
        if (typeof e != "function")
          throw new Tt(d);
        t = Pt(t) || 0, Oe(i) && (N = !!i.leading, V = "maxWait" in i, p = V ? ze(Pt(i.maxWait) || 0, t) : p, Y = "trailing" in i ? !!i.trailing : Y);
        function j(Fe) {
          var Gt = a, fn = u;
          return a = u = r, I = Fe, g = e.apply(fn, Gt), g;
        }
        function ne(Fe) {
          return I = Fe, _ = Ur(de, t), N ? j(Fe) : g;
        }
        function le(Fe) {
          var Gt = Fe - E, fn = Fe - I, Zu = t - Gt;
          return V ? et(Zu, p - fn) : Zu;
        }
        function re(Fe) {
          var Gt = Fe - E, fn = Fe - I;
          return E === r || Gt >= t || Gt < 0 || V && fn >= p;
        }
        function de() {
          var Fe = Di();
          if (re(Fe))
            return he(Fe);
          _ = Ur(de, le(Fe));
        }
        function he(Fe) {
          return _ = r, Y && a ? j(Fe) : (a = u = r, g);
        }
        function bt() {
          _ !== r && Hl(_), I = 0, a = E = u = _ = r;
        }
        function lt() {
          return _ === r ? g : he(Di());
        }
        function wt() {
          var Fe = Di(), Gt = re(Fe);
          if (a = arguments, u = this, E = Fe, Gt) {
            if (_ === r)
              return ne(E);
            if (V)
              return Hl(_), _ = Ur(de, t), j(E);
          }
          return _ === r && (_ = Ur(de, t)), g;
        }
        return wt.cancel = bt, wt.flush = lt, wt;
      }
      var Ym = ue(function(e, t) {
        return wl(e, 1, t);
      }), Xm = ue(function(e, t, i) {
        return wl(e, Pt(t) || 0, i);
      });
      function Jm(e) {
        return on(e, Ae);
      }
      function Mi(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new Tt(d);
        var i = function() {
          var a = arguments, u = t ? t.apply(this, a) : a[0], p = i.cache;
          if (p.has(u))
            return p.get(u);
          var g = e.apply(this, a);
          return i.cache = p.set(u, g) || p, g;
        };
        return i.cache = new (Mi.Cache || rn)(), i;
      }
      Mi.Cache = rn;
      function Vi(e) {
        if (typeof e != "function")
          throw new Tt(d);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, t[0]);
            case 2:
              return !e.call(this, t[0], t[1]);
            case 3:
              return !e.call(this, t[0], t[1], t[2]);
          }
          return !e.apply(this, t);
        };
      }
      function Zm(e) {
        return ku(2, e);
      }
      var Qm = Vh(function(e, t) {
        t = t.length == 1 && oe(t[0]) ? Te(t[0], gt(te())) : Te(Ze(t, 1), gt(te()));
        var i = t.length;
        return ue(function(a) {
          for (var u = -1, p = et(a.length, i); ++u < p; )
            a[u] = t[u].call(this, a[u]);
          return mt(e, this, a);
        });
      }), wo = ue(function(e, t) {
        var i = yn(t, sr(wo));
        return on(e, J, r, t, i);
      }), Nu = ue(function(e, t) {
        var i = yn(t, sr(Nu));
        return on(e, ee, r, t, i);
      }), jm = an(function(e, t) {
        return on(e, ve, r, r, r, t);
      });
      function eg(e, t) {
        if (typeof e != "function")
          throw new Tt(d);
        return t = t === r ? t : ae(t), ue(e, t);
      }
      function tg(e, t) {
        if (typeof e != "function")
          throw new Tt(d);
        return t = t == null ? 0 : ze(ae(t), 0), ue(function(i) {
          var a = i[t], u = Sn(i, 0, t);
          return a && _n(u, a), mt(e, this, u);
        });
      }
      function ng(e, t, i) {
        var a = !0, u = !0;
        if (typeof e != "function")
          throw new Tt(d);
        return Oe(i) && (a = "leading" in i ? !!i.leading : a, u = "trailing" in i ? !!i.trailing : u), Iu(e, t, {
          leading: a,
          maxWait: t,
          trailing: u
        });
      }
      function rg(e) {
        return Ru(e, 1);
      }
      function ig(e, t) {
        return wo(io(t), e);
      }
      function sg() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return oe(e) ? e : [e];
      }
      function og(e) {
        return It(e, k);
      }
      function ag(e, t) {
        return t = typeof t == "function" ? t : r, It(e, k, t);
      }
      function lg(e) {
        return It(e, S | k);
      }
      function ug(e, t) {
        return t = typeof t == "function" ? t : r, It(e, S | k, t);
      }
      function cg(e, t) {
        return t == null || bl(e, t, qe(t));
      }
      function zt(e, t) {
        return e === t || e !== e && t !== t;
      }
      var fg = Ti(qs), dg = Ti(function(e, t) {
        return e >= t;
      }), Mn = Cl(function() {
        return arguments;
      }()) ? Cl : function(e) {
        return Le(e) && be.call(e, "callee") && !dl.call(e, "callee");
      }, oe = R.isArray, pg = Ka ? gt(Ka) : wh;
      function dt(e) {
        return e != null && Ui(e.length) && !un(e);
      }
      function Ue(e) {
        return Le(e) && dt(e);
      }
      function hg(e) {
        return e === !0 || e === !1 || Le(e) && ot(e) == yr;
      }
      var $n = kp || Io, vg = Ya ? gt(Ya) : xh;
      function mg(e) {
        return Le(e) && e.nodeType === 1 && !Fr(e);
      }
      function gg(e) {
        if (e == null)
          return !0;
        if (dt(e) && (oe(e) || typeof e == "string" || typeof e.splice == "function" || $n(e) || or(e) || Mn(e)))
          return !e.length;
        var t = tt(e);
        if (t == Ft || t == Bt)
          return !e.size;
        if (Vr(e))
          return !Xs(e).length;
        for (var i in e)
          if (be.call(e, i))
            return !1;
        return !0;
      }
      function _g(e, t) {
        return Pr(e, t);
      }
      function yg(e, t, i) {
        i = typeof i == "function" ? i : r;
        var a = i ? i(e, t) : r;
        return a === r ? Pr(e, t, r, i) : !!a;
      }
      function xo(e) {
        if (!Le(e))
          return !1;
        var t = ot(e);
        return t == Zr || t == Hf || typeof e.message == "string" && typeof e.name == "string" && !Fr(e);
      }
      function bg(e) {
        return typeof e == "number" && hl(e);
      }
      function un(e) {
        if (!Oe(e))
          return !1;
        var t = ot(e);
        return t == Qr || t == wa || t == ba || t == zf;
      }
      function Lu(e) {
        return typeof e == "number" && e == ae(e);
      }
      function Ui(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Se;
      }
      function Oe(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function Le(e) {
        return e != null && typeof e == "object";
      }
      var Pu = Xa ? gt(Xa) : Sh;
      function wg(e, t) {
        return e === t || Ys(e, t, fo(t));
      }
      function xg(e, t, i) {
        return i = typeof i == "function" ? i : r, Ys(e, t, fo(t), i);
      }
      function Eg(e) {
        return Du(e) && e != +e;
      }
      function Sg(e) {
        if (av(e))
          throw new se(c);
        return Rl(e);
      }
      function $g(e) {
        return e === null;
      }
      function Cg(e) {
        return e == null;
      }
      function Du(e) {
        return typeof e == "number" || Le(e) && ot(e) == wr;
      }
      function Fr(e) {
        if (!Le(e) || ot(e) != tn)
          return !1;
        var t = di(e);
        if (t === null)
          return !0;
        var i = be.call(t, "constructor") && t.constructor;
        return typeof i == "function" && i instanceof i && li.call(i) == xp;
      }
      var Eo = Ja ? gt(Ja) : $h;
      function Rg(e) {
        return Lu(e) && e >= -Se && e <= Se;
      }
      var Mu = Za ? gt(Za) : Ch;
      function Fi(e) {
        return typeof e == "string" || !oe(e) && Le(e) && ot(e) == Er;
      }
      function yt(e) {
        return typeof e == "symbol" || Le(e) && ot(e) == jr;
      }
      var or = Qa ? gt(Qa) : Rh;
      function kg(e) {
        return e === r;
      }
      function Ag(e) {
        return Le(e) && tt(e) == Sr;
      }
      function Tg(e) {
        return Le(e) && ot(e) == qf;
      }
      var Og = Ti(Js), Ig = Ti(function(e, t) {
        return e <= t;
      });
      function Vu(e) {
        if (!e)
          return [];
        if (dt(e))
          return Fi(e) ? Ht(e) : ft(e);
        if (Rr && e[Rr])
          return cp(e[Rr]());
        var t = tt(e), i = t == Ft ? Ms : t == Bt ? si : ar;
        return i(e);
      }
      function cn(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Pt(e), e === Ge || e === -Ge) {
          var t = e < 0 ? -1 : 1;
          return t * Gn;
        }
        return e === e ? e : 0;
      }
      function ae(e) {
        var t = cn(e), i = t % 1;
        return t === t ? i ? t - i : t : 0;
      }
      function Uu(e) {
        return e ? Nn(ae(e), 0, Ne) : 0;
      }
      function Pt(e) {
        if (typeof e == "number")
          return e;
        if (yt(e))
          return $e;
        if (Oe(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = Oe(t) ? t + "" : t;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = il(e);
        var i = pd.test(e);
        return i || vd.test(e) ? Kd(e.slice(2), i ? 2 : 8) : dd.test(e) ? $e : +e;
      }
      function Fu(e) {
        return Jt(e, pt(e));
      }
      function Ng(e) {
        return e ? Nn(ae(e), -Se, Se) : e === 0 ? e : 0;
      }
      function ye(e) {
        return e == null ? "" : _t(e);
      }
      var Lg = rr(function(e, t) {
        if (Vr(t) || dt(t)) {
          Jt(t, qe(t), e);
          return;
        }
        for (var i in t)
          be.call(t, i) && Ir(e, i, t[i]);
      }), Bu = rr(function(e, t) {
        Jt(t, pt(t), e);
      }), Bi = rr(function(e, t, i, a) {
        Jt(t, pt(t), e, a);
      }), Pg = rr(function(e, t, i, a) {
        Jt(t, qe(t), e, a);
      }), Dg = an(Ws);
      function Mg(e, t) {
        var i = nr(e);
        return t == null ? i : yl(i, t);
      }
      var Vg = ue(function(e, t) {
        e = Ee(e);
        var i = -1, a = t.length, u = a > 2 ? t[2] : r;
        for (u && at(t[0], t[1], u) && (a = 1); ++i < a; )
          for (var p = t[i], g = pt(p), _ = -1, E = g.length; ++_ < E; ) {
            var I = g[_], N = e[I];
            (N === r || zt(N, jn[I]) && !be.call(e, I)) && (e[I] = p[I]);
          }
        return e;
      }), Ug = ue(function(e) {
        return e.push(r, iu), mt(Hu, r, e);
      });
      function Fg(e, t) {
        return el(e, te(t, 3), Xt);
      }
      function Bg(e, t) {
        return el(e, te(t, 3), Gs);
      }
      function Hg(e, t) {
        return e == null ? e : zs(e, te(t, 3), pt);
      }
      function Wg(e, t) {
        return e == null ? e : Sl(e, te(t, 3), pt);
      }
      function zg(e, t) {
        return e && Xt(e, te(t, 3));
      }
      function Gg(e, t) {
        return e && Gs(e, te(t, 3));
      }
      function qg(e) {
        return e == null ? [] : xi(e, qe(e));
      }
      function Kg(e) {
        return e == null ? [] : xi(e, pt(e));
      }
      function So(e, t, i) {
        var a = e == null ? r : Ln(e, t);
        return a === r ? i : a;
      }
      function Yg(e, t) {
        return e != null && au(e, t, gh);
      }
      function $o(e, t) {
        return e != null && au(e, t, _h);
      }
      var Xg = jl(function(e, t, i) {
        t != null && typeof t.toString != "function" && (t = ui.call(t)), e[t] = i;
      }, Ro(ht)), Jg = jl(function(e, t, i) {
        t != null && typeof t.toString != "function" && (t = ui.call(t)), be.call(e, t) ? e[t].push(i) : e[t] = [i];
      }, te), Zg = ue(Lr);
      function qe(e) {
        return dt(e) ? gl(e) : Xs(e);
      }
      function pt(e) {
        return dt(e) ? gl(e, !0) : kh(e);
      }
      function Qg(e, t) {
        var i = {};
        return t = te(t, 3), Xt(e, function(a, u, p) {
          sn(i, t(a, u, p), a);
        }), i;
      }
      function jg(e, t) {
        var i = {};
        return t = te(t, 3), Xt(e, function(a, u, p) {
          sn(i, u, t(a, u, p));
        }), i;
      }
      var e_ = rr(function(e, t, i) {
        Ei(e, t, i);
      }), Hu = rr(function(e, t, i, a) {
        Ei(e, t, i, a);
      }), t_ = an(function(e, t) {
        var i = {};
        if (e == null)
          return i;
        var a = !1;
        t = Te(t, function(p) {
          return p = En(p, e), a || (a = p.length > 1), p;
        }), Jt(e, uo(e), i), a && (i = It(i, S | $ | k, Xh));
        for (var u = t.length; u--; )
          to(i, t[u]);
        return i;
      });
      function n_(e, t) {
        return Wu(e, Vi(te(t)));
      }
      var r_ = an(function(e, t) {
        return e == null ? {} : Th(e, t);
      });
      function Wu(e, t) {
        if (e == null)
          return {};
        var i = Te(uo(e), function(a) {
          return [a];
        });
        return t = te(t), Ll(e, i, function(a, u) {
          return t(a, u[0]);
        });
      }
      function i_(e, t, i) {
        t = En(t, e);
        var a = -1, u = t.length;
        for (u || (u = 1, e = r); ++a < u; ) {
          var p = e == null ? r : e[Zt(t[a])];
          p === r && (a = u, p = i), e = un(p) ? p.call(e) : p;
        }
        return e;
      }
      function s_(e, t, i) {
        return e == null ? e : Dr(e, t, i);
      }
      function o_(e, t, i, a) {
        return a = typeof a == "function" ? a : r, e == null ? e : Dr(e, t, i, a);
      }
      var zu = nu(qe), Gu = nu(pt);
      function a_(e, t, i) {
        var a = oe(e), u = a || $n(e) || or(e);
        if (t = te(t, 4), i == null) {
          var p = e && e.constructor;
          u ? i = a ? new p() : [] : Oe(e) ? i = un(p) ? nr(di(e)) : {} : i = {};
        }
        return (u ? At : Xt)(e, function(g, _, E) {
          return t(i, g, _, E);
        }), i;
      }
      function l_(e, t) {
        return e == null ? !0 : to(e, t);
      }
      function u_(e, t, i) {
        return e == null ? e : Ul(e, t, io(i));
      }
      function c_(e, t, i, a) {
        return a = typeof a == "function" ? a : r, e == null ? e : Ul(e, t, io(i), a);
      }
      function ar(e) {
        return e == null ? [] : Ds(e, qe(e));
      }
      function f_(e) {
        return e == null ? [] : Ds(e, pt(e));
      }
      function d_(e, t, i) {
        return i === r && (i = t, t = r), i !== r && (i = Pt(i), i = i === i ? i : 0), t !== r && (t = Pt(t), t = t === t ? t : 0), Nn(Pt(e), t, i);
      }
      function p_(e, t, i) {
        return t = cn(t), i === r ? (i = t, t = 0) : i = cn(i), e = Pt(e), yh(e, t, i);
      }
      function h_(e, t, i) {
        if (i && typeof i != "boolean" && at(e, t, i) && (t = i = r), i === r && (typeof t == "boolean" ? (i = t, t = r) : typeof e == "boolean" && (i = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = cn(e), t === r ? (t = e, e = 0) : t = cn(t)), e > t) {
          var a = e;
          e = t, t = a;
        }
        if (i || e % 1 || t % 1) {
          var u = vl();
          return et(e + u * (t - e + qd("1e-" + ((u + "").length - 1))), t);
        }
        return Qs(e, t);
      }
      var v_ = ir(function(e, t, i) {
        return t = t.toLowerCase(), e + (i ? qu(t) : t);
      });
      function qu(e) {
        return Co(ye(e).toLowerCase());
      }
      function Ku(e) {
        return e = ye(e), e && e.replace(gd, sp).replace(Dd, "");
      }
      function m_(e, t, i) {
        e = ye(e), t = _t(t);
        var a = e.length;
        i = i === r ? a : Nn(ae(i), 0, a);
        var u = i;
        return i -= t.length, i >= 0 && e.slice(i, u) == t;
      }
      function g_(e) {
        return e = ye(e), e && Zf.test(e) ? e.replace(Sa, op) : e;
      }
      function __(e) {
        return e = ye(e), e && rd.test(e) ? e.replace(bs, "\\$&") : e;
      }
      var y_ = ir(function(e, t, i) {
        return e + (i ? "-" : "") + t.toLowerCase();
      }), b_ = ir(function(e, t, i) {
        return e + (i ? " " : "") + t.toLowerCase();
      }), w_ = Jl("toLowerCase");
      function x_(e, t, i) {
        e = ye(e), t = ae(t);
        var a = t ? Zn(e) : 0;
        if (!t || a >= t)
          return e;
        var u = (t - a) / 2;
        return Ai(mi(u), i) + e + Ai(vi(u), i);
      }
      function E_(e, t, i) {
        e = ye(e), t = ae(t);
        var a = t ? Zn(e) : 0;
        return t && a < t ? e + Ai(t - a, i) : e;
      }
      function S_(e, t, i) {
        e = ye(e), t = ae(t);
        var a = t ? Zn(e) : 0;
        return t && a < t ? Ai(t - a, i) + e : e;
      }
      function $_(e, t, i) {
        return i || t == null ? t = 0 : t && (t = +t), Ip(ye(e).replace(ws, ""), t || 0);
      }
      function C_(e, t, i) {
        return (i ? at(e, t, i) : t === r) ? t = 1 : t = ae(t), js(ye(e), t);
      }
      function R_() {
        var e = arguments, t = ye(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      var k_ = ir(function(e, t, i) {
        return e + (i ? "_" : "") + t.toLowerCase();
      });
      function A_(e, t, i) {
        return i && typeof i != "number" && at(e, t, i) && (t = i = r), i = i === r ? Ne : i >>> 0, i ? (e = ye(e), e && (typeof t == "string" || t != null && !Eo(t)) && (t = _t(t), !t && Jn(e)) ? Sn(Ht(e), 0, i) : e.split(t, i)) : [];
      }
      var T_ = ir(function(e, t, i) {
        return e + (i ? " " : "") + Co(t);
      });
      function O_(e, t, i) {
        return e = ye(e), i = i == null ? 0 : Nn(ae(i), 0, e.length), t = _t(t), e.slice(i, i + t.length) == t;
      }
      function I_(e, t, i) {
        var a = f.templateSettings;
        i && at(e, t, i) && (t = r), e = ye(e), t = Bi({}, t, a, ru);
        var u = Bi({}, t.imports, a.imports, ru), p = qe(u), g = Ds(u, p), _, E, I = 0, N = t.interpolate || ei, V = "__p += '", Y = Vs(
          (t.escape || ei).source + "|" + N.source + "|" + (N === $a ? fd : ei).source + "|" + (t.evaluate || ei).source + "|$",
          "g"
        ), j = "//# sourceURL=" + (be.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Bd + "]") + `
`;
        e.replace(Y, function(re, de, he, bt, lt, wt) {
          return he || (he = bt), V += e.slice(I, wt).replace(_d, ap), de && (_ = !0, V += `' +
__e(` + de + `) +
'`), lt && (E = !0, V += `';
` + lt + `;
__p += '`), he && (V += `' +
((__t = (` + he + `)) == null ? '' : __t) +
'`), I = wt + re.length, re;
        }), V += `';
`;
        var ne = be.call(t, "variable") && t.variable;
        if (!ne)
          V = `with (obj) {
` + V + `
}
`;
        else if (ud.test(ne))
          throw new se(v);
        V = (E ? V.replace(Kf, "") : V).replace(Yf, "$1").replace(Xf, "$1;"), V = "function(" + (ne || "obj") + `) {
` + (ne ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (_ ? ", __e = _.escape" : "") + (E ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + V + `return __p
}`;
        var le = Xu(function() {
          return ge(p, j + "return " + V).apply(r, g);
        });
        if (le.source = V, xo(le))
          throw le;
        return le;
      }
      function N_(e) {
        return ye(e).toLowerCase();
      }
      function L_(e) {
        return ye(e).toUpperCase();
      }
      function P_(e, t, i) {
        if (e = ye(e), e && (i || t === r))
          return il(e);
        if (!e || !(t = _t(t)))
          return e;
        var a = Ht(e), u = Ht(t), p = sl(a, u), g = ol(a, u) + 1;
        return Sn(a, p, g).join("");
      }
      function D_(e, t, i) {
        if (e = ye(e), e && (i || t === r))
          return e.slice(0, ll(e) + 1);
        if (!e || !(t = _t(t)))
          return e;
        var a = Ht(e), u = ol(a, Ht(t)) + 1;
        return Sn(a, 0, u).join("");
      }
      function M_(e, t, i) {
        if (e = ye(e), e && (i || t === r))
          return e.replace(ws, "");
        if (!e || !(t = _t(t)))
          return e;
        var a = Ht(e), u = sl(a, Ht(t));
        return Sn(a, u).join("");
      }
      function V_(e, t) {
        var i = G, a = q;
        if (Oe(t)) {
          var u = "separator" in t ? t.separator : u;
          i = "length" in t ? ae(t.length) : i, a = "omission" in t ? _t(t.omission) : a;
        }
        e = ye(e);
        var p = e.length;
        if (Jn(e)) {
          var g = Ht(e);
          p = g.length;
        }
        if (i >= p)
          return e;
        var _ = i - Zn(a);
        if (_ < 1)
          return a;
        var E = g ? Sn(g, 0, _).join("") : e.slice(0, _);
        if (u === r)
          return E + a;
        if (g && (_ += E.length - _), Eo(u)) {
          if (e.slice(_).search(u)) {
            var I, N = E;
            for (u.global || (u = Vs(u.source, ye(Ca.exec(u)) + "g")), u.lastIndex = 0; I = u.exec(N); )
              var V = I.index;
            E = E.slice(0, V === r ? _ : V);
          }
        } else if (e.indexOf(_t(u), _) != _) {
          var Y = E.lastIndexOf(u);
          Y > -1 && (E = E.slice(0, Y));
        }
        return E + a;
      }
      function U_(e) {
        return e = ye(e), e && Jf.test(e) ? e.replace(Ea, hp) : e;
      }
      var F_ = ir(function(e, t, i) {
        return e + (i ? " " : "") + t.toUpperCase();
      }), Co = Jl("toUpperCase");
      function Yu(e, t, i) {
        return e = ye(e), t = i ? r : t, t === r ? up(e) ? gp(e) : ep(e) : e.match(t) || [];
      }
      var Xu = ue(function(e, t) {
        try {
          return mt(e, r, t);
        } catch (i) {
          return xo(i) ? i : new se(i);
        }
      }), B_ = an(function(e, t) {
        return At(t, function(i) {
          i = Zt(i), sn(e, i, bo(e[i], e));
        }), e;
      });
      function H_(e) {
        var t = e == null ? 0 : e.length, i = te();
        return e = t ? Te(e, function(a) {
          if (typeof a[1] != "function")
            throw new Tt(d);
          return [i(a[0]), a[1]];
        }) : [], ue(function(a) {
          for (var u = -1; ++u < t; ) {
            var p = e[u];
            if (mt(p[0], this, a))
              return mt(p[1], this, a);
          }
        });
      }
      function W_(e) {
        return hh(It(e, S));
      }
      function Ro(e) {
        return function() {
          return e;
        };
      }
      function z_(e, t) {
        return e == null || e !== e ? t : e;
      }
      var G_ = Ql(), q_ = Ql(!0);
      function ht(e) {
        return e;
      }
      function ko(e) {
        return kl(typeof e == "function" ? e : It(e, S));
      }
      function K_(e) {
        return Tl(It(e, S));
      }
      function Y_(e, t) {
        return Ol(e, It(t, S));
      }
      var X_ = ue(function(e, t) {
        return function(i) {
          return Lr(i, e, t);
        };
      }), J_ = ue(function(e, t) {
        return function(i) {
          return Lr(e, i, t);
        };
      });
      function Ao(e, t, i) {
        var a = qe(t), u = xi(t, a);
        i == null && !(Oe(t) && (u.length || !a.length)) && (i = t, t = e, e = this, u = xi(t, qe(t)));
        var p = !(Oe(i) && "chain" in i) || !!i.chain, g = un(e);
        return At(u, function(_) {
          var E = t[_];
          e[_] = E, g && (e.prototype[_] = function() {
            var I = this.__chain__;
            if (p || I) {
              var N = e(this.__wrapped__), V = N.__actions__ = ft(this.__actions__);
              return V.push({ func: E, args: arguments, thisArg: e }), N.__chain__ = I, N;
            }
            return E.apply(e, _n([this.value()], arguments));
          });
        }), e;
      }
      function Z_() {
        return Je._ === this && (Je._ = Ep), this;
      }
      function To() {
      }
      function Q_(e) {
        return e = ae(e), ue(function(t) {
          return Il(t, e);
        });
      }
      var j_ = oo(Te), ey = oo(ja), ty = oo(Os);
      function Ju(e) {
        return ho(e) ? Is(Zt(e)) : Oh(e);
      }
      function ny(e) {
        return function(t) {
          return e == null ? r : Ln(e, t);
        };
      }
      var ry = eu(), iy = eu(!0);
      function Oo() {
        return [];
      }
      function Io() {
        return !1;
      }
      function sy() {
        return {};
      }
      function oy() {
        return "";
      }
      function ay() {
        return !0;
      }
      function ly(e, t) {
        if (e = ae(e), e < 1 || e > Se)
          return [];
        var i = Ne, a = et(e, Ne);
        t = te(t), e -= Ne;
        for (var u = Ps(a, t); ++i < e; )
          t(i);
        return u;
      }
      function uy(e) {
        return oe(e) ? Te(e, Zt) : yt(e) ? [e] : ft(mu(ye(e)));
      }
      function cy(e) {
        var t = ++wp;
        return ye(e) + t;
      }
      var fy = ki(function(e, t) {
        return e + t;
      }, 0), dy = ao("ceil"), py = ki(function(e, t) {
        return e / t;
      }, 1), hy = ao("floor");
      function vy(e) {
        return e && e.length ? wi(e, ht, qs) : r;
      }
      function my(e, t) {
        return e && e.length ? wi(e, te(t, 2), qs) : r;
      }
      function gy(e) {
        return nl(e, ht);
      }
      function _y(e, t) {
        return nl(e, te(t, 2));
      }
      function yy(e) {
        return e && e.length ? wi(e, ht, Js) : r;
      }
      function by(e, t) {
        return e && e.length ? wi(e, te(t, 2), Js) : r;
      }
      var wy = ki(function(e, t) {
        return e * t;
      }, 1), xy = ao("round"), Ey = ki(function(e, t) {
        return e - t;
      }, 0);
      function Sy(e) {
        return e && e.length ? Ls(e, ht) : 0;
      }
      function $y(e, t) {
        return e && e.length ? Ls(e, te(t, 2)) : 0;
      }
      return f.after = Km, f.ary = Ru, f.assign = Lg, f.assignIn = Bu, f.assignInWith = Bi, f.assignWith = Pg, f.at = Dg, f.before = ku, f.bind = bo, f.bindAll = B_, f.bindKey = Au, f.castArray = sg, f.chain = Su, f.chunk = hv, f.compact = vv, f.concat = mv, f.cond = H_, f.conforms = W_, f.constant = Ro, f.countBy = Sm, f.create = Mg, f.curry = Tu, f.curryRight = Ou, f.debounce = Iu, f.defaults = Vg, f.defaultsDeep = Ug, f.defer = Ym, f.delay = Xm, f.difference = gv, f.differenceBy = _v, f.differenceWith = yv, f.drop = bv, f.dropRight = wv, f.dropRightWhile = xv, f.dropWhile = Ev, f.fill = Sv, f.filter = Cm, f.flatMap = Am, f.flatMapDeep = Tm, f.flatMapDepth = Om, f.flatten = bu, f.flattenDeep = $v, f.flattenDepth = Cv, f.flip = Jm, f.flow = G_, f.flowRight = q_, f.fromPairs = Rv, f.functions = qg, f.functionsIn = Kg, f.groupBy = Im, f.initial = Av, f.intersection = Tv, f.intersectionBy = Ov, f.intersectionWith = Iv, f.invert = Xg, f.invertBy = Jg, f.invokeMap = Lm, f.iteratee = ko, f.keyBy = Pm, f.keys = qe, f.keysIn = pt, f.map = Pi, f.mapKeys = Qg, f.mapValues = jg, f.matches = K_, f.matchesProperty = Y_, f.memoize = Mi, f.merge = e_, f.mergeWith = Hu, f.method = X_, f.methodOf = J_, f.mixin = Ao, f.negate = Vi, f.nthArg = Q_, f.omit = t_, f.omitBy = n_, f.once = Zm, f.orderBy = Dm, f.over = j_, f.overArgs = Qm, f.overEvery = ey, f.overSome = ty, f.partial = wo, f.partialRight = Nu, f.partition = Mm, f.pick = r_, f.pickBy = Wu, f.property = Ju, f.propertyOf = ny, f.pull = Dv, f.pullAll = xu, f.pullAllBy = Mv, f.pullAllWith = Vv, f.pullAt = Uv, f.range = ry, f.rangeRight = iy, f.rearg = jm, f.reject = Fm, f.remove = Fv, f.rest = eg, f.reverse = _o, f.sampleSize = Hm, f.set = s_, f.setWith = o_, f.shuffle = Wm, f.slice = Bv, f.sortBy = qm, f.sortedUniq = Yv, f.sortedUniqBy = Xv, f.split = A_, f.spread = tg, f.tail = Jv, f.take = Zv, f.takeRight = Qv, f.takeRightWhile = jv, f.takeWhile = em, f.tap = vm, f.throttle = ng, f.thru = Li, f.toArray = Vu, f.toPairs = zu, f.toPairsIn = Gu, f.toPath = uy, f.toPlainObject = Fu, f.transform = a_, f.unary = rg, f.union = tm, f.unionBy = nm, f.unionWith = rm, f.uniq = im, f.uniqBy = sm, f.uniqWith = om, f.unset = l_, f.unzip = yo, f.unzipWith = Eu, f.update = u_, f.updateWith = c_, f.values = ar, f.valuesIn = f_, f.without = am, f.words = Yu, f.wrap = ig, f.xor = lm, f.xorBy = um, f.xorWith = cm, f.zip = fm, f.zipObject = dm, f.zipObjectDeep = pm, f.zipWith = hm, f.entries = zu, f.entriesIn = Gu, f.extend = Bu, f.extendWith = Bi, Ao(f, f), f.add = fy, f.attempt = Xu, f.camelCase = v_, f.capitalize = qu, f.ceil = dy, f.clamp = d_, f.clone = og, f.cloneDeep = lg, f.cloneDeepWith = ug, f.cloneWith = ag, f.conformsTo = cg, f.deburr = Ku, f.defaultTo = z_, f.divide = py, f.endsWith = m_, f.eq = zt, f.escape = g_, f.escapeRegExp = __, f.every = $m, f.find = Rm, f.findIndex = _u, f.findKey = Fg, f.findLast = km, f.findLastIndex = yu, f.findLastKey = Bg, f.floor = hy, f.forEach = $u, f.forEachRight = Cu, f.forIn = Hg, f.forInRight = Wg, f.forOwn = zg, f.forOwnRight = Gg, f.get = So, f.gt = fg, f.gte = dg, f.has = Yg, f.hasIn = $o, f.head = wu, f.identity = ht, f.includes = Nm, f.indexOf = kv, f.inRange = p_, f.invoke = Zg, f.isArguments = Mn, f.isArray = oe, f.isArrayBuffer = pg, f.isArrayLike = dt, f.isArrayLikeObject = Ue, f.isBoolean = hg, f.isBuffer = $n, f.isDate = vg, f.isElement = mg, f.isEmpty = gg, f.isEqual = _g, f.isEqualWith = yg, f.isError = xo, f.isFinite = bg, f.isFunction = un, f.isInteger = Lu, f.isLength = Ui, f.isMap = Pu, f.isMatch = wg, f.isMatchWith = xg, f.isNaN = Eg, f.isNative = Sg, f.isNil = Cg, f.isNull = $g, f.isNumber = Du, f.isObject = Oe, f.isObjectLike = Le, f.isPlainObject = Fr, f.isRegExp = Eo, f.isSafeInteger = Rg, f.isSet = Mu, f.isString = Fi, f.isSymbol = yt, f.isTypedArray = or, f.isUndefined = kg, f.isWeakMap = Ag, f.isWeakSet = Tg, f.join = Nv, f.kebabCase = y_, f.last = Lt, f.lastIndexOf = Lv, f.lowerCase = b_, f.lowerFirst = w_, f.lt = Og, f.lte = Ig, f.max = vy, f.maxBy = my, f.mean = gy, f.meanBy = _y, f.min = yy, f.minBy = by, f.stubArray = Oo, f.stubFalse = Io, f.stubObject = sy, f.stubString = oy, f.stubTrue = ay, f.multiply = wy, f.nth = Pv, f.noConflict = Z_, f.noop = To, f.now = Di, f.pad = x_, f.padEnd = E_, f.padStart = S_, f.parseInt = $_, f.random = h_, f.reduce = Vm, f.reduceRight = Um, f.repeat = C_, f.replace = R_, f.result = i_, f.round = xy, f.runInContext = w, f.sample = Bm, f.size = zm, f.snakeCase = k_, f.some = Gm, f.sortedIndex = Hv, f.sortedIndexBy = Wv, f.sortedIndexOf = zv, f.sortedLastIndex = Gv, f.sortedLastIndexBy = qv, f.sortedLastIndexOf = Kv, f.startCase = T_, f.startsWith = O_, f.subtract = Ey, f.sum = Sy, f.sumBy = $y, f.template = I_, f.times = ly, f.toFinite = cn, f.toInteger = ae, f.toLength = Uu, f.toLower = N_, f.toNumber = Pt, f.toSafeInteger = Ng, f.toString = ye, f.toUpper = L_, f.trim = P_, f.trimEnd = D_, f.trimStart = M_, f.truncate = V_, f.unescape = U_, f.uniqueId = cy, f.upperCase = F_, f.upperFirst = Co, f.each = $u, f.eachRight = Cu, f.first = wu, Ao(f, function() {
        var e = {};
        return Xt(f, function(t, i) {
          be.call(f.prototype, i) || (e[i] = t);
        }), e;
      }(), { chain: !1 }), f.VERSION = o, At(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        f[e].placeholder = f;
      }), At(["drop", "take"], function(e, t) {
        pe.prototype[e] = function(i) {
          i = i === r ? 1 : ze(ae(i), 0);
          var a = this.__filtered__ && !t ? new pe(this) : this.clone();
          return a.__filtered__ ? a.__takeCount__ = et(i, a.__takeCount__) : a.__views__.push({
            size: et(i, Ne),
            type: e + (a.__dir__ < 0 ? "Right" : "")
          }), a;
        }, pe.prototype[e + "Right"] = function(i) {
          return this.reverse()[e](i).reverse();
        };
      }), At(["filter", "map", "takeWhile"], function(e, t) {
        var i = t + 1, a = i == fe || i == Yt;
        pe.prototype[e] = function(u) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: te(u, 3),
            type: i
          }), p.__filtered__ = p.__filtered__ || a, p;
        };
      }), At(["head", "last"], function(e, t) {
        var i = "take" + (t ? "Right" : "");
        pe.prototype[e] = function() {
          return this[i](1).value()[0];
        };
      }), At(["initial", "tail"], function(e, t) {
        var i = "drop" + (t ? "" : "Right");
        pe.prototype[e] = function() {
          return this.__filtered__ ? new pe(this) : this[i](1);
        };
      }), pe.prototype.compact = function() {
        return this.filter(ht);
      }, pe.prototype.find = function(e) {
        return this.filter(e).head();
      }, pe.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, pe.prototype.invokeMap = ue(function(e, t) {
        return typeof e == "function" ? new pe(this) : this.map(function(i) {
          return Lr(i, e, t);
        });
      }), pe.prototype.reject = function(e) {
        return this.filter(Vi(te(e)));
      }, pe.prototype.slice = function(e, t) {
        e = ae(e);
        var i = this;
        return i.__filtered__ && (e > 0 || t < 0) ? new pe(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), t !== r && (t = ae(t), i = t < 0 ? i.dropRight(-t) : i.take(t - e)), i);
      }, pe.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, pe.prototype.toArray = function() {
        return this.take(Ne);
      }, Xt(pe.prototype, function(e, t) {
        var i = /^(?:filter|find|map|reject)|While$/.test(t), a = /^(?:head|last)$/.test(t), u = f[a ? "take" + (t == "last" ? "Right" : "") : t], p = a || /^find/.test(t);
        u && (f.prototype[t] = function() {
          var g = this.__wrapped__, _ = a ? [1] : arguments, E = g instanceof pe, I = _[0], N = E || oe(g), V = function(de) {
            var he = u.apply(f, _n([de], _));
            return a && Y ? he[0] : he;
          };
          N && i && typeof I == "function" && I.length != 1 && (E = N = !1);
          var Y = this.__chain__, j = !!this.__actions__.length, ne = p && !Y, le = E && !j;
          if (!p && N) {
            g = le ? g : new pe(this);
            var re = e.apply(g, _);
            return re.__actions__.push({ func: Li, args: [V], thisArg: r }), new Ot(re, Y);
          }
          return ne && le ? e.apply(this, _) : (re = this.thru(V), ne ? a ? re.value()[0] : re.value() : re);
        });
      }), At(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = oi[e], i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", a = /^(?:pop|shift)$/.test(e);
        f.prototype[e] = function() {
          var u = arguments;
          if (a && !this.__chain__) {
            var p = this.value();
            return t.apply(oe(p) ? p : [], u);
          }
          return this[i](function(g) {
            return t.apply(oe(g) ? g : [], u);
          });
        };
      }), Xt(pe.prototype, function(e, t) {
        var i = f[t];
        if (i) {
          var a = i.name + "";
          be.call(tr, a) || (tr[a] = []), tr[a].push({ name: t, func: i });
        }
      }), tr[Ri(r, B).name] = [{
        name: "wrapper",
        func: r
      }], pe.prototype.clone = Up, pe.prototype.reverse = Fp, pe.prototype.value = Bp, f.prototype.at = mm, f.prototype.chain = gm, f.prototype.commit = _m, f.prototype.next = ym, f.prototype.plant = wm, f.prototype.reverse = xm, f.prototype.toJSON = f.prototype.valueOf = f.prototype.value = Em, f.prototype.first = f.prototype.head, Rr && (f.prototype[Rr] = bm), f;
    }, Qn = _p();
    An ? ((An.exports = Qn)._ = Qn, Rs._ = Qn) : Je._ = Qn;
  }).call(Un);
})(Qi, Qi.exports);
var je = Qi.exports;
function ac(n) {
  return n !== null && typeof n == "object" && "constructor" in n && n.constructor === Object;
}
function la(n, s) {
  n === void 0 && (n = {}), s === void 0 && (s = {}), Object.keys(s).forEach(function(r) {
    typeof n[r] > "u" ? n[r] = s[r] : ac(s[r]) && ac(n[r]) && Object.keys(s[r]).length > 0 && la(n[r], s[r]);
  });
}
var cf = {
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
function ua() {
  var n = typeof document < "u" ? document : {};
  return la(n, cf), n;
}
var C0 = {
  document: cf,
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
  requestAnimationFrame: function(n) {
    return typeof setTimeout > "u" ? (n(), null) : setTimeout(n, 0);
  },
  cancelAnimationFrame: function(n) {
    typeof setTimeout > "u" || clearTimeout(n);
  }
};
function ff() {
  var n = typeof window < "u" ? window : {};
  return la(n, C0), n;
}
function R0(n, s) {
  n.prototype = Object.create(s.prototype), n.prototype.constructor = n, n.__proto__ = s;
}
function Zo(n) {
  return Zo = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Zo(n);
}
function ji(n, s) {
  return ji = Object.setPrototypeOf || function(o, l) {
    return o.__proto__ = l, o;
  }, ji(n, s);
}
function k0() {
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
function Ki(n, s, r) {
  return k0() ? Ki = Reflect.construct : Ki = function(l, c, d) {
    var v = [null];
    v.push.apply(v, c);
    var m = Function.bind.apply(l, v), h = new m();
    return d && ji(h, d.prototype), h;
  }, Ki.apply(null, arguments);
}
function A0(n) {
  return Function.toString.call(n).indexOf("[native code]") !== -1;
}
function Qo(n) {
  var s = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Qo = function(o) {
    if (o === null || !A0(o))
      return o;
    if (typeof o != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof s < "u") {
      if (s.has(o))
        return s.get(o);
      s.set(o, l);
    }
    function l() {
      return Ki(o, arguments, Zo(this).constructor);
    }
    return l.prototype = Object.create(o.prototype, {
      constructor: {
        value: l,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ji(l, o);
  }, Qo(n);
}
function T0(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function O0(n) {
  var s = n.__proto__;
  Object.defineProperty(n, "__proto__", {
    get: function() {
      return s;
    },
    set: function(o) {
      s.__proto__ = o;
    }
  });
}
var Bn = /* @__PURE__ */ function(n) {
  R0(s, n);
  function s(r) {
    var o;
    return o = n.call.apply(n, [this].concat(r)) || this, O0(T0(o)), o;
  }
  return s;
}(/* @__PURE__ */ Qo(Array));
function ca(n) {
  n === void 0 && (n = []);
  var s = [];
  return n.forEach(function(r) {
    Array.isArray(r) ? s.push.apply(s, ca(r)) : s.push(r);
  }), s;
}
function I0(n) {
  for (var s = [], r = 0; r < n.length; r += 1)
    s.indexOf(n[r]) === -1 && s.push(n[r]);
  return s;
}
function N0(n) {
  return n.toLowerCase().replace(/-(.)/g, function(s, r) {
    return r.toUpperCase();
  });
}
function L0(n, s) {
  if (typeof n != "string")
    return [n];
  for (var r = [], o = s.querySelectorAll(n), l = 0; l < o.length; l += 1)
    r.push(o[l]);
  return r;
}
function xe(n, s) {
  var r = ff(), o = ua(), l = [];
  if (!s && n instanceof Bn)
    return n;
  if (!n)
    return new Bn(l);
  if (typeof n == "string") {
    var c = n.trim();
    if (c.indexOf("<") >= 0 && c.indexOf(">") >= 0) {
      var d = "div";
      c.indexOf("<li") === 0 && (d = "ul"), c.indexOf("<tr") === 0 && (d = "tbody"), (c.indexOf("<td") === 0 || c.indexOf("<th") === 0) && (d = "tr"), c.indexOf("<tbody") === 0 && (d = "table"), c.indexOf("<option") === 0 && (d = "select");
      var v = o.createElement(d);
      v.innerHTML = c;
      for (var m = 0; m < v.childNodes.length; m += 1)
        l.push(v.childNodes[m]);
    } else
      l = L0(n.trim(), s || o);
  } else if (n.nodeType || n === r || n === o)
    l.push(n);
  else if (Array.isArray(n)) {
    if (n instanceof Bn)
      return n;
    l = n;
  }
  return new Bn(I0(l));
}
xe.fn = Bn.prototype;
function lc() {
  for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)
    s[r] = arguments[r];
  var o = ca(s.map(function(l) {
    return l.split(" ");
  }));
  return this.forEach(function(l) {
    var c;
    (c = l.classList).add.apply(c, o);
  }), this;
}
function uc() {
  for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)
    s[r] = arguments[r];
  var o = ca(s.map(function(l) {
    return l.split(" ");
  }));
  return this.forEach(function(l) {
    var c;
    (c = l.classList).remove.apply(c, o);
  }), this;
}
function cc(n, s) {
  if (arguments.length === 1 && typeof n == "string")
    return this[0] ? this[0].getAttribute(n) : void 0;
  for (var r = 0; r < this.length; r += 1)
    if (arguments.length === 2)
      this[r].setAttribute(n, s);
    else
      for (var o in n)
        this[r][o] = n[o], this[r].setAttribute(o, n[o]);
  return this;
}
function fc() {
  var n = this[0];
  if (n) {
    var s = {};
    if (n.dataset)
      for (var r in n.dataset)
        s[r] = n.dataset[r];
    else
      for (var o = 0; o < n.attributes.length; o += 1) {
        var l = n.attributes[o];
        l.name.indexOf("data-") >= 0 && (s[N0(l.name.split("data-")[1])] = l.value);
      }
    for (var c in s)
      s[c] === "false" ? s[c] = !1 : s[c] === "true" ? s[c] = !0 : parseFloat(s[c]) === s[c] * 1 && (s[c] *= 1);
    return s;
  }
}
function dc(n) {
  if (typeof n > "u") {
    var s = this[0];
    if (!s)
      return;
    if (s.multiple && s.nodeName.toLowerCase() === "select") {
      for (var r = [], o = 0; o < s.selectedOptions.length; o += 1)
        r.push(s.selectedOptions[o].value);
      return r;
    }
    return s.value;
  }
  for (var l = 0; l < this.length; l += 1) {
    var c = this[l];
    if (Array.isArray(n) && c.multiple && c.nodeName.toLowerCase() === "select")
      for (var d = 0; d < c.options.length; d += 1)
        c.options[d].selected = n.indexOf(c.options[d].value) >= 0;
    else
      c.value = n;
  }
  return this;
}
function pc() {
  for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)
    s[r] = arguments[r];
  var o = s[0], l = s[1], c = s[2], d = s[3];
  typeof s[1] == "function" && (o = s[0], c = s[1], d = s[2], l = void 0), d || (d = !1);
  function v(b) {
    var D = b.target;
    if (D) {
      var B = b.target.dom7EventData || [];
      if (B.indexOf(b) < 0 && B.unshift(b), xe(D).is(l))
        c.apply(D, B);
      else
        for (var H = xe(D).parents(), O = 0; O < H.length; O += 1)
          xe(H[O]).is(l) && c.apply(H[O], B);
    }
  }
  function m(b) {
    var D = b && b.target ? b.target.dom7EventData || [] : [];
    D.indexOf(b) < 0 && D.unshift(b), c.apply(this, D);
  }
  for (var h = o.split(" "), y, S = 0; S < this.length; S += 1) {
    var $ = this[S];
    if (l)
      for (y = 0; y < h.length; y += 1) {
        var x = h[y];
        $.dom7LiveListeners || ($.dom7LiveListeners = {}), $.dom7LiveListeners[x] || ($.dom7LiveListeners[x] = []), $.dom7LiveListeners[x].push({
          listener: c,
          proxyListener: v
        }), $.addEventListener(x, v, d);
      }
    else
      for (y = 0; y < h.length; y += 1) {
        var k = h[y];
        $.dom7Listeners || ($.dom7Listeners = {}), $.dom7Listeners[k] || ($.dom7Listeners[k] = []), $.dom7Listeners[k].push({
          listener: c,
          proxyListener: m
        }), $.addEventListener(k, m, d);
      }
  }
  return this;
}
function hc() {
  for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)
    s[r] = arguments[r];
  var o = s[0], l = s[1], c = s[2], d = s[3];
  typeof s[1] == "function" && (o = s[0], c = s[1], d = s[2], l = void 0), d || (d = !1);
  for (var v = o.split(" "), m = 0; m < v.length; m += 1)
    for (var h = v[m], y = 0; y < this.length; y += 1) {
      var S = this[y], $ = void 0;
      if (!l && S.dom7Listeners ? $ = S.dom7Listeners[h] : l && S.dom7LiveListeners && ($ = S.dom7LiveListeners[h]), $ && $.length)
        for (var k = $.length - 1; k >= 0; k -= 1) {
          var x = $[k];
          c && x.listener === c || c && x.listener && x.listener.dom7proxy && x.listener.dom7proxy === c ? (S.removeEventListener(h, x.proxyListener, d), $.splice(k, 1)) : c || (S.removeEventListener(h, x.proxyListener, d), $.splice(k, 1));
        }
    }
  return this;
}
function vc() {
  for (var n = 0; n < this.length; n += 1)
    this[n].style.display = "none";
  return this;
}
function mc(n) {
  return n ? (this.forEach(function(s, r) {
    n.apply(s, [s, r]);
  }), this) : this;
}
function gc(n) {
  if (typeof n > "u")
    return this[0] ? this[0].innerHTML : null;
  for (var s = 0; s < this.length; s += 1)
    this[s].innerHTML = n;
  return this;
}
function _c(n) {
  var s = ff(), r = ua(), o = this[0], l, c;
  if (!o || typeof n > "u")
    return !1;
  if (typeof n == "string") {
    if (o.matches)
      return o.matches(n);
    if (o.webkitMatchesSelector)
      return o.webkitMatchesSelector(n);
    if (o.msMatchesSelector)
      return o.msMatchesSelector(n);
    for (l = xe(n), c = 0; c < l.length; c += 1)
      if (l[c] === o)
        return !0;
    return !1;
  }
  if (n === r)
    return o === r;
  if (n === s)
    return o === s;
  if (n.nodeType || n instanceof Bn) {
    for (l = n.nodeType ? [n] : n, c = 0; c < l.length; c += 1)
      if (l[c] === o)
        return !0;
    return !1;
  }
  return !1;
}
function yc() {
  for (var n, s = ua(), r = 0; r < arguments.length; r += 1) {
    n = r < 0 || arguments.length <= r ? void 0 : arguments[r];
    for (var o = 0; o < this.length; o += 1)
      if (typeof n == "string") {
        var l = s.createElement("div");
        for (l.innerHTML = n; l.firstChild; )
          this[o].appendChild(l.firstChild);
      } else if (n instanceof Bn)
        for (var c = 0; c < n.length; c += 1)
          this[o].appendChild(n[c]);
      else
        this[o].appendChild(n);
  }
  return this;
}
function bc(n) {
  for (var s = [], r = 0; r < this.length; r += 1)
    for (var o = this[r].parentNode; o; )
      n ? xe(o).is(n) && s.push(o) : s.push(o), o = o.parentNode;
  return xe(s);
}
function wc(n) {
  for (var s = [], r = 0; r < this.length; r += 1)
    for (var o = this[r].querySelectorAll(n), l = 0; l < o.length; l += 1)
      s.push(o[l]);
  return xe(s);
}
function xc(n) {
  for (var s = [], r = 0; r < this.length; r += 1)
    for (var o = this[r].children, l = 0; l < o.length; l += 1)
      (!n || xe(o[l]).is(n)) && s.push(o[l]);
  return xe(s);
}
var P0 = "resize scroll".split(" ");
function df(n) {
  function s() {
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    if (typeof o[0] > "u") {
      for (var c = 0; c < this.length; c += 1)
        P0.indexOf(n) < 0 && (n in this[c] ? this[c][n]() : xe(this[c]).trigger(n));
      return this;
    }
    return this.on.apply(this, [n].concat(o));
  }
  return s;
}
var Ec = df("click"), Sc = df("focus");
vc && (xe.fn.hide = vc);
yc && (xe.fn.append = yc);
Ec && (xe.fn.click = Ec);
pc && (xe.fn.on = pc);
hc && (xe.fn.off = hc);
Sc && (xe.fn.focus = Sc);
cc && (xe.fn.attr = cc);
dc && (xe.fn.val = dc);
gc && (xe.fn.html = gc);
fc && (xe.fn.dataset = fc);
lc && (xe.fn.addClass = lc);
uc && (xe.fn.removeClass = uc);
xc && (xe.fn.children = xc);
mc && (xe.fn.each = mc);
wc && (xe.fn.find = wc);
_c && (xe.fn.is = _c);
bc && (xe.fn.parents = bc);
const WS = globalThis.Node, zS = globalThis.Comment, GS = globalThis.Element, qS = globalThis.Text, KS = globalThis.Range, YS = globalThis.Selection, XS = globalThis.StaticRange;
let D0 = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((s, r) => (r &= 63, r < 36 ? s += r.toString(36) : r < 62 ? s += (r - 26).toString(36).toUpperCase() : r > 62 ? s += "-" : s += "_", s), "");
function JS(n = "r") {
  return `${n}-${D0()}`;
}
let M0 = class {
  constructor() {
    Pe(this, "audio");
    Pe(this, "src");
    this.audio = null, this.src = null;
  }
  removeAudioElement() {
    this.audio && (document.body.removeChild(this.audio), this.audio = null, this.src = null);
  }
  play(s) {
    this.stop(), this.audio = document.createElement("audio"), this.audio.hidden = !0, this.audio.volume = 0.5, this.audio.src = s, this.src = s, document.body.appendChild(this.audio), this.audio.play();
  }
  stop(s) {
    s && s !== this.src || this.audio && (this.audio.pause(), this.audio.currentTime = 0, this.removeAudioElement());
  }
};
const vr = new M0();
function $c(n) {
  const s = Math.floor(n / 60), r = n % 60, o = String(s).padStart(2, "0"), l = String(r).padStart(2, "0");
  return `${o}:${l}`;
}
class V0 {
  constructor(s) {
    Pe(this, "accept");
    Pe(this, "dom");
    Pe(this, "isdestroy", !1);
    Pe(this, "resolve");
    Pe(this, "reject");
    this.accept = s, this.dom = null, this.resolve = null, this.reject = null;
  }
  createInputElement() {
    const s = document.createElement("input");
    return s.type = "file", s.accept = this.accept, s.hidden = !0, s;
  }
  change(s) {
    var r, o;
    if (this.dom && this.dom.files && this.dom.files.length > 0) {
      const l = this.dom.files.item(0);
      if (l) {
        (r = this.resolve) == null || r.call(this, l), this.dom.value = "";
        return;
      }
      this.dom.value = "";
    }
    return (o = this.reject) == null ? void 0 : o.call(this, s);
  }
  cancel(s) {
    var r;
    return this.dom && (this.dom.value = ""), (r = this.reject) == null ? void 0 : r.call(this, s);
  }
  open() {
    if (this.isdestroy)
      throw Error("对象已经销毁");
    this.dom || (this.dom = this.createInputElement(), this.dom.addEventListener("change", this.change.bind(this)), this.dom.addEventListener("cancel", this.cancel.bind(this)), document.body.appendChild(this.dom)), this.dom.click();
    const s = this;
    return new Promise((r, o) => {
      s.resolve = r, s.reject = o;
    });
  }
  destroy() {
    this.isdestroy || (this.dom && document.body.removeChild(this.dom), this.dom = null, this.isdestroy = !0);
  }
}
class Cc {
  constructor(s) {
    Pe(this, "cancelled", !1);
    Pe(this, "timeoutId", null);
    this.timeoutMilliseconds = s;
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
class U0 {
  constructor(s = 60) {
    Pe(this, "isStop", !1);
    Pe(this, "count", L(0));
    Pe(this, "timeoutId", null);
    this.timeoutSeconds = s;
  }
  clearTimeout() {
    this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  get state() {
    return Be(() => this.count.value);
  }
  start(s) {
    s && (this.timeoutSeconds = s), this.isStop = !1, this.count.value = 0, this.clearTimeout(), this.timeoutId = setInterval(() => {
      !this.isStop && this.count.value < this.timeoutSeconds ? this.count.value++ : this.clearTimeout();
    }, 1e3);
  }
  stop() {
    this.isStop = !0, this.clearTimeout();
  }
}
function F0(n) {
  const { selection: s } = n;
  if (s) {
    const [r, o] = Rt.edges(s), l = He.range(n, r, o), c = He.string(n, l), d = c.trimEnd();
    if (d !== c) {
      const v = c.length - d.length, m = { ...o, offset: o.offset - v }, h = { ...s, anchor: r, focus: m };
      Me.select(n, h);
    }
  }
}
function Rc(n, s) {
  He.withoutNormalizing(n, () => {
    const r = He.start(n, s), o = He.end(n, s);
    Me.insertText(n, " ", { at: r }), Me.insertText(n, " ", {
      at: { path: o.path, offset: o.offset + 1 }
    }), Me.select(n, {
      anchor: { path: r.path, offset: r.offset + 1 },
      focus: { path: o.path, offset: o.offset + 1 }
    });
  });
}
function mr(n, s) {
  He.withoutNormalizing(n, () => {
    const r = He.before(n, s), o = He.after(n, s);
    if (!r || !o)
      return;
    const l = {
      anchor: { path: r.path, offset: r.offset - 1 },
      focus: { path: r.path, offset: r.offset }
    }, c = {
      anchor: { path: o.path, offset: o.offset },
      focus: { path: o.path, offset: o.offset + 1 }
    };
    He.string(n, l) === " " && Me.delete(n, { at: l }), He.string(n, c) === " " && Me.delete(n, { at: c });
  });
}
const B0 = {
  type: "ssml-audio",
  renderElem: (n, s, r) => s ? H0(n, s, r) : W0(n, r)
};
function H0(n, s, r) {
  const { remark: o, src: l } = n;
  return /* @__PURE__ */ F("span", { className: "ssml-wrapper" }, /* @__PURE__ */ F(
    "span",
    {
      className: "remark",
      contentEditable: "false",
      style: { "background-color": "var(--ssml-audio)" }
    },
    /* @__PURE__ */ F(
      "span",
      {
        className: "iconfont icon-roundclosefill",
        on: {
          click: je.throttle((c) => {
            c.preventDefault(), vr.stop(l);
            const d = ie.findPath(r, n);
            mr(r, d), Me.unwrapNodes(r, { at: d });
          })
        }
      }
    ),
    /* @__PURE__ */ F(
      "span",
      {
        className: "iconfont icon-play",
        on: {
          click: je.throttle((c) => {
            c.preventDefault(), vr.play(l);
          })
        }
      }
    ),
    /* @__PURE__ */ F("span", { className: "data-content", attrs: { "data-content": o } })
  ), /* @__PURE__ */ F(
    "span",
    {
      className: "data-content",
      contentEditable: "false",
      attrs: { "data-content": "{" },
      style: { color: "var(--ssml-audio)" }
    }
  ), /* @__PURE__ */ F("span", null, s), /* @__PURE__ */ F(
    "span",
    {
      className: "data-content",
      contentEditable: "false",
      attrs: { "data-content": "}" },
      style: { color: "var(--ssml-audio)" }
    }
  ));
}
function W0(n, s) {
  const { remark: r, src: o } = n;
  return /* @__PURE__ */ F("span", { className: "ssml-wrapper", contentEditable: "false" }, /* @__PURE__ */ F("span", { className: "remark", style: { "background-color": "var(--ssml-audio)" } }, /* @__PURE__ */ F(
    "span",
    {
      className: "iconfont icon-roundclosefill",
      on: {
        click: je.throttle((l) => {
          l.preventDefault(), vr.stop(o);
          const c = ie.findPath(s, n);
          Me.delete(s, { at: c });
        })
      }
    }
  ), /* @__PURE__ */ F(
    "span",
    {
      className: "iconfont icon-play",
      on: {
        click: je.throttle((l) => {
          l.preventDefault(), vr.play(o);
        })
      }
    }
  ), /* @__PURE__ */ F("span", { className: "data-content", attrs: { "data-content": r } })), /* @__PURE__ */ F("span", { className: "iconfont icon-music", style: { color: "var(--ssml-audio)" } }));
}
const z0 = {
  type: "ssml-audio",
  elemToHtml: (n, s) => {
    const { remark: r, src: o } = n;
    return `<span
          data-w-e-type="ssml-audio"
          data-w-e-is-void
          data-w-e-is-inline
          data-ow-src="${o}"
          data-ow-remark="${r}"
        >${s}</span>`;
  }
}, G0 = {
  selector: 'span[data-w-e-type="ssml-audio"]',
  parseElemHtml: (n, s) => {
    const r = n.getAttribute("data-ow-src") || "", o = n.getAttribute("data-ow-remark") || "";
    return {
      type: "ssml-audio",
      src: r,
      remark: o,
      children: s
    };
  }
}, q0 = {
  editorPlugin: $0,
  renderElems: [B0],
  elemsToHtml: [z0],
  parseElemsHtml: [G0]
}, K0 = (n) => {
  const { isInline: s, isVoid: r } = n, o = n;
  return o.isInline = (l) => ie.getNodeType(l) === "ssml-break" ? !0 : s(l), o.isVoid = (l) => ie.getNodeType(l) === "ssml-break" ? !0 : r(l), o;
}, Y0 = {
  type: "ssml-break",
  renderElem: (n, s, r) => {
    const { remark: o } = n;
    return /* @__PURE__ */ F("span", { className: "ssml-wrapper", contentEditable: "false" }, /* @__PURE__ */ F("span", { className: "remark", style: { "background-color": "var(--ssml-break)" } }, /* @__PURE__ */ F(
      "span",
      {
        className: "iconfont icon-roundclosefill",
        on: {
          click: je.throttle((l) => {
            l.preventDefault();
            const c = ie.findPath(r, n);
            Me.delete(r, { at: c });
          })
        }
      }
    ), /* @__PURE__ */ F("span", { className: "data-content", attrs: { "data-content": o } })), /* @__PURE__ */ F("span", { className: "iconfont icon-tingdun", style: { color: "var(--ssml-break)" } }));
  }
}, X0 = {
  type: "ssml-break",
  elemToHtml: (n) => {
    const { remark: s, time: r, strength: o } = n;
    return `<span
          data-w-e-type="ssml-break"
          data-w-e-is-void
          data-w-e-is-inline
          data-ow-remark="${s}"
          data-ow-time="${r ?? ""}"
          data-ow-strength="${o ?? "medium"}"
        ></span>`;
  }
}, J0 = {
  selector: 'span[data-w-e-type="ssml-break"]',
  parseElemHtml: (n) => {
    const s = n.getAttribute("data-ow-remark") || "", r = n.getAttribute("data-ow-time") || "", o = n.getAttribute("data-ow-strength") || "";
    return {
      type: "ssml-break",
      remark: s,
      time: r,
      strength: o,
      children: [{ text: "" }]
    };
  }
}, Z0 = {
  editorPlugin: K0,
  renderElems: [Y0],
  elemsToHtml: [X0],
  parseElemsHtml: [J0]
}, Q0 = (n) => {
  const { isInline: s, isVoid: r } = n, o = n;
  return o.isInline = (l) => ie.getNodeType(l) === "ssml-emphasis" ? !0 : s(l), o.isVoid = (l) => ie.getNodeType(l) === "ssml-emphasis" ? !1 : r(l), o;
}, j0 = {
  type: "ssml-emphasis",
  renderElem: (n, s, r) => {
    const { remark: o } = n;
    return /* @__PURE__ */ F("span", { className: "ssml-wrapper" }, /* @__PURE__ */ F(
      "span",
      {
        className: "remark",
        contentEditable: "false",
        style: { "background-color": "var(--ssml-emphasis)" }
      },
      /* @__PURE__ */ F(
        "span",
        {
          className: "iconfont icon-roundclosefill",
          on: {
            click: je.throttle((l) => {
              l.preventDefault();
              const c = ie.findPath(r, n);
              Me.unwrapNodes(r, { at: c });
            })
          }
        }
      ),
      /* @__PURE__ */ F("span", { className: "data-content", attrs: { "data-content": o } })
    ), /* @__PURE__ */ F(
      "span",
      {
        className: "data-content",
        contentEditable: "false",
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-emphasis)" }
      }
    ), /* @__PURE__ */ F("span", null, s), /* @__PURE__ */ F(
      "span",
      {
        className: "data-content",
        contentEditable: "false",
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-emphasis)" }
      }
    ));
  }
}, eb = {
  type: "ssml-emphasis",
  elemToHtml: (n, s) => {
    const { remark: r, level: o } = n;
    return `<span
          data-w-e-type="ssml-emphasis"
          data-w-e-is-inline
          data-ow-remark="${r}"
          data-ow-level="${o ?? "none"}"
        >${s}</span>`;
  }
}, tb = {
  selector: 'span[data-w-e-type="ssml-emphasis"]',
  parseElemHtml: (n, s) => {
    const r = n.getAttribute("data-ow-remark") || "", o = n.getAttribute("data-ow-level") || "";
    return {
      type: "ssml-emphasis",
      remark: r,
      level: o,
      children: s
    };
  }
}, nb = {
  editorPlugin: Q0,
  renderElems: [j0],
  elemsToHtml: [eb],
  parseElemsHtml: [tb]
}, rb = (n) => {
  const { isInline: s, isVoid: r } = n, o = n;
  return o.isInline = (l) => ie.getNodeType(l) === "ssml-mstts:express-as" ? !0 : s(l), o.isVoid = (l) => ie.getNodeType(l) === "ssml-mstts:express-as" ? !1 : r(l), o;
}, ib = {
  type: "ssml-mstts:express-as",
  renderElem: (n, s, r) => {
    const { remark: o } = n;
    return /* @__PURE__ */ F("span", { className: "ssml-wrapper" }, /* @__PURE__ */ F(
      "span",
      {
        className: "remark",
        contentEditable: "false",
        style: { "background-color": "var(--ssml-mstts--express-as)" }
      },
      /* @__PURE__ */ F(
        "span",
        {
          className: "iconfont icon-roundclosefill",
          on: {
            click: je.throttle((l) => {
              l.preventDefault();
              const c = ie.findPath(r, n);
              Me.unwrapNodes(r, { at: c });
            })
          }
        }
      ),
      /* @__PURE__ */ F("span", { className: "data-content", attrs: { "data-content": o } })
    ), /* @__PURE__ */ F(
      "span",
      {
        className: "data-content",
        contentEditable: "false",
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-mstts--express-as)" }
      }
    ), /* @__PURE__ */ F("span", null, s), /* @__PURE__ */ F(
      "span",
      {
        className: "data-content",
        contentEditable: "false",
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-mstts--express-as)" }
      }
    ));
  }
}, sb = {
  type: "ssml-mstts:express-as",
  elemToHtml: (n, s) => {
    const { remark: r, style: o, role: l, styledegree: c } = n;
    return `<span
          data-w-e-type="ssml-mstts:express-as"
          data-w-e-is-inline
          data-ow-remark="${r}"
          data-ow-style="${o}"
          data-ow-styledegree="${c ?? ""}"
          data-ow-role="${l ?? ""}"
        >${s}</span>`;
  }
}, ob = {
  selector: 'span[data-w-e-type="ssml-mstts:express-as"]',
  parseElemHtml: (n, s) => {
    const r = n.getAttribute("data-ow-remark") || "", o = n.getAttribute("data-ow-style") || "", l = n.getAttribute("data-ow-styledegree") || "", c = n.getAttribute("data-ow-role") || "";
    return {
      type: "ssml-mstts:express-as",
      style: o,
      remark: r,
      styledegree: l,
      role: c,
      children: s
    };
  }
}, ab = {
  editorPlugin: rb,
  renderElems: [ib],
  elemsToHtml: [sb],
  parseElemsHtml: [ob]
}, lb = (n) => {
  const { isInline: s, isVoid: r } = n, o = n;
  return o.isInline = (l) => ie.getNodeType(l) === "ssml-p" ? !0 : s(l), o.isVoid = (l) => ie.getNodeType(l) === "ssml-p" ? !1 : r(l), o;
}, ub = {
  type: "ssml-p",
  renderElem: (n, s, r) => {
    const { remark: o } = n;
    return /* @__PURE__ */ F("span", { className: "ssml-wrapper" }, /* @__PURE__ */ F(
      "span",
      {
        className: "remark",
        contentEditable: "false",
        style: { "background-color": "var(--ssml-p)" }
      },
      /* @__PURE__ */ F(
        "span",
        {
          className: "iconfont icon-roundclosefill",
          on: {
            click: je.throttle((l) => {
              l.preventDefault();
              const c = ie.findPath(r, n);
              Me.unwrapNodes(r, { at: c });
            })
          }
        }
      ),
      /* @__PURE__ */ F("span", { className: "data-content", attrs: { "data-content": o } })
    ), /* @__PURE__ */ F(
      "span",
      {
        className: "data-content",
        contentEditable: "false",
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-p)" }
      }
    ), /* @__PURE__ */ F("span", null, s), /* @__PURE__ */ F(
      "span",
      {
        className: "data-content",
        contentEditable: "false",
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-p)" }
      }
    ));
  }
}, cb = {
  type: "ssml-p",
  elemToHtml: (n, s) => {
    const { remark: r } = n;
    return `<span
          data-w-e-type="ssml-p"
          data-w-e-is-inline
          data-ow-remark="${r}"
        >${s}</span>`;
  }
}, fb = {
  selector: 'span[data-w-e-type="ssml-p"]',
  parseElemHtml: (n, s) => ({
    type: "ssml-p",
    remark: n.getAttribute("data-ow-remark") || "",
    children: s
  })
}, db = {
  editorPlugin: lb,
  renderElems: [ub],
  elemsToHtml: [cb],
  parseElemsHtml: [fb]
}, pb = (n) => {
  const { isInline: s, isVoid: r } = n, o = n;
  return o.isInline = (l) => ie.getNodeType(l) === "ssml-phoneme" ? !0 : s(l), o.isVoid = (l) => ie.getNodeType(l) === "ssml-phoneme" ? !1 : r(l), o;
}, hb = {
  type: "ssml-phoneme",
  renderElem: (n, s, r) => {
    const { remark: o } = n;
    return /* @__PURE__ */ F("span", { className: "ssml-wrapper" }, /* @__PURE__ */ F(
      "span",
      {
        className: "remark",
        contentEditable: "false",
        style: { "background-color": "var(--ssml-phoneme)" }
      },
      /* @__PURE__ */ F(
        "span",
        {
          className: "iconfont icon-roundclosefill",
          on: {
            click: je.throttle((l) => {
              l.preventDefault();
              const c = ie.findPath(r, n);
              mr(r, c), Me.unwrapNodes(r, { at: c });
            })
          }
        }
      ),
      /* @__PURE__ */ F("span", { className: "data-content", attrs: { "data-content": o } })
    ), /* @__PURE__ */ F(
      "span",
      {
        className: "data-content",
        contentEditable: "false",
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-phoneme)" }
      }
    ), /* @__PURE__ */ F("span", null, s), /* @__PURE__ */ F(
      "span",
      {
        className: "data-content",
        contentEditable: "false",
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-phoneme)" }
      }
    ));
  }
}, vb = {
  type: "ssml-phoneme",
  elemToHtml: (n, s) => {
    const { remark: r, alphabet: o, ph: l } = n;
    return `<span
          data-w-e-type="ssml-phoneme"
          data-w-e-is-inline
          data-ow-remark="${r}"
          data-ow-alphabet="${o ?? ""}"
          data-ow-ph="${l}"
        >${s}</span>`;
  }
}, mb = {
  selector: 'span[data-w-e-type="ssml-phoneme"]',
  parseElemHtml: (n, s) => {
    const r = n.getAttribute("data-ow-remark") || "", o = n.getAttribute("data-ow-alphabet") || "", l = n.getAttribute("data-ow-ph") || "";
    return {
      type: "ssml-phoneme",
      remark: r,
      alphabet: o,
      ph: l,
      children: s
    };
  }
}, gb = {
  editorPlugin: pb,
  renderElems: [hb],
  elemsToHtml: [vb],
  parseElemsHtml: [mb]
}, _b = (n) => {
  const { isInline: s, isVoid: r } = n, o = n;
  return o.isInline = (l) => ie.getNodeType(l) === "ssml-prosody" ? !0 : s(l), o.isVoid = (l) => ie.getNodeType(l) === "ssml-prosody" ? !1 : r(l), o;
}, yb = {
  type: "ssml-prosody",
  renderElem: (n, s, r) => {
    const { remark: o } = n;
    return /* @__PURE__ */ F("span", { className: "ssml-wrapper" }, /* @__PURE__ */ F(
      "span",
      {
        className: "remark",
        contentEditable: "false",
        style: { "background-color": "var(--ssml-prosody)" }
      },
      /* @__PURE__ */ F(
        "span",
        {
          className: "iconfont icon-roundclosefill",
          on: {
            click: je.throttle((l) => {
              l.preventDefault();
              const c = ie.findPath(r, n);
              mr(r, c), Me.unwrapNodes(r, { at: c });
            })
          }
        }
      ),
      /* @__PURE__ */ F("span", { className: "data-content", attrs: { "data-content": o } })
    ), /* @__PURE__ */ F(
      "span",
      {
        className: "data-content",
        contentEditable: "false",
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-prosody)" }
      }
    ), /* @__PURE__ */ F("span", null, s), /* @__PURE__ */ F(
      "span",
      {
        className: "data-content",
        contentEditable: "false",
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-prosody)" }
      }
    ));
  }
}, bb = {
  type: "ssml-prosody",
  elemToHtml: (n, s) => {
    const { remark: r, contour: o, pitch: l, range: c, rate: d, volume: v } = n;
    return `<span
          data-w-e-type="ssml-prosody"
          data-w-e-is-inline
          data-ow-remark="${r}"
          data-ow-contour="${o ?? ""}"
          data-ow-pitch="${l ?? ""}"
          data-ow-range="${c ?? ""}"
          data-ow-rate="${d ?? ""}"
          data-ow-volume="${v ?? ""}"
        >${s}</span>`;
  }
}, wb = {
  selector: 'span[data-w-e-type="ssml-prosody"]',
  parseElemHtml: (n, s) => {
    const r = n.getAttribute("data-ow-remark") || "", o = n.getAttribute("data-ow-contour") || "", l = n.getAttribute("data-ow-pitch ") || "", c = n.getAttribute("data-ow-range") || "", d = n.getAttribute("data-ow-rate") || void 0, v = n.getAttribute("data-ow-volume") || "";
    return {
      type: "ssml-prosody",
      remark: r,
      contour: o,
      pitch: l,
      range: c,
      rate: d,
      volume: v,
      children: s
    };
  }
}, xb = {
  editorPlugin: _b,
  renderElems: [yb],
  elemsToHtml: [bb],
  parseElemsHtml: [wb]
}, Eb = (n) => {
  const { isInline: s, isVoid: r } = n, o = n;
  return o.isInline = (l) => ie.getNodeType(l) === "ssml-s" ? !0 : s(l), o.isVoid = (l) => ie.getNodeType(l) === "ssml-s" ? !1 : r(l), o;
}, Sb = {
  type: "ssml-s",
  renderElem: (n, s, r) => {
    const { remark: o } = n;
    return /* @__PURE__ */ F("span", { className: "ssml-wrapper" }, /* @__PURE__ */ F(
      "span",
      {
        className: "remark",
        contentEditable: "false",
        style: { "background-color": "var(--ssml-s)" }
      },
      /* @__PURE__ */ F(
        "span",
        {
          className: "iconfont icon-roundclosefill",
          on: {
            click: je.throttle((l) => {
              l.preventDefault();
              const c = ie.findPath(r, n);
              Me.unwrapNodes(r, { at: c });
            })
          }
        }
      ),
      /* @__PURE__ */ F("span", { className: "data-content", attrs: { "data-content": o } })
    ), /* @__PURE__ */ F(
      "span",
      {
        className: "data-content",
        contentEditable: "false",
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-s)" }
      }
    ), /* @__PURE__ */ F("span", null, s), /* @__PURE__ */ F(
      "span",
      {
        className: "data-content",
        contentEditable: "false",
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-s)" }
      }
    ));
  }
}, $b = {
  type: "ssml-s",
  elemToHtml: (n, s) => {
    const { remark: r } = n;
    return `<span
          data-w-e-type="ssml-s"
          data-w-e-is-inline
          data-ow-remark="${r}"
        >${s}</span>`;
  }
}, Cb = {
  selector: 'span[data-w-e-type="ssml-s"]',
  parseElemHtml: (n, s) => ({
    type: "ssml-s",
    remark: n.getAttribute("data-ow-remark") || "",
    children: s
  })
}, Rb = {
  editorPlugin: Eb,
  renderElems: [Sb],
  elemsToHtml: [$b],
  parseElemsHtml: [Cb]
}, kb = (n) => {
  const { isInline: s, isVoid: r } = n, o = n;
  return o.isInline = (l) => ie.getNodeType(l) === "ssml-say-as" ? !0 : s(l), o.isVoid = (l) => ie.getNodeType(l) === "ssml-say-as" ? !1 : r(l), o;
}, Ab = {
  type: "ssml-say-as",
  renderElem: (n, s, r) => {
    const { remark: o } = n;
    return /* @__PURE__ */ F("span", { className: "ssml-wrapper" }, /* @__PURE__ */ F(
      "span",
      {
        className: "remark",
        contentEditable: "false",
        style: { "background-color": "var(--ssml-say-as)" }
      },
      /* @__PURE__ */ F(
        "span",
        {
          className: "iconfont icon-roundclosefill",
          on: {
            click: je.throttle((l) => {
              l.preventDefault();
              const c = ie.findPath(r, n);
              mr(r, c), Me.unwrapNodes(r, { at: c });
            })
          }
        }
      ),
      /* @__PURE__ */ F("span", { className: "data-content", attrs: { "data-content": o } })
    ), /* @__PURE__ */ F(
      "span",
      {
        className: "data-content",
        contentEditable: "false",
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-say-as)" }
      }
    ), /* @__PURE__ */ F("span", null, s), /* @__PURE__ */ F(
      "span",
      {
        className: "data-content",
        contentEditable: "false",
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-say-as)" }
      }
    ));
  }
}, Tb = {
  type: "ssml-say-as",
  elemToHtml: (n, s) => {
    const { remark: r, interpretAs: o, detail: l, format: c } = n;
    return `<span
          data-w-e-type="ssml-say-as"
          data-w-e-is-inline
          data-ow-remark="${r}"
          data-ow-interpretAs="${o}"
          data-ow-detail="${l ?? ""}"
          data-ow-format="${c ?? ""}"
        >${s}</span>`;
  }
}, Ob = {
  selector: 'span[data-w-e-type="ssml-say-as"]',
  parseElemHtml: (n, s) => {
    const r = n.getAttribute("data-ow-remark") || "", o = n.getAttribute("data-ow-interpretAs") || "", l = n.getAttribute("data-ow-format") || "", c = n.getAttribute("data-ow-detail") || "";
    return {
      type: "ssml-say-as",
      remark: r,
      interpretAs: o,
      detail: c,
      format: l,
      children: s
    };
  }
}, Ib = {
  editorPlugin: kb,
  renderElems: [Ab],
  elemsToHtml: [Tb],
  parseElemsHtml: [Ob]
}, Nb = (n) => {
  const { isInline: s, isVoid: r } = n, o = n;
  return o.isInline = (l) => ie.getNodeType(l) === "ssml-sub" ? !0 : s(l), o.isVoid = (l) => ie.getNodeType(l) === "ssml-sub" ? !1 : r(l), o;
}, Lb = {
  type: "ssml-sub",
  renderElem: (n, s, r) => {
    const { remark: o } = n;
    return /* @__PURE__ */ F("span", { className: "ssml-wrapper" }, /* @__PURE__ */ F(
      "span",
      {
        className: "remark",
        contentEditable: "false",
        style: { "background-color": "var(--ssml-sub)" }
      },
      /* @__PURE__ */ F(
        "span",
        {
          className: "iconfont icon-roundclosefill",
          on: {
            click: je.throttle((l) => {
              l.preventDefault();
              const c = ie.findPath(r, n);
              mr(r, c), Me.unwrapNodes(r, { at: c });
            })
          }
        }
      ),
      /* @__PURE__ */ F("span", { className: "data-content", attrs: { "data-content": o } })
    ), /* @__PURE__ */ F(
      "span",
      {
        className: "data-content",
        contentEditable: "false",
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-sub)" }
      }
    ), /* @__PURE__ */ F("span", null, s), /* @__PURE__ */ F(
      "span",
      {
        className: "data-content",
        contentEditable: "false",
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-sub)" }
      }
    ));
  }
}, Pb = {
  type: "ssml-sub",
  elemToHtml: (n, s) => {
    const { remark: r, alias: o } = n;
    return `<span
          data-w-e-type="ssml-sub"
          data-w-e-is-inline
          data-ow-remark="${r}"
          data-ow-alias="${o}"
        >${s}</span>`;
  }
}, Db = {
  selector: 'span[data-w-e-type="ssml-sub"]',
  parseElemHtml: (n, s) => {
    const r = n.getAttribute("data-ow-remark") || "", o = n.getAttribute("data-ow-alias") || "";
    return {
      type: "ssml-sub",
      remark: r,
      alias: o,
      children: s
    };
  }
}, Mb = {
  editorPlugin: Nb,
  renderElems: [Lb],
  elemsToHtml: [Pb],
  parseElemsHtml: [Db]
}, Vb = (n) => {
  const { isInline: s, isVoid: r } = n, o = n;
  return o.isInline = (l) => ie.getNodeType(l) === "ssml-voice" ? !0 : s(l), o.isVoid = (l) => ie.getNodeType(l) === "ssml-voice" ? !1 : r(l), o;
}, Ub = {
  type: "ssml-voice",
  renderElem: (n, s, r) => {
    const { remark: o } = n;
    return /* @__PURE__ */ F("span", { className: "ssml-wrapper" }, /* @__PURE__ */ F(
      "span",
      {
        className: "remark",
        contentEditable: "false",
        style: { "background-color": "var(--ssml-voice)" }
      },
      /* @__PURE__ */ F(
        "span",
        {
          className: "iconfont icon-roundclosefill",
          on: {
            click: je.throttle((l) => {
              l.preventDefault();
              const c = ie.findPath(r, n);
              Me.unwrapNodes(r, { at: c });
            })
          }
        }
      ),
      /* @__PURE__ */ F("span", { className: "data-content", attrs: { "data-content": o } })
    ), /* @__PURE__ */ F(
      "span",
      {
        className: "data-content",
        contentEditable: "false",
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-voice)" }
      }
    ), /* @__PURE__ */ F("span", null, s), /* @__PURE__ */ F(
      "span",
      {
        className: "data-content",
        contentEditable: "false",
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-voice)" }
      }
    ));
  }
}, Fb = {
  type: "ssml-voice",
  elemToHtml: (n, s) => {
    const { remark: r, name: o, effect: l } = n;
    return `<span
          data-w-e-type="ssml-voice"
          data-w-e-is-inline
          data-ow-remark="${r}"
          data-ow-name="${o}"
          data-ow-effect="${l ?? ""}"
        >${s}</span>`;
  }
}, Bb = {
  selector: 'span[data-w-e-type="ssml-voice"]',
  parseElemHtml: (n, s) => {
    const r = n.getAttribute("data-ow-remark") || "", o = n.getAttribute("data-ow-name") || "", l = n.getAttribute("data-ow-effect") || "";
    return {
      type: "ssml-voice",
      remark: r,
      name: o,
      effect: l,
      children: s
    };
  }
}, Hb = {
  editorPlugin: Vb,
  renderElems: [Ub],
  elemsToHtml: [Fb],
  parseElemsHtml: [Bb]
}, Wb = (n) => {
  const { isInline: s, isVoid: r } = n, o = n;
  return o.isInline = (l) => ie.getNodeType(l) === "custom-management" ? !0 : s(l), o.isVoid = (l) => ie.getNodeType(l) === "custom-management" ? !1 : r(l), o;
}, zb = "wangeditor-error", Gb = "ssml-element-click", Ie = {
  ERROR: zb,
  SSML_ELEMENT_CLICK: Gb
}, qb = "emitter-error", Kb = "emitter-view-click", Yb = "emitter-view-keydown", Xb = "emitter-editor-created", rt = { ERROR: qb, VIEW_CLICK: Kb, VIEW_KEYDOWN: Yb, EDITOR_CREATED: Xb }, Jb = {
  type: "custom-management",
  renderElem: (n, s, r) => {
    const { remark: o } = n;
    return /* @__PURE__ */ F("span", { className: "ssml-wrapper" }, /* @__PURE__ */ F(
      "span",
      {
        className: "remark",
        contentEditable: "false",
        style: { "background-color": "var(--custom-management)" },
        on: {
          mousedown: (l) => l.preventDefault(),
          click: je.throttle((l) => {
            l.preventDefault(), r.select(ie.findPath(r, n)), r.emit(Ie.SSML_ELEMENT_CLICK, r, n);
          })
        }
      },
      /* @__PURE__ */ F(
        "span",
        {
          className: "iconfont icon-roundclosefill",
          on: {
            click: je.throttle((l) => {
              l.preventDefault();
              const c = ie.findPath(r, n);
              mr(r, c), Me.unwrapNodes(r, { at: c });
            })
          }
        }
      ),
      /* @__PURE__ */ F("span", { className: "data-content", attrs: { "data-content": o } })
    ), /* @__PURE__ */ F(
      "span",
      {
        className: "data-content",
        contentEditable: "false",
        attrs: { "data-content": "{{" },
        style: { color: "var(--custom-management)" }
      }
    ), /* @__PURE__ */ F("span", null, s), /* @__PURE__ */ F(
      "span",
      {
        className: "data-content",
        contentEditable: "false",
        attrs: { "data-content": "}}" },
        style: { color: "var(--custom-management)" }
      }
    ));
  }
}, Zb = {
  type: "custom-management",
  elemToHtml: (n, s) => {
    const { remark: r, style: o, role: l, name: c, pitch: d, rate: v, custom: m } = n;
    return `<span
          data-w-e-type="custom-management"
          data-w-e-is-inline
          data-ow-remark="${r}"
          data-ow-style="${o}"
          data-ow-name="${c}"
          data-ow-role="${l}"
          data-ow-pitch="${d}"
          data-ow-rate="${v}"
          data-ow-custom="${JSON.stringify(m)}"
        >${s}</span>`;
  }
}, Qb = {
  selector: 'span[data-w-e-type="custom-management"]',
  parseElemHtml: (n, s) => {
    const r = n.getAttribute("data-ow-remark") || "", o = n.getAttribute("data-ow-name") || "", l = n.getAttribute("data-ow-role") || "", c = n.getAttribute("data-ow-style") || "", d = n.getAttribute("data-ow-pitch") || "", v = n.getAttribute("data-ow-rate") || "", m = n.getAttribute("data-ow-custom") || "{}";
    return {
      type: "custom-management",
      remark: r,
      name: o,
      role: l,
      style: c,
      pitch: d,
      rate: v,
      custom: JSON.parse(m),
      children: s
    };
  }
}, jb = {
  editorPlugin: Wb,
  renderElems: [Jb],
  elemsToHtml: [Zb],
  parseElemsHtml: [Qb]
}, e1 = (n) => {
  const {
    deleteBackward: s,
    deleteForward: r,
    insertBreak: o,
    apply: l,
    normalizeNode: c,
    insertText: d,
    insertData: v,
    setFragmentData: m,
    insertNode: h
  } = n, y = n;
  y.deleteBackward = ($) => {
    s($);
  }, y.deleteForward = ($) => {
    r($);
  }, y.insertBreak = () => {
    o();
  }, y.normalizeNode = ($) => {
    c($);
  }, y.apply = ($) => {
    l($);
  }, y.insertData = ($) => {
    if ($.types.includes("application/x-slate-fragment"))
      return v($);
    {
      const k = new DataTransfer();
      return k.setData("text/plain", $.getData("text/plain").trim()), v(k);
    }
  }, y.setFragmentData = ($) => {
    m($);
    const k = $.getData("text/plain").replaceAll(/[\s]/gi, "");
    $.setData("text/plain", k);
  }, y.insertText = ($) => {
    d($);
  };
  const S = [
    "ssml-prosody",
    "ssml-sub",
    "custom-management",
    "ssml-phoneme",
    "ssml-say-as"
  ];
  return y.insertNode = ($) => {
    const k = ie.getNodeType($);
    return S.includes(k) ? (n.selection && Rc(n, n.selection), Me.insertNodes(n, $)) : k === "ssml-audio" && ia.string($) ? (n.selection && Rc(n, n.selection), Me.insertNodes(n, $)) : He.isVoid(n, $) ? (h($), n.move(1)) : h($);
  }, y;
};
const t1 = {
  install() {
    xt.registerModule(q0), xt.registerModule(Z0), xt.registerModule(nb), xt.registerModule(ab), xt.registerModule(db), xt.registerModule(gb), xt.registerModule(xb), xt.registerModule(Rb), xt.registerModule(Ib), xt.registerModule(Mb), xt.registerModule(Hb), xt.registerModule(jb), xt.registerPlugin(e1);
  }
}, zn = as("--editor-ssml", () => {
  const n = Br({
    type: "ssml-speak",
    version: "1.0",
    xmlLang: "zh-CN",
    xmlns: "http://www.w3.org/2001/10/synthesis",
    "xmlns:mstts": "http://www.w3.org/2001/mstts",
    "xmlns:emo": "http://www.w3.org/2009/10/emotionml",
    remark: "",
    children: []
  }), s = Br({
    name: "zh-CN-XiaomoNeural",
    type: "ssml-voice",
    remark: "Xiaomo-晓墨",
    effect: "",
    children: []
  }), r = Br({
    type: "ssml-mstts:backgroundaudio",
    src: "",
    remark: "",
    children: []
  }), o = Br({
    type: "ssml-mstts:express-as",
    style: "",
    role: "",
    remark: "",
    children: []
  }), l = Br({
    type: "ssml-prosody",
    remark: "",
    children: []
  });
  return { rootSpeak: n, rootVoice: s, rootBackgroundaudio: r, rootExpressAs: o, rootProsody: l };
});
function QS() {
  return { label: "", value: "" };
}
function n1() {
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
function fa() {
  return {
    word: "",
    topFlag: "",
    category: "",
    gender: "",
    tag: ""
  };
}
class pf {
  constructor() {
    Pe(this, "audio");
    Pe(this, "isPlaying", L(!1));
    Pe(this, "isLoading", L(!1));
    Pe(this, "loadResolve");
    Pe(this, "loadReject");
    this.audio = new Audio(), this.audio.addEventListener("canplaythrough", () => {
      var s;
      this.isLoading.value = !1, (s = this.loadResolve) == null || s.call(this), this.loadResolve = void 0;
    }), this.audio.addEventListener("play", () => {
      this.isPlaying.value = !0;
    }), this.audio.addEventListener("pause", () => {
      this.isPlaying.value = !1;
    }), this.audio.addEventListener("error", () => {
      var s;
      this.isLoading.value = !1, this.isPlaying.value = !1, (s = this.loadReject) == null || s.call(this), this.loadReject = void 0;
    });
  }
  load(s) {
    return this.pause(), this.loadReject && this.loadReject(), this.isPlaying.value = !1, this.isLoading.value = !0, this.audio.src = s, this.audio.load(), new Promise((r, o) => {
      this.loadResolve = r, this.loadReject = o;
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
    return Be(() => this.isPlaying.value ? "playing" : "paused");
  }
  get loadState() {
    return Be(() => this.isLoading.value ? "loading" : "complete");
  }
}
const ls = as("--editor-try-play", () => {
  const n = zn(), s = Ve(new pf()), r = L(n1()), o = Be(() => r.value), l = Be(() => s.value);
  return { speaker: o, setSpeaker: (d) => {
    r.value = d, n.rootVoice.name = d.name;
  }, audioPlayer: l };
}), hf = as("--editor-management-menu", () => ({ contentData: Ji(sf()) })), r1 = { class: "bar-button-icon" }, i1 = {
  class: "fw-normal",
  style: { "font-size": "0.85rem" }
}, s1 = /* @__PURE__ */ ce({
  __name: "bar-button",
  props: {
    text: {},
    icon: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(n, { emit: s }) {
    const r = n, o = () => {
      if (!r.disabled) {
        const { editor: l } = ut();
        l && s("click", l);
      }
    };
    return (l, c) => (M(), K("div", {
      class: $t(["bar-button px-2 py-1", { disabled: l.disabled }]),
      onClick: o,
      onMousedown: c[0] || (c[0] = st(() => {
      }, ["prevent"]))
    }, [
      A("div", r1, [
        A("span", {
          class: $t(["fs-3 iconfont-moyin", [`moyin-icon_${l.icon}`]])
        }, null, 2)
      ]),
      A("div", i1, me(l.text), 1)
    ], 34));
  }
});
const vt = (n, s) => {
  const r = n.__vccOpts || n;
  for (const [o, l] of s)
    r[o] = l;
  return r;
}, ct = /* @__PURE__ */ vt(s1, [["__scopeId", "data-v-2da9a7ca"]]);
const da = /* @__PURE__ */ ce({
  __name: "bar-input",
  props: {
    type: {}
  },
  emits: ["submit"],
  setup(n, { expose: s, emit: r }) {
    const o = L(""), l = L();
    function c() {
      hr(() => {
        l.value.input.focus();
      });
    }
    function d() {
      r("submit", o.value), o.value = "";
    }
    return s({
      focus: c
    }), (v, m) => (M(), we(C(is), {
      onSubmit: st(d, ["prevent"])
    }, {
      default: X(() => [
        U(C(ss), {
          type: v.type,
          ref_key: "inputRef",
          ref: l,
          modelValue: o.value,
          "onUpdate:modelValue": m[0] || (m[0] = (h) => o.value = h)
        }, null, 8, ["type", "modelValue"])
      ]),
      _: 1
    }, 8, ["onSubmit"]));
  }
});
const o1 = /* @__PURE__ */ ce({
  __name: "bar-popover",
  props: {
    visible: { type: Boolean },
    trigger: {},
    hideAfter: {},
    width: {}
  },
  emits: ["update:visible"],
  setup(n) {
    return (s, r) => (M(), we(C(vn), {
      hideAfter: s.hideAfter,
      width: s.width,
      visible: s.visible,
      trigger: s.trigger,
      "onUpdate:visible": r[0] || (r[0] = (o) => s.$emit("update:visible", o))
    }, {
      reference: X(() => [
        en(s.$slots, "reference")
      ]),
      default: X(() => [
        en(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["hideAfter", "width", "visible", "trigger"]));
  }
});
function us(n) {
  return Uc() ? (Fc(n), !0) : !1;
}
function Vt(n) {
  return typeof n == "function" ? n() : C(n);
}
const vf = typeof window < "u" && typeof document < "u", a1 = (n) => n != null, l1 = Object.prototype.toString, u1 = (n) => l1.call(n) === "[object Object]", Yi = () => {
};
function c1(n, s = {}) {
  if (!Hn(n))
    return Go(n);
  const r = Array.isArray(n.value) ? Array.from({ length: n.value.length }) : {};
  for (const o in n.value)
    r[o] = Ay(() => ({
      get() {
        return n.value[o];
      },
      set(l) {
        var c;
        if ((c = Vt(s.replaceRef)) != null ? c : !0)
          if (Array.isArray(n.value)) {
            const v = [...n.value];
            v[o] = l, n.value = v;
          } else {
            const v = { ...n.value, [o]: l };
            Object.setPrototypeOf(v, Object.getPrototypeOf(n.value)), n.value = v;
          }
        else
          n.value[o] = l;
      }
    }));
  return r;
}
function mf(n, s = !0) {
  na() ? Ct(n) : s ? n() : hr(n);
}
function Kt(n) {
  var s;
  const r = Vt(n);
  return (s = r == null ? void 0 : r.$el) != null ? s : r;
}
const Rn = vf ? window : void 0;
function pr(...n) {
  let s, r, o, l;
  if (typeof n[0] == "string" || Array.isArray(n[0]) ? ([r, o, l] = n, s = Rn) : [s, r, o, l] = n, !s)
    return Yi;
  Array.isArray(r) || (r = [r]), Array.isArray(o) || (o = [o]);
  const c = [], d = () => {
    c.forEach((y) => y()), c.length = 0;
  }, v = (y, S, $, k) => (y.addEventListener(S, $, k), () => y.removeEventListener(S, $, k)), m = Ye(
    () => [Kt(s), Vt(l)],
    ([y, S]) => {
      if (d(), !y)
        return;
      const $ = u1(S) ? { ...S } : S;
      c.push(
        ...r.flatMap((k) => o.map((x) => v(y, k, x, $)))
      );
    },
    { immediate: !0, flush: "post" }
  ), h = () => {
    m(), d();
  };
  return us(h), h;
}
function f1() {
  const n = L(!1);
  return na() && Ct(() => {
    n.value = !0;
  }), n;
}
function pa(n) {
  const s = f1();
  return Be(() => (s.value, !!n()));
}
function d1(n, s = {}) {
  const { window: r = Rn } = s, o = pa(() => r && "matchMedia" in r && typeof r.matchMedia == "function");
  let l;
  const c = L(!1), d = (h) => {
    c.value = h.matches;
  }, v = () => {
    l && ("removeEventListener" in l ? l.removeEventListener("change", d) : l.removeListener(d));
  }, m = Ty(() => {
    o.value && (v(), l = r.matchMedia(Vt(n)), "addEventListener" in l ? l.addEventListener("change", d) : l.addListener(d), c.value = l.matches);
  });
  return us(() => {
    m(), v(), l = void 0;
  }), c;
}
function ha(n, s = {}) {
  var r, o;
  const {
    pointerTypes: l,
    preventDefault: c,
    stopPropagation: d,
    exact: v,
    onMove: m,
    onEnd: h,
    onStart: y,
    initialValue: S,
    axis: $ = "both",
    draggingElement: k = Rn,
    containerElement: x,
    handle: b = n
  } = s, D = L(
    (r = Vt(S)) != null ? r : { x: 0, y: 0 }
  ), B = L(), H = (P) => l ? l.includes(P.pointerType) : !0, O = (P) => {
    Vt(c) && P.preventDefault(), Vt(d) && P.stopPropagation();
  }, W = (P) => {
    var ve;
    if (!H(P) || Vt(v) && P.target !== Vt(n))
      return;
    const G = ((ve = Vt(x)) != null ? ve : Vt(n)).getBoundingClientRect(), q = {
      x: P.clientX - G.left,
      y: P.clientY - G.top
    };
    (y == null ? void 0 : y(q, P)) !== !1 && (B.value = q, O(P));
  }, J = (P) => {
    if (!H(P) || !B.value)
      return;
    let { x: ve, y: Ae } = D.value;
    ($ === "x" || $ === "both") && (ve = P.clientX - B.value.x), ($ === "y" || $ === "both") && (Ae = P.clientY - B.value.y), D.value = {
      x: ve,
      y: Ae
    }, m == null || m(D.value, P), O(P);
  }, ee = (P) => {
    H(P) && B.value && (B.value = void 0, h == null || h(D.value, P), O(P));
  };
  if (vf) {
    const P = { capture: (o = s.capture) != null ? o : !0 };
    pr(b, "pointerdown", W, P), pr(k, "pointermove", J, P), pr(k, "pointerup", ee, P);
  }
  return {
    ...c1(D),
    position: D,
    isDragging: Be(() => !!B.value),
    style: Be(
      () => `left:${D.value.x}px;top:${D.value.y}px;`
    )
  };
}
function gf(n, s, r = {}) {
  const { window: o = Rn, ...l } = r;
  let c;
  const d = pa(() => o && "ResizeObserver" in o), v = () => {
    c && (c.disconnect(), c = void 0);
  }, m = Be(
    () => Array.isArray(n) ? n.map((S) => Kt(S)) : [Kt(n)]
  ), h = Ye(
    m,
    (S) => {
      if (v(), d.value && o) {
        c = new ResizeObserver(s);
        for (const $ of S)
          $ && c.observe($, l);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), y = () => {
    v(), h();
  };
  return us(y), {
    isSupported: d,
    stop: y
  };
}
function Yr(n, s = {}) {
  const {
    reset: r = !0,
    windowResize: o = !0,
    windowScroll: l = !0,
    immediate: c = !0
  } = s, d = L(0), v = L(0), m = L(0), h = L(0), y = L(0), S = L(0), $ = L(0), k = L(0);
  function x() {
    const b = Kt(n);
    if (!b) {
      r && (d.value = 0, v.value = 0, m.value = 0, h.value = 0, y.value = 0, S.value = 0, $.value = 0, k.value = 0);
      return;
    }
    const D = b.getBoundingClientRect();
    d.value = D.height, v.value = D.bottom, m.value = D.left, h.value = D.right, y.value = D.top, S.value = D.width, $.value = D.x, k.value = D.y;
  }
  return gf(n, x), Ye(() => Kt(n), (b) => !b && x()), l && pr("scroll", x, { capture: !0, passive: !0 }), o && pr("resize", x, { passive: !0 }), mf(() => {
    c && x();
  }), {
    height: d,
    bottom: v,
    left: m,
    right: h,
    top: y,
    width: S,
    x: $,
    y: k,
    update: x
  };
}
function p1(n, s = { width: 0, height: 0 }, r = {}) {
  const { window: o = Rn, box: l = "content-box" } = r, c = Be(() => {
    var m, h;
    return (h = (m = Kt(n)) == null ? void 0 : m.namespaceURI) == null ? void 0 : h.includes("svg");
  }), d = L(s.width), v = L(s.height);
  return gf(
    n,
    ([m]) => {
      const h = l === "border-box" ? m.borderBoxSize : l === "content-box" ? m.contentBoxSize : m.devicePixelContentBoxSize;
      if (o && c.value) {
        const y = Kt(n);
        if (y) {
          const S = o.getComputedStyle(y);
          d.value = Number.parseFloat(S.width), v.value = Number.parseFloat(S.height);
        }
      } else if (h) {
        const y = Array.isArray(h) ? h : [h];
        d.value = y.reduce((S, { inlineSize: $ }) => S + $, 0), v.value = y.reduce((S, { blockSize: $ }) => S + $, 0);
      } else
        d.value = m.contentRect.width, v.value = m.contentRect.height;
    },
    r
  ), Ye(
    () => Kt(n),
    (m) => {
      d.value = m ? s.width : 0, v.value = m ? s.height : 0;
    }
  ), {
    width: d,
    height: v
  };
}
function h1(n, s, r = {}) {
  const {
    root: o,
    rootMargin: l = "0px",
    threshold: c = 0.1,
    window: d = Rn,
    immediate: v = !0
  } = r, m = pa(() => d && "IntersectionObserver" in d), h = Be(() => {
    const x = Vt(n);
    return (Array.isArray(x) ? x : [x]).map(Kt).filter(a1);
  });
  let y = Yi;
  const S = L(v), $ = m.value ? Ye(
    () => [h.value, Kt(o), S.value],
    ([x, b]) => {
      if (y(), !S.value || !x.length)
        return;
      const D = new IntersectionObserver(
        s,
        {
          root: Kt(b),
          rootMargin: l,
          threshold: c
        }
      );
      x.forEach((B) => B && D.observe(B)), y = () => {
        D.disconnect(), y = Yi;
      };
    },
    { immediate: v, flush: "post" }
  ) : Yi, k = () => {
    y(), $(), S.value = !1;
  };
  return us(k), {
    isSupported: m,
    isActive: S,
    pause() {
      y(), S.value = !1;
    },
    resume() {
      S.value = !0;
    },
    stop: k
  };
}
function cs(n, { window: s = Rn, scrollTarget: r } = {}) {
  const o = L(!1);
  return h1(
    n,
    ([{ isIntersecting: l }]) => {
      o.value = l;
    },
    {
      root: r,
      window: s,
      threshold: 0
    }
  ), o;
}
function v1(n = {}) {
  const {
    window: s = Rn,
    initialWidth: r = Number.POSITIVE_INFINITY,
    initialHeight: o = Number.POSITIVE_INFINITY,
    listenOrientation: l = !0,
    includeScrollbar: c = !0
  } = n, d = L(r), v = L(o), m = () => {
    s && (c ? (d.value = s.innerWidth, v.value = s.innerHeight) : (d.value = s.document.documentElement.clientWidth, v.value = s.document.documentElement.clientHeight));
  };
  if (m(), mf(m), pr("resize", m, { passive: !0 }), l) {
    const h = d1("(orientation: portrait)");
    Ye(h, () => m());
  }
  return { width: d, height: v };
}
const m1 = { class: "search-content w-100" }, g1 = { class: "ps-2 w-75" }, _1 = { class: "menu ps-2" }, y1 = { class: "flex flex-row pt-1" }, b1 = {
  class: "content-list overflow-x-hidden overflow-y-auto py-2",
  style: { height: "250px" }
}, w1 = ["onClick"], x1 = /* @__PURE__ */ A("span", { class: "iconfont icon-play" }, null, -1), E1 = { class: "ps-2" }, va = /* @__PURE__ */ ce({
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
  setup(n, { emit: s }) {
    const r = n, o = L(), l = L(""), c = L(""), d = L(""), v = L(""), m = L(r.dataList || []), h = L(r.sceneList || []), y = L(r.styleList || []), S = cs(o);
    Ye(S, (b) => {
      b && hr(() => {
        var D, B;
        (B = (D = o.value) == null ? void 0 : D.input) == null || B.focus();
      });
    }), Ct(async () => {
      m.value.length || await $(), h.value.length || (h.value = await r.fetchScene()), y.value.length || (y.value = await r.fetchStyle());
    });
    async function $() {
      m.value = await r.fetchData({
        word: l.value,
        menu: v.value,
        scene: c.value,
        style: d.value
      });
    }
    function k(b) {
      v.value = b, $();
    }
    function x(b) {
      s("submit", b);
    }
    return (b, D) => (M(), K("div", m1, [
      A("div", g1, [
        U(C(is), {
          onSubmit: st($, ["prevent"])
        }, {
          default: X(() => [
            U(C(ss), {
              ref_key: "searchInputRef",
              ref: o,
              placeholder: "搜索",
              modelValue: l.value,
              "onUpdate:modelValue": D[0] || (D[0] = (B) => l.value = B),
              "suffix-icon": C(My)
            }, null, 8, ["modelValue", "suffix-icon"])
          ]),
          _: 1
        }, 8, ["onSubmit"])
      ]),
      A("div", _1, [
        U(C(Ly), {
          mode: "horizontal",
          "default-active": b.menus.length > 0 ? b.menus[0].value : "",
          onSelect: D[1] || (D[1] = (B) => k(B))
        }, {
          default: X(() => [
            (M(!0), K(Re, null, De(b.menus, (B, H) => (M(), we(C(Py), {
              index: B.value,
              key: H
            }, {
              default: X(() => [
                Qe(me(B.label), 1)
              ]),
              _: 2
            }, 1032, ["index"]))), 128))
          ]),
          _: 1
        }, 8, ["default-active"])
      ]),
      A("div", y1, [
        U(C(Qu), {
          modelValue: c.value,
          "onUpdate:modelValue": D[2] || (D[2] = (B) => c.value = B),
          onChange: $,
          class: "m-1",
          size: "default"
        }, {
          default: X(() => [
            (M(!0), K(Re, null, De(h.value, (B) => (M(), we(C(ju), {
              key: B.value,
              label: B.label,
              value: B.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        U(C(Qu), {
          modelValue: d.value,
          "onUpdate:modelValue": D[3] || (D[3] = (B) => d.value = B),
          onChange: $,
          class: "m-1",
          size: "default"
        }, {
          default: X(() => [
            (M(!0), K(Re, null, De(y.value, (B) => (M(), we(C(ju), {
              key: B.value,
              label: B.label,
              value: B.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      A("ul", b1, [
        (M(!0), K(Re, null, De(m.value, (B, H) => (M(), K("li", {
          onClick: (O) => x(St(B)),
          class: "content-list-item clickable ps-2 py-2",
          key: H
        }, [
          x1,
          A("span", E1, me(B.label), 1)
        ], 8, w1))), 128))
      ])
    ]));
  }
});
const S1 = {}, $1 = { class: "content" };
function C1(n, s) {
  return M(), K("div", $1, [
    en(n.$slots, "default", {}, void 0, !0)
  ]);
}
const _f = /* @__PURE__ */ vt(S1, [["render", C1], ["__scopeId", "data-v-7beae5b9"]]), R1 = {}, k1 = { class: "bar-wrapper-item" };
function A1(n, s) {
  return M(), K("div", k1, [
    en(n.$slots, "default")
  ]);
}
const T1 = /* @__PURE__ */ vt(R1, [["render", A1]]), O1 = { class: "bar-wrapper-group" }, I1 = { class: "group-items" }, N1 = /* @__PURE__ */ ce({
  __name: "bar-wrapper-group",
  props: {
    divider: {}
  },
  setup(n) {
    return (s, r) => (M(), K("div", O1, [
      A("div", I1, [
        en(s.$slots, "default", {}, void 0, !0)
      ]),
      A("div", {
        class: $t(["divider", [s.divider]])
      }, null, 2)
    ]));
  }
});
const fr = /* @__PURE__ */ vt(N1, [["__scopeId", "data-v-be31f837"]]);
function L1(n, s) {
  return `left:${n}px;top:${s}px`;
}
function ma(n, s) {
  const { width: r, height: o } = p1(n), { width: l, height: c } = v1(), d = Be(() => ({
    x: l.value - r.value,
    y: c.value - o.value
  }));
  return { style: Be(() => {
    const m = s.value.x, h = s.value.y, y = m < 5 ? 5 : m > d.value.x ? d.value.x - 5 : m, S = h < 5 ? 5 : h > d.value.y ? d.value.y - 5 : h;
    return L1(y, S);
  }) };
}
var jo = { exports: {} }, yf = { exports: {} }, P1 = void 0, bf = function(n) {
  return n !== P1 && n !== null;
}, D1 = bf, M1 = {
  object: !0,
  function: !0,
  undefined: !0
  /* document.all */
}, V1 = function(n) {
  return D1(n) ? hasOwnProperty.call(M1, typeof n) : !1;
}, U1 = V1, F1 = function(n) {
  if (!U1(n))
    return !1;
  try {
    return n.constructor ? n.constructor.prototype === n : !1;
  } catch {
    return !1;
  }
}, B1 = F1, H1 = function(n) {
  if (typeof n != "function" || !hasOwnProperty.call(n, "length"))
    return !1;
  try {
    if (typeof n.length != "number" || typeof n.call != "function" || typeof n.apply != "function")
      return !1;
  } catch {
    return !1;
  }
  return !B1(n);
}, W1 = H1, z1 = /^\s*class[\s{/}]/, G1 = Function.prototype.toString, q1 = function(n) {
  return !(!W1(n) || z1.test(G1.call(n)));
}, K1 = function() {
  var n = Object.assign, s;
  return typeof n != "function" ? !1 : (s = { foo: "raz" }, n(s, { bar: "dwa" }, { trzy: "trzy" }), s.foo + s.bar + s.trzy === "razdwatrzy");
}, Mo, kc;
function Y1() {
  return kc || (kc = 1, Mo = function() {
    try {
      return Object.keys("primitive"), !0;
    } catch {
      return !1;
    }
  }), Mo;
}
var X1 = function() {
}, J1 = X1(), ga = function(n) {
  return n !== J1 && n !== null;
}, Vo, Ac;
function Z1() {
  if (Ac)
    return Vo;
  Ac = 1;
  var n = ga, s = Object.keys;
  return Vo = function(r) {
    return s(n(r) ? Object(r) : r);
  }, Vo;
}
var Uo, Tc;
function Q1() {
  return Tc || (Tc = 1, Uo = Y1()() ? Object.keys : Z1()), Uo;
}
var Fo, Oc;
function j1() {
  if (Oc)
    return Fo;
  Oc = 1;
  var n = ga;
  return Fo = function(s) {
    if (!n(s))
      throw new TypeError("Cannot use null or undefined");
    return s;
  }, Fo;
}
var Bo, Ic;
function ew() {
  if (Ic)
    return Bo;
  Ic = 1;
  var n = Q1(), s = j1(), r = Math.max;
  return Bo = function(o, l) {
    var c, d, v = r(arguments.length, 2), m;
    for (o = Object(s(o)), m = function(h) {
      try {
        o[h] = l[h];
      } catch (y) {
        c || (c = y);
      }
    }, d = 1; d < v; ++d)
      l = arguments[d], n(l).forEach(m);
    if (c !== void 0)
      throw c;
    return o;
  }, Bo;
}
var tw = K1() ? Object.assign : ew(), nw = ga, rw = Array.prototype.forEach, iw = Object.create, sw = function(n, s) {
  var r;
  for (r in n)
    s[r] = n[r];
}, ow = function(n) {
  var s = iw(null);
  return rw.call(arguments, function(r) {
    nw(r) && sw(Object(r), s);
  }), s;
}, Ho = "razdwatrzy", aw = function() {
  return typeof Ho.contains != "function" ? !1 : Ho.contains("dwa") === !0 && Ho.contains("foo") === !1;
}, Wo, Nc;
function lw() {
  if (Nc)
    return Wo;
  Nc = 1;
  var n = String.prototype.indexOf;
  return Wo = function(s) {
    return n.call(this, s, arguments[1]) > -1;
  }, Wo;
}
var uw = aw() ? String.prototype.contains : lw(), Xi = bf, Lc = q1, wf = tw, xf = ow, zr = uw, cw = yf.exports = function(n, s) {
  var r, o, l, c, d;
  return arguments.length < 2 || typeof n != "string" ? (c = s, s = n, n = null) : c = arguments[2], Xi(n) ? (r = zr.call(n, "c"), o = zr.call(n, "e"), l = zr.call(n, "w")) : (r = l = !0, o = !1), d = { value: s, configurable: r, enumerable: o, writable: l }, c ? wf(xf(c), d) : d;
};
cw.gs = function(n, s, r) {
  var o, l, c, d;
  return typeof n != "string" ? (c = r, r = s, s = n, n = null) : c = arguments[3], Xi(s) ? Lc(s) ? Xi(r) ? Lc(r) || (c = r, r = void 0) : r = void 0 : (c = s, s = r = void 0) : s = void 0, Xi(n) ? (o = zr.call(n, "c"), l = zr.call(n, "e")) : (o = !0, l = !1), d = { get: s, set: r, configurable: o, enumerable: l }, c ? wf(xf(c), d) : d;
};
var fw = yf.exports, dw = function(n) {
  if (typeof n != "function")
    throw new TypeError(n + " is not a function");
  return n;
};
(function(n, s) {
  var r = fw, o = dw, l = Function.prototype.apply, c = Function.prototype.call, d = Object.create, v = Object.defineProperty, m = Object.defineProperties, h = Object.prototype.hasOwnProperty, y = { configurable: !0, enumerable: !1, writable: !0 }, S, $, k, x, b, D, B;
  S = function(H, O) {
    var W;
    return o(O), h.call(this, "__ee__") ? W = this.__ee__ : (W = y.value = d(null), v(this, "__ee__", y), y.value = null), W[H] ? typeof W[H] == "object" ? W[H].push(O) : W[H] = [W[H], O] : W[H] = O, this;
  }, $ = function(H, O) {
    var W, J;
    return o(O), J = this, S.call(this, H, W = function() {
      k.call(J, H, W), l.call(O, this, arguments);
    }), W.__eeOnceListener__ = O, this;
  }, k = function(H, O) {
    var W, J, ee, P;
    if (o(O), !h.call(this, "__ee__"))
      return this;
    if (W = this.__ee__, !W[H])
      return this;
    if (J = W[H], typeof J == "object")
      for (P = 0; ee = J[P]; ++P)
        (ee === O || ee.__eeOnceListener__ === O) && (J.length === 2 ? W[H] = J[P ? 0 : 1] : J.splice(P, 1));
    else
      (J === O || J.__eeOnceListener__ === O) && delete W[H];
    return this;
  }, x = function(H) {
    var O, W, J, ee, P;
    if (h.call(this, "__ee__") && (ee = this.__ee__[H], !!ee))
      if (typeof ee == "object") {
        for (W = arguments.length, P = new Array(W - 1), O = 1; O < W; ++O)
          P[O - 1] = arguments[O];
        for (ee = ee.slice(), O = 0; J = ee[O]; ++O)
          l.call(J, this, P);
      } else
        switch (arguments.length) {
          case 1:
            c.call(ee, this);
            break;
          case 2:
            c.call(ee, this, arguments[1]);
            break;
          case 3:
            c.call(ee, this, arguments[1], arguments[2]);
            break;
          default:
            for (W = arguments.length, P = new Array(W - 1), O = 1; O < W; ++O)
              P[O - 1] = arguments[O];
            l.call(ee, this, P);
        }
  }, b = {
    on: S,
    once: $,
    off: k,
    emit: x
  }, D = {
    on: r(S),
    once: r($),
    off: r(k),
    emit: r(x)
  }, B = m({}, D), n.exports = s = function(H) {
    return H == null ? d(B) : m(Object(H), D);
  }, s.methods = b;
})(jo, jo.exports);
var pw = jo.exports;
const hw = /* @__PURE__ */ uf(pw), it = hw(), vw = { class: "w-100 d-flex flex-row align-items-center" }, gr = /* @__PURE__ */ ce({
  __name: "drag-box",
  props: {
    visible: { type: Boolean },
    initialValue: {}
  },
  emits: ["update:visible", "close"],
  setup(n, { expose: s, emit: r }) {
    const o = n, l = L(), c = L(), d = L(), { position: v } = ha(c, {
      initialValue: o.initialValue
    }), { style: m } = ma(l, v);
    function h(x) {
      v.value = x;
    }
    s({
      setPosition: h
    }), Ct(() => {
      it.on(rt.VIEW_CLICK, y), document.addEventListener("keydown", k);
    }), ra(() => {
      it.off(rt.VIEW_CLICK, y), document.removeEventListener("keydown", k);
    });
    function y(x) {
      S(x) && $();
    }
    function S(x) {
      const b = x.target;
      return !(!l.value || !d.value || d.value.contains(b) || l.value.contains(b));
    }
    function $() {
      r("update:visible", !1), r("close");
    }
    function k(x) {
      x.code === "Escape" && $();
    }
    return (x, b) => (M(), K(Re, null, [
      A("div", {
        ref_key: "referenceRef",
        ref: d,
        onMousedown: b[0] || (b[0] = st(() => {
        }, ["prevent"]))
      }, [
        en(x.$slots, "reference")
      ], 544),
      (M(), we(Bc, { to: "body" }, [
        pn(A("div", {
          ref_key: "boxRef",
          ref: l,
          class: "demotestname card shadow brag-box user-select-none z-2",
          style: ts([{ position: "fixed" }, C(m)]),
          onMousedown: b[1] || (b[1] = st(() => {
          }, ["prevent"]))
        }, [
          A("div", vw, [
            A("div", {
              ref_key: "dragRef",
              ref: c,
              class: "w-100",
              style: { height: "40px", cursor: "move" }
            }, null, 512),
            A("span", {
              onClick: $,
              class: "btn iconfont icon-close fs-5"
            })
          ]),
          en(x.$slots, "default")
        ], 36), [
          [hn, x.visible]
        ])
      ]))
    ], 64));
  }
}), mw = {
  install(n) {
    n.component("BarButton", ct), n.component("BarInput", da), n.component("BarPopover", o1), n.component("BarSearch", va), n.component("BarWrapper", _f), n.component("BarWrapperItem", T1), n.component("BarWrapperGroup", fr), n.component("DragBox", gr);
  }
};
function gw(n) {
  return n.replaceAll(/[&]/gi, "&amp;").replaceAll(/[<]/gi, "&lt;").replaceAll(/[>]/gi, "&gt;");
}
function _w(n, s) {
  return s ? `<audio src="${n.src}">${s}</audio>` : `<audio src="${n.src}"/>`;
}
function yw(n) {
  return n.time ? `<break time="${n.time}"/>` : n.strength ? `<break strength="${n.strength}"/>` : "<break/>";
}
function bw(n, s) {
  return n.level ? `<emphasis level="${n.level}">${s}</emphasis>` : `<emphasis>${s}</emphasis>`;
}
function ww(n, s) {
  if (!n.style)
    return s;
  const r = n.role ? ` role="${n.role}"` : "", o = n.styledegree ? ` styledegree="${n.styledegree}"` : "";
  return `<mstts:express-as style="${n.style}"${r}${o}>${s}</mstts:express-as>`;
}
function xw(n) {
  if (!n.src)
    return "";
  const s = n.volume ? ` volume="${n.volume}"` : "", r = n.fadein ? ` fadein="${n.fadein}"` : "", o = n.fadeout ? ` fadeout="${n.fadeout}"` : "";
  return `<mstts:backgroundaudio src="${n.src}"${s}${r}${o}/>`;
}
function Ew(n) {
  return !n.attrType || !n.value ? "" : `<mstts:silence type="${n.attrType}" value="${n.value}"/>`;
}
function Sw(n, s) {
  return `<p>${s}</p>`;
}
function $w(n, s) {
  const r = n.alphabet ? `alphabet="${n.alphabet}"` : "";
  return `<phoneme ph="${n.ph}"${r}>${s}</phoneme>`;
}
function Cw(n, s) {
  if (!n.contour && !n.pitch && !n.range && !n.rate && !n.volume)
    return s;
  const r = n.contour ? ` contour="${n.contour}"` : "", o = n.pitch ? ` pitch="${n.pitch}"` : "", l = n.range ? ` range="${n.range}"` : "", c = n.volume ? ` volume="${n.volume}"` : "", d = n.rate ? ` rate="${n.rate}"` : "";
  return `<prosody${r}${o}${l}${c}${d}>${s}</prosody>`;
}
function Rw(n, s) {
  const r = n.interpretAs ? ` interpret-as="${n.interpretAs}"` : "", o = n.format ? ` format="${n.format}"` : "", l = n.detail ? ` detail="${n.detail}"` : "";
  return `<say-as${r}${o}${l}>${s}</say-as>`;
}
function kw(n, s) {
  return `<s>${s}</s>`;
}
function Aw(n, s) {
  return `<sub alias="${n.alias}">${s}</sub>`;
}
function Tw(n, s) {
  const r = n.effect ? ` effect="${n.effect}"` : "";
  return `<voice name="${n.name}${r}">${s}</voice>`;
}
function Ow(n, s) {
  return `<speak version="${n.version}" xml:lang="${n.xmlLang}" xmlns="${n.xmlns}" xmlns:mstts="${n["xmlns:mstts"]}" xmlns:emo="${n["xmlns:emo"]}">${s}</speak>`;
}
function Ef(n) {
  if (Gr.isText(n))
    return gw(n.text.trim());
  if (Iy.isElement(n)) {
    const s = n.children.map((o) => Ef(o)).join("");
    switch (ie.getNodeType(n)) {
      case "paragraph":
        return `<p>${s}</p>`;
      case "ssml-speak":
        return Ow(n, s);
      case "ssml-mstts:backgroundaudio":
        return xw(n);
      case "ssml-audio":
        return _w(n, s);
      case "ssml-break":
        return yw(n);
      case "ssml-emphasis":
        return bw(n, s);
      case "ssml-mstts:express-as":
        return ww(n, s);
      case "ssml-p":
        return Sw(n, s);
      case "ssml-phoneme":
        return $w(n, s);
      case "ssml-prosody":
        return Cw(n, s);
      case "ssml-s":
        return kw(n, s);
      case "ssml-say-as":
        return Rw(n, s);
      case "ssml-sub":
        return Aw(n, s);
      case "ssml-voice":
        return Tw(n, s);
      case "ssml-mstts:silence":
        return Ew(n);
      default:
        return s;
    }
  }
  return "";
}
function Iw(n, s) {
  const r = { type: "ssml-voice", remark: "", name: s.name, children: [] }, o = Sf(), l = {
    type: "ssml-mstts:express-as",
    remark: "",
    style: s.style,
    role: s.role,
    children: []
  }, c = () => ({
    type: "ssml-prosody",
    remark: "",
    rate: s.rate,
    pitch: s.pitch,
    children: []
  });
  r.children.push(...o), r.children.push(l);
  function d() {
    const m = c();
    l.children.push(m);
    function h(y) {
      m.children.push(y);
    }
    return { prosody: m, pushNode: h };
  }
  let v;
  for (let m = 0; m < s.children.length; m++) {
    const h = s.children[m];
    if (!(Gr.isText(h) && !h.text.trim()))
      if (Gr.isText(h)) {
        v ?? (v = d()), v.pushNode(h);
        continue;
      } else if (He.isVoid(n, h)) {
        v = void 0, l.children.push(h);
        continue;
      } else {
        const y = ie.findPath(n, h), [S] = He.nodes(n, {
          at: y,
          mode: "lowest",
          voids: !1,
          match: ($) => ie.checkNodeType($, "ssml-prosody")
        });
        if (S) {
          v = void 0, l.children.push(h);
          continue;
        } else
          v ?? (v = d()), v.pushNode(h);
      }
  }
  return r;
}
function Sf() {
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
function Nw() {
  const { rootVoice: n, rootExpressAs: s } = zn(), r = { ...n, children: [] }, o = Sf(), l = { ...s, children: [] };
  r.children.push(...o), r.children.push(l);
  function c(d) {
    l.children.push(d);
  }
  return { voice: r, pushNode: c };
}
function Pc(n) {
  const { rootProsody: s } = zn(), r = { ...s, children: [] };
  n(r);
  function o(l) {
    r.children.push(l);
  }
  return { prosody: r, pushNode: o };
}
function Lw() {
  return {
    type: "ssml-break",
    time: "200ms",
    children: [{ text: "" }],
    remark: "paragraphBreak"
  };
}
function Pw(n) {
  const s = n.children.filter((r) => ie.checkNodeType(r, "paragraph")).filter((r) => !!ia.string(r).trim()).map((r, o, l) => {
    const d = r.children;
    return o < l.length - 1 ? d.concat([Lw()]) : d;
  });
  return [].concat(...s);
}
function Dw(n) {
  const s = Pw(n), r = [];
  let o, l;
  for (let c = 0; c < s.length; c++) {
    const d = s[c];
    if (!(Gr.isText(d) && !d.text.trim())) {
      if (ie.checkNodeType(d, "custom-management")) {
        o && (r.push(o.voice), o = void 0, l = void 0), r.push(Iw(n, d));
        continue;
      }
      if (o ?? (o = Nw()), Gr.isText(d)) {
        l ?? (l = Pc(o.pushNode)), l.pushNode(d);
        continue;
      } else if (He.isVoid(n, d)) {
        l = void 0, o.pushNode(d);
        continue;
      } else {
        const v = ie.findPath(n, d), [m] = He.nodes(n, {
          at: v,
          mode: "lowest",
          voids: !1,
          match: (h) => ie.checkNodeType(h, "ssml-prosody")
        });
        if (m) {
          l = void 0, o.pushNode(d);
          continue;
        } else {
          l ?? (l = Pc(o.pushNode)), l.pushNode(d);
          continue;
        }
      }
    }
  }
  return o && r.push(o.voice), r;
}
function _a() {
  const { editor: n } = ut();
  if (!n)
    throw Error("没有找到 editor 对象");
  const { rootSpeak: s, rootBackgroundaudio: r } = zn(), o = { ...s, children: [] }, l = { ...r };
  return o.children.push(l, ...Dw(n)), Ef(o);
}
const Mw = (n) => (ns("data-v-f485fb08"), n = n(), rs(), n), Vw = { class: "play-menu-icon d-flex justify-content-center align-items-center" }, Uw = {
  key: 0,
  class: "fs-3 iconfont-moyin moyin-icon_play"
}, Fw = {
  key: 2,
  class: "iconfont icon-pause"
}, Bw = /* @__PURE__ */ Mw(() => /* @__PURE__ */ A("div", {
  class: "fw-normal",
  style: { "font-size": "0.85rem" }
}, "24K高清音质", -1)), Hw = /* @__PURE__ */ ce({
  __name: "play-menu",
  props: {
    disabled: { type: Boolean, default: !1 }
  },
  setup(n) {
    const s = ls(), { audioPlayer: r } = s, o = r.playState, l = r.loadState, c = ut(), { globalEditConfig: d } = c;
    async function v() {
      if (o.value === "playing") {
        r.pause();
        return;
      }
      try {
        const m = _a(), h = await d.tryPlay.play(m);
        await r.load(h.src), r.play();
      } catch {
        r.pause();
      }
    }
    return (m, h) => (M(), K("div", {
      class: $t(["play-menu px-2 py-1", { disabled: m.disabled }]),
      onClick: h[0] || (h[0] = (y) => !m.disabled && v()),
      onMousedown: h[1] || (h[1] = st(() => {
      }, ["prevent"]))
    }, [
      A("div", Vw, [
        C(l) === "complete" && C(o) === "paused" ? (M(), K("span", Uw)) : C(l) === "loading" ? (M(), we(C(sa), {
          key: 1,
          class: "is-loading"
        }, {
          default: X(() => [
            U(C(Vy))
          ]),
          _: 1
        })) : (M(), K("span", Fw))
      ]),
      Bw
    ], 34));
  }
});
const $f = /* @__PURE__ */ vt(Hw, [["__scopeId", "data-v-f485fb08"]]);
class Ut {
  constructor(s) {
    Pe(this, "editor");
    this.editor = s;
  }
  getValue() {
    const { selection: s } = this.editor;
    return s == null ? "" : He.string(this.editor, s);
  }
  isDisabled() {
    const { selection: s } = this.editor;
    return s == null ? (this.editor.emit(Ie.ERROR, "未选中编辑器"), !0) : !1;
  }
}
class Ww extends Ut {
  constructor(s) {
    super(s);
  }
  getValue() {
    return super.getValue();
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: s } = this.editor;
    if (!s)
      return !0;
    if (Rt.isCollapsed(s))
      return this.editor.emit(Ie.ERROR, "请框选一个中文字符"), !0;
    const r = this.getValue();
    return r.length != 1 ? (this.editor.emit(Ie.ERROR, "请框选一个中文字符"), !0) : /^[\u4E00-\u9FA5]$/gi.test(r) ? !1 : (this.editor.emit(Ie.ERROR, "请框选一个中文字符"), !0);
  }
  exec(s) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const r = this.getValue();
    if (r == null)
      return;
    const o = {
      type: "ssml-phoneme",
      alphabet: "sapi",
      ph: s.value,
      remark: s.label,
      children: [{ text: r }]
    };
    this.editor.insertNode(o);
  }
}
const zw = {
  class: "d-flex flex-column overflow-x-hidden overflow-y-auto",
  style: { "max-height": "300px" }
}, Gw = ["onClick"], Cf = /* @__PURE__ */ ce({
  __name: "pinyin-menu",
  setup(n) {
    const { globalEditConfig: s } = ut(), r = Ve(), o = L([]), l = L(!1);
    function c() {
      l.value || (l.value = !0);
    }
    function d() {
      l.value && (l.value = !1);
    }
    async function v(h) {
      var S;
      if (r.value ?? (r.value = new Ww(h)), (S = r.value) != null && S.isDisabled())
        return;
      const y = r.value.getValue();
      if (y ? o.value = await s.pinyin.fetchData(y) : o.value = [], o.value.length == 0)
        return h.emit(Ie.ERROR, "选中的字符没有不是多音字");
      c();
    }
    function m(h) {
      r.value && !r.value.isDisabled() && r.value.exec({ ...h }), d();
    }
    return (h, y) => (M(), we(C(vn), {
      visible: l.value,
      "onUpdate:visible": y[1] || (y[1] = (S) => l.value = S),
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: X(() => [
        U(C(ct), {
          text: "多音字",
          icon: "speaker",
          onClick: v
        })
      ]),
      default: X(() => [
        A("div", zw, [
          (M(!0), K(Re, null, De(o.value, (S, $) => (M(), K("div", {
            key: $,
            class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
            onClick: (k) => m(S),
            onMousedown: y[0] || (y[0] = st(() => {
            }, ["stop", "prevent"]))
          }, me(S.label), 41, Gw))), 128))
        ])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
class qw extends Ut {
  constructor(s) {
    super(s);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: s } = this.editor;
    return s ? Rt.isCollapsed(s) ? (this.editor.emit(Ie.ERROR, "请框选要连读的词或句子"), !0) : He.string(this.editor, s).length < 2 : !0;
  }
  exec() {
    if (this.isDisabled())
      return;
    const s = this.getValue();
    if (s == null)
      return;
    const r = {
      type: "ssml-prosody",
      rate: "medium",
      remark: "连读",
      children: [{ text: s }]
    };
    this.editor.insertNode(r);
  }
}
const Rf = /* @__PURE__ */ ce({
  __name: "continuous-menu",
  setup(n) {
    const s = Ve();
    function r(o) {
      s.value ?? (s.value = new qw(o)), !s.value.isDisabled() && s.value.exec();
    }
    return (o, l) => (M(), we(C(ct), {
      text: "连读",
      icon: "continuous",
      onClick: r
    }));
  }
}), Kw = [
  { label: "重音", value: "z" },
  { label: "拖音", value: "t" },
  { label: "重音+拖音", value: "z+t" }
], Yw = {
  z: { pitch: "x-high", rate: void 0 },
  t: { pitch: void 0, rate: "medium" },
  "z+t": { pitch: "x-high", rate: "medium" }
};
class Xw extends Ut {
  constructor(s) {
    super(s);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: s } = this.editor;
    return !s || s == null ? !0 : Rt.isCollapsed(s) ? (this.editor.emit(Ie.ERROR, "请框选词或句子"), !0) : !1;
  }
  exec(s) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const r = this.getValue();
    if (r == null)
      return;
    const { pitch: o, rate: l } = Yw[s.value], c = {
      type: "ssml-prosody",
      remark: s.label,
      pitch: o,
      rate: l,
      children: [{ text: r }]
    };
    this.editor.insertNode(c);
  }
}
const Jw = ["onClick"], kf = /* @__PURE__ */ ce({
  __name: "read-menu",
  setup(n) {
    const s = Ve(), r = L(!1);
    function o() {
      r.value || (r.value = !0);
    }
    function l() {
      r.value && (r.value = !1);
    }
    function c(v) {
      s.value ?? (s.value = new Xw(v)), !s.value.isDisabled() && o();
    }
    function d(v) {
      s.value && !s.value.isDisabled() && s.value.exec({ ...v }), l();
    }
    return (v, m) => (M(), we(C(vn), {
      visible: r.value,
      "onUpdate:visible": m[2] || (m[2] = (h) => r.value = h),
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: X(() => [
        U(C(ct), {
          text: "重音",
          icon: "read",
          onClick: c
        })
      ]),
      default: X(() => [
        A("div", {
          class: "d-flex flex-column",
          onMousedown: m[1] || (m[1] = st(() => {
          }, ["stop", "prevent"]))
        }, [
          (M(!0), K(Re, null, De(C(Kw), (h, y) => (M(), K("div", {
            key: y,
            class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
            onClick: (S) => d(h),
            onMousedown: m[0] || (m[0] = st(() => {
            }, ["stop", "prevent"]))
          }, me(h.label), 41, Jw))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
class Zw extends Ut {
  constructor(s) {
    super(s);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: s } = this.editor;
    if (!s)
      return !0;
    if (Rt.isCollapsed(s))
      return this.editor.emit(Ie.ERROR, "请框选纯数字"), !0;
    const r = He.string(this.editor, s);
    return r.length <= 0 ? !0 : Number.isNaN(Number(r)) ? (this.editor.emit(Ie.ERROR, "请框选纯数字"), !0) : !1;
  }
  exec(s) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const r = this.getValue();
    if (r == null)
      return;
    const o = {
      type: "ssml-say-as",
      interpretAs: s.value,
      remark: s.label,
      children: [{ text: r }]
    };
    this.editor.insertNode(o);
  }
}
const Qw = [
  { value: "cardinal", label: "读数值" },
  { value: "characters", label: "读数字" },
  { value: "telephone", label: "读手机号" }
], jw = { class: "d-flex flex-column" }, ex = ["onClick"], Af = /* @__PURE__ */ ce({
  __name: "digital-menu",
  setup(n) {
    const s = Ve(), r = L(!1);
    function o() {
      r.value = !r.value;
    }
    function l(d) {
      s.value ?? (s.value = new Zw(d)), !s.value.isDisabled() && o();
    }
    function c(d) {
      s.value && !s.value.isDisabled() && s.value.exec({ ...d }), o();
    }
    return (d, v) => (M(), we(C(vn), {
      visible: r.value,
      "onUpdate:visible": v[1] || (v[1] = (m) => r.value = m),
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: X(() => [
        U(C(ct), {
          text: "数字符号",
          icon: "digital",
          onClick: l
        })
      ]),
      default: X(() => [
        A("div", jw, [
          (M(!0), K(Re, null, De(C(Qw), (m, h) => (M(), K("div", {
            key: h,
            class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
            onClick: (y) => c(m),
            onMousedown: v[0] || (v[0] = st(() => {
            }, ["stop", "prevent"]))
          }, me(m.label), 41, ex))), 128))
        ])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
class tx extends Ut {
  constructor(s) {
    super(s);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: s } = this.editor;
    return s == null ? !0 : Rt.isCollapsed(s) ? (this.editor.emit(Ie.ERROR, "请框选要设置别名的词或句子"), !0) : !1;
  }
  exec(s) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const r = this.getValue();
    if (r == null)
      return;
    const o = {
      type: "ssml-sub",
      remark: s.value,
      alias: s.value,
      children: [{ text: r }]
    };
    this.editor.insertNode(o);
  }
}
const Tf = /* @__PURE__ */ ce({
  __name: "alias-menu",
  setup(n) {
    const s = Ve(), r = L(), o = L(!1);
    function l() {
      o.value || (o.value = !0);
    }
    function c() {
      o.value && (o.value = !1);
    }
    async function d(m) {
      var h;
      s.value ?? (s.value = new tx(m)), !s.value.isDisabled() && (l(), (h = r.value) == null || h.focus());
    }
    function v(m) {
      var h;
      c(), m && ((h = s.value) == null || h.exec({ value: m, label: m }));
    }
    return (m, h) => (M(), we(C(vn), {
      visible: o.value,
      "onUpdate:visible": h[0] || (h[0] = (y) => o.value = y),
      trigger: "contextmenu",
      placement: "right-end",
      hideAfter: 0,
      width: 200
    }, {
      reference: X(() => [
        U(C(ct), {
          text: "别名",
          icon: "alias",
          onClick: d
        })
      ]),
      default: X(() => [
        U(C(da), {
          ref_key: "inputRef",
          ref: r,
          onSubmit: v
        }, null, 512)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
class nx extends Ut {
  constructor(s) {
    super(s);
  }
  getValue() {
    return super.getValue();
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: s } = this.editor;
    if (!s)
      return !0;
    if (Rt.isCollapsed(s))
      return this.editor.emit(Ie.ERROR, "请框选英文单词"), !0;
    const r = He.string(this.editor, s);
    return r.length <= 0 ? !0 : /^[A-Za-z]+$/gi.test(r) ? !1 : (this.editor.emit(Ie.ERROR, "请框选英文单词"), !0);
  }
  exec(s) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const r = this.getValue();
    if (r == null)
      return;
    const o = {
      type: "ssml-phoneme",
      alphabet: "ipa",
      ph: s.value,
      remark: s.label,
      children: [{ text: r }]
    };
    this.editor.insertNode(o);
  }
}
const rx = { class: "d-flex flex-column" }, ix = ["onClick"], Of = /* @__PURE__ */ ce({
  __name: "english-menu",
  setup(n) {
    const { globalEditConfig: s } = ut(), r = Ve(), o = L([]), l = L(!1);
    function c() {
      l.value || (l.value = !0);
    }
    function d() {
      l.value && (l.value = !1);
    }
    async function v(h) {
      if (r.value ?? (r.value = new nx(h)), F0(h), r.value.isDisabled())
        return;
      const y = r.value.getValue();
      if (y) {
        if (o.value = await s.english.fetchData(y), o.value.length <= 0)
          return h.emit(Ie.ERROR, "找不到单词的音标");
        c();
      }
    }
    function m(h) {
      r.value && !r.value.isDisabled() && r.value.exec({ ...h }), d();
    }
    return (h, y) => (M(), we(C(vn), {
      visible: l.value,
      "onUpdate:visible": y[1] || (y[1] = (S) => l.value = S),
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: X(() => [
        U(C(ct), {
          text: "音标",
          icon: "english",
          onClick: v
        })
      ]),
      default: X(() => [
        A("div", rx, [
          (M(!0), K(Re, null, De(o.value, (S, $) => (M(), K("div", {
            key: $,
            class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
            onClick: (k) => m(S),
            onMousedown: y[0] || (y[0] = st(() => {
            }, ["stop", "prevent"]))
          }, me(S.label), 41, ix))), 128))
        ])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
class sx extends Ut {
  constructor(s) {
    super(s);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: s } = this.editor;
    return s == null ? !0 : Rt.isCollapsed(s) ? (this.editor.emit(Ie.ERROR, "请框选要变速的句子"), !0) : !1;
  }
  exec(s) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const r = this.getValue();
    if (r == null)
      return;
    const o = {
      type: "ssml-prosody",
      remark: s.label,
      rate: s.value,
      children: [{ text: r }]
    };
    this.editor.insertNode(o);
  }
}
function _e(n) {
  return `${((n - 1) * 100).toFixed(0)}%`;
}
const ox = [
  { value: _e(0.5), label: "0.5x" },
  { value: _e(0.55), label: "0.55x" },
  { value: _e(0.6), label: "0.6x" },
  { value: _e(0.65), label: "0.65x" },
  { value: _e(0.7), label: "0.7x" },
  { value: _e(0.75), label: "0.75x" },
  { value: _e(0.8), label: "0.8x" },
  { value: _e(0.85), label: "0.85x" },
  { value: _e(0.9), label: "0.9x" },
  { value: _e(0.95), label: "0.95x" },
  { value: _e(1), label: "1x" },
  { value: _e(1.05), label: "1.05x" },
  { value: _e(1.1), label: "1.1x" },
  { value: _e(1.15), label: "1.15x" },
  { value: _e(1.2), label: "1.2x" },
  { value: _e(1.25), label: "1.25x" },
  { value: _e(1.3), label: "1.3x" },
  { value: _e(1.35), label: "1.35x" },
  { value: _e(1.4), label: "1.4x" },
  { value: _e(1.45), label: "1.45x" },
  { value: _e(1.5), label: "1.5x" },
  { value: _e(1.55), label: "1.55x" },
  { value: _e(1.6), label: "1.6x" },
  { value: _e(1.65), label: "1.65x" },
  { value: _e(1.7), label: "1.7x" },
  { value: _e(1.75), label: "1.75x" },
  { value: _e(1.8), label: "1.8x" },
  { value: _e(1.85), label: "1.85x" },
  { value: _e(1.9), label: "1.9x" },
  { value: _e(1.95), label: "1.95x" },
  { value: _e(2), label: "2x" }
], ax = {
  class: "d-flex flex-column overflow-x-hidden overflow-y-scroll",
  style: { height: "15rem" }
}, lx = ["onClick"], If = /* @__PURE__ */ ce({
  __name: "changespeed-menu",
  setup(n) {
    const s = Ve(), r = L(!1);
    function o() {
      r.value || (r.value = !0);
    }
    function l() {
      r.value && (r.value = !1);
    }
    async function c(v) {
      s.value ?? (s.value = new sx(v)), !s.value.isDisabled() && o();
    }
    function d(v) {
      var m;
      (m = s.value) == null || m.exec({ ...v }), l();
    }
    return (v, m) => (M(), we(C(vn), {
      style: { padding: "0px" },
      visible: r.value,
      "onUpdate:visible": m[1] || (m[1] = (h) => r.value = h),
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: X(() => [
        U(C(ct), {
          text: "局部变速",
          icon: "changespeed",
          onClick: c
        })
      ]),
      default: X(() => [
        A("div", ax, [
          (M(!0), K(Re, null, De(C(ox), (h, y) => (M(), K("div", {
            key: y,
            class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
            onClick: (S) => d(h),
            onMousedown: m[0] || (m[0] = st(() => {
            }, ["stop", "prevent"]))
          }, me(h.label), 41, lx))), 128))
        ])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
class ux extends Ut {
  constructor(s) {
    super(s);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: s } = this.editor;
    return s ? Rt.isExpanded(s) ? (this.editor.emit(Ie.ERROR, "不能框选文本"), !0) : !1 : !0;
  }
  exec(s) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const r = {
      type: "ssml-break",
      strength: s.value,
      remark: s.label,
      children: [{ text: "" }]
    };
    this.editor.insertNode(r);
  }
}
const cx = [
  { value: "weak", label: "短" },
  { value: "medium", label: "中" },
  { value: "strong", label: "长" }
], fx = { class: "d-flex flex-column" }, dx = ["onClick"], Nf = /* @__PURE__ */ ce({
  __name: "rhythm-menu",
  setup(n) {
    const s = Ve(), r = L(!1);
    function o() {
      r.value || (r.value = !0);
    }
    function l() {
      r.value && (r.value = !1);
    }
    function c(v) {
      s.value ?? (s.value = new ux(v)), !s.value.isDisabled() && o();
    }
    function d(v) {
      s.value && !s.value.isDisabled() && s.value.exec({ ...v }), l();
    }
    return (v, m) => (M(), we(C(vn), {
      visible: r.value,
      "onUpdate:visible": m[1] || (m[1] = (h) => r.value = h),
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: X(() => [
        U(C(ct), {
          text: "停顿调节",
          icon: "rhythm",
          onClick: c
        })
      ]),
      default: X(() => [
        A("div", fx, [
          (M(!0), K(Re, null, De(C(cx), (h, y) => (M(), K("div", {
            key: y,
            class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
            onClick: (S) => d(h),
            onMousedown: m[0] || (m[0] = st(() => {
            }, ["stop", "prevent"]))
          }, me(h.label), 41, dx))), 128))
        ])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
class px extends Ut {
  constructor(s) {
    super(s);
  }
  restoreSelection() {
    this.editor.restoreSelection();
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: s } = this.editor;
    return s ? Rt.isExpanded(s) ? (this.editor.emit(Ie.ERROR, "不能框选文字"), !0) : !1 : !0;
  }
  exec(s) {
    if (this.editor.restoreSelection(), this.isDisabled() || this.getValue() == null)
      return;
    const o = {
      type: "ssml-audio",
      src: s.value,
      remark: s.label,
      children: [{ text: "" }]
    };
    this.editor.insertNode(o);
  }
}
const Lf = /* @__PURE__ */ ce({
  __name: "special-menu",
  setup(n) {
    const s = L(), r = L(), o = Ve(), { globalEditConfig: l } = ut(), { special: c } = l, d = L(!1), { x: v, y: m, height: h } = Yr(r), y = ($) => {
      o.value ?? (o.value = new px($)), !o.value.isDisabled() && (s.value.setPosition({
        x: v.value - 200,
        y: m.value + h.value
      }), d.value = !0);
    };
    function S($) {
      var k;
      (k = o.value) == null || k.restoreSelection(), o.value && !o.value.isDisabled() && o.value.exec($), d.value = !1;
    }
    return ($, k) => (M(), we(C(gr), {
      ref_key: "dragRef",
      ref: s,
      visible: d.value,
      "onUpdate:visible": k[0] || (k[0] = (x) => d.value = x)
    }, {
      reference: X(() => [
        U(C(ct), {
          ref_key: "menuRef",
          ref: r,
          text: "音效",
          icon: "special",
          onClick: y
        }, null, 512)
      ]),
      default: X(() => [
        U(C(va), {
          menus: C(c).menus,
          fetchScene: C(c).fetchScene,
          fetchStyle: C(c).fetchStyle,
          fetchData: C(c).fetchData,
          onSubmit: S
        }, null, 8, ["menus", "fetchScene", "fetchStyle", "fetchData"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
class hx extends Ut {
  constructor(s) {
    super(s);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: s } = this.editor;
    return s ? Rt.isExpanded(s) ? (this.editor.emit(Ie.ERROR, "不能框选文本"), !0) : !1 : !0;
  }
  exec(s) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const r = {
      type: "ssml-break",
      time: s.value,
      remark: s.label,
      children: [{ text: "" }]
    };
    this.editor.insertNode(r);
  }
}
const vx = [
  { value: "150ms", label: "150ms" },
  { value: "200ms", label: "200ms" },
  { value: "300ms", label: "300ms" },
  { value: "400ms", label: "400ms" },
  { value: "500ms", label: "500ms" },
  { value: "600ms", label: "600ms" }
], mx = { class: "d-flex flex-column" }, gx = ["onClick"], Pf = /* @__PURE__ */ ce({
  __name: "mute-menu",
  setup(n) {
    const s = Ve(), r = L(!1), o = L();
    function l() {
      r.value || (r.value = !0);
    }
    function c() {
      r.value && (r.value = !1);
    }
    function d(m) {
      var h;
      s.value ?? (s.value = new hx(m)), !s.value.isDisabled() && (l(), (h = o.value) == null || h.focus());
    }
    function v(m) {
      var h;
      c(), m && ((h = s.value) == null || h.exec({ value: m, label: m }));
    }
    return (m, h) => (M(), we(C(vn), {
      visible: r.value,
      "onUpdate:visible": h[1] || (h[1] = (y) => r.value = y),
      trigger: "contextmenu",
      hideAfter: 0,
      width: 200
    }, {
      reference: X(() => [
        U(C(ct), {
          text: "插入静音",
          icon: "mute",
          onClick: d
        })
      ]),
      default: X(() => [
        A("div", mx, [
          (M(!0), K(Re, null, De(C(vx), (y, S) => (M(), K("div", {
            key: S,
            class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
            onClick: ($) => v(y.value),
            onMousedown: h[0] || (h[0] = st(() => {
            }, ["stop", "prevent"]))
          }, me(y.label), 41, gx))), 128)),
          U(C(da), {
            type: "text",
            ref_key: "inputRef",
            ref: o,
            onSubmit: v
          }, null, 512)
        ])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Df = /* @__PURE__ */ ce({
  __name: "bgm-menu",
  setup(n) {
    const s = L(), r = L(), o = Ve(), { globalEditConfig: l } = ut(), { bgm: c } = l, d = L(!1), { x: v, y: m, height: h } = Yr(r), y = async ($) => {
      const k = {
        x: v.value - 300,
        y: m.value + h.value
      };
      o.value = $, s.value.setPosition(k), d.value = !0;
    };
    function S($) {
      const { rootBackgroundaudio: k } = zn();
      k.src = $.value, k.remark = $.label, d.value = !1;
    }
    return ($, k) => (M(), we(C(gr), {
      ref_key: "dragRef",
      ref: s,
      visible: d.value,
      "onUpdate:visible": k[0] || (k[0] = (x) => d.value = x)
    }, {
      reference: X(() => [
        U(C(ct), {
          ref_key: "menuRef",
          ref: r,
          text: "配乐",
          icon: "bgm",
          onClick: y
        }, null, 512)
      ]),
      default: X(() => [
        U(C(va), {
          menus: C(c).menus,
          fetchScene: C(c).fetchScene,
          fetchStyle: C(c).fetchStyle,
          fetchData: C(c).fetchData,
          onSubmit: S
        }, null, 8, ["menus", "fetchScene", "fetchStyle", "fetchData"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Mf = /* @__PURE__ */ ce({
  __name: "sensitive-menu",
  setup(n) {
    const s = L(), r = L(), o = Ve(), l = L(!1), { x: c, y: d, height: v } = Yr(r), m = (h) => {
      o.value = h, s.value.setPosition({
        x: c.value - 200,
        y: d.value + v.value
      }), l.value = !0;
    };
    return (h, y) => (M(), we(C(gr), {
      ref_key: "dragRef",
      ref: s,
      visible: l.value,
      "onUpdate:visible": y[0] || (y[0] = (S) => l.value = S)
    }, {
      reference: X(() => [
        U(C(ct), {
          ref_key: "menuRef",
          ref: r,
          text: "敏感词",
          icon: "sensitive",
          onClick: m
        }, null, 512)
      ]),
      default: X(() => [
        U(Mf)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
const _x = {
  class: "select-list",
  style: { width: "120px" }
}, yx = {
  class: "text-center d-flex flex-column justify-content-center fs-6",
  style: { height: "60px" }
}, bx = ["onClick"], wx = /* @__PURE__ */ ce({
  __name: "select-list",
  props: {
    modelValue: {},
    dataList: {}
  },
  emits: ["update:modelValue"],
  setup(n, { expose: s, emit: r }) {
    const o = n, l = L();
    function c(v) {
      r("update:modelValue", v.value);
    }
    function d() {
      var v;
      if (l.value) {
        for (let m = 0; m < o.dataList.length; m++)
          if (o.dataList[m].value === o.modelValue) {
            (v = l.value.children[m]) == null || v.scrollIntoView({ behavior: "smooth" });
            return;
          }
      }
    }
    return s({
      scrollIntoViewTheItem: d
    }), (v, m) => (M(), K("div", _x, [
      A("div", yx, [
        en(v.$slots, "default", {}, void 0, !0)
      ]),
      A("ul", {
        ref_key: "listRef",
        ref: l,
        class: "text-center w-100 border-start border-top border-bottom border-secondary-subtle overflow-y-auto overflow-x-hidden scrollbar-none",
        style: { height: "180px" }
      }, [
        (M(!0), K(Re, null, De(v.dataList, (h, y) => (M(), K("li", {
          class: $t(["clickable select-item py-1", { activate: h.value === v.modelValue }]),
          key: y,
          onClick: (S) => c(h)
        }, me(h.label), 11, bx))), 128))
      ], 512)
    ]));
  }
});
const cr = /* @__PURE__ */ vt(wx, [["__scopeId", "data-v-e0f0259e"]]), xx = { class: "position-relative" }, Ex = { class: "position-absolute top-0 end-0" }, Sx = /* @__PURE__ */ A("li", null, [
  /* @__PURE__ */ A("span", { class: "text-nowrap" }, "近期使用:")
], -1), $x = ["onClick"], Cx = /* @__PURE__ */ A("span", { class: "my-3" }, "类型", -1), Rx = /* @__PURE__ */ A("span", { class: "my-3" }, "配音师", -1), kx = /* @__PURE__ */ A("span", { class: "my-3" }, "角色", -1), Ax = /* @__PURE__ */ A("span", { class: "my-3" }, "风格", -1), Tx = /* @__PURE__ */ A("span", { class: "my-3" }, "语速", -1), Ox = /* @__PURE__ */ A("span", { class: "my-3" }, "语调", -1), Ix = { class: "position-absolute bottom-0 end-0 d-flex flex-row justify-content-end me-4 mb-3" }, Nx = /* @__PURE__ */ ce({
  __name: "management-content",
  emits: ["submit"],
  setup(n, { emit: s }) {
    const { globalEditConfig: r } = ut(), { tryPlay: o, management: l } = r, c = L(), d = L(!1), v = L(""), m = hf(), { contentData: h } = rf(m), y = Ve([]), S = L([]), $ = L([{ label: "全部类型", value: "" }, ...o.category]), k = L([]), x = L([]), b = L([]), D = L(_0()), B = L(y0()), H = cs(c);
    Ct(async () => {
      h.value.category = $.value[0].value, await W(), await P();
    }), Ye(H, (z) => {
      z || (v.value = "", d.value = !1);
    });
    async function O(z) {
      h.value.category = z, await W();
    }
    async function W() {
      const z = await o.fetchData({ ...fa(), ...h.value });
      y.value = z, k.value = z.map((Q) => ({ label: Q.displayName, value: Q.name })), z.length > 0 && (x.value = z[0].roles, b.value = z[0].styles, h.value.name = z[0].name), x.value.length > 0 && (h.value.role = x.value[0].value), b.value.length > 0 && (h.value.style = b.value[0].value);
    }
    function J(z) {
      const Q = y.value.find((fe) => fe.name === z);
      Q && (x.value = Q.roles, b.value = Q.styles, x.value.length > 0 && (h.value.role = x.value[0].value), b.value.length > 0 && (h.value.style = b.value[0].value));
    }
    async function ee() {
      var Ge, Se, Gn, $e;
      const z = ((Ge = k.value.find((Ne) => Ne.value === h.value.name)) == null ? void 0 : Ge.label) || "", Q = ((Se = x.value.find((Ne) => Ne.value === h.value.role)) == null ? void 0 : Se.label) || "", fe = ((Gn = b.value.find((Ne) => Ne.value === h.value.style)) == null ? void 0 : Gn.label) || "", Xe = (($e = D.value.find((Ne) => Ne.value === h.value.speed)) == null ? void 0 : $e.label) || "", Yt = {
        category: h.value.category,
        name: h.value.name,
        label: `${z}|${Q}|${fe}|${Xe}`,
        value: h.value.name,
        role: h.value.role,
        style: h.value.style,
        speed: w0(Number(h.value.speed)),
        pitch: b0(Number(h.value.pitch))
      };
      s("submit", Yt), await ve(Yt);
    }
    async function P() {
      try {
        S.value = await l.fetchRecentUsage();
      } catch (z) {
        it.emit(rt.ERROR, `${z}`, z);
      }
    }
    async function ve(z) {
      try {
        const Q = { ...h.value, label: z.label, id: "" }, fe = await l.recordRecentUsage(Q);
        S.value.splice(0, 0, fe), S.value = je.sortedUniqBy(
          S.value,
          (Xe) => `${Xe.name}+${Xe.role}+${Xe.style}+${Xe.pitch}+${Xe.speed}`
        );
      } catch (Q) {
        it.emit(rt.ERROR, `${Q}`, Q);
      }
    }
    function Ae(z) {
      h.value.category = z.category, h.value.name = z.name, h.value.pitch = z.pitch, h.value.role = z.role, h.value.speed = z.speed, h.value.style = z.style, ee();
    }
    async function G(z) {
      try {
        const Q = S.value[z];
        await l.deleteRecentUsage(Q.id), S.value.splice(z, 1);
      } catch (Q) {
        it.emit(rt.ERROR, `${Q}`, Q);
      }
    }
    async function q() {
      try {
        await l.deleteRecentUsage(), S.value = [];
      } catch (z) {
        it.emit(rt.ERROR, `${z}`, z);
      }
    }
    return (z, Q) => (M(), K("div", {
      ref_key: "boxRef",
      ref: c,
      style: { width: "600px", height: "360px" },
      class: "position-relative px-2 pb-2"
    }, [
      U(C(is), {
        onSubmit: st(W, ["prevent"])
      }, {
        default: X(() => [
          U(C(ss), {
            modelValue: v.value,
            "onUpdate:modelValue": Q[0] || (Q[0] = (fe) => v.value = fe),
            placeholder: "请输入名称快速查找配音师"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["onSubmit"]),
      A("div", xx, [
        A("div", Ex, [
          U(C(Et), {
            size: "small",
            icon: C(Uy),
            onClick: Q[1] || (Q[1] = () => d.value = !d.value)
          }, null, 8, ["icon"])
        ]),
        A("ul", {
          class: $t(["d-flex flex-row row-gap-1 column-gap-2 overflow-x-hidden", { "flex-wrap": d.value }])
        }, [
          Sx,
          (M(!0), K(Re, null, De(S.value, (fe, Xe) => (M(), K("li", {
            class: "btn m-0 p-0",
            onClick: (Yt) => Ae(fe),
            key: Xe
          }, [
            U(C(Hc), {
              type: "info",
              onClose: (Yt) => G(Xe),
              closable: ""
            }, {
              default: X(() => [
                Qe(me(fe.label), 1)
              ]),
              _: 2
            }, 1032, ["onClose"])
          ], 8, $x))), 128))
        ], 2),
        pn(A("div", {
          class: $t({ "d-flex flex-row": !d.value })
        }, [
          U(cr, {
            "onUpdate:modelValue": [
              O,
              Q[2] || (Q[2] = (fe) => C(h).category = fe)
            ],
            modelValue: C(h).category,
            dataList: $.value
          }, {
            default: X(() => [
              Cx
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          U(cr, {
            "onUpdate:modelValue": [
              J,
              Q[3] || (Q[3] = (fe) => C(h).name = fe)
            ],
            modelValue: C(h).name,
            dataList: k.value
          }, {
            default: X(() => [
              Rx
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          U(cr, {
            modelValue: C(h).role,
            "onUpdate:modelValue": Q[4] || (Q[4] = (fe) => C(h).role = fe),
            dataList: x.value
          }, {
            default: X(() => [
              kx
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          U(cr, {
            modelValue: C(h).style,
            "onUpdate:modelValue": Q[5] || (Q[5] = (fe) => C(h).style = fe),
            dataList: b.value
          }, {
            default: X(() => [
              Ax
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          U(cr, {
            modelValue: C(h).speed,
            "onUpdate:modelValue": Q[6] || (Q[6] = (fe) => C(h).speed = fe),
            dataList: D.value
          }, {
            default: X(() => [
              Tx
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          U(cr, {
            modelValue: C(h).pitch,
            "onUpdate:modelValue": Q[7] || (Q[7] = (fe) => C(h).pitch = fe),
            dataList: B.value
          }, {
            default: X(() => [
              Ox
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"])
        ], 2), [
          [hn, !d.value]
        ])
      ]),
      A("div", Ix, [
        pn(U(C(Et), {
          onClick: ee,
          type: "primary"
        }, {
          default: X(() => [
            Qe("确定")
          ]),
          _: 1
        }, 512), [
          [hn, !d.value]
        ]),
        pn(U(C(Et), {
          onClick: q,
          type: "primary"
        }, {
          default: X(() => [
            Qe("全部清空")
          ]),
          _: 1
        }, 512), [
          [hn, d.value]
        ])
      ])
    ], 512));
  }
});
class Dc extends Ut {
  constructor(r) {
    super(r);
    Pe(this, "contentData");
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: r } = this.editor;
    if (r == null)
      return !0;
    if (ie.getSelectedNodeByType(this.editor, "custom-management"))
      return !1;
    if (Rt.isCollapsed(r))
      return this.editor.emit(Ie.ERROR, "请框选句子"), !0;
    const [o] = He.node(this.editor, r), l = this.editor.getParentNode(o);
    return !l || !ie.checkNodeType(l, "paragraph") ? (this.editor.emit(Ie.ERROR, "多人配音需要在最外层使用"), !0) : !1;
  }
  exec(r) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const o = this.getValue();
    if (o == null)
      return;
    const l = ie.getSelectedNodeByType(this.editor, "custom-management");
    if (l)
      Me.setNodes(
        this.editor,
        {
          custom: { contentData: this.contentData || {} },
          remark: r.label,
          name: r.value,
          role: r.role,
          style: r.style,
          rate: r.speed,
          pitch: r.pitch
        },
        {
          at: ie.findPath(this.editor, l)
        }
      );
    else {
      const c = {
        type: "custom-management",
        custom: { contentData: this.contentData || {} },
        remark: r.label,
        name: r.value,
        role: r.role,
        style: r.style,
        rate: r.speed,
        pitch: r.pitch,
        children: [{ text: o }]
      };
      this.editor.insertNode(c);
    }
  }
}
const Vf = /* @__PURE__ */ ce({
  __name: "management-menu",
  setup(n) {
    const s = L(), r = L(), o = L(!1), l = Ve(), c = hf(), { contentData: d } = rf(c), { x: v, y: m, height: h } = Yr(r);
    Ct(() => {
      it.on(rt.EDITOR_CREATED, (x) => {
        x.on(Ie.SSML_ELEMENT_CLICK, (b, D) => {
          var B;
          if (D.type === "custom-management") {
            l.value ?? (l.value = new Dc(b));
            const O = ((B = D.custom) == null ? void 0 : B.contentData) || {};
            O && (d.value.category = O.category, d.value.name = O.name, d.value.pitch = O.pitch, d.value.role = O.role, d.value.speed = O.speed, d.value.style = O.style), setTimeout(() => {
              y();
            }, 200);
          }
        });
      });
    });
    function y() {
      var b;
      const x = {
        x: v.value - 200,
        y: m.value + h.value
      };
      (b = s.value) == null || b.setPosition(x), o.value = !0;
    }
    function S() {
      o.value = !1;
    }
    function $(x) {
      l.value ?? (l.value = new Dc(x)), !l.value.isDisabled() && y();
    }
    function k(x) {
      var b;
      l.value && !l.value.isDisabled() && (l.value.contentData = { ...d.value }, (b = l.value) == null || b.exec(x)), S();
    }
    return (x, b) => (M(), we(C(gr), {
      ref_key: "dragRef",
      ref: s,
      visible: o.value,
      "onUpdate:visible": b[0] || (b[0] = (D) => o.value = D)
    }, {
      reference: X(() => [
        U(C(ct), {
          ref_key: "menuRef",
          ref: r,
          text: "多人配音",
          icon: "management",
          onClick: $
        }, null, 512)
      ]),
      default: X(() => [
        U(Nx, { onSubmit: k })
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Lx = { class: "speaker-head" }, Px = ["src"], Dx = { class: "speaker-name" }, Mx = /* @__PURE__ */ ce({
  __name: "speaker-item",
  props: {
    label: {},
    value: {},
    avatar: {},
    activated: { type: Boolean }
  },
  emits: ["click"],
  setup(n) {
    return (s, r) => (M(), K("div", {
      class: "speaker-item",
      onClick: r[0] || (r[0] = (o) => s.$emit("click", s.value || ""))
    }, [
      A("div", Lx, [
        A("img", {
          src: s.avatar || C(Kr)(),
          class: $t([{ "border border-warning": s.activated }, "rounded-circle"]),
          style: { height: "40px" }
        }, null, 10, Px)
      ]),
      A("div", Dx, me(s.label), 1)
    ]));
  }
});
const Vx = /* @__PURE__ */ vt(Mx, [["__scopeId", "data-v-b043c1a6"]]);
class Ux {
  constructor() {
    Pe(this, "mediaRecorder", null);
    Pe(this, "isRecording", L(!1));
  }
  get recorderState() {
    return Be(() => this.isRecording.value ? "recording" : "paused");
  }
  async start(s) {
    if (navigator.mediaDevices.getUserMedia) {
      const r = [];
      try {
        const o = await navigator.mediaDevices.getUserMedia({ audio: !0 }), l = new MediaRecorder(o);
        return this.mediaRecorder = l, new Promise((c, d) => {
          l.ondataavailable = (v) => {
            s.isCancellationRequested() ? (l.stop(), this.isRecording.value = !1, s.throwIfRequested()) : r.push(v.data);
          }, l.onstart = () => {
            this.isRecording.value = !0;
          }, l.onpause = () => {
            this.isRecording.value = !1;
          }, l.onstop = () => {
            this.isRecording.value = !1;
            const v = new Blob(r, { type: "audio/wav" });
            c(v);
          }, l.onerror = (v) => {
            this.isRecording.value = !1, d(v);
          }, s.throwIfRequested(), l.start();
        });
      } catch (o) {
        throw console.error(o), new Error("授权失败！", { cause: o });
      }
    }
    throw Error("浏览器不支持 getUserMedia");
  }
  stop() {
    this.mediaRecorder && this.mediaRecorder.stop();
  }
}
const Fx = { class: "d-flex flex-row justify-content-between border rounded-pill border-secondary my-3 py-1 px-2" }, Bx = {
  class: "text-secondary d-flex flex-row align-items-center",
  style: { "font-size": "0.5rem" }
}, Hx = {
  key: 0,
  class: "iconfont icon-pause"
}, Wx = {
  key: 1,
  class: "iconfont icon-play"
}, zx = /* @__PURE__ */ A("span", { class: "iconfont icon-delete" }, null, -1), Gx = [
  zx
], qx = {
  key: 1,
  style: { "font-size": "0.5rem" }
}, Kx = /* @__PURE__ */ A("p", null, "选择需要转换的配音师", -1), Yx = {
  class: "speakers-container border rounded d-flex flex-row flex-wrap row-gap-1 column-gap-2 overflow-y-auto overflow-x-hidden",
  style: { height: "150px" }
}, Xx = ["disabled"], Jx = /* @__PURE__ */ ce({
  __name: "audio-upload",
  emits: ["submit"],
  setup(n, { expose: s, emit: r }) {
    const { globalEditConfig: o } = ut(), { audioUpload: l, transfer: c, fetchSpeaker: d, timeoutMilliseconds: v } = o.conversion, m = L(), h = L(), y = L(), S = L(!0), $ = L([]), k = L(), x = Ve(), b = Ve(), D = new pf(), { playState: B } = D;
    let H;
    const O = new Ux(), W = new V0("audio/*"), J = new U0(60), { state: ee } = J, { recorderState: P } = O, ve = cs(m), Ae = Vc("reopen");
    Ye(ve, ($e) => {
      $e || G();
    }), Ct(async () => {
      $.value = await d();
    }), Ye(ve, ($e) => {
      $e || (S.value = !0, H == null || H.cancel());
    }), s({
      openInputFile: Xe
    });
    function G() {
      S.value = !0, q();
    }
    function q() {
      D.pause(), h.value = void 0, y.value = void 0, k.value = void 0, x.value = void 0, b.value = void 0, H == null || H.cancel();
    }
    function z() {
      O.stop(), J.stop();
    }
    async function Q() {
      H = new Cc(6e4), J.start();
      try {
        H.startTimeout(), x.value = await O.start(H.token);
      } catch ($e) {
        it.emit(rt.ERROR, `${$e}`, $e);
      } finally {
        H.cancel(), J.stop();
      }
    }
    function fe() {
      if (B.value === "playing")
        D.pause();
      else if (x.value) {
        const $e = window.URL.createObjectURL(x.value);
        D.load($e), D.play();
      } else if (b.value) {
        const $e = window.URL.createObjectURL(b.value);
        D.load($e), D.play();
      }
    }
    async function Xe() {
      try {
        return b.value = await W.open(), S.value = !1, !0;
      } catch {
        return !1;
      }
    }
    async function Yt() {
      try {
        if (H = new Cc(v), S.value && x.value)
          H.startTimeout(), h.value = await l(x.value, H.token);
        else if (!S.value && b.value)
          H.startTimeout(), h.value = await l(b.value, H.token);
        else
          throw new Error("请选则文件或实时录音");
      } catch ($e) {
        it.emit(rt.ERROR, `${$e}`, $e);
      }
    }
    async function Ge($e) {
      try {
        h.value ? (k.value = $e, y.value = await c({ audioId: h.value.id, speakerId: $e.id })) : it.emit(rt.ERROR, "请先上传音频文件");
      } catch (Ne) {
        it.emit(rt.ERROR, `${Ne}`, Ne);
      }
    }
    function Se() {
      y.value && k.value && (r("submit", { label: k.value.displayName, value: y.value.src }), G());
    }
    function Gn() {
      H == null || H.cancel(), Ae == null || Ae();
    }
    return ($e, Ne) => {
      var Xr, Jr;
      return M(), K("div", {
        class: "audio-upload",
        ref_key: "boxRef",
        ref: m
      }, [
        A("div", Fx, [
          A("div", Bx, [
            x.value || b.value ? (M(), K("button", {
              key: 0,
              onClick: fe,
              class: "btn btn-sm rounded-pill"
            }, [
              C(B) === "playing" || C(P) === "recording" ? (M(), K("span", Hx)) : (M(), K("span", Wx))
            ])) : Qt("", !0),
            A("span", null, me(((Xr = b.value) == null ? void 0 : Xr.name) || ((Jr = x.value) == null ? void 0 : Jr.name)), 1)
          ]),
          A("div", null, [
            !h.value && (x.value || b.value) ? (M(), K("button", {
              key: 0,
              onClick: q,
              class: "btn btn-sm rounded-pill"
            }, Gx)) : Qt("", !0),
            h.value ? (M(), K("span", qx, "已上传")) : Qt("", !0),
            S.value && !x.value ? (M(), K(Re, { key: 2 }, [
              C(P) === "recording" ? (M(), K("button", {
                key: 0,
                onClick: z,
                class: "btn btn-primary btn-sm rounded-pill"
              }, " 结束录音(" + me(C(ee)) + ")s ", 1)) : (M(), K("button", {
                key: 1,
                onClick: Q,
                class: "btn btn-primary btn-sm rounded-pill"
              }, " 开始录音 "))
            ], 64)) : Qt("", !0),
            !S.value && !b.value ? (M(), K("button", {
              key: 3,
              onClick: Xe,
              class: "btn btn-primary btn-sm rounded-pill"
            }, " 选择文件 ")) : Qt("", !0),
            h.value ? (M(), K("button", {
              key: 4,
              onClick: Gn,
              class: "btn btn-primary btn-sm rounded-pill"
            }, " 重传音频 ")) : Qt("", !0),
            !h.value && (b.value || x.value) ? (M(), K("button", {
              key: 5,
              onClick: Yt,
              class: "btn btn-primary btn-sm rounded-pill"
            }, " 上传音频 ")) : Qt("", !0)
          ])
        ]),
        A("div", null, [
          Kx,
          A("div", Yx, [
            (M(!0), K(Re, null, De($.value, (qn, mn) => {
              var kn;
              return M(), we(Vx, {
                onClick: (ba) => Ge(qn),
                key: mn,
                label: qn.displayName,
                avatar: qn.avatar,
                activated: qn.name === ((kn = k.value) == null ? void 0 : kn.name)
              }, null, 8, ["onClick", "label", "avatar", "activated"]);
            }), 128))
          ])
        ]),
        A("button", {
          class: "btn btn-primary mt-1",
          onClick: Se,
          disabled: !y.value
        }, " 完成录音并上传完成后，可选择配音师转换 ", 8, Xx)
      ], 512);
    };
  }
}), Zx = {
  class: "fw-bold",
  style: { "font-size": "0.5rem" }
}, Qx = /* @__PURE__ */ A("p", { class: "text-start text-danger" }, "请在安静的环境中进行录音，以需要转换的风格，读出以下文案", -1), jx = {
  class: "border border-secondary rounded p-2 w-100",
  style: { height: "100px" }
}, eE = { class: "mt-2" }, tE = /* @__PURE__ */ A("p", {
  class: "mt-2 text-secondary",
  style: { "font-size": "0.5rem" }
}, " 录音内容需要和滑选一致，音频限制60秒，滑选文案限制60个字 ", -1), nE = /* @__PURE__ */ ce({
  __name: "conversion-content",
  props: {
    text: {}
  },
  emits: ["submit"],
  setup(n) {
    const s = L(), r = L(), o = L(!0), l = L(!1), c = cs(s);
    Oy("reopen", () => {
      o.value = !0, l.value = !1;
    }), Ye(c, (m) => {
      m || (o.value = !0, l.value = !1);
    });
    function d() {
      o.value = !0, l.value = !0;
    }
    async function v() {
      var m;
      await ((m = r.value) == null ? void 0 : m.openInputFile()) && (o.value = !1, l.value = !0);
    }
    return (m, h) => (M(), K("div", {
      ref_key: "boxRef",
      ref: s,
      class: "px-2 py-1",
      style: { width: "410px" }
    }, [
      pn(A("section", Zx, [
        Qx,
        A("div", jx, me(m.text), 1)
      ], 512), [
        [hn, o.value]
      ]),
      pn(A("section", eE, [
        A("div", { class: "w-100 d-flex flex-column row-gap-1" }, [
          A("button", {
            onClick: d,
            class: "btn btn-success"
          }, "实时录音"),
          A("button", {
            onClick: v,
            class: "btn btn-primary"
          }, "上传录音")
        ]),
        tE
      ], 512), [
        [hn, !l.value]
      ]),
      pn(A("section", null, [
        U(Jx, {
          ref_key: "audioUploadRef",
          ref: r,
          onSubmit: h[0] || (h[0] = (y) => m.$emit("submit", y))
        }, null, 512)
      ], 512), [
        [hn, l.value]
      ])
    ], 512));
  }
});
class rE extends Ut {
  constructor(s) {
    super(s);
  }
  getValue() {
    return super.getValue();
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: s } = this.editor;
    return s == null ? !0 : Rt.isCollapsed(s) ? (this.editor.emit(Ie.ERROR, "请框选要变音的句子"), !0) : !1;
  }
  exec(s) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const r = this.getValue();
    if (r == null)
      return;
    const o = {
      type: "ssml-audio",
      remark: s.label,
      src: s.value,
      children: [{ text: r }]
    };
    this.editor.insertNode(o);
  }
}
const Uf = /* @__PURE__ */ ce({
  __name: "conversion-menu",
  setup(n) {
    const s = L(), r = L(), o = Ve(), l = Ve(), c = L(!1), d = L(""), { x: v, y: m, height: h } = Yr(r), y = ($) => {
      if (l.value ?? (l.value = new rE($)), l.value.isDisabled())
        return;
      d.value = l.value.getValue();
      const k = {
        x: v.value - 200,
        y: m.value + h.value
      };
      o.value = $, s.value.setPosition(k), c.value = !0;
    };
    function S($) {
      var k;
      (k = l.value) == null || k.exec($), c.value = !1;
    }
    return ($, k) => (M(), we(C(gr), {
      ref_key: "dragRef",
      ref: s,
      visible: c.value,
      "onUpdate:visible": k[0] || (k[0] = (x) => c.value = x)
    }, {
      reference: X(() => [
        U(C(ct), {
          ref_key: "menuRef",
          ref: r,
          text: "局部变音",
          icon: "conversion",
          onClick: y
        }, null, 512)
      ]),
      default: X(() => [
        U(nE, {
          text: d.value,
          onSubmit: S
        }, null, 8, ["text"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), iE = { class: "anchor-avatar d-flex flex-column justify-content-center align-items-center" }, sE = { class: "position-relative" }, oE = ["src"], aE = {
  key: 0,
  class: "iconfont icon-play1"
}, lE = {
  key: 1,
  class: "iconfont icon-pause1"
}, uE = { class: "anchor-avatar-name text-white" }, cE = /* @__PURE__ */ ce({
  __name: "try-play-circle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(n, { emit: s }) {
    const r = L(), o = L(), l = L(0), c = L(0), d = ls(), { globalEditConfig: v } = ut(), { audioPlayer: m } = d, h = m.playState, { position: y } = ha(r, {
      initialValue: { x: window.innerWidth - 15, y: window.innerHeight / 2 - 15 },
      onStart: (H, O) => b(O.clientX, O.clientY) ? !1 : void 0
    }), { style: S } = ma(r, y);
    function $(H) {
      (() => {
        if (b(H.clientX, H.clientY))
          return D(H) ? B() : s("update:visible", !1);
      })(), k();
    }
    function k() {
      l.value = 0, c.value = 0;
    }
    function x(H) {
      l.value = H.clientX, c.value = H.clientY;
    }
    function b(H, O) {
      return H > l.value - 10 && H < l.value + 10 && O > c.value - 10 && O < c.value + 10;
    }
    function D(H) {
      var W;
      const O = H.target;
      return ((W = o.value) == null ? void 0 : W.contains(O)) || !1;
    }
    async function B() {
      if (h.value === "playing")
        m.pause();
      else
        try {
          const H = _a(), O = await v.tryPlay.play(H);
          m.load(O.src), m.play();
        } catch {
          m.pause();
        }
    }
    return (H, O) => pn((M(), K("div", {
      ref_key: "boxRef",
      ref: r,
      class: "try-play-circel user-select-none rounded-circle overflow-hidden",
      style: ts([C(S), { position: "fixed" }]),
      onMousedown: x,
      onMouseup: $
    }, [
      A("div", iE, [
        A("div", sE, [
          A("img", {
            src: C(d).speaker.avatar || C(Kr)(),
            class: "rounded-circle"
          }, null, 8, oE),
          A("button", {
            ref_key: "btnPlayRef",
            ref: o,
            class: "btn w-100 h-100 position-absolute top-50 start-50 translate-middle bg-black bg-opacity-50 text-white rounded-circle"
          }, [
            C(h) === "paused" ? (M(), K("span", aE)) : (M(), K("span", lE))
          ], 512)
        ]),
        A("div", uE, me(C(d).speaker.displayName), 1)
      ])
    ], 36)), [
      [hn, H.visible]
    ]);
  }
});
const fE = /* @__PURE__ */ vt(cE, [["__scopeId", "data-v-0f55dd94"]]), dE = {
  key: 0,
  class: "position-absolute top-0 start-100 translate-middle text-bg-danger text-nowrap rounded px-1",
  style: { "font-size": "0.5rem" }
}, pE = ["src"], hE = { class: "anchor-avatar-name text-white" }, vE = /* @__PURE__ */ ce({
  __name: "anchor-avatar",
  props: {
    activate: { type: Boolean },
    data: {}
  },
  emits: ["click"],
  setup(n) {
    return (s, r) => {
      var o, l, c;
      return M(), K("div", {
        class: "anchor-avatar d-flex flex-column align-items-center text-center justify-content-center position-relative",
        onClick: r[0] || (r[0] = (d) => {
          var v;
          return s.$emit("click", (v = s.data) == null ? void 0 : v.value);
        })
      }, [
        (o = s.data) != null && o.isFree ? Qt("", !0) : (M(), K("span", dE, "付费")),
        A("img", {
          src: ((l = s.data) == null ? void 0 : l.src) ?? C(Kr)(),
          class: $t(["rounded-circle", { "border border-2 border-warning": s.activate }]),
          style: { height: "40px" }
        }, null, 10, pE),
        A("div", hE, me((c = s.data) == null ? void 0 : c.label), 1)
      ]);
    };
  }
});
const Ff = /* @__PURE__ */ vt(vE, [["__scopeId", "data-v-845325c9"]]), mE = {
  style: { height: "170px" },
  class: "w-100 d-flex flex-row flex-wrap justify-content-start overflow-x-hidden overflow-y-auto scrollbar-none"
}, gE = /* @__PURE__ */ ce({
  __name: "anchor-list",
  props: {
    filter: {}
  },
  setup(n) {
    const s = n, { globalEditConfig: r } = ut(), { fetchData: o } = r.tryPlay, l = ls(), c = L([]), d = Ve([]);
    Ye(
      () => s.filter,
      async (m) => {
        const h = await o(St(m));
        d.value = h, c.value = h.map((y) => ({ label: y.displayName, value: y.name }));
      }
    );
    function v(m) {
      const h = d.value.find((y) => y.name === m);
      h && l.setSpeaker(h);
    }
    return Ct(async () => {
      const m = await o(St(s.filter));
      d.value = m, c.value = m.map((h) => ({ label: h.displayName, value: h.name })), c.value.length > 0 && v(c.value[0].value);
    }), (m, h) => (M(), K("div", mE, [
      (M(!0), K(Re, null, De(c.value, (y, S) => (M(), K("div", {
        class: "m-3",
        key: S
      }, [
        U(Ff, {
          data: y,
          activate: y.value === C(l).speaker.name,
          onClick: ($) => v(y.value)
        }, null, 8, ["data", "activate", "onClick"])
      ]))), 128))
    ]));
  }
}), zo = /* @__PURE__ */ ce({
  __name: "tag-item",
  props: {
    activate: { type: Boolean },
    value: {}
  },
  emits: ["click"],
  setup(n) {
    return (s, r) => (M(), K("span", {
      class: $t(["tag-item d-inline-block text-white text-center text-nowrap text-truncate", { "border border-white rounded-pill": s.activate }]),
      onClick: r[0] || (r[0] = (o) => s.$emit("click", s.value)),
      style: { height: "20px", "min-width": "60px", "max-width": "160px", "font-size": "0.5rem", cursor: "pointer" }
    }, [
      en(s.$slots, "default")
    ], 2));
  }
}), _E = { class: "tag-list w-100" }, yE = {
  class: "w-100 d-flex flex-row border-bottom border-secondary align-items-center",
  style: { height: "40px" }
}, bE = {
  class: "w-100 d-flex flex-row border-bottom border-secondary align-items-center",
  style: { height: "40px" }
}, wE = {
  style: { height: "100px" },
  class: "w-100 pt-2 d-flex flex-row flex-wrap align-content-start row-gap-2 overflow-y-auto overflow-x-hidden scrollbar-none"
}, xE = /* @__PURE__ */ ce({
  __name: "tag-list",
  props: {
    filter: {}
  },
  emits: ["update:filter"],
  setup(n, { emit: s }) {
    const r = n, { globalEditConfig: o } = ut(), { topFlag: l, gender: c, featchTag: d } = o.tryPlay, v = L([]);
    Ct(async () => {
      v.value = await d();
    });
    function m(S) {
      s("update:filter", { ...St(r.filter), topFlag: S });
    }
    function h(S) {
      s("update:filter", { ...St(r.filter), gender: S });
    }
    function y(S) {
      s("update:filter", { ...St(r.filter), tag: S });
    }
    return (S, $) => (M(), K("div", _E, [
      A("div", yE, [
        (M(!0), K(Re, null, De(C(l), (k, x) => (M(), we(zo, {
          onClick: m,
          key: x,
          value: k.value,
          activate: S.filter.topFlag === k.value
        }, {
          default: X(() => [
            Qe(me(k.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "activate"]))), 128))
      ]),
      A("div", bE, [
        (M(!0), K(Re, null, De(C(c), (k, x) => (M(), we(zo, {
          onClick: h,
          key: x,
          value: k.value,
          activate: S.filter.gender === k.value
        }, {
          default: X(() => [
            Qe(me(k.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "activate"]))), 128))
      ]),
      A("div", wE, [
        (M(!0), K(Re, null, De(v.value, (k, x) => (M(), we(zo, {
          onClick: y,
          key: x,
          value: k.value,
          activate: S.filter.tag === k.value
        }, {
          default: X(() => [
            Qe(me(k.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "activate"]))), 128))
      ])
    ]));
  }
});
const EE = ["src"], SE = {
  class: "anchor-avatar-name text-white",
  style: { "font-size": "0.5rem" }
}, $E = /* @__PURE__ */ ce({
  __name: "style-avatar",
  props: {
    activate: { type: Boolean },
    data: {}
  },
  emits: ["click"],
  setup(n) {
    return (s, r) => {
      var o, l;
      return M(), K("div", {
        class: "anchor-avatar d-flex flex-column align-items-center text-center justify-content-center position-relative",
        onClick: r[0] || (r[0] = (c) => {
          var d;
          return s.$emit("click", (d = s.data) == null ? void 0 : d.value);
        })
      }, [
        A("img", {
          src: ((o = s.data) == null ? void 0 : o.src) || C(Kr)(),
          class: $t(["rounded-circle", { "border border-2 border-warning": s.activate }]),
          style: { height: "30px" }
        }, null, 10, EE),
        A("div", SE, me((l = s.data) == null ? void 0 : l.label), 1)
      ]);
    };
  }
});
const CE = /* @__PURE__ */ vt($E, [["__scopeId", "data-v-71aedb65"]]);
function RE(n) {
  return `${(0.05 * n * 100).toFixed(0)}%`;
}
function kE(n) {
  return `${((n - 1) * 100).toFixed(0)}%`;
}
const ya = (n) => (ns("data-v-0210af00"), n = n(), rs(), n), AE = {
  class: "slider-panle w-100 px-3 text-white",
  style: { "font-size": "0.5rem" }
}, TE = { class: "mt-2 d-flex text-center justify-content-between align-items-center" }, OE = { class: "me-auto d-flex flex-row align-items-center" }, IE = ["src"], NE = {
  class: "ms-2 d-flex flex-column justify-content-between",
  style: { height: "50px" }
}, LE = { class: "d-flex dlex-row column-gap-2 align-items-end" }, PE = { class: "fs-6" }, DE = { style: { "font-size": "0.5rem" } }, ME = { class: "d-flex flex-row column-gap-2 align-items-center" }, VE = {
  key: 0,
  class: "badge text-bg-primary px-2"
}, UE = { class: "d-flex flex-column align-items-end" }, FE = /* @__PURE__ */ ya(() => /* @__PURE__ */ A("div", { class: "text-info" }, "音频时长，请以生成后的为准", -1)), BE = { class: "mt-1" }, HE = /* @__PURE__ */ ya(() => /* @__PURE__ */ A("span", null, "/", -1)), WE = { class: "role-list mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-2 column-gap-3" }, zE = ["onClick"], GE = { class: "audio-mood mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-1 column-gap-2" }, qE = ["onClick"], KE = /* @__PURE__ */ ya(() => /* @__PURE__ */ A("div", { class: "my-3" }, [
  /* @__PURE__ */ A("span", { class: "border rounded-pill p-1" }, "配音师详情")
], -1)), YE = { class: "slider-box" }, XE = { class: "slider-box" }, JE = { class: "d-flex flex-row gap-3 my-3" }, ZE = ["onClick"], QE = {
  class: "d-flex flex-row flex-wrap row-gap-2 column-gap-3 mb-3",
  style: { "min-height": "100px" }
}, jE = ["onClick"], eS = /* @__PURE__ */ ce({
  __name: "slider-panle",
  setup(n) {
    const { globalEditConfig: s } = ut(), { rootProsody: r, rootExpressAs: o } = zn(), { fetchStar: l, category: c, fetchData: d } = s.tryPlay, v = ls(), m = L(v.speaker.isStar), h = L(10), y = L(0), S = L([0, 2]), $ = L(1), k = L([-10, 10]), x = L(0), b = Be(() => $c(h.value)), D = Be(() => $c(y.value)), B = Ji(E0()), H = Ji(S0()), O = L(""), W = L([]);
    Ct(async () => {
      await ve(c[0].value);
    }), Ye(
      () => v.speaker,
      (G) => {
        G.roles.length > 0 && ee(G.roles[0].value), G.styles.length > 0 && P(G.styles[0].value);
      },
      { immediate: !0 }
    ), Ye(
      x,
      (G) => {
        r.pitch = RE(G);
      },
      { immediate: !0 }
    ), Ye(
      $,
      (G) => {
        r.rate = kE(G);
      },
      { immediate: !0 }
    );
    async function J() {
      m.value = await l(v.speaker.name, !m.value);
    }
    function ee(G) {
      o.role = G;
    }
    function P(G) {
      o.style = G;
    }
    async function ve(G) {
      O.value = G;
      try {
        W.value = await d({ ...fa(), category: G });
      } catch (q) {
        it.emit(rt.ERROR, `${q}`, q);
      }
    }
    function Ae(G) {
      v.setSpeaker(St(G));
    }
    return (G, q) => (M(), K("div", AE, [
      A("div", TE, [
        A("div", OE, [
          A("img", {
            src: C(Kr)(),
            class: "rounded-circle",
            style: { height: "50px" }
          }, null, 8, IE),
          A("div", NE, [
            A("div", LE, [
              A("span", PE, me(C(v).speaker.displayName), 1),
              A("span", DE, me($.value) + "x", 1)
            ]),
            A("div", ME, [
              U(C(sa), {
                onClick: J,
                class: "fs-6",
                style: ts({ color: m.value ? "red" : "white" })
              }, {
                default: X(() => [
                  m.value ? (M(), we(C(Fy), { key: 0 })) : (M(), we(C(By), { key: 1 }))
                ]),
                _: 1
              }, 8, ["style"]),
              C(v).speaker.isSupper24K ? (M(), K("span", VE, " 24K ")) : Qt("", !0)
            ])
          ])
        ]),
        A("div", UE, [
          FE,
          A("div", BE, [
            A("span", null, me(D.value), 1),
            HE,
            A("span", null, me(b.value), 1)
          ]),
          U(C(No), {
            max: h.value,
            modelValue: y.value,
            "onUpdate:modelValue": q[0] || (q[0] = (z) => y.value = z),
            size: "small"
          }, null, 8, ["max", "modelValue"])
        ])
      ]),
      A("div", WE, [
        (M(!0), K(Re, null, De(C(v).speaker.roles, (z, Q) => (M(), K("div", {
          onClick: (fe) => ee(z.value),
          key: Q,
          class: $t(["rounded-pill px-1", { border: z.value === (C(o).role || "") }])
        }, me(z.label), 11, zE))), 128))
      ]),
      A("ul", GE, [
        (M(!0), K(Re, null, De(C(v).speaker.styles, (z, Q) => (M(), K("li", {
          class: "mx-2",
          onClick: (fe) => P(z.value),
          key: Q
        }, [
          U(CE, {
            activate: z.value === (C(o).style || ""),
            data: z
          }, null, 8, ["activate", "data"])
        ], 8, qE))), 128))
      ]),
      KE,
      A("div", YE, [
        A("div", null, [
          A("span", null, "语速：" + me($.value) + "x", 1)
        ]),
        U(C(No), {
          modelValue: $.value,
          "onUpdate:modelValue": q[1] || (q[1] = (z) => $.value = z),
          min: S.value[0],
          max: S.value[1],
          step: 0.05,
          marks: B
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      A("div", XE, [
        A("div", null, [
          A("span", null, "语调：" + me(x.value), 1)
        ]),
        U(C(No), {
          modelValue: x.value,
          "onUpdate:modelValue": q[2] || (q[2] = (z) => x.value = z),
          min: k.value[0],
          max: k.value[1],
          step: 0.2,
          marks: H
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      A("div", null, [
        A("ul", JE, [
          (M(!0), K(Re, null, De(C(c), (z, Q) => (M(), K("li", {
            onClick: (fe) => ve(z.value),
            key: Q,
            class: $t(["rounded-pill px-1", { border: z.value === O.value }])
          }, me(z.label), 11, ZE))), 128))
        ]),
        A("ul", QE, [
          (M(!0), K(Re, null, De(W.value, (z, Q) => (M(), K("li", {
            onClick: (fe) => Ae(z),
            key: Q
          }, [
            U(Ff, {
              activate: z.name === C(v).speaker.name,
              data: { ...z, label: z.displayName, value: z.name }
            }, null, 8, ["activate", "data"])
          ], 8, jE))), 128))
        ])
      ])
    ]));
  }
});
const tS = /* @__PURE__ */ vt(eS, [["__scopeId", "data-v-0210af00"]]), nS = (n) => (ns("data-v-b9c1f88f"), n = n(), rs(), n), rS = { class: "box ms-2" }, iS = { class: "try-play-header text-center d-flex flex-row justify-content-between" }, sS = { class: "try-play-body d-flex flex-row" }, oS = { class: "try-play-left w-50 border-right border-secondary" }, aS = { class: "pe-1" }, lS = /* @__PURE__ */ nS(() => /* @__PURE__ */ A("div", { class: "py-1 border-top border-secondary" }, null, -1)), uS = { class: "try-play-right w-50 border-start rounded border-top border-secondary overflow-x-hidden overflow-y-auto scrollbar-none" }, cS = /* @__PURE__ */ ce({
  __name: "try-play-panle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(n, { emit: s }) {
    const r = n, o = L(), l = L(""), c = L(), d = L(), v = L(fa());
    Ct(() => {
      window.addEventListener("keydown", m);
    }), ra(() => {
      window.addEventListener("keydown", m);
    }), Ye(
      () => r.visible,
      (x) => {
        x && $();
      }
    );
    function m(x) {
      x.code === "Escape" && r.visible && S();
    }
    const { position: h } = ha(d, {
      initialValue: { x: 40, y: 40 }
    }), { style: y } = ma(c, h);
    Ct(() => {
      h.value.x = (window.innerWidth - 890) / 2, h.value.y = (window.innerHeight - 390) / 2;
    });
    function S() {
      s("update:visible", !1);
    }
    function $() {
      hr(() => {
        var x, b;
        (b = (x = o.value) == null ? void 0 : x.input) == null || b.focus();
      });
    }
    function k() {
      v.value = { ...v.value, word: l.value };
    }
    return (x, b) => pn((M(), K("div", {
      ref_key: "boxRef",
      ref: c,
      style: ts([C(y), { position: "fixed" }]),
      class: "try-play user-select-none card z-3 shadow"
    }, [
      A("div", rS, [
        A("div", iS, [
          A("div", {
            ref_key: "handleRef",
            ref: d,
            class: "col-11 try-play-move"
          }, null, 512),
          A("div", {
            onClick: S,
            class: "col-1 try-play-menu-close"
          }, [
            U(C(sa), { color: "white" }, {
              default: X(() => [
                U(C(Hy))
              ]),
              _: 1
            })
          ])
        ]),
        A("div", sS, [
          A("div", oS, [
            A("div", aS, [
              U(C(is), {
                onSubmit: st(k, ["prevent"])
              }, {
                default: X(() => [
                  U(C(ss), {
                    "input-style": { color: "white" },
                    ref_key: "searchInputRef",
                    ref: o,
                    modelValue: l.value,
                    "onUpdate:modelValue": b[0] || (b[0] = (D) => l.value = D),
                    placeholder: "输入名称搜索"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["onSubmit"])
            ]),
            U(xE, {
              filter: v.value,
              "onUpdate:filter": b[1] || (b[1] = (D) => v.value = D)
            }, null, 8, ["filter"]),
            lS,
            U(gE, { filter: v.value }, null, 8, ["filter"])
          ]),
          A("div", uS, [
            U(tS)
          ])
        ])
      ])
    ], 4)), [
      [hn, x.visible]
    ]);
  }
});
const fS = /* @__PURE__ */ vt(cS, [["__scopeId", "data-v-b9c1f88f"]]), Bf = /* @__PURE__ */ ce({
  __name: "try-play",
  setup(n) {
    const s = L(!0);
    function r(o) {
      o || (s.value = !0);
    }
    return (o, l) => (M(), we(Bc, { to: "body" }, [
      U(fE, {
        visible: s.value,
        "onUpdate:visible": l[0] || (l[0] = (c) => s.value = c)
      }, null, 8, ["visible"]),
      U(fS, {
        visible: !s.value,
        "onUpdate:visible": r
      }, null, 8, ["visible"])
    ]));
  }
});
const dS = {
  install: (n) => {
    n.component("PlayMenu", $f), n.component("PinyinMenu", Cf), n.component("ContinuousMenu", Rf), n.component("ReadMenu", kf), n.component("DigitalMenu", Af), n.component("AliasMenu", Tf), n.component("EnglishMenu", Of), n.component("ChangespeedMenu", If), n.component("RhythmMenu", Nf), n.component("SpecialMenu", Lf), n.component("MuteMenu", Pf), n.component("BgmMenu", Df), n.component("SensitiveMenu", Mf), n.component("ManagementMenu", Vf), n.component("ConversionMenu", Uf), n.component("TryPlay", Bf);
  }
};
var ea = { exports: {} }, ta = { exports: {} };
(function(n, s) {
  Object.defineProperty(s, "__esModule", { value: !0 }), s.ParsingError = void 0;
  class r extends Error {
    constructor(W, J) {
      super(W), this.cause = J;
    }
  }
  s.ParsingError = r;
  let o;
  function l() {
    return m(!1) || $() || S() || y();
  }
  function c() {
    return b(/\s*/), m(!0) || S() || h() || v(!1);
  }
  function d() {
    const O = v(!0), W = [];
    let J, ee = c();
    for (; ee; ) {
      if (ee.node.type === "Element") {
        if (J)
          throw new Error("Found multiple root nodes");
        J = ee.node;
      }
      ee.excluded || W.push(ee.node), ee = c();
    }
    if (!J)
      throw new r("Failed to parse XML", "Root Element not found");
    if (o.xml.length !== 0)
      throw new r("Failed to parse XML", "Not Well-Formed XML");
    return {
      declaration: O ? O.node : null,
      root: J,
      children: W
    };
  }
  function v(O) {
    const W = b(O ? /^<\?(xml)\s*/ : /^<\?([\w-:.]+)\s*/);
    if (!W)
      return;
    const J = {
      name: W[1],
      type: "ProcessingInstruction",
      attributes: {}
    };
    for (; !(D() || B("?>")); ) {
      const ee = k();
      if (ee)
        J.attributes[ee.name] = ee.value;
      else
        return;
    }
    return b(/\?>/), {
      excluded: O ? !1 : o.options.filter(J) === !1,
      node: J
    };
  }
  function m(O) {
    const W = b(/^<([^?!</>\s]+)\s*/);
    if (!W)
      return;
    const J = {
      type: "Element",
      name: W[1],
      attributes: {},
      children: []
    }, ee = O ? !1 : o.options.filter(J) === !1;
    for (; !(D() || B(">") || B("?>") || B("/>")); ) {
      const ve = k();
      if (ve)
        J.attributes[ve.name] = ve.value;
      else
        return;
    }
    if (b(/^\s*\/>/))
      return J.children = null, {
        excluded: ee,
        node: J
      };
    b(/\??>/);
    let P = l();
    for (; P; )
      P.excluded || J.children.push(P.node), P = l();
    if (o.options.strictMode) {
      const ve = `</${J.name}>`;
      if (o.xml.startsWith(ve))
        o.xml = o.xml.slice(ve.length);
      else
        throw new r("Failed to parse XML", `Closing tag not matching "${ve}"`);
    } else
      b(/^<\/\s*[\w-:.\u00C0-\u00FF]+>/);
    return {
      excluded: ee,
      node: J
    };
  }
  function h() {
    const O = b(/^<!DOCTYPE\s+\S+\s+SYSTEM[^>]*>/) || b(/^<!DOCTYPE\s+\S+\s+PUBLIC[^>]*>/) || b(/^<!DOCTYPE\s+\S+\s*\[[^\]]*]>/) || b(/^<!DOCTYPE\s+\S+\s*>/);
    if (O) {
      const W = {
        type: "DocumentType",
        content: O[0]
      };
      return {
        excluded: o.options.filter(W) === !1,
        node: W
      };
    }
  }
  function y() {
    if (o.xml.startsWith("<![CDATA[")) {
      const O = o.xml.indexOf("]]>");
      if (O > -1) {
        const W = O + 3, J = {
          type: "CDATA",
          content: o.xml.substring(0, W)
        };
        return o.xml = o.xml.slice(W), {
          excluded: o.options.filter(J) === !1,
          node: J
        };
      }
    }
  }
  function S() {
    const O = b(/^<!--[\s\S]*?-->/);
    if (O) {
      const W = {
        type: "Comment",
        content: O[0]
      };
      return {
        excluded: o.options.filter(W) === !1,
        node: W
      };
    }
  }
  function $() {
    const O = b(/^([^<]+)/);
    if (O) {
      const W = {
        type: "Text",
        content: O[1]
      };
      return {
        excluded: o.options.filter(W) === !1,
        node: W
      };
    }
  }
  function k() {
    const O = b(/([^=]+)\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)\s*/);
    if (O)
      return {
        name: O[1].trim(),
        value: x(O[2].trim())
      };
  }
  function x(O) {
    return O.replace(/^['"]|['"]$/g, "");
  }
  function b(O) {
    const W = o.xml.match(O);
    if (W)
      return o.xml = o.xml.slice(W[0].length), W;
  }
  function D() {
    return o.xml.length === 0;
  }
  function B(O) {
    return o.xml.indexOf(O) === 0;
  }
  function H(O, W = {}) {
    O = O.trim();
    const J = W.filter || (() => !0);
    return o = {
      xml: O,
      options: Object.assign(Object.assign({}, W), { filter: J, strictMode: W.strictMode === !0 })
    }, d();
  }
  n.exports = H, s.default = H;
})(ta, ta.exports);
var pS = ta.exports;
(function(n, s) {
  var r = Un && Un.__importDefault || function(x) {
    return x && x.__esModule ? x : { default: x };
  };
  Object.defineProperty(s, "__esModule", { value: !0 });
  const o = r(pS);
  function l(x) {
    if (!x.options.indentation && !x.options.lineSeparator)
      return;
    x.content += x.options.lineSeparator;
    let b;
    for (b = 0; b < x.level; b++)
      x.content += x.options.indentation;
  }
  function c(x) {
    x.content = x.content.replace(/ +$/, "");
    let b;
    for (b = 0; b < x.level; b++)
      x.content += x.options.indentation;
  }
  function d(x, b) {
    x.content += b;
  }
  function v(x, b, D) {
    if (typeof x.content == "string")
      m(x.content, b, D);
    else if (x.type === "Element")
      y(x, b, D);
    else if (x.type === "ProcessingInstruction")
      $(x, b);
    else
      throw new Error("Unknown node type: " + x.type);
  }
  function m(x, b, D) {
    if (!D) {
      const B = x.trim();
      (b.options.lineSeparator || B.length === 0) && (x = B);
    }
    x.length > 0 && (!D && b.content.length > 0 && l(b), d(b, x));
  }
  function h(x, b) {
    const D = "/" + x.join("/"), B = x[x.length - 1];
    return b.includes(B) || b.includes(D);
  }
  function y(x, b, D) {
    if (b.path.push(x.name), !D && b.content.length > 0 && l(b), d(b, "<" + x.name), S(b, x.attributes), x.children === null || b.options.forceSelfClosingEmptyTag && x.children.length === 0) {
      const B = b.options.whiteSpaceAtEndOfSelfclosingTag ? " />" : "/>";
      d(b, B);
    } else if (x.children.length === 0)
      d(b, "></" + x.name + ">");
    else {
      const B = x.children;
      d(b, ">"), b.level++;
      let H = x.attributes["xml:space"] === "preserve", O = !1;
      if (!H && b.options.ignoredPaths && (O = h(b.path, b.options.ignoredPaths), H = O), !H && b.options.collapseContent) {
        let W = !1, J = !1, ee = !1;
        B.forEach(function(P, ve) {
          P.type === "Text" ? (P.content.includes(`
`) ? (J = !0, P.content = P.content.trim()) : (ve === 0 || ve === B.length - 1) && P.content.trim().length === 0 && (P.content = ""), P.content.trim().length > 0 && (W = !0)) : P.type === "CDATA" ? W = !0 : ee = !0;
        }), W && (!ee || !J) && (H = !0);
      }
      B.forEach(function(W) {
        v(W, b, D || H);
      }), b.level--, !D && !H && l(b), O && c(b), d(b, "</" + x.name + ">");
    }
    b.path.pop();
  }
  function S(x, b) {
    Object.keys(b).forEach(function(D) {
      const B = b[D].replace(/"/g, "&quot;");
      d(x, " " + D + '="' + B + '"');
    });
  }
  function $(x, b) {
    b.content.length > 0 && l(b), d(b, "<?" + x.name), S(b, x.attributes), d(b, "?>");
  }
  function k(x, b = {}) {
    b.indentation = "indentation" in b ? b.indentation : "    ", b.collapseContent = b.collapseContent === !0, b.lineSeparator = "lineSeparator" in b ? b.lineSeparator : `\r
`, b.whiteSpaceAtEndOfSelfclosingTag = b.whiteSpaceAtEndOfSelfclosingTag === !0, b.throwOnFailure = b.throwOnFailure !== !1;
    try {
      const D = (0, o.default)(x, { filter: b.filter, strictMode: b.strictMode }), B = { content: "", level: 0, options: b, path: [] };
      return D.declaration && $(D.declaration, B), D.children.forEach(function(H) {
        v(H, B, !1);
      }), b.lineSeparator ? B.content.replace(/\r\n/g, `
`).replace(/\n/g, b.lineSeparator) : B.content;
    } catch (D) {
      if (b.throwOnFailure)
        throw D;
      return x;
    }
  }
  k.minify = (x, b = {}) => k(x, Object.assign(Object.assign({}, b), { indentation: "", lineSeparator: "" })), n.exports = k, s.default = k;
})(ea, ea.exports);
var hS = ea.exports;
const vS = /* @__PURE__ */ uf(hS), _r = (n) => (ns("data-v-fb2870b0"), n = n(), rs(), n), mS = { class: "editor-title d-flex flex-row align-item-center justify-content-between" }, gS = { class: "title-wrapper d-flex flex-column justify-content-center ps-3" }, _S = /* @__PURE__ */ _r(() => /* @__PURE__ */ A("div", { class: "title-author pb-1" }, "SSML编辑器", -1)), yS = { class: "author d-flex flex-row align-items-center justify-content-start" }, bS = /* @__PURE__ */ _r(() => /* @__PURE__ */ A("div", null, "未保存", -1)), wS = /* @__PURE__ */ _r(() => /* @__PURE__ */ A("span", { class: "iconfont icon-play font-size-12 p-1" }, null, -1)), xS = /* @__PURE__ */ _r(() => /* @__PURE__ */ A("div", { class: "d-inline-block" }, null, -1)), ES = { class: "operation-wrapper d-flex flex-row justify-content-center align-items-center" }, SS = /* @__PURE__ */ _r(() => /* @__PURE__ */ A("div", { class: "menu-divider" }, null, -1)), $S = /* @__PURE__ */ _r(() => /* @__PURE__ */ A("div", { class: "px-1" }, null, -1)), CS = {
  class: "ssml-code border border-secondary-subtle rounded-2 px-2",
  style: { "white-space": "pre-wrap", "max-height": "50vh" }
}, RS = { class: "dialog-footer" }, kS = /* @__PURE__ */ ce({
  __name: "editor-title",
  setup(n) {
    const s = L(!1), r = L(""), { rootBackgroundaudio: o } = zn(), l = Be(() => vS(r.value, {
      indentation: "    ",
      filter: (h) => h.type !== "Comment",
      collapseContent: !0,
      lineSeparator: `
`
    })), c = () => {
      r.value = _a(), s.value = !0;
    }, d = () => {
      o.src && vr.play(o.src);
    }, v = () => {
      vr.stop(o.src), o.src = "", o.remark = "";
    };
    async function m(h) {
      await navigator.clipboard.writeText(h ? l.value : r.value), s.value = !1;
    }
    return (h, y) => (M(), K(Re, null, [
      A("div", mS, [
        A("div", gS, [
          _S,
          A("div", yS, [
            bS,
            C(o).src ? (M(), we(C(Hc), {
              key: 0,
              class: "bgm-txt ms-2",
              closable: "",
              size: "small",
              onClick: d,
              onClose: v
            }, {
              default: X(() => [
                wS,
                xS,
                A("span", null, me(C(o).remark), 1)
              ]),
              _: 1
            })) : Qt("", !0)
          ])
        ]),
        A("div", ES, [
          U(C(Et), {
            type: "primary",
            icon: C(Wy),
            disabled: ""
          }, {
            default: X(() => [
              Qe("分享")
            ]),
            _: 1
          }, 8, ["icon"]),
          SS,
          U(C(Et), {
            type: "primary",
            onClick: c
          }, {
            default: X(() => [
              Qe("查看SSML")
            ]),
            _: 1
          }),
          U(C(Et), { disabled: "" }, {
            default: X(() => [
              Qe("下载音频")
            ]),
            _: 1
          }),
          U(C(Et), { disabled: "" }, {
            default: X(() => [
              Qe("下载视频")
            ]),
            _: 1
          }),
          U(C(Et), { disabled: "" }, {
            default: X(() => [
              Qe("下载字幕")
            ]),
            _: 1
          }),
          U(C(Et), { disabled: "" }, {
            default: X(() => [
              Qe("声音转换")
            ]),
            _: 1
          }),
          $S
        ])
      ]),
      U(C(Dy), {
        modelValue: s.value,
        "onUpdate:modelValue": y[4] || (y[4] = (S) => s.value = S),
        title: "查看SSML",
        width: "80%"
      }, {
        header: X(() => [
          U(C(Et), {
            type: "info",
            onClick: y[0] || (y[0] = (S) => m(!0))
          }, {
            default: X(() => [
              Qe("复制+关闭")
            ]),
            _: 1
          }),
          U(C(Et), {
            type: "primary",
            onClick: y[1] || (y[1] = (S) => m(!1))
          }, {
            default: X(() => [
              Qe("压缩+复制+关闭(推荐)")
            ]),
            _: 1
          })
        ]),
        footer: X(() => [
          A("span", RS, [
            U(C(Et), {
              type: "info",
              onClick: y[2] || (y[2] = (S) => m(!0))
            }, {
              default: X(() => [
                Qe("复制+关闭")
              ]),
              _: 1
            }),
            U(C(Et), {
              type: "primary",
              onClick: y[3] || (y[3] = (S) => m(!1))
            }, {
              default: X(() => [
                Qe("压缩+复制+关闭(推荐)")
              ]),
              _: 1
            })
          ])
        ]),
        default: X(() => [
          A("pre", CS, me(l.value), 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
});
const AS = /* @__PURE__ */ vt(kS, [["__scopeId", "data-v-fb2870b0"]]), TS = /* @__PURE__ */ ce({
  __name: "editor-core",
  emits: ["created", "change"],
  setup(n, { emit: s }) {
    const { editor: r, setEditor: o, globalEditConfig: l } = ut(), c = L(null);
    Ct(() => {
      d();
    }), ra(() => {
      r == null || r.destroy();
    });
    function d() {
      if (!c.value)
        return;
      const v = Ny({
        selector: c.value,
        mode: "simple",
        config: {
          ...St(l.editorConfig),
          onCreated(m) {
            s("created", m), it.emit(rt.EDITOR_CREATED, m);
          },
          onChange(m) {
            s("change", m);
          }
        }
      });
      o(v), v.on(Ie.ERROR, l.handleError);
    }
    return (v, m) => (M(), K("div", {
      ref_key: "boxRef",
      ref: c,
      class: "edit-core",
      style: { height: "70vh", "overflow-y": "hidden" }
    }, null, 512));
  }
}), OS = { class: "bar-view border-bottom border-1" }, IS = /* @__PURE__ */ ce({
  __name: "bar-view",
  setup(n) {
    return (s, r) => (M(), K(Re, null, [
      A("div", OS, [
        U(C(_f), null, {
          default: X(() => [
            U(C(fr), { divider: "green" }, {
              default: X(() => [
                U(C($f))
              ]),
              _: 1
            }),
            U(C(fr), { divider: "cyan" }, {
              default: X(() => [
                U(C(Cf)),
                U(C(kf)),
                U(C(Af)),
                U(C(Rf)),
                U(C(Tf)),
                U(C(Of))
              ]),
              _: 1
            }),
            U(C(fr), { divider: "orange" }, {
              default: X(() => [
                U(C(If)),
                U(C(Vf)),
                U(C(Uf))
              ]),
              _: 1
            }),
            U(C(fr), { divider: "purple" }, {
              default: X(() => [
                U(C(Nf)),
                U(C(Pf))
              ]),
              _: 1
            }),
            U(C(fr), { divider: "yellow" }, {
              default: X(() => [
                U(C(Lf)),
                U(C(Df))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      U(C(Bf))
    ], 64));
  }
}), NS = { class: "editor-box" }, LS = { class: "editor-core-container shadow pt-1" }, PS = /* @__PURE__ */ ce({
  __name: "editor-view",
  emits: ["created", "change"],
  setup(n, { emit: s }) {
    const r = (d) => {
      s("created", d);
    }, o = (d) => {
      s("change", d);
    };
    function l(d) {
      it.emit(rt.VIEW_CLICK, d);
    }
    function c(d) {
      it.emit(rt.VIEW_KEYDOWN, d);
    }
    return (d, v) => (M(), K("div", {
      class: "editor-view",
      onClick: l,
      onKeydown: c
    }, [
      en(d.$slots, "default", {}, () => [
        U(AS)
      ], !0),
      A("div", NS, [
        U(IS),
        A("div", LS, [
          U(TS, {
            onChange: o,
            onCreated: r
          })
        ])
      ])
    ], 32));
  }
});
const DS = /* @__PURE__ */ vt(PS, [["__scopeId", "data-v-b5e6df8c"]]), MS = {
  install(n) {
    n.component("EditorView", DS);
  }
}, jS = {
  install(n, s) {
    n.use(h0()), n.use(() => {
      const { setGlobalEditConfig: r } = ut(), o = of(s);
      r(o), it.on(rt.ERROR, o.handleError);
    }), n.use(t1), n.use(mw), n.use(dS), n.use(MS);
  }
};
export {
  M0 as AudioPlayer,
  Cc as CancellationTokenSource,
  zS as DOMComment,
  GS as DOMElement,
  WS as DOMNode,
  KS as DOMRange,
  YS as DOMSelection,
  XS as DOMStaticRange,
  qS as DOMText,
  rt as EMITTER_EVENT,
  DS as EditorView,
  V0 as FileSelector,
  U0 as Timer,
  Ie as WANGEDITOR_EVENT,
  vr as audioPlayer,
  of as createGlobalEditorConfig,
  jS as default,
  fa as defaultFilterSpeaker,
  QS as defaultLabelValue,
  n1 as defaultSpeaker,
  Kr as demoAvatar,
  $c as formatTime,
  JS as genRandomStr,
  S0 as pitch,
  _a as serializeToSSML,
  E0 as speed
};

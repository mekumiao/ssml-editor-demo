var Sy = Object.defineProperty;
var $y = (n, s, r) => s in n ? Sy(n, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[s] = r;
var Le = (n, s, r) => ($y(n, typeof s != "symbol" ? s + "" : s, r), r);
import { effectScope as Nc, ref as D, markRaw as Un, toRaw as St, isRef as Hn, isReactive as es, toRef as Wi, hasInjectionContext as Cy, inject as Mc, getCurrentInstance as ta, watch as Ke, unref as R, reactive as Ji, nextTick as hr, computed as Ve, getCurrentScope as Vc, onScopeDispose as Fc, toRefs as Go, shallowRef as De, shallowReactive as Br, defineComponent as ce, openBlock as z, createElementBlock as J, normalizeClass as $t, withModifiers as it, createElementVNode as O, toDisplayString as Ce, createBlock as Ue, withCtx as j, createVNode as P, renderSlot as en, customRef as Ry, onMounted as Ct, watchEffect as ky, Fragment as We, renderList as lt, createTextVNode as Ze, onUnmounted as na, Teleport as Uc, withDirectives as pn, normalizeStyle as ts, vShow as hn, pushScopeId as ns, popScopeId as rs, createCommentVNode as Qt, provide as Ay } from "vue";
import { DomEditor as ie, SlateNode as ra, SlateEditor as Fe, SlateTransforms as Pe, SlateRange as Rt, Boot as xt, SlateText as Gr, SlateElement as Ty, createEditor as Oy } from "@wangeditor/editor";
import { ElForm as is, ElInput as ss, ElPopover as vn, ElMenu as Iy, ElMenuItem as Ly, ElSelect as Zu, ElOption as Qu, ElIcon as ia, ElButton as Et, ElTag as Bc, ElSlider as Lo, ElDialog as Py } from "element-plus";
import { Search as Dy, Loading as Ny, More as My, StarFilled as Vy, Star as Fy, Minus as Uy, Share as By } from "@element-plus/icons-vue";
var Hc = !1;
function Hi(n, s, r) {
  return Array.isArray(n) ? (n.length = Math.max(n.length, s), n.splice(s, 1, r), r) : (n[s] = r, r);
}
function Po(n, s) {
  if (Array.isArray(n)) {
    n.splice(s, 1);
    return;
  }
  delete n[s];
}
function Hy() {
  return Wc().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Wc() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Wy = typeof Proxy == "function", zy = "devtools-plugin:setup", Gy = "plugin:settings:set";
let lr, qo;
function qy() {
  var n;
  return lr !== void 0 || (typeof window < "u" && window.performance ? (lr = !0, qo = window.performance) : typeof global < "u" && (!((n = global.perf_hooks) === null || n === void 0) && n.performance) ? (lr = !0, qo = global.perf_hooks.performance) : lr = !1), lr;
}
function Ky() {
  return qy() ? qo.now() : Date.now();
}
class Yy {
  constructor(s, r) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = s, this.hook = r;
    const o = {};
    if (s.settings)
      for (const d in s.settings) {
        const h = s.settings[d];
        o[d] = h.defaultValue;
      }
    const l = `__vue-devtools-plugin-settings__${s.id}`;
    let c = Object.assign({}, o);
    try {
      const d = localStorage.getItem(l), h = JSON.parse(d);
      Object.assign(c, h);
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
        return Ky();
      }
    }, r && r.on(Gy, (d, h) => {
      d === this.plugin.id && this.fallbacks.setSettings(h);
    }), this.proxiedOn = new Proxy({}, {
      get: (d, h) => this.target ? this.target.on[h] : (...m) => {
        this.onQueue.push({
          method: h,
          args: m
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (d, h) => this.target ? this.target[h] : h === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(h) ? (...m) => (this.targetQueue.push({
        method: h,
        args: m,
        resolve: () => {
        }
      }), this.fallbacks[h](...m)) : (...m) => new Promise((g) => {
        this.targetQueue.push({
          method: h,
          args: m,
          resolve: g
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
function zc(n, s) {
  const r = n, o = Wc(), l = Hy(), c = Wy && r.enableEarlyProxy;
  if (l && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !c))
    l.emit(zy, n, s);
  else {
    const d = c ? new Yy(r, l) : null;
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
const qr = (n) => Hr = n, Gc = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
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
const os = typeof window < "u", Wr = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && os, ju = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function Xy(n, { autoBom: s = !1 } = {}) {
  return s && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(n.type) ? new Blob([String.fromCharCode(65279), n], { type: n.type }) : n;
}
function sa(n, s, r) {
  const o = new XMLHttpRequest();
  o.open("GET", n), o.responseType = "blob", o.onload = function() {
    Yc(o.response, s, r);
  }, o.onerror = function() {
    console.error("could not download file");
  }, o.send();
}
function qc(n) {
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
const Gi = typeof navigator == "object" ? navigator : { userAgent: "" }, Kc = /* @__PURE__ */ (() => /Macintosh/.test(Gi.userAgent) && /AppleWebKit/.test(Gi.userAgent) && !/Safari/.test(Gi.userAgent))(), Yc = os ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Kc ? Jy : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in Gi ? Zy : (
      // Fallback to using FileReader and a popup
      Qy
    )
  )
) : () => {
};
function Jy(n, s = "download", r) {
  const o = document.createElement("a");
  o.download = s, o.rel = "noopener", typeof n == "string" ? (o.href = n, o.origin !== location.origin ? qc(o.href) ? sa(n, s, r) : (o.target = "_blank", zi(o)) : zi(o)) : (o.href = URL.createObjectURL(n), setTimeout(function() {
    URL.revokeObjectURL(o.href);
  }, 4e4), setTimeout(function() {
    zi(o);
  }, 0));
}
function Zy(n, s = "download", r) {
  if (typeof n == "string")
    if (qc(n))
      sa(n, s, r);
    else {
      const o = document.createElement("a");
      o.href = n, o.target = "_blank", setTimeout(function() {
        zi(o);
      });
    }
  else
    navigator.msSaveOrOpenBlob(Xy(n, r), s);
}
function Qy(n, s, r, o) {
  if (o = o || open("", "_blank"), o && (o.document.title = o.document.body.innerText = "downloading..."), typeof n == "string")
    return sa(n, s, r);
  const l = n.type === "application/octet-stream", c = /constructor/i.test(String(ju.HTMLElement)) || "safari" in ju, d = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((d || l && c || Kc) && typeof FileReader < "u") {
    const h = new FileReader();
    h.onloadend = function() {
      let m = h.result;
      if (typeof m != "string")
        throw o = null, new Error("Wrong reader.result type");
      m = d ? m : m.replace(/^data:[^;]*;/, "data:attachment/file;"), o ? o.location.href = m : location.assign(m), o = null;
    }, h.readAsDataURL(n);
  } else {
    const h = URL.createObjectURL(n);
    o ? o.location.assign(h) : location.href = h, o = null, setTimeout(function() {
      URL.revokeObjectURL(h);
    }, 4e4);
  }
}
function qe(n, s) {
  const r = "🍍 " + n;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(r, s) : s === "error" ? console.error(r) : s === "warn" ? console.warn(r) : console.log(r);
}
function oa(n) {
  return "_a" in n && "install" in n;
}
function Xc() {
  if (!("clipboard" in navigator))
    return qe("Your browser doesn't support the Clipboard API", "error"), !0;
}
function Jc(n) {
  return n instanceof Error && n.message.toLowerCase().includes("document is not focused") ? (qe('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function jy(n) {
  if (!Xc())
    try {
      await navigator.clipboard.writeText(JSON.stringify(n.state.value)), qe("Global state copied to clipboard.");
    } catch (s) {
      if (Jc(s))
        return;
      qe("Failed to serialize the state. Check the console for more details.", "error"), console.error(s);
    }
}
async function e0(n) {
  if (!Xc())
    try {
      Zc(n, JSON.parse(await navigator.clipboard.readText())), qe("Global state pasted from clipboard.");
    } catch (s) {
      if (Jc(s))
        return;
      qe("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(s);
    }
}
async function t0(n) {
  try {
    Yc(new Blob([JSON.stringify(n.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (s) {
    qe("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(s);
  }
}
let dn;
function n0() {
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
async function r0(n) {
  try {
    const r = await n0()();
    if (!r)
      return;
    const { text: o, file: l } = r;
    Zc(n, JSON.parse(o)), qe(`Global state imported from "${l.name}".`);
  } catch (s) {
    qe("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(s);
  }
}
function Zc(n, s) {
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
const Qc = "🍍 Pinia (root)", Ko = "_root";
function i0(n) {
  return oa(n) ? {
    id: Ko,
    label: Qc
  } : {
    id: n.$id,
    label: n.$id
  };
}
function s0(n) {
  if (oa(n)) {
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
          value: d._getters.reduce((h, m) => (h[m] = d[m], h), {})
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
function o0(n) {
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
function a0(n) {
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
const qi = [], Vn = "pinia:mutations", tt = "pinia", { assign: l0 } = Object, Zi = (n) => "🍍 " + n;
function u0(n, s) {
  zc({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: qi,
    app: n
  }, (r) => {
    typeof r.now != "function" && qe("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), r.addTimelineLayer({
      id: Vn,
      label: "Pinia 🍍",
      color: 15064968
    }), r.addInspector({
      id: tt,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            jy(s);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await e0(s), r.sendInspectorTree(tt), r.sendInspectorState(tt);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            t0(s);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await r0(s), r.sendInspectorTree(tt), r.sendInspectorState(tt);
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
            l ? typeof l.$reset != "function" ? qe(`Cannot reset "${o}" store because it doesn't have a "$reset" method implemented.`, "warn") : (l.$reset(), qe(`Store "${o}" reset.`)) : qe(`Cannot reset "${o}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), r.on.inspectComponent((o, l) => {
      const c = o.componentInstance && o.componentInstance.proxy;
      if (c && c._pStores) {
        const d = o.componentInstance.proxy._pStores;
        Object.values(d).forEach((h) => {
          o.instanceData.state.push({
            type: Zi(h.$id),
            key: "state",
            editable: !0,
            value: h._isOptionsAPI ? {
              _custom: {
                value: St(h.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => h.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(h.$state).reduce((m, g) => (m[g] = h.$state[g], m), {})
            )
          }), h._getters && h._getters.length && o.instanceData.state.push({
            type: Zi(h.$id),
            key: "getters",
            editable: !1,
            value: h._getters.reduce((m, g) => {
              try {
                m[g] = h[g];
              } catch (E) {
                m[g] = E;
              }
              return m;
            }, {})
          });
        });
      }
    }), r.on.getInspectorTree((o) => {
      if (o.app === n && o.inspectorId === tt) {
        let l = [s];
        l = l.concat(Array.from(s._s.values())), o.rootNodes = (o.filter ? l.filter((c) => "$id" in c ? c.$id.toLowerCase().includes(o.filter.toLowerCase()) : Qc.toLowerCase().includes(o.filter.toLowerCase())) : l).map(i0);
      }
    }), r.on.getInspectorState((o) => {
      if (o.app === n && o.inspectorId === tt) {
        const l = o.nodeId === Ko ? s : s._s.get(o.nodeId);
        if (!l)
          return;
        l && (o.state = s0(l));
      }
    }), r.on.editInspectorState((o, l) => {
      if (o.app === n && o.inspectorId === tt) {
        const c = o.nodeId === Ko ? s : s._s.get(o.nodeId);
        if (!c)
          return qe(`store "${o.nodeId}" not found`, "error");
        const { path: d } = o;
        oa(c) ? d.unshift("state") : (d.length !== 1 || !c._customProperties.has(d[0]) || d[0] in c.$state) && d.unshift("$state"), dr = !1, o.set(c, d, o.state.value), dr = !0;
      }
    }), r.on.editComponentState((o) => {
      if (o.type.startsWith("🍍")) {
        const l = o.type.replace(/^🍍\s*/, ""), c = s._s.get(l);
        if (!c)
          return qe(`store "${l}" not found`, "error");
        const { path: d } = o;
        if (d[0] !== "state")
          return qe(`Invalid path for store "${l}":
${d}
Only state can be modified.`);
        d[0] = "$state", dr = !1, o.set(c, d, o.state.value), dr = !0;
      }
    });
  });
}
function c0(n, s) {
  qi.includes(Zi(s.$id)) || qi.push(Zi(s.$id)), zc({
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
    s.$onAction(({ after: d, onError: h, name: m, args: g }) => {
      const E = jc++;
      r.addTimelineEvent({
        layerId: Vn,
        event: {
          time: o(),
          title: "🛫 " + m,
          subtitle: "start",
          data: {
            store: qt(s.$id),
            action: qt(m),
            args: g
          },
          groupId: E
        }
      }), d(($) => {
        Cn = void 0, r.addTimelineEvent({
          layerId: Vn,
          event: {
            time: o(),
            title: "🛬 " + m,
            subtitle: "end",
            data: {
              store: qt(s.$id),
              action: qt(m),
              args: g,
              result: $
            },
            groupId: E
          }
        });
      }), h(($) => {
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
              args: g,
              error: $
            },
            groupId: E
          }
        });
      });
    }, !0), s._customProperties.forEach((d) => {
      Ke(() => R(s[d]), (h, m) => {
        r.notifyComponentUpdate(), r.sendInspectorState(tt), dr && r.addTimelineEvent({
          layerId: Vn,
          event: {
            time: o(),
            title: "Change",
            subtitle: d,
            data: {
              newValue: h,
              oldValue: m
            },
            groupId: Cn
          }
        });
      }, { deep: !0 });
    }), s.$subscribe(({ events: d, type: h }, m) => {
      if (r.notifyComponentUpdate(), r.sendInspectorState(tt), !dr)
        return;
      const g = {
        time: o(),
        title: a0(h),
        data: l0({ store: qt(s.$id) }, o0(d)),
        groupId: Cn
      };
      h === jt.patchFunction ? g.subtitle = "⤵️" : h === jt.patchObject ? g.subtitle = "🧩" : d && !Array.isArray(d) && (g.subtitle = d.type), d && (g.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: d
        }
      }), r.addTimelineEvent({
        layerId: Vn,
        event: g
      });
    }, { detached: !0, flush: "sync" });
    const l = s._hotUpdate;
    s._hotUpdate = Un((d) => {
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
      }), r.notifyComponentUpdate(), r.sendInspectorTree(tt), r.sendInspectorState(tt);
    });
    const { $dispose: c } = s;
    s.$dispose = () => {
      c(), r.notifyComponentUpdate(), r.sendInspectorTree(tt), r.sendInspectorState(tt), r.getSettings().logStoreChanges && qe(`Disposed "${s.$id}" store 🗑`);
    }, r.notifyComponentUpdate(), r.sendInspectorTree(tt), r.sendInspectorState(tt), r.getSettings().logStoreChanges && qe(`"${s.$id}" store installed 🆕`);
  });
}
let jc = 0, Cn;
function ec(n, s, r) {
  const o = s.reduce((l, c) => (l[c] = St(n)[c], l), {});
  for (const l in o)
    n[l] = function() {
      const c = jc, d = r ? new Proxy(n, {
        get(...m) {
          return Cn = c, Reflect.get(...m);
        },
        set(...m) {
          return Cn = c, Reflect.set(...m);
        }
      }) : n;
      Cn = c;
      const h = o[l].apply(d, arguments);
      return Cn = void 0, h;
    };
}
function f0({ app: n, store: s, options: r }) {
  if (s.$id.startsWith("__hot:"))
    return;
  s._isOptionsAPI = !!r.state, ec(s, Object.keys(r.actions), s._isOptionsAPI);
  const o = s._hotUpdate;
  St(s)._hotUpdate = function(l) {
    o.apply(this, arguments), ec(s, Object.keys(l._hmrPayload.actions), !!s._isOptionsAPI);
  }, c0(
    n,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    s
  );
}
function d0() {
  const n = Nc(!0), s = n.run(() => D({}));
  let r = [], o = [];
  const l = Un({
    install(c) {
      qr(l), l._a = c, c.provide(Gc, l), c.config.globalProperties.$pinia = l, Wr && u0(c, l), o.forEach((d) => r.push(d)), o = [];
    },
    use(c) {
      return !this._a && !Hc ? o.push(c) : r.push(c), this;
    },
    _p: r,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: n,
    _s: /* @__PURE__ */ new Map(),
    state: s
  });
  return Wr && typeof Proxy < "u" && l.use(f0), l;
}
function ef(n, s) {
  for (const r in s) {
    const o = s[r];
    if (!(r in n))
      continue;
    const l = n[r];
    Wn(l) && Wn(o) && !Hn(o) && !es(o) ? n[r] = ef(l, o) : n[r] = o;
  }
  return n;
}
const tf = () => {
};
function tc(n, s, r, o = tf) {
  n.push(s);
  const l = () => {
    const c = n.indexOf(s);
    c > -1 && (n.splice(c, 1), o());
  };
  return !r && Vc() && Fc(l), l;
}
function ur(n, ...s) {
  n.slice().forEach((r) => {
    r(...s);
  });
}
const p0 = (n) => n();
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
const h0 = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function v0(n) {
  return !Wn(n) || !n.hasOwnProperty(h0);
}
const { assign: Mt } = Object;
function nc(n) {
  return !!(Hn(n) && n.effect);
}
function rc(n, s, r, o) {
  const { state: l, actions: c, getters: d } = s, h = r.state.value[n];
  let m;
  function g() {
    !h && (process.env.NODE_ENV === "production" || !o) && (r.state.value[n] = l ? l() : {});
    const E = process.env.NODE_ENV !== "production" && o ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      Go(D(l ? l() : {}).value)
    ) : Go(r.state.value[n]);
    return Mt(E, c, Object.keys(d || {}).reduce(($, S) => (process.env.NODE_ENV !== "production" && S in E && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${S}" in store "${n}".`), $[S] = Un(Ve(() => {
      qr(r);
      const k = r._s.get(n);
      return d[S].call(k, k);
    })), $), {}));
  }
  return m = Xo(n, g, s, r, o, !0), m;
}
function Xo(n, s, r = {}, o, l, c) {
  let d;
  const h = Mt({ actions: {} }, r);
  if (process.env.NODE_ENV !== "production" && !o._e.active)
    throw new Error("Pinia destroyed");
  const m = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !Hc && (m.onTrigger = (G) => {
    g ? k = G : g == !1 && !N._hotUpdating && (Array.isArray(k) ? k.push(G) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let g, E, $ = [], S = [], k;
  const w = o.state.value[n];
  !c && !w && (process.env.NODE_ENV === "production" || !l) && (o.state.value[n] = {});
  const y = D({});
  let M;
  function F(G) {
    let q;
    g = E = !1, process.env.NODE_ENV !== "production" && (k = []), typeof G == "function" ? (G(o.state.value[n]), q = {
      type: jt.patchFunction,
      storeId: n,
      events: k
    }) : (Yo(o.state.value[n], G), q = {
      type: jt.patchObject,
      payload: G,
      storeId: n,
      events: k
    });
    const W = M = Symbol();
    hr().then(() => {
      M === W && (g = !0);
    }), E = !0, ur($, q, o.state.value[n]);
  }
  const U = c ? function() {
    const { state: q } = r, W = q ? q() : {};
    this.$patch((Z) => {
      Mt(Z, W);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${n}" is built using the setup syntax and does not implement $reset().`);
    } : tf
  );
  function T() {
    d.stop(), $ = [], S = [], o._s.delete(n);
  }
  function H(G, q) {
    return function() {
      qr(o);
      const W = Array.from(arguments), Z = [], fe = [];
      function Ye(xe) {
        Z.push(xe);
      }
      function Yt(xe) {
        fe.push(xe);
      }
      ur(S, {
        args: W,
        name: G,
        store: N,
        after: Ye,
        onError: Yt
      });
      let ze;
      try {
        ze = q.apply(this && this.$id === n ? this : N, W);
      } catch (xe) {
        throw ur(fe, xe), xe;
      }
      return ze instanceof Promise ? ze.then((xe) => (ur(Z, xe), xe)).catch((xe) => (ur(fe, xe), Promise.reject(xe))) : (ur(Z, ze), ze);
    };
  }
  const Y = /* @__PURE__ */ Un({
    actions: {},
    getters: {},
    state: [],
    hotState: y
  }), ee = {
    _p: o,
    // _s: scope,
    $id: n,
    $onAction: tc.bind(null, S),
    $patch: F,
    $reset: U,
    $subscribe(G, q = {}) {
      const W = tc($, G, q.detached, () => Z()), Z = d.run(() => Ke(() => o.state.value[n], (fe) => {
        (q.flush === "sync" ? E : g) && G({
          storeId: n,
          type: jt.direct,
          events: k
        }, fe);
      }, Mt({}, m, q)));
      return W;
    },
    $dispose: T
  }, N = Ji(process.env.NODE_ENV !== "production" || Wr ? Mt(
    {
      _hmrPayload: Y,
      _customProperties: Un(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    ee
    // must be added later
    // setupStore
  ) : ee);
  o._s.set(n, N);
  const ve = o._a && o._a.runWithContext || p0, Re = o._e.run(() => (d = Nc(), ve(() => d.run(s))));
  for (const G in Re) {
    const q = Re[G];
    if (Hn(q) && !nc(q) || es(q))
      process.env.NODE_ENV !== "production" && l ? Hi(y.value, G, Wi(Re, G)) : c || (w && v0(q) && (Hn(q) ? q.value = w[G] : Yo(q, w[G])), o.state.value[n][G] = q), process.env.NODE_ENV !== "production" && Y.state.push(G);
    else if (typeof q == "function") {
      const W = process.env.NODE_ENV !== "production" && l ? q : H(G, q);
      Re[G] = W, process.env.NODE_ENV !== "production" && (Y.actions[G] = q), h.actions[G] = q;
    } else
      process.env.NODE_ENV !== "production" && nc(q) && (Y.getters[G] = c ? (
        // @ts-expect-error
        r.getters[G]
      ) : q, os && (Re._getters || // @ts-expect-error: same
      (Re._getters = Un([]))).push(G));
  }
  if (Mt(N, Re), Mt(St(N), Re), Object.defineProperty(N, "$state", {
    get: () => process.env.NODE_ENV !== "production" && l ? y.value : o.state.value[n],
    set: (G) => {
      if (process.env.NODE_ENV !== "production" && l)
        throw new Error("cannot set hotState");
      F((q) => {
        Mt(q, G);
      });
    }
  }), process.env.NODE_ENV !== "production" && (N._hotUpdate = Un((G) => {
    N._hotUpdating = !0, G._hmrPayload.state.forEach((q) => {
      if (q in N.$state) {
        const W = G.$state[q], Z = N.$state[q];
        typeof W == "object" && Wn(W) && Wn(Z) ? ef(W, Z) : G.$state[q] = Z;
      }
      Hi(N, q, Wi(G.$state, q));
    }), Object.keys(N.$state).forEach((q) => {
      q in G.$state || Po(N, q);
    }), g = !1, E = !1, o.state.value[n] = Wi(G._hmrPayload, "hotState"), E = !0, hr().then(() => {
      g = !0;
    });
    for (const q in G._hmrPayload.actions) {
      const W = G[q];
      Hi(N, q, H(q, W));
    }
    for (const q in G._hmrPayload.getters) {
      const W = G._hmrPayload.getters[q], Z = c ? (
        // special handling of options api
        Ve(() => (qr(o), W.call(N, N)))
      ) : W;
      Hi(N, q, Z);
    }
    Object.keys(N._hmrPayload.getters).forEach((q) => {
      q in G._hmrPayload.getters || Po(N, q);
    }), Object.keys(N._hmrPayload.actions).forEach((q) => {
      q in G._hmrPayload.actions || Po(N, q);
    }), N._hmrPayload = G._hmrPayload, N._getters = G._getters, N._hotUpdating = !1;
  })), Wr) {
    const G = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((q) => {
      Object.defineProperty(N, q, Mt({ value: N[q] }, G));
    });
  }
  return o._p.forEach((G) => {
    if (Wr) {
      const q = d.run(() => G({
        store: N,
        app: o._a,
        pinia: o,
        options: h
      }));
      Object.keys(q || {}).forEach((W) => N._customProperties.add(W)), Mt(N, q);
    } else
      Mt(N, d.run(() => G({
        store: N,
        app: o._a,
        pinia: o,
        options: h
      })));
  }), process.env.NODE_ENV !== "production" && N.$state && typeof N.$state == "object" && typeof N.$state.constructor == "function" && !N.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${N.$id}".`), w && c && r.hydrate && r.hydrate(N.$state, w), g = !0, E = !0, N;
}
function as(n, s, r) {
  let o, l;
  const c = typeof s == "function";
  if (typeof n == "string")
    o = n, l = c ? r : s;
  else if (l = n, o = n.id, process.env.NODE_ENV !== "production" && typeof o != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function d(h, m) {
    const g = Cy();
    if (h = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && Hr && Hr._testing ? null : h) || (g ? Mc(Gc, null) : null), h && qr(h), process.env.NODE_ENV !== "production" && !Hr)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    h = Hr, h._s.has(o) || (c ? Xo(o, s, l, h) : rc(o, l, h), process.env.NODE_ENV !== "production" && (d._pinia = h));
    const E = h._s.get(o);
    if (process.env.NODE_ENV !== "production" && m) {
      const $ = "__hot:" + o, S = c ? Xo($, s, l, h, !0) : rc($, Mt({}, l), h, !0);
      m._hotUpdate(S), delete h.state.value[$], h._s.delete($);
    }
    if (process.env.NODE_ENV !== "production" && os) {
      const $ = ta();
      if ($ && $.proxy && // avoid adding stores that are just built for hot module replacement
      !m) {
        const S = $.proxy, k = "_pStores" in S ? S._pStores : S._pStores = {};
        k[o] = E;
      }
    }
    return E;
  }
  return d.$id = o, d;
}
function nf(n) {
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
function Do() {
  return { id: "", src: "" };
}
const m0 = () => [
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
], g0 = () => [
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
function _0(n) {
  return `${(0.05 * n * 100).toFixed(0)}%`;
}
function y0(n) {
  return `${((n - 1) * 100).toFixed(0)}%`;
}
function rf() {
  return {
    category: "",
    name: "",
    role: "",
    style: "",
    speed: "1.0",
    pitch: "0"
  };
}
function b0() {
  return { ...rf(), id: "", label: "" };
}
function Nt() {
  return () => Promise.resolve([]);
}
function sf(n) {
  const s = (n == null ? void 0 : n.editorConfig) || { maxLength: 5e3, placeholder: "请输入内容..." }, r = (n == null ? void 0 : n.handleError) || (() => {
  }), o = (n == null ? void 0 : n.pinyin) || { fetchData: Nt() }, l = (n == null ? void 0 : n.english) || { fetchData: Nt() }, c = (n == null ? void 0 : n.special) || {
    fetchData: Nt(),
    fetchScene: Nt(),
    fetchStyle: Nt()
  }, d = (n == null ? void 0 : n.bgm) || {
    fetchData: Nt(),
    fetchScene: Nt(),
    fetchStyle: Nt()
  }, h = (n == null ? void 0 : n.tryPlay) || {
    play: () => Promise.resolve(Do()),
    fetchData: Nt(),
    featchTag: Nt(),
    fetchStar: () => Promise.resolve(!0)
  }, m = (n == null ? void 0 : n.conversion) || {
    timeoutMilliseconds: 2e4,
    audioUpload: () => Promise.resolve(Do()),
    transfer: () => Promise.resolve(Do()),
    fetchSpeaker: Nt()
  }, g = (n == null ? void 0 : n.management) || {
    recordRecentUsage: () => Promise.resolve(b0()),
    fetchRecentUsage: Nt(),
    deleteRecentUsage: () => Promise.resolve()
  }, E = c, $ = d, S = h;
  return E.menus ?? (E.menus = [
    { label: "默认音效", value: "" },
    { label: "自定义音效", value: "custom" },
    { label: "最近音效", value: "history" }
  ]), $.menus ?? ($.menus = [
    { label: "默认配乐", value: "" },
    { label: "自定义配乐", value: "custom" },
    { label: "最近配乐", value: "history" }
  ]), S.gender ?? (S.gender = [
    { label: "全部", value: "" },
    { label: "男声", value: "Male" },
    { label: "女声", value: "Female" }
  ]), S.topFlag ?? (S.topFlag = [
    { label: "热榜", value: "" },
    { label: "SVIP", value: "SVIP" },
    { label: "付费", value: "付费" }
  ]), S.category ?? (S.category = [
    { label: "常用", value: "常用" },
    { label: "已购", value: "已购" },
    { label: "收藏", value: "收藏" },
    { label: "我的", value: "我的" }
  ]), {
    editorConfig: s,
    handleError: r,
    pinyin: o,
    english: l,
    bgm: $,
    special: E,
    tryPlay: S,
    conversion: m,
    management: g
  };
}
const w0 = () => ({
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
}), x0 = () => ({
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
  const n = De(), s = De(), r = Ve(() => n.value), o = Ve(() => {
    if (s.value)
      return s.value;
    throw Error("请设置GlobalEditorConfig");
  });
  return { editor: r, globalEditConfig: o, setEditor: (d) => {
    n.value = d;
  }, setGlobalEditConfig: (d) => {
    s.value = d ?? sf();
  } };
}), E0 = (n) => {
  const { isInline: s, isVoid: r } = n, o = n;
  return o.isInline = (l) => ie.getNodeType(l) === "ssml-audio" ? !0 : s(l), o.isVoid = (l) => ie.getNodeType(l) === "ssml-audio" ? !ra.string(l) : r(l), o;
};
function ic(n, s, r, o, l) {
  const c = s === void 0 ? void 0 : s.key;
  return { sel: n, data: s, children: r, text: o, elm: l, key: c };
}
const sc = Array.isArray;
function No(n) {
  return typeof n == "string" || typeof n == "number" || n instanceof String || n instanceof Number;
}
function of(n, s, r) {
  if (n.ns = "http://www.w3.org/2000/svg", r !== "foreignObject" && s !== void 0)
    for (let o = 0; o < s.length; ++o) {
      const l = s[o];
      if (typeof l == "string")
        continue;
      const c = l.data;
      c !== void 0 && of(c, l.children, l.sel);
    }
}
function B(n, s, r) {
  let o = {}, l, c, d;
  if (r !== void 0 ? (s !== null && (o = s), sc(r) ? l = r : No(r) ? c = r.toString() : r && r.sel && (l = [r])) : s != null && (sc(s) ? l = s : No(s) ? c = s.toString() : s && s.sel ? l = [s] : o = s), l !== void 0)
    for (d = 0; d < l.length; ++d)
      No(l[d]) && (l[d] = ic(void 0, void 0, void 0, l[d], void 0));
  return n[0] === "s" && n[1] === "v" && n[2] === "g" && (n.length === 3 || n[3] === "." || n[3] === "#") && of(o, l, n), ic(n, o, l, c, void 0);
}
var Fn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function af(n) {
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
    var r, o = "4.17.21", l = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", h = "Invalid `variable` option passed into `_.template`", m = "__lodash_hash_undefined__", g = 500, E = "__lodash_placeholder__", $ = 1, S = 2, k = 4, w = 1, y = 2, M = 1, F = 2, U = 4, T = 8, H = 16, Y = 32, ee = 64, N = 128, ve = 256, Re = 512, G = 30, q = "...", W = 800, Z = 16, fe = 1, Ye = 2, Yt = 3, ze = 1 / 0, xe = 9007199254740991, Gn = 17976931348623157e292, Ee = 0 / 0, Oe = 4294967295, Xr = Oe - 1, Jr = Oe >>> 1, qn = [
      ["ary", N],
      ["bind", M],
      ["bindKey", F],
      ["curry", T],
      ["curryRight", H],
      ["flip", Re],
      ["partial", Y],
      ["partialRight", ee],
      ["rearg", ve]
    ], mn = "[object Arguments]", kn = "[object Array]", ya = "[object AsyncFunction]", yr = "[object Boolean]", br = "[object Date]", Uf = "[object DOMException]", Zr = "[object Error]", Qr = "[object Function]", ba = "[object GeneratorFunction]", Ut = "[object Map]", wr = "[object Number]", Bf = "[object Null]", tn = "[object Object]", wa = "[object Promise]", Hf = "[object Proxy]", xr = "[object RegExp]", Bt = "[object Set]", Er = "[object String]", jr = "[object Symbol]", Wf = "[object Undefined]", Sr = "[object WeakMap]", zf = "[object WeakSet]", $r = "[object ArrayBuffer]", Kn = "[object DataView]", fs = "[object Float32Array]", ds = "[object Float64Array]", ps = "[object Int8Array]", hs = "[object Int16Array]", vs = "[object Int32Array]", ms = "[object Uint8Array]", gs = "[object Uint8ClampedArray]", _s = "[object Uint16Array]", ys = "[object Uint32Array]", Gf = /\b__p \+= '';/g, qf = /\b(__p \+=) '' \+/g, Kf = /(__e\(.*?\)|\b__t\)) \+\n'';/g, xa = /&(?:amp|lt|gt|quot|#39);/g, Ea = /[&<>"']/g, Yf = RegExp(xa.source), Xf = RegExp(Ea.source), Jf = /<%-([\s\S]+?)%>/g, Zf = /<%([\s\S]+?)%>/g, Sa = /<%=([\s\S]+?)%>/g, Qf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, jf = /^\w*$/, ed = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, bs = /[\\^$.*+?()[\]{}|]/g, td = RegExp(bs.source), ws = /^\s+/, nd = /\s/, rd = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, id = /\{\n\/\* \[wrapped with (.+)\] \*/, sd = /,? & /, od = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ad = /[()=,{}\[\]\/\s]/, ld = /\\(\\)?/g, ud = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, $a = /\w*$/, cd = /^[-+]0x[0-9a-f]+$/i, fd = /^0b[01]+$/i, dd = /^\[object .+?Constructor\]$/, pd = /^0o[0-7]+$/i, hd = /^(?:0|[1-9]\d*)$/, vd = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ei = /($^)/, md = /['\n\r\u2028\u2029\\]/g, ti = "\\ud800-\\udfff", gd = "\\u0300-\\u036f", _d = "\\ufe20-\\ufe2f", yd = "\\u20d0-\\u20ff", Ca = gd + _d + yd, Ra = "\\u2700-\\u27bf", ka = "a-z\\xdf-\\xf6\\xf8-\\xff", bd = "\\xac\\xb1\\xd7\\xf7", wd = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", xd = "\\u2000-\\u206f", Ed = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Aa = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ta = "\\ufe0e\\ufe0f", Oa = bd + wd + xd + Ed, xs = "['’]", Sd = "[" + ti + "]", Ia = "[" + Oa + "]", ni = "[" + Ca + "]", La = "\\d+", $d = "[" + Ra + "]", Pa = "[" + ka + "]", Da = "[^" + ti + Oa + La + Ra + ka + Aa + "]", Es = "\\ud83c[\\udffb-\\udfff]", Cd = "(?:" + ni + "|" + Es + ")", Na = "[^" + ti + "]", Ss = "(?:\\ud83c[\\udde6-\\uddff]){2}", $s = "[\\ud800-\\udbff][\\udc00-\\udfff]", Yn = "[" + Aa + "]", Ma = "\\u200d", Va = "(?:" + Pa + "|" + Da + ")", Rd = "(?:" + Yn + "|" + Da + ")", Fa = "(?:" + xs + "(?:d|ll|m|re|s|t|ve))?", Ua = "(?:" + xs + "(?:D|LL|M|RE|S|T|VE))?", Ba = Cd + "?", Ha = "[" + Ta + "]?", kd = "(?:" + Ma + "(?:" + [Na, Ss, $s].join("|") + ")" + Ha + Ba + ")*", Ad = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Td = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Wa = Ha + Ba + kd, Od = "(?:" + [$d, Ss, $s].join("|") + ")" + Wa, Id = "(?:" + [Na + ni + "?", ni, Ss, $s, Sd].join("|") + ")", Ld = RegExp(xs, "g"), Pd = RegExp(ni, "g"), Cs = RegExp(Es + "(?=" + Es + ")|" + Id + Wa, "g"), Dd = RegExp([
      Yn + "?" + Pa + "+" + Fa + "(?=" + [Ia, Yn, "$"].join("|") + ")",
      Rd + "+" + Ua + "(?=" + [Ia, Yn + Va, "$"].join("|") + ")",
      Yn + "?" + Va + "+" + Fa,
      Yn + "+" + Ua,
      Td,
      Ad,
      La,
      Od
    ].join("|"), "g"), Nd = RegExp("[" + Ma + ti + Ca + Ta + "]"), Md = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Vd = [
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
    ], Fd = -1, $e = {};
    $e[fs] = $e[ds] = $e[ps] = $e[hs] = $e[vs] = $e[ms] = $e[gs] = $e[_s] = $e[ys] = !0, $e[mn] = $e[kn] = $e[$r] = $e[yr] = $e[Kn] = $e[br] = $e[Zr] = $e[Qr] = $e[Ut] = $e[wr] = $e[tn] = $e[xr] = $e[Bt] = $e[Er] = $e[Sr] = !1;
    var Se = {};
    Se[mn] = Se[kn] = Se[$r] = Se[Kn] = Se[yr] = Se[br] = Se[fs] = Se[ds] = Se[ps] = Se[hs] = Se[vs] = Se[Ut] = Se[wr] = Se[tn] = Se[xr] = Se[Bt] = Se[Er] = Se[jr] = Se[ms] = Se[gs] = Se[_s] = Se[ys] = !0, Se[Zr] = Se[Qr] = Se[Sr] = !1;
    var Ud = {
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
    }, Bd = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Hd = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Wd = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, zd = parseFloat, Gd = parseInt, za = typeof Fn == "object" && Fn && Fn.Object === Object && Fn, qd = typeof self == "object" && self && self.Object === Object && self, Xe = za || qd || Function("return this")(), Rs = s && !s.nodeType && s, An = Rs && !0 && n && !n.nodeType && n, Ga = An && An.exports === Rs, ks = Ga && za.process, kt = function() {
      try {
        var b = An && An.require && An.require("util").types;
        return b || ks && ks.binding && ks.binding("util");
      } catch {
      }
    }(), qa = kt && kt.isArrayBuffer, Ka = kt && kt.isDate, Ya = kt && kt.isMap, Xa = kt && kt.isRegExp, Ja = kt && kt.isSet, Za = kt && kt.isTypedArray;
    function mt(b, A, C) {
      switch (C.length) {
        case 0:
          return b.call(A);
        case 1:
          return b.call(A, C[0]);
        case 2:
          return b.call(A, C[0], C[1]);
        case 3:
          return b.call(A, C[0], C[1], C[2]);
      }
      return b.apply(A, C);
    }
    function Kd(b, A, C, X) {
      for (var se = -1, me = b == null ? 0 : b.length; ++se < me; ) {
        var Be = b[se];
        A(X, Be, C(Be), b);
      }
      return X;
    }
    function At(b, A) {
      for (var C = -1, X = b == null ? 0 : b.length; ++C < X && A(b[C], C, b) !== !1; )
        ;
      return b;
    }
    function Yd(b, A) {
      for (var C = b == null ? 0 : b.length; C-- && A(b[C], C, b) !== !1; )
        ;
      return b;
    }
    function Qa(b, A) {
      for (var C = -1, X = b == null ? 0 : b.length; ++C < X; )
        if (!A(b[C], C, b))
          return !1;
      return !0;
    }
    function gn(b, A) {
      for (var C = -1, X = b == null ? 0 : b.length, se = 0, me = []; ++C < X; ) {
        var Be = b[C];
        A(Be, C, b) && (me[se++] = Be);
      }
      return me;
    }
    function ri(b, A) {
      var C = b == null ? 0 : b.length;
      return !!C && Xn(b, A, 0) > -1;
    }
    function As(b, A, C) {
      for (var X = -1, se = b == null ? 0 : b.length; ++X < se; )
        if (C(A, b[X]))
          return !0;
      return !1;
    }
    function ke(b, A) {
      for (var C = -1, X = b == null ? 0 : b.length, se = Array(X); ++C < X; )
        se[C] = A(b[C], C, b);
      return se;
    }
    function _n(b, A) {
      for (var C = -1, X = A.length, se = b.length; ++C < X; )
        b[se + C] = A[C];
      return b;
    }
    function Ts(b, A, C, X) {
      var se = -1, me = b == null ? 0 : b.length;
      for (X && me && (C = b[++se]); ++se < me; )
        C = A(C, b[se], se, b);
      return C;
    }
    function Xd(b, A, C, X) {
      var se = b == null ? 0 : b.length;
      for (X && se && (C = b[--se]); se--; )
        C = A(C, b[se], se, b);
      return C;
    }
    function Os(b, A) {
      for (var C = -1, X = b == null ? 0 : b.length; ++C < X; )
        if (A(b[C], C, b))
          return !0;
      return !1;
    }
    var Jd = Is("length");
    function Zd(b) {
      return b.split("");
    }
    function Qd(b) {
      return b.match(od) || [];
    }
    function ja(b, A, C) {
      var X;
      return C(b, function(se, me, Be) {
        if (A(se, me, Be))
          return X = me, !1;
      }), X;
    }
    function ii(b, A, C, X) {
      for (var se = b.length, me = C + (X ? 1 : -1); X ? me-- : ++me < se; )
        if (A(b[me], me, b))
          return me;
      return -1;
    }
    function Xn(b, A, C) {
      return A === A ? cp(b, A, C) : ii(b, el, C);
    }
    function jd(b, A, C, X) {
      for (var se = C - 1, me = b.length; ++se < me; )
        if (X(b[se], A))
          return se;
      return -1;
    }
    function el(b) {
      return b !== b;
    }
    function tl(b, A) {
      var C = b == null ? 0 : b.length;
      return C ? Ps(b, A) / C : Ee;
    }
    function Is(b) {
      return function(A) {
        return A == null ? r : A[b];
      };
    }
    function Ls(b) {
      return function(A) {
        return b == null ? r : b[A];
      };
    }
    function nl(b, A, C, X, se) {
      return se(b, function(me, Be, we) {
        C = X ? (X = !1, me) : A(C, me, Be, we);
      }), C;
    }
    function ep(b, A) {
      var C = b.length;
      for (b.sort(A); C--; )
        b[C] = b[C].value;
      return b;
    }
    function Ps(b, A) {
      for (var C, X = -1, se = b.length; ++X < se; ) {
        var me = A(b[X]);
        me !== r && (C = C === r ? me : C + me);
      }
      return C;
    }
    function Ds(b, A) {
      for (var C = -1, X = Array(b); ++C < b; )
        X[C] = A(C);
      return X;
    }
    function tp(b, A) {
      return ke(A, function(C) {
        return [C, b[C]];
      });
    }
    function rl(b) {
      return b && b.slice(0, al(b) + 1).replace(ws, "");
    }
    function gt(b) {
      return function(A) {
        return b(A);
      };
    }
    function Ns(b, A) {
      return ke(A, function(C) {
        return b[C];
      });
    }
    function Cr(b, A) {
      return b.has(A);
    }
    function il(b, A) {
      for (var C = -1, X = b.length; ++C < X && Xn(A, b[C], 0) > -1; )
        ;
      return C;
    }
    function sl(b, A) {
      for (var C = b.length; C-- && Xn(A, b[C], 0) > -1; )
        ;
      return C;
    }
    function np(b, A) {
      for (var C = b.length, X = 0; C--; )
        b[C] === A && ++X;
      return X;
    }
    var rp = Ls(Ud), ip = Ls(Bd);
    function sp(b) {
      return "\\" + Wd[b];
    }
    function op(b, A) {
      return b == null ? r : b[A];
    }
    function Jn(b) {
      return Nd.test(b);
    }
    function ap(b) {
      return Md.test(b);
    }
    function lp(b) {
      for (var A, C = []; !(A = b.next()).done; )
        C.push(A.value);
      return C;
    }
    function Ms(b) {
      var A = -1, C = Array(b.size);
      return b.forEach(function(X, se) {
        C[++A] = [se, X];
      }), C;
    }
    function ol(b, A) {
      return function(C) {
        return b(A(C));
      };
    }
    function yn(b, A) {
      for (var C = -1, X = b.length, se = 0, me = []; ++C < X; ) {
        var Be = b[C];
        (Be === A || Be === E) && (b[C] = E, me[se++] = C);
      }
      return me;
    }
    function si(b) {
      var A = -1, C = Array(b.size);
      return b.forEach(function(X) {
        C[++A] = X;
      }), C;
    }
    function up(b) {
      var A = -1, C = Array(b.size);
      return b.forEach(function(X) {
        C[++A] = [X, X];
      }), C;
    }
    function cp(b, A, C) {
      for (var X = C - 1, se = b.length; ++X < se; )
        if (b[X] === A)
          return X;
      return -1;
    }
    function fp(b, A, C) {
      for (var X = C + 1; X--; )
        if (b[X] === A)
          return X;
      return X;
    }
    function Zn(b) {
      return Jn(b) ? pp(b) : Jd(b);
    }
    function Ht(b) {
      return Jn(b) ? hp(b) : Zd(b);
    }
    function al(b) {
      for (var A = b.length; A-- && nd.test(b.charAt(A)); )
        ;
      return A;
    }
    var dp = Ls(Hd);
    function pp(b) {
      for (var A = Cs.lastIndex = 0; Cs.test(b); )
        ++A;
      return A;
    }
    function hp(b) {
      return b.match(Cs) || [];
    }
    function vp(b) {
      return b.match(Dd) || [];
    }
    var mp = function b(A) {
      A = A == null ? Xe : Qn.defaults(Xe.Object(), A, Qn.pick(Xe, Vd));
      var C = A.Array, X = A.Date, se = A.Error, me = A.Function, Be = A.Math, we = A.Object, Vs = A.RegExp, gp = A.String, Tt = A.TypeError, oi = C.prototype, _p = me.prototype, jn = we.prototype, ai = A["__core-js_shared__"], li = _p.toString, ye = jn.hasOwnProperty, yp = 0, ll = function() {
        var e = /[^.]+$/.exec(ai && ai.keys && ai.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), ui = jn.toString, bp = li.call(we), wp = Xe._, xp = Vs(
        "^" + li.call(ye).replace(bs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ci = Ga ? A.Buffer : r, bn = A.Symbol, fi = A.Uint8Array, ul = ci ? ci.allocUnsafe : r, di = ol(we.getPrototypeOf, we), cl = we.create, fl = jn.propertyIsEnumerable, pi = oi.splice, dl = bn ? bn.isConcatSpreadable : r, Rr = bn ? bn.iterator : r, Tn = bn ? bn.toStringTag : r, hi = function() {
        try {
          var e = Dn(we, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Ep = A.clearTimeout !== Xe.clearTimeout && A.clearTimeout, Sp = X && X.now !== Xe.Date.now && X.now, $p = A.setTimeout !== Xe.setTimeout && A.setTimeout, vi = Be.ceil, mi = Be.floor, Fs = we.getOwnPropertySymbols, Cp = ci ? ci.isBuffer : r, pl = A.isFinite, Rp = oi.join, kp = ol(we.keys, we), He = Be.max, je = Be.min, Ap = X.now, Tp = A.parseInt, hl = Be.random, Op = oi.reverse, Us = Dn(A, "DataView"), kr = Dn(A, "Map"), Bs = Dn(A, "Promise"), er = Dn(A, "Set"), Ar = Dn(A, "WeakMap"), Tr = Dn(we, "create"), gi = Ar && new Ar(), tr = {}, Ip = Nn(Us), Lp = Nn(kr), Pp = Nn(Bs), Dp = Nn(er), Np = Nn(Ar), _i = bn ? bn.prototype : r, Or = _i ? _i.valueOf : r, vl = _i ? _i.toString : r;
      function f(e) {
        if (Ie(e) && !oe(e) && !(e instanceof pe)) {
          if (e instanceof Ot)
            return e;
          if (ye.call(e, "__wrapped__"))
            return mu(e);
        }
        return new Ot(e);
      }
      var nr = function() {
        function e() {
        }
        return function(t) {
          if (!Ae(t))
            return {};
          if (cl)
            return cl(t);
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
        escape: Jf,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Zf,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Sa,
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
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Oe, this.__views__ = [];
      }
      function Mp() {
        var e = new pe(this.__wrapped__);
        return e.__actions__ = ft(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = ft(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = ft(this.__views__), e;
      }
      function Vp() {
        if (this.__filtered__) {
          var e = new pe(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Fp() {
        var e = this.__wrapped__.value(), t = this.__dir__, i = oe(e), a = t < 0, u = i ? e.length : 0, p = Zh(0, u, this.__views__), v = p.start, _ = p.end, x = _ - v, I = a ? _ : v - 1, L = this.__iteratees__, V = L.length, K = 0, Q = je(x, this.__takeCount__);
        if (!i || !a && u == x && Q == x)
          return Fl(e, this.__actions__);
        var ne = [];
        e:
          for (; x-- && K < Q; ) {
            I += t;
            for (var le = -1, re = e[I]; ++le < V; ) {
              var de = L[le], he = de.iteratee, bt = de.type, at = he(re);
              if (bt == Ye)
                re = at;
              else if (!at) {
                if (bt == fe)
                  continue e;
                break e;
              }
            }
            ne[K++] = re;
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
      function Up() {
        this.__data__ = Tr ? Tr(null) : {}, this.size = 0;
      }
      function Bp(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function Hp(e) {
        var t = this.__data__;
        if (Tr) {
          var i = t[e];
          return i === m ? r : i;
        }
        return ye.call(t, e) ? t[e] : r;
      }
      function Wp(e) {
        var t = this.__data__;
        return Tr ? t[e] !== r : ye.call(t, e);
      }
      function zp(e, t) {
        var i = this.__data__;
        return this.size += this.has(e) ? 0 : 1, i[e] = Tr && t === r ? m : t, this;
      }
      On.prototype.clear = Up, On.prototype.delete = Bp, On.prototype.get = Hp, On.prototype.has = Wp, On.prototype.set = zp;
      function nn(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function Gp() {
        this.__data__ = [], this.size = 0;
      }
      function qp(e) {
        var t = this.__data__, i = bi(t, e);
        if (i < 0)
          return !1;
        var a = t.length - 1;
        return i == a ? t.pop() : pi.call(t, i, 1), --this.size, !0;
      }
      function Kp(e) {
        var t = this.__data__, i = bi(t, e);
        return i < 0 ? r : t[i][1];
      }
      function Yp(e) {
        return bi(this.__data__, e) > -1;
      }
      function Xp(e, t) {
        var i = this.__data__, a = bi(i, e);
        return a < 0 ? (++this.size, i.push([e, t])) : i[a][1] = t, this;
      }
      nn.prototype.clear = Gp, nn.prototype.delete = qp, nn.prototype.get = Kp, nn.prototype.has = Yp, nn.prototype.set = Xp;
      function rn(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function Jp() {
        this.size = 0, this.__data__ = {
          hash: new On(),
          map: new (kr || nn)(),
          string: new On()
        };
      }
      function Zp(e) {
        var t = Ii(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function Qp(e) {
        return Ii(this, e).get(e);
      }
      function jp(e) {
        return Ii(this, e).has(e);
      }
      function eh(e, t) {
        var i = Ii(this, e), a = i.size;
        return i.set(e, t), this.size += i.size == a ? 0 : 1, this;
      }
      rn.prototype.clear = Jp, rn.prototype.delete = Zp, rn.prototype.get = Qp, rn.prototype.has = jp, rn.prototype.set = eh;
      function In(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.__data__ = new rn(); ++t < i; )
          this.add(e[t]);
      }
      function th(e) {
        return this.__data__.set(e, m), this;
      }
      function nh(e) {
        return this.__data__.has(e);
      }
      In.prototype.add = In.prototype.push = th, In.prototype.has = nh;
      function Wt(e) {
        var t = this.__data__ = new nn(e);
        this.size = t.size;
      }
      function rh() {
        this.__data__ = new nn(), this.size = 0;
      }
      function ih(e) {
        var t = this.__data__, i = t.delete(e);
        return this.size = t.size, i;
      }
      function sh(e) {
        return this.__data__.get(e);
      }
      function oh(e) {
        return this.__data__.has(e);
      }
      function ah(e, t) {
        var i = this.__data__;
        if (i instanceof nn) {
          var a = i.__data__;
          if (!kr || a.length < l - 1)
            return a.push([e, t]), this.size = ++i.size, this;
          i = this.__data__ = new rn(a);
        }
        return i.set(e, t), this.size = i.size, this;
      }
      Wt.prototype.clear = rh, Wt.prototype.delete = ih, Wt.prototype.get = sh, Wt.prototype.has = oh, Wt.prototype.set = ah;
      function ml(e, t) {
        var i = oe(e), a = !i && Mn(e), u = !i && !a && $n(e), p = !i && !a && !u && or(e), v = i || a || u || p, _ = v ? Ds(e.length, gp) : [], x = _.length;
        for (var I in e)
          (t || ye.call(e, I)) && !(v && // Safari 9 has enumerable `arguments.length` in strict mode.
          (I == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          u && (I == "offset" || I == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          p && (I == "buffer" || I == "byteLength" || I == "byteOffset") || // Skip index properties.
          ln(I, x))) && _.push(I);
        return _;
      }
      function gl(e) {
        var t = e.length;
        return t ? e[Qs(0, t - 1)] : r;
      }
      function lh(e, t) {
        return Li(ft(e), Ln(t, 0, e.length));
      }
      function uh(e) {
        return Li(ft(e));
      }
      function Hs(e, t, i) {
        (i !== r && !zt(e[t], i) || i === r && !(t in e)) && sn(e, t, i);
      }
      function Ir(e, t, i) {
        var a = e[t];
        (!(ye.call(e, t) && zt(a, i)) || i === r && !(t in e)) && sn(e, t, i);
      }
      function bi(e, t) {
        for (var i = e.length; i--; )
          if (zt(e[i][0], t))
            return i;
        return -1;
      }
      function ch(e, t, i, a) {
        return wn(e, function(u, p, v) {
          t(a, u, i(u), v);
        }), a;
      }
      function _l(e, t) {
        return e && Jt(t, Ge(t), e);
      }
      function fh(e, t) {
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
        for (var i = -1, a = t.length, u = C(a), p = e == null; ++i < a; )
          u[i] = p ? r : So(e, t[i]);
        return u;
      }
      function Ln(e, t, i) {
        return e === e && (i !== r && (e = e <= i ? e : i), t !== r && (e = e >= t ? e : t)), e;
      }
      function It(e, t, i, a, u, p) {
        var v, _ = t & $, x = t & S, I = t & k;
        if (i && (v = u ? i(e, a, u, p) : i(e)), v !== r)
          return v;
        if (!Ae(e))
          return e;
        var L = oe(e);
        if (L) {
          if (v = jh(e), !_)
            return ft(e, v);
        } else {
          var V = et(e), K = V == Qr || V == ba;
          if ($n(e))
            return Hl(e, _);
          if (V == tn || V == mn || K && !u) {
            if (v = x || K ? {} : au(e), !_)
              return x ? Hh(e, fh(v, e)) : Bh(e, _l(v, e));
          } else {
            if (!Se[V])
              return u ? e : {};
            v = ev(e, V, _);
          }
        }
        p || (p = new Wt());
        var Q = p.get(e);
        if (Q)
          return Q;
        p.set(e, v), Nu(e) ? e.forEach(function(re) {
          v.add(It(re, t, i, re, e, p));
        }) : Pu(e) && e.forEach(function(re, de) {
          v.set(de, It(re, t, i, de, e, p));
        });
        var ne = I ? x ? uo : lo : x ? pt : Ge, le = L ? r : ne(e);
        return At(le || e, function(re, de) {
          le && (de = re, re = e[de]), Ir(v, de, It(re, t, i, de, e, p));
        }), v;
      }
      function dh(e) {
        var t = Ge(e);
        return function(i) {
          return yl(i, e, t);
        };
      }
      function yl(e, t, i) {
        var a = i.length;
        if (e == null)
          return !a;
        for (e = we(e); a--; ) {
          var u = i[a], p = t[u], v = e[u];
          if (v === r && !(u in e) || !p(v))
            return !1;
        }
        return !0;
      }
      function bl(e, t, i) {
        if (typeof e != "function")
          throw new Tt(d);
        return Fr(function() {
          e.apply(r, i);
        }, t);
      }
      function Lr(e, t, i, a) {
        var u = -1, p = ri, v = !0, _ = e.length, x = [], I = t.length;
        if (!_)
          return x;
        i && (t = ke(t, gt(i))), a ? (p = As, v = !1) : t.length >= l && (p = Cr, v = !1, t = new In(t));
        e:
          for (; ++u < _; ) {
            var L = e[u], V = i == null ? L : i(L);
            if (L = a || L !== 0 ? L : 0, v && V === V) {
              for (var K = I; K--; )
                if (t[K] === V)
                  continue e;
              x.push(L);
            } else
              p(t, V, a) || x.push(L);
          }
        return x;
      }
      var wn = Kl(Xt), wl = Kl(Gs, !0);
      function ph(e, t) {
        var i = !0;
        return wn(e, function(a, u, p) {
          return i = !!t(a, u, p), i;
        }), i;
      }
      function wi(e, t, i) {
        for (var a = -1, u = e.length; ++a < u; ) {
          var p = e[a], v = t(p);
          if (v != null && (_ === r ? v === v && !yt(v) : i(v, _)))
            var _ = v, x = p;
        }
        return x;
      }
      function hh(e, t, i, a) {
        var u = e.length;
        for (i = ae(i), i < 0 && (i = -i > u ? 0 : u + i), a = a === r || a > u ? u : ae(a), a < 0 && (a += u), a = i > a ? 0 : Vu(a); i < a; )
          e[i++] = t;
        return e;
      }
      function xl(e, t) {
        var i = [];
        return wn(e, function(a, u, p) {
          t(a, u, p) && i.push(a);
        }), i;
      }
      function Je(e, t, i, a, u) {
        var p = -1, v = e.length;
        for (i || (i = nv), u || (u = []); ++p < v; ) {
          var _ = e[p];
          t > 0 && i(_) ? t > 1 ? Je(_, t - 1, i, a, u) : _n(u, _) : a || (u[u.length] = _);
        }
        return u;
      }
      var zs = Yl(), El = Yl(!0);
      function Xt(e, t) {
        return e && zs(e, t, Ge);
      }
      function Gs(e, t) {
        return e && El(e, t, Ge);
      }
      function xi(e, t) {
        return gn(t, function(i) {
          return un(e[i]);
        });
      }
      function Pn(e, t) {
        t = En(t, e);
        for (var i = 0, a = t.length; e != null && i < a; )
          e = e[Zt(t[i++])];
        return i && i == a ? e : r;
      }
      function Sl(e, t, i) {
        var a = t(e);
        return oe(e) ? a : _n(a, i(e));
      }
      function st(e) {
        return e == null ? e === r ? Wf : Bf : Tn && Tn in we(e) ? Jh(e) : uv(e);
      }
      function qs(e, t) {
        return e > t;
      }
      function vh(e, t) {
        return e != null && ye.call(e, t);
      }
      function mh(e, t) {
        return e != null && t in we(e);
      }
      function gh(e, t, i) {
        return e >= je(t, i) && e < He(t, i);
      }
      function Ks(e, t, i) {
        for (var a = i ? As : ri, u = e[0].length, p = e.length, v = p, _ = C(p), x = 1 / 0, I = []; v--; ) {
          var L = e[v];
          v && t && (L = ke(L, gt(t))), x = je(L.length, x), _[v] = !i && (t || u >= 120 && L.length >= 120) ? new In(v && L) : r;
        }
        L = e[0];
        var V = -1, K = _[0];
        e:
          for (; ++V < u && I.length < x; ) {
            var Q = L[V], ne = t ? t(Q) : Q;
            if (Q = i || Q !== 0 ? Q : 0, !(K ? Cr(K, ne) : a(I, ne, i))) {
              for (v = p; --v; ) {
                var le = _[v];
                if (!(le ? Cr(le, ne) : a(e[v], ne, i)))
                  continue e;
              }
              K && K.push(ne), I.push(Q);
            }
          }
        return I;
      }
      function _h(e, t, i, a) {
        return Xt(e, function(u, p, v) {
          t(a, i(u), p, v);
        }), a;
      }
      function Pr(e, t, i) {
        t = En(t, e), e = fu(e, t);
        var a = e == null ? e : e[Zt(Pt(t))];
        return a == null ? r : mt(a, e, i);
      }
      function $l(e) {
        return Ie(e) && st(e) == mn;
      }
      function yh(e) {
        return Ie(e) && st(e) == $r;
      }
      function bh(e) {
        return Ie(e) && st(e) == br;
      }
      function Dr(e, t, i, a, u) {
        return e === t ? !0 : e == null || t == null || !Ie(e) && !Ie(t) ? e !== e && t !== t : wh(e, t, i, a, Dr, u);
      }
      function wh(e, t, i, a, u, p) {
        var v = oe(e), _ = oe(t), x = v ? kn : et(e), I = _ ? kn : et(t);
        x = x == mn ? tn : x, I = I == mn ? tn : I;
        var L = x == tn, V = I == tn, K = x == I;
        if (K && $n(e)) {
          if (!$n(t))
            return !1;
          v = !0, L = !1;
        }
        if (K && !L)
          return p || (p = new Wt()), v || or(e) ? iu(e, t, i, a, u, p) : Yh(e, t, x, i, a, u, p);
        if (!(i & w)) {
          var Q = L && ye.call(e, "__wrapped__"), ne = V && ye.call(t, "__wrapped__");
          if (Q || ne) {
            var le = Q ? e.value() : e, re = ne ? t.value() : t;
            return p || (p = new Wt()), u(le, re, i, a, p);
          }
        }
        return K ? (p || (p = new Wt()), Xh(e, t, i, a, u, p)) : !1;
      }
      function xh(e) {
        return Ie(e) && et(e) == Ut;
      }
      function Ys(e, t, i, a) {
        var u = i.length, p = u, v = !a;
        if (e == null)
          return !p;
        for (e = we(e); u--; ) {
          var _ = i[u];
          if (v && _[2] ? _[1] !== e[_[0]] : !(_[0] in e))
            return !1;
        }
        for (; ++u < p; ) {
          _ = i[u];
          var x = _[0], I = e[x], L = _[1];
          if (v && _[2]) {
            if (I === r && !(x in e))
              return !1;
          } else {
            var V = new Wt();
            if (a)
              var K = a(I, L, x, e, t, V);
            if (!(K === r ? Dr(L, I, w | y, a, V) : K))
              return !1;
          }
        }
        return !0;
      }
      function Cl(e) {
        if (!Ae(e) || iv(e))
          return !1;
        var t = un(e) ? xp : dd;
        return t.test(Nn(e));
      }
      function Eh(e) {
        return Ie(e) && st(e) == xr;
      }
      function Sh(e) {
        return Ie(e) && et(e) == Bt;
      }
      function $h(e) {
        return Ie(e) && Fi(e.length) && !!$e[st(e)];
      }
      function Rl(e) {
        return typeof e == "function" ? e : e == null ? ht : typeof e == "object" ? oe(e) ? Tl(e[0], e[1]) : Al(e) : Xu(e);
      }
      function Xs(e) {
        if (!Vr(e))
          return kp(e);
        var t = [];
        for (var i in we(e))
          ye.call(e, i) && i != "constructor" && t.push(i);
        return t;
      }
      function Ch(e) {
        if (!Ae(e))
          return lv(e);
        var t = Vr(e), i = [];
        for (var a in e)
          a == "constructor" && (t || !ye.call(e, a)) || i.push(a);
        return i;
      }
      function Js(e, t) {
        return e < t;
      }
      function kl(e, t) {
        var i = -1, a = dt(e) ? C(e.length) : [];
        return wn(e, function(u, p, v) {
          a[++i] = t(u, p, v);
        }), a;
      }
      function Al(e) {
        var t = fo(e);
        return t.length == 1 && t[0][2] ? uu(t[0][0], t[0][1]) : function(i) {
          return i === e || Ys(i, e, t);
        };
      }
      function Tl(e, t) {
        return ho(e) && lu(t) ? uu(Zt(e), t) : function(i) {
          var a = So(i, e);
          return a === r && a === t ? $o(i, e) : Dr(t, a, w | y);
        };
      }
      function Ei(e, t, i, a, u) {
        e !== t && zs(t, function(p, v) {
          if (u || (u = new Wt()), Ae(p))
            Rh(e, t, v, i, Ei, a, u);
          else {
            var _ = a ? a(mo(e, v), p, v + "", e, t, u) : r;
            _ === r && (_ = p), Hs(e, v, _);
          }
        }, pt);
      }
      function Rh(e, t, i, a, u, p, v) {
        var _ = mo(e, i), x = mo(t, i), I = v.get(x);
        if (I) {
          Hs(e, i, I);
          return;
        }
        var L = p ? p(_, x, i + "", e, t, v) : r, V = L === r;
        if (V) {
          var K = oe(x), Q = !K && $n(x), ne = !K && !Q && or(x);
          L = x, K || Q || ne ? oe(_) ? L = _ : Ne(_) ? L = ft(_) : Q ? (V = !1, L = Hl(x, !0)) : ne ? (V = !1, L = Wl(x, !0)) : L = [] : Ur(x) || Mn(x) ? (L = _, Mn(_) ? L = Fu(_) : (!Ae(_) || un(_)) && (L = au(x))) : V = !1;
        }
        V && (v.set(x, L), u(L, x, a, p, v), v.delete(x)), Hs(e, i, L);
      }
      function Ol(e, t) {
        var i = e.length;
        if (i)
          return t += t < 0 ? i : 0, ln(t, i) ? e[t] : r;
      }
      function Il(e, t, i) {
        t.length ? t = ke(t, function(p) {
          return oe(p) ? function(v) {
            return Pn(v, p.length === 1 ? p[0] : p);
          } : p;
        }) : t = [ht];
        var a = -1;
        t = ke(t, gt(te()));
        var u = kl(e, function(p, v, _) {
          var x = ke(t, function(I) {
            return I(p);
          });
          return { criteria: x, index: ++a, value: p };
        });
        return ep(u, function(p, v) {
          return Uh(p, v, i);
        });
      }
      function kh(e, t) {
        return Ll(e, t, function(i, a) {
          return $o(e, a);
        });
      }
      function Ll(e, t, i) {
        for (var a = -1, u = t.length, p = {}; ++a < u; ) {
          var v = t[a], _ = Pn(e, v);
          i(_, v) && Nr(p, En(v, e), _);
        }
        return p;
      }
      function Ah(e) {
        return function(t) {
          return Pn(t, e);
        };
      }
      function Zs(e, t, i, a) {
        var u = a ? jd : Xn, p = -1, v = t.length, _ = e;
        for (e === t && (t = ft(t)), i && (_ = ke(e, gt(i))); ++p < v; )
          for (var x = 0, I = t[p], L = i ? i(I) : I; (x = u(_, L, x, a)) > -1; )
            _ !== e && pi.call(_, x, 1), pi.call(e, x, 1);
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
        return e + mi(hl() * (t - e + 1));
      }
      function Th(e, t, i, a) {
        for (var u = -1, p = He(vi((t - e) / (i || 1)), 0), v = C(p); p--; )
          v[a ? p : ++u] = e, e += i;
        return v;
      }
      function js(e, t) {
        var i = "";
        if (!e || t < 1 || t > xe)
          return i;
        do
          t % 2 && (i += e), t = mi(t / 2), t && (e += e);
        while (t);
        return i;
      }
      function ue(e, t) {
        return go(cu(e, t, ht), e + "");
      }
      function Oh(e) {
        return gl(ar(e));
      }
      function Ih(e, t) {
        var i = ar(e);
        return Li(i, Ln(t, 0, i.length));
      }
      function Nr(e, t, i, a) {
        if (!Ae(e))
          return e;
        t = En(t, e);
        for (var u = -1, p = t.length, v = p - 1, _ = e; _ != null && ++u < p; ) {
          var x = Zt(t[u]), I = i;
          if (x === "__proto__" || x === "constructor" || x === "prototype")
            return e;
          if (u != v) {
            var L = _[x];
            I = a ? a(L, x, _) : r, I === r && (I = Ae(L) ? L : ln(t[u + 1]) ? [] : {});
          }
          Ir(_, x, I), _ = _[x];
        }
        return e;
      }
      var Dl = gi ? function(e, t) {
        return gi.set(e, t), e;
      } : ht, Lh = hi ? function(e, t) {
        return hi(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Ro(t),
          writable: !0
        });
      } : ht;
      function Ph(e) {
        return Li(ar(e));
      }
      function Lt(e, t, i) {
        var a = -1, u = e.length;
        t < 0 && (t = -t > u ? 0 : u + t), i = i > u ? u : i, i < 0 && (i += u), u = t > i ? 0 : i - t >>> 0, t >>>= 0;
        for (var p = C(u); ++a < u; )
          p[a] = e[a + t];
        return p;
      }
      function Dh(e, t) {
        var i;
        return wn(e, function(a, u, p) {
          return i = t(a, u, p), !i;
        }), !!i;
      }
      function Si(e, t, i) {
        var a = 0, u = e == null ? a : e.length;
        if (typeof t == "number" && t === t && u <= Jr) {
          for (; a < u; ) {
            var p = a + u >>> 1, v = e[p];
            v !== null && !yt(v) && (i ? v <= t : v < t) ? a = p + 1 : u = p;
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
        for (var v = t !== t, _ = t === null, x = yt(t), I = t === r; u < p; ) {
          var L = mi((u + p) / 2), V = i(e[L]), K = V !== r, Q = V === null, ne = V === V, le = yt(V);
          if (v)
            var re = a || ne;
          else
            I ? re = ne && (a || K) : _ ? re = ne && K && (a || !Q) : x ? re = ne && K && !Q && (a || !le) : Q || le ? re = !1 : re = a ? V <= t : V < t;
          re ? u = L + 1 : p = L;
        }
        return je(p, Xr);
      }
      function Nl(e, t) {
        for (var i = -1, a = e.length, u = 0, p = []; ++i < a; ) {
          var v = e[i], _ = t ? t(v) : v;
          if (!i || !zt(_, x)) {
            var x = _;
            p[u++] = v === 0 ? 0 : v;
          }
        }
        return p;
      }
      function Ml(e) {
        return typeof e == "number" ? e : yt(e) ? Ee : +e;
      }
      function _t(e) {
        if (typeof e == "string")
          return e;
        if (oe(e))
          return ke(e, _t) + "";
        if (yt(e))
          return vl ? vl.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -ze ? "-0" : t;
      }
      function xn(e, t, i) {
        var a = -1, u = ri, p = e.length, v = !0, _ = [], x = _;
        if (i)
          v = !1, u = As;
        else if (p >= l) {
          var I = t ? null : qh(e);
          if (I)
            return si(I);
          v = !1, u = Cr, x = new In();
        } else
          x = t ? [] : _;
        e:
          for (; ++a < p; ) {
            var L = e[a], V = t ? t(L) : L;
            if (L = i || L !== 0 ? L : 0, v && V === V) {
              for (var K = x.length; K--; )
                if (x[K] === V)
                  continue e;
              t && x.push(V), _.push(L);
            } else
              u(x, V, i) || (x !== _ && x.push(V), _.push(L));
          }
        return _;
      }
      function to(e, t) {
        return t = En(t, e), e = fu(e, t), e == null || delete e[Zt(Pt(t))];
      }
      function Vl(e, t, i, a) {
        return Nr(e, t, i(Pn(e, t)), a);
      }
      function $i(e, t, i, a) {
        for (var u = e.length, p = a ? u : -1; (a ? p-- : ++p < u) && t(e[p], p, e); )
          ;
        return i ? Lt(e, a ? 0 : p, a ? p + 1 : u) : Lt(e, a ? p + 1 : 0, a ? u : p);
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
        for (var u = -1, p = C(a); ++u < a; )
          for (var v = e[u], _ = -1; ++_ < a; )
            _ != u && (p[u] = Lr(p[u] || v, e[_], t, i));
        return xn(Je(p, 1), t, i);
      }
      function Ul(e, t, i) {
        for (var a = -1, u = e.length, p = t.length, v = {}; ++a < u; ) {
          var _ = a < p ? t[a] : r;
          i(v, e[a], _);
        }
        return v;
      }
      function ro(e) {
        return Ne(e) ? e : [];
      }
      function io(e) {
        return typeof e == "function" ? e : ht;
      }
      function En(e, t) {
        return oe(e) ? e : ho(e, t) ? [e] : vu(_e(e));
      }
      var Nh = ue;
      function Sn(e, t, i) {
        var a = e.length;
        return i = i === r ? a : i, !t && i >= a ? e : Lt(e, t, i);
      }
      var Bl = Ep || function(e) {
        return Xe.clearTimeout(e);
      };
      function Hl(e, t) {
        if (t)
          return e.slice();
        var i = e.length, a = ul ? ul(i) : new e.constructor(i);
        return e.copy(a), a;
      }
      function so(e) {
        var t = new e.constructor(e.byteLength);
        return new fi(t).set(new fi(e)), t;
      }
      function Mh(e, t) {
        var i = t ? so(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.byteLength);
      }
      function Vh(e) {
        var t = new e.constructor(e.source, $a.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      function Fh(e) {
        return Or ? we(Or.call(e)) : {};
      }
      function Wl(e, t) {
        var i = t ? so(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.length);
      }
      function zl(e, t) {
        if (e !== t) {
          var i = e !== r, a = e === null, u = e === e, p = yt(e), v = t !== r, _ = t === null, x = t === t, I = yt(t);
          if (!_ && !I && !p && e > t || p && v && x && !_ && !I || a && v && x || !i && x || !u)
            return 1;
          if (!a && !p && !I && e < t || I && i && u && !a && !p || _ && i && u || !v && u || !x)
            return -1;
        }
        return 0;
      }
      function Uh(e, t, i) {
        for (var a = -1, u = e.criteria, p = t.criteria, v = u.length, _ = i.length; ++a < v; ) {
          var x = zl(u[a], p[a]);
          if (x) {
            if (a >= _)
              return x;
            var I = i[a];
            return x * (I == "desc" ? -1 : 1);
          }
        }
        return e.index - t.index;
      }
      function Gl(e, t, i, a) {
        for (var u = -1, p = e.length, v = i.length, _ = -1, x = t.length, I = He(p - v, 0), L = C(x + I), V = !a; ++_ < x; )
          L[_] = t[_];
        for (; ++u < v; )
          (V || u < p) && (L[i[u]] = e[u]);
        for (; I--; )
          L[_++] = e[u++];
        return L;
      }
      function ql(e, t, i, a) {
        for (var u = -1, p = e.length, v = -1, _ = i.length, x = -1, I = t.length, L = He(p - _, 0), V = C(L + I), K = !a; ++u < L; )
          V[u] = e[u];
        for (var Q = u; ++x < I; )
          V[Q + x] = t[x];
        for (; ++v < _; )
          (K || u < p) && (V[Q + i[v]] = e[u++]);
        return V;
      }
      function ft(e, t) {
        var i = -1, a = e.length;
        for (t || (t = C(a)); ++i < a; )
          t[i] = e[i];
        return t;
      }
      function Jt(e, t, i, a) {
        var u = !i;
        i || (i = {});
        for (var p = -1, v = t.length; ++p < v; ) {
          var _ = t[p], x = a ? a(i[_], e[_], _, i, e) : r;
          x === r && (x = e[_]), u ? sn(i, _, x) : Ir(i, _, x);
        }
        return i;
      }
      function Bh(e, t) {
        return Jt(e, po(e), t);
      }
      function Hh(e, t) {
        return Jt(e, su(e), t);
      }
      function Ci(e, t) {
        return function(i, a) {
          var u = oe(i) ? Kd : ch, p = t ? t() : {};
          return u(i, e, te(a, 2), p);
        };
      }
      function rr(e) {
        return ue(function(t, i) {
          var a = -1, u = i.length, p = u > 1 ? i[u - 1] : r, v = u > 2 ? i[2] : r;
          for (p = e.length > 3 && typeof p == "function" ? (u--, p) : r, v && ot(i[0], i[1], v) && (p = u < 3 ? r : p, u = 1), t = we(t); ++a < u; ) {
            var _ = i[a];
            _ && e(t, _, a, p);
          }
          return t;
        });
      }
      function Kl(e, t) {
        return function(i, a) {
          if (i == null)
            return i;
          if (!dt(i))
            return e(i, a);
          for (var u = i.length, p = t ? u : -1, v = we(i); (t ? p-- : ++p < u) && a(v[p], p, v) !== !1; )
            ;
          return i;
        };
      }
      function Yl(e) {
        return function(t, i, a) {
          for (var u = -1, p = we(t), v = a(t), _ = v.length; _--; ) {
            var x = v[e ? _ : ++u];
            if (i(p[x], x, p) === !1)
              break;
          }
          return t;
        };
      }
      function Wh(e, t, i) {
        var a = t & M, u = Mr(e);
        function p() {
          var v = this && this !== Xe && this instanceof p ? u : e;
          return v.apply(a ? i : this, arguments);
        }
        return p;
      }
      function Xl(e) {
        return function(t) {
          t = _e(t);
          var i = Jn(t) ? Ht(t) : r, a = i ? i[0] : t.charAt(0), u = i ? Sn(i, 1).join("") : t.slice(1);
          return a[e]() + u;
        };
      }
      function ir(e) {
        return function(t) {
          return Ts(Ku(qu(t).replace(Ld, "")), e, "");
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
          return Ae(a) ? a : i;
        };
      }
      function zh(e, t, i) {
        var a = Mr(e);
        function u() {
          for (var p = arguments.length, v = C(p), _ = p, x = sr(u); _--; )
            v[_] = arguments[_];
          var I = p < 3 && v[0] !== x && v[p - 1] !== x ? [] : yn(v, x);
          if (p -= I.length, p < i)
            return eu(
              e,
              t,
              Ri,
              u.placeholder,
              r,
              v,
              I,
              r,
              r,
              i - p
            );
          var L = this && this !== Xe && this instanceof u ? a : e;
          return mt(L, this, v);
        }
        return u;
      }
      function Jl(e) {
        return function(t, i, a) {
          var u = we(t);
          if (!dt(t)) {
            var p = te(i, 3);
            t = Ge(t), i = function(_) {
              return p(u[_], _, u);
            };
          }
          var v = e(t, i, a);
          return v > -1 ? u[p ? t[v] : v] : r;
        };
      }
      function Zl(e) {
        return an(function(t) {
          var i = t.length, a = i, u = Ot.prototype.thru;
          for (e && t.reverse(); a--; ) {
            var p = t[a];
            if (typeof p != "function")
              throw new Tt(d);
            if (u && !v && Oi(p) == "wrapper")
              var v = new Ot([], !0);
          }
          for (a = v ? a : i; ++a < i; ) {
            p = t[a];
            var _ = Oi(p), x = _ == "wrapper" ? co(p) : r;
            x && vo(x[0]) && x[1] == (N | T | Y | ve) && !x[4].length && x[9] == 1 ? v = v[Oi(x[0])].apply(v, x[3]) : v = p.length == 1 && vo(p) ? v[_]() : v.thru(p);
          }
          return function() {
            var I = arguments, L = I[0];
            if (v && I.length == 1 && oe(L))
              return v.plant(L).value();
            for (var V = 0, K = i ? t[V].apply(this, I) : L; ++V < i; )
              K = t[V].call(this, K);
            return K;
          };
        });
      }
      function Ri(e, t, i, a, u, p, v, _, x, I) {
        var L = t & N, V = t & M, K = t & F, Q = t & (T | H), ne = t & Re, le = K ? r : Mr(e);
        function re() {
          for (var de = arguments.length, he = C(de), bt = de; bt--; )
            he[bt] = arguments[bt];
          if (Q)
            var at = sr(re), wt = np(he, at);
          if (a && (he = Gl(he, a, u, Q)), p && (he = ql(he, p, v, Q)), de -= wt, Q && de < I) {
            var Me = yn(he, at);
            return eu(
              e,
              t,
              Ri,
              re.placeholder,
              i,
              he,
              Me,
              _,
              x,
              I - de
            );
          }
          var Gt = V ? i : this, fn = K ? Gt[e] : e;
          return de = he.length, _ ? he = cv(he, _) : ne && de > 1 && he.reverse(), L && x < de && (he.length = x), this && this !== Xe && this instanceof re && (fn = le || Mr(fn)), fn.apply(Gt, he);
        }
        return re;
      }
      function Ql(e, t) {
        return function(i, a) {
          return _h(i, e, t(a), {});
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
            typeof i == "string" || typeof a == "string" ? (i = _t(i), a = _t(a)) : (i = Ml(i), a = Ml(a)), u = e(i, a);
          }
          return u;
        };
      }
      function oo(e) {
        return an(function(t) {
          return t = ke(t, gt(te())), ue(function(i) {
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
      function Gh(e, t, i, a) {
        var u = t & M, p = Mr(e);
        function v() {
          for (var _ = -1, x = arguments.length, I = -1, L = a.length, V = C(L + x), K = this && this !== Xe && this instanceof v ? p : e; ++I < L; )
            V[I] = a[I];
          for (; x--; )
            V[I++] = arguments[++_];
          return mt(K, u ? i : this, V);
        }
        return v;
      }
      function jl(e) {
        return function(t, i, a) {
          return a && typeof a != "number" && ot(t, i, a) && (i = a = r), t = cn(t), i === r ? (i = t, t = 0) : i = cn(i), a = a === r ? t < i ? 1 : -1 : cn(a), Th(t, i, a, e);
        };
      }
      function Ti(e) {
        return function(t, i) {
          return typeof t == "string" && typeof i == "string" || (t = Dt(t), i = Dt(i)), e(t, i);
        };
      }
      function eu(e, t, i, a, u, p, v, _, x, I) {
        var L = t & T, V = L ? v : r, K = L ? r : v, Q = L ? p : r, ne = L ? r : p;
        t |= L ? Y : ee, t &= ~(L ? ee : Y), t & U || (t &= ~(M | F));
        var le = [
          e,
          t,
          u,
          Q,
          V,
          ne,
          K,
          _,
          x,
          I
        ], re = i.apply(r, le);
        return vo(e) && du(re, le), re.placeholder = a, pu(re, e, t);
      }
      function ao(e) {
        var t = Be[e];
        return function(i, a) {
          if (i = Dt(i), a = a == null ? 0 : je(ae(a), 292), a && pl(i)) {
            var u = (_e(i) + "e").split("e"), p = t(u[0] + "e" + (+u[1] + a));
            return u = (_e(p) + "e").split("e"), +(u[0] + "e" + (+u[1] - a));
          }
          return t(i);
        };
      }
      var qh = er && 1 / si(new er([, -0]))[1] == ze ? function(e) {
        return new er(e);
      } : To;
      function tu(e) {
        return function(t) {
          var i = et(t);
          return i == Ut ? Ms(t) : i == Bt ? up(t) : tp(t, e(t));
        };
      }
      function on(e, t, i, a, u, p, v, _) {
        var x = t & F;
        if (!x && typeof e != "function")
          throw new Tt(d);
        var I = a ? a.length : 0;
        if (I || (t &= ~(Y | ee), a = u = r), v = v === r ? v : He(ae(v), 0), _ = _ === r ? _ : ae(_), I -= u ? u.length : 0, t & ee) {
          var L = a, V = u;
          a = u = r;
        }
        var K = x ? r : co(e), Q = [
          e,
          t,
          i,
          a,
          u,
          L,
          V,
          p,
          v,
          _
        ];
        if (K && av(Q, K), e = Q[0], t = Q[1], i = Q[2], a = Q[3], u = Q[4], _ = Q[9] = Q[9] === r ? x ? 0 : e.length : He(Q[9] - I, 0), !_ && t & (T | H) && (t &= ~(T | H)), !t || t == M)
          var ne = Wh(e, t, i);
        else
          t == T || t == H ? ne = zh(e, t, _) : (t == Y || t == (M | Y)) && !u.length ? ne = Gh(e, t, i, a) : ne = Ri.apply(r, Q);
        var le = K ? Dl : du;
        return pu(le(ne, Q), e, t);
      }
      function nu(e, t, i, a) {
        return e === r || zt(e, jn[i]) && !ye.call(a, i) ? t : e;
      }
      function ru(e, t, i, a, u, p) {
        return Ae(e) && Ae(t) && (p.set(t, e), Ei(e, t, r, ru, p), p.delete(t)), e;
      }
      function Kh(e) {
        return Ur(e) ? r : e;
      }
      function iu(e, t, i, a, u, p) {
        var v = i & w, _ = e.length, x = t.length;
        if (_ != x && !(v && x > _))
          return !1;
        var I = p.get(e), L = p.get(t);
        if (I && L)
          return I == t && L == e;
        var V = -1, K = !0, Q = i & y ? new In() : r;
        for (p.set(e, t), p.set(t, e); ++V < _; ) {
          var ne = e[V], le = t[V];
          if (a)
            var re = v ? a(le, ne, V, t, e, p) : a(ne, le, V, e, t, p);
          if (re !== r) {
            if (re)
              continue;
            K = !1;
            break;
          }
          if (Q) {
            if (!Os(t, function(de, he) {
              if (!Cr(Q, he) && (ne === de || u(ne, de, i, a, p)))
                return Q.push(he);
            })) {
              K = !1;
              break;
            }
          } else if (!(ne === le || u(ne, le, i, a, p))) {
            K = !1;
            break;
          }
        }
        return p.delete(e), p.delete(t), K;
      }
      function Yh(e, t, i, a, u, p, v) {
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
          case Ut:
            var _ = Ms;
          case Bt:
            var x = a & w;
            if (_ || (_ = si), e.size != t.size && !x)
              return !1;
            var I = v.get(e);
            if (I)
              return I == t;
            a |= y, v.set(e, t);
            var L = iu(_(e), _(t), a, u, p, v);
            return v.delete(e), L;
          case jr:
            if (Or)
              return Or.call(e) == Or.call(t);
        }
        return !1;
      }
      function Xh(e, t, i, a, u, p) {
        var v = i & w, _ = lo(e), x = _.length, I = lo(t), L = I.length;
        if (x != L && !v)
          return !1;
        for (var V = x; V--; ) {
          var K = _[V];
          if (!(v ? K in t : ye.call(t, K)))
            return !1;
        }
        var Q = p.get(e), ne = p.get(t);
        if (Q && ne)
          return Q == t && ne == e;
        var le = !0;
        p.set(e, t), p.set(t, e);
        for (var re = v; ++V < x; ) {
          K = _[V];
          var de = e[K], he = t[K];
          if (a)
            var bt = v ? a(he, de, K, t, e, p) : a(de, he, K, e, t, p);
          if (!(bt === r ? de === he || u(de, he, i, a, p) : bt)) {
            le = !1;
            break;
          }
          re || (re = K == "constructor");
        }
        if (le && !re) {
          var at = e.constructor, wt = t.constructor;
          at != wt && "constructor" in e && "constructor" in t && !(typeof at == "function" && at instanceof at && typeof wt == "function" && wt instanceof wt) && (le = !1);
        }
        return p.delete(e), p.delete(t), le;
      }
      function an(e) {
        return go(cu(e, r, yu), e + "");
      }
      function lo(e) {
        return Sl(e, Ge, po);
      }
      function uo(e) {
        return Sl(e, pt, su);
      }
      var co = gi ? function(e) {
        return gi.get(e);
      } : To;
      function Oi(e) {
        for (var t = e.name + "", i = tr[t], a = ye.call(tr, t) ? i.length : 0; a--; ) {
          var u = i[a], p = u.func;
          if (p == null || p == e)
            return u.name;
        }
        return t;
      }
      function sr(e) {
        var t = ye.call(f, "placeholder") ? f : e;
        return t.placeholder;
      }
      function te() {
        var e = f.iteratee || ko;
        return e = e === ko ? Rl : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function Ii(e, t) {
        var i = e.__data__;
        return rv(t) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
      }
      function fo(e) {
        for (var t = Ge(e), i = t.length; i--; ) {
          var a = t[i], u = e[a];
          t[i] = [a, u, lu(u)];
        }
        return t;
      }
      function Dn(e, t) {
        var i = op(e, t);
        return Cl(i) ? i : r;
      }
      function Jh(e) {
        var t = ye.call(e, Tn), i = e[Tn];
        try {
          e[Tn] = r;
          var a = !0;
        } catch {
        }
        var u = ui.call(e);
        return a && (t ? e[Tn] = i : delete e[Tn]), u;
      }
      var po = Fs ? function(e) {
        return e == null ? [] : (e = we(e), gn(Fs(e), function(t) {
          return fl.call(e, t);
        }));
      } : Oo, su = Fs ? function(e) {
        for (var t = []; e; )
          _n(t, po(e)), e = di(e);
        return t;
      } : Oo, et = st;
      (Us && et(new Us(new ArrayBuffer(1))) != Kn || kr && et(new kr()) != Ut || Bs && et(Bs.resolve()) != wa || er && et(new er()) != Bt || Ar && et(new Ar()) != Sr) && (et = function(e) {
        var t = st(e), i = t == tn ? e.constructor : r, a = i ? Nn(i) : "";
        if (a)
          switch (a) {
            case Ip:
              return Kn;
            case Lp:
              return Ut;
            case Pp:
              return wa;
            case Dp:
              return Bt;
            case Np:
              return Sr;
          }
        return t;
      });
      function Zh(e, t, i) {
        for (var a = -1, u = i.length; ++a < u; ) {
          var p = i[a], v = p.size;
          switch (p.type) {
            case "drop":
              e += v;
              break;
            case "dropRight":
              t -= v;
              break;
            case "take":
              t = je(t, e + v);
              break;
            case "takeRight":
              e = He(e, t - v);
              break;
          }
        }
        return { start: e, end: t };
      }
      function Qh(e) {
        var t = e.match(id);
        return t ? t[1].split(sd) : [];
      }
      function ou(e, t, i) {
        t = En(t, e);
        for (var a = -1, u = t.length, p = !1; ++a < u; ) {
          var v = Zt(t[a]);
          if (!(p = e != null && i(e, v)))
            break;
          e = e[v];
        }
        return p || ++a != u ? p : (u = e == null ? 0 : e.length, !!u && Fi(u) && ln(v, u) && (oe(e) || Mn(e)));
      }
      function jh(e) {
        var t = e.length, i = new e.constructor(t);
        return t && typeof e[0] == "string" && ye.call(e, "index") && (i.index = e.index, i.input = e.input), i;
      }
      function au(e) {
        return typeof e.constructor == "function" && !Vr(e) ? nr(di(e)) : {};
      }
      function ev(e, t, i) {
        var a = e.constructor;
        switch (t) {
          case $r:
            return so(e);
          case yr:
          case br:
            return new a(+e);
          case Kn:
            return Mh(e, i);
          case fs:
          case ds:
          case ps:
          case hs:
          case vs:
          case ms:
          case gs:
          case _s:
          case ys:
            return Wl(e, i);
          case Ut:
            return new a();
          case wr:
          case Er:
            return new a(e);
          case xr:
            return Vh(e);
          case Bt:
            return new a();
          case jr:
            return Fh(e);
        }
      }
      function tv(e, t) {
        var i = t.length;
        if (!i)
          return e;
        var a = i - 1;
        return t[a] = (i > 1 ? "& " : "") + t[a], t = t.join(i > 2 ? ", " : " "), e.replace(rd, `{
/* [wrapped with ` + t + `] */
`);
      }
      function nv(e) {
        return oe(e) || Mn(e) || !!(dl && e && e[dl]);
      }
      function ln(e, t) {
        var i = typeof e;
        return t = t ?? xe, !!t && (i == "number" || i != "symbol" && hd.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function ot(e, t, i) {
        if (!Ae(i))
          return !1;
        var a = typeof t;
        return (a == "number" ? dt(i) && ln(t, i.length) : a == "string" && t in i) ? zt(i[t], e) : !1;
      }
      function ho(e, t) {
        if (oe(e))
          return !1;
        var i = typeof e;
        return i == "number" || i == "symbol" || i == "boolean" || e == null || yt(e) ? !0 : jf.test(e) || !Qf.test(e) || t != null && e in we(t);
      }
      function rv(e) {
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
      function iv(e) {
        return !!ll && ll in e;
      }
      var sv = ai ? un : Io;
      function Vr(e) {
        var t = e && e.constructor, i = typeof t == "function" && t.prototype || jn;
        return e === i;
      }
      function lu(e) {
        return e === e && !Ae(e);
      }
      function uu(e, t) {
        return function(i) {
          return i == null ? !1 : i[e] === t && (t !== r || e in we(i));
        };
      }
      function ov(e) {
        var t = Mi(e, function(a) {
          return i.size === g && i.clear(), a;
        }), i = t.cache;
        return t;
      }
      function av(e, t) {
        var i = e[1], a = t[1], u = i | a, p = u < (M | F | N), v = a == N && i == T || a == N && i == ve && e[7].length <= t[8] || a == (N | ve) && t[7].length <= t[8] && i == T;
        if (!(p || v))
          return e;
        a & M && (e[2] = t[2], u |= i & M ? 0 : U);
        var _ = t[3];
        if (_) {
          var x = e[3];
          e[3] = x ? Gl(x, _, t[4]) : _, e[4] = x ? yn(e[3], E) : t[4];
        }
        return _ = t[5], _ && (x = e[5], e[5] = x ? ql(x, _, t[6]) : _, e[6] = x ? yn(e[5], E) : t[6]), _ = t[7], _ && (e[7] = _), a & N && (e[8] = e[8] == null ? t[8] : je(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = u, e;
      }
      function lv(e) {
        var t = [];
        if (e != null)
          for (var i in we(e))
            t.push(i);
        return t;
      }
      function uv(e) {
        return ui.call(e);
      }
      function cu(e, t, i) {
        return t = He(t === r ? e.length - 1 : t, 0), function() {
          for (var a = arguments, u = -1, p = He(a.length - t, 0), v = C(p); ++u < p; )
            v[u] = a[t + u];
          u = -1;
          for (var _ = C(t + 1); ++u < t; )
            _[u] = a[u];
          return _[t] = i(v), mt(e, this, _);
        };
      }
      function fu(e, t) {
        return t.length < 2 ? e : Pn(e, Lt(t, 0, -1));
      }
      function cv(e, t) {
        for (var i = e.length, a = je(t.length, i), u = ft(e); a--; ) {
          var p = t[a];
          e[a] = ln(p, i) ? u[p] : r;
        }
        return e;
      }
      function mo(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
          return e[t];
      }
      var du = hu(Dl), Fr = $p || function(e, t) {
        return Xe.setTimeout(e, t);
      }, go = hu(Lh);
      function pu(e, t, i) {
        var a = t + "";
        return go(e, tv(a, fv(Qh(a), i)));
      }
      function hu(e) {
        var t = 0, i = 0;
        return function() {
          var a = Ap(), u = Z - (a - i);
          if (i = a, u > 0) {
            if (++t >= W)
              return arguments[0];
          } else
            t = 0;
          return e.apply(r, arguments);
        };
      }
      function Li(e, t) {
        var i = -1, a = e.length, u = a - 1;
        for (t = t === r ? a : t; ++i < t; ) {
          var p = Qs(i, u), v = e[p];
          e[p] = e[i], e[i] = v;
        }
        return e.length = t, e;
      }
      var vu = ov(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(ed, function(i, a, u, p) {
          t.push(u ? p.replace(ld, "$1") : a || i);
        }), t;
      });
      function Zt(e) {
        if (typeof e == "string" || yt(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -ze ? "-0" : t;
      }
      function Nn(e) {
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
      function fv(e, t) {
        return At(qn, function(i) {
          var a = "_." + i[0];
          t & i[1] && !ri(e, a) && e.push(a);
        }), e.sort();
      }
      function mu(e) {
        if (e instanceof pe)
          return e.clone();
        var t = new Ot(e.__wrapped__, e.__chain__);
        return t.__actions__ = ft(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
      }
      function dv(e, t, i) {
        (i ? ot(e, t, i) : t === r) ? t = 1 : t = He(ae(t), 0);
        var a = e == null ? 0 : e.length;
        if (!a || t < 1)
          return [];
        for (var u = 0, p = 0, v = C(vi(a / t)); u < a; )
          v[p++] = Lt(e, u, u += t);
        return v;
      }
      function pv(e) {
        for (var t = -1, i = e == null ? 0 : e.length, a = 0, u = []; ++t < i; ) {
          var p = e[t];
          p && (u[a++] = p);
        }
        return u;
      }
      function hv() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var t = C(e - 1), i = arguments[0], a = e; a--; )
          t[a - 1] = arguments[a];
        return _n(oe(i) ? ft(i) : [i], Je(t, 1));
      }
      var vv = ue(function(e, t) {
        return Ne(e) ? Lr(e, Je(t, 1, Ne, !0)) : [];
      }), mv = ue(function(e, t) {
        var i = Pt(t);
        return Ne(i) && (i = r), Ne(e) ? Lr(e, Je(t, 1, Ne, !0), te(i, 2)) : [];
      }), gv = ue(function(e, t) {
        var i = Pt(t);
        return Ne(i) && (i = r), Ne(e) ? Lr(e, Je(t, 1, Ne, !0), r, i) : [];
      });
      function _v(e, t, i) {
        var a = e == null ? 0 : e.length;
        return a ? (t = i || t === r ? 1 : ae(t), Lt(e, t < 0 ? 0 : t, a)) : [];
      }
      function yv(e, t, i) {
        var a = e == null ? 0 : e.length;
        return a ? (t = i || t === r ? 1 : ae(t), t = a - t, Lt(e, 0, t < 0 ? 0 : t)) : [];
      }
      function bv(e, t) {
        return e && e.length ? $i(e, te(t, 3), !0, !0) : [];
      }
      function wv(e, t) {
        return e && e.length ? $i(e, te(t, 3), !0) : [];
      }
      function xv(e, t, i, a) {
        var u = e == null ? 0 : e.length;
        return u ? (i && typeof i != "number" && ot(e, t, i) && (i = 0, a = u), hh(e, t, i, a)) : [];
      }
      function gu(e, t, i) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var u = i == null ? 0 : ae(i);
        return u < 0 && (u = He(a + u, 0)), ii(e, te(t, 3), u);
      }
      function _u(e, t, i) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var u = a - 1;
        return i !== r && (u = ae(i), u = i < 0 ? He(a + u, 0) : je(u, a - 1)), ii(e, te(t, 3), u, !0);
      }
      function yu(e) {
        var t = e == null ? 0 : e.length;
        return t ? Je(e, 1) : [];
      }
      function Ev(e) {
        var t = e == null ? 0 : e.length;
        return t ? Je(e, ze) : [];
      }
      function Sv(e, t) {
        var i = e == null ? 0 : e.length;
        return i ? (t = t === r ? 1 : ae(t), Je(e, t)) : [];
      }
      function $v(e) {
        for (var t = -1, i = e == null ? 0 : e.length, a = {}; ++t < i; ) {
          var u = e[t];
          a[u[0]] = u[1];
        }
        return a;
      }
      function bu(e) {
        return e && e.length ? e[0] : r;
      }
      function Cv(e, t, i) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var u = i == null ? 0 : ae(i);
        return u < 0 && (u = He(a + u, 0)), Xn(e, t, u);
      }
      function Rv(e) {
        var t = e == null ? 0 : e.length;
        return t ? Lt(e, 0, -1) : [];
      }
      var kv = ue(function(e) {
        var t = ke(e, ro);
        return t.length && t[0] === e[0] ? Ks(t) : [];
      }), Av = ue(function(e) {
        var t = Pt(e), i = ke(e, ro);
        return t === Pt(i) ? t = r : i.pop(), i.length && i[0] === e[0] ? Ks(i, te(t, 2)) : [];
      }), Tv = ue(function(e) {
        var t = Pt(e), i = ke(e, ro);
        return t = typeof t == "function" ? t : r, t && i.pop(), i.length && i[0] === e[0] ? Ks(i, r, t) : [];
      });
      function Ov(e, t) {
        return e == null ? "" : Rp.call(e, t);
      }
      function Pt(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : r;
      }
      function Iv(e, t, i) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var u = a;
        return i !== r && (u = ae(i), u = u < 0 ? He(a + u, 0) : je(u, a - 1)), t === t ? fp(e, t, u) : ii(e, el, u, !0);
      }
      function Lv(e, t) {
        return e && e.length ? Ol(e, ae(t)) : r;
      }
      var Pv = ue(wu);
      function wu(e, t) {
        return e && e.length && t && t.length ? Zs(e, t) : e;
      }
      function Dv(e, t, i) {
        return e && e.length && t && t.length ? Zs(e, t, te(i, 2)) : e;
      }
      function Nv(e, t, i) {
        return e && e.length && t && t.length ? Zs(e, t, r, i) : e;
      }
      var Mv = an(function(e, t) {
        var i = e == null ? 0 : e.length, a = Ws(e, t);
        return Pl(e, ke(t, function(u) {
          return ln(u, i) ? +u : u;
        }).sort(zl)), a;
      });
      function Vv(e, t) {
        var i = [];
        if (!(e && e.length))
          return i;
        var a = -1, u = [], p = e.length;
        for (t = te(t, 3); ++a < p; ) {
          var v = e[a];
          t(v, a, e) && (i.push(v), u.push(a));
        }
        return Pl(e, u), i;
      }
      function _o(e) {
        return e == null ? e : Op.call(e);
      }
      function Fv(e, t, i) {
        var a = e == null ? 0 : e.length;
        return a ? (i && typeof i != "number" && ot(e, t, i) ? (t = 0, i = a) : (t = t == null ? 0 : ae(t), i = i === r ? a : ae(i)), Lt(e, t, i)) : [];
      }
      function Uv(e, t) {
        return Si(e, t);
      }
      function Bv(e, t, i) {
        return eo(e, t, te(i, 2));
      }
      function Hv(e, t) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var a = Si(e, t);
          if (a < i && zt(e[a], t))
            return a;
        }
        return -1;
      }
      function Wv(e, t) {
        return Si(e, t, !0);
      }
      function zv(e, t, i) {
        return eo(e, t, te(i, 2), !0);
      }
      function Gv(e, t) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var a = Si(e, t, !0) - 1;
          if (zt(e[a], t))
            return a;
        }
        return -1;
      }
      function qv(e) {
        return e && e.length ? Nl(e) : [];
      }
      function Kv(e, t) {
        return e && e.length ? Nl(e, te(t, 2)) : [];
      }
      function Yv(e) {
        var t = e == null ? 0 : e.length;
        return t ? Lt(e, 1, t) : [];
      }
      function Xv(e, t, i) {
        return e && e.length ? (t = i || t === r ? 1 : ae(t), Lt(e, 0, t < 0 ? 0 : t)) : [];
      }
      function Jv(e, t, i) {
        var a = e == null ? 0 : e.length;
        return a ? (t = i || t === r ? 1 : ae(t), t = a - t, Lt(e, t < 0 ? 0 : t, a)) : [];
      }
      function Zv(e, t) {
        return e && e.length ? $i(e, te(t, 3), !1, !0) : [];
      }
      function Qv(e, t) {
        return e && e.length ? $i(e, te(t, 3)) : [];
      }
      var jv = ue(function(e) {
        return xn(Je(e, 1, Ne, !0));
      }), em = ue(function(e) {
        var t = Pt(e);
        return Ne(t) && (t = r), xn(Je(e, 1, Ne, !0), te(t, 2));
      }), tm = ue(function(e) {
        var t = Pt(e);
        return t = typeof t == "function" ? t : r, xn(Je(e, 1, Ne, !0), r, t);
      });
      function nm(e) {
        return e && e.length ? xn(e) : [];
      }
      function rm(e, t) {
        return e && e.length ? xn(e, te(t, 2)) : [];
      }
      function im(e, t) {
        return t = typeof t == "function" ? t : r, e && e.length ? xn(e, r, t) : [];
      }
      function yo(e) {
        if (!(e && e.length))
          return [];
        var t = 0;
        return e = gn(e, function(i) {
          if (Ne(i))
            return t = He(i.length, t), !0;
        }), Ds(t, function(i) {
          return ke(e, Is(i));
        });
      }
      function xu(e, t) {
        if (!(e && e.length))
          return [];
        var i = yo(e);
        return t == null ? i : ke(i, function(a) {
          return mt(t, r, a);
        });
      }
      var sm = ue(function(e, t) {
        return Ne(e) ? Lr(e, t) : [];
      }), om = ue(function(e) {
        return no(gn(e, Ne));
      }), am = ue(function(e) {
        var t = Pt(e);
        return Ne(t) && (t = r), no(gn(e, Ne), te(t, 2));
      }), lm = ue(function(e) {
        var t = Pt(e);
        return t = typeof t == "function" ? t : r, no(gn(e, Ne), r, t);
      }), um = ue(yo);
      function cm(e, t) {
        return Ul(e || [], t || [], Ir);
      }
      function fm(e, t) {
        return Ul(e || [], t || [], Nr);
      }
      var dm = ue(function(e) {
        var t = e.length, i = t > 1 ? e[t - 1] : r;
        return i = typeof i == "function" ? (e.pop(), i) : r, xu(e, i);
      });
      function Eu(e) {
        var t = f(e);
        return t.__chain__ = !0, t;
      }
      function pm(e, t) {
        return t(e), e;
      }
      function Pi(e, t) {
        return t(e);
      }
      var hm = an(function(e) {
        var t = e.length, i = t ? e[0] : 0, a = this.__wrapped__, u = function(p) {
          return Ws(p, e);
        };
        return t > 1 || this.__actions__.length || !(a instanceof pe) || !ln(i) ? this.thru(u) : (a = a.slice(i, +i + (t ? 1 : 0)), a.__actions__.push({
          func: Pi,
          args: [u],
          thisArg: r
        }), new Ot(a, this.__chain__).thru(function(p) {
          return t && !p.length && p.push(r), p;
        }));
      });
      function vm() {
        return Eu(this);
      }
      function mm() {
        return new Ot(this.value(), this.__chain__);
      }
      function gm() {
        this.__values__ === r && (this.__values__ = Mu(this.value()));
        var e = this.__index__ >= this.__values__.length, t = e ? r : this.__values__[this.__index__++];
        return { done: e, value: t };
      }
      function _m() {
        return this;
      }
      function ym(e) {
        for (var t, i = this; i instanceof yi; ) {
          var a = mu(i);
          a.__index__ = 0, a.__values__ = r, t ? u.__wrapped__ = a : t = a;
          var u = a;
          i = i.__wrapped__;
        }
        return u.__wrapped__ = e, t;
      }
      function bm() {
        var e = this.__wrapped__;
        if (e instanceof pe) {
          var t = e;
          return this.__actions__.length && (t = new pe(this)), t = t.reverse(), t.__actions__.push({
            func: Pi,
            args: [_o],
            thisArg: r
          }), new Ot(t, this.__chain__);
        }
        return this.thru(_o);
      }
      function wm() {
        return Fl(this.__wrapped__, this.__actions__);
      }
      var xm = Ci(function(e, t, i) {
        ye.call(e, i) ? ++e[i] : sn(e, i, 1);
      });
      function Em(e, t, i) {
        var a = oe(e) ? Qa : ph;
        return i && ot(e, t, i) && (t = r), a(e, te(t, 3));
      }
      function Sm(e, t) {
        var i = oe(e) ? gn : xl;
        return i(e, te(t, 3));
      }
      var $m = Jl(gu), Cm = Jl(_u);
      function Rm(e, t) {
        return Je(Di(e, t), 1);
      }
      function km(e, t) {
        return Je(Di(e, t), ze);
      }
      function Am(e, t, i) {
        return i = i === r ? 1 : ae(i), Je(Di(e, t), i);
      }
      function Su(e, t) {
        var i = oe(e) ? At : wn;
        return i(e, te(t, 3));
      }
      function $u(e, t) {
        var i = oe(e) ? Yd : wl;
        return i(e, te(t, 3));
      }
      var Tm = Ci(function(e, t, i) {
        ye.call(e, i) ? e[i].push(t) : sn(e, i, [t]);
      });
      function Om(e, t, i, a) {
        e = dt(e) ? e : ar(e), i = i && !a ? ae(i) : 0;
        var u = e.length;
        return i < 0 && (i = He(u + i, 0)), Ui(e) ? i <= u && e.indexOf(t, i) > -1 : !!u && Xn(e, t, i) > -1;
      }
      var Im = ue(function(e, t, i) {
        var a = -1, u = typeof t == "function", p = dt(e) ? C(e.length) : [];
        return wn(e, function(v) {
          p[++a] = u ? mt(t, v, i) : Pr(v, t, i);
        }), p;
      }), Lm = Ci(function(e, t, i) {
        sn(e, i, t);
      });
      function Di(e, t) {
        var i = oe(e) ? ke : kl;
        return i(e, te(t, 3));
      }
      function Pm(e, t, i, a) {
        return e == null ? [] : (oe(t) || (t = t == null ? [] : [t]), i = a ? r : i, oe(i) || (i = i == null ? [] : [i]), Il(e, t, i));
      }
      var Dm = Ci(function(e, t, i) {
        e[i ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function Nm(e, t, i) {
        var a = oe(e) ? Ts : nl, u = arguments.length < 3;
        return a(e, te(t, 4), i, u, wn);
      }
      function Mm(e, t, i) {
        var a = oe(e) ? Xd : nl, u = arguments.length < 3;
        return a(e, te(t, 4), i, u, wl);
      }
      function Vm(e, t) {
        var i = oe(e) ? gn : xl;
        return i(e, Vi(te(t, 3)));
      }
      function Fm(e) {
        var t = oe(e) ? gl : Oh;
        return t(e);
      }
      function Um(e, t, i) {
        (i ? ot(e, t, i) : t === r) ? t = 1 : t = ae(t);
        var a = oe(e) ? lh : Ih;
        return a(e, t);
      }
      function Bm(e) {
        var t = oe(e) ? uh : Ph;
        return t(e);
      }
      function Hm(e) {
        if (e == null)
          return 0;
        if (dt(e))
          return Ui(e) ? Zn(e) : e.length;
        var t = et(e);
        return t == Ut || t == Bt ? e.size : Xs(e).length;
      }
      function Wm(e, t, i) {
        var a = oe(e) ? Os : Dh;
        return i && ot(e, t, i) && (t = r), a(e, te(t, 3));
      }
      var zm = ue(function(e, t) {
        if (e == null)
          return [];
        var i = t.length;
        return i > 1 && ot(e, t[0], t[1]) ? t = [] : i > 2 && ot(t[0], t[1], t[2]) && (t = [t[0]]), Il(e, Je(t, 1), []);
      }), Ni = Sp || function() {
        return Xe.Date.now();
      };
      function Gm(e, t) {
        if (typeof t != "function")
          throw new Tt(d);
        return e = ae(e), function() {
          if (--e < 1)
            return t.apply(this, arguments);
        };
      }
      function Cu(e, t, i) {
        return t = i ? r : t, t = e && t == null ? e.length : t, on(e, N, r, r, r, r, t);
      }
      function Ru(e, t) {
        var i;
        if (typeof t != "function")
          throw new Tt(d);
        return e = ae(e), function() {
          return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = r), i;
        };
      }
      var bo = ue(function(e, t, i) {
        var a = M;
        if (i.length) {
          var u = yn(i, sr(bo));
          a |= Y;
        }
        return on(e, a, t, i, u);
      }), ku = ue(function(e, t, i) {
        var a = M | F;
        if (i.length) {
          var u = yn(i, sr(ku));
          a |= Y;
        }
        return on(t, a, e, i, u);
      });
      function Au(e, t, i) {
        t = i ? r : t;
        var a = on(e, T, r, r, r, r, r, t);
        return a.placeholder = Au.placeholder, a;
      }
      function Tu(e, t, i) {
        t = i ? r : t;
        var a = on(e, H, r, r, r, r, r, t);
        return a.placeholder = Tu.placeholder, a;
      }
      function Ou(e, t, i) {
        var a, u, p, v, _, x, I = 0, L = !1, V = !1, K = !0;
        if (typeof e != "function")
          throw new Tt(d);
        t = Dt(t) || 0, Ae(i) && (L = !!i.leading, V = "maxWait" in i, p = V ? He(Dt(i.maxWait) || 0, t) : p, K = "trailing" in i ? !!i.trailing : K);
        function Q(Me) {
          var Gt = a, fn = u;
          return a = u = r, I = Me, v = e.apply(fn, Gt), v;
        }
        function ne(Me) {
          return I = Me, _ = Fr(de, t), L ? Q(Me) : v;
        }
        function le(Me) {
          var Gt = Me - x, fn = Me - I, Ju = t - Gt;
          return V ? je(Ju, p - fn) : Ju;
        }
        function re(Me) {
          var Gt = Me - x, fn = Me - I;
          return x === r || Gt >= t || Gt < 0 || V && fn >= p;
        }
        function de() {
          var Me = Ni();
          if (re(Me))
            return he(Me);
          _ = Fr(de, le(Me));
        }
        function he(Me) {
          return _ = r, K && a ? Q(Me) : (a = u = r, v);
        }
        function bt() {
          _ !== r && Bl(_), I = 0, a = x = u = _ = r;
        }
        function at() {
          return _ === r ? v : he(Ni());
        }
        function wt() {
          var Me = Ni(), Gt = re(Me);
          if (a = arguments, u = this, x = Me, Gt) {
            if (_ === r)
              return ne(x);
            if (V)
              return Bl(_), _ = Fr(de, t), Q(x);
          }
          return _ === r && (_ = Fr(de, t)), v;
        }
        return wt.cancel = bt, wt.flush = at, wt;
      }
      var qm = ue(function(e, t) {
        return bl(e, 1, t);
      }), Km = ue(function(e, t, i) {
        return bl(e, Dt(t) || 0, i);
      });
      function Ym(e) {
        return on(e, Re);
      }
      function Mi(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new Tt(d);
        var i = function() {
          var a = arguments, u = t ? t.apply(this, a) : a[0], p = i.cache;
          if (p.has(u))
            return p.get(u);
          var v = e.apply(this, a);
          return i.cache = p.set(u, v) || p, v;
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
      function Xm(e) {
        return Ru(2, e);
      }
      var Jm = Nh(function(e, t) {
        t = t.length == 1 && oe(t[0]) ? ke(t[0], gt(te())) : ke(Je(t, 1), gt(te()));
        var i = t.length;
        return ue(function(a) {
          for (var u = -1, p = je(a.length, i); ++u < p; )
            a[u] = t[u].call(this, a[u]);
          return mt(e, this, a);
        });
      }), wo = ue(function(e, t) {
        var i = yn(t, sr(wo));
        return on(e, Y, r, t, i);
      }), Iu = ue(function(e, t) {
        var i = yn(t, sr(Iu));
        return on(e, ee, r, t, i);
      }), Zm = an(function(e, t) {
        return on(e, ve, r, r, r, t);
      });
      function Qm(e, t) {
        if (typeof e != "function")
          throw new Tt(d);
        return t = t === r ? t : ae(t), ue(e, t);
      }
      function jm(e, t) {
        if (typeof e != "function")
          throw new Tt(d);
        return t = t == null ? 0 : He(ae(t), 0), ue(function(i) {
          var a = i[t], u = Sn(i, 0, t);
          return a && _n(u, a), mt(e, this, u);
        });
      }
      function eg(e, t, i) {
        var a = !0, u = !0;
        if (typeof e != "function")
          throw new Tt(d);
        return Ae(i) && (a = "leading" in i ? !!i.leading : a, u = "trailing" in i ? !!i.trailing : u), Ou(e, t, {
          leading: a,
          maxWait: t,
          trailing: u
        });
      }
      function tg(e) {
        return Cu(e, 1);
      }
      function ng(e, t) {
        return wo(io(t), e);
      }
      function rg() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return oe(e) ? e : [e];
      }
      function ig(e) {
        return It(e, k);
      }
      function sg(e, t) {
        return t = typeof t == "function" ? t : r, It(e, k, t);
      }
      function og(e) {
        return It(e, $ | k);
      }
      function ag(e, t) {
        return t = typeof t == "function" ? t : r, It(e, $ | k, t);
      }
      function lg(e, t) {
        return t == null || yl(e, t, Ge(t));
      }
      function zt(e, t) {
        return e === t || e !== e && t !== t;
      }
      var ug = Ti(qs), cg = Ti(function(e, t) {
        return e >= t;
      }), Mn = $l(function() {
        return arguments;
      }()) ? $l : function(e) {
        return Ie(e) && ye.call(e, "callee") && !fl.call(e, "callee");
      }, oe = C.isArray, fg = qa ? gt(qa) : yh;
      function dt(e) {
        return e != null && Fi(e.length) && !un(e);
      }
      function Ne(e) {
        return Ie(e) && dt(e);
      }
      function dg(e) {
        return e === !0 || e === !1 || Ie(e) && st(e) == yr;
      }
      var $n = Cp || Io, pg = Ka ? gt(Ka) : bh;
      function hg(e) {
        return Ie(e) && e.nodeType === 1 && !Ur(e);
      }
      function vg(e) {
        if (e == null)
          return !0;
        if (dt(e) && (oe(e) || typeof e == "string" || typeof e.splice == "function" || $n(e) || or(e) || Mn(e)))
          return !e.length;
        var t = et(e);
        if (t == Ut || t == Bt)
          return !e.size;
        if (Vr(e))
          return !Xs(e).length;
        for (var i in e)
          if (ye.call(e, i))
            return !1;
        return !0;
      }
      function mg(e, t) {
        return Dr(e, t);
      }
      function gg(e, t, i) {
        i = typeof i == "function" ? i : r;
        var a = i ? i(e, t) : r;
        return a === r ? Dr(e, t, r, i) : !!a;
      }
      function xo(e) {
        if (!Ie(e))
          return !1;
        var t = st(e);
        return t == Zr || t == Uf || typeof e.message == "string" && typeof e.name == "string" && !Ur(e);
      }
      function _g(e) {
        return typeof e == "number" && pl(e);
      }
      function un(e) {
        if (!Ae(e))
          return !1;
        var t = st(e);
        return t == Qr || t == ba || t == ya || t == Hf;
      }
      function Lu(e) {
        return typeof e == "number" && e == ae(e);
      }
      function Fi(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= xe;
      }
      function Ae(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function Ie(e) {
        return e != null && typeof e == "object";
      }
      var Pu = Ya ? gt(Ya) : xh;
      function yg(e, t) {
        return e === t || Ys(e, t, fo(t));
      }
      function bg(e, t, i) {
        return i = typeof i == "function" ? i : r, Ys(e, t, fo(t), i);
      }
      function wg(e) {
        return Du(e) && e != +e;
      }
      function xg(e) {
        if (sv(e))
          throw new se(c);
        return Cl(e);
      }
      function Eg(e) {
        return e === null;
      }
      function Sg(e) {
        return e == null;
      }
      function Du(e) {
        return typeof e == "number" || Ie(e) && st(e) == wr;
      }
      function Ur(e) {
        if (!Ie(e) || st(e) != tn)
          return !1;
        var t = di(e);
        if (t === null)
          return !0;
        var i = ye.call(t, "constructor") && t.constructor;
        return typeof i == "function" && i instanceof i && li.call(i) == bp;
      }
      var Eo = Xa ? gt(Xa) : Eh;
      function $g(e) {
        return Lu(e) && e >= -xe && e <= xe;
      }
      var Nu = Ja ? gt(Ja) : Sh;
      function Ui(e) {
        return typeof e == "string" || !oe(e) && Ie(e) && st(e) == Er;
      }
      function yt(e) {
        return typeof e == "symbol" || Ie(e) && st(e) == jr;
      }
      var or = Za ? gt(Za) : $h;
      function Cg(e) {
        return e === r;
      }
      function Rg(e) {
        return Ie(e) && et(e) == Sr;
      }
      function kg(e) {
        return Ie(e) && st(e) == zf;
      }
      var Ag = Ti(Js), Tg = Ti(function(e, t) {
        return e <= t;
      });
      function Mu(e) {
        if (!e)
          return [];
        if (dt(e))
          return Ui(e) ? Ht(e) : ft(e);
        if (Rr && e[Rr])
          return lp(e[Rr]());
        var t = et(e), i = t == Ut ? Ms : t == Bt ? si : ar;
        return i(e);
      }
      function cn(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Dt(e), e === ze || e === -ze) {
          var t = e < 0 ? -1 : 1;
          return t * Gn;
        }
        return e === e ? e : 0;
      }
      function ae(e) {
        var t = cn(e), i = t % 1;
        return t === t ? i ? t - i : t : 0;
      }
      function Vu(e) {
        return e ? Ln(ae(e), 0, Oe) : 0;
      }
      function Dt(e) {
        if (typeof e == "number")
          return e;
        if (yt(e))
          return Ee;
        if (Ae(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = Ae(t) ? t + "" : t;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = rl(e);
        var i = fd.test(e);
        return i || pd.test(e) ? Gd(e.slice(2), i ? 2 : 8) : cd.test(e) ? Ee : +e;
      }
      function Fu(e) {
        return Jt(e, pt(e));
      }
      function Og(e) {
        return e ? Ln(ae(e), -xe, xe) : e === 0 ? e : 0;
      }
      function _e(e) {
        return e == null ? "" : _t(e);
      }
      var Ig = rr(function(e, t) {
        if (Vr(t) || dt(t)) {
          Jt(t, Ge(t), e);
          return;
        }
        for (var i in t)
          ye.call(t, i) && Ir(e, i, t[i]);
      }), Uu = rr(function(e, t) {
        Jt(t, pt(t), e);
      }), Bi = rr(function(e, t, i, a) {
        Jt(t, pt(t), e, a);
      }), Lg = rr(function(e, t, i, a) {
        Jt(t, Ge(t), e, a);
      }), Pg = an(Ws);
      function Dg(e, t) {
        var i = nr(e);
        return t == null ? i : _l(i, t);
      }
      var Ng = ue(function(e, t) {
        e = we(e);
        var i = -1, a = t.length, u = a > 2 ? t[2] : r;
        for (u && ot(t[0], t[1], u) && (a = 1); ++i < a; )
          for (var p = t[i], v = pt(p), _ = -1, x = v.length; ++_ < x; ) {
            var I = v[_], L = e[I];
            (L === r || zt(L, jn[I]) && !ye.call(e, I)) && (e[I] = p[I]);
          }
        return e;
      }), Mg = ue(function(e) {
        return e.push(r, ru), mt(Bu, r, e);
      });
      function Vg(e, t) {
        return ja(e, te(t, 3), Xt);
      }
      function Fg(e, t) {
        return ja(e, te(t, 3), Gs);
      }
      function Ug(e, t) {
        return e == null ? e : zs(e, te(t, 3), pt);
      }
      function Bg(e, t) {
        return e == null ? e : El(e, te(t, 3), pt);
      }
      function Hg(e, t) {
        return e && Xt(e, te(t, 3));
      }
      function Wg(e, t) {
        return e && Gs(e, te(t, 3));
      }
      function zg(e) {
        return e == null ? [] : xi(e, Ge(e));
      }
      function Gg(e) {
        return e == null ? [] : xi(e, pt(e));
      }
      function So(e, t, i) {
        var a = e == null ? r : Pn(e, t);
        return a === r ? i : a;
      }
      function qg(e, t) {
        return e != null && ou(e, t, vh);
      }
      function $o(e, t) {
        return e != null && ou(e, t, mh);
      }
      var Kg = Ql(function(e, t, i) {
        t != null && typeof t.toString != "function" && (t = ui.call(t)), e[t] = i;
      }, Ro(ht)), Yg = Ql(function(e, t, i) {
        t != null && typeof t.toString != "function" && (t = ui.call(t)), ye.call(e, t) ? e[t].push(i) : e[t] = [i];
      }, te), Xg = ue(Pr);
      function Ge(e) {
        return dt(e) ? ml(e) : Xs(e);
      }
      function pt(e) {
        return dt(e) ? ml(e, !0) : Ch(e);
      }
      function Jg(e, t) {
        var i = {};
        return t = te(t, 3), Xt(e, function(a, u, p) {
          sn(i, t(a, u, p), a);
        }), i;
      }
      function Zg(e, t) {
        var i = {};
        return t = te(t, 3), Xt(e, function(a, u, p) {
          sn(i, u, t(a, u, p));
        }), i;
      }
      var Qg = rr(function(e, t, i) {
        Ei(e, t, i);
      }), Bu = rr(function(e, t, i, a) {
        Ei(e, t, i, a);
      }), jg = an(function(e, t) {
        var i = {};
        if (e == null)
          return i;
        var a = !1;
        t = ke(t, function(p) {
          return p = En(p, e), a || (a = p.length > 1), p;
        }), Jt(e, uo(e), i), a && (i = It(i, $ | S | k, Kh));
        for (var u = t.length; u--; )
          to(i, t[u]);
        return i;
      });
      function e_(e, t) {
        return Hu(e, Vi(te(t)));
      }
      var t_ = an(function(e, t) {
        return e == null ? {} : kh(e, t);
      });
      function Hu(e, t) {
        if (e == null)
          return {};
        var i = ke(uo(e), function(a) {
          return [a];
        });
        return t = te(t), Ll(e, i, function(a, u) {
          return t(a, u[0]);
        });
      }
      function n_(e, t, i) {
        t = En(t, e);
        var a = -1, u = t.length;
        for (u || (u = 1, e = r); ++a < u; ) {
          var p = e == null ? r : e[Zt(t[a])];
          p === r && (a = u, p = i), e = un(p) ? p.call(e) : p;
        }
        return e;
      }
      function r_(e, t, i) {
        return e == null ? e : Nr(e, t, i);
      }
      function i_(e, t, i, a) {
        return a = typeof a == "function" ? a : r, e == null ? e : Nr(e, t, i, a);
      }
      var Wu = tu(Ge), zu = tu(pt);
      function s_(e, t, i) {
        var a = oe(e), u = a || $n(e) || or(e);
        if (t = te(t, 4), i == null) {
          var p = e && e.constructor;
          u ? i = a ? new p() : [] : Ae(e) ? i = un(p) ? nr(di(e)) : {} : i = {};
        }
        return (u ? At : Xt)(e, function(v, _, x) {
          return t(i, v, _, x);
        }), i;
      }
      function o_(e, t) {
        return e == null ? !0 : to(e, t);
      }
      function a_(e, t, i) {
        return e == null ? e : Vl(e, t, io(i));
      }
      function l_(e, t, i, a) {
        return a = typeof a == "function" ? a : r, e == null ? e : Vl(e, t, io(i), a);
      }
      function ar(e) {
        return e == null ? [] : Ns(e, Ge(e));
      }
      function u_(e) {
        return e == null ? [] : Ns(e, pt(e));
      }
      function c_(e, t, i) {
        return i === r && (i = t, t = r), i !== r && (i = Dt(i), i = i === i ? i : 0), t !== r && (t = Dt(t), t = t === t ? t : 0), Ln(Dt(e), t, i);
      }
      function f_(e, t, i) {
        return t = cn(t), i === r ? (i = t, t = 0) : i = cn(i), e = Dt(e), gh(e, t, i);
      }
      function d_(e, t, i) {
        if (i && typeof i != "boolean" && ot(e, t, i) && (t = i = r), i === r && (typeof t == "boolean" ? (i = t, t = r) : typeof e == "boolean" && (i = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = cn(e), t === r ? (t = e, e = 0) : t = cn(t)), e > t) {
          var a = e;
          e = t, t = a;
        }
        if (i || e % 1 || t % 1) {
          var u = hl();
          return je(e + u * (t - e + zd("1e-" + ((u + "").length - 1))), t);
        }
        return Qs(e, t);
      }
      var p_ = ir(function(e, t, i) {
        return t = t.toLowerCase(), e + (i ? Gu(t) : t);
      });
      function Gu(e) {
        return Co(_e(e).toLowerCase());
      }
      function qu(e) {
        return e = _e(e), e && e.replace(vd, rp).replace(Pd, "");
      }
      function h_(e, t, i) {
        e = _e(e), t = _t(t);
        var a = e.length;
        i = i === r ? a : Ln(ae(i), 0, a);
        var u = i;
        return i -= t.length, i >= 0 && e.slice(i, u) == t;
      }
      function v_(e) {
        return e = _e(e), e && Xf.test(e) ? e.replace(Ea, ip) : e;
      }
      function m_(e) {
        return e = _e(e), e && td.test(e) ? e.replace(bs, "\\$&") : e;
      }
      var g_ = ir(function(e, t, i) {
        return e + (i ? "-" : "") + t.toLowerCase();
      }), __ = ir(function(e, t, i) {
        return e + (i ? " " : "") + t.toLowerCase();
      }), y_ = Xl("toLowerCase");
      function b_(e, t, i) {
        e = _e(e), t = ae(t);
        var a = t ? Zn(e) : 0;
        if (!t || a >= t)
          return e;
        var u = (t - a) / 2;
        return Ai(mi(u), i) + e + Ai(vi(u), i);
      }
      function w_(e, t, i) {
        e = _e(e), t = ae(t);
        var a = t ? Zn(e) : 0;
        return t && a < t ? e + Ai(t - a, i) : e;
      }
      function x_(e, t, i) {
        e = _e(e), t = ae(t);
        var a = t ? Zn(e) : 0;
        return t && a < t ? Ai(t - a, i) + e : e;
      }
      function E_(e, t, i) {
        return i || t == null ? t = 0 : t && (t = +t), Tp(_e(e).replace(ws, ""), t || 0);
      }
      function S_(e, t, i) {
        return (i ? ot(e, t, i) : t === r) ? t = 1 : t = ae(t), js(_e(e), t);
      }
      function $_() {
        var e = arguments, t = _e(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      var C_ = ir(function(e, t, i) {
        return e + (i ? "_" : "") + t.toLowerCase();
      });
      function R_(e, t, i) {
        return i && typeof i != "number" && ot(e, t, i) && (t = i = r), i = i === r ? Oe : i >>> 0, i ? (e = _e(e), e && (typeof t == "string" || t != null && !Eo(t)) && (t = _t(t), !t && Jn(e)) ? Sn(Ht(e), 0, i) : e.split(t, i)) : [];
      }
      var k_ = ir(function(e, t, i) {
        return e + (i ? " " : "") + Co(t);
      });
      function A_(e, t, i) {
        return e = _e(e), i = i == null ? 0 : Ln(ae(i), 0, e.length), t = _t(t), e.slice(i, i + t.length) == t;
      }
      function T_(e, t, i) {
        var a = f.templateSettings;
        i && ot(e, t, i) && (t = r), e = _e(e), t = Bi({}, t, a, nu);
        var u = Bi({}, t.imports, a.imports, nu), p = Ge(u), v = Ns(u, p), _, x, I = 0, L = t.interpolate || ei, V = "__p += '", K = Vs(
          (t.escape || ei).source + "|" + L.source + "|" + (L === Sa ? ud : ei).source + "|" + (t.evaluate || ei).source + "|$",
          "g"
        ), Q = "//# sourceURL=" + (ye.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Fd + "]") + `
`;
        e.replace(K, function(re, de, he, bt, at, wt) {
          return he || (he = bt), V += e.slice(I, wt).replace(md, sp), de && (_ = !0, V += `' +
__e(` + de + `) +
'`), at && (x = !0, V += `';
` + at + `;
__p += '`), he && (V += `' +
((__t = (` + he + `)) == null ? '' : __t) +
'`), I = wt + re.length, re;
        }), V += `';
`;
        var ne = ye.call(t, "variable") && t.variable;
        if (!ne)
          V = `with (obj) {
` + V + `
}
`;
        else if (ad.test(ne))
          throw new se(h);
        V = (x ? V.replace(Gf, "") : V).replace(qf, "$1").replace(Kf, "$1;"), V = "function(" + (ne || "obj") + `) {
` + (ne ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (_ ? ", __e = _.escape" : "") + (x ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + V + `return __p
}`;
        var le = Yu(function() {
          return me(p, Q + "return " + V).apply(r, v);
        });
        if (le.source = V, xo(le))
          throw le;
        return le;
      }
      function O_(e) {
        return _e(e).toLowerCase();
      }
      function I_(e) {
        return _e(e).toUpperCase();
      }
      function L_(e, t, i) {
        if (e = _e(e), e && (i || t === r))
          return rl(e);
        if (!e || !(t = _t(t)))
          return e;
        var a = Ht(e), u = Ht(t), p = il(a, u), v = sl(a, u) + 1;
        return Sn(a, p, v).join("");
      }
      function P_(e, t, i) {
        if (e = _e(e), e && (i || t === r))
          return e.slice(0, al(e) + 1);
        if (!e || !(t = _t(t)))
          return e;
        var a = Ht(e), u = sl(a, Ht(t)) + 1;
        return Sn(a, 0, u).join("");
      }
      function D_(e, t, i) {
        if (e = _e(e), e && (i || t === r))
          return e.replace(ws, "");
        if (!e || !(t = _t(t)))
          return e;
        var a = Ht(e), u = il(a, Ht(t));
        return Sn(a, u).join("");
      }
      function N_(e, t) {
        var i = G, a = q;
        if (Ae(t)) {
          var u = "separator" in t ? t.separator : u;
          i = "length" in t ? ae(t.length) : i, a = "omission" in t ? _t(t.omission) : a;
        }
        e = _e(e);
        var p = e.length;
        if (Jn(e)) {
          var v = Ht(e);
          p = v.length;
        }
        if (i >= p)
          return e;
        var _ = i - Zn(a);
        if (_ < 1)
          return a;
        var x = v ? Sn(v, 0, _).join("") : e.slice(0, _);
        if (u === r)
          return x + a;
        if (v && (_ += x.length - _), Eo(u)) {
          if (e.slice(_).search(u)) {
            var I, L = x;
            for (u.global || (u = Vs(u.source, _e($a.exec(u)) + "g")), u.lastIndex = 0; I = u.exec(L); )
              var V = I.index;
            x = x.slice(0, V === r ? _ : V);
          }
        } else if (e.indexOf(_t(u), _) != _) {
          var K = x.lastIndexOf(u);
          K > -1 && (x = x.slice(0, K));
        }
        return x + a;
      }
      function M_(e) {
        return e = _e(e), e && Yf.test(e) ? e.replace(xa, dp) : e;
      }
      var V_ = ir(function(e, t, i) {
        return e + (i ? " " : "") + t.toUpperCase();
      }), Co = Xl("toUpperCase");
      function Ku(e, t, i) {
        return e = _e(e), t = i ? r : t, t === r ? ap(e) ? vp(e) : Qd(e) : e.match(t) || [];
      }
      var Yu = ue(function(e, t) {
        try {
          return mt(e, r, t);
        } catch (i) {
          return xo(i) ? i : new se(i);
        }
      }), F_ = an(function(e, t) {
        return At(t, function(i) {
          i = Zt(i), sn(e, i, bo(e[i], e));
        }), e;
      });
      function U_(e) {
        var t = e == null ? 0 : e.length, i = te();
        return e = t ? ke(e, function(a) {
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
      function B_(e) {
        return dh(It(e, $));
      }
      function Ro(e) {
        return function() {
          return e;
        };
      }
      function H_(e, t) {
        return e == null || e !== e ? t : e;
      }
      var W_ = Zl(), z_ = Zl(!0);
      function ht(e) {
        return e;
      }
      function ko(e) {
        return Rl(typeof e == "function" ? e : It(e, $));
      }
      function G_(e) {
        return Al(It(e, $));
      }
      function q_(e, t) {
        return Tl(e, It(t, $));
      }
      var K_ = ue(function(e, t) {
        return function(i) {
          return Pr(i, e, t);
        };
      }), Y_ = ue(function(e, t) {
        return function(i) {
          return Pr(e, i, t);
        };
      });
      function Ao(e, t, i) {
        var a = Ge(t), u = xi(t, a);
        i == null && !(Ae(t) && (u.length || !a.length)) && (i = t, t = e, e = this, u = xi(t, Ge(t)));
        var p = !(Ae(i) && "chain" in i) || !!i.chain, v = un(e);
        return At(u, function(_) {
          var x = t[_];
          e[_] = x, v && (e.prototype[_] = function() {
            var I = this.__chain__;
            if (p || I) {
              var L = e(this.__wrapped__), V = L.__actions__ = ft(this.__actions__);
              return V.push({ func: x, args: arguments, thisArg: e }), L.__chain__ = I, L;
            }
            return x.apply(e, _n([this.value()], arguments));
          });
        }), e;
      }
      function X_() {
        return Xe._ === this && (Xe._ = wp), this;
      }
      function To() {
      }
      function J_(e) {
        return e = ae(e), ue(function(t) {
          return Ol(t, e);
        });
      }
      var Z_ = oo(ke), Q_ = oo(Qa), j_ = oo(Os);
      function Xu(e) {
        return ho(e) ? Is(Zt(e)) : Ah(e);
      }
      function ey(e) {
        return function(t) {
          return e == null ? r : Pn(e, t);
        };
      }
      var ty = jl(), ny = jl(!0);
      function Oo() {
        return [];
      }
      function Io() {
        return !1;
      }
      function ry() {
        return {};
      }
      function iy() {
        return "";
      }
      function sy() {
        return !0;
      }
      function oy(e, t) {
        if (e = ae(e), e < 1 || e > xe)
          return [];
        var i = Oe, a = je(e, Oe);
        t = te(t), e -= Oe;
        for (var u = Ds(a, t); ++i < e; )
          t(i);
        return u;
      }
      function ay(e) {
        return oe(e) ? ke(e, Zt) : yt(e) ? [e] : ft(vu(_e(e)));
      }
      function ly(e) {
        var t = ++yp;
        return _e(e) + t;
      }
      var uy = ki(function(e, t) {
        return e + t;
      }, 0), cy = ao("ceil"), fy = ki(function(e, t) {
        return e / t;
      }, 1), dy = ao("floor");
      function py(e) {
        return e && e.length ? wi(e, ht, qs) : r;
      }
      function hy(e, t) {
        return e && e.length ? wi(e, te(t, 2), qs) : r;
      }
      function vy(e) {
        return tl(e, ht);
      }
      function my(e, t) {
        return tl(e, te(t, 2));
      }
      function gy(e) {
        return e && e.length ? wi(e, ht, Js) : r;
      }
      function _y(e, t) {
        return e && e.length ? wi(e, te(t, 2), Js) : r;
      }
      var yy = ki(function(e, t) {
        return e * t;
      }, 1), by = ao("round"), wy = ki(function(e, t) {
        return e - t;
      }, 0);
      function xy(e) {
        return e && e.length ? Ps(e, ht) : 0;
      }
      function Ey(e, t) {
        return e && e.length ? Ps(e, te(t, 2)) : 0;
      }
      return f.after = Gm, f.ary = Cu, f.assign = Ig, f.assignIn = Uu, f.assignInWith = Bi, f.assignWith = Lg, f.at = Pg, f.before = Ru, f.bind = bo, f.bindAll = F_, f.bindKey = ku, f.castArray = rg, f.chain = Eu, f.chunk = dv, f.compact = pv, f.concat = hv, f.cond = U_, f.conforms = B_, f.constant = Ro, f.countBy = xm, f.create = Dg, f.curry = Au, f.curryRight = Tu, f.debounce = Ou, f.defaults = Ng, f.defaultsDeep = Mg, f.defer = qm, f.delay = Km, f.difference = vv, f.differenceBy = mv, f.differenceWith = gv, f.drop = _v, f.dropRight = yv, f.dropRightWhile = bv, f.dropWhile = wv, f.fill = xv, f.filter = Sm, f.flatMap = Rm, f.flatMapDeep = km, f.flatMapDepth = Am, f.flatten = yu, f.flattenDeep = Ev, f.flattenDepth = Sv, f.flip = Ym, f.flow = W_, f.flowRight = z_, f.fromPairs = $v, f.functions = zg, f.functionsIn = Gg, f.groupBy = Tm, f.initial = Rv, f.intersection = kv, f.intersectionBy = Av, f.intersectionWith = Tv, f.invert = Kg, f.invertBy = Yg, f.invokeMap = Im, f.iteratee = ko, f.keyBy = Lm, f.keys = Ge, f.keysIn = pt, f.map = Di, f.mapKeys = Jg, f.mapValues = Zg, f.matches = G_, f.matchesProperty = q_, f.memoize = Mi, f.merge = Qg, f.mergeWith = Bu, f.method = K_, f.methodOf = Y_, f.mixin = Ao, f.negate = Vi, f.nthArg = J_, f.omit = jg, f.omitBy = e_, f.once = Xm, f.orderBy = Pm, f.over = Z_, f.overArgs = Jm, f.overEvery = Q_, f.overSome = j_, f.partial = wo, f.partialRight = Iu, f.partition = Dm, f.pick = t_, f.pickBy = Hu, f.property = Xu, f.propertyOf = ey, f.pull = Pv, f.pullAll = wu, f.pullAllBy = Dv, f.pullAllWith = Nv, f.pullAt = Mv, f.range = ty, f.rangeRight = ny, f.rearg = Zm, f.reject = Vm, f.remove = Vv, f.rest = Qm, f.reverse = _o, f.sampleSize = Um, f.set = r_, f.setWith = i_, f.shuffle = Bm, f.slice = Fv, f.sortBy = zm, f.sortedUniq = qv, f.sortedUniqBy = Kv, f.split = R_, f.spread = jm, f.tail = Yv, f.take = Xv, f.takeRight = Jv, f.takeRightWhile = Zv, f.takeWhile = Qv, f.tap = pm, f.throttle = eg, f.thru = Pi, f.toArray = Mu, f.toPairs = Wu, f.toPairsIn = zu, f.toPath = ay, f.toPlainObject = Fu, f.transform = s_, f.unary = tg, f.union = jv, f.unionBy = em, f.unionWith = tm, f.uniq = nm, f.uniqBy = rm, f.uniqWith = im, f.unset = o_, f.unzip = yo, f.unzipWith = xu, f.update = a_, f.updateWith = l_, f.values = ar, f.valuesIn = u_, f.without = sm, f.words = Ku, f.wrap = ng, f.xor = om, f.xorBy = am, f.xorWith = lm, f.zip = um, f.zipObject = cm, f.zipObjectDeep = fm, f.zipWith = dm, f.entries = Wu, f.entriesIn = zu, f.extend = Uu, f.extendWith = Bi, Ao(f, f), f.add = uy, f.attempt = Yu, f.camelCase = p_, f.capitalize = Gu, f.ceil = cy, f.clamp = c_, f.clone = ig, f.cloneDeep = og, f.cloneDeepWith = ag, f.cloneWith = sg, f.conformsTo = lg, f.deburr = qu, f.defaultTo = H_, f.divide = fy, f.endsWith = h_, f.eq = zt, f.escape = v_, f.escapeRegExp = m_, f.every = Em, f.find = $m, f.findIndex = gu, f.findKey = Vg, f.findLast = Cm, f.findLastIndex = _u, f.findLastKey = Fg, f.floor = dy, f.forEach = Su, f.forEachRight = $u, f.forIn = Ug, f.forInRight = Bg, f.forOwn = Hg, f.forOwnRight = Wg, f.get = So, f.gt = ug, f.gte = cg, f.has = qg, f.hasIn = $o, f.head = bu, f.identity = ht, f.includes = Om, f.indexOf = Cv, f.inRange = f_, f.invoke = Xg, f.isArguments = Mn, f.isArray = oe, f.isArrayBuffer = fg, f.isArrayLike = dt, f.isArrayLikeObject = Ne, f.isBoolean = dg, f.isBuffer = $n, f.isDate = pg, f.isElement = hg, f.isEmpty = vg, f.isEqual = mg, f.isEqualWith = gg, f.isError = xo, f.isFinite = _g, f.isFunction = un, f.isInteger = Lu, f.isLength = Fi, f.isMap = Pu, f.isMatch = yg, f.isMatchWith = bg, f.isNaN = wg, f.isNative = xg, f.isNil = Sg, f.isNull = Eg, f.isNumber = Du, f.isObject = Ae, f.isObjectLike = Ie, f.isPlainObject = Ur, f.isRegExp = Eo, f.isSafeInteger = $g, f.isSet = Nu, f.isString = Ui, f.isSymbol = yt, f.isTypedArray = or, f.isUndefined = Cg, f.isWeakMap = Rg, f.isWeakSet = kg, f.join = Ov, f.kebabCase = g_, f.last = Pt, f.lastIndexOf = Iv, f.lowerCase = __, f.lowerFirst = y_, f.lt = Ag, f.lte = Tg, f.max = py, f.maxBy = hy, f.mean = vy, f.meanBy = my, f.min = gy, f.minBy = _y, f.stubArray = Oo, f.stubFalse = Io, f.stubObject = ry, f.stubString = iy, f.stubTrue = sy, f.multiply = yy, f.nth = Lv, f.noConflict = X_, f.noop = To, f.now = Ni, f.pad = b_, f.padEnd = w_, f.padStart = x_, f.parseInt = E_, f.random = d_, f.reduce = Nm, f.reduceRight = Mm, f.repeat = S_, f.replace = $_, f.result = n_, f.round = by, f.runInContext = b, f.sample = Fm, f.size = Hm, f.snakeCase = C_, f.some = Wm, f.sortedIndex = Uv, f.sortedIndexBy = Bv, f.sortedIndexOf = Hv, f.sortedLastIndex = Wv, f.sortedLastIndexBy = zv, f.sortedLastIndexOf = Gv, f.startCase = k_, f.startsWith = A_, f.subtract = wy, f.sum = xy, f.sumBy = Ey, f.template = T_, f.times = oy, f.toFinite = cn, f.toInteger = ae, f.toLength = Vu, f.toLower = O_, f.toNumber = Dt, f.toSafeInteger = Og, f.toString = _e, f.toUpper = I_, f.trim = L_, f.trimEnd = P_, f.trimStart = D_, f.truncate = N_, f.unescape = M_, f.uniqueId = ly, f.upperCase = V_, f.upperFirst = Co, f.each = Su, f.eachRight = $u, f.first = bu, Ao(f, function() {
        var e = {};
        return Xt(f, function(t, i) {
          ye.call(f.prototype, i) || (e[i] = t);
        }), e;
      }(), { chain: !1 }), f.VERSION = o, At(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        f[e].placeholder = f;
      }), At(["drop", "take"], function(e, t) {
        pe.prototype[e] = function(i) {
          i = i === r ? 1 : He(ae(i), 0);
          var a = this.__filtered__ && !t ? new pe(this) : this.clone();
          return a.__filtered__ ? a.__takeCount__ = je(i, a.__takeCount__) : a.__views__.push({
            size: je(i, Oe),
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
          return Pr(i, e, t);
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
        return this.take(Oe);
      }, Xt(pe.prototype, function(e, t) {
        var i = /^(?:filter|find|map|reject)|While$/.test(t), a = /^(?:head|last)$/.test(t), u = f[a ? "take" + (t == "last" ? "Right" : "") : t], p = a || /^find/.test(t);
        u && (f.prototype[t] = function() {
          var v = this.__wrapped__, _ = a ? [1] : arguments, x = v instanceof pe, I = _[0], L = x || oe(v), V = function(de) {
            var he = u.apply(f, _n([de], _));
            return a && K ? he[0] : he;
          };
          L && i && typeof I == "function" && I.length != 1 && (x = L = !1);
          var K = this.__chain__, Q = !!this.__actions__.length, ne = p && !K, le = x && !Q;
          if (!p && L) {
            v = le ? v : new pe(this);
            var re = e.apply(v, _);
            return re.__actions__.push({ func: Pi, args: [V], thisArg: r }), new Ot(re, K);
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
          return this[i](function(v) {
            return t.apply(oe(v) ? v : [], u);
          });
        };
      }), Xt(pe.prototype, function(e, t) {
        var i = f[t];
        if (i) {
          var a = i.name + "";
          ye.call(tr, a) || (tr[a] = []), tr[a].push({ name: t, func: i });
        }
      }), tr[Ri(r, F).name] = [{
        name: "wrapper",
        func: r
      }], pe.prototype.clone = Mp, pe.prototype.reverse = Vp, pe.prototype.value = Fp, f.prototype.at = hm, f.prototype.chain = vm, f.prototype.commit = mm, f.prototype.next = gm, f.prototype.plant = ym, f.prototype.reverse = bm, f.prototype.toJSON = f.prototype.valueOf = f.prototype.value = wm, f.prototype.first = f.prototype.head, Rr && (f.prototype[Rr] = _m), f;
    }, Qn = mp();
    An ? ((An.exports = Qn)._ = Qn, Rs._ = Qn) : Xe._ = Qn;
  }).call(Fn);
})(Qi, Qi.exports);
var Qe = Qi.exports;
function oc(n) {
  return n !== null && typeof n == "object" && "constructor" in n && n.constructor === Object;
}
function aa(n, s) {
  n === void 0 && (n = {}), s === void 0 && (s = {}), Object.keys(s).forEach(function(r) {
    typeof n[r] > "u" ? n[r] = s[r] : oc(s[r]) && oc(n[r]) && Object.keys(s[r]).length > 0 && aa(n[r], s[r]);
  });
}
var lf = {
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
function la() {
  var n = typeof document < "u" ? document : {};
  return aa(n, lf), n;
}
var S0 = {
  document: lf,
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
function uf() {
  var n = typeof window < "u" ? window : {};
  return aa(n, S0), n;
}
function $0(n, s) {
  n.prototype = Object.create(s.prototype), n.prototype.constructor = n, n.__proto__ = s;
}
function Jo(n) {
  return Jo = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Jo(n);
}
function ji(n, s) {
  return ji = Object.setPrototypeOf || function(o, l) {
    return o.__proto__ = l, o;
  }, ji(n, s);
}
function C0() {
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
  return C0() ? Ki = Reflect.construct : Ki = function(l, c, d) {
    var h = [null];
    h.push.apply(h, c);
    var m = Function.bind.apply(l, h), g = new m();
    return d && ji(g, d.prototype), g;
  }, Ki.apply(null, arguments);
}
function R0(n) {
  return Function.toString.call(n).indexOf("[native code]") !== -1;
}
function Zo(n) {
  var s = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Zo = function(o) {
    if (o === null || !R0(o))
      return o;
    if (typeof o != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof s < "u") {
      if (s.has(o))
        return s.get(o);
      s.set(o, l);
    }
    function l() {
      return Ki(o, arguments, Jo(this).constructor);
    }
    return l.prototype = Object.create(o.prototype, {
      constructor: {
        value: l,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ji(l, o);
  }, Zo(n);
}
function k0(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function A0(n) {
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
  $0(s, n);
  function s(r) {
    var o;
    return o = n.call.apply(n, [this].concat(r)) || this, A0(k0(o)), o;
  }
  return s;
}(/* @__PURE__ */ Zo(Array));
function ua(n) {
  n === void 0 && (n = []);
  var s = [];
  return n.forEach(function(r) {
    Array.isArray(r) ? s.push.apply(s, ua(r)) : s.push(r);
  }), s;
}
function T0(n) {
  for (var s = [], r = 0; r < n.length; r += 1)
    s.indexOf(n[r]) === -1 && s.push(n[r]);
  return s;
}
function O0(n) {
  return n.toLowerCase().replace(/-(.)/g, function(s, r) {
    return r.toUpperCase();
  });
}
function I0(n, s) {
  if (typeof n != "string")
    return [n];
  for (var r = [], o = s.querySelectorAll(n), l = 0; l < o.length; l += 1)
    r.push(o[l]);
  return r;
}
function be(n, s) {
  var r = uf(), o = la(), l = [];
  if (!s && n instanceof Bn)
    return n;
  if (!n)
    return new Bn(l);
  if (typeof n == "string") {
    var c = n.trim();
    if (c.indexOf("<") >= 0 && c.indexOf(">") >= 0) {
      var d = "div";
      c.indexOf("<li") === 0 && (d = "ul"), c.indexOf("<tr") === 0 && (d = "tbody"), (c.indexOf("<td") === 0 || c.indexOf("<th") === 0) && (d = "tr"), c.indexOf("<tbody") === 0 && (d = "table"), c.indexOf("<option") === 0 && (d = "select");
      var h = o.createElement(d);
      h.innerHTML = c;
      for (var m = 0; m < h.childNodes.length; m += 1)
        l.push(h.childNodes[m]);
    } else
      l = I0(n.trim(), s || o);
  } else if (n.nodeType || n === r || n === o)
    l.push(n);
  else if (Array.isArray(n)) {
    if (n instanceof Bn)
      return n;
    l = n;
  }
  return new Bn(T0(l));
}
be.fn = Bn.prototype;
function ac() {
  for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)
    s[r] = arguments[r];
  var o = ua(s.map(function(l) {
    return l.split(" ");
  }));
  return this.forEach(function(l) {
    var c;
    (c = l.classList).add.apply(c, o);
  }), this;
}
function lc() {
  for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)
    s[r] = arguments[r];
  var o = ua(s.map(function(l) {
    return l.split(" ");
  }));
  return this.forEach(function(l) {
    var c;
    (c = l.classList).remove.apply(c, o);
  }), this;
}
function uc(n, s) {
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
function cc() {
  var n = this[0];
  if (n) {
    var s = {};
    if (n.dataset)
      for (var r in n.dataset)
        s[r] = n.dataset[r];
    else
      for (var o = 0; o < n.attributes.length; o += 1) {
        var l = n.attributes[o];
        l.name.indexOf("data-") >= 0 && (s[O0(l.name.split("data-")[1])] = l.value);
      }
    for (var c in s)
      s[c] === "false" ? s[c] = !1 : s[c] === "true" ? s[c] = !0 : parseFloat(s[c]) === s[c] * 1 && (s[c] *= 1);
    return s;
  }
}
function fc(n) {
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
function dc() {
  for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)
    s[r] = arguments[r];
  var o = s[0], l = s[1], c = s[2], d = s[3];
  typeof s[1] == "function" && (o = s[0], c = s[1], d = s[2], l = void 0), d || (d = !1);
  function h(y) {
    var M = y.target;
    if (M) {
      var F = y.target.dom7EventData || [];
      if (F.indexOf(y) < 0 && F.unshift(y), be(M).is(l))
        c.apply(M, F);
      else
        for (var U = be(M).parents(), T = 0; T < U.length; T += 1)
          be(U[T]).is(l) && c.apply(U[T], F);
    }
  }
  function m(y) {
    var M = y && y.target ? y.target.dom7EventData || [] : [];
    M.indexOf(y) < 0 && M.unshift(y), c.apply(this, M);
  }
  for (var g = o.split(" "), E, $ = 0; $ < this.length; $ += 1) {
    var S = this[$];
    if (l)
      for (E = 0; E < g.length; E += 1) {
        var w = g[E];
        S.dom7LiveListeners || (S.dom7LiveListeners = {}), S.dom7LiveListeners[w] || (S.dom7LiveListeners[w] = []), S.dom7LiveListeners[w].push({
          listener: c,
          proxyListener: h
        }), S.addEventListener(w, h, d);
      }
    else
      for (E = 0; E < g.length; E += 1) {
        var k = g[E];
        S.dom7Listeners || (S.dom7Listeners = {}), S.dom7Listeners[k] || (S.dom7Listeners[k] = []), S.dom7Listeners[k].push({
          listener: c,
          proxyListener: m
        }), S.addEventListener(k, m, d);
      }
  }
  return this;
}
function pc() {
  for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)
    s[r] = arguments[r];
  var o = s[0], l = s[1], c = s[2], d = s[3];
  typeof s[1] == "function" && (o = s[0], c = s[1], d = s[2], l = void 0), d || (d = !1);
  for (var h = o.split(" "), m = 0; m < h.length; m += 1)
    for (var g = h[m], E = 0; E < this.length; E += 1) {
      var $ = this[E], S = void 0;
      if (!l && $.dom7Listeners ? S = $.dom7Listeners[g] : l && $.dom7LiveListeners && (S = $.dom7LiveListeners[g]), S && S.length)
        for (var k = S.length - 1; k >= 0; k -= 1) {
          var w = S[k];
          c && w.listener === c || c && w.listener && w.listener.dom7proxy && w.listener.dom7proxy === c ? ($.removeEventListener(g, w.proxyListener, d), S.splice(k, 1)) : c || ($.removeEventListener(g, w.proxyListener, d), S.splice(k, 1));
        }
    }
  return this;
}
function hc() {
  for (var n = 0; n < this.length; n += 1)
    this[n].style.display = "none";
  return this;
}
function vc(n) {
  return n ? (this.forEach(function(s, r) {
    n.apply(s, [s, r]);
  }), this) : this;
}
function mc(n) {
  if (typeof n > "u")
    return this[0] ? this[0].innerHTML : null;
  for (var s = 0; s < this.length; s += 1)
    this[s].innerHTML = n;
  return this;
}
function gc(n) {
  var s = uf(), r = la(), o = this[0], l, c;
  if (!o || typeof n > "u")
    return !1;
  if (typeof n == "string") {
    if (o.matches)
      return o.matches(n);
    if (o.webkitMatchesSelector)
      return o.webkitMatchesSelector(n);
    if (o.msMatchesSelector)
      return o.msMatchesSelector(n);
    for (l = be(n), c = 0; c < l.length; c += 1)
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
function _c() {
  for (var n, s = la(), r = 0; r < arguments.length; r += 1) {
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
function yc(n) {
  for (var s = [], r = 0; r < this.length; r += 1)
    for (var o = this[r].parentNode; o; )
      n ? be(o).is(n) && s.push(o) : s.push(o), o = o.parentNode;
  return be(s);
}
function bc(n) {
  for (var s = [], r = 0; r < this.length; r += 1)
    for (var o = this[r].querySelectorAll(n), l = 0; l < o.length; l += 1)
      s.push(o[l]);
  return be(s);
}
function wc(n) {
  for (var s = [], r = 0; r < this.length; r += 1)
    for (var o = this[r].children, l = 0; l < o.length; l += 1)
      (!n || be(o[l]).is(n)) && s.push(o[l]);
  return be(s);
}
var L0 = "resize scroll".split(" ");
function cf(n) {
  function s() {
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    if (typeof o[0] > "u") {
      for (var c = 0; c < this.length; c += 1)
        L0.indexOf(n) < 0 && (n in this[c] ? this[c][n]() : be(this[c]).trigger(n));
      return this;
    }
    return this.on.apply(this, [n].concat(o));
  }
  return s;
}
var xc = cf("click"), Ec = cf("focus");
hc && (be.fn.hide = hc);
_c && (be.fn.append = _c);
xc && (be.fn.click = xc);
dc && (be.fn.on = dc);
pc && (be.fn.off = pc);
Ec && (be.fn.focus = Ec);
uc && (be.fn.attr = uc);
fc && (be.fn.val = fc);
mc && (be.fn.html = mc);
cc && (be.fn.dataset = cc);
ac && (be.fn.addClass = ac);
lc && (be.fn.removeClass = lc);
wc && (be.fn.children = wc);
vc && (be.fn.each = vc);
bc && (be.fn.find = bc);
gc && (be.fn.is = gc);
yc && (be.fn.parents = yc);
const kS = globalThis.Node, AS = globalThis.Comment, TS = globalThis.Element, OS = globalThis.Text, IS = globalThis.Range, LS = globalThis.Selection, PS = globalThis.StaticRange;
let P0 = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((s, r) => (r &= 63, r < 36 ? s += r.toString(36) : r < 62 ? s += (r - 26).toString(36).toUpperCase() : r > 62 ? s += "-" : s += "_", s), "");
function DS(n = "r") {
  return `${n}-${P0()}`;
}
let D0 = class {
  constructor() {
    Le(this, "audio");
    Le(this, "src");
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
const vr = new D0();
function Sc(n) {
  const s = Math.floor(n / 60), r = n % 60, o = String(s).padStart(2, "0"), l = String(r).padStart(2, "0");
  return `${o}:${l}`;
}
class N0 {
  constructor(s) {
    Le(this, "accept");
    Le(this, "dom");
    Le(this, "isdestroy", !1);
    Le(this, "resolve");
    Le(this, "reject");
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
class $c {
  constructor(s) {
    Le(this, "cancelled", !1);
    Le(this, "timeoutId", null);
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
class M0 {
  constructor(s = 60) {
    Le(this, "isStop", !1);
    Le(this, "count", D(0));
    Le(this, "timeoutId", null);
    this.timeoutSeconds = s;
  }
  clearTimeout() {
    this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  get state() {
    return Ve(() => this.count.value);
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
function V0(n) {
  const { selection: s } = n;
  if (s) {
    const [r, o] = Rt.edges(s), l = Fe.range(n, r, o), c = Fe.string(n, l), d = c.trimEnd();
    if (d !== c) {
      const h = c.length - d.length, m = { ...o, offset: o.offset - h }, g = { ...s, anchor: r, focus: m };
      Pe.select(n, g);
    }
  }
}
function Cc(n, s) {
  Fe.withoutNormalizing(n, () => {
    const r = Fe.start(n, s), o = Fe.end(n, s);
    Pe.insertText(n, " ", { at: r }), Pe.insertText(n, " ", {
      at: { path: o.path, offset: o.offset + 1 }
    }), Pe.select(n, {
      anchor: { path: r.path, offset: r.offset + 1 },
      focus: { path: o.path, offset: o.offset + 1 }
    });
  });
}
function mr(n, s) {
  Fe.withoutNormalizing(n, () => {
    const r = Fe.before(n, s), o = Fe.after(n, s);
    if (!r || !o)
      return;
    const l = {
      anchor: { path: r.path, offset: r.offset - 1 },
      focus: { path: r.path, offset: r.offset }
    }, c = {
      anchor: { path: o.path, offset: o.offset },
      focus: { path: o.path, offset: o.offset + 1 }
    };
    Fe.string(n, l) === " " && Pe.delete(n, { at: l }), Fe.string(n, c) === " " && Pe.delete(n, { at: c });
  });
}
const F0 = {
  type: "ssml-audio",
  renderElem: (n, s, r) => s ? U0(n, s, r) : B0(n, r)
};
function U0(n, s, r) {
  const { remark: o, src: l } = n;
  return B("span.ssml-wrapper", [
    B(
      "span.remark",
      {
        props: { contentEditable: !1 },
        style: {
          backgroundColor: "var(--ssml-audio)"
        }
      },
      [
        B("span.iconfont.icon-roundclosefill", {
          on: {
            click: Qe.throttle((c) => {
              c.preventDefault(), vr.stop(l);
              const d = ie.findPath(r, n);
              mr(r, d), Pe.unwrapNodes(r, { at: d });
            })
          }
        }),
        B("span.iconfont.icon-play", {
          on: {
            click: Qe.throttle((c) => {
              c.preventDefault(), vr.play(l);
            })
          }
        }),
        B("span.data-content", { attrs: { "data-content": o } })
      ]
    ),
    B("span.data-content", {
      props: { contentEditable: !1 },
      attrs: { "data-content": "{" },
      style: { color: "var(--ssml-audio)" }
    }),
    B("span", s),
    B("span.data-content", {
      props: { contentEditable: !1 },
      attrs: { "data-content": "}" },
      style: { color: "var(--ssml-audio)" }
    })
  ]);
}
function B0(n, s) {
  const { remark: r, src: o } = n;
  return B(
    "span.ssml-wrapper",
    {
      props: { contentEditable: !1 }
    },
    [
      B(
        "span.remark",
        {
          style: {
            backgroundColor: "var(--ssml-audio)"
          }
        },
        [
          B("span.iconfont.icon-roundclosefill", {
            on: {
              click: Qe.throttle((l) => {
                l.preventDefault(), vr.stop(o);
                const c = ie.findPath(s, n);
                Pe.delete(s, { at: c });
              })
            }
          }),
          B("span.iconfont.icon-play", {
            on: {
              click: Qe.throttle((l) => {
                l.preventDefault(), vr.play(o);
              })
            }
          }),
          B("span.data-content", { attrs: { "data-content": r } })
        ]
      ),
      B("span.iconfont.icon-music", {
        style: { color: "var(--ssml-audio)" }
      })
    ]
  );
}
const H0 = {
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
}, W0 = {
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
}, z0 = {
  editorPlugin: E0,
  renderElems: [F0],
  elemsToHtml: [H0],
  parseElemsHtml: [W0]
}, G0 = (n) => {
  const { isInline: s, isVoid: r } = n, o = n;
  return o.isInline = (l) => ie.getNodeType(l) === "ssml-break" ? !0 : s(l), o.isVoid = (l) => ie.getNodeType(l) === "ssml-break" ? !0 : r(l), o;
}, q0 = {
  type: "ssml-break",
  renderElem: (n, s, r) => {
    const { remark: o } = n;
    return B(
      "span.ssml-wrapper",
      {
        props: { contentEditable: !1 }
      },
      [
        B(
          "span.remark",
          {
            style: {
              backgroundColor: "var(--ssml-break)"
            }
          },
          [
            B("span.iconfont.icon-roundclosefill", {
              on: {
                click: Qe.throttle((l) => {
                  l.preventDefault();
                  const c = ie.findPath(r, n);
                  Pe.delete(r, { at: c });
                })
              }
            }),
            B("span.data-content", { attrs: { "data-content": o } })
          ]
        ),
        B("span.iconfont.icon-tingdun", {
          style: { color: "var(--ssml-break)" }
        })
      ]
    );
  }
}, K0 = {
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
}, Y0 = {
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
}, X0 = {
  editorPlugin: G0,
  renderElems: [q0],
  elemsToHtml: [K0],
  parseElemsHtml: [Y0]
}, J0 = (n) => {
  const { isInline: s, isVoid: r } = n, o = n;
  return o.isInline = (l) => ie.getNodeType(l) === "ssml-emphasis" ? !0 : s(l), o.isVoid = (l) => ie.getNodeType(l) === "ssml-emphasis" ? !1 : r(l), o;
}, Z0 = {
  type: "ssml-emphasis",
  renderElem: (n, s, r) => {
    const { remark: o } = n;
    return B("span.ssml-wrapper", [
      B(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-emphasis)"
          }
        },
        [
          B("span.iconfont.icon-roundclosefill", {
            on: {
              click: Qe.throttle((l) => {
                l.preventDefault();
                const c = ie.findPath(r, n);
                Pe.unwrapNodes(r, { at: c });
              })
            }
          }),
          B("span.data-content", { attrs: { "data-content": o } })
        ]
      ),
      B("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-emphasis)" }
      }),
      B("span", s),
      B("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-emphasis)" }
      })
    ]);
  }
}, Q0 = {
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
}, j0 = {
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
}, eb = {
  editorPlugin: J0,
  renderElems: [Z0],
  elemsToHtml: [Q0],
  parseElemsHtml: [j0]
}, tb = (n) => {
  const { isInline: s, isVoid: r } = n, o = n;
  return o.isInline = (l) => ie.getNodeType(l) === "ssml-mstts:express-as" ? !0 : s(l), o.isVoid = (l) => ie.getNodeType(l) === "ssml-mstts:express-as" ? !1 : r(l), o;
}, nb = {
  type: "ssml-mstts:express-as",
  renderElem: (n, s, r) => {
    const { remark: o } = n;
    return B("span.ssml-wrapper", [
      B(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-mstts--express-as)"
          }
        },
        [
          B("span.iconfont.icon-roundclosefill", {
            on: {
              click: Qe.throttle((l) => {
                l.preventDefault();
                const c = ie.findPath(r, n);
                Pe.unwrapNodes(r, { at: c });
              })
            }
          }),
          B("span.data-content", { attrs: { "data-content": o } })
        ]
      ),
      B("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-mstts--express-as)" }
      }),
      B("span", s),
      B("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-mstts--express-as)" }
      })
    ]);
  }
}, rb = {
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
}, ib = {
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
}, sb = {
  editorPlugin: tb,
  renderElems: [nb],
  elemsToHtml: [rb],
  parseElemsHtml: [ib]
}, ob = (n) => {
  const { isInline: s, isVoid: r } = n, o = n;
  return o.isInline = (l) => ie.getNodeType(l) === "ssml-p" ? !0 : s(l), o.isVoid = (l) => ie.getNodeType(l) === "ssml-p" ? !1 : r(l), o;
}, ab = {
  type: "ssml-p",
  renderElem: (n, s, r) => {
    const { remark: o } = n;
    return B("span.ssml-wrapper", [
      B(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-p)"
          }
        },
        [
          B("span.iconfont.icon-roundclosefill", {
            on: {
              click: Qe.throttle((l) => {
                l.preventDefault();
                const c = ie.findPath(r, n);
                Pe.unwrapNodes(r, { at: c });
              })
            }
          }),
          B("span.data-content", { attrs: { "data-content": o } })
        ]
      ),
      B("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-p)" }
      }),
      B("span", s),
      B("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-p)" }
      })
    ]);
  }
}, lb = {
  type: "ssml-p",
  elemToHtml: (n, s) => {
    const { remark: r } = n;
    return `<span
          data-w-e-type="ssml-p"
          data-w-e-is-inline
          data-ow-remark="${r}"
        >${s}</span>`;
  }
}, ub = {
  selector: 'span[data-w-e-type="ssml-p"]',
  parseElemHtml: (n, s) => ({
    type: "ssml-p",
    remark: n.getAttribute("data-ow-remark") || "",
    children: s
  })
}, cb = {
  editorPlugin: ob,
  renderElems: [ab],
  elemsToHtml: [lb],
  parseElemsHtml: [ub]
}, fb = (n) => {
  const { isInline: s, isVoid: r } = n, o = n;
  return o.isInline = (l) => ie.getNodeType(l) === "ssml-phoneme" ? !0 : s(l), o.isVoid = (l) => ie.getNodeType(l) === "ssml-phoneme" ? !1 : r(l), o;
}, db = {
  type: "ssml-phoneme",
  renderElem: (n, s, r) => {
    const { remark: o } = n;
    return B("span.ssml-wrapper", [
      B(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-phoneme)"
          }
        },
        [
          B("span.iconfont.icon-roundclosefill", {
            on: {
              click: Qe.throttle((l) => {
                l.preventDefault();
                const c = ie.findPath(r, n);
                mr(r, c), Pe.unwrapNodes(r, { at: c });
              })
            }
          }),
          B("span.data-content", { attrs: { "data-content": o } })
        ]
      ),
      B("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-phoneme)" }
      }),
      B("span", s),
      B("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-phoneme)" }
      })
    ]);
  }
}, pb = {
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
}, hb = {
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
}, vb = {
  editorPlugin: fb,
  renderElems: [db],
  elemsToHtml: [pb],
  parseElemsHtml: [hb]
}, mb = (n) => {
  const { isInline: s, isVoid: r } = n, o = n;
  return o.isInline = (l) => ie.getNodeType(l) === "ssml-prosody" ? !0 : s(l), o.isVoid = (l) => ie.getNodeType(l) === "ssml-prosody" ? !1 : r(l), o;
}, gb = {
  type: "ssml-prosody",
  renderElem: (n, s, r) => {
    const { remark: o } = n;
    return B("span.ssml-wrapper", [
      B(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-prosody)"
          }
        },
        [
          B("span.iconfont.icon-roundclosefill", {
            on: {
              click: Qe.throttle((l) => {
                l.preventDefault();
                const c = ie.findPath(r, n);
                mr(r, c), Pe.unwrapNodes(r, { at: c });
              })
            }
          }),
          B("span.data-content", { attrs: { "data-content": o } })
        ]
      ),
      B("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-prosody)" }
      }),
      B("span", s),
      B("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-prosody)" }
      })
    ]);
  }
}, _b = {
  type: "ssml-prosody",
  elemToHtml: (n, s) => {
    const { remark: r, contour: o, pitch: l, range: c, rate: d, volume: h } = n;
    return `<span
          data-w-e-type="ssml-prosody"
          data-w-e-is-inline
          data-ow-remark="${r}"
          data-ow-contour="${o ?? ""}"
          data-ow-pitch="${l ?? ""}"
          data-ow-range="${c ?? ""}"
          data-ow-rate="${d ?? ""}"
          data-ow-volume="${h ?? ""}"
        >${s}</span>`;
  }
}, yb = {
  selector: 'span[data-w-e-type="ssml-prosody"]',
  parseElemHtml: (n, s) => {
    const r = n.getAttribute("data-ow-remark") || "", o = n.getAttribute("data-ow-contour") || "", l = n.getAttribute("data-ow-pitch ") || "", c = n.getAttribute("data-ow-range") || "", d = n.getAttribute("data-ow-rate") || void 0, h = n.getAttribute("data-ow-volume") || "";
    return {
      type: "ssml-prosody",
      remark: r,
      contour: o,
      pitch: l,
      range: c,
      rate: d,
      volume: h,
      children: s
    };
  }
}, bb = {
  editorPlugin: mb,
  renderElems: [gb],
  elemsToHtml: [_b],
  parseElemsHtml: [yb]
}, wb = (n) => {
  const { isInline: s, isVoid: r } = n, o = n;
  return o.isInline = (l) => ie.getNodeType(l) === "ssml-s" ? !0 : s(l), o.isVoid = (l) => ie.getNodeType(l) === "ssml-s" ? !1 : r(l), o;
}, xb = {
  type: "ssml-s",
  renderElem: (n, s, r) => {
    const { remark: o } = n;
    return B("span.ssml-wrapper", [
      B(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-s)"
          }
        },
        [
          B("span.iconfont.icon-roundclosefill", {
            on: {
              click: Qe.throttle((l) => {
                l.preventDefault();
                const c = ie.findPath(r, n);
                Pe.unwrapNodes(r, { at: c });
              })
            }
          }),
          B("span.data-content", { attrs: { "data-content": o } })
        ]
      ),
      B("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-s)" }
      }),
      B("span", s),
      B("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-s)" }
      })
    ]);
  }
}, Eb = {
  type: "ssml-s",
  elemToHtml: (n, s) => {
    const { remark: r } = n;
    return `<span
          data-w-e-type="ssml-s"
          data-w-e-is-inline
          data-ow-remark="${r}"
        >${s}</span>`;
  }
}, Sb = {
  selector: 'span[data-w-e-type="ssml-s"]',
  parseElemHtml: (n, s) => ({
    type: "ssml-s",
    remark: n.getAttribute("data-ow-remark") || "",
    children: s
  })
}, $b = {
  editorPlugin: wb,
  renderElems: [xb],
  elemsToHtml: [Eb],
  parseElemsHtml: [Sb]
}, Cb = (n) => {
  const { isInline: s, isVoid: r } = n, o = n;
  return o.isInline = (l) => ie.getNodeType(l) === "ssml-say-as" ? !0 : s(l), o.isVoid = (l) => ie.getNodeType(l) === "ssml-say-as" ? !1 : r(l), o;
}, Rb = {
  type: "ssml-say-as",
  renderElem: (n, s, r) => {
    const { remark: o } = n;
    return B("span.ssml-wrapper", [
      B(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-say-as)"
          }
        },
        [
          B("span.iconfont.icon-roundclosefill", {
            on: {
              click: Qe.throttle((l) => {
                l.preventDefault();
                const c = ie.findPath(r, n);
                mr(r, c), Pe.unwrapNodes(r, { at: c });
              })
            }
          }),
          B("span.data-content", { attrs: { "data-content": o } })
        ]
      ),
      B("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-say-as)" }
      }),
      B("span", s),
      B("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-say-as)" }
      })
    ]);
  }
}, kb = {
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
}, Ab = {
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
}, Tb = {
  editorPlugin: Cb,
  renderElems: [Rb],
  elemsToHtml: [kb],
  parseElemsHtml: [Ab]
}, Ob = (n) => {
  const { isInline: s, isVoid: r } = n, o = n;
  return o.isInline = (l) => ie.getNodeType(l) === "ssml-sub" ? !0 : s(l), o.isVoid = (l) => ie.getNodeType(l) === "ssml-sub" ? !1 : r(l), o;
}, Ib = {
  type: "ssml-sub",
  renderElem: (n, s, r) => {
    const { remark: o } = n;
    return B("span.ssml-wrapper", [
      B(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-sub)"
          }
        },
        [
          B("span.iconfont.icon-roundclosefill", {
            on: {
              click: Qe.throttle((l) => {
                l.preventDefault();
                const c = ie.findPath(r, n);
                mr(r, c), Pe.unwrapNodes(r, { at: c });
              })
            }
          }),
          B("span.data-content", { attrs: { "data-content": o } })
        ]
      ),
      B("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-sub)" }
      }),
      B("span", s),
      B("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-sub)" }
      })
    ]);
  }
}, Lb = {
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
}, Pb = {
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
}, Db = {
  editorPlugin: Ob,
  renderElems: [Ib],
  elemsToHtml: [Lb],
  parseElemsHtml: [Pb]
}, Nb = (n) => {
  const { isInline: s, isVoid: r } = n, o = n;
  return o.isInline = (l) => ie.getNodeType(l) === "ssml-voice" ? !0 : s(l), o.isVoid = (l) => ie.getNodeType(l) === "ssml-voice" ? !1 : r(l), o;
}, Mb = {
  type: "ssml-voice",
  renderElem: (n, s, r) => {
    const { remark: o } = n;
    return B("span.ssml-wrapper", [
      B(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--ssml-voice)"
          }
        },
        [
          B("span.iconfont.icon-roundclosefill", {
            on: {
              click: Qe.throttle((l) => {
                l.preventDefault();
                const c = ie.findPath(r, n);
                Pe.unwrapNodes(r, { at: c });
              })
            }
          }),
          B("span.data-content", { attrs: { "data-content": o } })
        ]
      ),
      B("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{" },
        style: { color: "var(--ssml-voice)" }
      }),
      B("span", s),
      B("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}" },
        style: { color: "var(--ssml-voice)" }
      })
    ]);
  }
}, Vb = {
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
}, Fb = {
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
}, Ub = {
  editorPlugin: Nb,
  renderElems: [Mb],
  elemsToHtml: [Vb],
  parseElemsHtml: [Fb]
}, Bb = (n) => {
  const { isInline: s, isVoid: r } = n, o = n;
  return o.isInline = (l) => ie.getNodeType(l) === "custom-management" ? !0 : s(l), o.isVoid = (l) => ie.getNodeType(l) === "custom-management" ? !1 : r(l), o;
}, Hb = "wangeditor-error", Wb = "ssml-element-click", Te = {
  ERROR: Hb,
  SSML_ELEMENT_CLICK: Wb
}, zb = "emitter-error", Gb = "emitter-view-click", qb = "emitter-view-keydown", Kb = "emitter-editor-created", nt = { ERROR: zb, VIEW_CLICK: Gb, VIEW_KEYDOWN: qb, EDITOR_CREATED: Kb }, Yb = {
  type: "custom-management",
  renderElem: (n, s, r) => {
    const { remark: o } = n;
    return B("span.ssml-wrapper", [
      B(
        "span.remark",
        {
          props: { contentEditable: !1 },
          style: {
            backgroundColor: "var(--custom-management)"
          },
          on: {
            mousedown: (l) => l.preventDefault(),
            click: Qe.throttle((l) => {
              l.preventDefault(), r.select(ie.findPath(r, n)), r.emit(Te.SSML_ELEMENT_CLICK, r, n);
            })
          }
        },
        [
          B("span.iconfont.icon-roundclosefill", {
            on: {
              click: Qe.throttle((l) => {
                l.preventDefault();
                const c = ie.findPath(r, n);
                mr(r, c), Pe.unwrapNodes(r, { at: c });
              })
            }
          }),
          B("span.data-content", { attrs: { "data-content": o } })
        ]
      ),
      B("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "{{" },
        style: { color: "var(--custom-management)" }
      }),
      B("span", s),
      B("span.data-content", {
        props: { contentEditable: !1 },
        attrs: { "data-content": "}}" },
        style: { color: "var(--custom-management)" }
      })
    ]);
  }
}, Xb = {
  type: "custom-management",
  elemToHtml: (n, s) => {
    const { remark: r, style: o, role: l, name: c, pitch: d, rate: h, custom: m } = n;
    return `<span
          data-w-e-type="custom-management"
          data-w-e-is-inline
          data-ow-remark="${r}"
          data-ow-style="${o}"
          data-ow-name="${c}"
          data-ow-role="${l}"
          data-ow-pitch="${d}"
          data-ow-rate="${h}"
          data-ow-custom="${JSON.stringify(m)}"
        >${s}</span>`;
  }
}, Jb = {
  selector: 'span[data-w-e-type="custom-management"]',
  parseElemHtml: (n, s) => {
    const r = n.getAttribute("data-ow-remark") || "", o = n.getAttribute("data-ow-name") || "", l = n.getAttribute("data-ow-role") || "", c = n.getAttribute("data-ow-style") || "", d = n.getAttribute("data-ow-pitch") || "", h = n.getAttribute("data-ow-rate") || "", m = n.getAttribute("data-ow-custom") || "{}";
    return {
      type: "custom-management",
      remark: r,
      name: o,
      role: l,
      style: c,
      pitch: d,
      rate: h,
      custom: JSON.parse(m),
      children: s
    };
  }
}, Zb = {
  editorPlugin: Bb,
  renderElems: [Yb],
  elemsToHtml: [Xb],
  parseElemsHtml: [Jb]
}, Qb = (n) => {
  const {
    deleteBackward: s,
    deleteForward: r,
    insertBreak: o,
    apply: l,
    normalizeNode: c,
    insertText: d,
    insertData: h,
    setFragmentData: m,
    insertNode: g
  } = n, E = n;
  E.deleteBackward = (S) => {
    s(S);
  }, E.deleteForward = (S) => {
    r(S);
  }, E.insertBreak = () => {
    o();
  }, E.normalizeNode = (S) => {
    c(S);
  }, E.apply = (S) => {
    l(S);
  }, E.insertData = (S) => {
    if (S.types.includes("application/x-slate-fragment"))
      return h(S);
    {
      const k = new DataTransfer();
      return k.setData("text/plain", S.getData("text/plain").trim()), h(k);
    }
  }, E.setFragmentData = (S) => {
    m(S);
    const k = S.getData("text/plain").replaceAll(/[\s]/gi, "");
    S.setData("text/plain", k);
  }, E.insertText = (S) => {
    d(S);
  };
  const $ = [
    "ssml-prosody",
    "ssml-sub",
    "custom-management",
    "ssml-phoneme",
    "ssml-say-as"
  ];
  return E.insertNode = (S) => {
    const k = ie.getNodeType(S);
    return $.includes(k) ? (n.selection && Cc(n, n.selection), Pe.insertNodes(n, S)) : k === "ssml-audio" && ra.string(S) ? (n.selection && Cc(n, n.selection), Pe.insertNodes(n, S)) : Fe.isVoid(n, S) ? (g(S), n.move(1)) : g(S);
  }, E;
};
const jb = {
  install() {
    xt.registerModule(z0), xt.registerModule(X0), xt.registerModule(eb), xt.registerModule(sb), xt.registerModule(cb), xt.registerModule(vb), xt.registerModule(bb), xt.registerModule($b), xt.registerModule(Tb), xt.registerModule(Db), xt.registerModule(Ub), xt.registerModule(Zb), xt.registerPlugin(Qb);
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
function MS() {
  return { label: "", value: "" };
}
function e1() {
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
function ca() {
  return {
    word: "",
    topFlag: "",
    category: "",
    gender: "",
    tag: ""
  };
}
class ff {
  constructor() {
    Le(this, "audio");
    Le(this, "isPlaying", D(!1));
    Le(this, "isLoading", D(!1));
    Le(this, "loadResolve");
    Le(this, "loadReject");
    this.audio = new Audio(), this.audio.addEventListener("canplaythrough", () => {
      var s;
      this.isLoading.value = !1, (s = this.loadResolve) == null || s.call(this);
    }), this.audio.addEventListener("play", () => {
      this.isPlaying.value = !0;
    }), this.audio.addEventListener("pause", () => {
      this.isPlaying.value = !1;
    }), this.audio.addEventListener("error", () => {
      var s;
      this.isLoading.value = !1, this.isPlaying.value = !1, (s = this.loadReject) == null || s.call(this);
    });
  }
  load(s) {
    return this.pause(), this.isPlaying.value = !1, this.isLoading.value = !0, this.audio.src = s, this.audio.load(), new Promise((r, o) => {
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
    return Ve(() => this.isPlaying.value ? "playing" : "paused");
  }
  get loadState() {
    return Ve(() => this.isLoading.value ? "loading" : "complete");
  }
}
const ls = as("--editor-try-play", () => {
  const n = zn(), s = De(new ff()), r = D(e1()), o = Ve(() => r.value), l = Ve(() => s.value);
  return { speaker: o, setSpeaker: (d) => {
    r.value = d, n.rootVoice.name = d.name;
  }, audioPlayer: l };
}), df = as("--editor-management-menu", () => ({ contentData: Ji(rf()) })), t1 = { class: "bar-button-icon" }, n1 = {
  class: "fw-normal",
  style: { "font-size": "0.85rem" }
}, r1 = /* @__PURE__ */ ce({
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
    return (l, c) => (z(), J("div", {
      class: $t(["bar-button px-2 py-1", { disabled: l.disabled }]),
      onClick: o,
      onMousedown: c[0] || (c[0] = it(() => {
      }, ["prevent"]))
    }, [
      O("div", t1, [
        O("span", {
          class: $t(["fs-3 iconfont-moyin", [`moyin-icon_${l.icon}`]])
        }, null, 2)
      ]),
      O("div", n1, Ce(l.text), 1)
    ], 34));
  }
});
const vt = (n, s) => {
  const r = n.__vccOpts || n;
  for (const [o, l] of s)
    r[o] = l;
  return r;
}, ct = /* @__PURE__ */ vt(r1, [["__scopeId", "data-v-2da9a7ca"]]);
const fa = /* @__PURE__ */ ce({
  __name: "bar-input",
  props: {
    type: {}
  },
  emits: ["submit"],
  setup(n, { expose: s, emit: r }) {
    const o = D(""), l = D();
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
    }), (h, m) => (z(), Ue(R(is), {
      onSubmit: it(d, ["prevent"])
    }, {
      default: j(() => [
        P(R(ss), {
          type: h.type,
          ref_key: "inputRef",
          ref: l,
          modelValue: o.value,
          "onUpdate:modelValue": m[0] || (m[0] = (g) => o.value = g)
        }, null, 8, ["type", "modelValue"])
      ]),
      _: 1
    }, 8, ["onSubmit"]));
  }
});
const i1 = /* @__PURE__ */ ce({
  __name: "bar-popover",
  props: {
    visible: { type: Boolean },
    trigger: {},
    hideAfter: {},
    width: {}
  },
  emits: ["update:visible"],
  setup(n) {
    return (s, r) => (z(), Ue(R(vn), {
      hideAfter: s.hideAfter,
      width: s.width,
      visible: s.visible,
      trigger: s.trigger,
      "onUpdate:visible": r[0] || (r[0] = (o) => s.$emit("update:visible", o))
    }, {
      reference: j(() => [
        en(s.$slots, "reference")
      ]),
      default: j(() => [
        en(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["hideAfter", "width", "visible", "trigger"]));
  }
});
function us(n) {
  return Vc() ? (Fc(n), !0) : !1;
}
function Vt(n) {
  return typeof n == "function" ? n() : R(n);
}
const pf = typeof window < "u" && typeof document < "u", s1 = (n) => n != null, o1 = Object.prototype.toString, a1 = (n) => o1.call(n) === "[object Object]", Yi = () => {
};
function l1(n, s = {}) {
  if (!Hn(n))
    return Go(n);
  const r = Array.isArray(n.value) ? Array.from({ length: n.value.length }) : {};
  for (const o in n.value)
    r[o] = Ry(() => ({
      get() {
        return n.value[o];
      },
      set(l) {
        var c;
        if ((c = Vt(s.replaceRef)) != null ? c : !0)
          if (Array.isArray(n.value)) {
            const h = [...n.value];
            h[o] = l, n.value = h;
          } else {
            const h = { ...n.value, [o]: l };
            Object.setPrototypeOf(h, Object.getPrototypeOf(n.value)), n.value = h;
          }
        else
          n.value[o] = l;
      }
    }));
  return r;
}
function hf(n, s = !0) {
  ta() ? Ct(n) : s ? n() : hr(n);
}
function Kt(n) {
  var s;
  const r = Vt(n);
  return (s = r == null ? void 0 : r.$el) != null ? s : r;
}
const Rn = pf ? window : void 0;
function pr(...n) {
  let s, r, o, l;
  if (typeof n[0] == "string" || Array.isArray(n[0]) ? ([r, o, l] = n, s = Rn) : [s, r, o, l] = n, !s)
    return Yi;
  Array.isArray(r) || (r = [r]), Array.isArray(o) || (o = [o]);
  const c = [], d = () => {
    c.forEach((E) => E()), c.length = 0;
  }, h = (E, $, S, k) => (E.addEventListener($, S, k), () => E.removeEventListener($, S, k)), m = Ke(
    () => [Kt(s), Vt(l)],
    ([E, $]) => {
      if (d(), !E)
        return;
      const S = a1($) ? { ...$ } : $;
      c.push(
        ...r.flatMap((k) => o.map((w) => h(E, k, w, S)))
      );
    },
    { immediate: !0, flush: "post" }
  ), g = () => {
    m(), d();
  };
  return us(g), g;
}
function u1() {
  const n = D(!1);
  return ta() && Ct(() => {
    n.value = !0;
  }), n;
}
function da(n) {
  const s = u1();
  return Ve(() => (s.value, !!n()));
}
function c1(n, s = {}) {
  const { window: r = Rn } = s, o = da(() => r && "matchMedia" in r && typeof r.matchMedia == "function");
  let l;
  const c = D(!1), d = (g) => {
    c.value = g.matches;
  }, h = () => {
    l && ("removeEventListener" in l ? l.removeEventListener("change", d) : l.removeListener(d));
  }, m = ky(() => {
    o.value && (h(), l = r.matchMedia(Vt(n)), "addEventListener" in l ? l.addEventListener("change", d) : l.addListener(d), c.value = l.matches);
  });
  return us(() => {
    m(), h(), l = void 0;
  }), c;
}
function pa(n, s = {}) {
  var r, o;
  const {
    pointerTypes: l,
    preventDefault: c,
    stopPropagation: d,
    exact: h,
    onMove: m,
    onEnd: g,
    onStart: E,
    initialValue: $,
    axis: S = "both",
    draggingElement: k = Rn,
    containerElement: w,
    handle: y = n
  } = s, M = D(
    (r = Vt($)) != null ? r : { x: 0, y: 0 }
  ), F = D(), U = (N) => l ? l.includes(N.pointerType) : !0, T = (N) => {
    Vt(c) && N.preventDefault(), Vt(d) && N.stopPropagation();
  }, H = (N) => {
    var ve;
    if (!U(N) || Vt(h) && N.target !== Vt(n))
      return;
    const G = ((ve = Vt(w)) != null ? ve : Vt(n)).getBoundingClientRect(), q = {
      x: N.clientX - G.left,
      y: N.clientY - G.top
    };
    (E == null ? void 0 : E(q, N)) !== !1 && (F.value = q, T(N));
  }, Y = (N) => {
    if (!U(N) || !F.value)
      return;
    let { x: ve, y: Re } = M.value;
    (S === "x" || S === "both") && (ve = N.clientX - F.value.x), (S === "y" || S === "both") && (Re = N.clientY - F.value.y), M.value = {
      x: ve,
      y: Re
    }, m == null || m(M.value, N), T(N);
  }, ee = (N) => {
    U(N) && F.value && (F.value = void 0, g == null || g(M.value, N), T(N));
  };
  if (pf) {
    const N = { capture: (o = s.capture) != null ? o : !0 };
    pr(y, "pointerdown", H, N), pr(k, "pointermove", Y, N), pr(k, "pointerup", ee, N);
  }
  return {
    ...l1(M),
    position: M,
    isDragging: Ve(() => !!F.value),
    style: Ve(
      () => `left:${M.value.x}px;top:${M.value.y}px;`
    )
  };
}
function vf(n, s, r = {}) {
  const { window: o = Rn, ...l } = r;
  let c;
  const d = da(() => o && "ResizeObserver" in o), h = () => {
    c && (c.disconnect(), c = void 0);
  }, m = Ve(
    () => Array.isArray(n) ? n.map(($) => Kt($)) : [Kt(n)]
  ), g = Ke(
    m,
    ($) => {
      if (h(), d.value && o) {
        c = new ResizeObserver(s);
        for (const S of $)
          S && c.observe(S, l);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), E = () => {
    h(), g();
  };
  return us(E), {
    isSupported: d,
    stop: E
  };
}
function Yr(n, s = {}) {
  const {
    reset: r = !0,
    windowResize: o = !0,
    windowScroll: l = !0,
    immediate: c = !0
  } = s, d = D(0), h = D(0), m = D(0), g = D(0), E = D(0), $ = D(0), S = D(0), k = D(0);
  function w() {
    const y = Kt(n);
    if (!y) {
      r && (d.value = 0, h.value = 0, m.value = 0, g.value = 0, E.value = 0, $.value = 0, S.value = 0, k.value = 0);
      return;
    }
    const M = y.getBoundingClientRect();
    d.value = M.height, h.value = M.bottom, m.value = M.left, g.value = M.right, E.value = M.top, $.value = M.width, S.value = M.x, k.value = M.y;
  }
  return vf(n, w), Ke(() => Kt(n), (y) => !y && w()), l && pr("scroll", w, { capture: !0, passive: !0 }), o && pr("resize", w, { passive: !0 }), hf(() => {
    c && w();
  }), {
    height: d,
    bottom: h,
    left: m,
    right: g,
    top: E,
    width: $,
    x: S,
    y: k,
    update: w
  };
}
function f1(n, s = { width: 0, height: 0 }, r = {}) {
  const { window: o = Rn, box: l = "content-box" } = r, c = Ve(() => {
    var m, g;
    return (g = (m = Kt(n)) == null ? void 0 : m.namespaceURI) == null ? void 0 : g.includes("svg");
  }), d = D(s.width), h = D(s.height);
  return vf(
    n,
    ([m]) => {
      const g = l === "border-box" ? m.borderBoxSize : l === "content-box" ? m.contentBoxSize : m.devicePixelContentBoxSize;
      if (o && c.value) {
        const E = Kt(n);
        if (E) {
          const $ = o.getComputedStyle(E);
          d.value = Number.parseFloat($.width), h.value = Number.parseFloat($.height);
        }
      } else if (g) {
        const E = Array.isArray(g) ? g : [g];
        d.value = E.reduce(($, { inlineSize: S }) => $ + S, 0), h.value = E.reduce(($, { blockSize: S }) => $ + S, 0);
      } else
        d.value = m.contentRect.width, h.value = m.contentRect.height;
    },
    r
  ), Ke(
    () => Kt(n),
    (m) => {
      d.value = m ? s.width : 0, h.value = m ? s.height : 0;
    }
  ), {
    width: d,
    height: h
  };
}
function d1(n, s, r = {}) {
  const {
    root: o,
    rootMargin: l = "0px",
    threshold: c = 0.1,
    window: d = Rn,
    immediate: h = !0
  } = r, m = da(() => d && "IntersectionObserver" in d), g = Ve(() => {
    const w = Vt(n);
    return (Array.isArray(w) ? w : [w]).map(Kt).filter(s1);
  });
  let E = Yi;
  const $ = D(h), S = m.value ? Ke(
    () => [g.value, Kt(o), $.value],
    ([w, y]) => {
      if (E(), !$.value || !w.length)
        return;
      const M = new IntersectionObserver(
        s,
        {
          root: Kt(y),
          rootMargin: l,
          threshold: c
        }
      );
      w.forEach((F) => F && M.observe(F)), E = () => {
        M.disconnect(), E = Yi;
      };
    },
    { immediate: h, flush: "post" }
  ) : Yi, k = () => {
    E(), S(), $.value = !1;
  };
  return us(k), {
    isSupported: m,
    isActive: $,
    pause() {
      E(), $.value = !1;
    },
    resume() {
      $.value = !0;
    },
    stop: k
  };
}
function cs(n, { window: s = Rn, scrollTarget: r } = {}) {
  const o = D(!1);
  return d1(
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
function p1(n = {}) {
  const {
    window: s = Rn,
    initialWidth: r = Number.POSITIVE_INFINITY,
    initialHeight: o = Number.POSITIVE_INFINITY,
    listenOrientation: l = !0,
    includeScrollbar: c = !0
  } = n, d = D(r), h = D(o), m = () => {
    s && (c ? (d.value = s.innerWidth, h.value = s.innerHeight) : (d.value = s.document.documentElement.clientWidth, h.value = s.document.documentElement.clientHeight));
  };
  if (m(), hf(m), pr("resize", m, { passive: !0 }), l) {
    const g = c1("(orientation: portrait)");
    Ke(g, () => m());
  }
  return { width: d, height: h };
}
const h1 = { class: "search-content w-100" }, v1 = { class: "ps-2 w-75" }, m1 = { class: "menu ps-2" }, g1 = { class: "flex flex-row pt-1" }, _1 = {
  class: "content-list overflow-x-hidden overflow-y-auto py-2",
  style: { height: "250px" }
}, y1 = ["onClick"], b1 = /* @__PURE__ */ O("span", { class: "iconfont icon-play" }, null, -1), w1 = { class: "ps-2" }, ha = /* @__PURE__ */ ce({
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
    const r = n, o = D(), l = D(""), c = D(""), d = D(""), h = D(""), m = D(r.dataList || []), g = D(r.sceneList || []), E = D(r.styleList || []), $ = cs(o);
    Ke($, (y) => {
      y && hr(() => {
        var M, F;
        (F = (M = o.value) == null ? void 0 : M.input) == null || F.focus();
      });
    }), Ct(async () => {
      m.value.length || await S(), g.value.length || (g.value = await r.fetchScene()), E.value.length || (E.value = await r.fetchStyle());
    });
    async function S() {
      m.value = await r.fetchData({
        word: l.value,
        menu: h.value,
        scene: c.value,
        style: d.value
      });
    }
    function k(y) {
      h.value = y, S();
    }
    function w(y) {
      s("submit", y);
    }
    return (y, M) => (z(), J("div", h1, [
      O("div", v1, [
        P(R(is), {
          onSubmit: it(S, ["prevent"])
        }, {
          default: j(() => [
            P(R(ss), {
              ref_key: "searchInputRef",
              ref: o,
              placeholder: "搜索",
              modelValue: l.value,
              "onUpdate:modelValue": M[0] || (M[0] = (F) => l.value = F),
              "suffix-icon": R(Dy)
            }, null, 8, ["modelValue", "suffix-icon"])
          ]),
          _: 1
        }, 8, ["onSubmit"])
      ]),
      O("div", m1, [
        P(R(Iy), {
          mode: "horizontal",
          "default-active": y.menus.length > 0 ? y.menus[0].value : "",
          onSelect: M[1] || (M[1] = (F) => k(F))
        }, {
          default: j(() => [
            (z(!0), J(We, null, lt(y.menus, (F, U) => (z(), Ue(R(Ly), {
              index: F.value,
              key: U
            }, {
              default: j(() => [
                Ze(Ce(F.label), 1)
              ]),
              _: 2
            }, 1032, ["index"]))), 128))
          ]),
          _: 1
        }, 8, ["default-active"])
      ]),
      O("div", g1, [
        P(R(Zu), {
          modelValue: c.value,
          "onUpdate:modelValue": M[2] || (M[2] = (F) => c.value = F),
          onChange: S,
          class: "m-1",
          size: "default"
        }, {
          default: j(() => [
            (z(!0), J(We, null, lt(g.value, (F) => (z(), Ue(R(Qu), {
              key: F.value,
              label: F.label,
              value: F.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        P(R(Zu), {
          modelValue: d.value,
          "onUpdate:modelValue": M[3] || (M[3] = (F) => d.value = F),
          onChange: S,
          class: "m-1",
          size: "default"
        }, {
          default: j(() => [
            (z(!0), J(We, null, lt(E.value, (F) => (z(), Ue(R(Qu), {
              key: F.value,
              label: F.label,
              value: F.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      O("ul", _1, [
        (z(!0), J(We, null, lt(m.value, (F, U) => (z(), J("li", {
          onClick: (T) => w(St(F)),
          class: "content-list-item clickable ps-2 py-2",
          key: U
        }, [
          b1,
          O("span", w1, Ce(F.label), 1)
        ], 8, y1))), 128))
      ])
    ]));
  }
});
const x1 = {}, E1 = { class: "content" };
function S1(n, s) {
  return z(), J("div", E1, [
    en(n.$slots, "default", {}, void 0, !0)
  ]);
}
const mf = /* @__PURE__ */ vt(x1, [["render", S1], ["__scopeId", "data-v-7beae5b9"]]), $1 = {}, C1 = { class: "bar-wrapper-item" };
function R1(n, s) {
  return z(), J("div", C1, [
    en(n.$slots, "default")
  ]);
}
const k1 = /* @__PURE__ */ vt($1, [["render", R1]]), A1 = { class: "bar-wrapper-group" }, T1 = { class: "group-items" }, O1 = /* @__PURE__ */ ce({
  __name: "bar-wrapper-group",
  props: {
    divider: {}
  },
  setup(n) {
    return (s, r) => (z(), J("div", A1, [
      O("div", T1, [
        en(s.$slots, "default", {}, void 0, !0)
      ]),
      O("div", {
        class: $t(["divider", [s.divider]])
      }, null, 2)
    ]));
  }
});
const fr = /* @__PURE__ */ vt(O1, [["__scopeId", "data-v-be31f837"]]);
function I1(n, s) {
  return `left:${n}px;top:${s}px`;
}
function va(n, s) {
  const { width: r, height: o } = f1(n), { width: l, height: c } = p1(), d = Ve(() => ({
    x: l.value - r.value,
    y: c.value - o.value
  }));
  return { style: Ve(() => {
    const m = s.value.x, g = s.value.y, E = m < 5 ? 5 : m > d.value.x ? d.value.x - 5 : m, $ = g < 5 ? 5 : g > d.value.y ? d.value.y - 5 : g;
    return I1(E, $);
  }) };
}
var Qo = { exports: {} }, gf = { exports: {} }, L1 = void 0, _f = function(n) {
  return n !== L1 && n !== null;
}, P1 = _f, D1 = {
  object: !0,
  function: !0,
  undefined: !0
  /* document.all */
}, N1 = function(n) {
  return P1(n) ? hasOwnProperty.call(D1, typeof n) : !1;
}, M1 = N1, V1 = function(n) {
  if (!M1(n))
    return !1;
  try {
    return n.constructor ? n.constructor.prototype === n : !1;
  } catch {
    return !1;
  }
}, F1 = V1, U1 = function(n) {
  if (typeof n != "function" || !hasOwnProperty.call(n, "length"))
    return !1;
  try {
    if (typeof n.length != "number" || typeof n.call != "function" || typeof n.apply != "function")
      return !1;
  } catch {
    return !1;
  }
  return !F1(n);
}, B1 = U1, H1 = /^\s*class[\s{/}]/, W1 = Function.prototype.toString, z1 = function(n) {
  return !(!B1(n) || H1.test(W1.call(n)));
}, G1 = function() {
  var n = Object.assign, s;
  return typeof n != "function" ? !1 : (s = { foo: "raz" }, n(s, { bar: "dwa" }, { trzy: "trzy" }), s.foo + s.bar + s.trzy === "razdwatrzy");
}, Mo, Rc;
function q1() {
  return Rc || (Rc = 1, Mo = function() {
    try {
      return Object.keys("primitive"), !0;
    } catch {
      return !1;
    }
  }), Mo;
}
var K1 = function() {
}, Y1 = K1(), ma = function(n) {
  return n !== Y1 && n !== null;
}, Vo, kc;
function X1() {
  if (kc)
    return Vo;
  kc = 1;
  var n = ma, s = Object.keys;
  return Vo = function(r) {
    return s(n(r) ? Object(r) : r);
  }, Vo;
}
var Fo, Ac;
function J1() {
  return Ac || (Ac = 1, Fo = q1()() ? Object.keys : X1()), Fo;
}
var Uo, Tc;
function Z1() {
  if (Tc)
    return Uo;
  Tc = 1;
  var n = ma;
  return Uo = function(s) {
    if (!n(s))
      throw new TypeError("Cannot use null or undefined");
    return s;
  }, Uo;
}
var Bo, Oc;
function Q1() {
  if (Oc)
    return Bo;
  Oc = 1;
  var n = J1(), s = Z1(), r = Math.max;
  return Bo = function(o, l) {
    var c, d, h = r(arguments.length, 2), m;
    for (o = Object(s(o)), m = function(g) {
      try {
        o[g] = l[g];
      } catch (E) {
        c || (c = E);
      }
    }, d = 1; d < h; ++d)
      l = arguments[d], n(l).forEach(m);
    if (c !== void 0)
      throw c;
    return o;
  }, Bo;
}
var j1 = G1() ? Object.assign : Q1(), ew = ma, tw = Array.prototype.forEach, nw = Object.create, rw = function(n, s) {
  var r;
  for (r in n)
    s[r] = n[r];
}, iw = function(n) {
  var s = nw(null);
  return tw.call(arguments, function(r) {
    ew(r) && rw(Object(r), s);
  }), s;
}, Ho = "razdwatrzy", sw = function() {
  return typeof Ho.contains != "function" ? !1 : Ho.contains("dwa") === !0 && Ho.contains("foo") === !1;
}, Wo, Ic;
function ow() {
  if (Ic)
    return Wo;
  Ic = 1;
  var n = String.prototype.indexOf;
  return Wo = function(s) {
    return n.call(this, s, arguments[1]) > -1;
  }, Wo;
}
var aw = sw() ? String.prototype.contains : ow(), Xi = _f, Lc = z1, yf = j1, bf = iw, zr = aw, lw = gf.exports = function(n, s) {
  var r, o, l, c, d;
  return arguments.length < 2 || typeof n != "string" ? (c = s, s = n, n = null) : c = arguments[2], Xi(n) ? (r = zr.call(n, "c"), o = zr.call(n, "e"), l = zr.call(n, "w")) : (r = l = !0, o = !1), d = { value: s, configurable: r, enumerable: o, writable: l }, c ? yf(bf(c), d) : d;
};
lw.gs = function(n, s, r) {
  var o, l, c, d;
  return typeof n != "string" ? (c = r, r = s, s = n, n = null) : c = arguments[3], Xi(s) ? Lc(s) ? Xi(r) ? Lc(r) || (c = r, r = void 0) : r = void 0 : (c = s, s = r = void 0) : s = void 0, Xi(n) ? (o = zr.call(n, "c"), l = zr.call(n, "e")) : (o = !0, l = !1), d = { get: s, set: r, configurable: o, enumerable: l }, c ? yf(bf(c), d) : d;
};
var uw = gf.exports, cw = function(n) {
  if (typeof n != "function")
    throw new TypeError(n + " is not a function");
  return n;
};
(function(n, s) {
  var r = uw, o = cw, l = Function.prototype.apply, c = Function.prototype.call, d = Object.create, h = Object.defineProperty, m = Object.defineProperties, g = Object.prototype.hasOwnProperty, E = { configurable: !0, enumerable: !1, writable: !0 }, $, S, k, w, y, M, F;
  $ = function(U, T) {
    var H;
    return o(T), g.call(this, "__ee__") ? H = this.__ee__ : (H = E.value = d(null), h(this, "__ee__", E), E.value = null), H[U] ? typeof H[U] == "object" ? H[U].push(T) : H[U] = [H[U], T] : H[U] = T, this;
  }, S = function(U, T) {
    var H, Y;
    return o(T), Y = this, $.call(this, U, H = function() {
      k.call(Y, U, H), l.call(T, this, arguments);
    }), H.__eeOnceListener__ = T, this;
  }, k = function(U, T) {
    var H, Y, ee, N;
    if (o(T), !g.call(this, "__ee__"))
      return this;
    if (H = this.__ee__, !H[U])
      return this;
    if (Y = H[U], typeof Y == "object")
      for (N = 0; ee = Y[N]; ++N)
        (ee === T || ee.__eeOnceListener__ === T) && (Y.length === 2 ? H[U] = Y[N ? 0 : 1] : Y.splice(N, 1));
    else
      (Y === T || Y.__eeOnceListener__ === T) && delete H[U];
    return this;
  }, w = function(U) {
    var T, H, Y, ee, N;
    if (g.call(this, "__ee__") && (ee = this.__ee__[U], !!ee))
      if (typeof ee == "object") {
        for (H = arguments.length, N = new Array(H - 1), T = 1; T < H; ++T)
          N[T - 1] = arguments[T];
        for (ee = ee.slice(), T = 0; Y = ee[T]; ++T)
          l.call(Y, this, N);
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
            for (H = arguments.length, N = new Array(H - 1), T = 1; T < H; ++T)
              N[T - 1] = arguments[T];
            l.call(ee, this, N);
        }
  }, y = {
    on: $,
    once: S,
    off: k,
    emit: w
  }, M = {
    on: r($),
    once: r(S),
    off: r(k),
    emit: r(w)
  }, F = m({}, M), n.exports = s = function(U) {
    return U == null ? d(F) : m(Object(U), M);
  }, s.methods = y;
})(Qo, Qo.exports);
var fw = Qo.exports;
const dw = /* @__PURE__ */ af(fw), rt = dw(), pw = { class: "w-100 d-flex flex-row align-items-center" }, gr = /* @__PURE__ */ ce({
  __name: "drag-box",
  props: {
    visible: { type: Boolean },
    initialValue: {}
  },
  emits: ["update:visible", "close"],
  setup(n, { expose: s, emit: r }) {
    const o = n, l = D(), c = D(), d = D(), { position: h } = pa(c, {
      initialValue: o.initialValue
    }), { style: m } = va(l, h);
    function g(w) {
      h.value = w;
    }
    s({
      setPosition: g
    }), Ct(() => {
      rt.on(nt.VIEW_CLICK, E), document.addEventListener("keydown", k);
    }), na(() => {
      rt.off(nt.VIEW_CLICK, E), document.removeEventListener("keydown", k);
    });
    function E(w) {
      $(w) && S();
    }
    function $(w) {
      const y = w.target;
      return !(!l.value || !d.value || d.value.contains(y) || l.value.contains(y));
    }
    function S() {
      r("update:visible", !1), r("close");
    }
    function k(w) {
      w.code === "Escape" && S();
    }
    return (w, y) => (z(), J(We, null, [
      O("div", {
        ref_key: "referenceRef",
        ref: d,
        onMousedown: y[0] || (y[0] = it(() => {
        }, ["prevent"]))
      }, [
        en(w.$slots, "reference")
      ], 544),
      (z(), Ue(Uc, { to: "body" }, [
        pn(O("div", {
          ref_key: "boxRef",
          ref: l,
          class: "demotestname card shadow brag-box user-select-none z-2",
          style: ts([{ position: "fixed" }, R(m)]),
          onMousedown: y[1] || (y[1] = it(() => {
          }, ["prevent"]))
        }, [
          O("div", pw, [
            O("div", {
              ref_key: "dragRef",
              ref: c,
              class: "w-100",
              style: { height: "40px", cursor: "move" }
            }, null, 512),
            O("span", {
              onClick: S,
              class: "btn iconfont icon-close fs-5"
            })
          ]),
          en(w.$slots, "default")
        ], 36), [
          [hn, w.visible]
        ])
      ]))
    ], 64));
  }
}), hw = {
  install(n) {
    n.component("BarButton", ct), n.component("BarInput", fa), n.component("BarPopover", i1), n.component("BarSearch", ha), n.component("BarWrapper", mf), n.component("BarWrapperItem", k1), n.component("BarWrapperGroup", fr), n.component("DragBox", gr);
  }
};
function vw(n) {
  return n.replaceAll(/[&]/gi, "&amp;").replaceAll(/[<]/gi, "&lt;").replaceAll(/[>]/gi, "&gt;");
}
function mw(n, s) {
  return s ? `<audio src="${n.src}">${s}</audio>` : `<audio src="${n.src}"/>`;
}
function gw(n) {
  return n.time ? `<break time="${n.time}"/>` : n.strength ? `<break strength="${n.strength}"/>` : "<break/>";
}
function _w(n, s) {
  return n.level ? `<emphasis level="${n.level}">${s}</emphasis>` : `<emphasis>${s}</emphasis>`;
}
function yw(n, s) {
  if (!n.style)
    return s;
  const r = n.role ? ` role="${n.role}"` : "", o = n.styledegree ? ` styledegree="${n.styledegree}"` : "";
  return `<mstts:express-as style="${n.style}"${r}${o}>${s}</mstts:express-as>`;
}
function bw(n) {
  if (!n.src)
    return "";
  const s = n.volume ? ` volume="${n.volume}"` : "", r = n.fadein ? ` fadein="${n.fadein}"` : "", o = n.fadeout ? ` fadeout="${n.fadeout}"` : "";
  return `<mstts:backgroundaudio src="${n.src}"${s}${r}${o}/>`;
}
function ww(n) {
  return !n.attrType || !n.value ? "" : `<mstts:silence type="${n.attrType}" value="${n.value}"/>`;
}
function xw(n, s) {
  return `<p>${s}</p>`;
}
function Ew(n, s) {
  const r = n.alphabet ? `alphabet="${n.alphabet}"` : "";
  return `<phoneme ph="${n.ph}"${r}>${s}</phoneme>`;
}
function Sw(n, s) {
  if (!n.contour && !n.pitch && !n.range && !n.rate && !n.volume)
    return s;
  const r = n.contour ? ` contour="${n.contour}"` : "", o = n.pitch ? ` pitch="${n.pitch}"` : "", l = n.range ? ` range="${n.range}"` : "", c = n.volume ? ` volume="${n.volume}"` : "", d = n.rate ? ` rate="${n.rate}"` : "";
  return `<prosody${r}${o}${l}${c}${d}>${s}</prosody>`;
}
function $w(n, s) {
  const r = n.interpretAs ? ` interpret-as="${n.interpretAs}"` : "", o = n.format ? ` format="${n.format}"` : "", l = n.detail ? ` detail="${n.detail}"` : "";
  return `<say-as${r}${o}${l}>${s}</say-as>`;
}
function Cw(n, s) {
  return `<s>${s}</s>`;
}
function Rw(n, s) {
  return `<sub alias="${n.alias}">${s}</sub>`;
}
function kw(n, s) {
  const r = n.effect ? ` effect="${n.effect}"` : "";
  return `<voice name="${n.name}${r}">${s}</voice>`;
}
function Aw(n, s) {
  return `<speak version="${n.version}" xml:lang="${n.xmlLang}" xmlns="${n.xmlns}" xmlns:mstts="${n["xmlns:mstts"]}" xmlns:emo="${n["xmlns:emo"]}">${s}</speak>`;
}
function wf(n) {
  if (Gr.isText(n))
    return vw(n.text.trim());
  if (Ty.isElement(n)) {
    const s = n.children.map((o) => wf(o)).join("");
    switch (ie.getNodeType(n)) {
      case "paragraph":
        return `<p>${s}</p>`;
      case "ssml-speak":
        return Aw(n, s);
      case "ssml-mstts:backgroundaudio":
        return bw(n);
      case "ssml-audio":
        return mw(n, s);
      case "ssml-break":
        return gw(n);
      case "ssml-emphasis":
        return _w(n, s);
      case "ssml-mstts:express-as":
        return yw(n, s);
      case "ssml-p":
        return xw(n, s);
      case "ssml-phoneme":
        return Ew(n, s);
      case "ssml-prosody":
        return Sw(n, s);
      case "ssml-s":
        return Cw(n, s);
      case "ssml-say-as":
        return $w(n, s);
      case "ssml-sub":
        return Rw(n, s);
      case "ssml-voice":
        return kw(n, s);
      case "ssml-mstts:silence":
        return ww(n);
      default:
        return s;
    }
  }
  return "";
}
function Tw(n, s) {
  const r = { type: "ssml-voice", remark: "", name: s.name, children: [] }, o = xf(), l = {
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
    function g(E) {
      m.children.push(E);
    }
    return { prosody: m, pushNode: g };
  }
  let h;
  for (let m = 0; m < s.children.length; m++) {
    const g = s.children[m];
    if (!(Gr.isText(g) && !g.text.trim()))
      if (Gr.isText(g)) {
        h ?? (h = d()), h.pushNode(g);
        continue;
      } else if (Fe.isVoid(n, g)) {
        h = void 0, l.children.push(g);
        continue;
      } else {
        const E = ie.findPath(n, g), [$] = Fe.nodes(n, {
          at: E,
          mode: "lowest",
          voids: !1,
          match: (S) => ie.checkNodeType(S, "ssml-prosody")
        });
        if ($) {
          h = void 0, l.children.push(g);
          continue;
        } else
          h ?? (h = d()), h.pushNode(g);
      }
  }
  return r;
}
function xf() {
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
function Ow() {
  const { rootVoice: n, rootExpressAs: s } = zn(), r = { ...n, children: [] }, o = xf(), l = { ...s, children: [] };
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
function Iw() {
  return {
    type: "ssml-break",
    time: "200ms",
    children: [{ text: "" }],
    remark: "paragraphBreak"
  };
}
function Lw(n) {
  const s = n.children.filter((r) => ie.checkNodeType(r, "paragraph")).filter((r) => !!ra.string(r).trim()).map((r, o, l) => {
    const d = r.children;
    return o < l.length - 1 ? d.concat([Iw()]) : d;
  });
  return [].concat(...s);
}
function Pw(n) {
  const s = Lw(n), r = [];
  let o, l;
  for (let c = 0; c < s.length; c++) {
    const d = s[c];
    if (!(Gr.isText(d) && !d.text.trim())) {
      if (ie.checkNodeType(d, "custom-management")) {
        o && (r.push(o.voice), o = void 0, l = void 0), r.push(Tw(n, d));
        continue;
      }
      if (o ?? (o = Ow()), Gr.isText(d)) {
        l ?? (l = Pc(o.pushNode)), l.pushNode(d);
        continue;
      } else if (Fe.isVoid(n, d)) {
        l = void 0, o.pushNode(d);
        continue;
      } else {
        const h = ie.findPath(n, d), [m] = Fe.nodes(n, {
          at: h,
          mode: "lowest",
          voids: !1,
          match: (g) => ie.checkNodeType(g, "ssml-prosody")
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
function ga() {
  const { editor: n } = ut();
  if (!n)
    throw Error("没有找到 editor 对象");
  const { rootSpeak: s, rootBackgroundaudio: r } = zn(), o = { ...s, children: [] }, l = { ...r };
  return o.children.push(l, ...Pw(n)), wf(o);
}
const Dw = (n) => (ns("data-v-f485fb08"), n = n(), rs(), n), Nw = { class: "play-menu-icon d-flex justify-content-center align-items-center" }, Mw = {
  key: 0,
  class: "fs-3 iconfont-moyin moyin-icon_play"
}, Vw = {
  key: 2,
  class: "iconfont icon-pause"
}, Fw = /* @__PURE__ */ Dw(() => /* @__PURE__ */ O("div", {
  class: "fw-normal",
  style: { "font-size": "0.85rem" }
}, "24K高清音质", -1)), Uw = /* @__PURE__ */ ce({
  __name: "play-menu",
  props: {
    disabled: { type: Boolean, default: !1 }
  },
  setup(n) {
    const s = ls(), { audioPlayer: r } = s, o = r.playState, l = r.loadState, c = ut(), { globalEditConfig: d } = c;
    async function h() {
      if (o.value === "playing") {
        r.pause();
        return;
      }
      try {
        const m = ga(), g = await d.tryPlay.play(m);
        await r.load(g.src), r.play();
      } catch {
        r.pause();
      }
    }
    return (m, g) => (z(), J("div", {
      class: $t(["play-menu px-2 py-1", { disabled: m.disabled }]),
      onClick: g[0] || (g[0] = (E) => !m.disabled && h()),
      onMousedown: g[1] || (g[1] = it(() => {
      }, ["prevent"]))
    }, [
      O("div", Nw, [
        R(l) === "complete" && R(o) === "paused" ? (z(), J("span", Mw)) : R(l) === "loading" ? (z(), Ue(R(ia), {
          key: 1,
          class: "is-loading"
        }, {
          default: j(() => [
            P(R(Ny))
          ]),
          _: 1
        })) : (z(), J("span", Vw))
      ]),
      Fw
    ], 34));
  }
});
const Ef = /* @__PURE__ */ vt(Uw, [["__scopeId", "data-v-f485fb08"]]);
class Ft {
  constructor(s) {
    Le(this, "editor");
    this.editor = s;
  }
  getValue() {
    const { selection: s } = this.editor;
    return s == null ? "" : Fe.string(this.editor, s);
  }
  isDisabled() {
    const { selection: s } = this.editor;
    return s == null ? (this.editor.emit(Te.ERROR, "未选中编辑器"), !0) : !1;
  }
}
class Bw extends Ft {
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
      return this.editor.emit(Te.ERROR, "请框选一个中文字符"), !0;
    const r = this.getValue();
    return r.length != 1 ? (this.editor.emit(Te.ERROR, "请框选一个中文字符"), !0) : /^[\u4E00-\u9FA5]$/gi.test(r) ? !1 : (this.editor.emit(Te.ERROR, "请框选一个中文字符"), !0);
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
const Sf = /* @__PURE__ */ ce({
  setup() {
    const {
      globalEditConfig: n
    } = ut(), s = De(), r = D([]), o = D(!1);
    function l() {
      o.value || (o.value = !0);
    }
    function c() {
      o.value && (o.value = !1);
    }
    async function d(h) {
      var g;
      if (s.value ?? (s.value = new Bw(h)), (g = s.value) != null && g.isDisabled())
        return;
      const m = s.value.getValue();
      if (m ? r.value = await n.pinyin.fetchData(m) : r.value = [], r.value.length == 0)
        return h.emit(Te.ERROR, "选中的字符没有不是多音字");
      l();
    }
    return () => P(vn, {
      visible: o.value,
      "onUpdate:visible": (h) => o.value = h,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => P(ct, {
        text: "多音字",
        icon: "speaker",
        onClick: d
      }, null),
      default: () => P("div", {
        class: "d-flex flex-column overflow-x-hidden overflow-y-auto",
        style: "max-height: 300px"
      }, [r.value.map(({
        label: h,
        value: m
      }) => P("div", {
        key: m,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          s.value && !s.value.isDisabled() && s.value.exec({
            label: h,
            value: m
          }), c();
        },
        onMousedown: it(() => {
        }, ["stop", "prevent"])
      }, [h]))])
    });
  }
});
class Hw extends Ft {
  constructor(s) {
    super(s);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: s } = this.editor;
    return s ? Rt.isCollapsed(s) ? (this.editor.emit(Te.ERROR, "请框选要连读的词或句子"), !0) : Fe.string(this.editor, s).length < 2 : !0;
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
const $f = /* @__PURE__ */ ce({
  setup() {
    const n = De();
    function s(r) {
      n.value ?? (n.value = new Hw(r)), !n.value.isDisabled() && n.value.exec();
    }
    return () => P(ct, {
      text: "连读",
      icon: "continuous",
      onClick: s
    }, null);
  }
}), Ww = [
  { label: "重音", value: "z" },
  { label: "拖音", value: "t" },
  { label: "重音+拖音", value: "z+t" }
], zw = {
  z: { pitch: "x-high", rate: void 0 },
  t: { pitch: void 0, rate: "medium" },
  "z+t": { pitch: "x-high", rate: "medium" }
};
class Gw extends Ft {
  constructor(s) {
    super(s);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: s } = this.editor;
    return !s || s == null ? !0 : Rt.isCollapsed(s) ? (this.editor.emit(Te.ERROR, "请框选词或句子"), !0) : !1;
  }
  exec(s) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const r = this.getValue();
    if (r == null)
      return;
    const { pitch: o, rate: l } = zw[s.value], c = {
      type: "ssml-prosody",
      remark: s.label,
      pitch: o,
      rate: l,
      children: [{ text: r }]
    };
    this.editor.insertNode(c);
  }
}
const Cf = /* @__PURE__ */ ce({
  setup() {
    const n = De(), s = D(!1);
    function r() {
      s.value || (s.value = !0);
    }
    function o() {
      s.value && (s.value = !1);
    }
    function l(c) {
      n.value ?? (n.value = new Gw(c)), !n.value.isDisabled() && r();
    }
    return () => P(vn, {
      visible: s.value,
      "onUpdate:visible": (c) => s.value = c,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => P(ct, {
        text: "重音",
        icon: "read",
        onClick: l
      }, null),
      default: () => P("div", {
        class: "d-flex flex-column",
        onMousedown: it(() => {
        }, ["stop", "prevent"])
      }, [Ww.map(({
        label: c,
        value: d
      }) => P("div", {
        key: d,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          n.value && !n.value.isDisabled() && n.value.exec({
            label: c,
            value: d
          }), o();
        },
        onMousedown: it(() => {
        }, ["stop", "prevent"])
      }, [c]))])
    });
  }
});
class qw extends Ft {
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
      return this.editor.emit(Te.ERROR, "请框选纯数字"), !0;
    const r = Fe.string(this.editor, s);
    return r.length <= 0 ? !0 : Number.isNaN(Number(r)) ? (this.editor.emit(Te.ERROR, "请框选纯数字"), !0) : !1;
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
const Kw = [{
  value: "cardinal",
  label: "读数值"
}, {
  value: "characters",
  label: "读数字"
}, {
  value: "telephone",
  label: "读手机号"
}], Rf = /* @__PURE__ */ ce({
  setup() {
    const n = De(), s = D(!1);
    function r() {
      s.value = !s.value;
    }
    function o(l) {
      n.value ?? (n.value = new qw(l)), !n.value.isDisabled() && r();
    }
    return () => P(vn, {
      visible: s.value,
      "onUpdate:visible": (l) => s.value = l,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => P(ct, {
        text: "数字符号",
        icon: "digital",
        onClick: o
      }, null),
      default: () => P("div", {
        class: "d-flex flex-column"
      }, [Kw.map(({
        label: l,
        value: c
      }) => P("div", {
        key: c,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          n.value && !n.value.isDisabled() && n.value.exec({
            label: l,
            value: c
          }), r();
        },
        onMousedown: it(() => {
        }, ["stop", "prevent"])
      }, [l]))])
    });
  }
});
class Yw extends Ft {
  constructor(s) {
    super(s);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: s } = this.editor;
    return s == null ? !0 : Rt.isCollapsed(s) ? (this.editor.emit(Te.ERROR, "请框选要设置别名的词或句子"), !0) : !1;
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
const kf = /* @__PURE__ */ ce({
  setup() {
    const n = De(), s = D(), r = D(!1);
    function o() {
      r.value || (r.value = !0);
    }
    function l() {
      r.value && (r.value = !1);
    }
    async function c(h) {
      var m;
      n.value ?? (n.value = new Yw(h)), !n.value.isDisabled() && (o(), (m = s.value) == null || m.focus());
    }
    function d(h) {
      var m;
      l(), h && ((m = n.value) == null || m.exec({
        value: h,
        label: h
      }));
    }
    return () => P(vn, {
      visible: r.value,
      "onUpdate:visible": (h) => r.value = h,
      trigger: "contextmenu",
      placement: "right-end",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => P(ct, {
        text: "别名",
        icon: "alias",
        onClick: c
      }, null),
      default: () => P(fa, {
        ref: s,
        onSubmit: d
      }, null)
    });
  }
});
class Xw extends Ft {
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
      return this.editor.emit(Te.ERROR, "请框选英文单词"), !0;
    const r = Fe.string(this.editor, s);
    return r.length <= 0 ? !0 : /^[A-Za-z]+$/gi.test(r) ? !1 : (this.editor.emit(Te.ERROR, "请框选英文单词"), !0);
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
const Af = /* @__PURE__ */ ce({
  setup() {
    const {
      globalEditConfig: n
    } = ut(), s = De(), r = D([]), o = D(!1);
    function l() {
      o.value || (o.value = !0);
    }
    function c() {
      o.value && (o.value = !1);
    }
    async function d(h) {
      if (s.value ?? (s.value = new Xw(h)), V0(h), s.value.isDisabled())
        return;
      const m = s.value.getValue();
      if (m) {
        if (r.value = await n.english.fetchData(m), r.value.length <= 0)
          return h.emit(Te.ERROR, "找不到单词的音标");
        l();
      }
    }
    return () => P(vn, {
      visible: o.value,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => P(ct, {
        text: "音标",
        icon: "english",
        onClick: d
      }, null),
      default: () => P("div", {
        class: "d-flex flex-column"
      }, [r.value.map(({
        label: h,
        value: m
      }) => P("div", {
        key: m,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          s.value && !s.value.isDisabled() && s.value.exec({
            label: h,
            value: m
          }), c();
        },
        onMousedown: it(() => {
        }, ["stop", "prevent"])
      }, [h]))])
    });
  }
});
class Jw extends Ft {
  constructor(s) {
    super(s);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: s } = this.editor;
    return s == null ? !0 : Rt.isCollapsed(s) ? (this.editor.emit(Te.ERROR, "请框选要变速的句子"), !0) : !1;
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
function ge(n) {
  return `${((n - 1) * 100).toFixed(0)}%`;
}
const Zw = [
  { value: ge(0.5), label: "0.5x" },
  { value: ge(0.55), label: "0.55x" },
  { value: ge(0.6), label: "0.6x" },
  { value: ge(0.65), label: "0.65x" },
  { value: ge(0.7), label: "0.7x" },
  { value: ge(0.75), label: "0.75x" },
  { value: ge(0.8), label: "0.8x" },
  { value: ge(0.85), label: "0.85x" },
  { value: ge(0.9), label: "0.9x" },
  { value: ge(0.95), label: "0.95x" },
  { value: ge(1), label: "1x" },
  { value: ge(1.05), label: "1.05x" },
  { value: ge(1.1), label: "1.1x" },
  { value: ge(1.15), label: "1.15x" },
  { value: ge(1.2), label: "1.2x" },
  { value: ge(1.25), label: "1.25x" },
  { value: ge(1.3), label: "1.3x" },
  { value: ge(1.35), label: "1.35x" },
  { value: ge(1.4), label: "1.4x" },
  { value: ge(1.45), label: "1.45x" },
  { value: ge(1.5), label: "1.5x" },
  { value: ge(1.55), label: "1.55x" },
  { value: ge(1.6), label: "1.6x" },
  { value: ge(1.65), label: "1.65x" },
  { value: ge(1.7), label: "1.7x" },
  { value: ge(1.75), label: "1.75x" },
  { value: ge(1.8), label: "1.8x" },
  { value: ge(1.85), label: "1.85x" },
  { value: ge(1.9), label: "1.9x" },
  { value: ge(1.95), label: "1.95x" },
  { value: ge(2), label: "2x" }
], Tf = /* @__PURE__ */ ce({
  setup() {
    const n = De(), s = D(!1);
    function r() {
      s.value || (s.value = !0);
    }
    function o() {
      s.value && (s.value = !1);
    }
    async function l(c) {
      n.value ?? (n.value = new Jw(c)), !n.value.isDisabled() && r();
    }
    return () => P(vn, {
      style: {
        padding: "0px"
      },
      visible: s.value,
      "onUpdate:visible": (c) => s.value = c,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => P(ct, {
        text: "局部变速",
        icon: "changespeed",
        onClick: l
      }, null),
      default: () => P("div", {
        class: "d-flex flex-column overflow-x-hidden overflow-y-scroll",
        style: "height:15rem"
      }, [Zw.map(({
        label: c,
        value: d
      }) => P("div", {
        key: d,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          var h;
          (h = n.value) == null || h.exec({
            label: c,
            value: d
          }), o();
        },
        onMousedown: it(() => {
        }, ["stop", "prevent"])
      }, [c]))])
    });
  }
});
class Qw extends Ft {
  constructor(s) {
    super(s);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: s } = this.editor;
    return s ? Rt.isExpanded(s) ? (this.editor.emit(Te.ERROR, "不能框选文本"), !0) : !1 : !0;
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
const jw = [{
  value: "weak",
  label: "短"
}, {
  value: "medium",
  label: "中"
}, {
  value: "strong",
  label: "长"
}], Of = /* @__PURE__ */ ce({
  setup() {
    const n = De(), s = D(!1);
    function r() {
      s.value || (s.value = !0);
    }
    function o() {
      s.value && (s.value = !1);
    }
    function l(c) {
      n.value ?? (n.value = new Qw(c)), !n.value.isDisabled() && r();
    }
    return () => P(vn, {
      visible: s.value,
      "onUpdate:visible": (c) => s.value = c,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => P(ct, {
        text: "停顿调节",
        icon: "rhythm",
        onClick: l
      }, null),
      default: () => P("div", {
        class: "d-flex flex-column"
      }, [jw.map(({
        label: c,
        value: d
      }) => P("div", {
        key: d,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => {
          n.value && !n.value.isDisabled() && n.value.exec({
            label: c,
            value: d
          }), o();
        },
        onMousedown: it(() => {
        }, ["stop", "prevent"])
      }, [c]))])
    });
  }
});
class ex extends Ft {
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
    return s ? Rt.isExpanded(s) ? (this.editor.emit(Te.ERROR, "不能框选文字"), !0) : !1 : !0;
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
const If = /* @__PURE__ */ ce({
  __name: "special-menu",
  setup(n) {
    const s = D(), r = D(), o = De(), { globalEditConfig: l } = ut(), { special: c } = l, d = D(!1), { x: h, y: m, height: g } = Yr(r), E = (S) => {
      o.value ?? (o.value = new ex(S)), !o.value.isDisabled() && (s.value.setPosition({
        x: h.value - 200,
        y: m.value + g.value
      }), d.value = !0);
    };
    function $(S) {
      var k;
      (k = o.value) == null || k.restoreSelection(), o.value && !o.value.isDisabled() && o.value.exec(S), d.value = !1;
    }
    return (S, k) => (z(), Ue(R(gr), {
      ref_key: "dragRef",
      ref: s,
      visible: d.value,
      "onUpdate:visible": k[0] || (k[0] = (w) => d.value = w)
    }, {
      reference: j(() => [
        P(R(ct), {
          ref_key: "menuRef",
          ref: r,
          text: "音效",
          icon: "special",
          onClick: E
        }, null, 512)
      ]),
      default: j(() => [
        P(R(ha), {
          menus: R(c).menus,
          fetchScene: R(c).fetchScene,
          fetchStyle: R(c).fetchStyle,
          fetchData: R(c).fetchData,
          onSubmit: $
        }, null, 8, ["menus", "fetchScene", "fetchStyle", "fetchData"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
class tx extends Ft {
  constructor(s) {
    super(s);
  }
  isDisabled() {
    if (super.isDisabled())
      return !0;
    const { selection: s } = this.editor;
    return s ? Rt.isExpanded(s) ? (this.editor.emit(Te.ERROR, "不能框选文本"), !0) : !1 : !0;
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
const nx = [{
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
}], Lf = /* @__PURE__ */ ce({
  setup() {
    const n = De(), s = D(!1), r = D();
    function o() {
      s.value || (s.value = !0);
    }
    function l() {
      s.value && (s.value = !1);
    }
    function c(h) {
      var m;
      n.value ?? (n.value = new tx(h)), !n.value.isDisabled() && (o(), (m = r.value) == null || m.focus());
    }
    function d(h) {
      var m;
      l(), h && ((m = n.value) == null || m.exec({
        value: h,
        label: h
      }));
    }
    return () => P(vn, {
      visible: s.value,
      "onUpdate:visible": (h) => s.value = h,
      trigger: "contextmenu",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => P(ct, {
        text: "插入静音",
        icon: "mute",
        onClick: c
      }, null),
      default: () => P("div", {
        class: "d-flex flex-column"
      }, [nx.map(({
        value: h,
        label: m
      }) => P("div", {
        key: h,
        class: "clickable w-100 fs-6 rounded-1 px-3 py-2",
        onClick: () => d(h),
        onMousedown: it(() => {
        }, ["stop", "prevent"])
      }, [m])), P(fa, {
        type: "text",
        ref: r,
        onSubmit: d
      }, null)])
    });
  }
}), Pf = /* @__PURE__ */ ce({
  __name: "bgm-menu",
  setup(n) {
    const s = D(), r = D(), o = De(), { globalEditConfig: l } = ut(), { bgm: c } = l, d = D(!1), { x: h, y: m, height: g } = Yr(r), E = async (S) => {
      const k = {
        x: h.value - 300,
        y: m.value + g.value
      };
      o.value = S, s.value.setPosition(k), d.value = !0;
    };
    function $(S) {
      const { rootBackgroundaudio: k } = zn();
      k.src = S.value, k.remark = S.label, d.value = !1;
    }
    return (S, k) => (z(), Ue(R(gr), {
      ref_key: "dragRef",
      ref: s,
      visible: d.value,
      "onUpdate:visible": k[0] || (k[0] = (w) => d.value = w)
    }, {
      reference: j(() => [
        P(R(ct), {
          ref_key: "menuRef",
          ref: r,
          text: "配乐",
          icon: "bgm",
          onClick: E
        }, null, 512)
      ]),
      default: j(() => [
        P(R(ha), {
          menus: R(c).menus,
          fetchScene: R(c).fetchScene,
          fetchStyle: R(c).fetchStyle,
          fetchData: R(c).fetchData,
          onSubmit: $
        }, null, 8, ["menus", "fetchScene", "fetchStyle", "fetchData"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Df = /* @__PURE__ */ ce({
  __name: "sensitive-menu",
  setup(n) {
    const s = D(), r = D(), o = De(), l = D(!1), { x: c, y: d, height: h } = Yr(r), m = (g) => {
      o.value = g, s.value.setPosition({
        x: c.value - 200,
        y: d.value + h.value
      }), l.value = !0;
    };
    return (g, E) => (z(), Ue(R(gr), {
      ref_key: "dragRef",
      ref: s,
      visible: l.value,
      "onUpdate:visible": E[0] || (E[0] = ($) => l.value = $)
    }, {
      reference: j(() => [
        P(R(ct), {
          ref_key: "menuRef",
          ref: r,
          text: "敏感词",
          icon: "sensitive",
          onClick: m
        }, null, 512)
      ]),
      default: j(() => [
        P(Df)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
const rx = {
  class: "select-list",
  style: { width: "120px" }
}, ix = {
  class: "text-center d-flex flex-column justify-content-center fs-6",
  style: { height: "60px" }
}, sx = ["onClick"], ox = /* @__PURE__ */ ce({
  __name: "select-list",
  props: {
    modelValue: {},
    dataList: {}
  },
  emits: ["update:modelValue"],
  setup(n, { expose: s, emit: r }) {
    const o = n, l = D();
    function c(h) {
      r("update:modelValue", h.value);
    }
    function d() {
      var h;
      if (l.value) {
        for (let m = 0; m < o.dataList.length; m++)
          if (o.dataList[m].value === o.modelValue) {
            (h = l.value.children[m]) == null || h.scrollIntoView({ behavior: "smooth" });
            return;
          }
      }
    }
    return s({
      scrollIntoViewTheItem: d
    }), (h, m) => (z(), J("div", rx, [
      O("div", ix, [
        en(h.$slots, "default", {}, void 0, !0)
      ]),
      O("ul", {
        ref_key: "listRef",
        ref: l,
        class: "text-center w-100 border-start border-top border-bottom border-secondary-subtle overflow-y-auto overflow-x-hidden scrollbar-none",
        style: { height: "180px" }
      }, [
        (z(!0), J(We, null, lt(h.dataList, (g, E) => (z(), J("li", {
          class: $t(["clickable select-item py-1", { activate: g.value === h.modelValue }]),
          key: E,
          onClick: ($) => c(g)
        }, Ce(g.label), 11, sx))), 128))
      ], 512)
    ]));
  }
});
const cr = /* @__PURE__ */ vt(ox, [["__scopeId", "data-v-e0f0259e"]]), ax = { class: "position-relative" }, lx = { class: "position-absolute top-0 end-0" }, ux = /* @__PURE__ */ O("li", null, [
  /* @__PURE__ */ O("span", { class: "text-nowrap" }, "近期使用:")
], -1), cx = ["onClick"], fx = /* @__PURE__ */ O("span", { class: "my-3" }, "类型", -1), dx = /* @__PURE__ */ O("span", { class: "my-3" }, "配音师", -1), px = /* @__PURE__ */ O("span", { class: "my-3" }, "角色", -1), hx = /* @__PURE__ */ O("span", { class: "my-3" }, "风格", -1), vx = /* @__PURE__ */ O("span", { class: "my-3" }, "语速", -1), mx = /* @__PURE__ */ O("span", { class: "my-3" }, "语调", -1), gx = { class: "position-absolute bottom-0 end-0 d-flex flex-row justify-content-end me-4 mb-3" }, _x = /* @__PURE__ */ ce({
  __name: "management-content",
  emits: ["submit"],
  setup(n, { emit: s }) {
    const { globalEditConfig: r } = ut(), { tryPlay: o, management: l } = r, c = D(), d = D(!1), h = D(""), m = df(), { contentData: g } = nf(m), E = De([]), $ = D([]), S = D([{ label: "全部类型", value: "" }, ...o.category]), k = D([]), w = D([]), y = D([]), M = D(m0()), F = D(g0()), U = cs(c);
    Ct(async () => {
      g.value.category = S.value[0].value, await H(), await N();
    }), Ke(U, (W) => {
      W || (h.value = "", d.value = !1);
    });
    async function T(W) {
      g.value.category = W, await H();
    }
    async function H() {
      const W = await o.fetchData({ ...ca(), ...g.value });
      E.value = W, k.value = W.map((Z) => ({ label: Z.displayName, value: Z.name })), W.length > 0 && (w.value = W[0].roles, y.value = W[0].styles, g.value.name = W[0].name), w.value.length > 0 && (g.value.role = w.value[0].value), y.value.length > 0 && (g.value.style = y.value[0].value);
    }
    function Y(W) {
      const Z = E.value.find((fe) => fe.name === W);
      Z && (w.value = Z.roles, y.value = Z.styles, w.value.length > 0 && (g.value.role = w.value[0].value), y.value.length > 0 && (g.value.style = y.value[0].value));
    }
    async function ee() {
      var ze, xe, Gn, Ee;
      const W = ((ze = k.value.find((Oe) => Oe.value === g.value.name)) == null ? void 0 : ze.label) || "", Z = ((xe = w.value.find((Oe) => Oe.value === g.value.role)) == null ? void 0 : xe.label) || "", fe = ((Gn = y.value.find((Oe) => Oe.value === g.value.style)) == null ? void 0 : Gn.label) || "", Ye = ((Ee = M.value.find((Oe) => Oe.value === g.value.speed)) == null ? void 0 : Ee.label) || "", Yt = {
        category: g.value.category,
        name: g.value.name,
        label: `${W}|${Z}|${fe}|${Ye}`,
        value: g.value.name,
        role: g.value.role,
        style: g.value.style,
        speed: y0(Number(g.value.speed)),
        pitch: _0(Number(g.value.pitch))
      };
      s("submit", Yt), await ve(Yt);
    }
    async function N() {
      try {
        $.value = await l.fetchRecentUsage();
      } catch (W) {
        rt.emit(nt.ERROR, `${W}`, W);
      }
    }
    async function ve(W) {
      try {
        const Z = { ...g.value, label: W.label, id: "" }, fe = await l.recordRecentUsage(Z);
        $.value.splice(0, 0, fe), $.value = Qe.sortedUniqBy(
          $.value,
          (Ye) => `${Ye.name}+${Ye.role}+${Ye.style}+${Ye.pitch}+${Ye.speed}`
        );
      } catch (Z) {
        rt.emit(nt.ERROR, `${Z}`, Z);
      }
    }
    function Re(W) {
      g.value.category = W.category, g.value.name = W.name, g.value.pitch = W.pitch, g.value.role = W.role, g.value.speed = W.speed, g.value.style = W.style, ee();
    }
    async function G(W) {
      try {
        const Z = $.value[W];
        await l.deleteRecentUsage(Z.id), $.value.splice(W, 1);
      } catch (Z) {
        rt.emit(nt.ERROR, `${Z}`, Z);
      }
    }
    async function q() {
      try {
        await l.deleteRecentUsage(), $.value = [];
      } catch (W) {
        rt.emit(nt.ERROR, `${W}`, W);
      }
    }
    return (W, Z) => (z(), J("div", {
      ref_key: "boxRef",
      ref: c,
      style: { width: "600px", height: "360px" },
      class: "position-relative px-2 pb-2"
    }, [
      P(R(is), {
        onSubmit: it(H, ["prevent"])
      }, {
        default: j(() => [
          P(R(ss), {
            modelValue: h.value,
            "onUpdate:modelValue": Z[0] || (Z[0] = (fe) => h.value = fe),
            placeholder: "请输入名称快速查找配音师"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["onSubmit"]),
      O("div", ax, [
        O("div", lx, [
          P(R(Et), {
            size: "small",
            icon: R(My),
            onClick: Z[1] || (Z[1] = () => d.value = !d.value)
          }, null, 8, ["icon"])
        ]),
        O("ul", {
          class: $t(["d-flex flex-row row-gap-1 column-gap-2 overflow-x-hidden", { "flex-wrap": d.value }])
        }, [
          ux,
          (z(!0), J(We, null, lt($.value, (fe, Ye) => (z(), J("li", {
            class: "btn m-0 p-0",
            onClick: (Yt) => Re(fe),
            key: Ye
          }, [
            P(R(Bc), {
              type: "info",
              onClose: (Yt) => G(Ye),
              closable: ""
            }, {
              default: j(() => [
                Ze(Ce(fe.label), 1)
              ]),
              _: 2
            }, 1032, ["onClose"])
          ], 8, cx))), 128))
        ], 2),
        pn(O("div", {
          class: $t({ "d-flex flex-row": !d.value })
        }, [
          P(cr, {
            "onUpdate:modelValue": [
              T,
              Z[2] || (Z[2] = (fe) => R(g).category = fe)
            ],
            modelValue: R(g).category,
            dataList: S.value
          }, {
            default: j(() => [
              fx
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          P(cr, {
            "onUpdate:modelValue": [
              Y,
              Z[3] || (Z[3] = (fe) => R(g).name = fe)
            ],
            modelValue: R(g).name,
            dataList: k.value
          }, {
            default: j(() => [
              dx
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          P(cr, {
            modelValue: R(g).role,
            "onUpdate:modelValue": Z[4] || (Z[4] = (fe) => R(g).role = fe),
            dataList: w.value
          }, {
            default: j(() => [
              px
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          P(cr, {
            modelValue: R(g).style,
            "onUpdate:modelValue": Z[5] || (Z[5] = (fe) => R(g).style = fe),
            dataList: y.value
          }, {
            default: j(() => [
              hx
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          P(cr, {
            modelValue: R(g).speed,
            "onUpdate:modelValue": Z[6] || (Z[6] = (fe) => R(g).speed = fe),
            dataList: M.value
          }, {
            default: j(() => [
              vx
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"]),
          P(cr, {
            modelValue: R(g).pitch,
            "onUpdate:modelValue": Z[7] || (Z[7] = (fe) => R(g).pitch = fe),
            dataList: F.value
          }, {
            default: j(() => [
              mx
            ]),
            _: 1
          }, 8, ["modelValue", "dataList"])
        ], 2), [
          [hn, !d.value]
        ])
      ]),
      O("div", gx, [
        pn(P(R(Et), {
          onClick: ee,
          type: "primary"
        }, {
          default: j(() => [
            Ze("确定")
          ]),
          _: 1
        }, 512), [
          [hn, !d.value]
        ]),
        pn(P(R(Et), {
          onClick: q,
          type: "primary"
        }, {
          default: j(() => [
            Ze("全部清空")
          ]),
          _: 1
        }, 512), [
          [hn, d.value]
        ])
      ])
    ], 512));
  }
});
class Dc extends Ft {
  constructor(r) {
    super(r);
    Le(this, "contentData");
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
      return this.editor.emit(Te.ERROR, "请框选句子"), !0;
    const [o] = Fe.node(this.editor, r), l = this.editor.getParentNode(o);
    return !l || !ie.checkNodeType(l, "paragraph") ? (this.editor.emit(Te.ERROR, "多人配音需要在最外层使用"), !0) : !1;
  }
  exec(r) {
    if (this.editor.restoreSelection(), this.isDisabled())
      return;
    const o = this.getValue();
    if (o == null)
      return;
    const l = ie.getSelectedNodeByType(this.editor, "custom-management");
    if (l)
      Pe.setNodes(
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
const Nf = /* @__PURE__ */ ce({
  __name: "management-menu",
  setup(n) {
    const s = D(), r = D(), o = D(!1), l = De(), c = df(), { contentData: d } = nf(c), { x: h, y: m, height: g } = Yr(r);
    Ct(() => {
      rt.on(nt.EDITOR_CREATED, (w) => {
        w.on(Te.SSML_ELEMENT_CLICK, (y, M) => {
          var F;
          if (M.type === "custom-management") {
            l.value ?? (l.value = new Dc(y));
            const T = ((F = M.custom) == null ? void 0 : F.contentData) || {};
            T && (d.value.category = T.category, d.value.name = T.name, d.value.pitch = T.pitch, d.value.role = T.role, d.value.speed = T.speed, d.value.style = T.style), setTimeout(() => {
              E();
            }, 200);
          }
        });
      });
    });
    function E() {
      var y;
      const w = {
        x: h.value - 200,
        y: m.value + g.value
      };
      (y = s.value) == null || y.setPosition(w), o.value = !0;
    }
    function $() {
      o.value = !1;
    }
    function S(w) {
      l.value ?? (l.value = new Dc(w)), !l.value.isDisabled() && E();
    }
    function k(w) {
      var y;
      l.value && !l.value.isDisabled() && (l.value.contentData = { ...d.value }, (y = l.value) == null || y.exec(w)), $();
    }
    return (w, y) => (z(), Ue(R(gr), {
      ref_key: "dragRef",
      ref: s,
      visible: o.value,
      "onUpdate:visible": y[0] || (y[0] = (M) => o.value = M)
    }, {
      reference: j(() => [
        P(R(ct), {
          ref_key: "menuRef",
          ref: r,
          text: "多人配音",
          icon: "management",
          onClick: S
        }, null, 512)
      ]),
      default: j(() => [
        P(_x, { onSubmit: k })
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), yx = { class: "speaker-head" }, bx = ["src"], wx = { class: "speaker-name" }, xx = /* @__PURE__ */ ce({
  __name: "speaker-item",
  props: {
    label: {},
    value: {},
    avatar: {},
    activated: { type: Boolean }
  },
  emits: ["click"],
  setup(n) {
    return (s, r) => (z(), J("div", {
      class: "speaker-item",
      onClick: r[0] || (r[0] = (o) => s.$emit("click", s.value || ""))
    }, [
      O("div", yx, [
        O("img", {
          src: s.avatar || R(Kr)(),
          class: $t([{ "border border-warning": s.activated }, "rounded-circle"]),
          style: { height: "40px" }
        }, null, 10, bx)
      ]),
      O("div", wx, Ce(s.label), 1)
    ]));
  }
});
const Ex = /* @__PURE__ */ vt(xx, [["__scopeId", "data-v-b043c1a6"]]);
class Sx {
  constructor() {
    Le(this, "mediaRecorder", null);
    Le(this, "isRecording", D(!1));
  }
  get recorderState() {
    return Ve(() => this.isRecording.value ? "recording" : "paused");
  }
  async start(s) {
    if (navigator.mediaDevices.getUserMedia) {
      const r = [];
      try {
        const o = await navigator.mediaDevices.getUserMedia({ audio: !0 }), l = new MediaRecorder(o);
        return this.mediaRecorder = l, new Promise((c, d) => {
          l.ondataavailable = (h) => {
            s.isCancellationRequested() ? (l.stop(), this.isRecording.value = !1, s.throwIfRequested()) : r.push(h.data);
          }, l.onstart = () => {
            this.isRecording.value = !0;
          }, l.onpause = () => {
            this.isRecording.value = !1;
          }, l.onstop = () => {
            this.isRecording.value = !1;
            const h = new Blob(r, { type: "audio/wav" });
            c(h);
          }, l.onerror = (h) => {
            this.isRecording.value = !1, d(h);
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
const $x = { class: "d-flex flex-row justify-content-between border rounded-pill border-secondary my-3 py-1 px-2" }, Cx = {
  class: "text-secondary d-flex flex-row align-items-center",
  style: { "font-size": "0.5rem" }
}, Rx = {
  key: 0,
  class: "iconfont icon-pause"
}, kx = {
  key: 1,
  class: "iconfont icon-play"
}, Ax = /* @__PURE__ */ O("span", { class: "iconfont icon-delete" }, null, -1), Tx = [
  Ax
], Ox = {
  key: 1,
  style: { "font-size": "0.5rem" }
}, Ix = /* @__PURE__ */ O("p", null, "选择需要转换的配音师", -1), Lx = {
  class: "speakers-container border rounded d-flex flex-row flex-wrap row-gap-1 column-gap-2 overflow-y-auto overflow-x-hidden",
  style: { height: "150px" }
}, Px = ["disabled"], Dx = /* @__PURE__ */ ce({
  __name: "audio-upload",
  emits: ["submit"],
  setup(n, { expose: s, emit: r }) {
    const { globalEditConfig: o } = ut(), { audioUpload: l, transfer: c, fetchSpeaker: d, timeoutMilliseconds: h } = o.conversion, m = D(), g = D(), E = D(), $ = D(!0), S = D([]), k = D(), w = De(), y = De(), M = new ff(), { playState: F } = M;
    let U;
    const T = new Sx(), H = new N0("audio/*"), Y = new M0(60), { state: ee } = Y, { recorderState: N } = T, ve = cs(m), Re = Mc("reopen");
    Ke(ve, (Ee) => {
      Ee || G();
    }), Ct(async () => {
      S.value = await d();
    }), Ke(ve, (Ee) => {
      Ee || ($.value = !0, U == null || U.cancel());
    }), s({
      openInputFile: Ye
    });
    function G() {
      $.value = !0, q();
    }
    function q() {
      M.pause(), g.value = void 0, E.value = void 0, k.value = void 0, w.value = void 0, y.value = void 0, U == null || U.cancel();
    }
    function W() {
      T.stop(), Y.stop();
    }
    async function Z() {
      U = new $c(6e4), Y.start();
      try {
        U.startTimeout(), w.value = await T.start(U.token);
      } catch (Ee) {
        rt.emit(nt.ERROR, `${Ee}`, Ee);
      } finally {
        U.cancel(), Y.stop();
      }
    }
    function fe() {
      if (F.value === "playing")
        M.pause();
      else if (w.value) {
        const Ee = window.URL.createObjectURL(w.value);
        M.load(Ee), M.play();
      } else if (y.value) {
        const Ee = window.URL.createObjectURL(y.value);
        M.load(Ee), M.play();
      }
    }
    async function Ye() {
      try {
        return y.value = await H.open(), $.value = !1, !0;
      } catch {
        return !1;
      }
    }
    async function Yt() {
      try {
        if (U = new $c(h), $.value && w.value)
          U.startTimeout(), g.value = await l(w.value, U.token);
        else if (!$.value && y.value)
          U.startTimeout(), g.value = await l(y.value, U.token);
        else
          throw new Error("请选则文件或实时录音");
      } catch (Ee) {
        rt.emit(nt.ERROR, `${Ee}`, Ee);
      }
    }
    async function ze(Ee) {
      try {
        g.value ? (k.value = Ee, E.value = await c({ audioId: g.value.id, speakerId: Ee.id })) : rt.emit(nt.ERROR, "请先上传音频文件");
      } catch (Oe) {
        rt.emit(nt.ERROR, `${Oe}`, Oe);
      }
    }
    function xe() {
      E.value && k.value && (r("submit", { label: k.value.displayName, value: E.value.src }), G());
    }
    function Gn() {
      U == null || U.cancel(), Re == null || Re();
    }
    return (Ee, Oe) => {
      var Xr, Jr;
      return z(), J("div", {
        class: "audio-upload",
        ref_key: "boxRef",
        ref: m
      }, [
        O("div", $x, [
          O("div", Cx, [
            w.value || y.value ? (z(), J("button", {
              key: 0,
              onClick: fe,
              class: "btn btn-sm rounded-pill"
            }, [
              R(F) === "playing" || R(N) === "recording" ? (z(), J("span", Rx)) : (z(), J("span", kx))
            ])) : Qt("", !0),
            O("span", null, Ce(((Xr = y.value) == null ? void 0 : Xr.name) || ((Jr = w.value) == null ? void 0 : Jr.name)), 1)
          ]),
          O("div", null, [
            !g.value && (w.value || y.value) ? (z(), J("button", {
              key: 0,
              onClick: q,
              class: "btn btn-sm rounded-pill"
            }, Tx)) : Qt("", !0),
            g.value ? (z(), J("span", Ox, "已上传")) : Qt("", !0),
            $.value && !w.value ? (z(), J(We, { key: 2 }, [
              R(N) === "recording" ? (z(), J("button", {
                key: 0,
                onClick: W,
                class: "btn btn-primary btn-sm rounded-pill"
              }, " 结束录音(" + Ce(R(ee)) + ")s ", 1)) : (z(), J("button", {
                key: 1,
                onClick: Z,
                class: "btn btn-primary btn-sm rounded-pill"
              }, " 开始录音 "))
            ], 64)) : Qt("", !0),
            !$.value && !y.value ? (z(), J("button", {
              key: 3,
              onClick: Ye,
              class: "btn btn-primary btn-sm rounded-pill"
            }, " 选择文件 ")) : Qt("", !0),
            g.value ? (z(), J("button", {
              key: 4,
              onClick: Gn,
              class: "btn btn-primary btn-sm rounded-pill"
            }, " 重传音频 ")) : Qt("", !0),
            !g.value && (y.value || w.value) ? (z(), J("button", {
              key: 5,
              onClick: Yt,
              class: "btn btn-primary btn-sm rounded-pill"
            }, " 上传音频 ")) : Qt("", !0)
          ])
        ]),
        O("div", null, [
          Ix,
          O("div", Lx, [
            (z(!0), J(We, null, lt(S.value, (qn, mn) => {
              var kn;
              return z(), Ue(Ex, {
                onClick: (ya) => ze(qn),
                key: mn,
                label: qn.displayName,
                avatar: qn.avatar,
                activated: qn.name === ((kn = k.value) == null ? void 0 : kn.name)
              }, null, 8, ["onClick", "label", "avatar", "activated"]);
            }), 128))
          ])
        ]),
        O("button", {
          class: "btn btn-primary mt-1",
          onClick: xe,
          disabled: !E.value
        }, " 完成录音并上传完成后，可选择配音师转换 ", 8, Px)
      ], 512);
    };
  }
}), Nx = {
  class: "fw-bold",
  style: { "font-size": "0.5rem" }
}, Mx = /* @__PURE__ */ O("p", { class: "text-start text-danger" }, "请在安静的环境中进行录音，以需要转换的风格，读出以下文案", -1), Vx = {
  class: "border border-secondary rounded p-2 w-100",
  style: { height: "100px" }
}, Fx = { class: "mt-2" }, Ux = /* @__PURE__ */ O("p", {
  class: "mt-2 text-secondary",
  style: { "font-size": "0.5rem" }
}, " 录音内容需要和滑选一致，音频限制60秒，滑选文案限制60个字 ", -1), Bx = /* @__PURE__ */ ce({
  __name: "conversion-content",
  props: {
    text: {}
  },
  emits: ["submit"],
  setup(n) {
    const s = D(), r = D(), o = D(!0), l = D(!1), c = cs(s);
    Ay("reopen", () => {
      o.value = !0, l.value = !1;
    }), Ke(c, (m) => {
      m || (o.value = !0, l.value = !1);
    });
    function d() {
      o.value = !0, l.value = !0;
    }
    async function h() {
      var m;
      await ((m = r.value) == null ? void 0 : m.openInputFile()) && (o.value = !1, l.value = !0);
    }
    return (m, g) => (z(), J("div", {
      ref_key: "boxRef",
      ref: s,
      class: "px-2 py-1",
      style: { width: "410px" }
    }, [
      pn(O("section", Nx, [
        Mx,
        O("div", Vx, Ce(m.text), 1)
      ], 512), [
        [hn, o.value]
      ]),
      pn(O("section", Fx, [
        O("div", { class: "w-100 d-flex flex-column row-gap-1" }, [
          O("button", {
            onClick: d,
            class: "btn btn-success"
          }, "实时录音"),
          O("button", {
            onClick: h,
            class: "btn btn-primary"
          }, "上传录音")
        ]),
        Ux
      ], 512), [
        [hn, !l.value]
      ]),
      pn(O("section", null, [
        P(Dx, {
          ref_key: "audioUploadRef",
          ref: r,
          onSubmit: g[0] || (g[0] = (E) => m.$emit("submit", E))
        }, null, 512)
      ], 512), [
        [hn, l.value]
      ])
    ], 512));
  }
});
class Hx extends Ft {
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
    return s == null ? !0 : Rt.isCollapsed(s) ? (this.editor.emit(Te.ERROR, "请框选要变音的句子"), !0) : !1;
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
const Mf = /* @__PURE__ */ ce({
  __name: "conversion-menu",
  setup(n) {
    const s = D(), r = D(), o = De(), l = De(), c = D(!1), d = D(""), { x: h, y: m, height: g } = Yr(r), E = (S) => {
      if (l.value ?? (l.value = new Hx(S)), l.value.isDisabled())
        return;
      d.value = l.value.getValue();
      const k = {
        x: h.value - 200,
        y: m.value + g.value
      };
      o.value = S, s.value.setPosition(k), c.value = !0;
    };
    function $(S) {
      var k;
      (k = l.value) == null || k.exec(S), c.value = !1;
    }
    return (S, k) => (z(), Ue(R(gr), {
      ref_key: "dragRef",
      ref: s,
      visible: c.value,
      "onUpdate:visible": k[0] || (k[0] = (w) => c.value = w)
    }, {
      reference: j(() => [
        P(R(ct), {
          ref_key: "menuRef",
          ref: r,
          text: "局部变音",
          icon: "conversion",
          onClick: E
        }, null, 512)
      ]),
      default: j(() => [
        P(Bx, {
          text: d.value,
          onSubmit: $
        }, null, 8, ["text"])
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Wx = { class: "anchor-avatar d-flex flex-column justify-content-center align-items-center" }, zx = { class: "position-relative" }, Gx = ["src"], qx = {
  key: 0,
  class: "iconfont icon-play1"
}, Kx = {
  key: 1,
  class: "iconfont icon-pause1"
}, Yx = { class: "anchor-avatar-name text-white" }, Xx = /* @__PURE__ */ ce({
  __name: "try-play-circle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(n, { emit: s }) {
    const r = D(), o = D(), l = D(0), c = D(0), d = ls(), { globalEditConfig: h } = ut(), { audioPlayer: m } = d, g = m.playState, { position: E } = pa(r, {
      initialValue: { x: window.innerWidth - 15, y: window.innerHeight / 2 - 15 },
      onStart: (U, T) => y(T.clientX, T.clientY) ? !1 : void 0
    }), { style: $ } = va(r, E);
    function S(U) {
      (() => {
        if (y(U.clientX, U.clientY))
          return M(U) ? F() : s("update:visible", !1);
      })(), k();
    }
    function k() {
      l.value = 0, c.value = 0;
    }
    function w(U) {
      l.value = U.clientX, c.value = U.clientY;
    }
    function y(U, T) {
      return U > l.value - 10 && U < l.value + 10 && T > c.value - 10 && T < c.value + 10;
    }
    function M(U) {
      var H;
      const T = U.target;
      return ((H = o.value) == null ? void 0 : H.contains(T)) || !1;
    }
    async function F() {
      if (g.value === "playing")
        m.pause();
      else
        try {
          const U = ga(), T = await h.tryPlay.play(U);
          m.load(T.src), m.play();
        } catch {
          m.pause();
        }
    }
    return (U, T) => pn((z(), J("div", {
      ref_key: "boxRef",
      ref: r,
      class: "try-play-circel user-select-none rounded-circle overflow-hidden",
      style: ts([R($), { position: "fixed" }]),
      onMousedown: w,
      onMouseup: S
    }, [
      O("div", Wx, [
        O("div", zx, [
          O("img", {
            src: R(d).speaker.avatar || R(Kr)(),
            class: "rounded-circle"
          }, null, 8, Gx),
          O("button", {
            ref_key: "btnPlayRef",
            ref: o,
            class: "btn w-100 h-100 position-absolute top-50 start-50 translate-middle bg-black bg-opacity-50 text-white rounded-circle"
          }, [
            R(g) === "paused" ? (z(), J("span", qx)) : (z(), J("span", Kx))
          ], 512)
        ]),
        O("div", Yx, Ce(R(d).speaker.displayName), 1)
      ])
    ], 36)), [
      [hn, U.visible]
    ]);
  }
});
const Jx = /* @__PURE__ */ vt(Xx, [["__scopeId", "data-v-0f55dd94"]]), Zx = {
  key: 0,
  class: "position-absolute top-0 start-100 translate-middle text-bg-danger text-nowrap rounded px-1",
  style: { "font-size": "0.5rem" }
}, Qx = ["src"], jx = { class: "anchor-avatar-name text-white" }, eE = /* @__PURE__ */ ce({
  __name: "anchor-avatar",
  props: {
    activate: { type: Boolean },
    data: {}
  },
  emits: ["click"],
  setup(n) {
    return (s, r) => {
      var o, l, c;
      return z(), J("div", {
        class: "anchor-avatar d-flex flex-column align-items-center text-center justify-content-center position-relative",
        onClick: r[0] || (r[0] = (d) => {
          var h;
          return s.$emit("click", (h = s.data) == null ? void 0 : h.value);
        })
      }, [
        (o = s.data) != null && o.isFree ? Qt("", !0) : (z(), J("span", Zx, "付费")),
        O("img", {
          src: ((l = s.data) == null ? void 0 : l.src) ?? R(Kr)(),
          class: $t(["rounded-circle", { "border border-2 border-warning": s.activate }]),
          style: { height: "40px" }
        }, null, 10, Qx),
        O("div", jx, Ce((c = s.data) == null ? void 0 : c.label), 1)
      ]);
    };
  }
});
const Vf = /* @__PURE__ */ vt(eE, [["__scopeId", "data-v-845325c9"]]), tE = {
  style: { height: "170px" },
  class: "w-100 d-flex flex-row flex-wrap justify-content-start overflow-x-hidden overflow-y-auto scrollbar-none"
}, nE = /* @__PURE__ */ ce({
  __name: "anchor-list",
  props: {
    filter: {}
  },
  setup(n) {
    const s = n, { globalEditConfig: r } = ut(), { fetchData: o } = r.tryPlay, l = ls(), c = D([]), d = De([]);
    Ke(
      () => s.filter,
      async (m) => {
        const g = await o(St(m));
        d.value = g, c.value = g.map((E) => ({ label: E.displayName, value: E.name }));
      }
    );
    function h(m) {
      const g = d.value.find((E) => E.name === m);
      g && l.setSpeaker(g);
    }
    return Ct(async () => {
      const m = await o(St(s.filter));
      d.value = m, c.value = m.map((g) => ({ label: g.displayName, value: g.name })), c.value.length > 0 && h(c.value[0].value);
    }), (m, g) => (z(), J("div", tE, [
      (z(!0), J(We, null, lt(c.value, (E, $) => (z(), J("div", {
        class: "m-3",
        key: $
      }, [
        P(Vf, {
          data: E,
          activate: E.value === R(l).speaker.name,
          onClick: (S) => h(E.value)
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
    return (s, r) => (z(), J("span", {
      class: $t(["tag-item d-inline-block text-white text-center text-nowrap text-truncate", { "border border-white rounded-pill": s.activate }]),
      onClick: r[0] || (r[0] = (o) => s.$emit("click", s.value)),
      style: { height: "20px", "min-width": "60px", "max-width": "160px", "font-size": "0.5rem", cursor: "pointer" }
    }, [
      en(s.$slots, "default")
    ], 2));
  }
}), rE = { class: "tag-list w-100" }, iE = {
  class: "w-100 d-flex flex-row border-bottom border-secondary align-items-center",
  style: { height: "40px" }
}, sE = {
  class: "w-100 d-flex flex-row border-bottom border-secondary align-items-center",
  style: { height: "40px" }
}, oE = {
  style: { height: "100px" },
  class: "w-100 pt-2 d-flex flex-row flex-wrap align-content-start row-gap-2 overflow-y-auto overflow-x-hidden scrollbar-none"
}, aE = /* @__PURE__ */ ce({
  __name: "tag-list",
  props: {
    filter: {}
  },
  emits: ["update:filter"],
  setup(n, { emit: s }) {
    const r = n, { globalEditConfig: o } = ut(), { topFlag: l, gender: c, featchTag: d } = o.tryPlay, h = D([]);
    Ct(async () => {
      h.value = await d();
    });
    function m($) {
      s("update:filter", { ...St(r.filter), topFlag: $ });
    }
    function g($) {
      s("update:filter", { ...St(r.filter), gender: $ });
    }
    function E($) {
      s("update:filter", { ...St(r.filter), tag: $ });
    }
    return ($, S) => (z(), J("div", rE, [
      O("div", iE, [
        (z(!0), J(We, null, lt(R(l), (k, w) => (z(), Ue(zo, {
          onClick: m,
          key: w,
          value: k.value,
          activate: $.filter.topFlag === k.value
        }, {
          default: j(() => [
            Ze(Ce(k.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "activate"]))), 128))
      ]),
      O("div", sE, [
        (z(!0), J(We, null, lt(R(c), (k, w) => (z(), Ue(zo, {
          onClick: g,
          key: w,
          value: k.value,
          activate: $.filter.gender === k.value
        }, {
          default: j(() => [
            Ze(Ce(k.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "activate"]))), 128))
      ]),
      O("div", oE, [
        (z(!0), J(We, null, lt(h.value, (k, w) => (z(), Ue(zo, {
          onClick: E,
          key: w,
          value: k.value,
          activate: $.filter.tag === k.value
        }, {
          default: j(() => [
            Ze(Ce(k.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "activate"]))), 128))
      ])
    ]));
  }
});
const lE = ["src"], uE = {
  class: "anchor-avatar-name text-white",
  style: { "font-size": "0.5rem" }
}, cE = /* @__PURE__ */ ce({
  __name: "style-avatar",
  props: {
    activate: { type: Boolean },
    data: {}
  },
  emits: ["click"],
  setup(n) {
    return (s, r) => {
      var o, l;
      return z(), J("div", {
        class: "anchor-avatar d-flex flex-column align-items-center text-center justify-content-center position-relative",
        onClick: r[0] || (r[0] = (c) => {
          var d;
          return s.$emit("click", (d = s.data) == null ? void 0 : d.value);
        })
      }, [
        O("img", {
          src: ((o = s.data) == null ? void 0 : o.src) || R(Kr)(),
          class: $t(["rounded-circle", { "border border-2 border-warning": s.activate }]),
          style: { height: "30px" }
        }, null, 10, lE),
        O("div", uE, Ce((l = s.data) == null ? void 0 : l.label), 1)
      ]);
    };
  }
});
const fE = /* @__PURE__ */ vt(cE, [["__scopeId", "data-v-71aedb65"]]);
function dE(n) {
  return `${(0.05 * n * 100).toFixed(0)}%`;
}
function pE(n) {
  return `${((n - 1) * 100).toFixed(0)}%`;
}
const _a = (n) => (ns("data-v-0210af00"), n = n(), rs(), n), hE = {
  class: "slider-panle w-100 px-3 text-white",
  style: { "font-size": "0.5rem" }
}, vE = { class: "mt-2 d-flex text-center justify-content-between align-items-center" }, mE = { class: "me-auto d-flex flex-row align-items-center" }, gE = ["src"], _E = {
  class: "ms-2 d-flex flex-column justify-content-between",
  style: { height: "50px" }
}, yE = { class: "d-flex dlex-row column-gap-2 align-items-end" }, bE = { class: "fs-6" }, wE = { style: { "font-size": "0.5rem" } }, xE = { class: "d-flex flex-row column-gap-2 align-items-center" }, EE = {
  key: 0,
  class: "badge text-bg-primary px-2"
}, SE = { class: "d-flex flex-column align-items-end" }, $E = /* @__PURE__ */ _a(() => /* @__PURE__ */ O("div", { class: "text-info" }, "音频时长，请以生成后的为准", -1)), CE = { class: "mt-1" }, RE = /* @__PURE__ */ _a(() => /* @__PURE__ */ O("span", null, "/", -1)), kE = { class: "role-list mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-2 column-gap-3" }, AE = ["onClick"], TE = { class: "audio-mood mt-2 d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-1 column-gap-2" }, OE = ["onClick"], IE = /* @__PURE__ */ _a(() => /* @__PURE__ */ O("div", { class: "my-3" }, [
  /* @__PURE__ */ O("span", { class: "border rounded-pill p-1" }, "配音师详情")
], -1)), LE = { class: "slider-box" }, PE = { class: "slider-box" }, DE = { class: "d-flex flex-row gap-3 my-3" }, NE = ["onClick"], ME = {
  class: "d-flex flex-row flex-wrap row-gap-2 column-gap-3 mb-3",
  style: { "min-height": "100px" }
}, VE = ["onClick"], FE = /* @__PURE__ */ ce({
  __name: "slider-panle",
  setup(n) {
    const { globalEditConfig: s } = ut(), { rootProsody: r, rootExpressAs: o } = zn(), { fetchStar: l, category: c, fetchData: d } = s.tryPlay, h = ls(), m = D(h.speaker.isStar), g = D(10), E = D(0), $ = D([0, 2]), S = D(1), k = D([-10, 10]), w = D(0), y = Ve(() => Sc(g.value)), M = Ve(() => Sc(E.value)), F = Ji(w0()), U = Ji(x0()), T = D(""), H = D([]);
    Ct(async () => {
      await ve(c[0].value);
    }), Ke(
      () => h.speaker,
      (G) => {
        G.roles.length > 0 && ee(G.roles[0].value), G.styles.length > 0 && N(G.styles[0].value);
      },
      { immediate: !0 }
    ), Ke(
      w,
      (G) => {
        r.pitch = dE(G);
      },
      { immediate: !0 }
    ), Ke(
      S,
      (G) => {
        r.rate = pE(G);
      },
      { immediate: !0 }
    );
    async function Y() {
      m.value = await l(h.speaker.name, !m.value);
    }
    function ee(G) {
      o.role = G;
    }
    function N(G) {
      o.style = G;
    }
    async function ve(G) {
      T.value = G;
      try {
        H.value = await d({ ...ca(), category: G });
      } catch (q) {
        rt.emit(nt.ERROR, `${q}`, q);
      }
    }
    function Re(G) {
      h.setSpeaker(St(G));
    }
    return (G, q) => (z(), J("div", hE, [
      O("div", vE, [
        O("div", mE, [
          O("img", {
            src: R(Kr)(),
            class: "rounded-circle",
            style: { height: "50px" }
          }, null, 8, gE),
          O("div", _E, [
            O("div", yE, [
              O("span", bE, Ce(R(h).speaker.displayName), 1),
              O("span", wE, Ce(S.value) + "x", 1)
            ]),
            O("div", xE, [
              P(R(ia), {
                onClick: Y,
                class: "fs-6",
                style: ts({ color: m.value ? "red" : "white" })
              }, {
                default: j(() => [
                  m.value ? (z(), Ue(R(Vy), { key: 0 })) : (z(), Ue(R(Fy), { key: 1 }))
                ]),
                _: 1
              }, 8, ["style"]),
              R(h).speaker.isSupper24K ? (z(), J("span", EE, " 24K ")) : Qt("", !0)
            ])
          ])
        ]),
        O("div", SE, [
          $E,
          O("div", CE, [
            O("span", null, Ce(M.value), 1),
            RE,
            O("span", null, Ce(y.value), 1)
          ]),
          P(R(Lo), {
            max: g.value,
            modelValue: E.value,
            "onUpdate:modelValue": q[0] || (q[0] = (W) => E.value = W),
            size: "small"
          }, null, 8, ["max", "modelValue"])
        ])
      ]),
      O("div", kE, [
        (z(!0), J(We, null, lt(R(h).speaker.roles, (W, Z) => (z(), J("div", {
          onClick: (fe) => ee(W.value),
          key: Z,
          class: $t(["rounded-pill px-1", { border: W.value === (R(o).role || "") }])
        }, Ce(W.label), 11, AE))), 128))
      ]),
      O("ul", TE, [
        (z(!0), J(We, null, lt(R(h).speaker.styles, (W, Z) => (z(), J("li", {
          class: "mx-2",
          onClick: (fe) => N(W.value),
          key: Z
        }, [
          P(fE, {
            activate: W.value === (R(o).style || ""),
            data: W
          }, null, 8, ["activate", "data"])
        ], 8, OE))), 128))
      ]),
      IE,
      O("div", LE, [
        O("div", null, [
          O("span", null, "语速：" + Ce(S.value) + "x", 1)
        ]),
        P(R(Lo), {
          modelValue: S.value,
          "onUpdate:modelValue": q[1] || (q[1] = (W) => S.value = W),
          min: $.value[0],
          max: $.value[1],
          step: 0.05,
          marks: F
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      O("div", PE, [
        O("div", null, [
          O("span", null, "语调：" + Ce(w.value), 1)
        ]),
        P(R(Lo), {
          modelValue: w.value,
          "onUpdate:modelValue": q[2] || (q[2] = (W) => w.value = W),
          min: k.value[0],
          max: k.value[1],
          step: 0.2,
          marks: U
        }, null, 8, ["modelValue", "min", "max", "marks"])
      ]),
      O("div", null, [
        O("ul", DE, [
          (z(!0), J(We, null, lt(R(c), (W, Z) => (z(), J("li", {
            onClick: (fe) => ve(W.value),
            key: Z,
            class: $t(["rounded-pill px-1", { border: W.value === T.value }])
          }, Ce(W.label), 11, NE))), 128))
        ]),
        O("ul", ME, [
          (z(!0), J(We, null, lt(H.value, (W, Z) => (z(), J("li", {
            onClick: (fe) => Re(W),
            key: Z
          }, [
            P(Vf, {
              activate: W.name === R(h).speaker.name,
              data: { ...W, label: W.displayName, value: W.name }
            }, null, 8, ["activate", "data"])
          ], 8, VE))), 128))
        ])
      ])
    ]));
  }
});
const UE = /* @__PURE__ */ vt(FE, [["__scopeId", "data-v-0210af00"]]), BE = (n) => (ns("data-v-b9c1f88f"), n = n(), rs(), n), HE = { class: "box ms-2" }, WE = { class: "try-play-header text-center d-flex flex-row justify-content-between" }, zE = { class: "try-play-body d-flex flex-row" }, GE = { class: "try-play-left w-50 border-right border-secondary" }, qE = { class: "pe-1" }, KE = /* @__PURE__ */ BE(() => /* @__PURE__ */ O("div", { class: "py-1 border-top border-secondary" }, null, -1)), YE = { class: "try-play-right w-50 border-start rounded border-top border-secondary overflow-x-hidden overflow-y-auto scrollbar-none" }, XE = /* @__PURE__ */ ce({
  __name: "try-play-panle",
  props: {
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(n, { emit: s }) {
    const r = n, o = D(), l = D(""), c = D(), d = D(), h = D(ca());
    Ct(() => {
      window.addEventListener("keydown", m);
    }), na(() => {
      window.addEventListener("keydown", m);
    }), Ke(
      () => r.visible,
      (w) => {
        w && S();
      }
    );
    function m(w) {
      w.code === "Escape" && r.visible && $();
    }
    const { position: g } = pa(d, {
      initialValue: { x: 40, y: 40 }
    }), { style: E } = va(c, g);
    Ct(() => {
      g.value.x = (window.innerWidth - 890) / 2, g.value.y = (window.innerHeight - 390) / 2;
    });
    function $() {
      s("update:visible", !1);
    }
    function S() {
      hr(() => {
        var w, y;
        (y = (w = o.value) == null ? void 0 : w.input) == null || y.focus();
      });
    }
    function k() {
      h.value = { ...h.value, word: l.value };
    }
    return (w, y) => pn((z(), J("div", {
      ref_key: "boxRef",
      ref: c,
      style: ts([R(E), { position: "fixed" }]),
      class: "try-play user-select-none card z-3 shadow"
    }, [
      O("div", HE, [
        O("div", WE, [
          O("div", {
            ref_key: "handleRef",
            ref: d,
            class: "col-11 try-play-move"
          }, null, 512),
          O("div", {
            onClick: $,
            class: "col-1 try-play-menu-close"
          }, [
            P(R(ia), { color: "white" }, {
              default: j(() => [
                P(R(Uy))
              ]),
              _: 1
            })
          ])
        ]),
        O("div", zE, [
          O("div", GE, [
            O("div", qE, [
              P(R(is), {
                onSubmit: it(k, ["prevent"])
              }, {
                default: j(() => [
                  P(R(ss), {
                    "input-style": { color: "white" },
                    ref_key: "searchInputRef",
                    ref: o,
                    modelValue: l.value,
                    "onUpdate:modelValue": y[0] || (y[0] = (M) => l.value = M),
                    placeholder: "输入名称搜索"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["onSubmit"])
            ]),
            P(aE, {
              filter: h.value,
              "onUpdate:filter": y[1] || (y[1] = (M) => h.value = M)
            }, null, 8, ["filter"]),
            KE,
            P(nE, { filter: h.value }, null, 8, ["filter"])
          ]),
          O("div", YE, [
            P(UE)
          ])
        ])
      ])
    ], 4)), [
      [hn, w.visible]
    ]);
  }
});
const JE = /* @__PURE__ */ vt(XE, [["__scopeId", "data-v-b9c1f88f"]]), Ff = /* @__PURE__ */ ce({
  __name: "try-play",
  setup(n) {
    const s = D(!0);
    function r(o) {
      o || (s.value = !0);
    }
    return (o, l) => (z(), Ue(Uc, { to: "body" }, [
      P(Jx, {
        visible: s.value,
        "onUpdate:visible": l[0] || (l[0] = (c) => s.value = c)
      }, null, 8, ["visible"]),
      P(JE, {
        visible: !s.value,
        "onUpdate:visible": r
      }, null, 8, ["visible"])
    ]));
  }
});
const ZE = {
  install: (n) => {
    n.component("PlayMenu", Ef), n.component("PinyinMenu", Sf), n.component("ContinuousMenu", $f), n.component("ReadMenu", Cf), n.component("DigitalMenu", Rf), n.component("AliasMenu", kf), n.component("EnglishMenu", Af), n.component("ChangespeedMenu", Tf), n.component("RhythmMenu", Of), n.component("SpecialMenu", If), n.component("MuteMenu", Lf), n.component("BgmMenu", Pf), n.component("SensitiveMenu", Df), n.component("ManagementMenu", Nf), n.component("ConversionMenu", Mf), n.component("TryPlay", Ff);
  }
};
var jo = { exports: {} }, ea = { exports: {} };
(function(n, s) {
  Object.defineProperty(s, "__esModule", { value: !0 }), s.ParsingError = void 0;
  class r extends Error {
    constructor(H, Y) {
      super(H), this.cause = Y;
    }
  }
  s.ParsingError = r;
  let o;
  function l() {
    return m(!1) || S() || $() || E();
  }
  function c() {
    return y(/\s*/), m(!0) || $() || g() || h(!1);
  }
  function d() {
    const T = h(!0), H = [];
    let Y, ee = c();
    for (; ee; ) {
      if (ee.node.type === "Element") {
        if (Y)
          throw new Error("Found multiple root nodes");
        Y = ee.node;
      }
      ee.excluded || H.push(ee.node), ee = c();
    }
    if (!Y)
      throw new r("Failed to parse XML", "Root Element not found");
    if (o.xml.length !== 0)
      throw new r("Failed to parse XML", "Not Well-Formed XML");
    return {
      declaration: T ? T.node : null,
      root: Y,
      children: H
    };
  }
  function h(T) {
    const H = y(T ? /^<\?(xml)\s*/ : /^<\?([\w-:.]+)\s*/);
    if (!H)
      return;
    const Y = {
      name: H[1],
      type: "ProcessingInstruction",
      attributes: {}
    };
    for (; !(M() || F("?>")); ) {
      const ee = k();
      if (ee)
        Y.attributes[ee.name] = ee.value;
      else
        return;
    }
    return y(/\?>/), {
      excluded: T ? !1 : o.options.filter(Y) === !1,
      node: Y
    };
  }
  function m(T) {
    const H = y(/^<([^?!</>\s]+)\s*/);
    if (!H)
      return;
    const Y = {
      type: "Element",
      name: H[1],
      attributes: {},
      children: []
    }, ee = T ? !1 : o.options.filter(Y) === !1;
    for (; !(M() || F(">") || F("?>") || F("/>")); ) {
      const ve = k();
      if (ve)
        Y.attributes[ve.name] = ve.value;
      else
        return;
    }
    if (y(/^\s*\/>/))
      return Y.children = null, {
        excluded: ee,
        node: Y
      };
    y(/\??>/);
    let N = l();
    for (; N; )
      N.excluded || Y.children.push(N.node), N = l();
    if (o.options.strictMode) {
      const ve = `</${Y.name}>`;
      if (o.xml.startsWith(ve))
        o.xml = o.xml.slice(ve.length);
      else
        throw new r("Failed to parse XML", `Closing tag not matching "${ve}"`);
    } else
      y(/^<\/\s*[\w-:.\u00C0-\u00FF]+>/);
    return {
      excluded: ee,
      node: Y
    };
  }
  function g() {
    const T = y(/^<!DOCTYPE\s+\S+\s+SYSTEM[^>]*>/) || y(/^<!DOCTYPE\s+\S+\s+PUBLIC[^>]*>/) || y(/^<!DOCTYPE\s+\S+\s*\[[^\]]*]>/) || y(/^<!DOCTYPE\s+\S+\s*>/);
    if (T) {
      const H = {
        type: "DocumentType",
        content: T[0]
      };
      return {
        excluded: o.options.filter(H) === !1,
        node: H
      };
    }
  }
  function E() {
    if (o.xml.startsWith("<![CDATA[")) {
      const T = o.xml.indexOf("]]>");
      if (T > -1) {
        const H = T + 3, Y = {
          type: "CDATA",
          content: o.xml.substring(0, H)
        };
        return o.xml = o.xml.slice(H), {
          excluded: o.options.filter(Y) === !1,
          node: Y
        };
      }
    }
  }
  function $() {
    const T = y(/^<!--[\s\S]*?-->/);
    if (T) {
      const H = {
        type: "Comment",
        content: T[0]
      };
      return {
        excluded: o.options.filter(H) === !1,
        node: H
      };
    }
  }
  function S() {
    const T = y(/^([^<]+)/);
    if (T) {
      const H = {
        type: "Text",
        content: T[1]
      };
      return {
        excluded: o.options.filter(H) === !1,
        node: H
      };
    }
  }
  function k() {
    const T = y(/([^=]+)\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)\s*/);
    if (T)
      return {
        name: T[1].trim(),
        value: w(T[2].trim())
      };
  }
  function w(T) {
    return T.replace(/^['"]|['"]$/g, "");
  }
  function y(T) {
    const H = o.xml.match(T);
    if (H)
      return o.xml = o.xml.slice(H[0].length), H;
  }
  function M() {
    return o.xml.length === 0;
  }
  function F(T) {
    return o.xml.indexOf(T) === 0;
  }
  function U(T, H = {}) {
    T = T.trim();
    const Y = H.filter || (() => !0);
    return o = {
      xml: T,
      options: Object.assign(Object.assign({}, H), { filter: Y, strictMode: H.strictMode === !0 })
    }, d();
  }
  n.exports = U, s.default = U;
})(ea, ea.exports);
var QE = ea.exports;
(function(n, s) {
  var r = Fn && Fn.__importDefault || function(w) {
    return w && w.__esModule ? w : { default: w };
  };
  Object.defineProperty(s, "__esModule", { value: !0 });
  const o = r(QE);
  function l(w) {
    if (!w.options.indentation && !w.options.lineSeparator)
      return;
    w.content += w.options.lineSeparator;
    let y;
    for (y = 0; y < w.level; y++)
      w.content += w.options.indentation;
  }
  function c(w) {
    w.content = w.content.replace(/ +$/, "");
    let y;
    for (y = 0; y < w.level; y++)
      w.content += w.options.indentation;
  }
  function d(w, y) {
    w.content += y;
  }
  function h(w, y, M) {
    if (typeof w.content == "string")
      m(w.content, y, M);
    else if (w.type === "Element")
      E(w, y, M);
    else if (w.type === "ProcessingInstruction")
      S(w, y);
    else
      throw new Error("Unknown node type: " + w.type);
  }
  function m(w, y, M) {
    if (!M) {
      const F = w.trim();
      (y.options.lineSeparator || F.length === 0) && (w = F);
    }
    w.length > 0 && (!M && y.content.length > 0 && l(y), d(y, w));
  }
  function g(w, y) {
    const M = "/" + w.join("/"), F = w[w.length - 1];
    return y.includes(F) || y.includes(M);
  }
  function E(w, y, M) {
    if (y.path.push(w.name), !M && y.content.length > 0 && l(y), d(y, "<" + w.name), $(y, w.attributes), w.children === null || y.options.forceSelfClosingEmptyTag && w.children.length === 0) {
      const F = y.options.whiteSpaceAtEndOfSelfclosingTag ? " />" : "/>";
      d(y, F);
    } else if (w.children.length === 0)
      d(y, "></" + w.name + ">");
    else {
      const F = w.children;
      d(y, ">"), y.level++;
      let U = w.attributes["xml:space"] === "preserve", T = !1;
      if (!U && y.options.ignoredPaths && (T = g(y.path, y.options.ignoredPaths), U = T), !U && y.options.collapseContent) {
        let H = !1, Y = !1, ee = !1;
        F.forEach(function(N, ve) {
          N.type === "Text" ? (N.content.includes(`
`) ? (Y = !0, N.content = N.content.trim()) : (ve === 0 || ve === F.length - 1) && N.content.trim().length === 0 && (N.content = ""), N.content.trim().length > 0 && (H = !0)) : N.type === "CDATA" ? H = !0 : ee = !0;
        }), H && (!ee || !Y) && (U = !0);
      }
      F.forEach(function(H) {
        h(H, y, M || U);
      }), y.level--, !M && !U && l(y), T && c(y), d(y, "</" + w.name + ">");
    }
    y.path.pop();
  }
  function $(w, y) {
    Object.keys(y).forEach(function(M) {
      const F = y[M].replace(/"/g, "&quot;");
      d(w, " " + M + '="' + F + '"');
    });
  }
  function S(w, y) {
    y.content.length > 0 && l(y), d(y, "<?" + w.name), $(y, w.attributes), d(y, "?>");
  }
  function k(w, y = {}) {
    y.indentation = "indentation" in y ? y.indentation : "    ", y.collapseContent = y.collapseContent === !0, y.lineSeparator = "lineSeparator" in y ? y.lineSeparator : `\r
`, y.whiteSpaceAtEndOfSelfclosingTag = y.whiteSpaceAtEndOfSelfclosingTag === !0, y.throwOnFailure = y.throwOnFailure !== !1;
    try {
      const M = (0, o.default)(w, { filter: y.filter, strictMode: y.strictMode }), F = { content: "", level: 0, options: y, path: [] };
      return M.declaration && S(M.declaration, F), M.children.forEach(function(U) {
        h(U, F, !1);
      }), y.lineSeparator ? F.content.replace(/\r\n/g, `
`).replace(/\n/g, y.lineSeparator) : F.content;
    } catch (M) {
      if (y.throwOnFailure)
        throw M;
      return w;
    }
  }
  k.minify = (w, y = {}) => k(w, Object.assign(Object.assign({}, y), { indentation: "", lineSeparator: "" })), n.exports = k, s.default = k;
})(jo, jo.exports);
var jE = jo.exports;
const eS = /* @__PURE__ */ af(jE), _r = (n) => (ns("data-v-fb2870b0"), n = n(), rs(), n), tS = { class: "editor-title d-flex flex-row align-item-center justify-content-between" }, nS = { class: "title-wrapper d-flex flex-column justify-content-center ps-3" }, rS = /* @__PURE__ */ _r(() => /* @__PURE__ */ O("div", { class: "title-author pb-1" }, "SSML编辑器", -1)), iS = { class: "author d-flex flex-row align-items-center justify-content-start" }, sS = /* @__PURE__ */ _r(() => /* @__PURE__ */ O("div", null, "未保存", -1)), oS = /* @__PURE__ */ _r(() => /* @__PURE__ */ O("span", { class: "iconfont icon-play font-size-12 p-1" }, null, -1)), aS = /* @__PURE__ */ _r(() => /* @__PURE__ */ O("div", { class: "d-inline-block" }, null, -1)), lS = { class: "operation-wrapper d-flex flex-row justify-content-center align-items-center" }, uS = /* @__PURE__ */ _r(() => /* @__PURE__ */ O("div", { class: "menu-divider" }, null, -1)), cS = /* @__PURE__ */ _r(() => /* @__PURE__ */ O("div", { class: "px-1" }, null, -1)), fS = {
  class: "ssml-code border border-secondary-subtle rounded-2 px-2",
  style: { "white-space": "pre-wrap", "max-height": "50vh" }
}, dS = { class: "dialog-footer" }, pS = /* @__PURE__ */ ce({
  __name: "editor-title",
  setup(n) {
    const s = D(!1), r = D(""), { rootBackgroundaudio: o } = zn(), l = Ve(() => eS(r.value, {
      indentation: "    ",
      filter: (g) => g.type !== "Comment",
      collapseContent: !0,
      lineSeparator: `
`
    })), c = () => {
      r.value = ga(), s.value = !0;
    }, d = () => {
      o.src && vr.play(o.src);
    }, h = () => {
      vr.stop(o.src), o.src = "", o.remark = "";
    };
    async function m(g) {
      await navigator.clipboard.writeText(g ? l.value : r.value), s.value = !1;
    }
    return (g, E) => (z(), J(We, null, [
      O("div", tS, [
        O("div", nS, [
          rS,
          O("div", iS, [
            sS,
            R(o).src ? (z(), Ue(R(Bc), {
              key: 0,
              class: "bgm-txt ms-2",
              closable: "",
              size: "small",
              onClick: d,
              onClose: h
            }, {
              default: j(() => [
                oS,
                aS,
                O("span", null, Ce(R(o).remark), 1)
              ]),
              _: 1
            })) : Qt("", !0)
          ])
        ]),
        O("div", lS, [
          P(R(Et), {
            type: "primary",
            icon: R(By),
            disabled: ""
          }, {
            default: j(() => [
              Ze("分享")
            ]),
            _: 1
          }, 8, ["icon"]),
          uS,
          P(R(Et), {
            type: "primary",
            onClick: c
          }, {
            default: j(() => [
              Ze("查看SSML")
            ]),
            _: 1
          }),
          P(R(Et), { disabled: "" }, {
            default: j(() => [
              Ze("下载音频")
            ]),
            _: 1
          }),
          P(R(Et), { disabled: "" }, {
            default: j(() => [
              Ze("下载视频")
            ]),
            _: 1
          }),
          P(R(Et), { disabled: "" }, {
            default: j(() => [
              Ze("下载字幕")
            ]),
            _: 1
          }),
          P(R(Et), { disabled: "" }, {
            default: j(() => [
              Ze("声音转换")
            ]),
            _: 1
          }),
          cS
        ])
      ]),
      P(R(Py), {
        modelValue: s.value,
        "onUpdate:modelValue": E[4] || (E[4] = ($) => s.value = $),
        title: "查看SSML",
        width: "80%"
      }, {
        header: j(() => [
          P(R(Et), {
            type: "info",
            onClick: E[0] || (E[0] = ($) => m(!0))
          }, {
            default: j(() => [
              Ze("复制+关闭")
            ]),
            _: 1
          }),
          P(R(Et), {
            type: "primary",
            onClick: E[1] || (E[1] = ($) => m(!1))
          }, {
            default: j(() => [
              Ze("压缩+复制+关闭(推荐)")
            ]),
            _: 1
          })
        ]),
        footer: j(() => [
          O("span", dS, [
            P(R(Et), {
              type: "info",
              onClick: E[2] || (E[2] = ($) => m(!0))
            }, {
              default: j(() => [
                Ze("复制+关闭")
              ]),
              _: 1
            }),
            P(R(Et), {
              type: "primary",
              onClick: E[3] || (E[3] = ($) => m(!1))
            }, {
              default: j(() => [
                Ze("压缩+复制+关闭(推荐)")
              ]),
              _: 1
            })
          ])
        ]),
        default: j(() => [
          O("pre", fS, Ce(l.value), 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
});
const hS = /* @__PURE__ */ vt(pS, [["__scopeId", "data-v-fb2870b0"]]), vS = /* @__PURE__ */ ce({
  __name: "editor-core",
  emits: ["created", "change"],
  setup(n, { emit: s }) {
    const { editor: r, setEditor: o, globalEditConfig: l } = ut(), c = D(null);
    Ct(() => {
      d();
    }), na(() => {
      r == null || r.destroy();
    });
    function d() {
      if (!c.value)
        return;
      const h = Oy({
        selector: c.value,
        mode: "simple",
        config: {
          ...St(l.editorConfig),
          onCreated(m) {
            s("created", m), rt.emit(nt.EDITOR_CREATED, m);
          },
          onChange(m) {
            s("change", m);
          }
        }
      });
      o(h), h.on(Te.ERROR, l.handleError);
    }
    return (h, m) => (z(), J("div", {
      ref_key: "boxRef",
      ref: c,
      class: "edit-core",
      style: { height: "70vh", "overflow-y": "hidden" }
    }, null, 512));
  }
}), mS = { class: "bar-view border-bottom border-1" }, gS = /* @__PURE__ */ ce({
  __name: "bar-view",
  setup(n) {
    return (s, r) => (z(), J(We, null, [
      O("div", mS, [
        P(R(mf), null, {
          default: j(() => [
            P(R(fr), { divider: "green" }, {
              default: j(() => [
                P(R(Ef))
              ]),
              _: 1
            }),
            P(R(fr), { divider: "cyan" }, {
              default: j(() => [
                P(R(Sf)),
                P(R(Cf)),
                P(R(Rf)),
                P(R($f)),
                P(R(kf)),
                P(R(Af))
              ]),
              _: 1
            }),
            P(R(fr), { divider: "orange" }, {
              default: j(() => [
                P(R(Tf)),
                P(R(Nf)),
                P(R(Mf))
              ]),
              _: 1
            }),
            P(R(fr), { divider: "purple" }, {
              default: j(() => [
                P(R(Of)),
                P(R(Lf))
              ]),
              _: 1
            }),
            P(R(fr), { divider: "yellow" }, {
              default: j(() => [
                P(R(If)),
                P(R(Pf))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      P(R(Ff))
    ], 64));
  }
}), _S = { class: "editor-box" }, yS = { class: "editor-core-container shadow pt-1" }, bS = /* @__PURE__ */ ce({
  __name: "editor-view",
  emits: ["created", "change"],
  setup(n, { emit: s }) {
    const r = (d) => {
      s("created", d);
    }, o = (d) => {
      s("change", d);
    };
    function l(d) {
      rt.emit(nt.VIEW_CLICK, d);
    }
    function c(d) {
      rt.emit(nt.VIEW_KEYDOWN, d);
    }
    return (d, h) => (z(), J("div", {
      class: "editor-view",
      onClick: l,
      onKeydown: c
    }, [
      en(d.$slots, "default", {}, () => [
        P(hS)
      ], !0),
      O("div", _S, [
        P(gS),
        O("div", yS, [
          P(vS, {
            onChange: o,
            onCreated: r
          })
        ])
      ])
    ], 32));
  }
});
const wS = /* @__PURE__ */ vt(bS, [["__scopeId", "data-v-b5e6df8c"]]), xS = {
  install(n) {
    n.component("EditorView", wS);
  }
}, VS = {
  install(n, s) {
    n.use(d0()), n.use(() => {
      const { setGlobalEditConfig: r } = ut(), o = sf(s);
      r(o), rt.on(nt.ERROR, o.handleError);
    }), n.use(jb), n.use(hw), n.use(ZE), n.use(xS);
  }
};
export {
  D0 as AudioPlayer,
  $c as CancellationTokenSource,
  AS as DOMComment,
  TS as DOMElement,
  kS as DOMNode,
  IS as DOMRange,
  LS as DOMSelection,
  PS as DOMStaticRange,
  OS as DOMText,
  nt as EMITTER_EVENT,
  wS as EditorView,
  N0 as FileSelector,
  M0 as Timer,
  Te as WANGEDITOR_EVENT,
  vr as audioPlayer,
  sf as createGlobalEditorConfig,
  VS as default,
  ca as defaultFilterSpeaker,
  MS as defaultLabelValue,
  e1 as defaultSpeaker,
  Kr as demoAvatar,
  Sc as formatTime,
  DS as genRandomStr,
  x0 as pitch,
  ga as serializeToSSML,
  w0 as speed
};

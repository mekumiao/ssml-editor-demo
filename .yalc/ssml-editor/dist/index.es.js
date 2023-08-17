import { defineComponent as T, inject as N, openBlock as Oe, createElementBlock as Ne, normalizeClass as re, withModifiers as M, createElementVNode as X, toDisplayString as Ae, ref as D, resolveDynamicComponent as O, createVNode as h, shallowRef as Fe } from "vue";
import { SlateEditor as v, SlateRange as C, SlateTransforms as g, SlateElement as A, DomEditor as $, SlateText as z, SlatePath as R } from "@wangeditor/editor";
var j = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pe(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ie = "Expected a function", ie = 0 / 0, Be = "[object Symbol]", _e = /^\s+|\s+$/g, Ve = /^[-+]0x[0-9a-f]+$/i, He = /^0b[01]+$/i, je = /^0o[0-7]+$/i, Ue = parseInt, We = typeof j == "object" && j && j.Object === Object && j, qe = typeof self == "object" && self && self.Object === Object && self, ze = We || qe || Function("return this")(), Re = Object.prototype, Ge = Re.toString, Xe = Math.max, Ze = Math.min, Z = function() {
  return ze.Date.now();
};
function Je(n, e, t) {
  var r, i, o, s, a, u, f = 0, l = !1, c = !1, d = !0;
  if (typeof n != "function")
    throw new TypeError(Ie);
  e = oe(e) || 0, W(t) && (l = !!t.leading, c = "maxWait" in t, o = c ? Xe(oe(t.maxWait) || 0, e) : o, d = "trailing" in t ? !!t.trailing : d);
  function y(x) {
    var L = r, H = i;
    return r = i = void 0, f = x, s = n.apply(H, L), s;
  }
  function b(x) {
    return f = x, a = setTimeout(I, e), l ? y(x) : s;
  }
  function k(x) {
    var L = x - u, H = x - f, te = e - L;
    return c ? Ze(te, o - H) : te;
  }
  function E(x) {
    var L = x - u, H = x - f;
    return u === void 0 || L >= e || L < 0 || c && H >= o;
  }
  function I() {
    var x = Z();
    if (E(x))
      return _(x);
    a = setTimeout(I, k(x));
  }
  function _(x) {
    return a = void 0, d && r ? y(x) : (r = i = void 0, s);
  }
  function V() {
    a !== void 0 && clearTimeout(a), f = 0, r = u = i = a = void 0;
  }
  function Me() {
    return a === void 0 ? s : _(Z());
  }
  function G() {
    var x = Z(), L = E(x);
    if (r = arguments, i = this, u = x, L) {
      if (a === void 0)
        return b(u);
      if (c)
        return a = setTimeout(I, e), y(u);
    }
    return a === void 0 && (a = setTimeout(I, e)), s;
  }
  return G.cancel = V, G.flush = Me, G;
}
function Qe(n, e, t) {
  var r = !0, i = !0;
  if (typeof n != "function")
    throw new TypeError(Ie);
  return W(t) && (r = "leading" in t ? !!t.leading : r, i = "trailing" in t ? !!t.trailing : i), Je(n, e, {
    leading: r,
    maxWait: e,
    trailing: i
  });
}
function W(n) {
  var e = typeof n;
  return !!n && (e == "object" || e == "function");
}
function Ye(n) {
  return !!n && typeof n == "object";
}
function Ke(n) {
  return typeof n == "symbol" || Ye(n) && Ge.call(n) == Be;
}
function oe(n) {
  if (typeof n == "number")
    return n;
  if (Ke(n))
    return ie;
  if (W(n)) {
    var e = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = W(e) ? e + "" : e;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = n.replace(_e, "");
  var t = He.test(n);
  return t || je.test(n) ? Ue(n.slice(2), t ? 2 : 8) : Ve.test(n) ? ie : +n;
}
var en = Qe;
const F = /* @__PURE__ */ Pe(en);
let nn = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
function P(n = "r") {
  return `${n}-${nn()}`;
}
function se(n) {
  return n !== null && typeof n == "object" && "constructor" in n && n.constructor === Object;
}
function K(n, e) {
  n === void 0 && (n = {}), e === void 0 && (e = {}), Object.keys(e).forEach(function(t) {
    typeof n[t] > "u" ? n[t] = e[t] : se(e[t]) && se(n[t]) && Object.keys(e[t]).length > 0 && K(n[t], e[t]);
  });
}
var Te = {
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
function ee() {
  var n = typeof document < "u" ? document : {};
  return K(n, Te), n;
}
var tn = {
  document: Te,
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
function Ce() {
  var n = typeof window < "u" ? window : {};
  return K(n, tn), n;
}
function rn(n, e) {
  n.prototype = Object.create(e.prototype), n.prototype.constructor = n, n.__proto__ = e;
}
function Q(n) {
  return Q = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Q(n);
}
function q(n, e) {
  return q = Object.setPrototypeOf || function(r, i) {
    return r.__proto__ = i, r;
  }, q(n, e);
}
function on() {
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
function U(n, e, t) {
  return on() ? U = Reflect.construct : U = function(i, o, s) {
    var a = [null];
    a.push.apply(a, o);
    var u = Function.bind.apply(i, a), f = new u();
    return s && q(f, s.prototype), f;
  }, U.apply(null, arguments);
}
function sn(n) {
  return Function.toString.call(n).indexOf("[native code]") !== -1;
}
function Y(n) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Y = function(r) {
    if (r === null || !sn(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(r))
        return e.get(r);
      e.set(r, i);
    }
    function i() {
      return U(r, arguments, Q(this).constructor);
    }
    return i.prototype = Object.create(r.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), q(i, r);
  }, Y(n);
}
function un(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function ln(n) {
  var e = n.__proto__;
  Object.defineProperty(n, "__proto__", {
    get: function() {
      return e;
    },
    set: function(r) {
      e.__proto__ = r;
    }
  });
}
var B = /* @__PURE__ */ function(n) {
  rn(e, n);
  function e(t) {
    var r;
    return r = n.call.apply(n, [this].concat(t)) || this, ln(un(r)), r;
  }
  return e;
}(/* @__PURE__ */ Y(Array));
function ne(n) {
  n === void 0 && (n = []);
  var e = [];
  return n.forEach(function(t) {
    Array.isArray(t) ? e.push.apply(e, ne(t)) : e.push(t);
  }), e;
}
function an(n) {
  for (var e = [], t = 0; t < n.length; t += 1)
    e.indexOf(n[t]) === -1 && e.push(n[t]);
  return e;
}
function fn(n) {
  return n.toLowerCase().replace(/-(.)/g, function(e, t) {
    return t.toUpperCase();
  });
}
function cn(n, e) {
  if (typeof n != "string")
    return [n];
  for (var t = [], r = e.querySelectorAll(n), i = 0; i < r.length; i += 1)
    t.push(r[i]);
  return t;
}
function m(n, e) {
  var t = Ce(), r = ee(), i = [];
  if (!e && n instanceof B)
    return n;
  if (!n)
    return new B(i);
  if (typeof n == "string") {
    var o = n.trim();
    if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
      var s = "div";
      o.indexOf("<li") === 0 && (s = "ul"), o.indexOf("<tr") === 0 && (s = "tbody"), (o.indexOf("<td") === 0 || o.indexOf("<th") === 0) && (s = "tr"), o.indexOf("<tbody") === 0 && (s = "table"), o.indexOf("<option") === 0 && (s = "select");
      var a = r.createElement(s);
      a.innerHTML = o;
      for (var u = 0; u < a.childNodes.length; u += 1)
        i.push(a.childNodes[u]);
    } else
      i = cn(n.trim(), e || r);
  } else if (n.nodeType || n === t || n === r)
    i.push(n);
  else if (Array.isArray(n)) {
    if (n instanceof B)
      return n;
    i = n;
  }
  return new B(an(i));
}
m.fn = B.prototype;
function ue() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  var r = ne(e.map(function(i) {
    return i.split(" ");
  }));
  return this.forEach(function(i) {
    var o;
    (o = i.classList).add.apply(o, r);
  }), this;
}
function le() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  var r = ne(e.map(function(i) {
    return i.split(" ");
  }));
  return this.forEach(function(i) {
    var o;
    (o = i.classList).remove.apply(o, r);
  }), this;
}
function ae(n, e) {
  if (arguments.length === 1 && typeof n == "string")
    return this[0] ? this[0].getAttribute(n) : void 0;
  for (var t = 0; t < this.length; t += 1)
    if (arguments.length === 2)
      this[t].setAttribute(n, e);
    else
      for (var r in n)
        this[t][r] = n[r], this[t].setAttribute(r, n[r]);
  return this;
}
function fe() {
  var n = this[0];
  if (n) {
    var e = {};
    if (n.dataset)
      for (var t in n.dataset)
        e[t] = n.dataset[t];
    else
      for (var r = 0; r < n.attributes.length; r += 1) {
        var i = n.attributes[r];
        i.name.indexOf("data-") >= 0 && (e[fn(i.name.split("data-")[1])] = i.value);
      }
    for (var o in e)
      e[o] === "false" ? e[o] = !1 : e[o] === "true" ? e[o] = !0 : parseFloat(e[o]) === e[o] * 1 && (e[o] *= 1);
    return e;
  }
}
function ce(n) {
  if (typeof n > "u") {
    var e = this[0];
    if (!e)
      return;
    if (e.multiple && e.nodeName.toLowerCase() === "select") {
      for (var t = [], r = 0; r < e.selectedOptions.length; r += 1)
        t.push(e.selectedOptions[r].value);
      return t;
    }
    return e.value;
  }
  for (var i = 0; i < this.length; i += 1) {
    var o = this[i];
    if (Array.isArray(n) && o.multiple && o.nodeName.toLowerCase() === "select")
      for (var s = 0; s < o.options.length; s += 1)
        o.options[s].selected = n.indexOf(o.options[s].value) >= 0;
    else
      o.value = n;
  }
  return this;
}
function de() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  var r = e[0], i = e[1], o = e[2], s = e[3];
  typeof e[1] == "function" && (r = e[0], o = e[1], s = e[2], i = void 0), s || (s = !1);
  function a(k) {
    var E = k.target;
    if (E) {
      var I = k.target.dom7EventData || [];
      if (I.indexOf(k) < 0 && I.unshift(k), m(E).is(i))
        o.apply(E, I);
      else
        for (var _ = m(E).parents(), V = 0; V < _.length; V += 1)
          m(_[V]).is(i) && o.apply(_[V], I);
    }
  }
  function u(k) {
    var E = k && k.target ? k.target.dom7EventData || [] : [];
    E.indexOf(k) < 0 && E.unshift(k), o.apply(this, E);
  }
  for (var f = r.split(" "), l, c = 0; c < this.length; c += 1) {
    var d = this[c];
    if (i)
      for (l = 0; l < f.length; l += 1) {
        var b = f[l];
        d.dom7LiveListeners || (d.dom7LiveListeners = {}), d.dom7LiveListeners[b] || (d.dom7LiveListeners[b] = []), d.dom7LiveListeners[b].push({
          listener: o,
          proxyListener: a
        }), d.addEventListener(b, a, s);
      }
    else
      for (l = 0; l < f.length; l += 1) {
        var y = f[l];
        d.dom7Listeners || (d.dom7Listeners = {}), d.dom7Listeners[y] || (d.dom7Listeners[y] = []), d.dom7Listeners[y].push({
          listener: o,
          proxyListener: u
        }), d.addEventListener(y, u, s);
      }
  }
  return this;
}
function pe() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  var r = e[0], i = e[1], o = e[2], s = e[3];
  typeof e[1] == "function" && (r = e[0], o = e[1], s = e[2], i = void 0), s || (s = !1);
  for (var a = r.split(" "), u = 0; u < a.length; u += 1)
    for (var f = a[u], l = 0; l < this.length; l += 1) {
      var c = this[l], d = void 0;
      if (!i && c.dom7Listeners ? d = c.dom7Listeners[f] : i && c.dom7LiveListeners && (d = c.dom7LiveListeners[f]), d && d.length)
        for (var y = d.length - 1; y >= 0; y -= 1) {
          var b = d[y];
          o && b.listener === o || o && b.listener && b.listener.dom7proxy && b.listener.dom7proxy === o ? (c.removeEventListener(f, b.proxyListener, s), d.splice(y, 1)) : o || (c.removeEventListener(f, b.proxyListener, s), d.splice(y, 1));
        }
    }
  return this;
}
function me() {
  for (var n = 0; n < this.length; n += 1)
    this[n].style.display = "none";
  return this;
}
function ve(n) {
  return n ? (this.forEach(function(e, t) {
    n.apply(e, [e, t]);
  }), this) : this;
}
function he(n) {
  if (typeof n > "u")
    return this[0] ? this[0].innerHTML : null;
  for (var e = 0; e < this.length; e += 1)
    this[e].innerHTML = n;
  return this;
}
function ge(n) {
  var e = Ce(), t = ee(), r = this[0], i, o;
  if (!r || typeof n > "u")
    return !1;
  if (typeof n == "string") {
    if (r.matches)
      return r.matches(n);
    if (r.webkitMatchesSelector)
      return r.webkitMatchesSelector(n);
    if (r.msMatchesSelector)
      return r.msMatchesSelector(n);
    for (i = m(n), o = 0; o < i.length; o += 1)
      if (i[o] === r)
        return !0;
    return !1;
  }
  if (n === t)
    return r === t;
  if (n === e)
    return r === e;
  if (n.nodeType || n instanceof B) {
    for (i = n.nodeType ? [n] : n, o = 0; o < i.length; o += 1)
      if (i[o] === r)
        return !0;
    return !1;
  }
  return !1;
}
function ye() {
  for (var n, e = ee(), t = 0; t < arguments.length; t += 1) {
    n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    for (var r = 0; r < this.length; r += 1)
      if (typeof n == "string") {
        var i = e.createElement("div");
        for (i.innerHTML = n; i.firstChild; )
          this[r].appendChild(i.firstChild);
      } else if (n instanceof B)
        for (var o = 0; o < n.length; o += 1)
          this[r].appendChild(n[o]);
      else
        this[r].appendChild(n);
  }
  return this;
}
function be(n) {
  for (var e = [], t = 0; t < this.length; t += 1)
    for (var r = this[t].parentNode; r; )
      n ? m(r).is(n) && e.push(r) : e.push(r), r = r.parentNode;
  return m(e);
}
function xe(n) {
  for (var e = [], t = 0; t < this.length; t += 1)
    for (var r = this[t].querySelectorAll(n), i = 0; i < r.length; i += 1)
      e.push(r[i]);
  return m(e);
}
function we(n) {
  for (var e = [], t = 0; t < this.length; t += 1)
    for (var r = this[t].children, i = 0; i < r.length; i += 1)
      (!n || m(r[i]).is(n)) && e.push(r[i]);
  return m(e);
}
var dn = "resize scroll".split(" ");
function Se(n) {
  function e() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    if (typeof r[0] > "u") {
      for (var o = 0; o < this.length; o += 1)
        dn.indexOf(n) < 0 && (n in this[o] ? this[o][n]() : m(this[o]).trigger(n));
      return this;
    }
    return this.on.apply(this, [n].concat(r));
  }
  return e;
}
var ke = Se("click"), Ee = Se("focus");
me && (m.fn.hide = me);
ye && (m.fn.append = ye);
ke && (m.fn.click = ke);
de && (m.fn.on = de);
pe && (m.fn.off = pe);
Ee && (m.fn.focus = Ee);
ae && (m.fn.attr = ae);
ce && (m.fn.val = ce);
he && (m.fn.html = he);
fe && (m.fn.dataset = fe);
ue && (m.fn.addClass = ue);
le && (m.fn.removeClass = le);
we && (m.fn.children = we);
ve && (m.fn.each = ve);
xe && (m.fn.find = xe);
ge && (m.fn.is = ge);
be && (m.fn.parents = be);
const pn = { class: "button" }, mn = { class: "content" }, vn = /* @__PURE__ */ T({
  __name: "EditBarButton",
  props: {
    text: {},
    icon: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click", "update:visiblePopover"],
  setup(n, { emit: e }) {
    const t = n, r = N("editor"), i = () => {
      !t.disabled && r && e("click", r == null ? void 0 : r.value);
    };
    return (o, s) => (Oe(), Ne("div", {
      class: re(["btn edit-bar-button", { disabled: o.disabled }]),
      onClick: i,
      onMousedown: s[0] || (s[0] = M(() => {
      }, ["prevent"]))
    }, [
      X("div", pn, [
        X("span", {
          class: re(["size font-size-3 iconfont-moyin", [`moyin-icon_${o.icon}`]])
        }, null, 2)
      ]),
      X("div", mn, Ae(o.text), 1)
    ], 34));
  }
});
const hn = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, S = /* @__PURE__ */ hn(vn, [["__scopeId", "data-v-8c22fc50"]]);
function gn() {
  return P("w-e-insert-speaker");
}
let yn = class {
  getValue(e) {
    const {
      selection: t
    } = e;
    return t == null ? null : v.string(e, t);
  }
  isDisabled(e) {
    const {
      selection: t
    } = e;
    if (t == null || C.isCollapsed(t))
      return !0;
    const r = v.string(e, t);
    return r.length != 1 || !/^[\u4E00-\u9FA5]+$/gi.test(r);
  }
  exec(e, t) {
    if (this.isDisabled(e))
      return;
    const {
      selection: r
    } = e;
    if (r == null)
      return;
    const i = this.getValue(e);
    if (i == null)
      return;
    const o = {
      type: "ssml-p",
      domId: gn(),
      word: i,
      phoneme: t,
      remark: t,
      bgColor: "speaker",
      children: [{
        text: ""
      }]
    };
    g.delete(e), g.insertNodes(e, o), e.move(1);
    const s = m("body"), a = `#${o.domId}`, u = F((f) => {
      f.preventDefault();
      const [l] = v.nodes(e, {
        at: [],
        match: (d) => !A.isElement(d) || !$.checkNodeType(d, "ssml-p") ? !1 : d.domId === o.domId
      });
      if (l == null)
        return;
      const c = v.previous(e, {
        at: l[1],
        match: (d) => z.isText(d)
      });
      c != null && (g.insertText(e, l[0].word, {
        at: v.end(e, c[1])
      }), g.delete(e, {
        at: R.next(c[1])
      }));
    });
    s.on("click", a, u);
  }
};
function bn(n) {
  const e = {
    我: [{
      id: "1",
      text: "wo1",
      remark: "wo1"
    }, {
      id: "2",
      text: "wo2",
      remark: "wo2"
    }, {
      id: "3",
      text: "wo3",
      remark: "wo3"
    }],
    的: [{
      id: "1",
      text: "de1",
      remark: "de1"
    }, {
      id: "2",
      text: "de2",
      remark: "de2"
    }, {
      id: "3",
      text: "de3",
      remark: "de3"
    }]
  };
  return Promise.resolve(e[n] || e.我);
}
const xn = /* @__PURE__ */ T({
  emits: ["error"],
  props: ["popover", "fetch"],
  setup(n, {
    emit: e
  }) {
    const t = new yn(), r = N("editor"), i = D([]), o = D(!1);
    function s() {
      o.value || (o.value = !0);
    }
    function a() {
      o.value && (o.value = !1);
    }
    async function u(l) {
      const c = t.getValue(l);
      if (c ? i.value = await (n.fetch || bn)(c) : i.value = [], t.isDisabled(l))
        return e("error", "选中一个中文字符，并且有不能在其他语句之内");
      if (i.value.length == 0)
        return e("error", "选中的字符没有不是多音字");
      s();
    }
    const f = O(n.popover);
    return () => h(f, {
      visible: o.value,
      "onUpdate:visible": (l) => o.value = l,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => h(S, {
        text: "多音字",
        icon: "speaker",
        onClick: u
      }, null),
      default: () => h("div", {
        class: "flex flex-col"
      }, [i.value.map(({
        id: l,
        text: c
      }) => h("div", {
        key: l,
        class: "btn full",
        onClick: () => {
          t.isDisabled(r == null ? void 0 : r.value) || t.exec(r == null ? void 0 : r.value, c), a();
        },
        onMousedown: M(() => {
        }, ["stop", "prevent"])
      }, [c]))])
    });
  }
});
function wn() {
  return P("w-e-insert-continuous");
}
class kn {
  getValue(e) {
    const {
      selection: t
    } = e;
    return t == null ? "" : v.string(e, t);
  }
  isDisabled(e) {
    const {
      selection: t
    } = e;
    return !!(t == null || C.isCollapsed(t) || v.string(e, t).length < 2);
  }
  exec(e) {
    if (this.isDisabled(e))
      return;
    const {
      selection: t
    } = e;
    if (t == null)
      return;
    const r = this.getValue(e);
    if (r == null)
      return;
    const i = {
      type: "ssml-w",
      domId: wn(),
      children: [{
        text: r
      }],
      remark: "连读",
      bgColor: "continuous"
    };
    g.delete(e), g.insertNodes(e, i);
    const o = m("body"), s = `#${i.domId}`, a = F((u) => {
      u.preventDefault(), g.unwrapNodes(e, {
        at: [],
        match: (f) => !A.isElement(f) || !$.checkNodeType(f, "ssml-w") ? !1 : f.domId === i.domId
      });
    });
    o.on("click", s, a);
  }
}
const En = /* @__PURE__ */ T({
  emits: ["error"],
  setup(n, {
    emit: e
  }) {
    const t = new kn();
    function r(i) {
      if (t.isDisabled(i))
        return e("error", "请选择多个中文字符或者多个多个英文单词");
      t.exec(i);
    }
    return () => h(S, {
      text: "连读",
      icon: "continuous",
      onClick: r
    }, null);
  }
});
function Dn() {
  return P("w-e-insert-read");
}
class $n {
  getValue(e) {
    const {
      selection: t
    } = e;
    return t == null ? "" : v.string(e, t);
  }
  isDisabled(e) {
    const {
      selection: t
    } = e;
    return !!(t == null || C.isCollapsed(t) || v.string(e, t).length <= 0);
  }
  exec(e, t) {
    if (this.isDisabled(e))
      return;
    const {
      selection: r
    } = e;
    if (r == null)
      return;
    const i = this.getValue(e);
    if (i == null)
      return;
    const o = {
      type: "ssml-w",
      domId: Dn(),
      phoneme: t.id,
      remark: t.remark,
      value: i,
      bgColor: "read",
      children: [{
        text: i
      }]
    };
    g.delete(e), g.insertNodes(e, o);
    const s = m("body"), a = `#${o.domId}`, u = F((f) => {
      f.preventDefault();
      const [l] = v.nodes(e, {
        at: [],
        match: (d) => !A.isElement(d) || !$.checkNodeType(d, "ssml-w") ? !1 : d.domId === o.domId,
        universal: !1
      });
      if (l == null)
        return;
      const c = v.previous(e, {
        at: l[1],
        match: (d) => z.isText(d)
      });
      c != null && (g.insertText(e, i, {
        at: v.end(e, c[1])
      }), g.delete(e, {
        at: R.next(c[1])
      }));
    });
    s.on("click", a, u);
  }
}
const In = [{
  id: "z",
  text: "重音",
  remark: "重"
}, {
  id: "t",
  text: "拖音",
  remark: "拖"
}, {
  id: "all",
  text: "重音+拖音",
  remark: "重+拖"
}], Tn = /* @__PURE__ */ T({
  emits: ["error"],
  props: ["popover"],
  setup(n, {
    emit: e
  }) {
    const t = new $n(), r = N("editor"), i = D(!1);
    function o() {
      i.value || (i.value = !0);
    }
    function s() {
      i.value && (i.value = !1);
    }
    function a(f) {
      if (t.isDisabled(f)) {
        e("error", "请先选择文本");
        return;
      }
      o();
    }
    const u = O(n.popover);
    return () => h(u, {
      visible: i.value,
      "onUpdate:visible": (f) => i.value = f,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => h(S, {
        text: "重音",
        icon: "read",
        onClick: a
      }, null),
      default: () => h("div", {
        class: "flex flex-col",
        onMousedown: M(() => {
        }, ["stop", "prevent"])
      }, [In.map(({
        id: f,
        text: l,
        remark: c
      }) => h("div", {
        key: f,
        class: "btn full",
        onClick: () => {
          t.isDisabled(r == null ? void 0 : r.value) || t.exec(r == null ? void 0 : r.value, {
            id: f,
            text: l,
            remark: c
          }), s();
        },
        onMousedown: M(() => {
        }, ["stop", "prevent"])
      }, [l]))])
    });
  }
});
function Cn() {
  return P("w-e-insert-digital");
}
class Sn {
  getValue(e) {
    const {
      selection: t
    } = e;
    return t == null ? "" : v.string(e, t);
  }
  isDisabled(e) {
    const {
      selection: t
    } = e;
    if (t == null || C.isCollapsed(t))
      return !0;
    const r = v.string(e, t);
    return !!(r.length <= 0 || Number.isNaN(Number(r)));
  }
  exec(e, t) {
    if (this.isDisabled(e))
      return;
    const {
      selection: r
    } = e;
    if (r == null)
      return;
    const i = this.getValue(e);
    if (i == null)
      return;
    const o = {
      type: "ssml-say-as",
      domId: Cn(),
      interpretAs: t.id,
      remark: t.remark,
      bgColor: "digital",
      children: [{
        text: i
      }]
    };
    g.delete(e), g.insertNodes(e, o);
    const s = m("body"), a = `#${o.domId}`, u = F((f) => {
      f.preventDefault(), g.unwrapNodes(e, {
        at: [],
        match: (l) => !A.isElement(l) || !$.checkNodeType(l, "ssml-say-as") ? !1 : l.domId === o.domId
      });
    });
    s.on("click", a, u);
  }
}
const Ln = [{
  id: "value",
  text: "读数值",
  remark: "读数值"
}, {
  id: "digits",
  text: "读数字",
  remark: "读数字"
}, {
  id: "telephone",
  text: "读手机号",
  remark: "读手机号"
}], Mn = /* @__PURE__ */ T({
  emits: ["error"],
  props: ["popover"],
  setup(n, {
    emit: e
  }) {
    const t = new Sn(), r = N("editor"), i = D(!1);
    function o() {
      i.value = !i.value;
    }
    function s(u) {
      if (t.isDisabled(u)) {
        e("error", "请选择纯数字文本");
        return;
      }
      o();
    }
    const a = O(n.popover);
    return () => h(a, {
      visible: i.value,
      "onUpdate:visible": (u) => i.value = u,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => h(S, {
        text: "数字符号",
        icon: "digital",
        onClick: s
      }, null),
      default: () => h("div", {
        class: "flex flex-col"
      }, [Ln.map(({
        id: u,
        text: f,
        remark: l
      }) => h("div", {
        key: u,
        class: "btn radius ssml-menu item full",
        onClick: () => {
          t.isDisabled(r == null ? void 0 : r.value) || t.exec(r == null ? void 0 : r.value, {
            id: u,
            text: f,
            remark: l
          }), o();
        },
        onMousedown: M(() => {
        }, ["stop", "prevent"])
      }, [f]))])
    });
  }
});
function On() {
  return P("w-e-insert-alias");
}
class Nn {
  getValue(e) {
    const {
      selection: t
    } = e;
    return t == null ? null : v.string(e, t);
  }
  isDisabled(e) {
    const {
      selection: t
    } = e;
    return !!(t == null || C.isCollapsed(t) || v.string(e, t).length <= 0);
  }
  exec(e, t) {
    if (this.isDisabled(e))
      return;
    const {
      selection: r
    } = e;
    if (r == null)
      return;
    const i = this.getValue(e);
    if (i == null)
      return;
    const o = {
      type: "ssml-sub",
      domId: On(),
      remark: `[${t}]`,
      alias: t,
      value: i,
      bgColor: "alias",
      children: [{
        text: ""
      }]
    };
    g.delete(e), g.insertNodes(e, o);
    const s = m("body"), a = `#${o.domId}`, u = F((f) => {
      f.preventDefault();
      const [l] = v.nodes(e, {
        at: [],
        match: (d) => !A.isElement(d) || !$.checkNodeType(d, "ssml-sub") ? !1 : d.domId === o.domId
      });
      if (l == null)
        return;
      const c = v.previous(e, {
        at: l[1],
        match: (d) => z.isText(d)
      });
      c != null && (g.insertText(e, l[0].value, {
        at: v.end(e, c[1])
      }), g.delete(e, {
        at: R.next(c[1])
      }));
    });
    s.on("click", a, u);
  }
}
const An = /* @__PURE__ */ T({
  emits: ["error"],
  props: ["popover", "input"],
  setup(n, {
    emit: e
  }) {
    const t = new Nn(), r = N("editor"), i = D(), o = D(!1), s = Fe();
    function a() {
      o.value || (o.value = !0);
    }
    function u() {
      o.value && (o.value = !1);
    }
    async function f(y) {
      if (t.isDisabled(y)) {
        e("error", "选中一个中文字符，并且有不能在其他语句之内");
        return;
      }
      a(), s.value = y.selection, i.value.focus();
    }
    const l = (y) => {
      u();
      const b = r == null ? void 0 : r.value;
      !b || !y || (b.select(s.value), !t.isDisabled(b) && t.exec(b, y));
    }, c = O(n.popover), d = O(n.input);
    return () => h(c, {
      visible: o.value,
      "onUpdate:visible": (y) => o.value = y,
      trigger: "contextmenu",
      placement: "right-end",
      hideAfter: 0,
      width: 200
    }, {
      reference: () => h(S, {
        text: "别名",
        icon: "alias",
        onClick: f
      }, null),
      default: () => h(d, {
        ref: i,
        onSubmit: l
      }, null)
    });
  }
});
function Fn(n) {
  const { selection: e } = n;
  if (e) {
    const [t, r] = C.edges(e), i = v.range(n, t, r), o = v.string(n, i), s = o.trimEnd();
    if (s !== o) {
      const a = o.length - s.length, u = { ...r, offset: r.offset - a }, f = { ...e, anchor: t, focus: u };
      g.select(n, f);
    }
  }
}
function Pn() {
  return P("w-e-insert-english");
}
class Bn {
  getValue(e) {
    const {
      selection: t
    } = e;
    return t == null ? null : v.string(e, t);
  }
  isDisabled(e) {
    const {
      selection: t
    } = e;
    if (t == null || C.isCollapsed(t))
      return !0;
    const r = v.string(e, t);
    return r.length <= 0 || !/^[A-Za-z]+$/gi.test(r);
  }
  exec(e, t) {
    if (this.isDisabled(e))
      return;
    const {
      selection: r
    } = e;
    if (r == null)
      return;
    const i = this.getValue(e);
    if (i == null)
      return;
    const o = {
      type: "ssml-p",
      domId: Pn(),
      word: i,
      phoneme: t,
      remark: t,
      bgColor: "english",
      children: [{
        text: ""
      }]
    };
    g.delete(e), g.insertNodes(e, o), e.move(1);
    const s = m("body"), a = `#${o.domId}`, u = F((f) => {
      f.preventDefault();
      const [l] = v.nodes(e, {
        at: [],
        match: (d) => !A.isElement(d) || !$.checkNodeType(d, "ssml-p") ? !1 : d.domId === o.domId
      });
      if (l == null)
        return;
      const c = v.previous(e, {
        at: l[1],
        match: (d) => z.isText(d)
      });
      c != null && (g.insertText(e, l[0].word, {
        at: v.end(e, c[1])
      }), g.delete(e, {
        at: R.next(c[1])
      }));
    });
    s.on("click", a, u);
  }
}
function _n(n) {
  const e = {
    translate: [{
      id: "1",
      text: "wərd",
      remark: "wərd"
    }],
    global: [{
      id: "2",
      text: "ˈɡlōbəl",
      remark: "ˈɡlōbəl"
    }]
  };
  return Promise.resolve(e[n] || e.translate);
}
const Vn = /* @__PURE__ */ T({
  emits: ["error"],
  props: ["popover", "fetch"],
  setup(n, {
    emit: e
  }) {
    const t = new Bn(), r = N("editor"), i = D([]), o = D(!1);
    function s() {
      o.value || (o.value = !0);
    }
    function a() {
      o.value && (o.value = !1);
    }
    async function u(l) {
      if (Fn(l), t.isDisabled(l))
        return e("error", "请选择英文单词");
      const c = t.getValue(l);
      if (c) {
        if (i.value = await (n.fetch || _n)(c), i.value.length <= 0)
          return e("error", "找不到单词的音标");
        s();
      }
    }
    const f = O(n.popover);
    return () => h(f, {
      visible: o.value,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => h(S, {
        text: "音标",
        icon: "english",
        onClick: u
      }, null),
      default: () => h("div", {
        class: "flex flex-col"
      }, [i.value.map(({
        id: l,
        text: c
      }) => h("div", {
        key: l,
        class: "btn full",
        onClick: () => {
          t.isDisabled(r == null ? void 0 : r.value) || t.exec(r == null ? void 0 : r.value, c), a();
        },
        onMousedown: M(() => {
        }, ["stop", "prevent"])
      }, [c]))])
    });
  }
});
function Hn() {
  return P("w-e-insert-changespeed");
}
class jn {
  getValue(e) {
    const {
      selection: t
    } = e;
    return t == null ? null : v.string(e, t);
  }
  isDisabled(e) {
    const {
      selection: t
    } = e;
    return !!(t == null || C.isCollapsed(t) || v.string(e, t).length <= 1);
  }
  exec(e, t) {
    if (this.isDisabled(e))
      return;
    const {
      selection: r
    } = e;
    if (r == null)
      return;
    const i = this.getValue(e);
    if (i == null)
      return;
    const o = {
      type: "ssml-prosody",
      domId: Hn(),
      remark: t,
      rate: t,
      bgColor: "changespeed",
      children: [{
        text: i
      }]
    };
    g.delete(e), g.insertNodes(e, o);
    const s = m("body"), a = `#${o.domId}`, u = F((f) => {
      f.preventDefault(), g.unwrapNodes(e, {
        at: [],
        match: (l) => !A.isElement(l) || !$.checkNodeType(l, "ssml-prosody") ? !1 : l.domId === o.domId
      });
    });
    s.on("click", a, u);
  }
}
function Un() {
  const n = [];
  for (let e = 2; e <= 40; e++) {
    const t = `${(e * 0.05).toFixed(2)}x`;
    n.push({
      id: e.toString(),
      text: t,
      remark: t
    });
  }
  return Promise.resolve(n);
}
const Wn = /* @__PURE__ */ T({
  emits: ["error"],
  props: ["popover"],
  setup(n, {
    emit: e
  }) {
    const t = new jn(), r = N("editor"), i = D([]), o = D(!1);
    function s() {
      o.value || (o.value = !0);
    }
    function a() {
      o.value && (o.value = !1);
    }
    async function u(l) {
      if (i.value = await Un(), t.isDisabled(l)) {
        e("error", "选中一个中文字符，并且有不能在其他语句之内");
        return;
      }
      s();
    }
    const f = O(n.popover);
    return () => h(f, {
      style: {
        padding: "0px"
      },
      visible: o.value,
      "onUpdate:visible": (l) => o.value = l,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => h(S, {
        text: "局部变速",
        icon: "changespeed",
        onClick: u
      }, null),
      default: () => h("div", {
        class: "flex flex-col h h-50 scroll scroll-y"
      }, [i.value.map(({
        id: l,
        text: c
      }) => h("div", {
        key: l,
        class: "btn full",
        onClick: () => {
          t.isDisabled(r == null ? void 0 : r.value) || t.exec(r == null ? void 0 : r.value, c), a();
        },
        onMousedown: M(() => {
        }, ["stop", "prevent"])
      }, [c]))])
    });
  }
});
function qn() {
  return P("w-e-insert-rhythm");
}
class zn {
  isDisabled(e) {
    const {
      selection: t
    } = e;
    return !!(t == null || C.isExpanded(t));
  }
  exec(e, t) {
    if (this.isDisabled(e))
      return;
    const {
      selection: r
    } = e;
    if (r == null)
      return;
    const i = {
      type: "ssml-break",
      domId: qn(),
      time: t.id,
      remark: t.remark,
      bgColor: "rhythm",
      children: [{
        text: ""
      }]
    };
    g.insertNodes(e, i), e.move(1);
    const o = m("body"), s = `#${i.domId}`, a = F((u) => {
      u.preventDefault();
      const [f] = v.nodes(e, {
        at: [],
        match: (l) => !A.isElement(l) || !$.checkNodeType(l, "ssml-break") ? !1 : l.domId === i.domId
      });
      f != null && g.delete(e, {
        at: f[1]
      });
    });
    o.on("click", s, a);
  }
}
const Rn = [{
  id: "200ms",
  text: "短",
  remark: "短"
}, {
  id: "300ms",
  text: "中",
  remark: "中"
}, {
  id: "500ms",
  text: "长",
  remark: "长"
}], Gn = /* @__PURE__ */ T({
  emits: ["error"],
  props: ["popover"],
  setup(n, {
    emit: e
  }) {
    const t = new zn(), r = N("editor"), i = D(!1);
    function o() {
      i.value || (i.value = !0);
    }
    function s() {
      i.value && (i.value = !1);
    }
    function a(f) {
      if (t.isDisabled(f)) {
        e("error", "不能选择文本");
        return;
      }
      o();
    }
    const u = O(n.popover);
    return () => h(u, {
      visible: i.value,
      "onUpdate:visible": (f) => i.value = f,
      trigger: "contextmenu",
      hideAfter: 0
    }, {
      reference: () => h(S, {
        text: "停顿调节",
        icon: "rhythm",
        onClick: a
      }, null),
      default: () => h("div", {
        class: "flex flex-col"
      }, [Rn.map(({
        id: f,
        text: l,
        remark: c
      }) => h("div", {
        key: f,
        class: "btn radius ssml-menu item full",
        onClick: () => {
          t.isDisabled(r == null ? void 0 : r.value) || t.exec(r == null ? void 0 : r.value, {
            id: f,
            text: l,
            remark: c
          }), s();
        },
        onMousedown: M(() => {
        }, ["stop", "prevent"])
      }, [l]))])
    });
  }
});
function De(n, e, t, r, i) {
  const o = e === void 0 ? void 0 : e.key;
  return { sel: n, data: e, children: t, text: r, elm: i, key: o };
}
const $e = Array.isArray;
function J(n) {
  return typeof n == "string" || typeof n == "number" || n instanceof String || n instanceof Number;
}
function Le(n, e, t) {
  if (n.ns = "http://www.w3.org/2000/svg", t !== "foreignObject" && e !== void 0)
    for (let r = 0; r < e.length; ++r) {
      const i = e[r];
      if (typeof i == "string")
        continue;
      const o = i.data;
      o !== void 0 && Le(o, i.children, i.sel);
    }
}
function p(n, e, t) {
  let r = {}, i, o, s;
  if (t !== void 0 ? (e !== null && (r = e), $e(t) ? i = t : J(t) ? o = t.toString() : t && t.sel && (i = [t])) : e != null && ($e(e) ? i = e : J(e) ? o = e.toString() : e && e.sel ? i = [e] : r = e), i !== void 0)
    for (s = 0; s < i.length; ++s)
      J(i[s]) && (i[s] = De(void 0, void 0, void 0, i[s], void 0));
  return n[0] === "s" && n[1] === "v" && n[2] === "g" && (n.length === 3 || n[3] === "." || n[3] === "#") && Le(r, i, n), De(n, r, i, o, void 0);
}
const w = { style: { userSelect: "none" }, contentEditable: !1 };
function Xn(n) {
  const { domId: e, bgColor: t, remark: r, word: i } = n;
  return p("span.ssml-wrap", { ...w }, [
    p(`span.tag.bg-color.${t}`, [
      p("span.tag-remark", { attrs: { "data-tag-remark": r } }),
      p(`span#${e}.btn.btn-text`, p("span.iconfont.icon-roundclosefill", null))
    ]),
    p(`span.boundary.start.ft-color.${t}`),
    p("span", i),
    p(`span.boundary.end.ft-color.${t}`)
  ]);
}
function Zn(n, e) {
  const { bgColor: t, domId: r, remark: i, value: o } = n;
  return p("span.ssml-wrap", e ? {} : { ...w }, [
    p(`span.tag.bg-color.${t}`, { ...w }, [
      p("span.tag-remark", { attrs: { "data-tag-remark": i } }),
      p(`span#${r}.btn.btn-text`, p("span.iconfont.icon-roundclosefill", null))
    ]),
    p(`span.boundary.start.ft-color.${t}`, { ...w }),
    p("span", e || o),
    p(`span.boundary.end.ft-color.${t}`, { ...w })
  ]);
}
function Jn(n, e) {
  const { bgColor: t, domId: r, remark: i } = n;
  return p("span.ssml-wrap", [
    p(`span.tag.bg-color.${t}`, { ...w }, [
      p("span.tag-remark", { attrs: { "data-tag-remark": i } }),
      p(`span#${r}.btn.btn-text`, p("span.iconfont.icon-roundclosefill", null))
    ]),
    p(`span.boundary.start.ft-color.${t}`, { ...w }),
    p("span", e),
    p(`span.boundary.end.ft-color.${t}`, { ...w })
  ]);
}
function Qn(n) {
  const { domId: e, remark: t, bgColor: r } = n;
  return p("span.ssml-wrap", [
    p(`span.tag.bg-color.${r}`, { ...w }, [
      p("span.tag-remark", { attrs: { "data-tag-remark": t } }),
      p(`span#${e}.btn.btn-text`, p("span.iconfont.icon-roundclosefill", null))
    ])
  ]);
}
function Yn(n) {
  const { domId: e, remark: t, bgColor: r, value: i } = n;
  return p("span.ssml-wrap", { ...w }, [
    p(`span.tag.bg-color.${r}`, [
      p("span.tag-remark", { attrs: { "data-tag-remark": t } }),
      p(`span#${e}.btn.btn-text`, p("span.iconfont.icon-roundclosefill"))
    ]),
    p(`span.boundary.start.ft-color.${r}`),
    p("span", i),
    p(`span.boundary.end.ft-color.${r}`)
  ]);
}
function Kn(n, e) {
  const { bgColor: t, domId: r, remark: i } = n;
  return p("span.ssml-wrap", [
    p(`span.tag.bg-color.${t}`, { ...w }, [
      p("span.tag-remark", { attrs: { "data-tag-remark": i } }),
      p(`span#${r}.btn.btn-text`, p("span.iconfont.icon-roundclosefill", null))
    ]),
    p(`span.boundary.start.ft-color.${t}`, { ...w }),
    p("span", e),
    p(`span.boundary.end.ft-color.${t}`, { ...w })
  ]);
}
const et = [
  {
    type: "ssml-p",
    renderElem: Xn
  },
  {
    type: "ssml-w",
    renderElem: Zn
  },
  {
    type: "ssml-say-as",
    renderElem: Jn
  },
  {
    type: "ssml-break",
    renderElem: Qn
  },
  {
    type: "ssml-sub",
    renderElem: Yn
  },
  {
    type: "ssml-prosody",
    renderElem: Kn
  }
];
function nt(n, e) {
  return `<s>${e}</s>`;
}
function tt(n, e) {
  const { phoneme: t, value: r } = n;
  return t ? `<w phoneme="${t}">${r}</w>` : `<w>${e}</w>`;
}
function rt(n, e) {
  const { word: t, phoneme: r } = n;
  return `<p ph="${r}">${t}</p>`;
}
function it(n, e) {
  const { interpretAs: t } = n;
  return `<say-as interpret-as="${t}">${e}</say-as>`;
}
function ot(n, e) {
  const { time: t } = n;
  return `<break time="${t}" />`;
}
function st(n, e) {
  const { alias: t, value: r } = n;
  return `<sub alias="${t}">${r}</sub>`;
}
function ut(n, e) {
  const { rate: t } = n;
  return `<prosody rate="${t}">${e}</prosody>`;
}
const lt = [
  {
    type: "paragraph",
    elemToHtml: nt
  },
  {
    type: "ssml-w",
    elemToHtml: tt
  },
  {
    type: "ssml-p",
    elemToHtml: rt
  },
  {
    type: "ssml-say-as",
    elemToHtml: it
  },
  {
    type: "ssml-break",
    elemToHtml: ot
  },
  {
    type: "ssml-sub",
    elemToHtml: st
  },
  {
    type: "ssml-prosody",
    elemToHtml: ut
  }
];
function at(n) {
  const { isInline: e, isVoid: t, deleteBackward: r, deleteForward: i, insertBreak: o } = n, s = n;
  return s.isInline = (a) => {
    const u = $.getNodeType(a);
    return u === "ssml-w" || u === "ssml-p" || u === "ssml-break" || u === "ssml-say-as" || u === "ssml-sub" || u === "ssml-prosody" ? !0 : e(a);
  }, s.isVoid = (a) => {
    const u = $.getNodeType(a);
    if (u === "ssml-w") {
      const { phoneme: f } = a;
      return !!f;
    }
    return u === "ssml-p" || u === "ssml-break" ? !0 : u === "ssml-say-as" ? !1 : u === "ssml-sub" ? !0 : u === "ssml-prosody" ? !1 : t(a);
  }, s.deleteBackward = (a) => {
    r(a);
  }, s.deleteForward = (a) => {
    i(a);
  }, s.insertBreak = () => {
    o();
  }, s;
}
const pt = {
  editorPlugin: at,
  renderElems: et,
  elemsToHtml: lt
};
const mt = {
  install: (n) => {
    n.component("EditBarButton", S), n.component("SpeakerMenu", xn), n.component("ContinuousMenu", En), n.component("ReadMenu", Tn), n.component("DigitalMenu", Mn), n.component("AliasMenu", An), n.component("EnglishMenu", Vn), n.component("ChangespeedMenu", Wn), n.component("RhythmMenu", Gn);
  }
};
export {
  An as AliasMenu,
  Wn as ChangespeedMenu,
  En as ContinuousMenu,
  Mn as DigitalMenu,
  mt as EditorMenuPlugin,
  Vn as EnglishMenu,
  Tn as ReadMenu,
  Gn as RhythmMenu,
  pt as SSMLModule,
  xn as SpeakerMenu
};

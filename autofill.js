const e = 5,
  t = 120,
  n = 500,
  i = 5e3,
  r = Date.now();
var a,
  s,
  l,
  o,
  c,
  u,
  d,
  f,
  h,
  p,
  g,
  m,
  v,
  b,
  y,
  w,
  E,
  k,
  C,
  x,
  T,
  A,
  S,
  M,
  L,
  W,
  N,
  R,
  D,
  O,
  I,
  z,
  U,
  H,
  V,
  $,
  P,
  q,
  B,
  F,
  J,
  K,
  G,
  j,
  Y,
  Z,
  X,
  Q,
  _,
  ee,
  te,
  ne,
  ie,
  re,
  ae,
  se,
  le,
  oe,
  ce,
  ue,
  de,
  fe,
  he,
  pe,
  ge,
  me,
  ve,
  be,
  ye,
  we,
  Ee,
  ke,
  Ce,
  xe = navigator.userAgent.toLowerCase(),
  Te = xe.includes(
    (function (e) {
      var t;
      try {
        t = e ? atob([...e.slice(0, -1)].reverse().join("")).trim() : "";
      } catch (e) {}
      return t || "";
    })("Ng3bmVmcpZWD=")
  ),
  Ae = Te ? browser : chrome,
  Se = Ae.runtime,
  Me = Se.getManifest(),
  Le =
    "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+KdvKguT0dbNJSmbd5jSmboJiwqQCViMPVB7Fg8W6BbpDC59x9Y/RhqFfST66z7w2bM+Wwm1KSC6/wClckIWgTcoD1ZPQ22iuoWdxGEZ1QwrsfJoo3iZ7f7bFqnVvW1mXX9tssFJMyzpjcS0h3zAGuJy0eG9OmL3pWa446sCPXwIDAQAB",
  We = Me.name,
  Ne = Ae.i18n,
  Re = Ae.storage,
  De = document,
  Oe = "JGgrCqcnGWcxNu8=",
  Ie = "Jb0tGaduRKEdLHYhQqEgAWtwKgcKCsBUQZcXNHAJIcEhVJAIaIZU",
  ze = Ki(
    "JqcxHqBuBWEtas4aFHYmUq5pOt0OCbBOCIkSJ1kCJZAsVNk4KcMMNahOe1oOOMkFNZszNhYWAIIMXXZnTcUiAxxREbs+L24EFWZyAYcWSW=="
  ),
  Ue = ze + Ki("YbocBbEnHuItJa0aDHQmDuBHLIYPEIgVRcINOGUMMsUhDJAJMccC"),
  He =
    Ue +
    Ki(
      "YaAbGHUdDeIdKaMVDHQaDuFzJswKDsgLbwsNOGcCMJslUMk5JdEXPIU0MqkRJZIWIs0rDgcMDIcyWsQiE3YlHcdeBG02FW=="
    ),
  Ve = "abcdefghijklmnopqrstuvwxyz",
  $e = "0123456789",
  Pe = Ve + Ve.toUpperCase() + $e + $e,
  qe = $e + Ve.slice(0, 6).toUpperCase(),
  Be = "box",
  Fe = "label",
  Je = "select",
  Ke = "advanced",
  Ge = "all",
  je = "aria",
  Ye = je + "-checked",
  Ze = je + "-controls",
  Xe = je + "-describedby",
  Qe = je + "-" + Fe + "ledby",
  _e = je + "-" + Fe,
  et = je + "-" + Je + "ed",
  tt = "audio",
  nt = "auto",
  it = nt + "fill",
  rt = nt + "mation",
  at = "Backup - ",
  st = "backup",
  lt = "blur",
  ot = "border",
  ct = "button",
  ut = "captcha",
  dt = "catexe",
  ft = "catnow",
  ht = "cats",
  pt = "challenge",
  gt = "change",
  mt = "check" + Be,
  vt = "click",
  bt = "closeinfobar",
  yt = "complete",
  wt = "content",
  Et = "data",
  kt = "delay",
  Ct = "div",
  xt = "editable",
  Tt = "exceptions",
  At = "exe",
  St = "false",
  Mt = "fields",
  Lt = "filter",
  Wt = "focus",
  Nt = "font",
  Rt = "forcefill",
  Dt = "form",
  Ot = "frame",
  It = "function",
  zt = "gen",
  Ut = zt + "eral",
  Ht = "heading",
  Vt = "hidden",
  $t = Et + "-" + it + "-highlight",
  Pt = location.host
    ? location.host.replace(/^www\d*?\./, "")
    : location.pathname.replace(/^.+?(\/)(.+\/)?.+$/, "$1$2"),
  qt = Ve[8] + Ot,
  Bt = qt.toUpperCase(),
  Ft = "input",
  Jt = "jsaction",
  Kt = "keydown",
  Gt = "keyup",
  jt = "list",
  Yt = "load",
  Zt = "manual",
  Xt = "Menu",
  Qt = "mousedown",
  _t = "mouseup",
  en = "observe",
  tn = "off",
  nn = "open",
  rn = "option",
  an = "other",
  sn = "padding",
  ln = "password",
  on = "placeholder",
  cn = "Profile",
  un = "question",
  dn = "radio",
  fn = "re" + ut,
  hn = "response",
  pn = "role",
  gn = "rules",
  mn = "Rule",
  vn = Je.toUpperCase(),
  bn = "",
  yn = "site",
  wn = "span",
  En = "status",
  kn = "string",
  Cn = "strong",
  xn = "style",
  Tn = "text",
  An = Tn + "clips",
  Sn = "tooltips",
  Mn = "true",
  Ln = "type",
  Wn = "Unfiled",
  Nn = Ne.getMessage(Ut + "UpdateAlert"),
  Rn = location !== parent.location ? De.referrer : De.URL,
  Dn = "value",
  On = "variables",
  In = "Width",
  zn = Ki("OWADCqYkPb4aMXQqCG=="),
  Un = "wizard",
  Hn = it + "-" + Un,
  Vn = it.toUpperCase(),
  $n = vt.toUpperCase(),
  Pn = "DISPATCH",
  qn = nn.toUpperCase(),
  Bn = "RELOAD",
  Fn = "SCRAPE",
  Jn = xn.toUpperCase(),
  Kn = "WAIT",
  Gn = [Ge, Rt],
  jn = ["1", "0", "on", tn, Mn, St, "yes", "no"],
  Yn = [],
  Zn = ["email", "search", "tel", Tn, Tn + "area", "url"],
  Xn = [],
  Qn = [ht, gn, Ke, Tt, An, On],
  _n = [],
  ei = [De.title, De.URL],
  ti = new Map(),
  ni = {},
  ii = {},
  ri = { once: !0 },
  ai = 0,
  si = !1,
  li = De.body,
  oi = "",
  ci = De.documentElement.lang || "en-US",
  ui = [
    Ki(
      "Jb0tGaduRKEeLGchHXQgFbUuJcZOWsU1RdcWdKIgdNsKFNYxIcwMMdIKNfZPPJgWKY0hMcU7EdkMWs5kFsQkUgZ2"
    ),
    Ki(
      "Jb0tGaduRKEeLGchHXQgFbUuJcZOWsU1RdcWdKIgdNsKFNYxIcwMMdIKNfZ2YdE9NYogPYoSHIYRTJkbWcgiGhEcIG=="
    ),
  ],
  di = Array(ui.length).fill(1e4),
  fi = 0,
  hi = !1,
  pi = !1,
  gi = !1,
  mi = /\\(?!\\)/g,
  vi = /^\/.*\/[dgimsuvy]*$/,
  bi = new Event("done"),
  yi =
    li?.hasAttribute(Jt) &&
    De.URL.toLowerCase().includes("docs.google.com/" + Dt),
  wi =
    !yi &&
    new RegExp(
      Dt + "s\\.(office|microsoft)\\.com/pages/" + hn + "page",
      Ve[8]
    ).test(De.URL),
  Ei = self === top,
  ki = function () {
    return !W && 9999 <= 0;
  },
  Ci = function (e) {
    if (Se?.id && p)
      if (
        !window.Wizard ||
        "Escape" !== e.key ||
        e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey
      ) {
        var t = [{ h: a }, ...p[ht]].map(({ h: e }) => e || "");
        for (let n, i, r = 0; r < t.length; ++r)
          if (t[r]) {
            (i = !0), (n = t[r].split(" + "));
            for (let t = 0; t < n.length; ++t)
              switch (n[t]) {
                case "Ctrl":
                  e.ctrlKey || (i = !1);
                  break;
                case "Shift":
                  e.shiftKey || (i = !1);
                  break;
                case "Alt":
                case "Option":
                  e.altKey || (i = !1);
                  break;
                case "Win":
                case "⌘":
                  e.metaKey || (i = !1);
                  break;
                default:
                  n[t].replace(/^Space$/, " ").toUpperCase() !==
                    (e.key || "").toUpperCase() && (i = !1);
              }
            if (i)
              return (
                e.preventDefault(),
                void kr({
                  type: "eR",
                  data: { catnow: 0 === r ? 1 : r + 4, force: !0 },
                })
              );
          }
      } else Wizard.c();
  };
De.URL.startsWith("http") &&
  ei.push(
    De.URL.replace(
      /(:\/\/)(www\d*?\.)?/,
      De.URL.indexOf("://www") < 0 ? "$1www." : "$1"
    )
  );
class xi {
  constructor(e) {
    const t = e.ownerDocument || e.document,
      n = t.defaultView || t.parentWindow;
    (this.cloneStyles = [
      "width",
      "height",
      ot + "Bottom" + In,
      ot + "Left" + In,
      ot + "Right" + In,
      ot + "Top" + In,
      Be + "Sizing",
      Nt + "Family",
      Nt + "Size",
      Nt + "Stretch",
      Nt + "Style",
      Nt + "Variant",
      Nt + "Weight",
      "letterSpacing",
      "lineHeight",
      "overflowX",
      "overflowY",
      sn + "Bottom",
      sn + "Left",
      sn + "Right",
      sn + "Top",
      Tn + "Align",
      Tn + "Indent",
      Tn + "Transform",
      "wordSpacing",
    ]),
      (this.selection = n?.getSelection()),
      (this.isContentEditable =
        e.isContentEditable && !!this.selection?.rangeCount),
      (this.isSelectable = void 0 !== e.selectionEnd),
      (this.target = e);
  }
  getPos() {
    const e = this.target;
    let t = -1;
    if (this.isContentEditable) {
      const n = this.selection.getRangeAt(0),
        i = n.cloneRange();
      i.selectNodeContents(e),
        i.setEnd(n.endContainer, n.endOffset),
        (t = i.toString().length);
      try {
        let t = n.startContainer,
          i = n.endContainer;
        const r = [];
        for (; t !== e; ) r.push(nr(t)), (t = t.parentElement);
        const a = [];
        for (; i !== e; ) a.push(nr(i)), (i = i.parentElement);
        (this.startNodeIndexes = r),
          (this.startOffset = n.startOffset),
          (this.endNodeIndexes = a),
          (this.endOffset = n.endOffset);
      } catch (e) {}
    } else this.isSelectable && (t = e.selectionEnd);
    return t;
  }
  getXY() {
    const e = this.target;
    if (this.isContentEditable) {
      return this.selection.getRangeAt(0).getBoundingClientRect();
    }
    if (this.isSelectable) {
      const t = e.selectionEnd,
        n = "af-ac-" + r,
        i = getComputedStyle(e),
        a = parseInt(i[ot + "Top" + In]),
        s = parseInt(i[ot + "Left" + In]),
        l = (function (e) {
          var t = 0,
            n = 0;
          for (; e; )
            (t += e.offsetTop), (n += e.offsetLeft), (e = e.offsetParent);
          return { top: t, left: n };
        })(e),
        o = l.top,
        c = l.left,
        u = {
          position: "absolute",
          top: o + a + "px",
          left: c + s + "px",
          overflow: Vt,
          visibility: Vt,
          whiteSpace: "pre-wrap",
        },
        d = e.value;
      let f = De.getElementById(n);
      f || ((f = De.createElement(Ct)), (f.id = n), li.appendChild(f)),
        this.isInput || (u.wordWrap = "break-word"),
        Object.keys(u).forEach((e) => {
          f.style[e] = u[e];
        }),
        this.cloneStyles.forEach((e) => {
          f.style[e] = i[e];
        });
      let h = d.substring(0, t);
      this.isInput && (h = h.replace(/\s/g, " ")), (f.textContent = h);
      const p = De.createElement(wn);
      (p.textContent = d.substring(t) || "."), f.appendChild(p);
      const g = {
        top: Math.round(o - e.scrollTop + p.offsetTop + a - scrollY),
        left: Math.round(c - e.scrollLeft + p.offsetLeft + s - scrollX),
      };
      return f.remove(), g;
    }
  }
  setText(e = "", t = 0, n = 0) {
    const i = this.target;
    if (this.isContentEditable) {
      const n = this.selection,
        r = n.getRangeAt(0);
      let a,
        s,
        l = i,
        o = i;
      for (a = this.startNodeIndexes, s = a.length; s--; )
        l = l.childNodes[a[s]];
      for (a = this.endNodeIndexes, s = a.length; s--; ) o = o.childNodes[a[s]];
      if (typeof e === kn) {
        this.isBusy = !0;
        let r = this.startOffset - t;
        r < 0 && (r = 0);
        try {
          const t = De.createRange();
          t.setStart(l, r), t.setEnd(l, this.startOffset);
          const a = De.createTextNode(e);
          t.deleteContents(), t.insertNode(a);
          const s = De.createRange();
          s.setStart(a, a.length),
            s.setEnd(a, a.length),
            n.removeAllRanges(),
            n.addRange(s),
            i.normalize(),
            this.getPos();
        } catch (e) {}
        this.isBusy = !1;
      } else
        r.setStart(l, this.startOffset),
          r.setEnd(o, this.endOffset),
          n.removeAllRanges(),
          n.addRange(r);
    } else this.isSelectable && i.setRangeText(e, t, n, "end");
  }
}
async function Ti(e, t, r, a, s) {
  var l = s || d || p[gn];
  if (0 !== Object.keys(l).length) {
    var o,
      f,
      y,
      w,
      E,
      k,
      C,
      T,
      A = [],
      S = [],
      M = {},
      L = {},
      N = {},
      R = async function (e, t, n) {
        if (!t || (void 0 === t.type && t.innerHTML === n)) return !1;
        var i = void 0 === t.value ? t.innerHTML : t.value;
        switch (void 0 === t.afMode ? k.o : t.afMode) {
          case 2:
            n += i;
            break;
          case 3:
            n = i + n;
            break;
          case 4:
            n = n + i + n;
            break;
          case 5:
            n = isNaN(i) ? i : ++i;
            break;
          case 6:
            n = isNaN(i) ? i : --i;
        }
        if (!v && 9999 <= 0 && !W) return Cr(), !1;
        try {
          var r = t.getAttribute(je + "-" + nt + yt),
            a = !1,
            s = !1;
          if (r === jt || "both" === r) {
            await $i(t, [Qt]);
            var l = await (function (e, t, n = 1e3) {
              return new Promise((i) => {
                const r = Date.now(),
                  a = () => {
                    e.hasAttribute(t)
                      ? i(e.getAttribute(t))
                      : Date.now() - r >= n
                      ? i(null)
                      : setTimeout(a, 100);
                  };
                a();
              });
            })(t, Ze);
            if (l) (a = Er(await gr("#" + l), n)), (s = !0);
          }
          return (
            s ||
              (await $i(t, [Kt]),
              void 0 === t.value
                ? ((t.innerHTML = n), (a = !0))
                : ((t.value = await (function (e, t, n = 1e3) {
                    return new Promise((i) => {
                      const r = Date.now(),
                        a = () => {
                          e.value === t
                            ? i(t)
                            : Date.now() - r >= n
                            ? i(null)
                            : ((e.value = t), setTimeout(a, 200));
                        };
                      a();
                    });
                  })(t, n, 2e3)),
                  t.value && (a = !0))),
            a && (await $i(t, [Ft, Gt, gt]), hr(e, t)),
            !0
          );
        } catch (e) {
          return !1;
        }
      },
      D = function (e) {
        if (fr(f)) return O() && e === vr(f);
        if (e.hasAttribute(Qe) && dr(f, [Qi(e)])) return O();
        if (e.id && dr(f, [Zi(e)])) return O();
        if (yi || wi) {
          var t = (yi ? Xi(e, !0) : _i(e, !0)).trim();
          if (t && dr(f, t.split("\n"))) return O();
        }
        var n = [
          (e.name || "").trim(),
          (e.id || "").trim(),
          (e.placeholder || "").trim(),
          (e.title || "").trim(),
          (e.className || "").trim(),
          (e.initialClass || "").trim(),
          Pi(e, _e),
          Pi(e, Et + "-bind"),
          Pi(e, Et + "-reactid"),
          Pi(e, "ng-model"),
          Pi(e, Qe),
          Pi(e, Xe),
        ];
        return (
          e.hasAttribute(nt + yt) && n.push(...ar(e, nt + yt, !0).split(/ +/)),
          void 0 === e.value ||
            (e.type !== mt && e.type !== dn) ||
            n.push(ar(e, Dn, !0)),
          e.src &&
            e.src.startsWith(location.origin) &&
            e.src !== De.URL &&
            n.push((e.src || "").trim()),
          (n = Li(n)),
          dr(f, n) ||
          (e.parentElement?.nodeName === Fe.toUpperCase() &&
            dr(f, [e.parentElement?.textContent.trim()]))
            ? O()
            : O() && e === mr(f)
        );
      },
      O = function () {
        return W || 9999 > 0 || v > 0;
      },
      I = function (e, t, n) {
        if (h.vars) {
          var i,
            r,
            a,
            s = t;
          if (((t = sr(t)), (a = /\{[nv]\d+\}/g).test(t))) {
            var l, o, c;
            i = t.match(a);
            for (let e = 0; e < i.length; ++e)
              (a = new RegExp(i[e])),
                (l = i[e].replace(/\D+/g, "")),
                (o = i[e].slice(1, 2)),
                p[gn][Ve[17] + l] &&
                  void 0 !== p[gn][Ve[17] + l][o] &&
                  ((c =
                    o === Ve[21] && N[Ve[17] + l]
                      ? N[Ve[17] + l]
                      : p[gn][Ve[17] + l][o]),
                  (t = t.replace(a, c)));
          }
          if (n) return t;
          if ((a = /\{-?\d+(\+\+|\+\d+|--|-\d+)\}/g).test(t)) {
            i = t.match(a);
            for (let e, n, r = 0; r < i.length; ++r)
              (a = new RegExp(
                i[r]
                  .replace(/(\+\+|\+\d+|--|-\d+)\}/, "($1)}")
                  .replace(/\+/g, "\\+")
              )),
                (e = +i[r].replace(/\{(-?\d+).+/, "$1")),
                (n =
                  i[r].indexOf("++") > 0
                    ? 1
                    : i[r].indexOf("--") > 0
                    ? -1
                    : +i[r].replace(/.+?([+-]\d+)\}/, "$1")),
                (t = t.replace(a, e + n)),
                (s = s.replace(a, "{``" + (e + n) + "``$1}"));
            (k.v = s.replace(/``(-?\d+)``/g, "$1")), A.push({ key: e, obj: k });
          }
          if ((a = /\{[#$aA%]\d*\}/g).test(t)) {
            var u, d;
            i = t.match(a);
            for (let e = 0; e < i.length; ++e) {
              switch (
                ((a = new RegExp(i[e].replace("$", "\\$"))),
                (u = +i[e].replace(/\D/g, "") || 1),
                i[e][1])
              ) {
                case "#":
                  d = yr(1, 9);
                  for (let e = 1; e < u; ++e) d += yr(0, 9) + "";
                  break;
                case "$":
                  d = Pe[yr(0, 51)];
                  for (let e = 1; e < u; ++e) d += Pe[yr(0, 71)];
                  break;
                case Ve[0]:
                  d = "";
                  for (let e = 0; e < u; ++e) d += Pe[yr(0, 25)];
                  break;
                case "A":
                  d = "";
                  for (let e = 0; e < u; ++e) d += Pe[yr(26, 51)];
                  break;
                case "%":
                  d = "";
                  for (let e = 0; e < u; ++e) d += qe[yr(0, 15)];
              }
              t = t.replace(a, d);
            }
          }
          if ((a = /\{#(-?\d+)-(\d+)\}/).test(t))
            (i = t.match(a))[2] > i[1] &&
              ((d = yr(+i[1], +i[2])), (t = t.replace(a, d)));
          var f =
            "(?:(?:[^|\\\\{}(),]|(?:\\\\[{}|(),]))+(?:\\|(?:[^|\\\\{}(),]|(?:\\\\[{}|(),]))+)+)";
          if ((a = new RegExp("\\{" + f + "\\}", Ve[6])).test(t)) {
            i = t.match(a);
            for (let e = 0; e < i.length; ++e)
              (a = new RegExp(Ui(i[e]))),
                (r = i[e].substring(1, i[e].length - 1).split(/(?<!\\)\|/)),
                (t = t.replace(a, r[yr(0, r.length - 1)].replace(mi, "")));
          }
          if (
            (a = new RegExp(
              "\\{\\(" + f.replace("+)+", "+)*") + "\\)\\}",
              Ve[6]
            )).test(t)
          ) {
            i = t.match(a);
            for (let e, n = 0; n < i.length; ++n)
              (a = new RegExp(Ui(i[n]))),
                (e = yr(
                  0,
                  (r = i[n].substring(2, i[n].length - 2).split(/(?<!\\)\|/))
                    .length - 1
                )),
                (t = t.replace(a, r[e].replace(mi, ""))),
                r.splice(e, 1),
                (s = s.replace(a, "{``(" + r.join("|") + ")``}"));
            (k.v = s
              .replace(/``(\([^)]+\))``/g, "$1")
              .replace(/{``\(\)``}/g, "")),
              A.push({ key: e, obj: k });
          }
          var g =
            "(?:(?:[^|\\\\{}(),]|(?:\\\\[{}|(),]))+(?:,(?:[^|\\\\{}(),]|(?:\\\\[{}|(),]))+)+)";
          if ((a = new RegExp("\\{" + g + "\\}", Ve[6])).test(t)) {
            i = t.match(a);
            for (let e, n = 0; n < i.length; ++n)
              (a = new RegExp(Ui(i[n]))),
                (e = i[n].substring(1, i[n].length - 1)),
                (r = e.split(/(?<!\\),/)),
                k.hasOwnProperty(e) || (k[e] = 0),
                (t = t.replace(a, r[k[e]].replace(mi, ""))),
                void 0 === r[++k[e]] && (k[e] = 0);
            A.push({ key: e, obj: k });
          }
          if (
            (a = new RegExp(
              "\\{\\(" + g.replace("+)+", "+)*") + "\\)\\}",
              Ve[6]
            )).test(t)
          ) {
            i = t.match(a);
            for (let e = 0; e < i.length; ++e)
              (a = new RegExp(Ui(i[e]))),
                (r = i[e].substring(2, i[e].length - 2).split(/(?<!\\),/)),
                (t = t.replace(a, r[0].replace(mi, ""))),
                r.shift(),
                (s = s.replace(a, "{``(" + r.join(",") + ")``}"));
            (k.v = s
              .replace(/``(\([^)]+\))``/g, "$1")
              .replace(/{``\(\)``}/g, "")),
              A.push({ key: e, obj: k });
          }
        }
        return O() ? t : "";
      },
      z = function () {
        var e = this.nodeName === Bt ? this.contentDocument.body : this;
        if (this.afMode || !Wi(e.innerHTML)) {
          if (!R(this.afRule, e, this.afValue)) return;
          r || (De.autofilled = performance.now());
        }
      };
    if (!(t instanceof Array)) {
      t = br(He);
      for (let e = 0; e < Xn.length; ++e) t.indexOf(Xn[e]) < 0 && t.push(Xn[e]);
    }
    if (((C = t.length), h["attributes" + tn])) {
      var U = p["attributes" + tn].split(/ *,? */);
      for (let e = 0; e < U.length; ++e)
        for (let n = 0; n < t.length; ++n) t[n].removeAttribute(U[e]);
    }
    (v = s ? l.x : 0), (De.autofilling = performance.now());
    for (const t in l) {
      var H = !1;
      r
        ? u[l[t].c] && u[l[t].c].n === at + Pt && (H = !0)
        : void 0 === e || e === Ge
        ? ("" === l[t].c || (u[l[t].c] && u[l[t].c].n.indexOf(at) < 0)) &&
          (H = !0)
        : (l[t].c === e ||
            (c[l[t].c] && c[l[t].c][Ge]) ||
            (c[t] && c[t][Ge])) &&
          (H = !0),
        H && (L[t] = l[t]);
    }
    if (0 !== Object.keys(L).length) {
      !r && !a && b > 1 && t.push(De.createElement(Ft));
      for (const e in L) {
        (k = L[e]), (f = I(e, Ar(k.n), !0)), (y = k.v);
        for (let r = 0; r < t.length; ++r)
          if (
            !(
              (T = t[r]).disabled ||
              T.readOnly ||
              T.id === "g-" + fn + "-" + hn ||
              (T.type === Vt && (yi || wi))
            ) &&
            ((o = T.type), s || !((c[k.c] && c[k.c][kt]) || (c[e] && c[e][kt])))
          ) {
            switch (k.t) {
              case 0:
                if (o === ln || o === mt || o === dn || T.nodeName === vn)
                  continue;
                break;
              case 1:
                if (o !== ln) continue;
                break;
              case 2:
                if (
                  T.nodeName !== vn &&
                  T.role !== jt + Be &&
                  T.getAttribute(je + "-haspopup") !== jt + Be
                )
                  continue;
                break;
              case 3:
                if (o !== mt && o !== dn && !T.hasAttribute(Ye)) continue;
            }
            switch (k.t) {
              case 0:
              case 1:
                if (
                  T.nodeName === Ft.toUpperCase() ||
                  "TEXTAREA" === T.nodeName
                ) {
                  if (h["skip" + Vt] && ur(T)) continue;
                  if ((k.o || !T.value) && D(T)) {
                    if (!R(e, T, I(e, y))) return;
                    h.vars && y.indexOf("{") > -1 && (N[e] = T.value);
                  }
                } else {
                  var V,
                    $ = T.nodeName === Bt;
                  if ((T.srcdoc && (V = Yi(T)), V instanceof Array)) {
                    for (const t of V)
                      if (
                        (!h["skip" + Vt] || !ur(t)) &&
                        (k.o || !t.value) &&
                        D(t)
                      ) {
                        if (!R(e, t, I(e, y))) return;
                        h.vars && y.indexOf("{") > -1 && (N[e] = t.value);
                      }
                  } else if (
                    (!$ && !T.isContentEditable) ||
                    ($ && !Wr(T)) ||
                    !D(T)
                  )
                    continue;
                  if (void 0 === T.done) {
                    if (void 0 !== T.afMode) continue;
                    (T.afMode = k.o),
                      (T.afRule = e),
                      (T.afValue = I(e, y)),
                      T.addEventListener("done", z, ri);
                  } else {
                    var P = $ ? T.contentDocument.body : T;
                    if ((k.o || !Wi(P.innerHTML)) && !R(e, P, I(e, y))) return;
                  }
                }
                break;
              case 2:
                if (D(T)) {
                  var q = !W && 9999 <= 0;
                  if (T.nodeName === vn) {
                    var B = function () {
                      if (q && !v) return Cr(), !1;
                      var t = T.id && T.nextElementSibling;
                      return (
                        t &&
                          t.id === T.id + "-" + ct &&
                          t.children[1] &&
                          t.children[1].className ===
                            "ui-" + Je + "menu-" + Tn &&
                          (t.children[1].textContent =
                            T[T.selectedIndex].text || ""),
                        hr(e, T),
                        !0
                      );
                    };
                    if ("?" === (y = I(e, y).trim().toLowerCase())) {
                      if (
                        ((T.selectedIndex = yr(0, T.options.length - 1)),
                        await $i(T, [gt]),
                        !B())
                      )
                        return;
                    } else if (/^([01]?!|)$/.test(y)) {
                      for (let e = 0; e < T.length; ++e)
                        switch ("!" === y || "1!" === y) {
                          case !0:
                            T[e].selected || (T[e].selected = !0);
                            break;
                          case !1:
                            T[e].selected && (T[e].selected = !1);
                        }
                      if ((await $i(T, [gt]), !B())) return;
                    } else if (isNaN(y)) {
                      if (T.multiple) {
                        /[^\d ]/.test(y) || (y = y.replace(/ +/g, "|")),
                          /[^\d |]/.test(y) || (y = y.replace(/ +/g, ""));
                        var F = /^[\d+](\|\d+)*$/.test(y)
                            ? y.split("|")
                            : y.match(/(?<!\\)".*?(?<!\\)"/g),
                          J = !1;
                        null === F && (F = ['"' + y + '"']);
                        for (let e, t, n = 0; n < T.length; ++n)
                          (e =
                            '"' +
                            T[n].value.toLowerCase().replace(/"/g, '\\"') +
                            '"'),
                            (t =
                              '"' +
                              (T[n].text || "")
                                .toLowerCase()
                                .replace(/"/g, '\\"') +
                              '"'),
                            T[n].selected
                              ? F.indexOf(n + "") < 0 &&
                                F.indexOf(e) < 0 &&
                                F.indexOf(t) < 0 &&
                                ((T[n].selected = !1), (J = !0))
                              : (F.indexOf(n + "") > -1 ||
                                  F.indexOf(e) > -1 ||
                                  F.indexOf(t) > -1) &&
                                ((T[n].selected = !0), (J = !0));
                        if ((await $i(T, [gt]), J && !B())) return;
                      } else if (
                        ((y = (y = y.replace(/(?<!\\)"/g, "")).replace(
                          /\\"/g,
                          '"'
                        )),
                        T.value.toLowerCase() !== y)
                      )
                        for (let e = 0; e < T.length; ++e)
                          if (
                            y === T[e].value.toLowerCase() ||
                            y === (T[e].text || "").toLowerCase()
                          ) {
                            if (((T[e].selected = !0), await $i(T, [gt]), !B()))
                              return;
                            break;
                          }
                    } else if (
                      T.selectedIndex != y &&
                      ((T.selectedIndex = +y),
                      await $i(T, [gt]),
                      T.selectedIndex == y && !B())
                    )
                      return;
                  } else if (yi || wi) {
                    if (!v && q) return void Cr();
                    var K,
                      G,
                      j = i / n;
                    (T.afRule = e),
                      (T.afValue = y),
                      (T.afTick = 0),
                      yi
                        ? ((K = function (e) {
                            if (si) {
                              if (++e.afTick === j) return;
                              setTimeout(() => K(e), n);
                            } else {
                              var t = e.querySelector(Ct + "[" + et + "]");
                              if (t) (si = !0), t.click(), (e.afTick = 0), G(e);
                              else {
                                if (++e.afTick === j) return;
                                setTimeout(() => K(e), n);
                              }
                            }
                          }),
                          (G = function (e) {
                            var t = e.querySelector(
                              Ct +
                                "[" +
                                Jt +
                                "]>" +
                                Ct +
                                "[" +
                                Et +
                                "-" +
                                Dn +
                                '="' +
                                Hi(e.afValue) +
                                '"]'
                            );
                            if (t) t.click(), (si = !1), hr(e.afRule, e);
                            else {
                              if (++e.afTick === j) return;
                              setTimeout(() => G(e), n);
                            }
                          }))
                        : ((K = function (e) {
                            if (si) {
                              if (++e.afTick === j) return;
                              setTimeout(() => K(e), n / 10);
                            } else
                              (si = !0),
                                setTimeout(() => {
                                  e.click(), (e.afTick = 0), G(e);
                                }, n / 10);
                          }),
                          (G = function (e) {
                            var t = li.lastElementChild,
                              i =
                                t.nodeName === Ct.toUpperCase()
                                  ? t.querySelector(
                                      "[" +
                                        et +
                                        "] [" +
                                        _e +
                                        '="' +
                                        Hi(e.afValue) +
                                        '"]'
                                    )
                                  : null;
                            if (i) i.click(), (si = !1), hr(e.afRule, e);
                            else {
                              if (++e.afTick === j) return;
                              setTimeout(() => G(e), n / 10);
                            }
                          })),
                      K(T);
                  }
                }
                break;
              case 3:
                var Y;
                if (D(T))
                  if ("?" === (w = (y = I(e, y)).replace(/\s+/g, "")))
                    switch (T.type) {
                      case mt:
                        if ((Y = Sr(T, yr(0, 1), e)) < 0) return;
                        Y;
                        break;
                      case dn:
                        if (
                          ((f = f.replace(/[\^\$]/g, "")),
                          S.indexOf("[" + f + "]") < 0)
                        ) {
                          var Z = br(
                            Ft +
                              "[" +
                              Ln +
                              "=" +
                              dn +
                              "]" +
                              (f ? '[name="' + Hi(f) + '"]' : "")
                          );
                          if ((Y = Sr(Z[yr(0, Z.length - 1)], 1, e)) < 0)
                            return;
                          S.push("[" + f + "]"), Y;
                        }
                    }
                  else if (
                    T.type &&
                    w.length > 1 &&
                    w.indexOf("!") < 0 &&
                    !yi &&
                    !wi
                  ) {
                    if (
                      (void 0 === M[f] ? (M[f] = 0) : ++M[f],
                      M[f] < w.length && (Y = Sr(T, +w.charAt(M[f]), e)) < 0)
                    )
                      return;
                    w.length === M[f] + 1 && 0;
                  } else {
                    q = 9999 <= 0 && !W;
                    if (yi || wi) {
                      if (q && !v) return void Cr();
                      y === (T.getAttribute(_e) || T.value || "").trim() &&
                        T.getAttribute(Ye) !== Mn &&
                        (T.click(), hr(e, T));
                    } else {
                      if ((Y = Sr(T, parseInt(w), e)) < 0) return;
                      Y;
                    }
                  }
                break;
              case 4:
                b < 2
                  ? Ei && Cr(9999 > 0 || v > 0)
                  : (void 0 === E && (E = {}), (E[e] = y));
            }
          }
        if (!ni[e]) {
          k.t > 4 && (y = I(e, y));
          var X,
            Q = Li(y.split(/\s+/));
          switch (k.t) {
            case 5:
              Q[0][0] === Ve[2] && O() && (Ti(Q[0]), hr(e, Vn + " " + Q[0]));
              break;
            case 6:
              f &&
                O() &&
                (X = fr(f) ? vr(f) : mr(f)) &&
                (X.click(), hr(e, $n + " " + f));
              break;
            case 7:
              f &&
                Q.length &&
                O() &&
                (X = fr(f) ? vr(f) : mr(f)) &&
                (await $i(X, Q), hr(e, Pn + " " + f + " " + y));
              break;
            case 8:
              if (Ei && Q[0] && O()) {
                var _ = Q[1] ? Ni(Q[1]) : "";
                Q.length > 1 ? open(Q[0], _) : (location = Q[0]),
                  hr(e, qn + " " + Q[0] + (_ ? " " + _ : ""));
              }
              break;
            case 9:
              if (((Ae = Math.max(+y || 0, 0)), Ei && f && Ae >= 1 && O())) {
                var ee = setTimeout(
                  (e) => {
                    (X = fr(e) ? vr(e) : mr(e))
                      ? clearTimeout(ee)
                      : location.reload();
                  },
                  1e3 * Ae,
                  f
                );
                hr(e, Bn + " " + f + " " + Ae);
              }
              break;
            case 10:
              if (f && y && O()) {
                var te = (
                  (fr(f) ? vr(f)?.textContent : mr(f)?.textContent) || ""
                ).trim();
                if (te) {
                  var ne = Ni(y);
                  (localStorage["af_" + ne] = te),
                    hr(e, `${Fn} ${f} ${ne} = ${te}`);
                }
              }
              break;
            case 11:
              if (y && O()) {
                var xe = y.replace(/\n+/g, " ").replace(/ {2,}/g, " "),
                  Te = De.createElement(xn);
                (Te.textContent = xe),
                  De.head.appendChild(Te),
                  hr(e, Jn + " " + xe);
              }
              break;
            case 12:
              (f || y) &&
                O() &&
                ((Ae = Math.max(+y || 0, 0)),
                f
                  ? Ae
                    ? await gr(f, 1e3 * Ae)
                    : await gr(f)
                  : await Ii(1e3 * Ae),
                hr(e, Kn + (f ? " " + f : "") + (y ? " " + Ae : "")));
          }
          ni[e] = 1;
        }
        await Ii();
      }
      if (!r) {
        if (
          ((De.autofilled = performance.now()), delete De.autofilling, E && !a)
        ) {
          q = 9999 <= 0 && !W;
          if (De.readyState === yt) {
            if (!v && q) return void Cr();
            Vi(E);
          } else
            window.onload = (function (e) {
              return function () {
                !q || v ? Vi(e) : Cr();
              };
            })(E);
        }
        var Ae;
        if (!s)
          for (const t in L)
            if (
              (Ae = (c[t] && c[t][kt]) || (c[L[t].c] && c[L[t].c][kt]) || 0)
            ) {
              var Se = {};
              (Se[t] = L[t]),
                (Se.x = Math.max(9999, 0)),
                setTimeout(
                  (e) => {
                    Ti(e[dt], e[Mt], e[st], e[en], e[kt]);
                  },
                  1e3 * Ae,
                  { catexe: e, delay: Se }
                );
            }
        A.length &&
          Tr(gn, (e) => {
            var t,
              n,
              i = JSON.parse(e[gn]);
            for (let e = 0; e < A.length; ++e) i[A[e].key] = A[e].obj;
            (t = { rules: JSON.stringify(i) }),
              new Promise((e, i) => {
                var r = [],
                  a = {},
                  s = {};
                for (const e in t)
                  Qn.includes(e) ? (a[e] = t[e]) : (s[e] = t[e]);
                Object.keys(a).length && r.push(Re.local.set(a)),
                  Object.keys(s).length && r.push(Re.sync.set(s)),
                  Promise.all(r)
                    .then(() => {
                      typeof n === It && n(), e();
                    })
                    .catch(i);
              }).catch((e) => {
                throw e;
              });
          }),
          Lr(C);
      }
      return (
        ie ||
        re ||
        ae ||
        se ||
        le ||
        oe ||
        ce ||
        m ||
        g ||
        b ||
        x ||
        W ||
        ue ||
        de ||
        fe ||
        he ||
        pe ||
        ge ||
        me ||
        ve ||
        be ||
        ye ||
        we ||
        Ee ||
        ke ||
        Ce ||
        void 0
      );
    }
  }
}
function Ai(e) {
  if (!R) return [];
  var t, n;
  if ((er(), yi ? (t = Xi(R)) : wi && (t = _i(R)), t || (t = tr(R)), !n))
    if (void 0 !== R.type) n = R.value;
    else if (R.isContentEditable) n = ji(R.innerHTML);
    else if (R.nodeName === Bt && typeof (n = Yi(R)) !== kn) return [];
  return t && n !== R.initialValue
    ? [{ t: R.type === ln ? 1 : 0, n: t, v: n, s: bn, c: e }]
    : [];
}
function Si(e, t) {
  var n,
    i,
    r,
    a = ":not([disabled]):not([" + Vt + "]):not([readonly])",
    s = Ct + "[" + Jt + "][",
    l = Ct + "[" + Et + "-" + rt + "-id=" + un + "Item] " + Ct + "[",
    o = [],
    c = br(ze + a, t),
    u = br(Je + a, t),
    d = br(Tn + "area" + a, t),
    f = br("[" + wt + xt + "=" + Mn + "]", t),
    p = br(qt, t),
    g = yi ? br(s + Ye + "=" + Mn + "]", t) : [],
    m = yi ? br(s + et + "=" + Mn + "]", t) : [],
    v = wi ? br(l + Ye + "=" + Mn + "]", t) : [],
    b = wi ? br(l + je + "-haspopup] [" + _e + "]", t) : [];
  er();
  for (let t, a = 0; a < c.length; ++a)
    if (
      ((t = c[a]),
      (i = ""),
      (n = t.type),
      (r = t.value),
      ("file" !== n || r) &&
        n !== Vt &&
        !t.parentElement?.id.startsWith(it + "-") &&
        (n !== ln && n !== mt && n !== dn && (n = Tn),
        (r || t.initialValue) &&
          ((n !== Tn && n !== ln) || r !== t.initialValue) &&
          ((n !== mt && n !== dn) || t.checked !== t.initialValue)))
    )
      switch ((yi ? (i = Xi(t)) : wi && (i = _i(t)), i || (i = tr(t)), n)) {
        case Tn:
          i && o.push({ t: 0, n: i, v: r, s: bn, c: e });
          break;
        case ln:
          o.push({ t: 1, n: i, v: r, s: bn, c: e });
          break;
        default:
          (n !== mt && n !== dn) ||
            o.push({
              t: 3,
              n: i,
              v: wi
                ? t.getAttribute(_e) || r
                : new RegExp(i).test(t.name)
                ? Bi(t)
                : +t.checked + "",
              s: bn,
              c: e,
            });
      }
  for (let t, n = 0; n < u.length; ++n)
    if (
      ((t = u[n]),
      ((r = t.multiple ? ir(t) : t.value) || t.initialValue) &&
        r !== t.initialValue &&
        !t.parentElement?.id.startsWith(it + "-") &&
        (i = tr(t)))
    ) {
      if (t.multiple) {
        r = "";
        for (let e = 0, n = t.length, i = 0; e < n; ++e)
          t[e].selected &&
            ((r +=
              '|"' +
              (t[e].value || t[e].text || "").replace(/"/g, '\\"') +
              '"'),
            ++i),
            e === n - 1 && i === n && (r = "1!");
        r = r.slice(1);
      } else r = '"' + (t.value || t.text || "").replace(/"/g, '\\"') + '"';
      o.push({ t: 2, n: i, v: r, s: bn, c: e });
    }
  for (let t, n = 0; n < d.length; ++n)
    (t = d[n]),
      (i = ""),
      (!(r = t.value) && !t.initialValue) ||
        r === t.initialValue ||
        ur(t) ||
        (yi ? (i = Xi(t)) : wi && (i = _i(t)),
        i || (i = tr(t)),
        i && o.push({ t: 0, n: i, v: r, s: bn, c: e }));
  for (let t, n = 0; n < f.length; ++n)
    (t = f[n]),
      ((r = ji(t.innerHTML)) || t.initialValue) &&
        r !== t.initialValue &&
        (i = tr(t)) &&
        o.push({ t: 0, n: i, v: r, s: bn, c: e });
  for (let t, n = 0; n < p.length; ++n)
    if (((t = p[n]), (r = Yi(t)) instanceof Array)) {
      var y = Si(e, t.contentDocument);
      y.length && (o = o.concat(y));
    } else {
      if (void 0 === r || (!r && !t.initialValue) || r === t.initialValue)
        continue;
      if ((i = tr(t))) {
        if (
          h[yn + Lt + Ve[18]] &&
          self !== top &&
          top.origin.indexOf(Pt) > -1
        ) {
          var w = Ji(
            bn,
            top.location.host.replace(/^www\d*?\./, "") + top.location.pathname
          );
          w && (bn = w);
        }
        o.push({ t: 0, n: i, v: r, s: bn, c: e });
      }
    }
  for (let t, n = 0; n < g.length; ++n)
    (t = g[n]),
      (i = Xi(t)) || (i = tr(t)),
      (r = (t.getAttribute(_e) || "").trim()) &&
        i &&
        o.push({ t: 3, n: i, v: r, s: bn, c: e });
  for (let t, n = 0; n < m.length; ++n)
    (t = m[n]),
      (i = Xi(t)) || (i = tr(t)),
      (r = (t.getAttribute(Et + "-" + Dn) || "").trim()) &&
        i &&
        o.push({ t: 2, n: i, v: r, s: bn, c: e });
  for (let t, n = 0; n < v.length; ++n)
    (t = v[n]),
      (i = _i(t)) || (i = tr(t)),
      (r = (t.getAttribute(_e) || t.value || "").trim()) &&
        i &&
        o.push({ t: 3, n: i, v: r, s: bn, c: e });
  for (let t, n = 0; n < b.length; ++n)
    (t = b[n]),
      (i = _i(t)) || (i = tr(t)),
      (r = (t.getAttribute(_e) || "").trim()) &&
        i &&
        o.push({ t: 2, n: i, v: r, s: bn, c: e });
  return o;
}
function Mi(e) {
  if (
    Se?.id &&
    h[st] &&
    e.inputType &&
    (R = e.target.matches(Ue)
      ? e.target
      : e.target.ownerDocument.defaultView.frameElement)
  ) {
    var t = R.contentDocument;
    if (
      !(
        (t && t.body ? ji(t.body.innerHTML) : R.value || ji(R.innerHTML))
          .length < p[st]
      )
    ) {
      var n,
        i = at + Pt,
        r = !0;
      for (let e = 0; e < p[ht].length; ++e)
        if (p[ht][e].n === i) {
          (n = p[ht][e].k), (r = !1);
          break;
        }
      r
        ? kr(
            { type: "sC", data: { backup: !0, cat: { n: i, s: bn } } },
            (e) => {
              e?.cat && wr(e.cat);
            }
          )
        : wr(n);
    }
  }
}
function Li(e) {
  return e.filter((t, n) => null != t && "" !== t && e.indexOf(t) === n);
}
function Wi(e) {
  return e.replace(/\s|<.+?>|&nbsp;/gi, "");
}
function Ni(e) {
  return e.replace(/\W+/g, "_");
}
function Ri() {
  D &&
    (D.initialStyle
      ? D.setAttribute(xn, D.initialStyle)
      : D.removeAttribute(xn),
    delete D.initialStyle);
}
function Di(e) {
  e.observer ||
    ((e.observer = new MutationObserver((e) => {
      var t = w ? s : void 0;
      e.forEach((e) => {
        var n,
          i = [];
        for (let t = 0; t < e.addedNodes.length; ++t)
          if (
            1 === (n = e.addedNodes[t]).nodeType &&
            n.id !== Hn &&
            !/HEAD|LINK|SCRIPT|STYLE|TITLE/.test(n.nodeName) &&
            (n.nodeName !== Bt || Wr(n))
          )
            if (n.children && n.children.length) {
              i = br(He, n);
              for (let e = 0; e < i.length; ++e)
                (void 0 !== i[e].initialValue || Xn.indexOf(i[e]) > -1) &&
                  i.splice(e, 1);
            } else n.matches(He) && Xn.indexOf(n) < 0 && i.push(n);
        if (i.length) {
          if (1 === i.length && i[0].type === Vt) return;
          if (
            (Lr(i.length),
            or(i),
            (Xn = Xn.concat(i)),
            Ti(t, i, !0, !0),
            De.autofilling && !M)
          ) {
            var r = Gi(),
              a = (new Date() - y) / 1e3;
            a > r ? (r = 0) : (r -= a),
              r
                ? setTimeout(
                    (e) => {
                      Ti(e[dt], e[Mt], e[st], e[en]);
                    },
                    1e3 * r,
                    { catexe: t, fields: i, backup: !1, observe: !0 }
                  )
                : Ti(t, i, !1, !0);
          }
        }
      });
    })),
    e.observer.observe(e.body || e, { childList: !0, subtree: !0 }));
}
function Oi(e, t) {
  if (T) {
    var n = "[43m[30m[" + We + "] " + e;
    t ? console.info(n, "\n", t) : console.info(n);
  }
}
async function Ii(e = 0) {
  return new Promise((t) => setTimeout(t, e));
}
function zi(e) {
  var t = e
    .replace(/[\r\n]+/g, " ")
    .trim()
    .replace(/ +/g, ".")
    .replace(/([^\w.,>~#+-])/g, "\\$1")
    .replace(/\b(\d+)\.(\d+)\b/g, "$1\\.$2");
  return t ? "." + t : null;
}
function Ui(e) {
  return e.replace(/([$^?+*\\|(){}\[\]])/g, "\\$1");
}
function Hi(e) {
  return e.replace(/("|\\)/g, "\\$1").replace(/[\r\n]+/g, " ");
}
function Vi(e) {
  if (b < 2) return 0;
  var t = 0;
  for (const n in e)
    try {
      postMessage(Ki(Oe) + n), hr(n, e[n]), ++t;
    } catch (e) {}
  return t;
}
async function $i(e, t) {
  return new Promise(async (n) => {
    if (e) {
      var i = { bubbles: !e.classList.contains("wym_" + qt) };
      for (let n, r = 0; r < t.length; ++r) {
        switch (((n = null), t[r])) {
          case lt:
            e.blur();
            break;
          case vt:
            e.click();
            break;
          case Wt:
            e.focus({ preventScroll: !0 });
            break;
          case Ft:
            n = new InputEvent(t[r], i);
            break;
          case Kt:
          case Gt:
            n = new KeyboardEvent(t[r], i);
            break;
          case Qt:
          case _t:
            n = new MouseEvent(t[r], i);
            break;
          default:
            try {
              n = new Event(t[r], i);
            } catch (e) {}
        }
        !n || (t[r] === gt && e.value === e.initialValue) || e.dispatchEvent(n),
          N || (await Ii());
      }
      n();
    } else n();
  });
}
function Pi(e, t) {
  return (e.getAttribute(t) || "").trim();
}
function qi(e) {
  return e > 2 ? p[ht][e - 5].k : 1 === e ? Ge : "";
}
function Bi(e) {
  if (!e.name) return "";
  var t = De.getElementsByName(e.name),
    n = "";
  for (let e = 0; e < t.length; ++e) n += +t[e].checked + "";
  return n;
}
function Fi(e, t, n = 0, i) {
  if (t && typeof t === kn) {
    for (var r = 0; (e = e.parentElement); ) {
      if (++r >= n && e.matches(t)) return e;
      if (r >= i) break;
    }
    return null;
  }
  return e.parentElement;
}
function Ji(e, t) {
  for (; -1 === e.indexOf(t) || "/" !== t.slice(-1); ) t = t.slice(0, -1);
  return t;
}
function Ki(e) {
  return (function (e, t) {
    var n = "";
    for (let t, i = 0; i < e.length; ++i)
      (t = e[i]),
        (n +=
          i % 2 == 0
            ? t
            : t === t.toLowerCase()
            ? t.toUpperCase()
            : t.toLowerCase());
    var i = Uint8Array.from(atob(n), (e) => e.charCodeAt(0)),
      r = new TextEncoder().encode(t),
      a = new Uint8Array(i.length);
    for (let e = 0; e < i.length; ++e) a[e] = i[e] ^ r[e % r.length];
    return new TextDecoder().decode(a);
  })(e, We.replace(/\W/g, "") + ":" + Le);
}
function Gi() {
  var e = Math.max(h[kt] ? p[kt] : 0, 0);
  return (
    (yi || wi) && e < 0.5 && ((e = 0.5), h["rand" + kt] && (e += 0.25)),
    e && h["rand" + kt] && (e += yr(-250, 250) / 1e3),
    e
  );
}
function ji(e) {
  return Wi((e = e.replace(/<script.+?<\/script>/gi, ""))) ? e.trim() : "";
}
function Yi(e) {
  if (Wr(e))
    try {
      var t = e.contentDocument,
        n = t && t.body && br(Ue, t.body);
      return n && n.length
        ? n
        : t && t.body
        ? ji(t.body.innerHTML)
        : void Di(t);
    } catch (e) {
      return;
    }
}
function Zi(e, t) {
  if (!e.id || (t && !L)) return "";
  var n = mr(Fe + '[for="' + Hi(e.id) + '"]');
  return n?.textContent.trim() || "";
}
function Xi(e, t) {
  var n,
    i,
    r = "",
    a = "",
    s = "";
  if (
    ((!t && L) || (n = Fi(e, Ct + "[" + pn + "=" + jt + Be + "]", 2)),
    (t || L) && (i = Fi(e, Ct + "[" + pn + "=" + jt + "item]", 4)),
    n && (r += (a = ar(n, _e) || ar(n, Qe) || ar(n, Xe)) + "\n"),
    i)
  )
    if (e.type === Tn && e.role === "combo" + Be) r += (a = ar(e, _e)) + "\n";
    else {
      var l = i.querySelector("[" + pn + "=" + Ht + "]");
      l && (r += (a = l.textContent.trim()) + "\n");
    }
  return !a || t || (L && !Mr(o, a)) || (s = '"' + a + '"'), t ? r : s;
}
function Qi(e, t) {
  if (t && !L) return "";
  var n = e.getAttribute(Qe),
    i = n ? De.getElementById(n) : null;
  return i ? i.textContent.trim() : "";
}
function _i(e, t) {
  var n,
    i,
    r = "",
    a = "",
    s = "";
  if (
    ((!t && L) ||
      e.nodeName === Ft.toUpperCase() ||
      (n = Fi(e, Ct + "[" + Qe + "]")),
    (t || L) && (i = Fi(e, Ct + "[" + Et + "-" + rt + "-id=" + un + "Item]")),
    n && (r += (a = ar(n, Qe) || ar(n, Xe)) + "\n"),
    i)
  ) {
    var l = i.querySelector(
      "[" + pn + "=" + Ht + "] ." + Tn + "-" + Dt + "at-" + wt
    );
    l && (r += (a = l.textContent.trim()) + "\n");
  }
  return !a || t || (L && !Mr(o, a)) || (s = '"' + a + '"'), t ? r : s;
}
function er() {
  if (yi || wi) {
    var e = "[" + pn + "=" + Ht + "]",
      t = yi
        ? Ct + "[" + pn + "=" + jt + "item] " + e
        : wi
        ? "#" +
          un +
          "-" +
          jt +
          ">[" +
          Et +
          "-" +
          rt +
          "-id] " +
          e +
          " ." +
          Tn +
          "-" +
          Dt +
          "at-" +
          wt
        : "";
    t &&
      ((o = []),
      De.querySelectorAll(t).forEach((e) => {
        o.push(e.textContent.trim());
      }));
  }
}
function tr(e) {
  var t =
      '"' +
      (
        Qi(e, !0) ||
        Zi(e, !0) ||
        e.name ||
        e.id ||
        ar(e, _e) ||
        ar(e, nt + yt) ||
        ar(e, on) ||
        ar(e, "title") ||
        ar(e, Et + "-bind") ||
        ar(e, Et + "-reactid") ||
        ar(e, "ng-model") ||
        ar(e, Qe) ||
        ar(e, Xe) ||
        (void 0 === e.value || (e.type !== mt && e.type !== dn)
          ? ""
          : ar(e, Dn)) ||
        (e.src && e.src.startsWith(location.origin) && e.src !== De.URL
          ? e.src
          : "") ||
        ""
      ).trim() +
      '"',
    n = [];
  if ('""' === t) {
    t = (e.initialClass || e.className || "").trim();
    try {
      n = De.querySelectorAll(zi(t));
    } catch (e) {}
    t =
      t && 1 === n?.length
        ? "/\\b" + t + "\\b/"
        : (function (e) {
            if (!(e instanceof Element)) return;
            var t,
              n,
              i = e,
              r = [],
              a = function (e, t) {
                var i,
                  a = e.nodeName.toLowerCase();
                r.unshift([]),
                  e.id && r[0].push("#" + e.id),
                  r.length > 1 && r[0].push(a),
                  e.hasAttribute(_e) &&
                    e.hasAttribute(Xe) &&
                    ((i =
                      "[" +
                      _e +
                      '="' +
                      Hi(e.getAttribute(_e)) +
                      '"][' +
                      Xe +
                      '="' +
                      Hi(e.getAttribute(Xe)) +
                      '"]'),
                    r[0].push(i, a + i));
                var l = e.className
                  .replace(/\bis(Checked|Selected)\b|\bng-(dirty|valid)\b/g, "")
                  .trim();
                l && (l = zi(l)) && r[0].push(l, a + l);
                var o,
                  c,
                  u,
                  d,
                  f =
                    ((u = e
                      .getAttributeNames()
                      .filter(
                        (e) => "id" !== e && "class" !== e && !/[^\w-]/.test(e)
                      )),
                    (d = function (e, t, n) {
                      return 0 === e.length && 0 === t.length
                        ? []
                        : (0 === t.length
                            ? n.push(e)
                            : (d(e.concat(t[0]), t.slice(1), n),
                              d(e, t.slice(1), n)),
                          n.sort((e, t) => e.length - t.length));
                    })([], u, []));
                for (let t = 0; t < f.length; ++t)
                  for (let n = 0; n < f[t].length; ++n)
                    (o = f[t][n]),
                      (c = e.getAttribute(o)).indexOf("\n") > -1 && (c = ""),
                      (i = "[" + o + (c ? '="' + Hi(c) + '"' : "") + "]"),
                      r[0].push(i, a + i),
                      l && r[0].push(i + l, a + i + l);
                if (t) {
                  for (var h = e, p = 1; (h = h.previousElementSibling); )
                    h.nodeName === e.nodeName && ++p;
                  var g = ":nth-of-" + Ln + "(" + p + ")";
                  for (
                    r[0].push(a + g), l && r[0].push(a + l + g), h = e, p = 1;
                    (h = h.previousElementSibling);

                  )
                    ++p;
                  (g =
                    p > 1
                      ? p === e.parentElement?.children.length
                        ? ":last-child"
                        : ":nth-child(" + p + ")"
                      : ":first-child"),
                    r[0].push(a + g),
                    l && r[0].push(a + l + g);
                }
                if (1 === r.length) {
                  for (let e = 0; e < r[0].length; ++e)
                    if (s([r[0][e]])) return [r[0][e]];
                } else {
                  for (let e = 0; e < r.length; ++e)
                    if (r[e].length > 500) return;
                  n = (function (e) {
                    if (!(e[0] instanceof Array)) return [];
                    var t = [],
                      n = function (i, r) {
                        for (let s = 0; s < e[r].length; ++s) {
                          var a = i.slice(0);
                          a.push(e[r][s]),
                            r === e.length - 1 ? t.push(a) : n(a, r + 1);
                        }
                      };
                    return n([], 0), t;
                  })(r);
                  for (let e = 0; e < n.length; ++e) if (s(n[e])) return n[e];
                }
              },
              s = function (e) {
                var t = [];
                try {
                  t = De.querySelectorAll(e.join(">") || null);
                } catch (e) {}
                return 1 === t.length;
              };
            for (; e.parentElement; ) {
              if ((t = a(e))) return t.join(" > ");
              if ((e = e.parentElement) === li) break;
            }
            (e = i), (r = []);
            for (; e.parentElement; ) {
              if ((t = a(e, !0))) return t.join(" > ");
              if ((e = e.parentElement) === li) break;
            }
            return "";
          })(e);
  }
  return t;
}
function nr(e) {
  return Array.prototype.indexOf.call(e.parentNode.childNodes, e);
}
function ir(e) {
  var t = [],
    n = e.selectedOptions || [];
  for (let e = 0; e < n.length; ++e) t.push(n[e].value || n[e].text || "");
  return JSON.stringify(t);
}
function rr(e) {
  return (e?.textContent || "").trim();
}
function ar(e, t, n) {
  var i,
    r = (e.getAttribute(t) || "").trim();
  switch (t) {
    case nt + yt:
      jn.includes(r) && (r = "");
      break;
    case Dn:
      jn.includes(e.value.toLowerCase()) && (r = "");
  }
  if (r) {
    var a = "[" + t + '="' + Hi(r) + '"]';
    if (
      ((i = De.querySelectorAll(a).length),
      self !== top && top.origin.includes(Pt))
    )
      try {
        i += top.document.querySelectorAll(a).length;
      } catch (e) {}
  }
  return n || 1 === i ? r : "";
}
function sr(e = "") {
  if (e) {
    var t, n;
    if (p[On].length && (n = /\{@(\w+)\}/g).test(e)) {
      t = e.match(n);
      for (let i = 0; i < t.length; ++i)
        for (let r, a, s = 0; s < p[On].length; ++s)
          if (
            "#" !== p[On][s][0] &&
            ((r = p[On][s].match(/^(\w+) = (.+)$/)),
            r && ((r = r.slice(1)), t[i] === "{@" + r[0] + "}"))
          ) {
            (n = new RegExp("{@" + r[0] + "}", Ve[6])),
              (a = ""),
              (a =
                r[1].startsWith(Ki(Oe)) && b > 1
                  ? ii[r[0]] || ""
                  : r[1].replace(/\\=/g, "=").replace(/\\n/g, "\n")),
              (e = e.replace(n, a));
            break;
          }
    }
    if ((n = /\{_(\w+)\}/g).test(e)) {
      t = e.match(n);
      for (let i = 0; i < t.length; ++i)
        (n = new RegExp(t[i], Ve[6])),
          (e = e.replace(n, localStorage["af" + t[i].replace(/[{}]/g, "")]));
    }
  }
  return e;
}
function lr(e) {
  return new Promise((e, n) => {
    Tr((i) => {
      (h = (p = i)[an]),
        (a = p[Ge + "hotkey"] || ""),
        (s = qi(p[ft])),
        (l = p.spreadsheetid),
        (w = !!h.activecat),
        (E = !!h[nt + yt] && p[An].length > 0),
        (k = !!h.bisync),
        (C = !!h[ut + Ve[18]]),
        (T = !!h.debug),
        (A = !1),
        (L = !!h["parse" + Fe + Ve[18]]),
        (N = !!h.turbo),
        (f = p[Ve[14]]),
        (ie = f[Ve[0]]),
        (re = f[Ve[1]]),
        (ae = f[Ve[2]]),
        (se = f[Ve[3]]),
        (le = f[Ve[4]]),
        (oe = f[Ve[5]]),
        (ce = f[Ve[6]]),
        (m = f[Ve[7]]),
        (g = f[Ve[8]]),
        (b = f[Ve[9]]),
        (x = !!f[Ve[10]]),
        (W = !!f[Ve[11]]),
        (ue = f[Ve[12]]),
        (de = f[Ve[13]]),
        (fe = f[Ve[14]]),
        (he = f[Ve[15]]),
        (pe = f[Ve[16]]),
        (ge = f[Ve[17]]),
        (me = f[Ve[18]]),
        (ve = f[Ve[19]]),
        (be = f[Ve[20]]),
        (ye = f[Ve[21]]),
        (we = f[Ve[22]]),
        (Ee = f[Ve[23]]),
        (ke = f[Ve[24]]),
        (Ce = f[Ve[25]]),
        (F =
          "#" + (ne = (b !== +C + +W || "") + "") + fn + "-" + tt + "-" + ct),
        (J = ".rc-" + tt + ne + pt + "-error-message"),
        (K = "#" + tt + "-" + hn + ne),
        (G = "#" + ne + tt + "-source"),
        (j = "#" + fn + "-accessible-" + ne + En),
        (Y = ".rc-dos" + ut + "-body" + ne),
        (Z = "." + fn + "-" + mt + ne + "-" + ot),
        (X = "#" + ne + "rc-image" + Je),
        (Q = "#" + fn + ne + "-re" + Yt + "-" + ct),
        (_ = ".rc-" + tt + pt + "-" + ne + hn + "-field"),
        (ee = "#" + fn + "-verify-" + ne + ct);
      for (let e = 0; e < i[Tt].length; ++e)
        if (dr(i[Tt][e], ei))
          return (
            (De.onkeydown = null),
            (A = !0),
            Yn.push(Ei ? "this page" : Ot + " " + De.URL, i[Tt][e]),
            void n(Ne.getMessage("debugExceptions", Yn))
          );
      var o = JSON.parse(p[gn]);
      if (h[yn + Lt + Ve[18]]) {
        var v = location.host
          ? Pt + location.pathname
          : location.pathname.replace(/^.+?\//, "/");
        switch (p[yn + Lt + Ve[18]]) {
          case 0:
            bn = v;
            break;
          case 1:
            bn = v + location.search;
            break;
          case 2:
            bn = v + location.search + location.hash;
            break;
          case 3:
            bn = location.host ? Pt : v.replace(/(.+)\/.+$/, "$1");
        }
      } else bn = "";
      u = {};
      for (let e = 0; e < p[ht].length; ++e)
        u[p[ht][e].k] = { n: p[ht][e].n, s: p[ht][e].s };
      c = {};
      for (let e, t, n = 0; n < p[Ke].length; ++n)
        if (
          ((e = p[Ke][n].split(":")),
          (e[0] = e[0].trim().toLowerCase()),
          2 === e.length && (u[e[0]] || o[e[0]]))
        ) {
          c[e[0]] || (c[e[0]] = {}), (t = e[1].trim().split(/ +/));
          for (let n, i, r, a = 0; a < t.length; ++a)
            if (!(t[a].indexOf("=") < 1))
              if (
                ((n = t[a].split("=")),
                (i = n[0].toLowerCase()),
                (r = n[1].toLowerCase()),
                i === kt)
              ) {
                if (((r = +r), isNaN(r) || r <= 0)) continue;
                c[e[0]][i] = r;
              } else Gn.includes(i) && (c[e[0]][i] = r === Mn);
        }
      p[gn] = {};
      for (const e in o) {
        var y = sr(o[e].s || u[o[e].c]?.s);
        ((y = Ar(y)) && !dr(y, ei)) ||
          ((p[gn][e] = o[e]),
          h[Zt] &&
            ((c[e] && c[e][Rt]) || (c[p[gn][e].c] && c[p[gn][e].c][Rt])) &&
            (d || (d = {}), (d[e] = o[e])));
      }
      if (
        ((o = void 0),
        h[Zt] || (d = void 0),
        (M = !(!h[Zt] || (c[s] && c[s][Rt]) || d)),
        Ei &&
          !window.Wizard &&
          ((window.Wizard = (function () {
            I = De.createElement(Ct);
            var e,
              n =
                " (" +
                Ne.getMessage(rn + Ve[18] + cn + Ve[18] + Xt + "Active") +
                ")",
              i = je + "-expanded",
              r = Ne.getMessage(ct + "sGenerate" + mn + Ve[18]),
              a = Ne.getMessage(ct + "sGenerate" + mn + "sTT"),
              s = Ne.getMessage(Ut + "Collapse"),
              l = Ne.getMessage(Ut + "Expand"),
              o = [
                {
                  k: Ge,
                  n: Ne.getMessage(rn + Ve[18] + cn + Ve[18] + Xt + "All"),
                },
                {
                  k: "",
                  n: Ne.getMessage(rn + Ve[18] + cn + Ve[18] + Xt + Wn),
                },
              ],
              c = p[ft] > 2 ? p[ft] - 4 : 0,
              u = De.createElement(Ct),
              d = De.createElement(Fe),
              f = De.createElement(Ft),
              g = De.createElement(Et + jt),
              m = De.createElement(Ct),
              v = De.createElement(Fe),
              b = De.createElement(Je),
              y = De.createElement(ct),
              w = De.createElement(Cn),
              E = De.createElement(Ct);
            return {
              aC: function () {
                if (!Wizard.d()) {
                  var e = (
                    prompt(Ne.getMessage("prompt" + cn + "Name") + ":") || ""
                  ).trim();
                  if (e)
                    if (e.length > t)
                      alert(Ne.getMessage(En + cn + "CharLimit", [t])),
                        (b.selectedIndex = c);
                    else if (
                      /^(all|unfiled|manage\.\.\.|new\.\.\.)$/i.test(e) ||
                      e.startsWith(at) ||
                      e.startsWith("——")
                    )
                      alert(Ne.getMessage(En + cn + "Reserved")),
                        (b.selectedIndex = c);
                    else {
                      for (let t = 0; t < o.length; ++t)
                        if (o[t].n === e)
                          return (
                            alert(Ne.getMessage(En + cn + "Duplicate")),
                            void (b.selectedIndex = c)
                          );
                      kr({ type: "sC", data: { cat: { n: e, s: bn } } });
                    }
                  else b.selectedIndex = c;
                }
              },
              c: function () {
                I &&
                  !I.closing &&
                  ((I.closing = !0),
                  I.classList.remove(nn),
                  setTimeout(Wizard.rS, 200),
                  Wizard.d(!0) || kr({ type: "cH" }));
              },
              cr: function () {
                Wizard.d() ||
                  (Wizard.sS(void 0, Ne.getMessage(En + "Generating")),
                  kr({ type: "gR", data: b.value }));
              },
              d: function (t) {
                if (e && Se?.id) return !1;
                try {
                  return Wizard.iP(), !1;
                } catch (e) {
                  return t || alert(Nn), !0;
                }
              },
              eC: function (e) {
                if ((e.preventDefault(), !Wizard.d())) {
                  var t = g.querySelector(
                    "[" + Dn + '="' + Hi(this.value || f.value) + '"]'
                  );
                  t &&
                    !t.executing &&
                    ((t.executing = !0),
                    kr(
                      {
                        type: "eR",
                        data: {
                          catnow: +t.getAttribute(Et + "-ci"),
                          force: !0,
                        },
                      },
                      (e) => {
                        Se.lastError ||
                          (Wizard.rD(),
                          delete t.executing,
                          clearTimeout(I.timer),
                          (I.timer = setTimeout(() => {
                            h[bt] && 1 !== p[bt] && Wizard.c();
                          }, 2500)));
                      }
                    ));
                }
              },
              gS: function (e) {
                return `<${Cn}>${e}</${Cn}> `;
              },
              iP: function () {
                (e = Se.connect({ name: Ve[22] })).onDisconnect.addListener(
                  Wizard.hD
                ),
                  e.onMessage.addListener(Wizard.hM);
              },
              pC: function (e, t, i) {
                var r;
                if (
                  ((o.length = 2),
                  (o = o.concat(t[ht])),
                  (c = Math.max(t[ft] - 4, 0)),
                  i === zt)
                ) {
                  o.push({
                    k: "new",
                    n: Ne.getMessage(rn + Ve[18] + cn + Ve[18] + Xt + "New"),
                  }),
                    (e.length = 0);
                  for (let t = 1; t < o.length; ++t)
                    o[t].n.startsWith(at) ||
                      (((r = De.createElement(rn)).value = o[t].k),
                      (r.text = o[t].n),
                      t === c + 1
                        ? (r.selected = !0)
                        : t === o.length - 1 && (r.className = "menu-action"),
                      e.add(r));
                } else {
                  var a = new DocumentFragment();
                  e.innerHTML = "";
                  for (let e, i = 0; i < o.length; ++i)
                    o[i].n.startsWith(at) ||
                      (t[an][Lt + ht] &&
                        o[i].s &&
                        !dr(o[i].s, AF_WIZARD[yn + "Haystack"])) ||
                      ((e = i > 1 ? i + 3 : i + 1),
                      ((r = De.createElement(rn)).value = o[i].n),
                      r.setAttribute(Et + "-ci", e),
                      e === t[ft]
                        ? ((r.value += n),
                          r.value === f.value + n && (f.value += n))
                        : r.value + n === f.value &&
                          ((f.value = f.value.replace(n, "")), Wizard.rD()),
                      a.appendChild(r));
                  e.appendChild(a);
                }
              },
              rD: function () {
                f.blur(),
                  setTimeout(() => {
                    f.focus();
                  }, 50);
              },
              rS: function () {
                Wizard.sS(), (y.disabled = !1), delete I.closing;
              },
              sC: function () {
                "new" === this.value ? Wizard.aC() : (c = this.selectedIndex);
              },
              sS: function (e, t) {
                isNaN(e)
                  ? ((w.className = ""), (w.textContent = t || ""))
                  : ((w.className = e ? "warning" : "success"),
                    (w.textContent = t));
              },
              s: function () {
                if (I) {
                  if (I.classList.contains(Yt + "ed"))
                    return (
                      clearTimeout(I.timer),
                      Wizard.uS(),
                      void I.classList.add(nn)
                    );
                  var e = window.AF_WIZARD,
                    t = I.attachShadow({ mode: nn }),
                    n = De.createElement("link"),
                    i = De.createElement(Ft),
                    s = De.createElement(Dt),
                    l = De.createElement(wn),
                    o = De.createElement(wn),
                    c = De.createElement(wn),
                    k = De.createElement(wn),
                    C = De.createElement(ct);
                  if (
                    ((I.id = Hn),
                    (I.hidden = !0),
                    (I.onselectstart = function () {
                      return !1;
                    }),
                    (n.rel = xn + "sheet"),
                    (n.href = Se.getURL("css/" + Un + ".css")),
                    (i.type = "image"),
                    (i.src = Se.getURL("images/icon24.png")),
                    (i.alt = We + " logo"),
                    h[Sn] && (i.title = We + "\n" + Ne.getMessage(Un + "TT")),
                    (i.width = 24),
                    (i.height = 24),
                    i.setAttribute(pn, "link"),
                    (i.onclick = function () {
                      kr({ type: "oO" });
                    }),
                    (u.id = Hn + "-" + At),
                    (d.id = Hn + "-" + At + "-" + Fe),
                    (d.textContent = Ne.getMessage(Ut + "Execute")),
                    d.setAttribute(Ze, Hn + "-" + At + "-" + wt),
                    (d.onclick = Wizard.t),
                    (s.id = Hn + "-" + At + "-" + wt),
                    s.setAttribute(pn, "region"),
                    s.setAttribute(Qe, Hn + "-" + At + "-" + Fe),
                    (s.onsubmit = Wizard.eC),
                    (f.type = "search"),
                    (f.placeholder = Ne.getMessage(
                      Un + "Search" + cn + Ve[18]
                    )),
                    (f.spellcheck = !1),
                    h[Sn] &&
                      (f.title = Ne.getMessage(Un + "Search" + cn + "sTT")),
                    f.setAttribute(jt, Hn + "-" + ht + "-dl"),
                    (f.required = !0),
                    (f.oninput = Wizard.eC),
                    Wizard.pC(g, p, At),
                    (g.id = Hn + "-" + ht + "-dl"),
                    (m.id = Hn + "-" + zt),
                    (v.id = Hn + "-" + zt + "-" + Fe),
                    (v.textContent = Ne.getMessage(Un + "Gen")),
                    v.setAttribute(Ze, Hn + "-" + zt + "-" + wt),
                    (v.onclick = Wizard.t),
                    (l.id = Hn + "-" + zt + "-" + wt),
                    l.setAttribute(pn, "region"),
                    l.setAttribute(Qe, Hn + "-" + zt + "-" + Fe),
                    (o.id = Hn + "-step1"),
                    (o.innerHTML =
                      Wizard.gS(1) +
                      Ne.getMessage(Un + "Fill" + (e[xt] ? "Field" : "Form"))),
                    (c.id = Hn + "-step2"),
                    (c.innerHTML =
                      Wizard.gS(2) + Ne.getMessage(Un + "Choose" + cn) + ": "),
                    (k.id = Hn + "-step3"),
                    (k.innerHTML = Wizard.gS(3)),
                    Wizard.pC(b, p, zt),
                    (b.id = Hn + "-" + ht + "-sel"),
                    h[Sn] &&
                      (b.title = Ne.getMessage(Un + "Choose" + cn + "TT")),
                    (b.onchange = Wizard.sC),
                    c.appendChild(b),
                    (y.type = ct),
                    (y.id = Hn + "-create"),
                    (y.textContent = e[xt] ? r.replace(mn + Ve[18], mn) : r),
                    h[Sn] && (y.title = e[xt] ? a.replace(gn, "rule") : a),
                    (y.onclick = Wizard.cr),
                    k.appendChild(y),
                    (w.id = Hn + "-" + En),
                    (E.id = Hn + "-sub"),
                    (E.className = "warning"),
                    (E.innerHTML = Ne.getMessage(zn + (e.slug || ""))),
                    (C.type = ct),
                    (C.id = Hn + "-close"),
                    (C.textContent = " "),
                    h[Sn] && (C.title = Ne.getMessage(ct + "sClose")),
                    (C.onclick = Wizard.c),
                    s.append(d, f, g),
                    Te)
                  ) {
                    var x = De.createElement(ct);
                    (x.type = "reset"),
                      (x.className = "reset"),
                      h[Sn] && (x.title = Ne.getMessage(ct + "sClearTT")),
                      (x.innerHTML = "&times;"),
                      s.appendChild(x),
                      (s.onreset = function () {
                        f.focus();
                      });
                  }
                  u.appendChild(s),
                    l.append(v, o, c, k, w),
                    m.appendChild(l),
                    t.append(n, i, u, m, E, C),
                    li.appendChild(I),
                    Wizard.uS(),
                    setTimeout(() => {
                      (I.className = Yt + "ed"),
                        setTimeout(() => {
                          (I.className = Yt + "ed " + nn),
                            e[Ln] === zt ? b.focus() : f.focus();
                        }, 150);
                    }, 0),
                    Wizard.iP();
                }
              },
              sD: function (e) {
                var t = I?.shadowRoot;
                if (t) {
                  var n = !1;
                  for (const t in e) {
                    switch (((p[t] = e[t].newValue), t)) {
                      case ft:
                      case ht:
                        n = !0;
                        break;
                      case an:
                        p[t][Lt + ht] !== e[t].oldValue[Lt + ht] && (n = !0);
                    }
                    if (n) break;
                  }
                  n &&
                    (Wizard.pC(
                      t.getElementById(Hn + "-" + ht + "-dl") || g,
                      p,
                      At
                    ),
                    Wizard.pC(
                      t.getElementById(Hn + "-" + ht + "-sel") || b,
                      p,
                      zt
                    ));
                }
              },
              t: function () {
                if (!Wizard.d()) {
                  var e = this.parentElement.parentElement;
                  e.classList.toggle(tn),
                    e.classList.contains(tn)
                      ? (h[Sn] && (this.title = l), this.setAttribute(i, St))
                      : (e.contains(f) ? f.focus() : e.contains(b) && b.focus(),
                        h[Sn] && (this.title = s),
                        this.setAttribute(i, Mn));
                }
              },
              uS: function () {
                var e = I?.shadowRoot;
                if (e) {
                  var t = window.AF_WIZARD,
                    n = t[Ln] === zt,
                    o = "sub" === t[Ln];
                  (e.getElementById(Hn + "-step1").innerHTML =
                    Wizard.gS(1) +
                    Ne.getMessage(Un + "Fill" + (t[xt] ? "Field" : "Form"))),
                    (y.innerHTML = t[xt] ? r.replace(mn + Ve[18], mn) : r),
                    h[Sn] && (y.title = t[xt] ? a.replace(gn, "rule") : a),
                    Wizard.sS(),
                    u.classList.toggle(tn, n),
                    m.classList.toggle(tn, !n),
                    h[Sn] && ((d.title = n ? l : s), (v.title = n ? s : l)),
                    d.setAttribute(i, n ? St : Mn),
                    v.setAttribute(i, n ? Mn : St),
                    o && (E.innerHTML = Ne.getMessage(zn + (t.slug || ""))),
                    (u.hidden = m.hidden = o),
                    (E.hidden = !o),
                    n ? b.focus() : f.focus();
                }
              },
              hD: function () {
                e = void 0;
              },
              hM: function (e) {
                if ("gR" === e[Ln]) {
                  if (!I) return;
                  var t = e[Et];
                  t.length
                    ? ((y.disabled = !0),
                      kr({ type: "sR", data: { rules: t } }),
                      Wizard.sS(0, Ne.getMessage(En + "Done")),
                      clearTimeout(I.timer),
                      (I.timer = setTimeout(() => {
                        h[bt] && p[bt] > 0 ? Wizard.c() : Wizard.rS();
                      }, 2500)))
                    : Wizard.sS(
                        1,
                        e.field
                          ? Ne.getMessage(En + "EnterValue")
                          : Ne.getMessage(En + "NoChange")
                      );
                }
              },
            };
          })()),
          Re.onChanged.addListener(Wizard.sD)),
        Se?.id &&
          Ei &&
          De.URL.startsWith(Ki(Ie)) &&
          (O || (O = De.getElementById("docs-save-indicator-badge")),
          k && De.URL.includes(l)
            ? O &&
              !O.observer &&
              ((O.observer = new MutationObserver((e) => {
                if (!Se?.id)
                  return O.observer.disconnect(), void delete O.observer;
                e.forEach((e) => {
                  for (let t = 0; t < e.addedNodes.length; ++t)
                    e.addedNodes[t].querySelector(".docs-sync-20") &&
                      kr({ type: "rD" });
                });
              })),
              O.observer.observe(O, { childList: !0 }))
            : (O.observer?.disconnect(), delete O.observer)),
        (De.onkeydown = Ci),
        q?.remove(),
        E)
      ) {
        (z = p[nt + yt]), (H = z.length), (V = (U = z + z).length), ($ = {});
        for (const e of p[An].sort()) {
          var R = e.split("\n")[0].trim().split(/ *> */).pop(),
            D = e.replace(/\s*.+\n/, "");
          $[R] = D;
        }
        var xe = De.createDocumentFragment();
        q = De.createElement(Et + jt);
        for (const e in $) {
          var Ae = De.createElement(rn);
          (Ae.value = sr($[e]).replace(/\\n/g, "\\\\n").replace(/\n/g, "\\n")),
            (Ae.text = z + e.toLowerCase() + z),
            Te && (Ae.text += " " + Ae.value),
            xe.appendChild(Ae);
        }
        (q.id = "af-dl-" + r),
          q.appendChild(xe),
          li.appendChild(q),
          (B = function (e) {
            var t = !1;
            for (const n of q.options)
              if (n.value === e) {
                t = !0;
                break;
              }
            return t;
          }),
          (window.oninput = Nr);
      } else (De.oninput = null), P?.remove(), ($ = P = void 0);
      if (C) {
        var Me = mr(Z);
        if (((te = rr(mr(j))), Me)) Me.click();
        else if (Rn.includes(Ve[1] + Ot))
          for (let e = 0; e < ui.length; ++e) pr(ui[e]);
        xr();
      }
      (S = !0), De.dispatchEvent(new Event("init")), e();
    }).catch((e) => {
      n(e);
    });
  }).catch((e) => {
    throw e;
  });
}
function or(e, t) {
  if (Se?.id && e)
    for (let s = 0; s < e.length; ++s) {
      var n = e[s],
        i = n.type;
      if (
        !(
          n.hidden ||
          n.readOnly ||
          i === Vt ||
          (n.nodeName === Ct.toUpperCase() && (yi || wi))
        )
      )
        if (((n.backup = h[st] && i !== ln), n.nodeName === Bt)) {
          if (!Wr(n)) continue;
          (n.sync = t),
            (n.onload = function () {
              or([this], this.sync);
            });
          var r = Yi(n);
          r instanceof Array ? or(r, t) : typeof r === kn && cr(n, r);
        } else {
          if (!t) {
            var a = ti.get(n);
            i === mt || i === dn
              ? void 0 === a
                ? ((n.initialValue = n.checked), ti.set(n, n.checked))
                : (n.initialValue = a)
              : n.multiple
              ? void 0 === a
                ? ((n.initialValue = ir(n)), ti.set(n, n.initialValue))
                : (n.initialValue = a)
              : (n.isContentEditable
                  ? cr(n, ji(n.innerHTML))
                  : void 0 === a
                  ? ((n.initialValue = n.value), ti.set(n, n.value))
                  : (n.initialValue = a),
                (n.initialClass =
                  typeof n.className === kn ? n.className.trim() : ""));
          }
          n.oninput = n.backup ? Mi : null;
        }
    }
}
function cr(e, t) {
  if (void 0 === e.timer || e.sync) {
    var n,
      i,
      r = 0,
      a = 0,
      s = function (e) {
        if (e.isContentEditable) (n = e), (i = !0);
        else
          try {
            (n = e.contentDocument && e.contentDocument.body),
              (i = e.contentDocument && e.contentDocument.readyState === yt);
          } catch (e) {
            return;
          }
        if (n)
          if (e.sync || (i && ji(n.innerHTML) === e.initialValue)) {
            if (e.sync || 3 == ++a)
              return (
                e.isContentEditable ||
                  ((n.oninput = e.backup ? Mi : null),
                  n.setAttribute($t, St),
                  (n.onblur = Dr),
                  (n.onfocus = Or)),
                (e.done = !0),
                void (e.sync || e.dispatchEvent(bi))
              );
          } else e.sync || (e.initialValue = ji(n.innerHTML)), (a = 0);
        ++r < 100 &&
          (clearTimeout(e.timer), (e.timer = setTimeout(() => s(e), 100)));
      };
    (e.initialValue = t), s(e);
  }
}
function ur(e) {
  return null === e.offsetParent;
}
function dr(e, t) {
  if (fr(e)) return !1;
  var n = (function (e) {
    if (e.startsWith("//") || !vi.test(e)) return null;
    try {
      var t = e.lastIndexOf("/"),
        n = e.slice(1, t),
        i = e.slice(t + 1);
      return new RegExp(n, i.replace(/[gm]/g, "") + "m");
    } catch (e) {
      return null;
    }
  })(e);
  if (((e = e.toLowerCase()), n)) return n.test(t.join("\n"));
  if (e.startsWith('"') && e.endsWith('"')) {
    e = e.slice(1, -1);
    for (const n of t) if (n.trim().toLowerCase() === e) return !0;
  } else for (const n of t) if (n.toLowerCase().includes(e)) return !0;
  return !1;
}
function fr(e) {
  return e.startsWith("//") || (e.startsWith("/html") && !vi.test(e));
}
function hr(e, t) {
  _n.push(e),
    Lr(0),
    Oi(
      mn +
        " " +
        e +
        ' in profile "' +
        (u[p[gn][e].c] ? u[p[gn][e].c].n : Wn) +
        '" executed:',
      t
    );
}
function pr(e) {
  var t = new Date(),
    n = new XMLHttpRequest();
  n.open("GET", e),
    n.setRequestHeader(
      wt + "-" + Ln,
      "application/x-www-" + Dt + "-urlencoded"
    ),
    (n.timeout = 8e3),
    (n.onload = function () {
      if (n.status >= 200 && n.status < 300 && "0" === n.responseText)
        for (let n = 0; n < ui.length; ++n)
          e === ui[n] && (di[n] = new Date() - t);
    }),
    n.send();
}
function gr(e, t = 1e3) {
  return new Promise((n) => {
    const i = Date.now(),
      r = () => {
        const a = fr(e) ? vr(e) : mr(e);
        a ? n(a) : Date.now() - i >= t ? n(null) : setTimeout(r, 100);
      };
    r();
  });
}
function mr(e) {
  try {
    return e.startsWith("#")
      ? De.getElementById(e.slice(1))
      : De.querySelector(e);
  } catch (e) {
    return null;
  }
}
function vr(e) {
  try {
    return De.evaluate(e, De, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
      .singleNodeValue;
  } catch (e) {
    return null;
  }
}
function br(e, t) {
  return [].slice.call((t || De).querySelectorAll(e));
}
function yr(e = 0, t) {
  return Math.floor(Math.random() * (t - e + 1) + e);
}
function wr(e) {
  var t = Ai(e);
  t.length &&
    (kr({ type: "sR", data: { backup: !0, rules: t } }), (R = void 0));
}
function Er(e, t) {
  if (!e) return !1;
  if (e.nodeType === Node.TEXT_NODE)
    return e.textContent.trim() === t && (e.parentElement?.click(), !0);
  for (const n of e.childNodes) if (Er(n, t)) return !0;
  return !1;
}
function kr(e, t) {
  Se?.id &&
    Se.sendMessage(
      e,
      typeof t === It
        ? t
        : function () {
            Se.lastError;
          }
    );
}
function Cr(e) {
  Se?.id && kr({ type: "sU", data: e });
}
function xr() {
  try {
    var t = mr(Z);
    if (
      (hi || !t || ur(t) || (t.click(), (hi = !0)),
      rr(mr(j)) !== te && (pi = !0),
      ++fi > e && (pi = !0),
      pi)
    )
      return;
    var n = mr(F),
      i = mr(G),
      r = mr(Q),
      a = mr(_);
    if (
      (n && !ur(n) && mr(X) && n.click(),
      (!gi && oi === i?.src && r) || (mr(J)?.textContent && r && !r.disabled)
        ? r.click()
        : gi ||
          !a ||
          ur(a) ||
          mr(K)?.value ||
          oi === i?.src ||
          ((gi = !0),
          (function (e) {
            var t = "",
              n = 1e5;
            e = e.replace(fn + ".net", "google.com");
            for (let e = 0; e < di.length; ++e)
              di[e] <= n && ((n = di[e]), (t = ui[e]));
            var i = new XMLHttpRequest();
            i.open("POST", t),
              i.setRequestHeader(
                wt + "-" + Ln,
                "application/x-www-" + Dt + "-urlencoded"
              ),
              (i.timeout = 6e4),
              (i.onload = function () {
                if (i.status >= 200 && i.status < 300) {
                  var e = i.responseText,
                    t = mr(K),
                    n = mr(ee);
                  "0" === e ||
                    e.includes("<") ||
                    e.includes(">") ||
                    e.length < 2 ||
                    e.length > 50 ||
                    (oi === mr(G)?.src &&
                      t &&
                      !t.value &&
                      "none" === mr(F)?.style.display &&
                      n &&
                      ((t.value = e), n.click())),
                    (gi = !1);
                }
              }),
              (i.onerror = function () {
                gi = !1;
              }),
              (i.ontimeout = function () {
                gi = !1;
              }),
              i.send(`${Ft}=${encodeURIComponent(e)}&lang=${ci}`);
          })((oi = i.src))),
      mr(Y)?.textContent)
    )
      return;
  } catch (e) {
    return;
  }
  setTimeout(xr, yr(1750, 2250));
}
function Tr(e, t) {
  return new Promise(async (n, i) => {
    var r;
    try {
      if (typeof e === kn)
        r = Qn.includes(e) ? await Re.local.get(e) : await Re.sync.get(e);
      else if (Array.isArray(e)) {
        var a = [],
          s = [];
        for (const t of e) Qn.includes(t) ? a.push(t) : s.push(t);
        r = Object.assign({}, await Re.local.get(a), await Re.sync.get(s));
      } else
        typeof e === It && (t = e),
          (r = Object.assign({}, await Re.local.get(), await Re.sync.get()));
      typeof t === It && t(r), n(r);
    } catch (e) {
      i(e.message);
    }
  }).catch((e) => {
    throw e;
  });
}
function Ar(e) {
  return e.replace(/^# .*$/gm, "").trim();
}
function Sr(e, t, n) {
  var i,
    r = 0;
  if ("boolean" != typeof e.checked) return 0;
  switch (((i = e.checked), t)) {
    case 0:
      if (i) {
        if (!W && 9999 <= 0 && !v) return Cr(), -1;
        e.click(), hr(n, e), ++r;
      }
      break;
    case 1:
      if (!i) {
        if (!v && 9999 <= 0 && !W) return Cr(), -1;
        e.click(), hr(n, e), ++r;
      }
  }
  return r;
}
function Mr(e, t) {
  return 1 === e.filter((e) => e === t).length;
}
function Lr(e) {
  Se?.id && kr({ type: "uS", data: { fields: e, filled: _n } });
}
function Wr(e) {
  try {
    return (
      e.offsetParent &&
      e.clientWidth > 1 &&
      e.clientHeight > 1 &&
      (!!e.srcdoc ||
        ((!e.src ||
          e.src.startsWith(location.origin) ||
          /^(about|javascript)/i.test(e.src)) &&
          (!e.contentDocument ||
            !e.contentDocument.querySelector(ze + "," + Je + "," + qt))))
    );
  } catch (e) {
    return !1;
  }
}
function Nr(e) {
  var t = e.target,
    n = t.value || t.textContent || "",
    i = t.isContentEditable;
  if (n && (i || Zn.includes(t.type))) {
    var r = new xi(t),
      a = r.getPos();
    if (n.slice(a - V, a) === U) {
      if (!P) {
        var s = r.getXY(),
          l = {
            position: "fixed",
            top: s.top + 2 + "px",
            left: s.left + 2 + "px",
            width: nt,
            border: 0,
            fontFamily: "monospace",
            opacity: 0,
            padding: 0,
          },
          o = 0,
          c = function (e) {
            r.isBusy ||
              (P.isDirty && P.timer) ||
              (clearTimeout(P.timer),
              (P.timer = setTimeout(() => {
                P && (P.remove(), (P = null), "Escape" === e && t.focus());
              }, 0)),
              i && "Backspace" !== e && r.setText(),
              (t.style.outline = ""),
              "Backspace" === e && t.focus());
          };
        (P = De.createElement(Ft)),
          Object.keys(l).forEach((e) => {
            P.style[e] = l[e];
          }),
          P.setAttribute(jt, q?.id),
          (P.size = Te ? 30 : 3),
          (P.spellcheck = !1),
          (P.tabIndex = -1),
          P.addEventListener(lt, c),
          P.addEventListener(gt, function () {
            var e = this.value;
            B(e) &&
              ((e = (e = (e = e.replace(/\\\\n/g, "\v\vn")).replace(
                /\\n/g,
                "\n"
              )).replace(/\v\vn/g, "\\n")),
              i
                ? r.setText(e, this.prevLen + V, V)
                : r.setText(e, a - V, a + this.prevLen),
              setTimeout(() => {
                t.focus();
              }, 0));
          }),
          P.addEventListener(Ft, function () {
            var e = this.value;
            (o = e.length),
              Te || (this.size = o + 2),
              i
                ? (r.setText(e, this.prevLen || 0), this.focus())
                : r.setText(e, a, a + (this.prevLen || o - 1)),
              (this.prevLen = o),
              Te &&
                B(e) &&
                (i || --this.prevLen,
                this.dispatchEvent(new Event(gt, { bubbles: !0 })));
          }),
          P.addEventListener(Kt, function (e) {
            switch (e.key) {
              case "Backspace":
                this.value.length || c(e.key);
                break;
              case "Escape":
                c(e.key);
            }
            this.isDirty = !0;
          }),
          P.addEventListener(Gt, function () {
            delete this.isDirty;
          }),
          (t.style.outline = "2px dotted rgb(252 172 57)"),
          li.appendChild(P),
          P.focus();
      }
    } else if (n.slice(a - H, a) === z) {
      if (void 0 !== t.lastTriggerPos) {
        var u = (function (e, t) {
            return t < 1 || t > e.length ? "" : e.lastIndexOf(z, t - 2) + 1;
          })(n, a),
          d = n.slice(u, a - 1).toLowerCase();
        $?.hasOwnProperty(d) &&
          (i
            ? r.setText($[d], d.length + V)
            : r.setText($[d], u - z.length, a));
      }
      t.lastTriggerPos = a;
    }
  }
}
function Rr() {
  if (Se?.id)
    try {
      kr({ type: "rC", data: { force: !0 } });
    } catch (e) {}
}
function Dr() {
  Se?.id && this?.setAttribute && this.setAttribute($t, St);
}
function Or() {
  Se?.id && this?.setAttribute && this.setAttribute($t, Mn);
}
function Ir(e, t, n) {
  if (Se?.id) {
    var i = e[Et];
    switch (e[Ln]) {
      case Ve[0]:
        if (A) Oi(Ne.getMessage("debugExceptions", Yn));
        else if (p) {
          if (ki()) return void Cr();
          var r = function () {
            (s = qi(i[ft])), (w = !0), (M = !0), (ni = {}), (d = void 0), Ti(s);
          };
          S ? r() : De.addEventListener("init", r, ri);
        }
        break;
      case "cH":
        Ri();
        break;
      case Ve[2]:
        var a = R ? Ai(i.cat) : null === R ? [] : Si(i.cat);
        a.length && kr({ type: "aR", data: a }), n({ field: !!R });
        break;
      case "iT":
        var l = De.activeElement;
        if ("BODY" === l.nodeName || l.nodeName === Bt) return;
        Tr(An, async (e) => {
          var t = e[An];
          for (let e = 0; e < t.length; ++e)
            if (
              i.id ===
              t[e]
                .split("\n")[0]
                .trim()
                .replace(/ *> *|\W/g, "_")
                .toLowerCase()
            ) {
              var n = t[e].replace(/\s*.+\n/, "");
              if ((h.vars && (n = sr(n)), l.isContentEditable)) {
                var r = De.createElement(wn),
                  a = getSelection(),
                  s = a.getRangeAt(0);
                s.deleteContents(),
                  (r.innerHTML = n.replace(/\n/g, "<br>")),
                  s.insertNode(r),
                  s.setStartAfter(r),
                  s.collapse(!0),
                  a.removeAllRanges(),
                  a.addRange(s);
              } else {
                if (
                  ((l.initialValue = l.value),
                  await $i(l, [Kt]),
                  null === l.selectionEnd)
                )
                  l.value += n;
                else {
                  var o = l.selectionStart;
                  (l.value =
                    l.value.slice(0, o) + n + l.value.slice(l.selectionEnd)),
                    l.setSelectionRange(o + n.length, o + n.length);
                }
                await $i(l, [Ft, Gt, gt]);
              }
              break;
            }
        });
        break;
      case Ve[15]:
        n({ exists: !0 });
        break;
      case "sW":
        Se?.id || n({}),
          Ri(),
          (R = i[xt]
            ? ((Ei && !i.frame) || i.frame) && De.activeElement.matches(He)
              ? (function (e) {
                  if (e.getAttribute($t) !== St) {
                    var t;
                    if (!e.type)
                      if (e.nodeName === Bt)
                        (e =
                          (Wr(e) &&
                            (t = e.contentDocument) &&
                            t.activeElement) ||
                          null) &&
                          !e.matches(Ue) &&
                          (e =
                            e.ownerDocument.defaultView.frameElement || null);
                      else
                        for (
                          ;
                          e &&
                          "BODY" !== e.nodeName &&
                          e.getAttribute(wt + xt) !== Mn;

                        )
                          e = e.parentElement;
                    return (
                      e &&
                        (D = e.nodeName === Bt ? t && t.body : e) &&
                        void 0 === D.initialStyle &&
                        ((D.initialStyle = D.getAttribute(xn)),
                        setTimeout(() => {
                          D.setAttribute(
                            xn,
                            "background:#cadbf2!important;color:#000!important"
                          );
                        }, 0)),
                      e
                    );
                  }
                })(De.activeElement)
              : null
            : void 0),
          Ei &&
            (window.AF_WIZARD = {
              editable: i[xt],
              siteHaystack: ei,
              slug: i.slug,
              type: i[Ln],
            }),
          window.Wizard &&
            I &&
            (I.classList.contains(nn) ? Wizard.uS() : Ei && Wizard.s());
        break;
      case Ve[18]:
        if (!p) return;
        var o = h[st];
        lr(e[Ln]).then(
          () => {
            h[st] !== o && or(br(He), !0);
          },
          (e) => {}
        );
    }
  }
}
!(function t() {
  Se?.id && Rn && (innerWidth > 1 || innerHeight > 1)
    ? (lr().then(
        () => {
          var e = br(He);
          Lr(e.length), or(e);
          try {
            if (localStorage.afVars && b > 1)
              try {
                ii = JSON.parse(localStorage.afVars);
              } catch (e) {}
          } catch (e) {}
          var t = w ? s : void 0,
            n = Gi();
          (y = new Date()),
            setTimeout(
              (e) => {
                Ti(e[dt], e[Mt], e[st]);
              },
              250,
              { catexe: t, backup: !0 }
            ),
            M ||
              (n
                ? setTimeout(
                    (e) => {
                      Ti(e[dt], e[Mt]);
                    },
                    1e3 * n,
                    { catexe: t, fields: e }
                  )
                : Ti(t, e)),
            Di(De);
        },
        (e) => {
          Oi(e);
        }
      ),
      Se.onMessage.addListener(Ir),
      Ei && !top.FencedFrameElement && (window.onbeforeunload = Rr))
    : ++ai <= 10 * e && setTimeout(t, 100);
})();

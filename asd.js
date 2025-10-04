;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [332],
  {
    1196: (e, t, i) => {
      "use strict"
      i.d(t, { A: () => r, f: () => n })
      let n = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
          if (!e || e === 1 / 0 || e < 0)
            return 2 === t ? "00:00:00" : "0:00:00"
          let i = Math.floor(e),
            n = Math.floor(i / 3600),
            r = Math.floor((i % 3600) / 60),
            l = n.toString().padStart(t, "0"),
            o = r.toString().padStart(2, "0"),
            a = (i % 60).toString().padStart(2, "0")
          return 0 === n && 1 === t
            ? "".concat(o, ":").concat(a)
            : "".concat(l, ":").concat(o, ":").concat(a)
        },
        r = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          {
            let t = new Date(),
              i = t.getDate().toString().padStart(2, "0"),
              n = (t.getMonth() + 1).toString().padStart(2, "0"),
              r = t.getFullYear().toString()
            if (!e) return "".concat(i, ".").concat(n, ".").concat(r)
            let l = t.getHours().toString().padStart(2, "0"),
              o = (t.getMinutes() + 1).toString().padStart(2, "0")
            return ""
              .concat(i, ".")
              .concat(n, ".")
              .concat(r, " ")
              .concat(l, ":")
              .concat(o)
          }
        }
    },
    3178: () => {},
    16760: (e, t, i) => {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return i(49713)
        },
      ])
    },
    29059: () => {},
    42728: () => {},
    49713: (e, t, i) => {
      "use strict"
      i.r(t), i.d(t, { default: () => nS })
      var n = i(37876),
        r = i(58880),
        l = i(80427),
        o = i(11041),
        a = i(84371),
        s = i(14232),
        c = i(67387),
        d = i(29454),
        u = i(92228),
        p = i(69585),
        m = i(52872),
        h = i(67090),
        x = i.n(h)
      let g = (e, t, i) => Math.min(Math.max(i, e), t),
        f = l.Ay.p.withConfig({ componentId: "sc-5a383040-0" })(
          [
            "display:block;font-family:",
            ";font-weight:",
            ";text-transform:",
            ";text-align:",
            ";text-decoration:",
            ";line-height:",
            ";color:",
            ";transition:color 150ms ease;margin-bottom:",
            ";",
            " ",
            "",
          ],
          x().style.fontFamily,
          (e) => {
            let { $weight: t = 400 } = e
            return t
          },
          (e) => {
            let { $transform: t = "none" } = e
            return t
          },
          (e) => {
            let { $align: t = "left" } = e
            return t
          },
          (e) => {
            let { $decoration: t = "none" } = e
            return t
          },
          (e) => {
            let { $line: t = "normal" } = e
            return t
          },
          (e) => {
            let { theme: t, $themecolor: i = "white" } = e
            return t.colors[i]
          },
          (e) => {
            let { $margin: t = 0 } = e
            return t
          },
          (e) => {
            let { $size: t = 16, $sizeDiff: i = 1 } = e,
              n = t / 10,
              r = g(n, n * i, 1.25),
              o = g(n, n * i, 1.5)
            return (0, l.AH)(
              [
                "font-size:",
                "rem;",
                "{font-size:",
                "rem;}",
                "{font-size:",
                "rem;}",
                "{font-size:",
                "rem;}",
              ],
              n,
              (e) => {
                let { theme: t } = e
                return t.media.md.min
              },
              r,
              (e) => {
                let { theme: t } = e
                return t.media.xl.min
              },
              o,
              (e) => {
                let { theme: t } = e
                return t.media.xxl.min
              },
              n * i
            )
          },
          (e) => {
            let { $lineClamp: t } = e
            return (
              t &&
              (0, l.AH)(
                [
                  "display:-webkit-box;-webkit-line-clamp:",
                  ";overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;",
                ],
                t
              )
            )
          }
        ),
        b = (0, l.Ay)(f)
          .attrs({ as: "h1", $size: 26, $sizeDiff: 1, $weight: 500 })
          .withConfig({ componentId: "sc-5a383040-1" })([""]),
        y = (0, l.Ay)(f)
          .attrs({ as: "h2", $size: 20, $weight: 500, $sizeDiff: 1 })
          .withConfig({ componentId: "sc-5a383040-2" })([""]),
        w = (0, l.Ay)(f)
          .attrs({ as: "h3", $weight: 500, $size: 16, $sizeDiff: 1 })
          .withConfig({ componentId: "sc-5a383040-3" })([""]),
        v = (0, l.i7)([
          "from{transform:rotate(0deg);}to{transform:rotate(360deg);}",
        ]),
        j = (0, l.Ay)(u.A).withConfig({ componentId: "sc-25a31bf8-0" })(
          [
            "&&{position:relative;display:flex;align-items:center;justify-content:center;background:",
            ";color:",
            " !important;padding:1rem 3.2rem;border-radius:8px;min-height:52.5px;font-size:1.5rem;font-weight:500;text-transform:initial;letter-spacing:0;cursor:pointer;transition:0.1s;&:hover{background:",
            ";}svg{width:22px;height:22px;margin-right:10px;fill:currentColor;}",
            " &[disabled]{opacity:0.6;cursor:not-allowed;pointer-events:none;}",
            "{min-height:46px;padding:0;font-size:1.3rem;}}",
          ],
          (e) => {
            let { theme: t, $themecolor: i = "primary" } = e
            return t.colors[i]
          },
          (e) => {
            let { theme: t } = e
            return t.colors.white
          },
          (e) => {
            let { theme: t, $themecolor: i = "primary" } = e
            return (0, c.e$)(String(t.colors[i]), 0.2)
          },
          (e) => {
            let { $width: t } = e
            return t && (0, l.AH)(["min-width:", ";max-width:", ";"], t, t)
          },
          (e) => {
            let { theme: t } = e
            return t.media.sm.max
          }
        ),
        k = l.Ay.span.withConfig({ componentId: "sc-25a31bf8-1" })(
          [
            "width:24px;height:24px;border:3px solid ",
            ";border-right:3px solid transparent;border-bottom:3px solid transparent;border-radius:50%;animation:",
            " 0.7s linear infinite;",
            "",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.white
          },
          v,
          (e) => {
            let { $margin: t } = e
            return t && (0, l.AH)(["margin-left:-40px;margin-right:16px;"])
          }
        ),
        C = (0, l.Ay)(p.A).withConfig({ componentId: "sc-25a31bf8-2" })(
          [
            "&&{color:",
            ";background:",
            ";padding:10px;border-radius:8px;&:hover{background:",
            ";}svg{fill:currentColor;width:18px;height:18px;}min-width:",
            ";max-width:",
            ";min-height:",
            ";max-height:",
            ";}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.white
          },
          (e) => {
            let { theme: t, $themecolor: i = "dark100" } = e
            return t.colors[i]
          },
          (e) => {
            let { theme: t } = e
            return t.colors.primary
          },
          (e) => {
            let { $size: t } = e
            return "".concat(t, "px")
          },
          (e) => {
            let { $size: t } = e
            return "".concat(t, "px")
          },
          (e) => {
            let { $size: t } = e
            return "".concat(t, "px")
          },
          (e) => {
            let { $size: t } = e
            return "".concat(t, "px")
          }
        ),
        A = (0, l.Ay)(f).withConfig({ componentId: "sc-25a31bf8-3" })(
          [
            "padding:3px 5px;font-size:1.3rem !important;font-weight:600;color:",
            " !important;",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.black
          }
        ),
        I = (e) => {
          let { children: t, label: i, $size: r = 42, placement: l, ...o } = e
          return (0, n.jsx)(m.A, {
            classes: { tooltip: "icon-button-tooltip" },
            placement: l,
            title: (0, n.jsx)(A, { children: i }),
            children: (0, n.jsx)(C, { ...o, $size: r, children: t }),
          })
        },
        S = (e) => {
          let { $loading: t, children: i, ...r } = e
          return (0, n.jsxs)(j, {
            $loading: t,
            ...r,
            children: [t && (0, n.jsx)(k, { $margin: !!i }), i],
          })
        }
      var _ = i(58311),
        P = i(47440)
      let z = (0, l.Ay)(_.A).withConfig({ componentId: "sc-d41e5f6a-0" })(
          [
            "&&{border-radius:8px;display:flex;background:transparent;margin:0;box-shadow:none;border:2px solid ",
            ";&:hover{border-color:",
            ";}& > div{font-size:14px !important;color:",
            ";}}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.dark
          },
          (e) => {
            let { theme: t } = e
            return t.colors.primary
          },
          (e) => {
            let { theme: t } = e
            return t.colors.white
          }
        ),
        L = (0, l.Ay)(p.A).withConfig({ componentId: "sc-d41e5f6a-1" })(
          [
            "&&{background:",
            ";border-radius:0 5px 5px 0;&:hover{background:",
            ";}}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.dark
          },
          (e) => {
            let { theme: t } = e
            return t.colors.primary
          }
        ),
        N = l.Ay.div.withConfig({ componentId: "sc-d41e5f6a-2" })([
          "display:flex;align-items:center;margin-top:15px;max-width:max-content;input:-webkit-autofill,input:-webkit-autofill:focus{transition:background-color 600000s 0s,color 600000s 0s;}input[data-autocompleted]{background-color:transparent !important;}",
        ]),
        R = (e) => {
          let {
              name: t,
              value: i = "",
              resetOnSave: r,
              placeholder: l,
              onSave: c,
            } = e,
            [d, u] = (0, s.useState)(i)
          ;(0, s.useEffect)(() => {
            u(i)
          }, [i])
          let p = (0, s.useCallback)(
            (e) => {
              e.preventDefault(), c(d), r && u("")
            },
            [d, r, c]
          )
          return (0, n.jsx)(N, {
            onClick: (e) => e.stopPropagation(),
            children: (0, n.jsxs)(z, {
              onSubmit: p,
              component: "form",
              children: [
                (0, n.jsx)(P.Ay, {
                  id: t,
                  sx: { ml: 1, flex: 1 },
                  value: null != d ? d : "",
                  placeholder: l,
                  onChange: (e) => {
                    u(e.target.value), e.stopPropagation()
                  },
                }),
                (0, n.jsx)(L, {
                  type: "submit",
                  sx: { p: "10px" },
                  children: (0, n.jsx)(a.g, { icon: o.fU5 }),
                }),
              ],
            }),
          })
        }
      var M = i(90133),
        E = i(75784),
        $ = i(98477)
      let U = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-eb7e4cba-0" })([
          "position:fixed;left:0;top:0;right:0;width:100%;height:100vh;z-index:999999;display:flex;background:rgba(0,0,0,0.6);backdrop-filter:blur(4px);padding:15px;overflow:auto;",
        ]),
        B = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-eb7e4cba-1" })(
          [
            "background:",
            ";border:1px solid ",
            ";padding:24px;margin:auto;max-width:700px;border-radius:16px;",
            "{padding:20px;}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.dark400
          },
          (e) => {
            let { theme: t } = e
            return t.colors.dark
          },
          (e) => {
            let { theme: t } = e
            return t.media.sm.max
          }
        ),
        T = l.Ay.div.withConfig({ componentId: "sc-eb7e4cba-2" })(
          [
            "display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;",
            "{margin-right:20px;}",
          ],
          y
        ),
        D = (0, l.Ay)(p.A).withConfig({ componentId: "sc-eb7e4cba-3" })(
          [
            "&&{color:",
            ";background:",
            ";padding:8px;border-radius:8px;&:hover{background:",
            ";}svg{fill:currentColor;width:12px;height:12px;}}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.white
          },
          (e) => {
            let { theme: t } = e
            return t.colors.dark
          },
          (e) => {
            let { theme: t } = e
            return t.colors.primary
          }
        ),
        q = (e) => {
          let { children: t, visible: i, heading: r = "", close: l, ...s } = e,
            c = document.querySelector("body")
          return c
            ? $.createPortal(
                (0, n.jsx)(E.N, {
                  initial: !1,
                  children:
                    i &&
                    (0, n.jsx)(U, {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      transition: { duration: 0.2 },
                      children: (0, n.jsx)(M.x, {
                        onClickAway: l,
                        children: (0, n.jsxs)(B, {
                          initial: { opacity: 0, scale: 0.9 },
                          animate: { opacity: 1, scale: 1 },
                          exit: { opacity: 0, scale: 0.9 },
                          transition: {
                            duration: 0.3,
                            ease: [0.5, 0.32, 0.11, 1],
                          },
                          ...s,
                          children: [
                            (0, n.jsxs)(T, {
                              children: [
                                (0, n.jsx)(y, { children: r }),
                                (0, n.jsx)(D, {
                                  onClick: l,
                                  children: (0, n.jsx)(a.g, { icon: o.Qbn }),
                                }),
                              ],
                            }),
                            t,
                          ],
                        }),
                      }),
                    }),
                }),
                c
              )
            : null
        }
      var V = i(20503),
        F = i(89178),
        H = i(71657)
      let O = () => {
        let [e, t] = (0, s.useState)(!1)
        return [
          e,
          (0, s.useCallback)(() => t(!0), []),
          (0, s.useCallback)(() => t(!1), []),
        ]
      }
      var G = i(31371)
      let W = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-f00f21ce-0" })([
          "display:flex;flex-direction:column;min-width:300px;",
        ]),
        Z = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-f00f21ce-1" })([
          "width:100%;& > div,& > div > form{width:100%;max-width:100%;}",
        ]),
        X = (0, l.Ay)(q).withConfig({ componentId: "sc-f00f21ce-2" })([
          "max-width:max-content;",
        ]),
        J = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-f00f21ce-3" })(
          [
            "display:grid;gap:8px;grid-template-columns:",
            ";",
            "{grid-template-columns:repeat(1,350px);}",
          ],
          (e) => {
            let { $row: t } = e
            return "repeat(".concat(t ? 2 : 1, ", 1fr)")
          },
          (e) => {
            let { theme: t } = e
            return t.media.md.max
          }
        ),
        Q = l.Ay.div.withConfig({ componentId: "sc-f00f21ce-4" })(
          [
            "display:flex;align-items:center;color:",
            ";background:",
            ';padding:4px 8px;border-radius:4px;font-size:1.1rem;font-weight:500;&:before{content:"";display:block;margin-right:4px;width:4px;height:4px;border-radius:50%;background:',
            ";}",
          ],
          (e) => {
            let { theme: t, $themecolor: i } = e
            return t.colors[i]
          },
          (e) => {
            let { theme: t, $themecolor: i } = e
            return (0, c.X4)(String(t.colors[i]), 0.25)
          },
          (e) => {
            let { theme: t, $themecolor: i } = e
            return t.colors[i]
          }
        ),
        Y = l.Ay.div.withConfig({ componentId: "sc-f00f21ce-5" })(
          [
            "display:flex;justify-content:space-between;align-items:center;padding:6px 6px 6px 12px;background:",
            ";border-radius:8px;min-height:46px;",
            "",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.dark
          },
          (e) => {
            let { $disabled: t } = e
            return (
              t &&
              (0, l.AH)(["background:", ";"], (e) => {
                let { theme: t } = e
                return t.colors.dark300
              })
            )
          }
        ),
        K = l.Ay.div.withConfig({ componentId: "sc-f00f21ce-6" })([
          "display:flex;align-items:center;gap:8px;margin-right:20px;",
        ]),
        ee = (0, l.Ay)(f).withConfig({ componentId: "sc-f00f21ce-7" })([
          "font-size:1.4rem;",
        ]),
        et = (0, l.Ay)(S).withConfig({ componentId: "sc-f00f21ce-8" })(
          [
            "&&{padding:0 12px;min-height:34px;border-radius:4px;font-size:1.3rem;background:",
            ";color:",
            " !important;svg{width:12px;height:12px;margin-right:6px;}&:hover{background:",
            ";}}",
          ],
          (e) => {
            let { theme: t } = e
            return (0, c.a)(String(t.colors.dark300), 0.1)
          },
          (e) => {
            let { theme: t } = e
            return t.colors.white
          },
          (e) => {
            let { theme: t } = e
            return (0, c.a)(String(t.colors.dark300), 0.2)
          }
        ),
        ei = l.Ay.span.withConfig({ componentId: "sc-f00f21ce-9" })(
          [
            "display:block;width:100%;height:1px;background:",
            ";margin:20px 0;",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.dark
          }
        ),
        en = (0, l.Ay)(S).withConfig({ componentId: "sc-f00f21ce-10" })(
          [
            "&&{margin-bottom:25px;border-radius:8px;background:",
            ";min-height:46px;padding-top:0;padding-bottom:0;width:100%;&:hover{background:",
            ";}}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.dark300
          },
          (e) => {
            let { theme: t } = e
            return t.colors.dark
          }
        ),
        er = () => {
          let [e, t, i] = O(),
            [r, l] = (0, s.useState)([]),
            [c, u] = (0, s.useState)([]),
            { user: p } = (0, s.useContext)(H.Rs),
            m = (0, s.useMemo)(() => {
              var e
              return V.dS.includes(
                null != (e = null == p ? void 0 : p.name) ? e : ""
              )
            }, [null == p ? void 0 : p.name]),
            h = (0, s.useCallback)(() => d.A.get(H.wb), [])
          ;(0, s.useEffect)(
            () => (
              F.s.on(G.q.GetAdmins, l),
              F.s.on(G.q.GetActiveAdmins, u),
              () => {
                F.s.off(G.q.GetAdmins, l), F.s.off(G.q.GetActiveAdmins, u)
              }
            ),
            []
          ),
            (0, s.useEffect)(() => {
              e && (F.s.emit(G.q.GetAdmins), F.s.emit(G.q.GetActiveAdmins))
            }, [e])
          let x = (0, s.useCallback)(
              (e) => {
                e && !r.includes(e) && F.s.emit(G.q.AddAdmin, e, h())
              },
              [r, h]
            ),
            g = (0, s.useCallback)(
              (e) => {
                F.s.emit(G.q.RemoveAdmin, e, h())
              },
              [h]
            )
          return (null == p ? void 0 : p.name)
            ? (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(X, {
                    visible: e && r.length > 0,
                    close: i,
                    heading: "Lista admin\xf3w",
                    children: (0, n.jsxs)(W, {
                      children: [
                        (0, n.jsx)(J, {
                          $row: r.length > 8,
                          children: r
                            .sort(
                              (e, t) =>
                                Number(c.includes(t)) - Number(c.includes(e))
                            )
                            .map((e) =>
                              (0, n.jsxs)(
                                Y,
                                {
                                  $disabled: !c.includes(e),
                                  children: [
                                    (0, n.jsxs)(K, {
                                      children: [
                                        (0, n.jsx)(Q, {
                                          $themecolor: c.includes(e)
                                            ? "green"
                                            : "gray200",
                                          children: c.includes(e)
                                            ? "Online"
                                            : "Offline",
                                        }),
                                        (0, n.jsx)(ee, { children: e }),
                                      ],
                                    }),
                                    !!(!V.dS.includes(e) && m) &&
                                      (0, n.jsxs)(et, {
                                        onClick: () => g(e),
                                        children: [
                                          (0, n.jsx)(a.g, { icon: o.yLS }),
                                          " Usuń",
                                        ],
                                      }),
                                  ],
                                },
                                e
                              )
                            ),
                        }),
                        m &&
                          (0, n.jsxs)(Z, {
                            children: [
                              (0, n.jsx)(ei, {}),
                              (0, n.jsx)(R, {
                                name: "admin-add",
                                placeholder: "Dodaj admina",
                                onSave: x,
                                resetOnSave: !0,
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                  (0, n.jsx)(en, {
                    onClick: t,
                    children: m
                      ? (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)(a.g, { icon: o.hpd }),
                            " Edytuj listę admin\xf3w",
                          ],
                        })
                      : (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)(a.g, { icon: o.pS3 }),
                            " Wyświetl listę admin\xf3w",
                          ],
                        }),
                  }),
                ],
              })
            : null
        },
        el = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-c1cc08d4-0" })(
          [
            "width:100%;margin-bottom:30px;& > ",
            "{justify-content:left;display:flex;margin-bottom:20px;}",
          ],
          y
        ),
        eo = l.Ay.div.withConfig({ componentId: "sc-c1cc08d4-1" })([
          "display:flex;align-items:center;",
        ]),
        ea = () => {
          let { user: e } = (0, s.useContext)(H.Rs)
          return (null == e ? void 0 : true)
            ? (0, n.jsxs)(el, {
                children: [
                  (0, n.jsxs)(y, {
                    children: [
                      (0, n.jsx)(a.g, {
                        icon: o.gdJ,
                        style: { marginRight: "8px" },
                      }),
                      (0, n.jsx)(eo, { children: "Lista admin\xf3w" }),
                    ],
                  }),
                  (0, n.jsx)(er, {}),
                ],
              })
            : null
        }
      var es = i(1196)
      let ec = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-b74c912c-0" })([
          "display:flex;flex-direction:column;min-width:300px;",
        ]),
        ed = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-b74c912c-1" })([
          "width:100%;& > div,& > div > form{width:100%;max-width:100%;}",
        ]),
        eu = (0, l.Ay)(q).withConfig({ componentId: "sc-b74c912c-2" })([
          "max-width:max-content;",
        ]),
        ep = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-b74c912c-3" })(
          [
            "display:grid;gap:8px;grid-template-columns:",
            ";",
            "{grid-template-columns:repeat(1,350px);}",
          ],
          (e) => {
            let { $row: t } = e
            return "repeat(".concat(t ? 2 : 1, ", 1fr)")
          },
          (e) => {
            let { theme: t } = e
            return t.media.md.max
          }
        ),
        em = (0, l.Ay)(f).withConfig({ componentId: "sc-b74c912c-4" })([
          "font-size:1.4rem;",
        ]),
        eh = (0, l.Ay)(em).withConfig({ componentId: "sc-b74c912c-5" })(
          [
            "display:flex;align-items:center;font-size:1.2rem;color:",
            ";line-height:1.2;",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.dark200
          }
        ),
        ex = l.Ay.div.withConfig({ componentId: "sc-b74c912c-6" })(
          [
            "display:flex;justify-content:center;align-items:center;padding:10px 20px;background:",
            ";border-radius:8px;& > ",
            "{font-size:1.7rem;}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.dark300
          },
          em
        ),
        eg = l.Ay.div.withConfig({ componentId: "sc-b74c912c-7" })(
          [
            "display:flex;justify-content:space-between;align-items:center;padding:6px 6px 6px 18px;background:",
            ";border-radius:8px;min-height:46px;",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.dark300
          }
        ),
        ef = l.Ay.div.withConfig({ componentId: "sc-b74c912c-8" })([
          "display:flex;flex-direction:column;margin-right:70px;",
        ]),
        eb = (0, l.Ay)(S).withConfig({ componentId: "sc-b74c912c-9" })(
          [
            "&&{padding:0 12px;min-height:34px;border-radius:4px;font-size:1.3rem;background:",
            ";color:",
            " !important;svg{width:12px;height:12px;margin-right:6px;}&:hover{background:",
            ";}}",
          ],
          (e) => {
            let { theme: t } = e
            return (0, c.a)(String(t.colors.dark300), 0.1)
          },
          (e) => {
            let { theme: t } = e
            return t.colors.white
          },
          (e) => {
            let { theme: t } = e
            return (0, c.a)(String(t.colors.dark300), 0.2)
          }
        ),
        ey = l.Ay.span.withConfig({ componentId: "sc-b74c912c-10" })(
          [
            "display:block;width:100%;height:1px;background:",
            ";margin:20px 0;",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.dark100
          }
        ),
        ew = (0, l.Ay)(S).withConfig({ componentId: "sc-b74c912c-11" })(
          [
            "&&{margin-bottom:25px;border-radius:8px;background:",
            ";min-height:46px;padding-top:0;padding-bottom:0;width:100%;&:hover{background:",
            ";}}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.dark300
          },
          (e) => {
            let { theme: t } = e
            return t.colors.dark
          }
        ),
        ev = () => {
          let [e, t, i] = O(),
            [r, l] = (0, s.useState)([]),
            { user: c } = (0, s.useContext)(H.Rs),
            u = (0, s.useCallback)(() => d.A.get(H.wb), [])
          ;(0, s.useEffect)(
            () => (
              F.s.on(G.q.GetBanList, l),
              () => {
                F.s.off(G.q.GetBanList, l)
              }
            ),
            []
          ),
            (0, s.useEffect)(() => {
              e && F.s.emit(G.q.GetBanList)
            }, [e])
          let p = (0, s.useCallback)(
              (e) => {
                c &&
                  e &&
                  !r.map((e) => e.name).includes(e) &&
                  !V.dS.includes(e) &&
                  F.s.emit(
                    G.q.BanUser,
                    { name: e, bannedBy: c.name, date: (0, es.A)(!0) },
                    u()
                  )
              },
              [r, c, u]
            ),
            m = (0, s.useCallback)(
              (e) => {
                F.s.emit(G.q.UnbanUser, e, u())
              },
              [u]
            )
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(eu, {
                visible: e,
                close: i,
                heading: "Lista ban\xf3w",
                children: (0, n.jsxs)(ec, {
                  children: [
                    (0, n.jsx)(ep, {
                      $row: r.length > 8,
                      children:
                        r.length > 0
                          ? r.map((e) =>
                              (0, n.jsxs)(
                                eg,
                                {
                                  children: [
                                    (0, n.jsxs)(ef, {
                                      children: [
                                        (0, n.jsx)(em, { children: e.name }),
                                        !!(e.bannedBy && e.date) &&
                                          (0, n.jsxs)(eh, {
                                            children: [
                                              e.bannedBy,
                                              " - ",
                                              e.date,
                                            ],
                                          }),
                                      ],
                                    }),
                                    (0, n.jsxs)(eb, {
                                      onClick: () => m(e.name),
                                      children: [
                                        (0, n.jsx)(a.g, { icon: o.yLS }),
                                        " Usuń",
                                      ],
                                    }),
                                  ],
                                },
                                e.name
                              )
                            )
                          : (0, n.jsx)(ex, {
                              children: (0, n.jsx)(em, {
                                children: "Lista jest pusta",
                              }),
                            }),
                    }),
                    (0, n.jsxs)(ed, {
                      children: [
                        (0, n.jsx)(ey, {}),
                        (0, n.jsx)(R, {
                          name: "ban-add",
                          placeholder: "Zbanuj użytkownika",
                          onSave: p,
                          resetOnSave: !0,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, n.jsxs)(ew, {
                onClick: t,
                children: [
                  (0, n.jsx)(a.g, { icon: o.hpd }),
                  " Edytuj listę ban\xf3w",
                ],
              }),
            ],
          })
        },
        ej = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-b09417de-0" })(
          [
            "width:100%;margin-bottom:30px;& > ",
            "{display:flex;justify-content:left;margin-bottom:20px;}",
          ],
          y
        ),
        ek = l.Ay.div.withConfig({ componentId: "sc-b09417de-1" })([
          "display:flex;align-items:center;",
        ]),
        eC = () => {
          let { user: e } = (0, s.useContext)(H.Rs)
          return (null == e ? void 0 : true)
            ? (0, n.jsxs)(ej, {
                children: [
                  (0, n.jsxs)(y, {
                    children: [
                      (0, n.jsx)(a.g, {
                        icon: o.$T_,
                        style: { marginRight: "8px" },
                      }),
                      (0, n.jsx)(ek, { children: "Lista ban\xf3w" }),
                    ],
                  }),
                  (0, n.jsx)(ev, {}),
                ],
              })
            : null
        }
      var eA = i(8614)
      let eI = (0, l.Ay)(r.P.footer).withConfig({
          componentId: "sc-f9b4c558-0",
        })(
          [
            "position:relative;padding:12px 20px;background:#0d1117;border-top:1px solid ",
            ";color:",
            ";",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.dark
          },
          (e) => {
            let { theme: t } = e
            return t.colors.white
          }
        ),
        eS = l.Ay.ul.withConfig({ componentId: "sc-f9b4c558-1" })(
          [
            "display:flex;flex-direction:column;align-items:center;text-align:center;width:100%;max-width:300px;margin:0 auto;",
            "{flex-direction:row;justify-content:space-evenly;}",
          ],
          (e) => {
            let { theme: t } = e
            return t.media.sm.min
          }
        ),
        e_ = l.Ay.a.withConfig({ componentId: "sc-f9b4c558-2" })([
          "position:relative;display:flex;align-items:center;color:inherit;text-decoration:none;white-space:nowrap;padding:7px 15px;font-weight:100;transition:0.1s;background:#0d1117;z-index:1;span{margin-left:8px;}svg{width:24px;height:24px;}&:hover{text-decoration:underline;}",
        ]),
        eP = {
          document: "Dokument",
          discord: "Discord",
          donate: "Donejty",
          twitter: "Twitter",
          instagram: "Instagram",
          youtube: "YouTube",
          twitch: "Twitch",
        },
        ez = {
          document: (0, n.jsx)(a.g, { icon: o.LBj }),
          discord: (0, n.jsx)(a.g, { icon: eA._2G }),
          donate: (0, n.jsx)(a.g, { icon: o.Vpi }),
          twitter: (0, n.jsx)(a.g, { icon: eA.NLt }),
          instagram: (0, n.jsx)(a.g, { icon: eA.QV6 }),
          youtube: (0, n.jsx)(a.g, { icon: eA.B4m }),
          twitch: (0, n.jsx)(a.g, { icon: eA.Zhe }),
        },
        eL = (0, s.memo)(() =>
          (0, s.useMemo)(
            () =>
              (0, n.jsx)(eI, {
                children: (0, n.jsx)(eS, {
                  children: V.aC.map((e) => {
                    let { type: t, label: i, link: r } = e
                    return (0, n.jsxs)(
                      e_,
                      {
                        href: r,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: [
                          ez[t],
                          (0, n.jsx)("span", {
                            children: null != i ? i : eP[t],
                          }),
                        ],
                      },
                      r
                    )
                  }),
                }),
              }),
            []
          )
        )
      var eN = i(21338),
        eR = i(19204),
        eM = i(70015),
        eE = i(82179),
        e$ = i(43285),
        eU = i(26825)
      let eB = V.f7,
        eT = (0, l.Ay)(eE.p).withConfig({ componentId: "sc-449f2067-0" })(
          [
            "&:hover{& > div{opacity:1;}&:before{border-color:",
            ';}}&:before{content:"";position:absolute;top:0;left:0;bottom:0;right:0;border:4px solid transparent;transition:0.2s;pointer-events:none;border-radius:8px;}',
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.primary
          }
        ),
        eD = l.Ay.div.withConfig({ componentId: "sc-449f2067-1" })(
          [
            "position:absolute;border-radius:8px;top:0;right:0;display:flex;justify-content:center;align-items:center;width:30px;height:30px;border-radius:0 0 0 6px;background:",
            ";cursor:move;transition:opacity ease-in-out 0.15s;opacity:0;padding:5px;svg{fill:#fff;}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.primary
          }
        ),
        eq = l.Ay.iframe.withConfig({ componentId: "sc-449f2067-2" })(
          [
            "width:100%;height:100%;pointer-events:",
            ";background:",
            ";border-radius:8px;overflow:hidden;box-shadow:0 0 10px rgba(0,0,0,0.2);",
          ],
          (e) => {
            let { $noEvents: t } = e
            return t ? "none" : "initial"
          },
          (e) => {
            let { theme: t } = e
            return t.colors.dark300
          }
        ),
        eV = (0, s.memo)(() => {
          let [e, t] = (0, s.useState)(!1),
            [i, r] = (0, s.useState)(eU.zd),
            [l, c] = (0, s.useState)(eU.H9),
            { camChannel: d, camVisible: u } = (0, s.useContext)(e$.B),
            p = (0, s.useCallback)(() => {
              t(!1)
            }, []),
            m = (0, s.useCallback)(() => {
              t(!0)
            }, [])
          return ((0, s.useEffect)(
            () => (
              e &&
                (window.addEventListener("mouseup", p),
                window.addEventListener("touchend", p)),
              () => {
                window.removeEventListener("mouseup", p),
                  window.removeEventListener("touchend", p)
              }
            ),
            [e, p]
          ),
          u && (null == d ? void 0 : d.trim()))
            ? (0, n.jsxs)(eT, {
                lockAspectRatio: !0,
                bounds: "window",
                minWidth: 150,
                minHeight: 85,
                default: { ...i, ...l },
                cancel: ".cancel",
                onResizeStart: () => {
                  t(!1)
                },
                onDragStart: () => {
                  t(!1)
                },
                onResizeStop: (e, i, n) => {
                  let l = { width: n.style.width, height: n.style.height }
                  t(!1), r(l), (0, eU.qB)(l)
                },
                onDragStop: (e, i) => {
                  let n = { x: i.x, y: i.y }
                  t(!1), c(n), (0, eU.Se)(n)
                },
                children: [
                  (0, n.jsx)(eD, {
                    onMouseDown: m,
                    onTouchStart: m,
                    children: (0, n.jsx)(a.g, { icon: o.wj_ }),
                  }),
                  (0, n.jsx)(eq, {
                    title: "camera",
                    className: "cancel",
                    $noEvents: e,
                    style: { overflow: "hidden", border: "none" },
                    src: d.includes("kick.com")
                      ? "https://player.degenerat.pl/?channel=".concat(
                          d.split("/").at(-1),
                          "?autoplay=true&muted=false"
                        )
                      : "https://player.twitch.tv/?channel="
                          .concat(d, "&parent=")
                          .concat(eB),
                  }),
                ],
              })
            : null
        })
      eV.displayName = "Camera"
      let eF = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-9ffd49e8-0" })(
          [
            "position:fixed;bottom:10px;left:10px;color:",
            ";padding:10px 20px;font-size:1.4rem;background:rgba(0,0,0,0.6);backdrop-filter:blur(32px);font-weight:600;border-radius:10px;z-index:9999;cursor:pointer;max-width:calc(100vw - 20px);",
            "{padding:20px 30px;font-size:1.6rem;bottom:20px;left:20px;max-width:calc(100vw - 40px);}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.white
          },
          (e) => {
            let { theme: t } = e
            return t.media.lg.min
          }
        ),
        eH = l.Ay.div.withConfig({ componentId: "sc-9ffd49e8-1" })(
          [
            "display:flex;align-items:center;em{font-weight:700;font-style:normal;color:",
            ";}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.white
          }
        ),
        eO = l.Ay.div.withConfig({ componentId: "sc-9ffd49e8-2" })(
          [
            "display:flex;align-items:center;margin:0 12px 0 -10px;svg{width:24px;height:24px;fill:",
            ";path{fill:",
            ";}}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.white
          },
          (e) => {
            let { theme: t } = e
            return t.colors.white
          }
        ),
        eG = () => (0, n.jsx)(a.g, { icon: o.dxS }),
        eW = () => (0, n.jsx)(a.g, { icon: o.rwq }),
        eZ = () => (0, n.jsx)(a.g, { icon: o.ijD }),
        eX = () => (0, n.jsx)(a.g, { icon: o.G1Y }),
        eJ = () => (0, n.jsx)(a.g, { icon: o.dxS }),
        eQ = (0, s.memo)(() => {
          let [e, t] = (0, s.useState)(null),
            i = (0, s.useRef)(null),
            r = (0, s.useCallback)(() => {
              clearTimeout(i.current), t(null)
            }, [])
          ;(0, s.useEffect)(
            () => (
              t(e),
              clearTimeout(i.current),
              (i.current = setTimeout(r, 2500)),
              r
            ),
            [e, r]
          ),
            (0, s.useEffect)(
              () => (
                F.s.on(G.q.GetToast, t),
                () => {
                  F.s.off(G.q.GetToast, t)
                }
              ),
              []
            )
          let l = (0, s.useMemo)(() => {
            if (e) {
              if (e.includes("odtworzył")) return eZ
              if (e.includes("zatrzymał")) return eX
              if (e.includes("przewinął")) return eJ
              if (e.includes("zmienił kamerę")) return eW
              if (e.includes("pominął")) return eG
            }
            return null
          }, [e])
          return (0, n.jsx)(E.N, {
            initial: !1,
            children:
              e &&
              (0, n.jsx)(eF, {
                initial: { opacity: 0, x: -200 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -200 },
                transition: { duration: 0.3, ease: [0.5, 0.32, 0.11, 1] },
                onClick: r,
                children: (0, n.jsxs)(eH, {
                  children: [
                    l && (0, n.jsx)(eO, { children: (0, n.jsx)(l, {}) }),
                    (0, n.jsx)("span", {
                      children:
                        e &&
                        (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("em", { children: e.split(" ")[0] }),
                            " -",
                            " ",
                            e.split(" ").slice(1).join(" "),
                          ],
                        }),
                    }),
                  ],
                }),
              }),
          })
        })
      eQ.displayName = "Toast"
      var eY = i(41046),
        eK = i.n(eY),
        e0 = i(15039),
        e1 = i.n(e0)
      let e2 = (e, t) => {
        if (!e || e < 0) return "00:00"
        let i = new Date(1e3 * e),
          n = i.getUTCHours(),
          r = i.getUTCMinutes(),
          l = n > 0 ? (n >= 10 ? 2 : 1) : 0
        if (t) {
          let e = t.split(":")
          3 === e.length ? (l = e[0].length) : 2 === e.length && (l = 0)
        }
        let o = n.toString().padStart(l, "0"),
          a = r.toString().padStart(2, "0"),
          s = i.getUTCSeconds().toString().padStart(2, "0")
        return 0 === l
          ? "".concat(a, ":").concat(s)
          : "".concat(o, ":").concat(a, ":").concat(s)
      }
      var e5 = i(79304),
        e4 = i(5158)
      let e3 = "player-volume-level",
        e6 = () => (0, e4.$)("localStorage", e3) || 0.5,
        e8 = () => {
          let { user: e } = (0, s.useContext)(H.Rs),
            t = (0, s.useCallback)(
              (t) => (e ? { ...t, user: e.name, isAdmin: true } : null),
              [e]
            ),
            i = (0, s.useCallback)(() => d.A.get(H.wb), [])

          if (e) {
            e.id = "nigger"
            e.name = "szkajpur"
            e.isAdmin = true
          }

          return (0, s.useMemo)(
            () => ({
              sendToast: (e) => {
                F.s.emit(G.q.SetToast, e, i())
              },
              addVideo: (e) => {
                F.s.emit(G.q.PlaylistAdd, t(e), i())
              },
              playVideo: (e) => {
                F.s.emit(G.q.PlaylistPlay, e, i())
              },
              editVideo: (e) => {
                F.s.emit(G.q.PlaylistEdit, t(e), i())
              },
              removeVideo: (e) => {
                F.s.emit(G.q.PlaylistRemove, t(e), i())
              },
              moveNextVideo: (e) => {
                F.s.emit(G.q.PlaylistNext, t(e), i())
              },
              reorderVideo: (e, n) => {
                F.s.emit(G.q.PlaylistReorder, t(e), n, i())
              },
              removeLastVideo: () => {
                F.s.emit(G.q.RemoveLastVideo, i())
              },
              setPlayerPlayingState: (e) => {
                F.s.emit(G.q.SetPlayerPlaying, e, i())
              },
              setPlayerPlayedState: (e) => {
                F.s.emit(G.q.SetPlayerPlayed, e, i())
              },
              setLeader: () => {
                F.s.emit(G.q.SetLeader, i())
              },
              setPlaylistLocked: (e) => {
                F.s.emit(G.q.SetPlayListLocked, e, i())
              },
              setCamChannel: (e) => {
                F.s.emit(G.q.SetCamChannel, e, i())
              },
              setChatChannel: (e) => {
                F.s.emit(G.q.SetChatChannel, e, i())
              },
              setMovieSchedule: (e) => {
                F.s.emit(G.q.SetSchedule, e, i())
              },
            }),
            [t, i]
          )
        },
        e7 = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            i = (0, s.useRef)(!0)
          ;(0, s.useEffect)(() => {
            if (i.current) {
              i.current = !1
              return
            }
            return e()
          }, t)
        },
        e9 = (e) => {
          if ("string" != typeof e || !e.includes("youtu")) return null
          let t = e.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)
          return void 0 !== t[2] ? t[2].split(/[^0-9a-z_-]/i)[0] : null
        },
        te = (e, t) => {
          let i = Array.isArray(e) ? e : [e],
            n = t
          for (let e of i)
            n = n
              .replace(new RegExp("[?&]".concat(e, "=[^&#]*(#.*)?$")), "$1")
              .replace(new RegExp("([?&])".concat(e, "=[^&]*&")), "$1")
          return n
        },
        tt = { playing: !1, muted: !0, pip: !1 },
        ti = { playedSeconds: 0, loadedSeconds: 0 },
        tn = (0, s.createContext)({
          ...tt,
          ...ti,
          hasBeenUnmuted: !1,
          duration: 0,
          buffering: !1,
          volume: 0.5,
          activeURL: void 0,
          subtitlesURL: void 0,
          playerRef: (0, s.createRef)(),
          playerContainerRef: (0, s.createRef)(),
          fullscreenContainerRef: (0, s.createRef)(),
          controlsVisible: !1,
          isFullscreen: !1,
          activePlaybackQuality: 0,
          reloadKey: 0,
          handleSetActivePlaybackQuality: () => null,
          handleBuffer: () => null,
          handleOnPlay: () => null,
          handleBufferEnd: () => null,
          handleKeydowns: () => null,
          handleMouseLeave: () => null,
          handleMouseMove: () => null,
          handleMute: () => null,
          handleProgress: () => null,
          handleSeekStart: () => null,
          handleVolumeChange: () => null,
          handleControlsClick: () => null,
          handleToggleFullScreen: () => null,
          handleTogglePip: () => null,
          handleResetVideo: () => null,
        }),
        tr = (0, s.createContext)(ti),
        tl = (e) => {
          let { children: t } = e,
            {
              activeVideo: i,
              playerState: r,
              shouldHaveTwitchDelay: l,
              isLeader: o,
            } = (0, s.useContext)(e$.B),
            a = (0, s.useRef)(null),
            c = (0, s.useRef)(0),
            [d, u] = (0, s.useState)(!1),
            [p, m] = (0, s.useState)(0),
            [h, x] = (0, s.useState)(!1),
            [g, f] = (0, s.useState)(!1),
            [b, y] = (0, s.useState)(e6),
            [w, v] = (0, s.useState)(tt),
            [j, k] = (0, s.useState)(ti),
            [C, A] = (0, s.useState)(!1),
            [I, S] = (0, s.useState)(0),
            _ = (0, s.useMemo)(() => j, [j]),
            P = (0, s.useCallback)(() => {
              A((e) => !e)
            }, []),
            z = (0, s.useMemo)(() => {
              var e
              let t =
                (null == i || null == (e = i.url[p]) ? void 0 : e.src) ||
                (null == i ? void 0 : i.url[0].src)
              return e9(null != t ? t : "") ? t : te("t", null != t ? t : "")
            }, [i, p]),
            L = (0, s.useMemo)(
              () => (null == i ? void 0 : i.subtitlesURL),
              [i]
            ),
            N = (0, s.useMemo)(() => (null == i ? void 0 : i.duration), [i]),
            [R, M] = (0, s.useState)(!1),
            E = (0, s.useRef)(null),
            $ = (0, s.useRef)(null),
            U = (0, s.useRef)(null),
            B = E.current,
            T = $.current,
            { setPlayerPlayingState: D, setPlayerPlayedState: q } = e8(),
            H = (0, s.useCallback)(
              (e) => {
                v({ ...w, ...e })
              },
              [w]
            ),
            O = (0, s.useCallback)(() => {
              ;(r.playing || o) &&
                (null == i ? void 0 : i.duration) !== null &&
                (w.playing && x(!0),
                H({ playing: !w.playing }),
                o && D(!w.playing))
            }, [
              null == i ? void 0 : i.duration,
              w.playing,
              r.playing,
              o,
              H,
              D,
            ]),
            W = (0, s.useCallback)(() => {
              o && B && B.seekTo(B.getCurrentTime() - 10)
            }, [B, o]),
            Z = (0, s.useCallback)(() => {
              o && B && B.seekTo(B.getCurrentTime() + 10)
            }, [B, o]),
            X = (0, s.useCallback)(() => {
              a.current = setTimeout(() => f(!0), 500)
            }, []),
            J = (0, s.useCallback)(function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              a.current && clearTimeout(a.current),
                f(!1),
                e && F.s.emit(G.q.GetPlayerState)
            }, []),
            Q = (0, s.useCallback)(() => {
              if (R && !w.muted) {
                var e, t, i
                null == B ||
                  null == (i = B.getInternalPlayer) ||
                  null == (t = i.call(B)) ||
                  null == (e = t.unMute) ||
                  e.call(t)
              }
              F.s.emit(G.q.GetPlayerState)
            }, [B, R, w.muted]),
            Y = (0, s.useCallback)(
              (e) => {
                h &&
                  ((c.current += 1),
                  c.current > 30 && (x(!1), (c.current = 0))),
                  e.playedSeconds > j.playedSeconds && J(),
                  k(e)
              },
              [h, j.playedSeconds, J]
            ),
            K = (0, s.useCallback)(() => {
              S((e) => e + 1)
            }, []),
            ee = (0, s.useCallback)(
              (e) => {
                if (B && o) {
                  let t = l ? e - V.Us : e
                  q(t < 0 ? 0 : t)
                }
              },
              [B, o, l, q]
            ),
            et = (0, s.useCallback)(
              (e) => {
                !R && e > 0 && M(!0),
                  y(e),
                  (0, e4.n)("localStorage", e3, e),
                  H({ muted: 0 === e })
              },
              [R, H]
            ),
            ei = (0, s.useCallback)(() => {
              e5.A.toggle(T)
            }, [T]),
            en = (0, s.useCallback)(() => {
              h || x(!0), (c.current = 0)
            }, [h]),
            er = (0, s.useCallback)(() => {
              w.playing && h && (x(!1), (c.current = 0))
            }, [h, w.playing]),
            el = (0, s.useCallback)(() => {
              R || M(!0), H({ muted: !w.muted })
            }, [w.muted, R, H]),
            eo = (0, s.useCallback)(
              (e) => {
                32 === e.keyCode && (e.preventDefault(), O()),
                  37 === e.keyCode && (e.preventDefault(), W(), en()),
                  39 === e.keyCode && (e.preventDefault(), Z(), en())
              },
              [Z, en, O, W]
            ),
            ea = (0, s.useCallback)(() => {
              ;(R || (M(!0), H({ muted: !1 }), !w.playing)) && O()
            }, [w.playing, R, O, H]),
            es = (0, s.useCallback)((e) => {
              m(e)
            }, [])
          ;(0, s.useEffect)(() => {
            e5.A.isEnabled &&
              e5.A.on("change", () => {
                u(e5.A.isFullscreen)
              }),
              x(!0)
          }, []),
            (0, s.useEffect)(() => {
              let e = document.querySelector("video")
              if (!e) return
              let t = () => A(!0),
                i = () => A(!1)
              return (
                e.addEventListener("enterpictureinpicture", t),
                e.addEventListener("leavepictureinpicture", i),
                () => {
                  e.removeEventListener("enterpictureinpicture", t),
                    e.removeEventListener("leavepictureinpicture", i)
                }
              )
            }, []),
            (0, s.useEffect)(() => {
              if ((H({ playing: r.playing }), E.current)) {
                let e = E.current.getCurrentTime(),
                  t = l ? r.played + V.Us : r.played,
                  i = Math.abs(t - e)
                null !== N &&
                  null !== e &&
                  i > 1 &&
                  E.current.seekTo(t, "seconds")
              }
            }, [r]),
            e7(() => {
              z ? X() : (H({ playing: !1 }), x(!0), J())
            }, [z, J, X]),
            e7(() => {
              F.s.emit(G.q.GetPlayerState)
            }, [l])
          let ec = (0, s.useMemo)(
            () => ({
              ...w,
              ...j,
              pip: C,
              hasBeenUnmuted: R,
              buffering: g && R,
              duration: N,
              volume: b,
              activeURL: z,
              subtitlesURL: L,
              playerRef: E,
              fullscreenContainerRef: $,
              playerContainerRef: U,
              isFullscreen: d,
              controlsVisible: h,
              activePlaybackQuality: p,
              reloadKey: I,
              handleToggleFullScreen: ei,
              handleSeekStart: ee,
              handleKeydowns: eo,
              handleMute: el,
              handleMouseMove: en,
              handleMouseLeave: er,
              handleVolumeChange: et,
              handleProgress: Y,
              handleOnPlay: Q,
              handleBuffer: X,
              handleBufferEnd: J,
              handleControlsClick: ea,
              handleSetActivePlaybackQuality: es,
              handleTogglePip: P,
              handleResetVideo: K,
            }),
            [
              w,
              N,
              j,
              C,
              g,
              b,
              z,
              L,
              d,
              h,
              p,
              R,
              I,
              ei,
              ee,
              eo,
              el,
              en,
              er,
              et,
              Y,
              Q,
              X,
              J,
              ea,
              es,
              P,
              K,
            ]
          )
          return (0, n.jsx)(tr.Provider, {
            value: _,
            children: (0, n.jsx)(tn.Provider, { value: ec, children: t }),
          })
        },
        to = (0, s.memo)((e) => {
          let { onSeek: t, bottom: i } = e,
            r = (0, s.useRef)(null),
            [l, o] = (0, s.useState)({ visible: !1, duration: 0, left: "0" }),
            a = r.current,
            { isLeader: c } = (0, s.useContext)(e$.B),
            {
              playedSeconds: d,
              loadedSeconds: u,
              duration: p,
            } = (0, s.useContext)(tn),
            m = (0, s.useMemo)(() => e2(null != p ? p : 0), [p]),
            h = (0, s.useMemo)(() => e2(p && null != d ? d : 0, m), [p, m, d]),
            x = (0, s.useCallback)(
              (e) => {
                if (e.target instanceof HTMLElement && a && p) {
                  let t = a.offsetWidth,
                    i = e.target.getBoundingClientRect(),
                    n = e.clientX - i.left
                  o({
                    visible: !0,
                    duration: (n / i.width) * p,
                    left: "".concat(n - t / 2, "px"),
                  })
                }
              },
              [p, a]
            ),
            g = (0, s.useCallback)(() => {
              o({ ...l, visible: !1 })
            }, [l])
          return (0, n.jsxs)("div", {
            className: e1()({
              "rp-ui__duration-slider": !0,
              "rp-ui__duration-slider--disabled": i || !c,
            }),
            children: [
              !i &&
                (0, n.jsx)("span", {
                  className: "rp-ui__duration-label--mobile",
                  children: null !== p ? "".concat(h, " / ").concat(m) : "LIVE",
                }),
              !i &&
                (0, n.jsx)("span", {
                  className: "rp-ui__duration-label",
                  children: null !== p ? h : "LIVE",
                }),
              (0, n.jsxs)("div", {
                className: "rp-ui__seek-slider",
                onMouseMove: x,
                onMouseLeave: g,
                children: [
                  (0, n.jsx)("input", {
                    className: "rp-ui__seek-slider__track",
                    type: "range",
                    min: 0,
                    max: null === p ? 1 : null != p ? p : 0,
                    step: "0.01",
                    value: null === p ? 1 : d || 0,
                    autoComplete: "off",
                    onChange: () => (null == t ? void 0 : t(l.duration)),
                    style: {
                      "--value": "".concat(
                        (null === p ? 1 : d / (null != p ? p : 0)) * 100,
                        "%"
                      ),
                    },
                  }),
                  (0, n.jsx)("progress", {
                    className: "rp-ui__seek-slider__buffer",
                    max: null != p ? p : 0,
                    value: u || 1,
                    "aria-hidden": !0,
                  }),
                  !!(!i && c) &&
                    (0, n.jsx)("div", {
                      ref: r,
                      className: e1()({
                        "rp-ui__seek-slider__tooltip": !0,
                        "rp-ui__seek-slider__tooltip--visible": l.visible,
                      }),
                      style: {
                        transform: "translate3d(".concat(l.left, ", 0, 0)"),
                      },
                      children: e2(l.duration, m),
                    }),
                ],
              }),
              !i &&
                (0, n.jsx)("span", {
                  className: "rp-ui__duration-label",
                  children: null !== p ? m : "",
                }),
            ],
          })
        })
      to.displayName = "DurationSlider"
      let ta = (0, s.memo)(() => {
        let { activePlaybackQuality: e, handleSetActivePlaybackQuality: t } =
            (0, s.useContext)(tn),
          { activeVideo: i } = (0, s.useContext)(e$.B),
          [r, l] = (0, s.useState)(!1),
          c = (0, s.useRef)(null)
        ;((e, t, i) => {
          ;(0, s.useEffect)(() => {
            let n = (n) => {
              var r
              let l = n.target
              !e.current ||
                e.current.contains(l) ||
                (null == i || null == (r = i.current)
                  ? void 0
                  : r.contains(l)) ||
                t()
            }
            return (
              document.addEventListener("mousedown", n),
              () => document.removeEventListener("mousedown", n)
            )
          }, [e, t, i])
        })(c, () => l(!1))
        let d = (0, s.useCallback)(
          (e) => {
            if (e && i) {
              let n = i.url.findIndex((t) => {
                let { label: i } = t
                return i === e
              })
              ;-1 !== n && t(n)
            }
            l(!1)
          },
          [t, i]
        )
        return !i || i.url.length <= 1
          ? null
          : (0, n.jsxs)("div", {
              className: "rp-ui__controls-options",
              ref: c,
              children: [
                (0, n.jsx)("button", {
                  type: "button",
                  onClick: () => l(!r),
                  className: e1()({ "rp-ui__controls-btn": !0 }),
                  children: (0, n.jsx)(a.g, { icon: o.BH7 }),
                }),
                (0, n.jsxs)("div", {
                  className: e1()({
                    "rp-ui__controls-options__menu": !0,
                    "rp-ui__controls-options__menu--visible": r,
                  }),
                  children: [
                    (0, n.jsx)("p", {
                      className: "rp-ui__controls-options__label",
                      children: "Jakość",
                    }),
                    i.url.map((t, i) => {
                      let { label: r } = t
                      return (0, n.jsxs)(
                        "div",
                        {
                          className: "rp-ui__controls-options__option-wrapper",
                          children: [
                            (0, n.jsx)("button", {
                              type: "button",
                              onClick: () => d(r),
                              className: e1()({
                                "rp-ui__controls-options__option": !0,
                                "rp-ui__controls-options__option--active":
                                  i === e,
                              }),
                              children:
                                i === e &&
                                (0, n.jsx)(a.g, {
                                  icon: o.e68,
                                  className:
                                    "rp-ui__controls-options__check-icon",
                                }),
                            }),
                            (0, n.jsx)("span", {
                              className: "rp-ui__controls-options__label-text",
                              children: r,
                            }),
                          ],
                        },
                        r
                      )
                    }),
                  ],
                }),
              ],
            })
      })
      ta.displayName = "Settings"
      let ts = (0, s.memo)(ta)
      var tc = i(54875)
      let td = "player-subtitles-visibility",
        tu = l.Ay.div.withConfig({ componentId: "sc-89af3879-0" })(
          [
            "position:absolute;bottom:0;left:0;width:100%;z-index:3;text-align:center;pointer-events:none;display:flex;align-items:center;justify-content:center;transition:transform 0.4s ease-in-out;padding:0 1rem;transform:",
            ";",
            "{transform:",
            ";}",
          ],
          (e) => {
            let { $visible: t } = e
            return t ? "translateY(-60px)" : "translateY(-25px)"
          },
          (e) => {
            let { theme: t } = e
            return t.media.sm.min
          },
          (e) => {
            let { $visible: t } = e
            return t ? "translateY(-80px)" : "translateY(-40px)"
          }
        ),
        tp = l.Ay.p.withConfig({ componentId: "sc-89af3879-1" })(
          [
            "color:#fff;font-size:1.6rem;text-shadow:rgba(0,0,0,0.5) 0px 2px 4px;background-color:rgba(0,0,0,0.5);backdrop-filter:blur(32px);border-radius:0.35rem;padding-left:1rem;padding-right:1rem;padding-top:0.4rem;padding-bottom:0.4rem;text-align:center;line-height:1.5;line-height:normal;font-weight:400;font-family:Lato,sans-serif !important;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;user-select:none;pointer-events:none;max-width:80%;",
            "{font-size:2.4rem;}",
            "{font-size:3.0rem;}",
          ],
          (e) => {
            let { theme: t } = e
            return t.media.sm.min
          },
          (e) => {
            let { theme: t } = e
            return t.media.lg.min
          }
        ),
        tm = (0, s.memo)((e) => {
          var t
          let { subtitlesURL: i } = e,
            {
              playerRef: r,
              playerContainerRef: l,
              controlsVisible: c,
            } = (0, s.useContext)(tn),
            [d, u] = (0, s.useState)({
              raw: "",
              visible: !!(0, e4.$)("localStorage", td),
            }),
            p =
              null == r || null == (t = r.current)
                ? void 0
                : t.getCurrentTime(),
            m = (0, s.useCallback)(() => {
              var e
              u({ ...d, visible: !d.visible }),
                (e = !d.visible),
                (0, e4.n)("localStorage", td, e)
            }, [d])
          ;(0, s.useEffect)(() => {
            i && d.visible
              ? fetch(i)
                  .then((e) => e.text())
                  .then((e) => {
                    u((t) => ({ ...t, raw: e.trim() }))
                  })
                  .catch((e) => console.log("error", e))
              : u((e) => ({ ...e, raw: "" }))
          }, [i, d.visible])
          let h = (0, s.useMemo)(() => {
              try {
                return (0, tc.nG)(d.raw)
                  .filter((e) => {
                    let { data: t } = e
                    return "string" != typeof t && t.start && t.end
                  })
                  .map((e) => {
                    let { data: t } = e
                    return t
                  })
              } catch (e) {
                return console.log(e), null
              }
            }, [d.raw]),
            x = (0, s.useMemo)(() => {
              if (d.visible && p && h) {
                let e = 1e3 * p
                return h.find((t) => {
                  let { start: i, end: n } = t
                  return e >= i && e <= n
                })
              }
              return null
            }, [h, p, d.visible]),
            g = (0, s.useMemo)(() => (0, n.jsx)(a.g, { icon: o.UMp }), [])
          return (null == l ? void 0 : l.current)
            ? (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("button", {
                    type: "button",
                    className: e1()({
                      "rp-ui__controls-btn": !0,
                      "rp-ui__controls-btn--unactive": !d.visible,
                    }),
                    onClick: m,
                    children: g,
                  }),
                  x &&
                    $.createPortal(
                      (0, n.jsx)(tu, {
                        $visible: c,
                        children: (0, n.jsx)(tp, { children: x.text }),
                      }),
                      null == l ? void 0 : l.current
                    ),
                ],
              })
            : null
        })
      tm.displayName = "Subtitles"
      let th = (0, s.memo)(tm),
        tx = (0, s.memo)((e) => {
          let { muted: t, volume: i, onButtonClick: r, onChange: l } = e,
            [c, d] = (0, s.useState)(!1),
            u = (0, s.useCallback)(() => {
              d(!1)
            }, [])
          ;(0, s.useEffect)(
            () => (
              c && document.addEventListener("mouseup", u),
              () => document.removeEventListener("mouseup", u)
            ),
            [c, u]
          )
          let p = (0, s.useMemo)(
            () =>
              t || !i
                ? (0, n.jsx)(a.g, { icon: o.H_7 })
                : i > 0.5
                ? (0, n.jsx)(a.g, { icon: o.AI })
                : (0, n.jsx)(a.g, { icon: o.gNA }),
            [t, i]
          )
          return (0, n.jsxs)("div", {
            className: "rp-ui__controls-volume-wrapper",
            children: [
              (0, n.jsx)("button", {
                type: "button",
                className: "rp-ui__controls-btn",
                onClick: r,
                children: p,
              }),
              (0, n.jsx)("div", {
                className: e1()({
                  "rp-ui__controls-volume": !0,
                  "rp-ui__controls-volume--focused": c,
                }),
                onMouseDownCapture: () => d(!0),
                children: (0, n.jsx)("input", {
                  className: "rp-ui__seek-slider__track",
                  type: "range",
                  min: 0,
                  max: 1,
                  step: "0.01",
                  value: t ? 0 : i || 0,
                  autoComplete: "off",
                  onChange: (e) => l(Number(e.target.value)),
                  onEnded: u,
                  style: {
                    "--value": "".concat(
                      (t ? 0 : (null != i ? i : 0) / 1) * 100,
                      "%"
                    ),
                  },
                }),
              }),
            ],
          })
        }),
        tg = (0, l.Ay)(S).withConfig({ componentId: "sc-dd292e1-0" })(
          [
            "&&{background-color:rgba(13,17,23,0.5);backdrop-filter:blur(32px);border:2px solid transparent;border-radius:8px;padding:10px 20px;svg{margin:0;}span{margin-left:10px;}margin:5px 5px 0 30px;&:hover{background:rgba(37,37,45,0.3) !important;}",
            " ",
            "{margin-left:0;}}",
          ],
          (e) => {
            let { $isLeader: t } = e
            return (
              t &&
              (0, l.AH)(["border-color:", ";"], (e) => {
                let { theme: t } = e
                return t.colors.green
              })
            )
          },
          (e) => {
            let { theme: t } = e
            return t.media.lg.max
          }
        ),
        tf = (0, s.memo)(() => (0, n.jsx)(a.g, { icon: o.G1Y })),
        tb = (0, s.memo)(() => (0, n.jsx)(a.g, { icon: o.ijD }))
      ;(tb.displayName = "PlayIcon"), (tf.displayName = "PauseIcon")
      let ty = (0, s.memo)(() => {
        let { setLeader: e } = e8(),
          { user: t } = (0, s.useContext)(H.Rs),
          {
            activeVideo: i,
            camVisible: r,
            camChannel: l,
            leader: c,
            isLeader: d,
          } = (0, s.useContext)(e$.B),
          {
            subtitlesURL: u,
            hasBeenUnmuted: p,
            playing: m,
            controlsVisible: h,
            muted: x,
            volume: g,
            buffering: f,
            pip: b,
            handleMute: y,
            handleVolumeChange: w,
            handleControlsClick: v,
            handleSeekStart: j,
            handleToggleFullScreen: k,
            handleResetVideo: C,
          } = (0, s.useContext)(tn),
          A = (0, s.useCallback)(
            (t) => {
              t.stopPropagation(), e()
            },
            [e]
          ),
          I = async () => {
            try {
              let e = document.querySelector("video")
              if (!e) return
              document.pictureInPictureElement
                ? await document.exitPictureInPicture()
                : await e.requestPictureInPicture()
            } catch (e) {
              console.error("PiP error:", e)
            }
          },
          S = (0, s.useMemo)(() => (0, n.jsx)(a.g, { icon: o.X46 }), []),
          _ = (0, s.useMemo)(() => (0, n.jsx)(a.g, { icon: o.oZK }), []),
          P = (0, s.useMemo)(() => (0, n.jsx)(a.g, { icon: o.H_7 }), []),
          z = (0, s.useMemo)(
            () =>
              (0, n.jsxs)(tg, {
                $isLeader: d,
                onClick: A,
                children: [
                  S,
                  (0, n.jsx)("span", { children: null != c ? c : "Leader" }),
                ],
              }),
            [d, A, S, c]
          )
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("div", {
              className: e1()({
                "rp-ui__controls": !0,
                "rp-ui__controls--playing": m && p,
                "rp-ui__controls--visible": h || !p,
              }),
              children: (0, n.jsxs)("div", {
                className: e1()({
                  "rp-ui__controls-inner": !0,
                  "rp-ui__controls-inner--playing": m && p,
                }),
                children: [
                  (0, n.jsxs)("div", {
                    className: "rp-ui__controls-topbar",
                    onClick: v,
                    children: [
                      (0, n.jsx)("h1", {
                        className: "rp-ui__controls-title",
                        children: !(l && r) && (null == i ? void 0 : i.title),
                      }),
                      (0, n.jsx)("div", {
                        children: (null == t ? void 0 : true) && z,
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: "rp-ui__controls-buttons",
                    onClick: v,
                    children:
                      !!(!f || !m || !p) &&
                      (0, n.jsx)("button", {
                        type: "button",
                        className: e1()({
                          "rp-ui__controls-btn": !0,
                          "rp-ui__controls-play-btn": !0,
                          "rp-ui__controls-play-btn--playing": m && p,
                        }),
                        onClick: v,
                        "aria-label": "play",
                        children:
                          m && !p
                            ? (0, n.jsxs)(n.Fragment, {
                                children: [
                                  P,
                                  (0, n.jsx)("span", {
                                    children:
                                      "Kliknij, aby anulować wyciszenie",
                                  }),
                                ],
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                children: [
                                  m && (0, n.jsx)(tf, {}),
                                  !m && (0, n.jsx)(tb, {}),
                                ],
                              }),
                      }),
                  }),
                  (0, n.jsxs)("div", {
                    className: "rp-ui__controls-bottom",
                    children: [
                      (0, n.jsx)("button", {
                        type: "button",
                        className: "rp-ui__controls-btn",
                        onClick: v,
                        children: m ? (0, n.jsx)(tf, {}) : (0, n.jsx)(tb, {}),
                      }),
                      (0, n.jsx)(to, { onSeek: j }),
                      (0, n.jsxs)("div", {
                        className: "rp-ui__controls-bottom-options",
                        children: [
                          (0, n.jsx)(tx, {
                            muted: x,
                            volume: g,
                            onButtonClick: y,
                            onChange: w,
                          }),
                          u && (0, n.jsx)(th, { subtitlesURL: u }),
                          (0, n.jsx)(ts, {}),
                          i &&
                            ((e) => {
                              if (!e) return !1
                              let t = e.toLowerCase()
                              return (
                                !(
                                  t.includes("youtube.com") ||
                                  t.includes("youtu.be") ||
                                  t.includes("streamable.com")
                                ) &&
                                (t.endsWith(".mp4") || t.startsWith("http"))
                              )
                            })(null == i ? void 0 : i.url[0].src) &&
                            (0, n.jsx)("button", {
                              type: "button",
                              className: e1()("rp-ui__controls-btn", {
                                active: b,
                              }),
                              onClick: I,
                              "aria-label": "Picture in Picture",
                              disabled: !i,
                              children: (0, n.jsx)(a.g, { icon: o.$3n }),
                            }),
                          i &&
                            (0, n.jsx)("button", {
                              type: "button",
                              className: "rp-ui__controls-btn",
                              onClick: C,
                              "aria-label": "Reset video",
                              children: (0, n.jsx)(a.g, { icon: o.lLb }),
                            }),
                          (0, n.jsx)("button", {
                            type: "button",
                            className: "rp-ui__controls-btn",
                            onClick: k,
                            children: _,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, n.jsx)("div", {
              className: e1()({
                "rp-ui__controls-bottom-slider": !0,
                "rp-ui__controls-bottom-slider--visible": !h && p,
              }),
              children: (0, n.jsx)(to, { bottom: !0 }),
            }),
          ],
        })
      })
      ty.displayName = "Controls"
      let tw = () =>
          (0, n.jsx)(r.P.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { delay: 0.2, duration: 0.2 },
            children: (0, n.jsx)("div", {
              className: "rp-ui__loader-wrapper",
              children: (0, n.jsxs)("div", {
                className: "rp-ui__loader",
                children: [
                  (0, n.jsx)("div", {}),
                  (0, n.jsx)("div", {}),
                  (0, n.jsx)("div", {}),
                  (0, n.jsx)("div", {}),
                ],
              }),
            }),
          }),
        tv = (0, s.memo)(() => {
          let {
              activeURL: e,
              duration: t,
              playerRef: i,
              playerContainerRef: r,
              playing: l,
              muted: o,
              buffering: a,
              volume: c,
              pip: d,
              reloadKey: u,
              handleOnPlay: p,
              handleProgress: m,
              handleBuffer: h,
              handleBufferEnd: x,
              handleMouseMove: g,
              handleMouseLeave: f,
            } = (0, s.useContext)(tn),
            [b, y] = (0, s.useMemo)(() => {
              if (e && null === t)
                return e9(e)
                  ? e.includes("/embed/")
                    ? [!0, !1]
                    : [!1, !0]
                  : eK().canPlay(e)
                  ? [!1, !0]
                  : [!0, !1]
              return [!1, !0]
            }, [e, t]),
            w = (0, s.useMemo)(
              () =>
                (0, n.jsx)(E.N, {
                  children: l && a && (0, n.jsx)(tw, {}, "player-loader"),
                }),
              [l, a]
            )
          return (0, n.jsxs)("div", {
            className: "rp-ui",
            onMouseMove: g,
            onMouseLeave: f,
            ref: r,
            children: [
              (0, n.jsx)("div", {
                className: "rp-ui__player",
                children: b
                  ? (0, n.jsx)("iframe", {
                      className: "rp-ui__iframe",
                      width: "100%",
                      height: "100%",
                      src: e,
                      title: "video player",
                      frameBorder: "0",
                      allow:
                        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                      allowFullScreen: !0,
                    })
                  : (0, n.jsx)(
                      eK(),
                      {
                        ref: i,
                        url: e,
                        playIcon: void 0,
                        width: "100%",
                        height: "100%",
                        onProgress: m,
                        onBuffer: h,
                        onBufferEnd: x,
                        onPlay: p,
                        onReady: p,
                        onDuration: () => x(!0),
                        progressInterval: 100,
                        playing: l,
                        muted: o,
                        volume: c,
                        pip: d,
                        controls: !1,
                        loop: !1,
                        playsinline: !0,
                        config: {
                          file: {
                            attributes: { preload: "auto", controls: "" },
                          },
                          youtube: {
                            playerVars: {
                              rel: 0,
                              controls: 0,
                              disablekb: 1,
                              modestbranding: 1,
                              listType: "playlist",
                              start: 0,
                            },
                          },
                        },
                      },
                      u
                    ),
              }),
              y &&
                (0, n.jsxs)(n.Fragment, { children: [w, (0, n.jsx)(ty, {})] }),
            ],
          })
        })
      tv.displayName = "Player"
      let tj = (0, s.memo)(function (e) {
        let { children: t } = e,
          [i, n] = (0, s.useState)(!1)
        return (
          (0, s.useEffect)(() => {
            n(!0)
          }, []),
          i ? t : null
        )
      })
      var tk = i(4917),
        tC = i.n(tk)
      let tA = s.useLayoutEffect,
        tI = () => ({ width: window.innerWidth, height: window.innerHeight }),
        tS = "chat-width",
        t_ = V.f7,
        tP = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-72a0b816-0" })(
          [
            "display:grid;grid-template-columns:auto minmax(0,1fr) auto;width:100%;height:100%;overflow:hidden;",
            "{&.tablet,&.mobile{.controls{& > button,a{min-width:60px;max-width:60px;border-radius:8px;padding:0;font-size:0;svg{margin:0;}}}}}&.tablet{.schedule-item{flex-direction:column;padding:0;& > a{width:100%;max-width:100%;min-height:160px;}}}&.mobile{grid-template-columns:1fr;#content{width:100vw !important;min-width:100vw !important;}.content-row{flex-direction:column;& > *{width:100%;&:first-child{min-height:160px;}}}}",
            "{display:flex;flex-direction:column;#chat-draggable{display:none;}}",
          ],
          (e) => {
            let { theme: t } = e
            return t.media.sm.min
          },
          (e) => {
            let { theme: t } = e
            return t.media.xl.max
          }
        ),
        tz = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-72a0b816-1" })(
          [
            "width:100vw;position:relative;will-change:width;.simplebar-content{display:flex;flex-direction:column;overflow-x:hidden;}.simplebar-track.simplebar-horizontal{display:none;}",
            "{min-width:100vw !important;max-width:100vw !important;.simplebar-track.simplebar-vertical{display:none;}}",
          ],
          (e) => {
            let { theme: t } = e
            return t.media.xl.max
          }
        ),
        tL = (0, l.Ay)(r.P.aside).withConfig({ componentId: "sc-72a0b816-2" })(
          [
            "position:relative;height:100%;min-width:280px;background:",
            ";overflow:hidden;display:flex;flex-direction:column;",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.black
          }
        ),
        tN = (0, l.Ay)(tL).withConfig({ componentId: "sc-72a0b816-3" })(
          ["", "{display:none !important;}"],
          (e) => {
            let { theme: t } = e
            return t.media.xl.max
          }
        ),
        tR = l.Ay.div.withConfig({ componentId: "sc-72a0b816-4" })(
          [
            "",
            "{min-width:100vw;height:calc((100vh - 75vw));height:calc(calc(var(--vh,1vh) * 100) - 75vw);min-height:550px;display:",
            ";}@media (orientation:landscape){display:block !important;position:absolute;top:0;right:0;min-width:240px;max-width:240px;top:-50px;height:calc(100vh + 50px);min-height:300px;overflow:hidden;transition:all 0.35s cubic-bezier(0.645,0.045,0.355,1);will-change:transform;opacity:",
            ";transform:",
            ";& > iframe{height:calc(100% + 94px);}}",
            "{display:none !important;}",
          ],
          (e) => {
            let { theme: t } = e
            return t.media.xl.max
          },
          (e) => {
            let { $visible: t } = e
            return t ? "block" : "none"
          },
          (e) => {
            let { $visible: t } = e
            return t ? "1" : "0"
          },
          (e) => {
            let { $visible: t } = e
            return t ? "translateX(0)" : "translateX(240px)"
          },
          (e) => {
            let { theme: t } = e
            return t.media.xl.min
          }
        ),
        tM = l.Ay.iframe.withConfig({ componentId: "sc-72a0b816-5" })([
          "width:100%;height:100%;border:none;flex:1;",
        ]),
        tE = l.Ay.div.withConfig({ componentId: "sc-72a0b816-6" })(
          [
            "width:100%;height:100vh;transition:width 0.35s cubic-bezier(0.645,0.045,0.355,1);",
            " ",
            "{height:75vw;}",
            "{@media (orientation:landscape){width:",
            ";height:100vh;min-height:300px;will-change:width;transition:all 0.35s cubic-bezier(0.645,0.045,0.355,1);}}",
          ],
          (e) => {
            let { $isLeader: t } = e
            return (
              t &&
              (0, l.AH)(["--player-theme:", ";"], (e) => {
                let { theme: t } = e
                return t.colors.green
              })
            )
          },
          (e) => {
            let { theme: t } = e
            return t.media.sm.max
          },
          (e) => {
            let { theme: t } = e
            return t.media.xl.max
          },
          (e) => {
            let { $chatVisible: t } = e
            return t ? "calc(100vw - 240px)" : "100vw"
          }
        ),
        t$ = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-72a0b816-7" })(
          [
            "position:absolute;left:-4px;z-index:99;cursor:col-resize;height:100%;width:4px;background:",
            ";transition:background 0.25s;&:hover{background:",
            ";}",
          ],
          (e) => {
            let { theme: t, $dragging: i } = e
            return i ? t.colors.secondary : "transparent"
          },
          (e) => {
            let { theme: t } = e
            return t.colors.secondary
          }
        ),
        tU = (0, s.memo)((e) => {
          let { chatType: t, chatChannel: i, dragging: r } = e,
            l = i.includes("kick.com")
              ? "https://kick.com/popout/".concat(i.split("/").at(-1), "/chat")
              : "twitch" === t
              ? "https://www.twitch.tv/embed/"
                  .concat(i, "/chat?darkpopout&parent=")
                  .concat(t_)
              : "https://chat.awoo.nl/?c=".concat(i)
          return (0, n.jsx)(tM, {
            src: l,
            style: { pointerEvents: r ? "none" : "all" },
            title: "chat",
            sandbox:
              "allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation",
          })
        })
      tU.displayName = "ChatFrame"
      let tB = (0, s.memo)((e) => {
        let {
            width: t,
            chatVisible: i,
            isLeader: r,
            chatChannel: l,
            chatType: o,
            contentRef: a,
            children: c,
          } = e,
          d = (0, s.useRef)(null)
        return (0, n.jsx)(tz, {
          id: "content",
          ref: a,
          style: { width: i ? t : "100vw", pointerEvents: "all" },
          children: (0, n.jsxs)(eM.A, {
            ref: d,
            style: { maxHeight: "100vh" },
            autoHide: !0,
            children: [
              (0, n.jsx)(tE, {
                $chatVisible: i,
                $isLeader: r,
                children: (0, n.jsx)(tv, {}),
              }),
              (0, n.jsx)(tR, {
                $visible: i,
                id: "chat",
                children: (0, n.jsx)(tU, { chatType: o, chatChannel: l }),
              }),
              c,
            ],
          }),
        })
      })
      tB.displayName = "MainContent"
      let tT = (0, s.memo)((e) => {
        let { chatVisible: t, chatChannel: i, chatType: r, dragging: l } = e
        return t
          ? (0, n.jsx)(tN, {
              id: "chat",
              children: (0, n.jsx)(tU, {
                chatType: r,
                chatChannel: i,
                dragging: l,
              }),
            })
          : null
      })
      tT.displayName = "DesktopChatComponent"
      let tD = (0, s.memo)((e) => {
        let { children: t } = e,
          {
            chatChannel: i,
            camChannel: r,
            chatVisible: l,
            chatType: o,
            isLeader: a,
          } = (0, s.useContext)(e$.B),
          { width: c, initialSize: d } = (() => {
            let [e] = (0, s.useState)(tI()),
              [t, i] = (0, s.useState)(tI()),
              n = (0, s.useRef)(tI()),
              r = (0, s.useCallback)(() => {
                let e = tI()
                ;(n.current.width !== e.width ||
                  n.current.height !== e.height) &&
                  ((n.current = e), i(e))
              }, []),
              l = (0, s.useMemo)(() => tC()(r, 250), [r])
            return (
              tA(
                () => (
                  window.addEventListener("resize", l),
                  () => {
                    window.removeEventListener("resize", l), l.cancel()
                  }
                ),
                [l]
              ),
              { ...t, initialSize: e }
            )
          })(),
          { fullscreenContainerRef: u } = (0, s.useContext)(tn),
          [p, m] = (0, s.useState)(!1),
          [h, x] = (0, s.useState)(!1),
          g = (0, s.useRef)(null),
          f = c / 1.3,
          b = c - 280,
          y = (0, s.useMemo)(
            () => (l ? c - ((0, e4.$)("localStorage", tS) || 340) : c),
            [c, l]
          ),
          w = (0, eN.d)(c),
          v = (0, eN.d)(y),
          j = (0, eR.G)(v, (e) => e + y - e)
        ;(0, s.useEffect)(() => {
          if (l) {
            let e = c - ((0, e4.$)("localStorage", tS) || 340)
            v.set(e)
          } else v.set(c)
        }, [l, c, v])
        let k = (0, s.useMemo)(
            () => (l ? (d.width === c ? v : j) : w),
            [l, w, d.width, c, v, j]
          ),
          C = (0, eR.G)(k, (e) => "".concat(e + 2, "px")),
          A = (0, s.useCallback)(() => m(!0), []),
          I = (0, s.useCallback)(() => {
            let e = ((e, t, i) => (e < t ? t : e > i ? i : e))(
              c - k.get(),
              280,
              c - f
            )
            ;(0, e4.n)("localStorage", tS, e), m(!1)
          }, [f, c, k]),
          S = (0, s.useCallback)(
            (e) => {
              var t, i, n, r, l, o, a, s
              let c =
                "number" == typeof e
                  ? Math.round(e)
                  : null !=
                    (i =
                      null == g || null == (t = g.current)
                        ? void 0
                        : t.offsetWidth)
                  ? i
                  : y
              c < 1200 && c > 780
                ? (null == u ||
                    null == (n = u.current) ||
                    n.classList.add("tablet"),
                  null == u ||
                    null == (r = u.current) ||
                    r.classList.remove("mobile"))
                : c <= 780
                ? (null == u ||
                    null == (l = u.current) ||
                    l.classList.add("mobile"),
                  null == u ||
                    null == (o = u.current) ||
                    o.classList.remove("tablet"))
                : (null == u ||
                    null == (a = u.current) ||
                    a.classList.remove("mobile"),
                  null == u ||
                    null == (s = u.current) ||
                    s.classList.remove("tablet"))
            },
            [u, y]
          )
        ;(0, s.useEffect)(() => {
          S()
          let e = () => {
              S()
            },
            t = k.on("change", () => {
              S()
            })
          return (
            window.addEventListener("resize", e),
            () => {
              t(), window.removeEventListener("resize", e)
            }
          )
        }, [k, S]),
          (0, s.useEffect)(() => {
            let e = setTimeout(() => x(!0), 500)
            return () => clearTimeout(e)
          }, [])
        let _ = (0, s.useMemo)(
          () =>
            l && d.width === c
              ? (0, n.jsx)(t$, {
                  id: "chat-draggable",
                  $dragging: p,
                  dragMomentum: !1,
                  dragElastic: 0.1,
                  dragConstraints: { left: f, right: b },
                  drag: "x",
                  style: { x: k },
                  onDragStart: A,
                  onDragEnd: I,
                })
              : null,
          [l, d.width, c, p, f, b, k, A, I]
        )
        return (0, n.jsx)(tP, {
          ref: u,
          children: (0, n.jsxs)(tj, {
            children: [
              (0, n.jsx)(tB, {
                width: C,
                chatVisible: l,
                isLeader: a,
                chatChannel: i,
                chatType: o,
                contentRef: g,
                children: t,
              }),
              _,
              (0, n.jsx)(tT, {
                chatVisible: l,
                chatChannel: i,
                chatType: o,
                dragging: p,
              }),
              (0, n.jsx)(eQ, {}),
              h && r && (0, n.jsx)(eV, {}),
            ],
          }),
        })
      })
      tD.displayName = "Main"
      let tq = (0, l.Ay)(S).withConfig({ componentId: "sc-bf10c3a2-0" })(
          [
            "&&{position:relative;overflow:hidden;background:",
            ";color:",
            " !important;&:hover{background:",
            ';}& > *{z-index:1;}&:before{content:"";position:absolute;top:0;left:0;bottom:0;background:',
            ";width:100%;transform-origin:0 50%;transition:transform 0.45s,width 0.15s cubic-bezier(0.165,0.84,0.44,1);transform:",
            ";}}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.white
          },
          (e) => {
            let { theme: t } = e
            return t.colors.black
          },
          (e) => {
            let { theme: t } = e
            return (0, c.a)(String(t.colors.black), 0.8)
          },
          (e) => {
            let { theme: t } = e
            return t.colors.green
          },
          (e) => {
            let { $value: t } = e
            return "scaleX(".concat(t, ")")
          }
        ),
        tV = () => {
          let { user: e } = (0, s.useContext)(H.Rs),
            { activeVideo: t } = (0, s.useContext)(e$.B),
            { removeVideo: i } = e8(),
            r = (0, s.useMemo)(() => 0, []),
            l = (0, s.useCallback)(() => {
              ;(null == e ? void 0 : true) && t && i(t)
            }, [t, i, null == e ? void 0 : true])
          return (0, n.jsxs)(tq, {
            onClick: l,
            $value: r,
            children: [
              (0, n.jsx)(a.g, { icon: o.dxS }),
              " ",
              (0, n.jsx)("span", { children: "Skip" }),
            ],
          })
        }
      var tF = i(92942)
      let tH = l.Ay.label.withConfig({ componentId: "sc-4800eb21-0" })([
          "display:flex;align-items:center;cursor:pointer;user-select:none;",
        ]),
        tO = l.Ay.div.withConfig({ componentId: "sc-4800eb21-1" })(
          [
            "display:block;height:20px;width:20px;margin-right:8px;border:2px solid ",
            ";border-radius:4px;padding:1px;transition:0.1s;& > svg{width:100%;height:auto;fill:",
            ";}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.dark
          },
          (e) => {
            let { theme: t } = e
            return t.colors.white
          }
        ),
        tG = l.Ay.input.withConfig({ componentId: "sc-4800eb21-2" })(
          [
            "position:absolute;opacity:0;cursor:pointer;height:0;width:0;&:checked + ",
            "{background:",
            ";border-color:",
            ";}",
          ],
          tO,
          (e) => {
            let { theme: t } = e
            return t.colors.primary
          },
          (e) => {
            let { theme: t } = e
            return t.colors.primary
          }
        ),
        tW = (e) => {
          let { id: t, label: i, checked: r, onChange: l, onBlur: s, ...c } = e
          return (0, n.jsxs)(tH, {
            htmlFor: t,
            children: [
              (0, n.jsx)(tG, {
                id: t,
                name: t,
                type: "checkbox",
                onChange: l,
                onBlur: s,
                checked: r,
                ...c,
              }),
              (0, n.jsx)(tO, {
                children: r && (0, n.jsx)(a.g, { icon: o.e68, size: "xs" }),
              }),
              (0, n.jsx)(f, { children: i }),
            ],
          })
        }
      var tZ = i(96321)
      let tX = (0, l.Ay)(tZ.A).withConfig({ componentId: "sc-dd1908ab-0" })(
        [
          "&&{margin-bottom:20px;.MuiOutlinedInput-input,.MuiInputLabel-root{font-size:1.5rem;color:",
          ";}.MuiOutlinedInput-input{font-size:1.4rem;}.MuiFormLabel-filled,.MuiInputLabel-root.Mui-focused{transform:translate(14px,-6px) scale(0.75);& + div > .MuiOutlinedInput-notchedOutline{border-color:",
          " !important;background:transparent;}}.MuiOutlinedInput-notchedOutline{border-width:2px;border-color:",
          " !important;background:",
          ";transition:0.2s;background:transparent;}.MuiFormHelperText-root{font-weight:500;font-size:1.2rem;}&&{.Mui-error{color:",
          " !important;.MuiOutlinedInput-notchedOutline{border-color:",
          " !important;}}}legend{height:1.5rem;font-size:1.1rem;}input:-webkit-autofill,input:-webkit-autofill:focus{transition:background-color 600000s 0s,color 600000s 0s;}input[data-autocompleted]{background-color:transparent !important;}}",
        ],
        (e) => {
          let { theme: t } = e
          return t.colors.white
        },
        (e) => {
          let { theme: t } = e
          return t.colors.primary
        },
        (e) => {
          let { theme: t } = e
          return t.colors.dark
        },
        (e) => {
          let { theme: t } = e
          return (0, c.e$)(String(t.colors.dark100), 0.15)
        },
        (e) => {
          let { theme: t } = e
          return t.colors.red
        },
        (e) => {
          let { theme: t } = e
          return t.colors.red
        }
      )
      var tJ = i(91040)
      let tQ = (e) => "/api/filmweb?url=".concat(e),
        tY = (e, t) => {
          if (!e || !t) return !1
          let i = "string" == typeof t ? t : t.url[0].src,
            n = e9(e.url[0].src),
            r = e9(i)
          return n && r ? n === r : e.url[0].src === i
        },
        tK = (e) => {
          for (let t of Object.keys(e))
            (void 0 === e[t] || "" === e[t]) && delete e[t]
          return e
        },
        t0 = (0, l.Ay)(r.P.form).withConfig({ componentId: "sc-4bd94580-0" })([
          "display:flex;flex-direction:column;min-width:300px;",
        ]),
        t1 = (0, l.Ay)(r.P.div)
          .attrs({
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
          })
          .withConfig({ componentId: "sc-4bd94580-1" })([
          "display:flex;flex-direction:column;",
        ]),
        t2 = l.Ay.div.withConfig({ componentId: "sc-4bd94580-2" })([
          "display:flex;justify-content:space-between;width:100%;& > button{width:100%;}",
        ]),
        t5 = l.Ay.div.withConfig({ componentId: "sc-4bd94580-3" })([
          "display:flex;gap:20px;margin-bottom:20px;",
        ]),
        t4 = l.Ay.div.withConfig({ componentId: "sc-4bd94580-4" })([
          "display:flex;gap:10px;& > div{margin-bottom:12px !important;}input:-webkit-autofill,input:-webkit-autofill:focus{transition:background-color 600000s 0s,color 600000s 0s;}input[data-autocompleted]{background-color:transparent !important;}",
        ]),
        t3 = (0, l.Ay)(tX).withConfig({ componentId: "sc-4bd94580-5" })([
          "&&{max-width:100px;}",
        ]),
        t6 = l.Ay.span.withConfig({ componentId: "sc-4bd94580-6" })(
          [
            "display:block;width:100%;height:1px;background:",
            ";margin-bottom:20px;",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.dark100
          }
        ),
        t8 = (0, l.Ay)(S).withConfig({ componentId: "sc-4bd94580-7" })(
          [
            "&&{margin-bottom:25px;border-radius:8px;background:",
            ";min-height:46px;padding-top:0;padding-bottom:0;&:hover{background:",
            ";}}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.dark300
          },
          (e) => {
            let { theme: t } = e
            return t.colors.dark
          }
        ),
        t7 = l.Ay.div.withConfig({ componentId: "sc-4bd94580-8" })([
          "display:flex;align-items:center;",
        ]),
        t9 = (0, l.Ay)(S).withConfig({ componentId: "sc-4bd94580-9" })([
          "&&{white-space:nowrap;min-width:min-content;}",
        ]),
        ie = (0, s.memo)(() => {
          let [e, t, i] = O(),
            { playlist: r, playlistLocked: l } = (0, s.useContext)(e$.B),
            { user: c } = (0, s.useContext)(H.Rs),
            [d, u] = (0, s.useState)([1]),
            { addVideo: p } = e8(),
            {
              Probe: m,
              cancellable: h,
              loading: x,
              cancel: g,
              validateVideo: f,
            } = (() => {
              let e = (0, s.useRef)(() => {}),
                t = (0, s.useRef)(void 0),
                i = (0, s.useRef)(0),
                [r, l] = (0, s.useState)(!1),
                [o, a] = (0, s.useState)(!1),
                [c, d] = (0, s.useState)({ url: "", playing: !1 }),
                { user: u } = (0, s.useContext)(H.Rs),
                { playlist: p } = (0, s.useContext)(e$.B),
                m = (0, s.useRef)(null),
                h = (0, s.useCallback)(() => {
                  var t
                  null == (t = e.current) || t.call(e),
                    (i.current = 0),
                    l(!1),
                    a(!1),
                    d({ url: "", playing: !1 })
                }, []),
                x = (0, s.useCallback)(
                  (e, t) => {
                    if (!e || !u) return !1
                    let i = e9(e.url1)
                    return e.url1
                      ? p.some((t) => tY(t, e.url1))
                        ? (t.setFieldError("url1", "Ten URL został już dodany"),
                          !1)
                        : i || e.filmwebURL || e.title
                        ? e.title.length > 90
                          ? (t.setFieldError("title", "Tytuł jest za długi"),
                            !1)
                          : !!eK().canPlay(e.url1) ||
                            !!e.live ||
                            (t.setFieldError("url1", "Nieprawidłowy URL"), !1)
                        : (t.setFieldError("title", "Podaj tytuł"), !1)
                      : (t.setFieldError("url1", "Podaj URL"), !1)
                  },
                  [u, p]
                ),
                g = (0, s.useCallback)(
                  async (n) => {
                    var r, l
                    let o =
                      null !=
                      (l = null == (r = m.current) ? void 0 : r.getDuration())
                        ? l
                        : null
                    return n && (null == u ? void 0 : true)
                      ? null
                      : o ||
                          ((i.current += 500),
                          i.current >= 3e3 && a(!0),
                          new Promise((i) => {
                            ;(e.current = () => {
                              clearTimeout(t.current), i(void 0)
                            }),
                              (t.current = setTimeout(() => i(g(n)), 500))
                          }))
                  },
                  [u]
                ),
                f = (0, s.useCallback)((e, t) => {
                  if (null !== t) {
                    let i = ((e, t) => {
                        {
                          let i = e.replace(/[\\[\]]/g, "\\$&"),
                            n = new RegExp(
                              "[?&]".concat(i, "(=([^&#]*)|&|#|$)")
                            ).exec(null != t ? t : window.location.href)
                          return n
                            ? n[2]
                              ? decodeURIComponent(n[2].replace(/\+/g, " "))
                              : ""
                            : null
                        }
                      })("t", e),
                      n = i ? Number(i.replace("s", "")) : null
                    if (n && n !== 1 / 0 && n > 0 && n < t) return n
                  }
                }, []),
                b = (0, s.useCallback)(async (e) => {
                  if (!e) return
                  let { data: t } = await tJ.A.get(tQ(e))
                  return t
                }, []),
                y = (0, s.useCallback)(
                  (e) => [
                    tK({
                      src: te(["list", "start_radio", "index"], e.url1),
                      label: e.urlLabel1,
                    }),
                    ...Object.keys(e)
                      .filter((e) => e.includes("url") && "url1" !== e)
                      .map((t) => ({
                        src: e["url".concat(Number(t.replace("url", "")))],
                        label:
                          e["urlLabel".concat(Number(t.replace("url", "")))],
                      }))
                      .filter((e) => e.src && e.label),
                  ],
                  []
                ),
                w = (0, s.useCallback)(async (e) => {
                  if (e9(e))
                    try {
                      let { data: t } = await tJ.A.get(
                        "https://youtube.com/oembed?url=https://www.youtube.com/watch?v=".concat(
                          e9(e),
                          "&format=json"
                        )
                      )
                      return {
                        ...t,
                        thumbnail_url: "https://i.ytimg.com/vi/".concat(
                          e9(e),
                          "/mqdefault.jpg"
                        ),
                      }
                    } catch (e) {
                      return
                    }
                }, []),
                v = (0, s.useCallback)(
                  async (e, t) => {
                    if (!u || !x(e, t)) return
                    let i = te(["list", "start_radio", "index"], e.url1)
                    l(!0), d({ url: i, playing: !0 })
                    let n = await g(e.live)
                    if (n && n > 7200 && !true) {
                      t.setFieldError("url1", "Film jest za długi"), h()
                      return
                    }
                    let r = await w(i),
                      o = await b(e.filmwebURL)
                    if ((h(), void 0 !== n)) {
                      var a
                      let t = y(e),
                        l = f(i, n)
                      return tK({
                        url: t,
                        title:
                          null !=
                          (a =
                            e.title ||
                            (null == o ? void 0 : o.title) ||
                            (null == r ? void 0 : r.title))
                            ? a
                            : "",
                        duration: n,
                        user: u.name,
                        isAdmin: true,
                        played: l,
                        thumbnail:
                          (null == o ? void 0 : o.image) ||
                          (null == r ? void 0 : r.thumbnail_url),
                        subtitlesURL: e.subtitlesURL,
                        filmwebURL: e.filmwebURL,
                        description: null == o ? void 0 : o.description,
                        rating: null == o ? void 0 : o.rating,
                      })
                    }
                  },
                  [u, y, b, x, g, w, h, f]
                )
              return {
                Probe: (0, s.useMemo)(
                  () =>
                    c.url
                      ? (0, n.jsx)(eK(), {
                          ref: m,
                          url: c.url,
                          playing: !0,
                          muted: !0,
                          width: "0",
                          height: "0",
                          style: { position: "absolute", visibility: "hidden" },
                        })
                      : null,
                  [c.url]
                ),
                loading: r,
                cancellable: o,
                cancel: h,
                validateVideo: v,
              }
            })(),
            b = (0, s.useCallback)(() => {
              i(), g()
            }, [i, g]),
            {
              values: y,
              errors: w,
              handleChange: v,
              handleSubmit: j,
              handleBlur: k,
              setFieldValue: C,
            } = (0, tF.Wx)({
              initialValues: {
                title: "",
                url1: "",
                subtitlesURL: "",
                filmwebURL: "",
                live: !1,
              },
              onSubmit: async (e, t) => {
                x && g()
                let i = await f(e, t)
                i && (p(i), b(), t.resetForm(), u([1]))
              },
            }),
            A = (0, s.useCallback)(() => {
              d.length < 12 && u([...d, d[d.length - 1] + 1])
            }, [d]),
            _ = (0, s.useCallback)(
              (e) => {
                u(d.filter((t) => t !== e)),
                  C("url".concat(e), void 0),
                  C("urlLabel".concat(e), void 0)
              },
              [d, C]
            ),
            P = (0, s.useMemo)(
              () =>
                d.length > 1 ||
                ((null == c ? void 0 : true) && y.url1.match(/(.mp4|.m3u8)/)),
              [d.length, y.url1, null == c ? void 0 : true]
            ),
            z = (0, s.useMemo)(
              () =>
                r.filter((e) => e.user === (null == c ? void 0 : c.name))
                  .length,
              [r, c]
            ),
            L = (0, s.useMemo)(
              () =>
                (!(null == c ? void 0 : true) &&
                  (l || r.length >= V.VL || z >= V.k6)) ||
                (null == c ? void 0 : c.isBanned),
              [
                r.length,
                l,
                null == c ? void 0 : true,
                null == c ? void 0 : c.isBanned,
                z,
              ]
            ),
            N = (0, s.useMemo)(
              () =>
                P
                  ? (0, n.jsxs)(t1, {
                      children: [
                        (0, n.jsx)(tX, {
                          id: "title",
                          label: "Tytuł",
                          value: y.title,
                          onChange: v,
                          onBlur: k,
                          helperText: w.title,
                          error: !!w.title,
                        }),
                        (0, n.jsx)(tX, {
                          id: "filmwebURL",
                          label: "Link do filmweb",
                          value: y.filmwebURL,
                          onChange: v,
                          onBlur: k,
                          helperText: w.filmwebURL,
                          error: !!w.filmwebURL,
                        }),
                        (0, n.jsx)(tX, {
                          id: "subtitlesURL",
                          label: "Link do napis\xf3w",
                          value: y.subtitlesURL,
                          onChange: v,
                          onBlur: k,
                          helperText: w.subtitlesURL,
                          error: !!w.subtitlesURL,
                        }),
                        (0, n.jsx)(t6, {}),
                        d.map((e) =>
                          (0, n.jsxs)(
                            t4,
                            {
                              children: [
                                (0, n.jsx)(t3, {
                                  id: "urlLabel".concat(e),
                                  label: "Etykieta",
                                  value: y["urlLabel".concat(e)],
                                  onChange: v,
                                  onBlur: k,
                                  helperText: w["urlLabel".concat(e)],
                                  error: !!w["urlLabel".concat(e)],
                                }),
                                (0, n.jsx)(tX, {
                                  id: "url".concat(e),
                                  label: "URL",
                                  value: y["url".concat(e)],
                                  onChange: v,
                                  onBlur: k,
                                  helperText: w["url".concat(e)],
                                  error: !!w["url".concat(e)],
                                }),
                                1 !== e &&
                                  (0, n.jsx)(t7, {
                                    onClick: () => _(e),
                                    children: (0, n.jsx)(I, {
                                      type: "button",
                                      $size: 52,
                                      label: "Usuń",
                                      children: (0, n.jsx)(a.g, {
                                        icon: o.yLS,
                                      }),
                                    }),
                                  }),
                              ],
                            },
                            e
                          )
                        ),
                        (0, n.jsx)(t8, {
                          type: "button",
                          disabled: d.length >= 12,
                          onClick: A,
                          children: "Dodaj kolejny URL",
                        }),
                        (0, n.jsx)(t6, {}),
                      ],
                    })
                  : (0, n.jsxs)(t1, {
                      children: [
                        (0, n.jsx)(tX, {
                          id: "title",
                          label: "Tytuł",
                          value: y.title,
                          onChange: v,
                          onBlur: k,
                          helperText: w.title,
                          error: !!w.title,
                        }),
                        (0, n.jsx)(tX, {
                          id: "url1",
                          label: "URL",
                          value: y.url1,
                          onChange: v,
                          onBlur: k,
                          helperText: w.url1,
                          error: !!w.url1,
                        }),
                        (null == c ? void 0 : true) &&
                          (0, n.jsx)(t5, {
                            children: (0, n.jsx)(tW, {
                              id: "live",
                              label: "Live",
                              checked: y.live,
                              onChange: v,
                              onBlur: k,
                            }),
                          }),
                      ],
                    }),
              [P, d, y, w, v, k, _, A, c]
            ),
            R = (0, s.useMemo)(
              () =>
                (0, n.jsxs)(t9, {
                  disabled: L,
                  $width: "250px",
                  onClick: t,
                  children: [
                    (0, n.jsx)(a.g, { icon: o.q_k }),
                    (null == c ? void 0 : true) || !(z >= V.k6)
                      ? (null == c ? void 0 : c.isBanned)
                        ? "Zostałeś zbanowany"
                        : (null == c ? void 0 : true) || !(r.length >= V.VL)
                        ? "Dodaj film do kolejki"
                        : "Playlista jest pełna"
                      : "Limit ".concat(V.k6, " film\xf3w wyczerpany"),
                  ],
                }),
              [L, t, c, z, r.length]
            )
          return (0, n.jsxs)(n.Fragment, {
            children: [
              m,
              (0, n.jsx)(q, {
                visible: e,
                close: b,
                heading: "Dodaj film",
                children: (0, n.jsxs)(t0, {
                  onSubmit: j,
                  children: [
                    (0, n.jsx)(E.N, { initial: !1, children: N }),
                    (0, n.jsx)(t2, {
                      children: (0, n.jsx)(S, {
                        $loading: x,
                        disabled: x && !h,
                        type: "submit",
                        children: x ? (h ? "Anuluj" : "") : "Dodaj",
                      }),
                    }),
                  ],
                }),
              }),
              R,
            ],
          })
        })
      ie.displayName = "AddVideoModal"
      let it = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-1bfb2130-0" })(
          [
            "display:flex;justify-content:space-between;width:100%;gap:40px;",
            "{flex-direction:column-reverse;gap:20px;}",
            "{gap:0;}",
          ],
          (e) => {
            let { theme: t } = e
            return t.media.md.max
          },
          (e) => {
            let { theme: t } = e
            return t.media.sm.max
          }
        ),
        ii = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-1bfb2130-1" })(
          [
            "display:flex;align-items:center;gap:12px;& > ",
            "{display:flex;align-items:center;}",
            "{flex-direction:column;align-items:flex-start;&.controls{&&{margin-bottom:10px;& > *{width:100%;max-width:100%;}}}",
            "{font-size:2.6rem;}}",
          ],
          b,
          (e) => {
            let { theme: t } = e
            return t.media.sm.max
          },
          b
        ),
        ir = l.Ay.div.withConfig({ componentId: "sc-1bfb2130-2" })(
          ["display:flex;align-items:center;gap:12px;", "{gap:8px;}"],
          (e) => {
            let { theme: t } = e
            return t.media.sm.max
          }
        ),
        il = l.Ay.div.withConfig({ componentId: "sc-1bfb2130-3" })(
          [
            "display:flex;align-items:center;color:",
            ";margin:0 4px;span{margin-left:10px;font-size:1.6rem;font-weight:400;white-space:nowrap;}svg{width:16px;height:16px;fill:",
            ";}",
          ],
          (e) => {
            let { theme: t, $color: i } = e
            return i || t.colors.white
          },
          (e) => {
            let { theme: t, $color: i } = e
            return i || t.colors.white
          }
        ),
        io = l.Ay.span.withConfig({ componentId: "sc-1bfb2130-4" })(
          [
            "display:block;width:4px;height:32px;background:",
            ";margin:0 2px 0 4px;border-radius:8px;",
            "{width:100%;height:0;order:-1;& + div{margin-top:4px;}}",
          ],
          (e) => {
            let { theme: t } = e
            return (0, c.e$)(String(t.colors.white), 0.6)
          },
          (e) => {
            let { theme: t } = e
            return t.media.sm.max
          }
        ),
        ia = (0, l.Ay)(I).withConfig({ componentId: "sc-1bfb2130-5" })(
          [
            "background:",
            " !important;pointer-events:",
            ";&&{",
            "{min-width:36px;max-width:36px;min-height:36px;max-height:36px;}}",
          ],
          (e) => {
            let { theme: t, $locked: i } = e
            return i ? t.colors.red : t.colors.green
          },
          (e) => {
            let { $disabled: t } = e
            return t ? "none" : "all"
          },
          (e) => {
            let { theme: t } = e
            return t.media.sm.max
          }
        ),
        is = (0, s.memo)(() => {
          let { playlistLocked: e, playlist: t } = (0, s.useContext)(e$.B),
            { user: i, login: r, logout: l } = (0, s.useContext)(H.Rs),
            { setPlaylistLocked: c } = e8(),
            d = (0, s.useMemo)(
              () =>
                (0, es.f)(
                  t
                    .filter((e) => {
                      let { duration: t } = e
                      return t && t !== 1 / 0
                    })
                    .map((e) => {
                      let { duration: t } = e
                      return t
                    })
                    .reduce((e, t) => Number(e) + Number(t), 0)
                ),
              [t]
            )
          return (0, n.jsxs)(it, {
            children: [
              (0, n.jsxs)(ii, {
                children: [
                  (0, n.jsxs)(ir, {
                    children: [
                      (0, n.jsx)(ia, {
                        placement: "bottom-start",
                        label: e ? "Odblokuj playlistę" : "Zablokuj playlistę",
                        onClick: () => c(!e),
                        $locked: e,
                        $disabled: !(null == i ? void 0 : true),
                        children: e
                          ? (0, n.jsx)(a.g, { icon: o.DW4 })
                          : (0, n.jsx)(a.g, { icon: o.pNp }),
                      }),
                      (0, n.jsx)(b, { children: "Playlista" }),
                    ],
                  }),
                  (0, n.jsx)(io, {}),
                  (0, n.jsxs)(ir, {
                    children: [
                      (0, n.jsxs)(il, {
                        children: [
                          (0, n.jsx)(a.g, { icon: o.qtl }),
                          (0, n.jsx)("span", { children: t.length }),
                        ],
                      }),
                      (0, n.jsxs)(il, {
                        children: [
                          (0, n.jsx)(a.g, { icon: o.a$ }),
                          (0, n.jsx)("span", { children: d }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsxs)(ii, {
                className: "controls",
                children: [
                  (null == i ? void 0 : true) && (0, n.jsx)(tV, {}),
                  i
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(ie, {}),
                          (0, n.jsxs)(S, {
                            $themecolor: "twitch",
                            $width: "190px",
                            onClick: l,
                            children: [
                              (0, n.jsx)(a.g, { icon: o.yBu }),
                              " Wyloguj się",
                            ],
                          }),
                        ],
                      })
                    : (0, n.jsxs)(S, {
                        $themecolor: "twitch",
                        $width: "190px",
                        onClick: r,
                        children: [
                          (0, n.jsx)(a.g, { icon: eA.Zhe }),
                          " Zaloguj się",
                        ],
                      }),
                ],
              }),
            ],
          })
        })
      is.displayName = "MainControls"
      let ic = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-a6a1171e-0" })(
          [
            "width:100%;margin-bottom:20px;& > ",
            "{justify-content:space-between;display:flex;margin-bottom:20px;}",
          ],
          y
        ),
        id = l.Ay.div.withConfig({ componentId: "sc-a6a1171e-1" })(
          [
            "display:flex;align-items:center;color:",
            ";padding:4px 14px;background:",
            ";border-radius:8px;font-weight:500;",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.white
          },
          (e) => {
            let { theme: t } = e
            return t.colors.dark300
          }
        ),
        iu = l.Ay.div.withConfig({ componentId: "sc-a6a1171e-2" })([
          "display:flex;align-items:center;",
        ]),
        ip = () => {
          let { user: e } = (0, s.useContext)(H.Rs),
            [t, i] = (0, s.useState)(0)
          return ((0, s.useEffect)(() => {
            if (!(null == e ? void 0 : true)) return
            let t = (e) => {
              i(e)
            }
            F.s.on(G.q.GetUsersCount, t)
            let n = setInterval(() => {
              F.s.emit(G.q.GetUsersCount)
            }, 1e4)
            return (
              F.s.emit(G.q.GetUsersCount),
              () => {
                F.s.off(G.q.GetUsersCount, t), clearInterval(n)
              }
            )
          }, [null == e ? void 0 : true]),
          null == e ? void 0 : true)
            ? (0, n.jsx)(ic, {
                children: (0, n.jsxs)(y, {
                  children: [
                    (0, n.jsxs)(iu, {
                      children: [
                        (0, n.jsx)(a.g, {
                          icon: o.Bwz,
                          style: { marginRight: "8px" },
                        }),
                        "Połączeni użytkownicy",
                      ],
                    }),
                    (0, n.jsx)(id, { children: t }),
                  ],
                }),
              })
            : null
        },
        im = (0, l.Ay)(r.P.form).withConfig({ componentId: "sc-614f2806-0" })([
          "display:flex;flex-direction:column;min-width:300px;",
        ]),
        ih = (0, l.Ay)(r.P.div)
          .attrs({
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
          })
          .withConfig({ componentId: "sc-614f2806-1" })([
          "display:flex;flex-direction:column;",
        ]),
        ix = l.Ay.div.withConfig({ componentId: "sc-614f2806-2" })([
          "display:flex;justify-content:space-between;width:100%;& > button{width:100%;}",
        ]),
        ig = l.Ay.div.withConfig({ componentId: "sc-614f2806-3" })([
          "display:flex;gap:10px;& > div{margin-bottom:12px !important;}input:-webkit-autofill,input:-webkit-autofill:focus{transition:background-color 600000s 0s,color 600000s 0s;}input[data-autocompleted]{background-color:transparent !important;}",
        ]),
        ib = (0, l.Ay)(tX).withConfig({ componentId: "sc-614f2806-4" })([
          "&&{max-width:100px;}",
        ]),
        iy = l.Ay.span.withConfig({ componentId: "sc-614f2806-5" })(
          [
            "display:block;width:100%;height:1px;background:",
            ";margin-bottom:20px;",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.dark
          }
        ),
        iw = (0, l.Ay)(S).withConfig({ componentId: "sc-614f2806-6" })(
          [
            "&&{margin-bottom:32px;border-radius:8px;background:",
            ";min-height:46px;padding-top:0;padding-bottom:0;&:hover{background:",
            ";}}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.dark300
          },
          (e) => {
            let { theme: t } = e
            return t.colors.dark
          }
        ),
        iv = l.Ay.div.withConfig({ componentId: "sc-614f2806-7" })([
          "display:flex;align-items:center;",
        ]),
        ij = (0, l.Ay)(I).withConfig({ componentId: "sc-614f2806-8" })([
          "&&{margin-left:10px;padding:4px;min-width:36px;min-height:36px;}",
        ]),
        ik = (e) => {
          let {
              controls: [t, i, r],
            } = e,
            [l, c] = (0, s.useState)([]),
            { schedule: d } = (0, s.useContext)(e$.B),
            { setMovieSchedule: u } = e8(),
            p = (0, s.useMemo)(
              () => ({
                date: (null == d ? void 0 : d.date) || (0, es.A)(),
                ...(null == d
                  ? void 0
                  : d.items.reduce(
                      (e, t, i) => (
                        (e["time".concat(i + 1)] = t.time),
                        (e["timeUrl".concat(i + 1)] = t.link),
                        e
                      ),
                      {}
                    )),
              }),
              [d]
            ),
            m = (0, s.useCallback)(
              async (e) =>
                (
                  await Promise.all([
                    ...Object.keys(e)
                      .filter((e) => e.includes("time"))
                      .map(async (t) => {
                        try {
                          let i = Number(t.replace("time", "")),
                            n = e["time".concat(i)],
                            r =
                              e["timeUrl".concat(Number(t.replace("time", "")))]
                          if (!r) return {}
                          let { data: l } = await tJ.A.get(tQ(r))
                          return tK({ time: n, link: r, ...l })
                        } catch (e) {
                          console.log(e)
                        }
                        return {}
                      }),
                  ])
                ).filter((e) => e.time),
              []
            ),
            {
              values: h,
              isSubmitting: x,
              errors: g,
              handleChange: f,
              handleSubmit: b,
              handleBlur: y,
              setFieldValue: w,
            } = (0, tF.Wx)({
              enableReinitialize: !0,
              initialValues: p,
              onSubmit: async (e, t) => {
                t.setSubmitting(!0),
                  u({ date: e.date, items: await m(e) }),
                  t.setSubmitting(!1),
                  r()
              },
            }),
            v = (0, s.useCallback)(() => {
              if (l.length < 6) {
                var e
                c([...l, (null != (e = l[l.length - 1]) ? e : 0) + 1])
              }
            }, [l]),
            j = (0, s.useCallback)(
              (e) => {
                c(l.filter((t) => t !== e)),
                  w("timeUrl".concat(e), void 0),
                  w("time".concat(e), void 0)
              },
              [l, w]
            )
          return (
            (0, s.useEffect)(() => {
              let e = Object.keys(p).filter((e) => e.includes("timeUrl"))
              e.length > 0 && c([...e.map((e, t) => t + 1)])
            }, [p]),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(q, {
                  visible: t,
                  close: r,
                  heading: "Edytuj repertuar",
                  children: (0, n.jsxs)(im, {
                    onSubmit: b,
                    children: [
                      (0, n.jsxs)(ih, {
                        children: [
                          (0, n.jsx)(tX, {
                            id: "date",
                            label: "Data",
                            value: h.date,
                            onChange: f,
                            onBlur: y,
                            helperText: g.date,
                            error: !!g.date,
                          }),
                          (0, n.jsx)(iy, {}),
                          l.map((e) =>
                            (0, n.jsxs)(
                              ig,
                              {
                                children: [
                                  (0, n.jsx)(ib, {
                                    id: "time".concat(e),
                                    label: "Godzina",
                                    value: h["time".concat(e)],
                                    onChange: f,
                                    onBlur: y,
                                    helperText: g["time".concat(e)],
                                    error: !!g["time".concat(e)],
                                  }),
                                  (0, n.jsx)(tX, {
                                    id: "timeUrl".concat(e),
                                    label: "Link do filmweb",
                                    value: h["timeUrl".concat(e)],
                                    onChange: f,
                                    onBlur: y,
                                    helperText: g["timeUrl".concat(e)],
                                    error: !!g["timeUrl".concat(e)],
                                  }),
                                  (0, n.jsx)(iv, {
                                    onClick: () => j(e),
                                    children: (0, n.jsx)(I, {
                                      type: "button",
                                      $size: 52,
                                      label: "Usuń",
                                      $themecolor: "dark300",
                                      children: (0, n.jsx)(a.g, {
                                        icon: o.yLS,
                                      }),
                                    }),
                                  }),
                                ],
                              },
                              e
                            )
                          ),
                          (0, n.jsx)(iw, {
                            type: "button",
                            disabled: l.length >= 6,
                            onClick: v,
                            children: "Dodaj film",
                          }),
                          (0, n.jsx)(iy, {}),
                        ],
                      }),
                      (0, n.jsx)(ix, {
                        children: (0, n.jsx)(S, {
                          $loading: x,
                          disabled: x,
                          type: "submit",
                          children: "Zapisz",
                        }),
                      }),
                    ],
                  }),
                }),
                Number(null == d ? void 0 : d.items.length) > 0 &&
                  (0, n.jsx)(ij, {
                    label: "Edytuj",
                    onClick: i,
                    children: (0, n.jsx)(a.g, { icon: o.hpd }),
                  }),
              ],
            })
          )
        },
        iC = (0, l.Ay)(r.P.article).withConfig({
          componentId: "sc-daa64fc3-0",
        })(
          [
            "position:relative;width:100%;display:flex;background:",
            ";border-radius:8px;overflow:hidden;& + &{margin-top:15px;}",
            "{flex-direction:column;padding:0;& > a{width:100%;max-width:100%;min-height:160px;}}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.dark
          },
          (e) => {
            let { theme: t } = e
            return t.media.sm.max
          }
        ),
        iA = (0, l.Ay)(r.P.a).withConfig({ componentId: "sc-daa64fc3-1" })(
          [
            "position:relative;width:100%;min-width:160px;max-width:200px;min-height:120px;background:#000;",
            "{max-width:120px;min-width:120px;}",
          ],
          (e) => {
            let { theme: t } = e
            return t.media.sm.max
          }
        ),
        iI = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-daa64fc3-2" })(
          [
            "position:relative;padding:20px;width:100%;",
            "{min-height:26px;}",
            "{padding:15px 20px 25px;}",
          ],
          w,
          (e) => {
            let { theme: t } = e
            return t.media.sm.max
          }
        ),
        iS = (0, l.Ay)(w)
          .attrs({ as: "a" })
          .withConfig({ componentId: "sc-daa64fc3-3" })(
          [
            "display:flex;justify-content:space-between;width:100%;max-width:100%;&:hover{color:",
            ";}",
            "{font-size:1.6rem;}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.primary
          },
          (e) => {
            let { theme: t } = e
            return t.media.sm.max
          }
        ),
        i_ = (0, l.Ay)(f).withConfig({ componentId: "sc-daa64fc3-4" })(
          ["color:", ";margin-top:3px;"],
          (e) => {
            let { theme: t } = e
            return (0, c.a)(String(t.colors.dark200), 0.5)
          }
        ),
        iP = l.Ay.div.withConfig({ componentId: "sc-daa64fc3-5" })(
          [
            "display:flex;align-items:center;margin-left:10px;color:",
            ";svg{width:18px;height:18px;margin-top:-1px;margin-right:5px;}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.white
          }
        ),
        iz = (0, l.Ay)(f).withConfig({ componentId: "sc-daa64fc3-6" })(
          [
            "position:absolute;top:0;left:0;z-index:1;padding:3px 7px 4px 6px;background:",
            ";color:",
            ";border-radius:0 0 8px 0;",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.white
          },
          (e) => {
            let { theme: t } = e
            return t.colors.dark
          }
        ),
        iL = l.Ay.img.withConfig({ componentId: "sc-daa64fc3-7" })([
          "display:block;position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;object-fit:cover;object-position:50% 50%;",
        ]),
        iN = (e) => {
          let {
            link: t,
            time: i,
            description: r,
            image: l,
            rating: s,
            title: c,
            duration: d,
          } = e
          return (0, n.jsxs)(iC, {
            className: "schedule-item",
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.95 },
            children: [
              (0, n.jsxs)(iA, {
                href: t,
                target: "_blank",
                children: [
                  c &&
                    (0, n.jsx)(iz, {
                      as: "time",
                      $weight: 700,
                      $size: 13,
                      children: i,
                    }),
                  l && (0, n.jsx)(iL, { src: l, alt: "" }),
                ],
              }),
              (0, n.jsxs)(iI, {
                children: [
                  (0, n.jsxs)(iS, {
                    as: "a",
                    $margin: "2px",
                    href: t,
                    target: "_blank",
                    $lineClamp: 2,
                    children: [
                      null != c ? c : i,
                      s &&
                        (0, n.jsx)("div", {
                          children: (0, n.jsxs)(iP, {
                            children: [(0, n.jsx)(a.g, { icon: o.yy }), " ", s],
                          }),
                        }),
                    ],
                  }),
                  (0, n.jsx)(f, {
                    $size: 14,
                    $margin: "10px",
                    $weight: 500,
                    $themecolor: "dark200",
                    children: d,
                  }),
                  r &&
                    (0, n.jsx)(i_, {
                      $size: 13,
                      $family: "tertiary",
                      $line: 1.25,
                      children: r,
                    }),
                ],
              }),
            ],
          })
        },
        iR = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-5905e349-0" })(
          [
            "width:100%;margin-bottom:30px;& > ",
            "{display:flex;justify-content:space-between;margin-bottom:20px;}",
          ],
          y
        ),
        iM = (0, l.Ay)(f).withConfig({ componentId: "sc-5905e349-1" })(
          [
            "display:flex;align-items:center;color:",
            ";padding:4px 14px;background:",
            ";border-radius:8px;",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.dark200
          },
          (e) => {
            let { theme: t } = e
            return t.colors.dark400
          }
        ),
        iE = l.Ay.div.withConfig({ componentId: "sc-5905e349-2" })([
          "display:flex;align-items:center;",
        ]),
        i$ = (0, l.Ay)(S).withConfig({ componentId: "sc-5905e349-3" })(
          [
            "&&{margin-bottom:25px;border-radius:8px;background:",
            ";min-height:46px;padding-top:0;padding-bottom:0;width:100%;&:hover{background:",
            ";}}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.dark300
          },
          (e) => {
            let { theme: t } = e
            return t.colors.dark
          }
        ),
        iU = () => {
          let { user: e } = (0, s.useContext)(H.Rs),
            { schedule: t } = (0, s.useContext)(e$.B),
            i = O()
          return ((null == t ? void 0 : t.items) &&
            (null == t ? void 0 : t.items.length) !== 0) ||
            (null == e ? void 0 : true)
            ? (0, n.jsxs)(iR, {
                children: [
                  (0, n.jsxs)(y, {
                    children: [
                      (0, n.jsxs)(iE, {
                        children: [
                          (0, n.jsx)(a.g, {
                            icon: o.OxR,
                            style: { marginRight: "8px" },
                          }),
                          "Repertuar",
                          (null == e ? void 0 : true) &&
                            (0, n.jsx)(ik, { controls: i }),
                        ],
                      }),
                      (null == t ? void 0 : t.date) &&
                        (0, n.jsx)(iM, {
                          as: "span",
                          $weight: 500,
                          $family: "tertiary",
                          children: t.date,
                        }),
                    ],
                  }),
                  null == t
                    ? void 0
                    : t.items.map((e) =>
                        (0, n.jsx)(iN, { ...e }, e.title + e.time)
                      ),
                  !(null == t ? void 0 : t.items.length) &&
                    (0, n.jsxs)(i$, {
                      onClick: i[1],
                      children: [
                        (0, n.jsx)(a.g, { icon: o.hpd }),
                        " Edytuj repertuar",
                      ],
                    }),
                ],
              })
            : null
        }
      var iB = i(81145),
        iT = i(54587),
        iD = i.n(iT)
      let iq = {
        src: "/_next/static/media/sad.aa3d1652.png",
        height: 128,
        width: 156,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAYFBMVEVMaXFPdDJTgCcAOv9PbjdQfjBjTSQ6TytakjMAPvhuhWKMioJOGB1cMxsUOscEO+uNn4RReTJifU5sfGhXckM0RTNFXVldWyZHWFwdTKNdh0E0YH9UWk5ThC9wk1pXiSAZ7WpSAAAAGnRSTlMAYOfNJcH9C/zGb5U0ynKz+3r+/vj+/fv8yO84gJkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA9SURBVHicBcEFAsAgDACxQ1tmzAUm///lEsRM3gtgVO0TgFDWuZQG9N2W8W7BfkeMfQdXPfc6AMml5LLwA0rWAoXXOqrIAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 7,
      }
      var iV = i(41946),
        iF = i.n(iV)
      let iH = {
          src: "/_next/static/media/moderator.46ceac8a.png",
          height: 36,
          width: 36,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEUArQMGrwgBrQMluif////s+eyT3JQJtAtYyVlWyVe357dZyltWyVgHtdf/AAAAAnRSTlPV1Ati6q8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAA1SURBVHicHcs5EsAwDMNABqRk5/j/ezNWhW0gAdjXtBMf7AzsShrRlbpBfCkDWs/bA63zoR8eDwDih0AzCwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        iO = async (e) => {
          try {
            await navigator.clipboard.writeText(e)
          } catch (e) {
            console.error("Failed to copy: ", e)
          }
        },
        iG = (0, l.Ay)(p.A).withConfig({ componentId: "sc-51d1bdb8-0" })(
          [
            "&&{position:absolute;top:6px;right:-12px;min-width:30px;max-width:30px;color:",
            ";}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.white
          }
        ),
        iW = l.Ay.div.withConfig({ componentId: "sc-51d1bdb8-1" })(
          [
            "display:flex;flex-direction:column;background:",
            ";border-radius:4px;",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.white
          }
        ),
        iZ = (0, l.Ay)(u.A).withConfig({ componentId: "sc-51d1bdb8-2" })(
          [
            "&&{padding-top:8px;padding-bottom:8px;justify-content:flex-start;font-size:12px;font-weight:500;text-transform:initial;padding-left:12px;padding-right:12px;border-radius:4px;color:",
            ";&:hover{background:",
            ";}svg{width:18px;height:18px;margin-right:10px;*{fill:currentColor;}}",
            "}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.black
          },
          (e) => {
            let { theme: t } = e
            return t.colors.dark200
          },
          (e) => {
            let { $success: t } = e
            return (
              t &&
              (0, l.AH)(["pointer-events:none;color:", ";"], (e) => {
                let { theme: t } = e
                return t.colors.green
              })
            )
          }
        ),
        iX = (0, s.memo)(() => (0, n.jsx)(a.g, { icon: o.jPR })),
        iJ = (0, s.memo)(() => (0, n.jsx)(a.g, { icon: o.yLS })),
        iQ = (0, s.memo)(() => (0, n.jsx)(a.g, { icon: o.ijD })),
        iY = (0, s.memo)(() => (0, n.jsx)(a.g, { icon: o.INu })),
        iK = (0, s.memo)(() => (0, n.jsx)(a.g, { icon: o.Dwc }))
      ;(iX.displayName = "CopyIcon"),
        (iJ.displayName = "BinIcon"),
        (iQ.displayName = "PlayIcon"),
        (iY.displayName = "ArrowUpIcon"),
        (iK.displayName = "MoreIcon")
      let i0 = (0, s.memo)(
        (e) => {
          let { video: t, hasBeenPlayed: i } = e,
            [r, l] = (0, s.useState)(!1),
            [o, a] = (0, s.useState)(!1),
            { user: c } = (0, s.useContext)(H.Rs),
            { activeVideo: d, playlist: u } = (0, s.useContext)(e$.B),
            {
              playVideo: p,
              moveNextVideo: h,
              removeVideo: x,
              removeLastVideo: g,
            } = e8(),
            f = (0, s.useCallback)(() => {
              l(!1)
            }, []),
            b = (0, s.useCallback)(() => {
              l((e) => !e)
            }, []),
            y = (0, s.useCallback)(() => {
              iO(t.url[0].src), a(!0), setTimeout(() => a(!1), 300)
            }, [t.url]),
            w = (0, s.useMemo)(() => {
              let e = [
                {
                  Icon: iX,
                  label: o ? "Skopiowano!" : "Kopiuj link",
                  callback: y,
                  closeTimeout: 200,
                },
              ]
              return (
                (null == c ? void 0 : true) && i
                  ? e.push({ Icon: iJ, label: "Usuń", callback: g })
                  : ((null == c ? void 0 : true) &&
                      !tY(d, t) &&
                      (tY(u[1], t) ||
                        e.unshift({
                          Icon: iY,
                          label: "Następny w kolejce",
                          callback: () => h(t),
                        }),
                      e.unshift({
                        Icon: iQ,
                        label: "Odtw\xf3rz",
                        callback: () => p(t),
                      })),
                    ((null == c ? void 0 : c.name) === t.user ||
                      (null == c ? void 0 : true)) &&
                      e.push({
                        Icon: iJ,
                        label: "Usuń z kolejki",
                        callback: () => x(t),
                      })),
                e
              )
            }, [
              o,
              null == c ? void 0 : c.name,
              null == c ? void 0 : true,
              t,
              d,
              u,
              i,
              y,
              p,
              h,
              x,
              g,
            ]),
            v = (0, s.useMemo)(
              () =>
                r || o
                  ? (0, n.jsx)(iW, {
                      children: w.map((e) => {
                        let {
                          Icon: t,
                          label: i,
                          themecolor: r,
                          callback: l,
                          closeTimeout: o = 0,
                        } = e
                        return (0, n.jsxs)(
                          iZ,
                          {
                            $themecolor: r,
                            $success: "Skopiowano!" === i,
                            onClick: () => {
                              l(), setTimeout(f, o)
                            },
                            children: [(0, n.jsx)(t, {}), i],
                          },
                          i
                        )
                      }),
                    })
                  : null,
              [w, r, o, f]
            )
          return (0, n.jsx)(M.x, {
            onClickAway: f,
            children: (0, n.jsx)("div", {
              children: (0, n.jsx)(m.A, {
                onClose: f,
                open: r,
                disableFocusListener: !0,
                disableHoverListener: !0,
                disableTouchListener: !0,
                title: v,
                placement: "bottom-end",
                children: (0, n.jsx)(iG, {
                  onClick: b,
                  children: (0, n.jsx)(iK, {}),
                }),
              }),
            }),
          })
        },
        (e, t) => e.hasBeenPlayed === t.hasBeenPlayed && iF()(e.video, t.video)
      )
      i0.displayName = "VideoCardOptions"
      let i1 = (0, l.Ay)(r.P.article).withConfig({
          componentId: "sc-d7f751b8-0",
        })(
          [
            "position:relative;width:100%;display:flex;padding-right:20px;background:",
            ";border-radius:16px;overflow:hidden;border:2px solid ",
            ';&:before{content:"";position:absolute;top:0;left:0;bottom:0;right:0;transition:0.3s;opacity:0;background:',
            ";}",
            " ",
            "",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.dark300
          },
          (e) => {
            let { theme: t } = e
            return t.colors.dark
          },
          (e) => {
            let { theme: t } = e
            return t.colors.dark
          },
          (e) => {
            let { $active: t } = e
            return t && (0, l.AH)(["&:before{opacity:0.4;}"])
          },
          (e) => {
            let { $muffled: t } = e
            return t && (0, l.AH)(["opacity:0.4 !important;"])
          }
        ),
        i2 = (0, l.Ay)(r.P.a).withConfig({ componentId: "sc-d7f751b8-1" })(
          [
            "position:relative;width:100%;min-width:160px;max-width:200px;min-height:110px;background:#000;border-radius:8px 0 0 8px;overflow:hidden;",
            " ",
            "{max-width:120px;min-width:110px;}",
          ],
          (e) => {
            let { $default: t } = e
            return t && (0, l.AH)(["img{transform:scale(0.6);}"])
          },
          (e) => {
            let { theme: t } = e
            return t.media.sm.max
          }
        ),
        i5 = (0, l.Ay)(iD()).withConfig({ componentId: "sc-d7f751b8-2" })([
          "object-fit:cover;object-position:center;",
        ]),
        i4 = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-d7f751b8-3" })(
          [
            "position:relative;padding:16px;width:100%;",
            "{min-height:26px;padding-right:10px;}",
            "{padding:15px 20px;}",
          ],
          w,
          (e) => {
            let { theme: t } = e
            return t.media.sm.max
          }
        ),
        i3 = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-d7f751b8-4" })(
          [
            "position:relative;margin-top:4px;border-radius:8px;.rp-ui__seek-slider__buffer{z-index:1;height:4px;background:rgba(255,255,255,0.2);border-radius:8px;&::-webkit-progress-bar{background:rgba(255,255,255,0.2);}&::-webkit-progress-value{background-color:",
            ";}&::-moz-progress-bar{background-color:",
            ";}}",
            "{margin-left:0;margin-right:0;}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.primary
          },
          (e) => {
            let { theme: t } = e
            return t.colors.primary
          },
          (e) => {
            let { theme: t } = e
            return t.media.sm.max
          }
        ),
        i6 = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-d7f751b8-5" })(
          [
            "display:inline-flex;align-items:center;color:",
            ";font-weight:700;margin-left:4px;",
            "{margin:2px 0 0;}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.white100
          },
          (e) => {
            let { theme: t } = e
            return t.media.sm.max
          }
        ),
        i8 = (0, l.Ay)(f).withConfig({ componentId: "sc-d7f751b8-6" })(
          [
            "display:flex;flex-wrap:wrap;white-space:nowrap;& > span{margin-top:2px;}",
            "{flex-direction:column;font-size:1.3rem;margin-top:-4px;line-height:1.2;}",
          ],
          (e) => {
            let { theme: t } = e
            return t.media.sm.max
          }
        ),
        i7 = l.Ay.span.withConfig({ componentId: "sc-d7f751b8-7" })(
          [
            "display:inline-block;width:16px;height:16px;margin:0 4px -2px;",
            "{margin-left:0;width:13px;height:13px;}",
          ],
          (e) => {
            let { theme: t } = e
            return t.media.sm.max
          }
        ),
        i9 = l.Ay.time.withConfig({ componentId: "sc-d7f751b8-8" })(
          [
            "position:absolute;bottom:10px;right:10px;background:rgba(0,0,0,0.6);backdrop-filter:blur(32px);padding:3px 6px;border-radius:4px;",
            "",
          ],
          (e) => {
            let { $live: t } = e
            return (
              t &&
              (0, l.AH)(
                ["background:", ";", "{font-weight:700;}"],
                (e) => {
                  let { theme: t } = e
                  return t.colors.red
                },
                f
              )
            )
          }
        ),
        ne = (0, l.Ay)(w)
          .attrs({ as: "a" })
          .withConfig({ componentId: "sc-d7f751b8-9" })(
          [
            "display:flex;max-width:max-content;&:hover{text-decoration:underline;}",
            "{font-size:1.5rem;}",
          ],
          (e) => {
            let { theme: t } = e
            return t.media.xl.max
          }
        ),
        nt = (0, l.Ay)(f).withConfig({ componentId: "sc-d7f751b8-10" })(
          ["color:", ";margin-top:3px;"],
          (e) => {
            let { theme: t } = e
            return (0, c.a)(String(t.colors.dark200), 0.5)
          }
        ),
        ni = l.Ay.div.withConfig({ componentId: "sc-d7f751b8-11" })(
          [
            "display:flex;align-items:center;margin-left:10px;color:",
            ";svg{width:18px;height:18px;margin-top:-1px;margin-right:5px;}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.white
          }
        ),
        nn = l.Ay.div.withConfig({ componentId: "sc-d7f751b8-12" })([
          "display:-webkit-box;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;white-space:initial;max-width:100%;",
        ]),
        nr = (0, s.memo)(
          (e) => {
            var t
            let { video: i, active: r, hasBeenPlayed: l } = e,
              c = (0, s.useContext)(tr),
              d = (0, s.useMemo)(
                () => i.filmwebURL || i.url[0].src,
                [i.filmwebURL, i.url]
              ),
              u = (0, s.useMemo)(
                () =>
                  l
                    ? 0
                    : null === i.duration
                    ? 1
                    : r
                    ? c.playedSeconds
                    : i.played || 0,
                [r, l, i.duration, i.played, c.playedSeconds]
              ),
              p = (0, s.useMemo)(
                () => ({ maxWidth: "100%", height: "auto" }),
                []
              ),
              m = (0, s.useMemo)(() => ({ video: i, hasBeenPlayed: l }), [i, l])
            return (0, n.jsxs)(i1, {
              $muffled: l,
              $active: r,
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.95 },
              children: [
                (0, n.jsxs)(i2, {
                  href: d,
                  target: "_blank",
                  $default: !(i.thumbnail || V.VX),
                  children: [
                    (0, n.jsx)(i5, {
                      src: null != (t = i.thumbnail) ? t : "/thumbnail.png",
                      alt: i.title,
                      fill: !0,
                      sizes: "(max-width: 768px) 110px, 200px",
                      priority: r,
                    }),
                    (0, n.jsx)(i9, {
                      $live: null === i.duration,
                      children: (0, n.jsx)(f, {
                        $weight: 600,
                        $size: 13,
                        children:
                          null === i.duration ? "LIVE" : (0, es.f)(i.duration),
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)(i4, {
                  children: [
                    (0, n.jsxs)(ne, {
                      as: "a",
                      href: d,
                      target: "_blank",
                      $lineClamp: 2,
                      children: [
                        (0, n.jsx)(nn, { children: i.title }),
                        i.rating &&
                          (0, n.jsx)("div", {
                            children: (0, n.jsxs)(ni, {
                              children: [
                                (0, n.jsx)(a.g, { icon: o.yy }),
                                " ",
                                i.rating,
                              ],
                            }),
                          }),
                      ],
                    }),
                    i.description &&
                      (0, n.jsx)(nt, {
                        $size: 13,
                        $family: "tertiary",
                        $line: 1.25,
                        children: i.description,
                      }),
                    (0, n.jsx)(i3, {
                      className: "rp-ui__seek-slider",
                      children:
                        !l &&
                        (0, n.jsx)("progress", {
                          className: "rp-ui__seek-slider__buffer",
                          max: null === i.duration ? 1 : i.duration || 0,
                          value: u,
                          "aria-hidden": !0,
                        }),
                    }),
                    (0, n.jsxs)(i8, {
                      as: "div",
                      $size: 14,
                      $family: "tertiary",
                      $themecolor: "dark200",
                      children: [
                        (0, n.jsx)("span", { children: "Dodane przez:" }),
                        (0, n.jsxs)(i6, {
                          children: [
                            true &&
                              (0, n.jsx)(i7, {
                                children: (0, n.jsx)(iD(), {
                                  src: iH,
                                  alt: "forsenMODS",
                                  loading: "eager",
                                  width: 16,
                                  style: p,
                                }),
                              }),
                            (0, n.jsx)(nn, { children: i.user }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)(i0, { ...m }),
                  ],
                }),
              ],
            })
          },
          (e, t) =>
            iF()(e.video, t.video) &&
            e.active === t.active &&
            e.hasBeenPlayed === t.hasBeenPlayed
        )
      nr.displayName = "VideoCard"
      let nl = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-74e65637-0" })([
          "width:100%;",
        ]),
        no = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-74e65637-1" })(
          [
            "position:absolute;top:0;left:0;bottom:0;right:0;display:flex;justify-content:center;align-items:center;padding:15px;& > ",
            "{display:flex;align-items:center;}",
          ],
          y
        ),
        na = l.Ay.div.withConfig({ componentId: "sc-74e65637-2" })([
          "position:relative;width:38px;height:30px;margin-right:10px;",
        ]),
        ns = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-74e65637-3" })([
          "",
        ]),
        nc = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-74e65637-4" })(
          ["& > article{margin-bottom:15px;", "{margin-bottom:10px;}}"],
          (e) => {
            let { theme: t } = e
            return t.media.sm.max
          }
        ),
        nd = (0, s.memo)(() => {
          let { user: e } = (0, s.useContext)(H.Rs),
            {
              playlist: t,
              lastPlayedVideo: i,
              activeVideo: r,
            } = (0, s.useContext)(e$.B),
            { reorderVideo: l } = e8(),
            [o, a] = (0, s.useState)(t),
            [c, d] = (0, s.useState)(!1)
          ;(0, s.useEffect)(() => {
            c || a(t)
          }, [c, t])
          let u = (0, s.useCallback)(
            (e) => {
              if ((d(!1), !e.destination)) return
              let i = t.find((t) => tY(t, e.draggableId))
              if (i) {
                let n = ((e, t, i) => {
                  let n = e.findIndex((e) => tY(e, t))
                  return n !== i && (e.splice(i, 0, e.splice(n, 1)[0]), e)
                })(t, i, e.destination.index + 1)
                n && (l(i, e.destination.index + 1), a(n))
              }
            },
            [l, t]
          )
          return (0, n.jsx)(nl, {
            children: (0, n.jsx)(E.N, {
              mode: "wait",
              children:
                t.length > 0
                  ? (0, n.jsxs)(
                      ns,
                      {
                        initial: { opacity: 0, scale: 0.9 },
                        animate: { opacity: 1, scale: 1 },
                        exit: { opacity: 0, scale: 0.9 },
                        transition: {
                          duration: 0.3,
                          ease: [0.5, 0.32, 0.11, 1],
                        },
                        children: [
                          (0, n.jsxs)(nc, {
                            children: [
                              i &&
                                (0, n.jsx)(
                                  nr,
                                  { video: i, hasBeenPlayed: !0 },
                                  i.url[0].src
                                ),
                              r && (0, n.jsx)(nr, { active: !0, video: r }),
                            ],
                          }),
                          (0, n.jsx)(iB.JY, {
                            onDragStart: () => d(!0),
                            onDragEnd: u,
                            children: (0, n.jsx)(iB.gL, {
                              isDropDisabled: !(null == e ? void 0 : true),
                              droppableId: "playlist",
                              children: (t) =>
                                (0, n.jsxs)("div", {
                                  ...t.droppableProps,
                                  ref: t.innerRef,
                                  children: [
                                    o
                                      .filter((e) => !tY(e, r))
                                      .map((t, i) =>
                                        (0, n.jsx)(
                                          iB.sx,
                                          {
                                            isDragDisabled: !(null == e
                                              ? void 0
                                              : true),
                                            draggableId: t.url[0].src,
                                            index: i,
                                            children: (e) =>
                                              (0, n.jsx)("div", {
                                                ref: e.innerRef,
                                                ...e.draggableProps,
                                                ...e.dragHandleProps,
                                                style: {
                                                  ...e.draggableProps.style,
                                                  paddingBottom: "15px",
                                                },
                                                children: (0, n.jsx)(nr, {
                                                  video: t,
                                                }),
                                              }),
                                          },
                                          t.url[0].src
                                        )
                                      ),
                                    t.placeholder,
                                  ],
                                }),
                            }),
                          }),
                        ],
                      },
                      "playlist"
                    )
                  : (0, n.jsx)(
                      no,
                      {
                        initial: { opacity: 0, scale: 0.9 },
                        animate: { opacity: 1, scale: 1 },
                        exit: { opacity: 0, scale: 0.9 },
                        transition: {
                          duration: 0.3,
                          ease: [0.5, 0.32, 0.11, 1],
                        },
                        children: (0, n.jsxs)(y, {
                          children: [
                            (0, n.jsx)(na, {
                              children: (0, n.jsx)(iD(), {
                                src: iq,
                                quality: 90,
                                alt: "sadgers",
                                width: 36,
                              }),
                            }),
                            "Playlista jest pusta",
                          ],
                        }),
                      },
                      "empty-playlist"
                    ),
            }),
          })
        })
      nd.displayName = "Playlist"
      let nu = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-a1c81a55-0" })(
          [
            "width:100%;padding:16px;background:",
            ";border-radius:6px;margin-top:16px;cursor:",
            ";opacity:",
            ";border:2px solid ",
            ";transition:0.1s;&:hover{border-color:",
            ";}& + &{margin-top:16px;}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.dark400
          },
          (e) => {
            let { $disabled: t } = e
            return t ? "not-allowed" : "pointer"
          },
          (e) => {
            let { $disabled: t } = e
            return t ? 0.5 : 1
          },
          (e) => {
            let { theme: t } = e
            return t.colors.dark
          },
          (e) => {
            let { theme: t, $disabled: i } = e
            return i ? t.colors.dark : (0, c.e$)(String(t.colors.primary), 0.2)
          }
        ),
        np = l.Ay.div.withConfig({ componentId: "sc-a1c81a55-1" })([
          "display:flex;align-items:center;justify-content:space-between;",
        ]),
        nm = l.Ay.div.withConfig({ componentId: "sc-a1c81a55-2" })(
          [
            "display:flex;align-items:center;padding-right:20px;",
            "{line-height:1.1;}",
          ],
          f
        ),
        nh = l.Ay.div.withConfig({ componentId: "sc-a1c81a55-3" })(
          [
            "margin-right:16px;svg{width:36px;height:28px;fill:",
            ";path{fill:",
            ";}}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.white
          },
          (e) => {
            let { theme: t } = e
            return t.colors.white
          }
        ),
        nx = l.Ay.div.withConfig({ componentId: "sc-a1c81a55-4" })([
          "label > div{width:30px;height:30px;padding:6px;}",
        ]),
        ng = (e) => {
          let {
            heading: t,
            Icon: i,
            description: r,
            checked: l,
            inputVisible: o,
            value: a,
            placeholder: s,
            disabled: c = !1,
            onSave: d,
            toggle: u,
          } = e
          return (0, n.jsxs)(nu, {
            onClick: () => !c && u(),
            $disabled: c,
            children: [
              (0, n.jsxs)(np, {
                children: [
                  (0, n.jsxs)(nm, {
                    children: [
                      (0, n.jsx)(nh, { children: (0, n.jsx)(i, {}) }),
                      (0, n.jsxs)("div", {
                        children: [
                          (0, n.jsx)(w, { $margin: "6px", children: t }),
                          (0, n.jsx)(f, {
                            $size: 14,
                            $family: "tertiary",
                            $themecolor: "dark200",
                            children: r,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)(nx, {
                    children: (0, n.jsx)(tW, {
                      id: "",
                      checked: l,
                      label: "",
                      readOnly: !0,
                    }),
                  }),
                ],
              }),
              o &&
                (0, n.jsx)(R, {
                  name: t.toLowerCase(),
                  value: a,
                  placeholder: s,
                  onSave: d,
                }),
            ],
          })
        },
        nf = () => (0, n.jsx)(a.g, { icon: o.n2W }),
        nb = () => (0, n.jsx)(a.g, { icon: o.DN2 }),
        ny = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-d8ffe73f-0" })([
          "width:100%;",
        ]),
        nw = (0, s.memo)(() => {
          var e
          let { user: t } = (0, s.useContext)(H.Rs),
            {
              chatChannel: i,
              camChannel: r,
              chatVisible: l,
              camVisible: c,
              chatType: d,
              toggleChatVisibility: u,
              toggleCamVisibility: p,
              toggleChatType: m,
            } = (0, s.useContext)(e$.B),
            { setChatChannel: h, setCamChannel: x } = e8()
          return (0, n.jsxs)(ny, {
            children: [
              (0, n.jsxs)(y, {
                children: [
                  (0, n.jsx)(a.g, {
                    icon: o.BH7,
                    style: { marginRight: "8px" },
                  }),
                  "Ustawienia",
                ],
              }),
              (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)(ng, {
                    heading: "Czat",
                    description: "Włącz/wyłącz widoczność czatu",
                    Icon: nb,
                    toggle: u,
                    checked: l,
                    inputVisible: V.dS.includes(
                      null != (e = null == t ? void 0 : t.name) ? e : ""
                    ),
                    value: i,
                    placeholder: "Zmień czat",
                    onSave: h,
                  }),
                  (0, n.jsx)(ng, {
                    heading: "Typ czatu",
                    description:
                      "twitch" === d
                        ? "Zmień na czat alternatywny jeśli masz problemy z emotkami"
                        : "Zmień na czat Twitch",
                    Icon: () => (0, n.jsx)(a.g, { icon: o.Bep }),
                    toggle: m,
                    checked: "twitch" === d,
                    inputVisible: !1,
                    value: "",
                    placeholder: "",
                    onSave: () => {},
                  }),
                  (0, n.jsx)(ng, {
                    heading: "Kamera",
                    description: "Włącz/wyłącz widoczność kamery",
                    toggle: p,
                    Icon: nf,
                    checked: c,
                    disabled: !r,
                    inputVisible: !!(null == t ? void 0 : true),
                    value: r,
                    placeholder: "Zmień kamerę",
                    onSave: x,
                  }),
                ],
              }),
            ],
          })
        })
      nw.displayName = "Settings"
      let nv = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-87bfc021-0" })([
          "display:flex;flex-direction:column;flex:1;",
        ]),
        nj = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-87bfc021-1" })(
          [
            "padding:20px;border-top:1px solid ",
            ";background:",
            ";flex:1;",
            "{padding:25px 15px;}",
          ],
          (e) => {
            let { theme: t } = e
            return t.colors.dark
          },
          (e) => {
            let { theme: t } = e
            return t.gradients.body
          },
          (e) => {
            let { theme: t } = e
            return t.media.sm.max
          }
        ),
        nk = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-87bfc021-2" })(
          [
            "display:flex;margin-top:40px;width:100%;min-height:180px;grid-gap:40px;",
            "{min-height:100px;grid-gap:10px;margin-top:30px;}",
          ],
          (e) => {
            let { theme: t } = e
            return t.media.sm.max
          }
        ),
        nC = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-87bfc021-3" })([
          "position:relative;width:60%;",
        ]),
        nA = (0, l.Ay)(r.P.div).withConfig({ componentId: "sc-87bfc021-4" })([
          "position:relative;width:40%;",
        ]),
        nI = l.Ay.div.withConfig({ componentId: "sc-87bfc021-5" })([
          "padding-top:10px;margin-top:-10px;",
        ])
      function nS() {
        return (0, n.jsx)(tl, {
          children: (0, n.jsx)(tD, {
            children: (0, n.jsxs)(nv, {
              children: [
                (0, n.jsxs)(nj, {
                  children: [
                    (0, n.jsx)(is, {}),
                    (0, n.jsxs)(nk, {
                      className: "content-row",
                      children: [
                        (0, n.jsx)(nC, { children: (0, n.jsx)(nd, {}) }),
                        (0, n.jsx)(nA, {
                          children: (0, n.jsxs)(nI, {
                            children: [
                              (0, n.jsx)(ip, {}),
                              (0, n.jsx)(iU, {}),
                              (0, n.jsx)(eC, {}),
                              (0, n.jsx)(ea, {}),
                              (0, n.jsx)(nw, {}),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)(eL, {}),
              ],
            }),
          }),
        })
      }
    },
    69999: () => {},
  },
  (e) => {
    e.O(0, [805, 987, 145, 636, 593, 792], () => e((e.s = 16760))),
      (_N_E = e.O())
  },
])

import { jumpToLink, sendGA, mediaType, mountComponents } from "/static_material/denza/overseas-public/js/utils.js";
import { defineComponent, ref, watch, onBeforeUnmount, createElementBlock, openBlock, createBaseVNode, Fragment, renderList, toDisplayString, normalizeClass, createTextVNode, createCommentVNode, createVNode, createBlock, resolveDynamicComponent, withCtx, withDirectives, vShow, Transition, computed } from "/static_material/denza/overseas-public/js/vendor.js";
import { _export_sfc, IconClose, IconPlus, IconMinus } from "/static_material/denza/overseas-public/js/components.js";
const _hoisted_1$2 = { class: "footer-pc-container" };
const _hoisted_2$2 = { class: "footer-wrapper" };
const _hoisted_3$2 = { class: "left" };
const _hoisted_4$2 = ["srcset"];
const _hoisted_5$1 = ["srcset"];
const _hoisted_6$1 = ["src"];
const _hoisted_7$1 = { class: "right" };
const _hoisted_8$1 = { class: "title" };
const _hoisted_9$1 = ["onClick"];
const _hoisted_10$1 = { class: "footer-bottom" };
const _hoisted_11$1 = { class: "left" };
const _hoisted_12$1 = { class: "link-content top" };
const _hoisted_13$1 = ["onClick"];
const _hoisted_14$1 = { class: "link-content" };
const _hoisted_15$1 = ["onClick"];
const _hoisted_16$1 = { key: 1 };
const _hoisted_17$1 = { class: "right" };
const _hoisted_18$1 = { class: "footer-icon-item" };
const _hoisted_19$1 = ["data-src", "onClick"];
const _hoisted_20$1 = ["data-src"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "pc",
  props: {
    dataForm: {}
  },
  setup(__props) {
    const activePopupIndex = ref(-1);
    const showPopup = (index) => {
      if (activePopupIndex.value === index) {
        activePopupIndex.value = -1;
      } else {
        activePopupIndex.value = index;
      }
    };
    const handleClickJump = (title, data) => {
      if ("type" in data) {
        if (data.type === "text") return;
      }
      console.log("title: ", title);
      data.url && jumpToLink(data.url, { target: "target" in data ? data.target : "_self" });
      sendGA("click", "footer Component", `${title !== "" ? title + "-" : ""}${data.name}`);
    };
    const goto = (item) => {
      if (!item.url) return;
      jumpToLink(item.url, { target: item.target || "_self" });
      sendGA("click", "footer Component", item.label);
    };
    const handleClickOutside = (event) => {
      const popups = document.getElementsByClassName("concat-popup-container");
      const triggers = document.getElementsByClassName("img-icon");
      const isClickInsidePopup = Array.from(popups).some((popup) => popup.contains(event.target));
      const isClickOnTrigger = Array.from(triggers).some((trigger) => trigger.contains(event.target));
      if (!isClickInsidePopup && !isClickOnTrigger) {
        activePopupIndex.value = -1;
      }
    };
    watch(activePopupIndex, (newVal) => {
      if (newVal !== -1) {
        document.addEventListener("click", handleClickOutside, true);
      } else {
        document.removeEventListener("click", handleClickOutside, true);
      }
    });
    onBeforeUnmount(() => {
      document.removeEventListener("click", handleClickOutside, true);
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("div", _hoisted_3$2, [
            createBaseVNode("picture", null, [
              createBaseVNode("source", {
                media: "(min-width: 768px)",
                srcset: _ctx.dataForm.logoPc,
                sizes: ""
              }, null, 8, _hoisted_4$2),
              createBaseVNode("source", {
                media: "(max-width: 767px)",
                srcset: _ctx.dataForm.logoMob,
                sizes: ""
              }, null, 8, _hoisted_5$1),
              createBaseVNode("img", {
                class: "logo-img lazyload",
                src: _ctx.dataForm.logoPc,
                srcset: ""
              }, null, 8, _hoisted_6$1)
            ])
          ]),
          createBaseVNode("div", _hoisted_7$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dataForm.linkData, (group, idx) => {
              return openBlock(), createElementBlock("ul", {
                key: "group" + idx,
                class: "link-content"
              }, [
                createBaseVNode("div", _hoisted_8$1, toDisplayString(group.title), 1),
                (openBlock(true), createElementBlock(Fragment, null, renderList(group.list, (link, linkIdx) => {
                  return openBlock(), createElementBlock("li", {
                    key: "link" + linkIdx,
                    class: "link-item"
                  }, [
                    createBaseVNode("a", {
                      href: "javascript:void(0);",
                      onClick: ($event) => handleClickJump(group.title, link)
                    }, toDisplayString(link.name), 9, _hoisted_9$1)
                  ]);
                }), 128))
              ]);
            }), 128))
          ])
        ]),
        createBaseVNode("div", _hoisted_10$1, [
          createBaseVNode("div", _hoisted_11$1, [
            createBaseVNode("ul", _hoisted_12$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dataForm.bottomLinks, (item, idx) => {
                return openBlock(), createElementBlock("li", {
                  key: "item" + idx,
                  class: "link-item",
                  onClick: ($event) => handleClickJump("", item)
                }, [
                  createBaseVNode("a", null, toDisplayString(item.name), 1)
                ], 8, _hoisted_13$1);
              }), 128))
            ]),
            createBaseVNode("ul", _hoisted_14$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dataForm.subLinks, (item, idx) => {
                return openBlock(), createElementBlock("li", {
                  key: "item" + idx,
                  class: normalizeClass(["link-item", item.type]),
                  onClick: ($event) => handleClickJump("", item)
                }, [
                  item.type == "text" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createTextVNode(toDisplayString(item.name), 1)
                  ], 64)) : (openBlock(), createElementBlock("a", _hoisted_16$1, toDisplayString(item.name), 1))
                ], 10, _hoisted_15$1);
              }), 128))
            ]),

          ]),
          createBaseVNode("div", _hoisted_17$1, [
            createBaseVNode("ul", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList((_a = _ctx.dataForm) == null ? void 0 : _a.concat.list, (item, index) => {
                return openBlock(), createElementBlock("li", { key: index }, [
                  createBaseVNode("div", _hoisted_18$1, [
                    createBaseVNode("img", {
                      class: "img-icon lazyload",
                      "data-src": item.icon,
                      onClick: ($event) => item.type === "popup" ? showPopup(index) : goto(item)
                    }, null, 8, _hoisted_19$1),
                    item.type === "popup" ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: normalizeClass(["concat-popup-container", { active: index === activePopupIndex.value }])
                    }, [
                      createBaseVNode("img", {
                        src: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                        "data-src": item.img,
                        class: "lazyload",
                        alt: ""
                      }, null, 8, _hoisted_20$1)
                    ], 2)) : createCommentVNode("", true)
                  ])
                ]);
              }), 128)),
              // Denza DNA link on PC right side
              ((_a = _ctx.dataForm) == null ? void 0 : _a.dnaLink) ? (openBlock(), createElementBlock("li", {
                key: "dna-link",
                class: "dna-link",
                onClick: ($event) => handleClickJump("", { name: "Denza DNA", url: (_a = _ctx.dataForm) == null ? void 0 : _a.dnaLink })
              }, [
                createBaseVNode("a", null, "Denza DNA", 1)
              ], 8)) : createCommentVNode("", true),
              // Social icons on the right (PC)
              (openBlock(true), createElementBlock(Fragment, null, renderList(((_a = _ctx.dataForm) == null ? void 0 : _a.socialLinks) || [], (sitem, sidx) => {
                return openBlock(), createElementBlock("li", {
                  key: "social-right" + sidx,
                  class: "social-item"
                }, [
                  createBaseVNode("div", _hoisted_18$1, [
                    createBaseVNode("img", {
                      class: "img-icon lazyload",
                      "data-src": sitem.icon,
                      onClick: ($event) => goto(sitem),
                      alt: sitem.name
                    }, null, 8, _hoisted_19$1)
                  ])
                ]);
              }), 128))
            ])
          ])
        ]),
        createBaseVNode("div", {
          class: normalizeClass(["footer-mask", { active: activePopupIndex.value !== -1 }])
        }, null, 2)
      ]);
    };
  }
});
const Pc = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-9359ba26"]]);
const _hoisted_1$1 = { class: "footer-dialog-container" };
const _hoisted_2$1 = { class: "footer-main" };
const _hoisted_3$1 = { class: "footer-main-content" };
const _hoisted_4$1 = ["src"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "dialog",
  props: {
    data: {}
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const close = () => {
      console.log("close....");
      emit("close");
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("img", {
              src: (_a = _ctx.data) == null ? void 0 : _a.img
            }, null, 8, _hoisted_4$1),
            createBaseVNode("div", null, toDisplayString((_b = _ctx.data) == null ? void 0 : _b.label), 1),
            createVNode(IconClose, {
              class: "icon-close",
              onClick: close
            })
          ])
        ]),
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "footer-mask" }, null, -1))
      ]);
    };
  }
});
const FooterDialog = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-4526066a"]]);
const _hoisted_1 = { class: "footer-mob-container" };
const _hoisted_2 = { class: "logo" };
const _hoisted_3 = ["srcset"];
const _hoisted_4 = ["srcset"];
const _hoisted_5 = ["src"];
const _hoisted_6 = { class: "footer-section" };
const _hoisted_7 = ["onClick"];
const _hoisted_8 = { class: "section-item-title" };
const _hoisted_9 = { class: "transition-body" };
const _hoisted_10 = { class: "transition-body-content" };
const _hoisted_11 = ["onClick"];
const _hoisted_12 = { class: "icon-wrapper" };
const _hoisted_13 = ["data-src", "onClick"];
const _hoisted_14 = { class: "bottom-link" };
const _hoisted_15 = { class: "link-content" };
const _hoisted_16 = ["onClick"];
const _hoisted_17 = { class: "sub-link-content link-content" };
const _hoisted_18 = ["onClick"];
const _hoisted_19 = { class: "sub-text-content link-content" };
const _hoisted_20 = {
  key: 0,
  class: "link-item sub-link-item"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "mob",
  props: {
    dataForm: {}
  },
  setup(__props) {
    const activeIndex = ref(0);
    const handleActiveClick = (index) => {
      activeIndex.value = index;
    };
    const handleClose = () => {
      console.log("close....");
      activePopupIndex.value = -1;
    };
    const activePopupIndex = ref(-1);
    const activePopData = ref(null);
    const showPopup = (item, index) => {
      if (activePopupIndex.value === index) {
        activePopupIndex.value = -1;
      } else {
        activePopupIndex.value = index;
        activePopData.value = item;
      }
    };
    const goto = (item) => {
      if (!item.url) return;
      sendGA("click", "footer Component", item.label);
      jumpToLink(item.url, { target: item.target || "_self" });
    };
    const handleClickJump = (title, data) => {
      if ("type" in data) {
        if (data.type === "text") return;
      }
      sendGA("click", "footer Component", `${title !== "" ? title + "-" : ""}${data.name}`);
      data.url && jumpToLink(data.url, { target: "target" in data ? data.target : "_self" });
    };
    const beforeEnter = (el) => {
      if (el instanceof HTMLElement) {
        el.style.height = "0";
      }
    };
    const enter = (el, done) => {
      console.log(el, "enter");
      if (el instanceof HTMLElement) {
        const height = el.scrollHeight;
        el.style.height = `${height}px`;
        setTimeout(() => {
          el.style.height = "auto";
          done();
        }, 500);
      }
    };
    const leave = (el, done) => {
      if (el instanceof HTMLElement) {
        const height = el.scrollHeight;
        el.style.height = `${height}px`;
        void el.offsetWidth;
        el.style.height = "0";
        setTimeout(done, 500);
      }
    };
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("picture", null, [
              createBaseVNode("source", {
                media: "(min-width: 768px)",
                srcset: _ctx.dataForm.logoPc,
                sizes: ""
              }, null, 8, _hoisted_3),
              createBaseVNode("source", {
                media: "(max-width: 767px)",
                srcset: _ctx.dataForm.logoMob,
                sizes: ""
              }, null, 8, _hoisted_4),
              createBaseVNode("img", {
                class: "logo-img lazyload",
                src: _ctx.dataForm.logoPc,
                srcset: ""
              }, null, 8, _hoisted_5)
            ])
          ]),
          createBaseVNode("div", _hoisted_6, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dataForm.linkData, (module, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "section-item",
                onClick: ($event) => handleActiveClick(index)
              }, [
                createBaseVNode("div", _hoisted_8, [
                  createTextVNode(toDisplayString(module.title) + " ", 1),
                  createBaseVNode("span", {
                    class: normalizeClass(["collapse-icon", activeIndex.value !== index ? "can-open" : ""])
                  }, [
                    (openBlock(), createBlock(resolveDynamicComponent(index !== activeIndex.value ? IconPlus : IconMinus)))
                  ], 2)
                ]),
                createVNode(Transition, {
                  name: "height-transition",
                  onBeforeEnter: beforeEnter,
                  onEnter: enter,
                  onLeave: leave
                }, {
                  default: withCtx(() => [
                    withDirectives(createBaseVNode("div", _hoisted_9, [
                      createBaseVNode("div", _hoisted_10, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(module.list, (item, idx) => {
                          return openBlock(), createElementBlock("div", {
                            key: idx,
                            class: "content-item",
                            onClick: ($event) => handleClickJump(module.title, item)
                          }, toDisplayString(item.name), 9, _hoisted_11);
                        }), 128))
                      ])
                    ], 512), [
                      [vShow, activeIndex.value === index]
                    ])
                  ]),
                  _: 2
                }, 1024)
              ], 8, _hoisted_7);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_12, [
            createBaseVNode("ul", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList((_a = _ctx.dataForm) == null ? void 0 : _a.concat.list, (item, idx) => {
                return openBlock(), createElementBlock("li", { key: idx }, [
                  createBaseVNode("img", {
                    class: "img-icon lazyload",
                    "data-src": item.icon,
                    onClick: ($event) => item.type === "popup" ? showPopup(item, idx) : goto(item)
                  }, null, 8, _hoisted_13)
                ]);
              }), 128))
            ])
          ]),
          createBaseVNode("div", _hoisted_14, [
            createBaseVNode("ul", _hoisted_15, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dataForm.bottomLinks, (item, idx) => {
                return openBlock(), createElementBlock("li", {
                  key: "item" + idx,
                  class: "link-item",
                  onClick: ($event) => handleClickJump("", item)
                }, [
                  createBaseVNode("a", null, toDisplayString(item.name), 1)
                ], 8, _hoisted_16);
              }), 128)),
              // mobile: show Denza DNA in bottom links when provided
              ((_a = _ctx.dataForm) == null ? void 0 : _a.dnaLink) ? (openBlock(), createElementBlock("li", {
                key: "dna-link",
                class: "link-item",
                onClick: ($event) => handleClickJump("", { name: "Denza DNA", url: (_a = _ctx.dataForm) == null ? void 0 : _a.dnaLink })
              }, [
                createBaseVNode("a", null, "Denza DNA", 1)
              ], 8)) : createCommentVNode("", true)
            ]),
            createBaseVNode("ul", _hoisted_17, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dataForm.subLinks, (item, idx) => {
                return openBlock(), createElementBlock(Fragment, {
                  key: "sub-item" + idx
                }, [
                  item.type != "text" ? (openBlock(), createElementBlock("li", {
                    key: 0,
                    class: "link-item sub-link-item",
                    onClick: ($event) => handleClickJump("", item)
                  }, [
                    createBaseVNode("a", null, toDisplayString(item.name), 1)
                  ], 8, _hoisted_18)) : createCommentVNode("", true)
                ], 64);
              }), 128))
            ]),
            createBaseVNode("ul", _hoisted_19, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dataForm.subLinks, (item, idx) => {
                return openBlock(), createElementBlock(Fragment, {
                  key: "sub-item" + idx
                }, [
                  item.type == "text" ? (openBlock(), createElementBlock("li", _hoisted_20, [
                    createBaseVNode("a", null, toDisplayString(item.name), 1)
                  ])) : createCommentVNode("", true)
                ], 64);
              }), 128))
            ]),
            // mobile social icons
            createBaseVNode("ul", { class: "social-links" }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(((_a = _ctx.dataForm) == null ? void 0 : _a.socialLinks) || [], (item, idx) => {
                return openBlock(), createElementBlock("li", {
                  key: "mob-social" + idx,
                  class: "social-item",
                  onClick: ($event) => goto(item)
                }, [
                  createBaseVNode("img", {
                    class: "lazyload",
                    src: item.icon,
                    alt: item.name
                  }, null, 8)
                ], 8);
              }), 128))
            ])
          ])
        ]),
        activePopupIndex.value != -1 ? (openBlock(), createBlock(FooterDialog, {
          key: 0,
          data: activePopData.value,
          onClose: handleClose
        }, null, 8, ["data"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const Mob = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ce39c947"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "layout",
  props: {
    dataForm: {}
  },
  setup(__props) {
    const props = __props;
    const deviceComponent = computed(
      () => mediaType.value === "mob" ? Mob : Pc
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(deviceComponent.value), {
        "data-form": props.dataForm
      }, null, 8, ["data-form"]);
    };
  }
});
mountComponents(".footer-mount-root-container", _sfc_main);

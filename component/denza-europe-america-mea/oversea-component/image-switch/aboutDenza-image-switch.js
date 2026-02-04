import { defineComponent, Swiper, Mousewheel, ref, onMounted, ScrollMagic, createElementBlock, openBlock, createCommentVNode, unref, createBaseVNode, toDisplayString, Fragment, renderList, normalizeClass, createBlock } from "https://denzabahrain.com/static_material/denza/overseas-public/js/vendor.js";
import { mountComponents } from "https://denzabahrain.com/static_material/denza/overseas-public/js/utils.js";
const _hoisted_1 = { id: "b07-section" };
const _hoisted_2 = {
  key: 0,
  class: "swiper my-mob-swiper"
};
const _hoisted_3 = { class: "bg-title" };
const _hoisted_4 = { class: "big-title" };
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = ["data-qt-name", "src"];
const _hoisted_7 = { class: "swiper-wrapper" };
const _hoisted_8 = ["src", "alt"];
const _hoisted_9 = {
  key: 1,
  class: "sticky sticky-container"
};
const _hoisted_10 = { class: "text-container" };
const _hoisted_11 = ["data-qt-name", "src"];
const _hoisted_12 = { class: "text-slide-container" };
const _hoisted_13 = ["onMouseover", "onMouseout"];
const _hoisted_14 = ["src", "alt"];
const _hoisted_15 = ["onMounseover", "onMouseout"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "imageSwitchComponent",
  props: {
    dataForm: {}
  },
  setup(__props) {
    Swiper.use([Mousewheel]);
    const props = __props;
    const mySwiperRef = ref();
    const b07Data = ref(props.dataForm || []);
    const isMob = ref(window.innerWidth < 768);
    const swiper = ref({});
    const activeSlide = ref(0);
    const showText = (index2) => {
      document.querySelector(".text-container-" + index2).style.display = "flex";
      document.querySelector(".text-container-" + index2).style.flexDirection = "column";
      activeSlide.value = index2;
    };
    const hideText = (index2) => {
      document.querySelector(".text-container-" + index2).style.display = "none";
    };
    onMounted(() => {
      if (mySwiperRef.value) {
        return;
      }
      swiper.value = new Swiper(mySwiperRef.value, {
        direction: "vertical",
        mousewheel: {
          thresholdTime: 1500,
          releaseOnEdges: true
        },
        on: {
          init: (swiper2) => {
            swiper2.mousewheel.disable();
          },
          slideChange: (params) => {
            activeSlide.value = params.realIndex;
          }
        }
      });
      setTimeout(() => {
        b07Data.value = props.dataForm;
        setTimeout(() => {
          if (!isMob.value) {
            var controller = new ScrollMagic.Controller();
            new ScrollMagic.Scene({
              triggerElement: "#b07-section",
              triggerHook: 0,
              duration: "100%"
            }).on("enter", () => {
              swiper.value.mousewheel.enable();
            }).on("leave", () => {
              swiper.value.mousewheel.disable();
            }).on("progress", (ev) => {
              if (ev.progress === 1) {
                swiper.value.mousewheel.disable();
              }
            }).addTo(controller);
          } else {
            swiper.value = new Swiper(".my-mob-swiper", {
              navigation: {
                nextEl: ".my-mob-swiper .swiper-button-next",
                prevEl: ".my-mob-swiper .swiper-button-prev"
              },
              on: {
                init: function() {
                },
                slideChangeTransitionStart: (params) => {
                  activeSlide.value = params.realIndex;
                }
              }
            });
          }
        }, 200);
      }, 200);
    });
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        unref(isMob) && unref(b07Data).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, toDisplayString(unref(b07Data)[unref(activeSlide)].descTitle), 1),
            createBaseVNode("div", {
              class: "sub-title",
              innerHTML: unref(b07Data)[unref(activeSlide)].desc.map((item) => item.description).join()
            }, null, 8, _hoisted_5)
          ]),
          createBaseVNode("img", {
            class: "bg-img lazyload exp-image",
            "data-qt-name": unref(b07Data)[unref(activeSlide)].imgMob,
            src: unref(b07Data)[unref(activeSlide)].imgMob,
            alt: ""
          }, null, 8, _hoisted_6),
          createBaseVNode("div", _hoisted_7, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(b07Data), (s, sInd) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass("swiper-slide slide-" + (sInd + 1))
              }, [
                createBaseVNode("div", null, [
                  createBaseVNode("img", {
                    src: s.icon,
                    alt: s.title
                  }, null, 8, _hoisted_8),
                  createBaseVNode("p", null, toDisplayString(s.title), 1)
                ])
              ], 2);
            }), 256))
          ]),
          _cache[0] || (_cache[0] = createBaseVNode("div", { class: "swiper-button-next" }, null, -1)),
          _cache[1] || (_cache[1] = createBaseVNode("div", { class: "swiper-button-prev" }, null, -1))
        ])) : createCommentVNode("", true),
        !unref(isMob) ? (openBlock(), createElementBlock("div", _hoisted_9, [
          createBaseVNode("div", _hoisted_10, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(b07Data), (t, tInd) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass("text-container-" + tInd)
              }, [
                createBaseVNode("span", null, toDisplayString(unref(b07Data)[tInd].descTitle), 1),
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(b07Data)[tInd].desc, (d, dInd) => {
                  return openBlock(), createElementBlock("p", { key: dInd }, toDisplayString(d.description), 1);
                }), 128))
              ], 2);
            }), 256))
          ]),
          createBaseVNode("div", {
            ref_key: "mySwiperRef",
            ref: mySwiperRef,
            class: "swiper mySwiper"
          }, [
            createBaseVNode("img", {
              class: "bg-img lazyload exp-image",
              "data-qt-name": (_a = unref(b07Data)[unref(activeSlide)]) == null ? void 0 : _a.img,
              src: (_b = unref(b07Data)[unref(activeSlide)]) == null ? void 0 : _b.img,
              alt: ""
            }, null, 8, _hoisted_11),
            createBaseVNode("div", _hoisted_12, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(b07Data), (s, sInd) => {
                return openBlock(), createElementBlock("div", {
                  key: sInd,
                  onMouseover: ($event) => showText(sInd),
                  onMouseout: ($event) => hideText(sInd)
                }, [
                  createBaseVNode("img", {
                    src: s.icon,
                    alt: s.title
                  }, null, 8, _hoisted_14),
                  createBaseVNode("p", null, toDisplayString(s.title), 1),
                  createBaseVNode("div", {
                    class: "cover",
                    onMounseover: ($event) => showText(sInd),
                    onMouseout: ($event) => hideText(sInd)
                  }, null, 40, _hoisted_15)
                ], 40, _hoisted_13);
              }), 128))
            ])
          ], 512)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "layout",
  props: {
    dataForm: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        "data-form": props.dataForm
      }, null, 8, ["data-form"]);
    };
  }
});
mountComponents(".image-switch", _sfc_main);

import { initCardScrollAnim, sendGA, mediaType, mountComponents } from "https://denzabahrain.com/static_material/denza/overseas-public/js/utils.js";
import { defineComponent, ref, onMounted, watch, createElementBlock, openBlock, createBaseVNode, Fragment, renderList, toDisplayString, createVNode, ElDialog, withCtx, Swiper, Pagination, Navigation, computed, createBlock, resolveDynamicComponent } from "https://denzabahrain.com/static_material/denza/overseas-public/js/vendor.js";
import { _export_sfc } from "https://denzabahrain.com/static_material/denza/overseas-public/jshttps://denzabahrain.com/components.js";
const _hoisted_1$2 = ["src"];
const _hoisted_2 = ["src", "onClick"];
const _hoisted_3 = { class: "text-content" };
const _hoisted_4 = ["textContent"];
const _hoisted_5 = ["textContent"];
const _hoisted_6 = ["onClick"];
const _hoisted_7 = ["textContent"];
const _hoisted_8 = ["textContent"];
const _hoisted_9 = ["textContent"];
const _hoisted_10 = { class: "swiper-wrapper popup-swiper-wrapper" };
const _hoisted_11 = ["srcset"];
const _hoisted_12 = ["src"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "detailCard",
  props: {
    dataForm: {
      type: Object,
      default: () => ({})
    },
    executeAnimation: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const detailCardWrapRef = ref(null);
    onMounted(() => {
      if (props.executeAnimation && detailCardWrapRef && detailCardWrapRef.value) {
        initCardScrollAnim(detailCardWrapRef.value, ".card-item");
      }
    });
    const popupDialogVisible = ref(false);
    const curCardItemIndex = ref(0);
    const openPopup = (index) => {
      curCardItemIndex.value = index;
      popupDialogVisible.value = true;
      sendGA("click", "detailPopup Component", `The NO.${index + 1} detail card open.`);
    };
    const popupDialogRef = ref(null);
    const popupOpenAnimation = () => {
      var _a;
      const popup = (_a = popupDialogRef.value) == null ? void 0 : _a.querySelector(".el-overlay-dialog");
      if (popup && typeof popup.scrollTo === "function") {
        popup.scrollTo({ top: 0 });
        popup.classList.add("popup-scrollIntoView");
        popup.classList.remove("popup-scrollOutofView");
      }
    };
    const popupCloseAnimation = () => {
      var _a;
      const popup = (_a = popupDialogRef.value) == null ? void 0 : _a.querySelector(".el-overlay-dialog");
      if (popup && popup.classList) {
        popup.classList.remove("popup-scrollIntoView");
        popup.classList.add("popup-scrollOutofView");
      }
    };
    watch(
      () => popupDialogVisible.value,
      (v) => {
        if (v) {
          document.querySelector("body").style.overflowY = "hidden";
        } else {
          document.querySelector("body").style.overflowY = "auto";
        }
      }
    );
    const swiperContainers = ref([]);
    const initializedSwipers = ref([]);
    const swiperInstances = ref([]);
    const initSwiper = (index) => {
      const swiperContainer = swiperContainers.value[index];
      if (!swiperContainer) return;
      if (!initializedSwipers.value[index]) {
        swiperInstances.value[index] = {
          swiper: new Swiper(swiperContainer, {
            modules: [Pagination, Navigation],
            // 添加模块
            slidesPerView: 1,
            speed: 600,
            spaceBetween: 20,
            autoHeight: true,
            pagination: {
              el: ".popup-swiper-pagination",
              clickable: true
            },
            navigation: {
              nextEl: ".popup-swiper-button-next",
              prevEl: ".popup-swiper-button-prev"
            }
          })
        };
        initializedSwipers.value[index] = true;
      }
    };
    const scrollToFirstSwiperSlide = (index) => {
      var _a;
      if (swiperInstances.value[index]) {
        (_a = swiperInstances.value[index].swiper) == null ? void 0 : _a.slideTo(0);
      }
    };
    const setMobPopupPosition = (index) => {
      if (window.innerWidth <= 767) {
        setTimeout(() => {
          const dialogs = document.querySelectorAll(".detailCard .el-overlay .el-overlay-dialog .el-dialog");
          if (dialogs.length < props.dataForm.detailCardList.length) {
            setTimeout(() => {
              dialogs.forEach((dialog) => {
                console.log("++++++++++++++++++++");
                console.log("dialog.clientHeight < window.innerHeight: ", dialog.clientHeight < window.innerHeight);
                if (dialog.clientHeight < window.innerHeight) {
                  dialog.style.marginTop = window.innerHeight - dialog.clientHeight + "px";
                }
              });
            }, 0);
          } else {
            if (dialogs[index].clientHeight < window.innerHeight) {
              dialogs[index].style.marginTop = window.innerHeight - dialogs[index].clientHeight + "px";
            }
          }
        }, 0);
      }
    };
    const removeMobPopupPosition = () => {
      const dialogs = document.querySelectorAll(".detailCard .el-overlay .el-overlay-dialog .el-dialog");
      dialogs.forEach((dialog) => {
        setTimeout(() => {
          dialog.style.marginTop = "15vh";
        }, 300);
      });
    };
    return (_ctx, _cache) => {
      const _component_el_dialog = ElDialog;
      return openBlock(), createElementBlock("div", {
        ref_key: "detailCardWrapRef",
        ref: detailCardWrapRef,
        class: "detailCard responsive_layout flex-between-center"
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.dataForm.detailCardList, (item, index) => {
          return openBlock(), createElementBlock("div", {
            key: index,
            class: "card-item"
          }, [
            createBaseVNode("img", {
              class: "bgImage",
              src: item.img,
              alt: ""
            }, null, 8, _hoisted_1$2),
            createBaseVNode("img", {
              class: "closeIcon no-event-click_ouside",
              src: __props.dataForm.learnMoreIcon,
              alt: "",
              onClick: ($event) => openPopup(index)
            }, null, 8, _hoisted_2),
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", {
                class: "card-title",
                textContent: toDisplayString(item.title)
              }, null, 8, _hoisted_4),
              createBaseVNode("div", {
                class: "card-desc",
                textContent: toDisplayString(item.desc)
              }, null, 8, _hoisted_5)
            ])
          ]);
        }), 128)),
        createBaseVNode("div", {
          ref_key: "popupDialogRef",
          ref: popupDialogRef,
          style: { "position": "absolute" }
        }, [
          createVNode(_component_el_dialog, {
            modelValue: popupDialogVisible.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => popupDialogVisible.value = $event),
            "append-to-body": false,
            onOpen: _cache[1] || (_cache[1] = ($event) => {
              popupOpenAnimation();
              initSwiper(curCardItemIndex.value);
              setMobPopupPosition(curCardItemIndex.value);
            }),
            onClose: _cache[2] || (_cache[2] = ($event) => {
              popupCloseAnimation();
              scrollToFirstSwiperSlide(curCardItemIndex.value);
              removeMobPopupPosition();
            })
          }, {
            header: withCtx(({ close }) => [
              createBaseVNode("div", {
                class: "my-header",
                onClick: close
              }, _cache[3] || (_cache[3] = [
                createBaseVNode("svg", {
                  width: "24.000000",
                  height: "24.000000",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink"
                }, [
                  createBaseVNode("desc", null, "Created with Pixso."),
                  createBaseVNode("defs", null, [
                    createBaseVNode("clipPath", { id: "clip6560_70989" }, [
                      createBaseVNode("rect", {
                        id: "cross",
                        width: "24.000000",
                        height: "24.000000",
                        transform: "translate(24.000000 0.000000) rotate(90.000000)",
                        fill: "white",
                        "fill-opacity": "0"
                      })
                    ])
                  ]),
                  createBaseVNode("g", { "clip-path": "url(#clip6560_70989)" }, [
                    createBaseVNode("path", {
                      id: "Vector",
                      d: "M17.18 16.43L12.37 11.62L7.56 6.81M7.56 16.43L12.37 11.62M12.37 11.62L17.18 6.81",
                      stroke: "#1A1D25",
                      "stroke-opacity": "1.000000",
                      "stroke-width": "1.500000",
                      "stroke-linejoin": "round",
                      "stroke-linecap": "round"
                    })
                  ])
                ], -1)
              ]), 8, _hoisted_6)
            ]),
            default: withCtx(() => [
              createBaseVNode("div", {
                class: "popupContent-title",
                textContent: toDisplayString(__props.dataForm.detailCardList[curCardItemIndex.value].popupContent.title)
              }, null, 8, _hoisted_7),
              createBaseVNode("div", {
                class: "popupContent-subTitle",
                textContent: toDisplayString(__props.dataForm.detailCardList[curCardItemIndex.value].popupContent.subTitle)
              }, null, 8, _hoisted_8),
              createBaseVNode("div", {
                class: "popupContent-desc",
                textContent: toDisplayString(__props.dataForm.detailCardList[curCardItemIndex.value].popupContent.desc)
              }, null, 8, _hoisted_9),
              createBaseVNode("div", {
                ref: (el) => swiperContainers.value[curCardItemIndex.value] = el,
                class: "swiper popup-swiper"
              }, [
                createBaseVNode("div", _hoisted_10, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.dataForm.detailCardList[curCardItemIndex.value].popupContent.imgList, (item2, index2) => {
                    return openBlock(), createElementBlock("div", {
                      key: index2,
                      class: "swiper-slide popup-swiper-slide"
                    }, [
                      createBaseVNode("picture", null, [
                        createBaseVNode("source", {
                          media: "(max-width: 767px)",
                          srcset: item2.mobSrc
                        }, null, 8, _hoisted_11),
                        createBaseVNode("img", {
                          src: item2.pcSrc,
                          alt: ""
                        }, null, 8, _hoisted_12)
                      ])
                    ]);
                  }), 128))
                ]),
                _cache[4] || (_cache[4] = createBaseVNode("div", { class: "swiper-operation popup-swiper-operation" }, [
                  createBaseVNode("div", { class: "swiper-button-next popup-swiper-button-next" }),
                  createBaseVNode("div", { class: "swiper-button-prev popup-swiper-button-prev" }),
                  createBaseVNode("div", { class: "swiper-pagination popup-swiper-pagination" })
                ], -1))
              ], 512)
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 512)
      ], 512);
    };
  }
});
const DetailCard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-c8d8df85"]]);
const _hoisted_1$1 = { class: "home-page-detail-popup-pc-container" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "pc",
  props: {
    dataForm: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(DetailCard, {
          "data-form": _ctx.dataForm,
          "execute-animation": true
        }, null, 8, ["data-form"])
      ]);
    };
  }
});
const Pc = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-19db57bc"]]);
const _hoisted_1 = { class: "home-page-detail-popup-mob-container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "mob",
  props: {
    dataForm: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(DetailCard, { "data-form": _ctx.dataForm }, null, 8, ["data-form"])
      ]);
    };
  }
});
const Mob = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-87998b4e"]]);
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
mountComponents(".home-page-detail-popup-mount-root-container", _sfc_main);

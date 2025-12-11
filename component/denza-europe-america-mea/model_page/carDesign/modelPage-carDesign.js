import { initSwiperTextAnim, initCardScrollAnim, sendGA, initTextAnim, mediaType, mountComponents } from "/static_material/denza/overseas-public/js/utils.js";
import { defineComponent, ref, onMounted, Swiper, Navigation, Pagination, onUnmounted, createElementBlock, openBlock, createBaseVNode, createCommentVNode, Fragment, renderList, normalizeClass, toDisplayString, createVNode, normalizeStyle, gsapWithCSS, ScrollTrigger, computed, watch, withCtx, ElDrawer, createBlock, resolveDynamicComponent } from "/static_material/denza/overseas-public/js/vendor.js";
import { IconArrowRightEu, _export_sfc, IconViewMore, IconCloseDrawer } from "/static_material/denza/overseas-public/js/components.js";
const _hoisted_1$1 = ["id"];
const _hoisted_2$1 = { class: "swiper-wrapper" };
const _hoisted_3$1 = ["data-index"];
const _hoisted_4$1 = { class: "slide-wrapper" };
const _hoisted_5$1 = ["src", "poster"];
const _hoisted_6$1 = ["data-src", "alt"];
const _hoisted_7$1 = {
  class: "title",
  "data-animate": "true"
};
const _hoisted_8$1 = ["innerHTML"];
const _hoisted_9$1 = { class: "slide-btns flex" };
const _hoisted_10$1 = ["href", "onClick"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "pc",
  props: {
    dataForm: {}
  },
  setup(__props) {
    const props = __props;
    const activeIndex = ref(0);
    const swiperContainerRef = ref(null);
    const swiperPrev = ref(null);
    const swiperNext = ref(null);
    const isEnd = ref(false);
    let swiperRoot;
    const swiperPaginationRef = ref(null);
    const handleClickGA = (i, txt) => {
      sendGA("click", "carDesign Component", "swiper-" + i + "-" + txt);
    };
    onMounted(() => {
      if (!swiperContainerRef.value) return;
      swiperRoot = new Swiper(swiperContainerRef.value, {
        modules: [Navigation, Pagination],
        slidesPerView: "auto",
        speed: 500,
        watchOverflow: true,
        spaceBetween: 16,
        slideToClickedSlide: true,
        navigation: {
          prevEl: swiperPrev.value,
          nextEl: swiperNext.value
        },
        pagination: {
          el: swiperPaginationRef.value,
          clickable: true
        },
        on: {
          slideChangeTransitionStart: function() {
            activeIndex.value = swiperRoot.activeIndex;
            isEnd.value = swiperRoot.isEnd;
          }
        }
      });
      if (swiperContainerRef.value) {
        initSwiperTextAnim({
          container: swiperContainerRef.value,
          swiperInstance: swiperRoot
        });
        initCardScrollAnim(swiperContainerRef.value, ".swiper-slide");
      }
    });
    onUnmounted(() => {
      if (swiperRoot) {
        swiperRoot.destroy();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: _ctx.dataForm.anchorName,
        class: "model-page-car-design-pc-container",
        style: normalizeStyle({ backgroundColor: _ctx.dataForm.backBlack ? "#000" : "#fff" })
      }, [
        createBaseVNode("div", {
          ref_key: "swiperContainerRef",
          ref: swiperContainerRef,
          class: "swiper-container"
        }, [
          createBaseVNode("div", _hoisted_2$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.dataForm.dataList, (o, i) => {
              return openBlock(), createElementBlock("div", {
                key: i,
                class: normalizeClass(["swiper-slide", { full: _ctx.dataForm.dataList.length === 1 }]),
                "data-index": i
              }, [
                createBaseVNode("div", _hoisted_4$1, [
                  o.mediaType === "video" ? (openBlock(), createElementBlock("video", {
                    key: 0,
                    src: o.videoPc,
                    poster: o.imgPc,
                    loop: "",
                    muted: "",
                    autoplay: "",
                    preload: "preload",
                    playsinline: "",
                    "webkit-playsinline": "",
                    "x5-playsinline": "",
                    "x5-video-player-type": "h5",
                    crossorigin: "anonymous"
                  }, null, 8, _hoisted_5$1)) : (openBlock(), createElementBlock("img", {
                    key: 1,
                    class: "lazyload",
                    "data-src": o.imgPc,
                    alt: o.title
                  }, null, 8, _hoisted_6$1)),
                  createBaseVNode("h2", _hoisted_7$1, toDisplayString(o.title), 1),
                  createBaseVNode("p", {
                    class: "desc",
                    "data-animate": "true",
                    innerHTML: o.desc
                  }, null, 8, _hoisted_8$1),
                  createBaseVNode("div", _hoisted_9$1, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(o.btnList, (b, j) => {
                      return openBlock(), createElementBlock("a", {
                        key: j,
                        class: normalizeClass(["btn", { primary: b.isPrimary }]),
                        href: b.url,
                        onClick: ($event) => handleClickGA(i + 1, b.txt)
                      }, toDisplayString(b.txt), 11, _hoisted_10$1);
                    }), 128))
                  ])
                ]),
                createBaseVNode("div", {
                  ref_for: true,
                  ref_key: "swiperPrev",
                  ref: swiperPrev,
                  class: normalizeClass(["swiper-prev", { disabled: activeIndex.value === 0 }])
                }, [
                  createVNode(IconArrowRightEu)
                ], 2),
                createBaseVNode("div", {
                  ref_for: true,
                  ref_key: "swiperNext",
                  ref: swiperNext,
                  class: normalizeClass(["swiper-next", { disabled: isEnd.value || _ctx.dataForm.dataList.length < 2 }])
                }, [
                  createVNode(IconArrowRightEu)
                ], 2)
              ], 10, _hoisted_3$1);
            }), 128))
          ]),
          _ctx.dataForm.dataList.length > 1 ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref_key: "swiperPaginationRef",
            ref: swiperPaginationRef,
            class: "swiper-pagination"
          }, null, 512)) : createCommentVNode("", true)
        ], 512)
      ], 12, _hoisted_1$1);
    };
  }
});
const Pc = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1f4d2841"]]);
const _hoisted_1 = ["id"];
const _hoisted_2 = { class: "content-wrap" };
const _hoisted_3 = { class: "content" };
const _hoisted_4 = {
  class: "title",
  "data-animate": "true"
};
const _hoisted_5 = {
  class: "desc",
  "data-animate": "true"
};
const _hoisted_6 = ["href", "onClick"];
const _hoisted_7 = ["src", "poster"];
const _hoisted_8 = ["data-src", "alt"];
const _hoisted_9 = { class: "title" };
const _hoisted_10 = { class: "desc" };
const _hoisted_11 = ["src", "poster"];
const _hoisted_12 = ["data-src", "alt"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "mob",
  props: {
    dataForm: {}
  },
  setup(__props) {
    const props = __props;
    const containerRef = ref(null);
    gsapWithCSS.registerPlugin(ScrollTrigger);
    let scrollTriggerInstance = null;
    const fixedRef = ref(null);
    const textRef = ref(null);
    const drawer = ref(false);
    const addFixed = () => {
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: containerRef.value,
        start: "top 50%",
        end: "bottom bottom",
        // markers: true,
        toggleClass: {
          targets: fixedRef.value,
          className: "fixedClass"
        },
        onEnter: () => {
          if (fixedRef.value) {
            playEntryAnimation();
          }
        }
      });
    };
    const playEntryAnimation = () => {
      if (!fixedRef.value) return;
      const tl = gsapWithCSS.timeline();
      gsapWithCSS.set(textRef.value, {
        paddingLeft: 0,
        opacity: 0,
        x: 10
        // 稍微向左偏移，准备动画
      });
      tl.fromTo(
        fixedRef.value,
        {
          scale: 0,
          opacity: 0,
          width: "56px",
          height: "56px",
          borderRadius: "50%"
        },
        {
          scale: 1.1,
          opacity: 1,
          duration: 0.2,
          ease: "power2.out"
        }
      ).to(fixedRef.value, {
        scale: 1,
        duration: 0.2,
        ease: "back.out(1.5)"
      });
      tl.to(fixedRef.value, {
        width: "232px",
        borderRadius: "32px",
        duration: 0.4,
        ease: "cubic-bezier(0.3, 1.2, 0.3, 1)",
        delay: 0.2
      });
      tl.to(textRef.value, {
        opacity: 1,
        paddingLeft: "12px",
        x: 0,
        duration: 0.3,
        ease: "power2.out",
        delay: 0.1
        // 在拉伸动画开始后0.1秒开始显示文本
      }, "-=0.2");
    };
    const showMore = () => {
      drawer.value = true;
      sendGA("click", "carDesign Component", props.dataForm.learnMoreText);
    };
    const showMoreData = computed(() => props.dataForm.dataList.slice(1));
    const handleClickGA = (txt) => {
      sendGA("click", "carDesign Component", txt);
    };
    onUnmounted(() => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    });
    watch(drawer, (newVal) => {
      handleScrollLock(newVal);
    });
    const handleScrollLock = (isLocked) => {
      const body = document.body;
      if (isLocked) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        body.style.top = `-${scrollTop}px`;
        body.style.position = "fixed";
        body.style.width = "100%";
      } else {
        const scrollTop = parseInt(body.style.top || "0");
        body.style.position = "";
        body.style.top = "";
        body.style.width = "";
        window.scrollTo(0, Math.abs(scrollTop));
      }
    };
    onMounted(() => {
      addFixed();
      containerRef.value && initTextAnim(containerRef.value);
    });
    return (_ctx, _cache) => {
      const _component_el_drawer = ElDrawer;
      return openBlock(), createElementBlock("div", {
        id: _ctx.dataForm.anchorName,
        ref_key: "containerRef",
        ref: containerRef,
        class: "model-page-car-design-mob-container"
      }, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("h2", _hoisted_4, toDisplayString(props.dataForm.dataList[0].title), 1),
            createBaseVNode("p", _hoisted_5, toDisplayString(props.dataForm.dataList[0].desc), 1),
            createBaseVNode("div", {
              class: normalizeClass(["btns", _ctx.dataForm.mobBtnsRow ? "btns-row" : ""])
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(props.dataForm.dataList[0].btnList, (b, j) => {
                return openBlock(), createElementBlock("a", {
                  key: j,
                  class: normalizeClass(["btn", { primary: b.isPrimary }]),
                  href: b.url,
                  onClick: ($event) => handleClickGA(b.txt)
                }, toDisplayString(b.txt), 11, _hoisted_6);
              }), 128))
            ], 2)
          ]),
          props.dataForm.dataList[0].mediaType === "video" ? (openBlock(), createElementBlock("video", {
            key: 0,
            src: props.dataForm.dataList[0].videoPc,
            poster: props.dataForm.dataList[0].imgPc,
            loop: "",
            muted: "",
            autoplay: "",
            preload: "preload",
            playsinline: "",
            "webkit-playsinline": "",
            "x5-playsinline": "",
            "x5-video-player-type": "h5",
            crossorigin: "anonymous"
          }, null, 8, _hoisted_7)) : (openBlock(), createElementBlock("img", {
            key: 1,
            class: "lazyload",
            "data-src": props.dataForm.dataList[0].imgMob,
            alt: props.dataForm.dataList[0].title
          }, null, 8, _hoisted_8))
        ]),
        _ctx.dataForm.dataList.length > 1 ? (openBlock(), createElementBlock("div", {
          key: 0,
          ref_key: "fixedRef",
          ref: fixedRef,
          class: "view-more-wrap"
        }, [
          createBaseVNode("span", {
            ref_key: "textRef",
            ref: textRef,
            class: "learn-more-text"
          }, toDisplayString(_ctx.dataForm.learnMoreText), 513),
          createVNode(IconViewMore, { onClick: showMore })
        ], 512)) : createCommentVNode("", true),
        createVNode(_component_el_drawer, {
          modelValue: drawer.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => drawer.value = $event),
          direction: "btt",
          size: "70%",
          "show-close": false,
          "modal-class": "drawer-modal"
        }, {
          header: withCtx(({ close }) => [
            createVNode(IconCloseDrawer, { onClick: close }, null, 8, ["onClick"])
          ]),
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(showMoreData.value, (v, i) => {
              return openBlock(), createElementBlock("div", {
                key: i,
                class: "drawer-content"
              }, [
                createBaseVNode("div", null, [
                  createBaseVNode("h2", _hoisted_9, toDisplayString(v.title), 1),
                  createBaseVNode("p", _hoisted_10, toDisplayString(v.desc), 1),
                  v.mediaType === "video" ? (openBlock(), createElementBlock("video", {
                    key: 0,
                    src: v.videoPc,
                    poster: v.imgPc,
                    loop: "",
                    muted: "",
                    autoplay: "",
                    preload: "preload",
                    playsinline: "",
                    "webkit-playsinline": "",
                    "x5-playsinline": "",
                    "x5-video-player-type": "h5",
                    crossorigin: "anonymous"
                  }, null, 8, _hoisted_11)) : (openBlock(), createElementBlock("img", {
                    key: 1,
                    class: "lazyload",
                    "data-src": v.imgMob,
                    alt: v.title
                  }, null, 8, _hoisted_12))
                ])
              ]);
            }), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 8, _hoisted_1);
    };
  }
});
const Mob = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-07bd4530"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "layout",
  props: {
    dataForm: {}
  },
  setup(__props) {
    const props = __props;
    const deviceComponent = computed(() => mediaType.value === "mob" ? Mob : Pc);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(deviceComponent.value), {
        "data-form": props.dataForm
      }, null, 8, ["data-form"]);
    };
  }
});
mountComponents(".model-page-car-design-mount-root-container", _sfc_main);

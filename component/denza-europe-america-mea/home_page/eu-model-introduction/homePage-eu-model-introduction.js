import { defineComponent, ref, onMounted, Swiper, createElementBlock, openBlock, createCommentVNode, createBaseVNode, Fragment, renderList, normalizeClass, toDisplayString, unref, gsapWithCSS, ScrollTrigger, Navigation, Pagination, nextTick, onUnmounted, createVNode, computed, createBlock, resolveDynamicComponent } from "/static_material/denza/overseas-public/js/vendor.js";
import { initSwiperTextAnim, initCardScrollAnim, sendGA, mediaType, mountComponents } from "/static_material/denza/overseas-public/js/utils.js";
import { _export_sfc, IconSwiperRoundedArrowLeft, IconSwiperRoundedArrowRight } from "/static_material/denza/overseas-public/js/components.js";
const _hoisted_1$2 = { class: "container" };
const _hoisted_2$2 = {
  key: 0,
  class: "pagination flex flex-center"
};
const _hoisted_3$1 = ["onClick"];
const _hoisted_4$1 = { class: "swiper-wrapper" };
const _hoisted_5$1 = ["data-index"];
const _hoisted_6$1 = { class: "slide-wrapper" };
const _hoisted_7$1 = { class: "slide-content" };
const _hoisted_8$1 = { class: "text" };
const _hoisted_9$1 = {
  class: "title",
  "data-animate": "true"
};
const _hoisted_10$1 = ["innerHTML"];
const _hoisted_11$1 = ["data-src", "alt"];
const _hoisted_12$1 = { class: "slide-btns flex flex-center" };
const _hoisted_13 = ["href", "onClick"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Pc",
  props: {
    dataForm: {}
  },
  setup(__props) {
    const props = __props;
    const hideNav = ref(props.dataForm.hideNav);
    const activeIndex = ref(0);
    const swiperContainer = ref(null);
    let swiperRoot;
    const handleSwitch = (index, title) => {
      if (index === activeIndex.value) return;
      swiperRoot.slideTo(index);
      sendGA("click", "eu-model-introduction Component", `tab ${title}`);
    };
    onMounted(() => {
      if (!swiperContainer.value) return;
      const slideLength = props.dataForm.modelList.length > 1 ? "auto" : 1;
      swiperRoot = new Swiper(swiperContainer.value, {
        slidesPerView: slideLength,
        speed: 500,
        watchOverflow: true,
        on: {
          slideChangeTransitionStart: function() {
            activeIndex.value = swiperRoot.activeIndex;
          }
        }
      });
      if (swiperContainer.value) {
        initSwiperTextAnim({
          container: swiperContainer.value,
          swiperInstance: swiperRoot
        });
        initCardScrollAnim(swiperContainer.value, ".swiper-slide");
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        !hideNav.value ? (openBlock(), createElementBlock("ul", _hoisted_2$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.dataForm.modelList, (o, i) => {
            return openBlock(), createElementBlock("li", {
              key: i,
              class: normalizeClass(["pagination-item", { active: activeIndex.value === i }]),
              onClick: ($event) => handleSwitch(i, o.title)
            }, toDisplayString(o.title), 11, _hoisted_3$1);
          }), 128))
        ])) : createCommentVNode("", true),
        createBaseVNode("div", {
          ref_key: "swiperContainer",
          ref: swiperContainer,
          class: "swiper-container"
        }, [
          createBaseVNode("div", _hoisted_4$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.dataForm.modelList, (o, i) => {
              return openBlock(), createElementBlock("div", {
                key: i,
                class: normalizeClass(["swiper-slide", { active: activeIndex.value === i, "slide-one": props.dataForm.modelList.length == 1 }]),
                "data-index": i
              }, [
                createBaseVNode("div", _hoisted_6$1, [
                  createBaseVNode("div", _hoisted_7$1, [
                    createBaseVNode("p", _hoisted_8$1, toDisplayString(o.text), 1),
                    createBaseVNode("h2", _hoisted_9$1, toDisplayString(o.title), 1),
                    createBaseVNode("p", {
                      class: "desc",
                      "data-animate": "true",
                      innerHTML: o.desc
                    }, null, 8, _hoisted_10$1)
                  ]),
                  createBaseVNode("img", {
                    class: "lazyload",
                    "data-src": o.imgPc,
                    alt: o.title
                  }, null, 8, _hoisted_11$1),
                  createBaseVNode("div", _hoisted_12$1, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(o.btnList, (b, j) => {
                      return openBlock(), createElementBlock(Fragment, { key: j }, [
                        b.txt ? (openBlock(), createElementBlock("a", {
                          key: 0,
                          class: normalizeClass(["btn", { primary: b.isPrimary }]),
                          href: b.url,
                          onClick: ($event) => unref(sendGA)("click", "eu-model-introduction Component", `No.${i + 1} ${b.txt}`)
                        }, toDisplayString(b.txt), 11, _hoisted_13)) : createCommentVNode("", true)
                      ], 64);
                    }), 128))
                  ])
                ])
              ], 10, _hoisted_5$1);
            }), 128))
          ])
        ], 512)
      ]);
    };
  }
});
const Pc = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-25181801"]]);
const _hoisted_1$1 = {
  key: 0,
  class: "pagination-wrap"
};
const _hoisted_2$1 = ["onClick"];
const _hoisted_3 = { class: "swiper-wrapper" };
const _hoisted_4 = ["data-index"];
const _hoisted_5 = { class: "slide-wrapper" };
const _hoisted_6 = { class: "slide-content" };
const _hoisted_7 = { class: "text" };
const _hoisted_8 = {
  class: "title",
  "data-animate": "true"
};
const _hoisted_9 = {
  class: "desc",
  "data-animate": "true"
};
const _hoisted_10 = ["data-src", "alt"];
const _hoisted_11 = ["href", "onClick"];
const _hoisted_12 = { class: "swiper-controller-wrap" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Mob",
  props: {
    dataForm: {}
  },
  setup(__props) {
    const props = __props;
    const activeIndex = ref(0);
    const swiperPagination = ref(null);
    const swiperPrev = ref(null);
    const swiperNext = ref(null);
    const paginationRef = ref(null);
    const swiperContainer = ref(null);
    let swiperRoot;
    const hideNav = ref(props.dataForm.hideNav);
    const handleSwitch = (index, title) => {
      if (index === activeIndex.value) return;
      swiperRoot == null ? void 0 : swiperRoot.slideTo(index);
      nextTick(() => scrollToActivePaginationItem());
      sendGA("click", "eu-model-introduction Component", `tab ${title}`);
    };
    const scrollToActivePaginationItem = () => {
      var _a, _b;
      const activeElement = (_a = paginationRef.value) == null ? void 0 : _a.querySelector(".active");
      const parentElement = (_b = activeElement == null ? void 0 : activeElement.parentElement) == null ? void 0 : _b.parentElement;
      if (activeElement && parentElement) {
        const targetRect = activeElement.getBoundingClientRect();
        const parentRect = parentElement.getBoundingClientRect();
        const scrollLeft = parentElement.scrollLeft + (targetRect.left - parentRect.left) - parentRect.width / 2 + targetRect.width / 2;
        parentElement.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    };
    const containerRef = ref(null);
    gsapWithCSS.registerPlugin(ScrollTrigger);
    let scrollTriggerInstance = null;
    const fixedRef = ref(null);
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
      const tl = gsapWithCSS.timeline({
        onComplete: () => {
          if (fixedRef.value) {
            const activeBullet2 = fixedRef.value.querySelector(".swiper-pagination-bullet-active");
            if (activeBullet2) {
              const progressBar = activeBullet2.querySelector("div");
              if (progressBar) {
                activeBullet2.removeChild(progressBar);
              }
            }
            const paginationBullets2 = fixedRef.value.querySelectorAll(".swiper-pagination-bullet");
            paginationBullets2.forEach((bullet) => {
              gsapWithCSS.set(bullet, {
                clearProps: "all"
                // 清除所有由GSAP修改的样式属性
              });
            });
          }
        }
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
      const paginationBullets = fixedRef.value.querySelectorAll(".swiper-pagination-bullet");
      if (paginationBullets.length > 0) {
        tl.fromTo(
          paginationBullets,
          {
            backgroundColor: "rgb(194, 200, 211)",
            scale: 0.5,
            opacity: 0
          },
          {
            width: "8px",
            backgroundColor: "rgb(194, 200, 211)",
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.08,
            ease: "power2.out",
            delay: 0.4
          }
        );
      }
      const activeBullet = fixedRef.value.querySelector(".swiper-pagination-bullet-active");
      if (activeBullet) {
        const progressBar = document.createElement("div");
        progressBar.style.position = "absolute";
        progressBar.style.top = "0";
        progressBar.style.left = "0";
        progressBar.style.height = "100%";
        progressBar.style.width = "100%";
        progressBar.style.backgroundColor = "inherit";
        progressBar.style.borderRadius = "inherit";
        progressBar.style.transformOrigin = "left center";
        activeBullet.appendChild(progressBar);
        tl.fromTo(
          progressBar,
          {
            width: "16px",
            scaleX: 0,
            opacity: 0,
            animationOrigin: "left"
          },
          {
            width: "16px",
            backgroundColor: "rgb(26, 29, 37)",
            scaleX: 1,
            opacity: 1,
            duration: 0.3,
            ease: "power2.inout",
            delay: 0.7
          }
        );
      }
    };
    onMounted(() => {
      addFixed();
      if (!swiperContainer.value) return;
      const slideLength = props.dataForm.modelList.length > 1 ? "auto" : 1;
      swiperRoot = new Swiper(swiperContainer.value, {
        modules: [Navigation, Pagination],
        slidesPerView: slideLength,
        speed: 300,
        watchOverflow: true,
        pagination: {
          el: swiperPagination.value,
          clickable: true
        },
        navigation: {
          prevEl: swiperPrev.value,
          nextEl: swiperNext.value
        },
        on: {
          slideChange: () => {
            activeIndex.value = swiperRoot.activeIndex;
            nextTick(scrollToActivePaginationItem);
          }
        }
      });
      initSwiperTextAnim({
        container: swiperContainer.value,
        swiperInstance: swiperRoot
      });
    });
    onUnmounted(() => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "containerRef",
        ref: containerRef,
        class: normalizeClass(["container", { "slide-one": props.dataForm.modelList.length == 1 }])
      }, [
        !hideNav.value ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
          createBaseVNode("ul", {
            ref_key: "paginationRef",
            ref: paginationRef,
            class: "pagination flex"
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.dataForm.modelList, (o, i) => {
              return openBlock(), createElementBlock("li", {
                key: i,
                class: normalizeClass(["pagination-item", { active: activeIndex.value === i }]),
                onClick: ($event) => handleSwitch(i, o.title)
              }, toDisplayString(o.title), 11, _hoisted_2$1);
            }), 128))
          ], 512)
        ])) : createCommentVNode("", true),
        createBaseVNode("div", {
          ref_key: "swiperContainer",
          ref: swiperContainer,
          class: "swiper-container"
        }, [
          createBaseVNode("div", _hoisted_3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.dataForm.modelList, (o, i) => {
              return openBlock(), createElementBlock("div", {
                key: i,
                class: normalizeClass(["swiper-slide", { active: activeIndex.value === i }]),
                "data-index": i
              }, [
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("div", _hoisted_6, [
                    createBaseVNode("p", _hoisted_7, toDisplayString(o.text), 1),
                    createBaseVNode("h2", _hoisted_8, toDisplayString(o.title), 1),
                    createBaseVNode("p", _hoisted_9, toDisplayString(o.desc), 1)
                  ]),
                  createBaseVNode("img", {
                    class: "lazyload",
                    "data-src": o.imgMob,
                    alt: o.title
                  }, null, 8, _hoisted_10),
                  createBaseVNode("div", {
                    class: normalizeClass(["slide-btns flex", { column: o.isBtnColumn }])
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(o.btnList, (b, j) => {
                      return openBlock(), createElementBlock(Fragment, { key: j }, [
                        b.txt ? (openBlock(), createElementBlock("a", {
                          key: 0,
                          class: normalizeClass(["btn", { primary: b.isPrimary }]),
                          href: b.url,
                          onClick: ($event) => unref(sendGA)("click", "eu-model-introduction Component", `No.${i + 1} ${b.txt}`)
                        }, toDisplayString(b.txt), 11, _hoisted_11)) : createCommentVNode("", true)
                      ], 64);
                    }), 128))
                  ], 2)
                ])
              ], 10, _hoisted_4);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_12, [
            createBaseVNode("div", {
              ref_key: "fixedRef",
              ref: fixedRef,
              class: "swiper-controller"
            }, [
              createBaseVNode("div", {
                ref_key: "swiperPrev",
                ref: swiperPrev,
                class: "swiper-button-prev"
              }, [
                createVNode(IconSwiperRoundedArrowLeft)
              ], 512),
              createBaseVNode("div", {
                ref_key: "swiperPagination",
                ref: swiperPagination,
                class: "swiper-pagination"
              }, null, 512),
              createBaseVNode("div", {
                ref_key: "swiperNext",
                ref: swiperNext,
                class: "swiper-button-next"
              }, [
                createVNode(IconSwiperRoundedArrowRight)
              ], 512)
            ], 512)
          ])
        ], 512)
      ], 2);
    };
  }
});
const Mob = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-66288b80"]]);
const _hoisted_1 = { class: "eu-model-introduction" };
const _hoisted_2 = { class: "responsive_layout" };
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
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          (openBlock(), createBlock(resolveDynamicComponent(deviceComponent.value), {
            "data-form": props.dataForm
          }, null, 8, ["data-form"]))
        ])
      ]);
    };
  }
});
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f76012cb"]]);
mountComponents("#home-eu-model-introduction", Layout);

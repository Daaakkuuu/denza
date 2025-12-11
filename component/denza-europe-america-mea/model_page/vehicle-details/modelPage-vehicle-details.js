import { defineComponent, ref, onMounted, Swiper, Navigation, createElementBlock, openBlock, createBaseVNode, Fragment, renderList, normalizeClass, toDisplayString, createVNode, createCommentVNode, Pagination, gsapWithCSS, ScrollTrigger, onUnmounted, withDirectives, vShow, nextTick, computed, createBlock, resolveDynamicComponent } from "/static_material/denza/overseas-public/js/vendor.js";
import { sendGA, mediaType, mountComponents } from "/static_material/denza/overseas-public/js/utils.js";
import { IconSwiperEllipticalArrowRight, _export_sfc, IconSwiperRoundedArrowLeft, IconSwiperRoundedArrowRight } from "/static_material/denza/overseas-public/js/components.js";
const _hoisted_1$2 = { class: "pagination flex flex-center" };
const _hoisted_2$1 = ["onClick"];
const _hoisted_3$1 = { class: "swiper-wrapper" };
const _hoisted_4$1 = { class: "slide-wrapper" };
const _hoisted_5$1 = { class: "slide-content" };
const _hoisted_6$1 = {
  key: 0,
  class: "title"
};
const _hoisted_7$1 = ["src"];
const _hoisted_8$1 = ["innerHTML"];
const _hoisted_9$1 = { class: "type" };
const _hoisted_10$1 = ["src"];
const _hoisted_11$1 = ["src"];
const _hoisted_12$1 = ["data-src", "alt"];
const _hoisted_13$1 = { class: "slide-btns flex flex-center" };
const _hoisted_14$1 = ["href", "onClick"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Pc",
  props: {
    dataForm: {}
  },
  setup(__props) {
    const props = __props;
    const activeIndex = ref(0);
    const swiperContainer = ref(null);
    const swiperPrev = ref(null);
    const swiperNext = ref(null);
    const isEnd = ref(false);
    let swiperRoot;
    const handleSwitch = (index, title) => {
      if (index === activeIndex.value) return;
      swiperRoot.slideTo(index);
      sendGA("click", "vehicleDetails Component", title);
    };
    const handleClickGA = (index, title) => {
      sendGA("click", "vehicleDetails Component", `No.${index + 1}-${title}`);
    };
    onMounted(() => {
      if (!swiperContainer.value) return;
      swiperRoot = new Swiper(swiperContainer.value, {
        modules: [Navigation],
        slidesPerView: "auto",
        speed: 500,
        watchOverflow: true,
        spaceBetween: 16,
        navigation: {
          prevEl: swiperPrev.value,
          nextEl: swiperNext.value
        },
        on: {
          slideChangeTransitionStart: function() {
            activeIndex.value = swiperRoot.activeIndex;
            isEnd.value = swiperRoot.isEnd;
          }
        }
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["container", _ctx.dataForm.isBlackbg ? "black" : ""])
      }, [
        createBaseVNode("ul", _hoisted_1$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.dataForm.dataList, (o, i) => {
            return openBlock(), createElementBlock("li", {
              key: i,
              class: normalizeClass(["pagination-item", { active: activeIndex.value === i }]),
              onClick: ($event) => handleSwitch(i, o.title)
            }, toDisplayString(o.title), 11, _hoisted_2$1);
          }), 128))
        ]),
        createBaseVNode("div", {
          ref_key: "swiperContainer",
          ref: swiperContainer,
          class: "swiper-container"
        }, [
          createBaseVNode("div", {
            ref_key: "swiperPrev",
            ref: swiperPrev,
            class: normalizeClass(["swiper-prev", { disabled: activeIndex.value === 0 }])
          }, [
            createVNode(IconSwiperEllipticalArrowRight)
          ], 2),
          createBaseVNode("div", _hoisted_3$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.dataForm.dataList, (o, i) => {
              return openBlock(), createElementBlock("div", {
                key: i,
                class: normalizeClass(["swiper-slide", { active: activeIndex.value === i }])
              }, [
                createBaseVNode("div", _hoisted_4$1, [
                  createBaseVNode("div", _hoisted_5$1, [
                    !o.titleImg ? (openBlock(), createElementBlock("h2", _hoisted_6$1, toDisplayString(o.title), 1)) : createCommentVNode("", true),
                    o.titleImg ? (openBlock(), createElementBlock("img", {
                      key: 1,
                      class: "title-img",
                      src: o.titleImg,
                      alt: ""
                    }, null, 8, _hoisted_7$1)) : createCommentVNode("", true),
                    o.desc ? (openBlock(), createElementBlock("p", {
                      key: 2,
                      class: "desc",
                      innerHTML: o.desc
                    }, null, 8, _hoisted_8$1)) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_9$1, [
                      o.typeDm ? (openBlock(), createElementBlock("img", {
                        key: 0,
                        class: "type-img",
                        src: o.typeDm,
                        alt: ""
                      }, null, 8, _hoisted_10$1)) : createCommentVNode("", true),
                      o.typeEv ? (openBlock(), createElementBlock("img", {
                        key: 1,
                        class: "type-img",
                        src: o.typeEv,
                        alt: ""
                      }, null, 8, _hoisted_11$1)) : createCommentVNode("", true)
                    ])
                  ]),
                  createBaseVNode("img", {
                    class: "lazyload",
                    "data-src": o.imgPc,
                    alt: o.title
                  }, null, 8, _hoisted_12$1),
                  createBaseVNode("div", _hoisted_13$1, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(o.btnList, (b, j) => {
                      return openBlock(), createElementBlock("a", {
                        key: j,
                        class: normalizeClass(["btn", { primary: b.isPrimary }]),
                        href: b.url,
                        onClick: ($event) => handleClickGA(i, b.txt)
                      }, toDisplayString(b.txt), 11, _hoisted_14$1);
                    }), 128))
                  ])
                ])
              ], 2);
            }), 128))
          ]),
          createBaseVNode("div", {
            ref_key: "swiperNext",
            ref: swiperNext,
            class: normalizeClass(["swiper-next", { disabled: isEnd.value }])
          }, [
            createVNode(IconSwiperEllipticalArrowRight)
          ], 2)
        ], 512)
      ], 2);
    };
  }
});
const Pc = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-bdb66d9f"]]);
const _hoisted_1$1 = { class: "pagination-wrap" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { class: "swiper-wrapper" };
const _hoisted_4 = { class: "slide-wrapper" };
const _hoisted_5 = { class: "slide-content" };
const _hoisted_6 = {
  key: 0,
  class: "title"
};
const _hoisted_7 = ["src"];
const _hoisted_8 = { class: "type" };
const _hoisted_9 = ["src"];
const _hoisted_10 = ["src"];
const _hoisted_11 = ["data-src", "alt"];
const _hoisted_12 = { class: "slide-btns flex" };
const _hoisted_13 = ["href", "onClick"];
const _hoisted_14 = ["innerHTML"];
const _hoisted_15 = { class: "swiper-controller-wrap" };
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
    const scrollToActivePaginationItem = () => {
      nextTick(() => {
        var _a, _b;
        const activeElement = (_a = paginationRef.value) == null ? void 0 : _a.querySelector(".active");
        const parentElement = (_b = activeElement == null ? void 0 : activeElement.parentElement) == null ? void 0 : _b.parentElement;
        if (activeElement && parentElement) {
          const targetRect = activeElement.getBoundingClientRect();
          const parentRect = parentElement.getBoundingClientRect();
          const scrollLeft = parentElement.scrollLeft + (targetRect.left - parentRect.left) - parentRect.width / 2 + targetRect.width / 2;
          parentElement.scrollTo({
            left: scrollLeft,
            behavior: "smooth"
          });
        }
      });
    };
    const handleSwitch = (index, title) => {
      if (index === activeIndex.value) return;
      swiperRoot.slideTo(index);
      scrollToActivePaginationItem();
      sendGA("click", "vehicleDetails Component", title);
    };
    const handleClickGA = (index, title) => {
      sendGA("click", "vehicleDetails Component", `No.${index + 1}-${title}`);
    };
    onMounted(() => {
      addFixed();
      if (!swiperContainer.value) return;
      swiperRoot = new Swiper(swiperContainer.value, {
        modules: [Navigation, Pagination],
        slidesPerView: "auto",
        speed: 500,
        watchOverflow: true,
        spaceBetween: 16,
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
            scrollToActivePaginationItem();
          }
        }
      });
    });
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
            backgroundColor: !props.dataForm.isBlackbg ? "rgb(194, 200, 211)" : "rgba(92, 96, 106, 1)",
            scale: 0.5,
            opacity: 0
          },
          {
            width: "8px",
            backgroundColor: !props.dataForm.isBlackbg ? "rgb(194, 200, 211)" : "rgba(92, 96, 106, 1)",
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
            backgroundColor: !props.dataForm.isBlackbg ? "rgb(26, 29, 37)" : "rgba(245, 247, 250, 1)",
            scaleX: 1,
            opacity: 1,
            duration: 0.3,
            ease: "power2.inout",
            delay: 0.7
          }
        );
      }
    };
    onUnmounted(() => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "containerRef",
        ref: containerRef,
        class: normalizeClass(["container", _ctx.dataForm.isBlackbg ? "black" : ""])
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("ul", {
            ref_key: "paginationRef",
            ref: paginationRef,
            class: "pagination flex"
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.dataForm.dataList, (o, i) => {
              return openBlock(), createElementBlock("li", {
                key: i,
                class: normalizeClass(["pagination-item", { active: activeIndex.value === i }]),
                onClick: ($event) => handleSwitch(i, o.title)
              }, toDisplayString(o.title), 11, _hoisted_2);
            }), 128))
          ], 512)
        ]),
        createBaseVNode("div", {
          ref_key: "swiperContainer",
          ref: swiperContainer,
          class: "swiper-container"
        }, [
          createBaseVNode("div", _hoisted_3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.dataForm.dataList, (o, i) => {
              return openBlock(), createElementBlock("div", {
                key: i,
                class: normalizeClass(["swiper-slide", { active: activeIndex.value === i }])
              }, [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, [
                    !o.titleImg ? (openBlock(), createElementBlock("h2", _hoisted_6, toDisplayString(o.title), 1)) : createCommentVNode("", true),
                    o.titleImg ? (openBlock(), createElementBlock("img", {
                      key: 1,
                      class: "title-img",
                      src: o.titleImg,
                      alt: ""
                    }, null, 8, _hoisted_7)) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_8, [
                      o.typeDm ? (openBlock(), createElementBlock("img", {
                        key: 0,
                        class: "type-img",
                        src: o.typeDm,
                        alt: ""
                      }, null, 8, _hoisted_9)) : createCommentVNode("", true),
                      o.typeEv ? (openBlock(), createElementBlock("img", {
                        key: 1,
                        class: "type-img",
                        src: o.typeEv,
                        alt: ""
                      }, null, 8, _hoisted_10)) : createCommentVNode("", true)
                    ])
                  ]),
                  createBaseVNode("img", {
                    class: "lazyload",
                    "data-src": o.imgMob,
                    alt: o.title
                  }, null, 8, _hoisted_11),
                  createBaseVNode("div", _hoisted_12, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(o.btnList, (b, j) => {
                      return openBlock(), createElementBlock("a", {
                        key: j,
                        class: normalizeClass(["btn", { primary: b.isPrimary }]),
                        href: b.url,
                        onClick: ($event) => handleClickGA(i, b.txt)
                      }, toDisplayString(b.txt), 11, _hoisted_13);
                    }), 128))
                  ])
                ]),
                o.desc ? (openBlock(), createElementBlock("p", {
                  key: 0,
                  class: "desc",
                  innerHTML: o.desc
                }, null, 8, _hoisted_14)) : createCommentVNode("", true)
              ], 2);
            }), 128))
          ]),
          withDirectives(createBaseVNode("div", _hoisted_15, [
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
          ], 512), [
            [vShow, !props.dataForm.isShowMobPagination]
          ])
        ], 512)
      ], 2);
    };
  }
});
const Mob = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-23da0473"]]);
const _hoisted_1 = { class: "responsive_layout" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "layout",
  props: {
    dataForm: {}
  },
  setup(__props) {
    const props = __props;
    const deviceComponent = computed(() => mediaType.value === "mob" ? Mob : Pc);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vehicle-details", _ctx.dataForm.isBlackbg ? "vehicle-details-black" : ""])
      }, [
        createBaseVNode("div", _hoisted_1, [
          (openBlock(), createBlock(resolveDynamicComponent(deviceComponent.value), {
            "data-form": props.dataForm
          }, null, 8, ["data-form"]))
        ])
      ], 2);
    };
  }
});
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dcadadd1"]]);
mountComponents("#mode-vehicle-details", Layout);

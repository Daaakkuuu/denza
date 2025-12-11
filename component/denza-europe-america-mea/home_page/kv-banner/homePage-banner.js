import { defineComponent, ref, onMounted, Swiper, Navigation, Pagination, createElementBlock, openBlock, createBaseVNode, createCommentVNode, withDirectives, Fragment, renderList, unref, normalizeClass, toDisplayString, createBlock, vShow, createStaticVNode } from "/static_material/denza/overseas-public/js/vendor.js";
import { initSwiperTextAnim, mediaType, sendGA, mountComponents } from "/static_material/denza/overseas-public/js/utils.js";
import { IconVideoPlay, IconVideoPause, IconMute, IconAuto, _export_sfc } from "/static_material/denza/overseas-public/js/components.js";
const _hoisted_1 = { class: "home_banner_wrapper swiper-wrapper" };
const _hoisted_2 = ["data-index"];
const _hoisted_3 = { class: "banner-slide-source" };
const _hoisted_4 = ["src", "alt"];
const _hoisted_5 = ["src", "poster"];
const _hoisted_6 = {
  "data-animate": "true",
  class: "content-wrapper"
};
const _hoisted_7 = {
  key: 0,
  "data-animate": "true",
  class: "text"
};
const _hoisted_8 = ["src", "alt"];
const _hoisted_9 = {
  key: 2,
  class: "title",
  "data-animate": "true"
};
const _hoisted_10 = {
  key: 3,
  class: "description",
  "data-animate": "true"
};
const _hoisted_11 = ["href", "onClick"];
const _hoisted_12 = {
  key: 0,
  class: "media-controller"
};
const _hoisted_13 = ["onClick"];
const _hoisted_14 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "layout",
  props: {
    dataForm: {}
  },
  setup(__props) {
    const props = __props;
    const swiperRef = ref(null);
    const swiperPaginationRef = ref(null);
    const swiperPrevBtnRef = ref(null);
    const swiperNextBtnRef = ref(null);
    const isEnd = ref(false);
    const isBeginning = ref(true);
    let swiperRoot;
    const videoRefs = ref([]);
    const videoStates = ref([]);
    const muteStates = ref([]);
    const setVideoRef = (el, index) => {
      while (videoRefs.value.length <= index) {
        videoRefs.value.push(null);
      }
      videoRefs.value[index] = el;
    };
    const togglePlay = (index) => {
      const videoEl = videoRefs.value[index];
      if (!videoEl) return;
      if (videoEl.paused) {
        videoEl.play();
        videoStates.value[index] = true;
        sendGA("click", "kv-banner Component", `No.${index} video play`);
        return;
      }
      if (!videoEl.paused) {
        videoEl.pause();
        videoStates.value[index] = false;
        sendGA("click", "kv-banner Component", `No.${index} video pause`);
        return;
      }
    };
    const toggleMuted = (index) => {
      const videoEl = videoRefs.value[index];
      if (!videoEl) return;
      videoEl.muted = !videoEl.muted;
      muteStates.value[index] = videoEl.muted;
      if (videoEl.muted) {
        sendGA("click", "kv-banner", `No.${index} video muted`);
      } else {
        sendGA("click", "kv-banner", `No.${index} video no muted`);
      }
    };
    const handleSlideChange = () => {
      const currentSlide = swiperRoot.activeIndex;
      videoRefs.value.forEach((videoEl, index) => {
        if (!videoEl) return;
        if (index === currentSlide) {
          videoEl.play().catch(() => {
            videoStates.value[index] = false;
          });
          videoStates.value[index] = true;
          return;
        }
        videoEl.pause();
        videoStates.value[index] = false;
      });
    };
    onMounted(() => {
      if (!swiperRef.value) return;
      swiperRoot = new Swiper(swiperRef.value, {
        modules: [Navigation, Pagination],
        speed: 500,
        watchOverflow: true,
        observer: true,
        observeParents: true,
        preventInteractionOnTransition: true,
        simulateTouch: true,
        touchAngle: 30,
        longSwipes: false,
        followFinger: false,
        longSwipesRatio: 0.8,
        pagination: {
          el: swiperPaginationRef.value,
          clickable: true
        },
        navigation: {
          nextEl: swiperNextBtnRef.value,
          prevEl: swiperPrevBtnRef.value
        },
        on: {
          slideChange: () => {
            isEnd.value = swiperRoot.isEnd;
            isBeginning.value = swiperRoot.isBeginning;
            handleSlideChange();
          }
        }
      });
      videoStates.value = props.dataForm.dataList.map((o) => o.sourceType === "video" ? true : false);
      muteStates.value = props.dataForm.dataList.map((o) => o.sourceType === "video" ? true : false);
      props.dataForm.dataList.forEach((o, i) => {
        if (o.sourceType !== "video") return;
        const videoEl = videoRefs.value[i];
        if (!videoEl) return;
        videoEl.muted = true;
        videoEl.play().catch(() => {
          videoStates.value[i] = false;
        });
      });
      initSwiperTextAnim({ container: swiperRef.value, swiperInstance: swiperRoot });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "swiperRef",
        ref: swiperRef,
        class: "home_banner_container swiper"
      }, [
        createBaseVNode("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.dataForm.dataList, (o, i) => {
            return openBlock(), createElementBlock("div", {
              key: i,
              class: "banner-slide swiper-slide",
              "data-index": i
            }, [
              createBaseVNode("div", _hoisted_3, [
                o.sourceType === "image" ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: unref(mediaType) === "mob" ? o.imgMob : o.imgPc,
                  alt: o.title || ""
                }, null, 8, _hoisted_4)) : (openBlock(), createElementBlock("video", {
                  key: 1,
                  ref_for: true,
                  ref: (el) => setVideoRef(el, i),
                  class: "video",
                  src: unref(mediaType) === "mob" ? o.videoMob : o.videoPc,
                  poster: unref(mediaType) === "mob" ? o.videoPosterMob : o.videoPosterPc,
                  loop: "",
                  muted: "",
                  autoplay: "",
                  preload: "preload",
                  playsinline: "",
                  "webkit-playsinline": "",
                  "x5-playsinline": "",
                  "x5-video-player-type": "h5",
                  crossorigin: "anonymous"
                }, null, 8, _hoisted_5))
              ]),
              createBaseVNode("div", {
                class: normalizeClass(["banner-slide-content responsive_layout", [o.layout]])
              }, [
                createBaseVNode("div", _hoisted_6, [
                  o.text ? (openBlock(), createElementBlock("p", _hoisted_7, toDisplayString(o.text), 1)) : createCommentVNode("", true),
                  o.titleImg ? (openBlock(), createElementBlock("img", {
                    key: 1,
                    "data-animate": "true",
                    class: "title-img",
                    src: o.titleImg,
                    alt: o.title || ""
                  }, null, 8, _hoisted_8)) : (openBlock(), createElementBlock("h2", _hoisted_9, toDisplayString(o.title), 1)),
                  o.desc ? (openBlock(), createElementBlock("p", _hoisted_10, toDisplayString(o.desc), 1)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", {
                  class: normalizeClass(["btns-wrapper", o.btnMobRow ? "btn-row" : ""])
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(o.btnList, (b, j) => {
                    return openBlock(), createElementBlock("a", {
                      key: j,
                      class: normalizeClass(["btn", { primary: b.isPrimary }]),
                      href: b.url,
                      onClick: ($event) => unref(sendGA)("click", "kv-banner", `kv-banner swiper.${i + 1} ${b.txt}`)
                    }, toDisplayString(b.txt), 11, _hoisted_11);
                  }), 128))
                ], 2)
              ], 2),
              o.sourceType === "video" ? (openBlock(), createElementBlock("div", _hoisted_12, [
                createBaseVNode("div", {
                  class: "media-controller-btn",
                  onClick: ($event) => togglePlay(i)
                }, [
                  !videoStates.value[i] ? (openBlock(), createBlock(IconVideoPlay, { key: 0 })) : createCommentVNode("", true),
                  videoStates.value[i] ? (openBlock(), createBlock(IconVideoPause, { key: 1 })) : createCommentVNode("", true)
                ], 8, _hoisted_13),
                createBaseVNode("div", {
                  class: "media-controller-btn",
                  onClick: ($event) => toggleMuted(i)
                }, [
                  muteStates.value[i] ? (openBlock(), createBlock(IconMute, { key: 0 })) : createCommentVNode("", true),
                  !muteStates.value[i] ? (openBlock(), createBlock(IconAuto, { key: 1 })) : createCommentVNode("", true)
                ], 8, _hoisted_14)
              ])) : createCommentVNode("", true)
            ], 8, _hoisted_2);
          }), 128))
        ]),
        unref(mediaType) === "pc" ? (openBlock(), createElementBlock("div", {
          key: 0,
          ref_key: "swiperPaginationRef",
          ref: swiperPaginationRef,
          class: "swiper-pagination"
        }, null, 512)) : createCommentVNode("", true),
        unref(mediaType) === "pc" ? withDirectives((openBlock(), createElementBlock("div", {
          key: 1,
          ref_key: "swiperPrevBtnRef",
          ref: swiperPrevBtnRef,
          class: "swiper-button-prev"
        }, _cache[0] || (_cache[0] = [
          createStaticVNode('<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-23cd20b0><g clip-path="url(#clip0_434_9090)" data-v-23cd20b0><path d="M48 24C48 10.7452 37.2548 -1.62846e-06 24 -1.04907e-06C10.7452 -4.69686e-07 -1.62846e-06 10.7452 -1.04907e-06 24C-4.69686e-07 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24Z" fill="#F5F7FA" data-v-23cd20b0></path><path d="M25 18L19.4243 23.5757C19.1899 23.8101 19.1899 24.1899 19.4243 24.4243L25 30" stroke="black" stroke-width="1.6" stroke-linecap="round" data-v-23cd20b0></path></g><defs data-v-23cd20b0><clipPath id="clip0_434_9090" data-v-23cd20b0><rect width="48" height="48" fill="white" transform="translate(0 48) rotate(-90)" data-v-23cd20b0></rect></clipPath></defs></svg>', 1)
        ]), 512)), [
          [vShow, !isBeginning.value]
        ]) : createCommentVNode("", true),
        unref(mediaType) === "pc" ? withDirectives((openBlock(), createElementBlock("div", {
          key: 2,
          ref_key: "swiperNextBtnRef",
          ref: swiperNextBtnRef,
          class: "swiper-button-next"
        }, _cache[1] || (_cache[1] = [
          createStaticVNode('<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-23cd20b0><g clip-path="url(#clip0_434_9088)" data-v-23cd20b0><path d="M48 24C48 10.7452 37.2548 -1.62846e-06 24 -1.04907e-06C10.7452 -4.69686e-07 -1.62846e-06 10.7452 -1.04907e-06 24C-4.69686e-07 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24Z" fill="#F5F7FA" data-v-23cd20b0></path><path d="M23 30L28.5757 24.4243C28.8101 24.1899 28.8101 23.8101 28.5757 23.5757L23 18" stroke="black" stroke-width="1.6" stroke-linecap="round" data-v-23cd20b0></path></g><defs data-v-23cd20b0><clipPath id="clip0_434_9088" data-v-23cd20b0><rect width="48" height="48" fill="white" transform="translate(0 48) rotate(-90)" data-v-23cd20b0></rect></clipPath></defs></svg>', 1)
        ]), 512)), [
          [vShow, !isEnd.value]
        ]) : createCommentVNode("", true)
      ], 512);
    };
  }
});
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-23cd20b0"]]);
mountComponents(".home-banner", Layout);

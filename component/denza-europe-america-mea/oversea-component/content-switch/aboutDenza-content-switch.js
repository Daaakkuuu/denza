import { defineComponent, Swiper, Autoplay, onMounted, ref, createElementBlock, openBlock, createBaseVNode, Fragment, renderList, normalizeClass, unref, createTextVNode, toDisplayString, createCommentVNode, normalizeStyle, createBlock } from "https://denzabahrain.com/static_material/denza/overseas-public/js/vendor.js";
import { mountComponents } from "https://denzabahrain.com/static_material/denza/overseas-public/js/utils.js";
const _hoisted_1 = { id: "b02-all" };
const _hoisted_2 = { id: "b02-section" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "swiper-container" };
const _hoisted_5 = { class: "swiper-wrapper" };
const _hoisted_6 = { class: "swiper-slide" };
const _hoisted_7 = { class: "b03-text" };
const _hoisted_8 = { class: "img-container" };
const _hoisted_9 = ["data-qt-name", "src", "alt"];
const _hoisted_10 = { class: "b04-section" };
const _hoisted_11 = { class: "b04-text" };
const _hoisted_12 = { class: "video-container" };
const _hoisted_13 = ["data-qt-name", "poster", "controls", "src"];
const _hoisted_14 = ["src"];
const _hoisted_15 = ["src"];
const _hoisted_16 = ["src"];
const _hoisted_17 = { class: "swiper-container" };
const _hoisted_18 = { class: "swiper-wrapper" };
const _hoisted_19 = { class: "b06-text" };
const _hoisted_20 = { class: "img-container" };
const _hoisted_21 = ["data-qt-name", "src"];
const _hoisted_22 = { class: "swiper-bar" };
const _hoisted_23 = ["id"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "contentSwitchComponent",
  props: {
    dataForm: {}
  },
  setup(__props) {
    Swiper.use([Autoplay]);
    var _a;
    onMounted(() => {
      curSection.value = document.querySelectorAll("#b02-all>div")[1];
      video.value = curSection.value.querySelector("video");
      initSwiper();
    });
    const activeBtn = ref(0);
    const toSection = (index2) => {
      var _a2;
      var liElement = document.querySelectorAll("#b02-all li")[index2];
      var pElements = liElement.querySelectorAll("p");
      if (pElements.length > 1) ;
      const allBrandTabs = document.querySelectorAll(".brand-tab");
      activeBtn.value = index2;
      for (let i = 0; i < allBrandTabs.length; i++) {
        allBrandTabs[i].style.display = "none";
      }
      allBrandTabs[index2].style.display = "flex";
      const allVideos = document.querySelectorAll("#b02-all video");
      allVideos.forEach((i) => {
        i.pause();
        i.muted = true;
        isPlay.value = false;
        soundOn.value = false;
      });
      curSection.value = document.querySelectorAll("#b02-all>div")[index2 + 1];
      video.value = curSection.value.querySelector("video");
      (_a2 = video.value) == null ? void 0 : _a2.addEventListener("ended", () => {
        isPlay.value = false;
      });
      initSwiper();
    };
    const isMob = ref(window.innerWidth < 768);
    const curSection = ref(document.querySelectorAll("#b02-all>div")[1]);
    const video = ref((_a = curSection.value) == null ? void 0 : _a.querySelector("video"));
    const isPlay = ref(false);
    const play = () => {
      isPlay.value = !isPlay.value;
      if (isPlay.value) {
        video.value.play();
      } else {
        video.value.pause();
      }
      videoProgress(curSection.value, video.value);
    };
    const progressFnSec3 = (curSection2, perNum) => {
      const leftcircle = curSection2.querySelector(".leftcircle");
      const rightcircle = curSection2.querySelector(".rightcircle");
      var percent = Math.ceil(perNum / 100 * 100);
      var deg1 = (45 + 135) * percent / 50 - 135;
      var deg2 = (45 + 135) * (percent - 50) / 50 - 135;
      if (percent >= 50) {
        leftcircle.style.visibility = "visible";
        leftcircle.style.transform = "rotate(" + deg2 + "deg)";
        rightcircle.style.transform = "rotate(45deg)";
      } else {
        leftcircle.style.visibility = "hidden";
        rightcircle.style.transform = "rotate(" + deg1 + "deg)";
      }
    };
    const videoProgress = (curSection2, video2) => {
      video2.addEventListener("timeupdate", () => {
        const perc = +(video2.currentTime / video2.duration).toFixed(2) * 100;
        progressFnSec3(curSection2, perc === 100 ? 1 : perc);
        if (perc > 0) {
          playButton.value = "/etc.clientlibs/tengshi-overseas-site/clientlibs/clientlib-brand/resources/img/music_play_button.png";
          pauseButton.value = "/etc.clientlibs/tengshi-overseas-site/clientlibs/clientlib-brand/resources/img/music_pause_button.png";
        }
      });
    };
    const soundOn = ref(false);
    const isSound = () => {
      soundOn.value = !soundOn.value;
      if (soundOn.value) {
        video.value.muted = false;
      } else {
        video.value.muted = true;
      }
    };
    const pauseButton = ref("/etc.clientlibs/tengshi-overseas-site/clientlibs/clientlib-brand/resources/img/music_pause_button_dark.png");
    const playButton = ref("/etc.clientlibs/tengshi-overseas-site/clientlibs/clientlib-brand/resources/img/music_play_button_dark.png");
    const initSwiper = () => {
      const b06Swiper = curSection.value.querySelector(".swiper-container");
      const swiperBars = curSection.value.querySelectorAll(".swiper-bar p");
      const swiperBar = curSection.value.querySelector(".swiper-bar");
      const scrollbarDrag = curSection.value.querySelector(".swiper-scrollbar-drag");
      const b02Section = document.querySelector("#b02-section");
      const pcWidth = ref(window.innerWidth);
      const changeDragAuto = (index2) => {
        if (isMob.value) {
          scrollbarDrag.style.left = swiperBars[index2].offsetLeft * (100 / pcWidth.value) + "vw";
        } else {
          scrollbarDrag.style.left = swiperBars[index2].offsetLeft * (100 / pcWidth.value) + "vw";
        }
      };
      if (scrollbarDrag) {
        swiper.value = new Swiper(b06Swiper, {
          speed: 1e3,
          autoplay: {
            delay: 4e3,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          loop: true,
          spaceBetween: 24,
          on: {
            slideChangeTransitionStart: (swiper2) => {
              changeDragAuto(swiper2.realIndex);
            }
          }
        });
        swiperBar.addEventListener("click", (event) => {
          let ev = event.target;
          if (ev.tagName !== "P") {
            return;
          }
          const pcWidth2 = window.innerWidth;
          swiper.value.slideTo(Number(ev.id));
          const years = document.querySelectorAll(".swiper-bar p");
          qtMethods("dbwp_year_clk", "CLK", {
            brand_history_year: years[swiper.value.realIndex].innerHTML
          });
          if (isMob.value) {
            const left = ev.offsetLeft * (100 / pcWidth2);
            scrollbarDrag.style.left = left + "vw";
          } else {
            scrollbarDrag.style.left = ev.offsetLeft * (100 / pcWidth2) + "vw";
          }
        });
        if (b06Swiper && curSection.value.style.display === "none") {
          swiper.value.autoplay.stop();
        } else {
          swiper.value.autoplay.start();
        }
        if (b02Section) {
          b02Section.addEventListener("click", () => {
            if (curSection.value.style.display === "none") {
              swiper.value.autoplay.stop();
            } else {
              swiper.value.slideTo(1, 0);
              swiper.value.autoplay.start();
            }
          });
        }
        if (isMob.value) {
          swiper.value.autoplay.stop();
        } else {
          swiper.value.autoplay.start();
        }
      }
    };
    let swiper = ref(null);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("ul", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dataForm, (item, index) => {
                return openBlock(), createElementBlock("li", {
                  key: index,
                  class: normalizeClass(unref(activeBtn) === index ? "active" : ""),
                  onClick: ($event) => toSection(index)
                }, [
                  createBaseVNode("p", null, toDisplayString(item.titleIndex), 1),
                  _cache[1] || (_cache[1] = createTextVNode()),
                  createBaseVNode("p", null, toDisplayString(item.title), 1)
                ], 10, _hoisted_3);
              }), 128))
            ])
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dataForm, (item, item_index) => {
            return openBlock(), createElementBlock(Fragment, { key: item_index }, [
              item.subContentType == "single" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                item.singleBannerMode == "image" ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  id: "b03-section",
                  class: "brand-tab",
                  style: normalizeStyle(item.displayStyle)
                }, [
                  createBaseVNode("div", _hoisted_4, [
                    createBaseVNode("div", _hoisted_5, [
                      createBaseVNode("div", _hoisted_6, [
                        createBaseVNode("div", _hoisted_7, [
                          createBaseVNode("h3", null, toDisplayString(item.title), 1),
                          createBaseVNode("ul", null, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(item.singleDesc, (description, index0) => {
                              return openBlock(), createElementBlock("li", { key: index0 }, toDisplayString(description.desc), 1);
                            }), 128))
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_8, [
                          createBaseVNode("img", {
                            class: "exp-image",
                            "data-qt-name": unref(isMob) ? item.singleImgMobile : item.singleImgPc,
                            src: unref(isMob) ? item.singleImgMobile : item.singleImgPc,
                            alt: item.title
                          }, null, 8, _hoisted_9)
                        ])
                      ])
                    ])
                  ])
                ], 4)) : createCommentVNode("", true),
                item.singleBannerMode == "video" ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  id: "b04-section",
                  class: "brand-tab",
                  style: normalizeStyle(item.displayStyle)
                }, [
                  createBaseVNode("div", _hoisted_10, [
                    createBaseVNode("div", _hoisted_11, [
                      createBaseVNode("h3", null, toDisplayString(item.title), 1),
                      createBaseVNode("ul", null, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(item.singleDesc, (description, index111) => {
                          return openBlock(), createElementBlock("li", { key: index111 }, toDisplayString(description.desc), 1);
                        }), 128))
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_12, [
                      createBaseVNode("video", {
                        class: "exp-video",
                        "data-qt-name": unref(isMob) ? item.singleVideoMobile : item.singleVideoPc,
                        preload: "auto",
                        playsinline: "true",
                        "webkit-playsinline": "true",
                        "x-webkit-airplay": "allow",
                        poster: unref(isMob) ? item.singleImgMobile : item.singleImgPc,
                        muted: "",
                        controls: unref(isMob) ? true : false,
                        src: unref(isMob) ? item.singleVideoMobile : item.singleVideoPc
                      }, null, 8, _hoisted_13),
                      !unref(isMob) ? (openBlock(), createElementBlock("div", {
                        key: 0,
                        class: "b04-button",
                        onClick: _cache[0] || (_cache[0] = ($event) => play())
                      }, [
                        unref(isPlay) ? (openBlock(), createElementBlock("img", {
                          key: 0,
                          src: unref(isMob) ? unref(pauseButton) : "https://denzabahrain.com/static_material/tengshi/overseas/brand/img/music_pause_button_dark.png",
                          alt: "Pause Button"
                        }, null, 8, _hoisted_14)) : (openBlock(), createElementBlock("img", {
                          key: 1,
                          src: unref(isMob) ? unref(playButton) : "https://denzabahrain.com/static_material/tengshi/overseas/brand/img/music_play_button_dark.png",
                          alt: "Play Button"
                        }, null, 8, _hoisted_15)),
                        _cache[2] || (_cache[2] = createBaseVNode("div", { class: "wrapper right" }, [
                          createBaseVNode("div", { class: "circle rightcircle" })
                        ], -1)),
                        _cache[3] || (_cache[3] = createBaseVNode("div", { class: "wrapper left" }, [
                          createBaseVNode("div", { class: "circle leftcircle" })
                        ], -1))
                      ])) : createCommentVNode("", true),
                      !unref(isMob) ? (openBlock(), createElementBlock("div", {
                        key: 1,
                        class: "b04-button-voice",
                        onClick: isSound
                      }, [
                        createBaseVNode("img", {
                          src: unref(soundOn) ? "https://denzabahrain.com/static_material/tengshi/overseas/brand/img/icon_sound_off_dark.svg" : "https://denzabahrain.com/static_material/tengshi/overseas/brand/img/icon_sound_on_dark.svg",
                          alt: "静音"
                        }, null, 8, _hoisted_16)
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ], 4)) : createCommentVNode("", true)
              ], 64)) : createCommentVNode("", true),
              item.subContentType == "multiple" ? (openBlock(), createElementBlock("div", {
                key: 1,
                id: "b06-section",
                class: "brand-tab",
                style: normalizeStyle(item.displayStyle)
              }, [
                createBaseVNode("div", _hoisted_17, [
                  createBaseVNode("div", _hoisted_18, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(item.multiYearList, (year, index22) => {
                      return openBlock(), createElementBlock("div", {
                        key: index22,
                        class: "swiper-slide"
                      }, [
                        createBaseVNode("div", _hoisted_19, [
                          createBaseVNode("h3", null, toDisplayString(year.multiTitle), 1),
                          createBaseVNode("ul", null, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(year.multiDesc, (description, index33) => {
                              return openBlock(), createElementBlock("li", { key: index33 }, toDisplayString(description.desc), 1);
                            }), 128))
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_20, [
                          createBaseVNode("img", {
                            class: "exp-image",
                            "data-qt-name": unref(isMob) ? year.multiImgMobile : year.multiImgPc,
                            src: unref(isMob) ? year.multiImgMobile : year.multiImgPc,
                            alt: "品牌历史"
                          }, null, 8, _hoisted_21)
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                createBaseVNode("div", _hoisted_22, [
                  _cache[4] || (_cache[4] = createBaseVNode("div", { class: "swiper-scrollbar" }, [
                    createBaseVNode("button", { class: "swiper-scrollbar-drag" })
                  ], -1)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(item.multiYearList, (year, index44) => {
                    return openBlock(), createElementBlock("p", {
                      key: index44,
                      id: year.multiTitleId
                    }, toDisplayString(year.multiTitle), 9, _hoisted_23);
                  }), 128))
                ])
              ], 4)) : createCommentVNode("", true)
            ], 64);
          }), 128))
        ])
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
mountComponents(".content-switch", _sfc_main);

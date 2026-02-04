var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { mediaType, mountComponents } from "https://denzabahrain.com/static_material/denza/overseas-public/js/utils.js";
import { defineComponent, createElementBlock, openBlock, Fragment, renderList, normalizeClass, computed, createBaseVNode, createCommentVNode, unref, toDisplayString, ref, watch, onMounted, onUnmounted, WebGLRenderer, Scene, AmbientLight, PerspectiveCamera, OrbitControls, MeshBasicMaterial, Mesh, BoxGeometry, Texture, ImageLoader, SRGBColorSpace, normalizeStyle, createVNode, gsapWithCSS, withDirectives, vShow, createBlock, resolveDynamicComponent } from "https://denzabahrain.com/static_material/denza/overseas-public/js/vendor.js";
import { _export_sfc } from "https://denzabahrain.com/static_material/denza/overseas-public/jshttps://denzabahrain.com/components.js";
const _hoisted_1$7 = { class: "wheels-component-container" };
const _hoisted_2$6 = ["src"];
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "wheelsComponent",
  props: {
    dataForm: {},
    currentColor: {},
    imgs: {},
    isMob: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.imgs || [], (url, index) => {
          return openBlock(), createElementBlock("img", {
            key: index,
            class: normalizeClass([
              "wheels-component-container-img",
              props.isMob && "add-transform-actrion"
            ]),
            src: url,
            alt: ""
          }, null, 10, _hoisted_2$6);
        }), 128))
      ]);
    };
  }
});
const wheelsComponent = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-cc33a290"]]);
const interior = "interior";
const exterior = "exterior";
const wheels = "wheels";
const _hoisted_1$6 = { class: "view-page-position-items" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "viewPagePosition",
  props: {
    dataForm: {},
    position: {},
    isOpenView: { type: Boolean }
  },
  emits: ["onSelect"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    function handleSelect(value) {
      emits("onSelect", value);
    }
    const isSelectItem = function(value) {
      return props.position === value;
    };
    const isInterior = computed(() => {
      return props.position === interior;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "view-page-position",
          isInterior.value && "isInterior-class"
        ])
      }, [
        createBaseVNode("div", _hoisted_1$6, [
          props.dataForm.interiorText ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([
              "view-page-position-item",
              isSelectItem(unref(interior)) && "is-active",
              props.isOpenView && "is-open-view"
            ]),
            onClick: _cache[0] || (_cache[0] = () => handleSelect(unref(interior)))
          }, toDisplayString(props.dataForm.interiorText), 3)) : createCommentVNode("", true),
          props.dataForm.exteriorText ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass([
              "view-page-position-item",
              isSelectItem(unref(exterior)) && "is-active",
              props.isOpenView && "is-open-view"
            ]),
            onClick: _cache[1] || (_cache[1] = () => handleSelect(unref(exterior)))
          }, toDisplayString(props.dataForm.exteriorText), 3)) : createCommentVNode("", true),
          props.dataForm.wheelsText ? (openBlock(), createElementBlock("div", {
            key: 2,
            class: normalizeClass([
              "view-page-position-item",
              isSelectItem(unref(wheels)) && "is-active",
              props.isOpenView && "is-open-view"
            ]),
            onClick: _cache[2] || (_cache[2] = () => handleSelect(unref(wheels)))
          }, toDisplayString(props.dataForm.wheelsText), 3)) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", {
          class: normalizeClass([
            "page-view-small-tips",
            props.isOpenView && "is-open-view"
          ])
        }, toDisplayString(_ctx.dataForm.pageTips), 3)
      ], 2);
    };
  }
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "threeFrameSnapPc",
  props: {
    imgs: {},
    currentColor: {},
    interiorCarData: {}
  },
  setup(__props, { expose: __expose }) {
    const canvasContainer = ref(null);
    const props = __props;
    let camera, controls;
    let renderer;
    let scene;
    let textures = [];
    let materials = [];
    let skyBox;
    const materialsMap = /* @__PURE__ */ new Map();
    function createMaterialsMap() {
      if (props.interiorCarData) {
        props.interiorCarData.map((item) => {
          const currentMaterials = [];
          materialsMap.set(item.colorName, currentMaterials);
          for (let i = 0; i < item.interiorImagesPc.length; i++) {
            const imgUrl = item.interiorImagesPc[i];
            const imageLoader = new ImageLoader();
            imageLoader.setCrossOrigin("anonymous");
            imageLoader.load(imgUrl, (image) => {
              const currentTexture = new Texture();
              const tileWidth = image.width;
              const tileHeight = image.height;
              const canvas = document.createElement("canvas");
              const context = canvas.getContext("2d");
              canvas.height = tileHeight;
              canvas.width = tileWidth;
              context.drawImage(image, 0, 0, tileWidth, tileHeight, 0, 0, tileWidth, tileHeight);
              currentTexture.colorSpace = SRGBColorSpace;
              currentTexture.image = canvas;
              currentTexture.needsUpdate = true;
              currentMaterials[i] = new MeshBasicMaterial({ map: currentTexture });
            });
          }
        });
      }
    }
    function clear() {
      if (renderer) {
        renderer.forceContextLoss();
        renderer.dispose();
        renderer.domElement.remove();
      }
      if (controls) {
        controls.enabled = false;
        if (typeof controls.dispose === "function") {
          controls.dispose();
        }
      }
      clearOldMaterials();
    }
    function clearOldMaterials() {
      if (materials) {
        materials.map((material) => {
          material.dispose();
        });
      }
    }
    function updateMaterials() {
      clearOldMaterials();
      materials = materialsMap.get(props.currentColor);
      skyBox.material = materials;
      renderer.render(scene, camera);
    }
    watch(() => props.currentColor, () => {
      updateMaterials();
    });
    __expose({
      updateMaterials
    });
    function getContainerSize() {
      const element = canvasContainer.value;
      if (element) {
        const rect = element.getBoundingClientRect();
        return {
          width: rect.width,
          height: rect.height
        };
      }
      return {
        width: 0,
        height: 0
      };
    }
    onMounted(() => {
      init();
      createMaterialsMap();
    });
    onUnmounted(() => {
      clear();
    });
    function init() {
      const container = canvasContainer.value;
      if (!container) {
        return;
      }
      const size = getContainerSize();
      renderer = new WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(size.width, size.height);
      renderer.setAnimationLoop(animate);
      container.appendChild(renderer.domElement);
      scene = new Scene();
      const ambientLight = new AmbientLight(16777215, 0.6);
      scene.add(ambientLight);
      camera = new PerspectiveCamera(50, size.width / size.height, 0.1, 100);
      camera.position.z = 0.1;
      camera.lookAt(scene.position);
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableDamping = true;
      controls.rotateSpeed = -0.25;
      textures = getTexturesFromAtlasFile();
      materials = [];
      for (let i = 0; i < 6; i++) {
        materials.push(new MeshBasicMaterial({ map: textures[i] }));
      }
      skyBox = new Mesh(new BoxGeometry(1, 1, 1), materials);
      skyBox.geometry.scale(-1, 1, 1);
      scene.add(skyBox);
      window.addEventListener("resize", onWindowResize);
    }
    function getTexturesFromAtlasFile() {
      for (let i = 0; i < props.imgs.length; i++) {
        textures[i] = new Texture();
        const imgUrl = props.imgs[i];
        const imageLoader = new ImageLoader();
        imageLoader.setCrossOrigin("anonymous");
        imageLoader.load(imgUrl, (image) => {
          const tileWidth = image.width;
          const tileHeight = image.height;
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          canvas.height = tileHeight;
          canvas.width = tileWidth;
          context.drawImage(image, 0, 0, tileWidth, tileHeight, 0, 0, tileWidth, tileHeight);
          textures[i].colorSpace = SRGBColorSpace;
          textures[i].image = canvas;
          textures[i].needsUpdate = true;
          textures[i].generateMipmaps = false;
        }, void 0, (err) => {
          console.log(err);
        });
      }
      return textures;
    }
    function onWindowResize() {
      const size = getContainerSize();
      camera.updateProjectionMatrix();
      renderer.setSize(size.width, size.height);
    }
    function animate() {
      controls.update();
      renderer.render(scene, camera);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "canvasContainer",
        ref: canvasContainer,
        class: "cube-container"
      }, null, 512);
    };
  }
});
const threeFrameSnapPc = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-2926075e"]]);
const _hoisted_1$5 = ["onClick"];
const _hoisted_2$5 = { class: "frame-snap-360-page-icon-container" };
const _hoisted_3$3 = ["src"];
const _hoisted_4$1 = ["onClick"];
const _hoisted_5$1 = { class: "frame-snap-360-page-icon-container" };
const _hoisted_6$1 = ["src"];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "pageNations",
  props: {
    dataForm: {},
    currentViewColor: {},
    needBlur: { type: Boolean },
    isOpenView: { type: Boolean },
    currentColors: {},
    position: {}
  },
  emits: ["onSelect"],
  setup(__props, { emit: __emit }) {
    const pageNationsRef = ref();
    const props = __props;
    const emist = __emit;
    function isActiveColor(item) {
      return props.currentViewColor && props.currentViewColor === item.colorName;
    }
    function handleSelect(name) {
      emist("onSelect", name);
    }
    const isMob = computed(() => {
      return mediaType.value === "mob";
    });
    const isInterior = computed(() => {
      return props.position === interior;
    });
    const mobColorRows = computed(() => {
      if (props.currentColors && props.currentColors.length > 0) {
        if (props.currentColors.length === 4) {
          const sizes2 = 4;
          const result2 = [];
          for (let i = 0; i < props.currentColors.length; i += sizes2) {
            {
              {
                result2.push(props.currentColors.slice(i, i + sizes2));
              }
            }
          }
          return result2;
        }
        const sizes = 3;
        const result = [];
        for (let i = 0; i < props.currentColors.length; i += sizes) {
          {
            {
              result.push(props.currentColors.slice(i, i + sizes));
            }
          }
        }
        return result;
      }
      return [];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "pageNationsRef",
        ref: pageNationsRef,
        class: "frame-snap-360-page"
      }, [
        isMob.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([
            "frame-snap-360-page-row-container",
            props.isOpenView && "is-open-view-page-nation"
          ])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(mobColorRows.value, (row, index1) => {
            return openBlock(), createElementBlock("div", {
              key: index1,
              class: "frame-snap-360-page-rows"
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(row, (item, index2) => {
                return openBlock(), createElementBlock("div", {
                  key: index2,
                  class: normalizeClass([
                    "frame-snap-360-page-item",
                    isInterior.value && "is-blur-button",
                    isActiveColor(item) && "is-active"
                  ]),
                  style: normalizeStyle({
                    "--round-color": item.roundColor
                  }),
                  onClick: () => handleSelect(item.colorName)
                }, [
                  createBaseVNode("div", _hoisted_2$5, [
                    _cache[0] || (_cache[0] = createBaseVNode("div", { class: "frame-snap-360-page-icon-container-circle" }, null, -1)),
                    createBaseVNode("img", {
                      class: "frame-snap-360-page-icon",
                      src: item.colorIcon,
                      alt: ""
                    }, null, 8, _hoisted_3$3)
                  ]),
                  createBaseVNode("span", {
                    class: normalizeClass([
                      "frame-snap-360-page-text",
                      isActiveColor(item) && "is-active"
                    ])
                  }, toDisplayString(item.colorName), 3)
                ], 14, _hoisted_1$5);
              }), 128))
            ]);
          }), 128))
        ], 2)) : createCommentVNode("", true),
        !isMob.value ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(props.currentColors, (item, index) => {
          return openBlock(), createElementBlock("div", {
            key: index,
            style: normalizeStyle({
              "--round-color": item.roundColor
            }),
            class: normalizeClass([
              "frame-snap-360-page-item  sss",
              isActiveColor(item) && "is-active",
              isInterior.value && "is-blur-button"
            ]),
            onClick: () => handleSelect(item.colorName)
          }, [
            createBaseVNode("div", _hoisted_5$1, [
              _cache[1] || (_cache[1] = createBaseVNode("div", { class: "frame-snap-360-page-icon-container-circle" }, null, -1)),
              createBaseVNode("img", {
                class: "frame-snap-360-page-icon",
                src: item.colorIcon,
                alt: ""
              }, null, 8, _hoisted_6$1)
            ]),
            createBaseVNode("span", {
              class: normalizeClass([
                "frame-snap-360-page-text",
                isActiveColor(item) && "is-active"
              ])
            }, toDisplayString(item.colorName), 3)
          ], 14, _hoisted_4$1);
        }), 128)) : createCommentVNode("", true)
      ], 512);
    };
  }
});
const pageNations = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-eb56a67b"]]);
class MouseMoveHelper {
  constructor() {
    __publicField(this, "lastX");
    __publicField(this, "currentIndex");
    this.lastX = void 0;
    this.currentIndex = void 0;
  }
  mousedown(e, currentIndex, maxIndex, callback) {
    const that = this;
    this.currentIndex = currentIndex;
    this.lastX = e.clientX;
    const minDistance = 30;
    console.log(e.clientX);
    function mouseMove(moveEvent) {
      if (that.lastX === void 0) {
        return;
      }
      const moveX = moveEvent.clientX;
      const moveDistance = moveX - that.lastX;
      if (Math.abs(moveDistance) < minDistance) {
        return;
      }
      that.lastX = moveX;
      if (moveDistance < 0) {
        that.currentIndex = (that.currentIndex + 1) % maxIndex;
        callback(that.currentIndex);
      } else {
        that.currentIndex = (that.currentIndex - 1 + maxIndex) % maxIndex;
        callback(that.currentIndex);
      }
    }
    function mouseUp(upEvent) {
      that.lastX = void 0;
      that.currentIndex = void 0;
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
    }
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
  }
}
const _hoisted_1$4 = { class: "frame-snap" };
const _hoisted_2$4 = ["src"];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "frameSnapPCV2",
  props: {
    imgs: {}
  },
  setup(__props) {
    const currentImageIndex = ref(0);
    const pointerHelper = new MouseMoveHelper();
    function handlePointerdown(event) {
      pointerHelper.mousedown(
        event,
        currentImageIndex.value,
        props.imgs.length,
        (index) => {
          currentImageIndex.value = index;
        }
      );
    }
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", {
          class: "img-frame",
          onMousedown: handlePointerdown
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.imgs, (item, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              style: normalizeStyle({
                opacity: index === currentImageIndex.value ? 1 : 0
              }),
              class: "img-frame-contain"
            }, [
              createBaseVNode("img", {
                src: item,
                alt: ""
              }, null, 8, _hoisted_2$4)
            ], 4);
          }), 128))
        ], 32)
      ]);
    };
  }
});
const frameSnapPcV2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-188f96d4"]]);
const _hoisted_1$3 = { class: "model-page-frame-snap360-pc-container" };
const _hoisted_2$3 = { class: "frame-snap-pc-container-outer" };
const _hoisted_3$2 = { class: "frame-snap-pc-page" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "pc",
  props: {
    dataForm: {}
  },
  setup(__props) {
    const props = __props;
    const currentCarPositionView = ref(props.dataForm.currentViewCarPosition);
    const currentExteriorColor = ref(props.dataForm.currentExteriorColor);
    const currentInteriorColor = ref(props.dataForm.currentInteriorColor);
    const currentWheelsColor = ref(props.dataForm.currentWheelsColor);
    const threeFrameSnapPcRef = ref();
    function handleSetCarPositionView(position) {
      currentCarPositionView.value = position;
    }
    function handleSetExteriorColor(position) {
      currentExteriorColor.value = position;
    }
    function handleSetInteriorColor(position) {
      currentInteriorColor.value = position;
    }
    function handleSetWheelsColor(position) {
      currentWheelsColor.value = position;
    }
    const currentInteriorColorImags = computed(() => {
      const color = currentInteriorColor.value;
      const currentItem = props.dataForm.interiorCarData.find((item) => item.colorName === color);
      return (currentItem == null ? void 0 : currentItem.interiorImagesPc) || [];
    });
    const currentExteriorColorImags = computed(() => {
      const color = currentExteriorColor.value;
      const currentExteriorItem = props.dataForm.exteriorCarData.find((item) => item.colorName === color);
      return (currentExteriorItem == null ? void 0 : currentExteriorItem.exteriorImagesPc) || [];
    });
    const currentWheelsColorImags = computed(() => {
      const color = currentWheelsColor.value;
      const currentItem = props.dataForm.wheelsCarData.find((item) => item.colorName === color);
      return (currentItem == null ? void 0 : currentItem.wheelsImagesPc) || [];
    });
    const showInterior = computed(() => {
      return currentCarPositionView.value === interior;
    });
    const showExterior = computed(() => {
      return currentCarPositionView.value === exterior;
    });
    const showWheels = computed(() => {
      return currentCarPositionView.value === wheels;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$3, [
          createBaseVNode("div", {
            class: normalizeClass([
              "three-frame-snap-pc",
              showInterior.value && "is-active-mask"
            ])
          }, [
            createVNode(threeFrameSnapPc, {
              ref_key: "threeFrameSnapPcRef",
              ref: threeFrameSnapPcRef,
              "current-color": currentInteriorColor.value,
              "interior-car-data": _ctx.dataForm.interiorCarData,
              imgs: currentInteriorColorImags.value
            }, null, 8, ["current-color", "interior-car-data", "imgs"]),
            createVNode(pageNations, {
              "current-view-color": currentInteriorColor.value,
              position: currentCarPositionView.value,
              "need-blur": true,
              "current-colors": _ctx.dataForm.interiorCarData,
              "data-form": _ctx.dataForm,
              onOnSelect: handleSetInteriorColor
            }, null, 8, ["current-view-color", "position", "current-colors", "data-form"])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass([
              "frame-snap-pc-container",
              showExterior.value && "is-active-mask"
            ])
          }, [
            createVNode(frameSnapPcV2, { imgs: currentExteriorColorImags.value }, null, 8, ["imgs"]),
            createBaseVNode("div", _hoisted_3$2, [
              createVNode(pageNations, {
                "current-view-color": currentExteriorColor.value,
                position: currentCarPositionView.value,
                "current-colors": _ctx.dataForm.exteriorCarData,
                "data-form": _ctx.dataForm,
                onOnSelect: handleSetExteriorColor
              }, null, 8, ["current-view-color", "position", "current-colors", "data-form"])
            ])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass([
              "wheels-component-pc",
              showWheels.value && "is-active-mask"
            ])
          }, [
            createVNode(wheelsComponent, {
              "data-form": _ctx.dataForm,
              imgs: currentWheelsColorImags.value,
              "current-color": currentWheelsColor.value
            }, null, 8, ["data-form", "imgs", "current-color"]),
            createVNode(pageNations, {
              position: currentCarPositionView.value,
              "current-view-color": currentWheelsColor.value,
              "current-colors": _ctx.dataForm.wheelsCarData,
              "data-form": _ctx.dataForm,
              onOnSelect: handleSetWheelsColor
            }, null, 8, ["position", "current-view-color", "current-colors", "data-form"])
          ], 2)
        ]),
        createBaseVNode("div", null, [
          createVNode(_sfc_main$8, {
            "data-form": _ctx.dataForm,
            position: currentCarPositionView.value,
            onOnSelect: handleSetCarPositionView
          }, null, 8, ["data-form", "position"])
        ])
      ]);
    };
  }
});
const Pc = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-23e39bae"]]);
const _hoisted_1$2 = { class: "mob-mask-common-component-top" };
const _hoisted_2$2 = { class: "mob-mask-common-component-top-buttons" };
const _hoisted_3$1 = ["src"];
const _hoisted_4 = ["src"];
const _hoisted_5 = { key: 0 };
const _hoisted_6 = {
  class: /* @__PURE__ */ normalizeClass([
    "mob-mask-common-component-bottom"
  ])
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "mobMaskCommonComponent",
  props: {
    dataForm: {},
    position: {},
    isOpenView: { type: Boolean },
    currentCarPositionView: {}
  },
  emits: ["onSelect", "onClose", "onOpen"],
  setup(__props, { emit: __emit }) {
    const tl = gsapWithCSS.timeline();
    const props = __props;
    const emits = __emit;
    function handleSetCarPositionView(position) {
      emits("onSelect", position);
    }
    const currentText = computed(() => {
      if (props.currentCarPositionView && props.currentCarPositionView === interior) {
        return props.dataForm.mobInteriorButtonText;
      }
      if (props.currentCarPositionView && props.currentCarPositionView === exterior) {
        return props.dataForm.mobExteriorButtonText;
      }
      if (props.currentCarPositionView && props.currentCarPositionView === wheels) {
        return props.dataForm.mobWeelsButtonText;
      }
      return "";
    });
    function handleClose() {
      emits("onClose");
    }
    function handleOpen() {
      emits("onOpen");
    }
    function handleChangeButtonStatus() {
      if (props.isOpenView) {
        tl.to(".mob-mask-common-component-container .mob-mask-common-component-open-container", {
          opacity: 0,
          duration: 0.3,
          pointerEvents: "none"
        }).to(".mob-mask-common-component-container .mob-mask-common-component-close-container", {
          opacity: 1,
          duration: 0.3,
          pointerEvents: "auto"
        });
      } else {
        tl.to(".mob-mask-common-component-container .mob-mask-common-component-close-container", {
          opacity: 0,
          duration: 0.3,
          pointerEvents: "none"
        }).to(".mob-mask-common-component-container .mob-mask-common-component-open-container", {
          opacity: 1,
          duration: 0.3,
          pointerEvents: "auto"
        });
      }
    }
    watch(() => props.isOpenView, () => {
      handleChangeButtonStatus();
    }, { immediate: true });
    onMounted(() => {
      if (props.isOpenView) {
        tl.to(".mob-mask-common-component-container .mob-mask-common-component-open-container", {
          opacity: 0,
          duration: 0,
          pointerEvents: "none"
        }).to(".mob-mask-common-component-container .mob-mask-common-component-close-container", {
          opacity: 1,
          duration: 0,
          pointerEvents: "auto"
        });
      } else {
        tl.to(".mob-mask-common-component-container .mob-mask-common-component-open-container", {
          opacity: 1,
          duration: 0,
          pointerEvents: "auto"
        }).to(".mob-mask-common-component-container .mob-mask-common-component-close-container", {
          opacity: 0,
          duration: 0,
          pointerEvents: "none"
        });
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "mob-mask-common-component-container",
          props.isOpenView && "is-active-mask"
        ])
      }, [
        createBaseVNode("div", _hoisted_1$2, [
          _cache[0] || (_cache[0] = createBaseVNode("div", null, [
            createBaseVNode("div", { class: "mob-mask-common-component-top-top" }),
            createBaseVNode("div", { class: "mob-mask-common-component-top-left" }),
            createBaseVNode("div", { class: "mob-mask-common-component-top-right" })
          ], -1)),
          createBaseVNode("div", _hoisted_2$2, [
            createBaseVNode("div", {
              class: "mob-mask-common-component-close-container is-button",
              onClick: handleClose
            }, [
              createBaseVNode("img", {
                class: "mob-mask-common-component-close-icon",
                src: _ctx.dataForm.mobWeelsButtonIconClose,
                alt: ""
              }, null, 8, _hoisted_3$1)
            ]),
            createBaseVNode("div", {
              class: "mob-mask-common-component-open-container is-button",
              onClick: handleOpen
            }, [
              createBaseVNode("img", {
                class: "mob-mask-common-component-open-icon",
                src: _ctx.dataForm.mobWeelsButtonIcon,
                alt: ""
              }, null, 8, _hoisted_4),
              currentText.value ? (openBlock(), createElementBlock("div", _hoisted_5, toDisplayString(currentText.value), 1)) : createCommentVNode("", true)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("div", null, [
            createVNode(_sfc_main$8, {
              "data-form": _ctx.dataForm,
              "is-open-view": props.isOpenView,
              position: props.position,
              onOnSelect: handleSetCarPositionView
            }, null, 8, ["data-form", "is-open-view", "position"])
          ])
        ])
      ], 2);
    };
  }
});
const mobMaskCommonComponent = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-861e39a4"]]);
const _hoisted_1$1 = { class: "frame-snap" };
const _hoisted_2$1 = ["src"];
const SWITCH_COOLDOWN = 0;
const SWIPE_THRESHOLD = 10;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "frameSnapMob",
  props: {
    imgs: {}
  },
  setup(__props) {
    const props = __props;
    const imgInstance = ref([]);
    function handleLoadImgs() {
      const currentActiveIndex = imgInstance.value.findIndex((item) => item.isShow);
      imgInstance.value.length = 0;
      props.imgs.forEach((path) => {
        imgInstance.value.push({
          imgInstance: new Image(),
          src: path,
          isShow: false
        });
      });
      imgInstance.value.forEach((item, index) => {
        item.imgInstance.src = item.src;
        item.imgInstance.onload = () => {
          if (currentActiveIndex >= 0) {
            imgInstance.value[currentActiveIndex].isShow = true;
            return;
          }
          if (index === 0) {
            imgInstance.value[index].isShow = true;
          }
        };
      });
    }
    function switchImage(direction) {
      const currentIndex = imgInstance.value.findIndex((item) => item.isShow);
      if (currentIndex === -1) return;
      let newIndex = currentIndex;
      if (direction === "next") {
        newIndex = currentIndex === imgInstance.value.length - 1 ? 0 : currentIndex + 1;
      } else if (direction === "prev") {
        newIndex = currentIndex === 0 ? imgInstance.value.length - 1 : currentIndex - 1;
      }
      imgInstance.value[currentIndex].isShow = false;
      imgInstance.value[newIndex].isShow = true;
    }
    let touchStartX = null;
    function handleTouchStart(e) {
      touchStartX = e.touches[0].clientX;
    }
    let lastSwitchTime = 0;
    let lastSwitchDirection = null;
    function handleTouchMove(e) {
      if (!touchStartX) return;
      const touchX = e.touches[0].clientX;
      const deltaX = touchX - touchStartX;
      const now = Date.now();
      const direction = deltaX > 0 ? "prev" : "next";
      const isSignificantSwipe = Math.abs(deltaX) > SWIPE_THRESHOLD;
      const isCooldownReady = now - lastSwitchTime > SWITCH_COOLDOWN;
      const isNewDirection = direction !== lastSwitchDirection;
      if (isSignificantSwipe && (isCooldownReady || isNewDirection)) {
        lastSwitchTime = now;
        lastSwitchDirection = direction;
        switchImage(direction);
        touchStartX = touchX;
      }
      e.preventDefault();
    }
    function handleTouchEnd() {
      touchStartX = null;
    }
    watch(
      () => props.imgs,
      () => {
        handleLoadImgs();
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", {
          class: "img-frame",
          onTouchstart: handleTouchStart,
          onTouchmove: handleTouchMove,
          onTouchend: handleTouchEnd
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(imgInstance.value, (item, index) => {
            return withDirectives((openBlock(), createElementBlock("div", {
              key: index,
              class: "img-frame-contain"
            }, [
              createBaseVNode("img", {
                src: item.src,
                alt: ""
              }, null, 8, _hoisted_2$1)
            ])), [
              [vShow, item.isShow]
            ]);
          }), 128))
        ], 32)
      ]);
    };
  }
});
const frameSnapMob = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-79678803"]]);
const _hoisted_1 = { class: "model-page-frame-snap360-mob-container" };
const _hoisted_2 = { class: "frame-snap-mob-container-outer" };
const _hoisted_3 = { class: "frame-snap-mob-page" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "mob",
  props: {
    dataForm: {}
  },
  setup(__props) {
    const props = __props;
    const currentCarPositionView = ref(props.dataForm.currentViewCarPosition);
    const currentExteriorColor = ref(props.dataForm.currentExteriorColor);
    const currentInteriorColor = ref(props.dataForm.currentInteriorColor);
    const currentWheelsColor = ref(props.dataForm.currentWheelsColor);
    const threeFrameSnapPcRef = ref();
    const tl = gsapWithCSS.timeline();
    function handleSetCarPositionView(position) {
      const oldPosition = currentCarPositionView.value;
      currentCarPositionView.value = position;
      if (oldPosition === wheels && position !== oldPosition) {
        if (position === interior) {
          tl.to(".frame-snap-mob-container-outer .wheels-component-mob .wheels-component-container .wheels-component-container-img", {
            x: "-100%",
            duration: 0.8
          }).to(".frame-snap-mob-container-outer .wheels-component-mob", {
            duration: 0.2,
            zIndex: 0,
            opacity: 0
          }).to(".frame-snap-mob-container-outer .interior-mob-container", {
            duration: 0.3,
            zIndex: 1,
            opacity: 1
          }).to(".frame-snap-mob-container-outer .wheels-component-mob .wheels-component-container .wheels-component-container-img", {
            x: "100%",
            duration: 0,
            zIndex: 1,
            opacity: 1
          });
        }
        if (position === exterior) {
          tl.to(".frame-snap-mob-container-outer .wheels-component-mob .wheels-component-container .wheels-component-container-img", {
            x: "-100%",
            duration: 0.8
          }).to(".frame-snap-mob-container-outer .wheels-component-mob", {
            duration: 0.2,
            zIndex: 0,
            opacity: 0
          }).to(".frame-snap-mob-container-outer .exterior-mob-container", {
            duration: 0.3,
            zIndex: 1,
            opacity: 1
          }).to(".frame-snap-mob-container-outer .wheels-component-mob .wheels-component-container .wheels-component-container-img", {
            x: "100%",
            duration: 0,
            zIndex: 1,
            opacity: 1
          });
        }
      }
      if (oldPosition !== wheels && position === wheels) {
        if (oldPosition === exterior) {
          tl.to(".frame-snap-mob-container-outer .exterior-mob-container", {
            duration: 0.3,
            zIndex: 0,
            opacity: 0
          }).to(".frame-snap-mob-container-outer .wheels-component-mob", {
            duration: 0.3,
            zIndex: 1,
            opacity: 1
          }).to(".frame-snap-mob-container-outer .wheels-component-mob .wheels-component-container .wheels-component-container-img", {
            x: "0",
            duration: 0.3,
            zIndex: 1,
            opacity: 1
          });
        }
        if (oldPosition === interior) {
          tl.to(".frame-snap-mob-container-outer .interior-mob-container", {
            duration: 0.3,
            zIndex: 0,
            opacity: 0
          }).to(".frame-snap-mob-container-outer .wheels-component-mob", {
            duration: 0.3,
            zIndex: 1,
            opacity: 1
          }).to(".frame-snap-mob-container-outer .wheels-component-mob .wheels-component-container .wheels-component-container-img", {
            x: "0",
            duration: 0.3,
            zIndex: 1,
            opacity: 1
          });
        }
      }
      if (oldPosition === exterior && position !== exterior) {
        if (position === interior) {
          tl.to(".frame-snap-mob-container-outer .exterior-mob-container", {
            duration: 0.3,
            zIndex: 0,
            opacity: 0
          }).to(".frame-snap-mob-container-outer .interior-mob-container", {
            duration: 0.3,
            zIndex: 1,
            opacity: 1
          });
        }
      }
      if (oldPosition === interior && position !== interior) {
        if (position === exterior) {
          tl.to(".frame-snap-mob-container-outer .interior-mob-container", {
            duration: 0.3,
            zIndex: 0,
            opacity: 0
          }).to(".frame-snap-mob-container-outer .exterior-mob-container", {
            duration: 0.3,
            zIndex: 1,
            opacity: 1
          });
        }
      }
    }
    function viewInit() {
      if (props.dataForm.currentViewCarPosition === interior) {
        tl.to(".frame-snap-mob-container-outer .interior-mob-container", {
          duration: 0.2,
          zIndex: 1,
          opacity: 1
        });
      }
      if (props.dataForm.currentViewCarPosition === exterior) {
        tl.to(".frame-snap-mob-container-outer .exterior-mob-container", {
          duration: 0.2,
          zIndex: 1,
          opacity: 1
        });
      }
      if (props.dataForm.currentViewCarPosition === wheels) {
        tl.to(".frame-snap-mob-container-outer .wheels-component-mob", {
          duration: 0.2,
          zIndex: 1,
          opacity: 1
        }).to(".frame-snap-mob-container-outer .wheels-component-mob .wheels-component-container .wheels-component-container-img", {
          x: "0",
          duration: 0.3,
          zIndex: 1,
          opacity: 1
        });
      }
    }
    onMounted(() => {
      viewInit();
    });
    function handleSetExteriorColor(position) {
      currentExteriorColor.value = position;
    }
    function handleSetInteriorColor(position) {
      currentInteriorColor.value = position;
    }
    function handleSetWheelsColor(position) {
      currentWheelsColor.value = position;
    }
    const currentInteriorColorImags = computed(() => {
      const color = currentInteriorColor.value;
      const currentItem = props.dataForm.interiorCarData.find((item) => item.colorName === color);
      return (currentItem == null ? void 0 : currentItem.interiorImagesPc) || [];
    });
    const currentExteriorColorImags = computed(() => {
      const color = currentExteriorColor.value;
      const currentExteriorItem = props.dataForm.exteriorCarData.find((item) => item.colorName === color);
      return (currentExteriorItem == null ? void 0 : currentExteriorItem.exteriorImagesPc) || [];
    });
    const currentWheelsColorImags = computed(() => {
      const color = currentWheelsColor.value;
      const currentItem = props.dataForm.wheelsCarData.find((item) => item.colorName === color);
      return mediaType.value === "pc" ? (currentItem == null ? void 0 : currentItem.wheelsImagesPc) || [] : (currentItem == null ? void 0 : currentItem.wheelsImagesMob) || [];
    });
    const showInterior = computed(() => {
      return currentCarPositionView.value === interior;
    });
    const showExterior = computed(() => {
      return currentCarPositionView.value === exterior;
    });
    const showWheels = computed(() => {
      return currentCarPositionView.value === wheels;
    });
    const isOpenView = ref(false);
    function handleClose() {
      isOpenView.value = false;
    }
    function handleOpen() {
      isOpenView.value = true;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            class: normalizeClass([
              "three-frame-snap-mob",
              "interior-mob-container",
              showInterior.value && "is-active-mask"
            ])
          }, [
            createVNode(threeFrameSnapPc, {
              ref_key: "threeFrameSnapPcRef",
              ref: threeFrameSnapPcRef,
              "current-color": currentInteriorColor.value,
              "interior-car-data": _ctx.dataForm.interiorCarData,
              imgs: currentInteriorColorImags.value
            }, null, 8, ["current-color", "interior-car-data", "imgs"]),
            createVNode(pageNations, {
              "is-open-view": isOpenView.value,
              position: currentCarPositionView.value,
              "current-view-color": currentInteriorColor.value,
              "current-colors": _ctx.dataForm.interiorCarData,
              "data-form": _ctx.dataForm,
              onOnSelect: handleSetInteriorColor
            }, null, 8, ["is-open-view", "position", "current-view-color", "current-colors", "data-form"])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass([
              "frame-snap-mob-container",
              "exterior-mob-container",
              showExterior.value && "is-active-mask"
            ])
          }, [
            createVNode(frameSnapMob, { imgs: currentExteriorColorImags.value }, null, 8, ["imgs"]),
            createBaseVNode("div", _hoisted_3, [
              createVNode(pageNations, {
                "is-open-view": isOpenView.value,
                position: currentCarPositionView.value,
                "current-view-color": currentExteriorColor.value,
                "current-colors": _ctx.dataForm.exteriorCarData,
                "data-form": _ctx.dataForm,
                onOnSelect: handleSetExteriorColor
              }, null, 8, ["is-open-view", "position", "current-view-color", "current-colors", "data-form"])
            ])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass([
              "wheels-component-mob",
              showWheels.value && "is-active-mask",
              isOpenView.value && "is-open-wheels"
            ])
          }, [
            createVNode(wheelsComponent, {
              "data-form": _ctx.dataForm,
              "is-mob": true,
              imgs: currentWheelsColorImags.value,
              "current-color": currentWheelsColor.value
            }, null, 8, ["data-form", "imgs", "current-color"]),
            createVNode(pageNations, {
              "current-view-color": currentWheelsColor.value,
              position: currentCarPositionView.value,
              "is-open-view": isOpenView.value,
              "current-colors": _ctx.dataForm.wheelsCarData,
              "data-form": _ctx.dataForm,
              onOnSelect: handleSetWheelsColor
            }, null, 8, ["current-view-color", "position", "is-open-view", "current-colors", "data-form"])
          ], 2),
          createVNode(mobMaskCommonComponent, {
            "data-form": _ctx.dataForm,
            position: currentCarPositionView.value,
            "current-car-position-view": currentCarPositionView.value,
            "is-open-view": isOpenView.value,
            onOnClose: handleClose,
            onOnOpen: handleOpen,
            onOnSelect: handleSetCarPositionView
          }, null, 8, ["data-form", "position", "current-car-position-view", "is-open-view"])
        ])
      ]);
    };
  }
});
const Mob = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-da921333"]]);
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
mountComponents(".model-page-frame-snap360-mount-root-container", _sfc_main);

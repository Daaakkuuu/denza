import { createElementBlock, openBlock, createBaseVNode, createStaticVNode, defineComponent, useCssVars, computed, ref, onMounted, onUnmounted, normalizeClass, toDisplayString, watch, createCommentVNode, onBeforeUnmount, Fragment, renderList, normalizeStyle, nextTick, createVNode, ElInput, withCtx, ElSelect, withDirectives, createBlock, ElOption, withModifiers, vShow } from "./vendor.js";
import { mediaType, jumpToLink, areaNumberList } from "./utils.js";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$w = {};
const _hoisted_1$w = {
  width: "12.000000",
  height: "12.000000",
  viewBox: "0 0 12 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render$r(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$w, _cache[0] || (_cache[0] = [
    createBaseVNode("defs", null, null, -1),
    createBaseVNode("rect", {
      width: "12.000000",
      height: "12.000000",
      fill: "#FFFFFF",
      "fill-opacity": "0"
    }, null, -1),
    createBaseVNode("path", {
      d: "M2.5 6L4.64 8.14C4.84 8.34 5.15 8.34 5.35 8.14L10 3.5",
      stroke: "#FFFFFF",
      "stroke-opacity": "1.000000",
      "stroke-width": "1.330000",
      "stroke-linejoin": "round",
      "stroke-linecap": "round"
    }, null, -1)
  ]));
}
const IconSelectedNoBg = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$r]]);
const _sfc_main$v = {};
const _hoisted_1$v = {
  width: "24.000000",
  height: "24.000000",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render$q(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$v, _cache[0] || (_cache[0] = [
    createStaticVNode('<defs><clipPath id="clip3850_87838"><rect id="Search" width="24.000000" height="24.000000" fill="white" fill-opacity="0"></rect></clipPath></defs><g clip-path="url(#clip3850_87838)"><circle id="Ellipse 2" cx="12.000000" cy="11.000000" r="6.000000" fill="#D9D9D9" fill-opacity="0"></circle><circle id="Ellipse 2" cx="12.000000" cy="11.000000" r="6.000000" stroke="#CACCCD" stroke-opacity="1.000000" stroke-width="1.500000"></circle><path id="Vector 2" d="M16.11 16.1L19 19" stroke="#CACCCD" stroke-opacity="1.000000" stroke-width="1.500000"></path></g>', 2)
  ]));
}
const IconSearch = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$q]]);
const _sfc_main$u = {};
const _hoisted_1$u = {
  width: "66.650391",
  height: "66.650391",
  viewBox: "0 0 66.6504 66.6504",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render$p(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$u, _cache[0] || (_cache[0] = [
    createStaticVNode('<defs><clipPath id="clip2557_86930"><rect id="wrong" width="66.000000" height="66.000000" transform="translate(0.000000 0.653564) rotate(-0.567330)" fill="white" fill-opacity="0"></rect></clipPath></defs><rect id="wrong" width="66.000000" height="66.000000" transform="translate(0.000000 0.653564) rotate(-0.567330)" fill="#FFFFFF" fill-opacity="0"></rect><g clip-path="url(#clip2557_86930)"><path id="Vector" d="M33.68 57.88C19.91 58.02 8.63 46.96 8.49 33.19C8.36 19.41 19.41 8.13 33.19 8C46.96 7.86 58.24 18.92 58.37 32.69C58.51 46.47 47.45 57.74 33.68 57.88Z" stroke="#D80C18" stroke-opacity="1.000000" stroke-width="4.000000" stroke-linejoin="round"></path><path id="合并" d="M26.166 23.3295L33.0039 30.1664L39.8379 23.3334C40.6289 22.5415 41.873 22.5415 42.666 23.3335C43.457 24.1255 43.457 25.37 42.666 26.162L35.832 32.9948L42.668 39.8295C43.459 40.6215 43.459 41.866 42.668 42.658C41.875 43.45 40.6309 43.45 39.8398 42.6581L33.0039 35.8231L26.1641 42.662C25.373 43.4539 24.1289 43.4539 23.3359 42.6619C22.5449 41.8699 22.5449 40.6254 23.3359 39.8334L30.1758 32.9948L23.3379 26.1581C22.5469 25.3661 22.5469 24.1216 23.3379 23.3296C24.1309 22.5376 25.375 22.5376 26.166 23.3295Z" clip-rule="evenodd" fill="#D80C18" fill-opacity="1.000000" fill-rule="evenodd"></path></g>', 3)
  ]));
}
const IconFail = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$p]]);
const _sfc_main$t = {};
const _hoisted_1$t = {
  width: "66.087891",
  height: "66.087616",
  viewBox: "0 0 66.0879 66.0876",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render$o(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$t, _cache[0] || (_cache[0] = [
    createStaticVNode('<defs><clipPath id="clip2557_86905"><rect id="right" width="65.442863" height="65.442863" transform="translate(0.000000 0.647980) rotate(-0.567330)" fill="white" fill-opacity="0"></rect></clipPath></defs><rect id="right" width="65.442863" height="65.442863" transform="translate(0.000000 0.647980) rotate(-0.567330)" fill="#FFFFFF" fill-opacity="0"></rect><g clip-path="url(#clip2557_86905)"><path id="Vector" d="M20.45 34.73L26.91 42.09C27.07 42.3 27.27 42.47 27.5 42.59C27.73 42.71 27.99 42.78 28.25 42.79C28.51 42.81 28.77 42.77 29.01 42.67C29.26 42.57 29.48 42.43 29.66 42.24L45.91 25.51" stroke="#00A45F" stroke-opacity="1.000000" stroke-width="4.000000" stroke-linejoin="round" stroke-linecap="round"></path><path id="Vector" d="M33.4 57.88C19.74 58.02 8.56 47.05 8.42 33.4C8.28 19.74 19.25 8.56 32.91 8.42C46.56 8.29 57.75 19.25 57.88 32.91C58.02 46.56 47.05 57.75 33.4 57.88Z" stroke="#00A45F" stroke-opacity="1.000000" stroke-width="4.000000" stroke-linejoin="round"></path></g>', 3)
  ]));
}
const IconSuccess = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$o]]);
const _sfc_main$s = {};
const _hoisted_1$s = {
  width: "20.000000",
  height: "20.000000",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render$n(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$s, _cache[0] || (_cache[0] = [
    createBaseVNode("defs", null, null, -1),
    createBaseVNode("rect", {
      id: "Icon Right",
      width: "20.000000",
      height: "20.000000",
      fill: "#FFFFFF",
      "fill-opacity": "0"
    }, null, -1),
    createBaseVNode("path", {
      id: "Union",
      d: "M17.56 14.03C17.56 14.78 17.33 15.58 16.87 16.21L16.71 16.42C16.41 16.85 15.98 17.15 15.47 17.33C15.11 17.46 14.89 17.49 14.33 17.55C11.89 17.73 9.25 16.54 6.66 14.16C4.94 12.56 3.66 10.58 3.07 8.56C2.81 7.71 2.69 6.9 2.7 6.16C2.72 5.28 2.93 4.52 3.35 3.95C3.73 3.44 4.46 3.02 5.56 2.63C6.1 2.44 6.69 2.63 7.01 3.1L9.04 6.09C9.37 6.58 9.32 7.24 8.9 7.67L8.62 7.94L8.29 8.25C8.2 8.32 8.08 8.48 8.08 8.48C8.04 8.86 8.43 9.66 9.6 10.9L9.95 11.24C11.03 12.27 11.32 12.36 11.66 12.13L11.78 12.04C11.9 11.95 12.21 11.74 12.89 11.3C13.28 11.04 13.77 11.02 14.18 11.24L14.48 11.41C16.54 12.56 17.48 13.24 17.55 13.93L17.56 14.03ZM16.31 14.02C16.31 14.13 16.17 13.97 15.87 13.74C15.44 13.42 14.77 13 13.87 12.5L13.58 12.34L12.58 13C12.56 13.01 12.55 13.02 12.55 13.02C11.46 13.84 10.54 13.58 8.71 11.77C7.3 10.28 6.76 9.18 6.83 8.37C6.87 7.93 7.18 7.53 7.48 7.3C7.6 7.18 7.73 7.06 7.85 6.95L8 6.79L5.98 3.81C5.1 4.12 4.55 4.43 4.35 4.7C4.11 5.03 3.96 5.54 3.95 6.18C3.94 6.79 4.05 7.48 4.26 8.21C4.79 10 5.95 11.79 7.51 13.24C9.86 15.41 12.19 16.45 14.22 16.3L14.54 16.27C14.76 16.24 14.89 16.21 15.05 16.16C15.33 16.06 15.55 15.9 15.73 15.65C16.07 15.25 16.26 14.73 16.3 14.23L16.31 14.02Z",
      fill: "#252728",
      "fill-opacity": "1.000000",
      "fill-rule": "nonzero"
    }, null, -1)
  ]));
}
const IconPhone = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$n]]);
const _sfc_main$r = {};
const _hoisted_1$r = {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function _sfc_render$m(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$r, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      d: "M15.1436 16.0605V16.0918H4.85645V16.0605H15.1436ZM2.74707 15.0352C2.91207 15.4497 3.24178 15.7793 3.65625 15.9443V15.9775C3.44431 15.8951 3.24888 15.7704 3.08496 15.6064C2.92103 15.4425 2.79632 15.2471 2.71387 15.0352H2.74707ZM17.2861 15.0352C17.2037 15.2471 17.079 15.4425 16.915 15.6064C16.7511 15.7704 16.5557 15.8951 16.3438 15.9775V15.9443C16.7582 15.7793 17.0879 15.4497 17.2529 15.0352H17.2861ZM17.4004 5.80469V13.835H17.3691V5.80469H17.4004ZM2.63086 5.80469V13.835H2.59961V5.80469H2.63086ZM16.1689 4.57324V4.60449H3.83105V4.57324H16.1689Z",
      fill: "black",
      stroke: "#252728",
      "stroke-width": "1.2"
    }, null, -1),
    createBaseVNode("path", {
      d: "M2.61548 4.58887L10.0001 11.9735L17.3847 4.58887",
      stroke: "#252728",
      "stroke-width": "1.2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, null, -1)
  ]));
}
const IconEmail = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$m]]);
const _sfc_main$q = {};
const _hoisted_1$q = {
  width: "24.000000",
  height: "24.000000",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render$l(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$q, _cache[0] || (_cache[0] = [
    createStaticVNode('<defs><clipPath id="clip1663_86209"><rect width="24.000000" height="24.000000" fill="white" fill-opacity="0"></rect></clipPath></defs><g clip-path="url(#clip1663_86209)"><path d="M15.48 5C10.24 5 6 8.85 6 13.6C6 13.83 6 14.05 6.02 14.27C6.02 14.31 6.02 14.34 6.02 14.38C6.02 14.42 6.02 14.46 6.03 14.5C6.21 16.43 7.46 21.36 14.86 27.78C15.23 28.09 15.77 28.09 16.14 27.78C23.54 21.36 24.79 16.43 24.97 14.5C24.97 14.43 24.97 14.36 24.96 14.3C24.96 14.24 24.95 14.18 24.95 14.12C24.96 13.95 24.97 13.78 24.97 13.6C24.97 8.85 20.72 5 15.48 5Z" fill="#C4C4C4" fill-opacity="0" fill-rule="evenodd"></path><path d="M4.99219 10.3604C4.99219 6.84766 8.12109 4 11.9805 4C15.8418 4 18.9707 6.84766 18.9707 10.3604C18.9707 10.4902 18.9668 10.6191 18.957 10.7471C18.957 10.79 18.9668 10.834 18.9668 10.877C18.9746 10.9248 18.9766 10.9746 18.9707 11.0264C18.8379 12.4482 17.9219 16.0986 12.4648 20.8379C12.1953 21.0723 11.7949 21.0723 11.5254 20.8379C6.06836 16.0986 5.15039 12.4492 5.01562 11.0264C5.01172 10.9961 5.01172 10.9658 5.01367 10.9365L5.01367 10.8574C5 10.6934 4.99219 10.5273 4.99219 10.3604ZM9.40039 6.03027C8.9082 6.26562 8.45117 6.57422 8.0293 6.95801C7.4043 7.52637 6.9668 8.16211 6.7168 8.86523C6.71484 8.86816 6.71484 8.87012 6.71289 8.87305C6.54883 9.33984 6.4668 9.83496 6.4668 10.3604C6.4668 10.4844 6.4707 10.6084 6.48242 10.7314L6.48633 10.9062C6.58008 11.8008 6.93945 12.8418 7.56445 13.9727C8.52344 15.7129 10.002 17.4824 11.9961 19.2822C13.9883 17.4824 15.4648 15.7129 16.4258 13.9727C17.0352 12.8652 17.3906 11.8721 17.4941 10.9922C17.4863 10.9248 17.4844 10.8037 17.4844 10.7471L17.4863 10.6494C17.4941 10.5537 17.4961 10.457 17.4961 10.3604C17.4961 9.83496 17.4141 9.33887 17.248 8.87305C17.248 8.87012 17.248 8.86816 17.2461 8.86523C16.9961 8.16211 16.5586 7.52637 15.9336 6.95801C15.5117 6.57422 15.0547 6.26562 14.5625 6.03027C13.7891 5.66211 12.9297 5.47852 11.9805 5.47852C11.0391 5.47852 10.1816 5.66016 9.41211 6.02539C9.4082 6.02734 9.4043 6.0293 9.40039 6.03027ZM11.9922 9.17188C10.9766 9.17188 10.1504 9.99902 10.1504 11.0195C10.1504 12.04 10.9766 12.8672 11.9922 12.8672C13.0098 12.8672 13.8359 12.04 13.8359 11.0195C13.8359 9.99902 13.0098 9.17188 11.9922 9.17188Z" clip-rule="evenodd" fill="#001433" fill-opacity="1.000000" fill-rule="evenodd"></path></g>', 2)
  ]));
}
const IconLocation = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$l]]);
const _sfc_main$p = {};
const _hoisted_1$p = {
  width: "15.916016",
  height: "16.800049",
  viewBox: "0 0 15.916 16.8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render$k(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$p, _cache[0] || (_cache[0] = [
    createStaticVNode('<defs></defs><path id="Vector 200" d="M13.26 7.69L15.91 7.69L15.91 9.1L13.26 9.1L13.26 7.69Z" fill="#0F85FA" fill-opacity="1.000000" fill-rule="evenodd"></path><path id="Vector 202" d="M8.66 14.14L8.66 16.79L7.24 16.79L7.24 14.14L8.66 14.14Z" fill="#0F85FA" fill-opacity="1.000000" fill-rule="evenodd"></path><path id="Vector 201" d="M0 7.69L2.65 7.69L2.65 9.1L0 9.1L0 7.69Z" fill="#0F85FA" fill-opacity="1.000000" fill-rule="evenodd"></path><path id="Vector 203" d="M8.66 0L8.66 2.65L7.24 2.65L7.24 0L8.66 0Z" fill="#0F85FA" fill-opacity="1.000000" fill-rule="evenodd"></path><circle id="Ellipse 170" cx="7.957642" cy="8.399902" r="5.481108" stroke="#0F85FA" stroke-opacity="1.000000" stroke-width="1.416667"></circle><circle id="Ellipse 171" cx="7.957886" cy="8.399414" r="0.884206" fill="#0F85FA" fill-opacity="1.000000"></circle>', 7)
  ]));
}
const IconPosition = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$k]]);
const _sfc_main$o = {};
const _hoisted_1$o = {
  width: "20.000000",
  height: "20.000000",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render$j(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$o, _cache[0] || (_cache[0] = [
    createStaticVNode('<defs><clipPath id="clip5586_98630"><rect id="formkit:date" width="15.000000" height="15.000000" transform="translate(2.000000 2.000000)" fill="white" fill-opacity="0"></rect></clipPath></defs><rect id="formkit:date" width="15.000000" height="15.000000" transform="translate(2.000000 2.000000)" fill="#FFFFFF" fill-opacity="0"></rect><g clip-path="url(#clip5586_98630)"><path id="Vector" d="M15.59 17L3.4 17C2.62 17 2 16.37 2 15.59L2 5.28C2 4.5 2.62 3.87 3.4 3.87L15.59 3.87C16.37 3.87 17 4.5 17 5.28L17 15.59C17 16.37 16.37 17 15.59 17ZM3.4 4.81C3.14 4.81 2.93 5.01 2.93 5.28L2.93 15.59C2.93 15.85 3.14 16.06 3.4 16.06L15.59 16.06C15.85 16.06 16.06 15.85 16.06 15.59L16.06 5.28C16.06 5.01 15.85 4.81 15.59 4.81L3.4 4.81Z" fill="#252728" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M3.4 17C2.62 17 2 16.37 2 15.59L2 5.28C2 4.5 2.62 3.87 3.4 3.87L15.59 3.87C16.37 3.87 17 4.5 17 5.28L17 15.59C17 16.37 16.37 17 15.59 17L3.4 17ZM2.93 5.28L2.93 15.59C2.93 15.85 3.14 16.06 3.4 16.06L15.59 16.06C15.85 16.06 16.06 15.85 16.06 15.59L16.06 5.28C16.06 5.01 15.85 4.81 15.59 4.81L3.4 4.81C3.14 4.81 2.93 5.01 2.93 5.28Z" stroke="#252728" stroke-opacity="1.000000" stroke-width="0.500000"></path><path id="Vector" d="M6.21 2C5.95 2 5.75 2.2 5.75 2.46L5.75 5.28C5.75 5.54 5.95 5.75 6.21 5.75C6.48 5.75 6.68 5.54 6.68 5.28L6.68 2.46C6.68 2.2 6.48 2 6.21 2ZM12.31 5.28C12.31 5.54 12.51 5.75 12.78 5.75C13.04 5.75 13.25 5.54 13.25 5.28L13.25 2.46C13.25 2.2 13.04 2 12.78 2C12.51 2 12.31 2.2 12.31 2.46L12.31 5.28ZM2.46 8.56L16.53 8.56C16.79 8.56 17 8.35 17 8.09C17 7.83 16.79 7.62 16.53 7.62L2.46 7.62C2.2 7.62 2 7.83 2 8.09C2 8.35 2.2 8.56 2.46 8.56Z" fill="#252728" fill-opacity="1.000000" fill-rule="evenodd"></path><path id="Vector" d="M5.75 5.28L5.75 2.46C5.75 2.2 5.95 2 6.21 2C6.48 2 6.68 2.2 6.68 2.46L6.68 5.28C6.68 5.54 6.48 5.75 6.21 5.75C5.95 5.75 5.75 5.54 5.75 5.28ZM12.31 5.28L12.31 2.46C12.31 2.2 12.51 2 12.78 2C13.04 2 13.25 2.2 13.25 2.46L13.25 5.28C13.25 5.54 13.04 5.75 12.78 5.75C12.51 5.75 12.31 5.54 12.31 5.28ZM2.46 8.56C2.2 8.56 2 8.35 2 8.09C2 7.83 2.2 7.62 2.46 7.62L16.53 7.62C16.79 7.62 17 7.83 17 8.09C17 8.35 16.79 8.56 16.53 8.56L2.46 8.56ZM6.21 5.75C5.95 5.75 5.75 5.54 5.75 5.28M6.21 2C6.48 2 6.68 2.2 6.68 2.46M6.68 5.28C6.68 5.54 6.48 5.75 6.21 5.75" stroke="#252728" stroke-opacity="1.000000" stroke-width="0.200000"></path><path id="Vector" d="M13.71 13.71L8.09 13.71C7.83 13.71 7.62 13.51 7.62 13.25C7.62 12.98 7.83 12.78 8.09 12.78L13.71 12.78C13.98 12.78 14.18 12.98 14.18 13.25C14.18 13.51 13.98 13.71 13.71 13.71Z" fill="#252728" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M8.09 13.71C7.83 13.71 7.62 13.51 7.62 13.25C7.62 12.98 7.83 12.78 8.09 12.78L13.71 12.78C13.98 12.78 14.18 12.98 14.18 13.25C14.18 13.51 13.98 13.71 13.71 13.71L8.09 13.71Z" stroke="#252728" stroke-opacity="1.000000" stroke-width="0.200000"></path><path id="Vector" d="M13.71 11.37L10.9 11.37C10.64 11.37 10.43 11.16 10.43 10.9C10.43 10.64 10.64 10.43 10.9 10.43L13.71 10.43C13.98 10.43 14.18 10.64 14.18 10.9C14.18 11.16 13.98 11.37 13.71 11.37Z" fill="#252728" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M10.9 11.37C10.64 11.37 10.43 11.16 10.43 10.9C10.43 10.64 10.64 10.43 10.9 10.43L13.71 10.43C13.98 10.43 14.18 10.64 14.18 10.9C14.18 11.16 13.98 11.37 13.71 11.37L10.9 11.37Z" stroke="#252728" stroke-opacity="1.000000" stroke-width="0.200000"></path></g>', 3)
  ]));
}
const IconHour = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$j]]);
const _sfc_main$n = {};
const _hoisted_1$n = {
  width: "24.000000",
  height: "24.000000",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render$i(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$n, _cache[0] || (_cache[0] = [
    createBaseVNode("defs", null, null, -1),
    createBaseVNode("g", { style: { "mix-blend-mode": "normal" } }, [
      createBaseVNode("rect", {
        id: "arrow-down",
        width: "24.000000",
        height: "24.000000",
        transform: "translate(24.000000 0.000000) rotate(90.000000)",
        fill: "#FFFFFF",
        "fill-opacity": "0"
      }),
      createBaseVNode("path", {
        id: "Vector 196 (Stroke)",
        d: "M7.2 12.69L13.68 19.37L14.66 18.36L8.67 12.18L14.66 6.01L13.68 5L7.2 11.68C6.93 11.96 6.93 12.41 7.2 12.69Z",
        fill: "#000000",
        "fill-opacity": "0.950000",
        "fill-rule": "evenodd"
      })
    ], -1)
  ]));
}
const IconGoBack = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$i]]);
const _sfc_main$m = {};
const _hoisted_1$m = {
  width: "16.000000",
  height: "16.000000",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render$h(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$m, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      id: "path",
      d: "M3 8L13 8",
      stroke: "CurrentColor",
      "stroke-opacity": "1.000000",
      "stroke-width": "1.000000",
      "stroke-linecap": "round"
    }, null, -1),
    createBaseVNode("path", {
      id: "path",
      d: "M8 13L8 3",
      stroke: "CurrentColor",
      "stroke-opacity": "1.000000",
      "stroke-width": "1.000000",
      "stroke-linecap": "round"
    }, null, -1)
  ]));
}
const IconPlus = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$h]]);
const _sfc_main$l = {};
const _hoisted_1$l = {
  width: "24.000000",
  height: "24.000000",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render$g(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$l, _cache[0] || (_cache[0] = [
    createBaseVNode("desc", null, "Created with Pixso.", -1),
    createBaseVNode("defs", null, [
      createBaseVNode("clipPath", { id: "clip2281_86771" }, [
        createBaseVNode("rect", {
          id: "属性 1=减",
          width: "24.000000",
          height: "24.000000",
          fill: "white",
          "fill-opacity": "0"
        })
      ])
    ], -1),
    createBaseVNode("g", { "clip-path": "url(#clip2281_86771)" }, [
      createBaseVNode("path", {
        id: "Vector",
        d: "M6 12L18 12",
        stroke: "CurrentColor",
        "stroke-opacity": "1.000000",
        "stroke-width": "1.500000",
        "stroke-linejoin": "round",
        "stroke-linecap": "square"
      })
    ], -1)
  ]));
}
const IconMinus = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$g]]);
const _sfc_main$k = {};
const _hoisted_1$k = {
  width: "32.000000",
  height: "32.000000",
  viewBox: "0 0 32 32",
  fill: "CurrentColor",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$k, _cache[0] || (_cache[0] = [
    createStaticVNode('<defs><clipPath id="clip3184_21455"><rect id="画板 1574" width="32.000000" height="32.000000" fill="white" fill-opacity="0"></rect></clipPath></defs><rect id="画板 1574" width="32.000000" height="32.000000" fill="#F7F7F7" fill-opacity="0"></rect><g clip-path="url(#clip3184_21455)"><path id="Stroke 46 (边框)" d="M25.41 8L24.7 8.7L17.41 16L24.69 23.27L25.41 24L24 25.41L23.29 24.7L14.58 16L23.27 7.3L24 6.58L25.41 8Z" fill="CurrentColor" fill-opacity="1.000000" fill-rule="evenodd"></path><path id="Stroke 48 (边框)" d="M6.58 8L7.29 8.7L14.58 16L7.3 23.27L6.58 24L8 25.41L8.7 24.7L17.41 16L8.72 7.3L8 6.58L6.58 8Z" fill="CurrentColor" fill-opacity="1.000000" fill-rule="evenodd"></path></g>', 3)
  ]));
}
const IconClose = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$f]]);
const _sfc_main$j = {};
const _hoisted_1$j = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function _sfc_render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$j, _cache[0] || (_cache[0] = [
    createBaseVNode("circle", {
      cx: "16",
      cy: "16",
      r: "14",
      stroke: "white",
      "stroke-opacity": "0.8",
      "stroke-width": "1.5"
    }, null, -1),
    createBaseVNode("path", {
      d: "M14 19.9325V12.0675C14 11.6436 14.4944 11.412 14.8201 11.6834L19.5391 15.6159C19.7789 15.8158 19.7789 16.1842 19.5391 16.3841L14.8201 20.3166C14.4944 20.588 14 20.3564 14 19.9325Z",
      fill: "#D9D9D9"
    }, null, -1)
  ]));
}
const IconVideoPlay = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$e]]);
const _sfc_main$i = {};
const _hoisted_1$i = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function _sfc_render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$i, _cache[0] || (_cache[0] = [
    createBaseVNode("circle", {
      cx: "16",
      cy: "16",
      r: "14",
      stroke: "white",
      "stroke-opacity": "0.8",
      "stroke-width": "1.5"
    }, null, -1),
    createBaseVNode("path", {
      d: "M19 12V20",
      stroke: "white",
      "stroke-opacity": "0.8",
      "stroke-width": "1.5",
      "stroke-linecap": "round"
    }, null, -1),
    createBaseVNode("path", {
      d: "M13 12V20",
      stroke: "white",
      "stroke-opacity": "0.8",
      "stroke-width": "1.5",
      "stroke-linecap": "round"
    }, null, -1)
  ]));
}
const IconVideoPause = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$d]]);
const _sfc_main$h = {};
const _hoisted_1$h = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function _sfc_render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$h, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M19.4179 4.0915C19.7727 4.25469 20 4.60948 20 5.00001V27C20 27.3905 19.7727 27.7453 19.4179 27.9085C19.0631 28.0717 18.6457 28.0134 18.3492 27.7593L11.6301 22H5C4.44772 22 4 21.5523 4 21L4 11C4 10.7348 4.10536 10.4804 4.29289 10.2929C4.48043 10.1054 4.73478 10 5 10H11.6301L18.3492 4.24076C18.6457 3.9866 19.0631 3.92832 19.4179 4.0915ZM18 7.17423L12.6508 11.7593C12.4695 11.9146 12.2387 12 12 12H10V20H12C12.2387 20 12.4695 20.0854 12.6508 20.2408L18 24.8258V7.17423ZM8 20V12H6L6 20H8ZM24.3949 9.20385C24.8346 8.86967 25.462 8.95522 25.7962 9.39493C27.8935 12.1546 28 15.1214 28 16C28 19.5205 26.3468 21.8349 25.8154 22.5789L25.8137 22.5813C25.4927 23.0307 24.8682 23.1348 24.4188 22.8137C23.9693 22.4927 23.8653 21.8682 24.1863 21.4188C24.6567 20.7602 26 18.8758 26 16C26 15.2786 25.9065 12.8454 24.2038 10.6051C23.8697 10.1654 23.9552 9.53803 24.3949 9.20385Z",
      fill: "white",
      "fill-opacity": "0.8"
    }, null, -1),
    createBaseVNode("path", {
      d: "M22.8223 12.4308C22.5079 11.9767 21.885 11.8634 21.4309 12.1778C20.9768 12.4922 20.8635 13.1151 21.1779 13.5692C21.924 14.6469 22.0001 15.7242 22.0001 16C22.0001 16.6531 21.8573 17.1983 21.6888 17.6045C21.6045 17.8078 21.5153 17.9726 21.438 18.0948C21.3994 18.1558 21.3652 18.2038 21.338 18.2391C21.3244 18.2566 21.3134 18.2699 21.3051 18.2795C21.2975 18.2882 21.293 18.2929 21.293 18.2929C20.9025 18.6834 20.9025 19.3166 21.293 19.7071C21.6835 20.0976 22.3167 20.0976 22.7072 19.7071C23.1944 19.2199 24.0001 17.8657 24.0001 16C24.0001 15.4758 23.8762 13.9531 22.8223 12.4308Z",
      fill: "white",
      "fill-opacity": "0.8"
    }, null, -1)
  ]));
}
const IconAuto = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$c]]);
const _sfc_main$g = {};
const _hoisted_1$g = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function _sfc_render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$g, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M19.4179 4.0915C19.7727 4.25469 20 4.60948 20 5.00001V8.5858L24.2929 4.29291C24.6834 3.90238 25.3166 3.90238 25.7071 4.29291C26.0976 4.68343 26.0976 5.3166 25.7071 5.70712L5.70711 25.7071C5.31658 26.0976 4.68342 26.0976 4.29289 25.7071C3.90237 25.3166 3.90237 24.6834 4.29289 24.2929L6.58579 22H5C4.44772 22 4 21.5523 4 21L4 11C4 10.7348 4.10536 10.4804 4.29289 10.2929C4.48043 10.1054 4.73478 10 5 10H11.6301L18.3492 4.24076C18.6457 3.9866 19.0631 3.92832 19.4179 4.0915ZM10 18.5858L18 10.5858V7.17423L12.6508 11.7593C12.4695 11.9146 12.2387 12 12 12H10V18.5858ZM8 12H6L6 20H8V12ZM18 16.5C18 15.9477 18.4477 15.5 19 15.5C19.5523 15.5 20 15.9477 20 16.5V27C20 27.3905 19.7727 27.7453 19.4179 27.9085C19.0631 28.0717 18.6457 28.0134 18.3492 27.7593L12.6865 22.9055C12.2672 22.5461 12.2186 21.9148 12.578 21.4955C12.9374 21.0761 13.5687 21.0276 13.9881 21.387L18 24.8258V16.5Z",
      fill: "white",
      "fill-opacity": "0.8"
    }, null, -1)
  ]));
}
const IconMute = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$b]]);
const _sfc_main$f = {};
const _hoisted_1$f = {
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function _sfc_render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$f, _cache[0] || (_cache[0] = [
    createStaticVNode('<g data-figma-bg-blur-radius="20"><rect width="48" height="48" rx="24" fill="white"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M23.5303 28.2803C23.8232 27.9874 23.8232 27.5126 23.5303 27.2197L21.0607 24.75H29.75C30.1642 24.75 30.5 24.4142 30.5 24C30.5 23.5858 30.1642 23.25 29.75 23.25H21.0607L23.5303 20.7803C23.8232 20.4874 23.8232 20.0126 23.5303 19.7197C23.2374 19.4268 22.7626 19.4268 22.4697 19.7197L18.7197 23.4697C18.4268 23.7626 18.4268 24.2374 18.7197 24.5303L22.4697 28.2803C22.7626 28.5732 23.2374 28.5732 23.5303 28.2803Z" fill="#363636"></path></g><defs><clipPath id="bgblur_0_1182_7399_clip_path" transform="translate(20 20)"><rect width="48" height="48" rx="24"></rect></clipPath></defs>', 2)
  ]));
}
const IconSwiperRoundedArrowLeft = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$a]]);
const _sfc_main$e = {};
const _hoisted_1$e = {
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function _sfc_render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$e, _cache[0] || (_cache[0] = [
    createStaticVNode('<g data-figma-bg-blur-radius="20"><rect width="48" height="48" rx="24" fill="white"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M25.4697 19.7197C25.1768 20.0126 25.1768 20.4874 25.4697 20.7803L27.9393 23.25H19.25C18.8358 23.25 18.5 23.5858 18.5 24C18.5 24.4142 18.8358 24.75 19.25 24.75H27.9393L25.4697 27.2197C25.1768 27.5126 25.1768 27.9874 25.4697 28.2803C25.7626 28.5732 26.2374 28.5732 26.5303 28.2803L30.2803 24.5303C30.5732 24.2374 30.5732 23.7626 30.2803 23.4697L26.5303 19.7197C26.2374 19.4268 25.7626 19.4268 25.4697 19.7197Z" fill="#363636"></path></g><defs><clipPath id="bgblur_0_1182_7405_clip_path" transform="translate(20 20)"><rect width="48" height="48" rx="24"></rect></clipPath></defs>', 2)
  ]));
}
const IconSwiperRoundedArrowRight = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$9]]);
const _sfc_main$d = {};
const _hoisted_1$d = {
  width: "32.000000",
  height: "32.000000",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$d, _cache[0] || (_cache[0] = [
    createBaseVNode("rect", {
      id: "Iconly/Sharp/Light/Arrow - Right",
      width: "32.000000",
      height: "32.000000",
      transform: "matrix(-1 0 0 1 32 0)",
      fill: "#FFFFFF",
      "fill-opacity": "0"
    }, null, -1),
    createBaseVNode("path", {
      id: "Stroke 46",
      d: "M18.17 7.96L10.1 16L18.17 24.03",
      class: "cls-left",
      stroke: "CurrentColor",
      "stroke-opacity": "0.700000",
      "stroke-width": "2.000000",
      "stroke-linecap": "round"
    }, null, -1)
  ]));
}
const IconArrowLeft = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$8]]);
const _sfc_main$c = {};
const _hoisted_1$c = {
  width: "32.000000",
  height: "32.000000",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _cache[0] || (_cache[0] = [
    createBaseVNode("defs", null, null, -1),
    createBaseVNode("rect", {
      id: "Iconly/Sharp/Light/Arrow - Right",
      width: "32.000000",
      height: "32.000000",
      fill: "#FFFFFF",
      "fill-opacity": "0"
    }, null, -1),
    createBaseVNode("path", {
      id: "Stroke 46",
      d: "M13.82 7.96L21.89 16L13.82 24.03",
      stroke: "CurrentColor",
      "stroke-opacity": "0.700000",
      "stroke-width": "2.000000",
      "stroke-linecap": "round"
    }, null, -1)
  ]));
}
const IconArrowRight = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$7]]);
const _hoisted_1$b = ["disabled"];
const _hoisted_2$2 = { class: "button-content" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Button",
  props: {
    text: {},
    type: { default: "linear" },
    theme: { default: "dark" },
    href: { default: void 0 },
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "5db50108": scale.value
    }));
    const props = __props;
    const isHoverOpen = computed(() => !props.disabled && mediaType.value === "pc" && props.type !== "simple");
    const isClickOpen = computed(() => !props.disabled && mediaType.value === "mob" && props.type !== "simple");
    const buttonClass = computed(() => {
      const classes = [];
      if (mediaType.value === "mob") {
        classes.push("button-mob");
      }
      if (mediaType.value === "pc") {
        classes.push("button-pc");
      }
      if (isHoverOpen.value) {
        classes.push(`button-hover-effect-${props.type}`);
      }
      if (isClickOpen.value) {
        classes.push(`button-click-effect-${props.type}-${props.theme}`);
      }
      return classes;
    });
    const typeClass = computed(() => {
      const { type, theme } = props;
      return `button-${type}-${theme}`;
    });
    const scale = ref("scale(50)");
    function handleJump() {
      if (props.href) {
        jumpToLink(props.href);
      }
    }
    const btnRef = ref();
    const resizeObserver = new ResizeObserver(() => {
      calculateScale();
    });
    function calculateScale() {
      var _a, _b;
      const bgR = 20 / 1920 * window.innerWidth;
      const width = (_a = btnRef.value) == null ? void 0 : _a.getBoundingClientRect().width;
      const height = (_b = btnRef.value) == null ? void 0 : _b.getBoundingClientRect().height;
      if (width && height) {
        const hypo = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
        scale.value = `scale(${hypo / bgR})`;
      }
    }
    onMounted(() => {
      if (btnRef.value && mediaType.value === "pc") {
        resizeObserver.observe(btnRef.value);
        calculateScale();
      }
    });
    onUnmounted(() => {
      if (btnRef.value && mediaType.value === "pc") {
        resizeObserver.disconnect();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        ref_key: "btnRef",
        ref: btnRef,
        type: "button",
        disabled: _ctx.disabled,
        class: normalizeClass([...buttonClass.value, "button-base", typeClass.value, { "button-disabled": _ctx.disabled }]),
        onClick: handleJump
      }, [
        _cache[0] || (_cache[0] = createBaseVNode("span", { class: "bg" }, null, -1)),
        createBaseVNode("div", _hoisted_2$2, toDisplayString(_ctx.text), 1)
      ], 10, _hoisted_1$b);
    };
  }
});
const Button = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-29ffc61c"]]);
const _sfc_main$a = {};
const _hoisted_1$a = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none"
};
function _sfc_render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      d: "M17 6C17 5.44772 16.5523 5 16 5C15.4477 5 15 5.44772 15 6V15H6C5.44772 15 5 15.4477 5 16C5 16.5523 5.44772 17 6 17H15V26C15 26.5523 15.4477 27 16 27C16.5523 27 17 26.5523 17 26V17H26C26.5523 17 27 16.5523 27 16C27 15.4477 26.5523 15 26 15H17V6Z",
      fill: "#242729"
    }, null, -1)
  ]));
}
const iconMainheaderPlus = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$6]]);
const _sfc_main$9 = {};
const _hoisted_1$9 = {
  width: "64",
  height: "64",
  viewBox: "0 0 64 64",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function _sfc_render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _cache[0] || (_cache[0] = [
    createStaticVNode('<g clip-path="url(#clip0_2443_5750)"><path d="M64 32C64 14.3269 49.6731 9.27281e-06 32 1.00453e-05C14.3269 1.08178e-05 -2.17128e-06 14.3269 -1.39876e-06 32C-6.26248e-07 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32Z" fill="#F5F7FA" fill-opacity="0.66"></path><path d="M31 38L36.5757 32.4243C36.8101 32.1899 36.8101 31.8101 36.5757 31.5757L31 26" stroke="black" stroke-width="1.6" stroke-linecap="round"></path></g><defs><clipPath id="clip0_2443_5750"><rect width="64" height="64" fill="white" transform="translate(0 64) rotate(-90)"></rect></clipPath></defs>', 2)
  ]));
}
const IconArrowRightEu = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$5]]);
const _sfc_main$8 = {};
const _hoisted_1$8 = {
  width: "48.000000",
  height: "48.000000",
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _cache[0] || (_cache[0] = [
    createStaticVNode('<defs><clipPath id="clip6955_93737"><rect id="cross" width="24.000000" height="24.000000" transform="translate(24.000000 7.000000) rotate(45.000000)" fill="white" fill-opacity="0"></rect></clipPath></defs><circle id="Ellipse 1" cx="24.000000" cy="24.000000" r="24.000000" fill="#F5F7FA" fill-opacity="1.000000"></circle><g clip-path="url(#clip6955_93737)"><path id="Vector" d="M30.8 23.43L24 23.43L17.19 23.43M24 30.24L24 23.43M24 23.43L24 16.63" stroke="#1A1D25" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"></path></g>', 3)
  ]));
}
const IconViewMore = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$4]]);
const _sfc_main$7 = {};
const _hoisted_1$7 = {
  width: "48.000000",
  height: "48.000000",
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _cache[0] || (_cache[0] = [
    createStaticVNode('<defs><clipPath id="clip7009_93767"><rect id="cross" width="24.000000" height="24.000000" transform="translate(36.000000 12.000000) rotate(90.000000)" fill="white" fill-opacity="0"></rect></clipPath></defs><circle id="Ellipse 1" cx="24.000000" cy="24.000000" r="24.000000" fill="#F5F7FA" fill-opacity="1.000000"></circle><g clip-path="url(#clip7009_93767)"><path id="Vector" d="M29.18 28.43L24.37 23.62L19.56 18.81M19.56 28.43L24.37 23.62M24.37 23.62L29.18 18.81" stroke="#1A1D25" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"></path></g>', 3)
  ]));
}
const IconCloseDrawer = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$3]]);
const _hoisted_1$6 = {
  key: 0,
  class: "full-screen-video-container"
};
const _hoisted_2$1 = { class: "position-container" };
const _hoisted_3 = ["poster", "src"];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "FullScreenVideo",
  props: {
    poster: {},
    videoSrc: {},
    isVisible: { type: Boolean }
  },
  emits: ["close"],
  setup(__props) {
    const props = __props;
    const videoRef = ref(null);
    watch(
      () => props.isVisible,
      (newValue) => {
        if (typeof document !== "undefined") {
          if (newValue) {
            document.body.style.overflow = "hidden";
          } else {
            document.body.style.overflow = "";
            if (videoRef.value) {
              videoRef.value.pause();
              videoRef.value.currentTime = 0;
            }
          }
        }
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return _ctx.isVisible ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("video", {
            ref_key: "videoRef",
            ref: videoRef,
            controls: "",
            preload: "auto",
            playsinline: "true",
            "webkit-playsinline": "true",
            "x-webkit-airplay": "allow",
            autoplay: "",
            poster: _ctx.poster,
            muted: "",
            src: _ctx.videoSrc,
            loop: ""
          }, null, 8, _hoisted_3),
          (openBlock(), createElementBlock("svg", {
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
          }, _cache[1] || (_cache[1] = [
            createBaseVNode("defs", null, null, -1),
            createBaseVNode("circle", {
              cx: "15.999756",
              cy: "16.000000",
              r: "13.333334",
              fill: "#C4C4C4",
              "fill-opacity": "0"
            }, null, -1),
            createBaseVNode("circle", {
              cx: "15.999756",
              cy: "16.000000",
              r: "13.333334",
              stroke: "#FFFFFF",
              "stroke-opacity": "1.000000",
              "stroke-width": "1.500000"
            }, null, -1),
            createBaseVNode("path", {
              d: "M10.66 21.33L21.33 10.66",
              stroke: "#FFFFFF",
              "stroke-opacity": "1.000000",
              "stroke-width": "1.500000",
              "stroke-linecap": "round"
            }, null, -1),
            createBaseVNode("path", {
              d: "M21.33 21.33L10.66 10.66",
              stroke: "#FFFFFF",
              "stroke-opacity": "1.000000",
              "stroke-width": "1.500000",
              "stroke-linecap": "round"
            }, null, -1)
          ])))
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const FullScreenVideo = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-0a2026ed"]]);
const _hoisted_1$5 = ["disabled"];
const _hoisted_2 = { class: "button-content" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ComButton",
  props: {
    text: {},
    type: { default: "linear" },
    theme: { default: "dark" },
    href: { default: void 0 },
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const isHoverOpen = computed(() => !props.disabled && mediaType.value === "pc" && props.type !== "simple");
    const isClickOpen = computed(() => !props.disabled && mediaType.value === "mob" && props.type !== "simple");
    const buttonClass = computed(() => {
      const classes = [];
      if (mediaType.value === "mob") {
        classes.push("button-mob");
      }
      if (mediaType.value === "pc") {
        classes.push("button-pc");
      }
      if (isHoverOpen.value) {
        classes.push(`button-hover-effect-${props.type}`);
      }
      if (isClickOpen.value) {
        classes.push(`button-click-effect-${props.type}-${props.theme}`);
      }
      return classes;
    });
    const typeClass = computed(() => {
      const { type, theme } = props;
      return `button-${type}-${theme}`;
    });
    function handleJump() {
      if (props.href) {
        jumpToLink(props.href);
      }
    }
    const btnRef = ref();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        ref_key: "btnRef",
        ref: btnRef,
        type: "button",
        disabled: _ctx.disabled,
        class: normalizeClass([...buttonClass.value, "button-base", typeClass.value, { "button-disabled": _ctx.disabled }]),
        onClick: handleJump
      }, [
        _cache[0] || (_cache[0] = createBaseVNode("span", { class: "bg" }, null, -1)),
        createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.text), 1)
      ], 10, _hoisted_1$5);
    };
  }
});
const CommonButton = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-0f2e6a2e"]]);
const _hoisted_1$4 = { key: 1 };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "NumberRun",
  props: {
    number: { default: 0 },
    duration: { default: 1200 },
    intoViewPlay: { type: Boolean, default: true }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const running = ref(false);
    const digits = ref([]);
    const yArr = ref([]);
    const numberRef = ref(null);
    const transitionProperty = ref();
    const endFn = () => {
      transitionProperty.value = "none";
    };
    const updateDigits = (newNumber) => {
      const startDigits = String(newNumber).split("").map((item) => {
        if (/\d/.test(item)) {
          yArr.value.push((Number(item) || 10) * -100);
          return "0";
        } else {
          yArr.value.push(0);
          return item;
        }
      });
      digits.value = startDigits;
    };
    updateDigits(props.number);
    const ob = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          running.value = true;
        }
      });
    }, {});
    __expose({
      play: () => {
        running.value = false;
        setTimeout(() => {
          transitionProperty.value = void 0;
          running.value = true;
        }, 0);
      }
    });
    onMounted(() => {
      if (numberRef.value && props.intoViewPlay) {
        ob.observe(numberRef.value);
      }
    });
    onBeforeUnmount(() => {
      ob && ob.disconnect();
    });
    watch(
      () => props.number,
      (newValue) => {
        updateDigits(newValue);
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "numberRef",
        ref: numberRef,
        class: "number-scroll"
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(digits.value, (digit, index) => {
          return openBlock(), createElementBlock("span", {
            key: index,
            style: normalizeStyle({
              transitionProperty: transitionProperty.value,
              transitionDuration: _ctx.duration !== void 0 ? `${_ctx.duration}ms` : void 0,
              transform: `translateY(${running.value ? yArr.value[index] : 0}%)`
            }),
            class: normalizeClass(["digit", {
              "is-chinese-char": /[\u4e00-\u9fa5]+/.test(digit)
            }]),
            onTransitionend: endFn
          }, [
            /\d/.test(digit) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              (openBlock(), createElementBlock(Fragment, null, renderList(10, (i) => {
                return createBaseVNode("span", { key: i }, toDisplayString(i - 1), 1);
              }), 64)),
              _cache[0] || (_cache[0] = createBaseVNode("span", null, "0", -1))
            ], 64)) : (openBlock(), createElementBlock("span", _hoisted_1$4, toDisplayString(digit), 1))
          ], 38);
        }), 128))
      ], 512);
    };
  }
});
const NumberRun = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-fc90f62a"]]);
const _sfc_main$3 = {};
const _hoisted_1$3 = {
  width: "64.000000",
  height: "48.000000",
  viewBox: "0 0 64 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _cache[0] || (_cache[0] = [
    createStaticVNode('<defs><filter id="filter_821_84218_dd" x="0.000000" y="0.000000" width="64.000000" height="48.000000" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImage" stdDeviation="1.33333"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect_backgroundBlur_1"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect_backgroundBlur_1" result="shape"></feBlend></filter><clipPath id="clip821_84219"><rect id="arrow-right" width="32.000000" height="32.000000" transform="translate(16.000000 8.000000)" fill="white" fill-opacity="0"></rect></clipPath><linearGradient id="paint_linear_821_84218_0" x1="5.483353" y1="0.000008" x2="63.999992" y2="35.500008" gradientUnits="userSpaceOnUse"><stop stop-color="#999999"></stop><stop offset="1.000000" stop-color="#FFFFFF"></stop></linearGradient></defs><g filter="url(#filter_821_84218_dd)"><rect id="Rectangle 78" rx="24.000000" width="64.000000" height="48.000000" fill="#FFFFFF" fill-opacity="0.330000"></rect><rect id="Rectangle 78" x="0.500000" y="0.500000" rx="23.500000" width="63.000000" height="47.000000" stroke="url(#paint_linear_821_84218_0)" stroke-opacity="1.000000" stroke-width="1.000000"></rect></g><g clip-path="url(#clip821_84219)"><path id="Vector" d="M32.96 19.71C32.67 20.01 32.67 20.48 32.96 20.78L35.43 23.25L26.75 23.25C26.33 23.25 26 23.58 26 24C26 24.41 26.33 24.75 26.75 24.75L35.43 24.75L32.96 27.21C32.67 27.51 32.67 27.98 32.96 28.28C33.26 28.57 33.73 28.57 34.03 28.28L37.78 24.53C38.07 24.23 38.07 23.76 37.78 23.46L34.03 19.71C33.73 19.42 33.26 19.42 32.96 19.71Z" fill="#242424" fill-opacity="1.000000" fill-rule="evenodd"></path></g>', 3)
  ]));
}
const IconSwiperEllipticalArrowRight = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2]]);
const _sfc_main$2 = {};
const _hoisted_1$2 = {
  width: "24.000000",
  height: "24.000000",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [
    createBaseVNode("defs", null, null, -1),
    createBaseVNode("g", { style: { "mix-blend-mode": "normal" } }, [
      createBaseVNode("g", { style: { "mix-blend-mode": "normal" } }),
      createBaseVNode("g", { style: { "mix-blend-mode": "normal" } }, [
        createBaseVNode("path", {
          id: "close-circle-filled",
          d: "M11.5 3.5C7.08203 3.5 3.5 7.08179 3.5 11.5C3.5 15.9182 7.08203 19.5 11.5 19.5C15.918 19.5 19.5 15.9182 19.5 11.5C19.5 7.08179 15.918 3.5 11.5 3.5ZM14.1621 8.01147L11.5 10.6895L8.83789 8.01147L8.02734 8.81714L10.6934 11.5L8.02734 14.1829L8.83789 14.9885L11.5 12.3105L14.1621 14.9885L14.9727 14.1829L12.3066 11.5L14.9727 8.81714L14.1621 8.01147Z",
          "clip-rule": "evenodd",
          fill: "#000000",
          "fill-opacity": "1.000000",
          "fill-rule": "evenodd"
        })
      ])
    ], -1)
  ]));
}
const IconSearchClear = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
const _sfc_main$1 = {};
const _hoisted_1$1 = {
  width: "16.000000",
  height: "16.000000",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [
    createBaseVNode("defs", null, null, -1),
    createBaseVNode("rect", {
      id: "Rectangle 8",
      x: "1.000000",
      y: "1.000000",
      rx: "7.000000",
      width: "14.000000",
      height: "14.000000",
      fill: "#1A1D25",
      "fill-opacity": "1.000000"
    }, null, -1),
    createBaseVNode("rect", {
      id: "Rectangle 8",
      x: "1.000000",
      y: "1.000000",
      rx: "7.000000",
      width: "14.000000",
      height: "14.000000",
      stroke: "#979797",
      "stroke-opacity": "0",
      "stroke-width": "0.000000"
    }, null, -1),
    createBaseVNode("path", {
      id: "Vector",
      d: "M4.5 8L7 10.5L12 5.5",
      stroke: "#FFFFFF",
      "stroke-opacity": "1.000000",
      "stroke-width": "1.200000",
      "stroke-linejoin": "round",
      "stroke-linecap": "square"
    }, null, -1)
  ]));
}
const IconSelected = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _hoisted_1 = { class: "phone-with-area-code-number" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PhoneWithAreaCode",
  props: {
    defaultIso2: {
      type: String,
      default: ""
    },
    searchPlaceholder: {
      type: String,
      default: "search"
    },
    placeholder: {
      type: String,
      default: "Placeholder"
    }
  },
  emits: ["updatePhoneNumber", "updateAreaCode"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const phoneNumber = ref("");
    const areaCodeItem = ref();
    const searchValue = ref("");
    const areaCodeList = ref([]);
    const areaSelectElement = ref("");
    const AreaSelectOptionRef = ref(null);
    const props = __props;
    const phoneNumberRef = ref();
    const emit = __emit;
    const showOption = (i) => i.dialCode.includes(searchValue.value) || i.name.toUpperCase().includes(searchValue.value.toUpperCase());
    const showOptions = (v) => {
      if (v) {
        searchValue.value = "";
        toSearchDom();
      }
      if (mediaType.value === "pc") return;
      if (v) {
        document.querySelector("body").style.overflowY = "hidden";
      } else {
        document.querySelector("body").style.overflowY = "auto";
      }
    };
    const toSearchDom = (reDom) => {
      setTimeout(() => {
        nextTick(() => {
          var _a;
          reDom = reDom || document.querySelector(`#ios2_${(_a = areaCodeItem.value) == null ? void 0 : _a.iso2}`);
          reDom && reDom.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
      }, 200);
    };
    watch(
      () => searchValue.value,
      (v) => {
        if (!v) toSearchDom();
      }
    );
    const handleClickOption = () => {
      phoneNumber.value = "";
      setTimeout(() => {
        phoneNumberRef.value.focus();
      }, 200);
    };
    const initData = () => {
      var _a, _b, _c, _d;
      const { phoneNumber: phone, areaCode } = localStorage.getItem(((_a = window.siteInfo) == null ? void 0 : _a.siteName) + "_formSaveInfo_denza") ? JSON.parse(localStorage.getItem(((_b = window.siteInfo) == null ? void 0 : _b.siteName) + "_formSaveInfo_denza")) : {};
      areaCodeList.value = areaNumberList.map((item) => {
        const iso2 = item.iso2.toUpperCase();
        item.iso2 = iso2;
        item.dialCode = `+${item.dialCode}`;
        return item;
      });
      const resItem = areaCodeList.value.find((item) => item.dialCode === areaCode);
      if (areaCode && resItem) {
        areaCodeItem.value = resItem;
        phoneNumber.value = phone || "";
      } else {
        const defaultAreaIso2 = ((_c = props.defaultIso2) == null ? void 0 : _c.toUpperCase()) || ((_d = window.siteInfo) == null ? void 0 : _d.siteName.toUpperCase());
        const resItemDef = areaCodeList.value.find((item) => defaultAreaIso2 === item.iso2);
        if (!areaCodeItem.value && resItemDef) {
          areaCodeItem.value = resItemDef;
        }
      }
    };
    watch(
      () => phoneNumber.value,
      (v) => {
        emit("updatePhoneNumber", v);
      }
    );
    watch(
      () => areaCodeItem.value,
      (v) => {
        searchValue.value = "";
        emit("updateAreaCode", v);
      }
    );
    onMounted(() => {
      initData();
      nextTick(() => {
        areaSelectElement.value = ".phone-with-area-code-number";
      });
      const selectList = document.querySelectorAll(".el-popper.phone-with-area-select-list-wrap");
      selectList.forEach((item) => {
        item.addEventListener("click", (e) => {
          if (e.target.closest(".el-select-dropdown")) return;
          if (AreaSelectOptionRef.value) {
            AreaSelectOptionRef.value.blur();
          }
        });
      });
    });
    const resetAreaCode = () => {
      phoneNumber.value = "";
    };
    __expose({
      // validatePhone
      resetAreaCode
    });
    return (_ctx, _cache) => {
      const _component_el_input = ElInput;
      const _component_el_option = ElOption;
      const _component_el_select = ElSelect;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_el_input, {
          ref_key: "phoneNumberRef",
          ref: phoneNumberRef,
          modelValue: phoneNumber.value,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => phoneNumber.value = $event),
          placeholder: __props.placeholder,
          maxlength: "20",
          formatter: (val) => val.replace(/[^\d]/g, "")
        }, {
          prefix: withCtx(() => {
            var _a;
            return [
              createVNode(_component_el_select, {
                ref_key: "AreaSelectOptionRef",
                ref: AreaSelectOptionRef,
                modelValue: areaCodeItem.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => areaCodeItem.value = $event),
                placeholder: __props.placeholder,
                offset: 12,
                "popper-class": "phone-with-area-select-list-wrap  phone-with-area-select-list-wrap-full",
                "append-to": areaSelectElement.value,
                "fallback-placements": ["bottom-start", "top-start", "bottom", "top"],
                "value-key": "iso2",
                "show-arrow": false,
                title: (_a = areaCodeItem.value) == null ? void 0 : _a.dialCode,
                style: { "width": "100px", "margin-right": "0" },
                onVisibleChange: showOptions
              }, {
                header: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: searchValue.value,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchValue.value = $event),
                    class: "search",
                    placeholder: __props.searchPlaceholder
                  }, {
                    prefix: withCtx(() => [
                      createVNode(IconSearch)
                    ]),
                    suffix: withCtx(() => [
                      searchValue.value ? (openBlock(), createBlock(IconSearchClear, {
                        key: 0,
                        class: "custom-clear-icon",
                        onClick: _cache[0] || (_cache[0] = ($event) => searchValue.value = "")
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder"])
                ]),
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(areaCodeList.value, (o) => {
                    return withDirectives((openBlock(), createBlock(_component_el_option, {
                      key: o.iso2,
                      id: `ios2_${o.iso2}`,
                      value: o,
                      label: o.dialCode,
                      onClick: _cache[2] || (_cache[2] = withModifiers(($event) => handleClickOption(), ["stop"]))
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("span", null, toDisplayString(o.name), 1),
                        createBaseVNode("span", null, toDisplayString(o.dialCode), 1)
                      ]),
                      _: 2
                    }, 1032, ["id", "value", "label"])), [
                      [vShow, showOption(o)]
                    ]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "placeholder", "append-to", "title"])
            ];
          }),
          _: 1
        }, 8, ["modelValue", "placeholder", "formatter"])
      ]);
    };
  }
});
export {
  Button,
  CommonButton,
  FullScreenVideo,
  IconArrowLeft,
  IconArrowRight,
  IconArrowRightEu,
  IconAuto,
  IconClose,
  IconCloseDrawer,
  IconEmail,
  IconFail,
  IconGoBack,
  IconHour,
  IconLocation,
  IconMinus,
  IconMute,
  IconPhone,
  IconPlus,
  IconPosition,
  IconSearch,
  IconSearchClear,
  IconSelected,
  IconSelectedNoBg,
  IconSuccess,
  IconSwiperEllipticalArrowRight,
  IconSwiperRoundedArrowLeft,
  IconSwiperRoundedArrowRight,
  IconVideoPause,
  IconVideoPlay,
  IconViewMore,
  NumberRun,
  _export_sfc,
  _sfc_main,
  iconMainheaderPlus
};

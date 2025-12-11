var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
import { gsapWithCSS, ref, createApp, createPinia, index_default, axios, HmacSHA256, CryptoJS, ElMessage, ScrollTrigger, h, ElMessageBox } from "./vendor.js";
const _EventTracker = class _EventTracker {
  constructor() {
    var _a2;
    if (!window.collectEvent) return;
    const domain2 = void 0;
    const hm = document.createElement("script");
    hm.src = `${domain2}/minio.byterangers.onpremise.docor.static/collect-privity-v5.1.11.js`;
    const s = document.getElementsByTagName("script")[0];
    (_a2 = s.parentNode) == null ? void 0 : _a2.insertBefore(hm, s);
    window.collectEvent("init", {
      app_id: Number(void 0),
      // 应用的appid，应用列表详情处的appid
      channel: "cn",
      // saas数据发送地址，私有化可忽略
      channel_domain: domain2,
      // 设置数据上送地址
      autotrack: false,
      // 是否开启全埋点上报
      log: false
      // 开启调试日志，上线请关闭
    });
    window.collectEvent("start");
    window.addEventListener("beforeunload", function() {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      window.collectEvent("yw_web_more_pageview", {
        page_name: document.title,
        page_url: window.location.href,
        element_direction: "纵向",
        element_position: parseInt(Math.floor(scrollTop / windowHeight).toString())
      });
    });
  }
  static getInstance() {
    if (!_EventTracker.instance) {
      _EventTracker.instance = new _EventTracker();
    }
    return _EventTracker.instance;
  }
  /**
   * 上报事件
   * @param eventName 事件名称
   * @param params 事件参数
   */
  track(eventName, params) {
    if (!window.collectEvent) return;
    const defaultParams = {
      page_name: document.title,
      page_url: window.location.href
    };
    const mergedParams = __spreadValues(__spreadValues({}, defaultParams), params);
    try {
      window.collectEvent(eventName, mergedParams);
    } catch (error) {
      console.error(`Tracking failed for ${eventName}:`, error);
    }
  }
  trackDate(value, format) {
    if (!value) return "";
    const date = new Date(value);
    return format.replace("YYYY", date.getFullYear().toString()).replace("MM", String(date.getMonth() + 1).padStart(2, "0")).replace("DD", String(date.getDate()).padStart(2, "0")).replace("HH", String(date.getHours()).padStart(2, "0")).replace("mm", String(date.getMinutes()).padStart(2, "0")).replace("ss", String(date.getSeconds()).padStart(2, "0"));
  }
};
__publicField(_EventTracker, "instance");
let EventTracker = _EventTracker;
const tracker = EventTracker.getInstance();
const mm$1 = gsapWithCSS.matchMedia();
const mediaType = ref("pc");
const breakPoint$1 = 768;
mm$1.add(
  {
    isDesktop: `(min-width: ${breakPoint$1}px)`,
    isMobile: `(max-width: ${breakPoint$1 - 1}px)`
  },
  (context) => {
    const { isDesktop, isMobile } = context.conditions;
    if (isDesktop) {
      mediaType.value = "pc";
    } else if (isMobile) {
      mediaType.value = "mob";
    }
  }
);
const config = {
  dataAttribute: "data-json",
  propName: "dataForm"
};
function getPropValue(element, mockData) {
  const getParsedData = () => {
    const rawData = element.getAttribute(config.dataAttribute);
    if (!rawData) return {};
    try {
      return JSON.parse(rawData);
    } catch (error) {
      console.warn(`Failed to parse JSON for element:`, element, error);
      return {};
    }
  };
  const parsedData = getParsedData();
  return parsedData;
}
function mountComponents(containerStr, component, mockData) {
  const elements = document.querySelectorAll(containerStr);
  if (!elements || elements.length === 0) {
    console.warn(`Element not found: ${containerStr}`);
    return;
  }
  Array.from(elements).forEach((el) => {
    const isElMounted = el.getAttribute("cms-mounted");
    if (isElMounted && isElMounted === "true") return;
    const propValue = getPropValue(el);
    if (!component) {
      console.warn(`No component provided for container: ${containerStr}`);
      return;
    }
    const app = createApp(component, { [config.propName]: propValue });
    app.use(createPinia().use(index_default));
    el.setAttribute("cms-mounted", "true");
    app.mount(el);
  });
}
class Request {
  constructor(config2) {
    __publicField(this, "axiosInstance");
    this.axiosInstance = axios.create(config2);
    this.addInterceptors(config2);
  }
  addInterceptors(config2) {
    config2.requestInterceptor && this.axiosInstance.interceptors.request.use(...config2.requestInterceptor);
    config2.responseInterceptor && this.axiosInstance.interceptors.response.use(...config2.responseInterceptor);
  }
  // 封装 POST 方法
  post(url, data, config2) {
    return __async(this, null, function* () {
      try {
        const response = yield this.axiosInstance.post(url, data, config2);
        return [void 0, response.data];
      } catch (err) {
        const error = {
          status: err.status || "000",
          msg: err.msg || `${err}`
        };
        return [error];
      }
    });
  }
  delete(url, params, config2) {
    return __async(this, null, function* () {
      try {
        const response = yield this.axiosInstance.delete(url, __spreadProps(__spreadValues({}, config2), {
          params
        }));
        return [void 0, response.data];
      } catch (err) {
        const error = {
          status: err.status || "000",
          msg: err.msg || `${err}`
        };
        return [error];
      }
    });
  }
  // 封装 PUT 方法
  put(url, data, config2) {
    return __async(this, null, function* () {
      try {
        const response = yield this.axiosInstance.put(url, data, config2);
        return [void 0, response.data];
      } catch (err) {
        const error = {
          status: err.status || "000",
          msg: err.msg || `${err}`
        };
        return [error];
      }
    });
  }
  // 封装 GET 方法
  get(url, params, config2) {
    return __async(this, null, function* () {
      try {
        const response = yield this.axiosInstance.get(url, __spreadProps(__spreadValues({}, config2), {
          params
        }));
        return [void 0, response.data];
      } catch (err) {
        const error = {
          status: err.status || "000",
          msg: err.msg || `${err}`
        };
        return [error];
      }
    });
  }
  request(config2) {
    return __async(this, null, function* () {
      try {
        const response = yield this.axiosInstance.request(config2);
        return [void 0, response.data];
      } catch (err) {
        const error = {
          status: err.status || "000",
          msg: err.msg || `${err}`
        };
        return [error];
      }
    });
  }
}
class User {
  constructor(requestInstance) {
    __publicField(this, "requestInstance");
    this.requestInstance = requestInstance;
  }
  // 获取订单列表
  getUserInfo(param) {
    return this.requestInstance.post("/userInfo", param);
  }
}
function requestInterceptors() {
  return [
    (config2) => {
      return config2;
    },
    (error) => {
      return Promise.reject(error);
    }
  ];
}
function responseInterceptors() {
  return [
    (response) => {
      return response;
    },
    (err) => {
      return Promise.reject(err);
    }
  ];
}
class Store {
  constructor(requestInstance) {
    __publicField(this, "requestInstance");
    this.requestInstance = requestInstance;
  }
  getStoreListApi(url, params, config2) {
    return this.requestInstance.get(url, params, config2);
  }
}
const dev_signKey = "4a3688a5gcd88g443fga6b7fcb";
const dev_secretkey = "fcb8f0ddg5c92g45b7g9d33g04cc55d3be3b";
const encryptHmacSHA256 = (signingString, secretKey) => {
  return HmacSHA256(signingString, secretKey).toString();
};
const getKey = () => {
  var _a2, _b2;
  const signKey2 = ((_a2 = window.siteConfig) == null ? void 0 : _a2.signKey) || dev_signKey;
  const secretKey = ((_b2 = window.siteConfig) == null ? void 0 : _b2.secretKey) || dev_secretkey;
  return {
    signKey: signKey2,
    secretKey
  };
};
const signMethod = () => {
  const { signKey: signKey2, secretKey } = getKey();
  const timestamp = Math.floor(Date.now() / 1e3);
  const signingString = `${signKey2}
${secretKey}
${timestamp}`;
  const signature = encryptHmacSHA256(signingString, secretKey);
  return {
    timestamp,
    signature,
    signKey: signKey2
  };
};
class LeadInfo {
  constructor(requestInstance) {
    __publicField(this, "requestInstance");
    this.requestInstance = requestInstance;
  }
  leadInfoApi(url, data) {
    const { timestamp, signKey: signKey2, signature } = signMethod();
    const headers = {
      "X-HMAC-SIGNATURE": signature,
      "X-HMAC-TIMESTAMP": timestamp,
      "X-HMAC-SIGNKEY": signKey2
    };
    return this.requestInstance.post(url, data, {
      headers
    });
  }
}
class Models {
  constructor(requestInstance) {
    __publicField(this, "requestInstance");
    this.requestInstance = requestInstance;
  }
  getModelList(url) {
    return this.requestInstance.get(url);
  }
  getPhonesList(url = "https://cms-prod-back.byd.com/material/denza-overseas/public/json/phone.json") {
    return this.requestInstance.get(url);
  }
  getTestDriveCarList(url) {
    return this.requestInstance.get(url);
  }
}
const domain$2 = (_b = (_a = window.siteInfo) == null ? void 0 : _a.crmBaseUrl) != null ? _b : "https://eucrmtest.byd.com";
class crmHttp {
  constructor() {
    __publicField(this, "requestInstance");
    this.requestInstance = new Request({
      requestInterceptor: requestInterceptors(),
      responseInterceptor: responseInterceptors()
    });
  }
  // 获取州列表
  getStateList(params) {
    return this.requestInstance.post(`${domain$2}/api/europe-crm/openapi/officialWebsite/stateInfo`, params);
  }
  // 获取城市列表
  getCityList(params) {
    return this.requestInstance.post(`${domain$2}/api/europe-crm/openapi/officialWebsite/cityInfo`, params);
  }
  // 留资接口
  saveLeads(params) {
    return this.requestInstance.post(`${domain$2}/api/europe-crm/openapi/officialWebsite/lead/create`, params);
  }
}
const generateSignAndTimestamp = (bodyStr, openToken2) => {
  const timestamp = Date.now().toString();
  const paramMap = {
    TIMESTAMP: timestamp
  };
  const bodyObj = JSON.parse(bodyStr);
  console.log("bodyObj: ", bodyObj);
  Object.assign(paramMap, bodyObj);
  const keys = Object.keys(paramMap);
  keys.sort();
  let stringToSign = "";
  for (const key of keys) {
    let value = paramMap[key];
    if (Array.isArray(value) || typeof value === "object") {
      value = JSON.stringify(value).replace(/ /g, "");
    }
    if (value !== "" && value !== null) {
      const encodedKey = encodeURIComponent(key);
      const encodedValue = encodeURIComponent(value).replace(/%20/g, "+");
      stringToSign += `${encodedKey}=${encodedValue}&`;
    }
  }
  stringToSign += `OPENTOKEN=${encodeURIComponent(openToken2)}`;
  const sign = CryptoJS.MD5(stringToSign).toString().toUpperCase();
  console.log("sign: ", sign);
  return { timestamp, sign };
};
const _LocalStorage = class _LocalStorage {
  // localStorage 对象
  // private inputType: object
  constructor() {
    // 单例模式，保证只有一个实例
    __publicField(this, "storage");
    this.storage = window.localStorage;
  }
  static getInstance() {
    if (!_LocalStorage.instance) {
      _LocalStorage.instance = new _LocalStorage();
    }
    return _LocalStorage.instance;
  }
  setItem(key, value, expire) {
    const item = {
      value,
      // 存储的值
      expire: expire ? new Date(expire).getTime() : null
      // 过期时间
    };
    this.storage.setItem(key, JSON.stringify(item));
  }
  getItem(key) {
    const itemStr = this.storage.getItem(key);
    if (itemStr) {
      try {
        const item = JSON.parse(itemStr);
        if (item.expire && (/* @__PURE__ */ new Date()).getTime() > item.expire) {
          item.expire = null;
        }
        return item;
      } catch (error) {
        console.log("error: ", error);
        return itemStr;
      }
    }
    return null;
  }
  removeItem(key) {
    this.storage.removeItem(key);
  }
  clear() {
    this.storage.clear();
  }
};
__publicField(_LocalStorage, "instance");
let LocalStorage = _LocalStorage;
const overseaStorage = LocalStorage.getInstance();
const domain$1 = (_d = (_c = window.siteInfo) == null ? void 0 : _c.bgpcBaseUrl) != null ? _d : "http://10.28.20.1:30775";
const bgpcBaseUrl = `${domain$1}/bgpc/api/nsys/apiManagement/common/post/`;
const openToken = (_f = (_e = window.siteInfo) == null ? void 0 : _e.bgpcOpenToken) != null ? _f : "7b060d19-3266-4b9c-b942-346184170349";
const loginElement$1 = (_h = (_g = window.siteInfo) == null ? void 0 : _g.loginUrl) != null ? _h : "/";
const setTokens$1 = (data) => {
  overseaStorage.setItem("user_accessToken", data.accessToken, data.accessExpireDate);
  overseaStorage.setItem("user_refreshToken", data.refreshToken, data.refreshExpireDate);
};
const clearTokens$1 = () => {
  overseaStorage.removeItem("user_accessToken");
  overseaStorage.removeItem("user_refreshToken");
  overseaStorage.removeItem("user_userId");
};
class bgPcHttp {
  constructor() {
    __publicField(this, "requestInstance");
    //  创建订单
    __publicField(this, "creatOrder", (params) => {
      return this.requestInstance.post(bgpcBaseUrl + "R-EUCMS-101", params);
    });
    // 订单列表
    __publicField(this, "getOrderList", (params) => {
      return this.requestInstance.post(bgpcBaseUrl + "R-EUCMS-102", params);
    });
    // 订单详情
    __publicField(this, "getOrderDetail", (params) => {
      return this.requestInstance.post(bgpcBaseUrl + "R-EUCMS-103", params);
    });
    // 创建定金支付单
    __publicField(this, "createDepositOrder", (params) => {
      return this.requestInstance.post(bgpcBaseUrl + "R-EUCMS-104", params);
    });
    // 订单取消
    __publicField(this, "cancelOrder", (params) => {
      return this.requestInstance.post(bgpcBaseUrl + "R-EUCMS-105", params);
    });
    this.requestInstance = new Request({
      requestInterceptor: requestInterceptors(),
      responseInterceptor: responseInterceptors()
    });
    this.requestInstance.addInterceptors({
      requestInterceptor: [
        (config2) => {
          if (!config2.headers["SIGN"] && !config2.headers["TIMESTAMP"]) {
            const auth = generateSignAndTimestamp(JSON.stringify(config2.data), openToken);
            config2.headers["SIGN"] = auth.sign;
            config2.headers["TIMESTAMP"] = auth.timestamp;
          }
          return config2;
        },
        (error) => {
          return Promise.reject(error);
        }
      ],
      responseInterceptor: [
        (response) => __async(this, null, function* () {
          var _a2;
          if (response.data.status === 3) {
            if (!((_a2 = response.config.url) == null ? void 0 : _a2.includes("refreshUserToken"))) {
              try {
                const refreshToken = overseaStorage.getItem("user_refreshToken");
                if (!refreshToken) throw new Error("Refresh token not found");
                const [error, resp] = yield apiInstance.login.refreshTokenHttp({
                  refreshToken: refreshToken.value,
                  brandId: 1
                });
                if (error || resp.code !== "200") throw new Error("Refresh failed");
                setTokens$1(resp.respondData);
                return this.retryRequestWithNewToken(response.config, resp.respondData.accessToken);
              } catch (error) {
                this.handleRefreshError();
                throw error;
              }
            }
          }
          return response;
        }),
        (err) => {
          return Promise.reject(err);
        }
      ]
    });
  }
  // 请求重试
  retryRequestWithNewToken(config2, newAccessToken) {
    return __async(this, null, function* () {
      var _a2;
      const originalRequest = __spreadValues({}, config2);
      originalRequest.headers = __spreadValues({}, originalRequest.headers);
      if (((_a2 = originalRequest.method) == null ? void 0 : _a2.toUpperCase()) === "POST" && originalRequest.data) {
        const requestData = JSON.parse(originalRequest.data);
        requestData.credential = newAccessToken;
        originalRequest.data = JSON.stringify(requestData);
        console.log(" originalRequest.data: ", originalRequest.data);
        const auth = generateSignAndTimestamp(originalRequest.data, openToken);
        originalRequest.headers["SIGN"] = auth.sign;
        originalRequest.headers["TIMESTAMP"] = auth.timestamp;
      }
      return this.requestInstance.request(originalRequest);
    });
  }
  // token刷新失败
  handleRefreshError() {
    clearTokens$1();
    window.location.href = loginElement$1 || "";
  }
}
const generateNonce = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charsLength = chars.length;
  for (let i = 0; i < 16; i++) {
    result += chars.charAt(Math.floor(Math.random() * charsLength));
  }
  return result;
};
const generateSignature = (signSecret2, requestBody) => __async(null, null, function* () {
  const nonce = generateNonce();
  const timestamp = Date.now().toString();
  const signMap = {
    nonce,
    timestamp
  };
  if (requestBody !== null && requestBody !== void 0) {
    try {
      signMap.body = typeof requestBody === "string" ? JSON.parse(requestBody) : requestBody;
    } catch (e) {
      signMap.body = requestBody;
    }
  }
  const jsonString = JSON.stringify(signMap);
  const binaryKey = atob(signSecret2);
  const key = CryptoJS.enc.Latin1.parse(binaryKey);
  const hash = CryptoJS.HmacSHA256(jsonString, key);
  const signature = hash.toString(CryptoJS.enc.Base64);
  return {
    nonce,
    timestamp,
    signature
  };
});
const signKey = (_j = (_i = window.siteInfo) == null ? void 0 : _i.signKey) != null ? _j : "SK_61b3ab10e9f547428b480b25e97734a5";
const signSecret = (_l = (_k = window.siteInfo) == null ? void 0 : _k.signSecret) != null ? _l : "DlwIpPl2KsPqCzUHdhZTPl6hgEIgmEWgXn0gGtHGwCw=";
const domain = (_n = (_m = window.siteInfo) == null ? void 0 : _m.mallBaseUrl) != null ? _n : "https://eu-site-api-stage.byd.com";
const loginElement = (_p = (_o = window.siteInfo) == null ? void 0 : _o.loginUrl) != null ? _p : "/";
const setTokens = (data) => {
  overseaStorage.setItem("user_accessToken", data.accessToken, data.accessExpireDate);
  overseaStorage.setItem("user_refreshToken", data.refreshToken, data.refreshExpireDate);
};
const clearTokens = () => {
  overseaStorage.removeItem("user_accessToken");
  overseaStorage.removeItem("user_refreshToken");
  overseaStorage.removeItem("user_userId");
};
class login {
  constructor() {
    __publicField(this, "requestInstance");
    // 获取用户信息
    __publicField(this, "userInfoHttp", (params) => {
      return this.requestInstance.post(`${domain}/wbp-platform-core-server/mall-user/carApp/getUserInfo`, params);
    });
    // 退出登录
    __publicField(this, "logOutHttp", (params) => {
      return this.requestInstance.post(`${domain}/wbp-platform-core-server/mall-user/carApp/logout`, params);
    });
    // // 刷新用户Token
    __publicField(this, "refreshTokenHttp", (params) => {
      return this.requestInstance.post(`${domain}/wbp-platform-core-server/mall-user/carApp/refreshUserToken`, params);
    });
    this.requestInstance = new Request({
      requestInterceptor: requestInterceptors(),
      responseInterceptor: responseInterceptors()
    });
    this.requestInstance.addInterceptors({
      requestInterceptor: [
        (config2) => __async(this, null, function* () {
          config2.headers["X-Sign-Key"] = signKey;
          config2.headers["language"] = window.siteInfo.langcode || "de-DE";
          config2.headers["countryCode"] = window.siteInfo.siteName || "DE";
          if (!config2.headers["X-Signature"]) {
            const auth = yield generateSignature(signSecret, config2.data);
            config2.headers["X-Signature"] = auth.signature;
            config2.headers["X-Nonce"] = auth.nonce;
            config2.headers["X-Timestamp"] = auth.timestamp;
          }
          return config2;
        }),
        (error) => {
          return Promise.reject(error);
        }
      ],
      responseInterceptor: [
        (response) => __async(this, null, function* () {
          var _a2;
          if (response.data.code === "24010") {
            if (!((_a2 = response.config.url) == null ? void 0 : _a2.includes("refreshUserToken"))) {
              try {
                const refreshToken = overseaStorage.getItem("user_refreshToken");
                if (!refreshToken) throw new Error("Refresh token not found");
                const [error, resp] = yield this.refreshTokenHttp({
                  refreshToken: refreshToken.value,
                  brandId: 1
                });
                if (error || resp.code !== "200") throw new Error("Refresh failed");
                setTokens(resp.respondData);
                return this.retryRequestWithNewToken(response.config, resp.respondData.accessToken);
              } catch (error) {
                this.handleRefreshError();
                throw error;
              }
            }
          }
          return response;
        }),
        (err) => Promise.reject(err)
      ]
    });
  }
  // 请求重试
  retryRequestWithNewToken(config2, newAccessToken) {
    return __async(this, null, function* () {
      var _a2;
      const originalRequest = __spreadValues({}, config2);
      originalRequest.headers = __spreadValues({}, originalRequest.headers);
      if (((_a2 = originalRequest.method) == null ? void 0 : _a2.toUpperCase()) === "POST" && originalRequest.data) {
        const requestData = JSON.parse(originalRequest.data);
        requestData.userToken = newAccessToken;
        originalRequest.data = JSON.stringify(requestData);
        const auth = yield generateSignature(signSecret, originalRequest.data);
        originalRequest.headers["X-Signature"] = auth.signature;
        originalRequest.headers["X-Nonce"] = auth.nonce;
        originalRequest.headers["X-Timestamp"] = auth.timestamp;
      }
      return this.requestInstance.request(originalRequest);
    });
  }
  // token刷新失败
  handleRefreshError() {
    clearTokens();
    window.location.href = loginElement || "";
  }
}
class API {
  constructor() {
    __publicField(this, "requestInstance", new Request({
      baseURL: "",
      requestInterceptor: requestInterceptors(),
      responseInterceptor: responseInterceptors()
    }));
    __publicField(this, "order");
    __publicField(this, "store");
    __publicField(this, "leadInfo");
    __publicField(this, "models");
    __publicField(this, "crmHttp");
    __publicField(this, "bgPcHttp");
    __publicField(this, "login");
    this.order = new User(this.requestInstance);
    this.store = new Store(this.requestInstance);
    this.leadInfo = new LeadInfo(this.requestInstance);
    this.models = new Models(this.requestInstance);
    this.crmHttp = new crmHttp();
    this.bgPcHttp = new bgPcHttp();
    this.login = new login();
  }
}
const apiInstance = new API();
function jumpToLink(url, options = {}) {
  function handleJump(url2, target2) {
    if (target2) {
      window.open(url2, target2);
    } else {
      window.location.href = url2;
    }
  }
  const { target } = options;
  handleJump(url, target);
}
function useMessage(config2, extraConfig = { closeAll: true }) {
  if (extraConfig.closeAll) {
    ElMessage.closeAll();
  }
  const baseConfig = {
    duration: 2e3,
    offset: 260,
    customClass: "yw-custom-message"
  };
  if (typeof config2 === "string") {
    ElMessage(__spreadValues({
      message: config2
    }, baseConfig));
  } else {
    ElMessage(__spreadValues(__spreadValues({}, baseConfig), config2));
  }
}
const updateViewportMetrics = function() {
  const h2 = 0.01 * window.innerHeight, w = 0.01 * window.innerWidth;
  document.documentElement.style.setProperty("--vw", Math.round(w * 100) / 100 + "px");
  document.documentElement.style.setProperty("--vh", Math.round(h2 * 100) / 100 + "px");
};
updateViewportMetrics();
window.addEventListener("resize", updateViewportMetrics);
const _GoogleMapService = class _GoogleMapService {
  // 构造函数接收地图脚本 URL
  // 构造函数，用于初始化地图脚本URL
  constructor(mapScriptUrl = `https://maps.googleapis.com/maps/api/js?key=${window.googleKey || ""}&v=3.50`) {
    __publicField(this, "map", null);
    __publicField(this, "infoWindow", null);
    __publicField(this, "mapScriptUrl", `https://maps.googleapis.com/maps/api/js?key=${window.googleKey || ""}&v=3.50`);
    __publicField(this, "markers", []);
    this.mapScriptUrl = mapScriptUrl;
  }
  /**
   * 加载 Google 地图 API
   */
  loadMapScript() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        if (typeof window === "undefined") {
          reject(new Error("Window 对象不可用，无法加载 Google 地图 API"));
          return;
        }
        if (window.google && window.google.maps) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = this.mapScriptUrl;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("加载 Google 地图 API 失败"));
        document.head.appendChild(script);
      });
    });
  }
  /**
   * 初始化地理编码器
   * 该方法会先加载 Google 地图 API 脚本，然后导入地理编码库，最后创建一个地理编码器实例。
   * 地理编码器实例会存储在 GoogleMapService 类的静态属性 geocoder 中，供后续地理编码操作使用。
   * @returns {Promise<void>} 一个 Promise，在地理编码器初始化完成后 resolve。
   */
  initGeocoder() {
    return __async(this, null, function* () {
      yield this.loadMapScript();
      const { Geocoder } = yield google.maps.importLibrary("geocoding");
      _GoogleMapService.geocoder = new Geocoder();
    });
  }
  /**
   * 初始化地图
   * @param mapElement 地图容器元素
   * @param options 地图选项
   */
  initMap(mapElement, options) {
    return __async(this, null, function* () {
      yield this.loadMapScript();
      const { Map } = yield google.maps.importLibrary("maps");
      this.map = new Map(mapElement, options);
      const { Geocoder } = yield google.maps.importLibrary("geocoding");
      _GoogleMapService.geocoder = new Geocoder();
      this.infoWindow = new google.maps.InfoWindow();
      return this.map;
    });
  }
  /**
   * 获取用户位置
   * @param fallbackCenter 备用中心点
   */
  getUserPoisition(fallbackCenter) {
    if (!this.map) {
      throw new Error("map is not initialized");
    }
    return new Promise((resolve) => {
      var _a2;
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            var _a3;
            (_a3 = this.map) == null ? void 0 : _a3.setCenter({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
            resolve();
          }, () => {
            var _a3;
            console.error("get user position failed");
            (_a3 = this.map) == null ? void 0 : _a3.setCenter(fallbackCenter);
            resolve();
          });
        } else {
          console.error("browser does not support geolocation");
          (_a2 = this.map) == null ? void 0 : _a2.setCenter(fallbackCenter);
          resolve();
        }
      } catch (error) {
        console.error("get user position failed", error);
      }
    });
  }
  setMapCenter(latLng) {
    if (!this.map) return;
    this.map.setCenter(latLng);
  }
  setMapZoom(zoom) {
    if (!this.map) return;
    this.map.setZoom(zoom);
  }
  getMapZoom() {
    if (!this.map) return 0;
    return this.map.getZoom() || 5;
  }
  panToCenter(latLng) {
    if (!this.map) return;
    this.map.panTo(latLng);
  }
  getBounds() {
    var _a2;
    if (!this.map) return null;
    return (_a2 = this.map.getBounds()) == null ? void 0 : _a2.toSpan();
  }
  /**
   * 添加标记并绑定信息窗口
   * @param position 标记位置
   * @param title 标记标题
   * @param content 信息窗口内容
   * @param options 标记选项
   */
  showInfoWindow(content, storeName) {
    var _a2, _b2;
    if (!this.map) return;
    const marker = this.markers.find((marker2) => marker2.getTitle() === storeName);
    (_a2 = this.infoWindow) == null ? void 0 : _a2.setContent(content);
    (_b2 = this.infoWindow) == null ? void 0 : _b2.open({
      anchor: marker,
      map: this.map,
      shouldFocus: false
    });
  }
  /**
   * 添加标记
   * @param position 标记位置
   * @param title 标记标题
   * @param options 标记选项
   */
  addMarker(options) {
    if (!this.map) return null;
    const marker = new google.maps.Marker(__spreadValues({
      map: this.map
    }, options));
    this.markers.push(marker);
    return marker;
  }
  /**
   * 设置指定标记的图标
   * @param storeName - 标记的标题，用于查找对应的标记。该标题应与添加标记时设置的标题一致。
   * @param icon - 图标的 URL 地址，用于指定要设置的标记图标。
   * @param sizeScale - 图标的缩放比例，默认为 1。通过该参数可以调整图标的显示大小。
   */
  setMarkerIcon(storeName, icon, sizeScale = 1) {
    if (!this.map) return;
    const marker = this.markers.find((marker2) => marker2.getTitle() === storeName);
    marker == null ? void 0 : marker.setIcon({ url: icon, scaledSize: new google.maps.Size(52.25 * sizeScale, 62 * sizeScale) });
  }
  clearMarkers() {
    if (!this.map) return;
    this.markers.forEach((marker) => {
      marker.setMap(null);
    });
    this.markers = [];
  }
  destroy() {
    if (this.map) {
      this.map = null;
    }
    if (this.infoWindow) {
      this.infoWindow.close();
      this.infoWindow = null;
    }
  }
  /**
   * 对给定地址进行地理编码
   * 该静态方法使用 Google 地理编码器将输入的地址转换为地理坐标信息。
   * 在调用前需要确保地理编码器已经初始化，否则会抛出错误。
   * @param address - 要进行地理编码的地址字符串
   * @param option - 可选的地理编码请求配置项，会与基本的地址信息合并
   * @returns 一个 Promise，成功时返回包含地理编码结果的数组，失败时返回 null
   */
  static geocoderAddress(address, option) {
    return __async(this, null, function* () {
      if (!this.geocoder) {
        throw new Error("geocoder is not initialized");
      }
      return new Promise((resolve) => {
        var _a2;
        (_a2 = this.geocoder) == null ? void 0 : _a2.geocode(__spreadValues({ address }, option), (results, status) => {
          if (status === "OK") {
            resolve(results);
          } else {
            console.error(`Geocode was not successful for the following reason: ${status}`);
            resolve(null);
          }
        });
      });
    });
  }
};
__publicField(_GoogleMapService, "geocoder", null);
let GoogleMapService = _GoogleMapService;
const getDistance = (lat1, lng1, lat2, lng2) => {
  lat1 = lat1 || 0;
  lng1 = lng1 || 0;
  lat2 = lat2 || 0;
  lng2 = lng2 || 0;
  const rad1 = lat1 * Math.PI / 180;
  const rad2 = lat2 * Math.PI / 180;
  const a = rad1 - rad2;
  const b = lng1 * Math.PI / 180 - lng2 * Math.PI / 180;
  const r = 6378137;
  const distance = r * 2 * Math.asin(
    Math.sqrt(
      Math.pow(Math.sin(a / 2), 2) + Math.cos(rad1) * Math.cos(rad2) * Math.pow(Math.sin(b / 2), 2)
    )
  );
  return distance;
};
const getAddressData = (lng, lat, storeList = [], type = "") => {
  const commonCondition = (item) => (item.status === "operation" || item.status === "In interim") && item.lng && item.lat && item.organizationCode && item.organizationName && item.address;
  const newDealerList = storeList.filter((item) => {
    if (lng && lat && item.lng && item.lat) {
      const distanceValue = getDistance(lat, lng, Number(item.lat), Number(item.lng)) / 1e3;
      item.distance = distanceValue % 1 === 0 ? distanceValue.toString() : distanceValue.toFixed(1);
    } else {
      item.distance = "";
    }
    return type ? (item.feature === type || item.feature === "salesAndAfterSales") && commonCondition(item) : commonCondition(item);
  });
  return newDealerList.sort(function(a, b) {
    return Number(a.distance) - Number(b.distance);
  });
};
const searchStoreData = (searchText, storeFullList, geoOption, type) => __async(null, null, function* () {
  if (!window.google) {
    yield new GoogleMapService().initGeocoder();
  }
  const res = yield GoogleMapService.geocoderAddress(searchText, geoOption);
  let filterStores;
  if (res && res.length > 0) {
    const lng = res[0].geometry.location.lng();
    const lat = res[0].geometry.location.lat();
    filterStores = getAddressData(lng, lat, storeFullList) || [];
  } else {
    const inputTextUpper = searchText.toUpperCase();
    const foundItem = storeFullList.find((item) => {
      var _a2, _b2;
      return item.organizationName && item.organizationCode && item.lng && item.lat && item.address && item.organizationName.toUpperCase().includes(inputTextUpper) || ((_a2 = item.address) == null ? void 0 : _a2.toUpperCase().includes(inputTextUpper)) || ((_b2 = item.zipCode) == null ? void 0 : _b2.toUpperCase().includes(inputTextUpper));
    });
    filterStores = foundItem ? getAddressData(Number(foundItem.lng), Number(foundItem.lat), storeFullList, type) : [];
  }
  return filterStores;
});
const mm = gsapWithCSS.matchMedia();
const mediaTypePad = ref("pc");
const breakPoint = 1024;
mm.add(
  {
    isDesktop: `(min-width: ${breakPoint}px)`,
    isMobile: `(max-width: ${breakPoint - 1}px)`
  },
  (context) => {
    const { isDesktop, isMobile } = context.conditions;
    if (isDesktop) {
      mediaTypePad.value = "pc";
    } else if (isMobile) {
      mediaTypePad.value = "mob";
    }
  }
);
gsapWithCSS.registerPlugin(ScrollTrigger);
const ANIM_CONFIG = {
  duration: 1.5,
  stagger: 0.5,
  ease: "power2.out",
  // 明确类型
  from: { opacity: 0, y: 30 },
  to: { opacity: 1, y: 0 }
};
const runAnimation = (elements) => {
  if (elements.length === 0) return;
  const timeline = gsapWithCSS.timeline();
  timeline.fromTo(
    elements,
    ANIM_CONFIG.from,
    __spreadValues(__spreadValues({}, ANIM_CONFIG.to), ANIM_CONFIG)
    // 合并配置
  );
};
const initTextAnim = (container) => {
  ScrollTrigger.create({
    trigger: container,
    start: "top 80%",
    end: "bottom 20%",
    // once: true, // 只执行一次（避免重复触发）
    scrub: 1,
    onEnter: () => {
      const animElements = Array.from(container.querySelectorAll("[data-animate]"));
      runAnimation(animElements);
    }
  });
};
const initSwiperTextAnim = ({
  container,
  swiperInstance
}) => {
  let isInView = false;
  ScrollTrigger.create({
    trigger: container,
    start: "top 80%",
    end: "bottom 20%",
    onEnter: () => {
      isInView = true;
      playCurrentSlideAnim();
    },
    onEnterBack: () => {
      isInView = true;
      playCurrentSlideAnim();
    },
    onLeave: () => {
      isInView = false;
    },
    // 离开视口时标记
    onLeaveBack: () => {
      isInView = false;
    }
  });
  swiperInstance.on("init", playCurrentSlideAnim);
  swiperInstance.on("slideChange", playCurrentSlideAnim);
  function playCurrentSlideAnim() {
    if (!isInView) return;
    const activeIndex = swiperInstance.realIndex;
    const targetSlide = container.querySelector(
      `.swiper-slide[data-index="${activeIndex}"]`
    );
    if (!targetSlide) return;
    const animElements = Array.from(targetSlide.querySelectorAll("[data-animate]"));
    runAnimation(animElements);
  }
};
const initCardScrollAnim = (container, itemSelector) => {
  const items = container.querySelectorAll(itemSelector);
  if (items.length === 0) {
    console.warn(`未找到匹配选择器 "${itemSelector}" 的元素`);
    return null;
  }
  const defaultConfig = {
    duration: 0.5,
    stagger: 0.2,
    ease: "power2.out",
    fromOpacity: 0,
    fromY: 50,
    scrollStart: "top 80%",
    scrollEnd: "bottom bottom",
    scrub: 1
  };
  const tl = gsapWithCSS.timeline({
    scrollTrigger: {
      trigger: container,
      start: defaultConfig.scrollStart,
      end: defaultConfig.scrollEnd,
      scrub: defaultConfig.scrub
    }
  });
  tl.from(items, {
    opacity: defaultConfig.fromOpacity,
    y: defaultConfig.fromY,
    ease: defaultConfig.ease,
    stagger: defaultConfig.stagger,
    duration: defaultConfig.duration
  });
};
const sendGA = (ea, el, ed) => {
  if (typeof window !== "undefined" && "dataLayer" in window) {
    window.dataLayer.push({
      event: "gaEvent",
      eventCategory: document.title,
      eventUrl: window.location.href,
      eventAction: ea,
      eventLabel: el,
      eventDesc: ed
    });
    console.log(`
        ------------------------------
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Current GA4 Event Params:
        eName: gaEvent
        ec: ${document.title}
        eu: ${window.location.href}
        ea: ${ea}
        el: ${el}
        ed: ${ed}
        ------------------------------
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        `);
  } else {
    console.warn("Google Analytics dataLayer is not available");
  }
};
function useMessageBox(title = "", message = "", tips = "", options = {}) {
  const _a2 = options, { iconVNode } = _a2, rest = __objRest(_a2, ["iconVNode"]);
  const icon = iconVNode ? h("i", { class: "el-message-box__icon" }, [iconVNode]) : void 0;
  const _message = `
    <div class="byd-message-box__content">
      ${message}
      <p class="byd-message-box__text">${tips}</p>
    </div>
  `;
  ElMessageBox(__spreadValues({
    title,
    message: _message,
    icon,
    closeOnClickModal: true,
    closeOnPressEscape: true,
    dangerouslyUseHTMLString: true,
    modalClass: "byd-modal-box",
    customClass: "byd-message-box",
    center: true,
    showCancelButton: false,
    showConfirmButton: false
  }, rest));
}
function formatTaxNum(taxNum, type) {
  const len = type === "CPF" ? 11 : 14;
  const cleaned = taxNum.replace(/\D/g, "").slice(0, len);
  let formatted = "";
  for (let i = 0; i < cleaned.length; i++) {
    formatted += cleaned[i];
    if (type === "CPF" || !type && cleaned.length <= 11) {
      if ((i === 2 || i === 5) && i < cleaned.length - 1) {
        formatted += ".";
      } else if (i === 8 && i < cleaned.length - 1) {
        formatted += "-";
      }
    }
    if (type === "CNPJ" || !type && cleaned.length > 11) {
      if (i === 1 && i < cleaned.length - 1) {
        formatted += ".";
      } else if (i === 4 && i < cleaned.length - 1) {
        formatted += ".";
      } else if (i === 7 && i < cleaned.length - 1) {
        formatted += "/";
      } else if (i === 11 && i < cleaned.length - 1) {
        formatted += "-";
      }
    }
  }
  return formatted;
}
const validarCNPJ = (cnpj) => {
  cnpj = cnpj.replace(/[^\d]+/g, "");
  if (cnpj === "") return false;
  if (cnpj.length !== 14) return false;
  if (cnpj === "00000000000000" || cnpj === "11111111111111" || cnpj === "22222222222222" || cnpj === "33333333333333" || cnpj === "44444444444444" || cnpj === "55555555555555" || cnpj === "66666666666666" || cnpj === "77777777777777" || cnpj === "88888888888888" || cnpj === "99999999999999")
    return false;
  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  const digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado !== parseInt(digitos.charAt(0))) return false;
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado !== parseInt(digitos.charAt(1))) return false;
  return true;
};
const validateCPF = (cpf) => {
  cpf = cpf.replace(/[^\d]/g, "");
  if (!/^\d{11}$/.test(cpf)) {
    return false;
  }
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let remainder = sum * 10 % 11;
  const firstDigit = remainder === 10 ? 0 : remainder;
  if (parseInt(cpf.charAt(9)) !== firstDigit) {
    return false;
  }
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  remainder = sum * 10 % 11;
  const secondDigit = remainder === 10 ? 0 : remainder;
  return parseInt(cpf.charAt(10)) === secondDigit;
};
const brPhoneList = [
  {
    "value": "11"
  },
  {
    "value": "12"
  },
  {
    "value": "13"
  },
  {
    "value": "14"
  },
  {
    "value": "15"
  },
  {
    "value": "16"
  },
  {
    "value": "17"
  },
  {
    "value": "18"
  },
  {
    "value": "19"
  },
  {
    "value": "21"
  },
  {
    "value": "22"
  },
  {
    "value": "24"
  },
  {
    "value": "27"
  },
  {
    "value": "28"
  },
  {
    "value": "31"
  },
  {
    "value": "32"
  },
  {
    "value": "33"
  },
  {
    "value": "34"
  },
  {
    "value": "35"
  },
  {
    "value": "37"
  },
  {
    "value": "38"
  },
  {
    "value": "41"
  },
  {
    "value": "42"
  },
  {
    "value": "43"
  },
  {
    "value": "44"
  },
  {
    "value": "45"
  },
  {
    "value": "46"
  },
  {
    "value": "47"
  },
  {
    "value": "48"
  },
  {
    "value": "49"
  },
  {
    "value": "51"
  },
  {
    "value": "53"
  },
  {
    "value": "54"
  },
  {
    "value": "55"
  },
  {
    "value": "61"
  },
  {
    "value": "62"
  },
  {
    "value": "63"
  },
  {
    "value": "64"
  },
  {
    "value": "65"
  },
  {
    "value": "66"
  },
  {
    "value": "67"
  },
  {
    "value": "68"
  },
  {
    "value": "69"
  },
  {
    "value": "71"
  },
  {
    "value": "73"
  },
  {
    "value": "74"
  },
  {
    "value": "75"
  },
  {
    "value": "77"
  },
  {
    "value": "79"
  },
  {
    "value": "81"
  },
  {
    "value": "82"
  },
  {
    "value": "83"
  },
  {
    "value": "84"
  },
  {
    "value": "85"
  },
  {
    "value": "86"
  },
  {
    "value": "87"
  },
  {
    "value": "88"
  },
  {
    "value": "89"
  },
  {
    "value": "91"
  },
  {
    "value": "92"
  },
  {
    "value": "93"
  },
  {
    "value": "94"
  },
  {
    "value": "95"
  },
  {
    "value": "96"
  },
  {
    "value": "97"
  },
  {
    "value": "98"
  },
  {
    "value": "99"
  }
];
const areaNumberList = [
  {
    "name": "Afghanistan (‫افغانستان‬‎)",
    "nameCN": "阿富汗",
    "iso2": "af",
    "dialCode": "93",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Albania (Shqipëri)",
    "nameCN": "阿尔巴尼亚",
    "iso2": "al",
    "dialCode": "355",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Algeria (‫الجزائر‬‎)",
    "nameCN": "阿尔及利亚",
    "iso2": "dz",
    "dialCode": "213",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "American Samoa",
    "nameCN": "美属萨摩亚群岛",
    "iso2": "as",
    "dialCode": "1684",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Andorra",
    "nameCN": "安道尔",
    "iso2": "ad",
    "dialCode": "376",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Angola",
    "nameCN": "安哥拉共和国",
    "iso2": "ao",
    "dialCode": "244",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Anguilla",
    "nameCN": "安圭拉",
    "iso2": "ai",
    "dialCode": "1264",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Antigua and Barbuda",
    "nameCN": "安提瓜岛",
    "iso2": "ag",
    "dialCode": "1268",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Argentina",
    "nameCN": "阿根廷",
    "iso2": "ar",
    "dialCode": "54",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Armenia (Հայաստան)",
    "nameCN": "亚美尼亚",
    "iso2": "am",
    "dialCode": "374",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Aruba",
    "nameCN": "阿鲁巴",
    "iso2": "aw",
    "dialCode": "297",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Australia",
    "nameCN": "澳大利亚",
    "iso2": "au",
    "dialCode": "61",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Austria (Österreich)",
    "nameCN": "奥地利共和国",
    "iso2": "at",
    "dialCode": "43",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Azerbaijan (Azərbaycan)",
    "nameCN": "阿塞拜疆共和国",
    "iso2": "az",
    "dialCode": "994",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Bahamas",
    "nameCN": "巴哈马国",
    "iso2": "bs",
    "dialCode": "1242",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Bahrain (‫البحرين‬‎)",
    "nameCN": "巴林王国",
    "iso2": "bh",
    "dialCode": "973",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Bangladesh (বাংলাদেশ)",
    "nameCN": "孟加拉人民共和国",
    "iso2": "bd",
    "dialCode": "880",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Barbados",
    "nameCN": "巴巴多斯",
    "iso2": "bb",
    "dialCode": "1246",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Belarus (Беларусь)",
    "nameCN": "白俄罗斯共和国",
    "iso2": "by",
    "dialCode": "375",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Belgium (België)",
    "nameCN": "比利时王国 (België)",
    "iso2": "be",
    "dialCode": "32",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Belize",
    "nameCN": "伯利兹",
    "iso2": "bz",
    "dialCode": "501",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Benin (Bénin)",
    "nameCN": "贝宁共和国 (Bénin)",
    "iso2": "bj",
    "dialCode": "229",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Bermuda",
    "nameCN": "百慕大群岛",
    "iso2": "bm",
    "dialCode": "1441",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Bhutan (འབྲུག)",
    "nameCN": "不丹王国",
    "iso2": "bt",
    "dialCode": "975",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Bolivia",
    "nameCN": "玻利维亚国",
    "iso2": "bo",
    "dialCode": "591",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Bosnia and Herzegovina (Босна и Херцеговина)",
    "nameCN": "波斯尼亚和黑塞哥维那",
    "iso2": "ba",
    "dialCode": "387",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Botswana",
    "nameCN": "博茨瓦纳",
    "iso2": "bw",
    "dialCode": "267",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Brazil (Brasil)",
    "nameCN": "巴西联邦共和国",
    "iso2": "br",
    "dialCode": "55",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "British Indian Ocean Territory",
    "nameCN": "英属印度洋领地",
    "iso2": "io",
    "dialCode": "246",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "British Virgin Islands",
    "nameCN": "英属维尔京群岛",
    "iso2": "vg",
    "dialCode": "1284",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Brunei",
    "nameCN": "文莱达鲁萨兰国",
    "iso2": "bn",
    "dialCode": "673",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Bulgaria (България)",
    "nameCN": "保加利亚共和国",
    "iso2": "bg",
    "dialCode": "359",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Burkina Faso",
    "nameCN": "布基纳法索",
    "iso2": "bf",
    "dialCode": "226",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Burundi (Uburundi)",
    "nameCN": "布隆迪共和国",
    "iso2": "bi",
    "dialCode": "257",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Cambodia (កម្ពុជា)",
    "nameCN": "柬埔寨王国",
    "iso2": "kh",
    "dialCode": "855",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Cameroon (Cameroun)",
    "nameCN": "喀麦隆共和国",
    "iso2": "cm",
    "dialCode": "237",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Canada",
    "nameCN": "加拿大",
    "iso2": "ca",
    "dialCode": "1",
    "priority": 1,
    "areaCodes": [
      "204",
      "226",
      "236",
      "249",
      "250",
      "289",
      "306",
      "343",
      "365",
      "387",
      "403",
      "416",
      "418",
      "431",
      "437",
      "438",
      "450",
      "506",
      "514",
      "519",
      "548",
      "579",
      "581",
      "587",
      "604",
      "613",
      "639",
      "647",
      "672",
      "705",
      "709",
      "742",
      "778",
      "780",
      "782",
      "807",
      "819",
      "825",
      "867",
      "873",
      "902",
      "905"
    ]
  },
  {
    "name": "Cape Verde (Kabu Verdi)",
    "nameCN": "佛得角共和国",
    "iso2": "cv",
    "dialCode": "238",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Caribbean Netherlands",
    "nameCN": "荷兰王国",
    "iso2": "bq",
    "dialCode": "599",
    "priority": 1,
    "areaCodes": null
  },
  {
    "name": "Cayman Islands",
    "nameCN": "开曼群岛",
    "iso2": "ky",
    "dialCode": "1345",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Central African Republic (République centrafricaine)",
    "nameCN": "中非共和国",
    "iso2": "cf",
    "dialCode": "236",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Chad (Tchad)",
    "nameCN": "乍得共和国",
    "iso2": "td",
    "dialCode": "235",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Chile",
    "nameCN": "智利共和国",
    "iso2": "cl",
    "dialCode": "56",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "China (中国)",
    "nameCN": "中国",
    "iso2": "cn",
    "dialCode": "86",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Christmas Island",
    "nameCN": "圣诞岛",
    "iso2": "cx",
    "dialCode": "61",
    "priority": 2,
    "areaCodes": null
  },
  {
    "name": "Cocos (Keeling) Islands",
    "nameCN": "科科斯群岛",
    "iso2": "cc",
    "dialCode": "61",
    "priority": 1,
    "areaCodes": null
  },
  {
    "name": "Colombia",
    "nameCN": "哥伦比亚共和国",
    "iso2": "co",
    "dialCode": "57",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Comoros (‫جزر القمر‬‎)",
    "nameCN": "科摩罗联盟",
    "iso2": "km",
    "dialCode": "269",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
    "nameCN": "刚果民主共和国",
    "iso2": "cd",
    "dialCode": "243",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Congo (Republic) (Congo-Brazzaville)",
    "nameCN": "刚果共和国",
    "iso2": "cg",
    "dialCode": "242",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Cook Islands",
    "nameCN": "库克群岛",
    "iso2": "ck",
    "dialCode": "682",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Costa Rica",
    "nameCN": "哥斯达黎加共和国",
    "iso2": "cr",
    "dialCode": "506",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Côte d’Ivoire",
    "nameCN": "科特迪瓦",
    "iso2": "ci",
    "dialCode": "225",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Croatia (Hrvatska)",
    "nameCN": "克罗地亚共和国",
    "iso2": "hr",
    "dialCode": "385",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Cuba",
    "nameCN": "古巴共和国",
    "iso2": "cu",
    "dialCode": "53",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Curaçao",
    "nameCN": "库拉索",
    "iso2": "cw",
    "dialCode": "599",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Cyprus (Κύπρος)",
    "nameCN": "塞浦路斯",
    "iso2": "cy",
    "dialCode": "357",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Czech Republic (Česká republika)",
    "nameCN": "捷克共和国",
    "iso2": "cz",
    "dialCode": "420",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Denmark (Danmark)",
    "nameCN": "丹麦",
    "iso2": "dk",
    "dialCode": "45",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Djibouti",
    "nameCN": "吉布提共和国",
    "iso2": "dj",
    "dialCode": "253",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Dominica",
    "nameCN": "多米尼克国",
    "iso2": "dm",
    "dialCode": "1767",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Dominican Republic (República Dominicana)",
    "nameCN": "多米尼加共和国",
    "iso2": "do",
    "dialCode": "1",
    "priority": 2,
    "areaCodes": ["809", "829", "849"]
  },
  {
    "name": "Ecuador",
    "nameCN": "厄瓜多尔",
    "iso2": "ec",
    "dialCode": "593",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Egypt (‫مصر‬‎)",
    "nameCN": "埃及",
    "iso2": "eg",
    "dialCode": "20",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "El Salvador",
    "nameCN": "萨尔瓦",
    "iso2": "sv",
    "dialCode": "503",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Equatorial Guinea (Guinea Ecuatorial)",
    "nameCN": "赤道几内亚",
    "iso2": "gq",
    "dialCode": "240",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Eritrea",
    "nameCN": "厄立特里亚",
    "iso2": "er",
    "dialCode": "291",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Estonia (Eesti)",
    "nameCN": "爱沙尼亚共和国",
    "iso2": "ee",
    "dialCode": "372",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Ethiopia",
    "nameCN": "埃塞俄比亚",
    "iso2": "et",
    "dialCode": "251",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Falkland Islands (Islas Malvinas)",
    "nameCN": "马尔维纳斯群岛",
    "iso2": "fk",
    "dialCode": "500",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Faroe Islands (Føroyar)",
    "nameCN": "法罗群岛",
    "iso2": "fo",
    "dialCode": "298",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Fiji",
    "nameCN": "斐济共和国",
    "iso2": "fj",
    "dialCode": "679",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Finland (Suomi)",
    "nameCN": "芬兰",
    "iso2": "fi",
    "dialCode": "358",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "France",
    "nameCN": "法国",
    "iso2": "fr",
    "dialCode": "33",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "French Guiana (Guyane française)",
    "nameCN": "法属圭亚那",
    "iso2": "gf",
    "dialCode": "594",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "French Polynesia (Polynésie française)",
    "nameCN": "法属波利尼西亚",
    "iso2": "pf",
    "dialCode": "689",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Gabon",
    "nameCN": "加蓬",
    "iso2": "ga",
    "dialCode": "241",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Gambia",
    "nameCN": "冈比亚",
    "iso2": "gm",
    "dialCode": "220",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Georgia (საქართველო)",
    "nameCN": "格鲁吉亚",
    "iso2": "ge",
    "dialCode": "995",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Germany (Deutschland)",
    "nameCN": "德国",
    "iso2": "de",
    "dialCode": "49",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Ghana (Gaana)",
    "nameCN": "加纳",
    "iso2": "gh",
    "dialCode": "233",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Gibraltar",
    "nameCN": "直布罗陀",
    "iso2": "gi",
    "dialCode": "350",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Greece (Ελλάδα)",
    "nameCN": "希腊",
    "iso2": "gr",
    "dialCode": "30",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Greenland (Kalaallit Nunaat)",
    "nameCN": "格陵兰",
    "iso2": "gl",
    "dialCode": "299",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Grenada",
    "nameCN": "格林纳达",
    "iso2": "gd",
    "dialCode": "1473",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Guadeloupe",
    "nameCN": "瓜德罗普岛",
    "iso2": "gp",
    "dialCode": "590",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Guam",
    "nameCN": "关岛",
    "iso2": "gu",
    "dialCode": "1671",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Guatemala",
    "nameCN": "危地马拉",
    "iso2": "gt",
    "dialCode": "502",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Guernsey",
    "nameCN": "根西",
    "iso2": "gg",
    "dialCode": "44",
    "priority": 1,
    "areaCodes": null
  },
  {
    "name": "Guinea (Guinée)",
    "nameCN": "几内亚",
    "iso2": "gn",
    "dialCode": "224",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Guinea-Bissau (Guiné Bissau)",
    "nameCN": "几内亚比绍共和国",
    "iso2": "gw",
    "dialCode": "245",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Guyana",
    "nameCN": "圭亚那",
    "iso2": "gy",
    "dialCode": "592",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Haiti",
    "nameCN": "海地",
    "iso2": "ht",
    "dialCode": "509",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Honduras",
    "nameCN": "洪都拉斯",
    "iso2": "hn",
    "dialCode": "504",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Hong Kong (中国香港)",
    "nameCN": "中国香港",
    "iso2": "hk",
    "dialCode": "852",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Hungary (Magyarország)",
    "nameCN": "匈牙利",
    "iso2": "hu",
    "dialCode": "36",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Iceland (Ísland)",
    "nameCN": "冰岛",
    "iso2": "is",
    "dialCode": "354",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "India (भारत)",
    "nameCN": "印度",
    "iso2": "in",
    "dialCode": "91",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Indonesia",
    "nameCN": "印度尼西亚",
    "iso2": "id",
    "dialCode": "62",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Iran (‫ایران‬‎)",
    "nameCN": "地拉那",
    "iso2": "ir",
    "dialCode": "98",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Iraq (‫العراق‬‎)",
    "nameCN": "伊拉克共和国",
    "iso2": "iq",
    "dialCode": "964",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Ireland",
    "nameCN": "爱尔兰",
    "iso2": "ie",
    "dialCode": "353",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Isle of Man",
    "nameCN": "马恩岛",
    "iso2": "im",
    "dialCode": "44",
    "priority": 2,
    "areaCodes": null
  },
  {
    "name": "Israel (‫ישראל‬‎)",
    "nameCN": "以色列国",
    "iso2": "il",
    "dialCode": "972",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Italy (Italia)",
    "nameCN": "意大利",
    "iso2": "it",
    "dialCode": "39",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Jamaica",
    "nameCN": "牙买加",
    "iso2": "jm",
    "dialCode": "1",
    "priority": 4,
    "areaCodes": ["876", "658"]
  },
  {
    "name": "Japan (日本)",
    "nameCN": "日本",
    "iso2": "jp",
    "dialCode": "81",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Jersey",
    "nameCN": "泽西",
    "iso2": "je",
    "dialCode": "44",
    "priority": 3,
    "areaCodes": null
  },
  {
    "name": "Jordan (‫الأردن‬‎)",
    "nameCN": "约旦哈希姆王国",
    "iso2": "jo",
    "dialCode": "962",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Kazakhstan (Казахстан)",
    "nameCN": "哈萨克斯坦共和国",
    "iso2": "kz",
    "dialCode": "7",
    "priority": 1,
    "areaCodes": null
  },
  {
    "name": "Kenya",
    "nameCN": "肯尼亚",
    "iso2": "ke",
    "dialCode": "254",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Kiribati",
    "nameCN": "基里巴斯",
    "iso2": "ki",
    "dialCode": "686",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Kosovo",
    "nameCN": "科索沃",
    "iso2": "xk",
    "dialCode": "383",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Kuwait (‫الكويت‬‎)",
    "nameCN": "科威特国",
    "iso2": "kw",
    "dialCode": "965",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Kyrgyzstan (Кыргызстан)",
    "nameCN": "吉尔吉斯共和国",
    "iso2": "kg",
    "dialCode": "996",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Laos (ລາວ)",
    "nameCN": "老挝人民民主共和国",
    "iso2": "la",
    "dialCode": "856",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Latvia (Latvija)",
    "nameCN": "拉脱维亚共和国",
    "iso2": "lv",
    "dialCode": "371",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Lebanon (‫لبنان‬‎)",
    "nameCN": "黎巴嫩共和国",
    "iso2": "lb",
    "dialCode": "961",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Lesotho",
    "nameCN": "莱索托",
    "iso2": "ls",
    "dialCode": "266",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Liberia",
    "nameCN": "利比里亚",
    "iso2": "lr",
    "dialCode": "231",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Libya (‫ليبيا‬‎)",
    "nameCN": "利比亚",
    "iso2": "ly",
    "dialCode": "218",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Liechtenstein",
    "nameCN": "列支敦士登",
    "iso2": "li",
    "dialCode": "423",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Lithuania (Lietuva)",
    "nameCN": "立陶宛共和国",
    "iso2": "lt",
    "dialCode": "370",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Luxembourg",
    "nameCN": "卢森堡",
    "iso2": "lu",
    "dialCode": "352",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Macau (中國澳門)",
    "nameCN": "中國澳門",
    "iso2": "mo",
    "dialCode": "853",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Macedonia (FYROM) (Македонија)",
    "nameCN": "马其顿",
    "iso2": "mk",
    "dialCode": "389",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Madagascar (Madagasikara)",
    "nameCN": "马达加斯加共和国",
    "iso2": "mg",
    "dialCode": "261",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Malawi",
    "nameCN": "马拉维",
    "iso2": "mw",
    "dialCode": "265",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Malaysia",
    "nameCN": "马来西亚",
    "iso2": "my",
    "dialCode": "60",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Maldives",
    "nameCN": "马尔代夫",
    "iso2": "mv",
    "dialCode": "960",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Mali",
    "nameCN": "马里",
    "iso2": "ml",
    "dialCode": "223",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Malta",
    "nameCN": "马耳他",
    "iso2": "mt",
    "dialCode": "356",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Marshall Islands",
    "nameCN": "马绍尔群岛共和国",
    "iso2": "mh",
    "dialCode": "692",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Martinique",
    "nameCN": "马提尼克岛",
    "iso2": "mq",
    "dialCode": "596",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Mauritania (‫موريتانيا‬‎)",
    "nameCN": "毛里塔尼亚",
    "iso2": "mr",
    "dialCode": "222",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Mauritius (Moris)",
    "nameCN": "毛里求斯",
    "iso2": "mu",
    "dialCode": "230",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Mayotte",
    "nameCN": "马约特",
    "iso2": "yt",
    "dialCode": "262",
    "priority": 1,
    "areaCodes": null
  },
  {
    "name": "Mexico (México)",
    "nameCN": "墨西哥",
    "iso2": "mx",
    "dialCode": "52",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Micronesia",
    "nameCN": "密克罗尼西亚",
    "iso2": "fm",
    "dialCode": "691",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Moldova (Republica Moldova)",
    "nameCN": "摩尔多瓦共和国",
    "iso2": "md",
    "dialCode": "373",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Monaco",
    "nameCN": "摩纳哥",
    "iso2": "mc",
    "dialCode": "377",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Mongolia (Монгол)",
    "nameCN": "蒙古",
    "iso2": "mn",
    "dialCode": "976",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Montenegro (Crna Gora)",
    "nameCN": "黑山共和国",
    "iso2": "me",
    "dialCode": "382",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Montserrat",
    "nameCN": "蒙特塞拉特岛",
    "iso2": "ms",
    "dialCode": "1664",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Morocco (‫المغرب‬‎)",
    "nameCN": "摩洛哥",
    "iso2": "ma",
    "dialCode": "212",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Mozambique (Moçambique)",
    "nameCN": "莫桑比克",
    "iso2": "mz",
    "dialCode": "258",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Myanmar (Burma) (မြန်မာ)",
    "nameCN": "缅甸联邦共和国",
    "iso2": "mm",
    "dialCode": "95",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Namibia (Namibië)",
    "nameCN": "纳米比亚",
    "iso2": "na",
    "dialCode": "264",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Nauru",
    "nameCN": "瑙鲁",
    "iso2": "nr",
    "dialCode": "674",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Nepal (नेपाल)",
    "nameCN": "尼泊尔",
    "iso2": "np",
    "dialCode": "977",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Netherlands (Nederland)",
    "nameCN": "荷兰",
    "iso2": "nl",
    "dialCode": "31",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "New Caledonia (Nouvelle-Calédonie)",
    "nameCN": "新喀里多尼亚",
    "iso2": "nc",
    "dialCode": "687",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "New Zealand",
    "nameCN": "新西兰",
    "iso2": "nz",
    "dialCode": "64",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Nicaragua",
    "nameCN": "尼加拉瓜",
    "iso2": "ni",
    "dialCode": "505",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Niger (Nijar)",
    "nameCN": "尼日尔",
    "iso2": "ne",
    "dialCode": "227",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Nigeria",
    "nameCN": "尼日利亚",
    "iso2": "ng",
    "dialCode": "234",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Niue",
    "nameCN": "纽埃",
    "iso2": "nu",
    "dialCode": "683",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Norfolk Island",
    "nameCN": "诺福克岛",
    "iso2": "nf",
    "dialCode": "672",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "North Korea (조선 민주주의 인민 공화국)",
    "nameCN": "North Korea (조선 민주주의 인민 공화국)",
    "iso2": "kp",
    "dialCode": "850",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Northern Mariana Islands",
    "nameCN": "北马里亚纳群岛",
    "iso2": "mp",
    "dialCode": "1670",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Norway (Norge)",
    "nameCN": "挪威",
    "iso2": "no",
    "dialCode": "47",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Oman (‫عُمان‬‎)",
    "nameCN": "阿曼苏丹国",
    "iso2": "om",
    "dialCode": "968",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Pakistan (‫پاکستان‬‎)",
    "nameCN": "巴基斯坦",
    "iso2": "pk",
    "dialCode": "92",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Palau",
    "nameCN": "帕劳共和国",
    "iso2": "pw",
    "dialCode": "680",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Palestine (‫فلسطين‬‎)",
    "nameCN": "巴勒斯坦国",
    "iso2": "ps",
    "dialCode": "970",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Panama (Panamá)",
    "nameCN": "巴拿马",
    "iso2": "pa",
    "dialCode": "507",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Papua New Guinea",
    "nameCN": "巴布亚新几内亚独立国",
    "iso2": "pg",
    "dialCode": "675",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Paraguay",
    "nameCN": "巴拉圭",
    "iso2": "py",
    "dialCode": "595",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Peru (Perú)",
    "nameCN": "秘鲁",
    "iso2": "pe",
    "dialCode": "51",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Philippines",
    "nameCN": "菲律宾共和国",
    "iso2": "ph",
    "dialCode": "63",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Poland (Polska)",
    "nameCN": "波兰",
    "iso2": "pl",
    "dialCode": "48",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Portugal",
    "nameCN": "葡萄牙",
    "iso2": "pt",
    "dialCode": "351",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Puerto Rico",
    "nameCN": "波多黎各岛",
    "iso2": "pr",
    "dialCode": "1",
    "priority": 3,
    "areaCodes": ["787", "939"]
  },
  {
    "name": "Qatar (‫قطر‬‎)",
    "nameCN": "卡塔尔国",
    "iso2": "qa",
    "dialCode": "974",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Réunion (La Réunion)",
    "nameCN": "留尼旺岛",
    "iso2": "re",
    "dialCode": "262",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Romania (România)",
    "nameCN": "罗马尼亚",
    "iso2": "ro",
    "dialCode": "40",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Russia (Россия)",
    "nameCN": "俄罗斯",
    "iso2": "ru",
    "dialCode": "7",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Rwanda",
    "nameCN": "卢旺达",
    "iso2": "rw",
    "dialCode": "250",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Saint Barthélemy",
    "nameCN": "圣巴托洛缪岛",
    "iso2": "bl",
    "dialCode": "590",
    "priority": 1,
    "areaCodes": null
  },
  {
    "name": "Saint Helena",
    "nameCN": "圣海伦娜岛",
    "iso2": "sh",
    "dialCode": "290",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Saint Kitts and Nevis",
    "nameCN": "圣基茨和尼维斯联邦",
    "iso2": "kn",
    "dialCode": "1869",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Saint Lucia",
    "nameCN": "圣卢西亚",
    "iso2": "lc",
    "dialCode": "1758",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Saint Martin (Saint-Martin (partie française))",
    "nameCN": "圣马丁岛",
    "iso2": "mf",
    "dialCode": "590",
    "priority": 2,
    "areaCodes": null
  },
  {
    "name": "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
    "nameCN": "圣皮埃尔岛和密克隆岛",
    "iso2": "pm",
    "dialCode": "508",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "nameCN": "圣文森特和格林纳丁斯",
    "iso2": "vc",
    "dialCode": "1784",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Samoa",
    "nameCN": "西萨摩亚",
    "iso2": "ws",
    "dialCode": "685",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "San Marino",
    "nameCN": "圣马利诺",
    "iso2": "sm",
    "dialCode": "378",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "São Tomé and Príncipe (São Tomé e Príncipe)",
    "nameCN": "São Tomé and Príncipe (São Tomé e Príncipe)",
    "iso2": "st",
    "dialCode": "239",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Saudi Arabia (‫المملكة العربية السعودية‬‎)",
    "nameCN": "沙特阿拉伯王国",
    "iso2": "sa",
    "dialCode": "966",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Senegal (Sénégal)",
    "nameCN": "塞内加尔",
    "iso2": "sn",
    "dialCode": "221",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Serbia (Србија)",
    "nameCN": "塞尔维亚共和国",
    "iso2": "rs",
    "dialCode": "381",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Seychelles",
    "nameCN": "塞舌尔",
    "iso2": "sc",
    "dialCode": "248",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Sierra Leone",
    "nameCN": "塞拉利昂共和国",
    "iso2": "sl",
    "dialCode": "232",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Singapore",
    "nameCN": "新加坡",
    "iso2": "sg",
    "dialCode": "65",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Sint Maarten",
    "nameCN": "圣马丁岛",
    "iso2": "sx",
    "dialCode": "1721",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Slovakia (Slovensko)",
    "nameCN": "斯洛伐克共和国",
    "iso2": "sk",
    "dialCode": "421",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Slovenia (Slovenija)",
    "nameCN": "斯洛文尼亚",
    "iso2": "si",
    "dialCode": "386",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Solomon Islands",
    "nameCN": "所罗门群岛",
    "iso2": "sb",
    "dialCode": "677",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Somalia (Soomaaliya)",
    "nameCN": "索马里",
    "iso2": "so",
    "dialCode": "252",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "South Africa",
    "nameCN": "南非",
    "iso2": "za",
    "dialCode": "27",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "South Korea (대한민국)",
    "nameCN": "韩国",
    "iso2": "kr",
    "dialCode": "82",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "South Sudan (‫جنوب السودان‬‎)",
    "nameCN": "南苏丹共和国",
    "iso2": "ss",
    "dialCode": "211",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Spain (España)",
    "nameCN": "西班牙",
    "iso2": "es",
    "dialCode": "34",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Sri Lanka (ශ්‍රී ලංකාව)",
    "nameCN": "斯里兰卡",
    "iso2": "lk",
    "dialCode": "94",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Sudan (‫السودان‬‎)",
    "nameCN": "苏丹",
    "iso2": "sd",
    "dialCode": "249",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Suriname",
    "nameCN": "苏里南",
    "iso2": "sr",
    "dialCode": "597",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Svalbard and Jan Mayen",
    "nameCN": "斯瓦尔巴群岛",
    "iso2": "sj",
    "dialCode": "47",
    "priority": 1,
    "areaCodes": null
  },
  {
    "name": "Swaziland",
    "nameCN": "斯威士兰",
    "iso2": "sz",
    "dialCode": "268",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Sweden (Sverige)",
    "nameCN": "瑞典",
    "iso2": "se",
    "dialCode": "46",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Switzerland (Schweiz)",
    "nameCN": "瑞士",
    "iso2": "ch",
    "dialCode": "41",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Syria (‫سوريا‬‎)",
    "nameCN": "阿拉伯叙利亚共和国",
    "iso2": "sy",
    "dialCode": "963",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Taiwan (中国台灣)",
    "nameCN": "中国台灣",
    "iso2": "tw",
    "dialCode": "886",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Tajikistan",
    "nameCN": "塔吉克斯坦共和国",
    "iso2": "tj",
    "dialCode": "992",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Tanzania",
    "nameCN": "坦桑尼亚",
    "iso2": "tz",
    "dialCode": "255",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Thailand (ไทย)",
    "nameCN": "泰国",
    "iso2": "th",
    "dialCode": "66",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Timor-Leste",
    "nameCN": "东帝汶民主共和国",
    "iso2": "tl",
    "dialCode": "670",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Togo",
    "nameCN": "多哥",
    "iso2": "tg",
    "dialCode": "228",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Tokelau",
    "nameCN": "托克劳群岛",
    "iso2": "tk",
    "dialCode": "690",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Tonga",
    "nameCN": "汤加",
    "iso2": "to",
    "dialCode": "676",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Trinidad and Tobago",
    "nameCN": "特立尼达和多巴哥共和国",
    "iso2": "tt",
    "dialCode": "1868",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Tunisia (‫تونس‬‎)",
    "nameCN": "突尼斯",
    "iso2": "tn",
    "dialCode": "216",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Turkey (Türkiye)",
    "nameCN": "土耳其",
    "iso2": "tr",
    "dialCode": "90",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Turkmenistan",
    "nameCN": "土库曼斯坦",
    "iso2": "tm",
    "dialCode": "993",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Turks and Caicos Islands",
    "nameCN": "特克斯和凯科斯群岛",
    "iso2": "tc",
    "dialCode": "1649",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Tuvalu",
    "nameCN": "图瓦卢",
    "iso2": "tv",
    "dialCode": "688",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "U.S. Virgin Islands",
    "nameCN": "美属维尔京群岛",
    "iso2": "vi",
    "dialCode": "1340",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Uganda",
    "nameCN": "乌干达共和国",
    "iso2": "ug",
    "dialCode": "256",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Ukraine (Україна)",
    "nameCN": "乌克兰",
    "iso2": "ua",
    "dialCode": "380",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)",
    "nameCN": "阿拉伯联合酋长国",
    "iso2": "ae",
    "dialCode": "971",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "United Kingdom",
    "nameCN": "大不列颠联合王国",
    "iso2": "gb",
    "dialCode": "44",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "United States",
    "nameCN": "美国",
    "iso2": "us",
    "dialCode": "1",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Uruguay",
    "nameCN": "乌拉圭",
    "iso2": "uy",
    "dialCode": "598",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Uzbekistan (Oʻzbekiston)",
    "nameCN": "乌兹别克斯坦共和国",
    "iso2": "uz",
    "dialCode": "998",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Vanuatu",
    "nameCN": "瓦努阿图",
    "iso2": "vu",
    "dialCode": "678",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Vatican City (Città del Vaticano)",
    "nameCN": "梵蒂冈",
    "iso2": "va",
    "dialCode": "39",
    "priority": 1,
    "areaCodes": null
  },
  {
    "name": "Venezuela",
    "nameCN": "委内瑞拉",
    "iso2": "ve",
    "dialCode": "58",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Vietnam (Việt Nam)",
    "nameCN": "越南",
    "iso2": "vn",
    "dialCode": "84",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Wallis and Futuna (Wallis-et-Futuna)",
    "nameCN": "瓦利斯群岛和富图纳群岛",
    "iso2": "wf",
    "dialCode": "681",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Western Sahara (‫الصحراء الغربية‬‎)",
    "nameCN": "阿拉伯撒哈拉民主共和国",
    "iso2": "eh",
    "dialCode": "212",
    "priority": 1,
    "areaCodes": null
  },
  {
    "name": "Yemen (‫اليمن‬‎)",
    "nameCN": "也门共和国",
    "iso2": "ye",
    "dialCode": "967",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Zambia",
    "nameCN": "赞比亚",
    "iso2": "zm",
    "dialCode": "260",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Zimbabwe",
    "nameCN": "津巴布韦",
    "iso2": "zw",
    "dialCode": "263",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Åland Islands",
    "nameCN": "奥兰群岛",
    "iso2": "ax",
    "dialCode": "358",
    "priority": 1,
    "areaCodes": null
  },
  {
    "name": "Antarctica",
    "nameCN": "南极洲",
    "iso2": "aq",
    "dialCode": "672",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Bouvet Island",
    "nameCN": "布维岛",
    "iso2": "bv",
    "dialCode": "47",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "South Georgia and the South Sandwich Islands",
    "nameCN": "南乔治亚和南桑威奇群岛",
    "iso2": "gs",
    "dialCode": "500",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Heard Island and McDonald Islands",
    "nameCN": "赫德岛和麦克唐纳群岛",
    "iso2": "hm",
    "dialCode": "672",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "Pitcairn",
    "nameCN": "皮特凯恩群岛",
    "iso2": "pn",
    "dialCode": "64",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "French Southern Territories",
    "nameCN": "法属南部和南极领地",
    "iso2": "tf",
    "dialCode": "262",
    "priority": 0,
    "areaCodes": null
  },
  {
    "name": "United States Minor Outlying Islands",
    "nameCN": "美国本土外小岛屿",
    "iso2": "um",
    "dialCode": "1",
    "priority": 0,
    "areaCodes": null
  }
];
class CryptoUtil {
  /**
   * MD5加密方法（支持方法重载）
   */
  static md5(input, options = {}) {
    const { salt = "", uppercase = true, encoding = "hex" } = options;
    const inputStr = typeof input === "object" ? JSON.stringify(input) : input;
    const wordArray = CryptoJS.enc.Utf8.parse(inputStr + salt);
    const hash = CryptoJS.MD5(wordArray);
    const encoder = CryptoJS.enc[encoding.toUpperCase()];
    return uppercase ? hash.toString(encoder).toUpperCase() : hash.toString(encoder);
  }
}
function urlParam(name, value, url) {
  {
    try {
      return decodeURIComponent(
        (new RegExp("[?|&]" + name + "=([^&;]+?)(&|#|;|$)").exec(
          url || location.search
        ) || ["", ""])[1].replace(/\+/g, "%20")
      ) || null;
    } catch (ex) {
      console.log("ex: ", ex);
      return null;
    }
  }
}
export {
  CryptoUtil,
  GoogleMapService,
  Request,
  apiInstance,
  areaNumberList,
  brPhoneList,
  formatTaxNum,
  getAddressData,
  initCardScrollAnim,
  initSwiperTextAnim,
  initTextAnim,
  jumpToLink,
  mediaType,
  mediaTypePad,
  mountComponents,
  overseaStorage,
  requestInterceptors,
  responseInterceptors,
  searchStoreData,
  sendGA,
  tracker,
  urlParam,
  useMessage,
  useMessageBox,
  validarCNPJ,
  validateCPF
};

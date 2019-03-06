global.webpackJsonp([2],{

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__minxins__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_index__ = __webpack_require__(75);



//全局处理重复页面跳转详情初始化,和详情跳详情返回的bug

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2__minxins__["a" /* default */]);

//引入store

//把store挂载到全局
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_3__store_index__["a" /* default */];

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    "pages": ["pages/feedback/main", "pages/order/main", "pages/cart/main", "pages/mappage/main", "pages/collectlist/main", "pages/addressSelect/main", "pages/addaddress/main", "pages/address/main", "^pages/index/main", "pages/search/main", "pages/my/main", "pages/login/main", "pages/category/main", "pages/categorylist/main", "pages/topic/main", "pages/goods/main", "pages/logs/main", "pages/branddetail/main", "pages/brandlist/main", "pages/newgoods/main", "pages/practice/main", "pages/topicdetail/main"],
    "window": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "优选",
      "navigationBarTextStyle": "black"
    },
    "tabBar": {
      "backgroundColor": "#fafafa",
      "borderStyle": "white",
      "selectedColor": "#b4282d",
      "color": "#666",
      "list": [{
        "pagePath": "pages/index/main",
        "iconPath": "static/images/ic_menu_choice_nor.png",
        "selectedIconPath": "static/images/ic_menu_choice_pressed.png",
        "text": "首页"
      }, {
        "pagePath": "pages/topic/main",
        "iconPath": "static/images/ic_menu_topic_nor.png",
        "selectedIconPath": "static/images/ic_menu_topic_pressed.png",
        "text": "专题"
      }, {
        "pagePath": "pages/category/main",
        "iconPath": "static/images/ic_menu_sort_nor.png",
        "selectedIconPath": "static/images/ic_menu_sort_pressed.png",
        "text": "分类"
      }, {
        "pagePath": "pages/cart/main",
        "iconPath": "static/images/ic_menu_shoping_nor.png",
        "selectedIconPath": "static/images/ic_menu_shoping_pressed.png",
        "text": "购物车"
      }, {
        "pagePath": "pages/my/main",
        "iconPath": "static/images/ic_menu_me_nor.png",
        "selectedIconPath": "static/images/ic_menu_me_pressed.png",
        "text": "我的"
      }]
    }
  }
});

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(63);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(61)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d9b4055", Component.options)
  } else {
    hotAPI.reload("data-v-2d9b4055", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 61:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// import {
//   getOpenid
// } from './utils'
/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据
    var logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);
    var userInfo = {
      openId: "Aa8upqjU3JdyXtedwyOO1BoMjs7FgDWp",
      nickName: "周维光",
      gender: 1,
      language: "zh_CN",
      city: "GuiYang",
      province: "GuiZhou",
      country: "China",
      avatarUrl: "http://www.qqzi.net/uploads/allimg/1112/0S331M14-23.jpg",
      watermark: { timestamp: 1535513485, appid: "wxb1596037adf18f4f" }
    };
    var openId = userInfo.openId;
    wx.setStorageSync("userInfo", userInfo);
    wx.setStorageSync("openId", openId);
    console.log("app created and cache logs by setStorageSync");
    //获取openid

    // if (!wx.getStorageSync('openid')) {
    //   getOpenid();
    // }
  }
});

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);


var pageDatas = {};

var MyPlugin = {};
MyPlugin.install = function (Vue) {
  // 添加全局方法或属性
  Vue.prototype.$isPage = function isPage() {
    return this.$mp && this.$mp.mpType === 'page';
  };

  Vue.prototype.$pageId = function pageId() {
    return this.$isPage() ? this.$mp.page.__wxWebviewId__ : null;
  };

  // 注入组件
  Vue.mixin({

    methods: {
      stashPageData: function stashPageData() {
        // 备份route和当前数据
        return {
          data: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, this.$data)
        };
      },
      restorePageData: function restorePageData(oldData) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.$data, oldData.data);
      }
    },

    onLoad: function onLoad() {
      if (this.$isPage()) {
        // 新进入页面 初始化数据
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.$data, this.$options.data());
      }
    },
    onUnload: function onUnload() {
      if (this.$isPage()) {
        // 退出页面，删除数据
        delete pageDatas[this.$pageId()];
        this.$needReloadPageData = true;
        console.log(pageDatas);
      }
    },
    onHide: function onHide() {
      if (this.$isPage()) {
        // 将要隐藏时，备份数据
        pageDatas[this.$pageId()] = this.stashPageData();

        console.log(pageDatas);
      }
    },
    onShow: function onShow() {
      if (this.$isPage()) {
        // 如果是后退回来的，拿出历史数据来设置data
        if (this.$needReloadPageData) {
          var oldData = pageDatas[this.$pageId()];

          if (oldData) {
            this.restorePageData(oldData);
          }
          this.$needReloadPageData = false;
        }
      }
    }
  });
};
/* harmony default export */ __webpack_exports__["a"] = (MyPlugin);

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(23);




__WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */].Store({
  state: {
    cityName: "定位中.."
  },
  mutations: {
    /**
     * 在main.js例引入
     * import store from './store/index'
     * 把store挂载到全局
     * Vue.prototype.$store = store;
     */

    /**
     * 这里设置一个统一的方法,大部分用的vuex都是简单的改变一些状态,不需要写过多的mutations
     * 使用方法 例:
     * this.$store.update({"cityName":"北京"})
     * 
     *  config需要传入对象
     * @param {*} state 
     * @param {*Object} config 
     */
    update: function update(state, config) {
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(config).map(function (item, key) {
        state[item] = config[item];
      });
    }
  }
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ })

},[58]);
//# sourceMappingURL=app.js.map
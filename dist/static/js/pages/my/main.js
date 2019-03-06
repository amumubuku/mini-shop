global.webpackJsonp([9],{

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(262);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1d9cc714_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(269);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(263)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1d9cc714"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1d9cc714_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\my\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d9cc714", Component.options)
  } else {
    hotAPI.reload("data-v-1d9cc714", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 263:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(2);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  onShow: function onShow() {
    // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
    if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* login */])()) {
      this.userInfo = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* login */])();
      console.log(this.userInfo);
      this.avator = this.userInfo.avatarUrl;
    }
  },
  created: function created() {},
  mounted: function mounted() {},
  data: function data() {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({
      avator: "http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png",
      allcheck: false,
      listData: [],
      Listids: [],
      userInfo: {}
    }, "listData", [{
      title: "我的订单",
      icon: "icon-unie64a",
      url: ""
    }, {
      title: "优惠券",
      icon: "icon-youhuiquan",
      url: ""
    }, {
      title: "我的足迹",
      icon: "icon-zuji",
      url: ""
    }, {
      title: "我的收藏",
      icon: "icon-shoucang",
      url: "/pages/collectlist/main"
    }, {
      title: "地址管理",
      icon: "icon-dizhiguanli",
      url: "/pages/address/main"
    }, {
      title: "联系客服",
      icon: "icon-lianxikefu",
      url: ""
    }, {
      title: "帮助中心",
      icon: "icon-bangzhuzhongxin",
      url: ""
    }, {
      title: "意见反馈",
      icon: "icon-yijianfankui",
      url: "/pages/feedback/main"
    }]);
  },

  components: {},
  methods: {
    goTo: function goTo(url) {
      if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* toLogin */])()) {
        wx.navigateTo({
          url: url
        });
      }
    },
    toLogin: function toLogin() {
      if (!this.userInfo.avatarUrl) {
        wx.navigateTo({
          url: "/pages/login/main"
        });
      }
    }
  },
  computed: {}
});

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "my"
  }, [_c('div', {
    staticClass: "myinfo"
  }, [_c('img', {
    attrs: {
      "src": _vm.avator,
      "alt": "",
      "eventid": '0'
    },
    on: {
      "click": _vm.toLogin
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toLogin
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.userInfo.nickName))]), _vm._v(" "), (_vm.userInfo.nickname) ? _c('p', [_vm._v("点击登录")]) : _c('p', [_vm._v("微信用户")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "iconlist"
  }, _vm._l((_vm.listData), function(item, index) {
    return _c('div', {
      key: index,
      attrs: {
        "eventid": '2-' + index
      },
      on: {
        "click": function($event) {
          _vm.goTo(item.url)
        }
      }
    }, [_c('span', {
      staticClass: "iconfont",
      class: item.icon
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.title))])])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1d9cc714", esExports)
  }
}

/***/ })

},[261]);
//# sourceMappingURL=main.js.map
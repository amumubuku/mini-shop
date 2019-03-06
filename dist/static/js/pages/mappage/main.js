global.webpackJsonp([10],{

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(257);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_86f48412_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(260);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(258)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-86f48412"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_86f48412_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\mappage\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-86f48412", Component.options)
  } else {
    hotAPI.reload("data-v-86f48412", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 258:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_amap_wx__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_amap_wx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__utils_amap_wx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(23);

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
//



/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {},
  mounted: function mounted() {
    this.getMapaddress();
  },
  data: function data() {
    return {
      tips: [],
      keywords: "",
      longitude: "",
      latitude: "",
      markers: []
    };
  },

  components: {},
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapMutations */])(["update"]), {
    bindInput: function bindInput(e) {
      var _this = this;
      var keywords = this.keywords;
      var myAmapFun = new __WEBPACK_IMPORTED_MODULE_1__utils_amap_wx___default.a.AMapWX({
        key: "e545e7f79a643f23aef187add14e4548"
      });
      myAmapFun.getInputtips({
        keywords: keywords,
        location: "",
        success: function success(data) {
          console.log(data);

          if (data && data.tips) {
            _this.tips = data.tips;
          }
        }
      });
    },
    bindSearch: function bindSearch(cityName) {
      console.log(cityName);
      // wx.setStorageSync("cityName", cityName);
      this.update({ cityName: cityName });
      wx.navigateBack({
        delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
      });
    },
    getMapaddress: function getMapaddress() {
      var _this = this;
      var myAmapFun = new __WEBPACK_IMPORTED_MODULE_1__utils_amap_wx___default.a.AMapWX({
        key: "e545e7f79a643f23aef187add14e4548"
      });
      myAmapFun.getRegeo({
        iconPath: "/static/images/marker.png",
        iconWidth: 22,
        iconHeight: 32,
        success: function success(data) {
          console.log(data);
          var marker = [{
            id: data[0].id,
            latitude: data[0].latitude,
            longitude: data[0].longitude,
            iconPath: data[0].iconPath,
            width: data[0].width,
            height: data[0].height
          }];
          _this.markers = marker;
          _this.latitude = data[0].latitude;
          _this.longitude = data[0].longitude;
        },
        fail: function fail(info) {
          // wx.showModal({title:info.errMsg})
        }
      });
    }
  }),
  computed: {}
});

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mappage"
  }, [_c('div', {
    staticClass: "section"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.keywords),
      expression: "keywords"
    }],
    attrs: {
      "placeholder": "搜索",
      "focus": "true",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.keywords)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.keywords = $event.target.value
      }, _vm.bindInput]
    }
  })]), _vm._v(" "), _c('scroll-view', {
    staticClass: "addcont",
    staticStyle: {
      "height": "500rpx"
    },
    attrs: {
      "scroll-y": true
    }
  }, _vm._l((_vm.tips), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "result",
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "touchstart": function($event) {
          _vm.bindSearch(item.name)
        }
      }
    }, [_vm._v("\n      " + _vm._s(item.name) + "\n    ")])
  })), _vm._v(" "), _c('div', {
    staticClass: "map_container"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n      显示当前位置:\n    ")]), _vm._v(" "), _c('map', {
    staticClass: "map",
    attrs: {
      "id": "map",
      "longitude": _vm.longitude,
      "latitude": _vm.latitude,
      "scale": "16",
      "markers": _vm.markers
    }
  })], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-86f48412", esExports)
  }
}

/***/ })

},[256]);
//# sourceMappingURL=main.js.map
global.webpackJsonp([24],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "addaddress"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userName),
      expression: "userName"
    }],
    attrs: {
      "type": "text",
      "placeholder": "姓名",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.userName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userName = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.telNumber),
      expression: "telNumber"
    }],
    attrs: {
      "type": "text",
      "placeholder": "手机号码",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.telNumber)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.telNumber = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('picker', {
    attrs: {
      "mode": "region",
      "value": _vm.region,
      "custom-item": _vm.customItem,
      "eventid": '3'
    },
    on: {
      "change": _vm.bindRegionChange
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.address),
      expression: "address"
    }],
    attrs: {
      "type": "text",
      "placeholder": "身份、城市、区县",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.address)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.address = $event.target.value
      }
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.detailadress),
      expression: "detailadress"
    }],
    attrs: {
      "type": "text",
      "placeholder": "详细地址，如楼道、楼盘号等",
      "eventid": '4'
    },
    domProps: {
      "value": (_vm.detailadress)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.detailadress = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "item itemend"
  }, [_c('checkbox-group', {
    attrs: {
      "eventid": '5',
      "mpcomid": '0'
    },
    on: {
      "change": _vm.checkboxChange
    }
  }, [_c('label', {
    staticClass: "checkbox"
  }, [_c('checkbox', {
    staticClass: "box",
    attrs: {
      "value": "true",
      "checked": _vm.checked,
      "color": "#B4282D"
    }
  }), _vm._v("设置为默认地址\n      ")], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.wxaddress
    }
  }, [_vm._v("一键导入微信>")])], 1), _vm._v(" "), _c('div', {
    staticClass: "bottom",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": _vm.saveAddress
    }
  }, [_vm._v("\n    保存\n  ")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7b788f3d", esExports)
  }
}

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(81);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7b788f3d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(113);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(82)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7b788f3d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7b788f3d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\addaddress\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b788f3d", Component.options)
  } else {
    hotAPI.reload("data-v-7b788f3d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 82:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(2);


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
    this.openId = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* getStorageOpenid */])();
    if (this.$root.$mp.query.res) {
      this.res = JSON.parse(decodeURIComponent(this.$root.$mp.query.res));
      console.log(this.res);
      this.userName = this.res.userName;
      this.telNumber = this.res.telNumber;
      this.address = this.res.provinceName + " " + this.res.cityName + " " + this.res.countyName;
      this.detailadress = this.res.detailInfo;
    }
    if (this.$root.$mp.query.id) {
      this.id = this.$root.$mp.query.id;
      this.getDetail();
    }
  },
  data: function data() {
    return {
      region: [],
      customItem: "全部",
      id: "",
      openId: "",
      res: {},
      userName: "",
      telNumber: "",
      address: "",
      detailadress: "",
      checked: false
    };
  },

  methods: {
    bindRegionChange: function bindRegionChange(e) {
      var value = e.mp.detail.value;
      this.address = value[0] + " " + value[1] + " " + value[2];
    },
    getDetail: function getDetail() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var data, detail;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* get */])("/address/detailAction", {
                  id: _this2.id
                });

              case 2:
                data = _context.sent;
                detail = data.data;

                _this2.userName = detail.name;
                _this2.telNumber = detail.mobile;
                _this2.address = detail.address;
                _this2.detailadress = detail.address_detail;
                _this2.checked = detail.is_default == 1 ? true : false;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    checkboxChange: function checkboxChange(e) {
      this.checked = e.mp.detail.value[0];
    },
    saveAddress: function saveAddress() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var _this, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this = _this3;
                // var obj = {
                //   userName: _this.userName,
                //   telNumber: _this.telNumber,
                //   address: _this.address,
                //   detailadress: _this.detailadress,
                //   checked: _this.checked,
                //   openId: _this.openId,
                //   addressId: _this.id
                // };

                _context2.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["f" /* post */])("/address/saveAction", {
                  userName: _this.userName,
                  telNumber: _this.telNumber,
                  address: _this.address,
                  detailadress: _this.detailadress,
                  checked: _this.checked,
                  openId: _this.openId,
                  addressId: _this.id
                });

              case 3:
                data = _context2.sent;

                if (data.data) {
                  wx.showToast({
                    title: "添加成功", //提示的内容,
                    icon: "success", //图标,
                    duration: 2000, //延迟时间,
                    mask: true, //显示透明蒙层，防止触摸穿透,
                    success: function success(res) {
                      wx.navigateBack({
                        delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                      });
                    }
                  });
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }))();
    },
    wxaddress: function wxaddress() {
      var _this = this;
      wx.chooseAddress({
        success: function success(res) {
          _this.userName = res.userName;
          _this.telNumber = res.telNumber;
          _this.address = res.provinceName + " " + res.cityName + " " + res.countyName;
          _this.detailadress = res.detailInfo;
        }
      });
    }
  }
});

/***/ })

},[80]);
//# sourceMappingURL=main.js.map
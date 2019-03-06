global.webpackJsonp([7],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(276);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_58d7b84c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(279);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(277)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-58d7b84c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_58d7b84c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\order\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58d7b84c", Component.options)
  } else {
    hotAPI.reload("data-v-58d7b84c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 277:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 278:
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
  onShow: function onShow() {
    if (wx.getStorageSync("addressId")) {
      this.addressId = wx.getStorageSync("addressId");
    }
    this.openId = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* getStorageOpenid */])();

    this.getDetail();
  },
  created: function created() {},
  mounted: function mounted() {},
  data: function data() {
    return {
      addressId: "",
      openId: "",
      allprice: "",
      listData: [],
      address: {}
    };
  },

  components: {},
  methods: {
    pay: function pay() {
      wx.showToast({
        title: "支付功能暂未开发", //提示的内容,
        icon: "none", //图标,
        duration: 1500, //延迟时间,
        mask: false, //显示透明蒙层，防止触摸穿透,
        success: function success(res) {}
      });
    },
    toAddressList: function toAddressList() {
      wx.navigateTo({
        url: "/pages/addressSelect/main"
      });
    },
    toAdd: function toAdd() {
      wx.navigateTo({
        url: "/pages/addaddress/main"
      });
    },
    getDetail: function getDetail() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* get */])("/order/detailAction", {
                  openId: _this.openId,
                  addressId: _this.addressId
                });

              case 2:
                data = _context.sent;

                console.log(data);

                if (data) {
                  _this.allprice = data.allPrise;
                  _this.listData = data.goodsList;
                  _this.address = data.address;
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  },
  computed: {}
});

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "order"
  }, [(_vm.address.name) ? _c('div', {
    staticClass: "address",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toAddressList
    }
  }, [_c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "list"
  }, [_c('div', {
    staticClass: "addresslist"
  }, [_c('div', [_c('span', [_vm._v(_vm._s(_vm.address.name))]), _vm._v(" "), (_vm.address.is_default) ? _c('div', {
    staticClass: "moren"
  }, [_vm._v("\n              默认\n            ")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('p', [_vm._v(_vm._s(_vm.address.mobile))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.address.address + _vm.address.address_detail))])], 1), _vm._v(" "), _c('div')])])])]) : _c('div', {
    staticClass: "seladdress",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.toAdd
    }
  }, [_vm._v("\n    请选择收货地址\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "orderbox"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('div', [_vm._v("商品合计")]), _vm._v(" "), _c('div', [_vm._v("￥" + _vm._s(_vm.allprice))])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c('div', {
    staticClass: "cartlist"
  }, _vm._l((_vm.listData), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item"
    }, [_c('div', {
      staticClass: "con"
    }, [_c('div', {
      staticClass: "left"
    }, [_c('div', {
      staticClass: "img"
    }, [_c('img', {
      attrs: {
        "src": item.list_pic_url,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "info"
    }, [_c('p', [_vm._v(_vm._s(item.goods_name))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(item.retail_price))])], 1)]), _vm._v(" "), _c('div', {
      staticClass: "right"
    }, [_c('div', {
      staticClass: "num"
    }, [_vm._v("\n            x" + _vm._s(item.number) + "\n          ")])])])])
  })), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('div', [_vm._v("\n      实付 : ￥" + _vm._s(_vm.allprice) + "\n    ")]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.pay
    }
  }, [_vm._v("\n      支付\n    ")])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "item"
  }, [_c('div', [_vm._v("运费")]), _vm._v(" "), _c('div', [_vm._v("免运费")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "item"
  }, [_c('div', [_vm._v("优惠券")]), _vm._v(" "), _c('div', [_vm._v("暂无")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-58d7b84c", esExports)
  }
}

/***/ })

},[275]);
//# sourceMappingURL=main.js.map
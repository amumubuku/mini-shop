global.webpackJsonp([14],{

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(167);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    "tabBar": {}
  }
});

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2bf3c9e2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(233);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(168)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2bf3c9e2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2bf3c9e2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\goods\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2bf3c9e2", Component.options)
  } else {
    hotAPI.reload("data-v-2bf3c9e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 168:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mpvue_wxparse__ = __webpack_require__(53);


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
  onShow: function onShow() {},
  mounted: function mounted() {
    //判断是否登录获取用户信息
    if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* login */])()) {
      this.userInfo = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* login */])();
    }
    console.log(this.$root.$mp.query.id);

    this.id = this.$root.$mp.query.id;

    this.openId = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* getStorageOpenid */])();
    this.goodsDetail();
  },

  //商品转发
  onShareAppMessage: function onShareAppMessage() {
    console.log(this.info.name);
    console.log(this.info.id);
    console.log(this.gallery[0].img_url);

    return {
      title: this.info.name,
      path: "/pages/goods/main?id=" + this.info.id,
      imageUrl: this.gallery[0].img_url //拿第一张商品的图片
    };
  },
  data: function data() {
    return {
      allnumber: 0,
      openId: "",
      collectFlag: false,
      number: 0,
      showpop: false,
      gallery: [],
      info: {},
      brand: {},
      attribute: [],
      issueList: [],
      productList: [],
      goods_desc: "",
      id: "",
      userInfo: "",
      goodsId: "",
      allPrise: ""
    };
  },

  components: {
    wxParse: __WEBPACK_IMPORTED_MODULE_3_mpvue_wxparse__["a" /* default */]
  },
  methods: {
    togoodsDetail: function togoodsDetail(id) {
      wx.redirectTo({ url: "/pages/goods/main?id=" + id });
    },
    add: function add() {
      this.number = this.number + 1;
    },
    reduce: function reduce() {
      if (this.number > 1) {
        this.number = this.number - 1;
      } else {
        return false;
      }
    },
    bug: function bug() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils__["g" /* toLogin */])()) {
                  _context.next = 14;
                  break;
                }

                if (!_this.showpop) {
                  _context.next = 13;
                  break;
                }

                if (!(_this.number == 0)) {
                  _context.next = 5;
                  break;
                }

                wx.showToast({
                  title: "请选择商品数量", //提示的内容,
                  duration: 2000, //延迟时间,
                  icon: "none",
                  mask: true, //显示透明蒙层，防止触摸穿透,
                  success: function success(res) {}
                });
                return _context.abrupt("return", false);

              case 5:
                console.log(_this.goodsId);
                console.log(_this.openId);

                _context.next = 9;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["f" /* post */])("/order/submitAction", {
                  goodsId: _this.goodsId,
                  openId: _this.openId,
                  allPrise: _this.allPrise
                });

              case 9:
                data = _context.sent;

                if (data) {
                  wx.navigateTo({
                    url: "/pages/order/main"
                  });
                }
                _context.next = 14;
                break;

              case 13:
                _this.showpop = true;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    collect: function collect() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils__["g" /* toLogin */])()) {
                  _context2.next = 5;
                  break;
                }

                _this2.collectFlag = !_this2.collectFlag;
                _context2.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["f" /* post */])("/collect/addcollect", {
                  openId: _this2.userInfo.openId,
                  goodsId: _this2.goodsId
                });

              case 4:
                data = _context2.sent;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    addCart: function addCart() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils__["g" /* toLogin */])()) {
                  _context3.next = 12;
                  break;
                }

                if (!_this3.showpop) {
                  _context3.next = 11;
                  break;
                }

                if (!(_this3.number == 0)) {
                  _context3.next = 5;
                  break;
                }

                wx.showToast({
                  title: "请选择商品数量", //提示的内容,
                  duration: 2000, //延迟时间,
                  icon: "none",
                  mask: true, //显示透明蒙层，防止触摸穿透,
                  success: function success(res) {}
                });
                return _context3.abrupt("return", false);

              case 5:
                _context3.next = 7;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["f" /* post */])("/cart/addCart", {
                  openId: _this3.userInfo.openId,
                  goodsId: _this3.goodsId,
                  number: _this3.number
                });

              case 7:
                data = _context3.sent;

                //添加成功后
                if (data) {
                  _this3.allnumber = _this3.allnumber + _this3.number;
                  wx.showToast({
                    title: "添加购物车成功",
                    icon: "success",
                    duration: 1500
                  });
                }
                _context3.next = 12;
                break;

              case 11:
                _this3.showpop = true;

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    toCart: function toCart() {
      wx.switchTab({
        url: "/pages/cart/main"
      });
      // wx.navigateTo({
      //   url: "/pages/cart/main"
      // });
    },
    goodsDetail: function goodsDetail() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* get */])("/goods/detailaction", {
                  id: _this4.id,
                  openId: _this4.openId
                });

              case 2:
                data = _context4.sent;

                _this4.gallery = data.gallery;
                _this4.info = data.info;
                _this4.allPrise = data.info.retail_price;
                _this4.goodsId = data.info.id;
                _this4.brand = data.brand;
                _this4.attribute = data.attribute;
                _this4.goods_desc = data.info.goods_desc;
                _this4.issueList = data.issue;
                _this4.collectFlag = data.collected;
                _this4.allnumber = data.allnumber;
                _this4.productList = data.productList;

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },
    showType: function showType() {
      this.showpop = !this.showpop;
    }
  },
  computed: {}
});

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "goods"
  }, [_c('div', {
    staticClass: "swiper"
  }, [_c('swiper', {
    staticClass: "swiper-container",
    attrs: {
      "indicator-dots": "true",
      "autoplay": "true",
      "interval": "3000",
      "duration": "1000"
    }
  }, _vm._l((_vm.gallery), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('swiper-item', {
      staticClass: "swiper-item",
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "src": item.img_url
      }
    })])], 1)
  })), _vm._v(" "), _c('button', {
    staticClass: "share",
    attrs: {
      "hover-class": "none",
      "open-type": "share",
      "value": ""
    }
  }, [_vm._v("分享商品")])], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "goods-info"
  }, [_c('div', {
    staticClass: "c"
  }, [_c('p', [_vm._v(_vm._s(_vm.info.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.info.goods_brief))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.info.retail_price))]), _vm._v(" "), (_vm.brand.name) ? _c('div', {
    staticClass: "brand"
  }, [_c('p', [_vm._v(_vm._s(_vm.brand.name))])], 1) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "section-nav",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.showType
    }
  }, [_c('div', [_vm._v("请选择规格数量")]), _vm._v(" "), _c('div')]), _vm._v(" "), (_vm.attribute.length != 0) ? _c('div', {
    staticClass: "attribute"
  }, [_c('div', {
    staticClass: "head"
  }, [_vm._v("\n      商品参数\n    ")]), _vm._v(" "), _vm._l((_vm.attribute), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item"
    }, [_c('div', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(item.value))])])
  })], 2) : _vm._e(), _vm._v(" "), (_vm.goods_desc) ? _c('div', {
    staticClass: "detail"
  }, [_c('wxParse', {
    attrs: {
      "content": _vm.goods_desc,
      "mpcomid": '1'
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "common-problem"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "b"
  }, _vm._l((_vm.issueList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item"
    }, [_c('div', {
      staticClass: "question-box"
    }, [_c('text', {
      staticClass: "spot"
    }), _vm._v(" "), _c('text', {
      staticClass: "question"
    }, [_vm._v(_vm._s(item.question))])]), _vm._v(" "), _c('div', {
      staticClass: "answer"
    }, [_vm._v("\n          " + _vm._s(item.answer) + "\n        ")])])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "common-problem"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "sublist"
  }, _vm._l((_vm.productList), function(subitem, subindex) {
    return _c('div', {
      key: subindex,
      attrs: {
        "eventid": '1-' + subindex
      },
      on: {
        "click": function($event) {
          _vm.togoodsDetail(subitem.id)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": subitem.list_pic_url,
        "alt": ""
      }
    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(subitem.name))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(subitem.retail_price))])], 1)
  }))]), _vm._v(" "), _c('div', {
    staticClass: "bottom-fixed"
  }, [_c('div', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.collect
    }
  }, [_c('div', {
    staticClass: "collect",
    class: [_vm.collectFlag ? 'active' : '']
  })]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.toCart
    }
  }, [_c('div', {
    staticClass: "car"
  }, [_c('span', [_vm._v("\n          " + _vm._s(_vm.allnumber) + "\n        ")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/images/ic_menu_shoping_nor.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.bug
    }
  }, [_vm._v("立即购买")]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.addCart
    }
  }, [_vm._v("加入购物车")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showpop),
      expression: "showpop"
    }],
    staticClass: "pop",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.showType
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "attr-pop",
    class: [_vm.showpop ? 'fadeup' : 'fadedown']
  }, [_c('div', {
    staticClass: "top"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('img', {
    attrs: {
      "src": _vm.info.primary_pic_url,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('div', [_c('p', [_vm._v("价格￥" + _vm._s(_vm.info.retail_price))]), _vm._v(" "), _c('p', [_vm._v("请选择数量")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "close",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": _vm.showType
    }
  }, [_vm._v("\n        X\n      ")])]), _vm._v(" "), _c('div', {
    staticClass: "b"
  }, [_c('p', [_vm._v("数量")]), _vm._v(" "), _c('div', {
    staticClass: "count"
  }, [_c('div', {
    staticClass: "cut",
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": _vm.reduce
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.number),
      expression: "number"
    }],
    staticClass: "number",
    attrs: {
      "disabled": "",
      "eventid": '9'
    },
    domProps: {
      "value": (_vm.number)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.number = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "add",
    attrs: {
      "eventid": '10'
    },
    on: {
      "click": _vm.add
    }
  }, [_vm._v("+")])])], 1)])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swiper-b"
  }, [_c('div', {
    staticClass: "item"
  }, [_vm._v("30天无忧退货")]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_vm._v("48小时快速退款")]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_vm._v("满88元免邮费")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "h"
  }, [_c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('text', {
    staticClass: "title"
  }, [_vm._v("常见问题")]), _vm._v(" "), _c('div', {
    staticClass: "line"
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "h"
  }, [_c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('text', {
    staticClass: "title"
  }, [_vm._v("大家都在看")]), _vm._v(" "), _c('div', {
    staticClass: "line"
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2bf3c9e2", esExports)
  }
}

/***/ })

},[166]);
//# sourceMappingURL=main.js.map
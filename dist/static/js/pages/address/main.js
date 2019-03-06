global.webpackJsonp([22],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(115);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_619928c0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(119);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(116)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-619928c0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_619928c0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\address\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-619928c0", Component.options)
  } else {
    hotAPI.reload("data-v-619928c0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 116:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(2);



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
    this.openId = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["c" /* getStorageOpenid */])();
    this.getAddressList();
  },
  created: function created() {},

  computed: {
    tranX: function tranX() {},
    tranX1: function tranX1() {}
  },
  data: function data() {
    return {
      scrollflag: true,
      nowIndex: 0,
      userInfo: {},
      imgUrl: "",
      listData: [],
      tranX: 0,
      tranX1: 0,
      startX: "",
      startY: "",
      moveX: "",
      moveY: "",
      moveEndX: "",
      moveEndY: "",
      X: 0,
      Y: "",
      flag: false
    };
  },

  components: {},
  methods: {
    initTextStyle: function initTextStyle() {
      //滑动之前先初始化数据
      for (var i = 0; i < this.listData.length; i++) {
        this.listData[i].textStyle = "";
        this.listData[i].textStyle1 = "";
      }
    },
    startMove: function startMove(e) {
      this.initTextStyle();
      this.startX = e.touches[0].pageX;
      this.startY = e.touches[0].pageY;
    },
    delAddress: function delAddress(id) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _this;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this = _this2;

                wx.showModal({
                  title: "",
                  content: "是否要删除该收货地址",
                  success: function success(res) {
                    if (res.confirm) {
                      var data = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* get */])("/address/deleteAction", {
                        id: id
                      }).then(function () {
                        _this.getAddressList();
                      });
                    } else if (res.cancel) {
                      console.log("用户点击取消");
                      //滑动之前先初始化样式数据
                      _this.initTextStyle();
                    }
                  }
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    deleteGoods: function deleteGoods(e) {
      //滑动之前先初始化样式数据
      this.initTextStyle();
      var index = e.currentTarget.dataset.index;
      console.log(this.X);
      if (this.X <= -100) {
        this.flag = true;
      }
      if (!this.flag) {
        this.moveX = e.touches[0].pageX;
        this.moveY = e.touches[0].pageY;
        this.X = this.moveX - this.startX;
        this.Y = this.moveX - this.startY;
        this.listData[index].textStyle = "transform:translateX(" + this.tranX + "rpx);";
        if (this.X >= 100) {
          this.X = 0;
        }
        this.tranX = this.X;
        if (this.X <= -100) {
          this.X = -100;
        }
        this.tranX1 = this.X;
        this.listData[index].textStyle1 = "transform:translateX(" + this.tranX1 + "rpx);";
      } else {
        this.moveX = e.touches[0].pageX;
        this.moveY = e.touches[0].pageY;
        this.X = this.moveX - this.startX;
        this.Y = this.moveX - this.startY;

        this.tranX = this.X - 100;
        this.listData[index].textStyle = "transform:translateX(" + this.tranX + "rpx);";
        // transform:'translateX(' + tranX + 'rpx)'
        console.log("heyushuo");

        console.log(this.listData[index].textStyle);

        if (this.X + -100 > -100) {
          this.flag = false;
        }
        this.tranX1 = -100;
        this.listData[index].textStyle1 = "transform:translateX(-100rpx);";
        console.log(this.listData[index].textStyle1);
        // this.listData = this.listData;
      }

      // this.listData = this.listData;
      // transform:'translateX(' + tranX1 + 'rpx)'
      //大于这个值认为在滑动
      // if (X > 10 || X < -10) {

      // }

      //

      // if (Math.abs(this.X) > Math.abs(this.Y) && this.X > 20) {
      //   this.scrollflag = false;
      // } else if (Math.abs(this.X) > Math.abs(this.Y) && this.X < 20) {
      //   console.log("right 2 left");
      // }
    },
    endMove: function endMove(e) {
      var index = e.currentTarget.dataset.index;
      if (this.X > -50) {
        this.tranX1 = 0;
        this.tranX = 0;
        this.listData[index].textStyle = "transform:translateX(" + this.tranX + "rpx);";
        this.listData[index].textStyle1 = "transform:translateX(" + this.tranX1 + "rpx);";
      } else if (this.X <= -50) {
        this.tranX1 = -100;
        this.tranX = -100;
        this.listData[index].textStyle = "transform:translateX(" + this.tranX + "rpx);";
        this.listData[index].textStyle1 = "transform:translateX(" + this.tranX1 + "rpx);";
      }
      // if (Math.abs(this.X) >= 300) {
      //   this.tranX = 0;
      // }
      // if (Math.abs(this.X) <= -300) {
      //   this.tranX = -100;
      // }
      // this.moveEndX = e.touches[0].pageX;
      // this.moveEndY = e.touches[0].pageY;
      // let X = this.moveEndX - this.startX;
      // let Y = this.moveEndY - this.startY;
      // if (X > 50 || X >= 100) {
      //   X = 0;
      // }
      // if (X < -50 || X <= -100) {
      //   X = -100;
      // }
      // this.tranX = X;
    },
    toDetail: function toDetail(id) {
      wx.navigateTo({
        url: "/pages/addaddress/main?id=" + id
      });
    },
    getAddressList: function getAddressList() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var _this, data, i;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this = _this3;
                _context2.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* get */])("/address/getListAction", {
                  openId: _this.openId
                });

              case 3:
                data = _context2.sent;

                for (i = 0; i < data.data.length; i++) {
                  data.data[i].textStyle = "";
                  data.data[i].textStyle1 = "";
                }
                _this3.listData = data.data;
                console.log(_this3.listData);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }))();
    },
    wxaddress: function wxaddress(index) {
      if (index == 1) {
        wx.navigateTo({
          url: "/pages/addaddress/main"
        });
      } else {
        wx.chooseAddress({
          success: function success(res) {
            var res = encodeURIComponent(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(res));
            wx.navigateTo({
              url: "/pages/addaddress/main?res=" + res
            });
          }
        });
      }
    }
  }
});

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "address"
  }, [_c('scroll-view', {
    staticClass: "addcont",
    staticStyle: {
      "height": "100%"
    },
    attrs: {
      "scroll-y": _vm.scrollflag
    }
  }, [(_vm.listData.length != 0) ? _c('div', {
    staticClass: "item"
  }, _vm._l((_vm.listData), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "list",
      attrs: {
        "data-index": index,
        "eventid": '2-' + index
      },
      on: {
        "touchstart": _vm.startMove,
        "touchmove": _vm.deleteGoods,
        "touchend": _vm.endMove
      }
    }, [_c('div', {
      staticClass: "addresslist",
      style: (item.textStyle)
    }, [_c('div', [_c('span', [_vm._v(_vm._s(item.name))]), _vm._v(" "), (item.is_default) ? _c('div', {
      staticClass: "moren"
    }, [_vm._v("\n              默认\n            ")]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "info"
    }, [_c('p', [_vm._v(_vm._s(item.mobile))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.address + item.address_detail))])], 1), _vm._v(" "), _c('div', {
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.toDetail(item.id)
        }
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "delete",
      style: (item.textStyle1),
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.delAddress(item.id)
        }
      }
    }, [_c('div', [_vm._v("\n            删除\n          ")])])])
  })) : _c('div', {
    staticClass: "center"
  }, [_c('p', [_vm._v("收货地址在哪里?")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('div', {
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.wxaddress(1)
      }
    }
  }, [_vm._v("+新建地址")]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.wxaddress
    }
  }, [_vm._v("一键导入微信地址")])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-619928c0", esExports)
  }
}

/***/ })

},[114]);
//# sourceMappingURL=main.js.map
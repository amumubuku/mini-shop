global.webpackJsonp([19],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(136);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4fa3d92a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(139);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(137)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4fa3d92a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4fa3d92a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\cart\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4fa3d92a", Component.options)
  } else {
    hotAPI.reload("data-v-4fa3d92a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 137:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 138:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  onShow: function onShow() {
    this.openId = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* getStorageOpenid */])();
    this.getListData();
  },
  created: function created() {},
  data: function data() {
    return {
      openId: "",
      allcheck: false,
      listData: [],
      Listids: [],
      userInfo: {},
      tranX: 0,
      tranX1: 0,
      startX: "",
      startY: "",
      moveX: "",
      moveY: "",
      moveEndX: "",
      moveEndY: "",
      X: 0,
      Y: ""
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
    deleteGoods: function deleteGoods(e) {
      //滑动之前先初始化样式数据
      this.initTextStyle();
      var index = e.currentTarget.dataset.index;
      console.log(index);
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
    },
    orderDown: function orderDown() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var newgoodsid, i, element, goodsId, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this2.Listids.length == 0)) {
                  _context.next = 3;
                  break;
                }

                wx.showToast({
                  title: "请选择商品",
                  icon: "none",
                  duration: 1500
                });
                return _context.abrupt("return", false);

              case 3:
                // 去掉数组中空的false的
                newgoodsid = [];

                for (i = 0; i < _this2.Listids.length; i++) {
                  element = _this2.Listids[i];

                  if (element) {
                    newgoodsid.push(element);
                  }
                }
                goodsId = newgoodsid.join(",");
                _context.next = 8;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["f" /* post */])("/order/submitAction", {
                  goodsId: goodsId,
                  openId: _this2.openId,
                  allPrise: _this2.allPrise
                });

              case 8:
                data = _context.sent;

                if (data) {
                  wx.navigateTo({
                    url: "/pages/order/main"
                  });
                }

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    delGoods: function delGoods(id, index) {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var _this;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this = _this3;

                wx.showModal({
                  title: "",
                  content: "是否要删除该商品",
                  success: function success(res) {
                    if (res.confirm) {

                      _this.Listids.splice(index, 1);
                      var data = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* get */])("/cart/deleteAction", {
                        id: id
                      }).then(function () {
                        _this.getListData();
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
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }))();
    },
    getListData: function getListData() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var data, i;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* get */])("/cart/cartList", {
                  openId: _this4.openId
                });

              case 2:
                data = _context3.sent;

                for (i = 0; i < data.data.length; i++) {
                  data.data[i].textStyle = "";
                  data.data[i].textStyle1 = "";
                }
                _this4.listData = data.data;

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this4);
      }))();
    },
    allCheck: function allCheck() {
      //先清空
      this.Listids = [];
      if (this.allcheck) {
        this.allcheck = false;
      } else {
        console.log("选择全部");

        this.allcheck = true;
        //循环遍历所有的商品id
        for (var i = 0; i < this.listData.length; i++) {
          var element = this.listData[i];
          this.Listids.push(element.goods_id);
        }
      }
    },
    change: function change(e) {},
    changeColor: function changeColor(index, id) {
      if (this.Listids[index]) {
        this.$set(this.Listids, index, false);
      } else {
        this.$set(this.Listids, index, id);
      }
    }
  },
  computed: {
    isCheckedNumber: function isCheckedNumber() {
      var number = 0;
      for (var i = 0; i < this.Listids.length; i++) {
        if (this.Listids[i]) {
          number++;
        }
      }
      if (number == this.listData.length && number != 0) {
        this.allcheck = true;
      } else {
        this.allcheck = false;
      }
      return number;
    },
    allPrise: function allPrise() {
      var Prise = 0;
      for (var i = 0; i < this.Listids.length; i++) {
        if (this.Listids[i]) {
          Prise = Prise + this.listData[i].retail_price * this.listData[i].number;
        }
      }
      return Prise;
    }
  }
});

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cart"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "cartlist"
  }, _vm._l((_vm.listData), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
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
      staticClass: "con",
      style: (item.textStyle)
    }, [_c('div', {
      staticClass: "left"
    }, [_c('div', {
      staticClass: "icon",
      class: [_vm.Listids[index] ? 'active' : '', {
        active: _vm.allcheck
      }],
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.changeColor(index, item.goods_id)
        }
      }
    }), _vm._v(" "), _c('div', {
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
    }, [_vm._v("\n            x" + _vm._s(item.number) + "\n          ")])])]), _vm._v(" "), _c('div', {
      staticClass: "delete",
      style: (item.textStyle1),
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.delGoods(item.id, index)
        }
      }
    }, [_c('div', [_vm._v("\n          删除\n        ")])])])
  })), _vm._v(" "), (false) ? _c('div', {
    staticClass: "nogoods"
  }, [_c('img', {
    attrs: {
      "src": "http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/noCart-a8fe3f12e5.png",
      "alt": ""
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "fixed"
  }, [_c('div', {
    staticClass: "left",
    class: {
      active: _vm.allcheck
    },
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.allCheck
    }
  }, [_vm._v("\n      全选(" + _vm._s(_vm.isCheckedNumber) + ")\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('div', [_vm._v("\n        ￥" + _vm._s(_vm.allPrise) + "\n      ")]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.orderDown
    }
  }, [_vm._v("下单")])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "top"
  }, [_c('div', [_vm._v("30天无忧退货")]), _vm._v(" "), _c('div', [_vm._v("48小时快速退款")]), _vm._v(" "), _c('div', [_vm._v("满88元免邮费")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4fa3d92a", esExports)
  }
}

/***/ })

},[135]);
//# sourceMappingURL=main.js.map
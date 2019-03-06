global.webpackJsonp([5],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(286);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3f1639f2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(289);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(287)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3f1639f2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3f1639f2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\search\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f1639f2", Component.options)
  } else {
    hotAPI.reload("data-v-3f1639f2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 287:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 288:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {},
  mounted: function mounted() {
    this.openid = wx.getStorageSync("openid") || "";
    this.getHotData();
  },
  data: function data() {
    return {
      nowIndex: 0,
      words: "",
      historyData: [],
      hotData: [],
      tipsData: [],
      listData: [],
      openid: "",
      order: "",
      isHot: "",
      isNew: ""
    };
  },

  components: {},
  methods: {
    goodsDetail: function goodsDetail(id) {
      wx.navigateTo({
        url: "/pages/goods/main?id=" + id
      });
    },
    cancel: function cancel() {
      wx.navigateBack({
        delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
      });
    },
    clearInput: function clearInput() {
      this.words = "";
      this.listData = [];
      this.tipsData = [];
    },
    inputFocus: function inputFocus() {
      //商品清空
      this.listData = [];
      //展示搜索提示信息
      this.tipsearch();
    },
    getlistData: function getlistData() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* get */])("/search/helperaction", {
                  keyword: _this.words,
                  order: _this.order
                });

              case 2:
                data = _context.sent;

                _this.listData = data.keywords;
                _this.tipsData = [];

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    changeTab: function changeTab(index) {
      this.nowIndex = index;
      if (index == 1) {
        this.order = this.order == "asc" ? "desc" : "asc";
      } else {
        this.order = "";
      }
      this.getlistData();
    },
    clearHistory: function clearHistory() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["f" /* post */])("/search/clearhistoryAction", {
                  openId: _this2.openid
                });

              case 2:
                data = _context2.sent;

                console.log(data);
                if (data) {
                  _this2.historyData = [];
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    searchWords: function searchWords(e) {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var vaule, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                vaule = e.currentTarget.dataset.value;

                _this3.words = vaule || _this3.words;
                _context3.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["f" /* post */])("/search/addhistoryaction", {
                  openId: _this3.openid,
                  keyword: vaule || _this3.words
                });

              case 4:
                data = _context3.sent;

                console.log(data);
                //获取历史数据
                _this3.getHotData();
                //获取商品列表
                _this3.getlistData();

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    getHotData: function getHotData(first) {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* get */])("/search/indexaction?openId=" + _this4.openid);

              case 2:
                data = _context4.sent;

                _this4.hotData = data.hotKeywordList;
                _this4.historyData = data.historyData;

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },
    tipsearch: function tipsearch(e) {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* get */])("/search/helperaction", {
                  keyword: _this5.words
                });

              case 2:
                data = _context5.sent;

                _this5.tipsData = data.keywords;

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, _this5);
      }))();
    },
    topicDetail: function topicDetail(id) {
      wx.navigateTo({
        url: "/pages/topicdetail/main?id=" + id
      });
    }
  },
  computed: {}
});

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search"
  }, [_c('div', {
    staticClass: "head"
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/search2-2fb94833aa.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.words),
      expression: "words"
    }],
    attrs: {
      "type": "text",
      "confirm-type": "search",
      "focus": "true",
      "placeholder": "商品搜索",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.words)
    },
    on: {
      "focus": _vm.inputFocus,
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.words = $event.target.value
      }, _vm.tipsearch],
      "confirm": _vm.searchWords
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "del",
    attrs: {
      "src": "http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/clearIpt-f71b83e3c2.png",
      "alt": "",
      "eventid": '1'
    },
    on: {
      "click": _vm.clearInput
    }
  })]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v("取消")])]), _vm._v(" "), (_vm.words) ? _c('div', {
    staticClass: "searchtips"
  }, [_vm._l((_vm.tipsData), function(item, index) {
    return (_vm.tipsData.length != 0) ? _c('div', {
      key: index,
      attrs: {
        "data-value": item.name,
        "eventid": '3-' + index
      },
      on: {
        "click": _vm.searchWords
      }
    }, [_vm._v("\n      " + _vm._s(item.name) + "\n    ")]) : _vm._e()
  }), _vm._v(" "), (_vm.tipsData.length == 0) ? _c('div', {
    staticClass: "nogoods"
  }, [_vm._v("\n      数据库暂无此类商品...\n    ")]) : _vm._e()], 2) : _vm._e(), _vm._v(" "), (_vm.historyData.length != 0) ? _c('div', {
    staticClass: "history"
  }, [_c('div', {
    staticClass: "t"
  }, [_c('div', [_vm._v("历史记录")]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.clearHistory
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "cont"
  }, _vm._l((_vm.historyData), function(item, index) {
    return _c('div', {
      key: index,
      attrs: {
        "data-value": item.keyword,
        "eventid": '5-' + index
      },
      on: {
        "click": _vm.searchWords
      }
    }, [_vm._v("\n        " + _vm._s(item.keyword) + "\n      ")])
  }))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "history hotsearch"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "cont"
  }, _vm._l((_vm.hotData), function(item, index) {
    return _c('div', {
      key: index,
      class: {
        active: 0 == index
      },
      attrs: {
        "data-value": item.keyword,
        "eventid": '6-' + index
      },
      on: {
        "click": _vm.searchWords
      }
    }, [_vm._v("\n        " + _vm._s(item.keyword) + "\n      ")])
  }))]), _vm._v(" "), (_vm.listData.length != 0) ? _c('div', {
    staticClass: "goodsList"
  }, [_c('div', {
    staticClass: "sortnav"
  }, [_c('div', {
    class: [0 == _vm.nowIndex ? 'active' : ''],
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.changeTab(0)
      }
    }
  }, [_vm._v("综合")]), _vm._v(" "), _c('div', {
    staticClass: "price",
    class: [1 == _vm.nowIndex ? 'active' : '', _vm.order == 'desc' ? 'desc' : 'asc'],
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": function($event) {
        _vm.changeTab(1)
      }
    }
  }, [_vm._v("价格")]), _vm._v(" "), _c('div', {
    class: [2 == _vm.nowIndex ? 'active' : ''],
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": function($event) {
        _vm.changeTab(2)
      }
    }
  }, [_vm._v("分类")])]), _vm._v(" "), _c('div', {
    staticClass: "sortlist"
  }, _vm._l((_vm.listData), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      class: [(_vm.listData.length) % 2 == 0 ? 'active' : 'none'],
      attrs: {
        "eventid": '10-' + index
      },
      on: {
        "click": function($event) {
          _vm.goodsDetail(item.id)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.list_pic_url,
        "alt": ""
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('p', {
      staticClass: "price"
    }, [_vm._v("￥" + _vm._s(item.retail_price))])], 1)
  }))]) : _vm._e()])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "t"
  }, [_c('div', [_vm._v("热门搜索")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3f1639f2", esExports)
  }
}

/***/ })

},[285]);
//# sourceMappingURL=main.js.map
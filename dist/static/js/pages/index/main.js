global.webpackJsonp([13],{

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(235);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a3569f44_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(238);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(236)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a3569f44"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a3569f44_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a3569f44", Component.options)
  } else {
    hotAPI.reload("data-v-a3569f44", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 236:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_amap_wx__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_amap_wx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__utils_amap_wx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__(23);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_5_vuex__["c" /* mapState */])(["cityName"])),
  mounted: function mounted() {
    this.getCityName();
    this.getData();
  },
  data: function data() {
    return {
      banner: [],
      channel: [],
      brandList: [],
      newGoods: [],
      hotGoods: [],
      topicList: [],
      newCategoryList: []
    };
  },

  components: {},
  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_5_vuex__["b" /* mapMutations */])(["update"]), {
    toMappage: function toMappage() {
      var _this = this;
      // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
      wx.getSetting({
        success: function success(res) {
          //如果没有同意授权,打开设置
          if (!res.authSetting["scope.userLocation"]) {
            wx.openSetting({
              success: function success(res) {
                _this.getCityName();
              }
            });
          } else {
            wx.navigateTo({
              url: "/pages/mappage/main"
            });
          }
        }
      });
    },
    getCityName: function getCityName() {
      var _this = this;
      var myAmapFun = new __WEBPACK_IMPORTED_MODULE_3__utils_amap_wx___default.a.AMapWX({
        key: "e545e7f79a643f23aef187add14e4548"
      });
      myAmapFun.getRegeo({
        success: function success(data) {
          //成功回调
          console.log(data);
          // data[0].regeocodeData.formatted_address
          // _this.cityName = data[0].regeocodeData.formatted_address;
          _this.update({ cityName: data[0].regeocodeData.formatted_address });
        },
        fail: function fail(info) {
          //失败回调
          console.log(info);
          //如果用户拒绝授权
          // 默认为北京
          _this.cityName = "北京市";
          _this.update({ cityName: "北京市" });
        }
      });
    },
    toSearch: function toSearch() {
      wx.navigateTo({
        url: "/pages/search/main"
      });
    },
    getData: function getData() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_4__utils__["b" /* get */])("/index/index");

              case 2:
                data = _context.sent;

                _this2.banner = data.banner;
                _this2.channel = data.channel;
                _this2.brandList = data.brandList;
                _this2.newGoods = data.newGoods;
                _this2.hotGoods = data.hotGoods;
                _this2.topicList = data.topicList;
                _this2.newCategoryList = data.newCategoryList;

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    goodsDetail: function goodsDetail(id) {
      wx.navigateTo({
        url: "/pages/goods/main?id=" + id
      });
    },
    categoryList: function categoryList(id) {
      wx.navigateTo({
        url: "/pages/categorylist/main?id=" + id
      });
    },
    goodsList: function goodsList(info) {
      if (info == "hot") {
        wx.navigateTo({
          url: "/pages/newgoods/main?isHot=" + 1
        });
      } else {
        wx.navigateTo({
          url: "/pages/newgoods/main?isNew=" + 1
        });
      }
    },
    topicdetail: function topicdetail(id) {
      wx.navigateTo({
        url: "/pages/topicdetail/main?id=" + id
      });
    },
    totopic: function totopic() {
      wx.navigateTo({
        url: "/pages/topic/main"
      });
    },
    tobrandList: function tobrandList() {
      wx.navigateTo({
        url: "/pages/brandlist/main"
      });
    },
    branddetail: function branddetail(id) {
      wx.navigateTo({
        url: "/pages/branddetail/main?id=" + id
      });
    }
  }),
  created: function created() {}
});

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('div', {
    staticClass: "search"
  }, [_c('div', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.toMappage
    }
  }, [_vm._v(_vm._s(_vm.cityName))]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toSearch
    }
  }, [_c('input', {
    attrs: {
      "type": "text",
      "placeholder": "搜索商品"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "icon"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "swiper"
  }, [_c('swiper', {
    staticClass: "swiper-container",
    attrs: {
      "indicator-dots": "true",
      "autoplay": "true",
      "interval": "3000",
      "circular": "true",
      "duration": "500"
    }
  }, _vm._l((_vm.banner), function(item, index) {
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
        "src": item.image_url
      }
    })])], 1)
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "channel"
  }, _vm._l((_vm.channel), function(item, index) {
    return _c('div', {
      key: index,
      attrs: {
        "eventid": '2-' + index
      },
      on: {
        "click": function($event) {
          _vm.categoryList(item.id)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.icon_url,
        "alt": ""
      }
    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.name))])], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "brand"
  }, [_c('div', {
    staticClass: "head",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.tobrandList
    }
  }, [_vm._v("\n      品牌制造商直供\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, _vm._l((_vm.brandList), function(item, index) {
    return _c('div', {
      key: index,
      attrs: {
        "eventid": '4-' + index
      },
      on: {
        "click": function($event) {
          _vm.branddetail(item.id)
        }
      }
    }, [_c('div', [_c('p', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.floor_price) + "元起")])], 1), _vm._v(" "), _c('img', {
      attrs: {
        "src": item.new_pic_url,
        "alt": ""
      }
    })])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "newgoods"
  }, [_c('div', {
    staticClass: "newgoods-top",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.goodsList('new')
      }
    }
  }, [_c('div', {
    staticClass: "top"
  }, [_c('p', [_vm._v("新品首发")]), _vm._v(" "), _c('p', [_vm._v("查看全部")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_c('ul', [_c('scroll-view', {
    staticClass: "scroll-view",
    attrs: {
      "scroll-x": true
    }
  }, _vm._l((_vm.newGoods), function(item, index) {
    return _c('li', {
      key: index,
      attrs: {
        "eventid": '6-' + index
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
    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.goods_brief))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(item.retail_price))])], 1)
  }))], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "newgoods hotgoods"
  }, [_c('div', {
    staticClass: "newgoods-top",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.goodsList('hot')
      }
    }
  }, [_c('div', {
    staticClass: "top"
  }, [_c('p', [_vm._v("人气推荐\n          "), _c('span'), _vm._v(" 好物精选")]), _vm._v(" "), _c('p', [_vm._v("查看全部")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_c('ul', [_c('scroll-view', {
    staticClass: "scroll-view",
    attrs: {
      "scroll-x": true
    }
  }, _vm._l((_vm.hotGoods), function(item, index) {
    return _c('li', {
      key: index,
      attrs: {
        "eventid": '8-' + index
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
    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.goods_brief))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(item.retail_price))])], 1)
  }))], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "topicList"
  }, [_c('div', {
    staticClass: "topicList-top",
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": _vm.totopic
    }
  }, [_vm._v("\n      专题精选\n      "), _c('span', {
    staticClass: "icon"
  })]), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_c('ul', [_c('scroll-view', {
    staticClass: "scroll-view",
    attrs: {
      "scroll-x": true
    }
  }, _vm._l((_vm.topicList), function(item, index) {
    return _c('li', {
      key: index,
      attrs: {
        "eventid": '10-' + index
      },
      on: {
        "click": function($event) {
          _vm.topicdetail(item.id)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.item_pic_url,
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "btom"
    }, [_c('div', [_c('p', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.subtitle))])], 1), _vm._v(" "), _c('div', [_vm._v("\n                " + _vm._s(item.price_info) + "元起\n              ")])])])
  }))], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "newcategory"
  }, _vm._l((_vm.newCategoryList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "list"
    }, [_c('div', {
      staticClass: "head"
    }, [_vm._v(_vm._s(item.name) + "好物")]), _vm._v(" "), _c('div', {
      staticClass: "sublist"
    }, [_vm._l((item.goodsList), function(subitem, subindex) {
      return _c('div', {
        key: subindex,
        attrs: {
          "eventid": '11-' + index + '-' + subindex
        },
        on: {
          "click": function($event) {
            _vm.goodsDetail(subitem.id)
          }
        }
      }, [_c('img', {
        attrs: {
          "src": subitem.list_pic_url,
          "alt": ""
        }
      }), _vm._v(" "), _c('p', [_vm._v(_vm._s(subitem.name))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(subitem.retail_price))])], 1)
    }), _vm._v(" "), _c('div', {
      attrs: {
        "eventid": '12-' + index
      },
      on: {
        "click": function($event) {
          _vm.categoryList(item.id)
        }
      }
    }, [_c('div', {
      staticClass: "last"
    }, [_c('p', [_vm._v(_vm._s(item.name) + "好物")]), _vm._v(" "), _c('span', {
      staticClass: "icon"
    })], 1)])], 2)])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a3569f44", esExports)
  }
}

/***/ })

},[234]);
//# sourceMappingURL=main.js.map
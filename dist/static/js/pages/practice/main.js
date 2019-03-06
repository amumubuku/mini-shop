global.webpackJsonp([6],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(281);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
    config: {
        navigationBarTitleText: 'heyushuo'
    }
});

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2e472a05_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(284);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(282)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2e472a05"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2e472a05_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\practice\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e472a05", Component.options)
  } else {
    hotAPI.reload("data-v-2e472a05", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 282:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(57);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  created: function created() {
    // this.onShareAppMessage()
    // wx.showShareMenu({
    //   withShareTicket: true
    // })
    // wx.hideShareMenu()
  },
  data: function data() {
    return {
      motto: "Hello World",
      userInfo: {},
      imgUrl: ""
    };
  },


  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]
  },

  methods: {
    onShareAppMessage: function onShareAppMessage(res) {
      console.log(res);
      return {
        title: "自定义转发标题",
        path: "/pages/index",
        imageUrl: "url",
        success: function success(res) {},
        fail: function fail() {},
        complete: function complete() {}
      };
    },
    navigateTo: function navigateTo() {
      wx.navigateTo({
        url: "/pages/counter/main?id=123&name=何玉硕"
      });
    },
    showModal: function showModal() {
      wx.showModal({
        title: "提示",
        content: "这是一个模态弹窗",
        success: function success(res) {
          if (res.confirm) {
            console.log("用户点击确定");
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    },
    showLoading: function showLoading() {
      wx.showLoading({
        title: "加载中"
      });
      setTimeout(function () {
        wx.hideLoading();
      }, 2000);
    },
    showtoast: function showtoast() {
      wx.showToast({
        title: "成功",
        icon: "success",
        duration: 2000
      });
    },
    chooseImg: function chooseImg() {
      var _this = this;
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths;
          console.log(res.tempFilePaths);
          _this.imgUrl = res.tempFilePaths;
        }
      });
    },
    previewImage: function previewImage() {
      wx.previewImage({
        current: "https://baike.baidu.com/pic/%E7%A7%91%E6%AF%94%C2%B7%E5%B8%83%E8%8E%B1%E6%81%A9%E7%89%B9/318773/0/9e3df8dcd100baa1a5fd20114d10b912c9fc2e42?fr=lemma&ct=single#aid=0&pic=9e3df8dcd100baa1a5fd20114d10b912c9fc2e42", // 当前显示图片的http链接
        urls: ["https://baike.baidu.com/pic/%E7%A7%91%E6%AF%94%C2%B7%E5%B8%83%E8%8E%B1%E6%81%A9%E7%89%B9/318773/0/9e3df8dcd100baa1a5fd20114d10b912c9fc2e42?fr=lemma&ct=single#aid=0&pic=9e3df8dcd100baa1a5fd20114d10b912c9fc2e42"] // 需要预览的图片http链接列表
      });
    },
    bindViewTap: function bindViewTap() {
      var url = "../logs/main";
      wx.navigateTo({ url: url });
    },
    getUserInfo: function getUserInfo() {
      // 调用登录接口
      // wx.login({
      //   success: () => {
      //     wx.getUserInfo({
      //       success: (res) => {
      //         this.userInfo = res.userInfo
      //       }
      //     })
      //   }
      // })
    },
    clickHandle: function clickHandle(msg, ev) {
      console.log("clickHandle:", msg, ev);
    }
  }
});

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.clickHandle('test click', $event)
      }
    }
  }, [_c('div', {
    staticClass: "userinfo",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.bindViewTap
    }
  }, [(_vm.userInfo.avatarUrl) ? _c('img', {
    staticClass: "userinfo-avatar",
    attrs: {
      "src": _vm.userInfo.avatarUrl,
      "background-size": "cover"
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "userinfo-nickname"
  }, [_c('card', {
    attrs: {
      "text": _vm.userInfo.nickName,
      "mpcomid": '0'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "picture"
  }, [_c('div', {
    staticClass: "btn"
  }, [_c('button', {
    attrs: {
      "type": "primary",
      "eventid": '1'
    },
    on: {
      "click": _vm.navigateTo
    }
  }, [_vm._v("跳转页面")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "picture"
  }, [_c('h3', [_vm._v("图片api相关1")]), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('button', {
    attrs: {
      "type": "primary",
      "eventid": '2'
    },
    on: {
      "click": _vm.chooseImg
    }
  }, [_vm._v("选择图片")]), _vm._v(" "), _c('button', {
    attrs: {
      "type": "primary",
      "eventid": '3'
    },
    on: {
      "click": _vm.previewImage
    }
  }, [_vm._v("预览图片")]), _vm._v(" "), _c('button', {
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("图片信息")])], 1), _vm._v(" "), (_vm.imgUrl) ? _c('img', {
    attrs: {
      "src": _vm.imgUrl,
      "alt": ""
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "picture"
  }, [_c('h3', [_vm._v("弹窗相关")]), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('button', {
    attrs: {
      "type": "primary",
      "eventid": '4'
    },
    on: {
      "click": _vm.showtoast
    }
  }, [_vm._v("showToast")]), _vm._v(" "), _c('button', {
    attrs: {
      "type": "primary",
      "eventid": '5'
    },
    on: {
      "click": _vm.showLoading
    }
  }, [_vm._v("showLoading")]), _vm._v(" "), _c('button', {
    attrs: {
      "type": "primary",
      "eventid": '6'
    },
    on: {
      "click": _vm.showModal
    }
  }, [_vm._v("showModal")])], 1), _vm._v(" "), _c('button', {
    staticStyle: {
      "width": "50%",
      "margin-top": "10rpx"
    },
    attrs: {
      "type": "primary",
      "open-type": "share"
    }
  }, [_vm._v("分享")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2e472a05", esExports)
  }
}

/***/ })

},[280]);
//# sourceMappingURL=main.js.map